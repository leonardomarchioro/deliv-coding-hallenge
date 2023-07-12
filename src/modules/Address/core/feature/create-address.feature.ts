import { CreateAddressModel } from "../models/create-address.model";
import { CreatedAddressModel } from "../../core/models/created-address.model";

export abstract class CreateAddressFeature {
    abstract execute(data: CreateAddressModel, userId: number): Promise<CreatedAddressModel>
} 