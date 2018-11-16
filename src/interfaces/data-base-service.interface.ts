import { InstanceInterface } from './instance.interface';
import { CreteriaType } from '../types/creteria.type';

export interface DataBaseServiceInterface<T extends InstanceInterface> {
  getName(): string;
  find(creteria: CreteriaType<T>): Promise<T[]>;
  create(object: T): Promise<T>;
  update(object: T): Promise<T>;
  delete(object: T): Promise<boolean | any>;
}
