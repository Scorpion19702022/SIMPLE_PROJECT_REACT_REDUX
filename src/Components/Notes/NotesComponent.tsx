import { useState } from 'react'
import NotesInputs from './NotesInputs'
import styles from './Styles/NotesComponent.module.css'

const NotesComponent = () => {
	const currentDate = new Date().toLocaleString('en-CA').slice(0, 10)

	const [theme, setTheme] = useState<string>('')
	const [inputDate, setInputDate] = useState<string>(currentDate)
	const [text, setText] = useState<string>('')
	const [kind, setKind] = useState<string>('wybierz kategorię')

	const handleChangeTheme = (e: string) => {
		setTheme(e)
	}

	const handleChangeDate = (e: string) => {
		setInputDate(e)
	}

	const handleChangeText = (e: string) => {
		if (e.length < 100) {
			setText(e)
		}
	}

	const handleChangeKind = (e: string) => {
		setKind(e)
	}

	return (
		<section className={styles.wrapper}>
			<NotesInputs
				inputTheme={theme}
				date={inputDate}
				inputText={text}
				inputKind={kind}
				changeTheme={handleChangeTheme}
				changeDate={handleChangeDate}
				changeText={handleChangeText}
				changeKind={handleChangeKind}
			/>
		</section>
	)
}

export default NotesComponent
