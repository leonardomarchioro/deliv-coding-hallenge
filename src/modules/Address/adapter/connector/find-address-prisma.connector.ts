import { Injectable } from "@nestjs/common";
import { FindAddressFeature } from "../../core/feature/find-address.feature";
import { PrismaRepository } from "../../../../global/repositories/prisma.repository";
import { FindAddressModel } from "../../core/models/find-address.model";

@Injectable()
export class FindAddressPrismaConnector implements FindAddressFeature {
    constructor (
        private readonly prisma: PrismaRepository
    ) {}

    async execute( where: FindAddressModel )  {
        return this.prisma.address.findFirst({ where })
    }
}