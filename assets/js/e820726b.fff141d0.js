(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2149],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=h(n),p=r,u=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var h=2;h<i;h++)o[h]=n[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2425:function(e,t,n){"use strict";var a=n(7294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},4035:function(e,t,n){"use strict";var a=n(7294),r=n(5026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children))}},5096:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},5026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(1368),r=n(5096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,a)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},5910:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return f},metadata:function(){return g},toc:function(){return b},default:function(){return w}});var a=n(3905),r=n(4035),i=n(2425),o=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(h)for(var n of h(t))m.call(t,n)&&d(e,n,t[n]);return e};const u={id:"performance",title:"Performance"},f=void 0,g={unversionedId:"basic-concepts/performance",id:"basic-concepts/performance",isDocsHomePage:!1,title:"Performance",description:"In this section we will discuss performance aspects of an embedded",source:"@site/docs/basic-concepts/performance.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/performance",permalink:"/4.13/docs/basic-concepts/performance",version:"current",frontMatter:{id:"performance",title:"Performance"},sidebar:"docs",previous:{title:"Main Loop",permalink:"/4.13/docs/basic-concepts/rendering"},next:{title:"Operating Systems",permalink:"/4.13/docs/basic-concepts/operating-system"}},b=[{value:"Measuring the rendering time",id:"measuring-the-rendering-time",children:[]},{value:"Counting the lost frames",id:"counting-the-lost-frames",children:[{value:"Compensating for lost frames",id:"compensating-for-lost-frames",children:[]}]},{value:"What affects the rendering time?",id:"what-affects-the-rendering-time",children:[{value:"How much of the screen is updated",id:"how-much-of-the-screen-is-updated",children:[]},{value:"The number of layers in the graphics",id:"the-number-of-layers-in-the-graphics",children:[]},{value:"The complexity of rendering the pixels",id:"the-complexity-of-rendering-the-pixels",children:[]},{value:"Hardware support for rendering",id:"hardware-support-for-rendering",children:[]}]},{value:"When should you consider rendering time",id:"when-should-you-consider-rendering-time",children:[]},{value:"Tips to get good performance",id:"tips-to-get-good-performance",children:[]}],y={toc:b};function w(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&h)for(var a of h(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},y),d),s(t,l({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"In this section we will discuss performance aspects of an embedded\ngraphical user interface."),(0,a.kt)("p",null,"A high performance is here defined as getting a high frame rate while\nstill obtaining the desired graphical effects and animations."),(0,a.kt)("p",null,"Let's recall from the previous section how the frame rate of the user\ninterface is affected by the main loop. Assume again that there is a\nparallel RGB display attached to the LTDC and two framebuffers.\nThe basic situation is illustrated below:"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/rendering/engine-cycle-2fb-normal.png",noShadow:"true",mdxType:"Figure"},"Double framebuffers"),(0,a.kt)("p",null,"As the display is assumed refreshed 60 times each second there is approximately\n16 ms between each refresh.\nThe calculation is this: 1 s / 60 = 0.01667 s = 16.67 ms."),(0,a.kt)("p",null,"TouchGFX starts drawing frame 1 into framebuffer 2 at the time where the\ntransfer of framebuffer 1 has started. If the rendering of\nframe 1 is finished before the next transfer starts we can transfer framebuffer 2.\nIf not finished within 16.67 ms framebuffer 1 is transferred\nagain and the display will appear unchanged:"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/rendering/engine-cycle-2fb-long-render.png",noShadow:"true",mdxType:"Figure"},"Main loop time above 16.67 ms"),(0,a.kt)("p",null,"This situation is denoted a lost frame."),(0,a.kt)("p",null,"The time for the collect and update phases are typically minuscule, e.g. less than 1 ms, and therefore more or less neglectable when considering the overall time taken of the main loop. Therefore, in the following and in general, when considering render time, this includes the collect and update phases."),(0,a.kt)("p",null,"If the rendering time in many frames exceeds the 16.67 ms time limit the\nframe rate on the display will be 30 frames per second (fps)."),(0,a.kt)("p",null,"If the rendering generally is shorter than 16.67 ms, but in some\nframes longer than 16.67 ms, the frame rate may be close to 60 fps in\naverage, but the animation may not appear fluent to the\nuser. Depending on the application it can look like some steps in the\nanimation are fast and some are slow. This is not desireable."),(0,a.kt)("p",null,"The rendering time can also be even longer. If it is just above 33 ms,\nthe framerate will drop to 20 fps as we only have a new frame ready on\nevery third transfer."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"FPS"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Max rendering time"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"60"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"16.67 ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"30"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"33.34 ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"20"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"50.00 ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"15"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"66.67 ms")))),(0,a.kt)("p",null,"The table shows the maximum rendering time (including the collect and\nupdate phases) that is available for a given framerate."),(0,a.kt)("p",null,"To achieve a good performance of a user interface it can be very\nbeneficial to check and monitor the frame rate regularly. Two\napproaches can be used:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Measure the rendering time"),(0,a.kt)("li",{parentName:"ul"},"Count the lost frames")),(0,a.kt)("h2",p({},{id:"measuring-the-rendering-time"}),"Measuring the rendering time"),(0,a.kt)("p",null,"The first approach of measuring the rendering time gives the most\ndetailed information. The idea is basically to measure the time from\nthe frame transfer to the end of the rendering phase.\nThe graphics engine calls a function on the GPIO class when the\ncollect phase starts and makes another call when the rendering phase\nends. The application defines these function and can hook into them to\npeform measurements."),(0,a.kt)("p",null,"The measurements can be done in two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use external timing device like an oscilloscope:\nTo do this the application should make an external digital output\nhigh when the GPIO::set(RENDER_TIME) is called, and low when the\nGPIO:clear(RENDER_TIME) is called. The oscilloscope can then measure\nthe rendering time as the time the output is high."),(0,a.kt)("li",{parentName:"ul"},"Use an internal timer:\nAnother approach is to use an internal timer, like the sysTick\ntimer. When the GPIO::set(RENDER_TIME) is called the application can\nsave the value of the timer in a variable. When the clear call is\nmade the application can read the timer again and subtract the\nprevious value to get the render time. The speed of the timer will\ndefine the resolution of the measurement. The application must\nsomehow make the render time visible. One way is to save the value\nin a global variable and maybe show the value on the screen in a\nTextArea. The value can also be checked with a debugger.")),(0,a.kt)("h2",p({},{id:"counting-the-lost-frames"}),"Counting the lost frames"),(0,a.kt)("p",null,"The graphics engine counts the number of transfers that has\noccured during the last collect-update-rendering phase. The\napplication can easily check this value to see if a frame\nwas lost and the frame rate therefore lowered."),(0,a.kt)("p",null,"The count is available in the ",(0,a.kt)("em",{parentName:"p"},"HAL")," class:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"void handleTickEvent() {\n  tickCounter += 1;\n  if (HAL::getInstance()->getLCDRefreshCount() > 1) {\n    //Alert programmer somehow\n    ...\n  }\n}\n")),(0,a.kt)("h3",p({},{id:"compensating-for-lost-frames"}),"Compensating for lost frames"),(0,a.kt)("p",null,"When frames are lost and the framerate of one of our animations therefore lowered we can compensate to a certain degree. We can either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"wait it out - let the animation go on, resulting in a longer animation duration, and possibly unsmooth animation."),(0,a.kt)("li",{parentName:"ul"},"skip some frames - make sure that the overall animation does not take longer time than intended by skipping frames.")),(0,a.kt)("p",null,"TouchGFX can be instructed to automaticallly skip some frames, when frames are lost. This can be accomplished by ticking animations more than once per actual frame. This can help in making animations more fluent when the render time is uneven."),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"HAL.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"void setFrameRateCompensation(bool enabled)\n")),(0,a.kt)("h2",p({},{id:"what-affects-the-rendering-time"}),"What affects the rendering time?"),(0,a.kt)("p",null,"A number of different things affect the rendering time: The size of\nthe updated parts, the use of layering, the complexity of the widgets,\nand the available hardware support for the rendering."),(0,a.kt)("h3",p({},{id:"how-much-of-the-screen-is-updated"}),"How much of the screen is updated"),(0,a.kt)("p",null,"The rendering time is generally proportional to the number of pixels\nthat must be updated. So if an animation takes too long time to render,\na possible fix is to reduce the area of the animation. For example, if\nyou have a rotating image and the performance is not good enough, the\nperformance can be improved by reducing the size of the image."),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/performance/reducing-image-size.png",noShadow:"true",mdxType:"Figure"},"Reducing image size reduces the rendering time"),(0,a.kt)("p",null,"Remember that the graphics engine redraws the\nareas that the application invalidated. This means that it is\nimportant to only invalidate the areas that actually requires a\nrefresh."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The larger the invalidated areas, the longer the render time.")),(0,a.kt)("h3",p({},{id:"the-number-of-layers-in-the-graphics"}),"The number of layers in the graphics"),(0,a.kt)("p",null,"In a typical application the graphics will consist of different\nelements that are stacked upon each other. If one of the elements is\nupdated all the elements must typically be redrawn."),(0,a.kt)("p",null,"A typical example of this is a background image, a frame, and some\ntext:"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/performance/text-in-a-frame.png",noShadow:"true",mdxType:"Figure"},"Layering graphical elements"),(0,a.kt)("p",null,"This user interface is created by putting a TextArea widget on\ntop of an Image widget showing a transparent frame. Both on top of\nthe background Image:"),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/performance/text-in-a-frame-designer.png",noShadow:"true",mdxType:"Figure"},"Layering graphical elements in TouchGFX Designer"),(0,a.kt)("p",null,"This solution is used very often in application. It is a very easy\nsolution with a high flexibility, as it is, for example, possible to\nchange the frame at runtime or move the frame and the text on the\nbackground."),(0,a.kt)("p",null,"The problem regarding rendering time is that if the text is updated at\nruntime and needs to be redrawn, the graphics engine also needs to\nredraw the background and the frame; and then the new text. This increases\nthe time to render the text considerable."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The more layers in an invalidated area, the longer the render time.")),(0,a.kt)("h3",p({},{id:"the-complexity-of-rendering-the-pixels"}),"The complexity of rendering the pixels"),(0,a.kt)("p",null,"Not all pixels are equally difficult to render to the framebuffer. In\nall types of rendering the graphical engine must write the resulting\npixel to the framebuffer. But the cost of calculating the pixel to\nwrite differs."),(0,a.kt)("p",null,"The fixed color, e.g. used in the Box Widget, has the lowest cost, as\nthe calculation of a pixel is done once and reused for all the\npixels. This means that we can get a very high performance by using a\nlot of Boxes. This is not recommended as the user interface will not\nbe of high quality."),(0,a.kt)("p",null,"An image has the next lowest cost of pixel calculation since the\npixels are stored in a ready to use format in the bitmaps. Calculating\nthe pixel to write to the framebuffer is a matter of loading the color\nvalue from the correct place in the bitmap."),(0,a.kt)("p",null,'Text bears a cost comparable to images as the individual letters are\nactually represented as small images. In practice the cost is higher\nas the high number of small images gives rise to a considerable\n"start-stop" cost. For example the calculation of the position of the\nindividual letters. In order for text to look as nice as possible, it\nis represented as small images with transparency, see the notes on\ntransparency below.'),(0,a.kt)("p",null,"Rotated or scaled images are more expensive. The task is again to load\nthe pixel value from the bitmap, but this time it is a more time\nconsuming calculation because the graphics engine has to incorporate\nthe scaling and rotation."),(0,a.kt)("p",null,"Geometric elements like a circle are even more expensive. This time we\ncannot load the pixel color from a bitmap, but we have to calculate\nboth the shape of the circle and the color of individual pixels in the\ncircle."),(0,a.kt)("p",null,'Transparency adds to the cost of drawing an element. An element is\ntransparent if some of the pixels are not solid. This increases the\ncost of drawing as the graphical engine first has to draw the element\nbehind the transparent element (as we saw in the "text in a frame"\nsection). Secondly the graphical engine then has to combine the\nbackground pixel with the pixel of the transparent element and write\nthe result to the framebuffer. This calculation takes considerable\nmore time than just writing the calculated pixel.'),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/performance/box-image-texture-circle.png",noShadow:"true",mdxType:"Figure"},"Box, Image, rotated Image, and circle. Solid elements in the first row. Transparent elements below."),(0,a.kt)("p",null,"Transparency always gives you an extra layer. But putting solid pixels\non top of other solid pixels does not always increase the number of\nlayers. The graphical engine tries to not draw pixels that are covered\nby other solid pixels, as this would be a waste of precious time."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The more expensive elements in the invalidated area, the longer the render time.")),(0,a.kt)("p",null,"Remember that is only the elements that are part of the invalidated\narea, that adds to the rendering time. Elements outside of the\ninvalidated areas does not impact the rendering time."),(0,a.kt)("p",null,"Read more about ui components and performance ",(0,a.kt)("a",p({parentName:"p"},{href:"../development/ui-development/ui-components/general-ui-component-performance"}),"here"),"."),(0,a.kt)("h3",p({},{id:"hardware-support-for-rendering"}),"Hardware support for rendering"),(0,a.kt)("p",null,"Some STM32 microcontrollers contain a graphical accelerator called\nChrom-ART (or DMA2D). This accelerator can reduce the rendering\ntime. As the accelerator runs in parallel with the microcontroller\ncore, the microcontroller is free to run other tasks while the\naccelerator renders graphics."),(0,a.kt)("p",null,"Chrom-ART is mainly useful for images and text. It is automatically\nused by the graphics engine when available."),(0,a.kt)("h2",p({},{id:"when-should-you-consider-rendering-time"}),"When should you consider rendering time"),(0,a.kt)("p",null,"Rendering time is not equally important all the time. You should pay\nattention to the rendering time when a slow frame rate is visible to\nthe user. This is typically the case when you have an animation\nrunning on part of the screen (like a rotating icon) or when you move\nor slide something across the screen. If the update frequency is low\nit will appear step-wise instead of fluent to the user. If this is the\ncase you should check the rendering time."),(0,a.kt)("p",null,"On the other hand, if you replace the whole screen with a new screen,\nit is normally not visible to the user if the frame rate dropped\nsignificantly during the change. This is because the user cannot see\nwhen the rendering started, but only when it finished."),(0,a.kt)("p",null,"These two rules means that for animated elements (e.g. moving) you\nshould use few layers and refrain from using complex elements and many\nlayers. For other parts of the screen, this could be unproblematic."),(0,a.kt)(r.Z,{imageSource:"/img/basic-concepts/performance/clock-and-scrolllist.png",noShadow:"true",mdxType:"Figure"},"Analog clock and a scroll list"),(0,a.kt)("p",null,"In this example we have an analog clock on the left. The three clock\nhands are rendered by rotating small elongated images. This is\nnormally fine as the hands do not move all the time. But if we wanted\nto move the clock around on the screen, they would be redrawn in every\nframe and that could be problematic, as drawing rotated images is\ntypically time consuming."),(0,a.kt)("p",null,"On the right we have a scroll list. The user can move this list of\nnumbers up and down, so we need a high framerate for the user\ninterface to appear responsive. Therefore it is important that we\nconsider the rendering time of the elements in the scroll list or\nreduce the size of the scroll list."),(0,a.kt)("h2",p({},{id:"tips-to-get-good-performance"}),"Tips to get good performance"),(0,a.kt)("p",null,"We end this section with a summary of the tips to obtain a good performance:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Do not redraw unchanged things"),"\nMake sure that you do not accidentially invalidate unnecessary parts\nof the display. This reduces the performance without any benifit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Find balance between quality and speed"),"\nReducing the complexity of the elements can improve the\nperformance. A good balance between this and the performance is\noften the key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Utilize hardware capabilities"),"\nThe capability of a microcontroller with hardware acceleration\n(Chrom-ART) is often higher than a microcontroller without. Consider\nusing a microcontroller with Chrom-ART."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Replace calculated graphics with images"),"\nThe calculated circle is slower than an image of a circle. In\ngeneral images can replace many static elements."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Adjust display refresh rate"),"\nAs we discussed in the beginning of this section is the refresh rate\na hard limit for the rendering time. If the rendering time increases\nabove the refresh rate, the frame rate drops. If your rendering time\nis just a little above the refresh rate, it may be possible to lower\nthe refresh rate of the display to e.g. 55 Hz (corresponding to 18.2\nms), and keep the high frame rate.")))}w.isMDXComponent=!0}}]);