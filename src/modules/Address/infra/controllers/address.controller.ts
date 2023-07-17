import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { AuthorizationGuard } from "../../../Authentication/infra/guards/authorization.guard";
import { UserId } from "../../../../global/decorators/get-user-id.decorator";
import { AddressService } from "../../adapter/service/address.service";
import { CreateAddressDto } from "../dto/create-address.dto";
import { DuplicateAddressGuard } from "../guards/duplicate-address.guard";
import { UpdateAddressDto } from "../dto/update-address.dto";
import { CheckAddressOwner } from "../guards/check-address-owner.guard";

@Controller('address')
@UseGuards(AuthorizationGuard)
export class AddressController {
    constructor(private readonly addressService: AddressService) {}

    @Post()
    @UseGuards(DuplicateAddressGuard)
    async createAddress(
        @UserId() userId: number,
        @Body() data: CreateAddressDto,
    ) {
        return this.addressService.create(data, userId);
    }

    @Get()
    async listAddressByUser(
        @UserId() userId: number
    ){
        return this.addressService.listAddressByUser(userId)
    }

    @Patch(":id")
    @UseGuards(CheckAddressOwner, DuplicateAddressGuard)
    async updateAddress(
        @Body() data: UpdateAddressDto,
        @Param() { id }: { id: string }
    ) {
        return this.addressService.updateAddress(data, Number(id));
    }

    @Delete(":id")
    @UseGuards(CheckAddressOwner)
    async deleteAddress(
        @Param() { id }: { id: string }
    ) {
        return this.addressService.deleteAddress(Number(id));
    }
    
}