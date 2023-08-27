import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeTrackingController } from './time-tracker.controller';
import { TimeTrackingEntity } from './entities/time-tracker.entity';
import { TimeTrackingService } from './time-tracker.service'

@Module({
  // imports: [TypeOrmModule.forFeature([TimeTrackingEntity])],
  controllers: [TimeTrackingController],
  providers: [TimeTrackingService],
  exports: [TimeTrackingService], 
})
export class TimeTrackingModule {}

