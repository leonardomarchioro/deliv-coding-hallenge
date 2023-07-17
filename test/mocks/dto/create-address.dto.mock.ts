import { CreateAddressDto } from "../../../src/modules/Address/infra/dto/create-address.dto";
import { createAddressModelMock } from "../models/create-address.model.mock";

export const createAddressDTOMock = new CreateAddressDto(createAddressModelMock);