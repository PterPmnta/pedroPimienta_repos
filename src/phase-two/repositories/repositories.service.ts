import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass, plainToInstance } from 'class-transformer';
import { Connection, createQueryBuilder, Equal, Repository } from 'typeorm';
import { CreateRepoDto } from './dto/create-repository.dto';
import { GetAllRepositoriesDto } from './dto/get-all-repositories';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
import { Repositories } from './entities/repository.entity';
import { paginateResponse } from '../../utils/paginate-response';
import { StateRepositories } from '../../utils/enums';

@Injectable()
export class RepositoriesService {
  constructor(
    @InjectRepository(Repositories)
    private reposRepository: Repository<Repositories>,
    private connection: Connection,
  ) {}

  async create(createRepoDto: CreateRepoDto) {
    try {
      const repo = this.reposRepository.create(createRepoDto);
      const repoSaved = await this.reposRepository.save(repo);

      return {
        result: repoSaved,
        message: 'Repositorio registrado con exito.',
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(
    page: number,
    limit: number,
    state: string,
    percentage: number,
  ) {
    try {
      const result = await this.reposRepository.findAndCount({
        where: {
          state: Equal(StateRepositories.Enable),
        },
        relations: {
          id_tribe: true,
          id_metric: true,
        },
      });

      const paginatedRepositories = paginateResponse(result, page, limit);
      const mappedRepository = paginatedRepositories.data.map(
        (repository: Repositories) =>
          plainToClass(GetAllRepositoriesDto, repository),
      ) as Repositories[];

      paginatedRepositories.data = mappedRepository;

      return {
        result: paginatedRepositories,
        message: 'Consulta exitosa.',
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findOne(id: number) {
    try {
      const result = await this.reposRepository.findOneOrFail({
        where: {
          id_repository: id,
        },
        relations: {
          id_tribe: true,
          id_metric: true,
        },
      });

      const repositoryResult = plainToInstance(GetAllRepositoriesDto, result);

      return {
        result: repositoryResult,
        message: 'Repositorio consultado con exito.',
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findRepoByTribe(id: number) {
    try {
      const result = await this.reposRepository.find({
        where: {
          id_tribe: Equal(id),
        },
        relations: {
          id_metric: true,
        },
      });

      if (result.length === 0) {
        throw new InternalServerErrorException(
          'La tribu no se encuentra registrada.',
        );
      }

      return {
        result: result,
        message: 'Consulta exitosa.',
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: number, updateRepositoryDto: UpdateRepositoryDto) {
    try {
      await this.reposRepository.update(id, updateRepositoryDto);

      return {
        message: `Repositorio con el id:${id} ha sido actualizado con exito.`,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      await this.reposRepository.delete(id);

      return {
        message: `El repositorio con el id: ${id}, se elimino de forma exitosa.`,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
