import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { DecodedUserTokenFeature } from "../../core/features/decode-user-token.feature";
import { DecodedUserTokenModel } from "../../core/models/decoded-user-token.model";

@Injectable()
export class DecodedUserTokenJWTConnector implements DecodedUserTokenFeature {
    constructor(private readonly jwtService: JwtService) {}

    async perform(token: string): Promise<DecodedUserTokenModel> {

        const { sub } = this.jwtService.decode(token) as { sub: string }
        
        return {
            userId: Number(sub)
        }
    }
}