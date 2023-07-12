import { IsEmail, IsString } from 'class-validator'
import { SignInModel } from '../../core/models/sign-in.model'

export class SignInDto implements SignInModel {

  @IsEmail()
  email!: string

  @IsString()
  password!: string

  constructor(builder: SignInModel) {
    Object.assign(this, builder)
  }
}
