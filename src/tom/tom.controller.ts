import {
  Controller,
  Get,
  Headers,
  Query,
  Param,
  ParamData,
  HttpCode,
  Header,
} from '@nestjs/common';
import { TomService } from './tom.service';

@Controller({ host: 'www.baidu.com' })
export class TomController {
  constructor(private readonly tomService: TomService) {}

  @Get('header')
  @Header('auth', 'this is tom')
  @HttpCode(201)
  getHeader(@Headers() header: Headers) {
    return header;
  }

  @Get('query')
  getSearch(@Query() query: string) {
    return query;
  }

  @Get('param/:id')
  getParam(@Param() param: ParamData) {
    return param;
  }
}
