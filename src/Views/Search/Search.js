import React, { useState } from 'react'
import { MovieSearchForm } from './MovieSearchForm'
import { fetchData } from '../../Utils/utils'
import { SEARCH_URL } from '../../configuration'
import { MovieSearchList } from './MovieSearchList'

export const Search = () => {
	const [searchQuery, setSearchQuery] = useState({})
	const [error, setError] = useState(null)

	const handleSearchFormSubmit = (data) => {
		try {
			fetchData(
				`${SEARCH_URL}&language=en-US&query=${data}&page=1&include_adult=false`
			).then((response) => {
				setSearchQuery(response.results)
				console.log('res', response.results)
			})
		} catch (e) {
			setError(e)
		}
	}

	return (
		<div>
			<MovieSearchForm onSearch={handleSearchFormSubmit} />
			<MovieSearchList list={searchQuery} />
		</div>
	)
}
