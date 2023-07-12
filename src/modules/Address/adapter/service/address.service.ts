import { Injectable } from "@nestjs/common";
import { CreateAddressFeature } from "../../core/feature/create-address.feature";
import { CreateAddressDto } from "../../infra/dto/create-address.dto";
import { FindAddressModel } from "../../core/models/find-address.model";
import { FindAddressFeature } from "../../core/feature/find-address.feature";
import { ListAddressByUserFeature } from "../../core/feature/list-address-by-user.feature";
import { UpdateAddressFeature } from "../../core/feature/update-address.feature";
import { UpdateAddressDto } from "../../infra/dto/update-address.dto";
import { DeleteAddressFeature } from "../../core/feature/delete-address.feature";

@Injectable()
export class AddressService {
    constructor (
        private readonly createAddressFeature: CreateAddressFeature,
        private readonly findAddressFeature: FindAddressFeature,
        private readonly listAddressByUserFeature: ListAddressByUserFeature,
        private readonly updateAddressFeature: UpdateAddressFeature,
        private readonly deleteAddressFeature: DeleteAddressFeature
    ) {}

    async create( data: CreateAddressDto, userId: number){
        return this.createAddressFeature.execute(data, userId)
    }

    async findAddress(data: FindAddressModel) {
        return this.findAddressFeature.execute(data)
    }

    async listAddressByUser(userId: number) {
        return this.listAddressByUserFeature.execute({ userId })
    }

    async updateAddress(data: UpdateAddressDto, id: number){
        return this.updateAddressFeature.execute(data, id)
    }

    async deleteAddress(id: number){
        return this.deleteAddressFeature.execute(id)
    }
}