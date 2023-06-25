'use client'

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { CiDark } from 'react-icons/ci';
import { MdLightMode } from 'react-icons/md'

const ThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    //this is solution for hydration
    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null
    };

    return (
        <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className='flex items-center justify-center p-2 transition-all'
        >
            {resolvedTheme === 'dark' ? (
                <MdLightMode size={40} className='hover:bg-gray-300 dark:hover:bg-gray-500 p-2 hover:rounded-full dark:text-[#d1d5db]' />
            ) : (
                <CiDark size={40} className='hover:bg-slate-300 dark:hover:bg-gray-500 p-2 hover:rounded-full dark:text-[#d1d5db]' />
            )
            }
        </button>
    )
}

export default ThemeButton