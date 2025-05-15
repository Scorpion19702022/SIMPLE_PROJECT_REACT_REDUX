import styles from './Styles/NotesInputs.module.css'

interface InitialState {
	inputTheme: string
	date: string
	inputText: string
	inputKind: string
	isErrorTheme: string
	isErrorText: string
	isErrorKind: string
	changeTheme: (e: string) => void
	changeDate: (e: string) => void
	changeText: (e: string) => void
	changeKind: (e: string) => void
}

const NotesInputs: React.FC<InitialState> = ({
	inputTheme,
	date,
	inputText,
	inputKind,
	isErrorTheme,
	isErrorText,
	isErrorKind,
	changeTheme,
	changeText,
	changeDate,
	changeKind,
}) => {
	const kind = ['wybierz kategorię', 'dom', 'praca', 'rozrywka', 'inne']

	const optionSelect = kind.map((kind, id) => (
		<option className={styles.option} value={kind} key={id}>
			{kind}
		</option>
	))

	console.log(date)

	return (
		<section className={styles.wrapper}>
			<h3 className={styles.heading}>Wypełnij formularz</h3>
			<form className={styles.form}>
				<div className={styles.box_inputs}>
					<label className={styles.label}>wpisz tytuł:</label>
					<input className={styles.input} type='text' value={inputTheme} onChange={e => changeTheme(e.target.value)} />
					<span className={styles.error}>{isErrorTheme}</span>
				</div>
				<div className={styles.box_inputs}>
					<label className={styles.label}>wybierz datę:</label>
					<input
						className={styles.input_date}
						type='date'
						min={date}
						value={date}
						onChange={e => changeDate(e.target.value)}
					/>
				</div>
				<div className={styles.box_inputs}>
					<div className={styles.info_textarea}>
						<label className={styles.label_textarea}>wpisz tekst max 100 znaków:</label>
						<span className={styles.marks_textarea}>Znaków: 0</span>
					</div>
					<textarea className={styles.textarea} value={inputText} onChange={e => changeText(e.target.value)}></textarea>
					<span className={styles.error}>{isErrorText}</span>
				</div>
				<div className={styles.box_inputs}>
					<label className={styles.label}>wybierz kategorię zadania:</label>
					<select className={styles.select} value={inputKind} onChange={e => changeKind(e.target.value)}>
						{optionSelect}
					</select>
					<span className={styles.error}>{isErrorKind}</span>
				</div>
				<button className={styles.btn} type='submit'>
					dodaj
				</button>
			</form>
		</section>
	)
}

export default NotesInputs
