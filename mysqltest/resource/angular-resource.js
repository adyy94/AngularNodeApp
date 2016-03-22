﻿/*
 AngularJS v1.2.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (H, a, A) {
    'use strict'; function D(p, g) { g = g || {}; a.forEach(g, function (a, c) { delete g[c] }); for (var c in p) !p.hasOwnProperty(c) || "$" === c.charAt(0) && "$" === c.charAt(1) || (g[c] = p[c]); return g } var v = a.$$minErr("$resource"), C = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/; a.module("ngResource", ["ng"]).factory("$resource", ["$http", "$q", function (p, g) {
            function c(a, c) { this.template = a; this.defaults = c || {}; this.urlParams = {} } function t(n, w, l) {
                function r(h, d) {
                    var e = {}; d = x({}, w, d); s(d, function (b, d) {
                        u(b) && (b = b()); var k; if (b &&
b.charAt && "@" == b.charAt(0)) { k = h; var a = b.substr(1); if (null == a || "" === a || "hasOwnProperty" === a || !C.test("." + a)) throw v("badmember", a); for (var a = a.split("."), f = 0, c = a.length; f < c && k !== A; f++) { var g = a[f]; k = null !== k?k[g]:A } } else k = b; e[d] = k
                    }); return e
                } function e(a) { return a.resource } function f(a) { D(a || {}, this) } var F = new c(n); l = x({}, B, l); s(l, function (h, d) {
                    var c = /^(POST|PUT|PATCH)$/i.test(h.method); f[d] = function (b, d, k, w) {
                        var q = {}, n, l, y; switch (arguments.length) {
                            case 4: y = w, l = k;case 3:case 2: if (u(d)) {
                                    if (u(b)) {
                                        l =
b; y = d; break
                                    } l = d; y = k
                                } else { q = b; n = d; l = k; break }case 1: u(b)?l = b:c?n = b:q = b; break;case 0: break;default: throw v("badargs", arguments.length);} var t = this instanceof f, m = t?n:h.isArray?[]:new f(n), z = {}, B = h.interceptor && h.interceptor.response || e, C = h.interceptor && h.interceptor.responseError || A; s(h, function (a, b) { "params" != b && ("isArray" != b && "interceptor" != b) && (z[b] = G(a)) }); c && (z.data = n); F.setUrlParams(z, x({}, r(n, h.params || {}), q), h.url); q = p(z).then(function (b) {
                            var d = b.data, k = m.$promise; if (d) {
                                if (a.isArray(d) !== !!h.isArray) throw v("badcfg",
h.isArray?"array":"object", a.isArray(d)?"array":"object"); h.isArray?(m.length = 0, s(d, function (b) { m.push(new f(b)) })):(D(d, m), m.$promise = k)
                            } m.$resolved = !0; b.resource = m; return b
                        }, function (b) { m.$resolved = !0; (y || E)(b); return g.reject(b) }); q = q.then(function (b) { var a = B(b); (l || E)(a, b.headers); return a }, C); return t?q:(m.$promise = q, m.$resolved = !1, m)
                    }; f.prototype["$" + d] = function (b, a, k) { u(b) && (k = a, a = b, b = {}); b = f[d].call(this, b, this, a, k); return b.$promise || b }
                }); f.bind = function (a) { return t(n, x({}, w, a), l) }; return f
            }
            var B = { get: { method: "GET" }, save: { method: "POST" }, query: { method: "GET", isArray: !0 }, remove: { method: "DELETE" }, "delete": { method: "DELETE" } }, E = a.noop, s = a.forEach, x = a.extend, G = a.copy, u = a.isFunction; c.prototype = {
                setUrlParams: function (c, g, l) {
                    var r = this, e = l || r.template, f, p, h = r.urlParams = {}; s(e.split(/\W/), function (a) { if ("hasOwnProperty" === a) throw v("badname"); !/^\d+$/.test(a) && (a && RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(e)) && (h[a] = !0) }); e = e.replace(/\\:/g, ":"); g = g || {}; s(r.urlParams, function (d, c) {
                        f = g.hasOwnProperty(c)?
g[c]:r.defaults[c]; a.isDefined(f) && null !== f?(p = encodeURIComponent(f).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "%20").replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+"), e = e.replace(RegExp(":" + c + "(\\W|$)", "g"), function (a, c) { return p + c })):e = e.replace(RegExp("(/?):" + c + "(\\W|$)", "g"), function (a, c, d) { return "/" == d.charAt(0)?d:c + d })
                    }); e = e.replace(/\/+$/, "") || "/"; e = e.replace(/\/\.(?=\w+($|\?))/, "."); c.url = e.replace(/\/\\\./, "/."); s(g, function (a,
e) { r.urlParams[e] || (c.params = c.params || {}, c.params[e] = a) })
                }
            }; return t
        }])
})(window, window.angular);
//# sourceMappingURL=angular-resource.min.js.map

