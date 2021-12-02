(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8928],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22425:function(e,t,r){"use strict";var n=r(67294);class a extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,r){"use strict";var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:i,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:i,src:o})),n.createElement("p",null,e.children))}},88678:function(e,t,r){"use strict";var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,r){"use strict";var n=r(67294),a=r(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=o},35096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return o}});var n=r(11368),a=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},13461:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return m},contentTitle:function(){return b},metadata:function(){return g},toc:function(){return y},default:function(){return k}});var n=r(3905),a=r(44035),i=r(93054),o=r(22425),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&f(e,r,t[r]);if(u)for(var r of u(t))d.call(t,r)&&f(e,r,t[r]);return e};const m={id:"05-display-external",title:"5. Framebuffer in external RAM",sidebar_label:"5. Framebuffer in external RAM"},b=void 0,g={unversionedId:"development/board-bring-up/how-to/05-display-external",id:"development/board-bring-up/how-to/05-display-external",isDocsHomePage:!1,title:"5. Framebuffer in external RAM",description:"Motivation",source:"@site/docs/development/board-bring-up/how-to/05-display-external.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/05-display-external",permalink:"/4.13/docs/development/board-bring-up/how-to/05-display-external",version:"current",sidebarPosition:5,frontMatter:{id:"05-display-external",title:"5. Framebuffer in external RAM",sidebar_label:"5. Framebuffer in external RAM"},sidebar:"docs",previous:{title:"4. External RAM",permalink:"/4.13/docs/development/board-bring-up/how-to/04-enable-external-ram"},next:{title:"6. External addressable flash",permalink:"/4.13/docs/development/board-bring-up/how-to/06-flash-external-addressable"}},y=[{value:"Motivation",id:"motivation",children:[]},{value:"Goal",id:"goal",children:[{value:"Verification",id:"verification",children:[]}]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Do",id:"do",children:[{value:"LTDC Layer configuration",id:"ltdc-layer-configuration",children:[]}]}],v={toc:y};function k(e){var t,r=e,{components:l}=r,f=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=h(h({},v),f),s(t,c({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h2",h({},{id:"motivation"}),"Motivation"),(0,n.kt)("p",null,"In this step we will move the framebuffer from internal to external\nRAM, and make sure that the framebuffer can still be transferred to\nthe display."),(0,n.kt)(i.Z,{mdxType:"Note"},"Skip this step if external RAM is not relevant for your board bring up."),(0,n.kt)("p",null,'This step will stress test the external RAM since the display\ncontroller has certain expectations on the transfer speed. This might\nresult in errors. Common errors are LTDC underrun, because the\nbandwidth of the external RAM is not high enough, or pixel errors\nbecause the RAM is configured incorrectly and is running "out of\nspec".'),(0,n.kt)("h2",h({},{id:"goal"}),"Goal"),(0,n.kt)("p",null,"The goal in this step is to remove the framebuffer array from internal\nRAM and use a framebuffer in external RAM."),(0,n.kt)("h3",h({},{id:"verification"}),"Verification"),(0,n.kt)("p",null,"Here are the verification points for this section. These are similar\nto the verification points when the framebuffer is in internal RAM,\nbut should be checked again, as the speed on the external memory may\ninfluence the transmission of the framebuffer to the display."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Verification Point"),(0,n.kt)("th",h({parentName:"tr"},{align:null}),"Rationale"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Framebuffer is shown"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Display controller or SPI is configured and running")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Updated framebuffer is shown"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"We know how to repeatedly transmit the framebuffer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:null}),"Framerate is correct"),(0,n.kt)("td",h({parentName:"tr"},{align:null}),"The pixel clock and porches are configured to get the required framerate")))),(0,n.kt)("h2",h({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("p",null,"The following are the prerequisites for this step:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Address of the framebuffer in the external RAM")),(0,n.kt)("h2",h({},{id:"do"}),"Do"),(0,n.kt)("p",null,"We have these two tasks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Place the framebuffer in external RAM"),(0,n.kt)("li",{parentName:"ul"},"Setup the display controller to read from the external RAM")),(0,n.kt)("p",null,"When the frambuffer is in external RAM, it is common practice to not\nallocate an array for it. You just declare a pointer to the correct\naddress. The address in external RAM is then manually selected. It can\nbe anywhere in the external RAM, but the start of the RAM is commonly\nused:"),(0,n.kt)(o.Z,{mdxType:"CodeHeader"},"main.c"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"uint16_t* framebuffer = (uint16_t*)0xC0000000;  //16 bpp framebuffer\n")),(0,n.kt)("p",null,"You can reuse the small test programs you created in the steps in\n",(0,n.kt)("a",h({parentName:"p"},{href:"03-display-internal"}),"Display Internal"),"."),(0,n.kt)("h3",h({},{id:"ltdc-layer-configuration"}),"LTDC Layer configuration"),(0,n.kt)("p",null,"Remember to change the configuration of the LTDC Layer. Since we now\nhave a specific address for the framebuffer, we can insert that\naddress in CubeMX (Color Frame Buffer Start Address):"),(0,n.kt)(a.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-03.png",noShadow:!1,width:"600",mdxType:"Figure"},"Configuring LTDC Layer Parameters"),(0,n.kt)("p",null,"Remember to remove this line from your program and the framebuffer array:"),(0,n.kt)(o.Z,{mdxType:"CodeHeader"},"main.c"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"  /* USER CODE BEGIN 2 */\n  HAL_LTDC_SetAddress(&hltdc, framebuffer, LTDC_LAYER_1);\n  /* USER CODE END 2 */\n")),(0,n.kt)("p",null,"If the LTDC Layer size was setup to only update a part of the\ndisplay in ",(0,n.kt)("a",h({parentName:"p"},{href:"03-display-internal"}),"step 03"),"\n(due to the amount of internal RAM ), now is the time to redo\nthat. Reconfigure the LTDC Layer such that the entire display is\ncovered."))}k.isMDXComponent=!0}}]);