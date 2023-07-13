import { Injectable } from "@nestjs/common";
import { FindRequestFeature } from "../../core/feature/find-request.feature";
import { CreatedRequestModel } from "../../core/model/created-request.model";
import { FindRequestModel } from "../../core/model/find-request.model";
import { PrismaRepository } from "../../../../global/repositories/prisma.repository";

@Injectable()
export class FindRequestPrismaConnector implements FindRequestFeature {
    constructor(
        private readonly prisma: PrismaRepository
    ) {}
    async execute(where: FindRequestModel): Promise<CreatedRequestModel> {
        return this.prisma.request.findFirst({ where, select: {
            id: true,
            clientName: true,
            deliveryAddress: true,
            status: true,
            userId: true
        } })
    }
}