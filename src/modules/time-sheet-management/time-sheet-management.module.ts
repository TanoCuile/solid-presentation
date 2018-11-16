import { Module } from '@nestjs/common';
import { TimeSheetModule } from '../time-sheet/time-sheet.module';
import { TimeSlotService } from './services/time-slot/time-slot.service';
import { DataBaseModule } from '../data-base/data-base.module';

@Module({
  imports: [TimeSheetModule, DataBaseModule],
  providers: [{ provide: 'TimeSlotServiceInterface', useClass: TimeSlotService }],
  exports: ['TimeSlotServiceInterface'],
})
export class TimeSheetManagementModule {}
