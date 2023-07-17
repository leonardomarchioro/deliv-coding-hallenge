import { ListRequestByUserPrismaConnector } from '../../../../../src/modules/Request/adapter/connectors/list-request-prisma.connector';
import { PrismaRepository } from '../../../../../src/global/repositories/prisma.repository';
import { createdRequestModelMock } from '../../../../mocks/models/created-request.model.mock';

describe('ListRequestByUserPrismaConnector', () => {
  let connector: ListRequestByUserPrismaConnector;
  let repository: PrismaRepository;

  const userId = 1;

  beforeEach(() => {
    repository = {
      request: {
        findMany: jest.fn().mockResolvedValue([createdRequestModelMock]),
      },
    } as unknown as PrismaRepository;

    connector = new ListRequestByUserPrismaConnector(repository);
  });

  it('should be execute', async () => {
    const result = await connector.execute(userId);

    expect(result).toHaveLength(1);
    expect(result).toEqual([createdRequestModelMock]);
    expect(repository.request.findMany).toHaveBeenCalledWith({
      where: {
        userId,
      },
      select: {
        id: true,
        clientName: true,
        deliveryAddress: true,
        status: true,
        userId: true,
      },
    });
  });
});
