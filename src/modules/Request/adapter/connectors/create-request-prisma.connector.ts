import { Injectable } from "@nestjs/common";
import { CreateRequestFeature } from "../../core/feature/create-request.feature";
import { PrismaRepository } from "../../../../global/repositories/prisma.repository";
import { CreatedRequestModel } from "../../core/model/created-request.model";
import { CreateRequestDto } from "../../infra/dtos/create-request.dto";

@Injectable()
export class CreateRequestPrismaConnector implements CreateRequestFeature {
    constructor(
        private readonly prisma: PrismaRepository
    ) {}

    async execute(data: CreateRequestDto, userId: number): Promise<CreatedRequestModel> {

        return this.prisma.request.create({ data: { ...data, userId}, select: {
            id: true,
            clientName: true,
            deliveryAddress: true,
            status: true,
            userId: true
        } })
    }
}