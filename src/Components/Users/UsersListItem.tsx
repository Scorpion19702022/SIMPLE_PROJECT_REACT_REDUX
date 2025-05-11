import { TypeUsers } from '../../Features/Users/TypesUsers'
import styles from './Styles/UsersListItem.module.css'

interface InitialProps {
	user: TypeUsers
}

const UsersListItem: React.FC<InitialProps> = ({ user }) => {
	return (
		<li className={styles.box_user}>
			<span className={styles.firstName}>{user.firstNameType}</span>
			<span className={styles.lastName}>{user.lastNameType}</span>
			<span className={styles.gender}>{user.genderType}</span>
			<button className={styles.btn}>usuń</button>
		</li>
	)
}

export default UsersListItem
