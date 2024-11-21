import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { StartMatchCommand } from "../../application/commands/startmatch.command";

@injectable()
export class ClubesController {
  constructor(private service: StartMatchCommand) {}

  public create = (req: Request, res: Response) => {
    res.status(201).json({ ...req.body });
  };

  public list = (req: Request, res: Response) => {
    this.service.execute({
      casa_id: 1,
      user: "rogerio410",
      visitante_id: 2,
    });
    res.status(200).json([]);
  };
}

// export default new ClubesController();
export default container.resolve(ClubesController);
