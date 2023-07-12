export abstract class DeleteAddressFeature {
  abstract execute(id: number): Promise<void>;
}
