import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass, plainToInstance } from 'class-transformer';
import { paginateResponse } from 'src/utils/paginate-response';
import { Repository } from 'typeorm';
import { CreateTribeDto } from './dto/create-tribe.dto';
import { GetAllTribesDto } from './dto/get-all-tribes.dto';
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

  async findAll(page: number, limit: number) {
    try {
      const result = await this.tribeRepository.findAndCount({
        relations: ['id_organization'],
      });

      const paginatedTribes = paginateResponse(result, page, limit);
      const mappedTribe = paginatedTribes.data.map((tribe: Tribe) =>
        plainToClass(GetAllTribesDto, tribe),
      ) as Tribe[];

      paginatedTribes.data = mappedTribe;

      return {
        result: paginatedTribes,
        message: 'Consulta exitosa.',
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findOne(id: number) {
    try {
      const result = await this.tribeRepository.findOneOrFail({
        where: {
          id_tribe: id,
        },
        relations: {
          id_organization: true,
        },
      });

      const tribeResult = plainToInstance(GetAllTribesDto, result);

      return {
        result: tribeResult,
        message: 'Tribu consultada con exito.',
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
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

  async remove(id: number) {
    try {
      await this.tribeRepository.delete(id);

      return {
        message: `La tribu con el id: ${id}, se elimino de forma exitosa.`,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
