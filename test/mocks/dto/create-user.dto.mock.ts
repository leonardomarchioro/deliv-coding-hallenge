import { CreateUserDto } from "../../../src/modules/Users/infra/dtos/create-user-dto";
import { createUserModelMock } from "../models/create-user.model.mock";

export const createUserDTOMock: CreateUserDto = new CreateUserDto(createUserModelMock)