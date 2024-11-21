import { Club } from "../../domain/entities/club.entity";
import { ClubRepository } from "../../domain/repositories/club.repository";

export class TypeORMClubeRepository implements ClubRepository {
  create(name: string): Club {
    throw new Error("Method not implemented by Hermínio.");
  }

  list(): Club[] {
    throw new Error("Method not implemented by Hermínio.");
  }
}
