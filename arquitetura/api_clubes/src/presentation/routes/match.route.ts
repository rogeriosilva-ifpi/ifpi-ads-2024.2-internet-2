import { Application } from "express";
import { container } from "tsyringe";
import { MatchController } from "../controllers/match.controller";
import { tokenMiddleware } from "../middlewares/token.middleware";
import { CommonRoute } from "./common.route";

export class MatchRoutes extends CommonRoute {
  constructor(app: Application) {
    super(app, "Matches Routes", "/matches");
  }

  configureRoutes(): Application {
    const matchController = container.resolve(MatchController);

    // this.app.get('/dasd', dasdas,() => {})

    this.app.route(this.suffix).get(tokenMiddleware, matchController.list); //Controller Matches
    return this.app;
  }
}
