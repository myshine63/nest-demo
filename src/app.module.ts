import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TomModule } from './tom/tom.module';
import { JerryModule } from './jerry/jerry.module';

@Module({
  imports: [TomModule, JerryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
