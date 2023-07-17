import { faker } from '@faker-js/faker'
import { CreateUserModel } from "../../../src/modules/Users/core/models/create-user.model";

export const createUserModelMock: CreateUserModel = {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
}