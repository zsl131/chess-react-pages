webpackJsonp([70],{iKpB:function(e,t,n){"use strict";function a(e){return Object(c.a)("templateMessageRelationService.noConfig",e,!0)}Object.defineProperty(t,"__esModule",{value:!0});var s=n("Tv2M"),o=n.n(s),i=n("9qwy"),r=n.n(i),c=n("vLgD");t.default={namespace:"adminIndex",state:{noConfigTemplateMessage:[]},reducers:{modifyState:function(e,t){var n=t.payload;return r()({},e,n)}},effects:{findNoConfigTemplateMessage:o.a.mark(function e(t,n){var s,i,r,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.payload,i=n.call,r=n.put,e.next=4,i(a,s);case 4:if(c=e.sent,console.log(c),!c){e.next=9;break}return e.next=9,r({type:"modifyState",payload:{noConfigTemplateMessage:c.list}});case 9:case"end":return e.stop()}},e,this)})},subscriptions:{setup:function(e){var t=e.dispatch;return e.history.listen(function(e){"/admin/index"===e.pathname&&t({type:"findNoConfigTemplateMessage",payload:e.query})})}}}}});