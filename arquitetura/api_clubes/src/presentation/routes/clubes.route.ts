import { Application } from "express";
import { container } from "tsyringe";
import { ClubesController } from "../controllers/clubes.controller";
import { CommonRoute } from "./common.route";

export class ClubesRoute extends CommonRoute {
  constructor(app: Application) {
    super(app, "Clubes Routes", "/clubes");
  }

  configureRoutes(): Application {
    const controler = container.resolve(ClubesController);

    this.app.route(this.suffix).get(controler.list).post(controler.create);
    this.app.route(`${this.suffix}/:id`).get().put().delete();

    return this.app;
  }
}
