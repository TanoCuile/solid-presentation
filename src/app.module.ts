import { Module } from '@nestjs/common';
import { TimeSheetModule } from './modules/time-sheet/time-sheet.module';
import { TimeSheetManagementModule } from './modules/time-sheet-management/time-sheet-management.module';
import { DataBaseModule } from './modules/data-base/data-base.module';

@Module({
  imports: [TimeSheetModule, TimeSheetManagementModule, DataBaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
