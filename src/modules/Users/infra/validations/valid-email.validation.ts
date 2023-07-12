import { Injectable } from '@nestjs/common'
import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface
  } from 'class-validator'
import { FindUserFeature } from '../../core/features/find-user.feature'
import { EmailAlreadyRegistredException } from '../../core/exceptions/email-aleredy-registred.exception'

@Injectable()
@ValidatorConstraint({ name: 'isValidEmail', async: true })
export class IsValidEmailConstraint implements ValidatorConstraintInterface {
    constructor(private readonly findUserFeature: FindUserFeature) {}

    async validate(email: string, validationArguments?: ValidationArguments): Promise<boolean> {
        const user = await this.findUserFeature.execute({ email })
        if(user){
            throw new EmailAlreadyRegistredException();
        }

        return true
    }
}