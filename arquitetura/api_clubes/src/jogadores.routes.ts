import { Application } from "express";
import { CommonRoute } from "./common.route";

export class JogadoresRoutes extends CommonRoute {
  constructor(app: Application, suffix: string) {
    super(app, "Jogadores Routes", suffix);
  }

  configureRoutes(): Application {
    return this.app;
  }
}
