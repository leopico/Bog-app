import getAllUsers from '@/app/actions/getAllUsers';
import UserDropDown from '../components/UserDropDown';
import EmptyState from '@/app/components/EmptyState';

export const metadata = {
    title: {
        default: "Users",
        template: "%s | Blog" //this is child title that dynamic route
    },
    description: 'Explore technical insights and cutting-edge topics in our Next.js blog. Stay updated with the latest advancements. Learn, code, and optimize your web development skills. #NextJS',
}

const page = async () => {
    const users = await getAllUsers();

    if (users === null) {
        return (
            <EmptyState />
        )
    }

    const userList = users as { email: string | null, role: string }[];

    return (
        <div className="container mx-auto max-w-[800px] h-screen">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl 
            font-bold sm:font-semibold text-center mb-2 underline decoration-dotted underline-offset-4 ">
                Give permission as admin
            </h1>
            <UserDropDown users={userList} />
        </div >
    )
}

export default page