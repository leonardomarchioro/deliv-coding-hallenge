import { AuthenticationService } from '../../../../../src/modules/Authentication/adapter/services/authentication.service';
import { FindUserDataFeature } from '../../../../../src/modules/Authentication/core/features/find-userData.feature';
import { EncryptedDataCompareFeature } from '../../../../../src/modules/Authentication/core/features/encrypted-data-compare';
import { TokenGeneratorFeature } from '../../../../../src/modules/Authentication/core/features/token-generator.feature';
import { CheckUserTokenFeature } from '../../../../../src/modules/Authentication/core/features/check-user-token.feature';
import { DecodedUserTokenFeature } from '../../../../../src/modules/Authentication/core/features/decode-user-token.feature';
import { createdUserDtoMock } from '../../../../mocks/dto/created-user.dto.mock';
import { signInDTOMock } from '../../../../mocks/dto/sign-in.dto-mock';
import { WrongSigninException } from '../../../../../src/modules/Authentication/core/exceptions/wrong-signin-exception';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  let findUserByParam: FindUserDataFeature;
  let validatePassword: EncryptedDataCompareFeature;
  let tokenJWTGenerator: TokenGeneratorFeature;
  let checkUserToken: CheckUserTokenFeature;
  let decodeUserTokenFeature: DecodedUserTokenFeature;

  const token = '@abc159';
  const userId = 1;

  beforeEach(() => {
    findUserByParam = {
      perform: jest.fn().mockResolvedValue(createdUserDtoMock),
    };
    validatePassword = {
      perform: jest.fn().mockResolvedValue(true),
    };
    tokenJWTGenerator = {
      perform: jest.fn().mockResolvedValue({ token }),
    };
    checkUserToken = {
      perform: jest.fn().mockResolvedValue(true),
    };
    decodeUserTokenFeature = {
      perform: jest.fn().mockResolvedValue({ userId }),
    };

    service = new AuthenticationService(
      findUserByParam,
      validatePassword,
      tokenJWTGenerator,
      checkUserToken,
      decodeUserTokenFeature,
    );
  });

  describe('signIn', () => {
    it('should sign-in user with sucess', async () => {
      await service.signIn(signInDTOMock);

      expect(findUserByParam.perform).toHaveBeenCalled();
      expect(validatePassword.perform).toHaveBeenCalled();
      expect(tokenJWTGenerator.perform).toHaveBeenCalled();
    });

    it('should sign-in user with incorrect email', async () => {
      findUserByParam.perform = jest.fn();

      try {
        await service.signIn(signInDTOMock);
      } catch (error) {
        expect(WrongSigninException).toThrowError();
      }
    });

    it('should sign-in user with incorrect password', async () => {
      validatePassword.perform = jest.fn();

      try {
        await service.signIn(signInDTOMock);
      } catch (error) {
        expect(WrongSigninException).toThrowError();
      }
    });
  });

  it('should be execute checkToken', async () => {
    await service.checkToken(token);

    expect(checkUserToken.perform).toHaveBeenCalledWith(token);
  });

  it('should be execute decodedToken', async () => {
    await service.decodedToken(token);

    expect(decodeUserTokenFeature.perform).toHaveBeenCalledWith(token);
  });

  it('should be execute validateUserExists', async () => {
    await service.validateUserExists(userId);

    expect(findUserByParam.perform).toHaveBeenCalledWith({ id: userId });
  });
});
