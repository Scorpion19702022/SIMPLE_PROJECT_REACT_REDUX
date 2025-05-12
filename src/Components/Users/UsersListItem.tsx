import { TypeUsers } from '../../Features/Users/TypesUsers'
import styles from './Styles/UsersListItem.module.css'

interface InitialProps {
	user: TypeUsers
	deleteUser: (id: string) => void
}

const UsersListItem: React.FC<InitialProps> = ({ user, deleteUser }) => {
	return (
		<li className={styles.box_user}>
			<span className={styles.firstName}>{user.firstNameType}</span>
			<span className={styles.lastName}>{user.lastNameType}</span>
			<span className={styles.gender}>{user.genderType}</span>
			<button className={styles.btn} onClick={() => deleteUser(user.id)}>
				usuń
			</button>
		</li>
	)
}

export default UsersListItem
