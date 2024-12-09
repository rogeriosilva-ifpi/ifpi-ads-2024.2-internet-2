import express, { Request, Response } from "express";
import "reflect-metadata";
import "../src/common/ioc";
import { ClubesRoute } from "./presentation/routes/clubes.route";
import { CommonRoute } from "./presentation/routes/common.route";
import { JogadoresRoutes } from "./presentation/routes/jogadores.routes";
import { MatchRoutes } from "./presentation/routes/match.route";

const app = express();

app.use(express.json());

app.get("/hello", (req: Request, res: Response) => {
  res.status(200).json({ msg: "Hello" });
});

const routes: Array<CommonRoute> = [];
routes.push(
  new ClubesRoute(app, "/clubes"),
  new JogadoresRoutes(app, "/jogadores"),
  new MatchRoutes(app, "/matches")
);

app.listen(3000, () => {
  for (let route of routes) {
    console.log(`> ${route.getName()} Configuradas`);
  }
  console.log("Server rodando em 127.0.0.1:3000");
});
