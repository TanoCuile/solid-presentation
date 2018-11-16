import { Module } from '@nestjs/common';
import { TimeSheetModule } from './modules/time-sheet/time-sheet.module';
import { TimeSheetManagementModule } from './modules/time-sheet-management/time-sheet-management.module';

@Module({
  imports: [TimeSheetModule, TimeSheetManagementModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
