import db from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

  try {
    const body = await request.json();
    const { role, email } = body;

    if (!role && !email) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

      const updatedRole = await db.user.update({
          where: {
            email: email
        },
          data: {
            role: role
        }
    });

    return NextResponse.json(updatedRole)
  } catch (error) {
    console.error('Error creating new post:', error);
    return new NextResponse('Something went wrong', { status: 500 });
  }
}
