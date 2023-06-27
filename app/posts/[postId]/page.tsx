import Link from "next/link"
import GlobalImage from "../../components/GlobalImage"
import { FaGithubAlt } from 'react-icons/fa';
import { GiWorld } from "react-icons/gi";
import getPostById from "@/app/actions/getPostById";
import ClientPost from "./ClientPost";
import getCurrentUser from "@/app/actions/getCurrentUser";
import EmptyState from "@/app/components/EmptyState";

interface IParams {
    postId?: string
}

const PostPage = async ({ params }: { params: IParams }) => {
    const post = await getPostById(params);

    if (!post) {
        return (
            <EmptyState />
        )
    }

    return (
        <div className="container mx-auto max-w-[800px] p-7 lg:p-8 4xl:max-w-[1700px]">
            <ClientPost
                post={post}
            />
        </div>
    )
}

export default PostPage