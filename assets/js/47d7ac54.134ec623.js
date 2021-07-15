(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4536],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return p},kt:function(){return s}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),k=u(a),s=r,m=k["".concat(o,".").concat(s)]||k[s]||d[s]||l;return a?n.createElement(m,i(i({ref:e},p),{},{components:a})):n.createElement(m,i({ref:e},p))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3861:function(t,e,a){"use strict";var n=a(7294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},1217:function(t,e,a){"use strict";a.d(e,{Z:function(){return N}});var n=a(7294),r=a(3727),l=a(1368),i=a(5096),c=a(4487);const o=(0,n.createContext)({collectLink:()=>{}});var u=a(5026),p=a(7023),d=Object.defineProperty,k=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,g=(t,e)=>{for(var a in e||(e={}))h.call(e,a)&&b(t,a,e[a]);if(m)for(var a of m(e))f.call(e,a)&&b(t,a,e[a]);return t};var N=function(t){var e,a=t,{isNavLink:d,to:b,href:N,activeClassName:_,isActive:y,"data-noBrokenLinkCheck":v,autoAddBaseUrl:x=!0}=a,w=((t,e)=>{var a={};for(var n in t)h.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&m)for(var n of m(t))e.indexOf(n)<0&&f.call(t,n)&&(a[n]=t[n]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T}}=(0,l.Z)(),{withBaseUrl:O}=(0,u.C)(),C=(0,n.useContext)(o),j=b||N,P=(0,i.Z)(j),L=null==j?void 0:j.replace("pathname://","");let Z=void 0!==L?(D=L,x&&(t=>t.startsWith("/"))(D)?O(D):D):void 0;var D;Z&&P&&(Z=(0,p.applyTrailingSlash)(Z,T));const E=(0,n.useRef)(!1),I=d?r.OL:r.rU,A=c.Z.canUseIntersectionObserver;let F;(0,n.useEffect)((()=>(!A&&P&&null!=Z&&window.docusaurus.prefetch(Z),()=>{A&&F&&F.disconnect()})),[Z,A,P]);const S=null!==(e=null==Z?void 0:Z.startsWith("#"))&&void 0!==e&&e,M=!Z||!P||S;return Z&&P&&!S&&!v&&C.collectLink(Z),M?n.createElement("a",g(g({href:Z},j&&!P&&{target:"_blank",rel:"noopener noreferrer"}),w)):n.createElement(I,g((z=g({},w),k(z,s({onMouseEnter:()=>{E.current||null==Z||(window.docusaurus.preload(Z),E.current=!0)},innerRef:t=>{var e,a;A&&t&&P&&(e=t,a=()=>{null!=Z&&window.docusaurus.prefetch(Z)},F=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(F.unobserve(e),F.disconnect(),a())}))})),F.observe(e))},to:Z||""}))),d&&{isActive:y,activeClassName:_}));var z}},5096:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},5026:function(t,e,a){"use strict";a.d(e,{C:function(){return l},Z:function(){return i}});var n=a(1368),r=a(5096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:l=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(n)return e+a;const i=a.startsWith(e)?a:e+a.replace(/^\//,"");return l?t+i:i}(e,t,a,n)}}function i(t,e={}){const{withBaseUrl:a}=l();return a(t,e)}},7271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[a]=t.split(/[#?]/),n="/"===a?"/":(r=a,e?function(t){return t.endsWith("/")?t:`${t}/`}(r):function(t){return t.endsWith("/")?t.slice(0,-1):t}(r));var r;return t.replace(a,n)}},7023:function(t,e,a){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=a(7271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var l=a(1080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(l).default}})},1080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},837:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return h},metadata:function(){return f},toc:function(){return b},default:function(){return N}});var n=a(3905),r=a(1217),l=a(3861),i=Object.defineProperty,c=Object.defineProperties,o=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,k=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,s=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&k(t,a,e[a]);if(u)for(var a of u(e))d.call(e,a)&&k(t,a,e[a]);return t};const m={title:"Callback"},h=void 0,f={unversionedId:"api/classes/structtouchgfx_1_1_callback",id:"api/classes/structtouchgfx_1_1_callback",isDocsHomePage:!1,title:"Callback",description:"A Callback is basically a wrapper of a pointer-to-member-function.",source:"@site/docs/api/classes/structtouchgfx_1_1_callback.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_callback",permalink:"/4.13/docs/api/classes/structtouchgfx_1_1_callback",version:"current",frontMatter:{title:"Callback"},sidebar:"docs",previous:{title:"CacheTableEntry",permalink:"/4.13/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry"},next:{title:"Callback<dest_type,T1,T2,void>",permalink:"/4.13/docs/api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01_t2_00_01void_01_4"}},b=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_generic_callback">touchgfx::GenericCallback&lt; T1, T2, T3 &gt;</Link>',id:"public-functions-inherited-from-link-toclasstouchgfx_1_1_generic_callbacktouchgfxgenericcallbacklt-t1-t2-t3-gtlink",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"Callback",id:"callback",children:[]},{value:"Callback",id:"callback-1",children:[]},{value:"execute",id:"execute",children:[]},{value:"isValid",id:"isvalid",children:[]}]}],g={toc:b};function N(t){var e,a=t,{components:i}=a,k=((t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&u)for(var n of u(t))e.indexOf(n)<0&&d.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=s(s({},g),k),c(e,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," A Callback is basically a wrapper of a pointer-to-member-function.\nIt is used for registering callbacks between widgets. For instance, a ",(0,n.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_button"}),"Button")," can be configured to call a member function when it is clicked."),(0,n.kt)("p",null,"The class is templated in order to provide the class type of the object in which the member function resides, and the argument types of the function to call."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",s({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," class exists in four versions, for supporting member functions with 0, 1, 2 or 3 arguments. The compiler will infer which type to use automatically."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"dest_type")," The type of the class in which the member function resides. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T1")," The type of the first argument in the member function, or void if none. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T2")," The type of the second argument in the member function, or void if none. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T3")," The type of the third argument in the member function, or void if none.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": The member function to call must return void. The function can have zero, one, two or three arguments of any type. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback",mdxType:"Link"},"touchgfx::GenericCallback","<"," T1, T2, T3 ",">")),(0,n.kt)("h2",s({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:"right"})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback#function-callback",mdxType:"Link"},"Callback")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",s({parentName:"td"},{href:"structtouchgfx_1_1_callback"}),"Callback")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback#function-callback",mdxType:"Link"},"Callback")),"(dest_type ",(0,n.kt)("em",{parentName:"td"}," pobject, void(dest_type::"),")(T1, T2, T3) pmemfun_3)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Initializes a ",(0,n.kt)("a",s({parentName:"td"},{href:"structtouchgfx_1_1_callback"}),"Callback")," with an object and a pointer to the member function in that object to call.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback#function-execute",mdxType:"Link"},"execute")),"(T1 t1, T2 t2, T3 t3)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Calls the member function.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback#function-isvalid",mdxType:"Link"},"isValid")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Function to check whether the ",(0,n.kt)("a",s({parentName:"td"},{href:"structtouchgfx_1_1_callback"}),"Callback")," has been initialized with values.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",s({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,n.kt)("h3",s({},{id:"public-functions-inherited-from-link-toclasstouchgfx_1_1_generic_callbacktouchgfxgenericcallbacklt-t1-t2-t3-gtlink"}),"Public Functions inherited from ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback",mdxType:"Link"},"touchgfx::GenericCallback","<"," T1, T2, T3 ",">")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:"right"})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback#function-~genericcallback",mdxType:"Link"},"~GenericCallback")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",s({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"structtouchgfx_1_1_callback#function-callback",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"callback"}),"Callback"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback#function-callback",mdxType:"Link"},"Callback")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",s({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",s({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," class. "))),(0,n.kt)(l.Z,{url:"structtouchgfx_1_1_callback#function-callback",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"callback-1"}),"Callback"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback#function-callback",mdxType:"Link"},"Callback")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"dest_type *"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"pobject ,"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"void(dest_type::*)(T1, T2, T3)"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"pmemfun_3"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initializes a ",(0,n.kt)("a",s({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," with an object and a pointer to the member function in that object to call. "),(0,n.kt)("p",null,"Initializes a ",(0,n.kt)("a",s({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," with an object and a pointer to the member function in that object to call."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"pobject"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Pointer to the object on which the function should be called.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"pmemfun_3"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Address of member function. This is the version where function takes three arguments."))))))),(0,n.kt)(l.Z,{url:"structtouchgfx_1_1_callback#function-execute",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"execute"}),"execute"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback#function-execute",mdxType:"Link"},"execute")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T1"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"t1 ,"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T2"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"t2 ,"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T3"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"t3"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Calls the member function. "),(0,n.kt)("p",null,"Do not call execute unless ",(0,n.kt)("a",s({parentName:"p"},{href:"structtouchgfx_1_1_callback#function-isvalid"}),"isValid()")," returns true (ie. a pointer to the object and the function has been set)."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"t1"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"This value will be passed as the first argument in the function call.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"t2"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"This value will be passed as the second argument in the function call.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"t3"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"This value will be passed as the third argument in the function call."))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback#function-execute",mdxType:"Link"},"touchgfx::GenericCallback::execute")))),(0,n.kt)(l.Z,{url:"structtouchgfx_1_1_callback#function-isvalid",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"isvalid"}),"isValid"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback#function-isvalid",mdxType:"Link"},"isValid")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"const"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Function to check whether the ",(0,n.kt)("a",s({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," has been initialized with values. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"true If the callback is valid (i.e. safe to call execute). ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback#function-isvalid",mdxType:"Link"},"touchgfx::GenericCallback::isValid")))))}N.isMDXComponent=!0}}]);