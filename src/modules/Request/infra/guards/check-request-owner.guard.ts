import { CanActivate, ExecutionContext, Injectable, } from "@nestjs/common";
import { RequestService } from "../../adapter/services/request.service";
import { NotFoundRequestException } from "../../core/exceptions/not-found-request.exception";

@Injectable()
export class CheckRequestOwner implements CanActivate {
    constructor(
        private readonly service: RequestService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest()

      const { userId, params } = request

      const duplicate = await this.service.find(Number(params.id), userId) 

        if(!duplicate){
            throw new NotFoundRequestException()
        }

        return true
    }
}