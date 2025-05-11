import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeUsers } from '../../Types/TypesUsers'

interface userState {
	allUsersList: TypeUsers[]
}

const initialState: userState = {
	allUsersList: [],
}

export const SliceUsers = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser: (state: userState, action: PayloadAction<TypeUsers>) => {},
	},
})

export const { addUser } = SliceUsers.actions
export default SliceUsers.reducer
