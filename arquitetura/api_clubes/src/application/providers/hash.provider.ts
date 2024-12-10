export interface HashProvider {
  hash(payload: string): string;
  verify(hash: string, payload: string): boolean;
}
