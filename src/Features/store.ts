import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../Features/Users/UsersSlice'
import notesReducer from '../Features/Notes/NotesSlice'
import magicBallReducer from '../Features/MagicBall/MagicBallSlice'
import walletReducer from '../Features/Wallet/WalletSlice'

export const store = configureStore({
	reducer: {
		users: usersReducer,
		notes: notesReducer,
		magicBall: magicBallReducer,
		wallet: walletReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
