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

			const woman = state.allUsersList.filter(item => item.genderType === 'kobieta')
			const man = state.allUsersList.filter(item => item.genderType === 'mężczyzna')

			state.countAll = state.allUsersList.length
			state.countWoman = woman.length
			state.countMan = man.length
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
