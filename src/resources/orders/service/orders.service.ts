import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entity/orders.entity';
import { CreateOrderDto } from '../dto/create-orders.dto';
import { UpdateOrderDto } from '../dto/update-orders.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private productsRepository: Repository<Order>,
  ) {}

  create(createOrdertDto: CreateOrderDto): Promise<Order> {
    const product = this.productsRepository.create(createOrdertDto);
    return this.productsRepository.save(product);
  }

  findAll(): Promise<Order[]> {
    return this.productsRepository.find();
  }

  findOne(id: number): Promise<Order> {
    return this.productsRepository.findOneBy({ id });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    await this.productsRepository.update(id, updateOrderDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
