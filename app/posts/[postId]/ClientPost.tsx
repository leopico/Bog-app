"use client"

import GlobalImage from "@/app/components/GlobalImage";
import { Post, User } from "@prisma/client";
import Link from "next/link";
import { FaGithubAlt } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';

interface ClientPostsProps {
    post: Post & {
        poster: User | null
    }
}

const ClientPost: React.FC<ClientPostsProps> = ({ post }) => {

    const createdAt = post?.poster?.createdAt ? post.poster.createdAt.toLocaleString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    }) : '';

    return (
        <>
            <div className="flex flex-col space-y-2">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center">{post.title}</h1>
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex items-center">
                        <GlobalImage
                            alt="post-avatar"
                            src={post.poster?.image || "/images/placeholder.jpg"}
                            width={60}
                            height={60}
                            className="rounded-full"
                        />
                        <div className="ml-3 md:mt-0">
                            <p className="text-sm sm:text-base p-0 m-0 hover:underline font-semibold">{post.poster?.name}</p>
                            <div className="flex items-center">
                                <span className="mr-2 text-xs hover:underline font-bold">{createdAt}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between text-end items-center min-w-[25px] gap-1">
                        <span className="mt-[10px]">
                            <div className="github">
                                <Link passHref href="https://www.github.com/leopico" target="_blank">
                                    <FaGithubAlt size={30} color='black' />
                                </Link>
                            </div>
                        </span>
                        <span className="mt-[10px]">
                            <div className="website">
                                <Link passHref href="https://portfolio-leopico.vercel.app" target="_blank">
                                    <GiWorld size={25} color="gray" />
                                </Link>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-5 w-full relative">
                <div className="w-full h-[40vh] lg:h-[80vh]">
                    <GlobalImage
                        alt="Image"
                        src={post.image || '/images/hero-img.jpg'}
                        className="object-cover rounded-lg  mx-auto"
                        fullfill={true}
                    />
                </div>
            </div>
            <div className="text-lg mx-auto leading-9 p-1 py-5 font-bold">
                <p dangerouslySetInnerHTML={{ __html: post.body }}></p>
            </div>
        </>
    )
}

export default ClientPost