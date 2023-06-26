'use client'

import { useState } from "react";
import GlobalImage from "./GlobalImage"
import { CiSaveDown2 } from 'react-icons/ci'
import ToolTip from "./ToolTip";

interface HeadingPostsProps {
    title: string
}

const HeadingPosts: React.FC<HeadingPostsProps> = ({ title }) => {
    const posts = ["one", "two", "three", "four", "five", "six", "seven"];
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 2; //this is how many blog posts in one page

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    return (
        <section id="posts" className="container mx-auto p-4 pt-12 pb-1">
            <h1 className="font-extrabold text-sm sm:text-xl lg:text-2xl text-center">{title}</h1>
            <div className="grid md:grid-cols-2 gap-6 py-6">
                <div className="bg-gray-200 flex flex-col relative sm:flex-row
                 mx-10 sm:mx-0 p-1 hover:cursor-pointer hover:shadow-md dark:bg-gray-600">
                    <GlobalImage
                        className="p-2 object-cover mx-auto"
                        alt="post-img"
                        src="/images/hero-img.jpg"
                        width={200}
                        height={100}
                    />
                    <div className="flex flex-col w-full overflow-hidden">
                        <div className="flex justify-around items-center">
                            <h1 className="text-center font-extrabold text-sm sm:text-lg lg:text-xl">This is header</h1>
                            <ToolTip text="Watch Later">
                                <span className="sm:p-1 rounded">
                                    <CiSaveDown2 size={25} />
                                </span>
                            </ToolTip>
                        </div>
                        <p className="text-sm text-left mt-1">This is paragraph Lorem ipsum dolor sit amet consectetur.....</p>
                    </div>
                </div>
                <div className="bg-gray-200 flex flex-col relative sm:flex-row 
                mx-10 sm:mx-0 p-1 hover:cursor-pointer hover:shadow-md dark:bg-gray-600">
                    <GlobalImage
                        className="p-2 object-cover mx-auto"
                        alt="post-img"
                        src="/images/hero-img.jpg"
                        width={200}
                        height={100}
                    />
                    <div className="flex flex-col w-full overflow-hidden">
                        <div className="flex justify-around items-center">
                            <h1 className="text-center font-extrabold text-sm sm:text-lg lg:text-xl">This is header</h1>
                            <ToolTip text="Watch Later">
                                <span className="sm:p-1 rounded">
                                    <CiSaveDown2 size={25} />
                                </span>
                            </ToolTip>
                        </div>
                        <p className="text-sm text-left mt-1">This is paragraph Lorem ipsum dolor sit amet consectetur.....</p>
                    </div>
                </div>
                <div className="bg-gray-200 flex flex-col relative sm:flex-row 
                mx-10 sm:mx-0 p-1 hover:cursor-pointer hover:shadow-md dark:bg-gray-600">
                    <GlobalImage
                        className="p-2 object-cover mx-auto"
                        alt="post-img"
                        src="/images/hero-img.jpg"
                        width={200}
                        height={100}
                    />
                    <div className="flex flex-col w-full overflow-hidden">
                        <div className="flex justify-around items-center">
                            <h1 className="text-center font-extrabold text-sm sm:text-lg lg:text-xl">This is header</h1>
                            <ToolTip text="Watch Later">
                                <span className="sm:p-1 rounded">
                                    <CiSaveDown2 size={25} />
                                </span>
                            </ToolTip>
                        </div>
                        <p className="text-sm text-left mt-1">This is paragraph Lorem ipsum dolor sit amet consectetur.....</p>
                    </div>
                </div>
                <div className="bg-gray-200 flex flex-col relative sm:flex-row 
                mx-10 sm:mx-0 p-1 hover:cursor-pointer hover:shadow-md dark:bg-gray-600">
                    <GlobalImage
                        className="p-2 object-cover mx-auto"
                        alt="post-img"
                        src="/images/hero-img.jpg"
                        width={200}
                        height={100}
                    />
                    <div className="flex flex-col w-full overflow-hidden">
                        <div className="flex justify-around items-center">
                            <h1 className="text-center font-extrabold text-sm sm:text-lg lg:text-xl">This is header</h1>
                            <ToolTip text="Watch Later">
                                <span className="sm:p-1 rounded">
                                    <CiSaveDown2 size={25} />
                                </span>
                            </ToolTip>
                        </div>
                        <p className="text-sm text-left mt-1">This is paragraph Lorem ipsum dolor sit amet consectetur.....</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeadingPosts