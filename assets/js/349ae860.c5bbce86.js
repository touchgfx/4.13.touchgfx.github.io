(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4785],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){"use strict";var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=i},88678:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},2083:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},60204:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=a},10630:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=a},37793:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=i},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(67294),a=n(73727),o=n(11368),i=n(35096),l=n(84487);const s=(0,r.createContext)({collectLink:()=>{}});var c=n(25026),u=n(67023),p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&b(e,n,t[n]);if(h)for(var n of h(t))g.call(t,n)&&b(e,n,t[n]);return e};var v=function(e){var t,n=e,{isNavLink:p,to:b,href:v,activeClassName:x,isActive:y,"data-noBrokenLinkCheck":w,autoAddBaseUrl:N=!0}=n,B=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T}}=(0,o.Z)(),{withBaseUrl:P}=(0,c.C)(),O=(0,r.useContext)(s),C=b||v,E=(0,i.Z)(C),Z=null==C?void 0:C.replace("pathname://","");let F=void 0!==Z?(I=Z,N&&(e=>e.startsWith("/"))(I)?P(I):I):void 0;var I;F&&E&&(F=(0,u.applyTrailingSlash)(F,T));const j=(0,r.useRef)(!1),_=p?a.OL:a.rU,A=l.Z.canUseIntersectionObserver;let S;(0,r.useEffect)((()=>(!A&&E&&null!=F&&window.docusaurus.prefetch(F),()=>{A&&S&&S.disconnect()})),[F,A,E]);const D=null!==(t=null==F?void 0:F.startsWith("#"))&&void 0!==t&&t,M=!F||!E||D;return F&&E&&!D&&!w&&O.collectLink(F),M?r.createElement("a",k(k({href:F},C&&!E&&{target:"_blank",rel:"noopener noreferrer"}),B)):r.createElement(_,k((G=k({},B),d(G,m({onMouseEnter:()=>{j.current||null==F||(window.docusaurus.preload(F),j.current=!0)},innerRef:e=>{var t,n;A&&e&&E&&(t=e,n=()=>{null!=F&&window.docusaurus.prefetch(F)},S=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t),S.disconnect(),n())}))})),S.observe(t))},to:F||""}))),p&&{isActive:y,activeClassName:x}));var G}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(11368),a=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":(a=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(n,r)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},29914:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return x},contentTitle:function(){return y},metadata:function(){return w},toc:function(){return N},default:function(){return T}});var r=n(3905),a=n(44035),o=n(29415),i=n(10630),l=n(37793),s=n(2083),c=n(60204),u=n(31217),p=n(22425),d=Object.defineProperty,m=Object.defineProperties,h=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&k(e,n,t[n]);if(f)for(var n of f(t))b.call(t,n)&&k(e,n,t[n]);return e};const x={id:"flex-button",title:"FlexButton"},y=void 0,w={unversionedId:"development/ui-development/ui-components/buttons/flex-button",id:"development/ui-development/ui-components/buttons/flex-button",isDocsHomePage:!1,title:"FlexButton",description:"A FlexButton in TouchGFX is a widget that is aware of touch events and can send a callback when the FlexButton is triggered. The FlexButton is adaptable to the needs of the user. It can combine the behaviour and appearance of other button types but takes up a bit more RAM as a tradeoff. This will, however, in most cases be an insignificant amount. The FlexButton can be composed of a maximum of 4 visual elements: BoxWithBorder, Icon, Text and Image.",source:"@site/docs/development/ui-development/ui-components/buttons/flex-button.mdx",sourceDirName:"development/ui-development/ui-components/buttons",slug:"/development/ui-development/ui-components/buttons/flex-button",permalink:"/4.13/docs/development/ui-development/ui-components/buttons/flex-button",version:"current",frontMatter:{id:"flex-button",title:"FlexButton"},sidebar:"docs",previous:{title:"RepeatButton",permalink:"/4.13/docs/development/ui-development/ui-components/buttons/repeat-button"},next:{title:"Image",permalink:"/4.13/docs/development/ui-development/ui-components/images/image"}},N=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],B={toc:N};function T(e){var t,n=e,{components:d}=n,k=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&b.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},B),k),m(t,h({components:d,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A FlexButton in TouchGFX is a widget that is aware of touch events and can send a callback when the FlexButton is triggered. The FlexButton is adaptable to the needs of the user. It can combine the behaviour and appearance of other button types but takes up a bit more RAM as a tradeoff. This will, however, in most cases be an insignificant amount. The FlexButton can be composed of a maximum of 4 visual elements: BoxWithBorder, Icon, Text and Image."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/flex-button/widget-appearance.png",mdxType:"Figure"},"FlexButton running in the simulator (combining BoxWithBorder, Icon and Text elements)"),(0,r.kt)("h2",v({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The FlexButton can be found in the Buttons widget group in TouchGFX Designer."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/flex-button/widget-group.png",mdxType:"Figure"},"FlexButton in TouchGFX Designer"),(0,r.kt)("h2",v({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a FlexButton in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(i.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,r.kt)(c.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(i.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(i.Z,{mdxType:"Property"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(i.Z,{mdxType:"Property"},"W")," and ",(0,r.kt)(i.Z,{mdxType:"Property"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(i.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget.",(0,r.kt)("br",null),(0,r.kt)(c.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(i.Z,{mdxType:"Property"},"Alpha")," specifies the transparency of the widget.",(0,r.kt)("br",null),(0,r.kt)(c.Z,{mdxType:"InlineNote"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Trigger")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(i.Z,{mdxType:"Property"},"Click")," , ",(0,r.kt)(i.Z,{mdxType:"Property"},"Touch")," , ",(0,r.kt)(i.Z,{mdxType:"Property"},"Toggle")," and ",(0,r.kt)(i.Z,{mdxType:"Property"},"Repeat")," specify which action triggers the button callback.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Visual Elements")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(i.Z,{mdxType:"Property"},"Image")," , ",(0,r.kt)(i.Z,{mdxType:"Property"},"Box With Border")," , ",(0,r.kt)(i.Z,{mdxType:"Property"},"Text")," and ",(0,r.kt)(i.Z,{mdxType:"Property"},"Icon")," specify which elements make up the widgets visual appearance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(i.Z,{mdxType:"Property"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(i.Z,{mdxType:"Property"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(i.Z,{mdxType:"Property"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,r.kt)(i.Z,{mdxType:"Property"},"Alpha")," value.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(i.Z,{mdxType:"Property"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)(i.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(i.Z,{mdxType:"Property"},"Y")," values.")))),(0,r.kt)("h2",v({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by the FlexButton are described in the following sections."),(0,r.kt)("h3",v({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget action")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",v({},{id:"triggers"}),"Triggers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Trigger")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Button is clicked")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"A button has been clicked.")))),(0,r.kt)("h2",v({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"A FlexButton is potentially composed of up to two Boxes, four Images and one Text, and relies on image and text drawing. Text drawing is very similar to general image drawing (though due to the nature of text characters, a significant amount of alpha blending takes place). Therefore, the FlexButton is considered a fast widget on most platforms."),(0,r.kt)("p",null,"For more details on drawing performance, read the ",(0,r.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",v({},{id:"examples"}),"Examples"),(0,r.kt)("h3",v({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a FlexButton. The code corresponds to the FlexButton shown ",(0,r.kt)("a",v({parentName:"p"},{href:"flex-button"}),"at the start of this section"),", combining the behavior and appearance of the BoxWithBorder, Icon and Text elements."),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    buttonCallback(this, &Screen1ViewBase::buttonCallbackHandler)\n{\n                            // Box with Border behavior and appearance\n    flexButtonName.setBoxWithBorderPosition(0, 0, 176, 74);\n    flexButtonName.setBorderSize(5);\n    flexButtonName.setBoxWithBorderColors(touchgfx::Color::getColorFrom24BitRGB(0, 102, 153), touchgfx::Color::getColorFrom24BitRGB(0, 153, 204), touchgfx::Color::getColorFrom24BitRGB(0, 51, 102), touchgfx::Color::getColorFrom24BitRGB(51, 102, 153));\n                            // Text behavior and appearance\n    flexButtonName.setText(TypedText(T_SINGLEUSEID1));\n    flexButtonName.setTextPosition(30, 12, 176, 74);\n    flexButtonName.setTextColors(touchgfx::Color::getColorFrom24BitRGB(10, 10, 10), touchgfx::Color::getColorFrom24BitRGB(10, 10, 10));\n                            // Icon behavior and appearance\n    flexButtonName.setIconBitmaps(Bitmap(BITMAP_BLUE_ICONS_ALERT_32_ID), Bitmap(BITMAP_BLUE_ICONS_ALERT_32_ID));\n    flexButtonName.setIconXY(20, 17);\n                            // Widget\n    flexButtonName.setPosition(152, 99, 176, 74);\n    flexButtonName.setAction(flexButtonCallback);\n\n    add(flexButtonName);\n}\n\nvoid Screen1ViewBase::flexButtonCallbackHandler(const touchgfx::AbstractButtonContainer& src)\n{\n    if (&src == &flexButtonName)\n    {\n        //InteractionName\n        //When FlexButtonName clicked calls the new virtual function "functionName()" set by the user\n        functionName();\n    }\n}\n')),(0,r.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the FlexButton class in user code. Remember to force a redraw by calling ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"flexButtonName.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h4",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,r.kt)("p",null,"To further explore the FlexButton, try creating a new application within TouchGFX Designer with the following UI template:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/flex-button-example.png",mdxType:"Figure"},"FlexButton Example UI template in TouchGFX Designer"),(0,r.kt)("h2",v({},{id:"api-reference"}),"API Reference"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(u.Z,{to:"../../../../api/classes/classtouchgfx_1_1_abstract_button",mdxType:"Link"},"API reference for the AbstractButton class"))))}T.isMDXComponent=!0}}]);