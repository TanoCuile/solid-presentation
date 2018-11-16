import { Module } from '@nestjs/common';
import { TimeSheetModule } from './modules/time-sheet/time-sheet.module';

@Module({
  imports: [TimeSheetModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
