import { Injectable } from "@nestjs/common";

import { PrismaRepository } from "../../../../global/repositories/prisma.repository";
import { CreatedUserModel } from "../../core/models/created-user.model";
import { FindUserModel } from "../../core/models/find-user.model";
import { FindUserFeature } from "../../core/features/find-user.feature";

@Injectable()
export class FindUserPrismaConnector implements FindUserFeature {
    constructor(private readonly prisma: PrismaRepository) {}

    async execute(where: FindUserModel): Promise<CreatedUserModel> {

        return this.prisma.user.findFirst({
            where
        })
    }
}