import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
	return (
		<nav className={styles.nav_container}>
			<button>
				<div></div>
				<div></div>
				<div></div>
			</button>
			<div>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='./Notes'>Notes</NavLink>
					</li>
					<li>
						<NavLink to='./Users'>Users</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar
