import { Injectable } from "@nestjs/common";
import { PrismaRepository } from "../../../../global/repositories/prisma.repository";
import { CreateUserModel } from "../../core/models/create-user.model";
import { CreatedUserModel } from "../../core/models/created-user.model";
import { CreateUserFeature } from "../../core/features/create-user.feature";

@Injectable()
export class CreateUserPrismaConnector implements CreateUserFeature {
    constructor(private readonly prisma: PrismaRepository) {}

    async execute(user: CreateUserModel): Promise<CreatedUserModel> {
        return this.prisma.user.create({
            data: user
        })
    }
}