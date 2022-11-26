import { Module } from '@nestjs/common';
import { JerryService } from './jerry.service';
import { JerryController } from './jerry.controller';

@Module({
  controllers: [JerryController],
  providers: [JerryService]
})
export class JerryModule {}
