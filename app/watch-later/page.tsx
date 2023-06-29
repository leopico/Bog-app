import getCurrentUser from "../actions/getCurrentUser";
import getWatchLaterPosts from "../actions/getWatchLaterPosts";
import EmptyState from "../components/EmptyState";
import HeadingPosts from "../components/HeadingPosts"

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