import { Injectable } from "@nestjs/common";
import { EncryptedDataCompareFeature } from "../../core/features/encrypted-data-compare";
import { compare } from 'bcryptjs'

@Injectable()
export class BcryptEncryptedDataCompareConnector implements EncryptedDataCompareFeature {
    async perform(data: string, dataToCompare: string): Promise<boolean> {
        return compare(data, dataToCompare)
    }
}