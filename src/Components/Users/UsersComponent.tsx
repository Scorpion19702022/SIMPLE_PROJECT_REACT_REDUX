import { useState } from 'react'
import styles from './Styles/UsersComponent.module.css'
import UsersInputs from './UsersInputs'

const UsersComponent = () => {
	const [firstName, setFirstName] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')
	const [gender, setGender] = useState<string>('wybierz płeć')

	const [emptyFirstName, setEmptyFirstName] = useState<string>('')
	const [emptyLastName, setEmptyLastName] = useState<string>('')
	const [emptyGender, setEmptyGender] = useState<string>('')

	const handleChangeFirstName = (e: string) => {
		setFirstName(e)
	}

	const handleChangeLastName = (e: string) => {
		setLastName(e)
	}

	const handleChangeGender = (e: string) => {
		setGender(e)
	}

	const handleAddUser = (e: React.FormEvent) => {
		e.preventDefault()
		if (firstName === '' && lastName === '' && gender === 'wybierz płeć') {
			setEmptyFirstName('musisz podać imię')
			setEmptyLastName('musisz podać nazwisko')
			setEmptyGender('musisz wybrać płeć')
		} else if (firstName === '' && lastName === '' && gender !== 'wybierz płeć') {
			setEmptyFirstName('musisz podać imię')
			setEmptyLastName('musisz podać nazwisko')
			setEmptyGender('')
		} else if (firstName === '' && lastName !== '' && gender === 'wybierz płeć') {
			setEmptyFirstName('musisz podać imię')
			setEmptyLastName('')
			setEmptyGender('musisz wybrać płeć')
		} else if (firstName !== '' && lastName === '' && gender === 'wybierz płeć') {
			setEmptyFirstName('')
			setEmptyLastName('musisz podać nazwisko')
			setEmptyGender('musisz wybrać płeć')
		} else if (firstName === '' && lastName !== '' && gender !== 'wybierz płeć') {
			setEmptyFirstName('musisz podać imię')
			setEmptyLastName('')
			setEmptyGender('')
		} else if (firstName !== '' && lastName === '' && gender !== 'wybierz płeć') {
			setEmptyFirstName('')
			setEmptyLastName('musisz podać nazwisko')
			setEmptyGender('')
		} else if (firstName !== '' && lastName !== '' && gender === 'wybierz płeć') {
			setEmptyFirstName('')
			setEmptyLastName('')
			setEmptyGender('musisz wybrać płeć')
		} else if (firstName !== '' && lastName !== '' && gender !== 'wybierz płeć') {
			setEmptyFirstName('')
			setEmptyLastName('')
			setEmptyGender('')
			setFirstName('')
			setLastName('')
			setGender('wybierz płeć')
		}
	}

	return (
		<section className={styles.wrapper}>
			<UsersInputs
				firstNameValue={firstName}
				lastNameValue={lastName}
				genderValue={gender}
				isEmptyFirstName={emptyFirstName}
				isEmptyLastName={emptyLastName}
				isEmptyGender={emptyGender}
				changeFirstName={handleChangeFirstName}
				changeLastName={handleChangeLastName}
				changeGender={handleChangeGender}
				submitAddUser={handleAddUser}
			/>
		</section>
	)
}

export default UsersComponent
