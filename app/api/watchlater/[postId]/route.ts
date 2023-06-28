import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import db from "@/app/libs/prismadb";

interface IParams {
    postId?: string
}

// Note => below functions will control with method name such as POST , DELETE, ...

export async function POST(request: Request, {params}:{params: IParams}) {
    const currentUser = await getCurrentUser();
    
    if (!currentUser) { 
        return NextResponse.error();
    }

    const { postId } = params;

    if (!postId || typeof postId !== 'string') {
        throw new Error('Invalid ID')
    }

    let watchlaterIds = [ ...(currentUser.watchlaterIds || [])]

    watchlaterIds.push(postId);    

    const user = await  db.user.update({
        where: {
            id: currentUser.id
        },

        data: {
            watchlaterIds: watchlaterIds
        }
    })

    return NextResponse.json(user)
}

export async function DELETE(request: Request, {params} : { params: IParams}) {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return NextResponse.error();
    }

    const { postId } = params;

    if (!postId || typeof postId !== 'string') {
        throw new Error('Invalid ID')
    }

    let watchlaterIds = [...(currentUser.watchlaterIds || [])];

    watchlaterIds = watchlaterIds.filter((id) => id !== postId)
 
    const user = await db.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            watchlaterIds: watchlaterIds
        }
    })

    return NextResponse.json(user)
}