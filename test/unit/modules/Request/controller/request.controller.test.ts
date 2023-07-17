import { RequestService } from '../../../../../src/modules/Request/adapter/services/request.service';
import { RequestController } from '../../../../../src/modules/Request/infra/controllers/request.controller';
import { createRequestDTOMock } from '../../../../mocks/dto/create-request.dto.mock';
import { createdRequestDTOMock } from '../../../../mocks/dto/created-request.dto.mock';
import { updateRequestDTOMock } from '../../../../mocks/dto/update-request.dto.mock';

describe('RequestController', () => {
  let controller: RequestController;
  let service: RequestService;

  const userId = 1;
  const id = '1';

  beforeEach(() => {
    service = {
      create: jest.fn().mockResolvedValue(createdRequestDTOMock),
      list: jest.fn().mockResolvedValue([createdRequestDTOMock]),
      find: jest.fn().mockResolvedValue(createdRequestDTOMock),
      update: jest.fn().mockResolvedValue(createdRequestDTOMock),
    } as unknown as RequestService;

    controller = new RequestController(service);
  });

  it('should be create', async () => {
    const result = await controller.create(createRequestDTOMock, userId);

    expect(result).toEqual(createdRequestDTOMock);
    expect(service.create).toHaveBeenCalledWith(createRequestDTOMock, userId);
  });

  it('should be list', async () => {
    const result = await controller.list(userId);

    expect(result).toHaveLength(1);
    expect(result).toEqual([createdRequestDTOMock]);
    expect(service.list).toHaveBeenCalledWith(userId);

  });

  it('should be find', async () => {
    const result = await controller.find(userId, { id });

    expect(result).toEqual(createdRequestDTOMock);
    expect(service.find).toHaveBeenCalledWith(Number(id), userId);

  });

  it('should be update', async () => {
    const result = await controller.update({ id }, updateRequestDTOMock);

    expect(result).toEqual(createdRequestDTOMock);
    expect(service.update).toHaveBeenCalledWith(Number(id), updateRequestDTOMock);

  });
});
