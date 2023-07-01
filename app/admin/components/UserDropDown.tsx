"use client"

import SmallLoader from '@/app/components/SmallLoader';
import { User } from '@prisma/client';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

interface UserDropDownProps {
    users: { email: string | null, role: string }[]
}

const UserDropDown: React.FC<UserDropDownProps> = ({ users }) => {

    const router = useRouter();
    const [selectOption, setSelectOption] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleOptionChange = useCallback(async (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.stopPropagation();
        const selectedOption = e.target.value;
        setSelectOption(selectedOption);
    }, []);

    useEffect(() => {
        const updateRole = async () => {
            setIsLoading(true);
            const [role, email] = selectOption.split('-');
            const roleChanged = { role, email };
            try {
                await axios.post('/api/updaterole', roleChanged);
                toast.success('role updated');
                router.refresh();
            } catch (error) {
                toast.error('something went wrong');
            } finally {
                setIsLoading(false);
            }
        };

        if (selectOption) {
            updateRole();
        }
    }, [selectOption, router]);

    if (!Array.isArray(users)) {
        return null
    }

    return (
        <>
            <div className='h-10 flex justify-end items-center p-4 mt-2'>
                {
                    isLoading && (
                        <SmallLoader />
                    )
                }
            </div>
            {users.map((user: any) => (
                <div key={user.email}>
                    <div className="flex px-4 sm:px-6 py-2 sm:py-4 justify-between items-center">
                        <h1 className="text-[12px] sm:text-[16px] font-semibold sm:font-bold">{user.email}</h1>
                        <select
                            onChange={handleOptionChange}
                            value={selectOption}
                            className=' outline-none p-1 rounded text-[10px] sm:text-[16px] font-semibold sm:font-bold cursor-pointer'
                        >
                            <option value="">current({user.role})</option>
                            <option value={`user-${user.email}`}
                                className={clsx(
                                    selectOption === 'user' ? 'bg-gray-500 text-white dark:bg-slate-800' : 'bg-gray-200 dark:bg-slate-600'
                                )}
                            >
                                User
                            </option>
                            <option value={`admin-${user.email}`}
                                className={clsx(
                                    selectOption === 'admin' ? 'bg-gray-500 text-white dark:bg-slate-800' : 'bg-gray-200 dark:bg-slate-600'
                                )}
                            >
                                Admin
                            </option>
                        </select>
                    </div >
                </div>
            ))}
            <hr />
        </>
    );
};

export default UserDropDown;