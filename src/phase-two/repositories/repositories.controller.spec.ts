import { Test, TestingModule } from '@nestjs/testing';
import { RepositoriesController } from './repositories.controller';
import { RepositoriesService } from './repositories.service';
import { repositoryData } from '../../utils/utils';

describe('RepositoriesController', () => {
  const id = 1;
  const repoResultDto = repositoryData;
  let controller: RepositoriesController;
  let repoService: RepositoriesService;
  const mockRepoService = {
    findOne: jest.fn((id) => {
      return {
        result: repoResultDto.result,
        message: repoResultDto.message,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepositoriesController],
      providers: [
        {
          provide: 'REPOSITORIES_SERVICE',
          useValue: {},
        },
      ],
    })
      .overrideProvider(repoService)
      .useValue(mockRepoService)
      .compile();

    controller = module.get<RepositoriesController>(RepositoriesController);
    repoService = module.get<RepositoriesService>('REPOSITORIES_SERVICE');
  });

  it('controller should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('repositoriesService should be defined', () => {
    expect(repoService).toBeDefined();
  });

  describe('Escenario 1', () => {
    const mockData = mockRepoService.findOne(id);
    it('Enable State', async () => {
      expect(mockData.result.state).toEqual('E');
    });

    it('Coverage >= 75', async () => {
      expect(mockData.result.id_metric.coverage).toBeGreaterThanOrEqual(75);
    });

    it('Metric data', async () => {
      expect(mockData.result.id_metric).toEqual(repoResultDto.result.id_metric);
    });
  });
});
