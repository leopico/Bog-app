import getPostById from "@/app/actions/getPostById";
import ClientPost from "./ClientPost";
import EmptyState from "@/app/components/EmptyState";

interface IParams {
    postId?: string
};

export async function generateMetadata({ params }: { params: IParams }) {
    try {
        const post = await getPostById(params);
        if (!post) {
            return {
                title: 'NOT FOUND',
                description: 'The page you are looking for does not exist.'
            };
        }
        return {
            title: post.title,
            description: post.body,
            alternates: {
                canonical: `/posts/${post.id}`, //have to assign full url but I already set new URL in root page(layout) that metadataBase
                languages: {
                    "en-US": `/en-US/posts/${post.id}`
                }
            },
        }
    } catch (error) {
        console.error(error);
        return {
            title: 'NOT FOUND',
            description: 'The page you are looking for does not exist.'
        };
    }
}

const PostPage = async ({ params }: { params: IParams }) => {
    const post = await getPostById(params);

    if (!post) {
        return (
            <EmptyState />
        )
    }

    return (
        <div className="container flex-1 mx-auto max-w-[800px] p-7 lg:p-8 4xl:max-w-[1700px]">
            <ClientPost post={post} />
        </div>
    )
}

export default PostPage