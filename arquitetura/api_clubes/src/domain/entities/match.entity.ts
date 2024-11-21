import { Club } from "./club.entity";

export class Match {
  id: number;

  constructor(private host: Club, private guest: Club, private at: Date) {
    this.host = host;
    this.guest = guest;
    this.at = at;
  }
}
