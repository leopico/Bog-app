import getPosts from "../actions/getPosts"
import ClientPosts from "../components/ClientPosts";
import getCurrentUser from "../actions/getCurrentUser";


const DashboardPage = async () => {
    const posts = await getPosts();
    const currentUser = await getCurrentUser();
    return (
        <section className="container mx-auto p-4 py-12 h-screen">
            <h1 className="font-extrabold text-sm sm:text-xl md:text-2xl lg:text-4xl text-center">
                My Blog Posts <span className="text-sm lg:text-xl">(delet / update)</span>
            </h1>
            <ClientPosts posts={posts} currentUser={currentUser} />
        </section>
    )
}

export default DashboardPage