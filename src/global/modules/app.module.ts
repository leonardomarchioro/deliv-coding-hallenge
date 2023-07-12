import { Module } from '@nestjs/common';
import { DataBaseModule } from './database.module';
import { AuthModule } from '../../modules/Authentication/infra/modules/authentication.module';
import { UsersModule } from '../../modules/Users/infra/modules/users.module';
import { AddressModule } from '../../modules/Address/infra/module/address.module';


@Module({
  imports: [
    DataBaseModule,
    AuthModule,
    UsersModule,
    AddressModule
  ]
})
export class AppModule {}
