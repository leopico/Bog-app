import { NextResponse } from "next/server";
import db from "../libs/prismadb"
import getCurrentUser from "./getCurrentUser";

const getAllUsers = async () => {
    try {
        const currentUser = await getCurrentUser();

        if (currentUser?.role !== 'admin') {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const users = await db.user.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            where: {
                NOT: {
                    email: currentUser.email 
                }
            },
            select: {
                email: true,
                role: true
            }
        });

        if (!users) {
            return null
        }

        return users;
        
  } catch (error: any) {
    return []
  }
}

export default getAllUsers;