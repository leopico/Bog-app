'use client'

import { useCallback, useState } from 'react';

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Input";
import Button from "../Button";

import toast from 'react-hot-toast';

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";

import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react';


const LoginModal = () => {
    const [isLoading, setIsLoading] = useState(false);

    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const router = useRouter();

    const { //for form activity
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    })


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        signIn("credentials", {
            ...data,
            redirect: false
        })
            .then((callback) => {
                setIsLoading(false);
                if (callback?.error) {
                    toast.error(callback?.error);
                } else {
                    toast.success('Logged in');
                    router.refresh();
                    loginModal.onClose();
                }
            })
            .catch(() => {
                toast.error('Something went wrong');
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const toggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome back" subtitle="Login to your account!" />
            <Input bg={true} id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
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
                    <div>First time using LPC Blog?</div>
                    <div onClick={toggle} className="text-neutral-800 cursor-pointer
                     hover:underline font-semibold dark:text-white">
                        Create an account
                    </div>
                </div>
            </div>
        </div>
    )


    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Continue"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal