import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Organization } from '../../organization/entities/organization.entity';

@Entity('tribe')
export class Tribe {
  @PrimaryColumn({ name: 'id_organization' })
  id_tribe: number;

  @Column({ type: 'varchar', default: null })
  name: string;

  @Column({ type: 'varchar', default: null })
  status: number;

  @ManyToOne(() => Organization, (organization) => organization.id_organization)
  @JoinColumn({ name: 'id_organization' })
  id_organization: Organization;
}
