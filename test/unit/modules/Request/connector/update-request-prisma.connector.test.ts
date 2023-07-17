import { updateRequestDTOMock } from '../../../../mocks/dto/update-request.dto.mock';
import { PrismaRepository } from '../../../../../src/global/repositories/prisma.repository';
import { createdRequestModelMock } from '../../../../mocks/models/created-request.model.mock';
import { UpdateRequestPrismaConnector } from '../../../../../src/modules/Request/adapter/connectors/update-request-prisma.connector';

describe('UpdateRequestPrismaConnector', () => {
  let connector: UpdateRequestPrismaConnector;
  let repository: PrismaRepository;

  const id = 1;

  beforeEach(() => {
    repository = {
      request: {
        update: jest.fn().mockResolvedValue(createdRequestModelMock),
      },
    } as unknown as PrismaRepository;

    connector = new UpdateRequestPrismaConnector(repository);
  });

  it('should be execute', async () => {
    const result = await connector.execute(updateRequestDTOMock, id);

    expect(result).toEqual(createdRequestModelMock);
    expect(repository.request.update).toHaveBeenCalledWith({
      where: { id },
      data: updateRequestDTOMock,
    });
  });
});
