import { Command } from "commander";
import { Todo } from "./repository";
import * as inquirer from "inquirer"

export const todo = new Command('todo')

const add = new Command('add')
	.argument('<title>')
	.argument('[content]')
	.option('-e, --editor')
	.action(async (title, content, { editor }) => {
		const res = Todo.insert({
			title: title || 'no title',
			content,
			created_at: new Date(Date.now()).toISOString(),
		})
		console.log(res)
	})

const get = new Command('list')
	.action(async () => { })

const update = new Command('edit')
	.action(async () => { })

const remove = new Command('delete')
	.action(async () => { })

todo
	.addCommand(add)
	.addCommand(remove)
	.addCommand(update)
	.addCommand(get)