import { IsOptional, IsNumber, IsString } from "class-validator";
import { updateAddressModel } from "../../core/models/update-address.model";

export class UpdateAddressDto implements updateAddressModel {
    @IsString()
    @IsOptional()
    street: string

    @IsNumber()
    @IsOptional()
    number: number

    @IsString()
    @IsOptional()
    district: string

    constructor(builder: updateAddressModel) {
        Object.assign(this, builder)
      }
}