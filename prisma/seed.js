// Use ES modules import style
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const username = 'admin';
  const password = 'admin123'; // Change this to a secure password!
  const hash = await bcrypt.hash(password, 10);

  const existing = await prisma.adminUser.findUnique({ where: { username } });
  if (!existing) {
    await prisma.adminUser.create({
      data: { username, password: hash }
    });
    console.log('Admin user created.');
  } else {
    console.log('Admin user already exists.');
  }
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
