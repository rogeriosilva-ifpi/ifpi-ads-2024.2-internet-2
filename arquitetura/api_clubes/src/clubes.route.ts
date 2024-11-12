import { Application } from "express";
import clubesController from "./clubes.controller";
import { CommonRoute } from "./common.route";

export class ClubesRoute extends CommonRoute {
  constructor(app: Application, suffix: string) {
    super(app, "Clubes Routes", suffix);
  }

  configureRoutes(): Application {
    this.app
      .route(this.suffix)
      .get(clubesController.list)
      .post(clubesController.create);

    this.app.route(`${this.suffix}/:id`).get().put().delete().patch();

    return this.app;
  }
}
