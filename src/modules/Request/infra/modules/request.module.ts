import { Module } from '@nestjs/common';
import { generateModule } from '../../../../global/helpers/nest.helper';
import { RequestController } from '../controllers/request.controller';
import { RequestService } from '../../adapter/services/request.service';
import { DataBaseModule } from '../../../../global/modules/database.module';
import { UsersModule } from '../../../Users/infra/modules/users.module';
import { AuthModule } from '../../../Authentication/infra/modules/authentication.module';
import { AddressModule } from '../../../Address/infra/module/address.module';
import { provider } from '../../../../global/helpers/nest.helper';
import { CreateRequestFeature } from '../../core/feature/create-request.feature';
import { CreateRequestPrismaConnector } from '../../adapter/connectors/create-request-prisma.connector';
import { FindRequestPrismaConnector } from '../../adapter/connectors/find-request-prisma.connector';
import { FindRequestFeature } from '../../core/feature/find-request.feature';
import { ListRequestByUserFeature } from '../../core/feature/list-request-by-user.feature';
import { ListRequestByUserPrismaConnector } from '../../adapter/connectors/list-request-prisma.connector';
import { UpdateRequestFeature } from '../../core/feature/update-request.feature';
import { UpdateRequestPrismaConnector } from '../../adapter/connectors/update-request-prisma.connector';

@Module(generateModule({
    imports: [
        DataBaseModule,
        UsersModule,
        AuthModule,
        AddressModule
    ],
    providers: [
        RequestService,
        provider(CreateRequestFeature, CreateRequestPrismaConnector),
        provider(FindRequestFeature, FindRequestPrismaConnector),
        provider(ListRequestByUserFeature, ListRequestByUserPrismaConnector),
        provider(UpdateRequestFeature, UpdateRequestPrismaConnector)
    ],
    controllers: [RequestController]
}))
export class RequestModule {}
