import db from "../libs/prismadb";
import getCurrentUser from "./getCurrentUser";


export default async function getWatchLaterPosts() {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return [];
        }

        const watchlaterposts = await db.post.findMany({
            where: {
                id: {
                    in: [ ...(currentUser.watchlaterIds || [])]
                }
            }
        })

        return watchlaterposts
        
    } catch (error: any) {
        throw new Error(error)
    }
}