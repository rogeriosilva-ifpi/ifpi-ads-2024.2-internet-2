import { TokenProvider } from "../application/providers/token.provider";

import * as jwt from "jsonwebtoken";
import { HTTPException } from "../presentation/exceptions/http-exception";

export class JWTTokenProvider implements TokenProvider {
  encode(data: string, expires: string): string {
    const token = jwt.sign({ sub: data }, "ElRsOt");

    return token;
  }

  decode(token: string): string {
    try {
      const decoded = jwt.verify(token, "ElRsOt");
      // to fix
      return decoded["sub"] as string;
    } catch (err) {
      throw new HTTPException(401, "Invalid token!");
    }
  }
}
