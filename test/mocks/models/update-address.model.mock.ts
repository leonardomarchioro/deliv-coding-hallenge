import { faker } from "@faker-js/faker";
import { updateAddressModel } from "../../../src/modules/Address/core/models/update-address.model";

export const updateAddressModelMock: updateAddressModel = {
    street: faker.location.street(),
    district: faker.location.state()
}