import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { UserService } from "../../adapter/services/user.service";
import { CreateUserDto } from "../dtos/create-user-dto";
import { AuthorizationGuard } from "../../../Authentication/infra/guards/authorization.guard";
import { UserId } from "../../../../global/decorators/get-user-id.decorator";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(
        @Body() user: CreateUserDto
    ){
        return this.userService.create(user);
    }

    @UseGuards(AuthorizationGuard)
    @Get()
    async find(
        @UserId() userId: number
    ){
        return this.userService.find(Number(userId));
    }
}