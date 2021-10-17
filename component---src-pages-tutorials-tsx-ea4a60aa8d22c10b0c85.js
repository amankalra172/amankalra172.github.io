"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[400],{3673:function(e,t,r){r.d(t,{r:function(){return c}});var n=r(2308),a=r(1157),o=r(6259),i=r(7378);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var c=(0,n.G)((function(e,t){var r=e.area,n=e.templateAreas,o=e.gap,c=e.rowGap,s=e.columnGap,d=e.column,m=e.row,f=e.autoFlow,p=e.autoRows,g=e.templateRows,b=e.autoColumns,h=e.templateColumns,v=u(e,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),w={display:"grid",gridArea:r,gridTemplateAreas:n,gridGap:o,gridRowGap:c,gridColumnGap:s,gridAutoColumns:b,gridColumn:d,gridRow:m,gridAutoFlow:f,gridAutoRows:p,gridTemplateRows:g,gridTemplateColumns:h};return i.createElement(a.m$.div,l({ref:t,__css:w},v))}));o.Ts&&(c.displayName="Grid")},9684:function(e,t,r){r.d(t,{X:function(){return d}});var n=r(2308),a=r(2784),o=r(5937),i=r(1157),l=r(8193),u=r(6259),c=r(7378);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=(0,n.G)((function(e,t){var r=(0,a.m)("Heading",e),n=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}((0,o.Lr)(e),["className"]);return c.createElement(i.m$.h2,s({ref:t,className:(0,l.cx)("chakra-heading",e.className)},n,{__css:r}))}));u.Ts&&(d.displayName="Heading")},788:function(e,t,r){r.d(t,{x:function(){return m}});var n=r(2308),a=r(2784),o=r(5937),i=r(1157),l=r(3920),u=r(8193),c=r(6259),s=r(7378);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var m=(0,n.G)((function(e,t){var r=(0,a.m)("Text",e),n=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}((0,o.Lr)(e),["className","align","decoration","casing"]),c=(0,l.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return s.createElement(i.m$.p,d({ref:t,className:(0,u.cx)("chakra-text",e.className)},c,n,{__css:r}))}));c.Ts&&(m.displayName="Text")},9931:function(e,t,r){r.d(t,{T:function(){return u}});var n=r(1026),a=r(6994),o=r(8193),i=r(7378),l=o.jU?i.useLayoutEffect:i.useEffect;function u(){var e,t,r,u,c,s,d,m,f=(e="(prefers-reduced-motion: reduce)",t=(0,a.O)(),r=Array.isArray(e)?e:[e],u=o.jU&&"matchMedia"in t.window,c=i.useState(r.map((function(e){return!!u&&!!t.window.matchMedia(e).matches}))),s=(0,n.Z)(c,2),d=s[0],m=s[1],l((function(){if(u){var e=r.map((function(e){return t.window.matchMedia(e)})),n=e.map((function(e,t){var r=function(){return m((function(r){return r.map((function(r,n){return t===n?!!e.matches:r}))}))};return e.addListener(r),r}));return function(){e.forEach((function(e,t){e.removeListener(n[t])}))}}}),[e]),d);return(0,n.Z)(f,1)[0]}},5850:function(e,t,r){r.d(t,{u:function(){return s}});var n=r(808),a=r(7378),o=r(9931),i=r(9778),l={transform:"translate3d(0, 0, 0)",transition:"transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"},u={transform:"translate3d(0, -8px, 0)",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},c=["children"],s=function(e){var t=e.children,r=(0,n.Z)(e,c),s=(0,o.T)();return a.createElement(i.xu,Object.assign({transition:l.transition,transform:l.transform,_hover:s?{}:{transform:u.transform,boxShadow:u.boxShadow}},r),t)}},1261:function(e,t,r){r.d(t,{X:function(){return l}});var n=r(808),a=r(7378),o=r(9684),i=["as","children"],l=function(e){var t=e.as,r=e.children,l=(0,n.Z)(e,i);return a.createElement(o.X,Object.assign({as:t,variant:t},l),r)}},5093:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7378),a=r(4339),o=r(788),i=r(5850),l=r(9455),u=function(e){var t=e.slug,r=e.title,u=e.subtitle,c=e.description,s=(0,a.useColorModeValue)("brand.cardBg","brand.dark.cardBg"),d=(0,a.useColorModeValue)("black","white"),m=(0,a.useColorModeValue)("brand.primary","brand.dark.primary"),f=(0,a.useColorModeValue)("brand.cardSubheading","brand.dark.cardSubheading");return n.createElement(i.u,{p:6,borderRadius:"lg",boxShadow:"lg",bg:s,key:t,_focusWithin:{boxShadow:"outline"}},n.createElement(l.r,{to:t,_focus:{boxShadow:"none",h2:{color:m}},_hover:{textDecoration:"none",h2:{color:m}}},n.createElement(o.x,{as:"h2",fontSize:"1.3125rem",fontWeight:"bold",color:d,transition:"color 0.3s ease-in-out"},r),u&&n.createElement(o.x,{as:"h3",fontSize:"1.125rem",fontWeight:"medium",color:f},u),n.createElement(o.x,{mt:6},c)))}},7357:function(e,t,r){r.d(t,{A:function(){return d}});var n=r(7378),a=r(9778),o=r(8615),i=r(3673),l=r(5882),u=r(788),c=r(3905),s=r(1261),d=function(e){var t=e.bgGradient,r=e.title,d=e.description,m=e.image,f=void 0===m?void 0:m;return n.createElement(a.xu,{mt:"-navigationWithSubHeight",bgGradient:t,pt:"navigationWithSubHeight"},n.createElement(o.W,{py:c.D.paddingSmall},n.createElement(i.r,{templateColumns:"auto",gap:12},n.createElement(l.k,{direction:"column"},n.createElement(s.X,{as:"h1",color:"white"},r),n.createElement(u.x,{textStyle:"prominent",color:"gray.100",maxWidth:"65ch"},d)),f)))}},1524:function(e,t,r){r.d(t,{I:function(){return f}});var n=r(7378),a=r(8615),o=r(3673),i=r(788),l=r(6218),u=r(3905),c=r(7654),s=r(2912),d=r(5093),m=r(4638),f=function(e){var t=e.posts,r=e.children;return n.createElement(s.A,{subnavigation:n.createElement(m.v,null)},n.createElement(c.f,null,r,n.createElement(a.W,{py:u.D.paddingMedium},t.nodes.length>0?n.createElement(o.r,{gridTemplateColumns:["1fr",null,"repeat(2, 1fr)"],gap:8,mx:["0",null,null,"-6"]},t.nodes.map((function(e){return n.createElement(d.Z,{key:e.slug,slug:e.slug,title:e.title,subtitle:e.subtitle,description:e.description})}))):n.createElement(i.x,{textStyle:"prominent"},"Sadly there's no content for this category available yet. Be sure to follow me on"," ",n.createElement(l.r,{href:"https://twitter.com/lekoarts_de"},"Twitter")," to not miss any announcements about new posts :)"))))}},4638:function(e,t,r){r.d(t,{v:function(){return c}});var n=r(7378),a=r(4339),o=r(5882),i=r(4126),l=r(5414),u=r(9455),c=function(){var e=(0,l.useStaticQuery)("1010836923").allCategory.nodes,t=(0,a.useColorModeValue)("blueGray.200","blueGray.700"),r=(0,a.useColorModeValue)("blueGray.400","blueGray.400");return n.createElement(o.k,{alignItems:"center",py:"2","data-name":"subnavigation",sx:{overflowX:"auto",overflowY:"hidden",scrollbarWidth:"thin",scrollbarColor:r+" "+t,"::-webkit-scrollbar":{height:"12px"},"::-webkit-scrollbar-track":{background:t,borderRadius:"6px"},"::-webkit-scrollbar-thumb":{backgroundColor:r,borderRadius:"8px",borderWidth:"3px",borderStyle:"solid",borderColor:t}}},n.createElement(i.Ug,{as:"ul",listStyleType:"none",spacing:"2",ml:"-2"},n.createElement("li",null,n.createElement(u.r,{to:"/writing",fontSize:"md",p:"2",activeClassName:"active",sx:{"&.active":{fontWeight:"semibold"}}},"Latest")),n.createElement("li",null,n.createElement(u.r,{to:"/tutorials",fontSize:"md",p:"2",activeClassName:"active",sx:{"&.active":{fontWeight:"semibold"}}},"Tutorials")),e.map((function(e){return n.createElement("li",{key:e.slug},n.createElement(u.r,{to:e.slug,fontSize:"md",p:"2",activeClassName:"active",sx:{"&.active":{fontWeight:"semibold"}}},e.name))}))))}},3905:function(e,t,r){r.d(t,{D:function(){return n}});var n={paddingLarge:[20,24,null,40,48],paddingMedium:[16,24,null,36,40],paddingSmall:[12,16,null,24,28]}},5859:function(e,t,r){r.r(t);var n=r(7378),a=r(7357),o=r(1524),i=r(1898);t.default=function(e){var t=e.data.posts,r="Tutorials",l="Tutorials across different categories in a longform format & with interactive elements";return n.createElement(o.I,{posts:t},n.createElement(i.H,{title:r,description:l,breadcrumbListItems:[{name:"Tutorials",url:"/tutorials"}]}),n.createElement(a.A,{bgGradient:"linear(to-t, blueGray.600, blueGray.900)",title:r,description:l}))}}}]);
//# sourceMappingURL=component---src-pages-tutorials-tsx-ea4a60aa8d22c10b0c85.js.map