import { Test, TestingModule } from '@nestjs/testing';
import { RepositoriesController } from '../phase-two/repositories/repositories.controller';
import { RepositoriesService } from '../phase-two/repositories/repositories.service';

describe('RepositoriesController', () => {
  let controller: RepositoriesController;
  let service: RepositoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepositoriesController],
      providers: [RepositoriesService],
    }).compile();

    controller = module.get<RepositoriesController>(RepositoriesController);
    service = module.get<RepositoriesService>(RepositoriesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
