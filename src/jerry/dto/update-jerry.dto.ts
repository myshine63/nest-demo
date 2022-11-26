import { PartialType } from '@nestjs/mapped-types';
import { CreateJerryDto } from './create-jerry.dto';

export class UpdateJerryDto extends PartialType(CreateJerryDto) {}
