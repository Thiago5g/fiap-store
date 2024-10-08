import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderService } from '../service/orders.service';
import { CreateOrderDto } from '../dto/create-orders.dto';
import { UpdateOrderDto } from '../dto/update-orders.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly productsService: OrderService) {}

  @Post()
  create(@Body() createProductDto: CreateOrderDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateOrderDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
