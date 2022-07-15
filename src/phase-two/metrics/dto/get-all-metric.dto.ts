import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class GetAllMetricsDto {
  @Expose()
  readonly id_metric: number;
  @Expose()
  readonly coverage: number;
  @Expose()
  readonly bugs: number;
  @Expose()
  readonly vulnerabilities: number;
  @Expose()
  readonly hospot: number;
  @Expose()
  readonly code_smells: number;
}
