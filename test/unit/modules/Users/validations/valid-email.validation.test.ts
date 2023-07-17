import { IsValidEmailConstraint } from '../../../../../src/modules/Users/infra/validations/valid-email.validation';
import { FindUserFeature } from '../../../../../src/modules/Users/core/features/find-user.feature';
import { createdUserModelMock } from '../../../../mocks/models/created-user.model.mock';
import { EmailAlreadyRegistredException } from '../../../../../src/modules/Users/core/exceptions/email-aleredy-registred.exception';

describe('IsValidEmailConstraint', () => {
  let constraint: IsValidEmailConstraint;
  let feature: FindUserFeature;

  const email = 'test@mail.com';

  beforeEach(() => {
    feature = {
      execute: jest.fn(),
    };

    constraint = new IsValidEmailConstraint(feature);
  });

  it('should be defined', () => {
    expect(constraint).toBeDefined();
  });

  it('should validate email', async () => {
    const result = await constraint.validate(email);

    expect(feature.execute).toHaveBeenCalledWith({ email });
    expect(result).toEqual(true);
  });

  it('should throw error in validate email', async () => {
    feature.execute = jest.fn().mockResolvedValue(createdUserModelMock);
    try {
      await constraint.validate(email);
    } catch (error) {
      expect(EmailAlreadyRegistredException).toThrowError();
    }
  });
});
