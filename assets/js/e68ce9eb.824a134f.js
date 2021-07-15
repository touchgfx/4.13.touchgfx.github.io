(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8820],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,k=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3861:function(e,t,r){"use strict";var n=r(7294);class a extends n.Component{render(){const e=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:e})}}t.Z=a},1217:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(7294),a=r(3727),i=r(1368),o=r(5096),c=r(4487);const l=(0,n.createContext)({collectLink:()=>{}});var u=r(5026),s=r(7023),d=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&y(e,r,t[r]);if(k)for(var r of k(t))h.call(t,r)&&y(e,r,t[r]);return e};var g=function(e){var t,r=e,{isNavLink:d,to:y,href:g,activeClassName:v,isActive:_,"data-noBrokenLinkCheck":O,autoAddBaseUrl:w=!0}=r,N=((e,t)=>{var r={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&k)for(var n of k(e))t.indexOf(n)<0&&h.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x}}=(0,i.Z)(),{withBaseUrl:P}=(0,u.C)(),j=(0,n.useContext)(l),T=y||g,C=(0,o.Z)(T),A=null==T?void 0:T.replace("pathname://","");let E=void 0!==A?(D=A,w&&(e=>e.startsWith("/"))(D)?P(D):D):void 0;var D;E&&C&&(E=(0,s.applyTrailingSlash)(E,x));const I=(0,n.useRef)(!1),Z=d?a.OL:a.rU,B=c.Z.canUseIntersectionObserver;let L;(0,n.useEffect)((()=>(!B&&C&&null!=E&&window.docusaurus.prefetch(E),()=>{B&&L&&L.disconnect()})),[E,B,C]);const M=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,S=!E||!C||M;return E&&C&&!M&&!O&&j.collectLink(E),S?n.createElement("a",b(b({href:E},T&&!C&&{target:"_blank",rel:"noopener noreferrer"}),N)):n.createElement(Z,b((U=b({},N),p(U,f({onMouseEnter:()=>{I.current||null==E||(window.docusaurus.preload(E),I.current=!0)},innerRef:e=>{var t,r;B&&e&&C&&(t=e,r=()=>{null!=E&&window.docusaurus.prefetch(E)},L=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(L.unobserve(t),L.disconnect(),r())}))})),L.observe(t))},to:E||""}))),d&&{isActive:_,activeClassName:v}));var U}},5096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},5026:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return o}});var n=r(1368),a=r(5096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},7271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[r]=e.split(/[#?]/),n="/"===r?"/":(a=r,t?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(r,n)}},7023:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(7271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(1080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},1080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6493:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return k},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return y},default:function(){return g}});var n=r(3905),a=r(1217),i=r(3861),o=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))d.call(t,r)&&p(e,r,t[r]);return e};const k={title:"Key"},m=void 0,h={unversionedId:"api/classes/structtouchgfx_1_1_keyboard_1_1_key",id:"api/classes/structtouchgfx_1_1_keyboard_1_1_key",isDocsHomePage:!1,title:"Key",description:"Mapping from rectangle to key id.",source:"@site/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_key.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_keyboard_1_1_key",permalink:"/4.13/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_key",version:"current",frontMatter:{title:"Key"},sidebar:"docs",previous:{title:"KerningNode",permalink:"/4.13/docs/api/classes/structtouchgfx_1_1_kerning_node"},next:{title:"Keyboard",permalink:"/4.13/docs/api/classes/classtouchgfx_1_1_keyboard"}},y=[{value:"Public Attributes",id:"public-attributes",children:[]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"highlightBitmapId",id:"highlightbitmapid",children:[]},{value:"keyArea",id:"keyarea",children:[]},{value:"keyId",id:"keyid",children:[]}]}],b={toc:y};function g(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},b),p),c(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Mapping from rectangle to key id. "),(0,n.kt)("h2",f({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:"right"})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),(0,n.kt)("a",f({parentName:"td"},{href:"../namespacetouchgfx#typedef-bitmapid"}),"BitmapId")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_keyboard_1_1_key#variable-highlightbitmapid",mdxType:"Link"},"highlightBitmapId")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),'A bitmap to show when the area is "pressed".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),(0,n.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_keyboard_1_1_key#variable-keyarea",mdxType:"Link"},"keyArea")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The area occupied by the key.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"uint8_t"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_keyboard_1_1_key#variable-keyid",mdxType:"Link"},"keyId")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"The id of a key.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",f({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_keyboard_1_1_key#variable-highlightbitmapid",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"highlightbitmapid"}),"highlightBitmapId"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",f({parentName:"p"},{href:"../namespacetouchgfx#typedef-bitmapid"}),"BitmapId")," highlightBitmapId ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,'A bitmap to show when the area is "pressed". '))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_keyboard_1_1_key#variable-keyarea",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"keyarea"}),"keyArea"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_rect"}),"Rect")," keyArea ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The area occupied by the key. "))),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_keyboard_1_1_key#variable-keyid",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"keyid"}),"keyId"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint8_t keyId ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The id of a key. "))))}g.isMDXComponent=!0}}]);