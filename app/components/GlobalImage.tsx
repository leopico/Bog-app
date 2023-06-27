'use client'

import clsx from "clsx"
import Image from "next/image"
import { useState } from "react"

interface GlobalImageProps {
    src: any
    className: string
    alt: string
    width?: number
    height?: number
    fullfill?: boolean
    priority?: boolean
}

const GlobalImage: React.FC<GlobalImageProps> = ({
    src, className, alt, fullfill, width, height, priority
}) => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <Image
            priority={priority}
            src={src}
            fill={fullfill}
            alt={alt}
            width={width}
            height={height}
            className={clsx(`
                duration-500 ease-in-out`,
                isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0",
                className
            )}
            onLoadingComplete={() => setIsLoading(false)}
        />
    )
}

export default GlobalImage