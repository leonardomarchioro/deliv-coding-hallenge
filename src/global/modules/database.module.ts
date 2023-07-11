import { Module } from '@nestjs/common';
import { generateModule } from '../helpers/nest.helper';
import { PrismaRepository } from '../repositories/prisma.repository';


@Module(
  generateModule({
    providers: [PrismaRepository],
  }),
)
export class DataBaseModule {}
