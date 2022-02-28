import { root } from './root'
import { todo } from './todo'
import { note } from './note'
const program = root

program
	.name('remindev')
	.version('1.0.0', '-v, --version')
	.addCommand(todo)
	.addCommand(note)

program.parse()