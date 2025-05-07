import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import { useState } from 'react'

const NavBar = () => {
	const [viewNav, setViewNav] = useState<boolean>(true)

	const handleViewNav = () => {
		setViewNav(!viewNav)
	}

	return (
		<nav className={styles.nav_container}>
			<button className={styles.btn} onClick={handleViewNav}>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</button>
			<div className={!viewNav ? styles.nav : styles.no_nav}>
				<ul className={styles.nav_links}>
					<NavLink to='/'>
						<li className={styles.link} onClick={handleViewNav}>
							Home
						</li>
					</NavLink>
					<NavLink to='/UsersInputs'>
						<li className={styles.link} onClick={handleViewNav}>
							Users
						</li>
					</NavLink>
					<NavLink to='/Notes'>
						<li className={styles.link} onClick={handleViewNav}>
							Notes
						</li>
					</NavLink>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar
