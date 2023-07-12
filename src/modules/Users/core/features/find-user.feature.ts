
import { CreatedUserModel } from '../models/created-user.model'
import { FindUserModel } from '../models/find-user.model';

export abstract class FindUserFeature {

  abstract execute(
    where: FindUserModel,
  ): Promise<CreatedUserModel>
}
