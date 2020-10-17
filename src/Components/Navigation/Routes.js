import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home } from '../../Views/HomePage/Home'
import { DetailPage } from '../../Views/DetailPage/DetailPage'
import { Search } from '../../Views/SearchPage/Search'

export const Routes = () => (
	<Switch>
		<Route exact path="/" render={() => <Home />} />
		<Route exact path="/detail/:id" render={() => <DetailPage />} />
		<Route exact path="/search" render={() => <Search />} />
	</Switch>
)
