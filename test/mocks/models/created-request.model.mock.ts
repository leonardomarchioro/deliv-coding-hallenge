import { faker } from "@faker-js/faker";
import { RequestStatus } from "@prisma/client";
import { CreatedRequestModel } from "../../../src/modules/Request/core/model/created-request.model";
import { createdAddressModelMock } from "./created-address.model";

export const createdRequestModelMock: CreatedRequestModel = {
    id: faker.number.int(),
    clientName: faker.internet.userName(),
    deliveryAddress: createdAddressModelMock,
    status: RequestStatus.awaiting,
    userId: faker.number.int()
}