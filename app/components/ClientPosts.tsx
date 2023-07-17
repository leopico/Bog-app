"use client"

import React from 'react'
import GlobalImage from './GlobalImage'
import { Post, User } from '@prisma/client';
import { useState, useEffect, useCallback } from 'react';
import EmptyState from './EmptyState';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import WatchLaterButton from './WatchLaterButton';
import SmallLoader from './SmallLoader';
import Link from 'next/link';

interface ClientPostsProps {
    posts: Post[]
    currentUser?: User | null
}

const ClientPosts: React.FC<ClientPostsProps> = ({ posts, currentUser }) => {
    const router = useRouter();
    const role = currentUser?.role;
    const [mounted, setMounted] = useState(false);
    const [deletingId, setDeletingId] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const handleDelete = useCallback((e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        e.stopPropagation();
        setIsLoading(true);
        setDeletingId(id);
        axios.delete(`/api/posting/${id}`)
            .then(() => {
                toast.success('Post deleted');
                router.refresh();
                setIsLoading(false);
            })
            .catch(() => toast.error('Something went wrong'))
            .finally(() => setDeletingId(''));
    }, [router]);

    const handleSetIsLoading = (value: boolean) => {
        setIsLoading(value)
    }


    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null
    }

    if (posts.length === 0) {
        return (
            <EmptyState
                title='No Posts Found'
                subtitle='Looks like you have no posting'
            />
        )
    };

    return (
        <>
            <div className=' h-10 flex items-center justify-end mt-2 p-3'>
                {
                    isLoading && (
                        <SmallLoader />
                    )
                }
            </div>
            <div className="grid md:grid-cols-2 gap-6 py-6">
                {
                    posts.map((post) => {
                        const trancatedTitle = `${post.title.slice(0, 20)}...`;
                        const trancatedBody = `${post.body.slice(0, 30)}...`;
                        return (
                            <div key={post.id} onClick={() => router.push(`/posts/${post.id}`)}
                                className="bg-gray-200 flex flex-col relative sm:flex-row
                             mx-10 sm:mx-0 p-1 hover:cursor-pointer hover:shadow-md dark:bg-gray-600">
                                <div className='relative h-36 w-full md:w-48 '>
                                    <GlobalImage
                                        className="p-2 object-cover mx-auto"
                                        alt="post-img"
                                        src={post.image}
                                        fullfill={true}
                                    />
                                </div>

                                <div className="flex flex-col w-full overflow-hidden">
                                    <div className="flex justify-around items-center">
                                        <h1 className="text-center font-extrabold text-[12px] sm:text-lg lg:text-xl">
                                            {trancatedTitle}
                                        </h1>
                                        <WatchLaterButton postId={post.id} currentUser={currentUser} setIsLoading={handleSetIsLoading} />
                                    </div>
                                    <p
                                        className="text-sm text-left mt-1 p-2"
                                        dangerouslySetInnerHTML={{ __html: trancatedBody }}
                                    ></p>
                                    {
                                        role === 'admin' && (
                                            <>
                                                <button onClick={(e) => handleDelete(e, post.id)} disabled={deletingId === post.id && true}
                                                    className="text-center mt-2 w-full bg-red-500 hover:bg-red-600 text-white font-bold  rounded"
                                                >
                                                    delete
                                                </button>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default ClientPosts