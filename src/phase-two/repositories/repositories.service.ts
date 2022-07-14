import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRepoDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
import { Repositories } from './entities/repository.entity';

@Injectable()
export class RepositoriesService {
  constructor(
    @InjectRepository(Repositories)
    private reposRepository: Repository<Repositories>,
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

  findAll() {
    return `This action returns all repositories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} repository`;
  }

  update(id: number, updateRepositoryDto: UpdateRepositoryDto) {
    return `This action updates a #${id} repository`;
  }

  remove(id: number) {
    return `This action removes a #${id} repository`;
  }
}
