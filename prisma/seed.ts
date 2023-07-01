import db from '../app/libs/prismadb';
import bcrypt from 'bcrypt';

const name = process.env.ACC_NAME;
const email = process.env.ACC_EMAIL;
const password = process.env.ACC_PASSWORD;

//this is for reset data of seed.ts
async function clearData() {
    await db.user.deleteMany({
        where: {
            email: email,
        }
    })
}

async function main() {
    const encryptedpassword = await bcrypt.hash(password as string | Buffer, 12);
    await db.user.upsert({
        where: {
            email: email,
        },
        update: {},
        create: {
            name: name,
            email: email, 
            hashedPassword: encryptedpassword,
            role: 'admin',
            active: true,
            watchlaterIds: []
        }
    });
}

clearData().then(() => prisma?.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma?.$disconnect();
        process.exit(1);
})


main().then(() => prisma?.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma?.$disconnect();
        process.exit(1);
})