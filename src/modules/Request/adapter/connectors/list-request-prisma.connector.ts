import { Injectable } from "@nestjs/common";
import { ListRequestByUserFeature } from "../../core/feature/list-request-by-user.feature";
import { PrismaRepository } from "../../../../global/repositories/prisma.repository";
import { CreatedRequestModel } from "../../core/model/created-request.model";

@Injectable()
export class ListRequestByUserPrismaConnector implements ListRequestByUserFeature {
    constructor(
        private readonly prisma: PrismaRepository
    ) {}

    execute(userId: number): Promise<CreatedRequestModel[]> {
        return this.prisma.request.findMany({ where: { userId }, select: {
            id: true,
            clientName: true,
            deliveryAddress: true,
            status: true,
            userId: true
        }})
    }
}