import { container } from "tsyringe";
import { MatchRepository } from "../../domain/repositories/match.repository";
import { DrizzleMatchRepository } from "../../persistence/drizzle/drizzle.match.repository";
import { TypeORMMatchRepository } from "../../persistence/typeorm/typeorm.match.repository";

// ******* INJEÇÃO DIRETA *******

// container.register<MatchRepository>("MatchRepository", TypeORMMatchRepository);
// container.register<MatchRepository>("MatchRepository", DrizzleMatchRepository);

// ******* INJEÇÃO COM REGRAS *******

// Usar TypeORM pela manhã (0-11h) e Drizzle à tarde/noite (12-23h)
const matchRepositoryFactory = (): MatchRepository => {
  const currentHour = new Date().getHours();

  // Experimento trocar
  if (currentHour < 12) {
    return new TypeORMMatchRepository();
  } else {
    return new DrizzleMatchRepository();
  }
};

// Registro da Fábrica no container
container.register<MatchRepository>("MatchRepository", {
  useFactory: matchRepositoryFactory,
});
