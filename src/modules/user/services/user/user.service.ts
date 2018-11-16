import { Injectable } from '@nestjs/common';
import { CreteriaType } from '../../../../types/creteria.type';
import { UserStaffInterface } from '../../interfaces/user-staff.interface';

@Injectable()
export class UserService {
  getUserCreteria(userId: number): CreteriaType<UserStaffInterface> {
    return {
      userId,
    } as CreteriaType<UserStaffInterface>;
  }
}
