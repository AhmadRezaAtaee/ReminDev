import { Repository } from '../database'

export const Todo = new Repository('todo', {
	title: 'TEXT',
	content: 'TEXT',
	created_at: 'TEXT',
})
