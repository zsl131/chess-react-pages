webpackJsonp([45],{WxuE:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=window.g_history;n.default=a},ZP4g:function(e,n,t){"use strict";function a(e){var n=c()(e);return Object(s.a)("userService.login",n,!0)}Object.defineProperty(n,"__esModule",{value:!0});var i=t("Tv2M"),r=t.n(i),u=t("JIQ1"),c=t.n(u),s=t("vLgD"),o=t("WxuE"),d=t.n(o),p=t("KHcI");n.default={namespace:"login",state:{},reducers:{cacheLogin:function(e,n){var t=n.payload;Object(p.e)(t.obj),d.a.push("/admin/index")}},effects:{login:r.a.mark(function e(n,t){var i,u,c,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.payload,u=t.put,c=t.call,e.next=4,c(a,i);case 4:s=e.sent,s&&(Object(p.e)(s.obj),d.a.push("/admin/index"));case 6:case"end":return e.stop()}},e,this)})},subscriptions:{setup:function(e){return e.history.listen(function(e){"/login"===e.pathname&&Object(p.b)()&&d.a.push("/admin/index")})}}}}});