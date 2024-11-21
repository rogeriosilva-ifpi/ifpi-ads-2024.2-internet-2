import { Application } from "express";
import matchController from "../controllers/match.controller";
import { CommonRoute } from "./common.route";

export class MatchRoutes extends CommonRoute {
  constructor(app: Application, suffix: string) {
    super(app, "Matches Routes", suffix);
  }

  configureRoutes(): Application {
    this.app.route(this.suffix).get(matchController.list); //Controller Matches
    return this.app;
  }
}
