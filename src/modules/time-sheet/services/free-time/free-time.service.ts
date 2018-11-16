import { Injectable, Inject } from '@nestjs/common';
import { TimeSlotInterface } from '../../interfaces/time-slot.interface';
import { FreeTimeServiceInterface } from '../../interfaces/free-time-service.interface';

@Injectable()
export class FreeTimeService implements FreeTimeServiceInterface {
  async getFreeTime(slots: TimeSlotInterface[], countPrecisedCells: number) {
    const precistion = 15;
    let currentDurationOfEmptyTime = 0;
    let fromTime: number = 0;
    const freeSlots: TimeSlotInterface[] = [];

    for (let toTime = 0; toTime <= 24 * 60; toTime += precistion) {
      const isEmpty =
        slots.filter(
          slot => (fromTime <= slot.from && slot.from >= toTime) || (fromTime <= slot.to && slot.to >= toTime),
        ).length === 0;

      if (currentDurationOfEmptyTime >= countPrecisedCells || !isEmpty) {
        if (currentDurationOfEmptyTime >= countPrecisedCells) {
          freeSlots.push({
            from: fromTime,
            to: toTime,
          } as TimeSlotInterface);
        }

        currentDurationOfEmptyTime = 0;
        fromTime = toTime;
      }

      if (isEmpty) {
        currentDurationOfEmptyTime += 1;
      }
    }

    return freeSlots;
  }
}
