import { ISpentDateRangeDto, ISpentAmountRangeDto } from './spent.dto';
import { Spent } from './spent.model';

export interface ISpentsRepository {
  create(spent: Spent): Promise<void>;
  update(spent: Spent): Promise<void>;
  delete(id: string): Promise<void>;

  findById(id: string): Promise<any>;
  findByTag(tag: string): Promise<any[]>;
  findByType(type: string): Promise<any[]>;

  findByDateRange(dateRange: ISpentDateRangeDto): Promise<any>;
  findByAmountRange(amountRange: ISpentAmountRangeDto): Promise<any>;
}