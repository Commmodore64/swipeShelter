import { PrismaClient } from "@prisma/client";
import { env } from "~/env.js";

const globalForPrisma = globalThis as { prisma?: PrismaClient };

let prisma: PrismaClient;

if (typeof window === "undefined") {
  // Lado del servidor
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({
      log: env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    });
  }
  prisma = globalForPrisma.prisma;
} else {
  // Lado del cliente
  prisma = new PrismaClient({
    log: ["error"],
  });
}

export { prisma };
