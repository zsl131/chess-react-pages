webpackJsonp([35],{oAOh:function(e,t,n){"use strict";function r(e){return Object(i.a)("weixinRootService.root",s()(e),!0)}Object.defineProperty(t,"__esModule",{value:!0});var o=n("Tv2M"),a=n.n(o),c=n("JIQ1"),s=n.n(c),i=n("vLgD");t.default={namespace:"wxRoot",state:{},reducers:{},effects:{root:a.a.mark(function e(t,n){var o,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.payload,c=n.call,e.next=4,c(r,o);case 4:case"end":return e.stop()}},e,this)})},subscriptions:{setup:function(e){var t=e.history,n=e.dispatch;return t.listen(function(e){"/weixin/root"===e.pathname&&n({type:"root",payload:e.query})})}}}}});