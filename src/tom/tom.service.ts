import { Injectable } from '@nestjs/common';
import { CreateTomDto } from './dto/create-tom.dto';
import { UpdateTomDto } from './dto/update-tom.dto';
import { Request } from 'express';

@Injectable()
export class TomService {
  greet() {
    return ['hello tom', 'hello tom', 'hello tom', 'hello tom'];
  }
  getParams(req: Headers) {
    return req;
  }
}
