import { Tribe } from '../../tribe/entities/tribe.entity';
import { Metric } from '../../metrics/entities/metric.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity('repository')
export class Repository {
  @PrimaryColumn({ name: 'id_repository' })
  id_repository: number;

  @Column({ type: 'varchar', default: null })
  name: string;

  @Column({ type: 'varchar', length: 1, default: null })
  state: string;

  @Column({ type: 'varchar', length: 1, default: null })
  status: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  created_at: Date;

  @ManyToOne(() => Tribe, (tribe) => tribe.id_tribe)
  @JoinColumn({ name: 'id_tribe' })
  id_tribe: Tribe;

  @OneToMany(() => Metric, (metric) => metric.id_metric)
  id_metric: Metric[];
}
