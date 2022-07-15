import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Tribe } from '../../tribe/entities/tribe.entity';
import { StateRepositories, LogicStatus } from '../../../utils/enums';
import { Metric } from '../../metrics/entities/metric.entity';

export class CreateRepoDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'ID del repositorio' })
  id_repository: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Nombre del repositorio' })
  name: string;

  @IsEnum(StateRepositories)
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Estado del repositorio' })
  state: StateRepositories;

  @IsEnum(LogicStatus)
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Estatus del repositorio' })
  status: LogicStatus;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'ID de la organizacion' })
  id_tribe: Tribe;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'ID de la informacion de medicion',
  })
  id_metric: Metric;
}
