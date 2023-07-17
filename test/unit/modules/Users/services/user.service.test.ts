import { CreateUserFeature } from '../../../../../src/modules/Users/core/features/create-user.feature';
import { UserService } from '../../../../../src/modules/Users/adapter/services/user.service';
import { FindUserFeature } from '../../../../../src/modules/Users/core/features/find-user.feature';
import { EncryptDataFeature } from '../../../../../src/modules/Authentication/core/features/encrypt-data.feature';
import { createUserModelMock } from '../../../../mocks/models/create-user.model.mock';
import { createdUserModelMock } from '../../../../mocks/models/created-user.model.mock';
import { createUserDTOMock } from '../../../../mocks/dto/create-user.dto.mock';
import { createdUserDtoMock } from '../../../../mocks/dto/created-user.dto.mock';

describe('UserService', () => {
  let service: UserService;

  let createUserFeature: CreateUserFeature;
  let findUserFeature: FindUserFeature;
  let encryptPasswordFeature: EncryptDataFeature;

  beforeEach(() => {
    createUserFeature = {
      execute: jest.fn().mockResolvedValue(createUserModelMock),
    };
    findUserFeature = {
      execute: jest.fn().mockResolvedValue(createdUserModelMock),
    };
    encryptPasswordFeature = {
      perform: jest.fn().mockResolvedValue('@abcd125'),
    };

    service = new UserService(
      createUserFeature,
      findUserFeature,
      encryptPasswordFeature,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be create user', async () => {
    const result = await service.create(createUserDTOMock);

    const { password, ...user } = createUserDTOMock;

    expect(result).toEqual(user);
    expect(createUserFeature.execute).toHaveBeenCalledWith({
      ...createUserDTOMock,
      password: '@abcd125',
    });
    expect(encryptPasswordFeature.perform).toHaveBeenCalled();
  });

  it('should be find user', async () => {
    const id = 1

    const result = await service.find(id);
    const { password, ...user } = createdUserDtoMock;

    expect(result).toEqual(user);
    expect(findUserFeature.execute).toHaveBeenCalledWith({ id });
  })
});
