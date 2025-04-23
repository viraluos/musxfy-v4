// Questo è per evitare errori con "globalThis" in sviluppo
// perché Next.js fa hot-reload e ricrea tutto ogni volta
// quindi evitiamo di avere 8000 istanze di Prisma
// (in produzione non serve)

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}