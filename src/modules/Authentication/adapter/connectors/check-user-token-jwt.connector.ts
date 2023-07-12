import { ok } from "assert";
import { CheckUserTokenFeature } from "../../core/features/check-user-token.feature";
import { verify } from 'jsonwebtoken'
import { InvalidTokenException } from "../../core/exceptions/invalid-token.exception";

export class CheckUserTokenJWTConnector implements CheckUserTokenFeature {

    async perform(token: string): Promise<boolean> {
        ok(process.env.SECRET_KEY)
        try {
            const pass = verify(token, process.env.SECRET_KEY);
            return !!pass
        } catch (error) {
            throw new InvalidTokenException()
        }
    }
}