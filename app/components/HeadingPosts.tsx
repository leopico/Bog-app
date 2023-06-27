'use client'

import { useState } from "react";
import GlobalImage from "./GlobalImage"
import { CiSaveDown2 } from 'react-icons/ci'
import ToolTip from "./ToolTip";
import { Post, User } from "@prisma/client";
import ClientPosts from "./ClientPosts";

interface HeadingPostsProps {
    title: string
    posts: Post[]
    currentUser?: User | null
}

const HeadingPosts: React.FC<HeadingPostsProps> = ({ title, posts, currentUser }) => {
    const exposts = ["one", "two", "three", "four", "five", "six", "seven"];
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 2; //this is how many blog posts in one page

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    return (
        <section id="posts" className="container mx-auto p-4 pt-12 pb-1">
            <h1 className="font-extrabold text-sm sm:text-xl lg:text-2xl text-center">{title}</h1>
            <ClientPosts posts={posts} currentUser={currentUser} />
        </section>
    )
}

export default HeadingPosts