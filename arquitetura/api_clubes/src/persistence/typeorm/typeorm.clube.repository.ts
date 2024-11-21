import { Clube } from "../../domain/entities/clube.entity";
import { ClubeRepository } from "../../domain/repositories/clube.repository";

export class TypeORMClubeRepository implements ClubeRepository {
  create(nome: string): Clube {
    throw new Error("Method not implemented by Hermínio.");
  }

  list(): Clube[] {
    throw new Error("Method not implemented by Hermínio.");
  }
}
