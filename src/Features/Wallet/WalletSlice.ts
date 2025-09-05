import { TypesWallet } from './TypesWallet'

interface WalletState {
	walletIncome: TypesWallet[]
	walletExpense: TypesWallet[]
}

const InitialState: WalletState = {
	walletIncome: [],
	walletExpense: [],
}
