import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Search } from './Search'
import { MovieSearchForm } from './MovieSearchForm'
import { MovieSearchList } from './MovieSearchList'

configure({ adapter: new Adapter() })

describe('<Search />', () => {
	it('should render  <Search /> element', () => {
		const wrapper = shallow(<Search />)
		expect(wrapper.exists()).toBe(true)
	})

	it('should render two <MovieSearchForm /> element', () => {
		const wrapper = shallow(<Search />)
		expect(wrapper.find(MovieSearchForm)).toHaveLength(1)
	})

	it('should render two <MovieSearchList /> element', () => {
		const wrapper = shallow(<Search />)
		expect(wrapper.find(MovieSearchList)).toHaveLength(1)
	})
})
