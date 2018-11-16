import { Module } from '@nestjs/common';
import { TimeSheetModule } from '../time-sheet/time-sheet.module';
import { TimeSlotService } from './services/time-slot/time-slot.service';

@Module({
  imports: [TimeSheetModule],
  providers: [
    { provide: 'TimeSlotServiceInterface', useClass: TimeSlotService },
  ],
  exports: ['TimeSlotServiceInterface', 'TimeConfigurationServiceInterface'],
})
export class TimeSheetManagementModule {}
