import { Test, TestingModule } from '@nestjs/testing';
import { TribeService } from './tribe.service';

describe('TribeService', () => {
  let service: TribeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TribeService],
    }).compile();

    service = module.get<TribeService>(TribeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
