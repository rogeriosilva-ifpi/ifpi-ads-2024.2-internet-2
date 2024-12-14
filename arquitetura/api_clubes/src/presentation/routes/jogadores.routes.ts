import { Application } from "express";
import { CommonRoute } from "./common.route";

export class JogadoresRoutes extends CommonRoute {
  constructor(app: Application) {
    super(app, "Jogadores Routes", "/jogadores");
  }

  configureRoutes(): Application {
    return this.app;
  }
}
