import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import "../src/common/ioc";
import { HTTPException } from "./presentation/exceptions/http-exception";
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

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Interceptou....: ${req.path} - ${req.method}`);
  // res.status(401).json({ detail: "Acesso negado!" });
  next();
});

routes.push(
  new ClubesRoute(app),
  new JogadoresRoutes(app),
  new MatchRoutes(app),
  new AuthRoutes(app)
);

// Global Error Exception
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HTTPException) {
    res.status(err.statusCode).json({ detail: err.message });
  }
  // res
  //   .status(500)
  //   .json({ detail: "Falha interna. Tente mais tarde <exclamacao>" });
  next();
});

app.listen(3000, () => {
  for (let route of routes) {
    console.log(`> ${route.getName()} Configuradas`);
  }
  console.log("Server rodando em 127.0.0.1:3000");
});
