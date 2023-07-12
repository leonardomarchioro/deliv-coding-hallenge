import { Module } from '@nestjs/common';
import { DataBaseModule } from '../../../../global/modules/database.module';
import { AuthModule } from '../../../Authentication/infra/modules/authentication.module';
import { UserService } from '../../adapter/services/user.service';
import { CreateUserFeature } from '../../core/features/create-user.feature';
import { CreateUserPrismaConnector } from '../../adapter/connectors/create-user-prisma.connector';
import { UserController } from '../controllers/user.controller';
import { FindUserFeature } from '../../core/features/find-user.feature';
import { FindUserPrismaConnector } from '../../adapter/connectors/find-user-prisma.connector';
import { IsValidEmailConstraint } from '../validations/valid-email.validation';
import { generateModule, provider } from '../../../../global/helpers/nest.helper';

@Module(
  generateModule({
    imports: [
      DataBaseModule,
      AuthModule
    ],
    providers: [
      provider(CreateUserFeature, CreateUserPrismaConnector),
      provider(FindUserFeature, FindUserPrismaConnector),
      UserService,
      IsValidEmailConstraint
    ],
    controllers: [UserController]
  }),
)
export class UsersModule {}
