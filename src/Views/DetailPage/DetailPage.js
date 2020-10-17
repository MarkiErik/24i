import React, { useEffect, useState, useCallback } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { fetchData, getTitleByType } from '../../Utils/utils'

import { ShakaPlayer } from '../../Components/Player/Player'
import { IMAGE_BASE_URL, detailMovie } from '../../configuration'
import styles from './DetailPage.module.scss'

export const DetailPage = () => {
	const { id } = useParams()
	const location = useLocation()
	const type = location.type

	const [movie, setMovie] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [playModal, setPlayModal] = useState(false)

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await fetchData(detailMovie(id, type))
				setMovie(data)
				setIsLoading(false)
				setIsError(false)
			} catch (e) {
				setIsLoading(false)
				setIsError(true)
			}
		}
		getData()
	}, [id, type])

	const setTitle = getTitleByType(type, movie)

	const playHandler = useCallback(() => {
		setPlayModal((prevState) => !prevState)
	}, [])

	if (isLoading) {
		return <p>Loading ...</p>
	}

	if (isError) {
		return <p>Something is wrong..</p>
	}

	return (
		<div>
			{movie && (
				<>
					{playModal && (
						<div className={styles.videoBackground}>
							<h3>{movie.original_title}</h3>
							<div className={styles.video}>
								<button
									className={styles.crossBtn}
									onClick={playHandler}
								/>
								<ShakaPlayer />
							</div>
						</div>
					)}
					<div className={styles.detailPage}>
						<div className={styles.detailPageRow}>
							<div className={styles.detailTitle}>
								<h2>{setTitle(movie)}</h2>
							</div>
							<div className={styles.detailContent}>
								<div className={styles.detailLeft}>
									<img
										src={`${IMAGE_BASE_URL}${movie.poster_path}`}
										alt={movie.original_title}
									/>
								</div>
								<div className={styles.detailRight}>
									<p>{movie.overview}</p>
									<hr />
									<p>
										Rating:
										<span> ☆ {movie.vote_average}</span>
									</p>
									<button
										className={styles.playBtn}
										onClick={playHandler}
									>
										play
									</button>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	)
}
