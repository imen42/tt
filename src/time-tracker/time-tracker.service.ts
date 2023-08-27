import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TimeTrackingEntity } from './entities/time-tracker.entity';

@Injectable()
export class TimeTrackingService {
  constructor(
    @InjectRepository(TimeTrackingEntity)
    private readonly timeTrackingRepository: Repository<TimeTrackingEntity>,
  ) {}

  async startTracking(): Promise<TimeTrackingEntity> {
    return null 
  }

  async stopTracking(): Promise<TimeTrackingEntity> {
   return null
  }

  async getTotalPeriod(): Promise<number> {
    return 0
  }
}
