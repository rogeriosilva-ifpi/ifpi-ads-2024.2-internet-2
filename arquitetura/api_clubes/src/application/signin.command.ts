import { UserRepository } from "../domain/repositories/user.repository";
import { HashProvider } from "./providers/hash.provider";
import { TokenProvider } from "./providers/token.provider";

interface SignInRequest {
  email: string;
  password: string;
}

interface SignInResponse {
  name: string;
  accessToken: string;
  refreshToken: string;
}

export class SignInCommand {
  constructor(
    private hashProvider: HashProvider,
    private tokenProvider: TokenProvider,
    private repoUser: UserRepository
  ) {}

  async execute(request: SignInRequest): Promise<SignInResponse> {
    const user = await this.repoUser.findByEmail(request.email);

    if (!user) {
      throw new Error("Usuário e/ou Senha incorreto(s)");
    }

    const isMatch = this.hashProvider.verify(user.password, request.password);

    if (!isMatch) {
      throw new Error("Usuário e/ou Senha incorreto(s)");
    }

    const accessToken = this.tokenProvider.encode(user.email, "15m");
    const refreshToken = this.tokenProvider.encode(user.email, "3d");

    return { name: user.name, accessToken, refreshToken };
  }
}
