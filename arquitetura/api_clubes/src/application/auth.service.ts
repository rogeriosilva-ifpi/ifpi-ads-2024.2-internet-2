import { inject, injectable } from "tsyringe";
import { User } from "../domain/entities/user.entity";
import { UserRepository } from "../domain/repositories/user.repository";
import { EmailDuplicatedException } from "../presentation/exceptions/email-duplicated.exception";
import { HTTPException } from "../presentation/exceptions/http-exception";
import { HashProvider } from "./providers/hash.provider";
import { TokenProvider } from "./providers/token.provider";

interface SignUpCommandRequest {
  // DTO
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

interface SignInRequest {
  email: string;
  password: string;
}

interface SignInResponse {
  name: string;
  accessToken: string;
  refreshToken: string;
}

@injectable()
export class AuthService {
  constructor(
    @inject("UserRepository") private userRepo: UserRepository,
    @inject("HashProvider") private hashProvider: HashProvider,
    @inject("TokenProvider") private tokenProvider: TokenProvider
  ) {}

  async signup({
    name,
    email,
    password,
    confirmPassword,
    phone,
  }: SignUpCommandRequest): Promise<User> {
    const findUser = await this.userRepo.findByEmail(email);

    if (findUser) {
      throw new EmailDuplicatedException();
    }

    if (password !== confirmPassword) {
      throw new Error("Senhas não coincidem.");
    }

    const hashedPass = this.hashProvider.hash(password);

    const userCreated = await this.userRepo.create(
      new User(name, email, hashedPass, phone)
    );

    return userCreated;
  }

  async signin(request: SignInRequest): Promise<SignInResponse> {
    const user = await this.userRepo.findByEmail(request.email);

    if (!user) {
      throw new HTTPException(400, "Usuário e/ou Senha incorreto(s)");
    }

    const isMatch = this.hashProvider.verify(user.password, request.password);

    if (!isMatch) {
      throw new HTTPException(400, "Usuário e/ou Senha incorreto(s)");
    }

    const accessToken = this.tokenProvider.encode(user.email, "15m");
    const refreshToken = this.tokenProvider.encode(user.email, "3d");

    return { name: user.name, accessToken, refreshToken };
  }
}
