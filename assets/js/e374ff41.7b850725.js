"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1689],{57522:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return u},mdx:function(){return h},useMDXComponents:function(){return d},withMDXComponents:function(){return m}});var r=t(29901);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),m=function(e){return function(n){var t=d(n.components);return r.createElement(e,o({},n,{components:t}))}},d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=i,f=m["".concat(a,".").concat(u)]||m[u]||p[u]||o;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},27833:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var r=t(3920),i=t(50264),o=(t(29901),t(57522)),a=["components"],s={id:"flickering",title:"Flickering"},l=void 0,c={unversionedId:"flickering",id:"flickering",isDocsHomePage:!1,title:"Flickering",description:"If your video flickers or suffers from choppyness during rendering, it is an indication that you have a multi-threading issue.",source:"@site/docs/flickering.md",sourceDirName:".",slug:"/flickering",permalink:"/docs/flickering",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/flickering.md",tags:[],version:"current",frontMatter:{id:"flickering",title:"Flickering"},sidebar:"someSidebar",previous:{title:"Non-seekable media",permalink:"/docs/non-seekable-media"},next:{title:"v2.0 Breaking changes",permalink:"/docs/2-0-migration"}},m=[{value:"Solution",id:"solution",children:[],level:2},{value:"Integrations",id:"integrations",children:[],level:2},{value:"Bypass multithreading",id:"bypass-multithreading",children:[],level:2},{value:"Why Remotion works this way",id:"why-remotion-works-this-way",children:[],level:2}],d={toc:m};function u(e){var n=e.components,t=(0,i.default)(e,a);return(0,o.mdx)("wrapper",(0,r.default)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"If your video flickers or suffers from choppyness during rendering, it is an indication that you have a ",(0,o.mdx)("strong",{parentName:"p"},"multi-threading issue"),"."),(0,o.mdx)("p",null,"The rendering process of Remotion works as follows:"),(0,o.mdx)("img",{src:"/img/parallel-rendering.png"}),(0,o.mdx)("p",null,"We open multiple tabs to render the video to speed up the process dramatically. These tabs don't share state and animations that run independent of ",(0,o.mdx)("a",{parentName:"p",href:"/docs/use-current-frame"},(0,o.mdx)("inlineCode",{parentName:"a"},"useCurrentFrame()"))," will break. Frames don't render in order and frames can be skipped."),(0,o.mdx)("h2",{id:"solution"},"Solution"),(0,o.mdx)("p",null,"You need to code your video in a way that animations run purely off the value of ",(0,o.mdx)("a",{parentName:"p",href:"/docs/use-current-frame"},(0,o.mdx)("inlineCode",{parentName:"a"},"useCurrentFrame()")),". Think of your component as a function that transforms a frame number into an image. Make sure you check all these boxes:"),(0,o.mdx)("ul",{className:"contains-task-list"},(0,o.mdx)("li",{parentName:"ul",className:"task-list-item"},(0,o.mdx)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Your component should always display the same image when called multiple times."),(0,o.mdx)("li",{parentName:"ul",className:"task-list-item"},(0,o.mdx)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Your component should not rely on frames being rendered sequentially."),(0,o.mdx)("li",{parentName:"ul",className:"task-list-item"},(0,o.mdx)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Your component should not animate when the video is paused."),(0,o.mdx)("li",{parentName:"ul",className:"task-list-item"},(0,o.mdx)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Your component should not rely on randomness - ",(0,o.mdx)("a",{parentName:"li",href:"/docs/random"},"Exception: ",(0,o.mdx)("inlineCode",{parentName:"a"},"random()")))),(0,o.mdx)("h2",{id:"integrations"},"Integrations"),(0,o.mdx)("p",null,"Often the problem arises from using other animation techniques than the ones built into Remotion. These techniques animate based off realtime instead of ",(0,o.mdx)("inlineCode",{parentName:"p"},"useCurrentFrame()"),". Sometimes we can apply a patch to synchronize other animation techniques with Remotion."),(0,o.mdx)("p",null,"Head over to ",(0,o.mdx)("a",{parentName:"p",href:"/docs/third-party"},(0,o.mdx)("strong",{parentName:"a"},"the list of integrations"))," to see if there is an integration for your animation technique."),(0,o.mdx)("h2",{id:"bypass-multithreading"},"Bypass multithreading"),(0,o.mdx)("p",null,"If your animation will not break if the frames are rendered in order, users often use the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/cli#--concurrency"},(0,o.mdx)("inlineCode",{parentName:"a"},"--concurrency=1"))," flag. This will fix flickering / choppyness in many cases and is a viable path if the effort of refactoring is too big. The drawback of this technique is that it is way slower and that the correct timing of the animations is still not guaranteed."),(0,o.mdx)("h2",{id:"why-remotion-works-this-way"},"Why Remotion works this way"),(0,o.mdx)("p",null,"We commonly get asked if Remotion would consider changing the way how it renders. While we are always have an open ear for how to improve Remotion, the following points need to be considered:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Rendering speed is of critical importance for many Remotion users, especially those who are relying on server-side rendering. Rendering each frame sequentially would be detrimental for speed, a sacrifice that is not worth it when it's possible to write concurrency-safe videos.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Setting ",(0,o.mdx)("inlineCode",{parentName:"p"},"--concurrency=1")," on a video that would be choppy otherwise does not fully fix the problem. Often the result looks okay only because of coincidence, because the rendering speed is approximately the same as the animation speed. There is no real timing synchronization and results will differ across machines.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Multithreading is very important for future ideas such as ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/remotion-dev/remotion/pull/423"},"rendering on AWS Lambda"),". Using this integration, you can render a video much faster by rendering it on multiple computers at the same time. All you need for it is a video that is programmed in a concurrency-safe way."))))}u.isMDXComponent=!0}}]);