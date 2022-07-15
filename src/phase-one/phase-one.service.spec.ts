import { Test, TestingModule } from '@nestjs/testing';
import { PhaseOneService } from './phase-one.service';

describe('PhaseOneService', () => {
  let service: PhaseOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhaseOneService],
    }).compile();

    service = module.get<PhaseOneService>(PhaseOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
