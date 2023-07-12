import { Injectable } from "@nestjs/common";
import { CreateAddressFeature } from "../../core/feature/create-address.feature";
import { PrismaRepository } from "../../../../global/repositories/prisma.repository";
import { CreatedAddressModel } from "../../core/models/created-address.model";
import { CreateAddressModel } from "../../core/models/create-address.model";

@Injectable()
export class CreateAddressPrismaConnector implements CreateAddressFeature {
    constructor(private readonly prisma: PrismaRepository) {}

    async execute(data: CreateAddressModel, userId: number): Promise<CreatedAddressModel> {
        return this.prisma.address.create({ data: { ...data, userId }})
    }
}