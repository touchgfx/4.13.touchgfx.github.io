(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[218],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4035:function(e,t,n){"use strict";var r=n(7294),i=n(5026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},9415:function(e,t,n){"use strict";var r=n(7294),i=n(8678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},8678:function(e,t,n){"use strict";var r=n(7294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},1217:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(7294),i=n(3727),a=n(1368),o=n(5096),l=n(4487);const s=(0,r.createContext)({collectLink:()=>{}});var c=n(5026),u=n(7023),p=Object.defineProperty,d=Object.defineProperties,h=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))g.call(t,n)&&v(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:p,to:v,href:b,activeClassName:y,isActive:O,"data-noBrokenLinkCheck":T,autoAddBaseUrl:x=!0}=n,k=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:E}}=(0,a.Z)(),{withBaseUrl:j}=(0,c.C)(),P=(0,r.useContext)(s),C=v||b,S=(0,o.Z)(C),I=null==C?void 0:C.replace("pathname://","");let U=void 0!==I?(A=I,x&&(e=>e.startsWith("/"))(A)?j(A):A):void 0;var A;U&&S&&(U=(0,u.applyTrailingSlash)(U,E));const F=(0,r.useRef)(!1),X=p?i.OL:i.rU,Z=l.Z.canUseIntersectionObserver;let D;(0,r.useEffect)((()=>(!Z&&S&&null!=U&&window.docusaurus.prefetch(U),()=>{Z&&D&&D.disconnect()})),[U,Z,S]);const _=null!==(t=null==U?void 0:U.startsWith("#"))&&void 0!==t&&t,G=!U||!S||_;return U&&S&&!_&&!T&&P.collectLink(U),G?r.createElement("a",w(w({href:U},C&&!S&&{target:"_blank",rel:"noopener noreferrer"}),k)):r.createElement(X,w((M=w({},k),d(M,h({onMouseEnter:()=>{F.current||null==U||(window.docusaurus.preload(U),F.current=!0)},innerRef:e=>{var t,n;Z&&e&&S&&(t=e,n=()=>{null!=U&&window.docusaurus.prefetch(U)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),n())}))})),D.observe(t))},to:U||""}))),p&&{isActive:O,activeClassName:y}));var M}},5096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},5026:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(1368),i=n(5096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},7271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":(i=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(n,r)}},7023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(7271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(1080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},1080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},8963:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return v},toc:function(){return w},default:function(){return y}});var r=n(3905),i=n(4035),a=n(9415),o=n(1217),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&h(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&h(e,n,t[n]);return e};const m={id:"examples",title:"Examples"},g=void 0,v={unversionedId:"development/ui-development/working-with-touchgfx/examples",id:"development/ui-development/working-with-touchgfx/examples",isDocsHomePage:!1,title:"Examples",description:"To help further explore the possibilities and features of TouchGFX, multiple premade examples are made available to the user. These examples can be accessed through the Startup Window of TouchGFX Designer and all include free-to-use images, code, etc., which means that they can even be used as a base to build your own unique application from. Examples are combined with Application Templates to create TouchGFX applications. If you are new to TouchGFX, this can be a great starting source of inspiration and knowledge about how TouchGFX applications function.",source:"@site/docs/development/ui-development/working-with-touchgfx/examples.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/examples",permalink:"/4.13/docs/development/ui-development/working-with-touchgfx/examples",version:"current",frontMatter:{id:"examples",title:"Examples"},sidebar:"docs",previous:{title:"Debugging",permalink:"/4.13/docs/development/ui-development/working-with-touchgfx/debugging"},next:{title:"Startup Window",permalink:"/4.13/docs/development/ui-development/designer-user-guide/startup-window"}},w=[{value:"UI Templates",id:"ui-templates",children:[]},{value:"Online Applications",id:"online-applications",children:[]}],b={toc:w};function y(e){var t,n=e,{components:l}=n,h=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},b),h),s(t,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"To help further explore the possibilities and features of TouchGFX, multiple premade examples are made available to the user. These examples can be accessed through the ",(0,r.kt)("a",f({parentName:"p"},{href:"../designer-user-guide/startup-window"}),"Startup Window")," of TouchGFX Designer and all include free-to-use images, code, etc., which means that they can even be used as a base to build your own unique application from. Examples are combined with ",(0,r.kt)("a",f({parentName:"p"},{href:"../../development-introduction#application-templates-ats"}),"Application Templates")," to create TouchGFX applications. If you are new to TouchGFX, this can be a great starting source of inspiration and knowledge about how TouchGFX applications function."),(0,r.kt)("p",null,"Some examples focus on single features while others implement several different functionalities found in TouchGFX. Examples are divided into two different types."),(0,r.kt)("h2",f({},{id:"ui-templates"}),"UI Templates"),(0,r.kt)("p",null,"UI Templates are generally smaller, more self-contained examples that mostly focus on specific features such as different widgets. UI Templates can run on any STM32 evaluation kit and the PC simulator, but for the best experience it is encouraged to create projects where the resolution of the UI Template fits the resolution of your board. Some UI Templates are also built with specific color depths in mind, which means they might not display as well on lower color depth displays."),(0,r.kt)("p",null,"The UI Templates also include several demos made by the TouchGFX team which showcase more features with higher quality UI design. These can be a great place to start to get a feeling for what TouchGFX is capable of."),(0,r.kt)("p",null,"To create an application using a UI Template, start by pressing the card under the 'Application Template' label to see the available Application Templates. Click whichever Application Template you want and then press 'Select'. Next, press the card under the 'UI Template' label to see the available UI Templates. Click whichever UI Template you want and then press 'Select'. Optionally, select another resolution and color depth in the drop downs. Finally, press 'Create' to create an application from the selected Application Template and UI Template. Press either 'Run Simulator' or 'Run Target' to see the application running."),(0,r.kt)("p",null,"An animation of these steps can be seen below:"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/getting-started/application-template-ui-template.gif",mdxType:"Figure"},"Creating a project using a UI template"),(0,r.kt)("h2",f({},{id:"online-applications"}),"Online Applications"),(0,r.kt)("p",null,"Online Applications are out-of-the-box applications for specific hardware solutions and it is therefore not possible to run these on any other STM32 evaluation kit than the one it was created for (aside from the PC simulator). These examples are generally a lot larger and explore multiple different features of the TouchGFX framework and can also include sample integration with the hardware."),(0,r.kt)("p",null,"To create an application using an Online Application, first access these by clicking the 'Online Applications' tab in the top of the startup window. Click the card under the 'Online Application' label to show what applications are available. Click the application you want and press 'Select'. Finish by pressing 'Create' and either press 'Run Simulator' or 'Run Target' to see the application running."),(0,r.kt)("p",null,"An animation of these steps can be seen below:"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/getting-started/online-application.gif",mdxType:"Figure"},"Creating a project using an online application"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},"To read more about how to create applications using examples, see the ",(0,r.kt)(o.Z,{to:"../designer-user-guide/startup-window",mdxType:"Link"},"Startup Window section.")))}y.isMDXComponent=!0}}]);