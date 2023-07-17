import { createAddressDTOMock } from '../../../../mocks/dto/create-address.dto.mock';
import { AddressService } from '../../../../../src/modules/Address/adapter/service/address.service';
import { CreateAddressFeature } from '../../../../../src/modules/Address/core/feature/create-address.feature';
import { DeleteAddressFeature } from '../../../../../src/modules/Address/core/feature/delete-address.feature';
import { FindAddressFeature } from '../../../../../src/modules/Address/core/feature/find-address.feature';
import { ListAddressByUserFeature } from '../../../../../src/modules/Address/core/feature/list-address-by-user.feature';
import { UpdateAddressFeature } from '../../../../../src/modules/Address/core/feature/update-address.feature';
import { updateAddressDTOMock } from '../../../../mocks/dto/update-address.dto.mock';
import { createdAddressDTOMock } from '../../../../mocks/dto/created-address.dto.mock';

describe('AddressService', () => {
  let service: AddressService;

  let createAddressFeature: CreateAddressFeature;
  let findAddressFeature: FindAddressFeature;
  let listAddressByUserFeature: ListAddressByUserFeature;
  let updateAddressFeature: UpdateAddressFeature;
  let deleteAddressFeature: DeleteAddressFeature;

  const userId = 1;
  const id = 2;

  beforeEach(() => {
    createAddressFeature = {
      execute: jest.fn().mockResolvedValue(createdAddressDTOMock),
    };
    findAddressFeature = {
      execute: jest.fn().mockResolvedValue(createdAddressDTOMock),
    };
    listAddressByUserFeature = {
      execute: jest.fn().mockResolvedValue([createdAddressDTOMock]),
    };
    updateAddressFeature = {
      execute: jest.fn().mockResolvedValue(createdAddressDTOMock),
    };
    deleteAddressFeature = {
      execute: jest.fn(),
    };

    service = new AddressService(
      createAddressFeature,
      findAddressFeature,
      listAddressByUserFeature,
      updateAddressFeature,
      deleteAddressFeature,
    );
  });

  it('should be execute create', async () => {
    const result = await service.create(createAddressDTOMock, userId);

    expect(result).toEqual(createdAddressDTOMock);
    expect(createAddressFeature.execute).toHaveBeenCalledWith(
      createAddressDTOMock, userId
    );
  });

  it('should be execute findAddress', async () => {
    const result = await service.findAddress({ userId });

    expect(result).toEqual(createdAddressDTOMock);
    expect(findAddressFeature.execute).toHaveBeenCalledWith({ userId });
  });

  it('should be execute listAddressByUser', async () => {
    const result = await service.listAddressByUser(userId);

    expect(result).toEqual([createdAddressDTOMock]);
    expect(result).toHaveLength(1);
    expect(listAddressByUserFeature.execute).toHaveBeenCalledWith({ userId });
  });

  it('should be execute updateAddress', async () => {
    const result = await service.updateAddress(updateAddressDTOMock, id);

    expect(updateAddressFeature.execute).toHaveBeenCalledWith(
      updateAddressDTOMock,
      id,
    );
    expect(result).toEqual(createdAddressDTOMock);
  });

  it('should be execute deleteAddress', async () => {
    await service.deleteAddress(id);

    expect(deleteAddressFeature.execute).toHaveBeenCalledWith(id);
  });
});
