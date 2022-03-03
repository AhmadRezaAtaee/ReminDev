import { root } from './root';
import { todo } from './todo';
import { note } from './note';
import { Repository } from "./database";
import { readFileSync } from 'fs';
const sql = readFileSync('./database/migrations.sql', { encoding: 'utf8' })
Repository.sql(sql)
const program = root

program
	.name('remindev')
	.version('1.0.0', '-v, --version')
	.addCommand(todo)
	.addCommand(note)

program.parse()