import { RequestStatus } from "@prisma/client"

export interface UpdateRequestModel {
    clientName?: string
    deliveryAddressId?: number
    status?: RequestStatus
}