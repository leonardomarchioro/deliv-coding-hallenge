import { CreatedAddressModel } from "../models/created-address.model";
import { FindAddressModel } from "../models/find-address.model";

export abstract class FindAddressFeature {
    abstract execute(data: FindAddressModel): Promise<CreatedAddressModel>
} 