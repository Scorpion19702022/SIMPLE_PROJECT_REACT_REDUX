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
		addQuestion: (state: magicBallState, action: PayloadAction<string>) => {
			state.questionState = action.payload
		},

		addAnswer: (state: magicBallState) => {
			const renderAnswer = state.answerList[Math.floor(Math.random() * state.answerList.length)]
			state.answerState = renderAnswer
		},
	},
})

export const { addQuestion, addAnswer } = MagicBallSlice.actions
export default MagicBallSlice.reducer
