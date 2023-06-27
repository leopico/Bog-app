import getCurrentUser from "@/app/actions/getCurrentUser";
import db from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, image, content } = body;

    if (!title || !content) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    const newPost = await db.post.create({
      data: {
        title,
        image,
        body: content,
        poster: {
          connect: { id: currentUser.id }
        }
      }
    });

    return NextResponse.json(newPost)
  } catch (error) {
    console.error('Error creating new post:', error);
    return new NextResponse('Something went wrong', { status: 500 });
  }
}
