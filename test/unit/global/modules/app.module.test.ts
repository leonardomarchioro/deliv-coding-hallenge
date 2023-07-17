import { Test, TestingModule } from '@nestjs/testing';
import { UsersModule } from '../../../../src/modules/Users/infra/modules/users.module';
import { DataBaseModule } from '../../../../src/global/modules/database.module';
import { AuthModule } from '../../../../src/modules/Authentication/infra/modules/authentication.module';
import { AddressModule } from '../../../../src/modules/Address/infra/module/address.module';
import { RequestModule } from '../../../../src/modules/Request/infra/modules/request.module';
import { AppModule } from '../../../../src/global/modules/app.module';

describe('AppModule', () => {
  let moduleRef: TestingModule;
  beforeEach(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [
        DataBaseModule,
        AuthModule,
        UsersModule,
        AppModule,
        AddressModule,
        RequestModule,
      ],
    }).compile();
  });

  it('should be defined AppModule', () => {
    const module = moduleRef.get<AppModule>(AppModule);
    expect(module).toBeDefined();
  });

});
