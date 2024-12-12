import { Request, Response } from "express";
import { Club } from "../../domain/entities/club.entity";
import { AppDataSource } from "./../../../data-source";

class ClubesController {
  public create(req: Request, res: Response) {
    res.status(201).json({ ...req.body });
  }

  public async list(req: Request, res: Response) {
    const clubeRepo = AppDataSource.getRepository(Club);
    res.status(200).json(await clubeRepo.find());
  }
}

export default new ClubesController();
