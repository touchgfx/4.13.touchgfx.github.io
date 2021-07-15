(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4861],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2425:function(e,t,n){"use strict";var r=n(7294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},9415:function(e,t,n){"use strict";var r=n(7294),a=n(8678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=i},8678:function(e,t,n){"use strict";var r=n(7294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},2083:function(e,t,n){"use strict";var r=n(7294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},204:function(e,t,n){"use strict";var r=n(7294);class a extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=a},1217:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(7294),a=n(3727),o=n(1368),i=n(5096),s=n(4487);const l=(0,r.createContext)({collectLink:()=>{}});var c=n(5026),u=n(7023),h=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&y(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&y(e,n,t[n]);return e};var w=function(e){var t,n=e,{isNavLink:h,to:y,href:w,activeClassName:v,isActive:b,"data-noBrokenLinkCheck":T,autoAddBaseUrl:x=!0}=n,I=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O}}=(0,o.Z)(),{withBaseUrl:M}=(0,c.C)(),C=(0,r.useContext)(l),P=y||w,U=(0,i.Z)(P),S=null==P?void 0:P.replace("pathname://","");let E=void 0!==S?(N=S,x&&(e=>e.startsWith("/"))(N)?M(N):N):void 0;var N;E&&U&&(E=(0,u.applyTrailingSlash)(E,O));const G=(0,r.useRef)(!1),Z=h?a.OL:a.rU,j=s.Z.canUseIntersectionObserver;let F;(0,r.useEffect)((()=>(!j&&U&&null!=E&&window.docusaurus.prefetch(E),()=>{j&&F&&F.disconnect()})),[E,j,U]);const D=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,_=!E||!U||D;return E&&U&&!D&&!T&&C.collectLink(E),_?r.createElement("a",k(k({href:E},P&&!U&&{target:"_blank",rel:"noopener noreferrer"}),I)):r.createElement(Z,k((L=k({},I),d(L,p({onMouseEnter:()=>{G.current||null==E||(window.docusaurus.preload(E),G.current=!0)},innerRef:e=>{var t,n;j&&e&&U&&(t=e,n=()=>{null!=E&&window.docusaurus.prefetch(E)},F=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(F.unobserve(t),F.disconnect(),n())}))})),F.observe(t))},to:E||""}))),h&&{isActive:b,activeClassName:v}));var L}},5096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},5026:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(1368),a=n(5096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},7271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":(a=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(n,r)}},7023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(7271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(1080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},1080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},3533:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return y},contentTitle:function(){return k},metadata:function(){return w},toc:function(){return v},default:function(){return T}});var r=n(3905),a=n(1217),o=n(9415),i=n(204),s=n(2083),l=n(2425),c=Object.defineProperty,u=Object.defineProperties,h=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&f(e,n,t[n]);if(d)for(var n of d(t))m.call(t,n)&&f(e,n,t[n]);return e};const y={id:"backend-communication",title:"Backend Communication"},k=void 0,w={unversionedId:"development/ui-development/touchgfx-engine-features/backend-communication",id:"development/ui-development/touchgfx-engine-features/backend-communication",isDocsHomePage:!1,title:"Backend Communication",description:"In most applications, the UI needs to be connected to the rest of your system somehow, and send and receive data. This could be interfacing with hardware peripherals (sensor data, A/D conversions, serial communication, ...) or interfacing with other software modules.",source:"@site/docs/development/ui-development/touchgfx-engine-features/backend-communication.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/backend-communication",permalink:"/4.13/docs/development/ui-development/touchgfx-engine-features/backend-communication",version:"current",frontMatter:{id:"backend-communication",title:"Backend Communication"},sidebar:"docs",previous:{title:"Binary Translations",permalink:"/4.13/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"},next:{title:"Mixins",permalink:"/4.13/docs/development/ui-development/touchgfx-engine-features/mixins"}},v=[{value:"The Model Class",id:"the-model-class",children:[]},{value:"System Interfacing",id:"system-interfacing",children:[{value:"Sampling from GUI Task",id:"sampling-from-gui-task",children:[]},{value:"Sampling from Secondary Task",id:"sampling-from-secondary-task",children:[]}]},{value:"Propagating Data to UI",id:"propagating-data-to-ui",children:[]},{value:"Transmitting Data from UI to Surrounding System",id:"transmitting-data-from-ui-to-surrounding-system",children:[]},{value:"Examples",id:"examples",children:[{value:"From GUI Task",id:"from-gui-task",children:[]},{value:"From Other Task",id:"from-other-task",children:[]},{value:"From Multiple tasks",id:"from-multiple-tasks",children:[]},{value:"From Task and External Interrupt Line",id:"from-task-and-external-interrupt-line",children:[]}]}],b={toc:v};function T(e){var t,n=e,{components:c}=n,f=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},b),f),u(t,h({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"In most applications, the UI needs to be connected to the rest of your system somehow, and send and receive data. This could be interfacing with hardware peripherals (sensor data, A/D conversions, serial communication, ...) or interfacing with other software modules."),(0,r.kt)("p",null,"This article describes the recommended solutions for implementing this connection."),(0,r.kt)("p",null,"The first method is a ",(0,r.kt)("a",g({parentName:"p"},{href:"#sampling-from-gui-task"}),'"quick-and-dirty"')," approach, primarily intended for prototyping, whereas the ",(0,r.kt)("a",g({parentName:"p"},{href:"#sampling-from-secondary-task"}),"second method")," is an architecturally sound way of properly connecting the UI with the remaining components in a real world application."),(0,r.kt)("p",null,"In the end of this article, we link to examples of using both methods."),(0,r.kt)("h2",g({},{id:"the-model-class"}),"The Model Class"),(0,r.kt)("p",null,"All TouchGFX applications have a Model class, which apart from storing UI state information is also intended to function as the interface to your surrounding system. By this we are referring to both hardware peripherals but also communicating with other OS tasks in your system. It is normally not a good design to access other software modules or hardware in the individual View classes."),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"To learn more about the Model: ",(0,r.kt)(a.Z,{to:"../software-architecture/model-view-presenter-design-pattern",mdxType:"Link"},"MVP pattern")),(0,r.kt)("p",null,"The Model class is well suited for placing any such interface code because:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The Model class has a ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"tick()")," function which is automatically called every frame and can be implemented to look for and react to events from other sub-modules."),(0,r.kt)("li",{parentName:"ol"},"The Model class has a pointer to your currently active Presenter, in order to be able to notify the UI of incoming events.")),(0,r.kt)("h2",g({},{id:"system-interfacing"}),"System Interfacing"),(0,r.kt)("p",null,"There are two ways of interfacing with the surrounding system, either by sampling directly from the GUI Task, or by sampling from a Secondary Task"),(0,r.kt)("h3",g({},{id:"sampling-from-gui-task"}),"Sampling from GUI Task"),(0,r.kt)("p",null,"The best way of interfacing with surrounding system depends on how frequently you need to sample, how time consuming it is and how time critical it is."),(0,r.kt)("p",null,"If your requirements in those regards are lenient, the simplest approach is to just sample the surrounding system directly in the ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"Model::tick")," function."),(0,r.kt)("p",null,"If the sampling occurs less frequently than your frame rate (typically around 60Hz), you can just add a counter and only do the sampling every Nth tick. When done this way, your sampling operation must be somewhat fast (typically 1ms or less), otherwise your frame rate will begin to suffer, since the sampling is done in the context of the GUI task and will delay drawing the frame."),(0,r.kt)("h3",g({},{id:"sampling-from-secondary-task"}),"Sampling from Secondary Task"),(0,r.kt)("p",null,"Alternatively, if it is not desirable to place the interaction with the surrounding system directly within the context of the GUI task, you can create a new OS task responsible for doing the sampling."),(0,r.kt)("p",null,"You can configure this task to run at the exact time intervals you need for your specific scenario. Also depending on your needs this new task can have a lower or higher priority than the GUI task."),(0,r.kt)("p",null,"If it has a higher priority, then you are guaranteed that it runs at exactly the times you have specified, regardless of what the GUI task is doing. This has the drawback that if it is a CPU consuming process it might impact the frame rate of the UI."),(0,r.kt)("p",null,"If on the other hand the sampling is not time critical, you can assign the task a lower priority than the GUI task, such that the UI frame rate is never affected by the sampling of the surrounding system. The GUI task will sleep a lot while rendering (e.g. when waiting for a DMA-based pixel transfer to complete) so lower priority tasks will be allowed to run quite frequently and this is therefore sufficient for the vast majority of applications."),(0,r.kt)("p",null,"If you use the secondary task approach, we recommend that you take advantage of the inter-task messaging system that is provided by your RTOS. Most, if not all, RTOSes have a queue/mail mechanism which allows you to send data (typically user-defined C structs, byte arrays or simple integers) from one task to another. In order to communicate new data to the GUI task, setup a mailbox or message queue for the UI task, and send the data to the GUI task using this messaging system. You can then ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"Model::tick")," poll the mailbox of the GUI task to check if any new data has arrived. In case, read the data and update the UI accordingly."),(0,r.kt)("h2",g({},{id:"propagating-data-to-ui"}),"Propagating Data to UI"),(0,r.kt)("p",null,"Regardless of whether you use ",(0,r.kt)("a",g({parentName:"p"},{href:"#sampling-from-gui-task"}),"Sampling from GUI Task")," or ",(0,r.kt)("a",g({parentName:"p"},{href:"#sampling-from-secondary-task"}),"Sampling from Secondary Task"),", the ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"Model::tick")," function is the place where the GUI Task becomes aware of the new data to be shown in the UI. Apart from acting as an interface to your surrounding system, recall from earlier that the Model class is also responsible for holding state data, so there might be some state variables that needs to be updated too."),(0,r.kt)("p",null,"Let us consider a simple example where a temperature sensor is attached to the system, and that the current temperature is to be shown in the UI. In preparation, we will augment the Model class to support this:"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"Model.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"class Model\n{\npublic:\n  // Function that allow your Presenters to read current temperature.\n  int getCurrentTemperature() const { return currentTemperature; }\n\n  // Called automatically by framework every tick.\n  void tick();\n  ...\nprivate:\n  // Variable storing last received temperature;\n  int currentTemperature;\n  ...\n};\n")),(0,r.kt)("p",null,"With the above, your ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"Presenters")," are able to ask the model about the current temperature, allowing a Presenter to set this value in the UI (the View) when entering a screen that displays the temperature. What we need to do now is to be able to update the UI again when new temperature information is received. To do this we take advantage of the fact that the Model has a pointer to your currently active Presenter. The type of this pointer is an interface (",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"ModelListener"),") which you can modify to reflect the application-specific events that are appropriate:"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"ModelListener.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"class ModelListener\n{\npublic:\n  // Call this function to notify that temperature has changed.\n  // Per default, use an empty implementation so that only those\n  // Presenters interested in this specific event need to\n  // override this function.\n  virtual void notifyTemperatureChanged(int newTemperature) {}\n};\n")),(0,r.kt)("p",null,'Now that we have this interface hooked up, the remaining this is to do the actual sampling of incoming "',(0,r.kt)(i.Z,{mdxType:"InlineNote"},"new temperature"),'" events ',(0,r.kt)(s.Z,{mdxType:"InlineCode"},"Model::tick")),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"Model.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),'void Model::tick()\n{\n  // Pseudo-code for sampling data\n  if (OS_Poll(GuiTaskMBox))\n  {\n    // Here we assume that you have defined a "Message" struct containing type and data,\n    // along with some event definitions.\n    struct Message msg = OS_Read(GuiTaskMBox);\n    if (msg.eventType == EVT_TEMP_CHANGED)\n    {\n       // We received information that temperature has changed.\n       // First, update Model state variable\n       currentTemperature = msg.data;\n\n      // Second, notify the currently active Presenter that temperature has changed.\n      // The modelListener pointer points to the currently active Presenter.\n      if (modelListener != 0)\n      {\n        modelListener->notifyTemperatureChanged(currentTemperature);\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"The approach above ensures two things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"currentTemperature")," variable is always up-to-date so that your Presenter can at any time obtain the current temperature."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"Presenter")," is immediately notified of temperature changes and can take appropriate action.")),(0,r.kt)("p",null,"One advantage of the MVP pattern is that you achieve a separated handling of notifications depending on what screen you are currently on. Assume for instance that a temperature changed event occurs while displaying some kind of settings menu ",(0,r.kt)(i.Z,{mdxType:"InlineNote"},"(e.g. MainMenuPresenter/MainMenuView is active)")," where the current temperature is of no relevance."),(0,r.kt)("p",null,"Since the ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"notifyTemperatureChanged")," function has a default empty implementation, this notification is simply disregarded by the ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"MainMenuPresenter"),". On the other hand, if you have a ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"TemperatureControlPresenter")," you can in this Presenter override the ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"notifyTemperatureChanged")," function and inform the View that it should display an updated temperature:"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"TemperatureControlPresenter.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"class TemperatureControlPresenter : public ModelListener\n{\npublic:\n  // override the empty function.\n  virtual void notifyTemperatureChanged(int newTemperature) {\n    view.setTemp(newTemperature);\n  }\n};\n")),(0,r.kt)("p",null,"The View class ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"TemperatureControlView"),", must ofcourse implement the ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"setTemp")," method."),(0,r.kt)("h2",g({},{id:"transmitting-data-from-ui-to-surrounding-system"}),"Transmitting Data from UI to Surrounding System"),(0,r.kt)("p",null,"The reverse direction where data/events are transferred from the UI to the surrounding system, is done through the Model in much the same way. Continuing the example from before if we need to add the ability to configure a new target temperature, we would add the following to the Model:"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"Model.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-cpp"}),"void setNewTargetTemperature(int newTargetTemp)\n{\n  // Pseudo-code for sending an event to a task responsible for controlling temperature.\n  struct Message msg;\n  msg.eventType = EVT_SET_TARGET_TEMP;\n  msg.data = newTargetTemp;\n  OS_Send(SystemTaskMBox, &msg);\n}\n")),(0,r.kt)("p",null,"In case the user sets a new target temperature in the UI, the View can inform the Presenter which holds a pointer to the Model object and is therefore able to call the ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"setNewTargetTemperature")," function."),(0,r.kt)("h2",g({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"The following examples are full demos configured for specific demo boards, however much of the code demonstrated can be reused for other demo boards and custom hardware."),(0,r.kt)("h3",g({},{id:"from-gui-task"}),"From GUI Task"),(0,r.kt)("p",null,(0,r.kt)("a",g({parentName:"p"},{href:"http://sw-center.st.com/touchgfx/TouchGFX/knowledgebase/PoolDemoHwInt.4.9.3.zip"}),"A working example")," for STM32F746 showing how to sample a button and controlling a LED directly in the Model class. The example uses the MVP architecture to transfer values and events between the two views and the Model class. The Model class samples a button and updates the LED to match the state of the application."),(0,r.kt)("p",null,(0,r.kt)("a",g({parentName:"p"},{href:"http://sw-center.st.com/touchgfx/TouchGFX/knowledgebase/PoolDemoHwInt429.4.9.3.zip"}),"A working example")," for STM32F429 showing how to sample a button in the Model class. The example uses the MVP architecture to transfer the button event to the View."),(0,r.kt)("h3",g({},{id:"from-other-task"}),"From Other Task"),(0,r.kt)("p",null,(0,r.kt)("a",g({parentName:"p"},{href:"http://sw-center.st.com/touchgfx/TouchGFX/knowledgebase/PoolDemoHwInt469Eval.4.9.3.zip"}),"A working example")," for STM32F469 showing how to sample an analog input in separate thread. The example uses the MVP architecture to transfer the analog value to the View."),(0,r.kt)("p",null,(0,r.kt)("a",g({parentName:"p"},{href:"http://sw-center.st.com/touchgfx/TouchGFX/knowledgebase/c_task_condenser_example.4.9.3.zip"}),"A working example")," showing intertask communication and propagation to and from the UI has been implemented. Use this as inspiration for your own setup. The example communicates between the backend system implemented in C code and the C++ TouchGFX GUI. The example runs on the STM32F746G-DISCO board on top of FreeRTOS."),(0,r.kt)("h3",g({},{id:"from-multiple-tasks"}),"From Multiple tasks"),(0,r.kt)("p",null,(0,r.kt)("a",g({parentName:"p"},{href:"http://sw-center.st.com/touchgfx/TouchGFX/knowledgebase/hw_integration_tasks_gpio.4.9.3.zip"}),"This working example"),' was demonstrated at the TouchGFX webinar "Integration with your hardware" from the 28th of May 2018.'),(0,r.kt)("p",null,"The application was designed for the STM32F769-DISCO board and interacts with an LED and the USER BUTTON to show how to integrate both C code and hardware peripherals into your TouchGFX application."),(0,r.kt)("p",null,"The application configures the button in GPIO mode. Behavior is to sample the state of the button in btntask.c and pass a message through the GUI message queue if the button is pressed down. This allows us to advance the animation in the application by keeping the button pressed."),(0,r.kt)("p",null,"The application uses three FreeRTOS tasks. One for the GUI, one for each peripheral (LED and USER Button)."),(0,r.kt)("h3",g({},{id:"from-task-and-external-interrupt-line"}),"From Task and External Interrupt Line"),(0,r.kt)("p",null,(0,r.kt)("a",g({parentName:"p"},{href:"http://sw-center.st.com/touchgfx/TouchGFX/knowledgebase/hw_integration_tasks_exti.4.9.3.zip"}),"This working example"),' was demonstrated at the TouchGFX webinar "Integration with your hardware" from the 28th of May 2018.'),(0,r.kt)("p",null,"The application was designed for the STM32F769-DISCO board and interacts with an LED and the USER BUTTON to show how to integrate both C code and hardware peripherals into your TouchGFX application."),(0,r.kt)("p",null,"This application configures the button in EXTI mode (external interrupt line 0). Behavior is to receive an interrupt when the button is pressed down after which the interrupt is cleared. This does not allow the same behavior as in GPIO, but instead we'll be single stepping the animation because a message is only sent through the gui message queue whenever an interrupt is received."),(0,r.kt)("p",null,"The application uses two FreeRTOS tasks. One for the GUI, one for the LED. (The Button task from ",(0,r.kt)("a",g({parentName:"p"},{href:"#from-multiple-tasks"}),"Multiple tasks demo")," remains active in this application to exemplify that the peripheral interaction code has been moved into an interrupt handler)."))}T.isMDXComponent=!0}}]);