import { inject, injectable } from "tsyringe";
import { MatchRepository } from "../../domain/repositories/match.repository";

@injectable()
export class OnGoingMatchesQuery {
  constructor(@inject("MatchRepository") private matchRepo: MatchRepository) {}

  public execute() {
    // throw new Error("Fail by RS");
    throw new Error();
    return this.matchRepo.ongoing();
  }
}
