import { HttpException, HttpStatus } from "@nestjs/common";

export class WrongSigninException extends HttpException {
    constructor(message: string = "Email ou senha incorretos") {
        super(message, HttpStatus.UNAUTHORIZED)
    }
}