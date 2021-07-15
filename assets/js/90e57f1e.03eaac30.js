(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4744],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},814:function(e,t,n){"use strict";var o=n(7294),i=n(8678);const r=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},o.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class a extends o.Component{render(){return o.createElement(i.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:r},this.props.children)}}t.Z=a},2425:function(e,t,n){"use strict";var o=n(7294);class i extends o.Component{render(){return o.createElement("div",{class:"code-header"},o.createElement("div",null,o.createElement("h5",null,this.props.children)))}}t.Z=i},8678:function(e,t,n){"use strict";var o=n(7294);class i extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{class:e},o.createElement("div",{class:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},8087:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return f},metadata:function(){return g},toc:function(){return w},default:function(){return k}});var o=n(3905),i=n(814),r=n(2425),a=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&p(e,n,t[n]);return e};const m={id:"known-issues",title:"Known Issues"},f=void 0,g={unversionedId:"miscellaneous/known-issues",id:"miscellaneous/known-issues",isDocsHomePage:!1,title:"Known Issues",description:"This article lists the issues that are known to be present in all TouchGFX versions, along with potential workarounds. Also, if there are any specific upgrade steps you need to perform to upgrade TouchGFX to a certain version, these will be mentioned. Note that if your current version is several releases old, you need to perform the upgrade steps for all the releases up to the new one.",source:"@site/docs/miscellaneous/known-issues.mdx",sourceDirName:"miscellaneous",slug:"/miscellaneous/known-issues",permalink:"/4.13/docs/miscellaneous/known-issues",version:"current",frontMatter:{id:"known-issues",title:"Known Issues"},sidebar:"docs",previous:{title:"Getting Help",permalink:"/4.13/docs/miscellaneous/getting-help"},next:{title:"Changelog",permalink:"/4.13/docs/miscellaneous/changelog"}},w=[{value:"TouchGFX 4.13.0",id:"touchgfx-4130",children:[{value:"Bugs",id:"bugs",children:[]},{value:"Additional Compiler Support",id:"additional-compiler-support",children:[]},{value:"Backwards Compatibility",id:"backwards-compatibility",children:[]}]},{value:"TouchGFX 4.12.3",id:"touchgfx-4123",children:[{value:"Backwards compatibility",id:"backwards-compatibility-1",children:[]}]},{value:"TouchGFX 4.11.0",id:"touchgfx-4110",children:[{value:"Backwards compatibility",id:"backwards-compatibility-2",children:[]}]},{value:"TouchGFX 4.10.0",id:"touchgfx-4100",children:[{value:"Upgrading from 4.9.x",id:"upgrading-from-49x",children:[]},{value:"Backwards compatibility",id:"backwards-compatibility-3",children:[]},{value:"Project Updater Issue",id:"project-updater-issue",children:[]},{value:"TextArea and ChromART (DMA2D)",id:"textarea-and-chromart-dma2d",children:[]}]},{value:"TouchGFX 4.9.0",id:"touchgfx-490",children:[{value:"Upgrading from 4.8.0",id:"upgrading-from-480",children:[]},{value:"Method 1: retain original file structure",id:"method-1-retain-original-file-structure",children:[]},{value:"Method 2: import into new template",id:"method-2-import-into-new-template",children:[]},{value:"Method 3: Manual upgrade without Designer",id:"method-3-manual-upgrade-without-designer",children:[]}]}],y={toc:w};function k(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var o in e)u.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&c)for(var o of c(e))t.indexOf(o)<0&&d.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=h(h({},y),p),l(t,s({components:a,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"This article lists the issues that are known to be present in all TouchGFX versions, along with potential workarounds. Also, if there are any specific upgrade steps you need to perform to upgrade TouchGFX to a certain version, these will be mentioned. Note that if your current version is several releases old, you need to perform the upgrade steps for all the releases up to the new one."),(0,o.kt)("h2",h({},{id:"touchgfx-4130"}),"TouchGFX 4.13.0"),(0,o.kt)("h3",h({},{id:"bugs"}),"Bugs"),(0,o.kt)("h4",h({},{id:"font-converter"}),"Font Converter"),(0,o.kt)("p",null,"The FontConverter tool would generate glyph pixel data for unicodes that were a part of a rule in the font, regardless of that glyph being used in an actual text in the application. This led to several megabytes, potentially, of additional glyph pixel data. New FontConverter tools (windows and linux) that no longer generate pixel data for glyphs that aren't in use by the application can be found here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",h({parentName:"li"},{href:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/Patches/4.13.0/fontconvert_fix.zip"}),"fontconvert_fix.zip"))),(0,o.kt)("p",null,"Extracting this file at the root of your 4.13.0 installation will update the fontconverter binaries inside"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"touchgfx\\framework\\tools")),(0,o.kt)("h3",h({},{id:"additional-compiler-support"}),"Additional Compiler Support"),(0,o.kt)("p",null,"A library built with ARMCLANG compiler (v6.12) can be found here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",h({parentName:"li"},{href:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/Patches/4.13.0/touchgfx_core_clang.zip"}),"touchgfx_core_clang.zip"))),(0,o.kt)("p",null,"Extracting this file at the root of your 4.13.0 installation will place the library ",(0,o.kt)("inlineCode",{parentName:"p"},"touchgfx_core_clang.lib")," inside."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"touchgfx\\lib\\core\\cortex_m7\\Keil")),(0,o.kt)("h3",h({},{id:"backwards-compatibility"}),"Backwards Compatibility"),(0,o.kt)("h4",h({},{id:"deprecated-features"}),"Deprecated Features"),(0,o.kt)("p",null,"The following deprecated features have been removed. If you have referenced them in your code, you may need to rewrite parts of your application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Definition of deprecated ",(0,o.kt)("inlineCode",{parentName:"li"},"TRANSPARENT_COL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Drawable::getType()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HAL::blitSetTransparencyKey()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HAL::registerTextCache()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HAL::cacheTextString()"))),(0,o.kt)("h4",h({},{id:"texturemapper-is-disabled-by-default"}),"TextureMapper is Disabled by Default"),(0,o.kt)("p",null,"The TextureMapper is disabled by default to reduce the code space used by TouchGFX. TouchGFX designer will insert code to enable texture mapper in all new project."),(0,o.kt)("p",null,"If you are migrating an old project to TouchGFX 4.13 and you are updating to TouchGFX 4.13 this is handled by TouchGFX Designer."),(0,o.kt)("p",null,"If you are updating manually then you need to insert code to enable the TextureMapper. Otherwise any TextureMapper will not draw on the screen."),(0,o.kt)("p",null,"Read more here:\xa0",(0,o.kt)("a",h({parentName:"p"},{href:"../development/ui-development/designer-user-guide/config-view#framework-features"}),"Configuring TouchGFX Features"),"."),(0,o.kt)("h4",h({},{id:"hal-sdl1-incompatible"}),"HAL SDL1 incompatible"),(0,o.kt)("p",null,"Two functions were moved from the TouchGFX library code to the ",(0,o.kt)("inlineCode",{parentName:"p"},"HALSDL2.cpp"),". This makes no difference for applications that uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"HALSDL2.cpp")," as HAL for the Windows simulator."),(0,o.kt)("p",null,"If you have a old application (before TouchGFX 4.8.0) your simulator is maybe using HALSDL (not 2). This simulator HAL is not included in TouchGFX anymore. The HALSDL is missing the two functions that were previously included in the TouchGFX library. You need to add them manually to ",(0,o.kt)("inlineCode",{parentName:"p"},"HALSDL.cpp"),":"),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"HALSDL.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),'void simulator_enable_stdio();\nvoid simulator_enable_stdio()\n{\n    HWND consoleHwnd = GetConsoleWindow(); // Get handle of console window\n    if (!consoleHwnd)                      // No console window yet?\n    {\n        HWND activeHwnd = GetActiveWindow(); // Remember which window is active\n\n        AllocConsole();                   // Allocate a new console\n        consoleHwnd = GetConsoleWindow(); // Get handle of console window\n\n        FILE* dummy;\n        freopen_s(&dummy, "CONIN$", "r", stdin); // Redirect stdin/stdout/stderr to the new console\n        freopen_s(&dummy, "CONOUT$", "w", stdout);\n        freopen_s(&dummy, "CONOUT$", "w", stderr);\n\n        SwitchToThisWindow(activeHwnd, true); // Switch back to the originally active window\n    }\n    if (consoleHwnd)\n    {\n        ShowWindow(consoleHwnd, SW_SHOW); // Show/hide it!\n    }\n}\nvoid simulator_printf(const char* format, va_list pArg);\nvoid simulator_printf(const char* format, va_list pArg)\n{\n    // Create a console window, if window is visible.\n    simulator_enable_stdio();\n    if (GetConsoleWindow()) // Only print if we have a console window\n    {\n        vprintf(format, pArg);\n    }\n}\n')),(0,o.kt)("h2",h({},{id:"touchgfx-4123"}),"TouchGFX 4.12.3"),(0,o.kt)("h3",h({},{id:"backwards-compatibility-1"}),"Backwards compatibility"),(0,o.kt)("h4",h({},{id:"screen-transitions"}),"Screen transitions"),(0,o.kt)("p",null,"Earlier versions are redrawing the entire screen after a screen transition is completed.\xa0This additional redraw caused performance issues on some slow platforms. If you require this redraw for some reason, you need to invalidate the relevant part of the screen, e.g. by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"container.invalidate()")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen::afterTransition()")," virtual of the Screen transitioned to."),(0,o.kt)("h4",h({},{id:"binary-fonts"}),"Binary Fonts"),(0,o.kt)("p",null,"The format of the binary fonts has changed because kerning data is now also included in the binary fonts. Binary font files needs to be regenerated, old files will not work correctly. Depending on how your Makefiles are setup, this is normally done by regenerating all assets (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"make -f simulator/gcc/Makefile clean assets"),")."),(0,o.kt)("h2",h({},{id:"touchgfx-4110"}),"TouchGFX 4.11.0"),(0,o.kt)("h3",h({},{id:"backwards-compatibility-2"}),"Backwards compatibility"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"touchgfx/framework/include/touchgfx/lcd/LCD.hpp")," we have removed an include of the file ",(0,o.kt)("inlineCode",{parentName:"p"},"touchgfx/hal/HAL.hpp")," that was inserted by mistake in an earlier version. This may give you a compile error in a file where you have included ",(0,o.kt)("inlineCode",{parentName:"p"},"LCD.hpp")," and also make use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"HAL.hpp")," content. The solution is to also include\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"touchgfx/framework/include/touchgfx/hal/HAL.hpp")," in your file."),(0,o.kt)("h2",h({},{id:"touchgfx-4100"}),"TouchGFX 4.10.0"),(0,o.kt)("h3",h({},{id:"upgrading-from-49x"}),"Upgrading from 4.9.x"),(0,o.kt)("p",null,"From version 4.10.0 TouchGFX runs exclusively on STM32 MCUs."),(0,o.kt)("p",null,"You need to do the following if updating an old project."),(0,o.kt)("p",null,"Add the highlighted code below at application startup to inform TouchGFX that you are running on STM32 hardware. A suitable location is the end of the ",(0,o.kt)("inlineCode",{parentName:"p"},"hw_init()")," function in ",(0,o.kt)("inlineCode",{parentName:"p"},"BoardConfiguration.cpp")),(0,o.kt)(r.Z,{mdxType:"CodeHeader"},"BoardConfiguration.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void hw_init() {\n    ...\n    //Enable CRC engine for STM32 Lock check\n    __HAL_RCC_CRC_CLK_ENABLE();\n}\n")),(0,o.kt)("h3",h({},{id:"backwards-compatibility-3"}),"Backwards compatibility"),(0,o.kt)("p",null,"Unused file ",(0,o.kt)("inlineCode",{parentName:"p"},"\\touchgfx\\framework\\include\\touchgfx\\canvas_widget_renderer\\RGBA8.hpp")," removed."),(0,o.kt)("h3",h({},{id:"project-updater-issue"}),"Project Updater Issue"),(0,o.kt)("p",null,"IAR and Keil project updaters invoked from TouchGFX Designer do not respect custom file level optimization set in the respective IDE."),(0,o.kt)("h3",h({},{id:"textarea-and-chromart-dma2d"}),"TextArea and ChromART (DMA2D)"),(0,o.kt)("p",null,"Rendering of TextAreas with ChromART (when TextArea is the top most element / last to be drawn) cause a premature unlocking of the framebuffer and subsequently a premature completion/transfer of the current frame to the display. Once ",(0,o.kt)("inlineCode",{parentName:"p"},"endFrame()")," is called by TouchGFX all drawing operations, including DMA operations, should already be completed. Due to a breach of contract by TextArea in how to appropriately protect the framebuffer, DMA operations are allowed to continue even after returning from ",(0,o.kt)("inlineCode",{parentName:"p"},"endFrame()"),"."),(0,o.kt)("p",null,"The contract for a widget is to either:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Lock the framebuffer (returns a pointer to framebuffer)."),(0,o.kt)("li",{parentName:"ol"},"Draw something in the framebuffer.\xa0"),(0,o.kt)("li",{parentName:"ol"},"Unlock the framebuffer.")),(0,o.kt)("p",null,"Or to use DMA operations, in which case syncronization of the framebuffer is handled automatically."),(0,o.kt)("p",null,"TextArea, in 4.10.0, mixes the two procedures which can cause glitches if it is the top most element (last to be drawn) of the current screen. The bug can be fixed by manually guarding ",(0,o.kt)("inlineCode",{parentName:"p"},"endFrame()")," with the following override of ",(0,o.kt)("inlineCode",{parentName:"p"},"endFrame()")," (based on F4 HAL). It ensures that ",(0,o.kt)("inlineCode",{parentName:"p"},"endFrame()")," does not return if ChromART operations are still being processed.\xa0\xa0"),(0,o.kt)("pre",null,(0,o.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void STM32F4HAL::endFrame()\n{\n    if (dma.isDMARunning())\n    {\n        OSWrappers::tryTakeFrameBufferSemaphore();\n    }\n    HAL::endFrame();\n}\n")),(0,o.kt)("h2",h({},{id:"touchgfx-490"}),"TouchGFX 4.9.0"),(0,o.kt)("h3",h({},{id:"upgrading-from-480"}),"Upgrading from 4.8.0"),(0,o.kt)("p",null,"With the introduction of Application Templates, which essentially separates board support packages from the core framework, we have removed a lot of low-level drivers and other files from the ",(0,o.kt)("em",{parentName:"p"},"touchgfx")," folder in 4.9.0. These files are now provided by application templates instead. However, this means that you cannot upgrade to 4.9.0 by just replacing the touchgfx folder, since that would likely lead to some BSP files missing. Instead, the TouchGFX Designer is able to perform the upgrade automatically. The upgrade can be done in two different ways, and you will need to decide which one is most suitable for you."),(0,o.kt)(i.Z,{mdxType:"Caution"},"Please make sure you have a backup of your project before upgrading"),(0,o.kt)("h3",h({},{id:"method-1-retain-original-file-structure"}),"Method 1: retain original file structure"),(0,o.kt)("p",null,"This method is done by simply opening your project in the new 4.9.0 Designer. TouchGFX Designer will prompt you whether you want to upgrade, and by clicking OK, TouchGFX Designer will apply the necessary changes. TouchGFX Designer will perform the following operations:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Unpack the new reduced touchgfx folder into your application, and modify your TouchGFX path to match this"),(0,o.kt)("li",{parentName:"ol"},"Download and unpack all the files we have removed from the touchgfx folder, so that your project still compiles")),(0,o.kt)("p",null,"This approach will leave pretty much everything as they used to be, so if the old file structure suits your project, this is the easiest choice. The main drawback is that you will not have the benefit of the image converter speedup (by working on image folders instead of individual files). But you can modify your makefile manually to use this approach though."),(0,o.kt)("h3",h({},{id:"method-2-import-into-new-template"}),"Method 2: import into new template"),(0,o.kt)("p",null,'Using this method you can transition your project into the new template-based file organisation. To achieve this, you must first let the Designer upgrade your project using Method 1 above. Then, create a new project using the appropriate application template (simulator, or one matching your eval board). With this new project opened in the Designer, go to the top menu and click "Edit -> Import GUI". In the dialog box point out the .touchgfx file of your project. The Designer will then automatically import all the UI files, including assets, into the newly created project. If you have added additional code outside of the gui folder, you would need to manually copy those files over to the new project.'),(0,o.kt)("h3",h({},{id:"method-3-manual-upgrade-without-designer"}),"Method 3: Manual upgrade without Designer"),(0,o.kt)("p",null,"If you are not using the Designer, you can perform the upgrade by:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Replacing the touchgfx folder used by your project with the one from the 4.9.0 installation."),(0,o.kt)("li",{parentName:"ol"},"Download ",(0,o.kt)("a",h({parentName:"li"},{href:"http://ftp.draupnergraphics.com/TouchGFX/Evaluation/4.9.0/Qll3iKK54AnJer7XRNm2/fw_delta_4.8.0_4.9.0.zip"}),"this zip")," and unpack it into the touchgfx folder, restoring the removed files.")))}k.isMDXComponent=!0}}]);