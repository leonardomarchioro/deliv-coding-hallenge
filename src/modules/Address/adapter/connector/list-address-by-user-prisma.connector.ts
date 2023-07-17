import { Injectable } from "@nestjs/common";
import { ListAddressByUserFeature } from "../../core/feature/list-address-by-user.feature";
import { PrismaRepository } from "../../../../global/repositories/prisma.repository";
import { CreatedAddressModel } from "../../core/models/created-address.model";
import { ListAddressByUserModel } from "../../core/models/list-address-by-user.model";

@Injectable()
export class ListAddressByUserPrismaConnector implements ListAddressByUserFeature {
    constructor(
        private readonly prisma: PrismaRepository
    ) {}

    async execute( { userId } : ListAddressByUserModel): Promise<CreatedAddressModel[]> {
        return this.prisma.address.findMany({ where: { userId }})
    }
}