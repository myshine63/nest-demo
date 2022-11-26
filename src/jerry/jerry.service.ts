import { Injectable } from '@nestjs/common';
import { CreateJerryDto } from './dto/create-jerry.dto';
import { UpdateJerryDto } from './dto/update-jerry.dto';

@Injectable()
export class JerryService {
  create(createJerryDto: CreateJerryDto) {
    return 'This action adds a new jerry';
  }

  findAll() {
    return `This action returns all jerry`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jerry`;
  }

  update(id: number, updateJerryDto: UpdateJerryDto) {
    return `This action updates a #${id} jerry`;
  }

  remove(id: number) {
    return `This action removes a #${id} jerry`;
  }
}
