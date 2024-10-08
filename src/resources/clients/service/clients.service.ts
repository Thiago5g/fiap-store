import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../entity/clients.entity';
import { CreateClientDto } from '../dto/create-clients.dto';
import { UpdateClientDto } from '../dto/update-clients.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>,
  ) {}

  create(createOrdertDto: CreateClientDto): Promise<Client> {
    const product = this.clientsRepository.create(createOrdertDto);
    return this.clientsRepository.save(product);
  }

  findAll(): Promise<Client[]> {
    return this.clientsRepository.find();
  }

  findOneByCpf(cpf: string): Promise<Client> {
    return this.clientsRepository.findOneBy({ cpf });
  }

  findOne(id: number): Promise<Client> {
    return this.clientsRepository.findOneBy({ id });
  }

  async update(id: number, updateClientDto: UpdateClientDto): Promise<Client> {
    await this.clientsRepository.update(id, updateClientDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.clientsRepository.delete(id);
  }
}
