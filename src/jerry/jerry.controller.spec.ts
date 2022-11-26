import { Test, TestingModule } from '@nestjs/testing';
import { JerryController } from './jerry.controller';
import { JerryService } from './jerry.service';

describe('JerryController', () => {
  let controller: JerryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JerryController],
      providers: [JerryService],
    }).compile();

    controller = module.get<JerryController>(JerryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
