import { Module } from '@nestjs/common';
import { DataBaseModule } from './database.module';


@Module({
  imports: [DataBaseModule]
})
export class AppModule {}
