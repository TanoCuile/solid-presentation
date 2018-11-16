import { TimeSlotInterface } from '../../time-sheet/interfaces/time-slot.interface';

export interface TimeSlotServiceInterface {
  create(slot: TimeSlotInterface);

  update(slot: TimeSlotInterface);

  delete(slot: TimeSlotInterface);
}
