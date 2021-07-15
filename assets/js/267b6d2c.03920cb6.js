(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6205],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),h=i,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},814:function(e,t,n){"use strict";var r=n(7294),i=n(8678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}t.Z=l},4035:function(e,t,n){"use strict";var r=n(7294),i=n(5026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:o,src:l})),r.createElement("p",null,e.children))}},8678:function(e,t,n){"use strict";var r=n(7294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},2083:function(e,t,n){"use strict";var r=n(7294);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=i},2985:function(e,t,n){"use strict";var r=n(7294);class i extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=i},7793:function(e,t,n){"use strict";var r=n(7294),i=n(8678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=l},1217:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(7294),i=n(3727),o=n(1368),l=n(5096),a=n(4487);const c=(0,r.createContext)({collectLink:()=>{}});var s=n(5026),u=n(7023),d=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&b(e,n,t[n]);if(m)for(var n of m(t))f.call(t,n)&&b(e,n,t[n]);return e};var k=function(e){var t,n=e,{isNavLink:d,to:b,href:k,activeClassName:y,isActive:w,"data-noBrokenLinkCheck":T,autoAddBaseUrl:C=!0}=n,x=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O}}=(0,o.Z)(),{withBaseUrl:S}=(0,s.C)(),X=(0,r.useContext)(c),E=b||k,F=(0,l.Z)(E),M=null==E?void 0:E.replace("pathname://","");let P=void 0!==M?(G=M,C&&(e=>e.startsWith("/"))(G)?S(G):G):void 0;var G;P&&F&&(P=(0,u.applyTrailingSlash)(P,O));const I=(0,r.useRef)(!1),U=d?i.OL:i.rU,Z=a.Z.canUseIntersectionObserver;let j;(0,r.useEffect)((()=>(!Z&&F&&null!=P&&window.docusaurus.prefetch(P),()=>{Z&&j&&j.disconnect()})),[P,Z,F]);const D=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,N=!P||!F||D;return P&&F&&!D&&!T&&X.collectLink(P),N?r.createElement("a",v(v({href:P},E&&!F&&{target:"_blank",rel:"noopener noreferrer"}),x)):r.createElement(U,v((L=v({},x),p(L,h({onMouseEnter:()=>{I.current||null==P||(window.docusaurus.preload(P),I.current=!0)},innerRef:e=>{var t,n;Z&&e&&F&&(t=e,n=()=>{null!=P&&window.docusaurus.prefetch(P)},j=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.unobserve(t),j.disconnect(),n())}))})),j.observe(t))},to:P||""}))),d&&{isActive:w,activeClassName:y}));var L}},5096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},5026:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return l}});var r=n(1368),i=n(5096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},7271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":(i=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(n,r)}},7023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(7271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(1080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},1080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},601:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return v},contentTitle:function(){return k},metadata:function(){return y},toc:function(){return w},default:function(){return C}});var r=n(3905),i=n(4035),o=n(2985),l=n(1217),a=n(7793),c=n(814),s=n(2083),u=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&f(e,n,t[n]);if(h)for(var n of h(t))g.call(t,n)&&f(e,n,t[n]);return e};const v={id:"installation",title:"Installation"},k=void 0,y={unversionedId:"introduction/installation",id:"introduction/installation",isDocsHomePage:!1,title:"Installation",description:"TouchGFX is distributed as an X-CUBE-TOUCHGFX zip file which has the following components inside:",source:"@site/docs/introduction/installation.mdx",sourceDirName:"introduction",slug:"/introduction/installation",permalink:"/4.13/docs/introduction/installation",version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"What is TouchGFX?",permalink:"/4.13/docs/introduction/what-is-touchgfx"},next:{title:"Getting Started",permalink:"/4.13/docs/introduction/getting-started"}},w=[{value:"Prototyping on STM32 Evaluation kits",id:"prototyping-on-stm32-evaluation-kits",children:[{value:"Installing TouchGFX Designer",id:"installing-touchgfx-designer",children:[]},{value:"Installing STM32CubeProgrammer",id:"installing-stm32cubeprogrammer",children:[]},{value:"Installing STM32 ST-LINK Utility",id:"installing-stm32-st-link-utility",children:[]}]},{value:"Custom Product Development",id:"custom-product-development",children:[{value:"Installing TouchGFX Generator in CubeMX",id:"installing-touchgfx-generator-in-cubemx",children:[]}]}],T={toc:w};function C(e){var t,n=e,{components:u}=n,f=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=b(b({},T),f),d(t,p({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX is distributed as an X-CUBE-TOUCHGFX zip file which has the following components inside:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Designer")," - Build a UI through a Windows-based GUI Builder"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Generator")," - Create a custom TouchGFX HAL through CubeMX"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TouchGFX Engine")," - The TouchGFX C++ framework that drives the UI application")),(0,r.kt)("h2",b({},{id:"prototyping-on-stm32-evaluation-kits"}),"Prototyping on STM32 Evaluation kits"),(0,r.kt)("p",null,"If your intention is to simply try TouchGFX Designer and perhaps do some prototyping on STM32 Evaluation kits, refer to the section ",(0,r.kt)("a",b({parentName:"p"},{href:"#installing-touchgfx-designer"}),"Installing TouchGFX Designer"),".\xa0"),(0,r.kt)("h3",b({},{id:"installing-touchgfx-designer"}),"Installing TouchGFX Designer"),(0,r.kt)("p",null,"Download X-CUBE-TOUCHGFX from the ",(0,r.kt)(l.Z,{to:"https://www.st.com/en/embedded-software/x-cube-touchgfx.html",target:"_blank",mdxType:"Link"},"ST.com official website")," to anywhere on your hard drive and extract it."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/get-software.png",mdxType:"Figure"},"Downloading X-CUBE-TOUCHGFX from st.com"),(0,r.kt)("p",null,"Inside the extracted folder, you will find the TouchGFX .msi installer in the following path:"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{}),"Utilities\\PC_Software\\TouchGFXDesigner\n")),(0,r.kt)("p",null,"Double-clicking the .msi file will bring up the installer. Follow the instructions to complete the installation process."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/designer-installation.png",mdxType:"Figure"},"Installing TouchGFX Designer"),(0,r.kt)(a.Z,{mdxType:"Tip"},"You need the following tools to be able to flash your board directly from within TouchGFX Designer:",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer")),(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stsw-link004.html",target:"_blank",mdxType:"Link"},"STM32 ST-LINK Utility")))),(0,r.kt)("h3",b({},{id:"installing-stm32cubeprogrammer"}),"Installing STM32CubeProgrammer"),(0,r.kt)("p",null,"After downloading STM32CubeProgrammer from ",(0,r.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer download location"),", uncompress the downloaded ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},".zip")," file and launch the ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},".exe")," installer file. Then Follow the instructions to complete the installation process."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/cube-programmer-installer.png",mdxType:"Figure"},"Installing TouchGFX Designer"),(0,r.kt)(c.Z,{mdxType:"Caution"},"In order for the TouchGFX Designer and Makefiles to be able to use STM32CubeProgrammer for flashing target hardware it must be installed at the default install location: ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"C:\\Program Files\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer")),(0,r.kt)("h3",b({},{id:"installing-stm32-st-link-utility"}),"Installing STM32 ST-LINK Utility"),(0,r.kt)("p",null,"After downloading STM32 ST-LINK Utility from ",(0,r.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer download location"),", Simply open the downloaded ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},".exe")," file and follow the instructions to complete the installation process."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/st-link-utility-installer.png",mdxType:"Figure"},"Installing STM32 ST-LINK Utility"),(0,r.kt)(c.Z,{mdxType:"Caution"},"In order for the TouchGFX Designer and Makefiles to be able to use STM32 ST-LINK Utility for flashing target hardware it must be installed at the default install location: ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"C:\\Program Files (x86)\\STMicroelectronics\\STM32 ST-LINK Utility")),(0,r.kt)("h2",b({},{id:"custom-product-development"}),"Custom Product Development"),(0,r.kt)("p",null,"If your intention is to run TouchGFX applications on either ST display kits or your own custom STM32 based platform, refer to the section ",(0,r.kt)("a",b({parentName:"p"},{href:"#installing-touchgfx-generator-in-cubemx"}),"Installing TouchGFX Generator in CubeMX"),"."),(0,r.kt)("h3",b({},{id:"installing-touchgfx-generator-in-cubemx"}),"Installing TouchGFX Generator in CubeMX"),(0,r.kt)("p",null,"To install X-CUBE-TOUCHGFX through ",(0,r.kt)("a",b({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubemx.html"}),"CubeMX"),', start by selecting "Manage Embedded Software Packages" under "Help" (or press ',(0,r.kt)(o.Z,{mdxType:"Shortcut"},"Alt + U"),")."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/manage-packages.png",mdxType:"Figure"},"Help -> Manage embedded software packages"),(0,r.kt)("p",null,'Click "Refresh" to get an updated list of available packages.'),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/refresh.png",mdxType:"Figure"},"Refresh to update available packages"),(0,r.kt)("p",null,'Go to the "STMicroelectronics" tab. Scroll until you find "X-CUBE-TOUCHGFX" and expand the node. Check the checkbox for "TouchGFX Generator" and click "Install Now". This will download the package and bring up the license agreement.'),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/install-now.png",mdxType:"Figure"},"Finding the TouchGFX Generator package"),(0,r.kt)("p",null,'Read and accept the license agreement and click "Finish" to install TouchGFX Generator inside CubeMX.'),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/license-agreement.png",mdxType:"Figure"},"Accepting the license agreement"),(0,r.kt)("p",null,"The X-CUBE-TOUCHGFX distribution is now unpacked to the following path:\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{}),"C:\\Users\\<user>\\STM32Cube\\Repository\\Packs\\STMicroelectronics\\X-CUBE-TOUCHGFX\\4.13.0\n")),(0,r.kt)(i.Z,{imageSource:"/img/introduction/installation/package-location.png",mdxType:"Figure"},"Location of the X-CUBE-TOUCHGFX package"))}C.isMDXComponent=!0}}]);