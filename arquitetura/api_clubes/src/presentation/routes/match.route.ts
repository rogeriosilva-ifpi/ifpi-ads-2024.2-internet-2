import { Application } from "express";
import { container } from "tsyringe";
import { MatchController } from "../controllers/match.controller";
import { CommonRoute } from "./common.route";

export class MatchRoutes extends CommonRoute {
  constructor(app: Application) {
    super(app, "Matches Routes", "/matches");
  }

  configureRoutes(): Application {
    const matchController = container.resolve(MatchController);
    this.app.route(this.suffix).get(matchController.list); //Controller Matches
    return this.app;
  }
}
