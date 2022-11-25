import { ISpentDto } from './spent.dto';
import { ISpentsRepository } from './spent.interface.repository';
import { Spent } from './spent.model';
import { ISpentService } from './spent.interface.service';

export class SpentService implements ISpentService {

  constructor(
    private spentsRepository: ISpentsRepository
  ) {}

  async createSpent(data: ISpentDto): Promise<void>{
    const spent = new Spent(data);
    await this.spentsRepository.create(spent);
  }

  async updateSpent(data: ISpentDto): Promise<void> {
    if (!data.id){
      throw new Error('Error: id is needed!');
    }

    const updatedSpent = new Spent(data);

    await this.spentsRepository.update(updatedSpent);
  }

  async findById(id: string) {
    return await this.spentsRepository.findById(id);
  }

  async findByTag(tag: string) {
    return await this.spentsRepository.findByTag(tag);
  }

  async findByType(type: string) {
    return await this.spentsRepository.findByType(type);
  }
}