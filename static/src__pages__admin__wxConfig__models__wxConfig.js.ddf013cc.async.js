webpackJsonp([59],{zYBs:function(e,t,n){"use strict";function a(){return Object(d.a)("wxConfigService.loadOne",p()({}),!0)}function r(e){return Object(d.a)("wxConfigService.save",p()(e),!0)}Object.defineProperty(t,"__esModule",{value:!0});var s=(n("4Tli"),n("ViPt")),c=n("Tv2M"),i=n.n(c),o=n("9qwy"),u=n.n(o),f=n("JIQ1"),p=n.n(f),d=n("vLgD");t.default={namespace:"wxConfig",state:{item:{}},reducers:{modifyState:function(e,t){var n=t.payload;return u()({},e,n)}},effects:{index:i.a.mark(function e(t,n){var r,s,c,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,s=n.call,c=n.put,e.next=4,s(a);case 4:return o=e.sent,e.next=7,c({type:"modifyState",payload:{item:o.obj}});case 7:case"end":return e.stop()}},e,this)}),save:i.a.mark(function e(t,n){var a,c,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload,c=n.call,e.next=4,c(r,a);case 4:o=e.sent,o&&s.a.success("\u4fdd\u5b58\u6570\u636e\u6210\u529f");case 6:case"end":return e.stop()}},e,this)})},subscriptions:{setup:function(e){var t=e.history,n=e.dispatch;return t.listen(function(e){"/admin/wxConfig"===e.pathname&&n({type:"index"})})}}}}});