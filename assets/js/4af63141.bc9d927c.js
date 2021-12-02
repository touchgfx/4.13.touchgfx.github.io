(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6215],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(e,t,n){"use strict";var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},82985:function(e,t,n){"use strict";var r=n(67294);class o extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=o},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},65420:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return f},metadata:function(){return g},toc:function(){return k},default:function(){return v}});var r=n(3905),o=n(44035),i=n(82985),a=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&m(e,n,t[n]);return e};const h={id:"simulator",title:"Simulator"},f=void 0,g={unversionedId:"development/ui-development/working-with-touchgfx/simulator",id:"development/ui-development/working-with-touchgfx/simulator",isDocsHomePage:!1,title:"Simulator",description:"Building a TouchGFX UI often involves a lot of tweeking of the graphics details to match the specification of the UI.",source:"@site/docs/development/ui-development/working-with-touchgfx/simulator.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/simulator",permalink:"/4.13/docs/development/ui-development/working-with-touchgfx/simulator",version:"current",frontMatter:{id:"simulator",title:"Simulator"},sidebar:"docs",previous:{title:"Widgets and Containers",permalink:"/4.13/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"},next:{title:"Compiling & Flashing",permalink:"/4.13/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing"}},k=[{value:"How To Run",id:"how-to-run",children:[{value:"Using TouchGFX Designer",id:"using-touchgfx-designer",children:[]},{value:"Using TouchGFX Environment",id:"using-touchgfx-environment",children:[]}]},{value:"Simulator Features",id:"simulator-features",children:[]},{value:"Simulator Only User Code",id:"simulator-only-user-code",children:[]}],y={toc:k};function v(e){var t,n=e,{components:a}=n,m=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},y),m),l(t,u({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Building a TouchGFX UI often involves a lot of tweeking of the graphics details to match the specification of the UI."),(0,r.kt)("p",null,"To speed up the development process it is important to have a fast turnaround time when trying out and debugging your application. Flashing a board can often take quite some time so doing this each time you have made a small change to your application will really slow down the development. To alleviate this, the TouchGFX PC simulator is a great addition to your development tools."),(0,r.kt)("p",null,"You simply compile your application for your PC and run the application there. The code executed is exactly the same as on target except for the Board Bring Up code and Abstraction Layer which are made for the PC instead of your board. This means that you can test things like placement of widgets, interactions, animations, state machines and so on just as precise as on target. You can even ",(0,r.kt)("a",d({parentName:"p"},{href:"debugging"}),"debug")," your code using IDEs like Visual Studio if you like. Of course things like performance and interactions with real backend systems must be done on your board."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/simulator-example.gif",mdxType:"Figure"},"Simulator example"),(0,r.kt)("h2",d({},{id:"how-to-run"}),"How To Run"),(0,r.kt)("h3",d({},{id:"using-touchgfx-designer"}),"Using TouchGFX Designer"),(0,r.kt)("p",null,'To launch the simulator from within TouchGFX Designer, simply press the "Run Simulator" button in the top right corner or press ',(0,r.kt)(i.Z,{mdxType:"Shortcut"},"F5")," on your keyboard."),(0,r.kt)(o.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/run-simulator-designer.png",mdxType:"Figure"},"Launching the simulator from TouchGFX Designer"),(0,r.kt)("h3",d({},{id:"using-touchgfx-environment"}),"Using TouchGFX Environment"),(0,r.kt)("p",null,"To launch the simulator using the TouchGFX environment, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the TouchGFX Environment"),(0,r.kt)("li",{parentName:"ol"},"Navigate to the location of your TouchGFX application"),(0,r.kt)("li",{parentName:"ol"},"Run the command ",(0,r.kt)("inlineCode",{parentName:"li"},"make -f simulator/gcc/Makefile -j6")," to compile the simulator"),(0,r.kt)("li",{parentName:"ol"},"Run the command ",(0,r.kt)("inlineCode",{parentName:"li"},"./build/bin/simulator.exe")," to launch the simulator")),(0,r.kt)("p",null,"Run steps 3 and 4 whenever you have made a change to your TouchGFX application."),(0,r.kt)("h2",d({},{id:"simulator-features"}),"Simulator Features"),(0,r.kt)("p",null,"Apart from capturing mouse input, the TouchGFX simulator also includes other useful features, listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Shortcut"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Feature"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(i.Z,{mdxType:"Shortcut"},"F1")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Enables/disables debug info.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(i.Z,{mdxType:"Shortcut"},"F2")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Enables/disables highlighting invalidated area.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(i.Z,{mdxType:"Shortcut"},"F3")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Takes a screenshot and places the image under the ",(0,r.kt)("inlineCode",{parentName:"td"},"screenshots")," folder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(i.Z,{mdxType:"Shortcut"},"CTRL + F3")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Takes screenshots of the next 50 frames and places the images under the ",(0,r.kt)("inlineCode",{parentName:"td"},"screenshots")," folder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(i.Z,{mdxType:"Shortcut"},"SHIFT + F3")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Takes a screenshot and places it in your clipboard.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(i.Z,{mdxType:"Shortcut"},"F4")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"If a simulator skin is used - enables/disables the simulator skin.",(0,r.kt)("br",null),"If a simulator skin is ",(0,r.kt)("i",null,"not")," used - enables/disables window border.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)(i.Z,{mdxType:"Shortcut"},"ESC")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Close the simulator.")))),(0,r.kt)("h2",d({},{id:"simulator-only-user-code"}),"Simulator Only User Code"),(0,r.kt)("p",null,"If you have some code that should only run when using TouchGFX simulator, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"#IFDEF Simulator")," in your C++ code:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"#IFDEF Simulator\n  // Your simulator specific user code here\n#ENDIF\n")),(0,r.kt)("p",null,"If you want to output a debug text to the console you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"touchgfx_printf")," function. This is a printf like function that will only be included when building simulator code and thus will not interfere when running on target. Therefore there is no need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"#IFDEF Simulator")," in this case."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),'int i = 0;\ntouchgfx_printf("Application is running through simulator! \\n");\ntouchgfx_printf("Print our value for integer i = %i \\n", i);\n')))}v.isMDXComponent=!0}}]);