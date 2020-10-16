import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Navigation.module.scss'

export const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<NavLink exact to="/" activeClassName={styles.active}>
				Home
			</NavLink>
			<NavLink exact to="/search" activeClassName={styles.active}>
				Search
			</NavLink>
		</nav>
	)
}
