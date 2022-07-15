import { Test, TestingModule } from '@nestjs/testing';
import { TribeController } from './tribe.controller';
import { TribeService } from './tribe.service';

describe('TribeController', () => {
  let controller: TribeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TribeController],
      providers: [TribeService],
    }).compile();

    controller = module.get<TribeController>(TribeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
