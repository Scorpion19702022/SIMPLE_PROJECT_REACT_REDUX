import styles from './Styles/UsersInputs.module.css'

interface InnitialProps {
	firstNameValue: string
	lastNameValue: string
	genderValue: string
	isEmptyFirstNName: string
	isEmptyLastName: string
	isEmptyGender: string
	changeFirstName: (e: string) => void
	changeLastName: (e: string) => void
	changeGender: (e: string) => void
	submit: (e: React.FormEvent) => void
}

const UsersInputs: React.FC<InnitialProps> = ({
	firstNameValue,
	lastNameValue,
	genderValue,
	isEmptyFirstNName,
	isEmptyLastName,
	isEmptyGender,
	changeFirstName,
	changeLastName,
	changeGender,
	submit,
}) => {
	const genderSelect = ['wybierz płeć', 'kobieta', 'mężczyzna']

	const optionSelect = genderSelect.map((item, index) => (
		<option value={genderValue} key={index}>
			{item}
		</option>
	))

	return (
		<div className={styles.wrapper}>
			<h3 className={styles.heading}>Dodaj użytkownika</h3>
			<form className={styles.form} onSubmit={submit}>
				<div className={styles.box_inputs}>
					<label className={styles.label}>Podaj imię:</label>
					<input
						className={styles.input}
						type='text'
						value={firstNameValue}
						onChange={e => changeFirstName(e.target.value)}
					/>
					<span className={styles.error}>{isEmptyFirstNName}</span>
				</div>
				<div className={styles.box_inputs}>
					<label className={styles.label}>Podaj nazwisko:</label>
					<input
						className={styles.input}
						type='text'
						value={lastNameValue}
						onChange={e => changeLastName(e.target.value)}
					/>
					<span className={styles.error}>{isEmptyLastName}</span>
				</div>
				<div className={styles.box_inputs}>
					<label className={styles.label}>Wybierz płeć::</label>
					<select className={styles.select} onChange={e => changeGender(e.target.value)}>
						{optionSelect}
					</select>
					<span className={styles.error}>{isEmptyGender}</span>
				</div>
				<button type='submit' className={styles.btn}>
					dodaj
				</button>
			</form>
		</div>
	)
}

export default UsersInputs
