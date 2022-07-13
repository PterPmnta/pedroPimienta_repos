import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTribeDto } from './dto/create-tribe.dto';
import { UpdateTribeDto } from './dto/update-tribe.dto';
import { Tribe } from './entities/tribe.entity';

@Injectable()
export class TribeService {
  constructor(
    @InjectRepository(Tribe)
    private tribeRepository: Repository<Tribe>,
  ) {}

  async create(createTribeDto: CreateTribeDto) {
    try {
      const tribe = this.tribeRepository.create(createTribeDto);
      const tribeSaved = await this.tribeRepository.save(tribe);

      return {
        result: tribeSaved,
        message: 'Tribu registrada con exito.',
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  findAll() {
    return `This action returns all tribe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tribe`;
  }

  async update(id: number, updateTribeDto: UpdateTribeDto) {
    try {
      await this.tribeRepository.update(id, updateTribeDto);

      return {
        message: `Tribu con el id:${id} ha sido actualizada con exito.`,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} tribe`;
  }
}
