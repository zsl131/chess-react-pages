webpackJsonp([61],{VvLF:function(t,e,a){"use strict";function s(t){return Object(c.a)("studentService.list",t,!0)}Object.defineProperty(e,"__esModule",{value:!0});var n=a("Tv2M"),i=a.n(n),r=a("9qwy"),o=a.n(r),c=a("vLgD");e.default={namespace:"student",state:{datas:[],totalElements:0,item:{},ageList:[],schoolList:[]},reducers:{modifyState:function(t,e){var a=e.payload;return o()({},t,a)}},effects:{list:i.a.mark(function t(e,a){var n,r,o,c;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,o=a.put,t.next=4,r(s,n);case 4:return c=t.sent,t.next=7,o({type:"modifyState",payload:{datas:c.datas,totalElements:c.size,ageList:c.ageList,schoolList:c.schoolList}});case 7:case"end":return t.stop()}},t,this)})},subscriptions:{setup:function(t){var e=t.history,a=t.dispatch;return e.listen(function(t){"/admin/student"===t.pathname&&a({type:"list",payload:t.query})})}}}}});