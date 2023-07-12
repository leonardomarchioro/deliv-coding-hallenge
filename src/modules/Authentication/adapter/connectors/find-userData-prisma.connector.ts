import { Injectable } from '@nestjs/common'
import { PrismaRepository } from '../../../../global/repositories/prisma.repository'
import { CreatedUserDto } from '../../../Users/infra/dtos/created-user-dto'
import { FindUserModel } from '../../../Users/core/models/find-user.model'
import { FindUserDataFeature } from '../../core/features/find-userData.feature'

@Injectable()
export class FindUserDataPrismaConnector implements FindUserDataFeature {
  constructor(private readonly prisma: PrismaRepository) {}

  perform(where: FindUserModel): Promise<CreatedUserDto> {

    return this.prisma.user.findFirst({
      where
    })
  }
}
