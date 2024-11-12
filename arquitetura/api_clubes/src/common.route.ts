import { Application } from "express";

export abstract class CommonRoute {
  protected app: Application;
  private name: string;
  protected suffix: string;

  constructor(app: Application, name: string, suffix: string) {
    this.app = app;
    this.name = name;
    this.suffix = suffix;
    this.configureRoutes();
  }

  getName() {
    return this.name;
  }

  abstract configureRoutes(): Application;
}
