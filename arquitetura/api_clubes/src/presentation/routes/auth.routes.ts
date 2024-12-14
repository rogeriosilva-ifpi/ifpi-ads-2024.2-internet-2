import { Application } from "express";
import { container } from "tsyringe";
import { AuthController } from "../controllers/auth.controller";
import { CommonRoute } from "./common.route";

export class AuthRoutes extends CommonRoute {
  constructor(app: Application) {
    super(app, "Auth Routes");
  }

  configureRoutes(): Application {
    const controller = container.resolve(AuthController);

    this.app.post("/signup", controller.signup);

    return this.app;
  }
}
