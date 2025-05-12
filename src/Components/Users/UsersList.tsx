import { TypeUsers } from '../../Features/Users/TypesUsers'
import styles from './Styles/UsersList.module.css'
import UsersListItem from './UsersListItem'

interface InitialProps {
	usersList: TypeUsers[]
	deleteOneUser: (id: string) => void
	deleteAllUsers: () => void
}

const UsersList: React.FC<InitialProps> = ({ usersList, deleteOneUser, deleteAllUsers }) => {
	const woman = usersList.filter(gender => gender.genderType === 'kobieta')
	const man = usersList.filter(gender => gender.genderType === 'mężczyzna')

	return (
		<section className={styles.wrapper}>
			<h3 className={styles.heading}>Lista użytkowików</h3>
			<div className={styles.box_count}>
				<span className={styles.span_count}>
					wszyscy: <span className={styles.count}>{usersList.length}</span>
				</span>
				<span className={styles.span_count}>
					koiety: <span className={styles.count}>{woman.length}</span>
				</span>
				<span className={styles.span_count}>
					mężczyźni: <span className={styles.count}>{man.length}</span>
				</span>
			</div>
			<div className={styles.box_btn_select}>
				<button className={styles.btn_select} disabled={usersList.length > 0 ? false : true}>
					wszyscy
				</button>
				<button className={styles.btn_select} disabled={usersList.length > 0 ? false : true}>
					kobiety
				</button>
				<button className={styles.btn_select} disabled={usersList.length > 0 ? false : true}>
					mężczyźni
				</button>
			</div>
			<div className={styles.box_list_users}>
				<ul>
					{usersList.map((item: TypeUsers) => (
						<UsersListItem user={item} key={item.id} deleteUser={deleteOneUser} />
					))}
				</ul>
			</div>
			<button className={styles.btn_clean_all} onClick={deleteAllUsers} disabled={usersList.length > 0 ? false : true}>
				wyczyść
			</button>
		</section>
	)
}

export default UsersList
