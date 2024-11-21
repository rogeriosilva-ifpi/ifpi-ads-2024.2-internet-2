import { Player } from "../entities/player.entity";
import { BaseRepository } from "./base.repository";

export interface PlayerRepository extends BaseRepository<Player> {
  withCard(color: string): Player[];
}
