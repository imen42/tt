// src/time-tracking/time-tracking.controller.ts
import { Controller, Post, Get } from '@nestjs/common';
import { TimeTrackingService } from './time-tracker.service';
import { TimeTrackingEntity } from './entities/time-tracker.entity';
@Controller('time-tracking')
export class TimeTrackingController {
  constructor(private readonly timeTrackingService: TimeTrackingService) {}

  @Post('start')
  startTracking(): Promise<TimeTrackingEntity> {
    return this.timeTrackingService.startTracking();
  }

  @Post('stop')
  stopTracking(): Promise<TimeTrackingEntity> {
    return this.timeTrackingService.stopTracking();
  }

  @Get('total-period')
  getTotalPeriod(): Promise<number> {
    return this.timeTrackingService.getTotalPeriod();
  }
}
