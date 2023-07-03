'use client';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import Link from 'next/link';
import { FaGithubAlt } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi'
import EmailLink from './EmailLink';

const ContextFooter = () => {
    const registerModal = useRegisterModal();
    return (
        <footer className="w-full text-white py-4 bg-gray-600">
            <div className="mx-6 lg:mx-20 flex flex-col md:flex-row text-center
             md:justify-around lg:justify-between flex-wrap space-y-6"
            >
                <div className="space-y-4 col-span-2 w-[100%] text-center lg:text-left lg:pl-3 lg:w-[40%]">
                    <h5 className="text-[14px] lg:text-2xl font-semibold"> LPC Blog </h5>
                    <p className="text-[12px] md:text-[14px] leading-8 font-thin mx-14 sm:mx-30 md:mx-20 lg:mx-0 ">
                        LPC Blog has been built for those who are studying web development. Start
                        <button type="button" onClick={registerModal.onOpen} className="ml-2 cursor-pointer text-black underline font-extrabold">
                            Register Now
                        </button>
                        &nbsp;and improve your skills by diving into our quality blogs.
                    </p>
                </div>
                <div className="space-y-4">
                    <h5 className="text-[15px] md:text-2xl font-semibold"> Navigation </h5>
                    <ul className="text-[13px] md:text-sm font-thin space-y-2">
                        <li><Link href="/"> Home </Link></li>
                        <li><Link href="/watch-later"> Watch Later </Link></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h5 className="text-[15px] md:text-2xl font-semibold"> Contact us </h5>
                    <ul className="text-[13px] md:text-sm font-thin">
                        <li>
                            <a href="tel:+959677411000" className="hover:under hover:text-black hover:font-bold">
                                09-677-411-000
                            </a>
                        </li>
                        <li>
                            <EmailLink />
                        </li>
                    </ul>
                    <div className="flex items-center justify-center space-x-3">
                        <div className="github">
                            <Link passHref href="https://www.github.com/leopico" target="_blank" rel="noopener noreferrer">
                                <FaGithubAlt size={30} color='black' />
                            </Link>

                        </div>
                        <div className='link'>
                            <Link passHref href="https://portfolio-leopico.vercel.app" target="_blank" rel="noopener noreferrer">
                                <GiWorld size={25} color="gray" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center font-extrabold pt-8 pb-4 lg:pb-16 text-white/60 text-[10px] lg:text-[14px]">
                © 2023 <span className='text-[10px] lg:text-[12px]'>powered by</span> Leopico
            </div>
        </footer>
    )
}

export default ContextFooter