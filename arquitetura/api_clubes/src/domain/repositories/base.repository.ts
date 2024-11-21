export interface BaseRepository<T> {
  create(nome: string): T;
  list(): T[];
}
