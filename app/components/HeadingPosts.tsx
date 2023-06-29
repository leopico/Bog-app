'use client'

import { useState, useCallback } from 'react';
import GlobalImage from "./GlobalImage"
import { CiSaveDown2 } from 'react-icons/ci'
import ToolTip from "./ToolTip";
import { Post, User } from "@prisma/client";
import ClientPosts from "./ClientPosts";
import { usePagination } from "../hooks/usePagination";
import Pagination from "./Pagination";

interface HeadingPostsProps {
    title: string
    posts: Post[]
    currentUser?: User | null
}

const HeadingPosts: React.FC<HeadingPostsProps> = ({ title, posts, currentUser }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 2; //this is how many blog posts in one page

    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page);
    }, [])

    const paginatePosts = usePagination({ posts, currentPage, pageSize })


    return (
        <section id="posts" className="container mx-auto p-4 pt-12 pb-1">
            <h1 className="font-extrabold text-sm sm:text-xl lg:text-2xl text-center">{title}</h1>
            <div className="flex flex-col h-full">
                <div className="flex-grow overflow-y-auto">
                    <div className="flex flex-col">
                        <ClientPosts posts={paginatePosts} currentUser={currentUser} />
                    </div>
                </div>
                <div className="mt-auto">
                    <Pagination
                        items={posts.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </section>
    )
}

export default HeadingPosts