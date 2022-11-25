import { ISpentDto } from './spent.dto';
import { Spent } from './spent.model';

export interface ISpentService {
  createSpent(data: ISpentDto): Promise<void>,
  updateSpent(data: ISpentDto): Promise<void>,
  findById(id: string): Promise<Spent>,
  findByTag(tag: string): Promise<Spent[]>,
  findByType(type: string): Promise<Spent[]> 
}