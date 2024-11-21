import { Match } from "../entities/match.entity";
import { BaseRepository } from "./base.repository";

export interface MatchRepository extends BaseRepository<Match> {
  ongoing(): Match[];
}
