import { HashProvider } from "../application/providers/hash.provider";

// bcrypt
export class RSHashProvider implements HashProvider {
  hash(payload: string): string {
    return payload + "RS";
  }
  verify(hash: string, payload: string): boolean {
    return payload + "RS" === hash;
  }
}
