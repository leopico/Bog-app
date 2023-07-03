import getPosts from "../actions/getPosts"
import getCurrentUser from "../actions/getCurrentUser";
import HeadingPosts from "../components/HeadingPosts";


export const metadata = {
    title: {
        default: "Dashboard",
        template: "%s | Blog" //this is child title that dynamic route
    },
    description: 'Explore technical insights and cutting-edge topics in our Next.js blog. Stay updated with the latest advancements. Learn, code, and optimize your web development skills. #NextJS',
}

const DashboardPage = async () => {
    const posts = await getPosts();
    const currentUser = await getCurrentUser();

    return (
        <div className="h-screen">
            <HeadingPosts title="My Blog Posts (update/delete)" posts={posts} currentUser={currentUser} />
        </div>
    )
}

export default DashboardPage