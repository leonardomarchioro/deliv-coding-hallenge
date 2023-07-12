export abstract class EncryptDataFeature {  
  abstract perform(data: string): Promise<string>
}
