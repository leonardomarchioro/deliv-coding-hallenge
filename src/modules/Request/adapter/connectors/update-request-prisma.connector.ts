import { Injectable } from "@nestjs/common";
import { UpdateRequestFeature } from "../../core/feature/update-request.feature";
import { PrismaRepository } from "../../../../global/repositories/prisma.repository";
import { CreatedRequestModel } from "../../core/model/created-request.model";
import { UpdateRequestDto } from "../../infra/dtos/update-request.dto";

@Injectable()
export class UpdateRequestPrismaConnector implements UpdateRequestFeature {
    constructor(
        private readonly prisma: PrismaRepository
    ) {}

    async execute(data: UpdateRequestDto, id: number): Promise<CreatedRequestModel> {
        return this.prisma.request.update({ where: { id }, data })
    }
}