import React from 'react'
import PropTypes from 'prop-types'

import { MovieCard } from '../../Components/Movie/MovieCard'
import styles from './MovieSearchList.module.scss'

export const MovieSearchList = (props) => {
	const { list } = props
	return (
		<div className={styles.list}>
			{console.log(list)}
			{list.length > 0 &&
				list.map((item) => (
					<div className={styles.child} key={item.id}>
						<MovieCard
							poster_path={item.poster_path}
							original_title={item.original_title}
						/>
					</div>
				))}
		</div>
	)
}

MovieSearchList.propTypes = {
	list: PropTypes.array,
}
