webpackJsonp([1],{dSxN:function(e,t,n){"use strict";function s(e){return console.log("query",e),Object(l.a)("newsService.listNews",o()(e),!0)}Object.defineProperty(t,"__esModule",{value:!0});var a=n("Tv2M"),r=n.n(a),c=n("9qwy"),u=n.n(c),i=n("JIQ1"),o=n.n(i),l=n("vLgD");t.default={namespace:"news",state:{datas:[],totalElements:0},reducers:{list:function(e,t){var n=t.payload;return u()({},e,{datas:n.datas,totalElements:n.size})}},effects:{newsList:r.a.mark(function e(t,n){var a,c,u,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload,c=n.call,u=n.put,e.next=4,c(s,a);case 4:return i=e.sent,e.next=7,u({type:"list",payload:i});case 7:case"end":return e.stop()}},e,this)})},subscriptions:{setup:function(e){var t=e.history,n=e.dispatch;return t.listen(function(e){"/test/news"===e.pathname&&n({type:"newsList",payload:e.query})})}}}}});