import { Test, TestingModule } from '@nestjs/testing';
import { TomController } from './tom.controller';
import { TomService } from './tom.service';

describe('TomController', () => {
  let controller: TomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TomController],
      providers: [TomService],
    }).compile();

    controller = module.get<TomController>(TomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
