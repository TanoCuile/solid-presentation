import { Injectable, Inject } from '@nestjs/common';
import { TimeSlotServiceInterface } from '../../../time-sheet-management/interfaces/time-slot-service.interface';
import { FreeTimeServiceInterface } from '../../../time-sheet/interfaces/free-time-service.interface';
import { TimeSlotInterface } from '../../../time-sheet/interfaces/time-slot.interface';
import { DataBaseServiceInterface } from '../../../../interfaces/data-base-service.interface';

@Injectable()
export class ApiTimeSheetService {
  constructor(
    @Inject('TimeSlotDatabase') protected slotDatabase: DataBaseServiceInterface<TimeSlotInterface>,
    @Inject('TimeSlotServiceInterface') protected timeSlotService: TimeSlotServiceInterface,
    @Inject('FreeTimeServiceInterface') protected freeTimeConfigurationService: FreeTimeServiceInterface,
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
    const criteria = Object.assign(this.timeSlotService.getAllTimeSlotsPerDayCreteria(day));
    const slots = await this.slotDatabase.find(criteria);

    return this.freeTimeConfigurationService.getFreeTime(slots, requiredSlotSize);
  }

  async createSlot(slot: TimeSlotInterface) {
    return this.slotDatabase.create(slot);
  }
}
