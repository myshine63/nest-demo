import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JerryService } from './jerry.service';
import { CreateJerryDto } from './dto/create-jerry.dto';
import { UpdateJerryDto } from './dto/update-jerry.dto';

@Controller('jerry')
export class JerryController {
  constructor(private readonly jerryService: JerryService) {}

  @Post()
  create(@Body() createJerryDto: CreateJerryDto) {
    return this.jerryService.create(createJerryDto);
  }

  @Get()
  findAll() {
    return this.jerryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jerryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJerryDto: UpdateJerryDto) {
    return this.jerryService.update(+id, updateJerryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jerryService.remove(+id);
  }
}
