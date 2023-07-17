import { ListAddressByUserPrismaConnector } from '../../../../../src/modules/Address/adapter/connector/list-address-by-user-prisma.connector';
import { PrismaRepository } from '../../../../../src/global/repositories/prisma.repository';
import { createdAddressModelMock } from '../../../../mocks/models/created-address.model';

describe('ListAddressByUserPrismaConnector', () => {
  let connector: ListAddressByUserPrismaConnector;
  let repository: PrismaRepository;

  const userId = 1;

  beforeEach(() => {
    repository = {
      address: {
        findMany: jest.fn().mockResolvedValue([createdAddressModelMock]),
      },
    } as unknown as PrismaRepository;

    connector = new ListAddressByUserPrismaConnector(repository);
  });

  it('should be execute', async () => {
    const result = await connector.execute({ userId });

    expect(result).toHaveLength(1);
    expect(result).toEqual([createdAddressModelMock]);
    expect(repository.address.findMany).toHaveBeenCalledWith({
      where: { userId },
    });
  });
});
