import { Injectable, Inject } from '@nestjs/common';
import { TimeSlotInterface } from '../../../time-sheet/interfaces/time-slot.interface';
import { TimeSlotServiceInterface } from '../../interfaces/time-slot-service.interface';

@Injectable()
export class TimeSlotService implements TimeSlotServiceInterface {
  async create(slot: TimeSlotInterface) {
    // HMmmm
  }

  async update(slot: TimeSlotInterface) {
    // HMmmm
  }

  async delete(slot: TimeSlotInterface) {
    // HMmmm
  }
}
