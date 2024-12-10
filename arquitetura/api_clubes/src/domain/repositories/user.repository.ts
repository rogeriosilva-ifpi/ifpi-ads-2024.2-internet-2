import { User } from "../entities/user.entity";
import { BaseRepository } from "./base.repository";

export interface UserRepository extends BaseRepository<User> {
  findByEmail(email: string): Promise<User | null>;
}
