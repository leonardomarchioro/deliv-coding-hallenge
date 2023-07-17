import {
    IsEmail,
    IsString,
    MaxLength,
    MinLength,
  } from 'class-validator'
  import { CreatedUserModel } from '../../core/models/created-user.model'

  
  export class CreatedUserDto implements CreatedUserModel {
    id: number

    @IsEmail()
    email!: string
  
    @IsString()
    @MinLength(2)
    @MaxLength(255)
    name!: string
  
    @IsString()
    password?: string
  
    constructor(builder: CreatedUserModel) {
      Object.assign(this, builder)
    }
  }
  