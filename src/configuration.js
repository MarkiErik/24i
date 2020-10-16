export const BASE_URL = 'https://api.themoviedb.org/3'
export const API_KEY = '?api_key=92763ad827fdcb24b688442968374936'
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/'
export const TYPE_MOVIE = 'movie'
export const TYPE_TV = 'tv'
export const TYPE_TV_POPULAR = '/tv/popular'
export const TYPE_MOVIE_POPULAR = '/movie/popular'
export const POPULAR_MOVIES = `${BASE_URL}${TYPE_MOVIE_POPULAR}${API_KEY}`
export const POPULAR_TV = `${BASE_URL}${TYPE_TV_POPULAR}${API_KEY}`

export const detailMovie = (movieId, type) =>
	`${BASE_URL}/${type}/${movieId}${API_KEY}&language=en-US`
export const SEARCH_URL = `${BASE_URL}/search/multi/${API_KEY}`
// export const playPageUrl = (movieId) => `/play/${movieId}`
export const detailMoviePage = (movieId) => `/detail/${movieId}`
