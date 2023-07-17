import { faker } from "@faker-js/faker";
import { CreateAddressModel } from "../../../src/modules/Address/core/models/create-address.model";

export const createAddressModelMock: CreateAddressModel = {
    street: faker.location.street(),
    district: faker.location.street(),
    number: faker.number.int()
}