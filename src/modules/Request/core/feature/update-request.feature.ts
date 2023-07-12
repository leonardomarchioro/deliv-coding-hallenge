import { UpdateRequestDto } from "../../infra/dtos/update-request.dto";
import { CreatedRequestModel } from "../model/created-request.model";

export abstract class UpdateRequestFeature {
    abstract execute(data: UpdateRequestDto, id: number): Promise<CreatedRequestModel>
}