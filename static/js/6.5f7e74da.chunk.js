(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1339:function(e,n,t){e.exports={sceneContainer:"SceneSquardIntro_sceneContainer__3iSLX",sceneContainer2:"SceneSquardIntro_sceneContainer2__8XrmP",wrapper:"SceneSquardIntro_wrapper__3S3dl",scene:"SceneSquardIntro_scene__3IWiv","scenejs-editor-timeline":"SceneSquardIntro_scenejs-editor-timeline__1R804"}},1372:function(e,n,t){"use strict";t.r(n);var a=t(1340),c=t(11),r=t(8),l=t(0),i=t.n(l),o=t(84),s=t(1341),u=t(1339),m=t.n(u),f=t(23),p=t.n(f),k=function(e){var n=e.item,t=e.name,a=e.value,c=e.onChange,o=void 0===c?function(){}:c,s=n.name,u=Object(l.useCallback)(function(e,n,t,a){return function(c){var l;e(c,(l={},Object(r.a)(l,n,t),Object(r.a)(l,"item",a),l))}}(o,t,a,n),[n,t,a]);return i.a.createElement("div",{onClick:u,"data-typing":s,style:s.length>7?{left:"0",fontSize:"".concat(1.1*(1+2/s.length),"rem")}:{right:"0",fontSize:"".concat(1.1*(1+2/s.length),"rem")}},s)},d=t(63),b=[{name:"javascript",linkUrl:""},{name:"react",linkUrl:""},{name:"react-hook",linkUrl:""},{name:"react-context",linkUrl:""},{name:"redux",linkUrl:""},{name:"react-testing-library",linkUrl:""},{name:"jest",linkUrl:""},{name:"scss",linkUrl:""},{name:"socketIO",linkUrl:""},{name:"css-module",linkUrl:""},{name:"semantic-ui",linkUrl:""},{name:"nodejs",linkUrl:""},{name:"express",linkUrl:""},{name:"mongoose",linkUrl:""},{name:"geomap",linkUrl:""},{name:"mapbox",linkUrl:"https://lasfu.com"},{name:"html5",linkUrl:""},{name:"webrtc",linkUrl:""},{name:"websocket",linkUrl:""},{name:"scenejs",linkUrl:""},{name:"rollup",linkUrl:""},{name:"webpack",linkUrl:""},{name:"google-colud-fuction",linkUrl:""},{name:"puppteer-cheerio",linkUrl:""}],g=function(e){return p.a.chain(2*e+1).times(function(n){return n-e}).sample().value()};n.default=function(e){var n=e.skills,t=void 0===n?b:n,u=Object(l.useRef)(null),f=Object(l.useRef)(null),p=Object(d.a)(f,"scenes"),h=Object(l.useState)(null),j=Object(c.a)(h,2),U=j[0],v=j[1],O=Object(l.useCallback)(function(e){var n=e.current,t=0,c=0;Object(a.a)(n.childNodes).forEach(function(e){e.innerText.length>7?(e.style.top=t+"px",t+=e.offsetHeight):(e.style.top=c+"px",c+=e.offsetHeight)})},[]),S=Object(l.useCallback)(function(e){var n,t=0,c=0,r=0,l=0;Object(a.a)(u.current.childNodes).forEach(function(n,a){n.innerText.length>7?(e(r,l,100,200-t,g(2),1.2),l=r=l+1,t+=n.offsetHeight):(e(r,l,-50,200-c,g(2),1),l=r=l+1,c+=n.offsetHeight)}),n=Math.max(c,t),f.current.style.height=n+28+"px",e(r,l,0,0,0,1)},[]);return Object(l.useEffect)(function(){var e=new o.c({".scene":{}},{selector:!0}),n=e.getItem(".scene");O(u),S(function(e){return function(n,t,a,c,l,i){e.set(Object(r.a)({},"".concat(n,", ").concat(t),Object(s.a)({left:"".concat(a,"px"),top:"".concat(c,"px")}).set({transform:{rotate:"".concat(l,"deg"),scale:i}})))}}(n)),e.set(t.reduce(function(e,n,t){var a=n.name;return e["[data-typing=".concat(a,"]")]=Object(r.a)({},t,Object(s.b)({text:a,duration:1})),e},{})),e.setPlaySpeed(2),e.setEasing("ease-in-out"),e.setIterationCount("1"),e.play(),v(e)},[]),Object(l.useEffect)(function(){U&&(console.log(p),p?(U.load(),U.play()):U.pause())},[p]),i.a.createElement("div",{ref:f,className:m.a.sceneContainer,"data-inview":p},i.a.createElement("div",{className:m.a.wrapper},i.a.createElement("div",{ref:u,className:"scene"},t.map(function(e){var n=e.name;return i.a.createElement(k,{onChange:function(e,n){console.log(n)},key:n,item:e,name:"skill",value:e})}))))}}}]);
//# sourceMappingURL=6.5f7e74da.chunk.js.map