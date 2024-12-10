export interface TokenProvider {
  encode(data: string, expires: string): string;
  decode(token: string): string;
}
