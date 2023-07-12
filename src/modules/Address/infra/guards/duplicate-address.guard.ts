import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { AddressService } from "../../adapter/service/address.service";
import { DuplicateAddressException } from "../../core/exceotions/duplicate-address.exception";

@Injectable()
export class DuplicateAddressGuard implements CanActivate {
    constructor(
        private readonly service: AddressService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest()

      const { body, userId, method, params } = request

      const duplicate = await this.service.findAddress({ ...body, userId }) 

        if(duplicate){
            if(method === "POST" || duplicate.id != params.id) throw new DuplicateAddressException()
        }

        return true
    }
}