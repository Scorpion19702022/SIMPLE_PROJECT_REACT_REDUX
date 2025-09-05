import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypesWallet } from './TypesWallet'

interface WalletState {
	walletIncome: TypesWallet[]
	walletExpense: TypesWallet[]
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
	},
})

export const { addIncomeDeal } = WalletSlice.actions
export default WalletSlice.reducer
