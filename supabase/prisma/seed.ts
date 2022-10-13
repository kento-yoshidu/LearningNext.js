import { PrismaClient } from '@prisma/client';
// ここで、data/articles.ts に記述したデータをインポートしています
import { books } from '../data/books';

const prisma = new PrismaClient();

async function main() {
  await prisma.book.createMany({
    data: books,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
