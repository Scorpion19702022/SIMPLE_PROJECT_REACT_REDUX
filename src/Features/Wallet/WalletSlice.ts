import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
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
	reducers: {},
})

export const {} = WalletSlice.actions
export default WalletSlice.reducer
