import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import db from "@/app/libs/prismadb";


interface IParams {
  postId?: string;
}


export async function DELETE(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  
  const { postId } = params;

  if (!postId || typeof postId !== 'string') {
    return new NextResponse('Invalid ID', { status: 400 });
  }
 
  try {
    const deletePost = await db.post.deleteMany({
      where: {
        id: postId,
        posterId: currentUser.id
      }
    });

    return NextResponse.json(deletePost);
  } catch (error) {
    console.error('Error deleting listing:', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
