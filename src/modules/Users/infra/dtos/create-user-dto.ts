import {
    IsString,
    MaxLength,
    MinLength,
    Validate,
    IsEmail
  } from 'class-validator'
  import { CreateUserModel } from '../../core/models/create-user.model'
import { IsValidEmailConstraint } from '../validations/valid-email.validation'

  
  export class CreateUserDto implements CreateUserModel {
    @IsEmail()
    @Validate(IsValidEmailConstraint)
    email!: string
  
    @IsString()
    @MinLength(2)
    @MaxLength(255)
    name!: string
  
    @IsString()
    password: string
  
    constructor(builder: CreateUserModel) {
      Object.assign(this, builder)
    }
  }
  