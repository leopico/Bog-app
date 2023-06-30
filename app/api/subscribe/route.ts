import getCurrentUser from "@/app/actions/getCurrentUser";
import db from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const currentUser = await getCurrentUser();
    const isSubscribed = true;

    if (!currentUser) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    try {
        const body = await request.json();
        const { message } = body;

        const currentUserEmail: string | undefined = currentUser.email !== null ? currentUser.email : undefined;
        
        if (!message) {
            return new NextResponse('Missing required fields', { status: 400 });
        }

        const newSubscriber = await db.subscriber.create({
            data: {
                isSubscribed: isSubscribed,
                userEmail: {
                    connect: {  
                        email: currentUserEmail
                    }
                }
            }
        });

        return NextResponse.json(newSubscriber)

    } catch (error) {
        console.error('Error creating new post:', error);
        return new NextResponse('Something went wrong', { status: 500 });
    }
}