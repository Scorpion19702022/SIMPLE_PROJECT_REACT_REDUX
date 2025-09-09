import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const selectWalletIncome = (state: RootState) => state.wallet.walletIncome
export const selectWalletExpense = (state: RootState) => state.wallet.walletExpense

export const selectIncomeSum = createSelector([selectWalletIncome], income =>
	income.reduce((acc, curr) => acc + +curr.worthType, 0)
)

export const selectExpenseSum = createSelector([selectWalletExpense], expense =>
	expense.reduce((acc, curr) => acc + +curr.worthType, 0)
)
