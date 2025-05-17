import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeNotes } from './TypeNotes'

interface notesState {
	notesList: TypeNotes[]
}

const initialState: notesState = {
	notesList: [],
}

export const NotesSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {
		addNotes: (state: notesState, action: PayloadAction<TypeNotes>) => {},
	},
})

export const { addNotes } = NotesSlice.actions
export default NotesSlice.reducer
