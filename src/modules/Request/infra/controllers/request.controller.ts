import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserId } from '../../../../global/decorators/get-user-id.decorator';
import { AuthorizationGuard } from '../../../../modules/Authentication/infra/guards/authorization.guard';
import { RequestService } from '../../adapter/services/request.service';
import { CreateRequestDto } from '../dtos/create-request.dto';
import { CheckAddressRequestOwner } from '../guards/check-address-request-owner.guard';
import { CheckRequestOwner } from '../guards/check-request-owner.guard';
import { UpdateRequestDto } from '../dtos/update-request.dto';

@Controller('request')
@UseGuards(AuthorizationGuard)
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  @UseGuards(CheckAddressRequestOwner)
  async create(@Body() body: CreateRequestDto, @UserId() userId: number) {
    return this.requestService.create(body, userId);
  }

  // Listar pedidos
  @Get()
  async list(@UserId() userId: number) {
    return this.requestService.list(userId)
  }

  
  @Get(':id')
  @UseGuards(CheckRequestOwner)
  async find(
    @UserId() userId: number,
    @Param() { id }: { id: string }
    ) {
        return this.requestService.find(Number(id), userId)
    }

  // Atualizar um pedido
  @Patch(':id')
  @UseGuards(CheckRequestOwner, CheckAddressRequestOwner)
  async update(
    @Param() { id }: { id: string },
    @Body() body: UpdateRequestDto
    ) {
        return this.requestService.update(Number(id), body)
    }
}
