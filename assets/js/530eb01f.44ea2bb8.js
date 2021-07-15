(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[495],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(r),h=i,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2425:function(e,t,r){"use strict";var n=r(7294);class i extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=i},4035:function(e,t,r){"use strict";var n=r(7294),i=r(5026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,l=(0,i.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:a,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:a,src:l})),n.createElement("p",null,e.children))}},9415:function(e,t,r){"use strict";var n=r(7294),i=r(8678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends n.Component{render(){return n.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=l},8678:function(e,t,r){"use strict";var n=r(7294);class i extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},2083:function(e,t,r){"use strict";var n=r(7294);class i extends n.Component{render(){return n.createElement("code",null,this.props.children)}}t.Z=i},204:function(e,t,r){"use strict";var n=r(7294);class i extends n.Component{render(){return n.createElement("i",null,this.props.children)}}t.Z=i},630:function(e,t,r){"use strict";var n=r(7294);class i extends n.Component{render(){return n.createElement("i",null,this.props.children)}}t.Z=i},7793:function(e,t,r){"use strict";var n=r(7294),i=r(8678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends n.Component{render(){return n.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=l},1217:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(7294),i=r(3727),a=r(1368),l=r(5096),o=r(4487);const c=(0,n.createContext)({collectLink:()=>{}});var s=r(5026),d=r(7023),p=Object.defineProperty,u=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&k(e,r,t[r]);if(m)for(var r of m(t))g.call(t,r)&&k(e,r,t[r]);return e};var y=function(e){var t,r=e,{isNavLink:p,to:k,href:y,activeClassName:b,isActive:w,"data-noBrokenLinkCheck":x,autoAddBaseUrl:N=!0}=r,C=((e,t)=>{var r={};for(var n in e)f.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&g.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:P}}=(0,a.Z)(),{withBaseUrl:T}=(0,s.C)(),O=(0,n.useContext)(c),Z=k||y,E=(0,l.Z)(Z),j=null==Z?void 0:Z.replace("pathname://","");let S=void 0!==j?(A=j,N&&(e=>e.startsWith("/"))(A)?T(A):A):void 0;var A;S&&E&&(S=(0,d.applyTrailingSlash)(S,P));const I=(0,n.useRef)(!1),D=p?i.OL:i.rU,_=o.Z.canUseIntersectionObserver;let M;(0,n.useEffect)((()=>(!_&&E&&null!=S&&window.docusaurus.prefetch(S),()=>{_&&M&&M.disconnect()})),[S,_,E]);const B=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,F=!S||!E||B;return S&&E&&!B&&!x&&O.collectLink(S),F?n.createElement("a",v(v({href:S},Z&&!E&&{target:"_blank",rel:"noopener noreferrer"}),C)):n.createElement(D,v((W=v({},C),u(W,h({onMouseEnter:()=>{I.current||null==S||(window.docusaurus.preload(S),I.current=!0)},innerRef:e=>{var t,r;_&&e&&E&&(t=e,r=()=>{null!=S&&window.docusaurus.prefetch(S)},M=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(t),M.disconnect(),r())}))})),M.observe(t))},to:S||""}))),p&&{isActive:w,activeClassName:b}));var W}},5096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return i}})},5026:function(e,t,r){"use strict";r.d(t,{C:function(){return a},Z:function(){return l}});var n=r(1368),i=r(5096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(n)return t+r;const l=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+l:l}(t,e,r,n)}}function l(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},7271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[r]=e.split(/[#?]/),n="/"===r?"/":(i=r,t?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(r,n)}},7023:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=r(7271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(i).default}});var a=r(1080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(a).default}})},1080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},982:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return b},contentTitle:function(){return w},metadata:function(){return x},toc:function(){return N},default:function(){return P}});var n=r(3905),i=r(4035),a=r(9415),l=r(630),o=r(7793),c=r(2083),s=r(204),d=r(1217),p=r(2425),u=Object.defineProperty,h=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&v(e,r,t[r]);if(f)for(var r of f(t))k.call(t,r)&&v(e,r,t[r]);return e};const b={id:"circle",title:"Circle"},w=void 0,x={unversionedId:"development/ui-development/ui-components/shapes/circle",id:"development/ui-development/ui-components/shapes/circle",isDocsHomePage:!1,title:"Circle",description:"A Circle is a widget based on the CanvasWidget capable of drawing a circle. This circle can be a partial circle, and either filled or outlined. The center, radius, line width, line cap and circle arc can be modified. The Circle can either use an image or a single color as fill.",source:"@site/docs/development/ui-development/ui-components/shapes/circle.mdx",sourceDirName:"development/ui-development/ui-components/shapes",slug:"/development/ui-development/ui-components/shapes/circle",permalink:"/4.13/docs/development/ui-development/ui-components/shapes/circle",version:"current",frontMatter:{id:"circle",title:"Circle"},sidebar:"docs",previous:{title:"Line",permalink:"/4.13/docs/development/ui-development/ui-components/shapes/line"},next:{title:"Shape",permalink:"/4.13/docs/development/ui-development/ui-components/shapes/shape"}},N=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],C={toc:N};function P(e){var t,r=e,{components:u}=r,v=((e,t)=>{var r={};for(var n in e)g.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&f)for(var n of f(e))t.indexOf(n)<0&&k.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=y(y({},C),v),h(t,m({components:u,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"A Circle is a widget based on the CanvasWidget capable of drawing a circle. This circle can be a partial circle, and either filled or outlined. The center, radius, line width, line cap and circle arc can be modified. The Circle can either use an image or a single color as fill."),(0,n.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/circle/widget-appearance.png",mdxType:"Figure"},"Circle running in the simulator"),(0,n.kt)("h2",y({},{id:"widget-group"}),"Widget Group"),(0,n.kt)("p",null,"The Circle can be found in the Shapes widget group in TouchGFX Designer."),(0,n.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/circle/widget-group.png",mdxType:"Figure"},"Circle in TouchGFX Designer"),(0,n.kt)("h2",y({},{id:"properties"}),"Properties"),(0,n.kt)("p",null,"The properties for the Circle are described in the following sections."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Property Group")),(0,n.kt)("th",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Name")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,n.kt)(s.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Location")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{mdxType:"Property"},"X")," and ",(0,n.kt)(l.Z,{mdxType:"Property"},"Y")," specify the top left corner of the widget relative to its parent.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"W")," and ",(0,n.kt)(l.Z,{mdxType:"Property"},"H")," specify the width and height of the widget.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget.",(0,n.kt)("br",null),(0,n.kt)(s.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Image & Color")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{mdxType:"Property"},"Image")," specifies the image used to fill the circle from the Designer skin library or the Project folder. ",(0,n.kt)("br",null),(0,n.kt)("br",null),"If an image is not chosen, ",(0,n.kt)(l.Z,{mdxType:"Property"},"Color")," specifies the color used to fill the circle.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Appearance")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{mdxType:"Property"},"Center Position X")," and ",(0,n.kt)(l.Z,{mdxType:"Property"},"Center Position Y")," specify the coordinates for the center of the circle, relative to the top left corner of the widget.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Start & End Angle")," specify the angles in degrees of the start and ending points of the circle.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Radius")," specifies the radius of the circle.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Line Width")," specifies the width of the line forming the circumference of the circle.",(0,n.kt)("br",null),(0,n.kt)(s.Z,{mdxType:"InlineNote"},"Set this to 0 to get a filled circle"),".",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Cap Style")," specifies the shape of the edges of the circle. ",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Alpha")," specifies the transparency of the widget.",(0,n.kt)("br",null),(0,n.kt)(s.Z,{mdxType:"InlineNote"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mixins")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{mdxType:"Property"},"Draggable")," specifies if the widget is draggable at runtime.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,n.kt)(l.Z,{mdxType:"Property"},"Alpha")," value.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,n.kt)(l.Z,{mdxType:"Property"},"X")," and ",(0,n.kt)(l.Z,{mdxType:"Property"},"Y")," values.")))),(0,n.kt)("h2",y({},{id:"interactions"}),"Interactions"),(0,n.kt)("p",null,"The actions and triggers supported by the Circle are described in the following sections."),(0,n.kt)("h3",y({},{id:"actions"}),"Actions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Standard widget action")),(0,n.kt)("th",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Move widget")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Fade widget")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Hide widget")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Show widget")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,n.kt)("h3",y({},{id:"triggers"}),"Triggers"),(0,n.kt)("p",null,"A Circle does not emit any triggers."),(0,n.kt)("h2",y({},{id:"performance"}),"Performance"),(0,n.kt)("p",null,"A Circle is based on the CanvasWidget and is heavily dependent on the MCU for rendering. Therefore, the Circle is considered a demanding widget on most platforms."),(0,n.kt)("p",null,"For more details on CanvasWidget drawing performance, read the ",(0,n.kt)("a",y({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,n.kt)("h2",y({},{id:"examples"}),"Examples"),(0,n.kt)("h3",y({},{id:"generated-code"}),"Generated Code"),(0,n.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Circle."),(0,n.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n\n    touchgfx::CanvasWidgetRenderer::setupBuffer(canvasBuffer, CANVAS_BUFFER_SIZE);\n\n    circleName.setPosition(40, 36, 200, 200);\n    circleName.setCenter(100, 100);\n    circleName.setRadius(80);\n    circleName.setLineWidth(0);\n    circleName.setArc(0, 225);\n    circleName.setCapPrecision(180);\n    circleNamePainter.setColor(touchgfx::Color::getColorFrom24BitRGB(0, 171, 223));\n    circleName.setPainter(circleNamePainter);\n\n    add(circleName);\n}\n')),(0,n.kt)(o.Z,{mdxType:"Tip"},"You can use these functions and the others available in the Circle class in user code. Remember to force a redraw by calling ",(0,n.kt)(c.Z,{mdxType:"InlineCode"},"circleName.invalidate()")," if you change the appearance of the widget."),(0,n.kt)("h3",y({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,n.kt)("p",null,"To further explore the Circle, try creating a new application within TouchGFX Designer with the following UI template:"),(0,n.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-templates/line-and-circle-example.png",mdxType:"Figure"},"Line and Circle Example UI template in TouchGFX Designer"),(0,n.kt)("h2",y({},{id:"api-reference"}),"API Reference"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,(0,n.kt)(d.Z,{to:"../../../../api/classes/classtouchgfx_1_1_circle",mdxType:"Link"},"API reference for the Circle class")),(0,n.kt)("li",null,(0,n.kt)(d.Z,{to:"../../../../api/classes/classtouchgfx_1_1_canvas",mdxType:"Link"},"API reference for the Canvas class used to draw a Circle"))))}P.isMDXComponent=!0}}]);