import { Test, TestingModule } from '@nestjs/testing';
import { TomService } from './tom.service';

describe('TomService', () => {
  let service: TomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TomService],
    }).compile();

    service = module.get<TomService>(TomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
