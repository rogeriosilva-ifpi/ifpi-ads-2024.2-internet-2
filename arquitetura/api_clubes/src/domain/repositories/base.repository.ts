export interface BaseRepository<T> {
  create(entity: T): T;
  list(): T[];
}
