import { INestApplication } from '@nestjs/common'
import { PrismaRepository } from '../repositories/prisma.repository'

export async function setupPrisma({
  app,
}: {
  app: INestApplication
}): Promise<void> {
  const prismaService = app.get(PrismaRepository)
  await prismaService.enableShutdownHooks(app)
}
