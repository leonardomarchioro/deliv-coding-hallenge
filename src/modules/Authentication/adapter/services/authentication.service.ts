import { Injectable } from "@nestjs/common";
import { SignInDto } from "../../infra/dtos/sign-in.dto";
import { SignedUserDto } from "../../infra/dtos/singned-user.dto";
import { FindUserDataFeature } from "../../core/features/find-userData.feature";
import { EncryptedDataCompareFeature } from "../../core/features/encrypted-data-compare";
import { TokenGeneratorFeature } from "../../core/features/token-generator.feature";
import { CheckUserTokenFeature } from "../../core/features/check-user-token.feature";
import { DecodedUserTokenModel } from "../../core/models/decoded-user-token.model";
import { DecodedUserTokenFeature } from "../../core/features/decode-user-token.feature";
import { CreatedUserModel } from "src/modules/Users/core/models/created-user.model";
import { WrongSigninException } from "../../core/exceptions/wrong-signin-exception";

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly findUserByParam: FindUserDataFeature,
        private readonly validatePassword: EncryptedDataCompareFeature,
        private readonly tokenJWTGenerator: TokenGeneratorFeature,
        private readonly checkUserToken: CheckUserTokenFeature,
        private readonly decodeUserTokenFeature: DecodedUserTokenFeature
    ){}

    async signIn({ email, password }: SignInDto){
        const user = await this.findUserByParam.perform({ email });

        if(!user){
            throw new WrongSigninException()
        }

        const isPasswordValid = await this.validatePassword.perform(password, user.password);

        if(!isPasswordValid){
            throw new WrongSigninException()
        }

        const tokenData = this.tokenJWTGenerator.perform(user.id);
        return new SignedUserDto(tokenData)
    }

    async checkToken(token: string): Promise<boolean> {
        return this.checkUserToken.perform(token);
    }

    async decodedToken(token: string): Promise<DecodedUserTokenModel> {
        return this.decodeUserTokenFeature.perform(token);
    }

    async validateUserExists(id: number): Promise<CreatedUserModel> {
        return this.findUserByParam.perform({ id })
    }
}