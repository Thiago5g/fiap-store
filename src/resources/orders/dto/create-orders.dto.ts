import { IsString, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  category: string;
}
