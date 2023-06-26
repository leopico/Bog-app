import GlobalImage from "@/app/components/GlobalImage"


const DashboardPage = () => {
    return (
        <section className="container mx-auto p-4 py-12">
            <h1 className="font-extrabold text-sm sm:text-xl md:text-2xl lg:text-4xl text-center">
                My Blog Posts <span className="text-sm lg:text-xl">(delet / update)</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-6 py-6">
                <div className="card bg-gray-200 flex flex-col sm:flex-row 
                mx-10 sm:mx-0 p-1 hover:cursor-pointer hover:shadow-md dark:bg-gray-600">
                    <GlobalImage
                        className="p-2 object-cover mx-auto"
                        alt="post-img"
                        src="/images/hero-img.jpg"
                        width={200}
                        height={100}
                    />
                    <div className="flex flex-col w-full overflow-hidden">
                        <h1 className="text-center font-extrabold text-xl">This is header</h1>
                        <p className="text-sm text-left">
                            This is paragraph Lorem ipsum dolor sit amet consectetur.....
                        </p>
                        <button className="hidden card-button mt-2 w-full bg-red-500 hover:bg-red-600 text-white font-bold  rounded">
                            delete
                        </button>
                        <button className="hidden card-button mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded">
                            update
                        </button>
                    </div>
                </div>
                <div className="card bg-gray-200 flex flex-col sm:flex-row
                 mx-10 sm:mx-0 p-1 hover:cursor-pointer hover:shadow-md dark:bg-gray-600">
                    <GlobalImage
                        className="p-2 object-cover mx-auto"
                        alt="post-img"
                        src="/images/hero-img.jpg"
                        width={200}
                        height={100}
                    />
                    <div className="flex flex-col w-full overflow-hidden">
                        <h1 className="text-center font-extrabold text-xl">This is header</h1>
                        <p className="text-sm text-left">
                            This is paragraph Lorem ipsum dolor sit amet consectetur.....
                        </p>
                        <button className="hidden card-button mt-2 w-full bg-red-500 hover:bg-red-600 text-white font-bold  rounded">
                            delete
                        </button>
                        <button className="hidden card-button mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded">
                            update
                        </button>
                    </div>
                </div>
                <div className="card bg-gray-200 flex flex-col sm:flex-row 
                mx-10 sm:mx-0 p-1  hover:cursor-pointer hover:shadow-md dark:bg-gray-600">
                    <GlobalImage
                        className="p-2 object-cover mx-auto"
                        alt="post-img"
                        src="/images/hero-img.jpg"
                        width={200}
                        height={100}
                    />
                    <div className="flex flex-col w-full overflow-hidden">
                        <h1 className="text-center font-extrabold text-xl">This is header</h1>
                        <p className="text-sm text-left">
                            This is paragraph Lorem ipsum dolor sit amet consectetur.....
                        </p>
                        <button className="hidden card-button mt-2 w-full bg-red-500 hover:bg-red-600 text-white font-bold  rounded">
                            delete
                        </button>
                        <button className="hidden card-button mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded">
                            update
                        </button>
                    </div>
                </div>
                <div className="card bg-gray-200 flex flex-col sm:flex-row 
                mx-10 sm:mx-0 p-1  hover:cursor-pointer hover:shadow-md dark:bg-gray-600">
                    <GlobalImage
                        className="p-2 object-cover mx-auto"
                        alt="post-img"
                        src="/images/hero-img.jpg"
                        width={200}
                        height={100}
                    />
                    <div className="flex flex-col w-full overflow-hidden">
                        <h1 className="text-center font-extrabold text-xl">This is header</h1>
                        <p className="text-sm text-left">This is paragraph Lorem ipsum dolor sit amet consectetur.....</p>
                        <button className="hidden card-button mt-2 w-full bg-red-500 hover:bg-red-600 text-white font-bold  rounded">
                            delete
                        </button>
                        <button className="hidden card-button mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded">
                            update
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashboardPage