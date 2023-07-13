import { RequestStatus } from "@prisma/client"

export interface FindRequestModel {
    id?: number
    userId: number
    clientName?: string
    deliveryAddressId?: number
    status?: RequestStatus
}