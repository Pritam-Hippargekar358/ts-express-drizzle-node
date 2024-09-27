import express from 'express';
import UserRouter from "./routes/user.route";
import * as dotenv from 'dotenv';
dotenv.config();

//npx drizzle-kit generate
//npx drizzle-kit migrate

class Application {
  private app: express.Application;
  private PORT: number;

  constructor() {
    this.app = express();
    this.PORT = Number(process.env.PORT) || 3000;
    this.initMiddlewares();
    this.initRoutes();
  }

  private initMiddlewares() {
    this.app.use(express.json());
  }

  private initRoutes() {
    this.app.use('/api', UserRouter);
  }

  public listen() {
    this.app.listen(this.PORT, (err?: Error) => {
      if (err) {
        console.error('Error starting the server:', err);
        return;
      }
      console.log(`Server is running at http://localhost:${this.PORT}`);
    });
  }
}

const appInstance = new Application();
appInstance.listen();
