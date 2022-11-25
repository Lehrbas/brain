import express from 'express';
import * as bodyParser from 'body-parser';

export default class App {
  public app: express.Application;
  public port: string | number;

  constructor(router: express.Router, port: string | number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.iniatializeRouter(router);
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private iniatializeRouter(router: express.Router) {
    this.app.use(router);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
  }
}