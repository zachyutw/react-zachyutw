(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{295:function(e,t,a){e.exports={steplabel:"JobTimelineItem_steplabel__aDOBy",pearid_location_icon:"JobTimelineItem_pearid_location_icon__1m0_i",timeperiod:"JobTimelineItem_timeperiod__2-bUZ"}},331:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(90),l=a(7),i=a(16),s=a(19),u=a(120),m=a.n(u),d=a(121),p=a(20),b=a(28),v=a.n(b),f=a(277),g=a.n(f),E=a(88),h=Object(r.createContext)({}),D=function(e,t){var a=t.name,n=t.payload;switch(t.actionType){case"getItems":return p.a.setItem("eventData",Object(s.a)({},e.data,Object(i.a)({},a,n[a])),3e4),Object(s.a)({},e,{data:Object(s.a)({},e.data,Object(i.a)({},a,n[a]))});default:return e}},y={data:p.a.getItem("eventData","object"),condition:{error:{message:null}}},_=function(e){var t=Object(r.useReducer)(D,y),a=Object(l.a)(t,2),n=a[0],o=a[1];console.log(n);var i,s=Object(r.useCallback)((i=o,function(){var e=Object(d.a)(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,e.next=3,E.a.post("/webTextFile",{url:a}).then(function(e){var t=e.data.data.replace(/\\/g,"");return g()(t).sort(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.startDate-t.startDate})}).catch(function(e){return console.log(e),[]});case 3:n=e.sent,i({actionType:"getItems",name:"items",payload:{items:n}});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),[]),u=Object(r.useCallback)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.pathname;switch(e.actionType){case"getItems":v.a.isEmpty(p.a.getItem("eventData","object"))&&s({url:"https://calendar.google.com/calendar/ical/rpu9kvk1bku9o6a1htdgedohjs%40group.calendar.google.com/private-f1d1cc50b32c4949b5a4bcda4c8e7be5/basic.ics"})}},[]),b=Object(r.useCallback)(function(e,t){t.actionType},[]);return c.a.createElement(h.Provider,{value:{state:n,onChange:b,onLoad:u}},e.children)},j=h,I=a(333),O=a(334),Y=a(324),w=a(330),T=a(328),k=a(294),M=a.n(k),C=a(295),x=a.n(C),S=function(e){var t=e.startDate,a=e.endDate,n=e.location,r=e.summary;return c.a.createElement("div",{className:x.a.pearid_location_icon},c.a.createElement("h4",null,r),c.a.createElement("div",{className:x.a.timeperiod},c.a.createElement(I.a,{label:M()(t,"YYYYMMDD").format("YYYY-MM")}),c.a.createElement(I.a,{label:M()(a,"YYYYMMDD").format("YYYY-MM")})),c.a.createElement("a",null,n))},J=(n=function(){var e=Object(r.useContext)(j),t=e.onLoad,a=e.state.data.items,n=void 0===a?[]:a;return Object(r.useEffect)(function(){t({actionType:"getItems"})},[]),c.a.createElement("div",null,c.a.createElement(O.a,{orientation:"vertical"},n.map(function(e,t){var a=e.summary,n=e.startDate,r=e.endDate,o=e.location,l=e.description;return c.a.createElement(Y.a,{key:t,active:!0},c.a.createElement(w.a,{float:"right",className:x.a.steplabel,StepIconComponent:S,StepIconProps:{startDate:n,endDate:r,location:o,summary:a}}),c.a.createElement(T.a,null,c.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}})))})))},function(e){return c.a.createElement(_,null,c.a.createElement(n,e))}),L=function(e){var t=e.summary,a=e.startDate,n=e.endDate,r=e.location,l=e.description;Object(o.a)(e,["summary","startDate","endDate","location","description"]);return c.a.createElement(Y.a,{active:!0},c.a.createElement(w.a,{float:"right",className:x.a.steplabel,StepIconComponent:S,StepIconProps:{startDate:a,endDate:n,location:r,summary:t}}),c.a.createElement(T.a,null,c.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}})))};L.Items=J;var N=L,P=a(60);t.default=function(){return c.a.createElement(P.a,{id:"career"},c.a.createElement("h2",null,"Carrer"),c.a.createElement("p",null,"real-time data from google calendar"),c.a.createElement("div",{className:"content"},c.a.createElement(N.Items,null)))}},88:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(122),r={},c=a.n(n).a.create({baseURL:"https://us-central1-soy-haven-237204.cloudfunctions.net"});r.cloudFetch=c}}]);
//# sourceMappingURL=9.08d302b8.chunk.js.map