import { Application, NextFunction } from "express";
import matchController from "../controllers/match.controller";
import { CommonRoute } from "./common.route";

const validadeUser = (data: string = "No data") => {
  return (req, res, next) => {
    console.log(`Log 4...${data}`);
    next();
  };
};

export class MatchRoutes extends CommonRoute {
  constructor(app: Application, suffix: string) {
    super(app, "Matches Routes", suffix);
  }

  configureRoutes(): Application {
    this.app
      .route(this.suffix)
      .all(
        (req, res, next) => {
          console.log("Log 1");
          next();
        },
        (req, res, next) => {
          console.log("Log 2");
          next();
        }
      )
      .get(
        (req, res, next) => {
          console.log("Log 3");
          next();
        },
        validadeUser("OI"),
        matchController.list
      ); //Controller Matches

    this.app.use((err, req, res, next: NextFunction) => {
      if (!err.message)
        res.status(500).json({ message: "Falha não identificada!" });
      next();
    });

    this.app.use((err, req, res, next) => {
      res.status(400).json({ message: err.message });
    });

    return this.app;
  }
}
