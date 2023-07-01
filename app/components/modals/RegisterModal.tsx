'use client'

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from 'react';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";

import Heading from "../Heading";
import Input from "../Input";
import Button from "../Button";

import { toast } from "react-hot-toast";
import axios from "axios";
import { signIn } from "next-auth/react";


const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const { //for form activity
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        axios.post('/api/register', data)
            .then(() => {
                setTimeout(() => {
                    toast.success('Success!,Send notification in your mail! Verify Your Identity');
                }, 6000);
                registerModal.onClose();
                loginModal.onOpen();
            })
            .catch((error) => {
                toast.error("Error", error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    };

    const toggle = useCallback(() => {
        loginModal.onOpen();
        registerModal.onClose();
    }, [loginModal, registerModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome to LPC Blog" subtitle="Create an account!" />
            <Input bg={true} id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
            <Input bg={true} id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
            <Input bg={true} id="password" label="Password" type="password" disabled={isLoading} register={register} errors={errors} required />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button bg={true} outline label="Continue with Google" icon={FcGoogle} onClick={() => signIn('google')} />
            <Button bg={true} outline label="Continue with Github" icon={AiFillGithub} onClick={() => signIn('github')} />
            <div className=" text-neutral-500 text-center mt-4 font-light">
                <div className="flex flex-row justify-center gap-2 items-center dark:text-white">
                    <div>Already have an account?</div>
                    <div onClick={toggle} className="text-neutral-800 cursor-pointer
                     hover:underline font-semibold dark:text-white">
                        Log in
                    </div>
                </div>
            </div>
        </div>
    )


    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal;