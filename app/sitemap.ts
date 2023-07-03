import db from "./libs/prismadb";

//can check with sitemap.xml in your production url that can npm run build and npm run start in your development and also can check production URL

export default async function sitemap() {
    const baseUrl = "https://leopico-blogapp.vercel.app";

    /* This is for dynamic post start */

    //get all posts fro CMS
    const getPosts = async () => {
        try {
            const posts = await db.post.findMany({
                orderBy: {
                    createdAt: 'desc'
                }
            })
            return posts;
        } catch (error: any) {
            return []
        }
    }

    const posts = await getPosts();

    const postUrls = posts.map((post) => {
        return {
            url: `${baseUrl}/posts/${post.id}`,
            lastModified: new Date(post.updatedAt),
        }
    }) ?? []; //no posts and return empty array

    /* This is for dynamic post start */

    const adminPostUrls = posts.map((post) => {
        return {
            url: `${baseUrl}/admin/${post.id}`,
            lastModified: new Date(post.updatedAt),
        }
    }) ?? []; //no posts and return empty array

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        ...postUrls,
        ...adminPostUrls,
        {
            url: `${baseUrl}/admin/new-post`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/admin/users`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/watch-later`,
            lastModified: new Date(),
        }
    ]
} 