webpackJsonp([62],{oMZp:function(e,t,a){"use strict";function n(e){return e.sort="orderNo_a",Object(l.a)("schoolDicService.list",e,!0)}function r(e){return Object(l.a)("schoolDicService.addOrUpdate",e,!0)}function c(e){return Object(l.a)("schoolDicService.loadOne",e,!0)}function s(e){return Object(l.a)("schoolDicService.delete",e,!0)}Object.defineProperty(t,"__esModule",{value:!0});var o=(a("4Tli"),a("ViPt")),i=a("Tv2M"),u=a.n(i),d=a("9qwy"),p=a.n(d),l=a("vLgD");t.default={namespace:"schoolDic",state:{datas:[],totalElements:0,item:[],addVisible:!1,updateVisible:!1},reducers:{modifyState:function(e,t){var a=t.payload;return p()({},e,a)},updatePage:function(e,t){var a=t.payload;return p()({},e,{item:a.obj,updateVisible:!0})}},effects:{list:u.a.mark(function e(t,a){var r,c,s,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,c=a.call,s=a.put,e.next=4,c(n,r);case 4:return o=e.sent,e.next=7,s({type:"modifyState",payload:{datas:o.datas,totalElements:o.size}});case 7:case"end":return e.stop()}},e,this)}),addOrUpdate:u.a.mark(function e(t,a){var n,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,c=a.call,e.next=4,c(r,n);case 4:case"end":return e.stop()}},e,this)}),deleteObj:u.a.mark(function e(t,a){var n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,e.next=4,r(s,{id:n});case 4:c=e.sent,c&&o.a.success(c.message);case 6:case"end":return e.stop()}},e,this)}),onUpdate:u.a.mark(function e(t,a){var n,r,s,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,s=a.put,e.next=4,r(c,{id:n});case 4:return o=e.sent,e.next=7,s({type:"updatePage",payload:o});case 7:case"end":return e.stop()}},e,this)})},subscriptions:{setup:function(e){var t=e.history,a=e.dispatch;return t.listen(function(e){"/admin/schoolDic"===e.pathname&&a({type:"list",payload:e.query})})}}}}});