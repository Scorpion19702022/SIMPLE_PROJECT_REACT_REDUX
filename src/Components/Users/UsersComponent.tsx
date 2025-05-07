import styles from './Styles/UsersComponent.module.css'

import UsersInputs from './UsersInputs'

const UsersComponent = () => {
	return (
		<section className={styles.wrapper}>
			<UsersInputs />
		</section>
	)
}

export default UsersComponent
