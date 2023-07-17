import { HttpException, HttpStatus } from '@nestjs/common';

export class DuplicateAddressException extends HttpException {
    constructor(message: string = "Este endereço possui as mesmas informações de outro já cadastrado") {
        super(message, HttpStatus.CONFLICT)
    }
}