import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeNotes } from './TypeNotes'

interface notesState {
	notesList: TypeNotes[]
	selectCategoryNotes: TypeNotes[]
	isAll: boolean
	isHome: boolean
	isJob: boolean
	isEntertainment: boolean
	isOther: boolean
}

const initialState: notesState = {
	notesList: [],
	selectCategoryNotes: [],
	isAll: true,
	isHome: false,
	isJob: false,
	isEntertainment: false,
	isOther: false,
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
			state.selectCategoryNotes.push(newNotes)
		},

		selectNotes: (state: notesState, action: PayloadAction<string>) => {
			if (action.payload === 'all') {
				state.selectCategoryNotes = state.notesList
				state.isAll = true
				state.isHome = false
				state.isJob = false
				state.isEntertainment = false
				state.isOther = false
			} else if (action.payload === 'home') {
				state.selectCategoryNotes = state.notesList.filter(item => item.categoryType === 'dom')
				state.isAll = false
				state.isHome = true
				state.isJob = false
				state.isEntertainment = false
				state.isOther = false
			} else if (action.payload === 'job') {
				state.selectCategoryNotes = state.notesList.filter(item => item.categoryType === 'praca')
				state.isAll = false
				state.isHome = false
				state.isJob = true
				state.isEntertainment = false
				state.isOther = false
			} else if (action.payload === 'entertainment') {
				state.selectCategoryNotes = state.notesList.filter(item => item.categoryType === 'rozrywka')
				state.isAll = false
				state.isHome = false
				state.isJob = false
				state.isEntertainment = true
				state.isOther = false
			} else if (action.payload === 'other') {
				state.selectCategoryNotes = state.notesList.filter(item => item.categoryType === 'inne')
				state.isAll = false
				state.isHome = false
				state.isJob = false
				state.isEntertainment = false
				state.isOther = true
			}
		},

		deleteAll: (state: notesState) => {
			state.notesList = []
			state.selectCategoryNotes = []
		},

		deleteNotes: (state: notesState, action: PayloadAction<string>) => {
			state.selectCategoryNotes = state.notesList.filter(item => item.id !== action.payload)
			state.notesList = state.notesList.filter(item => item.id !== action.payload)
		},
	},
})

export const { addNotes, selectNotes, deleteAll, deleteNotes } = NotesSlice.actions
export default NotesSlice.reducer
