import { Request, Response } from "express";

class ClubesController {
  public create(req: Request, res: Response) {
    res.status(201).json({ ...req.body });
  }

  public list(req: Request, res: Response) {
    res.status(200).json([]);
  }
}

export default new ClubesController();
