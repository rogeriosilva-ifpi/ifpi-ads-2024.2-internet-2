import { Club } from "../../domain/entities/club.entity";
import { Match } from "../../domain/entities/match.entity";
import { MatchRepository } from "../../domain/repositories/match.repository";

export class TypeORMMatchRepository implements MatchRepository {
  ongoing(): Match[] {
    const match = new Match(
      new Club("Vasco"),
      new Club("Flamengo"),
      new Date()
    );
    return [match];
  }
  create(name: string): Match {
    throw new Error("Method not implemented.");
  }
  list(): Match[] {
    throw new Error("Method not implemented.");
  }
}
