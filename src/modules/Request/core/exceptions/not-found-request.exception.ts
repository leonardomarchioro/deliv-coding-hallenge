import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundRequestException extends HttpException {
    constructor(message: string = "Pedido não encontrado") {
        super(message, HttpStatus.NOT_FOUND)
    }
}