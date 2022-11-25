import { SpentService } from './spent.service';
import { SpentController } from './spent.controller';
import { MongoSpentRepository } from '../../database/mongo/spent.repository';

const mongoSpentRepository = new MongoSpentRepository();

const spentService = new SpentService(mongoSpentRepository);

const spentController = new SpentController(spentService);

export { spentService, spentController };