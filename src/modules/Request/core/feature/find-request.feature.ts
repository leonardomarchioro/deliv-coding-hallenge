import { CreatedRequestModel } from "../model/created-request.model";
import { FindRequestModel } from "../model/find-request.model";

export abstract class FindRequestFeature {
    abstract execute(data: FindRequestModel) : Promise<CreatedRequestModel>
}