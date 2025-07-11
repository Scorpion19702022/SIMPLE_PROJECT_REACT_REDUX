import { useState } from 'react'
import Magic8BallAction from './Magic8BallAction'
import Magic8BallResult from './Magic8BallResult'
import styles from './Styles/Magic8Ball.module.css'

const Magic8Ball = () => {
	const [actionBall, setActionBall] = useState<boolean>(false)
	const [inputValue, setInputValue] = useState<string>('')
	const [error, setError] = useState<string>('')
	const [quantitySigns, setQuantitySigns] = useState<number>(0)

	const handleChangeInput = (e: string) => {
		if (e.length <= 50) {
			setInputValue(e)
			setQuantitySigns(e.length)
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
			/>
			<Magic8BallResult />
		</main>
	)
}

export default Magic8Ball
