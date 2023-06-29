import getAllUsers from '@/app/actions/getAllUsers';
import UserDropDown from '../components/UserDropDown';
import EmptyState from '@/app/components/EmptyState';

const page = async () => {
    const users = await getAllUsers();
    console.log(users);


    if (users === null) {
        return (
            <EmptyState />
        )
    }

    return (
        <div className="container mx-auto max-w-[800px] h-screen">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl 
            font-bold sm:font-semibold text-center mb-2 underline decoration-dotted underline-offset-4 ">
                Give permission as admin
            </h1>
            <UserDropDown data={users} />
        </div >
    )
}

export default page