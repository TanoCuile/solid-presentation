import { Module } from '@nestjs/common';
import { TimeSheetModule } from './modules/time-sheet/time-sheet.module';
import { TimeSheetManagementModule } from './modules/time-sheet-management/time-sheet-management.module';
import { DataBaseModule } from './modules/data-base/data-base.module';
import { ApiModule } from './modules/api/api.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [TimeSheetModule, TimeSheetManagementModule, DataBaseModule, ApiModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
