import db from '../app/libs/prismadb';
import bcrypt from 'bcrypt';

async function main() {
    const password = await bcrypt.hash('admin123', 12);
    const user = await db.user.create({
        data: {
            name: "admin",
            email: 'paypalmoney967@gmail.com',
            hashedPassword: password,
            role: 'admin'
        }
    });
}

main().then(() => prisma?.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma?.$disconnect();
        process.exit(1);
})