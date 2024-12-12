import { Repository } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { User } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";

export class TypeORMUserRepository implements UserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.repository.findOneBy({ email });
  }

  async create(entity: User): Promise<User> {
    const user = await this.repository.save(entity);
    return user;
  }

  list(): User[] {
    throw new Error("Method not implemented.");
  }
}
