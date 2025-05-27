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
		addNotes: (state: notesState, action: PayloadAction<TypeNotes>) => {
			const newNotes: TypeNotes = {
				id: action.payload.id,
				themeType: action.payload.themeType,
				dateType: action.payload.dateType,
				textType: action.payload.textType,
				categoryType: action.payload.categoryType,
			}

			state.notesList.push(newNotes)
		},

		deleteAll: (state: notesState) => {
			state.notesList = []
		},

		deleteNotes: (state: notesState, action: PayloadAction<string>) => {
			state.notesList = state.notesList.filter(item => item.id !== action.payload)
		},
	},
})

export const { addNotes, deleteAll, deleteNotes } = NotesSlice.actions
export default NotesSlice.reducer
