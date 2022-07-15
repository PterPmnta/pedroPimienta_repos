import { Test, TestingModule } from '@nestjs/testing';
import { PhaseOneController } from './phase-one.controller';
import { PhaseOneService } from './phase-one.service';

describe('PhaseOneController', () => {
  let controller: PhaseOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhaseOneController],
      providers: [PhaseOneService],
    }).compile();

    controller = module.get<PhaseOneController>(PhaseOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
