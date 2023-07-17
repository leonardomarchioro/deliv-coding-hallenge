import { CreateRequestFeature } from '../../../../../src/modules/Request/core/feature/create-request.feature';
import { RequestService } from '../../../../../src/modules/Request/adapter/services/request.service';
import { createRequestDTOMock } from '../../../../mocks/dto/create-request.dto.mock';
import { updateRequestDTOMock } from '../../../../mocks/dto/update-request.dto.mock';
import { FindRequestFeature } from '../../../../../src/modules/Request/core/feature/find-request.feature';
import { ListRequestByUserFeature } from '../../../../../src/modules/Request/core/feature/list-request-by-user.feature';
import { UpdateRequestFeature } from '../../../../../src/modules/Request/core/feature/update-request.feature';
import { createdRequestModelMock } from '../../../../mocks/models/created-request.model.mock';

describe('RequestService', () => {
  let service: RequestService;

  let createRequestFeature: CreateRequestFeature;
  let findRequestFeature: FindRequestFeature;
  let listRequestFeature: ListRequestByUserFeature;
  let updateRequestFeature: UpdateRequestFeature;

  const userId = 1;
  const id = 1;

  beforeEach(() => {
    createRequestFeature = {
      execute: jest.fn().mockResolvedValue(createdRequestModelMock),
    };
    findRequestFeature = {
      execute: jest.fn().mockResolvedValue(createdRequestModelMock),
    };
    listRequestFeature = {
      execute: jest.fn().mockResolvedValue([createdRequestModelMock]),
    };
    updateRequestFeature = {
      execute: jest.fn().mockResolvedValue(createdRequestModelMock),
    };

    service = new RequestService(
      createRequestFeature,
      findRequestFeature,
      listRequestFeature,
      updateRequestFeature,
    );
  });

  it('should be create', async () => {
    const result = await service.create(createRequestDTOMock, userId);

    expect(result).toEqual(createdRequestModelMock);
    expect(createRequestFeature.execute).toHaveBeenCalledWith(
      createRequestDTOMock,
      userId,
    );
  });

  it('should be list', async () => {
    const result = await service.list(userId);

    expect(result).toHaveLength(1);
    expect(result).toEqual([createdRequestModelMock]);
    expect(listRequestFeature.execute).toHaveBeenCalledWith(userId);
  });

  it('should be find', async () => {
    const result = await service.find(id, userId);

    expect(result).toEqual(createdRequestModelMock);
    expect(findRequestFeature.execute).toHaveBeenCalledWith({ id, userId });
  });

  it('should be update', async () => {
    const result = await service.update(id, updateRequestDTOMock);

    expect(result).toEqual(createdRequestModelMock);
    expect(updateRequestFeature.execute).toHaveBeenCalledWith(
      updateRequestDTOMock,
      id,
    );
  });
});
