import getCurrentUser from "../actions/getCurrentUser";
import getWatchLaterPosts from "../actions/getWatchLaterPosts";
import EmptyState from "../components/EmptyState";
import HeadingPosts from "../components/HeadingPosts";

export const metadata = {
    title: {
        default: "Watch Later",
        template: "%s | Blog" //this is child title that dynamic route
    },
    description: 'Explore technical insights and cutting-edge topics in our Next.js blog. Stay updated with the latest advancements. Learn, code, and optimize your web development skills. #NextJS',
}

const page = async () => {
    const posts = await getWatchLaterPosts(); //this value finding watchLaterIds of currentUser and this watchLaterIds was saving poster's id
    const currentUser = await getCurrentUser();


    if (posts.length === 0) {
        return (
            <EmptyState />
        )
    }


    return (
        <div>
            <HeadingPosts title="You can read anytime" posts={posts} currentUser={currentUser} />
        </div>
    )
}

export default page