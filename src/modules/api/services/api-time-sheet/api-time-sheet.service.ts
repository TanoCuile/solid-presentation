import { Injectable, Inject } from '@nestjs/common';
import { TimeSlotServiceInterface } from '../../../time-sheet-management/interfaces/time-slot-service.interface';
import { FreeTimeServiceInterface } from '../../../time-sheet/interfaces/free-time-service.interface';
import { TimeSlotInterface } from '../../../time-sheet/interfaces/time-slot.interface';
import { DataBaseServiceInterface } from '../../../../interfaces/data-base-service.interface';
import { TimeConfigurationInterface } from '../../../time-sheet/interfaces/time-configuration.interface';
import { TimeConfigurationServiceInterface } from '../../../time-sheet-management/interfaces/time-configuration-service.interface';
import { UserServiceInterface } from '../../../user/interfaces/user-service.interface';

@Injectable()
export class ApiTimeSheetService {
  constructor(
    @Inject('TimeSlotDatabase') protected slotDatabase: DataBaseServiceInterface<TimeSlotInterface>,
    @Inject('TimeSlotServiceInterface') protected timeSlotService: TimeSlotServiceInterface,
    @Inject('FreeTimeServiceInterface') protected freeTimeService: FreeTimeServiceInterface,
    @Inject('TimeConfigurationDatabase') protected configDatabase: DataBaseServiceInterface<TimeConfigurationInterface>,
    @Inject('TimeConfigurationServiceInterface') protected timeConfigurationService: TimeConfigurationServiceInterface,
    @Inject('UserServiceInterface') protected userService: UserServiceInterface,
  ) {}

  async getUserFreeTimeForDay({
    userId,
    day,
    requiredSlotSize,
  }: {
    userId: number;
    day: number;
    requiredSlotSize: number;
  }): Promise<TimeSlotInterface[]> {
    const config = await this.configDatabase.find(this.userService.getUserCreteria(userId));
    const criteria = Object.assign(
      {},
      this.userService.getUserCreteria(userId),
      this.timeSlotService.getAllTimeSlotsPerDayCreteria(day),
    );
    const slots = await this.slotDatabase.find(criteria);

    return this.freeTimeService.getFreeTime(slots, config[0], requiredSlotSize);
  }

  async createSlot(slot: TimeSlotInterface) {
    return this.slotDatabase.create(slot);
  }
}
