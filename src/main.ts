import { NestFactory } from '@nestjs/core';
import { AppModule } from './global/modules/app.module';

import { config } from 'dotenv';
import { useContainer } from 'class-validator';
import { setupPrisma } from './global/helpers/prisma.handler';
import { setupGlobalPipes } from './global/helpers/global-pipes.handler';


async function bootstrap() {
  config();

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  useContainer(app.select(AppModule), { fallbackOnErrors: true })

  const port = process.env.PORT || 3000

  await setupPrisma({ app })
  await setupGlobalPipes({ app })


  await app.listen(port);

  console.log(`App is running on: http://localhost:${port}`)
}
bootstrap();
