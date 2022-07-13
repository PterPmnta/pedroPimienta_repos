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

  update(id: number, updateTribeDto: UpdateTribeDto) {
    return `This action updates a #${id} tribe`;
  }

  remove(id: number) {
    return `This action removes a #${id} tribe`;
  }
}
