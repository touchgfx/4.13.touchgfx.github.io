(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9048],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2425:function(e,t,n){"use strict";var i=n(7294);class r extends i.Component{render(){return i.createElement("div",{class:"code-header"},i.createElement("div",null,i.createElement("h5",null,this.props.children)))}}t.Z=r},4035:function(e,t,n){"use strict";var i=n(7294),r=n(5026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,r.Z)(e.imageSource);return t?i.createElement("div",{class:"figure noshadow"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:n,height:a,src:o})),i.createElement("p",null,e.children)):i.createElement("div",{class:"figure"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:n,height:a,src:o})),i.createElement("p",null,e.children))}},9415:function(e,t,n){"use strict";var i=n(7294),r=n(8678);const a=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends i.Component{render(){return i.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},8678:function(e,t,n){"use strict";var i=n(7294);class r extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{class:e},i.createElement("div",{class:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},1217:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var i=n(7294),r=n(3727),a=n(1368),o=n(5096),l=n(4487);const s=(0,i.createContext)({collectLink:()=>{}});var c=n(5026),u=n(7023),h=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&w(e,n,t[n]);if(m)for(var n of m(t))f.call(t,n)&&w(e,n,t[n]);return e};var v=function(e){var t,n=e,{isNavLink:h,to:w,href:v,activeClassName:k,isActive:C,"data-noBrokenLinkCheck":y,autoAddBaseUrl:S=!0}=n,E=((e,t)=>{var n={};for(var i in e)g.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&m)for(var i of m(e))t.indexOf(i)<0&&f.call(e,i)&&(n[i]=e[i]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T}}=(0,a.Z)(),{withBaseUrl:W}=(0,c.C)(),x=(0,i.useContext)(s),N=w||v,M=(0,o.Z)(N),I=null==N?void 0:N.replace("pathname://","");let O=void 0!==I?(P=I,S&&(e=>e.startsWith("/"))(P)?W(P):P):void 0;var P;O&&M&&(O=(0,u.applyTrailingSlash)(O,T));const _=(0,i.useRef)(!1),B=h?r.OL:r.rU,A=l.Z.canUseIntersectionObserver;let j;(0,i.useEffect)((()=>(!A&&M&&null!=O&&window.docusaurus.prefetch(O),()=>{A&&j&&j.disconnect()})),[O,A,M]);const Z=null!==(t=null==O?void 0:O.startsWith("#"))&&void 0!==t&&t,D=!O||!M||Z;return O&&M&&!Z&&!y&&x.collectLink(O),D?i.createElement("a",b(b({href:O},N&&!M&&{target:"_blank",rel:"noopener noreferrer"}),E)):i.createElement(B,b((F=b({},E),d(F,p({onMouseEnter:()=>{_.current||null==O||(window.docusaurus.preload(O),_.current=!0)},innerRef:e=>{var t,n;A&&e&&M&&(t=e,n=()=>{null!=O&&window.docusaurus.prefetch(O)},j=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.unobserve(t),j.disconnect(),n())}))})),j.observe(t))},to:O||""}))),h&&{isActive:C,activeClassName:k}));var F}},5096:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return r}})},5026:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var i=n(1368),r=n(5096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,i)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},7271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),i="/"===n?"/":(r=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));var r;return e.replace(n,i)}},7023:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(7271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return i(r).default}});var a=n(1080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return i(a).default}})},1080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},3042:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return w},metadata:function(){return b},toc:function(){return v},default:function(){return C}});var i=n(3905),r=n(1217),a=n(4035),o=n(9415),l=n(2425),s=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(h)for(var n of h(t))p.call(t,n)&&m(e,n,t[n]);return e};const f={id:"tutorial-04",title:"Tutorial 4: Creating a Scroll Wheel with Custom Behavior"},w=void 0,b={unversionedId:"tutorials/tutorial-04",id:"tutorials/tutorial-04",isDocsHomePage:!1,title:"Tutorial 4: Creating a Scroll Wheel with Custom Behavior",description:"In this tutorial, you will learn how to create and configure the two widgets - Custom Container and Scroll Wheel. A Custom Container is a widget that enables you to create a custom widget by combining multiple other widgets and add specific behavior for the widgets in the Custom Container. The Scroll Wheel is a widget used for creating a scrollable menu, consisting of multiple selectable items. The tutorial will also teach how user code can be created to change the behavior of a widget.",source:"@site/docs/tutorials/tutorial-04.mdx",sourceDirName:"tutorials",slug:"/tutorials/tutorial-04",permalink:"/4.13/docs/tutorials/tutorial-04",version:"current",frontMatter:{id:"tutorial-04",title:"Tutorial 4: Creating a Scroll Wheel with Custom Behavior"},sidebar:"docs",previous:{title:"Tutorial 3: Applications with Multiple Screens",permalink:"/4.13/docs/tutorials/tutorial-03"},next:{title:"Tutorial 5: Creating Custom Triggers and Actions",permalink:"/4.13/docs/tutorials/tutorial-05"}},v=[{value:"Step 1: Creating a Custom Container",id:"step-1-creating-a-custom-container",children:[{value:"Adding Widgets to the Custom Container",id:"adding-widgets-to-the-custom-container",children:[]},{value:"Adding the Custom Container to a Screen",id:"adding-the-custom-container-to-a-screen",children:[]}]},{value:"Step 2: Creating a Scroll Wheel",id:"step-2-creating-a-scroll-wheel",children:[{value:"Creating the Scroll Wheel",id:"creating-the-scroll-wheel",children:[]},{value:"Adding Items to the Scroll Wheel",id:"adding-items-to-the-scroll-wheel",children:[]}]},{value:"Step 3: Adding User Code to Scroll Wheel",id:"step-3-adding-user-code-to-scroll-wheel",children:[{value:"Change Image and Text in MenuElement",id:"change-image-and-text-in-menuelement",children:[]},{value:"Update the Items in the Scroll Wheel",id:"update-the-items-in-the-scroll-wheel",children:[]}]},{value:"Step 4: Adding Custom Behavior to Scroll Wheel",id:"step-4-adding-custom-behavior-to-scroll-wheel",children:[{value:"Add Custom Behavior to MenuElement",id:"add-custom-behavior-to-menuelement",children:[]}]}],k={toc:v};function C(e){var t,s=e,{components:m}=s,f=((e,t)=>{var n={};for(var i in e)d.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&h)for(var i of h(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n})(s,["components"]);return(0,i.kt)("wrapper",(t=g(g({},k),f),c(t,u({components:m,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"In this tutorial, you will learn how to create and configure the two widgets - Custom Container and Scroll Wheel. A Custom Container is a widget that enables you to create a custom widget by combining multiple other widgets and add specific behavior for the widgets in the Custom Container. The Scroll Wheel is a widget used for creating a scrollable menu, consisting of multiple selectable items. The tutorial will also teach how user code can be created to change the behavior of a widget."),(0,i.kt)("p",null,"More information about the Custom Container and Scroll Wheel can be found on the two pages, ",(0,i.kt)("a",g({parentName:"p"},{href:"../development/ui-development/touchgfx-engine-features/custom-containers"}),"Custom Containers")," and ",(0,i.kt)("a",g({parentName:"p"},{href:"../development/ui-development/ui-components/containers/scroll-wheel"}),"ScrollWheel"),"."),(0,i.kt)("p",null,"The graphics for the tutorial can be downloaded from this ",(0,i.kt)("a",{target:"_blank",href:n(1043).Z},"link"),". Unzip the file in the images folder under assets, which for the project used in this tutorial is MyApplication2\\assets\\images."),(0,i.kt)("h2",g({},{id:"step-1-creating-a-custom-container"}),"Step 1: Creating a Custom Container"),(0,i.kt)("p",null,"Similar to step 1 in tutorial 2, start by creating a new project with the TouchGFX Designer. When the new project is ready, change from the screens tab in the TouchGFX Designer to the Custom Container."),(0,i.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-04/selecting-cc.png",mdxType:"Figure"},"Selecting the Custom Container menu"),(0,i.kt)("p",null,"The tab for creating a Custom Container is similar to the Screens tab and creating a new Custom Container is done in the same way as creating a new screen. After a Custom Container is created widgets, except Custom Container, can be added, along with edit the size and name of the Custom Container."),(0,i.kt)("p",null,'In the Custom Container tab, use the blue plus icon to create a new Custom Container and rename it "MenuElement", change the width (W) to 390 and height (H) to 70.'),(0,i.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-04/creating-cc.png",mdxType:"Figure"},"Creating a Custom Container and setting it properties"),(0,i.kt)("h3",g({},{id:"adding-widgets-to-the-custom-container"}),"Adding Widgets to the Custom Container"),(0,i.kt)("p",null,"With Custom Container created and its properties set, widgets can be added to the Custom Container. The Custom Container is going to consist of an image and a text area with a wildcard. The two widgets are inserted in the following way:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",g({parentName:"tr"},{align:null}),"Widget"),(0,i.kt)("th",g({parentName:"tr"},{align:null}),"Properties"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",g({parentName:"tr"},{align:null}),"Image"),(0,i.kt)("td",g({parentName:"tr"},{align:null}),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Name: icon"),(0,i.kt)("li",null,"Image: icon00.png"),(0,i.kt)("li",null,"Location:",(0,i.kt)("ul",null,(0,i.kt)("li",null,"X: 34"),(0,i.kt)("li",null,"Y: 17")))))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",g({parentName:"tr"},{align:null}),"TextArea"),(0,i.kt)("td",g({parentName:"tr"},{align:null}),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Name: text"),(0,i.kt)("li",null,"Location:",(0,i.kt)("ul",null,(0,i.kt)("li",null,"X: 93, Y: 23"))),(0,i.kt)("li",null,"Text:",(0,i.kt)("ul",null,(0,i.kt)("li",null,"Text: Menu Element ","<","value",">"),(0,i.kt)("li",null,"Wildcard 1:",(0,i.kt)("ul",null,(0,i.kt)("li",null,"Initial Value: 00"),(0,i.kt)("li",null,"Buffer size: 3"))),(0,i.kt)("li",null,"Typography: 20px"),(0,i.kt)("li",null,"Alignment: Left"))),(0,i.kt)("li",null,"Appearance:",(0,i.kt)("ul",null,(0,i.kt)("li",null,"Color: #FFFFFFFF")))))))),(0,i.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-04/adding-content-cc.png",mdxType:"Figure"},"Adding content to the Custom Container"),(0,i.kt)("h3",g({},{id:"adding-the-custom-container-to-a-screen"}),"Adding the Custom Container to a Screen"),(0,i.kt)("p",null,'Going back to the Screens tab, it is now possible to select the "MenuElement" in the widget menu under Custom Container. Place a black box as background and add a couple of the created Custom Container on the canvas.'),(0,i.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-04/inserting-cc.png",mdxType:"Figure"},"Inserting the Custom Container as a widget on a screen"),(0,i.kt)("h2",g({},{id:"step-2-creating-a-scroll-wheel"}),"Step 2: Creating a Scroll Wheel"),(0,i.kt)("p",null,'In this step of tutorial 4, we will create a Scroll Wheel by using the Custom Container, "MenuElement", created in step 1. As described in step 1, the Scroll Wheel is used to create a scrollable menu containing multiple selectable items. The items in the wheel are dynamically updated when scrolling and when selecting an item, it is moved into focus.'),(0,i.kt)("p",null,'Adding items to the Scroll Wheel is done by selecting a Custom Container to use as the "Item Template". The concept of "Item Template" works by using the widgets in the Custom Container as the foundation for the items in the Scroll Wheel and use user code to update the widgets in the items at runtime.'),(0,i.kt)("h3",g({},{id:"creating-the-scroll-wheel"}),"Creating the Scroll Wheel"),(0,i.kt)("p",null,'Before creating the Scroll Wheel, remove the Custom Containers on the screen, leaving only the black box as the background. Select the Scroll Wheel located in the widgets tab under section Containers. Create a Scroll Wheel and set the location properties to X = 208, Y = 45 and H = 390 and change the name to "scrollWheel".'),(0,i.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-04/insert-sw.png",mdxType:"Figure"},"Inserting the Scroll Wheel and setting the name and location properties"),(0,i.kt)("h3",g({},{id:"adding-items-to-the-scroll-wheel"}),"Adding Items to the Scroll Wheel"),(0,i.kt)("p",null,'Select "MenuElement" created in step 1 as the "Item Template", which is done with the drop-down list under the Scroll Wheel property "Item Template". The number of items in the Scroll Wheel is also set under "Item Template". Set this to 20 items. Since the Scroll Wheel works by having a selected item in focus, setting where the selected item is positioned, is done by setting "Selected Item Offset" under the property "List Apperance". We want the selected item to be in the middle of the Scroll Wheel and are therefore setting "Selected Item Offset" to 160.'),(0,i.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-04/add-cc-to-sw.png",mdxType:"Figure"},"Adding the Custom Container to the Scroll Wheel and adjusting its properties"),(0,i.kt)("p",null,'To highlight the area of the "scrollWheel", the two pictures background.png, and overlay.png from the .zip file downloaded in step 1 are used and is added to the application as Image widgets. The two images is a background that highlights the area of "scrollWheel" and an overlay which hides the items in "scrollWheel" when the are moved to the edge of "scrollWheel".'),(0,i.kt)("p",null,'The image background.png are placed in X = 205 and Y = 45 and is placed behind "scrollWheel" so the items in "scrollWheel" is drawn op top of the background. The overlay.png is placed in X = 0 and Y = 0 on top of "scrollWheel" meaning that the items are drawn beneath overlay.png thereby hiding the items where overlay.png is not transparent.'),(0,i.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-04/graphics-added.png",mdxType:"Figure"},"Graphics added to the screen with the Scroll Wheel"),(0,i.kt)("p",null,'Since we only have adjusted the static properties for "scrollWheel", logic has not been added to it. Running the application will, therefore, result in a scrollable menu consisting of 20 items that all show the same. In the next step, we will add the logic to the "scrollWheel" with user code which updates the items in the wheel at runtime.'),(0,i.kt)("h2",g({},{id:"step-3-adding-user-code-to-scroll-wheel"}),"Step 3: Adding User Code to Scroll Wheel"),(0,i.kt)("p",null,'With the Scroll Wheel, "scrollWheel", created and configured in the TouchGFX Designer, this step will create the logic, via user code, that updates the items in "scrollWheel", so they display different graphics based on the position of the item in the wheel. This step will, therefore, work with integrating designer generated code with user code. A more detailed description of integrating designer code with user code can be found on the ',(0,i.kt)("a",g({parentName:"p"},{href:"../development/ui-development/software-architecture/code-structure"}),"Code Structure page"),"."),(0,i.kt)("h3",g({},{id:"change-image-and-text-in-menuelement"}),"Change Image and Text in MenuElement"),(0,i.kt)("p",null,'Since the items in the Scroll Wheel are based on the Custom Container "MenuElement", created in step 1, user code for changing the icon and updating the wildcard needs to be added to "MenuElement". When a Custom Container is created in the TouchGFX Designer it generates a .hpp and .cpp file with the same name as the Custom Container which is where the user code should be integrated. The location of the files generated for "MenuElement" in the example application are:'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MyApplication2\\gui\\include\\gui\\containers\\MenuElement.hpp")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MyApplication2\\gui\\src\\containers\\MenuElement.cpp")),(0,i.kt)("p",null,'Enabling the items in "scrollWheel" to change their text and icon is done by adding the function ',(0,i.kt)("inlineCode",{parentName:"p"},"setNumber(int no)"),' to "MenuElement". The function uses the variable ',(0,i.kt)("inlineCode",{parentName:"p"},"no")," to decide which icon the Image widget should show and change the Wildcard in the Text Area widget to the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"no"),"."),(0,i.kt)("p",null,"The declaration and implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"setNumber(int no)")," is done in the ",(0,i.kt)("inlineCode",{parentName:"p"},"MenuElement.hpp")," which is shown below."),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"MenuElement.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{4,15-42}","{4,15-42}":!0}),"#ifndef MENUELEMENT_HPP\n#define MENUELEMENT_HPP\n\n#include <gui_generated/containers/MenuElementBase.hpp>\n#include <BitmapDatabase.hpp>\n\nclass MenuElement : public MenuElementBase\n{\npublic:\n    MenuElement();\n    virtual ~MenuElement() {}\n\n    virtual void initialize();\n\n    void setNumber(int no)\n    {\n        Unicode::itoa(no, textBuffer, TEXT_SIZE, 10);\n        switch (no % 7)\n        {\n        case 0:\n        icon.setBitmap(Bitmap(BITMAP_ICON00_ID));\n            break;\n        case 1:\n        icon.setBitmap(Bitmap(BITMAP_ICON01_ID));\n            break;\n        case 2:\n        icon.setBitmap(Bitmap(BITMAP_ICON02_ID));\n            break;\n        case 3:\n        icon.setBitmap(Bitmap(BITMAP_ICON03_ID));\n            break;\n        case 4:\n        icon.setBitmap(Bitmap(BITMAP_ICON04_ID));\n            break;\n        case 5:\n        icon.setBitmap(Bitmap(BITMAP_ICON05_ID));\n            break;\n        case 6:\n        icon.setBitmap(Bitmap(BITMAP_ICON06_ID));\n            break;\n        }\n    }\nprotected:\n};\n\n#endif // MENUELEMENT_HPP\n\n")),(0,i.kt)("p",null,"With the code added to update the content of the MenuElement, the next thing to do is to add code which updates the items in the Scroll Wheel."),(0,i.kt)("h3",g({},{id:"update-the-items-in-the-scroll-wheel"}),"Update the Items in the Scroll Wheel"),(0,i.kt)("p",null,"When creating a Scroll Wheel, the TouchGFX Designer generates a virtual function which is called each time a new item in the Scroll Wheel becomes visible. Overriding this function in the user code enables the code to interact with the items in the Scroll Wheel."),(0,i.kt)("p",null,"The name of the function is the name of the Scroll Wheel appended with UpdatedItem. For the tutorial, the function is called ",(0,i.kt)("inlineCode",{parentName:"p"},"scrollWheelUpdateItem(MenuElement& item, int16_t itemIndex)"),"."),(0,i.kt)("p",null,"The parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"itemIndex")," is an index value informing which item is currently being updated and ",(0,i.kt)("inlineCode",{parentName:"p"},"item")," is a reference to an instance of MenuElement which is currently visible in the Scroll Wheel. With ",(0,i.kt)("inlineCode",{parentName:"p"},"itemIndex")," informing which item is being updated, ",(0,i.kt)("inlineCode",{parentName:"p"},"setNumber()")," is called for item which will change the content of the item being updated based on the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"itemIndex"),". The code used for updating the Scroll Wheel items is shown below."),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{14-17}","{14-17}":!0}),"#ifndef SCREEN1VIEW_HPP\n#define SCREEN1VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void scrollWheelUpdateItem(MenuElement& item, int16_t itemIndex)\n    {\n        item.setNumber(itemIndex);\n    }\nprotected:\n};\n\n#endif // SCREEN1VIEW_HPP\n")),(0,i.kt)("p",null,"Running the simulator for the application now shows that the text for the items contains the value of their index and the icons change based on which item is showing. The images below shows an example of the simulator running with the code implemented."),(0,i.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-04/running-sim.png",mdxType:"Figure"},"Running the simulator"),(0,i.kt)("h2",g({},{id:"step-4-adding-custom-behavior-to-scroll-wheel"}),"Step 4: Adding Custom Behavior to Scroll Wheel"),(0,i.kt)("p",null,"In the last step of tutorial 4, we will add custom behavior for the Scroll Wheel, by making it move in a circular pattern when scrolling through the items, thereby moving in a pattern similar to a dial."),(0,i.kt)("h3",g({},{id:"add-custom-behavior-to-menuelement"}),"Add Custom Behavior to MenuElement"),(0,i.kt)("p",null,"Getting the Scroll Wheel to move in a dial pattern, is done by shifting the horizontal position of the Image and Text widget for each item that is visible in the Scroll Wheel. To do this the function ",(0,i.kt)("inlineCode",{parentName:"p"},"setY()"),' for "MenuElement" is overridden in ',(0,i.kt)("inlineCode",{parentName:"p"},"MenuElement.hpp"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"setY()")," function is called for a Custom Container each time it is moved in the vertical direction and is used for redrawing the Custom Container in its new position. By overriding ",(0,i.kt)("inlineCode",{parentName:"p"},"setY()"),", we are able to rearrange the Image and Text widget each time the Scroll Wheel is moved. The image below describes how to implement the new ",(0,i.kt)("inlineCode",{parentName:"p"},"setY()")," function and shift the the two widgets in ",(0,i.kt)("inlineCode",{parentName:"p"},"MenuElement.hpp"),". Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"math.h")," needs to be included."),(0,i.kt)(l.Z,{mdxType:"CodeHeader"},"MenuElement.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",g({parentName:"pre"},{className:"language-cpp",metastring:"{6,16-39}","{6,16-39}":!0}),"#ifndef MENUELEMENT_HPP\n#define MENUELEMENT_HPP\n\n#include <gui_generated/containers/MenuElementBase.hpp>\n#include <BitmapDatabase.hpp>\n#include <math.h>\n\nclass MenuElement : public MenuElementBase\n{\npublic:\n    MenuElement();\n    virtual ~MenuElement() {}\n\n    virtual void initialize();\n\n    //Adjusts the position of the text and the icon, based in the calculated offset(x)\n    void offset(int16_t x)\n    {\n        icon.moveTo(30 + x, icon.getY());\n        text.moveTo(80 + x, text.getY());\n    }\n\n    //The new declaration and implementation of the setY() function\n    virtual void setY(int16_t y)\n    {\n        //set Y as normal\n        MenuElementBase::setY(y);\n\n        const int circleRadius = 250;\n\n        //center around middle of background\n        y = y + getHeight() / 2 - 390 /2;\n\n        //calculate x\n        float x_f = circleRadius - sqrtf((float)((circleRadius * circleRadius) - (y * y)));\n        int16_t x = (int16_t)(x_f + 0.5f);\n\n        offset(x);\n    }\n\n    ...\n")),(0,i.kt)("p",null,"With the new ",(0,i.kt)("inlineCode",{parentName:"p"},"setY()")," function implemented, running the simulator shows that the Scroll Wheel is now moving in a dial pattern aligning with the curve from the overlay."),(0,i.kt)(a.Z,{imageSource:"/img/tutorials/tutorial-04/running-sim-02.png",mdxType:"Figure"},"Running the simulator"),(0,i.kt)("p",null,"This concludes tutorial 4."),(0,i.kt)(o.Z,{mdxType:"FurtherReading"},"To learn more about the concepts that have been used throughout the tutorial the chapters below discuss some concepts that you have worked with:",(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)(r.Z,{to:"../development/ui-development/ui-components/containers/scroll-wheel",mdxType:"Link"},"The ScrollWheel page")," describes how to create and configure the Scroll Wheel in TouchGFX Designer and how to create the logic in user code."),(0,i.kt)("li",null,(0,i.kt)(r.Z,{to:"../development/ui-development/touchgfx-engine-features/custom-containers",mdxType:"Link"},"The Custom Containers page")," discusses the Custom Container concept and usage."))))}C.isMDXComponent=!0},1043:function(e,t,n){"use strict";t.Z=n.p+"assets/files/touchgfx-tutorial-04-fea43cce73bad37b8df3f2deaa9f7bd1.zip"}}]);