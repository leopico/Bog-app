'use client'

import { FormEvent, useState } from "react"
import ContextFooter from "./ContextFooter"
import SmallLoader from "../SmallLoader";
import axios from "axios";
import { toast } from "react-hot-toast";
import { User } from "@prisma/client";
import useLoginModal from "@/app/hooks/useLoginModal";

interface FooterProps {
    currentUser?: User | null
}

const Footer: React.FC<FooterProps> = ({ currentUser }) => {
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const loginModal = useLoginModal();

    const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (!currentUser) {
            return loginModal.onOpen();
        }

        setIsLoading(true)
        console.log(message);
        axios.post('/api/subscribe', { message: message })
            .then(() => toast.success('Congratulation You have been subscribed'))
            .catch(() => toast.error('Something went wrong'))
            .finally(() => setIsLoading(false));
    }

    return (
        <>
            <div className="dark:bg-slate-800 p-4 h-10 flex justify-center items-center">
                {
                    isLoading && (
                        <SmallLoader />
                    )
                }
            </div>
            <div className="dark:bg-slate-800">
                <div className="border border-1 border-slate-700 
                    lg:w-[550px] bg-white rounded-xl mx-10 md:mx-20 lg:mx-auto
                    py-3 text-center text-[10px] lg:text-[16px] p-1 shadow-lg mb-3 dark:bg-gray-600 dark:shadow-md"
                >
                    <div className="p-4 space-y-3">
                        <h4 className="font-extrabold text-sm md:text-lg lg:text-xl">
                            Get in text with me 🤟🏼
                        </h4>
                        <p className="mx-10 font-bold text-[10px] lg:text-[12px]">
                            You can read our weekly blogs first after you have subscribed.Enter your registered email now 🚀.
                        </p>
                        <form onSubmit={onSubmit} className="flex dark:bg-slate-800 items-center justify-between rounded-lg w-full border border-1 border-gray-500 p-2 bg-white">
                            <input
                                onChange={(e) => setMessage(e.target.value)}
                                type="text"
                                placeholder="Enter Email Here"
                                className="w-full p-2 font-light rounded-md outline-none text-sm dark:bg-slate-800"
                            />
                            <button type="submit" className="text-sm bg-gray-600 p-1 py-3 rounded-lg text-white/80 hover:bg-gray-700 hover:text-white">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <ContextFooter />
            </div>
        </>
    )
}

export default Footer