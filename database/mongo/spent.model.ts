import { model, Schema } from 'mongoose';
import { ISpentDto } from '../../components/spent/spent.dto';

const spentSchema = new Schema<ISpentDto>({
  id: {type: String},
  type: {type: String},
  tag: {type: String},
  amount: {type: Number},
  date: {type: String},
}, {collection: 'spents'});

export const SpentMongo = model<ISpentDto>('Spent', spentSchema);
