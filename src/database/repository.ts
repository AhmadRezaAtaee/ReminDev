import { Database } from 'better-sqlite3';
import { database as db } from './connection'

interface RepositoryOption {
    sqliteDb: Database
}

type SqliteDataTypes = "NULL" | "INTEGER" | "REAL" | "TEXT" | "BLOB"

interface Field {
    type: SqliteDataTypes
}

interface Fields {
    [x: string]: SqliteDataTypes | Field
}

export class Repository<T extends Fields> {
    protected database: Database

    constructor(
        private table: string,
        public fields: T,
        option?: RepositoryOption,
    ) {
        this.database = option.sqliteDb || db
    }
}
