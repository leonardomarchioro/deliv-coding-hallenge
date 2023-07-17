import { Injectable } from "@nestjs/common";
import { DeleteAddressFeature } from "../../core/feature/delete-address.feature";
import { PrismaRepository } from "../../../../global/repositories/prisma.repository";

@Injectable()
export class DeleteAddressPrismaConnector implements DeleteAddressFeature {
    constructor(
        private readonly prisma: PrismaRepository
    ) {}

    async execute(id: number): Promise<void> {
        await this.prisma.address.delete({ where: { id }})
    }
}