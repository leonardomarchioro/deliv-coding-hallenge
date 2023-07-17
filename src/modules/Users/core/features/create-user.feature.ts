import { CreateUserModel } from '../models/create-user.model'
import { CreatedUserModel } from '../models/created-user.model'

export abstract class CreateUserFeature {

  abstract execute(
    user: CreateUserModel,
  ): Promise<CreatedUserModel>
}
