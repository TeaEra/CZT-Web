/*! TenVideoPlayer_V2 - v2.0.0 - 2014-09-22 17:00:14
 * Copyright (c) 2014
 * Powered by Tencent-Video Web Front End Team
 */
! function(global) {
    ! function(a) {
        String.prototype.trim === a && (String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, "")
        }), Array.prototype.reduce === a && (Array.prototype.reduce = function(b) {
            if (void 0 === this || null === this) throw new TypeError;
            var c, d = Object(this),
                e = d.length >>> 0,
                f = 0;
            if ("function" != typeof b) throw new TypeError;
            if (0 == e && 1 == arguments.length) throw new TypeError;
            if (arguments.length >= 2) c = arguments[1];
            else
                for (;;) {
                    if (f in d) {
                        c = d[f++];
                        break
                    }
                    if (++f >= e) throw new TypeError
                }
            for (; e > f;) f in d && (c = b.call(a, c, d[f], f, d)), f++;
            return c
        }), Array.prototype.forEach || (Array.prototype.forEach = function(a, b) {
            var c, d;
            if (null == this) throw new TypeError("this is null or not defined");
            var e = Object(this),
                f = e.length >>> 0;
            if ("[object Function]" !== {}.toString.call(a)) throw new TypeError(a + " is not a function");
            for (b && (c = b), d = 0; f > d;) {
                var g;
                Object.prototype.hasOwnProperty.call(e, d) && (g = e[d], a.call(c, g, d, e)), d++
            }
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
            var b = this.length >>> 0,
                c = Number(arguments[1]) || 0;
            for (c = 0 > c ? Math.ceil(c) : Math.floor(c), 0 > c && (c += b); b > c; c++)
                if (c in this && this[c] === a) return c;
            return -1
        })
    }();
    var Zepto = function() {
        function a(a) {
            return null == a ? String(a) : W[X.call(a)] || "object"
        }

        function b(b) {
            return "function" == a(b)
        }

        function c(a) {
            return null != a && a == a.window
        }

        function d(a) {
            return null != a && a.nodeType == a.DOCUMENT_NODE
        }

        function e(b) {
            return "object" == a(b)
        }

        function f(a) {
            if (!a || "[object Object]" !== a.toString() || a.nodeType || a.setInterval) return !1;
            if (a.constructor && !a.hasOwnProperty("constructor") && !a.constructor.prototype.hasOwnProperty("isPrototypeOf")) return !1;
            var b;
            for (b in a);
            return b === w || a.hasOwnProperty(b)
        }

        function g(a) {
            return a instanceof Array
        }

        function h(a) {
            return "number" == typeof a.length
        }

        function i(a) {
            return E.call(a, function(a) {
                return null != a
            })
        }

        function j(a) {
            return a.length > 0 ? y.fn.concat.apply([], a) : a
        }

        function k(a) {
            return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }

        function l(a) {
            return a in H ? H[a] : H[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
        }

        function m(a, b) {
            return "number" != typeof b || J[k(a)] ? b : b + "px"
        }

        function n(a) {
            var b, c;
            return G[a] || (b = F.createElement(a), F.body.appendChild(b), c = I(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), "none" == c && (c = "block"), G[a] = c), G[a]
        }

        function o(a) {
            return "children" in a ? D.call(a.children) : y.map(a.childNodes, function(a) {
                return 1 == a.nodeType ? a : void 0
            })
        }

        function p(a, b, c) {
            for (x in b) c && (f(b[x]) || g(b[x])) ? (f(b[x]) && !f(a[x]) && (a[x] = {}), g(b[x]) && !g(a[x]) && (a[x] = []), p(a[x], b[x], c)) : b[x] !== w && (a[x] = b[x])
        }

        function q(a, b) {
            return b === w ? y(a) : y(a).filter(b)
        }

        function r(a, c, d, e) {
            return b(c) ? c.call(a, d, e) : c
        }

        function s(a, b, c) {
            null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
        }

        function t(a, b) {
            var c = a.className,
                d = c && c.baseVal !== w;
            return b === w ? d ? c.baseVal : c : void(d ? c.baseVal = b : a.className = b)
        }

        function u(a) {
            var b;
            try {
                return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null : isNaN(b = Number(a)) ? /^[\[\{]/.test(a) ? y.parseJSON(a) : a : b) : a
            } catch (c) {
                return a
            }
        }

        function v(a, b) {
            b(a);
            for (var c in a.childNodes) v(a.childNodes[c], b)
        }
        var w, x, y, z, A, B, C = [],
            D = C.slice,
            E = C.filter,
            F = window.document,
            G = {},
            H = {},
            I = F.defaultView ? F.defaultView.getComputedStyle : F.documentElement.currentStyle,
            J = {
                "column-count": 1,
                columns: 1,
                "font-weight": 1,
                "line-height": 1,
                opacity: 1,
                "z-index": 1,
                zoom: 1
            },
            K = /^\s*<(\w+|!)[^>]*>/,
            L = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            M = /^(?:body|html)$/i,
            N = ["val", "css", "html", "text", "data", "width", "height", "offset"],
            O = ["after", "prepend", "before", "append"],
            P = F.createElement("table"),
            Q = F.createElement("tr"),
            R = {
                tr: F.createElement("tbody"),
                tbody: P,
                thead: P,
                tfoot: P,
                td: Q,
                th: Q,
                "*": F.createElement("div")
            },
            S = /complete|loaded|interactive/,
            T = /^\.([\w-]+)$/,
            U = /^#([\w-]*)$/,
            V = /^[\w-]+$/,
            W = {},
            X = W.toString,
            Y = {},
            Z = F.createElement("div");
        return Y.matches = function(a, b) {
            if (!a || 1 !== a.nodeType) return !1;
            var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
            if (c) return c.call(a, b);
            var d, e = a.parentNode,
                f = !e;
            return f && (e = Z).appendChild(a), d = ~Y.qsa(e, b).indexOf(a), f && Z.removeChild(a), d
        }, A = function(a) {
            return a.replace(/-+(.)?/g, function(a, b) {
                return b ? b.toUpperCase() : ""
            })
        }, B = function(a) {
            return E.call(a, function(b, c) {
                return a.indexOf(b) == c
            })
        }, Y.fragment = function(a, b, c) {
            a.replace && (a = a.replace(L, "<$1></$2>")), b === w && (b = K.test(a) && RegExp.$1), b in R || (b = "*");
            var d, e, g = R[b];
            return g.innerHTML = "" + a, e = y.each(D.call(g.childNodes), function() {
                g.removeChild(this)
            }), f(c) && (d = y(e), y.each(c, function(a, b) {
                N.indexOf(a) > -1 ? d[a](b) : d.attr(a, b)
            })), e
        }, Y.Z = function(a, b) {
            return a = a || [], a.__proto__ = y.fn, a.selector = b || "", a
        }, Y.isZ = function(a) {
            return a instanceof Y.Z
        }, Y.init = function(a, c) {
            if (a) {
                if (b(a)) return y(F).ready(a);
                if (Y.isZ(a)) return a;
                var d;
                if (g(a)) d = i(a);
                else if (e(a)) d = [f(a) ? y.extend({}, a) : a], a = null;
                else if (K.test(a)) d = Y.fragment(a.trim(), RegExp.$1, c), a = null;
                else {
                    if (c !== w) return y(c).find(a);
                    d = Y.qsa(F, a)
                }
                return Y.Z(d, a)
            }
            return Y.Z()
        }, y = function(a, b) {
            return Y.init(a, b)
        }, y._tvp = !0, y.extend = function(a) {
            var b, c = D.call(arguments, 1);
            return "boolean" == typeof a && (b = a, a = c.shift()), c.forEach(function(c) {
                p(a, c, b)
            }), a
        }, Y.qsa = function(a, b) {
            var c;
            return d(a) && U.test(b) ? (c = a.getElementById(RegExp.$1)) ? [c] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : D.call(T.test(b) ? a.getElementsByClassName(RegExp.$1) : V.test(b) ? a.getElementsByTagName(b) : a.querySelectorAll(b))
        }, y.contains = function(a, b) {
            return a !== b && a.contains(b)
        }, y.type = a, y.isFunction = b, y.isWindow = c, y.isArray = g, y.isPlainObject = f, y.isEmptyObject = function(a) {
            var b;
            for (b in a) return !1;
            return !0
        }, y.inArray = function(a, b, c) {
            return C.indexOf.call(b, a, c)
        }, y.camelCase = A, y.trim = function(a) {
            return a.trim()
        }, y.uuid = 0, y.support = {}, y.expr = {}, y.map = function(a, b) {
            var c, d, e, f = [];
            if (h(a))
                for (d = 0; d < a.length; d++) c = b(a[d], d), null != c && f.push(c);
            else
                for (e in a) c = b(a[e], e), null != c && f.push(c);
            return j(f)
        }, y.each = function(a, b) {
            var c, d;
            if (h(a)) {
                for (c = 0; c < a.length; c++)
                    if (b.call(a[c], c, a[c]) === !1) return a
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) return a; return a
        }, y.grep = function(a, b) {
            return E.call(a, b)
        }, window.JSON && (y.parseJSON = JSON.parse), y.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            W["[object " + b + "]"] = b.toLowerCase()
        }), y.fn = {
            forEach: C.forEach,
            reduce: C.reduce,
            push: C.push,
            sort: C.sort,
            indexOf: C.indexOf,
            concat: C.concat,
            map: function(a) {
                return y(y.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return y(D.apply(this, arguments))
            },
            ready: function(a) {
                return S.test(F.readyState) ? a(y) : F.addEventListener("DOMContentLoaded", function() {
                    a(y)
                }, !1), this
            },
            get: function(a) {
                return a === w ? D.call(this) : this[a >= 0 ? a : a + this.length]
            },
            toArray: function() {
                return this.get()
            },
            size: function() {
                return this.length
            },
            remove: function() {
                return this.each(function() {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function(a) {
                return C.every.call(this, function(b, c) {
                    return a.call(b, c, b) !== !1
                }), this
            },
            filter: function(a) {
                return b(a) ? this.not(this.not(a)) : y(E.call(this, function(b) {
                    return Y.matches(b, a)
                }))
            },
            add: function(a, b) {
                return y(B(this.concat(y(a, b))))
            },
            is: function(a) {
                return this.length > 0 && Y.matches(this[0], a)
            },
            not: function(a) {
                var c = [];
                if (b(a) && a.call !== w) this.each(function(b) {
                    a.call(this, b) || c.push(this)
                });
                else {
                    var d = "string" == typeof a ? this.filter(a) : h(a) && b(a.item) ? D.call(a) : y(a);
                    this.forEach(function(a) {
                        d.indexOf(a) < 0 && c.push(a)
                    })
                }
                return y(c)
            },
            has: function(a) {
                return this.filter(function() {
                    return e(a) ? y.contains(this, a) : y(this).find(a).size()
                })
            },
            eq: function(a) {
                return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
            },
            first: function() {
                var a = this[0];
                return a && !e(a) ? a : y(a)
            },
            last: function() {
                var a = this[this.length - 1];
                return a && !e(a) ? a : y(a)
            },
            find: function(a) {
                var b, c = this;
                return b = "object" == typeof a ? y(a).filter(function() {
                    var a = this;
                    return C.some.call(c, function(b) {
                        return y.contains(b, a)
                    })
                }) : 1 == this.length ? y(Y.qsa(this[0], a)) : this.map(function() {
                    return Y.qsa(this, a)
                })
            },
            closest: function(a, b) {
                var c = this[0],
                    e = !1;
                for ("object" == typeof a && (e = y(a)); c && !(e ? e.indexOf(c) >= 0 : Y.matches(c, a));) c = c !== b && !d(c) && c.parentNode;
                return y(c)
            },
            parents: function(a) {
                for (var b = [], c = this; c.length > 0;) c = y.map(c, function(a) {
                    return (a = a.parentNode) && !d(a) && b.indexOf(a) < 0 ? (b.push(a), a) : void 0
                });
                return q(b, a)
            },
            parent: function(a) {
                return q(B(this.pluck("parentNode")), a)
            },
            children: function(a) {
                return q(this.map(function() {
                    return o(this)
                }), a)
            },
            contents: function() {
                return this.map(function() {
                    return D.call(this.childNodes)
                })
            },
            siblings: function(a) {
                return q(this.map(function(a, b) {
                    return E.call(o(b.parentNode), function(a) {
                        return a !== b
                    })
                }), a)
            },
            empty: function() {
                return this.each(function() {
                    this.innerHTML = ""
                })
            },
            pluck: function(a) {
                return y.map(this, function(b) {
                    return b[a]
                })
            },
            show: function() {
                return this.each(function() {
                    "none" == this.style.display && (this.style.display = null), "none" == I(this, "").getPropertyValue("display") && (this.style.display = n(this.nodeName))
                })
            },
            replaceWith: function(a) {
                return this.before(a).remove()
            },
            wrap: function(a) {
                var c = b(a);
                if (this[0] && !c) var d = y(a).get(0),
                    e = d.parentNode || this.length > 1;
                return this.each(function(b) {
                    y(this).wrapAll(c ? a.call(this, b) : e ? d.cloneNode(!0) : d)
                })
            },
            wrapAll: function(a) {
                if (this[0]) {
                    y(this[0]).before(a = y(a));
                    for (var b;
                         (b = a.children()).length;) a = b.first();
                    y(a).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                var c = b(a);
                return this.each(function(b) {
                    var d = y(this),
                        e = d.contents(),
                        f = c ? a.call(this, b) : a;
                    e.length ? e.wrapAll(f) : d.append(f)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    y(this).replaceWith(y(this).children())
                }), this
            },
            clone: function() {
                return this.map(function() {
                    return this.cloneNode(!0)
                })
            },
            hide: function() {
                return this.css("display", "none")
            },
            toggle: function(a) {
                return this.each(function() {
                    var b = y(this);
                    (a === w ? "none" == b.css("display") : a) ? b.show(): b.hide()
                })
            },
            prev: function(a) {
                return y(this.pluck("previousElementSibling")).filter(a || "*")
            },
            next: function(a) {
                return y(this.pluck("nextElementSibling")).filter(a || "*")
            },
            html: function(a) {
                return a === w ? this.length > 0 ? this[0].innerHTML : null : this.each(function(b) {
                    var c = this.innerHTML;
                    y(this).empty().append(r(this, a, b, c))
                })
            },
            text: function(a) {
                return a === w ? this.length > 0 ? this[0].textContent : null : this.each(function() {
                    this.textContent = a
                })
            },
            attr: function(a, b) {
                var c;
                return "string" == typeof a && b === w ? 0 == this.length || 1 !== this[0].nodeType ? w : "value" == a && "INPUT" == this[0].nodeName ? this.val() : !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : c : this.each(function(c) {
                    if (1 === this.nodeType)
                        if (e(a))
                            for (x in a) s(this, x, a[x]);
                        else s(this, a, r(this, b, c, this.getAttribute(a)))
                })
            },
            removeAttr: function(a) {
                return this.each(function() {
                    1 === this.nodeType && s(this, a)
                })
            },
            prop: function(a, b) {
                return b === w ? this[0] && this[0][a] : this.each(function(c) {
                    this[a] = r(this, b, c, this[a])
                })
            },
            data: function(a, b) {
                var c = this.attr("data-" + k(a), b);
                return null !== c ? u(c) : w
            },
            val: function(a) {
                return a === w ? this[0] && (this[0].multiple ? y(this[0]).find("option").filter(function() {
                    return this.selected
                }).pluck("value") : this[0].value) : this.each(function(b) {
                    this.value = r(this, a, b, this.value)
                })
            },
            offset: function(a) {
                if (a) return this.each(function(b) {
                    var c = y(this),
                        d = r(this, a, b, c.offset()),
                        e = c.offsetParent().offset(),
                        f = {
                            top: d.top - e.top,
                            left: d.left - e.left
                        };
                    "static" == c.css("position") && (f.position = "relative"), c.css(f)
                });
                if (0 == this.length) return null;
                var b = this[0].getBoundingClientRect();
                return {
                    left: b.left + window.pageXOffset,
                    top: b.top + window.pageYOffset,
                    width: Math.round(b.width),
                    height: Math.round(b.height)
                }
            },
            css: function(b, c) {
                if (arguments.length < 2 && "string" == typeof b) return this[0] && (this[0].style[A(b)] || I(this[0], "").getPropertyValue(b));
                var d = "";
                if ("string" == a(b)) c || 0 === c ? d = k(b) + ":" + m(b, c) : this.each(function() {
                    this.style.removeProperty(k(b))
                });
                else
                    for (x in b) b[x] || 0 === b[x] ? d += k(x) + ":" + m(x, b[x]) + ";" : this.each(function() {
                        this.style.removeProperty(k(x))
                    });
                return this.each(function() {
                    this.style.cssText += ";" + d
                })
            },
            index: function(a) {
                return a ? this.indexOf(y(a)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function(a) {
                return C.some.call(this, function(a) {
                    return this.test(t(a))
                }, l(a))
            },
            addClass: function(a) {
                return this.each(function(b) {
                    z = [];
                    var c = t(this),
                        d = r(this, a, b, c);
                    d.split(/\s+/g).forEach(function(a) {
                        y(this).hasClass(a) || z.push(a)
                    }, this), z.length && t(this, c + (c ? " " : "") + z.join(" "))
                })
            },
            removeClass: function(a) {
                return this.each(function(b) {
                    return a === w ? t(this, "") : (z = t(this), r(this, a, b, z).split(/\s+/g).forEach(function(a) {
                        z = z.replace(l(a), " ")
                    }), void t(this, z.trim()))
                })
            },
            toggleClass: function(a, b) {
                return this.each(function(c) {
                    var d = y(this),
                        e = r(this, a, c, t(this));
                    e.split(/\s+/g).forEach(function(a) {
                        (b === w ? !d.hasClass(a) : b) ? d.addClass(a): d.removeClass(a)
                    })
                })
            },
            scrollTop: function() {
                return this.length ? "scrollTop" in this[0] ? this[0].scrollTop : this[0].scrollY : void 0
            },
            position: function() {
                if (this.length) {
                    var a = this[0],
                        b = this.offsetParent(),
                        c = this.offset(),
                        d = M.test(b[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : b.offset();
                    return c.top -= parseFloat(y(a).css("margin-top")) || 0, c.left -= parseFloat(y(a).css("margin-left")) || 0, d.top += parseFloat(y(b[0]).css("border-top-width")) || 0, d.left += parseFloat(y(b[0]).css("border-left-width")) || 0, {
                        top: c.top - d.top,
                        left: c.left - d.left
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || F.body; a && !M.test(a.nodeName) && "static" == y(a).css("position");) a = a.offsetParent;
                    return a
                })
            }
        }, y.fn.detach = y.fn.remove, ["width", "height"].forEach(function(a) {
            y.fn[a] = function(b) {
                var e, f = this[0],
                    g = a.replace(/./, function(a) {
                        return a[0].toUpperCase()
                    });
                return b === w ? c(f) ? f["inner" + g] : d(f) ? f.documentElement["offset" + g] : (e = this.offset()) && e[a] : this.each(function(c) {
                    f = y(this), f.css(a, r(this, b, c, f[a]()))
                })
            }
        }), O.forEach(function(b, c) {
            var d = c % 2;
            y.fn[b] = function() {
                var b, e, f = y.map(arguments, function(c) {
                        return b = a(c), "object" == b || "array" == b || null == c ? c : Y.fragment(c)
                    }),
                    g = this.length > 1;
                return f.length < 1 ? this : this.each(function(a, b) {
                    e = d ? b : b.parentNode, b = 0 == c ? b.nextSibling : 1 == c ? b.firstChild : 2 == c ? b : null, f.forEach(function(a) {
                        if (g) a = a.cloneNode(!0);
                        else if (!e) return y(a).remove();
                        v(e.insertBefore(a, b), function(a) {
                            null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML)
                        })
                    })
                })
            }, y.fn[d ? b + "To" : "insert" + (c ? "Before" : "After")] = function(a) {
                return y(a)[b](this), this
            }
        }), Y.Z.prototype = y.fn, Y.uniq = B, Y.deserializeValue = u, y.zepto = Y, y
    }();
    "undefined" == typeof global && (window.Zepto = Zepto),
        function(a) {
            function b(a) {
                var b = this.os = {},
                    c = this.browser = {},
                    d = a.match(/WebKit\/([\d.]+)/),
                    e = a.match(/(Android)(\s+|\/)([\d.]+)/),
                    f = a.match(/(iPad).*OS\s([\d_]+)/),
                    g = !f && a.match(/(iPhone\sOS)\s([\d_]+)/),
                    h = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                    i = h && a.match(/TouchPad/),
                    j = a.match(/Kindle\/([\d.]+)/),
                    k = a.match(/Silk\/([\d._]+)/),
                    l = a.match(/(BlackBerry).*Version\/([\d.]+)/),
                    m = a.match(/(BB10).*Version\/([\d.]+)/),
                    n = a.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
                    o = a.match(/PlayBook/),
                    p = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/),
                    q = a.match(/Firefox\/([\d.]+)/);
                (c.webkit = !!d) && (c.version = d[1]), e && (b.android = !0, b.version = e[3]), g && (b.ios = b.iphone = !0, b.version = g[2].replace(/_/g, ".")), f && (b.ios = b.ipad = !0, b.version = f[2].replace(/_/g, ".")), h && (b.webos = !0, b.version = h[2]), i && (b.touchpad = !0), l && (b.blackberry = !0, b.version = l[2]), m && (b.bb10 = !0, b.version = m[2]), n && (b.rimtabletos = !0, b.version = n[2]), o && (c.playbook = !0), j && (b.kindle = !0, b.version = j[1]), k && (c.silk = !0, c.version = k[1]), !k && b.android && a.match(/Kindle Fire/) && (c.silk = !0), p && (c.chrome = !0, c.version = p[1]), q && (c.firefox = !0, c.version = q[1]), b.tablet = !!(f || o || e && !a.match(/Mobile/) || q && a.match(/Tablet/)), b.phone = !(b.tablet || !(e || g || h || l || m || p && a.match(/Android/) || p && a.match(/CriOS\/([\d.]+)/) || q && a.match(/Mobile/)))
            }
            b.call(a, navigator.userAgent), a.__detect = b
        }(Zepto),
        function(a) {
            function b(a) {
                return a._zid || (a._zid = n++)
            }

            function c(a, c, f, g) {
                if (c = d(c), c.ns) var h = e(c.ns);
                return (m[b(a)] || []).filter(function(a) {
                    return !(!a || c.e && a.e != c.e || c.ns && !h.test(a.ns) || f && b(a.fn) !== b(f) || g && a.sel != g)
                })
            }

            function d(a) {
                var b = ("" + a).split(".");
                return {
                    e: b[0],
                    ns: b.slice(1).sort().join(" ")
                }
            }

            function e(a) {
                return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
            }

            function f(b, c, d) {
                "string" != a.type(b) ? a.each(b, d) : b.split(/\s/).forEach(function(a) {
                    d(a, c)
                })
            }

            function g(a, b) {
                return a.del && ("focus" == a.e || "blur" == a.e) || !!b
            }

            function h(a) {
                return p[a] || a
            }

            function i(c, e, i, j, k, l) {
                var n = b(c),
                    o = m[n] || (m[n] = []);
                f(e, i, function(b, e) {
                    var f = d(b);
                    f.fn = e, f.sel = j, f.e in p && (e = function(b) {
                        var c = b.relatedTarget;
                        return !c || c !== this && !a.contains(this, c) ? f.fn.apply(this, arguments) : void 0
                    }), f.del = k && k(e, b);
                    var i = f.del || e;
                    f.proxy = function(a) {
                        var b = i.apply(c, [a].concat(a.data));
                        return b === !1 && (a.preventDefault(), a.stopPropagation()), b
                    }, f.i = o.length, o.push(f), c.addEventListener ? c.addEventListener(h(f.e), f.proxy, g(f, l)) : c.attachEvent("on" + h(f.e), f.proxy, g(f, l))
                })
            }

            function j(a, d, e, i, j) {
                var k = b(a);
                f(d || "", e, function(b, d) {
                    c(a, b, d, i).forEach(function(b) {
                        delete m[k][b.i], a.removeEventListener ? a.removeEventListener(h(b.e), b.proxy, g(b, j)) : a.detachEvent("on" + h(b.e), b.proxy, g(b, j))
                    })
                })
            }

            function k(b) {
                var c, d = {
                    originalEvent: b
                };
                for (c in b) s.test(c) || void 0 === b[c] || (d[c] = b[c]);
                return a.each(t, function(a, c) {
                    d[a] = function() {
                        return this[c] = q, b[a].apply(b, arguments)
                    }, d[c] = r
                }), d
            }

            function l(a) {
                if (!("defaultPrevented" in a)) {
                    a.defaultPrevented = !1;
                    var b = a.preventDefault;
                    a.preventDefault = function() {
                        this.defaultPrevented = !0, b.call(this)
                    }
                }
            }
            var m = (a.zepto.qsa, {}),
                n = 1,
                o = {},
                p = {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                };
            o.click = o.mousedown = o.mouseup = o.mousemove = "MouseEvents", a.event = {
                add: i,
                remove: j
            }, a.proxy = function(c, d) {
                if (a.isFunction(c)) {
                    var e = function() {
                        return c.apply(d, arguments)
                    };
                    return e._zid = b(c), e
                }
                if ("string" == typeof d) return a.proxy(c[d], c);
                throw new TypeError("expected function")
            }, a.fn.bind = function(a, b) {
                return this.each(function() {
                    i(this, a, b)
                })
            }, a.fn.unbind = function(a, b) {
                return this.each(function() {
                    j(this, a, b)
                })
            }, a.fn.one = function(a, b) {
                return this.each(function(c, d) {
                    i(this, a, b, null, function(a, b) {
                        return function() {
                            var c = a.apply(d, arguments);
                            return j(d, b, a), c
                        }
                    })
                })
            };
            var q = function() {
                    return !0
                },
                r = function() {
                    return !1
                },
                s = /^([A-Z]|layer[XY]$)/,
                t = {
                    preventDefault: "isDefaultPrevented",
                    stopImmediatePropagation: "isImmediatePropagationStopped",
                    stopPropagation: "isPropagationStopped"
                };
            a.fn.delegate = function(b, c, d) {
                return this.each(function(e, f) {
                    i(f, c, d, b, function(c) {
                        return function(d) {
                            var e, g = a(d.target).closest(b, f).get(0);
                            return g ? (e = a.extend(k(d), {
                                currentTarget: g,
                                liveFired: f
                            }), c.apply(g, [e].concat([].slice.call(arguments, 1)))) : void 0
                        }
                    })
                })
            }, a.fn.undelegate = function(a, b, c) {
                return this.each(function() {
                    j(this, b, c, a)
                })
            }, a.fn.live = function(b, c) {
                return a(document.body).delegate(this.selector, b, c), this
            }, a.fn.die = function(b, c) {
                return a(document.body).undelegate(this.selector, b, c), this
            }, a.fn.on = function(b, c, d) {
                return !c || a.isFunction(c) ? this.bind(b, c || d) : this.delegate(c, b, d)
            }, a.fn.off = function(b, c, d) {
                return !c || a.isFunction(c) ? this.unbind(b, c || d) : this.undelegate(c, b, d)
            }, a.fn.trigger = function(b, c) {
                return ("string" == typeof b || a.isPlainObject(b)) && (b = a.Event(b)), l(b), b.data = c, this.each(function() {
                    "dispatchEvent" in this && this.dispatchEvent(b)
                })
            }, a.fn.triggerHandler = function(b, d) {
                var e, f;
                return this.each(function(g, h) {
                    e = k("string" == typeof b ? a.Event(b) : b), e.data = d, e.target = h, a.each(c(h, b.type || b), function(a, b) {
                        return f = b.proxy(e), e.isImmediatePropagationStopped() ? !1 : void 0
                    })
                }), f
            }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
                a.fn[b] = function(a) {
                    return a ? this.bind(b, a) : this.trigger(b)
                }
            }), ["focus", "blur"].forEach(function(b) {
                a.fn[b] = function(a) {
                    return a ? this.bind(b, a) : this.each(function() {
                        try {
                            this[b]()
                        } catch (a) {}
                    }), this
                }
            }), a.Event = function(a, b) {
                "string" != typeof a && (b = a, a = b.type);
                var c = document.createEvent(o[a] || "Events"),
                    d = !0;
                if (b)
                    for (var e in b) "bubbles" == e ? d = !!b[e] : c[e] = b[e];
                return c.initEvent(a, d, !0, null, null, null, null, null, null, null, null, null, null, null, null), c.isDefaultPrevented = function() {
                    return this.defaultPrevented
                }, c
            }
        }(Zepto),
        function(a) {
            var b, c, d, e, f, g, h;
            c = function(a, b) {
                b.parentNode.removeChild(b), window[a] = void 0;
                try {
                    delete window[a]
                } catch (c) {}
            }, d = function(a, b) {
                var c, d, e = "";
                for (c in a) a.hasOwnProperty(c) && (c = b ? encodeURIComponent(c) : c, d = b ? encodeURIComponent(a[c]) : a[c], e += c + "=" + d + "&");
                return e.replace(/&$/, "")
            }, e = function() {
                return "cb_" + tvp.$.createGUID(16)
            }, f = function(a, b) {
                "undefined" != typeof a && a(b)
            }, g = function(a, b) {
                "undefined" != typeof a && a(b)
            }, h = function(a) {
                "undefined" != typeof a && a()
            }, b = {}, b.init = function(a) {
                var c;
                for (c in a) a.hasOwnProperty(c) && (b.options[c] = a[c]);
                return !0
            }, b.get = function(a) {
                a = a || {};
                var b = a.url,
                    i = a.callbackParameter || "callback",
                    j = a.data || {},
                    k = document.createElement("script"),
                    l = a.jsonpCallback || e(),
                    m = "?";
                b && (j[i] = l, b.indexOf("?") >= 0 && (m = "&"), b += m + d(j, !0), b = b.replace(/=\?/, "=" + l), window[l] = function(b) {
                    "undefined" == typeof b ? f(a.error, "Invalid JSON data returned") : g(a.success, b), c(l, k), h(a.complete)
                }, k.setAttribute("src", b), document.getElementsByTagName("head")[0].appendChild(k), k.onerror = function() {
                    c(l, k), h(a.complete), f(a.error, "Error while trying to access the URL")
                })
            }, a.ajax = b.get
        }(Zepto),
        function(a) {
            if ("__proto__" in {} || a.extend(a.zepto, {
                Z: function(b, c) {
                    return b = b || [], a.extend(b, a.fn), b.selector = c || "", b.__Z = !0, b
                },
                isZ: function(b) {
                    return "array" === a.type(b) && "__Z" in b
                }
            }), "function" == typeof window.getComputedStyle) try {
                getComputedStyle(void 0)
            } catch (b) {
                var c = window.getComputedStyle;
                window.getComputedStyle = function() {
                    try {
                        return c.apply(window, arguments)
                    } catch (a) {
                        return null
                    }
                }
            }
        }(Zepto);
    var tvp = {};
    tvp.lastModify = "2014-09-22 17:00:11", tvp.ver = "$V2.0Build1732$", tvp.name = "\u817e\u8baf\u89c6\u9891\u7edf\u4e00\u64ad\u653e\u5668";
    var top = window.top;
    if (top != window) try {
        tvp.topurl = top.location.href
    } catch (e) {
        top = window
    }
    tvp.log = function(a) {
        window.console && window.console.log("[" + tvp.log.debugid++ +"] " + a)
    }, tvp.debug = function(a) {
        -1 === tvp.log.isDebug && (tvp.log.isDebug = "true" == tvp.$.getUrlParam("debug") ? 1 : 0), tvp.log.isDebug && tvp.log(a)
    }, tvp.log.isDebug = -1, tvp.log.debugid = 1, tvp.DEVICE = {
        aphone: 1,
        iphone: 2,
        ipad: 3,
        other: 0
    }, tvp.PLATFORM = {
        wechat: 1,
        mqq: 2,
        qqbrowser: 3,
        other: 0
    }, tvp.APPID = {
        wechatPublic: 1e4,
        news: 10001,
        qqmusic: 10007
    }, tvp.ACTION = {
        onVodH5Init: "tvp:vodhtml5:beforeInit",
        onFlashPlayerInited: "tvp:flash:inited"
    },
        function() {
            function a(a) {
                return a instanceof Array
            }
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o = [].slice;
            f = "1.3.2", c = "pending", e = "resolved", d = "rejected", j = function(a, b) {
                return null != a ? a.hasOwnProperty(b) : void 0
            }, l = function(a) {
                return j(a, "length") && j(a, "callee")
            }, i = function(b) {
                return l(b) ? i(Array.prototype.slice.call(b)) : a(b) ? b.reduce(function(b, c) {
                    return a(c) ? b.concat(i(c)) : (b.push(c), b)
                }, []) : [b]
            }, g = function(a, b) {
                return 0 >= a ? b() : function() {
                    return --a < 1 ? b.apply(this, arguments) : void 0
                }
            }, m = function(a, b) {
                return function() {
                    var c;
                    return c = [a].concat(Array.prototype.slice.call(arguments, 0)), b.apply(this, c)
                }
            }, h = function(a, b, c) {
                var d, e, f, g, h;
                for (g = i(a), h = [], e = 0, f = g.length; f > e; e++) d = g[e], h.push(d.call.apply(d, [c].concat(o.call(b))));
                return h
            }, b = function() {
                var a, f, g, j, k, l;
                return l = c, j = [], k = [], a = [], g = {}, this.promise = function(f) {
                    var m, n;
                    return f = f || {}, f.state = function() {
                        return l
                    }, n = function(a, b) {
                        return function() {
                            return l === c && b.push.apply(b, i(arguments)), a() && h(arguments, g), f
                        }
                    }, f.done = n(function() {
                        return l === e
                    }, j), f.fail = n(function() {
                        return l === d
                    }, k), f.always = n(function() {
                        return l !== c
                    }, a), m = function(a, c) {
                        var d, e;
                        return d = new b, e = function(a, b, c) {
                            return a(c ? function() {
                                return b(c.apply(null, i(arguments)))
                            } : function() {
                                return b.apply(null, i(arguments))
                            })
                        }, e(f.done, d.resolve, a), e(f.fail, d.reject, c), d
                    }, f.pipe = m, f.then = m, f
                }, this.promise(this), f = function(b, d, e) {
                    return function() {
                        return l === c && (l = b, g = arguments, h([d, a], g, e)), this
                    }
                }, this.resolve = f(e, j), this.reject = f(d, k), this.resolveWith = function() {
                    var a, b;
                    return b = arguments[0], a = 2 <= arguments.length ? o.call(arguments, 1) : [], f(e, j, b).apply(null, a)
                }, this.rejectWith = function() {
                    var a, b;
                    return b = arguments[0], a = 2 <= arguments.length ? o.call(arguments, 1) : [], f(d, k, b).apply(null, a)
                }, this
            }, n = function() {
                var a, c, d, e, f, h, j, k;
                for (e = new b, c = i(arguments), d = g(c.length, e.resolve), f = 0, j = c.length; j > f; f++) a = c[f], a.done(d);
                for (h = 0, k = c.length; k > h; h++) a = c[h], a.fail(function(a, b) {
                    return e.reject(a, b)
                });
                return e.promise()
            }, k = function(a) {
                return a.Deferred = function() {
                    return new b
                }, a.ajax = m(a.ajax, function(a, c) {
                    var d, e;
                    return null == c && (c = {}), e = new b, d = function(a, b) {
                        return m(a, function() {
                            var a, c;
                            return c = arguments[0], a = 2 <= arguments.length ? o.call(arguments, 1) : [], c && c.apply(null, a), b.apply(null, a)
                        })
                    }, c.success = d(c.success, e.resolve), c.error = d(c.error, e.reject), a(c), e.promise()
                }), a.when = n
            }, "undefined" != typeof exports ? (exports.Deferred = function() {
                return new b
            }, exports.when = n, exports.installInto = k) : (this.Deferred = function() {
                return new b
            }, this.Deferred.when = n, this.Deferred.installInto = k, this.DeferedClass = b)
        }.call(tvp), tvp.Deferred.installInto("undefined" != typeof Zepto ? Zepto : jq),
        function(a) {
            a.param = function(b, c) {
                var d = [];
                for (var e in b)
                    if (!a.isFunction(b[e])) {
                        var f = c ? c + "[" + e + "]" : e,
                            g = b[e];
                        d.push(a.isPlainObject(g) ? a.param(g, f) : f + "=" + encodeURIComponent(g))
                    }
                return d.join("&")
            }
        }(Zepto);
    var _isUseInnerZepto = !1;
    "undefined" != typeof Zepto && Zepto._tvp ? (tvp.$ = Zepto, _isUseInnerZepto = !0) : (tvp.$ = {}, _isUseInnerZepto = !1),
        function() {
            return _isUseInnerZepto ? void 0 : "function" == typeof window.Zepto ? void(tvp.$ = window.Zepto) : "function" == typeof window.jQuery && "function" == typeof window.jQuery.Deferred ? (tvp.$ = window.jQuery, void(!tvp.$.os && "undefined" != typeof Zepto && Zepto.__detect && Zepto.__detect.call(tvp.$, navigator.userAgent))) : void("function" == typeof window.jq && (tvp.$ = window.jq, !tvp.$.os && "undefined" != typeof Zepto && Zepto.__detect && Zepto.__detect.call(tvp.$, navigator.userAgent)))
        }(),
        function() {
            "undefined" == typeof document.DOCUMENT_NODE && (document.DOCUMENT_NODE = 9)
        }(),
        function(a) {
            function b(b) {
                {
                    var c = b.match(/MQQBrowser\/(\d+\.\d+)/i),
                        d = b.match(/QQ\/(\d+\.(\d+)\.(\d+)\.(\d+))/i) || b.match(/V1_AND_SQ_([\d\.]+)/),
                        e = b.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/) || b.match(/MicroMessenger\/((\d+)\.(\d+))/),
                        f = b.match(/Mac\sOS\sX\s(\d+\.\d+)/),
                        g = b.match(/Windows(\s+\w+)?\s+?(\d+\.\d+)/),
                        h = b.match(/MiuiBrowser\/(\d+\.\d+)/i),
                        i = b.match(/MI-ONE/),
                        j = b.match(/MI PAD/),
                        k = b.match(/UCBrowser\/(\d+\.\d+(\.\d+\.\d+)?)/) || b.match(/\sUC\s/),
                        l = b.match(/IEMobile(\/|\s+)(\d+\.\d+)/) || b.match(/WPDesktop/),
                        m = b.match(/(ipod\sOS)\s([\d_]+)/),
                        n = b.match(/Chrome\/(\d+\.\d+)/),
                        o = b.match(/Mozilla.*Linux.*Android.*AppleWebKit.*Mobile Safari/);
                    b.indexOf("HTC") > -1
                }
                if (a.browser = a.browser || {}, a.os = a.os || {}, window.ActiveXObject) {
                    var p = 6;
                    (window.XMLHttpRequest || b.indexOf("MSIE 7.0") > -1) && (p = 7), (window.XDomainRequest || b.indexOf("Trident/4.0") > -1) && (p = 8), b.indexOf("Trident/5.0") > -1 && (p = 9), b.indexOf("Trident/6.0") > -1 && (p = 10), a.browser.ie = !0, a.browser.version = p
                } else b.indexOf("Trident/7.0") > -1 && (a.browser.ie = !0, a.browser.version = 11);
                m && (r.ios = r.ipod = !0, r.version = m[2].replace(/_/g, ".")), g && (this.os.windows = !0, this.os.version = g[2]), f && (this.os.Mac = !0, this.os.version = f[1]), b.indexOf("lepad_hls") > 0 && (this.os.LePad = !0), j && (this.os.MIPAD = !0), c && (this.browser.MQQ = !0, this.browser.version = c[1]), d && (this.browser.MQQClient = !0, this.browser.version = d[1]), e && (this.browser.WeChat = !0, this.browser.version = e[1]), h && (this.browser.MIUI = !0, this.browser.version = h[1]), k && (this.browser.UC = !0, this.browser.version = k[1] || 0 / 0), l && (this.browser.IEMobile = !0, this.browser.version = l[2]), o && (this.browser.AndriodBrowser = !0), i && (this.browser.M1 = !0), n && (this.browser.Chrome = !0, this.browser.version = n[1]), this.os.windows && (this.os.win64 = "undefined" != typeof navigator.platform && "win64" == navigator.platform.toLowerCase() ? !0 : !1);
                var q = {
                    iPad7: "iPad; CPU OS 7",
                    LePad: "lepad_hls",
                    XiaoMi: "MI-ONE",
                    SonyDTV: "SonyDTV",
                    SamSung: "SAMSUNG",
                    HTC: "HTC",
                    VIVO: "vivo"
                };
                for (var r in q) this.os[r] = -1 !== b.indexOf(q[r]);
                a.os.phone = a.os.phone || /windows phone/i.test(b), this.os.getNumVersion = function() {
                    return parseFloat(a.os.version, "10")
                }, this.os.hasTouch = "ontouchstart" in window, this.os.hasTouch && this.os.ios && this.os.getNumVersion() < 6 && (this.os.hasTouch = !1), a.browser.WeChat && a.browser.version < 5 && (this.os.hasTouch = !1), a.extend(a.browser, {
                    getNumVersion: function() {
                        return parseFloat(a.browser.version, "10")
                    },
                    isFFCanOcx: function() {
                        return a.browser.firefox && a.browser.getNumVersion() >= 3 ? !0 : !1
                    },
                    isCanOcx: function() {
                        return !(!a.os.windows || !a.browser.ie && !a.browser.isFFCanOcx() && !a.browser.webkit)
                    },
                    isNotIESupport: function() {
                        return !!a.os.windows && (!!a.browser.webkit || a.browser.isFFCanOcx())
                    }
                }), a.userAgent = {}, a.extend(a.userAgent, a.os), a.extend(a.userAgent, a.browser), a.userAgent.browserVersion = a.browser.version, a.userAgent.osVersion = a.os.version, delete a.userAgent.version
            }
            b.call(a, navigator.userAgent)
        }(tvp.$),
        function($) {
            var extFun = {
                getByID: function(a) {
                    return document.getElementById(a)
                },
                noop: function() {},
                isString: function(a) {
                    return "string" === $.type(a)
                },
                isUndefined: function(a) {
                    return "undefined" === $.type(a)
                },
                now: function() {
                    return (new Date).getTime()
                },
                getISOTimeFormat: function() {
                    var a = new Date,
                        b = a.getFullYear(),
                        c = a.getMonth() + 1,
                        d = a.getDate(),
                        e = a.getHours(),
                        f = a.getMinutes(),
                        g = a.getSeconds();
                    return [
                        [b, 10 > c ? "0" + c : c, 10 > d ? "0" + d : d].join("-"), [10 > e ? "0" + e : e, 10 > f ? "0" + f : f, 10 > g ? "0" + g : g].join(":")
                    ].join(" ")
                },
                formatSeconds: function(a) {
                    a = parseInt(a);
                    var b = parseInt(a / 60),
                        c = b >= 60 ? parseInt(b / 60) : 0,
                        d = a % 60,
                        e = "";
                    return b >= 60 && (b %= 60), c > 0 && (e += 10 > c ? "0" + c : c, e += ":"), e += 10 > b ? "0" + b : b, e += ":", e += 10 > d ? "0" + d : d
                },
                formatSecondsWithText: function(a) {
                    var b = this.formatSeconds(a),
                        c = b.split(":"),
                        d = "";
                    switch (c.length) {
                        case 1:
                            d = c[0] + "\u79d2";
                            break;
                        case 2:
                            d = c[0] + "\u5206" + c[1] + "\u79d2";
                            break;
                        case 3:
                            d = c[0] + "\u5c0f\u65f6" + c[1] + "\u5206" + c[2] + "\u79d2";
                            break;
                        default:
                            d = b
                    }
                    return d
                },
                formatFileSize: function(a) {
                    return a = parseInt(a, 10), a = a / 1024 / 1024, a = a.toFixed(1), a + "M"
                },
                getHost: function() {
                    var a = window.location.hostname || window.location.host,
                        b = location.host.split(".");
                    return b.length > 1 && (a = b.slice(b.length - 2).join(".")), a
                },
                getUrlParam: function(a, b) {
                    b = b || document.location.toString();
                    var c = new RegExp("(^|&|\\\\?)" + a + "=([^&]*)(&|$|#)"),
                        d = null;
                    return (d = b.match(c)) ? d[2] : ""
                },
                setUrlParam: function(a, b, c) {
                    c = c || location.href;
                    var d, e, f = new RegExp("[?&#]" + a + "=([^&#]+)", "gi"),
                        g = c.match(f),
                        h = "{key" + (new Date).getTime() + "}";
                    if (d = g && g.length > 0 ? g[g.length - 1] : "", e = a + "=" + b, d) {
                        var i = d.charAt(0);
                        c = c.replace(d, h), c = c.replace(h, b ? i + e : "")
                    } else b && (c += c.indexOf("?") > -1 ? "&" + e : "?" + e);
                    return c
                },
                filterXSS: function(a) {
                    return $.isString(a) ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&apos;") : a
                },
                createGUID: function(a) {
                    a = a || 32;
                    for (var b = "", c = 1; a >= c; c++) {
                        var d = Math.floor(16 * Math.random()).toString(16);
                        b += d
                    }
                    return b
                },
                formatSize: function(a) {
                    var b = "" + a;
                    return b.indexOf("%") > 0 ? b : b.indexOf("px") > 0 ? b : /^\d+$/.test(b) ? b + "px" : b
                },
                compareVersion: function(a, b) {
                    a = String(a).split("."), b = String(b).split(".");
                    try {
                        for (var c = 0, d = Math.max(a.length, b.length); d > c; c++) {
                            var e = isFinite(a[c]) && Number(a[c]) || 0,
                                f = isFinite(b[c]) && Number(b[c]) || 0;
                            if (f > e) return -1;
                            if (e > f) return 1
                        }
                    } catch (g) {
                        return -1
                    }
                    return 0
                },
                isTrue: function(v) {
                    return eval(tvp.$.filterXSS(v))
                },
                loadPluginCss: function(a) {
                    var b = "",
                        c = tvp.defaultConfig.pluginCssUrl;
                    return a in c && (b = tvp.defaultConfig.cssPath + c[a]), $.loadCss(b)
                },
                getData: function(a) {
                    return window.localStorage ? window.localStorage[a] : void 0
                },
                setData: function(a, b) {
                    return window.localStorage ? (window.localStorage[a] = b, !0) : void 0
                },
                delData: function(a) {
                    return window.localStorage ? (window.localStorage.removeItem(a), !0) : void 0
                },
                formatTpl: function(a, b) {
                    if (a && "object" === $.type(b)) {
                        for (var c in b)
                            for (var d = "${" + c + "}"; a.indexOf(d) > -1;) a = a.replace(d, b[c]);
                        return a
                    }
                },
                loadCss: function(a) {
                    var b = $.Deferred(),
                        c = !1;
                    if (a) {
                        for (; a.indexOf("../") >= 0;) a = a.replace("../", "");
                        a = $.filterXSS(a);
                        var d = document,
                            e = d.getElementsByTagName("head")[0] || d.documentElement,
                            f = e.getElementsByTagName("base")[0],
                            g = d.createElement("link");
                        g.rel = "stylesheet", g.href = a, g.onload = g.onerror = function() {
                            g.onload = g.onerror = null, c = !0, b.resolve()
                        }, setTimeout(function() {
                            c || b.resolve()
                        }, 2500), f ? e.insertBefore(g, f) : e.appendChild(g)
                    } else b.reject();
                    return b
                }
            };
            $.extend($, extFun)
        }(tvp.$),
        function(a) {
            a.cookie = {
                set: function(a, b, c, d, e) {
                    if (e) {
                        var f = new Date,
                            g = new Date;
                        g.setTime(f.getTime() + 36e5 * e)
                    }
                    return document.cookie = a + "=" + b + "; " + (e ? "expires=" + g.toGMTString() + "; " : "") + (d ? "path=" + d + "; " : "path=/; ") + (c ? "domain=" + c + ";" : "domain=" + window.location.host + ";"), !0
                },
                get: function(a) {
                    var b = new RegExp("(?:^|;+|\\s+)" + a + "=([^;]*)"),
                        c = document.cookie.match(b);
                    return c ? c[1] : ""
                },
                del: function(a, b, c) {
                    var d = new Date;
                    d.setTime(d.getTime() - 1), document.cookie = a + "=; expires=" + d.toGMTString() + ";" + (c ? "path=" + c + "; " : "path=/; ") + (b ? "domain=" + b + ";" : "domain=" + window.location.host + ";")
                }
            }
        }(tvp.$), tvp = tvp || {}, tvp.common = {
        isUseHtml5: function() {
            var a = navigator.userAgent,
                b = tvp.version.getFlashMain(),
                c = null;
            if (/ipad|ipod|iphone|lepad_hls|IEMobile|WPDesktop/gi.test(a)) return !0;
            if ((isNaN(b) || 10 > b) && tvp.common.isSupportMP4() && !tvp.$.os.android && tvp.$.browser.ie && tvp.$.browser.version >= 11) return !0;
            if (tvp.$.os.android) {
                if (tvp.common.isSupportMP4()) return !0;
                if (tvp.$.browser.MQQ && tvp.$.browser.getNumVersion() >= 4.2) return !0;
                if (-1 != a.indexOf("MI2")) return !0;
                if (tvp.$.os.version >= "4" && (c = a.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/)) && c[1] >= 4.2) return !0;
                if (tvp.$.os.version >= "4.1") return !0
            }
            return !1
        },
        isUseHLS: function() {
            return tvp.$.os.ios ? !0 : void 0
        },
        isLiveUseHTML5: function() {
            return tvp.$.os.ios ? !0 : tvp.$.os.ipad ? !0 : tvp.$.os.android && tvp.common.isSupportM3u8() ? !0 : !1
        },
        isSupportM3u8: function() {
            var a = document.createElement("video"),
                b = ["application/x-mpegURL", "audio/mpegurl", "vnd.apple.mpegURL", "application/vnd.apple.mpegURL"],
                c = !1;
            return "function" == typeof a.canPlayType && tvp.$.each(b, function(b, d) {
                return a.canPlayType(d) ? void(c = !0) : void 0
            }), a = null, tvp.$.os.android && (tvp.$.os.version >= "4" && tvp.$.browser.Chrome && (c = !0), tvp.$.browser.M1 && (c = !1), /V8 Build/.test(navigator.userAgent) && (c = !1), tvp.$.browser.MQQ && tvp.$.browser.getNumVersion() >= 4.2 && (c = !0)), c
        },
        isSupportMP4: function() {
            var a = document.createElement("video");
            if ("function" == typeof a.canPlayType) {
                if ("probably" == a.canPlayType('video/mp4; codecs="mp4v.20.8"')) return !0;
                if ("probably" == a.canPlayType('video/mp4; codecs="avc1.42E01E"') || "probably" == a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')) return !0
            }
            return !1
        },
        isSupportSVG: function() {
            return document.implementation && tvp.$.isFunction(document.implementation.hasFeature) ? document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") : !1
        },
        isEnforceMP4: function() {
            navigator.userAgent;
            if (tvp.$.os.android) {
                if (tvp.$.browser.firefox) return !0;
                if (tvp.$.os.version >= "4.0" && tvp.$.browser.MQQ && tvp.$.browser.version < "4.0") return !0
            }
            return !1
        },
        getUin: function() {
            var a = tvp.$.cookie.get("skey"),
                b = tvp.$.cookie.get("lskey"),
                c = "",
                d = 0,
                e = !1;
            return isLeak = "undefined" == typeof isLeak ? !1 : !0, e = !!isLeak && "" != b, e || "" != a ? (c = tvp.$.cookie.get("uin"), "" == c && e && (c = tvp.$.cookie.get("luin")), d = parseInt(c.replace(/^o0*/g, ""), 10), isNaN(d) || 1e4 >= d ? 0 : d) : 0
        },
        getSKey: function() {
            var a = tvp.$.cookie.get("skey"),
                b = tvp.$.cookie.get("lskey"),
                c = "";
            return c = isLeak ? "" != a && "" != b ? [a, b].join(";") : a || b : a
        },
        openLogin: function() {},
        getVideoSnap: function(a, b) {
            var c, d, e = 1e8;
            if (a.indexOf("_") > 0) {
                var f = a.split("_");
                a = f[0], b = parseInt(f[1])
            }
            for (var g = 4294967296, e = 1e8, h = 0, i = 0; i < a.length; i++) {
                var j = a.charCodeAt(i);
                h = 32 * h + h + j, h >= g && (h %= g)
            }
            return d = h % e, void 0 == b && (b = 0), c = 0 == b ? ["http://vpic.video.qq.com/", d, "/", a, "_160_90_3.jpg"].join("") : ["http://vpic.video.qq.com/", d, "/", a, "_", "160_90_", b, "_1.jpg"].join("")
        },
        getVideoSnapMobile: function(a, b) {
            b = b || 0;
            var c = ["496_280"],
                d = "http://shp.qpic.cn/qqvideo_ori/0/{vid}_{index}/0";
            return d.replace("{vid}", a).replace("{index}", c[b])
        },
        picerr: function() {},
        getDeviceId: function() {
            var a = tvp.DEVICE.other;
            return tvp.$.os.iphone ? a = tvp.DEVICE.iphone : tvp.$.os.ipad ? a = tvp.DEVICE.ipad : tvp.$.os.android && tvp.$.os.phone && (a = tvp.DEVICE.aphone), a
        },
        getPlatformId: function() {
            var a = tvp.PLATFORM.other;
            return tvp.$.browser.WeChat ? a = tvp.PLATFORM.wechat : tvp.$.browser.MQQClient ? a = tvp.PLATFORM.mqq : tvp.$.browser.MQQ && (a = tvp.PLATFORM.qqbrowser), a
        }
    }, tvp.version = function() {
        function a(a) {
            if (b(a)) return a;
            if (/\d+/i.test(a)) {
                var c = parseInt(a / 1e4 / 100, 10),
                    d = parseInt(a / 1e4, 10) - 100 * c,
                    e = parseInt(a, 10) - (100 * c * 1e4 + 1e4 * d);
                return strVer = c + "." + d + "." + e
            }
            return a
        }

        function b(a) {
            return /^(\d+\.){2}\d+(\.\d+)?$/.test(a)
        }
        var c, d = "0.0.0.0",
            e = "0.0.0",
            f = new Image,
            g = !1,
            h = !1;
        return "film.qq.com" == document.location.host && (h = !0), {
            getOcx: function(b) {
                if (tvp.$.isUndefined(b) && (b = !0), b && "0.0.0.0" != d) return d;
                var e;
                if (tvp.$.browser.ie) try {
                    e = "IE begin", c = new ActiveXObject(QQLive.config.PROGID_QQLIVE_INSTALLER), "undefined" != typeof c.getVersion ? (d = c.GetVersionByClsid(QQLive.config.OCX_CLSID), e = "get actObj.GetVersionByClsid:" + d) : e = "no function:actObj.GetVersionByClsid"
                } catch (i) {
                    h && !g && (g = !0) && (f.src = "http://btrace.qq.com/collect?sIp=&iQQ=" + tvp.common.getUin() + "&sBiz=IE&sOp=" + encodeURIComponent(navigator.userAgent) + "&iSta=0&iTy=2432&iFlow=&sUrl=" + encodeURIComponent(location.toString()) + "&sRef=" + encodeURIComponent(document.referrer) + "&sMsg=" + encodeURIComponent(i.message) + "&sStep=" + encodeURIComponent(e) + "&_=" + Math.random())
                } else if (tvp.$.browser.isNotIESupport()) {
                    e = "no IE begin";
                    var j, k = navigator.plugins;
                    if (tvp.$.isUndefined(k.namedItem) || (e = "plugs.namedItem", j = k.namedItem("\u817e\u8baf\u89c6\u9891")), !j) {
                        e = "no plugs.namedItem:tencentvideo";
                        for (var l = 0, m = k.length; m > l; l++)
                            if (k[l] && "\u817e\u8baf\u89c6\u9891" == k[l].name || "npQQLive.dll" == k[l].filename) {
                                j = k[l];
                                break
                            }
                    }
                    if (j)
                        if (tvp.$.isUndefined(j.version)) {
                            e = "plug.description:" + j.description;
                            var n, o = j.description;
                            (n = o.match(/version:((\d+\.){3}(\d+)?)/)) && (d = n[1])
                        } else e = "plug.version:" + j.version, d = j.version;
                    else e = "no plugs[i].filename:npQQLive.dll"
                }
                return parseInt(d, 10) || h && !g && (g = !0) && (f.src = "http://btrace.qq.com/collect?sIp=&iQQ=" + tvp.common.getUin() + "&sBiz=" + (tvp.$.browser.ie ? "IE" : "NOIE") + "&sOp=" + encodeURIComponent(navigator.userAgent) + "&iSta=0&iTy=2432&iFlow=&sUrl=" + encodeURIComponent(location.toString()) + "&sRef=" + encodeURIComponent(document.referrer) + "&sMsg=" + d + "&sStep=" + encodeURIComponent(e) + "&_=" + Math.random()), d = a(d)
            },
            getFlash: function() {
                if ("0.0.0" != e) return e;
                var a = null,
                    b = null,
                    c = [],
                    d = "Shockwave Flash",
                    i = navigator,
                    j = "application/x-shockwave-flash";
                if (tvp.$.browser.ie) try {
                    var k = "IE begin";
                    a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), k = "new ActiveXObject", a && (b = a.GetVariable("$version"), k = "swf.GetVariable", b && (b = b.split(" ")[1].split(","), c = [parseInt(b[0], 10), parseInt(b[1], 10), parseInt(b[2], 10)]))
                } catch (l) {
                    h && !g && (g = !0) && (f.src = "http://btrace.qq.com/collect?sIp=&iQQ=" + tvp.common.getUin() + "&sBiz=IE&sOp=" + encodeURIComponent(navigator.userAgent) + "&iSta=1&iTy=2432&iFlow=&sUrl=" + encodeURIComponent(location.toString()) + "&sRef=" + encodeURIComponent(document.referrer) + "&sMsg=" + encodeURIComponent(l.message) + "&sStep=" + encodeURIComponent(k) + "&_=" + Math.random())
                } else if (!tvp.$.isUndefined(i.plugins) && "object" == typeof i.plugins[d]) {
                    var k = "no IE begin";
                    b = i.plugins[d].description, k = "plugins[S].description", b && (tvp.$.isUndefined(i.mimeTypes) || !i.mimeTypes[j] || i.mimeTypes[j].enabledPlugin) ? (k = "parse description", b = b.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), c[0] = parseInt(b.replace(/^(.*)\..*$/, "$1"), 10), c[1] = parseInt(b.replace(/^.*\.(.*)\s.*$/, "$1"), 10), c[2] = /[a-zA-Z]/.test(b) ? parseInt(b.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0) : k = "no mimeTypes or disable"
                }
                return e = c.join("."), parseInt(e, 10) || h && !g && (g = !0) && (f.src = "http://btrace.qq.com/collect?sIp=&iQQ=" + tvp.common.getUin() + "&sBiz=" + (tvp.$.browser.ie ? "IE" : "NOIE") + "&sOp=" + encodeURIComponent(navigator.userAgent) + "&iSta=1&iTy=2432&iFlow=&sUrl=" + encodeURIComponent(location.toString()) + "&sRef=" + encodeURIComponent(document.referrer) + "&sMsg=" + e + "&sStep=" + encodeURIComponent(k) + "&_=" + Math.random()), e
            },
            getFlashMain: function() {
                return parseInt(tvp.version.getFlash().split(".")[0], 10)
            }
        }
    }(),
        function(a, b) {
            var c = {
                qqlive: {
                    text1: "\u817e\u8baf\u89c6\u9891\u5ba2\u6237\u7aef",
                    text2: "\u53ef\u89c2\u770b\u66f4\u591a\u89c6\u9891",
                    md5Cgi: "http://mcgi.v.qq.com/commdatav2?cmd=39&otype=json&confid=${id}",
                    payUrl: "http://film.qq.com/weixin/detail/${index}/${cid}.html",
                    scheme: "tenvideo2://",
                    logoClass: "",
                    openUrl: "tenvideo2://?action=5&video_id=${vid}",
                    liveOpenUrl: "tenvideo2://?action=8&channel_id=${lid}",
                    ipadDownloadUrl: "https://itunes.apple.com/cn/app/teng-xun-shi-pinhd/id407925512?mt=8",
                    iphoneDownloadUrl: "http://itunes.apple.com/cn/app/id458318329?mt=8",
                    aphoneDownloadUrl: "http://mcgi.v.qq.com/commdatav2?cmd=4&confid=140&platform=aphone",
                    VIA: "ANDROIDQQ.QQLIVE",
                    appId: "100730521",
                    downloadId: "TencentVideo",
                    taskName: "TencentVideo",
                    packageName: b.os.iphone ? "com.tencent.live4iphone" : "com.tencent.qqlive",
                    packageUrl: "tenvideo2://can_open_me_if_install_and_regeister_this_scheme"
                },
                weishi: {
                    text1: "\u5fae\u89c6\u5ba2\u6237\u7aef",
                    text2: "\u53d1\u73b0\u66f4\u591a\u7cbe\u5f69",
                    logoClass: "tvp_download_app_solo_weishi",
                    md5Cgi: "http://www.weishi.com/api/packdata.php?confid=${id}",
                    scheme: b.os.iphone ? " weishiiosscheme://" : "weishiandroidscheme://",
                    openUrl: b.os.iphone ? " weishiiosscheme://detail?tweetid=${id}" : "weishiandroidscheme://detail?tweetid=${id}",
                    iphoneDownloadUrl: "http://www.weishi.com/download/index.php?pgv_ref=weishi.shipin.xinwenfenxiang",
                    aphoneDownloadUrl: "http://www.weishi.com/download/index.php?pgv_ref=weishi.shipin.xinwenfenxiang",
                    ipadDownloadUrl: "",
                    VIA: "ANDROIDQQ.WEISHI",
                    appId: "1101083114",
                    downloadId: "TencentWeishi",
                    taskName: "TencentWeishi",
                    packageName: b.os.iphone ? "com.tencent.microvision" : "com.tencent.weishi",
                    packageUrl: b.os.iphone ? "weishiiosscheme://can_open_me_if_install_and_regeister_this_scheme" : "weishiandroidscheme://can_open_me_if_install_and_regeister_this_scheme"
                },
                yyb: {
                    packageName: "com.tencent.android.qqdownloader"
                }
            };
            a.app = {
                config: {
                    defaultName: "qqlive",
                    QQApiUrl: "http://pub.idqqimg.com/qqmobile/qqapi.js",
                    mqqApiUrl: "http://res.imtt.qq.com/browser_lightapp/QQBrowserApi/getCryptext/browser_interface_getCryptext.js"
                },
                loadQQClientDefer: !1,
                loadDownloaderDefer: !1,
                loadMqqDefer: !1,
                getDownloadUrl: function(d, e) {
                    return e = e || a.app.config.defaultName, d = b.os.iphone ? c[e].iphoneDownloadUrl : d || c[e].aphoneDownloadUrl, d = b.os.ipad ? c[e].ipadDownloadUrl : d
                },
                getPayUrl: function(a) {
                    var d = b.formatTpl(c.qqlive.payUrl, {
                        index: a.slice(0, 1),
                        cid: a
                    });
                    return d
                },
                getOpenUrl: function(d) {
                    var e = {},
                        f = !1;
                    if (!d) return f;
                    if (d.appName && d.appName !== a.app.config.defaultName) return f = d.openId ? c[d.appName].openUrl.replace("${id}", d.openId) : c[d.appName].scheme;
                    switch (d.lid ? e.channel_id = d.lid : d.cid ? e.cover_id = d.cid : d.tid ? e.topic_id = d.tid : d.vidArray || !d.vid ? e.video_id = "${vid}" : d.vid && (e.video_id = d.vid), d.vid2 && (e.video_id = d.vid2), d.openType) {
                        case 6:
                            d.cid && (e.action = 1);
                            break;
                        case 2:
                            e.action = d.lid ? 8 : 7;
                            break;
                        case 3:
                            e.action = d.lid ? 8 : d.tid ? 6 : 5;
                            break;
                        case 4:
                            d.cid && (e.action = 1);
                            break;
                        default:
                            e.action = d.lid ? 8 : d.cid ? 1 : 5
                    }
                    if (d.promotionId && (e.from = d.promotionId + "_" + (d.contentId ? d.contentId : "")), e.action = e.action || 5, f = c.qqlive.scheme + "?" + decodeURIComponent(b.param(e)), (d.cid || d.h5Url) && parseInt(d.pay)) {
                        var g = d.cid ? a.app.getPayUrl(d.cid) : d.h5Url;
                        b.os.iphone ? (f = g, d.openUrl = f) : d.version && parseInt(d.version) < 5852 && (f = g)
                    }
                    return f !== g && d.openUrl && (f = b.filterXSS(d.openUrl), f.indexOf("from") < 0 && f.indexOf("?") > -1 && d.promotionId && (f += "&from=" + d.promotionId + "_" + (d.contentId ? d.contentId : ""))), f
                },
                getPackageInfo: function() {
                    return c
                },
                pageType: function() {
                    return b.browser.WeChat ? 1 : b.browser.MQQClient ? 2 : b.browser.MQQ ? 3 : 0
                }(),
                isSupportApp: function() {
                    return b.os.iphone || b.os.ipod || b.os.ipad ? !0 : b.os.android ? !0 : !1
                }(),
                unbindTryOpenAppBanner: function(a) {
                    a ? a.noTryOpen = !0 : ""
                },
                bindTryOpenAppBanner: function(b) {
                    if (b && b.rewriteText && !a.app.pageType) {
                        var c = a.$.os.hasTouch ? "touchend" : "click",
                            d = b.$btn,
                            e = d.attr("data-url"),
                            f = a.$.browser.Chrome,
                            g = function() {
                                var b = navigator.userAgent;
                                return a.$.os.android || a.$.os.iphone ? -1 != b.indexOf("qqnews/") ? !1 : a.$.os.android && f ? !1 : /^http|https/g.test(e) ? !1 : !0 : !1
                            };
                        if (!g()) return !1;
                        d.bind("touchend click", function(a) {
                            b.noTryOpen || a.preventDefault()
                        }), d.bind(c, function() {
                            b.noTryOpen || a.app.tryOpenAppBanner(d)
                        })
                    }
                },
                tryOpenAppBanner: function(b) {
                    if (b.length) {
                        var c = b.attr("href"),
                            d = b.attr("data-url"),
                            e = function() {
                                location.href = c
                            },
                            f = function() {
                                if (a.$.os.android) {
                                    var b = document.createElement("iframe");
                                    b.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;", b.src = d, document.body.appendChild(b)
                                } else a.$.os.iphone && (location.href = d)
                            };
                        setTimeout(function() {
                            var a = (new Date).valueOf();
                            f(), a = (new Date).valueOf(), setTimeout(function() {
                                var b = (new Date).valueOf();
                                1550 > b - a && e()
                            }, 1500)
                        }, 100)
                    }
                },
                loadMqqAPI: function() {
                    if (a.app.loadMqqDefer) return a.app.loadMqqDefer;
                    var c = b.Deferred();
                    if (a.app.loadMqqDefer = c, window.x5) c.resolve();
                    else {
                        var d = this.config.mqqApiUrl;
                        b.getScript(d, function() {
                            window.x5 ? c.resolve() : c.reject()
                        })
                    }
                    return setTimeout(function() {
                        c.reject()
                    }, 3e3), c
                },
                invokeQQBrowserAPI: function(c) {
                    function d() {
                        if (window.x5 && x5.ios && x5.ios.getMobileAppSupport) {
                            var a = {
                                scheme: c.packageInfo.packageUrl
                            };
                            x5.ios.getMobileAppSupport(a, function(a) {
                                e.resolve(a && 1 == a.isSupportApp ? 1 : 0)
                            }, function() {
                                e.resolve(0)
                            })
                        } else e.resolve(0);
                        setTimeout(function() {
                            e.resolve(0)
                        }, 300)
                    }
                    if (!b.os.iphone && window.QQApi && QQApi.checkAppInstalled) return this.invokeQQClientAPI(c);
                    var e = b.Deferred();
                    if (!b.os.iphone && window.x5mtt && window.x5mtt.isApkInstalled) {
                        var f = window.x5mtt.isApkInstalled('{"packagename": ' + c.packageInfo.packageName + "}");
                        e.resolve(-1 != f ? 1 : 0)
                    } else b.os.iphone && parseInt(b.os.version) > 5 ? a.app.loadMqqAPI().done(function() {
                        d()
                    }).fail(function() {
                        e.resolve(0)
                    }) : e.resolve(0);
                    return setTimeout(function() {
                        e.resolve(0)
                    }, 3e3), e
                },
                loadQQClientAPI: function() {
                    if (a.app.loadQQClientDefer) return a.app.loadQQClientDefer;
                    var c = b.Deferred();
                    if (a.app.loadQQClientDefer = c, window.mqq || window.QQApi) c.resolve();
                    else {
                        var d = this.config.QQApiUrl;
                        b.getScript(d, function() {
                            c.resolve()
                        })
                    }
                    return setTimeout(function() {
                        c.reject()
                    }, 3e3), c
                },
                invokeQQClientAPI: function(a) {
                    function c() {
                        !e && window.QQApi && QQApi.checkAppInstalled ? QQApi.checkAppInstalled(f, function(a) {
                            a && 0 != a ? (a = a.split("."), a = a[a.length - 1], d.resolve(1, a)) : d.resolve(0)
                        }) : window.mqq && mqq.app && mqq.app.isAppInstalled ? mqq.app.isAppInstalled(f, function(a) {
                            mqq.invoke ? mqq.invoke("QQApi", "checkAppInstalled", f, function(b) {
                                b && b.length && (b = b.split("."), b = b[b.length - 1]), d.resolve(a ? 1 : 0, b)
                            }) : d.resolve(a ? 1 : 0)
                        }) : d.resolve(0)
                    }
                    var d = b.Deferred(),
                        e = b.os.iphone,
                        f = e ? a.packageInfo.packageUrl : a.packageInfo.packageName;
                    return this.loadQQClientAPI().done(function() {
                        c()
                    }).fail(function() {
                        d.resolve(0)
                    }), setTimeout(function() {
                        d.resolve(0)
                    }, 5e3), d
                },
                getAppMd5: function(d, e) {
                    d = d || 140, e = e || a.app.config.defaultName;
                    var f = b.Deferred(),
                        g = c[e].md5Cgi.replace("${id}", d);
                    return b.ajax({
                        url: g,
                        dataType: "jsonp"
                    }).then(function(a) {
                        f.resolve(a && a.data ? a.data : a)
                    }), f
                },
                report: function(c, d) {
                    var e = {},
                        d = d && d.curVideo ? d : !1;
                    d && (e = {
                        vid: d.curVideo.getVid() || d.curVideo.getChannelId(),
                        appId: d.config.appid || d.config.appId,
                        contentId: d.config.contentId
                    }), c && (c = b.extend(c, e), a.report(c))
                },
                invokeWeChatAPI: function(a) {
                    var c = b.Deferred(),
                        d = this;
                    return window != top && (WeixinJSBridge = top.WeixinJSBridge), WeixinJSBridge.invoke || c.resolve(0), d.getNetworkTypeInWechat().done(function(b) {
                        a && a.t && a.t.config && (a.t.config.nettype = b)
                    }), b.os.iphone ? WeixinJSBridge.invoke("getInstallState", a.packageInfo, function(a) {
                        var b = a.err_msg;
                        c.resolve(b.indexOf("get_install_state:yes") > -1 ? 1 : 0)
                    }) : WeixinJSBridge.invoke("getInstallState", a.packageInfo, function(a) {
                        var b = a.err_msg;
                        if (b.indexOf("get_install_state:yes") > -1) {
                            var d = b.split("yes_"),
                                e = 0;
                            d.length >= 2 && (e = parseInt(d[1], 10)), e = isNaN(e) ? 0 : e, c.resolve(1, e)
                        } else c.resolve(0)
                    }), setTimeout(function() {
                        c.resolve(0)
                    }, 6e3), c
                },
                getNetworkTypeInWechat: function() {
                    var a = b.Deferred();
                    return WeixinJSBridge.invoke("getNetworkType", {}, function(b) {
                        var c = -1;
                        b && b.err_msg && ("network_type:fail" === b.err_msg && (c = 0), "network_type:wifi" === b.err_msg && (c = 1), "network_type:edge" === b.err_msg && (c = 2), "network_type:wwan" === b.err_msg && (c = 3)), a.resolve(c)
                    }), a
                },
                check: function(d) {
                    var e = a.app,
                        f = e.pageType,
                        d = (b.os.iphone, d || {}),
                        g = b.Deferred();
                    if (d.appName = d.appName || a.app.config.defaultName, d.packageInfo = c[d.appName], 1 == f) {
                        var h = window == top ? document : top.document;
                        if (top.WeixinJSBridge) e.invokeWeChatAPI(d).then(function(a, b) {
                            g.resolve(e.buildResult(a, d, b))
                        });
                        else try {
                            h.addEventListener("WeixinJSBridgeReady", function() {
                                e.invokeWeChatAPI(d).then(function(a, b) {
                                    g.resolve(e.buildResult(a, d, b))
                                })
                            })
                        } catch (i) {
                            g.resolve(e.buildResult(0, d))
                        }
                    } else if (3 == f) try {
                        e.invokeQQBrowserAPI(d).then(function(a, b) {
                            g.resolve(e.buildResult(a, d, b))
                        })
                    } catch (i) {
                        g.resolve(e.buildResult(0, d))
                    } else if (2 == f) try {
                        e.invokeQQClientAPI(d).then(function(a, b) {
                            g.resolve(e.buildResult(a, d, b))
                        })
                    } catch (i) {
                        g.resolve(e.buildResult(0, d))
                    } else g.resolve(e.buildResult(0, d));
                    return g
                },
                loadDownloaderAPI: function() {
                    if (a.app.loadDownloaderDefer) return a.app.loadDownloaderDefer;
                    var c = b.Deferred();
                    a.app.loadDownloaderDefer = c;
                    var d = "";
                    return 1 == this.pageType && (d = a.defaultConfig.libpath + a.defaultConfig.pluginUrl.AppDownloadClickWechat), 2 == this.pageType && (d = a.defaultConfig.libpath + a.defaultConfig.pluginUrl.AppDownloadClickMqq), d || c.reject(), b.downloadClick_wechat || b.downloadClick_mqq ? c.resolve() : (b.getScript(d, function() {
                        c.resolve()
                    }), setTimeout(function() {
                        c.reject()
                    }, 3e3)), c
                },
                checkCanDownloader: function(a, c, d) {
                    function e() {
                        b.downloadClick_wechat && d && b.downloadClick_wechat(d), b.downloadClick_mqq && d && b.downloadClick_mqq(d), f.resolve(1)
                    }
                    var f = b.Deferred();
                    if (b.os.iphone || b.os.ipad || !c || 1 == a) return f.resolve(0), f;
                    var g = !1,
                        h = !1,
                        i = /android/i.test(navigator.userAgent.toLowerCase());
                    return !i || 1 == a || !c.downloader || c.downloadUrl && !c.md5 || !c.downloadUrl && c.md5 ? (f.resolve(0), f) : (b.isArray(c.range) && b.each(c.range, function(a, b) {
                        1 == b && (g = !0), 2 == b && (h = !0)
                    }), c.downloaderCallback || (g = !0, h = !0), b.browser.WeChat && g || b.browser.MQQClient && h ? this.loadDownloaderAPI().done(function() {
                        e()
                    }).fail(function() {
                        f.resolve(0)
                    }) : f.resolve(0), f)
                },
                buildResult: function(c, d, e) {
                    {
                        var f = "",
                            g = this.pageType,
                            h = b.os.iphone;
                        b.os.ipad
                    }
                    d.version = e;
                    var i = a.app.getOpenUrl(d),
                        j = this;
                    return h && !d.openUrl && (1 == g && (i += "&callback=weixin%3A%2F%2F&sender=%e5%be%ae%e4%bf%a1"), 2 == g && (i += "&callback=mqqapi%3A%2F%2F&sender=%E6%89%8B%E6%9C%BAQQ"), 3 == g && (i += "&callback=mqqbrowser%3A%2F%2F&sender=QQ%E6%B5%8F%E8%A7%88%E5%99%A8")), f = 1 == c ? i : b.os.iphone && d.pay && d.cid ? a.app.getPayUrl(d.cid) : j.getDownloadUrl(d.downloadUrl, d.appName), {
                        hasApp: c,
                        pageType: g,
                        os: h,
                        version: e,
                        openUrl: i,
                        liveOpenUrl: i,
                        url: f
                    }
                }
            }
        }(tvp, tvp.$), tvp.PLAYER_DEFINE = {
        LIVE: 1,
        VOD: 2
    }, tvp.defaultConfig = {
        video: null,
        width: 600,
        height: 450,
        autoplay: !1,
        mute: !1,
        volume: 50,
        modId: "mod_player",
        playerid: "",
        coverId: "",
        typeId: 0,
        pic: "",
        type: tvp.PLAYER_DEFINE.VOD,
        playerType: "auto",
        loadingswf: "",
        oid: "",
        share: !0,
        isHtml5UseHLS: "auto",
        isShowDurationLimit: !0,
        isHtml5AutoBuffer: !1,
        isHtml5UseAirPlay: !0,
        isHtml5ControlAlwaysShow: !1,
        html5Preload: "null",
        html5VodUIFeature: ["controlbar", "tips", "title", "meta", "playpause", "progress", "timepanel", "fullscreen", "overlay", "bigben", "posterlayer", "shadow", "promotion", "loadingAd"],
        html5LiveUIFeature: ["controlbar", "tips", "playpause", "fullscreen", "overlay", "posterlayer", "shadow"],
        html5LiveFrontShow: ["liveDownloader"],
        html5FeatureExtJS: {},
        html5ForbiddenUIFeature: [],
        isHtml5UseUI: !0,
        HTML5CSSName: "",
        isHtml5ShowPosterOnStart: !0,
        isHtml5ShowPosterOnEnd: !1,
        isHtml5ShowPosterOnChange: !0,
        isiPhoneShowPosterOnPause: !0,
        isiPhoneShowPlaysinline: !1,
        isHtml5ShowPlayBtnOnPause: !0,
        isHtml5UseFakeFullScreen: !1,
        isIOSVideoOffset: !0,
        isHtml5ShowLoadingAdOnStart: !tvp.$.os.phone,
        isHtml5ShowLoadingAdOnChange: !tvp.$.os.phone,
        specialVideoFileDomain: "",
        flashWmode: "direct",
        vodFlashUrl: "",
        vodFlashType: "TPout",
        vodFlashExtVars: {},
        vodFlashListType: 2,
        vodFlashSkin: "",
        isVodFlashShowCfg: !0,
        isVodFlashShowEnd: !0,
        isVodFlashShowSearchBar: !0,
        isVodFlashShowNextBtn: !0,
        liveFlashUrl: "",
        liveFlashSwfType: "TencentPlayerLive",
        isLiveFlashShowConfigBtn: !0,
        isLiveflashShowFullBtn: !0,
        isLiveFlashShowCfg: !0,
        liveFlashWatermark: "",
        liveFlashAppType: "",
        liveFlashExtVars: {},
        flashVersionTag: "20140714",
        ocxControlBar: "",
        ocxControlHeight: 60,
        ocxSkin: "",
        isOcxShowPauseBtn: !1,
        isOcxHideControl: !1,
        plugins: {
            AppBanner: !1,
            AppRecommend: !1,
            AppDownloadOnPause: !1,
            AppBannerOnPause: !1,
            AppFollow: !1
        },
        pluginUrl: {
            AppBanner: "js/plugins/appbanner.js?v=20140827",
            AppFollow: "js/plugins/appfollow.js?v=20140827",
            AppRecommend: "js/plugins/apprecommend.js?v=20140827",
            AppDownloadOnPause: "js/plugins/appdownloadonpause.js?v=20140827",
            AppBannerOnPause: "js/plugins/appbanneronpause.js?v=20140827",
            AppDownloadClickWechat: "js/plugins/appdownloadclickwechat.js?v=20140827",
            AppDownloadClickMqq: "js/plugins/appdownloadclickmqq.js?v=20140827"
        },
        cssPath: "http://imgcache.gtimg.cn/tencentvideo_v1/vstyle/mobile/v2/style/",
        pluginCssUrl: {
            AppRecommend: "player_plugins_apprecommend.css?v=20140827",
            AppBanner: "player_plugins_appdownloadsolo.css?v=20140827",
            AppBannerOnPause: "player_plugins_appdownloadonpause.css?v=20140827",
            AppDownloadOnPause: "player_plugins_appdownloadonpause.css?v=20140827"
        },
        libpath: "http://qzs.qq.com/tencentvideo_v1/tvp/"
    },
        function(a) {
            var b = function(a, c) {
                return function(d, e) {
                    var f = /\s/.test(d) ? function(a) {
                        var b, d = [c],
                            e = [
                                []
                            ];
                        for (b in a) d.push(b), e.push(a[b]);
                        return new Function(d, f.$).apply(a, e).join("")
                    } : a[d] = a[d] || b(document.getElementById(d).innerHTML);
                    return f.$ = f.$ || c + ".push('" + d.replace(/\\/g, "\\\\").replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join(c + ".push('").split("\r").join("\\'") + "');return " + c, e ? f(e) : f
                }
            }({}, "$" + +new Date);
            a.tmpl = b
        }(tvp.$),
        function(a) {
            "undefined" == typeof a.getScript && (a.getScript = function(a, b) {
                var c = document.createElement("script"),
                    d = document.getElementsByTagName("head")[0],
                    e = /^(?:loaded|complete|undefined)$/;
                c.async = "async", c.src = a, b && (c.onload = c.onerror = c.onreadystatechange = function() {
                    e.test(c.readyState) && (c.onload = c.onerror = c.onreadystatechange = null, d.removeChild(c), c = null, b())
                }), d.appendChild(c)
            })
        }(tvp.$), tvp.report = function() {
        function a() {
            return 0 == g.length ? (e = !0, void(f = null)) : (clearTimeout(d), b(g.splice(0, 1)), void(e = !1))
        }

        function b(b) {
            clearTimeout(d), f = document.createElement("img"), f.onerror = a, f.src = b, setTimeout(a, 1e3)
        }

        function c(a) {
            return a && /^(?:ht|f)tp(?:s)?\:\/\/(?:[\w\-\.]+)\.\w+/i.test(a) ? null == f ? (b(a), void(e = !1)) : e ? (b(a), void(e = !1)) : void g.push(a) : void 0
        }
        var d, e = !0,
            f = null,
            g = [];
        return function(a) {
            if (tvp.$.isString(a)) return void c(a);
            if ("object" == tvp.$.type(a)) {
                var b, d = {
                        deviceId: "int1",
                        platformId: "int2",
                        appId: "int3",
                        speed: "int4",
                        contentId: "str1",
                        fileName: "str2"
                    },
                    e = {
                        cmd: -1,
                        url: window != top ? document.referrer : document.location.href,
                        ver: tvp.ver.replace(/\$/g, ""),
                        ua: navigator.userAgent,
                        int1: tvp.common.getDeviceId(),
                        int2: tvp.common.getPlatformId(),
                        int3: 0,
                        int4: 0,
                        str1: "",
                        str2: tvp.filename
                    },
                    f = "http://rcgi.video.qq.com/web_report?";
                for (b in d) b in a && (a[d[b]] = a[b], delete a[b]);
                a = tvp.$.extend(e, a), f += tvp.$.param(a), c(f)
            }
        }
    }(), tvp.ajax = function(a) {
        function b(a, b) {
            a = a || {}, b = String(b);
            var c, d = /([\d\w_]+)/g;
            for (d.lastIndex = 0; null !== (c = d.exec(b)) && (a = a[c[0]], void 0 !== a && null !== a););
            return a
        }

        function c(a) {
            return a = a.slice(0, a.indexOf("?")), a = a.split("/"), {
                host: a[2],
                path: "/" + a.slice(3).join("/")
            }
        }

        function d(a, b, d, e) {
            var f = "http://c.isdspeed.qq.com/code.cgi",
                g = c(a);
            tvp.report(f, {
                domain: g.host,
                cgi: g.path,
                type: b,
                code: d,
                time: e
            })
        }

        function e(c, e) {
            if ("object" == a.type(c) && c.url && "string" == typeof c.url) {
                "object" == typeof e && (e = a.extend({
                    key: "suc",
                    value: 0
                }, e));
                var f = a.Deferred(),
                    g = a.now(),
                    h = 0,
                    i = a.extend({
                        dataType: "jsonp"
                    }, c);
                return a.ajax(i).done(function(i) {
                    var j = i && "object" == typeof e ? b(i, e.key) : 0;
                    h = a.now() - g, i && "undefined" != typeof j && j == e.value ? (d(c.url, 1, j, h), f.resolve(i, h)) : (d(c.url, 3, j, h), f.resolve(i, h))
                }).fail(function(b) {
                    h = a.now() - g, d(c.url, 2, 900, h), f.reject(b, h)
                }), f
            }
        }
        return e
    }(tvp.$), tvp.reportErr = function(a, b) {
        b = b || "tvperror";
        var c = "http://rcgi.video.qq.com/report/jsbossrep?block=" + b + "&ret=-1&level=4&msg=";
        a = [location.href, navigator.userAgent, tvp.filename, tvp.ver, a].join("|"), a = encodeURIComponent(a), c += a, tvp.report(c)
    }, tvp.retCode = {
        snid: 0,
        TYPE: {
            SUC: 1,
            ERR: 2
        },
        config: {
            cgi: "http://isdspeed.qq.com/cgi-bin/v.cgi",
            sampling: 1
        },
        commCode: {
            error: 11,
            MQzone_Err: 12
        },
        report: function(a, b, c, d) {
            if (a && !(isNaN(b) || 1 > b) && "undefined" != typeof c) {
                var e = this.config.cgi;
                e += "?flag1=" + a.toString() + "&flag2=" + b.toString() + "&1=" + tvp.retCode.config.sampling + "&2=" + c, d && (e += "&flag3=" + d.toString()), tvp.report(e)
            }
        }
    }, tvp.RetCode = function(a) {
        this.appid = a, this.timer = {
            begin: 0,
            end: 0
        }, this.SNID = tvp.retCode.snid, this.isReported = !1, tvp.retCode.snid++
    }, tvp.RetCode.prototype = {
        begin: function() {
            this.timer.begin = (new Date).valueOf()
        },
        end: function() {
            this.timer.end = this.timer.end || (new Date).valueOf()
        },
        report: function(a, b) {
            if (!this.isReported) {
                this.end();
                var c = this.timer.end - this.timer.begin;
                tvp.retCode.report(this.appid, a, c, b), this.isReported = !0
            }
        },
        reportSuc: function() {
            this.report(tvp.retCode.TYPE.SUC)
        },
        reportErr: function(a) {
            a = a || tvp.retCode.commCode.error, this.report(tvp.retCode.TYPE.ERR, a)
        }
    },
        function(a, b) {
            var c = {
                poster: "",
                prefix: 0,
                tail: 0,
                tagStart: 0,
                tagEnd: 0,
                duration: "",
                historyStart: 0,
                pay: 0,
                coverId: "",
                title: "",
                isLookBack: 0,
                tstart: 0,
                CDNType: 0,
                vFormat: "",
                LiveReTime: "",
                typeId: 0,
                format: b.os.ipad || b.os.MIPAD ? "mp4" : "auto",
                channelExtParam: {},
                pid: "",
                rid: "",
                bulletId: "",
                bullet: !1
            };
            a.VideoInfo = function() {
                function d(a) {
                    return a.indexOf("_") < 0 ? a : a.split("_")[0]
                }

                function e(a) {
                    return a.indexOf("_") < 0 ? 0 : parseInt(a.split("_")[1])
                }

                function f(a) {
                    for (var b = [], c = a.split("|"), e = 0; e < c.length; e++) b.push(d(c[e]));
                    return b.join("|")
                }

                function g() {
                    p && p instanceof a.Player && p.on(a.ACTION.onVodH5Init, function() {
                        var b;
                        "auto" === p.config.isHtml5UseHLS && a.common.isUseHLS() || p.config.isHtml5UseHLS || (b = n.getMP4Url(), n.callGetMp4UrlDefer.resolve(b))
                    })
                }
                var h = "",
                    i = "",
                    j = 0,
                    k = 0,
                    l = "",
                    m = "",
                    n = this,
                    o = {},
                    p = null,
                    q = {},
                    r = null;
                b.extend(o, c), this.data = {}, this.url = "", this.lastQueryVid = "", this.callGetMp4UrlDefer = b.Deferred(), b.each(o, function(a) {
                    !new function() {
                        var b = a.charAt(0).toUpperCase() + a.substr(1);
                        n["set" + b] = function(b) {
                            return o[a] = b, this
                        }, n["get" + b] = function() {
                            return o[a]
                        }
                    }
                }), this.setCurPlayer = function(a) {
                    p = a, g()
                }, this.setVid = function(c) {
                    if (a.$.isString(c)) {
                        if (this.clear(), l = c, c.indexOf("|") < 0) {
                            var g = d(c);
                            h = g, k = e(c), i = g
                        } else {
                            var j = c.split("|");
                            h = d(j[0]), k = e(j[0]), i = f(c)
                        }
                        return h = b.filterXSS(h), i = b.filterXSS(i), this
                    }
                }, this.getVid = function() {
                    return h
                }, this.getVidList = function() {
                    return i
                }, this.getVidArray = function() {
                    return i.split("|")
                }, this.getIdx = function() {
                    return k
                }, this.getDuration = function() {
                    if (!o.duration) return this.data && this.data.vl && b.isArray(this.data.vl.vi) && this.data.vl.vi.length > 0 && 0 != this.data.vl.vi[0].td ? this.data.vl.vi[0].td : 0;
                    for (var a = o.duration.split("|"), c = 0, d = 0, e = a.length; e > d; d++) c += parseInt(a[d]);
                    return c
                }, this.getFileSize = function() {
                    return this.data && this.data.vl && this.data.vl.vi && this.data.vl.vi[0] && this.data.vl.vi[0].fs ? parseInt(this.data.vl.vi[0].fs, 10) : 0
                }, this.getTimelong = function() {
                    return this.getDuration()
                }, this.getEndOffset = function() {
                    return this.getDuration() - this.getTail()
                }, this.setChannelId = function(b) {
                    return a.$.isString(b) ? (m = b, this) : void 0
                }, this.getChannelId = function() {
                    return m
                }, this.getFullVid = function() {
                    return 0 == this.getIdx() ? d(this.getVid()) : d(this.getVid()) + "_" + this.getIdx()
                }, this.getTitle = function() {
                    return "" === o.title && this.data && ("mp4" == this.data.playtype && this.data.vl && b.isArray(this.data.vl.vi) && this.data.vl.vi.length > 0 ? o.title = this.data.vl.vi[0].ti || "" : "hls" == this.data.playtype && b.isArray(this.data.vi) && this.data.vi.length > 0 && (o.title = this.data.vi[0].title || "")), o.title
                }, this.clear = function() {
                    h = "", i = "", j = 0, k = 0, m = "", r = null, q = {}, b.extend(o, c), this.data = {}, this.url = ""
                }, this.clone = function(a) {
                    a.setVid(l), a.setChannelId(m);
                    for (var c in o) {
                        var d = c.charAt(0).toUpperCase() + c.substr(1);
                        a["set" + d](this["get" + d]())
                    }
                    b.extend(a.data, this.data)
                }, this.getVideoSnap = function() {
                    var b = [];
                    return b[0] = a.common.getVideoSnap(h, k), b[1] = b[0].replace("_160_90_3", "_1"), b[2] = b[1].replace("_1.jpg", ".png"), b
                }, this.getMP4Url = function(c) {
                    var d = "",
                        e = this.getVidArray(),
                        f = "";
                    if (b.isString(c)) {
                        if (d = c, b.inArray(c, e) < 0) {
                            var g = b.Deferred();
                            return g.reject(), g
                        }
                    } else isNaN(c) ? (d = this.getVid(), f = this.getFullVid()) : f = d = this.getVidArray()[c >= e.length ? 0 : c];
                    this.lastQueryVid = f || d, this.setRid(b.createGUID());
                    var h = d + "_mp4_" + this.getFormat();
                    if ("object" == b.type(q[h]) && b.isFunction(q[h].done) && "resolved" == q[h].state()) return q[h];
                    q[h] = b.Deferred();
                    var i = this;
                    return a.h5Helper.loadVideoUrlByVid({
                        vid: d,
                        isPay: this.getPay(),
                        fmt: this.getFormat(),
                        appId: p instanceof a.Player ? p.config.appid : 0,
                        contentId: p instanceof a.Player ? p.config.contentId : ""
                    }).done(function(a, b) {
                        i.url = a, i.data = b, i.data.playtype = "mp4", q[h] && q[h].resolve(a)
                    }).fail(function(a, c) {
                        q[h] && q[h].reject(a, b.isUndefined(c) ? 0 : c)
                    }), q[h]
                }, this.getHLS = function(c) {
                    var d = "",
                        e = this.getVidArray(),
                        f = "";
                    if (b.isString(c)) {
                        if (d = c, b.inArray(c, e) < 0) {
                            var g = b.Deferred();
                            return g.reject(), g
                        }
                    } else isNaN(c) ? (d = this.getVid(), f = this.getFullVid()) : f = d = this.getVidArray()[c >= e.length ? 0 : c];
                    this.lastQueryVid = f || d, this.setRid(b.createGUID());
                    var h = d + "_hls_" + this.getFormat();
                    if ("object" == b.type(q[h]) && b.isFunction(q[h].done) && "resolved" == q[h].state()) return q[h];
                    q[h] = b.Deferred();
                    var i = this;
                    return a.h5Helper.loadHLSUrlByVid({
                        vid: d,
                        isPay: this.getPay(),
                        fmt: this.getFormat(),
                        appId: p instanceof a.Player ? p.config.appid : 0,
                        contentId: p instanceof a.Player ? p.config.contentId : ""
                    }).done(function(a, b) {
                        i.url = a, i.data = b, i.data.playtype = "hls", q[h] && q[h].resolve(a)
                    }).fail(function(a, c) {
                        q[h] && q[h].reject(a, b.isUndefined(c) ? 0 : c)
                    }), q[h]
                }, this.getPlayFormat = function() {
                    if (!b.isPlainObject(this.data)) return this.getFormat();
                    if ("object" == b.type(this.data.fl) && b.isArray(this.data.fl.fi))
                        for (var a = this.data.fl.fi, c = 0; c < a.length; c++)
                            if (1 == a[c].sl) return a[c].name;
                    return this.getFormat()
                }, this.getSrtLangList = function() {
                    return "object" == b.type(this.data.sfl) && b.isArray(this.data.sfl.fi) ? (b.each(this.data.sfl.fi, function(b, c) {
                        c.desc = a.html5lang.getSrtName(c.id)
                    }), this.data.sfl.fi) : []
                }, this.getSrtUrlList = function(c) {
                    if (b.isUndefined(c)) {
                        var d = this.getSrtLangList();
                        if (!(d.length > 0)) return b.Deferred().reject(-1);
                        c = d[0]
                    }
                    if ("object" != b.type(c) && !isNaN(c)) {
                        for (var e = 0, f = this.data.sfl.fi.length; f > e; e++)
                            if (this.data.sfl.fi[e].id == c) {
                                c = this.data.sfl.fi[e];
                                break
                            }
                        if ("object" != b.type(c)) return b.Deferred().reject(-2)
                    }
                    var g = this.getVid(),
                        h = g + "_srt_" + c.id;
                    if ("object" == b.type(q[h]) && b.isFunction(q[h].done) && "resolved" == q[h].state()) return q[h];
                    q[h] = b.Deferred();
                    var i = this;
                    return a.h5Helper.loadSRT({
                        vid: g,
                        sflid: c.id,
                        pid: i.getPid()
                    }).done(function(a) {
                        var d = [];
                        "object" == b.type(a.ul) && b.isArray(a.ul.ui) && b.each(a.ul.ui, function(a, b) {
                            d.push([b.url, "lang=" + c.name].join("?"))
                        }), q[h].resolve(d)
                    }).fail(function(a) {
                        q[h].reject(a)
                    }), q[h]
                }, this.getFormatList = function() {
                    if ("object" == b.type(r) && b.isFunction(r.done)) return r;
                    r = b.Deferred();
                    var a = this,
                        c = ["mp4", "msd"],
                        d = function() {
                            var d = [];
                            return b.isPlainObject(a.data.fl) && b.isArray(a.data.fl.fi) ? (b.each(a.data.fl.fi, function(a, e) {
                                -1 != b.inArray(e.name, c) && d.push(e.name)
                            }), d) : []
                        };
                    return this.getMP4Url().done(function() {
                        r.resolve({
                            list: d()
                        })
                    }).fail(function() {
                        r.reject({
                            list: []
                        })
                    }), r
                }, this.hasHardSubtitle = function() {
                    for (var a = video.getFormat(), b = 0, c = this.data.fl.fi.length; c > b; b++) {
                        var d = this.data.fl.fi[b];
                        if (d.name == a) return !!d.sb
                    }
                    return !1
                }, this.hasSoftSubtitle = function() {
                    return "object" == b.type(this.data.sfl) && b.isArray(this.data.sfl.fi) && this.data.sfl.fi.length > 0
                }
            }, a.PLAYTYPE = {
                LIVE: "1",
                VOD: "2"
            }
        }(tvp, tvp.$),
        function(a) {
            tvp.speedlimit = {
                buildResult: function(b) {
                    var c = !1,
                        d = !1,
                        e = a.Deferred();
                    return a.browser.MQQ && a.browser.version > 5.1 && (d = !0), d && this.mqqGetResult(b).then(function(a) {
                        a ? e.resolve(a) : e.resolve()
                    }), d && (c = !0), c || e.resolve(), setTimeout(function() {
                        e.resolve()
                    }, 3e3), e
                },
                mqqGetResult: function(b) {
                    function c() {
                        if (window.x5 && window.x5.getBrowserSignature) try {
                            var c = parseInt(tvp.$.now() / 1e3, 10);
                            x5.getBrowserSignature("vid:" + b + "[" + c + "]", function(b) {
                                b ? d.resolve({
                                    bver: a.browser.version,
                                    pkckey: b
                                }) : d.resolve()
                            }, function() {
                                d.resolve()
                            })
                        } catch (e) {
                            d.resolve()
                        } else d.resolve();
                        setTimeout(function() {
                            d.resolve()
                        }, 300)
                    }
                    var d = a.Deferred();
                    return window.x5 && window.x5.getBrowserSignature ? c() : tvp.app ? (tvp.app.loadMqqDefer || (tvp.app.loadMqqDefer = tvp.app.loadMqqAPI()), tvp.app.loadMqqDefer.done(function() {
                        c()
                    }), tvp.app.loadMqqDefer.fail(function() {
                        d.resolve()
                    })) : d.resolve(), d
                }
            }
        }(tvp.$);
    var Qvsec = {};
    Qvsec.ha = function(a) {
        function b(a, b) {
            return ((a >> 1) + (b >> 1) << 1) + (1 & a) + (1 & b)
        }
        for (var c = [], d = 0; 64 > d;) c[d] = 0 | 4294967296 * Math.abs(Math.sin(++d));
        var e = function(d) {
            for (var e, f, g, h, i = [], j = unescape(encodeURI(d)), k = j.length, l = [e = 1732584193, f = -271733879, ~e, ~f], m = 0; k >= m;) i[m >> 2] |= (j.charCodeAt(m) || 128) << 8 * (m++ % 4);
            for (i[d = (k + 8 >> 6) * a + 14] = 8 * k, m = 0; d > m; m += a) {
                for (k = l, h = 0; 64 > h;) k = [g = k[3], b(e = k[1], (g = b(b(k[0], [e & (f = k[2]) | ~e & g, g & e | ~g & f, e ^ f ^ g, f ^ (e | ~g)][k = h >> 4]), b(c[h], i[[h, 5 * h + 1, 3 * h + 5, 7 * h][k] % a + m]))) << (k = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, a, 23, 6, 10, 15, 21][4 * k + h++ % 4]) | g >>> 32 - k), e, f];
                for (h = 4; h;) l[--h] = b(l[h], k[h])
            }
            for (d = ""; 32 > h;) d += (l[h >> 3] >> 4 * (1 ^ 7 & h++) & 15).toString(a);
            return d
        };
        return e
    }(16), Qvsec.stringToHex = function(a) {
        for (var b = "", c = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), d = 0; d < a.length; d++) b += c[a.charCodeAt(d) >> 4] + c[15 & a.charCodeAt(d)];
        return b
    }, Qvsec.hexToString = function(a) {
        for (var b = "", c = "0x" == a.substr(0, 2) ? 2 : 0; c < a.length; c += 2) b += String.fromCharCode(parseInt(a.substr(c, 2), 16));
        return b
    }, Qvsec._Seed = "#$#@#*ad", Qvsec.tempcalc = function(a, b) {
        for (var c = "", d = 0; d < a.length; d++) c += String.fromCharCode(a.charCodeAt(d) ^ b.charCodeAt(d % 4));
        return c
    }, Qvsec.u1 = function(a, b) {
        for (var c = "", d = b; d < a.length; d += 2) c += a.charAt(d);
        return c
    }, Qvsec._urlStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Qvsec.urlenc = function(a, b, c) {
        for (var d, e, f, g, h, i, j, k = "", l = 0; l < a.length;) d = a.charCodeAt(l++), e = a.charCodeAt(l++), f = a.charCodeAt(l++), 15 == l && (k += "A", k += b, k += c), g = d >> 2, h = (3 & d) << 4 | e >> 4, i = (15 & e) << 2 | f >> 6, j = 63 & f, isNaN(e) ? i = j = 64 : isNaN(f) && (j = 64), k = k + Qvsec._urlStr.charAt(g) + Qvsec._urlStr.charAt(h) + Qvsec._urlStr.charAt(i) + Qvsec._urlStr.charAt(j);
        return k
    }, Qvsec.$xx = function(a, b, c, d) {
        var e = "" + Math.floor((new Date).valueOf() / 1e3),
            d = ("" + d).charAt(0),
            f = "",
            g = "",
            h = {
                plt: a || "",
                vid: b || "",
                std: c || "",
                sts: d || "",
                ts: e,
                rf: f,
                ua: g
            };
        h = window.JSON ? JSON.stringify(h) : function() {
            var a = [];
            for (var b in h) a.push('"' + b + '":"' + h[b] + '"');
            return "{" + a.join(",") + "}"
        }(h);
        var i = Qvsec.hexToString(Qvsec.ha(a + b + e + Qvsec._Seed + f + g + d.charAt(0) + c)),
            j = Qvsec.urlenc(Qvsec.tempcalc(i, Qvsec._Seed), d.charAt(0), e),
            k = Qvsec.urlenc(Qvsec.tempcalc(i, "86FG@hdf"), d.charAt(0), e),
            l = Qvsec.u1(j, 0),
            m = Qvsec.u1(j, 1);
        return {
            p: h,
            u: j,
            c: k,
            u1: l,
            u2: m,
            t: e
        }
    },
        function(a, b) {
            function c() {
                var a = "view.inews.qq.com" === i.host;
                return b.os.iphone || b.os.ipod ? a ? "v3110" : "v3010" : b.os.ipad ? a ? "v4110" : "v4010" : b.os.android ? b.os.tablet || screen.width >= 600 ? "v6010" : a ? "v5110" : "v5010" : b.browser.IEMobile ? "v7010" : "v1010"
            }

            function d(a, b) {
                for (var c = 0, d = b.length; d > c; c++)
                    if (1 == b[c].sl) return b[c].id;
                return -1
            }

            function e(c) {
                var d = {
                    cmd: 3532,
                    speed: 0,
                    appId: 0,
                    contentId: "",
                    vid: "",
                    itype: 1,
                    val: 0,
                    val2: 0,
                    str3: ""
                };
                c = b.extend(d, c), a.report(c)
            }

            function f(a) {
                a = a || {};
                var d, e = !1;
                return a.alias && "string" == typeof a.fn && a.vid && (a.fn = a.fn.replace(a.vid, a.alias), e = !0), j && "string" == typeof a.path && (a.path = a.path.replace(/\/\/(.+?)(\/|#|$|\?)/, function() {
                    return arguments.length > 1 ? arguments[0].replace(arguments[1], j) : arguments[0]
                })), d = a.path.indexOf("?") > -1 ? a.path + "&" + a.fn + "&vkey=" + a.vkey + "&br=" + a.br + "&platform=2&fmt=" + a.fmt + "&level=" + a.level + "&sdtfrom=" + c() : a.path + a.fn + "?vkey=" + a.vkey + "&br=" + a.br + "&platform=2&fmt=" + a.fmt + "&level=" + a.level + "&sdtfrom=" + c(), b.isString(a.sha) && a.sha.length > 0 && (d += "&sha=" + a.sha), e && (d += "&vidalias=1"), d
            }

            function g(a) {
                return function(c) {
                    e(b.extend(a, c))
                }
            }

            function h(d) {
                var e, f, g, h = "",
                    i = 1,
                    j = {};
                if ("object" == typeof Qvsec && "function" == typeof Qvsec.$xx && "string" == typeof d) {
                    e = b.getUrlParam("platform", d), f = b.getUrlParam("vids", d), g = c();
                    try {
                        j = Qvsec.$xx(e, f, g, i)
                    } catch (k) {
                        "function" == typeof a.reportErr && k && k.message && a.reportErr(k.message)
                    }
                    j && (h = h + "&_qv_rmt=" + j.u1, h = h + "&_qv_rmt2=" + j.u2, h = h + "&sdtfrom=" + g, d = d + (-1 == d.indexOf("?") ? "?" : "&") + h, b.cookie.set("qv_als", j.c))
                }
                return d
            }
            var i = {
                    isHLS: !1,
                    isPay: !1,
                    vid: "",
                    fmt: "auto",
                    platform: 11001,
                    host: window != top ? document.referrer : document.location.host
                },
                j = "";
            i.cgi = function() {
                if ("view.inews.qq.com" === i.host) {
                    var a = "";
                    return b.browser.WeChat && (a = "nocache=1&"), {
                        getinfo: "http://wxv.video.qq.com/getinfo?callback=?&",
                        getkey: "http://wxv.video.qq.com/getkey?callback=?&" + a
                    }
                }
                return {
                    getinfo: "http://vv.video.qq.com/getinfo?callback=?&",
                    getkey: "http://vv.video.qq.com/getkey?callback=?&"
                }
            }(), i.retryCgi = function() {
                return b.browser.WeChat || b.browser.MQQClient ? {
                    getinfo: i.cgi.getinfo.replace(/(\/\/)(.+?)(\/|$)/, "$1bkpush.video.qq.com$3"),
                    getkey: i.cgi.getkey.replace(/(\/\/)(.+?)(\/|$)/, "$1bkpush.video.qq.com$3")
                } : {
                    getinfo: i.cgi.getinfo.replace(/(\/\/)(.+?)(\/|$)/, "$1tt.video.qq.com$3"),
                    getkey: i.cgi.getkey.replace(/(\/\/)(.+?)(\/|$)/, "$1tt.video.qq.com$3")
                }
            }(), a.h5Helper = {
                loadVideoUrlByVid: function(c) {
                    var d = "";
                    return a.speedlimit ? (d = b.Deferred(), a.speedlimit.buildResult().done(function(b) {
                        var e = a.h5Helper.loadVideoUrlByVid_base(c, b);
                        e.done(function(a, b) {
                            d.resolve(a, b)
                        }), e.fail(function(a, b) {
                            d.reject(a, b)
                        })
                    })) : d = a.h5Helper.loadVideoUrlByVid_base(c), d
                },
                loadVideoUrlByVid_base: function(e, j) {
                    var k = {},
                        l = {},
                        m = b.Deferred();
                    b.extend(b.extend(k, i), e);
                    var n = new a.RetCode(100126),
                        o = !1,
                        p = i.cgi.getinfo,
                        q = b.now(),
                        r = 0,
                        s = "",
                        t = b.noop,
                        u = i.cgi.getkey;
                    return e.retryDefer && b.isFunction(e.retryDefer.reject) && (o = !0, m = e.retryDefer, p = i.retryCgi.getinfo, u = i.retryCgi.getkey), e.loadingAdCgi && (p = e.loadingAdCgi), s = p + b.param({
                        vids: k.vid,
                        platform: k.platform,
                        charge: k.isPay ? 1 : 0,
                        otype: "json",
                        defaultfmt: k.fmt,
                        sb: 1,
                        nocache: b.browser.MQQClient || b.browser.WeChat ? 1 : 0,
                        _rnd: (new Date).valueOf()
                    }), j && "object" === b.type(j) && (s += "&" + b.param(j)), s = h(s), t = g({
                        itype: 1,
                        val2: o ? 1 : 0,
                        str3: s,
                        vid: k.vid,
                        appId: k.appId,
                        contentId: k.contentId
                    }), n.begin(), t(), b.ajax({
                        url: s,
                        dataType: "jsonp"
                    }).done(function(i) {
                        var j, p = 0,
                            v = void 0;
                        if (r = b.now() - q, i && i.s ? "o" != i.s ? (p = i.em || 50, v = i.exem) : i.vl && i.vl.vi && b.isArray(i.vl.vi) && 0 != i.vl.cnt ? j = i.vl.vi[0] : p = 68 : p = 50, 0 != p || 5 == j.fst && b.isPlainObject(j.ul) && b.isArray(j.ul.ui) && 0 != j.ul.ui.length ? 0 == p && 2 != j.st && (8 != j.st ? p = 62 : (p = 83, v = j.ch)) : p = 62, 0 != p) return t({
                            val: p,
                            speed: r
                        }), n.reportErr(p), void m.reject(p, v);
                        if (n.reportSuc(), t({
                            val: 0,
                            speed: r
                        }), e.loadingAdCgi) return void m.resolve(j.ul.ui[0].url, {
                            vl: i.vl,
                            fl: i.fl,
                            sfl: i.sfl,
                            exem: i.exem,
                            preview: i.preview
                        });
                        if (j.fvkey) return v = f({
                            path: j.ul.ui[0].url,
                            fn: j.fn,
                            vkey: j.fvkey,
                            br: j.br,
                            platform: 2,
                            fmt: k.fmt,
                            level: j.level,
                            sdtfrom: c(),
                            sha: j.fsha,
                            vid: k.vid,
                            alias: j.alias
                        }), void m.resolve(v, {
                            vl: i.vl,
                            fl: i.fl,
                            sfl: i.sfl,
                            exem: i.exem,
                            preview: i.preview
                        });
                        var w, x = j.ul.ui[0];
                        l.br = j.br, l.path = x.url, l.fn = j.fn, l.fiid = d(k, i.fl.fi), l.vt = x.vt, w = new a.RetCode(100127), w.begin(), q = b.now(), s = u + b.param({
                            otype: "json",
                            vid: k.vid,
                            format: l.fiid,
                            filename: l.fn,
                            platform: k.platform,
                            vt: l.vt,
                            charge: k.isPay ? 1 : 0,
                            _rnd: (new Date).valueOf()
                        }), s = h(s), t = g({
                            itype: 2,
                            val2: o ? 1 : 0,
                            str3: s,
                            vid: k.vid,
                            appId: k.appId,
                            contentId: k.contentId
                        }), t(), b.ajax({
                            url: s,
                            dataType: "jsonp"
                        }).done(function(a) {
                            var d = "";
                            return p = 0, r = b.now() - q, a && a.s ? "o" != a.s && (p = a.em || 50) : p = 50, 0 != p ? (w.reportErr(p), t({
                                val: p,
                                speed: r
                            }), void m.reject(p)) : (d = f({
                                path: l.path,
                                fn: l.fn,
                                vkey: a.key,
                                br: l.br,
                                platform: 2,
                                fmt: k.fmt,
                                level: a.level,
                                sdtfrom: c(),
                                sha: a.sha,
                                vid: k.vid,
                                alias: j.alias
                            }), w.reportSuc(), t({
                                val: 0,
                                speed: r
                            }), void m.resolve(d, {
                                vl: i.vl,
                                fl: i.fl,
                                sfl: i.sfl,
                                exem: i.exem,
                                preview: i.preview
                            }))
                        }).fail(function() {
                            w.reportErr(), t({
                                val: 500,
                                speed: b.now() - q
                            }), o ? m.reject(500, 2) : (e.retryDefer = m, a.h5Helper.loadVideoUrlByVid(e))
                        })
                    }).fail(function() {
                        n.reportErr(), t({
                            val: 500,
                            speed: b.now() - q
                        }), o ? m.reject(500, 1) : (e.retryDefer = m, a.h5Helper.loadVideoUrlByVid(e))
                    }), m
                },
                loadHDVideoUrlByVid: function(b) {
                    b.fmt = "mp4", a.h5Helper.loadVideoUrlByVid(b)
                },
                loadHLSUrlByVid: function(c) {
                    var d = {},
                        e = b.Deferred();
                    b.extend(b.extend(d, i), c);
                    var f = new a.RetCode(100128),
                        j = "http://vv.video.qq.com/gethls?callback=?&" + b.param({
                            vid: d.vid,
                            charge: d.isPay ? 1 : 0,
                            otype: "json",
                            platform: d.platform,
                            _rnd: (new Date).valueOf()
                        }),
                        k = g({
                            itype: 3,
                            str3: j,
                            vid: d.vid,
                            appId: d.appId,
                            contentId: d.contentId
                        }),
                        l = b.now();
                    return j = h(j), k(), f.begin(), b.ajax({
                        url: j,
                        dataType: "jsonp"
                    }).done(function(c) {
                        if (!c || !c.s) return f.reportErr(50), k({
                            speed: b.now() - l,
                            val: 50
                        }), void e.reject(50);
                        if ("o" != c.s) return f.reportErr(c.em || 50), k({
                            speed: b.now() - l,
                            val: c.em || 50
                        }), void e.reject(c.em || 50);
                        if (!c.vd || !c.vd.vi || !a.$.isArray(c.vd.vi)) return f.reportErr(68), k({
                            speed: b.now() - l,
                            val: 68
                        }), void e.reject(68);
                        for (var d = [], g = -2, h = 0; h < c.vd.vi.length; h++)
                            if (g = c.vd.vi[h].ch, 2 == c.vd.vi[h].st) {
                                var i = c.vd.vi[h].url.toLowerCase();
                                if (!(i.indexOf(".mp4") < 0 && i.indexOf(".m3u8") < 0) && c.vd.vi[h].url) {
                                    var j = c.vd.vi[h];
                                    d.push(j.url);
                                    break
                                }
                            }
                        return 0 == d.length ? (f.reportErr(68), k({
                            speed: b.now() - l,
                            val: 68
                        }), void e.reject(68, g)) : (k({
                            speed: b.now() - l,
                            val: 0
                        }), f.reportSuc(), void e.resolve(d[0], c.vd))
                    }).fail(function() {
                        f.reportErr(), k({
                            speed: b.now() - l,
                            val: 500
                        }), e.reject(500, 3)
                    }), e
                },
                load3GVideoUrl: function(b) {
                    b.fmt = "msd", a.h5Helper.loadVideoUrlByVid(b)
                },
                loadIsUseHLS: function(c) {
                    var d = {},
                        e = b.Deferred();
                    b.extend(b.extend(d, i), c);
                    var f = new a.RetCode(100125);
                    return f.begin(), b.ajax({
                        url: "http://vv.video.qq.com/getdtype?callback=?&" + b.param({
                            vids: d.vid,
                            platform: d.platform,
                            otype: "json",
                            _rnd: (new Date).valueOf()
                        }),
                        dataType: "jsonp"
                    }).done(function(a) {
                        var d = 1;
                        if ("object" != b.type(a)) return f.reportErr(), void e.reject(500, 4);
                        if ("o" != a.s || !b.isArray(a.dl) || 0 == a.dl.length) return f.reportErr(a.em), void e.reject(a.em || 50);
                        for (var g = 0, h = a.dl.length; h > g; g++) a.dl[g].vid === c.vid && (d = a.dl[g].dltype);
                        f.reportSuc(), e.resolve(d, a)
                    }).fail(function() {
                        f.reportErr(), e.reject(500, 4)
                    }), e
                },
                loadSRT: function(a) {
                    var c = {},
                        d = b.Deferred();
                    return b.extend(b.extend(c, i), a), b.ajax({
                        url: "http://vv.video.qq.com/getsurl?" + b.param({
                            vid: c.vid,
                            format: c.sflid,
                            platform: c.platform,
                            pid: c.pid,
                            otype: "json",
                            _rnd: (new Date).valueOf()
                        }),
                        dataType: "jsonp"
                    }).done(function(a) {
                        return "object" != b.type(a) ? void d.reject(500) : "o" != a.s ? void d.reject(isNaN(a.em) ? 500 : a.em, a.msg || "") : void d.resolve(a)
                    }).fail(function() {
                        d.reject(500)
                    }), d
                },
                setSpecialVideoFileDomain: function(a) {
                    "string" == typeof a && /^(\S+[\.])?qq\.com/.test(location.host) && (j = a)
                }
            }
        }(tvp, tvp.$),
        function(a, b) {
            a.BasePlayer = function() {
                var c = {};
                this.modId = "", this.sessionId = "", this.$mod = null, this.videomod = null, this.playerid = "", this.curVideo = null, this.instance = null, this.dataset = {}, this.eventList = ["inited", "play", "playing", "ended", "allended", "pause", "timeupdate", "getnext", "error", "stop", "fullscreen", "change", "write", "flashpopup", "getnextenable", "msg"], this.config = {}, this.hijackFun = ["getPlayer", "getCurVideo", "showPlayer", "hidePlayer", "play", "pause", "getPlaytime", "setPlaytime", "getPlayerType", "resize"], this.prototype = {},
                    function(b) {
                        var c = ["init", "addParam", "write", "setPlayerReady"];
                        c = c.concat(b.hijackFun);
                        for (var d = 0, e = c.length; e > d; d++) b.prototype[c[d]] = a.$.noop
                    }(this), this.addParam = function(a, b) {
                    this.config[a] = b
                }, this.on = function(a, d) {
                    a && b.isFunction(d) && (c[a] = b.isArray(c[a]) ? c[a] : [], c[a].push(d))
                }, this.trigger = function(a) {
                    var d, e, f;
                    if (a && b.isArray(c[a]))
                        for (e = 0, f = c[a].length; f > e; e++) b.isFunction(c[a][e]) && (d = Array.prototype.slice.call(arguments, 1), c[a][e].apply(null, d))
                }, this.off = function(a, d) {
                    var e;
                    a && b.isArray(c[a]) && (d ? (e = b.inArray(d, c[a]), e >= 0 && (c[a][e] = void 0)) : c[a] = void 0)
                }
            }, a.BasePlayer.prototype = {
                setCurVideo: function(a) {
                    this.curVideo = a
                },
                getPlayer: function() {
                    return null
                },
                getCurVideo: function() {
                    return this.curVideo
                },
                getCurVid: function() {
                    return this.curVideo instanceof a.VideoInfo ? this.curVideo.getVid() : ""
                },
                getCurVidList: function() {
                    return this.curVideo instanceof a.VideoInfo ? this.curVideo.getVidList() : ""
                },
                init: function(c) {
                    b.extend(this.config, c);
                    for (var d = 0, e = this.eventList.length; e > d; d++) {
                        var f = "on" + this.eventList[d];
                        this[f] = b.isFunction(this.config[f]) ? this.config[f] : a.$.noop
                    }
                    this.setCurVideo(this.config.video), this.write(this.config.modId)
                },
                write: function(a) {
                    b("#" + a).html("here is player of base")
                },
                log: function(a) {
                    window.console && window.console.log(a)
                },
                getCBEvent: function(c) {
                    var d = void 0;
                    return this.instance && b.isFunction(this.instance[c]) && this.instance[c] != a.$.noop ? d = this.instance[c] : b.isFunction(this[c]) && this[c] != a.$.noop && (d = this[c]), d
                },
                callCBEvent: function(a) {
                    var c = this.getCBEvent(a);
                    if (b.isFunction(c)) {
                        var d = Array.prototype.slice.call(arguments, 1);
                        return c.apply(this, d)
                    }
                    return void 0
                },
                resize: function(a, c) {
                    var d = this.getPlayer();
                    d && (d.style.width = b.formatSize(a), d.style.height = b.formatSize(c))
                },
                showPlayer: function() {
                    var a = this.getPlayer();
                    a && (a.style.position = "relative", a.style.left = "0px", a.style.top = "0px", (b.browser.MQQ || b.browser.UC) && (a.style.height = parseInt(this.config.height) + "px"))
                },
                hidePlayer: function() {
                    var c = this.getPlayer();
                    c && (c.style.position = "absolute", c.style.left = "-200%", (b.browser.MQQ || b.browser.UC) && (c.style.height = "1px"), a.log("clientWidth:" + c.clientWidth))
                },
                execFlashMethod: function(a) {
                    var b, c = this.getPlayer(),
                        d = [];
                    if (c && c[a]) {
                        d = [].slice.call(arguments, 1);
                        try {
                            return b = c[a].apply(c, d)
                        } catch (e) {}
                    }
                }
            }
        }(tvp, tvp.$),
        function(a, b) {
            a.html5lang = {
                errMsg: {
                    "default": "\u62b1\u6b49,\u6682\u4e0d\u652f\u6301\u64ad\u653e",
                    0: "\u5f53\u524d\u89c6\u9891\u6587\u4ef6\u65e0\u6cd5\u64ad\u653e",
                    68: "CGI\u7cfb\u7edf\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-1": "cgi\u53c2\u6570\u9519\u8bef/cgi\u5411\u670d\u52a1\u5668\u53d1\u5305\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-2": "cgi\u4ece\u670d\u52a1\u5668\u63a5\u5305\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-3": "cgi\u4ece\u670d\u52a1\u5668\u89e3\u5305\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-4": "cgi\u8fde\u63a5\u670d\u52a1\u5668\u7f51\u7edc\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-6": "cgi\u8fde\u63a5\u670d\u52a1\u8d85\u65f6,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-7": "cgi\u8bbf\u95ee\u670d\u52a1\u672a\u77e5\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    50: "CGI\u7cfb\u7edf\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    52: "\u8bbf\u95ee\u89c6\u9891\u4ed8\u8d39\u4fe1\u606f\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    64: "\u6821\u9a8c\u89c6\u9891\u4ed8\u8d39\u4fe1\u606f\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    51: "vid\u4e2a\u6570\u8d85\u51fa\u8303\u56f4",
                    61: "vid\u4e0d\u5408\u6cd5",
                    62: "\u89c6\u9891\u72b6\u6001\u4e0d\u5408\u6cd5",
                    63: "\u6e05\u6670\u5ea6\u683c\u5f0f\u4e0d\u5408\u6cd5",
                    65: "\u901f\u5ea6\u683c\u5f0f\u4e0d\u5408\u6cd5",
                    67: "\u89c6\u9891\u683c\u5f0f\u4e0d\u5b58\u5728",
                    69: "format\u5217\u8868\u4e3a\u7a7a",
                    71: "\u672a\u627e\u5230HLS CDN",
                    73: "\u751f\u6210\u6587\u4ef6\u540d\u5931\u8d25",
                    74: "\u5206\u7247\u53f7\u4e0d\u5408\u6cd5",
                    76: "\u83b7\u53d6m3u8\u6587\u4ef6\u540d\u5931\u8d25",
                    77: "\u751f\u6210HLS key\u5931\u8d25",
                    80: {
                        0: "\u56e0\u7248\u6743\u9650\u5236,\u8bf7\u5230\u817e\u8baf\u89c6\u9891\u89c2\u770b",
                        1: "\u6839\u636e\u60a8\u5f53\u524d\u7684IP\u5730\u5740\uff0c\u8be5\u5730\u533a\u6682\u4e0d\u63d0\u4f9b\u64ad\u653e",
                        2: "\u56e0\u7248\u6743\u9650\u5236\uff0c\u6682\u4e0d\u652f\u6301\u64ad\u653e",
                        callback: function(b, c, d) {
                            if (0 == parseInt(c) && a.app && d && d.vid) {
                                var e = a.html5skin.errorDownloader;
                                a.app.check(d).done(function(a) {
                                    if (a.url) {
                                        var c = b.find(".tvp_player_error_content"),
                                            d = b.find(".text").html();
                                        d = d.substr(0, d.indexOf("(")), e ? (d = e.replace("${errorMsg}", d), d = d.replace("${url}", a.url)) : d = '<a href="' + a.url + '">' + d + "</a>", c.length && c.html(d)
                                    }
                                })
                            }
                        }
                    },
                    81: "referer\u9650\u5236",
                    82: "qzone\u6743\u9650\u9650\u5236",
                    83: {
                        main: "\u89c6\u9891\u4ed8\u8d39\u9650\u5236",
                        "-2": "\u60a8\u53ef\u80fd\u672a\u767b\u5f55\u6216\u767b\u5f55\u8d85\u65f6",
                        "-1": "\u89c6\u9891\u72b6\u6001\u975e\u6cd5"
                    },
                    84: "\u8bbf\u95eeIP\u662f\u9ed1\u540d\u5355",
                    85: {
                        main: "CGI\u8bbf\u95eekey\u4e0d\u6b63\u786e",
                        "-1": "key\u957f\u5ea6\u5931\u8d25",
                        "-2": "magicnum\u6821\u9a8c\u5931\u8d25",
                        "-3": "\u65f6\u95f4\u6821\u9a8c\u5931\u8d25",
                        "-4": "platform\u6821\u9a8c\u5931\u8d25",
                        "-5": "clientVer\u6821\u9a8c\u5931\u8d25",
                        "-6": "encryptVer\u6821\u9a8c\u5931\u8d25"
                    },
                    86: "CGI\u8bbf\u95ee\u9891\u7387\u9650\u5236",
                    500: {
                        main: "\u83b7\u53d6\u670d\u52a1\u5668\u6570\u636e\u5931\u8d25",
                        1: "getinfo failed",
                        2: "getkey failed"
                    }
                },
                getErrMsg: function(c, d) {
                    if (isNaN(c)) return "";
                    if (c in a.html5lang.errMsg) {
                        var e = a.html5lang.errMsg[c];
                        if (b.isString(e)) return e;
                        if (b.isPlainObject(e)) {
                            var f = [e.main, e.main ? "," : "", d in e ? e[d] : ""].join("");
                            return f || a.html5lang.errMsg["default"]
                        }
                    }
                    return a.html5lang.errMsg["default"]
                },
                definition: {
                    mp4: "\u9ad8\u6e05",
                    msd: "\u6d41\u7545"
                },
                srtLang: {
                    50001: {
                        srclang: "zh-cn",
                        desc: "\u7b80\u4f53\u4e2d\u6587"
                    },
                    50002: {
                        srclang: "zh-cn",
                        desc: "\u7b80\u4f53\u4e2d\u6587"
                    },
                    50003: {
                        srclang: "zh-tw",
                        desc: "\u7e41\u4f53\u4e2d\u6587"
                    },
                    50004: {
                        srclang: "en",
                        desc: "\u82f1\u6587"
                    },
                    50005: {
                        srclang: "zh-cn,en",
                        desc: "\u7b80\u4f53\u4e2d\u6587&\u82f1\u6587"
                    },
                    50006: {
                        srclang: "zh-tw,en",
                        desc: "\u7e41\u4f53\u4e2d\u6587&\u82f1\u6587"
                    }
                },
                durationLimit: {
                    msg: "5\u5206\u949f\u770b\u7684\u4e0d\u591f\u723d\uff1f\u817e\u8baf\u89c6\u9891\u6709\u9ad8\u6e05\u5b8c\u6574\u7248\uff0c\u7b49\u4f60\u6765\u770b~",
                    padMsg: "\u672c\u8282\u76ee\u53ea\u63d0\u4f9b5\u5206\u949f\u9884\u89c8\u3002\u817e\u8baf\u89c6\u9891\u5ba2\u6237\u7aef\u53ef\u4ee5\u89c2\u770b\u9ad8\u6e05\u5b8c\u6574\u7248\uff0c\u7b49\u4f60\u5594~",
                    download: "\u4e0b\u8f7dAPP",
                    padPlay: "\u7acb\u5373\u64ad\u653e",
                    play: "\u7ee7\u7eed\u64ad\u653e",
                    replay: "\u91cd\u65b0\u64ad\u653e",
                    open: "\u53bb\u770b\u5b8c\u6574\u7248"
                },
                liveDownloader: {
                    downloadText: "\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u89c2\u770b\u89c6\u9891\u76f4\u64ad",
                    openText: "\u6253\u5f00\u817e\u8baf\u89c6\u9891\uff0c\u89c2\u770b\u89c6\u9891\u76f4\u64ad"
                },
                getDefiName: function(b) {
                    return b in a.html5lang.definition ? a.html5lang.definition[b] : ""
                },
                getSrtName: function(b) {
                    return b in a.html5lang.srtLang ? a.html5lang.srtLang[b].desc : ""
                }
            }
        }(tvp, tvp.$), tvp.html5skin = {
        defaultError: function() {
            return ['<div class="tvp_container">', '	<div class="tvp_player_error" id="$ERROR-TIPS-INNER$">', '       <div class="tvp_player_error_row">', '		<div class="tvp_player_error_content">', '			<p class="text">$ERROR-MSG$ $ERROR-DETAIL$</p>', "		</div>", "       </div>", "	</div>", "</div>"].join("")
        }(),
        errorDownloader: function() {
            return ['<div class="tvp_player_goto_app">', '	<a href="${url}" class="tvp_download_app_inner">', '       <i class="tpv_icon_download"></i>', '		<span class="tvp_icon_text">${errorMsg}</span>', "	</a>", "</div>"].join("")
        }(),
        durationLimit: function() {
            return ['<div style="display:none" class="tvp_limit_tips" data-role="durationLimit">', '   <div class="tvp_limit_tips_inner">', '		<div class="tvp_tips_content">', '			<p class="tvp_tips_text">${msg}</p>', "		</div>", '		<div class="tvp_btn_line">', '			<span data-role="durationLimit-play" class="tvp_btn tvp_btn_try">${play}</span>', '			<span  data-role="durationLimit-replay" class="tvp_btn tvp_btn_try">${replay}</span>', '			<a data-action="applink" ${iframe} href="${url}" data-url="" data-role="durationLimit-download" class="tvp_btn tvp_btn_download">${download}</a>', '			<a data-action="applink" href="" data-url="" data-role="durationLimit-open" class="tvp_btn tvp_btn_download">${open}</a>', "		</div>", "	</div>", "</div>"].join("")
        }(),
        liveDownloader: function() {
            return ['<div  data-role="liveDownloader" style="z-index:10;display:none"  class="tvp_live_download_app">', '<a data-action="applink" href="${url}" data-url="${liveOpenUrl}" ${iframe} data-role="liveDownloader-btn" class="tvp_download_app_inner">', '<i class="tpv_icon_download"></i>', '<span data-role="liveDownloader-text" class="tvp_icon_text">${downloadText}</span>', "</a>", "</div>"].join("")
        }(),
        follow: function() {
            return '<a class="tvp_follow" data-role="appfollow_followbtn" data-follow="follow">							<span class="tvp_icon_follow"></span>							<span class="tvp_icon_text" data-role="appfollow_followtext">\u5173\u6ce8</span>						</a>						<div class="tvp_follow_hint">							<div class="tvp_hint_title">\u5173\u6ce8\u6210\u529f\uff01</div>							<div class="tvp_hint_desc" data-role="bannerText">{FOLLOWTEXT}</div>						</div>'
        }()
    },
        function(a, b) {
            a.BaseHtml5 || (a.BaseHtml5 = function() {
                this.protectedFn = {}, this.h5EvtAdapter = {}, this.eventList = this.eventList.concat(["html5error"]), this.html5AttrList = {
                    autoplay: "autoplay",
                    "x-webkit-airplay": "isHtml5UseAirPlay",
                    "webkit-playsinline": "isiPhoneShowPlaysinline"
                }, this.$videomod = null
            }, a.BaseHtml5.fn = a.BaseHtml5.prototype = new a.BasePlayer, b.extend(a.BaseHtml5.fn, {
                getPlayer: function() {
                    return this.videoTag
                },
                getPlayerType: function() {
                    return "html5"
                },
                createVideoHtml: function() {
                    this.playerid = this.config.playerid, this.playerid || (this.playerid = "tenvideo_video_player_" + a.BaseHtml5.maxId++);
                    var c = ['<video id="', this.playerid, '" width="100%" height="100%" '].join(""),
                        d = this;
                    this.config.isHtml5UseUI && (b.os.iphone || b.os.ipod) && this.config.isIOSVideoOffset && (c += 'style="position:absolute;top:-200%;left:-200%"'), this.config.isHtml5UseUI && this.config.isHtml5ShowPosterOnStart && b.os.android && (c += b.browser.UC ? 'style="position:absolute;left:-200%;"' : 'style="position:absolute;top:-200%;"', setTimeout(function() {
                        if (d.videoTag && 1 == d.$video.size()) {
                            var a = !1;
                            d.$video.one("playing", function() {
                                a || (a = !0, d.videoTag.style.cssText = "")
                            }).one("tvp:h5ui:playbtn:click", function() {
                                a || (a = !0, d.videoTag.style.cssText = "")
                            })
                        }
                    }, 100));
                    for (var e in this.html5AttrList) {
                        c += " ";
                        var f = this.html5AttrList[e],
                            g = "";
                        if ("" == f) g = "";
                        else {
                            if (!(f in this.config)) continue;
                            g = this.config[f]
                        }
                        g !== !1 && "disabled" != g && 0 !== g && ("autoplay" == e && this.config.isHtml5ShowLoadingAdOnStart || (c += e, "autoplay" != e || 1 != g ? "" != g && (c += ["=", g].join("")) : c += '="autoplay"'))
                    }
                    if (!this.isUseControl && b.os.iphone) {
                        var h = this.config.html5ForbiddenUIFeature.join("-");
                        h.indexOf("controlbar") > -1 && (this.isUseControl = !0)
                    }
                    this.isUseControl && (c += " controls ");
                    var i = this.curVideo.getPoster();
                    return b.isString(i) && i.length > 0 && -1 == b.inArray("posterlayer", this.config.html5VodUIFeature) && (c += " poster='" + i + "'"), i || !this.config.pic || this.config.isHtml5UseUI || (c += " poster='" + this.config.pic + "'"), c += "></video>"
                },
                write: function(c) {
                    var d = null;
                    if ("object" == b.type(c) && 1 == c.nodeType ? (d = c, this.$mod = b(c), this.modId = this.$mod.attr("id") || "") : (d = a.$.getByID(c), this.modId = c, this.$mod = b("#" + c)), d) {
                        var e = this.createVideoHtml(),
                            f = "mod_" + this.playerid;
                        d.innerHTML = '<div id="' + f + '">' + e + "</div>", this.videomod = b.getByID(f), this.$videomod = b(this.videomod), this.$videomod.width(b.formatSize(this.config.width)).height(b.formatSize(this.config.height)), this.videoTag = b.getByID(this.playerid), this.$video = b(this.videoTag), this.registerMonitor(), this.bindEventAdapt(), this.checkPlayerSize()
                    }
                },
                checkPlayerSize: function() {
                    function a() {
                        b.isFullScreen || setTimeout(function() {
                            var a = b.config.width,
                                d = b.config.height,
                                e = parseInt(c.width(), 10),
                                f = parseInt(c.height(), 10);
                            d.toString().indexOf("%") > -1 || f > e && (f = parseInt(9 * e / 16, 10), e = a, b.resize(e, f))
                        }, 100)
                    }
                    var b = this,
                        c = this.$videomod ? this.$videomod : this.$elements;
                    this.config.isCheckPlayerSize && c && (a(), window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
                        a()
                    }, !1))
                },
                resize: function(a, c) {
                    this.config.width = a, this.config.height = c;
                    var d = this.$videomod ? this.$videomod : this.$elements;
                    d && (d.width(b.formatSize(a)).height(b.formatSize(c)), d.trigger("tvp:resize"))
                },
                showError: function(c, d, e) {
                    var f = this;
                    setTimeout(function() {
                        var g = f.getCBEvent("showError");
                        if (b.isFunction(g) && g != f.showError) g.call(f, c, d, e);
                        else if (b.isFunction(f.config.showError)) f.config.showError.call(f, c, d, e);
                        else {
                            var h = a.html5skin.defaultError,
                                i = f.playerid + "_errtips_inner",
                                j = "\u9519\u8bef\u7801:" + c,
                                k = d || 0 == d ? "_" + d : "";
                            a.html5lang.errMsg[c] && a.html5lang.errMsg[c].nocode && (k = ""), h = h.replace("$ERROR-TIPS-INNER$", i).replace("$ERROR-MSG$", e || a.html5lang.getErrMsg(c, d)).replace("$ERROR-DETAIL$", "(" + j + k + ")");
                            var l = b(f.videomod),
                                m = b(h).appendTo(l).show();
                            l.html(""), m.appendTo(l);
                            try {
                                a.html5lang.errMsg[c] && a.html5lang.errMsg[c].callback && a.html5lang.errMsg[c].callback(m, d, {
                                    vid: f.curVideo.getVid()
                                })
                            } catch (n) {}
                        }
                    }, 250), this.callCBEvent("onerror", c, d)
                },
                isUseH5UIFeature: function(a) {
                    return b.inArray(a, this.config.html5VodUIFeature) >= 0
                },
                isForbiddenH5UIFeature: function(a) {
                    return b.inArray(a, this.config.html5ForbiddenUIFeature) >= 0
                },
                callProtectFn: function(a) {
                    b.isFunction(this.protectedFn[a]) && this.protectedFn[a].call(this)
                },
                registerMonitor: function() {
                    b.isFunction(this.buildmonitor) && this.buildmonitor.call(this)
                },
                bindEventAdapt: function() {
                    var a = ["-empty", "-abort", "-loadstart", "-can-play", "-can-play-through", "-loaded-data", "-loaded-metadata", "-abort", "-error", "-pause", "-paused", "-waiting", "-stalled", "-suspend", "-play", "-volume-change", "-playing", "-seeked", "-seeking", "-duration-change", "-progress", "-rate-change", "-timeupdate", "-ended"],
                        c = this;
                    b.each(a, function(a, d) {
                        var e = "on" + b.camelCase(d),
                            f = c.h5EvtAdapter[e];
                        b.isFunction(f) && c.$video.on(d.replace(/-/g, ""), function(a) {
                            var d = c.h5EvtAdapter[e];
                            b.isFunction(d) && d.call(c, this, a)
                        })
                    })
                }
            }), a.BaseHtml5.maxId = 0)
        }(tvp, tvp.$),
        function(a, b) {
            function c() {
                return b.os.android && !i && !b.os.HTC && !b.os.VIVO
            }

            function d(c, d) {
                var e = c.currentTime,
                    f = 0,
                    g = !1,
                    h = null;
                i = !0, c.play(), c.addEventListener("playing", function() {
                    clearTimeout(h), h = setTimeout(m, 320)
                }, !1);
                var j = function(c, e) {
                        var f = {
                            cmd: 3547,
                            val: c
                        };
                        d && d.config && (f.contentId = d.config.contentId, f.appId = d.config.appid || d.config.appId), e = e || {}, f = b.extend(f, e), a.report(f)
                    },
                    k = !1,
                    l = !1,
                    m = function() {
                        a.debug("cb"), c.currentTime != e || g ? (g = !0, k && !l && (j(f, {
                            int5: 1
                        }), l = !0)) : (f++, c.play(), f % 10 == 0 && c.currentTime == e && (c.load(), c.play(), k || (j(f), k = !0)), h = setTimeout(m, 1e3))
                    };
                h = setTimeout(m, 1e3)
            }

            function e(c, d) {
                this.videoTag = null, this.$video = null, this.config.width = a.$.filterXSS(c), this.config.height = a.$.filterXSS(d), this.protectedFn = {}, this.isUseControl = !0, b.extend(this.h5EvtAdapter, {
                    onEnded: function() {
                        if (!this.isPlayingLoadingAd()) {
                            this.$video.trigger("tvp:player:ended"), this.callCBEvent("onended", g);
                            var c = "",
                                d = this.curVideo.getVidList().split("|"),
                                e = b.inArray(g, d);
                            if (e > -1 && e < d.length - 1 && (c = d[e + 1]), "" != c) return void this.play(c);
                            this.callCBEvent("onallended"), this.$video.trigger("tvp:player:allended"), this.config.isHtml5ShowPosterOnEnd && this.setPoster(), this.config.isShowDurationLimit && this.DurationLimitInstance && this.DurationLimitInstance.show(1);
                            var f = this.callCBEvent("ongetnext", g, this.curVideo);
                            f && f instanceof a.VideoInfo && this.play(f)
                        }
                    },
                    onError: function(b, c) {
                        if (a.report({
                            cmd: 3525,
                            appId: this.config.appid,
                            contentId: this.config.contentId,
                            vid: this.curVideo.lastQueryVid,
                            str4: navigator.userAgent
                        }), c.target.currentSrc.indexOf(".m3u8") > 0) return a.debug("play hls error,reload play mp4..."), void this.play(this.curVideo.lastQueryVid, this.config.autoplay, !1);
                        var d = -1;
                        c.target && c.target.error && (d = c.target.error.code), 4 == d && this.showError(0, d)
                    },
                    onPlaying: function() {
                        this.callCBEvent("onplaying", g, this.curVideo), this.isShowingDurationLimit() && this.pause()
                    },
                    onTimeupdate: function() {
                        this.callCBEvent("ontimeupdate", g, this.$video)
                    },
                    onPause: function() {
                        b.os.android && this.config.isHtml5UseUI && this.$video.addClass("tvp_video_with_skin"), this.callCBEvent("onpause", g, this.$video)
                    }
                })
            }
            if (!a.Html5Tiny) {
                var f = !1,
                    g = "",
                    h = null,
                    i = !1;
                e.fn = e.prototype = new a.BaseHtml5, b.extend(e.prototype, {
                    registerPlugins: function() {
                        var c = this,
                            d = [];
                        b.each(d, function(d, e) {
                            try {
                                var f = "build" + e;
                                b.isFunction(c[f]) && c[f](c)
                            } catch (g) {
                                a.debug("[registerPlugins]:" + g.message)
                            }
                        })
                    },
                    write: function(e) {
                        a.BaseHtml5.prototype.write.call(this, e), this.config.specialVideoFileDomain && a.h5Helper && b.isFunction(a.h5Helper.setSpecialVideoFileDomain) && a.h5Helper.setSpecialVideoFileDomain(this.config.specialVideoFileDomain), this.registerPlugins(), this.callProtectFn("onwrite"), this.play(this.curVideo, this.config.autoplay);
                        var f = this;
                        this.$video.one("timeupdate", function() {
                            c() && d(f.videoTag, f)
                        }), b.os.android && b.browser.WeChat && this.$video.one("click", function() {
                            this.load()
                        })
                    }
                }), b.extend(e.prototype, {
                    pause: function() {
                        this.videoTag.pause()
                    },
                    getCurVid: function() {
                        return "" == g ? this.curVideo instanceof a.VideoInfo ? this.curVideo.getVid() : "" : g
                    },
                    play: function(c, d, e) {
                        function h(e) {
                            e = !!e, i.$video.trigger("tvp:video:ajaxstart", c instanceof a.VideoInfo ? c.getVid() : c, e);
                            var j, k, l = e ? i.curVideo.getHLS : i.curVideo.getMP4Url,
                                m = b.Deferred();
                            !e && i.curVideo.callGetMp4UrlDefer && i.curVideo.callGetMp4UrlDefer.done(function(a) {
                                a && b.isFunction(a.done) && (k = a, i.curVideo.callGetMp4UrlDefer = null)
                            }), k || (k = l.call(i.curVideo, c)), a.Html5UI && b.isFunction(a.Html5UI.fn.buildloadingAd) && i.config.isHtml5UseUI && (i.config.isHtml5ShowLoadingAdOnStart || i.config.isHtml5ShowLoadingAdOnChange) ? i.$video.one("tvp:loadingad:ended", function() {
                                m.resolve()
                            }) : m.resolve(), k.done(function(b) {
                                j = b, i.$video.trigger("tvp:video:ajaxsuc", b), i.config.isShowDurationLimit && a.html5DurationLimit.create(i)
                            }), b.when(k, m).done(function(a) {
                                a = a || j, b.os.android && b.browser.wechat && (a += "&nocache=1&time=" + (new Date).getTime()), i.isGetingInfo = !1, i.videoTag.preload = navigator.platform.indexOf("Win") > -1 ? "none" : "auto", !b.browser.WeChat && "setAttribute" in i.videoTag ? i.videoTag.setAttribute("src", a) : i.videoTag.src = a, i.$video.trigger("tvp:video:src"), f || (f = !0, i.callCBEvent("oninited")), i.callCBEvent("onplay", i.curVideo.lastQueryVid, i.curVideo), d && (i.videoTag.load(), i.videoTag.play());
                                var c = i.curVideo.getTagStart() || i.curVideo.getHistoryStart() || 0;
                                c > 0 && i.seek(c)
                            }).fail(function(b, c) {
                                return e ? (a.debug("get hls url fail,reload mp4..."), void h(!1)) : (f || (f = !0, i.callCBEvent("oninited")), i.$video.trigger("tvp:video:ajaxerror"), i.$video.trigger("tvp:video:error", b, c), i.showError(b, c), void(i.isGetingInfo = !1))
                            }).always(function() {
                                g = i.curVideo.lastQueryVid
                            })
                        }
                        var i = this,
                            j = !1;
                        if (b.isUndefined(d) && (d = !0), b.isUndefined(e) && (e = this.config.isHtml5UseHLS), b.isUndefined(c)) return i.videoTag.pause(), i.videoTag.load(), void i.videoTag.play();
                        if (c instanceof a.VideoInfo) {
                            if (j = c.getVid() != g && "" != g, i.setCurVideo(c), j && (i.callCBEvent("onchange", i.curVideo.getFullVid()), this.$video.trigger("tvp:player:videochange"), b.os.iphone)) try {
                                i.videoTag.pause(), i.videoTag.play()
                            } catch (k) {}
                            c.setPid(b.createGUID()), g = i.curVideo.getFullVid()
                        }
                        i.config.isHtml5ShowPosterOnChange && i.setPoster(), i.isGetingInfo = !0;
                        try {
                            i.videoTag.pause()
                        } catch (k) {}
                        var l = !1;
                        "auto" === e ? a.common.isUseHLS() ? a.h5Helper.loadIsUseHLS({
                            vid: g
                        }).done(function(a) {
                            l = 3 == a
                        }).fail(function() {
                            l = !1
                        }).always(function() {
                            h.call(i, l)
                        }) : (l = !1, h.call(i, l)) : (l = e, h.call(i, l))
                    },
                    seek: function(a) {
                        if (!isNaN(a)) {
                            a = Math.min(a, this.getDuration() - 5), a = Math.max(a, 0);
                            var b = this,
                                c = null;
                            c && (clearTimeout(c), c = null);
                            var d = this.videoTag.seekable;
                            1 == d.length && a < d.end(0) ? this.seekTo(a) : c = setTimeout(function() {
                                b.seek(a)
                            }, 100)
                        }
                    },
                    seekTo: function(a) {
                        var b = this;
                        try {
                            this.videoTag.currentTime = a, this.videoTag.paused && this.videoTag.play()
                        } catch (c) {
                            this.$video.one("canplay", function() {
                                b.videoTag.currentTime = a, b.videoTag.paused && b.videoTag.play()
                            })
                        }
                    },
                    getCurTime: function() {
                        return this.videoTag.currentTime
                    },
                    getPlaytime: function() {
                        return this.getCurTime()
                    },
                    setPlaytime: function(a) {
                        this.seek(a)
                    },
                    checkIsPlayingLoop: function(a) {
                        a = a || 0;
                        var b = this;
                        this.playinglooptimer && clearTimeout(this.playinglooptimer), 0 === this.videoTag.currentTime && 30 >= a && (this.videoTag.load(), this.videoTag.play(), this.playinglooptimer = setTimeout(function() {
                            b.checkIsPlayingLoop(++a)
                        }, 1e3))
                    },
                    setPoster: function() {
                        var a = this.curVideo.getPoster();
                        a || !this.config.pic || this.config.isHtml5UseUI || (a = this.config.pic), b.isString(a) && a.length > 0 ? this.videoTag.poster = a : this.hidePoster()
                    },
                    hidePoster: function() {
                        this.videoTag.removeAttribute("poster")
                    },
                    getDuration: function() {
                        var a = this.curVideo.getDuration();
                        return !isNaN(a) && a > 0 ? a : this.videoTag.duration
                    },
                    getFileSize: function() {
                        var a = "function" == typeof this.curVideo.getFileSize ? this.curVideo.getFileSize() : 0;
                        return !isNaN(a) && a > 0 ? a : 0
                    },
                    checkPause: function() {
                        var a = [],
                            b = this;
                        h = setInterval(function() {
                            b.videoTag.paused || (a.push(b.videoTag.currentTime), a.length >= 2 && (0 == Math.abs(a[0] - a[1]) ? (h && clearInterval(h), a = [], b.videoTag.load(), b.videoTag.play()) : h && clearInterval(h), a = []))
                        }, 500)
                    },
                    isPlayingLoadingAd: function() {
                        return 1 == this.$video.data("data-playing-loadingad")
                    },
                    isShowingDurationLimit: function() {
                        return this.hasDurationLimit() && this.DurationLimitInstance.isShow
                    },
                    hasDurationLimit: function() {
                        return this.DurationLimitInstance = this.DurationLimitInstance || this.instance.DurationLimitInstance, this.config.isShowDurationLimit && this.DurationLimitInstance && this.DurationLimitInstance.enable
                    }
                }), a.Html5Tiny = e
            }
        }(tvp, tvp.$),
        function(a, b) {
            function c(b, c) {
                var d = {
                    cmd: 3543,
                    vid: b.curVideo.getChannelId(),
                    contentId: b.config.contentId,
                    appId: b.config.appid,
                    int5: a.common.isLiveUseHTML5() ? 1 : 0,
                    int6: c,
                    str8: navigator.userAgent
                };
                a.report(d)
            }

            function d() {
                var c = {
                        cmd: 2,
                        qq: a.common.getUin(),
                        guid: encodeURIComponent(a.$.createGUID()),
                        txvjsv: "2.0",
                        stream: 2
                    },
                    d = {
                        debug: "",
                        ip: ""
                    };
                return b.each(d, function(a) {
                    d[a] = b.getUrlParam(a)
                }), b.extend(c, d), b.os.windows && (c.system = 0), b.os.iphone && (c.system = 1, c.sdtfrom = 113), b.os.ipad && (c.sdtfrom = 213), b.os.android && (c.system = 2, c.sdtfrom = 313), b.os.mac && (c.system = 3), c
            }

            function e(b, c) {
                a.livehub && a.livehub.stepReport && a.livehub.stepReport(b, c)
            }

            function f(d, e) {
                this.config.width = a.$.filterXSS(d), this.config.height = a.$.filterXSS(e), this.videoTag = null, this.$video = null, this.protectedFn = {}, this.isUseControl = !0, b.extend(this.h5EvtAdapter, {
                    onPlaying: function() {
                        var a = this;
                        this.hasReportCanPlayHls || (this.hasReportCanPlayHls = !0, c(a, 1))
                    },
                    onError: function(d, e) {
                        var f = this;
                        c(f, 0);
                        var g = -1;
                        e.target && e.target.error && (g = e.target.error.code), b.each(a.html5LiveFrontShow.plugins, function(a, b) {
                            "liveDownloader" == b.name && new b.key(f, !0)
                        }), this.callCBEvent("onerror", 0, g)
                    }
                })
            }
            if (!a.Html5LiveTiny) {
                var g = !1;
                f.fn = f.prototype = new a.BaseHtml5, b.extend(f.fn, {
                    write: function(b) {
                        a.BaseHtml5.prototype.write.call(this, b), this.callProtectFn("onwrite"), this.callCBEvent("onwrite"), this.play(this.curVideo, this.config.autoplay)
                    },
                    play: function(c, f) {
                        function h(b) {
                            i.videoTag.src = b, i.$video.trigger("tvp:video:src"), g || (g = !0, i.callCBEvent("oninited")), i.videoTag.pause(), f && (i.videoTag.load(), i.videoTag.play()), a.html5LiveFrontShow.create(i), i.callCBEvent("onchange", i.curVideo.getChannelId())
                        }
                        var i = this;
                        if (!this.videoTag) throw new Error("\u672a\u627e\u5230\u89c6\u9891\u64ad\u653e\u5668\u5bf9\u8c61\uff0c\u8bf7\u786e\u8ba4<video>\u6807\u7b7e\u662f\u5426\u5b58\u5728");
                        if (!c instanceof a.VideoInfo) throw new Error("\u4f20\u5165\u7684\u5bf9\u8c61\u4e0d\u662ftvp.VideoInfo\u7684\u5b9e\u4f8b");
                        b.isUndefined(f) && (f = !0), this.setCurVideo(c);
                        var j, k = this.config.playUrl,
                            l = {
                                cnlid: c.getChannelId(),
                                host: a.$.getHost()
                            };
                        l = b.extend(l, d());
                        var m = b.Deferred();
                        if (k) {
                            if (!/.*\.?qq\.com$/.test(l.host) && !/.*\.?qq\.com$/.test(k)) throw e(10, {
                                config: i.config
                            }), new Error("\u5f53\u524d\u57df\u6216\u8005\u64ad\u653e\u5730\u5740\u4e0d\u5728\u767d\u540d\u5355\u5185!");
                            j = k, e(9, {
                                config: i.config
                            }), m.resolve(j)
                        } else {
                            e(11, {
                                config: i.config
                            });
                            var n = b.now();
                            b.ajax({
                                url: "http://info.zb.qq.com",
                                data: l,
                                dataType: "jsonp"
                            }).done(function(a, c) {
                                c = b.now() - n, a.playurl ? (e(12, {
                                    delay: c,
                                    config: i.config
                                }), m.resolve(a.playurl)) : (e(13, {
                                    delay: c,
                                    config: i.config,
                                    code: a.iretcode
                                }), m.reject())
                            }).fail(function(a, c) {
                                c = b.now() - n, e(14, {
                                    delay: c,
                                    config: i.config
                                }), m.reject()
                            })
                        }
                        m.then(function(a) {
                            h(a)
                        })
                    }
                }), a.Html5LiveTiny = f, a.Html5LiveTiny.maxId = 0
            }
        }(tvp, tvp.$),
        function(a, b) {
            function c(a) {
                this.list = [], this.build(a)
            }
            b.extend(c.prototype, {
                build: function(c) {
                    if (c && 1 === c.config.type && !b.os.windows) {
                        var d = this,
                            e = c.config.html5LiveFrontShow;
                        b.each(e, function(e, f) {
                            b.each(a.html5LiveFrontShow.plugins, function(a, b) {
                                f == b.name && d.list.push(new b.key(c))
                            })
                        })
                    }
                }
            }), a.html5LiveFrontShow = {
                plugins: [],
                create: function(a) {
                    return a.html5LiveFrontShowInstance = new c(a), a.html5LiveFrontShowInstance
                }
            }
        }(tvp, tvp.$),
        function(a, b) {
            function c(a, b) {
                this.build(a, b)
            }
            var d = {
                name: "liveDownloader"
            };
            a.html5LiveFrontShow.plugins.push({
                name: "liveDownloader",
                key: c
            }), b.extend(c.prototype, {
                build: function(c, e) {
                    if (c && 1 === c.config.type && !(a.app && !a.app.isSupportApp || a.common.isLiveUseHTML5() && !e)) {
                        this.enable = !0;
                        var f = a.html5skin[d.name],
                            g = a.html5lang[d.name];
                        g.iframe = window != top ? 'target="_parent"' : "", g.url = a.app.getDownloadUrl(), this.renderData = g, f = b.formatTpl(f, g), this.t = c, this.lid = c.curVideo.getChannelId();
                        var h = c.$UILayer || c.$videomod;
                        this.$mod = h, h.addClass("tvp_container"), this.element = b(f).appendTo(h), this.$btn = this.element.find("[data-role=liveDownloader-btn]"), this.$text = this.element.find("[data-role=liveDownloader-text]"), this._bindEvents(), this.show(), this._checkBtn()
                    }
                },
                _checkBtn: function() {
                    var b = this,
                        c = this.$btn;
                    a.app.check({
                        lid: b.lid,
                        t: b.t
                    }).done(function(a) {
                        if (a && a.url) {
                            b.appInfo = a, c.attr("href", a.url), c.attr("data-url", a.liveOpenUrl);
                            var d = b.renderData.openText;
                            1 == a.hasApp && d && b.$text.html(d)
                        }
                    })
                },
                _bindEvents: function() {
                    var a = b.os.hasTouch ? "touchend" : "click",
                        c = this,
                        d = c.t.instance.AppBanner;
                    d && this.$btn.on("touchend click", function(a) {
                        a.preventDefault()
                    }), this.$btn.on(a, function() {
                        c._report(1), d && d.$btn.trigger(a)
                    })
                },
                _report: function(b) {
                    var c = this.t,
                        d = {
                            cmd: 3542,
                            vid: c.curVideo.getChannelId(),
                            contentId: c.config.contentId,
                            appId: c.config.appid,
                            int5: b
                        };
                    a.report(d)
                },
                show: function() {
                    this.enable && (this.t.hidePlayer(), this.element && this.element.show(), this.isShow = !0, this._report(0))
                },
                hide: function() {
                    this.enable && (this.element && this.element.hide(), this.isShow = !1)
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.BaseHtml5.fn, {
                enterFullScreen: function() {
                    var a = this,
                        b = this.$mod[0],
                        c = 0;
                    if (b.webkitRequestFullScreen) return void b.webkitRequestFullScreen();
                    if (this.videoTag.webkitSupportsFullscreen)
                        if (this.videoTag.readyState >= 1) this.videoTag.webkitEnterFullscreen();
                        else {
                            if (++c >= 30) return;
                            setTimeout(function() {
                                a.enterFullScreen()
                            }, 200)
                        }
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.Html5Tiny.fn, {
                swtichDefinition: function(a) {
                    if (this.curVideo.getFormat() != a) {
                        this.pause();
                        var b = this.getCurTime(),
                            c = this,
                            d = null;
                        this.curVideo.setFormat(a), this.$video.one("canplay canplaythrough", function() {
                            c.isDefinitionSwitching && (setTimeout(function() {
                                c.seek(b)
                            }, 500), d = setInterval(function() {
                                c.videoTag.currentTime >= b && (clearInterval(d), d = null, c.isDefinitionSwitching = !1)
                            }, 50))
                        }), this.isDefinitionSwitching = !0, this.play(this.curVideo)
                    }
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            function c() {
                this.start = a.$.now(), this.end = 0
            }

            function d(d, e) {
                this.vid = d || "", this.player = e, this.rid = e.curVideo.getRid() || b.createGUID(), this.pid = e.curVideo.getPid() || b.createGUID(), this.reportTimer = {};
                var f = b.isFunction(e.getPlayerType) ? e.getPlayerType().toUpperCase() : "",
                    g = "http://rcgi.video.qq.com/report/play?",
                    h = this.getplatform(),
                    i = ["TenPlayer", f, "V2.0"].join(""),
                    j = {
                        version: i,
                        vid: this.vid,
                        rid: this.rid,
                        pid: this.pid,
                        url: window != top ? document.referrer : document.location.href,
                        platform: h,
                        ptag: b.cookie.get("ptag"),
                        pfversion: b.os.version,
                        appid: e.config.appid
                    };
                this.getStepName = function(a) {
                    return "report_" + a
                }, this.addStep = function(a) {
                    this.reportTimer[this.getStepName(a)] = new c
                }, this.delStep = function(a) {
                    delete this.reportTimer[this.getStepName(a)]
                }, this.report = function(c, d, f) {
                    var h = [],
                        i = {},
                        k = {},
                        l = g;
                    if (c) {
                        b.extend(k, j), "object" == typeof f && b.extend(k, f);
                        try {
                            i.vt = e.curVideo.data.vl.vi[0].ul.ui[0].vt
                        } catch (m) {
                            i.vt = 0
                        }
                        i.vurl = e.curVideo.url, i.bt = parseInt(e.getDuration(), 10), b.extend(k, i), k.step = c, k.ctime = b.getISOTimeFormat(), k.val = d;
                        for (var n in k) {
                            var o = k[n];
                            isNaN(o) && (o = encodeURIComponent("" + o)), h.push(n + "=" + o)
                        }
                        l += h.join("&"), a.report(l)
                    }
                }, this.reportStep = function(b, d) {
                    if (!(this.reportTimer[this.getStepName(b)] instanceof c)) return void a.debug("no timer " + b);
                    var e = this.reportTimer[this.getStepName(b)].getTimelong();
                    isNaN(e) || 0 >= e || e > 9e6 || (this.report(b, e, d), this.delStep(b))
                }
            }
            c.prototype = {
                getTimelong: function() {
                    if (this.end = a.$.now(), this.end <= 0 || this.start <= 0) return 0;
                    var b = this.end - this.start;
                    return 0 >= b ? 0 : b
                },
                getSeconds: function() {
                    return parseInt(this.getTimelong() / 1e3, 10)
                }
            }, d.fn = d.prototype = {
                getBusinessId: function() {
                    if (b.browser.WeChat) return 6;
                    if (b.browser.MQQClient) return 17;
                    var a = "";
                    if (document.location.href.indexOf("http://v.qq.com/iframe/") >= 0 && window != top) {
                        var c = document.referrer;
                        if ("" != c) {
                            var d = document.createElement("a");
                            d.href = c, a = d.hostname, d = null, delete d
                        }
                    }
                    "" == a && (a = document.location.hostname || document.location.host);
                    var e = [{
                        r: /(\w+\.)?weixin\.qq\.com$/i,
                        v: 6
                    }, {
                        r: /^(v|film)\.qq\.com$/i,
                        v: 1
                    }, {
                        r: /^news\.qq\.com$/i,
                        v: 2
                    }, {
                        r: /(\w+\.)?qzone\.qq\.com$/i,
                        v: 3
                    }, {
                        r: /(\w+\.)?t\.qq\.com$/i,
                        v: 5
                    }, {
                        r: /^3g\.v\.qq\.com$/i,
                        v: 8
                    }, {
                        r: /^m\.v\.qq\.com$/i,
                        v: 10
                    }];
                    a = a.toLowerCase();
                    for (var f = 0, g = e.length; g > f; f++) {
                        var h = e[f];
                        if (h.r.test(a)) return h.v
                    }
                    return 7
                },
                getDeviceId: function() {
                    var a = b.os,
                        c = navigator.userAgent;
                    return a.ipad ? 1 : a.windows ? /Touch/i.test(c) ? 8 : /Phone/i.test(c) ? 7 : 2 : a.android ? a.tablet ? 5 : 3 : a.iphone ? 4 : a.Mac ? 9 : 10
                },
                getplatform: function() {
                    var a = this.getBusinessId(),
                        b = this.getDeviceId();
                    return 1e4 * a + 100 * b + 1
                }
            }, a.H5Monitor = d
        }(tvp, tvp.$),
        function(a, b) {
            function c() {
                this.isFirstShow = 0
            }
            var d = {
                name: "durationLimit",
                downLoadUrl: "http://mcgi.v.qq.com/commdatav2?cmd=4&confid=673&platform=aphone",
                md5: "1704845DAA0D5B250F869E01238659E9"
            };
            b.extend(c.prototype, {
                build: function(c) {
                    var e = this;
                    if (c && 1 != c.config.type && (!a.app || a.app.isSupportApp) && c.config.isHtml5UseUI) {
                        var f = c.curVideo.data;
                        if (this.vid = c.curVideo.getVid(), f && f.exem && f.preview) {
                            c.curVideo.setDuration(f.preview.toString()), this.enable = !0, c.trigger("tvp.durationlimit.enable");
                            var g = a.html5skin[d.name],
                                h = a.html5lang[d.name];
                            h.iframe = window != top ? 'target="_parent"' : "", h.url = d.downLoadUrl || a.app.getDownloadUrl(), h.msg = (a.$.os.tablet ? h.padMsg : h.msg) || "", h.msg = h.msg.replace("5", Math.ceil(f.preview / 60)), h.play = a.$.os.tablet ? h.padPlay : h.play, g = b.formatTpl(g, h), this.t = c;
                            var i = c.$UILayer || c.$videomod;
                            this.$mod = i, i.addClass("tvp_container"), this.element = b(g).appendTo(i), this.playBtn = this.element.find("[data-role=durationLimit-play]"), this.downloadBtn = this.element.find("[data-role=durationLimit-download]"), this.openBtn = this.element.find("[data-role=durationLimit-open]"), this.replayBtn = this.element.find("[data-role=durationLimit-replay]"), this._bindEvents(), a.$.os.tablet ? this.show() : this.t.$video.on("pause", function() {
                                e.t.control && e.t.control.isTouching || e.show(this.currentTime > 0 && Math.ceil(this.currentTime) == Math.ceil(this.duration))
                            }).on("play", function() {
                                e.hide()
                            })
                        }
                    }
                },
                fixBtn: function(a, b) {
                    1 == b ? (this.downloadBtn.hide(), this.openBtn.show()) : (this.downloadBtn.show(), this.openBtn.hide()), a ? (this.playBtn.hide(), this.replayBtn.show()) : (this.playBtn.show(), this.replayBtn.hide())
                },
                checkBtn: function(b) {
                    var c = this,
                        e = this.downloadBtn,
                        f = this.openBtn;
                    a.app.check({
                        vid: c.vid,
                        downloadUrl: d.downLoadUrl,
                        md5: d.md5,
                        t: c.t
                    }).done(function(a) {
                        a && a.url && (c.appInfo = a, e.attr("href", a.url), e.attr("data-url", a.openUrl), f.attr("href", a.openUrl), f.attr("data-url", a.openUrl), c.fixBtn(b, a.hasApp), c.bindDownloader(e))
                    })
                },
                bindDownloader: function(c) {
                    var e = this,
                        f = e.t.config.plugins && e.t.config.plugins.AppBanner ? e.t.config.plugins.AppBanner : {};
                    f = b.extend(f, {
                        downloader: !0,
                        downloadUrl: d.downLoadUrl,
                        md5: d.md5
                    }), this.hascheckDownloader || (this.hascheckDownloader = !0, a.app.checkCanDownloader(e.appInfo.hasApp, f).done(function(d) {
                        var e = 0,
                            f = setInterval(function() {
                                e++, 20 > e ? d && a.app.hasDownloader && (clearInterval(f), b.downloadClick_wechat && b.downloadClick_wechat.hasDownloader && b.downloadClick_wechat.bindDownloader(c), b.downloadClick_mqq && b.downloadClick_mqq.hasDownloader && b.downloadClick_mqq.bindDownloader(c)) : clearInterval(f)
                            }, 100)
                    }))
                },
                _bindEvents: function() {
                    var c = b.os.hasTouch ? "touchend" : "click",
                        d = this,
                        e = this.t,
                        f = e.$video[0],
                        g = !1;
                    e.config.isHtml5UseUI && (g = this.$mod.find(a.html5skin.elements.overlay.play)), this.playBtn.on(c, function() {
                        d.hide(), g ? g.trigger(c) : e.play(), d._report(1, 1)
                    }), this.downloadBtn.on(c, function() {
                        d._report(1, 2)
                    }), this.openBtn.on(c, function() {
                        d._report(1, 3)
                    }), this.replayBtn.on(c, function() {
                        d.hide(), g ? g.trigger(c) : (f.load(), f.play()), d._report(1, 4)
                    })
                },
                _report: function(b, c) {
                    var d = this.t,
                        e = 1 == this.isFirstShow ? 1 : 0,
                        f = {
                            cmd: 0 == b ? 3539 : 3540,
                            vid: d.curVideo.getVid(),
                            contentId: d.config.contentId,
                            appId: d.config.appid,
                            int5: c || 0,
                            int6: e
                        };
                    a.report(f)
                },
                show: function(a) {
                    var c = this;
                    this.enable && (this.isFirstShow++, b.os.ipad || this.t.hidePlayer(), this.element && this.element.show(), this.isShow = !0, this.fixBtn(a), this.checkBtn(a), this._report(0), this.t.trigger("tvp.durationlimit.show"), a && this.t.$video.one("tvp:player:videochange", function() {
                        c.hide()
                    }))
                },
                hide: function() {
                    this.enable && (b.os.iphone || this.element && this.element.hide(), this.isShow = !1, b.os.ipad || b.os.iphone || this.t.showPlayer(), this.t.trigger("tvp.durationlimit.hide"))
                }
            }), a.html5DurationLimit = {}, a.html5DurationLimit.create = function(a) {
                return a.DurationLimitInstance = new c, a.DurationLimitInstance.build(a), a.DurationLimitInstance
            }
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.Html5Tiny.fn, {
                buildmonitor: function() {
                    var c = this,
                        d = null,
                        e = 0,
                        f = !1;
                    this.$video.on("tvp:video:ajaxstart", function(b, e, g) {
                        f = g, d = null, d = new a.H5Monitor(e, c), d.addStep(f ? 1009 : 1011)
                    }).on("tvp:video:ajaxsuc", function() {
                        d.report(3, 1), d.reportStep(f ? 1009 : 1011, {
                            val1: 1,
                            val2: 0
                        })
                    }).on("tvp:video:src", function() {
                        e = 0, d.report(4, 1, {
                            val2: 1
                        }), d.addStep(6), d.addStep(30), c.$video.one("canplay", function() {
                            d.reportStep(30, {
                                val1: 0,
                                val2: 2
                            })
                        }).one("error", function() {
                            d.reportStep(30, {
                                val1: 1,
                                val2: 2
                            }), d.report(5, 0, {
                                val1: 3
                            })
                        }).one("playing", function() {
                            d.reportStep(6, {
                                val1: 1
                            }), d.addStep(5), h({
                                itype: 1
                            }), c.$video.one("tvp:player:ended", function() {
                                d.reportStep(5, {
                                    val1: 1
                                }), h({
                                    itype: 2
                                })
                            }).one("tvp:player:videochange", function() {
                                d.reportStep(5, {
                                    val1: 2
                                }), h({
                                    itype: 3
                                })
                            })
                        })
                    }).on("waiting", function() {
                        1 != ++e && (c.isDefinitionSwitching || c.isTouching || (d.addStep(31), c.$video.one("timeupdate", g)))
                    }).one("tvp:h5ui:playbtn:click", function() {
                        h({
                            itype: 4
                        })
                    });
                    var g = function() {
                            var a = d.reportTimer[d.getStepName(31)],
                                b = 0;
                            return a ? (b = a.getTimelong(), d.report(31, Math.min(1e4, b), {
                                val1: b > 1e4 ? 1 : 0,
                                val2: 2,
                                "ptime ": c.videoTag.currentTime
                            }), void c.$video.off("timeupdate", g)) : void c.$video.off("timeupdate", g)
                        },
                        h = function(d) {
                            d = d || {};
                            var e = {
                                cmd: 3533,
                                appId: c.config.appid || 0,
                                contentId: c.config.contentId || "",
                                vid: c.curVideo.getFullVid()
                            };
                            e = b.extend(e, d), a.report(e)
                        }
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            a.html5lang = {
                errMsg: {
                    "default": "\u62b1\u6b49,\u6682\u4e0d\u652f\u6301\u64ad\u653e",
                    0: "\u5f53\u524d\u89c6\u9891\u6587\u4ef6\u65e0\u6cd5\u64ad\u653e",
                    68: "CGI\u7cfb\u7edf\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-1": "cgi\u53c2\u6570\u9519\u8bef/cgi\u5411\u670d\u52a1\u5668\u53d1\u5305\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-2": "cgi\u4ece\u670d\u52a1\u5668\u63a5\u5305\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-3": "cgi\u4ece\u670d\u52a1\u5668\u89e3\u5305\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-4": "cgi\u8fde\u63a5\u670d\u52a1\u5668\u7f51\u7edc\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-6": "cgi\u8fde\u63a5\u670d\u52a1\u8d85\u65f6,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-7": "cgi\u8bbf\u95ee\u670d\u52a1\u672a\u77e5\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    50: "CGI\u7cfb\u7edf\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    52: "\u8bbf\u95ee\u89c6\u9891\u4ed8\u8d39\u4fe1\u606f\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    64: "\u6821\u9a8c\u89c6\u9891\u4ed8\u8d39\u4fe1\u606f\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    51: "vid\u4e2a\u6570\u8d85\u51fa\u8303\u56f4",
                    61: "vid\u4e0d\u5408\u6cd5",
                    62: "\u89c6\u9891\u72b6\u6001\u4e0d\u5408\u6cd5",
                    63: "\u6e05\u6670\u5ea6\u683c\u5f0f\u4e0d\u5408\u6cd5",
                    65: "\u901f\u5ea6\u683c\u5f0f\u4e0d\u5408\u6cd5",
                    67: "\u89c6\u9891\u683c\u5f0f\u4e0d\u5b58\u5728",
                    69: "format\u5217\u8868\u4e3a\u7a7a",
                    71: "\u672a\u627e\u5230HLS CDN",
                    73: "\u751f\u6210\u6587\u4ef6\u540d\u5931\u8d25",
                    74: "\u5206\u7247\u53f7\u4e0d\u5408\u6cd5",
                    76: "\u83b7\u53d6m3u8\u6587\u4ef6\u540d\u5931\u8d25",
                    77: "\u751f\u6210HLS key\u5931\u8d25",
                    80: {
                        0: "\u56e0\u7248\u6743\u9650\u5236,\u8bf7\u5230\u817e\u8baf\u89c6\u9891\u89c2\u770b",
                        1: "\u6839\u636e\u60a8\u5f53\u524d\u7684IP\u5730\u5740\uff0c\u8be5\u5730\u533a\u6682\u4e0d\u63d0\u4f9b\u64ad\u653e",
                        2: "\u56e0\u7248\u6743\u9650\u5236\uff0c\u6682\u4e0d\u652f\u6301\u64ad\u653e",
                        callback: function(b, c, d) {
                            if (0 == parseInt(c) && a.app && d && d.vid) {
                                var e = a.html5skin.errorDownloader;
                                a.app.check(d).done(function(a) {
                                    if (a.url) {
                                        var c = b.find(".tvp_player_error_content"),
                                            d = b.find(".text").html();
                                        d = d.substr(0, d.indexOf("(")), e ? (d = e.replace("${errorMsg}", d), d = d.replace("${url}", a.url)) : d = '<a href="' + a.url + '">' + d + "</a>", c.length && c.html(d)
                                    }
                                })
                            }
                        }
                    },
                    81: "referer\u9650\u5236",
                    82: "qzone\u6743\u9650\u9650\u5236",
                    83: {
                        main: "\u89c6\u9891\u4ed8\u8d39\u9650\u5236",
                        "-2": "\u60a8\u53ef\u80fd\u672a\u767b\u5f55\u6216\u767b\u5f55\u8d85\u65f6",
                        "-1": "\u89c6\u9891\u72b6\u6001\u975e\u6cd5"
                    },
                    84: "\u8bbf\u95eeIP\u662f\u9ed1\u540d\u5355",
                    85: {
                        main: "CGI\u8bbf\u95eekey\u4e0d\u6b63\u786e",
                        "-1": "key\u957f\u5ea6\u5931\u8d25",
                        "-2": "magicnum\u6821\u9a8c\u5931\u8d25",
                        "-3": "\u65f6\u95f4\u6821\u9a8c\u5931\u8d25",
                        "-4": "platform\u6821\u9a8c\u5931\u8d25",
                        "-5": "clientVer\u6821\u9a8c\u5931\u8d25",
                        "-6": "encryptVer\u6821\u9a8c\u5931\u8d25"
                    },
                    86: "CGI\u8bbf\u95ee\u9891\u7387\u9650\u5236",
                    500: {
                        main: "\u83b7\u53d6\u670d\u52a1\u5668\u6570\u636e\u5931\u8d25",
                        1: "getinfo failed",
                        2: "getkey failed"
                    }
                },
                getErrMsg: function(c, d) {
                    if (isNaN(c)) return "";
                    if (c in a.html5lang.errMsg) {
                        var e = a.html5lang.errMsg[c];
                        if (b.isString(e)) return e;
                        if (b.isPlainObject(e)) {
                            var f = [e.main, e.main ? "," : "", d in e ? e[d] : ""].join("");
                            return f || a.html5lang.errMsg["default"]
                        }
                    }
                    return a.html5lang.errMsg["default"]
                },
                definition: {
                    mp4: "\u9ad8\u6e05",
                    msd: "\u6d41\u7545"
                },
                srtLang: {
                    50001: {
                        srclang: "zh-cn",
                        desc: "\u7b80\u4f53\u4e2d\u6587"
                    },
                    50002: {
                        srclang: "zh-cn",
                        desc: "\u7b80\u4f53\u4e2d\u6587"
                    },
                    50003: {
                        srclang: "zh-tw",
                        desc: "\u7e41\u4f53\u4e2d\u6587"
                    },
                    50004: {
                        srclang: "en",
                        desc: "\u82f1\u6587"
                    },
                    50005: {
                        srclang: "zh-cn,en",
                        desc: "\u7b80\u4f53\u4e2d\u6587&\u82f1\u6587"
                    },
                    50006: {
                        srclang: "zh-tw,en",
                        desc: "\u7e41\u4f53\u4e2d\u6587&\u82f1\u6587"
                    }
                },
                durationLimit: {
                    msg: "5\u5206\u949f\u770b\u7684\u4e0d\u591f\u723d\uff1f\u817e\u8baf\u89c6\u9891\u6709\u9ad8\u6e05\u5b8c\u6574\u7248\uff0c\u7b49\u4f60\u6765\u770b~",
                    padMsg: "\u672c\u8282\u76ee\u53ea\u63d0\u4f9b5\u5206\u949f\u9884\u89c8\u3002\u817e\u8baf\u89c6\u9891\u5ba2\u6237\u7aef\u53ef\u4ee5\u89c2\u770b\u9ad8\u6e05\u5b8c\u6574\u7248\uff0c\u7b49\u4f60\u5594~",
                    download: "\u4e0b\u8f7dAPP",
                    padPlay: "\u7acb\u5373\u64ad\u653e",
                    play: "\u7ee7\u7eed\u64ad\u653e",
                    replay: "\u91cd\u65b0\u64ad\u653e",
                    open: "\u53bb\u770b\u5b8c\u6574\u7248"
                },
                liveDownloader: {
                    downloadText: "\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u89c2\u770b\u89c6\u9891\u76f4\u64ad",
                    openText: "\u6253\u5f00\u817e\u8baf\u89c6\u9891\uff0c\u89c2\u770b\u89c6\u9891\u76f4\u64ad"
                },
                getDefiName: function(b) {
                    return b in a.html5lang.definition ? a.html5lang.definition[b] : ""
                },
                getSrtName: function(b) {
                    return b in a.html5lang.srtLang ? a.html5lang.srtLang[b].desc : ""
                }
            }
        }(tvp, tvp.$), tvp.html5skin = {
        defaultError: function() {
            return ['<div class="tvp_container">', '	<div class="tvp_player_error" id="$ERROR-TIPS-INNER$">', '       <div class="tvp_player_error_row">', '		<div class="tvp_player_error_content">', '			<p class="text">$ERROR-MSG$ $ERROR-DETAIL$</p>', "		</div>", "       </div>", "	</div>", "</div>"].join("")
        }(),
        errorDownloader: function() {
            return ['<div class="tvp_player_goto_app">', '	<a href="${url}" class="tvp_download_app_inner">', '       <i class="tpv_icon_download"></i>', '		<span class="tvp_icon_text">${errorMsg}</span>', "	</a>", "</div>"].join("")
        }(),
        durationLimit: function() {
            return ['<div style="display:none" class="tvp_limit_tips" data-role="durationLimit">', '   <div class="tvp_limit_tips_inner">', '		<div class="tvp_tips_content">', '			<p class="tvp_tips_text">${msg}</p>', "		</div>", '		<div class="tvp_btn_line">', '			<span data-role="durationLimit-play" class="tvp_btn tvp_btn_try">${play}</span>', '			<span  data-role="durationLimit-replay" class="tvp_btn tvp_btn_try">${replay}</span>', '			<a data-action="applink" ${iframe} href="${url}" data-url="" data-role="durationLimit-download" class="tvp_btn tvp_btn_download">${download}</a>', '			<a data-action="applink" href="" data-url="" data-role="durationLimit-open" class="tvp_btn tvp_btn_download">${open}</a>', "		</div>", "	</div>", "</div>"].join("")
        }(),
        liveDownloader: function() {
            return ['<div  data-role="liveDownloader" style="z-index:10;display:none"  class="tvp_live_download_app">', '<a data-action="applink" href="${url}" data-url="${liveOpenUrl}" ${iframe} data-role="liveDownloader-btn" class="tvp_download_app_inner">', '<i class="tpv_icon_download"></i>', '<span data-role="liveDownloader-text" class="tvp_icon_text">${downloadText}</span>', "</a>", "</div>"].join("")
        }(),
        follow: function() {
            return '<a class="tvp_follow" data-role="appfollow_followbtn" data-follow="follow">							<span class="tvp_icon_follow"></span>							<span class="tvp_icon_text" data-role="appfollow_followtext">\u5173\u6ce8</span>						</a>						<div class="tvp_follow_hint">							<div class="tvp_hint_title">\u5173\u6ce8\u6210\u529f\uff01</div>							<div class="tvp_hint_desc" data-role="bannerText">{FOLLOWTEXT}</div>						</div>'
        }()
    },
        function(a, b) {
            function c(c, d) {
                this.isUseControl = !1, this.config.width = a.$.filterXSS(c), this.config.height = a.$.filterXSS(d), this.control = null, this.$UILayer = null;
                var e = this;
                b.extend(this.protectedFn, {
                    onwrite: function() {
                        var c = [];
                        c[0] = (new Date).getTime();
                        var d = a.html5skin.noSVGClassName;
                        b.isString(d) && d.length > 0 && !a.common.isSupportSVG() && this.videomod.classList.add(d), this.control = new a.Html5UI(e), this.control.init(), this.$UILayer = this.control.$UILayer, c[1] = (new Date).getTime(), a.report({
                            cmd: 3536,
                            vid: this.getCurVid(),
                            appId: this.config.appid,
                            contentId: this.config.contentId,
                            speed: c[1] - c[0]
                        })
                    }
                })
            }
            a.Html5Player || (c.fn = c.prototype = new a.Html5Tiny, b.extend(c.prototype, {
                createVideoHtml: function() {
                    var b = a.Html5Tiny.prototype.createVideoHtml.call(this),
                        c = a.html5skin.getHtml(this.config);
                    return c.replace("$VIDEO$", b)
                },
                hideControl: function() {
                    this.control.hide()
                },
                showControl: function() {
                    this.control.show()
                }
            }), a.Html5Player = c)
        }(tvp, tvp.$),
        function(a, b) {
            function c(c, d) {
                this.isUseControl = !1, this.config.width = a.$.filterXSS(c), this.config.height = a.$.filterXSS(d), this.control = null, this.$UILayer = null;
                var e = this;
                b.extend(this.protectedFn, {
                    onwrite: function() {
                        this.control = new a.Html5UI(e), this.control.feature = this.config.html5LiveUIFeature, this.control.init(), this.$UILayer = this.control.$UILayer
                    }
                })
            }
            a.Html5Live || (c.fn = c.prototype = new a.Html5LiveTiny, b.extend(c.prototype, {
                createVideoHtml: function() {
                    var b = a.Html5LiveTiny.prototype.createVideoHtml.call(this),
                        c = a.html5skin.getHtml(this.config);
                    return c.replace("$VIDEO$", b)
                },
                getPlayerType: function() {
                    return "html5live"
                }
            }), a.Html5Live = c)
        }(tvp, tvp.$),
        function(a) {
            function b(a) {
                return "tagName" in a ? a : a.parentNode
            }

            function c(a, b, c, d) {
                var e = Math.abs(a - b),
                    f = Math.abs(c - d);
                return e >= f ? a - b > 0 ? "Left" : "Right" : c - d > 0 ? "Up" : "Down"
            }

            function d() {
                j = null, k.last && (k.el.trigger("longTap"), k = {})
            }

            function e() {
                j && clearTimeout(j), j = null
            }

            function f() {
                g && clearTimeout(g), h && clearTimeout(h), i && clearTimeout(i), j && clearTimeout(j), g = h = i = j = null, k = {}
            }
            if (!(a.browser.WeChat && a.browser.getNumVersion() < 5 || a.os.windows && a.browser.ie || a.isFunction(a.fn.tap))) {
                var g, h, i, j, k = {},
                    l = 750;
                a(document).ready(function() {
                    var m, n;
                    a(document.body).bind("touchstart", function(c) {
                        c.originalEvent && (c = c.originalEvent), m = Date.now(), n = m - (k.last || m), k.el = a(b(c.touches[0].target)), g && clearTimeout(g), k.x1 = c.touches[0].pageX, k.y1 = c.touches[0].pageY, n > 0 && 250 >= n && (k.isDoubleTap = !0), k.last = m, j = setTimeout(d, l)
                    }).bind("touchmove", function(a) {
                        a.originalEvent && (a = a.originalEvent), e(), k.x2 = a.touches[0].pageX, k.y2 = a.touches[0].pageY
                    }).bind("touchend", function(b) {
                        b.originalEvent && (b = b.originalEvent), e(), k.x2 && Math.abs(k.x1 - k.x2) > 30 || k.y2 && Math.abs(k.y1 - k.y2) > 30 ? i = setTimeout(function() {
                            k.el && "function" == typeof k.el.trigger && (k.el.trigger("swipe"), k.el.trigger("swipe" + c(k.x1, k.x2, k.y1, k.y2)), k = {})
                        }, 0) : "last" in k && (h = setTimeout(function() {
                            if (k.el && "function" == typeof k.el.trigger) {
                                var b = a.Event("tap");
                                b.cancelTouch = f, k.el.trigger(b), k.isDoubleTap ? (k.el.trigger("doubleTap"), k = {}) : g = setTimeout(function() {
                                    g = null, k.el && k.el.trigger("singleTap"), k = {}
                                }, 250)
                            }
                        }, 0))
                    }).bind("touchcancel", function() {
                        if (k.x2 && Math.abs(k.x1 - k.x2) > 30 || k.y2 && Math.abs(k.y1 - k.y2) > 30) try {
                            i = setTimeout(function() {
                                k.el && "function" == typeof k.el.trigger && (k.el.trigger("swipe"), k.el.trigger("swipe" + c(k.x1, k.x2, k.y1, k.y2)), k = {})
                            }, 0)
                        } catch (a) {
                            f()
                        } else f()
                    }), a(window).bind("scroll", f)
                }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(b) {
                    a.fn[b] = function(a) {
                        return this.bind(b, a)
                    }
                })
            }
        }(tvp.$),
        function(a) {
            a.extend(tvp.html5skin, {
                html: function() {
                    return ['<div class="tvp_container tvp_controls_hide">', "	<% if(!!feature.title) {%>", '		<div class="tvp_titles">', '			<strong class="tvp_title"><span></span></strong>', "		</div>", "	<% } %>", '	<div class="tvp_video">', "$VIDEO$", "</div>", "	<% if(!!feature.controlbar) {%>", '	<div class="tvp_controls">', "		<% if(!!feature.progress) {%>", '		<div class="tvp_time_rail">', "			<% if(!!feature.timepanel) {%>", '			<span class="tvp_time_panel_current">00:00</span>', "			<% } %>", '			<span class="tvp_time_total" >', '				<span class="tvp_time_loaded" ></span>', '				<span class="tvp_time_current"><span class="tvp_time_handle"></span></span>', "			</span>", "			<% if(!!feature.timepanel) {%>", '			<span class="tvp_time_panel_total">00:00</span>', "			<% } %>", "		</div>", "		<% } %>", '		<span class="tvp_time_handel_hint" style="display:none"></span>', "		<% if(!!feature.playpause) {%>", '		<div class="tvp_button tvp_playpause_button tvp_play">', '			<button type="button" title="\u64ad\u653e/\u6682\u505c"><span class="tvp_btn_value">\u64ad\u653e</span></button>', "		</div>", "		<% } %>", "		<% if(!!feature.promotion) {%>", '		<div class="tvp_promotion" style="display:none;">', '			<a href="https://itunes.apple.com/cn/app/id407925512?mt=8" target="_blank">\u5b89\u88c5\u817e\u8baf\u89c6\u9891iPad\u5ba2\u6237\u7aef &gt;&gt;</a>', "		</div>", "		<% } %>", "		<% if(!!feature.fullscreen) {%>", '		<div class="tvp_button tvp_fullscreen_button tvp_fullscreen">', '			<button type="button" title="\u5207\u6362\u5168\u5c4f"><span class="tvp_btn_value">\u5168\u5c4f</span></button>', "		</div>", "		<% } %>", "		<% if(!!feature.definition) {%>", '		<div class="tvp_button tvp_definition _tvp_definition_" style="display:none">', '			<div class="tvp_definition_button"><span>\u6e05\u6670\u5ea6</span></div>', '			<div class="tvp_definition_list"></div>', "		</div>", "		<% } %>", "		<% if(!!feature.track) {%>", "		<% } %>", "	</div>", "	<% } %>", "	<% if(!!feature.overlay) {%>", '	<div class="tvp_overlay_loading tvp_none" style="z-index:5">', '		<span class="tvp_icon_loading"></span>', "	</div>", '	<div class="tvp_overlay_play">', '		<span class="tvp_button_play"></span>', "	</div>", "	<% } %>", "	<% if(!!feature.meta) {%>", '	<div class="tvp_meta_info">', '		<span class="tvp_meta_duration"></span>', '		<span class="tvp_meta_length"></span>', "	</div>", "	<% } %>", "	<% if(!!feature.bigben) {%>", '	<div class="tvp_overlay_bigben">', '		<div class="tvp_overlay_content">', '			<i class="tvp_ico_ff_rw tvp_ico_ff"></i><span class="tvp_text tvp_overlay_bigben_text">0:03:12</span>', '			<span class="tvp_time_total_small"><span class="tvp_time_current_small"></span></span>', "		</div>", "	</div>", "	<% } %>", "	<% if(!!feature.posterlayer) {%>", '	<div class="tvp_overlay_poster" style="display:none;">', '		<img class="tvp_poster_img"/>', "	</div>", "	<% } %>", "	<% if(!!feature.tips) {%>", '	<div class="tvp_overlay_tips tvp_none">', '		<div class="tvp_overlay_content">', '			<span class="tvp_text"></span> ', "		</div>", "	</div>", "	<% } %>", "	<% if(!!feature.loadingAd) {%>", '	<div class="tvp_shadow"></div>', '	<div class="tvp_ads" style="display:none;">', '		<div class="tvp_ads_inner" style="width:100%;height:100%;">', '			<div class="tvp_ads_content"><a href="javascript:;" class="tvp_ads_link"></a></div>', '			<div class="tvp_ads_control tvp_none">', '				<a href="javascript:;" class="tvp_ads_skip tvp_none">', '					<span class="tvp_ads_countdown"></span>', '					<span class="tvp_ads_skip_text">\u8df3\u8fc7\u5e7f\u544a</span>', "				</a>", '				<div class="tvp_ads_qqvip_skip tvp_none">', '					<span class="tvp_ads_remain">\u3010\u5269\u4f59 <span class="_remain"></span> \u5219\u5e7f\u544a\u3011</span>', '					<span class="tvp_ads_desc">', '						\u60a8\u662f\u5c0a\u8d35\u7684<span class="_vipname">QQ\u4f1a\u5458</span> <span class="_remaintime"><em class="tvp_ads_num"></em>\u79d2\u540e</span>\u53ef', '						<a href="javascript:;" class="tvp_ads_skip_text">\u8df3\u8fc7\u6b64\u5e7f\u544a</a>', "					</span>", "				</div>", "			</div>", '			<a href="javascript:;" class="tvp_btn_ads_more tvp_none">', '				\u8be6\u60c5\u70b9\u51fb <i class="tvp_icon_arrow"></i>', "			</a>", '			<div class="tvp_ads_copyright tvp_none">', '				<div class="tvp_ads_text">\u5e94\u7248\u6743\u65b9\u7684\u8981\u6c42\uff0c\u597d\u83b1\u575e\u4f1a\u5458\u65e0\u6cd5\u514d\u9664\u8be5\u90e8\u7535\u89c6\u5267\u7684\u5e7f\u544a\uff0c\u8bf7\u60a8\u8c05\u89e3\uff01</div>', '				<div class="tvp_ads_btn">\u6211\u77e5\u9053\u4e86\uff01</div>', '				<span class="tvp_btn_close">\u2715</span>', "			</div>", "		</div>", "	</div>", "	<% } %>", "</div>"].join("")
                }(),
                definitionList: function() {
                    return ["<ul>", "	<% for(var p in data.list) { %><% if(data.curv!=p){ %>", '	<li data-fmt="<%=p%>">', "		<span><%=data.list[p]%></span>", "	</li>", "	<% } }%>", "</ul>"].join("")
                }(),
                noSVGClassName: "tvp_no_svg",
                elements: {
                    title: {
                        main: ".tvp_titles",
                        text: ".tvp_title span"
                    },
                    meta: {
                        main: ".tvp_meta_info",
                        duration: ".tvp_meta_duration",
                        filesize: ".tvp_meta_length"
                    },
                    layer: ".tvp_container",
                    control: ".tvp_controls",
                    play: ".tvp_playpause_button",
                    overlay: {
                        play: ".tvp_overlay_play",
                        loading: ".tvp_overlay_loading"
                    },
                    progress: {
                        main: ".tvp_time_rail",
                        cur: ".tvp_time_current",
                        loaded: ".tvp_time_loaded",
                        total: ".tvp_time_total",
                        handle: ".tvp_time_handle",
                        tips: ".tvp_time_float"
                    },
                    fullscreen: ".tvp_fullscreen_button",
                    timePanel: {
                        cur: ".tvp_time_panel_current",
                        total: ".tvp_time_panel_total"
                    },
                    bigben: {
                        main: ".tvp_overlay_bigben",
                        desc: ".tvp_overlay_bigben_text",
                        ffrw: ".tvp_ico_ff_rw",
                        bar: ".tvp_time_current_small"
                    },
                    definition: {
                        main: "._tvp_definition_",
                        button: "._tvp_definition_ .tvp_definition_button > span",
                        list: "._tvp_definition_ .tvp_definition_list"
                    },
                    track: {
                        main: "._tvp_track_",
                        button: "._tvp_track_ .tvp_definition_button > span",
                        list: "._tvp_track_ .tvp_definition_list"
                    },
                    posterlayer: {
                        main: ".tvp_overlay_poster",
                        img: ".tvp_poster_img"
                    },
                    tips: {
                        main: ".tvp_overlay_tips",
                        desc: " .tvp_overlay_tips .tvp_text"
                    },
                    promotion: {
                        main: ".tvp_promotion",
                        link: ".tvp_promotion >a"
                    },
                    loadingAd: {
                        main: ".tvp_ads",
                        control: ".tvp_ads_control",
                        countdown: ".tvp_ads_countdown",
                        skip: ".tvp_ads_skip",
                        qqVipSkip: ".tvp_ads_qqvip_skip",
                        more: ".tvp_btn_ads_more",
                        adLink: ".tvp_ads_link",
                        copyrightTips: ".tvp_ads_copyright"
                    }
                },
                getHtml: function(a) {
                    var b = tvp.$.tmpl(tvp.html5skin.html),
                        c = {};
                    return tvp.$.each(a.type == tvp.PLAYER_DEFINE.LIVE ? a.html5LiveUIFeature : a.html5VodUIFeature, function(a, b) {
                        c[b] = !0
                    }), tvp.$.each(a.html5ForbiddenUIFeature, function(a, b) {
                        c[b] = !1
                    }), b({
                        feature: c
                    })
                }
            })
        }(tvp.$),
        function(a, b) {
            var c;
            a.Html5UI = function(a) {
                this.player = a, this.videoTag = a.getPlayer(), this.$video = a.$video, this.$mod = a.$mod, this.$UILayer = null, this.$control = null, this.feature = a.config.html5VodUIFeature, c = this, this.elements = {}, this.constvars = {
                    progressWidth: 0
                }
            }, a.Html5UI.fn = a.Html5UI.prototype = {
                getCurVideo: function() {
                    return this.player.getCurVideo()
                },
                init: function() {
                    this.initDom(), this.controlReady()
                },
                initDom: function() {
                    this.$UILayer = this.$mod.find(a.html5skin.elements.layer), this.$control = this.$UILayer.find(a.html5skin.elements.control), "100%" == this.player.config.width && "100%" == this.player.config.height && this.$UILayer.addClass("tvp_fullscreen_mode")
                },
                controlReady: function() {
                    function a(a) {
                        try {
                            var d = "build" + a;
                            b.isFunction(c[d]) && c[d](c.player, c.$video, c.$control, c.$UILayer)
                        } catch (e) {}
                    }
                    var c = this;
                    b.each(this.feature, function(d, e) {
                        c.player.isForbiddenH5UIFeature(e) || (e in c.player.config.html5FeatureExtJS ? b.ajax({
                            url: c.player.config.html5FeatureExtJS[e] + "?v=" + (new Date).valueOf(),
                            dataType: "script",
                            success: function() {
                                a(e)
                            }
                        }) : a(e))
                    }), this.player.isUseH5UIFeature("controlbar") && (this.player.config.isHtml5ControlAlwaysShow || (this.$video.on(c.getClickName(), function(a) {
                        c.isHidden() && (c.videoTag.currentTime || c.overlayPlayClicked) ? (c.show(), c.beginHide(5e3)) : c.hide(), a.preventDefault(), a.stopPropagation()
                    }), this.hideControlTimer = 0, this.$video.on("play", function() {
                        c.beginHide(3e3)
                    }).on("pause paused", function() {
                        c.beginHide(8e3)
                    }).one("timeupdate", function() {
                        c.show(), c.beginHide(3e3)
                    })))
                },
                beginHide: function(a) {
                    var b = this;
                    a = a || 5e3, this.stopHide(), this.hideControlTimer = setTimeout(function() {
                        b.hide()
                    }, a)
                },
                stopHide: function() {
                    this.hideControlTimer && (clearTimeout(this.hideControlTimer), this.hideControlTimer = 0)
                },
                hide: function() {
                    this.$UILayer.addClass("tvp_controls_hide"), this.$control.trigger("tvp:control:hide")
                },
                show: function() {
                    return 1 == this.$video.data("data-playing-loadingad") ? void this.hide() : (this.hideControlTimer && (clearTimeout(this.hideControlTimer), this.hideControlTimer = 0), this.$UILayer.removeClass("tvp_controls_hide"), void this.$control.trigger("tvp:control:show"))
                },
                isHidden: function() {
                    return this.$UILayer.hasClass("tvp_controls_hide")
                },
                getDuration: function() {
                    return this.player.getDuration()
                },
                getClickName: function() {
                    return b.os.hasTouch ? "touchend" : "click"
                }
            }
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.Html5UI.fn, {
                buildoverlay: function(c, d, e, f) {
                    function g() {
                        clearTimeout(n), k.loading.removeClass(m), k.loading.show(), k.play.hide()
                    }

                    function h() {
                        o || (n = setTimeout(function() {
                            k.loading.addClass(m), k.loading.hide(), k.play.show()
                        }, 500))
                    }

                    function i() {
                        clearTimeout(n), k.loading.hide(), k.play.hide()
                    }
                    var j = d[0],
                        k = {},
                        l = this,
                        m = "tvp_none",
                        n = null,
                        o = ((b.os.iphone || b.os.ipod) && b.os.version >= "6", !1),
                        p = !1;
                    b.each(a.html5skin.elements.overlay, function(a, b) {
                        k[a] = f.find(b)
                    }), k.loading.hide(), d.on("playing seeked", i).on("pause paused", function() {
                        !c.config.isHtml5ShowPlayBtnOnPause || l.isTouching || c.isGetingInfo && !c.isPlayingLoadingAd() || c.isDefinitionSwitching || h()
                    }).on("seeking waiting", g);
                    var q = function(b) {
                        window.DEBUG && a.log("_pfn:" + b.type), k.play.off("click" == b.type ? "touchend" : "click", q), d.trigger("tvp:h5ui:playbtn:click"), p || (p = !0, l.overlayPlayClicked = !0, j.currentTime || j.load()), j.play()
                    };
                    k.play.on("click", q), k.play.on("touchend", q), c.on("tvp.durationlimit.show", function() {
                        i(), o = !0
                    }).on("tvp.durationlimit.hide", function() {
                        o = !1
                    })
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.Html5UI.fn, {
                buildtips: function(c, d, e, f) {
                    function g(a, c) {
                        b.isUndefined(c) && (c = 5), h.main.addClass("tvp_show"), h.desc.text(a), 0 != c && setTimeout(function() {
                            h.main.removeClass("tvp_show"), h.desc.text("")
                        }, 1e3 * c)
                    }
                    var h = {};
                    b.each(a.html5skin.elements.tips, function(a, b) {
                        h[a] = f.find(b)
                    }), b.extend(a.Html5Player.fn, {
                        showTips: g
                    })
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.Html5UI.fn, {
                buildtitle: function(c, d, e, f) {
                    var g = {};
                    b.each(a.html5skin.elements.title, function(a, b) {
                        g[a] = f.find(b)
                    }), d.on("tvp:video:ajaxsuc", function() {
                        g.text.text(c.curVideo.getTitle())
                    })
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.Html5UI.fn, {
                buildmeta: function(c, d, e, f) {
                    {
                        var g = {};
                        d[0]
                    }
                    b.each(a.html5skin.elements.meta, function(a, b) {
                        g[a] = f.find(b)
                    }), g.main.hide(), b.isUndefined(g.main) || 0 == g.main.length || (d.on("durationchange tvp:video:src", function() {
                        g.duration.text(b.formatSecondsWithText(c.getDuration())), g.filesize.text(b.formatFileSize(c.getFileSize()))
                    }), d.on("play playing", function() {
                        g.main.hide()
                    }))
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.Html5UI.fn, {
                buildplaypause: function(c, d, e, f) {
                    var g = f.find(a.html5skin.elements.play),
                        h = d[0],
                        i = this,
                        j = !1;
                    g.on(b.os.hasTouch ? "touchend" : "click", function() {
                        h.paused ? (j || (j = !0, h.currentTime || h.load()), h.play()) : h.pause()
                    }), d.on("paused pause", function() {
                        i.isTouching || g.addClass("tvp_play").removeClass("tvp_pause")
                    }).on("play playing", function() {
                        g.addClass("tvp_pause").removeClass("tvp_play")
                    })
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.Html5UI.fn, {
                buildtimepanel: function(c, d, e) {
                    var f = {};
                    b.each(a.html5skin.elements.timePanel, function(a, b) {
                        f[a] = e.find(b)
                    }), b.isUndefined(f.total) || 0 == f.total.length || d.on("durationchange tvp:video:src", function() {
                        f.total.text(b.formatSeconds(c.getDuration()))
                    }), b.isUndefined(f.cur) || 0 == f.cur.length || d.on("timeupdate", function() {
                        f.cur.text(b.formatSeconds(this.currentTime))
                    }).on("tvp:player:videochange", function() {
                        f.cur.text(b.formatSeconds(0))
                    }), e.bind("tvp:progress:touchstart", function(a, c) {
                        f.cur.text(b.formatSeconds(c.time))
                    })
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.Html5UI.fn, {
                buildprogress: function(c, d, e) {
                    function f(a) {
                        if (!c.getDuration()) return null;
                        var b = a.pageX,
                            d = i.total.offset().left,
                            f = 0,
                            g = i.total.width(),
                            h = 0,
                            j = 0;
                        d > b ? b = d : b > g + d && (b = g + d), j = b - d, f = j / g, h = c.getDuration() * f;
                        var k = {
                            pos: j,
                            precent: f,
                            time: h
                        };
                        return e.trigger("tvp:progress:touchstart", k), k
                    }
                    var g = this,
                        h = d[0],
                        i = {};
                    this.isTouching = !1, b.each(a.html5skin.elements.progress, function(a, b) {
                        i[a] = e.find(b)
                    }), i.total.bind("touchstart", function(a) {
                        if (a = a.originalEvent ? a.originalEvent : a, 1 == a.targetTouches.length && !g.isTouching) {
                            g.isTouching = !0, a.preventDefault(), h.pause();
                            var b = f(a.targetTouches[0]);
                            !!b && g.setProgress(b.pos, i), c.isDefinitionSwitching = !1, i.total.bind("touchmove", function(a) {
                                if (a = a.originalEvent ? a.originalEvent : a, 1 == a.targetTouches.length) {
                                    var b = f(a.targetTouches[0]);
                                    !!b && g.setProgress(b.pos, i), a.preventDefault()
                                }
                            }).bind("touchend", function(a) {
                                if (a = a.originalEvent ? a.originalEvent : a, g.isTouching = !1, 1 == a.changedTouches.length) {
                                    var b = f(a.changedTouches[0]);
                                    !!b && g.setProgress(b.pos, i), c.seek(b.time), a.preventDefault(), a.stopPropagation(), i.total.unbind("touchmove"), i.total.unbind("touchend"), e.trigger("tvp:progress:touchend")
                                }
                            })
                        }
                    }), d.bind("timeupdate", function(a) {
                        if (a = a.originalEvent ? a.originalEvent : a, !g.isHidden() && !c.isDefinitionSwitching && 4 == a.target.readyState) {
                            var b = h.currentTime / c.getDuration() * i.total.width();
                            g.setProgress(b, i)
                        }
                    }), d.bind("progress", function() {
                        if (!g.isHidden() && !c.isDefinitionSwitching) {
                            var a = 0;
                            h.buffered && h.buffered.length > 0 && h.buffered.end && c.getDuration() && (a = h.buffered.end(0) / c.getDuration() * i.total.width(), i.loaded.css("width", a))
                        }
                    }).bind("tvp:video:src", function() {
                        c.isDefinitionSwitching || g.resetProgress()
                    }), e.bind("tvp:control:show", function() {
                        var a = h.currentTime / c.getDuration() * i.total.width();
                        g.setProgress(a, i)
                    }), b.extend(this, {
                        resetProgress: function() {
                            i.cur.css("width", "0px"), i.handle.css("left", "0px"), i.loaded.css("width", "0px")
                        }
                    })
                },
                setProgress: function(a, b) {
                    var c = b.total.width(),
                        d = b.handle.width(),
                        e = a - d / 2;
                    e = Math.min(e, c - d), e = Math.max(e, 0), b.cur.css("width", a + "px"), b.handle.css("left", e + "px")
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            var c = null,
                d = "",
                e = "";
            b.extend(a.Html5Player || {}, {
                isFullScreen: !1
            }), b.extend(a.Html5UI.fn, {
                buildfullscreen: function(d, e, f, g) {
                    var h = (e[0], this);
                    c = f.find(a.html5skin.elements.fullscreen), c.on(b.os.hasTouch ? "touchend" : "click", function() {
                        b.os.android && h.player.config.isHtml5UseFakeFullScreen && e.removeClass("tvp_video_with_skin"), h.checkIsFullScreen() ? h.cancelFullScreen() : h.enterFullScreen()
                    }), "onwebkitfullscreenchange" in g[0] ? document.addEventListener("webkitfullscreenchange", function() {
                        document.webkitIsFullScreen ? h.enterFullScreen() : h.cancelFullScreen()
                    }, !1) : e.bind("webkitendfullscreen ", function() {
                        h.cancelFullScreen()
                    }), b(document).on("keydown", function(a) {
                        document.webkitIsFullScreen && 27 == a.keyCode && h.cancelFullScreen()
                    }), b.extend(a.Html5Player.fn, {
                        enterFullScreen: function() {
                            h.enterFullScreen()
                        },
                        cancelFullScreen: function() {
                            h.cancelFullScreen()
                        }
                    })
                },
                fixClassName: function(a) {
                    a ? c.removeClass("tvp_fullscreen").addClass("tvp_unfullscreen") : c.removeClass("tvp_unfullscreen").addClass("tvp_fullscreen")
                },
                checkIsFullScreen: function() {
                    return c.hasClass("tvp_unfullscreen")
                },
                enterFullScreen: function() {
                    this.player.videoTag && 0 == this.player.videoTag.currentTime && b.os.ipad || (this.player.config.isHtml5UseFakeFullScreen && !b.os.iphone ? this.enterFakeFullScreen() : this.enterRealFullScreen(), this.player.isFullScreen = !0, this.player.callCBEvent("onfullscreen", !0))
                },
                cancelFullScreen: function() {
                    this.player.config.isHtml5UseFakeFullScreen && !b.os.iphone ? this.cancelFakeFullScreen() : this.cancelRealFullScreen(), this.player.isFullScreen = !1, this.player.callCBEvent("onfullscreen", !1)
                },
                enterRealFullScreen: function() {
                    var c = this,
                        d = c.$video,
                        e = (this.$control.find(a.html5skin.elements.fullscreen), d[0]);
                    e.webkitRequestFullScreen ? e.webkitRequestFullScreen() : e.webkitSupportsFullscreen && (e.webkitExitFullscreen(), e.webkitEnterFullscreen()), (b.browser.WeChat || b.browser.MQQClient) && b.os.android || this.fixClassName(1)
                },
                cancelRealFullScreen: function() {
                    {
                        var b = this,
                            c = b.player;
                        c.$UILayer, b.$video, this.$control.find(a.html5skin.elements.fullscreen)
                    }
                    this.fixClassName(0), document.webkitCancelFullScreen && document.webkitCancelFullScreen()
                },
                allCancelFullScreen: function() {
                    var a = this.player.config.isHtml5UseFakeFullScreen && !b.os.iphone;
                    if (a && window != top && 1e4 == this.player.config.appid && b.os.android) {
                        try {
                            frameElement.style.cssText = d
                        } catch (c) {
                            this.player.config.isHtml5UseFakeFullScreen = !1
                        }
                        this.cancelFullScreen()
                    } else this.cancelFullScreen()
                },
                allEnterFullScreen: function() {
                    var a = this.player.config.isHtml5UseFakeFullScreen && !b.os.iphone;
                    if (a && window != top && 1e4 == this.player.config.appid && b.os.android) {
                        try {
                            d = frameElement.style.cssText, b(frameElement).css("position", "fixed !important").css("left", "0px").css("top", "0px").css("width", "100%").css("height", "100%").css("z-index", 1e3)
                        } catch (c) {
                            this.player.config.isHtml5UseFakeFullScreen = !1
                        }
                        this.enterFullScreen()
                    } else this.enterFullScreen()
                },
                enterFakeFullScreen: function() {
                    e = this.player.$videomod[0].style.cssText, this.player.$videomod.css("position", "fixed !important").css("left", "0px").css("top", "0px").css("width", "100%").css("height", "100%").css("z-index", 1e3), c.removeClass("tvp_fullscreen"), c.addClass("tvp_unfullscreen"), this.$UILayer.addClass("tvp_fullscreen_mode")
                },
                cancelFakeFullScreen: function() {
                    this.player.$videomod[0].style.cssText = e, c.removeClass("tvp_unfullscreen"), c.addClass("tvp_fullscreen"), this.$UILayer.removeClass("tvp_fullscreen_mode")
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.Html5UI.fn, {
                buildbigben: function(c, d, e, f) {
                    var g = {},
                        h = (d[0], 0);
                    b.each(a.html5skin.elements.bigben, function(a, b) {
                        g[a] = f.find(b)
                    }), e.on("tvp:progress:touchstart", function(a, d) {
                        g.main.show(), g.desc.text(b.formatSeconds(d.time)), g.bar.width(d.time / c.getDuration() * 100 + "%"), d.time < h ? g.ffrw.addClass("tvp_ico_rw") : g.ffrw.removeClass("tvp_ico_rw"), h = d.time
                    }).on("tvp:progress:touchend", function() {
                        g.main.hide(), g.desc.text("")
                    })
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.Html5UI.fn, {
                builddefinition: function(c, d, e) {
                    var f = {},
                        g = c.curVideo;
                    b.each(a.html5skin.elements.definition, function(a, b) {
                        f[a] = e.find(b)
                    }), d.bind("tvp:video:src", function() {
                        b.when(g.getFormatList()).then(function(c) {
                            if (1 == c.list.length) return f.main.hide(), f.list.hide(), void f.button.hide();
                            var d = b.isFunction(g.getPlayFormat) ? g.getPlayFormat() : g.getFormat(),
                                e = a.html5lang.getDefiName(d),
                                h = {},
                                i = "";
                            b.each(c.list, function(b, c) {
                                h[c] = a.html5lang.getDefiName(c)
                            });
                            var j = {
                                    curv: d,
                                    curn: e,
                                    list: h
                                },
                                k = a.$.tmpl(a.html5skin.definitionList);
                            i = k({
                                data: j
                            }), f.list.html(i), e && (f.button.text(e), "none" == f.button.css("display") && f.button.show()), f.main.show()
                        })
                    }), f.button.click(function() {
                        f.list.toggle()
                    }), e.on("tvp:progress:touchstart", function() {
                        "none" != f.list.css("display") && f.list.hide()
                    });
                    var h = this;
                    f.list.undelegate("li", "touchend"), f.list.delegate("li", "touchend", function() {
                        var a = b(this),
                            c = a.data("fmt");
                        c && (h.player.swtichDefinition(c), f.list.hide())
                    })
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.Html5UI.fn, {
                buildposterlayer: function(c, d, e, f) {
                    var g = f.find(a.html5skin.elements.posterlayer.main),
                        h = g.find(a.html5skin.elements.posterlayer.img),
                        i = this,
                        j = function(a) {
                            if (a = a || c.curVideo.getPoster() || c.config.pic, 0 == a.length) {
                                var d = h.attr("src");
                                "" != d && (a = d)
                            }
                            b.isString(a) && a.length > 0 ? (a = b.filterXSS(a), h.attr("src", a), k()) : l()
                        },
                        k = function() {
                            g.show(), d.one("play playing", l)
                        },
                        l = function() {
                            g.hide()
                        };
                    c.config.isHtml5ShowPosterOnStart && j(), b.extend(this, {
                        setPoster: j,
                        showPoster: k,
                        hidePoster: l
                    }), b.extend(c, {
                        setPoster: j
                    }), (b.os.iphone || b.os.ipod) && c.config.isiPhoneShowPosterOnPause && d.on("pause paused", function() {
                        i.setPoster()
                    })
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.Html5UI.fn, {
                buildshadow: function(c, d, e, f) {
                    var g = b('<div class="tvp_shadow"></div>').appendTo(f),
                        h = this;
                    c.config.isHtml5ControlAlwaysShow || g.bind(h.getClickName(), function(b) {
                        if (h.isHidden() && (h.videoTag.currentTime || h.overlayPlayClicked)) {
                            try {
                                c.pause()
                            } catch (b) {
                                a.reportErr("call player.pause error in buildshadow:" + (b ? b.message : ""))
                            }
                            h.show(), h.beginHide(8e3)
                        } else h.hide();
                        b.preventDefault(), b.stopPropagation()
                    })
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.Html5UI.fn, {
                buildpromotion: function(c, d, e, f) {
                    function g(c) {
                        var d = {
                            cmd: 3526,
                            val: c,
                            itype: function() {
                                return b.os.iPad ? 2 : b.os.iPhone || b.os.ipod ? 1 : b.os.android ? 3 : 4
                            }(),
                            url: window != top ? document.referrer : document.location.href
                        };
                        a.report(d)
                    }
                    if (b.os.ipad) {
                        var h = {};
                        b.each(a.html5skin.elements.promotion, function(a, b) {
                            h[a] = f.find(b)
                        }), h.link.bind("click", function() {
                            g(2)
                        }), b.isString(c.config.iPadPromotionText) && c.config.iPadPromotionText.length > 0 && h.link.text(c.config.iPadPromotionText), h.main.show(), g(1)
                    }
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            function c(b, c, d, e) {
                var f = new a.Html5LoaingAd,
                    g = e.find(a.html5skin.elements.loadingAd.main),
                    d = g.find(a.html5skin.elements.loadingAd.control),
                    h = g.find(a.html5skin.elements.loadingAd.countdown),
                    i = g.find(a.html5skin.elements.loadingAd.skip),
                    j = g.find(a.html5skin.elements.loadingAd.more),
                    k = g.find(a.html5skin.elements.loadingAd.adLink);
                c.on("tvp:player:videochange", function() {
                    b.config.isHtml5ShowLoadingAdOnChange && f.getAdId()
                }), f.onEnd = function() {
                    g.hide(), c.data("data-playing-loadingad", "0"), c.trigger("tvp:loadingad:ended")
                }, f.onStart = function() {
                    c.data("data-playing-loadingad", "1"), g.show()
                }, f.create(b, {
                    $container: g,
                    $control: d,
                    $countdownContainer: h,
                    $skipLink: i,
                    $moreLink: j,
                    $adLink: k,
                    $copyrightTips: g.find(a.html5skin.elements.loadingAd.copyrightTips),
                    $qqvipSkip: g.find(a.html5skin.elements.loadingAd.qqVipSkip)
                })
            }
            var d = !1;
            b.extend(a.Html5UI.fn, {
                buildloadingAd: function(e, f, g, h) {
                    if (!d) {
                        if (d = !0, !e.config.isHtml5ShowLoadingAdOnStart || e.curVideo.getPay()) return f.trigger("tvp:loadingad:ended"), void(e.curVideo.getPay() && (e.config.isHtml5ShowLoadingAdOnStart = !1, e.config.isHtml5ShowLoadingAdOnChange = !1));
                        if ("function" != typeof a.Html5LoaingAd) {
                            var i = "http://imgcache.gtimg.cn/tencentvideo_v1/tvp/js/plugins/loadingad.js?max_age=86400";
                            return void b.getScript(i, function() {
                                "function" != typeof a.Html5LoaingAd ? (f.data("data-playing-loadingad", "0"), f.trigger("tvp:loadingad:ended")) : c(e, f, g, h)
                            })
                        }
                        c(e, f, g, h)
                    }
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            var c = "";
            a.MP4Skin = {
                html: function() {
                    return ['<div style="background:#000000 url(http://i.gtimg.cn/qqlive/images/20121119/i1353305744_1.jpg) center center no-repeat;">', '	<a style="width:100%;height:100%;display:block" class="tvp_mp4_link"></a>', "</div>"].join("")
                }()
            }, a.MP4Link = function(b, c) {
                this.config.width = a.$.filterXSS(b), this.config.height = a.$.filterXSS(c), this.$elements = null, this.$mp4linker = null
            }, a.MP4Link.fn = a.MP4Link.prototype = new a.BaseHtml5, b.extend(a.MP4Link.fn, {
                write: function(c) {
                    var d = null,
                        e = this;
                    if (d = "object" == b.type(c) && 1 == c.nodeType ? c : a.$.getByID(c)) {
                        this.playerid = this.config.playerid, this.playerid || (this.playerid = "tenvideo_video_player_" + a.MP4Link.maxId++), this.modId = c, this.$mod = b("#" + c), this.oninited();
                        var f = a.MP4Skin.html;
                        videoModId = "mod_" + this.playerid;
                        var g = b('<div id="' + videoModId + '"></div>').appendTo(e.$mod);
                        this.$elements = b(f).appendTo(g).css("width", e.config.width).css("height", e.config.height), this.videomod = b.getByID(videoModId), this.$mp4linker = this.$elements.find(".tvp_mp4_link"), this.callCBEvent("onwrite"), this.registerMonitor(), this.play(this.curVideo), this.checkPlayerSize && this.checkPlayerSize()
                    }
                },
                play: function(d) {
                    var e = this;
                    d instanceof a.VideoInfo && (isVidChange = d.getVid() != c && "" != c, e.setCurVideo(d), isVidChange && e.callCBEvent("onchange", e.curVideo.getFullVid()), c = e.curVideo.getFullVid()), e.$mp4linker.trigger("tvp:mp4:ajaxstart", d instanceof a.VideoInfo ? d.getVid() : d), e.curVideo.getMP4Url().done(function(a) {
                        e.$mp4linker.trigger("tvp:mp4:ajaxsuc", a), e.$mp4linker.attr("href", a), e.$mp4linker.trigger("tvp:mp4:src", a), e.callCBEvent("onplay", e.curVideo.lastQueryVid, e.curVideo), window != top && e.$mp4linker.bind(b.os.hasTouch ? "touchend" : "click", function(b) {
                            b.preventDefault(), top.location.href = a
                        })
                    }).fail(function(a, b) {
                        e.showError(a, b), e.$mp4linker.trigger("tvp:mp4:ajaxerror"), e.$mp4linker.trigger("tvp:mp4:error", errcode, errcontent), e.callCBEvent("onerror", a, b)
                    }).always(function() {
                        c = e.curVideo.lastQueryVid
                    })
                },
                getPlayerType: function() {
                    return "mp4"
                },
                getDuration: function() {
                    var a = this.curVideo.getDuration();
                    return !isNaN(a) && a > 0 ? a : 0
                }
            }), a.MP4Link.maxId = 0
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.MP4Link.fn, {
                buildmonitor: function() {
                    if (!b.isUndefined(a.H5Monitor)) {
                        var c = this,
                            d = null;
                        this.$mp4linker.on("tvp:mp4:ajaxstart", function(b, e) {
                            d = null, d = new a.H5Monitor(e, c), d.addStep(1011)
                        }).on("tvp:mp4:ajaxsuc", function() {
                            d.reportStep(1011, {
                                val1: 1,
                                val2: 0
                            })
                        }).on("tvp:mp4:src", function() {
                            d.report(4, 1)
                        }).on("click", function() {
                            d && b.isFunction(d.report) && d.report(6, 1)
                        })
                    }
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            a.BaseFlash = function() {
                this.swfPathRoot = "", this.flashobj = null, this.flashVarsKeyMapToCfg = {}
            }, "number" != typeof a.BaseFlash.maxId && (a.BaseFlash.maxId = 0), a.BaseFlash.prototype = new a.BasePlayer, b.extend(a.BaseFlash.prototype, {
                getFlashVar: function() {
                    return ""
                },
                getFlashVarVal: function() {
                    var a = {},
                        c = this.config;
                    return b.each(this.flashVarsKeyMapToCfg, function(d, e) {
                        var f = e;
                        if (f in c) {
                            var g = b.type(c[f]);
                            "boolean" == g ? a[d] = c[f] ? 1 : 0 : ("number" == g || "string" === g) && (a[d] = c[f])
                        } else a[d] = ""
                    }), a
                },
                getFlashSwfUrl: function() {
                    var c = "";
                    if (this.config.type == a.PLAYER_DEFINE.LIVE) b.isString(this.config.liveFlashUrl) && this.config.liveFlashUrl.length > 0 ? c = this.config.liveFlashUrl : (c = this.swfPathRoot + this.config.liveFlashSwfType.replace(/[^\w+]/gi, "") + ".swf", c += "?max_age=86400&v=" + this.config.flashVersionTag || "20140615");
                    else {
                        b.isString(this.config.vodFlashUrl) && this.config.vodFlashUrl.length > 0 ? c = this.config.vodFlashUrl : (c = this.swfPathRoot + this.config.vodFlashType.replace(/[^\w+]/gi, "") + ".swf", c += "?max_age=86400&v=" + this.config.flashVersionTag || "20140615");
                        var d = navigator.userAgent;
                        d.indexOf("Maxthon") > 0 && d.indexOf("Chrome") > 0 && (c += (c.indexOf("?") > 0 ? "&" : "?") + "_=" + a.$.now())
                    }
                    if (c = b.filterXSS(c), "undefined" != typeof window.console && b.isFunction(window.console.warn) && c.indexOf("TencentPlayer.swf") > 0 && -1 == b.inArray(document.location.hostname, ["v.qq.com", "film.qq.com"])) {
                        var e = "\u60a8\u5f53\u524d\u4f7f\u7528\u7684flash\u64ad\u653e\u5668\u662f\u817e\u8baf\u89c6\u9891\u5b98\u7f51\u4e13\u7528\u7248\uff0c\u5982\u65e0\u5fc5\u8981\u8bf7\u4f7f\u7528\u5916\u8d34\u7248\u672c";
                        b.browser.chrome ? window.console.warn("%c" + e, "background: rgba(252,234,187,1)") : window.console.warn(e)
                    }
                    return c
                },
                getFlashHTML: function() {
                    var a = this.getFlashVar(),
                        c = this.getFlashSwfUrl(),
                        d = b.formatSize(this.config.width),
                        e = b.formatSize(this.config.height);
                    this.playerid = this.config.playerid ? this.config.playerid : "tenvideo_flash_player_" + (new Date).getTime();
                    var f = ['<param name="allowScriptAccess" value="always" />', '<param name="movie" value="' + c + '" />', '<param name="quality" value="high" />', '<param name="allowFullScreen" value="true"/>', '<param name="play" value="true" />', '<param name="wmode" value="' + b.filterXSS(this.config.flashWmode) + '" />', '<param name="flashvars" value="' + a + '"/>', '<param name="type" value="application/x-shockwave-flash" />', '<param name="pluginspage" value="http://get.adobe.com/cn/flashplayer/" />'].join("\n"),
                        g = "";
                    return b.browser.ie ? (g += 11 == b.browser.version ? '<object data="' + c + '" type="application/x-shockwave-flash" width="' + d + '" height="' + e + '" id="' + this.playerid + '" codebase="http://fpdownload.adobe.com/pub/shockwave/cabs/flash/swflash.cab#version=10,2,0,0">\n' : '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="' + d + '" height="' + e + '" id="' + this.playerid + '" codebase="http://fpdownload.adobe.com/pub/shockwave/cabs/flash/swflash.cab#version=10,2,0,0">\n', g += f, g += '	<div id="tvp_flash_install" style="line-height:' + e + ';background:#000000;text-align:center"><a href="http://www.adobe.com/go/getflashplayer" target="_blank" style="color:#ffffff;font-size:14px;padding:10px;">\u70b9\u51fb\u6b64\u5904\u5b89\u88c5\u64ad\u653e\u89c6\u9891\u9700\u8981\u7684flash\u63d2\u4ef6</a></div>\n', g += "</object>") : g += '<embed wmode="' + b.filterXSS(this.config.flashWmode) + '" flashvars="' + a + '" src="' + c + '" quality="high" name="' + this.playerid + '" id="' + this.playerid + '" bgcolor="#000000" width="' + d + '" height="' + e + '" align="middle" allowScriptAccess="always" allowFullScreen="true"  type="application/x-shockwave-flash" pluginspage="http://get.adobe.com/cn/flashplayer/"></embed>', g
                },
                write: function(c) {
                    var d = null;
                    if ("object" == b.type(c) && 1 == c.nodeType ? (d = c, this.$mod = b("#" + c.id), this.modId = this.$mod.attr("id") || "") : (d = a.$.getByID(c), this.modId = c, this.$mod = b(d)), d) {
                        var e = this.getFlashHTML(),
                            f = b.now(),
                            g = this.getFlashSwfUrl(),
                            h = 3544,
                            i = this,
                            j = "mod_" + this.playerid;
                        this.on(a.ACTION.onFlashPlayerInited, function() {
                            a.report({
                                cmd: h,
                                speed: b.now() - f,
                                appId: i.config.appid,
                                contentId: i.config.contentId,
                                vid: i.curVideo.getFullVid() || i.curVideo.getChannelId(),
                                str3: i.getPlayerType(),
                                str4: g
                            })
                        }), a.report({
                            cmd: h,
                            appId: i.config.appid,
                            contentId: i.config.contentId,
                            vid: i.curVideo.getFullVid() || i.curVideo.getChannelId(),
                            str3: i.getPlayerType(),
                            str4: g
                        }), d.innerHTML = '<div id="' + j + '">' + e + "</div>", this.flashobj = b.browser.ie ? document.getElementById(this.playerid) : document.embeds[this.playerid], this.videomod = b.getByID(j);
                        var k = this.config.height + "",
                            l = b.getByID("tvp_flash_install");
                        k.indexOf("%") > 0 && l && (l.style.lineHeight = d.offsetHeight)
                    }
                },
                getPlayer: function() {
                    return this.flashobj
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            a.FlashLivePlayer = function(c, d) {
                var e = this;
                a.BaseFlash.maxId++, this.flashVarsKeyMapToCfg = {
                    showcfg: "isLiveFlashShowCfg",
                    loadingswf: "loadingswf",
                    share: "share",
                    oid: "oid",
                    apptype: "liveFlashAppType",
                    full: "isLiveflashShowFullBtn",
                    wmark: "liveFlashWatermark",
                    autoplay: "autoplay"
                }, this.swfPathRoot = "http://imgcache.qq.com/minivideo_v1/vd/res/", this.config.width = b.filterXSS(c), this.config.height = b.filterXSS(d), this.loginResponse = function() {
                    this.flashobj && "function" != typeof this.flashobj.loginCallback || (this.flashobj.loginCallback(a.FlashLivePlayer.flashloginParam), a.FlashLivePlayer.flashloginParam = {})
                }, window.playerInit = function() {
                    e.trigger(a.ACTION.onFlashPlayerInited), e.callCBEvent("oninited"), e.callCBEvent("onplay", e.curVideo.getChannelId())
                }
            }, a.FlashLivePlayer.prototype = new a.BaseFlash, b.extend(a.FlashLivePlayer.prototype, {
                getChannelURl: function(a) {
                    return "http://zb.v.qq.com:1863/?progid=" + a
                },
                getPlayerType: function() {
                    return "liveflash"
                },
                getFlashVar: function() {
                    var c = "",
                        d = "TenVideo_FlashLive_",
                        e = this.getFlashVarVal(),
                        f = window != top ? document.referrer : document.location.href,
                        g = "";
                    c += "vid=" + this.curVideo.getChannelId(), c += "&vurl=" + this.getChannelURl(this.curVideo.getChannelId()), c += "&sktype=" + (this.curVideo.getIsLookBack() ? "vod" : "live"), g = "&", c += g, c += "funCnlInfo=" + d + "GetChannelInfo", c += "&funTopUrl=" + d + "GetTopUrl", c += "&funLogin=" + d + "IsLogin", c += "&funOpenLogin=" + d + "OpenLogin", c += "&funSwitchPlayer=" + d + "SwitchPlayer", c += "&host=" + encodeURIComponent(f), c += "&txvjsv=2.0", b.each(e, function(a, d) {
                        (b.isString(d) && d.length > 0 || "number" == b.type(d)) && (c += "&" + a + "=" + b.filterXSS(d))
                    });
                    for (var h in this.config.liveFlashExtVars) c += ["&", encodeURIComponent(h), "=", encodeURIComponent(this.config.liveFlashExtVars[h])].join("");
                    return c += "&p=" + a.livehub.g_flashp2p || 0
                },
                play: function(b) {
                    if (this.flashobj) {
                        if (b = b || this.curVideo, !b instanceof a.VideoInfo) throw new Error("\u4f20\u5165\u7684\u5bf9\u8c61\u4e0d\u662ftvp.VideoInfo\u7684\u5b9e\u4f8b");
                        var c = !!b.getIsLookBack(),
                            d = b.getChannelId(),
                            e = this.getChannelURl(d),
                            f = a.livehub.g_flashp2p || 0;
                        "" != d && ("undefined" != typeof this.flashobj.setSkinType && this.flashobj.setSkinType(c ? "vod" : "live"), "undefined" != typeof this.flashobj.loadAndPlayVideoFromVID && this.flashobj.loadAndPlayVideoFromVID(e, d, b.getLiveReTime() || "", "", f), this.callCBEvent("onplay", b.getChannelId()), this.setCurVideo(b), this.callCBEvent("onchange", b.getChannelId()))
                    }
                },
                stop: function() {
                    this.flashobj && (b.isUndefined(this.flashobj.stopVideo) || this.flashobj.stopVideo())
                }
            }), a.FlashLivePlayer.ADTYPE = {
                WEI_DIAN_TAI: "weidiantai",
                WEI_DIAN_SHI: "weidianshi",
                LIVE: "live",
                IN_LIVE: "inlive"
            }, window.TenVideo_FlashLive_GetChannelInfo = function() {
                return a.livehub.g_curCnlInfo
            }, window.TenVideo_FlashLive_GetTopUrl = function() {
                var a = "";
                try {
                    a = top.location.href
                } catch (b) {
                    a = document.location.href
                }
                return a
            }, window.TenVideo_FlashLive_IsLogin = function() {
                return a.common.getUin() > 1e4
            }, window.TenVideo_FlashLive_OpenLogin = function(b) {
                a.FlashLivePlayer.flashloginParam = b || {}, a.common.openLogin()
            }, window.TenVideo_FlashLive_SwitchPlayer = b.noop
        }(tvp, tvp.$);
    var preplay = tvp.$.noop,
        nextplay = tvp.$.noop,
        attrationstop = tvp.$.noop,
        thisplay = tvp.$.noop,
        playerInit = tvp.$.noop;
    ! function(a, b) {
        var c = "",
            d = -1,
            e = null;
        a.FlashPlayer = function(b, c) {
            e = this, this.flashVarsKeyMapToCfg = {
                cid: "coverId",
                tpid: "typeId",
                showend: "isVodFlashShowEnd",
                showcfg: "isVodFlashShowCfg",
                searchbar: "isVodFlashShowSearchBar",
                loadingswf: "loadingswf",
                share: "isVodFlashShowShare",
                pic: "pic",
                oid: "oid",
                skin: "vodFlashSkin",
                shownext: "isVodFlashShowNextBtn",
                list: "vodFlashListType",
                autoplay: "autoplay"
            }, this.swfPathRoot = "http://imgcache.qq.com/tencentvideo_v1/player/", a.BaseFlash.maxId++, this.isStartPlay = !1, this.getPlayerType = function() {
                return "flash"
            }, this.config.width = a.$.filterXSS(b), this.config.height = a.$.filterXSS(c), window.thisplay = function(a, b) {
                e.isStartPlay = !0, e.callCBEvent("onplaying", e.getCurVid(), b)
            }, window.playerInit = function() {
                "function" == typeof e.flashobj.setNextEnable && e.flashobj.setNextEnable(e.callCBEvent("ongetnextenable", e.curVideo.getFullVid()) ? 1 : 0), e.trigger(a.ACTION.onFlashPlayerInited), e.callCBEvent("oninited"), e.callCBEvent("onplay", e.curVideo.getFullVid())
            }, window.attrationstop = window.nextplay = function(a) {
                e.callCBEvent("onended", a);
                var b = e.callCBEvent("ongetnext", a);
                return b ? void e.play(b) : void e.callCBEvent("onallended")
            }, window.__flashplayer_ismax = function(a) {
                e.callCBEvent("onfullscreen", a)
            }, window.__tenplay_popwin = function() {
                a.$.isFunction(e.onflashpopup) && e.callCBEvent("onflashpopup")
            }, window._showPlayer = function() {
                e.showPlayer()
            }, window._hidePlayer = function() {
                e.hidePlayer()
            }
        }, a.FlashPlayer.fn = a.FlashPlayer.prototype = new a.BaseFlash, b.extend(a.FlashPlayer.fn, {
            play: function(e) {
                function f(a) {
                    var c = {
                        vid: a.getVidList() || a.getIdx(),
                        duration: a.getDuration() || "",
                        start: j,
                        end: k,
                        history: a.getHistoryStart() || 0,
                        vstart: h,
                        vend: i,
                        title: a.getTitle() || "",
                        exid: l,
                        pay: a.getPay(),
                        cdntype: a.getCDNType(),
                        bulletid: b.isFunction(a.getBulletId) ? a.getBulletId() : ""
                    };
                    return c
                }
                if (!this.flashobj) throw new Error("\u672a\u627e\u5230\u89c6\u9891\u64ad\u653e\u5668\u5bf9\u8c61\uff0c\u8bf7\u786e\u8ba4flash\u64ad\u653e\u5668\u662f\u5426\u5b58\u5728");
                if (b.isUndefined(e) && "function" == typeof this.flashobj.setPlaytime) return void(-1 == d ? "function" == typeof this.flashobj.loadAndPlayVideoV2 && this.flashobj.loadAndPlayVideoV2(f(this.getCurVideo())) : (this.flashobj.setPlaytime(d), d = -1, this.isStartPlay = !0));
                if (!e instanceof a.VideoInfo) throw new Error("\u4f20\u5165\u7684\u5bf9\u8c61\u4e0d\u662ftvp.VideoInfo\u7684\u5b9e\u4f8b");
                var g = c != e.getFullVid();
                this.setCurVideo(e), g && this.callCBEvent("onchange", this.curVideo.getFullVid()), c = this.curVideo.getFullVid(), this.isStartPlay = !1;
                var h = 0,
                    i = 0,
                    j = 0,
                    k = 0;
                0 == e.getIdx() ? (h = e.getPrefix() || 0, i = e.getEndOffset() || 0) : (j = e.getTagStart(), k = e.getTagEnd());
                var l = 0 == e.getIdx() ? 0 : "k" + e.getIdx();
                if (this.curVideo.getVidList() != e.getVidList() || 0 == e.getIdx()) {
                    var m = f(e);
                    0 == this.config.starttips && (m.t = e.getHistoryStart() || 0), "function" == typeof this.flashobj.loadAndPlayVideoV2 && this.flashobj.loadAndPlayVideoV2(m)
                } else e.getTagEnd() - e.getTagStart() > 0 && this.flashobj.attractionUpdate(e.getTagStart(), e.getTagEnd(), l);
                this.isStartPlay = !0, this.callCBEvent("onplay", e.getFullVid()), "function" == typeof this.flashobj.setNextEnable && this.flashobj.setNextEnable(this.callCBEvent("ongetnextenable", this.curVideo.getFullVid()) ? 1 : 0)
            },
            pause: function() {
                e.isStartPlay && this.flashobj && "function" == typeof this.flashobj.getPlaytime && "function" == typeof this.flashobj.pauseVideo && (d = this.flashobj.getPlaytime(), this.flashobj.pauseVideo(), this.isStartPlay = !1)
            },
            getFlashVar: function() {
                var c = "",
                    d = this.getFlashVarVal();
                if (c += "vid=" + this.curVideo.getVidList(), this.curVideo.getTagEnd() - this.curVideo.getTagStart() > 0 && (c += "&attstart=" + a.$.filterXSS(this.curVideo.getTagStart()), c += "&attend=" + a.$.filterXSS(this.curVideo.getTagEnd())), this.curVideo.getDuration() > 0 && (c += "&duration=" + (this.curVideo.getDuration() || "")), this.curVideo.getHistoryStart() > 0 && (c += "&history=" + a.$.filterXSS(this.curVideo.getHistoryStart())), this.curVideo.getTstart() > 0 && (c += "&t=" + a.$.filterXSS(this.curVideo.getTstart())), 0 == this.curVideo.getIdx() && (this.curVideo.getPrefix() > 0 || this.curVideo.getTail() > 0)) {
                    var e = this.curVideo.getPrefix(),
                        f = this.curVideo.getEndOffset();
                    (e > 0 || f) && (c += "&vstart=" + a.$.filterXSS(e), c += "&vend=" + a.$.filterXSS(f))
                }
                a.$.each(d, function(d, e) {
                    (b.isString(e) && e.length > 0 || "number" == b.type(e)) && (c += "&" + d + "=" + a.$.filterXSS(e))
                }), this.curVideo.getPay() && (c += "&pay=" + (b.isTrue(this.curVideo.getPay()) ? 1 : 0)), this.curVideo.getIdx() && (c += "&exid=k" + a.$.filterXSS(this.curVideo.getIdx())), this.curVideo.getCDNType() > 0 && (c += "&cdntype=" + this.curVideo.getCDNType());
                for (var g in this.config.vodFlashExtVars) c += ["&", encodeURIComponent(g), "=", encodeURIComponent(this.config.vodFlashExtVars[g])].join("");
                return b.isFunction(this.curVideo.getBullet) && this.curVideo.getBullet() === !0 && (c += "&bullet=1", b.isFunction(this.curVideo.getBulletId) && (c += "&bulletid=" + this.curVideo.getBulletId())), this.curVideo.getTitle().length > 0 && (c += "&title=" + encodeURIComponent(this.curVideo.getTitle())), c
            },
            getPlaytime: function() {
                return this.flashobj && "function" == typeof this.flashobj.getPlaytime ? this.flashobj.getPlaytime() : -1
            },
            setPlaytime: function(a, b) {
                return this.flashobj && "function" == typeof this.flashobj.setPlaytime ? this.flashobj.setPlaytime(a, b) : void 0
            },
            showPlayer: function() {
                if (this.flashobj) {
                    var a = "" + this.config.width,
                        b = "" + this.config.height;
                    a.indexOf("px") < 0 && (a = parseInt(a) + "px"), b.indexOf("px") < 0 && (b = parseInt(b) + "px"), this.flashobj.style.width = a, this.flashobj.style.height = b
                }
            },
            hidePlayer: function() {
                this.flashobj && (this.flashobj.style.width = "1px", this.flashobj.style.height = "1px")
            }
        })
    }(tvp, tvp.$),
        function(a, b) {
            a.livehub = {
                g_flashp2p: !1,
                iretcode: 0,
                g_curCnlInfo: {},
                stepReport: function(c, d) {
                    var e = {
                        cmd: 3545,
                        val: c
                    };
                    "object" == b.type(d) && (e = b.extend(e, {
                        speed: d.delay,
                        int5: d.code,
                        vid: d.lid
                    }), d.config && (e = b.extend(e, {
                        contentId: d.config.contentId,
                        appId: d.config.appid
                    }))), a.report(e)
                },
                FlashChecker: function(c) {
                    var d = this;
                    this.cnlId = "", this.extParam = {}, this.onError = b.noop, this.onCanFlash = b.noop, this.onCanHTML5 = b.noop, this.onCanOCX = b.noop, this.onComplete = b.noop, this.onGetCnlId = b.noop;
                    var e = function(b, d) {
                        d = d || {}, d.config = c, a.livehub.stepReport(b, d)
                    };
                    this.onSuccess = function(c) {
                        c && 0 == c.iretcode ? (a.livehub.iretcode = c.iretcode, a.livehub.g_flashp2p = c.flashp2p ? !0 : !1, a.debug("get channel info:flashid=" + c.flashid + ",p2pid=" + c.p2pid + ",flashp2p=" + c.flashp2p), d.cnlId = "" + c.flashid || c.p2pid || "", d.onGetCnlId("" + d.cnlId, !1), a.livehub.getCurChannelInfo(d.cnlId, d.extParam), c.flashid ? (e(5), d.onCanFlash(d.cnlId)) : b.os.windows && c.p2pid ? (e(6), d.onCanOCX(d.cnlId)) : (e(7, {
                            code: c.iretcode
                        }), d.onError(c.iretcode))) : (e(8, {
                            code: c.iretcode
                        }), d.onError(500))
                    }, this.send = function() {
                        if (e(1), a.common.isUseHtml5()) return e(2), d.onCanHTML5(d.cnlId), void d.onComplete();
                        var c = b.now();
                        b.ajax({
                            url: "http://info.zb.qq.com",
                            data: {
                                cmd: 1,
                                cnlid: d.cnlId || ""
                            },
                            dataType: "jsonp"
                        }).done(function(a, f) {
                            f = b.now() - c, e(3, {
                                delay: f
                            }), d.onSuccess(a), d.onComplete()
                        }).fail(function(a, f) {
                            f = b.now() - c, e(4, {
                                delay: f
                            }), d.onError(), d.onComplete()
                        })
                    }
                },
                getCurChannelInfo: function(c, d) {
                    var e = a.livehub.g_curCnlInfo;
                    d && "object" == b.type(d) ? (e.cnlId = d.cnlId, d.channelname && (e.cnlName = d.channelname), d.currentname && d.currenttime && (e.prmInfo = d.currenttime + "|" + d.currentname)) : e = {}
                }
            }
        }(tvp, tvp.$),
        function(a, b) {
            function c(c, d, e) {
                var g = b.now(),
                    h = g - f,
                    i = {
                        cmd: 3529,
                        val: c,
                        str4: d,
                        speed: 0 > h ? b.now() - g : h
                    };
                f = g, "object" == b.type(e) && b.extend(i, e), a.report(i)
            }

            function d(c, d) {
                var e = c + "Defer";
                if (a[e]) return a[e];
                var f = b.Deferred();
                a[e] = f;
                var g = "http://imgcache.gtimg.cn/tencentvideo_v1/tvp/js/",
                    h = c.toLowerCase();
                "OcxPlayer" == c && "undefined" != typeof QQLive && "undefined" != typeof QQLive.DEFINE && (h = "ocxplayerlite");
                var i = g + "module/" + h + ".js?max_age=86400&v=20140827";
                if ("function" == typeof a[c]) f.resolve();
                else {
                    var j = new a.RetCode(100123),
                        k = b.now();
                    j.begin(), d(1), b.getScript(i, function() {
                        var e = b.now() - k;
                        if ("function" != typeof a[c]) throw j.reportErr(11), d(2, 11, e), new Error(errMsg[1]);
                        d(2, 0, e), j.reportSuc(), f.resolve()
                    })
                }
                return f
            }

            function e(a) {
                return "string" == b.type(a) && /html5|mp4/i.test(a)
            }
            var f = b.now();
            "true" == b.getUrlParam("__tvpdebug__", window != top ? top.location.href : "") && b.getScript("http://weinre.qq.com/target/target-script.js#__tvpdebug__");
            var g = function(c, f) {
                    function h() {
                        var a = b.Deferred();
                        switch (r.playerType) {
                            case "flash":
                                t = "FlashPlayer";
                                break;
                            case "html5":
                                m();
                                break;
                            case "ocx":
                                t = "OcxPlayer";
                                break;
                            case "mp4":
                                t = "MP4Link";
                                break;
                            default:
                                i()
                        }
                        return a.resolve(), a
                    }

                    function i() {
                        return a.common.isEnforceMP4() ? void(t = "MP4Link") : void(a.common.isUseHtml5() ? m() : t = b.os.android ? "MP4Link" : "FlashPlayer")
                    }

                    function j(c) {
                        if (c.getChannelId()) {
                            var d = c.getChannelId();
                            if ("object" == b.type(s[d]) && b.isFunction(s[d].done)) return s[d];
                            s[d] = b.Deferred();
                            var e = new a.livehub.FlashChecker(r),
                                f = !0;
                            return e.cnlId = c.getChannelId(), e.extParam = c.getChannelExtParam(), e.onGetCnlId = function(a, b) {
                                c.setChannelId(a), c.setIsLookBack(!!b)
                            }, e.onCanFlash = function() {
                                t = "FlashLivePlayer"
                            }, e.onCanHTML5 = function() {
                                n()
                            }, e.onCanOCX = function() {
                                t = "OcxPlayer"
                            }, e.onError = function() {
                                k(), f = !1
                            }, e.onComplete = function() {
                                l(), f ? s[d].resolve() : s[d].reject()
                            }, e.send(), s[d]
                        }
                    }

                    function k() {
                        a.common.isLiveUseHTML5() ? n() : t = b.os.android ? "FlashLivePlayer" : "OcxPlayer"
                    }

                    function l() {
                        switch (r.playerType) {
                            case "flash":
                                t = "FlashLive";
                                break;
                            case "html5":
                                n();
                                break;
                            case "flashLive":
                                t = "FlashLivePlayer";
                                break;
                            case "ocx":
                                t = "OcxPlayer"
                        }
                    }

                    function m() {
                        x = !0, t = r.isHtml5UseUI ? "Html5Player" : "Html5Tiny"
                    }

                    function n() {
                        t = r.isHtml5UseUI ? "Html5Live" : "Html5LiveTiny"
                    }

                    function o(a) {
                        for (var b = !1, c = document.getElementsByTagName("link") || [], d = 0, e = c.length; e > d && !(b = c[d] && c[d].href && (0 == c[d].href.indexOf(a) || -1 != c[d].href.indexOf("player_inews.css")));) d++;
                        return b
                    }

                    function p() {
                        function d() {
                            if (!g) {
                                g = !0;
                                var b = new a[t];
                                b.init(c), q.resolve(b, t)
                            }
                        }
                        var f = null,
                            g = !1,
                            h = b.inArray(t, w),
                            i = r.cssPath + (c.HTML5CSSName || "player.css");
                        (h > -1 && b.isString(c.HTML5CSSName) && c.HTML5CSSName.length > 0 || e(t)) && !o(i) ? (f = setTimeout(function() {
                            c.isHtml5UseUI = !1, t = y[h], d()
                        }, 5e3), b.loadCss(i).done(function() {
                            clearTimeout(f), f = null, d()
                        })) : d()
                    }
                    var q = b.Deferred(),
                        r = {},
                        s = {},
                        t = "FlashPlayer",
                        u = ["\u672a\u6307\u660e\u64ad\u653e\u5668\u5185\u6838", "\u60a8\u5f53\u524d\u4f7f\u7528\u7684\u7edf\u4e00\u64ad\u653e\u5668JS\u6587\u4ef6\u4e0d\u5305\u542b\u6307\u5b9a\u7684\u64ad\u653e\u5668\u5185\u6838", "video\u672a\u521d\u59cb\u5316"],
                        v = ["FlashPlayer", "FlashLivePlayer", "MP4Link", "OcxPlayer"],
                        w = ["Html5Player", "Html5Live"],
                        x = !1,
                        y = ["Html5Tiny", "Html5LiveTiny"];
                    if (v = v.concat(w), v = v.concat(y), b.extend(r, c), b.isUndefined(c.isHTML5UseUI) || (r.isHtml5UseUI = c.isHTML5UseUI), !c.video instanceof a.VideoInfo) throw new Error(u[2]);
                    return c.video.setCurPlayer(f), g.checkLivePlayer = j, b.when(c.type == a.PLAYER_DEFINE.VOD ? h() : j(c.video)).then(function() {
                        var e = "",
                            g = function(b, d, f) {
                                a.report({
                                    cmd: 3531,
                                    val: b,
                                    val2: d || 0,
                                    str3: e,
                                    speed: f || 0,
                                    contentId: c.contentId || "",
                                    appId: c.appid || 0
                                })
                            };
                        if (!t) throw new Error(u[0]);
                        if (b.inArray(t, v) < 0) throw new Error(u[1]);
                        c.type == a.PLAYER_DEFINE.VOD && x && f.trigger(a.ACTION.onVodH5Init), "function" != typeof a[t] ? d(t, g).done(function() {
                            p.call(f)
                        }) : p.call(f)
                    }), q
                },
                h = {
                    player: "playerType",
                    showcfg: ["isVodFlashShowCfg", "isLiveFlashShowCfg"],
                    searchbar: ["isVodFlashShowSearchBar"],
                    showend: ["isVodFlashShowEnd"],
                    tpid: ["typeId"],
                    cid: ["coverId"],
                    flashshownext: ["isVodFlashShowNextBtn"],
                    loadingswf: "loadingswf",
                    wmode: "flashWmode",
                    flashskin: ["vodFlashSkin"],
                    extvars: ["vodFlashExtVars"],
                    swftype: ["vodFlashType"],
                    swfurl: ["vodFlashUrl", "liveFlashUrl"]
                };
            a.Player = function(d, e) {
                this.sessionId = b.createGUID(), c(1, this.sessionId), this.instance = null, this.config = {}, this._oldcfg = {}, b.extend(this.config, a.defaultConfig), this.setting("width", d), this.setting("height", e)
            }, a.Player.fn = a.Player.prototype = new a.BasePlayer, b.extend(a.Player.fn, {
                setting: function(a, b) {
                    this.config[a] = b
                },
                output: function(a) {
                    this.setting("modId", a), this.create(this.config)
                },
                create: function(d) {
                    var e = this;
                    b.extend(e.config, d), c(2, this.sessionId, {
                        contentId: e.config.contentId || "",
                        appId: e.config.appid || 0
                    }), g(e.config, e).done(function(f, h) {
                        try {
                            c(3, e.sessionId, {
                                vid: f.curVideo.getFullVid() || f.curVideo.getChannelId(),
                                str3: f.getPlayerType(),
                                contentId: e.config.contentId || "",
                                appId: e.config.appid || 0
                            })
                        } catch (i) {}
                        e.instance = f, e.instance.instance = e;
                        for (var j in e.instance) "instance" != j && ("on" == j.substr(0, 2) && b.isFunction(e[j]) && e[j] != a.$.noop || (e[j] = e.instance[j]));
                        f.callCBEvent("onwrite"), e.config.type == a.PLAYER_DEFINE.LIVE && (e.play = function(c) {
                            b.isString(c) ? (e.config.video.setChannelId(c), c = e.config.video) : c instanceof a.VideoInfo && b.when(g.checkLivePlayer(c)).then(function() {
                                e.instance instanceof a[h] ? e.instance.play(c) : (d.video = c, g(d))
                            })
                        }), a.Player.instance[e.playerid] = e
                    }).always(function() {
                        function c(a, c) {
                            try {
                                var d = "build" + a;
                                return b.isFunction(e[d]) ? (e[d].call(e, c), !0) : !1
                            } catch (f) {}
                        }
                        if (b.each(e.config.plugins, function(a, d) {
                            if (d && a in e.config.pluginUrl) {
                                var f = b.isPlainObject(d) ? d : {};
                                if (!c(a, f)) {
                                    var g = e.config.libpath + e.config.pluginUrl[a];
                                    b.isString(g) && "" != b.trim(g) && b.getScript(g, function() {
                                        c(a, f)
                                    })
                                }
                            }
                        }), window.console && _isUseInnerZepto) {
                            var d = {
                                jQuery: "jq",
                                Zepto: "zepto",
                                jq: "jqmobi"
                            };
                            for (var f in d)
                                if ("function" == typeof window[f]) {
                                    if ("jQuery" === f && "function" != typeof jQuery.Deferred) break;
                                    console.warn("\n" + a.name + "\u63d0\u793a\uff1a\n\u60a8\u5f53\u524d\u9875\u9762\u4f7f\u7528\u4e86" + f + "\n\u5efa\u8bae\u60a8\u5f15\u7528" + a.name + " for " + f + "\u4e13\u7528\u7248\uff0c\u66f4\u8f7b\u66f4\u5feb\u66f4\u7cbe\u7b80\nJS\u5730\u5740:http://imgcache.gtimg.cn/tencentvideo_v1/tvp/js/tvp.player_v2_" + d[f] + ".js\n\n")
                                }
                        }
                    })
                },
                addParam: function(c, d) {
                    a.report({
                        cmd: 3546,
                        val: 1
                    }), "config" == c && "object" == b.type(d) ? b.extend(this.config, d) : this._oldcfg[c] = d
                },
                setCurVideo: function(b) {
                    a.report({
                        cmd: 3546,
                        val: 2
                    }), this.config.video = b, b && b instanceof a.VideoInfo && b.setCurPlayer(this)
                },
                write: function(c) {
                    a.report({
                        cmd: 3546,
                        val: 3
                    }), this.config.modId = c;
                    var d = 1 == this._oldcfg.type ? 1 : 2,
                        e = this;
                    b.each(this._oldcfg, function(c, f) {
                        c in h ? b.isArray(h[c]) ? 2 == d ? e.config[h[c][0]] = f : 1 == d && h[c].length >= 2 && (e.config[h[c][1]] = f) : b.isString(h[c]) && (e.config[h[c]] = f) : c in a.defaultConfig && (e.config[c] = f)
                    }), delete this._oldcfg, this.create(this.config)
                }
            }), a.create = g
        }(tvp, tvp.$), tvp.Player.instance = {},
        function(a, b) {
            function c(a) {
                var c = a.t ? a.t.curVideo : !1,
                    e = b.extend({
                        lid: c ? c.getChannelId() : "",
                        pageText2: a.text2
                    }, d, a);
                return this.op = e, this.init(e), this
            }
            var d = {
                pluginName: "AppBanner",
                isAutoReport: !0,
                is_android: /android/i.test(navigator.userAgent.toLowerCase()),
                btnTexts: ["\u4e0b\u8f7d", "\u6253\u5f00", "\u5347\u7ea7"],
                btnText: "\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891,\u89c2\u770b\u66f4\u591a",
                style: "none",
                isResetWords: !1,
                tpl: '<div class="tvp_promote_banner tvp_promote_banner_v2" data-role="appbannerbox">					<a class="tvp_promote_attention_right tvp_promote_download" data-action="applink" data-role="appbannerlink" data-status="down" href="${url}" data-url="${openUrl}" ${iframe}>						<p class="tvp_promote_progress" data-role="appbannerbtnprogress"></p>						<span class="tvp_promote_text" data-role="appbannerbtntext">${btnText}</span>					</a>				</div>'
            };
            b.extend(c.prototype, {
                init: function(a) {
                    var b = this;
                    this.initStyle(a), this.getAppInfo(a).done(function() {
                        b.initRoles(a), b.fixTextAndUrl(a)
                    })
                },
                initStyle: function(a) {
                    "none" != a.style && b("head").append(a.style)
                },
                initRoles: function(a) {
                    var c = a.modId ? b("#" + a.modId) : a.mod;
                    this.$mod = c, this.fixTpl(), this.$box = c.find("[data-role=appbannerbox]"), this.$text1 = c.find("[data-role=appbannertext1]"), this.$text2 = c.find("[data-role=appbannertext2]"), this.$btn = c.find("[data-role=appbannerlink]"), this.$btnText = c.find("[data-role=appbannerbtntext]"), this.$progress = c.find("[data-role=appbannerbtnprogress]"), this.$btn.attr("data-promotionId", a.promotionId || 140), this.fixStyle(), this.$box.show()
                },
                getAppInfo: function(c) {
                    function d(d) {
                        d = d || a.app.config.defaultName;
                        var e = a.app.getPackageInfo();
                        c = b.extend(c, {
                            appName: d,
                            logoClass: e[d].logoClass,
                            text1: e[d].text1,
                            text2: e[d].text2
                        })
                    }
                    if (c.loadAppInfoDefer) return c.loadAppInfoDefer;
                    var e = b.Deferred();
                    return c.loadAppInfoDefer = e, c.pay && c.cid ? (d(c.appName), e.resolve()) : c.appName && c.extraApp ? (d(c.appName), e.resolve()) : c.vid && (c.appName = "", d(c.appName), e.resolve()), e
                },
                fixResult: function() {
                    var c = this.op,
                        d = this,
                        e = [],
                        f = b.Deferred();
                    return this.getAppInfo(c).done(function() {
                        e[0] = (new Date).getTime(), a.app.check(c).done(function(a) {
                            e[1] = (new Date).getTime(), d.info = a, d.info.speed = e.length > 1 ? e[1] - e[0] : 0, d.showtips(), d.bindTap(), f.resolve()
                        })
                    }), f
                },
                fixTpl: function() {
                    var a = this.op,
                        c = b.formatTpl(a.tpl, {
                            text1: b.filterXSS(a.btnText + a.text1),
                            text2: b.filterXSS(a.pageText2 || a.text2),
                            btnText: b.filterXSS(a.btnText),
                            url: "javascript:;",
                            iframe: window != top ? 'target="_parent"' : ""
                        });
                    this.$mod.append(c)
                },
                fixStyle: function() {
                    (b.os.android && window.screen.width > 480 || b.os.iphone && window.screen.width <= 320) && this.$box.addClass("tvp_fixRight"), this.op.appName && this.op.logoClass && this.$box.addClass(this.op.logoClass)
                },
                report: function(c) {
                    var d = this,
                        e = this.op,
                        f = e.reportParams ? e.reportParams.int5 : 0,
                        g = {
                            cmd: 0 == c ? 3534 : 3535,
                            vid: e.vid,
                            appId: e.appId,
                            contentId: e.contentId,
                            val: e.contentType,
                            speed: d.info.speed,
                            int5: f || 0,
                            ctype: d.info.hasApp,
                            int6: e.promotionId || 140,
                            str7: b.getUrlParam("mmuin"),
                            str8: e.t ? e.t.config.nettype : 0,
                            _: (new Date).getTime()
                        };
                    a.report(g)
                },
                showtips: function() {
                    var a = this.op,
                        b = this.info;
                    b.hasApp > 0 ? a.btnText = a.btnTexts[b.hasApp] : "", a.text1 = a.btnText + a.text1, this.$text1.text(a.text1), this.$btnText.text(a.btnText), this.$btn.attr("href", b.url), this.$btn.attr("data-url", b.openUrl), a.isAutoReport && this.report(0), 1 == b.hasApp && this.fixDownloadStatus(5)
                },
                rewriteText: function(a) {
                    var b = this.op,
                        c = a ? b.btnTexts[1] : b.btnTexts[0],
                        d = this.$text1,
                        e = this.$btnText;
                    d.html(c + b.text1), e.html(c)
                },
                fixDownloadStatus: function(a) {
                    var c = "\u4e0b\u8f7d";
                    switch (a) {
                        case 1:
                            c = "\u4e0b\u8f7d", this.$btn.attr("data-status", "down");
                            break;
                        case 2:
                            c = "\u6b63\u5728\u4e0b\u8f7d", this.$btn.attr("data-status", "downloading"), b.browser.MQQClient && this.$box.addClass("tvp_promote_banner_noauto");
                            break;
                        case 3:
                            c = "\u7ee7\u7eed\u4e0b\u8f7d", this.$btn.attr("data-status", "pause");
                            break;
                        case 4:
                            c = "\u5b89\u88c5", this.$btn.attr("data-status", "install");
                            break;
                        case 5:
                            c = "\u6253\u5f00", this.$btn.attr("data-status", "open"), this.$btn.attr("href", this.$btn.attr("data-url")), this.$progress.css("width", "100%")
                    }
                    c += "\u817e\u8baf\u89c6\u9891\u5ba2\u6237\u7aef", a > 1 && this.op.isResetWords ? this.$btnText.html(c) : 1 === a && this.$btnText.html(this.op.btnText)
                },
                bindTap: function() {
                    function c() {
                        a.app.checkCanDownloader(d.info.hasApp, e, {
                            t: e.t,
                            downloadInstance: d,
                            downloadBox: d.$box,
                            downloadBtn: d.$btn,
                            downloadProgress: d.$progress,
                            downloaderCallback: e.downloaderCallback,
                            range: e.range,
                            appName: e.appName,
                            downloadMd5: e.md5
                        }), b.each(["tvp:appdownload:downloading", "tvp:appdownload:complete", "tvp:appdownload:fail", "tvp:appdownload:pause", "tvp:appdownload:afterInstall"], function(a, c) {
                            d.$btn && b.isFunction(d.$btn.on) && d.$btn.on(c, function() {
                                e.t.$video && b.isFunction(e.t.$video.trigger) && e.t.$video.trigger(c)
                            })
                        })
                    }
                    var d = this,
                        e = this.op;
                    this.$btn.on(b.os.hasTouch ? "touchend" : "click", function() {
                        d.report(1)
                    }), 1 != d.info.hasApp && (a.app.bindTryOpenAppBanner && a.app.bindTryOpenAppBanner(d), b.os.android && !e.downloadUrl && (e.downloadUrl = a.app.getDownloadUrl(!1, e.appName)), b.os.android && a.app.getAppMd5(e.promotionId, e.appName).done(function(a) {
                        a && a.md5 && (e.md5 = a.md5, a.url ? e.downloadUrl = a.url : "", a.url && d.$btn.attr("href", a.url), c())
                    }))
                },
                checkDoQQliveConfig: function(b) {
                    var c = [a.APPID.wechatPublic];
                    return c.indexOf(b) > -1 ? !0 : !1
                },
                fixTextAndUrl: function(c) {
                    var e = this.checkDoQQliveConfig(c.appId);
                    if (e && c.appName === a.app.config.defaultName && !c.lid && c.vid) {
                        var f = "http://v.qq.com/json/tvp/appbanner/index/" + c.vid.substr(0, 1) + ".js";
                        f += "?time=" + (new Date).valueOf();
                        var g = "http://v.qq.com/json/tvp/appbanner/" + c.vid + ".js";
                        g += "?time=" + (new Date).valueOf();
                        var h = this,
                            i = b.Deferred();
                        b.ajax({
                            url: f,
                            dataType: "jsonp",
                            jsonpCallback: "appbannerCallback"
                        }).done(function(a) {
                            var d = !1;
                            b.isArray(a) && a.indexOf && a.indexOf(c.vid) > -1 && (d = !0), i.resolve(d)
                        }), i.done(function(e) {
                            e && b.ajax({
                                url: g,
                                dataType: "jsonp",
                                jsonpCallback: "appbannerDetailCallback"
                            }).done(function(e) {
                                if (e && (!c.pageText2 && e.text2 && (h.op.text2 = e.text2, h.$text2.html(e.text2)), e.text1 && e.text1.substr(0, 2) !== d.btnTexts[0] && e.text1.substr(0, 2) !== d.btnTexts[1] && (h.op.text1 = e.text1, h.$text1.html(e.text1)), e.type && (!c.pay || !c.cid))) {
                                    var f = {
                                        appName: c.appName,
                                        openType: parseInt(e.type)
                                    };
                                    switch (f.openType) {
                                        case 6:
                                            f.cid = e.jumpid, f.vid2 = e.vid2;
                                            break;
                                        case 5:
                                            f.openUrl = e.url;
                                            break;
                                        case 4:
                                            f.cid = e.jumpid, f.pay = !0;
                                            break;
                                        case 3:
                                            f.tid = e.tid;
                                            break;
                                        case 2:
                                            f.vid = e.vid2 || c.vid;
                                            break;
                                        case 1:
                                            f.vid = e.vid2 || c.vid
                                    }
                                    a.app.check(c).done(function(c) {
                                        f.version = c.version;
                                        var d = a.app.getOpenUrl(f);
                                        d && (h.$btn.attr("data-url", d), 1 == c.hasApp ? h.$btn.attr("href", d) : b.os.iphone && f.pay && f.cid && h.$btn.attr("href", d))
                                    })
                                }
                            })
                        })
                    }
                }
            }), b.extend(b, {
                createAppBanner: function(a) {
                    a.appId = a.appId || a.appid, !a.appId && a.t && a.t.config && (a.appId = a.t.config.appid || a.t.config.appId), a.promotionId = a.promotionId || 140;
                    var d = b.Deferred(),
                        e = new c(a);
                    return a.t && 1 == a.appBannerType && (a.t.AppBanner = e), e.fixResult().done(function() {
                        d.resolve(e)
                    }), d
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.Player.fn, {
                buildAppBanner: function(c) {
                    if (a.app && a.app.isSupportApp && (!this.config.plugins || !this.config.plugins.AppFollow)) {
                        var d = this,
                            e = d.$mod,
                            f = b(d.videomod),
                            g = "mod_down_" + d.playerid;
                        d.AppBanner || (e.append('<div id="' + g + '"></div>'), f.bind("tvp:resize", function() {
                            e.find("#" + g).width(b.formatSize(c.width || d.config.width))
                        }), f.trigger("tvp:resize"), c = b.extend(c, {
                            t: d,
                            appBannerType: 1,
                            modId: g,
                            vid: d.curVideo.getVid(),
                            appName: c.appName,
                            openId: c.openId,
                            extraApp: c.extraApp,
                            text2: c.text || c.downloadText,
                            appId: d.config.appid || d.config.appId,
                            contentId: d.config.contentId,
                            contentType: d.config.contentType || window.newsType || 0,
                            isResetWords: !0,
                            isAutoReport: !0
                        }), b.createAppBanner(c))
                    }
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            function c(a) {
                this.userop = a;
                var c = b.extend({}, d, a);
                return this.op = c, this.init(c), this
            }
            var d = {
                pluginName: "AppBannerOnPause",
                pauseClass: "tvp_onpause",
                bannerTpl: ['<div style="z-index:10" data-role="appbannerbox" class="tvp_app_download_onpause" style="display:none">', '   <a data-action="applink" data-role="appbannerlink" class="tvp_download_app" href="${url}" ${iframe}>', '		<i class="tvp_icon_logo"></i>', '		<span class="tvp_download_app_wording">', '			<span data-role="appbannertext1" class="tvp_download_app_title">${text1}</span>', '			<span data-role="appbannertext2" class="tvp_download_app_desc">${text2}</span>', "		</span>", '		<span class="tvp_btn_download_btn" data-role="appbannerbox">', '			<i class="tvp_btn_progress" data-role="appbannerbtnprogress" style="width:0px"></i>', '			<span data-role="appbannerbtntext" class="tvp_btn_download_btn_text">${btnText}</span>', "		</span>", "	</a>", "</div>"].join("")
            };
            b.extend(c.prototype, {
                init: function(a) {
                    var c = a.t,
                        d = this;
                    this.op = b.extend(a, {
                        $mod: c.$UILayer,
                        eventType: "pause",
                        currentTime: 0,
                        pausetime: a.pausetime ? parseInt(a.pausetime) : 5
                    }), b.when(d.getCss(), d.getAppBanner()).done(function() {
                        d.fillBanner()
                    })
                },
                fixUI: function() {
                    {
                        var a = this.op;
                        a.t, a.$mod
                    }
                },
                checkShow: function() {
                    var b = this.op,
                        c = b.t,
                        d = c.$video,
                        e = d[0],
                        f = parseInt(c.getDuration(), 10),
                        g = parseInt(Math.max(b.currentTime, e.currentTime), 10);
                    return a.debug("curTime:" + g), a.debug("duration:" + f), a.debug("op.pausetime:" + b.pausetime), g > b.pausetime && f - g > 5 ? !0 : !1
                },
                initEvent: function() {
                    function b() {
                        setTimeout(function() {
                            g.paused && c.checkShow() && c.fixShow(1)
                        }, 30)
                    } {
                        var c = this,
                            d = this.op,
                            e = d.t,
                            f = e.$video,
                            g = f[0],
                            h = d.$mod,
                            i = null;
                        h.find(a.html5skin.elements.play)
                    }
                    this.AppBanner.$btn.on("touchend", function() {
                        clearTimeout(i)
                    }), f.on("pause paused", function() {
                        e.isTouching || b()
                    }), f.on("timeupdate", function() {
                        g.currentTime && (d.currentTime = g.currentTime)
                    }), f.on("play playing", function() {
                        clearTimeout(i), c.fixShow(0)
                    })
                },
                fixShow: function(c) {
                    a.debug("call fixShow:" + c);
                    var d = this,
                        e = this.op,
                        f = e.$mod;
                    if ("function" != typeof e.t.hasDurationLimit || !e.t.hasDurationLimit()) {
                        if (c) {
                            if (f.addClass(e.pauseClass), d.AppBanner && d.AppBanner.report(0), b.os.android && this.AppBanner && this.AppBanner.$btn) {
                                var g = this.AppBanner.$btn,
                                    h = g.attr("href");
                                g.attr("href", "javascript:;"), setTimeout(function() {
                                    g.attr("href", h)
                                }, 500)
                            }
                        } else f.removeClass(e.pauseClass);
                        b.browser.MQQ && b.browser.version >= 5.4 && (c ? e.t.hidePlayer() : e.t.showPlayer())
                    }
                },
                getCss: function() {
                    var a = b.Deferred();
                    return b.loadPluginCss(d.pluginName).done(function() {
                        a.resolve()
                    }), a
                },
                getAppBanner: function() {
                    var a = this.op.t,
                        c = a.config.libpath + a.config.pluginUrl.AppBanner,
                        d = b.Deferred();
                    return b.createAppBanner ? d.resolve() : b.getScript(c, function() {
                        d.resolve()
                    }), d
                },
                fillBanner: function() {
                    var a = this,
                        c = this.op,
                        d = b.extend({}, a.userop, {
                            style: "none",
                            isAutoReport: !1,
                            reportParams: {
                                int5: 2
                            },
                            t: c.t,
                            vid: c.vid,
                            tpl: c.bannerTpl,
                            btnText: "\u4e0b\u8f7d",
                            mod: c.$mod
                        });
                    b.createAppBanner(d).done(function(b) {
                        a.AppBanner = b, a.fixUI(), a.initEvent()
                    })
                }
            }), b.extend(b, {
                createAppBannerOnPause: function(a) {
                    var d = b.Deferred(),
                        e = new c(a);
                    return d.resolve(e), d
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.Player.fn, {
                buildAppBannerOnPause: function(c) {
                    if (!(this.flashobj || a.app && !a.app.isSupportApp || !this.$videomod || b.os.android && b.browser.MQQ && !b.browser.WeChat || !this.config.isHtml5UseUI)) {
                        var d = this,
                            e = b.extend({}, c || {}, {
                                t: d,
                                vid: d.curVideo.getVid(),
                                lid: d.curVideo.getChannelId()
                            });
                        b.createAppBannerOnPause(e)
                    }
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            function c(a) {
                this.userop = a;
                var c = b.extend({}, d, a);
                return this.op = c, this.init(c), this
            }
            var d = {
                pluginName: "AppRecommend",
                text1: "\u67e5\u770b\u516c\u4f17\u53f7\u66f4\u591a\u89c6\u9891",
                picCgi: "http://like.video.qq.com/fcgi-bin/rmd_mobile",
                navCurrentClass: "current",
                tpl: ['<div  data-role="relatebox" class="tvp_related" id="${relateid}">', '   <div data-role="relatemove" class="tvp_related_inner">', "		<% for(var i=0;i<list.length;i++) {%>", "			<% if(i==0) {%>", '			<ul class="${listclass}">', "			<% }%>", "			<% if(i>0 && i%3==0) {%>", "			</ul>", '			<ul class="${listclass}">', "			<% }%>", '			<li class="tvp_item">', '				<a data-action="applink" ${iframe} data-role="relatelink" data-url="#" href="#" data-vid="<%=list[i].id%>" class="tvp_related_link"><img class="tvp_figure" src="<%=list[i].picurl%>" /><strong class="tvp_title"><%=list[i].title%></strong></a>', "			</li>", "			<% if(i==list.length-1) {%>", "			</ul>", "			<% }%>", "		<% }%>", "   </div>", "	<% if(list.length>3) {%>", '	<div class="tvp_related_nav">', "	<% for(var i=0;i<list.length;i++) {%>", "		<% if(i%3==0) {%>", '			<i data-role="relatetrigger" class="dot"></i>', "		<% }%>", "	<% }%>", "   </div>", "	<% }%>", "</div>", "{downloadLayer}", '<div data-role="replay" class="tvp_replay"><i class="tvp_icon_replay"></i>\u91cd\u65b0\u64ad\u653e</div>'].join(""),
                bannerTpl: ['<div data-role="appbannerbox" class="tvp_app_download" style="display:none">', '   <a data-action="applink" data-role="appbannerlink" class="tvp_download_app" href="${url}" ${iframe}>', '		<i class="tvp_icon_logo"></i>', '		<span class="tvp_download_app_wording"><span class="tvp_download_app_title" data-role="appbannertext1">${text1}</span><span data-role="appbannertext2" class="tvp_download_app_desc">${text2}</span></span>', '		<span data-role="appbannerbtntext" class="tvp_app_btn_em">${btnText}</span>', "	</a>", "</div>"].join(""),
                downLoadLayer: '<div class="tvp_download_layer" data-role="download-layer" style="display:none;">								<div class="tvp_promote_text" data-role="promote-text">\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u89c2\u770b\u54df</div>								<div class="tvp_promote_download" data-status="downloading">									<div class="tvp_promote_progress" data-role="appbannerbtnprogress"></div>								</div>								<div class="tvp_dowanload_finish tvp_none" data-role="finish">									<span class="tvp_icon_finish"></span>									<span class="tvp_btn">\u4e0b\u8f7d\u5df2\u5b8c\u6210\uff0c\u70b9\u51fb\u5b89\u88c5</span>								</div>							</div>',
                installedTips: '<div class="tvp_install_success">										<div class="tvp_tips">\u5b89\u88c5\u5df2\u5b8c\u6210\uff0c<br>\u70b9\u51fb\u53ef\u76f4\u63a5\u64ad\u653e</div>										<span class="tvp_arrow"></span>									</div>'
            };
            b.extend(c.prototype, {
                init: function(a) {
                    var c = a.t,
                        e = this;
                    this.op = b.extend(a, {
                        $mod: c.$UILayer || c.$videomod,
                        currentIndex: 0,
                        relateid: "tvp_related_" + c.playerid,
                        eventType: b.os.hasTouch ? "touchend" : "click",
                        currentTime: 0,
                        replayClicked: !1,
                        tjReportParams: "",
                        tjReportFlag: [],
                        isWechatIframe: 2 == a.type ? !0 : !1,
                        vidArray: []
                    }), this.fixParams(a), this.initFirstEvent(a).done(function() {
                        e.getList(a).done(function(c) {
                            c && b.loadPluginCss(d.pluginName).done(function() {
                                e.initRoles(c), e.fixVideoUrl(a), e.fixVideoUrlEvent(a), e.initEvent(a)
                            })
                        })
                    })
                },
                initRoles: function(a) {
                    this.fixUI();
                    var c = this.op,
                        e = c.$mod,
                        f = d.tpl,
                        g = "tvp_related_list tvp_related_list_v2";
                    f = f.replace("{downloadLayer}", d.downLoadLayer), f = b.formatTpl(f, {
                        relateid: c.relateid,
                        listclass: g,
                        iframe: window != top ? 'target="_parent"' : ""
                    });
                    var h = b.tmpl(f),
                        i = h({
                            list: a
                        });
                    if (e.append(i), this.$relateBox = e.find("[data-role=relatebox]"), this.$replay = e.find("[data-role=replay]"), this.$links = e.find("[data-role=relatelink]"), this.$triggers = e.find("[data-role=relatetrigger]"), this.$mover = e.find("[data-role=relatemove]"), this.$lists = e.find(".tvp_related_list"), this.$lists.width(e.width()), this.fixTrigger(), !c.t.$mod || !b.isFunction(c.t.$mod.children) || 2 != c.t.$mod.children().size()) {
                        var j = e.find("div.tvp_download_layer"),
                            k = j.find(".tvp_dowanload_finish");
                        c.t.$video.on("tvp:appdownload:downloading", function() {
                            k.addClass("tvp_none"), j.find(".tvp_promote_download").attr("data-status", "downloading"), j.show()
                        }).on("tvp:appdownload:complete", function() {
                            k.removeClass("tvp_none"), b.downloadClick_wechat ? b.downloadClick_wechat.bindDownloader(k.find(".tvp_btn")) : b.downloadClick_mqq && b.downloadClick_mqq.bindDownloader(k.find(".tvp_btn")), c.t.$video.one("tvp:appdownload:afterInstall", function() {
                                var a = j.parent();
                                j.hide(), a.append(d.installedTips), a.find(".tvp_install_success").one("click", function() {
                                    a.find(".tvp_install_success").remove()
                                }), setTimeout(function() {
                                    a.find(".tvp_install_success").remove()
                                }, 3e3)
                            }), j.show()
                        }).on("tvp:appdownload:fail", function() {
                            j.hide()
                        }).on("tvp:appdownload:pause", function() {
                            j.find(".tvp_promote_download").attr("data-status", "pause")
                        })
                    }
                },
                fixUI: function() {
                    var a = this.op,
                        c = a.t,
                        d = a.$mod;
                    if (!c.$UILayer) {
                        d.addClass("tvp_container");
                        var e = d.find(".tvp_shadow");
                        e.length || (e = b('<div class="tvp_shadow"></div>').appendTo(d), e.hide()), this.$shadow = e
                    }
                },
                fixShow: function(a) {
                    var b = this,
                        c = this.op,
                        d = c.t,
                        e = c.$mod,
                        f = this.$shadow,
                        g = this.$relateBox,
                        h = this.$replay,
                        i = c.t.$video[0];
                    if ("function" != typeof c.t.hasDurationLimit || !c.t.hasDurationLimit())
                        if (a) {
                            if (d.hidePlayer(i), d.$UILayer ? d.hideControl() : (e.addClass("tvp_finished"), f.show()), g.show(), h.show(), c.vidArray.length > 0 && !b.hasReport) {
                                if (b.hasReport = !0, b.tjreport(c.vid, 0, c.vidArray.slice(0, 3)), !c.isWechatIframe) return;
                                b.AppBanner && b.AppBanner.report(0)
                            }
                        } else b.hasReport = !1, c.replayClicked || (g.hide(), h.hide(), d.showPlayer(i), d.$UILayer || (e.removeClass("tvp_finished"), f.hide()))
                },
                getList: function(a) {
                    var c = b.Deferred(),
                        e = d.picCgi,
                        f = {
                            otype: "json",
                            size: a.size || 9
                        };
                    return a.isWechatIframe ? (e = "http://like.video.qq.com/fcgi-bin/rmd_weixin", f = b.extend(f, {
                        size: 9,
                        playvid: a.vid,
                        account: a.biz
                    })) : f = b.extend(f, {
                        tablist: 9,
                        playright: 7,
                        id: a.vid
                    }), !b.os.android || b.browser.WeChat || b.browser.MQQClient || (f.size = 3), b.ajax({
                        url: e,
                        data: f,
                        dataType: "jsonp",
                        jsonCache: 600
                    }).done(function(d) {
                        a.tjReportParams = d;
                        var e = !1;
                        d && d.videos && d.videos.length && (e = d.videos), d && d.tablist && d.tablist.length && b.each(d.tablist, function(b, c) {
                            return 9 == c.tabid ? (a.tjReportParams = c, e = c.cover_info, void(e = e.length ? e : !1)) : void 0
                        }), e ? (b.each(e, function(b, c) {
                            a.vidArray.push(c.id)
                        }), c.resolve(e)) : c.resolve()
                    }).fail(function() {
                        c.resolve()
                    }), c
                },
                getAppBanner: function() {
                    var a = this.op.t,
                        c = b.Deferred();
                    if (b.createAppBanner) c.resolve();
                    else {
                        var d = a.config.libpath + a.config.pluginUrl.AppBanner;
                        b.getScript(d, function() {
                            c.resolve()
                        })
                    }
                    return c
                },
                fixUrl: function(a, b) {
                    return b && (a = a.replace("${vid}", b)), a + "&from=" + this.op.appmsgid + "&extend=" + this.op.biz
                },
                fixVideoUrl: function() {
                    var c = this,
                        d = this.op,
                        e = this.$links,
                        f = b.extend({}, d);
                    f.vid = "", a.app.check(f).done(function(a) {
                        a && a.url && e.each(function(d, e) {
                            var f = b(e).data("vid");
                            e.href = c.fixUrl(a.url, f), b(e).attr("data-url", c.fixUrl(a.openUrl, f))
                        })
                    })
                },
                fixControl: function(a) {
                    var b = this.op,
                        c = b.t,
                        d = 5,
                        e = c.control.$control,
                        f = c.instance.isFullScreen && c.config.isHtml5UseFakeFullScreen,
                        g = this.$relateBox;
                    if (1 == a && f) {
                        var h = g.css("z-index");
                        e.css("z-index", h + 1), c.showControl()
                    }
                    1 !== a && e.css("z-index", d), 2 == a && g.is("not:hidden") && c.hideControl()
                },
                fixVideoUrlEvent: function(c) {
                    var d = this,
                        e = this.$links;
                    c.downloader && (this.$relateBox.attr("data-downloadurl", c.downloadUrl), b.downloadClick_wechat && b.downloadClick_wechat.hasDownloader && (b.downloadClick_wechat.bindDownloader(this.$relateBox, "click"), a.app.getAppMd5(c.promotionId || 236).done(function(a) {
                        a && a.md5 && d.$relateBox.attr("data-downloadmd5", a.md5)
                    })), b.downloadClick_mqq && b.downloadClick_mqq.hasDownloader && b.downloadClick_mqq.bindDownloader(this.$relateBox, "click")), e.on(c.eventType, function(a) {
                        var e = b(a.currentTarget).data("vid");
                        d.tjreport(c.vid, 1, e)
                    })
                },
                tjreport: function(c, d, e) {
                    function f() {
                        var a = 0;
                        return b.browser.WeChat && (a = 2), b.browser.MQQClient && (a = 4), a
                    }
                    var g = this.op,
                        h = 0,
                        i = 0,
                        j = 0,
                        k = f(),
                        l = 0,
                        m = 0;
                    g.isWechatIframe ? (h = g.tjReportParams && g.tjReportParams.int1 ? g.tjReportParams.int1 : 64e4, l = 10, m = 11) : (h = g.tjReportParams && g.tjReportParams.algfilever ? g.tjReportParams.algfilever : h, i = g.tjReportParams && g.tjReportParams.algver ? g.tjReportParams.algver : i, j = g.tjReportParams && g.tjReportParams.algsubver ? g.tjReportParams.algsubver : j, l = 13, m = 23), a.report({
                        vid: c,
                        itype: k,
                        ctype: l,
                        cmd: 0 == d ? 1801 : 1802,
                        int1: h,
                        int2: i,
                        int3: j,
                        val: 1,
                        str1: g.biz,
                        val2: m,
                        host: b.getHost(),
                        str2: 0 == d ? e.join("+") : e,
                        _: (new Date).getTime()
                    })
                },
                swipeReport: function(c, d) {
                    var e = this.op,
                        f = e.tjReportFlag,
                        g = !1,
                        h = 0;
                    a.report({
                        cmd: 3556,
                        val: c,
                        val2: d
                    }), 0 != d && (h = e.vidArray.slice(3 * d, 3 * (d + 1)), b.each(f, function(a, b) {
                        b == d && (g = !0)
                    }), g || (this.tjreport(e.vid, 0, h), e.tjReportFlag.push(d)))
                },
                fixParams: function() {
                    function a(a) {
                        var d = b.getUrlParam(a, c);
                        return d && (d = decodeURIComponent(d), d = b.filterXSS(d)), d
                    }
                    var c = window != top ? document.referrer : document.location.href,
                        d = this.op;
                    d.biz = a("__biz"), d.appmsgid = a("appmsgid")
                },
                move: function(a) {
                    var b = this.op,
                        c = 0,
                        d = b.currentIndex,
                        e = 0,
                        f = b.$mod.width(),
                        g = Math.ceil(b.vidArray.length / 3) - 1;
                    "left" == a && (c = d + 1), "right" == a && (c = d - 1), a || (c = d), this.swipeReport(a, c), 0 > c || c > g || (e -= c * f, this.$mover.css({
                        "-webkit-transform": "translateX(" + e + "px)"
                    }), b.currentIndex = c, this.fixTrigger())
                },
                fillBanner: function(a) {
                    var c = this,
                        e = b.extend({}, c.userop, {
                            style: "none",
                            isAutoReport: !1,
                            reportParams: {
                                int5: 1
                            },
                            t: a.t,
                            vid: a.vid,
                            tpl: d.bannerTpl,
                            modId: a.relateid
                        });
                    this.getAppBanner().done(function() {
                        b.createAppBanner(e).done(function(a) {
                            c.AppBanner = a;
                            var b = a.$btn,
                                d = b.attr("href");
                            b.attr("href", c.fixUrl(d))
                        })
                    })
                },
                fixTrigger: function() {
                    if (this.$triggers.length) {
                        var a = this.op.currentIndex,
                            b = this.op;
                        this.$triggers.removeClass(b.navCurrentClass).eq(a).addClass(b.navCurrentClass)
                    }
                },
                initFirstEvent: function(a) {
                    var c = a.t,
                        d = c.$video,
                        e = d[0],
                        f = !1,
                        g = b.Deferred();
                    return d.on("timeupdate", function() {
                        e.currentTime && (a.currentTime = e.currentTime), !f && parseInt(c.getDuration()) - parseInt(a.currentTime) < 7 && (f = !0, g.resolve())
                    }), g
                },
                initEvent: function(c) {
                    var d = c.t,
                        e = this,
                        f = d.$video,
                        g = f[0],
                        h = this.$replay;
                    if (h.on(c.eventType, function() {
                        c.replayClicked = !0, setTimeout(function() {
                            c.replayClicked = !1, g.play(), parseInt(d.getDuration()) - parseInt(c.currentTime) < 6 && g.load(), g.play()
                        }, 500)
                    }), f.on("pause paused", function() {
                        if (!d.isTouching) {
                            var a = parseInt(d.getDuration()),
                                f = parseInt(b.os.iphone ? c.currentTime : g.currentTime);
                            return a - f > 5 ? void e.fixShow(0) : void e.fixShow(1)
                        }
                    }), f.on("ended", function() {
                        e.fixShow(1)
                    }), f.on("play playing", function() {
                        e.fixShow(0)
                    }), this.$relateBox.on("swipeLeft", function(a) {
                        a.preventDefault(), e.move("left")
                    }), this.$relateBox.on("swipeRight", function(a) {
                        a.preventDefault(), e.move("right")
                    }), d.control) {
                        var i = d.control.$control,
                            j = i.find(a.html5skin.elements.fullscreen);
                        j.on(c.eventType, function() {
                            e.$lists.width(c.$mod.width()), e.move()
                        })
                    }
                }
            }), b.extend(b, {
                createAppRecommend: function(a) {
                    var d = b.Deferred(),
                        e = new c(a);
                    return a.t && (a.t.AppRecommend = e), d.resolve(e), d
                }
            })
        }(tvp, tvp.$),
        function(a, b) {
            b.extend(a.Player.fn, {
                buildAppRecommend: function(c) {
                    var d = this;
                    this.flashobj || this.$videomod && (!a.app || a.app.isSupportApp) && setTimeout(function() {
                        d.instance && d.instance.DurationLimitInstance && d.instance.DurationLimitInstance.enable || (c = c || {}, c.t = d, c.vid = d.curVideo.getVid(), b.createAppRecommend(c))
                    }, 5e3)
                }
            })
        }(tvp, tvp.$), tvp.filename = "tvp.player_v2_mobile.js", "function" == typeof define && define("tvp", [], function() {
        return tvp
    }), global.tvp = tvp, "undefined" != typeof QQLive && (global.QQLive = QQLive)
}(this); /*  |xGv00|a22f890026f26fd2db64984292e77013 */
