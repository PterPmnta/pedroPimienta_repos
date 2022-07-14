import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Organization } from '../../organization/entities/organization.entity';
import { Repositories } from '../../repositories/entities/repository.entity';

@Entity('tribe')
export class Tribe {
  @PrimaryColumn({ name: 'id_tribe' })
  id_tribe: number;

  @Column({ type: 'varchar', default: null })
  name: string;

  @Column({ type: 'varchar', default: null })
  status: number;

  @ManyToOne(() => Organization, (organization) => organization.id_organization)
  @JoinColumn({ name: 'id_organization' })
  id_organization: Organization;

  @OneToMany(() => Repositories, (repository) => repository.id_repository)
  id_repository: Repositories[];
}
