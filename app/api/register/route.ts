import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import db from "@/app/libs/prismadb";
import { randomUUID } from "crypto";
import { sendNotificationEmail } from "@/app/hooks/useRegistrationNodeMailer";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, name, password } = body;

        if (!email || !name || !password) {
            return new NextResponse('Missing info', { status: 400 });
        };

        const hashedPassword = await bcrypt.hash(password, 12);

        if (!hashedPassword) {
            return null
        }

        const user = await db.user.create({
            data: {
                email,
                name,
                hashedPassword
            }
        });

        const token = await db.activeToken.create({
            data: {
                token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
                user: {
                    connect: {
                        id: user.id
                    }
                }
            }
        });

        const recipientEmail = user.email; //it can be possible null
        const recipientName = user.name; //it can be possible null
        const recipientToken = token.token

        if (recipientEmail && recipientName !== null) {
            await sendNotificationEmail(recipientName , recipientToken , recipientEmail)
        } else {
            return new NextResponse('You must have correct Information', { status: 401 });
        }

        return NextResponse.json(user);

    } catch (error: any) {
        console.log(error, "REGISTRATION_ERROR");
        return new NextResponse('Internal Error', { status: 500 })
    }
} 