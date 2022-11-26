import { Test, TestingModule } from '@nestjs/testing';
import { JerryService } from './jerry.service';

describe('JerryService', () => {
  let service: JerryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JerryService],
    }).compile();

    service = module.get<JerryService>(JerryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
