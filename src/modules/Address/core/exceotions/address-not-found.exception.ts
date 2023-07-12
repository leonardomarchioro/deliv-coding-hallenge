import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundAddressException extends HttpException {
    constructor(message: string = "Endereço não encontrado") {
        super(message, HttpStatus.NOT_FOUND)
    }
}