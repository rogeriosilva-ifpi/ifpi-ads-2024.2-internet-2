import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { OnGoingMatchesQuery } from "../../application/ongoing-matches.query";

@injectable()
export class MatchController {
  constructor(private ongoingQuery: OnGoingMatchesQuery) {}

  public list = (req: Request, res: Response) => {
    res.status(200).json(this.ongoingQuery.execute());
  };
}

export default container.resolve(MatchController);
