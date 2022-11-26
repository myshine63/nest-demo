import { Module } from '@nestjs/common';
import { TomService } from './tom.service';
import { TomController } from './tom.controller';

@Module({
  controllers: [TomController],
  providers: [TomService],
})
export class TomModule {}
