import FormPost from "../components/FormPost"

const page = () => {

    return (
        <div className="container mx-auto max-w-[800px] p-7 lg:p-8">
            <h1 className="text-center font-bold lg:font-extrabold text-xl sm:text-2xl lg:text-4xl">Write new posts</h1>
            <FormPost />
        </div>
    )
}

export default page