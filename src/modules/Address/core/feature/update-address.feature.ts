import { CreatedAddressModel } from "../models/created-address.model";
import { updateAddressModel } from "../models/update-address.model";

export abstract class UpdateAddressFeature {
    abstract execute(data: updateAddressModel, id: number): Promise<CreatedAddressModel>
}