"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[849],{8072:function(e,t,n){n.d(t,{Tb:function(){return c}});n(5539);var r=n(9954),a=n(7378),i=n(9214),o=r.jU?a.useLayoutEffect:a.useEffect;function l(e){var t=(0,i.O)(),n=Array.isArray(e)?e:[e],l=r.jU&&"matchMedia"in t.window,c=a.useState(n.map((function(e){return!!l&&!!t.window.matchMedia(e).matches}))),u=c[0],s=c[1];return o((function(){if(l){var e=n.map((function(e){return t.window.matchMedia(e)})),r=e.map((function(){var n=function(){var t,n,r=e.map((function(e){return e.matches}));n=r,(t=u).length===n.length&&t.every((function(e,t){return e===n[t]}))||s(r)};return t.window.addEventListener("resize",n),n}));return function(){e.forEach((function(e,n){t.window.removeEventListener("resize",r[n])}))}}}),[e]),u}r.Ts;r.Ts;function c(){return l("(prefers-reduced-motion: reduce)")[0]}},5850:function(e,t,n){n.d(t,{u:function(){return s}});var r=n(808),a=n(7378),i=n(8072),o=n(5195),l={transform:"translate3d(0, 0, 0)",transition:"transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"},c={transform:"translate3d(0, -8px, 0)",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},u=["children"],s=function(e){var t=e.children,n=(0,r.Z)(e,u),s=(0,i.Tb)();return a.createElement(o.xu,Object.assign({transition:l.transition,transform:l.transform,_hover:s?{}:{transform:c.transform,boxShadow:c.boxShadow}},n),t)}},1261:function(e,t,n){n.d(t,{X:function(){return l}});var r=n(808),a=n(7378),i=n(5195),o=["as","children"],l=function(e){var t=e.as,n=e.children,l=(0,r.Z)(e,o);return a.createElement(i.X6,Object.assign({as:t,variant:t},l),n)}},5093:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7378),a=n(3622),i=n(5195),o=n(5850),l=n(9455),c=function(e){var t=e.slug,n=e.title,c=e.subtitle,u=e.description,s=(0,a.ff)("brand.cardBg","brand.dark.cardBg"),d=(0,a.ff)("black","white"),m=(0,a.ff)("brand.primary","brand.dark.primary"),f=(0,a.ff)("brand.cardSubheading","brand.dark.cardSubheading");return r.createElement(o.u,{p:6,borderRadius:"lg",boxShadow:"lg",bg:s,key:t,_focusWithin:{boxShadow:"outline"}},r.createElement(l.r,{to:t,_focus:{boxShadow:"none",h2:{color:m}},_hover:{textDecoration:"none",h2:{color:m}}},r.createElement(i.xv,{as:"h2",fontSize:"1.3125rem",fontWeight:"bold",color:d,transition:"color 0.3s ease-in-out"},n),c&&r.createElement(i.xv,{as:"h3",fontSize:"1.125rem",fontWeight:"medium",color:f},c),r.createElement(i.xv,{mt:6},u)))}},7357:function(e,t,n){n.d(t,{A:function(){return l}});var r=n(7378),a=n(5195),i=n(3905),o=n(1261),l=function(e){var t=e.bgGradient,n=e.title,l=e.description,c=e.image,u=void 0===c?void 0:c;return r.createElement(a.xu,{mt:"-navigationWithSubHeight",bgGradient:t,pt:"navigationWithSubHeight"},r.createElement(a.W2,{py:i.D.paddingSmall},r.createElement(a.rj,{templateColumns:"auto",gap:12},r.createElement(a.kC,{direction:"column"},r.createElement(o.X,{as:"h1",color:"white"},n),r.createElement(a.xv,{textStyle:"prominent",color:"gray.100",maxWidth:"65ch"},l)),u)))}},1524:function(e,t,n){n.d(t,{I:function(){return s}});var r=n(7378),a=n(5195),i=n(3905),o=n(7654),l=n(1187),c=n(5093),u=n(4638),s=function(e){var t=e.posts,n=e.children;return r.createElement(l.A,{subnavigation:r.createElement(u.v,null)},r.createElement(o.f,null,n,r.createElement(a.W2,{py:i.D.paddingMedium},t.nodes.length>0?r.createElement(a.rj,{gridTemplateColumns:["1fr",null,"repeat(2, 1fr)"],gap:8,mx:["0",null,null,"-6"]},t.nodes.map((function(e){return r.createElement(c.Z,{key:e.slug,slug:e.slug,title:e.title,subtitle:e.subtitle,description:e.description})}))):r.createElement(a.xv,{textStyle:"prominent"},"Sadly there's no content for this category available yet. Be sure to follow me on"," ",r.createElement(a.rU,{href:"https://www.linkedin.com/in/amankalra172/"},"Linkedin")," to not miss any announcements about new posts :)"))))}},4638:function(e,t,n){n.d(t,{v:function(){return c}});var r=n(7378),a=n(3622),i=n(5195),o=n(5414),l=n(9455),c=function(){var e=(0,o.useStaticQuery)("1010836923").allCategory.nodes,t=(0,a.ff)("blueGray.200","blueGray.700"),n=(0,a.ff)("blueGray.400","blueGray.400");return r.createElement(i.kC,{alignItems:"center",py:"2","data-name":"subnavigation",sx:{overflowX:"auto",overflowY:"hidden",scrollbarWidth:"thin",scrollbarColor:n+" "+t,"::-webkit-scrollbar":{height:"12px"},"::-webkit-scrollbar-track":{background:t,borderRadius:"6px"},"::-webkit-scrollbar-thumb":{backgroundColor:n,borderRadius:"8px",borderWidth:"3px",borderStyle:"solid",borderColor:t}}},r.createElement(i.Ug,{as:"ul",listStyleType:"none",spacing:"2",ml:"-2"},r.createElement("li",null,r.createElement(l.r,{to:"/writing",fontSize:"md",p:"2",activeClassName:"active",sx:{"&.active":{fontWeight:"semibold"}}},"Latest")),r.createElement("li",null,r.createElement(l.r,{to:"/tutorials",fontSize:"md",p:"2",activeClassName:"active",sx:{"&.active":{fontWeight:"semibold"}}},"Tutorials")),e.map((function(e){return r.createElement("li",{key:e.slug},r.createElement(l.r,{to:e.slug,fontSize:"md",p:"2",activeClassName:"active",sx:{"&.active":{fontWeight:"semibold"}}},e.name))}))))}},3905:function(e,t,n){n.d(t,{D:function(){return r}});var r={paddingLarge:[20,24,null,40,48],paddingMedium:[16,24,null,36,40],paddingSmall:[12,16,null,24,28]}},6487:function(e,t,n){n.r(t);var r=n(7378),a=n(7357),i=n(1524),o=n(1898);t.default=function(e){var t=e.data,n=t.posts,l=t.category;return r.createElement(i.I,{posts:n},r.createElement(o.H,{title:l.name,description:l.description,breadcrumbListItems:[{name:l.name,url:l.slug}]}),r.createElement(a.A,{bgGradient:l.gradient,title:l.name,description:l.description}))}}}]);
//# sourceMappingURL=component---src-pages-category-name-tsx-8ae5bab34f97c027eb20.js.map