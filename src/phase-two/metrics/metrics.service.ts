import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import { Metric } from './entities/metric.entity';

@Injectable()
export class MetricsService {
  constructor(
    @InjectRepository(Metric)
    private metricRepository: Repository<Metric>,
  ) {}

  async create(createMetricDto: CreateMetricDto) {
    try {
      const metric = this.metricRepository.create(createMetricDto);
      const metricSaved = await this.metricRepository.save(metric);

      return {
        result: metricSaved,
        message: 'Metrica registrada con exito.',
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  findAll() {
    return `This action returns all metrics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metric`;
  }

  async update(id: number, updateMetricDto: UpdateMetricDto) {
    try {
      await this.metricRepository.update(id, updateMetricDto);

      return {
        message: `Metrica con el id:${id} ha sido actualizada con exito.`,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} metric`;
  }
}
