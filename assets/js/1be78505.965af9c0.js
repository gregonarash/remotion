"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9514,837],{57522:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return i},MDXProvider:function(){return s},mdx:function(){return b},useMDXComponents:function(){return f},withMDXComponents:function(){return c}});var n=a(29901);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),c=function(e){return function(t){var a=f(t.components);return n.createElement(e,r({},t,{components:a}))}},f=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},s=function(e){var t=f(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),c=f(a),s=l,p=c["".concat(o,".").concat(s)]||c[s]||m[s]||r;return a?n.createElement(p,u(u({ref:t},i),{},{components:a})):n.createElement(p,u({ref:t},i))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=p;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var i=2;i<r;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},66193:function(e,t,a){var n=a(66664).default,l=a(32089).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(29901)),o=n(a(25789)),u=a(83669),d=n(a(10953)),i=a(97307);function c(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var f=function(){var e,t=(0,r.useState)(!1),a=t[0],n=t[1],l=(0,r.useRef)(!1),f=c(),s=f.smoothScrollTop,m=f.cancelScrollToTop;return(0,i.useScrollPosition)((function(e,t){var a=e.scrollY,r=null==t?void 0:t.scrollY;if(r)if(l.current)l.current=!1;else{var o=a<r;if(o||m(),a<300)n(!1);else if(o){var u=document.documentElement.scrollHeight;a+window.innerHeight<u&&n(!0)}else n(!1)}})),(0,i.useLocationChange)((function(e){e.location.hash&&(l.current=!0,n(!1))})),r.default.createElement("button",{"aria-label":(0,u.translate)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.default)("clean-btn",i.ThemeClassNames.common.backToTopButton,d.default.backToTopButton,(e={},e[d.default.backToTopButtonShow]=a,e)),type:"button",onClick:function(){return s()}})};t.default=f},37568:function(e,t,a){var n=a(66664).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=Object.assign({},e);return r.default.createElement(u.Details,(0,l.default)({},t,{className:(0,o.default)("alert alert--info",d.default.details,t.className)}))};var l=n(a(3920)),r=n(a(29901)),o=n(a(25789)),u=a(97307),d=n(a(57500))},83757:function(e,t,a){var n=a(66664).default,l=a(32089).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(29901)),o=a(57522),u=n(a(83882)),d=n(a(52339)),i=n(a(81522)),c=n(a(50449)),f=n(a(30837)),s=n(a(64116)),m=n(a(66193)),p=a(59309),b=a(83669),v=n(a(25789)),h=n(a(3424)),E=a(97307),y=n(a(91858));function g(e){var t,a,n,l=e.currentDocRoute,u=e.versionMetadata,f=e.children,p=u.pluginId,y=u.version,g=l.sidebar,C=g?u.docsSidebars[g]:void 0,T=(0,r.useState)(!1),_=T[0],S=T[1],k=(0,r.useState)(!1),N=k[0],O=k[1],P=(0,r.useCallback)((function(){N&&O(!1),S(!_)}),[N]);return r.default.createElement(d.default,{wrapperClassName:E.ThemeClassNames.wrapper.docsPages,pageClassName:E.ThemeClassNames.page.docsDocPage,searchMetadatas:{version:y,tag:(0,E.docVersionSearchTag)(p,y)}},r.default.createElement("div",{className:h.default.docPage},r.default.createElement(m.default,null),C&&r.default.createElement("aside",{className:(0,v.default)(h.default.docSidebarContainer,(t={},t[h.default.docSidebarContainerHidden]=_,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(h.default.docSidebarContainer)&&_&&O(!0)}},r.default.createElement(i.default,{key:g,sidebar:C,path:l.path,onCollapse:P,isHidden:N}),N&&r.default.createElement("div",{className:h.default.collapsedDocSidebar,title:(0,b.translate)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.translate)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:P,onClick:P},r.default.createElement(s.default,{className:h.default.expandSidebarButtonIcon}))),r.default.createElement("main",{className:(0,v.default)(h.default.docMainContainer,(a={},a[h.default.docMainContainerEnhanced]=_||!C,a))},r.default.createElement("div",{className:(0,v.default)("container padding-top--md padding-bottom--lg",h.default.docItemWrapper,(n={},n[h.default.docItemWrapperEnhanced]=_,n))},r.default.createElement(o.MDXProvider,{components:c.default},f)))))}var C=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,l=t.find((function(e){return(0,p.matchPath)(n.pathname,e)}));return l?r.default.createElement(r.default.Fragment,null,r.default.createElement(y.default,null,r.default.createElement("html",{className:a.className})),r.default.createElement(g,{currentDocRoute:l,versionMetadata:a},(0,u.default)(t,{versionMetadata:a}))):r.default.createElement(f.default,e)};t.default=C},81522:function(e,t,a){var n=a(66664).default,l=a(32089).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,d.default)(),a="desktop"===t||"ssr"===t,n="mobile"===t;return r.default.createElement(r.default.Fragment,null,a&&r.default.createElement(E,e),n&&r.default.createElement(y,e))};var r=l(a(29901)),o=n(a(25789)),u=a(97307),d=n(a(95360)),i=n(a(79046)),c=n(a(64116)),f=a(83669),s=a(37600),m=n(a(62061));function p(e){var t=e.onClick;return r.default.createElement("button",{type:"button",title:(0,f.translate)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,f.translate)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.default)("button button--secondary button--outline",m.default.collapseSidebarButton),onClick:t},r.default.createElement(c.default,{className:m.default.collapseSidebarButtonIcon}))}function b(e){var t,a,n=e.path,l=e.sidebar,d=e.onCollapse,c=e.isHidden,f=function(){var e=(0,u.useAnnouncementBar)().isActive,t=(0,r.useState)(e),a=t[0],n=t[1];return(0,u.useScrollPosition)((function(t){var a=t.scrollY;e&&n(0===a)}),[e]),e&&a}(),b=(0,u.useThemeConfig)(),v=b.navbar.hideOnScroll,h=b.hideableSidebar;return r.default.createElement("div",{className:(0,o.default)(m.default.sidebar,(t={},t[m.default.sidebarWithHideableNavbar]=v,t[m.default.sidebarHidden]=c,t))},v&&r.default.createElement(i.default,{tabIndex:-1,className:m.default.sidebarLogo}),r.default.createElement("nav",{className:(0,o.default)("menu thin-scrollbar",m.default.menu,(a={},a[m.default.menuWithAnnouncementBar]=f,a))},r.default.createElement("ul",{className:(0,o.default)(u.ThemeClassNames.docs.docSidebarMenu,"menu__list")},r.default.createElement(s.DocSidebarItems,{items:l,activePath:n,level:1}))),h&&r.default.createElement(p,{onClick:d}))}var v=function(e){var t=e.toggleSidebar,a=e.sidebar,n=e.path;return r.default.createElement("ul",{className:(0,o.default)(u.ThemeClassNames.docs.docSidebarMenu,"menu__list")},r.default.createElement(s.DocSidebarItems,{items:a,activePath:n,onItemClick:function(){return t()},level:1}))};function h(e){return r.default.createElement(u.MobileSecondaryMenuFiller,{component:v,props:e})}var E=r.default.memo(b),y=r.default.memo(h)},37600:function(e,t,a){var n=a(66664).default,l=a(32089).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=g,t.DocSidebarItems=void 0;var r=n(a(3920)),o=n(a(50264)),u=l(a(29901)),d=n(a(25789)),i=a(97307),c=n(a(10302)),f=n(a(19340)),s=n(a(93875)),m=n(a(90503)),p=["items"],b=["item"],v=["item","onItemClick","activePath","level"],h=["item","onItemClick","activePath","level"],E=function e(t,a){return"link"===t.type?(0,i.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},y=(0,u.memo)((function(e){var t=e.items,a=(0,o.default)(e,p);return u.default.createElement(u.default.Fragment,null,t.map((function(e,t){return u.default.createElement(g,(0,r.default)({key:t,item:e},a))})))}));function g(e){var t=e.item,a=(0,o.default)(e,b);return"category"===t.type?0===t.items.length?null:u.default.createElement(C,(0,r.default)({item:t},a)):u.default.createElement(T,(0,r.default)({item:t},a))}function C(e){var t,a=e.item,n=e.onItemClick,l=e.activePath,c=e.level,f=(0,o.default)(e,v),s=a.items,p=a.label,b=a.collapsible,h=a.className,g=E(a,l),C=(0,i.useCollapsible)({initialState:function(){return!!b&&(!g&&a.collapsed)}}),T=C.collapsed,_=C.setCollapsed,S=C.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,n=e.setCollapsed,l=(0,i.usePrevious)(t);(0,u.useEffect)((function(){t&&!l&&a&&n(!1)}),[t,l,a])}({isActive:g,collapsed:T,setCollapsed:_}),u.default.createElement("li",{className:(0,d.default)(i.ThemeClassNames.docs.docSidebarItemCategory,i.ThemeClassNames.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":T},h)},u.default.createElement("a",(0,r.default)({className:(0,d.default)("menu__link",(t={"menu__link--sublist":b,"menu__link--active":b&&g},t[m.default.menuLinkText]=!b,t)),onClick:b?function(e){e.preventDefault(),S()}:void 0,href:b?"#":void 0},f),p),u.default.createElement(i.Collapsible,{lazy:!0,as:"ul",className:"menu__list",collapsed:T},u.default.createElement(y,{items:s,tabIndex:T?-1:0,onItemClick:n,activePath:l,level:c+1})))}function T(e){var t=e.item,a=e.onItemClick,n=e.activePath,l=e.level,m=(0,o.default)(e,h),p=t.href,b=t.label,v=t.className,y=E(t,n);return u.default.createElement("li",{className:(0,d.default)(i.ThemeClassNames.docs.docSidebarItemLink,i.ThemeClassNames.docs.docSidebarItemLinkLevel(l),"menu__list-item",v),key:b},u.default.createElement(c.default,(0,r.default)({className:(0,d.default)("menu__link",{"menu__link--active":y}),"aria-current":y?"page":void 0,to:p},(0,f.default)(p)&&{onClick:a},m),(0,f.default)(p)?b:u.default.createElement("span",null,b,u.default.createElement(s.default,null))))}t.DocSidebarItems=y},93819:function(e,t,a){var n=a(66664).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MainHeading=void 0;var l=n(a(50264)),r=n(a(3920)),o=n(a(29901)),u=n(a(25789)),d=a(83669),i=a(97307);a(61087);var c=n(a(90471)),f=["id"],s=function(e){var t=Object.assign({},e);return o.default.createElement("header",null,o.default.createElement("h1",(0,r.default)({},t,{id:void 0}),t.children))};t.MainHeading=s;var m=function(e){return"h1"===e?s:(t=e,function(e){var a,n=e.id,s=(0,l.default)(e,f),m=(0,i.useThemeConfig)().navbar.hideOnScroll;return n?o.default.createElement(t,(0,r.default)({},s,{className:(0,u.default)("anchor",(a={},a[c.default.anchorWithHideOnScrollNavbar]=m,a[c.default.anchorWithStickyNavbar]=!m,a)),id:n}),s.children,o.default.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+n,title:(0,d.translate)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.default.createElement(t,s)});var t};t.default=m},64116:function(e,t,a){var n=a(66664).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(3920)),r=n(a(29901)),o=function(e){return r.default.createElement("svg",(0,l.default)({width:"20",height:"20","aria-hidden":"true"},e),r.default.createElement("g",{fill:"#7a7a7a"},r.default.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.default.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))};t.default=o},48986:function(e,t,a){var n=a(66664).default,l=a(32089).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(3920)),o=n(a(50264)),u=l(a(29901)),d=n(a(91858)),i=n(a(10302)),c=n(a(24417)),f=n(a(93819)),s=n(a(37568));a(90133);var m=["mdxType","originalType"];var p={head:function(e){var t=u.default.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var n=e.props,l=(n.mdxType,n.originalType,(0,o.default)(n,m));return u.default.createElement(e.props.originalType,l)}return e}(e)}));return u.default.createElement(d.default,e,t)},code:function(e){var t=e.children;return(0,u.isValidElement)(t)?t:t.includes("\n")?u.default.createElement(c.default,e):u.default.createElement("code",e)},a:function(e){return u.default.createElement(i.default,e)},pre:function(e){var t,a=e.children;return(0,u.isValidElement)(a)&&(0,u.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?a.props.children:u.default.createElement(c.default,(0,u.isValidElement)(a)?null==a?void 0:a.props:Object.assign({},e))},details:function(e){var t=u.default.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),n=u.default.createElement(u.default.Fragment,null,t.filter((function(e){return e!==a})));return u.default.createElement(s.default,(0,r.default)({},e,{summary:a}),n)},h1:(0,f.default)("h1"),h2:(0,f.default)("h2"),h3:(0,f.default)("h3"),h4:(0,f.default)("h4"),h5:(0,f.default)("h5"),h6:(0,f.default)("h6")};t.default=p},30837:function(e,t,a){var n=a(32089).default,l=a(66664).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(29901)),o=l(a(52339)),u=n(a(83669));var d=function(){return r.default.createElement(o.default,{title:(0,u.translate)({id:"theme.NotFound.title",message:"Page Not Found"})},r.default.createElement("main",{className:"container margin-vert--xl"},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col col--6 col--offset-3"},r.default.createElement("h1",{className:"hero__title"},r.default.createElement(u.default,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.default.createElement("p",null,r.default.createElement(u.default,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.default.createElement("p",null,r.default.createElement(u.default,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))};t.default=d},80878:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.copyTextToClipboard=function(e,t){var a=(void 0===t?{}:t).target,n=void 0===a?document.body:a,l=document.createElement("textarea"),r=document.activeElement;l.value=e,l.setAttribute("readonly",""),l.style.contain="strict",l.style.position="absolute",l.style.left="-9999px",l.style.fontSize="12pt";var o=document.getSelection(),u=!1;o.rangeCount>0&&(u=o.getRangeAt(0));n.append(l),l.select(),l.selectionStart=0,l.selectionEnd=e.length;var d=!1;try{d=document.execCommand("copy")}catch(i){}l.remove(),u&&(o.removeAllRanges(),o.addRange(u));r&&r.focus();return d}},24417:function(e,t,a){var n=a(66664).default,l=a(32089).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(3920)),o=n(a(50264));a(76093);var u=l(a(29901)),d=l(a(83669)),i=a(80878),c=["children"],f=function(e){var t=e.children,a=(0,o.default)(e,c),n=(0,u.useRef)(null),l=(0,u.useState)(!1),f=l[0],s=l[1];return u.default.createElement("pre",(0,r.default)({},a,{ref:n}),t,u.default.createElement("button",{type:"button","aria-label":(0,d.translate)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:"copy-button",onClick:function(){n.current&&(0,i.copyTextToClipboard)(Array.from(n.current.querySelectorAll("code div.line")).map((function(e){return e.textContent})).join("\n")),s(!0),setTimeout((function(){return s(!1)}),2e3)}},f?u.default.createElement(d.default,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):u.default.createElement(d.default,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy")))};t.default=f},50449:function(e,t,a){var n=a(66664).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(29901)),r=n(a(24417)),o=n(a(48986)),u=Object.assign({},o.default,{div:function(e){return"shiki-twoslash-fragment"===e.className?l.default.createElement(l.default.Fragment,null,e.children):l.default.createElement("div",e)},pre:function(e){return l.default.createElement(r.default,e)},code:function(e){return l.default.createElement("code",e)}});t.default=u},61087:function(e,t,a){a.r(t)},90133:function(e,t,a){a.r(t)},76093:function(e,t,a){a.r(t)},10953:function(e,t,a){a.r(t),t.default={backToTopButton:"backToTopButton_3C2v",backToTopButtonShow:"backToTopButtonShow_3eNy"}},57500:function(e,t,a){a.r(t),t.default={details:"details_2qmS"}},3424:function(e,t,a){a.r(t),t.default={docPage:"docPage_298p",docMainContainer:"docMainContainer_1yf_",docSidebarContainer:"docSidebarContainer_3w39",docMainContainerEnhanced:"docMainContainerEnhanced_1DEL",docSidebarContainerHidden:"docSidebarContainerHidden_3Mjp",collapsedDocSidebar:"collapsedDocSidebar_3Lwt",expandSidebarButtonIcon:"expandSidebarButtonIcon_1oek",docItemWrapperEnhanced:"docItemWrapperEnhanced_27kN"}},62061:function(e,t,a){a.r(t),t.default={sidebar:"sidebar_1L4M",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_3wtb",sidebarHidden:"sidebarHidden_2JBz",sidebarLogo:"sidebarLogo_2nZm",menu:"menu_3Wdd",menuWithAnnouncementBar:"menuWithAnnouncementBar_qdU6",collapseSidebarButton:"collapseSidebarButton_CBN2",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_3LWp",sidebarMenuIcon:"sidebarMenuIcon_wcos",sidebarMenuCloseIcon:"sidebarMenuCloseIcon_17d7"}},90503:function(e,t,a){a.r(t),t.default={menuLinkText:"menuLinkText_3ggb"}},90471:function(e,t,a){a.r(t),t.default={anchorWithStickyNavbar:"anchorWithStickyNavbar_ecyb",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_3Eq7"}}}]);