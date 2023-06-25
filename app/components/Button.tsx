'use client'

import { IconType } from "react-icons/lib"

interface ButtonProps {
    label: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
    outline?: boolean
    small?: boolean
    icon?: IconType
    bg?: boolean
}

// Note => outline, small and icon are doing for interaction of className
//disabel is loading state

const Button: React.FC<ButtonProps> = ({
    label, onClick, disabled, outline, small, icon: Icon, bg
}) => {

    return (
        <button onClick={onClick} disabled={disabled}
            className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full
            ${outline ? 'bg-white' : 'bg-black/40'}
            ${outline ? 'border-black' : 'bg-black/40'}
            ${outline ? 'text-black' : 'text-white'}
            ${small ? 'py-1' : 'py-3'}
            ${small ? 'text-sm' : 'text-md'}
            ${small ? 'font-light' : 'font-semibold'}
            ${small ? 'border-[1px]' : 'border-[2px]'}
            ${bg ? "dark:bg-gray-600 dark:text-white" : ""}
        `}>
            {Icon && (
                <Icon size={24} className="absolute left-4 top-3" />
            )}
            {label}
        </button>
    )
}

export default Button