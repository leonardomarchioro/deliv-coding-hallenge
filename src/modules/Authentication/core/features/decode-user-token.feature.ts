import { DecodedUserTokenModel } from "../models/decoded-user-token.model";

export abstract class DecodedUserTokenFeature {
    abstract perform(token: string): Promise<DecodedUserTokenModel>
}