import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeUsers } from './TypesUsers'

interface usersState {
	allUsersList: TypeUsers[]
	selectGenderUsers: TypeUsers[]
}

const initialState: usersState = {
	allUsersList: [],
	selectGenderUsers: [],
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

		selectGender: (state: usersState, action: PayloadAction<string>) => {
			if (action.payload === 'all') {
				state.selectGenderUsers = state.allUsersList
			} else if (action.payload === 'woman') {
				state.selectGenderUsers = state.allUsersList.filter(gender => gender.genderType === 'kobieta')
			} else if (action.payload === 'man') {
				state.selectGenderUsers = state.allUsersList.filter(gender => gender.genderType === 'mężczyzna')
			}
		},

		deleteAll: state => {
			state.allUsersList = []
		},

		deleteOne: (state: usersState, action: PayloadAction<string>) => {
			state.allUsersList = state.allUsersList.filter(item => item.id !== action.payload)
		},
	},
})

export const { addUser, deleteAll, deleteOne, selectGender } = UsersSlice.actions
export default UsersSlice.reducer
