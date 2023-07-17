import { compare } from 'bcryptjs';
import { BcryptEncryptedDataCompareConnector } from '../../../../../src/modules/Authentication/adapter/connectors/bcrypt-encrypted-data-compare';

jest.mock('bcryptjs');

describe('BcryptEncryptedDataCompareConnector', () => {
  let connector: BcryptEncryptedDataCompareConnector;

  beforeEach(() => {
    connector = new BcryptEncryptedDataCompareConnector();
    (compare as jest.Mock).mockReturnValue(true);
  });

  it('shoul be execute perform', async () => {
    await connector.perform('data', 'compare');

    expect(compare).toHaveBeenCalled();
  });
});
