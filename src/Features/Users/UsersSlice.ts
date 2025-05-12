import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeUsers } from './TypesUsers'

interface usersState {
	allUsersList: TypeUsers[]
	countAll: number
	countWoman: number
	countMan: number
}

const initialState: usersState = {
	allUsersList: [],
	countAll: 0,
	countWoman: 0,
	countMan: 0,
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

		count: (state: usersState) => {
			state.countAll = state.allUsersList.length
		},

		deleteAll: state => {
			state.allUsersList = []
		},

		deleteOne: (state: usersState, action: PayloadAction<string>) => {
			state.allUsersList = state.allUsersList.filter(item => item.id !== action.payload)
		},
	},
})

export const { addUser, deleteAll, deleteOne } = UsersSlice.actions
export default UsersSlice.reducer
