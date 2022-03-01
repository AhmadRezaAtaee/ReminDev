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

    insert(data: { [key in keyof T]?: any }) {
        const query = `INSERT INTO ${this.table} 
        (${Object.keys(data).join(', ')}) 
        VALUES (${Object.keys(data).map(key => '@' + key).join(', ')})
        `
        const res = db.prepare(query).run(data)
        return this.get(res.lastInsertRowid as number)
    }

    get(id: number) {
        const query = `SELECT * FROM ${this.table} WHERE id = @id`
        return db.prepare(query).get({ id: id });
    }

}
