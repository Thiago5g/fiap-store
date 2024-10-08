import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientService } from '../service/clients.service';
import { CreateClientDto } from '../dto/create-clients.dto';
import { UpdateClientDto } from '../dto/update-clients.dto';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientsService: ClientService) {}

  @Post()
  create(@Body() createProductDto: CreateClientDto) {
    return this.clientsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':cpf')
  findOne(@Param('cpf') cpf: string) {
    return this.clientsService.findOneByCpf(cpf);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateClientDto) {
    return this.clientsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }
}
