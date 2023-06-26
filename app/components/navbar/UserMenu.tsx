'use client'

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "../MenuItem";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { toast } from "react-hot-toast";

interface UserMenuProps {
    user: User | null
}

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value); //triggle for open and close
    }, [])
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div onClick={toggleOpen} className="p-4 md:py-1 md:px-2 border-[1px]
                 border-neutral-200 dark:text-black/50 dark:bg-[#d1d5db] dark:border-gray-600
                flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar src={user?.image} />
                    </div>
                </div>
            </div>
            {
                isOpen && (
                    <div className='absolute z-10 rounded-xl shadow-md
                    dark:bg-[#d1d5db] dark:text-black/50
                     w-[40vw] md:w-[15vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                        <div className='flex flex-col cursor-pointer'>
                            {
                                user ? (
                                    <>
                                        <MenuItem onClick={() => toast.success('Your name')} label={user.name} />
                                        <MenuItem onClick={() => signOut()} label='Logout' />
                                    </>
                                ) : (
                                    <>
                                        <MenuItem onClick={loginModal.onOpen} label='Login' />
                                        <MenuItem onClick={registerModal.onOpen} label='Sign up' />
                                    </>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default UserMenu