import { useState } from 'react'
import NotesInputs from './NotesInputs'
import styles from './Styles/NotesComponent.module.css'

const NotesComponent = () => {
	const currentDate = new Date().toLocaleString('en-CA').slice(0, 10)

	const [theme, setTheme] = useState<string>('')
	const [inputDate, setInputDate] = useState<string>(currentDate)
	const [text, setText] = useState<string>('')
	const [kind, setKind] = useState<string>('wybierz kategorię')

	const [emptyTheme, setEmptyTheme] = useState<string>('')
	const [emptyText, setEmptyText] = useState<string>('')
	const [emptyKind, setEmptyKind] = useState<string>('')

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

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (theme === '' && text === '' && kind === 'wybierz kategorię') {
			setEmptyTheme('podaj tytuł')
			setEmptyText('wpisz tekst')
			setEmptyKind('wybierz kategorię')
		}
	}

	return (
		<section className={styles.wrapper}>
			<NotesInputs
				inputTheme={theme}
				date={inputDate}
				inputText={text}
				inputKind={kind}
				isErrorTheme={emptyTheme}
				isErrorText={emptyText}
				isErrorKind={emptyKind}
				changeTheme={handleChangeTheme}
				changeDate={handleChangeDate}
				changeText={handleChangeText}
				changeKind={handleChangeKind}
				submit={handleSubmit}
			/>
		</section>
	)
}

export default NotesComponent
