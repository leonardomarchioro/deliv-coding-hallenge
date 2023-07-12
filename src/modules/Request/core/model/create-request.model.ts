import { CreateAddressModel } from "src/modules/Address/core/models/create-address.model"

export interface CreateRequestModel {
    clientName: string
    deliveryAddressId?: number
}