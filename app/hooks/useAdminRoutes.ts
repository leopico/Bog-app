import { usePathname } from "next/navigation"
import { useMemo } from "react";
import { AiOutlineDashboard,AiOutlineHome,AiOutlineSave } from "react-icons/ai";
import { MdEditNote } from "react-icons/md";
import { FiUsers } from "react-icons/fi"

const useAdminRoutes = () => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            label: 'Users Home',
            href: '/',
            icon: AiOutlineHome,
            active: pathname === '/',
        },
        {
            label: 'Dashboard',
            href: '/admin',
            icon: AiOutlineDashboard,
            active: pathname === '/admin',  
        },
        {
            label: 'New Post',
            href: '/admin/new-post',
            icon: MdEditNote,
            active: pathname === '/admin/new-post'
        },
        {
            label: 'Users',
            href: '/admin/users',
            icon: FiUsers,
            active: pathname === '/admin/users'
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

export default useAdminRoutes;