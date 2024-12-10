import { User } from "../domain/entities/user.entity";
import { UserRepository } from "../domain/repositories/user.repository";
import { HashProvider } from "./providers/hash.provider";

interface SignUpCommandRequest {
  // DTO
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export class SignUpCommand {
  constructor(
    private userRepo: UserRepository,
    private hashProvider: HashProvider
  ) {}

  async execute({
    name,
    email,
    password,
    confirmPassword,
  }: SignUpCommandRequest): Promise<User> {
    const findUser = await this.userRepo.findByEmail(email);

    if (findUser) {
      throw new Error("Email já utilizado.");
    }

    if (password !== confirmPassword) {
      throw new Error("Senhas não coincidem.");
    }

    const hashedPass = this.hashProvider.hash(password);

    const userCreated = this.userRepo.create(new User(name, email, hashedPass));

    return userCreated;
  }
}
