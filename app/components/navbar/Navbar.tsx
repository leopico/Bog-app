'use client'

import { useState } from 'react';
import Logo from './Logo';
import Search from './Search';
import ThemeButton from './ThemeButton';
import UserMenu from './UserMenu';
import GlobalImage from '../GlobalImage';
import Sidebar from './Sidebar';
import useUsersRoutes from '@/app/hooks/useUsersRoutes';
import useAdminRoutes from '@/app/hooks/useAdminRoutes';
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from 'next/navigation';
import { User } from '@prisma/client';

interface NavBarProps {
    currentUser: User | null
}

const Navbar: React.FC<NavBarProps> = ({ currentUser }) => {
    const role = currentUser?.role;

    const [nav, setNav] = useState(false);
    const usersroute = useUsersRoutes();
    const adminroute = useAdminRoutes();
    const router = useRouter();

    return (
        <div className='fixed w-full z-10 bg-white shadow-sm dark:bg-slate-800 dark:shadow-md'>
            <div className='container mx-auto'>
                <div className='Font max-w-[1640px] mx-auto flex justify-between items-center p-4'>
                    <div onClick={() => setNav(!nav)}>
                        <Logo />
                    </div>
                    <div className='hidden sm:flex sm:mr-1 items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                        <div onClick={() => router.push('/')} className='bg-black text-white rounded-full p-2 cursor-pointer'>
                            <GlobalImage
                                priority={true}
                                className='rounded-full'
                                alt='logo'
                                width={40}
                                height={30}
                                src='/images/logo.jpg'
                            />
                        </div>
                        <p className='p-2 dark:text-black/50'>Blog</p>
                    </div>
                    <div className='bg-gray-300 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] hover:bg-gray-200'>
                        <Search />
                    </div>
                    <div className='cursor-pointer'>
                        <ThemeButton />
                    </div>
                    <UserMenu user={currentUser} />
                    {
                        nav ? (
                            <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'></div>
                        ) : ""
                    }
                    <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500 dark:bg-black/50 dark:text-white'
                        : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500 dark:bg-black/50 dark:text-white'}>
                        <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
                        <h2 className='text-2xl p-4'>Blog <span className='font-bold'>Menu</span></h2>
                        <nav>

                            {
                                role === 'user' ? (
                                    <ul role='list'
                                        className='flex flex-col p-4 text-gray-800 dark:text-white/90 '>
                                        {
                                            usersroute.map((item) => (
                                                <Sidebar
                                                    key={item.label}
                                                    href={item.href}
                                                    label={item.label}
                                                    icon={item.icon}
                                                    active={item.active}
                                                    onClick={() => setNav(!nav)}
                                                />
                                            ))
                                        }
                                    </ul>
                                ) : (
                                    <ul role='list'
                                        className='flex flex-col p-4 text-gray-800 dark:text-white/90 '>
                                        {
                                            adminroute.map((item) => (
                                                <Sidebar
                                                    key={item.label}
                                                    href={item.href}
                                                    label={item.label}
                                                    icon={item.icon}
                                                    active={item.active}
                                                    onClick={() => setNav(!nav)}
                                                />
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar