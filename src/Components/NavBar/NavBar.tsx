import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
	return (
		<nav className={styles.nav_container}>
			<button className={styles.btn}>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</button>
			<div className={styles.nav}>
				<ul className={styles.nav_links}>
					<NavLink to='/'>
						<li className={styles.link}>Home</li>
					</NavLink>
					<NavLink to='./Notes'>
						<li className={styles.link}>Notes</li>
					</NavLink>
					<NavLink to='./Users'>
						<li className={styles.link}>Users</li>
					</NavLink>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar
