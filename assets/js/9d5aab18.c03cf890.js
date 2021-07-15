(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8515],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?i.createElement(m,a(a({ref:t},s),{},{components:n})):i.createElement(m,a({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8678:function(e,t,n){"use strict";var i=n(7294);class o extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{class:e},i.createElement("div",{class:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},2083:function(e,t,n){"use strict";var i=n(7294);class o extends i.Component{render(){return i.createElement("code",null,this.props.children)}}t.Z=o},204:function(e,t,n){"use strict";var i=n(7294);class o extends i.Component{render(){return i.createElement("i",null,this.props.children)}}t.Z=o},3054:function(e,t,n){"use strict";var i=n(7294),o=n(8678);const r=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends i.Component{render(){return i.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}t.Z=a},1217:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var i=n(7294),o=n(3727),r=n(1368),a=n(5096),l=n(4487);const c=(0,i.createContext)({collectLink:()=>{}});var u=n(5026),s=n(7023),p=Object.defineProperty,d=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&k(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&k(e,n,t[n]);return e};var v=function(e){var t,n=e,{isNavLink:p,to:k,href:v,activeClassName:y,isActive:T,"data-noBrokenLinkCheck":w,autoAddBaseUrl:C=!0}=n,x=((e,t)=>{var n={};for(var i in e)f.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&m)for(var i of m(e))t.indexOf(i)<0&&g.call(e,i)&&(n[i]=e[i]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:M}}=(0,r.Z)(),{withBaseUrl:I}=(0,u.C)(),_=(0,i.useContext)(c),j=k||v,S=(0,a.Z)(j),O=null==j?void 0:j.replace("pathname://","");let E=void 0!==O?(P=O,C&&(e=>e.startsWith("/"))(P)?I(P):P):void 0;var P;E&&S&&(E=(0,s.applyTrailingSlash)(E,M));const G=(0,i.useRef)(!1),F=p?o.OL:o.rU,D=l.Z.canUseIntersectionObserver;let Z;(0,i.useEffect)((()=>(!D&&S&&null!=E&&window.docusaurus.prefetch(E),()=>{D&&Z&&Z.disconnect()})),[E,D,S]);const A=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,N=!E||!S||A;return E&&S&&!A&&!w&&_.collectLink(E),N?i.createElement("a",b(b({href:E},j&&!S&&{target:"_blank",rel:"noopener noreferrer"}),x)):i.createElement(F,b((X=b({},x),d(X,h({onMouseEnter:()=>{G.current||null==E||(window.docusaurus.preload(E),G.current=!0)},innerRef:e=>{var t,n;D&&e&&S&&(t=e,n=()=>{null!=E&&window.docusaurus.prefetch(E)},Z=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.unobserve(t),Z.disconnect(),n())}))})),Z.observe(t))},to:E||""}))),p&&{isActive:T,activeClassName:y}));var X}},5096:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return o}})},5026:function(e,t,n){"use strict";n.d(t,{C:function(){return r},Z:function(){return a}});var i=n(1368),o=n(5096);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(i)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+a:a}(t,e,n,i)}}function a(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},7271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),i="/"===n?"/":(o=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(n,i)}},7023:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(7271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return i(o).default}});var r=n(1080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return i(r).default}})},1080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},7328:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return g},contentTitle:function(){return k},metadata:function(){return b},toc:function(){return v},default:function(){return T}});var i=n(3905),o=n(1217),r=n(3054),a=n(2083),l=n(204),c=Object.defineProperty,u=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))h.call(t,n)&&m(e,n,t[n]);return e};const g={id:"compiling-and-flashing",title:"Compiling & Flashing"},k=void 0,b={unversionedId:"development/ui-development/working-with-touchgfx/compiling-and-flashing",id:"development/ui-development/working-with-touchgfx/compiling-and-flashing",isDocsHomePage:!1,title:"Compiling & Flashing",description:"This section describes how to go from TouchGFX application code to executing program, that is how to compile and flash in a specific setup.",source:"@site/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/compiling-and-flashing",permalink:"/4.13/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing",version:"current",frontMatter:{id:"compiling-and-flashing",title:"Compiling & Flashing"},sidebar:"docs",previous:{title:"Simulator",permalink:"/4.13/docs/development/ui-development/working-with-touchgfx/simulator"},next:{title:"Debugging",permalink:"/4.13/docs/development/ui-development/working-with-touchgfx/debugging"}},v=[{value:"Compiling TouchGFX Applications",id:"compiling-touchgfx-applications",children:[{value:"Compiling for PC Simulator",id:"compiling-for-pc-simulator",children:[]},{value:"Compiling for Target Hardware",id:"compiling-for-target-hardware",children:[]}]},{value:"Flashing STM32 Evaluation Kits",id:"flashing-stm32-evaluation-kits",children:[{value:"GCC &amp; TouchGFX Designer",id:"gcc--touchgfx-designer",children:[]},{value:"CubeIDE",id:"cubeide",children:[]},{value:"IAR",id:"iar",children:[]},{value:"Keil",id:"keil",children:[]}]},{value:"Flashing Custom Hardware",id:"flashing-custom-hardware",children:[]}],y={toc:v};function T(e){var t,n=e,{components:c}=n,m=((e,t)=>{var n={};for(var i in e)d.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&p)for(var i of p(e))t.indexOf(i)<0&&h.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=f(f({},y),m),u(t,s({components:c,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"This section describes how to go from TouchGFX application code to executing program, that is how to compile and flash in a specific setup."),(0,i.kt)("h2",f({},{id:"compiling-touchgfx-applications"}),"Compiling TouchGFX Applications"),(0,i.kt)("p",null,"When compiling a TouchGFX application, there are two options; compiling for the PC simulator or compiling for the target hardware."),(0,i.kt)("h3",f({},{id:"compiling-for-pc-simulator"}),"Compiling for PC Simulator"),(0,i.kt)("p",null,"There are two options for compiling projects for the PC Simulator; GCC and Visual Studio. ",(0,i.kt)("br",null),"\nBoth of these options are always available, since they are generated by TouchGFX Designer."),(0,i.kt)("h4",f({},{id:"gcc"}),"GCC"),(0,i.kt)("p",null,"The makefile is located at ",(0,i.kt)(a.Z,{mdxType:"InlineCode"},"<touchgfx_application_root_folder>/simulator/gcc/Makefile")),(0,i.kt)("p",null,"TouchGFX includes a MinGW environment, that comes preinstalled with a GCC compiler and GNU Make, making it easy to execute the generated Makefile for the PC simulator."),(0,i.kt)("p",null,"The TouchGFX Environment can be launched either from ",(0,i.kt)(a.Z,{mdxType:"InlineCode"},"<touchgfx_installation_directory>/env/MinGW/msys/1.0/msys.bat"),' or from the shortcut added to the Windows start menu, named "TouchGFX x.y.z Environment" where x, y and z describe the version number.'),(0,i.kt)("p",null,"After launching the TouchGFX Environment and navigating to the TouchGFX Application root folder, the simple command below can be executed to produce a simulator.exe file."),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{}),"make -f simulator/gcc/Makefile\n")),(0,i.kt)("p",null,"The simulator executable can then be launched from the TouchGFX Environment with the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{}),"./build/bin/simulator.exe\n")),(0,i.kt)("p",null,"The PC Simulator can also be compiled and launched from TouchGFX Designer, by using the ",(0,i.kt)(o.Z,{to:"../designer-user-guide/main-window#run-simulator",mdxType:"Link"},"Run Simulator")," command."),(0,i.kt)("h4",f({},{id:"visual-studio"}),"Visual Studio"),(0,i.kt)("p",null,"To compile the PC Simulator using Visual Studio, simply open the generated solution file located at ",(0,i.kt)(a.Z,{mdxType:"InlineCode"},"<touchgfx_application_root_folder>/simulator/msvs/Application.sln")," using Visual Studio."),(0,i.kt)("p",null,"The PC Simulator can be launched directly from Visual Studio, enabling ",(0,i.kt)("a",f({parentName:"p"},{href:"debugging"}),"code debugging"),"."),(0,i.kt)(r.Z,{mdxType:"Note"},"Before being able to compile with GCC or Visual Studio, Run the ",(0,i.kt)(o.Z,{to:"../designer-user-guide/main-window#generate-code",mdxType:"Link"},"Generate")," command from TouchGFX Designer."),(0,i.kt)("h3",f({},{id:"compiling-for-target-hardware"}),"Compiling for Target Hardware"),(0,i.kt)("p",null,"Compiling projects for STM32 Evaluation Kits is quite simple for ",(0,i.kt)("a",f({parentName:"p"},{href:"../../../introduction/getting-started#application-template--ui-template"}),"Application Template")," based applications.",(0,i.kt)("br",null)),(0,i.kt)("p",null,"Each application template contain project files for GCC, CubeIDE, IAR and Keil:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GCC: ",(0,i.kt)(a.Z,{mdxType:"InlineCode"},"<project_root_folder>/gcc/MakeFile")),(0,i.kt)("li",{parentName:"ul"},"CubeIDE: ",(0,i.kt)(a.Z,{mdxType:"InlineCode"},"<project_root_folder>/STM32CubeIDE/.cproject")),(0,i.kt)("li",{parentName:"ul"},"IAR: ",(0,i.kt)(a.Z,{mdxType:"InlineCode"},"<project_root_folder>/EWARM/Project.eww")),(0,i.kt)("li",{parentName:"ul"},"Keil: ",(0,i.kt)(a.Z,{mdxType:"InlineCode"},"<project_root_folder>/MDK-ARM/<STM32_evaluation_kit_name>.uvprojx"))),(0,i.kt)("p",null,"The active tool chain is set from CubeMX and is set to CubeIDE by default. ",(0,i.kt)(l.Z,{mdxType:"InlineNote"},"Please note that all project files are not present at the same time. The generated project file depends on the selected tool chain in CubeMX")),(0,i.kt)("p",null,"TouchGFX includes a MinGW environment, that comes preinstalled with the GNU Embedded Toolchain for Arm and GNU Make, making it easy to execute the included Makefile for the target hardware."),(0,i.kt)("p",null,"The TouchGFX Environment can be launched either from ",(0,i.kt)(a.Z,{mdxType:"InlineCode"},"<touchgfx_installation_directory>/env/MinGW/msys/1.0/msys.bat"),' or from the shortcut added to the Windows start menu "TouchGFX x.y.z Environment"'),(0,i.kt)("p",null,"After launching the TouchGFX Environment and navigating to the project root folder, the simple command below can be executed to compile the project for the target hardware."),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{}),"make -f gcc/Makefile\n")),(0,i.kt)(r.Z,{mdxType:"Note"},"Before being able to compile with GCC, CubeIDE, IAR or Keil, run the ",(0,i.kt)(o.Z,{to:"../designer-user-guide/main-window#generate-code",mdxType:"Link"},"Generate")," command from TouchGFX Designer."),(0,i.kt)("h2",f({},{id:"flashing-stm32-evaluation-kits"}),"Flashing STM32 Evaluation Kits"),(0,i.kt)("p",null,"Flashing projects to STM32 Evaluation Kits is quite simple with projects based on premade ",(0,i.kt)("a",f({parentName:"p"},{href:"../../../introduction/getting-started#application-template--ui-template"}),"Application Template")," .",(0,i.kt)("br",null)),(0,i.kt)("p",null,"Each project, when build, produces a binary that can be flashed by\neither ",(0,i.kt)(o.Z,{target:"_blank",to:"https://www.st.com/en/development-tools/stsw-link004.html",mdxType:"Link"},"ST Link Utility")," or ",(0,i.kt)(o.Z,{target:"_blank",to:"https://www.st.com/en/development-tools/stm32cubeprog.html",mdxType:"Link"},"Cube Programmer")),(0,i.kt)("p",null,"Therefore these tools must be installed to proceed with flashing."),(0,i.kt)("p",null,"It is suggested to install these tools to their default location."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ST Link Utility default install location:",(0,i.kt)("br",null),(0,i.kt)(a.Z,{mdxType:"InlineCode"},"C:/Program Files (x86)/STMicroelectronics/STM32 ST-LINK Utility/ST-LINK Utility")),(0,i.kt)("li",{parentName:"ul"},"Cube Programmer default install location:",(0,i.kt)("br",null),(0,i.kt)(a.Z,{mdxType:"InlineCode"},"C:/Program Files/STMicroelectronics/STM32Cube/STM32CubeProgrammer"))),(0,i.kt)(r.Z,{mdxType:"Note"},"The Application Templates do not provide any flash loaders for flashing directly from within IAR, Keil, CubeIDE or other IDEs."),(0,i.kt)("h3",f({},{id:"gcc--touchgfx-designer"}),"GCC & TouchGFX Designer"),(0,i.kt)("p",null,"The Makefile included with an Application Template located at ",(0,i.kt)(a.Z,{mdxType:"InlineCode"},"<project_root_folder>/gcc/MakeFile")," has a built in flash command, as shown below, that uses either ST Link Utility or Cube Programmer (depending on the AT) to flash the STM32 Evaluation Kit. You can of course also use the desktop version of the flash tools to flash the boards with the generated .hex files."),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{}),"make -f gcc/Makefile flash\n")),(0,i.kt)("p",null,"The .hex file is located at ",(0,i.kt)(a.Z,{mdxType:"InlineCode"},"<project_root_folder>/TouchGFX/build/bin/target.hex")),(0,i.kt)("p",null,"It is also possible to only flash the internal flash and thus skipping the external part. This can reduce the flash time considerable if you have a large set of images. However, you need to be sure that the content for the external flash has not changed since you flashed the external flash last time. If it has, and you do not reflash it, you will see strange behaviour. In this case reflash both the internal and external flash."),(0,i.kt)("pre",null,(0,i.kt)("code",f({parentName:"pre"},{}),"make -f gcc/Makefile intflash\n")),(0,i.kt)("p",null,"The .hex file is located at ",(0,i.kt)(a.Z,{mdxType:"InlineCode"},"<project_root_folder>/TouchGFX/build/bin/inttarget.hex")),(0,i.kt)("p",null,"The Application Template also provides the configuration for TouchGFX Designer to be able to flash projects via the ",(0,i.kt)("a",f({parentName:"p"},{href:"../designer-user-guide/main-window#run-target"}),"Run Target Command"),". The command used by TouchGFX Designer to flash can be seen and overridden in the ",(0,i.kt)("a",f({parentName:"p"},{href:"../designer-user-guide/config-view#build"}),"Build Section")," of the ",(0,i.kt)("a",f({parentName:"p"},{href:"../designer-user-guide/config-view"}),"Config View")," in TouchGFX Designer."),(0,i.kt)("h3",f({},{id:"cubeide"}),"CubeIDE"),(0,i.kt)("p",null,"Application Templates provide support for flashing project compiled with CubeIDE, by using the .elf file output by CubeIDE, with the Cube Programmer."),(0,i.kt)("p",null,"The .elf file is located at ",(0,i.kt)(a.Z,{mdxType:"InlineCode"},"<project_root_folder>/STM32CubeIDE/Debug/<STM32_evaluation_kit_name>.elf")),(0,i.kt)(l.Z,{mdxType:"InlineNote"},"e.g. C:/TouchGFXProjects/MyApplication/STM32CubeIDE/Debug/STM32F746G_DISCO.elf"),(0,i.kt)("h3",f({},{id:"iar"}),"IAR"),(0,i.kt)("p",null,"The Application Templates provide support for flashing project compiled with IAR, by using the .hex file output by IAR, with the Cube Programmer."),(0,i.kt)("p",null,"The .hex file is located at ",(0,i.kt)(a.Z,{mdxType:"InlineCode"},"<project_root_folder>/EWARM/<STM32_evaluation_kit_name>/Exe/<STM32_evaluation_kit_name>.hex")),(0,i.kt)(l.Z,{mdxType:"InlineNote"},"e.g. C:/TouchGFXProjects/MyApplication/MDK-ARM/STM32F469I-DISCO/STM32F469I-DISCO.hex"),(0,i.kt)("h3",f({},{id:"keil"}),"Keil"),(0,i.kt)("p",null,"The Application Templates provide support for flashing project compiled with Keil, by using the .hex file output by Keil, with the Cube Programmer."),(0,i.kt)("p",null,"The .hex file is located at ",(0,i.kt)(a.Z,{mdxType:"InlineCode"},"<project_root_folder>/MDK-ARM/<STM32_evaluation_kit_name>/<STM32_evaluation_kit_name>.hex")),(0,i.kt)(l.Z,{mdxType:"InlineNote"},"e.g. C:/TouchGFXProjects/MyApplication/MDK-ARM/STM32F469I-DISCO/STM32F469I-DISCO.hex"),(0,i.kt)("h2",f({},{id:"flashing-custom-hardware"}),"Flashing Custom Hardware"),(0,i.kt)("p",null,"If instead what needs to be flashed is custom hardware, and not a predefined hardware setup like an STM32 Evaluation Kit, you can still use STM32CubeProgrammer. STM32CubeProgrammer does not necessarily come with a flash loading mechanism for your specific external memory. It is however possible to create a custom flash loader. Read the ",(0,i.kt)(o.Z,{to:"https://www.st.com/resource/en/user_manual/dm00403500-stm32cubeprogrammer-software-description-stmicroelectronics.pdf",mdxType:"Link"},"user manual on developing customized loaders for your external memory")," to find more info."))}T.isMDXComponent=!0}}]);