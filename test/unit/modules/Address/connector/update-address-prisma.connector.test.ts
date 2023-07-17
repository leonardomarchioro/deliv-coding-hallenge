import { UpdateAddressPrismaConnector } from '../../../../../src/modules/Address/adapter/connector/update-address-prisma.connector';
import { PrismaRepository } from '../../../../../src/global/repositories/prisma.repository';
import { createdAddressModelMock } from '../../../../mocks/models/created-address.model';
import { updateAddressModelMock } from '../../../../mocks/models/update-address.model.mock';

describe('UpdateAddressPrismaConnector', () => {
  let connector: UpdateAddressPrismaConnector;
  let repository: PrismaRepository;

  const id = 1;

  beforeEach(() => {
    repository = {
      address: {
        update: jest.fn().mockResolvedValue(createdAddressModelMock),
      },
    } as unknown as PrismaRepository;

    connector = new UpdateAddressPrismaConnector(repository);
  });

  it('should be execute', async () => {
    const result = await connector.execute(updateAddressModelMock, id);

    expect(result).toEqual(createdAddressModelMock);
    expect(repository.address.update).toHaveBeenCalledWith({
      where: { id },
      data: updateAddressModelMock
    });
  });
});
