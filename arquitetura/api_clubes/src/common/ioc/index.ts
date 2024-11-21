import { container } from "tsyringe";
import { MatchRepository } from "../../domain/repositories/match.repository";
import { DrizzleMatchRepository } from "../../persistence/drizzle/drizzle.match.repository";

container.register<MatchRepository>("MatchRepository", DrizzleMatchRepository);
