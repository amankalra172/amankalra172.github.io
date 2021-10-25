"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[705],{8856:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return h},default:function(){return l}});var s=a(808),n=(a(7378),a(1368)),i=a(5666),o=a(1898),r=["components"],h={},d={_frontmatter:h},c=i.f;function l(e){var t=e.components,a=(0,s.Z)(e,r);return(0,n.mdx)(c,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(o.H,{title:"Projects",description:"Work Projects and Open Source Contributions explained with technical details and links to source code.",breadcrumbListItems:[{name:"Projects",url:"/projects"}],mdxType:"SEO"}),(0,n.mdx)("h1",{id:"projects"},"Projects"),(0,n.mdx)("h2",{id:"fast-refresh-integration-gatsby"},"Fast Refresh Integration (Gatsby)"),(0,n.mdx)("h3",{id:"code"},"Code"),(0,n.mdx)("p",null,"All of the frontend code lives inside the ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/gatsbyjs/gatsby/tree/d430823842800745107a441d2f6a6029d6b6c1d7/packages/gatsby/cache-dir/fast-refresh-overlay"},"cache-dir/fast-refresh-overlay")," folder, other bits like the webpack config are in other files inside the ",(0,n.mdx)("inlineCode",{parentName:"p"},"gatsby")," package."),(0,n.mdx)("h3",{id:"description"},"Description"),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-refresh"},"Fast Refresh")," is an implementation of Hot Reloading with full support from React. It was the goal to publish the Fast Refresh integration with the release of Gatsby v3 (see ",(0,n.mdx)("a",{parentName:"p",href:"https://www.gatsbyjs.com/docs/reference/release-notes/v3.0/#fast-refresh"},"release notes"),"). So on a tight deadline an accessible, responsive and most importantly helpful modal/error overlay had to be created. Since Fast Refresh relies on stricter “code style” rules (e.g. no anonymous exports, only one export per file) compared to previous Hot Reloading solutions two things had to be done: 1) Ensure that Gatsby’s frontend itself handles all possible files gracefully (e.g. MDX) and 2) that ESLint warnings were added to warn against those now bad code styles. The end result is an accessible modal (with focus trap, correct aria labels, respects ",(0,n.mdx)("inlineCode",{parentName:"p"},"prefers-*")," media queries) showing multiple types of errors. In addition, a public facing ",(0,n.mdx)("a",{parentName:"p",href:"https://www.gatsbyjs.com/docs/reference/local-development/fast-refresh/"},"Fast Refresh documentation page")," was written to inform users of how it works, limitations, and tips."),(0,n.mdx)("h2",{id:"file-system-route-api-gatsby"},"File System Route API (Gatsby)"),(0,n.mdx)("h3",{id:"code-1"},"Code"),(0,n.mdx)("p",null,"The relevant code was added to the existing ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/gatsbyjs/gatsby/tree/d430823842800745107a441d2f6a6029d6b6c1d7/packages/gatsby-plugin-page-creator"},"gatsby-plugin-page-creator")," package. ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/gatsbyjs/gatsby/pull/27424"},"Pull Request on GitHub"),"."),(0,n.mdx)("h3",{id:"description-1"},"Description"),(0,n.mdx)("p",null,"While the ",(0,n.mdx)("a",{parentName:"p",href:"https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/"},"File System Route API")," when I took the project over has already been in a beta stage for some weeks there was still much to do. Incorporating the bug reports and feature requests from the community, adding unit & end-to-end tests, writing documentation. A lot of work went into the polishing of this feature and ensuring that most common use cases were covered — since the goal of this new feature was to abstract some lower-level Gatsby APIs away into the filename itself. It greatly improved the DX of Gatsby and lowered the level of entry for each user. Challenges were different encodings/formats of file names, some feature requests from users, and the question of what the final API surface should look like. All the added tests and user interviews cleared a path for finding solutions before the GA release. An ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/gatsbyjs/gatsby/tree/d430823842800745107a441d2f6a6029d6b6c1d7/examples/route-api"},"example")," also shows the API in action."),(0,n.mdx)("h2",{id:"internalization-theme-gatsby"},"Internalization Theme (Gatsby)"),(0,n.mdx)("h3",{id:"code-2"},"Code"),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"https://github.com/gatsbyjs/themes/tree/692499ec782aae8b47bcd5aafbbe3cc565b9e429/packages/gatsby-theme-i18n"},"gatsby-theme-i18n")," + ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/gatsbyjs/themes/tree/692499ec782aae8b47bcd5aafbbe3cc565b9e429/packages/gatsby-theme-i18n-react-intl"},"gatsby-theme-i18n-react-intl")," / ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/gatsbyjs/themes/tree/692499ec782aae8b47bcd5aafbbe3cc565b9e429/packages/gatsby-theme-i18n-react-i18next"},"gatsby-theme-i18n-react-i18next")," / ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/gatsbyjs/themes/tree/692499ec782aae8b47bcd5aafbbe3cc565b9e429/packages/gatsby-theme-i18n-lingui"},"gatsby-theme-i18n-lingui")),(0,n.mdx)("h3",{id:"description-2"},"Description"),(0,n.mdx)("p",null,"As lead engineer on the Gatsby internalization (i18n) initiative, I knew right from the start that internationalization and localization are multi-faceted problems requiring an iterative solution process with involvement from the community. To best understand what this process should look like, I needed to identify the current pain points as well what future considerations need to be kept in mind in designing a solution. With these in mind, I started researching the current i18n ecosystem in Gatsby. I published the article ",(0,n.mdx)("a",{parentName:"p",href:"https://www.gatsbyjs.com/blog/2020-07-13-i18n-pain-points/"},"Research on i18n with Gatsby")," to invite people to give feedback and work together on the identified pain points. The announcement article ",(0,n.mdx)("a",{parentName:"p",href:"https://www.gatsbyjs.com/blog/2020-07-28-introducing-gatsby-i18n-theme/"},"Gatsby Goes Global: Announcing Gatsby’s Official i18n Theme")," lays out the problems I hit and the solutions I found for integrating third-party libraries together with Gatsby. The users are now able to combine the main theme with a theme of their choice to have instant support for most common i18n use cases."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-projects-mdx-8cd7b1af9a3752ebbfdf.js.map