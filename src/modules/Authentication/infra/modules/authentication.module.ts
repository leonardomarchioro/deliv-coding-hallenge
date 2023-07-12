import { Module } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt";
import { generateModule, provider } from '../../../../global/helpers/nest.helper';
import { BcryptEncryptDataConnector } from '../../adapter/connectors/bcrypt-encrypt-data.connector';
import { EncryptDataFeature } from '../../core/features/encrypt-data.feature';
import { AuthenticationController } from '../controllers/authention.controller';
import { AuthenticationService } from '../../adapter/services/authentication.service';
import { DataBaseModule } from '../../../../global/modules/database.module';
import { FindUserDataFeature } from '../../core/features/find-userData.feature';
import { FindUserDataPrismaConnector } from '../../adapter/connectors/find-userData-prisma.connector';
import { EncryptedDataCompareFeature } from '../../core/features/encrypted-data-compare';
import { BcryptEncryptedDataCompareConnector } from '../../adapter/connectors/bcrypt-encrypted-data-compare';
import { TokenGeneratorFeature } from '../../core/features/token-generator.feature';
import { TokenGeneratorJWTConnector } from '../../adapter/connectors/token-generate-jwt.connector';
import { CheckUserTokenFeature } from '../../core/features/check-user-token.feature';
import { CheckUserTokenJWTConnector } from '../../adapter/connectors/check-user-token-jwt.connector';
import { DecodedUserTokenFeature } from '../../core/features/decode-user-token.feature';
import { DecodedUserTokenJWTConnector } from '../../adapter/connectors/decoded-user-token-jwt.connector';

@Module(
  generateModule({
    imports: [
      DataBaseModule,
      JwtModule.register({
        secret: process.env.SECRET_KEY
      }),
    ],
    providers: [
      provider(EncryptDataFeature, BcryptEncryptDataConnector),
      provider(EncryptedDataCompareFeature, BcryptEncryptedDataCompareConnector),
      provider(FindUserDataFeature, FindUserDataPrismaConnector),
      provider(TokenGeneratorFeature, TokenGeneratorJWTConnector),
      provider(CheckUserTokenFeature, CheckUserTokenJWTConnector),
      provider(DecodedUserTokenFeature, DecodedUserTokenJWTConnector),
      AuthenticationService
    ],
    controllers: [AuthenticationController]
  }),
)
export class AuthModule {}
