'use client'

import ContextFooter from "./ContextFooter"


const Footer = () => {
    return (
        <div className="dark:bg-slate-800">
            <div className="border border-1 border-slate-700 
                    lg:w-[550px] bg-white rounded-xl mx-10 md:mx-20 lg:mx-auto
                    py-3 text-center text-[10px] lg:text-[16px] p-1 shadow-lg mb-3 dark:bg-gray-600 dark:shadow-md"
            >
                <div className="p-4 space-y-3">
                    <h4 className="font-extrabold text-sm md:text-lg lg:text-xl">
                        Get in text with me 🤟🏼
                    </h4>
                    <p className="mx-10 font-bold text-[10px] lg:text-[12px]">
                        You can read our weekly blogs first after you have subscribed.Enter your email now 🚀.
                    </p>
                    <div className="flex dark:bg-slate-800 items-center justify-between rounded-lg w-full border border-1 border-gray-500 p-2 bg-white">
                        <input type="text"
                            placeholder="Enter Email Here"
                            className="w-full p-2 font-light rounded-md outline-none text-sm dark:bg-slate-800"
                        />
                        <button className="text-sm bg-gray-600 p-1 py-3 rounded-lg text-white/80 hover:bg-gray-700 hover:text-white">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <ContextFooter />
        </div>
    )
}

export default Footer