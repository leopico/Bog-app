import db from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


interface IParams {
    tokenId: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {

    const { tokenId } = params;    

    //put tokenId to user
    const user = await db.user.findFirst({
        where: {
            activatetokens: {
                some: { //have to all matches
                    AND: [
                        {
                            createdAt: {
                                gt: new Date(Date.now() - 24 * 60 * 60 * 1000), //during 24 hrs
                            }
                        },
                        { 
                            token: tokenId,
                        }
                    ]
                }
            }
        }
    });

    if (!user) {
        throw new Error('Invalid token');
    };

    //activate for user
    await db.user.update({
        where: {
            id: user.id,
        },
        data: {
            active: true,
        }
    });

    //update activated time for this user then next time no need to activate and go throught login page
    await db.activeToken.update({
        where: {
            token: tokenId,
        },
        data: {
            activatedAt: new Date(),
        }
    });

    return new NextResponse(null, {
        status: 302,
        headers: {
            Location: '/api/auth/signin'
        }
   })

}