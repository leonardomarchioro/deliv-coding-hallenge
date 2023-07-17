import { PrismaRepository } from '../../../../../src/global/repositories/prisma.repository';
import { CreateRequestPrismaConnector } from '../../../../../src/modules/Request/adapter/connectors/create-request-prisma.connector';
import { createRequestDTOMock } from '../../../../mocks/dto/create-request.dto.mock';
import { createdRequestModelMock } from '../../../../mocks/models/created-request.model.mock';

describe('CreateRequestPrismaConnector', () => {
  let connector: CreateRequestPrismaConnector;
  let repository: PrismaRepository;

  const userId = 1;

  beforeEach(() => {
    repository = {
      request: {
        create: jest.fn().mockResolvedValue(createdRequestModelMock),
      },
    } as unknown as PrismaRepository;

    connector = new CreateRequestPrismaConnector(repository);
  });

  it('should be execute', async () => {
    const result = await connector.execute(createRequestDTOMock, userId);

    expect(result).toEqual(createdRequestModelMock);
    expect(repository.request.create).toHaveBeenCalledWith({
      data: {
        ...createRequestDTOMock,
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
