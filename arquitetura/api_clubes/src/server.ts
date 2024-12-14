import express, { Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import "../src/common/ioc";
import { AuthRoutes } from "./presentation/routes/auth.routes";
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
  new ClubesRoute(app),
  new JogadoresRoutes(app),
  new MatchRoutes(app),
  new AuthRoutes(app)
);

// Global Error Handler (a melhorar com custom HTTPException)
app.use((err, req, res, next) => {
  res.status(400).json({ message: err.message });
});

app.listen(3000, () => {
  for (let route of routes) {
    console.log(`> ${route.getName()} Configuradas`);
  }
  console.log("Server rodando em 127.0.0.1:3000");
});
