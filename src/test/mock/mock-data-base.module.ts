import { Module } from '@nestjs/common';
import { TimeSlotInterface } from '../../modules/time-sheet/interfaces/time-slot.interface';
import { TimeSheetModule } from '../../modules/time-sheet/time-sheet.module';
import { InstanceInterface } from '../../interfaces/instance.interface';
import { TimeSlotServiceInterface } from '../../modules/time-sheet-management/interfaces/time-slot-service.interface';
import { DataBaseServiceInterface } from '../../interfaces/data-base-service.interface';
import { CreteriaType } from '../../types/creteria.type';
import { TimeConfigurationInterface } from '../../modules/time-sheet/interfaces/time-configuration.interface';

export class TextDataBaseService<T extends InstanceInterface> implements DataBaseServiceInterface<T> {
  constructor(protected name: string) {}
  getName(): string {
    return this.name;
  }
  create(object: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  update(object: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  delete(object: T): Promise<any> {
    throw new Error('Method not implemented.');
  }
  find(creteria: CreteriaType<T>): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
}

export class MockService implements TimeSlotServiceInterface {
  getAllTimeSlotsPerDayCreteria(day: number): CreteriaType<TimeSlotInterface> {
    throw new Error('Method not implemented.');
  }
  create(config: any) {
    throw new Error('Method not implemented.');
  }
  update(config: any) {
    throw new Error('Method not implemented.');
  }
  delete(config: any) {
    throw new Error('Method not implemented.');
  }
}

@Module({
  imports: [TimeSheetModule],
  providers: [
    {
      provide: 'TimeSlotDatabase',
      useFactory: () => new TextDataBaseService<TimeSlotInterface>('slot_test'),
      // inject: [] // You can inject anything you want
    },
    { provide: 'TimeSlotServiceInterface', useClass: MockService },
    { provide: 'TimeConfigurationServiceInterface', useClass: MockService },
    {
      provide: 'TimeConfigurationDatabase',
      useFactory: () => new TextDataBaseService<TimeConfigurationInterface>('config_test'),
      // inject: [] // You can inject anything you want
    },
    { provide: 'TimeConfigurationServiceInterface', useClass: MockService },
    { useClass: MockService, provide: 'UserServiceInterface' },
  ],
  exports: [
    'TimeSlotDatabase',
    'TimeSlotServiceInterface',
    'TimeConfigurationServiceInterface',
    'TimeConfigurationDatabase',
    'TimeConfigurationServiceInterface',
    'UserServiceInterface',
  ],
})
export class MockDataBaseModule {}
