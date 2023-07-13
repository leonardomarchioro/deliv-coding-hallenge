import { CreatedRequestModel } from "../model/created-request.model";

export abstract class ListRequestByUserFeature {
    abstract execute(userId: number): Promise<CreatedRequestModel[]>
}