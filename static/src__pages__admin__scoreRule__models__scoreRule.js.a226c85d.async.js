webpackJsonp([67],{tFCR:function(e,t,n){"use strict";function a(e){return Object(l.a)("scoreRuleService.list",p()(e),!0)}function r(e){return Object(l.a)("scoreRuleService.addOrUpdate",p()(e),!0)}function c(e){return Object(l.a)("scoreRuleService.delete",p()(e),!0)}Object.defineProperty(t,"__esModule",{value:!0});var i=(n("4Tli"),n("ViPt")),s=n("Tv2M"),o=n.n(s),u=n("9qwy"),d=n.n(u),f=n("JIQ1"),p=n.n(f),l=n("vLgD");t.default={state:{configed:[],noConfig:[],item:"",configVisible:!1},reducers:{modifyState:function(e,t){var n=t.payload;return d()({},e,n)}},effects:{findData:o.a.mark(function e(t,n){var r,c,i,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,c=n.call,i=n.put,e.next=4,c(a,r);case 4:if(!(s=e.sent)){e.next=8;break}return e.next=8,i({type:"modifyState",payload:{noConfig:s.noConfig||[],configed:s.configed||[]}});case 8:case"end":return e.stop()}},e,this)}),deleteObj:o.a.mark(function e(t,n){var a,r,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload,r=n.call,e.next=4,r(c,{id:a});case 4:s=e.sent,s&&i.a.success(s.message);case 6:case"end":return e.stop()}},e,this)}),addOrUpdate:o.a.mark(function e(t,n){var a,c,s,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload,c=n.call,s=n.put,e.next=4,c(r,a);case 4:if(!(u=e.sent)){e.next=9;break}return i.a.success("\u4fdd\u5b58\u6210\u529f"),e.next=9,s({type:"modifyState",payload:{addVisible:!1}});case 9:case"end":return e.stop()}},e,this)})},subscriptions:{setup:function(e){var t=e.history,n=e.dispatch;return t.listen(function(e){"/admin/scoreRule"===e.pathname&&n({type:"findData",payload:e.query})})}}}}});