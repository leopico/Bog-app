import UserDropDown from '../components/UserDropDown';

const page = () => {
    return (
        <div className="container mx-auto max-w-[800px] h-screen">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl 
            font-bold sm:font-semibold text-center mb-2 underline decoration-dotted underline-offset-4 ">
                Give permission as admin
            </h1>
            <UserDropDown />
        </div >
    )
}

export default page