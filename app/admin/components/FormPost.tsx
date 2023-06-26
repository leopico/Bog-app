'use client'

import Input from "@/app/components/Input"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import TextEditor from "./TextEditor"
import { CldUploadButton } from "next-cloudinary"
import GlobalImage from "@/app/components/GlobalImage"
import Button from "@/app/components/Button"
import { AiOutlineCloudUpload } from 'react-icons/ai'


const FormPost = () => {
    const [isLoading, setIsLoading] = useState(false);



    const { //for form activity
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            //set the value all data
            image: '/images/hero-img.jpg'
        }
    });

    const image = watch('image')

    const handleUpload = (result: any) => {
        setValue('image', result?.info?.secure_url, {
            shouldValidate: true
        })
    }

    return (
        <div className="w-full mt-3 sm:mt-5 lg:mt-7 space-y-14">
            <div className="p-1 sm:p-2 lg:p-3 space-y-5 sm:space-y-10 border border-gray-500 rounded">
                <Input id="title" label="Title" type="text" bg={true} disabled={isLoading} register={register} errors={errors} required />
                <div
                    className="border border-gray-500 border-dotted w-full
                     rounded h-28 sm:h-32 flex items-center justify-evenly
                     cursor-pointer font-bold bg-white dark:bg-gray-600 dark:border-slate-800">
                    <GlobalImage
                        width={150}
                        height={150}
                        alt="upload-img"
                        className="rounded"
                        src={image || '/images/hero-img.jpg'}
                    />
                    <CldUploadButton
                        options={{ maxFiles: 1 }}
                        onUpload={handleUpload}
                        uploadPreset="mvvi7xqi"
                    >
                        <AiOutlineCloudUpload size={50} className=" dark:text-white" />
                    </CldUploadButton>
                </div>
                <TextEditor />
                <div>
                    <Button outline label="submit" onClick={() => { }} bg={true} />
                </div>
            </div>
        </div>
    )
}

export default FormPost