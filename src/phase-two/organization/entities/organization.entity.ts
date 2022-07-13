import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Tribe } from '../../tribe/entities/tribe.entity';

@Entity('organization')
export class Organization {
  @PrimaryColumn({ name: 'id_organization' })
  id_organization: number;

  @Column({ type: 'varchar', default: null })
  name: string;

  @Column({ type: 'varchar', default: null })
  status: number;

  @OneToMany(() => Tribe, (tribe) => tribe.id_tribe)
  id_tribe: Tribe[];
}
