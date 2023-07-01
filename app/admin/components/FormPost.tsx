'use client'

import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { CldUploadButton } from "next-cloudinary";
import GlobalImage from "@/app/components/GlobalImage";
import Button from "@/app/components/Button";
import { AiOutlineCloudUpload } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic';
import Input from "@/app/components/Input";

const TextEditor = dynamic(() => import("./TextEditor"), { ssr: false }); //this is not included prebuild at SSR
const FormPost = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            title: "",
            image: "",
            content: ""
        }
    });

    const image = watch("image");

    const handleUpload = (result: any) => {
        setValue("image", result?.info?.secure_url, {
            shouldValidate: true
        });
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios
            .post("/api/posting", data)
            .then(() => {
                toast.success("Successfully posted!");
            })
            .catch(() => toast.error("Something went wrong!"))
            .finally(() => {
                setIsLoading(false);
                router.push("/admin");
                router.refresh();
            });
    };

    return (
        <div className="w-full mt-3 sm:mt-5 lg:mt-7 space-y-14">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-1 sm:p-2 lg:p-3 space-y-5 sm:space-y-10 border border-gray-500 rounded"
            >
                <Input
                    id="title"
                    label="Title"
                    type="text"
                    bg={true}
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <div className="border border-gray-500 border-dotted w-full h-auto p-4 sm:p-8 rounded flex items-center justify-evenly cursor-pointer font-bold bg-white dark:bg-gray-600 dark:border-slate-800">
                    <GlobalImage
                        width={150}
                        height={100}
                        alt="upload-img"
                        className="rounded"
                        src={image || "/images/hero-img.jpg"}
                    />
                    <CldUploadButton
                        options={{ maxFiles: 1 }}
                        onUpload={handleUpload}
                        uploadPreset="mvvi7xqi"
                    >
                        <AiOutlineCloudUpload size={50} className="dark:text-white" />
                    </CldUploadButton>
                </div>
                <TextEditor
                    id="content"
                    disabled={isLoading}
                    setValue={setValue}
                />
                <div>
                    <Button
                        outline
                        type="submit"
                        label="submit"
                        bg={true}
                        disabled={isLoading}
                    />
                </div>
            </form>
        </div>
    );
};

export default FormPost;
