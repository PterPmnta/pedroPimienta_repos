import { Tribe } from '../../tribe/entities/tribe.entity';
import { Metric } from '../../metrics/entities/metric.entity';
import { LogicStatus, StateRepositories } from '../../../utils/enums';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity('repositories')
export class Repositories {
  @PrimaryColumn({ name: 'id_repository' })
  id_repository: number;

  @Column({ type: 'varchar', default: null })
  name: string;

  @Column({
    type: 'varchar',
    length: 1,
    default: null,
    enum: StateRepositories,
  })
  state: StateRepositories;

  @Column({ type: 'varchar', length: 1, default: null, enum: LogicStatus })
  status: LogicStatus;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  created_at: Date;

  @ManyToOne(() => Tribe, (tribe) => tribe.id_tribe)
  @JoinColumn({ name: 'id_tribe' })
  id_tribe: Tribe;

  @OneToOne(() => Metric)
  @JoinColumn({ name: 'id_metric' })
  id_metric: Metric;
}
