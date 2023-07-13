import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { UpdateRequestModel } from "../../core/model/update-request.model";
import { RequestStatus } from "@prisma/client";

export class UpdateRequestDto implements UpdateRequestModel {
    @IsString()
    @IsOptional()
    clientName: string

    @IsNumber()
    @IsOptional()
    deliveryAddressId: number

    @IsEnum(RequestStatus)
    @IsOptional()
    status: RequestStatus
}