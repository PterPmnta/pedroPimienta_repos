import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('organization')
export class Organization {
  @PrimaryColumn({ name: 'id_organization' })
  id_organization: number;

  @Column({ type: 'varchar', default: null })
  name: string;

  @Column({ type: 'varchar', default: null })
  status: number;
}
