import { faker } from "@faker-js/faker";
import { CreateRequestModel } from "../../../src/modules/Request/core/model/create-request.model";

export const createRequestModelMock: CreateRequestModel = {
    clientName: faker.internet.userName(),
    deliveryAddressId: faker.number.int()
}