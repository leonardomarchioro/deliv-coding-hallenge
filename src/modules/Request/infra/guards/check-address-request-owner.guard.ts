import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AddressService } from '../../../Address/adapter/service/address.service';
import { NotFoundAddressException } from '../../../Address/core/exceptions/address-not-found.exception';

@Injectable()
export class CheckAddressRequestOwner implements CanActivate {
  constructor(private readonly service: AddressService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const { userId, body, method } = request;
    const { deliveryAddressId } = body;

    if (method === 'PATCH') {
      if (!deliveryAddressId) {
        return true;
      }
    }

    const address = await this.service.findAddress({
      id: deliveryAddressId,
      userId,
    });

    if(!address) throw new NotFoundAddressException();

    return true;
  }
}
