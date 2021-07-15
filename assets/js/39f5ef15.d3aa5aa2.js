(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2798],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),f=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=f(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=f(n),m=r,d=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var f=2;f<i;f++)l[f]=n[f];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2425:function(e,t,n){"use strict";var a=n(7294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},4035:function(e,t,n){"use strict";var a=n(7294),r=n(5026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children))}},6771:function(e,t,n){"use strict";var a=n(7294);class r extends a.Component{render(){return a.createElement("p",null,a.createElement("div",{class:"videoWrapper"},a.createElement("video",{controls:!0},a.createElement("source",{src:this.props.url,type:"video/mp4"}))))}}t.Z=r},5096:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},5026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return l}});var a=n(1368),r=n(5096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+l:l}(t,e,n,a)}}function l(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},9037:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return g},metadata:function(){return k},toc:function(){return y},default:function(){return w}});var a=n(3905),r=n(4035),i=n(2425),l=n(6771),o=Object.defineProperty,s=Object.defineProperties,f=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&m(e,n,t[n]);return e};const h={id:"lowering-memory-usage-with-partial-framebuffer",title:"Lowering Memory Usage with Partial Framebuffer"},g=void 0,k={unversionedId:"development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer",id:"development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer",isDocsHomePage:!1,title:"Lowering Memory Usage with Partial Framebuffer",description:"This section explains, by exemplifying with a clock application, how",source:"@site/docs/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer",permalink:"/4.13/docs/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer",version:"current",frontMatter:{id:"lowering-memory-usage-with-partial-framebuffer",title:"Lowering Memory Usage with Partial Framebuffer"},sidebar:"docs",previous:{title:"Loading Images at Runtime",permalink:"/4.13/docs/development/ui-development/scenarios/loading-images-at-runtime"},next:{title:"Using the L8 Image Format to Reduce Memory Consumption",permalink:"/4.13/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"}},y=[{value:"Full-size Frame Buffer memory",id:"full-size-frame-buffer-memory",children:[]},{value:"Partial Frame Buffer memory",id:"partial-frame-buffer-memory",children:[]},{value:"Display Tearing",id:"display-tearing",children:[]},{value:"Display update example",id:"display-update-example",children:[]},{value:"Configuring Partial Frame Buffers",id:"configuring-partial-frame-buffers",children:[]},{value:"Transferring Frame Buffers to the Screen",id:"transferring-frame-buffers-to-the-screen",children:[{value:"Transferring Frame Buffers to the STM32G081 SPI Display",id:"transferring-frame-buffers-to-the-stm32g081-spi-display",children:[]},{value:"Transferring Frame Buffers to the X-NUCLEO-GFX01M1 SPI Display",id:"transferring-frame-buffers-to-the-x-nucleo-gfx01m1-spi-display",children:[]},{value:"Transferring Frame Buffers on DSI Display",id:"transferring-frame-buffers-on-dsi-display",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],b={toc:y};function w(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},b),m),s(t,f({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"This section explains, by exemplifying with a clock application, how\nto configure and use Partial Frame Buffers, to the lower memory\nrequirements. This allows TouchGFX to run on platforms with too little\nmemory to hold a framebuffer or to use less memory on larger platforms\nat the expense of some performance."),(0,a.kt)("p",null,"A video of the simple clock application running on the\nSTM32L4R9Discovery evaluation kit can be seen below"),(0,a.kt)(l.Z,{url:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/knowledgebase/Partial%20framebuffer/Partial%20framebuffer.mp4",mdxType:"Video"}),(0,a.kt)("p",null,"After discussing partial framebuffers in general we will see an\nexample of a simple implementation with a SPI display on the STM32G081\nevaluation kit and a more advanced implementation for the G071Nucleo\nwith the X-NUCLEO-GFX01M1 Nucleo expansion board display. Lastly we\nwill see how to use partial framebuffer on a STM32L4R9Discovery kit\nwith a DSI display."),(0,a.kt)("h2",d({},{id:"full-size-frame-buffer-memory"}),"Full-size Frame Buffer memory"),(0,a.kt)("p",null,"Normally, your frame buffer is a big memory array with enough memory\nto hold all the pixels available on your display.\nIf you are running on a 24-bit display with a resolution of 480 x 272,\na full-size frame buffer holds 480 x 272 x 3 bytes = 391.680 bytes."),(0,a.kt)("p",null,'Some applications may have 2- ("Double buffering") or even 3 frame\nbuffers. The total memory requirement in these cases would then be\n783.360 and 1.175.040 bytes.'),(0,a.kt)("p",null,"TouchGFX writes pixel values to the frame buffer when drawing any part\nof the UI, after all drawing operations have completed, the frame\nbuffer is transferred to the display. Typically, the whole frame\nbuffer is transferred to the display even if only a part of the UI is\nupdated.\nGenerally, the framebuffer is updated in many small blocks before\nit is transferred:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Update1, Update 2, Update 3, ..., Update N, Transfer to display")),(0,a.kt)("p",null,"In some cases, particularly in low cost solutions with no external\nRAM, frame buffers are required to be small enough to allow the rest\nof the application to fit in the internal RAM together with the\nframebuffer. This is where partial frame buffers are useful."),(0,a.kt)("h2",d({},{id:"partial-frame-buffer-memory"}),"Partial Frame Buffer memory"),(0,a.kt)("p",null,"Partial frame buffers allows a TouchGFX application to run on top of a\nfew, less than full-size frame buffers. The number and size of the\nframe buffers are configurable by the application programmer.\nThis technique can lower the memory requirements of an application by\na substantial amount, but comes with some limitations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Partial frame buffers will only work on displays that have built-in\nmemory. These are typically DSI displays or displays with a parallel\nbus connection (DBI type A/B, 8080/6800) or SPI-bus connection."),(0,a.kt)("li",{parentName:"ul"},"Potential tearing for complex applications.")),(0,a.kt)("p",null,"Rather than using a frame buffer representing all the pixels on the\ndisplay, partial frame buffers typically cover a smaller part.  In the\nclock example used in this article, three frame buffers of 11.700\nbytes each are used. This results in a memory footprint for frame\nbuffers of 35.100 bytes. The normal framebuffer for the STM32L4R9\nboard is 390 ","*"," 390 ","*"," 3 = 456.300 bytes."),(0,a.kt)("p",null,"Whenever the application needs to update a part of the UI, TouchGFX\nwill select one of the partial frame buffers, perform its\ndrawing operation in the partial framebuffer, and transfer that part\nto the display. This is repeated for all areas of the UI that need to\nbe rendered - This changes the formula for updating and transferring\ndata to:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Update1, Transfer1, Update2, Transfer2, Update3, Transfer3, ..., UpdateN, TransferN")),(0,a.kt)("p",null,"In some cases the transfer of one partial frame buffer can run while\nthe update of the next buffer is running."),(0,a.kt)("h2",d({},{id:"display-tearing"}),"Display Tearing"),(0,a.kt)("p",null,"Contrary to using full-size frame buffers, TouchGFX will transfer\nparts of the UI as soon as they are updated, when using partial frame\nbuffers.\nThe display will show the received updates on its glass after at most 16 ms (for\n60 fps displays) because the display needs to be refreshed regularly.\nBecause of this, the first updates to the display can potentially be\nvisible to the user before all updates have been transferred."),(0,a.kt)("p",null,"If the total sequence of draw operations and transfers take a long\ntime to complete ( > 16 ms) it is highly possible that the user will see a\ncombination of the previous frame and some of the new updates. This is\ncalled display tearing and is not desirable.\nFor this reason, partial frame buffers are not suitable for\napplications that make use of complex animations that take a long time\nto render."),(0,a.kt)("h2",d({},{id:"display-update-example"}),"Display update example"),(0,a.kt)("p",null,"Before we get into how to configure partial frame buffers in your application let's have a look at a concrete example showing a digital clock with a moving circle arc representing seconds. The green circle arc is moving 6 degrees each second and does a full rotation in a minute. The UI is built from four Widgets as seen in the image below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"../ui-components/shapes/line"}),"Line")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"../ui-components/shapes/circle"}),"Circle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"../ui-components/miscellaneous/digital-clock"}),"Digital Clock")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"../ui-components/shapes/box"}),"Box"))),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/touchgfx-designer-with-widgets.png",mdxType:"Figure"}),(0,a.kt)("p",null,"Here is the code that updates the digital clock and circle arc:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"MainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{21-25}","{21-25}":!0}),"void MainView::handleTickEvent()\n{\n  ticks++;\n  if (ticks == 10)\n  {\n      ticks = 0;\n      secs += 1;\n      if (secs == 60)  //increment minutes\n      {\n        secs = 0;\n        min += 1;\n        if (min == 60) //increment hours\n        {\n          min = 0;\n          hour += 1;\n          if (hour == 24)\n          {\n            hour = 0;\n          }\n        }\n        //Only update digital clock when minutes or hours change\n        digitalClock.setTime24Hour(hour, min, secs);\n      }\n    //Always update seconds\n    circleSeconds.updateArc(secs*6 - 20, secs*6);\n  }\n}\n")),(0,a.kt)("p",null,"The following images shows the areas that are updated in the first few\nseconds when the circle arc approaches the top and digital clock is\nupdated (the grey rectangles). In the first two frames, only the\nseconds are changing (58 and 59 seconds). In the third the seconds\nreaches 60 and the hour and minutes text is updated:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-1.png",mdxType:"Figure"}),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-2.png",mdxType:"Figure"}),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-3.png",mdxType:"Figure"}),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/simulator-updated-areas-4.png",mdxType:"Figure"}),(0,a.kt)("p",null,"The rectangles updated in the third image above are 154 x 60 pixels,\n20 x 12 pixels, and 33 x 8 pixels. When using standard frame buffers\nthese three rectangles would be drawn into the full frame buffer\n(overwriting the previous pixels), which would afterwards be\ntransferred to the display. When using partial frame buffers, these\nthree rectangles would be drawn into their own little frame buffers\nwhich would then immediately be transferred to the display and shown."),(0,a.kt)("h2",d({},{id:"configuring-partial-frame-buffers"}),"Configuring Partial Frame Buffers"),(0,a.kt)("p",null,"There are two steps to configuring TouchGFX for partial frame buffers:\nCreating a frame buffer allocator object with a memory buffer, and\nconfiguring the TouchGFX HAL class to use it. Later we also need to\nwrite code to transmit the buffers to the display. The first two steps\nare typically done in the BoardConfiguration.cpp file."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Creating a frame buffer allocator as a global variable:"),(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"BoardConfiguration.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"//blocks of 10*390 pixels, 2 blocks, one pixel is 3 bytes\nManyBlockAllocator<10*390*3, 2, 3> frameBufferAllocator;\n")),(0,a.kt)("p",null,"This frame buffer allocator allocates 2 blocks of each 10 x 390 x 3 bytes = 11.700 bytes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Configure HAL to use it:"),(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"BoardConfiguration.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{6-7}","{6-7}":!0}),"void touchgfx_init()\n{\n    HAL& hal = touchgfx_generic_init(dma, display, tc, GUI_DISPLAY_WIDTH,\n                                         GUI_DISPLAY_HEIGHT, 0, 0, 0);\n    hal.setFrameBufferStartAddress((uint16_t*)0, GUI_DISPLAY_BPP, false, false);\n    hal.setFrameBufferAllocator(&frameBufferAllocator);\n    hal.setFrameRefreshStrategy(HAL::REFRESH_STRATEGY_PARTIAL_FRAMEBUFFER);\n   ...\n")),(0,a.kt)("p",null,"With this configuration TouchGFX will allocate small frame buffers and\ndraw the UI in them. What is left now, is to transfer the small frame\nbuffers to the display."),(0,a.kt)("p",null,"Lets first see the position and size of the two frame buffers\nallocated to draw the small circle updates (second image above):"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Rectangle")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"x")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"y")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"width")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"height")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Pixels")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Rectangle 1"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"112"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"56"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"22"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"14"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"308 pixels = 924 bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Rectangle 2"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"153"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"42"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"29"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"11"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"319 pixels = 957 bytes")))),(0,a.kt)("p",null,"Both these rectangles are so small, they can fit into the blocks allocated by the frame buffer allocator."),(0,a.kt)("p",null,"In the third image above, we have 3 updated rectangles: The small\nupdates to the circle, and the larger rectangle covering the text:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Rectangle")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"x")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"y")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"width")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"height")),(0,a.kt)("th",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Pixels")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Rectangle 1"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"126"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"51"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"20"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"12"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"240 pixels = 720 bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Rectangle 2"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"165"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"42"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"33"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"8"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"264 pixels = 792 bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Rectangle 3"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"118"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"165"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"154"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"60"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"9.240 pixels = 27.720 bytes")))),(0,a.kt)("p",null,"Again, the rectangle 1 and 2 are so small, they can fit into the\nblocks allocated by the frame buffer allocator, but frame buffer 3 is\ntoo large. This rectangle will be split into multiple rectangles that\neach can fit into the frame buffers (11.700 bytes)."),(0,a.kt)("p",null,"Here we are updating 5 rectangles in total, but the allocator only has\n2 blocks. In that situation, TouchGFX will wait for the first blocks\nto be transferred and then reuse the blocks."),(0,a.kt)("h2",d({},{id:"transferring-frame-buffers-to-the-screen"}),"Transferring Frame Buffers to the Screen"),(0,a.kt)("p",null,"TouchGFX will allocate a frame buffer from the FrameBufferAllocator,\nwhen a rectangle needs to be redrawn. After drawing to the buffer\nTouchGFX will call this method:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"void HAL::flushFrameBuffer(const Rect& rect);\n")),(0,a.kt)("p",null,"This function must be overridden in a HAL subclass to transfer the\nframe buffer to the screen. This special implementation is required\nfor partial framebuffers to work."),(0,a.kt)("p",null,"The following sections will illustrate how to configure this for the\nSTM32G081 and STM32G071 evaluation kits with a SPI displays, and the\nSTM32L4R9Discovery evaluation kit which has a DSI display."),(0,a.kt)("h3",d({},{id:"transferring-frame-buffers-to-the-stm32g081-spi-display"}),"Transferring Frame Buffers to the STM32G081 SPI Display"),(0,a.kt)("p",null,"The STM32G081 evaluation kit has a SPI display. The basic principle is\nto start a DMA transfer to the display as soon as a block is drawn or\nwhen a transfer is completed if a new block is ready to be\ntransferred."),(0,a.kt)("p",null,"First, when a rectangle is drawn, we start a transfer if none is already in progress:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"STM32G0HAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{4-4,10-10}","{4-4,10-10}":!0}),"void STM32G0HAL::flushFrameBuffer(const touchgfx::Rect& rect)\n{\n    HAL::flushFrameBuffer(rect);\n    frameBufferAllocator->markBlockReadyForTransfer();\n    //start transfer if not running already!\n    if (!LCDManager_IsTransmittingData())\n    {\n        touchgfx::Rect r;\n        const uint8_t* pixels = frameBufferAllocator->getBlockForTransfer(r);\n        LCDManager_SendFrameBufferBlockWithPosition((uint8_t*)pixels, r.x, r.y, r.width, r.height);\n    }\n}\n")),(0,a.kt)("p",null,"The function ",(0,a.kt)("em",{parentName:"p"},"LCDManager_SendFrameBufferBlockWithPosition")," starts a\nSPI transfer to the display using DMA. This function is highly\ndependent on the display and the GPIO configuration. It must be\ndeveloped by the application programmer. The STM32G0 CubeFW HAL\nfunction ",(0,a.kt)("em",{parentName:"p"},"HAL_SPI_Transmit_DMA")," is used to start the DMA."),(0,a.kt)("p",null,"The SPI transfer complete interrupt handler calls a function when the transfer\nis complete:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"STM32G0HAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{11-11}","{11-11}":!0}),"void HAL_SPI_TxCpltCallback(SPI_HandleTypeDef *hspi)\n{\n    UNUSED(hspi);\n    LCD_CS_HIGH();\n    isTransmittingData = 0;\n\n    //Change to SPI datasize to 8 bit from 16 bit\n    heval_Spi.Instance->CR2 &= ~(SPI_DATASIZE_16BIT - SPI_DATASIZE_8BIT);\n\n    //signal transfer complete\n    LCDManager_TransferComplete();\n}\n")),(0,a.kt)("p",null,"The LCDManager_TransferComplete functions starts a new transfer. An\nimportant piece here is to call ",(0,a.kt)("em",{parentName:"p"},"freeBlockAfterTransfer"),". This will\nallow TouchGFX to reuse the just transmitted block for a new drawing."),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"STM32G0HAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{3-3,16-16}","{3-3,16-16}":!0}),"void LCDManager_TransferComplete()\n{\n    touchgfx::startNewTransfer();\n}\n\nvoid startNewTransfer()\n{\n    FrameBufferAllocator* fba = HAL::getInstance()->getFrameBufferAllocator();\n    fba->freeBlockAfterTransfer();\n    blockIsTransferred = true;\n\n    if (fba->hasBlockReadyForTransfer())\n    {\n        touchgfx::Rect r;\n        const uint8_t* pixels = fba->getBlockForTransfer(r);\n        LCDManager_SendFrameBufferBlockWithPosition((uint8_t*)pixels, r.x, r.y, r.width, r.height);\n    }\n}\n\n")),(0,a.kt)("h3",d({},{id:"transferring-frame-buffers-to-the-x-nucleo-gfx01m1-spi-display"}),"Transferring Frame Buffers to the X-NUCLEO-GFX01M1 SPI Display"),(0,a.kt)("p",null,'In this section we will discuss the application template for the\nSTM32G071 nucleo board with the X-Nucleo-GFX01M1 expansion board. This\nexpansion board, MB1642B, contains a 2.2" 240x320 SPI display and a\n64-Mbit SPI NOR flash.'),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/g071-with-gfx01m1.png",width:"400px",mdxType:"Figure"},"Nucleo-G071RB with X-Nucleo-GFX01M1 expansion board"),(0,a.kt)("p",null,"In this application template we use a C++ class from the framework to\nhelp managing the partial framebuffer blocks. This makes the code in\nthe application template a little shorter."),(0,a.kt)("p",null,"The application template is build with the TouchGFX Generator. Read\nmore about that\n",(0,a.kt)("a",d({parentName:"p"},{href:"../../touchgfx-hal-development/touchgfx-generator#display"}),"here")),(0,a.kt)("p",null,"The most important part is the flushFrameBuffer function:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),"void TouchGFXGeneratedHAL::flushFrameBuffer(const touchgfx::Rect& rect)\n{\n    HAL::flushFrameBuffer(rect);\n    // Try transmitting a block\n    PartialFrameBufferManager::tryTransmitBlock();\n}\n")),(0,a.kt)("p",null,"Here we just call the ",(0,a.kt)("em",{parentName:"p"},"PartialFrameBufferManager")," framework class to\nget the block transmitted."),(0,a.kt)("p",null,"In the TouchGFXGeneratedHAL::endFrame function we call\n",(0,a.kt)("em",{parentName:"p"},"PartialFrameBufferManager")," to get any remaining framebuffer blocks\ntransmitted also:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),"void TouchGFXGeneratedHAL::endFrame()\n{\n    // We must guard the next frame until we're done transferring all blocks over our display interface\n    // through either a semaphore if user is running an OS or a simple variable if not\n    PartialFrameBufferManager::transmitRemainingBlocks();\n\n    HAL::endFrame();\n    touchgfx::OSWrappers::signalRenderingDone();\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"PartialFrameBufferManager")," uses three functions to interact with\nthe display driver code. These must be implemented in the Application\nTemplate:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{4-4,12-12,20-20}","{4-4,12-12,20-20}":!0}),"/**\n * Check if a Frame Buffer Block is beeing transmitted.\n */\n__weak int transmitActive()\n{\n    return touchgfxDisplayDriverTransmitActive();\n}\n\n/**\n * Check if a Frame Buffer Block ending at bottom may be sent.\n */\n__weak int shouldTransferBlock(uint16_t bottom)\n{\n    return touchgfxDisplayDriverShouldTransferBlock(bottom);\n}\n\n/**\n * Transmit a Frame Buffer Block.\n */\n__weak void transmitBlock(const uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h)\n{\n    touchgfxDisplayDriverTransmitBlock(pixels, x, y, w, h);\n}\n")),(0,a.kt)("p",null,"The code above just forwards the calls to C functions in the MB1642B\ndriver code."),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"MB1642BDisplayDriver.c"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"int touchgfxDisplayDriverTransmitActive(void)\n{\n  return IsTransmittingBlock_;\n}\n\nvoid touchgfxDisplayDriverTransmitBlock(const uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h)\n{\n  Display_Bitmap((uint16_t*)pixels, x, y, w, h);\n}\n")),(0,a.kt)("p",null,"The implementation of this driver code depends highly on the display\nused. For the MB1642B module this involves two GPIO to control SPI\nchip select and data/command mode."),(0,a.kt)("p",null,"The transmission state is implemented using a volatile uint8",(0,a.kt)("em",{parentName:"p"},"t\nvariable *IsTransmittingBlock"),"*. This variable is set to 1 when a\ntransmission is started and set to zero in the DMA callback:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"MB1642BDisplayDriver.c"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"void MB1642BDisplayDriver_DMACallback(void)\n{\n  /* Transfer Complete Interrupt management ***********************************/\n  if ((0U != (DMA1->ISR & (DMA_FLAG_TC1))) && (0U != (hdma_spi1_tx.Instance->CCR & DMA_IT_TC)))\n  {\n    /* Disable the transfer complete and error interrupt */\n    __HAL_DMA_DISABLE_IT(&hdma_spi1_tx, DMA_IT_TE | DMA_IT_TC);\n\n    /* Clear the transfer complete flag */\n    __HAL_DMA_CLEAR_FLAG(&hdma_spi1_tx, DMA_FLAG_TC1);\n\n    IsTransmittingBlock_ = 0;\n\n    ...\n\n    // Signal Transfer Complete to TouchGFX\n    DisplayDriver_TransferCompleteCallback();\n")),(0,a.kt)("p",null,"As we see above, the DMA callback also calls the transfer complete\ncallback. This function is implemented in the generated HAL:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),'extern "C"\nvoid DisplayDriver_TransferCompleteCallback()\n{\n    // After completed transmission start new transfer if blocks are ready.\n    PartialFrameBufferManager::tryTransmitBlockFromIRQ();\n}\n')),(0,a.kt)("p",null,"The call to the ",(0,a.kt)("em",{parentName:"p"},"PartialFrameBufferManager")," here makes it start a new\ntransfer if possible."),(0,a.kt)("h3",d({},{id:"transferring-frame-buffers-on-dsi-display"}),"Transferring Frame Buffers on DSI Display"),(0,a.kt)("p",null,"The STM32L4R9Discovery evaluation kit uses a DSI display. The normal\nHAL class is called STM32HAL_DSI (located in STM32HAL_DSI.cpp)."),(0,a.kt)("p",null,"We override the HAL::flushFrameBuffer method to notify the FrameBufferAllocator that a block has been drawn:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"STM32HAL_DSI.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{3-3}","{3-3}":!0}),"void STM32HAL_DSI::flushFrameBuffer(const Rect& rect)\n{\n    frameBufferAllocator->markBlockReadyForTransfer();\n    HAL::flushFrameBuffer(rect); //call normal implementation\n}\n")),(0,a.kt)("p",null,"The FrameBufferAllocator subclass ManyBlockAllocator will call the\nglobal function FrameBufferAllocatorSignalBlockDrawn() when a block is\nready for transfer. This method must be implemented in the BSP layer:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"BoardConfiguration.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),"void FrameBufferAllocatorSignalBlockDrawn()\n  {\n    if (!dsiIsTransferring)\n    {\n      sendBlock();\n    }\n  }\n")),(0,a.kt)("p",null,'This function is calling the sendBlock function, unless a transfer is\nalready ongoing on the DSI. For the first block drawn by TouchGFX,\nthis will never be the case, so a transfer is started.\nIf another block drawing is completed while the DSI transfer is still\nrunning, the block will be kept in the "ready to transfer state", and\ndrawing will continue in another free block (if available).'),(0,a.kt)("p",null,"When a DSI transfer is completed, we must first free the transferred\nblock, so it can be reused for another rectangle, and then check to\nsee if the next block is ready for transfer. This is all done in the\nER interrupt:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"BoardConfiguration.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{8-8,11-11}","{8-8,11-11}":!0}),"__irq void DSI_IRQHandler(void) {\n  if (__HAL_DSI_GET_FLAG(&hdsi, DSI_IT_ER))\n  {\n    // End-of-refresh interrupt. Meaning last DSI transfer is complete\n    __HAL_DSI_CLEAR_FLAG(&hdsi, DSI_IT_ER);\n    if (dsiIsTransferring)\n    {\n      HAL::getInstance()->getFrameBufferAllocator()->freeBlockAfterTransfer();\n      dsiIsTransferring = 0;\n    }\n    sendBlock(); //transfer next block if availble\n  }\n")),(0,a.kt)("p",null,"The function sendBlock is more complicated. Here we configure the LTDC\nand DSI peripherals to transfer the framebuffer. We also configure the\ndisplay to put the transferred data into the correct place in the\ndisplay memory. This part of the code is dependent on the specific\ndisplay. Check the display datasheet for the command specifications."),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"BoardConfiguration.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{18-18,40-40,51-51}","{18-18,40-40,51-51}":!0}),"static void sendBlock()\n{\n    FrameBufferAllocator* fbAllocator = HAL::getInstance()->getFrameBufferAllocator();\n\n    //Is a block ready for transfer?\n    if (fbAllocator->hasBlockReadyForTransfer())\n    {\n        Rect transfer_rect;\n        const uint8_t* src = fbAllocator->getBlockForTransfer(transfer_rect);\n        dsiIsTransferring = 1;\n\n        //1. Setup LTDC and layer address and dimension\n        //2. Configure display active area\n        //3. Start DSI\n\n        __HAL_DSI_WRAPPER_DISABLE(&hdsi);\n\n        //1: Setup LTDC\n        LTDC_Layer1->CFBAR = (uint32_t)src;\n\n        const uint32_t width = transfer_rect.width;\n        const uint32_t height = transfer_rect.height;\n\n        LTDC->AWCR = ((width + 1) << 16) | (height + 1);\n        LTDC->TWCR = ((width + 1 + 1) << 16) | (height + 1 + 1);\n\n        const uint16_t layer_x0 = 2 + 0;\n        const uint16_t layer_x1 = 2 + width - 1;\n        LTDC_Layer1->WHPCR = (layer_x1 << 16) | layer_x0;\n\n        const uint16_t layer_y0 = 2 + 0;\n        const uint16_t layer_y1 = 2 + height - 1;\n        LTDC_Layer1->WVPCR = (layer_y1 << 16) | layer_y0;\n\n        LTDC_Layer1->CFBLR = ((width * 3) << 16) | (width * 3 + 3);\n        LTDC_Layer1->CFBLNR = height;\n\n        LTDC->SRCR = (uint32_t)LTDC_SRCR_IMR;\n\n        //2: Configure display\n        const int16_t x = transfer_rect.x + 4;\n        const int16_t x2 = transfer_rect.x + 4 + width - 1;\n        uint8_t InitParam1[4] = { (uint8_t)(x >> 8), (uint8_t)(x & 0xFF), (uint8_t)(x2 >> 8), (uint8_t)(x2 & 0xFF)};\n        HAL_DSI_LongWrite(&hdsi, 0, DSI_DCS_LONG_PKT_WRITE, 4, DSI_SET_COLUMN_ADDRESS, InitParam1);\n\n        const int16_t y = transfer_rect.y;\n        const int16_t y2 = transfer_rect.y + height - 1;\n        uint8_t InitParam2[4] = { (uint8_t)(y >> 8), (uint8_t)(y & 0xFF), (uint8_t)(y2 >> 8), (uint8_t)(y2 & 0xFF) };\n        HAL_DSI_LongWrite(&hdsi, 0, DSI_DCS_LONG_PKT_WRITE, 4, DSI_SET_PAGE_ADDRESS, InitParam2);\n\n        //3: Start DSI transfer\n        __HAL_DSI_WRAPPER_ENABLE(&hdsi);\n        HAL_DSI_Refresh(&hdsi);\n    }\n}\n")),(0,a.kt)("h2",d({},{id:"conclusion"}),"Conclusion"),(0,a.kt)("p",null,"In this article we saw how the partial frame buffer strategy can help\nlowering the memory requirements for platforms that have displays with\nintegrated frame buffer memory."),(0,a.kt)("p",null,"The method for configuring and setting up partial framebuffers is the\nsame across all platforms, but the method of sending the content of\nthe blocks to the display varies. We saw how, for an LTDC/DSI based\nplatform (STM32L4R9-DISCO) we were able to reconfigure the LTDC Layer\nto fit the next block ready for transfer on DSI, while on a platform\nwith no LCD controller (STM32G081 and STM32G081) we were able to send\nthe blocks to the display using SPI."))}w.isMDXComponent=!0}}]);