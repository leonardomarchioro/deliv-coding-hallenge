export abstract class EncryptedDataCompareFeature {
    abstract perform(data: string, dataToCompare:string): Promise<boolean>
}