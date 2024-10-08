import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateClientDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  cpf: string;

  @IsOptional()
  @IsString()
  email: string;
}
