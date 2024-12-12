import { Application } from "express";
import authController from "../controllers/auth.controller";
import { CommonRoute } from "./common.route";

export class AuthRoutes extends CommonRoute {
  constructor(app: Application, suffix: string) {
    super(app, "Auth Routes", suffix);
  }

  configureRoutes(): Application {
    this.app.post("/signup", authController.signup);

    return this.app;
  }
}
