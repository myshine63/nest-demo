import { PartialType } from '@nestjs/mapped-types';
import { CreateTomDto } from './create-tom.dto';

export class UpdateTomDto extends PartialType(CreateTomDto) {}
