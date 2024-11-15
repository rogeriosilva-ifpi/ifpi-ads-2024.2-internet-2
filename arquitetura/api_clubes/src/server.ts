import express, { Request, Response } from "express";
import { ClubesRoute } from "./clubes.route";
import { CommonRoute } from "./common.route";
import { JogadoresRoutes } from "./jogadores.routes";

const app = express();

app.use(express.json());

app.get("/hello", (req: Request, res: Response) => {
  res.status(200).json({ msg: "Hello" });
});

const routes: Array<CommonRoute> = [];
routes.push(
  new ClubesRoute(app, "/clubes"),
  new JogadoresRoutes(app, "/jogadores")
);

app.listen(3000, () => {
  for (let route of routes) {
    console.log(`> ${route.getName()} Configuradas`);
  }
  console.log("Server rodando em 127.0.0.1:3000");
});
