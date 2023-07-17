import { UserController } from '../../../../../src/modules/Users/infra/controllers/user.controller';
import { UserService } from '../../../../../src/modules/Users/adapter/services/user.service';
import { createdUserDtoMock } from '../../../../mocks/dto/created-user.dto.mock';
import { createUserDTOMock } from '../../../../mocks/dto/create-user.dto.mock';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(() => {
    service = {
      create: jest.fn().mockResolvedValue(createdUserDtoMock),
      find: jest.fn().mockResolvedValue(createdUserDtoMock),
    } as unknown as UserService;

    controller = new UserController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be execute "create"', async () => {
    const result = await controller.create(createUserDTOMock);

    expect(service.create).toHaveBeenCalledWith(createUserDTOMock);
    expect(result).toEqual(createdUserDtoMock);
  });

  it('should be execute "find"', async () => {
    const userId = 1;

    const result = await controller.find(userId);

    expect(service.find).toHaveBeenCalledWith(userId);
    expect(result).toEqual(createdUserDtoMock);
  });
});
