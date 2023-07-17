import { PrismaRepository } from '../../../../../src/global/repositories/prisma.repository';
import { FindAddressPrismaConnector } from '../../../../../src/modules/Address/adapter/connector/find-address-prisma.connector';
import { createdAddressModelMock } from '../../../../mocks/models/created-address.model';

describe('FindAddressPrismaConnector', () => {
  let connector: FindAddressPrismaConnector;
  let repository: PrismaRepository;

  const userId = 1;

  beforeEach(() => {
    repository = {
      address: {
        findFirst: jest.fn().mockResolvedValue(createdAddressModelMock),
      },
    } as unknown as PrismaRepository;

    connector = new FindAddressPrismaConnector(repository);
  });

  it('should be execute', async () => {
    const result = await connector.execute({ userId });

    expect(result).toEqual(createdAddressModelMock);
    expect(repository.address.findFirst).toHaveBeenCalledWith({
      where: { userId },
    });
  });
});
