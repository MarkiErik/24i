import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { NavLink } from 'react-router-dom'
import { Navigation } from './Navigation'

configure({ adapter: new Adapter() })

describe('<NavLink>', () => {
	it('should render  <Navigation /> element', () => {
		const wrapper = shallow(<Navigation />)
		expect(wrapper.exists()).toBe(true)
	})

	it('should render two <NavLink /> element', () => {
		const wrapper = shallow(<Navigation />)
		expect(wrapper.find(NavLink)).toHaveLength(2)
	})
})
