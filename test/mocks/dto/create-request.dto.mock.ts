import { CreateRequestDto } from "../../../src/modules/Request/infra/dtos/create-request.dto";
import { createRequestModelMock } from "../models/create-request.model.mock";

export const createRequestDTOMock: CreateRequestDto = new CreateRequestDto(createRequestModelMock)