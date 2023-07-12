import { Module } from "@nestjs/common";
import { generateModule, provider } from "../../../../global/helpers/nest.helper";
import { DataBaseModule } from "../../../../global/modules/database.module";
import { UsersModule } from "../../../Users/infra/modules/users.module";
import { AuthModule } from "../../../Authentication/infra/modules/authentication.module";
import { AddressController } from "../controllers/address.controller";
import { CreateAddressFeature } from "../../core/feature/create-address.feature";
import { CreateAddressPrismaConnector } from "../../adapter/connector/create-address-prisma.connector";
import { AddressService } from "../../adapter/service/address.service";
import { FindAddressFeature } from "../../core/feature/find-address.feature";
import { FindAddressPrismaConnector } from "../../adapter/connector/find-address-prisma.connector";
import { ListAddressByUserFeature } from "../../core/feature/list-address-by-user.feature";
import { ListAddressByUserPrismaConnector } from "../../adapter/connector/list-address-by-user-prisma.connector";
import { UpdateAddressFeature } from "../../core/feature/update-address.feature";
import { UpdateAddressPrismaConnector } from "../../adapter/connector/update-address-prisma.connector";
import { DeleteAddressFeature } from "../../core/feature/delete-address.feature";
import { DeleteAddressPrismaConnector } from "../../adapter/connector/delete-address-prisma.connector";

@Module(
    generateModule({
      imports: [
        DataBaseModule,
        UsersModule,
        AuthModule
      ],
      providers: [
        provider(CreateAddressFeature, CreateAddressPrismaConnector),
        provider(FindAddressFeature, FindAddressPrismaConnector),
        provider(ListAddressByUserFeature, ListAddressByUserPrismaConnector),
        provider(UpdateAddressFeature, UpdateAddressPrismaConnector),
        provider(DeleteAddressFeature, DeleteAddressPrismaConnector),
        AddressService
      ],
      controllers: [AddressController]
    }),
  )
  export class AddressModule {}
  