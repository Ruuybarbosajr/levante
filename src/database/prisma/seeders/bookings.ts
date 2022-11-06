import { prisma } from '../../client';
import { Booking } from '@prisma/client';

async function main() {
  const date = new Date();
  const returnDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 30);

  const bookings: Booking[] = [
    {
      id: 'a117e1c7-23db-4f2d-912f-6822c2c35d1d',
      bookId: 'a117e1c7-23db-4f2d-912f-6822c2c35d1d',
      createdAt: new Date(),
      returnDate: returnDate,
      userId: 'e64dd530-12fc-4002-92de-f2a27a9ccd8e',
      status: 'Aberta',
    },
  ];

  setTimeout(async () => {
    for (const booking of bookings) {
      await prisma.booking.create({
        data: { ...booking },
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
