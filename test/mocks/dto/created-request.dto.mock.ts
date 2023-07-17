import { CreatedRequestDto } from "../../../src/modules/Request/infra/dtos/created-request.dto";
import { createdRequestModelMock } from "../models/created-request.model.mock";

export const createdRequestDTOMock: CreatedRequestDto = new CreatedRequestDto(createdRequestModelMock);