(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3344],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){"use strict";var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=l},88678:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},2083:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=i},60204:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=i},10630:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=i},37793:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=l},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(67294),i=n(73727),a=n(11368),l=n(35096),o=n(84487);const s=(0,r.createContext)({collectLink:()=>{}});var c=n(25026),p=n(67023),d=Object.defineProperty,u=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&k(e,n,t[n]);if(h)for(var n of h(t))g.call(t,n)&&k(e,n,t[n]);return e};var w=function(e){var t,n=e,{isNavLink:d,to:k,href:w,activeClassName:b,isActive:y,"data-noBrokenLinkCheck":x,autoAddBaseUrl:S=!0}=n,N=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:C}}=(0,a.Z)(),{withBaseUrl:T}=(0,c.C)(),L=(0,r.useContext)(s),I=k||w,P=(0,l.Z)(I),E=null==I?void 0:I.replace("pathname://","");let O=void 0!==E?(Z=E,S&&(e=>e.startsWith("/"))(Z)?T(Z):Z):void 0;var Z;O&&P&&(O=(0,p.applyTrailingSlash)(O,C));const D=(0,r.useRef)(!1),_=d?i.OL:i.rU,V=o.Z.canUseIntersectionObserver;let j;(0,r.useEffect)((()=>(!V&&P&&null!=O&&window.docusaurus.prefetch(O),()=>{V&&j&&j.disconnect()})),[O,V,P]);const B=null!==(t=null==O?void 0:O.startsWith("#"))&&void 0!==t&&t,A=!O||!P||B;return O&&P&&!B&&!x&&L.collectLink(O),A?r.createElement("a",v(v({href:O},I&&!P&&{target:"_blank",rel:"noopener noreferrer"}),N)):r.createElement(_,v((U=v({},N),u(U,m({onMouseEnter:()=>{D.current||null==O||(window.docusaurus.preload(O),D.current=!0)},innerRef:e=>{var t,n;V&&e&&P&&(t=e,n=()=>{null!=O&&window.docusaurus.prefetch(O)},j=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.unobserve(t),j.disconnect(),n())}))})),j.observe(t))},to:O||""}))),d&&{isActive:y,activeClassName:b}));var U}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return l}});var r=n(11368),i=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":(i=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(n,r)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},89688:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return b},contentTitle:function(){return y},metadata:function(){return x},toc:function(){return S},default:function(){return C}});var r=n(3905),i=n(44035),a=n(29415),l=n(10630),o=n(37793),s=n(2083),c=n(60204),p=n(31217),d=n(22425),u=Object.defineProperty,m=Object.defineProperties,h=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&v(e,n,t[n]);return e};const b={id:"scroll-list",title:"ScrollList"},y=void 0,x={unversionedId:"development/ui-development/ui-components/containers/scroll-list",id:"development/ui-development/ui-components/containers/scroll-list",isDocsHomePage:!1,title:"ScrollList",description:"The ScrollList is a scrollable menu consisting of a number of items and a number of widgets, which are dynamically updated as they are scrolled into view. The ScrollList is also able to invoke callbacks when interacting with the items in the ScrollList.",source:"@site/docs/development/ui-development/ui-components/containers/scroll-list.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/scroll-list",permalink:"/4.13/docs/development/ui-development/ui-components/containers/scroll-list",version:"current",frontMatter:{id:"scroll-list",title:"ScrollList"},sidebar:"docs",previous:{title:"ModalWindow",permalink:"/4.13/docs/development/ui-development/ui-components/containers/modal-window"},next:{title:"ScrollWheel",permalink:"/4.13/docs/development/ui-development/ui-components/containers/scroll-wheel"}},S=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[{value:"Item Templates",id:"item-templates",children:[]}]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],N={toc:S};function C(e){var t,n=e,{components:u}=n,v=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=w(w({},N),v),m(t,h({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The ScrollList is a scrollable menu consisting of a number of items and a number of widgets, which are dynamically updated as they are scrolled into view. The ScrollList is also able to invoke callbacks when interacting with the items in the ScrollList."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-list/widget-appearance.gif",mdxType:"Figure"},"ScrollList running in the simulator"),(0,r.kt)("h2",w({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The ScrollList can be found in the Containers widget group in TouchGFX Designer."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-list/widget-group.png",mdxType:"Figure"},"ScrollList in TouchGFX Designer"),(0,r.kt)("h2",w({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a ScrollList in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,r.kt)(c.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Type")," specifies if ScrollList is oriented vertically or horizontally")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(l.Z,{mdxType:"Property"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"W")," and ",(0,r.kt)(l.Z,{mdxType:"Property"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget. ",(0,r.kt)(c.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Item Template")),(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Item Template")," specifies which CustomContainer to use as template.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Number of Items")," specifies the number of items present in the ScrollList.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Animation")),(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Easing")," and ",(0,r.kt)(l.Z,{mdxType:"Property"},"Easing Option")," specify which easing equation to use for animations.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Swipe Acc.")," and ",(0,r.kt)(l.Z,{mdxType:"Property"},"Drag Acc.")," specify the acceleration when scrolling.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)(l.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(l.Z,{mdxType:"Property"},"Y")," values.")))),(0,r.kt)("h3",w({},{id:"item-templates"}),"Item Templates"),(0,r.kt)("p",null,"The items in a ScrollList are based on a concept called ",(0,r.kt)(l.Z,{mdxType:"Property"},"Item Template")," which is a ",(0,r.kt)("a",w({parentName:"p"},{href:"../../touchgfx-engine-features/custom-containers"}),"CustomContainer")," that serves as a base for the graphical elements for the items in the ScrollList.\nBefore creating a ScrollList, a Custom Container should be created to have an Item Template for the ScrollList."),(0,r.kt)("p",null,"After having created the ScrollList the CustomContainer can be selected under the property ",(0,r.kt)(l.Z,{mdxType:"Property"},"Item Template"),". Specifying the ",(0,r.kt)(l.Z,{mdxType:"Property"},"Item Template")," results in the ScrollList resizing to fit with the size property that is not in the scrollable direction (width for vertical ScrollLists and height for horizontal ScrollLists) of the selected Custom Container.\nChanging the other size property (height for vertical and width for horizontal) determines the number of items visible."),(0,r.kt)("h2",w({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by the ScrollList are described in the following sections."),(0,r.kt)("h3",w({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget action")),(0,r.kt)("th",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",w({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",w({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",w({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",w({},{id:"triggers"}),"Triggers"),(0,r.kt)("p",null,"A ScrollList does not emit any triggers."),(0,r.kt)("h2",w({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"A ScrollList is a ",(0,r.kt)("a",w({parentName:"p"},{href:"container"}),"Container")," type, and does not per default appear in the draw chain. Therefore, the performance is wholly dependent on the childrens drawing performance."),(0,r.kt)("p",null,"For more details on drawing performance, read the ",(0,r.kt)("a",w({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",w({},{id:"examples"}),"Examples"),(0,r.kt)("h3",w({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a ScrollList."),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",w({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    updateItemCallback(this, &Screen1ViewBase::updateItemCallbackHandler)\n{\n    scrollList.setPosition(140, 10, 200, 252);\n    scrollList.setHorizontal(false);\n    scrollList.setCircular(false);\n    scrollList.setEasingEquation(touchgfx::EasingEquations::backEaseOut);\n    scrollList.setSwipeAcceleration(10);\n    scrollList.setDragAcceleration(10);\n    scrollList.setNumberOfItems(20);\n    scrollList.setPadding(0, 0);\n    scrollList.setSnapping(false);\n    scrollList.setDrawableSize(50, 2);\n    scrollList.setDrawables(scrollListListItems, updateItemCallback);\n\n    add(scrollList);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n    scrollList.initialize();\n    for (int i = 0; i < scrollListListItems.getNumberOfDrawables(); i++)\n    {\n        scrollListListItems[i].initialize();\n    }\n}\n\nvoid Screen1ViewBase::updateItemCallbackHandler(touchgfx::DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex)\n{\n    if (items == &scrollListListItems)\n    {\n        touchgfx::Drawable* d = items->getDrawable(containerIndex);\n        TextContainer* cc = (TextContainer*)d;\n        scrollListUpdateItem(*cc, itemIndex);\n    }\n}\n')),(0,r.kt)(o.Z,{mdxType:"Tip"},"You can use these functions and the others available in the ScrollList class in user code. Remember to force a redraw by calling ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"scrollList.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h3",w({},{id:"user-code"}),"User Code"),(0,r.kt)("p",null,"After the graphical elements for the ScrollList and its properties are set, user code can be written to update the items in the ScrollList. The header file for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1ViewBase")," class which is generated by TouchGFX Designer is shown below:"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"ScreenViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",w({parentName:"pre"},{className:"language-cpp",metastring:"{8-11}","{8-11}":!0}),"class ScreenViewBase : public touchgfx::View\n{\npublic:\n    ScreenViewBase();\n    virtual ~ScreenViewBase() {}\n    virtual void setupScreen();\n\n    virtual void scrollListUpdateItem(CustomContainer& item, int16_t itemIndex)\n    {\n        // Override and implement this function in Screen\n    }\n\nprotected:\n    FrontendApplication& application() {\n         return *static_cast<FrontendApplication*>(Application::getInstance());\n    }\n    touchgfx::BoxWithBorder boxWithBorder;\n    touchgfx::ScrollList scrollList;\n    touchgfx::DrawableListItems<CustomContainer, 6> scrollListListItems;\nprivate:\n    void updateItemCallbackHandler(DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex);\n    touchgfx::Callback<ScreenViewBase, DrawableListItemsInterface*, int16_t, int16_t> updateItemCallback;\n};\n")),(0,r.kt)("p",null,"When TouchGFX Designer generates the code for ScrollList, the function ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem"),", highlighted above, is created for the user to override and update the items in the ScrollList. The function is called each time an item in the ScrollList needs updating, thereby ensuring that an item is updated before it becomes visible. The ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem")," has two parameters, which are used to identify the item being updated and to update it. The parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"itemIndex")," contains the index value of the item, which is used to identify which item is being updated. The parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," is a reference to a CustomContainer object which is a visible item in the ScrollList. Updating the graphics for the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," results in an update to the render for a visible item in the ScrollList."),(0,r.kt)("p",null,"An example integration of ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem")," is shown below:"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",w({parentName:"pre"},{className:"language-cpp"}),"#ifndef SCREEN1_VIEW_HPP\n#define SCREEN1_VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/ScreenPresenter.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    virtual void scrollListUpdateItem(CustomContainer& item, int16_t itemIndex);\nprotected:\n};\n\n#endif // SCREEN1_VIEW_HP\n")),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",w({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::scrollListUpdateItem(CustomContainer& item, int16_t itemIndex)\n{\n    item.setValue(itemIndex);\n}\n")),(0,r.kt)("p",null,"In the header file ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.hpp"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollListUpdateItem")," function is overidden and then implemented in ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp"),"."),(0,r.kt)("p",null,"The goal of this example is to update the text in the Item Template with the index value of the items which are visible, like the example shown ",(0,r.kt)("a",w({parentName:"p"},{href:"scroll-list"}),"in the beginning of this section"),". Since the Item Template is based on the CustomContainer, a ",(0,r.kt)("inlineCode",{parentName:"p"},"setValue")," function is created for the CustomContainer. The setValue function is able to take the ",(0,r.kt)("inlineCode",{parentName:"p"},"itemIndex")," parameter and update the text in the item template. Calling setvalue for the parameter item will cause the items to update their appearance, thereby showing their index value."),(0,r.kt)("h3",w({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,r.kt)("p",null,"To further explore the ScrollList, try creating a new application within TouchGFX Designer with one of the following UI templates:"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-templates/scroll-wheel-and-list-example.png",mdxType:"Figure"},"ScrollWheel and List Example UI template in TouchGFX Designer"),(0,r.kt)("h2",w({},{id:"api-reference"}),"API Reference"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_scroll_list",mdxType:"Link"},"API reference for the ScrollList class"))))}C.isMDXComponent=!0}}]);