import { UpdateAddressDto } from "../../../src/modules/Address/infra/dto/update-address.dto";
import { updateAddressModelMock } from "../models/update-address.model.mock";

export const updateAddressDTOMock = new UpdateAddressDto(updateAddressModelMock)