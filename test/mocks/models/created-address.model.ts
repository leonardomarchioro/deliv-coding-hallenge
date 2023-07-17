import { faker } from '@faker-js/faker';
import { CreatedAddressModel } from '../../../src/modules/Address/core/models/created-address.model';

export const createdAddressModelMock: CreatedAddressModel = {
  id: faker.number.int(),
  street: faker.location.street(),
  district: faker.location.street(),
  number: faker.number.int(),
};
