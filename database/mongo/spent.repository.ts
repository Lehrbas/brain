import { SpentMongo } from './spent.model';

import { ISpentsRepository } from '../../components/spent/spent.interface.repository';
import { Spent } from '../../components/spent/spent.model';
import { ISpentAmountRangeDto, ISpentDateRangeDto } from '../../components/spent/spent.dto';

export class MongoSpentRepository implements ISpentsRepository {
  public async create(spent: Spent) {
    SpentMongo.create(spent, (err) => {
      if (err)
        return console.log('MongoSpentRepo' + err);
    });
  }

  public async update(spent: Spent) {
    SpentMongo.updateOne({id: spent.id}, spent, (err: any) => {
      if (err) {
        return console.log(err);
      }
    });
  }

  public async delete(id: string) {
    SpentMongo.deleteOne({id: id}, (err: any) => {
      if (err) return console.log(err);
    });
  }

  public async findById(id: string) {
    return SpentMongo.find({id: id});
  }

  public async findByTag(tag: string) {
    return SpentMongo.find({tag: tag});
  }

  public async findByType(type: string) {
    return SpentMongo.find({type: type});
  }

  public async findByDateRange(dateRange: ISpentDateRangeDto) {
    return console.log(dateRange);
  }

  public async findByAmountRange(amountRange: ISpentAmountRangeDto) {
    return console.log(amountRange);
  }
}