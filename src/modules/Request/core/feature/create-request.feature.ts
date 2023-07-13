import { CreateRequestDto } from "../../infra/dtos/create-request.dto";
import { CreatedRequestModel } from "../model/created-request.model";

export abstract class CreateRequestFeature {
    abstract execute(data: CreateRequestDto, userId: number): Promise<CreatedRequestModel>
}