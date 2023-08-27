import { Test, TestingModule } from '@nestjs/testing';
import { TimeTrackingController } from './time-tracker.controller';
import { TimeTrackingService } from './time-tracker.service';
import { TimeTrackingModule } from './time-tracker.module';

describe('TimeTrackerController', () => {
  let controller: TimeTrackingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeTrackingModule],
      providers: [TimeTrackingService],
    }).compile();

    controller = module.get<TimeTrackingController>(TimeTrackingModule);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
