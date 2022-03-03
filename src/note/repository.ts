import { Repository } from '../database'

export const Note = new Repository('note', {
	title: 'TEXT',
	content: 'TEXT',
	created_at: 'TEXT',
})
