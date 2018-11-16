import { TimeSlotInterface } from '../../time-sheet/interfaces/time-slot.interface';
import { CreteriaType } from '../../../types/creteria.type';

export interface TimeSlotServiceInterface {
  getAllTimeSlotsPerDayCreteria(day: number): CreteriaType<TimeSlotInterface>;

  create(slot: TimeSlotInterface);

  update(slot: TimeSlotInterface);

  delete(slot: TimeSlotInterface);
}
