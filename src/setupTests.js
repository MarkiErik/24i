// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import 'core-js/es/map'
import 'core-js/es/set'
import 'raf/polyfill'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
window.matchMedia =
	window.matchMedia ||
	function () {
		return {
			matches: false,
			addListener: function () {},
			removeListener: function () {},
		}
	}

window.requestAnimationFrame =
	window.requestAnimationFrame ||
	function (callback) {
		setTimeout(callback, 0)
	}
