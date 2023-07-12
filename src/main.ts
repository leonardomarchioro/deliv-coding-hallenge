import { NestFactory } from '@nestjs/core';
import { AppModule } from './global/modules/app.module';

import { config } from 'dotenv';
import { useContainer } from 'class-validator';
import { setupPrisma } from './global/handlers/prisma.handler';
import { setupGlobalPipes } from './global/handlers/global-pipes.handler';


async function bootstrap() {
  config();

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  useContainer(app.select(AppModule), { fallbackOnErrors: true })

  const port = process.env.PORT || 4000

  await setupPrisma({ app })
  await setupGlobalPipes({ app })


  await app.listen(port);

  console.log(`App is running on: http://localhost:${port}`)
}
bootstrap();
