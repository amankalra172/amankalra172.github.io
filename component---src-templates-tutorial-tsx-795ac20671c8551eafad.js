"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[276],{4367:function(e,t,n){n.d(t,{Vp:function(){return d},Sn:function(){return f},SD:function(){return E}});var r=n(5693),a=n(2308),l=n(2784),i=n(5937),c=n(9521),o=n(1157),s=n(6259),u=n(7378);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var d=(0,a.G)((function(e,t){var n=(0,l.j)("Tag",e),r=(0,i.Lr)(e),a=m({display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%"},n.container);return u.createElement(c.Fo,{value:n},u.createElement(o.m$.span,m({ref:t},r,{__css:a})))}));s.Ts&&(d.displayName="Tag");var f=(0,a.G)((function(e,t){var n=(0,c.yK)();return u.createElement(o.m$.span,m({ref:t,isTruncated:!0},e,{__css:n.label}))}));s.Ts&&(f.displayName="TagLabel");var p=(0,a.G)((function(e,t){return u.createElement(r.J,m({ref:t,verticalAlign:"top",marginEnd:"0.5rem"},e))}));s.Ts&&(p.displayName="TagLeftIcon");var g=(0,a.G)((function(e,t){return u.createElement(r.J,m({ref:t,verticalAlign:"top",marginStart:"0.5rem"},e))}));s.Ts&&(g.displayName="TagRightIcon");var v=function(e){return u.createElement(r.J,m({verticalAlign:"inherit",viewBox:"0 0 512 512"},e),u.createElement("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}))};s.Ts&&(v.displayName="TagCloseIcon");var E=function(e){var t=e.isDisabled,n=e.children,r=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["isDisabled","children"]),a=m({display:"flex",alignItems:"center",justifyContent:"center",outline:"0"},(0,c.yK)().closeButton);return u.createElement(o.m$.button,m({},r,{type:"button","aria-label":"close",disabled:t,__css:a}),n||u.createElement(v,null))};s.Ts&&(E.displayName="TagCloseButton")},6261:function(e,t,n){n.d(t,{Z:function(){return I}});var r=n(7378),a=n(8615),l=n(8278),i=n(4126),c=n(9778),o=n(6218),s=n(788),u=n(1368),m=n(2538),d=n(2912),f=n(1898),p=n(7654),g=n(8610),v=n(4249),E=n(9130),b=n(9953),y=n(9424),h=n(5424),x=n(649),w=n(4339),O=n(4649);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var C=function(e,t){void 0===t&&(t={});var n=r.useState(""),a=n[0],l=n[1];return r.useEffect((function(){if("undefined"!=typeof window){var n=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&l(e.target.id)}))}),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({rootMargin:"0% 0% -80% 0%"},t)),r=e.map((function(e){return document.getElementById(e)})).filter(Boolean);return r.forEach((function(e){n.observe(e)})),function(){r.forEach((function(e){n.unobserve(e)}))}}}),[e,t]),a};function T(e){return e.reduce((function(e,t){return t.url&&e.push(t.url.slice(1)),t.items&&e.push.apply(e,(0,x.Z)(T(t.items))),e}),[])}var D=function e(t){var n=t.items,a=t.activeId,l=t.nested,i=void 0!==l&&l,c=t.activeColor,s=void 0===c?"red":c;return r.createElement(r.Fragment,null,n.map((function(t){var n=t.url.slice(1),l=a===n;return r.createElement(r.Fragment,null,r.createElement(o.r,{color:l?s:"inherit",key:t.url,mt:i?1:{base:"2","2xl":"3"},ml:i?3:0,href:t.url},t.title),t.items&&e({items:t.items,activeId:a,activeColor:s,nested:!0}))})))},S=function(e){var t=e.items,n=(0,w.useColorModeValue)("brand.heading","brand.dark.heading"),a=(0,w.useColorModeValue)("brand.primary","brand.dark.primary"),l=T(t),i=C(l);return r.createElement(c.xu,{as:"aside",position:{base:"relative","2xl":"sticky"},maxHeight:{base:"unset","2xl":"300px"},top:{base:"unset","2xl":"80px"},mb:{base:"16","2xl":0},fontSize:["0.875rem","1rem"]},r.createElement(c.xu,{as:"nav",display:"flex",flexDir:"column",mt:{base:"0rem","2xl":"1.8em"},minWidth:"175px",maxWidth:{base:"100%","2xl":"210px"},overflow:"auto",alignItems:"flex-start"},r.createElement(c.xu,{as:"h2",color:n,textTransform:"uppercase",fontSize:["14px",null,null,"1rem",null,"14px"],fontWeight:"medium",letterSpacing:"0.075em",mb:{base:"2","2xl":"4"}},"Table of Contents"),D({items:t,activeId:i,activeColor:a})))},k=function(e){var t=e.children,n=e.items;return r.createElement(c.xu,{display:{base:"block","2xl":"flex"},flexDirection:"row-reverse",justifyContent:"flex-end",sx:{gap:"5rem"}},r.createElement(S,{items:n}),t)},I=function(e){var t=e.post,n=e.pathname,x=e.children,w=e.type,O=r.useState(!1),j=O[0],C=O[1];return r.useEffect((function(){C(!!window.navigator.share)}),[]),r.createElement(d.A,null,r.createElement(f.H,{title:t.title,description:t.description?t.description:t.excerpt,image:t.image},r.createElement("meta",{name:"twitter:label1",value:"Time To Read"}),r.createElement("meta",{name:"twitter:data1",value:t.timeToRead+" Minutes"}),r.createElement("meta",{name:"twitter:label2",value:"Category"}),r.createElement("meta",{name:"twitter:data2",value:t.category.name}),r.createElement("meta",{name:"article:published_time",content:t.seoDate}),r.createElement("meta",{name:"article:modified_time",content:t.seoLastUpdated}),r.createElement("script",{type:"application/ld+json"},JSON.stringify((0,b.Y2)({isGarden:!1,post:{title:t.title,description:t.description?t.description:t.excerpt,date:t.seoDate,lastUpdated:t.seoLastUpdated,year:t.yearDate,image:t.image,slug:t.slug},category:{name:t.category.name,slug:t.category.slug}})))),r.createElement(a.W,{variant:"proseRoot"},r.createElement(p.f,null,x,"tutorial"===w?r.createElement(k,{items:t.tableOfContents.items},r.createElement(v.M,{as:"article",flex:"1 1 100%",minW:"100%"},r.createElement(u.MDXProvider,{components:E.w},r.createElement(m.MDXRenderer,null,t.body)))):r.createElement(v.M,{as:"article"},r.createElement(u.MDXProvider,{components:E.w},r.createElement(m.MDXRenderer,null,t.body))),r.createElement(g.L,{size:12,axis:"vertical"}),r.createElement(l.i,null),r.createElement(g.L,{size:6,axis:"vertical"}),r.createElement(i.Kq,{direction:["column","row"],display:"flex",spacing:"5",justifyContent:["flex-start","space-between"],alignItems:["flex-start","center"]},r.createElement(c.xu,null,r.createElement(o.r,{fontSize:["md",null,null,"1.125rem"],fontWeight:"medium",href:"https://github.com/LekoArts/portfolio-v2/edit/main/www/content/writing/"+t.parent.parent.relativePath},"Edit on GitHub")," ","-"," ",r.createElement(o.r,{fontSize:["md",null,null,"1.125rem"],fontWeight:"medium",href:"https://www.twitter.com/search?q="+encodeURIComponent("https://www.lekoarts.de"+n)},"Discuss on Twitter")),j?r.createElement(i.Kq,{direction:["column","row"]},r.createElement(y.AN,{link:""+h.l.url+t.slug,message:t.title}),r.createElement(y.fy,{link:""+h.l.url+t.slug,message:t.title,variant:"outline"})):r.createElement(y.fy,{link:""+h.l.url+t.slug,message:t.title})),"prose"===w&&r.createElement(s.x,{mt:6,fontSize:["md",null,null,"1.125rem"]},"Last updated: ",t.lastUpdated))))}},7573:function(e,t,n){n.r(t);var r=n(7378),a=n(8278),l=n(5882),i=n(788),c=n(4367),o=n(6261),s=n(1261),u=n(8610),m=function(e){switch(e){case"Community":return"green";case"Design":return"blue";case"Gatsby":return"purple";case"JavaScript":return"yellow";case"React":return"teal";default:return"gray"}};t.default=function(e){var t=e.data.post,n=e.location.pathname;return r.createElement(o.Z,{post:t,pathname:n,type:"tutorial"},r.createElement(s.X,{as:"h1"},t.title),r.createElement(u.L,{size:6,axis:"vertical"}),r.createElement(a.i,null),r.createElement(u.L,{size:4,axis:"vertical"}),r.createElement(l.k,{justifyContent:"space-between",flexDirection:["column",null,null,"row"]},r.createElement(i.x,{mb:2},"Created ",t.date," – Last Updated ",t.lastUpdated),r.createElement(c.Vp,{alignSelf:"flex-start",mb:2,colorScheme:m(t.category.name)},r.createElement(c.Sn,null,t.category.name))),r.createElement(u.L,{size:10,axis:"vertical"}))}}}]);
//# sourceMappingURL=component---src-templates-tutorial-tsx-795ac20671c8551eafad.js.map