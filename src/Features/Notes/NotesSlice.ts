import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeNotes } from './TypeNotes'

interface notesState {
	notesList: TypeNotes[]
	selectCategoryNotes: TypeNotes[]
}

const initialState: notesState = {
	notesList: [],
	selectCategoryNotes: [],
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

		select: (state: notesState, action: PayloadAction<string>) => {
			if (action.payload === 'all') {
				state.selectCategoryNotes = state.notesList
			} else if (action.payload === 'home') {
				state.selectCategoryNotes = state.notesList.filter(item => item.categoryType === 'dom')
			} else if (action.payload === 'job') {
				state.selectCategoryNotes = state.notesList.filter(item => item.categoryType === 'praca')
			} else if (action.payload === 'entertainment') {
				state.selectCategoryNotes = state.notesList.filter(item => item.categoryType === 'rozrywka')
			} else if (action.payload === 'other') {
				state.selectCategoryNotes = state.notesList.filter(item => item.categoryType === 'inne')
			}
		},

		deleteAll: (state: notesState) => {
			state.notesList = []
		},

		deleteNotes: (state: notesState, action: PayloadAction<string>) => {
			state.notesList = state.notesList.filter(item => item.id !== action.payload)
		},
	},
})

export const { addNotes, select, deleteAll, deleteNotes } = NotesSlice.actions
export default NotesSlice.reducer
