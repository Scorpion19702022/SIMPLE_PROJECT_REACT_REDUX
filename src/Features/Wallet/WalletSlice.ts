import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypesWallet } from './TypesWallet'

interface WalletState {
	walletIncome: TypesWallet[]
	walletExpense: TypesWallet[]
}

const loadFromLocalStorage = (key: string): TypesWallet[] => {
	const data = localStorage.getItem(key)
	return data ? JSON.parse(data) : []
}

const initialState: WalletState = {
	walletIncome: [],
	walletExpense: [],
}

const WalletSlice = createSlice({
	name: 'wallet',
	initialState,
	reducers: {
		addIncomeDeal: (state: WalletState, action: PayloadAction<TypesWallet>) => {
			const dealIncome: TypesWallet = {
				id: action.payload.id,
				themeType: action.payload.themeType,
				worthType: action.payload.worthType,
				kindType: action.payload.kindType,
			}

			state.walletIncome.push(dealIncome)
		},

		addExpenseDeal: (state: WalletState, action: PayloadAction<TypesWallet>) => {
			const expenseDeal: TypesWallet = {
				id: action.payload.id,
				themeType: action.payload.themeType,
				worthType: action.payload.worthType,
				kindType: action.payload.kindType,
			}

			state.walletExpense.push(expenseDeal)
		},

		deleteDealIncome: (state: WalletState, action: PayloadAction<string>) => {
			state.walletIncome = state.walletIncome.filter(item => item.id !== action.payload)
		},

		deleteDealExpense: (state: WalletState, action: PayloadAction<string>) => {
			state.walletExpense = state.walletExpense.filter(item => item.id !== action.payload)
		},

		deleteAllDeal: (state: WalletState) => {
			state.walletIncome = []
			state.walletExpense = []
		},
	},
})

export const { addIncomeDeal, addExpenseDeal, deleteDealIncome, deleteDealExpense, deleteAllDeal } = WalletSlice.actions
export default WalletSlice.reducer
