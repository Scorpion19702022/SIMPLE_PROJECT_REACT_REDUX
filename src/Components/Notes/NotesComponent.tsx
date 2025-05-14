import { useState } from 'react'
import NotesInputs from './NotesInputs'
import styles from './Styles/NotesComponent.module.css'

const NotesComponent = () => {
	const currentDate = new Date().toLocaleString('en-CA').slice(0, 10)

	console.log(currentDate)

	const [inputDate, setInputDate] = useState<string>(currentDate)

	return (
		<section className={styles.wrapper}>
			<NotesInputs date={inputDate} />
		</section>
	)
}

export default NotesComponent
