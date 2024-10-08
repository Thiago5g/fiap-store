import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-clients.dto';

export class UpdateClientDto extends PartialType(CreateClientDto) {
}
