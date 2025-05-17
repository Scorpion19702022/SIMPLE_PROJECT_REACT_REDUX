import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../Features/Users/UsersSlice'
import notesReducer from '../Features/Notes/NotesSlice'

export const store = configureStore({
	reducer: {
		users: usersReducer,
		notes: notesReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
