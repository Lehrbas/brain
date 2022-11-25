import App from '../../app';
import mongoose from 'mongoose';
import mongoConfig from '../../config/mongo.config';
import serverConfig from '../../config/server.config';

import { router } from './routes';

const uri = `mongodb://${mongoConfig.MONGO_USER}:${mongoConfig.MONGO_PASSWORD}@${mongoConfig.MONGO_IP}:${mongoConfig.MONGO_PORT}/?authSource=admin`;

const app = new App(router, serverConfig.PORT);

mongoose.connect(uri).then(() => {
  console.log('Connected to Mongo');
});

app.listen();