export interface Storage {
    get<T>(id: number): Promise<T>
    getAll<T>(): Promise<T[]>
    save: (entity: unknown) => unknown
    update: (id: unknown, entity: unknown) => unknown
}
