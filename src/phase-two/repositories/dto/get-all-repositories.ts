import { Exclude, Expose, Transform } from 'class-transformer';
import { LogicStatus, StateRepositories } from '../../../utils/enums';
import { Tribe } from '../../tribe/entities/tribe.entity';
import { Metric } from '../../metrics/entities/metric.entity';

@Exclude()
export class GetAllRepositoriesDto {
  @Expose()
  readonly id_repository: number;
  @Expose()
  readonly name: string;
  @Expose()
  readonly state: StateRepositories;
  @Expose()
  readonly status: LogicStatus;
  @Expose()
  readonly created_at: Date;
  @Expose()
  @Transform(({ value }) => value.id_tribe, { toClassOnly: true })
  readonly id_tribe: Tribe;
  @Expose()
  readonly id_metric: Metric;
}
