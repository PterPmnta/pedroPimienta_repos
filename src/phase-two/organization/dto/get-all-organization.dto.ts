import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class GetAllOrganizationDto {
  @Expose()
  readonly id_organization: number;
  @Expose()
  readonly name: string;
  @Expose()
  readonly status: number;
}
