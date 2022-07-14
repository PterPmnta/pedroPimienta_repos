import { Exclude, Expose, Transform } from 'class-transformer';
import { Organization } from '../../organization/entities/organization.entity';

@Exclude()
export class GetAllTribesDto {
  @Expose()
  readonly id_tribe: number;
  @Expose()
  readonly name: string;
  @Expose()
  readonly status: number;
  @Expose()
  @Transform(({ value }) => value.id_organization, { toClassOnly: true })
  readonly id_organization: Organization;
}
