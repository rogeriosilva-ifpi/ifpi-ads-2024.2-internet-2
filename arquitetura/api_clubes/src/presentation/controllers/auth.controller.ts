import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { SignUpCommand } from "../../application/signup.command";

@injectable()
export class AuthController {
  constructor(private signupCommand: SignUpCommand) {}

  public signup = async (req: Request, res: Response) => {
    const { name, email, password, confirmPassword, phone } = req.body;

    const user = await this.signupCommand.execute({
      name,
      email,
      password,
      confirmPassword,
      phone,
    });

    return res.status(201).json(user);
  };
}

export default container.resolve(AuthController);
