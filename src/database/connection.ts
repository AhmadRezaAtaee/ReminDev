import * as sqlite from 'better-sqlite3';

export const database: sqlite.Database = new sqlite('./db.db')