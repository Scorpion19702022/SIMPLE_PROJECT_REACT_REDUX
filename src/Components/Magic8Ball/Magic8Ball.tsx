import { useState } from 'react'
import Magic8BallAction from './Magic8BallAction'
import Magic8BallResult from './Magic8BallResult'
import styles from './Styles/Magic8Ball.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks'
import { addQuestion } from '../../Features/MagicBall/MagicBallSlice'

const Magic8Ball = () => {
	const { questionState } = useAppSelector(state => state.magicBall)

	const dispatch = useAppDispatch()

	const [actionBall, setActionBall] = useState<boolean>(false)
	const [inputValue, setInputValue] = useState<string>('')
	const [error, setError] = useState<string>('')
	const [quantitySigns, setQuantitySigns] = useState<number>(0)

	const handleChangeInput = (e: string) => {
		if (e.length <= 30) {
			setInputValue(e)
			setQuantitySigns(e.length)
		}
	}

	const handleShowAnswer = () => {
		setActionBall(true)
		setTimeout(() => {
			setActionBall(false)
		}, 1000)
		if (inputValue !== '' && inputValue.slice(-1) === '?') {
			setError('')
			dispatch(addQuestion(inputValue))
		} else if (inputValue === '') {
			setError('musisz zadać pytanie')
		}
	}

	return (
		<main className={styles.wrapper}>
			<Magic8BallAction
				isActionBall={actionBall}
				fillInputQuestion={inputValue}
				isError={error}
				signsLength={quantitySigns}
				changeInput={handleChangeInput}
				showAnswer={handleShowAnswer}
			/>
			<Magic8BallResult viewQuestion={questionState} />
		</main>
	)
}

export default Magic8Ball
