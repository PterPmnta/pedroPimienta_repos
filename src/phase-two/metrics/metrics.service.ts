import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginateResponse } from 'src/utils/paginate-response';
import { Repository } from 'typeorm';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import { Metric } from './entities/metric.entity';
import { GetAllMetricsDto } from './dto/get-all-metric.dto';
import { plainToClass, plainToInstance } from 'class-transformer';

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

  async findAll(page: number, limit: number) {
    try {
      const result = await this.metricRepository.findAndCount();

      const paginatedMetrics = paginateResponse(result, page, limit);
      const mappedMetric = paginatedMetrics.data.map((metric: Metric) =>
        plainToClass(GetAllMetricsDto, metric),
      ) as Metric[];

      paginatedMetrics.data = mappedMetric;

      return {
        result: paginatedMetrics,
        message: 'Consulta exitosa.',
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findOne(id: number) {
    try {
      const result = await this.metricRepository.findOneOrFail({
        where: {
          id_metric: id,
        },
      });

      const metricResult = plainToInstance(GetAllMetricsDto, result);

      return {
        result: metricResult,
        message: 'Metrica consultada con exito.',
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
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

  async remove(id: number) {
    try {
      await this.metricRepository.delete(id);

      return {
        message: `La metrica con el id: ${id}, se elimino de forma exitosa.`,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
