require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');

const url = new URL(process.env.DATABASE_URL);
const adapter = new PrismaMariaDb({
  host: url.hostname,
  port: Number(url.port || 3306),
  user: url.username,
  password: url.password,
  database: url.pathname.slice(1),
  allowPublicKeyRetrieval: true,
});
const prisma = new PrismaClient({ adapter });

const users = [
  { name: 'Rudy', email: 'rudy@example.com' },
  { name: 'Bambang', email: 'bambang@example.com' },
  { name: 'Siti', email: 'siti@example.com' },
  { name: 'Ahmad', email: 'ahmad@example.com' },
  { name: 'Dewi', email: 'dewi@example.com' },
];

async function main() {
  console.log('Seeding database...');

  for (const user of users) {
    const existing = await prisma.user.findUnique({ where: { email: user.email } });
    if (!existing) {
      await prisma.user.create({ data: user });
      console.log(`  Created: ${user.name}`);
    } else {
      console.log(`  Skipped (exists): ${user.name}`);
    }
  }

  console.log('Seeding selesai.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
