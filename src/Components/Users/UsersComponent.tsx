import { useState } from 'react'
import styles from './Styles/UsersComponent.module.css'
import UsersInputs from './UsersInputs'

const UsersComponent = () => {
	const [firstName, setFirstName] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')
	const [gender, setGender] = useState<string>('')

	const handleChangeFirstName = (e: string) => {}

	const handleChangeLastName = (e: string) => {}

	const handleChangeGender = (e: string) => {}

	return (
		<section className={styles.wrapper}>
			<UsersInputs />
		</section>
	)
}

export default UsersComponent
