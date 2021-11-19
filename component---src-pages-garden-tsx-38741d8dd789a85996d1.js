"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[867],{8072:function(e,t,n){n.d(t,{Tb:function(){return o}});n(5539);var r=n(9954),a=n(7378),l=n(9214),i=r.jU?a.useLayoutEffect:a.useEffect;function c(e){var t=(0,l.O)(),n=Array.isArray(e)?e:[e],c=r.jU&&"matchMedia"in t.window,o=a.useState(n.map((function(e){return!!c&&!!t.window.matchMedia(e).matches}))),u=o[0],s=o[1];return i((function(){if(c){var e=n.map((function(e){return t.window.matchMedia(e)})),r=e.map((function(){var n=function(){var t,n,r=e.map((function(e){return e.matches}));n=r,(t=u).length===n.length&&t.every((function(e,t){return e===n[t]}))||s(r)};return t.window.addEventListener("resize",n),n}));return function(){e.forEach((function(e,n){t.window.removeEventListener("resize",r[n])}))}}}),[e]),u}r.Ts;r.Ts;function o(){return c("(prefers-reduced-motion: reduce)")[0]}},3036:function(e,t,n){n.d(t,{Vp:function(){return u},SD:function(){return m},Sn:function(){return s}});var r=n(7042),a=n(5539),l=n(9954),i=n(7378);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var o=["isDisabled","children"],u=(0,a.Gp)((function(e,t){var n=(0,a.jC)("Tag",e),r=(0,a.Lr)(e),l=c({display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%"},n.container);return i.createElement(a.Fo,{value:n},i.createElement(a.m$.span,c({ref:t},r,{__css:l})))}));l.Ts&&(u.displayName="Tag");var s=(0,a.Gp)((function(e,t){var n=(0,a.yK)();return i.createElement(a.m$.span,c({ref:t,isTruncated:!0},e,{__css:n.label}))}));l.Ts&&(s.displayName="TagLabel");var d=(0,a.Gp)((function(e,t){return i.createElement(r.JO,c({ref:t,verticalAlign:"top",marginEnd:"0.5rem"},e))}));l.Ts&&(d.displayName="TagLeftIcon");var f=(0,a.Gp)((function(e,t){return i.createElement(r.JO,c({ref:t,verticalAlign:"top",marginStart:"0.5rem"},e))}));l.Ts&&(f.displayName="TagRightIcon");var p=function(e){return i.createElement(r.JO,c({verticalAlign:"inherit",viewBox:"0 0 512 512"},e),i.createElement("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}))};l.Ts&&(p.displayName="TagCloseIcon");var m=function(e){var t=e.isDisabled,n=e.children,r=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,o),l=c({display:"flex",alignItems:"center",justifyContent:"center",outline:"0"},(0,a.yK)().closeButton);return i.createElement(a.m$.button,c({},r,{type:"button","aria-label":"close",disabled:t,__css:l}),n||i.createElement(p,null))};l.Ts&&(m.displayName="TagCloseButton")},1261:function(e,t,n){n.d(t,{X:function(){return c}});var r=n(808),a=n(7378),l=n(5195),i=["as","children"],c=function(e){var t=e.as,n=e.children,c=(0,r.Z)(e,i);return a.createElement(l.X6,Object.assign({as:t,variant:t},c),n)}},3905:function(e,t,n){n.d(t,{D:function(){return r}});var r={paddingLarge:[20,24,null,40,48],paddingMedium:[16,24,null,36,40],paddingSmall:[12,16,null,24,28]}},1242:function(e,t,n){n.r(t);var r=n(4649),a=n(7378),l=n(7469),i=n(8072),c=n(3622),o=n(5195),u=n(3036),s=n(1187),d=n(9455),f=n(7654),p=n(3905),m=n(1261),g=n(8610),v=n(1898);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={tags:[]},E=function(e,t){switch(t.type){case"ADD_TAG":return y(y({},e),{},{tags:e.tags.concat(t.payload)});case"REMOVE_TAG":return y(y({},e),{},{tags:e.tags.filter((function(e){return e!==t.payload}))});default:throw new Error("Unknown action passed to filter reducer")}};t.default=function(e){var t=e.data.garden,n=a.useReducer(E,b),r=n[0],h=n[1],y=(0,i.Tb)(),w=(0,c.ff)("blueGray.100","blueGray.800"),x=(0,c.ff)("blueGray.100","blueGray.800"),O=(0,c.ff)("brand.heading","brand.dark.heading");return a.createElement(s.A,null,a.createElement(v.H,{title:"Digital Garden",description:"I understand my Digital Garden as a collection of free form, interconnected & evolving ideas that grow over time. Like plants grow in a real-world garden.",image:"/social/digital-garden.png",breadcrumbListItems:[{name:"Digital Garden",url:"/garden"}]}),a.createElement(f.f,null,a.createElement(o.W2,{py:p.D.paddingSmall},a.createElement(m.X,{as:"h1"},"Digital Garden"),a.createElement(o.xv,{textStyle:"prominent"},a.createElement(d.r,{to:"/garden/what-is-a-digital-garden",color:O},"What is a Digital Garden?")," ","Select tags to filter posts:"),a.createElement(g.L,{size:6,axis:"vertical"}),a.createElement(o.Eq,null,t.group.map((function(e){var t=r.tags.includes(e.title);return a.createElement(o.Uc,{as:"button",onClick:function(){r.tags.includes(e.title)?h({type:"REMOVE_TAG",payload:e.title}):h({type:"ADD_TAG",payload:e.title})},borderRadius:"md",_hover:{cursor:"pointer"},_focus:{boxShadow:"outline",outline:"none"},key:e.title},a.createElement(u.Vp,{colorScheme:t?"blue":"gray",size:"lg"},a.createElement(u.Sn,null,e.title),t&&a.createElement(u.SD,{as:"span","aria-hidden":!0,"aria-label":""})))}))),a.createElement(g.L,{size:20,axis:"vertical"}),a.createElement(o.Kq,{spacing:0,divider:a.createElement(g.L,{axis:"horizontal",size:"100%",bg:w,border:"none"}),mx:["-2",null,null,"-6"]},t.nodes.filter((function(e){var t=e.tags,n=void 0===t?[]:t;return 0===r.tags.length||r.tags.some((function(e){return n.includes(e)}))})).sort((function(e,t){var n=new Date(e.lastUpdated),r=new Date(t.lastUpdated);return n>r?-1:n<r?1:0})).map((function(e){return a.createElement(d.r,{to:e.slug,key:e.slug,display:"grid",gridTemplateColumns:["25px 1fr 20px","35px 1fr 20px",null,"50px 1fr 24px"],alignItems:"center",gridGap:6,px:[2,null,null,6],py:[2,null,null,6],borderRadius:"lg",_hover:{textDecoration:"none",backgroundColor:x},sx:{span:{transform:"translate3d(0px, 0px, 0px)",transition:"transform .3s cubic-bezier(.73,.26,.42,1.24)"},"&:hover":{span:{transform:y?void 0:"translate3d(6px, 0px, 0px)"}},svg:{height:["1.25em",null,null,"1.5em"],width:["1.25em",null,null,"1.5em"]}}},a.createElement(o.xu,{width:[25,35,null,50],height:[25,35,null,50]},a.createElement("img",{alt:"",src:"/icons/"+e.icon+".svg",width:"100%",height:"100%"})),a.createElement(o.xu,null,a.createElement(o.X6,{as:"h2",variant:"gardenItem"},e.title),a.createElement(o.xv,{fontSize:["14px",null,null,"1rem"]},e.lastUpdated)),a.createElement("span",null,a.createElement(l.lzl,null)))}))))))}}}]);
//# sourceMappingURL=component---src-pages-garden-tsx-38741d8dd789a85996d1.js.map