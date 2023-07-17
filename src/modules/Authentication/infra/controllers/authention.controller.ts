import { Body, Controller, Post } from "@nestjs/common";
import { SignInDto } from "../dtos/sign-in.dto";
import { AuthenticationService } from "../../adapter/services/authentication.service";

@Controller('auth')
export class AuthenticationController {
    constructor(
        private readonly authService: AuthenticationService
    ) {}

    @Post()
    async signIn(@Body() body: SignInDto){
        return this.authService.signIn(body);
    }
}