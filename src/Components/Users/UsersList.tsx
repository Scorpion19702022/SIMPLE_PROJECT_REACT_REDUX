import { TypeUsers } from '../../Features/Users/TypesUsers'
import styles from './Styles/UsersList.module.css'
import UsersListItem from './UsersListItem'

interface InitialProps {
	usersList: TypeUsers[]
	deleteOneUser: (id: string) => void
	deleteAllUsers: () => void
}

const UsersList: React.FC<InitialProps> = ({ usersList, deleteOneUser, deleteAllUsers }) => {
	return (
		<section className={styles.wrapper}>
			<h3 className={styles.heading}>Lista użytkowików</h3>
			<div className={styles.box_count}>
				<span className={styles.span_count}>
					wszyscy: <span className={styles.count}>0</span>
				</span>
				<span className={styles.span_count}>
					koiety: <span className={styles.count}>0</span>
				</span>
				<span className={styles.span_count}>
					mężczyźni: <span className={styles.count}>0</span>
				</span>
			</div>
			<div className={styles.box_btn_select}>
				<button className={styles.btn_select}>wszyscy</button>
				<button className={styles.btn_select}>kobiety</button>
				<button className={styles.btn_select}>mężczyźni</button>
			</div>
			<div className={styles.box_list_users}>
				<ul>
					{usersList.map((item: TypeUsers) => (
						<UsersListItem user={item} key={item.id} deleteUser={deleteOneUser} />
					))}
				</ul>
			</div>
			<button className={styles.btn_clean_all} onClick={deleteAllUsers}>
				wyczyść
			</button>
		</section>
	)
}

export default UsersList
