import { prisma } from '../../client';
import { Category } from '@prisma/client';

async function main() {
  const categories: Category[] = [
    {
      id: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
      type: 'Tecnologia',
    },
    {
      id: 'e1bb6240-7ddc-4e91-97fc-8ef38a70243d',
      type: 'Gastronomia',
    },
    {
      id: '124818c1-41f7-4a5a-ba8d-d9457b24e367',
      type: 'Artes',
    },
    {
      id: '6ad4043c-0dea-43a5-9019-67664ed23d6b',
      type: 'Terror',
    },
    {
      id: '45905a74-50f4-4176-9a51-3e558bc9b293',
      type: 'Romance',
    },
    {
      id: '94c14538-eea9-4d76-b97c-4106220fb848',
      type: 'Suspense',
    },
  ];

  for (const category of categories) {
    await prisma.category.create({
      data: category,
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
