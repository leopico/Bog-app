import getPosts from "../actions/getPosts"
import getCurrentUser from "../actions/getCurrentUser";
import HeadingPosts from "../components/HeadingPosts";


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