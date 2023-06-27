import db from "../libs/prismadb";

interface IParams {
    postId?: string
}

export default async function getPostById( params: IParams ) {
    try {
        const { postId } = params;
        const post = await db.post.findUnique({
            where: {
                id: postId
            },
            include: {
                poster: true
            }
        });

        if (!post) {
            return null
        };

        return post

    } catch (error: any) {
        throw new Error(error)
    };
};