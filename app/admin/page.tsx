import getPosts from "../actions/getPosts"
import getCurrentUser from "../actions/getCurrentUser";
import HeadingPosts from "../components/HeadingPosts";


const DashboardPage = async () => {
    const posts = await getPosts();
    const currentUser = await getCurrentUser();

    return (
        <HeadingPosts title="My Blog Posts (update/delete)" posts={posts} currentUser={currentUser} />
    )
}

export default DashboardPage