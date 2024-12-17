import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { TokenProvider } from "../../application/providers/token.provider";
import { UserRepository } from "../../domain/repositories/user.repository";
import { HTTPException } from "../exceptions/http-exception";

export const tokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const auth = req.headers.authorization;
  if (!auth) throw new HTTPException(401, "Não Autorizado!");

  const tokenProvider = container.resolve<TokenProvider>("TokenProvider");

  const [_, token] = auth!.split(" ");

  const email = tokenProvider.decode(token);

  // Pegar user no BD
  const userRepo = container.resolve<UserRepository>("UserRepository");
  const user = userRepo.findByEmail(email);

  if (!user) throw new HTTPException(401, "Não Autorizado!");

  // usuário ficará disponível na request
  req.user = user;

  next();
};
