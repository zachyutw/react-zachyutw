(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{128:function(e,t,a){},129:function(e,t,a){e.exports={modal:"ModalSidebar_modal__22QQg"}},130:function(e,t,a){e.exports={nav:"Navmain_nav__3Uz0f",vertical:"Navmain_vertical__3Pxz3",horizontal:"Navmain_horizontal__2sPkj"}},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){e.exports={page:"HomePage_page__NhLPl",section:"HomePage_section__3nOxv",intro:"HomePage_intro__2js1D",iframeWrapper:"HomePage_iframeWrapper__3pj4q",project:"HomePage_project__18cxl",timeperiod:"HomePage_timeperiod__dPlLY",pearid_location_icon:"HomePage_pearid_location_icon__3CMIQ",steplabel:"HomePage_steplabel__1i69F",mainNavs:"HomePage_mainNavs__a44QD"}},253:function(e,t){},263:function(e,t,a){e.exports={titleSvg:"SvgEffectTitle_titleSvg__1ISTh","line-anim":"SvgEffectTitle_line-anim__2mvJF"}},43:function(e,t,a){"use strict";a.r(t);var n=a(10),c=a(0),r=a.n(c),l=a(54),o=a(16),i=(a(128),function(e){var t=e.className,a=e.children,n=e.actived,i=e.setActived,s=e.onConfirm,m=e.controller,u=e.top,C=e.bottom,d=e.style,h=e.justifyContent,f=e.backgroundColor,p=e.bgStyle,v=Object(l.a)(e,["className","children","actived","setActived","onConfirm","controller","top","bottom","style","justifyContent","backgroundColor","bgStyle"]),b=Object(c.useCallback)(function(){i(function(e){return!e})},[i]),E=Object(c.useMemo)(function(){return u?{paddingTop:"".concat(u),alignItems:"flex-start"}:C?{paddingBottom:"".concat(C),alignItems:"flex-end"}:{}},[u,C]),g=Object(c.useMemo)(function(){return h?{justifyContent:"".concat(h)}:{}},[h]),j=Object(c.useMemo)(function(){return"function"===typeof a?a(Object(o.a)({onConfirm:s,controller:m},v)):"object"===typeof a?a:""},[a,s,m,v]);return r.a.createElement("div",Object.assign({className:["modalP",n?"show":"hidden",t].join("  "),style:Object(o.a)({},g,E,d)},v),r.a.createElement("div",{className:["content"].join("  ")},j),r.a.createElement("div",{className:"bg",style:Object(o.a)({backgroundColor:f},p),onClick:b}))}),s=a(129),m=a.n(s),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"left";return e?{transition:"transform 400ms ease-in-out",transform:"translate(0, 0)"}:{transition:"transform 300ms ease-in-out",transform:"translate(".concat("left"===t?"-100vw":"100vw",", 0)")}},C=function(e){var t=e.onConfirm,a=e.children,n=e.className,c=e.setActived,o=e.backgroundColor,s=void 0===o?"rgba(0, 0, 0, 0)":o,C=e.side,d=void 0===C?"left":C,h=e.actived,f=Object(l.a)(e,["onConfirm","children","className","setActived","backgroundColor","side","actived"]);return r.a.createElement(i,Object.assign({className:["center flex color",m.a.modal,n].join(" "),style:u(h,d),justifyContent:"left"===d?"flex-start":"flex-end",top:"0",actived:h,backgroundColor:s,onConfirm:t,setActived:c},f),a)},d=a(23),h=a.n(d),f=a(5),p=a(21),v=function(e){var t=e.exsit,a=e.children,n=e.className,c=Object(l.a)(e,["exsit","children","className"]);return r.a.createElement("div",Object.assign({className:[n,t?"":"hidden"].join(" ")},c),a)},b=function(e){var t=e.src,a=Object(c.useCallback)(function(e){},[]);return r.a.createElement("img",{onLoad:a,src:t})},E=function(e){var t=e.className,a=e.onChange,n=void 0===a?function(e,t){}:a,o=e.icon,i=e.src,s=e.text,m=e.children,u=e.value,C=e.name,d=(e.index,e.actionType),h=Object(l.a)(e,["className","onChange","icon","src","text","children","value","name","index","actionType"]),f=Object(c.useCallback)(function(e){n(e,{name:C,value:u,actionType:d})},[C,u,n,d]);return r.a.createElement("div",Object.assign({onClick:f,className:["itemP",t].join(" ")},h),r.a.createElement(v,{exsit:i,className:"imgContent"},r.a.createElement(b,{src:i})),r.a.createElement(v,{exsit:o,className:"iconContent"},r.a.createElement("i",{className:["icon",o].join("  ")})),r.a.createElement("div",{className:"itemContent"},r.a.createElement(v,{exsit:s,className:"text"},window.t(s)),r.a.createElement(v,{exsit:m,className:"childContent"},m)))},g=a(130),j=a.n(g);document.body.getBoundingClientRect();var k=h.a.map(p.b,function(e){var t=e.name;return{name:t,to:e.main.path,text:h.a.capitalize(t)}});console.log(k);var H=Object.values(k),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=h.a.reverse(e.slice()),a=[];return t.map(function(e,t){t%2===0&&a.push(e)}),e.map(function(e,t){t%2===1&&a.push(e)}),a}(H),V=Object(f.f)(function(e){e.onChange;var t=e.name,a=void 0===t?"vertical":t,n=Object(c.useMemo)(function(){switch(a){case"horizontal":return O;default:return H}},[a]);return r.a.createElement("div",{className:[j.a.nav,j.a[a]].join(" ")},n.map(function(e){return r.a.createElement(E,Object.assign({key:e.name},e))}))}),M=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=Object(c.useState)(t),r=Object(n.a)(a,2),l=r[0],o=r[1],i=Object(c.useState)(e),s=Object(n.a)(i,2),m=s[0],u=s[1],C=Object(c.useState)({}),d=Object(n.a)(C,2),h=d[0],f=d[1];return Object(c.useEffect)(function(){l&&u(!0)},[l]),[m,u,l,o,h,f]},N=(a(131),r.a.memo(function(e){var t=e.onClick,a=e.name,l=(e.value,M(!1)),o=Object(n.a)(l,2),i=o[0],s=o[1],m=Object(c.useCallback)(function(e){s(function(e){return!e}),t&&t(e,{name:a,value:i})},[t,i,s,a]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"menu  iconBtn rotateChange ",onClick:m},r.a.createElement("i",{className:["ui icon",i?"enactived times":"actived bars"].join(" ")})),r.a.createElement(C,{actived:i,setActived:s},r.a.createElement(V,null)))}),a(15)),L=(a(132),a(9),function(e){var t=e.children;return r.a.createElement("div",null,t)}),_=function(e){var t=e.children,a=e.className,n=Object(l.a)(e,["children","className"]);return r.a.createElement("div",Object.assign({className:["page",a].join(" ")},n),t)},w=function(e){var t=Object(c.useState)(e),a=Object(n.a)(t,2),r=a[0],l=a[1];return[r,Object(c.useCallback)(function(){l(function(e){return!e})},[l]),l]},y=(r.a.memo(function(e){var t=e.children,a=e.toggle,c=e.parallax,i=void 0===c?{}:c,s=e.className,m=e.absolute,u=Object(l.a)(e,["children","toggle","parallax","className","absolute"]),C=w(!0),d=Object(n.a)(C,2),f=d[0],p=d[1];return r.a.createElement("section",{className:[h.a.isEmpty(i)?"":"parallax",m?"absolute":""].join(" ")},a&&r.a.createElement("div",{className:"section toggle",onClick:a?p:function(){return console.log("click")}},a),r.a.createElement("div",{className:"bg",style:Object(o.a)({},i)}),r.a.createElement("div",Object.assign({className:["content",s,f?"":"hidden"].join(" ")},u),t))}),a(133)),Z=a.n(y),x=a(134),Y=a.n(x),S=a(262),D=a(78),P=a(263),T=a.n(P),I=a(264);function A(){var e=Object(S.a)(["\n  color: red;\n  & [data-inview='false'] path {\n    animation: "," 2s ease forwards;\n  }\n"]);return A=function(){return e},e}function z(){var e=Object(S.a)(["to {\n        stroke-dashoffset: 0;\n    }"]);return z=function(){return e},e}var R=Object(I.b)(z()),U=(I.a.div(A(),R),function(e){var t=e.className,a=Object(l.a)(e,["className"]),n=Object(c.useRef)(null),o=Object(D.a)(n,!0);return Object(c.useEffect)(function(){n&&n.current.querySelectorAll("path").forEach(function(e){var t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t+10})},[]),r.a.createElement("div",Object.assign({ref:n,className:[T.a.titleSvg,t].join(" "),"data-inview":o},a),r.a.createElement("svg",{width:"549",height:"79",viewBox:"0 0 549 79",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("mask",{id:"path-1-outside-1",maskUnits:"userSpaceOnUse",x:"0.144531",y:"0",width:"549",height:"79",fill:"black"},r.a.createElement("rect",{fill:"white",x:"0.144531",width:"549",height:"79"}),r.a.createElement("path",{d:"M21.9805 42.8633L22.9648 49.6133L24.4062 43.5312L34.5312 7.8125H40.2266L50.1055 43.5312L51.5117 49.7188L52.6016 42.8281L60.5469 7.8125H67.332L54.9219 59H48.7695L38.2227 21.6992L37.4141 17.7969L36.6055 21.6992L25.6719 59H19.5195L7.14453 7.8125H13.8945L21.9805 42.8633Z"}),r.a.createElement("path",{d:"M95.6961 59.7031C90.5398 59.7031 86.3445 58.0156 83.1102 54.6406C79.8758 51.2422 78.2586 46.707 78.2586 41.0352V39.8398C78.2586 36.0664 78.9734 32.7031 80.4031 29.75C81.8562 26.7734 83.8719 24.4531 86.45 22.7891C89.0516 21.1016 91.8641 20.2578 94.8875 20.2578C99.8328 20.2578 103.677 21.8867 106.419 25.1445C109.161 28.4023 110.532 33.0664 110.532 39.1367V41.8438H84.7625C84.8562 45.5938 85.9461 48.6289 88.032 50.9492C90.1414 53.2461 92.8133 54.3945 96.0477 54.3945C98.3445 54.3945 100.29 53.9258 101.884 52.9883C103.477 52.0508 104.872 50.8086 106.067 49.2617L110.04 52.3555C106.852 57.2539 102.071 59.7031 95.6961 59.7031ZM94.8875 25.6016C92.2625 25.6016 90.0594 26.5625 88.2781 28.4844C86.4969 30.3828 85.3953 33.0547 84.9734 36.5H104.028V36.0078C103.841 32.7031 102.95 30.1484 101.356 28.3438C99.7625 26.5156 97.6062 25.6016 94.8875 25.6016Z"}),r.a.createElement("path",{d:"M157.494 40.4023C157.494 46.2148 156.158 50.8906 153.486 54.4297C150.814 57.9453 147.228 59.7031 142.728 59.7031C137.923 59.7031 134.209 58.0039 131.584 54.6055L131.267 59H125.291V5H131.795V25.1445C134.42 21.8867 138.041 20.2578 142.658 20.2578C147.275 20.2578 150.896 22.0039 153.521 25.4961C156.17 28.9883 157.494 33.7695 157.494 39.8398V40.4023ZM150.99 39.6641C150.99 35.2344 150.134 31.8125 148.423 29.3984C146.712 26.9844 144.252 25.7773 141.041 25.7773C136.752 25.7773 133.67 27.7695 131.795 31.7539V48.207C133.787 52.1914 136.892 54.1836 141.111 54.1836C144.228 54.1836 146.654 52.9766 148.388 50.5625C150.123 48.1484 150.99 44.5156 150.99 39.6641Z"}),r.a.createElement("path",{d:"M173.94 59V7.8125H188.389C192.842 7.8125 196.78 8.79688 200.202 10.7656C203.623 12.7344 206.26 15.5352 208.112 19.168C209.987 22.8008 210.936 26.9727 210.959 31.6836V34.9531C210.959 39.7812 210.022 44.0117 208.147 47.6445C206.295 51.2773 203.635 54.0664 200.166 56.0117C196.721 57.957 192.702 58.9531 188.108 59H173.94ZM180.69 13.3672V53.4805H187.791C192.995 53.4805 197.038 51.8633 199.92 48.6289C202.827 45.3945 204.28 40.7891 204.28 34.8125V31.8242C204.28 26.0117 202.909 21.5 200.166 18.2891C197.448 15.0547 193.58 13.4141 188.565 13.3672H180.69Z"}),r.a.createElement("path",{d:"M243.155 59.7031C237.999 59.7031 233.804 58.0156 230.57 54.6406C227.335 51.2422 225.718 46.707 225.718 41.0352V39.8398C225.718 36.0664 226.433 32.7031 227.863 29.75C229.316 26.7734 231.331 24.4531 233.909 22.7891C236.511 21.1016 239.323 20.2578 242.347 20.2578C247.292 20.2578 251.136 21.8867 253.878 25.1445C256.62 28.4023 257.991 33.0664 257.991 39.1367V41.8438H232.222C232.316 45.5938 233.405 48.6289 235.491 50.9492C237.601 53.2461 240.273 54.3945 243.507 54.3945C245.804 54.3945 247.749 53.9258 249.343 52.9883C250.937 52.0508 252.331 50.8086 253.527 49.2617L257.499 52.3555C254.312 57.2539 249.53 59.7031 243.155 59.7031ZM242.347 25.6016C239.722 25.6016 237.519 26.5625 235.738 28.4844C233.956 30.3828 232.855 33.0547 232.433 36.5H251.487V36.0078C251.3 32.7031 250.409 30.1484 248.816 28.3438C247.222 26.5156 245.066 25.6016 242.347 25.6016Z"}),r.a.createElement("path",{d:"M284.809 50.1758L294.23 20.9609H300.875L287.234 59H282.277L268.496 20.9609H275.141L284.809 50.1758Z"}),r.a.createElement("path",{d:"M329.626 59.7031C324.47 59.7031 320.274 58.0156 317.04 54.6406C313.805 51.2422 312.188 46.707 312.188 41.0352V39.8398C312.188 36.0664 312.903 32.7031 314.333 29.75C315.786 26.7734 317.802 24.4531 320.38 22.7891C322.981 21.1016 325.794 20.2578 328.817 20.2578C333.763 20.2578 337.606 21.8867 340.348 25.1445C343.091 28.4023 344.462 33.0664 344.462 39.1367V41.8438H318.692C318.786 45.5938 319.876 48.6289 321.962 50.9492C324.071 53.2461 326.743 54.3945 329.977 54.3945C332.274 54.3945 334.22 53.9258 335.813 52.9883C337.407 52.0508 338.802 50.8086 339.997 49.2617L343.97 52.3555C340.782 57.2539 336.001 59.7031 329.626 59.7031ZM328.817 25.6016C326.192 25.6016 323.989 26.5625 322.208 28.4844C320.427 30.3828 319.325 33.0547 318.903 36.5H337.958V36.0078C337.77 32.7031 336.88 30.1484 335.286 28.3438C333.692 26.5156 331.536 25.6016 328.817 25.6016Z"}),r.a.createElement("path",{d:"M366.287 59H359.783V5H366.287V59Z"}),r.a.createElement("path",{d:"M382.205 39.6289C382.205 35.9023 382.932 32.5508 384.385 29.5742C385.862 26.5977 387.901 24.3008 390.502 22.6836C393.127 21.0664 396.116 20.2578 399.467 20.2578C404.647 20.2578 408.83 22.0508 412.018 25.6367C415.229 29.2227 416.834 33.9922 416.834 39.9453V40.4023C416.834 44.1055 416.12 47.4336 414.69 50.3867C413.284 53.3164 411.256 55.6016 408.608 57.2422C405.983 58.8828 402.959 59.7031 399.538 59.7031C394.381 59.7031 390.198 57.9102 386.987 54.3242C383.799 50.7383 382.205 45.9922 382.205 40.0859V39.6289ZM388.745 40.4023C388.745 44.6211 389.717 48.0078 391.663 50.5625C393.631 53.1172 396.256 54.3945 399.538 54.3945C402.842 54.3945 405.467 53.1055 407.413 50.5273C409.358 47.9258 410.33 44.293 410.33 39.6289C410.33 35.457 409.334 32.082 407.342 29.5039C405.373 26.9023 402.748 25.6016 399.467 25.6016C396.256 25.6016 393.666 26.8789 391.698 29.4336C389.729 31.9883 388.745 35.6445 388.745 40.4023Z"}),r.a.createElement("path",{d:"M464.323 40.4023C464.323 46.1914 462.999 50.8555 460.351 54.3945C457.702 57.9336 454.116 59.7031 449.593 59.7031C444.976 59.7031 441.343 58.2383 438.695 55.3086V73.625H432.191V20.9609H438.132L438.448 25.1797C441.097 21.8984 444.777 20.2578 449.487 20.2578C454.058 20.2578 457.667 21.9805 460.316 25.4258C462.987 28.8711 464.323 33.6641 464.323 39.8047V40.4023ZM457.82 39.6641C457.82 35.375 456.905 31.9883 455.077 29.5039C453.249 27.0195 450.741 25.7773 447.554 25.7773C443.616 25.7773 440.663 27.5234 438.695 31.0156V49.1914C440.64 52.6602 443.616 54.3945 447.624 54.3945C450.741 54.3945 453.214 53.1641 455.042 50.7031C456.894 48.2188 457.82 44.5391 457.82 39.6641Z"}),r.a.createElement("path",{d:"M495.605 59.7031C490.449 59.7031 486.254 58.0156 483.02 54.6406C479.785 51.2422 478.168 46.707 478.168 41.0352V39.8398C478.168 36.0664 478.883 32.7031 480.312 29.75C481.766 26.7734 483.781 24.4531 486.359 22.7891C488.961 21.1016 491.773 20.2578 494.797 20.2578C499.742 20.2578 503.586 21.8867 506.328 25.1445C509.07 28.4023 510.441 33.0664 510.441 39.1367V41.8438H484.672C484.766 45.5938 485.855 48.6289 487.941 50.9492C490.051 53.2461 492.723 54.3945 495.957 54.3945C498.254 54.3945 500.199 53.9258 501.793 52.9883C503.387 52.0508 504.781 50.8086 505.977 49.2617L509.949 52.3555C506.762 57.2539 501.98 59.7031 495.605 59.7031ZM494.797 25.6016C492.172 25.6016 489.969 26.5625 488.188 28.4844C486.406 30.3828 485.305 33.0547 484.883 36.5H503.938V36.0078C503.75 32.7031 502.859 30.1484 501.266 28.3438C499.672 26.5156 497.516 25.6016 494.797 25.6016Z"}),r.a.createElement("path",{d:"M543.587 26.7969C542.602 26.6328 541.536 26.5508 540.388 26.5508C536.122 26.5508 533.227 28.3672 531.704 32V59H525.2V20.9609H531.528L531.634 25.3555C533.766 21.957 536.79 20.2578 540.704 20.2578C541.97 20.2578 542.93 20.4219 543.587 20.75V26.7969Z"})),r.a.createElement("path",{d:"M21.9805 42.8633L22.9648 49.6133L24.4062 43.5312L34.5312 7.8125H40.2266L50.1055 43.5312L51.5117 49.7188L52.6016 42.8281L60.5469 7.8125H67.332L54.9219 59H48.7695L38.2227 21.6992L37.4141 17.7969L36.6055 21.6992L25.6719 59H19.5195L7.14453 7.8125H13.8945L21.9805 42.8633Z",stroke:"#000000","stroke-width":"10",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M95.6961 59.7031C90.5398 59.7031 86.3445 58.0156 83.1102 54.6406C79.8758 51.2422 78.2586 46.707 78.2586 41.0352V39.8398C78.2586 36.0664 78.9734 32.7031 80.4031 29.75C81.8562 26.7734 83.8719 24.4531 86.45 22.7891C89.0516 21.1016 91.8641 20.2578 94.8875 20.2578C99.8328 20.2578 103.677 21.8867 106.419 25.1445C109.161 28.4023 110.532 33.0664 110.532 39.1367V41.8438H84.7625C84.8562 45.5938 85.9461 48.6289 88.032 50.9492C90.1414 53.2461 92.8133 54.3945 96.0477 54.3945C98.3445 54.3945 100.29 53.9258 101.884 52.9883C103.477 52.0508 104.872 50.8086 106.067 49.2617L110.04 52.3555C106.852 57.2539 102.071 59.7031 95.6961 59.7031ZM94.8875 25.6016C92.2625 25.6016 90.0594 26.5625 88.2781 28.4844C86.4969 30.3828 85.3953 33.0547 84.9734 36.5H104.028V36.0078C103.841 32.7031 102.95 30.1484 101.356 28.3438C99.7625 26.5156 97.6062 25.6016 94.8875 25.6016Z",stroke:"#000000","stroke-width":"10",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M157.494 40.4023C157.494 46.2148 156.158 50.8906 153.486 54.4297C150.814 57.9453 147.228 59.7031 142.728 59.7031C137.923 59.7031 134.209 58.0039 131.584 54.6055L131.267 59H125.291V5H131.795V25.1445C134.42 21.8867 138.041 20.2578 142.658 20.2578C147.275 20.2578 150.896 22.0039 153.521 25.4961C156.17 28.9883 157.494 33.7695 157.494 39.8398V40.4023ZM150.99 39.6641C150.99 35.2344 150.134 31.8125 148.423 29.3984C146.712 26.9844 144.252 25.7773 141.041 25.7773C136.752 25.7773 133.67 27.7695 131.795 31.7539V48.207C133.787 52.1914 136.892 54.1836 141.111 54.1836C144.228 54.1836 146.654 52.9766 148.388 50.5625C150.123 48.1484 150.99 44.5156 150.99 39.6641Z",stroke:"#000000","stroke-width":"10",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M173.94 59V7.8125H188.389C192.842 7.8125 196.78 8.79688 200.202 10.7656C203.623 12.7344 206.26 15.5352 208.112 19.168C209.987 22.8008 210.936 26.9727 210.959 31.6836V34.9531C210.959 39.7812 210.022 44.0117 208.147 47.6445C206.295 51.2773 203.635 54.0664 200.166 56.0117C196.721 57.957 192.702 58.9531 188.108 59H173.94ZM180.69 13.3672V53.4805H187.791C192.995 53.4805 197.038 51.8633 199.92 48.6289C202.827 45.3945 204.28 40.7891 204.28 34.8125V31.8242C204.28 26.0117 202.909 21.5 200.166 18.2891C197.448 15.0547 193.58 13.4141 188.565 13.3672H180.69Z",stroke:"#000000","stroke-width":"10",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M243.155 59.7031C237.999 59.7031 233.804 58.0156 230.57 54.6406C227.335 51.2422 225.718 46.707 225.718 41.0352V39.8398C225.718 36.0664 226.433 32.7031 227.863 29.75C229.316 26.7734 231.331 24.4531 233.909 22.7891C236.511 21.1016 239.323 20.2578 242.347 20.2578C247.292 20.2578 251.136 21.8867 253.878 25.1445C256.62 28.4023 257.991 33.0664 257.991 39.1367V41.8438H232.222C232.316 45.5938 233.405 48.6289 235.491 50.9492C237.601 53.2461 240.273 54.3945 243.507 54.3945C245.804 54.3945 247.749 53.9258 249.343 52.9883C250.937 52.0508 252.331 50.8086 253.527 49.2617L257.499 52.3555C254.312 57.2539 249.53 59.7031 243.155 59.7031ZM242.347 25.6016C239.722 25.6016 237.519 26.5625 235.738 28.4844C233.956 30.3828 232.855 33.0547 232.433 36.5H251.487V36.0078C251.3 32.7031 250.409 30.1484 248.816 28.3438C247.222 26.5156 245.066 25.6016 242.347 25.6016Z",stroke:"#000000","stroke-width":"10",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M284.809 50.1758L294.23 20.9609H300.875L287.234 59H282.277L268.496 20.9609H275.141L284.809 50.1758Z",stroke:"#000000","stroke-width":"10",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M329.626 59.7031C324.47 59.7031 320.274 58.0156 317.04 54.6406C313.805 51.2422 312.188 46.707 312.188 41.0352V39.8398C312.188 36.0664 312.903 32.7031 314.333 29.75C315.786 26.7734 317.802 24.4531 320.38 22.7891C322.981 21.1016 325.794 20.2578 328.817 20.2578C333.763 20.2578 337.606 21.8867 340.348 25.1445C343.091 28.4023 344.462 33.0664 344.462 39.1367V41.8438H318.692C318.786 45.5938 319.876 48.6289 321.962 50.9492C324.071 53.2461 326.743 54.3945 329.977 54.3945C332.274 54.3945 334.22 53.9258 335.813 52.9883C337.407 52.0508 338.802 50.8086 339.997 49.2617L343.97 52.3555C340.782 57.2539 336.001 59.7031 329.626 59.7031ZM328.817 25.6016C326.192 25.6016 323.989 26.5625 322.208 28.4844C320.427 30.3828 319.325 33.0547 318.903 36.5H337.958V36.0078C337.77 32.7031 336.88 30.1484 335.286 28.3438C333.692 26.5156 331.536 25.6016 328.817 25.6016Z",stroke:"#000000","stroke-width":"10",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M366.287 59H359.783V5H366.287V59Z",stroke:"#000000","stroke-width":"10",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M382.205 39.6289C382.205 35.9023 382.932 32.5508 384.385 29.5742C385.862 26.5977 387.901 24.3008 390.502 22.6836C393.127 21.0664 396.116 20.2578 399.467 20.2578C404.647 20.2578 408.83 22.0508 412.018 25.6367C415.229 29.2227 416.834 33.9922 416.834 39.9453V40.4023C416.834 44.1055 416.12 47.4336 414.69 50.3867C413.284 53.3164 411.256 55.6016 408.608 57.2422C405.983 58.8828 402.959 59.7031 399.538 59.7031C394.381 59.7031 390.198 57.9102 386.987 54.3242C383.799 50.7383 382.205 45.9922 382.205 40.0859V39.6289ZM388.745 40.4023C388.745 44.6211 389.717 48.0078 391.663 50.5625C393.631 53.1172 396.256 54.3945 399.538 54.3945C402.842 54.3945 405.467 53.1055 407.413 50.5273C409.358 47.9258 410.33 44.293 410.33 39.6289C410.33 35.457 409.334 32.082 407.342 29.5039C405.373 26.9023 402.748 25.6016 399.467 25.6016C396.256 25.6016 393.666 26.8789 391.698 29.4336C389.729 31.9883 388.745 35.6445 388.745 40.4023Z",stroke:"#000000","stroke-width":"10",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M464.323 40.4023C464.323 46.1914 462.999 50.8555 460.351 54.3945C457.702 57.9336 454.116 59.7031 449.593 59.7031C444.976 59.7031 441.343 58.2383 438.695 55.3086V73.625H432.191V20.9609H438.132L438.448 25.1797C441.097 21.8984 444.777 20.2578 449.487 20.2578C454.058 20.2578 457.667 21.9805 460.316 25.4258C462.987 28.8711 464.323 33.6641 464.323 39.8047V40.4023ZM457.82 39.6641C457.82 35.375 456.905 31.9883 455.077 29.5039C453.249 27.0195 450.741 25.7773 447.554 25.7773C443.616 25.7773 440.663 27.5234 438.695 31.0156V49.1914C440.64 52.6602 443.616 54.3945 447.624 54.3945C450.741 54.3945 453.214 53.1641 455.042 50.7031C456.894 48.2188 457.82 44.5391 457.82 39.6641Z",stroke:"#000000","stroke-width":"10",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M495.605 59.7031C490.449 59.7031 486.254 58.0156 483.02 54.6406C479.785 51.2422 478.168 46.707 478.168 41.0352V39.8398C478.168 36.0664 478.883 32.7031 480.312 29.75C481.766 26.7734 483.781 24.4531 486.359 22.7891C488.961 21.1016 491.773 20.2578 494.797 20.2578C499.742 20.2578 503.586 21.8867 506.328 25.1445C509.07 28.4023 510.441 33.0664 510.441 39.1367V41.8438H484.672C484.766 45.5938 485.855 48.6289 487.941 50.9492C490.051 53.2461 492.723 54.3945 495.957 54.3945C498.254 54.3945 500.199 53.9258 501.793 52.9883C503.387 52.0508 504.781 50.8086 505.977 49.2617L509.949 52.3555C506.762 57.2539 501.98 59.7031 495.605 59.7031ZM494.797 25.6016C492.172 25.6016 489.969 26.5625 488.188 28.4844C486.406 30.3828 485.305 33.0547 484.883 36.5H503.938V36.0078C503.75 32.7031 502.859 30.1484 501.266 28.3438C499.672 26.5156 497.516 25.6016 494.797 25.6016Z",stroke:"#000000","stroke-width":"10",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M543.587 26.7969C542.602 26.6328 541.536 26.5508 540.388 26.5508C536.122 26.5508 533.227 28.3672 531.704 32V59H525.2V20.9609H531.528L531.634 25.3555C533.766 21.957 536.79 20.2578 540.704 20.2578C541.97 20.2578 542.93 20.4219 543.587 20.75V26.7969Z",stroke:"#000000","stroke-width":"10",mask:"url(#path-1-outside-1)"})))}),F=a(312),B=a(318),W=a(313),J=a(315),Q=a(323),q=a(321),G=a(317),K=a(320),X=a(319),$=a(269),ee=a.n($),te=a(286),ae=a.n(te),ne=a(287),ce=a.n(ne),re=[{href:"#introduction",innerText:"introduction"},{href:"#skills",innerText:"skills"},{href:"#career",innerText:"career"},{href:"#works",innerText:"works"}],le=r.a.lazy(function(){return Promise.all([a.e(5),a.e(6)]).then(a.bind(null,322))}),oe=[{name:"react-google-journey",imageUrl:null,url:"https://zachyutw.github.io/react-google-journey/"}],ie=function(e){var t=e.children,a=e.className,n=Object(c.useContext)(N.b).activedSection;return r.a.createElement("div",{className:a},r.a.createElement(F.a,{className:Z.a.mainNavs},re.map(function(e){var t=e.href,a=e.innerText;return r.a.createElement(B.a,{key:t,href:t,component:W.a,"data-selected":n===a,showLabel:!0,label:a.toUpperCase()})})),t)},se=function(e){var t=e.name,a=e.imageUrl,l=e.url,o=Object(c.useState)(a),i=Object(n.a)(o,2),s=i[0],m=i[1];return Object(c.useEffect)(function(){ee.a.post("https://us-central1-soy-haven-237204.cloudfunctions.net/cors/api/sceenshot",{url:l}).then(function(e){m(function(){return e.data.jpegBase64})})},[]),r.a.createElement("div",{className:Z.a.project,style:{backgroundImage:"url(".concat(s,")")}},r.a.createElement("h4",null,"Github"),r.a.createElement("button",{className:"ui button black"},t))},me=function(e){var t=e.send,a=e.body,n=e.innerText,c=e.children;return r.a.createElement(W.a,{target:"_blank",href:"mailto:".concat(t,"?body=").concat(encodeURI(a))},n,c)},ue=function e(){return r.a.createElement("section",{id:e,className:Z.a.section},r.a.createElement(J.a,null,r.a.createElement("p",null,"Copyright \xa9 ".concat("Zach Yu")),r.a.createElement(me,{send:"zachyu.tw@gmail.com",body:"Hi Zach Yu:"},"zachyu.tw@gmail.com")))},Ce=(ae()("2019-03-01").format("YYYY-MM-DD"),ae()("2019-05-01").format("YYYY-MM-DD"),function(){var e=Object(c.useRef)(null);return r.a.createElement("div",{className:Z.a.intro,ref:e},r.a.createElement("h1",null,"Welcome, To My Page"),r.a.createElement("h2",null,"Introduction"),r.a.createElement("div",{className:"svgTitle"},r.a.createElement(U,null)),r.a.createElement("p",null,"I'm Zach Yu"),r.a.createElement("p",null,"A Full-Stack developer with main focus on React and NodeJS "),r.a.createElement("a",{className:"ui button black basic",href:"",alt:""},"Github"))}),de=function(e){var t=e.startDate,a=e.endDate,n=e.location,c=e.summary;return r.a.createElement("div",{className:Z.a.pearid_location_icon},r.a.createElement("h4",null,c),r.a.createElement("div",{className:Z.a.timeperiod},r.a.createElement(Q.a,{label:ae()(t,"YYYYMMDD").format("YYYY-MM")}),r.a.createElement(Q.a,{label:ae()(a,"YYYYMMDD").format("YYYY-MM")})),r.a.createElement("a",null,n))},he=function(){var e=Object(c.useState)(""),t=Object(n.a)(e,2),a=t[0],l=t[1];Object(c.useEffect)(function(){ee.a.post("https://us-central1-soy-haven-237204.cloudfunctions.net/getData",{url:"https://calendar.google.com/calendar/ical/rpu9kvk1bku9o6a1htdgedohjs%40group.calendar.google.com/private-f1d1cc50b32c4949b5a4bcda4c8e7be5/basic.ics"}).then(function(e){console.log(e.data),l(function(){return e.data.data.replace(/\\/g,"")})})},[]);var o=Object(c.useMemo)(function(){return ce()(a).sort(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.startDate-t.startDate})},[a]);return r.a.createElement("div",null,r.a.createElement(q.a,{orientation:"vertical"},o.map(function(e,t){var a=e.summary,n=e.startDate,c=e.endDate,l=e.location,o=e.description;return r.a.createElement(G.a,{key:t,active:!0},r.a.createElement(K.a,{float:"right",className:Z.a.steplabel,StepIconComponent:de,StepIconProps:{startDate:n,endDate:c,location:l,summary:a}}),r.a.createElement(X.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})))})))},fe=function(e){var t=e.children,a=e.id,n=Object(c.useRef)(null),l=Object(D.a)(n,!1),o=Object(c.useContext)(N.b).onChange;return Object(c.useEffect)(function(e){o(e,{id:a,actionType:"sectionIntoView",isIntoView:l})},[l,a]),r.a.createElement("section",{ref:n,id:a,className:Z.a.section,"data-inview":l},r.a.createElement(J.a,null,t))},pe=function(){return r.a.createElement(fe,{id:"introduction"},r.a.createElement(Ce,null))},ve=function(){return r.a.createElement(fe,{id:"skills"},r.a.createElement("div",null,r.a.createElement("h2",null,"Skills"),r.a.createElement(le,null)),r.a.createElement("div",null,r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"I am a coding lover who live in Vancouver. Have experices with building complex web application. Fouthur more,"," ")))},be=function(){return r.a.createElement(fe,{id:"career"},r.a.createElement("h2",null,"Carrer"),r.a.createElement("p",null,"Real-Time data from my calendar"),r.a.createElement("div",{className:"content"},r.a.createElement(he,null)))},Ee=function(){return r.a.createElement(fe,{id:"works"},r.a.createElement("h2",null,"Works"),r.a.createElement("div",{className:"content"}),r.a.createElement(Y.a,{source:" ### Using modern technologies to build Mobile, Responsive web applications\n  ### Advance React knowledage \n  * hooks\n  * HOC\n  * renderProp\n  * router-control\n  * form-control \n  * content api\n  ### Advance Web Design\n  * new Flex property\n  * transform animation\n  * media responsive\n  * \n  "}),oe.map(function(e){return r.a.createElement(se,Object.assign({key:e.name},e))}),r.a.createElement("div",null))};t.default=function(e){e.match.params.target;var t=e.location,a=(t.pathname,t.key,Object(c.useCallback)(function(e,t){console.log(t)},[]));return r.a.createElement(L,null,r.a.createElement(ie,null),r.a.createElement(_,{className:Z.a.page},r.a.createElement(pe,{onChange:a}),r.a.createElement(ve,{onChange:a}),r.a.createElement(be,{onChange:a}),r.a.createElement(Ee,{onChange:a}),r.a.createElement(ue,{onChange:a})))}}}]);
//# sourceMappingURL=4.745a8417.chunk.js.map