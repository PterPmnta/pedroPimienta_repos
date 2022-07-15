import { Column, Entity, PrimaryColumn } from 'typeorm';
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
}
