import express from "express";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();

    this.runMidlewares();
    this.callRoutes();
  }

  runMidlewares() {
    this.server.use(express.json());
  }

  callRoutes() {
    this.server.use(routes);
  }
}

export default new App().server;
