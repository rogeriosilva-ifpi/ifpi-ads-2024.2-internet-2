import { Request, Response } from "express";
import { injectable } from "tsyringe";
import { AppDataSource } from "../../../data-source";
import { Club } from "../../domain/entities/club.entity";

@injectable()
export class ClubesController {
  public create(req: Request, res: Response) {
    res.status(201).json({ ...req.body });
  }

  public async list(req: Request, res: Response) {
    const clubesRepo = AppDataSource.getRepository(Club);
    const clubes = await clubesRepo.find();

    res.status(200).json(clubes);
  }
}
