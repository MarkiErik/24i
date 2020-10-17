import React, { useRef } from 'react'
import styles from './MovieSearchForm.module.scss'

export const MovieSearchForm = (props) => {
	const searchInput = useRef(null)

	const handleSubmit = (e) => {
		e.preventDefault()
		searchForMovie()
	}

	const handleInput = () => {
		// as fake debounce
		setTimeout(() => searchForMovie(), 500)
	}
	const searchForMovie = () => {
		if (searchInput.current.value.length > 0) {
			props.onSearch(searchInput.current.value)
		}
	}
	return (
		<div>
			<div className={styles.searchBar}>
				<form onSubmit={handleSubmit}>
					<input
						autoFocus
						type="text"
						ref={searchInput}
						onChange={handleInput}
						className={styles.searchInput}
					/>
				</form>
			</div>
		</div>
	)
}
