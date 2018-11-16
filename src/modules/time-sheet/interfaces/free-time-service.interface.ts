import { TimeSlotInterface } from './time-slot.interface';

export interface FreeTimeServiceInterface {
  getFreeTime(
    slots: TimeSlotInterface[],
    countPrecisedCells: number,
  ): Promise<TimeSlotInterface[]>;
}
