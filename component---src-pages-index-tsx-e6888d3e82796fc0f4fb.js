"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[691],{3673:function(e,t,a){a.d(t,{r:function(){return o}});var n=a(2308),r=a(1157),A=a(6259),i=a(7378);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r={},A=Object.keys(e);for(n=0;n<A.length;n++)a=A[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var o=(0,n.G)((function(e,t){var a=e.area,n=e.templateAreas,A=e.gap,o=e.rowGap,s=e.columnGap,p=e.column,d=e.row,u=e.autoFlow,f=e.autoRows,g=e.templateRows,m=e.autoColumns,b=e.templateColumns,w=l(e,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),h={display:"grid",gridArea:a,gridTemplateAreas:n,gridGap:A,gridRowGap:o,gridColumnGap:s,gridAutoColumns:m,gridColumn:p,gridRow:d,gridAutoFlow:u,gridAutoRows:f,gridTemplateRows:g,gridTemplateColumns:b};return i.createElement(r.m$.div,c({ref:t,__css:h},w))}));A.Ts&&(o.displayName="Grid")},9684:function(e,t,a){a.d(t,{X:function(){return p}});var n=a(2308),r=a(2784),A=a(5937),i=a(1157),c=a(8193),l=a(6259),o=a(7378);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}var p=(0,n.G)((function(e,t){var a=(0,r.m)("Heading",e),n=function(e,t){if(null==e)return{};var a,n,r={},A=Object.keys(e);for(n=0;n<A.length;n++)a=A[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}((0,A.Lr)(e),["className"]);return o.createElement(i.m$.h2,s({ref:t,className:(0,c.cx)("chakra-heading",e.className)},n,{__css:a}))}));l.Ts&&(p.displayName="Heading")},788:function(e,t,a){a.d(t,{x:function(){return d}});var n=a(2308),r=a(2784),A=a(5937),i=a(1157),c=a(3920),l=a(8193),o=a(6259),s=a(7378);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p.apply(this,arguments)}var d=(0,n.G)((function(e,t){var a=(0,r.m)("Text",e),n=function(e,t){if(null==e)return{};var a,n,r={},A=Object.keys(e);for(n=0;n<A.length;n++)a=A[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}((0,A.Lr)(e),["className","align","decoration","casing"]),o=(0,c.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return s.createElement(i.m$.p,p({ref:t,className:(0,l.cx)("chakra-text",e.className)},o,n,{__css:a}))}));o.Ts&&(d.displayName="Text")},9931:function(e,t,a){a.d(t,{T:function(){return l}});var n=a(1026),r=a(6994),A=a(8193),i=a(7378),c=A.jU?i.useLayoutEffect:i.useEffect;function l(){var e,t,a,l,o,s,p,d,u=(e="(prefers-reduced-motion: reduce)",t=(0,r.O)(),a=Array.isArray(e)?e:[e],l=A.jU&&"matchMedia"in t.window,o=i.useState(a.map((function(e){return!!l&&!!t.window.matchMedia(e).matches}))),s=(0,n.Z)(o,2),p=s[0],d=s[1],c((function(){if(l){var e=a.map((function(e){return t.window.matchMedia(e)})),n=e.map((function(e,t){var a=function(){return d((function(a){return a.map((function(a,n){return t===n?!!e.matches:a}))}))};return e.addListener(a),a}));return function(){e.forEach((function(e,t){e.removeListener(n[t])}))}}}),[e]),p);return(0,n.Z)(u,1)[0]}},5850:function(e,t,a){a.d(t,{u:function(){return s}});var n=a(808),r=a(7378),A=a(9931),i=a(9778),c={transform:"translate3d(0, 0, 0)",transition:"transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"},l={transform:"translate3d(0, -8px, 0)",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},o=["children"],s=function(e){var t=e.children,a=(0,n.Z)(e,o),s=(0,A.T)();return r.createElement(i.xu,Object.assign({transition:c.transition,transform:c.transform,_hover:s?{}:{transform:l.transform,boxShadow:l.boxShadow}},a),t)}},9424:function(e,t,a){a.d(t,{KM:function(){return s},Yl:function(){return p},fy:function(){return u},AN:function(){return f}});var n=a(7378),r=a(5414),A=a(7469),i=a(7566),c=a(3520),l=a(9931),o=a(6138),s=function(e){var t=e.children,a=e.to,i=e.isExternal,c=void 0!==i&&i,s=(0,l.T)();return n.createElement(o.z,{as:c?"a":r.Link,to:c?void 0:a,href:c?a:void 0,variant:"primary",rightIcon:n.createElement(A.lzl,null),sx:{span:{transform:"translate3d(0px, 0px, 0px)",transition:"transform .3s cubic-bezier(.73,.26,.42,1.24)"},"&:hover":{span:{transform:s?void 0:"translate3d(6px, 0px, 0px)"}},svg:{height:"1.5em",width:"1.5em"}}},t)},p=function(e){var t=e.children,a=e.to,i=e.isExternal,c=void 0!==i&&i,s=(0,l.T)();return n.createElement(o.z,{as:c?"a":r.Link,to:c?void 0:a,href:c?a:void 0,colorScheme:"gray",variant:"link",textTransform:"uppercase",letterSpacing:"wider",fontSize:["xs","sm"],fontWeight:"medium",rightIcon:n.createElement(A.lzl,null),sx:{span:{transform:"translate3d(0px, 0px, 0px)",transition:"transform .3s cubic-bezier(.73,.26,.42,1.24)"},"&:hover":{span:{transform:s?void 0:"translate3d(6px, 0px, 0px)"}},svg:{height:"1.5em",width:"1.5em"}}},t)},d=function(e,t){return"https://twitter.com/intent/tweet/?text="+encodeURIComponent(t)+"&via=lekoarts_de&url="+encodeURIComponent(e)},u=function(e){var t=e.link,a=e.message,r=e.variant,A=void 0===r?"primary":r;return n.createElement(o.z,{as:"a",href:d(t,a),target:"_blank",rel:"noreferrer noopener",size:"md",variant:A,rightIcon:n.createElement(i.fWC,null)},"Share on Twitter")},f=function(e){var t=e.link,a=e.message,r=e.variant,A=void 0===r?"primary":r;return n.createElement(o.z,{onClick:function(e){e.preventDefault(),navigator.share({title:a,text:a+" by Lennart Jörgens (@lekoarts_de)",url:t}).then((function(){return console.log("Successful share of "+t)})).catch((function(e){return console.log("Error sharing "+t,e)}))},size:"md",variant:A,rightIcon:n.createElement(c.A8q,null)},"Share Anywhere")}},1261:function(e,t,a){a.d(t,{X:function(){return c}});var n=a(808),r=a(7378),A=a(9684),i=["as","children"],c=function(e){var t=e.as,a=e.children,c=(0,n.Z)(e,i);return r.createElement(A.X,Object.assign({as:t,variant:t},c),a)}},3905:function(e,t,a){a.d(t,{D:function(){return n}});var n={paddingLarge:[20,24,null,40,48],paddingMedium:[16,24,null,36,40],paddingSmall:[12,16,null,24,28]}},6321:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var n=a(649),r=a(7378),A=a(9512),i=a(2308),c=a(2784),l=a(5937),o=a(1157),s=a(8193),p=a(6259);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}var u=(0,i.G)((function(e,t){var a=(0,c.m)("Badge",e),n=function(e,t){if(null==e)return{};var a,n,r={},A=Object.keys(e);for(n=0;n<A.length;n++)a=A[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}((0,l.Lr)(e),["className"]);return r.createElement(o.m$.span,d({ref:t,className:(0,s.cx)("chakra-badge",e.className)},n,{__css:d({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},a)}))}));p.Ts&&(u.displayName="Badge");var f=a(9931),g=a(4126),m=a(788),b=a(6218),w=a(9778),h=a(5882),E=a(3673),x=a(8615),v=a(9455),B=a(2912),Q=a(5850),F=a(6723),y=a(8610),D=a(7654),I=a(1261),C=a(9424),U=a(3905),R=a(1898),M=a(9953),k=["linear(to-tr, #A774F2, #F25D76, #FF964F)","linear(to-tr, #9B7BFE, #54B5F0, #88F2A9)","linear(to-tr, #933890, #E08896, #CC98DD, #D1CEE2)","linear(to-tr, #6666DE, #5778C9, #94D1C9, #A1D8FF)","linear(to-tr, #3e206d, #af3942, #d66a38, #eacc15)","linear(to-tr, #511a2a, #cb598d, #b24ecb, #ebb8eb)"],j=[{name:"Getting started",url:"https://loophole.cloud/blog/get-started-with-loophole"},{name:"Download",url:"https://loophole.cloud/download"},{name:"Docs",url:"https://loophole.cloud/docs"},{name:"Twitter",url:"https://twitter.com/loophole_cloud"}],S=function(e){var t=e.data,i=(0,f.T)(),c=t.posts.nodes,l=c[0],o=c.slice(1),s=(0,n.Z)(o);return r.createElement(B.A,null,r.createElement(R.H,null,r.createElement("script",{type:"application/ld+json"},JSON.stringify(M.Xh))),r.createElement(D.f,null,r.createElement(F.f,{variant:"hero"},r.createElement(g.Kq,{align:"center",spacing:"5",py:U.D.paddingLarge},r.createElement(I.X,{as:"h1"},"Hi, I’m Aman Kalra!"),r.createElement(m.x,{variant:"prominent",maxWidth:"45ch",textAlign:"center"},r.createElement("strong",null,"Product Management Intern")," from Germany. ",r.createElement("br",null),"I’m passionate about products and data! Curious about its place in the businesses and future sustainability."),r.createElement(m.x,{variant:"prominent",maxWidth:"40ch",textAlign:"center"},"I’m currently working at ",r.createElement(b.r,{href:"https://www.main.dev"},"Main.Dev")," on their open source project : ",r.createElement(b.r,{href:"https://loophole.cloud/"},"Loophole"),"."))),r.createElement(F.f,{variant:"light"},r.createElement(g.Kq,{alignItems:"flex-start",spacing:24,py:U.D.paddingMedium},r.createElement(g.Kq,{alignItems:"flex-start",spacing:[6,8]},r.createElement(u,{variant:"light"},"Latest Post"),r.createElement(w.xu,null,r.createElement(I.X,{as:"h2"},l.title),r.createElement(m.x,{variant:"lightContainer"},l.description)),r.createElement(C.KM,{to:l.slug},"Continue Reading")),r.createElement(g.Kq,{direction:"column",width:"100%",spacing:6},r.createElement(h.k,{justifyContent:"space-between",alignItems:"center"},r.createElement(u,{variant:"light"},"More Posts"),r.createElement(C.Yl,{to:"/writing"},"Read all")),r.createElement(E.r,{templateColumns:["repeat(1, 1fr)",null,"repeat(3, 1fr)"],gap:[4,null,8]},s.map((function(e,t){return r.createElement(v.r,{to:e.slug,key:e.slug,borderRadius:"lg",_hover:{textDecoration:"none",boxShadow:i?"outline":null}},r.createElement(Q.u,{bgGradient:k[t],p:4,borderRadius:"lg",height:["150px",null,null,"200px","250px"],boxShadow:"lg",display:"flex",alignItems:"flex-end",color:"white",fontSize:["lg",null,"md","1.125rem","1.3125rem"],sx:{textShadow:"0 1px 2px rgba(0, 0, 0, 0.5)"}},e.title))})))),r.createElement(g.Kq,{direction:"column",width:"100%",spacing:6},r.createElement(h.k,{justifyContent:"space-between",alignItems:"center"},r.createElement(u,{variant:"light"},"Digital Garden"),r.createElement(C.Yl,{to:"/garden"},"Read all")),r.createElement(E.r,{templateColumns:["repeat(1, 1fr)",null,"repeat(3, 1fr)"],gap:[4,null,8]},t.garden.nodes.map((function(e,t){return r.createElement(v.r,{to:e.slug,key:e.slug,borderRadius:"lg",_hover:{textDecoration:"none",boxShadow:i?"outline":null}},r.createElement(Q.u,{bgGradient:k[t+3],p:4,borderRadius:"lg",height:["125px",null,null,"175px"],boxShadow:"lg",display:"flex",alignItems:"flex-end",color:"white",fontSize:["lg",null,"md","1.125rem","1.3125rem"],sx:{textShadow:"0 1px 2px rgba(0, 0, 0, 0.5)"}},e.title))})))),r.createElement(g.Kq,{direction:"column",width:"100%",spacing:6},r.createElement(h.k,{justifyContent:"space-between",alignItems:"center"},r.createElement(u,{variant:"light"},"NFTs"),r.createElement(C.Yl,{to:"/nfts"},"My Latest NFts")),r.createElement(E.r,{gridTemplateColumns:["repeat(1, 1fr)",null,"repeat(2, 1fr)"],gap:[4,null,8]},r.createElement(v.r,{to:"/nfts","aria-label":"Read about NFTs",borderRadius:"lg",_hover:{boxShadow:i?"outline":null}},r.createElement(Q.u,{sx:{".gatsby-image-wrapper":{borderRadius:"lg",verticalAlign:"top"},img:{borderRadius:"lg"},boxShadow:"lg",height:"100%",width:"100%",borderRadius:"lg"}},r.createElement(A.S,{src:"../images/pages-index-nfts-preview-1.jpg",alt:"",layout:"constrained",quality:90,formats:["auto","webp","avif"],placeholder:"blurred",width:720,aspectRatio:16/9,__imageData:a(1041)}))),r.createElement(v.r,{to:"/nfts","aria-label":"Read about NFTs",borderRadius:"lg",_hover:{boxShadow:i?"outline":null}},r.createElement(Q.u,{sx:{".gatsby-image-wrapper":{borderRadius:"lg",verticalAlign:"top"},img:{borderRadius:"lg"},boxShadow:"lg",height:"100%",width:"100%",borderRadius:"lg"}},r.createElement(A.S,{src:"../images/pages-index-nfts-preview-2.jpg",alt:"",layout:"constrained",quality:90,formats:["auto","webp","avif"],placeholder:"blurred",width:720,aspectRatio:16/9,__imageData:a(6514)}))))))),r.createElement(x.W,null,r.createElement(h.k,{alignItems:"center",flexDirection:"column",py:U.D.paddingLarge},r.createElement(I.X,{as:"h2"},"Loophole.Cloud"),r.createElement(m.x,{variant:"prominent",maxWidth:"40ch",textAlign:"center"},"Working with one of the most enthusiastic team to build and maintain Loophole, accessible to everyone fills me with joy."),r.createElement(y.L,{axis:"vertical",size:20}),r.createElement(g.Kq,{direction:"column",width:"100%",spacing:6},r.createElement(h.k,{justifyContent:"space-between",alignItems:"center"},r.createElement(u,{variant:"dark"},"Links"),r.createElement(C.Yl,{isExternal:!0,to:"https://loophole.cloud/"},"Know More!")),r.createElement(h.k,{justifyContent:"space-between",flexWrap:"wrap"},j.map((function(e){return r.createElement(b.r,{key:e.url,href:e.url,p:2},e.name)}))))))))}},1041:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAFgEBAQEAAAAAAAAAAAAAAAAABQIE/9oADAMBAAIQAxAAAAGIost2wZeXGe//xAAcEAADAAEFAAAAAAAAAAAAAAADBAUCExQVMzT/2gAIAQEAAQUCTs7dOIDkiUzazw+wYMBI2/f/AP/EABkRAQACAwAAAAAAAAAAAAAAAAEAEQMSQf/aAAgBAwEBPwHGbCvIlNT/xAAaEQACAgMAAAAAAAAAAAAAAAAAAQISAyEx/9oACAECAQE/Ac6oo16xT0f/xAAiEAACAQQBBAMAAAAAAAAAAAABAgMABBEhMUFygZGy0eH/2gAIAQEABj8CktbUmFzszLnJ/Kt5pc3DxksXfh969VKXaKQhjs6619VDEq4jXhfNHsT4iv/EAB0QAQACAgIDAAAAAAAAAAAAAAEAESFBMXFRYcH/2gAIAQEAAT8hbPPv7Al58Ij1IhNQrqj3fMcLg7h+zOtoLWVbls4mR2l7hvBI/9oADAMBAAIAAwAAABCL/wD/xAAaEQACAgMAAAAAAAAAAAAAAAAAAREhMbHx/9oACAEDAQE/EIoUnNCHQwf/xAAZEQEAAwEBAAAAAAAAAAAAAAABABExIfD/2gAIAQIBAT8QLMVp2vcjIVZ//8QAGRABAQEBAQEAAAAAAAAAAAAAAREhADFR/9oACAEBAAE/EC14ARlhRDBiQTaOPENEMQqKk1HBMllXGGWevTN633wEszMn14JBiwAEa2nW3gVAviTr/9k="},"images":{"fallback":{"src":"/static/bd16b04c606a247993caf1c16f5e21f2/c9d8b/pages-index-nfts-preview-1.jpg","srcSet":"/static/bd16b04c606a247993caf1c16f5e21f2/a894b/pages-index-nfts-preview-1.jpg 180w,\\n/static/bd16b04c606a247993caf1c16f5e21f2/fe098/pages-index-nfts-preview-1.jpg 360w,\\n/static/bd16b04c606a247993caf1c16f5e21f2/c9d8b/pages-index-nfts-preview-1.jpg 720w","sizes":"(min-width: 720px) 720px, 100vw"},"sources":[{"srcSet":"/static/bd16b04c606a247993caf1c16f5e21f2/61c0f/pages-index-nfts-preview-1.avif 180w,\\n/static/bd16b04c606a247993caf1c16f5e21f2/234d2/pages-index-nfts-preview-1.avif 360w,\\n/static/bd16b04c606a247993caf1c16f5e21f2/51400/pages-index-nfts-preview-1.avif 720w","type":"image/avif","sizes":"(min-width: 720px) 720px, 100vw"},{"srcSet":"/static/bd16b04c606a247993caf1c16f5e21f2/3b815/pages-index-nfts-preview-1.webp 180w,\\n/static/bd16b04c606a247993caf1c16f5e21f2/bfe4b/pages-index-nfts-preview-1.webp 360w,\\n/static/bd16b04c606a247993caf1c16f5e21f2/714a2/pages-index-nfts-preview-1.webp 720w","type":"image/webp","sizes":"(min-width: 720px) 720px, 100vw"}]},"width":720,"height":405}')},6514:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUCAwb/xAAVAQEBAAAAAAAAAAAAAAAAAAAGB//aAAwDAQACEAMQAAABYSVJkoXdlImm/wD/xAAdEAABBAIDAAAAAAAAAAAAAAADAAEEBQIREiEz/9oACAEBAAEFAphRYCeLAqRq27WuLg8f/8QAHhEAAQMEAwAAAAAAAAAAAAAAAgABAwQFEVESI3H/2gAIAQMBAT8Bs8EI0Ixm792vcIx4G46X/8QAGhEAAQUBAAAAAAAAAAAAAAAAAgABBBESIv/aAAgBAgEBPwGaRlI21cIX01r/xAAhEAABBAEDBQAAAAAAAAAAAAABAAIDESEEEkEQIjFxgf/aAAgBAQAGPwLbNlj+2lJJpTGNzxHK2MHB+8YPRo4TaJ8gVaZ6X//EAB0QAAICAgMBAAAAAAAAAAAAAAERADEhcUFRgZH/2gAIAQEAAT8hXhlio7hgAA0UYAQaFm43mWNgiPZwhsJHyGznrP/aAAwDAQACAAMAAAAQxy//xAAaEQEBAAIDAAAAAAAAAAAAAAABEQAhMUGR/9oACAEDAQE/EL5tWoEYnZo3zcdttJ4zP//EABoRAAIDAQEAAAAAAAAAAAAAAAERACExUWH/2gAIAQIBAT8QKAphjaBvvkS9hz//xAAeEAEBAAICAgMAAAAAAAAAAAABEQAhMVFBYYGRsf/aAAgBAQABPxAke1EB5qkOLG9YBpLUnQzfzIVNMAANHY952g/oO/4fWGvhAotnJlillK94ryrd+DP/2Q=="},"images":{"fallback":{"src":"/static/81b9233939cec6081b222bbac4f90dc0/c9d8b/pages-index-nfts-preview-2.jpg","srcSet":"/static/81b9233939cec6081b222bbac4f90dc0/a894b/pages-index-nfts-preview-2.jpg 180w,\\n/static/81b9233939cec6081b222bbac4f90dc0/fe098/pages-index-nfts-preview-2.jpg 360w,\\n/static/81b9233939cec6081b222bbac4f90dc0/c9d8b/pages-index-nfts-preview-2.jpg 720w,\\n/static/81b9233939cec6081b222bbac4f90dc0/40ea5/pages-index-nfts-preview-2.jpg 1440w","sizes":"(min-width: 720px) 720px, 100vw"},"sources":[{"srcSet":"/static/81b9233939cec6081b222bbac4f90dc0/61c0f/pages-index-nfts-preview-2.avif 180w,\\n/static/81b9233939cec6081b222bbac4f90dc0/234d2/pages-index-nfts-preview-2.avif 360w,\\n/static/81b9233939cec6081b222bbac4f90dc0/51400/pages-index-nfts-preview-2.avif 720w,\\n/static/81b9233939cec6081b222bbac4f90dc0/b33dc/pages-index-nfts-preview-2.avif 1440w","type":"image/avif","sizes":"(min-width: 720px) 720px, 100vw"},{"srcSet":"/static/81b9233939cec6081b222bbac4f90dc0/3b815/pages-index-nfts-preview-2.webp 180w,\\n/static/81b9233939cec6081b222bbac4f90dc0/bfe4b/pages-index-nfts-preview-2.webp 360w,\\n/static/81b9233939cec6081b222bbac4f90dc0/714a2/pages-index-nfts-preview-2.webp 720w,\\n/static/81b9233939cec6081b222bbac4f90dc0/7fee6/pages-index-nfts-preview-2.webp 1440w","type":"image/webp","sizes":"(min-width: 720px) 720px, 100vw"}]},"width":720,"height":405}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e6888d3e82796fc0f4fb.js.map