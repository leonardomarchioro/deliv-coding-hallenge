import { createAddressDTOMock } from "../../../../mocks/dto/create-address.dto.mock";
import { AddressService } from "../../../../../src/modules/Address/adapter/service/address.service";
import { AddressController } from "../../../../../src/modules/Address/infra/controllers/address.controller";
import { updateAddressDTOMock } from "../../../../mocks/dto/update-address.dto.mock";

describe("AddressController", () => {
    let controller: AddressController;
    let service: AddressService;

    beforeEach(() => {
        service = {
            create: jest.fn().mockResolvedValue(createAddressDTOMock),
            listAddressByUser: jest.fn().mockResolvedValue([createAddressDTOMock]),
            updateAddress: jest.fn().mockResolvedValue(createAddressDTOMock),
            deleteAddress: jest.fn()
        } as unknown as AddressService;

        controller = new AddressController(service);
    });

    it('should execute createAddress', async () => {
        const result = await controller.createAddress(1, createAddressDTOMock);

        expect(result).toEqual(createAddressDTOMock);
        expect(service.create).toHaveBeenCalledWith(createAddressDTOMock, 1);
    });

    it('should execute listAddressByUser', async () => {
        const result = await controller.listAddressByUser(1);

        expect(result).toEqual([createAddressDTOMock]);
        expect(result).toHaveLength(1);
        expect(service.listAddressByUser).toHaveBeenCalledWith(1);
    });

    it('should execute updateAddress', async () => {
        const result = await controller.updateAddress(updateAddressDTOMock, {id: '1'});

        expect(result).toEqual(createAddressDTOMock);
        expect(service.updateAddress).toHaveBeenCalledWith(updateAddressDTOMock, 1);
    });

    it('should execute deleteAddress', async () => {
        await controller.deleteAddress({id: '1'});

        expect(service.deleteAddress).toHaveBeenCalledWith(1);
    });
});