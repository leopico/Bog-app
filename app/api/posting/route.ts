import getCurrentUser from "@/app/actions/getCurrentUser";
import { sendNotificationEmail } from "@/app/hooks/usePostNodeMailer";
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

    const recipientEmail: string[] = await db.subscriber.findMany({
      where: {
        isSubscribed: true
      },
      select: {
        email: true
      }
    }).then(subscribers => subscribers.map(subscriber => subscriber.email));

    // Send notification email
    await sendNotificationEmail(newPost.title, recipientEmail);

    return NextResponse.json(newPost)
  } catch (error) {
    console.error('Error creating new post:', error);
    return new NextResponse('Something went wrong', { status: 500 });
  }
}
