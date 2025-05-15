import { useState } from 'react'
import NotesInputs from './NotesInputs'
import styles from './Styles/NotesComponent.module.css'

const NotesComponent = () => {
	const currentDate = new Date().toLocaleString('en-CA').slice(0, 10)

	const [theme, setTheme] = useState<string>('')
	const [inputDate, setInputDate] = useState<string>(currentDate)
	const [text, setText] = useState<string>('')
	const [kind, setKind] = useState<string>('wybierz kategorię')

	return (
		<section className={styles.wrapper}>
			<NotesInputs inputTheme={theme} date={inputDate} inputText={text} inputKind={kind} />
		</section>
	)
}

export default NotesComponent
