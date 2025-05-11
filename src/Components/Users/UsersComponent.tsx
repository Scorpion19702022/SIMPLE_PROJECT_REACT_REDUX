import { useState } from 'react'
import styles from './Styles/UsersComponent.module.css'
import UsersInputs from './UsersInputs'
import UsersList from './UsersList'
import { useAppDispatch, useAppSelector } from '../../Hooks/reduxHooks'
import { addUser } from '../../Features/Users/UsersSlice'

import { v4 as uuidv4 } from 'uuid'

const UsersComponent = () => {
	const { allUsersList } = useAppSelector(state => state.users)
	const dispatch = useAppDispatch()

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
			dispatch(addUser({ id: uuidv4(), firstNameType: firstName, lastNameType: lastName, genderType: gender }))
			setEmptyFirstName('')
			setEmptyLastName('')
			setEmptyGender('')
			setFirstName('')
			setLastName('')
			setGender('wybierz płeć')
		}
	}

	return (
		<main className={styles.wrapper}>
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
			<UsersList usersList={allUsersList} />
		</main>
	)
}

export default UsersComponent
