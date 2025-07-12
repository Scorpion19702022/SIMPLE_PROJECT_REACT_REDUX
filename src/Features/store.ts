import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../Features/Users/UsersSlice'
import notesReducer from '../Features/Notes/NotesSlice'
import magicBallReducer from '../Features/MagicBall/MagicBallSlice'

export const store = configureStore({
	reducer: {
		users: usersReducer,
		notes: notesReducer,
		magicBall: magicBallReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
