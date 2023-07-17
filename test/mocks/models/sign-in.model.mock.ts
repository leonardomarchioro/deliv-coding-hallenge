import { faker } from '@faker-js/faker'
import { SignInModel } from '../../../src/modules/Authentication/core/models/sign-in.model'


export const signInModelMock: SignInModel = {
    email: faker.internet.email(),
    password: faker.internet.password()
};