import db from "../libs/prismadb"

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

export default getPosts