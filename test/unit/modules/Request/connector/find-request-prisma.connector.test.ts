import { FindRequestPrismaConnector } from '../../../../../src/modules/Request/adapter/connectors/find-request-prisma.connector';
import { PrismaRepository } from '../../../../../src/global/repositories/prisma.repository';
import { createdRequestModelMock } from '../../../../mocks/models/created-request.model.mock';

describe('FindRequestPrismaConnector', () => {
  let connector: FindRequestPrismaConnector;
  let repository: PrismaRepository;

  const userId = 1;

  beforeEach(() => {
    repository = {
      request: {
        findFirst: jest.fn().mockResolvedValue(createdRequestModelMock),
      },
    } as unknown as PrismaRepository;

    connector = new FindRequestPrismaConnector(repository);
  });

  it('should be execute', async () => {
    const result = await connector.execute({ userId });

    expect(result).toEqual(createdRequestModelMock);
    expect(repository.request.findFirst).toHaveBeenCalledWith({
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
