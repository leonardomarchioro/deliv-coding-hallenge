import { CheckUserTokenJWTConnector } from '../../../../../src/modules/Authentication/adapter/connectors/check-user-token-jwt.connector';
import { InvalidTokenException } from '../../../../../src/modules/Authentication/core/exceptions/invalid-token.exception';
import { verify } from 'jsonwebtoken';
import { ok } from 'assert';

jest.mock('jsonwebtoken');
jest.mock('assert');

describe('CheckUserTokenJWTConnector', () => {
  let connector: CheckUserTokenJWTConnector;

  beforeEach(() => {
    connector = new CheckUserTokenJWTConnector();
    (ok as jest.Mock).mockReturnValue(true);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return true for a valid token', async () => {
    (verify as jest.Mock).mockReturnValue(true);

    const result = await connector.perform('valid-token');

    expect(result).toBe(true);
    expect(verify).toHaveBeenCalledWith('valid-token', process.env.SECRET_KEY);
  });

  it('should throw InvalidTokenException for an invalid token', async () => {
    (verify as jest.Mock).mockImplementation(() => {
      throw new Error('Token verification failed');
    });

    try {
      await connector.perform('invalid-token');
    } catch (error) {
      expect(verify).toHaveBeenCalled();
      expect(InvalidTokenException).toThrow();
    }
  });
});
