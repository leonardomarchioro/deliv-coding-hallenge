import { hash } from 'bcryptjs';
import { BcryptEncryptDataConnector } from '../../../../../src/modules/Authentication/adapter/connectors/bcrypt-encrypt-data.connector';

jest.mock('bcryptjs');

describe('BcryptEncryptDataConnector', () => {
  let connector: BcryptEncryptDataConnector;

  beforeEach(() => {
    connector = new BcryptEncryptDataConnector();
    (hash as jest.Mock).mockReturnValue(true);
  });

  it('should be execute perform', async () => {
    await connector.perform('hash');

    expect(hash).toHaveBeenCalled();
  });
});
