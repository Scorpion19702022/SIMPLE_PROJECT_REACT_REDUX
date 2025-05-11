import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeUsers } from './TypesUsers'

interface usersState {
	allUsersList: TypeUsers[]
}

const initialState: usersState = {
	allUsersList: [],
}

export const UsersSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser: (state: usersState, action: PayloadAction<TypeUsers>) => {
			const newUsersList: TypeUsers = {
				id: action.payload.id,
				firstNameType: action.payload.firstNameType,
				lastNameType: action.payload.lastNameType,
				genderType: action.payload.genderType,
			}

			state.allUsersList.push(newUsersList)
		},
	},
})

export const { addUser } = UsersSlice.actions
export default UsersSlice.reducer
