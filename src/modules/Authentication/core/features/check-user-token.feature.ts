export abstract class CheckUserTokenFeature {
    abstract perform(token: string): Promise<boolean>
}