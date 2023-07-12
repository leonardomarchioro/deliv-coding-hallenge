import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt'

import { TokenGeneratorFeature } from "../../core/features/token-generator.feature";
import { GeneratedTokenModel } from "../../core/models/generated-token.model";

@Injectable()
export class TokenGeneratorJWTConnector implements TokenGeneratorFeature {
    constructor(private readonly jwtService: JwtService) {}
    perform(userId: number): GeneratedTokenModel {
        return {
            token: this.jwtService.sign({ sub: String(userId)}, {
                expiresIn: '1d'
            })
        }
    }
}