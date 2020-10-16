import React from 'react'

import {
	POPULAR_MOVIES,
	POPULAR_TV,
	TYPE_MOVIE,
	TYPE_TV,
} from '../../configuration'
import { CarouselMovie } from './CarouselMovie'
import styles from './Home.module.scss'

export const Home = () => {
	return (
		<div className={styles.home}>
			<div>
				<h1>Popular Movies</h1>
				<CarouselMovie
					url={POPULAR_MOVIES}
					pages={3}
					typeMovie={TYPE_MOVIE}
				/>
			</div>

			<div>
				<h1>Popular Tv Series</h1>
				<CarouselMovie url={POPULAR_TV} pages={3} typeMovie={TYPE_TV} />
			</div>

			<div>
				<h1>Family</h1>
				<CarouselMovie
					url={POPULAR_MOVIES}
					genre={10751}
					pages={3}
					typeMovie={TYPE_MOVIE}
				/>
			</div>

			<div>
				<h1>Documentary</h1>
				<CarouselMovie
					url={POPULAR_MOVIES}
					genre={99}
					pages={3}
					typeMovie={TYPE_MOVIE}
				/>
			</div>
		</div>
	)
}
