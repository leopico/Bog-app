import db from '../app/libs/prismadb';
import bcrypt from 'bcrypt';

async function main() {
    const password = await bcrypt.hash('admin123', 12);
    const user = await db.user.create({
        data: {
            name: "admin",
            email: 'paypalmoney967@gmail.com', //if you change then have to update in getAllUsers.ts
            hashedPassword: password,
            role: 'admin',
            watchlaterIds: []
        }
    });
}

main().then(() => prisma?.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma?.$disconnect();
        process.exit(1);
})