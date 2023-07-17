import { CreatedAddressModel } from "../models/created-address.model";
import { ListAddressByUserModel } from "../models/list-address-by-user.model";

export abstract class ListAddressByUserFeature {
    abstract execute(data: ListAddressByUserModel): Promise<CreatedAddressModel[]>
} 