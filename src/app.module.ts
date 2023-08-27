import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeTrackingEntity } from './time-tracker/entities/time-tracker.entity';
import { TimeTrackingController } from './time-tracker/time-tracker.controller';
import { TimeTrackingService } from './time-tracker/time-tracker.service';
import { TimeTrackingModule } from './time-tracker/time-tracker.module';


@Module({
  imports: [TypeOrmModule.forFeature([TimeTrackingModule])],
  // controllers: [TimeTrackingController],
  // providers: [TimeTrackingService],
  // exports: [TimeTrackingService], 
})
export class AppModule {}
