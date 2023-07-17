import { IsEnum, IsNumber, IsString } from "class-validator";
import { CreatedRequestModel } from "../../core/model/created-request.model";
import { RequestStatus } from "@prisma/client";
import { CreatedAddressModel } from "../../../Address/core/models/created-address.model";

export class CreatedRequestDto implements CreatedRequestModel {
    id: number
    userId?: number

    @IsEnum(RequestStatus)
    status: RequestStatus

    @IsString()
    clientName: string

    deliveryAddress?: CreatedAddressModel

    constructor(builder: CreatedRequestModel) {
        Object.assign(this, builder)
      }
}