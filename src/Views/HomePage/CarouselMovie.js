import React, { useEffect, useState, useMemo } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { MovieCard } from '../../Components/Movie/MovieCard'
import { detailMoviePage } from '../../configuration'
import {
	filterMoviesByGenre,
	fetchAll,
	makeUrls,
	getTitleByType,
} from '../../Utils/utils'
import { Loader } from '../../Components/Loader/Loader'
import styles from './CarouselMovie.module.scss'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slick.css'

export const CarouselMovie = ({ url, genre, typeMovie, pages }) => {
	const sliderSettings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	const [movies, setMovies] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)

	const setTitle = useMemo(
		() => (movie) => getTitleByType(typeMovie, movie),
		[typeMovie]
	)

	useEffect(() => {
		const getData = async () => {
			setIsError(false)
			setIsLoading(true)
			try {
				const response = await fetchAll(makeUrls(url, pages))
				const newArrData = [].concat.apply(
					[],
					response.map((r) => r.results)
				)
				setMovies(filterMoviesByGenre(newArrData, genre))
				setIsLoading(false)
				setIsError(false)
			} catch (e) {
				setIsLoading(false)
				setIsError(true)
			}
		}

		getData()
	}, [genre, pages, url])

	return (
		<div className={styles.carousel}>
			{isLoading && <Loader />}
			{isError && <p>Something is wrong..</p>}
			{movies.length > 0 && (
				<Slider {...sliderSettings}>
					{movies.map((movie) => (
						<Link
							key={movie.id}
							to={{
								pathname: detailMoviePage(movie.id),
								type: `${typeMovie}`,
							}}
						>
							<MovieCard
								original_title={setTitle(movie)}
								poster_path={movie.poster_path}
							/>
						</Link>
					))}
				</Slider>
			)}
		</div>
	)
}

CarouselMovie.propTypes = {
	genre: PropTypes.number,
	url: PropTypes.string.isRequired,
	typeMovie: PropTypes.string,
	pages: PropTypes.number,
}

CarouselMovie.defaultProps = {
	pages: 1,
	typeMovie: 'original_title',
}
