import { Test, TestingModule } from '@nestjs/testing';
import { RepositoriesController } from './repositories.controller';
import { RepositoriesService } from './repositories.service';
import { reposByTribeId, repositoryData } from '../../utils/utils';

describe('RepositoriesController', () => {
  const id = 1;
  const repoResultDto = repositoryData;
  const dataRepoByTribe = [];
  let controller: RepositoriesController;
  let repoService: RepositoriesService;
  const mockRepoService = {
    findOne: jest.fn((id) => {
      return {
        result: repoResultDto.result,
        message: repoResultDto.message,
      };
    }),
    findRepoByTribe: jest.fn((id) => {
      if (dataRepoByTribe.length === 0) {
        throw new Error('La tribu no se encuentra registrada.');
      }
    }),
    naturalStateLanguage: jest.fn((id) => {
      return reposByTribeId;
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

  describe('Escenario 2', () => {
    it('Tribe doesnt exists', async () => {
      expect(() => {
        mockRepoService.findRepoByTribe(id);
      }).toThrowError(new Error('La tribu no se encuentra registrada.'));
    });
  });

  describe('Escenario 3', () => {
    it('Label natural language about repositories state', () => {
      const response = mockRepoService.naturalStateLanguage(id);
      response.forEach((repo) => {
        expect(
          ['Enable', 'Disable', 'Archived'].includes(repo.state),
        ).toBeTruthy();
      });
    });
  });
});
