"use client"

import clsx from "clsx"
import Link from 'next/link'

interface SideBarProps {
    label: string
    icon: any
    href: string
    onClick?: () => void
    active?: boolean
}

const Sidebar: React.FC<SideBarProps> = ({
    label, icon: Icon, href, onClick, active
}) => {

    const handleClick = () => {
        if (onClick) return onClick()
    }

    return (
        <li onClick={handleClick}>
            <Link
                passHref
                href={href}
                className={clsx(`
                    text-xl p-4 flex items-center space-x-2 m-1 hover:bg-gray-300 hover:rounded-lg
                    hover:cursor-pointer dark:hover:text-gray-800`,
                    active && 'bg-gray-300 dark:bg-gray-300 rounded-lg dark:text-gray-800'
                )}
            >
                <Icon />
                <span>{label}</span>
            </Link>
        </li>
    )
}

export default Sidebar