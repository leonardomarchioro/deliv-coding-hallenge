import { faker } from "@faker-js/faker";
import { UpdateRequestModel } from "../../../src/modules/Request/core/model/update-request.model";

export const updateRequestModelMock: UpdateRequestModel = {
    clientName: faker.internet.userName(),
    deliveryAddressId: faker.number.int()
}