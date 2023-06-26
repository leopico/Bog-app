'use client'

import GlobalImage from './GlobalImage';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section className="container mx-auto p-5">
            <div className="w-full h-[40vh] lg:h-[80vh] overflow-hidden relative">
                <GlobalImage
                    alt="Image"
                    src="/images/hero-img.jpg"
                    className="object-cover w-full"
                    fullfill={true}
                />
                <div className="absolute text-gray-700 w-full h-full flex flex-col justify-center ml-2">
                    <h1 className="font-extrabold text-sm sm:text-lg md:text-3xl lg:text-6xl">The Best</h1>
                    <h1 className="font-extrabold text-sm sm:text-lg md:text-3xl lg:text-6xl">Blog Website</h1>

                    <Link
                        to="posts"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="transition-all duration-300"
                    >
                        <button className="bg-black/60 p-3 md:p-5 rounded-lg w-28 text-sm md:w-40 mt-2 text-white/70 font-semibold hover:text-white/80 hover:bg-black/75 text-center">
                            View posts
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
