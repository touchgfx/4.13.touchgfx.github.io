(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9708],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return f},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,p=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(p,i(i({ref:t},f),{},{components:r})):n.createElement(p,i({ref:t},f))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22425:function(e,t,r){"use strict";var n=r(67294);class a extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,r){"use strict";var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children))}},88678:function(e,t,r){"use strict";var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,r){"use strict";var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=i},37793:function(e,t,r){"use strict";var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=i},35096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return o},Z:function(){return i}});var n=r(11368),a=r(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},63572:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return g},contentTitle:function(){return b},metadata:function(){return y},toc:function(){return v},default:function(){return w}});var n=r(3905),a=r(44035),o=r(93054),i=r(37793),l=r(22425),s=Object.defineProperty,c=Object.defineProperties,f=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))h.call(t,r)&&p(e,r,t[r]);return e};const g={id:"scenarios-framebuffer-strategies",title:"Framebuffer Strategies"},b=void 0,y={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",id:"development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",isDocsHomePage:!1,title:"Framebuffer Strategies",description:"This section shows how to configure the TouchGFX Generator to generate a TouchGFX HAL that uses one of the following Frame Buffer strategies:",source:"@site/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",permalink:"/4.13/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",version:"current",frontMatter:{id:"scenarios-framebuffer-strategies",title:"Framebuffer Strategies"},sidebar:"docs",previous:{title:"FMC and SPI Display Interface",permalink:"/4.13/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc"},next:{title:"Changing the Pixel Format of an Application",permalink:"/4.13/docs/development/touchgfx-hal-development/scenarios/scenarios-change-pixelformat-bpp"}},v=[{value:"Single Frame Buffer",id:"single-frame-buffer",children:[{value:"By Allocation",id:"by-allocation",children:[]},{value:"By Address",id:"by-address",children:[]}]},{value:"Double Frame Buffer",id:"double-frame-buffer",children:[{value:"By Address",id:"by-address-1",children:[]},{value:"By Allocation",id:"by-allocation-1",children:[]}]},{value:"Partial Frame Buffer",id:"partial-frame-buffer",children:[]}],T={toc:v};function w(e){var t,r=e,{components:s}=r,p=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&h.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},T),p),c(t,f({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"This section shows how to configure the ",(0,n.kt)("a",m({parentName:"p"},{href:"../touchgfx-generator"}),"TouchGFX Generator")," to generate a TouchGFX HAL that uses one of the following Frame Buffer strategies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Single"),(0,n.kt)("li",{parentName:"ul"},"Double"),(0,n.kt)("li",{parentName:"ul"},"Partial")),(0,n.kt)("h2",m({},{id:"single-frame-buffer"}),"Single Frame Buffer"),(0,n.kt)("p",null,"Choosing ",(0,n.kt)("em",{parentName:"p"},"Single Buffer")," as the buffering strategy developers are able to let the compiler allocate memory for the framebuffer in internal RAM but can also choose a specific location for the buffer."),(0,n.kt)("h3",m({},{id:"by-allocation"}),"By Allocation"),(0,n.kt)("p",null,"When choosing ",(0,n.kt)("em",{parentName:"p"},"By Allocation")," TouchGFX Generator will allocate an array based on the dimensions and bitdepth of the application."),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-single-alloc.png",width:"400",mdxType:"Figure"},"Single framebuffer, by allocation"),(0,n.kt)("p",null,"Code is generated to configure the HAL to use this array as the framebuffer. "),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{1-6,12}","{1-6,12}":!0}),'namespace {\n    // Use the section "TouchGFX_Framebuffer" in the linker script\n    // to specify the placement of the buffer\n    LOCATION_PRAGMA("TouchGFX_Framebuffer")\n    uint32_t frameBuf[(480 * 272 * 2 + 3) / 4] LOCATION_ATTRIBUTE("TouchGFX_Framebuffer");\n}\n\nvoid TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)frameBuf, (void*)0, (void*)0);\n}\n')),(0,n.kt)("h3",m({},{id:"by-address"}),"By Address"),(0,n.kt)("p",null,"When choosing ",(0,n.kt)("em",{parentName:"p"},"By Address")," for the location of the framebuffer TouchGFX Generator will use the  specified Start Addresses during HAL initialization."),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-single-addr.png",width:"400",mdxType:"Figure"},"Single framebuffer, by address"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{5}","{5}":!0}),"void TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)0xC0000000, (void*)0, (void*)0);\n}\n")),(0,n.kt)("h2",m({},{id:"double-frame-buffer"}),"Double Frame Buffer"),(0,n.kt)("p",null,"In a double frame buffer configuration, code to swap farmebuffers will be generated in the HAL by TouchGFX Generator depending on the selected Framebuffer strategy and display interface. This memory interface to frame buffer location is used by the TouchGFX Engine during the main event loop."),(0,n.kt)("h3",m({},{id:"by-address-1"}),"By Address"),(0,n.kt)("p",null,"When choosing ",(0,n.kt)("em",{parentName:"p"},"By Address")," TouchGFX Generator will use the two specified Start Addresses during HAL initialization."),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-double.png",width:"400",mdxType:"Figure"},"Double framebuffer, by address"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{5}","{5}":!0}),"void TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)0xC0000000, (void*)0xC003FC00, (void*)0);\n}\n")),(0,n.kt)(i.Z,{mdxType:"Tip"},"When using Parallel RGB (LTDC) as display interface, the start address will be inherited from the LTDC Layer settings."),(0,n.kt)("h3",m({},{id:"by-allocation-1"}),"By Allocation"),(0,n.kt)("p",null,"When choosing ",(0,n.kt)("em",{parentName:"p"},"By Allocation")," TouchGFX Generator will allocate an array based on the dimensions and bitdepth of the application, exactly as with a Single Frame Buffer, only twice the size."),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-double-alloc.png",width:"400",mdxType:"Figure"},"Single framebuffer, by allocation"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{1-5,11}","{1-5,11}":!0}),'namespace {\n    // Use the section "TouchGFX_Framebuffer" in the linker to specify the placement of the buffer\n    LOCATION_PRAGMA("TouchGFX_Framebuffer")\n    uint32_t frameBuf[(480 * 272 * 2 + 3) / 4 * 2] LOCATION_ATTRIBUTE("TouchGFX_Framebuffer");\n}\n\nvoid TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)frameBuf, (void*)(frameBuf + sizeof(frameBuf)/(sizeof(uint32_t)*2)), (void*)0);\n}\n')),(0,n.kt)("h2",m({},{id:"partial-frame-buffer"}),"Partial Frame Buffer"),(0,n.kt)("p",null,"Selecting the ",(0,n.kt)("em",{parentName:"p"},"Partial Buffer")," strategy allows developers to choose a number of blocks and a size for each of these to be used as frame buffers. This strategy uses what TouchGFX calls a ",(0,n.kt)("em",{parentName:"p"},"Frame Buffer Allocator")," and is different from supplying either a pointer to external memory where the frame buffer is located, or allocating a fixed sized array in internal memory."),(0,n.kt)("p",null,"See the article on ",(0,n.kt)("a",m({parentName:"p"},{href:"../../../basic-concepts/framebuffer"}),"Framebuffer")," for a general overview of the concept of frame buffers."),(0,n.kt)(i.Z,{mdxType:"Tip"},'Usually, STM32G0 does not have enough internal RAM to fit framebuffer. "Partial Buffer" would be a perfect match for a low cost solution using this MCU.'),(0,n.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/generator-partial-fb.png",width:"400",mdxType:"Figure"},"Partial framebuffer"),(0,n.kt)("p",null,"Since a partial buffering strategy is typically only used with low cost MCU with no TFT controller and little internal RAM the Partial Buffer Strategy expects the developer to implement the transfer of the contents of the framebuffer to the display. See ",(0,n.kt)("a",m({parentName:"p"},{href:"scenarios-fmc"}),"FMC/SPI Scenario")," for how to transmit pixels to e.g. a serial display on MCUs with no TFT Controller."),(0,n.kt)("p",null,"In order to synchronize with TouchGFX when using the Partial Framebuffer strategy developers are required to provide implementations for the following two functions. The code displayed below is generated by CubeMX inside ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFX/target/generated/TouchGFXGeneratedHAL.cpp")," and defines the interface from developer to the TouchGFX Engine."),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'/* ******************************************************\n* Functions required by Partial Frame Buffer Strategy\n* ******************************************************\n*\n*  *  uint8_t isTransmittingData() must return whether or not data is currently being transmitted, over e.g. SPI.\n*  *  void transmitFrameBufferBlock(uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h) will be called\n*       when the framework wants to send a block. The user must then transfer\n*       the data represented by the arguments.\n*\n*  A user must call touchgfx::startNewTransfer(); once transmitFrameBufferBlock() has succesfully sent a block.\n*  E.g. if using DMA to transfer the block, this could be called in the "Transfer Completed" interrupt handler.\n*\n*/\nextern "C" void transmitFrameBufferBlock(uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h);\nextern "C" uint8_t isTransmittingData();\n')),(0,n.kt)("p",null,"The following function is also generated by CubeMX inside the read-only ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedHAL")," class inside ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFX/target/generated/TouchGFXGeneratedHAL.cpp"),". "),(0,n.kt)(o.Z,{mdxType:"Note"},"This flushFrameBuffer() function is generally used for MCUs with no TFT Controller. In the case of Partial Frame Buffers the TouchGFX Generator can generate a definition for this method specifically for that frame buffer strategy."),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{12,16}","{12,16}":!0}),"void TouchGFXGeneratedHAL::flushFrameBuffer(const touchgfx::Rect& rect)\n{\n    HAL::flushFrameBuffer(rect);\n\n    // Once flushFrameBuffer() is called by the framework a block is already for transfer\n    // Mark it ready for transfer and transmit it if user defined method \n    // isTransmittingData() does not return false\n    \n    // If data is not being transmitted, transfer the data with user defined method\n    // transmitFrameBufferBlock().\n    frameBufferAllocator->markBlockReadyForTransfer();\n    if (!isTransmittingData())\n    {\n        touchgfx::Rect r;\n        const uint8_t* pixels = frameBufferAllocator->getBlockForTransfer(r);\n        transmitFrameBufferBlock((uint8_t*)pixels, r.x, r.y, r.width, r.height);\n    }\n}\n")))}w.isMDXComponent=!0}}]);