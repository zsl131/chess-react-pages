webpackJsonp([64],{"9Chs":function(e,t,a){"use strict";function n(e){return Object(l.a)("templateMessageRelationService.list",e,!0)}function r(e){return Object(l.a)("templateMessageRelationService.add",e,!0)}function s(e){return Object(l.a)("templateMessageRelationService.delete",e,!0)}Object.defineProperty(t,"__esModule",{value:!0});var i=(a("4Tli"),a("ViPt")),c=a("Tv2M"),o=a.n(c),u=a("9qwy"),f=a.n(u),l=a("vLgD");t.default={state:{configed:[],noConfig:[],item:{},configVisible:!1},reducers:{modifyState:function(e,t){var a=t.payload;return f()({},e,a)}},effects:{findData:o.a.mark(function e(t,a){var r,s,i,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,s=a.call,i=a.put,e.next=4,s(n,r);case 4:if(!(c=e.sent)){e.next=8;break}return e.next=8,i({type:"modifyState",payload:{noConfig:c.noConfig,configed:c.configed}});case 8:case"end":return e.stop()}},e,this)}),config:o.a.mark(function e(t,a){var n,s,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,s=a.call,e.next=4,s(r,n);case 4:c=e.sent,c&&i.a.success(c.message);case 6:case"end":return e.stop()}},e,this)}),deleteObj:o.a.mark(function e(t,a){var n,r,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,e.next=4,r(s,{id:n});case 4:c=e.sent,c&&i.a.success(c.message);case 6:case"end":return e.stop()}},e,this)})},subscriptions:{setup:function(e){var t=e.dispatch;return e.history.listen(function(e){"/admin/templateMessageRelation"===e.pathname&&t({type:"findData",payload:e.query})})}}}}});