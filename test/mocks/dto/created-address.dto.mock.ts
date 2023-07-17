import { CreateAddressDto } from "../../../src/modules/Address/infra/dto/create-address.dto";
import { createdAddressModelMock } from "../models/created-address.model";

export const createdAddressDTOMock = new CreateAddressDto(createdAddressModelMock);