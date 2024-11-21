export interface BaseRepository<T> {
  create(name: string): T;
  list(): T[];
}
