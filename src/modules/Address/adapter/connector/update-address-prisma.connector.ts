import { Injectable } from "@nestjs/common";
import { UpdateAddressFeature } from "../../core/feature/update-address.feature";
import { PrismaRepository } from "../../../../global/repositories/prisma.repository";
import { CreatedAddressModel } from "../../core/models/created-address.model";
import { updateAddressModel } from "../../core/models/update-address.model";

@Injectable()
export class UpdateAddressPrismaConnector implements UpdateAddressFeature {
    constructor(
        private readonly prisma: PrismaRepository
    ) {}

    async execute(data: updateAddressModel, id: number): Promise<CreatedAddressModel> {
        return this.prisma.address.update({ where: { id }, data})
    }
}