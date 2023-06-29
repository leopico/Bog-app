'use client'

import useSearchModal from '@/app/hooks/useSearchModal';
import { AiOutlineSearch } from 'react-icons/ai';


const Search = () => {
    return (
        <>
            <button className='w-full p-2 flex items-center dark:text-black/50'>
                <AiOutlineSearch size={25} />
                <span className='ml-6 text-sm'>Search...</span>
            </button>
        </>
    )
}

export default Search