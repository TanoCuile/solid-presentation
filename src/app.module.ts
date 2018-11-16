import { Module } from '@nestjs/common';
import { TimeSheetModule } from './modules/time-sheet/time-sheet.module';
import { TimeSheetManagementModule } from './modules/time-sheet-management/time-sheet-management.module';
import { DataBaseModule } from './modules/data-base/data-base.module';
import { ApiModule } from './modules/api/api.module';

@Module({
  imports: [TimeSheetModule, TimeSheetManagementModule, DataBaseModule, ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
