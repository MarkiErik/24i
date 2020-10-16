/*
 @license
 Shaka Player
 Copyright 2016 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
;(function () {
	var innerGlobal = typeof window != 'undefined' ? window : global
	var exportTo = {}
	;(function (window, global, module) {
		/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
		var q
		function aa(a) {
			var b = 0
			return function () {
				return b < a.length ? { done: !1, value: a[b++] } : { done: !0 }
			}
		}
		var ba =
			'function' == typeof Object.defineProperties
				? Object.defineProperty
				: function (a, b, c) {
						if (a == Array.prototype || a == Object.prototype)
							return a
						a[b] = c.value
						return a
				  }
		function da(a) {
			a = [
				'object' == typeof globalThis && globalThis,
				a,
				'object' == typeof window && window,
				'object' == typeof self && self,
				'object' == typeof global && global,
			]
			for (var b = 0; b < a.length; ++b) {
				var c = a[b]
				if (c && c.Math == Math) return c
			}
			throw Error('Cannot find global object')
		}
		var fa = da(this)
		function ha(a, b) {
			if (b) {
				for (
					var c = fa, d = a.split('.'), e = 0;
					e < d.length - 1;
					e++
				) {
					var f = d[e]
					f in c || (c[f] = {})
					c = c[f]
				}
				d = d[d.length - 1]
				e = c[d]
				f = b(e)
				f != e &&
					null != f &&
					ba(c, d, { configurable: !0, writable: !0, value: f })
			}
		}
		ha('Symbol', function (a) {
			function b(e) {
				if (this instanceof b)
					throw new TypeError('Symbol is not a constructor')
				return new c('jscomp_symbol_' + (e || '') + '_' + d++, e)
			}
			function c(e, f) {
				this.a = e
				ba(this, 'description', {
					configurable: !0,
					writable: !0,
					value: f,
				})
			}
			if (a) return a
			c.prototype.toString = function () {
				return this.a
			}
			var d = 0
			return b
		})
		ha('Symbol.iterator', function (a) {
			if (a) return a
			a = Symbol('Symbol.iterator')
			for (
				var b = 'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(
						' '
					),
					c = 0;
				c < b.length;
				c++
			) {
				var d = fa[b[c]]
				'function' === typeof d &&
					'function' != typeof d.prototype[a] &&
					ba(d.prototype, a, {
						configurable: !0,
						writable: !0,
						value: function () {
							return ia(aa(this))
						},
					})
			}
			return a
		})
		function ia(a) {
			a = { next: a }
			a[Symbol.iterator] = function () {
				return this
			}
			return a
		}
		function r(a) {
			var b =
				'undefined' != typeof Symbol &&
				Symbol.iterator &&
				a[Symbol.iterator]
			return b ? b.call(a) : { next: aa(a) }
		}
		function ja(a) {
			if (!(a instanceof Array)) {
				a = r(a)
				for (var b, c = []; !(b = a.next()).done; ) c.push(b.value)
				a = c
			}
			return a
		}
		var ka =
				'function' == typeof Object.create
					? Object.create
					: function (a) {
							function b() {}
							b.prototype = a
							return new b()
					  },
			la
		if ('function' == typeof Object.setPrototypeOf)
			la = Object.setPrototypeOf
		else {
			var ma
			a: {
				var na = { he: !0 },
					pa = {}
				try {
					pa.__proto__ = na
					ma = pa.he
					break a
				} catch (a) {}
				ma = !1
			}
			la = ma
				? function (a, b) {
						a.__proto__ = b
						if (a.__proto__ !== b)
							throw new TypeError(a + ' is not extensible')
						return a
				  }
				: null
		}
		var qa = la
		function ra(a, b) {
			a.prototype = ka(b.prototype)
			a.prototype.constructor = a
			if (qa) qa(a, b)
			else
				for (var c in b)
					if ('prototype' != c)
						if (Object.defineProperties) {
							var d = Object.getOwnPropertyDescriptor(b, c)
							d && Object.defineProperty(a, c, d)
						} else a[c] = b[c]
		}
		function sa() {
			this.j = !1
			this.g = null
			this.b = void 0
			this.a = 1
			this.f = this.h = 0
			this.u = this.c = null
		}
		function ta(a) {
			if (a.j) throw new TypeError('Generator is already running')
			a.j = !0
		}
		sa.prototype.l = function (a) {
			this.b = a
		}
		function ua(a, b) {
			a.c = { Hd: b, Md: !0 }
			a.a = a.h || a.f
		}
		sa.prototype['return'] = function (a) {
			this.c = { return: a }
			this.a = this.f
		}
		function u(a, b, c) {
			a.a = c
			return { value: b }
		}
		sa.prototype.o = function (a) {
			this.a = a
		}
		function x(a) {
			a.a = 0
		}
		function z(a, b, c) {
			a.h = b
			void 0 != c && (a.f = c)
		}
		function va(a) {
			a.h = 0
			a.f = 2
		}
		function wa(a, b) {
			a.a = b
			a.h = 0
		}
		function C(a) {
			a.h = 0
			var b = a.c.Hd
			a.c = null
			return b
		}
		function xa(a) {
			a.u = [a.c]
			a.h = 0
			a.f = 0
		}
		function za(a, b) {
			var c = a.u.splice(0)[0]
			;(c = a.c = a.c || c)
				? c.Md
					? (a.a = a.h || a.f)
					: void 0 != c.o && a.f < c.o
					? ((a.a = c.o), (a.c = null))
					: (a.a = a.f)
				: (a.a = b)
		}
		function Aa(a) {
			this.a = new sa()
			this.b = a
		}
		function Ba(a, b) {
			ta(a.a)
			var c = a.a.g
			if (c)
				return Ca(
					a,
					'return' in c
						? c['return']
						: function (d) {
								return { value: d, done: !0 }
						  },
					b,
					a.a['return']
				)
			a.a['return'](b)
			return Da(a)
		}
		function Ca(a, b, c, d) {
			try {
				var e = b.call(a.a.g, c)
				if (!(e instanceof Object))
					throw new TypeError(
						'Iterator result ' + e + ' is not an object'
					)
				if (!e.done) return (a.a.j = !1), e
				var f = e.value
			} catch (g) {
				return (a.a.g = null), ua(a.a, g), Da(a)
			}
			a.a.g = null
			d.call(a.a, f)
			return Da(a)
		}
		function Da(a) {
			for (; a.a.a; )
				try {
					var b = a.b(a.a)
					if (b) return (a.a.j = !1), { value: b.value, done: !1 }
				} catch (c) {
					;(a.a.b = void 0), ua(a.a, c)
				}
			a.a.j = !1
			if (a.a.c) {
				b = a.a.c
				a.a.c = null
				if (b.Md) throw b.Hd
				return { value: b['return'], done: !0 }
			}
			return { value: void 0, done: !0 }
		}
		function Ea(a) {
			this.next = function (b) {
				ta(a.a)
				a.a.g
					? (b = Ca(a, a.a.g.next, b, a.a.l))
					: (a.a.l(b), (b = Da(a)))
				return b
			}
			this['throw'] = function (b) {
				ta(a.a)
				a.a.g
					? (b = Ca(a, a.a.g['throw'], b, a.a.l))
					: (ua(a.a, b), (b = Da(a)))
				return b
			}
			this['return'] = function (b) {
				return Ba(a, b)
			}
			this[Symbol.iterator] = function () {
				return this
			}
		}
		function Fa(a, b) {
			var c = new Ea(new Aa(b))
			qa && qa(c, a.prototype)
			return c
		}
		ha('Promise', function (a) {
			function b(g) {
				this.b = 0
				this.g = void 0
				this.a = []
				var h = this.c()
				try {
					g(h.resolve, h.reject)
				} catch (k) {
					h.reject(k)
				}
			}
			function c() {
				this.a = null
			}
			function d(g) {
				return g instanceof b
					? g
					: new b(function (h) {
							h(g)
					  })
			}
			if (a) return a
			c.prototype.b = function (g) {
				if (null == this.a) {
					this.a = []
					var h = this
					this.c(function () {
						h.g()
					})
				}
				this.a.push(g)
			}
			var e = fa.setTimeout
			c.prototype.c = function (g) {
				e(g, 0)
			}
			c.prototype.g = function () {
				for (; this.a && this.a.length; ) {
					var g = this.a
					this.a = []
					for (var h = 0; h < g.length; ++h) {
						var k = g[h]
						g[h] = null
						try {
							k()
						} catch (l) {
							this.f(l)
						}
					}
				}
				this.a = null
			}
			c.prototype.f = function (g) {
				this.c(function () {
					throw g
				})
			}
			b.prototype.c = function () {
				function g(l) {
					return function (m) {
						k || ((k = !0), l.call(h, m))
					}
				}
				var h = this,
					k = !1
				return { resolve: g(this.w), reject: g(this.f) }
			}
			b.prototype.w = function (g) {
				if (g === this)
					this.f(new TypeError('A Promise cannot resolve to itself'))
				else if (g instanceof b) this.B(g)
				else {
					a: switch (typeof g) {
						case 'object':
							var h = null != g
							break a
						case 'function':
							h = !0
							break a
						default:
							h = !1
					}
					h ? this.u(g) : this.h(g)
				}
			}
			b.prototype.u = function (g) {
				var h = void 0
				try {
					h = g.then
				} catch (k) {
					this.f(k)
					return
				}
				'function' == typeof h ? this.D(h, g) : this.h(g)
			}
			b.prototype.f = function (g) {
				this.j(2, g)
			}
			b.prototype.h = function (g) {
				this.j(1, g)
			}
			b.prototype.j = function (g, h) {
				if (0 != this.b)
					throw Error(
						'Cannot settle(' +
							g +
							', ' +
							h +
							'): Promise already settled in state' +
							this.b
					)
				this.b = g
				this.g = h
				this.l()
			}
			b.prototype.l = function () {
				if (null != this.a) {
					for (var g = 0; g < this.a.length; ++g) f.b(this.a[g])
					this.a = null
				}
			}
			var f = new c()
			b.prototype.B = function (g) {
				var h = this.c()
				g.hc(h.resolve, h.reject)
			}
			b.prototype.D = function (g, h) {
				var k = this.c()
				try {
					g.call(h, k.resolve, k.reject)
				} catch (l) {
					k.reject(l)
				}
			}
			b.prototype.then = function (g, h) {
				function k(p, t) {
					return 'function' == typeof p
						? function (v) {
								try {
									l(p(v))
								} catch (w) {
									m(w)
								}
						  }
						: t
				}
				var l,
					m,
					n = new b(function (p, t) {
						l = p
						m = t
					})
				this.hc(k(g, l), k(h, m))
				return n
			}
			b.prototype['catch'] = function (g) {
				return this.then(void 0, g)
			}
			b.prototype.hc = function (g, h) {
				function k() {
					switch (l.b) {
						case 1:
							g(l.g)
							break
						case 2:
							h(l.g)
							break
						default:
							throw Error('Unexpected state: ' + l.b)
					}
				}
				var l = this
				null == this.a ? f.b(k) : this.a.push(k)
			}
			b.resolve = d
			b.reject = function (g) {
				return new b(function (h, k) {
					k(g)
				})
			}
			b.race = function (g) {
				return new b(function (h, k) {
					for (var l = r(g), m = l.next(); !m.done; m = l.next())
						d(m.value).hc(h, k)
				})
			}
			b.all = function (g) {
				var h = r(g),
					k = h.next()
				return k.done
					? d([])
					: new b(function (l, m) {
							function n(v) {
								return function (w) {
									p[v] = w
									t--
									0 == t && l(p)
								}
							}
							var p = [],
								t = 0
							do
								p.push(void 0),
									t++,
									d(k.value).hc(n(p.length - 1), m),
									(k = h.next())
							while (!k.done)
					  })
			}
			return b
		})
		function Ga(a) {
			function b(d) {
				return a.next(d)
			}
			function c(d) {
				return a['throw'](d)
			}
			return new Promise(function (d, e) {
				function f(g) {
					g.done
						? d(g.value)
						: Promise.resolve(g.value).then(b, c).then(f, e)
				}
				f(a.next())
			})
		}
		function J(a) {
			return Ga(new Ea(new Aa(a)))
		}
		function Ha(a, b) {
			return Object.prototype.hasOwnProperty.call(a, b)
		}
		ha('WeakMap', function (a) {
			function b(k) {
				this.a = (h += Math.random() + 1).toString()
				if (k) {
					k = r(k)
					for (var l; !(l = k.next()).done; )
						(l = l.value), this.set(l[0], l[1])
				}
			}
			function c() {}
			function d(k) {
				var l = typeof k
				return ('object' === l && null !== k) || 'function' === l
			}
			function e(k) {
				if (!Ha(k, g)) {
					var l = new c()
					ba(k, g, { value: l })
				}
			}
			function f(k) {
				var l = Object[k]
				l &&
					(Object[k] = function (m) {
						if (m instanceof c) return m
						e(m)
						return l(m)
					})
			}
			if (
				(function () {
					if (!a || !Object.seal) return !1
					try {
						var k = Object.seal({}),
							l = Object.seal({}),
							m = new a([
								[k, 2],
								[l, 3],
							])
						if (2 != m.get(k) || 3 != m.get(l)) return !1
						m['delete'](k)
						m.set(l, 4)
						return !m.has(k) && 4 == m.get(l)
					} catch (n) {
						return !1
					}
				})()
			)
				return a
			var g = '$jscomp_hidden_' + Math.random()
			f('freeze')
			f('preventExtensions')
			f('seal')
			var h = 0
			b.prototype.set = function (k, l) {
				if (!d(k)) throw Error('Invalid WeakMap key')
				e(k)
				if (!Ha(k, g)) throw Error('WeakMap key fail: ' + k)
				k[g][this.a] = l
				return this
			}
			b.prototype.get = function (k) {
				return d(k) && Ha(k, g) ? k[g][this.a] : void 0
			}
			b.prototype.has = function (k) {
				return d(k) && Ha(k, g) && Ha(k[g], this.a)
			}
			b.prototype['delete'] = function (k) {
				return d(k) && Ha(k, g) && Ha(k[g], this.a)
					? delete k[g][this.a]
					: !1
			}
			return b
		})
		ha('Map', function (a) {
			function b() {
				var h = {}
				return (h.Ka = h.next = h.head = h)
			}
			function c(h, k) {
				var l = h.a
				return ia(function () {
					if (l) {
						for (; l.head != h.a; ) l = l.Ka
						for (; l.next != l.head; )
							return (l = l.next), { done: !1, value: k(l) }
						l = null
					}
					return { done: !0, value: void 0 }
				})
			}
			function d(h, k) {
				var l = k && typeof k
				'object' == l || 'function' == l
					? f.has(k)
						? (l = f.get(k))
						: ((l = '' + ++g), f.set(k, l))
					: (l = 'p_' + k)
				var m = h.b[l]
				if (m && Ha(h.b, l))
					for (var n = 0; n < m.length; n++) {
						var p = m[n]
						if ((k !== k && p.key !== p.key) || k === p.key)
							return { id: l, list: m, index: n, $: p }
					}
				return { id: l, list: m, index: -1, $: void 0 }
			}
			function e(h) {
				this.b = {}
				this.a = b()
				this.size = 0
				if (h) {
					h = r(h)
					for (var k; !(k = h.next()).done; )
						(k = k.value), this.set(k[0], k[1])
				}
			}
			if (
				(function () {
					if (
						!a ||
						'function' != typeof a ||
						!a.prototype.entries ||
						'function' != typeof Object.seal
					)
						return !1
					try {
						var h = Object.seal({ x: 4 }),
							k = new a(r([[h, 's']]))
						if (
							's' != k.get(h) ||
							1 != k.size ||
							k.get({ x: 4 }) ||
							k.set({ x: 4 }, 't') != k ||
							2 != k.size
						)
							return !1
						var l = k.entries(),
							m = l.next()
						if (m.done || m.value[0] != h || 's' != m.value[1])
							return !1
						m = l.next()
						return m.done ||
							4 != m.value[0].x ||
							't' != m.value[1] ||
							!l.next().done
							? !1
							: !0
					} catch (n) {
						return !1
					}
				})()
			)
				return a
			var f = new WeakMap()
			e.prototype.set = function (h, k) {
				h = 0 === h ? 0 : h
				var l = d(this, h)
				l.list || (l.list = this.b[l.id] = [])
				l.$
					? (l.$.value = k)
					: ((l.$ = {
							next: this.a,
							Ka: this.a.Ka,
							head: this.a,
							key: h,
							value: k,
					  }),
					  l.list.push(l.$),
					  (this.a.Ka.next = l.$),
					  (this.a.Ka = l.$),
					  this.size++)
				return this
			}
			e.prototype['delete'] = function (h) {
				h = d(this, h)
				return h.$ && h.list
					? (h.list.splice(h.index, 1),
					  h.list.length || delete this.b[h.id],
					  (h.$.Ka.next = h.$.next),
					  (h.$.next.Ka = h.$.Ka),
					  (h.$.head = null),
					  this.size--,
					  !0)
					: !1
			}
			e.prototype.clear = function () {
				this.b = {}
				this.a = this.a.Ka = b()
				this.size = 0
			}
			e.prototype.has = function (h) {
				return !!d(this, h).$
			}
			e.prototype.get = function (h) {
				return (h = d(this, h).$) && h.value
			}
			e.prototype.entries = function () {
				return c(this, function (h) {
					return [h.key, h.value]
				})
			}
			e.prototype.keys = function () {
				return c(this, function (h) {
					return h.key
				})
			}
			e.prototype.values = function () {
				return c(this, function (h) {
					return h.value
				})
			}
			e.prototype.forEach = function (h, k) {
				for (var l = this.entries(), m; !(m = l.next()).done; )
					(m = m.value), h.call(k, m[1], m[0], this)
			}
			e.prototype[Symbol.iterator] = e.prototype.entries
			var g = 0
			return e
		})
		ha('Set', function (a) {
			function b(c) {
				this.a = new Map()
				if (c) {
					c = r(c)
					for (var d; !(d = c.next()).done; ) this.add(d.value)
				}
				this.size = this.a.size
			}
			if (
				(function () {
					if (
						!a ||
						'function' != typeof a ||
						!a.prototype.entries ||
						'function' != typeof Object.seal
					)
						return !1
					try {
						var c = Object.seal({ x: 4 }),
							d = new a(r([c]))
						if (
							!d.has(c) ||
							1 != d.size ||
							d.add(c) != d ||
							1 != d.size ||
							d.add({ x: 4 }) != d ||
							2 != d.size
						)
							return !1
						var e = d.entries(),
							f = e.next()
						if (f.done || f.value[0] != c || f.value[1] != c)
							return !1
						f = e.next()
						return f.done ||
							f.value[0] == c ||
							4 != f.value[0].x ||
							f.value[1] != f.value[0]
							? !1
							: e.next().done
					} catch (g) {
						return !1
					}
				})()
			)
				return a
			b.prototype.add = function (c) {
				c = 0 === c ? 0 : c
				this.a.set(c, c)
				this.size = this.a.size
				return this
			}
			b.prototype['delete'] = function (c) {
				c = this.a['delete'](c)
				this.size = this.a.size
				return c
			}
			b.prototype.clear = function () {
				this.a.clear()
				this.size = 0
			}
			b.prototype.has = function (c) {
				return this.a.has(c)
			}
			b.prototype.entries = function () {
				return this.a.entries()
			}
			b.prototype.values = function () {
				return this.a.values()
			}
			b.prototype.keys = b.prototype.values
			b.prototype[Symbol.iterator] = b.prototype.values
			b.prototype.forEach = function (c, d) {
				var e = this
				this.a.forEach(function (f) {
					return c.call(d, f, f, e)
				})
			}
			return b
		})
		function Ja(a, b, c) {
			a instanceof String && (a = String(a))
			for (var d = a.length, e = 0; e < d; e++) {
				var f = a[e]
				if (b.call(c, f, e, a)) return { aa: e, ee: f }
			}
			return { aa: -1, ee: void 0 }
		}
		ha('Array.prototype.findIndex', function (a) {
			return a
				? a
				: function (b, c) {
						return Ja(this, b, c).aa
				  }
		})
		ha('Promise.prototype.finally', function (a) {
			return a
				? a
				: function (b) {
						return this.then(
							function (c) {
								return Promise.resolve(b()).then(function () {
									return c
								})
							},
							function (c) {
								return Promise.resolve(b()).then(function () {
									throw c
								})
							}
						)
				  }
		})
		ha('Object.is', function (a) {
			return a
				? a
				: function (b, c) {
						return b === c
							? 0 !== b || 1 / b === 1 / c
							: b !== b && c !== c
				  }
		})
		ha('Array.prototype.includes', function (a) {
			return a
				? a
				: function (b, c) {
						var d = this
						d instanceof String && (d = String(d))
						var e = d.length,
							f = c || 0
						for (0 > f && (f = Math.max(f + e, 0)); f < e; f++) {
							var g = d[f]
							if (g === b || Object.is(g, b)) return !0
						}
						return !1
				  }
		})
		function Ka(a, b, c) {
			if (null == a)
				throw new TypeError(
					"The 'this' value for String.prototype." +
						c +
						' must not be null or undefined'
				)
			if (b instanceof RegExp)
				throw new TypeError(
					'First argument to String.prototype.' +
						c +
						' must not be a regular expression'
				)
			return a + ''
		}
		ha('String.prototype.includes', function (a) {
			return a
				? a
				: function (b, c) {
						return -1 !== Ka(this, b, 'includes').indexOf(b, c || 0)
				  }
		})
		ha('Array.from', function (a) {
			return a
				? a
				: function (b, c, d) {
						c =
							null != c
								? c
								: function (h) {
										return h
								  }
						var e = [],
							f =
								'undefined' != typeof Symbol &&
								Symbol.iterator &&
								b[Symbol.iterator]
						if ('function' == typeof f) {
							b = f.call(b)
							for (var g = 0; !(f = b.next()).done; )
								e.push(c.call(d, f.value, g++))
						} else
							for (f = b.length, g = 0; g < f; g++)
								e.push(c.call(d, b[g], g))
						return e
				  }
		})
		ha('Array.prototype.find', function (a) {
			return a
				? a
				: function (b, c) {
						return Ja(this, b, c).ee
				  }
		})
		ha('String.prototype.repeat', function (a) {
			return a
				? a
				: function (b) {
						var c = Ka(this, null, 'repeat')
						if (0 > b || 1342177279 < b)
							throw new RangeError('Invalid count value')
						b |= 0
						for (var d = ''; b; )
							if ((b & 1 && (d += c), (b >>>= 1))) c += c
						return d
				  }
		})
		ha('String.prototype.startsWith', function (a) {
			return a
				? a
				: function (b, c) {
						for (
							var d = Ka(this, b, 'startsWith'),
								e = d.length,
								f = b.length,
								g = Math.max(0, Math.min(c | 0, d.length)),
								h = 0;
							h < f && g < e;

						)
							if (d[g++] != b[h++]) return !1
						return h >= f
				  }
		})
		ha('Math.log2', function (a) {
			return a
				? a
				: function (b) {
						return Math.log(b) / Math.LN2
				  }
		})
		var La =
			'function' == typeof Object.assign
				? Object.assign
				: function (a, b) {
						for (var c = 1; c < arguments.length; c++) {
							var d = arguments[c]
							if (d) for (var e in d) Ha(d, e) && (a[e] = d[e])
						}
						return a
				  }
		ha('Object.assign', function (a) {
			return a || La
		})
		ha('Object.values', function (a) {
			return a
				? a
				: function (b) {
						var c = [],
							d
						for (d in b) Ha(b, d) && c.push(b[d])
						return c
				  }
		})
		var Ma = this || self
		function K(a, b) {
			var c = a.split('.'),
				d = Ma
			c[0] in d ||
				'undefined' == typeof d.execScript ||
				d.execScript('var ' + c[0])
			for (var e; c.length && (e = c.shift()); )
				c.length || void 0 === b
					? d[e] && d[e] !== Object.prototype[e]
						? (d = d[e])
						: (d = d[e] = {})
					: (d[e] = b)
		} /*
 @license
 Shaka Player
 Copyright 2016 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
		function Na(a) {
			this.c = Math.exp(Math.log(0.5) / a)
			this.b = this.a = 0
		}
		function Oa(a, b, c) {
			var d = Math.pow(a.c, b)
			c = c * (1 - d) + d * a.a
			isNaN(c) || ((a.a = c), (a.b += b))
		}
		function Pa(a) {
			return a.a / (1 - Math.pow(a.c, a.b))
		}
		function Qa() {
			this.b = new Na(2)
			this.c = new Na(5)
			this.a = 0
		}
		Qa.prototype.getBandwidthEstimate = function (a) {
			return 128e3 > this.a ? a : Math.min(Pa(this.b), Pa(this.c))
		}
		function Ra() {}
		function Sa() {}
		function Ta() {}
		function Ua(a, b) {
			for (var c = [], d = 1; d < arguments.length; ++d)
				c[d - 1] = arguments[d]
			Wa.has(a) || (Wa.add(a), Ta.apply(Ra, ja(c)))
		}
		function Xa() {}
		function Ya() {}
		function $a() {}
		var Wa = new Set()
		if (window.console && window.console.log.bind) {
			var ab = {},
				bb =
					((ab[1] = console.error.bind(console)),
					(ab[2] = console.warn.bind(console)),
					(ab[3] = console.info.bind(console)),
					(ab[4] = console.log.bind(console)),
					(ab[5] = console.debug.bind(console)),
					(ab[6] = console.debug.bind(console)),
					ab)
			Ta = bb[2]
			Sa = bb[1]
		}
		function cb(a, b) {
			for (var c = [], d = r(a), e = d.next(); !e.done; e = d.next())
				c.push(b(e.value))
			return c
		}
		function db(a, b) {
			for (var c = r(a), d = c.next(); !d.done; d = c.next())
				if (!b(d.value)) return !1
			return !0
		}
		var fb = function eb(a) {
				var c
				return Fa(eb, function (d) {
					1 == d.a && (c = 0)
					if (3 != d.a) return c < a ? u(d, c, 3) : d.o(0)
					c++
					return d.o(2)
				})
			},
			hb = function gb(a) {
				var c, d, e, f, g, h
				return Fa(gb, function (k) {
					1 == k.a &&
						((c = -1), (e = d = void 0), (f = r(a)), (g = f.next()))
					if (5 != k.a) {
						if (g.done)
							return -1 == c
								? k.o(0)
								: u(
										k,
										{ aa: c, Ve: d, item: e, next: void 0 },
										0
								  )
						h = g.value
						return 0 <= c
							? u(k, { aa: c, item: e, Ve: d, next: h }, 5)
							: k.o(5)
					}
					c++
					d = e
					e = h
					g = f.next()
					return k.o(2)
				})
			} /*
 @license
 Copyright 2008 The Closure Library Authors
 SPDX-License-Identifier: Apache-2.0
*/
		var ib = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/ /*
 @license
 Copyright 2006 The Closure Library Authors
 SPDX-License-Identifier: Apache-2.0
*/
		function jb(a) {
			var b
			a instanceof jb
				? (kb(this, a.za),
				  (this.fb = a.fb),
				  (this.ya = a.ya),
				  lb(this, a.wb),
				  (this.oa = a.oa),
				  mb(this, a.a.clone()),
				  (this.Xa = a.Xa))
				: a && (b = String(a).match(ib))
				? (kb(this, b[1] || '', !0),
				  (this.fb = nb(b[2] || '')),
				  (this.ya = nb(b[3] || '', !0)),
				  lb(this, b[4]),
				  (this.oa = nb(b[5] || '', !0)),
				  mb(this, b[6] || '', !0),
				  (this.Xa = nb(b[7] || '')))
				: (this.a = new ob(null))
		}
		q = jb.prototype
		q.za = ''
		q.fb = ''
		q.ya = ''
		q.wb = null
		q.oa = ''
		q.Xa = ''
		q.toString = function () {
			var a = [],
				b = this.za
			b && a.push(pb(b, qb, !0), ':')
			if ((b = this.ya)) {
				a.push('//')
				var c = this.fb
				c && a.push(pb(c, qb, !0), '@')
				a.push(
					encodeURIComponent(b).replace(/%25([0-9a-fA-F]{2})/g, '%$1')
				)
				b = this.wb
				null != b && a.push(':', String(b))
			}
			if ((b = this.oa))
				this.ya && '/' != b.charAt(0) && a.push('/'),
					a.push(pb(b, '/' == b.charAt(0) ? rb : sb, !0))
			;(b = this.a.toString()) && a.push('?', b)
			;(b = this.Xa) && a.push('#', pb(b, tb))
			return a.join('')
		}
		q.resolve = function (a) {
			var b = this.clone()
			'data' === b.za && (b = new jb())
			var c = !!a.za
			c ? kb(b, a.za) : (c = !!a.fb)
			c ? (b.fb = a.fb) : (c = !!a.ya)
			c ? (b.ya = a.ya) : (c = null != a.wb)
			var d = a.oa
			if (c) lb(b, a.wb)
			else if ((c = !!a.oa)) {
				if ('/' != d.charAt(0))
					if (this.ya && !this.oa) d = '/' + d
					else {
						var e = b.oa.lastIndexOf('/')
						;-1 != e && (d = b.oa.substr(0, e + 1) + d)
					}
				if ('..' == d || '.' == d) d = ''
				else if (-1 != d.indexOf('./') || -1 != d.indexOf('/.')) {
					e = 0 == d.lastIndexOf('/', 0)
					d = d.split('/')
					for (var f = [], g = 0; g < d.length; ) {
						var h = d[g++]
						'.' == h
							? e && g == d.length && f.push('')
							: '..' == h
							? ((1 < f.length ||
									(1 == f.length && '' != f[0])) &&
									f.pop(),
							  e && g == d.length && f.push(''))
							: (f.push(h), (e = !0))
					}
					d = f.join('/')
				}
			}
			c ? (b.oa = d) : (c = '' !== a.a.toString())
			c ? mb(b, a.a.clone()) : (c = !!a.Xa)
			c && (b.Xa = a.Xa)
			return b
		}
		q.clone = function () {
			return new jb(this)
		}
		function kb(a, b, c) {
			a.za = c ? nb(b, !0) : b
			a.za && (a.za = a.za.replace(/:$/, ''))
		}
		function lb(a, b) {
			if (b) {
				b = Number(b)
				if (isNaN(b) || 0 > b) throw Error('Bad port number ' + b)
				a.wb = b
			} else a.wb = null
		}
		function mb(a, b, c) {
			b instanceof ob
				? (a.a = b)
				: (c || (b = pb(b, ub)), (a.a = new ob(b)))
		}
		function nb(a, b) {
			return a ? (b ? decodeURI(a) : decodeURIComponent(a)) : ''
		}
		function pb(a, b, c) {
			return null != a
				? ((a = encodeURI(a).replace(b, vb)),
				  c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
				  a)
				: null
		}
		function vb(a) {
			a = a.charCodeAt(0)
			return '%' + ((a >> 4) & 15).toString(16) + (a & 15).toString(16)
		}
		var qb = /[#\/\?@]/g,
			sb = /[#\?:]/g,
			rb = /[#\?]/g,
			ub = /[#\?@]/g,
			tb = /#/g
		function ob(a) {
			this.a = a || null
		}
		q = ob.prototype
		q.la = null
		q.jc = null
		q.add = function (a, b) {
			if (!this.la && ((this.la = {}), (this.jc = 0), this.a))
				for (var c = this.a.split('&'), d = 0; d < c.length; d++) {
					var e = c[d].indexOf('='),
						f = null
					if (0 <= e) {
						var g = c[d].substring(0, e)
						f = c[d].substring(e + 1)
					} else g = c[d]
					g = decodeURIComponent(g.replace(/\+/g, ' '))
					f = f || ''
					this.add(g, decodeURIComponent(f.replace(/\+/g, ' ')))
				}
			this.a = null
			;(c = this.la.hasOwnProperty(a) && this.la[a]) ||
				(this.la[a] = c = [])
			c.push(b)
			this.jc++
			return this
		}
		q.toString = function () {
			if (this.a) return this.a
			if (!this.la) return ''
			var a = [],
				b
			for (b in this.la)
				for (
					var c = encodeURIComponent(b), d = this.la[b], e = 0;
					e < d.length;
					e++
				) {
					var f = c
					'' !== d[e] && (f += '=' + encodeURIComponent(d[e]))
					a.push(f)
				}
			return (this.a = a.join('&'))
		}
		q.clone = function () {
			var a = new ob()
			a.a = this.a
			if (this.la) {
				var b = {},
					c
				for (c in this.la) b[c] = this.la[c].concat()
				a.la = b
				a.jc = this.jc
			}
			return a
		}
		function L(a, b, c, d) {
			for (var e = [], f = 3; f < arguments.length; ++f)
				e[f - 3] = arguments[f]
			this.severity = a
			this.category = b
			this.code = c
			this.data = e
			this.handled = !1
		}
		L.prototype.toString = function () {
			return 'shaka.util.Error ' + JSON.stringify(this, null, '  ')
		}
		K('shaka.util.Error', L)
		L.Severity = { RECOVERABLE: 1, CRITICAL: 2 }
		L.Category = {
			NETWORK: 1,
			TEXT: 2,
			MEDIA: 3,
			MANIFEST: 4,
			STREAMING: 5,
			DRM: 6,
			PLAYER: 7,
			CAST: 8,
			STORAGE: 9,
			ADS: 10,
		}
		L.Code = {
			UNSUPPORTED_SCHEME: 1e3,
			BAD_HTTP_STATUS: 1001,
			HTTP_ERROR: 1002,
			TIMEOUT: 1003,
			MALFORMED_DATA_URI: 1004,
			REQUEST_FILTER_ERROR: 1006,
			RESPONSE_FILTER_ERROR: 1007,
			MALFORMED_TEST_URI: 1008,
			UNEXPECTED_TEST_REQUEST: 1009,
			ATTEMPTS_EXHAUSTED: 1010,
			INVALID_TEXT_HEADER: 2e3,
			INVALID_TEXT_CUE: 2001,
			UNABLE_TO_DETECT_ENCODING: 2003,
			BAD_ENCODING: 2004,
			INVALID_XML: 2005,
			INVALID_MP4_TTML: 2007,
			INVALID_MP4_VTT: 2008,
			UNABLE_TO_EXTRACT_CUE_START_TIME: 2009,
			INVALID_MP4_CEA: 2010,
			TEXT_COULD_NOT_GUESS_MIME_TYPE: 2011,
			BUFFER_READ_OUT_OF_BOUNDS: 3e3,
			JS_INTEGER_OVERFLOW: 3001,
			EBML_OVERFLOW: 3002,
			EBML_BAD_FLOATING_POINT_SIZE: 3003,
			MP4_SIDX_WRONG_BOX_TYPE: 3004,
			MP4_SIDX_INVALID_TIMESCALE: 3005,
			MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,
			WEBM_CUES_ELEMENT_MISSING: 3007,
			WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,
			WEBM_SEGMENT_ELEMENT_MISSING: 3009,
			WEBM_INFO_ELEMENT_MISSING: 3010,
			WEBM_DURATION_ELEMENT_MISSING: 3011,
			WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,
			WEBM_CUE_TIME_ELEMENT_MISSING: 3013,
			MEDIA_SOURCE_OPERATION_FAILED: 3014,
			MEDIA_SOURCE_OPERATION_THREW: 3015,
			VIDEO_ERROR: 3016,
			QUOTA_EXCEEDED_ERROR: 3017,
			TRANSMUXING_FAILED: 3018,
			UNABLE_TO_GUESS_MANIFEST_TYPE: 4e3,
			DASH_INVALID_XML: 4001,
			DASH_NO_SEGMENT_INFO: 4002,
			DASH_EMPTY_ADAPTATION_SET: 4003,
			DASH_EMPTY_PERIOD: 4004,
			DASH_WEBM_MISSING_INIT: 4005,
			DASH_UNSUPPORTED_CONTAINER: 4006,
			DASH_PSSH_BAD_ENCODING: 4007,
			DASH_NO_COMMON_KEY_SYSTEM: 4008,
			DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,
			DASH_CONFLICTING_KEY_IDS: 4010,
			RESTRICTIONS_CANNOT_BE_MET: 4012,
			HLS_PLAYLIST_HEADER_MISSING: 4015,
			INVALID_HLS_TAG: 4016,
			HLS_INVALID_PLAYLIST_HIERARCHY: 4017,
			DASH_DUPLICATE_REPRESENTATION_ID: 4018,
			HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND: 4020,
			HLS_COULD_NOT_GUESS_MIME_TYPE: 4021,
			HLS_MASTER_PLAYLIST_NOT_PROVIDED: 4022,
			HLS_REQUIRED_ATTRIBUTE_MISSING: 4023,
			HLS_REQUIRED_TAG_MISSING: 4024,
			HLS_COULD_NOT_GUESS_CODECS: 4025,
			HLS_KEYFORMATS_NOT_SUPPORTED: 4026,
			DASH_UNSUPPORTED_XLINK_ACTUATE: 4027,
			DASH_XLINK_DEPTH_LIMIT: 4028,
			HLS_COULD_NOT_PARSE_SEGMENT_START_TIME: 4030,
			CONTENT_UNSUPPORTED_BY_BROWSER: 4032,
			CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM: 4033,
			HLS_AES_128_ENCRYPTION_NOT_SUPPORTED: 4034,
			HLS_INTERNAL_SKIP_STREAM: 4035,
			NO_VARIANTS: 4036,
			PERIOD_FLATTENING_FAILED: 4037,
			INCONSISTENT_DRM_ACROSS_PERIODS: 4038,
			HLS_VARIABLE_NOT_FOUND: 4039,
			STREAMING_ENGINE_STARTUP_INVALID_STATE: 5006,
			NO_RECOGNIZED_KEY_SYSTEMS: 6e3,
			REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,
			FAILED_TO_CREATE_CDM: 6002,
			FAILED_TO_ATTACH_TO_VIDEO: 6003,
			INVALID_SERVER_CERTIFICATE: 6004,
			FAILED_TO_CREATE_SESSION: 6005,
			FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,
			LICENSE_REQUEST_FAILED: 6007,
			LICENSE_RESPONSE_REJECTED: 6008,
			ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,
			NO_LICENSE_SERVER_GIVEN: 6012,
			OFFLINE_SESSION_REMOVED: 6013,
			EXPIRED: 6014,
			SERVER_CERTIFICATE_REQUIRED: 6015,
			INIT_DATA_TRANSFORM_ERROR: 6016,
			LOAD_INTERRUPTED: 7e3,
			OPERATION_ABORTED: 7001,
			NO_VIDEO_ELEMENT: 7002,
			OBJECT_DESTROYED: 7003,
			CAST_API_UNAVAILABLE: 8e3,
			NO_CAST_RECEIVERS: 8001,
			ALREADY_CASTING: 8002,
			UNEXPECTED_CAST_ERROR: 8003,
			CAST_CANCELED_BY_USER: 8004,
			CAST_CONNECTION_TIMED_OUT: 8005,
			CAST_RECEIVER_APP_UNAVAILABLE: 8006,
			STORAGE_NOT_SUPPORTED: 9e3,
			INDEXED_DB_ERROR: 9001,
			DEPRECATED_OPERATION_ABORTED: 9002,
			REQUESTED_ITEM_NOT_FOUND: 9003,
			MALFORMED_OFFLINE_URI: 9004,
			CANNOT_STORE_LIVE_OFFLINE: 9005,
			NO_INIT_DATA_FOR_OFFLINE: 9007,
			LOCAL_PLAYER_INSTANCE_REQUIRED: 9008,
			NEW_KEY_OPERATION_NOT_SUPPORTED: 9011,
			KEY_NOT_FOUND: 9012,
			MISSING_STORAGE_CELL: 9013,
			CS_IMA_SDK_MISSING: 1e4,
			CS_AD_MANAGER_NOT_INITIALIZED: 10001,
			SS_IMA_SDK_MISSING: 10002,
			SS_AD_MANAGER_NOT_INITIALIZED: 10003,
			CURRENT_DAI_REQUEST_NOT_FINISHED: 10004,
		}
		function wb(a) {
			this.b = a
			this.a = null
		}
		wb.prototype.R = function (a) {
			var b = this
			this.stop()
			var c = !0,
				d = null
			this.a = function () {
				window.clearTimeout(d)
				c = !1
			}
			d = window.setTimeout(function () {
				c && b.b()
			}, 1e3 * a)
			return this
		}
		wb.prototype.stop = function () {
			this.a && (this.a(), (this.a = null))
		}
		function M(a) {
			this.b = a
			this.a = null
		}
		M.prototype.Vb = function () {
			this.stop()
			this.b()
			return this
		}
		M.prototype.R = function (a) {
			var b = this
			this.stop()
			this.a = new wb(function () {
				b.b()
			}).R(a)
			return this
		}
		M.prototype.ta = function (a) {
			var b = this
			this.stop()
			this.a = new wb(function () {
				b.a.R(a)
				b.b()
			}).R(a)
			return this
		}
		M.prototype.stop = function () {
			this.a && (this.a.stop(), (this.a = null))
		}
		K('shaka.util.Timer', M)
		M.prototype.stop = M.prototype.stop
		M.prototype.tickEvery = M.prototype.ta
		M.prototype.tickAfter = M.prototype.R
		M.prototype.tickNow = M.prototype.Vb
		function xb(a, b) {
			var c = yb()
			this.j = null == a.maxAttempts ? c.maxAttempts : a.maxAttempts
			this.f = null == a.baseDelay ? c.baseDelay : a.baseDelay
			this.h = null == a.fuzzFactor ? c.fuzzFactor : a.fuzzFactor
			this.g = null == a.backoffFactor ? c.backoffFactor : a.backoffFactor
			this.a = 0
			this.b = this.f
			if ((this.c = void 0 === b ? !1 : b)) this.a = 1
		}
		function zb(a) {
			var b, c
			return J(function (d) {
				if (1 == d.a) {
					if (a.a >= a.j)
						if (a.c) (a.a = 1), (a.b = a.f)
						else throw new L(2, 7, 1010)
					b = a.a
					a.a++
					if (0 == b) return d['return']()
					c = a.b * (1 + (2 * Math.random() - 1) * a.h)
					return u(
						d,
						new Promise(function (e) {
							new M(e).R(c / 1e3)
						}),
						2
					)
				}
				a.b *= a.g
				x(d)
			})
		}
		function yb() {
			return {
				maxAttempts: 2,
				baseDelay: 1e3,
				backoffFactor: 2,
				fuzzFactor: 0.5,
				timeout: 0,
			}
		}
		function Ab() {
			var a,
				b,
				c = new Promise(function (d, e) {
					a = d
					b = e
				})
			c.resolve = a
			c.reject = b
			return c
		}
		Ab.prototype.resolve = function () {}
		Ab.prototype.reject = function () {}
		function Bb(a, b) {
			this.promise = a
			this.c = b
			this.a = !1
		}
		function Cb(a) {
			return new Bb(Promise.reject(a), function () {
				return Promise.resolve()
			})
		}
		function Db() {
			var a = Promise.reject(new L(2, 7, 7001))
			a['catch'](function () {})
			return new Bb(a, function () {
				return Promise.resolve()
			})
		}
		function Eb(a) {
			return new Bb(Promise.resolve(a), function () {
				return Promise.resolve()
			})
		}
		function Fb(a) {
			return new Bb(a, function () {
				return a['catch'](function () {})
			})
		}
		Bb.prototype.abort = function () {
			this.a = !0
			return this.c()
		}
		function Gb(a) {
			return new Bb(
				Promise.all(
					a.map(function (b) {
						return b.promise
					})
				),
				function () {
					return Promise.all(
						a.map(function (b) {
							return b.abort()
						})
					)
				}
			)
		}
		Bb.prototype['finally'] = function (a) {
			this.promise.then(
				function () {
					return a(!0)
				},
				function () {
					return a(!1)
				}
			)
			return this
		}
		Bb.prototype.W = function (a, b) {
			function c(h) {
				return function (k) {
					if (e.a && h) f.reject(g)
					else {
						var l = h ? a : b
						l ? (d = Hb(l, k, f)) : (h ? f.resolve : f.reject)(k)
					}
				}
			}
			function d() {
				f.reject(g)
				return e.abort()
			}
			var e = this,
				f = new Ab(),
				g = new L(2, 7, 7001)
			this.promise.then(c(!0), c(!1))
			return new Bb(f, function () {
				return d()
			})
		}
		function Hb(a, b, c) {
			try {
				var d = a(b)
				if (d && d.promise && d.abort)
					return (
						c.resolve(d.promise),
						function () {
							return d.abort()
						}
					)
				c.resolve(d)
				return function () {
					return Promise.resolve(d).then(
						function () {},
						function () {}
					)
				}
			} catch (e) {
				return (
					c.reject(e),
					function () {
						return Promise.resolve()
					}
				)
			}
		}
		K('shaka.util.AbortableOperation', Bb)
		Bb.prototype.chain = Bb.prototype.W
		Bb.prototype['finally'] = Bb.prototype['finally']
		Bb.all = Gb
		Bb.prototype.abort = Bb.prototype.abort
		Bb.notAbortable = Fb
		Bb.completed = Eb
		Bb.aborted = Db
		Bb.failed = Cb
		function Ib() {}
		function Jb(a, b) {
			if (!a && !b) return !0
			if (!a || !b || a.byteLength != b.byteLength) return !1
			if (Kb(a) == Kb(b) && (a.byteOffset || 0) == (b.byteOffset || 0))
				return !0
			for (
				var c = Lb(a), d = Lb(b), e = r(fb(a.byteLength)), f = e.next();
				!f.done;
				f = e.next()
			)
				if (((f = f.value), c[f] != d[f])) return !1
			return !0
		}
		function Kb(a) {
			return a instanceof ArrayBuffer ? a : a.buffer
		}
		function Mb(a) {
			return a instanceof ArrayBuffer
				? a
				: 0 == a.byteOffset && a.byteLength == a.buffer.byteLength
				? a.buffer
				: new Uint8Array(a).buffer
		}
		function Lb(a, b, c) {
			c = void 0 === c ? Infinity : c
			return Nb(a, void 0 === b ? 0 : b, c, Uint8Array)
		}
		function Ob(a, b, c) {
			c = void 0 === c ? Infinity : c
			return Nb(a, void 0 === b ? 0 : b, c, DataView)
		}
		function Nb(a, b, c, d) {
			var e = (a.byteOffset || 0) + a.byteLength
			b = Math.max(0, Math.min((a.byteOffset || 0) + b, e))
			return new d(Kb(a), b, Math.min(b + Math.max(c, 0), e) - b)
		}
		K('shaka.util.BufferUtils', Ib)
		Ib.toDataView = Ob
		Ib.toUint8 = Lb
		Ib.toArrayBuffer = Mb
		Ib.equal = Jb
		function N(a, b) {
			b = void 0 === b ? {} : b
			for (var c in b)
				Object.defineProperty(this, c, {
					value: b[c],
					writable: !0,
					enumerable: !0,
				})
			this.defaultPrevented = this.cancelable = this.bubbles = !1
			this.timeStamp =
				window.performance && window.performance.now
					? window.performance.now()
					: Date.now()
			this.type = a
			this.isTrusted = !1
			this.target = this.currentTarget = null
			this.a = !1
		}
		N.prototype.preventDefault = function () {
			this.cancelable && (this.defaultPrevented = !0)
		}
		N.prototype.stopImmediatePropagation = function () {
			this.a = !0
		}
		N.prototype.stopPropagation = function () {}
		function Pb() {
			this.a = {}
		}
		Pb.prototype.push = function (a, b) {
			this.a.hasOwnProperty(a) ? this.a[a].push(b) : (this.a[a] = [b])
		}
		Pb.prototype.get = function (a) {
			return (a = this.a[a]) ? a.slice() : null
		}
		Pb.prototype.remove = function (a, b) {
			a in this.a &&
				(this.a[a] = this.a[a].filter(function (c) {
					return c != b
				}))
		}
		function Qb(a, b) {
			for (var c in a.a) b(c, a.a[c])
		}
		function Rb() {
			this.Mc = new Pb()
			this.bc = this
		}
		Rb.prototype.addEventListener = function (a, b) {
			this.Mc.push(a, b)
		}
		Rb.prototype.removeEventListener = function (a, b) {
			this.Mc.remove(a, b)
		}
		Rb.prototype.dispatchEvent = function (a) {
			var b = this.Mc.get(a.type) || []
			b = r(b)
			for (var c = b.next(); !c.done; c = b.next()) {
				c = c.value
				a.target = this.bc
				a.currentTarget = this.bc
				try {
					c.handleEvent ? c.handleEvent(a) : c.call(this, a)
				} catch (d) {}
				if (a.a) break
			}
			return a.defaultPrevented
		}
		function Sb(a) {
			function b(d) {
				switch (typeof d) {
					case 'undefined':
					case 'boolean':
					case 'number':
					case 'string':
					case 'symbol':
					case 'function':
						return d
					default:
						if (
							!d ||
							(d.buffer && d.buffer.constructor == ArrayBuffer)
						)
							return d
						if (c.has(d)) return null
						var e = d.constructor == Array
						if (d.constructor != Object && !e) return null
						c.add(d)
						var f = e ? [] : {},
							g
						for (g in d) f[g] = b(d[g])
						e && (f.length = d.length)
						return f
				}
			}
			var c = new Set()
			return b(a)
		}
		function Tb(a) {
			var b = {},
				c
			for (c in a) b[c] = a[c]
			return b
		}
		function Ub(a, b) {
			return 'number' === typeof a &&
				'number' === typeof b &&
				isNaN(a) &&
				isNaN(b)
				? !0
				: a === b
		}
		function Vb(a, b) {
			var c = a.indexOf(b)
			;-1 < c && a.splice(c, 1)
		}
		function Wb(a, b, c) {
			c || (c = Ub)
			if (a.length != b.length) return !1
			b = b.slice()
			var d = {}
			a = r(a)
			for (var e = a.next(); !e.done; d = { Ac: d.Ac }, e = a.next()) {
				d.Ac = e.value
				e = b.findIndex(
					(function (f) {
						return function (g) {
							return c(f.Ac, g)
						}
					})(d)
				)
				if (-1 == e) return !1
				b[e] = b[b.length - 1]
				b.pop()
			}
			return 0 == b.length
		}
		function Xb(a, b, c) {
			c || (c = Ub)
			if (a.length != b.length) return !1
			for (var d = 0; d < a.length; d++) if (!c(a[d], b[d])) return !1
			return !0
		}
		function Yb() {
			this.a = []
		}
		function Zb(a, b) {
			a.a.push(
				b['finally'](function () {
					Vb(a.a, b)
				})
			)
		}
		Yb.prototype.destroy = function () {
			for (var a = [], b = r(this.a), c = b.next(); !c.done; c = b.next())
				(c = c.value),
					c.promise['catch'](function () {}),
					a.push(c.abort())
			this.a = []
			return Promise.all(a)
		}
		function $b(a) {
			Rb.call(this)
			this.f = !1
			this.g = new Yb()
			this.a = new Set()
			this.b = new Set()
			this.c = a || null
		}
		ra($b, Rb)
		function ac(a, b, c) {
			c = c || bc
			var d = cc[a]
			if (!d || c >= d.priority) cc[a] = { priority: c, Ue: b }
		}
		q = $b.prototype
		q.We = function (a) {
			this.a.add(a)
		}
		q.pf = function (a) {
			this.a['delete'](a)
		}
		q.ne = function () {
			this.a.clear()
		}
		q.Xe = function (a) {
			this.b.add(a)
		}
		q.qf = function (a) {
			this.b['delete'](a)
		}
		q.oe = function () {
			this.b.clear()
		}
		function dc(a, b, c) {
			return {
				uris: a,
				method: 'GET',
				body: null,
				headers: {},
				allowCrossSiteCredentials: !1,
				retryParameters: b,
				licenseRequestType: null,
				sessionId: null,
				streamDataCallback: void 0 === c ? null : c,
			}
		}
		q.destroy = function () {
			this.f = !0
			this.a.clear()
			this.b.clear()
			return this.g.destroy()
		}
		q.request = function (a, b) {
			var c = this,
				d = new ec()
			if (this.f) {
				var e = Promise.reject(new L(2, 7, 7001))
				e['catch'](function () {})
				return new fc(
					e,
					function () {
						return Promise.resolve()
					},
					d
				)
			}
			b.method = b.method || 'GET'
			b.headers = b.headers || {}
			b.retryParameters = b.retryParameters ? Sb(b.retryParameters) : yb()
			b.uris = Sb(b.uris)
			e = gc(this, a, b)
			var f = e.W(function () {
					return hc(
						c,
						a,
						b,
						new xb(b.retryParameters, !1),
						0,
						null,
						d
					)
				}),
				g = f.W(function (n) {
					return ic(c, a, n)
				}),
				h = Date.now(),
				k = 0
			e.promise.then(
				function () {
					k = Date.now() - h
				},
				function () {}
			)
			var l = 0
			f.promise.then(
				function () {
					l = Date.now()
				},
				function () {}
			)
			var m = g.W(
				function (n) {
					var p = Date.now() - l,
						t = n.response
					t.timeMs += k
					t.timeMs += p
					n.Me ||
						!c.c ||
						t.fromCache ||
						a != jc ||
						c.c(t.timeMs, t.data.byteLength)
					return t
				},
				function (n) {
					n && (n.severity = 2)
					throw n
				}
			)
			e = new fc(
				m.promise,
				function () {
					return m.abort()
				},
				d
			)
			Zb(this.g, e)
			return e
		}
		function gc(a, b, c) {
			var d = Eb(void 0),
				e = {}
			a = r(a.a)
			for (var f = a.next(); !f.done; e = { Ec: e.Ec }, f = a.next())
				(e.Ec = f.value),
					(d = d.W(
						(function (g) {
							return function () {
								c.body && (c.body = Mb(c.body))
								return g.Ec(b, c)
							}
						})(e)
					))
			return d.W(void 0, function (g) {
				if (g instanceof L && 7001 == g.code) throw g
				throw new L(2, 1, 1006, g)
			})
		}
		function hc(a, b, c, d, e, f, g) {
			var h = new jb(c.uris[e]),
				k = h.za,
				l = !1
			k ||
				((k = location.protocol),
				(k = k.slice(0, -1)),
				kb(h, k),
				(c.uris[e] = h.toString()))
			k = k.toLowerCase()
			var m = (k = cc[k]) ? k.Ue : null
			if (!m) return Cb(new L(2, 1, 1e3, h))
			var n
			return Fb(zb(d))
				.W(function () {
					if (a.f) return Db()
					n = Date.now()
					return m(c.uris[e], c, b, function (p, t, v) {
						a.c && b == jc && (a.c(p, t), (l = !0), (g.a = v))
					})
				})
				.W(
					function (p) {
						void 0 == p.timeMs && (p.timeMs = Date.now() - n)
						return { response: p, Me: l }
					},
					function (p) {
						if (a.f) return Db()
						if (p instanceof L) {
							if (7001 == p.code) throw p
							if (1010 == p.code) throw f
							if (1 == p.severity) {
								var t = new N('retry', { error: p })
								a.dispatchEvent(t)
								e = (e + 1) % c.uris.length
								return hc(a, b, c, d, e, p, g)
							}
						}
						throw p
					}
				)
		}
		function ic(a, b, c) {
			var d = Eb(void 0),
				e = {}
			a = r(a.b)
			for (var f = a.next(); !f.done; e = { Fc: e.Fc }, f = a.next())
				(e.Fc = f.value),
					(d = d.W(
						(function (g) {
							return function () {
								var h = c.response
								h.data && (h.data = Mb(h.data))
								return g.Fc(b, h)
							}
						})(e)
					))
			return d.W(
				function () {
					return c
				},
				function (g) {
					var h = 2
					if (g instanceof L) {
						if (7001 == g.code) throw g
						h = g.severity
					}
					throw new L(h, 1, 1007, g)
				}
			)
		}
		K('shaka.net.NetworkingEngine', $b)
		$b.prototype.request = $b.prototype.request
		$b.prototype.destroy = $b.prototype.destroy
		$b.makeRequest = dc
		$b.defaultRetryParameters = function () {
			return yb()
		}
		$b.prototype.clearAllResponseFilters = $b.prototype.oe
		$b.prototype.unregisterResponseFilter = $b.prototype.qf
		$b.prototype.registerResponseFilter = $b.prototype.Xe
		$b.prototype.clearAllRequestFilters = $b.prototype.ne
		$b.prototype.unregisterRequestFilter = $b.prototype.pf
		$b.prototype.registerRequestFilter = $b.prototype.We
		$b.unregisterScheme = function (a) {
			delete cc[a]
		}
		$b.registerScheme = ac
		function ec() {
			this.a = 0
		}
		$b.NumBytesRemainingClass = ec
		function fc(a, b, c) {
			Bb.call(this, a, b)
			this.b = c
		}
		ra(fc, Bb)
		$b.PendingRequest = fc
		var jc = 1
		$b.RequestType = {
			MANIFEST: 0,
			SEGMENT: jc,
			LICENSE: 2,
			APP: 3,
			TIMING: 4,
		}
		var bc = 3
		$b.PluginPriority = { FALLBACK: 1, PREFERRED: 2, APPLICATION: bc }
		var cc = {}
		function kc(a) {
			this.a = !1
			this.b = new Ab()
			this.c = a
		}
		kc.prototype.destroy = function () {
			var a = this
			if (this.a) return this.b
			this.a = !0
			return this.c().then(
				function () {
					a.b.resolve()
				},
				function () {
					a.b.resolve()
				}
			)
		}
		function lc(a, b) {
			if (a.a) {
				if (b instanceof L && 7003 == b.code) throw b
				throw new L(2, 7, 7003, b)
			}
		}
		function mc() {
			this.a = new Pb()
		}
		q = mc.prototype
		q.release = function () {
			this.cb()
			this.a = null
		}
		q.m = function (a, b, c, d) {
			this.a && ((a = new nc(a, b, c, d)), this.a.push(b, a))
		}
		q.ma = function (a, b, c, d) {
			function e(g) {
				f.ua(a, b, e)
				c(g)
			}
			var f = this
			this.m(a, b, e, d)
		}
		q.ua = function (a, b, c) {
			if (this.a) {
				var d = this.a.get(b) || []
				d = r(d)
				for (var e = d.next(); !e.done; e = d.next())
					(e = e.value),
						e.target != a ||
							(c != e.listener && c) ||
							(e.ua(), this.a.remove(b, e))
			}
		}
		q.cb = function () {
			if (this.a) {
				var a = this.a,
					b = [],
					c
				for (c in a.a) b.push.apply(b, ja(a.a[c]))
				a = r(b)
				for (b = a.next(); !b.done; b = a.next()) b.value.ua()
				this.a.a = {}
			}
		}
		K('shaka.util.EventManager', mc)
		mc.prototype.removeAll = mc.prototype.cb
		mc.prototype.unlisten = mc.prototype.ua
		mc.prototype.listenOnce = mc.prototype.ma
		mc.prototype.listen = mc.prototype.m
		mc.prototype.release = mc.prototype.release
		function nc(a, b, c, d) {
			this.target = a
			this.type = b
			this.listener = c
			this.a = pc(a, d)
			this.target.addEventListener(b, c, this.a)
		}
		nc.prototype.ua = function () {
			this.target.removeEventListener(this.type, this.listener, this.a)
			this.listener = this.target = null
			this.a = !1
		}
		function pc(a, b) {
			if (void 0 == b) return !1
			if ('boolean' == typeof b) return b
			var c = new Set(['passive', 'capture'])
			Object.keys(b).filter(function (d) {
				return !c.has(d)
			})
			return qc(a) ? b : b.capture || !1
		}
		function qc(a) {
			var b = rc
			if (void 0 == b) {
				b = !1
				try {
					var c = {},
						d = {
							get: function () {
								b = !0
								return !1
							},
						}
					Object.defineProperty(c, 'passive', d)
					Object.defineProperty(c, 'capture', d)
					d = function () {}
					a.addEventListener('test', d, c)
					a.removeEventListener('test', d, c)
				} catch (e) {
					b = !1
				}
				rc = b
			}
			return b || !1
		}
		var rc = void 0
		function sc(a) {
			this.b = a
			this.a = void 0
		}
		sc.prototype.value = function () {
			void 0 == this.a && (this.a = this.b())
			return this.a
		}
		function tc() {}
		function uc(a) {
			if (!a) return ''
			a = Lb(a)
			239 == a[0] && 187 == a[1] && 191 == a[2] && (a = a.subarray(3))
			a = new TextDecoder().decode(a)
			a.includes('\ufffd') &&
				Sa(
					'Decoded string contains an "unknown character" codepoint.  That probably means the UTF8 encoding was incorrect!'
				)
			return a
		}
		function vc(a, b, c) {
			if (!a) return ''
			if (!c && 0 != a.byteLength % 2) throw new L(2, 2, 2004)
			var d = Math.floor(a.byteLength / 2)
			c = new Uint16Array(d)
			a = Ob(a)
			d = r(fb(d))
			for (var e = d.next(); !e.done; e = d.next())
				(e = e.value), (c[e] = a.getUint16(2 * e, b))
			return wc.value()(c)
		}
		function xc(a) {
			function b(d) {
				return c.byteLength <= d || (32 <= c[d] && 126 >= c[d])
			}
			if (!a) return ''
			var c = Lb(a)
			if (239 == c[0] && 187 == c[1] && 191 == c[2]) return uc(c)
			if (254 == c[0] && 255 == c[1]) return vc(c.subarray(2), !1)
			if (255 == c[0] && 254 == c[1]) return vc(c.subarray(2), !0)
			if (0 == c[0] && 0 == c[2]) return vc(a, !1)
			if (0 == c[1] && 0 == c[3]) return vc(a, !0)
			if (b(0) && b(1) && b(2) && b(3)) return uc(a)
			throw new L(2, 2, 2003)
		}
		function yc(a) {
			var b = new TextEncoder()
			return Mb(b.encode(a))
		}
		function zc(a, b) {
			for (
				var c = new ArrayBuffer(2 * a.length),
					d = new DataView(c),
					e = r(hb(a)),
					f = e.next();
				!f.done;
				f = e.next()
			)
				(f = f.value), d.setUint16(2 * f.aa, f.item.charCodeAt(0), b)
			return c
		}
		K('shaka.util.StringUtils', tc)
		tc.resetFromCharCode = function () {
			wc.a = void 0
		}
		tc.toUTF16 = zc
		tc.toUTF8 = yc
		tc.fromBytesAutoDetect = xc
		tc.fromUTF16 = vc
		tc.fromUTF8 = uc
		var wc = new sc(function () {
			function a(c) {
				try {
					var d = new Uint8Array(c)
					return 0 < String.fromCharCode.apply(null, d).length
				} catch (e) {
					return !1
				}
			}
			for (var b = { Ma: 65536 }; 0 < b.Ma; b = { Ma: b.Ma }, b.Ma /= 2)
				if (a(b.Ma))
					return (function (c) {
						return function (d) {
							for (var e = '', f = 0; f < d.length; f += c.Ma)
								e += String.fromCharCode.apply(
									null,
									d.subarray(f, f + c.Ma)
								)
							return e
						}
					})(b)
			return null
		})
		function Ac() {}
		function Bc(a) {
			a = xc(a)
			return new jb(a).ya
		}
		function Cc(a, b, c) {
			function d(h) {
				Ob(f).setUint32(g, h.byteLength, !0)
				g += 4
				f.set(Lb(h), g)
				g += h.byteLength
			}
			if (!c || !c.byteLength) throw new L(2, 6, 6015)
			var e
			'string' == typeof b ? (e = zc(b, !0)) : (e = b)
			a = xc(a)
			a = zc(a, !0)
			var f = new Uint8Array(
					12 + a.byteLength + e.byteLength + c.byteLength
				),
				g = 0
			d(a)
			d(e)
			d(c)
			return f
		}
		K('shaka.util.FairPlayUtils', Ac)
		Ac.initDataTransform = Cc
		Ac.defaultGetContentId = Bc
		function Dc(a, b) {
			this.a = a
			this.b = b
		}
		Dc.prototype.toString = function () {
			return 'v' + this.a + '.' + this.b
		}
		function Ec(a, b) {
			var c = new Dc(4, 0),
				d = Fc,
				e = d.a,
				f = c.b - e.b
			;(0 < (c.a - e.a || f) ? d.c : d.b)(d.a, c, a, b)
		}
		function Gc(a, b, c, d) {
			Ta(
				[
					c,
					'has been deprecated and will be removed in',
					b,
					'. We are currently at version',
					a,
					'. Additional information:',
					d,
				].join(' ')
			)
		}
		function Hc(a, b, c, d) {
			Sa(
				[
					c,
					'has been deprecated and has been removed in',
					b,
					'. We are now at version',
					a,
					'. Additional information:',
					d,
				].join('')
			)
		}
		var Fc = null
		function Ic(a, b) {
			return a.concat(b)
		}
		function Jc() {}
		function Kc(a) {
			return null != a
		}
		function Lc(a) {
			var b = Object.create(a.prototype || Object.prototype)
			a = a.call(b)
			a ||
				(Ec(
					'Factories requiring new',
					'Factories should be plain functions'
				),
				(a = b))
			return a
		}
		function Mc(a, b) {
			if (0 == b.length) return a
			var c = b.map(function (d) {
				return new jb(d)
			})
			return a
				.map(function (d) {
					return new jb(d)
				})
				.map(function (d) {
					return c.map(function (e) {
						return d.resolve(e)
					})
				})
				.reduce(Ic, [])
				.map(function (d) {
					return d.toString()
				})
		}
		function Nc(a, b) {
			return {
				keySystem: a,
				licenseServerUri: '',
				distinctiveIdentifierRequired: !1,
				persistentStateRequired: !1,
				audioRobustness: '',
				videoRobustness: '',
				serverCertificate: null,
				initData: b || [],
				keyIds: new Set(),
			}
		}
		var Oc = {
			Ga: 'video',
			kb: 'audio',
			da: 'text',
			Bf: 'image',
			tf: 'application',
		}
		function Pc(a) {
			for (
				var b = new Map(), c = r(Object.keys(a)), d = c.next();
				!d.done;
				d = c.next()
			)
				(d = d.value), b.set(d, a[d])
			return b
		}
		function Qc(a) {
			var b = {}
			a.forEach(function (c, d) {
				b[d] = c
			})
			return b
		}
		function Rc(a, b) {
			if (a || b) {
				if ((a && !b) || (b && !a)) return !1
			} else return !0
			if (a.size != b.size) return !1
			for (var c = r(a), d = c.next(); !d.done; d = c.next()) {
				var e = r(d.value)
				d = e.next().value
				e = e.next().value
				if (!b.has(d)) return !1
				d = b.get(d)
				if (d != e || void 0 == d) return !1
			}
			return !0
		}
		function Sc(a, b) {
			var c = a
			b && (c += '; codecs="' + b + '"')
			return c
		}
		function Tc(a) {
			var b = [a.mimeType]
			Uc.forEach(function (c, d) {
				var e = a[d]
				e && b.push(c + '="' + e + '"')
			})
			return b.join(';')
		}
		function Vc(a) {
			a = a.split('.')
			var b = a[0]
			a.pop()
			return [b, a.join('.')]
		}
		var Uc = new Map()
			.set('codecs', 'codecs')
			.set('frameRate', 'framerate')
			.set('bandwidth', 'bitrate')
			.set('width', 'width')
			.set('height', 'height')
			.set('channelsCount', 'channels')
		function Wc() {
			return window.MediaSource && MediaSource.isTypeSupported ? !0 : !1
		}
		function Xc(a) {
			return '' != Yc().canPlayType(a)
		}
		function Zc() {
			return navigator.userAgent.match(/Edge?\//) ? !0 : !1
		}
		function $c() {
			return (
				!!navigator.vendor &&
				navigator.vendor.includes('Apple') &&
				!ad('Tizen')
			)
		}
		function bd() {
			if (!$c()) return null
			var a = navigator.userAgent.match(/Version\/(\d+)/)
			return a
				? parseInt(a[1], 10)
				: (a = navigator.userAgent.match(/OS (\d+)(?:_\d+)?/))
				? parseInt(a[1], 10)
				: null
		}
		function ad(a) {
			return (navigator.userAgent || '').includes(a)
		}
		function Yc() {
			if (cd) return cd
			dd ||
				(dd = new M(function () {
					cd = null
				}))
			;(cd =
				document.getElementsByTagName('video')[0] ||
				document.getElementsByTagName('audio')[0]) ||
				(cd = document.createElement('video'))
			dd.R(1)
			return cd
		}
		var dd = null,
			cd = null
		function ed() {}
		function fd(a) {
			a = Lb(a)
			a = wc.value()(a)
			return btoa(a)
		}
		function gd(a, b) {
			b = void 0 == b ? !0 : b
			var c = fd(a).replace(/\+/g, '-').replace(/\//g, '_')
			return b ? c : c.replace(/[=]*$/, '')
		}
		function hd(a) {
			var b = window.atob(a.replace(/-/g, '+').replace(/_/g, '/'))
			a = new Uint8Array(b.length)
			b = r(hb(b))
			for (var c = b.next(); !c.done; c = b.next())
				(c = c.value), (a[c.aa] = c.item.charCodeAt(0))
			return a
		}
		function id(a) {
			var b = a.length / 2,
				c = new Uint8Array(b)
			b = r(fb(b))
			for (var d = b.next(); !d.done; d = b.next())
				(d = d.value), (c[d] = window.parseInt(a.substr(2 * d, 2), 16))
			return c
		}
		function jd(a) {
			var b = Lb(a)
			a = ''
			b = r(b)
			for (var c = b.next(); !c.done; c = b.next())
				(c = c.value),
					(c = c.toString(16)),
					1 == c.length && (c = '0' + c),
					(a += c)
			return a
		}
		function kd(a) {
			for (var b = [], c = 0; c < arguments.length; ++c)
				b[c] = arguments[c]
			var d = 0,
				e = r(b)
			for (c = e.next(); !c.done; c = e.next()) d += c.value.byteLength
			d = new Uint8Array(d)
			e = 0
			b = r(b)
			for (c = b.next(); !c.done; c = b.next())
				(c = c.value), d.set(Lb(c), e), (e += c.byteLength)
			return d
		}
		K('shaka.util.Uint8ArrayUtils', ed)
		ed.concat = kd
		ed.toHex = jd
		ed.fromHex = id
		ed.fromBase64 = hd
		ed.toBase64 = gd
		ed.toStandardBase64 = fd
		ed.equal = function (a, b) {
			Ec(
				'shaka.util.Uint8ArrayUtils.equal',
				'Please use shaka.util.BufferUtils.equal instead.'
			)
			return Jb(a, b)
		}
		function ld(a, b) {
			var c = this
			b = void 0 === b ? 1 : b
			this.v = a
			this.l = new Set()
			this.a = this.h = null
			this.L = !1
			this.D = 0
			this.c = null
			this.b = new mc()
			this.f = new Map()
			this.u = []
			this.j = new Ab()
			this.i = null
			this.g = function (d) {
				c.j.reject(d)
				a.onError(d)
			}
			this.ha = new Map()
			this.S = new Map()
			this.J = new M(function () {
				return md(c)
			})
			this.w = !1
			this.B = []
			this.I = !1
			this.X = new M(function () {
				nd(c)
			}).ta(b)
			this.j['catch'](function () {})
			this.C = new kc(function () {
				return od(c)
			})
		}
		ld.prototype.destroy = function () {
			return this.C.destroy()
		}
		function od(a) {
			return J(function (b) {
				switch (b.a) {
					case 1:
						return (
							a.b.release(),
							(a.b = null),
							a.j.reject(),
							a.X.stop(),
							(a.X = null),
							a.J.stop(),
							(a.J = null),
							u(b, pd(a), 2)
						)
					case 2:
						if (!a.a) {
							b.o(3)
							break
						}
						z(b, 4)
						return u(b, a.a.setMediaKeys(null), 6)
					case 6:
						wa(b, 5)
						break
					case 4:
						C(b)
					case 5:
						a.a = null
					case 3:
						;(a.c = null),
							a.l.clear(),
							(a.h = null),
							(a.u = []),
							(a.i = null),
							(a.g = function () {}),
							(a.v = null),
							x(b)
				}
			})
		}
		ld.prototype.configure = function (a) {
			this.i = a
		}
		function qd(a, b, c) {
			a.u = []
			a.w = c
			return rd(a, b)
		}
		function sd(a, b, c) {
			a.u = c
			a.w = 0 < c.length
			return rd(a, b)
		}
		function td(a, b, c, d, e, f) {
			var g = new Map()
			e = {
				audioCapabilities: e,
				videoCapabilities: f,
				distinctiveIdentifier: 'optional',
				persistentState: 'required',
				sessionTypes: ['persistent-license'],
				label: b,
			}
			e.drmInfos = [
				{
					keySystem: b,
					licenseServerUri: c,
					distinctiveIdentifierRequired: !1,
					persistentStateRequired: !0,
					audioRobustness: '',
					videoRobustness: '',
					serverCertificate: d,
					initData: null,
					keyIds: null,
				},
			]
			g.set(b, e)
			return ud(a, g)
		}
		function rd(a, b) {
			var c = vd(a)
			if (c)
				for (var d = r(b), e = d.next(); !e.done; e = d.next())
					(e = e.value),
						e.video &&
							e.video.encrypted &&
							(e.video.drmInfos = [c]),
						e.audio && e.audio.encrypted && (e.audio.drmInfos = [c])
			c = b.some(function (g) {
				return (g.video && g.video.drmInfos.length) ||
					(g.audio && g.audio.drmInfos.length)
					? !0
					: !1
			})
			c || ((d = Pc(a.i.servers)), wd(b, d))
			d = r(b)
			for (e = d.next(); !e.done; e = d.next()) {
				e = e.value
				e = r(
					(e.video ? e.video.drmInfos : []).concat(
						e.audio ? e.audio.drmInfos : []
					)
				)
				for (var f = e.next(); !f.done; f = e.next())
					xd(f.value, Pc(a.i.servers), Pc(a.i.advanced || {}))
			}
			d = yd(a, b)
			if (!d.size) return (a.L = !0), Promise.resolve()
			d = ud(a, d)
			return c ? d : d['catch'](function () {})
		}
		ld.prototype.Fb = function (a) {
			var b = this,
				c,
				d
			return J(function (e) {
				if (1 == e.a) {
					if (!b.h)
						return (
							b.b.ma(a, 'encrypted', function () {
								b.g(new L(2, 6, 6010))
							}),
							e['return']()
						)
					b.a = a
					b.b.ma(b.a, 'play', function () {
						for (
							var f = r(b.B), g = f.next();
							!g.done;
							g = f.next()
						)
							zd(b, g.value)
						b.I = !0
						b.B = []
					})
					'webkitCurrentPlaybackTargetIsWireless' in b.a &&
						b.b.m(
							b.a,
							'webkitcurrentplaybacktargetiswirelesschanged',
							function () {
								return pd(b)
							}
						)
					c = b.a.setMediaKeys(b.h)
					c = c['catch'](function (f) {
						return Promise.reject(new L(2, 6, 6003, f.message))
					})
					return u(e, c, 2)
				}
				lc(b.C)
				Bd(b)
				b.c.initData.length ||
					b.u.length ||
					((d = function (f) {
						return Cd(b, f.initDataType, Lb(f.initData))
					}),
					b.b.m(b.a, 'encrypted', d))
				x(e)
			})
		}
		function Dd(a) {
			var b
			return J(function (c) {
				if (1 == c.a) {
					if (
						!(
							a.h &&
							a.c &&
							a.c.serverCertificate &&
							a.c.serverCertificate.length
						)
					)
						return c.o(0)
					z(c, 3)
					return u(
						c,
						a.h.setServerCertificate(a.c.serverCertificate),
						5
					)
				}
				if (3 != c.a) return wa(c, 0)
				b = C(c)
				throw new L(2, 6, 6004, b.message)
			})
		}
		function Ed(a, b) {
			var c, d, e
			return J(function (f) {
				if (1 == f.a) return u(f, Fd(a, b), 2)
				c = f.b
				if (!c) return f['return']()
				d = []
				if ((e = a.f.get(c))) (e.Ea = new Ab()), d.push(e.Ea)
				d.push(c.remove())
				return u(f, Promise.all(d), 0)
			})
		}
		function Bd(a) {
			for (
				var b = (a.c ? a.c.initData : []) || [], c = r(b), d = c.next();
				!d.done;
				d = c.next()
			)
				(d = d.value), Cd(a, d.initDataType, d.initData)
			c = r(a.u)
			for (d = c.next(); !d.done; d = c.next()) Fd(a, d.value)
			b.length || a.u.length || a.j.resolve()
			return a.j
		}
		function Cd(a, b, c) {
			var d = a.f.values()
			d = r(d)
			for (var e = d.next(); !e.done; e = d.next())
				if (Jb(c, e.value.initData) && !ad('Tizen 2')) return
			Gd(a, b, c)
		}
		function Hd(a) {
			return a ? a.keySystem : ''
		}
		function Id(a) {
			a = a.f.keys()
			a = cb(a, function (b) {
				return b.sessionId
			})
			return Array.from(a)
		}
		ld.prototype.Jb = function () {
			var a = Infinity,
				b = this.f.keys()
			b = r(b)
			for (var c = b.next(); !c.done; c = b.next())
				(c = c.value),
					isNaN(c.expiration) || (a = Math.min(a, c.expiration))
			return a
		}
		function yd(a, b) {
			for (
				var c = new Set(), d = r(b), e = d.next();
				!e.done;
				e = d.next()
			) {
				e = e.value
				var f = r(
					(e.video ? e.video.drmInfos : []).concat(
						e.audio ? e.audio.drmInfos : []
					)
				)
				for (e = f.next(); !e.done; e = f.next()) c.add(e.value)
			}
			d = r(c)
			for (e = d.next(); !e.done; e = d.next())
				xd(e.value, Pc(a.i.servers), Pc(a.i.advanced || {}))
			f = a.w ? 'required' : 'optional'
			var g = a.w ? ['persistent-license'] : ['temporary']
			d = new Map()
			c = r(c)
			for (e = c.next(); !e.done; e = c.next())
				(e = e.value),
					d.set(e.keySystem, {
						audioCapabilities: [],
						videoCapabilities: [],
						distinctiveIdentifier: 'optional',
						persistentState: f,
						sessionTypes: g,
						label: e.keySystem,
						drmInfos: [],
					})
			c = r(b)
			for (e = c.next(); !e.done; e = c.next())
				for (
					e = e.value, f = r([e.audio, e.video]), e = f.next();
					!e.done;
					e = f.next()
				)
					if ((g = e.value)) {
						var h = Sc(g.mimeType, g.codecs),
							k = r(g.drmInfos)
						for (e = k.next(); !e.done; e = k.next()) {
							var l = e.value
							e = d.get(l.keySystem)
							e.drmInfos.push(l)
							l.distinctiveIdentifierRequired &&
								(e.distinctiveIdentifier = 'required')
							l.persistentStateRequired &&
								(e.persistentState = 'required')
							l = {
								robustness:
									('audio' == g.type
										? l.audioRobustness
										: l.videoRobustness) || '',
								contentType: h,
							}
							'audio' == g.type
								? e.audioCapabilities.push(l)
								: e.videoCapabilities.push(l)
						}
					}
			return d
		}
		function ud(a, b) {
			var c, d, e, f, g, h, k, l, m, n, p, t, v, w, y, A, B, E, D, F, I, G
			return J(function (H) {
				switch (H.a) {
					case 1:
						if (1 == b.size && b.has('')) throw new L(2, 6, 6e3)
						c = r(b.values())
						for (d = c.next(); !d.done; d = c.next())
							(e = d.value),
								0 == e.audioCapabilities.length &&
									delete e.audioCapabilities,
								0 == e.videoCapabilities.length &&
									delete e.videoCapabilities
						g = r([!0, !1])
						h = g.next()
					case 2:
						if (h.done) {
							H.o(4)
							break
						}
						k = h.value
						l = r(b.keys())
						m = l.next()
					case 5:
						if (m.done) {
							H.o(7)
							break
						}
						n = m.value
						p = b.get(n)
						t = p.drmInfos.some(function (P) {
							return !!P.licenseServerUri
						})
						if (t != k) {
							H.o(6)
							break
						}
						z(H, 8)
						return u(
							H,
							navigator.requestMediaKeySystemAccess(n, [p]),
							10
						)
					case 10:
						f = H.b
						H.o(7)
						break
					case 8:
						C(H)
					case 9:
						lc(a.C)
					case 6:
						m = l.next()
						H.o(5)
						break
					case 7:
						if (f) {
							H.o(4)
							break
						}
						h = g.next()
						H.o(2)
						break
					case 4:
						if (!f) throw new L(2, 6, 6001)
						lc(a.C)
						z(H, 11)
						a.l.clear()
						v = f.getConfiguration()
						w = v.audioCapabilities || []
						y = v.videoCapabilities || []
						A = r(w)
						for (B = A.next(); !B.done; B = A.next())
							(E = B.value), a.l.add(E.contentType.toLowerCase())
						D = r(y)
						for (B = D.next(); !B.done; B = D.next())
							(F = B.value), a.l.add(F.contentType.toLowerCase())
						a.c = Jd(f.keySystem, b.get(f.keySystem))
						if (!a.c.licenseServerUri)
							throw new L(2, 6, 6012, a.c.keySystem)
						return u(H, f.createMediaKeys(), 13)
					case 13:
						return (
							(I = H.b),
							lc(a.C),
							(a.h = I),
							(a.L = !0),
							u(H, Dd(a), 14)
						)
					case 14:
						lc(a.C)
						wa(H, 0)
						break
					case 11:
						G = C(H)
						lc(a.C, G)
						a.c = null
						a.l.clear()
						if (G instanceof L) throw G
						throw new L(2, 6, 6002, G.message)
				}
			})
		}
		function vd(a) {
			a = Pc(a.i.clearKeys)
			if (0 == a.size) return null
			var b = [],
				c = []
			a.forEach(function (e, f) {
				var g = id(f),
					h = id(e)
				g = { kty: 'oct', kid: gd(g, !1), k: gd(h, !1) }
				b.push(g)
				c.push(g.kid)
			})
			a = JSON.stringify({ keys: b })
			var d = JSON.stringify({ kids: c })
			d = [{ initData: Lb(yc(d)), initDataType: 'keyids' }]
			return {
				keySystem: 'org.w3.clearkey',
				licenseServerUri:
					'data:application/json;base64,' + window.btoa(a),
				distinctiveIdentifierRequired: !1,
				persistentStateRequired: !1,
				audioRobustness: '',
				videoRobustness: '',
				serverCertificate: null,
				initData: d,
				keyIds: new Set(c),
			}
		}
		function Fd(a, b) {
			var c, d, e, f, g
			return J(function (h) {
				switch (h.a) {
					case 1:
						try {
							c = a.h.createSession('persistent-license')
						} catch (k) {
							return (
								(d = new L(2, 6, 6005, k.message)),
								a.g(d),
								h['return'](Promise.reject(d))
							)
						}
						a.b.m(c, 'message', function (k) {
							a.a &&
							a.i.delayLicenseRequestUntilPlayed &&
							a.a.paused &&
							!a.I
								? a.B.push(k)
								: zd(a, k)
						})
						a.b.m(c, 'keystatuseschange', function (k) {
							return Kd(a, k)
						})
						e = {
							initData: null,
							loaded: !1,
							gd: Infinity,
							Ea: null,
						}
						a.f.set(c, e)
						z(h, 2)
						return u(h, c.load(b), 4)
					case 4:
						f = h.b
						lc(a.C)
						if (!f)
							return (
								a.f['delete'](c),
								a.g(new L(2, 6, 6013)),
								h['return'](Promise.resolve())
							)
						e.loaded = !0
						Ld(a) && a.j.resolve()
						return h['return'](c)
					case 2:
						;(g = C(h)),
							lc(a.C, g),
							a.f['delete'](c),
							a.g(new L(2, 6, 6005, g.message))
					case 3:
						return h['return'](Promise.resolve())
				}
			})
		}
		function Gd(a, b, c) {
			try {
				var d = a.w
					? a.h.createSession('persistent-license')
					: a.h.createSession()
			} catch (e) {
				a.g(new L(2, 6, 6005, e.message))
				return
			}
			a.b.m(d, 'message', function (e) {
				a.a && a.i.delayLicenseRequestUntilPlayed && a.a.paused && !a.I
					? a.B.push(e)
					: zd(a, e)
			})
			a.b.m(d, 'keystatuseschange', function (e) {
				return Kd(a, e)
			})
			a.f.set(d, { initData: c, loaded: !1, gd: Infinity, Ea: null })
			try {
				c = a.i.initDataTransform(c, b, a.c)
			} catch (e) {
				b = e
				e instanceof L || (b = new L(2, 6, 6016, e))
				a.g(b)
				return
			}
			a.i.logLicenseExchange && gd(c)
			d.generateRequest(b, c)['catch'](function (e) {
				if (!a.C.a) {
					a.f['delete'](d)
					var f = e.errorCode
					if (f && f.systemCode) {
						var g = f.systemCode
						0 > g && (g += Math.pow(2, 32))
						g = '0x' + g.toString(16)
					}
					a.g(new L(2, 6, 6006, e.message, e, g))
				}
			})
		}
		function Md(a, b, c) {
			'skd' == b &&
				((b = c.serverCertificate), (c = Bc(a)), (a = Cc(a, c, b)))
			return a
		}
		function zd(a, b) {
			var c, d, e, f, g, h, k, l, m, n, p, t, v, w
			J(function (y) {
				switch (y.a) {
					case 1:
						return (
							(c = b.target),
							a.i.logLicenseExchange && gd(b.message),
							(d = a.f.get(c)),
							(e = a.c.licenseServerUri),
							(f = a.i.advanced[a.c.keySystem]),
							'individualization-request' == b.messageType &&
								f &&
								f.individualizationServer &&
								(e = f.individualizationServer),
							(g = dc([e], a.i.retryParameters)),
							(g.body = b.message),
							(g.method = 'POST'),
							(g.licenseRequestType = b.messageType),
							(g.sessionId = c.sessionId),
							('com.microsoft.playready' != a.c.keySystem &&
								'com.chromecast.playready' != a.c.keySystem) ||
								Nd(g),
							(h = Date.now()),
							z(y, 2),
							(l = a.v.tb.request(2, g)),
							u(y, l.promise, 4)
						)
					case 4:
						k = y.b
						wa(y, 3)
						break
					case 2:
						return (
							(m = C(y)),
							(n = new L(2, 6, 6007, m)),
							a.g(n),
							d && d.Ea && d.Ea.reject(n),
							y['return']()
						)
					case 3:
						if (a.C.a) return y['return']()
						a.D += (Date.now() - h) / 1e3
						a.i.logLicenseExchange && gd(k.data)
						z(y, 5)
						return u(y, c.update(k.data), 7)
					case 7:
						wa(y, 6)
						break
					case 5:
						return (
							(p = C(y)),
							(t = new L(2, 6, 6008, p.message)),
							a.g(t),
							d && d.Ea && d.Ea.reject(t),
							y['return']()
						)
					case 6:
						;(v = new N('drmsessionupdate')),
							a.v.onEvent(v),
							d &&
								(d.Ea && d.Ea.resolve(),
								(w = new M(function () {
									d.loaded = !0
									Ld(a) && a.j.resolve()
								})),
								w.R(Od)),
							x(y)
				}
			})
		}
		function Nd(a) {
			var b = vc(a.body, !0, !0)
			if (b.includes('PlayReadyKeyMessage')) {
				b = new DOMParser().parseFromString(b, 'application/xml')
				for (
					var c = r(b.getElementsByTagName('HttpHeader')),
						d = c.next();
					!d.done;
					d = c.next()
				)
					(d = d.value),
						(a.headers[
							d.getElementsByTagName('name')[0].textContent
						] = d.getElementsByTagName('value')[0].textContent)
				a.body = hd(b.getElementsByTagName('Challenge')[0].textContent)
			} else a.headers['Content-Type'] = 'text/xml; charset=utf-8'
		}
		function Kd(a, b) {
			var c = b.target,
				d = a.f.get(c),
				e = !1
			c.keyStatuses.forEach(function (g, h) {
				if ('string' == typeof h) {
					var k = h
					h = g
					g = k
				}
				if (
					'com.microsoft.playready' == a.c.keySystem &&
					16 == h.byteLength &&
					(ad('Trident/') || Zc())
				) {
					k = Ob(h)
					var l = k.getUint32(0, !0),
						m = k.getUint16(4, !0),
						n = k.getUint16(6, !0)
					k.setUint32(0, l, !1)
					k.setUint16(4, m, !1)
					k.setUint16(6, n, !1)
				}
				'com.microsoft.playready' == a.c.keySystem &&
					'status-pending' == g &&
					(g = 'usable')
				'status-pending' != g && (d.loaded = !0)
				'expired' == g && (e = !0)
				k = jd(h)
				a.ha.set(k, g)
			})
			var f = c.expiration - Date.now()
			;(0 > f || (e && 1e3 > f)) &&
				d &&
				!d.Ea &&
				(a.f['delete'](c), c.close()['catch'](function () {}))
			Ld(a) && (a.j.resolve(), a.J.R(Pd))
		}
		function md(a) {
			var b = a.ha,
				c = a.S
			c.clear()
			b.forEach(function (d, e) {
				return c.set(e, d)
			})
			b = Array.from(c.values())
			b.length &&
				b.every(function (d) {
					return 'expired' == d
				}) &&
				a.g(new L(2, 6, 6014))
			a.v.oc(Qc(c))
		}
		function Qd() {
			var a, b, c, d, e, f, g, h
			return J(function (k) {
				return 1 == k.a
					? ((a = 'org.w3.clearkey com.widevine.alpha com.microsoft.playready com.apple.fps.3_0 com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime'.split(
							' '
					  )),
					  (b = [
							{ contentType: 'video/mp4; codecs="avc1.42E01E"' },
							{ contentType: 'video/webm; codecs="vp8"' },
					  ]),
					  (c = { videoCapabilities: b }),
					  (d = {
							videoCapabilities: b,
							persistentState: 'required',
							sessionTypes: ['persistent-license'],
					  }),
					  (e = [d, c]),
					  (f = new Map()),
					  (g = function (l) {
							var m, n, p
							return J(function (t) {
								switch (t.a) {
									case 1:
										return (
											z(t, 2),
											u(
												t,
												navigator.requestMediaKeySystemAccess(
													l,
													e
												),
												4
											)
										)
									case 4:
										return (
											(m = t.b),
											(p = (n = m.getConfiguration()
												.sessionTypes)
												? n.includes(
														'persistent-license'
												  )
												: !1),
											ad('Tizen 3') && (p = !1),
											f.set(l, { persistentState: p }),
											u(t, m.createMediaKeys(), 5)
										)
									case 5:
										wa(t, 0)
										break
									case 2:
										C(t), f.set(l, null), x(t)
								}
							})
					  }),
					  (h = a.map(function (l) {
							return g(l)
					  })),
					  u(k, Promise.all(h), 2))
					: k['return'](Qc(f))
			})
		}
		function Rd(a) {
			var b
			return J(function (c) {
				if (1 == c.a)
					return (
						(b = new Promise(function (d, e) {
							new M(e).R(Sd)
						})),
						z(c, 2),
						u(
							c,
							Promise.race([
								Promise.all([a.close(), a.closed]),
								b,
							]),
							4
						)
					)
				if (2 != c.a) return wa(c, 0)
				C(c)
				x(c)
			})
		}
		function pd(a) {
			var b
			return J(function (c) {
				b = Array.from(a.f.keys())
				a.f.clear()
				return u(
					c,
					Promise.all(
						b.map(function (d) {
							return J(function (e) {
								if (1 == e.a) return z(e, 2), u(e, Rd(d), 4)
								if (2 != e.a) return wa(e, 0)
								C(e)
								x(e)
							})
						})
					),
					0
				)
			})
		}
		function Td(a, b) {
			var c = b.audio,
				d = b.video
			if (
				(c &&
					c.encrypted &&
					!Zc() &&
					!a.l.has(Sc(c.mimeType, c.codecs).toLowerCase())) ||
				(d &&
					d.encrypted &&
					!Zc() &&
					!a.l.has(Sc(d.mimeType, d.codecs).toLowerCase()))
			)
				return !1
			var e = Hd(a.c)
			c = (d ? d.drmInfos : []).concat(c ? c.drmInfos : [])
			return (
				0 == c.length ||
				c.some(function (f) {
					return f.keySystem == e
				})
			)
		}
		function Ud(a, b) {
			if (!a.length) return b
			if (!b.length) return a
			for (var c = [], d = r(a), e = d.next(); !e.done; e = d.next()) {
				e = e.value
				for (var f = r(b), g = f.next(); !g.done; g = f.next())
					if (((g = g.value), e.keySystem == g.keySystem)) {
						f = []
						f = f.concat(e.initData || [])
						f = f.concat(g.initData || [])
						var h =
							e.keyIds && g.keyIds
								? new Set(ja(e.keyIds).concat(ja(g.keyIds)))
								: e.keyIds || g.keyIds
						c.push({
							keySystem: e.keySystem,
							licenseServerUri:
								e.licenseServerUri || g.licenseServerUri,
							distinctiveIdentifierRequired:
								e.distinctiveIdentifierRequired ||
								g.distinctiveIdentifierRequired,
							persistentStateRequired:
								e.persistentStateRequired ||
								g.persistentStateRequired,
							videoRobustness:
								e.videoRobustness || g.videoRobustness,
							audioRobustness:
								e.audioRobustness || g.audioRobustness,
							serverCertificate:
								e.serverCertificate || g.serverCertificate,
							initData: f,
							keyIds: h,
						})
						break
					}
			}
			return c
		}
		function nd(a) {
			a.f.forEach(function (b, c) {
				var d = b.gd,
					e = c.expiration
				isNaN(e) && (e = Infinity)
				e != d && (a.v.onExpirationUpdated(c.sessionId, e), (b.gd = e))
			})
		}
		function Ld(a) {
			a = a.f.values()
			return db(a, function (b) {
				return b.loaded
			})
		}
		function wd(a, b) {
			var c = []
			b.forEach(function (f, g) {
				c.push({
					keySystem: g,
					licenseServerUri: f,
					distinctiveIdentifierRequired: !1,
					persistentStateRequired: !1,
					audioRobustness: '',
					videoRobustness: '',
					serverCertificate: null,
					initData: [],
					keyIds: new Set(),
				})
			})
			for (var d = r(a), e = d.next(); !e.done; e = d.next())
				(e = e.value),
					e.video && e.video.encrypted && (e.video.drmInfos = c),
					e.audio && e.audio.encrypted && (e.audio.drmInfos = c)
		}
		function Jd(a, b) {
			var c = [],
				d = [],
				e = [],
				f = new Set()
			Vd(b.drmInfos, c, d, e, f)
			return {
				keySystem: a,
				licenseServerUri: c[0],
				distinctiveIdentifierRequired:
					'required' == b.distinctiveIdentifier,
				persistentStateRequired: 'required' == b.persistentState,
				audioRobustness:
					(b.audioCapabilities
						? b.audioCapabilities[0].robustness
						: '') || '',
				videoRobustness:
					(b.videoCapabilities
						? b.videoCapabilities[0].robustness
						: '') || '',
				serverCertificate: d[0],
				initData: e,
				keyIds: f,
			}
		}
		function Vd(a, b, c, d, e) {
			var f = {}
			a = r(a)
			for (var g = a.next(); !g.done; f = { qa: f.qa }, g = a.next()) {
				f.qa = g.value
				b.includes(f.qa.licenseServerUri) ||
					b.push(f.qa.licenseServerUri)
				f.qa.serverCertificate &&
					(c.some(
						(function (l) {
							return function (m) {
								return Jb(m, l.qa.serverCertificate)
							}
						})(f)
					) ||
						c.push(f.qa.serverCertificate))
				if (f.qa.initData) {
					g = {}
					for (
						var h = r(f.qa.initData), k = h.next();
						!k.done;
						g = { Yb: g.Yb }, k = h.next()
					)
						(g.Yb = k.value),
							d.some(
								(function (l) {
									return function (m) {
										var n = l.Yb
										return m.keyId && m.keyId == n.keyId
											? !0
											: m.initDataType ==
													n.initDataType &&
													Jb(m.initData, n.initData)
									}
								})(g)
							) || d.push(g.Yb)
				}
				if (f.qa.keyIds)
					for (
						g = r(f.qa.keyIds), h = g.next();
						!h.done;
						h = g.next()
					)
						e.add(h.value)
			}
		}
		function xd(a, b, c) {
			if (
				a.keySystem &&
				('org.w3.clearkey' != a.keySystem || !a.licenseServerUri)
			) {
				b.size &&
					((b = b.get(a.keySystem) || ''), (a.licenseServerUri = b))
				a.keyIds || (a.keyIds = new Set())
				if ((c = c.get(a.keySystem)))
					a.distinctiveIdentifierRequired ||
						(a.distinctiveIdentifierRequired =
							c.distinctiveIdentifierRequired),
						a.persistentStateRequired ||
							(a.persistentStateRequired =
								c.persistentStateRequired),
						a.videoRobustness ||
							(a.videoRobustness = c.videoRobustness),
						a.audioRobustness ||
							(a.audioRobustness = c.audioRobustness),
						a.serverCertificate ||
							(a.serverCertificate = c.serverCertificate)
				window.cast &&
					window.cast.__platform__ &&
					'com.microsoft.playready' == a.keySystem &&
					(a.keySystem = 'com.chromecast.playready')
			}
		}
		var Sd = 1,
			Od = 5,
			Pd = 0.5,
			Wd = new sc(function () {
				return Mb(new Uint8Array([0]))
			})
		function Xd(a, b, c) {
			this.startTime = a
			this.direction = Yd
			this.endTime = b
			this.payload = c
			this.region = new Zd()
			this.position = null
			this.positionAlign = $d
			this.size = 0
			this.textAlign = ae
			this.writingMode = be
			this.lineInterpretation = ce
			this.line = null
			this.lineHeight = ''
			this.lineAlign = de
			this.displayAlign = ee
			this.fontSize = this.border = this.backgroundImage = this.backgroundColor = this.color =
				''
			this.fontWeight = fe
			this.fontStyle = ge
			this.linePadding = this.letterSpacing = this.fontFamily = ''
			this.opacity = 1
			this.textDecoration = []
			this.wrapLine = !0
			this.id = ''
			this.nestedCues = []
			this.spacer = !1
			this.cellResolution = { columns: 32, rows: 15 }
		}
		Xd.prototype.clone = function () {
			var a = new Xd(0, 0, ''),
				b
			for (b in this)
				(a[b] = this[b]),
					a[b] && a[b].constructor == Array && (a[b] = a[b].slice())
			return a
		}
		function he(a, b) {
			for (var c in a)
				if ('nestedCues' == c) {
					if (!Xb(a.nestedCues, b.nestedCues, he)) return !1
				} else if ('region' == c || 'cellResolution' == c)
					for (var d in a[c]) {
						if (a[c][d] != b[c][d]) return !1
					}
				else if (Array.isArray(a[c])) {
					if (!Xb(a[c], b[c])) return !1
				} else if (a[c] != b[c]) return !1
			return !0
		}
		K('shaka.text.Cue', Xd)
		var $d = 'auto'
		Xd.positionAlign = {
			LEFT: 'line-left',
			RIGHT: 'line-right',
			CENTER: 'center',
			AUTO: $d,
		}
		var ae = 'center',
			ie = {
				LEFT: 'left',
				RIGHT: 'right',
				CENTER: ae,
				START: 'start',
				END: 'end',
			}
		Xd.textAlign = ie
		var ee = 'after',
			je = { BEFORE: 'before', CENTER: 'center', AFTER: ee }
		Xd.displayAlign = je
		var Yd = 'ltr'
		Xd.direction = {
			HORIZONTAL_LEFT_TO_RIGHT: Yd,
			HORIZONTAL_RIGHT_TO_LEFT: 'rtl',
		}
		var be = 'horizontal-tb'
		Xd.writingMode = {
			HORIZONTAL_TOP_TO_BOTTOM: be,
			VERTICAL_LEFT_TO_RIGHT: 'vertical-lr',
			VERTICAL_RIGHT_TO_LEFT: 'vertical-rl',
		}
		var ce = 0
		Xd.lineInterpretation = { LINE_NUMBER: ce, PERCENTAGE: 1 }
		var de = 'start',
			ke = { CENTER: 'center', START: de, END: 'end' }
		Xd.lineAlign = ke
		var fe = 400
		Xd.fontWeight = { NORMAL: fe, BOLD: 700 }
		var ge = 'normal',
			le = { NORMAL: ge, ITALIC: 'italic', OBLIQUE: 'oblique' }
		Xd.fontStyle = le
		Xd.textDecoration = {
			UNDERLINE: 'underline',
			LINE_THROUGH: 'lineThrough',
			OVERLINE: 'overline',
		}
		function Zd() {
			this.id = ''
			this.regionAnchorY = this.regionAnchorX = this.viewportAnchorY = this.viewportAnchorX = 0
			this.height = this.width = 100
			this.viewportAnchorUnits = this.widthUnits = this.heightUnits = me
			this.scroll = ne
		}
		K('shaka.text.CueRegion', Zd)
		var me = 1
		Zd.units = { PX: 0, PERCENTAGE: me, LINES: 2 }
		var ne = ''
		Zd.scrollMode = { NONE: ne, UP: 'up' }
		function oe(a, b, c, d, e) {
			if (d >= e) return null
			for (var f = -1, g = -1, h = 0; h < c.length; h++)
				if (
					c[h].some(function (D) {
						return null != D && '' != D.a.trim()
					})
				) {
					f = h
					break
				}
			for (h = c.length - 1; 0 <= h; h--)
				if (
					c[h].some(function (D) {
						return null != D && '' != D.a.trim()
					})
				) {
					g = h
					break
				}
			if (-1 === f || -1 === g) return null
			for (
				var k = (h = !1),
					l = 'white',
					m = 'black',
					n = pe(d, e, h, k, l, m);
				f <= g;
				f++
			) {
				for (var p = c[f], t = -1, v = -1, w = 0; w < p.length; w++)
					if (null != p[w] && '' !== p[w].a.trim()) {
						t = w
						break
					}
				for (w = p.length - 1; 0 <= w; w--)
					if (null != p[w] && '' !== p[w].a.trim()) {
						v = w
						break
					}
				if (-1 === t || -1 === v) (p = qe(d, e)), a.nestedCues.push(p)
				else {
					for (; t <= v; t++)
						if ((w = p[t])) {
							var y = w.g,
								A = w.c,
								B = w.f,
								E = w.b
							if (y != h || A != k || B != l || E != m)
								n.payload && a.nestedCues.push(n),
									(n = pe(d, e, y, A, B, E)),
									(h = y),
									(k = A),
									(l = B),
									(m = E)
							n.payload += w.a
						} else n.payload += ' '
					n.payload && a.nestedCues.push(n)
					f !== g && ((n = qe(d, e)), a.nestedCues.push(n))
					n = pe(d, e, h, k, l, m)
				}
			}
			return a.nestedCues.length ? { cue: a, stream: b } : null
		}
		function pe(a, b, c, d, e, f) {
			a = new Xd(a, b, '')
			c && a.textDecoration.push('underline')
			d && (a.fontStyle = 'italic')
			a.color = e
			a.backgroundColor = f
			return a
		}
		function qe(a, b) {
			var c = new Xd(a, b, '')
			c.spacer = !0
			return c
		}
		function re(a, b, c, d, e) {
			this.a = a
			this.g = b
			this.c = c
			this.b = d
			this.f = e
		}
		function se() {
			this.g = !1
			this.h = this.l = 0
			this.j = te
			this.c = []
			this.a = this.b = this.f = 0
			this.D = this.w = !1
			this.B = 'white'
			this.u = 'black'
			ue(this)
		}
		function ue(a) {
			a.c = []
			for (var b = 0; 15 > b; b++) a.c.push(ve())
		}
		function ve() {
			for (var a = [], b = 0; 42 > b; b++) a.push(null)
			return a
		}
		function we(a, b) {
			xe(a) && ((a.c[a.b][a.a] = new re(b, a.D, a.w, a.u, a.B)), a.a++)
		}
		function xe(a) {
			var b = a.a < a.h && 0 <= a.a
			return a.b < a.l && 0 <= a.b && b
		}
		se.prototype.isVisible = function () {
			return this.g
		}
		function ye(a, b, c) {
			var d = new Xd(a.f, b, '')
			d.textAlign = a.j === ze ? 'left' : a.j === Ae ? 'right' : ae
			if ((c = oe(d, 'svc' + c, a.c, a.f, b))) a.f = b
			return c
		}
		var ze = 0,
			Ae = 1,
			te = 2
		function Be() {
			this.c = []
			this.b = null
			this.a = 0
		}
		function Ce(a, b) {
			3 === b.type
				? ((a.a = 2 * (b.value & 63) - 1), (a.b = []))
				: a.b &&
				  (0 < a.a && (a.b.push(b), a.a--),
				  0 === a.a && (a.c.push(new De(a.b)), (a.b = null), (a.a = 0)))
		}
		function De(a) {
			this.a = 0
			this.b = a
		}
		De.prototype.ga = function () {
			return this.a < this.b.length
		}
		De.prototype.Z = function () {
			return this.a
		}
		function Ee(a) {
			if (!a.ga()) throw new L(2, 2, 3e3)
			return a.b[a.a++]
		}
		De.prototype.skip = function (a) {
			if (this.a + a > this.b.length) throw new L(2, 2, 3e3)
			this.a += a
		}
		function Fe(a) {
			this.c = a
			this.b = [null, null, null, null, null, null, null, null]
			this.a = null
		}
		function Ge(a, b, c, d) {
			if (128 <= c && 135 >= c) (d = c & 7), a.b[d] && (a.a = a.b[d])
			else {
				if (136 === c) {
					c = Ee(b).value
					b = null
					c = r(He(a, c))
					for (var e = c.next(); !e.done; e = c.next())
						(e = a.b[e.value]),
							e.isVisible() && (b = ye(e, d, a.c)),
							ue(e)
					return b
				}
				if (137 === c)
					for (
						b = Ee(b).value, b = r(He(a, b)), c = b.next();
						!c.done;
						c = b.next()
					)
						(c = a.b[c.value]),
							c.isVisible() || (c.f = d),
							(c.g = !0)
				else {
					if (138 === c) {
						c = Ee(b).value
						b = null
						c = r(He(a, c))
						for (e = c.next(); !e.done; e = c.next())
							(e = a.b[e.value]),
								e.isVisible() && (b = ye(e, d, a.c)),
								(e.g = !1)
						return b
					}
					if (139 === c) {
						c = Ee(b).value
						b = null
						c = r(He(a, c))
						for (e = c.next(); !e.done; e = c.next())
							(e = a.b[e.value]),
								e.isVisible() ? (b = ye(e, d, a.c)) : (e.f = d),
								(e.g = !e.g)
						return b
					}
					if (140 === c) return (b = Ee(b).value), Ie(a, b, d)
					if (143 === c) return (d = Ie(a, 255, d)), Je(a), d
					if (144 === c)
						b.skip(1),
							(d = Ee(b).value),
							a.a &&
								((a.a.w = 0 < (d & 128)),
								(a.a.D = 0 < (d & 64)))
					else if (145 === c)
						(d = Ee(b).value),
							(c = Ee(b).value),
							b.skip(1),
							a.a &&
								((b = Ke((c & 48) >> 4, (c & 12) >> 2, c & 3)),
								(a.a.B = Ke(
									(d & 48) >> 4,
									(d & 12) >> 2,
									d & 3
								)),
								(a.a.u = b))
					else if (146 === c)
						(d = Ee(b).value),
							(b = Ee(b).value),
							a.a && ((a = a.a), (a.b = d & 15), (a.a = b & 63))
					else if (151 === c)
						b.skip(1),
							b.skip(1),
							(d = Ee(b).value),
							b.skip(1),
							a.a && (a.a.j = d & 3)
					else if (152 <= c && 159 >= c) {
						c = (c & 15) - 8
						e = null !== a.b[c]
						if (!e) {
							var f = new se()
							f.f = d
							a.b[c] = f
						}
						d = Ee(b).value
						Ee(b)
						Ee(b)
						f = Ee(b).value
						var g = Ee(b).value
						b = Ee(b).value
						;(e && 0 === (b & 7)) ||
							((b = a.b[c]),
							(b.b = 0),
							(b.a = 0),
							(b.D = !1),
							(b.w = !1),
							(b.B = 'white'),
							(b.u = 'black'))
						b = a.b[c]
						b.g = 0 < (d & 32)
						b.l = (f & 15) + 1
						b.h = (g & 63) + 1
						a.a = a.b[c]
					}
				}
			}
			return null
		}
		var He = function Le(a, b) {
			var d, e
			return Fa(Le, function (f) {
				1 == f.a && (d = 0)
				if (5 != f.a)
					return 8 > d
						? (e = 1 === (b & 1)) && a.b[d]
							? u(f, d, 5)
							: f.o(5)
						: f.o(0)
				b >>= 1
				d++
				return f.o(2)
			})
		}
		function Ie(a, b, c) {
			var d = null
			b = r(He(a, b))
			for (var e = b.next(); !e.done; e = b.next()) {
				e = e.value
				var f = a.b[e]
				f.isVisible() && (d = ye(f, c, a.c))
				a.b[e] = null
			}
			return d
		}
		function Je(a) {
			a.a = null
			a.b = [null, null, null, null, null, null, null, null]
		}
		function Ke(a, b, c) {
			var d = { 0: 0, 1: 0, 2: 1, 3: 1 }
			a = d[a]
			b = d[b]
			c = d[c]
			return Me[(a << 2) | (b << 1) | c]
		}
		var Ne = new Map([
				[32, ' '],
				[33, '\u00a0'],
				[37, '\u2026'],
				[42, '\u0160'],
				[44, '\u0152'],
				[48, '\u2588'],
				[49, '\u2018'],
				[50, '\u2019'],
				[51, '\u201c'],
				[52, '\u201d'],
				[53, '\u2022'],
				[57, '\u2122'],
				[58, '\u0161'],
				[60, '\u0153'],
				[61, '\u2120'],
				[63, '\u0178'],
				[118, '\u215b'],
				[119, '\u215c'],
				[120, '\u215d'],
				[121, '\u215e'],
				[122, '\u2502'],
				[123, '\u2510'],
				[124, '\u2514'],
				[125, '\u2500'],
				[126, '\u2518'],
				[127, '\u250c'],
			]),
			Me = 'black blue green cyan red magenta yellow white'.split(' ')
		function Oe(a, b) {
			this.c = []
			this.a = 1
			this.b = 0
			this.u = a
			this.l = b
			this.f = this.h = !1
			this.g = 'white'
			this.j = 'black'
			Pe(this)
		}
		function Qe(a, b, c) {
			return oe(
				new Xd(b, c, ''),
				'CC' + ((a.u << 1) | (a.l + 1)),
				a.c,
				b,
				c
			)
		}
		function Pe(a) {
			Re(a, 0, 15)
			a.a = 1
		}
		function Se(a, b, c) {
			if (!(32 > c || 127 < c)) {
				var d = ''
				switch (b) {
					case Te:
						d = Ue.has(c) ? Ue.get(c) : String.fromCharCode(c)
						break
					case Ve:
						d = We.get(c)
						break
					case Xe:
						a.c[a.a].pop()
						d = Ye.get(c)
						break
					case Ze:
						a.c[a.a].pop(), (d = $e.get(c))
				}
				d && a.c[a.a].push(new re(d, a.h, a.f, a.j, a.g))
			}
		}
		function af(a, b, c, d) {
			if (b >= c)
				for (--d; 0 <= d; d--)
					a.c[b + d] = a.c[c + d].map(function (f) {
						return f
					})
			else
				for (var e = 0; e < d; e++)
					a.c[b + e] = a.c[c + e].map(function (f) {
						return f
					})
		}
		function Re(a, b, c) {
			for (var d = 0; d <= c; d++) a.c[b + d] = []
		}
		var Te = 0,
			Ve = 1,
			Xe = 2,
			Ze = 3,
			Ue = new Map([
				[39, '\u2019'],
				[42, '\u00e1'],
				[92, '\u00e9'],
				[92, '\u00e9'],
				[94, '\u00ed'],
				[95, '\u00f3'],
				[96, '\u00fa'],
				[123, '\u00e7'],
				[124, '\u00f7'],
				[125, '\u00d1'],
				[126, '\u00f1'],
				[127, '\u2588'],
			]),
			We = new Map([
				[48, '\u00ae'],
				[49, '\u00b0'],
				[50, '\u00bd'],
				[51, '\u00bf'],
				[52, '\u2122'],
				[53, '\u00a2'],
				[54, '\u00a3'],
				[55, '\u266a'],
				[56, '\u00e0'],
				[57, '\u2800'],
				[58, '\u00e8'],
				[59, '\u00e2'],
				[60, '\u00ea'],
				[61, '\u00ee'],
				[62, '\u00f4'],
				[63, '\u00fb'],
			]),
			Ye = new Map([
				[32, '\u00c1'],
				[33, '\u00c9'],
				[34, '\u00d3'],
				[35, '\u00da'],
				[36, '\u00dc'],
				[37, '\u00fc'],
				[38, '\u2018'],
				[39, '\u00a1'],
				[40, '*'],
				[41, "'"],
				[42, '\u2500'],
				[43, '\u00a9'],
				[44, '\u2120'],
				[45, '\u00b7'],
				[46, '\u201c'],
				[47, '\u201d'],
				[48, '\u00c0'],
				[49, '\u00c2'],
				[50, '\u00c7'],
				[51, '\u00c8'],
				[52, '\u00ca'],
				[53, '\u00cb'],
				[54, '\u00eb'],
				[55, '\u00ce'],
				[56, '\u00cf'],
				[57, '\u00ef'],
				[58, '\u00d4'],
				[59, '\u00d9'],
				[60, '\u00f9'],
				[61, '\u00db'],
				[62, '\u00ab'],
				[63, '\u00bb'],
			]),
			$e = new Map([
				[32, '\u00c3'],
				[33, '\u00e3'],
				[34, '\u00cd'],
				[35, '\u00cc'],
				[36, '\u00ec'],
				[37, '\u00d2'],
				[38, '\u00f2'],
				[39, '\u00d5'],
				[40, '\u00f5'],
				[41, '{'],
				[42, '}'],
				[43, '\\'],
				[44, '^'],
				[45, '_'],
				[46, '|'],
				[47, '~'],
				[48, '\u00c4'],
				[49, '\u00e4'],
				[50, '\u00d6'],
				[51, '\u00f6'],
				[52, '\u00df'],
				[53, '\u00a5'],
				[54, '\u00a4'],
				[55, '\u2502'],
				[56, '\u00c5'],
				[57, '\u00e5'],
				[58, '\u00d8'],
				[59, '\u00f8'],
				[60, '\u250c'],
				[61, '\u2510'],
				[62, '\u2514'],
				[63, '\u2518'],
			])
		function bf(a, b) {
			this.b = cf
			this.j = new Oe(a, b)
			this.c = new Oe(a, b)
			this.g = new Oe(a, b)
			this.a = this.c
			this.f = 0
			this.h = null
		}
		function df(a, b, c) {
			a.a = a.c
			var d = a.a,
				e = null
			a.b !== ef &&
				a.b !== ff &&
				((e = Qe(d, a.f, c)),
				(c = a.c),
				(c.a = 0 < c.b ? c.b : 0),
				Re(c, 0, 15),
				(c = a.g),
				(c.a = 0 < c.b ? c.b : 0),
				Re(c, 0, 15),
				(d.a = 15))
			a.b = ef
			d.b = b
			return e
		}
		function gf(a) {
			a.b = hf
			a.a = a.g
			a.a.b = 0
		}
		function jf(a) {
			Ua(
				'Cea608DataChannel',
				'CEA-608 text mode entered, but is unsupported'
			)
			a.a = a.j
			a.b = ff
		}
		var cf = 0,
			hf = 1,
			ef = 3,
			ff = 4,
			kf = 'black green blue cyan red yellow magenta black'.split(' '),
			lf = 'white green blue cyan red yellow magenta white_italics'.split(
				' '
			)
		function R(a, b) {
			this.O = Ob(a)
			this.b = b == mf
			this.a = 0
		}
		q = R.prototype
		q.ga = function () {
			return this.a < this.O.byteLength
		}
		q.Z = function () {
			return this.a
		}
		q.we = function () {
			return this.O.byteLength
		}
		q.V = function () {
			try {
				var a = this.O.getUint8(this.a)
				this.a += 1
				return a
			} catch (b) {
				throw nf()
			}
		}
		q.xb = function () {
			try {
				var a = this.O.getUint16(this.a, this.b)
				this.a += 2
				return a
			} catch (b) {
				throw nf()
			}
		}
		q.H = function () {
			try {
				var a = this.O.getUint32(this.a, this.b)
				this.a += 4
				return a
			} catch (b) {
				throw nf()
			}
		}
		q.Td = function () {
			try {
				var a = this.O.getInt32(this.a, this.b)
				this.a += 4
				return a
			} catch (b) {
				throw nf()
			}
		}
		q.yb = function () {
			try {
				if (this.b) {
					var a = this.O.getUint32(this.a, !0)
					var b = this.O.getUint32(this.a + 4, !0)
				} else
					(b = this.O.getUint32(this.a, !1)),
						(a = this.O.getUint32(this.a + 4, !1))
			} catch (c) {
				throw nf()
			}
			if (2097151 < b) throw new L(2, 3, 3001)
			this.a += 8
			return b * Math.pow(2, 32) + a
		}
		q.Sa = function (a) {
			if (this.a + a > this.O.byteLength) throw nf()
			var b = Lb(this.O, this.a, a)
			this.a += a
			return b
		}
		q.skip = function (a) {
			if (this.a + a > this.O.byteLength) throw nf()
			this.a += a
		}
		q.Vd = function (a) {
			if (this.a < a) throw nf()
			this.a -= a
		}
		q.seek = function (a) {
			if (0 > a || a > this.O.byteLength) throw nf()
			this.a = a
		}
		q.kd = function () {
			for (var a = this.a; this.ga() && 0 != this.O.getUint8(this.a); )
				this.a += 1
			a = Lb(this.O, a, this.a - a)
			this.a += 1
			return uc(a)
		}
		function nf() {
			return new L(2, 3, 3e3)
		}
		K('shaka.util.DataViewReader', R)
		R.prototype.readTerminatedString = R.prototype.kd
		R.prototype.seek = R.prototype.seek
		R.prototype.rewind = R.prototype.Vd
		R.prototype.skip = R.prototype.skip
		R.prototype.readBytes = R.prototype.Sa
		R.prototype.readUint64 = R.prototype.yb
		R.prototype.readInt32 = R.prototype.Td
		R.prototype.readUint32 = R.prototype.H
		R.prototype.readUint16 = R.prototype.xb
		R.prototype.readUint8 = R.prototype.V
		R.prototype.getLength = R.prototype.we
		R.prototype.getPosition = R.prototype.Z
		R.prototype.hasMoreData = R.prototype.ga
		var mf = 1
		R.Endianness = { BIG_ENDIAN: 0, LITTLE_ENDIAN: mf }
		function of() {
			this.b = []
			this.a = []
			this.c = new Be()
			this.g = 0
			this.l = new Map([
				['CC1', new bf(0, 0)],
				['CC2', new bf(0, 1)],
				['CC3', new bf(1, 0)],
				['CC4', new bf(1, 1)],
			])
			this.j = this.h = 0
			this.f = new Map()
			pf(this)
		}
		function pf(a) {
			a.h = 0
			a.j = 0
			a = r(a.l.values())
			for (var b = a.next(); !b.done; b = a.next())
				(b = b.value),
					(b.b = 2),
					(b.a = b.c),
					(b.h = null),
					Pe(b.c),
					Pe(b.g),
					Pe(b.j)
		}
		function qf(a) {
			function b(f, g) {
				return f.pts - g.pts || f.order - g.order
			}
			var c = []
			a.b.sort(b)
			a.a.sort(b)
			for (var d = r(a.b), e = d.next(); !e.done; e = d.next())
				(e = rf(a, e.value)) && c.push(e)
			d = r(a.a)
			for (e = d.next(); !e.done; e = d.next()) Ce(a.c, e.value)
			d = r(a.c.c)
			for (e = d.next(); !e.done; e = d.next())
				(e = sf(a, e.value)), c.push.apply(c, ja(e))
			a.c.c = []
			a.b = []
			a.a = []
			return c
		}
		function rf(a, b) {
			var c = b.type
			if (16 === (b.sa & 112)) {
				var d = (b.sa >> 3) & 1
				0 === c ? (a.h = d) : (a.j = d)
			}
			c = a.l.get('CC' + ((c << 1) | ((c ? a.j : a.h) + 1)))
			if (
				(255 === b.sa && 255 === b.Ia) ||
				(!b.sa && !b.Ia) ||
				!tf(b.sa) ||
				!tf(b.Ia)
			)
				return 45 <= ++a.g && pf(a), null
			a.g = 0
			b.sa &= 127
			b.Ia &= 127
			if (!b.sa && !b.Ia) return null
			d = null
			if (16 === (b.sa & 112))
				a: {
					var e = b.sa
					d = b.Ia
					if (c.h === ((e << 8) | d)) c.h = null
					else if (
						((c.h = (e << 8) | d),
						16 === (e & 240) && 64 === (d & 192))
					) {
						e = [
							11,
							11,
							1,
							2,
							3,
							4,
							12,
							13,
							14,
							15,
							5,
							6,
							7,
							8,
							9,
							10,
						][((e & 7) << 1) | ((d >> 5) & 1)]
						var f = (d & 30) >> 1,
							g = 'white',
							h = !1
						7 > f ? (g = lf[f]) : 7 === f && (h = !0)
						d = 1 === (d & 1)
						if (c.b !== ff) {
							f = c.a
							if (c.b === ef && e !== f.a) {
								var k = 1 + e - f.b
								af(f, k, 1 + f.a - f.b, f.b)
								Re(f, 0, k - 1)
								Re(f, e + 1, 15 - e)
							}
							f.a = e
							c.a.h = d
							c.a.f = h
							c.a.g = g
							c.a.j = 'black'
						}
					} else if (17 === (e & 247) && 32 === (d & 240))
						(c.a.h = !1),
							(c.a.f = !1),
							(c.a.g = 'white'),
							Se(c.a, Te, 32),
							(g = !1),
							(e = lf[(d & 14) >> 1]),
							'white_italics' === e && ((e = 'white'), (g = !0)),
							(c.a.h = 1 === (d & 1)),
							(c.a.f = g),
							(c.a.g = e)
					else if (
						(16 === (e & 247) && 32 === (d & 240)) ||
						(23 === (e & 247) && 45 === (d & 255))
					)
						(g = 'black'),
							0 === (e & 7) && (g = kf[(d & 14) >> 1]),
							(c.a.j = g)
					else if (17 === (e & 247) && 48 === (d & 240))
						Se(c.a, Ve, d)
					else if (18 === (e & 246) && 32 === (d & 224))
						Se(c.a, e & 1 ? Ze : Xe, d)
					else if (20 === (e & 246) && 32 === (d & 240)) {
						d = b.pts
						e = null
						switch (b.Ia) {
							case 32:
								gf(c)
								break
							case 33:
								c = c.a
								c.c[c.a].pop()
								break
							case 37:
								e = df(c, 2, d)
								break
							case 38:
								e = df(c, 3, d)
								break
							case 39:
								e = df(c, 4, d)
								break
							case 40:
								Se(c.a, Te, 32)
								break
							case 41:
								c.b = 2
								c.a = c.c
								c.a.b = 0
								c.f = d
								break
							case 42:
								Pe(c.j)
								jf(c)
								break
							case 43:
								jf(c)
								break
							case 44:
								e = c.c
								g = null
								c.b !== ff && (g = Qe(e, c.f, d))
								Re(e, 0, 15)
								e = g
								break
							case 45:
								e = c.a
								c.b !== ef
									? (e = null)
									: ((g = Qe(e, c.f, d)),
									  (h = e.a - e.b + 1),
									  af(e, h - 1, h, e.b),
									  Re(e, 0, h - 1),
									  Re(e, e.a, 15 - e.a),
									  (c.f = d),
									  (e = g))
								break
							case 46:
								Re(c.g, 0, 15)
								break
							case 47:
								;(e = null),
									c.b !== ff && (e = Qe(c.c, c.f, d)),
									(g = c.g),
									(c.g = c.c),
									(c.c = g),
									gf(c),
									(c.f = d)
						}
						d = e
						break a
					}
					d = null
				}
			else (e = b.Ia), Se(c.a, Te, b.sa), Se(c.a, Te, e)
			return d
		}
		function sf(a, b) {
			var c = []
			try {
				for (; b.ga(); ) {
					var d = Ee(b).value,
						e = (d & 224) >> 5,
						f = d & 31
					7 === e && 0 != f && (e = Ee(b).value & 63)
					if (0 != e) {
						a.f.has(e) || a.f.set(e, new Fe(e))
						for (var g = a.f.get(e), h = b.Z(); b.Z() - h < f; ) {
							e = b
							var k = Ee(e),
								l = k.value,
								m = k.pts
							if (16 === l) {
								var n = Ee(e)
								l = (l << 16) | n.value
							}
							if (0 <= l && 31 >= l) {
								var p = m
								if (g.a) {
									var t = g.a
									e = null
									switch (l) {
										case 8:
											!xe(t) ||
												(0 >= t.a && 0 >= t.b) ||
												(0 >= t.a
													? ((t.a = t.h - 1), t.b--)
													: t.a--,
												(t.c[t.b][t.a] = null))
											break
										case 13:
											t.isVisible() && (e = ye(t, p, g.c))
											if (t.b + 1 >= t.l) {
												p = t
												for (
													var v = 0, w = 1;
													15 > w;
													w++, v++
												)
													p.c[v] = p.c[w]
												for (w = 0; 1 > w; w++, v++)
													p.c[v] = ve()
											} else t.b++
											t.a = 0
											break
										case 14:
											t.isVisible() && (e = ye(t, p, g.c))
											t.c[t.b] = ve()
											t.a = 0
											break
										case 12:
											t.isVisible() &&
												(e = ye(t, p, g.c)),
												ue(t),
												(p = t),
												(p.b = 0),
												(p.a = 0)
									}
									var y = e
								} else y = null
							} else if (128 <= l && 159 >= l) y = Ge(g, e, l, m)
							else {
								if (4096 <= l && 4127 >= l)
									(p = l & 255),
										8 <= p && 15 >= p
											? e.skip(1)
											: 16 <= p && 23 >= p
											? e.skip(2)
											: 24 <= p && 31 >= p && e.skip(3)
								else if (4224 <= l && 4255 >= l)
									(p = l & 255),
										128 <= p && 135 >= p
											? e.skip(4)
											: 136 <= p && 143 >= p && e.skip(5)
								else if (32 <= l && 127 >= l)
									(e = l),
										g.a &&
											(127 === e
												? we(g.a, '\u266a')
												: we(
														g.a,
														String.fromCharCode(e)
												  ))
								else if (160 <= l && 255 >= l)
									g.a && we(g.a, String.fromCharCode(l))
								else if (4128 <= l && 4223 >= l) {
									if (((e = l & 255), g.a))
										if (Ne.has(e)) {
											var A = Ne.get(e)
											we(g.a, A)
										} else we(g.a, '_')
								} else
									4256 <= l &&
										4351 >= l &&
										g.a &&
										(160 != (l & 255)
											? we(g.a, '_')
											: we(g.a, '[CC]'))
								y = null
							}
							;(e = y) && c.push(e)
						}
					}
				}
			} catch (B) {
				if (B instanceof L && 3e3 === B.code)
					Ua(
						'CEA708_INVALID_DATA',
						'Buffer read out of bounds / invalid CEA-708 Data.'
					)
				else throw B
			}
			return c
		}
		function tf(a) {
			for (var b = 0; a; ) (b ^= a & 1), (a >>= 1)
			return 1 === b
		}
		function uf() {}
		var wf = function vf(a, b) {
			var d, e, f, g
			return Fa(vf, function (h) {
				if (1 == h.a) {
					for (var k = 0, l = 0, m = 0; l < b.length; )
						2 == k && 3 == b[l]
							? (k = 0)
							: (0 == b[l] ? k++ : (k = 0), (b[m] = b[l]), m++),
							l++
					d = l - m
					e = 0
				}
				if (4 != h.a) {
					if (!(e + d < b.length)) return h.o(0)
					for (f = 0; 255 == b[e]; ) (f += 255), e++
					f += b[e++]
					for (g = 0; 255 == b[e]; ) (g += 255), e++
					g += b[e++]
					return 4 != f ? h.o(4) : u(h, b.subarray(e, e + g), 4)
				}
				e += g
				return h.o(2)
			})
		}
		function xf() {
			this.c = []
			this.b = []
			this.a = !1
		}
		q = xf.prototype
		q.G = function (a, b) {
			var c = yf(a)
			this.c[c] = zf
			this.b[c] = b
			return this
		}
		q.U = function (a, b) {
			var c = yf(a)
			this.c[c] = Af
			this.b[c] = b
			return this
		}
		q.stop = function () {
			this.a = !0
		}
		q.parse = function (a, b, c) {
			a = new R(a, 0)
			for (this.a = !1; a.ga() && !this.a; ) this.qc(0, a, b, c)
		}
		q.qc = function (a, b, c, d) {
			var e = b.Z(),
				f = b.H(),
				g = b.H()
			switch (f) {
				case 0:
					f = b.O.byteLength - e
					break
				case 1:
					f = b.yb()
			}
			var h = this.b[g]
			if (h) {
				var k = null,
					l = null
				this.c[g] == Af &&
					((l = b.H()), (k = l >>> 24), (l &= 16777215))
				g = e + f
				c && g > b.O.byteLength && (g = b.O.byteLength)
				d && g > b.O.byteLength
					? (this.a = !0)
					: ((d = g - b.Z()),
					  (b = 0 < d ? b.Sa(d) : new Uint8Array(0)),
					  (b = new R(b, 0)),
					  h({
							parser: this,
							partialOkay: c || !1,
							version: k,
							flags: l,
							reader: b,
							size: f,
							start: e + a,
					  }))
			} else b.skip(Math.min(e + f - b.Z(), b.O.byteLength - b.Z()))
		}
		function Bf(a) {
			for (
				var b = null != a.flags ? 12 : 8;
				a.reader.ga() && !a.parser.a;

			)
				a.parser.qc(a.start + b, a.reader, a.partialOkay)
		}
		function Cf(a) {
			var b = null != a.flags ? 12 : 8,
				c = a.reader.H()
			c = r(fb(c))
			for (
				var d = c.next();
				!d.done &&
				(a.parser.qc(a.start + b, a.reader, a.partialOkay),
				!a.parser.a);
				d = c.next()
			);
		}
		function Df(a) {
			return function (b) {
				a(b.reader.Sa(b.reader.O.byteLength - b.reader.Z()))
			}
		}
		function yf(a) {
			var b = 0
			a = r(a)
			for (var c = a.next(); !c.done; c = a.next())
				b = (b << 8) | c.value.charCodeAt(0)
			return b
		}
		function Ef(a) {
			return String.fromCharCode(
				(a >> 24) & 255,
				(a >> 16) & 255,
				(a >> 8) & 255,
				a & 255
			)
		}
		K('shaka.util.Mp4Parser', xf)
		xf.typeToString = Ef
		xf.allData = Df
		xf.sampleDescription = Cf
		xf.children = Bf
		xf.prototype.parseNext = xf.prototype.qc
		xf.prototype.parse = xf.prototype.parse
		xf.prototype.stop = xf.prototype.stop
		xf.prototype.fullBox = xf.prototype.U
		xf.prototype.box = xf.prototype.G
		var zf = 0,
			Af = 1
		function Ff(a, b) {
			var c = null,
				d = null,
				e = a.H()
			b & 1 && a.skip(8)
			b & 2 && a.skip(4)
			b & 8 && (c = a.H())
			b & 16 && (d = a.H())
			return { trackId: e, Fd: c, qe: d }
		}
		function Gf(a, b) {
			return { Qc: 1 == b ? a.yb() : a.H() }
		}
		function Hf(a, b) {
			1 == b ? (a.skip(8), a.skip(8)) : (a.skip(4), a.skip(4))
			return { timescale: a.H() }
		}
		function If(a, b, c) {
			var d = a.H(),
				e = []
			c & 1 && a.skip(4)
			c & 4 && a.skip(4)
			for (var f = r(fb(d)), g = f.next(); !g.done; g = f.next())
				(g = { od: null, sampleSize: null, sc: null }),
					c & 256 && (g.od = a.H()),
					c & 512 && (g.sampleSize = a.H()),
					c & 1024 && a.skip(4),
					c & 2048 && (g.sc = 0 == b ? a.H() : a.Td()),
					e.push(g)
			return { Yf: d, Wd: e }
		}
		function Jf() {
			this.f = new uf()
			this.c = new Map()
			this.b = this.a = 0
		}
		Jf.prototype.init = function (a) {
			var b = this,
				c = [],
				d = []
			new xf()
				.G('moov', Bf)
				.G('mvex', Bf)
				.U('trex', function (e) {
					var f = e.reader
					f.skip(4)
					f.skip(4)
					e = f.H()
					f = f.H()
					b.a = e
					b.b = f
				})
				.G('trak', Bf)
				.U('tkhd', function (e) {
					var f = e.reader
					1 == e.version
						? (f.skip(8), f.skip(8), (e = f.yb()))
						: (f.skip(4), f.skip(4), (e = f.H()))
					c.push(e)
				})
				.G('mdia', Bf)
				.U('mdhd', function (e) {
					e = Hf(e.reader, e.version)
					d.push(e.timescale)
				})
				.parse(a, !0)
			if (!c.length || !d.length || c.length != d.length)
				throw new L(2, 2, 2010)
			c.forEach(function (e, f) {
				b.c.set(e, d[f])
			})
		}
		Jf.prototype.parse = function (a) {
			var b = this,
				c = [],
				d = this.a,
				e = this.b,
				f = [],
				g = null,
				h = 9e4
			new xf()
				.G('moof', Bf)
				.G('traf', Bf)
				.U('trun', function (k) {
					f = If(k.reader, k.version, k.flags).Wd
				})
				.U('tfhd', function (k) {
					k = Ff(k.reader, k.flags)
					d = k.Fd || b.a
					e = k.qe || b.b
					k = k.trackId
					b.c.has(k) && (h = b.c.get(k))
				})
				.U('tfdt', function (k) {
					g = Gf(k.reader, k.version).Qc
				})
				.G('mdat', function (k) {
					if (null === g) throw new L(2, 2, 2010)
					k = k.reader
					var l = g,
						m = h,
						n = d,
						p = e,
						t = f,
						v = 0,
						w = p
					for (t.length && (w = t[0].sampleSize || p); k.ga(); ) {
						var y = k.H()
						if (6 == (k.V() & 31)) {
							var A = 0
							t.length > v && (A = t[v].sc || 0)
							A = (l + A) / m
							for (
								var B = r(wf(b.f, k.Sa(y - 1))), E = B.next();
								!E.done;
								E = B.next()
							)
								c.push({ Te: E.value, pts: A })
						} else k.skip(y - 1)
						w -= y + 4
						0 == w &&
							((l = t.length > v ? l + (t[v].od || n) : l + n),
							v++,
							(w = t.length > v ? t[v].sampleSize || p : p))
					}
				})
				.parse(a, !1)
			return c
		}
		function Kf() {
			this.b = new Jf()
			this.a = new of()
		}
		Kf.prototype.init = function (a) {
			this.b.init(a)
		}
		function Lf(a, b) {
			var c = a.b.parse(b)
			c = r(c)
			for (var d = c.next(); !d.done; d = c.next()) {
				var e = d.value,
					f = Lb(e.Te)
				d = a.a
				e = e.pts
				f = new R(f, 0)
				if (
					181 === f.V() &&
					49 === f.xb() &&
					1195456820 === f.H() &&
					3 === f.V()
				) {
					var g = f.V()
					if (0 !== (g & 64)) {
						g &= 31
						f.skip(1)
						for (var h = 0; h < g; h++) {
							var k = f.V(),
								l = (k & 4) >> 2,
								m = f.V(),
								n = f.V()
							l &&
								((k &= 3),
								0 === k || 1 === k
									? d.b.push({
											pts: e,
											type: k,
											sa: m,
											Ia: n,
											order: d.b.length,
									  })
									: (d.a.push({
											pts: e,
											type: k,
											value: m,
											order: d.a.length,
									  }),
									  d.a.push({
											pts: e,
											type: 2,
											value: n,
											order: d.a.length,
									  })))
						}
					}
				}
			}
			return qf(a.a)
		}
		function Mf(a) {
			return !a || (1 == a.length && 1e-6 > a.end(0) - a.start(0))
				? null
				: a.length
				? a.end(a.length - 1)
				: null
		}
		function Nf(a, b, c) {
			c = void 0 === c ? 0 : c
			return !a ||
				!a.length ||
				(1 == a.length && 1e-6 > a.end(0) - a.start(0)) ||
				b > a.end(a.length - 1)
				? !1
				: b + c >= a.start(0)
		}
		function Of(a, b) {
			if (
				!a ||
				!a.length ||
				(1 == a.length && 1e-6 > a.end(0) - a.start(0))
			)
				return 0
			for (var c = 0, d = r(Pf(a)), e = d.next(); !e.done; e = d.next()) {
				var f = e.value
				e = f.start
				f = f.end
				f > b && (c += f - Math.max(e, b))
			}
			return c
		}
		function Qf(a, b) {
			if (
				!a ||
				!a.length ||
				(1 == a.length && 1e-6 > a.end(0) - a.start(0))
			)
				return null
			var c =
					Zc() || ad('Trident/') || ad('Tizen') || ad('CrKey')
						? 0.5
						: 0.1,
				d = Pf(a).findIndex(function (e, f, g) {
					return e.start > b && (0 == f || g[f - 1].end - b <= c)
				})
			return 0 <= d ? d : null
		}
		function Pf(a) {
			if (!a) return []
			for (
				var b = [], c = r(fb(a.length)), d = c.next();
				!d.done;
				d = c.next()
			)
				(d = d.value), b.push({ start: a.start(d), end: a.end(d) })
			return b
		}
		function Rf() {}
		K('shaka.dependencies', Rf)
		Rf.has = function (a) {
			return Sf.has(a)
		}
		Rf.add = function (a, b) {
			if (!Tf[a]) throw Error(a + ' is not supported')
			Sf.set(a, b)
		}
		var Sf = new Map(),
			Tf = { muxjs: 'muxjs' }
		Rf.Allowed = Tf
		Sf.set('muxjs', window.muxjs)
		function Uf() {
			var a = this
			this.j = Sf.get('muxjs')
			this.a = new this.j.mp4.Transmuxer({ keepOriginalTimestamps: !0 })
			this.b = null
			this.h = []
			this.c = []
			this.g = []
			this.f = !1
			this.a.on('data', function (b) {
				a.c = b.captions
				a.g = b.metadata
				a.h.push(kd(b.initSegment, b.data))
			})
			this.a.on('done', function () {
				var b = {
					data: kd.apply(ed, ja(a.h)),
					captions: a.c,
					metadata: a.g,
				}
				a.b.resolve(b)
				a.f = !1
			})
		}
		Uf.prototype.destroy = function () {
			this.a.dispose()
			this.a = null
			return Promise.resolve()
		}
		function Vf(a, b) {
			if (
				!Sf.get('muxjs') ||
				'mp2t' != a.toLowerCase().split(';')[0].split('/')[1]
			)
				return !1
			if (b) return MediaSource.isTypeSupported(Wf(b, a))
			var c = Wf('audio', a),
				d = Wf('video', a)
			return (
				MediaSource.isTypeSupported(c) || MediaSource.isTypeSupported(d)
			)
		}
		function Wf(a, b) {
			var c = b.replace(/mp2t/i, 'mp4')
			'audio' == a && (c = c.replace('video', 'audio'))
			var d = /avc1\.(66|77|100)\.(\d+)/.exec(c)
			if (d) {
				var e = 'avc1.',
					f = d[1],
					g = Number(d[2])
				e =
					('66' == f
						? e + '4200'
						: '77' == f
						? e + '4d00'
						: e + '6400') + (g >> 4).toString(16)
				e += (g & 15).toString(16)
				c = c.replace(d[0], e)
			}
			return c
		}
		function Xf(a, b) {
			a.f = !0
			a.b = new Ab()
			a.h = []
			a.c = []
			a.g = []
			var c = Lb(b)
			a.a.push(c)
			a.a.flush()
			a.f && a.b.reject(new L(2, 3, 3018))
			return a.b
		}
		function Yf(a) {
			this.j = null
			this.c = a
			this.f = this.u = 0
			this.g = Infinity
			this.b = this.a = null
			this.l = ''
			this.h = new Map()
		}
		function Zf(a) {
			return $f[a] ||
				'application/cea-608' == a ||
				'application/cea-708' == a
				? !0
				: !1
		}
		Yf.prototype.destroy = function () {
			this.c = this.j = null
			this.h.clear()
			return Promise.resolve()
		}
		function ag(a, b, c, d) {
			var e, f, g
			return J(function (h) {
				if (1 == h.a) return u(h, Promise.resolve(), 2)
				if (!a.j || !a.c) return h['return']()
				if (null == c || null == d)
					return a.j.parseInit(Lb(b)), h['return']()
				e = { periodStart: a.u, segmentStart: c, segmentEnd: d }
				f = a.j.parseMedia(Lb(b), e)
				g = f.filter(function (k) {
					return k.startTime >= a.f && k.startTime < a.g
				})
				a.c.append(g)
				null == a.a && (a.a = Math.max(c, a.f))
				a.b = Math.min(d, a.g)
				x(h)
			})
		}
		Yf.prototype.remove = function (a, b) {
			var c = this
			return J(function (d) {
				if (1 == d.a) return u(d, Promise.resolve(), 2)
				!c.c ||
					!c.c.remove(a, b) ||
					null == c.a ||
					b <= c.a ||
					a >= c.b ||
					(a <= c.a && b >= c.b
						? (c.a = c.b = null)
						: a <= c.a && b < c.b
						? (c.a = b)
						: a > c.a && b >= c.b && (c.b = a))
				x(d)
			})
		}
		function bg(a, b, c) {
			a.f = b
			a.g = c
		}
		function cg(a, b, c) {
			a.l = b
			if ((b = a.h.get(b)))
				for (var d = r(b.keys()), e = d.next(); !e.done; e = d.next())
					(e = b.get(e.value).filter(function (f) {
						return f.endTime <= c
					})) && a.c.append(e)
		}
		function dg(a) {
			var b = []
			a = r(a)
			for (var c = a.next(); !c.done; c = a.next())
				(c = c.value),
					b.push({
						stream: c.stream,
						cue: new Xd(c.startTime, c.endTime, c.text),
					})
			return b
		}
		function eg(a, b, c, d, e) {
			var f = c + ' ' + d,
				g = new Map()
			b = r(b)
			for (var h = b.next(); !h.done; h = b.next()) {
				var k = h.value
				h = k.stream
				k = k.cue
				g.has(h) || g.set(h, new Map())
				g.get(h).has(f) || g.get(h).set(f, [])
				k.startTime += e
				k.endTime += e
				k.startTime >= a.f &&
					k.startTime < a.g &&
					(g.get(h).get(f).push(k), h == a.l && a.c.append([k]))
			}
			e = r(g.keys())
			for (f = e.next(); !f.done; f = e.next())
				for (
					f = f.value,
						a.h.has(f) || a.h.set(f, new Map()),
						b = r(g.get(f).keys()),
						h = b.next();
					!h.done;
					h = b.next()
				)
					(h = h.value), (k = g.get(f).get(h)), a.h.get(f).set(h, k)
			a.a =
				null == a.a ? Math.max(c, a.f) : Math.min(a.a, Math.max(c, a.f))
			a.b = Math.max(a.b, Math.min(d, a.g))
		}
		K('shaka.text.TextEngine', Yf)
		Yf.prototype.destroy = Yf.prototype.destroy
		Yf.unregisterParser = function (a) {
			delete $f[a]
		}
		Yf.registerParser = function (a, b) {
			$f[a] = b
		}
		var $f = {}
		function fg(a, b, c, d) {
			var e = this
			this.a = a
			this.h = c
			this.f = {}
			this.c = null
			this.B = d || function () {}
			this.g = {}
			this.b = new mc()
			this.l = {}
			this.u = b
			this.w = new Ab()
			this.j = gg(this, this.w)
			this.C = new kc(function () {
				return hg(e)
			})
		}
		function gg(a, b) {
			var c = new MediaSource()
			a.b.ma(c, 'sourceopen', b.resolve)
			a.a.src = ig(c)
			return c
		}
		function jg(a) {
			var b = Sc(a.mimeType, a.codecs),
				c = Tc(a)
			return Zf(b) || MediaSource.isTypeSupported(c) || Vf(b, a.type)
		}
		q = fg.prototype
		q.destroy = function () {
			return this.C.destroy()
		}
		function hg(a) {
			var b, c, d, e, f, g, h, k
			return J(function (l) {
				if (1 == l.a) {
					b = []
					for (c in a.g)
						for (
							d = a.g[c],
								e = d[0],
								a.g[c] = d.slice(0, 1),
								e && b.push(e.p['catch'](Jc)),
								f = r(d.slice(1)),
								g = f.next();
							!g.done;
							g = f.next()
						)
							(h = g.value), h.p.reject(new L(2, 7, 7003, void 0))
					a.c && b.push(a.c.destroy())
					a.h && b.push(a.h.destroy())
					for (k in a.l) b.push(a.l[k].destroy())
					return u(l, Promise.all(b), 2)
				}
				a.b && (a.b.release(), (a.b = null))
				a.a && (a.a.removeAttribute('src'), a.a.load(), (a.a = null))
				a.j = null
				a.c = null
				a.h = null
				a.f = {}
				a.l = {}
				a.u = null
				a.g = {}
				x(l)
			})
		}
		q.init = function (a, b) {
			var c = this,
				d,
				e,
				f,
				g,
				h,
				k,
				l
			return J(function (m) {
				if (1 == m.a) return (d = Oc), u(m, c.w, 2)
				e = {}
				f = r(a.keys())
				for (g = f.next(); !g.done; e = { pa: e.pa }, g = f.next())
					(e.pa = g.value),
						(h = a.get(e.pa)),
						(k = Sc(h.mimeType, h.codecs)),
						e.pa == d.da
							? kg(c, k)
							: ((!b && MediaSource.isTypeSupported(k)) ||
									!Vf(k, e.pa) ||
									((c.l[e.pa] = new Uf()), (k = Wf(e.pa, k))),
							  (l = c.j.addSourceBuffer(k)),
							  c.b.m(
									l,
									'error',
									(function (n) {
										return function () {
											c.g[n.pa][0].p.reject(
												new L(
													2,
													3,
													3014,
													c.a.error
														? c.a.error.code
														: 0
												)
											)
										}
									})(e)
							  ),
							  c.b.m(
									l,
									'updateend',
									(function (n) {
										return function () {
											return lg(c, n.pa)
										}
									})(e)
							  ),
							  (c.f[e.pa] = l),
							  (c.g[e.pa] = []))
				x(m)
			})
		}
		function kg(a, b) {
			a.c || (a.c = new Yf(a.h))
			'application/cea-608' != b &&
				'application/cea-708' != b &&
				(a.c.j = Lc($f[b]))
		}
		function mg(a) {
			return a.j ? 'ended' == a.j.readyState : !0
		}
		function ng(a, b) {
			if ('text' == b) var c = a.c.a
			else
				(c = og(a, b)),
					(c =
						!c || (1 == c.length && 1e-6 > c.end(0) - c.start(0))
							? null
							: 1 == c.length && 0 > c.start(0)
							? 0
							: c.length
							? c.start(0)
							: null)
			return c
		}
		function pg(a, b) {
			return 'text' == b ? a.c.b : Mf(og(a, b))
		}
		function qg(a, b, c) {
			if ('text' == b)
				return (
					(a = a.c),
					null == a.b || a.b < c ? 0 : a.b - Math.max(c, a.a)
				)
			a = og(a, b)
			return Of(a, c)
		}
		q.kc = function () {
			var a = {
				total: Pf(this.a.buffered),
				audio: Pf(og(this, 'audio')),
				video: Pf(og(this, 'video')),
				text: [],
			}
			if (this.c) {
				var b = this.c.a,
					c = this.c.b
				null != b && null != c && a.text.push({ start: b, end: c })
			}
			return a
		}
		function og(a, b) {
			try {
				return a.f[b].buffered
			} catch (c) {
				return null
			}
		}
		function rg(a, b, c, d, e, f) {
			var g, h, k, l, m, n, p
			return J(function (t) {
				if (1 == t.a) {
					g = Oc
					if (b == g.da) return u(t, ag(a.c, c, d, e), 0)
					if (a.l[b]) return u(t, Xf(a.l[b], c), 10)
					f &&
						(a.c || kg(a, 'text/vtt'),
						null == d && null == e
							? a.u.init(c)
							: ((h = Lf(a.u, c)),
							  h.length &&
									((k = a.f[g.Ga].timestampOffset),
									eg(a.c, h, d, e, k))))
					return u(
						t,
						sg(a, b, function () {
							a.f[b].appendBuffer(c)
						}),
						0
					)
				}
				l = t.b
				a.c || kg(a, 'text/vtt')
				l.metadata &&
					((m = a.f[b].timestampOffset), a.B(l.metadata, m, e))
				l.captions &&
					l.captions.length &&
					((n = a.f[g.Ga].timestampOffset),
					(p = dg(l.captions)),
					eg(a.c, p, d, e, n))
				return u(
					t,
					sg(a, b, function () {
						a.f[b].appendBuffer(l.data)
					}),
					0
				)
			})
		}
		function tg(a, b) {
			var c = pg(a, 'video') || 0
			cg(a.c, b, c)
		}
		q.remove = function (a, b, c) {
			var d = this,
				e
			return J(function (f) {
				e = Oc
				return a == e.da
					? u(f, d.c.remove(b, c), 0)
					: u(
							f,
							sg(d, a, function () {
								c <= b ? lg(d, a) : d.f[a].remove(b, c)
							}),
							0
					  )
			})
		}
		function ug(a, b) {
			var c
			return J(function (d) {
				c = Oc
				return b == c.da
					? a.c
						? u(d, a.c.remove(0, Infinity), 0)
						: d['return']()
					: u(
							d,
							sg(a, b, function () {
								var e = a.j.duration
								0 >= e ? lg(a, b) : a.f[b].remove(0, e)
							}),
							0
					  )
			})
		}
		q.flush = function (a) {
			var b = this,
				c
			return J(function (d) {
				c = Oc
				return a == c.da
					? d['return']()
					: u(
							d,
							sg(b, a, function () {
								b.a.currentTime -= 0.001
								lg(b, a)
							}),
							0
					  )
			})
		}
		function vg(a, b, c, d, e) {
			var f
			return J(function (g) {
				f = Oc
				return b == f.da
					? ((a.c.u = c), bg(a.c, d, e), g['return']())
					: u(
							g,
							Promise.all([
								sg(a, b, function () {
									var h = a.f[b].appendWindowStart,
										k = a.f[b].appendWindowEnd
									a.f[b].abort()
									a.f[b].appendWindowStart = h
									a.f[b].appendWindowEnd = k
									lg(a, b)
								}),
								sg(a, b, function () {
									var h = c
									0 > h && (h += 0.001)
									a.f[b].timestampOffset = h
									lg(a, b)
								}),
								sg(a, b, function () {
									a.f[b].appendWindowStart = 0
									a.f[b].appendWindowEnd = e
									a.f[b].appendWindowStart = d
									lg(a, b)
								}),
							]),
							0
					  )
			})
		}
		q.endOfStream = function (a) {
			var b = this
			return J(function (c) {
				return u(
					c,
					wg(b, function () {
						mg(b) || (a ? b.j.endOfStream(a) : b.j.endOfStream())
					}),
					0
				)
			})
		}
		q.Da = function (a) {
			var b = this
			return J(function (c) {
				return u(
					c,
					wg(b, function () {
						b.j.duration = a
					}),
					0
				)
			})
		}
		q.getDuration = function () {
			return this.j.duration
		}
		function lg(a, b) {
			var c = a.g[b][0]
			c && (c.p.resolve(), xg(a, b))
		}
		function sg(a, b, c) {
			lc(a.C)
			c = { start: c, p: new Ab() }
			a.g[b].push(c)
			1 == a.g[b].length && yg(a, b)
			return c.p
		}
		function wg(a, b) {
			var c, d, e, f, g, h
			return J(function (k) {
				switch (k.a) {
					case 1:
						lc(a.C)
						c = []
						d = {}
						for (e in a.f)
							(d.Db = new Ab()),
								(f = {
									start: (function (l) {
										return function () {
											return l.Db.resolve()
										}
									})(d),
									p: d.Db,
								}),
								a.g[e].push(f),
								c.push(d.Db),
								1 == a.g[e].length && f.start(),
								(d = { Db: d.Db })
						z(k, 2)
						return u(k, Promise.all(c), 4)
					case 4:
						wa(k, 3)
						break
					case 2:
						throw ((g = C(k)), g)
					case 3:
						try {
							b()
						} catch (l) {
							throw new L(2, 3, 3015, l)
						} finally {
							for (h in a.f) xg(a, h)
						}
						x(k)
				}
			})
		}
		function xg(a, b) {
			a.g[b].shift()
			yg(a, b)
		}
		function yg(a, b) {
			var c = a.g[b][0]
			if (c)
				try {
					c.start()
				} catch (d) {
					'QuotaExceededError' == d.name
						? c.p.reject(new L(2, 3, 3017, b))
						: c.p.reject(new L(2, 3, 3015, d)),
						xg(a, b)
				}
		}
		var ig = window.URL.createObjectURL
		function zg(a, b) {
			a = Ag(a)
			b = Ag(b)
			return a.split('-')[0] == b.split('-')[0]
		}
		function Bg(a, b) {
			a = Ag(a)
			b = Ag(b)
			var c = a.split('-'),
				d = b.split('-')
			return c[0] == d[0] && 1 == c.length && 2 == d.length
		}
		function Cg(a, b) {
			a = Ag(a)
			b = Ag(b)
			var c = a.split('-'),
				d = b.split('-')
			return 2 == c.length && 2 == d.length && c[0] == d[0]
		}
		function Ag(a) {
			var b = a.split('-')
			a = b[0] || ''
			b = b[1] || ''
			a = a.toLowerCase()
			a = Dg.get(a) || a
			return (b = b.toUpperCase()) ? a + '-' + b : a
		}
		function Eg(a, b) {
			a = Ag(a)
			b = Ag(b)
			return b == a ? 4 : Bg(b, a) ? 3 : Cg(b, a) ? 2 : Bg(a, b) ? 1 : 0
		}
		function Fg(a) {
			return a.language
				? Ag(a.language)
				: a.audio && a.audio.language
				? Ag(a.audio.language)
				: a.video && a.video.language
				? Ag(a.video.language)
				: 'und'
		}
		function Gg(a, b) {
			for (
				var c = Ag(a), d = new Set(), e = r(b), f = e.next();
				!f.done;
				f = e.next()
			)
				d.add(Ag(f.value))
			e = r(d)
			for (f = e.next(); !f.done; f = e.next())
				if (((f = f.value), f == c)) return f
			e = r(d)
			for (f = e.next(); !f.done; f = e.next())
				if (((f = f.value), Bg(f, c))) return f
			e = r(d)
			for (f = e.next(); !f.done; f = e.next())
				if (((f = f.value), Cg(f, c))) return f
			d = r(d)
			for (f = d.next(); !f.done; f = d.next())
				if (((f = f.value), Bg(c, f))) return f
			return null
		}
		var Dg = new Map([
			['aar', 'aa'],
			['abk', 'ab'],
			['afr', 'af'],
			['aka', 'ak'],
			['alb', 'sq'],
			['amh', 'am'],
			['ara', 'ar'],
			['arg', 'an'],
			['arm', 'hy'],
			['asm', 'as'],
			['ava', 'av'],
			['ave', 'ae'],
			['aym', 'ay'],
			['aze', 'az'],
			['bak', 'ba'],
			['bam', 'bm'],
			['baq', 'eu'],
			['bel', 'be'],
			['ben', 'bn'],
			['bih', 'bh'],
			['bis', 'bi'],
			['bod', 'bo'],
			['bos', 'bs'],
			['bre', 'br'],
			['bul', 'bg'],
			['bur', 'my'],
			['cat', 'ca'],
			['ces', 'cs'],
			['cha', 'ch'],
			['che', 'ce'],
			['chi', 'zh'],
			['chu', 'cu'],
			['chv', 'cv'],
			['cor', 'kw'],
			['cos', 'co'],
			['cre', 'cr'],
			['cym', 'cy'],
			['cze', 'cs'],
			['dan', 'da'],
			['deu', 'de'],
			['div', 'dv'],
			['dut', 'nl'],
			['dzo', 'dz'],
			['ell', 'el'],
			['eng', 'en'],
			['epo', 'eo'],
			['est', 'et'],
			['eus', 'eu'],
			['ewe', 'ee'],
			['fao', 'fo'],
			['fas', 'fa'],
			['fij', 'fj'],
			['fin', 'fi'],
			['fra', 'fr'],
			['fre', 'fr'],
			['fry', 'fy'],
			['ful', 'ff'],
			['geo', 'ka'],
			['ger', 'de'],
			['gla', 'gd'],
			['gle', 'ga'],
			['glg', 'gl'],
			['glv', 'gv'],
			['gre', 'el'],
			['grn', 'gn'],
			['guj', 'gu'],
			['hat', 'ht'],
			['hau', 'ha'],
			['heb', 'he'],
			['her', 'hz'],
			['hin', 'hi'],
			['hmo', 'ho'],
			['hrv', 'hr'],
			['hun', 'hu'],
			['hye', 'hy'],
			['ibo', 'ig'],
			['ice', 'is'],
			['ido', 'io'],
			['iii', 'ii'],
			['iku', 'iu'],
			['ile', 'ie'],
			['ina', 'ia'],
			['ind', 'id'],
			['ipk', 'ik'],
			['isl', 'is'],
			['ita', 'it'],
			['jav', 'jv'],
			['jpn', 'ja'],
			['kal', 'kl'],
			['kan', 'kn'],
			['kas', 'ks'],
			['kat', 'ka'],
			['kau', 'kr'],
			['kaz', 'kk'],
			['khm', 'km'],
			['kik', 'ki'],
			['kin', 'rw'],
			['kir', 'ky'],
			['kom', 'kv'],
			['kon', 'kg'],
			['kor', 'ko'],
			['kua', 'kj'],
			['kur', 'ku'],
			['lao', 'lo'],
			['lat', 'la'],
			['lav', 'lv'],
			['lim', 'li'],
			['lin', 'ln'],
			['lit', 'lt'],
			['ltz', 'lb'],
			['lub', 'lu'],
			['lug', 'lg'],
			['mac', 'mk'],
			['mah', 'mh'],
			['mal', 'ml'],
			['mao', 'mi'],
			['mar', 'mr'],
			['may', 'ms'],
			['mkd', 'mk'],
			['mlg', 'mg'],
			['mlt', 'mt'],
			['mon', 'mn'],
			['mri', 'mi'],
			['msa', 'ms'],
			['mya', 'my'],
			['nau', 'na'],
			['nav', 'nv'],
			['nbl', 'nr'],
			['nde', 'nd'],
			['ndo', 'ng'],
			['nep', 'ne'],
			['nld', 'nl'],
			['nno', 'nn'],
			['nob', 'nb'],
			['nor', 'no'],
			['nya', 'ny'],
			['oci', 'oc'],
			['oji', 'oj'],
			['ori', 'or'],
			['orm', 'om'],
			['oss', 'os'],
			['pan', 'pa'],
			['per', 'fa'],
			['pli', 'pi'],
			['pol', 'pl'],
			['por', 'pt'],
			['pus', 'ps'],
			['que', 'qu'],
			['roh', 'rm'],
			['ron', 'ro'],
			['rum', 'ro'],
			['run', 'rn'],
			['rus', 'ru'],
			['sag', 'sg'],
			['san', 'sa'],
			['sin', 'si'],
			['slk', 'sk'],
			['slo', 'sk'],
			['slv', 'sl'],
			['sme', 'se'],
			['smo', 'sm'],
			['sna', 'sn'],
			['snd', 'sd'],
			['som', 'so'],
			['sot', 'st'],
			['spa', 'es'],
			['sqi', 'sq'],
			['srd', 'sc'],
			['srp', 'sr'],
			['ssw', 'ss'],
			['sun', 'su'],
			['swa', 'sw'],
			['swe', 'sv'],
			['tah', 'ty'],
			['tam', 'ta'],
			['tat', 'tt'],
			['tel', 'te'],
			['tgk', 'tg'],
			['tgl', 'tl'],
			['tha', 'th'],
			['tib', 'bo'],
			['tir', 'ti'],
			['ton', 'to'],
			['tsn', 'tn'],
			['tso', 'ts'],
			['tuk', 'tk'],
			['tur', 'tr'],
			['twi', 'tw'],
			['uig', 'ug'],
			['ukr', 'uk'],
			['urd', 'ur'],
			['uzb', 'uz'],
			['ven', 've'],
			['vie', 'vi'],
			['vol', 'vo'],
			['wel', 'cy'],
			['wln', 'wa'],
			['wol', 'wo'],
			['xho', 'xh'],
			['yid', 'yi'],
			['yor', 'yo'],
			['zha', 'za'],
			['zho', 'zh'],
			['zul', 'zu'],
		])
		function Hg(a, b) {
			function c(l) {
				var m = ''
				l.video && (m = Vc(l.video.codecs)[0])
				var n = ''
				l.audio && (n = Vc(l.audio.codecs)[0])
				return m + '-' + n
			}
			var d = Ig(a.variants, b),
				e = new Pb()
			d = r(d)
			for (var f = d.next(); !f.done; f = d.next()) {
				f = f.value
				var g = c(f)
				e.push(g, f)
			}
			var h = null,
				k = Infinity
			Qb(e, function (l, m) {
				for (
					var n = 0, p = 0, t = r(m), v = t.next();
					!v.done;
					v = t.next()
				)
					(n += v.value.bandwidth || 0), ++p
				n /= p
				n < k && ((h = l), (k = n))
			})
			a.variants = a.variants.filter(function (l) {
				return c(l) == h ? !0 : !1
			})
		}
		function Jg(a, b, c) {
			function d(f, g, h) {
				return f >= g && f <= h
			}
			var e = a.video
			return (e &&
				e.width &&
				e.height &&
				(!d(e.width, b.minWidth, Math.min(b.maxWidth, c.width)) ||
					!d(
						e.height,
						b.minHeight,
						Math.min(b.maxHeight, c.height)
					) ||
					!d(e.width * e.height, b.minPixels, b.maxPixels))) ||
				(a &&
					a.video &&
					a.video.frameRate &&
					!d(a.video.frameRate, b.minFrameRate, b.maxFrameRate)) ||
				!d(a.bandwidth, b.minBandwidth, b.maxBandwidth)
				? !1
				: !0
		}
		function Kg(a, b, c) {
			c.variants = c.variants.filter(function (d) {
				if (a && a.L && !Td(a, d)) return !1
				var e = d.audio
				d = d.video
				return (e && !jg(e)) ||
					(d && !jg(d)) ||
					(e && b && b.audio && !Lg(e, b.audio)) ||
					(d && b && b.video && !Lg(d, b.video))
					? !1
					: !0
			})
			c.textStreams = c.textStreams.filter(function (d) {
				return Zf(Sc(d.mimeType, d.codecs))
			})
		}
		function Lg(a, b) {
			return a.mimeType != b.mimeType ||
				a.codecs.split('.')[0] != b.codecs.split('.')[0]
				? !1
				: !0
		}
		function Mg(a) {
			var b = a.audio,
				c = a.video,
				d = b ? b.codecs : null,
				e = c ? c.codecs : null,
				f = []
			e && f.push(e)
			d && f.push(d)
			var g = []
			c && g.push(c.mimeType)
			b && g.push(b.mimeType)
			g = g[0] || null
			var h = []
			b && h.push(b.kind)
			c && h.push(c.kind)
			h = h[0] || null
			var k = new Set()
			if (b)
				for (var l = r(b.roles), m = l.next(); !m.done; m = l.next())
					k.add(m.value)
			if (c)
				for (l = r(c.roles), m = l.next(); !m.done; m = l.next())
					k.add(m.value)
			a = {
				id: a.id,
				active: !1,
				type: 'variant',
				bandwidth: a.bandwidth,
				language: a.language,
				label: null,
				kind: h,
				width: null,
				height: null,
				frameRate: null,
				pixelAspectRatio: null,
				mimeType: g,
				codecs: f.join(', '),
				audioCodec: d,
				videoCodec: e,
				primary: a.primary,
				roles: Array.from(k),
				audioRoles: null,
				videoId: null,
				audioId: null,
				channelsCount: null,
				audioSamplingRate: null,
				audioBandwidth: null,
				videoBandwidth: null,
				originalVideoId: null,
				originalAudioId: null,
				originalTextId: null,
			}
			c &&
				((a.videoId = c.id),
				(a.originalVideoId = c.originalId),
				(a.width = c.width || null),
				(a.height = c.height || null),
				(a.frameRate = c.frameRate || null),
				(a.pixelAspectRatio = c.pixelAspectRatio || null),
				(a.videoBandwidth = c.bandwidth || null))
			b &&
				((a.audioId = b.id),
				(a.originalAudioId = b.originalId),
				(a.channelsCount = b.channelsCount),
				(a.audioSamplingRate = b.audioSamplingRate),
				(a.audioBandwidth = b.bandwidth || null),
				(a.label = b.label),
				(a.audioRoles = b.roles))
			return a
		}
		function Ng(a) {
			return {
				id: a.id,
				active: !1,
				type: 'text',
				bandwidth: 0,
				language: a.language,
				label: a.label,
				kind: a.kind || null,
				width: null,
				height: null,
				frameRate: null,
				pixelAspectRatio: null,
				mimeType: a.mimeType,
				codecs: a.codecs || null,
				audioCodec: null,
				videoCodec: null,
				primary: a.primary,
				roles: a.roles,
				audioRoles: null,
				videoId: null,
				audioId: null,
				channelsCount: null,
				audioSamplingRate: null,
				audioBandwidth: null,
				videoBandwidth: null,
				originalVideoId: null,
				originalAudioId: null,
				originalTextId: a.originalId,
			}
		}
		function Og(a) {
			a.__shaka_id || (a.__shaka_id = Pg++)
			return a.__shaka_id
		}
		function Qg(a) {
			var b = Rg(a)
			b.active = a.enabled
			b.type = 'variant'
			b.originalAudioId = a.id
			'main' == a.kind && (b.primary = !0)
			a.kind && ((b.roles = [a.kind]), (b.audioRoles = [a.kind]))
			return b
		}
		function Rg(a) {
			return {
				id: Og(a),
				active: !1,
				type: '',
				bandwidth: 0,
				language: Ag(a.language),
				label: a.label,
				kind: a.kind,
				width: null,
				height: null,
				frameRate: null,
				pixelAspectRatio: null,
				mimeType: null,
				codecs: null,
				audioCodec: null,
				videoCodec: null,
				primary: !1,
				roles: [],
				audioRoles: null,
				videoId: null,
				audioId: null,
				channelsCount: null,
				audioSamplingRate: null,
				audioBandwidth: null,
				videoBandwidth: null,
				originalVideoId: null,
				originalAudioId: null,
				originalTextId: null,
			}
		}
		function Sg(a) {
			return a.allowedByApplication && a.allowedByKeySystem
		}
		function Tg(a) {
			return a.filter(function (b) {
				return Sg(b)
			})
		}
		function Ig(a, b) {
			var c = a.filter(function (g) {
					return g.audio && g.audio.channelsCount
				}),
				d = new Map()
			c = r(c)
			for (var e = c.next(); !e.done; e = c.next()) {
				e = e.value
				var f = e.audio.channelsCount
				d.has(f) || d.set(f, [])
				d.get(f).push(e)
			}
			c = Array.from(d.keys())
			if (0 == c.length) return a
			e = c.filter(function (g) {
				return g <= b
			})
			return e.length
				? d.get(Math.max.apply(Math, ja(e)))
				: d.get(Math.min.apply(Math, ja(c)))
		}
		function Ug(a, b, c) {
			var d = a,
				e = a.filter(function (h) {
					return h.primary
				})
			e.length && (d = e)
			var f = d.length ? d[0].language : ''
			d = d.filter(function (h) {
				return h.language == f
			})
			if (b) {
				var g = Gg(
					Ag(b),
					a.map(function (h) {
						return h.language
					})
				)
				g &&
					(d = a.filter(function (h) {
						return Ag(h.language) == g
					}))
			}
			if (c) {
				if (((a = Vg(d, c)), a.length)) return a
			} else if (
				((a = d.filter(function (h) {
					return 0 == h.roles.length
				})),
				a.length)
			)
				return a
			a = d
				.map(function (h) {
					return h.roles
				})
				.reduce(Ic, [])
			return a.length ? Vg(d, a[0]) : d
		}
		function Vg(a, b) {
			return a.filter(function (c) {
				return c.roles.includes(b)
			})
		}
		var Pg = 0
		function Wg() {
			var a = this
			this.h = null
			this.c = !1
			this.a = new Qa()
			navigator.connection &&
				navigator.connection.addEventListener('change', function () {
					if (a.i.useNetworkInformation) {
						a.a = new Qa()
						var b = a.chooseVariant()
						b && a.h(b)
					}
				})
			this.b = []
			this.g = 1
			this.j = !1
			this.i = this.f = null
		}
		q = Wg.prototype
		q.stop = function () {
			this.h = null
			this.c = !1
			this.b = []
			this.g = 1
			this.f = null
		}
		q.init = function (a) {
			this.h = a
		}
		q.chooseVariant = function () {
			var a = Xg(this.i.restrictions, this.b),
				b = this.a.getBandwidthEstimate(Yg(this))
			this.b.length && !a.length && ((a = Xg(null, this.b)), (a = [a[0]]))
			var c = a[0] || null
			a = r(hb(a))
			for (var d = a.next(); !d.done; d = a.next()) {
				var e = d.value
				d = e.item
				var f = isNaN(this.g) ? 1 : Math.abs(this.g)
				e =
					(f * (e.next || { bandwidth: Infinity }).bandwidth) /
					this.i.bandwidthUpgradeTarget
				b >= (f * d.bandwidth) / this.i.bandwidthDowngradeTarget &&
					b <= e &&
					(c = d)
			}
			this.f = Date.now()
			return c
		}
		q.enable = function () {
			this.c = !0
		}
		q.disable = function () {
			this.c = !1
		}
		q.segmentDownloaded = function (a, b) {
			var c = this.a
			if (!(16e3 > b)) {
				var d = (8e3 * b) / a,
					e = a / 1e3
				c.a += b
				Oa(c.b, e, d)
				Oa(c.c, e, d)
			}
			if (null != this.f && this.c)
				a: {
					if (!this.j) {
						if (!(128e3 <= this.a.a)) break a
						this.j = !0
					} else if (
						Date.now() - this.f <
						1e3 * this.i.switchInterval
					)
						break a
					c = this.chooseVariant()
					this.a.getBandwidthEstimate(Yg(this))
					c && this.h(c)
				}
		}
		q.getBandwidthEstimate = function () {
			return this.a.getBandwidthEstimate(this.i.defaultBandwidthEstimate)
		}
		q.setVariants = function (a) {
			this.b = a
		}
		q.playbackRateChanged = function (a) {
			this.g = a
		}
		q.configure = function (a) {
			this.i = a
		}
		function Yg(a) {
			var b = a.i.defaultBandwidthEstimate
			navigator.connection &&
				navigator.connection.downlink &&
				a.i.useNetworkInformation &&
				(b = 1e6 * navigator.connection.downlink)
			return b
		}
		function Xg(a, b) {
			a &&
				(b = b.filter(function (c) {
					return Jg(c, a, { width: Infinity, height: Infinity })
				}))
			return b.sort(function (c, d) {
				return c.bandwidth - d.bandwidth
			})
		}
		K('shaka.abr.SimpleAbrManager', Wg)
		Wg.prototype.configure = Wg.prototype.configure
		Wg.prototype.playbackRateChanged = Wg.prototype.playbackRateChanged
		Wg.prototype.setVariants = Wg.prototype.setVariants
		Wg.prototype.getBandwidthEstimate = Wg.prototype.getBandwidthEstimate
		Wg.prototype.segmentDownloaded = Wg.prototype.segmentDownloaded
		Wg.prototype.disable = Wg.prototype.disable
		Wg.prototype.enable = Wg.prototype.enable
		Wg.prototype.chooseVariant = Wg.prototype.chooseVariant
		Wg.prototype.init = Wg.prototype.init
		Wg.prototype.stop = Wg.prototype.stop
		function Zg(a, b) {
			this.a = a
			this.b = new Set([a])
			b = b || []
			for (var c = r(b), d = c.next(); !d.done; d = c.next())
				this.add(d.value)
		}
		Zg.prototype.add = function (a) {
			return $g(this.a, a) ? (this.b.add(a), !0) : !1
		}
		function $g(a, b) {
			var c
			if (
				!(c =
					!!a.audio != !!b.audio ||
					!!a.video != !!b.video ||
					a.language != b.language) &&
				(c = a.audio && b.audio)
			) {
				c = a.audio
				var d = b.audio
				c = !(
					c.channelsCount == d.channelsCount &&
					ah(c, d) &&
					bh(c.roles, d.roles)
				)
			}
			!c &&
				(c = a.video && b.video) &&
				((c = a.video),
				(d = b.video),
				(c = !(ah(c, d) && bh(c.roles, d.roles))))
			return c ? !1 : !0
		}
		Zg.prototype.values = function () {
			return this.b.values()
		}
		function ah(a, b) {
			if (a.mimeType != b.mimeType) return !1
			var c = a.codecs.split(',').map(function (g) {
					return Vc(g)[0]
				}),
				d = b.codecs.split(',').map(function (g) {
					return Vc(g)[0]
				})
			if (c.length != d.length) return !1
			c.sort()
			d.sort()
			for (var e = r(fb(c.length)), f = e.next(); !f.done; f = e.next())
				if (((f = f.value), c[f] != d[f])) return !1
			return !0
		}
		function bh(a, b) {
			var c = new Set(a),
				d = new Set(b)
			c['delete']('main')
			d['delete']('main')
			if (c.size != d.size) return !1
			c = r(c)
			for (var e = c.next(); !e.done; e = c.next())
				if (!d.has(e.value)) return !1
			return !0
		}
		function ch(a) {
			this.a = a
			this.b = new dh(
				a.language,
				'',
				a.audio && a.audio.channelsCount ? a.audio.channelsCount : 0,
				''
			)
		}
		ch.prototype.create = function (a) {
			var b = this,
				c = a.filter(function (d) {
					return $g(b.a, d)
				})
			return c.length ? new Zg(c[0], c) : this.b.create(a)
		}
		function dh(a, b, c, d, e) {
			this.f = a
			this.c = b
			this.a = c
			this.b = void 0 === d ? '' : d
			this.g = void 0 === e ? '' : e
		}
		dh.prototype.create = function (a) {
			var b = []
			b = eh(a, this.f)
			var c = a.filter(function (d) {
				return d.primary
			})
			b = b.length ? b : c.length ? c : a
			this.c && ((a = fh(b, this.c, this.g)), a.length && (b = a))
			this.a && ((a = Ig(b, this.a)), a.length && (b = a))
			this.b && ((a = gh(b, this.b)), a.length && (b = a))
			a = new Zg(b[0])
			b = r(b)
			for (c = b.next(); !c.done; c = b.next())
				(c = c.value), $g(a.a, c) && a.add(c)
			return a
		}
		function eh(a, b) {
			var c = Ag(b),
				d = Gg(
					c,
					a.map(function (e) {
						return Fg(e)
					})
				)
			return d
				? a.filter(function (e) {
						return d == Fg(e)
				  })
				: []
		}
		function fh(a, b, c) {
			return a.filter(function (d) {
				if (c) {
					var e = d[c]
					return e && e.roles.includes(b)
				}
				e = d.audio
				d = d.video
				return (e && e.roles.includes(b)) || (d && d.roles.includes(b))
			})
		}
		function gh(a, b) {
			return a.filter(function (c) {
				return c.audio
					? c.audio.label.toLowerCase() == b.toLowerCase()
					: !1
			})
		}
		function hh() {
			this.a = jh
			this.b = new Map().set(jh, 2).set(kh, 1)
		}
		function lh(a, b, c) {
			a.b.set(jh, c).set(kh, b)
		}
		var kh = 0,
			jh = 1
		function mh() {}
		function nh(a, b, c, d) {
			var e, f, g, h
			return J(function (k) {
				if (1 == k.a) {
					if (d && (e = oh[d.toLowerCase()])) return k['return'](e)
					if ((f = ph(a))) if ((g = qh[f])) return k['return'](g)
					return d ? k.o(2) : u(k, rh(a, b, c), 3)
				}
				if (2 != k.a && (d = k.b) && (h = oh[d])) return k['return'](h)
				throw new L(2, 4, 4e3, a)
			})
		}
		function rh(a, b, c) {
			var d, e, f
			return J(function (g) {
				if (1 == g.a)
					return (
						(d = dc([a], c)),
						(d.method = 'HEAD'),
						u(g, b.request(0, d).promise, 2)
					)
				e = g.b
				f = e.headers['content-type']
				return g['return'](f ? f.toLowerCase().split(';').shift() : '')
			})
		}
		function ph(a) {
			a = new jb(a).oa.split('/').pop().split('.')
			return 1 == a.length ? '' : a.pop().toLowerCase()
		}
		K('shaka.media.ManifestParser', mh)
		mh.unregisterParserByMime = function (a) {
			delete oh[a]
		}
		mh.registerParserByMime = function (a, b) {
			oh[a] = b
		}
		mh.registerParserByExtension = function (a, b) {
			qh[a] = b
		}
		var oh = {},
			qh = {}
		function sh(a, b, c) {
			this.a = a
			this.ca = b
			this.Y = c
		}
		sh.prototype.Tc = function () {
			return this.ca
		}
		sh.prototype.Sc = function () {
			return this.Y
		}
		K('shaka.media.InitSegmentReference', sh)
		sh.prototype.getEndByte = sh.prototype.Sc
		sh.prototype.getStartByte = sh.prototype.Tc
		function th(a, b, c, d, e, f, g, h, k, l) {
			l = void 0 === l ? [] : l
			this.startTime = a
			this.endTime = b
			this.a = c
			this.ca = d
			this.Y = e
			this.c = f
			this.timestampOffset = g
			this.appendWindowStart = h
			this.appendWindowEnd = k
			this.b = l
		}
		th.prototype.He = function () {
			return this.startTime
		}
		th.prototype.ve = function () {
			return this.endTime
		}
		th.prototype.Tc = function () {
			return this.ca
		}
		th.prototype.Sc = function () {
			return this.Y
		}
		K('shaka.media.SegmentReference', th)
		th.prototype.getEndByte = th.prototype.Sc
		th.prototype.getStartByte = th.prototype.Tc
		th.prototype.getEndTime = th.prototype.ve
		th.prototype.getStartTime = th.prototype.He
		function T(a, b, c) {
			this.f = a
			this.rc = b
			this.h = this.g = Infinity
			this.a = 1
			this.b = this.c = null
			this.j = 0
			this.l = !0
			this.u = 0
			this.w = void 0 === c ? !0 : c
			this.B = 0
		}
		q = T.prototype
		q.getDuration = function () {
			return this.g
		}
		q.Ae = function () {
			return this.a
		}
		q.Da = function (a) {
			this.g = a
		}
		q.Ge = function () {
			return this.f
		}
		q.$d = function (a) {
			this.j = a
		}
		q.Ub = function (a) {
			this.l = a
		}
		q.vd = function (a) {
			this.h = a
		}
		q.jf = function (a) {
			this.rc = a
		}
		q.ue = function () {
			return this.rc
		}
		q.ub = function (a) {
			if (0 != a.length) {
				var b = a[a.length - 1].endTime
				this.ed(a[0].startTime)
				this.a = a.reduce(function (c, d) {
					return Math.max(c, d.endTime - d.startTime)
				}, this.a)
				this.b = Math.max(this.b, b)
				null != this.f &&
					this.w &&
					(this.f = (Date.now() + this.j) / 1e3 - this.b - this.a)
			}
		}
		q.ed = function (a) {
			this.c = null == this.c ? a : Math.min(this.c, a)
		}
		q.dd = function (a) {
			this.a = Math.max(this.a, a)
		}
		q.offset = function (a) {
			null != this.c && (this.c += a)
			null != this.b && (this.b += a)
		}
		q.T = function () {
			return Infinity == this.g && !this.l
		}
		q.ab = function () {
			return Infinity != this.g && !this.l
		}
		q.qb = function () {
			return Math.max(this.u, this.Ya() - this.h)
		}
		q.ae = function (a) {
			this.u = a
		}
		q.Ya = function () {
			return this.T() || this.ab()
				? Math.min(
						Math.max(
							0,
							(Date.now() + this.j) / 1e3 - this.a - this.f
						) + this.B,
						this.g
				  )
				: this.g
		}
		q.Lb = function (a) {
			var b = Math.max(this.c, this.u)
			return Infinity == this.h
				? b
				: Math.max(b, Math.min(this.Ya() - this.h + a, this.Ja()))
		}
		q.pb = function () {
			return this.Lb(0)
		}
		q.Ja = function () {
			return Math.max(
				0,
				this.Ya() - (this.T() || this.ab() ? this.rc : 0)
			)
		}
		q.de = function () {
			return null == this.f || (null != this.b && this.w) ? !1 : !0
		}
		q.Zd = function (a) {
			this.B = a
		}
		K('shaka.media.PresentationTimeline', T)
		T.prototype.setAvailabilityTimeOffset = T.prototype.Zd
		T.prototype.usingPresentationStartTime = T.prototype.de
		T.prototype.getSeekRangeEnd = T.prototype.Ja
		T.prototype.getSeekRangeStart = T.prototype.pb
		T.prototype.getSafeSeekRangeStart = T.prototype.Lb
		T.prototype.getSegmentAvailabilityEnd = T.prototype.Ya
		T.prototype.setUserSeekStart = T.prototype.ae
		T.prototype.getSegmentAvailabilityStart = T.prototype.qb
		T.prototype.isInProgress = T.prototype.ab
		T.prototype.isLive = T.prototype.T
		T.prototype.offset = T.prototype.offset
		T.prototype.notifyMaxSegmentDuration = T.prototype.dd
		T.prototype.notifyMinSegmentStartTime = T.prototype.ed
		T.prototype.notifySegments = T.prototype.ub
		T.prototype.getDelay = T.prototype.ue
		T.prototype.setDelay = T.prototype.jf
		T.prototype.setSegmentAvailabilityDuration = T.prototype.vd
		T.prototype.setStatic = T.prototype.Ub
		T.prototype.setClockOffset = T.prototype.$d
		T.prototype.getPresentationStartTime = T.prototype.Ge
		T.prototype.setDuration = T.prototype.Da
		T.prototype.getMaxSegmentDuration = T.prototype.Ae
		T.prototype.getDuration = T.prototype.getDuration
		function uh(a, b) {
			this.g = a
			this.h = vh(a)
			this.a = a.a.currentTime
			this.f = Date.now() / 1e3
			this.b = !1
			this.j = b
			this.c = function () {}
		}
		uh.prototype.release = function () {
			this.g = null
			this.c = function () {}
		}
		function wh(a, b) {
			a.c = b
		}
		function xh(a) {
			this.a = a
		}
		function vh(a) {
			if (a.a.paused || 0 == a.a.playbackRate || 0 == a.a.buffered.length)
				var b = !1
			else
				a: {
					b = a.a.currentTime
					a = r(Pf(a.a.buffered))
					for (var c = a.next(); !c.done; c = a.next())
						if (
							((c = c.value),
							!(b < c.start - 0.1 || b > c.end - 0.5))
						) {
							b = !0
							break a
						}
					b = !1
				}
			return b
		}
		function yh(a, b, c, d, e) {
			var f = this
			this.a = a
			this.w = b
			this.i = c
			this.u = e
			this.b = new mc()
			this.j = !1
			this.l = a.readyState
			this.f = !1
			this.c = d
			this.h = !1
			this.b.m(a, 'waiting', function () {
				return zh(f)
			})
			this.g = new M(function () {
				zh(f)
			}).ta(0.25)
		}
		yh.prototype.release = function () {
			this.b && (this.b.release(), (this.b = null))
			null != this.g && (this.g.stop(), (this.g = null))
			this.c && (this.c.release(), (this.c = null))
			this.a = this.w = this.u = null
		}
		yh.prototype.hd = function () {
			this.h = !0
			zh(this)
		}
		function zh(a) {
			if (0 != a.a.readyState) {
				if (a.a.seeking) {
					if (!a.j) return
				} else a.j = !1
				if (!a.a.paused) {
					a.a.readyState != a.l &&
						((a.f = !1), (a.l = a.a.readyState))
					var b
					if (!(b = !a.c)) {
						b = a.c
						var c = b.g,
							d = vh(c),
							e = c.a.currentTime,
							f = Date.now() / 1e3
						if (b.a != e || b.h != d)
							(b.f = f), (b.a = e), (b.h = d), (b.b = !1)
						e = f - b.f
						if ((d = e >= b.j && d && !b.b))
							b.c(b.a, e), (b.b = !0), (b.a = c.a.currentTime)
						b = !d
					}
					if (b) {
						var g = a.i.smallGapLimit
						e = a.a.currentTime
						b = a.a.buffered
						c = Qf(b, e)
						if (
							!(
								null == c ||
								(0 == c && !a.h) ||
								((d = b.start(c)), d >= a.w.Ja())
							)
						) {
							f = d - e
							g = f <= g
							var h = !1
							0.001 > f ||
								(g ||
									a.f ||
									((a.f = !0),
									(e = new N('largegap', {
										currentTime: e,
										gapSize: f,
									})),
									(e.cancelable = !0),
									a.u(e),
									a.i.jumpLargeGaps &&
										!e.defaultPrevented &&
										(h = !0)),
								!g && !h) ||
								(0 != c && b.end(c - 1), (a.a.currentTime = d))
						}
					}
				}
			}
		}
		function Ah(a, b, c, d) {
			b == HTMLMediaElement.HAVE_NOTHING || a.readyState >= b
				? d()
				: ((b = Bh.get(b)), c.ma(a, b, d))
		}
		var Bh = new Map([
			[HTMLMediaElement.HAVE_METADATA, 'loadedmetadata'],
			[HTMLMediaElement.HAVE_CURRENT_DATA, 'loadeddata'],
			[HTMLMediaElement.HAVE_FUTURE_DATA, 'canplay'],
			[HTMLMediaElement.HAVE_ENOUGH_DATA, 'canplaythrough'],
		])
		function Ch(a, b, c) {
			var d = this
			this.a = a
			this.g = b
			this.f = c
			this.h = !1
			this.b = new mc()
			this.c = new Dh(a)
			Ah(this.a, HTMLMediaElement.HAVE_METADATA, this.b, function () {
				Eh(d, d.f)
			})
		}
		Ch.prototype.release = function () {
			this.b && (this.b.release(), (this.b = null))
			null != this.c && (this.c.release(), (this.c = null))
			this.g = function () {}
			this.a = null
		}
		function Fh(a) {
			return a.h ? a.a.currentTime : a.f
		}
		function Gh(a, b) {
			0 < a.a.readyState
				? Hh(a.c, b)
				: Ah(a.a, HTMLMediaElement.HAVE_METADATA, a.b, function () {
						Eh(a, a.f)
				  })
		}
		function Eh(a, b) {
			0.001 > Math.abs(a.a.currentTime - b)
				? Ih(a)
				: (a.b.ma(a.a, 'seeking', function () {
						Ih(a)
				  }),
				  Hh(a.c, 0 == a.a.currentTime ? b : a.a.currentTime))
		}
		function Ih(a) {
			a.h = !0
			a.b.m(a.a, 'seeking', function () {
				return a.g()
			})
		}
		function Dh(a) {
			var b = this
			this.b = a
			this.h = 10
			this.g = this.f = this.c = 0
			this.a = new M(function () {
				0 >= b.c
					? b.a.stop()
					: b.b.currentTime != b.f
					? b.a.stop()
					: ((b.b.currentTime = b.g), b.c--)
			})
		}
		Dh.prototype.release = function () {
			this.a && (this.a.stop(), (this.a = null))
			this.b = null
		}
		function Hh(a, b) {
			a.f = a.b.currentTime
			a.g = b
			a.c = a.h
			a.b.currentTime = b
			a.a.ta(0.1)
		}
		function Jh(a) {
			function b() {
				null == c.c
					? (c.f = !0)
					: (c.b.ma(c.a, 'seeking', function () {
							c.f = !0
					  }),
					  (c.a.currentTime = Math.max(0, c.a.currentTime + c.c)))
			}
			var c = this
			this.a = a
			this.f = !1
			this.c = null
			this.b = new mc()
			Ah(this.a, HTMLMediaElement.HAVE_CURRENT_DATA, this.b, function () {
				b()
			})
		}
		Jh.prototype.release = function () {
			this.b && (this.b.release(), (this.b = null))
			this.a = null
		}
		Jh.prototype.l = function (a) {
			this.c = this.f ? this.c : a
		}
		Jh.prototype.g = function () {
			return (this.f ? this.a.currentTime : this.c) || 0
		}
		Jh.prototype.u = function () {}
		function Kh(a, b, c, d, e, f) {
			var g = this
			this.c = a
			this.a = b.presentationTimeline
			this.B = b.minBufferTime || 0
			this.i = c
			this.w = e
			this.j = null
			this.f = new yh(a, b.presentationTimeline, c, Lh(a, c), f)
			this.b = new Ch(
				a,
				function () {
					a: {
						var h = g.f
						h.j = !0
						h.h = !1
						h.f = !1
						var k = Fh(g.b)
						h = Mh(g, k)
						if (
							0.001 < Math.abs(h - k) &&
							((k = Date.now() / 1e3), !g.j || g.j < k - 1)
						) {
							g.j = k
							Gh(g.b, h)
							h = void 0
							break a
						}
						g.w()
						h = void 0
					}
					return h
				},
				Nh(this, d)
			)
			this.h = new M(function () {
				if (0 != g.c.readyState && !g.c.paused) {
					var h = Fh(g.b),
						k = g.a.pb(),
						l = g.a.Ja()
					3 > l - k && (k = l - 3)
					h < k && ((h = Mh(g, h)), (g.c.currentTime = h))
				}
			}).ta(0.25)
		}
		Kh.prototype.release = function () {
			this.b && (this.b.release(), (this.b = null))
			this.f && (this.f.release(), (this.f = null))
			this.h && (this.h.stop(), (this.h = null))
			this.c = this.b = this.a = this.i = null
			this.w = function () {}
		}
		Kh.prototype.l = function (a) {
			Gh(this.b, a)
		}
		Kh.prototype.g = function () {
			var a = Fh(this.b)
			return 0 < this.c.readyState && !this.c.paused ? Oh(this, a) : a
		}
		function Nh(a, b) {
			null == b
				? (b = Infinity > a.a.getDuration() ? a.a.pb() : a.a.Ja())
				: 0 > b && (b = a.a.Ja() + b)
			return Ph(a, Oh(a, b))
		}
		Kh.prototype.u = function () {
			this.f.hd()
		}
		function Ph(a, b) {
			var c = a.a.getDuration()
			return b >= c ? c - a.i.durationBackoff : b
		}
		function Mh(a, b) {
			var c = Math.max(a.B, a.i.rebufferingGoal),
				d = a.i.safeSeekOffset,
				e = a.a.pb(),
				f = a.a.Ja(),
				g = a.a.getDuration()
			3 > f - e && (e = f - 3)
			var h = a.a.Lb(c),
				k = a.a.Lb(d)
			c = a.a.Lb(c + d)
			return b >= g
				? Ph(a, b)
				: b > f
				? f
				: b < e
				? Nf(a.c.buffered, k)
					? k
					: c
				: b >= h || Nf(a.c.buffered, b)
				? b
				: c
		}
		function Oh(a, b) {
			var c = a.a.pb()
			if (b < c) return c
			c = a.a.Ja()
			return b > c ? c : b
		}
		function Lh(a, b) {
			if (!b.stallEnabled) return null
			var c = b.stallSkip,
				d = new uh(new xh(a), b.stallThreshold)
			wh(d, function () {
				c ? (a.currentTime += c) : (a.pause(), a.play())
			})
			return d
		}
		function Qh(a) {
			this.a = a
			this.b = null
			this.c = 0
		}
		q = Qh.prototype
		q.destroy = function () {
			Ec(
				'shaka.media.SegmentIndex',
				'Please use release() instead of destroy().'
			)
			this.release()
			return Promise.resolve()
		}
		q.release = function () {
			this.a = []
			this.b && this.b.stop()
			this.b = null
		}
		q.find = function (a) {
			for (var b = this.a.length - 1; 0 <= b; --b) {
				var c = this.a[b]
				if (a >= c.startTime && a < c.endTime) return b + this.c
			}
			return this.a.length && a < this.a[0].startTime ? this.c : null
		}
		q.get = function (a) {
			if (0 == this.a.length) return null
			a -= this.c
			return 0 > a || a >= this.a.length ? null : this.a[a]
		}
		q.offset = function (a) {
			for (var b = r(this.a), c = b.next(); !c.done; c = b.next())
				(c = c.value),
					(c.startTime += a),
					(c.endTime += a),
					(c.timestampOffset += a)
		}
		q.sb = function (a) {
			a.length &&
				((this.a = this.a.filter(function (b) {
					return b.startTime < a[0].startTime
				})),
				this.a.push.apply(this.a, ja(a)))
		}
		q.Wa = function (a) {
			var b = this.a.length
			this.a = this.a.filter(function (c) {
				return c.endTime > a
			})
			this.c += b - this.a.length
		}
		q.Pa = function (a, b) {
			for (; this.a.length; )
				if (this.a[this.a.length - 1].startTime >= b) this.a.pop()
				else break
			for (; this.a.length; )
				if (this.a[0].endTime <= a) this.a.shift(), this.c++
				else break
			if (0 != this.a.length) {
				var c = this.a[this.a.length - 1]
				this.a[this.a.length - 1] = new th(
					c.startTime,
					b,
					c.a,
					c.ca,
					c.Y,
					c.c,
					c.timestampOffset,
					c.appendWindowStart,
					c.appendWindowEnd
				)
			}
		}
		q.uc = function (a, b) {
			var c = this
			this.b && this.b.stop()
			this.b = new M(function () {
				var d = b()
				c.a.push.apply(c.a, ja(d))
				0 == c.a.length && (c.b.stop(), (c.b = null))
			})
			this.b.ta(a)
		}
		Qh.prototype[Symbol.iterator] = function () {
			return new Rh(this)
		}
		function Sh(a, b, c) {
			return new Qh([
				new th(
					a,
					a + b,
					function () {
						return c
					},
					0,
					null,
					null,
					a,
					a,
					a + b
				),
			])
		}
		K('shaka.media.SegmentIndex', Qh)
		Qh.forSingleSegment = Sh
		Qh.prototype.updateEvery = Qh.prototype.uc
		Qh.prototype.fit = Qh.prototype.Pa
		Qh.prototype.evict = Qh.prototype.Wa
		Qh.prototype.merge = Qh.prototype.sb
		Qh.prototype.offset = Qh.prototype.offset
		Qh.prototype.get = Qh.prototype.get
		Qh.prototype.find = Qh.prototype.find
		Qh.prototype.release = Qh.prototype.release
		Qh.prototype.destroy = Qh.prototype.destroy
		function Rh(a) {
			this.c = a
			this.a = (a = this.c.find(0)) ? a - 1 : -1
			this.b = -1
		}
		Rh.prototype.seek = function (a) {
			var b = this.c.find(a)
			if (null == b) return (this.a = Math.pow(2, 31)), null
			this.a = b
			if ((b = this.c.get(this.a)) && 0 < b.b.length)
				for (var c = b.b, d = c.length - 1; 0 <= d; --d) {
					var e = c[d]
					if (a >= e.startTime && a < e.endTime) {
						this.b = d
						b = e
						break
					}
				}
			return b
		}
		Rh.prototype.current = function () {
			var a = this.c.get(this.a)
			a &&
				0 < a.b.length &&
				a.a().length &&
				this.b >= a.b.length &&
				(this.a++, (this.b = 0), (a = this.c.get(this.a)))
			return a && 0 < a.b.length ? a.b[this.b] : a
		}
		Rh.prototype.next = function () {
			var a = this.c.get(this.a)
			a && 0 < a.b.length
				? (this.b++,
				  a.a().length &&
						this.b == a.b.length &&
						(this.a++, (this.b = 0)))
				: (this.a++, (this.b = 0))
			a = this.current()
			return { value: a, done: !a }
		}
		K('shaka.media.SegmentIterator', Rh)
		Rh.prototype.next = Rh.prototype.next
		Rh.prototype.current = Rh.prototype.current
		Rh.prototype.seek = Rh.prototype.seek
		function Th() {
			Qh.call(this, [])
			this.f = []
		}
		ra(Th, Qh)
		q = Th.prototype
		q.clone = function () {
			var a = new Th()
			a.f = this.f.slice()
			return a
		}
		q.release = function () {
			for (var a = r(this.f), b = a.next(); !b.done; b = a.next())
				b.value.release()
			this.f = []
		}
		q.find = function (a) {
			for (
				var b = 0, c = r(this.f), d = c.next();
				!d.done;
				d = c.next()
			) {
				d = d.value
				var e = d.find(a)
				if (null != e) return e + b
				b += d.c + d.a.length
			}
			return null
		}
		q.get = function (a) {
			for (
				var b = 0, c = r(this.f), d = c.next();
				!d.done;
				d = c.next()
			) {
				d = d.value
				var e = d.get(a - b)
				if (e) return e
				b += d.c + d.a.length
			}
			return null
		}
		q.offset = function () {}
		q.sb = function () {}
		q.Wa = function () {}
		q.Pa = function () {}
		q.uc = function () {}
		K('shaka.media.MetaSegmentIndex', Th)
		Th.prototype.updateEvery = Th.prototype.uc
		Th.prototype.fit = Th.prototype.Pa
		Th.prototype.evict = Th.prototype.Wa
		Th.prototype.merge = Th.prototype.sb
		Th.prototype.offset = Th.prototype.offset
		Th.prototype.get = Th.prototype.get
		Th.prototype.find = Th.prototype.find
		Th.prototype.release = Th.prototype.release
		function Uh(a) {
			var b = this
			this.a = a
			this.f = !1
			this.b = this.a.mc()
			this.c = new M(function () {
				b.a.Pd(0.25 * b.b)
			})
		}
		Uh.prototype.release = function () {
			this.c && (this.c.stop(), (this.c = null))
			this.a = null
		}
		Uh.prototype.set = function (a) {
			this.b = a
			Vh(this)
		}
		function Vh(a) {
			a.c.stop()
			var b = a.f ? 0 : a.b
			if (0 <= b)
				try {
					a.a.mc() != b && a.a.ud(b)
					return
				} catch (c) {}
			a.c.ta(0.25)
			0 != a.a.mc() && a.a.ud(0)
		}
		function Wh(a) {
			var b = this
			this.c = a
			this.a = new Set()
			this.b = new M(function () {
				Xh(b, !1)
			}).ta(0.25)
		}
		Wh.prototype.release = function () {
			this.b.stop()
			for (var a = r(this.a), b = a.next(); !b.done; b = a.next())
				b.value.release()
			this.a.clear()
		}
		function Xh(a, b) {
			for (var c = r(a.a), d = c.next(); !d.done; d = c.next()) {
				d = d.value
				for (
					var e = a.c.currentTime, f = b, g = r(d.g.a), h = g.next();
					!h.done;
					h = g.next()
				) {
					h = h.value
					var k = d.f.get(h),
						l = e < h.startTime ? Yh : e > h.endTime ? Zh : $h
					d.f.set(h, l)
					for (var m = r(d.h), n = m.next(); !n.done; n = m.next())
						(n = n.value), n.hb == k && n.gb == l && n.$a(h, f)
				}
			}
		}
		function ai(a) {
			var b = this
			this.b = function () {}
			this.a = new Set()
			this.f = a
			this.c = new M(function () {
				for (
					var c = b.f(), d = r(b.a), e = d.next();
					!e.done;
					e = d.next()
				)
					(e = e.value), e.endTime < c.start && b.a['delete'](e)
			}).ta(2)
		}
		ai.prototype.release = function () {
			this.b = function () {}
			this.a.clear()
			this.c.stop()
		}
		function bi(a, b) {
			a.b = b
		}
		function ci(a) {
			var b = this
			this.g = a
			this.f = new Map()
			this.a = function () {}
			this.b = function () {}
			this.c = function () {}
			this.h = [
				{
					hb: null,
					gb: $h,
					$a: function (c, d) {
						return b.a(c, d)
					},
				},
				{
					hb: Yh,
					gb: $h,
					$a: function (c, d) {
						return b.a(c, d)
					},
				},
				{
					hb: Zh,
					gb: $h,
					$a: function (c, d) {
						return b.a(c, d)
					},
				},
				{
					hb: $h,
					gb: Yh,
					$a: function (c, d) {
						return b.b(c, d)
					},
				},
				{
					hb: $h,
					gb: Zh,
					$a: function (c, d) {
						return b.b(c, d)
					},
				},
				{
					hb: Yh,
					gb: Zh,
					$a: function (c, d) {
						return b.c(c, d)
					},
				},
				{
					hb: Zh,
					gb: Yh,
					$a: function (c, d) {
						return b.c(c, d)
					},
				},
			]
		}
		ci.prototype.release = function () {
			this.g = null
			this.f.clear()
			this.a = function () {}
			this.b = function () {}
			this.c = function () {}
		}
		function di(a, b, c, d) {
			a.a = b
			a.b = c
			a.c = d
		}
		var Yh = 1,
			$h = 2,
			Zh = 3
		function ei(a, b, c, d, e) {
			a = dc(a, d, e)
			if (0 != b || null != c)
				a.headers.Range = c
					? 'bytes=' + b + '-' + c
					: 'bytes=' + b + '-'
			return a
		}
		function fi(a, b) {
			var c = this
			this.v = b
			this.s = a
			this.i = null
			this.f = 1
			this.c = this.b = null
			this.a = new Map()
			this.h = !1
			this.j = null
			this.g = !1
			this.C = new kc(function () {
				return gi(c)
			})
		}
		fi.prototype.destroy = function () {
			return this.C.destroy()
		}
		function gi(a) {
			var b, c, d, e
			return J(function (f) {
				if (1 == f.a) {
					b = []
					c = r(a.a.values())
					for (d = c.next(); !d.done; d = c.next())
						(e = d.value), hi(e), b.push(ii(e))
					return u(f, Promise.all(b), 2)
				}
				a.a.clear()
				a.v = null
				a.s = null
				a.i = null
				x(f)
			})
		}
		fi.prototype.configure = function (a) {
			this.i = a
			this.j = new xb(
				{
					maxAttempts: Math.max(a.retryParameters.maxAttempts, 2),
					baseDelay: a.retryParameters.baseDelay,
					backoffFactor: a.retryParameters.backoffFactor,
					fuzzFactor: a.retryParameters.fuzzFactor,
					timeout: 0,
				},
				!0
			)
		}
		fi.prototype.start = function () {
			var a = this
			return J(function (b) {
				if (1 == b.a) return u(b, ji(a), 2)
				lc(a.C)
				a.h = !0
				x(b)
			})
		}
		function ki(a, b) {
			var c, d, e, f, g, h
			J(function (k) {
				switch (k.a) {
					case 1:
						return (c = Oc), z(k, 2), u(k, ug(a.v.K, c.da), 4)
					case 4:
						wa(k, 3)
						break
					case 2:
						if (((d = C(k)), a.v)) a.v.onError(d)
					case 3:
						e = Sc(b.mimeType, b.codecs)
						kg(a.v.K, e)
						f = a.v.K.h
						if ((g = f.isTextVisible() || a.i.alwaysStreamText))
							(h = li(b)), a.a.set(c.da, h), mi(a, h, 0)
						x(k)
				}
			})
		}
		function ni(a) {
			var b = a.a.get('text')
			b && (hi(b), ii(b)['catch'](function () {}), a.a['delete']('text'))
			a.c = null
		}
		function oi(a, b) {
			var c = a.a.get('video')
			if (c) {
				var d = c.stream
				if (d)
					if (b) {
						var e = d.trickModeVideo
						e && !c.eb && (pi(a, e, !1, 0, !1), (c.eb = d))
					} else if ((d = c.eb)) (c.eb = null), pi(a, d, !0, 0, !1)
			}
		}
		function qi(a, b, c, d) {
			c = void 0 === c ? !1 : c
			d = void 0 === d ? 0 : d
			a.b = b
			a.h &&
				(b.video && pi(a, b.video, c, d, !1),
				b.audio && pi(a, b.audio, c, d, !1))
		}
		function ri(a, b) {
			a.c = b
			a.h && pi(a, b, !0, 0, !1)
		}
		function pi(a, b, c, d, e) {
			var f = a.a.get(b.type)
			f || 'text' != b.type
				? f &&
				  (f.eb &&
						(b.trickModeVideo
							? ((f.eb = b), (b = b.trickModeVideo))
							: (f.eb = null)),
				  f.stream != b || e) &&
				  ('text' == b.type && kg(a.v.K, Sc(b.mimeType, b.codecs)),
				  (f.stream = b),
				  (f.Ca = null),
				  c &&
						(f.Gb
							? (f.xc = !0)
							: f.Ra
							? ((f.Ab = !0), (f.ic = d), (f.xc = !0))
							: (hi(f),
							  si(a, f, !0, d)['catch'](function (g) {
									if (a.v) a.v.onError(g)
							  }))),
				  ti(a, f)['catch'](function (g) {
						if (a.v) a.v.onError(g)
				  }))
				: ki(a, b)
		}
		function ti(a, b) {
			var c, d
			return J(function (e) {
				if (1 == e.a) {
					if (!b.na) return e['return']()
					c = b.stream
					d = b.na
					return c.segmentIndex
						? e.o(2)
						: u(e, c.createSegmentIndex(), 2)
				}
				if (b.na != d || b.stream != c) return e['return']()
				b.Ca = b.stream.segmentIndex[Symbol.iterator]()
				var f = a.v.lc()
				var g = pg(a.v.K, b.type),
					h = ui(a, b, f, g),
					k = h ? (h.Y ? h.Y - h.ca : null) : null
				h &&
					!k &&
					(k =
						((h.endTime - h.startTime) *
							(b.stream.bandwidth || 0)) /
						8)
				k
					? ((h = h.c) && (k += (h.Y ? h.Y - h.ca : null) || 0),
					  (h = a.v.getBandwidthEstimate()),
					  (f =
							(8 * k) / h <
								(g || 0) -
									f -
									Math.max(
										a.s.minBufferTime || 0,
										a.i.rebufferingGoal
									) || b.na.b.a > k
								? !0
								: !1))
					: (f = !1)
				f && b.na.abort()
				x(e)
			})
		}
		function vi(a, b) {
			b.Gb ||
				b.Ab ||
				(b.Ra
					? ((b.Ab = !0), (b.ic = 0))
					: null == ng(a.v.K, b.type)
					? null == b.Fa && mi(a, b, 0)
					: (hi(b),
					  si(a, b, !1, 0)['catch'](function (c) {
							if (a.v) a.v.onError(c)
					  })))
		}
		function ji(a) {
			var b, c, d, e, f, g, h, k, l, m
			return J(function (n) {
				if (1 == n.a) {
					b = Oc
					if (!a.b) throw new L(2, 5, 5006)
					c = new Map()
					d = new Set()
					a.b.audio && (c.set(b.kb, a.b.audio), d.add(a.b.audio))
					a.b.video && (c.set(b.Ga, a.b.video), d.add(a.b.video))
					a.c && (c.set(b.da, a.c), d.add(a.c))
					e = a.v.K
					f = a.i.forceTransmuxTS
					return u(n, e.init(c, f), 2)
				}
				lc(a.C)
				var p = a.s.presentationTimeline.getDuration()
				Infinity > p ? a.v.K.Da(p) : a.v.K.Da(Math.pow(2, 32))
				g = r(c.keys())
				for (h = g.next(); !h.done; h = g.next())
					(k = h.value),
						(l = c.get(k)),
						a.a.has(k) || ((m = li(l)), a.a.set(k, m), mi(a, m, 0))
				x(n)
			})
		}
		function li(a) {
			var b = a.segmentIndex ? a.segmentIndex[Symbol.iterator]() : null
			return {
				stream: a,
				type: a.type,
				Pb: null,
				Ca: b,
				Qa: null,
				Zc: null,
				$c: null,
				Yc: null,
				Xc: null,
				eb: null,
				endOfStream: !1,
				Ra: !1,
				Fa: null,
				Ab: !1,
				ic: 0,
				xc: !1,
				Gb: !1,
				md: !1,
				Nb: !1,
				na: null,
			}
		}
		fi.prototype.Qb = function (a) {
			var b = this,
				c,
				d,
				e,
				f
			return J(function (g) {
				switch (g.a) {
					case 1:
						lc(b.C)
						if (a.Ra || null == a.Fa || a.Gb) return g['return']()
						a.Fa = null
						if (!a.Ab) {
							g.o(2)
							break
						}
						return u(g, si(b, a, a.xc, a.ic), 3)
					case 3:
						return g['return']()
					case 2:
						if (a.stream.segmentIndex) {
							g.o(4)
							break
						}
						c = a.stream
						return u(g, a.stream.createSegmentIndex(), 5)
					case 5:
						if (c != a.stream)
							return null == a.Fa && mi(b, a, 0), g['return']()
					case 4:
						a.Ca ||
							(a.Ca = a.stream.segmentIndex[Symbol.iterator]())
						try {
							;(d = wi(b, a)),
								null != d && (mi(b, a, d), (a.Nb = !1))
						} catch (h) {
							return xi(b, h), g['return']()
						}
						e = Array.from(b.a.values())
						if (
							!b.h ||
							!e.every(function (h) {
								return h.endOfStream
							})
						) {
							g.o(0)
							break
						}
						return u(g, b.v.K.endOfStream(), 7)
					case 7:
						lc(b.C),
							(f = b.v.K.getDuration()),
							0 != f &&
								f < b.s.presentationTimeline.getDuration() &&
								b.s.presentationTimeline.Da(f),
							x(g)
				}
			})
		}
		function wi(a, b) {
			if (yi(b)) return tg(a.v.K, b.stream.originalId || ''), null
			var c = a.v.lc(),
				d = b.Pb && b.Qa ? b.Qa.endTime : c,
				e = qg(a.v.K, b.type, c),
				f =
					Math.max(
						a.s.minBufferTime || 0,
						a.i.rebufferingGoal,
						a.i.bufferingGoal
					) * a.f
			if (d >= a.s.presentationTimeline.getDuration())
				return (
					(b.endOfStream = !0),
					'video' == b.type &&
						(c = a.a.get('text')) &&
						yi(c) &&
						(c.endOfStream = !0),
					null
				)
			b.endOfStream = !1
			if (e >= f) return 0.5
			e = pg(a.v.K, b.type)
			e = ui(a, b, c, e)
			if (!e) return 1
			f = Infinity
			var g = Array.from(a.a.values())
			g = r(g)
			for (var h = g.next(); !h.done; h = g.next())
				(h = h.value),
					yi(h) || (f = Math.min(f, h.Pb && h.Qa ? h.Qa.endTime : c))
			if (d >= f + a.s.presentationTimeline.a) return 1
			zi(a, b, c, e)['catch'](function () {})
			return null
		}
		function ui(a, b, c, d) {
			if (b.stream == b.Pb) return b.Ca.current()
			if (b.Qa) return b.Ca.seek(b.Qa.endTime)
			if (d) return b.Ca.seek(d)
			a = a.i.inaccurateManifestTolerance
			d = Math.max(c - a, 0)
			var e = null
			a && (e = b.Ca.seek(d))
			e || (e = b.Ca.seek(c))
			return e
		}
		function zi(a, b, c, d) {
			var e, f, g, h, k, l, m, n, p, t, v, w
			return J(function (y) {
				switch (y.a) {
					case 1:
						e = Oc
						f = b.stream
						b.Ra = !0
						g = Ai(a, b, d)
						z(y, 2)
						h =
							'video/mp4' == f.mimeType ||
							'audio/mp4' == f.mimeType
						k = window.ReadableStream
						if (a.i.lowLatencyMode && k && h)
							return (
								(n = new Uint8Array(0)),
								(p = function (A) {
									var B, E, D
									return J(function (F) {
										if (1 == F.a) return u(F, g, 2)
										lc(a.C)
										if (a.g) return F['return']()
										n = Bi(n, A)
										B = !1
										E = 0
										new xf()
											.G('mdat', function (I) {
												E = I.size + I.start
												B = !0
											})
											.parse(n, !1, !0)
										if (!B) return F.o(0)
										D = n.subarray(0, E)
										n = n.subarray(E)
										return u(F, Ci(a, b, c, f, d, D), 0)
									})
								}),
								u(y, Di(a, b, d, p), 5)
							)
						l = Di(a, b, d)
						return u(y, Promise.all([g, l]), 6)
					case 6:
						return (
							(m = y.b),
							lc(a.C),
							a.g
								? y['return']()
								: u(y, Ci(a, b, c, f, d, m[1]), 5)
						)
					case 5:
						lc(a.C)
						if (a.g) return y['return']()
						Ei(b, d, f)
						b.Ra = !1
						b.md = !1
						t = a.v.K.kc()
						v = t[b.type]
						$a(JSON.stringify(v))
						b.Ab || a.v.hd()
						mi(a, b, 0)
						wa(y, 0)
						break
					case 2:
						w = C(y)
						lc(a.C, w)
						if (a.g) return y['return']()
						b.Ra = !1
						b.type == e.da && a.i.ignoreTextStreamFailures
							? a.a['delete'](e.da)
							: 7001 == w.code
							? ((b.Ra = !1), (b.Fa = null), mi(a, b, 0))
							: 3017 == w.code
							? Fi(a, b, w)
							: 1001 == w.code && w.data && 404 == w.data[1]
							? ((b.Ra = !1), (b.Fa = null), mi(a, b, 1))
							: ((b.Nb = !0), (w.severity = 2), xi(a, w))
						x(y)
				}
			})
		}
		function Bi(a, b) {
			var c = new Uint8Array(a.length + b.length)
			c.set(a)
			c.set(b, a.length)
			return c
		}
		function Fi(a, b, c) {
			if (
				!Array.from(a.a.values()).some(function (e) {
					return e != b && e.md
				})
			) {
				var d = Math.round(100 * a.f)
				if (20 < d) a.f -= 0.2
				else if (4 < d) a.f -= 0.04
				else {
					b.Nb = !0
					a.g = !0
					a.v.onError(c)
					return
				}
				b.md = !0
			}
			mi(a, b, 4)
		}
		function Ai(a, b, c) {
			var d, e, f, g, h, k, l
			return J(function (m) {
				d = []
				e = Math.max(0, c.appendWindowStart - 0.1)
				f = c.appendWindowEnd + 0.01
				g = c.timestampOffset
				if (g != b.$c || e != b.Yc || f != b.Xc)
					(h = function () {
						var n
						return J(function (p) {
							if (1 == p.a)
								return (
									z(p, 2),
									(b.Yc = e),
									(b.Xc = f),
									(b.$c = g),
									u(p, vg(a.v.K, b.type, g, e, f), 4)
								)
							if (2 != p.a) return wa(p, 0)
							n = C(p)
							b.Yc = null
							b.Xc = null
							b.$c = null
							throw n
						})
					}),
						d.push(h())
				c.c != b.Zc &&
					(b.Zc = c.c) &&
					((k = Di(a, b, c.c)),
					(l = function () {
						var n, p, t
						return J(function (v) {
							switch (v.a) {
								case 1:
									return z(v, 2), u(v, k, 4)
								case 4:
									return (
										(n = v.b),
										lc(a.C),
										(p =
											b.stream.closedCaptions &&
											0 < b.stream.closedCaptions.size),
										u(
											v,
											rg(a.v.K, b.type, n, null, null, p),
											5
										)
									)
								case 5:
									wa(v, 0)
									break
								case 2:
									throw ((t = C(v)), (b.Zc = null), t)
							}
						})
					}),
					d.push(l()))
				return u(m, Promise.all(d), 0)
			})
		}
		function Ci(a, b, c, d, e, f) {
			var g
			return J(function (h) {
				if (1 == h.a)
					return (
						(g = d.closedCaptions && 0 < d.closedCaptions.size),
						null != d.emsgSchemeIdUris &&
							0 < d.emsgSchemeIdUris.length &&
							new xf()
								.U('emsg', function (k) {
									var l = d.emsgSchemeIdUris,
										m = k.reader.kd(),
										n = k.reader.kd(),
										p = k.reader.H(),
										t = k.reader.H(),
										v = k.reader.H(),
										w = k.reader.H()
									k = k.reader.Sa(
										k.reader.O.byteLength - k.reader.Z()
									)
									var y = e.startTime + t / p
									l.includes(m) &&
										('urn:mpeg:dash:event:2012' == m
											? a.v.Se()
											: ((l = new N(Gi, {
													detail: {
														startTime: y,
														endTime: y + v / p,
														schemeIdUri: m,
														value: n,
														timescale: p,
														presentationTimeDelta: t,
														eventDuration: v,
														id: w,
														messageData: k,
													},
											  })),
											  a.v.onEvent(l)))
								})
								.parse(f),
						u(h, Hi(a, b, c), 2)
					)
				if (3 != h.a)
					return (
						lc(a.C),
						u(h, rg(a.v.K, b.type, f, e.startTime, e.endTime, g), 3)
					)
				lc(a.C)
				x(h)
			})
		}
		function Ei(a, b, c) {
			a.Pb = c
			a.Qa = b
			a.stream == c && a.Ca.next()
		}
		function Hi(a, b, c) {
			var d, e, f, g
			return J(function (h) {
				if (1 == h.a) {
					d = Math.max(a.i.bufferBehind, a.s.presentationTimeline.a)
					e = ng(a.v.K, b.type)
					if (null == e) return h['return']()
					f = c - e
					g = f - d
					return 0 >= g
						? h['return']()
						: u(h, a.v.K.remove(b.type, e, e + g), 2)
				}
				lc(a.C)
				x(h)
			})
		}
		function yi(a) {
			return (
				a &&
				'text' == a.type &&
				('application/cea-608' == a.stream.mimeType ||
					'application/cea-708' == a.stream.mimeType)
			)
		}
		function Di(a, b, c, d) {
			var e, f, g, h
			return J(function (k) {
				if (1 == k.a)
					return (
						(e = jc),
						(f = ei(c.a(), c.ca, c.Y, a.i.retryParameters, d)),
						(g = a.v.tb.request(e, f)),
						(b.na = g),
						u(k, g.promise, 2)
					)
				h = k.b
				b.na = null
				return k['return'](h.data)
			})
		}
		function si(a, b, c, d) {
			var e, f
			return J(function (g) {
				if (1 == g.a)
					return (
						(b.Ab = !1),
						(b.xc = !1),
						(b.ic = 0),
						(b.Gb = !0),
						(b.Pb = null),
						(b.Qa = null),
						d
							? ((e = a.v.lc()),
							  (f = a.v.K.getDuration()),
							  u(g, a.v.K.remove(b.type, e + d, f), 3))
							: u(g, ug(a.v.K, b.type), 4)
					)
				if (3 != g.a)
					return lc(a.C), c ? u(g, a.v.K.flush(b.type), 3) : g.o(3)
				lc(a.C)
				b.Gb = !1
				b.endOfStream = !1
				mi(a, b, 0)
				x(g)
			})
		}
		function mi(a, b, c) {
			b.Fa = new wb(function () {
				var d
				return J(function (e) {
					if (1 == e.a) return z(e, 2), u(e, a.Qb(b), 4)
					if (2 != e.a) return wa(e, 0)
					d = C(e)
					if (a.v) a.v.onError(d)
					x(e)
				})
			}).R(c)
		}
		function hi(a) {
			null != a.Fa && (a.Fa.stop(), (a.Fa = null))
		}
		function ii(a) {
			return J(function (b) {
				return a.na ? u(b, a.na.abort(), 0) : b.o(0)
			})
		}
		function xi(a, b) {
			J(function (c) {
				if (1 == c.a) return u(c, zb(a.j), 2)
				lc(a.C)
				a.v.onError(b)
				b.handled || a.i.failureCallback(b)
				x(c)
			})
		}
		function Ii(a, b) {
			var c = Ji(),
				d = this
			this.h = b
			this.c = a
			this.f = c
			this.j = null
			this.g = []
			this.b = this.a = null
			this.l = Promise.resolve().then(function () {
				return Ki(d)
			})
			this.C = new kc(function () {
				return Li(d)
			})
		}
		Ii.prototype.destroy = function () {
			return this.C.destroy()
		}
		function Li(a) {
			var b, c, d
			return J(function (e) {
				if (1 == e.a) return a.b && a.b.abort(), Mi(a), u(e, a.l, 2)
				a.a && a.a.Aa.bb()
				b = r(a.g)
				for (c = b.next(); !c.done; c = b.next())
					(d = c.value), d.Aa.bb()
				a.a = null
				a.g = []
				a.h = null
				x(e)
			})
		}
		function Ni(a, b) {
			var c = {
				vb: function () {},
				nc: function () {},
				bb: function () {},
				onError: function () {},
				pc: function () {},
				Xf: function () {},
			}
			a.g.push({ create: b, Aa: c })
			a.b && a.b.abort()
			Mi(a)
			return c
		}
		function Ki(a) {
			return J(function (b) {
				if (a.C.a) b = b.o(0)
				else {
					if (0 == a.g.length || (a.a && !a.a.Za)) var c = !1
					else {
						a.a && (a.a.Aa.bb(), (a.a = null))
						c = a.g.shift()
						var d = c.create(a.f)
						d
							? (c.Aa.vb(),
							  (a.a = {
									node: d.node,
									payload: d.payload,
									Za: d.Za,
									Aa: c.Aa,
							  }))
							: c.Aa.pc()
						c = !0
					}
					c
						? (c = Promise.resolve())
						: a.a
						? (c = Oi(a))
						: (a.h.Re(a.c), (a.j = new Ab()), (c = a.j))
					b = u(b, c, 1)
				}
				return b
			})
		}
		function Oi(a) {
			var b, c
			return J(function (d) {
				switch (d.a) {
					case 1:
						return (
							(a.c = a.h.Ce(a.c, a.f, a.a.node, a.a.payload)),
							z(d, 2),
							(a.b = a.h.re(a.c, a.f, a.a.payload)),
							u(d, a.b.promise, 4)
						)
					case 4:
						a.b = null
						a.c == a.a.node && (a.a.Aa.nc(), (a.a = null))
						wa(d, 0)
						break
					case 2:
						b = C(d)
						if (7001 == b.code) a.a.Aa.bb()
						else a.a.Aa.onError(b)
						a.a = null
						a.b = null
						c = a
						return u(d, a.h.handleError(a.f, b), 5)
					case 5:
						;(c.c = d.b), x(d)
				}
			})
		}
		function Mi(a) {
			a.j && (a.j.resolve(), (a.j = null))
		}
		function Pi(a) {
			this.a = null
			for (
				var b = r(Array.from(a.textTracks)), c = b.next();
				!c.done;
				c = b.next()
			)
				(c = c.value),
					(c.mode = 'disabled'),
					'Shaka Player TextTrack' == c.label && (this.a = c)
			this.a ||
				(this.a = a.addTextTrack('subtitles', 'Shaka Player TextTrack'))
			this.a.mode = 'hidden'
		}
		q = Pi.prototype
		q.remove = function (a, b) {
			if (!this.a) return !1
			Qi(this.a, function (c) {
				return c.startTime < b && c.endTime > a
			})
			return !0
		}
		q.append = function (a) {
			function b(g) {
				var h = [],
					k = 700 <= g.fontWeight,
					l = 'italic' == g.fontStyle,
					m = g.textDecoration.includes('underline')
				k && h.push('b')
				l && h.push('i')
				m && h.push('u')
				k = h.reduce(function (n, p) {
					return n + '<' + p + '>'
				}, '')
				h = h.reduceRight(function (n, p) {
					return n + '</' + p + '>'
				}, '')
				return g.spacer
					? '\n'
					: g.nestedCues.length
					? g.nestedCues.map(b).join('')
					: k + g.payload + h
			}
			var c = a.map(function (g) {
					if (g.nestedCues.length) {
						var h = g.clone()
						h.nestedCues = []
						h.payload = b(g)
						return h
					}
					return g
				}),
				d = []
			a = this.a.cues ? Array.from(this.a.cues) : []
			var e = {}
			c = r(c)
			for (var f = c.next(); !f.done; e = { ib: e.ib }, f = c.next())
				(e.ib = f.value),
					a.some(
						(function (g) {
							return function (h) {
								return h.startTime == g.ib.startTime &&
									h.endTime == g.ib.endTime &&
									h.text == g.ib.payload
									? !0
									: !1
							}
						})(e)
					) ||
						((f = Ri(e.ib)) && d.push(f))
			a = d.slice().sort(function (g, h) {
				return g.startTime != h.startTime
					? g.startTime - h.startTime
					: g.endTime != h.endTime
					? g.endTime - h.startTime
					: 'line' in VTTCue.prototype
					? d.indexOf(h) - d.indexOf(g)
					: d.indexOf(g) - d.indexOf(h)
			})
			a = r(a)
			for (e = a.next(); !e.done; e = a.next()) this.a.addCue(e.value)
		}
		q.destroy = function () {
			this.a &&
				(Qi(this.a, function () {
					return !0
				}),
				(this.a.mode = 'disabled'))
			this.a = null
			return Promise.resolve()
		}
		q.isTextVisible = function () {
			return 'showing' == this.a.mode
		}
		q.setTextVisibility = function (a) {
			this.a.mode = a ? 'showing' : 'hidden'
		}
		function Ri(a) {
			if (a.startTime >= a.endTime) return null
			var b = new VTTCue(a.startTime, a.endTime, a.payload)
			b.lineAlign = a.lineAlign
			b.positionAlign = a.positionAlign
			a.size && (b.size = a.size)
			try {
				b.align = a.textAlign
			} catch (c) {}
			'center' == a.textAlign &&
				'center' != b.align &&
				(b.align = 'middle')
			'vertical-lr' == a.writingMode
				? (b.vertical = 'lr')
				: 'vertical-rl' == a.writingMode && (b.vertical = 'rl')
			1 == a.lineInterpretation && (b.snapToLines = !1)
			null != a.line && (b.line = a.line)
			null != a.position && (b.position = a.position)
			return b
		}
		function Qi(a, b) {
			var c = a.mode
			a.mode = 'showing' == c ? 'showing' : 'hidden'
			for (
				var d = r(Array.from(a.cues)), e = d.next();
				!e.done;
				e = d.next()
			)
				(e = e.value) && b(e) && a.removeCue(e)
			a.mode = c
		}
		K('shaka.text.SimpleTextDisplayer', Pi)
		Pi.prototype.setTextVisibility = Pi.prototype.setTextVisibility
		Pi.prototype.isTextVisible = Pi.prototype.isTextVisible
		Pi.prototype.destroy = Pi.prototype.destroy
		Pi.prototype.append = Pi.prototype.append
		Pi.prototype.remove = Pi.prototype.remove
		function Si() {}
		K('shaka.util.Dom', Si)
		Si.removeAllChildren = function (a) {
			for (; a.firstChild; ) a.removeChild(a.firstChild)
		}
		function Ti(a, b) {
			var c = this
			this.h = !1
			this.c = []
			this.a = a
			this.g = b
			this.b = document.createElement('div')
			this.b.classList.add('shaka-text-container')
			this.b.style.textAlign = 'center'
			this.b.style.display = 'flex'
			this.b.style.flexDirection = 'column'
			this.b.style.alignItems = 'center'
			this.b.style.justifyContent = 'flex-end'
			this.g.appendChild(this.b)
			this.j = new M(function () {
				Ui(c)
			}).ta(0.25)
			this.f = new Map()
		}
		q = Ti.prototype
		q.append = function (a) {
			var b = {}
			a = r(a)
			for (var c = a.next(); !c.done; b = { Wb: b.Wb }, c = a.next())
				(b.Wb = c.value),
					this.c.some(
						(function (d) {
							return function (e) {
								return he(e, d.Wb)
							}
						})(b)
					) || this.c.push(b.Wb)
			Ui(this)
		}
		q.destroy = function () {
			this.g.removeChild(this.b)
			this.b = null
			this.h = !1
			this.c = []
			this.j && this.j.stop()
			this.f.clear()
		}
		q.remove = function (a, b) {
			if (!this.b) return !1
			this.c = this.c.filter(function (c) {
				return c.startTime < a || c.endTime >= b
			})
			Ui(this)
			return !0
		}
		q.isTextVisible = function () {
			return this.h
		}
		q.setTextVisibility = function (a) {
			this.h = a
		}
		function Ui(a) {
			function b(g) {
				return (
					a.c.includes(g) && a.h && g.startTime <= c && g.endTime >= c
				)
			}
			for (
				var c = a.a.currentTime, d = r(a.f.keys()), e = d.next();
				!e.done;
				e = d.next()
			)
				if (((e = e.value), !b(e))) {
					var f = a.f.get(e)
					a.b.removeChild(f)
					a.f['delete'](e)
				}
			d = new Set(a.f.values())
			e = r(Array.from(a.b.childNodes))
			for (f = e.next(); !f.done; f = e.next())
				(f = f.value), d.has(f) || a.b.removeChild(f)
			d = a.c
				.filter(function (g) {
					return b(g) && !a.f.has(g)
				})
				.sort(function (g, h) {
					return g.startTime != h.startTime
						? g.startTime - h.startTime
						: g.endTime - h.endTime
				})
			d = r(d)
			for (e = d.next(); !e.done; e = d.next())
				(e = e.value), (f = Vi(a, a.b, e, !1)), a.f.set(e, f)
		}
		function Vi(a, b, c, d) {
			var e = document.createElement(d ? 'span' : 'div')
			Wi(a, e, c, d)
			c = r(c.nestedCues)
			for (d = c.next(); !d.done; d = c.next()) Vi(a, e, d.value, !0)
			b.appendChild(e)
			return e
		}
		function Wi(a, b, c, d) {
			var e = b.style,
				f = 0 == c.nestedCues.length
			c.spacer
				? ((e.flexBasis = '100%'), (e.height = '0'))
				: ((e.whiteSpace = 'pre-wrap'),
				  (b.textContent = c.payload.replace(/\s+$/g, function (g) {
						return '\u00a0'.repeat(g.length)
				  })),
				  (e.backgroundColor = c.backgroundColor),
				  (e.border = c.border),
				  (e.color = c.color),
				  (e.direction = c.direction),
				  (e.opacity = c.opacity),
				  (e.paddingLeft = Xi(c.linePadding, c, a.g)),
				  (e.paddingRight = Xi(c.linePadding, c, a.g)),
				  c.backgroundImage &&
						((e.backgroundImage =
							"url('" + c.backgroundImage + "')"),
						(e.backgroundRepeat = 'no-repeat'),
						(e.backgroundSize = 'contain'),
						(e.backgroundPosition = 'center'),
						'' == c.backgroundColor &&
							(e.backgroundColor = 'transparent'),
						c.region &&
							((b = c.region.widthUnits == me ? '%' : 'px'),
							(e.height =
								c.region.height +
								(c.region.heightUnits == me ? '%' : 'px')),
							(e.width = c.region.width + b))),
				  (e.justifyContent =
						'before' == c.displayAlign
							? 'flex-start'
							: 'center' == c.displayAlign
							? 'center'
							: 'flex-end'),
				  f
						? (e.display = 'inline-block')
						: ((e.display = 'flex'),
						  (e.flexDirection = 'row'),
						  (e.flexWrap = 'wrap'),
						  (e.margin = '0'),
						  (e.alignItems = e.justifyContent),
						  (e.justifyContent = 'center')),
				  d && (e.maxWidth = '100%'),
				  (e.fontFamily = c.fontFamily),
				  (e.fontWeight = c.fontWeight.toString()),
				  (e.fontStyle = c.fontStyle),
				  (e.letterSpacing = c.letterSpacing),
				  (e.fontSize = Xi(c.fontSize, c, a.g)),
				  c.line
						? 1 == c.lineInterpretation &&
						  ((e.position = 'absolute'),
						  c.writingMode == be
								? c.lineAlign == de
									? (e.top = c.line + '%')
									: 'end' == c.lineAlign &&
									  (e.bottom = c.line + '%')
								: 'vertical-lr' == c.writingMode
								? c.lineAlign == de
									? (e.left = c.line + '%')
									: 'end' == c.lineAlign &&
									  (e.right = c.line + '%')
								: c.lineAlign == de
								? (e.right = c.line + '%')
								: 'end' == c.lineAlign &&
								  (e.left = c.line + '%'))
						: c.region &&
						  c.region.id &&
						  !d &&
						  !f &&
						  ((a = c.region.widthUnits == me ? '%' : 'px'),
						  (d = c.region.viewportAnchorUnits == me ? '%' : 'px'),
						  (e.height =
								c.region.height +
								(c.region.heightUnits == me ? '%' : 'px')),
						  (e.width = c.region.width + a),
						  (e.position = 'absolute'),
						  (e.top = c.region.viewportAnchorY + d),
						  (e.left = c.region.viewportAnchorX + d)),
				  (e.lineHeight = c.lineHeight),
				  c.position &&
						(c.writingMode == be
							? (e.paddingLeft = c.position)
							: (e.paddingTop = c.position)),
				  'line-left' == c.positionAlign
						? (e.cssFloat = 'left')
						: 'line-right' == c.positionAlign &&
						  (e.cssFloat = 'right'),
				  (e.textAlign = c.textAlign),
				  (e.textDecoration = c.textDecoration.join(' ')),
				  (e.writingMode = c.writingMode),
				  c.size &&
						(c.writingMode == be
							? (e.width = c.size + '%')
							: (e.height = c.size + '%')))
		}
		function Xi(a, b, c) {
			var d = (d = new RegExp(/(\d*\.?\d+)([a-z]+|%+)/).exec(a))
				? { value: Number(d[1]), nf: d[2] }
				: null
			if (!d) return a
			var e = d.value
			switch (d.nf) {
				case '%':
					return (
						((e / 100) * c.clientHeight) / b.cellResolution.rows +
						'px'
					)
				case 'c':
					return (c.clientHeight * e) / b.cellResolution.rows + 'px'
				default:
					return a
			}
		}
		K('shaka.text.UITextDisplayer', Ti)
		Ti.prototype.setTextVisibility = Ti.prototype.setTextVisibility
		Ti.prototype.isTextVisible = Ti.prototype.isTextVisible
		Ti.prototype.remove = Ti.prototype.remove
		Ti.prototype.destroy = Ti.prototype.destroy
		Ti.prototype.append = Ti.prototype.append
		function Yi() {}
		function Zi(a, b, c, d, e) {
			var f = e in d,
				g = !0,
				h
			for (h in b) {
				var k = e + '.' + h,
					l = f ? d[e] : c[h]
				f || h in c
					? void 0 === b[h]
						? void 0 === l || f
							? delete a[h]
							: (a[h] = Sb(l))
						: l.constructor == Object &&
						  b[h] &&
						  b[h].constructor == Object
						? (a[h] || (a[h] = Sb(l)),
						  (k = Zi(a[h], b[h], l, d, k)),
						  (g = g && k))
						: typeof b[h] != typeof l ||
						  null == b[h] ||
						  ('function' != typeof b[h] &&
								b[h].constructor != l.constructor)
						? (Sa('Invalid config, wrong type for ' + k), (g = !1))
						: ('function' == typeof c[h] &&
								c[h].length != b[h].length &&
								Ta('Unexpected number of arguments for ' + k),
						  (a[h] = b[h]))
					: (Sa('Invalid config, unrecognized key ' + k), (g = !1))
			}
			return g
		}
		function $i(a, b) {
			for (var c = {}, d = c, e = 0, f = 0; ; ) {
				e = a.indexOf('.', e)
				if (0 > e) break
				if (0 == e || '\\' != a[e - 1])
					(f = a.substring(f, e).replace(/\\\./g, '.')),
						(d[f] = {}),
						(d = d[f]),
						(f = e + 1)
				e += 1
			}
			d[a.substring(f).replace(/\\\./g, '.')] = b
			return c
		}
		K('shaka.util.ConfigUtils', Yi)
		Yi.convertToConfigObject = $i
		Yi.mergeConfigObjects = Zi
		function aj() {}
		function bj() {
			var a = Infinity
			navigator.connection && navigator.connection.saveData && (a = 360)
			var b = {
					retryParameters: yb(),
					servers: {},
					clearKeys: {},
					advanced: {},
					delayLicenseRequestUntilPlayed: !1,
					initDataTransform: Md,
					logLicenseExchange: !1,
					updateExpirationTime: 1,
				},
				c = {
					retryParameters: yb(),
					availabilityWindowOverride: NaN,
					disableAudio: !1,
					disableVideo: !1,
					disableText: !1,
					defaultPresentationDelay: 0,
					dash: {
						clockSyncUri: '',
						ignoreDrmInfo: !1,
						xlinkFailGracefully: !1,
						ignoreMinBufferTime: !1,
						autoCorrectDrift: !0,
						initialSegmentLimit: 1e3,
						ignoreSuggestedPresentationDelay: !1,
						ignoreEmptyAdaptationSet: !1,
					},
					hls: {
						ignoreTextStreamFailures: !1,
						useFullSegmentsForStartTime: !1,
					},
				},
				d = {
					retryParameters: yb(),
					failureCallback: function (g) {
						return [g]
					},
					rebufferingGoal: 2,
					bufferingGoal: 10,
					bufferBehind: 30,
					ignoreTextStreamFailures: !1,
					alwaysStreamText: !1,
					startAtSegmentBoundary: !1,
					smallGapLimit: 0.5,
					jumpLargeGaps: !1,
					durationBackoff: 1,
					forceTransmuxTS: !1,
					safeSeekOffset: 5,
					stallEnabled: !0,
					stallThreshold: 1,
					stallSkip: 0.1,
					useNativeHlsOnSafari: !0,
					inaccurateManifestTolerance: 2,
					lowLatencyMode: !1,
				}
			if (ad('Web0S') || ad('Tizen') || ad('CrKey')) d.stallSkip = 0
			var e = {
					trackSelectionCallback: function (g) {
						return J(function (h) {
							return h['return'](g)
						})
					},
					progressCallback: function (g, h) {
						return [g, h]
					},
					usePersistentLicense: !0,
				},
				f = {
					drm: b,
					manifest: c,
					streaming: d,
					offline: e,
					abrFactory: function () {
						return new Wg()
					},
					abr: {
						enabled: !0,
						useNetworkInformation: !0,
						defaultBandwidthEstimate: 1e6,
						switchInterval: 8,
						bandwidthUpgradeTarget: 0.85,
						bandwidthDowngradeTarget: 0.95,
						restrictions: {
							minWidth: 0,
							maxWidth: Infinity,
							minHeight: 0,
							maxHeight: a,
							minPixels: 0,
							maxPixels: Infinity,
							minFrameRate: 0,
							maxFrameRate: Infinity,
							minBandwidth: 0,
							maxBandwidth: Infinity,
						},
					},
					preferredAudioLanguage: '',
					preferredTextLanguage: '',
					preferredVariantRole: '',
					preferredTextRole: '',
					preferredAudioChannelCount: 2,
					restrictions: {
						minWidth: 0,
						maxWidth: Infinity,
						minHeight: 0,
						maxHeight: Infinity,
						minPixels: 0,
						maxPixels: Infinity,
						minFrameRate: 0,
						maxFrameRate: Infinity,
						minBandwidth: 0,
						maxBandwidth: Infinity,
					},
					playRangeStart: 0,
					playRangeEnd: Infinity,
					textDisplayFactory: function () {
						return null
					},
				}
			e.trackSelectionCallback = function (g) {
				return J(function (h) {
					return h['return'](cj(g, f.preferredAudioLanguage))
				})
			}
			return f
		}
		function dj(a, b, c) {
			var d = {
				'.drm.servers': '',
				'.drm.clearKeys': '',
				'.drm.advanced': {
					distinctiveIdentifierRequired: !1,
					persistentStateRequired: !1,
					videoRobustness: '',
					audioRobustness: '',
					serverCertificate: new Uint8Array(0),
					individualizationServer: '',
				},
			}
			return Zi(a, b, c || bj(), d, '')
		}
		function cj(a, b) {
			var c = a.filter(function (h) {
					return 'variant' == h.type
				}),
				d = [],
				e = Gg(
					b,
					c.map(function (h) {
						return h.language
					})
				)
			e &&
				(d = c.filter(function (h) {
					return Ag(h.language) == e
				}))
			0 == d.length &&
				(d = c.filter(function (h) {
					return h.primary
				}))
			0 == d.length &&
				(c.map(function (h) {
					return h.language
				}),
				(d = c))
			var f = d.filter(function (h) {
				return h.height && 480 >= h.height
			})
			f.length &&
				(f.sort(function (h, k) {
					return k.height - h.height
				}),
				(d = f.filter(function (h) {
					return h.height == f[0].height
				})))
			c = []
			if (d.length) {
				var g = Math.floor(d.length / 2)
				d.sort(function (h, k) {
					return h.bandwidth - k.bandwidth
				})
				c.push(d[g])
			}
			d = r(a)
			for (g = d.next(); !g.done; g = d.next())
				(g = g.value), 'text' == g.type && c.push(g)
			return c
		}
		K('shaka.util.PlayerConfiguration', aj)
		aj.mergeConfigObjects = dj
		function ej() {
			this.a = null
			this.b = []
		}
		function fj(a, b) {
			if (null == a.a)
				a.a = { timestamp: Date.now() / 1e3, state: b, duration: 0 }
			else {
				var c = Date.now() / 1e3
				a.a.duration = c - a.a.timestamp
				a.a.state != b &&
					(a.b.push(a.a),
					(a.a = { timestamp: c, state: b, duration: 0 }))
			}
		}
		function gj(a, b) {
			var c = 0
			a.a && a.a.state == b && (c += a.a.duration)
			for (var d = r(a.b), e = d.next(); !e.done; e = d.next())
				(e = e.value), (c += e.state == b ? e.duration : 0)
			return c
		}
		function hj(a) {
			function b(f) {
				return {
					timestamp: f.timestamp,
					state: f.state,
					duration: f.duration,
				}
			}
			for (var c = [], d = r(a.b), e = d.next(); !e.done; e = d.next())
				c.push(b(e.value))
			a.a && c.push(b(a.a))
			return c
		}
		function ij() {
			this.b = this.c = null
			this.a = []
		}
		function jj(a, b, c) {
			a.c != b &&
				((a.c = b),
				a.a.push({
					timestamp: Date.now() / 1e3,
					id: b.id,
					type: 'variant',
					fromAdaptation: c,
					bandwidth: b.bandwidth,
				}))
		}
		function kj(a, b, c) {
			a.b != b &&
				((a.b = b),
				a.a.push({
					timestamp: Date.now() / 1e3,
					id: b.id,
					type: 'text',
					fromAdaptation: c,
					bandwidth: null,
				}))
		}
		function lj() {
			this.h = this.j = this.B = this.u = this.D = this.f = this.w = this.g = this.c = this.I = this.J = this.L = this.l = this.S = NaN
			this.b = new ej()
			this.a = new ij()
		}
		function U(a, b) {
			Rb.call(this)
			var c = this
			this.g = mj
			this.ec = this.a = null
			this.S = !1
			this.b = new mc()
			this.Ic = this.l = this.Na = this.s = this.cc = this.j = this.c = this.dc = this.B = this.Ua = this.w = this.wa = this.u = this.D = this.h = this.M = null
			this.Bd = 1e9
			this.i = nj(this)
			this.Oc = { width: Infinity, height: Infinity }
			this.f = null
			this.Oa = new dh(
				this.i.preferredAudioLanguage,
				this.i.preferredVariantRole,
				this.i.preferredAudioChannelCount
			)
			this.ha = this.i.preferredTextLanguage
			this.ac = this.i.preferredTextRole
			this.Jc = []
			b && b(this)
			this.M = oj(this)
			this.I = null
			pj && (this.I = Lc(pj))
			this.b.m(window, 'online', function () {
				c.nd()
			})
			this.ja = { name: 'detach' }
			this.Ha = { name: 'attach' }
			this.L = { name: 'unload' }
			this.yc = { name: 'manifest-parser' }
			this.Nc = { name: 'manifest' }
			this.va = { name: 'media-source' }
			this.Kc = { name: 'drm-engine' }
			this.J = { name: 'load' }
			this.Pc = { name: 'src-equals-drm-engine' }
			this.xa = { name: 'src-equals' }
			var d = new Map()
			d.set(this.Ha, function (e, f) {
				return Fb(qj(c, e, f))
			})
			d.set(this.ja, function (e) {
				e.A && (c.b.ua(e.A, 'error'), (e.A = null))
				c.a = null
				e = Promise.resolve()
				return Fb(e)
			})
			d.set(this.L, function (e) {
				return Fb(rj(c, e))
			})
			d.set(this.va, function (e) {
				e = sj(c, e)
				return Fb(e)
			})
			d.set(this.yc, function (e, f) {
				var g = tj(c, e, f)
				return Fb(g)
			})
			d.set(this.Nc, function (e) {
				return uj(c, e)
			})
			d.set(this.Kc, function () {
				var e = vj(c)
				return Fb(e)
			})
			d.set(this.J, function (e, f) {
				return Fb(wj(c, e, f))
			})
			d.set(this.Pc, function (e) {
				e = xj(c, e)
				return Fb(e)
			})
			d.set(this.xa, function (e, f) {
				return yj(c, e, f)
			})
			this.X = new Ii(this.ja, {
				Ce: function (e, f, g, h) {
					var k = null
					e == c.ja && (k = g == c.ja ? c.ja : c.Ha)
					e == c.Ha &&
						(k =
							g == c.ja || f.A != h.A
								? c.ja
								: g == c.Ha
								? c.Ha
								: g == c.va || g == c.J
								? c.va
								: g == c.xa
								? c.Pc
								: null)
					e == c.va && (k = g == c.J && f.A == h.A ? c.yc : c.L)
					e == c.yc && (k = zj(c.J, c.Nc, c.L, g, f, h))
					e == c.Nc && (k = zj(c.J, c.Kc, c.L, g, f, h))
					e == c.Kc && (k = zj(c.J, c.J, c.L, g, f, h))
					e == c.Pc && (k = g == c.xa && f.A == h.A ? c.xa : c.L)
					if (e == c.J || e == c.xa) k = c.L
					e == c.L && (k = h.A && f.A == h.A ? c.Ha : c.ja)
					return k
				},
				re: function (e, f, g) {
					c.dispatchEvent(Aj(Bj, { state: e.name }))
					return d.get(e)(f, g)
				},
				handleError: function (e) {
					return J(function (f) {
						return 1 == f.a
							? u(f, rj(c, e), 2)
							: f['return'](e.A ? c.Ha : c.ja)
					})
				},
				Re: function (e) {
					c.dispatchEvent(Aj(Cj, { state: e.name }))
				},
			})
			a && this.Fb(a, !0)
		}
		ra(U, Rb)
		function Aj(a, b) {
			return new N(a, b)
		}
		q = U.prototype
		q.destroy = function () {
			var a = this,
				b
			return J(function (c) {
				switch (c.a) {
					case 1:
						if (a.g == Dj) return c['return']()
						a.g = Dj
						b = Ni(a.X, function () {
							return { node: a.ja, payload: Ji(), Za: !1 }
						})
						return u(
							c,
							new Promise(function (d) {
								b.vb = function () {}
								b.nc = function () {
									d()
								}
								b.bb = function () {
									d()
								}
								b.onError = function () {
									d()
								}
								b.pc = function () {
									d()
								}
							}),
							2
						)
					case 2:
						return u(c, a.X.destroy(), 3)
					case 3:
						a.b && (a.b.release(), (a.b = null))
						a.Ic = null
						a.l = null
						a.i = null
						a.f = null
						a.ec = null
						if (!a.M) {
							c.o(0)
							break
						}
						return u(c, a.M.destroy(), 5)
					case 5:
						;(a.M = null), x(c)
				}
			})
		}
		q.Fb = function (a, b) {
			b = void 0 === b ? !0 : b
			if (this.g == Dj) return Promise.reject(Ej())
			var c = Ji()
			c.A = a
			Wc() || (b = !1)
			var d = b ? this.va : this.Ha,
				e = Ni(this.X, function () {
					return { node: d, payload: c, Za: !1 }
				})
			e.vb = function () {}
			return Fj(e)
		}
		q.detach = function () {
			var a = this
			if (this.g == Dj) return Promise.reject(Ej())
			var b = Ni(this.X, function () {
				return { node: a.ja, payload: Ji(), Za: !1 }
			})
			b.vb = function () {}
			return Fj(b)
		}
		q.yd = function (a) {
			var b = this
			a = void 0 === a ? !0 : a
			if (this.g == Dj) return Promise.reject(Ej())
			Wc() || (a = !1)
			var c = Ji(),
				d = Ni(this.X, function (e) {
					var f = e.A && a ? b.va : e.A ? b.Ha : b.ja
					c.A = e.A
					return { node: f, payload: c, Za: !1 }
				})
			d.vb = function () {}
			return Fj(d)
		}
		q.load = function (a, b, c) {
			var d = this
			if (this.g == Dj) return Promise.reject(Ej())
			this.dispatchEvent(Aj(Gj))
			var e = Ji()
			e.uri = a
			e.wd = Date.now() / 1e3
			c && (e.mimeType = c)
			void 0 !== b && (e.startTime = b)
			var f = Hj(this, e) ? this.xa : this.J,
				g = Ni(this.X, function (h) {
					if (null == h.A) return null
					e.A = h.A
					return { node: f, payload: e, Za: !0 }
				})
			this.f = new lj()
			g.vb = function () {}
			return new Promise(function (h, k) {
				g.pc = function () {
					return k(new L(2, 7, 7002))
				}
				g.nc = function () {
					h()
					d.dispatchEvent(Aj(Ij))
				}
				g.bb = function () {
					return k(Ej())
				}
				g.onError = function (l) {
					return k(l)
				}
			})
		}
		function Hj(a, b) {
			if (!Wc()) return !0
			var c = b.mimeType,
				d = b.uri || ''
			c ||
				(c = {
					mp4: 'video/mp4',
					m4v: 'video/mp4',
					m4a: 'audio/mp4',
					webm: 'video/webm',
					weba: 'audio/webm',
					mkv: 'video/webm',
					ts: 'video/mp2t',
					ogv: 'video/ogg',
					ogg: 'audio/ogg',
					mpg: 'video/mpeg',
					mpeg: 'video/mpeg',
					m3u8: 'application/x-mpegurl',
					mp3: 'audio/mpeg',
					aac: 'audio/aac',
					flac: 'audio/flac',
					wav: 'audio/wav',
				}[ph(d)])
			return c
				? '' == (b.A || Yc()).canPlayType(c)
					? !1
					: Wc() && (c in oh || ph(d) in qh)
					? $c() && a.i.streaming.useNativeHlsOnSafari
					: !0
				: !1
		}
		function qj(a, b, c) {
			null == b.A &&
				((b.A = c.A),
				a.b.m(b.A, 'error', function () {
					var d = Jj(a)
					d && Kj(a, d)
				}))
			a.a = b.A
			return Promise.resolve()
		}
		function rj(a, b) {
			var c, d, e, f, g, h, k, l, m
			return J(function (n) {
				switch (n.a) {
					case 1:
						return (
							a.g != Dj && (a.g = mj),
							(c = a.Jc.map(function (p) {
								return p()
							})),
							(a.Jc = []),
							u(n, Promise.all(c), 2)
						)
					case 2:
						a.dispatchEvent(Aj(Lj))
						b.mimeType = null
						b.startTime = null
						b.uri = null
						b.A &&
							(a.b.ua(b.A, 'loadedmetadata'),
							a.b.ua(b.A, 'playing'),
							a.b.ua(b.A, 'pause'),
							a.b.ua(b.A, 'ended'),
							a.b.ua(b.A, 'ratechange'))
						a.wa && (a.wa.release(), (a.wa = null))
						a.Ua && (a.Ua.stop(), (a.Ua = null))
						if (!a.j) {
							n.o(3)
							break
						}
						return u(n, a.j.stop(), 4)
					case 4:
						;(a.j = null), (a.cc = null)
					case 3:
						if (!a.l) {
							n.o(5)
							break
						}
						return u(n, a.l.stop(), 5)
					case 5:
						if (!a.c) {
							n.o(7)
							break
						}
						return u(n, a.c.destroy(), 8)
					case 8:
						a.c = null
					case 7:
						a.w && (a.w.release(), (a.w = null))
						a.u && (a.u.release(), (a.u = null))
						if (!a.D) {
							n.o(9)
							break
						}
						return u(n, a.D.destroy(), 10)
					case 10:
						a.D = null
					case 9:
						if (a.I) a.I.onAssetUnload()
						if (!b.A || !b.A.src) {
							n.o(11)
							break
						}
						return u(
							n,
							new Promise(function (p) {
								return new M(p).R(0.1)
							}),
							12
						)
					case 12:
						for (
							b.A.removeAttribute('src'), b.A.load();
							b.A.lastChild;

						)
							b.A.removeChild(b.A.firstChild)
					case 11:
						if (!a.h) {
							n.o(13)
							break
						}
						return u(n, a.h.destroy(), 14)
					case 14:
						a.h = null
					case 13:
						a.Na = null
						a.B = null
						if (a.s) {
							d = r(a.s.variants)
							for (e = d.next(); !e.done; e = d.next())
								for (
									f = e.value,
										g = r([f.audio, f.video]),
										h = g.next();
									!h.done;
									h = g.next()
								)
									(k = h.value) &&
										k.segmentIndex &&
										k.segmentIndex.release()
							l = r(a.s.textStreams)
							for (h = l.next(); !h.done; h = l.next())
								(m = h.value),
									m.segmentIndex && m.segmentIndex.release()
						}
						a.s = null
						a.f = new lj()
						a.Lc = null
						Mj(a)
						x(n)
				}
			})
		}
		function sj(a, b) {
			var c, d, e, f
			return J(function (g) {
				if (1 == g.a)
					return (
						(c = new Kf()),
						(d = a.i.textDisplayFactory),
						(e = Lc(d)),
						(a.Lc = d),
						(f = Nj(b.A, c, e, function (h, k, l) {
							h = r(h)
							for (var m = h.next(); !m.done; m = h.next())
								if (
									((m = m.value),
									m.data && m.cueTime && m.frames)
								) {
									for (
										var n = m.cueTime + k,
											p = l,
											t = r(m.frames),
											v = t.next();
										!v.done;
										v = t.next()
									)
										Oj(a, n, p, 'ID3', v.value)
									if (a.I) a.I.onHlsTimedMetadata(m, n)
								}
						})),
						u(g, f.w, 2)
					)
				a.D = f
				x(g)
			})
		}
		function tj(a, b, c) {
			var d, e, f, g
			return J(function (h) {
				if (1 == h.a)
					return (
						(b.mimeType = c.mimeType),
						(b.uri = c.uri),
						(d = b.uri),
						(e = a.M),
						(a.Na = d),
						(f = a),
						u(
							h,
							nh(d, e, a.i.manifest.retryParameters, b.mimeType),
							2
						)
					)
				f.cc = h.b
				a.j = Lc(a.cc)
				g = Sb(a.i.manifest)
				c.A && 'AUDIO' === c.A.nodeName && (g.disableVideo = !0)
				a.j.configure(g)
				x(h)
			})
		}
		function uj(a, b) {
			var c = b.uri,
				d = a.M
			a.dc = new ai(function () {
				return a.pd()
			})
			bi(a.dc, function (g) {
				Pj(a, Qj, g)
				if (a.I) a.I.onDashTimedMetadata(g)
			})
			var e = {
					networkingEngine: d,
					filter: function (g) {
						return J(function (h) {
							return h['return'](a.mb(g))
						})
					},
					makeTextStreamsForClosedCaptions: function (g) {
						return Rj(a, g)
					},
					onTimelineRegionAdded: function (g) {
						var h = a.dc
						a: {
							var k = r(h.a)
							for (var l = k.next(); !l.done; l = k.next())
								if (
									((l = l.value),
									l.schemeIdUri == g.schemeIdUri &&
										l.id == g.id &&
										l.startTime == g.startTime &&
										l.endTime == g.endTime)
								) {
									k = l
									break a
								}
							k = null
						}
						null == k && (h.a.add(g), h.b(g))
					},
					onEvent: function (g) {
						return a.dispatchEvent(g)
					},
					onError: function (g) {
						return Kj(a, g)
					},
					isLowLatencyMode: function () {
						return a.i.streaming.lowLatencyMode
					},
				},
				f = Date.now() / 1e3
			return new Bb(
				(function () {
					var g, h, k, l
					return J(function (m) {
						if (1 == m.a) return (g = a), u(m, a.j.start(c, e), 2)
						g.s = m.b
						h = Aj(Sj)
						a.dispatchEvent(h)
						if (0 == a.s.variants.length) throw new L(2, 4, 4036)
						Tj(a.s)
						k = Date.now() / 1e3
						l = k - f
						a.f.w = l
						x(m)
					})
				})(),
				function () {
					return a.j.stop()
				}
			)
		}
		function vj(a) {
			var b, c
			return J(function (d) {
				if (1 == d.a)
					return (
						(b = Date.now() / 1e3),
						(c = !0),
						(a.h = Uj(a, {
							tb: a.M,
							onError: function (e) {
								Kj(a, e)
							},
							oc: function (e) {
								Vj(a, e)
							},
							onExpirationUpdated: function (e, f) {
								Wj(a, e, f)
							},
							onEvent: function (e) {
								a.dispatchEvent(e)
								e.type == Xj &&
									c &&
									((c = !1), (a.f.f = Date.now() / 1e3 - b))
							},
						})),
						a.h.configure(a.i.drm),
						u(d, sd(a.h, a.s.variants, a.s.offlineSessionIds), 2)
					)
				a.mb(a.s)
				x(d)
			})
		}
		function wj(a, b, c) {
			var d, e, f, g, h, k, l, m, n, p
			return J(function (t) {
				switch (t.a) {
					case 1:
						return (
							(b.startTime = c.startTime),
							(d = b.A),
							(e = b.uri),
							(a.Na = e),
							(a.w = new Uh({
								mc: function () {
									return b.A.playbackRate
								},
								ud: function (v) {
									b.A.playbackRate = v
								},
								Pd: function (v) {
									b.A.currentTime += v
								},
							})),
							(f = function () {
								return Yj(a)
							}),
							(g = function () {
								return Zj(a)
							}),
							a.b.m(d, 'playing', f),
							a.b.m(d, 'pause', f),
							a.b.m(d, 'ended', f),
							a.b.m(d, 'ratechange', g),
							(h = a.i.abrFactory),
							(a.l && a.Ic == h) ||
								((a.Ic = h),
								(a.l = Lc(h)),
								'function' != typeof a.l.playbackRateChanged &&
									(Ec(
										'AbrManager',
										'Please use an AbrManager with playbackRateChanged function.'
									),
									(a.l.playbackRateChanged = function () {})),
								a.l.configure(a.i.abr)),
							(a.Oa = new dh(
								a.i.preferredAudioLanguage,
								a.i.preferredVariantRole,
								a.i.preferredAudioChannelCount
							)),
							(a.ha = a.i.preferredTextLanguage),
							ak(
								a.s.presentationTimeline,
								a.i.playRangeStart,
								a.i.playRangeEnd
							),
							u(t, a.h.Fb(d), 2)
						)
					case 2:
						a.l.init(function (v, w, y) {
							w = void 0 === w ? !1 : w
							y = void 0 === y ? 0 : y
							a.c &&
								v != a.c.b &&
								(jj(a.f.a, v, !0), qi(a.c, v, w, y), bk(a))
						})
						a.u = ck(a, b.startTime)
						a.wa = dk(a)
						k = Math.max(
							a.s.minBufferTime,
							a.i.streaming.rebufferingGoal
						)
						ek(a, k)
						Hg(a.s, a.i.preferredAudioChannelCount)
						a.c = fk(a)
						a.c.configure(a.i.streaming)
						a.g = gk
						a.dispatchEvent(Aj(hk))
						l = ik(a) ? a.l.chooseVariant() : null
						jj(a.f.a, l, !0)
						qi(a.c, l, !1, 0)
						;(m = Ug(a.s.textStreams, a.ha, a.ac)[0] || null) &&
							kj(a.f.a, m, !0)
						m
							? (l.audio && jk(a, l.audio, m) && (a.S = !0),
							  a.S && a.D.h.setTextVisibility(!0),
							  kk(a))
							: (a.S = !1)
						m &&
							(a.i.streaming.alwaysStreamText || a.Wc()) &&
							ri(a.c, m)
						if (!a.i.streaming.startAtSegmentBoundary) {
							t.o(3)
							break
						}
						n = a.u.g()
						return u(t, lk(l, n), 4)
					case 4:
						;(p = t.b), a.u.l(p)
					case 3:
						return u(t, a.c.start(), 5)
					case 5:
						a.i.abr.enabled && (a.l.enable(), mk(a)),
							a.mb(a.s),
							nk(a),
							bk(a),
							ik(a),
							a.s.variants.some(function (v) {
								return v.primary
							}),
							a.b.ma(d, 'loadedmetadata', function () {
								a.f.g = Date.now() / 1e3 - c.wd
							}),
							x(t)
				}
			})
		}
		function xj(a, b) {
			var c, d, e, f
			return J(function (g) {
				return 1 == g.a
					? ((c = Oc),
					  (d = Date.now() / 1e3),
					  (e = !0),
					  (a.h = Uj(a, {
							tb: a.M,
							onError: function (h) {
								Kj(a, h)
							},
							oc: function (h) {
								Vj(a, h)
							},
							onExpirationUpdated: function (h, k) {
								Wj(a, h, k)
							},
							onEvent: function (h) {
								a.dispatchEvent(h)
								h.type == Xj &&
									e &&
									((e = !1), (a.f.f = Date.now() / 1e3 - d))
							},
					  })),
					  a.h.configure(a.i.drm),
					  (f = {
							id: 0,
							language: 'und',
							primary: !1,
							audio: null,
							video: {
								id: 0,
								originalId: null,
								createSegmentIndex: function () {
									return Promise.resolve()
								},
								segmentIndex: null,
								mimeType: 'video/mp4',
								codecs: '',
								encrypted: !0,
								drmInfos: [],
								keyIds: new Set(),
								language: 'und',
								label: null,
								type: c.Ga,
								primary: !1,
								trickModeVideo: null,
								emsgSchemeIdUris: null,
								roles: [],
								channelsCount: null,
								audioSamplingRate: null,
								closedCaptions: null,
							},
							bandwidth: 100,
							allowedByApplication: !0,
							allowedByKeySystem: !0,
					  }),
					  u(g, sd(a.h, [f], []), 2))
					: u(g, a.h.Fb(b.A), 0)
			})
		}
		function yj(a, b, c) {
			function d() {
				return Yj(a)
			}
			b.uri = c.uri
			b.startTime = c.startTime
			a.Na = b.uri
			a.u = new Jh(b.A)
			null != b.startTime && a.u.l(b.startTime)
			a.w = new Uh({
				mc: function () {
					return b.A.playbackRate
				},
				ud: function (g) {
					b.A.playbackRate = g
				},
				Pd: function (g) {
					b.A.currentTime += g
				},
			})
			ek(a, a.i.streaming.rebufferingGoal)
			a.b.m(b.A, 'playing', d)
			a.b.m(b.A, 'pause', d)
			a.b.m(b.A, 'ended', d)
			a.b.m(b.A, 'ratechange', function () {
				return Zj(a)
			})
			'none' != a.a.preload &&
				a.b.ma(a.a, 'loadedmetadata', function () {
					a.f.g = Date.now() / 1e3 - c.wd
				})
			a.a.audioTracks &&
				(a.b.m(a.a.audioTracks, 'addtrack', function () {
					return nk(a)
				}),
				a.b.m(a.a.audioTracks, 'removetrack', function () {
					return nk(a)
				}),
				a.b.m(a.a.audioTracks, 'change', function () {
					return nk(a)
				}))
			a.a.textTracks &&
				(a.b.m(a.a.textTracks, 'addtrack', function (g) {
					nk(a)
					ok(a, g)
				}),
				a.b.m(a.a.textTracks, 'removetrack', function () {
					return nk(a)
				}),
				a.b.m(a.a.textTracks, 'change', function () {
					return nk(a)
				}))
			b.A.src = b.uri
			;(ad('Tizen') || ad('Web0S')) && b.A.load()
			a.g = pk
			a.dispatchEvent(Aj(hk))
			var e = new Ab()
			Ah(a.a, HTMLMediaElement.HAVE_METADATA, a.b, function () {
				e.resolve()
			})
			var f = !1
			a.Jc.push(function () {
				f = !0
			})
			Ah(a.a, HTMLMediaElement.HAVE_CURRENT_DATA, a.b, function () {
				var g
				return J(function (h) {
					if (1 == h.a) {
						if (f) return h['return']()
						qk(a)
						g = rk(a)
						return g.find(function (k) {
							return 'disabled' != k.mode
						})
							? h.o(2)
							: u(
									h,
									new Promise(function (k) {
										a.b.ma(a.a.textTracks, 'change', k)
										new M(k).R(1)
									}),
									2
							  )
					}
					if (f) return h['return']()
					sk(a)
					x(h)
				})
			})
			a.a.error
				? e.reject(Jj(a))
				: 'none' == a.a.preload &&
				  (Ta(
						'With <video preload="none">, the browser will not load anything until play() is called. We are unable to measure load latency in a meaningful way, and we cannot provide track info yet. Please do not use preload="none" with Shaka Player.'
				  ),
				  e.resolve())
			a.b.ma(a.a, 'error', function () {
				e.reject(Jj(a))
			})
			return new Bb(e, function () {
				e.reject(new L(2, 7, 7001))
				return Promise.resolve()
			})
		}
		function qk(a) {
			var b = a.i.preferredAudioLanguage
			if ('' != b) {
				a.qd(b)
				var c = a.i.preferredVariantRole
				'' != c && a.qd(b, c)
			}
		}
		function sk(a) {
			var b = a.i.preferredTextLanguage
			if ('' != b) {
				a.rd(b)
				var c = a.i.preferredTextRole
				'' != c && a.rd(b, c)
			}
		}
		function ok(a, b) {
			var c = b.track
			'metadata' == c.kind &&
				((c.mode = 'hidden'),
				a.b.m(c, 'cuechange', function () {
					if (c.activeCues)
						for (
							var d = r(c.activeCues), e = d.next();
							!e.done;
							e = d.next()
						)
							if (
								((e = e.value),
								Oj(a, e.startTime, e.endTime, e.type, e.value),
								a.I)
							)
								a.I.onCueMetadataChange(e.value)
				}),
				new M(function () {
					var d = rk(a)
					d = r(d)
					for (var e = d.next(); !e.done; e = d.next())
						e.value.mode = 'hidden'
				})
					.Vb()
					.R(0.5))
		}
		function Oj(a, b, c, d, e) {
			a.dispatchEvent(
				Aj(tk, { startTime: b, endTime: c, Vf: d, payload: e })
			)
		}
		function Tj(a) {
			function b(c) {
				return (
					(c.video && c.audio) ||
					(c.video && c.video.codecs.includes(','))
				)
			}
			a.variants.some(b) && (a.variants = a.variants.filter(b))
		}
		function Uj(a, b) {
			return new ld(b, a.i.drm.updateExpirationTime)
		}
		function oj(a) {
			return new $b(function (b, c) {
				a.l && a.l.segmentDownloaded(b, c)
			})
		}
		function ck(a, b) {
			return new Kh(
				a.a,
				a.s,
				a.i.streaming,
				b,
				function () {
					a.wa && Xh(a.wa, !0)
					if (a.c)
						for (
							var c = a.c,
								d = c.v.lc(),
								e = c.i.smallGapLimit,
								f = r(c.a.keys()),
								g = f.next();
							!g.done;
							g = f.next()
						) {
							g = g.value
							var h = c.a.get(g)
							var k = c.v.K
							'text' == g
								? ((k = k.c),
								  (k =
										null == k.a || null == k.b
											? !1
											: d >= k.a && d < k.b))
								: ((k = og(k, g)), (k = Nf(k, d, e)))
							if (
								!k &&
								(null != pg(c.v.K, g) && vi(c, h),
								h.na && (h.na.abort(), (h.na = null)),
								'text' === g)
							)
								for (
									g = c.v.K.u.a,
										g.g = 0,
										g.b = [],
										g.a = [],
										h = g.c,
										h.c = [],
										h.b = [],
										h.a = 0,
										pf(g),
										g = r(g.f.values()),
										h = g.next();
									!h.done;
									h = g.next()
								)
									Je(h.value)
						}
					a.B && uk(a)
				},
				function (c) {
					return a.dispatchEvent(c)
				}
			)
		}
		function dk(a) {
			var b = new ci(a.dc)
			di(
				b,
				function (d) {
					Pj(a, vk, d)
				},
				function (d) {
					Pj(a, wk, d)
				},
				function (d, e) {
					e || (Pj(a, vk, d), Pj(a, wk, d))
				}
			)
			var c = new Wh(a.a)
			c.a.add(b)
			return c
		}
		function ek(a, b) {
			a.B = new hh()
			a.B.a = kh
			lh(a.B, b, Math.min(0.5, b / 2))
			Mj(a)
			a.Ua = new M(function () {
				uk(a)
			}).ta(0.25)
		}
		function uk(a) {
			switch (a.g) {
				case pk:
					if (a.a.ended) var b = !0
					else {
						var c = Mf(a.a.buffered)
						b = null != c && c >= a.a.duration - 1
					}
					break
				case gk:
					a: if (a.a.ended || mg(a.D)) b = !0
					else {
						if (a.s.presentationTimeline.T()) {
							c = a.s.presentationTimeline.Ya()
							var d = Mf(a.a.buffered)
							if (null != d && d >= c) {
								b = !0
								break a
							}
						}
						b = !1
					}
					break
				default:
					b = !1
			}
			d = Of(a.a.buffered, a.a.currentTime)
			c = a.B
			var e = b,
				f = c.b.get(c.a)
			b = c.a
			d = e || d >= f ? jh : kh
			c.a = d
			b != d && Mj(a)
		}
		function Nj(a, b, c, d) {
			return new fg(a, b, c, d)
		}
		function fk(a) {
			return new fi(a.s, {
				lc: function () {
					return a.u.g()
				},
				getBandwidthEstimate: function () {
					return a.l.getBandwidthEstimate()
				},
				K: a.D,
				tb: a.M,
				onError: function (b) {
					return Kj(a, b)
				},
				onEvent: function (b) {
					return a.dispatchEvent(b)
				},
				Se: function () {
					a.j && a.j.update && a.j.update()
				},
				hd: function () {
					a.u && a.u.u()
					uk(a)
				},
			})
		}
		q.configure = function (a, b) {
			2 == arguments.length && 'string' == typeof a && (a = $i(a, b))
			a.manifest &&
				a.manifest.dash &&
				'defaultPresentationDelay' in a.manifest.dash &&
				(Ec(
					'manifest.dash.defaultPresentationDelay configuration',
					'Please Use manifest.defaultPresentationDelay instead.'
				),
				(a.manifest.defaultPresentationDelay =
					a.manifest.dash.defaultPresentationDelay),
				delete a.manifest.dash.defaultPresentationDelay)
			a.streaming &&
				a.streaming.lowLatencyMode &&
				(void 0 == a.streaming.inaccurateManifestTolerance &&
					(a.streaming.inaccurateManifestTolerance = 0),
				void 0 == a.streaming.rebufferingGoal &&
					(a.streaming.rebufferingGoal = 0.01))
			var c = dj(this.i, a, nj(this))
			xk(this)
			return c
		}
		function xk(a) {
			if (a.j) {
				var b = Sb(a.i.manifest)
				a.a && 'AUDIO' === a.a.nodeName && (b.disableVideo = !0)
				a.j.configure(b)
			}
			a.h && a.h.configure(a.i.drm)
			if (a.c) {
				a.c.configure(a.i.streaming)
				try {
					a.mb(a.s)
				} catch (f) {
					Kj(a, f)
				}
				a.l && ik(a)
				b = a.c.b
				!b || (b.allowedByApplication && b.allowedByKeySystem) || yk(a)
			}
			if (a.D && ((b = a.i.textDisplayFactory), a.Lc != b)) {
				var c = Lc(b),
					d = a.D,
					e = d.h
				d.h = c
				e && (c.setTextVisibility(e.isTextVisible()), e.destroy())
				d.c && (d.c.c = c)
				a.Lc = b
				a.c &&
					((b = a.c),
					(c = b.a.get('text')) && pi(b, c.stream, !0, 0, !0))
			}
			a.l &&
				(a.l.configure(a.i.abr),
				a.i.abr.enabled ? a.l.enable() : a.l.disable(),
				mk(a))
			a.B &&
				((b = a.i.streaming.rebufferingGoal),
				a.s && (b = Math.max(b, a.s.minBufferTime)),
				lh(a.B, b, Math.min(0.5, b / 2)))
		}
		q.getConfiguration = function () {
			var a = nj(this)
			dj(a, this.i, nj(this))
			return a
		}
		q.bf = function () {
			for (var a in this.i) delete this.i[a]
			dj(this.i, nj(this), nj(this))
			xk(this)
		}
		q.xe = function () {
			return this.g
		}
		q.Be = function () {
			return this.a
		}
		q.Kb = function () {
			return this.M
		}
		q.Rc = function () {
			return this.Na
		}
		q.Jd = function () {
			Ua(
				'getAdManager',
				"Shaka Player's ad features are currently in BETA and are NOT yet covered by semantic versioning compatibility guarantees.  The API may change at any time!"
			)
			return this.I
		}
		q.T = function () {
			return this.s
				? this.s.presentationTimeline.T()
				: this.a && this.a.src
				? Infinity == this.a.duration
				: !1
		}
		q.ab = function () {
			return this.s ? this.s.presentationTimeline.ab() : !1
		}
		q.Ne = function () {
			if (this.s) {
				var a = this.s.variants
				return a.length ? !a[0].video : !1
			}
			return this.a && this.a.src
				? this.a.videoTracks
					? 0 == this.a.videoTracks.length
					: 0 == this.a.videoHeight
				: !1
		}
		q.pd = function () {
			if (this.s) {
				var a = this.s.presentationTimeline
				return { start: a.pb(), end: a.Ja() }
			}
			return this.a && this.a.src && ((a = this.a.seekable), a.length)
				? { start: a.start(0), end: a.end(a.length - 1) }
				: { start: 0, end: 0 }
		}
		q.keySystem = function () {
			return Hd(this.drmInfo())
		}
		q.drmInfo = function () {
			return this.h ? this.h.c : null
		}
		q.Jb = function () {
			return this.h ? this.h.Jb() : Infinity
		}
		q.Vc = function () {
			return this.B ? this.B.a == kh : !1
		}
		q.De = function () {
			return this.a ? (this.w ? this.w.b : 1) : 0
		}
		q.mf = function (a) {
			0 == a
				? Ta('A trick play rate of 0 is unsupported!')
				: (this.a.paused && this.a.play(),
				  this.w.set(a),
				  this.g == gk &&
						(this.l.playbackRateChanged(a),
						oi(this.c, 1 < Math.abs(a))))
		}
		q.le = function () {
			this.g == pk && this.w.set(1)
			this.g == gk &&
				(this.w.set(1), this.l.playbackRateChanged(1), oi(this.c, !1))
		}
		q.Uc = function () {
			if (this.s) {
				for (
					var a = this.c ? this.c.b : null,
						b = [],
						c = r(this.s.variants),
						d = c.next();
					!d.done;
					d = c.next()
				)
					if (((d = d.value), Sg(d))) {
						var e = Mg(d)
						e.active = d == a
						b.push(e)
					}
				return b
			}
			return this.a && this.a.audioTracks
				? Array.from(this.a.audioTracks).map(function (f) {
						return Qg(f)
				  })
				: []
		}
		q.Mb = function () {
			if (this.s) {
				for (
					var a = this.c ? this.c.c : null,
						b = [],
						c = r(this.s.textStreams),
						d = c.next();
					!d.done;
					d = c.next()
				) {
					d = d.value
					var e = Ng(d)
					e.active = d == a
					b.push(e)
				}
				return b
			}
			return this.a && this.a.src && this.a.textTracks
				? rk(this).map(function (f) {
						var g = Rg(f)
						g.active = 'disabled' != f.mode
						g.type = 'text'
						g.originalTextId = f.id
						'captions' == f.kind &&
							(g.mimeType = 'application/cea-608')
						f.kind && (g.roles = [f.kind])
						return g
				  })
				: []
		}
		q.Yd = function (a) {
			if (this.s && this.c) {
				var b = this.s.textStreams.find(function (d) {
					return d.id == a.id
				})
				b &&
					b != this.c.c &&
					(kj(this.f.a, b, !1),
					ri(this.c, b),
					zk(this),
					(this.ha = b.language))
			} else if (this.a && this.a.src && this.a.textTracks) {
				b = rk(this)
				b = r(b)
				for (var c = b.next(); !c.done; c = b.next())
					(c = c.value),
						Og(c) == a.id
							? (c.mode = this.S ? 'showing' : 'hidden')
							: (c.mode = 'disabled')
				zk(this)
			}
		}
		q.cf = function (a, b, c) {
			b = void 0 === b ? !1 : b
			c = void 0 === c ? 0 : c
			if (this.s && this.c) {
				this.i.abr.enabled &&
					Ta(
						'Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack().'
					)
				var d = this.s.variants.find(function (e) {
					return e.id == a.id
				})
				d &&
					Sg(d) &&
					d != this.c.b &&
					(jj(this.f.a, d, !1),
					qi(this.c, d, b, c),
					Ak(this),
					(this.Oa = new ch(d)),
					ik(this))
			} else if (this.a && this.a.audioTracks) {
				b = Array.from(this.a.audioTracks)
				b = r(b)
				for (c = b.next(); !c.done; c = b.next())
					(c = c.value), Og(c) == a.id && (c.enabled = !0)
				Ak(this)
			}
		}
		q.te = function () {
			return Bk(this.Uc())
		}
		q.Ke = function () {
			return Bk(this.Mb())
		}
		q.se = function () {
			return Array.from(Ck(this.Uc()))
		}
		q.Je = function () {
			return Array.from(Ck(this.Mb()))
		}
		q.qd = function (a, b) {
			if (this.s && this.u)
				(this.Oa = new dh(a, b || '', 0, '', 'audio')), yk(this)
			else if (this.a && this.a.audioTracks) {
				var c = Array.from(this.a.audioTracks),
					d = Ag(a)
				c = r(c)
				for (var e = c.next(); !e.done; e = c.next()) {
					e = e.value
					var f = Qg(e)
					Ag(f.language) != d ||
						(b && !f.roles.includes(b)) ||
						(e.enabled = !0)
				}
				Ak(this)
			}
		}
		q.rd = function (a, b) {
			if (this.s && this.u) {
				this.ha = a
				this.ac = b || ''
				var c = Ug(this.s.textStreams, this.ha, this.ac)[0] || null
				c &&
					c != this.c.c &&
					(kj(this.f.a, c, !1),
					this.i.streaming.alwaysStreamText || this.Wc()) &&
					(ri(this.c, c), zk(this))
			} else {
				var d = Ag(a)
				;(c = this.Mb().find(function (e) {
					return Ag(e.language) == d && (!b || e.roles.includes(b))
				})) && this.Yd(c)
			}
		}
		q.df = function (a) {
			if (this.s && this.u) {
				for (
					var b = null, c = r(this.s.variants), d = c.next();
					!d.done;
					d = c.next()
				)
					if (((d = d.value), d.audio.label == a)) {
						b = d
						break
					}
				null != b &&
					((this.Oa = new dh(b.language, '', 0, a)), yk(this))
			}
		}
		q.Wc = function () {
			var a = this.S
			return this.D
				? this.D.h.isTextVisible()
				: this.a && this.a.src && this.a.textTracks
				? rk(this).some(function (b) {
						return 'showing' == b.mode
				  })
				: a
		}
		function rk(a) {
			return Array.from(a.a.textTracks).filter(function (b) {
				return (
					'metadata' != b.kind && 'Shaka Player TextTrack' != b.label
				)
			})
		}
		q.kf = function (a) {
			a = !!a
			if (this.S != a) {
				this.S = a
				if (this.g == gk)
					this.D.h.setTextVisibility(a),
						this.i.streaming.alwaysStreamText ||
							(a
								? this.c.c ||
								  ((a = Ug(
										this.s.textStreams,
										this.ha,
										this.ac
								  )),
								  0 < a.length && (ri(this.c, a[0]), zk(this)))
								: ni(this.c))
				else if (this.a && this.a.src && this.a.textTracks) {
					var b = rk(this)
					b = r(b)
					for (var c = b.next(); !c.done; c = b.next())
						(c = c.value),
							'disabled' != c.mode &&
								(c.mode = a ? 'showing' : 'hidden')
				}
				kk(this)
			}
		}
		q.Fe = function () {
			if (!this.T()) return null
			var a = this.X.f,
				b = 0
			if (this.u) b = this.u.g()
			else if (a) {
				if (null == a.startTime) return new Date()
				b = a.startTime
			}
			return this.s
				? new Date(1e3 * (this.s.presentationTimeline.f + b))
				: this.a && this.a.getStartDate
				? ((a = this.a.getStartDate()),
				  isNaN(a.getTime()) ? null : new Date(a.getTime() + 1e3 * b))
				: null
		}
		q.Kd = function () {
			if (!this.T()) return null
			if (this.s) return new Date(1e3 * this.s.presentationTimeline.f)
			if (this.a && this.a.getStartDate) {
				var a = this.a.getStartDate()
				return isNaN(a.getTime()) ? null : a
			}
			return null
		}
		q.kc = function () {
			if (this.g == gk) return this.D.kc()
			var a = { total: [], audio: [], video: [], text: [] }
			this.g == pk && (a.total = Pf(this.a.buffered))
			return a
		}
		q.getStats = function () {
			if (this.g != gk && this.g != pk)
				return {
					width: NaN,
					height: NaN,
					streamBandwidth: NaN,
					decodedFrames: NaN,
					droppedFrames: NaN,
					corruptedFrames: NaN,
					estimatedBandwidth: NaN,
					completionPercent: NaN,
					loadLatency: NaN,
					manifestTimeSeconds: NaN,
					drmTimeSeconds: NaN,
					playTime: NaN,
					pauseTime: NaN,
					bufferingTime: NaN,
					licenseTime: NaN,
					liveLatency: NaN,
					maxSegmentDuration: NaN,
					switchHistory: [],
					stateHistory: [],
				}
			Yj(this)
			var a = this.a,
				b = a.currentTime / a.duration
			if (!isNaN(b)) {
				var c = this.f
				b = Math.round(100 * b)
				c.c = isNaN(c.c) ? b : Math.max(c.c, b)
			}
			a.getVideoPlaybackQuality &&
				((a = a.getVideoPlaybackQuality()),
				(c = this.f),
				(b = Number(a.totalVideoFrames)),
				(c.L = Number(a.droppedVideoFrames)),
				(c.J = b),
				(this.f.I = Number(a.corruptedVideoFrames)))
			this.h ? ((a = this.h), (a = a.D ? a.D : NaN)) : (a = NaN)
			this.f.D = a
			if (this.g == gk) {
				if ((a = this.c.b))
					this.f.j = (this.w ? this.w.b : 1) * a.bandwidth
				a &&
					a.video &&
					((c = this.f),
					(b = a.video.height || NaN),
					(c.S = a.video.width || NaN),
					(c.l = b))
				this.T() &&
					((a = this.Kd().valueOf() + 1e3 * this.pd().end),
					(this.f.u = (Date.now() - a) / 1e3))
				this.s &&
					this.s.presentationTimeline &&
					(this.f.B = this.s.presentationTimeline.a)
				a = this.l.getBandwidthEstimate()
				this.f.h = a
			}
			var d = this.f
			a = d.S
			c = d.l
			b = d.j
			var e = d.J,
				f = d.L,
				g = d.I,
				h = d.h,
				k = d.c,
				l = d.g,
				m = d.w,
				n = d.f,
				p = gj(d.b, 'playing'),
				t = gj(d.b, 'paused'),
				v = gj(d.b, 'buffering'),
				w = d.D,
				y = d.u,
				A = d.B,
				B = hj(d.b),
				E = []
			d = r(d.a.a)
			for (var D = d.next(); !D.done; D = d.next())
				(D = D.value),
					E.push({
						timestamp: D.timestamp,
						id: D.id,
						type: D.type,
						fromAdaptation: D.fromAdaptation,
						bandwidth: D.bandwidth,
					})
			return {
				width: a,
				height: c,
				streamBandwidth: b,
				decodedFrames: e,
				droppedFrames: f,
				corruptedFrames: g,
				estimatedBandwidth: h,
				completionPercent: k,
				loadLatency: l,
				manifestTimeSeconds: m,
				drmTimeSeconds: n,
				playTime: p,
				pauseTime: t,
				bufferingTime: v,
				licenseTime: w,
				liveLatency: y,
				maxSegmentDuration: A,
				stateHistory: B,
				switchHistory: E,
			}
		}
		q.addTextTrack = function (a, b, c, d, e, f) {
			if (this.g == pk) {
				d = document.createElement('track')
				d.setAttribute('src', a)
				d.setAttribute('label', f || '')
				d.setAttribute('kind', c)
				d.setAttribute('srclang', b)
				this.a.appendChild(d)
				if (
					(a = this.Mb().find(function (k) {
						return (
							k.language == b &&
							k.label == (f || '') &&
							k.kind == c
						)
					}))
				)
					return nk(this), a
				throw Error('State error!')
			}
			if (this.g != gk) throw Error('State error!')
			var g = this.s.presentationTimeline.getDuration()
			if (Infinity == g) throw new L(1, 4, 4033)
			if (!d) {
				var h = ph(a)
				d = {
					srt: 'text/srt',
					vtt: 'text/vtt',
					webvtt: 'text/vtt',
					ttml: 'application/ttml+xml',
				}[h]
				if (!d) throw new L(1, 2, 2011, h)
			}
			a = {
				id: this.Bd++,
				originalId: null,
				createSegmentIndex: function () {
					return Promise.resolve()
				},
				segmentIndex: Sh(0, g, [a]),
				mimeType: d || '',
				codecs: e || '',
				kind: c,
				encrypted: !1,
				drmInfos: [],
				keyIds: new Set(),
				language: b,
				label: f || null,
				type: 'text',
				primary: !1,
				trickModeVideo: null,
				emsgSchemeIdUris: null,
				roles: [],
				channelsCount: null,
				audioSamplingRate: null,
				closedCaptions: null,
			}
			this.s.textStreams.push(a)
			nk(this)
			return Ng(a)
		}
		q.td = function (a, b) {
			this.Oc.width = a
			this.Oc.height = b
		}
		q.nd = function () {
			if (this.g == gk) {
				var a = this.c
				if (a.C.a) a = !1
				else if (a.g) a = !1
				else {
					for (
						var b = r(a.a.values()), c = b.next();
						!c.done;
						c = b.next()
					)
						(c = c.value), c.Nb && ((c.Nb = !1), mi(a, c, 0.1))
					a = !0
				}
			} else a = !1
			return a
		}
		q.ye = function () {
			Ta(
				"Shaka Player's internal Manifest structure is NOT covered by semantic versioning compatibility guarantees.  It may change at any time!  Please consider filing a feature request for whatever you use getManifest() for."
			)
			return this.s
		}
		q.ze = function () {
			return this.cc
		}
		function nj(a) {
			var b = bj()
			b.streaming.failureCallback = function (c) {
				var d = [1001, 1002, 1003]
				a.T() && d.includes(c.code) && ((c.severity = 1), a.nd())
			}
			b.textDisplayFactory = function () {
				return a.ec ? new Ti(a.a, a.ec) : new Pi(a.a)
			}
			return b
		}
		q.be = function (a) {
			this.ec = a
		}
		function Rj(a, b) {
			for (
				var c = new Set(), d = r(b.textStreams), e = d.next();
				!e.done;
				e = d.next()
			)
				(e = e.value),
					('application/cea-608' != e.mimeType &&
						'application/cea-708' != e.mimeType) ||
						c.add(e.originalId)
			d = r(b.variants)
			for (e = d.next(); !e.done; e = d.next())
				if ((e = e.value.video) && e.closedCaptions)
					for (
						var f = r(e.closedCaptions.keys()), g = f.next();
						!g.done;
						g = f.next()
					)
						if (((g = g.value), !c.has(g))) {
							var h = g.startsWith('CC')
									? 'application/cea-608'
									: 'application/cea-708',
								k = new Th()
							h = {
								id: a.Bd++,
								originalId: g,
								createSegmentIndex: function () {
									return Promise.resolve()
								},
								segmentIndex: k,
								mimeType: h,
								codecs: '',
								kind: 'caption',
								encrypted: !1,
								drmInfos: [],
								keyIds: new Set(),
								language: e.closedCaptions.get(g),
								label: null,
								type: 'text',
								primary: !1,
								trickModeVideo: null,
								emsgSchemeIdUris: null,
								roles: e.roles,
								channelsCount: null,
								audioSamplingRate: null,
								closedCaptions: null,
							}
							b.textStreams.push(h)
							c.add(g)
						}
		}
		q.mb = function (a) {
			Kg(this.h, this.c ? this.c.b : null, a)
			if (!a.variants.some(Sg)) throw new L(2, 4, 4032)
			for (
				var b = this.i.restrictions,
					c = this.Oc,
					d = !1,
					e = r(a.variants),
					f = e.next();
				!f.done;
				f = e.next()
			) {
				f = f.value
				var g = f.allowedByApplication
				f.allowedByApplication = Jg(f, b, c)
				g != f.allowedByApplication && (d = !0)
			}
			d && this.c && nk(this)
			if ((b = this.h ? this.h.c : null))
				for (c = r(a.variants), d = c.next(); !d.done; d = c.next())
					for (
						d = d.value,
							d = r(
								(d.video ? d.video.drmInfos : []).concat(
									d.audio ? d.audio.drmInfos : []
								)
							),
							e = d.next();
						!e.done;
						e = d.next()
					)
						if (((e = e.value), e.keySystem == b.keySystem))
							for (
								e = r(e.initData || []), f = e.next();
								!f.done;
								f = e.next()
							)
								(f = f.value),
									Cd(this.h, f.initDataType, f.initData)
			Dk(this, a)
		}
		function lk(a, b) {
			var c, d, e, f, g
			return J(function (h) {
				if (1 == h.a)
					return (
						(c = a.audio),
						(d = a.video),
						(e = function (k, l) {
							var m, n
							return J(function (p) {
								if (1 == p.a)
									return k
										? u(p, k.createSegmentIndex(), 2)
										: p['return'](null)
								m = k.segmentIndex[Symbol.iterator]().seek(l)
								if (!m) return p['return'](null)
								n = m.startTime
								return p['return'](n)
							})
						}),
						u(h, e(c, b), 2)
					)
				if (3 != h.a) return (f = h.b), u(h, e(d, b), 3)
				g = h.b
				return null != g && null != f
					? h['return'](Math.max(g, f))
					: null != g
					? h['return'](g)
					: null != f
					? h['return'](f)
					: h['return'](b)
			})
		}
		function Mj(a) {
			var b = a.Vc()
			if (a.f && a.B && a.u) {
				var c = a.w
				c.f = b
				Vh(c)
				Yj(a)
			}
			a.dispatchEvent(Aj(Ek, { buffering: b }))
		}
		function Zj(a) {
			var b = a.a.playbackRate
			0 != b && (a.w && a.w.set(b), (b = Aj(Fk)), a.dispatchEvent(b))
		}
		function Yj(a) {
			if (a.f && a.B) {
				var b = a.f.b
				a.B.a == kh
					? fj(b, 'buffering')
					: a.a.paused
					? fj(b, 'paused')
					: a.a.ended
					? fj(b, 'ended')
					: fj(b, 'playing')
			}
		}
		function ik(a) {
			try {
				Dk(a, a.s)
			} catch (c) {
				return Kj(a, c), !1
			}
			var b = a.s.variants.filter(function (c) {
				return Sg(c)
			})
			b = a.Oa.create(b)
			a.l.setVariants(Array.from(b.values()))
			return !0
		}
		function yk(a) {
			var b
			if ((b = ik(a) ? a.l.chooseVariant() : null)) {
				if (b == a.c.b) return
				jj(a.f.a, b, !0)
				qi(a.c, b, !0, 0)
				Ak(a)
			}
			bk(a)
		}
		function jk(a, b, c) {
			a = Ag(a.i.preferredTextLanguage)
			b = Ag(b.language)
			c = Ag(c.language)
			return zg(c, a) && !zg(b, c)
		}
		function bk(a) {
			var b = Aj(Gk)
			Hk(a, b)
		}
		function nk(a) {
			var b = Aj(Ik)
			Hk(a, b)
		}
		function Ak(a) {
			var b = Aj(Jk)
			Hk(a, b)
		}
		function zk(a) {
			var b = Aj(Kk)
			Hk(a, b)
		}
		function kk(a) {
			var b = Aj(Lk)
			Hk(a, b)
		}
		function mk(a) {
			var b = Aj(Mk, { Wf: a.i.abr.enabled })
			Hk(a, b)
		}
		function Kj(a, b) {
			if (a.g != Dj) {
				var c = Aj(Nk, { detail: b })
				a.dispatchEvent(c)
				c.defaultPrevented && (b.handled = !0)
			}
		}
		function Pj(a, b, c) {
			a.dispatchEvent(
				Aj(b, {
					detail: {
						schemeIdUri: c.schemeIdUri,
						value: c.value,
						startTime: c.startTime,
						endTime: c.endTime,
						id: c.id,
						eventElement: c.eventElement,
					},
				})
			)
		}
		function Jj(a) {
			if (!a.a.error) return null
			var b = a.a.error.code
			if (1 == b) return null
			var c = a.a.error.msExtendedCode
			c && (0 > c && (c += Math.pow(2, 32)), (c = c.toString(16)))
			return new L(2, 3, 3016, b, c, a.a.error.message)
		}
		function Vj(a, b) {
			if (a.c) {
				var c = Object.keys(b),
					d = 1 == c.length && '00' == c[0],
					e = !1
				if (c.length) {
					c = r(a.s.variants)
					for (var f = c.next(); !f.done; f = c.next()) {
						f = f.value
						var g = []
						f.audio && g.push(f.audio)
						f.video && g.push(f.video)
						g = r(g)
						for (var h = g.next(); !h.done; h = g.next()) {
							var k = h.value
							h = f.allowedByKeySystem
							if (k.keyIds.size) {
								f.allowedByKeySystem = !0
								k = r(k.keyIds)
								for (var l = k.next(); !l.done; l = k.next())
									(l = l.value),
										(l = b[d ? '00' : l]),
										(f.allowedByKeySystem =
											f.allowedByKeySystem &&
											!!l &&
											!Ok.includes(l))
							}
							h != f.allowedByKeySystem && (e = !0)
						}
					}
				}
				e && ik(a)
				;(d = a.c.b) && !d.allowedByKeySystem && yk(a)
				e && nk(a)
			}
		}
		function Wj(a, b, c) {
			if (a.j && a.j.onExpirationUpdated) a.j.onExpirationUpdated(b, c)
			b = Aj(Pk)
			a.dispatchEvent(b)
		}
		function ak(a, b, c) {
			0 < b && (a.T() || a.ae(b))
			b = a.getDuration()
			c < b && (a.T() || a.Da(c))
		}
		function Dk(a, b) {
			var c = a.h ? Qc(a.h.S) : {},
				d = Object.keys(c)
			d = d.length && '00' == d[0]
			for (
				var e = !1,
					f = !1,
					g = new Set(),
					h = new Set(),
					k = r(b.variants),
					l = k.next();
				!l.done;
				l = k.next()
			) {
				l = l.value
				var m = []
				l.audio && m.push(l.audio)
				l.video && m.push(l.video)
				m = r(m)
				for (var n = m.next(); !n.done; n = m.next())
					if (((n = n.value), n.keyIds.size)) {
						n = r(n.keyIds)
						for (var p = n.next(); !p.done; p = n.next()) {
							p = p.value
							var t = c[d ? '00' : p]
							t ? Ok.includes(t) && h.add(t) : g.add(p)
						}
					}
				l.allowedByApplication
					? l.allowedByKeySystem && (e = !0)
					: (f = !0)
			}
			if (!e)
				throw (
					((c = {
						hasAppRestrictions: f,
						missingKeys: Array.from(g),
						restrictedKeyStatuses: Array.from(h),
					}),
					new L(2, 4, 4012, c))
				)
		}
		function Hk(a, b) {
			J(function (c) {
				if (1 == c.a) return u(c, Promise.resolve(), 2)
				a.g != Dj && a.dispatchEvent(b)
				x(c)
			})
		}
		function Ck(a) {
			var b = new Set()
			a = r(a)
			for (var c = a.next(); !c.done; c = a.next())
				(c = c.value), c.language ? b.add(Ag(c.language)) : b.add('und')
			return b
		}
		function Bk(a) {
			var b = new Map()
			a = r(a)
			for (var c = a.next(); !c.done; c = a.next()) {
				var d = c.value
				c = 'und'
				var e = []
				d.language && (c = Ag(d.language))
				'variant' == d.type ? (e = d.audioRoles) : (e = d.roles)
				;(e && e.length) || (e = [''])
				b.has(c) || b.set(c, new Set())
				d = r(e)
				for (e = d.next(); !e.done; e = d.next())
					(e = e.value), b.get(c).add(e)
			}
			var f = []
			b.forEach(function (g, h) {
				for (var k = r(g), l = k.next(); !l.done; l = k.next())
					f.push({ language: h, role: l.value })
			})
			return f
		}
		function Ej() {
			return new L(2, 7, 7e3)
		}
		function zj(a, b, c, d, e, f) {
			return d == a &&
				e.A == f.A &&
				e.uri == f.uri &&
				e.mimeType == f.mimeType
				? b
				: c
		}
		function Ji() {
			return {
				A: null,
				mimeType: null,
				startTime: null,
				wd: NaN,
				uri: null,
			}
		}
		function Fj(a) {
			return new Promise(function (b, c) {
				a.bb = function () {
					return c(Ej())
				}
				a.nc = function () {
					return b()
				}
				a.onError = function (d) {
					return c(d)
				}
				a.pc = function () {
					return c(Ej())
				}
			})
		}
		K('shaka.Player', U)
		U.prototype.setVideoContainer = U.prototype.be
		U.prototype.getManifestParserFactory = U.prototype.ze
		U.prototype.getManifest = U.prototype.ye
		U.prototype.retryStreaming = U.prototype.nd
		U.prototype.setMaxHardwareResolution = U.prototype.td
		U.prototype.addTextTrack = U.prototype.addTextTrack
		U.prototype.getStats = U.prototype.getStats
		U.prototype.getBufferedInfo = U.prototype.kc
		U.prototype.getPresentationStartTimeAsDate = U.prototype.Kd
		U.prototype.getPlayheadTimeAsDate = U.prototype.Fe
		U.prototype.setTextTrackVisibility = U.prototype.kf
		U.prototype.isTextTrackVisible = U.prototype.Wc
		U.prototype.selectVariantsByLabel = U.prototype.df
		U.prototype.selectTextLanguage = U.prototype.rd
		U.prototype.selectAudioLanguage = U.prototype.qd
		U.prototype.getTextLanguages = U.prototype.Je
		U.prototype.getAudioLanguages = U.prototype.se
		U.prototype.getTextLanguagesAndRoles = U.prototype.Ke
		U.prototype.getAudioLanguagesAndRoles = U.prototype.te
		U.prototype.selectVariantTrack = U.prototype.cf
		U.prototype.selectTextTrack = U.prototype.Yd
		U.prototype.getTextTracks = U.prototype.Mb
		U.prototype.getVariantTracks = U.prototype.Uc
		U.prototype.cancelTrickPlay = U.prototype.le
		U.prototype.trickPlay = U.prototype.mf
		U.prototype.getPlaybackRate = U.prototype.De
		U.prototype.isBuffering = U.prototype.Vc
		U.prototype.getExpiration = U.prototype.Jb
		U.prototype.drmInfo = U.prototype.drmInfo
		U.prototype.keySystem = U.prototype.keySystem
		U.prototype.seekRange = U.prototype.pd
		U.prototype.isAudioOnly = U.prototype.Ne
		U.prototype.isInProgress = U.prototype.ab
		U.prototype.isLive = U.prototype.T
		U.prototype.getAdManager = U.prototype.Jd
		U.prototype.getAssetUri = U.prototype.Rc
		U.prototype.getNetworkingEngine = U.prototype.Kb
		U.prototype.getMediaElement = U.prototype.Be
		U.prototype.getLoadMode = U.prototype.xe
		U.prototype.resetConfiguration = U.prototype.bf
		U.prototype.getConfiguration = U.prototype.getConfiguration
		U.prototype.configure = U.prototype.configure
		U.prototype.load = U.prototype.load
		U.prototype.unload = U.prototype.yd
		U.prototype.detach = U.prototype.detach
		U.prototype.attach = U.prototype.Fb
		U.probeSupport = function () {
			var a, b, c, d, e, f
			return J(function (g) {
				if (1 == g.a) return u(g, Qd(), 2)
				a = g.b
				var h = {}
				if (Wc()) {
					for (var k in oh) h[k] = !0
					for (var l in qh) h[l] = !0
				}
				k = {
					mpd: 'application/dash+xml',
					m3u8: 'application/x-mpegurl',
					ism: 'application/vnd.ms-sstr+xml',
				}
				l = r([
					'application/dash+xml',
					'application/x-mpegurl',
					'application/vnd.apple.mpegurl',
					'application/vnd.ms-sstr+xml',
				])
				for (var m = l.next(); !m.done; m = l.next())
					(m = m.value), (h[m] = Wc() ? !!oh[m] : Xc(m))
				for (var n in k) h[n] = Wc() ? !!qh[n] : Xc(k[n])
				b = h
				h = {}
				n = r(
					'video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",video/mp4; codecs="av01.0.01M.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="vp09.00.10.08",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(
						','
					)
				)
				for (k = n.next(); !k.done; k = n.next())
					(k = k.value),
						(h[k] = Wc()
							? Zf(k)
								? !0
								: MediaSource.isTypeSupported(k) || Vf(k)
							: Xc(k)),
						(l = k.split(';')[0]),
						(h[l] = h[l] || h[k])
				c = h
				d = { manifest: b, media: c, drm: a }
				e = Qk
				for (f in e) d[f] = e[f]()
				return g['return'](d)
			})
		}
		U.isBrowserSupported = function () {
			if (
				!(
					window.Promise &&
					window.Uint8Array &&
					Array.prototype.forEach
				)
			)
				return !1
			var a = bd()
			return (a && 12 > a) ||
				!(
					window.MediaKeys &&
					window.navigator &&
					window.navigator.requestMediaKeySystemAccess &&
					window.MediaKeySystemAccess &&
					window.MediaKeySystemAccess.prototype.getConfiguration
				)
				? !1
				: Wc()
				? !0
				: Xc('application/x-mpegurl')
		}
		U.setAdManagerFactory = function (a) {
			pj = a
		}
		U.registerSupportPlugin = function (a, b) {
			Qk[a] = b
		}
		U.prototype.destroy = U.prototype.destroy
		var Mk = 'abrstatuschanged',
			Gk = 'adaptation',
			Ek = 'buffering',
			Xj = 'drmsessionupdate',
			Gi = 'emsg',
			Nk = 'error',
			Pk = 'expirationupdated',
			Ij = 'loaded',
			Gj = 'loading',
			Sj = 'manifestparsed',
			tk = 'metadata',
			Bj = 'onstatechange',
			Cj = 'onstateidle',
			Fk = 'ratechange',
			hk = 'streaming',
			Kk = 'textchanged',
			Lk = 'texttrackvisibility',
			Qj = 'timelineregionadded',
			vk = 'timelineregionenter',
			wk = 'timelineregionexit',
			Ik = 'trackschanged',
			Lj = 'unloading',
			Jk = 'variantchanged',
			Rk = {
				uf: Mk,
				vf: Gk,
				wf: Ek,
				xf: Xj,
				zf: Gi,
				Error: Nk,
				Af: Pk,
				Cf: 'largegap',
				Df: Ij,
				Ef: Gj,
				Ff: Sj,
				Metadata: tk,
				Gf: Bj,
				Hf: Cj,
				If: Fk,
				Jf: 'sessiondata',
				Kf: hk,
				Lf: Kk,
				Mf: Lk,
				Nf: Qj,
				Of: vk,
				Pf: wk,
				Qf: Ik,
				Rf: Lj,
				Sf: Jk,
			},
			Dj = 0,
			mj = 1,
			gk = 2,
			pk = 3
		U.LoadMode = {
			DESTROYED: Dj,
			NOT_LOADED: mj,
			MEDIA_SOURCE: gk,
			SRC_EQUALS: pk,
		}
		U.version = 'v3.0.5-master-7-g56a53db3'
		var Sk = ['3', '0']
		Fc = new (function (a) {
			this.a = a
			this.c = Gc
			this.b = Hc
		})(new Dc(Number(Sk[0]), Number(Sk[1])))
		var Ok = ['output-restricted', 'internal-error'],
			Qk = {},
			pj = null
		function Tk() {
			this.a = []
			this.f = this.b = this.c = 0
		}
		function W(a, b) {
			var c = this
			this.c = a
			this.a = b
			this.f = !1
			this.g = this.a.getVolume()
			this.b = new mc()
			this.b.m(this.a, google.ima.AdEvent.Type.PAUSED, function () {
				c.f = !0
			})
			this.b.m(this.a, google.ima.AdEvent.Type.RESUMED, function () {
				c.f = !1
			})
		}
		q = W.prototype
		q.getDuration = function () {
			return this.c.getDuration()
		}
		q.getRemainingTime = function () {
			return this.a.getRemainingTime()
		}
		q.isPaused = function () {
			return this.f
		}
		q.isSkippable = function () {
			return 0 <= this.c.getSkipTimeOffset()
		}
		q.getTimeUntilSkippable = function () {
			var a = this.c.getSkipTimeOffset()
			a = this.getRemainingTime() - a
			return Math.max(a, 0)
		}
		q.canSkipNow = function () {
			return this.a.getAdSkippableState()
		}
		q.skip = function () {
			return this.a.skip()
		}
		q.pause = function () {
			return this.a.pause()
		}
		q.play = function () {
			return this.a.resume()
		}
		q.getVolume = function () {
			return this.a.getVolume()
		}
		q.setVolume = function (a) {
			return this.a.setVolume(a)
		}
		q.isMuted = function () {
			return 0 == this.a.getVolume()
		}
		q.resize = function (a, b) {
			this.a.resize(
				a,
				b,
				document.fullscreenElement
					? google.ima.ViewMode.FULLSCREEN
					: google.ima.ViewMode.NORMAL
			)
		}
		q.setMuted = function (a) {
			a
				? ((this.g = this.getVolume()), this.setVolume(0))
				: this.setVolume(this.g)
		}
		q.getSequenceLength = function () {
			var a = this.c.getAdPodInfo()
			return null == a ? 1 : a.getTotalAds()
		}
		q.getPositionInSequence = function () {
			var a = this.c.getAdPodInfo()
			return null == a ? 1 : a.getAdPosition()
		}
		q.release = function () {
			this.a = this.c = null
		}
		K('shaka.ads.ClientSideAd', W)
		W.prototype.release = W.prototype.release
		W.prototype.getPositionInSequence = W.prototype.getPositionInSequence
		W.prototype.getSequenceLength = W.prototype.getSequenceLength
		W.prototype.setMuted = W.prototype.setMuted
		W.prototype.resize = W.prototype.resize
		W.prototype.isMuted = W.prototype.isMuted
		W.prototype.setVolume = W.prototype.setVolume
		W.prototype.getVolume = W.prototype.getVolume
		W.prototype.play = W.prototype.play
		W.prototype.pause = W.prototype.pause
		W.prototype.skip = W.prototype.skip
		W.prototype.canSkipNow = W.prototype.canSkipNow
		W.prototype.getTimeUntilSkippable = W.prototype.getTimeUntilSkippable
		W.prototype.isSkippable = W.prototype.isSkippable
		W.prototype.isPaused = W.prototype.isPaused
		W.prototype.getRemainingTime = W.prototype.getRemainingTime
		W.prototype.getDuration = W.prototype.getDuration
		function Uk(a, b, c, d) {
			var e = this
			this.j = a
			this.a = b
			this.l = NaN
			this.f = d
			this.h = null
			this.b = new mc()
			google.ima.settings.setLocale(c)
			a = new google.ima.AdDisplayContainer(this.j, this.a)
			a.initialize()
			this.g = new google.ima.AdsLoader(a)
			this.g.getSettings().setPlayerType('shaka-player')
			this.g.getSettings().setPlayerVersion('v3.0.5-master-7-g56a53db3')
			this.c = null
			this.b.ma(
				this.g,
				google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
				function (f) {
					Vk(e, f)
				}
			)
			this.b.m(this.g, google.ima.AdEvent.Type.AD_ERROR, function (f) {
				Wk(e, f)
			})
			this.a.onended = function () {
				e.g.contentComplete()
			}
		}
		Uk.prototype.stop = function () {
			this.c.stop()
		}
		function Wk(a, b) {
			b.getError()
			Xk(a, null)
			a.f(new N('ad-cue-points-changed', { cuepoints: [] }))
		}
		function Vk(a, b) {
			a.f(new N('ads-loaded', { loadTime: Date.now() / 1e3 - a.l }))
			a.c = b.getAdsManager(a.a)
			a.f(new N('ima-ad-manager-loaded', { imaAdsManager: a.c }))
			var c = a.c.getCuePoints()
			if (c.length) {
				var d = []
				c = r(c)
				for (var e = c.next(); !e.done; e = c.next())
					d.push(new Yk(e.value))
				a.f(new N('ad-cue-points-changed', { cuepoints: d }))
			}
			Zk(a)
			try {
				a.c.init(
					a.a.offsetWidth,
					a.a.offsetHeight,
					document.fullscreenElement
						? google.ima.ViewMode.FULLSCREEN
						: google.ima.ViewMode.NORMAL
				),
					a.b.m(a.a, 'loadeddata', function () {
						a.c.resize(
							a.a.offsetWidth,
							a.a.offsetHeight,
							document.fullscreenElement
								? google.ima.ViewMode.FULLSCREEN
								: google.ima.ViewMode.NORMAL
						)
					}),
					a.c.start()
			} catch (f) {
				Xk(a, null)
			}
		}
		function Zk(a) {
			a.b.m(a.c, google.ima.AdErrorEvent.Type.AD_ERROR, function (b) {
				Wk(a, b)
			})
			a.b.m(
				a.c,
				google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
				function (b) {
					$k(a, b)
				}
			)
			a.b.m(a.c, google.ima.AdEvent.Type.STARTED, function (b) {
				$k(a, b)
			})
			a.b.m(a.c, google.ima.AdEvent.Type.FIRST_QUARTILE, function (b) {
				a.f(new N('ad-first-quartile', { originalEvent: b }))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.MIDPOINT, function (b) {
				a.f(new N('ad-midpoint', { originalEvent: b }))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.THIRD_QUARTILE, function (b) {
				a.f(new N('ad-third-quartile', { originalEvent: b }))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.COMPLETE, function (b) {
				a.f(new N('ad-complete', { originalEvent: b }))
			})
			a.b.m(
				a.c,
				google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
				function (b) {
					Xk(a, b)
				}
			)
			a.b.m(a.c, google.ima.AdEvent.Type.ALL_ADS_COMPLETED, function (b) {
				Xk(a, b)
			})
			a.b.m(a.c, google.ima.AdEvent.Type.SKIPPED, function (b) {
				a.f(new N('ad-skipped', { originalEvent: b }))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.VOLUME_CHANGED, function (b) {
				a.f(new N('ad-volume-changed', { originalEvent: b }))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.VOLUME_MUTED, function (b) {
				a.f(new N('ad-muted', { originalEvent: b }))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.PAUSED, function (b) {
				a.h.f = !0
				a.f(new N('ad-paused', { originalEvent: b }))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.RESUMED, function (b) {
				a.h.f = !1
				a.f(new N('ad-resumed', { originalEvent: b }))
			})
			a.b.m(
				a.c,
				google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED,
				function (b) {
					a.f(new N('ad-skip-state-changed', { originalEvent: b }))
				}
			)
			a.b.m(a.c, google.ima.AdEvent.Type.CLICK, function () {
				a.f(new N('ad-clicked'))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.AD_PROGRESS, function (b) {
				a.f(new N('ad-progress', { originalEvent: b }))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.AD_BUFFERING, function (b) {
				a.f(new N('ad-buffering', { originalEvent: b }))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.IMPRESSION, function (b) {
				a.f(new N('ad-impression', { originalEvent: b }))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.DURATION_CHANGE, function (b) {
				a.f(new N('ad-duration-changed', { originalEvent: b }))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.USER_CLOSE, function (b) {
				a.f(new N('ad-closed', { originalEvent: b }))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.LOADED, function (b) {
				a.f(new N('ad-loaded', { originalEvent: b }))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.ALL_ADS_COMPLETED, function (b) {
				a.f(new N('all-ads-completed', { originalEvent: b }))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.LINEAR_CHANGED, function (b) {
				a.f(new N('ad-linear-changed', { originalEvent: b }))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.AD_METADATA, function (b) {
				a.f(new N('ad-metadata', { originalEvent: b }))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.LOG, function (b) {
				a.f(new N('ad-recoverable-error', { originalEvent: b }))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.AD_BREAK_READY, function (b) {
				a.f(new N('ad-break-ready', { originalEvent: b }))
			})
			a.b.m(a.c, google.ima.AdEvent.Type.INTERACTION, function (b) {
				a.f(new N('ad-interaction', { originalEvent: b }))
			})
		}
		function $k(a, b) {
			var c = b.getAd()
			a.h = new W(c, a.c)
			a.f(
				new N('ad-started', {
					ad: a.h,
					sdkAdObject: c,
					originalEvent: b,
				})
			)
			a.j.setAttribute('ad-active', 'true')
			a.a.pause()
		}
		function Xk(a, b) {
			a.f(new N('ad-stopped', { originalEvent: b }))
			a.j.removeAttribute('ad-active')
			a.a.play()
		}
		function X(a, b) {
			this.c = a
			this.b = null
			this.a = b
		}
		q = X.prototype
		q.getDuration = function () {
			return this.b ? this.b.duration : -1
		}
		q.getRemainingTime = function () {
			return this.b ? this.b.duration - this.b.currentTime : -1
		}
		q.isPaused = function () {
			return this.a.paused
		}
		q.isSkippable = function () {
			return this.c.isSkippable()
		}
		q.getTimeUntilSkippable = function () {
			var a = this.c.getSkipTimeOffset()
			a = this.getRemainingTime() - a
			return Math.max(a, 0)
		}
		q.canSkipNow = function () {
			return 0 == this.getTimeUntilSkippable()
		}
		q.skip = function () {
			this.a.currentTime += this.getRemainingTime()
		}
		q.pause = function () {
			return this.a.pause()
		}
		q.play = function () {
			return this.a.play()
		}
		q.getVolume = function () {
			return this.a.volume
		}
		q.setVolume = function (a) {
			this.a.volume = a
		}
		q.isMuted = function () {
			return this.a.muted
		}
		q.resize = function () {}
		q.setMuted = function (a) {
			this.a.muted = a
		}
		q.getSequenceLength = function () {
			var a = this.c.getAdPodInfo()
			return null == a ? 1 : a.getTotalAds()
		}
		q.getPositionInSequence = function () {
			var a = this.c.getAdPodInfo()
			return null == a ? 1 : a.getAdPosition()
		}
		q.release = function () {
			this.a = this.b = this.c = null
		}
		K('shaka.ads.ServerSideAd', X)
		X.prototype.release = X.prototype.release
		X.prototype.getPositionInSequence = X.prototype.getPositionInSequence
		X.prototype.getSequenceLength = X.prototype.getSequenceLength
		X.prototype.setMuted = X.prototype.setMuted
		X.prototype.resize = X.prototype.resize
		X.prototype.isMuted = X.prototype.isMuted
		X.prototype.setVolume = X.prototype.setVolume
		X.prototype.getVolume = X.prototype.getVolume
		X.prototype.play = X.prototype.play
		X.prototype.pause = X.prototype.pause
		X.prototype.skip = X.prototype.skip
		X.prototype.canSkipNow = X.prototype.canSkipNow
		X.prototype.getTimeUntilSkippable = X.prototype.getTimeUntilSkippable
		X.prototype.isSkippable = X.prototype.isSkippable
		X.prototype.isPaused = X.prototype.isPaused
		X.prototype.getRemainingTime = X.prototype.getRemainingTime
		X.prototype.getDuration = X.prototype.getDuration
		function al(a, b, c, d) {
			var e = this
			this.u = a
			this.a = b
			this.g = null
			this.D = NaN
			this.f = d
			this.B = !1
			this.w = this.h = this.j = null
			this.l = ''
			this.b = new mc()
			a = new google.ima.dai.api.UiSettings()
			a.setLocale(c)
			this.c = new google.ima.dai.api.StreamManager(this.a, this.u, a)
			this.b.m(
				this.c,
				google.ima.dai.api.StreamEvent.Type.LOADED,
				function (f) {
					bl(e, f)
				}
			)
			this.b.m(
				this.c,
				google.ima.dai.api.StreamEvent.Type.ERROR,
				function () {
					e.l.length
						? e.g.resolve(e.l)
						: e.g.reject(
								'IMA Stream request returned an error and there was no backup asset uri provided.'
						  )
					e.g = null
				}
			)
			this.b.m(
				this.c,
				google.ima.dai.api.StreamEvent.Type.AD_BREAK_STARTED,
				function () {}
			)
			this.b.m(
				this.c,
				google.ima.dai.api.StreamEvent.Type.STARTED,
				function (f) {
					f = f.getAd()
					e.h = new X(f, e.a)
					e.w && (e.h.b = e.w)
					e.f(new N('ad-started', { ad: e.h }))
					e.u.setAttribute('ad-active', 'true')
				}
			)
			this.b.m(
				this.c,
				google.ima.dai.api.StreamEvent.Type.AD_BREAK_ENDED,
				function () {
					e.u.removeAttribute('ad-active')
					var f = e.a.currentTime
					e.j && e.j > f && ((e.a.currentTime = e.j), (e.j = null))
				}
			)
			this.b.m(
				this.c,
				google.ima.dai.api.StreamEvent.Type.AD_PROGRESS,
				function (f) {
					e.w = f.getStreamData().adProgressData
					e.h && (e.h.b = e.w)
				}
			)
			this.b.m(
				this.c,
				google.ima.dai.api.StreamEvent.Type.FIRST_QUARTILE,
				function () {
					e.f(new N('ad-first-quartile'))
				}
			)
			this.b.m(
				this.c,
				google.ima.dai.api.StreamEvent.Type.MIDPOINT,
				function () {
					e.f(new N('ad-midpoint'))
				}
			)
			this.b.m(
				this.c,
				google.ima.dai.api.StreamEvent.Type.THIRD_QUARTILE,
				function () {
					e.f(new N('ad-third-quartile'))
				}
			)
			this.b.m(
				this.c,
				google.ima.dai.api.StreamEvent.Type.COMPLETE,
				function () {
					e.f(new N('ad-complete'))
					e.f(new N('ad-stopped'))
					e.u.removeAttribute('ad-active')
					e.h = null
				}
			)
			this.b.m(
				this.c,
				google.ima.dai.api.StreamEvent.Type.SKIPPED,
				function () {
					e.f(new N('ad-skipped'))
					e.f(new N('ad-stopped'))
				}
			)
			this.b.m(
				this.c,
				google.ima.dai.api.StreamEvent.Type.CUEPOINTS_CHANGED,
				function (f) {
					var g = f.getStreamData()
					f = []
					g = r(g.cuepoints)
					for (var h = g.next(); !h.done; h = g.next())
						(h = h.value), f.push(new Yk(h.start, h.end))
					e.f(new N('ad-cue-points-changed', { cuepoints: f }))
				}
			)
		}
		al.prototype.stop = function () {
			this.c.reset()
			this.l = ''
			this.j = null
		}
		al.prototype.onCueMetadataChange = function (a) {
			if (a.key && a.data) {
				var b = {}
				b[a.key] = a.data
				this.c.onTimedMetadata(b)
			}
		}
		function bl(a, b) {
			a.f(new N('ads-loaded', { loadTime: Date.now() / 1e3 - a.D }))
			var c = b.getStreamData().url
			a.g.resolve(c)
			a.g = null
			a.B ||
				a.b.m(a.a, 'seeked', function () {
					var d = a.a.currentTime
					if (0 != d) {
						a.c.streamTimeForContentTime(d)
						var e = a.c.previousCuePointForStreamTime(d)
						e &&
							!e.played &&
							((a.j = d), (a.a.currentTime = e.start))
					}
				})
		}
		function Y() {
			Rb.call(this)
			this.a = this.b = null
			this.f = new Tk()
			this.c = navigator.language
		}
		ra(Y, Rb)
		q = Y.prototype
		q.setLocale = function (a) {
			this.c = a
		}
		q.initClientSide = function (a, b) {
			var c = this
			if (!window.google || !google.ima || !google.ima.AdsLoader)
				throw new L(2, 10, 1e4)
			this.b = new Uk(a, b, this.c, function (d) {
				if (d && d.type)
					switch (d.type) {
						case 'ads-loaded':
							c.f.a.push(d.loadTime)
							break
						case 'ad-started':
							c.f.c++
							break
						case 'ad-complete':
							c.f.b++
							break
						case 'ad-skipped':
							c.f.f++
					}
				c.dispatchEvent(d)
			})
		}
		q.onAssetUnload = function () {
			this.b && this.b.stop()
			this.dispatchEvent(new N('ad-stopped'))
			this.f = new Tk()
		}
		q.requestClientSideAds = function (a) {
			if (!this.b) throw new L(1, 10, 10001)
			var b = this.b
			b.l = Date.now() / 1e3
			b.g.requestAds(a)
		}
		q.initServerSide = function (a, b) {
			var c = this
			if (!window.google || !google.ima || !google.ima.dai)
				throw new L(2, 10, 10002)
			this.a = new al(a, b, this.c, function (d) {
				if (d && d.type)
					switch (d.type) {
						case 'ads-loaded':
							c.f.a.push(d.loadTime)
							break
						case 'ad-started':
							c.f.c++
							break
						case 'ad-complete':
							c.f.b++
							break
						case 'ad-skipped':
							c.f.f++
					}
				c.dispatchEvent(d)
			})
		}
		q.requestServerSideStream = function (a, b) {
			b = void 0 === b ? '' : b
			if (!this.a) throw new L(1, 10, 10003)
			a.adTagParameters || (a.adTagParameters = {})
			var c = a.adTagParameters
			;(c.mpt || c.mpv) &&
				Ta(
					'You have attempted to set "mpt" and/or "mpv" parameters of the ad tag. Please note that those parameters are used for Shaka adoption tracking and will be overriden.'
				)
			a.adTagParameters.mpt = 'Shaka Player'
			a.adTagParameters.mpv = 'v3.0.5-master-7-g56a53db3'
			c = this.a
			var d = b
			c.g
				? (c = Promise.reject(new L(1, 10, 10004)))
				: (a instanceof google.ima.dai.api.LiveStreamRequest &&
						(c.B = !0),
				  (c.g = new Ab()),
				  c.c.requestStream(a),
				  (c.l = d || ''),
				  (c.D = Date.now() / 1e3),
				  (c = c.g))
			return c
		}
		q.replaceServerSideAdTagParameters = function (a) {
			if (!this.a) throw new L(1, 10, 10003)
			;(a.mpt || a.mpv) &&
				Ta(
					'You have attempted to set "mpt" and/or "mpv" parameters of the ad tag. Please note that those parameters are used for Shaka adoption tracking and will be overriden.'
				)
			a.mpt = 'Shaka Player'
			a.mpv = 'v3.0.5-master-7-g56a53db3'
			this.a.c.replaceAdTagParameters(a)
		}
		q.getStats = function () {
			var a = this.f
			return {
				loadTimes: a.a,
				started: a.c,
				playedCompletely: a.b,
				skipped: a.f,
			}
		}
		q.onDashTimedMetadata = function (a) {
			if (this.a && 'urn:google:dai:2018' == a.schemeIdUri) {
				var b = a.schemeIdUri,
					c = a.eventElement
						? a.eventElement.getAttribute('messageData')
						: null
				this.a.c.processMetadata(b, c, a.startTime)
			}
		}
		q.onHlsTimedMetadata = function (a, b) {
			this.a && this.a.c.processMetadata('ID3', a.data, b)
		}
		q.onCueMetadataChange = function (a) {
			if (this.a) this.a.onCueMetadataChange(a)
		}
		K('shaka.ads.AdManager', Y)
		Y.prototype.onCueMetadataChange = Y.prototype.onCueMetadataChange
		Y.prototype.onHlsTimedMetadata = Y.prototype.onHlsTimedMetadata
		Y.prototype.onDashTimedMetadata = Y.prototype.onDashTimedMetadata
		Y.prototype.getStats = Y.prototype.getStats
		Y.prototype.replaceServerSideAdTagParameters =
			Y.prototype.replaceServerSideAdTagParameters
		Y.prototype.requestServerSideStream =
			Y.prototype.requestServerSideStream
		Y.prototype.initServerSide = Y.prototype.initServerSide
		Y.prototype.requestClientSideAds = Y.prototype.requestClientSideAds
		Y.prototype.onAssetUnload = Y.prototype.onAssetUnload
		Y.prototype.initClientSide = Y.prototype.initClientSide
		Y.prototype.setLocale = Y.prototype.setLocale
		function Yk(a, b) {
			this.start = a
			this.end = void 0 === b ? null : b
		}
		Y.ADS_LOADED = 'ads-loaded'
		Y.AD_STARTED = 'ad-started'
		Y.AD_FIRST_QUARTILE = 'ad-first-quartile'
		Y.AD_MIDPOINT = 'ad-midpoint'
		Y.AD_THIRD_QUARTILE = 'ad-third-quartile'
		Y.AD_COMPLETE = 'ad-complete'
		Y.AD_STOPPED = 'ad-stopped'
		Y.AD_SKIPPED = 'ad-skipped'
		Y.AD_VOLUME_CHANGED = 'ad-volume-changed'
		Y.AD_MUTED = 'ad-muted'
		Y.AD_PAUSED = 'ad-paused'
		Y.AD_RESUMED = 'ad-resumed'
		Y.AD_SKIP_STATE_CHANGED = 'ad-skip-state-changed'
		Y.CUEPOINTS_CHANGED = 'ad-cue-points-changed'
		Y.IMA_AD_MANAGER_LOADED = 'ima-ad-manager-loaded'
		Y.AD_CLICKED = 'ad-clicked'
		Y.AD_PROGRESS = 'ad-progress'
		Y.AD_BUFFERING = 'ad-buffering'
		Y.AD_IMPRESSION = 'ad-impression'
		Y.AD_DURATION_CHANGED = 'ad-duration-changed'
		Y.AD_CLOSED = 'ad-closed'
		Y.AD_LOADED = 'ad-loaded'
		Y.ALL_ADS_COMPLETED = 'all-ads-completed'
		Y.AD_LINEAR_CHANGED = 'ad-linear-changed'
		Y.AD_METADATA = 'ad-metadata'
		Y.AD_RECOVERABLE_ERROR = 'ad-recoverable-error'
		Y.AD_BREAK_READY = 'ad-break-ready'
		Y.AD_INTERACTION = 'ad-interaction'
		pj = function () {
			return new Y()
		}
		function cl(a) {
			return JSON.stringify(a, function (b, c) {
				if ('function' != typeof c) {
					if (c instanceof Event || c instanceof N) {
						var d = {}
						for (f in c) {
							var e = c[f]
							e && 'object' == typeof e
								? 'detail' == f && (d[f] = e)
								: f in Event || (d[f] = e)
						}
						return d
					}
					if (c instanceof Error) {
						var f = new Set(['name', 'message', 'stack'])
						for (d in c) f.add(d)
						e = r(Object.getOwnPropertyNames(c))
						for (d = e.next(); !d.done; d = e.next()) f.add(d.value)
						e = {}
						f = r(f)
						for (d = f.next(); !d.done; d = f.next())
							(d = d.value), (e[d] = c[d])
						f = { __type__: 'Error', contents: e }
					} else if (c instanceof TimeRanges)
						for (
							f = {
								__type__: 'TimeRanges',
								length: c.length,
								start: [],
								end: [],
							},
								d = r(Pf(c)),
								e = d.next();
							!e.done;
							e = d.next()
						) {
							e = e.value
							var g = e.end
							f.start.push(e.start)
							f.end.push(g)
						}
					else
						f =
							c instanceof Uint8Array
								? {
										__type__: 'Uint8Array',
										entries: Array.from(c),
								  }
								: 'number' == typeof c
								? isNaN(c)
									? 'NaN'
									: isFinite(c)
									? c
									: 0 > c
									? '-Infinity'
									: 'Infinity'
								: c
					return f
				}
			})
		}
		function dl(a) {
			return JSON.parse(a, function (b, c) {
				if ('NaN' == c) var d = NaN
				else if ('-Infinity' == c) d = -Infinity
				else if ('Infinity' == c) d = Infinity
				else if (
					c &&
					'object' == typeof c &&
					'TimeRanges' == c.__type__
				)
					d = el(c)
				else if (
					c &&
					'object' == typeof c &&
					'Uint8Array' == c.__type__
				)
					d = new Uint8Array(c.entries)
				else if (c && 'object' == typeof c && 'Error' == c.__type__) {
					d = c.contents
					var e = Error(d.message),
						f
					for (f in d) e[f] = d[f]
					d = e
				} else d = c
				return d
			})
		}
		function el(a) {
			return {
				length: a.length,
				start: function (b) {
					return a.start[b]
				},
				end: function (b) {
					return a.end[b]
				},
			}
		}
		var fl = 'ended play playing pause pausing ratechange seeked seeking timeupdate volumechange'.split(
				' '
			),
			gl = 'buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume'.split(
				' '
			),
			hl = ['loop', 'playbackRate'],
			il = ['pause', 'play'],
			jl = {
				getAssetUri: 2,
				getAudioLanguages: 2,
				getAudioLanguagesAndRoles: 2,
				getBufferedInfo: 2,
				getConfiguration: 2,
				getExpiration: 2,
				getPlaybackRate: 2,
				getTextLanguages: 2,
				getTextLanguagesAndRoles: 2,
				getTextTracks: 2,
				getStats: 5,
				getVariantTracks: 2,
				isAudioOnly: 10,
				isBuffering: 1,
				isInProgress: 1,
				isLive: 10,
				isTextTrackVisible: 1,
				keySystem: 10,
				seekRange: 1,
				getLoadMode: 10,
			},
			kl = {
				getPlayheadTimeAsDate: 1,
				getPresentationStartTimeAsDate: 20,
			},
			ll = [['getConfiguration', 'configure']],
			ml = [['isTextTrackVisible', 'setTextTrackVisibility']],
			nl = 'addTextTrack cancelTrickPlay configure resetConfiguration retryStreaming selectAudioLanguage selectTextLanguage selectTextTrack selectVariantTrack selectVariantsByLabel setTextTrackVisibility trickPlay'.split(
				' '
			),
			ol = ['attach', 'detach', 'load', 'unload']
		function pl(a, b, c, d, e, f) {
			var g = this
			this.S = a
			this.f = new M(b)
			this.X = c
			this.l = !1
			this.B = d
			this.L = e
			this.I = f
			this.b = this.h = !1
			this.J = ''
			this.j = null
			this.u = function () {
				return ql(g)
			}
			this.w = function (h, k) {
				var l = dl(k)
				switch (l.type) {
					case 'event':
						var m = l.targetName
						l = l.event
						l = new N(l.type, l)
						g.B(m, l)
						break
					case 'update':
						m = l.update
						for (var n in m) {
							l = g.a[n] || {}
							for (var p in m[n]) l[p] = m[n][p]
						}
						g.l && (g.X(), (g.l = !1))
						break
					case 'asyncComplete':
						if (
							((n = l.id),
							(l = l.error),
							(p = g.c[n]),
							delete g.c[n],
							p)
						)
							if (l) {
								n = new L(l.severity, l.category, l.code)
								for (m in l) n[m] = l[m]
								p.reject(n)
							} else p.resolve()
				}
			}
			this.a = { video: {}, player: {} }
			this.D = 0
			this.c = {}
			this.g = null
			rl.add(this)
		}
		q = pl.prototype
		q.destroy = function () {
			rl['delete'](this)
			sl(this)
			tl && ul(this)
			this.f && (this.f.stop(), (this.f = null))
			this.L = this.B = null
			this.b = this.h = !1
			this.w = this.u = this.g = this.c = this.a = this.j = null
			return Promise.resolve()
		}
		q.ka = function () {
			return this.b
		}
		q.ld = function () {
			return this.J
		}
		q.init = function () {
			if (
				window.chrome &&
				chrome.cast &&
				chrome.cast.isAvailable &&
				this.S.length
			) {
				this.h = !0
				this.f.Vb()
				var a = new chrome.cast.SessionRequest(this.S)
				a = new chrome.cast.ApiConfig(
					a,
					function (b) {
						for (var c = r(rl), d = c.next(); !d.done; d = c.next())
							vl(d.value, b)
					},
					function (b) {
						for (var c = r(rl), d = c.next(); !d.done; d = c.next())
							(d = d.value), (wl = 'available' == b), d.f.Vb()
					},
					'origin_scoped'
				)
				chrome.cast.initialize(
					a,
					function () {},
					function () {}
				)
				wl && this.f.R(xl)
				;(a = tl) && a.status != chrome.cast.SessionStatus.STOPPED
					? vl(this, a)
					: (tl = null)
			}
		}
		q.sd = function (a) {
			this.j = a
			this.b && yl(this, { type: 'appData', appData: this.j })
		}
		q.cast = function (a) {
			var b = this
			return J(function (c) {
				if (!b.h) throw new L(1, 8, 8e3)
				if (!wl) throw new L(1, 8, 8001)
				if (b.b) throw new L(1, 8, 8002)
				b.g = new Ab()
				chrome.cast.requestSession(
					function (d) {
						return zl(b, a, d)
					},
					function (d) {
						return Al(b, d)
					}
				)
				return u(c, b.g, 0)
			})
		}
		function Bl(a) {
			if (a.b) {
				var b = a.I()
				chrome.cast.requestSession(
					function (c) {
						return zl(a, b, c)
					},
					function (c) {
						return Al(a, c)
					}
				)
			}
		}
		q.nb = function () {
			if (this.b) {
				sl(this)
				if (tl) {
					ul(this)
					try {
						tl.stop(
							function () {},
							function () {}
						)
					} catch (a) {}
					tl = null
				}
				ql(this)
			}
		}
		q.get = function (a, b) {
			var c = this
			if ('video' == a) {
				if (il.includes(b))
					return function (d) {
						for (var e = [], f = 0; f < arguments.length; ++f)
							e[f] = arguments[f]
						return c.Ud.apply(c, [a, b].concat(ja(e)))
					}
			} else if ('player' == a) {
				if (kl[b] && !this.get('player', 'isLive')())
					return function () {}
				if (nl.includes(b))
					return function (d) {
						for (var e = [], f = 0; f < arguments.length; ++f)
							e[f] = arguments[f]
						return c.Ud.apply(c, [a, b].concat(ja(e)))
					}
				if (ol.includes(b))
					return function (d) {
						for (var e = [], f = 0; f < arguments.length; ++f)
							e[f] = arguments[f]
						return c.Ze.apply(c, [a, b].concat(ja(e)))
					}
				if (jl[b])
					return function () {
						return c.a[a][b]
					}
			}
			return this.a[a][b]
		}
		q.set = function (a, b, c) {
			this.a[a][b] = c
			yl(this, { type: 'set', targetName: a, property: b, value: c })
		}
		function zl(a, b, c) {
			tl = c
			c.addUpdateListener(a.u)
			c.addMessageListener('urn:x-cast:com.google.shaka.v2', a.w)
			ql(a)
			yl(a, { type: 'init', initState: b, appData: a.j })
			a.g.resolve()
		}
		function Al(a, b) {
			var c = 8003
			switch (b.code) {
				case 'cancel':
					c = 8004
					break
				case 'timeout':
					c = 8005
					break
				case 'receiver_unavailable':
					c = 8006
			}
			a.g.reject(new L(2, 8, c, b))
		}
		q.Ud = function (a, b, c) {
			for (var d = [], e = 2; e < arguments.length; ++e)
				d[e - 2] = arguments[e]
			yl(this, { type: 'call', targetName: a, methodName: b, args: d })
		}
		q.Ze = function (a, b, c) {
			for (var d = [], e = 2; e < arguments.length; ++e)
				d[e - 2] = arguments[e]
			e = new Ab()
			var f = this.D.toString()
			this.D++
			this.c[f] = e
			try {
				yl(this, {
					type: 'asyncCall',
					targetName: a,
					methodName: b,
					args: d,
					id: f,
				})
			} catch (g) {
				e.reject(g)
			}
			return e
		}
		function vl(a, b) {
			var c = a.I()
			a.g = new Ab()
			a.l = !0
			zl(a, c, b)
		}
		function ul(a) {
			var b = tl
			b.removeUpdateListener(a.u)
			b.removeMessageListener('urn:x-cast:com.google.shaka.v2', a.w)
		}
		function ql(a) {
			var b = tl ? 'connected' == tl.status : !1
			if (a.b && !b) {
				a.L()
				for (var c in a.a) a.a[c] = {}
				sl(a)
			}
			a.b = b
			a.J = b ? tl.receiver.friendlyName : ''
			a.f.Vb()
		}
		function sl(a) {
			for (var b in a.c) {
				var c = a.c[b]
				delete a.c[b]
				c.reject(new L(1, 7, 7e3))
			}
		}
		function yl(a, b) {
			var c = cl(b),
				d = tl
			try {
				d.sendMessage(
					'urn:x-cast:com.google.shaka.v2',
					c,
					function () {},
					Xa
				)
			} catch (e) {
				throw (
					((c = new L(2, 8, 8005, e)),
					(d = new N('error', { detail: c })),
					a.B('player', d),
					a.nb(),
					c)
				)
			}
		}
		var xl = 0.02,
			wl = !1,
			tl = null,
			rl = new Set()
		window.__onGCastApiAvailable = function (a) {
			if (a) {
				a = r(rl)
				for (var b = a.next(); !b.done; b = a.next()) b.value.init()
			}
		}
		function Cl(a, b, c) {
			Rb.call(this)
			var d = this
			this.f = a
			this.c = b
			this.b = this.j = this.g = this.l = this.h = null
			this.w = c
			this.u = new Map()
			this.a = new pl(
				c,
				function () {
					return Dl(d)
				},
				function () {
					return El(d)
				},
				function (e, f) {
					return Fl(d, e, f)
				},
				function () {
					return Gl(d)
				},
				function () {
					return Hl(d)
				}
			)
			Il(this)
		}
		ra(Cl, Rb)
		q = Cl.prototype
		q.destroy = function (a) {
			a && this.a.nb()
			this.b && (this.b.release(), (this.b = null))
			a = []
			this.c && (a.push(this.c.destroy()), (this.c = null))
			this.a && (a.push(this.a.destroy()), (this.a = null))
			this.l = this.h = this.f = null
			return Promise.all(a)
		}
		q.Le = function () {
			return this.h
		}
		q.Ee = function () {
			return this.l
		}
		q.ke = function () {
			return this.a.h && wl
		}
		q.ka = function () {
			return this.a.ka()
		}
		q.ld = function () {
			return this.a.ld()
		}
		q.cast = function () {
			var a = this,
				b
			return J(function (c) {
				return 1 == c.a
					? ((b = Hl(a)), u(c, a.a.cast(b), 2))
					: a.c
					? u(c, a.c.yd(), 0)
					: c['return']()
			})
		}
		q.sd = function (a) {
			this.a.sd(a)
		}
		q.lf = function () {
			Bl(this.a)
		}
		q.nb = function () {
			this.a.nb()
		}
		q.me = function (a) {
			var b = this
			return J(function (c) {
				if (1 == c.a) {
					if (a == b.w) return c['return']()
					b.w = a
					b.a.nb()
					return u(c, b.a.destroy(), 2)
				}
				b.a = null
				b.a = new pl(
					a,
					function () {
						return Dl(b)
					},
					function () {
						return El(b)
					},
					function (d, e) {
						return Fl(b, d, e)
					},
					function () {
						return Gl(b)
					},
					function () {
						return Hl(b)
					}
				)
				b.a.init()
				x(c)
			})
		}
		function Il(a) {
			a.a.init()
			a.b = new mc()
			for (var b = r(fl), c = b.next(); !c.done; c = b.next())
				a.b.m(a.f, c.value, function (f) {
					a.a.ka() || ((f = new N(f.type, f)), a.g.dispatchEvent(f))
				})
			for (var d in Rk)
				a.b.m(a.c, Rk[d], function (f) {
					a.a.ka() || a.j.dispatchEvent(f)
				})
			a.h = {}
			b = {}
			for (var e in a.f)
				(b.Bb = e),
					Object.defineProperty(a.h, b.Bb, {
						configurable: !1,
						enumerable: !0,
						get: (function (f) {
							return function () {
								return Jl(a, f.Bb)
							}
						})(b),
						set: (function (f) {
							return function (g) {
								var h = f.Bb
								a.a.ka() ? a.a.set('video', h, g) : (a.f[h] = g)
							}
						})(b),
					}),
					(b = { Bb: b.Bb })
			a.l = {}
			Kl(a, function (f) {
				Object.defineProperty(a.l, f, {
					configurable: !1,
					enumerable: !0,
					get: function () {
						return Ll(a, f)
					},
				})
			})
			Ml(a)
			a.g = new Rb()
			a.g.bc = a.h
			a.j = new Rb()
			a.j.bc = a.l
		}
		function Ml(a) {
			var b = new Map()
			Kl(a, function (c, d) {
				if (b.has(d)) {
					var e = b.get(d)
					c.length < e.length ? a.u.set(c, e) : a.u.set(e, c)
				} else b.set(d, c)
			})
		}
		function Kl(a, b) {
			function c(l) {
				return 'constructor' == l || 'function' != typeof d[l]
					? !1
					: !e.has(l)
			}
			var d = a.c,
				e = new Set()
			for (f in d) c(f) && (e.add(f), b(f, d[f]))
			var f = Object.getPrototypeOf(d)
			for (var g = Object.getPrototypeOf({}); f && f != g; ) {
				for (
					var h = r(Object.getOwnPropertyNames(f)), k = h.next();
					!k.done;
					k = h.next()
				)
					(k = k.value), c(k) && (e.add(k), b(k, d[k]))
				f = Object.getPrototypeOf(f)
			}
		}
		function Hl(a) {
			var b = {
				video: {},
				player: {},
				playerAfterLoad: {},
				manifest: a.c.Rc(),
				startTime: null,
			}
			a.f.pause()
			for (var c = r(hl), d = c.next(); !d.done; d = c.next())
				(d = d.value), (b.video[d] = a.f[d])
			a.f.ended || (b.startTime = a.f.currentTime)
			c = r(ll)
			for (d = c.next(); !d.done; d = c.next()) {
				var e = d.value
				d = e[1]
				e = a.c[e[0]]()
				b.player[d] = e
			}
			c = r(ml)
			for (d = c.next(); !d.done; d = c.next())
				(e = d.value),
					(d = e[1]),
					(e = a.c[e[0]]()),
					(b.playerAfterLoad[d] = e)
			return b
		}
		function Dl(a) {
			var b = new N('caststatuschanged')
			a.dispatchEvent(b)
		}
		function El(a) {
			var b = new N(a.h.paused ? 'pause' : 'play')
			a.g.dispatchEvent(b)
		}
		function Gl(a) {
			for (var b = r(ll), c = b.next(); !c.done; c = b.next()) {
				var d = c.value
				c = d[1]
				d = a.a.get('player', d[0])()
				a.c[c](d)
			}
			var e = a.a.get('player', 'getAssetUri')()
			c = a.a.get('video', 'ended')
			b = Promise.resolve()
			var f = a.f.autoplay
			d = null
			c || (d = a.a.get('video', 'currentTime'))
			e && ((a.f.autoplay = !1), (b = a.c.load(e, d)))
			var g = {}
			c = r(hl)
			for (d = c.next(); !d.done; d = c.next())
				(d = d.value), (g[d] = a.a.get('video', d))
			b.then(
				function () {
					if (a.f) {
						for (var h = r(hl), k = h.next(); !k.done; k = h.next())
							(k = k.value), (a.f[k] = g[k])
						h = r(ml)
						for (k = h.next(); !k.done; k = h.next()) {
							var l = k.value
							k = l[1]
							l = a.a.get('player', l[0])()
							a.c[k](l)
						}
						a.f.autoplay = f
						e && a.f.play()
					}
				},
				function (h) {
					h = new N(Nk, { detail: h })
					a.c.dispatchEvent(h)
				}
			)
		}
		function Jl(a, b) {
			if ('addEventListener' == b)
				return function (d, e, f) {
					return a.g.addEventListener(d, e, f)
				}
			if ('removeEventListener' == b)
				return function (d, e, f) {
					return a.g.removeEventListener(d, e, f)
				}
			if (a.a.ka() && 0 == Object.keys(a.a.a.video).length) {
				var c = a.f[b]
				if ('function' != typeof c) return c
			}
			return a.a.ka()
				? a.a.get('video', b)
				: ((c = a.f[b]), 'function' == typeof c && (c = c.bind(a.f)), c)
		}
		function Ll(a, b) {
			a.u.has(b) && (b = a.u.get(b))
			if ('addEventListener' == b)
				return function (c, d, e) {
					return a.j.addEventListener(c, d, e)
				}
			if ('removeEventListener' == b)
				return function (c, d, e) {
					return a.j.removeEventListener(c, d, e)
				}
			if ('getMediaElement' == b)
				return function () {
					return a.h
				}
			if ('getSharedConfiguration' == b)
				return a.a.get('player', 'getConfiguration')
			if ('getNetworkingEngine' == b)
				return function () {
					return a.c.Kb()
				}
			if ('getAdManager' == b)
				return function () {
					return a.c.Jd()
				}
			if ('setVideoContainer' == b)
				return function (c) {
					return a.c.be(c)
				}
			if (a.a.ka()) {
				if ('getManifest' == b || 'drmInfo' == b)
					return function () {
						Ta(b + '() does not work while casting!')
						return null
					}
				if ('attach' == b || 'detach' == b)
					return function () {
						Ta(b + '() does not work while casting!')
						return Promise.resolve()
					}
			}
			return (a.a.ka() &&
				0 == Object.keys(a.a.a.video).length &&
				jl[b]) ||
				!a.a.ka()
				? a.c[b].bind(a.c)
				: a.a.get('player', b)
		}
		function Fl(a, b, c) {
			a.a.ka() &&
				('video' == b
					? a.g.dispatchEvent(c)
					: 'player' == b && a.j.dispatchEvent(c))
		}
		K('shaka.cast.CastProxy', Cl)
		Cl.prototype.changeReceiverId = Cl.prototype.me
		Cl.prototype.forceDisconnect = Cl.prototype.nb
		Cl.prototype.suggestDisconnect = Cl.prototype.lf
		Cl.prototype.setAppData = Cl.prototype.sd
		Cl.prototype.cast = Cl.prototype.cast
		Cl.prototype.receiverName = Cl.prototype.ld
		Cl.prototype.isCasting = Cl.prototype.ka
		Cl.prototype.canCast = Cl.prototype.ke
		Cl.prototype.getPlayer = Cl.prototype.Ee
		Cl.prototype.getVideo = Cl.prototype.Le
		Cl.prototype.destroy = Cl.prototype.destroy
		function Nl(a, b, c, d) {
			Rb.call(this)
			var e = this
			this.a = a
			this.c = b
			this.b = new mc()
			this.J = { video: a, player: b }
			this.B = c || function () {}
			this.L =
				d ||
				function (f) {
					return f
				}
			this.f = null
			this.D = !1
			this.j = !0
			this.h = 0
			this.w = !1
			this.u = !0
			this.l = this.g = null
			this.I = new M(function () {
				Ol(e)
			})
			Pl(this)
		}
		ra(Nl, Rb)
		q = Nl.prototype
		q.isConnected = function () {
			return this.D
		}
		q.Oe = function () {
			return this.j
		}
		q.gf = function (a) {
			this.f = a
		}
		q.pe = function () {
			this.f = null
		}
		q.hf = function (a) {
			this.f ||
				(this.f = {
					metadataType: cast.receiver.media.MetadataType.GENERIC,
				})
			this.f.title = a
		}
		q.ff = function (a) {
			this.f ||
				(this.f = {
					metadataType: cast.receiver.media.MetadataType.GENERIC,
				})
			this.f.images = [{ url: a }]
		}
		q.ef = function (a) {
			this.f || (this.f = {})
			this.f.artist = a
			this.f.metadataType = cast.receiver.media.MetadataType.MUSIC_TRACK
		}
		q.destroy = function () {
			var a = this,
				b,
				c
			return J(function (d) {
				if (1 == d.a)
					return (
						a.b && (a.b.release(), (a.b = null)),
						(b = []),
						a.c && (b.push(a.c.destroy()), (a.c = null)),
						a.I && (a.I.stop(), (a.I = null)),
						(a.a = null),
						(a.J = null),
						(a.B = null),
						(a.D = !1),
						(a.j = !0),
						(a.g = null),
						(a.l = null),
						u(d, Promise.all(b), 2)
					)
				c = cast.receiver.CastReceiverManager.getInstance()
				c.stop()
				x(d)
			})
		}
		function Pl(a) {
			var b = cast.receiver.CastReceiverManager.getInstance()
			b.onSenderConnected = function () {
				return Ql(a)
			}
			b.onSenderDisconnected = function () {
				return Ql(a)
			}
			b.onSystemVolumeChanged = function () {
				var e = cast.receiver.CastReceiverManager.getInstance().getSystemVolume()
				e &&
					Rl(
						a,
						{
							type: 'update',
							update: {
								video: { volume: e.level, muted: e.muted },
							},
						},
						a.g
					)
				Rl(
					a,
					{
						type: 'event',
						targetName: 'video',
						event: { type: 'volumechange' },
					},
					a.g
				)
			}
			a.l = b.getCastMessageBus('urn:x-cast:com.google.cast.media')
			a.l.onMessage = function (e) {
				return Sl(a, e)
			}
			a.g = b.getCastMessageBus('urn:x-cast:com.google.shaka.v2')
			a.g.onMessage = function (e) {
				return Tl(a, e)
			}
			b.start()
			b = r(fl)
			for (var c = b.next(); !c.done; c = b.next())
				a.b.m(a.a, c.value, function (e) {
					return Ul(a, 'video', e)
				})
			for (var d in Rk)
				a.b.m(a.c, Rk[d], function (e) {
					return Ul(a, 'player', e)
				})
			cast.__platform__ &&
			cast.__platform__.canDisplayType(
				'video/mp4; codecs="avc1.640028"; width=3840; height=2160'
			)
				? a.c.td(3840, 2160)
				: a.c.td(1920, 1080)
			a.b.m(a.a, 'loadeddata', function () {
				a.w = !0
			})
			a.b.m(a.c, 'loading', function () {
				a.j = !1
				Vl(a)
			})
			a.b.m(a.a, 'playing', function () {
				a.j = !1
				Vl(a)
			})
			a.b.m(a.a, 'pause', function () {
				Vl(a)
			})
			a.b.m(a.c, 'unloading', function () {
				a.j = !0
				Vl(a)
			})
			a.b.m(a.a, 'ended', function () {
				new M(function () {
					a.a && a.a.ended && ((a.j = !0), Vl(a))
				}).R(Wl)
			})
		}
		function Ql(a) {
			a.h = 0
			a.u = !0
			a.D =
				0 !=
				cast.receiver.CastReceiverManager.getInstance().getSenders()
					.length
			Vl(a)
		}
		function Vl(a) {
			var b
			J(function (c) {
				if (1 == c.a) return u(c, Promise.resolve(), 2)
				if (!a.c) return c['return']()
				b = new N('caststatuschanged')
				a.dispatchEvent(b)
				Xl(a) || bm(a)
				x(c)
			})
		}
		function cm(a, b, c) {
			var d, e, f, g, h, k, l, m, n, p
			J(function (t) {
				switch (t.a) {
					case 1:
						for (d in b.player) (e = b.player[d]), a.c[d](e)
						a.B(c)
						f = a.a.autoplay
						return b.manifest
							? ((a.a.autoplay = !1),
							  z(t, 5),
							  u(t, a.c.load(b.manifest, b.startTime), 7))
							: u(t, Promise.resolve(), 3)
					case 7:
						wa(t, 3)
						break
					case 5:
						return (
							(g = C(t)),
							(h = Nk),
							(k = new N(h, { detail: g })),
							a.c.dispatchEvent(k),
							t['return']()
						)
					case 3:
						if (!a.c) return t['return']()
						for (l in b.video) (m = b.video[l]), (a.a[l] = m)
						for (n in b.playerAfterLoad)
							(p = b.playerAfterLoad[n]), a.c[n](p)
						a.a.autoplay = f
						b.manifest && (a.a.play(), bm(a))
						x(t)
				}
			})
		}
		function Ul(a, b, c) {
			a.c &&
				(Ol(a), Rl(a, { type: 'event', targetName: b, event: c }, a.g))
		}
		function Ol(a) {
			a.I.R(dm)
			for (
				var b = { video: {}, player: {} }, c = r(gl), d = c.next();
				!d.done;
				d = c.next()
			)
				(d = d.value), (b.video[d] = a.a[d])
			if (a.c.T())
				for (var e in kl) 0 == a.h % kl[e] && (b.player[e] = a.c[e]())
			for (var f in jl) 0 == a.h % jl[f] && (b.player[f] = a.c[f]())
			if (
				(c = cast.receiver.CastReceiverManager.getInstance().getSystemVolume())
			)
				(b.video.volume = c.level), (b.video.muted = c.muted)
			a.w && (a.h += 1)
			Rl(a, { type: 'update', update: b }, a.g)
			Xl(a)
		}
		function Xl(a) {
			return a.u && (a.a.duration || a.c.T())
				? (em(a), (a.u = !1), !0)
				: !1
		}
		function em(a, b) {
			var c = {
				contentId: a.c.Rc(),
				streamType: a.c.T() ? 'LIVE' : 'BUFFERED',
				contentType: '',
			}
			a.c.T() || (c.duration = a.a.duration)
			a.f && (c.metadata = a.f)
			bm(a, void 0 === b ? 0 : b, c)
		}
		function Tl(a, b) {
			var c = dl(b.data)
			switch (c.type) {
				case 'init':
					a.h = 0
					a.w = !1
					a.u = !0
					cm(a, c.initState, c.appData)
					Ol(a)
					break
				case 'appData':
					a.B(c.appData)
					break
				case 'set':
					var d = c.targetName,
						e = c.property
					c = c.value
					if ('video' == d) {
						var f = cast.receiver.CastReceiverManager.getInstance()
						if ('volume' == e) {
							f.setSystemVolumeLevel(c)
							break
						} else if ('muted' == e) {
							f.setSystemVolumeMuted(c)
							break
						}
					}
					a.J[d][e] = c
					break
				case 'call':
					d = a.J[c.targetName]
					d[c.methodName].apply(d, c.args)
					break
				case 'asyncCall':
					d = c.targetName
					e = c.methodName
					'player' == d && 'load' == e && ((a.h = 0), (a.w = !1))
					var g = c.id,
						h = b.senderId
					f = a.J[d]
					c = f[e].apply(f, c.args)
					'player' == d &&
						'load' == e &&
						(c = c.then(function () {
							a.u = !0
						}))
					c.then(
						function () {
							return fm(a, h, g, null)
						},
						function (k) {
							return fm(a, h, g, k)
						}
					)
			}
		}
		function Sl(a, b) {
			var c = dl(b.data)
			switch (c.type) {
				case 'PLAY':
					a.a.play()
					bm(a)
					break
				case 'PAUSE':
					a.a.pause()
					bm(a)
					break
				case 'SEEK':
					var d = c.currentTime,
						e = c.resumeState
					null != d && (a.a.currentTime = Number(d))
					e && 'PLAYBACK_START' == e
						? (a.a.play(), bm(a))
						: e && 'PLAYBACK_PAUSE' == e && (a.a.pause(), bm(a))
					break
				case 'STOP':
					a.c.yd().then(function () {
						a.c && bm(a)
					})
					break
				case 'GET_STATUS':
					em(a, Number(c.requestId))
					break
				case 'VOLUME':
					e = c.volume
					d = e.level
					e = e.muted
					var f = a.a.volume,
						g = a.a.muted
					null != d && (a.a.volume = Number(d))
					null != e && (a.a.muted = e)
					;(f == a.a.volume && g == a.a.muted) || bm(a)
					break
				case 'LOAD':
					a.h = 0
					a.w = !1
					a.u = !1
					d = c.media
					e = c.currentTime
					f = a.L(d.contentId)
					g = c.autoplay || !0
					a.B(d.customData)
					g && (a.a.autoplay = !0)
					a.c
						.load(f, e)
						.then(function () {
							a.c && em(a)
						})
						['catch'](function (h) {
							var k = 'LOAD_FAILED'
							7 == h.category &&
								7e3 == h.code &&
								(k = 'LOAD_CANCELLED')
							Rl(
								a,
								{ requestId: Number(c.requestId), type: k },
								a.l
							)
						})
					break
				default:
					Rl(
						a,
						{
							requestId: Number(c.requestId),
							type: 'INVALID_REQUEST',
							reason: 'INVALID_COMMAND',
						},
						a.l
					)
			}
		}
		function fm(a, b, c, d) {
			a.c && Rl(a, { type: 'asyncComplete', id: c, error: d }, a.g, b)
		}
		function Rl(a, b, c, d) {
			a.D &&
				((a = cl(b)), d ? c.getCastChannel(d).send(a) : c.broadcast(a))
		}
		function bm(a, b, c) {
			c = void 0 === c ? null : c
			var d = {
				mediaSessionId: 0,
				playbackRate: a.a.playbackRate,
				playerState: a.j ? gm : a.c.Vc() ? hm : a.a.paused ? im : jm,
				currentTime: a.a.currentTime,
				supportedMediaCommands: 63,
				volume: { level: a.a.volume, muted: a.a.muted },
			}
			c && (d.media = c)
			Rl(
				a,
				{
					requestId: void 0 === b ? 0 : b,
					type: 'MEDIA_STATUS',
					status: [d],
				},
				a.l
			)
		}
		K('shaka.cast.CastReceiver', Nl)
		Nl.prototype.destroy = Nl.prototype.destroy
		Nl.prototype.setContentArtist = Nl.prototype.ef
		Nl.prototype.setContentImage = Nl.prototype.ff
		Nl.prototype.setContentTitle = Nl.prototype.hf
		Nl.prototype.clearContentMetadata = Nl.prototype.pe
		Nl.prototype.setContentMetadata = Nl.prototype.gf
		Nl.prototype.isIdle = Nl.prototype.Oe
		Nl.prototype.isConnected = Nl.prototype.isConnected
		var dm = 0.5,
			Wl = 5,
			gm = 'IDLE',
			jm = 'PLAYING',
			hm = 'BUFFERING',
			im = 'PAUSED'
		function km(a) {
			var b = this
			this.a = []
			this.b = []
			this.data = []
			new xf()
				.G('moov', Bf)
				.U('pssh', function (c) {
					if (!(1 < c.version)) {
						var d = Lb(c.reader.O, -12, c.size)
						b.data.push(d)
						b.a.push(jd(c.reader.Sa(16)))
						if (0 < c.version) {
							d = c.reader.H()
							d = r(fb(d))
							for (var e = d.next(); !e.done; e = d.next())
								(e = jd(c.reader.Sa(16))), b.b.push(e)
						}
					}
				})
				.parse(a)
		}
		function lm(a) {
			var b = new Uint8Array([
					154,
					4,
					240,
					121,
					152,
					64,
					66,
					134,
					171,
					146,
					230,
					91,
					224,
					136,
					95,
					149,
				]),
				c = a.length,
				d = b.length + 16 + c,
				e = new Uint8Array(d),
				f = Ob(e),
				g = 0
			f.setUint32(g, d)
			g += 4
			f.setUint32(g, 1886614376)
			g += 4
			f.setUint32(g, 0)
			g += 4
			e.set(b, g)
			g += b.length
			f.setUint32(g, c)
			e.set(a, g + 4)
			return e
		}
		function mm(a) {
			if (!a) return a
			var b = new km(a)
			if (1 >= b.data.length) return a
			a = []
			var c = {}
			b = r(b.data)
			for (var d = b.next(); !d.done; c = { Xb: c.Xb }, d = b.next())
				(c.Xb = d.value),
					a.some(
						(function (e) {
							return function (f) {
								return Jb(f, e.Xb)
							}
						})(c)
					) || a.push(c.Xb)
			return kd.apply(ed, ja(a))
		}
		function nm(a, b) {
			var c = om(a, b)
			return 1 != c.length ? null : c[0]
		}
		function pm(a, b, c) {
			a = qm(a, b, c)
			return 1 != a.length ? null : a[0]
		}
		function om(a, b) {
			return Array.from(a.childNodes).filter(function (c) {
				return c instanceof Element && c.tagName == b
			})
		}
		function qm(a, b, c) {
			return Array.from(a.childNodes).filter(function (d) {
				return (
					d instanceof Element &&
					d.localName == c &&
					d.namespaceURI == b
				)
			})
		}
		function rm(a, b, c) {
			return a.hasAttributeNS(b, c) ? a.getAttributeNS(b, c) : null
		}
		function sm(a) {
			return Array.from(a.childNodes).every(tm)
				? a.textContent.trim()
				: null
		}
		function tm(a) {
			return (
				a.nodeType == Node.TEXT_NODE ||
				a.nodeType == Node.CDATA_SECTION_NODE
			)
		}
		function um(a, b, c, d) {
			d = void 0 === d ? null : d
			var e = null
			a = a.getAttribute(b)
			null != a && (e = c(a))
			return null == e ? d : e
		}
		function vm(a) {
			if (!a) return null
			;/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(a) && (a += 'Z')
			a = Date.parse(a)
			return isNaN(a) ? null : Math.floor(a / 1e3)
		}
		function wm(a) {
			if (!a) return null
			a = /^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(
				a
			)
			if (!a) return null
			a =
				31536e3 * Number(a[1] || null) +
				2592e3 * Number(a[2] || null) +
				86400 * Number(a[3] || null) +
				3600 * Number(a[4] || null) +
				60 * Number(a[5] || null) +
				Number(a[6] || null)
			return isFinite(a) ? a : null
		}
		function xm(a) {
			var b = /([0-9]+)-([0-9]+)/.exec(a)
			if (!b) return null
			a = Number(b[1])
			if (!isFinite(a)) return null
			b = Number(b[2])
			return isFinite(b) ? { start: a, end: b } : null
		}
		function ym(a) {
			a = Number(a)
			return 0 === a % 1 ? a : null
		}
		function zm(a) {
			a = Number(a)
			return 0 === a % 1 && 0 < a ? a : null
		}
		function Am(a) {
			a = Number(a)
			return 0 === a % 1 && 0 <= a ? a : null
		}
		function Bm(a) {
			a = Number(a)
			return isNaN(a) ? null : a
		}
		function Cm(a) {
			var b
			a = (b = a.match(/^(\d+)\/(\d+)$/))
				? Number(b[1]) / Number(b[2])
				: Number(a)
			return isNaN(a) ? null : a
		}
		function Dm(a, b) {
			var c = new DOMParser(),
				d = null,
				e = null
			try {
				e = c.parseFromString(a, 'text/xml')
			} catch (f) {}
			e && e.documentElement.tagName == b && (d = e.documentElement)
			return d && 0 < d.getElementsByTagName('parsererror').length
				? null
				: d
		}
		function Em(a, b) {
			try {
				var c = uc(a)
				return Dm(c, b)
			} catch (d) {
				return null
			}
		}
		function Fm(a, b) {
			var c = Gm(a),
				d = null,
				e = [],
				f = [],
				g = new Set(
					c.map(function (k) {
						return k.keyId
					})
				)
			g['delete'](null)
			if (1 < g.size) throw new L(2, 4, 4010)
			b ||
				((f = c.filter(function (k) {
					return 'urn:mpeg:dash:mp4protection:2011' == k.Xd
						? ((d = k.init || d), !1)
						: !0
				})),
				f.length &&
					((e = Hm(d, f)), 0 == e.length && (e = [Nc('', d)])))
			if (c.length && (b || !f.length))
				for (
					e = [], c = r(Im.values()), f = c.next();
					!f.done;
					f = c.next()
				)
					(f = f.value), 'org.w3.clearkey' != f && e.push(Nc(f, d))
			if ((g = Array.from(g)[0] || null))
				for (c = r(e), f = c.next(); !f.done; f = c.next()) {
					f = r(f.value.initData)
					for (var h = f.next(); !h.done; h = f.next())
						h.value.keyId = g
				}
			return { Ed: g, Tf: d, drmInfos: e, Id: !0 }
		}
		function Jm(a, b, c) {
			var d = Fm(a, c)
			if (b.Id) {
				a = 1 == b.drmInfos.length && !b.drmInfos[0].keySystem
				c = 0 == d.drmInfos.length
				if (0 == b.drmInfos.length || (a && !c)) b.drmInfos = d.drmInfos
				b.Id = !1
			} else if (
				0 < d.drmInfos.length &&
				((b.drmInfos = b.drmInfos.filter(function (e) {
					return d.drmInfos.some(function (f) {
						return f.keySystem == e.keySystem
					})
				})),
				0 == b.drmInfos.length)
			)
				throw new L(2, 4, 4008)
			return d.Ed || b.Ed
		}
		function Km(a) {
			var b = 0,
				c = Ob(a),
				d = c.getUint32(b, !0)
			if (d != a.byteLength) return []
			a: {
				a = b + 6
				for (b = []; a < c.byteLength - 1; ) {
					d = c.getUint16(a, !0)
					a += 2
					var e = c.getUint16(a, !0)
					a += 2
					if (0 != (e & 1) || e + a > c.byteLength) {
						c = []
						break a
					}
					var f = Lb(c, a, e)
					b.push({ type: d, value: f })
					a += e
				}
				c = b
			}
			return c
		}
		function Lm(a) {
			a = r(a.getElementsByTagName('DATA'))
			for (var b = a.next(); !b.done; b = a.next()) {
				b = r(b.value.childNodes)
				for (var c = b.next(); !c.done; c = b.next())
					if (
						((c = c.value),
						c instanceof Element && 'LA_URL' == c.tagName)
					)
						return c.textContent
			}
			return ''
		}
		function Hm(a, b) {
			for (var c = [], d = r(b), e = d.next(); !e.done; e = d.next()) {
				e = e.value
				var f = Im.get(e.Xd)
				if (f) {
					var g
					;(g = pm(e.node, 'urn:microsoft:playready', 'pro'))
						? ((g = hd(g.textContent)),
						  (g = [
								{
									initData: lm(g),
									initDataType: 'cenc',
									keyId: e.keyId,
								},
						  ]))
						: (g = null)
					g = Nc(f, e.init || a || g)
					if ((f = Mm.get(f))) g.licenseServerUri = f(e)
					c.push(g)
				}
			}
			return c
		}
		function Gm(a) {
			var b = []
			a = r(a)
			for (var c = a.next(); !c.done; c = a.next())
				(c = Nm(c.value)) && b.push(c)
			return b
		}
		function Nm(a) {
			var b = a.getAttribute('schemeIdUri'),
				c = rm(a, 'urn:mpeg:cenc:2013', 'default_KID'),
				d = qm(a, 'urn:mpeg:cenc:2013', 'pssh').map(sm)
			if (!b) return null
			b = b.toLowerCase()
			if (c && ((c = c.replace(/-/g, '').toLowerCase()), c.includes(' ')))
				throw new L(2, 4, 4009)
			var e = []
			try {
				e = d.map(function (f) {
					return {
						initDataType: 'cenc',
						initData: hd(f),
						keyId: null,
					}
				})
			} catch (f) {
				throw new L(2, 4, 4007)
			}
			return { node: a, Xd: b, keyId: c, init: 0 < e.length ? e : null }
		}
		var Im = new Map()
				.set(
					'urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b',
					'org.w3.clearkey'
				)
				.set(
					'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed',
					'com.widevine.alpha'
				)
				.set(
					'urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95',
					'com.microsoft.playready'
				)
				.set(
					'urn:uuid:79f0049a-4098-8642-ab92-e65be0885f95',
					'com.microsoft.playready'
				)
				.set(
					'urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb',
					'com.adobe.primetime'
				),
			Mm = new Map()
				.set('com.widevine.alpha', function (a) {
					return (a = pm(a.node, 'urn:microsoft', 'laurl'))
						? a.getAttribute('licenseUrl') || ''
						: ''
				})
				.set('com.microsoft.playready', function (a) {
					a = pm(a.node, 'urn:microsoft:playready', 'pro')
					if (!a) return ''
					a = hd(a.textContent)
					a = Km(a).filter(function (b) {
						return 1 === b.type
					})[0]
					if (!a) return ''
					a = vc(a.value, !0)
					return (a = Dm(a, 'WRMHEADER')) ? Lm(a) : ''
				})
		function Om(a, b, c, d, e) {
			var f = { RepresentationID: b, Number: c, Bandwidth: d, Time: e }
			return a.replace(
				/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g,
				function (g, h, k, l) {
					if ('$$' == g) return '$'
					var m = f[h]
					if (null == m) return g
					'RepresentationID' == h && k && (k = void 0)
					'Time' == h && (m = Math.round(m))
					switch (l) {
						case void 0:
						case 'd':
						case 'i':
						case 'u':
							g = m.toString()
							break
						case 'o':
							g = m.toString(8)
							break
						case 'x':
							g = m.toString(16)
							break
						case 'X':
							g = m.toString(16).toUpperCase()
							break
						default:
							g = m.toString()
					}
					k = window.parseInt(k, 10) || 1
					return Array(Math.max(0, k - g.length) + 1).join('0') + g
				}
			)
		}
		function Pm(a, b) {
			var c = Qm(a, b, 'timescale'),
				d = 1
			c && (d = zm(c) || 1)
			c = Qm(a, b, 'duration')
			;(c = zm(c || '')) && (c /= d)
			var e = Qm(a, b, 'startNumber'),
				f = Number(Qm(a, b, 'presentationTimeOffset')) || 0,
				g = Am(e || '')
			if (null == e || null == g) g = 1
			var h = Rm(a, b, 'SegmentTimeline')
			e = null
			if (h) {
				e = d
				var k = a.N.duration || Infinity,
					l = om(h, 'S')
				h = []
				var m = -f
				l = r(hb(l))
				for (var n = l.next(); !n.done; n = l.next()) {
					n = n.value
					var p = n.item,
						t = n.next,
						v = um(p, 't', Am)
					n = um(p, 'd', Am)
					var w = um(p, 'r', ym)
					null != v && (v -= f)
					if (!n) break
					p = null != v ? v : m
					v = w || 0
					if (0 > v)
						if (t) {
							t = um(t, 't', Am)
							if (null == t) break
							else if (p >= t) break
							v = Math.ceil((t - p) / n) - 1
						} else {
							if (Infinity == k) break
							else if (p / e >= k) break
							v = Math.ceil((k * e - p) / n) - 1
						}
					0 < h.length && p != m && (h[h.length - 1].end = p / e)
					t = r(fb(v + 1))
					for (v = t.next(); !v.done; v = t.next())
						(m = p + n),
							h.push({ start: p / e, end: m / e, rf: p }),
							(p = m)
				}
				e = h
			}
			return {
				timescale: d,
				ba: c,
				zb: g,
				La: f / d || 0,
				zd: f,
				timeline: e,
			}
		}
		function Qm(a, b, c) {
			return [b(a.F), b(a.ea), b(a.ia)]
				.filter(Kc)
				.map(function (d) {
					return d.getAttribute(c)
				})
				.reduce(function (d, e) {
					return d || e
				})
		}
		function Rm(a, b, c) {
			return [b(a.F), b(a.ea), b(a.ia)]
				.filter(Kc)
				.map(function (d) {
					return nm(d, c)
				})
				.reduce(function (d, e) {
					return d || e
				})
		}
		function Sm(a, b, c, d, e, f) {
			for (
				var g = rm(a, 'http://www.w3.org/1999/xlink', 'href'),
					h =
						rm(a, 'http://www.w3.org/1999/xlink', 'actuate') ||
						'onRequest',
					k = r(Array.from(a.attributes)),
					l = k.next();
				!l.done;
				l = k.next()
			)
				(l = l.value),
					'http://www.w3.org/1999/xlink' == l.namespaceURI &&
						a.removeAttributeNS(l.namespaceURI, l.localName)
			if (5 <= f) return Cb(new L(2, 4, 4028))
			if ('onLoad' != h) return Cb(new L(2, 4, 4027))
			var m = Mc([d], [g])
			return e.request(0, dc(m, b)).W(function (n) {
				n = Em(n.data, a.tagName)
				if (!n) return Cb(new L(2, 4, 4001, g))
				for (; a.childNodes.length; ) a.removeChild(a.childNodes[0])
				for (; n.childNodes.length; ) {
					var p = n.childNodes[0]
					n.removeChild(p)
					a.appendChild(p)
				}
				n = r(Array.from(n.attributes))
				for (p = n.next(); !p.done; p = n.next())
					a.setAttributeNode(p.value.cloneNode(!1))
				return Tm(a, b, c, m[0], e, f + 1)
			})
		}
		function Tm(a, b, c, d, e, f) {
			f = void 0 === f ? 0 : f
			if (rm(a, 'http://www.w3.org/1999/xlink', 'href')) {
				var g = Sm(a, b, c, d, e, f)
				c &&
					(g = g.W(void 0, function () {
						return Tm(a, b, c, d, e, f)
					}))
				return g
			}
			g = []
			for (
				var h = r(Array.from(a.childNodes)), k = h.next();
				!k.done;
				k = h.next()
			)
				(k = k.value),
					k instanceof Element &&
						('urn:mpeg:dash:resolve-to-zero:2013' ==
						rm(k, 'http://www.w3.org/1999/xlink', 'href')
							? a.removeChild(k)
							: 'SegmentTimeline' != k.tagName &&
							  g.push(Tm(k, b, c, d, e, f)))
			return Gb(g).W(function () {
				return a
			})
		}
		function Um(a, b, c, d, e, f, g) {
			var h,
				k = new xf().U('sidx', function (l) {
					h = Vm(b, d, e, f, g, c, l)
				})
			a && k.parse(a)
			if (h) return h
			throw new L(2, 3, 3004)
		}
		function Vm(a, b, c, d, e, f, g) {
			var h = []
			g.reader.skip(4)
			var k = g.reader.H()
			if (0 == k) throw new L(2, 3, 3005)
			if (0 == g.version) {
				var l = g.reader.H()
				var m = g.reader.H()
			} else (l = g.reader.yb()), (m = g.reader.yb())
			g.reader.skip(2)
			var n = g.reader.xb()
			a = a + g.size + m
			n = r(fb(n))
			for (m = n.next(); !m.done; m = n.next()) {
				var p = g.reader.H()
				m = (p & 2147483648) >>> 31
				p &= 2147483647
				var t = g.reader.H()
				g.reader.skip(4)
				if (1 == m) throw new L(2, 3, 3006)
				h.push(
					new th(
						l / k + c,
						(l + t) / k + c,
						function () {
							return f
						},
						a,
						a + p - 1,
						b,
						c,
						d,
						e
					)
				)
				l += t
				a += p
			}
			g.parser.stop()
			return h
		}
		function Wm(a) {
			this.b = Ob(a)
			this.a = new R(this.b, 0)
		}
		Wm.prototype.ga = function () {
			return this.a.ga()
		}
		function Xm(a) {
			var b = Ym(a)
			if (7 < b.length) throw new L(2, 3, 3002)
			var c = 0
			b = r(b)
			for (var d = b.next(); !d.done; d = b.next()) c = 256 * c + d.value
			b = Ym(a)
			a: {
				d = r(Zm)
				for (var e = d.next(); !e.done; e = d.next())
					if (Jb(b, new Uint8Array(e.value))) {
						d = !0
						break a
					}
				d = !1
			}
			if (d) b = a.b.byteLength - a.a.Z()
			else {
				if (8 == b.length && b[1] & 224) throw new L(2, 3, 3001)
				d = 0
				e = r(hb(b))
				for (var f = e.next(); !f.done; f = e.next()) {
					f = f.value
					var g = f.item
					d =
						0 == f.aa
							? g & ((1 << (8 - b.length)) - 1)
							: 256 * d + g
				}
				b = d
			}
			b = a.a.Z() + b <= a.b.byteLength ? b : a.b.byteLength - a.a.Z()
			d = Ob(a.b, a.a.Z(), b)
			a.a.skip(b)
			return new $m(c, d)
		}
		function Ym(a) {
			var b = a.a.Z(),
				c = a.a.V()
			if (0 == c) throw new L(2, 3, 3002)
			c = 8 - Math.floor(Math.log2(c))
			a.a.skip(c - 1)
			return Lb(a.b, b, c)
		}
		var Zm = [
			[255],
			[127, 255],
			[63, 255, 255],
			[31, 255, 255, 255],
			[15, 255, 255, 255, 255],
			[7, 255, 255, 255, 255, 255],
			[3, 255, 255, 255, 255, 255, 255],
			[1, 255, 255, 255, 255, 255, 255, 255],
		]
		function $m(a, b) {
			this.id = a
			this.a = b
		}
		function an(a) {
			if (8 < a.a.byteLength) throw new L(2, 3, 3002)
			if (8 == a.a.byteLength && a.a.getUint8(0) & 224)
				throw new L(2, 3, 3001)
			for (
				var b = 0, c = r(fb(a.a.byteLength)), d = c.next();
				!d.done;
				d = c.next()
			)
				(d = a.a.getUint8(d.value)), (b = 256 * b + d)
			return b
		}
		function bn(a, b, c, d, e, f, g, h, k) {
			function l() {
				return e
			}
			var m = []
			a = new Wm(a.a)
			for (var n = null, p = null; a.ga(); ) {
				var t = Xm(a)
				if (187 == t.id) {
					var v = cn(t)
					v &&
						((t = c * v.sf),
						(v = b + v.Ye),
						null != n &&
							m.push(
								new th(n + g, t + g, l, p, v - 1, f, g, h, k)
							),
						(n = t),
						(p = v))
				}
			}
			null != n && m.push(new th(n + g, d + g, l, p, null, f, g, h, k))
			return m
		}
		function cn(a) {
			var b = new Wm(a.a)
			a = Xm(b)
			if (179 != a.id) throw new L(2, 3, 3013)
			a = an(a)
			b = Xm(b)
			if (183 != b.id) throw new L(2, 3, 3012)
			b = new Wm(b.a)
			for (var c = 0; b.ga(); ) {
				var d = Xm(b)
				if (241 == d.id) {
					c = an(d)
					break
				}
			}
			return { sf: a, Ye: c }
		}
		function dn(a, b) {
			var c = Rm(a, b, 'Initialization')
			if (!c) return null
			var d = a.F.ra,
				e = c.getAttribute('sourceURL')
			e && (d = Mc(a.F.ra, [e]))
			e = 0
			var f = null
			if ((c = um(c, 'range', xm))) (e = c.start), (f = c.end)
			return new sh(
				function () {
					return d
				},
				e,
				f
			)
		}
		function en(a, b) {
			var c = Number(Qm(a, fn, 'presentationTimeOffset')) || 0,
				d = Qm(a, fn, 'timescale'),
				e = 1
			d && (e = zm(d) || 1)
			var f = c / e || 0,
				g = dn(a, fn)
			gn(a, g)
			var h = Tb(a)
			return {
				ob: function () {
					var k = Rm(h, fn, 'RepresentationIndex'),
						l = h.F.ra
					k &&
						(k = k.getAttribute('sourceURL')) &&
						(l = Mc(h.F.ra, [k]))
					k = hn(h)
					return jn(h, b, g, l, k.start, k.end, f)
				},
			}
		}
		function jn(a, b, c, d, e, f, g) {
			var h, k, l, m, n, p, t, v, w, y, A, B, E, D, F
			return J(function (I) {
				if (1 == I.a)
					return (
						(h = a.presentationTimeline),
						(k = !a.Va || !a.N.Nd),
						(l = a.N.start),
						(m = a.N.duration),
						(n = a.F.mimeType.split('/')[1]),
						(p = b),
						(t = null),
						(v = [
							p(d, e, f),
							'webm' == n ? p(c.a(), c.ca, c.Y) : null,
						]),
						(p = null),
						u(I, Promise.all(v), 2)
					)
				w = I.b
				y = w[0]
				A = w[1] || null
				B = null
				E = l - g
				D = l
				F = m ? l + m : Infinity
				if ('mp4' == n) var G = Um(y, e, d, c, E, D, F)
				else {
					G = new Wm(A)
					if (440786851 != Xm(G).id) throw new L(2, 3, 3008)
					var H = Xm(G)
					if (408125543 != H.id) throw new L(2, 3, 3009)
					G = H.a.byteOffset
					H = new Wm(H.a)
					for (var P = null; H.ga(); ) {
						var V = Xm(H)
						if (357149030 == V.id) {
							P = V
							break
						}
					}
					if (!P) throw new L(2, 3, 3010)
					P = new Wm(P.a)
					V = 1e6
					for (H = null; P.ga(); ) {
						var S = Xm(P)
						if (2807729 == S.id) V = an(S)
						else if (17545 == S.id)
							if (4 == S.a.byteLength) H = S.a.getFloat32(0)
							else if (8 == S.a.byteLength) H = S.a.getFloat64(0)
							else throw new L(2, 3, 3003)
					}
					if (null == H) throw new L(2, 3, 3011)
					P = V / 1e9
					H *= P
					V = Xm(new Wm(y))
					if (475249515 != V.id) throw new L(2, 3, 3007)
					G = bn(V, G, P, H, d, c, E, D, F)
				}
				B = G
				h.ub(B)
				t = new Qh(B)
				k && t.Pa(D, F)
				return I['return'](t)
			})
		}
		function fn(a) {
			return a.Sb
		}
		function hn(a) {
			var b = Rm(a, fn, 'RepresentationIndex')
			a = Qm(a, fn, 'indexRange')
			a = xm(a || '')
			b && (a = um(b, 'range', xm, a))
			return a
		}
		function gn(a, b) {
			kn(a, b)
			if (!hn(a)) throw new L(2, 4, 4002)
		}
		function kn(a, b) {
			var c = a.F.mimeType.split('/')[1]
			if ('text' != a.F.contentType && 'mp4' != c && 'webm' != c)
				throw new L(2, 4, 4006)
			if ('webm' == c && !b) throw new L(2, 4, 4005)
		}
		function ln(a, b) {
			var c = dn(a, mn),
				d = nn(a)
			if (!d.ba && !d.timeline && 1 < d.rb.length) throw new L(2, 4, 4002)
			if (!d.ba && !a.N.duration && !d.timeline && 1 == d.rb.length)
				throw new L(2, 4, 4002)
			if (d.timeline && 0 == d.timeline.length) throw new L(2, 4, 4002)
			var e = null,
				f = null
			a.ia.id && a.F.id && ((f = a.ia.id + ',' + a.F.id), (e = b[f]))
			c = on(a.N.start, a.N.duration, a.F.ra, d, c)
			e
				? (e.sb(c), e.Wa(a.presentationTimeline.qb()))
				: (a.presentationTimeline.ub(c),
				  (e = new Qh(c)),
				  f && a.Va && (b[f] = e))
			;(a.Va && a.N.Nd) ||
				e.Pa(
					a.N.start,
					a.N.duration ? a.N.start + a.N.duration : Infinity
				)
			return {
				ob: function () {
					return Promise.resolve(e)
				},
			}
		}
		function mn(a) {
			return a.Ta
		}
		function nn(a) {
			var b = pn(a)
			a = Pm(a, mn)
			var c = a.zb
			0 == c && (c = 1)
			var d = 0
			a.ba
				? (d = a.ba * (c - 1))
				: a.timeline &&
				  0 < a.timeline.length &&
				  (d = a.timeline[0].start)
			return {
				ba: a.ba,
				startTime: d,
				zb: c,
				La: a.La,
				timeline: a.timeline,
				rb: b,
			}
		}
		function on(a, b, c, d, e) {
			var f = d.rb.length
			d.timeline &&
				d.timeline.length != d.rb.length &&
				(f = Math.min(d.timeline.length, d.rb.length))
			var g = a - d.La,
				h = b ? a + b : Infinity,
				k = [],
				l = d.startTime,
				m = {}
			f = r(fb(f))
			for (var n = f.next(); !n.done; m = { Bc: m.Bc }, n = f.next()) {
				n = n.value
				var p = d.rb[n]
				m.Bc = Mc(c, [p.Qe])
				var t = void 0
				t =
					null != d.ba
						? l + d.ba
						: d.timeline
						? d.timeline[n].end
						: l + b
				k.push(
					new th(
						a + l,
						a + t,
						(function (v) {
							return function () {
								return v.Bc
							}
						})(m),
						p.start,
						p.end,
						e,
						g,
						a,
						h
					)
				)
				l = t
			}
			return k
		}
		function pn(a) {
			return [a.F.Ta, a.ea.Ta, a.ia.Ta]
				.filter(Kc)
				.map(function (b) {
					return om(b, 'SegmentURL')
				})
				.reduce(function (b, c) {
					return 0 < b.length ? b : c
				})
				.map(function (b) {
					b.getAttribute('indexRange') && !a.Ld && (a.Ld = !0)
					var c = b.getAttribute('media')
					b = um(b, 'mediaRange', xm, { start: 0, end: null })
					return { Qe: c, start: b.start, end: b.end }
				})
		}
		function qn(a, b, c, d, e) {
			var f = rn(a),
				g = sn(a)
			tn(g)
			var h = Tb(a)
			if (g.Ob)
				return (
					kn(a, f),
					{
						ob: function () {
							var t = Om(
								g.Ob,
								h.F.id,
								null,
								h.bandwidth || null,
								null
							)
							t = Mc(h.F.ra, [t])
							return jn(h, b, f, t, 0, null, g.La)
						},
					}
				)
			if (g.ba)
				return (
					d ||
						(a.presentationTimeline.dd(g.ba),
						a.presentationTimeline.ed(a.N.start)),
					{
						ob: function () {
							return un(h, g, e, f)
						},
					}
				)
			var k = null
			d = null
			a.ia.id && a.F.id && ((d = a.ia.id + ',' + a.F.id), (k = c[d]))
			var l = vn(h, g, f),
				m = a.N.start,
				n = a.N.duration ? a.N.start + a.N.duration : Infinity,
				p = Infinity != n
			k
				? (p && new Qh(l).Pa(m, n),
				  k.sb(l),
				  k.Wa(a.presentationTimeline.qb()))
				: (a.presentationTimeline.ub(l),
				  (k = new Qh(l)),
				  d && a.Va && (c[d] = k))
			p && k.Pa(m, n)
			return {
				ob: function () {
					return Promise.resolve(k)
				},
			}
		}
		function wn(a) {
			return a.Tb
		}
		function sn(a) {
			var b = Pm(a, wn),
				c = Qm(a, wn, 'media')
			a = Qm(a, wn, 'index')
			return {
				ba: b.ba,
				timescale: b.timescale,
				zb: b.zb,
				La: b.La,
				zd: b.zd,
				timeline: b.timeline,
				cd: c,
				Ob: a,
			}
		}
		function tn(a) {
			var b = a.Ob ? 1 : 0
			b += a.timeline ? 1 : 0
			b += a.ba ? 1 : 0
			if (0 == b) throw new L(2, 4, 4002)
			1 != b && (a.Ob && (a.timeline = null), (a.ba = null))
			if (!a.Ob && !a.cd) throw new L(2, 4, 4002)
		}
		function un(a, b, c, d) {
			function e(I) {
				var G = (I - n) * m,
					H = G + b.La
				G += h
				return new th(
					G,
					Math.min(G + m, l),
					function () {
						var P = Om(t, w, I, v, H * p)
						return Mc(y, [P])
					},
					0,
					null,
					d,
					A,
					h,
					l
				)
			}
			function f() {
				var I = [Math.max(g.qb(), h), Math.min(g.Ya(), l)].map(
					function (G) {
						return G - h
					}
				)
				return [Math.ceil(I[0] / m), Math.ceil(I[1] / m) - 1].map(
					function (G) {
						return G + n
					}
				)
			}
			var g = a.presentationTimeline,
				h = a.N.start,
				k = a.N.duration,
				l = k ? h + k : Infinity,
				m = b.ba,
				n = b.zb,
				p = b.timescale,
				t = b.cd,
				v = a.bandwidth || null,
				w = a.F.id,
				y = a.F.ra,
				A = h - b.La,
				B = f()
			k = B[1]
			var E = []
			for (a = a.Va ? Math.max(B[0], B[1] - c + 1) : B[0]; a <= k; ++a)
				(c = e(a)), E.push(c)
			var D = new Qh(E)
			if (g.Ya() < l) {
				var F = k + 1
				D.uc(m, function () {
					D.Wa(g.qb())
					var I = r(f())
					I.next()
					I = I.next().value
					for (var G = []; F <= I; ) {
						var H = e(F)
						G.push(H)
						F++
					}
					return G
				})
			}
			return Promise.resolve(D)
		}
		function vn(a, b, c) {
			var d = a.N.start,
				e = a.N.duration,
				f = d - b.La
			e = e ? d + e : Infinity
			for (
				var g = [], h = {}, k = r(hb(b.timeline)), l = k.next();
				!l.done;
				h = { Dc: h.Dc, Gc: h.Gc, zc: h.zc, Hc: h.Hc }, l = k.next()
			) {
				l = l.value
				var m = l.item,
					n = m.start,
					p = m.rf
				m = m.end
				h.Gc = l.aa + b.zb
				h.Hc = p + b.zd
				h.Dc = a.F.id
				h.zc = a.bandwidth || null
				g.push(
					new th(
						d + n,
						d + m,
						(function (t) {
							return function () {
								var v = Om(b.cd, t.Dc, t.Gc, t.zc || null, t.Hc)
								return Mc(a.F.ra, [v]).map(function (w) {
									return w.toString()
								})
							}
						})(h),
						0,
						null,
						c,
						f,
						d,
						e
					)
				)
			}
			return g
		}
		function rn(a) {
			var b = Qm(a, wn, 'initialization')
			if (!b) return null
			var c = a.F.id,
				d = a.bandwidth || null,
				e = a.F.ra
			return new sh(
				function () {
					var f = Om(b, c, null, d, null)
					return Mc(e, [f])
				},
				0,
				null
			)
		}
		function xn() {
			this.f = []
			this.a = []
			this.b = []
			this.c = []
			this.g = new Set()
		}
		xn.prototype.release = function () {
			for (
				var a = r(this.a.concat(this.b, this.c)), b = a.next();
				!b.done;
				b = a.next()
			)
				(b = b.value), b.segmentIndex && b.segmentIndex.release()
			this.a = []
			this.b = []
			this.c = []
			this.f = []
		}
		function yn(a, b, c) {
			var d,
				e,
				f,
				g,
				h,
				k,
				l,
				m,
				n,
				p,
				t,
				v,
				w,
				y,
				A,
				B,
				E,
				D,
				F,
				I,
				G,
				H,
				P,
				V,
				S,
				ca,
				O,
				Q,
				ea,
				ya
			return J(function (oa) {
				switch (oa.a) {
					case 1:
						d = Oc
						zn(b)
						An(b)
						Bn(b)
						if (!c && 1 == b.length) {
							e = b[0]
							a.a = e.fc
							a.b = e.wc
							a.c = e.textStreams
							oa.o(2)
							break
						}
						f = -1
						g = r(hb(b))
						for (h = g.next(); !h.done; h = g.next())
							(l = k = h.value),
								(m = l.aa),
								(n = l.item),
								a.g.has(n.id) ||
									(a.g.add(n.id), -1 == f && (f = m))
						if (-1 == f) return oa['return']()
						p = b.map(function (Ia) {
							return Ia.fc
						})
						t = b.map(function (Ia) {
							return Ia.wc
						})
						v = b.map(function (Ia) {
							return Ia.textStreams
						})
						w = r(v)
						for (y = w.next(); !y.done; y = w.next())
							(A = y.value), A.push(Cn())
						return u(oa, Dn(a.a, p, f, En, Fn), 3)
					case 3:
						return u(oa, Dn(a.b, t, f, En, Fn), 4)
					case 4:
						return u(oa, Dn(a.c, v, f, En, Fn), 2)
					case 2:
						B = 0
						E = []
						if (a.b.length && a.a.length)
							for (
								P = r(a.a), V = P.next();
								!V.done;
								V = P.next()
							)
								for (
									S = V.value, ca = r(a.b), O = ca.next();
									!O.done;
									O = ca.next()
								)
									(Q = O.value),
										(ea = Ud(S.drmInfos, Q.drmInfos)),
										(S.drmInfos.length &&
											Q.drmInfos.length &&
											!ea.length) ||
											((ya = B++),
											E.push({
												id: ya,
												language: S.language,
												primary: S.primary,
												audio: S,
												video: Q,
												bandwidth:
													(S.bandwidth || 0) +
													(Q.bandwidth || 0),
												drmInfos: ea,
												allowedByApplication: !0,
												allowedByKeySystem: !0,
											}))
						else
							for (
								D = a.b.concat(a.a), F = r(D), I = F.next();
								!I.done;
								I = F.next()
							)
								(G = I.value),
									(H = B++),
									E.push({
										id: H,
										language: G.language,
										primary: G.primary,
										audio: G.type == d.kb ? G : null,
										video: G.type == d.Ga ? G : null,
										bandwidth: G.bandwidth || 0,
										drmInfos: G.drmInfos,
										allowedByApplication: !0,
										allowedByKeySystem: !0,
									})
						a.f = E
						x(oa)
				}
			})
		}
		function zn(a) {
			a = r(a)
			for (var b = a.next(); !b.done; b = a.next()) {
				b = b.value
				for (
					var c = [], d = r(b.fc), e = d.next();
					!e.done;
					e = d.next()
				) {
					e = e.value
					for (
						var f = !1, g = r(c), h = g.next();
						!h.done;
						h = g.next()
					)
						(h = h.value),
							e.id != h.id &&
								e.channelsCount == h.channelsCount &&
								e.language == h.language &&
								e.bandwidth == h.bandwidth &&
								Wb(e.roles, h.roles) &&
								e.audioSamplingRate == h.audioSamplingRate &&
								e.primary == h.primary &&
								(f = !0)
					f || c.push(e)
				}
				b.fc = c
			}
		}
		function Bn(a) {
			a = r(a)
			for (var b = a.next(); !b.done; b = a.next()) {
				b = b.value
				for (
					var c = [], d = r(b.textStreams), e = d.next();
					!e.done;
					e = d.next()
				) {
					e = e.value
					for (
						var f = !1, g = r(c), h = g.next();
						!h.done;
						h = g.next()
					)
						(h = h.value),
							e.id != h.id &&
								e.language == h.language &&
								Wb(e.roles, h.roles) &&
								(f = !0)
					f || c.push(e)
				}
				b.textStreams = c
			}
		}
		function An(a) {
			a = r(a)
			for (var b = a.next(); !b.done; b = a.next()) {
				b = b.value
				for (
					var c = [], d = r(b.wc), e = d.next();
					!e.done;
					e = d.next()
				) {
					e = e.value
					for (
						var f = !1, g = r(c), h = g.next();
						!h.done;
						h = g.next()
					)
						(h = h.value),
							e.id != h.id &&
								e.width == h.width &&
								e.frameRate == h.frameRate &&
								Wb(e.roles, h.roles) &&
								Rc(e.closedCaptions, h.closedCaptions) &&
								e.bandwidth == h.bandwidth &&
								(f = !0)
					f || c.push(e)
				}
				b.wc = c
			}
		}
		function Gn(a) {
			var b, c, d, e, f, g, h, k, l, m, n, p, t, v, w, y, A, B, E, D, F, I
			return J(function (G) {
				switch (G.a) {
					case 1:
						b = Oc
						if (1 == a.length) return G['return'](a[0])
						c = a.map(function (H) {
							return H.filter(function (P) {
								return P.type == b.kb
							})
						})
						d = a.map(function (H) {
							return H.filter(function (P) {
								return P.type == b.Ga
							})
						})
						e = a.map(function (H) {
							return H.filter(function (P) {
								return P.type == b.da
							})
						})
						f = r(e)
						for (g = f.next(); !g.done; g = f.next())
							(h = g.value),
								h.push({
									id: 0,
									originalId: '',
									primary: !1,
									type: 'text',
									mimeType: '',
									codecs: '',
									language: '',
									label: null,
									width: null,
									height: null,
									encrypted: !1,
									keyIds: new Set(),
									segments: [],
									variantIds: [],
									roles: [],
									channelsCount: null,
									audioSamplingRate: null,
									closedCaptions: null,
								})
						return u(G, Dn([], c, 0, Hn, In), 2)
					case 2:
						return (k = G.b), u(G, Dn([], d, 0, Hn, In), 3)
					case 3:
						return (l = G.b), u(G, Dn([], e, 0, Hn, In), 4)
					case 4:
						m = G.b
						n = 0
						if (l.length && k.length)
							for (y = r(k), A = y.next(); !A.done; A = y.next())
								for (
									B = A.value, E = r(l), D = E.next();
									!D.done;
									D = E.next()
								)
									(F = D.value),
										(I = n++),
										F.variantIds.push(I),
										B.variantIds.push(I)
						else
							for (
								p = l.concat(k), t = r(p), v = t.next();
								!v.done;
								v = t.next()
							)
								(w = v.value), (w.variantIds = [n++])
						return G['return'](l.concat(k, m))
				}
			})
		}
		function Dn(a, b, c, d, e) {
			var f,
				g,
				h,
				k,
				l,
				m,
				n,
				p,
				t,
				v,
				w,
				y,
				A,
				B,
				E,
				D,
				F,
				I,
				G,
				H,
				P,
				V,
				S,
				ca
			return J(function (O) {
				switch (O.a) {
					case 1:
						f = Oc
						g = []
						h = r(hb(b))
						for (k = h.next(); !k.done; k = h.next())
							(m = l = k.value),
								(n = m.aa),
								(p = m.item),
								n >= c ? g.push(new Set(p)) : g.push(new Set())
						t = r(a)
						v = t.next()
					case 2:
						if (v.done) {
							O.o(4)
							break
						}
						w = v.value
						return u(O, Jn(w, b, c, e, g), 5)
					case 5:
						y = O.b
						if (!y) throw new L(2, 4, 4037)
						v = t.next()
						O.o(2)
						break
					case 4:
						;(A = r(g)), (B = A.next())
					case 6:
						if (B.done) {
							O.o(8)
							break
						}
						E = B.value
						D = r(E)
						F = D.next()
					case 9:
						if (F.done) {
							B = A.next()
							O.o(6)
							break
						}
						I = F.value
						return u(O, Kn(I, b, d, e, g), 12)
					case 12:
						;(G = O.b) && a.push(G)
						F = D.next()
						O.o(9)
						break
					case 8:
						H = r(g)
						for (B = H.next(); !B.done; B = H.next())
							for (
								P = B.value, V = {}, S = r(P), F = S.next();
								!F.done;
								V = { jb: V.jb }, F = S.next()
							)
								if (
									((V.jb = F.value),
									V.jb.type != f.da || V.jb.language)
								)
									if (
										(ca = a.some(
											(function (Q) {
												return function (ea) {
													return (
														ea.mimeType ==
															Q.jb.mimeType &&
														Vc(ea.codecs)[0] ==
															Vc(Q.jb.codecs)[0]
													)
												}
											})(V)
										))
									)
										throw new L(2, 4, 4037)
						return O['return'](a)
				}
			})
		}
		function Jn(a, b, c, d, e) {
			var f
			return J(function (g) {
				if (1 == g.a)
					return (f = Ln(b, a))
						? u(
								g,
								Promise.all(
									f.map(function (h) {
										return h.createSegmentIndex()
									})
								),
								2
						  )
						: g['return'](!1)
				Mn(a, f, c, d, e)
				return g['return'](!0)
			})
		}
		function Kn(a, b, c, d, e) {
			var f, g
			return J(function (h) {
				if (1 == h.a)
					return (
						(f = c(a)),
						(g = Ln(b, f))
							? f.createSegmentIndex
								? u(
										h,
										Promise.all(
											g.map(function (k) {
												return k.createSegmentIndex()
											})
										),
										2
								  )
								: h.o(2)
							: h['return'](null)
					)
				Mn(f, g, 0, d, e)
				return h['return'](f)
			})
		}
		function Mn(a, b, c, d, e) {
			b = r(hb(b))
			for (var f = b.next(); !f.done; f = b.next()) {
				var g = f.value
				f = g.aa
				g = g.item
				if (f >= c) {
					d(a, g)
					var h = !0
					'audio' == a.type &&
						0 == Eg(a.language, g.language) &&
						(h = !1)
					h && e[f]['delete'](g)
				}
			}
		}
		function En(a) {
			a = Object.assign({}, a)
			a.originalId = null
			a.createSegmentIndex = function () {
				return Promise.resolve()
			}
			a.segmentIndex = new Th()
			a.emsgSchemeIdUris = []
			a.keyIds = new Set()
			a.closedCaptions = null
			a.trickModeVideo = null
			return a
		}
		function Hn(a) {
			a = Object.assign({}, a)
			a.keyIds = new Set()
			a.segments = []
			a.variantIds = []
			a.closedCaptions = null
			return a
		}
		function Fn(a, b) {
			a.roles = Array.from(new Set(a.roles.concat(b.roles)))
			b.emsgSchemeIdUris &&
				(a.emsgSchemeIdUris = Array.from(
					new Set(a.emsgSchemeIdUris.concat(b.emsgSchemeIdUris))
				))
			var c = b.keyIds
			c = new Set(ja(a.keyIds).concat(ja(c)))
			a.keyIds = c
			null == a.originalId
				? (a.originalId = b.originalId)
				: (a.originalId += ',' + (b.originalId || ''))
			c = Ud(a.drmInfos, b.drmInfos)
			if (b.drmInfos.length && a.drmInfos.length && !c.length)
				throw new L(2, 4, 4038)
			a.drmInfos = c
			a.encrypted = a.encrypted || b.encrypted
			if (b.closedCaptions) {
				a.closedCaptions || (a.closedCaptions = new Map())
				c = r(b.closedCaptions)
				for (var d = c.next(); !d.done; d = c.next()) {
					var e = r(d.value)
					d = e.next().value
					e = e.next().value
					a.closedCaptions.set(d, e)
				}
			}
			a.segmentIndex.f.push(b.segmentIndex)
			b.trickModeVideo
				? (a.trickModeVideo ||
						((a.trickModeVideo = En(b.trickModeVideo)),
						(a.trickModeVideo.segmentIndex = a.segmentIndex.clone())),
				  Fn(a.trickModeVideo, b.trickModeVideo))
				: a.trickModeVideo && Fn(a.trickModeVideo, b)
		}
		function In(a, b) {
			a.roles = Array.from(new Set(a.roles.concat(b.roles)))
			var c = b.keyIds
			c = new Set(ja(a.keyIds).concat(ja(c)))
			a.keyIds = c
			a.encrypted = a.encrypted && b.encrypted
			a.segments.push.apply(a.segments, ja(b.segments))
			if (b.closedCaptions) {
				a.closedCaptions || (a.closedCaptions = new Map())
				c = r(b.closedCaptions)
				for (var d = c.next(); !d.done; d = c.next()) {
					var e = r(d.value)
					d = e.next().value
					e = e.next().value
					a.closedCaptions.set(d, e)
				}
			}
		}
		function Ln(a, b) {
			for (var c = [], d = r(a), e = d.next(); !e.done; e = d.next()) {
				var f = b,
					g = { audio: Nn, video: Nn, text: On }[f.type],
					h = { audio: Pn, video: Qn, text: Rn }[f.type],
					k = null
				e = r(e.value)
				for (var l = e.next(); !l.done; l = e.next())
					(l = l.value), !g(f, l) || (k && !h(f, k, l)) || (k = l)
				f = k
				if (!f) return null
				c.push(f)
			}
			return c
		}
		function Nn(a, b) {
			var c
			if (
				!(c =
					b.mimeType != a.mimeType ||
					Vc(b.codecs)[0] != Vc(a.codecs)[0]) &&
				(c = a.drmInfos)
			) {
				c = a.drmInfos
				var d = b.drmInfos
				c = !(c.length && d.length ? 0 < Ud(c, d).length : 1)
			}
			return c ? !1 : !0
		}
		function On(a, b) {
			return a.language
				? b.language
					? 0 == Eg(a.language, b.language) || b.kind != a.kind
						? !1
						: !0
					: !0
				: !1
		}
		function Pn(a, b, c) {
			if (a.id == c.id) return !0
			var d = Eg(a.language, b.language),
				e = Eg(a.language, c.language)
			if (e > d) return !0
			if (e < d) return !1
			if (!b.primary && c.primary) return !0
			if (b.primary && !c.primary) return !1
			if (a.roles.length)
				return (
					(d = b.roles.filter(function (f) {
						return a.roles.includes(f)
					})),
					(e = c.roles.filter(function (f) {
						return a.roles.includes(f)
					})),
					e.length > d.length
						? !0
						: e.length < d.length
						? !1
						: c.roles.length < b.roles.length
				)
			d = Sn(a.channelsCount, b.channelsCount, c.channelsCount)
			if (d == Tn) return !0
			if (d == Un) return !1
			d = Sn(
				a.audioSamplingRate,
				b.audioSamplingRate,
				c.audioSamplingRate
			)
			return d == Tn
				? !0
				: d == Un
				? !1
				: a.bandwidth && Vn(a.bandwidth, b.bandwidth, c.bandwidth) == Tn
				? !0
				: !1
		}
		function Qn(a, b, c) {
			if (a.id == c.id) return !0
			var d = Sn(
				a.width * a.height,
				b.width * b.height,
				c.width * c.height
			)
			if (d == Tn) return !0
			if (d == Un) return !1
			if (a.frameRate) {
				d = Sn(a.frameRate, b.frameRate, c.frameRate)
				if (d == Tn) return !0
				if (d == Un) return !1
			}
			return a.bandwidth &&
				Vn(a.bandwidth, b.bandwidth, c.bandwidth) == Tn
				? !0
				: !1
		}
		function Rn(a, b, c) {
			if (a.id == c.id) return !0
			var d = Eg(a.language, b.language),
				e = Eg(a.language, c.language)
			if (e > d) return !0
			if (e < d) return !1
			if (!b.primary && c.primary) return !0
			if (b.primary && !c.primary) return !1
			if (a.roles.length) {
				d = b.roles.filter(function (f) {
					return a.roles.includes(f)
				})
				e = c.roles.filter(function (f) {
					return a.roles.includes(f)
				})
				if (e.length > d.length) return !0
				if (e.length < d.length) return !1
			}
			return c.mimeType != a.mimeType ||
				c.codecs != a.codecs ||
				(b.mimeType == a.mimeType && b.codecs == a.codecs)
				? !1
				: !0
		}
		function Cn() {
			return {
				id: 0,
				originalId: '',
				createSegmentIndex: function () {
					return Promise.resolve()
				},
				segmentIndex: new Qh([]),
				mimeType: '',
				codecs: '',
				encrypted: !1,
				drmInfos: [],
				keyIds: new Set(),
				language: '',
				label: null,
				type: 'text',
				primary: !1,
				trickModeVideo: null,
				emsgSchemeIdUris: null,
				roles: [],
				channelsCount: null,
				audioSamplingRate: null,
				closedCaptions: null,
			}
		}
		function Sn(a, b, c) {
			if (b == a && a != c) return Un
			if (c == a && a != b) return Tn
			if (b > a) {
				if (c <= a || c - a < b - a) return Tn
				if (c - a > b - a) return Un
			} else {
				if (c > a) return Un
				if (a - c < a - b) return Tn
				if (a - c > a - b) return Un
			}
			return Wn
		}
		function Vn(a, b, c) {
			b = Math.abs(a - b)
			a = Math.abs(a - c)
			return a < b ? Tn : b < a ? Un : Wn
		}
		var Tn = 1,
			Wn = 0,
			Un = -1
		function Xn() {
			var a = this
			this.v = this.i = null
			this.b = []
			this.s = null
			this.u = 1
			this.g = {}
			this.a = new xn()
			this.j = 0
			this.l = new Na(5)
			this.h = new M(function () {
				a.Qb()
			})
			this.c = new Yb()
			this.f = Infinity
			this.w = !1
		}
		q = Xn.prototype
		q.configure = function (a) {
			this.i = a
		}
		q.start = function (a, b) {
			var c = this,
				d
			return J(function (e) {
				if (1 == e.a)
					return (
						(c.w = b.isLowLatencyMode()),
						(c.b = [a]),
						(c.v = b),
						u(e, Yn(c), 2)
					)
				d = e.b
				c.v && Zn(c, d)
				if (!c.v) throw new L(2, 7, 7001)
				return e['return'](c.s)
			})
		}
		q.stop = function () {
			for (
				var a = r(Object.values(this.g)), b = a.next();
				!b.done;
				b = a.next()
			)
				b.value.release()
			this.a && this.a.release()
			this.i = this.v = null
			this.b = []
			this.s = null
			this.g = {}
			this.a = null
			null != this.h && (this.h.stop(), (this.h = null))
			return this.c.destroy()
		}
		q.update = function () {
			var a = this,
				b
			return J(function (c) {
				if (1 == c.a) return z(c, 2), u(c, Yn(a), 4)
				if (2 != c.a) return wa(c, 0)
				b = C(c)
				if (!a.v || !b) return c['return']()
				a.v.onError(b)
				x(c)
			})
		}
		q.onExpirationUpdated = function () {}
		function Yn(a) {
			var b, c, d, e, f, g, h
			return J(function (k) {
				if (1 == k.a)
					return (
						(b = dc(a.b, a.i.retryParameters)),
						(c = a.v.networkingEngine),
						(d = Date.now()),
						(e = c.request(0, b)),
						Zb(a.c, e),
						u(k, e.promise, 2)
					)
				if (3 != k.a) {
					f = k.b
					if (!a.v) return k['return'](0)
					f.uri && !a.b.includes(f.uri) && a.b.unshift(f.uri)
					return u(k, $n(a, f.data, f.uri), 3)
				}
				g = Date.now()
				h = (g - d) / 1e3
				Oa(a.l, 1, h)
				return k['return'](h)
			})
		}
		function $n(a, b, c) {
			var d, e, f, g
			return J(function (h) {
				if (1 == h.a) {
					d = Em(b, 'MPD')
					if (!d) throw new L(2, 4, 4001, c)
					e = a.i.dash.xlinkFailGracefully
					f = Tm(d, a.i.retryParameters, e, c, a.v.networkingEngine)
					Zb(a.c, f)
					return u(h, f.promise, 2)
				}
				g = h.b
				return h['return'](ao(a, g, c))
			})
		}
		function ao(a, b, c) {
			var d,
				e,
				f,
				g,
				h,
				k,
				l,
				m,
				n,
				p,
				t,
				v,
				w,
				y,
				A,
				B,
				E,
				D,
				F,
				I,
				G,
				H,
				P,
				V,
				S
			return J(function (ca) {
				switch (ca.a) {
					case 1:
						d = [c]
						e = om(b, 'Location').map(sm).filter(Kc)
						0 < e.length && ((f = Mc(d, e)), (d = a.b = f))
						g = om(b, 'BaseURL')
						h = g.map(sm)
						k = Mc(d, h)
						l = 0
						g &&
							g.length &&
							(l = um(g[0], 'availabilityTimeOffset', Bm) || 0)
						m = a.i.dash.ignoreMinBufferTime
						n = 0
						m || (n = um(b, 'minBufferTime', wm) || 0)
						a.j = um(b, 'minimumUpdatePeriod', wm, -1)
						p = um(b, 'availabilityStartTime', vm)
						t = um(b, 'timeShiftBufferDepth', wm)
						v = a.i.dash.ignoreSuggestedPresentationDelay
						w = null
						v || (w = um(b, 'suggestedPresentationDelay', wm))
						y = um(b, 'maxSegmentDuration', wm)
						A = b.getAttribute('type') || 'static'
						a.s
							? (B = a.s.presentationTimeline)
							: ((E = a.i.defaultPresentationDelay || 1.5 * n),
							  (D = null != w ? w : E),
							  (B = new T(p, D, a.i.dash.autoCorrectDrift)))
						F = {
							Va: 'static' != A,
							presentationTimeline: B,
							ia: null,
							N: null,
							ea: null,
							F: null,
							bandwidth: 0,
							Ld: !1,
							lb: l,
						}
						var O = um(b, 'mediaPresentationDuration', wm),
							Q = [],
							ea = 0,
							ya = om(b, 'Period')
						ya = r(hb(ya))
						for (var oa = ya.next(); !oa.done; oa = ya.next()) {
							var Ia = oa.value
							oa = Ia.item
							Ia = Ia.next
							ea = um(oa, 'start', wm, ea)
							var oc = um(oa, 'duration', wm),
								Za = null
							if (Ia) {
								var Ad = um(Ia, 'start', wm)
								null != Ad && (Za = Ad - ea)
							} else null != O && (Za = O - ea)
							null == Za && (Za = oc)
							oa = bo(a, F, k, {
								start: ea,
								duration: Za,
								node: oa,
								Nd: null == Za || !Ia,
							})
							Q.push(oa)
							if (null == Za) {
								ea = null
								break
							}
							ea += Za
						}
						I =
							null != O
								? { periods: Q, duration: O, Gd: !1 }
								: { periods: Q, duration: ea, Gd: !0 }
						G = I.duration
						H = I.periods
						B.Ub('static' == A)
						;('static' != A && I.Gd) || B.Da(G || Infinity)
						a.w
							? B.Zd(a.f)
							: a.f &&
							  Ta(
									'Low-latency DASH live stream detected, but low-latency streaming mode is not enabled in Shaka Player. Set streaming.lowLatencyMode configuration to true, and see https://bit.ly/3clctcj for details.'
							  )
						;(P = B.T()) &&
							!isNaN(a.i.availabilityWindowOverride) &&
							(t = a.i.availabilityWindowOverride)
						null == t && (t = Infinity)
						B.vd(t)
						B.dd(y || 1)
						return u(ca, yn(a.a, H, F.Va), 2)
					case 2:
						if (a.s) {
							a.s.variants = a.a.f
							a.s.textStreams = a.a.c
							ca.o(3)
							break
						}
						a.s = {
							presentationTimeline: B,
							variants: a.a.f,
							textStreams: a.a.c,
							offlineSessionIds: [],
							minBufferTime: n || 0,
						}
						if (!B.de()) {
							ca.o(3)
							break
						}
						V = om(b, 'UTCTiming')
						return u(ca, co(a, k, V), 5)
					case 5:
						S = ca.b
						if (!a.v) return ca['return']()
						B.$d(S)
					case 3:
						return (
							a.v.makeTextStreamsForClosedCaptions(a.s),
							u(ca, a.v.filter(a.s), 0)
						)
				}
			})
		}
		function bo(a, b, c, d) {
			b.ia = eo(d.node, null, c)
			b.N = d
			b.ia.lb = b.lb
			b.ia.id || (b.ia.id = '__shaka_period_' + d.start)
			c = om(d.node, 'EventStream')
			c = r(c)
			for (var e = c.next(); !e.done; e = c.next())
				fo(a, d.start, d.duration, e.value)
			c = om(d.node, 'AdaptationSet')
				.map(function (l) {
					return go(a, b, l)
				})
				.filter(Kc)
			if (b.Va) {
				d = []
				e = r(c)
				for (var f = e.next(); !f.done; f = e.next()) {
					f = r(f.value.af)
					for (var g = f.next(); !g.done; g = f.next())
						d.push(g.value)
				}
				if (d.length != new Set(d).size) throw new L(2, 4, 4018)
			}
			d = c.filter(function (l) {
				return !l.xd
			})
			c = c.filter(function (l) {
				return l.xd
			})
			c = r(c)
			for (e = c.next(); !e.done; e = c.next()) {
				f = e.value
				e = f.streams[0]
				f = f.xd
				g = r(d)
				for (var h = g.next(); !h.done; h = g.next())
					if (((h = h.value), h.id == f)) {
						h = r(h.streams)
						for (var k = h.next(); !k.done; k = h.next())
							k.value.trickModeVideo = e
					}
			}
			e = a.i.disableAudio ? [] : ho(d, 'audio')
			f = a.i.disableVideo ? [] : ho(d, 'video')
			c = a.i.disableText ? [] : ho(d, 'text')
			if (!f.length && !e.length) throw new L(2, 4, 4004)
			d = []
			e = r(e)
			for (g = e.next(); !g.done; g = e.next())
				d.push.apply(d, ja(g.value.streams))
			e = []
			f = r(f)
			for (g = f.next(); !g.done; g = f.next())
				e.push.apply(e, ja(g.value.streams))
			f = []
			c = r(c)
			for (g = c.next(); !g.done; g = c.next())
				f.push.apply(f, ja(g.value.streams))
			return { id: b.ia.id, fc: d, wc: e, textStreams: f }
		}
		function ho(a, b) {
			return a.filter(function (c) {
				return c.contentType == b
			})
		}
		function go(a, b, c) {
			b.ea = eo(c, b.ia, null)
			if ('image' == b.ea.contentType) return null
			var d = !1,
				e = om(c, 'Role'),
				f = e
					.map(function (D) {
						return D.getAttribute('value')
					})
					.filter(Kc),
				g = void 0,
				h = 'text' == b.ea.contentType
			h && (g = 'subtitle')
			e = r(e)
			for (var k = e.next(); !k.done; k = e.next()) {
				k = k.value
				var l = k.getAttribute('schemeIdUri')
				if (null == l || 'urn:mpeg:dash:role:2011' == l)
					switch (((k = k.getAttribute('value')), k)) {
						case 'main':
							d = !0
							break
						case 'caption':
						case 'subtitle':
							g = k
					}
			}
			l = om(c, 'EssentialProperty')
			e = null
			k = !1
			l = r(l)
			for (var m = l.next(); !m.done; m = l.next())
				(m = m.value),
					'http://dashif.org/guidelines/trickmode' ==
					m.getAttribute('schemeIdUri')
						? (e = m.getAttribute('value'))
						: (k = !0)
			l = om(c, 'Accessibility')
			var n = new Map()
			l = r(l)
			for (m = l.next(); !m.done; m = l.next()) {
				var p = m.value
				m = p.getAttribute('schemeIdUri')
				p = p.getAttribute('value')
				if ('urn:scte:dash:cc:cea-608:2015' == m)
					if (((m = 1), null != p)) {
						p = p.split(';')
						for (
							var t = r(p), v = t.next();
							!v.done;
							v = t.next()
						) {
							var w = v.value,
								y = (v = void 0)
							w.includes('=')
								? ((w = w.split('=')),
								  (v = w[0].startsWith('CC')
										? w[0]
										: 'CC' + w[0]),
								  (y = w[1]))
								: ((v = 'CC' + m),
								  2 == p.length ? (m += 2) : m++,
								  (y = w))
							n.set(v, Ag(y))
						}
					} else n.set('CC1', 'und')
				else if ('urn:scte:dash:cc:cea-708:2015' == m)
					if (((m = 1), null != p))
						for (
							p = r(p.split(';')), v = p.next();
							!v.done;
							v = p.next()
						)
							(v = v.value),
								(w = t = void 0),
								v.includes('=')
									? ((v = v.split('=')),
									  (t = 'svc' + v[0]),
									  (w = v[1].split(',')[0].split(':').pop()))
									: ((t = 'svc' + m), m++, (w = v)),
								n.set(t, Ag(w))
					else n.set('svc1', 'und')
				else
					'urn:mpeg:dash:role:2011' == m &&
						null != p &&
						(f.push(p), 'captions' == p && (g = 'caption'))
			}
			if (k) return null
			k = om(c, 'ContentProtection')
			var A = Fm(k, a.i.dash.ignoreDrmInfo),
				B = Ag(c.getAttribute('lang') || 'und'),
				E = c.getAttribute('label')
			;(k = om(c, 'Label')) &&
				k.length &&
				((k = k[0]), k.textContent && (E = k.textContent))
			k = om(c, 'Representation')
			c = k
				.map(function (D) {
					return io(a, b, A, g, B, E, d, f, n, D)
				})
				.filter(function (D) {
					return !!D
				})
			if (0 == c.length) {
				if (a.i.dash.ignoreEmptyAdaptationSet || h) return null
				throw new L(2, 4, 4003)
			}
			if (!b.ea.contentType || 'application' == b.ea.contentType)
				for (
					b.ea.contentType = jo(c[0].mimeType, c[0].codecs),
						h = r(c),
						l = h.next();
					!l.done;
					l = h.next()
				)
					l.value.type = b.ea.contentType
			h = r(c)
			for (l = h.next(); !l.done; l = h.next())
				for (
					l = l.value, m = r(A.drmInfos), p = m.next();
					!p.done;
					p = m.next()
				)
					(p = p.value),
						(p.keyIds =
							p.keyIds && l.keyIds
								? new Set(ja(p.keyIds).concat(ja(l.keyIds)))
								: p.keyIds || l.keyIds)
			h = k
				.map(function (D) {
					return D.getAttribute('id')
				})
				.filter(Kc)
			return {
				id: b.ea.id || '__fake__' + a.u++,
				contentType: b.ea.contentType,
				language: B,
				Uf: d,
				streams: c,
				drmInfos: A.drmInfos,
				xd: e,
				af: h,
			}
		}
		function io(a, b, c, d, e, f, g, h, k, l) {
			b.F = eo(l, b.ea, null)
			a.f = Math.min(a.f, b.F.lb)
			if (!ko(b.F)) return null
			var m = b.N.start
			b.bandwidth = um(l, 'bandwidth', zm) || 0
			var n = b.F.contentType
			n = 'text' == n || 'application' == n
			try {
				var p = function (A, B, E) {
					return lo(a, A, B, E)
				}
				if (b.F.Sb) var t = en(b, p)
				else if (b.F.Ta) t = ln(b, a.g)
				else if (b.F.Tb)
					t = qn(b, p, a.g, !!a.s, a.i.dash.initialSegmentLimit)
				else {
					var v = b.F.ra,
						w = b.N.duration || 0
					t = {
						ob: function () {
							return Promise.resolve(Sh(m, w, v))
						},
					}
				}
			} catch (A) {
				if (n && 4002 == A.code) return null
				throw A
			}
			n = om(l, 'ContentProtection')
			n = Jm(n, c, a.i.dash.ignoreDrmInfo)
			n = new Set(n ? [n] : [])
			om(l, 'SupplementalProperty').some(function (A) {
				return (
					'tag:dolby.com,2018:dash:EC3_ExtensionType:2018' ==
						A.getAttribute('schemeIdUri') &&
					'JOC' == A.getAttribute('value')
				)
			}) && (b.F.mimeType = 'audio/eac3-joc')
			var y = {
				id: a.u++,
				originalId: b.F.id,
				createSegmentIndex: function () {
					var A
					return J(function (B) {
						if (1 == B.a) {
							if (y.segmentIndex) return B.o(0)
							A = y
							return u(B, t.ob(), 3)
						}
						A.segmentIndex = B.b
						x(B)
					})
				},
				segmentIndex: null,
				mimeType: b.F.mimeType,
				codecs: b.F.codecs,
				frameRate: b.F.frameRate,
				pixelAspectRatio: b.F.pixelAspectRatio,
				bandwidth: b.bandwidth,
				width: b.F.width,
				height: b.F.height,
				kind: d,
				encrypted: 0 < c.drmInfos.length,
				drmInfos: c.drmInfos,
				keyIds: n,
				language: e,
				label: f,
				type: b.ea.contentType,
				primary: g,
				trickModeVideo: null,
				emsgSchemeIdUris: b.F.emsgSchemeIdUris,
				roles: h,
				channelsCount: b.F.fd,
				audioSamplingRate: b.F.audioSamplingRate,
				closedCaptions: k,
			}
			return y
		}
		q.Qb = function () {
			var a = this,
				b,
				c
			return J(function (d) {
				switch (d.a) {
					case 1:
						return (b = 0), z(d, 2), u(d, Yn(a), 4)
					case 4:
						b = d.b
						wa(d, 3)
						break
					case 2:
						;(c = C(d)), a.v && ((c.severity = 1), a.v.onError(c))
					case 3:
						if (!a.v) return d['return']()
						Zn(a, b)
						x(d)
				}
			})
		}
		function Zn(a, b) {
			0 > a.j || a.h.R(Math.max(3, a.j - b, Pa(a.l)))
		}
		function eo(a, b, c) {
			b = b || {
				contentType: '',
				mimeType: '',
				codecs: '',
				emsgSchemeIdUris: [],
				frameRate: void 0,
				pixelAspectRatio: void 0,
				fd: null,
				audioSamplingRate: null,
				lb: 0,
			}
			c = c || b.ra
			var d = om(a, 'BaseURL'),
				e = d.map(sm),
				f = a.getAttribute('contentType') || b.contentType,
				g = a.getAttribute('mimeType') || b.mimeType,
				h = a.getAttribute('codecs') || b.codecs,
				k = um(a, 'frameRate', Cm) || b.frameRate,
				l = a.getAttribute('sar') || b.pixelAspectRatio,
				m = om(a, 'InbandEventStream'),
				n = b.emsgSchemeIdUris.slice()
			m = r(m)
			for (var p = m.next(); !p.done; p = m.next())
				(p = p.value.getAttribute('schemeIdUri')),
					n.includes(p) || n.push(p)
			m = om(a, 'AudioChannelConfiguration')
			m = mo(m) || b.fd
			p = um(a, 'audioSamplingRate', Am) || b.audioSamplingRate
			f || (f = jo(g, h))
			var t = nm(a, 'SegmentBase'),
				v = nm(a, 'SegmentTemplate'),
				w = t ? um(t, 'availabilityTimeOffset', Bm) || 0 : 0,
				y = v ? um(v, 'availabilityTimeOffset', Bm) || 0 : 0
			d = d && d.length ? um(d[0], 'availabilityTimeOffset', Bm) || 0 : 0
			d = b.lb + d + w + y
			return {
				ra: Mc(c, e),
				Sb: t || b.Sb,
				Ta: nm(a, 'SegmentList') || b.Ta,
				Tb: v || b.Tb,
				width: um(a, 'width', Am) || b.width,
				height: um(a, 'height', Am) || b.height,
				contentType: f,
				mimeType: g,
				codecs: h,
				frameRate: k,
				pixelAspectRatio: l,
				emsgSchemeIdUris: n,
				id: a.getAttribute('id'),
				fd: m,
				audioSamplingRate: p,
				lb: d,
			}
		}
		function mo(a) {
			a = r(a)
			for (var b = a.next(); !b.done; b = a.next()) {
				var c = b.value
				if ((b = c.getAttribute('schemeIdUri')))
					if ((c = c.getAttribute('value')))
						switch (b) {
							case 'urn:mpeg:dash:outputChannelPositionList:2012':
								return c.trim().split(/ +/).length
							case 'urn:mpeg:dash:23003:3:audio_channel_configuration:2011':
							case 'urn:dts:dash:audio_channel_configuration:2012':
								b = parseInt(c, 10)
								if (!b) continue
								return b
							case 'tag:dolby.com,2014:dash:audio_channel_configuration:2011':
							case 'urn:dolby:dash:audio_channel_configuration:2011':
								if ((b = parseInt(c, 16))) {
									for (a = 0; b; ) b & 1 && ++a, (b >>= 1)
									return a
								}
						}
			}
			return null
		}
		function ko(a) {
			var b = a.Sb ? 1 : 0
			b += a.Ta ? 1 : 0
			b += a.Tb ? 1 : 0
			if (0 == b)
				return 'text' == a.contentType || 'application' == a.contentType
					? !0
					: !1
			1 != b && (a.Sb && (a.Ta = null), (a.Tb = null))
			return !0
		}
		function no(a, b, c, d) {
			var e, f, g, h, k, l
			return J(function (m) {
				if (1 == m.a)
					return (
						(e = Mc(b, [c])),
						(f = dc(e, a.i.retryParameters)),
						(f.method = d),
						(g = a.v.networkingEngine.request(4, f)),
						Zb(a.c, g),
						u(m, g.promise, 2)
					)
				h = m.b
				if ('HEAD' == d) {
					if (!h.headers || !h.headers.date) return m['return'](0)
					k = h.headers.date
				} else k = uc(h.data)
				l = Date.parse(k)
				return isNaN(l) ? m['return'](0) : m['return'](l - Date.now())
			})
		}
		function co(a, b, c) {
			var d, e, f, g, h, k, l, m
			return J(function (n) {
				switch (n.a) {
					case 1:
						;(d = c.map(function (p) {
							return {
								scheme: p.getAttribute('schemeIdUri'),
								value: p.getAttribute('value'),
							}
						})),
							(e = a.i.dash.clockSyncUri),
							!d.length &&
								e &&
								d.push({
									scheme: 'urn:mpeg:dash:utc:http-head:2014',
									value: e,
								}),
							(f = r(d)),
							(g = f.next())
					case 2:
						if (g.done) {
							n.o(4)
							break
						}
						h = g.value
						z(n, 5)
						k = h.scheme
						l = h.value
						switch (k) {
							case 'urn:mpeg:dash:utc:http-head:2014':
							case 'urn:mpeg:dash:utc:http-head:2012':
								return n.o(7)
							case 'urn:mpeg:dash:utc:http-xsdate:2014':
							case 'urn:mpeg:dash:utc:http-iso:2014':
							case 'urn:mpeg:dash:utc:http-xsdate:2012':
							case 'urn:mpeg:dash:utc:http-iso:2012':
								return n.o(8)
							case 'urn:mpeg:dash:utc:direct:2014':
							case 'urn:mpeg:dash:utc:direct:2012':
								return (
									(m = Date.parse(l)),
									n['return'](isNaN(m) ? 0 : m - Date.now())
								)
							case 'urn:mpeg:dash:utc:http-ntp:2014':
							case 'urn:mpeg:dash:utc:ntp:2014':
							case 'urn:mpeg:dash:utc:sntp:2014':
								Ta('NTP UTCTiming scheme is not supported')
								break
							default:
								Ta(
									'Unrecognized scheme in UTCTiming element',
									k
								)
						}
						n.o(9)
						break
					case 7:
						return u(n, no(a, b, l, 'HEAD'), 10)
					case 10:
						return n['return'](n.b)
					case 8:
						return u(n, no(a, b, l, 'GET'), 11)
					case 11:
						return n['return'](n.b)
					case 9:
						wa(n, 3)
						break
					case 5:
						C(n)
					case 3:
						g = f.next()
						n.o(2)
						break
					case 4:
						return (
							Ta(
								'A UTCTiming element should always be given in live manifests! This content may not play on clients with bad clocks!'
							),
							n['return'](0)
						)
				}
			})
		}
		function fo(a, b, c, d) {
			var e = d.getAttribute('schemeIdUri') || '',
				f = d.getAttribute('value') || '',
				g = um(d, 'timescale', Am) || 1
			d = r(om(d, 'Event'))
			for (var h = d.next(); !h.done; h = d.next()) {
				h = h.value
				var k = um(h, 'presentationTime', Am) || 0,
					l = um(h, 'duration', Am) || 0
				k = k / g + b
				l = k + l / g
				null != c &&
					((k = Math.min(k, b + c)), (l = Math.min(l, b + c)))
				h = {
					schemeIdUri: e,
					value: f,
					startTime: k,
					endTime: l,
					id: h.getAttribute('id') || '',
					eventElement: h,
				}
				a.v.onTimelineRegionAdded(h)
			}
		}
		function lo(a, b, c, d) {
			var e, f, g, h, k
			return J(function (l) {
				if (1 == l.a)
					return (
						(e = jc),
						(f = ei(b, c, d, a.i.retryParameters)),
						(g = a.v.networkingEngine),
						(h = g.request(e, f)),
						Zb(a.c, h),
						u(l, h.promise, 2)
					)
				k = l.b
				return l['return'](k.data)
			})
		}
		function jo(a, b) {
			return Zf(Sc(a, b)) ? 'text' : a.split('/')[0]
		}
		K('shaka.dash.DashParser', Xn)
		qh.mpd = function () {
			return new Xn()
		}
		oh['application/dash+xml'] = function () {
			return new Xn()
		}
		oh['video/vnd.mpeg.dash.mpd'] = function () {
			return new Xn()
		}
		function oo(a, b, c, d) {
			this.a = a
			this.type = b
			this.P = c
			this.segments = d || null
		}
		function po(a, b, c, d) {
			this.id = a
			this.name = b
			this.a = c
			this.value = void 0 === d ? null : d
		}
		po.prototype.toString = function () {
			function a(d) {
				return (
					d.name +
					'=' +
					(isNaN(Number(d.value)) ? '"' + d.value + '"' : d.value)
				)
			}
			var b = '#' + this.name,
				c = this.a ? this.a.map(a) : []
			this.value && c.unshift(this.value)
			0 < c.length && (b += ':' + c.join(','))
			return b
		}
		po.prototype.getAttribute = function (a) {
			var b = this.a.filter(function (c) {
				return c.name == a
			})
			return b.length ? b[0] : null
		}
		function Z(a, b, c) {
			return (a = a.getAttribute(b)) ? a.value : c || null
		}
		function qo(a, b) {
			var c = a.getAttribute(b)
			if (!c) throw new L(2, 4, 4023, b)
			return c.value
		}
		function ro(a, b, c) {
			c = void 0 === c ? [] : c
			this.P = b
			this.a = a
			this.b = c
		}
		function so(a, b) {
			this.name = a
			this.value = b
		}
		function to(a, b) {
			return a.filter(function (c) {
				return c.name == b
			})
		}
		function uo(a, b) {
			return a.filter(function (c) {
				return qo(c, 'TYPE') == b
			})
		}
		function vo(a, b) {
			var c = to(a, b)
			return c.length ? c[0] : null
		}
		function wo(a, b, c) {
			c = void 0 === c ? 0 : c
			return (a = vo(a, b)) ? Number(a.value) : c
		}
		function xo(a) {
			this.b = a
			this.a = 0
		}
		function yo(a) {
			zo(a, /[ \t]+/gm)
		}
		function zo(a, b) {
			b.lastIndex = a.a
			var c = b.exec(a.b)
			c =
				null == c
					? null
					: { position: c.index, length: c[0].length, results: c }
			if (a.a == a.b.length || null == c || c.position != a.a) return null
			a.a += c.length
			return c.results
		}
		function Ao(a) {
			return a.a == a.b.length
				? null
				: (a = zo(a, /[^ \t\n]*/gm))
				? a[0]
				: null
		}
		function Bo() {
			this.a = 0
		}
		function Co(a, b, c) {
			b = uc(b)
			b = b.replace(/\r\n|\r(?=[^\n]|$)/gm, '\n').trim()
			var d = b.split(/\n+/m)
			if (!/^#EXTM3U($|[ \t\n])/m.test(d[0])) throw new L(2, 4, 4015)
			b = 0
			for (var e = !0, f = r(d), g = f.next(); !g.done; g = f.next())
				if (((g = g.value), /^#(?!EXT)/m.test(g) || e)) e = !1
				else if (((g = Do(a.a++, g)), --a.a, Eo.includes(g.name))) {
					b = 1
					break
				} else 'EXT-X-STREAM-INF' == g.name && (e = !0)
			f = []
			e = !0
			g = r(hb(d))
			for (var h = g.next(); !h.done; h = g.next()) {
				var k = h.value
				h = k.aa
				var l = k.item
				k = k.next
				if (/^#(?!EXT)/m.test(l) || e) e = !1
				else {
					l = Do(a.a++, l)
					if (Fo.includes(l.name)) {
						if (1 != b) throw new L(2, 4, 4017)
						k = d.splice(h, d.length - h)
						d = c
						e = []
						g = []
						h = []
						l = null
						k = r(k)
						for (var m = k.next(); !m.done; m = k.next())
							(m = m.value),
								/^(#EXT)/.test(m)
									? ((m = Do(a.a++, m)),
									  Eo.includes(m.name)
											? f.push(m)
											: 'EXT-X-MAP' == m.name
											? (l = m)
											: 'EXT-X-PART' == m.name
											? h.push(m)
											: 'EXT-X-PRELOAD-HINT' == m.name
											? 'PART' == Z(m, 'TYPE')
												? h.push(m)
												: 'MAP' == Z(m, 'TYPE') &&
												  ((m.name = 'EXT-X-MAP'),
												  (l = m))
											: g.push(m))
									: /^#(?!EXT)/m.test(m) ||
									  ((m = Mc([d], [m.trim()])[0]),
									  l && g.push(l),
									  e.push(new ro(m, g, h)),
									  (g = []),
									  (h = []))
						h.length && (l && g.push(l), e.push(new ro('', g, h)))
						return new oo(c, b, f, e)
					}
					f.push(l)
					'EXT-X-STREAM-INF' == l.name &&
						(l.a.push(new so('URI', k)), (e = !0))
				}
			}
			return new oo(c, b, f)
		}
		function Do(a, b) {
			var c = b.match(/^#(EXT[^:]*)(?::(.*))?$/)
			if (!c) throw new L(2, 4, 4016, b)
			var d = c[1],
				e = c[2]
			c = []
			var f
			if (e) {
				e = new xo(e)
				var g
				;(g = zo(e, /^([^,=]+)(?:,|$)/g)) && (f = g[1])
				for (
					var h = /([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g;
					(g = zo(e, h));

				)
					c.push(new so(g[1], g[2] || g[3]))
			}
			return new po(a, d, c, f)
		}
		var Eo = 'EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST EXT-X-SERVER-CONTROL EXT-X-SKIP'.split(
				' '
			),
			Fo = 'EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE EXT-X-MAP'.split(
				' '
			)
		function Go() {}
		function Ho(a) {
			try {
				var b = Io(a)
				return Eb({
					uri: a,
					Sd: a,
					data: b.data,
					headers: { 'content-type': b.contentType },
				})
			} catch (c) {
				return Cb(c)
			}
		}
		function Io(a) {
			var b = a.split(':')
			if (2 > b.length || 'data' != b[0]) throw new L(2, 1, 1004, a)
			b = b.slice(1).join(':').split(',')
			if (2 > b.length) throw new L(2, 1, 1004, a)
			var c = b[0]
			a = window.decodeURIComponent(b.slice(1).join(','))
			b = c.split(';')
			c = b[0]
			var d = !1
			1 < b.length && 'base64' == b[b.length - 1] && ((d = !0), b.pop())
			var e
			d ? (e = hd(a)) : (e = yc(a))
			return { data: e, contentType: c }
		}
		K('shaka.net.DataUriPlugin', Go)
		Go.parse = Ho
		ac('data', Ho)
		function Jo() {
			var a = this
			this.i = this.v = null
			this.Ua = 1
			this.l = new Map()
			this.g = new Map()
			this.xa = new Set()
			this.a = new Map()
			this.b = null
			this.I = ''
			this.S = new Bo()
			this.wa = 0
			this.j = new M(function () {
				a.Qb()
			})
			this.c = Ko
			this.s = null
			this.ha = 0
			this.u = Infinity
			this.L = this.Oa = 0
			this.w = new Yb()
			this.va = []
			this.D = new Map()
			this.Na = !1
			this.f = new Map()
			this.J = null
			this.X = new Map()
			this.B = new Map()
			this.h = !1
		}
		q = Jo.prototype
		q.configure = function (a) {
			this.i = a
		}
		q.start = function (a, b) {
			var c = this,
				d,
				e
			return J(function (f) {
				if (1 == f.a)
					return (
						(c.v = b),
						(c.h = b.isLowLatencyMode()),
						u(f, Lo(c, dc([a], c.i.retryParameters), 0), 2)
					)
				if (3 != f.a)
					return (d = f.b), (c.I = d.uri), u(f, Mo(c, d.data), 3)
				e = c.wa
				0 < e && c.j.R(e)
				return f['return'](c.s)
			})
		}
		q.stop = function () {
			this.j && (this.j.stop(), (this.j = null))
			var a = []
			this.w && (a.push(this.w.destroy()), (this.w = null))
			this.i = this.v = null
			this.xa.clear()
			this.s = null
			this.a.clear()
			this.g.clear()
			this.f.clear()
			this.l.clear()
			return Promise.all(a)
		}
		q.update = function () {
			var a = this,
				b,
				c,
				d
			return J(function (e) {
				if (1 == e.a) {
					if (a.c == Ko) return e['return']()
					b = []
					a.J = null
					c = Array.from(a.a.values())
					return c.length ? u(e, No(a, c[0]), 2) : e.o(2)
				}
				for (d = 1; d < c.length; d++) b.push(No(a, c[d]))
				return u(e, Promise.all(b), 0)
			})
		}
		function No(a, b) {
			var c, d, e, f, g, h, k, l, m, n, p, t, v
			return J(function (w) {
				if (1 == w.a)
					return (
						(c = Oo),
						(d = b.ie),
						(e = new jb(d)),
						a.h && mb(e, new ob('_HLS_skip=YES')),
						u(
							w,
							Lo(a, dc([e.toString()], a.i.retryParameters), 0),
							2
						)
					)
				if (3 != w.a) {
					f = w.b
					g = Co(a.S, f.data, f.uri)
					if (1 != g.type) throw new L(2, 4, 4017)
					h = to(g.P, 'EXT-X-DEFINE')
					k = Po(a, h)
					l = b.stream
					return u(w, Qo(a, b.vc, g, l.mimeType, b.bd, k), 3)
				}
				m = w.b
				l.segmentIndex.sb(m)
				m.length &&
					((n = wo(g.P, 'EXT-X-MEDIA-SEQUENCE', 0)),
					(p = b.bd.get(n)),
					l.segmentIndex.Wa(p))
				t = m[m.length - 1]
				if ((v = vo(g.P, 'EXT-X-ENDLIST')))
					Ro(a, c.ge), a.b.Da(t.endTime)
				x(w)
			})
		}
		q.onExpirationUpdated = function () {}
		function Mo(a, b) {
			var c,
				d,
				e,
				f,
				g,
				h,
				k,
				l,
				m,
				n,
				p,
				t,
				v,
				w,
				y,
				A,
				B,
				E,
				D,
				F,
				I,
				G,
				H,
				P,
				V
			return J(function (S) {
				switch (S.a) {
					case 1:
						c = Co(a.S, b, a.I)
						if (0 != c.type) throw new L(2, 4, 4022)
						d = to(c.P, 'EXT-X-DEFINE')
						for (
							var ca = r(d), O = ca.next();
							!O.done;
							O = ca.next()
						) {
							var Q = O.value
							O = Z(Q, 'NAME')
							Q = Z(Q, 'VALUE')
							O && Q && (a.l.has(O) || a.l.set(O, Q))
						}
						e = to(c.P, 'EXT-X-MEDIA')
						f = to(c.P, 'EXT-X-STREAM-INF')
						ca = r(f)
						for (O = ca.next(); !O.done; O = ca.next()) {
							var ea = O.value
							Q = Z(ea, 'AUDIO')
							O = Z(ea, 'VIDEO')
							var ya = Z(ea, 'SUBTITLES')
							ea = So(a, ea)
							if (ya) {
								var oa = To('text', ea)
								a.f.set(ya, oa)
								Vb(ea, oa)
							}
							Q && ((ya = Uo('audio', ea)), a.f.set(Q, ya))
							O && ((Q = Uo('video', ea)), a.f.set(O, Q))
						}
						g = to(c.P, 'EXT-X-SESSION-DATA')
						h = r(g)
						for (k = h.next(); !k.done; k = h.next())
							if (
								((l = k.value),
								(m = Z(l, 'DATA-ID')),
								(n = Z(l, 'URI')),
								(p = Z(l, 'LANGUAGE')),
								(t = Z(l, 'VALUE')),
								(v = { id: m }),
								n && (v.uri = Mc([a.I], [n])[0]),
								p && (v.language = p),
								t && (v.value = t),
								(w = new N('sessiondata', v)),
								a.v)
							)
								a.v.onEvent(w)
						return u(S, Vo(a, e), 2)
					case 2:
						ca = uo(e, 'CLOSED-CAPTIONS')
						ca = r(ca)
						for (O = ca.next(); !O.done; O = ca.next())
							(ya = O.value),
								(O = Wo(ya)),
								(Q = qo(ya, 'GROUP-ID')),
								(ya = qo(ya, 'INSTREAM-ID')),
								a.D.get(Q) || a.D.set(Q, new Map()),
								a.D.get(Q).set(ya, O)
						return u(S, Xo(a, f), 3)
					case 3:
						return (y = S.b), u(S, Yo(a, e), 4)
					case 4:
						A = S.b
						if (!a.v) throw new L(2, 7, 7001)
						if (a.Na && 0 == y.length) throw new L(2, 4, 4034)
						E = B = Infinity
						D = r(a.a.values())
						for (F = D.next(); !F.done; F = D.next())
							(I = F.value),
								(B = Math.min(B, I.Od)),
								'text' != I.stream.type &&
									(E = Math.min(E, I.Pe - I.Od))
						a.c != Ko
							? ((a.b = new T(
									0,
									a.i.defaultPresentationDelay
										? a.i.defaultPresentationDelay
										: a.L
										? a.L
										: 3 * a.ha
							  )),
							  a.b.Ub(!1))
							: ((a.b = new T(null, 0)), a.b.Ub(!0))
						Zo(a)
						if (a.c != Ko)
							(a.wa = a.u),
								(G = Oo),
								a.c == G.fe &&
									((H = a.b.rc),
									isNaN(a.i.availabilityWindowOverride) ||
										(H = a.i.availabilityWindowOverride),
									a.b.vd(H))
						else
							for (
								a.b.Da(E),
									a.b.offset(-B),
									P = r(a.a.values()),
									F = P.next();
								!F.done;
								F = P.next()
							)
								(V = F.value),
									V.stream.segmentIndex.offset(-B),
									V.stream.segmentIndex.Pa(0, E)
						a.s = {
							presentationTimeline: a.b,
							variants: y,
							textStreams: A,
							offlineSessionIds: [],
							minBufferTime: 0,
						}
						a.v.makeTextStreamsForClosedCaptions(a.s)
						return u(S, a.v.filter(a.s), 0)
				}
			})
		}
		function Po(a, b) {
			for (
				var c = new Map(), d = r(b), e = d.next();
				!e.done;
				e = d.next()
			) {
				var f = e.value
				e = Z(f, 'NAME')
				var g = Z(f, 'VALUE')
				f = Z(f, 'IMPORT')
				e && g && c.set(e, g)
				f && (e = a.l.get(f)) && c.set(f, e)
			}
			return c
		}
		function Yo(a, b) {
			var c, d, e, f, g, h, k, l, m, n, p, t
			return J(function (v) {
				if (1 == v.a)
					return (
						(c = uo(b, 'SUBTITLES')),
						(d = c.map(function (w) {
							var y, A, B
							return J(function (E) {
								if (1 == E.a) {
									if ((y = a.i.disableText))
										return E['return'](null)
									z(E, 2)
									return u(E, $o(a, w), 4)
								}
								if (2 != E.a)
									return (A = E.b), E['return'](A.stream)
								B = C(E)
								if (a.i.hls.ignoreTextStreamFailures)
									return E['return'](null)
								throw B
							})
						})),
						u(v, Promise.all(d), 2)
					)
				e = v.b
				f = r(c)
				for (g = f.next(); !g.done; g = f.next())
					if (
						((h = g.value),
						(k = qo(h, 'GROUP-ID')),
						(l = a.f.get(k)))
					)
						if ((m = a.g.get(k)))
							for (n = r(m), p = n.next(); !p.done; p = n.next())
								(t = p.value), (t.stream.codecs = l)
				return v['return'](
					e.filter(function (w) {
						return w
					})
				)
			})
		}
		function Vo(a, b) {
			var c
			return J(function (d) {
				if (1 == d.a)
					return (
						(b = b.filter(function (e) {
							var f = Z(e, 'URI') || ''
							return 'SUBTITLES' != Z(e, 'TYPE') && '' != f
						})),
						b.length ? u(d, $o(a, b[0]), 2) : d.o(2)
					)
				c = b.slice(1).map(function (e) {
					return $o(a, e)
				})
				return u(d, Promise.all(c), 0)
			})
		}
		function Xo(a, b) {
			var c, d, e
			return J(function (f) {
				if (1 == f.a)
					return (
						(c = b.map(function (g) {
							var h, k, l, m, n, p, t
							return J(function (v) {
								return 1 == v.a
									? ((h = Z(g, 'FRAME-RATE')),
									  (k = Number(qo(g, 'BANDWIDTH'))),
									  (l = Z(g, 'RESOLUTION')),
									  (m = r(l ? l.split('x') : [null, null])),
									  (n = m.next().value),
									  (p = m.next().value),
									  u(v, ap(a, g, l, h), 2))
									: (t = v.b)
									? v['return'](
											bp(a, t.audio, t.video, k, n, p, h)
									  )
									: v['return']([])
							})
						})),
						u(f, Promise.all(c), 2)
					)
				d = f.b
				e = d.reduce(Ic, [])
				e = e.filter(function (g) {
					return null != g
				})
				return f['return'](e)
			})
		}
		function ap(a, b, c, d) {
			var e, f, g, h, k, l, m, n, p, t, v, w, y, A
			return J(function (B) {
				if (1 == B.a)
					return (
						(e = Oc),
						(f = So(a, b)),
						(g = Z(b, 'AUDIO')),
						(h = Z(b, 'VIDEO')),
						(l = (k = g || h) && a.g.has(k) ? a.g.get(k) : []),
						(m = { audio: g ? l : [], video: h ? l : [] }),
						(p = !1),
						(t = qo(b, 'URI')),
						(v = m.audio.find(function (E) {
							return E && E.vc == t
						})),
						(w = To(e.Ga, f)),
						(y = c || d || w),
						1 != f.length || y
							? !l.length && 1 < f.length
								? ((n = e.Ga), (f = [f.join(',')]))
								: m.audio.length && v
								? ((n = e.kb), (p = !0))
								: (n = m.video.length ? e.kb : e.Ga)
							: (n = e.kb),
						p ? B.o(2) : u(B, cp(a, b, f, n), 3)
					)
				2 != B.a && (A = B.b)
				if (A) m[A.stream.type] = [A]
				else if (null === A) return B['return'](null)
				dp(m)
				return B['return'](m)
			})
		}
		function So(a, b) {
			var c = []
			a.i.disableVideo || c.push('avc1.42E01E')
			a.i.disableAudio || c.push('mp4a.40.2')
			var d = Z(b, 'CODECS', c.join(',')).split(/\s*,\s*/)
			c = new Set()
			var e = []
			d = r(d)
			for (var f = d.next(); !f.done; f = d.next()) {
				f = f.value
				var g = Vc(f)[0]
				c.has(g) || (e.push(f), c.add(g))
			}
			return e
		}
		function Wo(a) {
			a = Z(a, 'LANGUAGE') || 'und'
			return Ag(a)
		}
		function dp(a) {
			a = r(a.audio.concat(a.video))
			for (var b = a.next(); !b.done; b = a.next())
				if ((b = b.value)) {
					var c = b.stream.codecs.split(',')
					c = c.filter(function (d) {
						return 'mp4a.40.34' != d
					})
					b.stream.codecs = c.join(',')
				}
		}
		function bp(a, b, c, d, e, f, g) {
			for (var h = r(c), k = h.next(); !k.done; k = h.next()) {
				k = k.value.stream
				var l = f,
					m = g
				k &&
					((k.width = Number(e) || void 0),
					(k.height = Number(l) || void 0),
					(k.frameRate = Number(m) || void 0))
			}
			e = a.i.disableAudio
			if (!b.length || e) b = [null]
			e = a.i.disableVideo
			if (!c.length || e) c = [null]
			e = []
			b = r(b)
			for (f = b.next(); !f.done; f = b.next())
				for (
					f = f.value, g = r(c), h = g.next();
					!h.done;
					h = g.next()
				) {
					var n = h.value
					h = f ? f.stream : null
					k = n ? n.stream : null
					l = f ? f.stream.drmInfos : null
					m = n ? n.stream.drmInfos : null
					n = (n ? n.vc : '') + ' - ' + (f ? f.vc : '')
					;(h &&
						k &&
						!(l.length && m.length ? 0 < Ud(l, m).length : 1)) ||
						a.xa.has(n) ||
						((h = {
							id: a.Ua++,
							language: h ? h.language : 'und',
							primary: (!!h && h.primary) || (!!k && k.primary),
							audio: h,
							video: k,
							bandwidth: d,
							allowedByApplication: !0,
							allowedByKeySystem: !0,
						}),
						e.push(h),
						a.xa.add(n))
				}
			return e
		}
		function $o(a, b) {
			var c, d, e, f, g, h, k, l, m, n, p
			return J(function (t) {
				if (1 == t.a) {
					c = qo(b, 'GROUP-ID')
					d = ''
					var v = qo(b, 'TYPE').toLowerCase()
					'subtitles' == v && (v = 'text')
					e = v
					'text' != e && c && a.f.has(c) && (d = a.f.get(c))
					f = ep(qo(b, 'URI'), a.l)
					if (a.a.has(f)) return t['return'](a.a.get(f))
					g = Wo(b)
					h = Z(b, 'NAME')
					k = b.getAttribute('DEFAULT')
					l = 'YES' == k
					'audio' == e
						? (v = (v = Z(b, 'CHANNELS'))
								? parseInt(v.split('/')[0], 10)
								: null)
						: (v = null)
					m = v
					n = Z(b, 'CHARACTERISTICS')
					return u(t, fp(a, f, d, e, g, l, h, m, null, n), 2)
				}
				p = t.b
				a.g.has(c) ? a.g.get(c).push(p) : a.g.set(c, [p])
				if (null == p) return t['return'](null)
				if (a.a.has(f)) return t['return'](a.a.get(f))
				a.a.set(f, p)
				return t['return'](p)
			})
		}
		function cp(a, b, c, d) {
			var e, f, g, h
			return J(function (k) {
				if (1 == k.a) {
					e = ep(qo(b, 'URI'), a.l)
					if (a.a.has(e)) return k['return'](a.a.get(e))
					var l = Z(b, 'CLOSED-CAPTIONS')
					f = 'video' == d && l && 'NONE' != l ? a.D.get(l) : null
					g = Uo(d, c)
					return u(
						k,
						fp(a, e, g, d, 'und', !1, null, null, f, null),
						2
					)
				}
				h = k.b
				if (null == h) return k['return'](null)
				if (a.a.has(e)) return k['return'](a.a.get(e))
				a.a.set(e, h)
				return k['return'](h)
			})
		}
		function fp(a, b, c, d, e, f, g, h, k, l) {
			var m,
				n,
				p,
				t,
				v,
				w,
				y,
				A,
				B,
				E,
				D,
				F,
				I,
				G,
				H,
				P,
				V,
				S,
				ca,
				O,
				Q,
				ea,
				ya,
				oa,
				Ia,
				oc,
				Za,
				Ad,
				Yl,
				Zl,
				$l,
				ih,
				am
			return J(function (Va) {
				switch (Va.a) {
					case 1:
						return (
							(m = Mc([a.I], [b])[0]),
							u(Va, Lo(a, dc([m], a.i.retryParameters), 0), 2)
						)
					case 2:
						n = Va.b
						m = n.uri
						p = Co(a.S, n.data, m)
						if (1 != p.type) throw new L(2, 4, 4017)
						t = []
						if (p.segments)
							for (
								v = r(p.segments), w = v.next();
								!w.done;
								w = v.next()
							)
								(y = w.value),
									(A = to(y.P, 'EXT-X-KEY')),
									t.push.apply(t, ja(A))
						B = !1
						E = []
						D = new Set()
						F = r(t)
						for (I = F.next(); !I.done; I = F.next())
							if (
								((G = I.value),
								(H = qo(G, 'METHOD')),
								'NONE' != H)
							) {
								B = !0
								if ('AES-128' == H)
									return (a.Na = !0), Va['return'](null)
								P = qo(G, 'KEYFORMAT')
								if ((S = (V = gp[P]) ? V(G) : null)) {
									if (S.keyIds)
										for (
											ca = r(S.keyIds), O = ca.next();
											!O.done;
											O = ca.next()
										)
											(Q = O.value), D.add(Q)
									E.push(S)
								}
							}
						if (B && !E.length) throw new L(2, 4, 4026)
						ea = to(p.P, 'EXT-X-DEFINE')
						ya = Po(a, ea)
						hp(a, p)
						return u(Va, ip(a, d, c, p, ya), 3)
					case 3:
						return (
							(oa = Va.b),
							jp.includes(oa) && (c = ''),
							(Ia = new Map()),
							z(Va, 4),
							u(Va, Qo(a, b, p, oa, Ia, ya), 6)
						)
					case 6:
						oc = Va.b
						wa(Va, 5)
						break
					case 4:
						Za = C(Va)
						if (4035 == Za.code)
							return (
								Ta('Skipping unsupported HLS stream', oa, b),
								Va['return'](null)
							)
						throw Za
					case 5:
						return (
							(Ad = oc[0].startTime),
							(Yl = oc[oc.length - 1].endTime),
							(Zl = new Qh(oc)),
							($l = 'text' == d ? 'subtitle' : void 0),
							(ih = []),
							l && ih.push(l),
							(am = {
								id: a.Ua++,
								originalId: g,
								createSegmentIndex: function () {
									return Promise.resolve()
								},
								segmentIndex: Zl,
								mimeType: oa,
								codecs: c,
								kind: $l,
								encrypted: B,
								drmInfos: E,
								keyIds: D,
								language: e,
								label: g,
								type: d,
								primary: f,
								trickModeVideo: null,
								emsgSchemeIdUris: null,
								frameRate: void 0,
								pixelAspectRatio: void 0,
								width: void 0,
								height: void 0,
								bandwidth: void 0,
								roles: ih,
								channelsCount: h,
								audioSamplingRate: null,
								closedCaptions: k,
							}),
							Va['return']({
								stream: am,
								vc: b,
								ie: m,
								Od: Ad,
								Pe: Yl,
								bd: Ia,
							})
						)
				}
			})
		}
		function hp(a, b) {
			var c = vo(b.P, 'EXT-X-PLAYLIST-TYPE'),
				d = vo(b.P, 'EXT-X-ENDLIST')
			d = (c && 'VOD' == c.value) || d
			c = c && 'EVENT' == c.value && !d
			c = !d && !c
			if (d) Ro(a, Ko)
			else {
				c ? Ro(a, kp) : Ro(a, lp)
				d = vo(b.P, 'EXT-X-TARGETDURATION')
				if (!d) throw new L(2, 4, 4024, 'EXT-X-TARGETDURATION')
				d = Number(d.value)
				c = vo(b.P, 'EXT-X-PART-INF')
				a.h && c
					? ((a.Oa = Number(qo(c, 'PART-TARGET'))),
					  (a.u = Math.min(a.Oa, a.u)))
					: (a.u = Math.min(d, a.u))
				a.ha = Math.max(d, a.ha)
				a.h &&
					((d = vo(b.P, 'EXT-X-SERVER-CONTROL')),
					(a.L = d ? Number(qo(d, 'PART-HOLD-BACK')) : 0))
			}
		}
		function mp(a, b, c, d) {
			c = vo(c, 'EXT-X-MAP')
			if (!c) return null
			var e = qo(c, 'URI')
			d = ep(Mc([b], [e])[0], d)
			b = [d, Z(c, 'BYTERANGE', '')].join('-')
			a.X.has(b) || ((c = np(d, c)), a.X.set(b, c))
			return a.X.get(b)
		}
		function np(a, b) {
			var c = 0,
				d = null,
				e = Z(b, 'BYTERANGE')
			e &&
				((c = e.split('@')),
				(d = Number(c[0])),
				(c = Number(c[1])),
				(d = c + d - 1))
			return new sh(
				function () {
					return [a]
				},
				c,
				d
			)
		}
		function op(a, b, c, d, e, f, g, h) {
			var k = d.P,
				l = ep(d.a, g),
				m = vo(k, 'EXTINF'),
				n = (g = 0),
				p = null,
				t = []
			if (a.h && d.b.length) {
				a = {}
				d = r(hb(d.b))
				for (
					var v = d.next();
					!v.done;
					a = { Cc: a.Cc }, v = d.next()
				) {
					v = v.value
					var w = v.aa
					v = v.item
					var y = 0 == w ? c : t[t.length - 1]
					w = 0 == w ? e : y.endTime
					var A = Number(Z(v, 'DURATION'))
					A = w + A
					var B = 0,
						E = null
					'EXT-X-PRELOAD-HINT' == v.name
						? (B = (y = Z(v, 'BYTERANGE-START')) ? Number(y) : 0)
						: ((B = Z(v, 'BYTERANGE')),
						  (y = r(pp(y, B))),
						  (B = y.next().value),
						  (E = y.next().value))
					v = Z(v, 'URI')
					a.Cc = Mc([h], [v])[0]
					t.push(
						new th(
							w,
							A,
							(function (D) {
								return function () {
									return [D.Cc]
								}
							})(a),
							B,
							E,
							b,
							f,
							0,
							Infinity
						)
					)
				}
			} else if (!m) throw new L(2, 4, 4024, 'EXTINF')
			m
				? (g = e + Number(m.value.split(',')[0]))
				: (g = t[t.length - 1].endTime)
			;(h = vo(k, 'EXT-X-BYTERANGE'))
				? ((c = r(pp(c, h.value))),
				  (n = c.next().value),
				  (p = c.next().value))
				: t.length && ((n = t[0].ca), (p = t[t.length - 1].Y))
			return new th(
				e,
				g,
				function () {
					return l.length ? [l] : []
				},
				n,
				p,
				b,
				f,
				0,
				Infinity,
				t
			)
		}
		function pp(a, b) {
			var c = 0,
				d = null
			b &&
				((c = b.split('@')),
				(d = Number(c[0])),
				(c = c[1] ? Number(c[1]) : a.Y + 1),
				(d = c + d - 1))
			return [c, d]
		}
		function Zo(a) {
			if (a.b) {
				for (var b = r(a.va), c = b.next(); !c.done; c = b.next())
					a.b.ub(c.value)
				a.va = []
			}
		}
		function Qo(a, b, c, d, e, f) {
			var g,
				h,
				k,
				l,
				m,
				n,
				p,
				t,
				v,
				w,
				y,
				A,
				B,
				E,
				D,
				F,
				I,
				G,
				H,
				P,
				V,
				S,
				ca,
				O
			return J(function (Q) {
				switch (Q.a) {
					case 1:
						g = c.segments
						k = wo(c.P, 'EXT-X-MEDIA-SEQUENCE', 0)
						m = (l = vo(c.P, 'EXT-X-SKIP'))
							? Number(Z(l, 'SKIPPED-SEGMENTS'))
							: 0
						n = k + m
						if (a.c != Ko && e.has(n)) {
							p = e.get(n)
							Q.o(2)
							break
						}
						if (null != a.J) {
							Q.o(3)
							break
						}
						h = mp(a, c.a, g[0].P, f)
						t = a
						return u(Q, qp(a, b, h, d, n, !1, g[0], f), 4)
					case 4:
						t.J = Q.b
					case 3:
						p = a.J
					case 2:
						;(v = g[0].a),
							Ya(v.split('/').pop()),
							(w = wo(c.P, 'EXT-X-DISCONTINUITY-SEQUENCE')),
							(y = a.B.get(w) || 0),
							(A = []),
							(B = function (ea) {
								return hb(ea)
							}),
							(E = r(B(g))),
							(D = E.next())
					case 5:
						if (D.done) {
							Q.o(7)
							break
						}
						I = F = D.value
						G = I.aa
						H = I.item
						P = A[A.length - 1]
						V = 0 == G ? p : P.endTime
						n = k + m + G
						e.set(n, V)
						h = mp(a, c.a, H.P, f)
						S = vo(H.P, 'EXT-X-DISCONTINUITY')
						if (!S) {
							Q.o(8)
							break
						}
						w++
						return u(Q, rp(a, w, b, h, d, n, H, f, V), 9)
					case 9:
						y = Q.b
					case 8:
						ca = vo(H.P, 'EXTINF')
						a.h || ca
							? ((O = op(a, h, P, H, V, y, f, c.a)), A.push(O))
							: a.h ||
							  Ta(
									'Low-latency HLS live stream detected, but low-latency streaming mode is not enabled in Shaka Player. Set streaming.lowLatencyMode configuration to true, and see https://bit.ly/3clctcj for details.'
							  )
						D = E.next()
						Q.o(5)
						break
					case 7:
						return a.va.push(A), Zo(a), Q['return'](A)
				}
			})
		}
		function rp(a, b, c, d, e, f, g, h, k) {
			var l, m
			return J(function (n) {
				if (1 == n.a)
					return (
						(l = 0),
						a.B.has(b)
							? ((l = a.B.get(b)), n.o(2))
							: u(n, qp(a, c, d, e, f, !0, g, h), 3)
					)
				2 != n.a && ((m = n.b), (l = k - m), a.B.set(b, l))
				return n['return'](l)
			})
		}
		function sp(a, b) {
			var c, d, e, f, g, h
			return J(function (k) {
				switch (k.a) {
					case 1:
						c = jc
						d = ei(b.a(), b.ca, b.Y, a.i.retryParameters)
						if (a.i.hls.useFullSegmentsForStartTime)
							return k['return'](Lo(a, d, c))
						e = ei(
							b.a(),
							b.ca,
							b.ca + 2048 - 1,
							a.i.retryParameters
						)
						z(k, 2)
						return u(k, Lo(a, e, c), 4)
					case 4:
						return (f = k.b), k['return'](f)
					case 2:
						g = C(k)
						if (7001 == g.code) throw g
						Ta(
							'Unable to fetch the starting part of HLS segment! Falling back to a full segment request, which is expensive!  Your server should support Range requests and CORS preflights.',
							e.uris[0]
						)
						return u(k, Lo(a, d, c), 5)
					case 5:
						return (h = k.b), k['return'](h)
				}
			})
		}
		function qp(a, b, c, d, e, f, g, h) {
			var k, l, m, n, p, t, v, w
			return J(function (y) {
				switch (y.a) {
					case 1:
						k = op(a, c, null, g, 0, 0, h, '')
						if (
							a.s &&
							!f &&
							((l = a.a.get(b)), (m = l.bd.get(e)), void 0 != m)
						)
							return y['return'](m)
						d = d.toLowerCase()
						if (jp.includes(d))
							throw (
								(Ta(
									'Raw formats are not yet supported.  Skipping ' +
										d
								),
								new L(1, 4, 4035))
							)
						if ('video/webm' == d)
							throw (
								(Ta(
									'WebM in HLS is not yet supported.  Skipping.'
								),
								new L(1, 4, 4035))
							)
						if ('video/mp4' != d && 'audio/mp4' != d) {
							y.o(2)
							break
						}
						n = [sp(a, k)]
						c && n.push(sp(a, c))
						return u(y, Promise.all(n), 3)
					case 3:
						return (
							(p = y.b),
							(t = p[0]),
							(v = p[1] || p[0]),
							y['return'](tp(b, t.uri, t.data, v.data))
						)
					case 2:
						if ('video/mp2t' != d) {
							y.o(4)
							break
						}
						return u(y, sp(a, k), 5)
					case 5:
						return (w = y.b), y['return'](up(b, w.uri, w.data))
					case 4:
						throw new L(2, 4, 4030, b)
				}
			})
		}
		function tp(a, b, c, d) {
			var e = 0
			new xf()
				.G('moov', Bf)
				.G('trak', Bf)
				.G('mdia', Bf)
				.U('mdhd', function (h) {
					e = Hf(h.reader, h.version).timescale
					h.parser.stop()
				})
				.parse(d, !0)
			if (!e) throw new L(2, 4, 4030, a, b)
			var f = 0,
				g = !1
			new xf()
				.G('moof', Bf)
				.G('traf', Bf)
				.U('tfdt', function (h) {
					f = Gf(h.reader, h.version).Qc / e
					g = !0
					h.parser.stop()
				})
				.parse(c, !0)
			if (!g) throw new L(2, 4, 4030, a, b)
			return f
		}
		function up(a, b, c) {
			function d() {
				f.seek(g + 188)
				h = f.V()
				71 != h && (f.seek(g + 192), (h = f.V()))
				71 != h && (f.seek(g + 204), (h = f.V()))
				71 != h && e()
				f.Vd(1)
			}
			function e() {
				throw new L(2, 4, 4030, a, b)
			}
			for (var f = new R(c, 0), g = 0, h = 0; ; )
				if (
					((g = f.Z()),
					(h = f.V()),
					71 != h && e(),
					(c = f.xb()),
					8191 == (c & 8191))
				)
					d()
				else if (c & 16384)
					if (
						((c = (f.V() & 48) >> 4),
						(0 != c && 2 != c) || e(),
						3 == c && ((c = f.V()), f.skip(c)),
						1 != f.H() >> 8)
					)
						d()
					else {
						f.skip(3)
						c = f.V() >> 6
						;(0 != c && 1 != c) || e()
						0 == f.V() && e()
						c = f.V()
						var k = f.xb(),
							l = f.xb()
						return (
							(1073741824 * ((c & 14) >> 1) +
								(((k & 65534) << 14) | ((l & 65534) >> 1))) /
							9e4
						)
					}
				else d()
		}
		function Uo(a, b) {
			if (1 == b.length) return b[0]
			var c = To(a, b)
			if (null != c) return c
			throw new L(2, 4, 4025, b)
		}
		function To(a, b) {
			for (var c = r(vp[a]), d = c.next(); !d.done; d = c.next()) {
				d = d.value
				for (var e = r(b), f = e.next(); !f.done; f = e.next())
					if (((f = f.value), d.test(f.trim()))) return f.trim()
			}
			return 'text' == a ? '' : null
		}
		function ep(a, b) {
			var c = String(a).replace(/%7B/g, '{').replace(/%7D/g, '}'),
				d = c.match(/{\$\w*}/g)
			if (d) {
				d = r(d)
				for (var e = d.next(); !e.done; e = d.next()) {
					e = e.value
					var f = e.slice(2, e.length - 1),
						g = b.get(f)
					if (g) c = c.replace(e, g)
					else throw new L(2, 4, 4039, f)
				}
			}
			return c
		}
		function ip(a, b, c, d, e) {
			var f, g, h, k, l, m, n, p, t, v
			return J(function (w) {
				if (1 == w.a) {
					f = Oc
					g = jc
					h = ep(d.segments[0].a, e)
					k = new jb(h)
					l = k.oa.split('.').pop()
					m = wp[b]
					if ((n = m[l])) return w['return'](n)
					if (b == f.da)
						return c && 'vtt' != c && 'wvtt' != c
							? w['return']('application/mp4')
							: w['return']('text/vtt')
					p = dc([h], a.i.retryParameters)
					p.method = 'HEAD'
					return u(w, Lo(a, p, g), 2)
				}
				t = w.b
				v = t.headers['content-type']
				if (!v) throw new L(2, 4, 4021, l)
				return w['return'](v.split(';')[0])
			})
		}
		q.Qb = function () {
			var a = this,
				b,
				c
			return J(function (d) {
				if (1 == d.a) {
					if (!a.v) return d['return']()
					z(d, 2)
					return u(d, a.update(), 4)
				}
				if (2 != d.a) return (b = a.wa), a.j.R(b), wa(d, 0)
				c = C(d)
				if (!a.v) return d['return']()
				c.severity = 1
				a.v.onError(c)
				a.j.R(0.1)
				x(d)
			})
		}
		function Ro(a, b) {
			a.c = b
			a.b && a.b.Ub(a.c == Ko)
			a.c != Ko || a.j.stop()
		}
		function Lo(a, b, c) {
			if (!a.w) throw new L(2, 7, 7001)
			b = a.v.networkingEngine.request(c, b)
			Zb(a.w, b)
			return b.promise
		}
		K('shaka.hls.HlsParser', Jo)
		var vp = {
				audio: [/^vorbis$/, /^opus$/, /^flac$/, /^mp4a/, /^[ae]c-3$/],
				video: [/^avc/, /^hev/, /^hvc/, /^vp0?[89]/, /^av1$/],
				text: [/^vtt$/, /^wvtt/, /^stpp/],
			},
			jp = ['audio/aac', 'audio/ac3', 'audio/ec3', 'audio/mpeg'],
			wp = {
				audio: {
					mp4: 'audio/mp4',
					m4s: 'audio/mp4',
					m4i: 'audio/mp4',
					m4a: 'audio/mp4',
					cmfa: 'audio/mp4',
					ts: 'video/mp2t',
					aac: 'audio/aac',
					ac3: 'audio/ac3',
					ec3: 'audio/ec3',
					mp3: 'audio/mpeg',
				},
				video: {
					mp4: 'video/mp4',
					m4s: 'video/mp4',
					m4i: 'video/mp4',
					m4v: 'video/mp4',
					cmfv: 'video/mp4',
					ts: 'video/mp2t',
				},
				text: {
					mp4: 'application/mp4',
					m4s: 'application/mp4',
					m4i: 'application/mp4',
					cmft: 'application/mp4',
					vtt: 'text/vtt',
					ttml: 'application/ttml+xml',
				},
			},
			gp = {
				'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed': function (a) {
					var b = qo(a, 'METHOD')
					if (!['SAMPLE-AES', 'SAMPLE-AES-CTR'].includes(b))
						return null
					b = qo(a, 'URI')
					b = Io(b)
					b = Lb(b.data)
					b = Nc('com.widevine.alpha', [
						{ initDataType: 'cenc', initData: b },
					])
					if ((a = Z(a, 'KEYID')))
						b.keyIds = new Set([a.toLowerCase().substr(2)])
					return b
				},
				'com.microsoft.playready': function (a) {
					var b = qo(a, 'METHOD')
					if (!['SAMPLE-AES', 'SAMPLE-AES-CTR'].includes(b))
						return null
					a = qo(a, 'URI')
					a = Io(a)
					a = Lb(a.data)
					a = lm(a)
					return Nc('com.microsoft.playready', [
						{ initDataType: 'cenc', initData: a },
					])
				},
			},
			Ko = 'VOD',
			lp = 'EVENT',
			kp = 'LIVE',
			Oo = { ge: Ko, yf: lp, fe: kp }
		qh.m3u8 = function () {
			return new Jo()
		}
		oh['application/x-mpegurl'] = function () {
			return new Jo()
		}
		oh['application/vnd.apple.mpegurl'] = function () {
			return new Jo()
		}
		function xp(a, b, c, d, e, f) {
			if (200 <= c && 299 >= c && 202 != c)
				return {
					uri: e || d,
					Sd: d,
					data: b,
					headers: a,
					fromCache: !!a['x-shaka-from-cache'],
				}
			e = null
			try {
				e = xc(b)
			} catch (g) {}
			throw new L(401 == c || 403 == c ? 2 : 1, 1, 1001, d, c, e, a, f)
		}
		function yp() {}
		function zp(a, b, c, d) {
			var e = new Ap()
			Pc(b.headers).forEach(function (k, l) {
				e.append(l, k)
			})
			var f = new Bp(),
				g = { Cd: !1, ce: !1 }
			a = Cp(
				a,
				c,
				{
					body: b.body || void 0,
					headers: e,
					method: b.method,
					signal: f.signal,
					credentials: b.allowCrossSiteCredentials
						? 'include'
						: void 0,
				},
				g,
				d,
				b.streamDataCallback
			)
			a = new Bb(a, function () {
				g.Cd = !0
				f.abort()
				return Promise.resolve()
			})
			if ((b = b.retryParameters.timeout)) {
				var h = new M(function () {
					g.ce = !0
					f.abort()
				})
				h.R(b / 1e3)
				a['finally'](function () {
					h.stop()
				})
			}
			return a
		}
		function Cp(a, b, c, d, e, f) {
			var g, h, k, l, m, n, p, t, v, w, y, A, B, E
			return J(function (D) {
				switch (D.a) {
					case 1:
						return (
							(g = Dp),
							(h = Ep),
							(n = m = 0),
							(p = Date.now()),
							z(D, 2),
							u(D, g(a, c), 4)
						)
					case 4:
						return (
							(k = D.b),
							(t = k.clone().body.getReader()),
							(w = (v = k.headers.get('Content-Length'))
								? parseInt(v, 10)
								: 0),
							(y = function (F) {
								function I() {
									var G, H
									return J(function (P) {
										switch (P.a) {
											case 1:
												return (
													z(P, 2), u(P, t.read(), 4)
												)
											case 4:
												G = P.b
												wa(P, 3)
												break
											case 2:
												return C(P), P['return']()
											case 3:
												G.done ||
													((m += G.value.byteLength),
													f && f(G.value))
												H = Date.now()
												if (100 < H - p || G.done)
													e(H - p, m - n, w - m),
														(n = m),
														(p = H)
												G.done
													? F.close()
													: (F.enqueue(G.value), I())
												x(P)
										}
									})
								}
								I()
							}),
							new h({ start: y }),
							u(D, k.arrayBuffer(), 5)
						)
					case 5:
						l = D.b
						wa(D, 3)
						break
					case 2:
						A = C(D)
						if (d.Cd) throw new L(1, 1, 7001, a, b)
						if (d.ce) throw new L(1, 1, 1003, a, b)
						throw new L(1, 1, 1002, a, A, b)
					case 3:
						return (
							(B = {}),
							(E = k.headers),
							E.forEach(function (F, I) {
								B[I.trim()] = F
							}),
							D['return'](xp(B, l, k.status, a, k.url, b))
						)
				}
			})
		}
		function Fp() {
			if (window.ReadableStream)
				try {
					new ReadableStream({})
				} catch (a) {
					return !1
				}
			else return !1
			return !(!window.fetch || !window.AbortController)
		}
		K('shaka.net.HttpFetchPlugin', yp)
		yp.isSupported = Fp
		yp.parse = zp
		var Dp = window.fetch,
			Bp = window.AbortController,
			Ep = window.ReadableStream,
			Ap = window.Headers
		Fp() && (ac('http', zp, 2), ac('https', zp, 2))
		function Gp() {}
		function Hp(a, b, c, d) {
			var e = new Ip(),
				f = Date.now(),
				g = 0,
				h = new Promise(function (k, l) {
					e.open(b.method, a, !0)
					e.responseType = 'arraybuffer'
					e.timeout = b.retryParameters.timeout
					e.withCredentials = b.allowCrossSiteCredentials
					e.onabort = function () {
						l(new L(1, 1, 7001, a, c))
					}
					e.onload = function (n) {
						n = n.target
						var p = n.getAllResponseHeaders().trim().split('\r\n'),
							t = {}
						p = r(p)
						for (var v = p.next(); !v.done; v = p.next())
							(v = v.value.split(': ')),
								(t[v[0].toLowerCase()] = v.slice(1).join(': '))
						try {
							var w = xp(
								t,
								n.response,
								n.status,
								a,
								n.responseURL,
								c
							)
							k(w)
						} catch (y) {
							l(y)
						}
					}
					e.onerror = function (n) {
						l(new L(1, 1, 1002, a, n, c))
					}
					e.ontimeout = function () {
						l(new L(1, 1, 1003, a, c))
					}
					e.onprogress = function (n) {
						var p = Date.now()
						if (
							100 < p - f ||
							(n.lengthComputable && n.loaded == n.total)
						)
							d(p - f, n.loaded - g, n.total - n.loaded),
								(g = n.loaded),
								(f = p)
					}
					for (var m in b.headers)
						e.setRequestHeader(m.toLowerCase(), b.headers[m])
					e.send(b.body)
				})
			return new Bb(h, function () {
				e.abort()
				return Promise.resolve()
			})
		}
		K('shaka.net.HttpXHRPlugin', Gp)
		Gp.parse = Hp
		var Ip = window.XMLHttpRequest
		ac('http', Hp, 1)
		ac('https', Hp, 1)
		function Jp() {
			this.a = this.f = this.b = 0
			this.c = new Map()
			this.g = 0
		}
		function Kp(a, b) {
			a.b += b
			var c = a.g
			a.g++
			a.c.set(c, b)
			return c
		}
		Jp.prototype.close = function (a, b) {
			if (this.c.has(a)) {
				var c = this.c.get(a)
				this.c['delete'](a)
				this.f += c
				this.a += b
			}
		}
		function Lp(a) {
			var b = this
			this.M = a
			this.a = new Map()
			this.C = new kc(function () {
				var c = Array.from(b.a.values())
				return Promise.all(
					c.map(function (d) {
						return d['catch'](function () {})
					})
				)
			})
			this.b = []
			this.Rd = function () {}
			this.Qd = function () {}
			this.Ib = new Jp()
		}
		Lp.prototype.destroy = function () {
			return this.C.destroy()
		}
		function Mp(a, b, c) {
			a.Rd = b
			a.Qd = c
		}
		function Np(a) {
			var b = a.b.map(function (c) {
				return c()
			})
			a.b = []
			return Promise.all(b)
		}
		function Op(a, b, c, d, e, f) {
			lc(a.C)
			var g = Kp(a.Ib, d)
			d = (a.a.get(b) || Promise.resolve()).then(function () {
				var h, k, l, m, n, p, t
				return J(function (v) {
					if (1 == v.a) return u(v, Pp(a, c), 2)
					h = v.b
					if (a.C.a) throw new L(2, 9, 7001)
					if (e)
						for (m in ((k = Lb(h)), (l = new km(k)), l.data))
							(n = Number(m)),
								(p = l.data[n]),
								(t = l.a[n]),
								a.Qd(p, t)
					a.Ib.close(g, h.byteLength)
					var w = a.Ib
					a.Rd(0 == w.b ? 0 : w.f / w.b, a.Ib.a)
					return v['return'](f(h))
				})
			})
			a.a.set(b, d)
			return d
		}
		function Qp(a, b, c) {
			lc(a.C)
			var d = (a.a.get(b) || Promise.resolve()).then(function () {
				return J(function (e) {
					return u(e, c(), 0)
				})
			})
			a.a.set(b, d)
		}
		function Rp(a) {
			return J(function (b) {
				return 1 == b.a
					? u(b, Promise.all(a.a.values()), 2)
					: b['return'](a.Ib.a)
			})
		}
		function Pp(a, b) {
			var c, d, e, f
			return J(function (g) {
				if (1 == g.a)
					return (
						(c = jc),
						(d = a.M.request(c, b)),
						(e = function () {
							return d.abort()
						}),
						a.b.push(e),
						u(g, d.promise, 2)
					)
				f = g.b
				Vb(a.b, e)
				return g['return'](f.data)
			})
		}
		function Sp(a, b) {
			var c = this
			this.c = a
			this.b = a.objectStore(b)
			this.a = new Ab()
			a.onabort = function (d) {
				d.preventDefault()
				c.a.reject()
			}
			a.onerror = function (d) {
				d.preventDefault()
				c.a.reject()
			}
			a.oncomplete = function () {
				c.a.resolve()
			}
		}
		Sp.prototype.abort = function () {
			var a = this
			return J(function (b) {
				if (1 == b.a) {
					try {
						a.c.abort()
					} catch (c) {}
					z(b, 2)
					return u(b, a.a, 4)
				}
				if (2 != b.a) return wa(b, 0)
				C(b)
				x(b)
			})
		}
		function Tp(a, b) {
			return new Promise(function (c, d) {
				var e = a.b.openCursor()
				e.onerror = d
				e.onsuccess = function () {
					var f
					return J(function (g) {
						if (1 == g.a) {
							if (null == e.result) return c(), g['return']()
							f = e.result
							return u(g, b(f.key, f.value, f), 2)
						}
						f['continue']()
						x(g)
					})
				}
			})
		}
		Sp.prototype.store = function () {
			return this.b
		}
		Sp.prototype.promise = function () {
			return this.a
		}
		function Up(a) {
			this.b = a
			this.a = []
		}
		Up.prototype.destroy = function () {
			return Promise.all(
				this.a.map(function (a) {
					return a.abort()
				})
			)
		}
		function Vp(a, b) {
			return Wp(a, b, 'readwrite')
		}
		function Wp(a, b, c) {
			c = a.b.transaction([b], c)
			var d = new Sp(c, b)
			a.a.push(d)
			d.promise().then(
				function () {
					Vb(a.a, d)
				},
				function () {
					Vb(a.a, d)
				}
			)
			return d
		}
		function Xp(a, b, c) {
			this.b = new Up(a)
			this.c = b
			this.a = c
		}
		q = Xp.prototype
		q.destroy = function () {
			return this.b.destroy()
		}
		q.hasFixedKeySpace = function () {
			return !0
		}
		q.addSegments = function () {
			return Yp(this.c)
		}
		q.removeSegments = function (a, b) {
			return Zp(this, this.c, a, b)
		}
		q.getSegments = function (a) {
			var b = this,
				c
			return J(function (d) {
				if (1 == d.a) return u(d, $p(b, b.c, a), 2)
				c = d.b
				return d['return'](
					c.map(function (e) {
						return b.Dd(e)
					})
				)
			})
		}
		q.addManifests = function () {
			return Yp(this.a)
		}
		q.updateManifestExpiration = function (a, b) {
			var c = Vp(this.b, this.a),
				d = c.store()
			d.get(a).onsuccess = function (e) {
				if ((e = e.target.result)) (e.expiration = b), d.put(e, a)
			}
			return c.promise()
		}
		q.removeManifests = function (a, b) {
			return Zp(this, this.a, a, b)
		}
		q.getManifests = function (a) {
			var b = this,
				c
			return J(function (d) {
				if (1 == d.a) return u(d, $p(b, b.a, a), 2)
				c = d.b
				return d['return'](
					Promise.all(
						c.map(function (e) {
							return b.Hb(e)
						})
					)
				)
			})
		}
		q.getAllManifests = function () {
			var a = this,
				b,
				c
			return J(function (d) {
				return 1 == d.a
					? ((b = Wp(a.b, a.a, 'readonly')),
					  (c = new Map()),
					  u(
							d,
							Tp(b, function (e, f) {
								var g
								return J(function (h) {
									if (1 == h.a) return u(h, a.Hb(f), 2)
									g = h.b
									c.set(e, g)
									x(h)
								})
							}),
							2
					  ))
					: 3 != d.a
					? u(d, b.promise(), 3)
					: d['return'](c)
			})
		}
		q.Dd = function (a) {
			return a
		}
		q.Hb = function (a) {
			return Promise.resolve(a)
		}
		function Yp(a) {
			return Promise.reject(
				new L(2, 9, 9011, 'Cannot add new value to ' + a)
			)
		}
		q.add = function (a, b) {
			var c = this,
				d,
				e,
				f,
				g,
				h,
				k,
				l
			return J(function (m) {
				if (1 == m.a) {
					d = Vp(c.b, a)
					e = d.store()
					f = []
					g = {}
					h = r(b)
					for (k = h.next(); !k.done; g = { $b: g.$b }, k = h.next())
						(l = k.value),
							(g.$b = e.add(l)),
							(g.$b.onsuccess = (function (n) {
								return function () {
									f.push(n.$b.result)
								}
							})(g))
					return u(m, d.promise(), 2)
				}
				return m['return'](f)
			})
		}
		function Zp(a, b, c, d) {
			a = Vp(a.b, b)
			b = a.store()
			var e = {}
			c = r(c)
			for (var f = c.next(); !f.done; e = { Zb: e.Zb }, f = c.next())
				(e.Zb = f.value),
					(b['delete'](e.Zb).onsuccess = (function (g) {
						return function () {
							return d(g.Zb)
						}
					})(e))
			return a.promise()
		}
		function $p(a, b, c) {
			var d, e, f, g, h, k, l
			return J(function (m) {
				if (1 == m.a) {
					d = Wp(a.b, b, 'readonly')
					e = d.store()
					f = {}
					g = []
					h = {}
					k = r(c)
					for (
						l = k.next();
						!l.done;
						h = { Eb: h.Eb, Cb: h.Cb }, l = k.next()
					)
						(h.Cb = l.value),
							(h.Eb = e.get(h.Cb)),
							(h.Eb.onsuccess = (function (n) {
								return function () {
									void 0 == n.Eb.result && g.push(n.Cb)
									f[n.Cb] = n.Eb.result
								}
							})(h))
					return u(m, d.promise(), 2)
				}
				if (g.length)
					throw new L(2, 9, 9012, 'Could not find values for ' + g)
				return m['return'](
					c.map(function (n) {
						return f[n]
					})
				)
			})
		}
		function aq(a) {
			this.a = new Up(a)
		}
		aq.prototype.destroy = function () {
			return this.a.destroy()
		}
		aq.prototype.getAll = function () {
			var a = this,
				b,
				c
			return J(function (d) {
				return 1 == d.a
					? ((b = Wp(a.a, 'session-ids', 'readonly')),
					  (c = []),
					  u(
							d,
							Tp(b, function (e, f) {
								c.push(f)
							}),
							2
					  ))
					: 3 != d.a
					? u(d, b.promise(), 3)
					: d['return'](c)
			})
		}
		aq.prototype.add = function (a) {
			var b = Vp(this.a, 'session-ids'),
				c = b.store()
			a = r(a)
			for (var d = a.next(); !d.done; d = a.next()) c.add(d.value)
			return b.promise()
		}
		aq.prototype.remove = function (a) {
			var b = this,
				c
			return J(function (d) {
				return 1 == d.a
					? ((c = Vp(b.a, 'session-ids')),
					  u(
							d,
							Tp(c, function (e, f, g) {
								a.includes(f.sessionId) && g['delete']()
							}),
							2
					  ))
					: u(d, c.promise(), 0)
			})
		}
		function bq() {
			this.a = new Map()
		}
		bq.prototype.destroy = function () {
			for (
				var a = [], b = r(this.a.values()), c = b.next();
				!c.done;
				c = b.next()
			)
				a.push(c.value.destroy())
			this.a.clear()
			return Promise.all(a)
		}
		bq.prototype.init = function () {
			var a = this
			cq.forEach(function (e, f) {
				var g = e()
				g && a.a.set(f, g)
			})
			for (
				var b = [], c = r(this.a.values()), d = c.next();
				!d.done;
				d = c.next()
			)
				b.push(d.value.init())
			return Promise.all(b)
		}
		function dq(a) {
			var b = null
			a.a.forEach(function (c, d) {
				c.getCells().forEach(function (e, f) {
					e.hasFixedKeySpace() ||
						b ||
						(b = { path: { Ba: d, fa: f }, fa: e })
				})
			})
			if (b) return b
			throw new L(
				2,
				9,
				9013,
				'Could not find a cell that supports add-operations'
			)
		}
		function eq(a, b) {
			a.a.forEach(function (c, d) {
				c.getCells().forEach(function (e, f) {
					b({ Ba: d, fa: f }, e)
				})
			})
		}
		function fq(a, b, c) {
			a = a.a.get(b)
			if (!a)
				throw new L(
					2,
					9,
					9013,
					'Could not find mechanism with name ' + b
				)
			b = a.getCells().get(c)
			if (!b)
				throw new L(2, 9, 9013, 'Could not find cell with name ' + c)
			return b
		}
		function gq(a, b) {
			a.a.forEach(function (c) {
				b(c.getEmeSessionCell())
			})
		}
		function hq(a) {
			var b = Array.from(a.a.keys())
			if (!b.length)
				throw new L(2, 9, 9e3, 'No supported storage mechanisms found')
			return a.a.get(b[0]).getEmeSessionCell()
		}
		function iq(a) {
			var b, c, d
			return J(function (e) {
				return 1 == e.a
					? ((b = Array.from(a.a.values())),
					  (c = 0 < b.length),
					  c ||
							((d = cq),
							d.forEach(function (f) {
								;(f = f()) && b.push(f)
							})),
					  u(
							e,
							Promise.all(
								b.map(function (f) {
									return f.erase()
								})
							),
							2
					  ))
					: c
					? e.o(0)
					: u(
							e,
							Promise.all(
								b.map(function (f) {
									return f.destroy()
								})
							),
							0
					  )
			})
		}
		function jq(a, b) {
			cq.set(a, b)
		}
		K('shaka.offline.StorageMuxer', bq)
		bq.unregister = function (a) {
			cq['delete'](a)
		}
		bq.register = jq
		bq.prototype.destroy = bq.prototype.destroy
		var cq = new Map()
		function kq() {
			Xp.apply(this, arguments)
		}
		ra(kq, Xp)
		kq.prototype.updateManifestExpiration = function (a, b) {
			var c = this,
				d,
				e,
				f
			return J(function (g) {
				d = Vp(c.b, c.a)
				e = d.store()
				f = new Ab()
				e.get(a).onsuccess = function (h) {
					;(h = h.target.result)
						? ((h.expiration = b), e.put(h), f.resolve())
						: f.reject(
								new L(
									2,
									9,
									9012,
									'Could not find values for ' + a
								)
						  )
				}
				return u(g, Promise.all([d.promise(), f]), 0)
			})
		}
		kq.prototype.Hb = function (a) {
			var b, c, d, e, f, g
			return J(function (h) {
				if (1 == h.a) {
					b = []
					for (c = 0; c < a.periods.length; ++c)
						(d =
							c == a.periods.length - 1
								? a.duration
								: a.periods[c + 1].startTime),
							(e = d - a.periods[c].startTime),
							(f = lq(a.periods[c], e)),
							b.push(f)
					return u(h, Gn(b), 2)
				}
				g = h.b
				return h['return']({
					creationTime: 0,
					originalManifestUri: a.originalManifestUri,
					duration: a.duration,
					size: a.size,
					expiration: null == a.expiration ? Infinity : a.expiration,
					streams: g,
					sessionIds: a.sessionIds,
					drmInfo: a.drmInfo,
					appMetadata: a.appMetadata,
				})
			})
		}
		function lq(a, b) {
			mq(a)
			for (var c = r(a.streams), d = c.next(); !d.done; d = c.next());
			return a.streams.map(function (e) {
				return nq(e, a.startTime, b)
			})
		}
		function nq(a, b, c) {
			var d = a.initSegmentUri ? oq(a.initSegmentUri) : null,
				e = b + a.presentationTimeOffset,
				f = b + c
			return {
				id: a.id,
				originalId: null,
				primary: a.primary,
				type: a.contentType,
				mimeType: a.mimeType,
				codecs: a.codecs,
				frameRate: a.frameRate,
				pixelAspectRatio: void 0,
				kind: a.kind,
				language: a.language,
				label: a.label,
				width: a.width,
				height: a.height,
				initSegmentKey: d,
				encrypted: a.encrypted,
				keyIds: new Set([a.keyId]),
				segments: a.segments.map(function (g) {
					var h = oq(g.uri)
					return {
						startTime: b + g.startTime,
						endTime: b + g.endTime,
						dataKey: h,
						initSegmentKey: d,
						appendWindowStart: b,
						appendWindowEnd: f,
						timestampOffset: e,
					}
				}),
				variantIds: a.variantIds,
				roles: [],
				audioSamplingRate: null,
				channelsCount: null,
				closedCaptions: null,
			}
		}
		kq.prototype.Dd = function (a) {
			return { data: a.data }
		}
		function oq(a) {
			var b
			if (
				(b = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a)) ||
				(b = /^offline:segment\/([0-9]+)$/.exec(a))
			)
				return Number(b[1])
			throw new L(2, 9, 9004, 'Could not parse uri ' + a)
		}
		function mq(a) {
			var b = a.streams.filter(function (h) {
				return 'audio' == h.contentType
			})
			a = a.streams.filter(function (h) {
				return 'video' == h.contentType
			})
			if (
				!b.every(function (h) {
					return h.variantIds
				}) ||
				!a.every(function (h) {
					return h.variantIds
				})
			) {
				for (var c = r(b), d = c.next(); !d.done; d = c.next())
					d.value.variantIds = []
				c = r(a)
				for (d = c.next(); !d.done; d = c.next())
					d.value.variantIds = []
				c = 0
				if (a.length && !b.length) {
					var e = c++,
						f = r(a)
					for (d = f.next(); !d.done; d = f.next())
						d.value.variantIds.push(e)
				}
				if (!a.length && b.length)
					for (e = c++, f = r(b), d = f.next(); !d.done; d = f.next())
						d.value.variantIds.push(e)
				if (a.length && b.length)
					for (b = r(b), d = b.next(); !d.done; d = b.next())
						for (
							d = d.value, e = r(a), f = e.next();
							!f.done;
							f = e.next()
						) {
							f = f.value
							var g = c++
							d.variantIds.push(g)
							f.variantIds.push(g)
						}
			}
		}
		function pq() {
			Xp.apply(this, arguments)
		}
		ra(pq, Xp)
		pq.prototype.Hb = function (a) {
			var b, c, d, e, f, g
			return J(function (h) {
				if (1 == h.a) {
					b = []
					for (c = 0; c < a.periods.length; ++c) {
						d =
							c == a.periods.length - 1
								? a.duration
								: a.periods[c + 1].startTime
						e = d - a.periods[c].startTime
						for (
							var k = a.periods[c],
								l = [],
								m = r(k.streams),
								n = m.next();
							!n.done;
							n = m.next()
						)
							(n = n.value),
								0 != n.variantIds.length &&
									l.push(qq(n, k.startTime, k.startTime + e))
						f = l
						b.push(f)
					}
					return u(h, Gn(b), 2)
				}
				g = h.b
				return h['return']({
					appMetadata: a.appMetadata,
					creationTime: 0,
					drmInfo: a.drmInfo,
					duration: a.duration,
					expiration: null == a.expiration ? Infinity : a.expiration,
					originalManifestUri: a.originalManifestUri,
					sessionIds: a.sessionIds,
					size: a.size,
					streams: g,
				})
			})
		}
		function qq(a, b, c) {
			return {
				id: a.id,
				originalId: a.originalId,
				primary: a.primary,
				type: a.contentType,
				mimeType: a.mimeType,
				codecs: a.codecs,
				frameRate: a.frameRate,
				pixelAspectRatio: a.pixelAspectRatio,
				kind: a.kind,
				language: a.language,
				label: a.label,
				width: a.width,
				height: a.height,
				encrypted: a.encrypted,
				keyIds: new Set([a.keyId]),
				segments: a.segments.map(function (d) {
					return {
						startTime: b + d.startTime,
						endTime: b + d.endTime,
						initSegmentKey: a.initSegmentKey,
						appendWindowStart: b,
						appendWindowEnd: c,
						timestampOffset: b - a.presentationTimeOffset,
						dataKey: d.dataKey,
					}
				}),
				variantIds: a.variantIds,
				roles: [],
				audioSamplingRate: null,
				channelsCount: null,
				closedCaptions: null,
			}
		}
		function rq() {
			Xp.apply(this, arguments)
		}
		ra(rq, Xp)
		rq.prototype.hasFixedKeySpace = function () {
			return !1
		}
		rq.prototype.addSegments = function (a) {
			return this.add(this.c, a)
		}
		rq.prototype.addManifests = function (a) {
			return this.add(this.a, a)
		}
		rq.prototype.Hb = function (a) {
			null == a.expiration && (a.expiration = Infinity)
			return Promise.resolve(a)
		}
		function sq() {
			this.h = this.f = this.c = this.b = this.a = this.g = null
		}
		q = sq.prototype
		q.init = function () {
			var a = this,
				b = new Ab(),
				c = window.indexedDB.open('shaka_offline_db', 5)
			c.onsuccess = function () {
				var d = c.result
				a.g = d
				var e = d.objectStoreNames
				e =
					e.contains('manifest') && e.contains('segment')
						? new kq(d, 'segment', 'manifest')
						: null
				a.a = e
				e = d.objectStoreNames
				e =
					e.contains('manifest-v2') && e.contains('segment-v2')
						? new pq(d, 'segment-v2', 'manifest-v2')
						: null
				a.b = e
				e = d.objectStoreNames
				e =
					e.contains('manifest-v3') && e.contains('segment-v3')
						? new pq(d, 'segment-v3', 'manifest-v3')
						: null
				a.c = e
				e = d.objectStoreNames
				e =
					e.contains('manifest-v5') && e.contains('segment-v5')
						? new rq(d, 'segment-v5', 'manifest-v5')
						: null
				a.f = e
				d = d.objectStoreNames.contains('session-ids')
					? new aq(d)
					: null
				a.h = d
				b.resolve()
			}
			c.onupgradeneeded = function () {
				for (
					var d = c.result,
						e = r(['segment-v5', 'manifest-v5', 'session-ids']),
						f = e.next();
					!f.done;
					f = e.next()
				)
					(f = f.value),
						d.objectStoreNames.contains(f) ||
							d.createObjectStore(f, { autoIncrement: !0 })
			}
			c.onerror = function (d) {
				b.reject(new L(2, 9, 9001, c.error))
				d.preventDefault()
			}
			return b
		}
		q.destroy = function () {
			var a = this
			return J(function (b) {
				switch (b.a) {
					case 1:
						if (!a.a) {
							b.o(2)
							break
						}
						return u(b, a.a.destroy(), 2)
					case 2:
						if (!a.b) {
							b.o(4)
							break
						}
						return u(b, a.b.destroy(), 4)
					case 4:
						if (!a.c) {
							b.o(6)
							break
						}
						return u(b, a.c.destroy(), 6)
					case 6:
						if (!a.f) {
							b.o(8)
							break
						}
						return u(b, a.f.destroy(), 8)
					case 8:
						if (!a.h) {
							b.o(10)
							break
						}
						return u(b, a.h.destroy(), 10)
					case 10:
						a.g && a.g.close(), x(b)
				}
			})
		}
		q.getCells = function () {
			var a = new Map()
			this.a && a.set('v1', this.a)
			this.b && a.set('v2', this.b)
			this.c && a.set('v3', this.c)
			this.f && a.set('v5', this.f)
			return a
		}
		q.getEmeSessionCell = function () {
			return this.h
		}
		q.erase = function () {
			var a = this
			return J(function (b) {
				switch (b.a) {
					case 1:
						if (!a.a) {
							b.o(2)
							break
						}
						return u(b, a.a.destroy(), 2)
					case 2:
						if (!a.b) {
							b.o(4)
							break
						}
						return u(b, a.b.destroy(), 4)
					case 4:
						if (!a.c) {
							b.o(6)
							break
						}
						return u(b, a.c.destroy(), 6)
					case 6:
						if (!a.f) {
							b.o(8)
							break
						}
						return u(b, a.f.destroy(), 8)
					case 8:
						return a.g && a.g.close(), u(b, tq(), 10)
					case 10:
						return (
							(a.g = null),
							(a.a = null),
							(a.b = null),
							(a.c = null),
							(a.f = null),
							u(b, a.init(), 0)
						)
				}
			})
		}
		function tq() {
			var a = new Ab(),
				b = window.indexedDB.deleteDatabase('shaka_offline_db')
			b.onblocked = function () {}
			b.onsuccess = function () {
				a.resolve()
			}
			b.onerror = function (c) {
				a.reject(new L(2, 9, 9001, b.error))
				c.preventDefault()
			}
			return a
		}
		jq('idb', function () {
			return ad('CrKey') || !window.indexedDB ? null : new sq()
		})
		function uq(a, b, c, d) {
			this.a = a
			this.g = b
			this.f = c
			this.c = d
			this.b = ['offline:', a, '/', b, '/', c, '/', d].join('')
		}
		uq.prototype.Ba = function () {
			return this.g
		}
		uq.prototype.fa = function () {
			return this.f
		}
		uq.prototype.key = function () {
			return this.c
		}
		uq.prototype.toString = function () {
			return this.b
		}
		function vq(a) {
			a = /^offline:([a-z]+)\/([^/]+)\/([^/]+)\/([0-9]+)$/.exec(a)
			if (null == a) return null
			var b = a[1]
			if ('manifest' != b && 'segment' != b) return null
			var c = a[2]
			if (!c) return null
			var d = a[3]
			return d && null != b ? new uq(b, c, d, Number(a[4])) : null
		}
		function wq(a, b) {
			this.b = a
			this.a = b
		}
		function xq(a, b) {
			var c = new T(null, 0)
			c.Da(b.duration)
			var d = b.streams.filter(function (k) {
					return 'audio' == k.type
				}),
				e = b.streams.filter(function (k) {
					return 'video' == k.type
				})
			d = yq(a, d, e, c)
			e = b.streams
				.filter(function (k) {
					return 'text' == k.type
				})
				.map(function (k) {
					return zq(a, k, c)
				})
			var f = b.drmInfo ? [b.drmInfo] : []
			if (b.drmInfo)
				for (var g = r(d.values()), h = g.next(); !h.done; h = g.next())
					(h = h.value),
						h.audio && h.audio.encrypted && (h.audio.drmInfos = f),
						h.video && h.video.encrypted && (h.video.drmInfos = f)
			return {
				presentationTimeline: c,
				minBufferTime: 2,
				offlineSessionIds: b.sessionIds,
				variants: Array.from(d.values()),
				textStreams: e,
			}
		}
		function yq(a, b, c, d) {
			for (
				var e = new Set(), f = r(b), g = f.next();
				!g.done;
				g = f.next()
			) {
				var h = r(g.value.variantIds)
				for (g = h.next(); !g.done; g = h.next()) e.add(g.value)
			}
			f = r(c)
			for (g = f.next(); !g.done; g = f.next())
				for (
					h = r(g.value.variantIds), g = h.next();
					!g.done;
					g = h.next()
				)
					e.add(g.value)
			f = new Map()
			e = r(e)
			for (g = e.next(); !g.done; g = e.next())
				(g = g.value),
					f.set(g, {
						id: g,
						language: '',
						primary: !1,
						audio: null,
						video: null,
						bandwidth: 0,
						allowedByApplication: !0,
						allowedByKeySystem: !0,
					})
			b = r(b)
			for (e = b.next(); !e.done; e = b.next())
				for (
					e = e.value,
						g = zq(a, e, d),
						h = r(e.variantIds),
						e = h.next();
					!e.done;
					e = h.next()
				)
					(e = f.get(e.value)),
						(e.language = g.language),
						(e.primary = e.primary || g.primary),
						(e.audio = g)
			c = r(c)
			for (b = c.next(); !b.done; b = c.next())
				for (
					e = b.value,
						b = zq(a, e, d),
						g = r(e.variantIds),
						e = g.next();
					!e.done;
					e = g.next()
				)
					(e = f.get(e.value)),
						(e.primary = e.primary || b.primary),
						(e.video = b)
			return f
		}
		function zq(a, b, c) {
			var d = b.segments.map(function (e) {
				return Aq(a, e)
			})
			c.ub(d)
			return {
				id: b.id,
				originalId: b.originalId,
				createSegmentIndex: function () {
					return Promise.resolve()
				},
				segmentIndex: new Qh(d),
				mimeType: b.mimeType,
				codecs: b.codecs,
				width: b.width || void 0,
				height: b.height || void 0,
				frameRate: b.frameRate,
				pixelAspectRatio: b.pixelAspectRatio,
				kind: b.kind,
				encrypted: b.encrypted,
				drmInfos: [],
				keyIds: b.keyIds,
				language: b.language,
				label: b.label,
				type: b.type,
				primary: b.primary,
				trickModeVideo: null,
				emsgSchemeIdUris: null,
				roles: b.roles,
				channelsCount: b.channelsCount,
				audioSamplingRate: b.audioSamplingRate,
				closedCaptions: b.closedCaptions,
			}
		}
		function Aq(a, b) {
			var c = new uq('segment', a.b, a.a, b.dataKey)
			return new th(
				b.startTime,
				b.endTime,
				function () {
					return [c.toString()]
				},
				0,
				null,
				null != b.initSegmentKey ? Bq(a, b.initSegmentKey) : null,
				b.timestampOffset,
				b.appendWindowStart,
				b.appendWindowEnd
			)
		}
		function Bq(a, b) {
			var c = new uq('segment', a.b, a.a, b)
			return new sh(
				function () {
					return [c.toString()]
				},
				0,
				null
			)
		}
		function Cq() {
			this.a = null
		}
		q = Cq.prototype
		q.configure = function () {}
		q.start = function (a, b) {
			var c = this,
				d,
				e,
				f,
				g,
				h,
				k,
				l
			return J(function (m) {
				switch (m.a) {
					case 1:
						d = vq(a)
						c.a = d
						if (null == d || 'manifest' != d.a)
							throw new L(2, 1, 9004, a)
						e = new bq()
						va(m)
						return u(m, e.init(), 4)
					case 4:
						return u(m, fq(e, d.Ba(), d.fa()), 5)
					case 5:
						return (f = m.b), u(m, f.getManifests([d.key()]), 6)
					case 6:
						return (
							(g = m.b),
							(h = g[0]),
							(k = new wq(d.Ba(), d.fa())),
							(l = xq(k, h)),
							b.makeTextStreamsForClosedCaptions(l),
							m['return'](l)
						)
					case 2:
						return xa(m), u(m, e.destroy(), 7)
					case 7:
						za(m, 0)
				}
			})
		}
		q.stop = function () {
			return Promise.resolve()
		}
		q.update = function () {}
		q.onExpirationUpdated = function (a, b) {
			var c = this,
				d,
				e,
				f,
				g,
				h,
				k,
				l
			return J(function (m) {
				switch (m.a) {
					case 1:
						return (
							(d = c.a),
							(e = new bq()),
							z(m, 2, 3),
							u(m, e.init(), 5)
						)
					case 5:
						return u(m, fq(e, d.Ba(), d.fa()), 6)
					case 6:
						return (f = m.b), u(m, f.getManifests([d.key()]), 7)
					case 7:
						g = m.b
						h = g[0]
						k = h.sessionIds.includes(a)
						l = void 0 == h.expiration || h.expiration > b
						if (!k || !l) {
							m.o(3)
							break
						}
						return u(m, f.updateManifestExpiration(d.key(), b), 3)
					case 3:
						return xa(m), u(m, e.destroy(), 10)
					case 10:
						za(m, 0)
						break
					case 2:
						C(m), m.o(3)
				}
			})
		}
		oh['application/x-offline-manifest'] = function () {
			return new Cq()
		}
		function Dq() {}
		function Eq(a) {
			var b = vq(a)
			b && 'manifest' == b.a
				? ((a = {
						uri: a,
						Sd: a,
						data: new ArrayBuffer(0),
						headers: {
							'content-type': 'application/x-offline-manifest',
						},
				  }),
				  (a = Eb(a)))
				: (a =
						b && 'segment' == b.a
							? Fq(b.key(), b)
							: Cb(new L(2, 1, 9004, a)))
			return a
		}
		function Fq(a, b) {
			var c = new bq()
			return Eb(void 0)
				.W(function () {
					return c.init()
				})
				.W(function () {
					return fq(c, b.Ba(), b.fa())
				})
				.W(function (d) {
					return d.getSegments([b.key()])
				})
				.W(function (d) {
					return { uri: b, data: d[0].data, headers: {} }
				})
				['finally'](function () {
					return c.destroy()
				})
		}
		K('shaka.offline.OfflineScheme', Dq)
		Dq.plugin = Eq
		ac('offline', Eq)
		function Gq(a, b, c) {
			var d, e, f, g, h, k
			return J(function (l) {
				switch (l.a) {
					case 1:
						d = []
						for (
							var m = [], n = r(c), p = n.next();
							!p.done;
							p = n.next()
						) {
							p = p.value
							for (
								var t = !1, v = r(m), w = v.next();
								!w.done;
								w = v.next()
							)
								if (((w = w.value), Hq(w.info, p))) {
									w.sessionIds.push(p.sessionId)
									t = !0
									break
								}
							t || m.push({ info: p, sessionIds: [p.sessionId] })
						}
						e = r(m)
						f = e.next()
					case 2:
						if (f.done) {
							l.o(4)
							break
						}
						g = f.value
						h = Iq(a, b, g)
						return u(l, h, 5)
					case 5:
						k = l.b
						d = d.concat(k)
						f = e.next()
						l.o(2)
						break
					case 4:
						return l['return'](d)
				}
			})
		}
		function Iq(a, b, c) {
			var d, e
			return J(function (f) {
				switch (f.a) {
					case 1:
						return (
							(d = new ld({
								tb: b,
								onError: function () {},
								oc: function () {},
								onExpirationUpdated: function () {},
								onEvent: function () {},
							})),
							z(f, 2),
							d.configure(a),
							u(
								f,
								td(
									d,
									c.info.keySystem,
									c.info.licenseUri,
									c.info.serverCertificate,
									c.info.audioCapabilities,
									c.info.videoCapabilities
								),
								4
							)
						)
					case 4:
						wa(f, 3)
						break
					case 2:
						return C(f), u(f, d.destroy(), 5)
					case 5:
						return f['return']([])
					case 3:
						return z(f, 6), u(f, Dd(d), 8)
					case 8:
						wa(f, 7)
						break
					case 6:
						return C(f), u(f, d.destroy(), 9)
					case 9:
						return f['return']([])
					case 7:
						return (
							(e = []),
							u(
								f,
								Promise.all(
									c.sessionIds.map(function (g) {
										return J(function (h) {
											if (1 == h.a)
												return (
													z(h, 2), u(h, Ed(d, g), 4)
												)
											if (2 != h.a)
												return e.push(g), wa(h, 0)
											C(h)
											x(h)
										})
									})
								),
								10
							)
						)
					case 10:
						return u(f, d.destroy(), 11)
					case 11:
						return f['return'](e)
				}
			})
		}
		function Hq(a, b) {
			function c(d, e) {
				return (
					d.robustness == e.robustness &&
					d.contentType == e.contentType
				)
			}
			return (
				a.keySystem == b.keySystem &&
				a.licenseUri == b.licenseUri &&
				Wb(a.audioCapabilities, b.audioCapabilities, c) &&
				Wb(a.videoCapabilities, b.videoCapabilities, c)
			)
		}
		function Jq(a, b, c) {
			var d = b.presentationTimeline.getDuration()
			b = Kq(b)
			return {
				offlineUri: null,
				originalManifestUri: a,
				duration: d,
				size: 0,
				expiration: Infinity,
				tracks: b,
				appMetadata: c,
			}
		}
		function Lq(a, b) {
			var c = xq(new wq(a.Ba(), a.fa()), b),
				d = b.appMetadata || {}
			c = Kq(c)
			return {
				offlineUri: a.toString(),
				originalManifestUri: b.originalManifestUri,
				duration: b.duration,
				size: b.size,
				expiration: b.expiration,
				tracks: c,
				appMetadata: d,
			}
		}
		function Kq(a) {
			var b = [],
				c = Tg(a.variants)
			c = r(c)
			for (var d = c.next(); !d.done; d = c.next()) b.push(Mg(d.value))
			a = r(a.textStreams)
			for (c = a.next(); !c.done; c = a.next()) b.push(Ng(c.value))
			return b
		}
		function Mq() {
			this.a = {}
		}
		function Nq(a, b, c) {
			c = c.endTime - c.startTime
			return Oq(a, b) * c
		}
		function Oq(a, b) {
			var c = a.a[b]
			null == c && (c = 0)
			return c
		}
		function Pq(a, b, c) {
			a.variants = a.variants.filter(function (d) {
				return Jg(d, b, c)
			})
		}
		function Qq(a) {
			a.variants = a.variants.filter(function (b) {
				var c = !0
				b.audio && (c = c && jg(b.audio))
				b.video && (c = c && jg(b.video))
				return c
			})
		}
		function Rq(a, b) {
			a.variants = a.variants.filter(function (c) {
				return Td(b, c)
			})
		}
		function Sq(a) {
			var b = this
			if (a && a.constructor != U) throw new L(2, 9, 9008)
			this.M = this.i = null
			a
				? ((this.i = a.i), (this.M = a.Kb()))
				: ((this.i = bj()), (this.M = new $b()))
			this.tc = []
			this.Rb = []
			this.jd = []
			this.a = new Map()
			this.a.set(null, Promise.resolve(null))
			this.b = new Map()
			var c = !a
			this.C = new kc(function () {
				var d, e, f, g, h
				return J(function (k) {
					switch (k.a) {
						case 1:
							return u(
								k,
								Promise.all(
									b.jd.map(function (l) {
										return Np(l)
									})
								),
								2
							)
						case 2:
							d = function () {}
							e = []
							f = r(b.Rb)
							for (g = f.next(); !g.done; g = f.next())
								(h = g.value), e.push(h.then(d, d))
							return u(k, Promise.all(e), 3)
						case 3:
							if (!c) {
								k.o(4)
								break
							}
							return u(k, b.M.destroy(), 4)
						case 4:
							;(b.i = null), (b.M = null), x(k)
					}
				})
			})
		}
		function Tq() {
			if (Wc())
				a: {
					var a = r(cq.values())
					for (var b = a.next(); !b.done; b = a.next())
						if (((b = b.value), (b = b()))) {
							b.destroy()
							a = !0
							break a
						}
					a = !1
				}
			else a = !1
			return a
		}
		q = Sq.prototype
		q.destroy = function () {
			return this.C.destroy()
		}
		q.configure = function (a, b) {
			2 == arguments.length && 'string' == typeof a && (a = $i(a, b))
			a.manifest &&
				a.manifest.dash &&
				'defaultPresentationDelay' in a.manifest.dash &&
				(Ec(
					'manifest.dash.defaultPresentationDelay configuration',
					'Please Use manifest.defaultPresentationDelay instead.'
				),
				(a.manifest.defaultPresentationDelay =
					a.manifest.dash.defaultPresentationDelay),
				delete a.manifest.dash.defaultPresentationDelay)
			return dj(this.i, a)
		}
		q.getConfiguration = function () {
			var a = bj()
			dj(a, this.i, bj())
			return a
		}
		q.Kb = function () {
			return this.M
		}
		q.store = function (a, b, c) {
			var d = this,
				e = this.getConfiguration(),
				f = new Lp(this.M)
			this.jd.push(f)
			b = Uq(
				this,
				a,
				b || {},
				function () {
					var h
					return J(function (k) {
						if (1 == k.a)
							return u(
								k,
								nh(
									a,
									d.M,
									e.manifest.retryParameters,
									c || null
								),
								2
							)
						h = k.b
						return k['return'](Lc(h))
					})
				},
				e,
				f
			)
			var g = new Bb(b, function () {
				return Np(f)
			})
			g['finally'](function () {
				Vb(d.jd, f)
			})
			g.then = function (h) {
				Ec(
					'shaka.offline.Storage.store.then',
					'Storage operations now return a shaka.util.AbortableOperation, rather than a promise.  Please update to conform to this new API; you can use the |chain| method instead.'
				)
				return g.promise.then(h)
			}
			return Vq(this, g)
		}
		q.Ie = function () {
			Ec(
				'shaka.offline.Storage.getStoreInProgress',
				'Multiple concurrent downloads are now supported.'
			)
			return !1
		}
		function Uq(a, b, c, d, e, f) {
			var g, h, k, l, m, n, p, t, v, w, y
			return J(function (A) {
				switch (A.a) {
					case 1:
						return (
							Wq(),
							(h = g = null),
							(k = new bq()),
							(m = l = null),
							z(A, 2, 3),
							u(A, d(), 5)
						)
					case 5:
						return (g = A.b), u(A, Xq(a, b, g, e), 6)
					case 6:
						n = A.b
						Yq(a)
						p =
							!n.presentationTimeline.T() &&
							!n.presentationTimeline.ab()
						if (!p) throw new L(2, 9, 9005, b)
						return u(
							A,
							Zq(
								a,
								n,
								function (B) {
									m = m || B
								},
								e
							),
							7
						)
					case 7:
						h = A.b
						Yq(a)
						if (m) throw m
						return u(A, a.mb(n, h, e), 8)
					case 8:
						return u(A, k.init(), 9)
					case 9:
						return Yq(a), u(A, dq(k), 10)
					case 10:
						return (
							(l = A.b),
							Yq(a),
							u(A, $q(a, l.fa, h, n, b, c, e, f), 11)
						)
					case 11:
						t = A.b
						Yq(a)
						if (m) throw m
						return u(A, l.fa.addManifests([t]), 12)
					case 12:
						return (
							(v = A.b),
							Yq(a),
							(w = new uq(
								'manifest',
								l.path.Ba,
								l.path.fa,
								v[0]
							)),
							A['return'](Lq(w, t))
						)
					case 3:
						return xa(A), (a.tc = []), u(A, k.destroy(), 13)
					case 13:
						if (!g) {
							A.o(14)
							break
						}
						return u(A, g.stop(), 14)
					case 14:
						if (!h) {
							A.o(16)
							break
						}
						return u(A, h.destroy(), 16)
					case 16:
						za(A, 0)
						break
					case 2:
						y = C(A)
						if (!l) {
							A.o(18)
							break
						}
						return u(
							A,
							l.fa.removeSegments(a.tc, function () {}),
							18
						)
					case 18:
						throw m || y
				}
			})
		}
		q.mb = function (a, b, c) {
			var d, e, f, g, h, k, l, m, n, p, t, v, w, y, A
			return J(function (B) {
				if (1 == B.a) {
					d = { width: Infinity, height: Infinity }
					Pq(a, c.restrictions, d)
					Qq(a)
					Rq(a, b)
					e = []
					f = c.preferredAudioChannelCount
					Hg(a, f)
					g = r(a.variants)
					for (h = g.next(); !h.done; h = g.next())
						(k = h.value), e.push(Mg(k))
					l = r(a.textStreams)
					for (m = l.next(); !m.done; m = l.next())
						(n = m.value), e.push(Ng(n))
					return u(B, c.offline.trackSelectionCallback(e), 2)
				}
				p = B.b
				t = new Set()
				v = new Set()
				w = r(p)
				for (y = w.next(); !y.done; y = w.next())
					(A = y.value),
						'variant' == A.type && t.add(A.id),
						'text' == A.type && v.add(A.id)
				a.variants = a.variants.filter(function (E) {
					return t.has(E.id)
				})
				a.textStreams = a.textStreams.filter(function (E) {
					return v.has(E.id)
				})
				ar(a)
				x(B)
			})
		}
		function $q(a, b, c, d, e, f, g, h) {
			var k, l, m, n, p, t, v, w, y, A, B, E
			return J(function (D) {
				switch (D.a) {
					case 1:
						return (
							(k = Jq(e, d, f)),
							(l = g.offline.progressCallback),
							(m = function (F, I) {
								k.size = I
								l(k, F)
							}),
							(n = function (F, I) {
								v &&
									g.offline.usePersistentLicense &&
									w == I &&
									Cd(c, 'cenc', F)
							}),
							Mp(h, m, n),
							(p = d.variants.some(function (F) {
								var I = F.audio && F.audio.encrypted
								return (F.video && F.video.encrypted) || I
							})),
							(t = d.variants.some(function (F) {
								return (F.video ? F.video.drmInfos : [])
									.concat(F.audio ? F.audio.drmInfos : [])
									.some(function (I) {
										return I.initData && I.initData.length
									})
							})),
							(v = p && !t),
							(w = null),
							v && ((y = c.c), (w = br.get(y.keySystem))),
							va(D),
							(B = A = cr(a, h, b, c, d, e, f, g)),
							u(D, Rp(h), 4)
						)
					case 4:
						B.size = D.b
						A.expiration = c.Jb()
						E = Id(c)
						A.sessionIds = g.offline.usePersistentLicense ? E : []
						if (p && g.offline.usePersistentLicense && !E.length)
							throw new L(2, 9, 9007)
						return D['return'](A)
					case 2:
						return xa(D), u(D, h.destroy(), 5)
					case 5:
						za(D, 0)
				}
			})
		}
		q.remove = function (a) {
			return dr(this, er(this, a))
		}
		function er(a, b) {
			var c, d, e, f, g, h
			return J(function (k) {
				switch (k.a) {
					case 1:
						Wq()
						c = vq(b)
						if (null == c || 'manifest' != c.a)
							throw new L(2, 9, 9004, b)
						d = c
						e = new bq()
						va(k)
						return u(k, e.init(), 4)
					case 4:
						return u(k, fq(e, d.Ba(), d.fa()), 5)
					case 5:
						return (f = k.b), u(k, f.getManifests([d.key()]), 6)
					case 6:
						return (
							(g = k.b),
							(h = g[0]),
							u(k, Promise.all([fr(a, h, e), gr(f, d, h)]), 2)
						)
					case 2:
						return xa(k), u(k, e.destroy(), 8)
					case 8:
						za(k, 0)
				}
			})
		}
		function hr(a, b) {
			for (
				var c = [], d = r(a.streams), e = d.next();
				!e.done;
				e = d.next()
			)
				(e = e.value),
					b && 'video' == e.type
						? c.push({
								contentType: Sc(e.mimeType, e.codecs),
								robustness: a.drmInfo.videoRobustness,
						  })
						: b ||
						  'audio' != e.type ||
						  c.push({
								contentType: Sc(e.mimeType, e.codecs),
								robustness: a.drmInfo.audioRobustness,
						  })
			return c
		}
		function fr(a, b, c) {
			return J(function (d) {
				return u(d, ir(a.M, a.i.drm, c, b), 0)
			})
		}
		function gr(a, b, c) {
			function d() {}
			var e = jr(c)
			Lq(b, c)
			return Promise.all([
				a.removeSegments(e, d),
				a.removeManifests([b.key()], d),
			])
		}
		q.$e = function () {
			return dr(this, kr(this))
		}
		function kr(a) {
			var b, c, d, e, f, g, h, k, l, m
			return J(function (n) {
				switch (n.a) {
					case 1:
						return (
							Wq(),
							(b = a.M),
							(c = a.i.drm),
							(d = new bq()),
							(e = !1),
							va(n),
							u(n, d.init(), 4)
						)
					case 4:
						;(f = []),
							gq(d, function (p) {
								return f.push(p)
							}),
							(g = r(f)),
							(h = g.next())
					case 5:
						if (h.done) {
							n.o(2)
							break
						}
						k = h.value
						return u(n, k.getAll(), 8)
					case 8:
						return (l = n.b), u(n, Gq(c, b, l), 9)
					case 9:
						return (m = n.b), u(n, k.remove(m), 10)
					case 10:
						m.length != l.length && (e = !0)
						h = g.next()
						n.o(5)
						break
					case 2:
						return xa(n), u(n, d.destroy(), 11)
					case 11:
						za(n, 3)
						break
					case 3:
						return n['return'](!e)
				}
			})
		}
		q.list = function () {
			return dr(this, lr())
		}
		function lr() {
			var a, b, c
			return J(function (d) {
				switch (d.a) {
					case 1:
						return (
							Wq(),
							(a = []),
							(b = new bq()),
							va(d),
							u(d, b.init(), 4)
						)
					case 4:
						return (
							(c = Promise.resolve()),
							eq(b, function (e, f) {
								c = c.then(function () {
									var g
									return J(function (h) {
										if (1 == h.a)
											return u(h, f.getAllManifests(), 2)
										g = h.b
										g.forEach(function (k, l) {
											var m = Lq(
												new uq(
													'manifest',
													e.Ba,
													e.fa,
													l
												),
												k
											)
											a.push(m)
										})
										x(h)
									})
								})
							}),
							u(d, c, 2)
						)
					case 2:
						return xa(d), u(d, b.destroy(), 6)
					case 6:
						za(d, 3)
						break
					case 3:
						return d['return'](a)
				}
			})
		}
		function Xq(a, b, c, d) {
			var e, f, g, h, k
			return J(function (l) {
				if (1 == l.a)
					return (
						(e = null),
						(f = a.M),
						(g = {
							networkingEngine: f,
							filter: function () {
								return Promise.resolve()
							},
							makeTextStreamsForClosedCaptions: function () {},
							onTimelineRegionAdded: function () {},
							onEvent: function () {},
							onError: function (m) {
								e = m
							},
							isLowLatencyMode: function () {
								return !1
							},
						}),
						c.configure(d.manifest),
						Yq(a),
						u(l, c.start(b, g), 2)
					)
				if (3 != l.a)
					return (
						(h = l.b),
						Yq(a),
						(k = mr(h)),
						u(
							l,
							Promise.all(
								cb(k, function (m) {
									return m.createSegmentIndex()
								})
							),
							3
						)
					)
				Yq(a)
				if (e) throw e
				return l['return'](h)
			})
		}
		function Zq(a, b, c, d) {
			var e
			return J(function (f) {
				switch (f.a) {
					case 1:
						return (
							(e = new ld({
								tb: a.M,
								onError: c,
								oc: function () {},
								onExpirationUpdated: function () {},
								onEvent: function () {},
							})),
							e.configure(d.drm),
							u(
								f,
								qd(
									e,
									b.variants,
									d.offline.usePersistentLicense
								),
								2
							)
						)
					case 2:
						return u(f, Dd(e), 3)
					case 3:
						return u(f, Bd(e), 4)
					case 4:
						return f['return'](e)
				}
			})
		}
		function cr(a, b, c, d, e, f, g, h) {
			for (
				var k = new Mq(), l = r(e.variants), m = l.next();
				!m.done;
				m = l.next()
			) {
				var n = k
				m = m.value
				var p = m.audio,
					t = m.video
				p && !t && (n.a[p.id] = p.bandwidth || m.bandwidth)
				!p && t && (n.a[t.id] = t.bandwidth || m.bandwidth)
				if (p && t) {
					var v = p.bandwidth || 393216,
						w = t.bandwidth || m.bandwidth - v
					0 >= w && (w = m.bandwidth)
					n.a[p.id] = v
					n.a[t.id] = w
				}
			}
			l = r(e.textStreams)
			for (n = l.next(); !n.done; n = l.next()) k.a[n.value.id] = 52
			n = mr(e)
			l = new Map()
			n = r(n)
			for (m = n.next(); !m.done; m = n.next())
				(m = m.value), (p = nr(a, b, c, k, e, m, h)), l.set(m.id, p)
			a = r(e.variants)
			for (m = a.next(); !m.done; m = a.next())
				(b = m.value),
					b.audio && l.get(b.audio.id).variantIds.push(b.id),
					b.video && l.get(b.video.id).variantIds.push(b.id)
			a = Array.from(l.values())
			h = h.offline.usePersistentLicense
			;(b = d.c) && h && (b.initData = [])
			return {
				creationTime: Date.now(),
				originalManifestUri: f,
				duration: e.presentationTimeline.getDuration(),
				size: 0,
				expiration: d.Jb(),
				streams: a,
				sessionIds: h ? Id(d) : [],
				drmInfo: b,
				appMetadata: g,
			}
		}
		function nr(a, b, c, d, e, f, g) {
			var h = {
					id: f.id,
					originalId: f.originalId,
					primary: f.primary,
					type: f.type,
					mimeType: f.mimeType,
					codecs: f.codecs,
					frameRate: f.frameRate,
					pixelAspectRatio: f.pixelAspectRatio,
					kind: f.kind,
					language: f.language,
					label: f.label,
					width: f.width || null,
					height: f.height || null,
					encrypted: f.encrypted,
					keyIds: f.keyIds,
					segments: [],
					variantIds: [],
					roles: f.roles,
					channelsCount: f.channelsCount,
					audioSamplingRate: f.audioSamplingRate,
					closedCaptions: f.closedCaptions,
				},
				k = f.id
			or(f, e.presentationTimeline.qb(), function (l) {
				var m = pr(a, b, k, f.id, c, d, l.c, g),
					n = qr(a, b, k, f.id, c, d, l, g)
				Qp(b, k, function () {
					var p, t
					return J(function (v) {
						if (1 == v.a) return u(v, m, 2)
						if (3 != v.a) return (p = v.b), u(v, n, 3)
						t = v.b
						h.segments.push({
							initSegmentKey: p,
							startTime: l.startTime,
							endTime: l.endTime,
							appendWindowStart: l.appendWindowStart,
							appendWindowEnd: l.appendWindowEnd,
							timestampOffset: l.timestampOffset,
							dataKey: t,
						})
						x(v)
					})
				})
			})
			return h
		}
		function pr(a, b, c, d, e, f, g, h) {
			if (a.a.has(g)) return a.a.get(g)
			h = ei(g.a(), g.ca, g.Y, h.streaming.retryParameters)
			b = Op(b, c, h, 0.5 * Oq(f, d), !0, function (k) {
				var l
				return J(function (m) {
					if (1 == m.a) return u(m, e.addSegments([{ data: k }]), 2)
					l = m.b
					a.tc.push(l[0])
					return m['return'](l[0])
				})
			})
			a.a.set(g, b)
			return b
		}
		function qr(a, b, c, d, e, f, g, h) {
			var k = [g.a()[0], g.ca, g.Y].join('-')
			if (a.b.has(k)) return a.b.get(k)
			h = ei(g.a(), g.ca, g.Y, h.streaming.retryParameters)
			b = Op(b, c, h, Nq(f, d, g), !1, function (l) {
				var m
				return J(function (n) {
					if (1 == n.a) return u(n, e.addSegments([{ data: l }]), 2)
					m = n.b
					a.tc.push(m[0])
					return n['return'](m[0])
				})
			})
			a.b.set(k, b)
			return b
		}
		function or(a, b, c) {
			b = a.segmentIndex.find(b)
			if (null != b)
				for (var d = a.segmentIndex.get(b); d; )
					c(d), (d = a.segmentIndex.get(++b))
		}
		function Yq(a) {
			if (a.C.a) throw new L(2, 9, 7001)
		}
		function Wq() {
			if (!Tq()) throw new L(2, 9, 9e3)
		}
		function dr(a, b) {
			return J(function (c) {
				if (1 == c.a) return a.Rb.push(b), va(c), u(c, b, 4)
				if (2 != c.a) return c['return'](c.b)
				xa(c)
				Vb(a.Rb, b)
				return za(c, 0)
			})
		}
		function Vq(a, b) {
			var c = b.promise
			a.Rb.push(c)
			return b['finally'](function () {
				Vb(a.Rb, c)
			})
		}
		function jr(a) {
			var b = []
			a = r(a.streams)
			for (var c = a.next(); !c.done; c = a.next()) {
				c = r(c.value.segments)
				for (var d = c.next(); !d.done; d = c.next())
					(d = d.value),
						null != d.initSegmentKey && b.push(d.initSegmentKey),
						b.push(d.dataKey)
			}
			return b
		}
		function ir(a, b, c, d) {
			var e, f, g
			return J(function (h) {
				if (1 == h.a) {
					if (!d.drmInfo) return h['return']()
					e = hq(c)
					f = d.sessionIds.map(function (k) {
						return {
							sessionId: k,
							keySystem: d.drmInfo.keySystem,
							licenseUri: d.drmInfo.licenseServerUri,
							serverCertificate: d.drmInfo.serverCertificate,
							audioCapabilities: hr(d, !1),
							videoCapabilities: hr(d, !0),
						}
					})
					return u(h, Gq(b, a, f), 2)
				}
				return 3 != h.a
					? ((g = h.b), u(h, e.remove(g), 3))
					: u(
							h,
							e.add(
								f.filter(function (k) {
									return !g.includes(k.sessionId)
								})
							),
							0
					  )
			})
		}
		function mr(a) {
			for (
				var b = new Set(), c = r(a.textStreams), d = c.next();
				!d.done;
				d = c.next()
			)
				b.add(d.value)
			a = r(a.variants)
			for (c = a.next(); !c.done; c = a.next())
				(c = c.value),
					c.audio && b.add(c.audio),
					c.video && b.add(c.video)
			return b
		}
		function ar(a) {
			a.variants.map(function (f) {
				return f.video
			})
			var b = new Set(
				a.variants.map(function (f) {
					return f.audio
				})
			)
			a = a.textStreams
			for (var c = r(b), d = c.next(); !d.done; d = c.next()) {
				d = r(b)
				for (var e = d.next(); !e.done; e = d.next());
			}
			b = r(a)
			for (c = b.next(); !c.done; c = b.next())
				for (c = r(a), d = c.next(); !d.done; d = c.next());
		}
		K('shaka.offline.Storage', Sq)
		Sq.deleteAll = function () {
			var a
			return J(function (b) {
				return 1 == b.a
					? ((a = new bq()), va(b), u(b, iq(a), 2))
					: 5 != b.a
					? (xa(b), u(b, a.destroy(), 5))
					: za(b, 0)
			})
		}
		Sq.prototype.list = Sq.prototype.list
		Sq.prototype.removeEmeSessions = Sq.prototype.$e
		Sq.prototype.remove = Sq.prototype.remove
		Sq.prototype.getStoreInProgress = Sq.prototype.Ie
		Sq.prototype.store = Sq.prototype.store
		Sq.prototype.getNetworkingEngine = Sq.prototype.Kb
		Sq.prototype.getConfiguration = Sq.prototype.getConfiguration
		Sq.prototype.configure = Sq.prototype.configure
		Sq.prototype.destroy = Sq.prototype.destroy
		Sq.support = Tq
		var br = new Map()
			.set('org.w3.clearkey', '1077efecc0b24d02ace33c1e52e2fb4b')
			.set('com.widevine.alpha', 'edef8ba979d64acea3c827dcd51d21ed')
			.set('com.microsoft.playready', '9a04f07998404286ab92e65be0885f95')
			.set('com.adobe.primetime', 'f239e769efa348509c16a903c6932efb')
		Qk.offline = Tq
		function rr() {}
		function sr(a, b) {
			for (
				var c = { priority: b || 0, je: a },
					d = r(hb(tr)),
					e = d.next();
				!e.done;
				e = d.next()
			) {
				e = e.value
				var f = e.aa
				if (e.item.priority < c.priority) {
					tr.splice(f, 0, c)
					return
				}
			}
			tr.push(c)
		}
		K('shaka.polyfill', rr)
		rr.register = sr
		rr.installAll = function () {
			for (var a = r(tr), b = a.next(); !b.done; b = a.next()) {
				b = b.value
				try {
					b.je()
				} catch (c) {
					Ta('Error installing polyfill!', c)
				}
			}
		}
		var tr = []
		sr(function () {
			ur()
		}, -1)
		function vr(a) {
			var b = a.type.replace(/^(webkit|moz|MS)/, '').toLowerCase()
			if ('function' === typeof Event) var c = new Event(b, a)
			else
				(c = document.createEvent('Event')),
					c.initEvent(b, a.bubbles, a.cancelable)
			a.target.dispatchEvent(c)
		}
		sr(function () {
			if (window.Document) {
				var a = Element.prototype
				a.requestFullscreen =
					a.requestFullscreen ||
					a.mozRequestFullScreen ||
					a.msRequestFullscreen ||
					a.webkitRequestFullscreen
				a = Document.prototype
				a.exitFullscreen =
					a.exitFullscreen ||
					a.mozCancelFullScreen ||
					a.msExitFullscreen ||
					a.webkitCancelFullScreen
				'fullscreenElement' in document ||
					(Object.defineProperty(document, 'fullscreenElement', {
						get: function () {
							return (
								document.mozFullScreenElement ||
								document.msFullscreenElement ||
								document.webkitCurrentFullScreenElement ||
								document.webkitFullscreenElement
							)
						},
					}),
					Object.defineProperty(document, 'fullscreenEnabled', {
						get: function () {
							return (
								document.mozFullScreenEnabled ||
								document.msFullscreenEnabled ||
								document.webkitFullscreenEnabled
							)
						},
					}))
				document.addEventListener('webkitfullscreenchange', vr)
				document.addEventListener('webkitfullscreenerror', vr)
				document.addEventListener('mozfullscreenchange', vr)
				document.addEventListener('mozfullscreenerror', vr)
				document.addEventListener('MSFullscreenChange', vr)
				document.addEventListener('MSFullscreenError', vr)
			}
		})
		function wr(a, b, c) {
			if ('input' == a)
				switch (this.type) {
					case 'range':
						a = 'change'
				}
			HTMLInputElement.prototype.originalAddEventListener.call(
				this,
				a,
				b,
				c
			)
		}
		sr(function () {
			ad('Trident/') &&
				!HTMLInputElement.prototype.originalAddEventListener &&
				((HTMLInputElement.prototype.originalAddEventListener =
					HTMLInputElement.prototype.addEventListener),
				(HTMLInputElement.prototype.addEventListener = wr))
		})
		sr(function () {
			navigator.languages ||
				Object.defineProperty(navigator, 'languages', {
					get: function () {
						return navigator.language
							? [navigator.language]
							: ['en']
					},
				})
		})
		sr(function () {})
		function xr() {
			var a = MediaSource.prototype.addSourceBuffer
			MediaSource.prototype.addSourceBuffer = function (b) {
				for (var c = [], d = 0; d < arguments.length; ++d)
					c[d] = arguments[d]
				c = a.apply(this, c)
				c.abort = function () {}
				return c
			}
		}
		function yr() {
			var a = SourceBuffer.prototype.remove
			SourceBuffer.prototype.remove = function (b, c) {
				return a.call(this, b, c - 0.001)
			}
		}
		function zr() {
			var a = MediaSource.isTypeSupported
			MediaSource.isTypeSupported = function (b) {
				return 'mp2t' == b.split(/ *; */)[0].split('/')[1].toLowerCase()
					? !1
					: a(b)
			}
		}
		function Ar() {
			var a = MediaSource.isTypeSupported
			MediaSource.isTypeSupported = function (b) {
				return 'opus' != Vc(b)[0] && a(b)
			}
		}
		function Br() {
			var a = MediaSource.isTypeSupported
			MediaSource.isTypeSupported = function (b) {
				var c = b.split(/ *; */)
				c.shift()
				return c.some(function (d) {
					return d.startsWith('codecs=')
				})
					? cast.__platform__.canDisplayType(b)
					: a(b)
			}
		}
		function Cr() {
			var a = MediaSource.isTypeSupported
			MediaSource.isTypeSupported = function (b) {
				var c = b.split(/ *; */),
					d = c.findIndex(function (g) {
						return g.startsWith('codecs=')
					})
				if (0 > d) return a(b)
				var e = c[d]
						.replace('codecs=', '')
						.replace(/"/g, '')
						.split(/\s*,\s*/),
					f = e.findIndex(function (g) {
						return g.startsWith('vp09')
					})
				0 <= f &&
					((e[f] = 'vp9'),
					(c[d] = 'codecs="' + e.join(',') + '"'),
					(b = c.join('; ')))
				return a(b)
			}
		}
		sr(function () {
			var a = bd()
			window.MediaSource &&
				(window.cast &&
				cast.__platform__ &&
				cast.__platform__.canDisplayType
					? Br()
					: a
					? (zr(), 12 >= a ? (xr(), yr()) : xr())
					: (ad('Tizen 2') || ad('Tizen 3') || ad('Tizen 4')) && Ar())
			window.MediaSource &&
				MediaSource.isTypeSupported('video/webm; codecs="vp9"') &&
				!MediaSource.isTypeSupported(
					'video/webm; codecs="vp09.00.10.08"'
				) &&
				Cr()
		})
		function Dr() {
			function a() {
				switch (window.orientation) {
					case -90:
						b.type = 'landscape-secondary'
						b.angle = 270
						break
					case 0:
						b.type = 'portrait-primary'
						b.angle = 0
						break
					case 90:
						b.type = 'landscape-primary'
						b.angle = 90
						break
					case 180:
						;(b.type = 'portrait-secondary'), (b.angle = 180)
				}
			}
			var b = new Er()
			screen.orientation = b
			a()
			window.addEventListener('orientationchange', function () {
				a()
				var c = new N('change', {})
				b.dispatchEvent(c)
			})
		}
		function Er() {
			Rb.call(this)
			this.type = ''
			this.angle = 0
		}
		ra(Er, Rb)
		Er.prototype.lock = function (a) {
			function b(d) {
				return screen.lockOrientation
					? screen.lockOrientation(d)
					: screen.mozLockOrientation
					? screen.mozLockOrientation(d)
					: screen.msLockOrientation
					? screen.msLockOrientation(d)
					: !1
			}
			var c = !1
			switch (a) {
				case 'natural':
					c = b('default')
					break
				case 'any':
					c = !0
					this.unlock()
					break
				default:
					c = b(a)
			}
			if (c) return Promise.resolve()
			a = Error(
				'screen.orientation.lock() is not available on this device'
			)
			a.name = 'NotSupportedError'
			a.code = DOMException.NOT_SUPPORTED_ERR
			return Promise.reject(a)
		}
		Er.prototype.unlock = function () {
			screen.unlockOrientation
				? screen.unlockOrientation()
				: screen.mozUnlockOrientation
				? screen.mozUnlockOrientation()
				: screen.msUnlockOrientation && screen.msUnlockOrientation()
		}
		sr(function () {
			screen.orientation || (void 0 != window.orientation && Dr())
		})
		function Fr(a, b) {
			try {
				var c = new Gr(a, b)
				return Promise.resolve(c)
			} catch (d) {
				return Promise.reject(d)
			}
		}
		function Hr(a) {
			var b = this.mediaKeys
			b && b != a && Ir(b, null)
			delete this.mediaKeys
			return (this.mediaKeys = a) ? Ir(a, this) : Promise.resolve()
		}
		function Jr(a) {
			a = Lb(a.initData)
			if (Ob(a).getUint32(0, !0) + 4 != a.byteLength)
				throw new RangeError('Malformed FairPlay init data')
			a = vc(a.subarray(4), !0)
			a = yc(a)
			var b = new Event('encrypted')
			b.initDataType = 'skd'
			b.initData = Mb(a)
			this.dispatchEvent(b)
		}
		function Gr(a, b) {
			this.keySystem = a
			if (a.startsWith('com.apple.fps'))
				for (var c = r(b), d = c.next(); !d.done; d = c.next()) {
					var e = d.value
					if ('required' == e.persistentState) d = null
					else {
						d = {
							audioCapabilities: [],
							videoCapabilities: [],
							persistentState: 'optional',
							distinctiveIdentifier: 'optional',
							initDataTypes: e.initDataTypes,
							sessionTypes: ['temporary'],
							label: e.label,
						}
						var f = !1,
							g = !1
						if (e.audioCapabilities)
							for (
								var h = r(e.audioCapabilities), k = h.next();
								!k.done;
								k = h.next()
							)
								(k = k.value),
									k.contentType &&
										((f = !0),
										WebKitMediaKeys.isTypeSupported(
											this.keySystem,
											k.contentType.split(';')[0]
										) &&
											(d.audioCapabilities.push(k),
											(g = !0)))
						if (e.videoCapabilities)
							for (
								e = r(e.videoCapabilities), k = e.next();
								!k.done;
								k = e.next()
							)
								(h = k.value),
									h.contentType &&
										((f = !0),
										WebKitMediaKeys.isTypeSupported(
											this.keySystem,
											h.contentType.split(';')[0]
										) &&
											(d.videoCapabilities.push(h),
											(g = !0)))
						f ||
							(g = WebKitMediaKeys.isTypeSupported(
								this.keySystem,
								'video/mp4'
							))
						d = g ? d : null
					}
					if (d) {
						this.a = d
						return
					}
				}
			c = Error('Unsupported keySystem')
			c.name = 'NotSupportedError'
			c.code = DOMException.NOT_SUPPORTED_ERR
			throw c
		}
		Gr.prototype.createMediaKeys = function () {
			var a = new Kr(this.keySystem)
			return Promise.resolve(a)
		}
		Gr.prototype.getConfiguration = function () {
			return this.a
		}
		function Kr(a) {
			this.a = new WebKitMediaKeys(a)
			this.b = new mc()
		}
		Kr.prototype.createSession = function (a) {
			a = a || 'temporary'
			if ('temporary' != a)
				throw new TypeError(
					'Session type ' + a + ' is unsupported on this platform.'
				)
			return new Lr(this.a, a)
		}
		Kr.prototype.setServerCertificate = function () {
			return Promise.resolve(!1)
		}
		function Ir(a, b) {
			a.b.cb()
			if (!b) return Promise.resolve()
			a.b.m(b, 'webkitneedkey', Jr)
			try {
				return (
					Ah(b, HTMLMediaElement.HAVE_METADATA, a.b, function () {
						b.webkitSetMediaKeys(a.a)
					}),
					Promise.resolve()
				)
			} catch (c) {
				return Promise.reject(c)
			}
		}
		function Lr(a) {
			Rb.call(this)
			this.f = null
			this.g = a
			this.c = this.a = null
			this.b = new mc()
			this.sessionId = ''
			this.expiration = NaN
			this.closed = new Ab()
			this.keyStatuses = new Mr()
		}
		ra(Lr, Rb)
		q = Lr.prototype
		q.generateRequest = function (a, b) {
			var c = this
			this.a = new Ab()
			try {
				var d = this.g.createSession('video/mp4', Lb(b))
				this.f = d
				this.sessionId = d.sessionId || ''
				this.b.m(this.f, 'webkitkeymessage', function (e) {
					c.a && (c.a.resolve(), (c.a = null))
					e = new N('message', {
						messageType:
							void 0 == c.keyStatuses.a
								? 'license-request'
								: 'license-renewal',
						message: Mb(e.message),
					})
					c.dispatchEvent(e)
				})
				this.b.m(d, 'webkitkeyadded', function () {
					c.c && (Nr(c, 'usable'), c.c.resolve(), (c.c = null))
				})
				this.b.m(d, 'webkitkeyerror', function () {
					var e = Error('EME PatchedMediaKeysApple key error')
					e.errorCode = c.f.error
					if (null != c.a) c.a.reject(e), (c.a = null)
					else if (null != c.c) c.c.reject(e), (c.c = null)
					else
						switch (c.f.error.code) {
							case WebKitMediaKeyError.MEDIA_KEYERR_OUTPUT:
							case WebKitMediaKeyError.MEDIA_KEYERR_HARDWARECHANGE:
								Nr(c, 'output-not-allowed')
								break
							default:
								Nr(c, 'internal-error')
						}
				})
				Nr(this, 'status-pending')
			} catch (e) {
				this.a.reject(e)
			}
			return this.a
		}
		q.load = function () {
			return Promise.reject(
				Error('MediaKeySession.load not yet supported')
			)
		}
		q.update = function (a) {
			this.c = new Ab()
			try {
				this.f.update(Lb(a))
			} catch (b) {
				this.c.reject(b)
			}
			return this.c
		}
		q.close = function () {
			try {
				this.f.close(), this.closed.resolve(), this.b.cb()
			} catch (a) {
				this.closed.reject(a)
			}
			return this.closed
		}
		q.remove = function () {
			return Promise.reject(
				Error(
					'MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform'
				)
			)
		}
		function Nr(a, b) {
			var c = a.keyStatuses
			c.size = void 0 == b ? 0 : 1
			c.a = b
			c = new N('keystatuseschange')
			a.dispatchEvent(c)
		}
		function Mr() {
			this.size = 0
			this.a = void 0
		}
		q = Mr.prototype
		q.forEach = function (a) {
			this.a && a(this.a, Wd.value())
		}
		q.get = function (a) {
			if (this.has(a)) return this.a
		}
		q.has = function (a) {
			var b = Wd.value()
			return this.a && Jb(a, b) ? !0 : !1
		}
		q.entries = function () {}
		q.keys = function () {}
		q.values = function () {}
		sr(function () {
			window.HTMLVideoElement &&
				window.WebKitMediaKeys &&
				(delete HTMLMediaElement.prototype.mediaKeys,
				(HTMLMediaElement.prototype.mediaKeys = null),
				(HTMLMediaElement.prototype.setMediaKeys = Hr),
				(window.MediaKeys = Kr),
				(window.MediaKeySystemAccess = Gr),
				(navigator.requestMediaKeySystemAccess = Fr))
		})
		function Or(a, b) {
			try {
				var c = new Pr(a, b)
				return Promise.resolve(c)
			} catch (d) {
				return Promise.reject(d)
			}
		}
		function Qr(a) {
			if (a.initData) {
				var b = document.createEvent('CustomEvent')
				b.initCustomEvent('encrypted', !1, !1, null)
				b.initDataType = 'cenc'
				b.initData = Mb(mm(a.initData))
				this.dispatchEvent(b)
			}
		}
		function Pr(a, b) {
			this.keySystem = a
			for (var c = !1, d = r(b), e = d.next(); !e.done; e = d.next()) {
				e = e.value
				var f = {
						audioCapabilities: [],
						videoCapabilities: [],
						persistentState: 'optional',
						distinctiveIdentifier: 'optional',
						initDataTypes: e.initDataTypes,
						sessionTypes: ['temporary'],
						label: e.label,
					},
					g = !1
				if (e.audioCapabilities)
					for (
						var h = r(e.audioCapabilities), k = h.next();
						!k.done;
						k = h.next()
					)
						(k = k.value),
							k.contentType &&
								((g = !0),
								MSMediaKeys.isTypeSupported(
									this.keySystem,
									k.contentType.split(';')[0]
								) && (f.audioCapabilities.push(k), (c = !0)))
				if (e.videoCapabilities)
					for (
						h = r(e.videoCapabilities), k = h.next();
						!k.done;
						k = h.next()
					)
						(k = k.value),
							k.contentType &&
								((g = !0),
								MSMediaKeys.isTypeSupported(
									this.keySystem,
									k.contentType.split(';')[0]
								) && (f.videoCapabilities.push(k), (c = !0)))
				g ||
					(c = MSMediaKeys.isTypeSupported(
						this.keySystem,
						'video/mp4'
					))
				'required' == e.persistentState && (c = !1)
				if (c) {
					this.a = f
					return
				}
			}
			c = Error('Unsupported keySystem')
			c.name = 'NotSupportedError'
			c.code = DOMException.NOT_SUPPORTED_ERR
			throw c
		}
		Pr.prototype.createMediaKeys = function () {
			var a = new Rr(this.keySystem)
			return Promise.resolve(a)
		}
		Pr.prototype.getConfiguration = function () {
			return this.a
		}
		function Sr(a) {
			var b = this.mediaKeys
			b && b != a && Tr(b, null)
			delete this.mediaKeys
			return (this.mediaKeys = a) ? Tr(a, this) : Promise.resolve()
		}
		function Rr(a) {
			this.a = new MSMediaKeys(a)
			this.b = new mc()
		}
		Rr.prototype.createSession = function (a) {
			a = a || 'temporary'
			if ('temporary' != a)
				throw new TypeError(
					'Session type ' + a + ' is unsupported on this platform.'
				)
			return new Ur(this.a, a)
		}
		Rr.prototype.setServerCertificate = function () {
			return Promise.resolve(!1)
		}
		function Tr(a, b) {
			a.b.cb()
			if (!b) return Promise.resolve()
			a.b.m(b, 'msneedkey', Qr)
			try {
				return (
					Ah(b, HTMLMediaElement.HAVE_METADATA, a.b, function () {
						b.msSetMediaKeys(a.a)
					}),
					Promise.resolve()
				)
			} catch (c) {
				return Promise.reject(c)
			}
		}
		function Ur(a) {
			Rb.call(this)
			this.f = null
			this.g = a
			this.c = this.a = null
			this.b = new mc()
			this.sessionId = ''
			this.expiration = NaN
			this.closed = new Ab()
			this.keyStatuses = new Vr()
		}
		ra(Ur, Rb)
		q = Ur.prototype
		q.generateRequest = function (a, b) {
			var c = this
			this.a = new Ab()
			try {
				;(this.f = this.g.createSession('video/mp4', Lb(b), null)),
					this.b.m(this.f, 'mskeymessage', function (d) {
						c.a && (c.a.resolve(), (c.a = null))
						d = new N('message', {
							messageType:
								void 0 == c.keyStatuses.a
									? 'license-request'
									: 'license-renewal',
							message: Mb(d.message),
						})
						c.dispatchEvent(d)
					}),
					this.b.m(this.f, 'mskeyadded', function () {
						c.a
							? (Wr(c, 'usable'), c.a.resolve(), (c.a = null))
							: c.c &&
							  (Wr(c, 'usable'), c.c.resolve(), (c.c = null))
					}),
					this.b.m(this.f, 'mskeyerror', function () {
						var d = Error('EME PatchedMediaKeysMs key error')
						d.errorCode = c.f.error
						if (null != c.a) c.a.reject(d), (c.a = null)
						else if (null != c.c) c.c.reject(d), (c.c = null)
						else
							switch (c.f.error.code) {
								case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:
								case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:
									Wr(c, 'output-not-allowed')
									break
								default:
									Wr(c, 'internal-error')
							}
					}),
					Wr(this, 'status-pending')
			} catch (d) {
				this.a.reject(d)
			}
			return this.a
		}
		q.load = function () {
			return Promise.reject(
				Error('MediaKeySession.load not yet supported')
			)
		}
		q.update = function (a) {
			this.c = new Ab()
			try {
				this.f.update(Lb(a))
			} catch (b) {
				this.c.reject(b)
			}
			return this.c
		}
		q.close = function () {
			try {
				this.f.close(), this.closed.resolve(), this.b.cb()
			} catch (a) {
				this.closed.reject(a)
			}
			return this.closed
		}
		q.remove = function () {
			return Promise.reject(
				Error(
					'MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform'
				)
			)
		}
		function Wr(a, b) {
			var c = a.keyStatuses
			c.size = void 0 == b ? 0 : 1
			c.a = b
			c = new N('keystatuseschange')
			a.dispatchEvent(c)
		}
		function Vr() {
			this.size = 0
			this.a = void 0
		}
		q = Vr.prototype
		q.forEach = function (a) {
			this.a && a(this.a, Wd.value())
		}
		q.get = function (a) {
			if (this.has(a)) return this.a
		}
		q.has = function (a) {
			var b = Wd.value()
			return this.a && Jb(a, b) ? !0 : !1
		}
		q.entries = function () {}
		q.keys = function () {}
		q.values = function () {}
		sr(function () {
			!window.HTMLVideoElement ||
				!window.MSMediaKeys ||
				(navigator.requestMediaKeySystemAccess &&
					MediaKeySystemAccess.prototype.getConfiguration) ||
				(delete HTMLMediaElement.prototype.mediaKeys,
				(HTMLMediaElement.prototype.mediaKeys = null),
				(window.MediaKeys = Rr),
				(window.MediaKeySystemAccess = Pr),
				(navigator.requestMediaKeySystemAccess = Or),
				(HTMLMediaElement.prototype.setMediaKeys = Sr))
		})
		function Xr() {
			return Promise.reject(
				Error('The key system specified is not supported.')
			)
		}
		function Yr(a) {
			return null == a
				? Promise.resolve()
				: Promise.reject(Error('MediaKeys not supported.'))
		}
		function Zr() {
			throw new TypeError('Illegal constructor.')
		}
		Zr.prototype.createSession = function () {}
		Zr.prototype.setServerCertificate = function () {}
		function $r() {
			this.keySystem = ''
			throw new TypeError('Illegal constructor.')
		}
		$r.prototype.getConfiguration = function () {}
		$r.prototype.createMediaKeys = function () {}
		sr(function () {
			!window.HTMLVideoElement ||
				(navigator.requestMediaKeySystemAccess &&
					MediaKeySystemAccess.prototype.getConfiguration) ||
				((navigator.requestMediaKeySystemAccess = Xr),
				delete HTMLMediaElement.prototype.mediaKeys,
				(HTMLMediaElement.prototype.mediaKeys = null),
				(HTMLMediaElement.prototype.setMediaKeys = Yr),
				(window.MediaKeys = Zr),
				(window.MediaKeySystemAccess = $r))
		}, -10)
		function as(a) {
			var b = bs
			return b ? b + a.charAt(0).toUpperCase() + a.slice(1) : a
		}
		function cs(a, b) {
			try {
				var c = new ds(a, b)
				return Promise.resolve(c)
			} catch (d) {
				return Promise.reject(d)
			}
		}
		function es(a) {
			var b = this.mediaKeys
			b && b != a && fs(b, null)
			delete this.mediaKeys
			;(this.mediaKeys = a) && fs(a, this)
			return Promise.resolve()
		}
		function ds(a, b) {
			this.a = this.keySystem = a
			var c = !1
			'org.w3.clearkey' == a &&
				((this.a = 'webkit-org.w3.clearkey'), (c = !1))
			var d = !1
			var e = document.getElementsByTagName('video')
			e = e.length ? e[0] : document.createElement('video')
			for (var f = r(b), g = f.next(); !g.done; g = f.next()) {
				g = g.value
				var h = {
						audioCapabilities: [],
						videoCapabilities: [],
						persistentState: 'optional',
						distinctiveIdentifier: 'optional',
						initDataTypes: g.initDataTypes,
						sessionTypes: ['temporary'],
						label: g.label,
					},
					k = !1
				if (g.audioCapabilities)
					for (
						var l = r(g.audioCapabilities), m = l.next();
						!m.done;
						m = l.next()
					)
						(m = m.value),
							m.contentType &&
								((k = !0),
								e.canPlayType(
									m.contentType.split(';')[0],
									this.a
								) && (h.audioCapabilities.push(m), (d = !0)))
				if (g.videoCapabilities)
					for (
						l = r(g.videoCapabilities), m = l.next();
						!m.done;
						m = l.next()
					)
						(m = m.value),
							m.contentType &&
								((k = !0),
								e.canPlayType(m.contentType, this.a) &&
									(h.videoCapabilities.push(m), (d = !0)))
				k ||
					(d =
						e.canPlayType('video/mp4', this.a) ||
						e.canPlayType('video/webm', this.a))
				'required' == g.persistentState &&
					(c
						? ((h.persistentState = 'required'),
						  (h.sessionTypes = ['persistent-license']))
						: (d = !1))
				if (d) {
					this.b = h
					return
				}
			}
			c = 'Unsupported keySystem'
			if ('org.w3.clearkey' == a || 'com.widevine.alpha' == a)
				c = 'None of the requested configurations were supported.'
			c = Error(c)
			c.name = 'NotSupportedError'
			c.code = DOMException.NOT_SUPPORTED_ERR
			throw c
		}
		ds.prototype.createMediaKeys = function () {
			var a = new gs(this.a)
			return Promise.resolve(a)
		}
		ds.prototype.getConfiguration = function () {
			return this.b
		}
		function gs(a) {
			this.g = a
			this.a = null
			this.b = new mc()
			this.c = []
			this.f = new Map()
		}
		function fs(a, b) {
			a.a = b
			a.b.cb()
			var c = bs
			b &&
				(a.b.m(b, c + 'needkey', function (d) {
					var e = document.createEvent('CustomEvent')
					e.initCustomEvent('encrypted', !1, !1, null)
					e.initDataType = 'cenc'
					e.initData = Mb(d.initData)
					a.a.dispatchEvent(e)
				}),
				a.b.m(b, c + 'keymessage', function (d) {
					var e = hs(a, d.sessionId)
					e &&
						((d = new N('message', {
							messageType:
								void 0 == e.keyStatuses.a
									? 'licenserequest'
									: 'licenserenewal',
							message: d.message,
						})),
						e.b && (e.b.resolve(), (e.b = null)),
						e.dispatchEvent(d))
				}),
				a.b.m(b, c + 'keyadded', function (d) {
					if ((d = hs(a, d.sessionId)))
						is(d, 'usable'), d.a && d.a.resolve(), (d.a = null)
				}),
				a.b.m(b, c + 'keyerror', function (d) {
					var e = hs(a, d.sessionId)
					e && e.handleError(d)
				}))
		}
		gs.prototype.createSession = function (a) {
			a = a || 'temporary'
			if ('temporary' != a && 'persistent-license' != a)
				throw new TypeError(
					'Session type ' + a + ' is unsupported on this platform.'
				)
			var b = this.a || document.createElement('video')
			b.src || (b.src = 'about:blank')
			a = new js(b, this.g, a)
			this.c.push(a)
			return a
		}
		gs.prototype.setServerCertificate = function () {
			return Promise.resolve(!1)
		}
		function hs(a, b) {
			var c = a.f.get(b)
			return c
				? c
				: (c = a.c.shift())
				? ((c.sessionId = b), a.f.set(b, c), c)
				: null
		}
		function js(a, b, c) {
			Rb.call(this)
			this.f = a
			this.h = !1
			this.a = this.b = null
			this.c = b
			this.g = c
			this.sessionId = ''
			this.expiration = NaN
			this.closed = new Ab()
			this.keyStatuses = new ks()
		}
		ra(js, Rb)
		q = js.prototype
		q.handleError = function (a) {
			var b = Error('EME v0.1b key error'),
				c = a.errorCode
			c.systemCode = a.systemCode
			b.errorCode = c
			!a.sessionId && this.b
				? (45 == a.systemCode &&
						(b.message = 'Unsupported session type.'),
				  this.b.reject(b),
				  (this.b = null))
				: a.sessionId && this.a
				? (this.a.reject(b), (this.a = null))
				: ((b = a.systemCode),
				  a.errorCode.code == MediaKeyError.MEDIA_KEYERR_OUTPUT
						? is(this, 'output-restricted')
						: 1 == b
						? is(this, 'expired')
						: is(this, 'internal-error'))
		}
		function ls(a, b, c) {
			if (a.h)
				return Promise.reject(
					Error('The session is already initialized.')
				)
			a.h = !0
			try {
				if ('persistent-license' == a.g)
					if (c) var d = Lb(yc('LOAD_SESSION|' + c))
					else {
						var e = yc('PERSISTENT|')
						d = kd(e, b)
					}
				else d = Lb(b)
			} catch (g) {
				return Promise.reject(g)
			}
			a.b = new Ab()
			var f = as('generateKeyRequest')
			try {
				a.f[f](a.c, d)
			} catch (g) {
				if ('InvalidStateError' != g.name)
					return (a.b = null), Promise.reject(g)
				new M(function () {
					try {
						a.f[f](a.c, d)
					} catch (h) {
						a.b.reject(h), (a.b = null)
					}
				}).R(0.01)
			}
			return a.b
		}
		function ms(a, b, c) {
			if (a.a)
				a.a
					.then(function () {
						return ms(a, b, c)
					})
					['catch'](function () {
						return ms(a, b, c)
					})
			else {
				a.a = b
				if ('webkit-org.w3.clearkey' == a.c) {
					var d = uc(c)
					var e = JSON.parse(d)
					'oct' != e.keys[0].kty &&
						(a.a.reject(
							Error('Response is not a valid JSON Web Key Set.')
						),
						(a.a = null))
					d = hd(e.keys[0].k)
					e = hd(e.keys[0].kid)
				} else (d = Lb(c)), (e = null)
				var f = as('addKey')
				try {
					a.f[f](a.c, d, e, a.sessionId)
				} catch (g) {
					a.a.reject(g), (a.a = null)
				}
			}
		}
		function is(a, b) {
			var c = a.keyStatuses
			c.size = void 0 == b ? 0 : 1
			c.a = b
			c = new N('keystatuseschange')
			a.dispatchEvent(c)
		}
		q.generateRequest = function (a, b) {
			return ls(this, b, null)
		}
		q.load = function (a) {
			return 'persistent-license' == this.g
				? ls(this, null, a)
				: Promise.reject(Error('Not a persistent session.'))
		}
		q.update = function (a) {
			var b = new Ab()
			ms(this, b, a)
			return b
		}
		q.close = function () {
			if ('persistent-license' != this.g) {
				if (!this.sessionId)
					return (
						this.closed.reject(
							Error('The session is not callable.')
						),
						this.closed
					)
				var a = as('cancelKeyRequest')
				try {
					this.f[a](this.c, this.sessionId)
				} catch (b) {}
			}
			this.closed.resolve()
			return this.closed
		}
		q.remove = function () {
			return 'persistent-license' != this.g
				? Promise.reject(Error('Not a persistent session.'))
				: this.close()
		}
		function ks() {
			this.size = 0
			this.a = void 0
		}
		q = ks.prototype
		q.forEach = function (a) {
			this.a && a(this.a, Wd.value())
		}
		q.get = function (a) {
			if (this.has(a)) return this.a
		}
		q.has = function (a) {
			var b = Wd.value()
			return this.a && Jb(a, b) ? !0 : !1
		}
		q.entries = function () {}
		q.keys = function () {}
		q.values = function () {}
		var bs = ''
		sr(function () {
			if (
				!(
					!window.HTMLVideoElement ||
					(navigator.requestMediaKeySystemAccess &&
						MediaKeySystemAccess.prototype.getConfiguration)
				)
			) {
				if (HTMLMediaElement.prototype.webkitGenerateKeyRequest)
					bs = 'webkit'
				else if (!HTMLMediaElement.prototype.generateKeyRequest) return
				navigator.requestMediaKeySystemAccess = cs
				delete HTMLMediaElement.prototype.mediaKeys
				HTMLMediaElement.prototype.mediaKeys = null
				HTMLMediaElement.prototype.setMediaKeys = es
				window.MediaKeys = gs
				window.MediaKeySystemAccess = ds
			}
		})
		function ns(a) {
			a = a.target
			if ('picture-in-picture' == a.webkitPresentationMode) {
				document.pictureInPictureElement = a
				var b = new Event('enterpictureinpicture')
				a.dispatchEvent(b)
			} else
				document.pictureInPictureElement == a &&
					(document.pictureInPictureElement = null),
					(b = new Event('leavepictureinpicture')),
					a.dispatchEvent(b)
		}
		function os() {
			return this.webkitSupportsPresentationMode('picture-in-picture')
				? (this.webkitSetPresentationMode('picture-in-picture'),
				  (document.pictureInPictureElement = this),
				  Promise.resolve())
				: Promise.reject(Error('PiP not allowed by video element'))
		}
		function ps() {
			var a = document.pictureInPictureElement
			return a
				? (a.webkitSetPresentationMode('inline'),
				  (document.pictureInPictureElement = null),
				  Promise.resolve())
				: Promise.reject(Error('No picture in picture element found'))
		}
		function qs() {
			return this.hasAttribute('disablePictureInPicture')
				? !0
				: !this.webkitSupportsPresentationMode('picture-in-picture')
		}
		function rs(a) {
			a
				? this.setAttribute('disablePictureInPicture', '')
				: this.removeAttribute('disablePictureInPicture')
		}
		sr(function () {
			if (window.HTMLVideoElement) {
				var a = HTMLVideoElement.prototype
				;(a.requestPictureInPicture && document.exitPictureInPicture) ||
					!a.webkitSupportsPresentationMode ||
					((document.pictureInPictureEnabled = !0),
					(document.pictureInPictureElement = null),
					(a.requestPictureInPicture = os),
					Object.defineProperty(a, 'disablePictureInPicture', {
						get: qs,
						set: rs,
						enumerable: !0,
						configurable: !0,
					}),
					(document.exitPictureInPicture = ps),
					document.addEventListener(
						'webkitpresentationmodechanged',
						ns,
						!0
					))
			}
		})
		sr(function () {
			if (window.HTMLMediaElement) {
				var a = HTMLMediaElement.prototype.play
				HTMLMediaElement.prototype.play = function () {
					var b = a.apply(this)
					b && b['catch'](function () {})
					return b
				}
			}
		})
		function ss() {
			return {
				droppedVideoFrames: this.webkitDroppedFrameCount,
				totalVideoFrames: this.webkitDecodedFrameCount,
				corruptedVideoFrames: 0,
				creationTime: NaN,
				totalFrameDelay: 0,
			}
		}
		sr(function () {
			if (window.HTMLVideoElement) {
				var a = HTMLVideoElement.prototype
				!a.getVideoPlaybackQuality &&
					'webkitDroppedFrameCount' in a &&
					(a.getVideoPlaybackQuality = ss)
			}
		})
		function ts(a, b, c) {
			return new window.TextTrackCue(a, b, c)
		}
		function us(a, b, c) {
			return new window.TextTrackCue(a + '-' + b + '-' + c, a, b, c)
		}
		sr(function () {
			if (!window.VTTCue && window.TextTrackCue) {
				var a = null,
					b = TextTrackCue.length
				if (3 == b) a = ts
				else if (6 == b) a = us
				else {
					try {
						var c = !!ts(1, 2, '')
					} catch (d) {
						c = !1
					}
					c && (a = ts)
				}
				a &&
					(window.VTTCue = function (d, e, f) {
						return a(d, e, f)
					})
			}
		})
		function vs() {}
		vs.prototype.parseInit = function () {}
		vs.prototype.parseMedia = function (a, b) {
			var c = uc(a),
				d = [],
				e = new DOMParser(),
				f = null
			if ('' == c) return d
			try {
				f = e.parseFromString(c, 'text/xml')
			} catch (E) {
				throw new L(2, 2, 2005, 'Failed to parse TTML.')
			}
			if (f) {
				if ((c = f.getElementsByTagName('parsererror')[0]))
					throw new L(2, 2, 2005, c.textContent)
				if ((e = f.getElementsByTagName('tt')[0])) {
					var g = rm(
						e,
						'http://www.w3.org/ns/ttml#parameter',
						'frameRate'
					)
					var h = rm(
						e,
						'http://www.w3.org/ns/ttml#parameter',
						'subFrameRate'
					)
					var k = rm(
						e,
						'http://www.w3.org/ns/ttml#parameter',
						'frameRateMultiplier'
					)
					var l = rm(
						e,
						'http://www.w3.org/ns/ttml#parameter',
						'tickRate'
					)
					var m = rm(
						e,
						'http://www.w3.org/ns/ttml#parameter',
						'cellResolution'
					)
					f = e.getAttribute('xml:space') || 'default'
					c = rm(e, 'http://www.w3.org/ns/ttml#styling', 'extent')
				} else
					throw new L(2, 2, 2005, 'TTML does not contain <tt> tag.')
				if ('default' != f && 'preserve' != f)
					throw new L(2, 2, 2005, 'Invalid xml:space value: ' + f)
				f = 'default' == f
				g = new ws(g, h, k, l)
				m = m
					? (m = /^(\d+) (\d+)$/.exec(m))
						? {
								columns: parseInt(m[1], 10),
								rows: parseInt(m[2], 10),
						  }
						: null
					: null
				h = xs(e.getElementsByTagName('metadata')[0])
				k = xs(e.getElementsByTagName('styling')[0])
				l = xs(e.getElementsByTagName('layout')[0])
				for (
					var n = [], p = r(l), t = p.next();
					!t.done;
					t = p.next()
				) {
					var v = t.value,
						w = c
					t = new Zd()
					var y = v.getAttribute('xml:id')
					if (y) {
						t.id = y
						y = null
						w && (y = ys.exec(w) || zs.exec(w))
						w = y ? Number(y[1]) : null
						y = y ? Number(y[2]) : null
						var A, B
						if ((A = As(v, k, 'extent')))
							(A = (B = ys.exec(A)) || zs.exec(A)),
								null != A &&
									((t.width =
										null != w
											? (100 * Number(A[1])) / w
											: Number(A[1])),
									(t.height =
										null != y
											? (100 * Number(A[2])) / y
											: Number(A[2])),
									(t.widthUnits = B || null != w ? me : 0),
									(t.heightUnits = B || null != y ? me : 0))
						if ((v = As(v, k, 'origin')))
							(A = (B = ys.exec(v)) || zs.exec(v)),
								null != A &&
									((t.viewportAnchorX =
										null != y
											? (100 * Number(A[1])) / y
											: Number(A[1])),
									(t.viewportAnchorY =
										null != w
											? (100 * Number(A[2])) / w
											: Number(A[2])),
									(t.viewportAnchorUnits =
										B || null != w ? me : 0))
					} else t = null
					t && n.push(t)
				}
				c = Bs(e.getElementsByTagName('body')[0])
				c = r(c)
				for (e = c.next(); !e.done; e = c.next())
					(e = Cs(e.value, b.periodStart, g, h, k, l, n, f, !1, m)) &&
						d.push(e)
			}
			return d
		}
		function xs(a) {
			var b = []
			if (!a) return b
			for (var c = r(a.childNodes), d = c.next(); !d.done; d = c.next())
				(d = d.value),
					d.nodeType == Node.ELEMENT_NODE &&
						'br' !== d.nodeName &&
						((d = xs(d)), (b = b.concat(d)))
			b.length || b.push(a)
			return b
		}
		function Bs(a) {
			if (!a) return []
			var b = []
			a = r(a.childNodes)
			for (var c = a.next(); !c.done; c = a.next())
				(c = c.value),
					c instanceof Element &&
						(c.hasAttribute('begin')
							? b.push(c)
							: (b = b.concat(Bs(c))))
			return b
		}
		function Ds(a, b) {
			for (
				var c = '', d = r(a.childNodes), e = d.next();
				!e.done;
				e = d.next()
			)
				(e = e.value),
					'br' == e.nodeName && a.childNodes[0] !== e
						? (c += '\n')
						: e.childNodes && 0 < e.childNodes.length
						? (c += Ds(e, b))
						: b
						? ((e = e.textContent.trim()),
						  (e = e.replace(/\s+/g, ' ')),
						  (c += e))
						: (c += e.textContent)
			return c
		}
		function Cs(a, b, c, d, e, f, g, h, k, l) {
			if (k && 'br' == a.nodeName)
				return (a = new Xd(0, 0, '')), (a.spacer = !0), a
			var m = /^[\s\n]*$/.test(a.textContent),
				n =
					a.nodeType == Node.ELEMENT_NODE &&
					!a.hasAttribute('begin') &&
					!a.hasAttribute('end')
			if (a.nodeType != Node.ELEMENT_NODE || (n && m) || (n && !k))
				return null
			m = Es(a.getAttribute('begin'), c)
			n = Es(a.getAttribute('end'), c)
			var p = Es(a.getAttribute('dur'), c)
			null == n && null != p && (n = m + p)
			if (!k && (null == m || null == n)) throw new L(2, 2, 2001)
			m = k && null == m ? 0 : m + b
			n = k && null == n ? 0 : n + b
			p = ''
			k = []
			if (
				Array.from(a.childNodes).some(function (y) {
					return (
						y.nodeType == Node.TEXT_NODE &&
						/\S+/.test(y.textContent)
					)
				})
			)
				p = Ds(a, h)
			else
				for (
					var t = r(a.childNodes), v = t.next();
					!v.done;
					v = t.next()
				)
					if ((v = Cs(v.value, b, c, d, e, f, g, h, !0, l)))
						(v.startTime = v.startTime || m),
							(v.endTime = v.endTime || n),
							k.push(v)
			b = new Xd(m, n, p)
			b.nestedCues = k
			l && (b.cellResolution = l)
			if ((f = Fs(a, 'region', f, '')[0]) && f.getAttribute('xml:id')) {
				var w = f.getAttribute('xml:id')
				b.region = g.filter(function (y) {
					return y.id == w
				})[0]
			}
			d = Fs(a, 'smpte:backgroundImage', d, '#')[0]
			Gs(b, a, f, d, e)
			return b
		}
		function Gs(a, b, c, d, e) {
			'rtl' == Hs(b, c, e, 'direction') && (a.direction = 'rtl')
			var f = Hs(b, c, e, 'writingMode')
			'tb' == f || 'tblr' == f
				? (a.writingMode = 'vertical-lr')
				: 'tbrl' == f
				? (a.writingMode = 'vertical-rl')
				: 'rltb' == f || 'rl' == f
				? (a.direction = 'rtl')
				: f && (a.direction = Yd)
			;(f = Hs(b, c, e, 'textAlign'))
				? ((a.positionAlign = Is[f]),
				  (a.lineAlign = Js[f]),
				  (a.textAlign = ie[f.toUpperCase()]))
				: (a.textAlign = 'start')
			if ((f = Hs(b, c, e, 'displayAlign')))
				a.displayAlign = je[f.toUpperCase()]
			if ((f = Hs(b, c, e, 'color'))) a.color = f
			if ((f = Hs(b, c, e, 'backgroundColor'))) a.backgroundColor = f
			if ((f = Hs(b, c, e, 'border'))) a.border = f
			if ((f = Hs(b, c, e, 'fontFamily'))) a.fontFamily = f
			;(f = Hs(b, c, e, 'fontWeight')) &&
				'bold' == f &&
				(a.fontWeight = 700)
			;(f = Hs(b, c, e, 'wrapOption')) &&
				'noWrap' == f &&
				(a.wrapLine = !1)
			;(f = Hs(b, c, e, 'lineHeight')) &&
				f.match(Ks) &&
				(a.lineHeight = f)
			;(f = Hs(b, c, e, 'fontSize')) &&
				(f.match(Ks) || f.match(Ls)) &&
				(a.fontSize = f)
			if ((f = Hs(b, c, e, 'fontStyle')))
				a.fontStyle = le[f.toUpperCase()]
			if (d) {
				f = d.getAttribute('imagetype')
				var g = d.getAttribute('encoding')
				d = d.textContent.trim()
				'PNG' == f &&
					'Base64' == g &&
					d &&
					(a.backgroundImage = 'data:image/png;base64,' + d)
			}
			;(d = Hs(b, c, e, 'letterSpacing')) &&
				d.match(Ks) &&
				(a.letterSpacing = d)
			;(d = Hs(b, c, e, 'linePadding')) &&
				d.match(Ks) &&
				(a.linePadding = d)
			if ((d = Hs(b, c, e, 'opacity'))) a.opacity = parseFloat(d)
			;(c = As(c, e, 'textDecoration')) && Ms(a, c)
			;(b = Ns(b, e, 'textDecoration')) && Ms(a, b)
		}
		function Ms(a, b) {
			for (var c = r(b.split(' ')), d = c.next(); !d.done; d = c.next())
				switch (d.value) {
					case 'underline':
						a.textDecoration.includes('underline') ||
							a.textDecoration.push('underline')
						break
					case 'noUnderline':
						a.textDecoration.includes('underline') &&
							Vb(a.textDecoration, 'underline')
						break
					case 'lineThrough':
						a.textDecoration.includes('lineThrough') ||
							a.textDecoration.push('lineThrough')
						break
					case 'noLineThrough':
						a.textDecoration.includes('lineThrough') &&
							Vb(a.textDecoration, 'lineThrough')
						break
					case 'overline':
						a.textDecoration.includes('overline') ||
							a.textDecoration.push('overline')
						break
					case 'noOverline':
						a.textDecoration.includes('overline') &&
							Vb(a.textDecoration, 'overline')
				}
		}
		function Hs(a, b, c, d) {
			return (a = Ns(a, c, d)) ? a : As(b, c, d)
		}
		function As(a, b, c) {
			if (!a) return null
			var d = xs(a)
			d = r(d)
			for (var e = d.next(); !e.done; e = d.next())
				if ((e = rm(e.value, 'http://www.w3.org/ns/ttml#styling', c)))
					return e
			return Os(a, b, c)
		}
		function Ns(a, b, c) {
			var d = rm(a, 'http://www.w3.org/ns/ttml#styling', c)
			return d ? d : Os(a, b, c)
		}
		function Os(a, b, c) {
			a = Fs(a, 'style', b, '')
			for (var d = null, e = 0; e < a.length; e++) {
				var f = rm(a[e], 'urn:ebu:tt:style', c)
				f || (f = rm(a[e], 'http://www.w3.org/ns/ttml#styling', c))
				f || (f = Ns(a[e], b, c))
				f && (d = f)
			}
			return d
		}
		function Fs(a, b, c, d) {
			var e = []
			if (!a || 1 > c.length) return e
			var f = a
			for (
				a = null;
				f &&
				!(a = f.getAttribute(b)) &&
				((f = f.parentNode), f instanceof Element);

			);
			if ((b = a))
				for (b = r(b.split(' ')), a = b.next(); !a.done; a = b.next()) {
					a = a.value
					f = r(c)
					for (var g = f.next(); !g.done; g = f.next())
						if (
							((g = g.value), d + g.getAttribute('xml:id') == a)
						) {
							e.push(g)
							break
						}
				}
			return e
		}
		function Es(a, b) {
			var c = null
			if (Ps.test(a)) {
				c = Ps.exec(a)
				var d = Number(c[1]),
					e = Number(c[2]),
					f = Number(c[3]),
					g = Number(c[4])
				g += (Number(c[5]) || 0) / b.b
				f += g / b.frameRate
				c = f + 60 * e + 3600 * d
			} else
				Qs.test(a)
					? (c = Rs(Qs, a))
					: Ss.test(a)
					? (c = Rs(Ss, a))
					: Ts.test(a)
					? ((c = Ts.exec(a)), (c = Number(c[1]) / b.frameRate))
					: Us.test(a)
					? ((c = Us.exec(a)), (c = Number(c[1]) / b.a))
					: Vs.test(a) && (c = Rs(Vs, a))
			return c
		}
		function Rs(a, b) {
			var c = a.exec(b)
			return null == c || '' == c[0]
				? null
				: (Number(c[4]) || 0) / 1e3 +
						(Number(c[3]) || 0) +
						60 * (Number(c[2]) || 0) +
						3600 * (Number(c[1]) || 0)
		}
		K('shaka.text.TtmlTextParser', vs)
		vs.prototype.parseMedia = vs.prototype.parseMedia
		vs.prototype.parseInit = vs.prototype.parseInit
		function ws(a, b, c, d) {
			this.frameRate = Number(a) || 30
			this.b = Number(b) || 1
			this.a = Number(d)
			0 == this.a && (this.a = a ? this.frameRate * this.b : 1)
			c &&
				(a = /^(\d+) (\d+)$/g.exec(c)) &&
				(this.frameRate *= Number(a[1]) / Number(a[2]))
		}
		var ys = /^(\d{1,2}(?:\.\d+)?|100(?:\.0+)?)% (\d{1,2}(?:\.\d+)?|100(?:\.0+)?)%$/,
			Ls = /^(\d{1,2}(?:\.\d+)?|100)%$/,
			Ks = /^(\d+px|\d+em|\d*\.?\d+c)$/,
			zs = /^(\d+)px (\d+)px$/,
			Ps = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
			Qs = /^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,
			Ss = /^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,
			Ts = /^(\d*(?:\.\d*)?)f$/,
			Us = /^(\d*(?:\.\d*)?)t$/,
			Vs = /^(?:(\d*(?:\.\d*)?)h)?(?:(\d*(?:\.\d*)?)m)?(?:(\d*(?:\.\d*)?)s)?(?:(\d*(?:\.\d*)?)ms)?$/,
			Js = {
				left: de,
				center: 'center',
				right: 'end',
				start: de,
				end: 'end',
			},
			Is = { left: 'line-left', center: 'center', right: 'line-right' }
		$f['application/ttml+xml'] = function () {
			return new vs()
		}
		function Ws() {
			this.j = new vs()
		}
		Ws.prototype.parseInit = function (a) {
			var b = !1
			new xf()
				.G('moov', Bf)
				.G('trak', Bf)
				.G('mdia', Bf)
				.G('minf', Bf)
				.G('stbl', Bf)
				.U('stsd', Cf)
				.G('stpp', function (c) {
					b = !0
					c.parser.stop()
				})
				.parse(a)
			if (!b) throw new L(2, 2, 2007)
		}
		Ws.prototype.parseMedia = function (a, b) {
			var c = this,
				d = !1,
				e = []
			new xf()
				.G(
					'mdat',
					Df(function (f) {
						d = !0
						e = e.concat(c.j.parseMedia(f, b))
					})
				)
				.parse(a, !1)
			if (!d) throw new L(2, 2, 2007)
			return e
		}
		K('shaka.text.Mp4TtmlParser', Ws)
		Ws.prototype.parseMedia = Ws.prototype.parseMedia
		Ws.prototype.parseInit = Ws.prototype.parseInit
		$f['application/mp4; codecs="stpp"'] = function () {
			return new Ws()
		}
		$f['application/mp4; codecs="stpp.ttml.im1t"'] = function () {
			return new Ws()
		}
		$f['application/mp4; codecs="stpp.TTML.im1t"'] = function () {
			return new Ws()
		}
		function Xs() {}
		Xs.prototype.parseInit = function () {}
		Xs.prototype.parseMedia = function (a, b) {
			var c = uc(a)
			c = c.replace(/\r\n|\r(?=[^\n]|$)/gm, '\n')
			var d = c.split(/\n{2,}/m)
			if (!/^WEBVTT($|[ \t\n])/m.test(d[0])) throw new L(2, 2, 2e3)
			c = b.periodStart
			if (d[0].includes('X-TIMESTAMP-MAP')) {
				var e = d[0].match(
						/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m
					),
					f = d[0].match(/MPEGTS:(\d+)/m)
				if (e && f) {
					c = Ys(new xo(e[1]))
					if (null == c) throw new L(2, 2, 2e3)
					f = Number(f[1])
					for (e = b.segmentStart; 95443.7176888889 <= e; )
						(e -= 95443.7176888889), (f += 8589934592)
					c = b.periodStart + f / 9e4 - c
				}
			}
			f = []
			e = r(d[0].split('\n'))
			for (var g = e.next(); !g.done; g = e.next())
				if (((g = g.value), /^Region:/.test(g))) {
					g = new xo(g)
					var h = new Zd()
					Ao(g)
					yo(g)
					for (var k = Ao(g); k; ) {
						var l = h,
							m = k
						;(k = /^id=(.*)$/.exec(m))
							? (l.id = k[1])
							: (k = /^width=(\d{1,2}|100)%$/.exec(m))
							? (l.width = Number(k[1]))
							: (k = /^lines=(\d+)$/.exec(m))
							? ((l.height = Number(k[1])), (l.heightUnits = 2))
							: (k = /^regionanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(
									m
							  ))
							? ((l.regionAnchorX = Number(k[1])),
							  (l.regionAnchorY = Number(k[2])))
							: (k = /^viewportanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(
									m
							  ))
							? ((l.viewportAnchorX = Number(k[1])),
							  (l.viewportAnchorY = Number(k[2])))
							: /^scroll=up$/.exec(m) && (l.scroll = 'up')
						yo(g)
						k = Ao(g)
					}
					f.push(h)
				}
			e = []
			d = r(d.slice(1))
			for (g = d.next(); !g.done; g = d.next()) {
				l = g.value.split('\n')
				k = c
				if (
					(1 == l.length && !l[0]) ||
					/^NOTE($|[ \t])/.test(l[0]) ||
					'STYLE' == l[0]
				)
					g = null
				else {
					g = null
					l[0].includes('--\x3e') || ((g = l[0]), l.splice(0, 1))
					h = new xo(l[0])
					m = Ys(h)
					var n = zo(h, /[ \t]+--\x3e[ \t]+/g),
						p = Ys(h)
					if (null == m || null == n || null == p)
						throw new L(2, 2, 2001)
					k = new Xd(m + k, p + k, '')
					Zs(l.slice(1).join('\n').trim(), k)
					yo(h)
					for (l = Ao(h); l; ) $s(k, l, f), yo(h), (l = Ao(h))
					null != g && (k.id = g)
					g = k
				}
				g && e.push(g)
			}
			return e
		}
		function Zs(a, b) {
			var c = Dm('<span>' + a + '</span>', 'span')
			if (c) {
				var d = []
				c = c.childNodes
				if (1 == c.length) {
					var e = c[0]
					if (
						e.nodeType == Node.TEXT_NODE ||
						e.nodeType == Node.CDATA_SECTION_NODE
					) {
						b.payload = a
						return
					}
				}
				c = r(c)
				for (e = c.next(); !e.done; e = c.next()) at(e.value, b, d)
				b.nestedCues = d
			} else b.payload = a
		}
		function at(a, b, c) {
			b = b.clone()
			if (a.nodeType === Node.ELEMENT_NODE && a.nodeName)
				for (
					var d = r(a.nodeName.split(/[ .]+/)), e = d.next();
					!e.done;
					e = d.next()
				)
					switch (e.value) {
						case 'b':
							b.fontWeight = 700
							break
						case 'i':
							b.fontStyle = 'italic'
							break
						case 'u':
							b.textDecoration.push('underline')
					}
			if (tm(a)) (b.payload = a.textContent), c.push(b)
			else
				for (a = r(a.childNodes), d = a.next(); !d.done; d = a.next())
					at(d.value, b, c)
		}
		function $s(a, b, c) {
			var d
			if ((d = /^align:(start|middle|center|end|left|right)$/.exec(b)))
				(b = d[1]),
					'middle' == b
						? (a.textAlign = ae)
						: (a.textAlign = ie[b.toUpperCase()])
			else if ((d = /^vertical:(lr|rl)$/.exec(b)))
				a.writingMode = 'lr' == d[1] ? 'vertical-lr' : 'vertical-rl'
			else if ((d = /^size:([\d.]+)%$/.exec(b))) a.size = Number(d[1])
			else if (
				(d = /^position:([\d.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(
					b
				))
			)
				(a.position = Number(d[1])),
					d[2] &&
						((b = d[2]),
						(a.positionAlign =
							'line-left' == b || 'start' == b
								? 'line-left'
								: 'line-right' == b || 'end' == b
								? 'line-right'
								: 'center'))
			else if ((d = /^region:(.*)$/.exec(b))) {
				if ((b = bt(c, d[1]))) a.region = b
			} else if ((c = /^line:([\d.]+)%(?:,(start|end|center))?$/.exec(b)))
				(a.lineInterpretation = 1),
					(a.line = Number(c[1])),
					c[2] && (a.lineAlign = ke[c[2].toUpperCase()])
			else if ((c = /^line:(-?\d+)(?:,(start|end|center))?$/.exec(b)))
				(a.lineInterpretation = ce),
					(a.line = Number(c[1])),
					c[2] && (a.lineAlign = ke[c[2].toUpperCase()])
		}
		function bt(a, b) {
			var c = a.filter(function (d) {
				return d.id == b
			})
			return c.length ? c[0] : null
		}
		function Ys(a) {
			a = zo(a, /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3})/g)
			if (null == a) return null
			var b = Number(a[2]),
				c = Number(a[3])
			return 59 < b || 59 < c
				? null
				: Number(a[4]) / 1e3 + c + 60 * b + 3600 * (Number(a[1]) || 0)
		}
		K('shaka.text.VttTextParser', Xs)
		Xs.prototype.parseMedia = Xs.prototype.parseMedia
		Xs.prototype.parseInit = Xs.prototype.parseInit
		$f['text/vtt'] = function () {
			return new Xs()
		}
		$f['text/vtt; codecs="vtt"'] = function () {
			return new Xs()
		}
		$f['text/vtt; codecs="wvtt"'] = function () {
			return new Xs()
		}
		function ct() {
			this.a = null
		}
		ct.prototype.parseInit = function (a) {
			var b = this,
				c = !1
			new xf()
				.G('moov', Bf)
				.G('trak', Bf)
				.G('mdia', Bf)
				.U('mdhd', function (d) {
					d = Hf(d.reader, d.version)
					b.a = d.timescale
				})
				.G('minf', Bf)
				.G('stbl', Bf)
				.U('stsd', Cf)
				.G('wvtt', function () {
					c = !0
				})
				.parse(a)
			if (!this.a) throw new L(2, 2, 2008)
			if (!c) throw new L(2, 2, 2008)
		}
		ct.prototype.parseMedia = function (a, b) {
			if (!this.a) throw new L(2, 2, 2008)
			var c = 0,
				d = [],
				e,
				f = [],
				g = !1,
				h = !1,
				k = !1,
				l = null
			new xf()
				.G('moof', Bf)
				.G('traf', Bf)
				.U('tfdt', function (D) {
					g = !0
					c = Gf(D.reader, D.version).Qc
				})
				.U('tfhd', function (D) {
					l = Ff(D.reader, D.flags).Fd
				})
				.U('trun', function (D) {
					h = !0
					d = If(D.reader, D.version, D.flags).Wd
				})
				.G(
					'mdat',
					Df(function (D) {
						k = !0
						e = D
					})
				)
				.parse(a, !1)
			if (!k && !g && !h) throw new L(2, 2, 2008)
			for (
				var m = c, n = new R(e, 0), p = r(d), t = p.next();
				!t.done;
				t = p.next()
			) {
				t = t.value
				var v = t.od || l,
					w = t.sc ? c + t.sc : m
				m = w + (v || 0)
				var y = 0
				do {
					var A = n.H()
					y += A
					var B = n.H(),
						E = null
					'vttc' == Ef(B) ? 8 < A && (E = n.Sa(A - 8)) : n.skip(A - 8)
					v &&
						E &&
						((A = dt(
							E,
							b.periodStart + w / this.a,
							b.periodStart + m / this.a
						)),
						f.push(A))
				} while (t.sampleSize && y < t.sampleSize)
			}
			return f.filter(Kc)
		}
		function dt(a, b, c) {
			var d, e, f
			new xf()
				.G(
					'payl',
					Df(function (g) {
						d = uc(g)
					})
				)
				.G(
					'iden',
					Df(function (g) {
						e = uc(g)
					})
				)
				.G(
					'sttg',
					Df(function (g) {
						f = uc(g)
					})
				)
				.parse(a)
			return d ? et(d, e, f, b, c) : null
		}
		function et(a, b, c, d, e) {
			d = new Xd(d, e, '')
			Zs(a, d)
			b && (d.id = b)
			if (c)
				for (a = new xo(c), b = Ao(a); b; )
					$s(d, b, []), yo(a), (b = Ao(a))
			return d
		}
		K('shaka.text.Mp4VttParser', ct)
		ct.prototype.parseMedia = ct.prototype.parseMedia
		ct.prototype.parseInit = ct.prototype.parseInit
		$f['application/mp4; codecs="wvtt"'] = function () {
			return new ct()
		}
		function ft() {
			this.j = new Xs()
		}
		ft.prototype.parseInit = function () {}
		ft.prototype.parseMedia = function (a, b) {
			var c = uc(a)
			var d = 'WEBVTT\n\n'
			if ('' != c) {
				c = c.replace(/\r+/g, '')
				c = c.trim()
				c = r(c.split('\n\n'))
				for (var e = c.next(); !e.done; e = c.next())
					(e = e.value.split(/\n/)),
						e[0].match(/\d+/) && e.shift(),
						(e[0] = e[0].replace(/,/g, '.')),
						(d += e.join('\n') + '\n\n')
			}
			d = Lb(yc(d))
			return this.j.parseMedia(d, b)
		}
		K('shaka.text.SrtTextParser', ft)
		ft.prototype.parseMedia = ft.prototype.parseMedia
		ft.prototype.parseInit = ft.prototype.parseInit
		$f['text/srt'] = function () {
			return new ft()
		} /*
 @license
 EME Encryption Scheme Polyfill
 Copyright 2019 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
		function gt() {}
		var ht
		function it() {
			ht
				? console.debug(
						'EmeEncryptionSchemePolyfill: Already installed.'
				  )
				: navigator.requestMediaKeySystemAccess &&
				  MediaKeySystemAccess.prototype.getConfiguration
				? ((ht = navigator.requestMediaKeySystemAccess),
				  console.debug(
						'EmeEncryptionSchemePolyfill: Waiting to detect encryptionScheme support.'
				  ),
				  (navigator.requestMediaKeySystemAccess = jt))
				: console.debug('EmeEncryptionSchemePolyfill: EME not found')
		}
		function jt(a, b) {
			var c = this,
				d
			return J(function (e) {
				if (1 == e.a)
					return (
						console.assert(
							c == navigator,
							'bad "this" for requestMediaKeySystemAccess'
						),
						u(e, ht.call(c, a, b), 2)
					)
				d = e.b
				if (kt(d))
					return (
						console.debug(
							'EmeEncryptionSchemePolyfill: Native encryptionScheme support found.'
						),
						(navigator.requestMediaKeySystemAccess = ht),
						e['return'](d)
					)
				console.debug(
					'EmeEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support.'
				)
				navigator.requestMediaKeySystemAccess = lt
				return e['return'](lt.call(c, a, b))
			})
		}
		function lt(a, b) {
			var c = this,
				d,
				e,
				f,
				g,
				h,
				k,
				l,
				m,
				n,
				p
			return J(function (t) {
				if (1 == t.a) {
					console.assert(
						c == navigator,
						'bad "this" for requestMediaKeySystemAccess'
					)
					d = mt(a)
					e = []
					f = r(b)
					for (g = f.next(); !g.done; g = f.next())
						(h = g.value),
							(k = nt(h.videoCapabilities, d)),
							(l = nt(h.audioCapabilities, d)),
							(h.videoCapabilities &&
								h.videoCapabilities.length &&
								!k.length) ||
								(h.audioCapabilities &&
									h.audioCapabilities.length &&
									!l.length) ||
								((m = Object.assign({}, h)),
								(m.videoCapabilities = k),
								(m.audioCapabilities = l),
								e.push(m))
					if (!e.length)
						throw (
							((n = Error(
								'Unsupported keySystem or supportedConfigurations.'
							)),
							(n.name = 'NotSupportedError'),
							(n.code = DOMException.NOT_SUPPORTED_ERR),
							n)
						)
					return u(t, ht.call(c, a, e), 2)
				}
				p = t.b
				return t['return'](new ot(p, d))
			})
		}
		function nt(a, b) {
			return a
				? a.filter(function (c) {
						return !c.encryptionScheme || c.encryptionScheme == b
				  })
				: a
		}
		K('EmeEncryptionSchemePolyfill', gt)
		gt.install = it
		function pt() {}
		var qt
		function rt() {
			navigator.mediaCapabilities
				? ((qt = navigator.mediaCapabilities.decodingInfo),
				  console.debug(
						'McEncryptionSchemePolyfill: Waiting to detect encryptionScheme support.'
				  ),
				  (navigator.mediaCapabilities.decodingInfo = st))
				: console.debug(
						'McEncryptionSchemePolyfill: MediaCapabilities not found'
				  )
		}
		function st(a) {
			var b = this,
				c,
				d
			return J(function (e) {
				if (1 == e.a)
					return (
						console.assert(
							b == navigator.mediaCapabilities,
							'bad "this" for decodingInfo'
						),
						u(e, qt.call(b, a), 2)
					)
				c = e.b
				if (!a.keySystemConfiguration) return e['return'](c)
				d = c.keySystemAccess
				if (kt(d))
					return (
						console.debug(
							'McEncryptionSchemePolyfill: Native encryptionScheme support found.'
						),
						(navigator.mediaCapabilities.decodingInfo = qt),
						e['return'](c)
					)
				console.debug(
					'McEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support.'
				)
				navigator.mediaCapabilities.decodingInfo = tt
				return e['return'](tt.call(b, a))
			})
		}
		function tt(a) {
			var b = this,
				c,
				d,
				e,
				f,
				g,
				h,
				k
			return J(function (l) {
				if (1 == l.a)
					return (
						console.assert(
							b == navigator.mediaCapabilities,
							'bad "this" for decodingInfo'
						),
						(c = null),
						a.keySystemConfiguration &&
						((d = a.keySystemConfiguration),
						(e = d.keySystem),
						(f = d.audio && d.audio.encryptionScheme),
						(g = d.video && d.video.encryptionScheme),
						(c = mt(e)),
						(h = {
							powerEfficient: !1,
							smooth: !1,
							supported: !1,
							keySystemAccess: null,
							configuration: a,
						}),
						(f && f != c) || (g && g != c))
							? l['return'](h)
							: u(l, qt.call(b, a), 2)
					)
				k = l.b
				k.keySystemAccess &&
					(k.keySystemAccess = new ot(k.keySystemAccess, c))
				return l['return'](k)
			})
		}
		K('McEncryptionSchemePolyfill', pt)
		pt.install = rt
		function ot(a, b) {
			this.b = a
			this.a = b
			this.keySystem = a.keySystem
		}
		ot.prototype.getConfiguration = function () {
			var a = this.b.getConfiguration()
			if (a.videoCapabilities)
				for (
					var b = r(a.videoCapabilities), c = b.next();
					!c.done;
					c = b.next()
				)
					c.value.encryptionScheme = this.a
			if (a.audioCapabilities)
				for (
					b = r(a.audioCapabilities), c = b.next();
					!c.done;
					c = b.next()
				)
					c.value.encryptionScheme = this.a
			return a
		}
		ot.prototype.createMediaKeys = function () {
			return this.b.createMediaKeys()
		}
		function mt(a) {
			if (
				a.startsWith('com.widevine') ||
				a.startsWith('com.microsoft') ||
				a.startsWith('com.adobe') ||
				a.startsWith('org.w3')
			)
				return 'cenc'
			if (a.startsWith('com.apple')) return 'cbcs-1-9'
			console.warn(
				'EmeEncryptionSchemePolyfill: Unknown key system:',
				a,
				'Please contribute!'
			)
			return null
		}
		function kt(a) {
			a = a.getConfiguration()
			var b = a.audioCapabilities && a.audioCapabilities[0]
			return (a = (a.videoCapabilities && a.videoCapabilities[0]) || b) &&
				void 0 !== a.encryptionScheme
				? !0
				: !1
		}
		function ut() {}
		function ur() {
			it()
			rt()
		}
		K('EncryptionSchemePolyfills', ut)
		ut.install = ur
		'undefined' !== typeof module && module.exports && (module.exports = ut)
	}.call(exportTo, innerGlobal, innerGlobal, undefined))
	if (typeof exports != 'undefined')
		for (var k in exportTo.shaka) exports[k] = exportTo.shaka[k]
	else if (typeof define == 'function' && define.amd)
		define(function () {
			return exportTo.shaka
		})
	else innerGlobal.shaka = exportTo.shaka
})()

//# sourceMappingURL=shaka-player.compiled.map
