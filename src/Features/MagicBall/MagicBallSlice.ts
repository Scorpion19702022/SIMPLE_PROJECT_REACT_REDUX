import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface magicBallState {
	questionState: string
	answerState: string
	answerList: string[]
}

const initialState: magicBallState = {
	questionState: '',
	answerState: '',
	answerList: [
		'Tak',
		'Nie',
		'Nie wiem',
		'Być może',
		'A co Cię to obchodzi',
		'Zastanów się o co pytasz',
		'Głupie pytanie',
		'Nie odpowiem Ci dupku',
	],
}

export const MagicBallSlice = createSlice({
	name: 'magicBall',
	initialState,
	reducers: {
		addQuestion: (state: magicBallState, action: PayloadAction) => {},
	},
})

export const { addQuestion } = MagicBallSlice.actions
export default MagicBallSlice.reducer
