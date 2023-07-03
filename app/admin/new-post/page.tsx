import dynamic from 'next/dynamic';
const FormPost = dynamic(() => import("../components/FormPost"), { ssr: false }); //this is not included prebuild at SSR

export const metadata = {
    title: {
        default: "New-post",
        template: "%s | Blog" //this is child title that dynamic route
    },
    description: 'Explore technical insights and cutting-edge topics in our Next.js blog. Stay updated with the latest advancements. Learn, code, and optimize your web development skills. #NextJS',
}

const Page = () => {
    return (
        <div className="container mx-auto max-w-[800px] p-7 lg:p-8">
            <h1 className="text-center font-bold lg:font-extrabold text-xl sm:text-2xl lg:text-4xl">
                Write new posts
            </h1>
            <FormPost />
        </div>
    );
};

export default Page;
