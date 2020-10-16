import React from 'react'

import { Navigation } from './Components/Navigation/Navigation'
import { Routes } from './Components/Navigation/Routes'
import styles from './App.module.scss'

export const App = () => {
	return (
		<div className={styles.app}>
			<header>
				<Navigation />
			</header>
			<main>
				<Routes />
			</main>
		</div>
	)
}
