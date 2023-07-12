import { CreatedUserDto } from "../../../Users/infra/dtos/created-user-dto";
import { FindUserModel } from "../../../Users/core/models/find-user.model";

export abstract class FindUserDataFeature {
    abstract perform(where: FindUserModel): Promise<CreatedUserDto>
}