webpackJsonp([4],{AV1H:function(e,t,a){"use strict";function n(e){return null!==e&&void 0!==e||(e={}),e.page=e.page?e.page:0,e.size=e.size?e.size:15,console.log("service",d()(e)),Object(p.a)("userService.listUser",d()(e),!0)}function r(e){return e.isAdmin=e.isAdmin&&void 0!==e.isAdmin?"1":"0",e.status=e.status||void 0===e.status?"1":"0",Object(p.a)("userService.saveUser",d()(e),!0)}function s(e){return Object(p.a)("userService.deleteUser",d()(e),!0)}function u(e){return Object(p.a)("userService.loadOne",d()(e),!0)}function i(e){return Object(p.a)("userService.matchRole",d()(e),!0)}function o(e){return Object(p.a)("userService.authRole",d()(e),!0)}function c(e){return Object(p.a)("userService.updatePwd",d()(e),!0)}a.d(t,"f",function(){return n}),a.d(t,"e",function(){return r}),a.d(t,"d",function(){return s}),a.d(t,"b",function(){return u}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return o}),a.d(t,"g",function(){return c});var l=a("JIQ1"),d=a.n(l),p=a("vLgD")},SbTF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(a("4e87"),a("PIoE")),r=a("Tv2M"),s=a.n(r),u=a("9qwy"),i=a.n(u),o=a("AV1H");t.default={namespace:"users",state:{datas:[],item:{},totalElements:0,modalVisible:!1,updateModalVisible:!1,roleVisible:!1,curId:0,curNickname:"",authRoleIds:[],roleList:[],selectRoleIds:[]},reducers:{list:function(e,t){var a=t.payload;return i()({},e,{datas:a.datas,totalElements:a.size})},updateUser:function(e,t){var a=t.payload;return i()({},e,{item:a,updateModalVisible:!0})},showModal:function(e,t){var a=t.payload;return console.log("showModal",a),i()({},e,{modalVisible:!0})},hideModal:function(e){return i()({},e,{modalVisible:!1})},showUpdateModal:function(e){return i()({},e,{updateModalVisible:!0})},hideUpdateModal:function(e){return i()({},e,{updateModalVisible:!1})},setModalVisible:function(e,t){var a=t.payload;return i()({},e,a)},showRoleModal:function(e,t){var a=t.payload;return console.log(a),i()({},e,{roleVisible:!0,authRoleIds:a.authIds,roleList:a.roleList})}},effects:{userList:s.a.mark(function e(t,a){var n,r,u,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=a.put,u=a.call,e.next=4,u(o.f,n);case 4:return i=e.sent,e.next=7,r({type:"list",payload:i});case 7:case"end":return e.stop()}},e,this)}),saveUser:s.a.mark(function e(t,a){var n,r,u,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=a.put,u=a.call,e.next=4,u(o.e,n);case 4:if(i=e.sent,!i.size){e.next=8;break}return e.next=8,r({type:"hideModal"});case 8:case"end":return e.stop()}},e,this)}),delete:s.a.mark(function e(t,a){var n,r,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=a.put,u=a.call,e.next=4,u(o.d,{id:n});case 4:case"end":return e.stop()}},e,this)}),update:s.a.mark(function e(t,a){var r,u,i,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,u=a.put,i=a.call,e.next=4,i(o.b,{id:r});case 4:if(c=e.sent,!c.size){e.next=10;break}return e.next=8,u({type:"updateUser",payload:c.datas});case 8:e.next=11;break;case 10:n.a.warning("\u6ca1\u6709\u5bf9\u5e94\u6570\u636e");case 11:case"end":return e.stop()}},e,this)}),onMatchRole:s.a.mark(function e(t,a){var n,r,u,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=a.put,u=a.call,e.next=4,u(o.c,{id:n});case 4:return i=e.sent,e.next=7,r({type:"showRoleModal",payload:i.datas});case 7:case"end":return e.stop()}},e,this)}),setRoles:s.a.mark(function e(t,a){var n,r,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=a.put,u=a.call,e.next=4,u(o.a,n);case 4:case"end":return e.stop()}},e,this)})},subscriptions:{setup:function(e){var t=e.history,a=e.dispatch;return t.listen(function(e){"/admin/users"===e.pathname&&a({type:"userList",payload:e.query})})}}}}});