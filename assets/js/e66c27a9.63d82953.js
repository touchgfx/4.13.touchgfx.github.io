(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8166],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return k},kt:function(){return f}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),u=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},k=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,c=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),s=u(a),f=n,p=s["".concat(c,".").concat(f)]||s[f]||d[f]||l;return a?r.createElement(p,o(o({ref:e},k),{},{components:a})):r.createElement(p,o({ref:e},k))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},3861:function(t,e,a){"use strict";var r=a(7294);class n extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=n},1217:function(t,e,a){"use strict";a.d(e,{Z:function(){return N}});var r=a(7294),n=a(3727),l=a(1368),o=a(5096),i=a(4487);const c=(0,r.createContext)({collectLink:()=>{}});var u=a(5026),k=a(7023),d=Object.defineProperty,s=Object.defineProperties,f=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,b=(t,e)=>{for(var a in e||(e={}))m.call(e,a)&&h(t,a,e[a]);if(p)for(var a of p(e))g.call(e,a)&&h(t,a,e[a]);return t};var N=function(t){var e,a=t,{isNavLink:d,to:h,href:N,activeClassName:_,isActive:y,"data-noBrokenLinkCheck":v,autoAddBaseUrl:x=!0}=a,T=((t,e)=>{var a={};for(var r in t)m.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&p)for(var r of p(t))e.indexOf(r)<0&&g.call(t,r)&&(a[r]=t[r]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:w}}=(0,l.Z)(),{withBaseUrl:B}=(0,u.C)(),O=(0,r.useContext)(c),L=h||N,A=(0,o.Z)(L),Z=null==L?void 0:L.replace("pathname://","");let F=void 0!==Z?(P=Z,x&&(t=>t.startsWith("/"))(P)?B(P):P):void 0;var P;F&&A&&(F=(0,k.applyTrailingSlash)(F,w));const j=(0,r.useRef)(!1),R=d?n.OL:n.rU,C=i.Z.canUseIntersectionObserver;let D;(0,r.useEffect)((()=>(!C&&A&&null!=F&&window.docusaurus.prefetch(F),()=>{C&&D&&D.disconnect()})),[F,C,A]);const M=null!==(e=null==F?void 0:F.startsWith("#"))&&void 0!==e&&e,S=!F||!A||M;return F&&A&&!M&&!v&&O.collectLink(F),S?r.createElement("a",b(b({href:F},L&&!A&&{target:"_blank",rel:"noopener noreferrer"}),T)):r.createElement(R,b((E=b({},T),s(E,f({onMouseEnter:()=>{j.current||null==F||(window.docusaurus.preload(F),j.current=!0)},innerRef:t=>{var e,a;C&&t&&A&&(e=t,a=()=>{null!=F&&window.docusaurus.prefetch(F)},D=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(D.unobserve(e),D.disconnect(),a())}))})),D.observe(e))},to:F||""}))),d&&{isActive:y,activeClassName:_}));var E}},5096:function(t,e,a){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,{b:function(){return r},Z:function(){return n}})},5026:function(t,e,a){"use strict";a.d(e,{C:function(){return l},Z:function(){return o}});var r=a(1368),n=a(5096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(a,r)=>function(t,e,a,{forcePrependBaseUrl:r=!1,absolute:l=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(r)return e+a;const o=a.startsWith(e)?a:e+a.replace(/^\//,"");return l?t+o:o}(e,t,a,r)}}function o(t,e={}){const{withBaseUrl:a}=l();return a(t,e)}},7271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[a]=t.split(/[#?]/),r="/"===a?"/":(n=a,e?function(t){return t.endsWith("/")?t:`${t}/`}(n):function(t){return t.endsWith("/")?t.slice(0,-1):t}(n));var n;return t.replace(a,r)}},7023:function(t,e,a){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var n=a(7271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return r(n).default}});var l=a(1080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return r(l).default}})},1080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},3196:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return g},toc:function(){return h},default:function(){return N}});var r=a(3905),n=a(1217),l=a(3861),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(t,e,a)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,f=(t,e)=>{for(var a in e||(e={}))k.call(e,a)&&s(t,a,e[a]);if(u)for(var a of u(e))d.call(e,a)&&s(t,a,e[a]);return t};const p={title:"FrameBufferAllocator"},m=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_frame_buffer_allocator",id:"api/classes/classtouchgfx_1_1_frame_buffer_allocator",isDocsHomePage:!1,title:"FrameBufferAllocator",description:"This class is an abstract interface for a class allocating partial framebuffer blocks.",source:"@site/docs/api/classes/classtouchgfx_1_1_frame_buffer_allocator.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_frame_buffer_allocator",permalink:"/4.13/docs/api/classes/classtouchgfx_1_1_frame_buffer_allocator",version:"current",frontMatter:{title:"FrameBufferAllocator"},sidebar:"docs",previous:{title:"FontProvider",permalink:"/4.13/docs/api/classes/classtouchgfx_1_1_font_provider"},next:{title:"FullSolidRect",permalink:"/4.13/docs/api/classes/classtouchgfx_1_1_cover_transition_1_1_full_solid_rect"}},h=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"allocateBlock",id:"allocateblock",children:[]},{value:"freeBlockAfterTransfer",id:"freeblockaftertransfer",children:[]},{value:"getBlockForTransfer",id:"getblockfortransfer",children:[]},{value:"hasBlockReadyForTransfer",id:"hasblockreadyfortransfer",children:[]},{value:"markBlockReadyForTransfer",id:"markblockreadyfortransfer",children:[]},{value:"~FrameBufferAllocator",id:"framebufferallocator",children:[]}]}],b={toc:h};function N(t){var e,a=t,{components:o}=a,s=((t,e)=>{var a={};for(var r in t)k.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&u)for(var r of u(t))e.indexOf(r)<0&&d.call(t,r)&&(a[r]=t[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(e=f(f({},b),s),i(e,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null," This class is an abstract interface for a class allocating partial framebuffer blocks.\nThe interface must be implemented by a subclass."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See"),": ",(0,r.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_single_block_allocator"}),"SingleBlockAllocator"),", ",(0,r.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_many_block_allocator"}),"ManyBlockAllocator")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_many_block_allocator",mdxType:"Link"},"ManyBlockAllocator","<"," block_size, blocks, bytes_pr_pixel ",">"),",  ",(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_single_block_allocator",mdxType:"Link"},"SingleBlockAllocator","<"," block_size, bytes_pr_pixel ",">")),(0,r.kt)("h2",f({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:"right"})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),"virtual","\xa0","uint16_t"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-allocateblock",mdxType:"Link"},"allocateBlock")),"(const uint16_t x, const uint16_t y, const uint16_t width, const uint16_t height, uint8_t ** block) =0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Allocates a framebuffer block.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-freeblockaftertransfer",mdxType:"Link"},"freeBlockAfterTransfer")),"() =0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Free a block after transfer to the LCD.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),"virtual","\xa0","const uint8_t *"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-getblockfortransfer",mdxType:"Link"},"getBlockForTransfer")),"(",(0,r.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & rect) =0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Get the block ready for transfer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"hasBlockReadyForTransfer")),"() =0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Check if a block is ready for transfer to the LCD.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"markBlockReadyForTransfer")),"() =0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Marks a previously allocated block as ready to be transferred to the LCD.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-~framebufferallocator",mdxType:"Link"},"~FrameBufferAllocator")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,r.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_frame_buffer_allocator"}),"FrameBufferAllocator")," class.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",f({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-allocateblock",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"allocateblock"}),"allocateBlock"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"virtual","\xa0","uint16_t","\xa0",(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-allocateblock",mdxType:"Link"},"allocateBlock")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"const uint16_t"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"x ,"),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"=0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"const uint16_t"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"y ,"),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"=0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"const uint16_t"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"width ,"),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"=0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"const uint16_t"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"height ,"),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"=0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"uint8_t **"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"block"),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"=0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"=0"),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Allocates a framebuffer block. "),(0,r.kt)("p",null,"The block will have at least the width requested. The height of the allocated block can be lower than requested if not enough memory is available."),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"x"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"The absolute x coordinate of the block on the screen.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"y"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"The absolute y coordinate of the block on the screen.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"width"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"The width of the block.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"height"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"The height of the block.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"block"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Pointer to pointer to return the block address in."))))),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"The height of the allocated block. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_single_block_allocator#function-allocateblock",mdxType:"Link"},"touchgfx::SingleBlockAllocator::allocateBlock"),", ",(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-allocateblock",mdxType:"Link"},"touchgfx::ManyBlockAllocator::allocateBlock")))),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-freeblockaftertransfer",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"freeblockaftertransfer"}),"freeBlockAfterTransfer"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-freeblockaftertransfer",mdxType:"Link"},"freeBlockAfterTransfer")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"=0"))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Free a block after transfer to the LCD. "),(0,r.kt)("p",null,"Marks a previously allocated block as transferred and ready to reuse. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_single_block_allocator#function-freeblockaftertransfer",mdxType:"Link"},"touchgfx::SingleBlockAllocator::freeBlockAfterTransfer"),", ",(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-freeblockaftertransfer",mdxType:"Link"},"touchgfx::ManyBlockAllocator::freeBlockAfterTransfer")))),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-getblockfortransfer",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"getblockfortransfer"}),"getBlockForTransfer"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"virtual","\xa0","const uint8_t *","\xa0",(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-getblockfortransfer",mdxType:"Link"},"getBlockForTransfer")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"rect"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",f({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Get the block ready for transfer. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"rect"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Reference to rect to write block x, y, width, and height."))))),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"Returns the address of the block ready for transfer. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_single_block_allocator#function-getblockfortransfer",mdxType:"Link"},"touchgfx::SingleBlockAllocator::getBlockForTransfer"),", ",(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-getblockfortransfer",mdxType:"Link"},"touchgfx::ManyBlockAllocator::getBlockForTransfer")))),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-hasblockreadyfortransfer",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"hasblockreadyfortransfer"}),"hasBlockReadyForTransfer"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"hasBlockReadyForTransfer")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"=0"))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Check if a block is ready for transfer to the LCD. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"True if a block is ready for transfer. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_single_block_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"touchgfx::SingleBlockAllocator::hasBlockReadyForTransfer"),", ",(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"touchgfx::ManyBlockAllocator::hasBlockReadyForTransfer")))),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-markblockreadyfortransfer",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"markblockreadyfortransfer"}),"markBlockReadyForTransfer"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"markBlockReadyForTransfer")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"=0"))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Marks a previously allocated block as ready to be transferred to the LCD. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_single_block_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"touchgfx::SingleBlockAllocator::markBlockReadyForTransfer"),", ",(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"touchgfx::ManyBlockAllocator::markBlockReadyForTransfer")))),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-~framebufferallocator",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"framebufferallocator"}),"~FrameBufferAllocator"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"virtual","\xa0",(0,r.kt)(n.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-~framebufferallocator",mdxType:"Link"},"~FrameBufferAllocator")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",f({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Finalizes an instance of the ",(0,r.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_frame_buffer_allocator"}),"FrameBufferAllocator")," class. "))))}N.isMDXComponent=!0}}]);