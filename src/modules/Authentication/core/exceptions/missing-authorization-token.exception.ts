import { HttpException, HttpStatus } from "@nestjs/common";

export class MissingAuthorizationTokenException extends HttpException {
    constructor(message: string = "Token de autorização não encontrado") {
        super(message, HttpStatus.UNAUTHORIZED)
    }
}