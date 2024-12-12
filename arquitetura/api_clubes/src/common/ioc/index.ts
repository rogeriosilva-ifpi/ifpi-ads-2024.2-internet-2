import { container } from "tsyringe";
import { HashProvider } from "../../application/providers/hash.provider";
import { MatchRepository } from "../../domain/repositories/match.repository";
import { UserRepository } from "../../domain/repositories/user.repository";
import { RSHashProvider } from "../../infrastructure/rs.hash.provider";
import { DrizzleMatchRepository } from "../../persistence/drizzle/drizzle.match.repository";
import { TypeORMMatchRepository } from "../../persistence/typeorm/typeorm.match.repository";
import { TypeORMUserRepository } from "../../persistence/typeorm/typeorm.user.repository";

// ******* INJEÇÃO DIRETA *******

// container.register<MatchRepository>("MatchRepository", TypeORMMatchRepository);
// container.register<MatchRepository>("MatchRepository", DrizzleMatchRepository);

// ******* INJEÇÃO COM REGRAS *******

// Usar TypeORM pela manhã (0-11h) e Drizzle à tarde/noite (12-23h)
const matchRepositoryFactory = (): MatchRepository => {
  const currentHour = new Date().getHours();

  // Experimente trocar < por >
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

container.register<UserRepository>("UserRepository", TypeORMUserRepository);
// container.register<HashProvider>("HashProvider", RSHashProvider);
container.register<HashProvider>("HashProvider", RSHashProvider);
