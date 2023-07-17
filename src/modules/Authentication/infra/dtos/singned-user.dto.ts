import { SignedUserModel } from "../../core/models/singned-user.model";

export class SignedUserDto implements SignedUserModel {
    token!: string

    constructor(builder: SignedUserModel) {
        Object.assign(this, builder)
      }
  }
  