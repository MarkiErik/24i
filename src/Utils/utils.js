import { TYPE_MOVIE } from '../configuration'

export const fetchData = async (url) =>
	await fetch(url).then((response) => {
		if (!response.ok) {
			throw new Error(response.status)
		} else {
			return response.json()
		}
	})

export const fetchAll = async (urls) =>
	await Promise.all(urls.map((url) => fetchData(url)))

export const makeUrls = (url, count) => {
	let urlArr = []
	for (let i = 1; i <= count; i++) {
		urlArr.push(`${url}&language=en-US&page=${i}`)
	}
	return urlArr
}

export const filterMoviesByGenre = (moviesArray, genre) => {
	if (genre === undefined) {
		return moviesArray
	} else {
		return moviesArray.filter((movie) => movie.genre_ids.includes(genre))
	}
}

export const getTitleByType = (type, movie) =>
	type === TYPE_MOVIE ? movie.original_title : movie.original_name
