import { useState } from 'react'
import styles from './Styles/UsersComponent.module.css'
import UsersInputs from './UsersInputs'

const UsersComponent = () => {
	const [firstName, setFirstName] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')
	const [gender, setGender] = useState<string>('')

	const [emptyFirstName, setEmptyFirstame] = useState<string>('')
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
		if (firstName !== '' && lastName !== '' && gender !== '') {
			setEmptyFirstame('')
			setEmptyLastName('')
			setEmptyGender('')
		}
	}

	return (
		<section className={styles.wrapper}>
			<UsersInputs
				firstNameValue={firstName}
				lastNameValue={lastName}
				genderValue={gender}
				isEmptyFirstNName={emptyFirstName}
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
