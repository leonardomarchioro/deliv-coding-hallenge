import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from '../../infra/dtos/create-request.dto';
import { CreateRequestFeature } from '../../core/feature/create-request.feature';
import { FindRequestFeature } from '../../core/feature/find-request.feature';
import { ListRequestByUserFeature } from '../../core/feature/list-request-by-user.feature';
import { UpdateRequestDto } from '../../infra/dtos/update-request.dto';
import { UpdateRequestFeature } from '../../core/feature/update-request.feature';

@Injectable()
export class RequestService {
    constructor(
        private readonly createRequestFeature: CreateRequestFeature,
        private readonly findRequestFeature: FindRequestFeature,
        private readonly listRequestFeature: ListRequestByUserFeature,
        private readonly updateRequestFeature: UpdateRequestFeature
    ) {}

    async create(body: CreateRequestDto, userId: number){
        return this.createRequestFeature.execute(body, userId)
    }

    async find(id: number, userId: number){
        return this.findRequestFeature.execute({id, userId})
    }
    
    async list(userId: number){
        return this.listRequestFeature.execute(userId)
    }
    
    async update(id: number, data: UpdateRequestDto){
        return this.updateRequestFeature.execute(data, id)
    }
}
