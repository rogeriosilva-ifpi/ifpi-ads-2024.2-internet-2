export interface BaseRepository<T> {
  create(entity: T): Promise<T>;
  list(): T[];
}
