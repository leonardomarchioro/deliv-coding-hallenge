import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailAlreadyRegistredException extends HttpException {
    constructor(message: string = "Email já registrado") {
        super(message, HttpStatus.CONFLICT)
    }
}