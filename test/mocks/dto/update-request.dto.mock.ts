import { UpdateRequestDto } from "../../../src/modules/Request/infra/dtos/update-request.dto";
import { updateRequestModelMock } from "../models/update-request.model.mock";

export const updateRequestDTOMock: UpdateRequestDto = new UpdateRequestDto(updateRequestModelMock);