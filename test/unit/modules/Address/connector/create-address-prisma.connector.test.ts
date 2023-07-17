import { PrismaRepository } from '../../../../../src/global/repositories/prisma.repository';
import { CreateAddressPrismaConnector } from '../../../../../src/modules/Address/adapter/connector/create-address-prisma.connector';
import { createAddressModelMock } from '../../../../mocks/models/create-address.model.mock';
import { createdAddressModelMock } from '../../../../mocks/models/created-address.model';

describe('CreateAddressPrismaConnector', () => {
  let connector: CreateAddressPrismaConnector;
  let repository: PrismaRepository;

  const userId = 1;

  beforeEach(() => {
    repository = {
      address: {
        create: jest.fn().mockResolvedValue(createdAddressModelMock),
      },
    } as unknown as PrismaRepository;

    connector = new CreateAddressPrismaConnector(repository);
  });

  it('should be execute', async () => {
    const result = await connector.execute(createAddressModelMock, userId);

    expect(result).toEqual(createdAddressModelMock);
    expect(repository.address.create).toHaveBeenCalledWith({
      data: {
        ...createAddressModelMock,
        userId,
      },
    });
  });
});
