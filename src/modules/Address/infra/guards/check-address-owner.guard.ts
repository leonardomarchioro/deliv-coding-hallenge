import { CanActivate, ExecutionContext, Injectable, } from "@nestjs/common";
import { AddressService } from "../../adapter/service/address.service";
import { NotFoundAddressException } from "../../core/exceptions/address-not-found.exception";

@Injectable()
export class CheckAddressOwner implements CanActivate {
    constructor(
        private readonly service: AddressService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest()

      const { userId, params } = request

      const duplicate = await this.service.findAddress({ id: Number(params.id), userId }) 

        if(!duplicate){
            throw new NotFoundAddressException()
        }

        return true
    }
}