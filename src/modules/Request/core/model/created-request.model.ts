import { CreatedAddressModel } from "src/modules/Address/core/models/created-address.model"
import { RequestStatus } from "@prisma/client"

export interface CreatedRequestModel {
    id: number
    clientName: string
    status: RequestStatus
    deliveryAddress?: CreatedAddressModel
    userId?: number
}