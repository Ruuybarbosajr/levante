import { prisma } from '../../client';
import { User } from '@prisma/client';

async function main() {
  const users: User[] = [
    {
      id: '197c7ac9-1054-44c1-909b-725a0fc14454',
      name: 'admin',
      password: 'senhapadrao',
      email: 'email@admin.com',
      permission: true,
    },
    {
      id: 'e64dd530-12fc-4002-92de-f2a27a9ccd8e',
      name: 'usuario',
      password: 'senhapadrao',
      email: 'email@user.com',
      permission: false,
    },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: { ...user },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
