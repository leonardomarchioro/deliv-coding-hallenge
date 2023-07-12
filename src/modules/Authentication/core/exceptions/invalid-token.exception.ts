import { HttpException, HttpStatus } from "@nestjs/common";

export class InvalidTokenException extends HttpException {
    constructor(message: string = "Token inválido") {
        super(message, HttpStatus.UNAUTHORIZED)
    }
}