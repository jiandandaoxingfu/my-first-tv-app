/*! For license information please see 2.0c901bbd.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-first-tv-app"] = this["webpackJsonpmy-first-tv-app"] || []).push([
	[2],
	[function(e, t, n) {
		"use strict";
		e.exports = n(110)
	}, function(e, t, n) {
		e.exports = n(119)()
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var c, r = n(93),
			a = (c = r) && c.__esModule ? c : {
				default: c
			};
		t.default = function(e, t, n) {
			return t in e ? (0, a.default)(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var c, r = n(167),
			a = (c = r) && c.__esModule ? c : {
				default: c
			};
		t.default = a.default || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
			}
			return e
		}
	}, function(e, t, n) {
		var c;
		! function() {
			"use strict";
			var n = {}.hasOwnProperty;

			function r() {
				for (var e = [], t = 0; t < arguments.length; t++) {
					var c = arguments[t];
					if (c) {
						var a = typeof c;
						if ("string" === a || "number" === a) e.push(c);
						else if (Array.isArray(c) && c.length) {
							var o = r.apply(null, c);
							o && e.push(o)
						} else if ("object" === a)
							for (var l in c) n.call(c, l) && c[l] && e.push(l)
					}
				}
				return e.join(" ")
			}
			e.exports ? (r.default = r, e.exports = r) : void 0 === (c = function() {
				return r
			}.apply(t, [])) || (e.exports = c)
		}()
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0, t.default = function(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var c, r = n(93),
			a = (c = r) && c.__esModule ? c : {
				default: c
			};
		t.default = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var c = t[n];
					c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), (0, a.default)(e, c.key, c)
				}
			}
			return function(t, n, c) {
				return n && e(t.prototype, n), c && e(t, c), t
			}
		}()
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var c, r = n(94),
			a = (c = r) && c.__esModule ? c : {
				default: c
			};
		t.default = function(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" !== ("undefined" === typeof t ? "undefined" : (0, a.default)(t)) && "function" !== typeof t ? e : t
		}
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var c = o(n(202)),
			r = o(n(206)),
			a = o(n(94));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		t.default = function(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : (0, a.default)(t)));
			e.prototype = (0, r.default)(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (c.default ? (0, c.default)(e, t) : e.__proto__ = t)
		}
	}, function(e, t, n) {
		"use strict";

		function c(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		n.d(t, "a", (function() {
			return c
		}))
	}, function(e, t, n) {
		"use strict";

		function c(e, t) {
			for (var n = 0; n < t.length; n++) {
				var c = t[n];
				c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(e, c.key, c)
			}
		}

		function r(e, t, n) {
			return t && c(e.prototype, t), n && c(e, n), e
		}
		n.d(t, "a", (function() {
			return r
		}))
	}, function(e, t, n) {
		"use strict";
		var c = n(78),
			r = Object.prototype.toString;

		function a(e) {
			return "[object Array]" === r.call(e)
		}

		function o(e) {
			return "undefined" === typeof e
		}

		function l(e) {
			return null !== e && "object" === typeof e
		}

		function i(e) {
			return "[object Function]" === r.call(e)
		}

		function u(e, t) {
			if (null !== e && "undefined" !== typeof e)
				if ("object" !== typeof e && (e = [e]), a(e))
					for (var n = 0, c = e.length; n < c; n++) t.call(null, e[n], n, e);
				else
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
		}
		e.exports = {
			isArray: a,
			isArrayBuffer: function(e) {
				return "[object ArrayBuffer]" === r.call(e)
			},
			isBuffer: function(e) {
				return null !== e && !o(e) && null !== e.constructor && !o(e.constructor) && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
			},
			isFormData: function(e) {
				return "undefined" !== typeof FormData && e instanceof FormData
			},
			isArrayBufferView: function(e) {
				return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
			},
			isString: function(e) {
				return "string" === typeof e
			},
			isNumber: function(e) {
				return "number" === typeof e
			},
			isObject: l,
			isUndefined: o,
			isDate: function(e) {
				return "[object Date]" === r.call(e)
			},
			isFile: function(e) {
				return "[object File]" === r.call(e)
			},
			isBlob: function(e) {
				return "[object Blob]" === r.call(e)
			},
			isFunction: i,
			isStream: function(e) {
				return l(e) && i(e.pipe)
			},
			isURLSearchParams: function(e) {
				return "undefined" !== typeof URLSearchParams && e instanceof URLSearchParams
			},
			isStandardBrowserEnv: function() {
				return ("undefined" === typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" !== typeof window && "undefined" !== typeof document)
			},
			forEach: u,
			merge: function e() {
				var t = {};

				function n(n, c) {
					"object" === typeof t[c] && "object" === typeof n ? t[c] = e(t[c], n) : t[c] = n
				}
				for (var c = 0, r = arguments.length; c < r; c++) u(arguments[c], n);
				return t
			},
			deepMerge: function e() {
				var t = {};

				function n(n, c) {
					"object" === typeof t[c] && "object" === typeof n ? t[c] = e(t[c], n) : t[c] = "object" === typeof n ? e({}, n) : n
				}
				for (var c = 0, r = arguments.length; c < r; c++) u(arguments[c], n);
				return t
			},
			extend: function(e, t, n) {
				return u(t, (function(t, r) {
					e[r] = n && "function" === typeof t ? c(t, n) : t
				})), e
			},
			trim: function(e) {
				return e.replace(/^\s*/, "").replace(/\s*$/, "")
			}
		}
	}, function(e, t, n) {
		"use strict";

		function c(e) {
			return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		n.d(t, "a", (function() {
			return c
		}))
	}, function(e, t, n) {
		"use strict";

		function c(e, t) {
			return (c = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function r(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && c(e, t)
		}
		n.d(t, "a", (function() {
			return r
		}))
	}, function(e, t, n) {
		"use strict";

		function c(e) {
			return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		var r = n(47);

		function a(e, t) {
			return !t || "object" !== c(t) && "function" !== typeof t ? Object(r.a)(e) : t
		}
		n.d(t, "a", (function() {
			return a
		}))
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), Object.defineProperty(t, "ConfigConsumer", {
			enumerable: !0,
			get: function() {
				return l.ConfigConsumer
			}
		}), t.default = t.configConsumerProps = void 0;
		var c, r = u(n(0)),
			a = u(n(121)),
			o = (c = n(50)) && c.__esModule ? c : {
				default: c
			},
			l = n(131);

		function i() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return i = function() {
				return e
			}, e
		}

		function u(e) {
			if (e && e.__esModule) return e;
			if (null === e || "object" !== s(e) && "function" !== typeof e) return {
				default: e
			};
			var t = i();
			if (t && t.has(e)) return t.get(e);
			var n = {},
				c = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var r in e)
				if (Object.prototype.hasOwnProperty.call(e, r)) {
					var a = c ? Object.getOwnPropertyDescriptor(e, r) : null;
					a && (a.get || a.set) ? Object.defineProperty(n, r, a) : n[r] = e[r]
				}
			return n.default = e, t && t.set(e, n), n
		}

		function s(e) {
			return (s = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function h() {
			return (h = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
				}
				return e
			}).apply(this, arguments)
		}

		function f(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function v(e, t) {
			for (var n = 0; n < t.length; n++) {
				var c = t[n];
				c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(e, c.key, c)
			}
		}

		function d(e, t) {
			return !t || "object" !== s(t) && "function" !== typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function p(e) {
			return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function m(e, t) {
			return (m = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		t.configConsumerProps = ["getPopupContainer", "rootPrefixCls", "getPrefixCls", "renderEmpty", "csp", "autoInsertSpaceInButton", "locale", "pageHeader"];
		var z = function(e) {
			function t() {
				var e;
				return f(this, t), (e = d(this, p(t).apply(this, arguments))).getPrefixCls = function(t, n) {
					var c = e.props.prefixCls,
						r = void 0 === c ? "ant" : c;
					return n || (t ? "".concat(r, "-").concat(t) : r)
				}, e.renderProvider = function(t, n) {
					var c = e.props,
						o = c.children,
						i = c.getPopupContainer,
						u = c.renderEmpty,
						s = c.csp,
						f = c.autoInsertSpaceInButton,
						v = c.locale,
						d = c.pageHeader,
						p = h(h({}, t), {
							getPrefixCls: e.getPrefixCls,
							csp: s,
							autoInsertSpaceInButton: f
						});
					return i && (p.getPopupContainer = i), u && (p.renderEmpty = u), d && (p.pageHeader = d), r.createElement(l.ConfigContext.Provider, {
						value: p
					}, r.createElement(a.default, {
						locale: v || n,
						_ANT_MARK__: a.ANT_MARK
					}, o))
				}, e
			}
			var n, c, i;
			return function(e, t) {
				if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && m(e, t)
			}(t, e), n = t, (c = [{
				key: "render",
				value: function() {
					var e = this;
					return r.createElement(o.default, null, (function(t, n, c) {
						return r.createElement(l.ConfigConsumer, null, (function(t) {
							return e.renderProvider(t, c)
						}))
					}))
				}
			}]) && v(n.prototype, c), i && v(n, i), t
		}(r.Component);
		t.default = z
	}, function(e, t) {
		var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
		"number" == typeof __g && (__g = n)
	}, function(e, t) {
		var n = e.exports = {
			version: "2.6.11"
		};
		"number" == typeof __e && (__e = n)
	}, function(e, t, n) {
		e.exports = !n(35)((function() {
			return 7 != Object.defineProperty({}, "a", {
				get: function() {
					return 7
				}
			}).a
		}))
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0, t.default = function(e, t) {
			var n = {};
			for (var c in e) t.indexOf(c) >= 0 || Object.prototype.hasOwnProperty.call(e, c) && (n[c] = e[c]);
			return n
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var c = n(70).Col;
		t.default = c
	}, function(e, t, n) {
		"use strict";
		(function(e) {
			n.d(t, "e", (function() {
				return h
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "f", (function() {
				return z
			}));
			var c = n(3),
				r = n.n(c),
				a = n(5),
				o = n.n(a),
				l = n(6),
				i = n.n(l),
				u = n(105),
				s = n(0);

			function h(t) {
				e && Object({
					NODE_ENV: "production",
					PUBLIC_URL: ".",
					WDS_SOCKET_HOST: void 0,
					WDS_SOCKET_PATH: void 0,
					WDS_SOCKET_PORT: void 0
				}) || console.error("[@ant-design/icons-react]: " + t + ".")
			}

			function f(e) {
				return "object" === typeof e && "string" === typeof e.name && "string" === typeof e.theme && ("object" === typeof e.icon || "function" === typeof e.icon)
			}

			function v() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return Object.keys(e).reduce((function(t, n) {
					var c = e[n];
					switch (n) {
						case "class":
							t.className = c, delete t.class;
							break;
						default:
							t[n] = c
					}
					return t
				}), {})
			}
			var d = function() {
				function e() {
					o()(this, e), this.collection = {}
				}
				return i()(e, [{
					key: "clear",
					value: function() {
						this.collection = {}
					}
				}, {
					key: "delete",
					value: function(e) {
						return delete this.collection[e]
					}
				}, {
					key: "get",
					value: function(e) {
						return this.collection[e]
					}
				}, {
					key: "has",
					value: function(e) {
						return Boolean(this.collection[e])
					}
				}, {
					key: "set",
					value: function(e, t) {
						return this.collection[e] = t, this
					}
				}, {
					key: "size",
					get: function() {
						return Object.keys(this.collection).length
					}
				}]), e
			}();

			function p(e, t, n) {
				return n ? s.createElement(e.tag, r()({
					key: t
				}, v(e.attrs), n), (e.children || []).map((function(n, c) {
					return p(n, t + "-" + e.tag + "-" + c)
				}))) : s.createElement(e.tag, r()({
					key: t
				}, v(e.attrs)), (e.children || []).map((function(n, c) {
					return p(n, t + "-" + e.tag + "-" + c)
				})))
			}

			function m(e) {
				return Object(u.generate)(e)[0]
			}

			function z(e, t) {
				switch (t) {
					case "fill":
						return e + "-fill";
					case "outline":
						return e + "-o";
					case "twotone":
						return e + "-twotone";
					default:
						throw new TypeError("Unknown theme type: " + t + ", name: " + e)
				}
			}
		}).call(this, n(51))
	}, function(e, t, n) {
		var c = n(34),
			r = n(88),
			a = n(52),
			o = Object.defineProperty;
		t.f = n(18) ? Object.defineProperty : function(e, t, n) {
			if (c(e), t = a(t, !0), c(n), r) try {
				return o(e, t, n)
			} catch (l) {}
			if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
			return "value" in n && (e[t] = n.value), e
		}
	}, function(e, t) {
		var n = {}.hasOwnProperty;
		e.exports = function(e, t) {
			return n.call(e, t)
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var c = n(70).Row;
		t.default = c
	}, function(e, t, n) {}, function(e, t, n) {
		var c = n(16),
			r = n(17),
			a = n(87),
			o = n(27),
			l = n(23),
			i = function e(t, n, i) {
				var u, s, h, f = t & e.F,
					v = t & e.G,
					d = t & e.S,
					p = t & e.P,
					m = t & e.B,
					z = t & e.W,
					y = v ? r : r[n] || (r[n] = {}),
					g = y.prototype,
					M = v ? c : d ? c[n] : (c[n] || {}).prototype;
				for (u in v && (i = n), i)(s = !f && M && void 0 !== M[u]) && l(y, u) || (h = s ? M[u] : i[u], y[u] = v && "function" != typeof M[u] ? i[u] : m && s ? a(h, c) : z && M[u] == h ? function(e) {
					var t = function(t, n, c) {
						if (this instanceof e) {
							switch (arguments.length) {
								case 0:
									return new e;
								case 1:
									return new e(t);
								case 2:
									return new e(t, n)
							}
							return new e(t, n, c)
						}
						return e.apply(this, arguments)
					};
					return t.prototype = e.prototype, t
				}(h) : p && "function" == typeof h ? a(Function.call, h) : h, p && ((y.virtual || (y.virtual = {}))[u] = h, t & e.R && g && !g[u] && o(g, u, h)))
			};
		i.F = 1, i.G = 2, i.S = 4, i.P = 8, i.B = 16, i.W = 32, i.U = 64, i.R = 128, e.exports = i
	}, function(e, t, n) {
		var c = n(22),
			r = n(41);
		e.exports = n(18) ? function(e, t, n) {
			return c.f(e, t, r(1, n))
		} : function(e, t, n) {
			return e[t] = n, e
		}
	}, function(e, t) {
		e.exports = function(e) {
			return "object" === typeof e ? null !== e : "function" === typeof e
		}
	}, function(e, t, n) {
		var c = n(91),
			r = n(53);
		e.exports = function(e) {
			return c(r(e))
		}
	}, function(e, t, n) {
		var c = n(56)("wks"),
			r = n(44),
			a = n(16).Symbol,
			o = "function" == typeof a;
		(e.exports = function(e) {
			return c[e] || (c[e] = o && a[e] || (o ? a : r)("Symbol." + e))
		}).store = c
	}, function(e, t, n) {
		e.exports = n(151)
	}, , function(e, t, n) {
		"use strict";

		function c(e) {
			return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), Object.defineProperty(t, "resetWarned", {
			enumerable: !0,
			get: function() {
				return r.resetWarned
			}
		}), t.default = void 0;
		var r = function(e) {
			if (e && e.__esModule) return e;
			if (null === e || "object" !== c(e) && "function" !== typeof e) return {
				default: e
			};
			var t = a();
			if (t && t.has(e)) return t.get(e);
			var n = {},
				r = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var o in e)
				if (Object.prototype.hasOwnProperty.call(e, o)) {
					var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
					l && (l.get || l.set) ? Object.defineProperty(n, o, l) : n[o] = e[o]
				}
			n.default = e, t && t.set(e, n);
			return n
		}(n(129));

		function a() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return a = function() {
				return e
			}, e
		}
		t.default = function(e, t, n) {
			(0, r.default)(e, "[antd: ".concat(t, "] ").concat(n))
		}
	}, function(e, t, n) {
		var c = n(28);
		e.exports = function(e) {
			if (!c(e)) throw TypeError(e + " is not an object!");
			return e
		}
	}, function(e, t) {
		e.exports = function(e) {
			try {
				return !!e()
			} catch (t) {
				return !0
			}
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var c = a(n(2));
		t.toArray = o, t.getActiveIndex = function(e, t) {
			for (var n = o(e), c = 0; c < n.length; c++)
				if (n[c].key === t) return c;
			return -1
		}, t.getActiveKey = function(e, t) {
			return o(e)[t].key
		}, t.setTransform = l, t.isTransform3dSupported = function(e) {
			return ("transform" in e || "webkitTransform" in e || "MozTransform" in e) && window.atob
		}, t.setTransition = function(e, t) {
			e.transition = t, e.webkitTransition = t, e.MozTransition = t
		}, t.getTransformPropValue = function(e) {
			return {
				transform: e,
				WebkitTransform: e,
				MozTransform: e
			}
		}, t.isVertical = i, t.getTransformByIndex = function(e, t) {
			var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ltr",
				c = i(t) ? "translateY" : "translateX";
			if (!i(t) && "rtl" === n) return c + "(" + 100 * e + "%) translateZ(0)";
			return c + "(" + 100 * -e + "%) translateZ(0)"
		}, t.getMarginStyle = function(e, t) {
			var n = i(t) ? "marginTop" : "marginLeft";
			return (0, c.default)({}, n, 100 * -e + "%")
		}, t.getStyle = u, t.setPxStyle = function(e, t, n) {
			t = n ? "0px, " + t + "px, 0px" : t + "px, 0px, 0px", l(e.style, "translate3d(" + t + ")")
		}, t.getDataAttr = function(e) {
			return Object.keys(e).reduce((function(t, n) {
				return "aria-" !== n.substr(0, 5) && "data-" !== n.substr(0, 5) && "role" !== n || (t[n] = e[n]), t
			}), {})
		}, t.getLeft = function(e, t) {
			return h("left", "offsetWidth", "right", e, t)
		}, t.getTop = function(e, t) {
			return h("top", "offsetHeight", "bottom", e, t)
		};
		var r = a(n(0));

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function o(e) {
			var t = [];
			return r.default.Children.forEach(e, (function(e) {
				e && t.push(e)
			})), t
		}

		function l(e, t) {
			e.transform = t, e.webkitTransform = t, e.mozTransform = t
		}

		function i(e) {
			return "left" === e || "right" === e
		}

		function u(e, t) {
			return +window.getComputedStyle(e).getPropertyValue(t).replace("px", "")
		}

		function s(e, t) {
			return +e.getPropertyValue(t).replace("px", "")
		}

		function h(e, t, n, c, r) {
			var a = u(r, "padding-" + e);
			if (!c || !c.parentNode) return a;
			var o = c.parentNode.childNodes;
			return Array.prototype.some.call(o, (function(r) {
				var o = window.getComputedStyle(r);
				return r !== c ? (a += s(o, "margin-" + e), a += r[t], a += s(o, "margin-" + n), "content-box" === o.boxSizing && (a += s(o, "border-" + e + "-width") + s(o, "border-" + n + "-width")), !1) : (a += s(o, "margin-" + e), !0)
			})), a
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var c = function(e) {
				if (e && e.__esModule) return e;
				if (null === e || "object" !== p(e) && "function" !== typeof e) return {
					default: e
				};
				var t = d();
				if (t && t.has(e)) return t.get(e);
				var n = {},
					c = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var r in e)
					if (Object.prototype.hasOwnProperty.call(e, r)) {
						var a = c ? Object.getOwnPropertyDescriptor(e, r) : null;
						a && (a.get || a.set) ? Object.defineProperty(n, r, a) : n[r] = e[r]
					}
				n.default = e, t && t.set(e, n);
				return n
			}(n(0)),
			r = v(n(4)),
			a = v(n(86)),
			o = v(n(175)),
			l = v(n(176)),
			i = v(n(177)),
			u = v(n(24)),
			s = v(n(20)),
			h = n(15),
			f = v(n(33));

		function v(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function d() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return d = function() {
				return e
			}, e
		}

		function p(e) {
			return (p = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function m() {
			return (m = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
				}
				return e
			}).apply(this, arguments)
		}

		function z(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function y(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function g(e, t) {
			for (var n = 0; n < t.length; n++) {
				var c = t[n];
				c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(e, c.key, c)
			}
		}

		function M(e, t) {
			return !t || "object" !== p(t) && "function" !== typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function b(e) {
			return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function H(e, t) {
			return (H = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		var V = function(e, t) {
			var n = {};
			for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && t.indexOf(c) < 0 && (n[c] = e[c]);
			if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
				var r = 0;
				for (c = Object.getOwnPropertySymbols(e); r < c.length; r++) t.indexOf(c[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, c[r]) && (n[c[r]] = e[c[r]])
			}
			return n
		};

		function w(e) {
			return e.map((function(t, n) {
				return c.createElement("li", {
					style: {
						width: "".concat(100 / e.length, "%")
					},
					key: "action-".concat(n)
				}, c.createElement("span", null, t))
			}))
		}
		var _ = function(e) {
			function t() {
				var e;
				return y(this, t), (e = M(this, b(t).apply(this, arguments))).onTabChange = function(t) {
					e.props.onTabChange && e.props.onTabChange(t)
				}, e.renderCard = function(t) {
					var n, o, l, h = t.getPrefixCls,
						f = e.props,
						v = f.prefixCls,
						d = f.className,
						p = f.extra,
						y = f.headStyle,
						g = void 0 === y ? {} : y,
						M = f.bodyStyle,
						b = void 0 === M ? {} : M,
						H = f.title,
						_ = f.loading,
						C = f.bordered,
						O = void 0 === C || C,
						S = f.size,
						L = void 0 === S ? "default" : S,
						T = f.type,
						k = f.cover,
						x = f.actions,
						E = f.tabList,
						P = f.children,
						F = f.activeTabKey,
						A = f.defaultActiveTabKey,
						j = f.tabBarExtraContent,
						D = V(f, ["prefixCls", "className", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent"]),
						N = h("card", v),
						R = (0, r.default)(N, d, (z(n = {}, "".concat(N, "-loading"), _), z(n, "".concat(N, "-bordered"), O), z(n, "".concat(N, "-hoverable"), e.getCompatibleHoverable()), z(n, "".concat(N, "-contain-grid"), e.isContainGrid()), z(n, "".concat(N, "-contain-tabs"), E && E.length), z(n, "".concat(N, "-").concat(L), "default" !== L), z(n, "".concat(N, "-type-").concat(T), !!T), n)),
						I = 0 === b.padding || "0px" === b.padding ? {
							padding: 24
						} : void 0,
						U = c.createElement("div", {
							className: "".concat(N, "-loading-content"),
							style: I
						}, c.createElement(u.default, {
							gutter: 8
						}, c.createElement(s.default, {
							span: 22
						}, c.createElement("div", {
							className: "".concat(N, "-loading-block")
						}))), c.createElement(u.default, {
							gutter: 8
						}, c.createElement(s.default, {
							span: 8
						}, c.createElement("div", {
							className: "".concat(N, "-loading-block")
						})), c.createElement(s.default, {
							span: 15
						}, c.createElement("div", {
							className: "".concat(N, "-loading-block")
						}))), c.createElement(u.default, {
							gutter: 8
						}, c.createElement(s.default, {
							span: 6
						}, c.createElement("div", {
							className: "".concat(N, "-loading-block")
						})), c.createElement(s.default, {
							span: 18
						}, c.createElement("div", {
							className: "".concat(N, "-loading-block")
						}))), c.createElement(u.default, {
							gutter: 8
						}, c.createElement(s.default, {
							span: 13
						}, c.createElement("div", {
							className: "".concat(N, "-loading-block")
						})), c.createElement(s.default, {
							span: 9
						}, c.createElement("div", {
							className: "".concat(N, "-loading-block")
						}))), c.createElement(u.default, {
							gutter: 8
						}, c.createElement(s.default, {
							span: 4
						}, c.createElement("div", {
							className: "".concat(N, "-loading-block")
						})), c.createElement(s.default, {
							span: 3
						}, c.createElement("div", {
							className: "".concat(N, "-loading-block")
						})), c.createElement(s.default, {
							span: 16
						}, c.createElement("div", {
							className: "".concat(N, "-loading-block")
						})))),
						W = void 0 !== F,
						Y = (z(o = {}, W ? "activeKey" : "defaultActiveKey", W ? F : A), z(o, "tabBarExtraContent", j), o),
						B = E && E.length ? c.createElement(i.default, m({}, Y, {
							className: "".concat(N, "-head-tabs"),
							size: "large",
							onChange: e.onTabChange
						}), E.map((function(e) {
							return c.createElement(i.default.TabPane, {
								tab: e.tab,
								disabled: e.disabled,
								key: e.key
							})
						}))) : null;
					(H || p || B) && (l = c.createElement("div", {
						className: "".concat(N, "-head"),
						style: g
					}, c.createElement("div", {
						className: "".concat(N, "-head-wrapper")
					}, H && c.createElement("div", {
						className: "".concat(N, "-head-title")
					}, H), p && c.createElement("div", {
						className: "".concat(N, "-extra")
					}, p)), B));
					var q = k ? c.createElement("div", {
							className: "".concat(N, "-cover")
						}, k) : null,
						G = c.createElement("div", {
							className: "".concat(N, "-body"),
							style: b
						}, _ ? U : P),
						K = x && x.length ? c.createElement("ul", {
							className: "".concat(N, "-actions")
						}, w(x)) : null,
						Q = (0, a.default)(D, ["onTabChange", "noHovering", "hoverable"]);
					return c.createElement("div", m({}, Q, {
						className: R
					}), l, q, G, K)
				}, e
			}
			var n, l, v;
			return function(e, t) {
				if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && H(e, t)
			}(t, e), n = t, (l = [{
				key: "componentDidMount",
				value: function() {
					"noHovering" in this.props && ((0, f.default)(!this.props.noHovering, "Card", "`noHovering` is deprecated, you can remove it safely or use `hoverable` instead."), (0, f.default)(!!this.props.noHovering, "Card", "`noHovering={false}` is deprecated, use `hoverable` instead."))
				}
			}, {
				key: "getCompatibleHoverable",
				value: function() {
					var e = this.props,
						t = e.noHovering,
						n = e.hoverable;
					return "noHovering" in this.props ? !t || n : !!n
				}
			}, {
				key: "isContainGrid",
				value: function() {
					var e;
					return c.Children.forEach(this.props.children, (function(t) {
						t && t.type && t.type === o.default && (e = !0)
					})), e
				}
			}, {
				key: "render",
				value: function() {
					return c.createElement(h.ConfigConsumer, null, this.renderCard)
				}
			}]) && g(n.prototype, l), v && g(n, v), t
		}(c.Component);
		t.default = _, _.Grid = o.default, _.Meta = l.default
	}, function(e, t, n) {
		"use strict";
		n(25), n(69)
	}, function(e, t, n) {
		"use strict";
		n(25), n(69)
	}, function(e, t) {
		var n;
		n = function() {
			return this
		}();
		try {
			n = n || new Function("return this")()
		} catch (c) {
			"object" === typeof window && (n = window)
		}
		e.exports = n
	}, function(e, t) {
		e.exports = function(e, t) {
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t
			}
		}
	}, function(e, t, n) {
		var c = n(90),
			r = n(57);
		e.exports = Object.keys || function(e) {
			return c(e, r)
		}
	}, function(e, t) {
		e.exports = !0
	}, function(e, t) {
		var n = 0,
			c = Math.random();
		e.exports = function(e) {
			return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + c).toString(36))
		}
	}, function(e, t) {
		t.f = {}.propertyIsEnumerable
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var c = a(n(0)),
			r = a(n(132));

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		t.default = c.default.createContext || r.default, e.exports = t.default
	}, function(e, t, n) {
		"use strict";

		function c(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}
		n.d(t, "a", (function() {
			return c
		}))
	}, , function(e, t, n) {
		(function(t) {
			for (var c = n(209), r = "undefined" === typeof window ? t : window, a = ["moz", "webkit"], o = "AnimationFrame", l = r["request" + o], i = r["cancel" + o] || r["cancelRequest" + o], u = 0; !l && u < a.length; u++) l = r[a[u] + "Request" + o], i = r[a[u] + "Cancel" + o] || r[a[u] + "CancelRequest" + o];
			if (!l || !i) {
				var s = 0,
					h = 0,
					f = [];
				l = function(e) {
					if (0 === f.length) {
						var t = c(),
							n = Math.max(0, 1e3 / 60 - (t - s));
						s = n + t, setTimeout((function() {
							var e = f.slice(0);
							f.length = 0;
							for (var t = 0; t < e.length; t++)
								if (!e[t].cancelled) try {
									e[t].callback(s)
								} catch (n) {
									setTimeout((function() {
										throw n
									}), 0)
								}
						}), Math.round(n))
					}
					return f.push({
						handle: ++h,
						callback: e,
						cancelled: !1
					}), h
				}, i = function(e) {
					for (var t = 0; t < f.length; t++) f[t].handle === e && (f[t].cancelled = !0)
				}
			}
			e.exports = function(e) {
				return l.call(r, e)
			}, e.exports.cancel = function() {
				i.apply(r, arguments)
			}, e.exports.polyfill = function(e) {
				e || (e = r), e.requestAnimationFrame = l, e.cancelAnimationFrame = i
			}
		}).call(this, n(40))
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var c, r = i(n(0)),
			a = i(n(1)),
			o = (c = n(130)) && c.__esModule ? c : {
				default: c
			};

		function l() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return l = function() {
				return e
			}, e
		}

		function i(e) {
			if (e && e.__esModule) return e;
			if (null === e || "object" !== u(e) && "function" !== typeof e) return {
				default: e
			};
			var t = l();
			if (t && t.has(e)) return t.get(e);
			var n = {},
				c = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var r in e)
				if (Object.prototype.hasOwnProperty.call(e, r)) {
					var a = c ? Object.getOwnPropertyDescriptor(e, r) : null;
					a && (a.get || a.set) ? Object.defineProperty(n, r, a) : n[r] = e[r]
				}
			return n.default = e, t && t.set(e, n), n
		}

		function u(e) {
			return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function s() {
			return (s = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
				}
				return e
			}).apply(this, arguments)
		}

		function h(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function f(e, t) {
			for (var n = 0; n < t.length; n++) {
				var c = t[n];
				c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(e, c.key, c)
			}
		}

		function v(e, t) {
			return !t || "object" !== u(t) && "function" !== typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function d(e) {
			return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function p(e, t) {
			return (p = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		var m = function(e) {
			function t() {
				return h(this, t), v(this, d(t).apply(this, arguments))
			}
			var n, c, r;
			return function(e, t) {
				if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && p(e, t)
			}(t, e), n = t, (c = [{
				key: "getLocale",
				value: function() {
					var e = this.props,
						t = e.componentName,
						n = e.defaultLocale || o.default[t || "global"],
						c = this.context.antLocale,
						r = t && c ? c[t] : {};
					return s(s({}, "function" === typeof n ? n() : n), r || {})
				}
			}, {
				key: "getLocaleCode",
				value: function() {
					var e = this.context.antLocale,
						t = e && e.locale;
					return e && e.exist && !t ? o.default.locale : t
				}
			}, {
				key: "render",
				value: function() {
					return this.props.children(this.getLocale(), this.getLocaleCode(), this.context.antLocale)
				}
			}]) && f(n.prototype, c), r && f(n, r), t
		}(r.Component);
		t.default = m, m.defaultProps = {
			componentName: "global"
		}, m.contextTypes = {
			antLocale: a.object
		}
	}, function(e, t) {
		var n, c, r = e.exports = {};

		function a() {
			throw new Error("setTimeout has not been defined")
		}

		function o() {
			throw new Error("clearTimeout has not been defined")
		}

		function l(e) {
			if (n === setTimeout) return setTimeout(e, 0);
			if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
			try {
				return n(e, 0)
			} catch (t) {
				try {
					return n.call(null, e, 0)
				} catch (t) {
					return n.call(this, e, 0)
				}
			}
		}! function() {
			try {
				n = "function" === typeof setTimeout ? setTimeout : a
			} catch (e) {
				n = a
			}
			try {
				c = "function" === typeof clearTimeout ? clearTimeout : o
			} catch (e) {
				c = o
			}
		}();
		var i, u = [],
			s = !1,
			h = -1;

		function f() {
			s && i && (s = !1, i.length ? u = i.concat(u) : h = -1, u.length && v())
		}

		function v() {
			if (!s) {
				var e = l(f);
				s = !0;
				for (var t = u.length; t;) {
					for (i = u, u = []; ++h < t;) i && i[h].run();
					h = -1, t = u.length
				}
				i = null, s = !1,
					function(e) {
						if (c === clearTimeout) return clearTimeout(e);
						if ((c === o || !c) && clearTimeout) return c = clearTimeout, clearTimeout(e);
						try {
							c(e)
						} catch (t) {
							try {
								return c.call(null, e)
							} catch (t) {
								return c.call(this, e)
							}
						}
					}(e)
			}
		}

		function d(e, t) {
			this.fun = e, this.array = t
		}

		function p() {}
		r.nextTick = function(e) {
			var t = new Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
			u.push(new d(e, t)), 1 !== u.length || s || l(v)
		}, d.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = p, r.addListener = p, r.once = p, r.off = p, r.removeListener = p, r.removeAllListeners = p, r.emit = p, r.prependListener = p, r.prependOnceListener = p, r.listeners = function(e) {
			return []
		}, r.binding = function(e) {
			throw new Error("process.binding is not supported")
		}, r.cwd = function() {
			return "/"
		}, r.chdir = function(e) {
			throw new Error("process.chdir is not supported")
		}, r.umask = function() {
			return 0
		}
	}, function(e, t, n) {
		var c = n(28);
		e.exports = function(e, t) {
			if (!c(e)) return e;
			var n, r;
			if (t && "function" == typeof(n = e.toString) && !c(r = n.call(e))) return r;
			if ("function" == typeof(n = e.valueOf) && !c(r = n.call(e))) return r;
			if (!t && "function" == typeof(n = e.toString) && !c(r = n.call(e))) return r;
			throw TypeError("Can't convert object to primitive value")
		}
	}, function(e, t) {
		e.exports = function(e) {
			if (void 0 == e) throw TypeError("Can't call method on  " + e);
			return e
		}
	}, function(e, t) {
		var n = Math.ceil,
			c = Math.floor;
		e.exports = function(e) {
			return isNaN(e = +e) ? 0 : (e > 0 ? c : n)(e)
		}
	}, function(e, t, n) {
		var c = n(56)("keys"),
			r = n(44);
		e.exports = function(e) {
			return c[e] || (c[e] = r(e))
		}
	}, function(e, t, n) {
		var c = n(17),
			r = n(16),
			a = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
		(e.exports = function(e, t) {
			return a[e] || (a[e] = void 0 !== t ? t : {})
		})("versions", []).push({
			version: c.version,
			mode: n(43) ? "pure" : "global",
			copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
		})
	}, function(e, t) {
		e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
	}, function(e, t) {
		t.f = Object.getOwnPropertySymbols
	}, function(e, t, n) {
		var c = n(53);
		e.exports = function(e) {
			return Object(c(e))
		}
	}, function(e, t) {
		e.exports = {}
	}, function(e, t, n) {
		var c = n(34),
			r = n(185),
			a = n(57),
			o = n(55)("IE_PROTO"),
			l = function() {},
			i = function() {
				var e, t = n(89)("iframe"),
					c = a.length;
				for (t.style.display = "none", n(186).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), i = e.F; c--;) delete i.prototype[a[c]];
				return i()
			};
		e.exports = Object.create || function(e, t) {
			var n;
			return null !== e ? (l.prototype = c(e), n = new l, l.prototype = null, n[o] = e) : n = i(), void 0 === t ? n : r(n, t)
		}
	}, function(e, t, n) {
		var c = n(22).f,
			r = n(23),
			a = n(30)("toStringTag");
		e.exports = function(e, t, n) {
			e && !r(e = n ? e : e.prototype, a) && c(e, a, {
				configurable: !0,
				value: t
			})
		}
	}, function(e, t, n) {
		t.f = n(30)
	}, function(e, t, n) {
		var c = n(16),
			r = n(17),
			a = n(43),
			o = n(63),
			l = n(22).f;
		e.exports = function(e) {
			var t = r.Symbol || (r.Symbol = a ? {} : c.Symbol || {});
			"_" == e.charAt(0) || e in t || l(t, e, {
				value: o.f(e)
			})
		}
	}, function(e, t, n) {
		"use strict";

		function c(e) {
			return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var r = p(n(0)),
			a = v(n(4)),
			o = p(n(228)),
			l = v(n(102)),
			i = v(n(231)),
			u = n(232),
			s = v(n(33)),
			h = v(n(50)),
			f = n(233);

		function v(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function d() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return d = function() {
				return e
			}, e
		}

		function p(e) {
			if (e && e.__esModule) return e;
			if (null === e || "object" !== c(e) && "function" !== typeof e) return {
				default: e
			};
			var t = d();
			if (t && t.has(e)) return t.get(e);
			var n = {},
				r = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var a in e)
				if (Object.prototype.hasOwnProperty.call(e, a)) {
					var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
					o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
				}
			return n.default = e, t && t.set(e, n), n
		}

		function m() {
			return (m = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
				}
				return e
			}).apply(this, arguments)
		}

		function z(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var y, g = function(e, t) {
			var n = {};
			for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && t.indexOf(c) < 0 && (n[c] = e[c]);
			if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
				var r = 0;
				for (c = Object.getOwnPropertySymbols(e); r < c.length; r++) t.indexOf(c[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, c[r]) && (n[c[r]] = e[c[r]])
			}
			return n
		};
		l.default.add.apply(l.default, function(e) {
			if (Array.isArray(e)) {
				for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
				return n
			}
		}(y = Object.keys(o).map((function(e) {
			return o[e]
		}))) || function(e) {
			if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
		}(y) || function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance")
		}()), (0, f.setTwoToneColor)("#1890ff");
		var M, b = "outlined";
		var H = function(e) {
			var t, n = e.className,
				c = e.type,
				o = e.component,
				i = e.viewBox,
				f = e.spin,
				v = e.rotate,
				d = e.tabIndex,
				p = e.onClick,
				y = e.children,
				H = e.theme,
				V = e.twoToneColor,
				w = g(e, ["className", "type", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children", "theme", "twoToneColor"]);
			(0, s.default)(Boolean(c || o || y), "Icon", "Should have `type` prop or `component` prop or `children`.");
			var _ = (0, a.default)((z(t = {}, "anticon", !0), z(t, "anticon-".concat(c), Boolean(c)), t), n),
				C = (0, a.default)(z({}, "anticon-spin", !!f || "loading" === c)),
				O = v ? {
					msTransform: "rotate(".concat(v, "deg)"),
					transform: "rotate(".concat(v, "deg)")
				} : void 0,
				S = m(m({}, u.svgBaseProps), {
					className: C,
					style: O,
					viewBox: i
				});
			i || delete S.viewBox;
			var L = d;
			return void 0 === L && p && (L = -1), r.createElement(h.default, {
				componentName: "Icon"
			}, (function(e) {
				return r.createElement("i", m({
					"aria-label": c && "".concat(e.icon, ": ").concat(c)
				}, w, {
					tabIndex: L,
					onClick: p,
					className: _
				}), function() {
					if (o) return r.createElement(o, S, y);
					if (y) return (0, s.default)(Boolean(i) || 1 === r.Children.count(y) && r.isValidElement(y) && "use" === r.Children.only(y).type, "Icon", "Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."), r.createElement("svg", m({}, S, {
						viewBox: i
					}), y);
					if ("string" === typeof c) {
						var e = c;
						if (H) {
							var t = (0, u.getThemeFromTypeName)(c);
							(0, s.default)(!t || H === t, "Icon", "The icon name '".concat(c, "' already specify a theme '").concat(t, "',") + " the 'theme' prop '".concat(H, "' will be ignored."))
						}
						return e = (0, u.withThemeSuffix)((0, u.removeTypeTheme)((0, u.alias)(e)), M || H || b), r.createElement(l.default, {
							className: C,
							type: e,
							primaryColor: V,
							style: O
						})
					}
				}())
			}))
		};
		H.createFromIconfontCN = i.default, H.getTwoToneColor = f.getTwoToneColor, H.setTwoToneColor = f.setTwoToneColor;
		var V = H;
		t.default = V
	}, function(e, t, n) {
		"use strict";
		! function e() {
			if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
				0;
				try {
					__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
				} catch (t) {
					console.error(t)
				}
			}
		}(), e.exports = n(111)
	}, function(e, t, n) {
		"use strict";
		var c = Object.getOwnPropertySymbols,
			r = Object.prototype.hasOwnProperty,
			a = Object.prototype.propertyIsEnumerable;

		function o(e) {
			if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
			return Object(e)
		}
		e.exports = function() {
			try {
				if (!Object.assign) return !1;
				var e = new String("abc");
				if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
				for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
				if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
						return t[e]
					})).join("")) return !1;
				var c = {};
				return "abcdefghijklmnopqrst".split("").forEach((function(e) {
					c[e] = e
				})), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, c)).join("")
			} catch (r) {
				return !1
			}
		}() ? Object.assign : function(e, t) {
			for (var n, l, i = o(e), u = 1; u < arguments.length; u++) {
				for (var s in n = Object(arguments[u])) r.call(n, s) && (i[s] = n[s]);
				if (c) {
					l = c(n);
					for (var h = 0; h < l.length; h++) a.call(n, l[h]) && (i[l[h]] = n[l[h]])
				}
			}
			return i
		}
	}, , function(e, t, n) {
		"use strict";
		n(25), n(117)
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), Object.defineProperty(t, "Row", {
			enumerable: !0,
			get: function() {
				return c.default
			}
		}), Object.defineProperty(t, "Col", {
			enumerable: !0,
			get: function() {
				return r.default
			}
		});
		var c = a(n(118)),
			r = a(n(147));

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var c = l(n(126)),
			r = l(n(72)),
			a = l(n(73)),
			o = l(n(128));

		function l(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var i = {
			locale: "en",
			Pagination: c.default,
			DatePicker: r.default,
			TimePicker: a.default,
			Calendar: o.default,
			global: {
				placeholder: "Please select"
			},
			Table: {
				filterTitle: "Filter menu",
				filterConfirm: "OK",
				filterReset: "Reset",
				selectAll: "Select current page",
				selectInvert: "Invert current page",
				sortTitle: "Sort",
				expand: "Expand row",
				collapse: "Collapse row"
			},
			Modal: {
				okText: "OK",
				cancelText: "Cancel",
				justOkText: "OK"
			},
			Popconfirm: {
				okText: "OK",
				cancelText: "Cancel"
			},
			Transfer: {
				titles: ["", ""],
				searchPlaceholder: "Search here",
				itemUnit: "item",
				itemsUnit: "items"
			},
			Upload: {
				uploading: "Uploading...",
				removeFile: "Remove file",
				uploadError: "Upload error",
				previewFile: "Preview file",
				downloadFile: "Download file"
			},
			Empty: {
				description: "No Data"
			},
			Icon: {
				icon: "icon"
			},
			Text: {
				edit: "Edit",
				copy: "Copy",
				copied: "Copied",
				expand: "Expand"
			},
			PageHeader: {
				back: "Back"
			}
		};
		t.default = i
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var c = a(n(127)),
			r = a(n(73));

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function o() {
			return (o = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
				}
				return e
			}).apply(this, arguments)
		}
		var l = {
			lang: o({
				placeholder: "Select date",
				rangePlaceholder: ["Start date", "End date"]
			}, c.default),
			timePickerLocale: o({}, r.default)
		};
		t.default = l
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var c = {
			placeholder: "Select time"
		};
		t.default = c
	}, function(e, t, n) {
		"use strict";
		var c = function() {};
		e.exports = c
	}, function(e, t, n) {
		"use strict";
		var c;
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var r = (0, ((c = n(46)) && c.__esModule ? c : {
			default: c
		}).default)({});
		t.default = r
	}, function(e, t) {
		e.exports = {
			isFunction: function(e) {
				return "function" === typeof e
			},
			isArray: function(e) {
				return "[object Array]" === Object.prototype.toString.apply(e)
			},
			each: function(e, t) {
				for (var n = 0, c = e.length; n < c && !1 !== t(e[n], n); n++);
			}
		}
	}, function(e, t, n) {
		"use strict";
		n(25), n(148), n(149), n(38), n(39)
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			return function() {
				for (var n = new Array(arguments.length), c = 0; c < n.length; c++) n[c] = arguments[c];
				return e.apply(t, n)
			}
		}
	}, function(e, t, n) {
		"use strict";
		var c = n(11);

		function r(e) {
			return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
		}
		e.exports = function(e, t, n) {
			if (!t) return e;
			var a;
			if (n) a = n(t);
			else if (c.isURLSearchParams(t)) a = t.toString();
			else {
				var o = [];
				c.forEach(t, (function(e, t) {
					null !== e && "undefined" !== typeof e && (c.isArray(e) ? t += "[]" : e = [e], c.forEach(e, (function(e) {
						c.isDate(e) ? e = e.toISOString() : c.isObject(e) && (e = JSON.stringify(e)), o.push(r(t) + "=" + r(e))
					})))
				})), a = o.join("&")
			}
			if (a) {
				var l = e.indexOf("#"); - 1 !== l && (e = e.slice(0, l)), e += (-1 === e.indexOf("?") ? "?" : "&") + a
			}
			return e
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return !(!e || !e.__CANCEL__)
		}
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var c = n(11),
				r = n(156),
				a = {
					"Content-Type": "application/x-www-form-urlencoded"
				};

			function o(e, t) {
				!c.isUndefined(e) && c.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
			}
			var l = {
				adapter: function() {
					var e;
					return ("undefined" !== typeof XMLHttpRequest || "undefined" !== typeof t && "[object process]" === Object.prototype.toString.call(t)) && (e = n(82)), e
				}(),
				transformRequest: [function(e, t) {
					return r(t, "Accept"), r(t, "Content-Type"), c.isFormData(e) || c.isArrayBuffer(e) || c.isBuffer(e) || c.isStream(e) || c.isFile(e) || c.isBlob(e) ? e : c.isArrayBufferView(e) ? e.buffer : c.isURLSearchParams(e) ? (o(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : c.isObject(e) ? (o(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
				}],
				transformResponse: [function(e) {
					if ("string" === typeof e) try {
						e = JSON.parse(e)
					} catch (t) {}
					return e
				}],
				timeout: 0,
				xsrfCookieName: "XSRF-TOKEN",
				xsrfHeaderName: "X-XSRF-TOKEN",
				maxContentLength: -1,
				validateStatus: function(e) {
					return e >= 200 && e < 300
				},
				headers: {
					common: {
						Accept: "application/json, text/plain, */*"
					}
				}
			};
			c.forEach(["delete", "get", "head"], (function(e) {
				l.headers[e] = {}
			})), c.forEach(["post", "put", "patch"], (function(e) {
				l.headers[e] = c.merge(a)
			})), e.exports = l
		}).call(this, n(51))
	}, function(e, t, n) {
		"use strict";
		var c = n(11),
			r = n(157),
			a = n(79),
			o = n(159),
			l = n(162),
			i = n(163),
			u = n(83);
		e.exports = function(e) {
			return new Promise((function(t, s) {
				var h = e.data,
					f = e.headers;
				c.isFormData(h) && delete f["Content-Type"];
				var v = new XMLHttpRequest;
				if (e.auth) {
					var d = e.auth.username || "",
						p = e.auth.password || "";
					f.Authorization = "Basic " + btoa(d + ":" + p)
				}
				var m = o(e.baseURL, e.url);
				if (v.open(e.method.toUpperCase(), a(m, e.params, e.paramsSerializer), !0), v.timeout = e.timeout, v.onreadystatechange = function() {
						if (v && 4 === v.readyState && (0 !== v.status || v.responseURL && 0 === v.responseURL.indexOf("file:"))) {
							var n = "getAllResponseHeaders" in v ? l(v.getAllResponseHeaders()) : null,
								c = {
									data: e.responseType && "text" !== e.responseType ? v.response : v.responseText,
									status: v.status,
									statusText: v.statusText,
									headers: n,
									config: e,
									request: v
								};
							r(t, s, c), v = null
						}
					}, v.onabort = function() {
						v && (s(u("Request aborted", e, "ECONNABORTED", v)), v = null)
					}, v.onerror = function() {
						s(u("Network Error", e, null, v)), v = null
					}, v.ontimeout = function() {
						var t = "timeout of " + e.timeout + "ms exceeded";
						e.timeoutErrorMessage && (t = e.timeoutErrorMessage), s(u(t, e, "ECONNABORTED", v)), v = null
					}, c.isStandardBrowserEnv()) {
					var z = n(164),
						y = (e.withCredentials || i(m)) && e.xsrfCookieName ? z.read(e.xsrfCookieName) : void 0;
					y && (f[e.xsrfHeaderName] = y)
				}
				if ("setRequestHeader" in v && c.forEach(f, (function(e, t) {
						"undefined" === typeof h && "content-type" === t.toLowerCase() ? delete f[t] : v.setRequestHeader(t, e)
					})), c.isUndefined(e.withCredentials) || (v.withCredentials = !!e.withCredentials), e.responseType) try {
					v.responseType = e.responseType
				} catch (g) {
					if ("json" !== e.responseType) throw g
				}
				"function" === typeof e.onDownloadProgress && v.addEventListener("progress", e.onDownloadProgress), "function" === typeof e.onUploadProgress && v.upload && v.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
					v && (v.abort(), s(e), v = null)
				})), void 0 === h && (h = null), v.send(h)
			}))
		}
	}, function(e, t, n) {
		"use strict";
		var c = n(158);
		e.exports = function(e, t, n, r, a) {
			var o = new Error(e);
			return c(o, t, n, r, a)
		}
	}, function(e, t, n) {
		"use strict";
		var c = n(11);
		e.exports = function(e, t) {
			t = t || {};
			var n = {},
				r = ["url", "method", "params", "data"],
				a = ["headers", "auth", "proxy"],
				o = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
			c.forEach(r, (function(e) {
				"undefined" !== typeof t[e] && (n[e] = t[e])
			})), c.forEach(a, (function(r) {
				c.isObject(t[r]) ? n[r] = c.deepMerge(e[r], t[r]) : "undefined" !== typeof t[r] ? n[r] = t[r] : c.isObject(e[r]) ? n[r] = c.deepMerge(e[r]) : "undefined" !== typeof e[r] && (n[r] = e[r])
			})), c.forEach(o, (function(c) {
				"undefined" !== typeof t[c] ? n[c] = t[c] : "undefined" !== typeof e[c] && (n[c] = e[c])
			}));
			var l = r.concat(a).concat(o),
				i = Object.keys(t).filter((function(e) {
					return -1 === l.indexOf(e)
				}));
			return c.forEach(i, (function(c) {
				"undefined" !== typeof t[c] ? n[c] = t[c] : "undefined" !== typeof e[c] && (n[c] = e[c])
			})), n
		}
	}, function(e, t, n) {
		"use strict";

		function c(e) {
			this.message = e
		}
		c.prototype.toString = function() {
			return "Cancel" + (this.message ? ": " + this.message : "")
		}, c.prototype.__CANCEL__ = !0, e.exports = c
	}, function(e, t, n) {
		"use strict";
		n.r(t);
		var c = n(3),
			r = n.n(c);
		t.default = function(e, t) {
			for (var n = r()({}, e), c = 0; c < t.length; c++) {
				delete n[t[c]]
			}
			return n
		}
	}, function(e, t, n) {
		var c = n(170);
		e.exports = function(e, t, n) {
			if (c(e), void 0 === t) return e;
			switch (n) {
				case 1:
					return function(n) {
						return e.call(t, n)
					};
				case 2:
					return function(n, c) {
						return e.call(t, n, c)
					};
				case 3:
					return function(n, c, r) {
						return e.call(t, n, c, r)
					}
			}
			return function() {
				return e.apply(t, arguments)
			}
		}
	}, function(e, t, n) {
		e.exports = !n(18) && !n(35)((function() {
			return 7 != Object.defineProperty(n(89)("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		}))
	}, function(e, t, n) {
		var c = n(28),
			r = n(16).document,
			a = c(r) && c(r.createElement);
		e.exports = function(e) {
			return a ? r.createElement(e) : {}
		}
	}, function(e, t, n) {
		var c = n(23),
			r = n(29),
			a = n(172)(!1),
			o = n(55)("IE_PROTO");
		e.exports = function(e, t) {
			var n, l = r(e),
				i = 0,
				u = [];
			for (n in l) n != o && c(l, n) && u.push(n);
			for (; t.length > i;) c(l, n = t[i++]) && (~a(u, n) || u.push(n));
			return u
		}
	}, function(e, t, n) {
		var c = n(92);
		e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
			return "String" == c(e) ? e.split("") : Object(e)
		}
	}, function(e, t) {
		var n = {}.toString;
		e.exports = function(e) {
			return n.call(e).slice(8, -1)
		}
	}, function(e, t, n) {
		e.exports = {
			default: n(178),
			__esModule: !0
		}
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var c = o(n(180)),
			r = o(n(192)),
			a = "function" === typeof r.default && "symbol" === typeof c.default ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
			};

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		t.default = "function" === typeof r.default && "symbol" === a(c.default) ? function(e) {
			return "undefined" === typeof e ? "undefined" : a(e)
		} : function(e) {
			return e && "function" === typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : "undefined" === typeof e ? "undefined" : a(e)
		}
	}, function(e, t, n) {
		"use strict";
		var c = n(43),
			r = n(26),
			a = n(96),
			o = n(27),
			l = n(60),
			i = n(184),
			u = n(62),
			s = n(187),
			h = n(30)("iterator"),
			f = !([].keys && "next" in [].keys()),
			v = function() {
				return this
			};
		e.exports = function(e, t, n, d, p, m, z) {
			i(n, t, d);
			var y, g, M, b = function(e) {
					if (!f && e in _) return _[e];
					switch (e) {
						case "keys":
						case "values":
							return function() {
								return new n(this, e)
							}
					}
					return function() {
						return new n(this, e)
					}
				},
				H = t + " Iterator",
				V = "values" == p,
				w = !1,
				_ = e.prototype,
				C = _[h] || _["@@iterator"] || p && _[p],
				O = C || b(p),
				S = p ? V ? b("entries") : O : void 0,
				L = "Array" == t && _.entries || C;
			if (L && (M = s(L.call(new e))) !== Object.prototype && M.next && (u(M, H, !0), c || "function" == typeof M[h] || o(M, h, v)), V && C && "values" !== C.name && (w = !0, O = function() {
					return C.call(this)
				}), c && !z || !f && !w && _[h] || o(_, h, O), l[t] = O, l[H] = v, p)
				if (y = {
						values: V ? O : b("values"),
						keys: m ? O : b("keys"),
						entries: S
					}, z)
					for (g in y) g in _ || a(_, g, y[g]);
				else r(r.P + r.F * (f || w), t, y);
			return y
		}
	}, function(e, t, n) {
		e.exports = n(27)
	}, function(e, t, n) {
		var c = n(90),
			r = n(57).concat("length", "prototype");
		t.f = Object.getOwnPropertyNames || function(e) {
			return c(e, r)
		}
	}, function(e, t, n) {
		var c = n(45),
			r = n(41),
			a = n(29),
			o = n(52),
			l = n(23),
			i = n(88),
			u = Object.getOwnPropertyDescriptor;
		t.f = n(18) ? u : function(e, t) {
			if (e = a(e), t = o(t, !0), i) try {
				return u(e, t)
			} catch (n) {}
			if (l(e, t)) return r(!c.f.call(e, t), e[t])
		}
	}, function(e, t) {
		e.exports = function(e) {
			var t = typeof e;
			return null != e && ("object" == t || "function" == t)
		}
	}, function(e, t, n) {
		var c = n(219),
			r = "object" == typeof self && self && self.Object === Object && self,
			a = c || r || Function("return this")();
		e.exports = a
	}, function(e, t, n) {
		var c = n(100).Symbol;
		e.exports = c
	}, function(e, t, n) {
		"use strict";
		n.r(t);
		var c = n(2),
			r = n.n(c),
			a = n(3),
			o = n.n(a),
			l = n(19),
			i = n.n(l),
			u = n(5),
			s = n.n(u),
			h = n(6),
			f = n.n(h),
			v = n(7),
			d = n.n(v),
			p = n(8),
			m = n.n(p),
			z = n(0),
			y = n(21),
			g = {
				primaryColor: "#333",
				secondaryColor: "#E6E6E6"
			},
			M = function(e) {
				function t() {
					return s()(this, t), d()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
				}
				return m()(t, e), f()(t, [{
					key: "render",
					value: function() {
						var e, n = this.props,
							c = n.type,
							a = n.className,
							l = n.onClick,
							u = n.style,
							s = n.primaryColor,
							h = n.secondaryColor,
							f = i()(n, ["type", "className", "onClick", "style", "primaryColor", "secondaryColor"]),
							v = void 0,
							d = g;
						if (s && (d = {
								primaryColor: s,
								secondaryColor: h || Object(y.c)(s)
							}), Object(y.d)(c)) v = c;
						else if ("string" === typeof c && !(v = t.get(c, d))) return null;
						return v ? (v && "function" === typeof v.icon && (v = o()({}, v, {
							icon: v.icon(d.primaryColor, d.secondaryColor)
						})), Object(y.b)(v.icon, "svg-" + v.name, o()((e = {
							className: a,
							onClick: l,
							style: u
						}, r()(e, "data-icon", v.name), r()(e, "width", "1em"), r()(e, "height", "1em"), r()(e, "fill", "currentColor"), r()(e, "aria-hidden", "true"), r()(e, "focusable", "false"), e), f))) : (Object(y.e)("type should be string or icon definiton, but got " + c), null)
					}
				}], [{
					key: "add",
					value: function() {
						for (var e = this, t = arguments.length, n = Array(t), c = 0; c < t; c++) n[c] = arguments[c];
						n.forEach((function(t) {
							e.definitions.set(Object(y.f)(t.name, t.theme), t)
						}))
					}
				}, {
					key: "clear",
					value: function() {
						this.definitions.clear()
					}
				}, {
					key: "get",
					value: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
						if (e) {
							var n = this.definitions.get(e);
							return n && "function" === typeof n.icon && (n = o()({}, n, {
								icon: n.icon(t.primaryColor, t.secondaryColor)
							})), n
						}
					}
				}, {
					key: "setTwoToneColors",
					value: function(e) {
						var t = e.primaryColor,
							n = e.secondaryColor;
						g.primaryColor = t, g.secondaryColor = n || Object(y.c)(t)
					}
				}, {
					key: "getTwoToneColors",
					value: function() {
						return o()({}, g)
					}
				}]), t
			}(z.Component);
		M.displayName = "IconReact", M.definitions = new y.a;
		var b = M;
		n.d(t, "default", (function() {
			return b
		}))
	}, , , function(e, t, n) {
		"use strict";
		var c = this && this.__importDefault || function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = c(n(229));
		t.generate = r.default;
		var a = {
			red: "#F5222D",
			volcano: "#FA541C",
			orange: "#FA8C16",
			gold: "#FAAD14",
			yellow: "#FADB14",
			lime: "#A0D911",
			green: "#52C41A",
			cyan: "#13C2C2",
			blue: "#1890FF",
			geekblue: "#2F54EB",
			purple: "#722ED1",
			magenta: "#EB2F96",
			grey: "#666666"
		};
		t.presetPrimaryColors = a;
		var o = {};
		t.presetPalettes = o, Object.keys(a).forEach((function(e) {
			o[e] = r.default(a[e]), o[e].primary = o[e][5]
		}));
		var l = o.red;
		t.red = l;
		var i = o.volcano;
		t.volcano = i;
		var u = o.gold;
		t.gold = u;
		var s = o.orange;
		t.orange = s;
		var h = o.yellow;
		t.yellow = h;
		var f = o.lime;
		t.lime = f;
		var v = o.green;
		t.green = v;
		var d = o.cyan;
		t.cyan = d;
		var p = o.blue;
		t.blue = p;
		var m = o.geekblue;
		t.geekblue = m;
		var z = o.purple;
		t.purple = z;
		var y = o.magenta;
		t.magenta = y;
		var g = o.grey;
		t.grey = g
	}, function(e, t, n) {
		"use strict";

		function c(e) {
			return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var r, a = function(e) {
				if (e && e.__esModule) return e;
				if (null === e || "object" !== c(e) && "function" !== typeof e) return {
					default: e
				};
				var t = i();
				if (t && t.has(e)) return t.get(e);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in e)
					if (Object.prototype.hasOwnProperty.call(e, a)) {
						var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
						o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
					}
				n.default = e, t && t.set(e, n);
				return n
			}(n(0)),
			o = (r = n(4)) && r.__esModule ? r : {
				default: r
			},
			l = n(15);

		function i() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return i = function() {
				return e
			}, e
		}

		function u() {
			return (u = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
				}
				return e
			}).apply(this, arguments)
		}

		function s(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var h = function(e, t) {
				var n = {};
				for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && t.indexOf(c) < 0 && (n[c] = e[c]);
				if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (c = Object.getOwnPropertySymbols(e); r < c.length; r++) t.indexOf(c[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, c[r]) && (n[c[r]] = e[c[r]])
				}
				return n
			},
			f = function(e) {
				return a.createElement(l.ConfigConsumer, null, (function(t) {
					var n, c = t.getPrefixCls,
						r = e.prefixCls,
						l = e.type,
						i = void 0 === l ? "horizontal" : l,
						f = e.orientation,
						v = void 0 === f ? "center" : f,
						d = e.className,
						p = e.children,
						m = e.dashed,
						z = h(e, ["prefixCls", "type", "orientation", "className", "children", "dashed"]),
						y = c("divider", r),
						g = v.length > 0 ? "-".concat(v) : v,
						M = (0, o.default)(d, y, "".concat(y, "-").concat(i), (s(n = {}, "".concat(y, "-with-text").concat(g), p), s(n, "".concat(y, "-dashed"), !!m), n));
					return a.createElement("div", u({
						className: M
					}, z, {
						role: "separator"
					}), p && a.createElement("span", {
						className: "".concat(y, "-inner-text")
					}, p))
				}))
			};
		t.default = f
	}, , , , function(e, t, n) {
		"use strict";
		var c = n(67),
			r = "function" === typeof Symbol && Symbol.for,
			a = r ? Symbol.for("react.element") : 60103,
			o = r ? Symbol.for("react.portal") : 60106,
			l = r ? Symbol.for("react.fragment") : 60107,
			i = r ? Symbol.for("react.strict_mode") : 60108,
			u = r ? Symbol.for("react.profiler") : 60114,
			s = r ? Symbol.for("react.provider") : 60109,
			h = r ? Symbol.for("react.context") : 60110,
			f = r ? Symbol.for("react.forward_ref") : 60112,
			v = r ? Symbol.for("react.suspense") : 60113,
			d = r ? Symbol.for("react.memo") : 60115,
			p = r ? Symbol.for("react.lazy") : 60116,
			m = "function" === typeof Symbol && Symbol.iterator;

		function z(e) {
			for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
			return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		}
		var y = {
				isMounted: function() {
					return !1
				},
				enqueueForceUpdate: function() {},
				enqueueReplaceState: function() {},
				enqueueSetState: function() {}
			},
			g = {};

		function M(e, t, n) {
			this.props = e, this.context = t, this.refs = g, this.updater = n || y
		}

		function b() {}

		function H(e, t, n) {
			this.props = e, this.context = t, this.refs = g, this.updater = n || y
		}
		M.prototype.isReactComponent = {}, M.prototype.setState = function(e, t) {
			if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error(z(85));
			this.updater.enqueueSetState(this, e, t, "setState")
		}, M.prototype.forceUpdate = function(e) {
			this.updater.enqueueForceUpdate(this, e, "forceUpdate")
		}, b.prototype = M.prototype;
		var V = H.prototype = new b;
		V.constructor = H, c(V, M.prototype), V.isPureReactComponent = !0;
		var w = {
				current: null
			},
			_ = Object.prototype.hasOwnProperty,
			C = {
				key: !0,
				ref: !0,
				__self: !0,
				__source: !0
			};

		function O(e, t, n) {
			var c, r = {},
				o = null,
				l = null;
			if (null != t)
				for (c in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (o = "" + t.key), t) _.call(t, c) && !C.hasOwnProperty(c) && (r[c] = t[c]);
			var i = arguments.length - 2;
			if (1 === i) r.children = n;
			else if (1 < i) {
				for (var u = Array(i), s = 0; s < i; s++) u[s] = arguments[s + 2];
				r.children = u
			}
			if (e && e.defaultProps)
				for (c in i = e.defaultProps) void 0 === r[c] && (r[c] = i[c]);
			return {
				$$typeof: a,
				type: e,
				key: o,
				ref: l,
				props: r,
				_owner: w.current
			}
		}

		function S(e) {
			return "object" === typeof e && null !== e && e.$$typeof === a
		}
		var L = /\/+/g,
			T = [];

		function k(e, t, n, c) {
			if (T.length) {
				var r = T.pop();
				return r.result = e, r.keyPrefix = t, r.func = n, r.context = c, r.count = 0, r
			}
			return {
				result: e,
				keyPrefix: t,
				func: n,
				context: c,
				count: 0
			}
		}

		function x(e) {
			e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > T.length && T.push(e)
		}

		function E(e, t, n) {
			return null == e ? 0 : function e(t, n, c, r) {
				var l = typeof t;
				"undefined" !== l && "boolean" !== l || (t = null);
				var i = !1;
				if (null === t) i = !0;
				else switch (l) {
					case "string":
					case "number":
						i = !0;
						break;
					case "object":
						switch (t.$$typeof) {
							case a:
							case o:
								i = !0
						}
				}
				if (i) return c(r, t, "" === n ? "." + P(t, 0) : n), 1;
				if (i = 0, n = "" === n ? "." : n + ":", Array.isArray(t))
					for (var u = 0; u < t.length; u++) {
						var s = n + P(l = t[u], u);
						i += e(l, s, c, r)
					} else if (null === t || "object" !== typeof t ? s = null : s = "function" === typeof(s = m && t[m] || t["@@iterator"]) ? s : null, "function" === typeof s)
						for (t = s.call(t), u = 0; !(l = t.next()).done;) i += e(l = l.value, s = n + P(l, u++), c, r);
					else if ("object" === l) throw c = "" + t, Error(z(31, "[object Object]" === c ? "object with keys {" + Object.keys(t).join(", ") + "}" : c, ""));
				return i
			}(e, "", t, n)
		}

		function P(e, t) {
			return "object" === typeof e && null !== e && null != e.key ? function(e) {
				var t = {
					"=": "=0",
					":": "=2"
				};
				return "$" + ("" + e).replace(/[=:]/g, (function(e) {
					return t[e]
				}))
			}(e.key) : t.toString(36)
		}

		function F(e, t) {
			e.func.call(e.context, t, e.count++)
		}

		function A(e, t, n) {
			var c = e.result,
				r = e.keyPrefix;
			e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? j(e, c, n, (function(e) {
				return e
			})) : null != e && (S(e) && (e = function(e, t) {
				return {
					$$typeof: a,
					type: e.type,
					key: t,
					ref: e.ref,
					props: e.props,
					_owner: e._owner
				}
			}(e, r + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(L, "$&/") + "/") + n)), c.push(e))
		}

		function j(e, t, n, c, r) {
			var a = "";
			null != n && (a = ("" + n).replace(L, "$&/") + "/"), E(e, A, t = k(t, a, c, r)), x(t)
		}
		var D = {
			current: null
		};

		function N() {
			var e = D.current;
			if (null === e) throw Error(z(321));
			return e
		}
		var R = {
			ReactCurrentDispatcher: D,
			ReactCurrentBatchConfig: {
				suspense: null
			},
			ReactCurrentOwner: w,
			IsSomeRendererActing: {
				current: !1
			},
			assign: c
		};
		t.Children = {
			map: function(e, t, n) {
				if (null == e) return e;
				var c = [];
				return j(e, c, null, t, n), c
			},
			forEach: function(e, t, n) {
				if (null == e) return e;
				E(e, F, t = k(null, null, t, n)), x(t)
			},
			count: function(e) {
				return E(e, (function() {
					return null
				}), null)
			},
			toArray: function(e) {
				var t = [];
				return j(e, t, null, (function(e) {
					return e
				})), t
			},
			only: function(e) {
				if (!S(e)) throw Error(z(143));
				return e
			}
		}, t.Component = M, t.Fragment = l, t.Profiler = u, t.PureComponent = H, t.StrictMode = i, t.Suspense = v, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R, t.cloneElement = function(e, t, n) {
			if (null === e || void 0 === e) throw Error(z(267, e));
			var r = c({}, e.props),
				o = e.key,
				l = e.ref,
				i = e._owner;
			if (null != t) {
				if (void 0 !== t.ref && (l = t.ref, i = w.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
				for (s in t) _.call(t, s) && !C.hasOwnProperty(s) && (r[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s])
			}
			var s = arguments.length - 2;
			if (1 === s) r.children = n;
			else if (1 < s) {
				u = Array(s);
				for (var h = 0; h < s; h++) u[h] = arguments[h + 2];
				r.children = u
			}
			return {
				$$typeof: a,
				type: e.type,
				key: o,
				ref: l,
				props: r,
				_owner: i
			}
		}, t.createContext = function(e, t) {
			return void 0 === t && (t = null), (e = {
				$$typeof: h,
				_calculateChangedBits: t,
				_currentValue: e,
				_currentValue2: e,
				_threadCount: 0,
				Provider: null,
				Consumer: null
			}).Provider = {
				$$typeof: s,
				_context: e
			}, e.Consumer = e
		}, t.createElement = O, t.createFactory = function(e) {
			var t = O.bind(null, e);
			return t.type = e, t
		}, t.createRef = function() {
			return {
				current: null
			}
		}, t.forwardRef = function(e) {
			return {
				$$typeof: f,
				render: e
			}
		}, t.isValidElement = S, t.lazy = function(e) {
			return {
				$$typeof: p,
				_ctor: e,
				_status: -1,
				_result: null
			}
		}, t.memo = function(e, t) {
			return {
				$$typeof: d,
				type: e,
				compare: void 0 === t ? null : t
			}
		}, t.useCallback = function(e, t) {
			return N().useCallback(e, t)
		}, t.useContext = function(e, t) {
			return N().useContext(e, t)
		}, t.useDebugValue = function() {}, t.useEffect = function(e, t) {
			return N().useEffect(e, t)
		}, t.useImperativeHandle = function(e, t, n) {
			return N().useImperativeHandle(e, t, n)
		}, t.useLayoutEffect = function(e, t) {
			return N().useLayoutEffect(e, t)
		}, t.useMemo = function(e, t) {
			return N().useMemo(e, t)
		}, t.useReducer = function(e, t, n) {
			return N().useReducer(e, t, n)
		}, t.useRef = function(e) {
			return N().useRef(e)
		}, t.useState = function(e) {
			return N().useState(e)
		}, t.version = "16.13.0"
	}, function(e, t, n) {
		"use strict";
		var c = n(0),
			r = n(67),
			a = n(112);

		function o(e) {
			for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
			return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		}
		if (!c) throw Error(o(227));

		function l(e, t, n, c, r, a, o, l, i) {
			var u = Array.prototype.slice.call(arguments, 3);
			try {
				t.apply(n, u)
			} catch (s) {
				this.onError(s)
			}
		}
		var i = !1,
			u = null,
			s = !1,
			h = null,
			f = {
				onError: function(e) {
					i = !0, u = e
				}
			};

		function v(e, t, n, c, r, a, o, s, h) {
			i = !1, u = null, l.apply(f, arguments)
		}
		var d = null,
			p = null,
			m = null;

		function z(e, t, n) {
			var c = e.type || "unknown-event";
			e.currentTarget = m(n),
				function(e, t, n, c, r, a, l, f, d) {
					if (v.apply(this, arguments), i) {
						if (!i) throw Error(o(198));
						var p = u;
						i = !1, u = null, s || (s = !0, h = p)
					}
				}(c, t, void 0, e), e.currentTarget = null
		}
		var y = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
		y.hasOwnProperty("ReactCurrentDispatcher") || (y.ReactCurrentDispatcher = {
			current: null
		}), y.hasOwnProperty("ReactCurrentBatchConfig") || (y.ReactCurrentBatchConfig = {
			suspense: null
		});
		var g = /^(.*)[\\\/]/,
			M = "function" === typeof Symbol && Symbol.for,
			b = M ? Symbol.for("react.element") : 60103,
			H = M ? Symbol.for("react.portal") : 60106,
			V = M ? Symbol.for("react.fragment") : 60107,
			w = M ? Symbol.for("react.strict_mode") : 60108,
			_ = M ? Symbol.for("react.profiler") : 60114,
			C = M ? Symbol.for("react.provider") : 60109,
			O = M ? Symbol.for("react.context") : 60110,
			S = M ? Symbol.for("react.concurrent_mode") : 60111,
			L = M ? Symbol.for("react.forward_ref") : 60112,
			T = M ? Symbol.for("react.suspense") : 60113,
			k = M ? Symbol.for("react.suspense_list") : 60120,
			x = M ? Symbol.for("react.memo") : 60115,
			E = M ? Symbol.for("react.lazy") : 60116,
			P = M ? Symbol.for("react.block") : 60121,
			F = "function" === typeof Symbol && Symbol.iterator;

		function A(e) {
			return null === e || "object" !== typeof e ? null : "function" === typeof(e = F && e[F] || e["@@iterator"]) ? e : null
		}

		function j(e) {
			if (null == e) return null;
			if ("function" === typeof e) return e.displayName || e.name || null;
			if ("string" === typeof e) return e;
			switch (e) {
				case V:
					return "Fragment";
				case H:
					return "Portal";
				case _:
					return "Profiler";
				case w:
					return "StrictMode";
				case T:
					return "Suspense";
				case k:
					return "SuspenseList"
			}
			if ("object" === typeof e) switch (e.$$typeof) {
				case O:
					return "Context.Consumer";
				case C:
					return "Context.Provider";
				case L:
					var t = e.render;
					return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
				case x:
					return j(e.type);
				case P:
					return j(e.render);
				case E:
					if (e = 1 === e._status ? e._result : null) return j(e)
			}
			return null
		}

		function D(e) {
			var t = "";
			do {
				e: switch (e.tag) {
					case 3:
					case 4:
					case 6:
					case 7:
					case 10:
					case 9:
						var n = "";
						break e;
					default:
						var c = e._debugOwner,
							r = e._debugSource,
							a = j(e.type);
						n = null, c && (n = j(c.type)), c = a, a = "", r ? a = " (at " + r.fileName.replace(g, "") + ":" + r.lineNumber + ")" : n && (a = " (created by " + n + ")"), n = "\n    in " + (c || "Unknown") + a
				}
				t += n,
				e = e.return
			} while (e);
			return t
		}
		var N = null,
			R = {};

		function I() {
			if (N)
				for (var e in R) {
					var t = R[e],
						n = N.indexOf(e);
					if (!(-1 < n)) throw Error(o(96, e));
					if (!W[n]) {
						if (!t.extractEvents) throw Error(o(97, e));
						for (var c in W[n] = t, n = t.eventTypes) {
							var r = void 0,
								a = n[c],
								l = t,
								i = c;
							if (Y.hasOwnProperty(i)) throw Error(o(99, i));
							Y[i] = a;
							var u = a.phasedRegistrationNames;
							if (u) {
								for (r in u) u.hasOwnProperty(r) && U(u[r], l, i);
								r = !0
							} else a.registrationName ? (U(a.registrationName, l, i), r = !0) : r = !1;
							if (!r) throw Error(o(98, c, e))
						}
					}
				}
		}

		function U(e, t, n) {
			if (B[e]) throw Error(o(100, e));
			B[e] = t, q[e] = t.eventTypes[n].dependencies
		}
		var W = [],
			Y = {},
			B = {},
			q = {};

		function G(e) {
			var t, n = !1;
			for (t in e)
				if (e.hasOwnProperty(t)) {
					var c = e[t];
					if (!R.hasOwnProperty(t) || R[t] !== c) {
						if (R[t]) throw Error(o(102, t));
						R[t] = c, n = !0
					}
				}
			n && I()
		}
		var K = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
			Q = null,
			$ = null,
			Z = null;

		function X(e) {
			if (e = p(e)) {
				if ("function" !== typeof Q) throw Error(o(280));
				var t = e.stateNode;
				t && (t = d(t), Q(e.stateNode, e.type, t))
			}
		}

		function J(e) {
			$ ? Z ? Z.push(e) : Z = [e] : $ = e
		}

		function ee() {
			if ($) {
				var e = $,
					t = Z;
				if (Z = $ = null, X(e), t)
					for (e = 0; e < t.length; e++) X(t[e])
			}
		}

		function te(e, t) {
			return e(t)
		}

		function ne(e, t, n, c, r) {
			return e(t, n, c, r)
		}

		function ce() {}
		var re = te,
			ae = !1,
			oe = !1;

		function le() {
			null === $ && null === Z || (ce(), ee())
		}

		function ie(e, t, n) {
			if (oe) return e(t, n);
			oe = !0;
			try {
				return re(e, t, n)
			} finally {
				oe = !1, le()
			}
		}
		var ue = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
			se = Object.prototype.hasOwnProperty,
			he = {},
			fe = {};

		function ve(e, t, n, c, r, a) {
			this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = c, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a
		}
		var de = {};
		"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
			de[e] = new ve(e, 0, !1, e, null, !1)
		})), [
			["acceptCharset", "accept-charset"],
			["className", "class"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"]
		].forEach((function(e) {
			var t = e[0];
			de[t] = new ve(t, 1, !1, e[1], null, !1)
		})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
			de[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1)
		})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
			de[e] = new ve(e, 2, !1, e, null, !1)
		})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
			de[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1)
		})), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
			de[e] = new ve(e, 3, !0, e, null, !1)
		})), ["capture", "download"].forEach((function(e) {
			de[e] = new ve(e, 4, !1, e, null, !1)
		})), ["cols", "rows", "size", "span"].forEach((function(e) {
			de[e] = new ve(e, 6, !1, e, null, !1)
		})), ["rowSpan", "start"].forEach((function(e) {
			de[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1)
		}));
		var pe = /[\-:]([a-z])/g;

		function me(e) {
			return e[1].toUpperCase()
		}

		function ze(e, t, n, c) {
			var r = de.hasOwnProperty(t) ? de[t] : null;
			(null !== r ? 0 === r.type : !c && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, c) {
				if (null === t || "undefined" === typeof t || function(e, t, n, c) {
						if (null !== n && 0 === n.type) return !1;
						switch (typeof t) {
							case "function":
							case "symbol":
								return !0;
							case "boolean":
								return !c && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
							default:
								return !1
						}
					}(e, t, n, c)) return !0;
				if (c) return !1;
				if (null !== n) switch (n.type) {
					case 3:
						return !t;
					case 4:
						return !1 === t;
					case 5:
						return isNaN(t);
					case 6:
						return isNaN(t) || 1 > t
				}
				return !1
			}(t, n, r, c) && (n = null), c || null === r ? function(e) {
				return !!se.call(fe, e) || !se.call(he, e) && (ue.test(e) ? fe[e] = !0 : (he[e] = !0, !1))
			}(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : r.mustUseProperty ? e[r.propertyName] = null === n ? 3 !== r.type && "" : n : (t = r.attributeName, c = r.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (r = r.type) || 4 === r && !0 === n ? "" : "" + n, c ? e.setAttributeNS(c, t, n) : e.setAttribute(t, n))))
		}

		function ye(e) {
			switch (typeof e) {
				case "boolean":
				case "number":
				case "object":
				case "string":
				case "undefined":
					return e;
				default:
					return ""
			}
		}

		function ge(e) {
			var t = e.type;
			return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
		}

		function Me(e) {
			e._valueTracker || (e._valueTracker = function(e) {
				var t = ge(e) ? "checked" : "value",
					n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
					c = "" + e[t];
				if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
					var r = n.get,
						a = n.set;
					return Object.defineProperty(e, t, {
						configurable: !0,
						get: function() {
							return r.call(this)
						},
						set: function(e) {
							c = "" + e, a.call(this, e)
						}
					}), Object.defineProperty(e, t, {
						enumerable: n.enumerable
					}), {
						getValue: function() {
							return c
						},
						setValue: function(e) {
							c = "" + e
						},
						stopTracking: function() {
							e._valueTracker = null, delete e[t]
						}
					}
				}
			}(e))
		}

		function be(e) {
			if (!e) return !1;
			var t = e._valueTracker;
			if (!t) return !0;
			var n = t.getValue(),
				c = "";
			return e && (c = ge(e) ? e.checked ? "true" : "false" : e.value), (e = c) !== n && (t.setValue(e), !0)
		}

		function He(e, t) {
			var n = t.checked;
			return r({}, t, {
				defaultChecked: void 0,
				defaultValue: void 0,
				value: void 0,
				checked: null != n ? n : e._wrapperState.initialChecked
			})
		}

		function Ve(e, t) {
			var n = null == t.defaultValue ? "" : t.defaultValue,
				c = null != t.checked ? t.checked : t.defaultChecked;
			n = ye(null != t.value ? t.value : n), e._wrapperState = {
				initialChecked: c,
				initialValue: n,
				controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
			}
		}

		function we(e, t) {
			null != (t = t.checked) && ze(e, "checked", t, !1)
		}

		function _e(e, t) {
			we(e, t);
			var n = ye(t.value),
				c = t.type;
			if (null != n) "number" === c ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
			else if ("submit" === c || "reset" === c) return void e.removeAttribute("value");
			t.hasOwnProperty("value") ? Oe(e, t.type, n) : t.hasOwnProperty("defaultValue") && Oe(e, t.type, ye(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
		}

		function Ce(e, t, n) {
			if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
				var c = t.type;
				if (!("submit" !== c && "reset" !== c || void 0 !== t.value && null !== t.value)) return;
				t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
			}
			"" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
		}

		function Oe(e, t, n) {
			"number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
		}

		function Se(e, t) {
			return e = r({
				children: void 0
			}, t), (t = function(e) {
				var t = "";
				return c.Children.forEach(e, (function(e) {
					null != e && (t += e)
				})), t
			}(t.children)) && (e.children = t), e
		}

		function Le(e, t, n, c) {
			if (e = e.options, t) {
				t = {};
				for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
				for (n = 0; n < e.length; n++) r = t.hasOwnProperty("$" + e[n].value), e[n].selected !== r && (e[n].selected = r), r && c && (e[n].defaultSelected = !0)
			} else {
				for (n = "" + ye(n), t = null, r = 0; r < e.length; r++) {
					if (e[r].value === n) return e[r].selected = !0, void(c && (e[r].defaultSelected = !0));
					null !== t || e[r].disabled || (t = e[r])
				}
				null !== t && (t.selected = !0)
			}
		}

		function Te(e, t) {
			if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
			return r({}, t, {
				value: void 0,
				defaultValue: void 0,
				children: "" + e._wrapperState.initialValue
			})
		}

		function ke(e, t) {
			var n = t.value;
			if (null == n) {
				if (n = t.children, t = t.defaultValue, null != n) {
					if (null != t) throw Error(o(92));
					if (Array.isArray(n)) {
						if (!(1 >= n.length)) throw Error(o(93));
						n = n[0]
					}
					t = n
				}
				null == t && (t = ""), n = t
			}
			e._wrapperState = {
				initialValue: ye(n)
			}
		}

		function xe(e, t) {
			var n = ye(t.value),
				c = ye(t.defaultValue);
			null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != c && (e.defaultValue = "" + c)
		}

		function Ee(e) {
			var t = e.textContent;
			t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
		}
		"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
			var t = e.replace(pe, me);
			de[t] = new ve(t, 1, !1, e, null, !1)
		})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
			var t = e.replace(pe, me);
			de[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1)
		})), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
			var t = e.replace(pe, me);
			de[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1)
		})), ["tabIndex", "crossOrigin"].forEach((function(e) {
			de[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1)
		})), de.xlinkHref = new ve("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function(e) {
			de[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0)
		}));
		var Pe = "http://www.w3.org/1999/xhtml",
			Fe = "http://www.w3.org/2000/svg";

		function Ae(e) {
			switch (e) {
				case "svg":
					return "http://www.w3.org/2000/svg";
				case "math":
					return "http://www.w3.org/1998/Math/MathML";
				default:
					return "http://www.w3.org/1999/xhtml"
			}
		}

		function je(e, t) {
			return null == e || "http://www.w3.org/1999/xhtml" === e ? Ae(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
		}
		var De, Ne = function(e) {
			return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, n, c, r) {
				MSApp.execUnsafeLocalFunction((function() {
					return e(t, n)
				}))
			} : e
		}((function(e, t) {
			if (e.namespaceURI !== Fe || "innerHTML" in e) e.innerHTML = t;
			else {
				for ((De = De || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = De.firstChild; e.firstChild;) e.removeChild(e.firstChild);
				for (; t.firstChild;) e.appendChild(t.firstChild)
			}
		}));

		function Re(e, t) {
			if (t) {
				var n = e.firstChild;
				if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
			}
			e.textContent = t
		}

		function Ie(e, t) {
			var n = {};
			return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
		}
		var Ue = {
				animationend: Ie("Animation", "AnimationEnd"),
				animationiteration: Ie("Animation", "AnimationIteration"),
				animationstart: Ie("Animation", "AnimationStart"),
				transitionend: Ie("Transition", "TransitionEnd")
			},
			We = {},
			Ye = {};

		function Be(e) {
			if (We[e]) return We[e];
			if (!Ue[e]) return e;
			var t, n = Ue[e];
			for (t in n)
				if (n.hasOwnProperty(t) && t in Ye) return We[e] = n[t];
			return e
		}
		K && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete Ue.animationend.animation, delete Ue.animationiteration.animation, delete Ue.animationstart.animation), "TransitionEvent" in window || delete Ue.transitionend.transition);
		var qe = Be("animationend"),
			Ge = Be("animationiteration"),
			Ke = Be("animationstart"),
			Qe = Be("transitionend"),
			$e = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
			Ze = new("function" === typeof WeakMap ? WeakMap : Map);

		function Xe(e) {
			var t = Ze.get(e);
			return void 0 === t && (t = new Map, Ze.set(e, t)), t
		}

		function Je(e) {
			var t = e,
				n = e;
			if (e.alternate)
				for (; t.return;) t = t.return;
			else {
				e = t;
				do {
					0 !== (1026 & (t = e).effectTag) && (n = t.return), e = t.return
				} while (e)
			}
			return 3 === t.tag ? n : null
		}

		function et(e) {
			if (13 === e.tag) {
				var t = e.memoizedState;
				if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
			}
			return null
		}

		function tt(e) {
			if (Je(e) !== e) throw Error(o(188))
		}

		function nt(e) {
			if (!(e = function(e) {
					var t = e.alternate;
					if (!t) {
						if (null === (t = Je(e))) throw Error(o(188));
						return t !== e ? null : e
					}
					for (var n = e, c = t;;) {
						var r = n.return;
						if (null === r) break;
						var a = r.alternate;
						if (null === a) {
							if (null !== (c = r.return)) {
								n = c;
								continue
							}
							break
						}
						if (r.child === a.child) {
							for (a = r.child; a;) {
								if (a === n) return tt(r), e;
								if (a === c) return tt(r), t;
								a = a.sibling
							}
							throw Error(o(188))
						}
						if (n.return !== c.return) n = r, c = a;
						else {
							for (var l = !1, i = r.child; i;) {
								if (i === n) {
									l = !0, n = r, c = a;
									break
								}
								if (i === c) {
									l = !0, c = r, n = a;
									break
								}
								i = i.sibling
							}
							if (!l) {
								for (i = a.child; i;) {
									if (i === n) {
										l = !0, n = a, c = r;
										break
									}
									if (i === c) {
										l = !0, c = a, n = r;
										break
									}
									i = i.sibling
								}
								if (!l) throw Error(o(189))
							}
						}
						if (n.alternate !== c) throw Error(o(190))
					}
					if (3 !== n.tag) throw Error(o(188));
					return n.stateNode.current === n ? e : t
				}(e))) return null;
			for (var t = e;;) {
				if (5 === t.tag || 6 === t.tag) return t;
				if (t.child) t.child.return = t, t = t.child;
				else {
					if (t === e) break;
					for (; !t.sibling;) {
						if (!t.return || t.return === e) return null;
						t = t.return
					}
					t.sibling.return = t.return, t = t.sibling
				}
			}
			return null
		}

		function ct(e, t) {
			if (null == t) throw Error(o(30));
			return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
		}

		function rt(e, t, n) {
			Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
		}
		var at = null;

		function ot(e) {
			if (e) {
				var t = e._dispatchListeners,
					n = e._dispatchInstances;
				if (Array.isArray(t))
					for (var c = 0; c < t.length && !e.isPropagationStopped(); c++) z(e, t[c], n[c]);
				else t && z(e, t, n);
				e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
			}
		}

		function lt(e) {
			if (null !== e && (at = ct(at, e)), e = at, at = null, e) {
				if (rt(e, ot), at) throw Error(o(95));
				if (s) throw e = h, s = !1, h = null, e
			}
		}

		function it(e) {
			return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
		}

		function ut(e) {
			if (!K) return !1;
			var t = (e = "on" + e) in document;
			return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" === typeof t[e]), t
		}
		var st = [];

		function ht(e) {
			e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > st.length && st.push(e)
		}

		function ft(e, t, n, c) {
			if (st.length) {
				var r = st.pop();
				return r.topLevelType = e, r.eventSystemFlags = c, r.nativeEvent = t, r.targetInst = n, r
			}
			return {
				topLevelType: e,
				eventSystemFlags: c,
				nativeEvent: t,
				targetInst: n,
				ancestors: []
			}
		}

		function vt(e) {
			var t = e.targetInst,
				n = t;
			do {
				if (!n) {
					e.ancestors.push(n);
					break
				}
				var c = n;
				if (3 === c.tag) c = c.stateNode.containerInfo;
				else {
					for (; c.return;) c = c.return;
					c = 3 !== c.tag ? null : c.stateNode.containerInfo
				}
				if (!c) break;
				5 !== (t = n.tag) && 6 !== t || e.ancestors.push(n), n = On(c)
			} while (n);
			for (n = 0; n < e.ancestors.length; n++) {
				t = e.ancestors[n];
				var r = it(e.nativeEvent);
				c = e.topLevelType;
				var a = e.nativeEvent,
					o = e.eventSystemFlags;
				0 === n && (o |= 64);
				for (var l = null, i = 0; i < W.length; i++) {
					var u = W[i];
					u && (u = u.extractEvents(c, t, a, r, o)) && (l = ct(l, u))
				}
				lt(l)
			}
		}

		function dt(e, t, n) {
			if (!n.has(e)) {
				switch (e) {
					case "scroll":
						Kt(t, "scroll", !0);
						break;
					case "focus":
					case "blur":
						Kt(t, "focus", !0), Kt(t, "blur", !0), n.set("blur", null), n.set("focus", null);
						break;
					case "cancel":
					case "close":
						ut(e) && Kt(t, e, !0);
						break;
					case "invalid":
					case "submit":
					case "reset":
						break;
					default:
						-1 === $e.indexOf(e) && Gt(e, t)
				}
				n.set(e, null)
			}
		}
		var pt, mt, zt, yt = !1,
			gt = [],
			Mt = null,
			bt = null,
			Ht = null,
			Vt = new Map,
			wt = new Map,
			_t = [],
			Ct = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
			Ot = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

		function St(e, t, n, c, r) {
			return {
				blockedOn: e,
				topLevelType: t,
				eventSystemFlags: 32 | n,
				nativeEvent: r,
				container: c
			}
		}

		function Lt(e, t) {
			switch (e) {
				case "focus":
				case "blur":
					Mt = null;
					break;
				case "dragenter":
				case "dragleave":
					bt = null;
					break;
				case "mouseover":
				case "mouseout":
					Ht = null;
					break;
				case "pointerover":
				case "pointerout":
					Vt.delete(t.pointerId);
					break;
				case "gotpointercapture":
				case "lostpointercapture":
					wt.delete(t.pointerId)
			}
		}

		function Tt(e, t, n, c, r, a) {
			return null === e || e.nativeEvent !== a ? (e = St(t, n, c, r, a), null !== t && (null !== (t = Sn(t)) && mt(t)), e) : (e.eventSystemFlags |= c, e)
		}

		function kt(e) {
			var t = On(e.target);
			if (null !== t) {
				var n = Je(t);
				if (null !== n)
					if (13 === (t = n.tag)) {
						if (null !== (t = et(n))) return e.blockedOn = t, void a.unstable_runWithPriority(e.priority, (function() {
							zt(n)
						}))
					} else if (3 === t && n.stateNode.hydrate) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
			}
			e.blockedOn = null
		}

		function xt(e) {
			if (null !== e.blockedOn) return !1;
			var t = Xt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
			if (null !== t) {
				var n = Sn(t);
				return null !== n && mt(n), e.blockedOn = t, !1
			}
			return !0
		}

		function Et(e, t, n) {
			xt(e) && n.delete(t)
		}

		function Pt() {
			for (yt = !1; 0 < gt.length;) {
				var e = gt[0];
				if (null !== e.blockedOn) {
					null !== (e = Sn(e.blockedOn)) && pt(e);
					break
				}
				var t = Xt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
				null !== t ? e.blockedOn = t : gt.shift()
			}
			null !== Mt && xt(Mt) && (Mt = null), null !== bt && xt(bt) && (bt = null), null !== Ht && xt(Ht) && (Ht = null), Vt.forEach(Et), wt.forEach(Et)
		}

		function Ft(e, t) {
			e.blockedOn === t && (e.blockedOn = null, yt || (yt = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Pt)))
		}

		function At(e) {
			function t(t) {
				return Ft(t, e)
			}
			if (0 < gt.length) {
				Ft(gt[0], e);
				for (var n = 1; n < gt.length; n++) {
					var c = gt[n];
					c.blockedOn === e && (c.blockedOn = null)
				}
			}
			for (null !== Mt && Ft(Mt, e), null !== bt && Ft(bt, e), null !== Ht && Ft(Ht, e), Vt.forEach(t), wt.forEach(t), n = 0; n < _t.length; n++)(c = _t[n]).blockedOn === e && (c.blockedOn = null);
			for (; 0 < _t.length && null === (n = _t[0]).blockedOn;) kt(n), null === n.blockedOn && _t.shift()
		}
		var jt = {},
			Dt = new Map,
			Nt = new Map,
			Rt = ["abort", "abort", qe, "animationEnd", Ge, "animationIteration", Ke, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Qe, "transitionEnd", "waiting", "waiting"];

		function It(e, t) {
			for (var n = 0; n < e.length; n += 2) {
				var c = e[n],
					r = e[n + 1],
					a = "on" + (r[0].toUpperCase() + r.slice(1));
				a = {
					phasedRegistrationNames: {
						bubbled: a,
						captured: a + "Capture"
					},
					dependencies: [c],
					eventPriority: t
				}, Nt.set(c, t), Dt.set(c, a), jt[r] = a
			}
		}
		It("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), It("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), It(Rt, 2);
		for (var Ut = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Wt = 0; Wt < Ut.length; Wt++) Nt.set(Ut[Wt], 0);
		var Yt = a.unstable_UserBlockingPriority,
			Bt = a.unstable_runWithPriority,
			qt = !0;

		function Gt(e, t) {
			Kt(t, e, !1)
		}

		function Kt(e, t, n) {
			var c = Nt.get(t);
			switch (void 0 === c ? 2 : c) {
				case 0:
					c = Qt.bind(null, t, 1, e);
					break;
				case 1:
					c = $t.bind(null, t, 1, e);
					break;
				default:
					c = Zt.bind(null, t, 1, e)
			}
			n ? e.addEventListener(t, c, !0) : e.addEventListener(t, c, !1)
		}

		function Qt(e, t, n, c) {
			ae || ce();
			var r = Zt,
				a = ae;
			ae = !0;
			try {
				ne(r, e, t, n, c)
			} finally {
				(ae = a) || le()
			}
		}

		function $t(e, t, n, c) {
			Bt(Yt, Zt.bind(null, e, t, n, c))
		}

		function Zt(e, t, n, c) {
			if (qt)
				if (0 < gt.length && -1 < Ct.indexOf(e)) e = St(null, e, t, n, c), gt.push(e);
				else {
					var r = Xt(e, t, n, c);
					if (null === r) Lt(e, c);
					else if (-1 < Ct.indexOf(e)) e = St(r, e, t, n, c), gt.push(e);
					else if (! function(e, t, n, c, r) {
							switch (t) {
								case "focus":
									return Mt = Tt(Mt, e, t, n, c, r), !0;
								case "dragenter":
									return bt = Tt(bt, e, t, n, c, r), !0;
								case "mouseover":
									return Ht = Tt(Ht, e, t, n, c, r), !0;
								case "pointerover":
									var a = r.pointerId;
									return Vt.set(a, Tt(Vt.get(a) || null, e, t, n, c, r)), !0;
								case "gotpointercapture":
									return a = r.pointerId, wt.set(a, Tt(wt.get(a) || null, e, t, n, c, r)), !0
							}
							return !1
						}(r, e, t, n, c)) {
						Lt(e, c), e = ft(e, c, null, t);
						try {
							ie(vt, e)
						} finally {
							ht(e)
						}
					}
				}
		}

		function Xt(e, t, n, c) {
			if (null !== (n = On(n = it(c)))) {
				var r = Je(n);
				if (null === r) n = null;
				else {
					var a = r.tag;
					if (13 === a) {
						if (null !== (n = et(r))) return n;
						n = null
					} else if (3 === a) {
						if (r.stateNode.hydrate) return 3 === r.tag ? r.stateNode.containerInfo : null;
						n = null
					} else r !== n && (n = null)
				}
			}
			e = ft(e, c, n, t);
			try {
				ie(vt, e)
			} finally {
				ht(e)
			}
			return null
		}
		var Jt = {
				animationIterationCount: !0,
				borderImageOutset: !0,
				borderImageSlice: !0,
				borderImageWidth: !0,
				boxFlex: !0,
				boxFlexGroup: !0,
				boxOrdinalGroup: !0,
				columnCount: !0,
				columns: !0,
				flex: !0,
				flexGrow: !0,
				flexPositive: !0,
				flexShrink: !0,
				flexNegative: !0,
				flexOrder: !0,
				gridArea: !0,
				gridRow: !0,
				gridRowEnd: !0,
				gridRowSpan: !0,
				gridRowStart: !0,
				gridColumn: !0,
				gridColumnEnd: !0,
				gridColumnSpan: !0,
				gridColumnStart: !0,
				fontWeight: !0,
				lineClamp: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				tabSize: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0,
				fillOpacity: !0,
				floodOpacity: !0,
				stopOpacity: !0,
				strokeDasharray: !0,
				strokeDashoffset: !0,
				strokeMiterlimit: !0,
				strokeOpacity: !0,
				strokeWidth: !0
			},
			en = ["Webkit", "ms", "Moz", "O"];

		function tn(e, t, n) {
			return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || Jt.hasOwnProperty(e) && Jt[e] ? ("" + t).trim() : t + "px"
		}

		function nn(e, t) {
			for (var n in e = e.style, t)
				if (t.hasOwnProperty(n)) {
					var c = 0 === n.indexOf("--"),
						r = tn(n, t[n], c);
					"float" === n && (n = "cssFloat"), c ? e.setProperty(n, r) : e[n] = r
				}
		}
		Object.keys(Jt).forEach((function(e) {
			en.forEach((function(t) {
				t = t + e.charAt(0).toUpperCase() + e.substring(1), Jt[t] = Jt[e]
			}))
		}));
		var cn = r({
			menuitem: !0
		}, {
			area: !0,
			base: !0,
			br: !0,
			col: !0,
			embed: !0,
			hr: !0,
			img: !0,
			input: !0,
			keygen: !0,
			link: !0,
			meta: !0,
			param: !0,
			source: !0,
			track: !0,
			wbr: !0
		});

		function rn(e, t) {
			if (t) {
				if (cn[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e, ""));
				if (null != t.dangerouslySetInnerHTML) {
					if (null != t.children) throw Error(o(60));
					if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61))
				}
				if (null != t.style && "object" !== typeof t.style) throw Error(o(62, ""))
			}
		}

		function an(e, t) {
			if (-1 === e.indexOf("-")) return "string" === typeof t.is;
			switch (e) {
				case "annotation-xml":
				case "color-profile":
				case "font-face":
				case "font-face-src":
				case "font-face-uri":
				case "font-face-format":
				case "font-face-name":
				case "missing-glyph":
					return !1;
				default:
					return !0
			}
		}
		var on = Pe;

		function ln(e, t) {
			var n = Xe(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
			t = q[t];
			for (var c = 0; c < t.length; c++) dt(t[c], e, n)
		}

		function un() {}

		function sn(e) {
			if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
			try {
				return e.activeElement || e.body
			} catch (t) {
				return e.body
			}
		}

		function hn(e) {
			for (; e && e.firstChild;) e = e.firstChild;
			return e
		}

		function fn(e, t) {
			var n, c = hn(e);
			for (e = 0; c;) {
				if (3 === c.nodeType) {
					if (n = e + c.textContent.length, e <= t && n >= t) return {
						node: c,
						offset: t - e
					};
					e = n
				}
				e: {
					for (; c;) {
						if (c.nextSibling) {
							c = c.nextSibling;
							break e
						}
						c = c.parentNode
					}
					c = void 0
				}
				c = hn(c)
			}
		}

		function vn() {
			for (var e = window, t = sn(); t instanceof e.HTMLIFrameElement;) {
				try {
					var n = "string" === typeof t.contentWindow.location.href
				} catch (c) {
					n = !1
				}
				if (!n) break;
				t = sn((e = t.contentWindow).document)
			}
			return t
		}

		function dn(e) {
			var t = e && e.nodeName && e.nodeName.toLowerCase();
			return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
		}
		var pn = null,
			mn = null;

		function zn(e, t) {
			switch (e) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					return !!t.autoFocus
			}
			return !1
		}

		function yn(e, t) {
			return "textarea" === e || "option" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
		}
		var gn = "function" === typeof setTimeout ? setTimeout : void 0,
			Mn = "function" === typeof clearTimeout ? clearTimeout : void 0;

		function bn(e) {
			for (; null != e; e = e.nextSibling) {
				var t = e.nodeType;
				if (1 === t || 3 === t) break
			}
			return e
		}

		function Hn(e) {
			e = e.previousSibling;
			for (var t = 0; e;) {
				if (8 === e.nodeType) {
					var n = e.data;
					if ("$" === n || "$!" === n || "$?" === n) {
						if (0 === t) return e;
						t--
					} else "/$" === n && t++
				}
				e = e.previousSibling
			}
			return null
		}
		var Vn = Math.random().toString(36).slice(2),
			wn = "__reactInternalInstance$" + Vn,
			_n = "__reactEventHandlers$" + Vn,
			Cn = "__reactContainere$" + Vn;

		function On(e) {
			var t = e[wn];
			if (t) return t;
			for (var n = e.parentNode; n;) {
				if (t = n[Cn] || n[wn]) {
					if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
						for (e = Hn(e); null !== e;) {
							if (n = e[wn]) return n;
							e = Hn(e)
						}
					return t
				}
				n = (e = n).parentNode
			}
			return null
		}

		function Sn(e) {
			return !(e = e[wn] || e[Cn]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
		}

		function Ln(e) {
			if (5 === e.tag || 6 === e.tag) return e.stateNode;
			throw Error(o(33))
		}

		function Tn(e) {
			return e[_n] || null
		}

		function kn(e) {
			do {
				e = e.return
			} while (e && 5 !== e.tag);
			return e || null
		}

		function xn(e, t) {
			var n = e.stateNode;
			if (!n) return null;
			var c = d(n);
			if (!c) return null;
			n = c[t];
			e: switch (t) {
				case "onClick":
				case "onClickCapture":
				case "onDoubleClick":
				case "onDoubleClickCapture":
				case "onMouseDown":
				case "onMouseDownCapture":
				case "onMouseMove":
				case "onMouseMoveCapture":
				case "onMouseUp":
				case "onMouseUpCapture":
				case "onMouseEnter":
					(c = !c.disabled) || (c = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !c;
					break e;
				default:
					e = !1
			}
			if (e) return null;
			if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
			return n
		}

		function En(e, t, n) {
			(t = xn(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = ct(n._dispatchListeners, t), n._dispatchInstances = ct(n._dispatchInstances, e))
		}

		function Pn(e) {
			if (e && e.dispatchConfig.phasedRegistrationNames) {
				for (var t = e._targetInst, n = []; t;) n.push(t), t = kn(t);
				for (t = n.length; 0 < t--;) En(n[t], "captured", e);
				for (t = 0; t < n.length; t++) En(n[t], "bubbled", e)
			}
		}

		function Fn(e, t, n) {
			e && n && n.dispatchConfig.registrationName && (t = xn(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = ct(n._dispatchListeners, t), n._dispatchInstances = ct(n._dispatchInstances, e))
		}

		function An(e) {
			e && e.dispatchConfig.registrationName && Fn(e._targetInst, null, e)
		}

		function jn(e) {
			rt(e, Pn)
		}
		var Dn = null,
			Nn = null,
			Rn = null;

		function In() {
			if (Rn) return Rn;
			var e, t, n = Nn,
				c = n.length,
				r = "value" in Dn ? Dn.value : Dn.textContent,
				a = r.length;
			for (e = 0; e < c && n[e] === r[e]; e++);
			var o = c - e;
			for (t = 1; t <= o && n[c - t] === r[a - t]; t++);
			return Rn = r.slice(e, 1 < t ? 1 - t : void 0)
		}

		function Un() {
			return !0
		}

		function Wn() {
			return !1
		}

		function Yn(e, t, n, c) {
			for (var r in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(r) && ((t = e[r]) ? this[r] = t(n) : "target" === r ? this.target = c : this[r] = n[r]);
			return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? Un : Wn, this.isPropagationStopped = Wn, this
		}

		function Bn(e, t, n, c) {
			if (this.eventPool.length) {
				var r = this.eventPool.pop();
				return this.call(r, e, t, n, c), r
			}
			return new this(e, t, n, c)
		}

		function qn(e) {
			if (!(e instanceof this)) throw Error(o(279));
			e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
		}

		function Gn(e) {
			e.eventPool = [], e.getPooled = Bn, e.release = qn
		}
		r(Yn.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Un)
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Un)
			},
			persist: function() {
				this.isPersistent = Un
			},
			isPersistent: Wn,
			destructor: function() {
				var e, t = this.constructor.Interface;
				for (e in t) this[e] = null;
				this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = Wn, this._dispatchInstances = this._dispatchListeners = null
			}
		}), Yn.Interface = {
			type: null,
			target: null,
			currentTarget: function() {
				return null
			},
			eventPhase: null,
			bubbles: null,
			cancelable: null,
			timeStamp: function(e) {
				return e.timeStamp || Date.now()
			},
			defaultPrevented: null,
			isTrusted: null
		}, Yn.extend = function(e) {
			function t() {}

			function n() {
				return c.apply(this, arguments)
			}
			var c = this;
			t.prototype = c.prototype;
			var a = new t;
			return r(a, n.prototype), n.prototype = a, n.prototype.constructor = n, n.Interface = r({}, c.Interface, e), n.extend = c.extend, Gn(n), n
		}, Gn(Yn);
		var Kn = Yn.extend({
				data: null
			}),
			Qn = Yn.extend({
				data: null
			}),
			$n = [9, 13, 27, 32],
			Zn = K && "CompositionEvent" in window,
			Xn = null;
		K && "documentMode" in document && (Xn = document.documentMode);
		var Jn = K && "TextEvent" in window && !Xn,
			ec = K && (!Zn || Xn && 8 < Xn && 11 >= Xn),
			tc = String.fromCharCode(32),
			nc = {
				beforeInput: {
					phasedRegistrationNames: {
						bubbled: "onBeforeInput",
						captured: "onBeforeInputCapture"
					},
					dependencies: ["compositionend", "keypress", "textInput", "paste"]
				},
				compositionEnd: {
					phasedRegistrationNames: {
						bubbled: "onCompositionEnd",
						captured: "onCompositionEndCapture"
					},
					dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
				},
				compositionStart: {
					phasedRegistrationNames: {
						bubbled: "onCompositionStart",
						captured: "onCompositionStartCapture"
					},
					dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
				},
				compositionUpdate: {
					phasedRegistrationNames: {
						bubbled: "onCompositionUpdate",
						captured: "onCompositionUpdateCapture"
					},
					dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
				}
			},
			cc = !1;

		function rc(e, t) {
			switch (e) {
				case "keyup":
					return -1 !== $n.indexOf(t.keyCode);
				case "keydown":
					return 229 !== t.keyCode;
				case "keypress":
				case "mousedown":
				case "blur":
					return !0;
				default:
					return !1
			}
		}

		function ac(e) {
			return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
		}
		var oc = !1;
		var lc = {
				eventTypes: nc,
				extractEvents: function(e, t, n, c) {
					var r;
					if (Zn) e: {
						switch (e) {
							case "compositionstart":
								var a = nc.compositionStart;
								break e;
							case "compositionend":
								a = nc.compositionEnd;
								break e;
							case "compositionupdate":
								a = nc.compositionUpdate;
								break e
						}
						a = void 0
					}
					else oc ? rc(e, n) && (a = nc.compositionEnd) : "keydown" === e && 229 === n.keyCode && (a = nc.compositionStart);
					return a ? (ec && "ko" !== n.locale && (oc || a !== nc.compositionStart ? a === nc.compositionEnd && oc && (r = In()) : (Nn = "value" in (Dn = c) ? Dn.value : Dn.textContent, oc = !0)), a = Kn.getPooled(a, t, n, c), r ? a.data = r : null !== (r = ac(n)) && (a.data = r), jn(a), r = a) : r = null, (e = Jn ? function(e, t) {
						switch (e) {
							case "compositionend":
								return ac(t);
							case "keypress":
								return 32 !== t.which ? null : (cc = !0, tc);
							case "textInput":
								return (e = t.data) === tc && cc ? null : e;
							default:
								return null
						}
					}(e, n) : function(e, t) {
						if (oc) return "compositionend" === e || !Zn && rc(e, t) ? (e = In(), Rn = Nn = Dn = null, oc = !1, e) : null;
						switch (e) {
							case "paste":
								return null;
							case "keypress":
								if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
									if (t.char && 1 < t.char.length) return t.char;
									if (t.which) return String.fromCharCode(t.which)
								}
								return null;
							case "compositionend":
								return ec && "ko" !== t.locale ? null : t.data;
							default:
								return null
						}
					}(e, n)) ? ((t = Qn.getPooled(nc.beforeInput, t, n, c)).data = e, jn(t)) : t = null, null === r ? t : null === t ? r : [r, t]
				}
			},
			ic = {
				color: !0,
				date: !0,
				datetime: !0,
				"datetime-local": !0,
				email: !0,
				month: !0,
				number: !0,
				password: !0,
				range: !0,
				search: !0,
				tel: !0,
				text: !0,
				time: !0,
				url: !0,
				week: !0
			};

		function uc(e) {
			var t = e && e.nodeName && e.nodeName.toLowerCase();
			return "input" === t ? !!ic[e.type] : "textarea" === t
		}
		var sc = {
			change: {
				phasedRegistrationNames: {
					bubbled: "onChange",
					captured: "onChangeCapture"
				},
				dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
			}
		};

		function hc(e, t, n) {
			return (e = Yn.getPooled(sc.change, e, t, n)).type = "change", J(n), jn(e), e
		}
		var fc = null,
			vc = null;

		function dc(e) {
			lt(e)
		}

		function pc(e) {
			if (be(Ln(e))) return e
		}

		function mc(e, t) {
			if ("change" === e) return t
		}
		var zc = !1;

		function yc() {
			fc && (fc.detachEvent("onpropertychange", gc), vc = fc = null)
		}

		function gc(e) {
			if ("value" === e.propertyName && pc(vc))
				if (e = hc(vc, e, it(e)), ae) lt(e);
				else {
					ae = !0;
					try {
						te(dc, e)
					} finally {
						ae = !1, le()
					}
				}
		}

		function Mc(e, t, n) {
			"focus" === e ? (yc(), vc = n, (fc = t).attachEvent("onpropertychange", gc)) : "blur" === e && yc()
		}

		function bc(e) {
			if ("selectionchange" === e || "keyup" === e || "keydown" === e) return pc(vc)
		}

		function Hc(e, t) {
			if ("click" === e) return pc(t)
		}

		function Vc(e, t) {
			if ("input" === e || "change" === e) return pc(t)
		}
		K && (zc = ut("input") && (!document.documentMode || 9 < document.documentMode));
		var wc = {
				eventTypes: sc,
				_isInputEventSupported: zc,
				extractEvents: function(e, t, n, c) {
					var r = t ? Ln(t) : window,
						a = r.nodeName && r.nodeName.toLowerCase();
					if ("select" === a || "input" === a && "file" === r.type) var o = mc;
					else if (uc(r))
						if (zc) o = Vc;
						else {
							o = bc;
							var l = Mc
						}
					else(a = r.nodeName) && "input" === a.toLowerCase() && ("checkbox" === r.type || "radio" === r.type) && (o = Hc);
					if (o && (o = o(e, t))) return hc(o, n, c);
					l && l(e, r, t), "blur" === e && (e = r._wrapperState) && e.controlled && "number" === r.type && Oe(r, "number", r.value)
				}
			},
			_c = Yn.extend({
				view: null,
				detail: null
			}),
			Cc = {
				Alt: "altKey",
				Control: "ctrlKey",
				Meta: "metaKey",
				Shift: "shiftKey"
			};

		function Oc(e) {
			var t = this.nativeEvent;
			return t.getModifierState ? t.getModifierState(e) : !!(e = Cc[e]) && !!t[e]
		}

		function Sc() {
			return Oc
		}
		var Lc = 0,
			Tc = 0,
			kc = !1,
			xc = !1,
			Ec = _c.extend({
				screenX: null,
				screenY: null,
				clientX: null,
				clientY: null,
				pageX: null,
				pageY: null,
				ctrlKey: null,
				shiftKey: null,
				altKey: null,
				metaKey: null,
				getModifierState: Sc,
				button: null,
				buttons: null,
				relatedTarget: function(e) {
					return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
				},
				movementX: function(e) {
					if ("movementX" in e) return e.movementX;
					var t = Lc;
					return Lc = e.screenX, kc ? "mousemove" === e.type ? e.screenX - t : 0 : (kc = !0, 0)
				},
				movementY: function(e) {
					if ("movementY" in e) return e.movementY;
					var t = Tc;
					return Tc = e.screenY, xc ? "mousemove" === e.type ? e.screenY - t : 0 : (xc = !0, 0)
				}
			}),
			Pc = Ec.extend({
				pointerId: null,
				width: null,
				height: null,
				pressure: null,
				tangentialPressure: null,
				tiltX: null,
				tiltY: null,
				twist: null,
				pointerType: null,
				isPrimary: null
			}),
			Fc = {
				mouseEnter: {
					registrationName: "onMouseEnter",
					dependencies: ["mouseout", "mouseover"]
				},
				mouseLeave: {
					registrationName: "onMouseLeave",
					dependencies: ["mouseout", "mouseover"]
				},
				pointerEnter: {
					registrationName: "onPointerEnter",
					dependencies: ["pointerout", "pointerover"]
				},
				pointerLeave: {
					registrationName: "onPointerLeave",
					dependencies: ["pointerout", "pointerover"]
				}
			},
			Ac = {
				eventTypes: Fc,
				extractEvents: function(e, t, n, c, r) {
					var a = "mouseover" === e || "pointerover" === e,
						o = "mouseout" === e || "pointerout" === e;
					if (a && 0 === (32 & r) && (n.relatedTarget || n.fromElement) || !o && !a) return null;
					(a = c.window === c ? c : (a = c.ownerDocument) ? a.defaultView || a.parentWindow : window, o) ? (o = t, null !== (t = (t = n.relatedTarget || n.toElement) ? On(t) : null) && (t !== Je(t) || 5 !== t.tag && 6 !== t.tag) && (t = null)) : o = null;
					if (o === t) return null;
					if ("mouseout" === e || "mouseover" === e) var l = Ec,
						i = Fc.mouseLeave,
						u = Fc.mouseEnter,
						s = "mouse";
					else "pointerout" !== e && "pointerover" !== e || (l = Pc, i = Fc.pointerLeave, u = Fc.pointerEnter, s = "pointer");
					if (e = null == o ? a : Ln(o), a = null == t ? a : Ln(t), (i = l.getPooled(i, o, n, c)).type = s + "leave", i.target = e, i.relatedTarget = a, (n = l.getPooled(u, t, n, c)).type = s + "enter", n.target = a, n.relatedTarget = e, s = t, (c = o) && s) e: {
						for (u = s, o = 0, e = l = c; e; e = kn(e)) o++;
						for (e = 0, t = u; t; t = kn(t)) e++;
						for (; 0 < o - e;) l = kn(l),
						o--;
						for (; 0 < e - o;) u = kn(u),
						e--;
						for (; o--;) {
							if (l === u || l === u.alternate) break e;
							l = kn(l), u = kn(u)
						}
						l = null
					}
					else l = null;
					for (u = l, l = []; c && c !== u && (null === (o = c.alternate) || o !== u);) l.push(c), c = kn(c);
					for (c = []; s && s !== u && (null === (o = s.alternate) || o !== u);) c.push(s), s = kn(s);
					for (s = 0; s < l.length; s++) Fn(l[s], "bubbled", i);
					for (s = c.length; 0 < s--;) Fn(c[s], "captured", n);
					return 0 === (64 & r) ? [i] : [i, n]
				}
			};
		var jc = "function" === typeof Object.is ? Object.is : function(e, t) {
				return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
			},
			Dc = Object.prototype.hasOwnProperty;

		function Nc(e, t) {
			if (jc(e, t)) return !0;
			if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
			var n = Object.keys(e),
				c = Object.keys(t);
			if (n.length !== c.length) return !1;
			for (c = 0; c < n.length; c++)
				if (!Dc.call(t, n[c]) || !jc(e[n[c]], t[n[c]])) return !1;
			return !0
		}
		var Rc = K && "documentMode" in document && 11 >= document.documentMode,
			Ic = {
				select: {
					phasedRegistrationNames: {
						bubbled: "onSelect",
						captured: "onSelectCapture"
					},
					dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
				}
			},
			Uc = null,
			Wc = null,
			Yc = null,
			Bc = !1;

		function qc(e, t) {
			var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
			return Bc || null == Uc || Uc !== sn(n) ? null : ("selectionStart" in (n = Uc) && dn(n) ? n = {
				start: n.selectionStart,
				end: n.selectionEnd
			} : n = {
				anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
				anchorOffset: n.anchorOffset,
				focusNode: n.focusNode,
				focusOffset: n.focusOffset
			}, Yc && Nc(Yc, n) ? null : (Yc = n, (e = Yn.getPooled(Ic.select, Wc, e, t)).type = "select", e.target = Uc, jn(e), e))
		}
		var Gc = {
				eventTypes: Ic,
				extractEvents: function(e, t, n, c, r, a) {
					if (!(a = !(r = a || (c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument)))) {
						e: {
							r = Xe(r),
							a = q.onSelect;
							for (var o = 0; o < a.length; o++)
								if (!r.has(a[o])) {
									r = !1;
									break e
								}
							r = !0
						}
						a = !r
					}
					if (a) return null;
					switch (r = t ? Ln(t) : window, e) {
						case "focus":
							(uc(r) || "true" === r.contentEditable) && (Uc = r, Wc = t, Yc = null);
							break;
						case "blur":
							Yc = Wc = Uc = null;
							break;
						case "mousedown":
							Bc = !0;
							break;
						case "contextmenu":
						case "mouseup":
						case "dragend":
							return Bc = !1, qc(n, c);
						case "selectionchange":
							if (Rc) break;
						case "keydown":
						case "keyup":
							return qc(n, c)
					}
					return null
				}
			},
			Kc = Yn.extend({
				animationName: null,
				elapsedTime: null,
				pseudoElement: null
			}),
			Qc = Yn.extend({
				clipboardData: function(e) {
					return "clipboardData" in e ? e.clipboardData : window.clipboardData
				}
			}),
			$c = _c.extend({
				relatedTarget: null
			});

		function Zc(e) {
			var t = e.keyCode;
			return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
		}
		var Xc = {
				Esc: "Escape",
				Spacebar: " ",
				Left: "ArrowLeft",
				Up: "ArrowUp",
				Right: "ArrowRight",
				Down: "ArrowDown",
				Del: "Delete",
				Win: "OS",
				Menu: "ContextMenu",
				Apps: "ContextMenu",
				Scroll: "ScrollLock",
				MozPrintableKey: "Unidentified"
			},
			Jc = {
				8: "Backspace",
				9: "Tab",
				12: "Clear",
				13: "Enter",
				16: "Shift",
				17: "Control",
				18: "Alt",
				19: "Pause",
				20: "CapsLock",
				27: "Escape",
				32: " ",
				33: "PageUp",
				34: "PageDown",
				35: "End",
				36: "Home",
				37: "ArrowLeft",
				38: "ArrowUp",
				39: "ArrowRight",
				40: "ArrowDown",
				45: "Insert",
				46: "Delete",
				112: "F1",
				113: "F2",
				114: "F3",
				115: "F4",
				116: "F5",
				117: "F6",
				118: "F7",
				119: "F8",
				120: "F9",
				121: "F10",
				122: "F11",
				123: "F12",
				144: "NumLock",
				145: "ScrollLock",
				224: "Meta"
			},
			er = _c.extend({
				key: function(e) {
					if (e.key) {
						var t = Xc[e.key] || e.key;
						if ("Unidentified" !== t) return t
					}
					return "keypress" === e.type ? 13 === (e = Zc(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Jc[e.keyCode] || "Unidentified" : ""
				},
				location: null,
				ctrlKey: null,
				shiftKey: null,
				altKey: null,
				metaKey: null,
				repeat: null,
				locale: null,
				getModifierState: Sc,
				charCode: function(e) {
					return "keypress" === e.type ? Zc(e) : 0
				},
				keyCode: function(e) {
					return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
				},
				which: function(e) {
					return "keypress" === e.type ? Zc(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
				}
			}),
			tr = Ec.extend({
				dataTransfer: null
			}),
			nr = _c.extend({
				touches: null,
				targetTouches: null,
				changedTouches: null,
				altKey: null,
				metaKey: null,
				ctrlKey: null,
				shiftKey: null,
				getModifierState: Sc
			}),
			cr = Yn.extend({
				propertyName: null,
				elapsedTime: null,
				pseudoElement: null
			}),
			rr = Ec.extend({
				deltaX: function(e) {
					return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
				},
				deltaY: function(e) {
					return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
				},
				deltaZ: null,
				deltaMode: null
			}),
			ar = {
				eventTypes: jt,
				extractEvents: function(e, t, n, c) {
					var r = Dt.get(e);
					if (!r) return null;
					switch (e) {
						case "keypress":
							if (0 === Zc(n)) return null;
						case "keydown":
						case "keyup":
							e = er;
							break;
						case "blur":
						case "focus":
							e = $c;
							break;
						case "click":
							if (2 === n.button) return null;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							e = Ec;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							e = tr;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							e = nr;
							break;
						case qe:
						case Ge:
						case Ke:
							e = Kc;
							break;
						case Qe:
							e = cr;
							break;
						case "scroll":
							e = _c;
							break;
						case "wheel":
							e = rr;
							break;
						case "copy":
						case "cut":
						case "paste":
							e = Qc;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							e = Pc;
							break;
						default:
							e = Yn
					}
					return jn(t = e.getPooled(r, t, n, c)), t
				}
			};
		if (N) throw Error(o(101));
		N = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), I(), d = Tn, p = Sn, m = Ln, G({
			SimpleEventPlugin: ar,
			EnterLeaveEventPlugin: Ac,
			ChangeEventPlugin: wc,
			SelectEventPlugin: Gc,
			BeforeInputEventPlugin: lc
		});
		var or = [],
			lr = -1;

		function ir(e) {
			0 > lr || (e.current = or[lr], or[lr] = null, lr--)
		}

		function ur(e, t) {
			lr++, or[lr] = e.current, e.current = t
		}
		var sr = {},
			hr = {
				current: sr
			},
			fr = {
				current: !1
			},
			vr = sr;

		function dr(e, t) {
			var n = e.type.contextTypes;
			if (!n) return sr;
			var c = e.stateNode;
			if (c && c.__reactInternalMemoizedUnmaskedChildContext === t) return c.__reactInternalMemoizedMaskedChildContext;
			var r, a = {};
			for (r in n) a[r] = t[r];
			return c && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
		}

		function pr(e) {
			return null !== (e = e.childContextTypes) && void 0 !== e
		}

		function mr() {
			ir(fr), ir(hr)
		}

		function zr(e, t, n) {
			if (hr.current !== sr) throw Error(o(168));
			ur(hr, t), ur(fr, n)
		}

		function yr(e, t, n) {
			var c = e.stateNode;
			if (e = t.childContextTypes, "function" !== typeof c.getChildContext) return n;
			for (var a in c = c.getChildContext())
				if (!(a in e)) throw Error(o(108, j(t) || "Unknown", a));
			return r({}, n, {}, c)
		}

		function gr(e) {
			return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sr, vr = hr.current, ur(hr, e), ur(fr, fr.current), !0
		}

		function Mr(e, t, n) {
			var c = e.stateNode;
			if (!c) throw Error(o(169));
			n ? (e = yr(e, t, vr), c.__reactInternalMemoizedMergedChildContext = e, ir(fr), ir(hr), ur(hr, e)) : ir(fr), ur(fr, n)
		}
		var br = a.unstable_runWithPriority,
			Hr = a.unstable_scheduleCallback,
			Vr = a.unstable_cancelCallback,
			wr = a.unstable_requestPaint,
			_r = a.unstable_now,
			Cr = a.unstable_getCurrentPriorityLevel,
			Or = a.unstable_ImmediatePriority,
			Sr = a.unstable_UserBlockingPriority,
			Lr = a.unstable_NormalPriority,
			Tr = a.unstable_LowPriority,
			kr = a.unstable_IdlePriority,
			xr = {},
			Er = a.unstable_shouldYield,
			Pr = void 0 !== wr ? wr : function() {},
			Fr = null,
			Ar = null,
			jr = !1,
			Dr = _r(),
			Nr = 1e4 > Dr ? _r : function() {
				return _r() - Dr
			};

		function Rr() {
			switch (Cr()) {
				case Or:
					return 99;
				case Sr:
					return 98;
				case Lr:
					return 97;
				case Tr:
					return 96;
				case kr:
					return 95;
				default:
					throw Error(o(332))
			}
		}

		function Ir(e) {
			switch (e) {
				case 99:
					return Or;
				case 98:
					return Sr;
				case 97:
					return Lr;
				case 96:
					return Tr;
				case 95:
					return kr;
				default:
					throw Error(o(332))
			}
		}

		function Ur(e, t) {
			return e = Ir(e), br(e, t)
		}

		function Wr(e, t, n) {
			return e = Ir(e), Hr(e, t, n)
		}

		function Yr(e) {
			return null === Fr ? (Fr = [e], Ar = Hr(Or, qr)) : Fr.push(e), xr
		}

		function Br() {
			if (null !== Ar) {
				var e = Ar;
				Ar = null, Vr(e)
			}
			qr()
		}

		function qr() {
			if (!jr && null !== Fr) {
				jr = !0;
				var e = 0;
				try {
					var t = Fr;
					Ur(99, (function() {
						for (; e < t.length; e++) {
							var n = t[e];
							do {
								n = n(!0)
							} while (null !== n)
						}
					})), Fr = null
				} catch (n) {
					throw null !== Fr && (Fr = Fr.slice(e + 1)), Hr(Or, Br), n
				} finally {
					jr = !1
				}
			}
		}

		function Gr(e, t, n) {
			return 1073741821 - (1 + ((1073741821 - e + t / 10) / (n /= 10) | 0)) * n
		}

		function Kr(e, t) {
			if (e && e.defaultProps)
				for (var n in t = r({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
			return t
		}
		var Qr = {
				current: null
			},
			$r = null,
			Zr = null,
			Xr = null;

		function Jr() {
			Xr = Zr = $r = null
		}

		function ea(e) {
			var t = Qr.current;
			ir(Qr), e.type._context._currentValue = t
		}

		function ta(e, t) {
			for (; null !== e;) {
				var n = e.alternate;
				if (e.childExpirationTime < t) e.childExpirationTime = t, null !== n && n.childExpirationTime < t && (n.childExpirationTime = t);
				else {
					if (!(null !== n && n.childExpirationTime < t)) break;
					n.childExpirationTime = t
				}
				e = e.return
			}
		}

		function na(e, t) {
			$r = e, Xr = Zr = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (To = !0), e.firstContext = null)
		}

		function ca(e, t) {
			if (Xr !== e && !1 !== t && 0 !== t)
				if ("number" === typeof t && 1073741823 !== t || (Xr = e, t = 1073741823), t = {
						context: e,
						observedBits: t,
						next: null
					}, null === Zr) {
					if (null === $r) throw Error(o(308));
					Zr = t, $r.dependencies = {
						expirationTime: 0,
						firstContext: t,
						responders: null
					}
				} else Zr = Zr.next = t;
			return e._currentValue
		}
		var ra = !1;

		function aa(e) {
			e.updateQueue = {
				baseState: e.memoizedState,
				baseQueue: null,
				shared: {
					pending: null
				},
				effects: null
			}
		}

		function oa(e, t) {
			e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
				baseState: e.baseState,
				baseQueue: e.baseQueue,
				shared: e.shared,
				effects: e.effects
			})
		}

		function la(e, t) {
			return (e = {
				expirationTime: e,
				suspenseConfig: t,
				tag: 0,
				payload: null,
				callback: null,
				next: null
			}).next = e
		}

		function ia(e, t) {
			if (null !== (e = e.updateQueue)) {
				var n = (e = e.shared).pending;
				null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
			}
		}

		function ua(e, t) {
			var n = e.alternate;
			null !== n && oa(n, e), null === (n = (e = e.updateQueue).baseQueue) ? (e.baseQueue = t.next = t, t.next = t) : (t.next = n.next, n.next = t)
		}

		function sa(e, t, n, c) {
			var a = e.updateQueue;
			ra = !1;
			var o = a.baseQueue,
				l = a.shared.pending;
			if (null !== l) {
				if (null !== o) {
					var i = o.next;
					o.next = l.next, l.next = i
				}
				o = l, a.shared.pending = null, null !== (i = e.alternate) && (null !== (i = i.updateQueue) && (i.baseQueue = l))
			}
			if (null !== o) {
				i = o.next;
				var u = a.baseState,
					s = 0,
					h = null,
					f = null,
					v = null;
				if (null !== i)
					for (var d = i;;) {
						if ((l = d.expirationTime) < c) {
							var p = {
								expirationTime: d.expirationTime,
								suspenseConfig: d.suspenseConfig,
								tag: d.tag,
								payload: d.payload,
								callback: d.callback,
								next: null
							};
							null === v ? (f = v = p, h = u) : v = v.next = p, l > s && (s = l)
						} else {
							null !== v && (v = v.next = {
								expirationTime: 1073741823,
								suspenseConfig: d.suspenseConfig,
								tag: d.tag,
								payload: d.payload,
								callback: d.callback,
								next: null
							}), ai(l, d.suspenseConfig);
							e: {
								var m = e,
									z = d;
								switch (l = t, p = n, z.tag) {
									case 1:
										if ("function" === typeof(m = z.payload)) {
											u = m.call(p, u, l);
											break e
										}
										u = m;
										break e;
									case 3:
										m.effectTag = -4097 & m.effectTag | 64;
									case 0:
										if (null === (l = "function" === typeof(m = z.payload) ? m.call(p, u, l) : m) || void 0 === l) break e;
										u = r({}, u, l);
										break e;
									case 2:
										ra = !0
								}
							}
							null !== d.callback && (e.effectTag |= 32, null === (l = a.effects) ? a.effects = [d] : l.push(d))
						}
						if (null === (d = d.next) || d === i) {
							if (null === (l = a.shared.pending)) break;
							d = o.next = l.next, l.next = i, a.baseQueue = o = l, a.shared.pending = null
						}
					}
				null === v ? h = u : v.next = f, a.baseState = h, a.baseQueue = v, oi(s), e.expirationTime = s, e.memoizedState = u
			}
		}

		function ha(e, t, n) {
			if (e = t.effects, t.effects = null, null !== e)
				for (t = 0; t < e.length; t++) {
					var c = e[t],
						r = c.callback;
					if (null !== r) {
						if (c.callback = null, c = r, r = n, "function" !== typeof c) throw Error(o(191, c));
						c.call(r)
					}
				}
		}
		var fa = y.ReactCurrentBatchConfig,
			va = (new c.Component).refs;

		function da(e, t, n, c) {
			n = null === (n = n(c, t = e.memoizedState)) || void 0 === n ? t : r({}, t, n), e.memoizedState = n, 0 === e.expirationTime && (e.updateQueue.baseState = n)
		}
		var pa = {
			isMounted: function(e) {
				return !!(e = e._reactInternalFiber) && Je(e) === e
			},
			enqueueSetState: function(e, t, n) {
				e = e._reactInternalFiber;
				var c = ql(),
					r = fa.suspense;
				(r = la(c = Gl(c, e, r), r)).payload = t, void 0 !== n && null !== n && (r.callback = n), ia(e, r), Kl(e, c)
			},
			enqueueReplaceState: function(e, t, n) {
				e = e._reactInternalFiber;
				var c = ql(),
					r = fa.suspense;
				(r = la(c = Gl(c, e, r), r)).tag = 1, r.payload = t, void 0 !== n && null !== n && (r.callback = n), ia(e, r), Kl(e, c)
			},
			enqueueForceUpdate: function(e, t) {
				e = e._reactInternalFiber;
				var n = ql(),
					c = fa.suspense;
				(c = la(n = Gl(n, e, c), c)).tag = 2, void 0 !== t && null !== t && (c.callback = t), ia(e, c), Kl(e, n)
			}
		};

		function ma(e, t, n, c, r, a, o) {
			return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(c, a, o) : !t.prototype || !t.prototype.isPureReactComponent || (!Nc(n, c) || !Nc(r, a))
		}

		function za(e, t, n) {
			var c = !1,
				r = sr,
				a = t.contextType;
			return "object" === typeof a && null !== a ? a = ca(a) : (r = pr(t) ? vr : hr.current, a = (c = null !== (c = t.contextTypes) && void 0 !== c) ? dr(e, r) : sr), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = pa, e.stateNode = t, t._reactInternalFiber = e, c && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = r, e.__reactInternalMemoizedMaskedChildContext = a), t
		}

		function ya(e, t, n, c) {
			e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, c), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, c), t.state !== e && pa.enqueueReplaceState(t, t.state, null)
		}

		function ga(e, t, n, c) {
			var r = e.stateNode;
			r.props = n, r.state = e.memoizedState, r.refs = va, aa(e);
			var a = t.contextType;
			"object" === typeof a && null !== a ? r.context = ca(a) : (a = pr(t) ? vr : hr.current, r.context = dr(e, a)), sa(e, n, r, c), r.state = e.memoizedState, "function" === typeof(a = t.getDerivedStateFromProps) && (da(e, t, a, n), r.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof r.getSnapshotBeforeUpdate || "function" !== typeof r.UNSAFE_componentWillMount && "function" !== typeof r.componentWillMount || (t = r.state, "function" === typeof r.componentWillMount && r.componentWillMount(), "function" === typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(), t !== r.state && pa.enqueueReplaceState(r, r.state, null), sa(e, n, r, c), r.state = e.memoizedState), "function" === typeof r.componentDidMount && (e.effectTag |= 4)
		}
		var Ma = Array.isArray;

		function ba(e, t, n) {
			if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
				if (n._owner) {
					if (n = n._owner) {
						if (1 !== n.tag) throw Error(o(309));
						var c = n.stateNode
					}
					if (!c) throw Error(o(147, e));
					var r = "" + e;
					return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === r ? t.ref : ((t = function(e) {
						var t = c.refs;
						t === va && (t = c.refs = {}), null === e ? delete t[r] : t[r] = e
					})._stringRef = r, t)
				}
				if ("string" !== typeof e) throw Error(o(284));
				if (!n._owner) throw Error(o(290, e))
			}
			return e
		}

		function Ha(e, t) {
			if ("textarea" !== e.type) throw Error(o(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""))
		}

		function Va(e) {
			function t(t, n) {
				if (e) {
					var c = t.lastEffect;
					null !== c ? (c.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
				}
			}

			function n(n, c) {
				if (!e) return null;
				for (; null !== c;) t(n, c), c = c.sibling;
				return null
			}

			function c(e, t) {
				for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
				return e
			}

			function r(e, t) {
				return (e = Ci(e, t)).index = 0, e.sibling = null, e
			}

			function a(t, n, c) {
				return t.index = c, e ? null !== (c = t.alternate) ? (c = c.index) < n ? (t.effectTag = 2, n) : c : (t.effectTag = 2, n) : n
			}

			function l(t) {
				return e && null === t.alternate && (t.effectTag = 2), t
			}

			function i(e, t, n, c) {
				return null === t || 6 !== t.tag ? ((t = Li(n, e.mode, c)).return = e, t) : ((t = r(t, n)).return = e, t)
			}

			function u(e, t, n, c) {
				return null !== t && t.elementType === n.type ? ((c = r(t, n.props)).ref = ba(e, t, n), c.return = e, c) : ((c = Oi(n.type, n.key, n.props, null, e.mode, c)).ref = ba(e, t, n), c.return = e, c)
			}

			function s(e, t, n, c) {
				return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Ti(n, e.mode, c)).return = e, t) : ((t = r(t, n.children || [])).return = e, t)
			}

			function h(e, t, n, c, a) {
				return null === t || 7 !== t.tag ? ((t = Si(n, e.mode, c, a)).return = e, t) : ((t = r(t, n)).return = e, t)
			}

			function f(e, t, n) {
				if ("string" === typeof t || "number" === typeof t) return (t = Li("" + t, e.mode, n)).return = e, t;
				if ("object" === typeof t && null !== t) {
					switch (t.$$typeof) {
						case b:
							return (n = Oi(t.type, t.key, t.props, null, e.mode, n)).ref = ba(e, null, t), n.return = e, n;
						case H:
							return (t = Ti(t, e.mode, n)).return = e, t
					}
					if (Ma(t) || A(t)) return (t = Si(t, e.mode, n, null)).return = e, t;
					Ha(e, t)
				}
				return null
			}

			function v(e, t, n, c) {
				var r = null !== t ? t.key : null;
				if ("string" === typeof n || "number" === typeof n) return null !== r ? null : i(e, t, "" + n, c);
				if ("object" === typeof n && null !== n) {
					switch (n.$$typeof) {
						case b:
							return n.key === r ? n.type === V ? h(e, t, n.props.children, c, r) : u(e, t, n, c) : null;
						case H:
							return n.key === r ? s(e, t, n, c) : null
					}
					if (Ma(n) || A(n)) return null !== r ? null : h(e, t, n, c, null);
					Ha(e, n)
				}
				return null
			}

			function d(e, t, n, c, r) {
				if ("string" === typeof c || "number" === typeof c) return i(t, e = e.get(n) || null, "" + c, r);
				if ("object" === typeof c && null !== c) {
					switch (c.$$typeof) {
						case b:
							return e = e.get(null === c.key ? n : c.key) || null, c.type === V ? h(t, e, c.props.children, r, c.key) : u(t, e, c, r);
						case H:
							return s(t, e = e.get(null === c.key ? n : c.key) || null, c, r)
					}
					if (Ma(c) || A(c)) return h(t, e = e.get(n) || null, c, r, null);
					Ha(t, c)
				}
				return null
			}

			function p(r, o, l, i) {
				for (var u = null, s = null, h = o, p = o = 0, m = null; null !== h && p < l.length; p++) {
					h.index > p ? (m = h, h = null) : m = h.sibling;
					var z = v(r, h, l[p], i);
					if (null === z) {
						null === h && (h = m);
						break
					}
					e && h && null === z.alternate && t(r, h), o = a(z, o, p), null === s ? u = z : s.sibling = z, s = z, h = m
				}
				if (p === l.length) return n(r, h), u;
				if (null === h) {
					for (; p < l.length; p++) null !== (h = f(r, l[p], i)) && (o = a(h, o, p), null === s ? u = h : s.sibling = h, s = h);
					return u
				}
				for (h = c(r, h); p < l.length; p++) null !== (m = d(h, r, p, l[p], i)) && (e && null !== m.alternate && h.delete(null === m.key ? p : m.key), o = a(m, o, p), null === s ? u = m : s.sibling = m, s = m);
				return e && h.forEach((function(e) {
					return t(r, e)
				})), u
			}

			function m(r, l, i, u) {
				var s = A(i);
				if ("function" !== typeof s) throw Error(o(150));
				if (null == (i = s.call(i))) throw Error(o(151));
				for (var h = s = null, p = l, m = l = 0, z = null, y = i.next(); null !== p && !y.done; m++, y = i.next()) {
					p.index > m ? (z = p, p = null) : z = p.sibling;
					var g = v(r, p, y.value, u);
					if (null === g) {
						null === p && (p = z);
						break
					}
					e && p && null === g.alternate && t(r, p), l = a(g, l, m), null === h ? s = g : h.sibling = g, h = g, p = z
				}
				if (y.done) return n(r, p), s;
				if (null === p) {
					for (; !y.done; m++, y = i.next()) null !== (y = f(r, y.value, u)) && (l = a(y, l, m), null === h ? s = y : h.sibling = y, h = y);
					return s
				}
				for (p = c(r, p); !y.done; m++, y = i.next()) null !== (y = d(p, r, m, y.value, u)) && (e && null !== y.alternate && p.delete(null === y.key ? m : y.key), l = a(y, l, m), null === h ? s = y : h.sibling = y, h = y);
				return e && p.forEach((function(e) {
					return t(r, e)
				})), s
			}
			return function(e, c, a, i) {
				var u = "object" === typeof a && null !== a && a.type === V && null === a.key;
				u && (a = a.props.children);
				var s = "object" === typeof a && null !== a;
				if (s) switch (a.$$typeof) {
					case b:
						e: {
							for (s = a.key, u = c; null !== u;) {
								if (u.key === s) {
									switch (u.tag) {
										case 7:
											if (a.type === V) {
												n(e, u.sibling), (c = r(u, a.props.children)).return = e, e = c;
												break e
											}
											break;
										default:
											if (u.elementType === a.type) {
												n(e, u.sibling), (c = r(u, a.props)).ref = ba(e, u, a), c.return = e, e = c;
												break e
											}
									}
									n(e, u);
									break
								}
								t(e, u), u = u.sibling
							}
							a.type === V ? ((c = Si(a.props.children, e.mode, i, a.key)).return = e, e = c) : ((i = Oi(a.type, a.key, a.props, null, e.mode, i)).ref = ba(e, c, a), i.return = e, e = i)
						}
						return l(e);
					case H:
						e: {
							for (u = a.key; null !== c;) {
								if (c.key === u) {
									if (4 === c.tag && c.stateNode.containerInfo === a.containerInfo && c.stateNode.implementation === a.implementation) {
										n(e, c.sibling), (c = r(c, a.children || [])).return = e, e = c;
										break e
									}
									n(e, c);
									break
								}
								t(e, c), c = c.sibling
							}(c = Ti(a, e.mode, i)).return = e,
							e = c
						}
						return l(e)
				}
				if ("string" === typeof a || "number" === typeof a) return a = "" + a, null !== c && 6 === c.tag ? (n(e, c.sibling), (c = r(c, a)).return = e, e = c) : (n(e, c), (c = Li(a, e.mode, i)).return = e, e = c), l(e);
				if (Ma(a)) return p(e, c, a, i);
				if (A(a)) return m(e, c, a, i);
				if (s && Ha(e, a), "undefined" === typeof a && !u) switch (e.tag) {
					case 1:
					case 0:
						throw e = e.type, Error(o(152, e.displayName || e.name || "Component"))
				}
				return n(e, c)
			}
		}
		var wa = Va(!0),
			_a = Va(!1),
			Ca = {},
			Oa = {
				current: Ca
			},
			Sa = {
				current: Ca
			},
			La = {
				current: Ca
			};

		function Ta(e) {
			if (e === Ca) throw Error(o(174));
			return e
		}

		function ka(e, t) {
			switch (ur(La, t), ur(Sa, e), ur(Oa, Ca), e = t.nodeType) {
				case 9:
				case 11:
					t = (t = t.documentElement) ? t.namespaceURI : je(null, "");
					break;
				default:
					t = je(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
			}
			ir(Oa), ur(Oa, t)
		}

		function xa() {
			ir(Oa), ir(Sa), ir(La)
		}

		function Ea(e) {
			Ta(La.current);
			var t = Ta(Oa.current),
				n = je(t, e.type);
			t !== n && (ur(Sa, e), ur(Oa, n))
		}

		function Pa(e) {
			Sa.current === e && (ir(Oa), ir(Sa))
		}
		var Fa = {
			current: 0
		};

		function Aa(e) {
			for (var t = e; null !== t;) {
				if (13 === t.tag) {
					var n = t.memoizedState;
					if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
				} else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
					if (0 !== (64 & t.effectTag)) return t
				} else if (null !== t.child) {
					t.child.return = t, t = t.child;
					continue
				}
				if (t === e) break;
				for (; null === t.sibling;) {
					if (null === t.return || t.return === e) return null;
					t = t.return
				}
				t.sibling.return = t.return, t = t.sibling
			}
			return null
		}

		function ja(e, t) {
			return {
				responder: e,
				props: t
			}
		}
		var Da = y.ReactCurrentDispatcher,
			Na = y.ReactCurrentBatchConfig,
			Ra = 0,
			Ia = null,
			Ua = null,
			Wa = null,
			Ya = !1;

		function Ba() {
			throw Error(o(321))
		}

		function qa(e, t) {
			if (null === t) return !1;
			for (var n = 0; n < t.length && n < e.length; n++)
				if (!jc(e[n], t[n])) return !1;
			return !0
		}

		function Ga(e, t, n, c, r, a) {
			if (Ra = a, Ia = t, t.memoizedState = null, t.updateQueue = null, t.expirationTime = 0, Da.current = null === e || null === e.memoizedState ? zo : yo, e = n(c, r), t.expirationTime === Ra) {
				a = 0;
				do {
					if (t.expirationTime = 0, !(25 > a)) throw Error(o(301));
					a += 1, Wa = Ua = null, t.updateQueue = null, Da.current = go, e = n(c, r)
				} while (t.expirationTime === Ra)
			}
			if (Da.current = mo, t = null !== Ua && null !== Ua.next, Ra = 0, Wa = Ua = Ia = null, Ya = !1, t) throw Error(o(300));
			return e
		}

		function Ka() {
			var e = {
				memoizedState: null,
				baseState: null,
				baseQueue: null,
				queue: null,
				next: null
			};
			return null === Wa ? Ia.memoizedState = Wa = e : Wa = Wa.next = e, Wa
		}

		function Qa() {
			if (null === Ua) {
				var e = Ia.alternate;
				e = null !== e ? e.memoizedState : null
			} else e = Ua.next;
			var t = null === Wa ? Ia.memoizedState : Wa.next;
			if (null !== t) Wa = t, Ua = e;
			else {
				if (null === e) throw Error(o(310));
				e = {
					memoizedState: (Ua = e).memoizedState,
					baseState: Ua.baseState,
					baseQueue: Ua.baseQueue,
					queue: Ua.queue,
					next: null
				}, null === Wa ? Ia.memoizedState = Wa = e : Wa = Wa.next = e
			}
			return Wa
		}

		function $a(e, t) {
			return "function" === typeof t ? t(e) : t
		}

		function Za(e) {
			var t = Qa(),
				n = t.queue;
			if (null === n) throw Error(o(311));
			n.lastRenderedReducer = e;
			var c = Ua,
				r = c.baseQueue,
				a = n.pending;
			if (null !== a) {
				if (null !== r) {
					var l = r.next;
					r.next = a.next, a.next = l
				}
				c.baseQueue = r = a, n.pending = null
			}
			if (null !== r) {
				r = r.next, c = c.baseState;
				var i = l = a = null,
					u = r;
				do {
					var s = u.expirationTime;
					if (s < Ra) {
						var h = {
							expirationTime: u.expirationTime,
							suspenseConfig: u.suspenseConfig,
							action: u.action,
							eagerReducer: u.eagerReducer,
							eagerState: u.eagerState,
							next: null
						};
						null === i ? (l = i = h, a = c) : i = i.next = h, s > Ia.expirationTime && (Ia.expirationTime = s, oi(s))
					} else null !== i && (i = i.next = {
						expirationTime: 1073741823,
						suspenseConfig: u.suspenseConfig,
						action: u.action,
						eagerReducer: u.eagerReducer,
						eagerState: u.eagerState,
						next: null
					}), ai(s, u.suspenseConfig), c = u.eagerReducer === e ? u.eagerState : e(c, u.action);
					u = u.next
				} while (null !== u && u !== r);
				null === i ? a = c : i.next = l, jc(c, t.memoizedState) || (To = !0), t.memoizedState = c, t.baseState = a, t.baseQueue = i, n.lastRenderedState = c
			}
			return [t.memoizedState, n.dispatch]
		}

		function Xa(e) {
			var t = Qa(),
				n = t.queue;
			if (null === n) throw Error(o(311));
			n.lastRenderedReducer = e;
			var c = n.dispatch,
				r = n.pending,
				a = t.memoizedState;
			if (null !== r) {
				n.pending = null;
				var l = r = r.next;
				do {
					a = e(a, l.action), l = l.next
				} while (l !== r);
				jc(a, t.memoizedState) || (To = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a
			}
			return [a, c]
		}

		function Ja(e) {
			var t = Ka();
			return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
				pending: null,
				dispatch: null,
				lastRenderedReducer: $a,
				lastRenderedState: e
			}).dispatch = po.bind(null, Ia, e), [t.memoizedState, e]
		}

		function eo(e, t, n, c) {
			return e = {
				tag: e,
				create: t,
				destroy: n,
				deps: c,
				next: null
			}, null === (t = Ia.updateQueue) ? (t = {
				lastEffect: null
			}, Ia.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (c = n.next, n.next = e, e.next = c, t.lastEffect = e), e
		}

		function to() {
			return Qa().memoizedState
		}

		function no(e, t, n, c) {
			var r = Ka();
			Ia.effectTag |= e, r.memoizedState = eo(1 | t, n, void 0, void 0 === c ? null : c)
		}

		function co(e, t, n, c) {
			var r = Qa();
			c = void 0 === c ? null : c;
			var a = void 0;
			if (null !== Ua) {
				var o = Ua.memoizedState;
				if (a = o.destroy, null !== c && qa(c, o.deps)) return void eo(t, n, a, c)
			}
			Ia.effectTag |= e, r.memoizedState = eo(1 | t, n, a, c)
		}

		function ro(e, t) {
			return no(516, 4, e, t)
		}

		function ao(e, t) {
			return co(516, 4, e, t)
		}

		function oo(e, t) {
			return co(4, 2, e, t)
		}

		function lo(e, t) {
			return "function" === typeof t ? (e = e(), t(e), function() {
				t(null)
			}) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() {
				t.current = null
			}) : void 0
		}

		function io(e, t, n) {
			return n = null !== n && void 0 !== n ? n.concat([e]) : null, co(4, 2, lo.bind(null, t, e), n)
		}

		function uo() {}

		function so(e, t) {
			return Ka().memoizedState = [e, void 0 === t ? null : t], e
		}

		function ho(e, t) {
			var n = Qa();
			t = void 0 === t ? null : t;
			var c = n.memoizedState;
			return null !== c && null !== t && qa(t, c[1]) ? c[0] : (n.memoizedState = [e, t], e)
		}

		function fo(e, t) {
			var n = Qa();
			t = void 0 === t ? null : t;
			var c = n.memoizedState;
			return null !== c && null !== t && qa(t, c[1]) ? c[0] : (e = e(), n.memoizedState = [e, t], e)
		}

		function vo(e, t, n) {
			var c = Rr();
			Ur(98 > c ? 98 : c, (function() {
				e(!0)
			})), Ur(97 < c ? 97 : c, (function() {
				var c = Na.suspense;
				Na.suspense = void 0 === t ? null : t;
				try {
					e(!1), n()
				} finally {
					Na.suspense = c
				}
			}))
		}

		function po(e, t, n) {
			var c = ql(),
				r = fa.suspense;
			r = {
				expirationTime: c = Gl(c, e, r),
				suspenseConfig: r,
				action: n,
				eagerReducer: null,
				eagerState: null,
				next: null
			};
			var a = t.pending;
			if (null === a ? r.next = r : (r.next = a.next, a.next = r), t.pending = r, a = e.alternate, e === Ia || null !== a && a === Ia) Ya = !0, r.expirationTime = Ra, Ia.expirationTime = Ra;
			else {
				if (0 === e.expirationTime && (null === a || 0 === a.expirationTime) && null !== (a = t.lastRenderedReducer)) try {
					var o = t.lastRenderedState,
						l = a(o, n);
					if (r.eagerReducer = a, r.eagerState = l, jc(l, o)) return
				} catch (i) {}
				Kl(e, c)
			}
		}
		var mo = {
				readContext: ca,
				useCallback: Ba,
				useContext: Ba,
				useEffect: Ba,
				useImperativeHandle: Ba,
				useLayoutEffect: Ba,
				useMemo: Ba,
				useReducer: Ba,
				useRef: Ba,
				useState: Ba,
				useDebugValue: Ba,
				useResponder: Ba,
				useDeferredValue: Ba,
				useTransition: Ba
			},
			zo = {
				readContext: ca,
				useCallback: so,
				useContext: ca,
				useEffect: ro,
				useImperativeHandle: function(e, t, n) {
					return n = null !== n && void 0 !== n ? n.concat([e]) : null, no(4, 2, lo.bind(null, t, e), n)
				},
				useLayoutEffect: function(e, t) {
					return no(4, 2, e, t)
				},
				useMemo: function(e, t) {
					var n = Ka();
					return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
				},
				useReducer: function(e, t, n) {
					var c = Ka();
					return t = void 0 !== n ? n(t) : t, c.memoizedState = c.baseState = t, e = (e = c.queue = {
						pending: null,
						dispatch: null,
						lastRenderedReducer: e,
						lastRenderedState: t
					}).dispatch = po.bind(null, Ia, e), [c.memoizedState, e]
				},
				useRef: function(e) {
					return e = {
						current: e
					}, Ka().memoizedState = e
				},
				useState: Ja,
				useDebugValue: uo,
				useResponder: ja,
				useDeferredValue: function(e, t) {
					var n = Ja(e),
						c = n[0],
						r = n[1];
					return ro((function() {
						var n = Na.suspense;
						Na.suspense = void 0 === t ? null : t;
						try {
							r(e)
						} finally {
							Na.suspense = n
						}
					}), [e, t]), c
				},
				useTransition: function(e) {
					var t = Ja(!1),
						n = t[0];
					return t = t[1], [so(vo.bind(null, t, e), [t, e]), n]
				}
			},
			yo = {
				readContext: ca,
				useCallback: ho,
				useContext: ca,
				useEffect: ao,
				useImperativeHandle: io,
				useLayoutEffect: oo,
				useMemo: fo,
				useReducer: Za,
				useRef: to,
				useState: function() {
					return Za($a)
				},
				useDebugValue: uo,
				useResponder: ja,
				useDeferredValue: function(e, t) {
					var n = Za($a),
						c = n[0],
						r = n[1];
					return ao((function() {
						var n = Na.suspense;
						Na.suspense = void 0 === t ? null : t;
						try {
							r(e)
						} finally {
							Na.suspense = n
						}
					}), [e, t]), c
				},
				useTransition: function(e) {
					var t = Za($a),
						n = t[0];
					return t = t[1], [ho(vo.bind(null, t, e), [t, e]), n]
				}
			},
			go = {
				readContext: ca,
				useCallback: ho,
				useContext: ca,
				useEffect: ao,
				useImperativeHandle: io,
				useLayoutEffect: oo,
				useMemo: fo,
				useReducer: Xa,
				useRef: to,
				useState: function() {
					return Xa($a)
				},
				useDebugValue: uo,
				useResponder: ja,
				useDeferredValue: function(e, t) {
					var n = Xa($a),
						c = n[0],
						r = n[1];
					return ao((function() {
						var n = Na.suspense;
						Na.suspense = void 0 === t ? null : t;
						try {
							r(e)
						} finally {
							Na.suspense = n
						}
					}), [e, t]), c
				},
				useTransition: function(e) {
					var t = Xa($a),
						n = t[0];
					return t = t[1], [ho(vo.bind(null, t, e), [t, e]), n]
				}
			},
			Mo = null,
			bo = null,
			Ho = !1;

		function Vo(e, t) {
			var n = wi(5, null, null, 0);
			n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
		}

		function wo(e, t) {
			switch (e.tag) {
				case 5:
					var n = e.type;
					return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
				case 6:
					return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
				case 13:
				default:
					return !1
			}
		}

		function _o(e) {
			if (Ho) {
				var t = bo;
				if (t) {
					var n = t;
					if (!wo(e, t)) {
						if (!(t = bn(n.nextSibling)) || !wo(e, t)) return e.effectTag = -1025 & e.effectTag | 2, Ho = !1, void(Mo = e);
						Vo(Mo, n)
					}
					Mo = e, bo = bn(t.firstChild)
				} else e.effectTag = -1025 & e.effectTag | 2, Ho = !1, Mo = e
			}
		}

		function Co(e) {
			for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
			Mo = e
		}

		function Oo(e) {
			if (e !== Mo) return !1;
			if (!Ho) return Co(e), Ho = !0, !1;
			var t = e.type;
			if (5 !== e.tag || "head" !== t && "body" !== t && !yn(t, e.memoizedProps))
				for (t = bo; t;) Vo(e, t), t = bn(t.nextSibling);
			if (Co(e), 13 === e.tag) {
				if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
				e: {
					for (e = e.nextSibling, t = 0; e;) {
						if (8 === e.nodeType) {
							var n = e.data;
							if ("/$" === n) {
								if (0 === t) {
									bo = bn(e.nextSibling);
									break e
								}
								t--
							} else "$" !== n && "$!" !== n && "$?" !== n || t++
						}
						e = e.nextSibling
					}
					bo = null
				}
			} else bo = Mo ? bn(e.stateNode.nextSibling) : null;
			return !0
		}

		function So() {
			bo = Mo = null, Ho = !1
		}
		var Lo = y.ReactCurrentOwner,
			To = !1;

		function ko(e, t, n, c) {
			t.child = null === e ? _a(t, null, n, c) : wa(t, e.child, n, c)
		}

		function xo(e, t, n, c, r) {
			n = n.render;
			var a = t.ref;
			return na(t, r), c = Ga(e, t, n, c, a, r), null === e || To ? (t.effectTag |= 1, ko(e, t, c, r), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= r && (e.expirationTime = 0), Ko(e, t, r))
		}

		function Eo(e, t, n, c, r, a) {
			if (null === e) {
				var o = n.type;
				return "function" !== typeof o || _i(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Oi(n.type, null, c, null, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, Po(e, t, o, c, r, a))
			}
			return o = e.child, r < a && (r = o.memoizedProps, (n = null !== (n = n.compare) ? n : Nc)(r, c) && e.ref === t.ref) ? Ko(e, t, a) : (t.effectTag |= 1, (e = Ci(o, c)).ref = t.ref, e.return = t, t.child = e)
		}

		function Po(e, t, n, c, r, a) {
			return null !== e && Nc(e.memoizedProps, c) && e.ref === t.ref && (To = !1, r < a) ? (t.expirationTime = e.expirationTime, Ko(e, t, a)) : Ao(e, t, n, c, a)
		}

		function Fo(e, t) {
			var n = t.ref;
			(null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
		}

		function Ao(e, t, n, c, r) {
			var a = pr(n) ? vr : hr.current;
			return a = dr(t, a), na(t, r), n = Ga(e, t, n, c, a, r), null === e || To ? (t.effectTag |= 1, ko(e, t, n, r), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= r && (e.expirationTime = 0), Ko(e, t, r))
		}

		function jo(e, t, n, c, r) {
			if (pr(n)) {
				var a = !0;
				gr(t)
			} else a = !1;
			if (na(t, r), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), za(t, n, c), ga(t, n, c, r), c = !0;
			else if (null === e) {
				var o = t.stateNode,
					l = t.memoizedProps;
				o.props = l;
				var i = o.context,
					u = n.contextType;
				"object" === typeof u && null !== u ? u = ca(u) : u = dr(t, u = pr(n) ? vr : hr.current);
				var s = n.getDerivedStateFromProps,
					h = "function" === typeof s || "function" === typeof o.getSnapshotBeforeUpdate;
				h || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (l !== c || i !== u) && ya(t, o, c, u), ra = !1;
				var f = t.memoizedState;
				o.state = f, sa(t, c, o, r), i = t.memoizedState, l !== c || f !== i || fr.current || ra ? ("function" === typeof s && (da(t, n, s, c), i = t.memoizedState), (l = ra || ma(t, n, l, c, f, i, u)) ? (h || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || ("function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" === typeof o.componentDidMount && (t.effectTag |= 4)) : ("function" === typeof o.componentDidMount && (t.effectTag |= 4), t.memoizedProps = c, t.memoizedState = i), o.props = c, o.state = i, o.context = u, c = l) : ("function" === typeof o.componentDidMount && (t.effectTag |= 4), c = !1)
			} else o = t.stateNode, oa(e, t), l = t.memoizedProps, o.props = t.type === t.elementType ? l : Kr(t.type, l), i = o.context, "object" === typeof(u = n.contextType) && null !== u ? u = ca(u) : u = dr(t, u = pr(n) ? vr : hr.current), (h = "function" === typeof(s = n.getDerivedStateFromProps) || "function" === typeof o.getSnapshotBeforeUpdate) || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (l !== c || i !== u) && ya(t, o, c, u), ra = !1, i = t.memoizedState, o.state = i, sa(t, c, o, r), f = t.memoizedState, l !== c || i !== f || fr.current || ra ? ("function" === typeof s && (da(t, n, s, c), f = t.memoizedState), (s = ra || ma(t, n, l, c, i, f, u)) ? (h || "function" !== typeof o.UNSAFE_componentWillUpdate && "function" !== typeof o.componentWillUpdate || ("function" === typeof o.componentWillUpdate && o.componentWillUpdate(c, f, u), "function" === typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(c, f, u)), "function" === typeof o.componentDidUpdate && (t.effectTag |= 4), "function" === typeof o.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" !== typeof o.componentDidUpdate || l === e.memoizedProps && i === e.memoizedState || (t.effectTag |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && i === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = c, t.memoizedState = f), o.props = c, o.state = f, o.context = u, c = s) : ("function" !== typeof o.componentDidUpdate || l === e.memoizedProps && i === e.memoizedState || (t.effectTag |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && i === e.memoizedState || (t.effectTag |= 256), c = !1);
			return Do(e, t, n, c, a, r)
		}

		function Do(e, t, n, c, r, a) {
			Fo(e, t);
			var o = 0 !== (64 & t.effectTag);
			if (!c && !o) return r && Mr(t, n, !1), Ko(e, t, a);
			c = t.stateNode, Lo.current = t;
			var l = o && "function" !== typeof n.getDerivedStateFromError ? null : c.render();
			return t.effectTag |= 1, null !== e && o ? (t.child = wa(t, e.child, null, a), t.child = wa(t, null, l, a)) : ko(e, t, l, a), t.memoizedState = c.state, r && Mr(t, n, !0), t.child
		}

		function No(e) {
			var t = e.stateNode;
			t.pendingContext ? zr(0, t.pendingContext, t.pendingContext !== t.context) : t.context && zr(0, t.context, !1), ka(e, t.containerInfo)
		}
		var Ro, Io, Uo, Wo = {
			dehydrated: null,
			retryTime: 0
		};

		function Yo(e, t, n) {
			var c, r = t.mode,
				a = t.pendingProps,
				o = Fa.current,
				l = !1;
			if ((c = 0 !== (64 & t.effectTag)) || (c = 0 !== (2 & o) && (null === e || null !== e.memoizedState)), c ? (l = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === a.fallback || !0 === a.unstable_avoidThisFallback || (o |= 1), ur(Fa, 1 & o), null === e) {
				if (void 0 !== a.fallback && _o(t), l) {
					if (l = a.fallback, (a = Si(null, r, 0, null)).return = t, 0 === (2 & t.mode))
						for (e = null !== t.memoizedState ? t.child.child : t.child, a.child = e; null !== e;) e.return = a, e = e.sibling;
					return (n = Si(l, r, n, null)).return = t, a.sibling = n, t.memoizedState = Wo, t.child = a, n
				}
				return r = a.children, t.memoizedState = null, t.child = _a(t, null, r, n)
			}
			if (null !== e.memoizedState) {
				if (r = (e = e.child).sibling, l) {
					if (a = a.fallback, (n = Ci(e, e.pendingProps)).return = t, 0 === (2 & t.mode) && (l = null !== t.memoizedState ? t.child.child : t.child) !== e.child)
						for (n.child = l; null !== l;) l.return = n, l = l.sibling;
					return (r = Ci(r, a)).return = t, n.sibling = r, n.childExpirationTime = 0, t.memoizedState = Wo, t.child = n, r
				}
				return n = wa(t, e.child, a.children, n), t.memoizedState = null, t.child = n
			}
			if (e = e.child, l) {
				if (l = a.fallback, (a = Si(null, r, 0, null)).return = t, a.child = e, null !== e && (e.return = a), 0 === (2 & t.mode))
					for (e = null !== t.memoizedState ? t.child.child : t.child, a.child = e; null !== e;) e.return = a, e = e.sibling;
				return (n = Si(l, r, n, null)).return = t, a.sibling = n, n.effectTag |= 2, a.childExpirationTime = 0, t.memoizedState = Wo, t.child = a, n
			}
			return t.memoizedState = null, t.child = wa(t, e, a.children, n)
		}

		function Bo(e, t) {
			e.expirationTime < t && (e.expirationTime = t);
			var n = e.alternate;
			null !== n && n.expirationTime < t && (n.expirationTime = t), ta(e.return, t)
		}

		function qo(e, t, n, c, r, a) {
			var o = e.memoizedState;
			null === o ? e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: c,
				tail: n,
				tailExpiration: 0,
				tailMode: r,
				lastEffect: a
			} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = c, o.tail = n, o.tailExpiration = 0, o.tailMode = r, o.lastEffect = a)
		}

		function Go(e, t, n) {
			var c = t.pendingProps,
				r = c.revealOrder,
				a = c.tail;
			if (ko(e, t, c.children, n), 0 !== (2 & (c = Fa.current))) c = 1 & c | 2, t.effectTag |= 64;
			else {
				if (null !== e && 0 !== (64 & e.effectTag)) e: for (e = t.child; null !== e;) {
					if (13 === e.tag) null !== e.memoizedState && Bo(e, n);
					else if (19 === e.tag) Bo(e, n);
					else if (null !== e.child) {
						e.child.return = e, e = e.child;
						continue
					}
					if (e === t) break e;
					for (; null === e.sibling;) {
						if (null === e.return || e.return === t) break e;
						e = e.return
					}
					e.sibling.return = e.return, e = e.sibling
				}
				c &= 1
			}
			if (ur(Fa, c), 0 === (2 & t.mode)) t.memoizedState = null;
			else switch (r) {
				case "forwards":
					for (n = t.child, r = null; null !== n;) null !== (e = n.alternate) && null === Aa(e) && (r = n), n = n.sibling;
					null === (n = r) ? (r = t.child, t.child = null) : (r = n.sibling, n.sibling = null), qo(t, !1, r, n, a, t.lastEffect);
					break;
				case "backwards":
					for (n = null, r = t.child, t.child = null; null !== r;) {
						if (null !== (e = r.alternate) && null === Aa(e)) {
							t.child = r;
							break
						}
						e = r.sibling, r.sibling = n, n = r, r = e
					}
					qo(t, !0, n, null, a, t.lastEffect);
					break;
				case "together":
					qo(t, !1, null, null, void 0, t.lastEffect);
					break;
				default:
					t.memoizedState = null
			}
			return t.child
		}

		function Ko(e, t, n) {
			null !== e && (t.dependencies = e.dependencies);
			var c = t.expirationTime;
			if (0 !== c && oi(c), t.childExpirationTime < n) return null;
			if (null !== e && t.child !== e.child) throw Error(o(153));
			if (null !== t.child) {
				for (n = Ci(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Ci(e, e.pendingProps)).return = t;
				n.sibling = null
			}
			return t.child
		}

		function Qo(e, t) {
			switch (e.tailMode) {
				case "hidden":
					t = e.tail;
					for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
					null === n ? e.tail = null : n.sibling = null;
					break;
				case "collapsed":
					n = e.tail;
					for (var c = null; null !== n;) null !== n.alternate && (c = n), n = n.sibling;
					null === c ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : c.sibling = null
			}
		}

		function $o(e, t, n) {
			var c = t.pendingProps;
			switch (t.tag) {
				case 2:
				case 16:
				case 15:
				case 0:
				case 11:
				case 7:
				case 8:
				case 12:
				case 9:
				case 14:
					return null;
				case 1:
					return pr(t.type) && mr(), null;
				case 3:
					return xa(), ir(fr), ir(hr), (n = t.stateNode).pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || !Oo(t) || (t.effectTag |= 4), null;
				case 5:
					Pa(t), n = Ta(La.current);
					var a = t.type;
					if (null !== e && null != t.stateNode) Io(e, t, a, c, n), e.ref !== t.ref && (t.effectTag |= 128);
					else {
						if (!c) {
							if (null === t.stateNode) throw Error(o(166));
							return null
						}
						if (e = Ta(Oa.current), Oo(t)) {
							c = t.stateNode, a = t.type;
							var l = t.memoizedProps;
							switch (c[wn] = t, c[_n] = l, a) {
								case "iframe":
								case "object":
								case "embed":
									Gt("load", c);
									break;
								case "video":
								case "audio":
									for (e = 0; e < $e.length; e++) Gt($e[e], c);
									break;
								case "source":
									Gt("error", c);
									break;
								case "img":
								case "image":
								case "link":
									Gt("error", c), Gt("load", c);
									break;
								case "form":
									Gt("reset", c), Gt("submit", c);
									break;
								case "details":
									Gt("toggle", c);
									break;
								case "input":
									Ve(c, l), Gt("invalid", c), ln(n, "onChange");
									break;
								case "select":
									c._wrapperState = {
										wasMultiple: !!l.multiple
									}, Gt("invalid", c), ln(n, "onChange");
									break;
								case "textarea":
									ke(c, l), Gt("invalid", c), ln(n, "onChange")
							}
							for (var i in rn(a, l), e = null, l)
								if (l.hasOwnProperty(i)) {
									var u = l[i];
									"children" === i ? "string" === typeof u ? c.textContent !== u && (e = ["children", u]) : "number" === typeof u && c.textContent !== "" + u && (e = ["children", "" + u]) : B.hasOwnProperty(i) && null != u && ln(n, i)
								}
							switch (a) {
								case "input":
									Me(c), Ce(c, l, !0);
									break;
								case "textarea":
									Me(c), Ee(c);
									break;
								case "select":
								case "option":
									break;
								default:
									"function" === typeof l.onClick && (c.onclick = un)
							}
							n = e, t.updateQueue = n, null !== n && (t.effectTag |= 4)
						} else {
							switch (i = 9 === n.nodeType ? n : n.ownerDocument, e === on && (e = Ae(a)), e === on ? "script" === a ? ((e = i.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof c.is ? e = i.createElement(a, {
								is: c.is
							}) : (e = i.createElement(a), "select" === a && (i = e, c.multiple ? i.multiple = !0 : c.size && (i.size = c.size))) : e = i.createElementNS(e, a), e[wn] = t, e[_n] = c, Ro(e, t), t.stateNode = e, i = an(a, c), a) {
								case "iframe":
								case "object":
								case "embed":
									Gt("load", e), u = c;
									break;
								case "video":
								case "audio":
									for (u = 0; u < $e.length; u++) Gt($e[u], e);
									u = c;
									break;
								case "source":
									Gt("error", e), u = c;
									break;
								case "img":
								case "image":
								case "link":
									Gt("error", e), Gt("load", e), u = c;
									break;
								case "form":
									Gt("reset", e), Gt("submit", e), u = c;
									break;
								case "details":
									Gt("toggle", e), u = c;
									break;
								case "input":
									Ve(e, c), u = He(e, c), Gt("invalid", e), ln(n, "onChange");
									break;
								case "option":
									u = Se(e, c);
									break;
								case "select":
									e._wrapperState = {
										wasMultiple: !!c.multiple
									}, u = r({}, c, {
										value: void 0
									}), Gt("invalid", e), ln(n, "onChange");
									break;
								case "textarea":
									ke(e, c), u = Te(e, c), Gt("invalid", e), ln(n, "onChange");
									break;
								default:
									u = c
							}
							rn(a, u);
							var s = u;
							for (l in s)
								if (s.hasOwnProperty(l)) {
									var h = s[l];
									"style" === l ? nn(e, h) : "dangerouslySetInnerHTML" === l ? null != (h = h ? h.__html : void 0) && Ne(e, h) : "children" === l ? "string" === typeof h ? ("textarea" !== a || "" !== h) && Re(e, h) : "number" === typeof h && Re(e, "" + h) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (B.hasOwnProperty(l) ? null != h && ln(n, l) : null != h && ze(e, l, h, i))
								}
							switch (a) {
								case "input":
									Me(e), Ce(e, c, !1);
									break;
								case "textarea":
									Me(e), Ee(e);
									break;
								case "option":
									null != c.value && e.setAttribute("value", "" + ye(c.value));
									break;
								case "select":
									e.multiple = !!c.multiple, null != (n = c.value) ? Le(e, !!c.multiple, n, !1) : null != c.defaultValue && Le(e, !!c.multiple, c.defaultValue, !0);
									break;
								default:
									"function" === typeof u.onClick && (e.onclick = un)
							}
							zn(a, c) && (t.effectTag |= 4)
						}
						null !== t.ref && (t.effectTag |= 128)
					}
					return null;
				case 6:
					if (e && null != t.stateNode) Uo(0, t, e.memoizedProps, c);
					else {
						if ("string" !== typeof c && null === t.stateNode) throw Error(o(166));
						n = Ta(La.current), Ta(Oa.current), Oo(t) ? (n = t.stateNode, c = t.memoizedProps, n[wn] = t, n.nodeValue !== c && (t.effectTag |= 4)) : ((n = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(c))[wn] = t, t.stateNode = n)
					}
					return null;
				case 13:
					return ir(Fa), c = t.memoizedState, 0 !== (64 & t.effectTag) ? (t.expirationTime = n, t) : (n = null !== c, c = !1, null === e ? void 0 !== t.memoizedProps.fallback && Oo(t) : (c = null !== (a = e.memoizedState), n || null === a || null !== (a = e.child.sibling) && (null !== (l = t.firstEffect) ? (t.firstEffect = a, a.nextEffect = l) : (t.firstEffect = t.lastEffect = a, a.nextEffect = null), a.effectTag = 8)), n && !c && 0 !== (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 !== (1 & Fa.current) ? Ol === Ml && (Ol = bl) : (Ol !== Ml && Ol !== bl || (Ol = Hl), 0 !== xl && null !== wl && (Ei(wl, Cl), Pi(wl, xl)))), (n || c) && (t.effectTag |= 4), null);
				case 4:
					return xa(), null;
				case 10:
					return ea(t), null;
				case 17:
					return pr(t.type) && mr(), null;
				case 19:
					if (ir(Fa), null === (c = t.memoizedState)) return null;
					if (a = 0 !== (64 & t.effectTag), null === (l = c.rendering)) {
						if (a) Qo(c, !1);
						else if (Ol !== Ml || null !== e && 0 !== (64 & e.effectTag))
							for (l = t.child; null !== l;) {
								if (null !== (e = Aa(l))) {
									for (t.effectTag |= 64, Qo(c, !1), null !== (a = e.updateQueue) && (t.updateQueue = a, t.effectTag |= 4), null === c.lastEffect && (t.firstEffect = null), t.lastEffect = c.lastEffect, c = t.child; null !== c;) l = n, (a = c).effectTag &= 2, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, null === (e = a.alternate) ? (a.childExpirationTime = 0, a.expirationTime = l, a.child = null, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null) : (a.childExpirationTime = e.childExpirationTime, a.expirationTime = e.expirationTime, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, l = e.dependencies, a.dependencies = null === l ? null : {
										expirationTime: l.expirationTime,
										firstContext: l.firstContext,
										responders: l.responders
									}), c = c.sibling;
									return ur(Fa, 1 & Fa.current | 2), t.child
								}
								l = l.sibling
							}
					} else {
						if (!a)
							if (null !== (e = Aa(l))) {
								if (t.effectTag |= 64, a = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.effectTag |= 4), Qo(c, !0), null === c.tail && "hidden" === c.tailMode && !l.alternate) return null !== (t = t.lastEffect = c.lastEffect) && (t.nextEffect = null), null
							} else 2 * Nr() - c.renderingStartTime > c.tailExpiration && 1 < n && (t.effectTag |= 64, a = !0, Qo(c, !1), t.expirationTime = t.childExpirationTime = n - 1);
						c.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = c.last) ? n.sibling = l : t.child = l, c.last = l)
					}
					return null !== c.tail ? (0 === c.tailExpiration && (c.tailExpiration = Nr() + 500), n = c.tail, c.rendering = n, c.tail = n.sibling, c.lastEffect = t.lastEffect, c.renderingStartTime = Nr(), n.sibling = null, t = Fa.current, ur(Fa, a ? 1 & t | 2 : 1 & t), n) : null
			}
			throw Error(o(156, t.tag))
		}

		function Zo(e) {
			switch (e.tag) {
				case 1:
					pr(e.type) && mr();
					var t = e.effectTag;
					return 4096 & t ? (e.effectTag = -4097 & t | 64, e) : null;
				case 3:
					if (xa(), ir(fr), ir(hr), 0 !== (64 & (t = e.effectTag))) throw Error(o(285));
					return e.effectTag = -4097 & t | 64, e;
				case 5:
					return Pa(e), null;
				case 13:
					return ir(Fa), 4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64, e) : null;
				case 19:
					return ir(Fa), null;
				case 4:
					return xa(), null;
				case 10:
					return ea(e), null;
				default:
					return null
			}
		}

		function Xo(e, t) {
			return {
				value: e,
				source: t,
				stack: D(t)
			}
		}
		Ro = function(e, t) {
			for (var n = t.child; null !== n;) {
				if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
				else if (4 !== n.tag && null !== n.child) {
					n.child.return = n, n = n.child;
					continue
				}
				if (n === t) break;
				for (; null === n.sibling;) {
					if (null === n.return || n.return === t) return;
					n = n.return
				}
				n.sibling.return = n.return, n = n.sibling
			}
		}, Io = function(e, t, n, c, a) {
			var o = e.memoizedProps;
			if (o !== c) {
				var l, i, u = t.stateNode;
				switch (Ta(Oa.current), e = null, n) {
					case "input":
						o = He(u, o), c = He(u, c), e = [];
						break;
					case "option":
						o = Se(u, o), c = Se(u, c), e = [];
						break;
					case "select":
						o = r({}, o, {
							value: void 0
						}), c = r({}, c, {
							value: void 0
						}), e = [];
						break;
					case "textarea":
						o = Te(u, o), c = Te(u, c), e = [];
						break;
					default:
						"function" !== typeof o.onClick && "function" === typeof c.onClick && (u.onclick = un)
				}
				for (l in rn(n, c), n = null, o)
					if (!c.hasOwnProperty(l) && o.hasOwnProperty(l) && null != o[l])
						if ("style" === l)
							for (i in u = o[l]) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
						else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (B.hasOwnProperty(l) ? e || (e = []) : (e = e || []).push(l, null));
				for (l in c) {
					var s = c[l];
					if (u = null != o ? o[l] : void 0, c.hasOwnProperty(l) && s !== u && (null != s || null != u))
						if ("style" === l)
							if (u) {
								for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
								for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i])
							} else n || (e || (e = []), e.push(l, n)), n = s;
					else "dangerouslySetInnerHTML" === l ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, null != s && u !== s && (e = e || []).push(l, s)) : "children" === l ? u === s || "string" !== typeof s && "number" !== typeof s || (e = e || []).push(l, "" + s) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (B.hasOwnProperty(l) ? (null != s && ln(a, l), e || u === s || (e = [])) : (e = e || []).push(l, s))
				}
				n && (e = e || []).push("style", n), a = e, (t.updateQueue = a) && (t.effectTag |= 4)
			}
		}, Uo = function(e, t, n, c) {
			n !== c && (t.effectTag |= 4)
		};
		var Jo = "function" === typeof WeakSet ? WeakSet : Set;

		function el(e, t) {
			var n = t.source,
				c = t.stack;
			null === c && null !== n && (c = D(n)), null !== n && j(n.type), t = t.value, null !== e && 1 === e.tag && j(e.type);
			try {
				console.error(t)
			} catch (r) {
				setTimeout((function() {
					throw r
				}))
			}
		}

		function tl(e) {
			var t = e.ref;
			if (null !== t)
				if ("function" === typeof t) try {
					t(null)
				} catch (n) {
					yi(e, n)
				} else t.current = null
		}

		function nl(e, t) {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
				case 22:
					return;
				case 1:
					if (256 & t.effectTag && null !== e) {
						var n = e.memoizedProps,
							c = e.memoizedState;
						t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Kr(t.type, n), c), e.__reactInternalSnapshotBeforeUpdate = t
					}
					return;
				case 3:
				case 5:
				case 6:
				case 4:
				case 17:
					return
			}
			throw Error(o(163))
		}

		function cl(e, t) {
			if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
				var n = t = t.next;
				do {
					if ((n.tag & e) === e) {
						var c = n.destroy;
						n.destroy = void 0, void 0 !== c && c()
					}
					n = n.next
				} while (n !== t)
			}
		}

		function rl(e, t) {
			if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
				var n = t = t.next;
				do {
					if ((n.tag & e) === e) {
						var c = n.create;
						n.destroy = c()
					}
					n = n.next
				} while (n !== t)
			}
		}

		function al(e, t, n) {
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
				case 22:
					return void rl(3, n);
				case 1:
					if (e = n.stateNode, 4 & n.effectTag)
						if (null === t) e.componentDidMount();
						else {
							var c = n.elementType === n.type ? t.memoizedProps : Kr(n.type, t.memoizedProps);
							e.componentDidUpdate(c, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate)
						}
					return void(null !== (t = n.updateQueue) && ha(n, t, e));
				case 3:
					if (null !== (t = n.updateQueue)) {
						if (e = null, null !== n.child) switch (n.child.tag) {
							case 5:
								e = n.child.stateNode;
								break;
							case 1:
								e = n.child.stateNode
						}
						ha(n, t, e)
					}
					return;
				case 5:
					return e = n.stateNode, void(null === t && 4 & n.effectTag && zn(n.type, n.memoizedProps) && e.focus());
				case 6:
				case 4:
				case 12:
					return;
				case 13:
					return void(null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && At(n)))));
				case 19:
				case 17:
				case 20:
				case 21:
					return
			}
			throw Error(o(163))
		}

		function ol(e, t, n) {
			switch ("function" === typeof Hi && Hi(t), t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
				case 22:
					if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
						var c = e.next;
						Ur(97 < n ? 97 : n, (function() {
							var e = c;
							do {
								var n = e.destroy;
								if (void 0 !== n) {
									var r = t;
									try {
										n()
									} catch (a) {
										yi(r, a)
									}
								}
								e = e.next
							} while (e !== c)
						}))
					}
					break;
				case 1:
					tl(t), "function" === typeof(n = t.stateNode).componentWillUnmount && function(e, t) {
						try {
							t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
						} catch (n) {
							yi(e, n)
						}
					}(t, n);
					break;
				case 5:
					tl(t);
					break;
				case 4:
					sl(e, t, n)
			}
		}

		function ll(e) {
			var t = e.alternate;
			e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, e.stateNode = null, null !== t && ll(t)
		}

		function il(e) {
			return 5 === e.tag || 3 === e.tag || 4 === e.tag
		}

		function ul(e) {
			e: {
				for (var t = e.return; null !== t;) {
					if (il(t)) {
						var n = t;
						break e
					}
					t = t.return
				}
				throw Error(o(160))
			}
			switch (t = n.stateNode, n.tag) {
				case 5:
					var c = !1;
					break;
				case 3:
				case 4:
					t = t.containerInfo, c = !0;
					break;
				default:
					throw Error(o(161))
			}
			16 & n.effectTag && (Re(t, ""), n.effectTag &= -17);e: t: for (n = e;;) {
				for (; null === n.sibling;) {
					if (null === n.return || il(n.return)) {
						n = null;
						break e
					}
					n = n.return
				}
				for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
					if (2 & n.effectTag) continue t;
					if (null === n.child || 4 === n.tag) continue t;
					n.child.return = n, n = n.child
				}
				if (!(2 & n.effectTag)) {
					n = n.stateNode;
					break e
				}
			}
			c ? function e(t, n, c) {
				var r = t.tag,
					a = 5 === r || 6 === r;
				if (a) t = a ? t.stateNode : t.stateNode.instance, n ? 8 === c.nodeType ? c.parentNode.insertBefore(t, n) : c.insertBefore(t, n) : (8 === c.nodeType ? (n = c.parentNode).insertBefore(t, c) : (n = c).appendChild(t), null !== (c = c._reactRootContainer) && void 0 !== c || null !== n.onclick || (n.onclick = un));
				else if (4 !== r && null !== (t = t.child))
					for (e(t, n, c), t = t.sibling; null !== t;) e(t, n, c), t = t.sibling
			}(e, n, t) : function e(t, n, c) {
				var r = t.tag,
					a = 5 === r || 6 === r;
				if (a) t = a ? t.stateNode : t.stateNode.instance, n ? c.insertBefore(t, n) : c.appendChild(t);
				else if (4 !== r && null !== (t = t.child))
					for (e(t, n, c), t = t.sibling; null !== t;) e(t, n, c), t = t.sibling
			}(e, n, t)
		}

		function sl(e, t, n) {
			for (var c, r, a = t, l = !1;;) {
				if (!l) {
					l = a.return;
					e: for (;;) {
						if (null === l) throw Error(o(160));
						switch (c = l.stateNode, l.tag) {
							case 5:
								r = !1;
								break e;
							case 3:
							case 4:
								c = c.containerInfo, r = !0;
								break e
						}
						l = l.return
					}
					l = !0
				}
				if (5 === a.tag || 6 === a.tag) {
					e: for (var i = e, u = a, s = n, h = u;;)
						if (ol(i, h, s), null !== h.child && 4 !== h.tag) h.child.return = h, h = h.child;
						else {
							if (h === u) break e;
							for (; null === h.sibling;) {
								if (null === h.return || h.return === u) break e;
								h = h.return
							}
							h.sibling.return = h.return, h = h.sibling
						}r ? (i = c, u = a.stateNode, 8 === i.nodeType ? i.parentNode.removeChild(u) : i.removeChild(u)) : c.removeChild(a.stateNode)
				}
				else if (4 === a.tag) {
					if (null !== a.child) {
						c = a.stateNode.containerInfo, r = !0, a.child.return = a, a = a.child;
						continue
					}
				} else if (ol(e, a, n), null !== a.child) {
					a.child.return = a, a = a.child;
					continue
				}
				if (a === t) break;
				for (; null === a.sibling;) {
					if (null === a.return || a.return === t) return;
					4 === (a = a.return).tag && (l = !1)
				}
				a.sibling.return = a.return, a = a.sibling
			}
		}

		function hl(e, t) {
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
				case 22:
					return void cl(3, t);
				case 1:
					return;
				case 5:
					var n = t.stateNode;
					if (null != n) {
						var c = t.memoizedProps,
							r = null !== e ? e.memoizedProps : c;
						e = t.type;
						var a = t.updateQueue;
						if (t.updateQueue = null, null !== a) {
							for (n[_n] = c, "input" === e && "radio" === c.type && null != c.name && we(n, c), an(e, r), t = an(e, c), r = 0; r < a.length; r += 2) {
								var l = a[r],
									i = a[r + 1];
								"style" === l ? nn(n, i) : "dangerouslySetInnerHTML" === l ? Ne(n, i) : "children" === l ? Re(n, i) : ze(n, l, i, t)
							}
							switch (e) {
								case "input":
									_e(n, c);
									break;
								case "textarea":
									xe(n, c);
									break;
								case "select":
									t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!c.multiple, null != (e = c.value) ? Le(n, !!c.multiple, e, !1) : t !== !!c.multiple && (null != c.defaultValue ? Le(n, !!c.multiple, c.defaultValue, !0) : Le(n, !!c.multiple, c.multiple ? [] : "", !1))
							}
						}
					}
					return;
				case 6:
					if (null === t.stateNode) throw Error(o(162));
					return void(t.stateNode.nodeValue = t.memoizedProps);
				case 3:
					return void((t = t.stateNode).hydrate && (t.hydrate = !1, At(t.containerInfo)));
				case 12:
					return;
				case 13:
					if (n = t, null === t.memoizedState ? c = !1 : (c = !0, n = t.child, Pl = Nr()), null !== n) e: for (e = n;;) {
						if (5 === e.tag) a = e.stateNode, c ? "function" === typeof(a = a.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (a = e.stateNode, r = void 0 !== (r = e.memoizedProps.style) && null !== r && r.hasOwnProperty("display") ? r.display : null, a.style.display = tn("display", r));
						else if (6 === e.tag) e.stateNode.nodeValue = c ? "" : e.memoizedProps;
						else {
							if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
								(a = e.child.sibling).return = e, e = a;
								continue
							}
							if (null !== e.child) {
								e.child.return = e, e = e.child;
								continue
							}
						}
						if (e === n) break;
						for (; null === e.sibling;) {
							if (null === e.return || e.return === n) break e;
							e = e.return
						}
						e.sibling.return = e.return, e = e.sibling
					}
					return void fl(t);
				case 19:
					return void fl(t);
				case 17:
					return
			}
			throw Error(o(163))
		}

		function fl(e) {
			var t = e.updateQueue;
			if (null !== t) {
				e.updateQueue = null;
				var n = e.stateNode;
				null === n && (n = e.stateNode = new Jo), t.forEach((function(t) {
					var c = Mi.bind(null, e, t);
					n.has(t) || (n.add(t), t.then(c, c))
				}))
			}
		}
		var vl = "function" === typeof WeakMap ? WeakMap : Map;

		function dl(e, t, n) {
			(n = la(n, null)).tag = 3, n.payload = {
				element: null
			};
			var c = t.value;
			return n.callback = function() {
				Al || (Al = !0, jl = c), el(e, t)
			}, n
		}

		function pl(e, t, n) {
			(n = la(n, null)).tag = 3;
			var c = e.type.getDerivedStateFromError;
			if ("function" === typeof c) {
				var r = t.value;
				n.payload = function() {
					return el(e, t), c(r)
				}
			}
			var a = e.stateNode;
			return null !== a && "function" === typeof a.componentDidCatch && (n.callback = function() {
				"function" !== typeof c && (null === Dl ? Dl = new Set([this]) : Dl.add(this), el(e, t));
				var n = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: null !== n ? n : ""
				})
			}), n
		}
		var ml, zl = Math.ceil,
			yl = y.ReactCurrentDispatcher,
			gl = y.ReactCurrentOwner,
			Ml = 0,
			bl = 3,
			Hl = 4,
			Vl = 0,
			wl = null,
			_l = null,
			Cl = 0,
			Ol = Ml,
			Sl = null,
			Ll = 1073741823,
			Tl = 1073741823,
			kl = null,
			xl = 0,
			El = !1,
			Pl = 0,
			Fl = null,
			Al = !1,
			jl = null,
			Dl = null,
			Nl = !1,
			Rl = null,
			Il = 90,
			Ul = null,
			Wl = 0,
			Yl = null,
			Bl = 0;

		function ql() {
			return 0 !== (48 & Vl) ? 1073741821 - (Nr() / 10 | 0) : 0 !== Bl ? Bl : Bl = 1073741821 - (Nr() / 10 | 0)
		}

		function Gl(e, t, n) {
			if (0 === (2 & (t = t.mode))) return 1073741823;
			var c = Rr();
			if (0 === (4 & t)) return 99 === c ? 1073741823 : 1073741822;
			if (0 !== (16 & Vl)) return Cl;
			if (null !== n) e = Gr(e, 0 | n.timeoutMs || 5e3, 250);
			else switch (c) {
				case 99:
					e = 1073741823;
					break;
				case 98:
					e = Gr(e, 150, 100);
					break;
				case 97:
				case 96:
					e = Gr(e, 5e3, 250);
					break;
				case 95:
					e = 2;
					break;
				default:
					throw Error(o(326))
			}
			return null !== wl && e === Cl && --e, e
		}

		function Kl(e, t) {
			if (50 < Wl) throw Wl = 0, Yl = null, Error(o(185));
			if (null !== (e = Ql(e, t))) {
				var n = Rr();
				1073741823 === t ? 0 !== (8 & Vl) && 0 === (48 & Vl) ? Jl(e) : (Zl(e), 0 === Vl && Br()) : Zl(e), 0 === (4 & Vl) || 98 !== n && 99 !== n || (null === Ul ? Ul = new Map([
					[e, t]
				]) : (void 0 === (n = Ul.get(e)) || n > t) && Ul.set(e, t))
			}
		}

		function Ql(e, t) {
			e.expirationTime < t && (e.expirationTime = t);
			var n = e.alternate;
			null !== n && n.expirationTime < t && (n.expirationTime = t);
			var c = e.return,
				r = null;
			if (null === c && 3 === e.tag) r = e.stateNode;
			else
				for (; null !== c;) {
					if (n = c.alternate, c.childExpirationTime < t && (c.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === c.return && 3 === c.tag) {
						r = c.stateNode;
						break
					}
					c = c.return
				}
			return null !== r && (wl === r && (oi(t), Ol === Hl && Ei(r, Cl)), Pi(r, t)), r
		}

		function $l(e) {
			var t = e.lastExpiredTime;
			if (0 !== t) return t;
			if (!xi(e, t = e.firstPendingTime)) return t;
			var n = e.lastPingedTime;
			return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e ? 0 : e
		}

		function Zl(e) {
			if (0 !== e.lastExpiredTime) e.callbackExpirationTime = 1073741823, e.callbackPriority = 99, e.callbackNode = Yr(Jl.bind(null, e));
			else {
				var t = $l(e),
					n = e.callbackNode;
				if (0 === t) null !== n && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90);
				else {
					var c = ql();
					if (1073741823 === t ? c = 99 : 1 === t || 2 === t ? c = 95 : c = 0 >= (c = 10 * (1073741821 - t) - 10 * (1073741821 - c)) ? 99 : 250 >= c ? 98 : 5250 >= c ? 97 : 95, null !== n) {
						var r = e.callbackPriority;
						if (e.callbackExpirationTime === t && r >= c) return;
						n !== xr && Vr(n)
					}
					e.callbackExpirationTime = t, e.callbackPriority = c, t = 1073741823 === t ? Yr(Jl.bind(null, e)) : Wr(c, Xl.bind(null, e), {
						timeout: 10 * (1073741821 - t) - Nr()
					}), e.callbackNode = t
				}
			}
		}

		function Xl(e, t) {
			if (Bl = 0, t) return Fi(e, t = ql()), Zl(e), null;
			var n = $l(e);
			if (0 !== n) {
				if (t = e.callbackNode, 0 !== (48 & Vl)) throw Error(o(327));
				if (pi(), e === wl && n === Cl || ni(e, n), null !== _l) {
					var c = Vl;
					Vl |= 16;
					for (var r = ri();;) try {
						ii();
						break
					} catch (i) {
						ci(e, i)
					}
					if (Jr(), Vl = c, yl.current = r, 1 === Ol) throw t = Sl, ni(e, n), Ei(e, n), Zl(e), t;
					if (null === _l) switch (r = e.finishedWork = e.current.alternate, e.finishedExpirationTime = n, c = Ol, wl = null, c) {
						case Ml:
						case 1:
							throw Error(o(345));
						case 2:
							Fi(e, 2 < n ? 2 : n);
							break;
						case bl:
							if (Ei(e, n), n === (c = e.lastSuspendedTime) && (e.nextKnownPendingLevel = hi(r)), 1073741823 === Ll && 10 < (r = Pl + 500 - Nr())) {
								if (El) {
									var a = e.lastPingedTime;
									if (0 === a || a >= n) {
										e.lastPingedTime = n, ni(e, n);
										break
									}
								}
								if (0 !== (a = $l(e)) && a !== n) break;
								if (0 !== c && c !== n) {
									e.lastPingedTime = c;
									break
								}
								e.timeoutHandle = gn(fi.bind(null, e), r);
								break
							}
							fi(e);
							break;
						case Hl:
							if (Ei(e, n), n === (c = e.lastSuspendedTime) && (e.nextKnownPendingLevel = hi(r)), El && (0 === (r = e.lastPingedTime) || r >= n)) {
								e.lastPingedTime = n, ni(e, n);
								break
							}
							if (0 !== (r = $l(e)) && r !== n) break;
							if (0 !== c && c !== n) {
								e.lastPingedTime = c;
								break
							}
							if (1073741823 !== Tl ? c = 10 * (1073741821 - Tl) - Nr() : 1073741823 === Ll ? c = 0 : (c = 10 * (1073741821 - Ll) - 5e3, 0 > (c = (r = Nr()) - c) && (c = 0), (n = 10 * (1073741821 - n) - r) < (c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * zl(c / 1960)) - c) && (c = n)), 10 < c) {
								e.timeoutHandle = gn(fi.bind(null, e), c);
								break
							}
							fi(e);
							break;
						case 5:
							if (1073741823 !== Ll && null !== kl) {
								a = Ll;
								var l = kl;
								if (0 >= (c = 0 | l.busyMinDurationMs) ? c = 0 : (r = 0 | l.busyDelayMs, c = (a = Nr() - (10 * (1073741821 - a) - (0 | l.timeoutMs || 5e3))) <= r ? 0 : r + c - a), 10 < c) {
									Ei(e, n), e.timeoutHandle = gn(fi.bind(null, e), c);
									break
								}
							}
							fi(e);
							break;
						default:
							throw Error(o(329))
					}
					if (Zl(e), e.callbackNode === t) return Xl.bind(null, e)
				}
			}
			return null
		}

		function Jl(e) {
			var t = e.lastExpiredTime;
			if (t = 0 !== t ? t : 1073741823, 0 !== (48 & Vl)) throw Error(o(327));
			if (pi(), e === wl && t === Cl || ni(e, t), null !== _l) {
				var n = Vl;
				Vl |= 16;
				for (var c = ri();;) try {
					li();
					break
				} catch (r) {
					ci(e, r)
				}
				if (Jr(), Vl = n, yl.current = c, 1 === Ol) throw n = Sl, ni(e, t), Ei(e, t), Zl(e), n;
				if (null !== _l) throw Error(o(261));
				e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, wl = null, fi(e), Zl(e)
			}
			return null
		}

		function ei(e, t) {
			var n = Vl;
			Vl |= 1;
			try {
				return e(t)
			} finally {
				0 === (Vl = n) && Br()
			}
		}

		function ti(e, t) {
			var n = Vl;
			Vl &= -2, Vl |= 8;
			try {
				return e(t)
			} finally {
				0 === (Vl = n) && Br()
			}
		}

		function ni(e, t) {
			e.finishedWork = null, e.finishedExpirationTime = 0;
			var n = e.timeoutHandle;
			if (-1 !== n && (e.timeoutHandle = -1, Mn(n)), null !== _l)
				for (n = _l.return; null !== n;) {
					var c = n;
					switch (c.tag) {
						case 1:
							null !== (c = c.type.childContextTypes) && void 0 !== c && mr();
							break;
						case 3:
							xa(), ir(fr), ir(hr);
							break;
						case 5:
							Pa(c);
							break;
						case 4:
							xa();
							break;
						case 13:
						case 19:
							ir(Fa);
							break;
						case 10:
							ea(c)
					}
					n = n.return
				}
			wl = e, _l = Ci(e.current, null), Cl = t, Ol = Ml, Sl = null, Tl = Ll = 1073741823, kl = null, xl = 0, El = !1
		}

		function ci(e, t) {
			for (;;) {
				try {
					if (Jr(), Da.current = mo, Ya)
						for (var n = Ia.memoizedState; null !== n;) {
							var c = n.queue;
							null !== c && (c.pending = null), n = n.next
						}
					if (Ra = 0, Wa = Ua = Ia = null, Ya = !1, null === _l || null === _l.return) return Ol = 1, Sl = t, _l = null;
					e: {
						var r = e,
							a = _l.return,
							o = _l,
							l = t;
						if (t = Cl, o.effectTag |= 2048, o.firstEffect = o.lastEffect = null, null !== l && "object" === typeof l && "function" === typeof l.then) {
							var i = l;
							if (0 === (2 & o.mode)) {
								var u = o.alternate;
								u ? (o.memoizedState = u.memoizedState, o.expirationTime = u.expirationTime) : o.memoizedState = null
							}
							var s = 0 !== (1 & Fa.current),
								h = a;
							do {
								var f;
								if (f = 13 === h.tag) {
									var v = h.memoizedState;
									if (null !== v) f = null !== v.dehydrated;
									else {
										var d = h.memoizedProps;
										f = void 0 !== d.fallback && (!0 !== d.unstable_avoidThisFallback || !s)
									}
								}
								if (f) {
									var p = h.updateQueue;
									if (null === p) {
										var m = new Set;
										m.add(i), h.updateQueue = m
									} else p.add(i);
									if (0 === (2 & h.mode)) {
										if (h.effectTag |= 64, o.effectTag &= -2981, 1 === o.tag)
											if (null === o.alternate) o.tag = 17;
											else {
												var z = la(1073741823, null);
												z.tag = 2, ia(o, z)
											}
										o.expirationTime = 1073741823;
										break e
									}
									l = void 0, o = t;
									var y = r.pingCache;
									if (null === y ? (y = r.pingCache = new vl, l = new Set, y.set(i, l)) : void 0 === (l = y.get(i)) && (l = new Set, y.set(i, l)), !l.has(o)) {
										l.add(o);
										var g = gi.bind(null, r, i, o);
										i.then(g, g)
									}
									h.effectTag |= 4096, h.expirationTime = t;
									break e
								}
								h = h.return
							} while (null !== h);
							l = Error((j(o.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + D(o))
						}
						5 !== Ol && (Ol = 2),
						l = Xo(l, o),
						h = a;do {
							switch (h.tag) {
								case 3:
									i = l, h.effectTag |= 4096, h.expirationTime = t, ua(h, dl(h, i, t));
									break e;
								case 1:
									i = l;
									var M = h.type,
										b = h.stateNode;
									if (0 === (64 & h.effectTag) && ("function" === typeof M.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === Dl || !Dl.has(b)))) {
										h.effectTag |= 4096, h.expirationTime = t, ua(h, pl(h, i, t));
										break e
									}
							}
							h = h.return
						} while (null !== h)
					}
					_l = si(_l)
				} catch (H) {
					t = H;
					continue
				}
				break
			}
		}

		function ri() {
			var e = yl.current;
			return yl.current = mo, null === e ? mo : e
		}

		function ai(e, t) {
			e < Ll && 2 < e && (Ll = e), null !== t && e < Tl && 2 < e && (Tl = e, kl = t)
		}

		function oi(e) {
			e > xl && (xl = e)
		}

		function li() {
			for (; null !== _l;) _l = ui(_l)
		}

		function ii() {
			for (; null !== _l && !Er();) _l = ui(_l)
		}

		function ui(e) {
			var t = ml(e.alternate, e, Cl);
			return e.memoizedProps = e.pendingProps, null === t && (t = si(e)), gl.current = null, t
		}

		function si(e) {
			_l = e;
			do {
				var t = _l.alternate;
				if (e = _l.return, 0 === (2048 & _l.effectTag)) {
					if (t = $o(t, _l, Cl), 1 === Cl || 1 !== _l.childExpirationTime) {
						for (var n = 0, c = _l.child; null !== c;) {
							var r = c.expirationTime,
								a = c.childExpirationTime;
							r > n && (n = r), a > n && (n = a), c = c.sibling
						}
						_l.childExpirationTime = n
					}
					if (null !== t) return t;
					null !== e && 0 === (2048 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = _l.firstEffect), null !== _l.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = _l.firstEffect), e.lastEffect = _l.lastEffect), 1 < _l.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = _l : e.firstEffect = _l, e.lastEffect = _l))
				} else {
					if (null !== (t = Zo(_l))) return t.effectTag &= 2047, t;
					null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 2048)
				}
				if (null !== (t = _l.sibling)) return t;
				_l = e
			} while (null !== _l);
			return Ol === Ml && (Ol = 5), null
		}

		function hi(e) {
			var t = e.expirationTime;
			return t > (e = e.childExpirationTime) ? t : e
		}

		function fi(e) {
			var t = Rr();
			return Ur(99, vi.bind(null, e, t)), null
		}

		function vi(e, t) {
			do {
				pi()
			} while (null !== Rl);
			if (0 !== (48 & Vl)) throw Error(o(327));
			var n = e.finishedWork,
				c = e.finishedExpirationTime;
			if (null === n) return null;
			if (e.finishedWork = null, e.finishedExpirationTime = 0, n === e.current) throw Error(o(177));
			e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90, e.nextKnownPendingLevel = 0;
			var r = hi(n);
			if (e.firstPendingTime = r, c <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : c <= e.firstSuspendedTime && (e.firstSuspendedTime = c - 1), c <= e.lastPingedTime && (e.lastPingedTime = 0), c <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === wl && (_l = wl = null, Cl = 0), 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, null !== r) {
				var a = Vl;
				Vl |= 32, gl.current = null, pn = qt;
				var l = vn();
				if (dn(l)) {
					if ("selectionStart" in l) var i = {
						start: l.selectionStart,
						end: l.selectionEnd
					};
					else e: {
						var u = (i = (i = l.ownerDocument) && i.defaultView || window).getSelection && i.getSelection();
						if (u && 0 !== u.rangeCount) {
							i = u.anchorNode;
							var s = u.anchorOffset,
								h = u.focusNode;
							u = u.focusOffset;
							try {
								i.nodeType, h.nodeType
							} catch (C) {
								i = null;
								break e
							}
							var f = 0,
								v = -1,
								d = -1,
								p = 0,
								m = 0,
								z = l,
								y = null;
							t: for (;;) {
								for (var g; z !== i || 0 !== s && 3 !== z.nodeType || (v = f + s), z !== h || 0 !== u && 3 !== z.nodeType || (d = f + u), 3 === z.nodeType && (f += z.nodeValue.length), null !== (g = z.firstChild);) y = z, z = g;
								for (;;) {
									if (z === l) break t;
									if (y === i && ++p === s && (v = f), y === h && ++m === u && (d = f), null !== (g = z.nextSibling)) break;
									y = (z = y).parentNode
								}
								z = g
							}
							i = -1 === v || -1 === d ? null : {
								start: v,
								end: d
							}
						} else i = null
					}
					i = i || {
						start: 0,
						end: 0
					}
				} else i = null;
				mn = {
					activeElementDetached: null,
					focusedElem: l,
					selectionRange: i
				}, qt = !1, Fl = r;
				do {
					try {
						di()
					} catch (C) {
						if (null === Fl) throw Error(o(330));
						yi(Fl, C), Fl = Fl.nextEffect
					}
				} while (null !== Fl);
				Fl = r;
				do {
					try {
						for (l = e, i = t; null !== Fl;) {
							var M = Fl.effectTag;
							if (16 & M && Re(Fl.stateNode, ""), 128 & M) {
								var b = Fl.alternate;
								if (null !== b) {
									var H = b.ref;
									null !== H && ("function" === typeof H ? H(null) : H.current = null)
								}
							}
							switch (1038 & M) {
								case 2:
									ul(Fl), Fl.effectTag &= -3;
									break;
								case 6:
									ul(Fl), Fl.effectTag &= -3, hl(Fl.alternate, Fl);
									break;
								case 1024:
									Fl.effectTag &= -1025;
									break;
								case 1028:
									Fl.effectTag &= -1025, hl(Fl.alternate, Fl);
									break;
								case 4:
									hl(Fl.alternate, Fl);
									break;
								case 8:
									sl(l, s = Fl, i), ll(s)
							}
							Fl = Fl.nextEffect
						}
					} catch (C) {
						if (null === Fl) throw Error(o(330));
						yi(Fl, C), Fl = Fl.nextEffect
					}
				} while (null !== Fl);
				if (H = mn, b = vn(), M = H.focusedElem, i = H.selectionRange, b !== M && M && M.ownerDocument && function e(t, n) {
						return !(!t || !n) && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
					}(M.ownerDocument.documentElement, M)) {
					null !== i && dn(M) && (b = i.start, void 0 === (H = i.end) && (H = b), "selectionStart" in M ? (M.selectionStart = b, M.selectionEnd = Math.min(H, M.value.length)) : (H = (b = M.ownerDocument || document) && b.defaultView || window).getSelection && (H = H.getSelection(), s = M.textContent.length, l = Math.min(i.start, s), i = void 0 === i.end ? l : Math.min(i.end, s), !H.extend && l > i && (s = i, i = l, l = s), s = fn(M, l), h = fn(M, i), s && h && (1 !== H.rangeCount || H.anchorNode !== s.node || H.anchorOffset !== s.offset || H.focusNode !== h.node || H.focusOffset !== h.offset) && ((b = b.createRange()).setStart(s.node, s.offset), H.removeAllRanges(), l > i ? (H.addRange(b), H.extend(h.node, h.offset)) : (b.setEnd(h.node, h.offset), H.addRange(b))))), b = [];
					for (H = M; H = H.parentNode;) 1 === H.nodeType && b.push({
						element: H,
						left: H.scrollLeft,
						top: H.scrollTop
					});
					for ("function" === typeof M.focus && M.focus(), M = 0; M < b.length; M++)(H = b[M]).element.scrollLeft = H.left, H.element.scrollTop = H.top
				}
				qt = !!pn, mn = pn = null, e.current = n, Fl = r;
				do {
					try {
						for (M = e; null !== Fl;) {
							var V = Fl.effectTag;
							if (36 & V && al(M, Fl.alternate, Fl), 128 & V) {
								b = void 0;
								var w = Fl.ref;
								if (null !== w) {
									var _ = Fl.stateNode;
									switch (Fl.tag) {
										case 5:
											b = _;
											break;
										default:
											b = _
									}
									"function" === typeof w ? w(b) : w.current = b
								}
							}
							Fl = Fl.nextEffect
						}
					} catch (C) {
						if (null === Fl) throw Error(o(330));
						yi(Fl, C), Fl = Fl.nextEffect
					}
				} while (null !== Fl);
				Fl = null, Pr(), Vl = a
			} else e.current = n;
			if (Nl) Nl = !1, Rl = e, Il = t;
			else
				for (Fl = r; null !== Fl;) t = Fl.nextEffect, Fl.nextEffect = null, Fl = t;
			if (0 === (t = e.firstPendingTime) && (Dl = null), 1073741823 === t ? e === Yl ? Wl++ : (Wl = 0, Yl = e) : Wl = 0, "function" === typeof bi && bi(n.stateNode, c), Zl(e), Al) throw Al = !1, e = jl, jl = null, e;
			return 0 !== (8 & Vl) || Br(), null
		}

		function di() {
			for (; null !== Fl;) {
				var e = Fl.effectTag;
				0 !== (256 & e) && nl(Fl.alternate, Fl), 0 === (512 & e) || Nl || (Nl = !0, Wr(97, (function() {
					return pi(), null
				}))), Fl = Fl.nextEffect
			}
		}

		function pi() {
			if (90 !== Il) {
				var e = 97 < Il ? 97 : Il;
				return Il = 90, Ur(e, mi)
			}
		}

		function mi() {
			if (null === Rl) return !1;
			var e = Rl;
			if (Rl = null, 0 !== (48 & Vl)) throw Error(o(331));
			var t = Vl;
			for (Vl |= 32, e = e.current.firstEffect; null !== e;) {
				try {
					var n = e;
					if (0 !== (512 & n.effectTag)) switch (n.tag) {
						case 0:
						case 11:
						case 15:
						case 22:
							cl(5, n), rl(5, n)
					}
				} catch (c) {
					if (null === e) throw Error(o(330));
					yi(e, c)
				}
				n = e.nextEffect, e.nextEffect = null, e = n
			}
			return Vl = t, Br(), !0
		}

		function zi(e, t, n) {
			ia(e, t = dl(e, t = Xo(n, t), 1073741823)), null !== (e = Ql(e, 1073741823)) && Zl(e)
		}

		function yi(e, t) {
			if (3 === e.tag) zi(e, e, t);
			else
				for (var n = e.return; null !== n;) {
					if (3 === n.tag) {
						zi(n, e, t);
						break
					}
					if (1 === n.tag) {
						var c = n.stateNode;
						if ("function" === typeof n.type.getDerivedStateFromError || "function" === typeof c.componentDidCatch && (null === Dl || !Dl.has(c))) {
							ia(n, e = pl(n, e = Xo(t, e), 1073741823)), null !== (n = Ql(n, 1073741823)) && Zl(n);
							break
						}
					}
					n = n.return
				}
		}

		function gi(e, t, n) {
			var c = e.pingCache;
			null !== c && c.delete(t), wl === e && Cl === n ? Ol === Hl || Ol === bl && 1073741823 === Ll && Nr() - Pl < 500 ? ni(e, Cl) : El = !0 : xi(e, n) && (0 !== (t = e.lastPingedTime) && t < n || (e.lastPingedTime = n, Zl(e)))
		}

		function Mi(e, t) {
			var n = e.stateNode;
			null !== n && n.delete(t), 0 === (t = 0) && (t = Gl(t = ql(), e, null)), null !== (e = Ql(e, t)) && Zl(e)
		}
		ml = function(e, t, n) {
			var c = t.expirationTime;
			if (null !== e) {
				var r = t.pendingProps;
				if (e.memoizedProps !== r || fr.current) To = !0;
				else {
					if (c < n) {
						switch (To = !1, t.tag) {
							case 3:
								No(t), So();
								break;
							case 5:
								if (Ea(t), 4 & t.mode && 1 !== n && r.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
								break;
							case 1:
								pr(t.type) && gr(t);
								break;
							case 4:
								ka(t, t.stateNode.containerInfo);
								break;
							case 10:
								c = t.memoizedProps.value, r = t.type._context, ur(Qr, r._currentValue), r._currentValue = c;
								break;
							case 13:
								if (null !== t.memoizedState) return 0 !== (c = t.child.childExpirationTime) && c >= n ? Yo(e, t, n) : (ur(Fa, 1 & Fa.current), null !== (t = Ko(e, t, n)) ? t.sibling : null);
								ur(Fa, 1 & Fa.current);
								break;
							case 19:
								if (c = t.childExpirationTime >= n, 0 !== (64 & e.effectTag)) {
									if (c) return Go(e, t, n);
									t.effectTag |= 64
								}
								if (null !== (r = t.memoizedState) && (r.rendering = null, r.tail = null), ur(Fa, Fa.current), !c) return null
						}
						return Ko(e, t, n)
					}
					To = !1
				}
			} else To = !1;
			switch (t.expirationTime = 0, t.tag) {
				case 2:
					if (c = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, r = dr(t, hr.current), na(t, n), r = Ga(null, t, c, e, r, n), t.effectTag |= 1, "object" === typeof r && null !== r && "function" === typeof r.render && void 0 === r.$$typeof) {
						if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pr(c)) {
							var a = !0;
							gr(t)
						} else a = !1;
						t.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null, aa(t);
						var l = c.getDerivedStateFromProps;
						"function" === typeof l && da(t, c, l, e), r.updater = pa, t.stateNode = r, r._reactInternalFiber = t, ga(t, c, e, n), t = Do(null, t, c, !0, a, n)
					} else t.tag = 0, ko(null, t, r, n), t = t.child;
					return t;
				case 16:
					e: {
						if (r = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, function(e) {
								if (-1 === e._status) {
									e._status = 0;
									var t = e._ctor;
									t = t(), e._result = t, t.then((function(t) {
										0 === e._status && (t = t.default, e._status = 1, e._result = t)
									}), (function(t) {
										0 === e._status && (e._status = 2, e._result = t)
									}))
								}
							}(r), 1 !== r._status) throw r._result;
						switch (r = r._result, t.type = r, a = t.tag = function(e) {
							if ("function" === typeof e) return _i(e) ? 1 : 0;
							if (void 0 !== e && null !== e) {
								if ((e = e.$$typeof) === L) return 11;
								if (e === x) return 14
							}
							return 2
						}(r), e = Kr(r, e), a) {
							case 0:
								t = Ao(null, t, r, e, n);
								break e;
							case 1:
								t = jo(null, t, r, e, n);
								break e;
							case 11:
								t = xo(null, t, r, e, n);
								break e;
							case 14:
								t = Eo(null, t, r, Kr(r.type, e), c, n);
								break e
						}
						throw Error(o(306, r, ""))
					}
					return t;
				case 0:
					return c = t.type, r = t.pendingProps, Ao(e, t, c, r = t.elementType === c ? r : Kr(c, r), n);
				case 1:
					return c = t.type, r = t.pendingProps, jo(e, t, c, r = t.elementType === c ? r : Kr(c, r), n);
				case 3:
					if (No(t), c = t.updateQueue, null === e || null === c) throw Error(o(282));
					if (c = t.pendingProps, r = null !== (r = t.memoizedState) ? r.element : null, oa(e, t), sa(t, c, null, n), (c = t.memoizedState.element) === r) So(), t = Ko(e, t, n);
					else {
						if ((r = t.stateNode.hydrate) && (bo = bn(t.stateNode.containerInfo.firstChild), Mo = t, r = Ho = !0), r)
							for (n = _a(t, null, c, n), t.child = n; n;) n.effectTag = -3 & n.effectTag | 1024, n = n.sibling;
						else ko(e, t, c, n), So();
						t = t.child
					}
					return t;
				case 5:
					return Ea(t), null === e && _o(t), c = t.type, r = t.pendingProps, a = null !== e ? e.memoizedProps : null, l = r.children, yn(c, r) ? l = null : null !== a && yn(c, a) && (t.effectTag |= 16), Fo(e, t), 4 & t.mode && 1 !== n && r.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (ko(e, t, l, n), t = t.child), t;
				case 6:
					return null === e && _o(t), null;
				case 13:
					return Yo(e, t, n);
				case 4:
					return ka(t, t.stateNode.containerInfo), c = t.pendingProps, null === e ? t.child = wa(t, null, c, n) : ko(e, t, c, n), t.child;
				case 11:
					return c = t.type, r = t.pendingProps, xo(e, t, c, r = t.elementType === c ? r : Kr(c, r), n);
				case 7:
					return ko(e, t, t.pendingProps, n), t.child;
				case 8:
				case 12:
					return ko(e, t, t.pendingProps.children, n), t.child;
				case 10:
					e: {
						c = t.type._context,
						r = t.pendingProps,
						l = t.memoizedProps,
						a = r.value;
						var i = t.type._context;
						if (ur(Qr, i._currentValue), i._currentValue = a, null !== l)
							if (i = l.value, 0 === (a = jc(i, a) ? 0 : 0 | ("function" === typeof c._calculateChangedBits ? c._calculateChangedBits(i, a) : 1073741823))) {
								if (l.children === r.children && !fr.current) {
									t = Ko(e, t, n);
									break e
								}
							} else
								for (null !== (i = t.child) && (i.return = t); null !== i;) {
									var u = i.dependencies;
									if (null !== u) {
										l = i.child;
										for (var s = u.firstContext; null !== s;) {
											if (s.context === c && 0 !== (s.observedBits & a)) {
												1 === i.tag && ((s = la(n, null)).tag = 2, ia(i, s)), i.expirationTime < n && (i.expirationTime = n), null !== (s = i.alternate) && s.expirationTime < n && (s.expirationTime = n), ta(i.return, n), u.expirationTime < n && (u.expirationTime = n);
												break
											}
											s = s.next
										}
									} else l = 10 === i.tag && i.type === t.type ? null : i.child;
									if (null !== l) l.return = i;
									else
										for (l = i; null !== l;) {
											if (l === t) {
												l = null;
												break
											}
											if (null !== (i = l.sibling)) {
												i.return = l.return, l = i;
												break
											}
											l = l.return
										}
									i = l
								}
						ko(e, t, r.children, n),
						t = t.child
					}
					return t;
				case 9:
					return r = t.type, c = (a = t.pendingProps).children, na(t, n), c = c(r = ca(r, a.unstable_observedBits)), t.effectTag |= 1, ko(e, t, c, n), t.child;
				case 14:
					return a = Kr(r = t.type, t.pendingProps), Eo(e, t, r, a = Kr(r.type, a), c, n);
				case 15:
					return Po(e, t, t.type, t.pendingProps, c, n);
				case 17:
					return c = t.type, r = t.pendingProps, r = t.elementType === c ? r : Kr(c, r), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, pr(c) ? (e = !0, gr(t)) : e = !1, na(t, n), za(t, c, r), ga(t, c, r, n), Do(null, t, c, !0, e, n);
				case 19:
					return Go(e, t, n)
			}
			throw Error(o(156, t.tag))
		};
		var bi = null,
			Hi = null;

		function Vi(e, t, n, c) {
			this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
		}

		function wi(e, t, n, c) {
			return new Vi(e, t, n, c)
		}

		function _i(e) {
			return !(!(e = e.prototype) || !e.isReactComponent)
		}

		function Ci(e, t) {
			var n = e.alternate;
			return null === n ? ((n = wi(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
				expirationTime: t.expirationTime,
				firstContext: t.firstContext,
				responders: t.responders
			}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
		}

		function Oi(e, t, n, c, r, a) {
			var l = 2;
			if (c = e, "function" === typeof e) _i(e) && (l = 1);
			else if ("string" === typeof e) l = 5;
			else e: switch (e) {
				case V:
					return Si(n.children, r, a, t);
				case S:
					l = 8, r |= 7;
					break;
				case w:
					l = 8, r |= 1;
					break;
				case _:
					return (e = wi(12, n, t, 8 | r)).elementType = _, e.type = _, e.expirationTime = a, e;
				case T:
					return (e = wi(13, n, t, r)).type = T, e.elementType = T, e.expirationTime = a, e;
				case k:
					return (e = wi(19, n, t, r)).elementType = k, e.expirationTime = a, e;
				default:
					if ("object" === typeof e && null !== e) switch (e.$$typeof) {
						case C:
							l = 10;
							break e;
						case O:
							l = 9;
							break e;
						case L:
							l = 11;
							break e;
						case x:
							l = 14;
							break e;
						case E:
							l = 16, c = null;
							break e;
						case P:
							l = 22;
							break e
					}
					throw Error(o(130, null == e ? e : typeof e, ""))
			}
			return (t = wi(l, n, t, r)).elementType = e, t.type = c, t.expirationTime = a, t
		}

		function Si(e, t, n, c) {
			return (e = wi(7, e, c, t)).expirationTime = n, e
		}

		function Li(e, t, n) {
			return (e = wi(6, e, null, t)).expirationTime = n, e
		}

		function Ti(e, t, n) {
			return (t = wi(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
				containerInfo: e.containerInfo,
				pendingChildren: null,
				implementation: e.implementation
			}, t
		}

		function ki(e, t, n) {
			this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
		}

		function xi(e, t) {
			var n = e.firstSuspendedTime;
			return e = e.lastSuspendedTime, 0 !== n && n >= t && e <= t
		}

		function Ei(e, t) {
			var n = e.firstSuspendedTime,
				c = e.lastSuspendedTime;
			n < t && (e.firstSuspendedTime = t), (c > t || 0 === n) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0)
		}

		function Pi(e, t) {
			t > e.firstPendingTime && (e.firstPendingTime = t);
			var n = e.firstSuspendedTime;
			0 !== n && (t >= n ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t))
		}

		function Fi(e, t) {
			var n = e.lastExpiredTime;
			(0 === n || n > t) && (e.lastExpiredTime = t)
		}

		function Ai(e, t, n, c) {
			var r = t.current,
				a = ql(),
				l = fa.suspense;
			a = Gl(a, r, l);
			e: if (n) {
				t: {
					if (Je(n = n._reactInternalFiber) !== n || 1 !== n.tag) throw Error(o(170));
					var i = n;do {
						switch (i.tag) {
							case 3:
								i = i.stateNode.context;
								break t;
							case 1:
								if (pr(i.type)) {
									i = i.stateNode.__reactInternalMemoizedMergedChildContext;
									break t
								}
						}
						i = i.return
					} while (null !== i);
					throw Error(o(171))
				}
				if (1 === n.tag) {
					var u = n.type;
					if (pr(u)) {
						n = yr(n, u, i);
						break e
					}
				}
				n = i
			}
			else n = sr;
			return null === t.context ? t.context = n : t.pendingContext = n, (t = la(a, l)).payload = {
				element: e
			}, null !== (c = void 0 === c ? null : c) && (t.callback = c), ia(r, t), Kl(r, a), a
		}

		function ji(e) {
			if (!(e = e.current).child) return null;
			switch (e.child.tag) {
				case 5:
				default:
					return e.child.stateNode
			}
		}

		function Di(e, t) {
			null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t)
		}

		function Ni(e, t) {
			Di(e, t), (e = e.alternate) && Di(e, t)
		}

		function Ri(e, t, n) {
			var c = new ki(e, t, n = null != n && !0 === n.hydrate),
				r = wi(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
			c.current = r, r.stateNode = c, aa(r), e[Cn] = c.current, n && 0 !== t && function(e, t) {
				var n = Xe(t);
				Ct.forEach((function(e) {
					dt(e, t, n)
				})), Ot.forEach((function(e) {
					dt(e, t, n)
				}))
			}(0, 9 === e.nodeType ? e : e.ownerDocument), this._internalRoot = c
		}

		function Ii(e) {
			return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
		}

		function Ui(e, t, n, c, r) {
			var a = n._reactRootContainer;
			if (a) {
				var o = a._internalRoot;
				if ("function" === typeof r) {
					var l = r;
					r = function() {
						var e = ji(o);
						l.call(e)
					}
				}
				Ai(t, o, e, r)
			} else {
				if (a = n._reactRootContainer = function(e, t) {
						if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
							for (var n; n = e.lastChild;) e.removeChild(n);
						return new Ri(e, 0, t ? {
							hydrate: !0
						} : void 0)
					}(n, c), o = a._internalRoot, "function" === typeof r) {
					var i = r;
					r = function() {
						var e = ji(o);
						i.call(e)
					}
				}
				ti((function() {
					Ai(t, o, e, r)
				}))
			}
			return ji(o)
		}

		function Wi(e, t, n) {
			var c = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
			return {
				$$typeof: H,
				key: null == c ? null : "" + c,
				children: e,
				containerInfo: t,
				implementation: n
			}
		}

		function Yi(e, t) {
			var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
			if (!Ii(t)) throw Error(o(200));
			return Wi(e, t, null, n)
		}
		Ri.prototype.render = function(e) {
			Ai(e, this._internalRoot, null, null)
		}, Ri.prototype.unmount = function() {
			var e = this._internalRoot,
				t = e.containerInfo;
			Ai(null, e, null, (function() {
				t[Cn] = null
			}))
		}, pt = function(e) {
			if (13 === e.tag) {
				var t = Gr(ql(), 150, 100);
				Kl(e, t), Ni(e, t)
			}
		}, mt = function(e) {
			13 === e.tag && (Kl(e, 3), Ni(e, 3))
		}, zt = function(e) {
			if (13 === e.tag) {
				var t = ql();
				Kl(e, t = Gl(t, e, null)), Ni(e, t)
			}
		}, Q = function(e, t, n) {
			switch (t) {
				case "input":
					if (_e(e, n), t = n.name, "radio" === n.type && null != t) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
							var c = n[t];
							if (c !== e && c.form === e.form) {
								var r = Tn(c);
								if (!r) throw Error(o(90));
								be(c), _e(c, r)
							}
						}
					}
					break;
				case "textarea":
					xe(e, n);
					break;
				case "select":
					null != (t = n.value) && Le(e, !!n.multiple, t, !1)
			}
		}, te = ei, ne = function(e, t, n, c, r) {
			var a = Vl;
			Vl |= 4;
			try {
				return Ur(98, e.bind(null, t, n, c, r))
			} finally {
				0 === (Vl = a) && Br()
			}
		}, ce = function() {
			0 === (49 & Vl) && (function() {
				if (null !== Ul) {
					var e = Ul;
					Ul = null, e.forEach((function(e, t) {
						Fi(t, e), Zl(t)
					})), Br()
				}
			}(), pi())
		}, re = function(e, t) {
			var n = Vl;
			Vl |= 2;
			try {
				return e(t)
			} finally {
				0 === (Vl = n) && Br()
			}
		};
		var Bi = {
			Events: [Sn, Ln, Tn, G, Y, jn, function(e) {
				rt(e, An)
			}, J, ee, Zt, lt, pi, {
				current: !1
			}]
		};
		! function(e) {
			var t = e.findFiberByHostInstance;
			(function(e) {
				if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
				var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
				if (t.isDisabled || !t.supportsFiber) return !0;
				try {
					var n = t.inject(e);
					bi = function(e) {
						try {
							t.onCommitFiberRoot(n, e, void 0, 64 === (64 & e.current.effectTag))
						} catch (c) {}
					}, Hi = function(e) {
						try {
							t.onCommitFiberUnmount(n, e)
						} catch (c) {}
					}
				} catch (c) {}
			})(r({}, e, {
				overrideHookState: null,
				overrideProps: null,
				setSuspenseHandler: null,
				scheduleUpdate: null,
				currentDispatcherRef: y.ReactCurrentDispatcher,
				findHostInstanceByFiber: function(e) {
					return null === (e = nt(e)) ? null : e.stateNode
				},
				findFiberByHostInstance: function(e) {
					return t ? t(e) : null
				},
				findHostInstancesForRefresh: null,
				scheduleRefresh: null,
				scheduleRoot: null,
				setRefreshHandler: null,
				getCurrentFiber: null
			}))
		}({
			findFiberByHostInstance: On,
			bundleType: 0,
			version: "16.13.0",
			rendererPackageName: "react-dom"
		}), t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bi, t.createPortal = Yi, t.findDOMNode = function(e) {
			if (null == e) return null;
			if (1 === e.nodeType) return e;
			var t = e._reactInternalFiber;
			if (void 0 === t) {
				if ("function" === typeof e.render) throw Error(o(188));
				throw Error(o(268, Object.keys(e)))
			}
			return e = null === (e = nt(t)) ? null : e.stateNode
		}, t.flushSync = function(e, t) {
			if (0 !== (48 & Vl)) throw Error(o(187));
			var n = Vl;
			Vl |= 1;
			try {
				return Ur(99, e.bind(null, t))
			} finally {
				Vl = n, Br()
			}
		}, t.hydrate = function(e, t, n) {
			if (!Ii(t)) throw Error(o(200));
			return Ui(null, e, t, !0, n)
		}, t.render = function(e, t, n) {
			if (!Ii(t)) throw Error(o(200));
			return Ui(null, e, t, !1, n)
		}, t.unmountComponentAtNode = function(e) {
			if (!Ii(e)) throw Error(o(40));
			return !!e._reactRootContainer && (ti((function() {
				Ui(null, null, e, !1, (function() {
					e._reactRootContainer = null, e[Cn] = null
				}))
			})), !0)
		}, t.unstable_batchedUpdates = ei, t.unstable_createPortal = function(e, t) {
			return Yi(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
		}, t.unstable_renderSubtreeIntoContainer = function(e, t, n, c) {
			if (!Ii(n)) throw Error(o(200));
			if (null == e || void 0 === e._reactInternalFiber) throw Error(o(38));
			return Ui(e, t, n, !1, c)
		}, t.version = "16.13.0"
	}, function(e, t, n) {
		"use strict";
		e.exports = n(113)
	}, function(e, t, n) {
		"use strict";
		var c, r, a, o, l;
		if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
			var i = null,
				u = null,
				s = function e() {
					if (null !== i) try {
						var n = t.unstable_now();
						i(!0, n), i = null
					} catch (c) {
						throw setTimeout(e, 0), c
					}
				},
				h = Date.now();
			t.unstable_now = function() {
				return Date.now() - h
			}, c = function(e) {
				null !== i ? setTimeout(c, 0, e) : (i = e, setTimeout(s, 0))
			}, r = function(e, t) {
				u = setTimeout(e, t)
			}, a = function() {
				clearTimeout(u)
			}, o = function() {
				return !1
			}, l = t.unstable_forceFrameRate = function() {}
		} else {
			var f = window.performance,
				v = window.Date,
				d = window.setTimeout,
				p = window.clearTimeout;
			if ("undefined" !== typeof console) {
				var m = window.cancelAnimationFrame;
				"function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" !== typeof m && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
			}
			if ("object" === typeof f && "function" === typeof f.now) t.unstable_now = function() {
				return f.now()
			};
			else {
				var z = v.now();
				t.unstable_now = function() {
					return v.now() - z
				}
			}
			var y = !1,
				g = null,
				M = -1,
				b = 5,
				H = 0;
			o = function() {
				return t.unstable_now() >= H
			}, l = function() {}, t.unstable_forceFrameRate = function(e) {
				0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : b = 0 < e ? Math.floor(1e3 / e) : 5
			};
			var V = new MessageChannel,
				w = V.port2;
			V.port1.onmessage = function() {
				if (null !== g) {
					var e = t.unstable_now();
					H = e + b;
					try {
						g(!0, e) ? w.postMessage(null) : (y = !1, g = null)
					} catch (n) {
						throw w.postMessage(null), n
					}
				} else y = !1
			}, c = function(e) {
				g = e, y || (y = !0, w.postMessage(null))
			}, r = function(e, n) {
				M = d((function() {
					e(t.unstable_now())
				}), n)
			}, a = function() {
				p(M), M = -1
			}
		}

		function _(e, t) {
			var n = e.length;
			e.push(t);
			e: for (;;) {
				var c = n - 1 >>> 1,
					r = e[c];
				if (!(void 0 !== r && 0 < S(r, t))) break e;
				e[c] = t, e[n] = r, n = c
			}
		}

		function C(e) {
			return void 0 === (e = e[0]) ? null : e
		}

		function O(e) {
			var t = e[0];
			if (void 0 !== t) {
				var n = e.pop();
				if (n !== t) {
					e[0] = n;
					e: for (var c = 0, r = e.length; c < r;) {
						var a = 2 * (c + 1) - 1,
							o = e[a],
							l = a + 1,
							i = e[l];
						if (void 0 !== o && 0 > S(o, n)) void 0 !== i && 0 > S(i, o) ? (e[c] = i, e[l] = n, c = l) : (e[c] = o, e[a] = n, c = a);
						else {
							if (!(void 0 !== i && 0 > S(i, n))) break e;
							e[c] = i, e[l] = n, c = l
						}
					}
				}
				return t
			}
			return null
		}

		function S(e, t) {
			var n = e.sortIndex - t.sortIndex;
			return 0 !== n ? n : e.id - t.id
		}
		var L = [],
			T = [],
			k = 1,
			x = null,
			E = 3,
			P = !1,
			F = !1,
			A = !1;

		function j(e) {
			for (var t = C(T); null !== t;) {
				if (null === t.callback) O(T);
				else {
					if (!(t.startTime <= e)) break;
					O(T), t.sortIndex = t.expirationTime, _(L, t)
				}
				t = C(T)
			}
		}

		function D(e) {
			if (A = !1, j(e), !F)
				if (null !== C(L)) F = !0, c(N);
				else {
					var t = C(T);
					null !== t && r(D, t.startTime - e)
				}
		}

		function N(e, n) {
			F = !1, A && (A = !1, a()), P = !0;
			var c = E;
			try {
				for (j(n), x = C(L); null !== x && (!(x.expirationTime > n) || e && !o());) {
					var l = x.callback;
					if (null !== l) {
						x.callback = null, E = x.priorityLevel;
						var i = l(x.expirationTime <= n);
						n = t.unstable_now(), "function" === typeof i ? x.callback = i : x === C(L) && O(L), j(n)
					} else O(L);
					x = C(L)
				}
				if (null !== x) var u = !0;
				else {
					var s = C(T);
					null !== s && r(D, s.startTime - n), u = !1
				}
				return u
			} finally {
				x = null, E = c, P = !1
			}
		}

		function R(e) {
			switch (e) {
				case 1:
					return -1;
				case 2:
					return 250;
				case 5:
					return 1073741823;
				case 4:
					return 1e4;
				default:
					return 5e3
			}
		}
		var I = l;
		t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
			e.callback = null
		}, t.unstable_continueExecution = function() {
			F || P || (F = !0, c(N))
		}, t.unstable_getCurrentPriorityLevel = function() {
			return E
		}, t.unstable_getFirstCallbackNode = function() {
			return C(L)
		}, t.unstable_next = function(e) {
			switch (E) {
				case 1:
				case 2:
				case 3:
					var t = 3;
					break;
				default:
					t = E
			}
			var n = E;
			E = t;
			try {
				return e()
			} finally {
				E = n
			}
		}, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = I, t.unstable_runWithPriority = function(e, t) {
			switch (e) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					e = 3
			}
			var n = E;
			E = e;
			try {
				return t()
			} finally {
				E = n
			}
		}, t.unstable_scheduleCallback = function(e, n, o) {
			var l = t.unstable_now();
			if ("object" === typeof o && null !== o) {
				var i = o.delay;
				i = "number" === typeof i && 0 < i ? l + i : l, o = "number" === typeof o.timeout ? o.timeout : R(e)
			} else o = R(e), i = l;
			return e = {
				id: k++,
				callback: n,
				priorityLevel: e,
				startTime: i,
				expirationTime: o = i + o,
				sortIndex: -1
			}, i > l ? (e.sortIndex = i, _(T, e), null === C(L) && e === C(T) && (A ? a() : A = !0, r(D, i - l))) : (e.sortIndex = o, _(L, e), F || P || (F = !0, c(N))), e
		}, t.unstable_shouldYield = function() {
			var e = t.unstable_now();
			j(e);
			var n = C(L);
			return n !== x && null !== x && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < x.expirationTime || o()
		}, t.unstable_wrapCallback = function(e) {
			var t = E;
			return function() {
				var n = E;
				E = t;
				try {
					return e.apply(this, arguments)
				} finally {
					E = n
				}
			}
		}
	}, , function(e, t, n) {
		"use strict";
		n(25), n(116)
	}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var c = f(n(0)),
			r = s(n(4)),
			a = f(n(1)),
			o = n(15),
			l = s(n(75)),
			i = n(141),
			u = f(n(142));

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function h() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return h = function() {
				return e
			}, e
		}

		function f(e) {
			if (e && e.__esModule) return e;
			if (null === e || "object" !== v(e) && "function" !== typeof e) return {
				default: e
			};
			var t = h();
			if (t && t.has(e)) return t.get(e);
			var n = {},
				c = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var r in e)
				if (Object.prototype.hasOwnProperty.call(e, r)) {
					var a = c ? Object.getOwnPropertyDescriptor(e, r) : null;
					a && (a.get || a.set) ? Object.defineProperty(n, r, a) : n[r] = e[r]
				}
			return n.default = e, t && t.set(e, n), n
		}

		function v(e) {
			return (v = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function d() {
			return (d = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
				}
				return e
			}).apply(this, arguments)
		}

		function p(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function m(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function z(e, t) {
			for (var n = 0; n < t.length; n++) {
				var c = t[n];
				c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(e, c.key, c)
			}
		}

		function y(e, t) {
			return !t || "object" !== v(t) && "function" !== typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function g(e) {
			return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function M(e, t) {
			return (M = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		var b = function(e, t) {
				var n = {};
				for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && t.indexOf(c) < 0 && (n[c] = e[c]);
				if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (c = Object.getOwnPropertySymbols(e); r < c.length; r++) t.indexOf(c[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, c[r]) && (n[c[r]] = e[c[r]])
				}
				return n
			},
			H = (0, i.tuple)("top", "middle", "bottom", "stretch"),
			V = (0, i.tuple)("start", "end", "center", "space-around", "space-between"),
			w = function(e) {
				function t() {
					var e;
					return m(this, t), (e = y(this, g(t).apply(this, arguments))).state = {
						screens: {}
					}, e.renderRow = function(t) {
						var n, a = t.getPrefixCls,
							o = e.props,
							i = o.prefixCls,
							u = o.type,
							s = o.justify,
							h = o.align,
							f = o.className,
							v = o.style,
							m = o.children,
							z = b(o, ["prefixCls", "type", "justify", "align", "className", "style", "children"]),
							y = a("row", i),
							g = e.getGutter(),
							M = (0, r.default)((p(n = {}, y, !u), p(n, "".concat(y, "-").concat(u), u), p(n, "".concat(y, "-").concat(u, "-").concat(s), u && s), p(n, "".concat(y, "-").concat(u, "-").concat(h), u && h), n), f),
							H = d(d(d({}, g[0] > 0 ? {
								marginLeft: g[0] / -2,
								marginRight: g[0] / -2
							} : {}), g[1] > 0 ? {
								marginTop: g[1] / -2,
								marginBottom: g[1] / -2
							} : {}), v),
							V = d({}, z);
						return delete V.gutter, c.createElement(l.default.Provider, {
							value: {
								gutter: g
							}
						}, c.createElement("div", d({}, V, {
							className: M,
							style: H
						}), m))
					}, e
				}
				var n, a, i;
				return function(e, t) {
					if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && M(e, t)
				}(t, e), n = t, (a = [{
					key: "componentDidMount",
					value: function() {
						var e = this;
						this.token = u.default.subscribe((function(t) {
							var n = e.props.gutter;
							("object" === v(n) || Array.isArray(n) && ("object" === v(n[0]) || "object" === v(n[1]))) && e.setState({
								screens: t
							})
						}))
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						u.default.unsubscribe(this.token)
					}
				}, {
					key: "getGutter",
					value: function() {
						var e = [0, 0],
							t = this.props.gutter,
							n = this.state.screens;
						return (Array.isArray(t) ? t : [t, 0]).forEach((function(t, c) {
							if ("object" === v(t))
								for (var r = 0; r < u.responsiveArray.length; r++) {
									var a = u.responsiveArray[r];
									if (n[a] && void 0 !== t[a]) {
										e[c] = t[a];
										break
									}
								} else e[c] = t || 0
						})), e
					}
				}, {
					key: "render",
					value: function() {
						return c.createElement(o.ConfigConsumer, null, this.renderRow)
					}
				}]) && z(n.prototype, a), i && z(n, i), t
			}(c.Component);
		t.default = w, w.defaultProps = {
			gutter: 0
		}, w.propTypes = {
			type: a.oneOf(["flex"]),
			align: a.oneOf(H),
			justify: a.oneOf(V),
			className: a.string,
			children: a.node,
			gutter: a.oneOfType([a.object, a.number, a.array]),
			prefixCls: a.string
		}
	}, function(e, t, n) {
		"use strict";
		var c = n(120);

		function r() {}

		function a() {}
		a.resetWarningCache = r, e.exports = function() {
			function e(e, t, n, r, a, o) {
				if (o !== c) {
					var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
					throw l.name = "Invariant Violation", l
				}
			}

			function t() {
				return e
			}
			e.isRequired = e;
			var n = {
				array: e,
				bool: e,
				func: e,
				number: e,
				object: e,
				string: e,
				symbol: e,
				any: e,
				arrayOf: t,
				element: e,
				elementType: e,
				instanceOf: t,
				node: e,
				objectOf: t,
				oneOf: t,
				oneOfType: t,
				shape: t,
				exact: t,
				checkPropTypes: a,
				resetWarningCache: r
			};
			return n.PropTypes = n, n
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = t.ANT_MARK = void 0;
		var c = h(n(0)),
			r = h(n(1)),
			a = h(n(122)),
			o = u(n(124)),
			l = n(125),
			i = u(n(33));

		function u(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function s() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return s = function() {
				return e
			}, e
		}

		function h(e) {
			if (e && e.__esModule) return e;
			if (null === e || "object" !== f(e) && "function" !== typeof e) return {
				default: e
			};
			var t = s();
			if (t && t.has(e)) return t.get(e);
			var n = {},
				c = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var r in e)
				if (Object.prototype.hasOwnProperty.call(e, r)) {
					var a = c ? Object.getOwnPropertyDescriptor(e, r) : null;
					a && (a.get || a.set) ? Object.defineProperty(n, r, a) : n[r] = e[r]
				}
			return n.default = e, t && t.set(e, n), n
		}

		function f(e) {
			return (f = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function v() {
			return (v = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
				}
				return e
			}).apply(this, arguments)
		}

		function d(e, t) {
			for (var n = 0; n < t.length; n++) {
				var c = t[n];
				c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(e, c.key, c)
			}
		}

		function p(e, t) {
			return !t || "object" !== f(t) && "function" !== typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function m(e) {
			return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function z(e, t) {
			return (z = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function y(e) {
			e && e.locale ? (0, o.default)(a).locale(e.locale) : (0, o.default)(a).locale("en")
		}
		t.ANT_MARK = "internalMark";
		var g = function(e) {
			function t(e) {
				var n;
				return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t), n = p(this, m(t).call(this, e)), y(e.locale), (0, l.changeConfirmLocale)(e.locale && e.locale.Modal), (0, i.default)("internalMark" === e._ANT_MARK__, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale"), n
			}
			var n, c, r;
			return function(e, t) {
				if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && z(e, t)
			}(t, e), n = t, (c = [{
				key: "getChildContext",
				value: function() {
					return {
						antLocale: v(v({}, this.props.locale), {
							exist: !0
						})
					}
				}
			}, {
				key: "componentDidUpdate",
				value: function(e) {
					var t = this.props.locale;
					e.locale !== t && (y(t), (0, l.changeConfirmLocale)(t && t.Modal))
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					(0, l.changeConfirmLocale)()
				}
			}, {
				key: "render",
				value: function() {
					return this.props.children
				}
			}]) && d(n.prototype, c), r && d(n, r), t
		}(c.Component);
		t.default = g, g.propTypes = {
			locale: r.object
		}, g.defaultProps = {
			locale: {}
		}, g.childContextTypes = {
			antLocale: r.object
		}
	}, function(e, t, n) {
		(function(e) {
			e.exports = function() {
				"use strict";
				var t, n;

				function c() {
					return t.apply(null, arguments)
				}

				function r(e) {
					return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
				}

				function a(e) {
					return null != e && "[object Object]" === Object.prototype.toString.call(e)
				}

				function o(e) {
					return void 0 === e
				}

				function l(e) {
					return "number" === typeof e || "[object Number]" === Object.prototype.toString.call(e)
				}

				function i(e) {
					return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
				}

				function u(e, t) {
					var n, c = [];
					for (n = 0; n < e.length; ++n) c.push(t(e[n], n));
					return c
				}

				function s(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}

				function h(e, t) {
					for (var n in t) s(t, n) && (e[n] = t[n]);
					return s(t, "toString") && (e.toString = t.toString), s(t, "valueOf") && (e.valueOf = t.valueOf), e
				}

				function f(e, t, n, c) {
					return Vt(e, t, n, c, !0).utc()
				}

				function v(e) {
					return null == e._pf && (e._pf = {
						empty: !1,
						unusedTokens: [],
						unusedInput: [],
						overflow: -2,
						charsLeftOver: 0,
						nullInput: !1,
						invalidMonth: null,
						invalidFormat: !1,
						userInvalidated: !1,
						iso: !1,
						parsedDateParts: [],
						meridiem: null,
						rfc2822: !1,
						weekdayMismatch: !1
					}), e._pf
				}

				function d(e) {
					if (null == e._isValid) {
						var t = v(e),
							c = n.call(t.parsedDateParts, (function(e) {
								return null != e
							})),
							r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && c);
						if (e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return r;
						e._isValid = r
					}
					return e._isValid
				}

				function p(e) {
					var t = f(NaN);
					return null != e ? h(v(t), e) : v(t).userInvalidated = !0, t
				}
				n = Array.prototype.some ? Array.prototype.some : function(e) {
					for (var t = Object(this), n = t.length >>> 0, c = 0; c < n; c++)
						if (c in t && e.call(this, t[c], c, t)) return !0;
					return !1
				};
				var m = c.momentProperties = [];

				function z(e, t) {
					var n, c, r;
					if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = v(t)), o(t._locale) || (e._locale = t._locale), m.length > 0)
						for (n = 0; n < m.length; n++) o(r = t[c = m[n]]) || (e[c] = r);
					return e
				}
				var y = !1;

				function g(e) {
					z(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === y && (y = !0, c.updateOffset(this), y = !1)
				}

				function M(e) {
					return e instanceof g || null != e && null != e._isAMomentObject
				}

				function b(e) {
					return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
				}

				function H(e) {
					var t = +e,
						n = 0;
					return 0 !== t && isFinite(t) && (n = b(t)), n
				}

				function V(e, t, n) {
					var c, r = Math.min(e.length, t.length),
						a = Math.abs(e.length - t.length),
						o = 0;
					for (c = 0; c < r; c++)(n && e[c] !== t[c] || !n && H(e[c]) !== H(t[c])) && o++;
					return o + a
				}

				function w(e) {
					!1 === c.suppressDeprecationWarnings && "undefined" !== typeof console && console.warn && console.warn("Deprecation warning: " + e)
				}

				function _(e, t) {
					var n = !0;
					return h((function() {
						if (null != c.deprecationHandler && c.deprecationHandler(null, e), n) {
							for (var r, a = [], o = 0; o < arguments.length; o++) {
								if (r = "", "object" === typeof arguments[o]) {
									for (var l in r += "\n[" + o + "] ", arguments[0]) r += l + ": " + arguments[0][l] + ", ";
									r = r.slice(0, -2)
								} else r = arguments[o];
								a.push(r)
							}
							w(e + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + (new Error).stack), n = !1
						}
						return t.apply(this, arguments)
					}), t)
				}
				var C, O = {};

				function S(e, t) {
					null != c.deprecationHandler && c.deprecationHandler(e, t), O[e] || (w(t), O[e] = !0)
				}

				function L(e) {
					return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
				}

				function T(e, t) {
					var n, c = h({}, e);
					for (n in t) s(t, n) && (a(e[n]) && a(t[n]) ? (c[n] = {}, h(c[n], e[n]), h(c[n], t[n])) : null != t[n] ? c[n] = t[n] : delete c[n]);
					for (n in e) s(e, n) && !s(t, n) && a(e[n]) && (c[n] = h({}, c[n]));
					return c
				}

				function k(e) {
					null != e && this.set(e)
				}
				c.suppressDeprecationWarnings = !1, c.deprecationHandler = null, C = Object.keys ? Object.keys : function(e) {
					var t, n = [];
					for (t in e) s(e, t) && n.push(t);
					return n
				};
				var x = {};

				function E(e, t) {
					var n = e.toLowerCase();
					x[n] = x[n + "s"] = x[t] = e
				}

				function P(e) {
					return "string" === typeof e ? x[e] || x[e.toLowerCase()] : void 0
				}

				function F(e) {
					var t, n, c = {};
					for (n in e) s(e, n) && (t = P(n)) && (c[t] = e[n]);
					return c
				}
				var A = {};

				function j(e, t) {
					A[e] = t
				}

				function D(e, t, n) {
					var c = "" + Math.abs(e),
						r = t - c.length;
					return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + c
				}
				var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
					R = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
					I = {},
					U = {};

				function W(e, t, n, c) {
					var r = c;
					"string" === typeof c && (r = function() {
						return this[c]()
					}), e && (U[e] = r), t && (U[t[0]] = function() {
						return D(r.apply(this, arguments), t[1], t[2])
					}), n && (U[n] = function() {
						return this.localeData().ordinal(r.apply(this, arguments), e)
					})
				}

				function Y(e, t) {
					return e.isValid() ? (t = B(t, e.localeData()), I[t] = I[t] || function(e) {
						var t, n, c, r = e.match(N);
						for (t = 0, n = r.length; t < n; t++) U[r[t]] ? r[t] = U[r[t]] : r[t] = (c = r[t]).match(/\[[\s\S]/) ? c.replace(/^\[|\]$/g, "") : c.replace(/\\/g, "");
						return function(t) {
							var c, a = "";
							for (c = 0; c < n; c++) a += L(r[c]) ? r[c].call(t, e) : r[c];
							return a
						}
					}(t), I[t](e)) : e.localeData().invalidDate()
				}

				function B(e, t) {
					var n = 5;

					function c(e) {
						return t.longDateFormat(e) || e
					}
					for (R.lastIndex = 0; n >= 0 && R.test(e);) e = e.replace(R, c), R.lastIndex = 0, n -= 1;
					return e
				}
				var q = /\d/,
					G = /\d\d/,
					K = /\d{3}/,
					Q = /\d{4}/,
					$ = /[+-]?\d{6}/,
					Z = /\d\d?/,
					X = /\d\d\d\d?/,
					J = /\d\d\d\d\d\d?/,
					ee = /\d{1,3}/,
					te = /\d{1,4}/,
					ne = /[+-]?\d{1,6}/,
					ce = /\d+/,
					re = /[+-]?\d+/,
					ae = /Z|[+-]\d\d:?\d\d/gi,
					oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
					le = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
					ie = {};

				function ue(e, t, n) {
					ie[e] = L(t) ? t : function(e, c) {
						return e && n ? n : t
					}
				}

				function se(e, t) {
					return s(ie, e) ? ie[e](t._strict, t._locale) : new RegExp(he(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, t, n, c, r) {
						return t || n || c || r
					}))))
				}

				function he(e) {
					return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
				}
				var fe = {};

				function ve(e, t) {
					var n, c = t;
					for ("string" === typeof e && (e = [e]), l(t) && (c = function(e, n) {
							n[t] = H(e)
						}), n = 0; n < e.length; n++) fe[e[n]] = c
				}

				function de(e, t) {
					ve(e, (function(e, n, c, r) {
						c._w = c._w || {}, t(e, c._w, c, r)
					}))
				}

				function pe(e, t, n) {
					null != t && s(fe, e) && fe[e](t, n._a, n, e)
				}

				function me(e) {
					return ze(e) ? 366 : 365
				}

				function ze(e) {
					return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
				}
				W("Y", 0, 0, (function() {
					var e = this.year();
					return e <= 9999 ? "" + e : "+" + e
				})), W(0, ["YY", 2], 0, (function() {
					return this.year() % 100
				})), W(0, ["YYYY", 4], 0, "year"), W(0, ["YYYYY", 5], 0, "year"), W(0, ["YYYYYY", 6, !0], 0, "year"), E("year", "y"), j("year", 1), ue("Y", re), ue("YY", Z, G), ue("YYYY", te, Q), ue("YYYYY", ne, $), ue("YYYYYY", ne, $), ve(["YYYYY", "YYYYYY"], 0), ve("YYYY", (function(e, t) {
					t[0] = 2 === e.length ? c.parseTwoDigitYear(e) : H(e)
				})), ve("YY", (function(e, t) {
					t[0] = c.parseTwoDigitYear(e)
				})), ve("Y", (function(e, t) {
					t[0] = parseInt(e, 10)
				})), c.parseTwoDigitYear = function(e) {
					return H(e) + (H(e) > 68 ? 1900 : 2e3)
				};
				var ye, ge = Me("FullYear", !0);

				function Me(e, t) {
					return function(n) {
						return null != n ? (He(this, e, n), c.updateOffset(this, t), this) : be(this, e)
					}
				}

				function be(e, t) {
					return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
				}

				function He(e, t, n) {
					e.isValid() && !isNaN(n) && ("FullYear" === t && ze(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Ve(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
				}

				function Ve(e, t) {
					if (isNaN(e) || isNaN(t)) return NaN;
					var n, c = (t % (n = 12) + n) % n;
					return e += (t - c) / 12, 1 === c ? ze(e) ? 29 : 28 : 31 - c % 7 % 2
				}
				ye = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
					var t;
					for (t = 0; t < this.length; ++t)
						if (this[t] === e) return t;
					return -1
				}, W("M", ["MM", 2], "Mo", (function() {
					return this.month() + 1
				})), W("MMM", 0, 0, (function(e) {
					return this.localeData().monthsShort(this, e)
				})), W("MMMM", 0, 0, (function(e) {
					return this.localeData().months(this, e)
				})), E("month", "M"), j("month", 8), ue("M", Z), ue("MM", Z, G), ue("MMM", (function(e, t) {
					return t.monthsShortRegex(e)
				})), ue("MMMM", (function(e, t) {
					return t.monthsRegex(e)
				})), ve(["M", "MM"], (function(e, t) {
					t[1] = H(e) - 1
				})), ve(["MMM", "MMMM"], (function(e, t, n, c) {
					var r = n._locale.monthsParse(e, c, n._strict);
					null != r ? t[1] = r : v(n).invalidMonth = e
				}));
				var we = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
					_e = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
					Ce = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

				function Oe(e, t, n) {
					var c, r, a, o = e.toLocaleLowerCase();
					if (!this._monthsParse)
						for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], c = 0; c < 12; ++c) a = f([2e3, c]), this._shortMonthsParse[c] = this.monthsShort(a, "").toLocaleLowerCase(), this._longMonthsParse[c] = this.months(a, "").toLocaleLowerCase();
					return n ? "MMM" === t ? -1 !== (r = ye.call(this._shortMonthsParse, o)) ? r : null : -1 !== (r = ye.call(this._longMonthsParse, o)) ? r : null : "MMM" === t ? -1 !== (r = ye.call(this._shortMonthsParse, o)) || -1 !== (r = ye.call(this._longMonthsParse, o)) ? r : null : -1 !== (r = ye.call(this._longMonthsParse, o)) || -1 !== (r = ye.call(this._shortMonthsParse, o)) ? r : null
				}

				function Se(e, t) {
					var n;
					if (!e.isValid()) return e;
					if ("string" === typeof t)
						if (/^\d+$/.test(t)) t = H(t);
						else if (!l(t = e.localeData().monthsParse(t))) return e;
					return n = Math.min(e.date(), Ve(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
				}

				function Le(e) {
					return null != e ? (Se(this, e), c.updateOffset(this, !0), this) : be(this, "Month")
				}
				var Te = le,
					ke = le;

				function xe() {
					function e(e, t) {
						return t.length - e.length
					}
					var t, n, c = [],
						r = [],
						a = [];
					for (t = 0; t < 12; t++) n = f([2e3, t]), c.push(this.monthsShort(n, "")), r.push(this.months(n, "")), a.push(this.months(n, "")), a.push(this.monthsShort(n, ""));
					for (c.sort(e), r.sort(e), a.sort(e), t = 0; t < 12; t++) c[t] = he(c[t]), r[t] = he(r[t]);
					for (t = 0; t < 24; t++) a[t] = he(a[t]);
					this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + c.join("|") + ")", "i")
				}

				function Ee(e, t, n, c, r, a, o) {
					var l;
					return e < 100 && e >= 0 ? (l = new Date(e + 400, t, n, c, r, a, o), isFinite(l.getFullYear()) && l.setFullYear(e)) : l = new Date(e, t, n, c, r, a, o), l
				}

				function Pe(e) {
					var t;
					if (e < 100 && e >= 0) {
						var n = Array.prototype.slice.call(arguments);
						n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
					} else t = new Date(Date.UTC.apply(null, arguments));
					return t
				}

				function Fe(e, t, n) {
					var c = 7 + t - n;
					return -(7 + Pe(e, 0, c).getUTCDay() - t) % 7 + c - 1
				}

				function Ae(e, t, n, c, r) {
					var a, o, l = 1 + 7 * (t - 1) + (7 + n - c) % 7 + Fe(e, c, r);
					return l <= 0 ? o = me(a = e - 1) + l : l > me(e) ? (a = e + 1, o = l - me(e)) : (a = e, o = l), {
						year: a,
						dayOfYear: o
					}
				}

				function je(e, t, n) {
					var c, r, a = Fe(e.year(), t, n),
						o = Math.floor((e.dayOfYear() - a - 1) / 7) + 1;
					return o < 1 ? c = o + De(r = e.year() - 1, t, n) : o > De(e.year(), t, n) ? (c = o - De(e.year(), t, n), r = e.year() + 1) : (r = e.year(), c = o), {
						week: c,
						year: r
					}
				}

				function De(e, t, n) {
					var c = Fe(e, t, n),
						r = Fe(e + 1, t, n);
					return (me(e) - c + r) / 7
				}

				function Ne(e, t) {
					return e.slice(t, 7).concat(e.slice(0, t))
				}
				W("w", ["ww", 2], "wo", "week"), W("W", ["WW", 2], "Wo", "isoWeek"), E("week", "w"), E("isoWeek", "W"), j("week", 5), j("isoWeek", 5), ue("w", Z), ue("ww", Z, G), ue("W", Z), ue("WW", Z, G), de(["w", "ww", "W", "WW"], (function(e, t, n, c) {
					t[c.substr(0, 1)] = H(e)
				})), W("d", 0, "do", "day"), W("dd", 0, 0, (function(e) {
					return this.localeData().weekdaysMin(this, e)
				})), W("ddd", 0, 0, (function(e) {
					return this.localeData().weekdaysShort(this, e)
				})), W("dddd", 0, 0, (function(e) {
					return this.localeData().weekdays(this, e)
				})), W("e", 0, 0, "weekday"), W("E", 0, 0, "isoWeekday"), E("day", "d"), E("weekday", "e"), E("isoWeekday", "E"), j("day", 11), j("weekday", 11), j("isoWeekday", 11), ue("d", Z), ue("e", Z), ue("E", Z), ue("dd", (function(e, t) {
					return t.weekdaysMinRegex(e)
				})), ue("ddd", (function(e, t) {
					return t.weekdaysShortRegex(e)
				})), ue("dddd", (function(e, t) {
					return t.weekdaysRegex(e)
				})), de(["dd", "ddd", "dddd"], (function(e, t, n, c) {
					var r = n._locale.weekdaysParse(e, c, n._strict);
					null != r ? t.d = r : v(n).invalidWeekday = e
				})), de(["d", "e", "E"], (function(e, t, n, c) {
					t[c] = H(e)
				}));
				var Re = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
					Ie = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
					Ue = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");

				function We(e, t, n) {
					var c, r, a, o = e.toLocaleLowerCase();
					if (!this._weekdaysParse)
						for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], c = 0; c < 7; ++c) a = f([2e3, 1]).day(c), this._minWeekdaysParse[c] = this.weekdaysMin(a, "").toLocaleLowerCase(), this._shortWeekdaysParse[c] = this.weekdaysShort(a, "").toLocaleLowerCase(), this._weekdaysParse[c] = this.weekdays(a, "").toLocaleLowerCase();
					return n ? "dddd" === t ? -1 !== (r = ye.call(this._weekdaysParse, o)) ? r : null : "ddd" === t ? -1 !== (r = ye.call(this._shortWeekdaysParse, o)) ? r : null : -1 !== (r = ye.call(this._minWeekdaysParse, o)) ? r : null : "dddd" === t ? -1 !== (r = ye.call(this._weekdaysParse, o)) || -1 !== (r = ye.call(this._shortWeekdaysParse, o)) || -1 !== (r = ye.call(this._minWeekdaysParse, o)) ? r : null : "ddd" === t ? -1 !== (r = ye.call(this._shortWeekdaysParse, o)) || -1 !== (r = ye.call(this._weekdaysParse, o)) || -1 !== (r = ye.call(this._minWeekdaysParse, o)) ? r : null : -1 !== (r = ye.call(this._minWeekdaysParse, o)) || -1 !== (r = ye.call(this._weekdaysParse, o)) || -1 !== (r = ye.call(this._shortWeekdaysParse, o)) ? r : null
				}
				var Ye = le,
					Be = le,
					qe = le;

				function Ge() {
					function e(e, t) {
						return t.length - e.length
					}
					var t, n, c, r, a, o = [],
						l = [],
						i = [],
						u = [];
					for (t = 0; t < 7; t++) n = f([2e3, 1]).day(t), c = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), a = this.weekdays(n, ""), o.push(c), l.push(r), i.push(a), u.push(c), u.push(r), u.push(a);
					for (o.sort(e), l.sort(e), i.sort(e), u.sort(e), t = 0; t < 7; t++) l[t] = he(l[t]), i[t] = he(i[t]), u[t] = he(u[t]);
					this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
				}

				function Ke() {
					return this.hours() % 12 || 12
				}

				function Qe(e, t) {
					W(e, 0, 0, (function() {
						return this.localeData().meridiem(this.hours(), this.minutes(), t)
					}))
				}

				function $e(e, t) {
					return t._meridiemParse
				}
				W("H", ["HH", 2], 0, "hour"), W("h", ["hh", 2], 0, Ke), W("k", ["kk", 2], 0, (function() {
					return this.hours() || 24
				})), W("hmm", 0, 0, (function() {
					return "" + Ke.apply(this) + D(this.minutes(), 2)
				})), W("hmmss", 0, 0, (function() {
					return "" + Ke.apply(this) + D(this.minutes(), 2) + D(this.seconds(), 2)
				})), W("Hmm", 0, 0, (function() {
					return "" + this.hours() + D(this.minutes(), 2)
				})), W("Hmmss", 0, 0, (function() {
					return "" + this.hours() + D(this.minutes(), 2) + D(this.seconds(), 2)
				})), Qe("a", !0), Qe("A", !1), E("hour", "h"), j("hour", 13), ue("a", $e), ue("A", $e), ue("H", Z), ue("h", Z), ue("k", Z), ue("HH", Z, G), ue("hh", Z, G), ue("kk", Z, G), ue("hmm", X), ue("hmmss", J), ue("Hmm", X), ue("Hmmss", J), ve(["H", "HH"], 3), ve(["k", "kk"], (function(e, t, n) {
					var c = H(e);
					t[3] = 24 === c ? 0 : c
				})), ve(["a", "A"], (function(e, t, n) {
					n._isPm = n._locale.isPM(e), n._meridiem = e
				})), ve(["h", "hh"], (function(e, t, n) {
					t[3] = H(e), v(n).bigHour = !0
				})), ve("hmm", (function(e, t, n) {
					var c = e.length - 2;
					t[3] = H(e.substr(0, c)), t[4] = H(e.substr(c)), v(n).bigHour = !0
				})), ve("hmmss", (function(e, t, n) {
					var c = e.length - 4,
						r = e.length - 2;
					t[3] = H(e.substr(0, c)), t[4] = H(e.substr(c, 2)), t[5] = H(e.substr(r)), v(n).bigHour = !0
				})), ve("Hmm", (function(e, t, n) {
					var c = e.length - 2;
					t[3] = H(e.substr(0, c)), t[4] = H(e.substr(c))
				})), ve("Hmmss", (function(e, t, n) {
					var c = e.length - 4,
						r = e.length - 2;
					t[3] = H(e.substr(0, c)), t[4] = H(e.substr(c, 2)), t[5] = H(e.substr(r))
				}));
				var Ze, Xe = Me("Hours", !0),
					Je = {
						calendar: {
							sameDay: "[Today at] LT",
							nextDay: "[Tomorrow at] LT",
							nextWeek: "dddd [at] LT",
							lastDay: "[Yesterday at] LT",
							lastWeek: "[Last] dddd [at] LT",
							sameElse: "L"
						},
						longDateFormat: {
							LTS: "h:mm:ss A",
							LT: "h:mm A",
							L: "MM/DD/YYYY",
							LL: "MMMM D, YYYY",
							LLL: "MMMM D, YYYY h:mm A",
							LLLL: "dddd, MMMM D, YYYY h:mm A"
						},
						invalidDate: "Invalid date",
						ordinal: "%d",
						dayOfMonthOrdinalParse: /\d{1,2}/,
						relativeTime: {
							future: "in %s",
							past: "%s ago",
							s: "a few seconds",
							ss: "%d seconds",
							m: "a minute",
							mm: "%d minutes",
							h: "an hour",
							hh: "%d hours",
							d: "a day",
							dd: "%d days",
							M: "a month",
							MM: "%d months",
							y: "a year",
							yy: "%d years"
						},
						months: _e,
						monthsShort: Ce,
						week: {
							dow: 0,
							doy: 6
						},
						weekdays: Re,
						weekdaysMin: Ue,
						weekdaysShort: Ie,
						meridiemParse: /[ap]\.?m?\.?/i
					},
					et = {},
					tt = {};

				function nt(e) {
					return e ? e.toLowerCase().replace("_", "-") : e
				}

				function ct(t) {
					var n = null;
					if (!et[t] && "undefined" !== typeof e && e && e.exports) try {
						n = Ze._abbr, ! function() {
							var e = new Error("Cannot find module 'undefined'");
							throw e.code = "MODULE_NOT_FOUND", e
						}(), rt(n)
					} catch (c) {}
					return et[t]
				}

				function rt(e, t) {
					var n;
					return e && ((n = o(t) ? ot(e) : at(e, t)) ? Ze = n : "undefined" !== typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), Ze._abbr
				}

				function at(e, t) {
					if (null !== t) {
						var n, c = Je;
						if (t.abbr = e, null != et[e]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = et[e]._config;
						else if (null != t.parentLocale)
							if (null != et[t.parentLocale]) c = et[t.parentLocale]._config;
							else {
								if (null == (n = ct(t.parentLocale))) return tt[t.parentLocale] || (tt[t.parentLocale] = []), tt[t.parentLocale].push({
									name: e,
									config: t
								}), null;
								c = n._config
							}
						return et[e] = new k(T(c, t)), tt[e] && tt[e].forEach((function(e) {
							at(e.name, e.config)
						})), rt(e), et[e]
					}
					return delete et[e], null
				}

				function ot(e) {
					var t;
					if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Ze;
					if (!r(e)) {
						if (t = ct(e)) return t;
						e = [e]
					}
					return function(e) {
						for (var t, n, c, r, a = 0; a < e.length;) {
							for (t = (r = nt(e[a]).split("-")).length, n = (n = nt(e[a + 1])) ? n.split("-") : null; t > 0;) {
								if (c = ct(r.slice(0, t).join("-"))) return c;
								if (n && n.length >= t && V(r, n, !0) >= t - 1) break;
								t--
							}
							a++
						}
						return Ze
					}(e)
				}

				function lt(e) {
					var t, n = e._a;
					return n && -2 === v(e).overflow && (t = n[1] < 0 || n[1] > 11 ? 1 : n[2] < 1 || n[2] > Ve(n[0], n[1]) ? 2 : n[3] < 0 || n[3] > 24 || 24 === n[3] && (0 !== n[4] || 0 !== n[5] || 0 !== n[6]) ? 3 : n[4] < 0 || n[4] > 59 ? 4 : n[5] < 0 || n[5] > 59 ? 5 : n[6] < 0 || n[6] > 999 ? 6 : -1, v(e)._overflowDayOfYear && (t < 0 || t > 2) && (t = 2), v(e)._overflowWeeks && -1 === t && (t = 7), v(e)._overflowWeekday && -1 === t && (t = 8), v(e).overflow = t), e
				}

				function it(e, t, n) {
					return null != e ? e : null != t ? t : n
				}

				function ut(e) {
					var t, n, r, a, o, l = [];
					if (!e._d) {
						for (r = function(e) {
								var t = new Date(c.now());
								return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
							}(e), e._w && null == e._a[2] && null == e._a[1] && function(e) {
								var t, n, c, r, a, o, l, i;
								if (null != (t = e._w).GG || null != t.W || null != t.E) a = 1, o = 4, n = it(t.GG, e._a[0], je(wt(), 1, 4).year), c = it(t.W, 1), ((r = it(t.E, 1)) < 1 || r > 7) && (i = !0);
								else {
									a = e._locale._week.dow, o = e._locale._week.doy;
									var u = je(wt(), a, o);
									n = it(t.gg, e._a[0], u.year), c = it(t.w, u.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (i = !0) : null != t.e ? (r = t.e + a, (t.e < 0 || t.e > 6) && (i = !0)) : r = a
								}
								c < 1 || c > De(n, a, o) ? v(e)._overflowWeeks = !0 : null != i ? v(e)._overflowWeekday = !0 : (l = Ae(n, c, r, a, o), e._a[0] = l.year, e._dayOfYear = l.dayOfYear)
							}(e), null != e._dayOfYear && (o = it(e._a[0], r[0]), (e._dayOfYear > me(o) || 0 === e._dayOfYear) && (v(e)._overflowDayOfYear = !0), n = Pe(o, 0, e._dayOfYear), e._a[1] = n.getUTCMonth(), e._a[2] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = l[t] = r[t];
						for (; t < 7; t++) e._a[t] = l[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
						24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0, e._a[3] = 0), e._d = (e._useUTC ? Pe : Ee).apply(null, l), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[3] = 24), e._w && "undefined" !== typeof e._w.d && e._w.d !== a && (v(e).weekdayMismatch = !0)
					}
				}
				var st = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
					ht = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
					ft = /Z|[+-]\d\d(?::?\d\d)?/,
					vt = [
						["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
						["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
						["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
						["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
						["YYYY-DDD", /\d{4}-\d{3}/],
						["YYYY-MM", /\d{4}-\d\d/, !1],
						["YYYYYYMMDD", /[+-]\d{10}/],
						["YYYYMMDD", /\d{8}/],
						["GGGG[W]WWE", /\d{4}W\d{3}/],
						["GGGG[W]WW", /\d{4}W\d{2}/, !1],
						["YYYYDDD", /\d{7}/]
					],
					dt = [
						["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
						["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
						["HH:mm:ss", /\d\d:\d\d:\d\d/],
						["HH:mm", /\d\d:\d\d/],
						["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
						["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
						["HHmmss", /\d\d\d\d\d\d/],
						["HHmm", /\d\d\d\d/],
						["HH", /\d\d/]
					],
					pt = /^\/?Date\((\-?\d+)/i;

				function mt(e) {
					var t, n, c, r, a, o, l = e._i,
						i = st.exec(l) || ht.exec(l);
					if (i) {
						for (v(e).iso = !0, t = 0, n = vt.length; t < n; t++)
							if (vt[t][1].exec(i[1])) {
								r = vt[t][0], c = !1 !== vt[t][2];
								break
							}
						if (null == r) return void(e._isValid = !1);
						if (i[3]) {
							for (t = 0, n = dt.length; t < n; t++)
								if (dt[t][1].exec(i[3])) {
									a = (i[2] || " ") + dt[t][0];
									break
								}
							if (null == a) return void(e._isValid = !1)
						}
						if (!c && null != a) return void(e._isValid = !1);
						if (i[4]) {
							if (!ft.exec(i[4])) return void(e._isValid = !1);
							o = "Z"
						}
						e._f = r + (a || "") + (o || ""), bt(e)
					} else e._isValid = !1
				}
				var zt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

				function yt(e) {
					var t = parseInt(e, 10);
					return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
				}
				var gt = {
					UT: 0,
					GMT: 0,
					EDT: -240,
					EST: -300,
					CDT: -300,
					CST: -360,
					MDT: -360,
					MST: -420,
					PDT: -420,
					PST: -480
				};

				function Mt(e) {
					var t = zt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
					if (t) {
						var n = function(e, t, n, c, r, a) {
							var o = [yt(e), Ce.indexOf(t), parseInt(n, 10), parseInt(c, 10), parseInt(r, 10)];
							return a && o.push(parseInt(a, 10)), o
						}(t[4], t[3], t[2], t[5], t[6], t[7]);
						if (! function(e, t, n) {
								return !e || Ie.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (v(n).weekdayMismatch = !0, n._isValid = !1, !1)
							}(t[1], n, e)) return;
						e._a = n, e._tzm = function(e, t, n) {
							if (e) return gt[e];
							if (t) return 0;
							var c = parseInt(n, 10),
								r = c % 100;
							return (c - r) / 100 * 60 + r
						}(t[8], t[9], t[10]), e._d = Pe.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), v(e).rfc2822 = !0
					} else e._isValid = !1
				}

				function bt(e) {
					if (e._f !== c.ISO_8601)
						if (e._f !== c.RFC_2822) {
							e._a = [], v(e).empty = !0;
							var t, n, r, a, o, l = "" + e._i,
								i = l.length,
								u = 0;
							for (r = B(e._f, e._locale).match(N) || [], t = 0; t < r.length; t++) a = r[t], (n = (l.match(se(a, e)) || [])[0]) && ((o = l.substr(0, l.indexOf(n))).length > 0 && v(e).unusedInput.push(o), l = l.slice(l.indexOf(n) + n.length), u += n.length), U[a] ? (n ? v(e).empty = !1 : v(e).unusedTokens.push(a), pe(a, n, e)) : e._strict && !n && v(e).unusedTokens.push(a);
							v(e).charsLeftOver = i - u, l.length > 0 && v(e).unusedInput.push(l), e._a[3] <= 12 && !0 === v(e).bigHour && e._a[3] > 0 && (v(e).bigHour = void 0), v(e).parsedDateParts = e._a.slice(0), v(e).meridiem = e._meridiem, e._a[3] = function(e, t, n) {
								var c;
								return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((c = e.isPM(n)) && t < 12 && (t += 12), c || 12 !== t || (t = 0), t) : t
							}(e._locale, e._a[3], e._meridiem), ut(e), lt(e)
						} else Mt(e);
					else mt(e)
				}

				function Ht(e) {
					var t = e._i,
						n = e._f;
					return e._locale = e._locale || ot(e._l), null === t || void 0 === n && "" === t ? p({
						nullInput: !0
					}) : ("string" === typeof t && (e._i = t = e._locale.preparse(t)), M(t) ? new g(lt(t)) : (i(t) ? e._d = t : r(n) ? function(e) {
						var t, n, c, r, a;
						if (0 === e._f.length) return v(e).invalidFormat = !0, void(e._d = new Date(NaN));
						for (r = 0; r < e._f.length; r++) a = 0, t = z({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], bt(t), d(t) && (a += v(t).charsLeftOver, a += 10 * v(t).unusedTokens.length, v(t).score = a, (null == c || a < c) && (c = a, n = t));
						h(e, n || t)
					}(e) : n ? bt(e) : function(e) {
						var t = e._i;
						o(t) ? e._d = new Date(c.now()) : i(t) ? e._d = new Date(t.valueOf()) : "string" === typeof t ? function(e) {
							var t = pt.exec(e._i);
							null === t ? (mt(e), !1 === e._isValid && (delete e._isValid, Mt(e), !1 === e._isValid && (delete e._isValid, c.createFromInputFallback(e)))) : e._d = new Date(+t[1])
						}(e) : r(t) ? (e._a = u(t.slice(0), (function(e) {
							return parseInt(e, 10)
						})), ut(e)) : a(t) ? function(e) {
							if (!e._d) {
								var t = F(e._i);
								e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], (function(e) {
									return e && parseInt(e, 10)
								})), ut(e)
							}
						}(e) : l(t) ? e._d = new Date(t) : c.createFromInputFallback(e)
					}(e), d(e) || (e._d = null), e))
				}

				function Vt(e, t, n, c, o) {
					var l = {};
					return !0 !== n && !1 !== n || (c = n, n = void 0), (a(e) && function(e) {
							if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
							var t;
							for (t in e)
								if (e.hasOwnProperty(t)) return !1;
							return !0
						}(e) || r(e) && 0 === e.length) && (e = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = o, l._l = n, l._i = e, l._f = t, l._strict = c,
						function(e) {
							var t = new g(lt(Ht(e)));
							return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
						}(l)
				}

				function wt(e, t, n, c) {
					return Vt(e, t, n, c, !1)
				}
				c.createFromInputFallback = _("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) {
					e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
				})), c.ISO_8601 = function() {}, c.RFC_2822 = function() {};
				var _t = _("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
						var e = wt.apply(null, arguments);
						return this.isValid() && e.isValid() ? e < this ? this : e : p()
					})),
					Ct = _("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
						var e = wt.apply(null, arguments);
						return this.isValid() && e.isValid() ? e > this ? this : e : p()
					}));

				function Ot(e, t) {
					var n, c;
					if (1 === t.length && r(t[0]) && (t = t[0]), !t.length) return wt();
					for (n = t[0], c = 1; c < t.length; ++c) t[c].isValid() && !t[c][e](n) || (n = t[c]);
					return n
				}
				var St = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

				function Lt(e) {
					var t = F(e),
						n = t.year || 0,
						c = t.quarter || 0,
						r = t.month || 0,
						a = t.week || t.isoWeek || 0,
						o = t.day || 0,
						l = t.hour || 0,
						i = t.minute || 0,
						u = t.second || 0,
						s = t.millisecond || 0;
					this._isValid = function(e) {
						for (var t in e)
							if (-1 === ye.call(St, t) || null != e[t] && isNaN(e[t])) return !1;
						for (var n = !1, c = 0; c < St.length; ++c)
							if (e[St[c]]) {
								if (n) return !1;
								parseFloat(e[St[c]]) !== H(e[St[c]]) && (n = !0)
							}
						return !0
					}(t), this._milliseconds = +s + 1e3 * u + 6e4 * i + 1e3 * l * 60 * 60, this._days = +o + 7 * a, this._months = +r + 3 * c + 12 * n, this._data = {}, this._locale = ot(), this._bubble()
				}

				function Tt(e) {
					return e instanceof Lt
				}

				function kt(e) {
					return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
				}

				function xt(e, t) {
					W(e, 0, 0, (function() {
						var e = this.utcOffset(),
							n = "+";
						return e < 0 && (e = -e, n = "-"), n + D(~~(e / 60), 2) + t + D(~~e % 60, 2)
					}))
				}
				xt("Z", ":"), xt("ZZ", ""), ue("Z", oe), ue("ZZ", oe), ve(["Z", "ZZ"], (function(e, t, n) {
					n._useUTC = !0, n._tzm = Pt(oe, e)
				}));
				var Et = /([\+\-]|\d\d)/gi;

				function Pt(e, t) {
					var n = (t || "").match(e);
					if (null === n) return null;
					var c = ((n[n.length - 1] || []) + "").match(Et) || ["-", 0, 0],
						r = 60 * c[1] + H(c[2]);
					return 0 === r ? 0 : "+" === c[0] ? r : -r
				}

				function Ft(e, t) {
					var n, r;
					return t._isUTC ? (n = t.clone(), r = (M(e) || i(e) ? e.valueOf() : wt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), c.updateOffset(n, !1), n) : wt(e).local()
				}

				function At(e) {
					return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
				}

				function jt() {
					return !!this.isValid() && this._isUTC && 0 === this._offset
				}
				c.updateOffset = function() {};
				var Dt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
					Nt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

				function Rt(e, t) {
					var n, c, r, a = e,
						o = null;
					return Tt(e) ? a = {
						ms: e._milliseconds,
						d: e._days,
						M: e._months
					} : l(e) ? (a = {}, t ? a[t] = e : a.milliseconds = e) : (o = Dt.exec(e)) ? (n = "-" === o[1] ? -1 : 1, a = {
						y: 0,
						d: H(o[2]) * n,
						h: H(o[3]) * n,
						m: H(o[4]) * n,
						s: H(o[5]) * n,
						ms: H(kt(1e3 * o[6])) * n
					}) : (o = Nt.exec(e)) ? (n = "-" === o[1] ? -1 : 1, a = {
						y: It(o[2], n),
						M: It(o[3], n),
						w: It(o[4], n),
						d: It(o[5], n),
						h: It(o[6], n),
						m: It(o[7], n),
						s: It(o[8], n)
					}) : null == a ? a = {} : "object" === typeof a && ("from" in a || "to" in a) && (r = function(e, t) {
						var n;
						return e.isValid() && t.isValid() ? (t = Ft(t, e), e.isBefore(t) ? n = Ut(e, t) : ((n = Ut(t, e)).milliseconds = -n.milliseconds, n.months = -n.months), n) : {
							milliseconds: 0,
							months: 0
						}
					}(wt(a.from), wt(a.to)), (a = {}).ms = r.milliseconds, a.M = r.months), c = new Lt(a), Tt(e) && s(e, "_locale") && (c._locale = e._locale), c
				}

				function It(e, t) {
					var n = e && parseFloat(e.replace(",", "."));
					return (isNaN(n) ? 0 : n) * t
				}

				function Ut(e, t) {
					var n = {};
					return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
				}

				function Wt(e, t) {
					return function(n, c) {
						var r;
						return null === c || isNaN(+c) || (S(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = c, c = r), Yt(this, Rt(n = "string" === typeof n ? +n : n, c), e), this
					}
				}

				function Yt(e, t, n, r) {
					var a = t._milliseconds,
						o = kt(t._days),
						l = kt(t._months);
					e.isValid() && (r = null == r || r, l && Se(e, be(e, "Month") + l * n), o && He(e, "Date", be(e, "Date") + o * n), a && e._d.setTime(e._d.valueOf() + a * n), r && c.updateOffset(e, o || l))
				}
				Rt.fn = Lt.prototype, Rt.invalid = function() {
					return Rt(NaN)
				};
				var Bt = Wt(1, "add"),
					qt = Wt(-1, "subtract");

				function Gt(e, t) {
					var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
						c = e.clone().add(n, "months");
					return -(n + (t - c < 0 ? (t - c) / (c - e.clone().add(n - 1, "months")) : (t - c) / (e.clone().add(n + 1, "months") - c))) || 0
				}

				function Kt(e) {
					var t;
					return void 0 === e ? this._locale._abbr : (null != (t = ot(e)) && (this._locale = t), this)
				}
				c.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", c.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
				var Qt = _("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) {
					return void 0 === e ? this.localeData() : this.locale(e)
				}));

				function $t() {
					return this._locale
				}

				function Zt(e, t) {
					return (e % t + t) % t
				}

				function Xt(e, t, n) {
					return e < 100 && e >= 0 ? new Date(e + 400, t, n) - 126227808e5 : new Date(e, t, n).valueOf()
				}

				function Jt(e, t, n) {
					return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - 126227808e5 : Date.UTC(e, t, n)
				}

				function en(e, t) {
					W(0, [e, e.length], 0, t)
				}

				function tn(e, t, n, c, r) {
					var a;
					return null == e ? je(this, c, r).year : (t > (a = De(e, c, r)) && (t = a), nn.call(this, e, t, n, c, r))
				}

				function nn(e, t, n, c, r) {
					var a = Ae(e, t, n, c, r),
						o = Pe(a.year, 0, a.dayOfYear);
					return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
				}
				W(0, ["gg", 2], 0, (function() {
					return this.weekYear() % 100
				})), W(0, ["GG", 2], 0, (function() {
					return this.isoWeekYear() % 100
				})), en("gggg", "weekYear"), en("ggggg", "weekYear"), en("GGGG", "isoWeekYear"), en("GGGGG", "isoWeekYear"), E("weekYear", "gg"), E("isoWeekYear", "GG"), j("weekYear", 1), j("isoWeekYear", 1), ue("G", re), ue("g", re), ue("GG", Z, G), ue("gg", Z, G), ue("GGGG", te, Q), ue("gggg", te, Q), ue("GGGGG", ne, $), ue("ggggg", ne, $), de(["gggg", "ggggg", "GGGG", "GGGGG"], (function(e, t, n, c) {
					t[c.substr(0, 2)] = H(e)
				})), de(["gg", "GG"], (function(e, t, n, r) {
					t[r] = c.parseTwoDigitYear(e)
				})), W("Q", 0, "Qo", "quarter"), E("quarter", "Q"), j("quarter", 7), ue("Q", q), ve("Q", (function(e, t) {
					t[1] = 3 * (H(e) - 1)
				})), W("D", ["DD", 2], "Do", "date"), E("date", "D"), j("date", 9), ue("D", Z), ue("DD", Z, G), ue("Do", (function(e, t) {
					return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
				})), ve(["D", "DD"], 2), ve("Do", (function(e, t) {
					t[2] = H(e.match(Z)[0])
				}));
				var cn = Me("Date", !0);
				W("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), E("dayOfYear", "DDD"), j("dayOfYear", 4), ue("DDD", ee), ue("DDDD", K), ve(["DDD", "DDDD"], (function(e, t, n) {
					n._dayOfYear = H(e)
				})), W("m", ["mm", 2], 0, "minute"), E("minute", "m"), j("minute", 14), ue("m", Z), ue("mm", Z, G), ve(["m", "mm"], 4);
				var rn = Me("Minutes", !1);
				W("s", ["ss", 2], 0, "second"), E("second", "s"), j("second", 15), ue("s", Z), ue("ss", Z, G), ve(["s", "ss"], 5);
				var an, on = Me("Seconds", !1);
				for (W("S", 0, 0, (function() {
						return ~~(this.millisecond() / 100)
					})), W(0, ["SS", 2], 0, (function() {
						return ~~(this.millisecond() / 10)
					})), W(0, ["SSS", 3], 0, "millisecond"), W(0, ["SSSS", 4], 0, (function() {
						return 10 * this.millisecond()
					})), W(0, ["SSSSS", 5], 0, (function() {
						return 100 * this.millisecond()
					})), W(0, ["SSSSSS", 6], 0, (function() {
						return 1e3 * this.millisecond()
					})), W(0, ["SSSSSSS", 7], 0, (function() {
						return 1e4 * this.millisecond()
					})), W(0, ["SSSSSSSS", 8], 0, (function() {
						return 1e5 * this.millisecond()
					})), W(0, ["SSSSSSSSS", 9], 0, (function() {
						return 1e6 * this.millisecond()
					})), E("millisecond", "ms"), j("millisecond", 16), ue("S", ee, q), ue("SS", ee, G), ue("SSS", ee, K), an = "SSSS"; an.length <= 9; an += "S") ue(an, ce);

				function ln(e, t) {
					t[6] = H(1e3 * ("0." + e))
				}
				for (an = "S"; an.length <= 9; an += "S") ve(an, ln);
				var un = Me("Milliseconds", !1);
				W("z", 0, 0, "zoneAbbr"), W("zz", 0, 0, "zoneName");
				var sn = g.prototype;

				function hn(e) {
					return e
				}
				sn.add = Bt, sn.calendar = function(e, t) {
					var n = e || wt(),
						r = Ft(n, this).startOf("day"),
						a = c.calendarFormat(this, r) || "sameElse",
						o = t && (L(t[a]) ? t[a].call(this, n) : t[a]);
					return this.format(o || this.localeData().calendar(a, this, wt(n)))
				}, sn.clone = function() {
					return new g(this)
				}, sn.diff = function(e, t, n) {
					var c, r, a;
					if (!this.isValid()) return NaN;
					if (!(c = Ft(e, this)).isValid()) return NaN;
					switch (r = 6e4 * (c.utcOffset() - this.utcOffset()), t = P(t)) {
						case "year":
							a = Gt(this, c) / 12;
							break;
						case "month":
							a = Gt(this, c);
							break;
						case "quarter":
							a = Gt(this, c) / 3;
							break;
						case "second":
							a = (this - c) / 1e3;
							break;
						case "minute":
							a = (this - c) / 6e4;
							break;
						case "hour":
							a = (this - c) / 36e5;
							break;
						case "day":
							a = (this - c - r) / 864e5;
							break;
						case "week":
							a = (this - c - r) / 6048e5;
							break;
						default:
							a = this - c
					}
					return n ? a : b(a)
				}, sn.endOf = function(e) {
					var t;
					if (void 0 === (e = P(e)) || "millisecond" === e || !this.isValid()) return this;
					var n = this._isUTC ? Jt : Xt;
					switch (e) {
						case "year":
							t = n(this.year() + 1, 0, 1) - 1;
							break;
						case "quarter":
							t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
							break;
						case "month":
							t = n(this.year(), this.month() + 1, 1) - 1;
							break;
						case "week":
							t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
							break;
						case "isoWeek":
							t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
							break;
						case "day":
						case "date":
							t = n(this.year(), this.month(), this.date() + 1) - 1;
							break;
						case "hour":
							t = this._d.valueOf(), t += 36e5 - Zt(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
							break;
						case "minute":
							t = this._d.valueOf(), t += 6e4 - Zt(t, 6e4) - 1;
							break;
						case "second":
							t = this._d.valueOf(), t += 1e3 - Zt(t, 1e3) - 1
					}
					return this._d.setTime(t), c.updateOffset(this, !0), this
				}, sn.format = function(e) {
					e || (e = this.isUtc() ? c.defaultFormatUtc : c.defaultFormat);
					var t = Y(this, e);
					return this.localeData().postformat(t)
				}, sn.from = function(e, t) {
					return this.isValid() && (M(e) && e.isValid() || wt(e).isValid()) ? Rt({
						to: this,
						from: e
					}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
				}, sn.fromNow = function(e) {
					return this.from(wt(), e)
				}, sn.to = function(e, t) {
					return this.isValid() && (M(e) && e.isValid() || wt(e).isValid()) ? Rt({
						from: this,
						to: e
					}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
				}, sn.toNow = function(e) {
					return this.to(wt(), e)
				}, sn.get = function(e) {
					return L(this[e = P(e)]) ? this[e]() : this
				}, sn.invalidAt = function() {
					return v(this).overflow
				}, sn.isAfter = function(e, t) {
					var n = M(e) ? e : wt(e);
					return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = P(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
				}, sn.isBefore = function(e, t) {
					var n = M(e) ? e : wt(e);
					return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = P(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
				}, sn.isBetween = function(e, t, n, c) {
					var r = M(e) ? e : wt(e),
						a = M(t) ? t : wt(t);
					return !!(this.isValid() && r.isValid() && a.isValid()) && ("(" === (c = c || "()")[0] ? this.isAfter(r, n) : !this.isBefore(r, n)) && (")" === c[1] ? this.isBefore(a, n) : !this.isAfter(a, n))
				}, sn.isSame = function(e, t) {
					var n, c = M(e) ? e : wt(e);
					return !(!this.isValid() || !c.isValid()) && ("millisecond" === (t = P(t) || "millisecond") ? this.valueOf() === c.valueOf() : (n = c.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
				}, sn.isSameOrAfter = function(e, t) {
					return this.isSame(e, t) || this.isAfter(e, t)
				}, sn.isSameOrBefore = function(e, t) {
					return this.isSame(e, t) || this.isBefore(e, t)
				}, sn.isValid = function() {
					return d(this)
				}, sn.lang = Qt, sn.locale = Kt, sn.localeData = $t, sn.max = Ct, sn.min = _t, sn.parsingFlags = function() {
					return h({}, v(this))
				}, sn.set = function(e, t) {
					if ("object" === typeof e)
						for (var n = function(e) {
								var t = [];
								for (var n in e) t.push({
									unit: n,
									priority: A[n]
								});
								return t.sort((function(e, t) {
									return e.priority - t.priority
								})), t
							}(e = F(e)), c = 0; c < n.length; c++) this[n[c].unit](e[n[c].unit]);
					else if (L(this[e = P(e)])) return this[e](t);
					return this
				}, sn.startOf = function(e) {
					var t;
					if (void 0 === (e = P(e)) || "millisecond" === e || !this.isValid()) return this;
					var n = this._isUTC ? Jt : Xt;
					switch (e) {
						case "year":
							t = n(this.year(), 0, 1);
							break;
						case "quarter":
							t = n(this.year(), this.month() - this.month() % 3, 1);
							break;
						case "month":
							t = n(this.year(), this.month(), 1);
							break;
						case "week":
							t = n(this.year(), this.month(), this.date() - this.weekday());
							break;
						case "isoWeek":
							t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
							break;
						case "day":
						case "date":
							t = n(this.year(), this.month(), this.date());
							break;
						case "hour":
							t = this._d.valueOf(), t -= Zt(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
							break;
						case "minute":
							t = this._d.valueOf(), t -= Zt(t, 6e4);
							break;
						case "second":
							t = this._d.valueOf(), t -= Zt(t, 1e3)
					}
					return this._d.setTime(t), c.updateOffset(this, !0), this
				}, sn.subtract = qt, sn.toArray = function() {
					var e = this;
					return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
				}, sn.toObject = function() {
					var e = this;
					return {
						years: e.year(),
						months: e.month(),
						date: e.date(),
						hours: e.hours(),
						minutes: e.minutes(),
						seconds: e.seconds(),
						milliseconds: e.milliseconds()
					}
				}, sn.toDate = function() {
					return new Date(this.valueOf())
				}, sn.toISOString = function(e) {
					if (!this.isValid()) return null;
					var t = !0 !== e,
						n = t ? this.clone().utc() : this;
					return n.year() < 0 || n.year() > 9999 ? Y(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : L(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", Y(n, "Z")) : Y(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
				}, sn.inspect = function() {
					if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
					var e = "moment",
						t = "";
					this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
					var n = "[" + e + '("]',
						c = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
						r = t + '[")]';
					return this.format(n + c + "-MM-DD[T]HH:mm:ss.SSS" + r)
				}, sn.toJSON = function() {
					return this.isValid() ? this.toISOString() : null
				}, sn.toString = function() {
					return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
				}, sn.unix = function() {
					return Math.floor(this.valueOf() / 1e3)
				}, sn.valueOf = function() {
					return this._d.valueOf() - 6e4 * (this._offset || 0)
				}, sn.creationData = function() {
					return {
						input: this._i,
						format: this._f,
						locale: this._locale,
						isUTC: this._isUTC,
						strict: this._strict
					}
				}, sn.year = ge, sn.isLeapYear = function() {
					return ze(this.year())
				}, sn.weekYear = function(e) {
					return tn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
				}, sn.isoWeekYear = function(e) {
					return tn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
				}, sn.quarter = sn.quarters = function(e) {
					return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
				}, sn.month = Le, sn.daysInMonth = function() {
					return Ve(this.year(), this.month())
				}, sn.week = sn.weeks = function(e) {
					var t = this.localeData().week(this);
					return null == e ? t : this.add(7 * (e - t), "d")
				}, sn.isoWeek = sn.isoWeeks = function(e) {
					var t = je(this, 1, 4).week;
					return null == e ? t : this.add(7 * (e - t), "d")
				}, sn.weeksInYear = function() {
					var e = this.localeData()._week;
					return De(this.year(), e.dow, e.doy)
				}, sn.isoWeeksInYear = function() {
					return De(this.year(), 1, 4)
				}, sn.date = cn, sn.day = sn.days = function(e) {
					if (!this.isValid()) return null != e ? this : NaN;
					var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
					return null != e ? (e = function(e, t) {
						return "string" !== typeof e ? e : isNaN(e) ? "number" === typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
					}(e, this.localeData()), this.add(e - t, "d")) : t
				}, sn.weekday = function(e) {
					if (!this.isValid()) return null != e ? this : NaN;
					var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
					return null == e ? t : this.add(e - t, "d")
				}, sn.isoWeekday = function(e) {
					if (!this.isValid()) return null != e ? this : NaN;
					if (null != e) {
						var t = function(e, t) {
							return "string" === typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
						}(e, this.localeData());
						return this.day(this.day() % 7 ? t : t - 7)
					}
					return this.day() || 7
				}, sn.dayOfYear = function(e) {
					var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
					return null == e ? t : this.add(e - t, "d")
				}, sn.hour = sn.hours = Xe, sn.minute = sn.minutes = rn, sn.second = sn.seconds = on, sn.millisecond = sn.milliseconds = un, sn.utcOffset = function(e, t, n) {
					var r, a = this._offset || 0;
					if (!this.isValid()) return null != e ? this : NaN;
					if (null != e) {
						if ("string" === typeof e) {
							if (null === (e = Pt(oe, e))) return this
						} else Math.abs(e) < 16 && !n && (e *= 60);
						return !this._isUTC && t && (r = At(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), a !== e && (!t || this._changeInProgress ? Yt(this, Rt(e - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, c.updateOffset(this, !0), this._changeInProgress = null)), this
					}
					return this._isUTC ? a : At(this)
				}, sn.utc = function(e) {
					return this.utcOffset(0, e)
				}, sn.local = function(e) {
					return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(At(this), "m")), this
				}, sn.parseZone = function() {
					if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
					else if ("string" === typeof this._i) {
						var e = Pt(ae, this._i);
						null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
					}
					return this
				}, sn.hasAlignedHourOffset = function(e) {
					return !!this.isValid() && (e = e ? wt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0)
				}, sn.isDST = function() {
					return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
				}, sn.isLocal = function() {
					return !!this.isValid() && !this._isUTC
				}, sn.isUtcOffset = function() {
					return !!this.isValid() && this._isUTC
				}, sn.isUtc = jt, sn.isUTC = jt, sn.zoneAbbr = function() {
					return this._isUTC ? "UTC" : ""
				}, sn.zoneName = function() {
					return this._isUTC ? "Coordinated Universal Time" : ""
				}, sn.dates = _("dates accessor is deprecated. Use date instead.", cn), sn.months = _("months accessor is deprecated. Use month instead", Le), sn.years = _("years accessor is deprecated. Use year instead", ge), sn.zone = _("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function(e, t) {
					return null != e ? ("string" !== typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
				})), sn.isDSTShifted = _("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function() {
					if (!o(this._isDSTShifted)) return this._isDSTShifted;
					var e = {};
					if (z(e, this), (e = Ht(e))._a) {
						var t = e._isUTC ? f(e._a) : wt(e._a);
						this._isDSTShifted = this.isValid() && V(e._a, t.toArray()) > 0
					} else this._isDSTShifted = !1;
					return this._isDSTShifted
				}));
				var fn = k.prototype;

				function vn(e, t, n, c) {
					var r = ot(),
						a = f().set(c, t);
					return r[n](a, e)
				}

				function dn(e, t, n) {
					if (l(e) && (t = e, e = void 0), e = e || "", null != t) return vn(e, t, n, "month");
					var c, r = [];
					for (c = 0; c < 12; c++) r[c] = vn(e, c, n, "month");
					return r
				}

				function pn(e, t, n, c) {
					"boolean" === typeof e ? (l(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, l(t) && (n = t, t = void 0), t = t || "");
					var r, a = ot(),
						o = e ? a._week.dow : 0;
					if (null != n) return vn(t, (n + o) % 7, c, "day");
					var i = [];
					for (r = 0; r < 7; r++) i[r] = vn(t, (r + o) % 7, c, "day");
					return i
				}
				fn.calendar = function(e, t, n) {
					var c = this._calendar[e] || this._calendar.sameElse;
					return L(c) ? c.call(t, n) : c
				}, fn.longDateFormat = function(e) {
					var t = this._longDateFormat[e],
						n = this._longDateFormat[e.toUpperCase()];
					return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, (function(e) {
						return e.slice(1)
					})), this._longDateFormat[e])
				}, fn.invalidDate = function() {
					return this._invalidDate
				}, fn.ordinal = function(e) {
					return this._ordinal.replace("%d", e)
				}, fn.preparse = hn, fn.postformat = hn, fn.relativeTime = function(e, t, n, c) {
					var r = this._relativeTime[n];
					return L(r) ? r(e, t, n, c) : r.replace(/%d/i, e)
				}, fn.pastFuture = function(e, t) {
					var n = this._relativeTime[e > 0 ? "future" : "past"];
					return L(n) ? n(t) : n.replace(/%s/i, t)
				}, fn.set = function(e) {
					var t, n;
					for (n in e) L(t = e[n]) ? this[n] = t : this["_" + n] = t;
					this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
				}, fn.months = function(e, t) {
					return e ? r(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || we).test(t) ? "format" : "standalone"][e.month()] : r(this._months) ? this._months : this._months.standalone
				}, fn.monthsShort = function(e, t) {
					return e ? r(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[we.test(t) ? "format" : "standalone"][e.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
				}, fn.monthsParse = function(e, t, n) {
					var c, r, a;
					if (this._monthsParseExact) return Oe.call(this, e, t, n);
					for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), c = 0; c < 12; c++) {
						if (r = f([2e3, c]), n && !this._longMonthsParse[c] && (this._longMonthsParse[c] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[c] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[c] || (a = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[c] = new RegExp(a.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[c].test(e)) return c;
						if (n && "MMM" === t && this._shortMonthsParse[c].test(e)) return c;
						if (!n && this._monthsParse[c].test(e)) return c
					}
				}, fn.monthsRegex = function(e) {
					return this._monthsParseExact ? (s(this, "_monthsRegex") || xe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (s(this, "_monthsRegex") || (this._monthsRegex = ke), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
				}, fn.monthsShortRegex = function(e) {
					return this._monthsParseExact ? (s(this, "_monthsRegex") || xe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (s(this, "_monthsShortRegex") || (this._monthsShortRegex = Te), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
				}, fn.week = function(e) {
					return je(e, this._week.dow, this._week.doy).week
				}, fn.firstDayOfYear = function() {
					return this._week.doy
				}, fn.firstDayOfWeek = function() {
					return this._week.dow
				}, fn.weekdays = function(e, t) {
					var n = r(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
					return !0 === e ? Ne(n, this._week.dow) : e ? n[e.day()] : n
				}, fn.weekdaysMin = function(e) {
					return !0 === e ? Ne(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
				}, fn.weekdaysShort = function(e) {
					return !0 === e ? Ne(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
				}, fn.weekdaysParse = function(e, t, n) {
					var c, r, a;
					if (this._weekdaysParseExact) return We.call(this, e, t, n);
					for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), c = 0; c < 7; c++) {
						if (r = f([2e3, 1]).day(c), n && !this._fullWeekdaysParse[c] && (this._fullWeekdaysParse[c] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[c] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[c] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[c] || (a = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[c] = new RegExp(a.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[c].test(e)) return c;
						if (n && "ddd" === t && this._shortWeekdaysParse[c].test(e)) return c;
						if (n && "dd" === t && this._minWeekdaysParse[c].test(e)) return c;
						if (!n && this._weekdaysParse[c].test(e)) return c
					}
				}, fn.weekdaysRegex = function(e) {
					return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || Ge.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (s(this, "_weekdaysRegex") || (this._weekdaysRegex = Ye), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
				}, fn.weekdaysShortRegex = function(e) {
					return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || Ge.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (s(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Be), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
				}, fn.weekdaysMinRegex = function(e) {
					return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || Ge.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (s(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = qe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
				}, fn.isPM = function(e) {
					return "p" === (e + "").toLowerCase().charAt(0)
				}, fn.meridiem = function(e, t, n) {
					return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
				}, rt("en", {
					dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
					ordinal: function(e) {
						var t = e % 10;
						return e + (1 === H(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
					}
				}), c.lang = _("moment.lang is deprecated. Use moment.locale instead.", rt), c.langData = _("moment.langData is deprecated. Use moment.localeData instead.", ot);
				var mn = Math.abs;

				function zn(e, t, n, c) {
					var r = Rt(t, n);
					return e._milliseconds += c * r._milliseconds, e._days += c * r._days, e._months += c * r._months, e._bubble()
				}

				function yn(e) {
					return e < 0 ? Math.floor(e) : Math.ceil(e)
				}

				function gn(e) {
					return 4800 * e / 146097
				}

				function Mn(e) {
					return 146097 * e / 4800
				}

				function bn(e) {
					return function() {
						return this.as(e)
					}
				}
				var Hn = bn("ms"),
					Vn = bn("s"),
					wn = bn("m"),
					_n = bn("h"),
					Cn = bn("d"),
					On = bn("w"),
					Sn = bn("M"),
					Ln = bn("Q"),
					Tn = bn("y");

				function kn(e) {
					return function() {
						return this.isValid() ? this._data[e] : NaN
					}
				}
				var xn = kn("milliseconds"),
					En = kn("seconds"),
					Pn = kn("minutes"),
					Fn = kn("hours"),
					An = kn("days"),
					jn = kn("months"),
					Dn = kn("years"),
					Nn = Math.round,
					Rn = {
						ss: 44,
						s: 45,
						m: 45,
						h: 22,
						d: 26,
						M: 11
					};

				function In(e, t, n, c, r) {
					return r.relativeTime(t || 1, !!n, e, c)
				}
				var Un = Math.abs;

				function Wn(e) {
					return (e > 0) - (e < 0) || +e
				}

				function Yn() {
					if (!this.isValid()) return this.localeData().invalidDate();
					var e, t, n = Un(this._milliseconds) / 1e3,
						c = Un(this._days),
						r = Un(this._months);
					e = b(n / 60), t = b(e / 60), n %= 60, e %= 60;
					var a = b(r / 12),
						o = r %= 12,
						l = c,
						i = t,
						u = e,
						s = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
						h = this.asSeconds();
					if (!h) return "P0D";
					var f = h < 0 ? "-" : "",
						v = Wn(this._months) !== Wn(h) ? "-" : "",
						d = Wn(this._days) !== Wn(h) ? "-" : "",
						p = Wn(this._milliseconds) !== Wn(h) ? "-" : "";
					return f + "P" + (a ? v + a + "Y" : "") + (o ? v + o + "M" : "") + (l ? d + l + "D" : "") + (i || u || s ? "T" : "") + (i ? p + i + "H" : "") + (u ? p + u + "M" : "") + (s ? p + s + "S" : "")
				}
				var Bn = Lt.prototype;
				return Bn.isValid = function() {
					return this._isValid
				}, Bn.abs = function() {
					var e = this._data;
					return this._milliseconds = mn(this._milliseconds), this._days = mn(this._days), this._months = mn(this._months), e.milliseconds = mn(e.milliseconds), e.seconds = mn(e.seconds), e.minutes = mn(e.minutes), e.hours = mn(e.hours), e.months = mn(e.months), e.years = mn(e.years), this
				}, Bn.add = function(e, t) {
					return zn(this, e, t, 1)
				}, Bn.subtract = function(e, t) {
					return zn(this, e, t, -1)
				}, Bn.as = function(e) {
					if (!this.isValid()) return NaN;
					var t, n, c = this._milliseconds;
					if ("month" === (e = P(e)) || "quarter" === e || "year" === e) switch (t = this._days + c / 864e5, n = this._months + gn(t), e) {
						case "month":
							return n;
						case "quarter":
							return n / 3;
						case "year":
							return n / 12
					} else switch (t = this._days + Math.round(Mn(this._months)), e) {
						case "week":
							return t / 7 + c / 6048e5;
						case "day":
							return t + c / 864e5;
						case "hour":
							return 24 * t + c / 36e5;
						case "minute":
							return 1440 * t + c / 6e4;
						case "second":
							return 86400 * t + c / 1e3;
						case "millisecond":
							return Math.floor(864e5 * t) + c;
						default:
							throw new Error("Unknown unit " + e)
					}
				}, Bn.asMilliseconds = Hn, Bn.asSeconds = Vn, Bn.asMinutes = wn, Bn.asHours = _n, Bn.asDays = Cn, Bn.asWeeks = On, Bn.asMonths = Sn, Bn.asQuarters = Ln, Bn.asYears = Tn, Bn.valueOf = function() {
					return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * H(this._months / 12) : NaN
				}, Bn._bubble = function() {
					var e, t, n, c, r, a = this._milliseconds,
						o = this._days,
						l = this._months,
						i = this._data;
					return a >= 0 && o >= 0 && l >= 0 || a <= 0 && o <= 0 && l <= 0 || (a += 864e5 * yn(Mn(l) + o), o = 0, l = 0), i.milliseconds = a % 1e3, e = b(a / 1e3), i.seconds = e % 60, t = b(e / 60), i.minutes = t % 60, n = b(t / 60), i.hours = n % 24, o += b(n / 24), r = b(gn(o)), l += r, o -= yn(Mn(r)), c = b(l / 12), l %= 12, i.days = o, i.months = l, i.years = c, this
				}, Bn.clone = function() {
					return Rt(this)
				}, Bn.get = function(e) {
					return e = P(e), this.isValid() ? this[e + "s"]() : NaN
				}, Bn.milliseconds = xn, Bn.seconds = En, Bn.minutes = Pn, Bn.hours = Fn, Bn.days = An, Bn.weeks = function() {
					return b(this.days() / 7)
				}, Bn.months = jn, Bn.years = Dn, Bn.humanize = function(e) {
					if (!this.isValid()) return this.localeData().invalidDate();
					var t = this.localeData(),
						n = function(e, t, n) {
							var c = Rt(e).abs(),
								r = Nn(c.as("s")),
								a = Nn(c.as("m")),
								o = Nn(c.as("h")),
								l = Nn(c.as("d")),
								i = Nn(c.as("M")),
								u = Nn(c.as("y")),
								s = r <= Rn.ss && ["s", r] || r < Rn.s && ["ss", r] || a <= 1 && ["m"] || a < Rn.m && ["mm", a] || o <= 1 && ["h"] || o < Rn.h && ["hh", o] || l <= 1 && ["d"] || l < Rn.d && ["dd", l] || i <= 1 && ["M"] || i < Rn.M && ["MM", i] || u <= 1 && ["y"] || ["yy", u];
							return s[2] = t, s[3] = +e > 0, s[4] = n, In.apply(null, s)
						}(this, !e, t);
					return e && (n = t.pastFuture(+this, n)), t.postformat(n)
				}, Bn.toISOString = Yn, Bn.toString = Yn, Bn.toJSON = Yn, Bn.locale = Kt, Bn.localeData = $t, Bn.toIsoString = _("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Yn), Bn.lang = Qt, W("X", 0, 0, "unix"), W("x", 0, 0, "valueOf"), ue("x", re), ue("X", /[+-]?\d+(\.\d{1,3})?/), ve("X", (function(e, t, n) {
					n._d = new Date(1e3 * parseFloat(e, 10))
				})), ve("x", (function(e, t, n) {
					n._d = new Date(H(e))
				})), c.version = "2.24.0", t = wt, c.fn = sn, c.min = function() {
					var e = [].slice.call(arguments, 0);
					return Ot("isBefore", e)
				}, c.max = function() {
					var e = [].slice.call(arguments, 0);
					return Ot("isAfter", e)
				}, c.now = function() {
					return Date.now ? Date.now() : +new Date
				}, c.utc = f, c.unix = function(e) {
					return wt(1e3 * e)
				}, c.months = function(e, t) {
					return dn(e, t, "months")
				}, c.isDate = i, c.locale = rt, c.invalid = p, c.duration = Rt, c.isMoment = M, c.weekdays = function(e, t, n) {
					return pn(e, t, n, "weekdays")
				}, c.parseZone = function() {
					return wt.apply(null, arguments).parseZone()
				}, c.localeData = ot, c.isDuration = Tt, c.monthsShort = function(e, t) {
					return dn(e, t, "monthsShort")
				}, c.weekdaysMin = function(e, t, n) {
					return pn(e, t, n, "weekdaysMin")
				}, c.defineLocale = at, c.updateLocale = function(e, t) {
					if (null != t) {
						var n, c, r = Je;
						null != (c = ct(e)) && (r = c._config), t = T(r, t), (n = new k(t)).parentLocale = et[e], et[e] = n, rt(e)
					} else null != et[e] && (null != et[e].parentLocale ? et[e] = et[e].parentLocale : null != et[e] && delete et[e]);
					return et[e]
				}, c.locales = function() {
					return C(et)
				}, c.weekdaysShort = function(e, t, n) {
					return pn(e, t, n, "weekdaysShort")
				}, c.normalizeUnits = P, c.relativeTimeRounding = function(e) {
					return void 0 === e ? Nn : "function" === typeof e && (Nn = e, !0)
				}, c.relativeTimeThreshold = function(e, t) {
					return void 0 !== Rn[e] && (void 0 === t ? Rn[e] : (Rn[e] = t, "s" === e && (Rn.ss = t - 1), !0))
				}, c.calendarFormat = function(e, t) {
					var n = e.diff(t, "days", !0);
					return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
				}, c.prototype = sn, c.HTML5_FMT = {
					DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
					DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
					DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
					DATE: "YYYY-MM-DD",
					TIME: "HH:mm",
					TIME_SECONDS: "HH:mm:ss",
					TIME_MS: "HH:mm:ss.SSS",
					WEEK: "GGGG-[W]WW",
					MONTH: "YYYY-MM"
				}, c
			}()
		}).call(this, n(123)(e))
	}, function(e, t) {
		e.exports = function(e) {
			return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
				enumerable: !0,
				get: function() {
					return e.l
				}
			}), Object.defineProperty(e, "id", {
				enumerable: !0,
				get: function() {
					return e.i
				}
			}), e.webpackPolyfill = 1), e
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e) {
			return e.default || e
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.changeConfirmLocale = function(e) {
			o = e ? a(a({}, o), e) : a({}, r.default.Modal)
		}, t.getConfirmLocale = function() {
			return o
		};
		var c, r = (c = n(71)) && c.__esModule ? c : {
			default: c
		};

		function a() {
			return (a = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
				}
				return e
			}).apply(this, arguments)
		}
		var o = a({}, r.default.Modal)
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = {
			items_per_page: "/ page",
			jump_to: "Go to",
			jump_to_confirm: "confirm",
			page: "",
			prev_page: "Previous Page",
			next_page: "Next Page",
			prev_5: "Previous 5 Pages",
			next_5: "Next 5 Pages",
			prev_3: "Previous 3 Pages",
			next_3: "Next 3 Pages"
		}, e.exports = t.default
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0, t.default = {
			today: "Today",
			now: "Now",
			backToToday: "Back to today",
			ok: "Ok",
			clear: "Clear",
			month: "Month",
			year: "Year",
			timeSelect: "select time",
			dateSelect: "select date",
			weekSelect: "Choose a week",
			monthSelect: "Choose a month",
			yearSelect: "Choose a year",
			decadeSelect: "Choose a decade",
			yearFormat: "YYYY",
			dateFormat: "M/D/YYYY",
			dayFormat: "D",
			dateTimeFormat: "M/D/YYYY HH:mm:ss",
			monthBeforeYear: !0,
			previousMonth: "Previous month (PageUp)",
			nextMonth: "Next month (PageDown)",
			previousYear: "Last year (Control + left)",
			nextYear: "Next year (Control + right)",
			previousDecade: "Last decade",
			nextDecade: "Next decade",
			previousCentury: "Last century",
			nextCentury: "Next century"
		}, e.exports = t.default
	}, function(e, t, n) {
		"use strict";
		var c;
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var r = ((c = n(72)) && c.__esModule ? c : {
			default: c
		}).default;
		t.default = r
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.warning = r, t.note = a, t.resetWarned = function() {
			c = {}
		}, t.call = o, t.warningOnce = l, t.noteOnce = function(e, t) {
			o(a, e, t)
		}, t.default = void 0;
		var c = {};

		function r(e, t) {
			0
		}

		function a(e, t) {
			0
		}

		function o(e, t, n) {
			t || c[n] || (e(!1, n), c[n] = !0)
		}

		function l(e, t) {
			o(r, e, t)
		}
		var i = l;
		t.default = i
	}, function(e, t, n) {
		"use strict";
		var c;
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var r = ((c = n(71)) && c.__esModule ? c : {
			default: c
		}).default;
		t.default = r
	}, function(e, t, n) {
		"use strict";

		function c(e) {
			return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.withConfigConsumer = function(e) {
			return function(t) {
				var n = function(n) {
						return r.createElement(h, null, (function(c) {
							var a = e.prefixCls,
								o = (0, c.getPrefixCls)(a, n.prefixCls);
							return r.createElement(t, u({}, c, n, {
								prefixCls: o
							}))
						}))
					},
					c = t.constructor,
					a = c && c.displayName || t.name || "Component";
				return n.displayName = "withConfigConsumer(".concat(a, ")"), n
			}
		}, t.ConfigConsumer = t.ConfigContext = void 0;
		var r = function(e) {
				if (e && e.__esModule) return e;
				if (null === e || "object" !== c(e) && "function" !== typeof e) return {
					default: e
				};
				var t = i();
				if (t && t.has(e)) return t.get(e);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in e)
					if (Object.prototype.hasOwnProperty.call(e, a)) {
						var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
						o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
					}
				n.default = e, t && t.set(e, n);
				return n
			}(n(0)),
			a = l(n(46)),
			o = l(n(137));

		function l(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function i() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return i = function() {
				return e
			}, e
		}

		function u() {
			return (u = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
				}
				return e
			}).apply(this, arguments)
		}
		var s = (0, a.default)({
			getPrefixCls: function(e, t) {
				return t || "ant-".concat(e)
			},
			renderEmpty: o.default
		});
		t.ConfigContext = s;
		var h = s.Consumer;
		t.ConfigConsumer = h
	}, function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var c = n(0),
			r = (o(c), o(n(133))),
			a = o(n(136));
		o(n(74));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function l(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" !== typeof t && "function" !== typeof t ? e : t
		}

		function u(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}

		function s(e) {
			var t = [];
			return {
				on: function(e) {
					t.push(e)
				},
				off: function(e) {
					t = t.filter((function(t) {
						return t !== e
					}))
				},
				get: function() {
					return e
				},
				set: function(n, c) {
					e = n, t.forEach((function(t) {
						return t(e, c)
					}))
				}
			}
		}
		t.default = function(e, t) {
			var n, o, h = "__create-react-context-" + (0, a.default)() + "__",
				f = function(e) {
					function n() {
						var t, c;
						l(this, n);
						for (var r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
						return t = c = i(this, e.call.apply(e, [this].concat(a))), c.emitter = s(c.props.value), i(c, t)
					}
					return u(n, e), n.prototype.getChildContext = function() {
						var e;
						return (e = {})[h] = this.emitter, e
					}, n.prototype.componentWillReceiveProps = function(e) {
						if (this.props.value !== e.value) {
							var n = this.props.value,
								c = e.value,
								r = void 0;
							((a = n) === (o = c) ? 0 !== a || 1 / a === 1 / o : a !== a && o !== o) ? r = 0: (r = "function" === typeof t ? t(n, c) : 1073741823, 0 !== (r |= 0) && this.emitter.set(e.value, r))
						}
						var a, o
					}, n.prototype.render = function() {
						return this.props.children
					}, n
				}(c.Component);
			f.childContextTypes = ((n = {})[h] = r.default.object.isRequired, n);
			var v = function(t) {
				function n() {
					var e, c;
					l(this, n);
					for (var r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
					return e = c = i(this, t.call.apply(t, [this].concat(a))), c.state = {
						value: c.getValue()
					}, c.onUpdate = function(e, t) {
						0 !== ((0 | c.observedBits) & t) && c.setState({
							value: c.getValue()
						})
					}, i(c, e)
				}
				return u(n, t), n.prototype.componentWillReceiveProps = function(e) {
					var t = e.observedBits;
					this.observedBits = void 0 === t || null === t ? 1073741823 : t
				}, n.prototype.componentDidMount = function() {
					this.context[h] && this.context[h].on(this.onUpdate);
					var e = this.props.observedBits;
					this.observedBits = void 0 === e || null === e ? 1073741823 : e
				}, n.prototype.componentWillUnmount = function() {
					this.context[h] && this.context[h].off(this.onUpdate)
				}, n.prototype.getValue = function() {
					return this.context[h] ? this.context[h].get() : e
				}, n.prototype.render = function() {
					return (e = this.props.children, Array.isArray(e) ? e[0] : e)(this.state.value);
					var e
				}, n
			}(c.Component);
			return v.contextTypes = ((o = {})[h] = r.default.object, o), {
				Provider: f,
				Consumer: v
			}
		}, e.exports = t.default
	}, function(e, t, n) {
		e.exports = n(134)()
	}, function(e, t, n) {
		"use strict";
		var c = n(135);

		function r() {}

		function a() {}
		a.resetWarningCache = r, e.exports = function() {
			function e(e, t, n, r, a, o) {
				if (o !== c) {
					var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
					throw l.name = "Invariant Violation", l
				}
			}

			function t() {
				return e
			}
			e.isRequired = e;
			var n = {
				array: e,
				bool: e,
				func: e,
				number: e,
				object: e,
				string: e,
				symbol: e,
				any: e,
				arrayOf: t,
				element: e,
				elementType: e,
				instanceOf: t,
				node: e,
				objectOf: t,
				oneOf: t,
				oneOfType: t,
				shape: t,
				exact: t,
				checkPropTypes: a,
				resetWarningCache: r
			};
			return n.PropTypes = n, n
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
	}, function(e, t, n) {
		"use strict";
		(function(t) {
			var n = "__global_unique_id__";
			e.exports = function() {
				return t[n] = (t[n] || 0) + 1
			}
		}).call(this, n(40))
	}, function(e, t, n) {
		"use strict";

		function c(e) {
			return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var r, a = function(e) {
				if (e && e.__esModule) return e;
				if (null === e || "object" !== c(e) && "function" !== typeof e) return {
					default: e
				};
				var t = i();
				if (t && t.has(e)) return t.get(e);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in e)
					if (Object.prototype.hasOwnProperty.call(e, a)) {
						var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
						o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
					}
				n.default = e, t && t.set(e, n);
				return n
			}(n(0)),
			o = (r = n(138)) && r.__esModule ? r : {
				default: r
			},
			l = n(15);

		function i() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return i = function() {
				return e
			}, e
		}
		var u = function(e) {
			return a.createElement(l.ConfigConsumer, null, (function(t) {
				var n = (0, t.getPrefixCls)("empty");
				switch (e) {
					case "Table":
					case "List":
						return a.createElement(o.default, {
							image: o.default.PRESENTED_IMAGE_SIMPLE
						});
					case "Select":
					case "TreeSelect":
					case "Cascader":
					case "Transfer":
					case "Mentions":
						return a.createElement(o.default, {
							image: o.default.PRESENTED_IMAGE_SIMPLE,
							className: "".concat(n, "-small")
						});
					default:
						return a.createElement(o.default, null)
				}
			}))
		};
		t.default = u
	}, function(e, t, n) {
		"use strict";

		function c(e) {
			return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var r = function(e) {
				if (e && e.__esModule) return e;
				if (null === e || "object" !== c(e) && "function" !== typeof e) return {
					default: e
				};
				var t = h();
				if (t && t.has(e)) return t.get(e);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in e)
					if (Object.prototype.hasOwnProperty.call(e, a)) {
						var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
						o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
					}
				n.default = e, t && t.set(e, n);
				return n
			}(n(0)),
			a = s(n(4)),
			o = n(15),
			l = s(n(50)),
			i = s(n(139)),
			u = s(n(140));

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function h() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return h = function() {
				return e
			}, e
		}

		function f() {
			return (f = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
				}
				return e
			}).apply(this, arguments)
		}
		var v = function(e, t) {
				var n = {};
				for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && t.indexOf(c) < 0 && (n[c] = e[c]);
				if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (c = Object.getOwnPropertySymbols(e); r < c.length; r++) t.indexOf(c[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, c[r]) && (n[c[r]] = e[c[r]])
				}
				return n
			},
			d = r.createElement(i.default, null),
			p = r.createElement(u.default, null),
			m = function(e) {
				return r.createElement(o.ConfigConsumer, null, (function(t) {
					var n = t.getPrefixCls,
						c = e.className,
						o = e.prefixCls,
						i = e.image,
						u = void 0 === i ? d : i,
						s = e.description,
						h = e.children,
						m = e.imageStyle,
						z = v(e, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);
					return r.createElement(l.default, {
						componentName: "Empty"
					}, (function(e) {
						var t, l, i, v = n("empty", o),
							d = "undefined" !== typeof s ? s : e.description,
							y = "string" === typeof d ? d : "empty",
							g = null;
						return g = "string" === typeof u ? r.createElement("img", {
							alt: y,
							src: u
						}) : u, r.createElement("div", f({
							className: (0, a.default)(v, (t = {}, l = "".concat(v, "-normal"), i = u === p, l in t ? Object.defineProperty(t, l, {
								value: i,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : t[l] = i, t), c)
						}, z), r.createElement("div", {
							className: "".concat(v, "-image"),
							style: m
						}, g), d && r.createElement("p", {
							className: "".concat(v, "-description")
						}, d), h && r.createElement("div", {
							className: "".concat(v, "-footer")
						}, h))
					}))
				}))
			};
		m.PRESENTED_IMAGE_DEFAULT = d, m.PRESENTED_IMAGE_SIMPLE = p;
		var z = m;
		t.default = z
	}, function(e, t, n) {
		"use strict";

		function c(e) {
			return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var r = function(e) {
			if (e && e.__esModule) return e;
			if (null === e || "object" !== c(e) && "function" !== typeof e) return {
				default: e
			};
			var t = a();
			if (t && t.has(e)) return t.get(e);
			var n = {},
				r = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var o in e)
				if (Object.prototype.hasOwnProperty.call(e, o)) {
					var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
					l && (l.get || l.set) ? Object.defineProperty(n, o, l) : n[o] = e[o]
				}
			n.default = e, t && t.set(e, n);
			return n
		}(n(0));

		function a() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return a = function() {
				return e
			}, e
		}
		var o = function() {
			return r.createElement("svg", {
				width: "184",
				height: "152",
				viewBox: "0 0 184 152",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.createElement("g", {
				transform: "translate(24 31.67)"
			}, r.createElement("ellipse", {
				fillOpacity: ".8",
				fill: "#F5F5F7",
				cx: "67.797",
				cy: "106.89",
				rx: "67.797",
				ry: "12.668"
			}), r.createElement("path", {
				d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
				fill: "#AEB8C2"
			}), r.createElement("path", {
				d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
				fill: "url(#linearGradient-1)",
				transform: "translate(13.56)"
			}), r.createElement("path", {
				d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
				fill: "#F5F5F7"
			}), r.createElement("path", {
				d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
				fill: "#DCE0E6"
			})), r.createElement("path", {
				d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
				fill: "#DCE0E6"
			}), r.createElement("g", {
				transform: "translate(149.65 15.383)",
				fill: "#FFF"
			}, r.createElement("ellipse", {
				cx: "20.654",
				cy: "3.167",
				rx: "2.849",
				ry: "2.815"
			}), r.createElement("path", {
				d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
			}))))
		};
		t.default = o
	}, function(e, t, n) {
		"use strict";

		function c(e) {
			return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var r = function(e) {
			if (e && e.__esModule) return e;
			if (null === e || "object" !== c(e) && "function" !== typeof e) return {
				default: e
			};
			var t = a();
			if (t && t.has(e)) return t.get(e);
			var n = {},
				r = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var o in e)
				if (Object.prototype.hasOwnProperty.call(e, o)) {
					var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
					l && (l.get || l.set) ? Object.defineProperty(n, o, l) : n[o] = e[o]
				}
			n.default = e, t && t.set(e, n);
			return n
		}(n(0));

		function a() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return a = function() {
				return e
			}, e
		}
		var o = function() {
			return r.createElement("svg", {
				width: "64",
				height: "41",
				viewBox: "0 0 64 41",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.createElement("g", {
				transform: "translate(0 1)",
				fill: "none",
				fillRule: "evenodd"
			}, r.createElement("ellipse", {
				fill: "#F5F5F5",
				cx: "32",
				cy: "33",
				rx: "32",
				ry: "7"
			}), r.createElement("g", {
				fillRule: "nonzero",
				stroke: "#D9D9D9"
			}, r.createElement("path", {
				d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
			}), r.createElement("path", {
				d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
				fill: "#FAFAFA"
			}))))
		};
		t.default = o
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.tupleNum = t.tuple = void 0;
		t.tuple = function() {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			return t
		};
		t.tupleNum = function() {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			return t
		}
	}, function(e, t, n) {
		"use strict";

		function c(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function r() {
			return (r = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
				}
				return e
			}).apply(this, arguments)
		}
		var a;
		if (Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = t.responsiveMap = t.responsiveArray = void 0, "undefined" !== typeof window) {
			window.matchMedia || (window.matchMedia = function(e) {
				return {
					media: e,
					matches: !1,
					addListener: function() {},
					removeListener: function() {}
				}
			}), a = n(143)
		}
		t.responsiveArray = ["xxl", "xl", "lg", "md", "sm", "xs"];
		var o = {
			xs: "(max-width: 575px)",
			sm: "(min-width: 576px)",
			md: "(min-width: 768px)",
			lg: "(min-width: 992px)",
			xl: "(min-width: 1200px)",
			xxl: "(min-width: 1600px)"
		};
		t.responsiveMap = o;
		var l = [],
			i = -1,
			u = {},
			s = {
				dispatch: function(e) {
					return u = e, !(l.length < 1) && (l.forEach((function(e) {
						e.func(u)
					})), !0)
				},
				subscribe: function(e) {
					0 === l.length && this.register();
					var t = (++i).toString();
					return l.push({
						token: t,
						func: e
					}), e(u), t
				},
				unsubscribe: function(e) {
					0 === (l = l.filter((function(t) {
						return t.token !== e
					}))).length && this.unregister()
				},
				unregister: function() {
					Object.keys(o).map((function(e) {
						return a.unregister(o[e])
					}))
				},
				register: function() {
					var e = this;
					Object.keys(o).map((function(t) {
						return a.register(o[t], {
							match: function() {
								var n = r(r({}, u), c({}, t, !0));
								e.dispatch(n)
							},
							unmatch: function() {
								var n = r(r({}, u), c({}, t, !1));
								e.dispatch(n)
							},
							destroy: function() {}
						})
					}))
				}
			};
		t.default = s
	}, function(e, t, n) {
		var c = n(144);
		e.exports = new c
	}, function(e, t, n) {
		var c = n(145),
			r = n(76),
			a = r.each,
			o = r.isFunction,
			l = r.isArray;

		function i() {
			if (!window.matchMedia) throw new Error("matchMedia not present, legacy browsers require a polyfill");
			this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches
		}
		i.prototype = {
			constructor: i,
			register: function(e, t, n) {
				var r = this.queries,
					i = n && this.browserIsIncapable;
				return r[e] || (r[e] = new c(e, i)), o(t) && (t = {
					match: t
				}), l(t) || (t = [t]), a(t, (function(t) {
					o(t) && (t = {
						match: t
					}), r[e].addHandler(t)
				})), this
			},
			unregister: function(e, t) {
				var n = this.queries[e];
				return n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])), this
			}
		}, e.exports = i
	}, function(e, t, n) {
		var c = n(146),
			r = n(76).each;

		function a(e, t) {
			this.query = e, this.isUnconditional = t, this.handlers = [], this.mql = window.matchMedia(e);
			var n = this;
			this.listener = function(e) {
				n.mql = e.currentTarget || e, n.assess()
			}, this.mql.addListener(this.listener)
		}
		a.prototype = {
			constuctor: a,
			addHandler: function(e) {
				var t = new c(e);
				this.handlers.push(t), this.matches() && t.on()
			},
			removeHandler: function(e) {
				var t = this.handlers;
				r(t, (function(n, c) {
					if (n.equals(e)) return n.destroy(), !t.splice(c, 1)
				}))
			},
			matches: function() {
				return this.mql.matches || this.isUnconditional
			},
			clear: function() {
				r(this.handlers, (function(e) {
					e.destroy()
				})), this.mql.removeListener(this.listener), this.handlers.length = 0
			},
			assess: function() {
				var e = this.matches() ? "on" : "off";
				r(this.handlers, (function(t) {
					t[e]()
				}))
			}
		}, e.exports = a
	}, function(e, t) {
		function n(e) {
			this.options = e, !e.deferSetup && this.setup()
		}
		n.prototype = {
			constructor: n,
			setup: function() {
				this.options.setup && this.options.setup(), this.initialised = !0
			},
			on: function() {
				!this.initialised && this.setup(), this.options.match && this.options.match()
			},
			off: function() {
				this.options.unmatch && this.options.unmatch()
			},
			destroy: function() {
				this.options.destroy ? this.options.destroy() : this.off()
			},
			equals: function(e) {
				return this.options === e || this.options.match === e
			}
		}, e.exports = n
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var c = s(n(0)),
			r = s(n(1)),
			a = i(n(4)),
			o = i(n(75)),
			l = n(15);

		function i(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function u() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return u = function() {
				return e
			}, e
		}

		function s(e) {
			if (e && e.__esModule) return e;
			if (null === e || "object" !== v(e) && "function" !== typeof e) return {
				default: e
			};
			var t = u();
			if (t && t.has(e)) return t.get(e);
			var n = {},
				c = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var r in e)
				if (Object.prototype.hasOwnProperty.call(e, r)) {
					var a = c ? Object.getOwnPropertyDescriptor(e, r) : null;
					a && (a.get || a.set) ? Object.defineProperty(n, r, a) : n[r] = e[r]
				}
			return n.default = e, t && t.set(e, n), n
		}

		function h(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function f() {
			return (f = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
				}
				return e
			}).apply(this, arguments)
		}

		function v(e) {
			return (v = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function d(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function p(e, t) {
			for (var n = 0; n < t.length; n++) {
				var c = t[n];
				c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(e, c.key, c)
			}
		}

		function m(e, t) {
			return !t || "object" !== v(t) && "function" !== typeof t ? y(e) : t
		}

		function z(e) {
			return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function y(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}

		function g(e, t) {
			return (g = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		var M = function(e, t) {
				var n = {};
				for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && t.indexOf(c) < 0 && (n[c] = e[c]);
				if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (c = Object.getOwnPropertySymbols(e); r < c.length; r++) t.indexOf(c[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, c[r]) && (n[c[r]] = e[c[r]])
				}
				return n
			},
			b = r.oneOfType([r.object, r.number]),
			H = function(e) {
				function t() {
					var e;
					return d(this, t), (e = m(this, z(t).apply(this, arguments))).renderCol = function(t) {
						var n, r = t.getPrefixCls,
							l = y(e).props,
							i = l.prefixCls,
							u = l.span,
							s = l.order,
							d = l.offset,
							p = l.push,
							m = l.pull,
							z = l.className,
							g = l.children,
							b = M(l, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children"]),
							H = r("col", i),
							V = {};
						["xs", "sm", "md", "lg", "xl", "xxl"].forEach((function(e) {
							var t, n = {},
								c = l[e];
							"number" === typeof c ? n.span = c : "object" === v(c) && (n = c || {}), delete b[e], V = f(f({}, V), (h(t = {}, "".concat(H, "-").concat(e, "-").concat(n.span), void 0 !== n.span), h(t, "".concat(H, "-").concat(e, "-order-").concat(n.order), n.order || 0 === n.order), h(t, "".concat(H, "-").concat(e, "-offset-").concat(n.offset), n.offset || 0 === n.offset), h(t, "".concat(H, "-").concat(e, "-push-").concat(n.push), n.push || 0 === n.push), h(t, "".concat(H, "-").concat(e, "-pull-").concat(n.pull), n.pull || 0 === n.pull), t))
						}));
						var w = (0, a.default)(H, (h(n = {}, "".concat(H, "-").concat(u), void 0 !== u), h(n, "".concat(H, "-order-").concat(s), s), h(n, "".concat(H, "-offset-").concat(d), d), h(n, "".concat(H, "-push-").concat(p), p), h(n, "".concat(H, "-pull-").concat(m), m), n), z, V);
						return c.createElement(o.default.Consumer, null, (function(e) {
							var t = e.gutter,
								n = b.style;
							return t && (n = f(f(f({}, t[0] > 0 ? {
								paddingLeft: t[0] / 2,
								paddingRight: t[0] / 2
							} : {}), t[1] > 0 ? {
								paddingTop: t[1] / 2,
								paddingBottom: t[1] / 2
							} : {}), n)), c.createElement("div", f({}, b, {
								style: n,
								className: w
							}), g)
						}))
					}, e
				}
				var n, r, i;
				return function(e, t) {
					if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && g(e, t)
				}(t, e), n = t, (r = [{
					key: "render",
					value: function() {
						return c.createElement(l.ConfigConsumer, null, this.renderCol)
					}
				}]) && p(n.prototype, r), i && p(n, i), t
			}(c.Component);
		t.default = H, H.propTypes = {
			span: r.number,
			order: r.number,
			offset: r.number,
			push: r.number,
			pull: r.number,
			className: r.string,
			children: r.node,
			xs: b,
			sm: b,
			md: b,
			lg: b,
			xl: b,
			xxl: b
		}
	}, function(e, t, n) {}, function(e, t, n) {
		"use strict";
		n(25), n(150)
	}, function(e, t, n) {}, function(e, t, n) {
		"use strict";
		var c = n(11),
			r = n(78),
			a = n(152),
			o = n(84);

		function l(e) {
			var t = new a(e),
				n = r(a.prototype.request, t);
			return c.extend(n, a.prototype, t), c.extend(n, t), n
		}
		var i = l(n(81));
		i.Axios = a, i.create = function(e) {
			return l(o(i.defaults, e))
		}, i.Cancel = n(85), i.CancelToken = n(165), i.isCancel = n(80), i.all = function(e) {
			return Promise.all(e)
		}, i.spread = n(166), e.exports = i, e.exports.default = i
	}, function(e, t, n) {
		"use strict";
		var c = n(11),
			r = n(79),
			a = n(153),
			o = n(154),
			l = n(84);

		function i(e) {
			this.defaults = e, this.interceptors = {
				request: new a,
				response: new a
			}
		}
		i.prototype.request = function(e) {
			"string" === typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = l(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
			var t = [o, void 0],
				n = Promise.resolve(e);
			for (this.interceptors.request.forEach((function(e) {
					t.unshift(e.fulfilled, e.rejected)
				})), this.interceptors.response.forEach((function(e) {
					t.push(e.fulfilled, e.rejected)
				})); t.length;) n = n.then(t.shift(), t.shift());
			return n
		}, i.prototype.getUri = function(e) {
			return e = l(this.defaults, e), r(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
		}, c.forEach(["delete", "get", "head", "options"], (function(e) {
			i.prototype[e] = function(t, n) {
				return this.request(c.merge(n || {}, {
					method: e,
					url: t
				}))
			}
		})), c.forEach(["post", "put", "patch"], (function(e) {
			i.prototype[e] = function(t, n, r) {
				return this.request(c.merge(r || {}, {
					method: e,
					url: t,
					data: n
				}))
			}
		})), e.exports = i
	}, function(e, t, n) {
		"use strict";
		var c = n(11);

		function r() {
			this.handlers = []
		}
		r.prototype.use = function(e, t) {
			return this.handlers.push({
				fulfilled: e,
				rejected: t
			}), this.handlers.length - 1
		}, r.prototype.eject = function(e) {
			this.handlers[e] && (this.handlers[e] = null)
		}, r.prototype.forEach = function(e) {
			c.forEach(this.handlers, (function(t) {
				null !== t && e(t)
			}))
		}, e.exports = r
	}, function(e, t, n) {
		"use strict";
		var c = n(11),
			r = n(155),
			a = n(80),
			o = n(81);

		function l(e) {
			e.cancelToken && e.cancelToken.throwIfRequested()
		}
		e.exports = function(e) {
			return l(e), e.headers = e.headers || {}, e.data = r(e.data, e.headers, e.transformRequest), e.headers = c.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), c.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
				delete e.headers[t]
			})), (e.adapter || o.adapter)(e).then((function(t) {
				return l(e), t.data = r(t.data, t.headers, e.transformResponse), t
			}), (function(t) {
				return a(t) || (l(e), t && t.response && (t.response.data = r(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
			}))
		}
	}, function(e, t, n) {
		"use strict";
		var c = n(11);
		e.exports = function(e, t, n) {
			return c.forEach(n, (function(n) {
				e = n(e, t)
			})), e
		}
	}, function(e, t, n) {
		"use strict";
		var c = n(11);
		e.exports = function(e, t) {
			c.forEach(e, (function(n, c) {
				c !== t && c.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[c])
			}))
		}
	}, function(e, t, n) {
		"use strict";
		var c = n(83);
		e.exports = function(e, t, n) {
			var r = n.config.validateStatus;
			!r || r(n.status) ? e(n) : t(c("Request failed with status code " + n.status, n.config, null, n.request, n))
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e, t, n, c, r) {
			return e.config = t, n && (e.code = n), e.request = c, e.response = r, e.isAxiosError = !0, e.toJSON = function() {
				return {
					message: this.message,
					name: this.name,
					description: this.description,
					number: this.number,
					fileName: this.fileName,
					lineNumber: this.lineNumber,
					columnNumber: this.columnNumber,
					stack: this.stack,
					config: this.config,
					code: this.code
				}
			}, e
		}
	}, function(e, t, n) {
		"use strict";
		var c = n(160),
			r = n(161);
		e.exports = function(e, t) {
			return e && !c(t) ? r(e, t) : t
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
		}
	}, function(e, t, n) {
		"use strict";
		var c = n(11),
			r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
		e.exports = function(e) {
			var t, n, a, o = {};
			return e ? (c.forEach(e.split("\n"), (function(e) {
				if (a = e.indexOf(":"), t = c.trim(e.substr(0, a)).toLowerCase(), n = c.trim(e.substr(a + 1)), t) {
					if (o[t] && r.indexOf(t) >= 0) return;
					o[t] = "set-cookie" === t ? (o[t] ? o[t] : []).concat([n]) : o[t] ? o[t] + ", " + n : n
				}
			})), o) : o
		}
	}, function(e, t, n) {
		"use strict";
		var c = n(11);
		e.exports = c.isStandardBrowserEnv() ? function() {
			var e, t = /(msie|trident)/i.test(navigator.userAgent),
				n = document.createElement("a");

			function r(e) {
				var c = e;
				return t && (n.setAttribute("href", c), c = n.href), n.setAttribute("href", c), {
					href: n.href,
					protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
					host: n.host,
					search: n.search ? n.search.replace(/^\?/, "") : "",
					hash: n.hash ? n.hash.replace(/^#/, "") : "",
					hostname: n.hostname,
					port: n.port,
					pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
				}
			}
			return e = r(window.location.href),
				function(t) {
					var n = c.isString(t) ? r(t) : t;
					return n.protocol === e.protocol && n.host === e.host
				}
		}() : function() {
			return !0
		}
	}, function(e, t, n) {
		"use strict";
		var c = n(11);
		e.exports = c.isStandardBrowserEnv() ? {
			write: function(e, t, n, r, a, o) {
				var l = [];
				l.push(e + "=" + encodeURIComponent(t)), c.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()), c.isString(r) && l.push("path=" + r), c.isString(a) && l.push("domain=" + a), !0 === o && l.push("secure"), document.cookie = l.join("; ")
			},
			read: function(e) {
				var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
				return t ? decodeURIComponent(t[3]) : null
			},
			remove: function(e) {
				this.write(e, "", Date.now() - 864e5)
			}
		} : {
			write: function() {},
			read: function() {
				return null
			},
			remove: function() {}
		}
	}, function(e, t, n) {
		"use strict";
		var c = n(85);

		function r(e) {
			if ("function" !== typeof e) throw new TypeError("executor must be a function.");
			var t;
			this.promise = new Promise((function(e) {
				t = e
			}));
			var n = this;
			e((function(e) {
				n.reason || (n.reason = new c(e), t(n.reason))
			}))
		}
		r.prototype.throwIfRequested = function() {
			if (this.reason) throw this.reason
		}, r.source = function() {
			var e;
			return {
				token: new r((function(t) {
					e = t
				})),
				cancel: e
			}
		}, e.exports = r
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return function(t) {
				return e.apply(null, t)
			}
		}
	}, function(e, t, n) {
		e.exports = {
			default: n(168),
			__esModule: !0
		}
	}, function(e, t, n) {
		n(169), e.exports = n(17).Object.assign
	}, function(e, t, n) {
		var c = n(26);
		c(c.S + c.F, "Object", {
			assign: n(171)
		})
	}, function(e, t) {
		e.exports = function(e) {
			if ("function" != typeof e) throw TypeError(e + " is not a function!");
			return e
		}
	}, function(e, t, n) {
		"use strict";
		var c = n(18),
			r = n(42),
			a = n(58),
			o = n(45),
			l = n(59),
			i = n(91),
			u = Object.assign;
		e.exports = !u || n(35)((function() {
			var e = {},
				t = {},
				n = Symbol(),
				c = "abcdefghijklmnopqrst";
			return e[n] = 7, c.split("").forEach((function(e) {
				t[e] = e
			})), 7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != c
		})) ? function(e, t) {
			for (var n = l(e), u = arguments.length, s = 1, h = a.f, f = o.f; u > s;)
				for (var v, d = i(arguments[s++]), p = h ? r(d).concat(h(d)) : r(d), m = p.length, z = 0; m > z;) v = p[z++], c && !f.call(d, v) || (n[v] = d[v]);
			return n
		} : u
	}, function(e, t, n) {
		var c = n(29),
			r = n(173),
			a = n(174);
		e.exports = function(e) {
			return function(t, n, o) {
				var l, i = c(t),
					u = r(i.length),
					s = a(o, u);
				if (e && n != n) {
					for (; u > s;)
						if ((l = i[s++]) != l) return !0
				} else
					for (; u > s; s++)
						if ((e || s in i) && i[s] === n) return e || s || 0;
				return !e && -1
			}
		}
	}, function(e, t, n) {
		var c = n(54),
			r = Math.min;
		e.exports = function(e) {
			return e > 0 ? r(c(e), 9007199254740991) : 0
		}
	}, function(e, t, n) {
		var c = n(54),
			r = Math.max,
			a = Math.min;
		e.exports = function(e, t) {
			return (e = c(e)) < 0 ? r(e + t, 0) : a(e, t)
		}
	}, function(e, t, n) {
		"use strict";

		function c(e) {
			return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var r, a = function(e) {
				if (e && e.__esModule) return e;
				if (null === e || "object" !== c(e) && "function" !== typeof e) return {
					default: e
				};
				var t = i();
				if (t && t.has(e)) return t.get(e);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in e)
					if (Object.prototype.hasOwnProperty.call(e, a)) {
						var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
						o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
					}
				n.default = e, t && t.set(e, n);
				return n
			}(n(0)),
			o = (r = n(4)) && r.__esModule ? r : {
				default: r
			},
			l = n(15);

		function i() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return i = function() {
				return e
			}, e
		}

		function u() {
			return (u = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
				}
				return e
			}).apply(this, arguments)
		}
		var s = function(e, t) {
				var n = {};
				for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && t.indexOf(c) < 0 && (n[c] = e[c]);
				if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (c = Object.getOwnPropertySymbols(e); r < c.length; r++) t.indexOf(c[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, c[r]) && (n[c[r]] = e[c[r]])
				}
				return n
			},
			h = function(e) {
				return a.createElement(l.ConfigConsumer, null, (function(t) {
					var n = t.getPrefixCls,
						c = e.prefixCls,
						r = e.className,
						l = e.hoverable,
						i = void 0 === l || l,
						h = s(e, ["prefixCls", "className", "hoverable"]),
						f = n("card", c),
						v = (0, o.default)("".concat(f, "-grid"), r, function(e, t, n) {
							return t in e ? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : e[t] = n, e
						}({}, "".concat(f, "-grid-hoverable"), i));
					return a.createElement("div", u({}, h, {
						className: v
					}))
				}))
			};
		t.default = h
	}, function(e, t, n) {
		"use strict";

		function c(e) {
			return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var r, a = function(e) {
				if (e && e.__esModule) return e;
				if (null === e || "object" !== c(e) && "function" !== typeof e) return {
					default: e
				};
				var t = i();
				if (t && t.has(e)) return t.get(e);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in e)
					if (Object.prototype.hasOwnProperty.call(e, a)) {
						var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
						o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
					}
				n.default = e, t && t.set(e, n);
				return n
			}(n(0)),
			o = (r = n(4)) && r.__esModule ? r : {
				default: r
			},
			l = n(15);

		function i() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return i = function() {
				return e
			}, e
		}

		function u() {
			return (u = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
				}
				return e
			}).apply(this, arguments)
		}
		var s = function(e, t) {
				var n = {};
				for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && t.indexOf(c) < 0 && (n[c] = e[c]);
				if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (c = Object.getOwnPropertySymbols(e); r < c.length; r++) t.indexOf(c[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, c[r]) && (n[c[r]] = e[c[r]])
				}
				return n
			},
			h = function(e) {
				return a.createElement(l.ConfigConsumer, null, (function(t) {
					var n = t.getPrefixCls,
						c = e.prefixCls,
						r = e.className,
						l = e.avatar,
						i = e.title,
						h = e.description,
						f = s(e, ["prefixCls", "className", "avatar", "title", "description"]),
						v = n("card", c),
						d = (0, o.default)("".concat(v, "-meta"), r),
						p = l ? a.createElement("div", {
							className: "".concat(v, "-meta-avatar")
						}, l) : null,
						m = i ? a.createElement("div", {
							className: "".concat(v, "-meta-title")
						}, i) : null,
						z = h ? a.createElement("div", {
							className: "".concat(v, "-meta-description")
						}, h) : null,
						y = m || z ? a.createElement("div", {
							className: "".concat(v, "-meta-detail")
						}, m, z) : null;
					return a.createElement("div", u({}, f, {
						className: d
					}), p, y)
				}))
			};
		t.default = h
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var c = m(n(0)),
			r = m(n(66)),
			a = m(n(235)),
			o = d(n(210)),
			l = d(n(4)),
			i = d(n(86)),
			u = d(n(211)),
			s = d(n(65)),
			h = n(15),
			f = d(n(33)),
			v = n(234);

		function d(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function p() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return p = function() {
				return e
			}, e
		}

		function m(e) {
			if (e && e.__esModule) return e;
			if (null === e || "object" !== g(e) && "function" !== typeof e) return {
				default: e
			};
			var t = p();
			if (t && t.has(e)) return t.get(e);
			var n = {},
				c = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var r in e)
				if (Object.prototype.hasOwnProperty.call(e, r)) {
					var a = c ? Object.getOwnPropertyDescriptor(e, r) : null;
					a && (a.get || a.set) ? Object.defineProperty(n, r, a) : n[r] = e[r]
				}
			return n.default = e, t && t.set(e, n), n
		}

		function z() {
			return (z = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
				}
				return e
			}).apply(this, arguments)
		}

		function y(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function g(e) {
			return (g = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function M(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function b(e, t) {
			for (var n = 0; n < t.length; n++) {
				var c = t[n];
				c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(e, c.key, c)
			}
		}

		function H(e, t) {
			return !t || "object" !== g(t) && "function" !== typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function V(e) {
			return (V = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function w(e, t) {
			return (w = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		var _ = function(e, t) {
				var n = {};
				for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && t.indexOf(c) < 0 && (n[c] = e[c]);
				if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (c = Object.getOwnPropertySymbols(e); r < c.length; r++) t.indexOf(c[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, c[r]) && (n[c[r]] = e[c[r]])
				}
				return n
			},
			C = function(e) {
				function t() {
					var e;
					return M(this, t), (e = H(this, V(t).apply(this, arguments))).removeTab = function(t, n) {
						if (n.stopPropagation(), t) {
							var c = e.props.onEdit;
							c && c(t, "remove")
						}
					}, e.handleChange = function(t) {
						var n = e.props.onChange;
						n && n(t)
					}, e.createNewTab = function(t) {
						var n = e.props.onEdit;
						n && n(t, "add")
					}, e.renderTabs = function(t) {
						var n, r = t.getPrefixCls,
							h = e.props,
							v = h.prefixCls,
							d = h.className,
							p = void 0 === d ? "" : d,
							m = h.size,
							M = h.type,
							b = void 0 === M ? "line" : M,
							H = h.tabPosition,
							V = h.children,
							w = h.animated,
							C = void 0 === w || w,
							O = h.hideAdd,
							S = e.props.tabBarExtraContent,
							L = "object" === g(C) ? C.tabPane : C;
						"line" !== b && (L = "animated" in e.props && L), (0, f.default)(!(b.indexOf("card") >= 0 && ("small" === m || "large" === m)), "Tabs", "`type=card|editable-card` doesn't have small or large size, it's by design.");
						var T = r("tabs", v),
							k = (0, l.default)(p, (y(n = {}, "".concat(T, "-vertical"), "left" === H || "right" === H), y(n, "".concat(T, "-").concat(m), !!m), y(n, "".concat(T, "-card"), b.indexOf("card") >= 0), y(n, "".concat(T, "-").concat(b), !0), y(n, "".concat(T, "-no-animation"), !L), n)),
							x = [];
						"editable-card" === b && (x = [], c.Children.forEach(V, (function(t, n) {
							if (!c.isValidElement(t)) return t;
							var r = t.props.closable,
								a = (r = "undefined" === typeof r || r) ? c.createElement(s.default, {
									type: "close",
									className: "".concat(T, "-close-x"),
									onClick: function(n) {
										return e.removeTab(t.key, n)
									}
								}) : null;
							x.push(c.cloneElement(t, {
								tab: c.createElement("div", {
									className: r ? void 0 : "".concat(T, "-tab-unclosable")
								}, t.props.tab, a),
								key: t.key || n
							}))
						})), O || (S = c.createElement("span", null, c.createElement(s.default, {
							type: "plus",
							className: "".concat(T, "-new-tab"),
							onClick: e.createNewTab
						}), S))), S = S ? c.createElement("div", {
							className: "".concat(T, "-extra-content")
						}, S) : null;
						var E = _(e.props, []),
							P = (0, l.default)("".concat(T, "-").concat(H, "-content"), b.indexOf("card") >= 0 && "".concat(T, "-card-content"));
						return c.createElement(a.default, z({}, e.props, {
							prefixCls: T,
							className: k,
							tabBarPosition: H,
							renderTabBar: function() {
								return c.createElement(u.default, z({}, (0, i.default)(E, ["className"]), {
									tabBarExtraContent: S
								}))
							},
							renderTabContent: function() {
								return c.createElement(o.default, {
									className: P,
									animated: L,
									animatedWithMargin: !0
								})
							},
							onChange: e.handleChange
						}), x.length > 0 ? x : V)
					}, e
				}
				var n, d, p;
				return function(e, t) {
					if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && w(e, t)
				}(t, e), n = t, (d = [{
					key: "componentDidMount",
					value: function() {
						var e = r.findDOMNode(this);
						e && !v.isFlexSupported && -1 === e.className.indexOf(" no-flex") && (e.className += " no-flex")
					}
				}, {
					key: "render",
					value: function() {
						return c.createElement(h.ConfigConsumer, null, this.renderTabs)
					}
				}]) && b(n.prototype, d), p && b(n, p), t
			}(c.Component);
		t.default = C, C.TabPane = a.TabPane, C.defaultProps = {
			hideAdd: !1,
			tabPosition: "top"
		}
	}, function(e, t, n) {
		n(179);
		var c = n(17).Object;
		e.exports = function(e, t, n) {
			return c.defineProperty(e, t, n)
		}
	}, function(e, t, n) {
		var c = n(26);
		c(c.S + c.F * !n(18), "Object", {
			defineProperty: n(22).f
		})
	}, function(e, t, n) {
		e.exports = {
			default: n(181),
			__esModule: !0
		}
	}, function(e, t, n) {
		n(182), n(188), e.exports = n(63).f("iterator")
	}, function(e, t, n) {
		"use strict";
		var c = n(183)(!0);
		n(95)(String, "String", (function(e) {
			this._t = String(e), this._i = 0
		}), (function() {
			var e, t = this._t,
				n = this._i;
			return n >= t.length ? {
				value: void 0,
				done: !0
			} : (e = c(t, n), this._i += e.length, {
				value: e,
				done: !1
			})
		}))
	}, function(e, t, n) {
		var c = n(54),
			r = n(53);
		e.exports = function(e) {
			return function(t, n) {
				var a, o, l = String(r(t)),
					i = c(n),
					u = l.length;
				return i < 0 || i >= u ? e ? "" : void 0 : (a = l.charCodeAt(i)) < 55296 || a > 56319 || i + 1 === u || (o = l.charCodeAt(i + 1)) < 56320 || o > 57343 ? e ? l.charAt(i) : a : e ? l.slice(i, i + 2) : o - 56320 + (a - 55296 << 10) + 65536
			}
		}
	}, function(e, t, n) {
		"use strict";
		var c = n(61),
			r = n(41),
			a = n(62),
			o = {};
		n(27)(o, n(30)("iterator"), (function() {
			return this
		})), e.exports = function(e, t, n) {
			e.prototype = c(o, {
				next: r(1, n)
			}), a(e, t + " Iterator")
		}
	}, function(e, t, n) {
		var c = n(22),
			r = n(34),
			a = n(42);
		e.exports = n(18) ? Object.defineProperties : function(e, t) {
			r(e);
			for (var n, o = a(t), l = o.length, i = 0; l > i;) c.f(e, n = o[i++], t[n]);
			return e
		}
	}, function(e, t, n) {
		var c = n(16).document;
		e.exports = c && c.documentElement
	}, function(e, t, n) {
		var c = n(23),
			r = n(59),
			a = n(55)("IE_PROTO"),
			o = Object.prototype;
		e.exports = Object.getPrototypeOf || function(e) {
			return e = r(e), c(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null
		}
	}, function(e, t, n) {
		n(189);
		for (var c = n(16), r = n(27), a = n(60), o = n(30)("toStringTag"), l = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), i = 0; i < l.length; i++) {
			var u = l[i],
				s = c[u],
				h = s && s.prototype;
			h && !h[o] && r(h, o, u), a[u] = a.Array
		}
	}, function(e, t, n) {
		"use strict";
		var c = n(190),
			r = n(191),
			a = n(60),
			o = n(29);
		e.exports = n(95)(Array, "Array", (function(e, t) {
			this._t = o(e), this._i = 0, this._k = t
		}), (function() {
			var e = this._t,
				t = this._k,
				n = this._i++;
			return !e || n >= e.length ? (this._t = void 0, r(1)) : r(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
		}), "values"), a.Arguments = a.Array, c("keys"), c("values"), c("entries")
	}, function(e, t) {
		e.exports = function() {}
	}, function(e, t) {
		e.exports = function(e, t) {
			return {
				value: t,
				done: !!e
			}
		}
	}, function(e, t, n) {
		e.exports = {
			default: n(193),
			__esModule: !0
		}
	}, function(e, t, n) {
		n(194), n(199), n(200), n(201), e.exports = n(17).Symbol
	}, function(e, t, n) {
		"use strict";
		var c = n(16),
			r = n(23),
			a = n(18),
			o = n(26),
			l = n(96),
			i = n(195).KEY,
			u = n(35),
			s = n(56),
			h = n(62),
			f = n(44),
			v = n(30),
			d = n(63),
			p = n(64),
			m = n(196),
			z = n(197),
			y = n(34),
			g = n(28),
			M = n(59),
			b = n(29),
			H = n(52),
			V = n(41),
			w = n(61),
			_ = n(198),
			C = n(98),
			O = n(58),
			S = n(22),
			L = n(42),
			T = C.f,
			k = S.f,
			x = _.f,
			E = c.Symbol,
			P = c.JSON,
			F = P && P.stringify,
			A = v("_hidden"),
			j = v("toPrimitive"),
			D = {}.propertyIsEnumerable,
			N = s("symbol-registry"),
			R = s("symbols"),
			I = s("op-symbols"),
			U = Object.prototype,
			W = "function" == typeof E && !!O.f,
			Y = c.QObject,
			B = !Y || !Y.prototype || !Y.prototype.findChild,
			q = a && u((function() {
				return 7 != w(k({}, "a", {
					get: function() {
						return k(this, "a", {
							value: 7
						}).a
					}
				})).a
			})) ? function(e, t, n) {
				var c = T(U, t);
				c && delete U[t], k(e, t, n), c && e !== U && k(U, t, c)
			} : k,
			G = function(e) {
				var t = R[e] = w(E.prototype);
				return t._k = e, t
			},
			K = W && "symbol" == typeof E.iterator ? function(e) {
				return "symbol" == typeof e
			} : function(e) {
				return e instanceof E
			},
			Q = function(e, t, n) {
				return e === U && Q(I, t, n), y(e), t = H(t, !0), y(n), r(R, t) ? (n.enumerable ? (r(e, A) && e[A][t] && (e[A][t] = !1), n = w(n, {
					enumerable: V(0, !1)
				})) : (r(e, A) || k(e, A, V(1, {})), e[A][t] = !0), q(e, t, n)) : k(e, t, n)
			},
			$ = function(e, t) {
				y(e);
				for (var n, c = m(t = b(t)), r = 0, a = c.length; a > r;) Q(e, n = c[r++], t[n]);
				return e
			},
			Z = function(e) {
				var t = D.call(this, e = H(e, !0));
				return !(this === U && r(R, e) && !r(I, e)) && (!(t || !r(this, e) || !r(R, e) || r(this, A) && this[A][e]) || t)
			},
			X = function(e, t) {
				if (e = b(e), t = H(t, !0), e !== U || !r(R, t) || r(I, t)) {
					var n = T(e, t);
					return !n || !r(R, t) || r(e, A) && e[A][t] || (n.enumerable = !0), n
				}
			},
			J = function(e) {
				for (var t, n = x(b(e)), c = [], a = 0; n.length > a;) r(R, t = n[a++]) || t == A || t == i || c.push(t);
				return c
			},
			ee = function(e) {
				for (var t, n = e === U, c = x(n ? I : b(e)), a = [], o = 0; c.length > o;) !r(R, t = c[o++]) || n && !r(U, t) || a.push(R[t]);
				return a
			};
		W || (l((E = function() {
			if (this instanceof E) throw TypeError("Symbol is not a constructor!");
			var e = f(arguments.length > 0 ? arguments[0] : void 0),
				t = function t(n) {
					this === U && t.call(I, n), r(this, A) && r(this[A], e) && (this[A][e] = !1), q(this, e, V(1, n))
				};
			return a && B && q(U, e, {
				configurable: !0,
				set: t
			}), G(e)
		}).prototype, "toString", (function() {
			return this._k
		})), C.f = X, S.f = Q, n(97).f = _.f = J, n(45).f = Z, O.f = ee, a && !n(43) && l(U, "propertyIsEnumerable", Z, !0), d.f = function(e) {
			return G(v(e))
		}), o(o.G + o.W + o.F * !W, {
			Symbol: E
		});
		for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) v(te[ne++]);
		for (var ce = L(v.store), re = 0; ce.length > re;) p(ce[re++]);
		o(o.S + o.F * !W, "Symbol", {
			for: function(e) {
				return r(N, e += "") ? N[e] : N[e] = E(e)
			},
			keyFor: function(e) {
				if (!K(e)) throw TypeError(e + " is not a symbol!");
				for (var t in N)
					if (N[t] === e) return t
			},
			useSetter: function() {
				B = !0
			},
			useSimple: function() {
				B = !1
			}
		}), o(o.S + o.F * !W, "Object", {
			create: function(e, t) {
				return void 0 === t ? w(e) : $(w(e), t)
			},
			defineProperty: Q,
			defineProperties: $,
			getOwnPropertyDescriptor: X,
			getOwnPropertyNames: J,
			getOwnPropertySymbols: ee
		});
		var ae = u((function() {
			O.f(1)
		}));
		o(o.S + o.F * ae, "Object", {
			getOwnPropertySymbols: function(e) {
				return O.f(M(e))
			}
		}), P && o(o.S + o.F * (!W || u((function() {
			var e = E();
			return "[null]" != F([e]) || "{}" != F({
				a: e
			}) || "{}" != F(Object(e))
		}))), "JSON", {
			stringify: function(e) {
				for (var t, n, c = [e], r = 1; arguments.length > r;) c.push(arguments[r++]);
				if (n = t = c[1], (g(t) || void 0 !== e) && !K(e)) return z(t) || (t = function(e, t) {
					if ("function" == typeof n && (t = n.call(this, e, t)), !K(t)) return t
				}), c[1] = t, F.apply(P, c)
			}
		}), E.prototype[j] || n(27)(E.prototype, j, E.prototype.valueOf), h(E, "Symbol"), h(Math, "Math", !0), h(c.JSON, "JSON", !0)
	}, function(e, t, n) {
		var c = n(44)("meta"),
			r = n(28),
			a = n(23),
			o = n(22).f,
			l = 0,
			i = Object.isExtensible || function() {
				return !0
			},
			u = !n(35)((function() {
				return i(Object.preventExtensions({}))
			})),
			s = function(e) {
				o(e, c, {
					value: {
						i: "O" + ++l,
						w: {}
					}
				})
			},
			h = e.exports = {
				KEY: c,
				NEED: !1,
				fastKey: function(e, t) {
					if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
					if (!a(e, c)) {
						if (!i(e)) return "F";
						if (!t) return "E";
						s(e)
					}
					return e[c].i
				},
				getWeak: function(e, t) {
					if (!a(e, c)) {
						if (!i(e)) return !0;
						if (!t) return !1;
						s(e)
					}
					return e[c].w
				},
				onFreeze: function(e) {
					return u && h.NEED && i(e) && !a(e, c) && s(e), e
				}
			}
	}, function(e, t, n) {
		var c = n(42),
			r = n(58),
			a = n(45);
		e.exports = function(e) {
			var t = c(e),
				n = r.f;
			if (n)
				for (var o, l = n(e), i = a.f, u = 0; l.length > u;) i.call(e, o = l[u++]) && t.push(o);
			return t
		}
	}, function(e, t, n) {
		var c = n(92);
		e.exports = Array.isArray || function(e) {
			return "Array" == c(e)
		}
	}, function(e, t, n) {
		var c = n(29),
			r = n(97).f,
			a = {}.toString,
			o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
		e.exports.f = function(e) {
			return o && "[object Window]" == a.call(e) ? function(e) {
				try {
					return r(e)
				} catch (t) {
					return o.slice()
				}
			}(e) : r(c(e))
		}
	}, function(e, t) {}, function(e, t, n) {
		n(64)("asyncIterator")
	}, function(e, t, n) {
		n(64)("observable")
	}, function(e, t, n) {
		e.exports = {
			default: n(203),
			__esModule: !0
		}
	}, function(e, t, n) {
		n(204), e.exports = n(17).Object.setPrototypeOf
	}, function(e, t, n) {
		var c = n(26);
		c(c.S, "Object", {
			setPrototypeOf: n(205).set
		})
	}, function(e, t, n) {
		var c = n(28),
			r = n(34),
			a = function(e, t) {
				if (r(e), !c(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
			};
		e.exports = {
			set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, c) {
				try {
					(c = n(87)(Function.call, n(98).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
				} catch (r) {
					t = !0
				}
				return function(e, n) {
					return a(e, n), t ? e.__proto__ = n : c(e, n), e
				}
			}({}, !1) : void 0),
			check: a
		}
	}, function(e, t, n) {
		e.exports = {
			default: n(207),
			__esModule: !0
		}
	}, function(e, t, n) {
		n(208);
		var c = n(17).Object;
		e.exports = function(e, t) {
			return c.create(e, t)
		}
	}, function(e, t, n) {
		var c = n(26);
		c(c.S, "Object", {
			create: n(61)
		})
	}, function(e, t, n) {
		(function(t) {
			(function() {
				var n, c, r, a, o, l;
				"undefined" !== typeof performance && null !== performance && performance.now ? e.exports = function() {
					return performance.now()
				} : "undefined" !== typeof t && null !== t && t.hrtime ? (e.exports = function() {
					return (n() - o) / 1e6
				}, c = t.hrtime, a = (n = function() {
					var e;
					return 1e9 * (e = c())[0] + e[1]
				})(), l = 1e9 * t.uptime(), o = a - l) : Date.now ? (e.exports = function() {
					return Date.now() - r
				}, r = Date.now()) : (e.exports = function() {
					return (new Date).getTime() - r
				}, r = (new Date).getTime())
			}).call(this)
		}).call(this, n(51))
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var c = v(n(3)),
			r = v(n(2)),
			a = v(n(5)),
			o = v(n(6)),
			l = v(n(7)),
			i = v(n(8)),
			u = v(n(0)),
			s = v(n(1)),
			h = v(n(4)),
			f = n(36);

		function v(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var d = function(e) {
			function t() {
				return (0, a.default)(this, t), (0, l.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return (0, i.default)(t, e), (0, o.default)(t, [{
				key: "getTabPanes",
				value: function() {
					var e = this.props,
						t = e.activeKey,
						n = e.children,
						c = [];
					return u.default.Children.forEach(n, (function(n) {
						if (n) {
							var r = n.key,
								a = t === r;
							c.push(u.default.cloneElement(n, {
								active: a,
								destroyInactiveTabPane: e.destroyInactiveTabPane,
								rootPrefixCls: e.prefixCls
							}))
						}
					})), c
				}
			}, {
				key: "render",
				value: function() {
					var e, t = this.props,
						n = t.prefixCls,
						a = t.children,
						o = t.activeKey,
						l = t.className,
						i = t.tabBarPosition,
						s = t.animated,
						v = t.animatedWithMargin,
						d = t.direction,
						p = t.style,
						m = (0, h.default)((e = {}, (0, r.default)(e, n + "-content", !0), (0, r.default)(e, s ? n + "-content-animated" : n + "-content-no-animated", !0), e), l);
					if (s) {
						var z = (0, f.getActiveIndex)(a, o);
						if (-1 !== z) {
							var y = v ? (0, f.getMarginStyle)(z, i) : (0, f.getTransformPropValue)((0, f.getTransformByIndex)(z, i, d));
							p = (0, c.default)({}, p, y)
						} else p = (0, c.default)({}, p, {
							display: "none"
						})
					}
					return u.default.createElement("div", {
						className: m,
						style: p
					}, this.getTabPanes())
				}
			}]), t
		}(u.default.Component);
		t.default = d, d.propTypes = {
			animated: s.default.bool,
			animatedWithMargin: s.default.bool,
			prefixCls: s.default.string,
			children: s.default.node,
			activeKey: s.default.string,
			style: s.default.any,
			tabBarPosition: s.default.string,
			className: s.default.string,
			destroyInactiveTabPane: s.default.bool,
			direction: s.default.string
		}, d.defaultProps = {
			animated: !0
		}, e.exports = t.default
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = void 0;
		var c = function(e) {
				if (e && e.__esModule) return e;
				if (null === e || "object" !== h(e) && "function" !== typeof e) return {
					default: e
				};
				var t = i();
				if (t && t.has(e)) return t.get(e);
				var n = {},
					c = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var r in e)
					if (Object.prototype.hasOwnProperty.call(e, r)) {
						var a = c ? Object.getOwnPropertyDescriptor(e, r) : null;
						a && (a.get || a.set) ? Object.defineProperty(n, r, a) : n[r] = e[r]
					}
				n.default = e, t && t.set(e, n);
				return n
			}(n(0)),
			r = l(n(212)),
			a = l(n(4)),
			o = l(n(65));

		function l(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function i() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return i = function() {
				return e
			}, e
		}

		function u() {
			return (u = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
				}
				return e
			}).apply(this, arguments)
		}

		function s(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function h(e) {
			return (h = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function f(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function v(e, t) {
			for (var n = 0; n < t.length; n++) {
				var c = t[n];
				c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(e, c.key, c)
			}
		}

		function d(e, t) {
			return !t || "object" !== h(t) && "function" !== typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function p(e) {
			return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function m(e, t) {
			return (m = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}
		var z = function(e) {
			function t() {
				return f(this, t), d(this, p(t).apply(this, arguments))
			}
			var n, l, i;
			return function(e, t) {
				if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && m(e, t)
			}(t, e), n = t, (l = [{
				key: "render",
				value: function() {
					var e, t, n = this.props,
						l = n.tabBarStyle,
						i = n.animated,
						f = n.renderTabBar,
						v = n.tabBarExtraContent,
						d = n.tabPosition,
						p = n.prefixCls,
						m = n.className,
						z = n.size,
						y = n.type,
						g = "object" === h(i) ? i.inkBar : i,
						M = "left" === d || "right" === d,
						b = M ? "up" : "left",
						H = M ? "down" : "right",
						V = c.createElement("span", {
							className: "".concat(p, "-tab-prev-icon")
						}, c.createElement(o.default, {
							type: b,
							className: "".concat(p, "-tab-prev-icon-target")
						})),
						w = c.createElement("span", {
							className: "".concat(p, "-tab-next-icon")
						}, c.createElement(o.default, {
							type: H,
							className: "".concat(p, "-tab-next-icon-target")
						})),
						_ = (0, a.default)("".concat(p, "-").concat(d, "-bar"), (s(e = {}, "".concat(p, "-").concat(z, "-bar"), !!z), s(e, "".concat(p, "-card-bar"), y && y.indexOf("card") >= 0), e), m),
						C = u(u({}, this.props), {
							children: null,
							inkBarAnimated: g,
							extraContent: v,
							style: l,
							prevIcon: V,
							nextIcon: w,
							className: _
						});
					return t = f ? f(C, r.default) : c.createElement(r.default, C), c.cloneElement(t)
				}
			}]) && v(n.prototype, l), i && v(n, i), t
		}(c.Component);
		t.default = z, z.defaultProps = {
			animated: !0,
			type: "line"
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var c = m(n(3)),
			r = m(n(19)),
			a = m(n(5)),
			o = m(n(6)),
			l = m(n(7)),
			i = m(n(8)),
			u = m(n(0)),
			s = m(n(1)),
			h = m(n(213)),
			f = m(n(214)),
			v = m(n(215)),
			d = m(n(216)),
			p = m(n(227));

		function m(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var z = function(e) {
			function t() {
				return (0, a.default)(this, t), (0, l.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return (0, i.default)(t, e), (0, o.default)(t, [{
				key: "render",
				value: function() {
					var e = this.props,
						t = e.children,
						n = (0, r.default)(e, ["children"]);
					return u.default.createElement(p.default, null, (function(e, r) {
						return u.default.createElement(v.default, (0, c.default)({
							saveRef: e
						}, n), u.default.createElement(d.default, (0, c.default)({
							saveRef: e,
							getRef: r
						}, n), u.default.createElement(f.default, (0, c.default)({
							saveRef: e,
							renderTabBarNode: t
						}, n)), u.default.createElement(h.default, (0, c.default)({
							saveRef: e,
							getRef: r
						}, n))))
					}))
				}
			}]), t
		}(u.default.Component);
		t.default = z, z.propTypes = {
			children: s.default.func
		}, e.exports = t.default
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var c = f(n(2)),
			r = f(n(5)),
			a = f(n(6)),
			o = f(n(7)),
			l = f(n(8)),
			i = f(n(0)),
			u = f(n(1)),
			s = f(n(4)),
			h = n(36);

		function f(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function v(e, t) {
			var n = e.props,
				c = n.styles,
				r = n.panels,
				a = n.activeKey,
				o = n.direction,
				l = e.props.getRef("root"),
				i = e.props.getRef("nav") || l,
				u = e.props.getRef("inkBar"),
				s = e.props.getRef("activeTab"),
				f = u.style,
				v = e.props.tabBarPosition,
				d = (0, h.getActiveIndex)(r, a);
			if (t && (f.display = "none"), s) {
				var p = s,
					m = (0, h.isTransform3dSupported)(f);
				if ((0, h.setTransform)(f, ""), f.width = "", f.height = "", f.left = "", f.top = "", f.bottom = "", f.right = "", "top" === v || "bottom" === v) {
					var z = (0, h.getLeft)(p, i),
						y = p.offsetWidth;
					y === l.offsetWidth ? y = 0 : c.inkBar && void 0 !== c.inkBar.width && (y = parseFloat(c.inkBar.width, 10)) && (z += (p.offsetWidth - y) / 2), "rtl" === o && (z = (0, h.getStyle)(p, "margin-left") - z), m ? (0, h.setTransform)(f, "translate3d(" + z + "px,0,0)") : f.left = z + "px", f.width = y + "px"
				} else {
					var g = (0, h.getTop)(p, i, !0),
						M = p.offsetHeight;
					c.inkBar && void 0 !== c.inkBar.height && (M = parseFloat(c.inkBar.height, 10)) && (g += (p.offsetHeight - M) / 2), m ? ((0, h.setTransform)(f, "translate3d(0," + g + "px,0)"), f.top = "0") : f.top = g + "px", f.height = M + "px"
				}
			}
			f.display = -1 !== d ? "block" : "none"
		}
		var d = function(e) {
			function t() {
				return (0, r.default)(this, t), (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return (0, l.default)(t, e), (0, a.default)(t, [{
				key: "componentDidMount",
				value: function() {
					var e = this;
					this.timeout = setTimeout((function() {
						v(e, !0)
					}), 0)
				}
			}, {
				key: "componentDidUpdate",
				value: function() {
					v(this)
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					clearTimeout(this.timeout)
				}
			}, {
				key: "render",
				value: function() {
					var e, t = this.props,
						n = t.prefixCls,
						r = t.styles,
						a = t.inkBarAnimated,
						o = n + "-ink-bar",
						l = (0, s.default)((e = {}, (0, c.default)(e, o, !0), (0, c.default)(e, a ? o + "-animated" : o + "-no-animated", !0), e));
					return i.default.createElement("div", {
						style: r.inkBar,
						className: l,
						key: "inkBar",
						ref: this.props.saveRef("inkBar")
					})
				}
			}]), t
		}(i.default.Component);
		t.default = d, d.propTypes = {
			prefixCls: u.default.string,
			styles: u.default.object,
			inkBarAnimated: u.default.bool,
			saveRef: u.default.func,
			direction: u.default.string
		}, d.defaultProps = {
			prefixCls: "",
			inkBarAnimated: !0,
			styles: {},
			saveRef: function() {}
		}, e.exports = t.default
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var c = v(n(3)),
			r = v(n(2)),
			a = v(n(5)),
			o = v(n(6)),
			l = v(n(7)),
			i = v(n(8)),
			u = v(n(0)),
			s = v(n(74)),
			h = v(n(1)),
			f = n(36);

		function v(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var d = function(e) {
			function t() {
				return (0, a.default)(this, t), (0, l.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return (0, i.default)(t, e), (0, o.default)(t, [{
				key: "render",
				value: function() {
					var e = this,
						t = this.props,
						n = t.panels,
						a = t.activeKey,
						o = t.prefixCls,
						l = t.tabBarGutter,
						i = t.saveRef,
						h = t.tabBarPosition,
						v = t.renderTabBarNode,
						d = t.direction,
						p = [];
					return u.default.Children.forEach(n, (function(t, m) {
						if (t) {
							var z = t.key,
								y = a === z ? o + "-tab-active" : "";
							y += " " + o + "-tab";
							var g = {};
							t.props.disabled ? y += " " + o + "-tab-disabled" : g = {
								onClick: e.props.onTabClick.bind(e, z)
							};
							var M = {};
							a === z && (M.ref = i("activeTab"));
							var b = l && m === n.length - 1 ? 0 : l,
								H = "rtl" === d ? "marginLeft" : "marginRight",
								V = (0, r.default)({}, (0, f.isVertical)(h) ? "marginBottom" : H, b);
							(0, s.default)("tab" in t.props, "There must be `tab` property on children of Tabs.");
							var w = u.default.createElement("div", (0, c.default)({
								role: "tab",
								"aria-disabled": t.props.disabled ? "true" : "false",
								"aria-selected": a === z ? "true" : "false"
							}, g, {
								className: y,
								key: z,
								style: V
							}, M), t.props.tab);
							v && (w = v(w)), p.push(w)
						}
					})), u.default.createElement("div", {
						ref: i("navTabsContainer")
					}, p)
				}
			}]), t
		}(u.default.Component);
		t.default = d, d.propTypes = {
			activeKey: h.default.string,
			panels: h.default.node,
			prefixCls: h.default.string,
			tabBarGutter: h.default.number,
			onTabClick: h.default.func,
			saveRef: h.default.func,
			renderTabBarNode: h.default.func,
			tabBarPosition: h.default.string,
			direction: h.default.string
		}, d.defaultProps = {
			panels: [],
			prefixCls: [],
			tabBarGutter: null,
			onTabClick: function() {},
			saveRef: function() {}
		}, e.exports = t.default
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var c = p(n(3)),
			r = p(n(2)),
			a = p(n(19)),
			o = p(n(5)),
			l = p(n(6)),
			i = p(n(7)),
			u = p(n(8)),
			s = n(0),
			h = p(s),
			f = p(n(1)),
			v = p(n(4)),
			d = n(36);

		function p(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var m = function(e) {
			function t() {
				return (0, o.default)(this, t), (0, i.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return (0, u.default)(t, e), (0, l.default)(t, [{
				key: "render",
				value: function() {
					var e = this.props,
						t = e.prefixCls,
						n = e.onKeyDown,
						o = e.className,
						l = e.extraContent,
						i = e.style,
						u = e.tabBarPosition,
						f = e.children,
						p = (0, a.default)(e, ["prefixCls", "onKeyDown", "className", "extraContent", "style", "tabBarPosition", "children"]),
						m = (0, v.default)(t + "-bar", (0, r.default)({}, o, !!o)),
						z = "top" === u || "bottom" === u,
						y = z ? {
							float: "right"
						} : {},
						g = l && l.props ? l.props.style : {},
						M = f;
					return l && (M = [(0, s.cloneElement)(l, {
						key: "extra",
						style: (0, c.default)({}, y, g)
					}), (0, s.cloneElement)(f, {
						key: "content"
					})], M = z ? M : M.reverse()), h.default.createElement("div", (0, c.default)({
						role: "tablist",
						className: m,
						tabIndex: "0",
						ref: this.props.saveRef("root"),
						onKeyDown: n,
						style: i
					}, (0, d.getDataAttr)(p)), M)
				}
			}]), t
		}(h.default.Component);
		t.default = m, m.propTypes = {
			prefixCls: f.default.string,
			className: f.default.string,
			style: f.default.object,
			tabBarPosition: f.default.oneOf(["left", "right", "top", "bottom"]),
			children: f.default.node,
			extraContent: f.default.node,
			onKeyDown: f.default.func,
			saveRef: f.default.func
		}, m.defaultProps = {
			prefixCls: "",
			className: "",
			style: {},
			tabBarPosition: "top",
			extraContent: null,
			children: null,
			onKeyDown: function() {},
			saveRef: function() {}
		}, e.exports = t.default
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var c = d(n(2)),
			r = d(n(5)),
			a = d(n(6)),
			o = d(n(7)),
			l = d(n(8)),
			i = d(n(0)),
			u = d(n(1)),
			s = d(n(4)),
			h = d(n(217)),
			f = d(n(226)),
			v = n(36);

		function d(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var p = function(e) {
			function t(e) {
				(0, r.default)(this, t);
				var n = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.prevTransitionEnd = function(e) {
					if ("opacity" === e.propertyName) {
						var t = n.props.getRef("container");
						n.scrollToActiveTab({
							target: t,
							currentTarget: t
						})
					}
				}, n.scrollToActiveTab = function(e) {
					var t = n.props.getRef("activeTab"),
						c = n.props.getRef("navWrap");
					if ((!e || e.target === e.currentTarget) && t) {
						var r = n.isNextPrevShown() && n.lastNextPrevShown;
						if (n.lastNextPrevShown = n.isNextPrevShown(), r) {
							var a = n.getScrollWH(t),
								o = n.getOffsetWH(c),
								l = n.offset,
								i = n.getOffsetLT(c),
								u = n.getOffsetLT(t);
							i > u ? (l += i - u, n.setOffset(l)) : i + o < u + a && (l -= u + a - (i + o), n.setOffset(l))
						}
					}
				}, n.prev = function(e) {
					n.props.onPrevClick(e);
					var t = n.props.getRef("navWrap"),
						c = n.getOffsetWH(t),
						r = n.offset;
					n.setOffset(r + c)
				}, n.next = function(e) {
					n.props.onNextClick(e);
					var t = n.props.getRef("navWrap"),
						c = n.getOffsetWH(t),
						r = n.offset;
					n.setOffset(r - c)
				}, n.offset = 0, n.state = {
					next: !1,
					prev: !1
				}, n
			}
			return (0, l.default)(t, e), (0, a.default)(t, [{
				key: "componentDidMount",
				value: function() {
					var e = this;
					this.componentDidUpdate(), this.debouncedResize = (0, h.default)((function() {
						e.setNextPrev(), e.scrollToActiveTab()
					}), 200), this.resizeObserver = new f.default(this.debouncedResize), this.resizeObserver.observe(this.props.getRef("container"))
				}
			}, {
				key: "componentDidUpdate",
				value: function(e) {
					var t = this.props;
					if (e && e.tabBarPosition !== t.tabBarPosition) this.setOffset(0);
					else {
						var n = this.setNextPrev();
						this.isNextPrevShown(this.state) !== this.isNextPrevShown(n) ? this.setState({}, this.scrollToActiveTab) : e && t.activeKey === e.activeKey || this.scrollToActiveTab()
					}
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.resizeObserver && this.resizeObserver.disconnect(), this.debouncedResize && this.debouncedResize.cancel && this.debouncedResize.cancel()
				}
			}, {
				key: "setNextPrev",
				value: function() {
					var e = this.props.getRef("nav"),
						t = this.props.getRef("navTabsContainer"),
						n = this.getScrollWH(t || e),
						c = this.getOffsetWH(this.props.getRef("container")) + 1,
						r = this.getOffsetWH(this.props.getRef("navWrap")),
						a = this.offset,
						o = c - n,
						l = this.state,
						i = l.next,
						u = l.prev;
					if (o >= 0) i = !1, this.setOffset(0, !1), a = 0;
					else if (o < a) i = !0;
					else {
						i = !1;
						var s = r - n;
						this.setOffset(s, !1), a = s
					}
					return u = a < 0, this.setNext(i), this.setPrev(u), {
						next: i,
						prev: u
					}
				}
			}, {
				key: "getOffsetWH",
				value: function(e) {
					var t = this.props.tabBarPosition,
						n = "offsetWidth";
					return "left" !== t && "right" !== t || (n = "offsetHeight"), e[n]
				}
			}, {
				key: "getScrollWH",
				value: function(e) {
					var t = this.props.tabBarPosition,
						n = "scrollWidth";
					return "left" !== t && "right" !== t || (n = "scrollHeight"), e[n]
				}
			}, {
				key: "getOffsetLT",
				value: function(e) {
					var t = this.props.tabBarPosition,
						n = "left";
					return "left" !== t && "right" !== t || (n = "top"), e.getBoundingClientRect()[n]
				}
			}, {
				key: "setOffset",
				value: function(e) {
					var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
						n = Math.min(0, e);
					if (this.offset !== n) {
						this.offset = n;
						var c = {},
							r = this.props.tabBarPosition,
							a = this.props.getRef("nav").style,
							o = (0, v.isTransform3dSupported)(a);
						"left" === r || "right" === r ? c = o ? {
							value: "translate3d(0," + n + "px,0)"
						} : {
							name: "top",
							value: n + "px"
						} : o ? ("rtl" === this.props.direction && (n = -n), c = {
							value: "translate3d(" + n + "px,0,0)"
						}) : c = {
							name: "left",
							value: n + "px"
						}, o ? (0, v.setTransform)(a, c.value) : a[c.name] = c.value, t && this.setNextPrev()
					}
				}
			}, {
				key: "setPrev",
				value: function(e) {
					this.state.prev !== e && this.setState({
						prev: e
					})
				}
			}, {
				key: "setNext",
				value: function(e) {
					this.state.next !== e && this.setState({
						next: e
					})
				}
			}, {
				key: "isNextPrevShown",
				value: function(e) {
					return e ? e.next || e.prev : this.state.next || this.state.prev
				}
			}, {
				key: "render",
				value: function() {
					var e, t, n, r, a = this.state,
						o = a.next,
						l = a.prev,
						u = this.props,
						h = u.prefixCls,
						f = u.scrollAnimated,
						v = u.navWrapper,
						d = u.prevIcon,
						p = u.nextIcon,
						m = l || o,
						z = i.default.createElement("span", {
							onClick: l ? this.prev : null,
							unselectable: "unselectable",
							className: (0, s.default)((e = {}, (0, c.default)(e, h + "-tab-prev", 1), (0, c.default)(e, h + "-tab-btn-disabled", !l), (0, c.default)(e, h + "-tab-arrow-show", m), e)),
							onTransitionEnd: this.prevTransitionEnd
						}, d || i.default.createElement("span", {
							className: h + "-tab-prev-icon"
						})),
						y = i.default.createElement("span", {
							onClick: o ? this.next : null,
							unselectable: "unselectable",
							className: (0, s.default)((t = {}, (0, c.default)(t, h + "-tab-next", 1), (0, c.default)(t, h + "-tab-btn-disabled", !o), (0, c.default)(t, h + "-tab-arrow-show", m), t))
						}, p || i.default.createElement("span", {
							className: h + "-tab-next-icon"
						})),
						g = h + "-nav",
						M = (0, s.default)((n = {}, (0, c.default)(n, g, !0), (0, c.default)(n, f ? g + "-animated" : g + "-no-animated", !0), n));
					return i.default.createElement("div", {
						className: (0, s.default)((r = {}, (0, c.default)(r, h + "-nav-container", 1), (0, c.default)(r, h + "-nav-container-scrolling", m), r)),
						key: "container",
						ref: this.props.saveRef("container")
					}, z, y, i.default.createElement("div", {
						className: h + "-nav-wrap",
						ref: this.props.saveRef("navWrap")
					}, i.default.createElement("div", {
						className: h + "-nav-scroll"
					}, i.default.createElement("div", {
						className: M,
						ref: this.props.saveRef("nav")
					}, v(this.props.children)))))
				}
			}]), t
		}(i.default.Component);
		t.default = p, p.propTypes = {
			activeKey: u.default.string,
			getRef: u.default.func.isRequired,
			saveRef: u.default.func.isRequired,
			tabBarPosition: u.default.oneOf(["left", "right", "top", "bottom"]),
			prefixCls: u.default.string,
			scrollAnimated: u.default.bool,
			onPrevClick: u.default.func,
			onNextClick: u.default.func,
			navWrapper: u.default.func,
			children: u.default.node,
			prevIcon: u.default.node,
			nextIcon: u.default.node,
			direction: u.default.node
		}, p.defaultProps = {
			tabBarPosition: "left",
			prefixCls: "",
			scrollAnimated: !0,
			onPrevClick: function() {},
			onNextClick: function() {},
			navWrapper: function(e) {
				return e
			}
		}, e.exports = t.default
	}, function(e, t, n) {
		var c = n(99),
			r = n(218),
			a = n(220),
			o = Math.max,
			l = Math.min;
		e.exports = function(e, t, n) {
			var i, u, s, h, f, v, d = 0,
				p = !1,
				m = !1,
				z = !0;
			if ("function" != typeof e) throw new TypeError("Expected a function");

			function y(t) {
				var n = i,
					c = u;
				return i = u = void 0, d = t, h = e.apply(c, n)
			}

			function g(e) {
				return d = e, f = setTimeout(b, t), p ? y(e) : h
			}

			function M(e) {
				var n = e - v;
				return void 0 === v || n >= t || n < 0 || m && e - d >= s
			}

			function b() {
				var e = r();
				if (M(e)) return H(e);
				f = setTimeout(b, function(e) {
					var n = t - (e - v);
					return m ? l(n, s - (e - d)) : n
				}(e))
			}

			function H(e) {
				return f = void 0, z && i ? y(e) : (i = u = void 0, h)
			}

			function V() {
				var e = r(),
					n = M(e);
				if (i = arguments, u = this, v = e, n) {
					if (void 0 === f) return g(v);
					if (m) return clearTimeout(f), f = setTimeout(b, t), y(v)
				}
				return void 0 === f && (f = setTimeout(b, t)), h
			}
			return t = a(t) || 0, c(n) && (p = !!n.leading, s = (m = "maxWait" in n) ? o(a(n.maxWait) || 0, t) : s, z = "trailing" in n ? !!n.trailing : z), V.cancel = function() {
				void 0 !== f && clearTimeout(f), d = 0, i = v = u = f = void 0
			}, V.flush = function() {
				return void 0 === f ? h : H(r())
			}, V
		}
	}, function(e, t, n) {
		var c = n(100);
		e.exports = function() {
			return c.Date.now()
		}
	}, function(e, t, n) {
		(function(t) {
			var n = "object" == typeof t && t && t.Object === Object && t;
			e.exports = n
		}).call(this, n(40))
	}, function(e, t, n) {
		var c = n(99),
			r = n(221),
			a = /^\s+|\s+$/g,
			o = /^[-+]0x[0-9a-f]+$/i,
			l = /^0b[01]+$/i,
			i = /^0o[0-7]+$/i,
			u = parseInt;
		e.exports = function(e) {
			if ("number" == typeof e) return e;
			if (r(e)) return NaN;
			if (c(e)) {
				var t = "function" == typeof e.valueOf ? e.valueOf() : e;
				e = c(t) ? t + "" : t
			}
			if ("string" != typeof e) return 0 === e ? e : +e;
			e = e.replace(a, "");
			var n = l.test(e);
			return n || i.test(e) ? u(e.slice(2), n ? 2 : 8) : o.test(e) ? NaN : +e
		}
	}, function(e, t, n) {
		var c = n(222),
			r = n(225);
		e.exports = function(e) {
			return "symbol" == typeof e || r(e) && "[object Symbol]" == c(e)
		}
	}, function(e, t, n) {
		var c = n(101),
			r = n(223),
			a = n(224),
			o = c ? c.toStringTag : void 0;
		e.exports = function(e) {
			return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? r(e) : a(e)
		}
	}, function(e, t, n) {
		var c = n(101),
			r = Object.prototype,
			a = r.hasOwnProperty,
			o = r.toString,
			l = c ? c.toStringTag : void 0;
		e.exports = function(e) {
			var t = a.call(e, l),
				n = e[l];
			try {
				e[l] = void 0;
				var c = !0
			} catch (i) {}
			var r = o.call(e);
			return c && (t ? e[l] = n : delete e[l]), r
		}
	}, function(e, t) {
		var n = Object.prototype.toString;
		e.exports = function(e) {
			return n.call(e)
		}
	}, function(e, t) {
		e.exports = function(e) {
			return null != e && "object" == typeof e
		}
	}, function(e, t, n) {
		"use strict";
		n.r(t),
			function(e) {
				var n = function() {
						if ("undefined" !== typeof Map) return Map;

						function e(e, t) {
							var n = -1;
							return e.some((function(e, c) {
								return e[0] === t && (n = c, !0)
							})), n
						}
						return function() {
							function t() {
								this.__entries__ = []
							}
							return Object.defineProperty(t.prototype, "size", {
								get: function() {
									return this.__entries__.length
								},
								enumerable: !0,
								configurable: !0
							}), t.prototype.get = function(t) {
								var n = e(this.__entries__, t),
									c = this.__entries__[n];
								return c && c[1]
							}, t.prototype.set = function(t, n) {
								var c = e(this.__entries__, t);
								~c ? this.__entries__[c][1] = n : this.__entries__.push([t, n])
							}, t.prototype.delete = function(t) {
								var n = this.__entries__,
									c = e(n, t);
								~c && n.splice(c, 1)
							}, t.prototype.has = function(t) {
								return !!~e(this.__entries__, t)
							}, t.prototype.clear = function() {
								this.__entries__.splice(0)
							}, t.prototype.forEach = function(e, t) {
								void 0 === t && (t = null);
								for (var n = 0, c = this.__entries__; n < c.length; n++) {
									var r = c[n];
									e.call(t, r[1], r[0])
								}
							}, t
						}()
					}(),
					c = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
					r = "undefined" !== typeof e && e.Math === Math ? e : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
					a = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(r) : function(e) {
						return setTimeout((function() {
							return e(Date.now())
						}), 1e3 / 60)
					};
				var o = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
					l = "undefined" !== typeof MutationObserver,
					i = function() {
						function e() {
							this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
								var n = !1,
									c = !1,
									r = 0;

								function o() {
									n && (n = !1, e()), c && i()
								}

								function l() {
									a(o)
								}

								function i() {
									var e = Date.now();
									if (n) {
										if (e - r < 2) return;
										c = !0
									} else n = !0, c = !1, setTimeout(l, t);
									r = e
								}
								return i
							}(this.refresh.bind(this), 20)
						}
						return e.prototype.addObserver = function(e) {
							~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
						}, e.prototype.removeObserver = function(e) {
							var t = this.observers_,
								n = t.indexOf(e);
							~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
						}, e.prototype.refresh = function() {
							this.updateObservers_() && this.refresh()
						}, e.prototype.updateObservers_ = function() {
							var e = this.observers_.filter((function(e) {
								return e.gatherActive(), e.hasActive()
							}));
							return e.forEach((function(e) {
								return e.broadcastActive()
							})), e.length > 0
						}, e.prototype.connect_ = function() {
							c && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), l ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
								attributes: !0,
								childList: !0,
								characterData: !0,
								subtree: !0
							})) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
						}, e.prototype.disconnect_ = function() {
							c && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
						}, e.prototype.onTransitionEnd_ = function(e) {
							var t = e.propertyName,
								n = void 0 === t ? "" : t;
							o.some((function(e) {
								return !!~n.indexOf(e)
							})) && this.refresh()
						}, e.getInstance = function() {
							return this.instance_ || (this.instance_ = new e), this.instance_
						}, e.instance_ = null, e
					}(),
					u = function(e, t) {
						for (var n = 0, c = Object.keys(t); n < c.length; n++) {
							var r = c[n];
							Object.defineProperty(e, r, {
								value: t[r],
								enumerable: !1,
								writable: !1,
								configurable: !0
							})
						}
						return e
					},
					s = function(e) {
						return e && e.ownerDocument && e.ownerDocument.defaultView || r
					},
					h = z(0, 0, 0, 0);

				function f(e) {
					return parseFloat(e) || 0
				}

				function v(e) {
					for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
					return t.reduce((function(t, n) {
						return t + f(e["border-" + n + "-width"])
					}), 0)
				}

				function d(e) {
					var t = e.clientWidth,
						n = e.clientHeight;
					if (!t && !n) return h;
					var c = s(e).getComputedStyle(e),
						r = function(e) {
							for (var t = {}, n = 0, c = ["top", "right", "bottom", "left"]; n < c.length; n++) {
								var r = c[n],
									a = e["padding-" + r];
								t[r] = f(a)
							}
							return t
						}(c),
						a = r.left + r.right,
						o = r.top + r.bottom,
						l = f(c.width),
						i = f(c.height);
					if ("border-box" === c.boxSizing && (Math.round(l + a) !== t && (l -= v(c, "left", "right") + a), Math.round(i + o) !== n && (i -= v(c, "top", "bottom") + o)), ! function(e) {
							return e === s(e).document.documentElement
						}(e)) {
						var u = Math.round(l + a) - t,
							d = Math.round(i + o) - n;
						1 !== Math.abs(u) && (l -= u), 1 !== Math.abs(d) && (i -= d)
					}
					return z(r.left, r.top, l, i)
				}
				var p = "undefined" !== typeof SVGGraphicsElement ? function(e) {
					return e instanceof s(e).SVGGraphicsElement
				} : function(e) {
					return e instanceof s(e).SVGElement && "function" === typeof e.getBBox
				};

				function m(e) {
					return c ? p(e) ? function(e) {
						var t = e.getBBox();
						return z(0, 0, t.width, t.height)
					}(e) : d(e) : h
				}

				function z(e, t, n, c) {
					return {
						x: e,
						y: t,
						width: n,
						height: c
					}
				}
				var y = function() {
						function e(e) {
							this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = z(0, 0, 0, 0), this.target = e
						}
						return e.prototype.isActive = function() {
							var e = m(this.target);
							return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
						}, e.prototype.broadcastRect = function() {
							var e = this.contentRect_;
							return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
						}, e
					}(),
					g = function(e, t) {
						var n = function(e) {
							var t = e.x,
								n = e.y,
								c = e.width,
								r = e.height,
								a = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
								o = Object.create(a.prototype);
							return u(o, {
								x: t,
								y: n,
								width: c,
								height: r,
								top: n,
								right: t + c,
								bottom: r + n,
								left: t
							}), o
						}(t);
						u(this, {
							target: e,
							contentRect: n
						})
					},
					M = function() {
						function e(e, t, c) {
							if (this.activeObservations_ = [], this.observations_ = new n, "function" !== typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
							this.callback_ = e, this.controller_ = t, this.callbackCtx_ = c
						}
						return e.prototype.observe = function(e) {
							if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
							if ("undefined" !== typeof Element && Element instanceof Object) {
								if (!(e instanceof s(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
								var t = this.observations_;
								t.has(e) || (t.set(e, new y(e)), this.controller_.addObserver(this), this.controller_.refresh())
							}
						}, e.prototype.unobserve = function(e) {
							if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
							if ("undefined" !== typeof Element && Element instanceof Object) {
								if (!(e instanceof s(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
								var t = this.observations_;
								t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
							}
						}, e.prototype.disconnect = function() {
							this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
						}, e.prototype.gatherActive = function() {
							var e = this;
							this.clearActive(), this.observations_.forEach((function(t) {
								t.isActive() && e.activeObservations_.push(t)
							}))
						}, e.prototype.broadcastActive = function() {
							if (this.hasActive()) {
								var e = this.callbackCtx_,
									t = this.activeObservations_.map((function(e) {
										return new g(e.target, e.broadcastRect())
									}));
								this.callback_.call(e, t, e), this.clearActive()
							}
						}, e.prototype.clearActive = function() {
							this.activeObservations_.splice(0)
						}, e.prototype.hasActive = function() {
							return this.activeObservations_.length > 0
						}, e
					}(),
					b = "undefined" !== typeof WeakMap ? new WeakMap : new n,
					H = function e(t) {
						if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
						if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
						var n = i.getInstance(),
							c = new M(t, n, this);
						b.set(this, c)
					};
				["observe", "unobserve", "disconnect"].forEach((function(e) {
					H.prototype[e] = function() {
						var t;
						return (t = b.get(this))[e].apply(t, arguments)
					}
				}));
				var V = "undefined" !== typeof r.ResizeObserver ? r.ResizeObserver : H;
				t.default = V
			}.call(this, n(40))
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var c = u(n(5)),
			r = u(n(6)),
			a = u(n(7)),
			o = u(n(8)),
			l = u(n(0)),
			i = u(n(1));

		function u(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var s = function(e) {
			function t() {
				var e, n, r, o;
				(0, c.default)(this, t);
				for (var l = arguments.length, i = Array(l), u = 0; u < l; u++) i[u] = arguments[u];
				return n = r = (0, a.default)(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), r.getRef = function(e) {
					return r[e]
				}, r.saveRef = function(e) {
					return function(t) {
						t && (r[e] = t)
					}
				}, o = n, (0, a.default)(r, o)
			}
			return (0, o.default)(t, e), (0, r.default)(t, [{
				key: "render",
				value: function() {
					return this.props.children(this.saveRef, this.getRef)
				}
			}]), t
		}(l.default.Component);
		t.default = s, s.propTypes = {
			children: i.default.func
		}, s.defaultProps = {
			children: function() {
				return null
			}
		}, e.exports = t.default
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var c = "0 0 1024 1024",
			r = "64 64 896 896",
			a = "fill",
			o = "outline",
			l = "twotone";

		function i(e) {
			for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
			return {
				tag: "svg",
				attrs: {
					viewBox: e,
					focusable: !1
				},
				children: t.map((function(e) {
					return Array.isArray(e) ? {
						tag: "path",
						attrs: {
							fill: e[0],
							d: e[1]
						}
					} : {
						tag: "path",
						attrs: {
							d: e
						}
					}
				}))
			}
		}

		function u(e, t, n) {
			return {
				name: e,
				theme: t,
				icon: n
			}
		}
		t.AccountBookFill = u("account-book", a, i(r, "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zM648.3 426.8l-87.7 161.1h45.7c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4v29.7h63.4c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4V752c0 5.5-4.5 10-10 10h-41.3c-5.5 0-10-4.5-10-10v-51.8h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h63.1v-29.7h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h45.2l-88-161.1c-2.6-4.8-.9-10.9 4-13.6 1.5-.8 3.1-1.2 4.8-1.2h46c3.8 0 7.2 2.1 8.9 5.5l72.9 144.3 73.2-144.3a10 10 0 0 1 8.9-5.5h45c5.5 0 10 4.5 10 10 .1 1.7-.3 3.3-1.1 4.8z")), t.AlertFill = u("alert", a, i(r, "M512 244c176.18 0 319 142.82 319 319v233a32 32 0 0 1-32 32H225a32 32 0 0 1-32-32V563c0-176.18 142.82-319 319-319zM484 68h56a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V76a8 8 0 0 1 8-8zM177.25 191.66a8 8 0 0 1 11.32 0l67.88 67.88a8 8 0 0 1 0 11.31l-39.6 39.6a8 8 0 0 1-11.31 0l-67.88-67.88a8 8 0 0 1 0-11.31l39.6-39.6zm669.6 0l39.6 39.6a8 8 0 0 1 0 11.3l-67.88 67.9a8 8 0 0 1-11.32 0l-39.6-39.6a8 8 0 0 1 0-11.32l67.89-67.88a8 8 0 0 1 11.31 0zM192 892h640a32 32 0 0 1 32 32v24a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-24a32 32 0 0 1 32-32zm148-317v253h64V575h-64z")), t.AlipaySquareFill = u("alipay-square", a, i(r, "M308.6 545.7c-19.8 2-57.1 10.7-77.4 28.6-61 53-24.5 150 99 150 71.8 0 143.5-45.7 199.8-119-80.2-38.9-148.1-66.8-221.4-59.6zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm29.4 663.2S703 689.4 598.7 639.5C528.8 725.2 438.6 777.3 345 777.3c-158.4 0-212.1-138.1-137.2-229 16.3-19.8 44.2-38.7 87.3-49.4 67.5-16.5 175 10.3 275.7 43.4 18.1-33.3 33.4-69.9 44.7-108.9H305.1V402h160v-56.2H271.3v-31.3h193.8v-80.1s0-13.5 13.7-13.5H557v93.6h191.7v31.3H557.1V402h156.4c-15 61.1-37.7 117.4-66.2 166.8 47.5 17.1 90.1 33.3 121.8 43.9 114.3 38.2 140.2 40.2 140.2 40.2v122.3z")), t.AliwangwangFill = u("aliwangwang", a, i(r, "M868.2 377.4c-18.9-45.1-46.3-85.6-81.2-120.6a377.26 377.26 0 0 0-120.5-81.2A375.65 375.65 0 0 0 519 145.8c-41.9 0-82.9 6.7-121.9 20C306 123.3 200.8 120 170.6 120c-2.2 0-7.4 0-9.4.2-11.9.4-22.8 6.5-29.2 16.4-6.5 9.9-7.7 22.4-3.4 33.5l64.3 161.6a378.59 378.59 0 0 0-52.8 193.2c0 51.4 10 101 29.8 147.6 18.9 45 46.2 85.6 81.2 120.5 34.7 34.8 75.4 62.1 120.5 81.2C418.3 894 467.9 904 519 904c51.3 0 100.9-10 147.7-29.8 44.9-18.9 85.5-46.3 120.4-81.2 34.7-34.8 62.1-75.4 81.2-120.6a376.5 376.5 0 0 0 29.8-147.6c-.2-51.2-10.1-100.8-29.9-147.4zm-325.2 79c0 20.4-16.6 37.1-37.1 37.1-20.4 0-37.1-16.7-37.1-37.1v-55.1c0-20.4 16.6-37.1 37.1-37.1 20.4 0 37.1 16.6 37.1 37.1v55.1zm175.2 0c0 20.4-16.6 37.1-37.1 37.1S644 476.8 644 456.4v-55.1c0-20.4 16.7-37.1 37.1-37.1 20.4 0 37.1 16.6 37.1 37.1v55.1z")), t.AlipayCircleFill = u("alipay-circle", a, i(r, "M308.6 545.7c-19.8 2-57.1 10.7-77.4 28.6-61 53-24.5 150 99 150 71.8 0 143.5-45.7 199.8-119-80.2-38.9-148.1-66.8-221.4-59.6zm460.5 67c100.1 33.4 154.7 43 166.7 44.8A445.9 445.9 0 0 0 960 512c0-247.4-200.6-448-448-448S64 264.6 64 512s200.6 448 448 448c155.9 0 293.2-79.7 373.5-200.5-75.6-29.8-213.6-85-286.8-120.1-69.9 85.7-160.1 137.8-253.7 137.8-158.4 0-212.1-138.1-137.2-229 16.3-19.8 44.2-38.7 87.3-49.4 67.5-16.5 175 10.3 275.7 43.4 18.1-33.3 33.4-69.9 44.7-108.9H305.1V402h160v-56.2H271.3v-31.3h193.8v-80.1s0-13.5 13.7-13.5H557v93.6h191.7v31.3H557.1V402h156.4c-15 61.1-37.7 117.4-66.2 166.8 47.5 17.1 90.1 33.3 121.8 43.9z")), t.AmazonCircleFill = u("amazon-circle", a, i(r, "M485 467.5c-11.6 4.9-20.9 12.2-27.8 22-6.9 9.8-10.4 21.6-10.4 35.5 0 17.8 7.5 31.5 22.4 41.2 14.1 9.1 28.9 11.4 44.4 6.8 17.9-5.2 30-17.9 36.4-38.1 3-9.3 4.5-19.7 4.5-31.3v-50.2c-12.6.4-24.4 1.6-35.5 3.7-11.1 2.1-22.4 5.6-34 10.4zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm35.8 262.7c-7.2-10.9-20.1-16.4-38.7-16.4-1.3 0-3 .1-5.3.3-2.2.2-6.6 1.5-12.9 3.7a79.4 79.4 0 0 0-17.9 9.1c-5.5 3.8-11.5 10-18 18.4-6.4 8.5-11.5 18.4-15.3 29.8l-94-8.4c0-12.4 2.4-24.7 7-36.9 4.7-12.2 11.8-23.9 21.4-35 9.6-11.2 21.1-21 34.5-29.4 13.4-8.5 29.6-15.2 48.4-20.3 18.9-5.1 39.1-7.6 60.9-7.6 21.3 0 40.6 2.6 57.8 7.7 17.2 5.2 31.1 11.5 41.4 19.1a117 117 0 0 1 25.9 25.7c6.9 9.6 11.7 18.5 14.4 26.7 2.7 8.2 4 15.7 4 22.8v182.5c0 6.4 1.4 13 4.3 19.8 2.9 6.8 6.3 12.8 10.2 18 3.9 5.2 7.9 9.9 12 14.3 4.1 4.3 7.6 7.7 10.6 9.9l4.1 3.4-72.5 69.4c-8.5-7.7-16.9-15.4-25.2-23.4-8.3-8-14.5-14-18.5-18.1l-6.1-6.2c-2.4-2.3-5-5.7-8-10.2-8.1 12.2-18.5 22.8-31.1 31.8-12.7 9-26.3 15.6-40.7 19.7-14.5 4.1-29.4 6.5-44.7 7.1-15.3.6-30-1.5-43.9-6.5-13.9-5-26.5-11.7-37.6-20.3-11.1-8.6-19.9-20.2-26.5-35-6.6-14.8-9.9-31.5-9.9-50.4 0-17.4 3-33.3 8.9-47.7 6-14.5 13.6-26.5 23-36.1 9.4-9.6 20.7-18.2 34-25.7s26.4-13.4 39.2-17.7c12.8-4.2 26.6-7.8 41.5-10.7 14.9-2.9 27.6-4.8 38.2-5.7 10.6-.9 21.2-1.6 31.8-2v-39.4c0-13.5-2.3-23.5-6.7-30.1zm180.5 379.6c-2.8 3.3-7.5 7.8-14.1 13.5s-16.8 12.7-30.5 21.1c-13.7 8.4-28.8 16-45 22.9-16.3 6.9-36.3 12.9-60.1 18-23.7 5.1-48.2 7.6-73.3 7.6-25.4 0-50.7-3.2-76.1-9.6-25.4-6.4-47.6-14.3-66.8-23.7-19.1-9.4-37.6-20.2-55.1-32.2-17.6-12.1-31.7-22.9-42.4-32.5-10.6-9.6-19.6-18.7-26.8-27.1-1.7-1.9-2.8-3.6-3.2-5.1-.4-1.5-.3-2.8.3-3.7.6-.9 1.5-1.6 2.6-2.2a7.42 7.42 0 0 1 7.4.8c40.9 24.2 72.9 41.3 95.9 51.4 82.9 36.4 168 45.7 255.3 27.9 40.5-8.3 82.1-22.2 124.9-41.8 3.2-1.2 6-1.5 8.3-.9 2.3.6 3.5 2.4 3.5 5.4 0 2.8-1.6 6.3-4.8 10.2zm59.9-29c-1.8 11.1-4.9 21.6-9.1 31.8-7.2 17.1-16.3 30-27.1 38.4-3.6 2.9-6.4 3.8-8.3 2.8-1.9-1-1.9-3.5 0-7.4 4.5-9.3 9.2-21.8 14.2-37.7 5-15.8 5.7-26 2.1-30.5-1.1-1.5-2.7-2.6-5-3.6-2.2-.9-5.1-1.5-8.6-1.9s-6.7-.6-9.4-.8c-2.8-.2-6.5-.2-11.2 0-4.7.2-8 .4-10.1.6a874.4 874.4 0 0 1-17.1 1.5c-1.3.2-2.7.4-4.1.5-1.5.1-2.7.2-3.5.3l-2.7.3c-1 .1-1.7.2-2.2.2h-3.2l-1-.2-.6-.5-.5-.9c-1.3-3.3 3.7-7.4 15-12.4s22.3-8.1 32.9-9.3c9.8-1.5 21.3-1.5 34.5-.3s21.3 3.7 24.3 7.4c2.3 3.5 2.5 10.7.7 21.7z")), t.AndroidFill = u("android", a, i(r, "M270.1 741.7c0 23.4 19.1 42.5 42.6 42.5h48.7v120.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V784.1h85v120.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V784.1h48.7c23.5 0 42.6-19.1 42.6-42.5V346.4h-486v395.3zm357.1-600.1l44.9-65c2.6-3.8 2-8.9-1.5-11.4-3.5-2.4-8.5-1.2-11.1 2.6l-46.6 67.6c-30.7-12.1-64.9-18.8-100.8-18.8-35.9 0-70.1 6.7-100.8 18.8l-46.6-67.5c-2.6-3.8-7.6-5.1-11.1-2.6-3.5 2.4-4.1 7.4-1.5 11.4l44.9 65c-71.4 33.2-121.4 96.1-127.8 169.6h486c-6.6-73.6-56.7-136.5-128-169.7zM409.5 244.1a26.9 26.9 0 1 1 26.9-26.9 26.97 26.97 0 0 1-26.9 26.9zm208.4 0a26.9 26.9 0 1 1 26.9-26.9 26.97 26.97 0 0 1-26.9 26.9zm223.4 100.7c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V400.1c.1-30.6-24.3-55.3-54.6-55.3zm-658.6 0c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V400.1c0-30.6-24.5-55.3-54.6-55.3z")), t.AmazonSquareFill = u("amazon-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM547.8 326.7c-7.2-10.9-20.1-16.4-38.7-16.4-1.3 0-3 .1-5.3.3-2.2.2-6.6 1.5-12.9 3.7a79.4 79.4 0 0 0-17.9 9.1c-5.5 3.8-11.5 10-18 18.4-6.4 8.5-11.5 18.4-15.3 29.8l-94-8.4c0-12.4 2.4-24.7 7-36.9s11.8-23.9 21.4-35c9.6-11.2 21.1-21 34.5-29.4 13.4-8.5 29.6-15.2 48.4-20.3 18.9-5.1 39.1-7.6 60.9-7.6 21.3 0 40.6 2.6 57.8 7.7 17.2 5.2 31.1 11.5 41.4 19.1a117 117 0 0 1 25.9 25.7c6.9 9.6 11.7 18.5 14.4 26.7 2.7 8.2 4 15.7 4 22.8v182.5c0 6.4 1.4 13 4.3 19.8 2.9 6.8 6.3 12.8 10.2 18 3.9 5.2 7.9 9.9 12 14.3 4.1 4.3 7.6 7.7 10.6 9.9l4.1 3.4-72.5 69.4c-8.5-7.7-16.9-15.4-25.2-23.4-8.3-8-14.5-14-18.5-18.1l-6.1-6.2c-2.4-2.3-5-5.7-8-10.2-8.1 12.2-18.5 22.8-31.1 31.8-12.7 9-26.3 15.6-40.7 19.7-14.5 4.1-29.4 6.5-44.7 7.1-15.3.6-30-1.5-43.9-6.5-13.9-5-26.5-11.7-37.6-20.3-11.1-8.6-19.9-20.2-26.5-35-6.6-14.8-9.9-31.5-9.9-50.4 0-17.4 3-33.3 8.9-47.7 6-14.5 13.6-26.5 23-36.1 9.4-9.6 20.7-18.2 34-25.7s26.4-13.4 39.2-17.7c12.8-4.2 26.6-7.8 41.5-10.7 14.9-2.9 27.6-4.8 38.2-5.7 10.6-.9 21.2-1.6 31.8-2v-39.4c0-13.5-2.3-23.5-6.7-30.1zm180.5 379.6c-2.8 3.3-7.5 7.8-14.1 13.5s-16.8 12.7-30.5 21.1c-13.7 8.4-28.8 16-45 22.9-16.3 6.9-36.3 12.9-60.1 18-23.7 5.1-48.2 7.6-73.3 7.6-25.4 0-50.7-3.2-76.1-9.6-25.4-6.4-47.6-14.3-66.8-23.7-19.1-9.4-37.6-20.2-55.1-32.2-17.6-12.1-31.7-22.9-42.4-32.5-10.6-9.6-19.6-18.7-26.8-27.1-1.7-1.9-2.8-3.6-3.2-5.1-.4-1.5-.3-2.8.3-3.7.6-.9 1.5-1.6 2.6-2.2a7.42 7.42 0 0 1 7.4.8c40.9 24.2 72.9 41.3 95.9 51.4 82.9 36.4 168 45.7 255.3 27.9 40.5-8.3 82.1-22.2 124.9-41.8 3.2-1.2 6-1.5 8.3-.9 2.3.6 3.5 2.4 3.5 5.4 0 2.8-1.6 6.3-4.8 10.2zm59.9-29c-1.8 11.1-4.9 21.6-9.1 31.8-7.2 17.1-16.3 30-27.1 38.4-3.6 2.9-6.4 3.8-8.3 2.8-1.9-1-1.9-3.5 0-7.4 4.5-9.3 9.2-21.8 14.2-37.7 5-15.8 5.7-26 2.1-30.5-1.1-1.5-2.7-2.6-5-3.6-2.2-.9-5.1-1.5-8.6-1.9s-6.7-.6-9.4-.8c-2.8-.2-6.5-.2-11.2 0-4.7.2-8 .4-10.1.6a874.4 874.4 0 0 1-17.1 1.5c-1.3.2-2.7.4-4.1.5-1.5.1-2.7.2-3.5.3l-2.7.3c-1 .1-1.7.2-2.2.2h-3.2l-1-.2-.6-.5-.5-.9c-1.3-3.3 3.7-7.4 15-12.4s22.3-8.1 32.9-9.3c9.8-1.5 21.3-1.5 34.5-.3s21.3 3.7 24.3 7.4c2.3 3.5 2.5 10.7.7 21.7zM485 467.5c-11.6 4.9-20.9 12.2-27.8 22-6.9 9.8-10.4 21.6-10.4 35.5 0 17.8 7.5 31.5 22.4 41.2 14.1 9.1 28.9 11.4 44.4 6.8 17.9-5.2 30-17.9 36.4-38.1 3-9.3 4.5-19.7 4.5-31.3v-50.2c-12.6.4-24.4 1.6-35.5 3.7-11.1 2.1-22.4 5.6-34 10.4z")), t.ApiFill = u("api", a, i(r, "M917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 0 0-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 0 0 0 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM578.9 546.7a8.03 8.03 0 0 0-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 0 0-11.3 0L363 475.3l-43-43a7.85 7.85 0 0 0-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2c-68.9 68.9-77 175.7-24.3 253.5l-76.1 76.1a8.03 8.03 0 0 0 0 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2z")), t.AppstoreFill = u("appstore", a, i(r, "M864 144H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm0 400H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zM464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm0 400H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16z")), t.AudioFill = u("audio", a, i(r, "M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z")), t.AppleFill = u("apple", a, i(r, "M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z")), t.BackwardFill = u("backward", a, i(c, "M485.6 249.9L198.2 498c-8.3 7.1-8.3 20.8 0 27.9l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9zm320 0L518.2 498a18.6 18.6 0 0 0-6.2 14c0 5.2 2.1 10.4 6.2 14l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9z")), t.BankFill = u("bank", a, i(r, "M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 0 0-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462h62zM381 836H264V462h117v374zm189 0H453V462h117v374zm190 0H642V462h118v374z")), t.BehanceCircleFill = u("behance-circle", a, i(r, "M420.3 470.3c8.7-6.3 12.9-16.7 12.9-31 .3-6.8-1.1-13.5-4.1-19.6-2.7-4.9-6.7-9-11.6-11.9a44.8 44.8 0 0 0-16.6-6c-6.4-1.2-12.9-1.8-19.3-1.7h-70.3v79.7h76.1c13.1.1 24.2-3.1 32.9-9.5zm11.8 72c-9.8-7.5-22.9-11.2-39.2-11.2h-81.8v94h80.2c7.5 0 14.4-.7 21.1-2.1a50.5 50.5 0 0 0 17.8-7.2c5.1-3.3 9.2-7.8 12.3-13.6 3-5.8 4.5-13.2 4.5-22.1 0-17.7-5-30.2-14.9-37.8zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm86.5 286.9h138.4v33.7H598.5v-33.7zM512 628.8a89.52 89.52 0 0 1-27 31c-11.8 8.2-24.9 14.2-38.8 17.7a167.4 167.4 0 0 1-44.6 5.7H236V342.1h161c16.3 0 31.1 1.5 44.6 4.3 13.4 2.8 24.8 7.6 34.4 14.1 9.5 6.5 17 15.2 22.3 26 5.2 10.7 7.9 24.1 7.9 40 0 17.2-3.9 31.4-11.7 42.9-7.9 11.5-19.3 20.8-34.8 28.1 21.1 6 36.6 16.7 46.8 31.7 10.4 15.2 15.5 33.4 15.5 54.8 0 17.4-3.3 32.3-10 44.8zM790.8 576H612.4c0 19.4 6.7 38 16.8 48 10.2 9.9 24.8 14.9 43.9 14.9 13.8 0 25.5-3.5 35.5-10.4 9.9-6.9 15.9-14.2 18.1-21.8h59.8c-9.6 29.7-24.2 50.9-44 63.7-19.6 12.8-43.6 19.2-71.5 19.2-19.5 0-37-3.2-52.7-9.3-15.1-5.9-28.7-14.9-39.9-26.5a121.2 121.2 0 0 1-25.1-41.2c-6.1-16.9-9.1-34.7-8.9-52.6 0-18.5 3.1-35.7 9.1-51.7 11.5-31.1 35.4-56 65.9-68.9 16.3-6.8 33.8-10.2 51.5-10 21 0 39.2 4 55 12.2a111.6 111.6 0 0 1 38.6 32.8c10.1 13.7 17.2 29.3 21.7 46.9 4.3 17.3 5.8 35.5 4.6 54.7zm-122-95.6c-10.8 0-19.9 1.9-26.9 5.6-7 3.7-12.8 8.3-17.2 13.6a48.4 48.4 0 0 0-9.1 17.4c-1.6 5.3-2.7 10.7-3.1 16.2H723c-1.6-17.3-7.6-30.1-15.6-39.1-8.4-8.9-21.9-13.7-38.6-13.7z")), t.BellFill = u("bell", a, i(r, "M816 768h-24V428c0-141.1-104.3-257.8-240-277.2V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.8C336.3 170.2 232 286.9 232 428v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48z")), t.BehanceSquareFill = u("behance-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM598.5 350.9h138.4v33.7H598.5v-33.7zM512 628.8a89.52 89.52 0 0 1-27 31c-11.8 8.2-24.9 14.2-38.8 17.7a167.4 167.4 0 0 1-44.6 5.7H236V342.1h161c16.3 0 31.1 1.5 44.6 4.3 13.4 2.8 24.8 7.6 34.4 14.1 9.5 6.5 17 15.2 22.3 26 5.2 10.7 7.9 24.1 7.9 40 0 17.2-3.9 31.4-11.7 42.9-7.9 11.5-19.3 20.8-34.8 28.1 21.1 6 36.6 16.7 46.8 31.7 10.4 15.2 15.5 33.4 15.5 54.8 0 17.4-3.3 32.3-10 44.8zM790.8 576H612.4c0 19.4 6.7 38 16.8 48 10.2 9.9 24.8 14.9 43.9 14.9 13.8 0 25.5-3.5 35.5-10.4 9.9-6.9 15.9-14.2 18.1-21.8h59.8c-9.6 29.7-24.2 50.9-44 63.7-19.6 12.8-43.6 19.2-71.5 19.2-19.5 0-37-3.2-52.7-9.3-15.1-5.9-28.7-14.9-39.9-26.5a121.2 121.2 0 0 1-25.1-41.2c-6.1-16.9-9.1-34.7-8.9-52.6 0-18.5 3.1-35.7 9.1-51.7 11.5-31.1 35.4-56 65.9-68.9 16.3-6.8 33.8-10.2 51.5-10 21 0 39.2 4 55 12.2a111.6 111.6 0 0 1 38.6 32.8c10.1 13.7 17.2 29.3 21.7 46.9 4.3 17.3 5.8 35.5 4.6 54.7zm-122-95.6c-10.8 0-19.9 1.9-26.9 5.6-7 3.7-12.8 8.3-17.2 13.6a48.4 48.4 0 0 0-9.1 17.4c-1.6 5.3-2.7 10.7-3.1 16.2H723c-1.6-17.3-7.6-30.1-15.6-39.1-8.4-8.9-21.9-13.7-38.6-13.7zm-248.5-10.1c8.7-6.3 12.9-16.7 12.9-31 .3-6.8-1.1-13.5-4.1-19.6-2.7-4.9-6.7-9-11.6-11.9a44.8 44.8 0 0 0-16.6-6c-6.4-1.2-12.9-1.8-19.3-1.7h-70.3v79.7h76.1c13.1.1 24.2-3.1 32.9-9.5zm11.8 72c-9.8-7.5-22.9-11.2-39.2-11.2h-81.8v94h80.2c7.5 0 14.4-.7 21.1-2.1s12.7-3.8 17.8-7.2c5.1-3.3 9.2-7.8 12.3-13.6 3-5.8 4.5-13.2 4.5-22.1 0-17.7-5-30.2-14.9-37.8z")), t.BookFill = u("book", a, i(r, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM668 345.9L621.5 312 572 347.4V124h96v221.9z")), t.BoxPlotFill = u("box-plot", a, i(r, "M952 224h-52c-4.4 0-8 3.6-8 8v248h-92V304c0-4.4-3.6-8-8-8H448v432h344c4.4 0 8-3.6 8-8V548h92v244c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zm-728 80v176h-92V232c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V548h92v172c0 4.4 3.6 8 8 8h152V296H232c-4.4 0-8 3.6-8 8z")), t.BugFill = u("bug", a, i(r, "M304 280h416c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1a184.31 184.31 0 0 0-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9a184.31 184.31 0 0 0-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z", "M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8a63 63 0 0 1-63 63H232a63 63 0 0 1-63-63c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5.2 13 .7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7a273 273 0 0 0 22.7 49c24.3 41.5 59 76.2 100.5 100.5 28.9 16.9 61 28.8 95.3 34.5 4.4 0 8-3.6 8-8V484c0-4.4 3.6-8 8-8h60c4.4 0 8 3.6 8 8v464.2c0 4.4 3.6 8 8 8 34.3-5.7 66.4-17.6 95.3-34.5a281.38 281.38 0 0 0 123.2-149.5A120.4 120.4 0 0 1 836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7.4-6.4.7-12.8.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.CalculatorFill = u("calculator", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM440.2 765h-50.8c-2.2 0-4.5-1.1-5.9-2.9L348 718.6l-35.5 43.5a7.38 7.38 0 0 1-5.9 2.9h-50.8c-6.6 0-10.2-7.9-5.8-13.1l62.7-76.8-61.2-74.9c-4.3-5.2-.7-13.1 5.9-13.1h50.9c2.2 0 4.5 1.1 5.9 2.9l34 41.6 34-41.6c1.5-1.9 3.6-2.9 5.9-2.9h50.8c6.6 0 10.2 7.9 5.9 13.1L383.5 675l62.7 76.8c4.2 5.3.6 13.2-6 13.2zm7.8-382c0 2.2-1.4 4-3.2 4H376v68.7c0 1.9-1.8 3.3-4 3.3h-48c-2.2 0-4-1.4-4-3.2V387h-68.8c-1.8 0-3.2-1.8-3.2-4v-48c0-2.2 1.4-4 3.2-4H320v-68.8c0-1.8 1.8-3.2 4-3.2h48c2.2 0 4 1.4 4 3.2V331h68.7c1.9 0 3.3 1.8 3.3 4v48zm328 369c0 2.2-1.4 4-3.2 4H579.2c-1.8 0-3.2-1.8-3.2-4v-48c0-2.2 1.4-4 3.2-4h193.5c1.9 0 3.3 1.8 3.3 4v48zm0-104c0 2.2-1.4 4-3.2 4H579.2c-1.8 0-3.2-1.8-3.2-4v-48c0-2.2 1.4-4 3.2-4h193.5c1.9 0 3.3 1.8 3.3 4v48zm0-265c0 2.2-1.4 4-3.2 4H579.2c-1.8 0-3.2-1.8-3.2-4v-48c0-2.2 1.4-4 3.2-4h193.5c1.9 0 3.3 1.8 3.3 4v48z")), t.BulbFill = u("bulb", a, i(r, "M348 676.1C250 619.4 184 513.4 184 392c0-181.1 146.9-328 328-328s328 146.9 328 328c0 121.4-66 227.4-164 284.1V792c0 17.7-14.3 32-32 32H380c-17.7 0-32-14.3-32-32V676.1zM392 888h240c4.4 0 8 3.6 8 8v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32v-32c0-4.4 3.6-8 8-8z")), t.BuildFill = u("build", a, i(r, "M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32zM612 746H412V546h200v200zm268-268H680V278h200v200z")), t.CalendarFill = u("calendar", a, i(r, "M112 880c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V460H112v420zm768-696H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v176h800V216c0-17.7-14.3-32-32-32z")), t.CameraFill = u("camera", a, i(r, "M864 260H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 260H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V340c0-44.2-35.8-80-80-80zM512 716c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm-96-160a96 96 0 1 0 192 0 96 96 0 1 0-192 0z")), t.CarFill = u("car", a, i(r, "M959 413.4L935.3 372a8 8 0 0 0-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 0 0-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 0 0-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 0 0 3-10.8zM264 621c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm388 75c0 4.4-3.6 8-8 8H380c-4.4 0-8-3.6-8-8v-84c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v36h168v-36c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v84zm108-75c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM220 418l72.7-199.9.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220z")), t.CaretDownFill = u("caret-down", a, i(c, "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z")), t.CaretLeftFill = u("caret-left", a, i(c, "M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z")), t.CaretRightFill = u("caret-right", a, i(c, "M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z")), t.CarryOutFill = u("carry-out", a, i(r, "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zM694.5 432.7L481.9 725.4a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.1 0 10 2.5 13 6.6l64.7 89 150.9-207.8c3-4.1 7.8-6.6 13-6.6H688c6.5.1 10.3 7.5 6.5 12.8z")), t.CaretUpFill = u("caret-up", a, i(c, "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z")), t.CheckCircleFill = u("check-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z")), t.CheckSquareFill = u("check-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM695.5 365.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L308.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H689c6.5 0 10.3 7.4 6.5 12.7z")), t.ChromeFill = u("chrome", a, i(r, "M371.8 512c0 77.5 62.7 140.2 140.2 140.2S652.2 589.5 652.2 512 589.5 371.8 512 371.8 371.8 434.4 371.8 512zM900 362.4l-234.3 12.1c63.6 74.3 64.6 181.5 11.1 263.7l-188 289.2c78 4.2 158.4-12.9 231.2-55.2 180-104 253-322.1 180-509.8zM320.3 591.9L163.8 284.1A415.35 415.35 0 0 0 96 512c0 208 152.3 380.3 351.4 410.8l106.9-209.4c-96.6 18.2-189.9-34.8-234-121.5zm218.5-285.5l344.4 18.1C848 254.7 792.6 194 719.8 151.7 653.9 113.6 581.5 95.5 510.5 96c-122.5.5-242.2 55.2-322.1 154.5l128.2 196.9c32-91.9 124.8-146.7 222.2-141z")), t.CiCircleFill = u("ci-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-63.6 656c-103 0-162.4-68.6-162.4-182.6v-49C286 373.5 345.4 304 448.3 304c88.3 0 152.3 56.9 152.3 138.1 0 2.4-2 4.4-4.4 4.4h-52.6c-4.2 0-7.6-3.2-8-7.4-4-46.1-37.6-77.6-87-77.6-61.1 0-95.6 45.4-95.6 126.9v49.3c0 80.3 34.5 125.1 95.6 125.1 49.3 0 82.8-29.5 87-72.4.4-4.1 3.8-7.3 8-7.3h52.7c2.4 0 4.4 2 4.4 4.4 0 77.4-64.3 132.5-152.3 132.5zM738 704.1c0 4.4-3.6 8-8 8h-50.4c-4.4 0-8-3.6-8-8V319.9c0-4.4 3.6-8 8-8H730c4.4 0 8 3.6 8 8v384.2z")), t.ClockCircleFill = u("clock-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm176.5 585.7l-28.6 39a7.99 7.99 0 0 1-11.2 1.7L483.3 569.8a7.92 7.92 0 0 1-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z")), t.CloseCircleFill = u("close-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z")), t.CloudFill = u("cloud", a, i(r, "M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3z")), t.CloseSquareFill = u("close-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM676.1 657.9c4.4 5.2.7 13.1-6.1 13.1h-58.9c-4.7 0-9.2-2.1-12.3-5.7L512 561.8l-86.8 103.5c-3 3.6-7.5 5.7-12.3 5.7H354c-6.8 0-10.5-7.9-6.1-13.1L470.2 512 347.9 366.1A7.95 7.95 0 0 1 354 353h58.9c4.7 0 9.2 2.1 12.3 5.7L512 462.2l86.8-103.5c3-3.6 7.5-5.7 12.3-5.7H670c6.8 0 10.5 7.9 6.1 13.1L553.8 512l122.3 145.9z")), t.CodeSandboxSquareFill = u("code-sandbox-square", a, i(r, "M307.9 536.7l87.6 49.9V681l96.7 55.9V524.8L307.9 418.4zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM755.7 653.2L512 794 268.3 653.2V371.8l110-63.6-.4-.2h.2L512 231l134 77h-.2l-.3.2 110.1 63.6v281.4zm-223.9 83.7l97.3-56.2v-94.1l87-49.5V418.5L531.8 525zm-20-352L418 331l-91.1 52.6 185.2 107 185.2-106.9-91.4-52.8z")), t.CodeSandboxCircleFill = u("code-sandbox-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm243.7 589.2L512 794 268.3 653.2V371.8l110-63.6-.4-.2h.2L512 231l134 77h-.2l-.3.2 110.1 63.6v281.4zM307.9 536.7l87.6 49.9V681l96.7 55.9V524.8L307.9 418.4zm203.9-151.8L418 331l-91.1 52.6 185.2 107 185.2-106.9-91.4-52.8zm20 352l97.3-56.2v-94.1l87-49.5V418.5L531.8 525z")), t.CodeFill = u("code", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z")), t.CompassFill = u("compass", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM327.3 702.4c-2 .9-4.4 0-5.3-2.1-.4-1-.4-2.2 0-3.2l98.7-225.5 132.1 132.1-225.5 98.7zm375.1-375.1l-98.7 225.5-132.1-132.1L697.1 322c2-.9 4.4 0 5.3 2.1.4 1 .4 2.1 0 3.2z")), t.CodepenCircleFill = u("codepen-circle", a, i(r, "M488.1 414.7V303.4L300.9 428l83.6 55.8zm254.1 137.7v-79.8l-59.8 39.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm278 533c0 1.1-.1 2.1-.2 3.1 0 .4-.1.7-.2 1a14.16 14.16 0 0 1-.8 3.2c-.2.6-.4 1.2-.6 1.7-.2.4-.4.8-.5 1.2-.3.5-.5 1.1-.8 1.6-.2.4-.4.7-.7 1.1-.3.5-.7 1-1 1.5-.3.4-.5.7-.8 1-.4.4-.8.9-1.2 1.3-.3.3-.6.6-1 .9-.4.4-.9.8-1.4 1.1-.4.3-.7.6-1.1.8-.1.1-.3.2-.4.3L525.2 786c-4 2.7-8.6 4-13.2 4-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-.1-.1-.3-.2-.4-.3l-1.1-.8c-.5-.4-.9-.7-1.3-1.1-.3-.3-.6-.6-1-.9-.4-.4-.8-.8-1.2-1.3a7 7 0 0 1-.8-1c-.4-.5-.7-1-1-1.5-.2-.4-.5-.7-.7-1.1-.3-.5-.6-1.1-.8-1.6-.2-.4-.4-.8-.5-1.2-.2-.6-.4-1.2-.6-1.7-.1-.4-.3-.8-.4-1.2-.2-.7-.3-1.3-.4-2-.1-.3-.1-.7-.2-1-.1-1-.2-2.1-.2-3.1V427.9c0-1 .1-2.1.2-3.1.1-.3.1-.7.2-1a14.16 14.16 0 0 1 .8-3.2c.2-.6.4-1.2.6-1.7.2-.4.4-.8.5-1.2.2-.5.5-1.1.8-1.6.2-.4.4-.7.7-1.1.6-.9 1.2-1.7 1.8-2.5.4-.4.8-.9 1.2-1.3.3-.3.6-.6 1-.9.4-.4.9-.8 1.3-1.1.4-.3.7-.6 1.1-.8.1-.1.3-.2.4-.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c.1.1.3.2.4.3l1.1.8 1.4 1.1c.3.3.6.6 1 .9.4.4.8.8 1.2 1.3.7.8 1.3 1.6 1.8 2.5.2.4.5.7.7 1.1.3.5.6 1 .8 1.6.2.4.4.8.5 1.2.2.6.4 1.2.6 1.7.1.4.3.8.4 1.2.2.7.3 1.3.4 2 .1.3.1.7.2 1 .1 1 .2 2.1.2 3.1V597zm-254.1 13.3v111.3L723.1 597l-83.6-55.8zM281.8 472.6v79.8l59.8-39.9zM512 456.1l-84.5 56.4 84.5 56.4 84.5-56.4zM723.1 428L535.9 303.4v111.3l103.6 69.1zM384.5 541.2L300.9 597l187.2 124.6V610.3l-103.6-69.1z")), t.CodepenSquareFill = u("codepen-square", a, i(r, "M723.1 428L535.9 303.4v111.3l103.6 69.1zM512 456.1l-84.5 56.4 84.5 56.4 84.5-56.4zm23.9 154.2v111.3L723.1 597l-83.6-55.8zm-151.4-69.1L300.9 597l187.2 124.6V610.3l-103.6-69.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-90 485c0 1.1-.1 2.1-.2 3.1 0 .4-.1.7-.2 1a14.16 14.16 0 0 1-.8 3.2c-.2.6-.4 1.2-.6 1.7-.2.4-.4.8-.5 1.2-.3.5-.5 1.1-.8 1.6-.2.4-.4.7-.7 1.1-.3.5-.7 1-1 1.5-.3.4-.5.7-.8 1-.4.4-.8.9-1.2 1.3-.3.3-.6.6-1 .9-.4.4-.9.8-1.4 1.1-.4.3-.7.6-1.1.8-.1.1-.3.2-.4.3L525.2 786c-4 2.7-8.6 4-13.2 4-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-.1-.1-.3-.2-.4-.3l-1.1-.8c-.5-.4-.9-.7-1.3-1.1-.3-.3-.6-.6-1-.9-.4-.4-.8-.8-1.2-1.3a7 7 0 0 1-.8-1c-.4-.5-.7-1-1-1.5-.2-.4-.5-.7-.7-1.1-.3-.5-.6-1.1-.8-1.6-.2-.4-.4-.8-.5-1.2-.2-.6-.4-1.2-.6-1.7-.1-.4-.3-.8-.4-1.2-.2-.7-.3-1.3-.4-2-.1-.3-.1-.7-.2-1-.1-1-.2-2.1-.2-3.1V427.9c0-1 .1-2.1.2-3.1.1-.3.1-.7.2-1a14.16 14.16 0 0 1 .8-3.2c.2-.6.4-1.2.6-1.7.2-.4.4-.8.5-1.2.2-.5.5-1.1.8-1.6.2-.4.4-.7.7-1.1.6-.9 1.2-1.7 1.8-2.5.4-.4.8-.9 1.2-1.3.3-.3.6-.6 1-.9.4-.4.9-.8 1.3-1.1.4-.3.7-.6 1.1-.8.1-.1.3-.2.4-.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c.1.1.3.2.4.3l1.1.8 1.4 1.1c.3.3.6.6 1 .9.4.4.8.8 1.2 1.3.7.8 1.3 1.6 1.8 2.5.2.4.5.7.7 1.1.3.5.6 1 .8 1.6.2.4.4.8.5 1.2.2.6.4 1.2.6 1.7.1.4.3.8.4 1.2.2.7.3 1.3.4 2 .1.3.1.7.2 1 .1 1 .2 2.1.2 3.1V597zm-47.8-44.6v-79.8l-59.8 39.9zm-460.4-79.8v79.8l59.8-39.9zm206.3-57.9V303.4L300.9 428l83.6 55.8z")), t.ContactsFill = u("contacts", a, i(r, "M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zM661 736h-43.9c-4.2 0-7.6-3.3-7.9-7.5-3.8-50.6-46-90.5-97.2-90.5s-93.4 40-97.2 90.5c-.3 4.2-3.7 7.5-7.9 7.5H363a8 8 0 0 1-8-8.4c2.8-53.3 32-99.7 74.6-126.1a111.8 111.8 0 0 1-29.1-75.5c0-61.9 49.9-112 111.4-112 61.5 0 111.4 50.1 111.4 112 0 29.1-11 55.5-29.1 75.5 42.7 26.5 71.8 72.8 74.6 126.1.4 4.6-3.2 8.4-7.8 8.4zM512 474c-28.5 0-51.7 23.3-51.7 52s23.2 52 51.7 52c28.5 0 51.7-23.3 51.7-52s-23.2-52-51.7-52z")), t.ControlFill = u("control", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM404 683v77c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-77c-41.7-13.6-72-52.8-72-99s30.3-85.5 72-99V264c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v221c41.7 13.6 72 52.8 72 99s-30.3 85.5-72 99zm279.6-143.9c.2 0 .3-.1.4-.1v221c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V539c.2 0 .3.1.4.1-42-13.4-72.4-52.7-72.4-99.1 0-46.4 30.4-85.7 72.4-99.1-.2 0-.3.1-.4.1v-77c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v77c-.2 0-.3-.1-.4-.1 42 13.4 72.4 52.7 72.4 99.1 0 46.4-30.4 85.7-72.4 99.1zM616 440a36 36 0 1 0 72 0 36 36 0 1 0-72 0zM403.4 566.5l-1.5-2.4c0-.1-.1-.1-.1-.2l-.9-1.2c-.1-.1-.2-.2-.2-.3-1-1.3-2-2.5-3.2-3.6l-.2-.2c-.4-.4-.8-.8-1.2-1.1-.8-.8-1.7-1.5-2.6-2.1h-.1l-1.2-.9c-.1-.1-.3-.2-.4-.3-1.2-.8-2.5-1.6-3.9-2.2-.2-.1-.5-.2-.7-.4-.4-.2-.7-.3-1.1-.5-.3-.1-.7-.3-1-.4-.5-.2-1-.4-1.5-.5-.4-.1-.9-.3-1.3-.4l-.9-.3-1.4-.3c-.2-.1-.5-.1-.7-.2-.7-.1-1.4-.3-2.1-.4-.2 0-.4 0-.6-.1-.6-.1-1.1-.1-1.7-.2-.2 0-.4 0-.7-.1-.8 0-1.5-.1-2.3-.1s-1.5 0-2.3.1c-.2 0-.4 0-.7.1-.6 0-1.2.1-1.7.2-.2 0-.4 0-.6.1-.7.1-1.4.2-2.1.4-.2.1-.5.1-.7.2l-1.4.3-.9.3c-.4.1-.9.3-1.3.4-.5.2-1 .4-1.5.5-.3.1-.7.3-1 .4-.4.2-.7.3-1.1.5-.2.1-.5.2-.7.4-1.3.7-2.6 1.4-3.9 2.2-.1.1-.3.2-.4.3l-1.2.9h-.1c-.9.7-1.8 1.4-2.6 2.1-.4.4-.8.7-1.2 1.1l-.2.2a54.8 54.8 0 0 0-3.2 3.6c-.1.1-.2.2-.2.3l-.9 1.2c0 .1-.1.1-.1.2l-1.5 2.4c-.1.2-.2.3-.3.5-2.7 5.1-4.3 10.9-4.3 17s1.6 12 4.3 17c.1.2.2.3.3.5l1.5 2.4c0 .1.1.1.1.2l.9 1.2c.1.1.2.2.2.3 1 1.3 2 2.5 3.2 3.6l.2.2c.4.4.8.8 1.2 1.1.8.8 1.7 1.5 2.6 2.1h.1l1.2.9c.1.1.3.2.4.3 1.2.8 2.5 1.6 3.9 2.2.2.1.5.2.7.4.4.2.7.3 1.1.5.3.1.7.3 1 .4.5.2 1 .4 1.5.5.4.1.9.3 1.3.4l.9.3 1.4.3c.2.1.5.1.7.2.7.1 1.4.3 2.1.4.2 0 .4 0 .6.1.6.1 1.1.1 1.7.2.2 0 .4 0 .7.1.8 0 1.5.1 2.3.1s1.5 0 2.3-.1c.2 0 .4 0 .7-.1.6 0 1.2-.1 1.7-.2.2 0 .4 0 .6-.1.7-.1 1.4-.2 2.1-.4.2-.1.5-.1.7-.2l1.4-.3.9-.3c.4-.1.9-.3 1.3-.4.5-.2 1-.4 1.5-.5.3-.1.7-.3 1-.4.4-.2.7-.3 1.1-.5.2-.1.5-.2.7-.4 1.3-.7 2.6-1.4 3.9-2.2.1-.1.3-.2.4-.3l1.2-.9h.1c.9-.7 1.8-1.4 2.6-2.1.4-.4.8-.7 1.2-1.1l.2-.2c1.1-1.1 2.2-2.4 3.2-3.6.1-.1.2-.2.2-.3l.9-1.2c0-.1.1-.1.1-.2l1.5-2.4c.1-.2.2-.3.3-.5 2.7-5.1 4.3-10.9 4.3-17s-1.6-12-4.3-17c-.1-.2-.2-.4-.3-.5z")), t.ContainerFill = u("container", a, i(r, "M832 64H192c-17.7 0-32 14.3-32 32v529c0-.6.4-1 1-1h219.3l5.2 24.7C397.6 708.5 450.8 752 512 752s114.4-43.5 126.4-103.3l5.2-24.7H863c.6 0 1 .4 1 1V96c0-17.7-14.3-32-32-32zM712 493c0 4.4-3.6 8-8 8H320c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h384c4.4 0 8 3.6 8 8v48zm0-160c0 4.4-3.6 8-8 8H320c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h384c4.4 0 8 3.6 8 8v48zm151 354H694.1c-11.6 32.8-32 62.3-59.1 84.7-34.5 28.6-78.2 44.3-123 44.3s-88.5-15.8-123-44.3a194.02 194.02 0 0 1-59.1-84.7H161c-.6 0-1-.4-1-1v242c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V686c0 .6-.4 1-1 1z")), t.CopyFill = u("copy", a, i(r, "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM382 896h-.2L232 746.2v-.2h150v150z")), t.CopyrightCircleFill = u("copyright-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm5.4 670c-110 0-173.4-73.2-173.4-194.9v-52.3C344 364.2 407.4 290 517.3 290c94.3 0 162.7 60.7 162.7 147.4 0 2.6-2.1 4.7-4.7 4.7h-56.7c-4.2 0-7.6-3.2-8-7.4-4-49.5-40-83.4-93-83.4-65.3 0-102.1 48.5-102.1 135.5v52.6c0 85.7 36.9 133.6 102.1 133.6 52.8 0 88.7-31.7 93-77.8.4-4.1 3.8-7.3 8-7.3h56.8c2.6 0 4.7 2.1 4.7 4.7 0 82.6-68.7 141.4-162.7 141.4z")), t.CreditCardFill = u("credit-card", a, i(r, "M928 160H96c-17.7 0-32 14.3-32 32v160h896V192c0-17.7-14.3-32-32-32zM64 832c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V440H64v392zm579-184c0-4.4 3.6-8 8-8h165c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8H651c-4.4 0-8-3.6-8-8v-72z")), t.CrownFill = u("crown", a, i(r, "M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 0 0-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z")), t.CustomerServiceFill = u("customer-service", a, i(r, "M512 128c-212.1 0-384 171.9-384 384v360c0 13.3 10.7 24 24 24h184c35.3 0 64-28.7 64-64V624c0-35.3-28.7-64-64-64H200v-48c0-172.3 139.7-312 312-312s312 139.7 312 312v48H688c-35.3 0-64 28.7-64 64v208c0 35.3 28.7 64 64 64h184c13.3 0 24-10.7 24-24V512c0-212.1-171.9-384-384-384z")), t.DashboardFill = u("dashboard", a, i(r, "M924.8 385.6a446.7 446.7 0 0 0-96-142.4 446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96 446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM482 232c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8h-44c-4.4 0-8-3.6-8-8v-80zM270 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44zm90.7-204.5l-31.1 31.1a8.03 8.03 0 0 1-11.3 0L261.7 352a8.03 8.03 0 0 1 0-11.3l31.1-31.1c3.1-3.1 8.2-3.1 11.3 0l56.6 56.6c3.1 3.1 3.1 8.2 0 11.3zm291.1 83.6l-84.5 84.5c5 18.7.2 39.4-14.5 54.1a55.95 55.95 0 0 1-79.2 0 55.95 55.95 0 0 1 0-79.2 55.87 55.87 0 0 1 54.1-14.5l84.5-84.5c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3c3.1 3.1 3.1 8.1 0 11.3zm43-52.4l-31.1-31.1a8.03 8.03 0 0 1 0-11.3l56.6-56.6c3.1-3.1 8.2-3.1 11.3 0l31.1 31.1c3.1 3.1 3.1 8.2 0 11.3l-56.6 56.6a8.03 8.03 0 0 1-11.3 0zM846 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44z")), t.DeleteFill = u("delete", a, i(r, "M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z")), t.DiffFill = u("diff", a, i(r, "M854.2 306.6L611.3 72.9c-6-5.7-13.9-8.9-22.2-8.9H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h277l219 210.6V824c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V329.6c0-8.7-3.5-17-9.8-23zM553.4 201.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v704c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V397.3c0-8.5-3.4-16.6-9.4-22.6L553.4 201.4zM568 753c0 3.8-3.4 7-7.5 7h-225c-4.1 0-7.5-3.2-7.5-7v-42c0-3.8 3.4-7 7.5-7h225c4.1 0 7.5 3.2 7.5 7v42zm0-220c0 3.8-3.4 7-7.5 7H476v84.9c0 3.9-3.1 7.1-7 7.1h-42c-3.8 0-7-3.2-7-7.1V540h-84.5c-4.1 0-7.5-3.2-7.5-7v-42c0-3.9 3.4-7 7.5-7H420v-84.9c0-3.9 3.2-7.1 7-7.1h42c3.9 0 7 3.2 7 7.1V484h84.5c4.1 0 7.5 3.1 7.5 7v42z")), t.DingtalkCircleFill = u("dingtalk-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm227 385.3c-1 4.2-3.5 10.4-7 17.8h.1l-.4.7c-20.3 43.1-73.1 127.7-73.1 127.7s-.1-.2-.3-.5l-15.5 26.8h74.5L575.1 810l32.3-128h-58.6l20.4-84.7c-16.5 3.9-35.9 9.4-59 16.8 0 0-31.2 18.2-89.9-35 0 0-39.6-34.7-16.6-43.4 9.8-3.7 47.4-8.4 77-12.3 40-5.4 64.6-8.2 64.6-8.2S422 517 392.7 512.5c-29.3-4.6-66.4-53.1-74.3-95.8 0 0-12.2-23.4 26.3-12.3 38.5 11.1 197.9 43.2 197.9 43.2s-207.4-63.3-221.2-78.7c-13.8-15.4-40.6-84.2-37.1-126.5 0 0 1.5-10.5 12.4-7.7 0 0 153.3 69.7 258.1 107.9 104.8 37.9 195.9 57.3 184.2 106.7z")), t.DatabaseFill = u("database", a, i(r, "M832 64H192c-17.7 0-32 14.3-32 32v224h704V96c0-17.7-14.3-32-32-32zM288 232c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM160 928c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V704H160v224zm128-136c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM160 640h704V384H160v256zm128-168c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z")), t.DingtalkSquareFill = u("dingtalk-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM739 449.3c-1 4.2-3.5 10.4-7 17.8h.1l-.4.7c-20.3 43.1-73.1 127.7-73.1 127.7s-.1-.2-.3-.5l-15.5 26.8h74.5L575.1 810l32.3-128h-58.6l20.4-84.7c-16.5 3.9-35.9 9.4-59 16.8 0 0-31.2 18.2-89.9-35 0 0-39.6-34.7-16.6-43.4 9.8-3.7 47.4-8.4 77-12.3 40-5.4 64.6-8.2 64.6-8.2S422 517 392.7 512.5c-29.3-4.6-66.4-53.1-74.3-95.8 0 0-12.2-23.4 26.3-12.3 38.5 11.1 197.9 43.2 197.9 43.2s-207.4-63.3-221.2-78.7c-13.8-15.4-40.6-84.2-37.1-126.5 0 0 1.5-10.5 12.4-7.7 0 0 153.3 69.7 258.1 107.9 104.8 37.9 195.9 57.3 184.2 106.7z")), t.DislikeFill = u("dislike", a, i(r, "M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H273v428h.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM112 132v364c0 17.7 14.3 32 32 32h65V100h-65c-17.7 0-32 14.3-32 32z")), t.DollarCircleFill = u("dollar-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm22.3 665.2l.2 31.7c0 4.4-3.6 8.1-8 8.1h-28.4c-4.4 0-8-3.6-8-8v-31.4C401.3 723 359.5 672.4 355 617.4c-.4-4.7 3.3-8.7 8-8.7h46.2c3.9 0 7.3 2.8 7.9 6.6 5.1 31.7 29.8 55.4 74.1 61.3V533.9l-24.7-6.3c-52.3-12.5-102.1-45.1-102.1-112.7 0-72.9 55.4-112.1 126.2-119v-33c0-4.4 3.6-8 8-8h28.1c4.4 0 8 3.6 8 8v32.7c68.5 6.9 119.9 46.9 125.9 109.2.5 4.7-3.2 8.8-8 8.8h-44.9c-4 0-7.4-3-7.9-6.9-4-29.2-27.4-53-65.5-58.2v134.3l25.4 5.9c64.8 16 108.9 47 108.9 116.4 0 75.3-56 117.3-134.3 124.1zM426.6 410.3c0 25.4 15.7 45.1 49.5 57.3 4.7 1.9 9.4 3.4 15 5v-124c-36.9 4.7-64.5 25.4-64.5 61.7zm116.5 135.2c-2.8-.6-5.6-1.3-8.8-2.2V677c42.6-3.8 72-27.2 72-66.4 0-30.7-15.9-50.7-63.2-65.1z")), t.DownCircleFill = u("down-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm184.5 353.7l-178 246a7.95 7.95 0 0 1-12.9 0l-178-246c-3.8-5.3 0-12.7 6.5-12.7H381c10.2 0 19.9 4.9 25.9 13.2L512 563.6l105.2-145.4c6-8.3 15.6-13.2 25.9-13.2H690c6.5 0 10.3 7.4 6.5 12.7z")), t.DownSquareFill = u("down-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM696.5 412.7l-178 246a7.95 7.95 0 0 1-12.9 0l-178-246c-3.8-5.3 0-12.7 6.5-12.7H381c10.2 0 19.9 4.9 25.9 13.2L512 558.6l105.2-145.4c6-8.3 15.6-13.2 25.9-13.2H690c6.5 0 10.3 7.4 6.5 12.7z")), t.DribbbleCircleFill = u("dribbble-circle", a, i(r, "M675.1 328.3a245.2 245.2 0 0 0-220.8-55.1c6.8 9.1 51.5 69.9 91.8 144 87.5-32.8 124.5-82.6 129-88.9zM554 552.8c-138.7 48.3-188.6 144.6-193 153.6 41.7 32.5 94.1 51.9 151 51.9 34.1 0 66.6-6.9 96.1-19.5-3.7-21.6-17.9-96.8-52.5-186.6l-1.6.6zm47.7-11.9c32.2 88.4 45.3 160.4 47.8 175.4 55.2-37.3 94.5-96.4 105.4-164.9-8.4-2.6-76.1-22.8-153.2-10.5zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 736c-158.8 0-288-129.2-288-288s129.2-288 288-288 288 129.2 288 288-129.2 288-288 288zm53.1-346.2c5.7 11.7 11.2 23.6 16.3 35.6 1.8 4.2 3.6 8.4 5.3 12.7 81.8-10.3 163.2 6.2 171.3 7.9-.5-58.1-21.3-111.4-55.5-153.3-5.3 7.1-46.5 60-137.4 97.1zM498.6 432c-40.8-72.5-84.7-133.4-91.2-142.3-68.8 32.5-120.3 95.9-136.2 172.2 11 .2 112.4.7 227.4-29.9zm30.6 82.5c3.2-1 6.4-2 9.7-2.9-6.2-14-12.9-28-19.9-41.7-122.8 36.8-242.1 35.2-252.8 35-.1 2.5-.1 5-.1 7.5 0 63.2 23.9 120.9 63.2 164.5 5.5-9.6 73-121.4 199.9-162.4z")), t.DribbbleSquareFill = u("dribbble-square", a, i(r, "M498.6 432c-40.8-72.5-84.7-133.4-91.2-142.3-68.8 32.5-120.3 95.9-136.2 172.2 11 .2 112.4.7 227.4-29.9zm66.5 21.8c5.7 11.7 11.2 23.6 16.3 35.6 1.8 4.2 3.6 8.4 5.3 12.7 81.8-10.3 163.2 6.2 171.3 7.9-.5-58.1-21.3-111.4-55.5-153.3-5.3 7.1-46.5 60-137.4 97.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM512 800c-158.8 0-288-129.2-288-288s129.2-288 288-288 288 129.2 288 288-129.2 288-288 288zm89.7-259.1c32.2 88.4 45.3 160.4 47.8 175.4 55.2-37.3 94.5-96.4 105.4-164.9-8.4-2.6-76.1-22.8-153.2-10.5zm-72.5-26.4c3.2-1 6.4-2 9.7-2.9-6.2-14-12.9-28-19.9-41.7-122.8 36.8-242.1 35.2-252.8 35-.1 2.5-.1 5-.1 7.5 0 63.2 23.9 120.9 63.2 164.5 5.5-9.6 73-121.4 199.9-162.4zm145.9-186.2a245.2 245.2 0 0 0-220.8-55.1c6.8 9.1 51.5 69.9 91.8 144 87.5-32.8 124.5-82.6 129-88.9zM554 552.8c-138.7 48.3-188.6 144.6-193 153.6 41.7 32.5 94.1 51.9 151 51.9 34.1 0 66.6-6.9 96.1-19.5-3.7-21.6-17.9-96.8-52.5-186.6l-1.6.6z")), t.DropboxCircleFill = u("dropbox-circle", a, i(r, "M663.8 455.5zm-151.5-93.8l-151.8 93.8 151.8 93.9 151.5-93.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm151.2 595.5L512.6 750l-151-90.5v-33.1l45.4 29.4 105.6-87.7 105.6 87.7 45.1-29.4v33.1zm-45.6-22.4l-105.3-87.7L407 637.1l-151-99.2 104.5-82.4L256 371.2 407 274l105.3 87.7L617.6 274 768 372.1l-104.2 83.5L768 539l-150.4 98.1z")), t.DropboxSquareFill = u("dropbox-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM663.2 659.5L512.6 750l-151-90.5v-33.1l45.4 29.4 105.6-87.7 105.6 87.7 45.1-29.4v33.1zm-45.6-22.4l-105.3-87.7L407 637.1l-151-99.2 104.5-82.4L256 371.2 407 274l105.3 87.7L617.6 274 768 372.1l-104.2 83.5L768 539l-150.4 98.1zM512.3 361.7l-151.8 93.8 151.8 93.9 151.5-93.9zm151.5 93.8z")), t.EnvironmentFill = u("environment", a, i(r, "M512 327c-29.9 0-58 11.6-79.2 32.8A111.6 111.6 0 0 0 400 439c0 29.9 11.7 58 32.8 79.2A111.6 111.6 0 0 0 512 551c29.9 0 58-11.7 79.2-32.8C612.4 497 624 468.9 624 439c0-29.9-11.6-58-32.8-79.2S541.9 327 512 327zm342.6-37.9a362.49 362.49 0 0 0-79.9-115.7 370.83 370.83 0 0 0-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 0 0 169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0 0 22.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 615c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z")), t.EditFill = u("edit", a, i(r, "M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z")), t.ExclamationCircleFill = u("exclamation-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z")), t.EuroCircleFill = u("euro-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm63.5 375.8c4.4 0 8 3.6 8 8V475c0 4.4-3.6 8-8 8h-136c-.3 4.4-.3 9.1-.3 13.8v36h136.2c4.4 0 8 3.6 8 8V568c0 4.4-3.6 8-8 8H444.9c15.3 62 61.3 98.6 129.8 98.6 19.9 0 37.1-1.2 51.8-4.1 4.9-1 9.5 2.8 9.5 7.8v42.8c0 3.8-2.7 7-6.4 7.8-15.9 3.4-34.3 5.1-55.3 5.1-109.8 0-183-58.8-200.2-158H344c-4.4 0-8-3.6-8-8v-27.2c0-4.4 3.6-8 8-8h26.1v-36.9c0-4.4 0-8.8.3-12.8H344c-4.4 0-8-3.6-8-8v-27.2c0-4.4 3.6-8 8-8h31.7c19.7-94.2 92-149.9 198.6-149.9 20.9 0 39.4 1.9 55.3 5.4 3.7.8 6.3 4 6.3 7.8V346h.1c0 5.1-4.6 8.8-9.6 7.8-14.7-2.9-31.8-4.4-51.7-4.4-65.4 0-110.4 33.5-127.6 90.4h128.4z")), t.ExperimentFill = u("experiment", a, i(r, "M218.9 636.3l42.6 26.6c.1.1.3.2.4.3l12.7 8 .3.3a186.9 186.9 0 0 0 94.1 25.1c44.9 0 87.2-15.7 121-43.8a256.27 256.27 0 0 1 164.9-59.9c52.3 0 102.2 15.7 144.6 44.5l7.9 5-111.6-289V179.8h63.5c4.4 0 8-3.6 8-8V120c0-4.4-3.6-8-8-8H264.7c-4.4 0-8 3.6-8 8v51.9c0 4.4 3.6 8 8 8h63.5v173.6L218.9 636.3zm333-203.1c22 0 39.9 17.9 39.9 39.9S573.9 513 551.9 513 512 495.1 512 473.1s17.9-39.9 39.9-39.9zM878 825.1l-29.9-77.4-85.7-53.5-.1.1c-.7-.5-1.5-1-2.2-1.5l-8.1-5-.3-.3c-29-17.5-62.3-26.8-97-26.8-44.9 0-87.2 15.7-121 43.8a256.27 256.27 0 0 1-164.9 59.9c-53 0-103.5-16.1-146.2-45.6l-28.9-18.1L146 825.1c-2.8 7.4-4.3 15.2-4.3 23 0 35.2 28.6 63.8 63.8 63.8h612.9c7.9 0 15.7-1.5 23-4.3a63.6 63.6 0 0 0 36.6-82.5z")), t.EyeInvisibleFill = u("eye-invisible", a, i(r, "M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z", "M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z")), t.EyeFill = u("eye", a, i(r, "M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z")), t.FacebookFill = u("facebook", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z")), t.FastBackwardFill = u("fast-backward", a, i(c, "M517.6 273.5L230.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm320 0L550.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm-620-25.5h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z")), t.FastForwardFill = u("fast-forward", a, i(c, "M793.8 499.3L506.4 273.5c-10.7-8.4-26.4-.8-26.4 12.7v451.6c0 13.5 15.7 21.1 26.4 12.7l287.4-225.8a16.14 16.14 0 0 0 0-25.4zm-320 0L186.4 273.5c-10.7-8.4-26.4-.8-26.4 12.7v451.5c0 13.5 15.7 21.1 26.4 12.7l287.4-225.8c4.1-3.2 6.2-8 6.2-12.7 0-4.6-2.1-9.4-6.2-12.6zM857.6 248h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z")), t.FileAddFill = u("file-add", a, i(r, "M480 580H372a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h108v108a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V644h108a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H544V472a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v108zm374.6-291.3c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2z")), t.FileExcelFill = u("file-excel", a, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM575.34 477.84l-61.22 102.3L452.3 477.8a12 12 0 0 0-10.27-5.79h-38.44a12 12 0 0 0-6.4 1.85 12 12 0 0 0-3.75 16.56l82.34 130.42-83.45 132.78a12 12 0 0 0-1.84 6.39 12 12 0 0 0 12 12h34.46a12 12 0 0 0 10.21-5.7l62.7-101.47 62.3 101.45a12 12 0 0 0 10.23 5.72h37.48a12 12 0 0 0 6.48-1.9 12 12 0 0 0 3.62-16.58l-83.83-130.55 85.3-132.47a12 12 0 0 0 1.9-6.5 12 12 0 0 0-12-12h-35.7a12 12 0 0 0-10.29 5.84z")), t.FileExclamationFill = u("file-exclamation", a, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM512 784a40 40 0 1 0 0-80 40 40 0 0 0 0 80zm32-152V448a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v184a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8z")), t.FileImageFill = u("file-image", a, i(r, "M854.6 288.7L639.4 73.4c-6-6-14.2-9.4-22.7-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.6-9.4-22.6zM400 402c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm296 294H328c-6.7 0-10.4-7.7-6.3-12.9l99.8-127.2a8 8 0 0 1 12.6 0l41.1 52.4 77.8-99.2a8 8 0 0 1 12.6 0l136.5 174c4.3 5.2.5 12.9-6.1 12.9zm-94-370V137.8L790.2 326H602z")), t.FileMarkdownFill = u("file-markdown", a, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM426.13 600.93l59.11 132.97a16 16 0 0 0 14.62 9.5h24.06a16 16 0 0 0 14.63-9.51l59.1-133.35V758a16 16 0 0 0 16.01 16H641a16 16 0 0 0 16-16V486a16 16 0 0 0-16-16h-34.75a16 16 0 0 0-14.67 9.62L512.1 662.2l-79.48-182.59a16 16 0 0 0-14.67-9.61H383a16 16 0 0 0-16 16v272a16 16 0 0 0 16 16h27.13a16 16 0 0 0 16-16V600.93z")), t.FilePdfFill = u("file-pdf", a, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM633.22 637.26c-15.18-.5-31.32.67-49.65 2.96-24.3-14.99-40.66-35.58-52.28-65.83l1.07-4.38 1.24-5.18c4.3-18.13 6.61-31.36 7.3-44.7.52-10.07-.04-19.36-1.83-27.97-3.3-18.59-16.45-29.46-33.02-30.13-15.45-.63-29.65 8-33.28 21.37-5.91 21.62-2.45 50.07 10.08 98.59-15.96 38.05-37.05 82.66-51.2 107.54-18.89 9.74-33.6 18.6-45.96 28.42-16.3 12.97-26.48 26.3-29.28 40.3-1.36 6.49.69 14.97 5.36 21.92 5.3 7.88 13.28 13 22.85 13.74 24.15 1.87 53.83-23.03 86.6-79.26 3.29-1.1 6.77-2.26 11.02-3.7l11.9-4.02c7.53-2.54 12.99-4.36 18.39-6.11 23.4-7.62 41.1-12.43 57.2-15.17 27.98 14.98 60.32 24.8 82.1 24.8 17.98 0 30.13-9.32 34.52-23.99 3.85-12.88.8-27.82-7.48-36.08-8.56-8.41-24.3-12.43-45.65-13.12zM385.23 765.68v-.36l.13-.34a54.86 54.86 0 0 1 5.6-10.76c4.28-6.58 10.17-13.5 17.47-20.87 3.92-3.95 8-7.8 12.79-12.12 1.07-.96 7.91-7.05 9.19-8.25l11.17-10.4-8.12 12.93c-12.32 19.64-23.46 33.78-33 43-3.51 3.4-6.6 5.9-9.1 7.51a16.43 16.43 0 0 1-2.61 1.42c-.41.17-.77.27-1.13.3a2.2 2.2 0 0 1-1.12-.15 2.07 2.07 0 0 1-1.27-1.91zM511.17 547.4l-2.26 4-1.4-4.38c-3.1-9.83-5.38-24.64-6.01-38-.72-15.2.49-24.32 5.29-24.32 6.74 0 9.83 10.8 10.07 27.05.22 14.28-2.03 29.14-5.7 35.65zm-5.81 58.46l1.53-4.05 2.09 3.8c11.69 21.24 26.86 38.96 43.54 51.31l3.6 2.66-4.39.9c-16.33 3.38-31.54 8.46-52.34 16.85 2.17-.88-21.62 8.86-27.64 11.17l-5.25 2.01 2.8-4.88c12.35-21.5 23.76-47.32 36.05-79.77zm157.62 76.26c-7.86 3.1-24.78.33-54.57-12.39l-7.56-3.22 8.2-.6c23.3-1.73 39.8-.45 49.42 3.07 4.1 1.5 6.83 3.39 8.04 5.55a4.64 4.64 0 0 1-1.36 6.31 6.7 6.7 0 0 1-2.17 1.28z")), t.FilePptFill = u("file-ppt", a, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM468.53 760v-91.54h59.27c60.57 0 100.2-39.65 100.2-98.12 0-58.22-39.58-98.34-99.98-98.34H424a12 12 0 0 0-12 12v276a12 12 0 0 0 12 12h32.53a12 12 0 0 0 12-12zm0-139.33h34.9c47.82 0 67.19-12.93 67.19-50.33 0-32.05-18.12-50.12-49.87-50.12h-52.22v100.45z")), t.FileTextFill = u("file-text", a, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM320 482a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h384a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H320zm0 136a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h184a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H320z")), t.FileWordFill = u("file-word", a, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM512 566.1l52.81 197a12 12 0 0 0 11.6 8.9h31.77a12 12 0 0 0 11.6-8.88l74.37-276a12 12 0 0 0 .4-3.12 12 12 0 0 0-12-12h-35.57a12 12 0 0 0-11.7 9.31l-45.78 199.1-49.76-199.32A12 12 0 0 0 528.1 472h-32.2a12 12 0 0 0-11.64 9.1L434.6 680.01 388.5 481.3a12 12 0 0 0-11.68-9.29h-35.39a12 12 0 0 0-3.11.41 12 12 0 0 0-8.47 14.7l74.17 276A12 12 0 0 0 415.6 772h31.99a12 12 0 0 0 11.59-8.9l52.81-197z")), t.FileUnknownFill = u("file-unknown", a, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM402 549c0 5.4 4.4 9.5 9.8 9.5h32.4c5.4 0 9.8-4.2 9.8-9.4 0-28.2 25.8-51.6 58-51.6s58 23.4 58 51.5c0 25.3-21 47.2-49.3 50.9-19.3 2.8-34.5 20.3-34.7 40.1v32c0 5.5 4.5 10 10 10h32c5.5 0 10-4.5 10-10v-12.2c0-6 4-11.5 9.7-13.3 44.6-14.4 75-54 74.3-98.9-.8-55.5-49.2-100.8-108.5-101.6-61.4-.7-111.5 45.6-111.5 103zm110 227a32 32 0 1 0 0-64 32 32 0 0 0 0 64z")), t.FileZipFill = u("file-zip", a, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM296 136v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm0 64v160h128V584H296zm48 48h32v64h-32v-64z")), t.FileFill = u("file", a, i(r, "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2z")), t.FilterFill = u("filter", a, i(r, "M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z")), t.FireFill = u("fire", a, i(r, "M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9z")), t.FlagFill = u("flag", a, i(r, "M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32z")), t.FolderAddFill = u("folder-add", a, i(r, "M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM632 577c0 3.8-3.4 7-7.5 7H540v84.9c0 3.9-3.2 7.1-7 7.1h-42c-3.8 0-7-3.2-7-7.1V584h-84.5c-4.1 0-7.5-3.2-7.5-7v-42c0-3.8 3.4-7 7.5-7H484v-84.9c0-3.9 3.2-7.1 7-7.1h42c3.8 0 7 3.2 7 7.1V528h84.5c4.1 0 7.5 3.2 7.5 7v42z")), t.FolderFill = u("folder", a, i(r, "M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32z")), t.FolderOpenFill = u("folder-open", a, i(r, "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zm-180 0H238c-13 0-24.8 7.9-29.7 20L136 643.2V256h188.5l119.6 114.4H748V444z")), t.ForwardFill = u("forward", a, i(c, "M825.8 498L538.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L825.8 526c8.3-7.2 8.3-20.8 0-28zm-320 0L218.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L505.8 526c4.1-3.6 6.2-8.8 6.2-14 0-5.2-2.1-10.4-6.2-14z")), t.FrownFill = u("frown", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm376 272h-48.1c-4.2 0-7.8-3.2-8.1-7.4C604 636.1 562.5 597 512 597s-92.1 39.1-95.8 88.6c-.3 4.2-3.9 7.4-8.1 7.4H360a8 8 0 0 1-8-8.4c4.4-84.3 74.5-151.6 160-151.6s155.6 67.3 160 151.6a8 8 0 0 1-8 8.4zm24-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z")), t.FundFill = u("fund", a, i(r, "M926 164H94c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V196c0-17.7-14.3-32-32-32zm-92.3 194.4l-297 297.2a8.03 8.03 0 0 1-11.3 0L410.9 541.1 238.4 713.7a8.03 8.03 0 0 1-11.3 0l-36.8-36.8a8.03 8.03 0 0 1 0-11.3l214.9-215c3.1-3.1 8.2-3.1 11.3 0L531 565l254.5-254.6c3.1-3.1 8.2-3.1 11.3 0l36.8 36.8c3.2 3 3.2 8.1.1 11.2z")), t.FunnelPlotFill = u("funnel-plot", a, i(r, "M336.7 586h350.6l84.9-148H251.8zm543.4-432H143.9c-24.5 0-39.8 26.7-27.5 48L215 374h594l98.7-172c12.2-21.3-3.1-48-27.6-48zM349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V650H349v188z")), t.GiftFill = u("gift", a, i(r, "M160 894c0 17.7 14.3 32 32 32h286V550H160v344zm386 32h286c17.7 0 32-14.3 32-32V550H546v376zm334-616H732.4c13.6-21.4 21.6-46.8 21.6-74 0-76.1-61.9-138-138-138-41.4 0-78.7 18.4-104 47.4-25.3-29-62.6-47.4-104-47.4-76.1 0-138 61.9-138 138 0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v140h366V310h68v172h366V342c0-17.7-14.3-32-32-32zm-402-4h-70c-38.6 0-70-31.4-70-70s31.4-70 70-70 70 31.4 70 70v70zm138 0h-70v-70c0-38.6 31.4-70 70-70s70 31.4 70 70-31.4 70-70 70z")), t.GithubFill = u("github", a, i(r, "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z")), t.GitlabFill = u("gitlab", a, i(r, "M910.5 553.2l-109-370.8c-6.8-20.4-23.1-34.1-44.9-34.1s-39.5 12.3-46.3 32.7l-72.2 215.4H386.2L314 181.1c-6.8-20.4-24.5-32.7-46.3-32.7s-39.5 13.6-44.9 34.1L113.9 553.2c-4.1 13.6 1.4 28.6 12.3 36.8l385.4 289 386.7-289c10.8-8.1 16.3-23.1 12.2-36.8z")), t.GoldenFill = u("golden", a, i(r, "M905.9 806.7l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H596.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.3-.7 7.3-4.8 6.6-9.2zm-470.2-248c-.6-3.9-4-6.7-7.9-6.7H166.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248zM342 472h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H382.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8z")), t.GoogleCircleFill = u("google-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z")), t.GooglePlusCircleFill = u("google-plus-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm36.5 558.8c-43.9 61.8-132.1 79.8-200.9 53.3-69-26.3-118-99.2-112.1-173.5 1.5-90.9 85.2-170.6 176.1-167.5 43.6-2 84.6 16.9 118 43.6-14.3 16.2-29 31.8-44.8 46.3-40.1-27.7-97.2-35.6-137.3-3.6-57.4 39.7-60 133.4-4.8 176.1 53.7 48.7 155.2 24.5 170.1-50.1-33.6-.5-67.4 0-101-1.1-.1-20.1-.2-40.1-.1-60.2 56.2-.2 112.5-.3 168.8.2 3.3 47.3-3 97.5-32 136.5zM791 536.5c-16.8.2-33.6.3-50.4.4-.2 16.8-.3 33.6-.3 50.4H690c-.2-16.8-.2-33.5-.3-50.3-16.8-.2-33.6-.3-50.4-.5v-50.1c16.8-.2 33.6-.3 50.4-.3.1-16.8.3-33.6.4-50.4h50.2l.3 50.4c16.8.2 33.6.2 50.4.3v50.1z")), t.GooglePlusSquareFill = u("google-plus-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM548.5 622.8c-43.9 61.8-132.1 79.8-200.9 53.3-69-26.3-118-99.2-112.1-173.5 1.5-90.9 85.2-170.6 176.1-167.5 43.6-2 84.6 16.9 118 43.6-14.3 16.2-29 31.8-44.8 46.3-40.1-27.7-97.2-35.6-137.3-3.6-57.4 39.7-60 133.4-4.8 176.1 53.7 48.7 155.2 24.5 170.1-50.1-33.6-.5-67.4 0-101-1.1-.1-20.1-.2-40.1-.1-60.2 56.2-.2 112.5-.3 168.8.2 3.3 47.3-3 97.5-32 136.5zM791 536.5c-16.8.2-33.6.3-50.4.4-.2 16.8-.3 33.6-.3 50.4H690c-.2-16.8-.2-33.5-.3-50.3-16.8-.2-33.6-.3-50.4-.5v-50.1c16.8-.2 33.6-.3 50.4-.3.1-16.8.3-33.6.4-50.4h50.2l.3 50.4c16.8.2 33.6.2 50.4.3v50.1z")), t.GoogleSquareFill = u("google-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM679 697.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9A245.02 245.02 0 0 1 272 512c0-39.6 9.5-77 26.1-110.1 40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z")), t.HddFill = u("hdd", a, i(r, "M832 64H192c-17.7 0-32 14.3-32 32v224h704V96c0-17.7-14.3-32-32-32zM456 216c0 4.4-3.6 8-8 8H264c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zM160 928c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V704H160v224zm576-136c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM160 640h704V384H160v256zm96-152c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H264c-4.4 0-8-3.6-8-8v-48z")), t.HeartFill = u("heart", a, i(r, "M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z")), t.HighlightFill = u("highlight", a, i(r, "M957.6 507.4L603.2 158.2a7.9 7.9 0 0 0-11.2 0L353.3 393.4a8.03 8.03 0 0 0-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 0 0-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6 40.4 39.8a7.9 7.9 0 0 0 11.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0 0 11.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2z")), t.HomeFill = u("home", a, i(r, "M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z")), t.HourglassFill = u("hourglass", a, i(r, "M742 318V184h86c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h86v134c0 81.5 42.4 153.2 106.4 194-64 40.8-106.4 112.5-106.4 194v134h-86c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h632c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-86V706c0-81.5-42.4-153.2-106.4-194 64-40.8 106.4-112.5 106.4-194z")), t.Html5Fill = u("html5", a, i(r, "M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z")), t.IdcardFill = u("idcard", a, i(r, "M373 411c-28.5 0-51.7 23.3-51.7 52s23.2 52 51.7 52 51.7-23.3 51.7-52-23.2-52-51.7-52zm555-251H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM608 420c0-4.4 1-8 2.3-8h123.4c1.3 0 2.3 3.6 2.3 8v48c0 4.4-1 8-2.3 8H610.3c-1.3 0-2.3-3.6-2.3-8v-48zm-86 253h-43.9c-4.2 0-7.6-3.3-7.9-7.5-3.8-50.5-46-90.5-97.2-90.5s-93.4 40-97.2 90.5c-.3 4.2-3.7 7.5-7.9 7.5H224a8 8 0 0 1-8-8.4c2.8-53.3 32-99.7 74.6-126.1a111.8 111.8 0 0 1-29.1-75.5c0-61.9 49.9-112 111.4-112s111.4 50.1 111.4 112c0 29.1-11 55.5-29.1 75.5 42.7 26.5 71.8 72.8 74.6 126.1.4 4.6-3.2 8.4-7.8 8.4zm278.9-53H615.1c-3.9 0-7.1-3.6-7.1-8v-48c0-4.4 3.2-8 7.1-8h185.7c3.9 0 7.1 3.6 7.1 8v48h.1c0 4.4-3.2 8-7.1 8z")), t.IeCircleFill = u("ie-circle", a, i(r, "M693.6 284.4c-24 0-51.1 11.7-72.6 22 46.3 18 86 57.3 112.3 99.6 7.1-18.9 14.6-47.9 14.6-67.9 0-32-22.8-53.7-54.3-53.7zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm253.9 492.9H437.1c0 100.4 144.3 136 196.8 47.4h120.8c-32.6 91.7-119.7 146-216.8 146-35.1 0-70.3-.1-101.7-15.6-87.4 44.5-180.3 56.6-180.3-42 0-45.8 23.2-107.1 44-145C335 484 381.3 422.8 435.6 374.5c-43.7 18.9-91.1 66.3-122 101.2 25.9-112.8 129.5-193.6 237.1-186.5 130-59.8 209.7-34.1 209.7 38.6 0 27.4-10.6 63.3-21.4 87.9 25.2 45.5 33.3 97.6 26.9 141.2zM540.5 399.1c-53.7 0-102 39.7-104 94.9h208c-2-55.1-50.6-94.9-104-94.9zM320.6 602.9c-73 152.4 11.5 172.2 100.3 123.3-46.6-27.5-82.6-72.2-100.3-123.3z")), t.IeSquareFill = u("ie-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM765.9 556.9H437.1c0 100.4 144.3 136 196.8 47.4h120.8c-32.6 91.7-119.7 146-216.8 146-35.1 0-70.3-.1-101.7-15.6-87.4 44.5-180.3 56.6-180.3-42 0-45.8 23.2-107.1 44-145C335 484 381.3 422.8 435.6 374.5c-43.7 18.9-91.1 66.3-122 101.2 25.9-112.8 129.5-193.6 237.1-186.5 130-59.8 209.7-34.1 209.7 38.6 0 27.4-10.6 63.3-21.4 87.9 25.2 45.5 33.3 97.6 26.9 141.2zm-72.3-272.5c-24 0-51.1 11.7-72.6 22 46.3 18 86 57.3 112.3 99.6 7.1-18.9 14.6-47.9 14.6-67.9 0-32-22.8-53.7-54.3-53.7zM540.5 399.1c-53.7 0-102 39.7-104 94.9h208c-2-55.1-50.6-94.9-104-94.9zM320.6 602.9c-73 152.4 11.5 172.2 100.3 123.3-46.6-27.5-82.6-72.2-100.3-123.3z")), t.InfoCircleFill = u("info-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z")), t.InstagramFill = u("instagram", a, i(r, "M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z")), t.InsuranceFill = u("insurance", a, i(r, "M519.9 358.8h97.9v41.6h-97.9zm347-188.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM411.3 656h-.2c0 4.4-3.6 8-8 8h-37.3c-4.4 0-8-3.6-8-8V471.4c-7.7 9.2-15.4 17.9-23.1 26a6.04 6.04 0 0 1-10.2-2.4l-13.2-43.5c-.6-2-.2-4.1 1.2-5.6 37-43.4 64.7-95.1 82.2-153.6 1.1-3.5 5-5.3 8.4-3.7l38.6 18.3c2.7 1.3 4.1 4.4 3.2 7.2a429.2 429.2 0 0 1-33.6 79V656zm296.5-49.2l-26.3 35.3a5.92 5.92 0 0 1-8.9.7c-30.6-29.3-56.8-65.2-78.1-106.9V656c0 4.4-3.6 8-8 8h-36.2c-4.4 0-8-3.6-8-8V536c-22 44.7-49 80.8-80.6 107.6a5.9 5.9 0 0 1-8.9-1.4L430 605.7a6 6 0 0 1 1.6-8.1c28.6-20.3 51.9-45.2 71-76h-55.1c-4.4 0-8-3.6-8-8V478c0-4.4 3.6-8 8-8h94.9v-18.6h-65.9c-4.4 0-8-3.6-8-8V316c0-4.4 3.6-8 8-8h184.7c4.4 0 8 3.6 8 8v127.2c0 4.4-3.6 8-8 8h-66.7v18.6h98.8c4.4 0 8 3.6 8 8v35.6c0 4.4-3.6 8-8 8h-59c18.1 29.1 41.8 54.3 72.3 76.9 2.6 2.1 3.2 5.9 1.2 8.5z")), t.InteractionFill = u("interaction", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM726 585.7c0 55.3-44.7 100.1-99.7 100.1H420.6v53.4c0 5.7-6.5 8.8-10.9 5.3l-109.1-85.7c-3.5-2.7-3.5-8 0-10.7l109.1-85.7c4.4-3.5 10.9-.3 10.9 5.3v53.4h205.7c19.6 0 35.5-16 35.5-35.6v-78.9c0-3.7 3-6.8 6.8-6.8h50.7c3.7 0 6.8 3 6.8 6.8v79.1zm-2.6-209.9l-109.1 85.7c-4.4 3.5-10.9.3-10.9-5.3v-53.4H397.7c-19.6 0-35.5 16-35.5 35.6v78.9c0 3.7-3 6.8-6.8 6.8h-50.7c-3.7 0-6.8-3-6.8-6.8v-78.9c0-55.3 44.7-100.1 99.7-100.1h205.7v-53.4c0-5.7 6.5-8.8 10.9-5.3l109.1 85.7c3.6 2.5 3.6 7.8.1 10.5z")), t.InterationFill = u("interation", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM726 585.7c0 55.3-44.7 100.1-99.7 100.1H420.6v53.4c0 5.7-6.5 8.8-10.9 5.3l-109.1-85.7c-3.5-2.7-3.5-8 0-10.7l109.1-85.7c4.4-3.5 10.9-.3 10.9 5.3v53.4h205.7c19.6 0 35.5-16 35.5-35.6v-78.9c0-3.7 3-6.8 6.8-6.8h50.7c3.7 0 6.8 3 6.8 6.8v79.1zm-2.6-209.9l-109.1 85.7c-4.4 3.5-10.9.3-10.9-5.3v-53.4H397.7c-19.6 0-35.5 16-35.5 35.6v78.9c0 3.7-3 6.8-6.8 6.8h-50.7c-3.7 0-6.8-3-6.8-6.8v-78.9c0-55.3 44.7-100.1 99.7-100.1h205.7v-53.4c0-5.7 6.5-8.8 10.9-5.3l109.1 85.7c3.6 2.5 3.6 7.8.1 10.5z")), t.LayoutFill = u("layout", a, i(r, "M384 912h496c17.7 0 32-14.3 32-32V340H384v572zm496-800H384v164h528V144c0-17.7-14.3-32-32-32zm-768 32v736c0 17.7 14.3 32 32 32h176V112H144c-17.7 0-32 14.3-32 32z")), t.LeftCircleFill = u("left-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 0 1 0-12.9l246-178a8 8 0 0 1 12.7 6.5v46.8z")), t.LeftSquareFill = u("left-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM624 380.9c0 10.2-4.9 19.9-13.2 25.9L465.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 0 1 0-12.9l246-178c5.3-3.8 12.7 0 12.7 6.5v46.8z")), t.LikeFill = u("like", a, i(r, "M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z")), t.LockFill = u("lock", a, i(r, "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM540 701v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 1 1 56 0zm152-237H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224z")), t.LinkedinFill = u("linkedin", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z")), t.MailFill = u("mail", a, i(r, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z")), t.MedicineBoxFill = u("medicine-box", a, i(r, "M839.2 278.1a32 32 0 0 0-30.4-22.1H736V144c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32v112h-72.8a31.9 31.9 0 0 0-30.4 22.1L112 502v378c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V502l-72.8-223.9zM660 628c0 4.4-3.6 8-8 8H544v108c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V636H372c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h108V464c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v108h108c4.4 0 8 3.6 8 8v48zm4-372H360v-72h304v72z")), t.MediumCircleFill = u("medium-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm256 253.7l-40.8 39.1c-3.6 2.7-5.3 7.1-4.6 11.4v287.7c-.7 4.4 1 8.8 4.6 11.4l40 39.1v8.7H566.4v-8.3l41.3-40.1c4.1-4.1 4.1-5.3 4.1-11.4V422.5l-115 291.6h-15.5L347.5 422.5V618c-1.2 8.2 1.7 16.5 7.5 22.4l53.8 65.1v8.7H256v-8.7l53.8-65.1a26.1 26.1 0 0 0 7-22.4V392c.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5 100.9-251.3H768v8.5z")), t.MediumSquareFill = u("medium-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM768 317.7l-40.8 39.1c-3.6 2.7-5.3 7.1-4.6 11.4v287.7c-.7 4.4 1 8.8 4.6 11.4l40 39.1v8.7H566.4v-8.3l41.3-40.1c4.1-4.1 4.1-5.3 4.1-11.4V422.5l-115 291.6h-15.5L347.5 422.5V618c-1.2 8.2 1.7 16.5 7.5 22.4l53.8 65.1v8.7H256v-8.7l53.8-65.1a26.1 26.1 0 0 0 7-22.4V392c.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5 100.9-251.3H768v8.5z")), t.MehFill = u("meh", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm384 200c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v48zm16-152a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z")), t.MessageFill = u("message", a, i(r, "M924.3 338.4a447.57 447.57 0 0 0-96.1-143.3 443.09 443.09 0 0 0-143-96.3A443.91 443.91 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.08 444.08 0 0 0-141.7 96.5 445 445 0 0 0-95 142.8A449.89 449.89 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.72 447.72 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142 23.5-55.2 35.5-113.9 35.8-174.5.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.4 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48z")), t.MinusCircleFill = u("minus-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z")), t.MinusSquareFill = u("minus-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM704 536c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z")), t.MobileFill = u("mobile", a, i(r, "M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zM512 824c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z")), t.MoneyCollectFill = u("money-collect", a, i(r, "M911.5 699.7a8 8 0 0 0-10.3-4.8L840 717.2V179c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V762c0 3.3 2.1 6.3 5.3 7.5L501 909.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zm-243.8-377L564 514.3h57.6c4.4 0 8 3.6 8 8v27.1c0 4.4-3.6 8-8 8h-76.3v39h76.3c4.4 0 8 3.6 8 8v27.1c0 4.4-3.6 8-8 8h-76.3V703c0 4.4-3.6 8-8 8h-49.9c-4.4 0-8-3.6-8-8v-63.4h-76c-4.4 0-8-3.6-8-8v-27.1c0-4.4 3.6-8 8-8h76v-39h-76c-4.4 0-8-3.6-8-8v-27.1c0-4.4 3.6-8 8-8h57L356.5 322.8c-2.1-3.8-.7-8.7 3.2-10.8 1.2-.7 2.5-1 3.8-1h55.7a8 8 0 0 1 7.1 4.4L511 484.2h3.3L599 315.4c1.3-2.7 4.1-4.4 7.1-4.4h54.5c4.4 0 8 3.6 8.1 7.9 0 1.3-.4 2.6-1 3.8z")), t.PauseCircleFill = u("pause-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-80 600c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z")), t.PayCircleFill = u("pay-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm166.6 246.8L567.5 515.6h62c4.4 0 8 3.6 8 8v29.9c0 4.4-3.6 8-8 8h-82V603h82c4.4 0 8 3.6 8 8v29.9c0 4.4-3.6 8-8 8h-82V717c0 4.4-3.6 8-8 8h-54.3c-4.4 0-8-3.6-8-8v-68.1h-81.7c-4.4 0-8-3.6-8-8V611c0-4.4 3.6-8 8-8h81.7v-41.5h-81.7c-4.4 0-8-3.6-8-8v-29.9c0-4.4 3.6-8 8-8h61.4L345.4 310.8a8.07 8.07 0 0 1 7-11.9h60.7c3 0 5.8 1.7 7.1 4.4l90.6 180h3.4l90.6-180a8 8 0 0 1 7.1-4.4h59.5c4.4 0 8 3.6 8 8 .2 1.4-.2 2.7-.8 3.9z")), t.NotificationFill = u("notification", a, i(r, "M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.6c-3.7 11.6-5.6 23.9-5.6 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1z")), t.PhoneFill = u("phone", a, i(r, "M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553 395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z")), t.PictureFill = u("picture", a, i(r, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm513.9 437.1a8.11 8.11 0 0 1-5.2 1.9H177.2c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l99.4 118 158.1-187.5c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2z")), t.PieChartFill = u("pie-chart", a, i(r, "M863.1 518.5H505.5V160.9c0-4.4-3.6-8-8-8h-26a398.57 398.57 0 0 0-282.5 117 397.47 397.47 0 0 0-85.6 127C82.6 446.2 72 498.5 72 552.5S82.6 658.7 103.4 708c20.1 47.5 48.9 90.3 85.6 127 36.7 36.7 79.4 65.5 127 85.6a396.64 396.64 0 0 0 155.6 31.5 398.57 398.57 0 0 0 282.5-117c36.7-36.7 65.5-79.4 85.6-127a396.64 396.64 0 0 0 31.5-155.6v-26c-.1-4.4-3.7-8-8.1-8zM951 463l-2.6-28.2c-8.5-92-49.3-178.8-115.1-244.3A398.5 398.5 0 0 0 588.4 75.6L560.1 73c-4.7-.4-8.7 3.2-8.7 7.9v383.7c0 4.4 3.6 8 8 8l383.6-1c4.7-.1 8.4-4 8-8.6z")), t.PlayCircleFill = u("play-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z")), t.PlaySquareFill = u("play-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM641.7 520.8L442.3 677.6c-7.4 5.8-18.3.6-18.3-8.8V355.3c0-9.4 10.9-14.7 18.3-8.8l199.4 156.7a11.2 11.2 0 0 1 0 17.6z")), t.PlusCircleFill = u("plus-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z")), t.PlusSquareFill = u("plus-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM704 536c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z")), t.PoundCircleFill = u("pound-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm146 658c0 4.4-3.6 8-8 8H376.2c-4.4 0-8-3.6-8-8v-38.5c0-3.7 2.5-6.9 6.1-7.8 44-10.9 72.8-49 72.8-94.2 0-14.7-2.5-29.4-5.9-44.2H374c-4.4 0-8-3.6-8-8v-30c0-4.4 3.6-8 8-8h53.7c-7.8-25.1-14.6-50.7-14.6-77.1 0-75.8 58.6-120.3 151.5-120.3 26.5 0 51.4 5.5 70.3 12.7 3.1 1.2 5.2 4.2 5.2 7.5v39.5a8 8 0 0 1-10.6 7.6c-17.9-6.4-39-10.5-60.4-10.5-53.3 0-87.3 26.6-87.3 70.2 0 24.7 6.2 47.9 13.4 70.5h112c4.4 0 8 3.6 8 8v30c0 4.4-3.6 8-8 8h-98.6c3.1 13.2 5.3 26.9 5.3 41 0 40.7-16.5 73.9-43.9 91.1v4.7h180c4.4 0 8 3.6 8 8V722z")), t.PrinterFill = u("printer", a, i(r, "M732 120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v148h440V120zm120 212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM664 844H360V568h304v276zm164-360c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-40c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v40z")), t.ProfileFill = u("profile", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM380 696c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm0-144c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm0-144c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm304 272c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm0-144c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm0-144c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48z")), t.ProjectFill = u("project", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM368 744c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v464zm192-280c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v184zm192 72c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v256z")), t.PushpinFill = u("pushpin", a, i(r, "M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3-15.4 12.3-16.6 35.4-2.7 49.4l181.7 181.7-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8z")), t.PropertySafetyFill = u("property-safety", a, i(r, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM648.3 332.8l-87.7 161.1h45.7c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4v29.7h63.4c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4V658c0 5.5-4.5 10-10 10h-41.3c-5.5 0-10-4.5-10-10v-51.8h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h63.1v-29.7h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h45.2l-88-161.1c-2.6-4.8-.9-10.9 4-13.6 1.5-.8 3.1-1.2 4.8-1.2h46c3.8 0 7.2 2.1 8.9 5.5l72.9 144.3 73.2-144.3a10 10 0 0 1 8.9-5.5h45c5.5 0 10 4.5 10 10 .1 1.7-.3 3.3-1.1 4.8z")), t.QqCircleFill = u("qq-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm210.5 612.4c-11.5 1.4-44.9-52.7-44.9-52.7 0 31.3-16.2 72.2-51.1 101.8 16.9 5.2 54.9 19.2 45.9 34.4-7.3 12.3-125.6 7.9-159.8 4-34.2 3.8-152.5 8.3-159.8-4-9.1-15.2 28.9-29.2 45.8-34.4-35-29.5-51.1-70.4-51.1-101.8 0 0-33.4 54.1-44.9 52.7-5.4-.7-12.4-29.6 9.4-99.7 10.3-33 22-60.5 40.2-105.8-3.1-116.9 45.3-215 160.4-215 113.9 0 163.3 96.1 160.4 215 18.1 45.2 29.9 72.8 40.2 105.8 21.7 70.1 14.6 99.1 9.3 99.7z")), t.QqSquareFill = u("qq-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM722.5 676.4c-11.5 1.4-44.9-52.7-44.9-52.7 0 31.3-16.2 72.2-51.1 101.8 16.9 5.2 54.9 19.2 45.9 34.4-7.3 12.3-125.6 7.9-159.8 4-34.2 3.8-152.5 8.3-159.8-4-9.1-15.2 28.9-29.2 45.8-34.4-35-29.5-51.1-70.4-51.1-101.8 0 0-33.4 54.1-44.9 52.7-5.4-.7-12.4-29.6 9.4-99.7 10.3-33 22-60.5 40.2-105.8-3.1-116.9 45.3-215 160.4-215 113.9 0 163.3 96.1 160.4 215 18.1 45.2 29.9 72.8 40.2 105.8 21.7 70.1 14.6 99.1 9.3 99.7z")), t.QuestionCircleFill = u("question-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z")), t.ReadFill = u("read", a, i(r, "M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM404 553.5c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm416 140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45z")), t.ReconciliationFill = u("reconciliation", a, i(r, "M676 623c-18.8 0-34 15.2-34 34s15.2 34 34 34 34-15.2 34-34-15.2-34-34-34zm204-455H668c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56H264c-17.7 0-32 14.3-32 32v200h-88c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h336c17.7 0 32-14.3 32-32v-16h368c17.7 0 32-14.3 32-32V200c0-17.7-14.3-32-32-32zM448 848H176V616h272v232zm0-296H176v-88h272v88zm20-272v-48h72v-56h64v56h72v48H468zm180 168v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8zm28 301c-50.8 0-92-41.2-92-92s41.2-92 92-92 92 41.2 92 92-41.2 92-92 92zm92-245c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-96c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v96zm-92 61c-50.8 0-92 41.2-92 92s41.2 92 92 92 92-41.2 92-92-41.2-92-92-92zm0 126c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.2 34-34 34z")), t.RedEnvelopeFill = u("red-envelope", a, i(r, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM647 470.4l-87.2 161h45.9c4.6 0 8.4 3.8 8.4 8.4v25.1c0 4.6-3.8 8.4-8.4 8.4h-63.3v28.6h63.3c4.6 0 8.4 3.8 8.4 8.4v25c.2 4.6-3.6 8.5-8.2 8.5h-63.3v49.9c0 4.6-3.8 8.4-8.4 8.4h-43.7c-4.6 0-8.4-3.8-8.4-8.4v-49.9h-63c-4.6 0-8.4-3.8-8.4-8.4v-25.1c0-4.6 3.8-8.4 8.4-8.4h63v-28.6h-63c-4.6 0-8.4-3.8-8.4-8.4v-25.1c0-4.6 3.8-8.4 8.4-8.4h45.4l-87.5-161c-2.2-4.1-.7-9.1 3.4-11.4 1.3-.6 2.6-1 3.9-1h48.8c3.2 0 6.1 1.8 7.5 4.6l71.9 141.8 71.9-141.9a8.5 8.5 0 0 1 7.5-4.6h47.8c4.6 0 8.4 3.8 8.4 8.4-.1 1.5-.5 2.9-1.1 4.1zM512.6 323L289 148h446L512.6 323z")), t.RedditCircleFill = u("reddit-circle", a, i(r, "M584 548a36 36 0 1 0 72 0 36 36 0 1 0-72 0zm144-108a35.9 35.9 0 0 0-32.5 20.6c18.8 14.3 34.4 30.7 45.9 48.8A35.98 35.98 0 0 0 728 440zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm245 477.9c4.6 13.5 7 27.6 7 42.1 0 99.4-112.8 180-252 180s-252-80.6-252-180c0-14.5 2.4-28.6 7-42.1A72.01 72.01 0 0 1 296 404c27.1 0 50.6 14.9 62.9 37 36.2-19.8 80.2-32.8 128.1-36.1l58.4-131.1c4.3-9.8 15.2-14.8 25.5-11.8l91.6 26.5a54.03 54.03 0 0 1 101.6 25.6c0 29.8-24.2 54-54 54-23.5 0-43.5-15.1-50.9-36.1L577 308.3l-43 96.5c49.1 3 94.2 16.1 131.2 36.3 12.3-22.1 35.8-37 62.9-37 39.8 0 72 32.2 72 72-.1 29.3-17.8 54.6-43.1 65.8zm-171.3 83c-14.9 11.7-44.3 24.3-73.7 24.3s-58.9-12.6-73.7-24.3c-9.3-7.3-22.7-5.7-30 3.6-7.3 9.3-5.7 22.7 3.6 30 25.7 20.4 65 33.5 100.1 33.5 35.1 0 74.4-13.1 100.2-33.5 9.3-7.3 10.9-20.8 3.6-30a21.46 21.46 0 0 0-30.1-3.6zM296 440a35.98 35.98 0 0 0-13.4 69.4c11.5-18.1 27.1-34.5 45.9-48.8A35.9 35.9 0 0 0 296 440zm72 108a36 36 0 1 0 72 0 36 36 0 1 0-72 0z")), t.RedditSquareFill = u("reddit-square", a, i(r, "M296 440a35.98 35.98 0 0 0-13.4 69.4c11.5-18.1 27.1-34.5 45.9-48.8A35.9 35.9 0 0 0 296 440zm289.7 184.9c-14.9 11.7-44.3 24.3-73.7 24.3s-58.9-12.6-73.7-24.3c-9.3-7.3-22.7-5.7-30 3.6-7.3 9.3-5.7 22.7 3.6 30 25.7 20.4 65 33.5 100.1 33.5 35.1 0 74.4-13.1 100.2-33.5 9.3-7.3 10.9-20.8 3.6-30a21.46 21.46 0 0 0-30.1-3.6zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM757 541.9c4.6 13.5 7 27.6 7 42.1 0 99.4-112.8 180-252 180s-252-80.6-252-180c0-14.5 2.4-28.6 7-42.1A72.01 72.01 0 0 1 296 404c27.1 0 50.6 14.9 62.9 37 36.2-19.8 80.2-32.8 128.1-36.1l58.4-131.1c4.3-9.8 15.2-14.8 25.5-11.8l91.6 26.5a54.03 54.03 0 0 1 101.6 25.6c0 29.8-24.2 54-54 54-23.5 0-43.5-15.1-50.9-36.1L577 308.3l-43 96.5c49.1 3 94.2 16.1 131.2 36.3 12.3-22.1 35.8-37 62.9-37 39.8 0 72 32.2 72 72-.1 29.3-17.8 54.6-43.1 65.8zM584 548a36 36 0 1 0 72 0 36 36 0 1 0-72 0zm144-108a35.9 35.9 0 0 0-32.5 20.6c18.8 14.3 34.4 30.7 45.9 48.8A35.98 35.98 0 0 0 728 440zM368 548a36 36 0 1 0 72 0 36 36 0 1 0-72 0z")), t.RestFill = u("rest", a, i(r, "M832 256h-28.1l-35.7-120.9c-4-13.7-16.5-23.1-30.7-23.1h-451c-14.3 0-26.8 9.4-30.7 23.1L220.1 256H192c-17.7 0-32 14.3-32 32v28c0 4.4 3.6 8 8 8h45.8l47.7 558.7a32 32 0 0 0 31.9 29.3h429.2a32 32 0 0 0 31.9-29.3L802.2 324H856c4.4 0 8-3.6 8-8v-28c0-17.7-14.3-32-32-32zM508 704c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144zM291 256l22.4-76h397.2l22.4 76H291zm137 304a80 80 0 1 0 160 0 80 80 0 1 0-160 0z")), t.RightCircleFill = u("right-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z")), t.RocketFill = u("rocket", a, i(r, "M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 0 0-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0 0 43.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0 0 43.1-30.5 97.52 97.52 0 0 0 21.4-60.8c0-8.4-1.1-16.4-3.1-23.8L864 736zM512 352a48.01 48.01 0 0 1 0 96 48.01 48.01 0 0 1 0-96zm116.1 432.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5s-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 0 1-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5z")), t.RightSquareFill = u("right-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM658.7 518.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L558.6 512 413.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z")), t.SafetyCertificateFill = u("safety-certificate", a, i(r, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM694.5 340.7L481.9 633.4a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.1 0 10 2.5 13 6.6l64.7 89 150.9-207.8c3-4.1 7.8-6.6 13-6.6H688c6.5.1 10.3 7.5 6.5 12.8z")), t.SaveFill = u("save", a, i(r, "M893.3 293.3L730.7 130.7c-12-12-28.3-18.7-45.3-18.7H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 176h256v112H384V176zm128 554c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144zm0-224c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80z")), t.ScheduleFill = u("schedule", a, i(r, "M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zM424 688c0 4.4-3.6 8-8 8H232c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm0-136c0 4.4-3.6 8-8 8H232c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm374.5-91.3l-165 228.7a15.9 15.9 0 0 1-25.8 0L493.5 531.2c-3.8-5.3 0-12.7 6.5-12.7h54.9c5.1 0 9.9 2.5 12.9 6.6l52.8 73.1 103.7-143.7c3-4.2 7.8-6.6 12.9-6.6H792c6.5.1 10.3 7.5 6.5 12.8z")), t.SecurityScanFill = u("security-scan", a, i(r, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM626.8 554c-48.5 48.5-123 55.2-178.6 20.1l-77.5 77.5a8.03 8.03 0 0 1-11.3 0l-34-34a8.03 8.03 0 0 1 0-11.3l77.5-77.5c-35.1-55.7-28.4-130.1 20.1-178.6 56.3-56.3 147.5-56.3 203.8 0 56.3 56.3 56.3 147.5 0 203.8zm-158.54-45.27a80.1 80.1 0 1 0 113.27-113.28 80.1 80.1 0 1 0-113.27 113.28z")), t.SettingFill = u("setting", a, i(r, "M512.5 390.6c-29.9 0-57.9 11.6-79.1 32.8-21.1 21.2-32.8 49.2-32.8 79.1 0 29.9 11.7 57.9 32.8 79.1 21.2 21.1 49.2 32.8 79.1 32.8 29.9 0 57.9-11.7 79.1-32.8 21.1-21.2 32.8-49.2 32.8-79.1 0-29.9-11.7-57.9-32.8-79.1a110.96 110.96 0 0 0-79.1-32.8zm412.3 235.5l-65.4-55.9c3.1-19 4.7-38.4 4.7-57.7s-1.6-38.8-4.7-57.7l65.4-55.9a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a442.5 442.5 0 0 0-79.6-137.7l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.2 28.9c-30-24.6-63.4-44-99.6-57.5l-15.7-84.9a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52-9.4-106.8-9.4-158.8 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.3a353.44 353.44 0 0 0-98.9 57.3l-81.8-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a445.93 445.93 0 0 0-79.6 137.7l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.2 56.5c-3.1 18.8-4.6 38-4.6 57 0 19.2 1.5 38.4 4.6 57l-66 56.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.3 44.8 96.8 79.6 137.7l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.8-29.1c29.8 24.5 63 43.9 98.9 57.3l15.8 85.3a32.05 32.05 0 0 0 25.8 25.7l2.7.5a448.27 448.27 0 0 0 158.8 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c4.3-12.4.6-26.3-9.5-35zm-412.3 52.2c-97.1 0-175.8-78.7-175.8-175.8s78.7-175.8 175.8-175.8 175.8 78.7 175.8 175.8-78.7 175.8-175.8 175.8z")), t.ShopFill = u("shop", a, i(r, "M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h274V736h128v176h274c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zm-72 568H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4 22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 3-1.3 6-2.6 9-4v242.2zm0-568.1H214v-88h596v88z")), t.ShoppingFill = u("shopping", a, i(r, "M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-208 0H400v-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16z")), t.SketchCircleFill = u("sketch-circle", a, i(r, "M582.3 625.6l147.9-166.3h-63.4zm90-202.3h62.5l-92.1-115.1zm-274.7 36L512 684.5l114.4-225.2zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm286.7 380.2L515.8 762.3c-1 1.1-2.4 1.7-3.8 1.7s-2.8-.6-3.8-1.7L225.3 444.2a5.14 5.14 0 0 1-.2-6.6L365.6 262c1-1.2 2.4-1.9 4-1.9h284.6c1.6 0 3 .7 4 1.9l140.5 175.6a4.9 4.9 0 0 1 0 6.6zm-190.5-20.9L512 326.1l-96.2 97.2zM420.3 301.1l-23.1 89.8 88.8-89.8zm183.4 0H538l88.8 89.8zm-222.4 7.1l-92.1 115.1h62.5zm-87.5 151.1l147.9 166.3-84.5-166.3z")), t.SketchSquareFill = u("sketch-square", a, i(r, "M608.2 423.3L512 326.1l-96.2 97.2zm-25.9 202.3l147.9-166.3h-63.4zm90-202.3h62.5l-92.1-115.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-81.3 332.2L515.8 762.3c-1 1.1-2.4 1.7-3.8 1.7s-2.8-.6-3.8-1.7L225.3 444.2a5.14 5.14 0 0 1-.2-6.6L365.6 262c1-1.2 2.4-1.9 4-1.9h284.6c1.6 0 3 .7 4 1.9l140.5 175.6a4.9 4.9 0 0 1 0 6.6zm-401.1 15.1L512 684.5l114.4-225.2zm-16.3-151.1l-92.1 115.1h62.5zm-87.5 151.1l147.9 166.3-84.5-166.3zm126.5-158.2l-23.1 89.8 88.8-89.8zm183.4 0H538l88.8 89.8z")), t.SkinFill = u("skin", a, i(r, "M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44z")), t.SlackCircleFill = u("slack-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM361.5 580.2c0 27.8-22.5 50.4-50.3 50.4a50.35 50.35 0 0 1-50.3-50.4c0-27.8 22.5-50.4 50.3-50.4h50.3v50.4zm134 134.4c0 27.8-22.5 50.4-50.3 50.4-27.8 0-50.3-22.6-50.3-50.4V580.2c0-27.8 22.5-50.4 50.3-50.4a50.35 50.35 0 0 1 50.3 50.4v134.4zm-50.2-218.4h-134c-27.8 0-50.3-22.6-50.3-50.4 0-27.8 22.5-50.4 50.3-50.4h134c27.8 0 50.3 22.6 50.3 50.4-.1 27.9-22.6 50.4-50.3 50.4zm0-134.4c-13.3 0-26.1-5.3-35.6-14.8S395 324.8 395 311.4c0-27.8 22.5-50.4 50.3-50.4 27.8 0 50.3 22.6 50.3 50.4v50.4h-50.3zm83.7-50.4c0-27.8 22.5-50.4 50.3-50.4 27.8 0 50.3 22.6 50.3 50.4v134.4c0 27.8-22.5 50.4-50.3 50.4-27.8 0-50.3-22.6-50.3-50.4V311.4zM579.3 765c-27.8 0-50.3-22.6-50.3-50.4v-50.4h50.3c27.8 0 50.3 22.6 50.3 50.4 0 27.8-22.5 50.4-50.3 50.4zm134-134.4h-134c-13.3 0-26.1-5.3-35.6-14.8S529 593.6 529 580.2c0-27.8 22.5-50.4 50.3-50.4h134c27.8 0 50.3 22.6 50.3 50.4 0 27.8-22.5 50.4-50.3 50.4zm0-134.4H663v-50.4c0-27.8 22.5-50.4 50.3-50.4s50.3 22.6 50.3 50.4c0 27.8-22.5 50.4-50.3 50.4z")), t.SlackSquareFill = u("slack-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM529 311.4c0-27.8 22.5-50.4 50.3-50.4 27.8 0 50.3 22.6 50.3 50.4v134.4c0 27.8-22.5 50.4-50.3 50.4-27.8 0-50.3-22.6-50.3-50.4V311.4zM361.5 580.2c0 27.8-22.5 50.4-50.3 50.4a50.35 50.35 0 0 1-50.3-50.4c0-27.8 22.5-50.4 50.3-50.4h50.3v50.4zm134 134.4c0 27.8-22.5 50.4-50.3 50.4-27.8 0-50.3-22.6-50.3-50.4V580.2c0-27.8 22.5-50.4 50.3-50.4a50.35 50.35 0 0 1 50.3 50.4v134.4zm-50.2-218.4h-134c-27.8 0-50.3-22.6-50.3-50.4 0-27.8 22.5-50.4 50.3-50.4h134c27.8 0 50.3 22.6 50.3 50.4-.1 27.9-22.6 50.4-50.3 50.4zm0-134.4c-13.3 0-26.1-5.3-35.6-14.8S395 324.8 395 311.4c0-27.8 22.5-50.4 50.3-50.4 27.8 0 50.3 22.6 50.3 50.4v50.4h-50.3zm134 403.2c-27.8 0-50.3-22.6-50.3-50.4v-50.4h50.3c27.8 0 50.3 22.6 50.3 50.4 0 27.8-22.5 50.4-50.3 50.4zm134-134.4h-134a50.35 50.35 0 0 1-50.3-50.4c0-27.8 22.5-50.4 50.3-50.4h134c27.8 0 50.3 22.6 50.3 50.4 0 27.8-22.5 50.4-50.3 50.4zm0-134.4H663v-50.4c0-27.8 22.5-50.4 50.3-50.4s50.3 22.6 50.3 50.4c0 27.8-22.5 50.4-50.3 50.4z")), t.SkypeFill = u("skype", a, i(r, "M883.7 578.6c4.1-22.5 6.3-45.5 6.3-68.5 0-51-10-100.5-29.7-147-19-45-46.3-85.4-81-120.1a375.79 375.79 0 0 0-120.1-80.9c-46.6-19.7-96-29.7-147-29.7-24 0-48.1 2.3-71.5 6.8A225.1 225.1 0 0 0 335.6 113c-59.7 0-115.9 23.3-158.1 65.5A222.25 222.25 0 0 0 112 336.6c0 38 9.8 75.4 28.1 108.4-3.7 21.4-5.7 43.3-5.7 65.1 0 51 10 100.5 29.7 147 19 45 46.2 85.4 80.9 120.1 34.7 34.7 75.1 61.9 120.1 80.9 46.6 19.7 96 29.7 147 29.7 22.2 0 44.4-2 66.2-5.9 33.5 18.9 71.3 29 110 29 59.7 0 115.9-23.2 158.1-65.5 42.3-42.2 65.5-98.4 65.5-158.1.1-38-9.7-75.5-28.2-108.7zm-370 162.9c-134.2 0-194.2-66-194.2-115.4 0-25.4 18.7-43.1 44.5-43.1 57.4 0 42.6 82.5 149.7 82.5 54.9 0 85.2-29.8 85.2-60.3 0-18.3-9-38.7-45.2-47.6l-119.4-29.8c-96.1-24.1-113.6-76.1-113.6-124.9 0-101.4 95.5-139.5 185.2-139.5 82.6 0 180 45.7 180 106.5 0 26.1-22.6 41.2-48.4 41.2-49 0-40-67.8-138.7-67.8-49 0-76.1 22.2-76.1 53.9s38.7 41.8 72.3 49.5l88.4 19.6c96.8 21.6 121.3 78.1 121.3 131.3 0 82.3-63.3 143.9-191 143.9z")), t.SlidersFill = u("sliders", a, i(r, "M904 296h-66v-96c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v96h-66c-4.4 0-8 3.6-8 8v416c0 4.4 3.6 8 8 8h66v96c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-96h66c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8zm-584-72h-66v-56c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v56h-66c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h66v56c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-56h66c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zm292 180h-66V232c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v172h-66c-4.4 0-8 3.6-8 8v200c0 4.4 3.6 8 8 8h66v172c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V620h66c4.4 0 8-3.6 8-8V412c0-4.4-3.6-8-8-8z")), t.SmileFill = u("smile", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 0 1 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 0 1 8 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z")), t.SnippetsFill = u("snippets", a, i(r, "M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 486H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z")), t.SoundFill = u("sound", a, i(r, "M892.1 737.8l-110.3-63.7a15.9 15.9 0 0 0-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0 0 21.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0 0 21.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 0 0-21.7-5.9L746 287.8a15.99 15.99 0 0 0-5.8 21.8L760 344zm174 132H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zM625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1z")), t.StarFill = u("star", a, i(r, "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z")), t.StepBackwardFill = u("step-backward", a, i(c, "M347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 0 0 0 33.9M330 864h-64a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v688a8 8 0 0 1-8 8")), t.StepForwardFill = u("step-forward", a, i(c, "M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 0 1 0 33.9M694 864h64a8 8 0 0 0 8-8V168a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v688a8 8 0 0 0 8 8")), t.StopFill = u("stop", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm234.8 736.5L223.5 277.2c16-19.7 34-37.7 53.7-53.7l523.3 523.3c-16 19.6-34 37.7-53.7 53.7z")), t.SwitcherFill = u("switcher", a, i(r, "M752 240H144c-17.7 0-32 14.3-32 32v608c0 17.7 14.3 32 32 32h608c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32zM596 606c0 4.4-3.6 8-8 8H308c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h280c4.4 0 8 3.6 8 8v48zm284-494H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h576v576c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32z")), t.TabletFill = u("tablet", a, i(r, "M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM512 824c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z")), t.TagFill = u("tag", a, i(r, "M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 0 0 0 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM699 387c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z")), t.TagsFill = u("tags", a, i(r, "M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm122.7-533.4c18.7-18.7 49.1-18.7 67.9 0 18.7 18.7 18.7 49.1 0 67.9-18.7 18.7-49.1 18.7-67.9 0-18.7-18.7-18.7-49.1 0-67.9zm283.8 282.9l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z")), t.TaobaoCircleFill = u("taobao-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM315.7 291.5c27.3 0 49.5 22.1 49.5 49.4s-22.1 49.4-49.5 49.4a49.4 49.4 0 1 1 0-98.8zM366.9 578c-13.6 42.3-10.2 26.7-64.4 144.5l-78.5-49s87.7-79.8 105.6-116.2c19.2-38.4-21.1-58.9-21.1-58.9l-60.2-37.5 32.7-50.2c45.4 33.7 48.7 36.6 79.2 67.2 23.8 23.9 20.7 56.8 6.7 100.1zm427.2 55c-15.3 143.8-202.4 90.3-202.4 90.3l10.2-41.1 43.3 9.3c80 5 72.3-64.9 72.3-64.9V423c.6-77.3-72.6-85.4-204.2-38.3l30.6 8.3c-2.5 9-12.5 23.2-25.2 38.6h176v35.6h-99.1v44.5h98.7v35.7h-98.7V622c14.9-4.8 28.6-11.5 40.5-20.5l-8.7-32.5 46.5-14.4 38.8 94.9-57.3 23.9-10.2-37.8c-25.6 19.5-78.8 48-171.8 45.4-99.2 2.6-73.7-112-73.7-112l2.5-1.3H472c-.5 14.7-6.6 38.7 1.7 51.8 6.8 10.8 24.2 12.6 35.3 13.1 1.3.1 2.6.1 3.9.1v-85.3h-101v-35.7h101v-44.5H487c-22.7 24.1-43.5 44.1-43.5 44.1l-30.6-26.7c21.7-22.9 43.3-59.1 56.8-83.2-10.9 4.4-22 9.2-33.6 14.2-11.2 14.3-24.2 29-38.7 43.5.5.8-50-28.4-50-28.4 52.2-44.4 81.4-139.9 81.4-139.9l72.5 20.4s-5.9 14-18.4 35.6c290.3-82.3 307.4 50.5 307.4 50.5s19.1 91.8 3.8 235.7z")), t.TaobaoSquareFill = u("taobao-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM315.7 291.5c27.3 0 49.5 22.1 49.5 49.4s-22.1 49.4-49.5 49.4a49.4 49.4 0 1 1 0-98.8zM366.9 578c-13.6 42.3-10.2 26.7-64.4 144.5l-78.5-49s87.7-79.8 105.6-116.2c19.2-38.4-21.1-58.9-21.1-58.9l-60.2-37.5 32.7-50.2c45.4 33.7 48.7 36.6 79.2 67.2 23.8 23.9 20.7 56.8 6.7 100.1zm427.2 55c-15.3 143.8-202.4 90.3-202.4 90.3l10.2-41.1 43.3 9.3c80 5 72.3-64.9 72.3-64.9V423c.6-77.3-72.6-85.4-204.2-38.3l30.6 8.3c-2.5 9-12.5 23.2-25.2 38.6h176v35.6h-99.1v44.5h98.7v35.7h-98.7V622c14.9-4.8 28.6-11.5 40.5-20.5l-8.7-32.5 46.5-14.4 38.8 94.9-57.3 23.9-10.2-37.8c-25.6 19.5-78.8 48-171.8 45.4-99.2 2.6-73.7-112-73.7-112l2.5-1.3H472c-.5 14.7-6.6 38.7 1.7 51.8 6.8 10.8 24.2 12.6 35.3 13.1 1.3.1 2.6.1 3.9.1v-85.3h-101v-35.7h101v-44.5H487c-22.7 24.1-43.5 44.1-43.5 44.1l-30.6-26.7c21.7-22.9 43.3-59.1 56.8-83.2-10.9 4.4-22 9.2-33.6 14.2-11.2 14.3-24.2 29-38.7 43.5.5.8-50-28.4-50-28.4 52.2-44.4 81.4-139.9 81.4-139.9l72.5 20.4s-5.9 14-18.4 35.6c290.3-82.3 307.4 50.5 307.4 50.5s19.1 91.8 3.8 235.7z")), t.ToolFill = u("tool", a, i(r, "M865.3 244.7c-.3-.3-61.1 59.8-182.1 180.6l-84.9-84.9 180.9-180.9c-95.2-57.3-217.5-42.6-296.8 36.7A244.42 244.42 0 0 0 419 432l1.8 6.7-283.5 283.4c-6.2 6.2-6.2 16.4 0 22.6l141.4 141.4c6.2 6.2 16.4 6.2 22.6 0l283.3-283.3 6.7 1.8c83.7 22.3 173.6-.9 236-63.3 79.4-79.3 94.1-201.6 38-296.6z")), t.ThunderboltFill = u("thunderbolt", a, i(r, "M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z")), t.TrademarkCircleFill = u("trademark-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm164.7 660.2c-1.1.5-2.3.8-3.5.8h-62c-3.1 0-5.9-1.8-7.2-4.6l-74.6-159.2h-88.7V717c0 4.4-3.6 8-8 8H378c-4.4 0-8-3.6-8-8V307c0-4.4 3.6-8 8-8h155.6c98.8 0 144.2 59.9 144.2 131.1 0 70.2-43.6 106.4-78.4 119.2l80.8 164.2c2.1 3.9.4 8.7-3.5 10.7zM523.9 357h-83.4v148H522c53 0 82.8-25.6 82.8-72.4 0-50.3-32.9-75.6-80.9-75.6z")), t.TwitterCircleFill = u("twitter-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z")), t.TrophyFill = u("trophy", a, i(r, "M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 0 0-44 44v148c0 81.7 60 149.6 138.2 162C265.6 630.2 359 721.8 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.8 758.4 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 0 0-44-44zM248 439.6c-37.1-11.9-64-46.7-64-87.6V232h64v207.6zM840 352c0 41-26.9 75.8-64 87.6V232h64v120z")), t.TwitterSquareFill = u("twitter-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM727.3 401.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z")), t.UnlockFill = u("unlock", a, i(r, "M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM540 701v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 1 1 56 0z")), t.UpCircleFill = u("up-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm178 555h-46.9c-10.2 0-19.9-4.9-25.9-13.2L512 460.4 406.8 605.8c-6 8.3-15.6 13.2-25.9 13.2H334c-6.5 0-10.3-7.4-6.5-12.7l178-246c3.2-4.4 9.7-4.4 12.9 0l178 246c3.9 5.3.1 12.7-6.4 12.7z")), t.UpSquareFill = u("up-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM690 624h-46.9c-10.2 0-19.9-4.9-25.9-13.2L512 465.4 406.8 610.8c-6 8.3-15.6 13.2-25.9 13.2H334c-6.5 0-10.3-7.4-6.5-12.7l178-246c3.2-4.4 9.7-4.4 12.9 0l178 246c3.9 5.3.1 12.7-6.4 12.7z")), t.UsbFill = u("usb", a, i(r, "M408 312h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm352 120V144c0-17.7-14.3-32-32-32H296c-17.7 0-32 14.3-32 32v288c-66.2 0-120 52.1-120 116v356c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8V548c0-63.9-53.8-116-120-116zm-72 0H336V184h352v248zM568 312h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z")), t.WalletFill = u("wallet", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 464H528V448h320v128zm-268-64a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")), t.VideoCameraFill = u("video-camera", a, i(r, "M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM328 352c0 4.4-3.6 8-8 8H208c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v48zm560 273l-104-59.8V458.9L888 399v226z")), t.WarningFill = u("warning", a, i(r, "M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z")), t.WeiboCircleFill = u("weibo-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-44.4 672C353.1 736 236 680.4 236 588.9c0-47.8 30.2-103.1 82.3-155.3 69.5-69.6 150.6-101.4 181.1-70.8 13.5 13.5 14.8 36.8 6.1 64.6-4.5 14 13.1 6.3 13.1 6.3 56.2-23.6 105.2-25 123.1.7 9.6 13.7 8.6 32.8-.2 55.1-4.1 10.2 1.3 11.8 9 14.1 31.7 9.8 66.9 33.6 66.9 75.5.2 69.5-99.7 156.9-249.8 156.9zm207.3-290.8a34.9 34.9 0 0 0-7.2-34.1 34.68 34.68 0 0 0-33.1-10.7 18.24 18.24 0 0 1-7.6-35.7c24.1-5.1 50.1 2.3 67.7 21.9 17.7 19.6 22.4 46.3 14.9 69.8a18.13 18.13 0 0 1-22.9 11.7 18.18 18.18 0 0 1-11.8-22.9zm106 34.3s0 .1 0 0a21.1 21.1 0 0 1-26.6 13.7 21.19 21.19 0 0 1-13.6-26.7c11-34.2 4-73.2-21.7-101.8a104.04 104.04 0 0 0-98.9-32.1 21.14 21.14 0 0 1-25.1-16.3 21.07 21.07 0 0 1 16.2-25.1c49.4-10.5 102.8 4.8 139.1 45.1 36.3 40.2 46.1 95.1 30.6 143.2zm-334.5 6.1c-91.4 9-160.7 65.1-154.7 125.2 5.9 60.1 84.8 101.5 176.2 92.5 91.4-9.1 160.7-65.1 154.7-125.3-5.9-60.1-84.8-101.5-176.2-92.4zm80.2 141.7c-18.7 42.3-72.3 64.8-117.8 50.1-43.9-14.2-62.5-57.7-43.3-96.8 18.9-38.4 68-60.1 111.5-48.8 45 11.7 68 54.2 49.6 95.5zm-93-32.2c-14.2-5.9-32.4.2-41.2 13.9-8.8 13.8-4.7 30.2 9.3 36.6 14.3 6.5 33.2.3 42-13.8 8.8-14.3 4.2-30.6-10.1-36.7zm34.9-14.5c-5.4-2.2-12.2.5-15.4 5.8-3.1 5.4-1.4 11.5 4.1 13.8 5.5 2.3 12.6-.3 15.8-5.8 3-5.6 1-11.8-4.5-13.8z")), t.WechatFill = u("wechat", a, i(r, "M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 0 1 9.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 0 0 6.4-2.6 9 9 0 0 0 2.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 0 1-36 35.9z")), t.WindowsFill = u("windows", a, i(r, "M523.8 191.4v288.9h382V128.1zm0 642.2l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zm0 290.4L443 823.2V543.8H120.1z")), t.YahooFill = u("yahoo", a, i(r, "M937.3 231H824.7c-15.5 0-27.7 12.6-27.1 28.1l13.1 366h84.4l65.4-366.4c2.7-15.2-7.8-27.7-23.2-27.7zm-77.4 450.4h-14.1c-27.1 0-49.2 22.2-49.2 49.3v14.1c0 27.1 22.2 49.3 49.2 49.3h14.1c27.1 0 49.2-22.2 49.2-49.3v-14.1c0-27.1-22.2-49.3-49.2-49.3zM402.6 231C216.2 231 65 357 65 512.5S216.2 794 402.6 794s337.6-126 337.6-281.5S589.1 231 402.6 231zm225.2 225.2h-65.3L458.9 559.8v65.3h84.4v56.3H318.2v-56.3h84.4v-65.3L242.9 399.9h-37v-56.3h168.5v56.3h-37l93.4 93.5 28.1-28.1V400h168.8v56.2z")), t.WeiboSquareFill = u("weibo-square", a, i(r, "M433.6 595.1c-14.2-5.9-32.4.2-41.2 13.9-8.8 13.8-4.7 30.2 9.3 36.6 14.3 6.5 33.2.3 42-13.8 8.8-14.3 4.2-30.6-10.1-36.7zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM467.6 736C353.1 736 236 680.4 236 588.9c0-47.8 30.2-103.1 82.3-155.3 69.5-69.6 150.6-101.4 181.1-70.8 13.5 13.5 14.8 36.8 6.1 64.6-4.5 14 13.1 6.3 13.1 6.3 56.2-23.6 105.2-25 123.1.7 9.6 13.7 8.6 32.8-.2 55.1-4.1 10.2 1.3 11.8 9 14.1 31.7 9.8 66.9 33.6 66.9 75.5.2 69.5-99.7 156.9-249.8 156.9zm207.3-290.8a34.9 34.9 0 0 0-7.2-34.1 34.68 34.68 0 0 0-33.1-10.7 18.24 18.24 0 0 1-7.6-35.7c24.1-5.1 50.1 2.3 67.7 21.9 17.7 19.6 22.4 46.3 14.9 69.8a18.13 18.13 0 0 1-22.9 11.7 18.18 18.18 0 0 1-11.8-22.9zm106 34.3s0 .1 0 0a21.1 21.1 0 0 1-26.6 13.7 21.19 21.19 0 0 1-13.6-26.7c11-34.2 4-73.2-21.7-101.8a104.04 104.04 0 0 0-98.9-32.1 21.14 21.14 0 0 1-25.1-16.3 21.07 21.07 0 0 1 16.2-25.1c49.4-10.5 102.8 4.8 139.1 45.1 36.3 40.2 46.1 95.1 30.6 143.2zm-334.5 6.1c-91.4 9-160.7 65.1-154.7 125.2 5.9 60.1 84.8 101.5 176.2 92.5 91.4-9.1 160.7-65.1 154.7-125.3-5.9-60.1-84.8-101.5-176.2-92.4zm80.2 141.7c-18.7 42.3-72.3 64.8-117.8 50.1-43.9-14.2-62.5-57.7-43.3-96.8 18.9-38.4 68-60.1 111.5-48.8 45 11.7 68 54.2 49.6 95.5zm-58.1-46.7c-5.4-2.2-12.2.5-15.4 5.8-3.1 5.4-1.4 11.5 4.1 13.8 5.5 2.3 12.6-.3 15.8-5.8 3-5.6 1-11.8-4.5-13.8z")), t.YuqueFill = u("yuque", a, i(r, "M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.9-8.1-195-3-195-3s87.4 55.6 52.4 154.7c-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-.2 35.9-.3 46.3-.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6z")), t.YoutubeFill = u("youtube", a, i(r, "M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z")), t.ZhihuSquareFill = u("zhihu-square", a, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM432.3 592.8l71 80.7c9.2 33-3.3 63.1-3.3 63.1l-95.7-111.9v-.1c-8.9 29-20.1 57.3-33.3 84.7-22.6 45.7-55.2 54.7-89.5 57.7-34.4 3-23.3-5.3-23.3-5.3 68-55.5 78-87.8 96.8-123.1 11.9-22.3 20.4-64.3 25.3-96.8H264.1s4.8-31.2 19.2-41.7h101.6c.6-15.3-1.3-102.8-2-131.4h-49.4c-9.2 45-41 56.7-48.1 60.1-7 3.4-23.6 7.1-21.1 0 2.6-7.1 27-46.2 43.2-110.7 16.3-64.6 63.9-62 63.9-62-12.8 22.5-22.4 73.6-22.4 73.6h159.7c10.1 0 10.6 39 10.6 39h-90.8c-.7 22.7-2.8 83.8-5 131.4H519s12.2 15.4 12.2 41.7h-110l-.1 1.5c-1.5 20.4-6.3 43.9-12.9 67.6l24.1-18.1zm335.5 116h-87.6l-69.5 46.6-16.4-46.6h-40.1V321.5h213.6v387.3zM408.2 611s0-.1 0 0zm216 94.3l56.8-38.1h45.6-.1V364.7H596.7v302.5h14.1z")), t.ZhihuCircleFill = u("zhihu-circle", a, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-90.7 477.8l-.1 1.5c-1.5 20.4-6.3 43.9-12.9 67.6l24-18.1 71 80.7c9.2 33-3.3 63.1-3.3 63.1l-95.7-111.9v-.1c-8.9 29-20.1 57.3-33.3 84.7-22.6 45.7-55.2 54.7-89.5 57.7-34.4 3-23.3-5.3-23.3-5.3 68-55.5 78-87.8 96.8-123.1 11.9-22.3 20.4-64.3 25.3-96.8H264.1s4.8-31.2 19.2-41.7h101.6c.6-15.3-1.3-102.8-2-131.4h-49.4c-9.2 45-41 56.7-48.1 60.1-7 3.4-23.6 7.1-21.1 0 2.6-7.1 27-46.2 43.2-110.7 16.3-64.6 63.9-62 63.9-62-12.8 22.5-22.4 73.6-22.4 73.6h159.7c10.1 0 10.6 39 10.6 39h-90.8c-.7 22.7-2.8 83.8-5 131.4H519s12.2 15.4 12.2 41.7H421.3zm346.5 167h-87.6l-69.5 46.6-16.4-46.6h-40.1V321.5h213.6v387.3zM408.2 611s0-.1 0 0zm216 94.3l56.8-38.1h45.6-.1V364.7H596.7v302.5h14.1z")), t.AccountBookOutline = u("account-book", o, i(r, "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 0 0-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z")), t.AlertOutline = u("alert", o, i(r, "M193 796c0 17.7 14.3 32 32 32h574c17.7 0 32-14.3 32-32V563c0-176.2-142.8-319-319-319S193 386.8 193 563v233zm72-233c0-136.4 110.6-247 247-247s247 110.6 247 247v193H404V585c0-5.5-4.5-10-10-10h-44c-5.5 0-10 4.5-10 10v171h-75V563zm-48.1-252.5l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3l-67.9-67.9a8.03 8.03 0 0 0-11.3 0l-39.6 39.6a8.03 8.03 0 0 0 0 11.3l67.9 67.9c3.1 3.1 8.1 3.1 11.3 0zm669.6-79.2l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-67.9 67.9a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l67.9-67.9c3.1-3.2 3.1-8.2 0-11.3zM832 892H192c-17.7 0-32 14.3-32 32v24c0 4.4 3.6 8 8 8h688c4.4 0 8-3.6 8-8v-24c0-17.7-14.3-32-32-32zM484 180h56c4.4 0 8-3.6 8-8V76c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v96c0 4.4 3.6 8 8 8z")), t.AlipayCircleOutline = u("alipay-circle", o, i(r, "M308.6 545.7c-19.8 2-57.1 10.7-77.4 28.6-61 53-24.5 150 99 150 71.8 0 143.5-45.7 199.8-119-80.2-38.9-148.1-66.8-221.4-59.6zm460.5 67c100.1 33.4 154.7 43 166.7 44.8A445.9 445.9 0 0 0 960 512c0-247.4-200.6-448-448-448S64 264.6 64 512s200.6 448 448 448c155.9 0 293.2-79.7 373.5-200.5-75.6-29.8-213.6-85-286.8-120.1-69.9 85.7-160.1 137.8-253.7 137.8-158.4 0-212.1-138.1-137.2-229 16.3-19.8 44.2-38.7 87.3-49.4 67.5-16.5 175 10.3 275.7 43.4 18.1-33.3 33.4-69.9 44.7-108.9H305.1V402h160v-56.2H271.3v-31.3h193.8v-80.1s0-13.5 13.7-13.5H557v93.6h191.7v31.3H557.1V402h156.4c-15 61.1-37.7 117.4-66.2 166.8 47.5 17.1 90.1 33.3 121.8 43.9z")), t.AliwangwangOutline = u("aliwangwang", o, i(r, "M868.2 377.4c-18.9-45.1-46.3-85.6-81.2-120.6a377.26 377.26 0 0 0-120.5-81.2A375.65 375.65 0 0 0 519 145.8c-41.9 0-82.9 6.7-121.9 20C306 123.3 200.8 120 170.6 120c-2.2 0-7.4 0-9.4.2-11.9.4-22.8 6.5-29.2 16.4-6.5 9.9-7.7 22.4-3.4 33.5l64.3 161.6a378.59 378.59 0 0 0-52.8 193.2c0 51.4 10 101 29.8 147.6 18.9 45 46.2 85.6 81.2 120.5 34.7 34.8 75.4 62.1 120.5 81.2C418.3 894 467.9 904 519 904c51.3 0 100.9-10.1 147.7-29.8 44.9-18.9 85.5-46.3 120.4-81.2 34.7-34.8 62.1-75.4 81.2-120.6a376.5 376.5 0 0 0 29.8-147.6c-.2-51.2-10.1-100.8-29.9-147.4zm-66.4 266.5a307.08 307.08 0 0 1-65.9 98c-28.4 28.5-61.3 50.7-97.7 65.9h-.1c-38 16-78.3 24.2-119.9 24.2a306.51 306.51 0 0 1-217.5-90.2c-28.4-28.5-50.6-61.4-65.8-97.8v-.1c-16-37.8-24.1-78.2-24.1-119.9 0-55.4 14.8-109.7 42.8-157l13.2-22.1-9.5-23.9L206 192c14.9.6 35.9 2.1 59.7 5.6 43.8 6.5 82.5 17.5 114.9 32.6l19 8.9 19.9-6.8c31.5-10.8 64.8-16.2 98.9-16.2a306.51 306.51 0 0 1 217.5 90.2c28.4 28.5 50.6 61.4 65.8 97.8l.1.1.1.1c16 37.6 24.1 78 24.2 119.8-.1 41.7-8.3 82-24.3 119.8zM681.1 364.2c-20.4 0-37.1 16.7-37.1 37.1v55.1c0 20.4 16.6 37.1 37.1 37.1s37.1-16.7 37.1-37.1v-55.1c0-20.5-16.7-37.1-37.1-37.1zm-175.2 0c-20.5 0-37.1 16.7-37.1 37.1v55.1c0 20.4 16.7 37.1 37.1 37.1 20.5 0 37.1-16.7 37.1-37.1v-55.1c0-20.5-16.7-37.1-37.1-37.1z")), t.AndroidOutline = u("android", o, i(r, "M448.3 225.2c-18.6 0-32 13.4-32 31.9s13.5 31.9 32 31.9c18.6 0 32-13.4 32-31.9.1-18.4-13.4-31.9-32-31.9zm393.9 96.4c-13.8-13.8-32.7-21.5-53.2-21.5-3.9 0-7.4.4-10.7 1v-1h-3.6c-5.5-30.6-18.6-60.5-38.1-87.4-18.7-25.7-43-47.9-70.8-64.9l25.1-35.8v-3.3c0-.8.4-2.3.7-3.8.6-2.4 1.4-5.5 1.4-8.9 0-18.5-13.5-31.9-32-31.9-9.8 0-19.5 5.7-25.9 15.4l-29.3 42.1c-30-9.8-62.4-15-93.8-15-31.3 0-63.7 5.2-93.8 15L389 79.4c-6.6-9.6-16.1-15.4-26-15.4-18.6 0-32 13.4-32 31.9 0 6.2 2.5 12.8 6.7 17.4l22.6 32.3c-28.7 17-53.5 39.4-72.2 65.1-19.4 26.9-32 56.8-36.7 87.4h-5.5v1c-3.2-.6-6.7-1-10.7-1-20.3 0-39.2 7.5-53.1 21.3-13.8 13.8-21.5 32.6-21.5 53v235c0 20.3 7.5 39.1 21.4 52.9 13.8 13.8 32.8 21.5 53.2 21.5 3.9 0 7.4-.4 10.7-1v93.5c0 29.2 23.9 53.1 53.2 53.1H331v58.3c0 20.3 7.5 39.1 21.4 52.9 13.8 13.8 32.8 21.5 53.2 21.5 20.3 0 39.2-7.5 53.1-21.3 13.8-13.8 21.5-32.6 21.5-53v-58.2H544v58.1c0 20.3 7.5 39.1 21.4 52.9 13.8 13.8 32.8 21.5 53.2 21.5 20.4 0 39.2-7.5 53.1-21.6 13.8-13.8 21.5-32.6 21.5-53v-58.2h31.9c29.3 0 53.2-23.8 53.2-53.1v-91.4c3.2.6 6.7 1 10.7 1 20.3 0 39.2-7.5 53.1-21.3 13.8-13.8 21.5-32.6 21.5-53v-235c-.1-20.3-7.6-39-21.4-52.9zM246 609.6c0 6.8-3.9 10.6-10.7 10.6-6.8 0-10.7-3.8-10.7-10.6V374.5c0-6.8 3.9-10.6 10.7-10.6 6.8 0 10.7 3.8 10.7 10.6v235.1zm131.1-396.8c37.5-27.3 85.3-42.3 135-42.3s97.5 15.1 135 42.5c32.4 23.7 54.2 54.2 62.7 87.5H314.4c8.5-33.4 30.5-64 62.7-87.7zm39.3 674.7c-.6 5.6-4.4 8.7-10.5 8.7-6.8 0-10.7-3.8-10.7-10.6v-58.2h21.2v60.1zm202.3 8.7c-6.8 0-10.7-3.8-10.7-10.6v-58.2h21.2v60.1c-.6 5.6-4.3 8.7-10.5 8.7zm95.8-132.6H309.9V364h404.6v399.6zm85.2-154c0 6.8-3.9 10.6-10.7 10.6-6.8 0-10.7-3.8-10.7-10.6V374.5c0-6.8 3.9-10.6 10.7-10.6 6.8 0 10.7 3.8 10.7 10.6v235.1zM576.1 225.2c-18.6 0-32 13.4-32 31.9s13.5 31.9 32 31.9c18.6 0 32.1-13.4 32.1-32-.1-18.6-13.4-31.8-32.1-31.8z")), t.ApiOutline = u("api", o, i(r, "M917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 0 0-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 0 0 0 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM769.1 441.7l-59.4 59.4-186.8-186.8 59.4-59.4c24.9-24.9 58.1-38.7 93.4-38.7 35.3 0 68.4 13.7 93.4 38.7 24.9 24.9 38.7 58.1 38.7 93.4 0 35.3-13.8 68.4-38.7 93.4zm-190.2 105a8.03 8.03 0 0 0-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 0 0-11.3 0L363 475.3l-43-43a7.85 7.85 0 0 0-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2c-68.9 69-77 175.7-24.3 253.5l-76.1 76.1a8.03 8.03 0 0 0 0 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2zM441.7 769.1a131.32 131.32 0 0 1-93.4 38.7c-35.3 0-68.4-13.7-93.4-38.7a131.32 131.32 0 0 1-38.7-93.4c0-35.3 13.7-68.4 38.7-93.4l59.4-59.4 186.8 186.8-59.4 59.4z")), t.AppstoreOutline = u("appstore", o, i(r, "M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z")), t.AudioOutline = u("audio", o, i(r, "M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z")), t.AppleOutline = u("apple", o, i(r, "M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-10.6 267c-14.3 19.9-28.7 35.6-41.9 45.7-10.5 8-18.6 11.4-24 11.6-9-.1-17.7-2.3-34.7-8.8-1.2-.5-2.5-1-4.2-1.6l-4.4-1.7c-17.4-6.7-27.8-10.3-41.1-13.8-18.6-4.8-37.1-7.4-56.9-7.4-20.2 0-39.2 2.5-58.1 7.2-13.9 3.5-25.6 7.4-42.7 13.8-.7.3-8.1 3.1-10.2 3.9-3.5 1.3-6.2 2.3-8.7 3.2-10.4 3.6-17 5.1-22.9 5.2-.7 0-1.3-.1-1.8-.2-1.1-.2-2.5-.6-4.1-1.3-4.5-1.8-9.9-5.1-16-9.8-14-10.9-29.4-28-45.1-49.9-27.5-38.6-53.5-89.8-66-125.7-15.4-44.8-23-87.7-23-128.6 0-60.2 17.8-106 48.4-137.1 26.3-26.6 61.7-41.5 97.8-42.3 5.9.1 14.5 1.5 25.4 4.5 8.6 2.3 18 5.4 30.7 9.9 3.8 1.4 16.9 6.1 18.5 6.7 7.7 2.8 13.5 4.8 19.2 6.6 18.2 5.8 32.3 9 47.6 9 15.5 0 28.8-3.3 47.7-9.8 7.1-2.4 32.9-12 37.5-13.6 25.6-9.1 44.5-14 60.8-15.2 4.8-.4 9.1-.4 13.2-.1 22.7 1.8 42.1 6.3 58.6 13.8-37.6 43.4-57 96.5-56.9 158.4-.3 14.7.9 31.7 5.1 51.8 6.4 30.5 18.6 60.7 37.9 89 14.7 21.5 32.9 40.9 54.7 57.8-11.5 23.7-25.6 48.2-40.4 68.8zm-94.5-572c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z")), t.BackwardOutline = u("backward", o, i(c, "M485.6 249.9L198.2 498c-8.3 7.1-8.3 20.8 0 27.9l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9zm320 0L518.2 498a18.6 18.6 0 0 0-6.2 14c0 5.2 2.1 10.4 6.2 14l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9z")), t.BankOutline = u("bank", o, i(r, "M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 0 0-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462h62zM512 196.7l271.1 197.2H240.9L512 196.7zM264 462h117v374H264V462zm189 0h117v374H453V462zm307 374H642V462h118v374z")), t.BellOutline = u("bell", o, i(r, "M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z")), t.BehanceSquareOutline = u("behance-square", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM598.5 350.9h138.4v33.7H598.5v-33.7zM512 628.8a89.52 89.52 0 0 1-27 31c-11.8 8.2-24.9 14.2-38.8 17.7a167.4 167.4 0 0 1-44.6 5.7H236V342.1h161c16.3 0 31.1 1.5 44.6 4.3 13.4 2.8 24.8 7.6 34.4 14.1 9.5 6.5 17 15.2 22.3 26 5.2 10.7 7.9 24.1 7.9 40 0 17.2-3.9 31.4-11.7 42.9-7.9 11.5-19.3 20.8-34.8 28.1 21.1 6 36.6 16.7 46.8 31.7 10.4 15.2 15.5 33.4 15.5 54.8 0 17.4-3.3 32.3-10 44.8zM790.8 576H612.4c0 19.4 6.7 38 16.8 48 10.2 9.9 24.8 14.9 43.9 14.9 13.8 0 25.5-3.5 35.5-10.4 9.9-6.9 15.9-14.2 18.1-21.8h59.8c-9.6 29.7-24.2 50.9-44 63.7-19.6 12.8-43.6 19.2-71.5 19.2-19.5 0-37-3.2-52.7-9.3-15.1-5.9-28.7-14.9-39.9-26.5a121.2 121.2 0 0 1-25.1-41.2c-6.1-16.9-9.1-34.7-8.9-52.6 0-18.5 3.1-35.7 9.1-51.7 11.5-31.1 35.4-56 65.9-68.9 16.3-6.8 33.8-10.2 51.5-10 21 0 39.2 4 55 12.2a111.6 111.6 0 0 1 38.6 32.8c10.1 13.7 17.2 29.3 21.7 46.9 4.3 17.3 5.8 35.5 4.6 54.7zm-122-95.6c-10.8 0-19.9 1.9-26.9 5.6-7 3.7-12.8 8.3-17.2 13.6a48.4 48.4 0 0 0-9.1 17.4c-1.6 5.3-2.7 10.7-3.1 16.2H723c-1.6-17.3-7.6-30.1-15.6-39.1-8.4-8.9-21.9-13.7-38.6-13.7zm-248.5-10.1c8.7-6.3 12.9-16.7 12.9-31 .3-6.8-1.1-13.5-4.1-19.6-2.7-4.9-6.7-9-11.6-11.9a44.8 44.8 0 0 0-16.6-6c-6.4-1.2-12.9-1.8-19.3-1.7h-70.3v79.7h76.1c13.1.1 24.2-3.1 32.9-9.5zm11.8 72c-9.8-7.5-22.9-11.2-39.2-11.2h-81.8v94h80.2c7.5 0 14.4-.7 21.1-2.1s12.7-3.8 17.8-7.2c5.1-3.3 9.2-7.8 12.3-13.6 3-5.8 4.5-13.2 4.5-22.1 0-17.7-5-30.2-14.9-37.8z")), t.BookOutline = u("book", o, i(r, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0 0 22.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z")), t.BoxPlotOutline = u("box-plot", o, i(r, "M952 224h-52c-4.4 0-8 3.6-8 8v248h-92V304c0-4.4-3.6-8-8-8H232c-4.4 0-8 3.6-8 8v176h-92V232c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V548h92v172c0 4.4 3.6 8 8 8h560c4.4 0 8-3.6 8-8V548h92v244c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zM296 368h88v288h-88V368zm432 288H448V368h280v288z")), t.BulbOutline = u("bulb", o, i(r, "M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z")), t.BugOutline = u("bug", o, i(r, "M304 280h56c4.4 0 8-3.6 8-8 0-28.3 5.9-53.2 17.1-73.5 10.6-19.4 26-34.8 45.4-45.4C450.9 142 475.7 136 504 136h16c28.3 0 53.2 5.9 73.5 17.1 19.4 10.6 34.8 26 45.4 45.4C650 218.9 656 243.7 656 272c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1a184.31 184.31 0 0 0-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9a184.31 184.31 0 0 0-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z", "M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8a63 63 0 0 1-63 63H232a63 63 0 0 1-63-63c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5.2 13 .7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7a273 273 0 0 0 22.7 49c24.3 41.5 59 76.2 100.5 100.5S460.5 960 512 960s99.8-13.9 141.3-38.2a281.38 281.38 0 0 0 123.2-149.5A120 120 0 0 1 836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7.4-6.4.7-12.8.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM716 680c0 36.8-9.7 72-27.8 102.9-17.7 30.3-43 55.6-73.3 73.3C584 874.3 548.8 884 512 884s-72-9.7-102.9-27.8c-30.3-17.7-55.6-43-73.3-73.3A202.75 202.75 0 0 1 308 680V412h408v268z")), t.CalculatorOutline = u("calculator", o, i(r, "M251.2 387H320v68.8c0 1.8 1.8 3.2 4 3.2h48c2.2 0 4-1.4 4-3.3V387h68.8c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H376v-68.8c0-1.8-1.8-3.2-4-3.2h-48c-2.2 0-4 1.4-4 3.2V331h-68.8c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zm328 0h193.6c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H579.2c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zm0 265h193.6c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H579.2c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zm0 104h193.6c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H579.2c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zm-195.7-81l61.2-74.9c4.3-5.2.7-13.1-5.9-13.1H388c-2.3 0-4.5 1-5.9 2.9l-34 41.6-34-41.6a7.85 7.85 0 0 0-5.9-2.9h-50.9c-6.6 0-10.2 7.9-5.9 13.1l61.2 74.9-62.7 76.8c-4.4 5.2-.8 13.1 5.8 13.1h50.8c2.3 0 4.5-1 5.9-2.9l35.5-43.5 35.5 43.5c1.5 1.8 3.7 2.9 5.9 2.9h50.8c6.6 0 10.2-7.9 5.9-13.1L383.5 675zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-36 732H180V180h664v664z")), t.BuildOutline = u("build", o, i(r, "M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32zm-504 68h200v200H412V278zm-68 468H144V546h200v200zm268 0H412V546h200v200zm268-268H680V278h200v200z")), t.CalendarOutline = u("calendar", o, i(r, "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z")), t.CameraOutline = u("camera", o, i(r, "M864 248H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z")), t.CarOutline = u("car", o, i(r, "M380 704h264c4.4 0 8-3.6 8-8v-84c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v36H428v-36c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v84c0 4.4 3.6 8 8 8zm340-123a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm239-167.6L935.3 372a8 8 0 0 0-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 0 0-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 0 0-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 0 0 3-10.8zM840 517v237H184V517l15.6-43h624.8l15.6 43zM292.7 218.1l.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220l72.7-199.9zM224 581a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")), t.CaretDownOutline = u("caret-down", o, i(c, "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z")), t.CaretLeftOutline = u("caret-left", o, i(c, "M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z")), t.CaretRightOutline = u("caret-right", o, i(c, "M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z")), t.CarryOutOutline = u("carry-out", o, i(r, "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM688 420h-55.2c-5.1 0-10 2.5-13 6.6L468.9 634.4l-64.7-89c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.4 0-12.8-6.5-12.8z")), t.CheckCircleOutline = u("check-circle", o, i(r, "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z", "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z")), t.CaretUpOutline = u("caret-up", o, i(c, "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z")), t.CheckSquareOutline = u("check-square", o, i(r, "M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z", "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")), t.ChromeOutline = u("chrome", o, i(r, "M928 512.3v-.3c0-229.8-186.2-416-416-416S96 282.2 96 512v.4c0 229.8 186.2 416 416 416s416-186.2 416-416v-.3.2zm-6.7-74.6l.6 3.3-.6-3.3zM676.7 638.2c53.5-82.2 52.5-189.4-11.1-263.7l162.4-8.4c20.5 44.4 32 93.8 32 145.9 0 185.2-144.6 336.6-327.1 347.4l143.8-221.2zM512 652.3c-77.5 0-140.2-62.7-140.2-140.2 0-77.7 62.7-140.2 140.2-140.2S652.2 434.5 652.2 512 589.5 652.3 512 652.3zm369.2-331.7l-3-5.7 3 5.7zM512 164c121.3 0 228.2 62.1 290.4 156.2l-263.6-13.9c-97.5-5.7-190.2 49.2-222.3 141.1L227.8 311c63.1-88.9 166.9-147 284.2-147zM102.5 585.8c26 145 127.1 264 261.6 315.1C229.6 850 128.5 731 102.5 585.8zM164 512c0-55.9 13.2-108.7 36.6-155.5l119.7 235.4c44.1 86.7 137.4 139.7 234 121.6l-74 145.1C302.9 842.5 164 693.5 164 512zm324.7 415.4c4 .2 8 .4 12 .5-4-.2-8-.3-12-.5z")), t.ClockCircleOutline = u("clock-circle", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z")), t.CloseCircleOutline = u("close-circle", o, i(r, "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z", "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z")), t.CloudOutline = u("cloud", o, i(r, "M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3zm36.3 281a123.07 123.07 0 0 1-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3A123.3 123.3 0 0 1 140 612c0-28 9.1-54.3 26.2-76.3a125.7 125.7 0 0 1 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z")), t.CloseSquareOutline = u("close-square", o, i(r, "M354 671h58.9c4.7 0 9.2-2.1 12.3-5.7L512 561.8l86.8 103.5c3 3.6 7.5 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.4-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.7 0-9.2 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3-3.6-7.5-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 0 0 354 671z", "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")), t.CodeOutline = u("code", o, i(r, "M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 0 0 308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 0 0-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")), t.CodepenCircleOutline = u("codepen-circle", o, i(r, "M488.1 414.7V303.4L300.9 428l83.6 55.8zm254.1 137.7v-79.8l-59.8 39.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm278 533c0 1.1-.1 2.1-.2 3.1 0 .4-.1.7-.2 1a14.16 14.16 0 0 1-.8 3.2c-.2.6-.4 1.2-.6 1.7-.2.4-.4.8-.5 1.2-.3.5-.5 1.1-.8 1.6-.2.4-.4.7-.7 1.1-.3.5-.7 1-1 1.5-.3.4-.5.7-.8 1-.4.4-.8.9-1.2 1.3-.3.3-.6.6-1 .9-.4.4-.9.8-1.4 1.1-.4.3-.7.6-1.1.8-.1.1-.3.2-.4.3L525.2 786c-4 2.7-8.6 4-13.2 4-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-.1-.1-.3-.2-.4-.3l-1.1-.8c-.5-.4-.9-.7-1.3-1.1-.3-.3-.6-.6-1-.9-.4-.4-.8-.8-1.2-1.3a7 7 0 0 1-.8-1c-.4-.5-.7-1-1-1.5-.2-.4-.5-.7-.7-1.1-.3-.5-.6-1.1-.8-1.6-.2-.4-.4-.8-.5-1.2-.2-.6-.4-1.2-.6-1.7-.1-.4-.3-.8-.4-1.2-.2-.7-.3-1.3-.4-2-.1-.3-.1-.7-.2-1-.1-1-.2-2.1-.2-3.1V427.9c0-1 .1-2.1.2-3.1.1-.3.1-.7.2-1a14.16 14.16 0 0 1 .8-3.2c.2-.6.4-1.2.6-1.7.2-.4.4-.8.5-1.2.2-.5.5-1.1.8-1.6.2-.4.4-.7.7-1.1.6-.9 1.2-1.7 1.8-2.5.4-.4.8-.9 1.2-1.3.3-.3.6-.6 1-.9.4-.4.9-.8 1.3-1.1.4-.3.7-.6 1.1-.8.1-.1.3-.2.4-.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c.1.1.3.2.4.3l1.1.8 1.4 1.1c.3.3.6.6 1 .9.4.4.8.8 1.2 1.3.7.8 1.3 1.6 1.8 2.5.2.4.5.7.7 1.1.3.5.6 1 .8 1.6.2.4.4.8.5 1.2.2.6.4 1.2.6 1.7.1.4.3.8.4 1.2.2.7.3 1.3.4 2 .1.3.1.7.2 1 .1 1 .2 2.1.2 3.1V597zm-254.1 13.3v111.3L723.1 597l-83.6-55.8zM281.8 472.6v79.8l59.8-39.9zM512 456.1l-84.5 56.4 84.5 56.4 84.5-56.4zM723.1 428L535.9 303.4v111.3l103.6 69.1zM384.5 541.2L300.9 597l187.2 124.6V610.3l-103.6-69.1z")), t.CompassOutline = u("compass", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm198.4-588.1a32 32 0 0 0-24.5.5L414.9 415 296.4 686c-3.6 8.2-3.6 17.5 0 25.7 3.4 7.8 9.7 13.9 17.7 17 3.8 1.5 7.7 2.2 11.7 2.2 4.4 0 8.7-.9 12.8-2.7l271-118.6 118.5-271a32.06 32.06 0 0 0-17.7-42.7zM576.8 534.4l26.2 26.2-42.4 42.4-26.2-26.2L380 644.4 447.5 490 422 464.4l42.4-42.4 25.5 25.5L644.4 380l-67.6 154.4zM464.4 422L422 464.4l25.5 25.6 86.9 86.8 26.2 26.2 42.4-42.4-26.2-26.2-86.8-86.9z")), t.ContactsOutline = u("contacts", o, i(r, "M594.3 601.5a111.8 111.8 0 0 0 29.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 0 0-74.6 126.1 8 8 0 0 0 8 8.4H407c4.2 0 7.6-3.3 7.9-7.5 3.8-50.6 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H661a8 8 0 0 0 8-8.4c-2.8-53.3-32-99.7-74.7-126.1zM512 578c-28.5 0-51.7-23.3-51.7-52s23.2-52 51.7-52 51.7 23.3 51.7 52-23.2 52-51.7 52zm416-354H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496z")), t.ContainerOutline = u("container", o, i(r, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v-63H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v752zM320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 160h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z")), t.ControlOutline = u("control", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM340 683v77c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-77c-10.1 3.3-20.8 5-32 5s-21.9-1.8-32-5zm64-198V264c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v221c10.1-3.3 20.8-5 32-5s21.9 1.8 32 5zm-64 198c10.1 3.3 20.8 5 32 5s21.9-1.8 32-5c41.8-13.5 72-52.7 72-99s-30.2-85.5-72-99c-10.1-3.3-20.8-5-32-5s-21.9 1.8-32 5c-41.8 13.5-72 52.7-72 99s30.2 85.5 72 99zm.1-115.7c.3-.6.7-1.2 1-1.8v-.1l1.2-1.8c.1-.2.2-.3.3-.5.3-.5.7-.9 1-1.4.1-.1.2-.3.3-.4.5-.6.9-1.1 1.4-1.6l.3-.3 1.2-1.2.4-.4c.5-.5 1-.9 1.6-1.4.6-.5 1.1-.9 1.7-1.3.2-.1.3-.2.5-.3.5-.3.9-.7 1.4-1 .1-.1.3-.2.4-.3.6-.4 1.2-.7 1.9-1.1.1-.1.3-.1.4-.2.5-.3 1-.5 1.6-.8l.6-.3c.7-.3 1.3-.6 2-.8.7-.3 1.4-.5 2.1-.7.2-.1.4-.1.6-.2.6-.2 1.1-.3 1.7-.4.2 0 .3-.1.5-.1.7-.2 1.5-.3 2.2-.4.2 0 .3 0 .5-.1.6-.1 1.2-.1 1.8-.2h.6c.8 0 1.5-.1 2.3-.1s1.5 0 2.3.1h.6c.6 0 1.2.1 1.8.2.2 0 .3 0 .5.1.7.1 1.5.2 2.2.4.2 0 .3.1.5.1.6.1 1.2.3 1.7.4.2.1.4.1.6.2.7.2 1.4.4 2.1.7.7.2 1.3.5 2 .8l.6.3c.5.2 1.1.5 1.6.8.1.1.3.1.4.2.6.3 1.3.7 1.9 1.1.1.1.3.2.4.3.5.3 1 .6 1.4 1 .2.1.3.2.5.3.6.4 1.2.9 1.7 1.3s1.1.9 1.6 1.4l.4.4 1.2 1.2.3.3c.5.5 1 1.1 1.4 1.6.1.1.2.3.3.4.4.4.7.9 1 1.4.1.2.2.3.3.5l1.2 1.8s0 .1.1.1a36.18 36.18 0 0 1 5.1 18.5c0 6-1.5 11.7-4.1 16.7-.3.6-.7 1.2-1 1.8 0 0 0 .1-.1.1l-1.2 1.8c-.1.2-.2.3-.3.5-.3.5-.7.9-1 1.4-.1.1-.2.3-.3.4-.5.6-.9 1.1-1.4 1.6l-.3.3-1.2 1.2-.4.4c-.5.5-1 .9-1.6 1.4-.6.5-1.1.9-1.7 1.3-.2.1-.3.2-.5.3-.5.3-.9.7-1.4 1-.1.1-.3.2-.4.3-.6.4-1.2.7-1.9 1.1-.1.1-.3.1-.4.2-.5.3-1 .5-1.6.8l-.6.3c-.7.3-1.3.6-2 .8-.7.3-1.4.5-2.1.7-.2.1-.4.1-.6.2-.6.2-1.1.3-1.7.4-.2 0-.3.1-.5.1-.7.2-1.5.3-2.2.4-.2 0-.3 0-.5.1-.6.1-1.2.1-1.8.2h-.6c-.8 0-1.5.1-2.3.1s-1.5 0-2.3-.1h-.6c-.6 0-1.2-.1-1.8-.2-.2 0-.3 0-.5-.1-.7-.1-1.5-.2-2.2-.4-.2 0-.3-.1-.5-.1-.6-.1-1.2-.3-1.7-.4-.2-.1-.4-.1-.6-.2-.7-.2-1.4-.4-2.1-.7-.7-.2-1.3-.5-2-.8l-.6-.3c-.5-.2-1.1-.5-1.6-.8-.1-.1-.3-.1-.4-.2-.6-.3-1.3-.7-1.9-1.1-.1-.1-.3-.2-.4-.3-.5-.3-1-.6-1.4-1-.2-.1-.3-.2-.5-.3-.6-.4-1.2-.9-1.7-1.3s-1.1-.9-1.6-1.4l-.4-.4-1.2-1.2-.3-.3c-.5-.5-1-1.1-1.4-1.6-.1-.1-.2-.3-.3-.4-.4-.4-.7-.9-1-1.4-.1-.2-.2-.3-.3-.5l-1.2-1.8v-.1c-.4-.6-.7-1.2-1-1.8-2.6-5-4.1-10.7-4.1-16.7s1.5-11.7 4.1-16.7zM620 539v221c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V539c-10.1 3.3-20.8 5-32 5s-21.9-1.8-32-5zm64-198v-77c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v77c10.1-3.3 20.8-5 32-5s21.9 1.8 32 5zm-64 198c10.1 3.3 20.8 5 32 5s21.9-1.8 32-5c41.8-13.5 72-52.7 72-99s-30.2-85.5-72-99c-10.1-3.3-20.8-5-32-5s-21.9 1.8-32 5c-41.8 13.5-72 52.7-72 99s30.2 85.5 72 99zm.1-115.7c.3-.6.7-1.2 1-1.8v-.1l1.2-1.8c.1-.2.2-.3.3-.5.3-.5.7-.9 1-1.4.1-.1.2-.3.3-.4.5-.6.9-1.1 1.4-1.6l.3-.3 1.2-1.2.4-.4c.5-.5 1-.9 1.6-1.4.6-.5 1.1-.9 1.7-1.3.2-.1.3-.2.5-.3.5-.3.9-.7 1.4-1 .1-.1.3-.2.4-.3.6-.4 1.2-.7 1.9-1.1.1-.1.3-.1.4-.2.5-.3 1-.5 1.6-.8l.6-.3c.7-.3 1.3-.6 2-.8.7-.3 1.4-.5 2.1-.7.2-.1.4-.1.6-.2.6-.2 1.1-.3 1.7-.4.2 0 .3-.1.5-.1.7-.2 1.5-.3 2.2-.4.2 0 .3 0 .5-.1.6-.1 1.2-.1 1.8-.2h.6c.8 0 1.5-.1 2.3-.1s1.5 0 2.3.1h.6c.6 0 1.2.1 1.8.2.2 0 .3 0 .5.1.7.1 1.5.2 2.2.4.2 0 .3.1.5.1.6.1 1.2.3 1.7.4.2.1.4.1.6.2.7.2 1.4.4 2.1.7.7.2 1.3.5 2 .8l.6.3c.5.2 1.1.5 1.6.8.1.1.3.1.4.2.6.3 1.3.7 1.9 1.1.1.1.3.2.4.3.5.3 1 .6 1.4 1 .2.1.3.2.5.3.6.4 1.2.9 1.7 1.3s1.1.9 1.6 1.4l.4.4 1.2 1.2.3.3c.5.5 1 1.1 1.4 1.6.1.1.2.3.3.4.4.4.7.9 1 1.4.1.2.2.3.3.5l1.2 1.8v.1a36.18 36.18 0 0 1 5.1 18.5c0 6-1.5 11.7-4.1 16.7-.3.6-.7 1.2-1 1.8v.1l-1.2 1.8c-.1.2-.2.3-.3.5-.3.5-.7.9-1 1.4-.1.1-.2.3-.3.4-.5.6-.9 1.1-1.4 1.6l-.3.3-1.2 1.2-.4.4c-.5.5-1 .9-1.6 1.4-.6.5-1.1.9-1.7 1.3-.2.1-.3.2-.5.3-.5.3-.9.7-1.4 1-.1.1-.3.2-.4.3-.6.4-1.2.7-1.9 1.1-.1.1-.3.1-.4.2-.5.3-1 .5-1.6.8l-.6.3c-.7.3-1.3.6-2 .8-.7.3-1.4.5-2.1.7-.2.1-.4.1-.6.2-.6.2-1.1.3-1.7.4-.2 0-.3.1-.5.1-.7.2-1.5.3-2.2.4-.2 0-.3 0-.5.1-.6.1-1.2.1-1.8.2h-.6c-.8 0-1.5.1-2.3.1s-1.5 0-2.3-.1h-.6c-.6 0-1.2-.1-1.8-.2-.2 0-.3 0-.5-.1-.7-.1-1.5-.2-2.2-.4-.2 0-.3-.1-.5-.1-.6-.1-1.2-.3-1.7-.4-.2-.1-.4-.1-.6-.2-.7-.2-1.4-.4-2.1-.7-.7-.2-1.3-.5-2-.8l-.6-.3c-.5-.2-1.1-.5-1.6-.8-.1-.1-.3-.1-.4-.2-.6-.3-1.3-.7-1.9-1.1-.1-.1-.3-.2-.4-.3-.5-.3-1-.6-1.4-1-.2-.1-.3-.2-.5-.3-.6-.4-1.2-.9-1.7-1.3s-1.1-.9-1.6-1.4l-.4-.4-1.2-1.2-.3-.3c-.5-.5-1-1.1-1.4-1.6-.1-.1-.2-.3-.3-.4-.4-.4-.7-.9-1-1.4-.1-.2-.2-.3-.3-.5l-1.2-1.8v-.1c-.4-.6-.7-1.2-1-1.8-2.6-5-4.1-10.7-4.1-16.7s1.5-11.7 4.1-16.7z")), t.CopyOutline = u("copy", o, i(r, "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z")), t.CreditCardOutline = u("credit-card", o, i(r, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-792 72h752v120H136V232zm752 560H136V440h752v352zm-237-64h165c4.4 0 8-3.6 8-8v-72c0-4.4-3.6-8-8-8H651c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8z")), t.CrownOutline = u("crown", o, i(r, "M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 0 0-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zm-126 534.1H250.3l-53.8-409.4 139.8 86.1L512 252.9l175.7 234.4 139.8-86.1-53.9 409.4zM512 509c-62.1 0-112.6 50.5-112.6 112.6S449.9 734.2 512 734.2s112.6-50.5 112.6-112.6S574.1 509 512 509zm0 160.9c-26.6 0-48.2-21.6-48.2-48.3 0-26.6 21.6-48.3 48.2-48.3s48.2 21.6 48.2 48.3c0 26.6-21.6 48.3-48.2 48.3z")), t.CustomerServiceOutline = u("customer-service", o, i(r, "M512 128c-212.1 0-384 171.9-384 384v360c0 13.3 10.7 24 24 24h184c35.3 0 64-28.7 64-64V624c0-35.3-28.7-64-64-64H200v-48c0-172.3 139.7-312 312-312s312 139.7 312 312v48H688c-35.3 0-64 28.7-64 64v208c0 35.3 28.7 64 64 64h184c13.3 0 24-10.7 24-24V512c0-212.1-171.9-384-384-384zM328 632v192H200V632h128zm496 192H696V632h128v192z")), t.DashboardOutline = u("dashboard", o, i(r, "M924.8 385.6a446.7 446.7 0 0 0-96-142.4 446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96 446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 0 1 140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276zM623.5 421.5a8.03 8.03 0 0 0-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 0 0 0 79.2 55.95 55.95 0 0 0 79.2 0 55.87 55.87 0 0 0 14.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm260 218v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zm12.7-197.2l-31.1-31.1a8.03 8.03 0 0 0-11.3 0l-56.6 56.6a8.03 8.03 0 0 0 0 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zm-458.6-31.1a8.03 8.03 0 0 0-11.3 0l-31.1 31.1a8.03 8.03 0 0 0 0 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z")), t.DeleteOutline = u("delete", o, i(r, "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z")), t.DiffOutline = u("diff", o, i(r, "M476 399.1c0-3.9-3.1-7.1-7-7.1h-42c-3.8 0-7 3.2-7 7.1V484h-84.5c-4.1 0-7.5 3.1-7.5 7v42c0 3.8 3.4 7 7.5 7H420v84.9c0 3.9 3.2 7.1 7 7.1h42c3.9 0 7-3.2 7-7.1V540h84.5c4.1 0 7.5-3.2 7.5-7v-42c0-3.9-3.4-7-7.5-7H476v-84.9zM560.5 704h-225c-4.1 0-7.5 3.2-7.5 7v42c0 3.8 3.4 7 7.5 7h225c4.1 0 7.5-3.2 7.5-7v-42c0-3.8-3.4-7-7.5-7zm-7.1-502.6c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v704c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V397.3c0-8.5-3.4-16.6-9.4-22.6L553.4 201.4zM664 888H232V264h282.2L664 413.8V888zm190.2-581.4L611.3 72.9c-6-5.7-13.9-8.9-22.2-8.9H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h277l219 210.6V824c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V329.6c0-8.7-3.5-17-9.8-23z")), t.DatabaseOutline = u("database", o, i(r, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 272a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 272a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")), t.DislikeOutline = u("dislike", o, i(r, "M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81zm627.2 160.4H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 0 1-42.2-32.3L329 459.2V172h415.4a56.85 56.85 0 0 1 33.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19a56.76 56.76 0 0 1 19.6 43c0 19.1-11 37.5-28.8 48.4z")), t.DownCircleOutline = u("down-circle", o, i(r, "M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z", "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z")), t.DownSquareOutline = u("down-square", o, i(r, "M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9 4.9-25.9 13.2L512 558.6 406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z", "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")), t.DribbbleSquareOutline = u("dribbble-square", o, i(r, "M498.6 432c-40.8-72.5-84.7-133.4-91.2-142.3-68.8 32.5-120.3 95.9-136.2 172.2 11 .2 112.4.7 227.4-29.9zm66.5 21.8c5.7 11.7 11.2 23.6 16.3 35.6 1.8 4.2 3.6 8.4 5.3 12.7 81.8-10.3 163.2 6.2 171.3 7.9-.5-58.1-21.3-111.4-55.5-153.3-5.3 7.1-46.5 60-137.4 97.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM512 800c-158.8 0-288-129.2-288-288s129.2-288 288-288 288 129.2 288 288-129.2 288-288 288zm89.7-259.1c32.2 88.4 45.3 160.4 47.8 175.4 55.2-37.3 94.5-96.4 105.4-164.9-8.4-2.6-76.1-22.8-153.2-10.5zm-72.5-26.4c3.2-1 6.4-2 9.7-2.9-6.2-14-12.9-28-19.9-41.7-122.8 36.8-242.1 35.2-252.8 35-.1 2.5-.1 5-.1 7.5 0 63.2 23.9 120.9 63.2 164.5 5.5-9.6 73-121.4 199.9-162.4zm145.9-186.2a245.2 245.2 0 0 0-220.8-55.1c6.8 9.1 51.5 69.9 91.8 144 87.5-32.8 124.5-82.6 129-88.9zM554 552.8c-138.7 48.3-188.6 144.6-193 153.6 41.7 32.5 94.1 51.9 151 51.9 34.1 0 66.6-6.9 96.1-19.5-3.7-21.6-17.9-96.8-52.5-186.6l-1.6.6z")), t.EnvironmentOutline = u("environment", o, i(r, "M854.6 289.1a362.49 362.49 0 0 0-79.9-115.7 370.83 370.83 0 0 0-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 0 0 169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0 0 22.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z")), t.EditOutline = u("edit", o, i(r, "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z")), t.ExclamationCircleOutline = u("exclamation-circle", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z")), t.ExperimentOutline = u("experiment", o, i(r, "M512 472a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 0 1-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z")), t.EyeInvisibleOutline = u("eye-invisible", o, i(r, "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z", "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z")), t.EyeOutline = u("eye", o, i(r, "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z")), t.FacebookOutline = u("facebook", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z")), t.FastBackwardOutline = u("fast-backward", o, i(c, "M517.6 273.5L230.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm320 0L550.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm-620-25.5h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z")), t.FastForwardOutline = u("fast-forward", o, i(c, "M793.8 499.3L506.4 273.5c-10.7-8.4-26.4-.8-26.4 12.7v451.6c0 13.5 15.7 21.1 26.4 12.7l287.4-225.8a16.14 16.14 0 0 0 0-25.4zm-320 0L186.4 273.5c-10.7-8.4-26.4-.8-26.4 12.7v451.5c0 13.5 15.7 21.1 26.4 12.7l287.4-225.8c4.1-3.2 6.2-8 6.2-12.7 0-4.6-2.1-9.4-6.2-12.6zM857.6 248h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z")), t.FileAddOutline = u("file-add", o, i(r, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z")), t.FileExcelOutline = u("file-excel", o, i(r, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM514.1 580.1l-61.8-102.4c-2.2-3.6-6.1-5.8-10.3-5.8h-38.4c-2.3 0-4.5.6-6.4 1.9-5.6 3.5-7.3 10.9-3.7 16.6l82.3 130.4-83.4 132.8a12.04 12.04 0 0 0 10.2 18.4h34.5c4.2 0 8-2.2 10.2-5.7L510 664.8l62.3 101.4c2.2 3.6 6.1 5.7 10.2 5.7H620c2.3 0 4.5-.7 6.5-1.9 5.6-3.6 7.2-11 3.6-16.6l-84-130.4 85.3-132.5a12.04 12.04 0 0 0-10.1-18.5h-35.7c-4.2 0-8.1 2.2-10.3 5.8l-61.2 102.3z")), t.FileExclamationOutline = u("file-exclamation", o, i(r, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM472 744a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm16-104h48c4.4 0 8-3.6 8-8V448c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8z")), t.FileImageOutline = u("file-image", o, i(r, "M553.1 509.1l-77.8 99.2-41.1-52.4a8 8 0 0 0-12.6 0l-99.8 127.2a7.98 7.98 0 0 0 6.3 12.9H696c6.7 0 10.4-7.7 6.3-12.9l-136.5-174a8.1 8.1 0 0 0-12.7 0zM360 442a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm494.6-153.4L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z")), t.FileMarkdownOutline = u("file-markdown", o, i(r, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM429 481.2c-1.9-4.4-6.2-7.2-11-7.2h-35c-6.6 0-12 5.4-12 12v272c0 6.6 5.4 12 12 12h27.1c6.6 0 12-5.4 12-12V582.1l66.8 150.2a12 12 0 0 0 11 7.1H524c4.7 0 9-2.8 11-7.1l66.8-150.6V758c0 6.6 5.4 12 12 12H641c6.6 0 12-5.4 12-12V486c0-6.6-5.4-12-12-12h-34.7c-4.8 0-9.1 2.8-11 7.2l-83.1 191-83.2-191z")), t.FilePptOutline = u("file-ppt", o, i(r, "M424 476c-4.4 0-8 3.6-8 8v276c0 4.4 3.6 8 8 8h32.5c4.4 0 8-3.6 8-8v-95.5h63.3c59.4 0 96.2-38.9 96.2-94.1 0-54.5-36.3-94.3-96-94.3H424zm150.6 94.3c0 43.4-26.5 54.3-71.2 54.3h-38.9V516.2h56.2c33.8 0 53.9 19.7 53.9 54.1zm280-281.7L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z")), t.FileTextOutline = u("file-text", o, i(r, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z")), t.FilePdfOutline = u("file-pdf", o, i(r, "M531.3 574.4l.3-1.4c5.8-23.9 13.1-53.7 7.4-80.7-3.8-21.3-19.5-29.6-32.9-30.2-15.8-.7-29.9 8.3-33.4 21.4-6.6 24-.7 56.8 10.1 98.6-13.6 32.4-35.3 79.5-51.2 107.5-29.6 15.3-69.3 38.9-75.2 68.7-1.2 5.5.2 12.5 3.5 18.8 3.7 7 9.6 12.4 16.5 15 3 1.1 6.6 2 10.8 2 17.6 0 46.1-14.2 84.1-79.4 5.8-1.9 11.8-3.9 17.6-5.9 27.2-9.2 55.4-18.8 80.9-23.1 28.2 15.1 60.3 24.8 82.1 24.8 21.6 0 30.1-12.8 33.3-20.5 5.6-13.5 2.9-30.5-6.2-39.6-13.2-13-45.3-16.4-95.3-10.2-24.6-15-40.7-35.4-52.4-65.8zM421.6 726.3c-13.9 20.2-24.4 30.3-30.1 34.7 6.7-12.3 19.8-25.3 30.1-34.7zm87.6-235.5c5.2 8.9 4.5 35.8.5 49.4-4.9-19.9-5.6-48.1-2.7-51.4.8.1 1.5.7 2.2 2zm-1.6 120.5c10.7 18.5 24.2 34.4 39.1 46.2-21.6 4.9-41.3 13-58.9 20.2-4.2 1.7-8.3 3.4-12.3 5 13.3-24.1 24.4-51.4 32.1-71.4zm155.6 65.5c.1.2.2.5-.4.9h-.2l-.2.3c-.8.5-9 5.3-44.3-8.6 40.6-1.9 45 7.3 45.1 7.4zm191.4-388.2L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z")), t.FileZipOutline = u("file-zip", o, i(r, "M296 392h64v64h-64zm0 190v160h128V582h-64v-62h-64v62zm80 48v64h-32v-64h32zm-16-302h64v64h-64zm-64-64h64v64h-64zm64 192h64v64h-64zm0-256h64v64h-64zm494.6 88.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h64v64h64v-64h174v216a42 42 0 0 0 42 42h216v494z")), t.FileOutline = u("file", o, i(r, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z")), t.FilterOutline = u("filter", o, i(r, "M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z")), t.FileWordOutline = u("file-word", o, i(r, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM528.1 472h-32.2c-5.5 0-10.3 3.7-11.6 9.1L434.6 680l-46.1-198.7c-1.3-5.4-6.1-9.3-11.7-9.3h-35.4a12.02 12.02 0 0 0-11.6 15.1l74.2 276c1.4 5.2 6.2 8.9 11.6 8.9h32c5.4 0 10.2-3.6 11.6-8.9l52.8-197 52.8 197c1.4 5.2 6.2 8.9 11.6 8.9h31.8c5.4 0 10.2-3.6 11.6-8.9l74.4-276a12.04 12.04 0 0 0-11.6-15.1H647c-5.6 0-10.4 3.9-11.7 9.3l-45.8 199.1-49.8-199.3c-1.3-5.4-6.1-9.1-11.6-9.1z")), t.FireOutline = u("fire", o, i(r, "M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4 0-43.5 9.8-85.2 29.1-124 18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0 0 58.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0 0 12.1-46.5c24.1 22.2 44.3 49 61.2 80.4 33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0 0 24.4 59.8 73.36 73.36 0 0 0 53.4 18.8c19.7-1 37.8-9.7 51-24.4 13.3-14.9 24.8-30.1 34.4-45.6 14 17.9 25.7 37.4 35 58.4 15.9 35.8 24 73.9 24 113.1 0 74.9-29.5 145.4-83 198.4z")), t.FileUnknownOutline = u("file-unknown", o, i(r, "M854.6 288.7L639.4 73.4c-6-6-14.2-9.4-22.7-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.6-9.4-22.6zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM402 549c0 5.4 4.4 9.5 9.8 9.5h32.4c5.4 0 9.8-4.2 9.8-9.4 0-28.2 25.8-51.6 58-51.6s58 23.4 58 51.5c0 25.3-21 47.2-49.3 50.9-19.3 2.8-34.5 20.3-34.7 40.1v32c0 5.5 4.5 10 10 10h32c5.5 0 10-4.5 10-10v-12.2c0-6 4-11.5 9.7-13.3 44.6-14.4 75-54 74.3-98.9-.8-55.5-49.2-100.8-108.5-101.6-61.4-.7-111.5 45.6-111.5 103zm78 195a32 32 0 1 0 64 0 32 32 0 1 0-64 0z")), t.FlagOutline = u("flag", o, i(r, "M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32zM184 568V232h368v336H184zm656 145H504v-73h112c4.4 0 8-3.6 8-8V377h216v336z")), t.FolderAddOutline = u("folder-add", o, i(r, "M484 443.1V528h-84.5c-4.1 0-7.5 3.1-7.5 7v42c0 3.8 3.4 7 7.5 7H484v84.9c0 3.9 3.2 7.1 7 7.1h42c3.9 0 7-3.2 7-7.1V584h84.5c4.1 0 7.5-3.2 7.5-7v-42c0-3.9-3.4-7-7.5-7H540v-84.9c0-3.9-3.1-7.1-7-7.1h-42c-3.8 0-7 3.2-7 7.1zm396-144.7H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z")), t.FolderOutline = u("folder", o, i(r, "M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z")), t.FolderOpenOutline = u("folder-open", o, i(r, "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z")), t.ForwardOutline = u("forward", o, i(c, "M825.8 498L538.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L825.8 526c8.3-7.2 8.3-20.8 0-28zm-320 0L218.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L505.8 526c4.1-3.6 6.2-8.8 6.2-14 0-5.2-2.1-10.4-6.2-14z")), t.FrownOutline = u("frown", o, i(r, "M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm352 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 0 1 248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 0 1 249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 0 1 775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 0 1 775 775zM512 533c-85.5 0-155.6 67.3-160 151.6a8 8 0 0 0 8 8.4h48.1c4.2 0 7.8-3.2 8.1-7.4C420 636.1 461.5 597 512 597s92.1 39.1 95.8 88.6c.3 4.2 3.9 7.4 8.1 7.4H664a8 8 0 0 0 8-8.4C667.6 600.3 597.5 533 512 533z")), t.FundOutline = u("fund", o, i(r, "M926 164H94c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V196c0-17.7-14.3-32-32-32zm-40 632H134V236h752v560zm-658.9-82.3c3.1 3.1 8.2 3.1 11.3 0l172.5-172.5 114.4 114.5c3.1 3.1 8.2 3.1 11.3 0l297-297.2c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8a8.03 8.03 0 0 0-11.3 0L531 565 416.6 450.5a8.03 8.03 0 0 0-11.3 0l-214.9 215a8.03 8.03 0 0 0 0 11.3l36.7 36.9z")), t.FunnelPlotOutline = u("funnel-plot", o, i(r, "M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 607.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V607.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V650h182.9v148zm9.6-226.6l-8.4 14.6H419.3l-8.4-14.6L334.4 438h355.2L613 571.4zM726.3 374H297.7l-85-148h598.6l-85 148z")), t.GiftOutline = u("gift", o, i(r, "M880 310H732.4c13.6-21.4 21.6-46.8 21.6-74 0-76.1-61.9-138-138-138-41.4 0-78.7 18.4-104 47.4-25.3-29-62.6-47.4-104-47.4-76.1 0-138 61.9-138 138 0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v200c0 4.4 3.6 8 8 8h40v344c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V550h40c4.4 0 8-3.6 8-8V342c0-17.7-14.3-32-32-32zm-334-74c0-38.6 31.4-70 70-70s70 31.4 70 70-31.4 70-70 70h-70v-70zm-138-70c38.6 0 70 31.4 70 70v70h-70c-38.6 0-70-31.4-70-70s31.4-70 70-70zM180 482V378h298v104H180zm48 68h250v308H228V550zm568 308H546V550h250v308zm48-376H546V378h298v104z")), t.GithubOutline = u("github", o, i(r, "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z")), t.GitlabOutline = u("gitlab", o, i(r, "M913.9 552.2L805 181.4v-.1c-7.6-22.9-25.7-36.5-48.3-36.5-23.4 0-42.5 13.5-49.7 35.2l-71.4 213H388.8l-71.4-213c-7.2-21.7-26.3-35.2-49.7-35.2-23.1 0-42.5 14.8-48.4 36.6L110.5 552.2c-4.4 14.7 1.2 31.4 13.5 40.7l368.5 276.4c2.6 3.6 6.2 6.3 10.4 7.8l8.6 6.4 8.5-6.4c4.9-1.7 9-4.7 11.9-8.9l368.4-275.4c12.4-9.2 18-25.9 13.6-40.6zM751.7 193.4c1-1.8 2.9-1.9 3.5-1.9 1.1 0 2.5.3 3.4 3L818 394.3H684.5l67.2-200.9zm-487.4 1c.9-2.6 2.3-2.9 3.4-2.9 2.7 0 2.9.1 3.4 1.7l67.3 201.2H206.5l57.8-200zM158.8 558.7l28.2-97.3 202.4 270.2-230.6-172.9zm73.9-116.4h122.1l90.8 284.3-212.9-284.3zM512.9 776L405.7 442.3H620L512.9 776zm157.9-333.7h119.5L580 723.1l90.8-280.8zm-40.7 293.9l207.3-276.7 29.5 99.2-236.8 177.5z")), t.HeartOutline = u("heart", o, i(r, "M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z")), t.HddOutline = u("hdd", o, i(r, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM496 208H312c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 544h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H312c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm328 244a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")), t.HighlightOutline = u("highlight", o, i(r, "M957.6 507.4L603.2 158.2a7.9 7.9 0 0 0-11.2 0L353.3 393.4a8.03 8.03 0 0 0-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 0 0-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6 40.4 39.8a7.9 7.9 0 0 0 11.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0 0 11.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2zM389.8 796.2H229.6l134.4-133 80.1 78.9-54.3 54.1zm154.8-62.1L373.2 565.2l68.6-67.6 171.4 168.9-68.6 67.6zM713.1 658L450.3 399.1 597.6 254l262.8 259-147.3 145z")), t.HomeOutline = u("home", o, i(r, "M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z")), t.HourglassOutline = u("hourglass", o, i(r, "M742 318V184h86c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h86v134c0 81.5 42.4 153.2 106.4 194-64 40.8-106.4 112.5-106.4 194v134h-86c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h632c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-86V706c0-81.5-42.4-153.2-106.4-194 64-40.8 106.4-112.5 106.4-194zm-72 388v134H354V706c0-42.2 16.4-81.9 46.3-111.7C430.1 564.4 469.8 548 512 548s81.9 16.4 111.7 46.3C653.6 624.1 670 663.8 670 706zm0-388c0 42.2-16.4 81.9-46.3 111.7C593.9 459.6 554.2 476 512 476s-81.9-16.4-111.7-46.3A156.63 156.63 0 0 1 354 318V184h316v134z")), t.Html5Outline = u("html5", o, i(r, "M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z")), t.IdcardOutline = u("idcard", o, i(r, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560zM610.3 476h123.4c1.3 0 2.3-3.6 2.3-8v-48c0-4.4-1-8-2.3-8H610.3c-1.3 0-2.3 3.6-2.3 8v48c0 4.4 1 8 2.3 8zm4.8 144h185.7c3.9 0 7.1-3.6 7.1-8v-48c0-4.4-3.2-8-7.1-8H615.1c-3.9 0-7.1 3.6-7.1 8v48c0 4.4 3.2 8 7.1 8zM224 673h43.9c4.2 0 7.6-3.3 7.9-7.5 3.8-50.5 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H522a8 8 0 0 0 8-8.4c-2.8-53.3-32-99.7-74.6-126.1a111.8 111.8 0 0 0 29.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 0 0-74.6 126.1c-.4 4.6 3.2 8.4 7.8 8.4zm149-262c28.5 0 51.7 23.3 51.7 52s-23.2 52-51.7 52-51.7-23.3-51.7-52 23.2-52 51.7-52z")), t.InfoCircleOutline = u("info-circle", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z")), t.InstagramOutline = u("instagram", o, i(r, "M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z")), t.InsuranceOutline = u("insurance", o, i(r, "M441.6 306.8L403 288.6a6.1 6.1 0 0 0-8.4 3.7c-17.5 58.5-45.2 110.1-82.2 153.6a6.05 6.05 0 0 0-1.2 5.6l13.2 43.5c1.3 4.4 7 5.7 10.2 2.4 7.7-8.1 15.4-16.9 23.1-26V656c0 4.4 3.6 8 8 8H403c4.4 0 8-3.6 8-8V393.1a429.2 429.2 0 0 0 33.6-79c1-2.9-.3-6-3-7.3zm26.8 9.2v127.2c0 4.4 3.6 8 8 8h65.9v18.6h-94.9c-4.4 0-8 3.6-8 8v35.6c0 4.4 3.6 8 8 8h55.1c-19.1 30.8-42.4 55.7-71 76a6 6 0 0 0-1.6 8.1l22.8 36.5c1.9 3.1 6.2 3.8 8.9 1.4 31.6-26.8 58.7-62.9 80.6-107.6v120c0 4.4 3.6 8 8 8h36.2c4.4 0 8-3.6 8-8V536c21.3 41.7 47.5 77.5 78.1 106.9 2.6 2.5 6.8 2.1 8.9-.7l26.3-35.3c2-2.7 1.4-6.5-1.2-8.4-30.5-22.6-54.2-47.8-72.3-76.9h59c4.4 0 8-3.6 8-8V478c0-4.4-3.6-8-8-8h-98.8v-18.6h66.7c4.4 0 8-3.6 8-8V316c0-4.4-3.6-8-8-8H476.4c-4.4 0-8 3.6-8 8zm51.5 42.8h97.9v41.6h-97.9v-41.6zm347-188.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6z")), t.InteractionOutline = u("interaction", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM304.8 524h50.7c3.7 0 6.8-3 6.8-6.8v-78.9c0-19.7 15.9-35.6 35.5-35.6h205.7v53.4c0 5.7 6.5 8.8 10.9 5.3l109.1-85.7c3.5-2.7 3.5-8 0-10.7l-109.1-85.7c-4.4-3.5-10.9-.3-10.9 5.3V338H397.7c-55.1 0-99.7 44.8-99.7 100.1V517c0 4 3 7 6.8 7zm-4.2 134.9l109.1 85.7c4.4 3.5 10.9.3 10.9-5.3v-53.4h205.7c55.1 0 99.7-44.8 99.7-100.1v-78.9c0-3.7-3-6.8-6.8-6.8h-50.7c-3.7 0-6.8 3-6.8 6.8v78.9c0 19.7-15.9 35.6-35.5 35.6H420.6V568c0-5.7-6.5-8.8-10.9-5.3l-109.1 85.7c-3.5 2.5-3.5 7.8 0 10.5z")), t.InterationOutline = u("interation", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM304.8 524h50.7c3.7 0 6.8-3 6.8-6.8v-78.9c0-19.7 15.9-35.6 35.5-35.6h205.7v53.4c0 5.7 6.5 8.8 10.9 5.3l109.1-85.7c3.5-2.7 3.5-8 0-10.7l-109.1-85.7c-4.4-3.5-10.9-.3-10.9 5.3V338H397.7c-55.1 0-99.7 44.8-99.7 100.1V517c0 4 3 7 6.8 7zm-4.2 134.9l109.1 85.7c4.4 3.5 10.9.3 10.9-5.3v-53.4h205.7c55.1 0 99.7-44.8 99.7-100.1v-78.9c0-3.7-3-6.8-6.8-6.8h-50.7c-3.7 0-6.8 3-6.8 6.8v78.9c0 19.7-15.9 35.6-35.5 35.6H420.6V568c0-5.7-6.5-8.8-10.9-5.3l-109.1 85.7c-3.5 2.5-3.5 7.8 0 10.5z")), t.LayoutOutline = u("layout", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-696 72h136v656H184V184zm656 656H384V384h456v456zM384 320V184h456v136H384z")), t.LeftCircleOutline = u("left-circle", o, i(r, "M603.3 327.5l-246 178a7.95 7.95 0 0 0 0 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z", "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z")), t.LeftSquareOutline = u("left-square", o, i(r, "M365.3 518.5l246 178c5.3 3.8 12.7 0 12.7-6.5v-46.9c0-10.2-4.9-19.9-13.2-25.9L465.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5l-246 178a8.05 8.05 0 0 0 0 13z", "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")), t.LikeOutline = u("like", o, i(r, "M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z")), t.LinkedinOutline = u("linkedin", o, i(r, "M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z")), t.LockOutline = u("lock", o, i(r, "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z")), t.MedicineBoxOutline = u("medicine-box", o, i(r, "M839.2 278.1a32 32 0 0 0-30.4-22.1H736V144c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32v112h-72.8a31.9 31.9 0 0 0-30.4 22.1L112 502v378c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V502l-72.8-223.9zM360 184h304v72H360v-72zm480 656H184V513.4L244.3 328h535.4L840 513.4V840zM652 572H544V464c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V636h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z")), t.MehOutline = u("meh", o, i(r, "M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm352 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 0 1 248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 0 1 249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 0 1 775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 0 1 775 775zM664 565H360c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z")), t.MailOutline = u("mail", o, i(r, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z")), t.MessageOutline = u("message", o, i(r, "M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z")), t.MinusCircleOutline = u("minus-circle", o, i(r, "M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z", "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z")), t.MinusSquareOutline = u("minus-square", o, i(r, "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z", "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")), t.MobileOutline = u("mobile", o, i(r, "M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")), t.MoneyCollectOutline = u("money-collect", o, i(r, "M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z")), t.PauseCircleOutline = u("pause-circle", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm-88-532h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8zm224 0h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8z")), t.PayCircleOutline = u("pay-circle", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm159.6-585h-59.5c-3 0-5.8 1.7-7.1 4.4l-90.6 180H511l-90.6-180a8 8 0 0 0-7.1-4.4h-60.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9L457 515.7h-61.4c-4.4 0-8 3.6-8 8v29.9c0 4.4 3.6 8 8 8h81.7V603h-81.7c-4.4 0-8 3.6-8 8v29.9c0 4.4 3.6 8 8 8h81.7V717c0 4.4 3.6 8 8 8h54.3c4.4 0 8-3.6 8-8v-68.1h82c4.4 0 8-3.6 8-8V611c0-4.4-3.6-8-8-8h-82v-41.5h82c4.4 0 8-3.6 8-8v-29.9c0-4.4-3.6-8-8-8h-62l111.1-204.8c.6-1.2 1-2.5 1-3.8-.1-4.4-3.7-8-8.1-8z")), t.NotificationOutline = u("notification", o, i(r, "M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.7c-3.7 11.6-5.7 23.9-5.7 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1zm496 58.4L318.8 611.3l-12.9-5.2H184V417.9h121.9l12.9-5.2L840 203.3v617.4z")), t.PhoneOutline = u("phone", o, i(r, "M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z")), t.PictureOutline = u("picture", o, i(r, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 1 0 0-176 88 88 0 0 0 0 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z")), t.PieChartOutline = u("pie-chart", o, i(r, "M864 518H506V160c0-4.4-3.6-8-8-8h-26a398.46 398.46 0 0 0-282.8 117.1 398.19 398.19 0 0 0-85.7 127.1A397.61 397.61 0 0 0 72 552a398.46 398.46 0 0 0 117.1 282.8c36.7 36.7 79.5 65.6 127.1 85.7A397.61 397.61 0 0 0 472 952a398.46 398.46 0 0 0 282.8-117.1c36.7-36.7 65.6-79.5 85.7-127.1A397.61 397.61 0 0 0 872 552v-26c0-4.4-3.6-8-8-8zM705.7 787.8A331.59 331.59 0 0 1 470.4 884c-88.1-.4-170.9-34.9-233.2-97.2C174.5 724.1 140 640.7 140 552c0-88.7 34.5-172.1 97.2-234.8 54.6-54.6 124.9-87.9 200.8-95.5V586h364.3c-7.7 76.3-41.3 147-96.6 201.8zM952 462.4l-2.6-28.2c-8.5-92.1-49.4-179-115.2-244.6A399.4 399.4 0 0 0 589 74.6L560.7 72c-4.7-.4-8.7 3.2-8.7 7.9V464c0 4.4 3.6 8 8 8l384-1c4.7 0 8.4-4 8-8.6zm-332.2-58.2V147.6a332.24 332.24 0 0 1 166.4 89.8c45.7 45.6 77 103.6 90 166.1l-256.4.7z")), t.PlaySquareOutline = u("play-square", o, i(r, "M442.3 677.6l199.4-156.7a11.3 11.3 0 0 0 0-17.7L442.3 346.4c-7.4-5.8-18.3-.6-18.3 8.8v313.5c0 9.4 10.9 14.7 18.3 8.9z", "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")), t.PlayCircleOutline = u("play-circle", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z")), t.PlusCircleOutline = u("plus-circle", o, i(r, "M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z", "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z")), t.PrinterOutline = u("printer", o, i(r, "M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zm32-104H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM360 180h304v152H360V180zm304 664H360V568h304v276zm200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v292z")), t.PlusSquareOutline = u("plus-square", o, i(r, "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z", "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")), t.ProfileOutline = u("profile", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 144a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 144a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")), t.ProjectOutline = u("project", o, i(r, "M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8zm216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")), t.PushpinOutline = u("pushpin", o, i(r, "M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3a33.23 33.23 0 0 0-2.7 49.4l181.7 181.7-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8zM666.2 549.3l-24.5 24.5 3.8 34.4a259.92 259.92 0 0 1-30.4 153.9L262 408.8c12.9-7.1 26.3-13.1 40.3-17.9 27.2-9.4 55.7-14.1 84.7-14.1 9.6 0 19.3.5 28.9 1.6l34.4 3.8 24.5-24.5L608.5 224 800 415.5 666.2 549.3z")), t.PropertySafetyOutline = u("property-safety", o, i(r, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zM430.5 318h-46c-1.7 0-3.3.4-4.8 1.2a10.1 10.1 0 0 0-4 13.6l88 161.1h-45.2c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1v29.7h-63.1c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1V658c0 5.5 4.5 10 10 10h41.3c5.5 0 10-4.5 10-10v-51.8h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-63.4v-29.7h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-45.7l87.7-161.1a10.05 10.05 0 0 0-8.8-14.8h-45c-3.8 0-7.2 2.1-8.9 5.5l-73.2 144.3-72.9-144.3c-1.7-3.4-5.2-5.5-9-5.5z")), t.QuestionCircleOutline = u("question-circle", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")), t.ReadOutline = u("read", o, i(r, "M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3 6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39zm563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5 48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5z")), t.ReconciliationOutline = u("reconciliation", o, i(r, "M676 565c-50.8 0-92 41.2-92 92s41.2 92 92 92 92-41.2 92-92-41.2-92-92-92zm0 126c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.2 34-34 34zm204-523H668c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56H264c-17.7 0-32 14.3-32 32v200h-88c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h336c17.7 0 32-14.3 32-32v-16h368c17.7 0 32-14.3 32-32V200c0-17.7-14.3-32-32-32zm-412 64h72v-56h64v56h72v48H468v-48zm-20 616H176V616h272v232zm0-296H176v-88h272v88zm392 240H512V432c0-17.7-14.3-32-32-32H304V240h100v104h336V240h100v552zM704 408v96c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-96c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zM592 512h48c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z")), t.RedEnvelopeOutline = u("red-envelope", o, i(r, "M440.6 462.6a8.38 8.38 0 0 0-7.5-4.6h-48.8c-1.3 0-2.6.4-3.9 1a8.4 8.4 0 0 0-3.4 11.4l87.4 161.1H419c-4.6 0-8.4 3.8-8.4 8.4V665c0 4.6 3.8 8.4 8.4 8.4h63V702h-63c-4.6 0-8.4 3.8-8.4 8.4v25.1c0 4.6 3.8 8.4 8.4 8.4h63v49.9c0 4.6 3.8 8.4 8.4 8.4h43.7c4.6 0 8.4-3.8 8.4-8.4v-49.9h63.3c4.7 0 8.4-3.8 8.2-8.5v-25c0-4.6-3.8-8.4-8.4-8.4h-63.3v-28.6h63.3c4.6 0 8.4-3.8 8.4-8.4v-25.1c0-4.6-3.8-8.4-8.4-8.4h-45.9l87.2-161a8.45 8.45 0 0 0-7.4-12.4h-47.8c-3.1 0-6 1.8-7.5 4.6l-71.9 141.9-71.7-142zM832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V193.1l260.3 204.1c11.6 9.1 27.9 9.1 39.5 0L792 193.1V888zm0-751.3h-31.7L512 331.3 263.7 136.7H232v-.7h560v.7z")), t.RestOutline = u("rest", o, i(r, "M508 704c79.5 0 144-64.5 144-144s-64.5-144-144-144-144 64.5-144 144 64.5 144 144 144zm0-224c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z", "M832 256h-28.1l-35.7-120.9c-4-13.7-16.5-23.1-30.7-23.1h-451c-14.3 0-26.8 9.4-30.7 23.1L220.1 256H192c-17.7 0-32 14.3-32 32v28c0 4.4 3.6 8 8 8h45.8l47.7 558.7a32 32 0 0 0 31.9 29.3h429.2a32 32 0 0 0 31.9-29.3L802.2 324H856c4.4 0 8-3.6 8-8v-28c0-17.7-14.3-32-32-32zm-518.6-76h397.2l22.4 76H291l22.4-76zm376.2 664H326.4L282 324h451.9l-44.3 520z")), t.RightCircleOutline = u("right-circle", o, i(r, "M666.7 505.5l-246-178A8 8 0 0 0 408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z", "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z")), t.RocketOutline = u("rocket", o, i(r, "M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 0 0-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0 0 43.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0 0 43.1-30.5 97.52 97.52 0 0 0 21.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0 1 62.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 0 1-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1 0 96 0 48 48 0 1 0-96 0z")), t.RightSquareOutline = u("right-square", o, i(r, "M412.7 696.5l246-178c4.4-3.2 4.4-9.7 0-12.9l-246-178c-5.3-3.8-12.7 0-12.7 6.5V381c0 10.2 4.9 19.9 13.2 25.9L558.6 512 413.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5z", "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")), t.SafetyCertificateOutline = u("safety-certificate", o, i(r, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z")), t.ScheduleOutline = u("schedule", o, i(r, "M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0 0 25.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z")), t.SaveOutline = u("save", o, i(r, "M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z")), t.SecurityScanOutline = u("security-scan", o, i(r, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zM402.9 528.8l-77.5 77.5a8.03 8.03 0 0 0 0 11.3l34 34c3.1 3.1 8.2 3.1 11.3 0l77.5-77.5c55.7 35.1 130.1 28.4 178.6-20.1 56.3-56.3 56.3-147.5 0-203.8-56.3-56.3-147.5-56.3-203.8 0-48.5 48.5-55.2 123-20.1 178.6zm65.4-133.3c31.3-31.3 82-31.3 113.2 0 31.3 31.3 31.3 82 0 113.2-31.3 31.3-82 31.3-113.2 0s-31.3-81.9 0-113.2z")), t.SettingOutline = u("setting", o, i(r, "M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z")), t.ShoppingOutline = u("shopping", o, i(r, "M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z")), t.SkinOutline = u("skin", o, i(r, "M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44zm-28 268H723v432H301V394H182V198h153.3c28.2 71.2 97.5 120 176.7 120s148.5-48.8 176.7-120H842v196z")), t.SkypeOutline = u("skype", o, i(r, "M883.7 578.6c4.1-22.5 6.3-45.5 6.3-68.5 0-51-10-100.5-29.7-147-19-45-46.3-85.4-81-120.1a375.79 375.79 0 0 0-120.1-80.9c-46.6-19.7-96-29.7-147-29.7-24 0-48.1 2.3-71.5 6.8A225.1 225.1 0 0 0 335.6 113c-59.7 0-115.9 23.3-158.1 65.5A222.25 222.25 0 0 0 112 336.6c0 38 9.8 75.4 28.1 108.4-3.7 21.4-5.7 43.3-5.7 65.1 0 51 10 100.5 29.7 147 19 45 46.2 85.4 80.9 120.1 34.7 34.7 75.1 61.9 120.1 80.9 46.6 19.7 96 29.7 147 29.7 22.2 0 44.4-2 66.2-5.9 33.5 18.9 71.3 29 110 29 59.7 0 115.9-23.2 158.1-65.5 42.3-42.2 65.5-98.4 65.5-158.1.1-38-9.7-75.5-28.2-108.7zm-88.1 216C766.9 823.4 729 839 688.4 839c-26.1 0-51.8-6.8-74.6-19.7l-22.5-12.7-25.5 4.5c-17.8 3.2-35.8 4.8-53.6 4.8-41.4 0-81.3-8.1-119.1-24.1-36.3-15.3-69-37.3-97.2-65.5a304.29 304.29 0 0 1-65.5-97.1c-16-37.7-24-77.6-24-119 0-17.4 1.6-35.2 4.6-52.8l4.4-25.1L203 410a151.02 151.02 0 0 1-19.1-73.4c0-40.6 15.7-78.5 44.4-107.2C257.1 200.7 295 185 335.6 185a153 153 0 0 1 71.4 17.9l22.4 11.8 24.8-4.8c18.9-3.6 38.4-5.5 58-5.5 41.4 0 81.3 8.1 119 24 36.5 15.4 69.1 37.4 97.2 65.5 28.2 28.1 50.2 60.8 65.6 97.2 16 37.7 24 77.6 24 119 0 18.4-1.7 37-5.1 55.5l-4.7 25.5 12.6 22.6c12.6 22.5 19.2 48 19.2 73.7 0 40.7-15.7 78.5-44.4 107.2zM583.4 466.2L495 446.6c-33.6-7.7-72.3-17.8-72.3-49.5s27.1-53.9 76.1-53.9c98.7 0 89.7 67.8 138.7 67.8 25.8 0 48.4-15.2 48.4-41.2 0-60.8-97.4-106.5-180-106.5-89.7 0-185.2 38.1-185.2 139.5 0 48.8 17.4 100.8 113.6 124.9l119.4 29.8c36.1 8.9 45.2 29.2 45.2 47.6 0 30.5-30.3 60.3-85.2 60.3-107.2 0-92.3-82.5-149.7-82.5-25.8 0-44.5 17.8-44.5 43.1 0 49.4 60 115.4 194.2 115.4 127.7 0 191-61.5 191-144 0-53.1-24.5-109.6-121.3-131.2z")), t.SlackSquareOutline = u("slack-square", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM529 311.4c0-27.8 22.5-50.4 50.3-50.4 27.8 0 50.3 22.6 50.3 50.4v134.4c0 27.8-22.5 50.4-50.3 50.4-27.8 0-50.3-22.6-50.3-50.4V311.4zM361.5 580.2c0 27.8-22.5 50.4-50.3 50.4a50.35 50.35 0 0 1-50.3-50.4c0-27.8 22.5-50.4 50.3-50.4h50.3v50.4zm134 134.4c0 27.8-22.5 50.4-50.3 50.4-27.8 0-50.3-22.6-50.3-50.4V580.2c0-27.8 22.5-50.4 50.3-50.4a50.35 50.35 0 0 1 50.3 50.4v134.4zm-50.2-218.4h-134c-27.8 0-50.3-22.6-50.3-50.4 0-27.8 22.5-50.4 50.3-50.4h134c27.8 0 50.3 22.6 50.3 50.4-.1 27.9-22.6 50.4-50.3 50.4zm0-134.4c-13.3 0-26.1-5.3-35.6-14.8S395 324.8 395 311.4c0-27.8 22.5-50.4 50.3-50.4 27.8 0 50.3 22.6 50.3 50.4v50.4h-50.3zm134 403.2c-27.8 0-50.3-22.6-50.3-50.4v-50.4h50.3c27.8 0 50.3 22.6 50.3 50.4 0 27.8-22.5 50.4-50.3 50.4zm134-134.4h-134a50.35 50.35 0 0 1-50.3-50.4c0-27.8 22.5-50.4 50.3-50.4h134c27.8 0 50.3 22.6 50.3 50.4 0 27.8-22.5 50.4-50.3 50.4zm0-134.4H663v-50.4c0-27.8 22.5-50.4 50.3-50.4s50.3 22.6 50.3 50.4c0 27.8-22.5 50.4-50.3 50.4z")), t.SlidersOutline = u("sliders", o, i(r, "M320 224h-66v-56c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v56h-66c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h66v56c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-56h66c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zm-60 508h-80V292h80v440zm644-436h-66v-96c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v96h-66c-4.4 0-8 3.6-8 8v416c0 4.4 3.6 8 8 8h66v96c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-96h66c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8zm-60 364h-80V364h80v296zM612 404h-66V232c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v172h-66c-4.4 0-8 3.6-8 8v200c0 4.4 3.6 8 8 8h66v172c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V620h66c4.4 0 8-3.6 8-8V412c0-4.4-3.6-8-8-8zm-60 145a3 3 0 0 1-3 3h-74a3 3 0 0 1-3-3v-74a3 3 0 0 1 3-3h74a3 3 0 0 1 3 3v74z")), t.SmileOutline = u("smile", o, i(r, "M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm352 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 0 1 248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 0 1 249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 0 1 775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 0 1 775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 0 0-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 0 0-8-8.4z")), t.SnippetsOutline = u("snippets", o, i(r, "M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 888H232V336h218v174c0 22.1 17.9 40 40 40h174v338zm0-402H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z")), t.SoundOutline = u("sound", o, i(r, "M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 0 0-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0 0 21.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0 0 21.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 0 0-21.7-5.9L746 287.8a15.99 15.99 0 0 0-5.8 21.8L760 344z")), t.StarOutline = u("star", o, i(r, "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z")), t.StepBackwardOutline = u("step-backward", o, i(c, "M347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 0 0 0 33.9M330 864h-64a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v688a8 8 0 0 1-8 8")), t.StepForwardOutline = u("step-forward", o, i(c, "M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 0 1 0 33.9M694 864h64a8 8 0 0 0 8-8V168a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v688a8 8 0 0 0 8 8")), t.StopOutline = u("stop", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z")), t.SwitcherOutline = u("switcher", o, i(r, "M752 240H144c-17.7 0-32 14.3-32 32v608c0 17.7 14.3 32 32 32h608c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32zm-40 600H184V312h528v528zm168-728H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h576v576c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32zM300 550h296v64H300z")), t.TagOutline = u("tag", o, i(r, "M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 0 0 0 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM459.7 834.7L189.3 564.3 589 164.6 836 188l23.4 247-399.7 399.7zM680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z")), t.TabletOutline = u("tablet", o, i(r, "M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm-8 824H232V136h560v752zM472 784a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")), t.ShopOutline = u("shop", o, i(r, "M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h676c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zM214 184h596v88H214v-88zm362 656.1H448V736h128v104.1zm234 0H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4 22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 3-1.3 6-2.6 9-4v242.2zm30-404.4c0 59.8-49 108.3-109.3 108.3-40.8 0-76.4-22.1-95.2-54.9-2.9-5-8.1-8.1-13.9-8.1h-.6c-5.7 0-11 3.1-13.9 8.1A109.24 109.24 0 0 1 512 544c-40.7 0-76.2-22-95-54.7-3-5.1-8.4-8.3-14.3-8.3s-11.4 3.2-14.3 8.3a109.63 109.63 0 0 1-95.1 54.7C233 544 184 495.5 184 435.7v-91.2c0-.3.2-.5.5-.5h655c.3 0 .5.2.5.5v91.2z")), t.TagsOutline = u("tags", o, i(r, "M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm62.6-651.7l224.6 19 19 224.6L477.5 694 233.9 450.5l311.9-311.9zm60.16 186.23a48 48 0 1 0 67.88-67.89 48 48 0 1 0-67.88 67.89zM889.7 539.8l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z")), t.TaobaoCircleOutline = u("taobao-circle", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM315.7 291.5c27.3 0 49.5 22.1 49.5 49.4s-22.1 49.4-49.5 49.4a49.4 49.4 0 1 1 0-98.8zM366.9 578c-13.6 42.3-10.2 26.7-64.4 144.5l-78.5-49s87.7-79.8 105.6-116.2c19.2-38.4-21.1-58.9-21.1-58.9l-60.2-37.5 32.7-50.2c45.4 33.7 48.7 36.6 79.2 67.2 23.8 23.9 20.7 56.8 6.7 100.1zm427.2 55c-15.3 143.8-202.4 90.3-202.4 90.3l10.2-41.1 43.3 9.3c80 5 72.3-64.9 72.3-64.9V423c.6-77.3-72.6-85.4-204.2-38.3l30.6 8.3c-2.5 9-12.5 23.2-25.2 38.6h176v35.6h-99.1v44.5h98.7v35.7h-98.7V622c14.9-4.8 28.6-11.5 40.5-20.5l-8.7-32.5 46.5-14.4 38.8 94.9-57.3 23.9-10.2-37.8c-25.6 19.5-78.8 48-171.8 45.4-99.2 2.6-73.7-112-73.7-112l2.5-1.3H472c-.5 14.7-6.6 38.7 1.7 51.8 6.8 10.8 24.2 12.6 35.3 13.1 1.3.1 2.6.1 3.9.1v-85.3h-101v-35.7h101v-44.5H487c-22.7 24.1-43.5 44.1-43.5 44.1l-30.6-26.7c21.7-22.9 43.3-59.1 56.8-83.2-10.9 4.4-22 9.2-33.6 14.2-11.2 14.3-24.2 29-38.7 43.5.5.8-50-28.4-50-28.4 52.2-44.4 81.4-139.9 81.4-139.9l72.5 20.4s-5.9 14-18.4 35.6c290.3-82.3 307.4 50.5 307.4 50.5s19.1 91.8 3.8 235.7z")), t.ToolOutline = u("tool", o, i(r, "M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 0 1 144-53.5L537 318.9a32.05 32.05 0 0 0 0 45.3l124.5 124.5a32.05 32.05 0 0 0 45.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z")), t.ThunderboltOutline = u("thunderbolt", o, i(r, "M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z")), t.TrophyOutline = u("trophy", o, i(r, "M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 0 0-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 0 0-44-44zM184 352V232h64v207.6a91.99 91.99 0 0 1-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z")), t.UnlockOutline = u("unlock", o, i(r, "M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z")), t.UpCircleOutline = u("up-circle", o, i(r, "M518.5 360.3a7.95 7.95 0 0 0-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z", "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z")), t.UpSquareOutline = u("up-square", o, i(r, "M334 624h46.9c10.2 0 19.9-4.9 25.9-13.2L512 465.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246a7.95 7.95 0 0 0-12.9 0l-178 246A7.96 7.96 0 0 0 334 624z", "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")), t.UsbOutline = u("usb", o, i(r, "M760 432V144c0-17.7-14.3-32-32-32H296c-17.7 0-32 14.3-32 32v288c-66.2 0-120 52.1-120 116v356c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V548c0-24.3 21.6-44 48.1-44h495.8c26.5 0 48.1 19.7 48.1 44v356c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V548c0-63.9-53.8-116-120-116zm-424 0V184h352v248H336zm120-184h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm160 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z")), t.VideoCameraOutline = u("video-camera", o, i(r, "M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226zM208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z")), t.WalletOutline = u("wallet", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0 264H184V184h656v200H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200zM580 512a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")), t.WarningOutline = u("warning", o, i(r, "M464 720a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z")), t.WechatOutline = u("wechat", o, i(r, "M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 0 1 9.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 0 0 6.4-2.6 9 9 0 0 0 2.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 0 1-36 35.9z")), t.WeiboCircleOutline = u("weibo-circle", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-44.4 672C353.1 736 236 680.4 236 588.9c0-47.8 30.2-103.1 82.3-155.3 69.5-69.6 150.6-101.4 181.1-70.8 13.5 13.5 14.8 36.8 6.1 64.6-4.5 14 13.1 6.3 13.1 6.3 56.2-23.6 105.2-25 123.1.7 9.6 13.7 8.6 32.8-.2 55.1-4.1 10.2 1.3 11.8 9 14.1 31.7 9.8 66.9 33.6 66.9 75.5.2 69.5-99.7 156.9-249.8 156.9zm207.3-290.8a34.9 34.9 0 0 0-7.2-34.1 34.68 34.68 0 0 0-33.1-10.7 18.24 18.24 0 0 1-7.6-35.7c24.1-5.1 50.1 2.3 67.7 21.9 17.7 19.6 22.4 46.3 14.9 69.8a18.13 18.13 0 0 1-22.9 11.7 18.18 18.18 0 0 1-11.8-22.9zm106 34.3s0 .1 0 0a21.1 21.1 0 0 1-26.6 13.7 21.19 21.19 0 0 1-13.6-26.7c11-34.2 4-73.2-21.7-101.8a104.04 104.04 0 0 0-98.9-32.1 21.14 21.14 0 0 1-25.1-16.3 21.07 21.07 0 0 1 16.2-25.1c49.4-10.5 102.8 4.8 139.1 45.1 36.3 40.2 46.1 95.1 30.6 143.2zm-334.5 6.1c-91.4 9-160.7 65.1-154.7 125.2 5.9 60.1 84.8 101.5 176.2 92.5 91.4-9.1 160.7-65.1 154.7-125.3-5.9-60.1-84.8-101.5-176.2-92.4zm80.2 141.7c-18.7 42.3-72.3 64.8-117.8 50.1-43.9-14.2-62.5-57.7-43.3-96.8 18.9-38.4 68-60.1 111.5-48.8 45 11.7 68 54.2 49.6 95.5zm-93-32.2c-14.2-5.9-32.4.2-41.2 13.9-8.8 13.8-4.7 30.2 9.3 36.6 14.3 6.5 33.2.3 42-13.8 8.8-14.3 4.2-30.6-10.1-36.7zm34.9-14.5c-5.4-2.2-12.2.5-15.4 5.8-3.1 5.4-1.4 11.5 4.1 13.8 5.5 2.3 12.6-.3 15.8-5.8 3-5.6 1-11.8-4.5-13.8z")), t.WindowsOutline = u("windows", o, i(r, "M120.1 770.6L443 823.2V543.8H120.1v226.8zm63.4-163.5h196.2v141.6l-196.2-31.9V607.1zm340.3 226.5l382 62.2v-352h-382v289.8zm63.4-226.5h255.3v214.4l-255.3-41.6V607.1zm-63.4-415.7v288.8h382V128.1l-382 63.3zm318.7 225.5H587.3V245l255.3-42.3v214.2zm-722.4 63.3H443V201.9l-322.9 53.5v224.8zM183.5 309l196.2-32.5v140.4H183.5V309z")), t.YahooOutline = u("yahoo", o, i(r, "M859.9 681.4h-14.1c-27.1 0-49.2 22.2-49.2 49.3v14.1c0 27.1 22.2 49.3 49.2 49.3h14.1c27.1 0 49.2-22.2 49.2-49.3v-14.1c0-27.1-22.2-49.3-49.2-49.3zM402.6 231C216.2 231 65 357 65 512.5S216.2 794 402.6 794s337.6-126 337.6-281.5S589.1 231 402.6 231zm0 507C245.1 738 121 634.6 121 512.5c0-62.3 32.3-119.7 84.9-161v48.4h37l159.8 159.9v65.3h-84.4v56.3h225.1v-56.3H459v-65.3l103.5-103.6h65.3v-56.3H459v65.3l-28.1 28.1-93.4-93.5h37v-56.3H216.4c49.4-35 114.3-56.6 186.2-56.6 157.6 0 281.6 103.4 281.6 225.5S560.2 738 402.6 738zm534.7-507H824.7c-15.5 0-27.7 12.6-27.1 28.1l13.1 366h84.4l65.4-366.4c2.7-15.2-7.8-27.7-23.2-27.7z")), t.WeiboSquareOutline = u("weibo-square", o, i(r, "M433.6 595.1c-14.2-5.9-32.4.2-41.2 13.9-8.8 13.8-4.7 30.2 9.3 36.6 14.3 6.5 33.2.3 42-13.8 8.8-14.3 4.2-30.6-10.1-36.7zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM467.6 736C353.1 736 236 680.4 236 588.9c0-47.8 30.2-103.1 82.3-155.3 69.5-69.6 150.6-101.4 181.1-70.8 13.5 13.5 14.8 36.8 6.1 64.6-4.5 14 13.1 6.3 13.1 6.3 56.2-23.6 105.2-25 123.1.7 9.6 13.7 8.6 32.8-.2 55.1-4.1 10.2 1.3 11.8 9 14.1 31.7 9.8 66.9 33.6 66.9 75.5.2 69.5-99.7 156.9-249.8 156.9zm207.3-290.8a34.9 34.9 0 0 0-7.2-34.1 34.68 34.68 0 0 0-33.1-10.7 18.24 18.24 0 0 1-7.6-35.7c24.1-5.1 50.1 2.3 67.7 21.9 17.7 19.6 22.4 46.3 14.9 69.8a18.13 18.13 0 0 1-22.9 11.7 18.18 18.18 0 0 1-11.8-22.9zm106 34.3s0 .1 0 0a21.1 21.1 0 0 1-26.6 13.7 21.19 21.19 0 0 1-13.6-26.7c11-34.2 4-73.2-21.7-101.8a104.04 104.04 0 0 0-98.9-32.1 21.14 21.14 0 0 1-25.1-16.3 21.07 21.07 0 0 1 16.2-25.1c49.4-10.5 102.8 4.8 139.1 45.1 36.3 40.2 46.1 95.1 30.6 143.2zm-334.5 6.1c-91.4 9-160.7 65.1-154.7 125.2 5.9 60.1 84.8 101.5 176.2 92.5 91.4-9.1 160.7-65.1 154.7-125.3-5.9-60.1-84.8-101.5-176.2-92.4zm80.2 141.7c-18.7 42.3-72.3 64.8-117.8 50.1-43.9-14.2-62.5-57.7-43.3-96.8 18.9-38.4 68-60.1 111.5-48.8 45 11.7 68 54.2 49.6 95.5zm-58.1-46.7c-5.4-2.2-12.2.5-15.4 5.8-3.1 5.4-1.4 11.5 4.1 13.8 5.5 2.3 12.6-.3 15.8-5.8 3-5.6 1-11.8-4.5-13.8z")), t.YuqueOutline = u("yuque", o, i(r, "M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3 .1 0 87.4 55.6 52.4 154.7-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-.2 35.9-.3 46.3-.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6zm-204.1 334c-10.6 0-26.2.1-46.8.3l-23.6.2-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6-52.5 12.6-110 16.2-172.7 9.6 18-20.5 36.5-41.6 55.4-63.1 92-104.6 173.8-197.5 236.9-268.5l1.4-1.4 1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1 9.7-11.1 17.3-19.9 24.5-28.6 30.7-36.7 52.2-67.8 69-102.2l1.6-3.3 1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8 22.5.7 46.5 1.9 71.7 3.6 33.3 2.3 55.5 12.9 71.1 29.2 5.8 6 10.2 12.5 13.4 18.7 1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2 3 11.8 6.9 22.4 12.3 34.4 2.1 4.7 9.5 20.1 11 23.3 10.3 22.7 15.4 43 16.7 78.7 3.3 94.6-82.7 181.9-182 181.9z")), t.YoutubeOutline = u("youtube", o, i(r, "M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z")), t.AlibabaOutline = u("alibaba", o, i(r, "M602.9 669.8c-37.2 2.6-33.6-17.3-11.5-46.2 50.4-67.2 143.7-158.5 147.9-225.2 5.8-86.6-81.3-113.4-171-113.4-62.4 1.6-127 18.9-171 34.6-151.6 53.5-246.6 137.5-306.9 232-62.4 93.4-43 183.2 91.8 185.8 101.8-4.2 170.5-32.5 239.7-68.2.5 0-192.5 55.1-263.9 14.7-7.9-4.2-15.7-10-17.8-26.2 0-33.1 54.6-67.7 86.6-78.7v-56.7c64.5 22.6 140.6 16.3 205.7-32 2.1 5.8 4.2 13.1 3.7 21h11c2.6-22.6-12.6-44.6-37.8-46.2 7.3 5.8 12.6 10.5 15.2 14.7l-1 1-.5.5c-83.9 58.8-165.3 31.5-173.1 29.9l46.7-45.7-13.1-33.1c92.9-32.5 169.5-56.2 296.9-78.7l-28.5-23 14.7-8.9c75.5 21 126.4 36.7 123.8 76.6-1 6.8-3.7 14.7-7.9 23.1C660.1 466.1 594 538 567.2 569c-17.3 20.5-34.6 39.4-46.7 58.3-13.6 19.4-20.5 37.3-21 53.5 2.6 131.8 391.4-61.9 468-112.9-111.7 47.8-232.9 93.5-364.6 101.9zm85-302.9c2.8 5.2 4.1 11.6 4.1 19.1-.1-6.8-1.4-13.3-4.1-19.1z")), t.AlignCenterOutline = u("align-center", o, i(r, "M264 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm496 424c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496zm144 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.AlignLeftOutline = u("align-left", o, i(r, "M120 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 424h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm784 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.AlignRightOutline = u("align-right", o, i(r, "M904 158H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 424H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 212H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.AlipayOutline = u("alipay", o, i(r, "M789 610.3c-38.7-12.9-90.7-32.7-148.5-53.6 34.8-60.3 62.5-129 80.7-203.6H530.5v-68.6h233.6v-38.3H530.5V132h-95.4c-16.7 0-16.7 16.5-16.7 16.5v97.8H182.2v38.3h236.3v68.6H223.4v38.3h378.4a667.18 667.18 0 0 1-54.5 132.9c-122.8-40.4-253.8-73.2-336.1-53-52.6 13-86.5 36.1-106.5 60.3-91.4 111-25.9 279.6 167.2 279.6C386 811.2 496 747.6 581.2 643 708.3 704 960 808.7 960 808.7V659.4s-31.6-2.5-171-49.1zM253.9 746.6c-150.5 0-195-118.3-120.6-183.1 24.8-21.9 70.2-32.6 94.4-35 89.4-8.8 172.2 25.2 269.9 72.8-68.8 89.5-156.3 145.3-243.7 145.3z")), t.AliyunOutline = u("aliyun", o, i(r, "M959.2 383.9c-.3-82.1-66.9-148.6-149.1-148.6H575.9l21.6 85.2 201 43.7a42.58 42.58 0 0 1 32.9 39.7c.1.5.1 216.1 0 216.6a42.58 42.58 0 0 1-32.9 39.7l-201 43.7-21.6 85.3h234.2c82.1 0 148.8-66.5 149.1-148.6V383.9zM225.5 660.4a42.58 42.58 0 0 1-32.9-39.7c-.1-.6-.1-216.1 0-216.6.8-19.4 14.6-35.5 32.9-39.7l201-43.7 21.6-85.2H213.8c-82.1 0-148.8 66.4-149.1 148.6V641c.3 82.1 67 148.6 149.1 148.6H448l-21.6-85.3-200.9-43.9zm200.9-158.8h171v21.3h-171z")), t.AmazonOutline = u("amazon", o, i(r, "M825 768.9c-3.3-.9-7.3-.4-11.9 1.3-61.6 28.2-121.5 48.3-179.7 60.2C507.7 856 385.2 842.6 266 790.3c-33.1-14.6-79.1-39.2-138-74a9.36 9.36 0 0 0-5.3-2c-2-.1-3.7.1-5.3.9-1.6.8-2.8 1.8-3.7 3.1-.9 1.3-1.1 3.1-.4 5.4.6 2.2 2.1 4.7 4.6 7.4 10.4 12.2 23.3 25.2 38.6 39s35.6 29.4 60.9 46.8c25.3 17.4 51.8 32.9 79.3 46.4 27.6 13.5 59.6 24.9 96.1 34.1s73 13.8 109.4 13.8c36.2 0 71.4-3.7 105.5-10.9 34.2-7.3 63-15.9 86.5-25.9 23.4-9.9 45-21 64.8-33 19.8-12 34.4-22.2 43.9-30.3 9.5-8.2 16.3-14.6 20.2-19.4 4.6-5.7 6.9-10.6 6.9-14.9.1-4.5-1.7-7.1-5-7.9zM527.4 348.1c-15.2 1.3-33.5 4.1-55 8.3-21.5 4.1-41.4 9.3-59.8 15.4s-37.2 14.6-56.3 25.4c-19.2 10.8-35.5 23.2-49 37s-24.5 31.1-33.1 52c-8.6 20.8-12.9 43.7-12.9 68.7 0 27.1 4.7 51.2 14.3 72.5 9.5 21.3 22.2 38 38.2 50.4 15.9 12.4 34 22.1 54 29.2 20 7.1 41.2 10.3 63.2 9.4 22-.9 43.5-4.3 64.4-10.3 20.8-5.9 40.4-15.4 58.6-28.3 18.2-12.9 33.1-28.2 44.8-45.7 4.3 6.6 8.1 11.5 11.5 14.7l8.7 8.9c5.8 5.9 14.7 14.6 26.7 26.1 11.9 11.5 24.1 22.7 36.3 33.7l104.4-99.9-6-4.9c-4.3-3.3-9.4-8-15.2-14.3-5.8-6.2-11.6-13.1-17.2-20.5-5.7-7.4-10.6-16.1-14.7-25.9-4.1-9.8-6.2-19.3-6.2-28.5V258.7c0-10.1-1.9-21-5.7-32.8-3.9-11.7-10.7-24.5-20.7-38.3-10-13.8-22.4-26.2-37.2-37-14.9-10.8-34.7-20-59.6-27.4-24.8-7.4-52.6-11.1-83.2-11.1-31.3 0-60.4 3.7-87.6 10.9-27.1 7.3-50.3 17-69.7 29.2-19.3 12.2-35.9 26.3-49.7 42.4-13.8 16.1-24.1 32.9-30.8 50.4-6.7 17.5-10.1 35.2-10.1 53.1L408 310c5.5-16.4 12.9-30.6 22-42.8 9.2-12.2 17.9-21 25.8-26.5 8-5.5 16.6-9.9 25.7-13.2 9.2-3.3 15.4-5 18.6-5.4 3.2-.3 5.7-.4 7.6-.4 26.7 0 45.2 7.9 55.6 23.6 6.5 9.5 9.7 23.9 9.7 43.3v56.6c-15.2.6-30.4 1.6-45.6 2.9zM573.1 500c0 16.6-2.2 31.7-6.5 45-9.2 29.1-26.7 47.4-52.4 54.8-22.4 6.6-43.7 3.3-63.9-9.8-21.5-14-32.2-33.8-32.2-59.3 0-19.9 5-36.9 15-51.1 10-14.1 23.3-24.7 40-31.7s33-12 49-14.9c15.9-3 33-4.8 51-5.4V500zm335.2 218.9c-4.3-5.4-15.9-8.9-34.9-10.7-19-1.8-35.5-1.7-49.7.4-15.3 1.8-31.1 6.2-47.3 13.4-16.3 7.1-23.4 13.1-21.6 17.8l.7 1.3.9.7 1.4.2h4.6c.8 0 1.8-.1 3.2-.2 1.4-.1 2.7-.3 3.9-.4 1.2-.1 2.9-.3 5.1-.4 2.1-.1 4.1-.4 6-.7.3 0 3.7-.3 10.3-.9 6.6-.6 11.4-1 14.3-1.3 2.9-.3 7.8-.6 14.5-.9 6.7-.3 12.1-.3 16.1 0 4 .3 8.5.7 13.6 1.1 5.1.4 9.2 1.3 12.4 2.7 3.2 1.3 5.6 3 7.1 5.1 5.2 6.6 4.2 21.2-3 43.9s-14 40.8-20.4 54.2c-2.8 5.7-2.8 9.2 0 10.7s6.7.1 11.9-4c15.6-12.2 28.6-30.6 39.1-55.3 6.1-14.6 10.5-29.8 13.1-45.7 2.4-15.9 2-26.2-1.3-31z")), t.AntCloudOutline = u("ant-cloud", o, i(r, "M378.9 738c-3.1 0-6.1-.5-8.8-1.5l4.4 30.7h26.3l-15.5-29.9c-2.1.5-4.2.7-6.4.7zm421-291.2c-12.6 0-24.8 1.5-36.5 4.2-21.4-38.4-62.3-64.3-109.3-64.3-6.9 0-13.6.6-20.2 1.6-35.4-77.4-113.4-131.1-203.9-131.1-112.3 0-205.3 82.6-221.6 190.4C127.3 455.5 64 523.8 64 607c0 88.4 71.6 160.1 160 160.2h50l13.2-27.6c-26.2-8.3-43.3-29-39.1-48.8 4.6-21.6 32.8-33.9 63.1-27.5 22.9 4.9 40.4 19.1 45.5 35.1a26.1 26.1 0 0 1 22.1-12.4h.2c-.8-3.2-1.2-6.5-1.2-9.9 0-20.1 14.8-36.7 34.1-39.6v-25.4c0-4.4 3.6-8 8-8s8 3.6 8 8v26.3c4.6 1.2 8.8 3.2 12.6 5.8l19.5-21.4c3-3.3 8-3.5 11.3-.5 3.3 3 3.5 8 .5 11.3l-20 22-.2.2a40 40 0 0 1-46.9 59.2c-.4 5.6-2.6 10.7-6 14.8l20 38.4H804v-.1c86.5-2.2 156-73 156-160.1 0-88.5-71.7-160.2-160.1-160.2zM338.2 737.2l-4.3 30h24.4l-5.9-41.5c-3.5 4.6-8.3 8.5-14.2 11.5zM797.5 305a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-65.7 61.3a24 24 0 1 0 48 0 24 24 0 1 0-48 0zM303.4 742.9l-11.6 24.3h26l3.5-24.7c-5.7.8-11.7 1-17.9.4z")), t.ApartmentOutline = u("apartment", o, i(r, "M908 640H804V488c0-4.4-3.6-8-8-8H548v-96h108c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h108v96H228c-4.4 0-8 3.6-8 8v152H116c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V656c0-8.8-7.2-16-16-16H292v-88h440v88H620c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V656c0-8.8-7.2-16-16-16zm-564 76v168H176V716h168zm84-408V140h168v168H428zm420 576H680V716h168v168z")), t.AntDesignOutline = u("ant-design", o, i(r, "M716.3 313.8c19-18.9 19-49.7 0-68.6l-69.9-69.9.1.1c-18.5-18.5-50.3-50.3-95.3-95.2-21.2-20.7-55.5-20.5-76.5.5L80.9 474.2a53.84 53.84 0 0 0 0 76.4L474.6 944a54.14 54.14 0 0 0 76.5 0l165.1-165c19-18.9 19-49.7 0-68.6a48.7 48.7 0 0 0-68.7 0l-125 125.2c-5.2 5.2-13.3 5.2-18.5 0L189.5 521.4c-5.2-5.2-5.2-13.3 0-18.5l314.4-314.2c.4-.4.9-.7 1.3-1.1 5.2-4.1 12.4-3.7 17.2 1.1l125.2 125.1c19 19 49.8 19 68.7 0zM408.6 514.4a106.3 106.2 0 1 0 212.6 0 106.3 106.2 0 1 0-212.6 0zm536.2-38.6L821.9 353.5c-19-18.9-49.8-18.9-68.7.1a48.4 48.4 0 0 0 0 68.6l83 82.9c5.2 5.2 5.2 13.3 0 18.5l-81.8 81.7a48.4 48.4 0 0 0 0 68.6 48.7 48.7 0 0 0 68.7 0l121.8-121.7a53.93 53.93 0 0 0-.1-76.4z")), t.AreaChartOutline = u("area-chart", o, i(r, "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-616-64h536c4.4 0 8-3.6 8-8V284c0-7.2-8.7-10.7-13.7-5.7L592 488.6l-125.4-124a8.03 8.03 0 0 0-11.3 0l-189 189.6a7.87 7.87 0 0 0-2.3 5.6V720c0 4.4 3.6 8 8 8z")), t.ArrowLeftOutline = u("arrow-left", o, i(r, "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z")), t.ArrowDownOutline = u("arrow-down", o, i(r, "M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z")), t.ArrowUpOutline = u("arrow-up", o, i(r, "M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z")), t.ArrowsAltOutline = u("arrows-alt", o, i(r, "M855 160.1l-189.2 23.5c-6.6.8-9.3 8.8-4.7 13.5l54.7 54.7-153.5 153.5a8.03 8.03 0 0 0 0 11.3l45.1 45.1c3.1 3.1 8.2 3.1 11.3 0l153.6-153.6 54.7 54.7a7.94 7.94 0 0 0 13.5-4.7L863.9 169a7.9 7.9 0 0 0-8.9-8.9zM416.6 562.3a8.03 8.03 0 0 0-11.3 0L251.8 715.9l-54.7-54.7a7.94 7.94 0 0 0-13.5 4.7L160.1 855c-.6 5.2 3.7 9.5 8.9 8.9l189.2-23.5c6.6-.8 9.3-8.8 4.7-13.5l-54.7-54.7 153.6-153.6c3.1-3.1 3.1-8.2 0-11.3l-45.2-45z")), t.ArrowRightOutline = u("arrow-right", o, i(r, "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z")), t.AuditOutline = u("audit", o, i(r, "M296 250c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm184 144H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 458H208V148h560v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm440-88H728v-36.6c46.3-13.8 80-56.6 80-107.4 0-61.9-50.1-112-112-112s-112 50.1-112 112c0 50.7 33.7 93.6 80 107.4V764H520c-8.8 0-16 7.2-16 16v152c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V780c0-8.8-7.2-16-16-16zM646 620c0-27.6 22.4-50 50-50s50 22.4 50 50-22.4 50-50 50-50-22.4-50-50zm180 266H566v-60h260v60z")), t.BarChartOutline = u("bar-chart", o, i(r, "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z")), t.BarcodeOutline = u("barcode", o, i(r, "M120 160H72c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zm833 0h-48c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zM200 736h112c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm321 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm126 0h178c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H647c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-255 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-79 64H201c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm257 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm256 0H648c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h178c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-385 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z")), t.BarsOutline = u("bars", o, i(c, "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z")), t.BgColorsOutline = u("bg-colors", o, i(r, "M766.4 744.3c43.7 0 79.4-36.2 79.4-80.5 0-53.5-79.4-140.8-79.4-140.8S687 610.3 687 663.8c0 44.3 35.7 80.5 79.4 80.5zm-377.1-44.1c7.1 7.1 18.6 7.1 25.6 0l256.1-256c7.1-7.1 7.1-18.6 0-25.6l-256-256c-.6-.6-1.3-1.2-2-1.7l-78.2-78.2a9.11 9.11 0 0 0-12.8 0l-48 48a9.11 9.11 0 0 0 0 12.8l67.2 67.2-207.8 207.9c-7.1 7.1-7.1 18.6 0 25.6l255.9 256zm12.9-448.6l178.9 178.9H223.4l178.8-178.9zM904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8z")), t.BehanceOutline = u("behance", o, i(r, "M634 294.3h199.5v48.4H634zM434.1 485.8c44.1-21.1 67.2-53.2 67.2-102.8 0-98.1-73-121.9-157.3-121.9H112v492.4h238.5c89.4 0 173.3-43 173.3-143 0-61.8-29.2-107.5-89.7-124.7zM220.2 345.1h101.5c39.1 0 74.2 10.9 74.2 56.3 0 41.8-27.3 58.6-66 58.6H220.2V345.1zm115.5 324.8H220.1V534.3H338c47.6 0 77.7 19.9 77.7 70.3 0 49.6-35.9 65.3-80 65.3zm575.8-89.5c0-105.5-61.7-193.4-173.3-193.4-108.5 0-182.3 81.7-182.3 188.8 0 111 69.9 187.2 182.3 187.2 85.1 0 140.2-38.3 166.7-120h-86.3c-9.4 30.5-47.6 46.5-77.3 46.5-57.4 0-87.4-33.6-87.4-90.7h256.9c.3-5.9.7-12.1.7-18.4zM653.9 537c3.1-46.9 34.4-76.2 81.2-76.2 49.2 0 73.8 28.9 78.1 76.2H653.9z")), t.BlockOutline = u("block", o, i(r, "M856 376H648V168c0-8.8-7.2-16-16-16H168c-8.8 0-16 7.2-16 16v464c0 8.8 7.2 16 16 16h208v208c0 8.8 7.2 16 16 16h464c8.8 0 16-7.2 16-16V392c0-8.8-7.2-16-16-16zm-480 16v188H220V220h360v156H392c-8.8 0-16 7.2-16 16zm204 52v136H444V444h136zm224 360H444V648h188c8.8 0 16-7.2 16-16V444h156v360z")), t.BoldOutline = u("bold", o, i(r, "M697.8 481.4c33.6-35 54.2-82.3 54.2-134.3v-10.2C752 229.3 663.9 142 555.3 142H259.4c-15.1 0-27.4 12.3-27.4 27.4v679.1c0 16.3 13.2 29.5 29.5 29.5h318.7c117 0 211.8-94.2 211.8-210.5v-11c0-73-37.4-137.3-94.2-175.1zM328 238h224.7c57.1 0 103.3 44.4 103.3 99.3v9.5c0 54.8-46.3 99.3-103.3 99.3H328V238zm366.6 429.4c0 62.9-51.7 113.9-115.5 113.9H328V542.7h251.1c63.8 0 115.5 51 115.5 113.9v10.8z")), t.BorderBottomOutline = u("border-bottom", o, i(r, "M872 808H152c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-720-94h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0-498h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 332h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0-166h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm166 166h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0-332h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm332 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 332h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm222-72h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-388 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm388-404h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-388 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm388 426h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-388 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm388-404h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-388 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z")), t.BorderLeftOutline = u("border-left", o, i(r, "M208 144h-56c-4.4 0-8 3.6-8 8v720c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V152c0-4.4-3.6-8-8-8zm166 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm498 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm166 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM540 310h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM374 808h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.BorderOuterOutline = u("border-outer", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM484 366h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM302 548h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm364 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-182 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 182h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z")), t.BorderInnerOutline = u("border-inner", o, i(r, "M872 476H548V144h-72v332H152c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h324v332h72V548h324c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 498h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-664h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 498h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM650 216h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm56 592h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-56-592h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-166 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm56 592h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-56-426h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm56 260h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.BorderRightOutline = u("border-right", o, i(r, "M872 144h-56c-4.4 0-8 3.6-8 8v720c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V152c0-4.4-3.6-8-8-8zm-166 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-498 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-166 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm166 166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM208 808h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm498 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM374 808h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.BorderHorizontalOutline = u("border-horizontal", o, i(r, "M540 144h-56c-4.4 0-8 3.6-8 8v720c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V152c0-4.4-3.6-8-8-8zm-166 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm498 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-664 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm498 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM208 310h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm664 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-664 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm664 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM374 808h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.BorderTopOutline = u("border-top", o, i(r, "M872 144H152c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM208 310h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 498h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm166-166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm166 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332-498h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 332h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.BorderVerticleOutline = u("border-verticle", o, i(r, "M872 476H152c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-166h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 498h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-664h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 498h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM650 216h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm56 592h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-56-592h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-166 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm332 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM208 808h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM152 382h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm332 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM208 642h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm332 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.BorderOutline = u("border", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z")), t.BranchesOutline = u("branches", o, i(r, "M740 161c-61.8 0-112 50.2-112 112 0 50.1 33.1 92.6 78.5 106.9v95.9L320 602.4V318.1c44.2-15 76-56.9 76-106.1 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-27.8l423.5-138.7a50.52 50.52 0 0 0 34.9-48.2V378.2c42.9-15.8 73.6-57 73.6-105.2 0-61.8-50.2-112-112-112zm-504 51a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm96 600a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm408-491a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z")), t.CheckOutline = u("check", o, i(r, "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z")), t.CiOutline = u("ci", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm218-572.1h-50.4c-4.4 0-8 3.6-8 8v384.2c0 4.4 3.6 8 8 8H730c4.4 0 8-3.6 8-8V319.9c0-4.4-3.6-8-8-8zm-281.4 49.6c49.5 0 83.1 31.5 87 77.6.4 4.2 3.8 7.4 8 7.4h52.6c2.4 0 4.4-2 4.4-4.4 0-81.2-64-138.1-152.3-138.1C345.4 304 286 373.5 286 488.4v49c0 114 59.4 182.6 162.3 182.6 88 0 152.3-55.1 152.3-132.5 0-2.4-2-4.4-4.4-4.4h-52.7c-4.2 0-7.6 3.2-8 7.3-4.2 43-37.7 72.4-87 72.4-61.1 0-95.6-44.9-95.6-125.2v-49.3c.1-81.4 34.6-126.8 95.7-126.8z")), t.CloseOutline = u("close", o, i(r, "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z")), t.CloudDownloadOutline = u("cloud-download", o, i(r, "M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z", "M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z")), t.CloudServerOutline = u("cloud-server", o, i(r, "M704 446H320c-4.4 0-8 3.6-8 8v402c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8V454c0-4.4-3.6-8-8-8zm-328 64h272v117H376V510zm272 290H376V683h272v117z", "M424 748a32 32 0 1 0 64 0 32 32 0 1 0-64 0zm0-178a32 32 0 1 0 64 0 32 32 0 1 0-64 0z", "M811.4 368.9C765.6 248 648.9 162 512.2 162S258.8 247.9 213 368.8C126.9 391.5 63.5 470.2 64 563.6 64.6 668 145.6 752.9 247.6 762c4.7.4 8.7-3.3 8.7-8v-60.4c0-4-3-7.4-7-7.9-27-3.4-52.5-15.2-72.1-34.5-24-23.5-37.2-55.1-37.2-88.6 0-28 9.1-54.4 26.2-76.4 16.7-21.4 40.2-36.9 66.1-43.7l37.9-10 13.9-36.7c8.6-22.8 20.6-44.2 35.7-63.5 14.9-19.2 32.6-36 52.4-50 41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.3c19.9 14 37.5 30.8 52.4 50 15.1 19.3 27.1 40.7 35.7 63.5l13.8 36.6 37.8 10c54.2 14.4 92.1 63.7 92.1 120 0 33.6-13.2 65.1-37.2 88.6-19.5 19.2-44.9 31.1-71.9 34.5-4 .5-6.9 3.9-6.9 7.9V754c0 4.7 4.1 8.4 8.8 8 101.7-9.2 182.5-94 183.2-198.2.6-93.4-62.7-172.1-148.6-194.9z")), t.CloudSyncOutline = u("cloud-sync", o, i(r, "M811.4 368.9C765.6 248 648.9 162 512.2 162S258.8 247.9 213 368.8C126.9 391.5 63.5 470.2 64 563.6 64.6 668 145.6 752.9 247.6 762c4.7.4 8.7-3.3 8.7-8v-60.4c0-4-3-7.4-7-7.9-27-3.4-52.5-15.2-72.1-34.5-24-23.5-37.2-55.1-37.2-88.6 0-28 9.1-54.4 26.2-76.4 16.7-21.4 40.2-36.9 66.1-43.7l37.9-10 13.9-36.7c8.6-22.8 20.6-44.2 35.7-63.5 14.9-19.2 32.6-36 52.4-50 41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.3c19.9 14 37.5 30.8 52.4 50 15.1 19.3 27.1 40.7 35.7 63.5l13.8 36.6 37.8 10c54.2 14.4 92.1 63.7 92.1 120 0 33.6-13.2 65.1-37.2 88.6-19.5 19.2-44.9 31.1-71.9 34.5-4 .5-6.9 3.9-6.9 7.9V754c0 4.7 4.1 8.4 8.8 8 101.7-9.2 182.5-94 183.2-198.2.6-93.4-62.7-172.1-148.6-194.9z", "M376.9 656.4c1.8-33.5 15.7-64.7 39.5-88.6 25.4-25.5 60-39.8 96-39.8 36.2 0 70.3 14.1 96 39.8 1.4 1.4 2.7 2.8 4.1 4.3l-25 19.6a8 8 0 0 0 3 14.1l98.2 24c5 1.2 9.9-2.6 9.9-7.7l.5-101.3c0-6.7-7.6-10.5-12.9-6.3L663 532.7c-36.6-42-90.4-68.6-150.5-68.6-107.4 0-195 85.1-199.4 191.7-.2 4.5 3.4 8.3 8 8.3H369c4.2-.1 7.7-3.4 7.9-7.7zM703 664h-47.9c-4.2 0-7.7 3.3-8 7.6-1.8 33.5-15.7 64.7-39.5 88.6-25.4 25.5-60 39.8-96 39.8-36.2 0-70.3-14.1-96-39.8-1.4-1.4-2.7-2.8-4.1-4.3l25-19.6a8 8 0 0 0-3-14.1l-98.2-24c-5-1.2-9.9 2.6-9.9 7.7l-.4 101.4c0 6.7 7.6 10.5 12.9 6.3l23.2-18.2c36.6 42 90.4 68.6 150.5 68.6 107.4 0 195-85.1 199.4-191.7.2-4.5-3.4-8.3-8-8.3z")), t.CloudUploadOutline = u("cloud-upload", o, i(r, "M518.3 459a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z", "M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z")), t.ClusterOutline = u("cluster", o, i(r, "M888 680h-54V540H546v-92h238c8.8 0 16-7.2 16-16V168c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v264c0 8.8 7.2 16 16 16h238v92H190v140h-54c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V688c0-4.4-3.6-8-8-8h-54v-72h220v72h-54c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V688c0-4.4-3.6-8-8-8h-54v-72h220v72h-54c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V688c0-4.4-3.6-8-8-8zM256 805.3c0 1.5-1.2 2.7-2.7 2.7h-58.7c-1.5 0-2.7-1.2-2.7-2.7v-58.7c0-1.5 1.2-2.7 2.7-2.7h58.7c1.5 0 2.7 1.2 2.7 2.7v58.7zm288 0c0 1.5-1.2 2.7-2.7 2.7h-58.7c-1.5 0-2.7-1.2-2.7-2.7v-58.7c0-1.5 1.2-2.7 2.7-2.7h58.7c1.5 0 2.7 1.2 2.7 2.7v58.7zM288 384V216h448v168H288zm544 421.3c0 1.5-1.2 2.7-2.7 2.7h-58.7c-1.5 0-2.7-1.2-2.7-2.7v-58.7c0-1.5 1.2-2.7 2.7-2.7h58.7c1.5 0 2.7 1.2 2.7 2.7v58.7zM360 300a40 40 0 1 0 80 0 40 40 0 1 0-80 0z")), t.CodepenOutline = u("codepen", o, i(r, "M911.7 385.3l-.3-1.5c-.2-1-.3-1.9-.6-2.9-.2-.6-.4-1.1-.5-1.7-.3-.8-.5-1.7-.9-2.5-.2-.6-.5-1.1-.8-1.7-.4-.8-.8-1.5-1.2-2.3-.3-.5-.6-1.1-1-1.6-.8-1.2-1.7-2.4-2.6-3.6-.5-.6-1.1-1.3-1.7-1.9-.4-.5-.9-.9-1.4-1.3-.6-.6-1.3-1.1-1.9-1.6-.5-.4-1-.8-1.6-1.2-.2-.1-.4-.3-.6-.4L531.1 117.8a34.3 34.3 0 0 0-38.1 0L127.3 361.3c-.2.1-.4.3-.6.4-.5.4-1 .8-1.6 1.2-.7.5-1.3 1.1-1.9 1.6-.5.4-.9.9-1.4 1.3-.6.6-1.2 1.2-1.7 1.9-1 1.1-1.8 2.3-2.6 3.6-.3.5-.7 1-1 1.6-.4.7-.8 1.5-1.2 2.3-.3.5-.5 1.1-.8 1.7-.3.8-.6 1.7-.9 2.5-.2.6-.4 1.1-.5 1.7-.2.9-.4 1.9-.6 2.9l-.3 1.5c-.2 1.5-.3 3-.3 4.5v243.5c0 1.5.1 3 .3 4.5l.3 1.5.6 2.9c.2.6.3 1.1.5 1.7.3.9.6 1.7.9 2.5.2.6.5 1.1.8 1.7.4.8.7 1.5 1.2 2.3.3.5.6 1.1 1 1.6.5.7.9 1.4 1.5 2.1l1.2 1.5c.5.6 1.1 1.3 1.7 1.9.4.5.9.9 1.4 1.3.6.6 1.3 1.1 1.9 1.6.5.4 1 .8 1.6 1.2.2.1.4.3.6.4L493 905.7c5.6 3.8 12.3 5.8 19.1 5.8 6.6 0 13.3-1.9 19.1-5.8l365.6-243.5c.2-.1.4-.3.6-.4.5-.4 1-.8 1.6-1.2.7-.5 1.3-1.1 1.9-1.6.5-.4.9-.9 1.4-1.3.6-.6 1.2-1.2 1.7-1.9l1.2-1.5 1.5-2.1c.3-.5.7-1 1-1.6.4-.8.8-1.5 1.2-2.3.3-.5.5-1.1.8-1.7.3-.8.6-1.7.9-2.5.2-.5.4-1.1.5-1.7.3-.9.4-1.9.6-2.9l.3-1.5c.2-1.5.3-3 .3-4.5V389.8c-.3-1.5-.4-3-.6-4.5zM546.4 210.5l269.4 179.4-120.3 80.4-149-99.6V210.5zm-68.8 0v160.2l-149 99.6-120.3-80.4 269.3-179.4zM180.7 454.1l86 57.5-86 57.5v-115zm296.9 358.5L208.3 633.2l120.3-80.4 149 99.6v160.2zM512 592.8l-121.6-81.2L512 430.3l121.6 81.2L512 592.8zm34.4 219.8V652.4l149-99.6 120.3 80.4-269.3 179.4zM843.3 569l-86-57.5 86-57.5v115z")), t.CodeSandboxOutline = u("code-sandbox", o, i(r, "M709.6 210l.4-.2h.2L512 96 313.9 209.8h-.2l.7.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z")), t.ColumHeightOutline = u("colum-height", o, i(r, "M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 0 0-11.3 0L403.6 366.3a7.23 7.23 0 0 0 5.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z")), t.ColumnWidthOutline = u("column-width", o, i(r, "M180 176h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zm724 0h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zM785.3 504.3L657.7 403.6a7.23 7.23 0 0 0-11.7 5.7V476H378v-62.8c0-6-7-9.4-11.7-5.7L238.7 508.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h268v62.8c0 6 7 9.4 11.7 5.7l127.5-100.8c3.8-2.9 3.8-8.5.2-11.4z")), t.ColumnHeightOutline = u("column-height", o, i(r, "M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 0 0-11.3 0L403.6 366.3a7.23 7.23 0 0 0 5.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z")), t.CoffeeOutline = u("coffee", o, i(c, "M275 281c19.9 0 36-16.1 36-36V36c0-19.9-16.1-36-36-36s-36 16.1-36 36v209c0 19.9 16.1 36 36 36zm613 144H768c0-39.8-32.2-72-72-72H200c-39.8 0-72 32.2-72 72v248c0 3.4.2 6.7.7 9.9-.5 7-.7 14-.7 21.1 0 176.7 143.3 320 320 320 160.1 0 292.7-117.5 316.3-271H888c39.8 0 72-32.2 72-72V497c0-39.8-32.2-72-72-72zM696 681h-1.1c.7 7.6 1.1 15.2 1.1 23 0 137-111 248-248 248S200 841 200 704c0-7.8.4-15.4 1.1-23H200V425h496v256zm192-8H776V497h112v176zM613 281c19.9 0 36-16.1 36-36V36c0-19.9-16.1-36-36-36s-36 16.1-36 36v209c0 19.9 16.1 36 36 36zm-170 0c19.9 0 36-16.1 36-36V36c0-19.9-16.1-36-36-36s-36 16.1-36 36v209c0 19.9 16.1 36 36 36z")), t.CopyrightOutline = u("copyright", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z")), t.DashOutline = u("dash", o, i(r, "M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z")), t.DeploymentUnitOutline = u("deployment-unit", o, i(r, "M888.3 693.2c-42.5-24.6-94.3-18-129.2 12.8l-53-30.7V523.6c0-15.7-8.4-30.3-22-38.1l-136-78.3v-67.1c44.2-15 76-56.8 76-106.1 0-61.9-50.1-112-112-112s-112 50.1-112 112c0 49.3 31.8 91.1 76 106.1v67.1l-136 78.3c-13.6 7.8-22 22.4-22 38.1v151.6l-53 30.7c-34.9-30.8-86.8-37.4-129.2-12.8-53.5 31-71.7 99.4-41 152.9 30.8 53.5 98.9 71.9 152.2 41 42.5-24.6 62.7-73 53.6-118.8l48.7-28.3 140.6 81c6.8 3.9 14.4 5.9 22 5.9s15.2-2 22-5.9L674.5 740l48.7 28.3c-9.1 45.7 11.2 94.2 53.6 118.8 53.3 30.9 121.5 12.6 152.2-41 30.8-53.6 12.6-122-40.7-152.9zm-673 138.4a47.6 47.6 0 0 1-65.2-17.6c-13.2-22.9-5.4-52.3 17.5-65.5a47.6 47.6 0 0 1 65.2 17.6c13.2 22.9 5.4 52.3-17.5 65.5zM522 463.8zM464 234a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm170 446.2l-122 70.3-122-70.3V539.8l122-70.3 122 70.3v140.4zm239.9 133.9c-13.2 22.9-42.4 30.8-65.2 17.6-22.8-13.2-30.7-42.6-17.5-65.5s42.4-30.8 65.2-17.6c22.9 13.2 30.7 42.5 17.5 65.5z")), t.DesktopOutline = u("desktop", o, i(r, "M928 140H96c-17.7 0-32 14.3-32 32v496c0 17.7 14.3 32 32 32h380v112H304c-8.8 0-16 7.2-16 16v48c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-48c0-8.8-7.2-16-16-16H548V700h380c17.7 0 32-14.3 32-32V172c0-17.7-14.3-32-32-32zm-40 488H136V212h752v416z")), t.DingdingOutline = u("dingding", o, i(r, "M573.7 252.5C422.5 197.4 201.3 96.7 201.3 96.7c-15.7-4.1-17.9 11.1-17.9 11.1-5 61.1 33.6 160.5 53.6 182.8 19.9 22.3 319.1 113.7 319.1 113.7S326 357.9 270.5 341.9c-55.6-16-37.9 17.8-37.9 17.8 11.4 61.7 64.9 131.8 107.2 138.4 42.2 6.6 220.1 4 220.1 4s-35.5 4.1-93.2 11.9c-42.7 5.8-97 12.5-111.1 17.8-33.1 12.5 24 62.6 24 62.6 84.7 76.8 129.7 50.5 129.7 50.5 33.3-10.7 61.4-18.5 85.2-24.2L565 743.1h84.6L603 928l205.3-271.9H700.8l22.3-38.7c.3.5.4.8.4.8S799.8 496.1 829 433.8l.6-1h-.1c5-10.8 8.6-19.7 10-25.8 17-71.3-114.5-99.4-265.8-154.5z")), t.DisconnectOutline = u("disconnect", o, i(r, "M832.6 191.4c-84.6-84.6-221.5-84.6-306 0l-96.9 96.9 51 51 96.9-96.9c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204l-96.9 96.9 51.1 51.1 96.9-96.9c84.4-84.6 84.4-221.5-.1-306.1zM446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l96.9-96.9-51.1-51.1-96.9 96.9c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l96.9-96.9-51-51-96.8 97zM260.3 209.4a8.03 8.03 0 0 0-11.3 0L209.4 249a8.03 8.03 0 0 0 0 11.3l554.4 554.4c3.1 3.1 8.2 3.1 11.3 0l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3L260.3 209.4z")), t.DollarOutline = u("dollar", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z")), t.DoubleRightOutline = u("double-right", o, i(r, "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z")), t.DotChartOutline = u("dot-chart", o, i(r, "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm118-224a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm158 228a96 96 0 1 0 192 0 96 96 0 1 0-192 0zm148-314a56 56 0 1 0 112 0 56 56 0 1 0-112 0z")), t.DoubleLeftOutline = u("double-left", o, i(r, "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z")), t.DownloadOutline = u("download", o, i(r, "M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z")), t.DribbbleOutline = u("dribbble", o, i(r, "M512 96C282.6 96 96 282.6 96 512s186.6 416 416 416 416-186.6 416-416S741.4 96 512 96zm275.1 191.8c49.5 60.5 79.5 137.5 80.2 221.4-11.7-2.5-129.2-26.3-247.4-11.4-2.5-6.1-5-12.2-7.6-18.3-7.4-17.3-15.3-34.6-23.6-51.5C720 374.3 779.6 298 787.1 287.8zM512 157.2c90.3 0 172.8 33.9 235.5 89.5-6.4 9.1-59.9 81-186.2 128.4-58.2-107-122.7-194.8-132.6-208 27.3-6.6 55.2-9.9 83.3-9.9zM360.9 191c9.4 12.8 72.9 100.9 131.7 205.5C326.4 440.6 180 440 164.1 439.8c23.1-110.3 97.4-201.9 196.8-248.8zM156.7 512.5c0-3.6.1-7.3.2-10.9 15.5.3 187.7 2.5 365.2-50.6 10.2 19.9 19.9 40.1 28.8 60.3-4.7 1.3-9.4 2.7-14 4.2C353.6 574.9 256.1 736.4 248 750.1c-56.7-63-91.3-146.3-91.3-237.6zM512 867.8c-82.2 0-157.9-28-218.1-75 6.4-13.1 78.3-152 278.7-221.9l2.3-.8c49.9 129.6 70.5 238.3 75.8 269.5A350.46 350.46 0 0 1 512 867.8zm198.5-60.7c-3.6-21.6-22.5-125.6-69-253.3C752.9 536 850.7 565.2 862.8 569c-15.8 98.8-72.5 184.2-152.3 238.1z")), t.DropboxOutline = u("dropbox", o, i(r, "M64 556.9l264.2 173.5L512.5 577 246.8 412.7zm896-290.3zm0 0L696.8 95 512.5 248.5l265.2 164.2L512.5 577l184.3 153.4L960 558.8 777.7 412.7zM513 609.8L328.2 763.3l-79.4-51.5v57.8L513 928l263.7-158.4v-57.8l-78.9 51.5zM328.2 95L64 265.1l182.8 147.6 265.7-164.2zM64 556.9z")), t.EllipsisOutline = u("ellipsis", o, i(r, "M176 511a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm280 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm280 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0z")), t.EnterOutline = u("enter", o, i(r, "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z")), t.EuroOutline = u("euro", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm117.7-588.6c-15.9-3.5-34.4-5.4-55.3-5.4-106.7 0-178.9 55.7-198.6 149.9H344c-4.4 0-8 3.6-8 8v27.2c0 4.4 3.6 8 8 8h26.4c-.3 4.1-.3 8.4-.3 12.8v36.9H344c-4.4 0-8 3.6-8 8V568c0 4.4 3.6 8 8 8h30.2c17.2 99.2 90.4 158 200.2 158 20.9 0 39.4-1.7 55.3-5.1 3.7-.8 6.4-4 6.4-7.8v-42.8c0-5-4.6-8.8-9.5-7.8-14.7 2.8-31.9 4.1-51.8 4.1-68.5 0-114.5-36.6-129.8-98.6h130.6c4.4 0 8-3.6 8-8v-27.2c0-4.4-3.6-8-8-8H439.2v-36c0-4.7 0-9.4.3-13.8h135.9c4.4 0 8-3.6 8-8v-27.2c0-4.4-3.6-8-8-8H447.1c17.2-56.9 62.3-90.4 127.6-90.4 19.9 0 37.1 1.5 51.7 4.4a8 8 0 0 0 9.6-7.8v-42.8c0-3.8-2.6-7-6.3-7.8z")), t.ExceptionOutline = u("exception", o, i(r, "M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM640 812a32 32 0 1 0 64 0 32 32 0 1 0-64 0zm12-64h40c4.4 0 8-3.6 8-8V628c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.ExclamationOutline = u("exclamation", o, i(r, "M448 804a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm32-168h64c4.4 0 8-3.6 8-8V164c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z")), t.ExportOutline = u("export", o, i(r, "M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z")), t.FallOutline = u("fall", o, i(r, "M925.9 804l-24-199.2c-.8-6.6-8.9-9.4-13.6-4.7L829 659.5 557.7 388.3c-6.3-6.2-16.4-6.2-22.6 0L433.3 490 156.6 213.3a8.03 8.03 0 0 0-11.3 0l-45 45.2a8.03 8.03 0 0 0 0 11.3L422 591.7c6.2 6.3 16.4 6.3 22.6 0L546.4 490l226.1 226-59.3 59.3a8.01 8.01 0 0 0 4.7 13.6l199.2 24c5.1.7 9.5-3.7 8.8-8.9z")), t.FileDoneOutline = u("file-done", o, i(r, "M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-23.1-31.9a7.92 7.92 0 0 0-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.FileSyncOutline = u("file-sync", o, i(r, "M296 256c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm192 200v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8zm-48 396H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm104.1-115.6c1.8-34.5 16.2-66.8 40.8-91.4 26.2-26.2 62-41 99.1-41 37.4 0 72.6 14.6 99.1 41 3.2 3.2 6.3 6.6 9.2 10.1L769.2 673a8 8 0 0 0 3 14.1l93.3 22.5c5 1.2 9.8-2.6 9.9-7.7l.6-95.4a8 8 0 0 0-12.9-6.4l-20.3 15.8C805.4 569.6 748.1 540 684 540c-109.9 0-199.6 86.9-204 195.7-.2 4.5 3.5 8.3 8 8.3h48.1c4.3 0 7.8-3.3 8-7.6zM880 744h-48.1c-4.3 0-7.8 3.3-8 7.6-1.8 34.5-16.2 66.8-40.8 91.4-26.2 26.2-62 41-99.1 41-37.4 0-72.6-14.6-99.1-41-3.2-3.2-6.3-6.6-9.2-10.1l23.1-17.9a8 8 0 0 0-3-14.1l-93.3-22.5c-5-1.2-9.8 2.6-9.9 7.7l-.6 95.4a8 8 0 0 0 12.9 6.4l20.3-15.8C562.6 918.4 619.9 948 684 948c109.9 0 199.6-86.9 204-195.7.2-4.5-3.5-8.3-8-8.3z")), t.FileProtectOutline = u("file-protect", o, i(r, "M644.7 669.2a7.92 7.92 0 0 0-6.5-3.3H594c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.8-5.3 0-12.7-6.5-12.7h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-22.9-31.9zM688 306v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm184 458H208V148h560v296c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h312c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm402.6-320.8l-192-66.7c-.9-.3-1.7-.4-2.6-.4s-1.8.1-2.6.4l-192 66.7a7.96 7.96 0 0 0-5.4 7.5v251.1c0 2.5 1.1 4.8 3.1 6.3l192 150.2c1.4 1.1 3.2 1.7 4.9 1.7s3.5-.6 4.9-1.7l192-150.2c1.9-1.5 3.1-3.8 3.1-6.3V538.7c0-3.4-2.2-6.4-5.4-7.5zM826 763.7L688 871.6 550 763.7V577l138-48 138 48v186.7z")), t.FileSearchOutline = u("file-search", o, i(r, "M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm144 452H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm445.7 51.5l-93.3-93.3C814.7 780.7 828 743.9 828 704c0-97.2-78.8-176-176-176s-176 78.8-176 176 78.8 176 176 176c35.8 0 69-10.7 96.8-29l94.7 94.7c1.6 1.6 3.6 2.3 5.6 2.3s4.1-.8 5.6-2.3l31-31a7.9 7.9 0 0 0 0-11.2zM652 816c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z")), t.FileJpgOutline = u("file-jpg", o, i(c, "M874.6 301.8L596.8 21.3c-4.5-4.5-9.4-8.3-14.7-11.5-1.4-.8-2.8-1.6-4.3-2.3-.9-.5-1.9-.9-2.8-1.3-9-4-18.9-6.2-29-6.2H201c-39.8 0-73 32.2-73 72v880c0 39.8 33.2 72 73 72h623c39.8 0 71-32.2 71-72V352.5c0-19-7-37.2-20.4-50.7zM583 110.4L783.8 312H583V110.4zM823 952H200V72h311v240c0 39.8 33.2 72 73 72h239v568zM350 696.5c0 24.2-7.5 31.4-21.9 31.4-9 0-18.4-5.8-24.8-18.5L272.9 732c13.4 22.9 32.3 34.2 61.3 34.2 41.6 0 60.8-29.9 60.8-66.2V577h-45v119.5zM501.3 577H437v186h44v-62h21.6c39.1 0 73.1-19.6 73.1-63.6 0-45.8-33.5-60.4-74.4-60.4zm-.8 89H481v-53h18.2c21.5 0 33.4 6.2 33.4 24.9 0 18.1-10.5 28.1-32.1 28.1zm182.5-9v36h30v30.1c-4 2.9-11 4.7-17.7 4.7-34.3 0-50.7-21.4-50.7-58.2 0-36.1 19.7-57.4 47.1-57.4 15.3 0 25 6.2 34 14.4l23.7-28.3c-12.7-12.8-32.1-24.2-59.2-24.2-49.6 0-91.1 35.3-91.1 97 0 62.7 40 95.1 91.5 95.1 25.9 0 49.2-10.2 61.5-22.6V657H683z")), t.FontColorsOutline = u("font-colors", o, i(r, "M904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zm-650.3-80h85c4.2 0 8-2.7 9.3-6.8l53.7-166h219.2l53.2 166c1.3 4 5 6.8 9.3 6.8h89.1c1.1 0 2.2-.2 3.2-.5a9.7 9.7 0 0 0 6-12.4L573.6 118.6a9.9 9.9 0 0 0-9.2-6.6H462.1c-4.2 0-7.9 2.6-9.2 6.6L244.5 723.1c-.4 1-.5 2.1-.5 3.2-.1 5.3 4.3 9.7 9.7 9.7zm255.9-516.1h4.1l83.8 263.8H424.9l84.7-263.8z")), t.FontSizeOutline = u("font-size", o, i(r, "M920 416H616c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h60v320h-46c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h164c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-46V480h60v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V424c0-4.4-3.6-8-8-8zM656 296V168c0-4.4-3.6-8-8-8H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8z")), t.ForkOutline = u("fork", o, i(r, "M752 100c-61.8 0-112 50.2-112 112 0 47.7 29.9 88.5 72 104.6v27.6L512 601.4 312 344.2v-27.6c42.1-16.1 72-56.9 72-104.6 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 50.6 33.8 93.5 80 107.3v34.4c0 9.7 3.3 19.3 9.3 27L476 672.3v33.6c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-33.6l226.7-291.6c6-7.7 9.3-17.3 9.3-27v-34.4c46.2-13.8 80-56.7 80-107.3 0-61.8-50.2-112-112-112zM224 212a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm336 600a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm192-552a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z")), t.FormOutline = u("form", o, i(r, "M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z", "M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 0 0-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z")), t.FullscreenExitOutline = u("fullscreen-exit", o, i(r, "M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 0 0 0 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 0 0 391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 0 0-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z")), t.FullscreenOutline = u("fullscreen", o, i(r, "M290 236.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0 0 13.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 0 0 0 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 0 0-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z")), t.GatewayOutline = u("gateway", o, i(r, "M928 392c8.8 0 16-7.2 16-16V192c0-8.8-7.2-16-16-16H744c-8.8 0-16 7.2-16 16v56H296v-56c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16v184c0 8.8 7.2 16 16 16h56v240H96c-8.8 0-16 7.2-16 16v184c0 8.8 7.2 16 16 16h184c8.8 0 16-7.2 16-16v-56h432v56c0 8.8 7.2 16 16 16h184c8.8 0 16-7.2 16-16V648c0-8.8-7.2-16-16-16h-56V392h56zM792 240h88v88h-88v-88zm-648 88v-88h88v88h-88zm88 456h-88v-88h88v88zm648-88v88h-88v-88h88zm-80-64h-56c-8.8 0-16 7.2-16 16v56H296v-56c0-8.8-7.2-16-16-16h-56V392h56c8.8 0 16-7.2 16-16v-56h432v56c0 8.8 7.2 16 16 16h56v240z")), t.DownOutline = u("down", o, i(r, "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z")), t.DragOutline = u("drag", o, i(r, "M909.3 506.3L781.7 405.6a7.23 7.23 0 0 0-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7a7.14 7.14 0 0 0-11.3 0L405.6 242.3a7.23 7.23 0 0 0 5.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8a7.3 7.3 0 0 0 .1-11.4z")), t.GlobalOutline = u("global", o, i(r, "M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2z")), t.GooglePlusOutline = u("google-plus", o, i(r, "M879.5 470.4c-.3-27-.4-54.2-.5-81.3h-80.8c-.3 27-.5 54.1-.7 81.3-27.2.1-54.2.3-81.2.6v80.9c27 .3 54.2.5 81.2.8.3 27 .3 54.1.5 81.1h80.9c.1-27 .3-54.1.5-81.3 27.2-.3 54.2-.4 81.2-.7v-80.9c-26.9-.2-54.1-.2-81.1-.5zm-530 .4c-.1 32.3 0 64.7.1 97 54.2 1.8 108.5 1 162.7 1.8-23.9 120.3-187.4 159.3-273.9 80.7-89-68.9-84.8-220 7.7-284 64.7-51.6 156.6-38.9 221.3 5.8 25.4-23.5 49.2-48.7 72.1-74.7-53.8-42.9-119.8-73.5-190-70.3-146.6-4.9-281.3 123.5-283.7 270.2-9.4 119.9 69.4 237.4 180.6 279.8 110.8 42.7 252.9 13.6 323.7-86 46.7-62.9 56.8-143.9 51.3-220-90.7-.7-181.3-.6-271.9-.3z")), t.GoogleOutline = u("google", o, i(r, "M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z")), t.HeatMapOutline = u("heat-map", o, i(r, "M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-790.4-23.9L512 231.9 858.7 832H165.3zm319-474.1l-228 394c-12.3 21.3 3.1 48 27.7 48h455.8c24.7 0 40.1-26.7 27.7-48L539.7 358c-6.2-10.7-17-16-27.7-16-10.8 0-21.6 5.3-27.7 16zm214 386H325.7L512 422l186.3 322zm-214-194.1l-57 98.4C415 669.5 430.4 696 455 696h114c24.6 0 39.9-26.5 27.7-47.7l-57-98.4c-6.1-10.6-16.9-15.9-27.7-15.9s-21.5 5.3-27.7 15.9zm57.1 98.4h-58.7l29.4-50.7 29.3 50.7z")), t.GoldOutline = u("gold", o, i(r, "M342 472h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H382.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8zm91.2-196h159.5l20.7 128h-201l20.8-128zm2.5 282.7c-.6-3.9-4-6.7-7.9-6.7H166.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248zM196.5 748l20.7-128h159.5l20.7 128H196.5zm709.4 58.7l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H596.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.3-.7 7.3-4.8 6.6-9.2zM626.5 748l20.7-128h159.5l20.7 128H626.5z")), t.HistoryOutline = u("history", o, i(r, "M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 0 0 3 14.1zm167.7 301.1l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 0 1-112.5 75.9 352.18 352.18 0 0 1-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 0 1-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 0 1 171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 0 1 112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 0 1 775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z")), t.IeOutline = u("ie", o, i(r, "M852.6 367.6c16.3-36.9 32.1-90.7 32.1-131.8 0-109.1-119.5-147.6-314.5-57.9-161.4-10.8-316.8 110.5-355.6 279.7 46.3-52.3 117.4-123.4 183-151.7C316.1 378.3 246.7 470 194 565.6c-31.1 56.9-66 148.8-66 217.5 0 147.9 139.3 129.8 270.4 63 47.1 23.1 99.8 23.4 152.5 23.4 145.7 0 276.4-81.4 325.2-219H694.9c-78.8 132.9-295.2 79.5-295.2-71.2h493.2c9.6-65.4-2.5-143.6-40.3-211.7zM224.8 648.3c26.6 76.7 80.6 143.8 150.4 185-133.1 73.4-259.9 43.6-150.4-185zm174-163.3c3-82.7 75.4-142.3 156-142.3 80.1 0 153 59.6 156 142.3h-312zm276.8-281.4c32.1-15.4 72.8-33 108.8-33 47.1 0 81.4 32.6 81.4 80.6 0 30-11.1 73.5-21.9 101.8-39.3-63.5-98.9-122.4-168.3-149.4z")), t.InboxOutline = u("inbox", o, i(c, "M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z")), t.ImportOutline = u("import", o, i(r, "M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zM902 476H588v-76c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-76h314c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.InfoOutline = u("info", o, i(r, "M448 224a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96 168h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V400c0-4.4-3.6-8-8-8z")), t.ItalicOutline = u("italic", o, i(r, "M798 160H366c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h181.2l-156 544H229c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8H474.4l156-544H798c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z")), t.IssuesCloseOutline = u("issues-close", o, i(r, "M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72-112c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48zm400-188h-59.3c-2.6 0-5 1.2-6.5 3.3L763.7 538.1l-49.9-68.8a7.92 7.92 0 0 0-6.5-3.3H648c-6.5 0-10.3 7.4-6.5 12.7l109.2 150.7a16.1 16.1 0 0 0 26 0l165.8-228.7c3.8-5.3 0-12.7-6.5-12.7zm-44 306h-64.2c-5.5 0-10.6 2.9-13.6 7.5a352.2 352.2 0 0 1-49.8 62.2A355.92 355.92 0 0 1 651.1 840a355 355 0 0 1-138.7 27.9c-48.1 0-94.8-9.4-138.7-27.9a355.92 355.92 0 0 1-113.3-76.3A353.06 353.06 0 0 1 184 650.5c-18.6-43.8-28-90.5-28-138.5s9.4-94.7 28-138.5c17.9-42.4 43.6-80.5 76.4-113.2 32.8-32.7 70.9-58.4 113.3-76.3a355 355 0 0 1 138.7-27.9c48.1 0 94.8 9.4 138.7 27.9 42.4 17.9 80.5 43.6 113.3 76.3 19 19 35.6 39.8 49.8 62.2 2.9 4.7 8.1 7.5 13.6 7.5H892c6 0 9.8-6.3 7.2-11.6C828.8 178.5 684.7 82 517.7 80 278.9 77.2 80.5 272.5 80 511.2 79.5 750.1 273.3 944 512.4 944c169.2 0 315.6-97 386.7-238.4A8 8 0 0 0 892 694z")), t.KeyOutline = u("key", o, i(r, "M608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5l-41.1 41.1-62.3-62.3a8.15 8.15 0 0 0-11.4 0l-39.8 39.8a8.15 8.15 0 0 0 0 11.4l62.3 62.3-44.9 44.9-62.3-62.3a8.15 8.15 0 0 0-11.4 0l-39.8 39.8a8.15 8.15 0 0 0 0 11.4l62.3 62.3-65.3 65.3a8.03 8.03 0 0 0 0 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6A304.06 304.06 0 0 0 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644c-60.9 0-118.2-23.7-161.2-66.8-43.1-43-66.8-100.3-66.8-161.2 0-60.9 23.7-118.2 66.8-161.2 43-43.1 100.3-66.8 161.2-66.8 60.9 0 118.2 23.7 161.2 66.8 43.1 43 66.8 100.3 66.8 161.2 0 60.9-23.7 118.2-66.8 161.2z")), t.LaptopOutline = u("laptop", o, i(r, "M956.9 845.1L896.4 632V168c0-17.7-14.3-32-32-32h-704c-17.7 0-32 14.3-32 32v464L67.9 845.1C60.4 866 75.8 888 98 888h828.8c22.2 0 37.6-22 30.1-42.9zM200.4 208h624v395h-624V208zm228.3 608l8.1-37h150.3l8.1 37H428.7zm224 0l-19.1-86.7c-.8-3.7-4.1-6.3-7.8-6.3H398.2c-3.8 0-7 2.6-7.8 6.3L371.3 816H151l42.3-149h638.2l42.3 149H652.7z")), t.LeftOutline = u("left", o, i(r, "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z")), t.LinkOutline = u("link", o, i(r, "M574 665.4a8.03 8.03 0 0 0-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 0 0-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 0 0 0 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 0 0 0 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 0 0-11.3 0L372.3 598.7a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z")), t.LineChartOutline = u("line-chart", o, i(r, "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 0 0-11.3 0L266.3 586.7a8.03 8.03 0 0 0 0 11.3l39.5 39.7z")), t.LineHeightOutline = u("line-height", o, i(r, "M648 160H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zm272.8 546H856V318h64.8c6 0 9.4-7 5.7-11.7L825.7 178.7a7.14 7.14 0 0 0-11.3 0L713.6 306.3a7.23 7.23 0 0 0 5.7 11.7H784v388h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5a7.2 7.2 0 0 0-5.6-11.7z")), t.LineOutline = u("line", o, i(r, "M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.Loading3QuartersOutline = u("loading-3-quarters", o, i(c, "M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z")), t.LoadingOutline = u("loading", o, i(c, "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z")), t.LoginOutline = u("login", o, i(r, "M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 0 1 520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 0 1 270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 0 1 0 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z")), t.LogoutOutline = u("logout", o, i(r, "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z")), t.ManOutline = u("man", o, i(r, "M874 120H622c-3.3 0-6 2.7-6 6v56c0 3.3 2.7 6 6 6h160.4L583.1 387.3c-50-38.5-111-59.3-175.1-59.3-76.9 0-149.3 30-203.6 84.4S120 539.1 120 616s30 149.3 84.4 203.6C258.7 874 331.1 904 408 904s149.3-30 203.6-84.4C666 765.3 696 692.9 696 616c0-64.1-20.8-124.9-59.2-174.9L836 241.9V402c0 3.3 2.7 6 6 6h56c3.3 0 6-2.7 6-6V150c0-16.5-13.5-30-30-30zM408 828c-116.9 0-212-95.1-212-212s95.1-212 212-212 212 95.1 212 212-95.1 212-212 212z")), t.MediumOutline = u("medium", o, i(r, "M834.7 279.8l61.3-58.9V208H683.7L532.4 586.4 360.3 208H137.7v12.9l71.6 86.6c7 6.4 10.6 15.8 9.7 25.2V673c2.2 12.3-1.7 24.8-10.3 33.7L128 805v12.7h228.6v-12.9l-80.6-98a39.99 39.99 0 0 1-11.1-33.7V378.7l200.7 439.2h23.3l172.6-439.2v349.9c0 9.2 0 11.1-6 17.2l-62.1 60.3V819h301.2v-12.9l-59.9-58.9c-5.2-4-7.9-10.7-6.8-17.2V297a18.1 18.1 0 0 1 6.8-17.2z")), t.MediumWorkmarkOutline = u("medium-workmark", o, i(c, "M517.2 590.55c0 3.55 0 4.36 2.4 6.55l13.43 13.25v.57h-59.57v-25.47a41.44 41.44 0 0 1-39.5 27.65c-30.61 0-52.84-24.25-52.84-68.87 0-41.8 23.99-69.69 57.65-69.69a35.15 35.15 0 0 1 34.61 21.67v-56.19a6.99 6.99 0 0 0-2.71-6.79l-12.8-12.45v-.56l59.33-7.04v177.37zm-43.74-8.09v-83.83a22.2 22.2 0 0 0-17.74-8.4c-14.48 0-28.47 13.25-28.47 52.62 0 36.86 12.07 49.88 27.1 49.88a23.91 23.91 0 0 0 19.11-10.27zm83.23 28.46V497.74a7.65 7.65 0 0 0-2.4-6.79l-13.19-13.74v-.57h59.56v114.8c0 3.55 0 4.36 2.4 6.54l13.12 12.45v.57l-59.49-.08zm-2.16-175.67c0-13.4 10.74-24.25 23.99-24.25 13.25 0 23.98 10.86 23.98 24.25 0 13.4-10.73 24.25-23.98 24.25s-23.99-10.85-23.99-24.25zm206.83 155.06c0 3.55 0 4.6 2.4 6.79l13.43 13.25v.57h-59.88V581.9a43.4 43.4 0 0 1-41.01 31.2c-26.55 0-40.78-19.56-40.78-56.59 0-17.86 0-37.43.56-59.41a6.91 6.91 0 0 0-2.4-6.55L620.5 477.2v-.57h59.09v73.81c0 24.25 3.51 40.42 18.54 40.42a23.96 23.96 0 0 0 19.35-12.2v-80.85a7.65 7.65 0 0 0-2.4-6.79l-13.27-13.82v-.57h59.56V590.3zm202.76 20.6c0-4.36.8-59.97.8-72.75 0-24.25-3.76-40.98-20.63-40.98a26.7 26.7 0 0 0-21.19 11.64 99.68 99.68 0 0 1 2.4 23.04c0 16.81-.56 38.23-.8 59.66a6.91 6.91 0 0 0 2.4 6.55l13.43 12.45v.56h-60.12c0-4.04.8-59.98.8-72.76 0-24.65-3.76-40.98-20.39-40.98-8.2.3-15.68 4.8-19.83 11.96v82.46c0 3.56 0 4.37 2.4 6.55l13.11 12.45v.56h-59.48V498.15a7.65 7.65 0 0 0-2.4-6.8l-13.19-14.14v-.57H841v28.78c5.53-19 23.13-31.76 42.7-30.96 19.82 0 33.26 11.16 38.93 32.34a46.41 46.41 0 0 1 44.77-32.34c26.55 0 41.58 19.8 41.58 57.23 0 17.87-.56 38.24-.8 59.66a6.5 6.5 0 0 0 2.72 6.55l13.11 12.45v.57h-59.88zM215.87 593.3l17.66 17.05v.57h-89.62v-.57l17.99-17.05a6.91 6.91 0 0 0 2.4-6.55V477.69c0-4.6 0-10.83.8-16.16L104.66 613.1h-.72l-62.6-139.45c-1.37-3.47-1.77-3.72-2.65-6.06v91.43a32.08 32.08 0 0 0 2.96 17.87l25.19 33.46v.57H0v-.57l25.18-33.55a32.16 32.16 0 0 0 2.96-17.78V457.97A19.71 19.71 0 0 0 24 444.15L6.16 420.78v-.56h63.96l53.56 118.1 47.17-118.1h62.6v.56l-17.58 19.8a6.99 6.99 0 0 0-2.72 6.8v139.37a6.5 6.5 0 0 0 2.72 6.55zm70.11-54.65v.56c0 34.6 17.67 48.5 38.38 48.5a43.5 43.5 0 0 0 40.77-24.97h.56c-7.2 34.2-28.14 50.36-59.48 50.36-33.82 0-65.72-20.61-65.72-68.39 0-50.2 31.98-70.25 67.32-70.25 28.46 0 58.76 13.58 58.76 57.24v6.95h-80.59zm0-6.95h39.42v-7.04c0-35.57-7.28-45.03-18.23-45.03-13.27 0-21.35 14.15-21.35 52.07h.16z")), t.MenuUnfoldOutline = u("menu-unfold", o, i(r, "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z")), t.MenuFoldOutline = u("menu-fold", o, i(r, "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z")), t.MenuOutline = u("menu", o, i(r, "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z")), t.MinusOutline = u("minus", o, i(r, "M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z")), t.MonitorOutline = u("monitor", o, i(r, "M692.8 412.7l.2-.2-34.6-44.3a7.97 7.97 0 0 0-11.2-1.4l-50.4 39.3-70.5-90.1a7.97 7.97 0 0 0-11.2-1.4l-37.9 29.7a7.97 7.97 0 0 0-1.4 11.2l70.5 90.2-.2.1 34.6 44.3c2.7 3.5 7.7 4.1 11.2 1.4l50.4-39.3 64.1 82c2.7 3.5 7.7 4.1 11.2 1.4l37.9-29.6c3.5-2.7 4.1-7.7 1.4-11.2l-64.1-82.1zM608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5L114.3 856.1a8.03 8.03 0 0 0 0 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6C473 696.1 537.7 720 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644s-118.2-23.7-161.2-66.8C403.7 534.2 380 476.9 380 416s23.7-118.2 66.8-161.2c43-43.1 100.3-66.8 161.2-66.8s118.2 23.7 161.2 66.8c43.1 43 66.8 100.3 66.8 161.2s-23.7 118.2-66.8 161.2z")), t.MoreOutline = u("more", o, i(r, "M456 231a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0z")), t.OrderedListOutline = u("ordered-list", o, i(r, "M920 760H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-568H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM216 712H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h72.4v20.5h-35.7c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h35.7V838H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4V716c0-2.2-1.8-4-4-4zM100 188h38v120c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V152c0-4.4-3.6-8-8-8h-78c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4zm116 240H100c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h68.4l-70.3 77.7a8.3 8.3 0 0 0-2.1 5.4V592c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4h-68.4l70.3-77.7a8.3 8.3 0 0 0 2.1-5.4V432c0-2.2-1.8-4-4-4z")), t.NumberOutline = u("number", o, i(r, "M872 394c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H400V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v236H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h228v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h164c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V394h164zM628 630H400V394h228v236z")), t.PauseOutline = u("pause", o, i(r, "M304 176h80v672h-80zm408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z")), t.PercentageOutline = u("percentage", o, i(r, "M855.7 210.8l-42.4-42.4a8.03 8.03 0 0 0-11.3 0L168.3 801.9a8.03 8.03 0 0 0 0 11.3l42.4 42.4c3.1 3.1 8.2 3.1 11.3 0L855.6 222c3.2-3 3.2-8.1.1-11.2zM304 448c79.4 0 144-64.6 144-144s-64.6-144-144-144-144 64.6-144 144 64.6 144 144 144zm0-216c39.7 0 72 32.3 72 72s-32.3 72-72 72-72-32.3-72-72 32.3-72 72-72zm416 344c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144-64.6-144-144-144zm0 216c-39.7 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72-32.3 72-72 72z")), t.PaperClipOutline = u("paper-clip", o, i(r, "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 0 0 174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z")), t.PicCenterOutline = u("pic-center", o, i(r, "M952 792H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-632H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM848 660c8.8 0 16-7.2 16-16V380c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16v264c0 8.8 7.2 16 16 16h672zM232 436h560v152H232V436z")), t.PicLeftOutline = u("pic-left", o, i(r, "M952 792H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-632H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM608 660c8.8 0 16-7.2 16-16V380c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16v264c0 8.8 7.2 16 16 16h512zM152 436h400v152H152V436zm552 210c0 4.4 3.6 8 8 8h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H712c-4.4 0-8 3.6-8 8v56zm8-204h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H712c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z")), t.PlusOutline = u("plus", o, i(r, "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z", "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z")), t.PicRightOutline = u("pic-right", o, i(r, "M952 792H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-632H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-24 500c8.8 0 16-7.2 16-16V380c0-8.8-7.2-16-16-16H416c-8.8 0-16 7.2-16 16v264c0 8.8 7.2 16 16 16h512zM472 436h400v152H472V436zM80 646c0 4.4 3.6 8 8 8h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H88c-4.4 0-8 3.6-8 8v56zm8-204h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H88c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z")), t.PoundOutline = u("pound", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm138-209.8H469.8v-4.7c27.4-17.2 43.9-50.4 43.9-91.1 0-14.1-2.2-27.9-5.3-41H607c4.4 0 8-3.6 8-8v-30c0-4.4-3.6-8-8-8H495c-7.2-22.6-13.4-45.7-13.4-70.5 0-43.5 34-70.2 87.3-70.2 21.5 0 42.5 4.1 60.4 10.5 5.2 1.9 10.6-2 10.6-7.6v-39.5c0-3.3-2.1-6.3-5.2-7.5-18.8-7.2-43.8-12.7-70.3-12.7-92.9 0-151.5 44.5-151.5 120.3 0 26.3 6.9 52 14.6 77.1H374c-4.4 0-8 3.6-8 8v30c0 4.4 3.6 8 8 8h67.1c3.4 14.7 5.9 29.4 5.9 44.2 0 45.2-28.8 83.3-72.8 94.2-3.6.9-6.1 4.1-6.1 7.8V722c0 4.4 3.6 8 8 8H650c4.4 0 8-3.6 8-8v-39.8c0-4.4-3.6-8-8-8z")), t.PoweroffOutline = u("poweroff", o, i(r, "M705.6 124.9a8 8 0 0 0-11.6 7.2v64.2c0 5.5 2.9 10.6 7.5 13.6a352.2 352.2 0 0 1 62.2 49.8c32.7 32.8 58.4 70.9 76.3 113.3a355 355 0 0 1 27.9 138.7c0 48.1-9.4 94.8-27.9 138.7a355.92 355.92 0 0 1-76.3 113.3 353.06 353.06 0 0 1-113.2 76.4c-43.8 18.6-90.5 28-138.5 28s-94.7-9.4-138.5-28a353.06 353.06 0 0 1-113.2-76.4A355.92 355.92 0 0 1 184 650.4a355 355 0 0 1-27.9-138.7c0-48.1 9.4-94.8 27.9-138.7 17.9-42.4 43.6-80.5 76.3-113.3 19-19 39.8-35.6 62.2-49.8 4.7-2.9 7.5-8.1 7.5-13.6V132c0-6-6.3-9.8-11.6-7.2C178.5 195.2 82 339.3 80 506.3 77.2 745.1 272.5 943.5 511.2 944c239 .5 432.8-193.3 432.8-432.4 0-169.2-97-315.7-238.4-386.7zM480 560h64c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z")), t.PullRequestOutline = u("pull-request", o, i(r, "M788 705.9V192c0-8.8-7.2-16-16-16H602v-68.8c0-6-7-9.4-11.7-5.7L462.7 202.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V240h114v465.9c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c.1-49.2-31.7-91-75.9-106.1zM752 860a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96zM384 212c0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1V318.1c44.2-15.1 76-56.9 76-106.1zm-160 0a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm96 600a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0z")), t.QqOutline = u("qq", o, i(r, "M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z")), t.QuestionOutline = u("question", o, i(r, "M764 280.9c-14-30.6-33.9-58.1-59.3-81.6C653.1 151.4 584.6 125 512 125s-141.1 26.4-192.7 74.2c-25.4 23.6-45.3 51-59.3 81.7-14.6 32-22 65.9-22 100.9v27c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-27c0-99.5 88.6-180.4 197.6-180.4s197.6 80.9 197.6 180.4c0 40.8-14.5 79.2-42 111.2-27.2 31.7-65.6 54.4-108.1 64-24.3 5.5-46.2 19.2-61.7 38.8a110.85 110.85 0 0 0-23.9 68.6v31.4c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-31.4c0-15.7 10.9-29.5 26-32.9 58.4-13.2 111.4-44.7 149.3-88.7 19.1-22.3 34-47.1 44.3-74 10.7-27.9 16.1-57.2 16.1-87 0-35-7.4-69-22-100.9zM512 787c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56z")), t.RadarChartOutline = u("radar-chart", o, i(r, "M926.8 397.1l-396-288a31.81 31.81 0 0 0-37.6 0l-396 288a31.99 31.99 0 0 0-11.6 35.8l151.3 466a32 32 0 0 0 30.4 22.1h489.5c13.9 0 26.1-8.9 30.4-22.1l151.3-466c4.2-13.2-.5-27.6-11.7-35.8zM838.6 417l-98.5 32-200-144.7V199.9L838.6 417zM466 567.2l-89.1 122.3-55.2-169.2L466 567.2zm-116.3-96.8L484 373.3v140.8l-134.3-43.7zM512 599.2l93.9 128.9H418.1L512 599.2zm28.1-225.9l134.2 97.1L540.1 514V373.3zM558 567.2l144.3-46.9-55.2 169.2L558 567.2zm-74-367.3v104.4L283.9 449l-98.5-32L484 199.9zM169.3 470.8l86.5 28.1 80.4 246.4-53.8 73.9-113.1-348.4zM327.1 853l50.3-69h269.3l50.3 69H327.1zm414.5-33.8l-53.8-73.9 80.4-246.4 86.5-28.1-113.1 348.4z")), t.QrcodeOutline = u("qrcode", o, i(r, "M468 128H160c-17.7 0-32 14.3-32 32v308c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8zm-56 284H192V192h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm194 210H136c-4.4 0-8 3.6-8 8v308c0 17.7 14.3 32 32 32h308c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8zm-56 284H192V612h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm590-630H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V160c0-17.7-14.3-32-32-32zm-32 284H612V192h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm194 210h-48c-4.4 0-8 3.6-8 8v134h-78V556c0-4.4-3.6-8-8-8H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h78v102c0 4.4 3.6 8 8 8h190c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8zM746 832h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm142 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z")), t.RadiusBottomleftOutline = u("radius-bottomleft", o, i(r, "M712 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm2-696h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM136 374h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0-174h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm752 624h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-348 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-230 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm230 624H358c-87.3 0-158-70.7-158-158V484c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v182c0 127 103 230 230 230h182c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.RadiusBottomrightOutline = u("radius-bottomright", o, i(r, "M368 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-58-624h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm578 102h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm292 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm174 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm230 276h-56c-4.4 0-8 3.6-8 8v182c0 87.3-70.7 158-158 158H484c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h182c127 0 230-103 230-230V484c0-4.4-3.6-8-8-8z")), t.RadiusUpleftOutline = u("radius-upleft", o, i(r, "M656 200h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm58 624h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 650h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm696-696h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-348 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-174 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm174-696H358c-127 0-230 103-230 230v182c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V358c0-87.3 70.7-158 158-158h182c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.RadiusUprightOutline = u("radius-upright", o, i(r, "M368 128h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-2 696h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm522-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 128h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm348 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm174 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-48-696H484c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h182c87.3 0 158 70.7 158 158v182c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V358c0-127-103-230-230-230z")), t.RadiusSettingOutline = u("radius-setting", o, i(r, "M396 140h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-44 684h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm524-204h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 344h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 160h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 160h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 160h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm320 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm160 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm140-284c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V370c0-127-103-230-230-230H484c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h170c87.3 0 158 70.7 158 158v170zM236 96H92c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8V104c0-4.4-3.6-8-8-8zm-48 101.6c0 1.3-1.1 2.4-2.4 2.4h-43.2c-1.3 0-2.4-1.1-2.4-2.4v-43.2c0-1.3 1.1-2.4 2.4-2.4h43.2c1.3 0 2.4 1.1 2.4 2.4v43.2zM920 780H776c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8V788c0-4.4-3.6-8-8-8zm-48 101.6c0 1.3-1.1 2.4-2.4 2.4h-43.2c-1.3 0-2.4-1.1-2.4-2.4v-43.2c0-1.3 1.1-2.4 2.4-2.4h43.2c1.3 0 2.4 1.1 2.4 2.4v43.2z")), t.RedditOutline = u("reddit", o, i(r, "M288 568a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm338.7 119.7c-23.1 18.2-68.9 37.8-114.7 37.8s-91.6-19.6-114.7-37.8c-14.4-11.3-35.3-8.9-46.7 5.5s-8.9 35.3 5.5 46.7C396.3 771.6 457.5 792 512 792s115.7-20.4 155.9-52.1a33.25 33.25 0 1 0-41.2-52.2zM960 456c0-61.9-50.1-112-112-112-42.1 0-78.7 23.2-97.9 57.6-57.6-31.5-127.7-51.8-204.1-56.5L612.9 195l127.9 36.9c11.5 32.6 42.6 56.1 79.2 56.1 46.4 0 84-37.6 84-84s-37.6-84-84-84c-32 0-59.8 17.9-74 44.2L603.5 123a33.2 33.2 0 0 0-39.6 18.4l-90.8 203.9c-74.5 5.2-142.9 25.4-199.2 56.2A111.94 111.94 0 0 0 176 344c-61.9 0-112 50.1-112 112 0 45.8 27.5 85.1 66.8 102.5-7.1 21-10.8 43-10.8 65.5 0 154.6 175.5 280 392 280s392-125.4 392-280c0-22.6-3.8-44.5-10.8-65.5C932.5 541.1 960 501.8 960 456zM820 172.5a31.5 31.5 0 1 1 0 63 31.5 31.5 0 0 1 0-63zM120 456c0-30.9 25.1-56 56-56a56 56 0 0 1 50.6 32.1c-29.3 22.2-53.5 47.8-71.5 75.9a56.23 56.23 0 0 1-35.1-52zm392 381.5c-179.8 0-325.5-95.6-325.5-213.5S332.2 410.5 512 410.5 837.5 506.1 837.5 624 691.8 837.5 512 837.5zM868.8 508c-17.9-28.1-42.2-53.7-71.5-75.9 9-18.9 28.3-32.1 50.6-32.1 30.9 0 56 25.1 56 56 .1 23.5-14.5 43.7-35.1 52zM624 568a56 56 0 1 0 112 0 56 56 0 1 0-112 0z")), t.RedoOutline = u("redo", o, i(r, "M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 0 1-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 0 1-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 0 0-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z")), t.ReloadOutline = u("reload", o, i(r, "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 0 1 655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 0 1 279 755.2a342.16 342.16 0 0 1-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 0 1 109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z")), t.RetweetOutline = u("retweet", o, i(c, "M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2a8.3 8.3 0 0 0 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8a8.22 8.22 0 0 0-5.2-1.8c-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2a8.3 8.3 0 0 0-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z")), t.RightOutline = u("right", o, i(r, "M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z")), t.RiseOutline = u("rise", o, i(r, "M917 211.1l-199.2 24c-6.6.8-9.4 8.9-4.7 13.6l59.3 59.3-226 226-101.8-101.7c-6.3-6.3-16.4-6.2-22.6 0L100.3 754.1a8.03 8.03 0 0 0 0 11.3l45 45.2c3.1 3.1 8.2 3.1 11.3 0L433.3 534 535 635.7c6.3 6.2 16.4 6.2 22.6 0L829 364.5l59.3 59.3a8.01 8.01 0 0 0 13.6-4.7l24-199.2c.7-5.1-3.7-9.5-8.9-8.8z")), t.RollbackOutline = u("rollback", o, i(r, "M793 242H366v-74c0-6.7-7.7-10.4-12.9-6.3l-142 112a8 8 0 0 0 0 12.6l142 112c5.2 4.1 12.9.4 12.9-6.3v-74h415v470H175c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-28.7 64-64V306c0-35.3-28.7-64-64-64z")), t.SafetyOutline = u("safety", o, i(c, "M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192L512 64zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110 312 110v330z", "M378.4 475.1a35.91 35.91 0 0 0-50.9 0 35.91 35.91 0 0 0 0 50.9l129.4 129.4 2.1 2.1a33.98 33.98 0 0 0 48.1 0L730.6 434a33.98 33.98 0 0 0 0-48.1l-2.8-2.8a33.98 33.98 0 0 0-48.1 0L483 579.7 378.4 475.1z")), t.RobotOutline = u("robot", o, i(r, "M300 328a60 60 0 1 0 120 0 60 60 0 1 0-120 0zM852 64H172c-17.7 0-32 14.3-32 32v660c0 17.7 14.3 32 32 32h680c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-32 660H204V128h616v596zM604 328a60 60 0 1 0 120 0 60 60 0 1 0-120 0zm250.2 556H169.8c-16.5 0-29.8 14.3-29.8 32v36c0 4.4 3.3 8 7.4 8h729.1c4.1 0 7.4-3.6 7.4-8v-36c.1-17.7-13.2-32-29.7-32zM664 508H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z")), t.SearchOutline = u("search", o, i(r, "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z")), t.ScanOutline = u("scan", o, i(r, "M136 384h56c4.4 0 8-3.6 8-8V200h176c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-37.6 0-68 30.4-68 68v180c0 4.4 3.6 8 8 8zm512-184h176v176c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V196c0-37.6-30.4-68-68-68H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM376 824H200V648c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v180c0 37.6 30.4 68 68 68h180c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm512-184h-56c-4.4 0-8 3.6-8 8v176H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h180c37.6 0 68-30.4 68-68V648c0-4.4-3.6-8-8-8zm16-164H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.ScissorOutline = u("scissor", o, i(r, "M567.1 512l318.5-319.3c5-5 1.5-13.7-5.6-13.7h-90.5c-2.1 0-4.2.8-5.6 2.3l-273.3 274-90.2-90.5c12.5-22.1 19.7-47.6 19.7-74.8 0-83.9-68.1-152-152-152s-152 68.1-152 152 68.1 152 152 152c27.7 0 53.6-7.4 75.9-20.3l90 90.3-90.1 90.3A151.04 151.04 0 0 0 288 582c-83.9 0-152 68.1-152 152s68.1 152 152 152 152-68.1 152-152c0-27.2-7.2-52.7-19.7-74.8l90.2-90.5 273.3 274c1.5 1.5 3.5 2.3 5.6 2.3H880c7.1 0 10.7-8.6 5.6-13.7L567.1 512zM288 370c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zm0 444c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z")), t.SelectOutline = u("select", o, i(r, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h360c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H184V184h656v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32zM653.3 599.4l52.2-52.2a8.01 8.01 0 0 0-4.7-13.6l-179.4-21c-5.1-.6-9.5 3.7-8.9 8.9l21 179.4c.8 6.6 8.9 9.4 13.6 4.7l52.4-52.4 256.2 256.2c3.1 3.1 8.2 3.1 11.3 0l42.4-42.4c3.1-3.1 3.1-8.2 0-11.3L653.3 599.4z")), t.ShakeOutline = u("shake", o, i(r, "M324 666a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm616.7-309.6L667.6 83.2C655.2 70.9 638.7 64 621.1 64s-34.1 6.8-46.5 19.2L83.3 574.5a65.85 65.85 0 0 0 0 93.1l273.2 273.2c12.3 12.3 28.9 19.2 46.5 19.2s34.1-6.8 46.5-19.2l491.3-491.3c25.6-25.7 25.6-67.5-.1-93.1zM403 880.1L143.9 621l477.2-477.2 259 259.2L403 880.1zM152.8 373.7a7.9 7.9 0 0 0 11.2 0L373.7 164a7.9 7.9 0 0 0 0-11.2l-38.4-38.4a7.9 7.9 0 0 0-11.2 0L114.3 323.9a7.9 7.9 0 0 0 0 11.2l38.5 38.6zm718.6 276.6a7.9 7.9 0 0 0-11.2 0L650.3 860.1a7.9 7.9 0 0 0 0 11.2l38.4 38.4a7.9 7.9 0 0 0 11.2 0L909.7 700a7.9 7.9 0 0 0 0-11.2l-38.3-38.5z")), t.ShareAltOutline = u("share-alt", o, i(r, "M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 0 0 0-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z")), t.ShoppingCartOutline = u("shopping-cart", o, i(c, "M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z")), t.ShrinkOutline = u("shrink", o, i(r, "M881.7 187.4l-45.1-45.1a8.03 8.03 0 0 0-11.3 0L667.8 299.9l-54.7-54.7a7.94 7.94 0 0 0-13.5 4.7L576.1 439c-.6 5.2 3.7 9.5 8.9 8.9l189.2-23.5c6.6-.8 9.3-8.8 4.7-13.5l-54.7-54.7 157.6-157.6c3-3 3-8.1-.1-11.2zM439 576.1l-189.2 23.5c-6.6.8-9.3 8.9-4.7 13.5l54.7 54.7-157.5 157.5a8.03 8.03 0 0 0 0 11.3l45.1 45.1c3.1 3.1 8.2 3.1 11.3 0l157.6-157.6 54.7 54.7a7.94 7.94 0 0 0 13.5-4.7L447.9 585a7.9 7.9 0 0 0-8.9-8.9z")), t.SlackOutline = u("slack", o, i(r, "M409.4 128c-42.4 0-76.7 34.4-76.7 76.8 0 20.3 8.1 39.9 22.4 54.3a76.74 76.74 0 0 0 54.3 22.5h76.7v-76.8c0-42.3-34.3-76.7-76.7-76.8zm0 204.8H204.7c-42.4 0-76.7 34.4-76.7 76.8s34.4 76.8 76.7 76.8h204.6c42.4 0 76.7-34.4 76.7-76.8.1-42.4-34.3-76.8-76.6-76.8zM614 486.4c42.4 0 76.8-34.4 76.7-76.8V204.8c0-42.4-34.3-76.8-76.7-76.8-42.4 0-76.7 34.4-76.7 76.8v204.8c0 42.5 34.3 76.8 76.7 76.8zm281.4-76.8c0-42.4-34.4-76.8-76.7-76.8S742 367.2 742 409.6v76.8h76.7c42.3 0 76.7-34.4 76.7-76.8zm-76.8 128H614c-42.4 0-76.7 34.4-76.7 76.8 0 20.3 8.1 39.9 22.4 54.3a76.74 76.74 0 0 0 54.3 22.5h204.6c42.4 0 76.7-34.4 76.7-76.8.1-42.4-34.3-76.7-76.7-76.8zM614 742.4h-76.7v76.8c0 42.4 34.4 76.8 76.7 76.8 42.4 0 76.8-34.4 76.7-76.8.1-42.4-34.3-76.7-76.7-76.8zM409.4 537.6c-42.4 0-76.7 34.4-76.7 76.8v204.8c0 42.4 34.4 76.8 76.7 76.8 42.4 0 76.8-34.4 76.7-76.8V614.4c0-20.3-8.1-39.9-22.4-54.3a76.92 76.92 0 0 0-54.3-22.5zM128 614.4c0 20.3 8.1 39.9 22.4 54.3a76.74 76.74 0 0 0 54.3 22.5c42.4 0 76.8-34.4 76.7-76.8v-76.8h-76.7c-42.3 0-76.7 34.4-76.7 76.8z")), t.SmallDashOutline = u("small-dash", o, i(r, "M112 476h72v72h-72zm182 0h72v72h-72zm364 0h72v72h-72zm182 0h72v72h-72zm-364 0h72v72h-72z")), t.SolutionOutline = u("solution", o, i(r, "M688 264c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48zm-8 136H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM480 544H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 308H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm356.8-74.4c29-26.3 47.2-64.3 47.2-106.6 0-79.5-64.5-144-144-144s-144 64.5-144 144c0 42.3 18.2 80.3 47.2 106.6-57 32.5-96.2 92.7-99.2 162.1-.2 4.5 3.5 8.3 8 8.3h48.1c4.2 0 7.7-3.3 8-7.6C564 871.2 621.7 816 692 816s128 55.2 131.9 124.4c.2 4.2 3.7 7.6 8 7.6H880c4.6 0 8.2-3.8 8-8.3-2.9-69.5-42.2-129.6-99.2-162.1zM692 591c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z")), t.SketchOutline = u("sketch", o, i(r, "M925.6 405.1l-203-253.7a6.5 6.5 0 0 0-5-2.4H306.4c-1.9 0-3.8.9-5 2.4l-203 253.7a6.5 6.5 0 0 0 .2 8.3l408.6 459.5c1.2 1.4 3 2.1 4.8 2.1 1.8 0 3.5-.8 4.8-2.1l408.6-459.5a6.5 6.5 0 0 0 .2-8.3zM645.2 206.4l34.4 133.9-132.5-133.9h98.1zm8.2 178.5H370.6L512 242l141.4 142.9zM378.8 206.4h98.1L344.3 340.3l34.5-133.9zm-53.4 7l-44.1 171.5h-93.1l137.2-171.5zM194.6 434.9H289l125.8 247.7-220.2-247.7zM512 763.4L345.1 434.9h333.7L512 763.4zm97.1-80.8L735 434.9h94.4L609.1 682.6zm133.6-297.7l-44.1-171.5 137.2 171.5h-93.1z")), t.SortDescendingOutline = u("sort-descending", o, i(r, "M839.6 433.8L749 150.5a9.24 9.24 0 0 0-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-.3.9-.5 1.9-.5 2.9 0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-.1 2.8-.4 2.4-.8 4.3-2.4 5.5-4.6 1.1-2.2 1.3-4.7.6-7.1zM663.3 325.5l32.8-116.9h6.3l32.1 116.9h-71.2zm143.5 492.9H677.2v-.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v.4L587.7 828.9a9.35 9.35 0 0 0-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43a9.2 9.2 0 0 0-9.2-9.3zM310.3 167.1a8 8 0 0 0-12.6 0L185.7 309c-4.2 5.3-.4 13 6.3 13h76v530c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V322h76c6.7 0 10.5-7.8 6.3-13l-112-141.9z")), t.SortAscendingOutline = u("sort-ascending", o, i(r, "M839.6 433.8L749 150.5a9.24 9.24 0 0 0-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-.3.9-.5 1.9-.5 2.9 0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-.1 2.8-.4 2.4-.8 4.3-2.4 5.5-4.6 1.1-2.2 1.3-4.7.6-7.1zM663.3 325.5l32.8-116.9h6.3l32.1 116.9h-71.2zm143.5 492.9H677.2v-.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v.4L587.7 828.9a9.35 9.35 0 0 0-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43a9.2 9.2 0 0 0-9.2-9.3zM416 702h-76V172c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v530h-76c-6.7 0-10.5 7.8-6.3 13l112 141.9a8 8 0 0 0 12.6 0l112-141.9c4.1-5.2.4-13-6.3-13z")), t.StockOutline = u("stock", o, i(r, "M904 747H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM165.7 621.8l39.7 39.5c3.1 3.1 8.2 3.1 11.3 0l234.7-233.9 97.6 97.3a32.11 32.11 0 0 0 45.2 0l264.2-263.2c3.1-3.1 3.1-8.2 0-11.3l-39.7-39.6a8.03 8.03 0 0 0-11.3 0l-235.7 235-97.7-97.3a32.11 32.11 0 0 0-45.2 0L165.7 610.5a7.94 7.94 0 0 0 0 11.3z")), t.SwapLeftOutline = u("swap-left", o, i(c, "M872 572H266.8l144.3-183c4.1-5.2.4-13-6.3-13H340c-9.8 0-19.1 4.5-25.1 12.2l-164 208c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z")), t.SwapRightOutline = u("swap-right", o, i(c, "M873.1 596.2l-164-208A32 32 0 0 0 684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z")), t.StrikethroughOutline = u("strikethrough", o, i(r, "M952 474H569.9c-10-2-20.5-4-31.6-6-15.9-2.9-22.2-4.1-30.8-5.8-51.3-10-82.2-20-106.8-34.2-35.1-20.5-52.2-48.3-52.2-85.1 0-37 15.2-67.7 44-89 28.4-21 68.8-32.1 116.8-32.1 54.8 0 97.1 14.4 125.8 42.8 14.6 14.4 25.3 32.1 31.8 52.6 1.3 4.1 2.8 10 4.3 17.8.9 4.8 5.2 8.2 9.9 8.2h72.8c5.6 0 10.1-4.6 10.1-10.1v-1c-.7-6.8-1.3-12.1-2-16-7.3-43.5-28-81.7-59.7-110.3-44.4-40.5-109.7-61.8-188.7-61.8-72.3 0-137.4 18.1-183.3 50.9-25.6 18.4-45.4 41.2-58.6 67.7-13.5 27.1-20.3 58.4-20.3 92.9 0 29.5 5.7 54.5 17.3 76.5 8.3 15.7 19.6 29.5 34.1 42H72c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h433.2c2.1.4 3.9.8 5.9 1.2 30.9 6.2 49.5 10.4 66.6 15.2 23 6.5 40.6 13.3 55.2 21.5 35.8 20.2 53.3 49.2 53.3 89 0 35.3-15.5 66.8-43.6 88.8-30.5 23.9-75.6 36.4-130.5 36.4-43.7 0-80.7-8.5-110.2-25-29.1-16.3-49.1-39.8-59.7-69.5-.8-2.2-1.7-5.2-2.7-9-1.2-4.4-5.3-7.5-9.7-7.5h-79.7c-5.6 0-10.1 4.6-10.1 10.1v1c.2 2.3.4 4.2.6 5.7 6.5 48.8 30.3 88.8 70.7 118.8 47.1 34.8 113.4 53.2 191.8 53.2 84.2 0 154.8-19.8 204.2-57.3 25-18.9 44.2-42.2 57.1-69 13-27.1 19.7-57.9 19.7-91.5 0-31.8-5.8-58.4-17.8-81.4-5.8-11.2-13.1-21.5-21.8-30.8H952c4.4 0 8-3.6 8-8v-60a8 8 0 0 0-8-7.9z")), t.SwapOutline = u("swap", o, i(r, "M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z")), t.SyncOutline = u("sync", o, i(r, "M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 0 1 755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 0 1 512.1 856a342.24 342.24 0 0 1-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 0 0-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 0 0-8-8.2z")), t.TableOutline = u("table", o, i(r, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z")), t.TeamOutline = u("team", o, i(r, "M824.2 699.9a301.55 301.55 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z")), t.TaobaoOutline = u("taobao", o, i(r, "M168.5 273.7a68.7 68.7 0 1 0 137.4 0 68.7 68.7 0 1 0-137.4 0zm730 79.2s-23.7-184.4-426.9-70.1c17.3-30 25.6-49.5 25.6-49.5L396.4 205s-40.6 132.6-113 194.4c0 0 70.1 40.6 69.4 39.4 20.1-20.1 38.2-40.6 53.7-60.4 16.1-7 31.5-13.6 46.7-19.8-18.6 33.5-48.7 83.8-78.8 115.6l42.4 37s28.8-27.7 60.4-61.2h36v61.8H372.9v49.5h140.3v118.5c-1.7 0-3.6 0-5.4-.2-15.4-.7-39.5-3.3-49-18.2-11.5-18.1-3-51.5-2.4-71.9h-97l-3.4 1.8s-35.5 159.1 102.3 155.5c129.1 3.6 203-36 238.6-63.1l14.2 52.6 79.6-33.2-53.9-131.9-64.6 20.1 12.1 45.2c-16.6 12.4-35.6 21.7-56.2 28.4V561.3h137.1v-49.5H628.1V450h137.6v-49.5H521.3c17.6-21.4 31.5-41.1 35-53.6l-42.5-11.6c182.8-65.5 284.5-54.2 283.6 53.2v282.8s10.8 97.1-100.4 90.1l-60.2-12.9-14.2 57.1S882.5 880 903.7 680.2c21.3-200-5.2-327.3-5.2-327.3zm-707.4 18.3l-45.4 69.7 83.6 52.1s56 28.5 29.4 81.9C233.8 625.5 112 736.3 112 736.3l109 68.1c75.4-163.7 70.5-142 89.5-200.7 19.5-60.1 23.7-105.9-9.4-139.1-42.4-42.6-47-46.6-110-93.4z")), t.ToTopOutline = u("to-top", o, i(r, "M885 780H165c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM400 325.7h73.9V664c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V325.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 171a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13z")), t.TrademarkOutline = u("trademark", o, i(r, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm87.5-334.7c34.8-12.8 78.4-49 78.4-119.2 0-71.2-45.5-131.1-144.2-131.1H378c-4.4 0-8 3.6-8 8v410c0 4.4 3.6 8 8 8h54.5c4.4 0 8-3.6 8-8V561.2h88.7l74.6 159.2c1.3 2.8 4.1 4.6 7.2 4.6h62a7.9 7.9 0 0 0 7.1-11.5l-80.6-164.2zM522 505h-81.5V357h83.4c48 0 80.9 25.3 80.9 75.5 0 46.9-29.8 72.5-82.8 72.5z")), t.TransactionOutline = u("transaction", o, i(r, "M668.6 320c0-4.4-3.6-8-8-8h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.5-1.1.9-2.4.9-3.7zM157.9 504.2a352.7 352.7 0 0 1 103.5-242.4c32.5-32.5 70.3-58.1 112.4-75.9 43.6-18.4 89.9-27.8 137.6-27.8 47.8 0 94.1 9.3 137.6 27.8 42.1 17.8 79.9 43.4 112.4 75.9 10 10 19.3 20.5 27.9 31.4l-50 39.1a8 8 0 0 0 3 14.1l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3l-47.8 37.4C770.7 146.3 648.6 82 511.5 82 277 82 86.3 270.1 82 503.8a8 8 0 0 0 8 8.2h60c4.3 0 7.8-3.5 7.9-7.8zM934 512h-60c-4.3 0-7.9 3.5-8 7.8a352.7 352.7 0 0 1-103.5 242.4 352.57 352.57 0 0 1-112.4 75.9c-43.6 18.4-89.9 27.8-137.6 27.8s-94.1-9.3-137.6-27.8a352.57 352.57 0 0 1-112.4-75.9c-10-10-19.3-20.5-27.9-31.4l49.9-39.1a8 8 0 0 0-3-14.1l-156.8-38.3c-5-1.2-9.9 2.6-9.9 7.7l-.8 161.7c0 6.7 7.7 10.5 12.9 6.3l47.8-37.4C253.3 877.7 375.4 942 512.5 942 747 942 937.7 753.9 942 520.2a8 8 0 0 0-8-8.2z")), t.TwitterOutline = u("twitter", o, i(r, "M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z")), t.UnderlineOutline = u("underline", o, i(r, "M824 804H200c-4.4 0-8 3.4-8 7.6v60.8c0 4.2 3.6 7.6 8 7.6h624c4.4 0 8-3.4 8-7.6v-60.8c0-4.2-3.6-7.6-8-7.6zm-312-76c69.4 0 134.6-27.1 183.8-76.2C745 602.7 772 537.4 772 468V156c0-6.6-5.4-12-12-12h-60c-6.6 0-12 5.4-12 12v312c0 97-79 176-176 176s-176-79-176-176V156c0-6.6-5.4-12-12-12h-60c-6.6 0-12 5.4-12 12v312c0 69.4 27.1 134.6 76.2 183.8C377.3 701 442.6 728 512 728z")), t.UndoOutline = u("undo", o, i(r, "M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 0 0-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 0 1-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 0 1-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 0 0-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z")), t.UnorderedListOutline = u("unordered-list", o, i(r, "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z")), t.UpOutline = u("up", o, i(r, "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z")), t.UploadOutline = u("upload", o, i(r, "M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z")), t.UserAddOutline = u("user-add", o, i(r, "M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 888.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.UsergroupAddOutline = u("usergroup-add", o, i(r, "M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z")), t.UserOutline = u("user", o, i(r, "M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z")), t.UserDeleteOutline = u("user-delete", o, i(r, "M678.3 655.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 518 759.6 444.7 759.6 362c0-137-110.8-248-247.5-248S264.7 225 264.7 362c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 901.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 641.2 432.2 610 512.2 610c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 534c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 362c0-45.9 17.9-89.1 50.3-121.6S466.3 190 512.2 190s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 362c0 45.9-17.9 89.1-50.3 121.6C601.1 516.1 558 534 512.2 534zM880 772H640c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z")), t.UsergroupDeleteOutline = u("usergroup-delete", o, i(r, "M888 784H664c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h224c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7zM824 484c0-109.4-87.9-198.3-196.9-200C516.3 282.3 424 373.2 424 484c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C357 754.6 326 826.8 324 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 707.7 563 684 624 684c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 598.7 658.2 612 624 612s-66.3-13.3-90.5-37.5a127.26 127.26 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z")), t.VerticalAlignBottomOutline = u("vertical-align-bottom", o, i(r, "M859.9 780H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM505.7 669a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V176c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z")), t.VerticalAlignMiddleOutline = u("vertical-align-middle", o, i(r, "M859.9 474H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zm-353.6-74.7c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H550V104c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v156h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.6zm11.4 225.4a7.14 7.14 0 0 0-11.3 0L405.6 752.3a7.23 7.23 0 0 0 5.7 11.7H474v156c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V764h62.8c6 0 9.4-7 5.7-11.7L517.7 624.7z")), t.VerticalAlignTopOutline = u("vertical-align-top", o, i(r, "M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z")), t.VerticalRightOutline = u("vertical-right", o, i(r, "M326 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8zm444 72.4V164c0-6.8-7.9-10.5-13.1-6.1L335 512l421.9 354.1c5.2 4.4 13.1.7 13.1-6.1v-72.4c0-9.4-4.2-18.4-11.4-24.5L459.4 512l299.2-251.1c7.2-6.1 11.4-15.1 11.4-24.5z")), t.VerticalLeftOutline = u("vertical-left", o, i(r, "M762 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8zm-508 0v72.4c0 9.5 4.2 18.4 11.4 24.5L564.6 512 265.4 763.1c-7.2 6.1-11.4 15-11.4 24.5V860c0 6.8 7.9 10.5 13.1 6.1L689 512 267.1 157.9A7.95 7.95 0 0 0 254 164z")), t.WifiOutline = u("wifi", o, i(r, "M723 620.5C666.8 571.6 593.4 542 513 542s-153.8 29.6-210.1 78.6a8.1 8.1 0 0 0-.8 11.2l36 42.9c2.9 3.4 8 3.8 11.4.9C393.1 637.2 450.3 614 513 614s119.9 23.2 163.5 61.5c3.4 2.9 8.5 2.5 11.4-.9l36-42.9c2.8-3.3 2.4-8.3-.9-11.2zm117.4-140.1C751.7 406.5 637.6 362 513 362s-238.7 44.5-327.5 118.4a8.05 8.05 0 0 0-1 11.3l36 42.9c2.8 3.4 7.9 3.8 11.2 1C308 472.2 406.1 434 513 434s205 38.2 281.2 101.6c3.4 2.8 8.4 2.4 11.2-1l36-42.9c2.8-3.4 2.4-8.5-1-11.3zm116.7-139C835.7 241.8 680.3 182 511 182c-168.2 0-322.6 59-443.7 157.4a8 8 0 0 0-1.1 11.4l36 42.9c2.8 3.3 7.8 3.8 11.1 1.1C222 306.7 360.3 254 511 254c151.8 0 291 53.5 400 142.7 3.4 2.8 8.4 2.3 11.2-1.1l36-42.9c2.9-3.4 2.4-8.5-1.1-11.3zM448 778a64 64 0 1 0 128 0 64 64 0 1 0-128 0z")), t.ZhihuOutline = u("zhihu", o, i(r, "M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z")), t.WeiboOutline = u("weibo", o, i(r, "M457.3 543c-68.1-17.7-145 16.2-174.6 76.2-30.1 61.2-1 129.1 67.8 151.3 71.2 23 155.2-12.2 184.4-78.3 28.7-64.6-7.2-131-77.6-149.2zm-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6-22-10-28.5-35.7-14.6-57.2 13.7-21.4 42.3-31 64.4-21.7 22.4 9.5 29.6 35 16 57.3zm45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1-8.5-3.5-11.2-13.1-6.4-21.5 5-8.4 15.6-12.4 24.1-9.1 8.7 3.2 11.8 12.9 7 21.5zm334.5-197.2c15 4.8 31-3.4 35.9-18.3 11.8-36.6 4.4-78.4-23.2-109a111.39 111.39 0 0 0-106-34.3 28.45 28.45 0 0 0-21.9 33.8 28.39 28.39 0 0 0 33.8 21.8c18.4-3.9 38.3 1.8 51.9 16.7a54.2 54.2 0 0 1 11.3 53.3 28.45 28.45 0 0 0 18.2 36zm99.8-206c-56.7-62.9-140.4-86.9-217.7-70.5a32.98 32.98 0 0 0-25.4 39.3 33.12 33.12 0 0 0 39.3 25.5c55-11.7 114.4 5.4 154.8 50.1 40.3 44.7 51.2 105.7 34 159.1-5.6 17.4 3.9 36 21.3 41.7 17.4 5.6 36-3.9 41.6-21.2v-.1c24.1-75.4 8.9-161.1-47.9-223.9zM729 499c-12.2-3.6-20.5-6.1-14.1-22.1 13.8-34.7 15.2-64.7.3-86-28-40.1-104.8-37.9-192.8-1.1 0 0-27.6 12.1-20.6-9.8 13.5-43.5 11.5-79.9-9.6-101-47.7-47.8-174.6 1.8-283.5 110.6C127.3 471.1 80 557.5 80 632.2 80 775.1 263.2 862 442.5 862c235 0 391.3-136.5 391.3-245 0-65.5-55.2-102.6-104.8-118zM443 810.8c-143 14.1-266.5-50.5-275.8-144.5-9.3-93.9 99.2-181.5 242.2-195.6 143-14.2 266.5 50.5 275.8 144.4C694.4 709 586 796.6 443 810.8z")), t.WomanOutline = u("woman", o, i(r, "M712.8 548.8c53.6-53.6 83.2-125 83.2-200.8 0-75.9-29.5-147.2-83.2-200.8C659.2 93.6 587.8 64 512 64s-147.2 29.5-200.8 83.2C257.6 200.9 228 272.1 228 348c0 63.8 20.9 124.4 59.4 173.9 7.3 9.4 15.2 18.3 23.7 26.9 8.5 8.5 17.5 16.4 26.8 23.7 39.6 30.8 86.3 50.4 136.1 57V736H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h114v140c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V812h114c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H550V629.5c61.5-8.2 118.2-36.1 162.8-80.7zM512 556c-55.6 0-107.7-21.6-147.1-60.9C325.6 455.8 304 403.6 304 348s21.6-107.7 60.9-147.1C404.2 161.5 456.4 140 512 140s107.7 21.6 147.1 60.9C698.4 240.2 720 292.4 720 348s-21.6 107.7-60.9 147.1C619.7 534.4 567.6 556 512 556z")), t.ZoomInOutline = u("zoom-in", o, i(r, "M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z")), t.AccountBookTwoTone = u("account-book", l, (function(e, t) {
			return i(r, [t, "M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v584h656V256H712v48zm-65.6 121.8l-89.3 164.1h49.1c4.4 0 8 3.6 8 8v21.3c0 4.4-3.6 8-8 8h-65.4v33.7h65.4c4.4 0 8 3.6 8 8v21.3c0 4.4-3.6 8-8 8h-65.4V752c0 4.4-3.6 8-8 8h-41.3c-4.4 0-8-3.6-8-8v-53.8h-65.1c-4.4 0-8-3.6-8-8v-21.3c0-4.4 3.6-8 8-8h65.1v-33.7h-65.1c-4.4 0-8-3.6-8-8v-21.3c0-4.4 3.6-8 8-8H467l-89.3-164c-2.1-3.9-.7-8.8 3.2-10.9 1.1-.7 2.5-1 3.8-1h46a8 8 0 0 1 7.1 4.4l73.4 145.4h2.8l73.4-145.4c1.3-2.7 4.1-4.4 7.1-4.4h45c4.5 0 8 3.6 7.9 8 0 1.3-.4 2.6-1 3.8z"], [e, "M639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 0 0-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z"], [e, "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584z"])
		})), t.ZoomOutOutline = u("zoom-out", o, i(r, "M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z")), t.AlertTwoTone = u("alert", l, (function(e, t) {
			return i(r, [t, "M340 585c0-5.5 4.5-10 10-10h44c5.5 0 10 4.5 10 10v171h355V563c0-136.4-110.6-247-247-247S265 426.6 265 563v193h75V585z"], [e, "M216.9 310.5l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3l-67.9-67.9a8.03 8.03 0 0 0-11.3 0l-39.6 39.6a8.03 8.03 0 0 0 0 11.3l67.9 67.9c3.1 3.1 8.1 3.1 11.3 0zm669.6-79.2l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-67.9 67.9a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l67.9-67.9c3.1-3.2 3.1-8.2 0-11.3zM484 180h56c4.4 0 8-3.6 8-8V76c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v96c0 4.4 3.6 8 8 8zm348 712H192c-17.7 0-32 14.3-32 32v24c0 4.4 3.6 8 8 8h688c4.4 0 8-3.6 8-8v-24c0-17.7-14.3-32-32-32zm-639-96c0 17.7 14.3 32 32 32h574c17.7 0 32-14.3 32-32V563c0-176.2-142.8-319-319-319S193 386.8 193 563v233zm72-233c0-136.4 110.6-247 247-247s247 110.6 247 247v193H404V585c0-5.5-4.5-10-10-10h-44c-5.5 0-10 4.5-10 10v171h-75V563z"])
		})), t.ApiTwoTone = u("api", l, (function(e, t) {
			return i(r, [t, "M148.2 674.6zm106.7-92.3c-25 25-38.7 58.1-38.7 93.4s13.8 68.5 38.7 93.4c25 25 58.1 38.7 93.4 38.7 35.3 0 68.5-13.8 93.4-38.7l59.4-59.4-186.8-186.8-59.4 59.4zm420.8-366.1c-35.3 0-68.5 13.8-93.4 38.7l-59.4 59.4 186.8 186.8 59.4-59.4c24.9-25 38.7-58.1 38.7-93.4s-13.8-68.5-38.7-93.4c-25-25-58.1-38.7-93.4-38.7z"], [e, "M578.9 546.7a8.03 8.03 0 0 0-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 0 0-11.3 0L363 475.3l-43-43a7.85 7.85 0 0 0-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2a199.45 199.45 0 0 0-58.6 140.4c-.2 39.5 11.2 79.1 34.3 113.1l-76.1 76.1a8.03 8.03 0 0 0 0 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2zM441.7 769.1a131.32 131.32 0 0 1-93.4 38.7c-35.3 0-68.4-13.7-93.4-38.7-24.9-24.9-38.7-58.1-38.7-93.4s13.7-68.4 38.7-93.4l59.4-59.4 186.8 186.8-59.4 59.4zm476-620.3l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 0 0-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 0 0 0 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM769.1 441.7l-59.4 59.4-186.8-186.8 59.4-59.4c24.9-24.9 58.1-38.7 93.4-38.7s68.4 13.7 93.4 38.7c24.9 24.9 38.7 58.1 38.7 93.4s-13.8 68.4-38.7 93.4z"])
		})), t.AppstoreTwoTone = u("appstore", l, (function(e, t) {
			return i(r, [e, "M864 144H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm52-668H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452 132H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"], [t, "M212 212h200v200H212zm400 0h200v200H612zM212 612h200v200H212zm400 0h200v200H612z"])
		})), t.BankTwoTone = u("bank", l, (function(e, t) {
			return i(r, [t, "M240.9 393.9h542.2L512 196.7z"], [e, "M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 0 0-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462h62zM381 836H264V462h117v374zm189 0H453V462h117v374zm190 0H642V462h118v374zM240.9 393.9L512 196.7l271.1 197.2H240.9z"])
		})), t.AudioTwoTone = u("audio", l, (function(e, t) {
			return i(r, [t, "M512 552c54.3 0 98-43.2 98-96V232c0-52.8-43.7-96-98-96s-98 43.2-98 96v224c0 52.8 43.7 96 98 96z"], [e, "M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"], [e, "M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-98-392c0-52.8 43.7-96 98-96s98 43.2 98 96v224c0 52.8-43.7 96-98 96s-98-43.2-98-96V232z"])
		})), t.BellTwoTone = u("bell", l, (function(e, t) {
			return i(r, [t, "M512 220c-55.6 0-107.8 21.6-147.1 60.9S304 372.4 304 428v340h416V428c0-55.6-21.6-107.8-60.9-147.1S567.6 220 512 220zm280 208c0-141.1-104.3-257.8-240-277.2v.1c135.7 19.4 240 136 240 277.1zM472 150.9v-.1C336.3 170.2 232 286.9 232 428c0-141.1 104.3-257.7 240-277.1z"], [e, "M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zm208-120H304V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340z"])
		})), t.BookTwoTone = u("book", l, (function(e, t) {
			return i(r, [e, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zM232 888V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0 0 22.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752H232z"], [t, "M668 345.9V136h-96v211.4l49.5-35.4z"], [t, "M727.9 136v296.5c0 8.8-7.2 16-16 16-3.4 0-6.7-1.1-9.4-3.1L621.1 386l-83.8 59.9a15.9 15.9 0 0 1-22.3-3.7c-2-2.7-3-6-3-9.3V136H232v752h559.9V136h-64z"])
		})), t.BoxPlotTwoTone = u("box-plot", l, (function(e, t) {
			return i(r, [t, "M296 368h88v288h-88zm152 0h280v288H448z"], [e, "M952 224h-52c-4.4 0-8 3.6-8 8v248h-92V304c0-4.4-3.6-8-8-8H232c-4.4 0-8 3.6-8 8v176h-92V232c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V548h92v172c0 4.4 3.6 8 8 8h560c4.4 0 8-3.6 8-8V548h92v244c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zM384 656h-88V368h88v288zm344 0H448V368h280v288z"])
		})), t.BugTwoTone = u("bug", l, (function(e, t) {
			return i(r, [e, "M308 412v268c0 36.78 9.68 71.96 27.8 102.9a205.39 205.39 0 0 0 73.3 73.3A202.68 202.68 0 0 0 512 884c36.78 0 71.96-9.68 102.9-27.8a205.39 205.39 0 0 0 73.3-73.3A202.68 202.68 0 0 0 716 680V412H308zm484 172v96c0 6.5-.22 12.95-.66 19.35C859.94 728.64 908 796.7 908 876a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8c0-44.24-23.94-82.89-59.57-103.7a278.63 278.63 0 0 1-22.66 49.02 281.39 281.39 0 0 1-100.45 100.45C611.84 946.07 563.55 960 512 960s-99.84-13.93-141.32-38.23a281.39 281.39 0 0 1-100.45-100.45 278.63 278.63 0 0 1-22.66-49.02A119.95 119.95 0 0 0 188 876a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8c0-79.3 48.07-147.36 116.66-176.65A284.12 284.12 0 0 1 232 680v-96H84a8 8 0 0 1-8-8v-56a8 8 0 0 1 8-8h148V412c-76.77 0-139-62.23-139-139a8 8 0 0 1 8-8h60a8 8 0 0 1 8 8 63 63 0 0 0 63 63h560a63 63 0 0 0 63-63 8 8 0 0 1 8-8h60a8 8 0 0 1 8 8c0 76.77-62.23 139-139 139v100h148a8 8 0 0 1 8 8v56a8 8 0 0 1-8 8H792zM368 272a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8c0-40.04 8.78-76.75 25.9-108.07a184.57 184.57 0 0 1 74.03-74.03C427.25 72.78 463.96 64 504 64h16c40.04 0 76.75 8.78 108.07 25.9a184.57 184.57 0 0 1 74.03 74.03C719.22 195.25 728 231.96 728 272a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8c0-28.33-5.94-53.15-17.08-73.53a112.56 112.56 0 0 0-45.39-45.4C573.15 141.95 548.33 136 520 136h-16c-28.33 0-53.15 5.94-73.53 17.08a112.56 112.56 0 0 0-45.4 45.39C373.95 218.85 368 243.67 368 272z"], [t, "M308 412v268c0 36.78 9.68 71.96 27.8 102.9a205.39 205.39 0 0 0 73.3 73.3A202.68 202.68 0 0 0 512 884c36.78 0 71.96-9.68 102.9-27.8a205.39 205.39 0 0 0 73.3-73.3A202.68 202.68 0 0 0 716 680V412H308z"])
		})), t.BulbTwoTone = u("bulb", l, (function(e, t) {
			return i(r, [t, "M512 136c-141.4 0-256 114.6-256 256 0 92.5 49.4 176.3 128.1 221.8l35.9 20.8V752h184V634.6l35.9-20.8C718.6 568.3 768 484.5 768 392c0-141.4-114.6-256-256-256z"], [e, "M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z"])
		})), t.CalculatorTwoTone = u("calculator", l, (function(e, t) {
			return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm256.2-75h-50.8c-2.2 0-4.5-1.1-5.9-2.9L348 718.6l-35.5 43.5a7.38 7.38 0 0 1-5.9 2.9h-50.8c-6.6 0-10.2-7.9-5.8-13.1l62.7-76.8-61.2-74.9c-4.3-5.2-.7-13.1 5.9-13.1h50.9c2.2 0 4.5 1.1 5.9 2.9l34 41.6 34-41.6c1.5-1.9 3.6-2.9 5.9-2.9h50.8c6.6 0 10.2 7.9 5.9 13.1L383.5 675l62.7 76.8c4.2 5.3.6 13.2-6 13.2zM576 335c0-2.2 1.4-4 3.2-4h193.5c1.9 0 3.3 1.8 3.3 4v48c0 2.2-1.4 4-3.2 4H579.2c-1.8 0-3.2-1.8-3.2-4v-48zm0 265c0-2.2 1.4-4 3.2-4h193.5c1.9 0 3.3 1.8 3.3 4v48c0 2.2-1.4 4-3.2 4H579.2c-1.8 0-3.2-1.8-3.2-4v-48zm0 104c0-2.2 1.4-4 3.2-4h193.5c1.9 0 3.3 1.8 3.3 4v48c0 2.2-1.4 4-3.2 4H579.2c-1.8 0-3.2-1.8-3.2-4v-48zM248 335c0-2.2 1.4-4 3.2-4H320v-68.8c0-1.8 1.8-3.2 4-3.2h48c2.2 0 4 1.4 4 3.2V331h68.7c1.9 0 3.3 1.8 3.3 4v48c0 2.2-1.4 4-3.2 4H376v68.7c0 1.9-1.8 3.3-4 3.3h-48c-2.2 0-4-1.4-4-3.2V387h-68.8c-1.8 0-3.2-1.8-3.2-4v-48z"], [e, "M383.5 675l61.3-74.8c4.3-5.2.7-13.1-5.9-13.1h-50.8c-2.3 0-4.4 1-5.9 2.9l-34 41.6-34-41.6a7.69 7.69 0 0 0-5.9-2.9h-50.9c-6.6 0-10.2 7.9-5.9 13.1l61.2 74.9-62.7 76.8c-4.4 5.2-.8 13.1 5.8 13.1h50.8c2.3 0 4.4-1 5.9-2.9l35.5-43.5 35.5 43.5c1.4 1.8 3.7 2.9 5.9 2.9h50.8c6.6 0 10.2-7.9 6-13.2L383.5 675zM251.2 387H320v68.8c0 1.8 1.8 3.2 4 3.2h48c2.2 0 4-1.4 4-3.3V387h68.8c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H376v-68.8c0-1.8-1.8-3.2-4-3.2h-48c-2.2 0-4 1.4-4 3.2V331h-68.8c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zm328 369h193.6c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H579.2c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zm0-104h193.6c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H579.2c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zm0-265h193.6c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H579.2c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4z"])
		})), t.BuildTwoTone = u("build", l, (function(e, t) {
			return i(r, [t, "M144 546h200v200H144zm268-268h200v200H412z"], [e, "M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32zM344 746H144V546h200v200zm268 0H412V546h200v200zm0-268H412V278h200v200zm268 0H680V278h200v200z"])
		})), t.CalendarTwoTone = u("calendar", l, (function(e, t) {
			return i(r, [t, "M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v136h656V256H712v48z"], [e, "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zm0-448H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136z"])
		})), t.CameraTwoTone = u("camera", l, (function(e, t) {
			return i(r, [t, "M864 320H677.2l-17.1-47.8-22.9-64.2H386.7l-22.9 64.2-17.1 47.8H160c-4.4 0-8 3.6-8 8v456c0 4.4 3.6 8 8 8h704c4.4 0 8-3.6 8-8V328c0-4.4-3.6-8-8-8zM512 704c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160z"], [e, "M512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"], [e, "M864 248H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456z"])
		})), t.CarTwoTone = u("car", l, (function(e, t) {
			return i(r, [t, "M199.6 474L184 517v237h656V517l-15.6-43H199.6zM264 621c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm388 75c0 4.4-3.6 8-8 8H380c-4.4 0-8-3.6-8-8v-84c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v36h168v-36c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v84zm108-75c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"], [e, "M720 581a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"], [e, "M959 413.4L935.3 372a8 8 0 0 0-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 0 0-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 0 0-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 0 0 3-10.8zM292.7 218.1l.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220l72.7-199.9zM840 754H184V517l15.6-43h624.8l15.6 43v237z"], [e, "M224 581a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm420 23h-40c-4.4 0-8 3.6-8 8v36H428v-36c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v84c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-84c0-4.4-3.6-8-8-8z"])
		})), t.CarryOutTwoTone = u("carry-out", l, (function(e, t) {
			return i(r, [e, "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584z"], [t, "M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v584h656V256H712v48zm-17.5 128.8L481.9 725.5a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.2 0 10 2.5 13 6.6l64.7 89 150.9-207.8c3-4.1 7.9-6.6 13-6.6H688c6.5 0 10.3 7.4 6.5 12.8z"], [e, "M688 420h-55.2c-5.1 0-10 2.5-13 6.6L468.9 634.4l-64.7-89c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.4 0-12.8-6.5-12.8z"])
		})), t.CheckCircleTwoTone = u("check-circle", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z"], [e, "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"])
		})), t.CheckSquareTwoTone = u("check-square", l, (function(e, t) {
			return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm130-367.8h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H688c6.5 0 10.3 7.4 6.5 12.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L307.5 484.9c-3.8-5.3 0-12.7 6.5-12.7z"], [e, "M432.2 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7h-46.9c-10.3 0-19.9 5-25.9 13.3L458 584.3l-71.2-98.8c-6-8.4-15.7-13.3-25.9-13.3H314c-6.5 0-10.3 7.4-6.5 12.7l124.7 172.8z"])
		})), t.ClockCircleTwoTone = u("clock-circle", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm176.5 509.7l-28.6 39a7.99 7.99 0 0 1-11.2 1.7L483.3 569.8a7.92 7.92 0 0 1-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z"], [e, "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.6-3.6 1.8-8.6-1.8-11.1z"])
		})), t.CloseCircleTwoTone = u("close-circle", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm171.8 527.1c1.2 1.5 1.9 3.3 1.9 5.2 0 4.5-3.6 8-8 8l-66-.3-99.3-118.4-99.3 118.5-66.1.3c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2L471 512.3l-130.1-155a8.32 8.32 0 0 1-1.9-5.2c0-4.5 3.6-8 8-8l66.1.3 99.3 118.4 99.4-118.5 66-.3c4.4 0 8 3.6 8 8 0 1.9-.6 3.8-1.8 5.2l-130.1 155 129.9 154.9z"], [e, "M685.8 352c0-4.4-3.6-8-8-8l-66 .3-99.4 118.5-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155-130.1 154.9a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3 99.3-118.5L611.7 680l66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.9 512.2l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"])
		})), t.CloudTwoTone = u("cloud", l, (function(e, t) {
			return i(r, [t, "M791.9 492l-37.8-10-13.8-36.5c-8.6-22.7-20.6-44.1-35.7-63.4a245.73 245.73 0 0 0-52.4-49.9c-41.1-28.9-89.5-44.2-140-44.2s-98.9 15.3-140 44.2a245.6 245.6 0 0 0-52.4 49.9 240.47 240.47 0 0 0-35.7 63.4l-13.9 36.6-37.9 9.9a125.7 125.7 0 0 0-66.1 43.7A123.1 123.1 0 0 0 140 612c0 33.1 12.9 64.3 36.3 87.7 23.4 23.4 54.5 36.3 87.6 36.3h496.2c33.1 0 64.2-12.9 87.6-36.3A123.3 123.3 0 0 0 884 612c0-56.2-37.8-105.5-92.1-120z"], [e, "M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3zm36.3 281a123.07 123.07 0 0 1-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3A123.3 123.3 0 0 1 140 612c0-28 9.1-54.3 26.2-76.3a125.7 125.7 0 0 1 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z"])
		})), t.CloseSquareTwoTone = u("close-square", l, (function(e, t) {
			return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm163.9-473.9A7.95 7.95 0 0 1 354 353h58.9c4.7 0 9.2 2.1 12.3 5.7L512 462.2l86.8-103.5c3-3.6 7.5-5.7 12.3-5.7H670c6.8 0 10.5 7.9 6.1 13.1L553.8 512l122.3 145.9c4.4 5.2.7 13.1-6.1 13.1h-58.9c-4.7 0-9.2-2.1-12.3-5.7L512 561.8l-86.8 103.5c-3 3.6-7.5 5.7-12.3 5.7H354c-6.8 0-10.5-7.9-6.1-13.1L470.2 512 347.9 366.1z"], [e, "M354 671h58.9c4.8 0 9.3-2.1 12.3-5.7L512 561.8l86.8 103.5c3.1 3.6 7.6 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.3-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.8 0-9.3 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3.1-3.6-7.6-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 0 0 354 671z"])
		})), t.CodeTwoTone = u("code", l, (function(e, t) {
			return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm339.5-223h185c4.1 0 7.5 3.6 7.5 8v48c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8zM308 610.3c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7z"], [e, "M321.1 679.1l192-161c3.9-3.2 3.9-9.1 0-12.3l-192-160.9A7.95 7.95 0 0 0 308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 0 0-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48z"])
		})), t.CompassTwoTone = u("compass", l, (function(e, t) {
			return i(r, [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zM327.6 701.7c-2 .9-4.4 0-5.3-2.1-.4-1-.4-2.2 0-3.2L421 470.9 553.1 603l-225.5 98.7zm375.1-375.1L604 552.1 471.9 420l225.5-98.7c2-.9 4.4 0 5.3 2.1.4 1 .4 2.1 0 3.2z"], [e, "M322.3 696.4c-.4 1-.4 2.2 0 3.2.9 2.1 3.3 3 5.3 2.1L553.1 603 421 470.9l-98.7 225.5zm375.1-375.1L471.9 420 604 552.1l98.7-225.5c.4-1.1.4-2.2 0-3.2-.9-2.1-3.3-3-5.3-2.1z"], [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"])
		})), t.ContactsTwoTone = u("contacts", l, (function(e, t) {
			return i(r, [t, "M460.3 526a51.7 52 0 1 0 103.4 0 51.7 52 0 1 0-103.4 0z"], [t, "M768 352c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-56H548v56c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-56H328v56c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-56H136v496h752V296H768v56zM661 736h-43.8c-4.2 0-7.6-3.3-7.9-7.5-3.8-50.5-46-90.5-97.2-90.5s-93.4 39.9-97.2 90.5c-.3 4.2-3.7 7.5-7.9 7.5h-43.9a8 8 0 0 1-8-8.4c2.8-53.3 31.9-99.6 74.6-126.1-18.1-20-29.1-46.4-29.1-75.5 0-61.9 49.9-112 111.4-112s111.4 50.1 111.4 112c0 29.1-11 55.6-29.1 75.5 42.7 26.4 71.9 72.8 74.7 126.1a8 8 0 0 1-8 8.4z"], [e, "M594.3 601.5a111.8 111.8 0 0 0 29.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 0 0-74.6 126.1 8 8 0 0 0 8 8.4H407c4.2 0 7.6-3.3 7.9-7.5 3.8-50.6 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H661a8 8 0 0 0 8-8.4c-2.8-53.3-32-99.7-74.7-126.1zM512 578c-28.5 0-51.7-23.3-51.7-52s23.2-52 51.7-52 51.7 23.3 51.7 52-23.2 52-51.7 52z"], [e, "M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496z"])
		})), t.ContainerTwoTone = u("container", l, (function(e, t) {
			return i(r, [t, "M635 771.7c-34.5 28.6-78.2 44.3-123 44.3s-88.5-15.8-123-44.3a194.02 194.02 0 0 1-59.1-84.7H232v201h560V687h-97.9c-11.6 32.8-32 62.3-59.1 84.7z"], [e, "M320 501h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"], [e, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v201zm0-264H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v488z"], [e, "M320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"])
		})), t.ControlTwoTone = u("control", l, (function(e, t) {
			return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M616 440a36 36 0 1 0 72 0 36 36 0 1 0-72 0zM340.4 601.5l1.5 2.4c0 .1.1.1.1.2l.9 1.2c.1.1.2.2.2.3 1 1.3 2 2.5 3.2 3.6l.2.2c.4.4.8.8 1.2 1.1.8.8 1.7 1.5 2.6 2.1h.1l1.2.9c.1.1.3.2.4.3 1.2.8 2.5 1.6 3.9 2.2.2.1.5.2.7.4.4.2.7.3 1.1.5.3.1.7.3 1 .4.5.2 1 .4 1.5.5.4.1.9.3 1.3.4l.9.3 1.4.3c.2.1.5.1.7.2.7.1 1.4.3 2.1.4.2 0 .4 0 .6.1.6.1 1.1.1 1.7.2.2 0 .4 0 .7.1.8 0 1.5.1 2.3.1s1.5 0 2.3-.1c.2 0 .4 0 .7-.1.6 0 1.2-.1 1.7-.2.2 0 .4 0 .6-.1.7-.1 1.4-.2 2.1-.4.2-.1.5-.1.7-.2l1.4-.3.9-.3c.4-.1.9-.3 1.3-.4.5-.2 1-.4 1.5-.5.3-.1.7-.3 1-.4.4-.2.7-.3 1.1-.5.2-.1.5-.2.7-.4 1.3-.7 2.6-1.4 3.9-2.2.1-.1.3-.2.4-.3l1.2-.9h.1c.9-.7 1.8-1.4 2.6-2.1.4-.4.8-.7 1.2-1.1l.2-.2c1.1-1.1 2.2-2.4 3.2-3.6.1-.1.2-.2.2-.3l.9-1.2c0-.1.1-.1.1-.2l1.5-2.4c.1-.2.2-.3.3-.5 2.7-5.1 4.3-10.9 4.3-17s-1.6-12-4.3-17c-.1-.2-.2-.4-.3-.5l-1.5-2.4c0-.1-.1-.1-.1-.2l-.9-1.2c-.1-.1-.2-.2-.2-.3-1-1.3-2-2.5-3.2-3.6l-.2-.2c-.4-.4-.8-.8-1.2-1.1-.8-.8-1.7-1.5-2.6-2.1h-.1l-1.2-.9c-.1-.1-.3-.2-.4-.3-1.2-.8-2.5-1.6-3.9-2.2-.2-.1-.5-.2-.7-.4-.4-.2-.7-.3-1.1-.5-.3-.1-.7-.3-1-.4-.5-.2-1-.4-1.5-.5-.4-.1-.9-.3-1.3-.4l-.9-.3-1.4-.3c-.2-.1-.5-.1-.7-.2-.7-.1-1.4-.3-2.1-.4-.2 0-.4 0-.6-.1-.6-.1-1.1-.1-1.7-.2-.2 0-.4 0-.7-.1-.8 0-1.5-.1-2.3-.1s-1.5 0-2.3.1c-.2 0-.4 0-.7.1-.6 0-1.2.1-1.7.2-.2 0-.4 0-.6.1-.7.1-1.4.2-2.1.4-.2.1-.5.1-.7.2l-1.4.3-.9.3c-.4.1-.9.3-1.3.4-.5.2-1 .4-1.5.5-.3.1-.7.3-1 .4-.4.2-.7.3-1.1.5-.2.1-.5.2-.7.4-1.3.7-2.6 1.4-3.9 2.2-.1.1-.3.2-.4.3l-1.2.9h-.1c-.9.7-1.8 1.4-2.6 2.1-.4.4-.8.7-1.2 1.1l-.2.2a54.8 54.8 0 0 0-3.2 3.6c-.1.1-.2.2-.2.3l-.9 1.2c0 .1-.1.1-.1.2l-1.5 2.4c-.1.2-.2.3-.3.5-2.7 5.1-4.3 10.9-4.3 17s1.6 12 4.3 17c.1.2.2.3.3.5z"], [t, "M184 840h656V184H184v656zm436.4-499.1c-.2 0-.3.1-.4.1v-77c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v77c-.2 0-.3-.1-.4-.1 42 13.4 72.4 52.7 72.4 99.1 0 46.4-30.4 85.7-72.4 99.1.2 0 .3-.1.4-.1v221c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V539c.2 0 .3.1.4.1-42-13.4-72.4-52.7-72.4-99.1 0-46.4 30.4-85.7 72.4-99.1zM340 485V264c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v221c41.7 13.6 72 52.8 72 99s-30.3 85.5-72 99v77c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-77c-41.7-13.6-72-52.8-72-99s30.3-85.5 72-99z"], [e, "M340 683v77c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-77c41.7-13.5 72-52.8 72-99s-30.3-85.4-72-99V264c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v221c-41.7 13.5-72 52.8-72 99s30.3 85.4 72 99zm.1-116c.1-.2.2-.3.3-.5l1.5-2.4c0-.1.1-.1.1-.2l.9-1.2c0-.1.1-.2.2-.3 1-1.2 2.1-2.5 3.2-3.6l.2-.2c.4-.4.8-.7 1.2-1.1.8-.7 1.7-1.4 2.6-2.1h.1l1.2-.9c.1-.1.3-.2.4-.3 1.3-.8 2.6-1.5 3.9-2.2.2-.2.5-.3.7-.4.4-.2.7-.3 1.1-.5.3-.1.7-.3 1-.4.5-.1 1-.3 1.5-.5.4-.1.9-.3 1.3-.4l.9-.3 1.4-.3c.2-.1.5-.1.7-.2.7-.2 1.4-.3 2.1-.4.2-.1.4-.1.6-.1.5-.1 1.1-.2 1.7-.2.3-.1.5-.1.7-.1.8-.1 1.5-.1 2.3-.1s1.5.1 2.3.1c.3.1.5.1.7.1.6.1 1.1.1 1.7.2.2.1.4.1.6.1.7.1 1.4.3 2.1.4.2.1.5.1.7.2l1.4.3.9.3c.4.1.9.3 1.3.4.5.1 1 .3 1.5.5.3.1.7.3 1 .4.4.2.7.3 1.1.5.2.2.5.3.7.4 1.4.6 2.7 1.4 3.9 2.2.1.1.3.2.4.3l1.2.9h.1c.9.6 1.8 1.3 2.6 2.1.4.3.8.7 1.2 1.1l.2.2c1.2 1.1 2.2 2.3 3.2 3.6 0 .1.1.2.2.3l.9 1.2c0 .1.1.1.1.2l1.5 2.4A36.03 36.03 0 0 1 408 584c0 6.1-1.6 11.9-4.3 17-.1.2-.2.3-.3.5l-1.5 2.4c0 .1-.1.1-.1.2l-.9 1.2c0 .1-.1.2-.2.3-1 1.2-2.1 2.5-3.2 3.6l-.2.2c-.4.4-.8.7-1.2 1.1-.8.7-1.7 1.4-2.6 2.1h-.1l-1.2.9c-.1.1-.3.2-.4.3-1.3.8-2.6 1.5-3.9 2.2-.2.2-.5.3-.7.4-.4.2-.7.3-1.1.5-.3.1-.7.3-1 .4-.5.1-1 .3-1.5.5-.4.1-.9.3-1.3.4l-.9.3-1.4.3c-.2.1-.5.1-.7.2-.7.2-1.4.3-2.1.4-.2.1-.4.1-.6.1-.5.1-1.1.2-1.7.2-.3.1-.5.1-.7.1-.8.1-1.5.1-2.3.1s-1.5-.1-2.3-.1c-.3-.1-.5-.1-.7-.1-.6-.1-1.1-.1-1.7-.2-.2-.1-.4-.1-.6-.1-.7-.1-1.4-.3-2.1-.4-.2-.1-.5-.1-.7-.2l-1.4-.3-.9-.3c-.4-.1-.9-.3-1.3-.4-.5-.1-1-.3-1.5-.5-.3-.1-.7-.3-1-.4-.4-.2-.7-.3-1.1-.5-.2-.2-.5-.3-.7-.4-1.4-.6-2.7-1.4-3.9-2.2-.1-.1-.3-.2-.4-.3l-1.2-.9h-.1c-.9-.6-1.8-1.3-2.6-2.1-.4-.3-.8-.7-1.2-1.1l-.2-.2c-1.2-1.1-2.2-2.3-3.2-3.6 0-.1-.1-.2-.2-.3l-.9-1.2c0-.1-.1-.1-.1-.2l-1.5-2.4c-.1-.2-.2-.3-.3-.5-2.7-5-4.3-10.9-4.3-17s1.6-11.9 4.3-17zm280.3-27.9c-.1 0-.2-.1-.4-.1v221c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V539c-.1 0-.2.1-.4.1 42-13.4 72.4-52.7 72.4-99.1 0-46.4-30.4-85.7-72.4-99.1.1 0 .2.1.4.1v-77c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v77c.1 0 .2-.1.4-.1-42 13.4-72.4 52.7-72.4 99.1 0 46.4 30.4 85.7 72.4 99.1zM652 404c19.9 0 36 16.1 36 36s-16.1 36-36 36-36-16.1-36-36 16.1-36 36-36z"])
		})), t.CopyTwoTone = u("copy", l, (function(e, t) {
			return i(r, [t, "M232 706h142c22.1 0 40 17.9 40 40v142h250V264H232v442z"], [e, "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32z"], [e, "M704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"])
		})), t.CreditCardTwoTone = u("credit-card", l, (function(e, t) {
			return i(r, [t, "M136 792h752V440H136v352zm507-144c0-4.4 3.6-8 8-8h165c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8H651c-4.4 0-8-3.6-8-8v-72zM136 232h752v120H136z"], [e, "M651 728h165c4.4 0 8-3.6 8-8v-72c0-4.4-3.6-8-8-8H651c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8z"], [e, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V440h752v352zm0-440H136V232h752v120z"])
		})), t.CrownTwoTone = u("crown", l, (function(e, t) {
			return i(r, [t, "M911.9 283.9v.5L835.5 865c-1 8-7.9 14-15.9 14H204.5c-8.1 0-14.9-6.1-16-14l-76.4-580.6v-.6 1.6L188.5 866c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.1-.5.1-1 0-1.5z"], [t, "M773.6 810.6l53.9-409.4-139.8 86.1L512 252.9 336.3 487.3l-139.8-86.1 53.8 409.4h523.3zm-374.2-189c0-62.1 50.5-112.6 112.6-112.6s112.6 50.5 112.6 112.6v1c0 62.1-50.5 112.6-112.6 112.6s-112.6-50.5-112.6-112.6v-1z"], [e, "M512 734.2c61.9 0 112.3-50.2 112.6-112.1v-.5c0-62.1-50.5-112.6-112.6-112.6s-112.6 50.5-112.6 112.6v.5c.3 61.9 50.7 112.1 112.6 112.1zm0-160.9c26.6 0 48.2 21.6 48.2 48.3 0 26.6-21.6 48.3-48.2 48.3s-48.2-21.6-48.2-48.3c0-26.6 21.6-48.3 48.2-48.3z"], [e, "M188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6v-.5c.3-6.4-6.7-10.8-12.3-7.4L705 396.4 518.4 147.5a8.06 8.06 0 0 0-12.9 0L319 396.4 124.3 276.5c-5.5-3.4-12.6.9-12.2 7.3v.6L188.5 865zm147.8-377.7L512 252.9l175.7 234.4 139.8-86.1-53.9 409.4H250.3l-53.8-409.4 139.8 86.1z"])
		})), t.CustomerServiceTwoTone = u("customer-service", l, (function(e, t) {
			return i(r, [t, "M696 632h128v192H696zm-496 0h128v192H200z"], [e, "M512 128c-212.1 0-384 171.9-384 384v360c0 13.3 10.7 24 24 24h184c35.3 0 64-28.7 64-64V624c0-35.3-28.7-64-64-64H200v-48c0-172.3 139.7-312 312-312s312 139.7 312 312v48H688c-35.3 0-64 28.7-64 64v208c0 35.3 28.7 64 64 64h184c13.3 0 24-10.7 24-24V512c0-212.1-171.9-384-384-384zM328 632v192H200V632h128zm496 192H696V632h128v192z"])
		})), t.DashboardTwoTone = u("dashboard", l, (function(e, t) {
			return i(r, [t, "M512 188c-99.3 0-192.7 38.7-263 109-70.3 70.2-109 163.6-109 263 0 105.6 44.5 205.5 122.6 276h498.8A371.12 371.12 0 0 0 884 560c0-99.3-38.7-192.7-109-263-70.2-70.3-163.6-109-263-109zm-30 44c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8h-44c-4.4 0-8-3.6-8-8v-80zM270 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44zm90.7-204.4l-31.1 31.1a8.03 8.03 0 0 1-11.3 0l-56.6-56.6a8.03 8.03 0 0 1 0-11.3l31.1-31.1c3.1-3.1 8.2-3.1 11.3 0l56.6 56.6c3.1 3.1 3.1 8.2 0 11.3zm291.1 83.5l-84.5 84.5c5 18.7.2 39.4-14.5 54.1a55.95 55.95 0 0 1-79.2 0 55.95 55.95 0 0 1 0-79.2 55.87 55.87 0 0 1 54.1-14.5l84.5-84.5c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3c3.1 3.1 3.1 8.2 0 11.3zm43-52.4l-31.1-31.1a8.03 8.03 0 0 1 0-11.3l56.6-56.6c3.1-3.1 8.2-3.1 11.3 0l31.1 31.1c3.1 3.1 3.1 8.2 0 11.3l-56.6 56.6a8.03 8.03 0 0 1-11.3 0zM846 538v44c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8z"], [e, "M623.5 421.5a8.03 8.03 0 0 0-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 0 0 0 79.2 55.95 55.95 0 0 0 79.2 0 55.87 55.87 0 0 0 14.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8z"], [e, "M924.8 385.6a446.7 446.7 0 0 0-96-142.4 446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96 446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 0 1 140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276z"], [e, "M762.7 340.8l-31.1-31.1a8.03 8.03 0 0 0-11.3 0l-56.6 56.6a8.03 8.03 0 0 0 0 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zM750 538v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zM304.1 309.7a8.03 8.03 0 0 0-11.3 0l-31.1 31.1a8.03 8.03 0 0 0 0 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z"])
		})), t.DeleteTwoTone = u("delete", l, (function(e, t) {
			return i(r, [t, "M292.7 840h438.6l24.2-512h-487z"], [e, "M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-504-72h304v72H360v-72zm371.3 656H292.7l-24.2-512h487l-24.2 512z"])
		})), t.DiffTwoTone = u("diff", l, (function(e, t) {
			return i(r, [t, "M232 264v624h432V413.8L514.2 264H232zm336 489c0 3.8-3.4 7-7.5 7h-225c-4.1 0-7.5-3.2-7.5-7v-42c0-3.8 3.4-7 7.5-7h225c4.1 0 7.5 3.2 7.5 7v42zm0-262v42c0 3.8-3.4 7-7.5 7H476v84.9c0 3.9-3.1 7.1-7 7.1h-42c-3.8 0-7-3.2-7-7.1V540h-84.5c-4.1 0-7.5-3.2-7.5-7v-42c0-3.9 3.4-7 7.5-7H420v-84.9c0-3.9 3.2-7.1 7-7.1h42c3.9 0 7 3.2 7 7.1V484h84.5c4.1 0 7.5 3.1 7.5 7z"], [e, "M854.2 306.6L611.3 72.9c-6-5.7-13.9-8.9-22.2-8.9H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h277l219 210.6V824c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V329.6c0-8.7-3.5-17-9.8-23z"], [e, "M553.4 201.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v704c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V397.3c0-8.5-3.4-16.6-9.4-22.6L553.4 201.4zM664 888H232V264h282.2L664 413.8V888z"], [e, "M476 399.1c0-3.9-3.1-7.1-7-7.1h-42c-3.8 0-7 3.2-7 7.1V484h-84.5c-4.1 0-7.5 3.1-7.5 7v42c0 3.8 3.4 7 7.5 7H420v84.9c0 3.9 3.2 7.1 7 7.1h42c3.9 0 7-3.2 7-7.1V540h84.5c4.1 0 7.5-3.2 7.5-7v-42c0-3.9-3.4-7-7.5-7H476v-84.9zM560.5 704h-225c-4.1 0-7.5 3.2-7.5 7v42c0 3.8 3.4 7 7.5 7h225c4.1 0 7.5-3.2 7.5-7v-42c0-3.8-3.4-7-7.5-7z"])
		})), t.DatabaseTwoTone = u("database", l, (function(e, t) {
			return i(r, [t, "M232 616h560V408H232v208zm112-144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM232 888h560V680H232v208zm112-144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM232 344h560V136H232v208zm112-144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z"], [e, "M304 512a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 272a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0-544a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"], [e, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V680h560v208zm0-272H232V408h560v208zm0-272H232V136h560v208z"])
		})), t.DislikeTwoTone = u("dislike", l, (function(e, t) {
			return i(r, [t, "M273 100.1v428h.3l-.3-428zM820.4 525l-21.9-19 14-25.5a56.2 56.2 0 0 0 6.9-27.3c0-16.5-7.1-32.2-19.6-43l-21.9-19 13.9-25.4a56.2 56.2 0 0 0 6.9-27.3c0-16.5-7.1-32.2-19.6-43l-21.9-19 13.9-25.4a56.2 56.2 0 0 0 6.9-27.3c0-22.4-13.2-42.6-33.6-51.8H345v345.2c18.6 67.2 46.4 168 83.5 302.5a44.28 44.28 0 0 0 42.2 32.3c7.5.1 15-2.2 21.1-6.7 9.9-7.4 15.2-18.6 14.6-30.5l-9.6-198.4h314.4C829 605.5 840 587.1 840 568c0-16.5-7.1-32.2-19.6-43z"], [e, "M112 132v364c0 17.7 14.3 32 32 32h65V100h-65c-17.7 0-32 14.3-32 32zm773.9 358.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H273l.3 428 85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zm-74.7 126.1H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 0 1-42.2-32.3c-37.1-134.4-64.9-235.2-83.5-302.5V172h399.4a56.85 56.85 0 0 1 33.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19a56.76 56.76 0 0 1 19.6 43c0 19.1-11 37.5-28.8 48.4z"])
		})), t.DownCircleTwoTone = u("down-circle", l, (function(e, t) {
			return i(r, [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm184.4 277.7l-178 246a7.95 7.95 0 0 1-12.9 0l-178-246c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 4.9 25.9 13.2L512 563.6l105.2-145.4c6-8.3 15.7-13.2 25.9-13.2H690c6.5 0 10.3 7.4 6.4 12.7z"], [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [e, "M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"])
		})), t.DownSquareTwoTone = u("down-square", l, (function(e, t) {
			return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm150-440h46.9c10.3 0 19.9 4.9 25.9 13.2L512 558.6l105.2-145.4c6-8.3 15.7-13.2 25.9-13.2H690c6.5 0 10.3 7.4 6.4 12.7l-178 246a7.95 7.95 0 0 1-12.9 0l-178-246c-3.8-5.3 0-12.7 6.5-12.7z"], [e, "M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 558.6 406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z"])
		})), t.EnvironmentTwoTone = u("environment", l, (function(e, t) {
			return i(r, [t, "M724.4 224.9C667.7 169.5 592.3 139 512 139s-155.7 30.5-212.4 85.8C243.1 280 212 353.2 212 431.1c0 241.3 234.1 407.2 300 449.1 65.9-41.9 300-207.8 300-449.1 0-77.9-31.1-151.1-87.6-206.2zM512 615c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"], [e, "M512 263c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8S624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z"], [e, "M854.6 289.1a362.49 362.49 0 0 0-79.9-115.7 370.83 370.83 0 0 0-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 0 0 169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0 0 22.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1z"])
		})), t.EditTwoTone = u("edit", l, (function(e, t) {
			return i(r, [t, "M761.1 288.3L687.8 215 325.1 577.6l-15.6 89 88.9-15.7z"], [e, "M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89z"])
		})), t.ExclamationCircleTwoTone = u("exclamation-circle", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm-32 156c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"], [e, "M488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8zm-24 112a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"])
		})), t.ExperimentTwoTone = u("experiment", l, (function(e, t) {
			return i(r, [t, "M551.9 513c19.6 0 35.9-14.2 39.3-32.8A40.02 40.02 0 0 1 552 512a40 40 0 0 1-40-39.4v.5c0 22 17.9 39.9 39.9 39.9zM752 687.8l-.3-.3c-29-17.5-62.3-26.8-97-26.8-44.9 0-87.2 15.7-121 43.8a256.27 256.27 0 0 1-164.9 59.9c-41.2 0-81-9.8-116.7-28L210.5 844h603l-59.9-155.2-1.6-1z"], [e, "M879 824.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 0 1-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.6-107.6.1-.2c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1l.6 1.6L813.5 844h-603z"], [e, "M552 512c19.3 0 35.4-13.6 39.2-31.8.6-2.7.8-5.4.8-8.2 0-22.1-17.9-40-40-40s-40 17.9-40 40v.6a40 40 0 0 0 40 39.4z"])
		})), t.EyeInvisibleTwoTone = u("eye-invisible", l, (function(e, t) {
			return i(r, [t, "M254.89 758.85l125.57-125.57a176 176 0 0 1 248.82-248.82L757 256.72Q651.69 186.07 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q69.27 145.91 173.09 221.05zM942.2 486.2Q889.46 375.11 816.7 305L672.48 449.27a176.09 176.09 0 0 1-227.22 227.21L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"], [e, "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zM878.63 165.56L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"], [e, "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"])
		})), t.EyeTwoTone = u("eye", l, (function(e, t) {
			return i(r, [t, "M81.8 537.8a60.3 60.3 0 0 1 0-51.5C176.6 286.5 319.8 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c-192.1 0-335.4-100.5-430.2-300.2z"], [t, "M512 258c-161.3 0-279.4 81.8-362.7 254C232.6 684.2 350.7 766 512 766c161.4 0 279.5-81.8 362.7-254C791.4 339.8 673.3 258 512 258zm-4 430c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"], [e, "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258s279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766z"], [e, "M508 336c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"])
		})), t.FileAddTwoTone = u("file-add", l, (function(e, t) {
			return i(r, [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm126 236v48c0 4.4-3.6 8-8 8H544v108c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V644H372c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h108V472c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v108h108c4.4 0 8 3.6 8 8z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z"])
		})), t.FileExclamationTwoTone = u("file-exclamation", l, (function(e, t) {
			return i(r, [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm-54 96c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V448zm32 336c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M488 640h48c4.4 0 8-3.6 8-8V448c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm-16 104a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"])
		})), t.FileImageTwoTone = u("file-image", l, (function(e, t) {
			return i(r, [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm-134 50c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm296 294H328.1c-6.7 0-10.4-7.7-6.3-12.9l99.8-127.2a8 8 0 0 1 12.6 0l41.1 52.4 77.8-99.2a8.1 8.1 0 0 1 12.7 0l136.5 174c4.1 5.2.4 12.9-6.3 12.9z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M553.1 509.1l-77.8 99.2-41.1-52.4a8 8 0 0 0-12.6 0l-99.8 127.2a7.98 7.98 0 0 0 6.3 12.9H696c6.7 0 10.4-7.7 6.3-12.9l-136.5-174a8.1 8.1 0 0 0-12.7 0zM360 442a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"])
		})), t.FileExcelTwoTone = u("file-excel", l, (function(e, t) {
			return i(r, [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm51.6 120h35.7a12.04 12.04 0 0 1 10.1 18.5L546.1 623l84 130.4c3.6 5.6 2 13-3.6 16.6-2 1.2-4.2 1.9-6.5 1.9h-37.5c-4.1 0-8-2.1-10.2-5.7L510 664.8l-62.7 101.5c-2.2 3.5-6 5.7-10.2 5.7h-34.5a12.04 12.04 0 0 1-10.2-18.4l83.4-132.8-82.3-130.4c-3.6-5.7-1.9-13.1 3.7-16.6 1.9-1.3 4.1-1.9 6.4-1.9H442c4.2 0 8.1 2.2 10.3 5.8l61.8 102.4 61.2-102.3c2.2-3.6 6.1-5.8 10.3-5.8z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M514.1 580.1l-61.8-102.4c-2.2-3.6-6.1-5.8-10.3-5.8h-38.4c-2.3 0-4.5.6-6.4 1.9-5.6 3.5-7.3 10.9-3.7 16.6l82.3 130.4-83.4 132.8a12.04 12.04 0 0 0 10.2 18.4h34.5c4.2 0 8-2.2 10.2-5.7L510 664.8l62.3 101.4c2.2 3.6 6.1 5.7 10.2 5.7H620c2.3 0 4.5-.7 6.5-1.9 5.6-3.6 7.2-11 3.6-16.6l-84-130.4 85.3-132.5a12.04 12.04 0 0 0-10.1-18.5h-35.7c-4.2 0-8.1 2.2-10.3 5.8l-61.2 102.3z"])
		})), t.FileMarkdownTwoTone = u("file-markdown", l, (function(e, t) {
			return i(r, [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm72.3 122H641c6.6 0 12 5.4 12 12v272c0 6.6-5.4 12-12 12h-27.2c-6.6 0-12-5.4-12-12V581.7L535 732.3c-2 4.3-6.3 7.1-11 7.1h-24.1a12 12 0 0 1-11-7.1l-66.8-150.2V758c0 6.6-5.4 12-12 12H383c-6.6 0-12-5.4-12-12V486c0-6.6 5.4-12 12-12h35c4.8 0 9.1 2.8 11 7.2l83.2 191 83.1-191c1.9-4.4 6.2-7.2 11-7.2z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M429 481.2c-1.9-4.4-6.2-7.2-11-7.2h-35c-6.6 0-12 5.4-12 12v272c0 6.6 5.4 12 12 12h27.1c6.6 0 12-5.4 12-12V582.1l66.8 150.2a12 12 0 0 0 11 7.1H524c4.7 0 9-2.8 11-7.1l66.8-150.6V758c0 6.6 5.4 12 12 12H641c6.6 0 12-5.4 12-12V486c0-6.6-5.4-12-12-12h-34.7c-4.8 0-9.1 2.8-11 7.2l-83.1 191-83.2-191z"])
		})), t.FilePdfTwoTone = u("file-pdf", l, (function(e, t) {
			return i(r, [t, "M509.2 490.8c-.7-1.3-1.4-1.9-2.2-2-2.9 3.3-2.2 31.5 2.7 51.4 4-13.6 4.7-40.5-.5-49.4zm-1.6 120.5c-7.7 20-18.8 47.3-32.1 71.4 4-1.6 8.1-3.3 12.3-5 17.6-7.2 37.3-15.3 58.9-20.2-14.9-11.8-28.4-27.7-39.1-46.2z"], [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm55 287.6c16.1-1.9 30.6-2.8 44.3-2.3 12.8.4 23.6 2 32 5.1.2.1.3.1.5.2.4.2.8.3 1.2.5.5.2 1.1.4 1.6.7.1.1.3.1.4.2 4.1 1.8 7.5 4 10.1 6.6 9.1 9.1 11.8 26.1 6.2 39.6-3.2 7.7-11.7 20.5-33.3 20.5-21.8 0-53.9-9.7-82.1-24.8-25.5 4.3-53.7 13.9-80.9 23.1-5.8 2-11.8 4-17.6 5.9-38 65.2-66.5 79.4-84.1 79.4-4.2 0-7.8-.9-10.8-2-6.9-2.6-12.8-8-16.5-15-.9-1.7-1.6-3.4-2.2-5.2-1.6-4.8-2.1-9.6-1.3-13.6l.6-2.7c.1-.2.1-.4.2-.6.2-.7.4-1.4.7-2.1 0-.1.1-.2.1-.3 4.1-11.9 13.6-23.4 27.7-34.6 12.3-9.8 27.1-18.7 45.9-28.4 15.9-28 37.6-75.1 51.2-107.4-10.8-41.8-16.7-74.6-10.1-98.6.9-3.3 2.5-6.4 4.6-9.1.2-.2.3-.4.5-.6.1-.1.1-.2.2-.2 6.3-7.5 16.9-11.9 28.1-11.5 16.6.7 29.7 11.5 33 30.1 1.7 8 2.2 16.5 1.9 25.7v.7c0 .5 0 1-.1 1.5-.7 13.3-3 26.6-7.3 44.7-.4 1.6-.8 3.2-1.2 5.2l-1 4.1-.1.3c.1.2.1.3.2.5l1.8 4.5c.1.3.3.7.4 1 .7 1.6 1.4 3.3 2.1 4.8v.1c8.7 18.8 19.7 33.4 33.9 45.1 4.3 3.5 8.9 6.7 13.9 9.8 1.8-.5 3.5-.7 5.3-.9z"], [t, "M391.5 761c5.7-4.4 16.2-14.5 30.1-34.7-10.3 9.4-23.4 22.4-30.1 34.7zm270.9-83l.2-.3h.2c.6-.4.5-.7.4-.9-.1-.1-4.5-9.3-45.1-7.4 35.3 13.9 43.5 9.1 44.3 8.6z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M535.9 585.3c-.8-1.7-1.5-3.3-2.2-4.9-.1-.3-.3-.7-.4-1l-1.8-4.5c-.1-.2-.1-.3-.2-.5l.1-.3.2-1.1c4-16.3 8.6-35.3 9.4-54.4v-.7c.3-8.6-.2-17.2-2-25.6-3.8-21.3-19.5-29.6-32.9-30.2-11.3-.5-21.8 4-28.1 11.4-.1.1-.1.2-.2.2-.2.2-.4.4-.5.6-2.1 2.7-3.7 5.8-4.6 9.1-6.6 24-.7 56.8 10.1 98.6-13.6 32.4-35.3 79.4-51.2 107.4v.1c-27.7 14.3-64.1 35.8-73.6 62.9 0 .1-.1.2-.1.3-.2.7-.5 1.4-.7 2.1-.1.2-.1.4-.2.6-.2.9-.5 1.8-.6 2.7-.9 4-.4 8.8 1.3 13.6.6 1.8 1.3 3.5 2.2 5.2 3.7 7 9.6 12.4 16.5 15 3 1.1 6.6 2 10.8 2 17.6 0 46.1-14.2 84.1-79.4 5.8-1.9 11.8-3.9 17.6-5.9 27.2-9.2 55.4-18.8 80.9-23.1 28.2 15.1 60.3 24.8 82.1 24.8 21.6 0 30.1-12.8 33.3-20.5 5.6-13.5 2.9-30.5-6.2-39.6-2.6-2.6-6-4.8-10.1-6.6-.1-.1-.3-.1-.4-.2-.5-.2-1.1-.4-1.6-.7-.4-.2-.8-.3-1.2-.5-.2-.1-.3-.1-.5-.2-16.2-5.8-41.7-6.7-76.3-2.8l-5.3.6c-5-3-9.6-6.3-13.9-9.8-14.2-11.3-25.1-25.8-33.8-44.7zM391.5 761c6.7-12.3 19.8-25.3 30.1-34.7-13.9 20.2-24.4 30.3-30.1 34.7zM507 488.8c.8.1 1.5.7 2.2 2 5.2 8.9 4.5 35.8.5 49.4-4.9-19.9-5.6-48.1-2.7-51.4zm-19.2 188.9c-4.2 1.7-8.3 3.4-12.3 5 13.3-24.1 24.4-51.4 32.1-71.4 10.7 18.5 24.2 34.4 39.1 46.2-21.6 4.9-41.3 13-58.9 20.2zm175.4-.9c.1.2.2.5-.4.9h-.2l-.2.3c-.8.5-9 5.3-44.3-8.6 40.6-1.9 45 7.3 45.1 7.4z"])
		})), t.FilePptTwoTone = u("file-ppt", l, (function(e, t) {
			return i(r, [t, "M464.5 516.2v108.4h38.9c44.7 0 71.2-10.9 71.2-54.3 0-34.4-20.1-54.1-53.9-54.1h-56.2z"], [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm90 218.4c0 55.2-36.8 94.1-96.2 94.1h-63.3V760c0 4.4-3.6 8-8 8H424c-4.4 0-8-3.6-8-8V484c0-4.4 3.6-8 8-8v.1h104c59.7 0 96 39.8 96 94.3z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M424 476.1c-4.4-.1-8 3.5-8 7.9v276c0 4.4 3.6 8 8 8h32.5c4.4 0 8-3.6 8-8v-95.5h63.3c59.4 0 96.2-38.9 96.2-94.1 0-54.5-36.3-94.3-96-94.3H424zm150.6 94.2c0 43.4-26.5 54.3-71.2 54.3h-38.9V516.2h56.2c33.8 0 53.9 19.7 53.9 54.1z"])
		})), t.FileTextTwoTone = u("file-text", l, (function(e, t) {
			return i(r, [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm-22 322c0 4.4-3.6 8-8 8H320c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm200-184v48c0 4.4-3.6 8-8 8H320c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h384c4.4 0 8 3.6 8 8z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8zm192 128H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"])
		})), t.FileUnknownTwoTone = u("file-unknown", l, (function(e, t) {
			return i(r, [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm-22 424c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm110-228.4c.7 44.9-29.7 84.5-74.3 98.9-5.7 1.8-9.7 7.3-9.7 13.3V672c0 5.5-4.5 10-10 10h-32c-5.5 0-10-4.5-10-10v-32c.2-19.8 15.4-37.3 34.7-40.1C549 596.2 570 574.3 570 549c0-28.1-25.8-51.5-58-51.5s-58 23.4-58 51.6c0 5.2-4.4 9.4-9.8 9.4h-32.4c-5.4 0-9.8-4.1-9.8-9.5 0-57.4 50.1-103.7 111.5-103 59.3.8 107.7 46.1 108.5 101.6z"], [e, "M854.6 288.7L639.4 73.4c-6-6-14.2-9.4-22.7-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.6-9.4-22.6zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M480 744a32 32 0 1 0 64 0 32 32 0 1 0-64 0zm-78-195c0 5.4 4.4 9.5 9.8 9.5h32.4c5.4 0 9.8-4.2 9.8-9.4 0-28.2 25.8-51.6 58-51.6s58 23.4 58 51.5c0 25.3-21 47.2-49.3 50.9-19.3 2.8-34.5 20.3-34.7 40.1v32c0 5.5 4.5 10 10 10h32c5.5 0 10-4.5 10-10v-12.2c0-6 4-11.5 9.7-13.3 44.6-14.4 75-54 74.3-98.9-.8-55.5-49.2-100.8-108.5-101.6-61.4-.7-111.5 45.6-111.5 103z"])
		})), t.FileZipTwoTone = u("file-zip", l, (function(e, t) {
			return i(r, [t, "M344 630h32v2h-32z"], [t, "M534 352V136H360v64h64v64h-64v64h64v64h-64v64h64v64h-64v62h64v160H296V520h64v-64h-64v-64h64v-64h-64v-64h64v-64h-64v-64h-64v752h560V394H576a42 42 0 0 1-42-42z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h64v64h64v-64h174v216a42 42 0 0 0 42 42h216v494z"], [e, "M296 392h64v64h-64zm0-128h64v64h-64zm0 318v160h128V582h-64v-62h-64v62zm48 50v-2h32v64h-32v-62zm16-432h64v64h-64zm0 256h64v64h-64zm0-128h64v64h-64z"])
		})), t.FileWordTwoTone = u("file-word", l, (function(e, t) {
			return i(r, [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm101.3 129.3c1.3-5.4 6.1-9.3 11.7-9.3h35.6a12.04 12.04 0 0 1 11.6 15.1l-74.4 276c-1.4 5.3-6.2 8.9-11.6 8.9h-31.8c-5.4 0-10.2-3.7-11.6-8.9l-52.8-197-52.8 197c-1.4 5.3-6.2 8.9-11.6 8.9h-32c-5.4 0-10.2-3.7-11.6-8.9l-74.2-276a12.02 12.02 0 0 1 11.6-15.1h35.4c5.6 0 10.4 3.9 11.7 9.3L434.6 680l49.7-198.9c1.3-5.4 6.1-9.1 11.6-9.1h32.2c5.5 0 10.3 3.7 11.6 9.1l49.8 199.3 45.8-199.1z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"], [e, "M528.1 472h-32.2c-5.5 0-10.3 3.7-11.6 9.1L434.6 680l-46.1-198.7c-1.3-5.4-6.1-9.3-11.7-9.3h-35.4a12.02 12.02 0 0 0-11.6 15.1l74.2 276c1.4 5.2 6.2 8.9 11.6 8.9h32c5.4 0 10.2-3.6 11.6-8.9l52.8-197 52.8 197c1.4 5.2 6.2 8.9 11.6 8.9h31.8c5.4 0 10.2-3.6 11.6-8.9l74.4-276a12.04 12.04 0 0 0-11.6-15.1H647c-5.6 0-10.4 3.9-11.7 9.3l-45.8 199.1-49.8-199.3c-1.3-5.4-6.1-9.1-11.6-9.1z"])
		})), t.FileTwoTone = u("file", l, (function(e, t) {
			return i(r, [t, "M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42z"], [e, "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"])
		})), t.FilterTwoTone = u("filter", l, (function(e, t) {
			return i(r, [t, "M420.6 798h182.9V642H420.6zM411 561.4l9.5 16.6h183l9.5-16.6L811.3 226H212.7z"], [e, "M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.5 798H420.6V642h182.9v156zm9.5-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"])
		})), t.FireTwoTone = u("fire", l, (function(e, t) {
			return i(r, [t, "M737 438.6c-9.6 15.5-21.1 30.7-34.4 45.6a73.1 73.1 0 0 1-51 24.4 73.36 73.36 0 0 1-53.4-18.8 74.01 74.01 0 0 1-24.4-59.8c3-47.4-12.4-103.1-45.8-165.7-16.9-31.4-37.1-58.2-61.2-80.4a240 240 0 0 1-12.1 46.5 354.26 354.26 0 0 1-58.2 101 349.6 349.6 0 0 1-58.6 56.8c-34 26.1-62 60-80.8 97.9a275.96 275.96 0 0 0-29.1 124c0 74.9 29.5 145.3 83 198.4 53.7 53.2 125 82.4 201 82.4s147.3-29.2 201-82.4c53.5-53 83-123.5 83-198.4 0-39.2-8.1-77.3-24-113.1-9.3-21-21-40.5-35-58.4z"], [e, "M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4 0-43.5 9.8-85.2 29.1-124 18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0 0 58.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0 0 12.1-46.5c24.1 22.2 44.3 49 61.2 80.4 33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0 0 24.4 59.8 73.36 73.36 0 0 0 53.4 18.8c19.7-1 37.8-9.7 51-24.4 13.3-14.9 24.8-30.1 34.4-45.6 14 17.9 25.7 37.4 35 58.4 15.9 35.8 24 73.9 24 113.1 0 74.9-29.5 145.4-83 198.4z"])
		})), t.FolderAddTwoTone = u("folder-add", l, (function(e, t) {
			return i(r, [t, "M372.5 256H184v512h656V370.4H492.1L372.5 256zM540 443.1V528h84.5c4.1 0 7.5 3.1 7.5 7v42c0 3.8-3.4 7-7.5 7H540v84.9c0 3.9-3.1 7.1-7 7.1h-42c-3.8 0-7-3.2-7-7.1V584h-84.5c-4.1 0-7.5-3.2-7.5-7v-42c0-3.9 3.4-7 7.5-7H484v-84.9c0-3.9 3.2-7.1 7-7.1h42c3.9 0 7 3.2 7 7.1z"], [e, "M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"], [e, "M484 443.1V528h-84.5c-4.1 0-7.5 3.1-7.5 7v42c0 3.8 3.4 7 7.5 7H484v84.9c0 3.9 3.2 7.1 7 7.1h42c3.9 0 7-3.2 7-7.1V584h84.5c4.1 0 7.5-3.2 7.5-7v-42c0-3.9-3.4-7-7.5-7H540v-84.9c0-3.9-3.1-7.1-7-7.1h-42c-3.8 0-7 3.2-7 7.1z"])
		})), t.FlagTwoTone = u("flag", l, (function(e, t) {
			return i(r, [t, "M184 232h368v336H184z"], [t, "M624 632c0 4.4-3.6 8-8 8H504v73h336V377H624v255z"], [e, "M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32zM184 568V232h368v336H184zm656 145H504v-73h112c4.4 0 8-3.6 8-8V377h216v336z"])
		})), t.FolderTwoTone = u("folder", l, (function(e, t) {
			return i(r, [e, "M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"], [t, "M372.5 256H184v512h656V370.4H492.1z"])
		})), t.FolderOpenTwoTone = u("folder-open", l, (function(e, t) {
			return i(r, [t, "M159 768h612.3l103.4-256H262.3z"], [e, "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"])
		})), t.FrownTwoTone = u("frown", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm376 272h-48.1c-4.2 0-7.8-3.2-8.1-7.4C604 636.1 562.5 597 512 597s-92.1 39.1-95.8 88.6c-.3 4.2-3.9 7.4-8.1 7.4H360a8 8 0 0 1-8-8.4c4.4-84.3 74.5-151.6 160-151.6s155.6 67.3 160 151.6a8 8 0 0 1-8 8.4zm24-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"], [e, "M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm224 112c-85.5 0-155.6 67.3-160 151.6a8 8 0 0 0 8 8.4h48.1c4.2 0 7.8-3.2 8.1-7.4 3.7-49.5 45.3-88.6 95.8-88.6s92 39.1 95.8 88.6c.3 4.2 3.9 7.4 8.1 7.4H664a8 8 0 0 0 8-8.4C667.6 600.3 597.5 533 512 533zm128-112a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"])
		})), t.FundTwoTone = u("fund", l, (function(e, t) {
			return i(r, [e, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560z"], [t, "M136 792h752V232H136v560zm56.4-130.5l214.9-215c3.1-3.1 8.2-3.1 11.3 0L533 561l254.5-254.6c3.1-3.1 8.2-3.1 11.3 0l36.8 36.8c3.1 3.1 3.1 8.2 0 11.3l-297 297.2a8.03 8.03 0 0 1-11.3 0L412.9 537.2 240.4 709.7a8.03 8.03 0 0 1-11.3 0l-36.7-36.9a8.03 8.03 0 0 1 0-11.3z"], [e, "M229.1 709.7c3.1 3.1 8.2 3.1 11.3 0l172.5-172.5 114.4 114.5c3.1 3.1 8.2 3.1 11.3 0l297-297.2c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8a8.03 8.03 0 0 0-11.3 0L533 561 418.6 446.5a8.03 8.03 0 0 0-11.3 0l-214.9 215a8.03 8.03 0 0 0 0 11.3l36.7 36.9z"])
		})), t.FunnelPlotTwoTone = u("funnel-plot", l, (function(e, t) {
			return i(r, [t, "M420.6 798h182.9V650H420.6zM297.7 374h428.6l85-148H212.7zm113.2 197.4l8.4 14.6h185.3l8.4-14.6L689.6 438H334.4z"], [e, "M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 607.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V607.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.5 798H420.6V650h182.9v148zm9.5-226.6l-8.4 14.6H419.3l-8.4-14.6L334.4 438h355.2L613 571.4zM726.3 374H297.7l-85-148h598.6l-85 148z"])
		})), t.GiftTwoTone = u("gift", l, (function(e, t) {
			return i(r, [t, "M546 378h298v104H546zM228 550h250v308H228zm-48-172h298v104H180zm366 172h250v308H546z"], [e, "M880 310H732.4c13.6-21.4 21.6-46.8 21.6-74 0-76.1-61.9-138-138-138-41.4 0-78.7 18.4-104 47.4-25.3-29-62.6-47.4-104-47.4-76.1 0-138 61.9-138 138 0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v200c0 4.4 3.6 8 8 8h40v344c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V550h40c4.4 0 8-3.6 8-8V342c0-17.7-14.3-32-32-32zM478 858H228V550h250v308zm0-376H180V378h298v104zm0-176h-70c-38.6 0-70-31.4-70-70s31.4-70 70-70 70 31.4 70 70v70zm68-70c0-38.6 31.4-70 70-70s70 31.4 70 70-31.4 70-70 70h-70v-70zm250 622H546V550h250v308zm48-376H546V378h298v104z"])
		})), t.HddTwoTone = u("hdd", l, (function(e, t) {
			return i(r, [t, "M232 888h560V680H232v208zm448-140c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM232 616h560V408H232v208zm72-128c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H312c-4.4 0-8-3.6-8-8v-48zm-72-144h560V136H232v208zm72-128c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H312c-4.4 0-8-3.6-8-8v-48z"], [e, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V680h560v208zm0-272H232V408h560v208zm0-272H232V136h560v208z"], [e, "M312 544h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H312c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0-272h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H312c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm328 516a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"])
		})), t.HeartTwoTone = u("heart", l, (function(e, t) {
			return i(r, [e, "M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"], [t, "M679.7 201c-73.1 0-136.5 40.8-167.7 100.4C480.8 241.8 417.4 201 344.3 201c-104 0-188.3 82.6-188.3 184.5 0 201.2 356 429.3 356 429.3s356-228.1 356-429.3C868 283.6 783.7 201 679.7 201z"])
		})), t.HighlightTwoTone = u("highlight", l, (function(e, t) {
			return i(r, [t, "M229.6 796.3h160.2l54.3-54.1-80.1-78.9zm220.7-397.1l262.8 258.9 147.3-145-262.8-259zm-77.1 166.1l171.4 168.9 68.6-67.6-171.4-168.9z"], [e, "M957.6 507.5L603.2 158.3a7.9 7.9 0 0 0-11.2 0L353.3 393.5a8.03 8.03 0 0 0-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 0 0-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8v55.2c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6L539 830a7.9 7.9 0 0 0 11.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0 0 11.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2zM389.8 796.3H229.6l134.4-133 80.1 78.9-54.3 54.1zm154.8-62.1L373.2 565.3l68.6-67.6 171.4 168.9-68.6 67.6zm168.5-76.1L450.3 399.2l147.3-145.1 262.8 259-147.3 145z"])
		})), t.HomeTwoTone = u("home", l, (function(e, t) {
			return i(r, [t, "M512.1 172.6l-370 369.7h96V868H392V640c0-22.1 17.9-40 40-40h160c22.1 0 40 17.9 40 40v228h153.9V542.3H882L535.2 195.7l-23.1-23.1zm434.5 422.9c-6 6-13.1 10.8-20.8 13.9 7.7-3.2 14.8-7.9 20.8-13.9zm-887-34.7c5 30.3 31.4 53.5 63.1 53.5h.9c-31.9 0-58.9-23-64-53.5zm-.9-10.5v-1.9 1.9zm.1-2.6c.1-3.1.5-6.1 1-9.1-.6 2.9-.9 6-1 9.1z"], [e, "M951 510c0-.1-.1-.1-.1-.2l-1.8-2.1c-.1-.1-.2-.3-.4-.4-.7-.8-1.5-1.6-2.2-2.4L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.6 63.6 0 0 0-16 26.6l-.6 2.1-.3 1.1-.3 1.2c-.2.7-.3 1.4-.4 2.1 0 .1 0 .3-.1.4-.6 3-.9 6-1 9.1v3.3c0 .5 0 1 .1 1.5 0 .5 0 .9.1 1.4 0 .5.1 1 .1 1.5 0 .6.1 1.2.2 1.8 0 .3.1.6.1.9l.3 2.5v.1c5.1 30.5 32.2 53.5 64 53.5h42.5V940h691.7V614.3h43.4c8.6 0 16.9-1.7 24.5-4.9s14.7-7.9 20.8-13.9a63.6 63.6 0 0 0 18.7-45.3c0-14.7-5-28.8-14.3-40.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"])
		})), t.HourglassTwoTone = u("hourglass", l, (function(e, t) {
			return i(r, [t, "M512 548c-42.2 0-81.9 16.4-111.7 46.3A156.63 156.63 0 0 0 354 706v134h316V706c0-42.2-16.4-81.9-46.3-111.7A156.63 156.63 0 0 0 512 548zM354 318c0 42.2 16.4 81.9 46.3 111.7C430.1 459.6 469.8 476 512 476s81.9-16.4 111.7-46.3C653.6 399.9 670 360.2 670 318V184H354v134z"], [e, "M742 318V184h86c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h86v134c0 81.5 42.4 153.2 106.4 194-64 40.8-106.4 112.5-106.4 194v134h-86c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h632c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-86V706c0-81.5-42.4-153.2-106.4-194 64-40.8 106.4-112.5 106.4-194zm-72 388v134H354V706c0-42.2 16.4-81.9 46.3-111.7C430.1 564.4 469.8 548 512 548s81.9 16.4 111.7 46.3C653.6 624.1 670 663.8 670 706zm0-388c0 42.2-16.4 81.9-46.3 111.7C593.9 459.6 554.2 476 512 476s-81.9-16.4-111.7-46.3A156.63 156.63 0 0 1 354 318V184h316v134z"])
		})), t.Html5TwoTone = u("html5", l, (function(e, t) {
			return i(r, [e, "M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2z"], [t, "M209.9 155.4l56.7 641.2 245.2 69.6 244.1-69.6 57.8-641.2H209.9zm530.4 117.9l-4.8 47.2-1.7 19.5H381.7l8.2 94.2H511v-.2h214.7l-3.2 24.3-21.2 242.2-1.7 16.3-187.7 51.7v.4h-1.7l-188.6-52-11.3-144.7h91l6.5 73.2 102.4 27.7h.8v-.2l102.4-27.7 11.4-118.5H511.9v.1H305.4l-22.7-253.5L281 249h461l-1.7 24.3z"], [e, "M281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z"])
		})), t.IdcardTwoTone = u("idcard", l, (function(e, t) {
			return i(r, [e, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560z"], [t, "M136 792h752V232H136v560zm472-372c0-4.4 1-8 2.3-8h123.4c1.3 0 2.3 3.6 2.3 8v48c0 4.4-1 8-2.3 8H610.3c-1.3 0-2.3-3.6-2.3-8v-48zm0 144c0-4.4 3.2-8 7.1-8h185.7c3.9 0 7.1 3.6 7.1 8v48c0 4.4-3.2 8-7.1 8H615.1c-3.9 0-7.1-3.6-7.1-8v-48zM216.2 664.6c2.8-53.3 31.9-99.6 74.6-126.1-18.1-20-29.1-46.4-29.1-75.5 0-61.9 49.9-112 111.4-112s111.4 50.1 111.4 112c0 29.1-11 55.6-29.1 75.5 42.6 26.4 71.8 72.8 74.6 126.1a8 8 0 0 1-8 8.4h-43.9c-4.2 0-7.6-3.3-7.9-7.5-3.8-50.5-46-90.5-97.2-90.5s-93.4 40-97.2 90.5c-.3 4.2-3.7 7.5-7.9 7.5H224c-4.6 0-8.2-3.8-7.8-8.4z"], [t, "M321.3 463a51.7 52 0 1 0 103.4 0 51.7 52 0 1 0-103.4 0z"], [e, "M610.3 476h123.4c1.3 0 2.3-3.6 2.3-8v-48c0-4.4-1-8-2.3-8H610.3c-1.3 0-2.3 3.6-2.3 8v48c0 4.4 1 8 2.3 8zm4.8 144h185.7c3.9 0 7.1-3.6 7.1-8v-48c0-4.4-3.2-8-7.1-8H615.1c-3.9 0-7.1 3.6-7.1 8v48c0 4.4 3.2 8 7.1 8zM224 673h43.9c4.2 0 7.6-3.3 7.9-7.5 3.8-50.5 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H522a8 8 0 0 0 8-8.4c-2.8-53.3-32-99.7-74.6-126.1a111.8 111.8 0 0 0 29.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 0 0-74.6 126.1c-.4 4.6 3.2 8.4 7.8 8.4zm149-262c28.5 0 51.7 23.3 51.7 52s-23.2 52-51.7 52-51.7-23.3-51.7-52 23.2-52 51.7-52z"])
		})), t.InfoCircleTwoTone = u("info-circle", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm32 588c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"], [e, "M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"])
		})), t.InsuranceTwoTone = u("insurance", l, (function(e, t) {
			return i(r, [e, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6z"], [t, "M521.9 358.8h97.9v41.6h-97.9z"], [t, "M214 226.7v427.6l298 232.2 298-232.2V226.7L512 125.1 214 226.7zM413.3 656h-.2c0 4.4-3.6 8-8 8h-37.3c-4.4 0-8-3.6-8-8V471.4c-7.7 9.2-15.4 17.9-23.1 26a6.04 6.04 0 0 1-10.2-2.4l-13.2-43.5c-.6-2-.2-4.1 1.2-5.6 37-43.4 64.7-95.1 82.2-153.6 1.1-3.5 5-5.3 8.4-3.7l38.6 18.3c2.7 1.3 4.1 4.4 3.2 7.2a429.2 429.2 0 0 1-33.6 79V656zm257.9-340v127.2c0 4.4-3.6 8-8 8h-66.7v18.6h98.8c4.4 0 8 3.6 8 8v35.6c0 4.4-3.6 8-8 8h-59c18.1 29.1 41.8 54.3 72.3 76.9 2.6 2.1 3.2 5.9 1.2 8.5l-26.3 35.3a5.92 5.92 0 0 1-8.9.7c-30.6-29.3-56.8-65.2-78.1-106.9V656c0 4.4-3.6 8-8 8h-36.2c-4.4 0-8-3.6-8-8V536c-22 44.7-49 80.8-80.6 107.6a6.38 6.38 0 0 1-4.8 1.4c-1.7-.3-3.2-1.3-4.1-2.8L432 605.7a6 6 0 0 1 1.6-8.1c28.6-20.3 51.9-45.2 71-76h-55.1c-4.4 0-8-3.6-8-8V478c0-4.4 3.6-8 8-8h94.9v-18.6h-65.9c-4.4 0-8-3.6-8-8V316c0-4.4 3.6-8 8-8h184.7c4.4 0 8 3.6 8 8z"], [e, "M443.7 306.9l-38.6-18.3c-3.4-1.6-7.3.2-8.4 3.7-17.5 58.5-45.2 110.2-82.2 153.6a5.7 5.7 0 0 0-1.2 5.6l13.2 43.5c1.4 4.5 7 5.8 10.2 2.4 7.7-8.1 15.4-16.8 23.1-26V656c0 4.4 3.6 8 8 8h37.3c4.4 0 8-3.6 8-8h.2V393.1a429.2 429.2 0 0 0 33.6-79c.9-2.8-.5-5.9-3.2-7.2zm26.8 9.1v127.4c0 4.4 3.6 8 8 8h65.9V470h-94.9c-4.4 0-8 3.6-8 8v35.6c0 4.4 3.6 8 8 8h55.1c-19.1 30.8-42.4 55.7-71 76a6 6 0 0 0-1.6 8.1l22.8 36.5c.9 1.5 2.4 2.5 4.1 2.8 1.7.3 3.5-.2 4.8-1.4 31.6-26.8 58.6-62.9 80.6-107.6v120c0 4.4 3.6 8 8 8h36.2c4.4 0 8-3.6 8-8V535.9c21.3 41.7 47.5 77.6 78.1 106.9 2.6 2.5 6.7 2.2 8.9-.7l26.3-35.3c2-2.6 1.4-6.4-1.2-8.5-30.5-22.6-54.2-47.8-72.3-76.9h59c4.4 0 8-3.6 8-8v-35.6c0-4.4-3.6-8-8-8h-98.8v-18.6h66.7c4.4 0 8-3.6 8-8V316c0-4.4-3.6-8-8-8H478.5c-4.4 0-8 3.6-8 8zm51.4 42.8h97.9v41.6h-97.9v-41.6z"])
		})), t.InteractionTwoTone = u("interaction", l, (function(e, t) {
			return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm114-401.9c0-55.3 44.6-100.1 99.7-100.1h205.8v-53.4c0-5.6 6.5-8.8 10.9-5.3L723.5 365c3.5 2.7 3.5 8 0 10.7l-109.1 85.7c-4.4 3.5-10.9.4-10.9-5.3v-53.4H397.8c-19.6 0-35.5 15.9-35.5 35.6v78.9c0 3.8-3.1 6.8-6.8 6.8h-50.7c-3.8 0-6.8-3-6.8-7v-78.9zm2.6 210.3l109.1-85.7c4.4-3.5 10.9-.4 10.9 5.3v53.4h205.6c19.6 0 35.5-15.9 35.5-35.6v-78.9c0-3.8 3.1-6.8 6.8-6.8h50.7c3.8 0 6.8 3.1 6.8 6.8v78.9c0 55.3-44.6 100.1-99.7 100.1H420.6v53.4c0 5.6-6.5 8.8-10.9 5.3l-109.1-85.7c-3.5-2.7-3.5-8 0-10.5z"], [e, "M304.8 524h50.7c3.7 0 6.8-3 6.8-6.8v-78.9c0-19.7 15.9-35.6 35.5-35.6h205.7v53.4c0 5.7 6.5 8.8 10.9 5.3l109.1-85.7c3.5-2.7 3.5-8 0-10.7l-109.1-85.7c-4.4-3.5-10.9-.3-10.9 5.3V338H397.7c-55.1 0-99.7 44.8-99.7 100.1V517c0 4 3 7 6.8 7zm-4.2 134.9l109.1 85.7c4.4 3.5 10.9.3 10.9-5.3v-53.4h205.7c55.1 0 99.7-44.8 99.7-100.1v-78.9c0-3.7-3-6.8-6.8-6.8h-50.7c-3.7 0-6.8 3-6.8 6.8v78.9c0 19.7-15.9 35.6-35.5 35.6H420.6V568c0-5.7-6.5-8.8-10.9-5.3l-109.1 85.7c-3.5 2.5-3.5 7.8 0 10.5z"])
		})), t.InterationTwoTone = u("interation", l, (function(e, t) {
			return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm114-401.9c0-55.3 44.6-100.1 99.7-100.1h205.8v-53.4c0-5.6 6.5-8.8 10.9-5.3L723.5 365c3.5 2.7 3.5 8 0 10.7l-109.1 85.7c-4.4 3.5-10.9.4-10.9-5.3v-53.4H397.8c-19.6 0-35.5 15.9-35.5 35.6v78.9c0 3.8-3.1 6.8-6.8 6.8h-50.7c-3.8 0-6.8-3-6.8-7v-78.9zm2.6 210.3l109.1-85.7c4.4-3.5 10.9-.4 10.9 5.3v53.4h205.6c19.6 0 35.5-15.9 35.5-35.6v-78.9c0-3.8 3.1-6.8 6.8-6.8h50.7c3.8 0 6.8 3.1 6.8 6.8v78.9c0 55.3-44.6 100.1-99.7 100.1H420.6v53.4c0 5.6-6.5 8.8-10.9 5.3l-109.1-85.7c-3.5-2.7-3.5-8 0-10.5z"], [e, "M304.8 524h50.7c3.7 0 6.8-3 6.8-6.8v-78.9c0-19.7 15.9-35.6 35.5-35.6h205.7v53.4c0 5.7 6.5 8.8 10.9 5.3l109.1-85.7c3.5-2.7 3.5-8 0-10.7l-109.1-85.7c-4.4-3.5-10.9-.3-10.9 5.3V338H397.7c-55.1 0-99.7 44.8-99.7 100.1V517c0 4 3 7 6.8 7zm-4.2 134.9l109.1 85.7c4.4 3.5 10.9.3 10.9-5.3v-53.4h205.7c55.1 0 99.7-44.8 99.7-100.1v-78.9c0-3.7-3-6.8-6.8-6.8h-50.7c-3.7 0-6.8 3-6.8 6.8v78.9c0 19.7-15.9 35.6-35.5 35.6H420.6V568c0-5.7-6.5-8.8-10.9-5.3l-109.1 85.7c-3.5 2.5-3.5 7.8 0 10.5z"])
		})), t.LayoutTwoTone = u("layout", l, (function(e, t) {
			return i(r, [t, "M384 185h456v136H384zm-200 0h136v656H184zm696-73H144c-17.7 0-32 14.3-32 32v1c0-17.7 14.3-32 32-32h736c17.7 0 32 14.3 32 32v-1c0-17.7-14.3-32-32-32zM384 385h456v456H384z"], [e, "M880 113H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V145c0-17.7-14.3-32-32-32zM320 841H184V185h136v656zm520 0H384V385h456v456zm0-520H384V185h456v136z"])
		})), t.LeftCircleTwoTone = u("left-circle", l, (function(e, t) {
			return i(r, [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm104 240.9c0 10.3-4.9 19.9-13.2 25.9L457.4 512l145.4 105.1c8.3 6 13.2 15.7 13.2 25.9v46.9c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 0 1 0-12.9l246-178c5.3-3.8 12.7 0 12.7 6.5v46.9z"], [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [e, "M603.3 327.5l-246 178a7.95 7.95 0 0 0 0 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z"])
		})), t.LeftSquareTwoTone = u("left-square", l, (function(e, t) {
			return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm181.3-334.5l246-178c5.3-3.8 12.7 0 12.7 6.5v46.9c0 10.3-4.9 19.9-13.2 25.9L465.4 512l145.4 105.2c8.3 6 13.2 15.7 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.4l-246-178a7.95 7.95 0 0 1 0-12.9z"], [e, "M365.3 518.4l246 178c5.3 3.9 12.7.1 12.7-6.4v-46.9c0-10.2-4.9-19.9-13.2-25.9L465.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5l-246 178a7.95 7.95 0 0 0 0 12.9z"])
		})), t.LikeTwoTone = u("like", l, (function(e, t) {
			return i(r, [t, "M273 495.9v428l.3-428zm538.2-88.3H496.8l9.6-198.4c.6-11.9-4.7-23.1-14.6-30.5-6.1-4.5-13.6-6.8-21.1-6.7-19.6.1-36.9 13.4-42.2 32.3-37.1 134.4-64.9 235.2-83.5 302.5V852h399.4a56.85 56.85 0 0 0 33.6-51.8c0-9.7-2.3-18.9-6.9-27.3l-13.9-25.4 21.9-19a56.76 56.76 0 0 0 19.6-43c0-9.7-2.3-18.9-6.9-27.3l-13.9-25.4 21.9-19a56.76 56.76 0 0 0 19.6-43c0-9.7-2.3-18.9-6.9-27.3l-14-25.5 21.9-19a56.76 56.76 0 0 0 19.6-43c0-19.1-11-37.5-28.8-48.4z"], [e, "M112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32zm773.9 5.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.5-65.5-111a67.67 67.67 0 0 0-34.3-9.3H572.3l6-122.9c1.5-29.7-9-57.9-29.5-79.4a106.4 106.4 0 0 0-77.9-33.4c-52 0-98 35-111.8 85.1l-85.8 310.8-.3 428h472.1c9.3 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37zM820.4 499l-21.9 19 14 25.5a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.1 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.1 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H345V506.8c18.6-67.2 46.4-168 83.5-302.5a44.28 44.28 0 0 1 42.2-32.3c7.5-.1 15 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.1 32.2-19.6 43z"])
		})), t.LockTwoTone = u("lock", l, (function(e, t) {
			return i(r, [e, "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304z"], [t, "M232 840h560V536H232v304zm280-226a48.01 48.01 0 0 1 28 87v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 0 1 28-87z"], [e, "M484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"])
		})), t.MailTwoTone = u("mail", l, (function(e, t) {
			return i(r, [t, "M477.5 536.3L135.9 270.7l-27.5-21.4 27.6 21.5V792h752V270.8L546.2 536.3a55.99 55.99 0 0 1-68.7 0z"], [t, "M876.3 198.8l39.3 50.5-27.6 21.5 27.7-21.5-39.3-50.5z"], [e, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-94.5 72.1L512 482 190.5 232.1h643zm54.5 38.7V792H136V270.8l-27.6-21.5 27.5 21.4 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5h.1l39.3 50.5-27.7 21.5z"])
		})), t.MedicineBoxTwoTone = u("medicine-box", l, (function(e, t) {
			return i(r, [t, "M244.3 328L184 513.4V840h656V513.4L779.7 328H244.3zM660 628c0 4.4-3.6 8-8 8H544v108c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V636H372c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h108V464c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v108h108c4.4 0 8 3.6 8 8v48z"], [e, "M652 572H544V464c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V636h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"], [e, "M839.2 278.1a32 32 0 0 0-30.4-22.1H736V144c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32v112h-72.8a31.9 31.9 0 0 0-30.4 22.1L112 502v378c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V502l-72.8-223.9zM360 184h304v72H360v-72zm480 656H184V513.4L244.3 328h535.4L840 513.4V840z"])
		})), t.MehTwoTone = u("meh", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm384 200c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v48zm16-152a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"], [e, "M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm376 144H360c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-24-144a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"])
		})), t.MessageTwoTone = u("message", l, (function(e, t) {
			return i(r, [t, "M775.3 248.9a369.62 369.62 0 0 0-119-80A370.2 370.2 0 0 0 512.1 140h-1.7c-99.7.4-193 39.4-262.8 109.9-69.9 70.5-108 164.1-107.6 263.8.3 60.3 15.3 120.2 43.5 173.1l4.5 8.4V836h140.8l8.4 4.5c52.9 28.2 112.8 43.2 173.1 43.5h1.7c99 0 192-38.2 262.1-107.6 70.4-69.8 109.5-163.1 110.1-262.7.2-50.6-9.5-99.6-28.9-145.8a370.15 370.15 0 0 0-80-119zM312 560a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96zm200 0a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96zm200 0a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"], [e, "M664 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"], [e, "M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"], [e, "M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"])
		})), t.MinusCircleTwoTone = u("minus-circle", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm192 396c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"], [e, "M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"])
		})), t.MinusSquareTwoTone = u("minus-square", l, (function(e, t) {
			return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm136-352c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48z"], [e, "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"])
		})), t.MobileTwoTone = u("mobile", l, (function(e, t) {
			return i(r, [e, "M744 64H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm-8 824H288V136h448v752z"], [t, "M288 888h448V136H288v752zm224-142c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z"], [e, "M472 786a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"])
		})), t.PauseCircleTwoTone = u("pause-circle", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm-80 524c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z"], [e, "M424 352h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8zm224 0h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8z"])
		})), t.MoneyCollectTwoTone = u("money-collect", l, (function(e, t) {
			return i(r, [t, "M256 744.4l256 93.1 256-93.1V184H256v560.4zM359.7 313c1.2-.7 2.5-1 3.8-1h55.7a8 8 0 0 1 7.1 4.4L511 485.2h3.3L599 316.4c1.3-2.7 4.1-4.4 7.1-4.4h54.5c4.4 0 8 3.6 8.1 7.9 0 1.3-.4 2.6-1 3.8L564 515.3h57.6c4.4 0 8 3.6 8 8v27.1c0 4.4-3.6 8-8 8h-76.3v39h76.3c4.4 0 8 3.6 8 8v27.1c0 4.4-3.6 8-8 8h-76.3V704c0 4.4-3.6 8-8 8h-49.9c-4.4 0-8-3.6-8-8v-63.4h-76c-4.4 0-8-3.6-8-8v-27.1c0-4.4 3.6-8 8-8h76v-39h-76c-4.4 0-8-3.6-8-8v-27.1c0-4.4 3.6-8 8-8h57L356.5 323.8c-2.1-3.8-.7-8.7 3.2-10.8z"], [e, "M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM768 744.4l-256 93.1-256-93.1V184h512v560.4z"], [e, "M460.4 515.4h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6z"])
		})), t.NotificationTwoTone = u("notification", l, (function(e, t) {
			return i(r, [t, "M229.6 678.1c-3.7 11.6-5.6 23.9-5.6 36.4 0-12.5 2-24.8 5.7-36.4h-.1zm76.3-260.2H184v188.2h121.9l12.9 5.2L840 820.7V203.3L318.8 412.7z"], [e, "M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.7c-3.7 11.6-5.7 23.9-5.7 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1zm496 58.4L318.8 611.3l-12.9-5.2H184V417.9h121.9l12.9-5.2L840 203.3v617.4z"])
		})), t.PhoneTwoTone = u("phone", l, (function(e, t) {
			return i(r, [t, "M721.7 184.9L610.9 295.8l120.8 120.7-8 21.6A481.29 481.29 0 0 1 438 723.9l-21.6 8-.9-.9-119.8-120-110.8 110.9 104.5 104.5c10.8 10.7 26 15.7 40.8 13.2 117.9-19.5 235.4-82.9 330.9-178.4s158.9-213.1 178.4-331c2.5-14.8-2.5-30-13.3-40.8L721.7 184.9z"], [e, "M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"])
		})), t.PictureTwoTone = u("picture", l, (function(e, t) {
			return i(r, [e, "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z"], [t, "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z"], [t, "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 1 1 0 176 88 88 0 0 1 0-176z"], [t, "M276 368a28 28 0 1 0 56 0 28 28 0 1 0-56 0z"], [e, "M304 456a88 88 0 1 0 0-176 88 88 0 0 0 0 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z"])
		})), t.PlayCircleTwoTone = u("play-circle", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm164.1 378.2L457.7 677.1a8.02 8.02 0 0 1-12.7-6.5V353a8 8 0 0 1 12.7-6.5l218.4 158.8a7.9 7.9 0 0 1 0 12.9z"], [e, "M676.1 505.3L457.7 346.5A8 8 0 0 0 445 353v317.6a8.02 8.02 0 0 0 12.7 6.5l218.4-158.9a7.9 7.9 0 0 0 0-12.9z"])
		})), t.PlaySquareTwoTone = u("play-square", l, (function(e, t) {
			return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm240-484.7c0-9.4 10.9-14.7 18.3-8.8l199.4 156.7a11.2 11.2 0 0 1 0 17.6L442.3 677.6c-7.4 5.8-18.3.6-18.3-8.8V355.3z"], [e, "M442.3 677.6l199.4-156.8a11.2 11.2 0 0 0 0-17.6L442.3 346.5c-7.4-5.9-18.3-.6-18.3 8.8v313.5c0 9.4 10.9 14.6 18.3 8.8z"])
		})), t.PieChartTwoTone = u("pie-chart", l, (function(e, t) {
			return i(r, [t, "M316.2 920.5c-47.6-20.1-90.4-49-127.1-85.7a398.19 398.19 0 0 1-85.7-127.1A397.12 397.12 0 0 1 72 552.2v.2a398.57 398.57 0 0 0 117 282.5c36.7 36.7 79.4 65.5 127 85.6A396.64 396.64 0 0 0 471.6 952c27 0 53.6-2.7 79.7-7.9-25.9 5.2-52.4 7.8-79.3 7.8-54 .1-106.4-10.5-155.8-31.4zM560 472c-4.4 0-8-3.6-8-8V79.9c0-1.3.3-2.5.9-3.6-.9 1.3-1.5 2.9-1.5 4.6v383.7c0 4.4 3.6 8 8 8l383.6-1c1.6 0 3.1-.5 4.4-1.3-1 .5-2.2.7-3.4.7l-384 1z"], [t, "M619.8 147.6v256.6l256.4-.7c-13-62.5-44.3-120.5-90-166.1a332.24 332.24 0 0 0-166.4-89.8z"], [t, "M438 221.7c-75.9 7.6-146.2 40.9-200.8 95.5C174.5 379.9 140 463.3 140 552s34.5 172.1 97.2 234.8c62.3 62.3 145.1 96.8 233.2 97.2 88.2.4 172.7-34.1 235.3-96.2C761 733 794.6 662.3 802.3 586H438V221.7z"], [e, "M864 518H506V160c0-4.4-3.6-8-8-8h-26a398.46 398.46 0 0 0-282.8 117.1 398.19 398.19 0 0 0-85.7 127.1A397.61 397.61 0 0 0 72 552v.2c0 53.9 10.6 106.2 31.4 155.5 20.1 47.6 49 90.4 85.7 127.1 36.7 36.7 79.5 65.6 127.1 85.7A397.61 397.61 0 0 0 472 952c26.9 0 53.4-2.6 79.3-7.8 26.1-5.3 51.7-13.1 76.4-23.6 47.6-20.1 90.4-49 127.1-85.7 36.7-36.7 65.6-79.5 85.7-127.1A397.61 397.61 0 0 0 872 552v-26c0-4.4-3.6-8-8-8zM705.7 787.8A331.59 331.59 0 0 1 470.4 884c-88.1-.4-170.9-34.9-233.2-97.2C174.5 724.1 140 640.7 140 552s34.5-172.1 97.2-234.8c54.6-54.6 124.9-87.9 200.8-95.5V586h364.3c-7.7 76.3-41.3 147-96.6 201.8z"], [e, "M952 462.4l-2.6-28.2c-8.5-92.1-49.4-179-115.2-244.6A399.4 399.4 0 0 0 589 74.6L560.7 72c-3.4-.3-6.4 1.5-7.8 4.3a8.7 8.7 0 0 0-.9 3.6V464c0 4.4 3.6 8 8 8l384-1c1.2 0 2.3-.3 3.4-.7a8.1 8.1 0 0 0 4.6-7.9zm-332.2-58.2V147.6a332.24 332.24 0 0 1 166.4 89.8c45.7 45.6 77 103.6 90 166.1l-256.4.7z"])
		})), t.PlusCircleTwoTone = u("plus-circle", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm192 396c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"], [e, "M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"])
		})), t.PlusSquareTwoTone = u("plus-square", l, (function(e, t) {
			return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm136-352c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48z"], [e, "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"])
		})), t.PoundCircleTwoTone = u("pound-circle", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm146 582.1c0 4.4-3.6 8-8 8H376.2c-4.4 0-8-3.6-8-8v-38.5c0-3.7 2.5-6.9 6.1-7.8 44-10.9 72.8-49 72.8-94.2 0-14.7-2.5-29.4-5.9-44.2H374c-4.4 0-8-3.6-8-8v-30c0-4.4 3.6-8 8-8h53.7c-7.8-25.1-14.6-50.7-14.6-77.1 0-75.8 58.6-120.3 151.5-120.3 26.5 0 51.4 5.5 70.3 12.7 3.1 1.2 5.2 4.2 5.2 7.5v39.5a8 8 0 0 1-10.6 7.6c-17.9-6.4-39-10.5-60.4-10.5-53.3 0-87.3 26.6-87.3 70.2 0 24.7 6.2 47.9 13.4 70.5h112c4.4 0 8 3.6 8 8v30c0 4.4-3.6 8-8 8h-98.6c3.1 13.2 5.3 26.9 5.3 41 0 40.7-16.5 73.9-43.9 91.1v4.7h180c4.4 0 8 3.6 8 8v39.8z"], [e, "M650 674.3H470v-4.7c27.4-17.2 43.9-50.4 43.9-91.1 0-14.1-2.2-27.8-5.3-41h98.6c4.4 0 8-3.6 8-8v-30c0-4.4-3.6-8-8-8h-112c-7.2-22.6-13.4-45.8-13.4-70.5 0-43.6 34-70.2 87.3-70.2 21.4 0 42.5 4.1 60.4 10.5a8 8 0 0 0 10.6-7.6v-39.5c0-3.3-2.1-6.3-5.2-7.5-18.9-7.2-43.8-12.7-70.3-12.7-92.9 0-151.5 44.5-151.5 120.3 0 26.4 6.8 52 14.6 77.1H374c-4.4 0-8 3.6-8 8v30c0 4.4 3.6 8 8 8h67.2c3.4 14.8 5.9 29.5 5.9 44.2 0 45.2-28.8 83.3-72.8 94.2-3.6.9-6.1 4.1-6.1 7.8v38.5c0 4.4 3.6 8 8 8H650c4.4 0 8-3.6 8-8v-39.8c0-4.4-3.6-8-8-8z"])
		})), t.PrinterTwoTone = u("printer", l, (function(e, t) {
			return i(r, [t, "M360 180h304v152H360zm492 220H172c-6.6 0-12 5.4-12 12v292h132V500h440v204h132V412c0-6.6-5.4-12-12-12zm-24 84c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-40c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v40z"], [e, "M852 332H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM360 180h304v152H360V180zm304 664H360V568h304v276zm200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v292z"], [e, "M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8z"])
		})), t.ProfileTwoTone = u("profile", l, (function(e, t) {
			return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm300-496c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8v-48zm0 144c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8v-48zm0 144c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8v-48zM380 328c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z"], [e, "M340 656a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0-144a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0-144a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm152 320h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0-144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0-144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"])
		})), t.ProjectTwoTone = u("project", l, (function(e, t) {
			return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm472-560c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v256c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280zm-192 0c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280zm-192 0c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v464c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280z"], [e, "M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8z"])
		})), t.PushpinTwoTone = u("pushpin", l, (function(e, t) {
			return i(r, [t, "M474.8 357.7l-24.5 24.5-34.4-3.8c-9.6-1.1-19.3-1.6-28.9-1.6-29 0-57.5 4.7-84.7 14.1-14 4.8-27.4 10.8-40.3 17.9l353.1 353.3a259.92 259.92 0 0 0 30.4-153.9l-3.8-34.4 24.5-24.5L800 415.5 608.5 224 474.8 357.7z"], [e, "M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3a33.23 33.23 0 0 0-2.7 49.4l181.7 181.7-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8zM666.2 549.3l-24.5 24.5 3.8 34.4a259.92 259.92 0 0 1-30.4 153.9L262 408.8c12.9-7.1 26.3-13.1 40.3-17.9 27.2-9.4 55.7-14.1 84.7-14.1 9.6 0 19.3.5 28.9 1.6l34.4 3.8 24.5-24.5L608.5 224 800 415.5 666.2 549.3z"])
		})), t.PropertySafetyTwoTone = u("property-safety", l, (function(e, t) {
			return i(r, [e, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6z"], [t, "M214 226.7v427.6l298 232.2 298-232.2V226.7L512 125.1 214 226.7zM593.9 318h45c5.5 0 10 4.5 10 10 .1 1.7-.3 3.3-1.1 4.8l-87.7 161.1h45.7c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4v29.7h63.4c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4V658c0 5.5-4.5 10-10 10h-41.3c-5.5 0-10-4.5-10-10v-51.8H418c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h63.1v-29.7H418c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h45.2l-88-161.1c-2.6-4.8-.9-10.9 4-13.6 1.5-.8 3.1-1.2 4.8-1.2h46c3.8 0 7.2 2.1 8.9 5.5l72.9 144.3L585 323.5a10 10 0 0 1 8.9-5.5z"], [e, "M438.9 323.5a9.88 9.88 0 0 0-8.9-5.5h-46c-1.7 0-3.3.4-4.8 1.2-4.9 2.7-6.6 8.8-4 13.6l88 161.1H418c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1v29.7H418c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1V658c0 5.5 4.5 10 10 10h41.3c5.5 0 10-4.5 10-10v-51.8h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-63.4v-29.7h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-45.7l87.7-161.1c.8-1.5 1.2-3.1 1.1-4.8 0-5.5-4.5-10-10-10h-45a10 10 0 0 0-8.9 5.5l-73.2 144.3-72.9-144.3z"])
		})), t.QuestionCircleTwoTone = u("question-circle", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm0 632c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"], [e, "M472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm151.6-415.3C593.6 290.5 554 276 512 276s-81.6 14.4-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.2 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5 0-39.3-17.2-76-48.4-103.3z"])
		})), t.ReconciliationTwoTone = u("reconciliation", l, (function(e, t) {
			return i(r, [t, "M740 344H404V240H304v160h176c17.7 0 32 14.3 32 32v360h328V240H740v104zM584 448c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56zm92 301c-50.8 0-92-41.2-92-92s41.2-92 92-92 92 41.2 92 92-41.2 92-92 92zm92-341v96c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-96c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8z"], [t, "M642 657a34 34 0 1 0 68 0 34 34 0 1 0-68 0z"], [e, "M592 512h48c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm112-104v96c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-96c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8z"], [e, "M880 168H668c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56H264c-17.7 0-32 14.3-32 32v200h-88c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h336c17.7 0 32-14.3 32-32v-16h368c17.7 0 32-14.3 32-32V200c0-17.7-14.3-32-32-32zm-412 64h72v-56h64v56h72v48H468v-48zm-20 616H176V616h272v232zm0-296H176v-88h272v88zm392 240H512V432c0-17.7-14.3-32-32-32H304V240h100v104h336V240h100v552z"], [e, "M676 565c-50.8 0-92 41.2-92 92s41.2 92 92 92 92-41.2 92-92-41.2-92-92-92zm0 126c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.2 34-34 34z"])
		})), t.RedEnvelopeTwoTone = u("red-envelope", l, (function(e, t) {
			return i(r, [e, "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V193.1l260.3 204.1c11.6 9.1 27.9 9.1 39.5 0L792 193.1V888zm0-751.3h-31.7L512 331.3 263.7 136.7H232v-.7h560v.7z"], [t, "M492.3 397.2L232 193.1V888h560V193.1L531.8 397.2a31.99 31.99 0 0 1-39.5 0zm99.4 60.9h47.8a8.45 8.45 0 0 1 7.4 12.4l-87.2 161h45.9c4.6 0 8.4 3.8 8.4 8.4V665c0 4.6-3.8 8.4-8.4 8.4h-63.3V702h63.3c4.6 0 8.4 3.8 8.4 8.4v25c.2 4.7-3.5 8.5-8.2 8.5h-63.3v49.9c0 4.6-3.8 8.4-8.4 8.4h-43.7c-4.6 0-8.4-3.8-8.4-8.4v-49.9h-63c-4.6 0-8.4-3.8-8.4-8.4v-25.1c0-4.6 3.8-8.4 8.4-8.4h63v-28.6h-63c-4.6 0-8.4-3.8-8.4-8.4v-25.1c0-4.6 3.8-8.4 8.4-8.4h45.4L377 470.4a8.4 8.4 0 0 1 3.4-11.4c1.3-.6 2.6-1 3.9-1h48.8c3.2 0 6.1 1.8 7.5 4.6l71.7 142 71.9-141.9a8.6 8.6 0 0 1 7.5-4.6z"], [t, "M232 136.7h31.7L512 331.3l248.3-194.6H792v-.7H232z"], [e, "M440.6 462.6a8.38 8.38 0 0 0-7.5-4.6h-48.8c-1.3 0-2.6.4-3.9 1a8.4 8.4 0 0 0-3.4 11.4l87.4 161.1H419c-4.6 0-8.4 3.8-8.4 8.4V665c0 4.6 3.8 8.4 8.4 8.4h63V702h-63c-4.6 0-8.4 3.8-8.4 8.4v25.1c0 4.6 3.8 8.4 8.4 8.4h63v49.9c0 4.6 3.8 8.4 8.4 8.4h43.7c4.6 0 8.4-3.8 8.4-8.4v-49.9h63.3c4.7 0 8.4-3.8 8.2-8.5v-25c0-4.6-3.8-8.4-8.4-8.4h-63.3v-28.6h63.3c4.6 0 8.4-3.8 8.4-8.4v-25.1c0-4.6-3.8-8.4-8.4-8.4h-45.9l87.2-161a8.45 8.45 0 0 0-7.4-12.4h-47.8c-3.1 0-6 1.8-7.5 4.6l-71.9 141.9-71.7-142z"])
		})), t.RestTwoTone = u("rest", l, (function(e, t) {
			return i(r, [t, "M326.4 844h363.2l44.3-520H282l44.4 520zM508 416c79.5 0 144 64.5 144 144s-64.5 144-144 144-144-64.5-144-144 64.5-144 144-144z"], [e, "M508 704c79.5 0 144-64.5 144-144s-64.5-144-144-144-144 64.5-144 144 64.5 144 144 144zm0-224c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z"], [e, "M832 256h-28.1l-35.7-120.9c-4-13.7-16.5-23.1-30.7-23.1h-451c-14.3 0-26.8 9.4-30.7 23.1L220.1 256H192c-17.7 0-32 14.3-32 32v28c0 4.4 3.6 8 8 8h45.8l47.7 558.7a32 32 0 0 0 31.9 29.3h429.2a32 32 0 0 0 31.9-29.3L802.2 324H856c4.4 0 8-3.6 8-8v-28c0-17.7-14.3-32-32-32zm-518.6-76h397.2l22.4 76H291l22.4-76zm376.2 664H326.4L282 324h451.9l-44.3 520z"])
		})), t.RightCircleTwoTone = u("right-circle", l, (function(e, t) {
			return i(r, [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm154.7 378.4l-246 178c-5.3 3.8-12.7 0-12.7-6.5V643c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.7 0 12.9z"], [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [e, "M666.7 505.5l-246-178c-5.3-3.8-12.7 0-12.7 6.5v46.9c0 10.3 4.9 19.9 13.2 25.9L566.6 512 421.2 617.1c-8.3 6-13.2 15.7-13.2 25.9v46.9c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.7 0-12.9z"])
		})), t.RocketTwoTone = u("rocket", l, (function(e, t) {
			return i(r, [t, "M261.7 621.4c-9.4 14.6-17 30.3-22.5 46.6H324V558.7c-24.8 16.2-46 37.5-62.3 62.7zM700 558.7V668h84.8c-5.5-16.3-13.1-32-22.5-46.6a211.6 211.6 0 0 0-62.3-62.7zm-64-239.9l-124-147-124 147V668h248V318.8zM512 448a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"], [e, "M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 0 0-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0 0 43.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0 0 43.1-30.5 97.52 97.52 0 0 0 21.4-60.8c0-8.4-1.1-16.4-3.1-23.8L864 736zm-540-68h-84.8c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668zm64-184.9V318.8l124-147 124 147V668H388V483.1zm240.1 301.1c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5s-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 0 1-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM700 668V558.7a211.6 211.6 0 0 1 62.3 62.7c9.4 14.6 17 30.3 22.5 46.6H700z"], [e, "M464 400a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"])
		})), t.RightSquareTwoTone = u("right-square", l, (function(e, t) {
			return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm216-196.9c0-10.2 4.9-19.9 13.2-25.9L558.6 512 413.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.7 0 12.9l-246 178c-5.3 3.9-12.7.1-12.7-6.4v-46.9z"], [e, "M412.7 696.4l246-178c4.4-3.2 4.4-9.7 0-12.9l-246-178c-5.3-3.8-12.7 0-12.7 6.5v46.9c0 10.3 4.9 19.9 13.2 25.9L558.6 512 413.2 617.2c-8.3 6-13.2 15.7-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.4z"])
		})), t.SafetyCertificateTwoTone = u("safety-certificate", l, (function(e, t) {
			return i(r, [e, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6z"], [t, "M214 226.7v427.6l298 232.2 298-232.2V226.7L512 125.1 214 226.7zM632.8 328H688c6.5 0 10.3 7.4 6.5 12.7L481.9 633.4a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.2 0 10 2.5 13 6.6l64.7 89.1 150.9-207.8c3-4.1 7.9-6.6 13-6.6z"], [e, "M404.2 453.3c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"])
		})), t.SaveTwoTone = u("save", l, (function(e, t) {
			return i(r, [t, "M704 320c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V184H184v656h656V341.8l-136-136V320zM512 730c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144z"], [e, "M512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"], [e, "M893.3 293.3L730.7 130.7c-.7-.7-1.4-1.3-2.1-2-.1-.1-.3-.2-.4-.3-.7-.7-1.5-1.3-2.2-1.9a64 64 0 0 0-22-11.7V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840z"])
		})), t.ScheduleTwoTone = u("schedule", l, (function(e, t) {
			return i(r, [t, "M768 352c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-56H548v56c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-56H328v56c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-56H136v496h752V296H768v56zM424 688c0 4.4-3.6 8-8 8H232c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm0-136c0 4.4-3.6 8-8 8H232c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm374.4-91.2l-165 228.7a15.9 15.9 0 0 1-25.8 0L493.5 531.3c-3.8-5.3 0-12.7 6.5-12.7h54.9c5.1 0 9.9 2.4 12.9 6.6l52.8 73.1 103.6-143.7c3-4.1 7.8-6.6 12.8-6.5h54.9c6.5 0 10.3 7.4 6.5 12.7z"], [e, "M724.2 454.6L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0 0 25.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"], [e, "M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496z"], [e, "M416 632H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"])
		})), t.SecurityScanTwoTone = u("security-scan", l, (function(e, t) {
			return i(r, [e, "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6z"], [t, "M460.7 451.1a80.1 80.1 0 1 0 160.2 0 80.1 80.1 0 1 0-160.2 0z"], [t, "M214 226.7v427.6l298 232.2 298-232.2V226.7L512 125.1 214 226.7zm428.7 122.5c56.3 56.3 56.3 147.5 0 203.8-48.5 48.5-123 55.2-178.6 20.1l-77.5 77.5a8.03 8.03 0 0 1-11.3 0l-34-34a8.03 8.03 0 0 1 0-11.3l77.5-77.5c-35.1-55.7-28.4-130.1 20.1-178.6 56.3-56.3 147.5-56.3 203.8 0z"], [e, "M418.8 527.8l-77.5 77.5a8.03 8.03 0 0 0 0 11.3l34 34c3.1 3.1 8.2 3.1 11.3 0l77.5-77.5c55.6 35.1 130.1 28.4 178.6-20.1 56.3-56.3 56.3-147.5 0-203.8-56.3-56.3-147.5-56.3-203.8 0-48.5 48.5-55.2 122.9-20.1 178.6zm65.4-133.3a80.1 80.1 0 0 1 113.3 0 80.1 80.1 0 0 1 0 113.3c-31.3 31.3-82 31.3-113.3 0s-31.3-82 0-113.3z"])
		})), t.SettingTwoTone = u("setting", l, (function(e, t) {
			return i(r, [t, "M859.3 569.7l.2.1c3.1-18.9 4.6-38.2 4.6-57.3 0-17.1-1.3-34.3-3.7-51.1 2.4 16.7 3.6 33.6 3.6 50.5 0 19.4-1.6 38.8-4.7 57.8zM99 398.1c-.5-.4-.9-.8-1.4-1.3.7.7 1.4 1.4 2.2 2.1l65.5 55.9v-.1L99 398.1zm536.6-216h.1l-15.5-83.8c-.2-1-.4-1.9-.7-2.8.1.5.3 1.1.4 1.6l15.7 85zm54 546.5l31.4-25.8 92.8 32.9c17-22.9 31.3-47.5 42.6-73.6l-74.7-63.9 6.6-40.1c2.5-15.1 3.8-30.6 3.8-46.1s-1.3-31-3.8-46.1l-6.5-39.9 74.7-63.9c-11.4-26-25.6-50.7-42.6-73.6l-92.8 32.9-31.4-25.8c-23.9-19.6-50.6-35-79.3-45.8l-38.1-14.3-17.9-97a377.5 377.5 0 0 0-85 0l-17.9 97.2-37.9 14.3c-28.5 10.8-55 26.2-78.7 45.7l-31.4 25.9-93.4-33.2c-17 22.9-31.3 47.5-42.6 73.6l75.5 64.5-6.5 40c-2.5 14.9-3.7 30.2-3.7 45.5 0 15.2 1.3 30.6 3.7 45.5l6.5 40-75.5 64.5c11.4 26 25.6 50.7 42.6 73.6l93.4-33.2 31.4 25.9c23.7 19.5 50.2 34.9 78.7 45.7l37.8 14.5 17.9 97.2c28.2 3.2 56.9 3.2 85 0l17.9-97 38.1-14.3c28.8-10.8 55.4-26.2 79.3-45.8zm-177.1-50.3c-30.5 0-59.2-7.8-84.3-21.5C373.3 627 336 568.9 336 502c0-97.2 78.8-176 176-176 66.9 0 125 37.3 154.8 92.2 13.7 25 21.5 53.7 21.5 84.3 0 97.1-78.7 175.8-175.8 175.8zM207.2 812.8c-5.5 1.9-11.2 2.3-16.6 1.2 5.7 1.2 11.7 1 17.5-1l81.4-29c-.1-.1-.3-.2-.4-.3l-81.9 29.1zm717.6-414.7l-65.5 56c0 .2.1.5.1.7l65.4-55.9c7.1-6.1 11.1-14.9 11.2-24-.3 8.8-4.3 17.3-11.2 23.2z"], [t, "M935.8 646.6c.5 4.7 0 9.5-1.7 14.1l-.9 2.6a446.02 446.02 0 0 1-79.7 137.9l-1.8 2.1a32 32 0 0 1-35.1 9.5l-81.3-28.9a350 350 0 0 1-99.7 57.6l-15.7 85a32.05 32.05 0 0 1-25.8 25.7l-2.7.5a445.2 445.2 0 0 1-79.2 7.1h.3c26.7 0 53.4-2.4 79.4-7.1l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c1.6-4.7 2.1-9.7 1.5-14.5z"], [e, "M688 502c0-30.3-7.7-58.9-21.2-83.8C637 363.3 578.9 326 512 326c-97.2 0-176 78.8-176 176 0 66.9 37.3 125 92.2 154.8 24.9 13.5 53.4 21.2 83.8 21.2 97.2 0 176-78.8 176-176zm-288 0c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502z"], [e, "M594.1 952.2a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c1.7-4.6 2.2-9.4 1.7-14.1-.9-7.9-4.7-15.4-11-20.9l-65.3-55.9-.2-.1c3.1-19 4.7-38.4 4.7-57.8 0-16.9-1.2-33.9-3.6-50.5-.3-2.2-.7-4.4-1-6.6 0-.2-.1-.5-.1-.7l65.5-56c6.9-5.9 10.9-14.4 11.2-23.2.1-4-.5-8.1-1.9-12l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.4-44-99.6-57.6h-.1l-15.7-85c-.1-.5-.2-1.1-.4-1.6a32.08 32.08 0 0 0-25.4-24.1l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6a32.09 32.09 0 0 0 7.9 33.9c.5.4.9.9 1.4 1.3l66.3 56.6v.1c-3.1 18.8-4.6 37.9-4.6 57 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1c4.9 5.7 11.4 9.4 18.5 10.7 5.4 1 11.1.7 16.6-1.2l81.9-29.1c.1.1.3.2.4.3 29.7 24.3 62.8 43.6 98.6 57.1l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5c26.1 4.7 52.8 7.1 79.5 7.1h.3c26.6 0 53.3-2.4 79.2-7.1l2.7-.5zm-39.8-66.5a377.5 377.5 0 0 1-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97z"])
		})), t.ShopTwoTone = u("shop", l, (function(e, t) {
			return i(r, [t, "M839.5 344h-655c-.3 0-.5.2-.5.5v91.2c0 59.8 49 108.3 109.3 108.3 40.7 0 76.2-22 95.1-54.7 2.9-5.1 8.4-8.3 14.3-8.3s11.3 3.2 14.3 8.3c18.8 32.7 54.3 54.7 95 54.7 40.8 0 76.4-22.1 95.1-54.9 2.9-5 8.2-8.1 13.9-8.1h.6c5.8 0 11 3.1 13.9 8.1 18.8 32.8 54.4 54.9 95.2 54.9C791 544 840 495.5 840 435.7v-91.2c0-.3-.2-.5-.5-.5z"], [e, "M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h676c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zM214 184h596v88H214v-88zm362 656.1H448V736h128v104.1zm234.4 0H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4 22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c3-1.3 6-2.6 9-4v242.2zM840 435.7c0 59.8-49 108.3-109.3 108.3-40.8 0-76.4-22.1-95.2-54.9-2.9-5-8.1-8.1-13.9-8.1h-.6c-5.7 0-11 3.1-13.9 8.1A109.24 109.24 0 0 1 512 544c-40.7 0-76.2-22-95-54.7-3-5.1-8.4-8.3-14.3-8.3s-11.4 3.2-14.3 8.3a109.63 109.63 0 0 1-95.1 54.7C233 544 184 495.5 184 435.7v-91.2c0-.3.2-.5.5-.5h655c.3 0 .5.2.5.5v91.2z"])
		})), t.ShoppingTwoTone = u("shopping", l, (function(e, t) {
			return i(r, [t, "M696 472c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-88H400v88c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-88h-96v456h560V384h-96v88z"], [e, "M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"])
		})), t.SkinTwoTone = u("skin", l, (function(e, t) {
			return i(r, [t, "M512 318c-79.2 0-148.5-48.8-176.7-120H182v196h119v432h422V394h119V198H688.7c-28.2 71.2-97.5 120-176.7 120z"], [e, "M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44zm-28 268H723v432H301V394H182V198h153.3c28.2 71.2 97.5 120 176.7 120s148.5-48.8 176.7-120H842v196z"])
		})), t.SlidersTwoTone = u("sliders", l, (function(e, t) {
			return i(r, [t, "M180 292h80v440h-80zm369 180h-74a3 3 0 0 0-3 3v74a3 3 0 0 0 3 3h74a3 3 0 0 0 3-3v-74a3 3 0 0 0-3-3zm215-108h80v296h-80z"], [e, "M904 296h-66v-96c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v96h-66c-4.4 0-8 3.6-8 8v416c0 4.4 3.6 8 8 8h66v96c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-96h66c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8zm-60 364h-80V364h80v296zM612 404h-66V232c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v172h-66c-4.4 0-8 3.6-8 8v200c0 4.4 3.6 8 8 8h66v172c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V620h66c4.4 0 8-3.6 8-8V412c0-4.4-3.6-8-8-8zm-60 145a3 3 0 0 1-3 3h-74a3 3 0 0 1-3-3v-74a3 3 0 0 1 3-3h74a3 3 0 0 1 3 3v74zM320 224h-66v-56c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v56h-66c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h66v56c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-56h66c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zm-60 508h-80V292h80v440z"])
		})), t.SmileTwoTone = u("smile", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 0 1 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 0 1 8 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"], [e, "M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm376 112h-48.1c-4.2 0-7.8 3.2-8.1 7.4-3.7 49.5-45.3 88.6-95.8 88.6s-92-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 0 0-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 0 0-8-8.4zm-24-112a48 48 0 1 0 96 0 48 48 0 1 0-96 0z"])
		})), t.SnippetsTwoTone = u("snippets", l, (function(e, t) {
			return i(r, [t, "M450 510V336H232v552h432V550H490c-22.1 0-40-17.9-40-40z"], [e, "M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 888H232V336h218v174c0 22.1 17.9 40 40 40h174v338zm0-402H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z"])
		})), t.SoundTwoTone = u("sound", l, (function(e, t) {
			return i(r, [t, "M275.4 424H146v176h129.4l18 11.7L586 803V221L293.3 412.3z"], [e, "M892.1 737.8l-110.3-63.7a15.9 15.9 0 0 0-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0 0 21.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM934 476H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zM760 344a15.9 15.9 0 0 0 21.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 0 0-21.7-5.9L746 287.8a15.99 15.99 0 0 0-5.8 21.8L760 344zM625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582z"])
		})), t.StarTwoTone = u("star", l, (function(e, t) {
			return i(r, [t, "M512.5 190.4l-94.4 191.3-211.2 30.7 152.8 149-36.1 210.3 188.9-99.3 188.9 99.2-36.1-210.3 152.8-148.9-211.2-30.7z"], [e, "M908.6 352.8l-253.9-36.9L541.2 85.8c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L370.3 315.9l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1L239 839.4a31.95 31.95 0 0 0 46.4 33.7l227.1-119.4 227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM665.3 561.3l36.1 210.3-188.9-99.2-188.9 99.3 36.1-210.3-152.8-149 211.2-30.7 94.4-191.3 94.4 191.3 211.2 30.7-152.8 148.9z"])
		})), t.StopTwoTone = u("stop", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm288.5 682.8L277.7 224C258 240 240 258 224 277.7l522.8 522.8C682.8 852.7 601 884 512 884c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372c0 89-31.3 170.8-83.5 234.8z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372c89 0 170.8-31.3 234.8-83.5L224 277.7c16-19.7 34-37.7 53.7-53.7l522.8 522.8C852.7 682.8 884 601 884 512c0-205.4-166.6-372-372-372z"])
		})), t.SwitcherTwoTone = u("switcher", l, (function(e, t) {
			return i(r, [t, "M184 840h528V312H184v528zm116-290h296v64H300v-64z"], [e, "M880 112H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h576v576c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32z"], [e, "M752 240H144c-17.7 0-32 14.3-32 32v608c0 17.7 14.3 32 32 32h608c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32zm-40 600H184V312h528v528z"], [e, "M300 550h296v64H300z"])
		})), t.TabletTwoTone = u("tablet", l, (function(e, t) {
			return i(r, [e, "M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm-8 824H232V136h560v752z"], [t, "M232 888h560V136H232v752zm280-144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z"], [e, "M472 784a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"])
		})), t.TagTwoTone = u("tag", l, (function(e, t) {
			return i(r, [t, "M589 164.6L189.3 564.3l270.4 270.4L859.4 435 836 188l-247-23.4zM680 432c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88z"], [e, "M680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"], [e, "M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 0 0 0 14.1l363.8 363.8a9.9 9.9 0 0 0 7.1 2.9c2.7 0 5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM459.7 834.7L189.3 564.3 589 164.6 836 188l23.4 247-399.7 399.7z"])
		})), t.TagsTwoTone = u("tags", l, (function(e, t) {
			return i(r, [t, "M477.5 694l311.9-311.8-19-224.6-224.6-19-311.9 311.9L477.5 694zm116-415.5a47.81 47.81 0 0 1 33.9-33.9c16.6-4.4 34.2.3 46.4 12.4a47.93 47.93 0 0 1 12.4 46.4 47.81 47.81 0 0 1-33.9 33.9c-16.6 4.4-34.2-.3-46.4-12.4a48.3 48.3 0 0 1-12.4-46.4z"], [t, "M476.6 792.6c-1.7-.2-3.4-1-4.7-2.3L137.7 456.1a8.03 8.03 0 0 1 0-11.3L515.9 66.6c1.2-1.3 2.9-2.1 4.7-2.3h-.4c-2.3-.2-4.7.6-6.3 2.3L135.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c1.8 1.9 4.3 2.6 6.7 2.3z"], [e, "M889.7 539.8l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3zM652.3 337.3a47.81 47.81 0 0 0 33.9-33.9c4.4-16.6-.3-34.2-12.4-46.4a47.93 47.93 0 0 0-46.4-12.4 47.81 47.81 0 0 0-33.9 33.9c-4.4 16.6.3 34.2 12.4 46.4a48.3 48.3 0 0 0 46.4 12.4z"], [e, "M137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c1.3 1.3 2.9 2.1 4.7 2.3 2.4.3 4.8-.5 6.6-2.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3h-1.6c-1.8.2-3.4 1-4.7 2.3L137.7 444.8zm408.1-306.2l224.6 19 19 224.6L477.5 694 233.9 450.5l311.9-311.9z"])
		})), t.ToolTwoTone = u("tool", l, (function(e, t) {
			return i(r, [t, "M706.8 488.7a32.05 32.05 0 0 1-45.3 0L537 364.2a32.05 32.05 0 0 1 0-45.3l132.9-132.8a184.2 184.2 0 0 0-144 53.5c-58.1 58.1-69.3 145.3-33.6 214.6L439.5 507c-.1 0-.1-.1-.1-.1L209.3 737l79.2 79.2 274-274.1.1.1 8.8-8.8c69.3 35.7 156.5 24.5 214.6-33.6 39.2-39.1 57.3-92.1 53.6-143.9L706.8 488.7z"], [e, "M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 0 1 144-53.5L537 318.9a32.05 32.05 0 0 0 0 45.3l124.5 124.5a32.05 32.05 0 0 0 45.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z"])
		})), t.TrademarkCircleTwoTone = u("trademark-circle", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm170.7 584.2c-1.1.5-2.3.8-3.5.8h-62c-3.1 0-5.9-1.8-7.2-4.6l-74.6-159.2h-88.7V717c0 4.4-3.6 8-8 8H384c-4.4 0-8-3.6-8-8V307c0-4.4 3.6-8 8-8h155.6c98.8 0 144.2 59.9 144.2 131.1 0 70.2-43.6 106.4-78.4 119.2l80.8 164.2c2.1 3.9.4 8.7-3.5 10.7z"], [t, "M529.9 357h-83.4v148H528c53 0 82.8-25.6 82.8-72.4 0-50.3-32.9-75.6-80.9-75.6z"], [e, "M605.4 549.3c34.8-12.8 78.4-49 78.4-119.2 0-71.2-45.4-131.1-144.2-131.1H384c-4.4 0-8 3.6-8 8v410c0 4.4 3.6 8 8 8h54.7c4.4 0 8-3.6 8-8V561.2h88.7L610 720.4c1.3 2.8 4.1 4.6 7.2 4.6h62c1.2 0 2.4-.3 3.5-.8 3.9-2 5.6-6.8 3.5-10.7l-80.8-164.2zM528 505h-81.5V357h83.4c48 0 80.9 25.3 80.9 75.6 0 46.8-29.8 72.4-82.8 72.4z"])
		})), t.UnlockTwoTone = u("unlock", l, (function(e, t) {
			return i(r, [t, "M232 840h560V536H232v304zm280-226a48.01 48.01 0 0 1 28 87v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 0 1 28-87z"], [e, "M484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"], [e, "M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304z"])
		})), t.TrophyTwoTone = u("trophy", l, (function(e, t) {
			return i(r, [t, "M320 480c0 49.1 19.1 95.3 53.9 130.1 34.7 34.8 81 53.9 130.1 53.9h16c49.1 0 95.3-19.1 130.1-53.9 34.8-34.7 53.9-81 53.9-130.1V184H320v296zM184 352c0 41 26.9 75.8 64 87.6-37.1-11.9-64-46.7-64-87.6zm364 382.5C665 721.8 758.4 630.2 773.8 514 758.3 630.2 665 721.7 548 734.5zM250.2 514C265.6 630.2 359 721.8 476 734.5 359 721.7 265.7 630.2 250.2 514z"], [e, "M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 0 0-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 0 0-44-44zM248 439.6a91.99 91.99 0 0 1-64-87.6V232h64v207.6zM704 480c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z"])
		})), t.UpCircleTwoTone = u("up-circle", l, (function(e, t) {
			return i(r, [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm178 479h-46.9c-10.2 0-19.9-4.9-25.9-13.2L512 460.4 406.8 605.8c-6 8.3-15.6 13.2-25.9 13.2H334c-6.5 0-10.3-7.4-6.5-12.7l178-246c3.2-4.4 9.7-4.4 12.9 0l178 246c3.9 5.3.1 12.7-6.4 12.7z"], [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [e, "M518.4 360.3a7.95 7.95 0 0 0-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7h46.9c10.3 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.7 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.4-12.7l-178-246z"])
		})), t.ThunderboltTwoTone = u("thunderbolt", l, (function(e, t) {
			return i(r, [t, "M695.4 164.1H470.8L281.2 491.5h157.4l-60.3 241 319.8-305.1h-211z"], [e, "M848.1 359.3H627.8L825.9 109c4.1-5.3.4-13-6.3-13H436.1c-2.8 0-5.5 1.5-6.9 4L170.1 547.5c-3.1 5.3.7 12 6.9 12h174.4L262 917.1c-1.9 7.8 7.5 13.3 13.3 7.7L853.6 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.3 732.5l60.3-241H281.2l189.6-327.4h224.6L487.1 427.4h211L378.3 732.5z"])
		})), t.UpSquareTwoTone = u("up-square", l, (function(e, t) {
			return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"], [t, "M184 840h656V184H184v656zm143.5-228.7l178-246c3.2-4.4 9.7-4.4 12.9 0l178 246c3.9 5.3.1 12.7-6.4 12.7h-46.9c-10.2 0-19.9-4.9-25.9-13.2L512 465.4 406.8 610.8c-6 8.3-15.6 13.2-25.9 13.2H334c-6.5 0-10.3-7.4-6.5-12.7z"], [e, "M334 624h46.9c10.3 0 19.9-4.9 25.9-13.2L512 465.4l105.2 145.4c6 8.3 15.7 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.4-12.7l-178-246a7.95 7.95 0 0 0-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7z"])
		})), t.UsbTwoTone = u("usb", l, (function(e, t) {
			return i(r, [t, "M759.9 504H264.1c-26.5 0-48.1 19.7-48.1 44v292h592V548c0-24.3-21.6-44-48.1-44z"], [e, "M456 248h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm160 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"], [e, "M760 432V144c0-17.7-14.3-32-32-32H296c-17.7 0-32 14.3-32 32v288c-66.2 0-120 52.1-120 116v356c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8V548c0-63.9-53.8-116-120-116zM336 184h352v248H336V184zm472 656H216V548c0-24.3 21.6-44 48.1-44h495.8c26.5 0 48.1 19.7 48.1 44v292z"])
		})), t.VideoCameraTwoTone = u("video-camera", l, (function(e, t) {
			return i(r, [t, "M136 792h576V232H136v560zm64-488c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H208c-4.4 0-8-3.6-8-8v-48z"], [e, "M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226z"], [e, "M208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"])
		})), t.WalletTwoTone = u("wallet", l, (function(e, t) {
			return i(r, [e, "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0-192H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200H184V184h656v200z"], [t, "M528 576h312V448H528v128zm92-104c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z"], [e, "M580 512a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"], [t, "M184 840h656V640H496c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32h344V184H184v656z"])
		})), t.WarningTwoTone = u("warning", l, (function(e, t) {
			return i(r, [e, "M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"], [t, "M172.2 828.1h679.6L512 239.9 172.2 828.1zM560 720a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm-16-304v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8z"], [e, "M464 720a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8z"])
		})), t.CiTwoTone = u("ci", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm-63.5 522.8c49.3 0 82.8-29.4 87-72.4.4-4.1 3.8-7.3 8-7.3h52.7c2.4 0 4.4 2 4.4 4.4 0 77.4-64.3 132.5-152.3 132.5C345.4 720 286 651.4 286 537.4v-49C286 373.5 345.4 304 448.3 304c88.3 0 152.3 56.9 152.3 138.1 0 2.4-2 4.4-4.4 4.4h-52.6c-4.2 0-7.6-3.2-8-7.4-3.9-46.1-37.5-77.6-87-77.6-61.1 0-95.6 45.4-95.7 126.8v49.3c0 80.3 34.5 125.2 95.6 125.2zM738 704.1c0 4.4-3.6 8-8 8h-50.4c-4.4 0-8-3.6-8-8V319.9c0-4.4 3.6-8 8-8H730c4.4 0 8 3.6 8 8v384.2z"], [e, "M730 311.9h-50.4c-4.4 0-8 3.6-8 8v384.2c0 4.4 3.6 8 8 8H730c4.4 0 8-3.6 8-8V319.9c0-4.4-3.6-8-8-8zm-281.4 49.6c49.5 0 83.1 31.5 87 77.6.4 4.2 3.8 7.4 8 7.4h52.6c2.4 0 4.4-2 4.4-4.4 0-81.2-64-138.1-152.3-138.1C345.4 304 286 373.5 286 488.4v49c0 114 59.4 182.6 162.3 182.6 88 0 152.3-55.1 152.3-132.5 0-2.4-2-4.4-4.4-4.4h-52.7c-4.2 0-7.6 3.2-8 7.3-4.2 43-37.7 72.4-87 72.4-61.1 0-95.6-44.9-95.6-125.2v-49.3c.1-81.4 34.6-126.8 95.7-126.8z"])
		})), t.CopyrightTwoTone = u("copyright", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm5.5 533c52.9 0 88.8-31.7 93-77.8.4-4.1 3.8-7.3 8-7.3h56.8c2.6 0 4.7 2.1 4.7 4.7 0 82.6-68.7 141.4-162.7 141.4C407.4 734 344 660.8 344 539.1v-52.3C344 364.2 407.4 290 517.3 290c94.3 0 162.7 60.7 162.7 147.4 0 2.6-2.1 4.7-4.7 4.7h-56.7c-4.2 0-7.7-3.2-8-7.4-4-49.6-40-83.4-93-83.4-65.2 0-102.1 48.5-102.2 135.5v52.6c0 85.7 36.8 133.6 102.1 133.6z"], [e, "M517.6 351.3c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"])
		})), t.DollarTwoTone = u("dollar", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M426.6 410.3c0 25.4 15.7 45.1 49.5 57.3 4.7 1.9 9.4 3.4 15 5v-124c-37 4.7-64.5 25.4-64.5 61.7zm116.5 135.2c-2.9-.6-5.7-1.3-8.8-2.2V677c42.6-3.8 72-27.3 72-66.4 0-30.7-15.9-50.7-63.2-65.1z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm22.4 589.2l.2 31.7c0 4.5-3.6 8.1-8 8.1h-28.4c-4.4 0-8-3.6-8-8v-31.4c-89-6.5-130.7-57.1-135.2-112.1-.4-4.7 3.3-8.7 8-8.7h46.2c3.9 0 7.3 2.8 7.9 6.6 5.1 31.8 29.9 55.4 74.1 61.3V534l-24.7-6.3c-52.3-12.5-102.1-45.1-102.1-112.7 0-73 55.4-112.1 126.2-119v-33c0-4.4 3.6-8 8-8h28.1c4.4 0 8 3.6 8 8v32.7c68.5 6.9 119.8 46.9 125.9 109.2a8.1 8.1 0 0 1-8 8.8h-44.9c-4 0-7.4-2.9-7.9-6.9-4-29.2-27.5-53-65.5-58.2v134.3l25.4 5.9c64.8 16 108.9 47 109 116.4 0 75.2-56 117.1-134.3 124z"], [e, "M559.7 488.8l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"])
		})), t.EuroTwoTone = u("euro", l, (function(e, t) {
			return i(r, [e, "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"], [t, "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm117.1 581.1c0 3.8-2.7 7-6.4 7.8-15.9 3.4-34.4 5.1-55.3 5.1-109.8 0-183-58.8-200.2-158H337c-4.4 0-8-3.6-8-8v-27.2c0-4.4 3.6-8 8-8h26.1v-36.9c0-4.4 0-8.7.3-12.8H337c-4.4 0-8-3.6-8-8v-27.2c0-4.4 3.6-8 8-8h31.8C388.5 345.7 460.7 290 567.4 290c20.9 0 39.4 1.9 55.3 5.4 3.7.8 6.3 4 6.3 7.8V346a8 8 0 0 1-9.6 7.8c-14.6-2.9-31.8-4.4-51.7-4.4-65.3 0-110.4 33.5-127.6 90.4h128.3c4.4 0 8 3.6 8 8V475c0 4.4-3.6 8-8 8H432.5c-.3 4.4-.3 9.1-.3 13.8v36h136.4c4.4 0 8 3.6 8 8V568c0 4.4-3.6 8-8 8H438c15.3 62 61.3 98.6 129.8 98.6 19.9 0 37.1-1.3 51.8-4.1 4.9-1 9.5 2.8 9.5 7.8v42.8z"], [e, "M619.6 670.5c-14.7 2.8-31.9 4.1-51.8 4.1-68.5 0-114.5-36.6-129.8-98.6h130.6c4.4 0 8-3.6 8-8v-27.2c0-4.4-3.6-8-8-8H432.2v-36c0-4.7 0-9.4.3-13.8h135.9c4.4 0 8-3.6 8-8v-27.2c0-4.4-3.6-8-8-8H440.1c17.2-56.9 62.3-90.4 127.6-90.4 19.9 0 37.1 1.5 51.7 4.4a8 8 0 0 0 9.6-7.8v-42.8c0-3.8-2.6-7-6.3-7.8-15.9-3.5-34.4-5.4-55.3-5.4-106.7 0-178.9 55.7-198.6 149.9H337c-4.4 0-8 3.6-8 8v27.2c0 4.4 3.6 8 8 8h26.4c-.3 4.1-.3 8.4-.3 12.8v36.9H337c-4.4 0-8 3.6-8 8V568c0 4.4 3.6 8 8 8h30.2c17.2 99.2 90.4 158 200.2 158 20.9 0 39.4-1.7 55.3-5.1 3.7-.8 6.4-4 6.4-7.8v-42.8c0-5-4.6-8.8-9.5-7.8z"])
		})), t.GoldTwoTone = u("gold", l, (function(e, t) {
			return i(r, [e, "M435.7 558.7c-.6-3.9-4-6.7-7.9-6.7H166.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248zM196.5 748l20.7-128h159.5l20.7 128H196.5zm709.4 58.7l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H596.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.3-.7 7.3-4.8 6.6-9.2zM626.5 748l20.7-128h159.5l20.7 128H626.5zM342 472h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H382.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8zm91.2-196h159.5l20.7 128h-201l20.8-128z"], [t, "M592.7 276H433.2l-20.8 128h201zM217.2 620l-20.7 128h200.9l-20.7-128zm430 0l-20.7 128h200.9l-20.7-128z"])
		})), t.CanlendarTwoTone = u("canlendar", l, (function(e, t) {
			return i(r, [t, "M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v136h656V256H712v48z"], [e, "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zm0-448H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136z"])
		}))
	}, function(e, t, n) {
		"use strict";
		var c = this && this.__importDefault || function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = c(n(230));

		function a(e, t, n) {
			var c;
			return (c = Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n ? Math.round(e.h) - 2 * t : Math.round(e.h) + 2 * t : n ? Math.round(e.h) + 2 * t : Math.round(e.h) - 2 * t) < 0 ? c += 360 : c >= 360 && (c -= 360), c
		}

		function o(e, t, n) {
			return 0 === e.h && 0 === e.s ? e.s : ((c = n ? Math.round(100 * e.s) - 16 * t : 4 === t ? Math.round(100 * e.s) + 16 : Math.round(100 * e.s) + 5 * t) > 100 && (c = 100), n && 5 === t && c > 10 && (c = 10), c < 6 && (c = 6), c);
			var c
		}

		function l(e, t, n) {
			return n ? Math.round(100 * e.v) + 5 * t : Math.round(100 * e.v) - 15 * t
		}
		t.default = function(e) {
			for (var t = [], n = r.default(e), c = 5; c > 0; c -= 1) {
				var i = n.toHsv(),
					u = r.default({
						h: a(i, c, !0),
						s: o(i, c, !0),
						v: l(i, c, !0)
					}).toHexString();
				t.push(u)
			}
			for (t.push(n.toHexString()), c = 1; c <= 4; c += 1) {
				i = n.toHsv(), u = r.default({
					h: a(i, c),
					s: o(i, c),
					v: l(i, c)
				}).toHexString();
				t.push(u)
			}
			return t
		}
	}, function(e, t, n) {
		var c;
		! function(r) {
			var a = /^\s+/,
				o = /\s+$/,
				l = 0,
				i = r.round,
				u = r.min,
				s = r.max,
				h = r.random;

			function f(e, t) {
				if (t = t || {}, (e = e || "") instanceof f) return e;
				if (!(this instanceof f)) return new f(e, t);
				var n = function(e) {
					var t = {
							r: 0,
							g: 0,
							b: 0
						},
						n = 1,
						c = null,
						l = null,
						i = null,
						h = !1,
						f = !1;
					"string" == typeof e && (e = function(e) {
						e = e.replace(a, "").replace(o, "").toLowerCase();
						var t, n = !1;
						if (T[e]) e = T[e], n = !0;
						else if ("transparent" == e) return {
							r: 0,
							g: 0,
							b: 0,
							a: 0,
							format: "name"
						};
						if (t = R.rgb.exec(e)) return {
							r: t[1],
							g: t[2],
							b: t[3]
						};
						if (t = R.rgba.exec(e)) return {
							r: t[1],
							g: t[2],
							b: t[3],
							a: t[4]
						};
						if (t = R.hsl.exec(e)) return {
							h: t[1],
							s: t[2],
							l: t[3]
						};
						if (t = R.hsla.exec(e)) return {
							h: t[1],
							s: t[2],
							l: t[3],
							a: t[4]
						};
						if (t = R.hsv.exec(e)) return {
							h: t[1],
							s: t[2],
							v: t[3]
						};
						if (t = R.hsva.exec(e)) return {
							h: t[1],
							s: t[2],
							v: t[3],
							a: t[4]
						};
						if (t = R.hex8.exec(e)) return {
							r: F(t[1]),
							g: F(t[2]),
							b: F(t[3]),
							a: N(t[4]),
							format: n ? "name" : "hex8"
						};
						if (t = R.hex6.exec(e)) return {
							r: F(t[1]),
							g: F(t[2]),
							b: F(t[3]),
							format: n ? "name" : "hex"
						};
						if (t = R.hex4.exec(e)) return {
							r: F(t[1] + "" + t[1]),
							g: F(t[2] + "" + t[2]),
							b: F(t[3] + "" + t[3]),
							a: N(t[4] + "" + t[4]),
							format: n ? "name" : "hex8"
						};
						if (t = R.hex3.exec(e)) return {
							r: F(t[1] + "" + t[1]),
							g: F(t[2] + "" + t[2]),
							b: F(t[3] + "" + t[3]),
							format: n ? "name" : "hex"
						};
						return !1
					}(e));
					"object" == typeof e && (I(e.r) && I(e.g) && I(e.b) ? (v = e.r, d = e.g, p = e.b, t = {
						r: 255 * E(v, 255),
						g: 255 * E(d, 255),
						b: 255 * E(p, 255)
					}, h = !0, f = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : I(e.h) && I(e.s) && I(e.v) ? (c = j(e.s), l = j(e.v), t = function(e, t, n) {
						e = 6 * E(e, 360), t = E(t, 100), n = E(n, 100);
						var c = r.floor(e),
							a = e - c,
							o = n * (1 - t),
							l = n * (1 - a * t),
							i = n * (1 - (1 - a) * t),
							u = c % 6;
						return {
							r: 255 * [n, l, o, o, i, n][u],
							g: 255 * [i, n, n, l, o, o][u],
							b: 255 * [o, o, i, n, n, l][u]
						}
					}(e.h, c, l), h = !0, f = "hsv") : I(e.h) && I(e.s) && I(e.l) && (c = j(e.s), i = j(e.l), t = function(e, t, n) {
						var c, r, a;

						function o(e, t, n) {
							return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
						}
						if (e = E(e, 360), t = E(t, 100), n = E(n, 100), 0 === t) c = r = a = n;
						else {
							var l = n < .5 ? n * (1 + t) : n + t - n * t,
								i = 2 * n - l;
							c = o(i, l, e + 1 / 3), r = o(i, l, e), a = o(i, l, e - 1 / 3)
						}
						return {
							r: 255 * c,
							g: 255 * r,
							b: 255 * a
						}
					}(e.h, c, i), h = !0, f = "hsl"), e.hasOwnProperty("a") && (n = e.a));
					var v, d, p;
					return n = x(n), {
						ok: h,
						format: e.format || f,
						r: u(255, s(t.r, 0)),
						g: u(255, s(t.g, 0)),
						b: u(255, s(t.b, 0)),
						a: n
					}
				}(e);
				this._originalInput = e, this._r = n.r, this._g = n.g, this._b = n.b, this._a = n.a, this._roundA = i(100 * this._a) / 100, this._format = t.format || n.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = i(this._r)), this._g < 1 && (this._g = i(this._g)), this._b < 1 && (this._b = i(this._b)), this._ok = n.ok, this._tc_id = l++
			}

			function v(e, t, n) {
				e = E(e, 255), t = E(t, 255), n = E(n, 255);
				var c, r, a = s(e, t, n),
					o = u(e, t, n),
					l = (a + o) / 2;
				if (a == o) c = r = 0;
				else {
					var i = a - o;
					switch (r = l > .5 ? i / (2 - a - o) : i / (a + o), a) {
						case e:
							c = (t - n) / i + (t < n ? 6 : 0);
							break;
						case t:
							c = (n - e) / i + 2;
							break;
						case n:
							c = (e - t) / i + 4
					}
					c /= 6
				}
				return {
					h: c,
					s: r,
					l: l
				}
			}

			function d(e, t, n) {
				e = E(e, 255), t = E(t, 255), n = E(n, 255);
				var c, r, a = s(e, t, n),
					o = u(e, t, n),
					l = a,
					i = a - o;
				if (r = 0 === a ? 0 : i / a, a == o) c = 0;
				else {
					switch (a) {
						case e:
							c = (t - n) / i + (t < n ? 6 : 0);
							break;
						case t:
							c = (n - e) / i + 2;
							break;
						case n:
							c = (e - t) / i + 4
					}
					c /= 6
				}
				return {
					h: c,
					s: r,
					v: l
				}
			}

			function p(e, t, n, c) {
				var r = [A(i(e).toString(16)), A(i(t).toString(16)), A(i(n).toString(16))];
				return c && r[0].charAt(0) == r[0].charAt(1) && r[1].charAt(0) == r[1].charAt(1) && r[2].charAt(0) == r[2].charAt(1) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("")
			}

			function m(e, t, n, c) {
				return [A(D(c)), A(i(e).toString(16)), A(i(t).toString(16)), A(i(n).toString(16))].join("")
			}

			function z(e, t) {
				t = 0 === t ? 0 : t || 10;
				var n = f(e).toHsl();
				return n.s -= t / 100, n.s = P(n.s), f(n)
			}

			function y(e, t) {
				t = 0 === t ? 0 : t || 10;
				var n = f(e).toHsl();
				return n.s += t / 100, n.s = P(n.s), f(n)
			}

			function g(e) {
				return f(e).desaturate(100)
			}

			function M(e, t) {
				t = 0 === t ? 0 : t || 10;
				var n = f(e).toHsl();
				return n.l += t / 100, n.l = P(n.l), f(n)
			}

			function b(e, t) {
				t = 0 === t ? 0 : t || 10;
				var n = f(e).toRgb();
				return n.r = s(0, u(255, n.r - i(-t / 100 * 255))), n.g = s(0, u(255, n.g - i(-t / 100 * 255))), n.b = s(0, u(255, n.b - i(-t / 100 * 255))), f(n)
			}

			function H(e, t) {
				t = 0 === t ? 0 : t || 10;
				var n = f(e).toHsl();
				return n.l -= t / 100, n.l = P(n.l), f(n)
			}

			function V(e, t) {
				var n = f(e).toHsl(),
					c = (n.h + t) % 360;
				return n.h = c < 0 ? 360 + c : c, f(n)
			}

			function w(e) {
				var t = f(e).toHsl();
				return t.h = (t.h + 180) % 360, f(t)
			}

			function _(e) {
				var t = f(e).toHsl(),
					n = t.h;
				return [f(e), f({
					h: (n + 120) % 360,
					s: t.s,
					l: t.l
				}), f({
					h: (n + 240) % 360,
					s: t.s,
					l: t.l
				})]
			}

			function C(e) {
				var t = f(e).toHsl(),
					n = t.h;
				return [f(e), f({
					h: (n + 90) % 360,
					s: t.s,
					l: t.l
				}), f({
					h: (n + 180) % 360,
					s: t.s,
					l: t.l
				}), f({
					h: (n + 270) % 360,
					s: t.s,
					l: t.l
				})]
			}

			function O(e) {
				var t = f(e).toHsl(),
					n = t.h;
				return [f(e), f({
					h: (n + 72) % 360,
					s: t.s,
					l: t.l
				}), f({
					h: (n + 216) % 360,
					s: t.s,
					l: t.l
				})]
			}

			function S(e, t, n) {
				t = t || 6, n = n || 30;
				var c = f(e).toHsl(),
					r = 360 / n,
					a = [f(e)];
				for (c.h = (c.h - (r * t >> 1) + 720) % 360; --t;) c.h = (c.h + r) % 360, a.push(f(c));
				return a
			}

			function L(e, t) {
				t = t || 6;
				for (var n = f(e).toHsv(), c = n.h, r = n.s, a = n.v, o = [], l = 1 / t; t--;) o.push(f({
					h: c,
					s: r,
					v: a
				})), a = (a + l) % 1;
				return o
			}
			f.prototype = {
				isDark: function() {
					return this.getBrightness() < 128
				},
				isLight: function() {
					return !this.isDark()
				},
				isValid: function() {
					return this._ok
				},
				getOriginalInput: function() {
					return this._originalInput
				},
				getFormat: function() {
					return this._format
				},
				getAlpha: function() {
					return this._a
				},
				getBrightness: function() {
					var e = this.toRgb();
					return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
				},
				getLuminance: function() {
					var e, t, n, c = this.toRgb();
					return e = c.r / 255, t = c.g / 255, n = c.b / 255, .2126 * (e <= .03928 ? e / 12.92 : r.pow((e + .055) / 1.055, 2.4)) + .7152 * (t <= .03928 ? t / 12.92 : r.pow((t + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : r.pow((n + .055) / 1.055, 2.4))
				},
				setAlpha: function(e) {
					return this._a = x(e), this._roundA = i(100 * this._a) / 100, this
				},
				toHsv: function() {
					var e = d(this._r, this._g, this._b);
					return {
						h: 360 * e.h,
						s: e.s,
						v: e.v,
						a: this._a
					}
				},
				toHsvString: function() {
					var e = d(this._r, this._g, this._b),
						t = i(360 * e.h),
						n = i(100 * e.s),
						c = i(100 * e.v);
					return 1 == this._a ? "hsv(" + t + ", " + n + "%, " + c + "%)" : "hsva(" + t + ", " + n + "%, " + c + "%, " + this._roundA + ")"
				},
				toHsl: function() {
					var e = v(this._r, this._g, this._b);
					return {
						h: 360 * e.h,
						s: e.s,
						l: e.l,
						a: this._a
					}
				},
				toHslString: function() {
					var e = v(this._r, this._g, this._b),
						t = i(360 * e.h),
						n = i(100 * e.s),
						c = i(100 * e.l);
					return 1 == this._a ? "hsl(" + t + ", " + n + "%, " + c + "%)" : "hsla(" + t + ", " + n + "%, " + c + "%, " + this._roundA + ")"
				},
				toHex: function(e) {
					return p(this._r, this._g, this._b, e)
				},
				toHexString: function(e) {
					return "#" + this.toHex(e)
				},
				toHex8: function(e) {
					return function(e, t, n, c, r) {
						var a = [A(i(e).toString(16)), A(i(t).toString(16)), A(i(n).toString(16)), A(D(c))];
						if (r && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1)) return a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0);
						return a.join("")
					}(this._r, this._g, this._b, this._a, e)
				},
				toHex8String: function(e) {
					return "#" + this.toHex8(e)
				},
				toRgb: function() {
					return {
						r: i(this._r),
						g: i(this._g),
						b: i(this._b),
						a: this._a
					}
				},
				toRgbString: function() {
					return 1 == this._a ? "rgb(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ")" : "rgba(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ", " + this._roundA + ")"
				},
				toPercentageRgb: function() {
					return {
						r: i(100 * E(this._r, 255)) + "%",
						g: i(100 * E(this._g, 255)) + "%",
						b: i(100 * E(this._b, 255)) + "%",
						a: this._a
					}
				},
				toPercentageRgbString: function() {
					return 1 == this._a ? "rgb(" + i(100 * E(this._r, 255)) + "%, " + i(100 * E(this._g, 255)) + "%, " + i(100 * E(this._b, 255)) + "%)" : "rgba(" + i(100 * E(this._r, 255)) + "%, " + i(100 * E(this._g, 255)) + "%, " + i(100 * E(this._b, 255)) + "%, " + this._roundA + ")"
				},
				toName: function() {
					return 0 === this._a ? "transparent" : !(this._a < 1) && (k[p(this._r, this._g, this._b, !0)] || !1)
				},
				toFilter: function(e) {
					var t = "#" + m(this._r, this._g, this._b, this._a),
						n = t,
						c = this._gradientType ? "GradientType = 1, " : "";
					if (e) {
						var r = f(e);
						n = "#" + m(r._r, r._g, r._b, r._a)
					}
					return "progid:DXImageTransform.Microsoft.gradient(" + c + "startColorstr=" + t + ",endColorstr=" + n + ")"
				},
				toString: function(e) {
					var t = !!e;
					e = e || this._format;
					var n = !1,
						c = this._a < 1 && this._a >= 0;
					return t || !c || "hex" !== e && "hex6" !== e && "hex3" !== e && "hex4" !== e && "hex8" !== e && "name" !== e ? ("rgb" === e && (n = this.toRgbString()), "prgb" === e && (n = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (n = this.toHexString()), "hex3" === e && (n = this.toHexString(!0)), "hex4" === e && (n = this.toHex8String(!0)), "hex8" === e && (n = this.toHex8String()), "name" === e && (n = this.toName()), "hsl" === e && (n = this.toHslString()), "hsv" === e && (n = this.toHsvString()), n || this.toHexString()) : "name" === e && 0 === this._a ? this.toName() : this.toRgbString()
				},
				clone: function() {
					return f(this.toString())
				},
				_applyModification: function(e, t) {
					var n = e.apply(null, [this].concat([].slice.call(t)));
					return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this
				},
				lighten: function() {
					return this._applyModification(M, arguments)
				},
				brighten: function() {
					return this._applyModification(b, arguments)
				},
				darken: function() {
					return this._applyModification(H, arguments)
				},
				desaturate: function() {
					return this._applyModification(z, arguments)
				},
				saturate: function() {
					return this._applyModification(y, arguments)
				},
				greyscale: function() {
					return this._applyModification(g, arguments)
				},
				spin: function() {
					return this._applyModification(V, arguments)
				},
				_applyCombination: function(e, t) {
					return e.apply(null, [this].concat([].slice.call(t)))
				},
				analogous: function() {
					return this._applyCombination(S, arguments)
				},
				complement: function() {
					return this._applyCombination(w, arguments)
				},
				monochromatic: function() {
					return this._applyCombination(L, arguments)
				},
				splitcomplement: function() {
					return this._applyCombination(O, arguments)
				},
				triad: function() {
					return this._applyCombination(_, arguments)
				},
				tetrad: function() {
					return this._applyCombination(C, arguments)
				}
			}, f.fromRatio = function(e, t) {
				if ("object" == typeof e) {
					var n = {};
					for (var c in e) e.hasOwnProperty(c) && (n[c] = "a" === c ? e[c] : j(e[c]));
					e = n
				}
				return f(e, t)
			}, f.equals = function(e, t) {
				return !(!e || !t) && f(e).toRgbString() == f(t).toRgbString()
			}, f.random = function() {
				return f.fromRatio({
					r: h(),
					g: h(),
					b: h()
				})
			}, f.mix = function(e, t, n) {
				n = 0 === n ? 0 : n || 50;
				var c = f(e).toRgb(),
					r = f(t).toRgb(),
					a = n / 100;
				return f({
					r: (r.r - c.r) * a + c.r,
					g: (r.g - c.g) * a + c.g,
					b: (r.b - c.b) * a + c.b,
					a: (r.a - c.a) * a + c.a
				})
			}, f.readability = function(e, t) {
				var n = f(e),
					c = f(t);
				return (r.max(n.getLuminance(), c.getLuminance()) + .05) / (r.min(n.getLuminance(), c.getLuminance()) + .05)
			}, f.isReadable = function(e, t, n) {
				var c, r, a = f.readability(e, t);
				switch (r = !1, (c = function(e) {
					var t, n;
					t = ((e = e || {
						level: "AA",
						size: "small"
					}).level || "AA").toUpperCase(), n = (e.size || "small").toLowerCase(), "AA" !== t && "AAA" !== t && (t = "AA");
					"small" !== n && "large" !== n && (n = "small");
					return {
						level: t,
						size: n
					}
				}(n)).level + c.size) {
					case "AAsmall":
					case "AAAlarge":
						r = a >= 4.5;
						break;
					case "AAlarge":
						r = a >= 3;
						break;
					case "AAAsmall":
						r = a >= 7
				}
				return r
			}, f.mostReadable = function(e, t, n) {
				var c, r, a, o, l = null,
					i = 0;
				r = (n = n || {}).includeFallbackColors, a = n.level, o = n.size;
				for (var u = 0; u < t.length; u++)(c = f.readability(e, t[u])) > i && (i = c, l = f(t[u]));
				return f.isReadable(e, l, {
					level: a,
					size: o
				}) || !r ? l : (n.includeFallbackColors = !1, f.mostReadable(e, ["#fff", "#000"], n))
			};
			var T = f.names = {
					aliceblue: "f0f8ff",
					antiquewhite: "faebd7",
					aqua: "0ff",
					aquamarine: "7fffd4",
					azure: "f0ffff",
					beige: "f5f5dc",
					bisque: "ffe4c4",
					black: "000",
					blanchedalmond: "ffebcd",
					blue: "00f",
					blueviolet: "8a2be2",
					brown: "a52a2a",
					burlywood: "deb887",
					burntsienna: "ea7e5d",
					cadetblue: "5f9ea0",
					chartreuse: "7fff00",
					chocolate: "d2691e",
					coral: "ff7f50",
					cornflowerblue: "6495ed",
					cornsilk: "fff8dc",
					crimson: "dc143c",
					cyan: "0ff",
					darkblue: "00008b",
					darkcyan: "008b8b",
					darkgoldenrod: "b8860b",
					darkgray: "a9a9a9",
					darkgreen: "006400",
					darkgrey: "a9a9a9",
					darkkhaki: "bdb76b",
					darkmagenta: "8b008b",
					darkolivegreen: "556b2f",
					darkorange: "ff8c00",
					darkorchid: "9932cc",
					darkred: "8b0000",
					darksalmon: "e9967a",
					darkseagreen: "8fbc8f",
					darkslateblue: "483d8b",
					darkslategray: "2f4f4f",
					darkslategrey: "2f4f4f",
					darkturquoise: "00ced1",
					darkviolet: "9400d3",
					deeppink: "ff1493",
					deepskyblue: "00bfff",
					dimgray: "696969",
					dimgrey: "696969",
					dodgerblue: "1e90ff",
					firebrick: "b22222",
					floralwhite: "fffaf0",
					forestgreen: "228b22",
					fuchsia: "f0f",
					gainsboro: "dcdcdc",
					ghostwhite: "f8f8ff",
					gold: "ffd700",
					goldenrod: "daa520",
					gray: "808080",
					green: "008000",
					greenyellow: "adff2f",
					grey: "808080",
					honeydew: "f0fff0",
					hotpink: "ff69b4",
					indianred: "cd5c5c",
					indigo: "4b0082",
					ivory: "fffff0",
					khaki: "f0e68c",
					lavender: "e6e6fa",
					lavenderblush: "fff0f5",
					lawngreen: "7cfc00",
					lemonchiffon: "fffacd",
					lightblue: "add8e6",
					lightcoral: "f08080",
					lightcyan: "e0ffff",
					lightgoldenrodyellow: "fafad2",
					lightgray: "d3d3d3",
					lightgreen: "90ee90",
					lightgrey: "d3d3d3",
					lightpink: "ffb6c1",
					lightsalmon: "ffa07a",
					lightseagreen: "20b2aa",
					lightskyblue: "87cefa",
					lightslategray: "789",
					lightslategrey: "789",
					lightsteelblue: "b0c4de",
					lightyellow: "ffffe0",
					lime: "0f0",
					limegreen: "32cd32",
					linen: "faf0e6",
					magenta: "f0f",
					maroon: "800000",
					mediumaquamarine: "66cdaa",
					mediumblue: "0000cd",
					mediumorchid: "ba55d3",
					mediumpurple: "9370db",
					mediumseagreen: "3cb371",
					mediumslateblue: "7b68ee",
					mediumspringgreen: "00fa9a",
					mediumturquoise: "48d1cc",
					mediumvioletred: "c71585",
					midnightblue: "191970",
					mintcream: "f5fffa",
					mistyrose: "ffe4e1",
					moccasin: "ffe4b5",
					navajowhite: "ffdead",
					navy: "000080",
					oldlace: "fdf5e6",
					olive: "808000",
					olivedrab: "6b8e23",
					orange: "ffa500",
					orangered: "ff4500",
					orchid: "da70d6",
					palegoldenrod: "eee8aa",
					palegreen: "98fb98",
					paleturquoise: "afeeee",
					palevioletred: "db7093",
					papayawhip: "ffefd5",
					peachpuff: "ffdab9",
					peru: "cd853f",
					pink: "ffc0cb",
					plum: "dda0dd",
					powderblue: "b0e0e6",
					purple: "800080",
					rebeccapurple: "663399",
					red: "f00",
					rosybrown: "bc8f8f",
					royalblue: "4169e1",
					saddlebrown: "8b4513",
					salmon: "fa8072",
					sandybrown: "f4a460",
					seagreen: "2e8b57",
					seashell: "fff5ee",
					sienna: "a0522d",
					silver: "c0c0c0",
					skyblue: "87ceeb",
					slateblue: "6a5acd",
					slategray: "708090",
					slategrey: "708090",
					snow: "fffafa",
					springgreen: "00ff7f",
					steelblue: "4682b4",
					tan: "d2b48c",
					teal: "008080",
					thistle: "d8bfd8",
					tomato: "ff6347",
					turquoise: "40e0d0",
					violet: "ee82ee",
					wheat: "f5deb3",
					white: "fff",
					whitesmoke: "f5f5f5",
					yellow: "ff0",
					yellowgreen: "9acd32"
				},
				k = f.hexNames = function(e) {
					var t = {};
					for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
					return t
				}(T);

			function x(e) {
				return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
			}

			function E(e, t) {
				(function(e) {
					return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
				})(e) && (e = "100%");
				var n = function(e) {
					return "string" === typeof e && -1 != e.indexOf("%")
				}(e);
				return e = u(t, s(0, parseFloat(e))), n && (e = parseInt(e * t, 10) / 100), r.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t)
			}

			function P(e) {
				return u(1, s(0, e))
			}

			function F(e) {
				return parseInt(e, 16)
			}

			function A(e) {
				return 1 == e.length ? "0" + e : "" + e
			}

			function j(e) {
				return e <= 1 && (e = 100 * e + "%"), e
			}

			function D(e) {
				return r.round(255 * parseFloat(e)).toString(16)
			}

			function N(e) {
				return F(e) / 255
			}
			var R = function() {
				var e = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
					t = "[\\s|\\(]+(" + e + ")[,|\\s]+(" + e + ")[,|\\s]+(" + e + ")\\s*\\)?",
					n = "[\\s|\\(]+(" + e + ")[,|\\s]+(" + e + ")[,|\\s]+(" + e + ")[,|\\s]+(" + e + ")\\s*\\)?";
				return {
					CSS_UNIT: new RegExp(e),
					rgb: new RegExp("rgb" + t),
					rgba: new RegExp("rgba" + n),
					hsl: new RegExp("hsl" + t),
					hsla: new RegExp("hsla" + n),
					hsv: new RegExp("hsv" + t),
					hsva: new RegExp("hsva" + n),
					hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
					hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
					hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
					hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
				}
			}();

			function I(e) {
				return !!R.CSS_UNIT.exec(e)
			}
			e.exports ? e.exports = f : void 0 === (c = function() {
				return f
			}.call(t, n, t, e)) || (e.exports = c)
		}(Math)
	}, function(e, t, n) {
		"use strict";

		function c(e) {
			return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				t = e.scriptUrl,
				n = e.extraCommonProps,
				c = void 0 === n ? {} : n;
			if ("undefined" !== typeof document && "undefined" !== typeof window && "function" === typeof document.createElement && "string" === typeof t && t.length && !s.has(t)) {
				var r = document.createElement("script");
				r.setAttribute("src", t), r.setAttribute("data-namespace", t), s.add(t), document.body.appendChild(r)
			}
			var l = function(e) {
				var t = e.type,
					n = e.children,
					r = u(e, ["type", "children"]),
					l = null;
				return e.type && (l = a.createElement("use", {
					xlinkHref: "#".concat(t)
				})), n && (l = n), a.createElement(o.default, i({}, c, r), l)
			};
			return l.displayName = "Iconfont", l
		};
		var r, a = function(e) {
				if (e && e.__esModule) return e;
				if (null === e || "object" !== c(e) && "function" !== typeof e) return {
					default: e
				};
				var t = l();
				if (t && t.has(e)) return t.get(e);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in e)
					if (Object.prototype.hasOwnProperty.call(e, a)) {
						var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
						o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
					}
				n.default = e, t && t.set(e, n);
				return n
			}(n(0)),
			o = (r = n(65)) && r.__esModule ? r : {
				default: r
			};

		function l() {
			if ("function" !== typeof WeakMap) return null;
			var e = new WeakMap;
			return l = function() {
				return e
			}, e
		}

		function i() {
			return (i = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c])
				}
				return e
			}).apply(this, arguments)
		}
		var u = function(e, t) {
				var n = {};
				for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && t.indexOf(c) < 0 && (n[c] = e[c]);
				if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (c = Object.getOwnPropertySymbols(e); r < c.length; r++) t.indexOf(c[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, c[r]) && (n[c[r]] = e[c[r]])
				}
				return n
			},
			s = new Set
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.getThemeFromTypeName = function(e) {
			var t = null;
			a.test(e) ? t = "filled" : o.test(e) ? t = "outlined" : l.test(e) && (t = "twoTone");
			return t
		}, t.removeTypeTheme = function(e) {
			return e.replace(a, "").replace(o, "").replace(l, "")
		}, t.withThemeSuffix = function(e, t) {
			var n = e;
			"filled" === t ? n += "-fill" : "outlined" === t ? n += "-o" : "twoTone" === t ? n += "-twotone" : (0, r.default)(!1, "Icon", "This icon '".concat(e, "' has unknown theme '").concat(t, "'"));
			return n
		}, t.alias = function(e) {
			var t = e;
			switch (e) {
				case "cross":
					t = "close";
					break;
				case "interation":
					t = "interaction";
					break;
				case "canlendar":
					t = "calendar";
					break;
				case "colum-height":
					t = "column-height"
			}
			return (0, r.default)(t === e, "Icon", "Icon '".concat(e, "' was a typo and is now deprecated, please use '").concat(t, "' instead.")), t
		}, t.svgBaseProps = void 0;
		var c, r = (c = n(33)) && c.__esModule ? c : {
			default: c
		};
		t.svgBaseProps = {
			width: "1em",
			height: "1em",
			fill: "currentColor",
			"aria-hidden": !0,
			focusable: "false"
		};
		var a = /-fill$/,
			o = /-o$/,
			l = /-twotone$/
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.setTwoToneColor = function(e) {
			return r.default.setTwoToneColors({
				primaryColor: e
			})
		}, t.getTwoToneColor = function() {
			return r.default.getTwoToneColors().primaryColor
		};
		var c, r = (c = n(102)) && c.__esModule ? c : {
			default: c
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = t.isFlexSupported = void 0;
		var c = function(e) {
				if ("undefined" !== typeof window && window.document && window.document.documentElement) {
					var t = Array.isArray(e) ? e : [e],
						n = window.document.documentElement;
					return t.some((function(e) {
						return e in n.style
					}))
				}
				return !1
			},
			r = c(["flex", "webkitFlex", "Flex", "msFlex"]);
		t.isFlexSupported = r;
		var a = c;
		t.default = a
	}, function(e, t, n) {
		"use strict";
		n.r(t);
		var c = n(3),
			r = n.n(c),
			a = n(2),
			o = n.n(a),
			l = n(19),
			i = n.n(l),
			u = n(5),
			s = n.n(u),
			h = n(6),
			f = n.n(h),
			v = n(7),
			d = n.n(v),
			p = n(8),
			m = n.n(p),
			z = n(0),
			y = n.n(z),
			g = n(1),
			M = n.n(g),
			b = n(4),
			H = n.n(b),
			V = n(49),
			w = n.n(V);

		function _() {
			var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
			null !== e && void 0 !== e && this.setState(e)
		}

		function C(e) {
			this.setState(function(t) {
				var n = this.constructor.getDerivedStateFromProps(e, t);
				return null !== n && void 0 !== n ? n : null
			}.bind(this))
		}

		function O(e, t) {
			try {
				var n = this.props,
					c = this.state;
				this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, c)
			} finally {
				this.props = n, this.state = c
			}
		}
		_.__suppressDeprecationWarning = !0, C.__suppressDeprecationWarning = !0, O.__suppressDeprecationWarning = !0;
		var S = 37,
			L = 38,
			T = 39,
			k = 40;

		function x(e) {
			var t = [];
			return y.a.Children.forEach(e, (function(e) {
				e && t.push(e)
			})), t
		}

		function E(e) {
			return "left" === e || "right" === e
		}

		function P(e) {
			return Object.keys(e).reduce((function(t, n) {
				return "aria-" !== n.substr(0, 5) && "data-" !== n.substr(0, 5) && "role" !== n || (t[n] = e[n]), t
			}), {})
		}
		var F = {
				MAC_ENTER: 3,
				BACKSPACE: 8,
				TAB: 9,
				NUM_CENTER: 12,
				ENTER: 13,
				SHIFT: 16,
				CTRL: 17,
				ALT: 18,
				PAUSE: 19,
				CAPS_LOCK: 20,
				ESC: 27,
				SPACE: 32,
				PAGE_UP: 33,
				PAGE_DOWN: 34,
				END: 35,
				HOME: 36,
				LEFT: 37,
				UP: 38,
				RIGHT: 39,
				DOWN: 40,
				PRINT_SCREEN: 44,
				INSERT: 45,
				DELETE: 46,
				ZERO: 48,
				ONE: 49,
				TWO: 50,
				THREE: 51,
				FOUR: 52,
				FIVE: 53,
				SIX: 54,
				SEVEN: 55,
				EIGHT: 56,
				NINE: 57,
				QUESTION_MARK: 63,
				A: 65,
				B: 66,
				C: 67,
				D: 68,
				E: 69,
				F: 70,
				G: 71,
				H: 72,
				I: 73,
				J: 74,
				K: 75,
				L: 76,
				M: 77,
				N: 78,
				O: 79,
				P: 80,
				Q: 81,
				R: 82,
				S: 83,
				T: 84,
				U: 85,
				V: 86,
				W: 87,
				X: 88,
				Y: 89,
				Z: 90,
				META: 91,
				WIN_KEY_RIGHT: 92,
				CONTEXT_MENU: 93,
				NUM_ZERO: 96,
				NUM_ONE: 97,
				NUM_TWO: 98,
				NUM_THREE: 99,
				NUM_FOUR: 100,
				NUM_FIVE: 101,
				NUM_SIX: 102,
				NUM_SEVEN: 103,
				NUM_EIGHT: 104,
				NUM_NINE: 105,
				NUM_MULTIPLY: 106,
				NUM_PLUS: 107,
				NUM_MINUS: 109,
				NUM_PERIOD: 110,
				NUM_DIVISION: 111,
				F1: 112,
				F2: 113,
				F3: 114,
				F4: 115,
				F5: 116,
				F6: 117,
				F7: 118,
				F8: 119,
				F9: 120,
				F10: 121,
				F11: 122,
				F12: 123,
				NUMLOCK: 144,
				SEMICOLON: 186,
				DASH: 189,
				EQUALS: 187,
				COMMA: 188,
				PERIOD: 190,
				SLASH: 191,
				APOSTROPHE: 192,
				SINGLE_QUOTE: 222,
				OPEN_SQUARE_BRACKET: 219,
				BACKSLASH: 220,
				CLOSE_SQUARE_BRACKET: 221,
				WIN_KEY: 224,
				MAC_FF_META: 224,
				WIN_IME: 229,
				isTextModifyingKeyEvent: function(e) {
					var t = e.keyCode;
					if (e.altKey && !e.ctrlKey || e.metaKey || t >= F.F1 && t <= F.F12) return !1;
					switch (t) {
						case F.ALT:
						case F.CAPS_LOCK:
						case F.CONTEXT_MENU:
						case F.CTRL:
						case F.DOWN:
						case F.END:
						case F.ESC:
						case F.HOME:
						case F.INSERT:
						case F.LEFT:
						case F.MAC_FF_META:
						case F.META:
						case F.NUMLOCK:
						case F.NUM_CENTER:
						case F.PAGE_DOWN:
						case F.PAGE_UP:
						case F.PAUSE:
						case F.PRINT_SCREEN:
						case F.RIGHT:
						case F.SHIFT:
						case F.UP:
						case F.WIN_KEY:
						case F.WIN_KEY_RIGHT:
							return !1;
						default:
							return !0
					}
				},
				isCharacterKey: function(e) {
					if (e >= F.ZERO && e <= F.NINE) return !0;
					if (e >= F.NUM_ZERO && e <= F.NUM_MULTIPLY) return !0;
					if (e >= F.A && e <= F.Z) return !0;
					if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e) return !0;
					switch (e) {
						case F.SPACE:
						case F.QUESTION_MARK:
						case F.NUM_PLUS:
						case F.NUM_MINUS:
						case F.NUM_PERIOD:
						case F.NUM_DIVISION:
						case F.SEMICOLON:
						case F.DASH:
						case F.EQUALS:
						case F.COMMA:
						case F.PERIOD:
						case F.SLASH:
						case F.APOSTROPHE:
						case F.SINGLE_QUOTE:
						case F.OPEN_SQUARE_BRACKET:
						case F.BACKSLASH:
						case F.CLOSE_SQUARE_BRACKET:
							return !0;
						default:
							return !1
					}
				}
			},
			A = F,
			j = n(46),
			D = n.n(j)()({}),
			N = D.Provider,
			R = D.Consumer,
			I = {
				width: 0,
				height: 0,
				overflow: "hidden",
				position: "absolute"
			},
			U = function(e) {
				function t() {
					var e, n, c, r;
					s()(this, t);
					for (var a = arguments.length, o = Array(a), l = 0; l < a; l++) o[l] = arguments[l];
					return n = c = d()(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), c.onKeyDown = function(e) {
						var t = e.target,
							n = e.which,
							r = e.shiftKey,
							a = c.props,
							o = a.nextElement,
							l = a.prevElement;
						n === A.TAB && document.activeElement === t && (!r && o && o.focus(), r && l && l.focus())
					}, r = n, d()(c, r)
				}
				return m()(t, e), f()(t, [{
					key: "render",
					value: function() {
						var e = this.props.setRef;
						return y.a.createElement("div", {
							tabIndex: 0,
							ref: e,
							style: I,
							onKeyDown: this.onKeyDown,
							role: "presentation"
						})
					}
				}]), t
			}(y.a.Component);
		U.propTypes = {
			setRef: M.a.func,
			prevElement: M.a.object,
			nextElement: M.a.object
		};
		var W = U,
			Y = function(e) {
				function t() {
					return s()(this, t), d()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
				}
				return m()(t, e), f()(t, [{
					key: "render",
					value: function() {
						var e, t = this.props,
							n = t.id,
							c = t.className,
							a = t.destroyInactiveTabPane,
							l = t.active,
							u = t.forceRender,
							s = t.rootPrefixCls,
							h = t.style,
							f = t.children,
							v = t.placeholder,
							d = i()(t, ["id", "className", "destroyInactiveTabPane", "active", "forceRender", "rootPrefixCls", "style", "children", "placeholder"]);
						this._isActived = this._isActived || l;
						var p = s + "-tabpane",
							m = H()((e = {}, o()(e, p, 1), o()(e, p + "-inactive", !l), o()(e, p + "-active", l), o()(e, c, c), e)),
							z = (a ? l : this._isActived) || u;
						return y.a.createElement(R, null, (function(e) {
							var t = e.sentinelStart,
								c = e.sentinelEnd,
								a = e.setPanelSentinelStart,
								o = e.setPanelSentinelEnd,
								i = void 0,
								u = void 0;
							return l && z && (i = y.a.createElement(W, {
								setRef: a,
								prevElement: t
							}), u = y.a.createElement(W, {
								setRef: o,
								nextElement: c
							})), y.a.createElement("div", r()({
								style: h,
								role: "tabpanel",
								"aria-hidden": l ? "false" : "true",
								className: m,
								id: n
							}, P(d)), i, z ? f : v, u)
						}))
					}
				}]), t
			}(y.a.Component),
			B = Y;

		function q(e) {
			var t = void 0;
			return y.a.Children.forEach(e.children, (function(e) {
				!e || t || e.props.disabled || (t = e.key)
			})), t
		}
		Y.propTypes = {
			className: M.a.string,
			active: M.a.bool,
			style: M.a.any,
			destroyInactiveTabPane: M.a.bool,
			forceRender: M.a.bool,
			placeholder: M.a.node,
			rootPrefixCls: M.a.string,
			children: M.a.node,
			id: M.a.string
		}, Y.defaultProps = {
			placeholder: null
		};
		var G = function(e) {
				function t(e) {
					s()(this, t);
					var n = d()(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					K.call(n);
					var c = void 0;
					return c = "activeKey" in e ? e.activeKey : "defaultActiveKey" in e ? e.defaultActiveKey : q(e), n.state = {
						activeKey: c
					}, n
				}
				return m()(t, e), f()(t, [{
					key: "componentWillUnmount",
					value: function() {
						this.destroy = !0, w.a.cancel(this.sentinelId)
					}
				}, {
					key: "updateSentinelContext",
					value: function() {
						var e = this;
						this.destroy || (w.a.cancel(this.sentinelId), this.sentinelId = w()((function() {
							e.destroy || e.forceUpdate()
						})))
					}
				}, {
					key: "render",
					value: function() {
						var e, t = this.props,
							n = t.prefixCls,
							c = t.navWrapper,
							a = t.tabBarPosition,
							l = t.className,
							u = t.renderTabContent,
							s = t.renderTabBar,
							h = t.destroyInactiveTabPane,
							f = t.direction,
							v = i()(t, ["prefixCls", "navWrapper", "tabBarPosition", "className", "renderTabContent", "renderTabBar", "destroyInactiveTabPane", "direction"]),
							d = H()((e = {}, o()(e, n, 1), o()(e, n + "-" + a, 1), o()(e, l, !!l), o()(e, n + "-rtl", "rtl" === f), e));
						this.tabBar = s();
						var p = y.a.cloneElement(this.tabBar, {
								prefixCls: n,
								navWrapper: c,
								key: "tabBar",
								onKeyDown: this.onNavKeyDown,
								tabBarPosition: a,
								onTabClick: this.onTabClick,
								panels: t.children,
								activeKey: this.state.activeKey,
								direction: this.props.direction
							}),
							m = y.a.cloneElement(u(), {
								prefixCls: n,
								tabBarPosition: a,
								activeKey: this.state.activeKey,
								destroyInactiveTabPane: h,
								children: t.children,
								onChange: this.setActiveKey,
								key: "tabContent",
								direction: this.props.direction
							}),
							z = y.a.createElement(W, {
								key: "sentinelStart",
								setRef: this.setSentinelStart,
								nextElement: this.panelSentinelStart
							}),
							g = y.a.createElement(W, {
								key: "sentinelEnd",
								setRef: this.setSentinelEnd,
								prevElement: this.panelSentinelEnd
							}),
							M = [];
						return "bottom" === a ? M.push(z, m, g, p) : M.push(p, z, m, g), y.a.createElement(N, {
							value: {
								sentinelStart: this.sentinelStart,
								sentinelEnd: this.sentinelEnd,
								setPanelSentinelStart: this.setPanelSentinelStart,
								setPanelSentinelEnd: this.setPanelSentinelEnd
							}
						}, y.a.createElement("div", r()({
							className: d,
							style: t.style
						}, P(v), {
							onScroll: this.onScroll
						}), M))
					}
				}], [{
					key: "getDerivedStateFromProps",
					value: function(e, t) {
						var n = {};
						return "activeKey" in e ? n.activeKey = e.activeKey : function(e, t) {
							return y.a.Children.map(e.children, (function(e) {
								return e && e.key
							})).indexOf(t) >= 0
						}(e, t.activeKey) || (n.activeKey = q(e)), Object.keys(n).length > 0 ? n : null
					}
				}]), t
			}(y.a.Component),
			K = function() {
				var e = this;
				this.onTabClick = function(t, n) {
					e.tabBar.props.onTabClick && e.tabBar.props.onTabClick(t, n), e.setActiveKey(t)
				}, this.onNavKeyDown = function(t) {
					var n = t.keyCode;
					if (n === T || n === k) {
						t.preventDefault();
						var c = e.getNextActiveKey(!0);
						e.onTabClick(c)
					} else if (n === S || n === L) {
						t.preventDefault();
						var r = e.getNextActiveKey(!1);
						e.onTabClick(r)
					}
				}, this.onScroll = function(e) {
					var t = e.target;
					t === e.currentTarget && t.scrollLeft > 0 && (t.scrollLeft = 0)
				}, this.setSentinelStart = function(t) {
					e.sentinelStart = t
				}, this.setSentinelEnd = function(t) {
					e.sentinelEnd = t
				}, this.setPanelSentinelStart = function(t) {
					t !== e.panelSentinelStart && e.updateSentinelContext(), e.panelSentinelStart = t
				}, this.setPanelSentinelEnd = function(t) {
					t !== e.panelSentinelEnd && e.updateSentinelContext(), e.panelSentinelEnd = t
				}, this.setActiveKey = function(t) {
					e.state.activeKey !== t && ("activeKey" in e.props || e.setState({
						activeKey: t
					}), e.props.onChange(t))
				}, this.getNextActiveKey = function(t) {
					var n = e.state.activeKey,
						c = [];
					y.a.Children.forEach(e.props.children, (function(e) {
						e && !e.props.disabled && (t ? c.push(e) : c.unshift(e))
					}));
					var r = c.length,
						a = r && c[0].key;
					return c.forEach((function(e, t) {
						e.key === n && (a = t === r - 1 ? c[0].key : c[t + 1].key)
					})), a
				}
			};
		G.propTypes = {
				destroyInactiveTabPane: M.a.bool,
				renderTabBar: M.a.func.isRequired,
				renderTabContent: M.a.func.isRequired,
				navWrapper: M.a.func,
				onChange: M.a.func,
				children: M.a.node,
				prefixCls: M.a.string,
				className: M.a.string,
				tabBarPosition: M.a.string,
				style: M.a.object,
				activeKey: M.a.string,
				defaultActiveKey: M.a.string,
				direction: M.a.string
			}, G.defaultProps = {
				prefixCls: "rc-tabs",
				destroyInactiveTabPane: !1,
				onChange: function() {},
				navWrapper: function(e) {
					return e
				},
				tabBarPosition: "top",
				children: null,
				style: {},
				direction: "ltr"
			}, G.TabPane = B,
			function(e) {
				var t = e.prototype;
				if (!t || !t.isReactComponent) throw new Error("Can only polyfill class components");
				if ("function" !== typeof e.getDerivedStateFromProps && "function" !== typeof t.getSnapshotBeforeUpdate) return e;
				var n = null,
					c = null,
					r = null;
				if ("function" === typeof t.componentWillMount ? n = "componentWillMount" : "function" === typeof t.UNSAFE_componentWillMount && (n = "UNSAFE_componentWillMount"), "function" === typeof t.componentWillReceiveProps ? c = "componentWillReceiveProps" : "function" === typeof t.UNSAFE_componentWillReceiveProps && (c = "UNSAFE_componentWillReceiveProps"), "function" === typeof t.componentWillUpdate ? r = "componentWillUpdate" : "function" === typeof t.UNSAFE_componentWillUpdate && (r = "UNSAFE_componentWillUpdate"), null !== n || null !== c || null !== r) {
					var a = e.displayName || e.name,
						o = "function" === typeof e.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
					throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + a + " uses " + o + " but also contains the following legacy lifecycles:" + (null !== n ? "\n  " + n : "") + (null !== c ? "\n  " + c : "") + (null !== r ? "\n  " + r : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")
				}
				if ("function" === typeof e.getDerivedStateFromProps && (t.componentWillMount = _, t.componentWillReceiveProps = C), "function" === typeof t.getSnapshotBeforeUpdate) {
					if ("function" !== typeof t.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
					t.componentWillUpdate = O;
					var l = t.componentDidUpdate;
					t.componentDidUpdate = function(e, t, n) {
						var c = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
						l.call(this, e, t, c)
					}
				}
			}(G);
		var Q = G,
			$ = function(e) {
				function t() {
					return s()(this, t), d()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
				}
				return m()(t, e), f()(t, [{
					key: "getTabPanes",
					value: function() {
						var e = this.props,
							t = e.activeKey,
							n = e.children,
							c = [];
						return y.a.Children.forEach(n, (function(n) {
							if (n) {
								var r = n.key,
									a = t === r;
								c.push(y.a.cloneElement(n, {
									active: a,
									destroyInactiveTabPane: e.destroyInactiveTabPane,
									rootPrefixCls: e.prefixCls
								}))
							}
						})), c
					}
				}, {
					key: "render",
					value: function() {
						var e, t, n = this.props,
							c = n.prefixCls,
							a = n.children,
							l = n.activeKey,
							i = n.className,
							u = n.tabBarPosition,
							s = n.animated,
							h = n.animatedWithMargin,
							f = n.direction,
							v = n.style,
							d = H()((e = {}, o()(e, c + "-content", !0), o()(e, s ? c + "-content-animated" : c + "-content-no-animated", !0), e), i);
						if (s) {
							var p = function(e, t) {
								for (var n = x(e), c = 0; c < n.length; c++)
									if (n[c].key === t) return c;
								return -1
							}(a, l);
							if (-1 !== p) {
								var m = h ? function(e, t) {
									var n = E(t) ? "marginTop" : "marginLeft";
									return o()({}, n, 100 * -e + "%")
								}(p, u) : {
									transform: t = function(e, t) {
										var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ltr",
											c = E(t) ? "translateY" : "translateX";
										return E(t) || "rtl" !== n ? c + "(" + 100 * -e + "%) translateZ(0)" : c + "(" + 100 * e + "%) translateZ(0)"
									}(p, u, f),
									WebkitTransform: t,
									MozTransform: t
								};
								v = r()({}, v, m)
							} else v = r()({}, v, {
								display: "none"
							})
						}
						return y.a.createElement("div", {
							className: d,
							style: v
						}, this.getTabPanes())
					}
				}]), t
			}(y.a.Component),
			Z = $;
		$.propTypes = {
			animated: M.a.bool,
			animatedWithMargin: M.a.bool,
			prefixCls: M.a.string,
			children: M.a.node,
			activeKey: M.a.string,
			style: M.a.any,
			tabBarPosition: M.a.string,
			className: M.a.string,
			destroyInactiveTabPane: M.a.bool,
			direction: M.a.string
		}, $.defaultProps = {
			animated: !0
		}, n.d(t, "TabPane", (function() {
			return B
		})), n.d(t, "TabContent", (function() {
			return Z
		}));
		t.default = Q
	}]
]);
//# sourceMappingURL=2.0c901bbd.chunk.js.map