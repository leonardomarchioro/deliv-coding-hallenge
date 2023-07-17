import { CreatedUserDto } from "../../../src/modules/Users/infra/dtos/created-user-dto";
import { createdUserModelMock } from "../models/created-user.model.mock";

export const createdUserDtoMock: CreatedUserDto = new CreatedUserDto(createdUserModelMock)