'use client'

import { ThemeProvider } from "next-themes"

interface ThememProviderProps {
    children: React.ReactNode
}

const DarkMode: React.FC<ThememProviderProps> = ({ children }) => {
    return (
        <ThemeProvider attribute="class" disableTransitionOnChange>
            {children}
        </ThemeProvider>
    )
}

export default DarkMode