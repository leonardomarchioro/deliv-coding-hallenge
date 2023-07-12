import { IsNumber, IsString } from "class-validator";
import { CreateAddressModel } from "../../core/models/create-address.model";

export class CreateAddressDto implements CreateAddressModel {
    @IsString()
    street: string

    @IsNumber()
    number: number

    @IsString()
    district: string

    constructor(builder: CreateAddressModel) {
        Object.assign(this, builder)
      }
}