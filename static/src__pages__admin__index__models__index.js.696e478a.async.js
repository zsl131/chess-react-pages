webpackJsonp([70],{iKpB:function(e,n,t){"use strict";function a(e){return Object(c.a)("adminIndexService.noConfig",e,!0)}Object.defineProperty(n,"__esModule",{value:!0});var o=t("Tv2M"),r=t.n(o),s=t("9qwy"),i=t.n(s),c=t("vLgD");n.default={namespace:"adminIndex",state:{noConfigTemplateMessage:[],noConfigScore:[]},reducers:{modifyState:function(e,n){var t=n.payload;return i()({},e,t)}},effects:{findNoConfigTemplateMessage:r.a.mark(function e(n,t){var o,s,i,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.payload,s=t.call,i=t.put,e.next=4,s(a,o);case 4:if(c=e.sent,console.log(c),!c){e.next=9;break}return e.next=9,i({type:"modifyState",payload:{noConfigTemplateMessage:c.templateMessage,noConfigScore:c.score}});case 9:case"end":return e.stop()}},e,this)})},subscriptions:{setup:function(e){var n=e.dispatch;return e.history.listen(function(e){"/admin/index"===e.pathname&&n({type:"findNoConfigTemplateMessage",payload:e.query})})}}}}});