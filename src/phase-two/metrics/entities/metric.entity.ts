import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Repository } from '../../repositories/entities/repository.entity';
@Entity('metric')
export class Metric {
  @PrimaryColumn({ name: 'id_metric' })
  id_metric: number;

  @Column({ type: 'float', default: null })
  coverage: number;

  @Column({ type: 'int', default: null })
  bugs: number;

  @Column({ type: 'int', default: null })
  vulnerabilities: number;

  @Column({ type: 'int', default: null })
  hotspot: number;

  @Column({ type: 'int', default: null })
  code_smells: number;

  @ManyToOne(() => Repository, (repository) => repository.id_repository)
  @JoinColumn({ name: 'id_repository' })
  id_repository: Repository;
}
