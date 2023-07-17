import { faker } from '@faker-js/faker'
import { CreatedUserModel } from "../../../src/modules/Users/core/models/created-user.model";

export const createdUserModelMock: CreatedUserModel = {
    id: faker.number.int(),
    name: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
}