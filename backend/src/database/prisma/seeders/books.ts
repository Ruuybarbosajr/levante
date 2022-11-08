import { prisma } from '../../client';

async function main() {
  const books = [
    {
      id: 'a117e1c7-23db-4f2d-912f-6822c2c35d1d',
      title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      author: 'Martin Robert C.',
      categoryId: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
    },
  ];

  setTimeout(async () => {
    for (const book of books) {
      await prisma.book.create({
        data: { ...book },
      });
    }
  }, 1000);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
