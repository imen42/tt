import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('time_tracking')
export class TimeTrackingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint', nullable: true })
  startTime: number;

  @Column({ type: 'bigint', nullable: true })
  endTime: number;
}
