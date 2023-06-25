import { usePathname } from "next/navigation"
import { useMemo } from "react";
import { AiOutlineHome, AiOutlineSave } from 'react-icons/ai'

const useUsersRoutes = () => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            label: 'Home',
            href: '/',
            icon: AiOutlineHome,
            active: pathname === '/',
        },
        {
            label: 'Watch Later',
            href: '/watch-later',
            icon: AiOutlineSave,
            active: pathname === '/watch-later'
        }
    ]
        , [pathname]);


    return routes;
}

export default useUsersRoutes;