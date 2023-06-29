'use client'

import { useState, useCallback } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Input";

import useSearchModal from '@/app/hooks/useSearchModal';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

interface SearchModalProps {
    postsTitle: { title: string, id: string }[]
}

const SearchModal: React.FC<SearchModalProps> = ({ postsTitle }) => {
    const [searchResult, setSearchResult] = useState<{ title: string, id: string }[]>([]);
    const searchModal = useSearchModal();

    const router = useRouter();

    const handlePostClick = useCallback((postId: string) => {
        router.push(`/posts/${postId}`)
        searchModal.onClose()
    }, [router, searchModal])


    const { //for form activity
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            search: ''
        }
    });


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const query = await data.search.toLowerCase();
        const resutls = postsTitle.filter((post) => post.title.toLowerCase().includes(query));
        setSearchResult(resutls.map((post) => ({ title: post.title, id: post.id })))
    };




    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome from my blog" subtitle="Search with title of posts" center />
            <Input bg={true} id="search" label="Search" register={register} errors={errors} required />
        </div>
    );

    const searchContent = (
        searchResult.length > 0 ? (
            <ul className='space-y-1'>
                {searchResult.map((post) => (
                    <li key={post.id} className='bg-gray-300 hover:bg-gray-500 rounded p-1 dark:text-black'>
                        <div onClick={() => handlePostClick(post.id)}>{post.title}</div>
                    </li>
                ))}
            </ul>
        ) : (
            <p className='text-center font-bold'>No results found.</p>
        )
    );


    return (
        <Modal
            isOpen={searchModal.isOpen}
            title="Search"
            actionLabel="Search"
            onClose={searchModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            search={searchContent}
        />
    );
}

export default SearchModal;