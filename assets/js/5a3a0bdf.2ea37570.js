(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4326],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(t),d=r,u=h["".concat(l,".").concat(d)]||h[d]||m[d]||i;return t?a.createElement(u,o(o({ref:n},p),{},{components:t})):a.createElement(u,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2425:function(e,n,t){"use strict";var a=t(7294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}n.Z=r},4035:function(e,n,t){"use strict";var a=t(7294),r=t(5026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,i=e.height,o=(0,r.Z)(e.imageSource);return n?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:t,height:i,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:t,height:i,src:o})),a.createElement("p",null,e.children))}},9415:function(e,n,t){"use strict";var a=t(7294),r=t(8678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}n.Z=o},8678:function(e,n,t){"use strict";var a=t(7294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{class:e},a.createElement("div",{class:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{class:"highlight-content"},this.props.children))}}n.Z=r},630:function(e,n,t){"use strict";var a=t(7294);class r extends a.Component{render(){return a.createElement("i",null,this.props.children)}}n.Z=r},6771:function(e,n,t){"use strict";var a=t(7294);class r extends a.Component{render(){return a.createElement("p",null,a.createElement("div",{class:"videoWrapper"},a.createElement("video",{controls:!0},a.createElement("source",{src:this.props.url,type:"video/mp4"}))))}}n.Z=r},1217:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var a=t(7294),r=t(3727),i=t(1368),o=t(5096),c=t(4487);const l=(0,a.createContext)({collectLink:()=>{}});var s=t(5026),p=t(7023),m=Object.defineProperty,h=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,n,t)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,w=(e,n)=>{for(var t in n||(n={}))f.call(n,t)&&v(e,t,n[t]);if(u)for(var t of u(n))g.call(n,t)&&v(e,t,n[t]);return e};var b=function(e){var n,t=e,{isNavLink:m,to:v,href:b,activeClassName:y,isActive:C,"data-noBrokenLinkCheck":k,autoAddBaseUrl:x=!0}=t,T=((e,n)=>{var t={};for(var a in e)f.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&u)for(var a of u(e))n.indexOf(a)<0&&g.call(e,a)&&(t[a]=e[a]);return t})(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O}}=(0,i.Z)(),{withBaseUrl:E}=(0,s.C)(),N=(0,a.useContext)(l),P=v||b,S=(0,o.Z)(P),B=null==P?void 0:P.replace("pathname://","");let M=void 0!==B?(j=B,x&&(e=>e.startsWith("/"))(j)?E(j):j):void 0;var j;M&&S&&(M=(0,p.applyTrailingSlash)(M,O));const I=(0,a.useRef)(!1),Z=m?r.OL:r.rU,D=c.Z.canUseIntersectionObserver;let A;(0,a.useEffect)((()=>(!D&&S&&null!=M&&window.docusaurus.prefetch(M),()=>{D&&A&&A.disconnect()})),[M,D,S]);const F=null!==(n=null==M?void 0:M.startsWith("#"))&&void 0!==n&&n,R=!M||!S||F;return M&&S&&!F&&!k&&N.collectLink(M),R?a.createElement("a",w(w({href:M},P&&!S&&{target:"_blank",rel:"noopener noreferrer"}),T)):a.createElement(Z,w((_=w({},T),h(_,d({onMouseEnter:()=>{I.current||null==M||(window.docusaurus.preload(M),I.current=!0)},innerRef:e=>{var n,t;D&&e&&S&&(n=e,t=()=>{null!=M&&window.docusaurus.prefetch(M)},A=new window.IntersectionObserver((e=>{e.forEach((e=>{n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.unobserve(n),A.disconnect(),t())}))})),A.observe(n))},to:M||""}))),m&&{isActive:C,activeClassName:y}));var _}},5096:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,{b:function(){return a},Z:function(){return r}})},5026:function(e,n,t){"use strict";t.d(n,{C:function(){return i},Z:function(){return o}});var a=t(1368),r=t(5096);function i(){const{siteConfig:{baseUrl:e="/",url:n}={}}=(0,a.Z)();return{withBaseUrl:(t,a)=>function(e,n,t,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if((0,r.b)(t))return t;if(a)return n+t;const o=t.startsWith(n)?t:n+t.replace(/^\//,"");return i?e+o:o}(n,e,t,a)}}function o(e,n={}){const{withBaseUrl:t}=i();return t(e,n)}},7271:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){if(e.startsWith("#"))return e;if(void 0===n)return e;const[t]=e.split(/[#?]/),a="/"===t?"/":(r=t,n?function(e){return e.endsWith("/")?e:`${e}/`}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));var r;return e.replace(t,a)}},7023:function(e,n,t){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var r=t(7271);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=t(1080);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return a(i).default}})},1080:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},2648:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return w},contentTitle:function(){return b},metadata:function(){return y},toc:function(){return C},default:function(){return x}});var a=t(3905),r=t(4035),i=t(9415),o=t(1217),c=t(2425),l=t(6771),s=t(630),p=Object.defineProperty,m=Object.defineProperties,h=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,v=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&g(e,t,n[t]);if(d)for(var t of d(n))f.call(n,t)&&g(e,t,n[t]);return e};const w={id:"achieving-better-performance-with-cacheable-container",title:"Achieving Better Performance with CacheableContainer"},b=void 0,y={unversionedId:"development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",id:"development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",isDocsHomePage:!1,title:"Achieving Better Performance with CacheableContainer",description:"In this section you will see how to achieve better performance in",source:"@site/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",permalink:"/4.13/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container",version:"current",frontMatter:{id:"achieving-better-performance-with-cacheable-container",title:"Achieving Better Performance with CacheableContainer"},sidebar:"docs",previous:{title:"General UI Component Performance",permalink:"/4.13/docs/development/ui-development/ui-components/general-ui-component-performance"},next:{title:"Loading Images at Runtime",permalink:"/4.13/docs/development/ui-development/scenarios/loading-images-at-runtime"}},C=[{value:"Performance Impact",id:"performance-impact",children:[]},{value:"Test Application",id:"test-application",children:[]},{value:"Performance of Redrawing Complex Containers",id:"performance-of-redrawing-complex-containers",children:[]},{value:"Improving Performance Through Caching",id:"improving-performance-through-caching",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],k={toc:C};function x(e){var n,t=e,{components:p}=t,g=((e,n)=>{var t={};for(var a in e)u.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&d)for(var a of d(e))n.indexOf(a)<0&&f.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=v(v({},k),g),m(n,h({components:p,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"In this section you will see how to achieve better performance in\nsome animation scenarios by using RAM to save some reusable drawings."),(0,a.kt)("p",null,"When moving widgets in your application (like Image or TextArea),\neither through dragging or animation, TouchGFX needs to redraw these\nwidgets in their new positions in every frame, while also in most cases\nredraw part of the background that was previously covered by these\nwidgets."),(0,a.kt)("p",null,"When these widgets are computationally complex such as the\nTextureMapper widget, Shapes, and also large transparent\nImages it is hard for the MCU to render effeciently, as these\nare rendered without hardware acceleration.\nThis results in a screen redraw that takes many milliseconds and\nimpacts the performance of the application."),(0,a.kt)("p",null,"In this we will now see how to use the CacheableContainer to speed up\nanimations that involve computationally complex elements by avoiding\ncostly redrawing.  While measurements in this article were performed\nusing an STM32F429Discovery board, the CacheableContainer technique\napplies generally to other hardware platforms. Some available RAM is\nrequired for creation of a bitmap cache."),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},"Read also about ",(0,a.kt)(o.Z,{to:"../touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"Dynamic Bitmaps"),"."),(0,a.kt)("h2",v({},{id:"performance-impact"}),"Performance Impact"),(0,a.kt)("p",null,"Due to the performance implications of moving computationally\nexpensive widgets with the MCU, an animation that evolves in many\nsmall steps will appear slow and sluggish due to a high render time\nfor each frame.\nProgramming the animation to complete faster (in time) will cause\nindividual steps to be large, and the animation will not appear smooth\nto the user."),(0,a.kt)("p",null,"The following is an example running on an STM32F429-DISCO board\n(240x320), where a fullscreen Container is moved up vertically, while\na similar Container is moved in from the bottom."),(0,a.kt)("p",null,"In the video below, the\n",(0,a.kt)("a",v({parentName:"p"},{href:"../ui-components/buttons/toggle-button"}),"ToggleButton"),"\nswitches between CacheableContainer being enabled and disabled. The performance\ndifference is clearly visible."),(0,a.kt)(l.Z,{url:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/knowledgebase/Cacheable%20Container/Cacheable%20Container%20example.mp4",mdxType:"Video"}),(0,a.kt)("p",null,"The two Containers that are moved each consist of a background\n",(0,a.kt)("a",v({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box"),", a\n",(0,a.kt)("a",v({parentName:"p"},{href:"../ui-components/miscellaneous/text-area"}),"TextArea"),",\nand a\n",(0,a.kt)("a",v({parentName:"p"},{href:"../ui-components/images/texture-mapper"}),"TextureMapper"),". The\nTextureMapper is configured to use the bilinear rendering algorithm\nand a global alpha of 174, making it very expensive to draw. The\nrendering time for the whole screen is around 100 ms on the\nSTM32F429-DISCO board."),(0,a.kt)("h2",v({},{id:"test-application"}),"Test Application"),(0,a.kt)("p",null,"In order to move the two elements relative to each other, they are put\nin a parent Container named ",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer")," which is given twice the height of either child Container, giving it a\nsize of ",(0,a.kt)("inlineCode",{parentName:"p"},"240 x 640 (2*320)"),". By declaring the container as a move\nanimator in TouchGFX Designer, it will be able to receive application\nticks and animate over time during which performance can be measured."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/toucgfx-designer-test-application-overview.png",mdxType:"Figure"},"CacheableContainer test application overview"),(0,a.kt)("p",null,"The upper container named ",(0,a.kt)("inlineCode",{parentName:"p"},"container1")," is placed at position x=0, y=0. The\nlower container named ",(0,a.kt)("inlineCode",{parentName:"p"},"container2")," is placed at position x=0, y=320 directly\nbelow container1 in the parent ",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),"."),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"container1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"container2")," are placed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),", the\ntwo elements will move together when we move the ",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer"),". For example, if\nwe move the ",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer")," to position x=0, y=-320, ",(0,a.kt)("inlineCode",{parentName:"p"},"container1"),"\nwill be invisible, but ",(0,a.kt)("inlineCode",{parentName:"p"},"container2")," will be fully visible.\nThe animation between these two states can be created using an\ninteraction in TouchGFX Designer."),(0,a.kt)("p",null,"The code below will move the ",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer")," up if it is down, and\ndown if it is already up. For simplicity, the code is inserted into the\n",(0,a.kt)("inlineCode",{parentName:"p"},"handleClickEvent")," eventhandler of the view, and is therefore executed\nwhenever the user touches anywhere on the screen (below the ToggleButton):"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp",metastring:"{9-12}","{9-12}":!0}),"void Screen1View::handleClickEvent(const ClickEvent& evt)\n{\n    //Forward event to base View (for the ToggleButton to work)\n    View::handleClickEvent(evt);\n    //If touch is released and y > 50 (below the ToggleButton), move masterContainer\n    if (evt.getType() == ClickEvent::RELEASED && evt.getY() > 50)\n    {\n        const int endPosition = masterContainer.getY() >= 0 ? -320 : 0;\n        masterContainer.startMoveAnimation(masterContainer.getX(), endPosition,\n                            20 /* ticks */,\n                            EasingEquations::cubicEaseInOut,\n                            EasingEquations::cubicEaseInOut);\n    }\n}\n")),(0,a.kt)("h2",v({},{id:"performance-of-redrawing-complex-containers"}),"Performance of Redrawing Complex Containers"),(0,a.kt)("p",null,"As mentioned, the render time for one frame is around 100 ms when the\nMCU has to redraw the expensive TextureMapper at each small step of\nthe animation. This gives us 10 frames per second (fps). The whole\nanimation is 20 frames and will therefore take around two seconds."),(0,a.kt)("p",null,"On the STM32F429-DISCO evaluation kit, the rendering time is available\nas a digital signal on GPIO G14. The VSYNC signal is available on\nG13. The GPIO configuration is set up in the ",(0,a.kt)("inlineCode",{parentName:"p"},"GPIO.cpp")," file."),(0,a.kt)("p",null,"The following image is a measurement of VSYNC and RENDER_TIME for the\napplication when moving the ",(0,a.kt)("inlineCode",{parentName:"p"},"masterContainer")," upwards:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-vsync-and-render-time.png",mdxType:"Figure"},"Saleae Logic Software vsync and render time measurement"),(0,a.kt)("p",null,"The rendering time is the first signal (active low). We can see that\nthe rendering time for the first frame in the move animation is 99.29\nms."),(0,a.kt)("p",null,"The lower signal is the VSYNC, which transitions high to low on every\nframe when pixels are clocked out to the display. We can see on the\nmeasurement above that drawing a single frame covers the time for 7\nframes on the display. On the 8th VSYNC signal the rendering of the\nnext frame starts. During the rendering, the display is repeatedly\nshowing the previously drawn frame (in the other framebuffer)."),(0,a.kt)("h2",v({},{id:"improving-performance-through-caching"}),"Improving Performance Through Caching"),(0,a.kt)("p",null,"We can improve the performance of the above move animation by caching\nthe rendering of the container to memory. After doing that we can\nsimply move the pixels located in that memory (using DMA) to the\nframebuffer, rather than redrawing a complex widget using the MCU.\nEven if an application could achieve 60 frames per second using the\nMCU alone it would be busy (perhaps with 100% MCU load) making the same\ncalculations repeatedly rather than doing something more important."),(0,a.kt)("p",null,'This "in-memory-image" of the Container can now be shown on the screen\nat different places, instead of re-rendering the Container.'),(0,a.kt)("p",null,"The first thing to do is to enable caching through TouchGFX Designer by checking the ",(0,a.kt)(s.Z,{mdxType:"Property"},"Cacheable")," property on the two Containers ",(0,a.kt)("inlineCode",{parentName:"p"},"container1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"container2"),":"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/cacheable-container-option-in-touchgfx-designer.png",mdxType:"Figure"},"CacheableContainer option on Container widget"),(0,a.kt)("p",null,"The next step is to create two dynamic bitmaps in RAM that the Containers can be cached into."),(0,a.kt)("p",null,"Decide on an address in RAM where the bitmap cache should be located. In this particular example, we placed it in SDRAM (starts at address 0xd0000000 on an STM32F429) just after the framebuffers."),(0,a.kt)("p",null,"For the Windows simulator, the cache is allocated in a global variable:"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#ifdef SIMULATOR\n    uint32_t sdramBuffer[8*1024*1024/4];\n    uint16_t* sdram = (uint16_t*)sdramBuffer;\n#else\n    uint16_t* sdram = (uint16_t*)(0xd0000000 + 320*240*2*2);\n#endif\n")),(0,a.kt)("p",null,"Initialize the bitmap cache and create two dynamic bitmaps for caching:"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp",metastring:"{2-2}","{2-2}":!0}),"//Create bitmap cache and two dynamic bitmap for caching, each bitmap is 150Kb\nBitmap::setCache(sdram, 320*1024, 2); //320Kb cache\ndynamicBitmap1 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);\ndynamicBitmap2 = Bitmap::dynamicBitmapCreate(240, 320, Bitmap::RGB565);\n")),(0,a.kt)("p",null,"Assign the dynamic bitmaps to the Containers and set them in caching mode:"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"//Assign the bitmaps to the CacheableContainers\ncontainer1.setCacheBitmap(dynamicBitmap1);\ncontainer2.setCacheBitmap(dynamicBitmap2);\n\n//Enable caching\ncontainer1.enableCachedMode(true);\ncontainer2.enableCachedMode(true);\n\n//Finally update the cached bitmaps\ncontainer1.updateCache();\ncontainer2.updateCache();\n")),(0,a.kt)("p",null,"Calls to ",(0,a.kt)("inlineCode",{parentName:"p"},"Container::updateCache()")," will render the two Containers\ninto their respective bitmaps. Call this method whenever an updated\nstate of the containers is needed. This must be handled in application\ncode by the developer."),(0,a.kt)("p",null,"With caching enabled for ",(0,a.kt)("inlineCode",{parentName:"p"},"container1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"container2"),", performance\nmeasurements now show a factor 20 improvement in render time from\n~99ms to ~5ms meaning we can easily render in 60 frames per second\ncompleting the entire animation within 20 frames."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container/saleae-logic-software-comparison.png",mdxType:"Figure"},"Saleae Logic Software vsync and render time measurement"),(0,a.kt)("h2",v({},{id:"conclusion"}),"Conclusion"),(0,a.kt)("p",null,"Using CacheableContainer with DynamicBitmap when animating (frequent\nmoves) can improve the render time dramatically when the subject is\ncomputationally complex and does not change between animation\nsteps. In the event that the cache must update (e.g. a watch face when\nthe time is updated) the contents of the cache can be recomputed at\ncertain points during the animation controlled by the application."),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(o.Z,{to:"../touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"Dynamic Bitmaps")),(0,a.kt)("li",null,(0,a.kt)(o.Z,{to:"loading-images-at-runtime",mdxType:"Link"},"Dynamic Bitmaps: Load images at runtime"))))}x.isMDXComponent=!0}}]);