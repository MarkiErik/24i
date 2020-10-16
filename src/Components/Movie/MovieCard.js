import React from 'react'
import { IMAGE_BASE_URL } from '../../configuration'
import styles from './MovieCard.module.scss'

export const MovieCard = ({ poster_path, original_title }) => {
	return (
		<div className={styles.card}>
			{poster_path && (
				<img
					src={`${IMAGE_BASE_URL}${poster_path}`}
					alt={original_title}
				/>
			)}
			{original_title && (
				<div className={styles.title}>
					<span>{original_title}</span>
				</div>
			)}
		</div>
	)
}
