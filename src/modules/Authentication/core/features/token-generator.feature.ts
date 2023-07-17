import { GeneratedTokenModel } from "../models/generated-token.model";

export abstract class TokenGeneratorFeature {
    abstract perform(userId: number): GeneratedTokenModel
}