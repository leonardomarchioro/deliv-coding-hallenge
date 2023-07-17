import { IsNumber, IsString } from "class-validator";
import { CreateRequestModel } from "../../core/model/create-request.model";

export class CreateRequestDto implements CreateRequestModel {
    @IsString()
    clientName: string

    @IsNumber()
    deliveryAddressId: number

    constructor(builder: CreateRequestModel) {
        Object.assign(this, builder)
      }
}