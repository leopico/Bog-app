"use client"

import clsx from 'clsx';
import { useCallback, useState } from 'react';
import { BiDownArrow } from 'react-icons/bi'

const UserDropDown = () => {
    const [openIndex, setOpenIndex] = useState(-1); //-1 is closing position

    const toggleOpen = useCallback((index: any) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
    }, []);

    const users = ['mtt', 'lkk', 'aat', 'mg', 'kms'];

    return (
        <>
            {users.map((user, index) => (
                <div key={user}>
                    <div className="flex px-4 sm:px-6 py-2 sm:py-4 justify-between items-center">
                        <h1 className="text-[12px] sm:text-[16px] font-semibold sm:font-bold">{user}</h1>
                        <div className='relative'>
                            <div
                                onClick={() => toggleOpen(index)}
                                className='flex justify-center items-center'
                            >
                                <button className="px-4 py-2 text-[12px] sm:text-[16px] font-semibold">choose option</button>
                                <span><BiDownArrow /></span>
                            </div>
                            {openIndex === index && (
                                <div
                                    className='bg-gray-200 dark:bg-gray-600 absolute z-10 w-full 
                                    flex flex-col rounded sm:mt-1 p-1 sm:p-2 
                                    list-none text-[12px] sm:text-[16px] font-bold dark:text-white'
                                >
                                    <li
                                        className={clsx(
                                            'hover:bg-gray-300 dark:hover:bg-slate-800 cursor-pointer p-1 rounded',
                                            true ? 'bg-gray-300 dark:bg-slate-800' : 'bg-gray-200 dark:bg-slate-600'
                                        )}
                                    >
                                        user
                                    </li>
                                    <li className='hover:bg-gray-300 dark:hover:bg-slate-800 cursor-pointer p-1 rounded'>
                                        admin
                                    </li>
                                </div>
                            )}
                        </div>
                    </div>
                    <hr />
                </div>
            ))}
        </>
    );
};

export default UserDropDown;