(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9531],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var a=n(67294);class o extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){"use strict";var a=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,r=(0,o.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:r,target:"_blank"},a.createElement("img",{width:n,height:i,src:r})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:r,target:"_blank"},a.createElement("img",{width:n,height:i,src:r})),a.createElement("p",null,e.children))}},35096:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return o}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return r}});var a=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(a)return t+n;const r=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+r:r}(t,e,n,a)}}function r(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},14679:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return f},metadata:function(){return g},toc:function(){return b},default:function(){return k}});var a=n(3905),o=n(44035),i=n(22425),r=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&u(e,n,t[n]);return e};const m={id:"using-non-memory-mapped-flash",title:"Using Non-Memory Mapped Flash for storing images"},f=void 0,g={unversionedId:"development/ui-development/scenarios/using-non-memory-mapped-flash",id:"development/ui-development/scenarios/using-non-memory-mapped-flash",isDocsHomePage:!1,title:"Using Non-Memory Mapped Flash for storing images",description:"In this section we will discuss how to link all your images to a",source:"@site/docs/development/ui-development/scenarios/using-non-memory-mapped-flash.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/using-non-memory-mapped-flash",permalink:"/4.13/docs/development/ui-development/scenarios/using-non-memory-mapped-flash",version:"current",frontMatter:{id:"using-non-memory-mapped-flash",title:"Using Non-Memory Mapped Flash for storing images"},sidebar:"docs",previous:{title:"Creating Dynamic L8 Images",permalink:"/4.13/docs/development/ui-development/scenarios/creating-dynamic-l8-images"},next:{title:"Updating to a new TouchGFX Version",permalink:"/4.13/docs/miscellaneous/updating-to-a-new-touchgfx-version"}},b=[{value:"Copying bitmap data from flash to cache",id:"copying-bitmap-data-from-flash-to-cache",children:[]},{value:"The BitmapDatabase table",id:"the-bitmapdatabase-table",children:[]},{value:"Linker script modifications",id:"linker-script-modifications",children:[]},{value:"Modifying the BlockCopy function",id:"modifying-the-blockcopy-function",children:[]},{value:"Linking images to RAM",id:"linking-images-to-ram",children:[]}],y={toc:b};function k(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},y),u),s(t,l({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"In this section we will discuss how to link all your images to a\nbinary file that you can put in a non-memory mapped flash and how to\nuse that file at runtime together with the bitmap cache.\nTouchGFX cannot draw bitmaps that are stored in non-memory mapped\nflash, but by caching the bitmaps in RAM we can make the bitmaps\nuseable in the application."),(0,a.kt)("p",null,"See the article ",(0,a.kt)("a",h({parentName:"p"},{href:"../touchgfx-engine-features/caching-bitmaps"}),"Caching Bitmaps"),"\nfor a general discussion on the bitmap cache."),(0,a.kt)("p",null,"In this article we assume that you have setup a bitmap cache, and\nthat you want to store your bitmaps in non-memory mapped flash. This\ncan be e.g. USB storage, NAND flash etc."),(0,a.kt)("p",null,"The goal is to link the images to a specific address, copy the images\nto a file, and help TouchGFX to copy from the file to the cache."),(0,a.kt)("h3",h({},{id:"copying-bitmap-data-from-flash-to-cache"}),"Copying bitmap data from flash to cache"),(0,a.kt)("p",null,"Recall that when you cache a bitmap, TouchGFX copies the pixels from\nthe original location to the bitmap cache."),(0,a.kt)("p",null,"This copying is done by calling this method from the HAL class:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"HAL.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"bool HAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);\n")),(0,a.kt)("p",null,"If your bitmaps are stored in normal addressable flash (like internal\nflash or memory mapped external flash), then the normal blockCopy\nfunction provided in the TouchGFX library is fine, and you do not need\nto do anything."),(0,a.kt)("p",null,"On the other hand, if your bitmaps is stored in storage that is not\naddressable, e.g. a filesystem, then the normal implementation is not\nsufficient and you need to provide an updated version that is able to\nread from your specific flash storage."),(0,a.kt)("p",null,"But first we need to make sure that our bitmaps is linked to a fixed\naddress."),(0,a.kt)("h2",h({},{id:"the-bitmapdatabase-table"}),"The BitmapDatabase table"),(0,a.kt)("p",null,"All bitmaps in TouchGFX is generated to .cpp files in the folder\ngenerated/images/src. Here the bitmaps are represented as byte\narrays."),(0,a.kt)("p",null,"These arrays are compiled by the C++ compiler as any other\nsource code file and are linked into the application."),(0,a.kt)("p",null,"Here is a screenshot of a simple application with a Button and a\nTextureMapper showing a rotating logo:"),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/scenarios/using-non-memory-mapped-flash/screen-shot.png",mdxType:"Figure"},"Button and TextureMapper"),(0,a.kt)("p",null,"This application uses 3 images: Button_Pressed, Button_Released, and Logo."),(0,a.kt)("p",null,"These 3 bitmaps are converted to .cpp files and linked in as part of\nthe application. The images are referenced in a table called the\nbitmap_database. This table is located in the file\nBitmapDatabase.cpp. Here is the table from the above example (some details removed):"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"BitmapDatabase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),"extern const unsigned char _blue_buttons_round_edge_small[];\nextern const unsigned char _blue_buttons_round_edge_small_pressed[];\nextern const unsigned char _blue_logo_touchgfx_logo[];\n\nconst touchgfx::Bitmap::BitmapData bitmap_database[] =\n{\n    { _blue_buttons_round_edge_small, ... },\n    { _blue_buttons_round_edge_small_pressed, ... },\n    { _blue_logo_touchgfx_logo, ... }\n};\n\n")),(0,a.kt)("p",null,"The arrays declared first are the arrays containing the pixels of the\nindividual bitmaps. These arrays are defined in other .cpp files. The\nbitmap_database array is holding the addresses of these\narrays. TouchGFX uses this array to find the address of the pixels of\na bitmap."),(0,a.kt)("p",null,"When the programmer requests a bitmap to be cached, TouchGFX finds the\naddress of the bitmap in flash (in the bitmap_database array) and\ncopies data from here."),(0,a.kt)("h2",h({},{id:"linker-script-modifications"}),"Linker script modifications"),(0,a.kt)("p",null,"The linker selects an address for the bitmaps. This selection is based\non the section the bitmaps are placed in. All bitmaps in TouchGFX is\nby default put into the ",(0,a.kt)("strong",{parentName:"p"},"ExtFlashSection"),"."),(0,a.kt)("p",null,"The standard linker scripts (here for GCC) puts this section into\nflash together with other read-only data."),(0,a.kt)("p",null,"In this example we will put the image data in the ExtFlashSection at\naddress ",(0,a.kt)("strong",{parentName:"p"},"0x24000000"),". You can select any address that is otherwise\nunused (not part of the code or data address space)."),(0,a.kt)("p",null,"First we define a new memory area (USB-flash at address 0x24000000),\nin addition to the normal internal FLASH and RAM areas:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"STM32F746.ld"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{}),"MEMORY\n{\n  RAM (xrw)      : ORIGIN = 0x20000000, LENGTH = 320K\n  FLASH (rx)     : ORIGIN = 0x08000000, LENGTH = 1024K\n  USB(r)         : ORIGIN = 0x24000000, LENGTH = 1M\n}\n")),(0,a.kt)("p",null,"Then we instruct the linker to put the ExtFlashSection in the USB area:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"STM32F746.ld"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{}),"ExtFlashSection :\n{\n   *(ExtFlashSection ExtFlashSection.*)\n} >USB\n")),(0,a.kt)("p",null,"After linking we can check the addresses of the bitmaps by inspecting the map file (application.map). Here is the relevant part:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"application.map"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{}),"ExtFlashSection\n                0x24000000    0x23ec0\n *(ExtFlashSection ExtFlashSection.*)\n ExtFlashSection\n                0x24000000    0x10000 TouchGFX/build/.../Blue_Logo_touchgfx_logo.o\n                0x24000000                _blue_logo_touchgfx_logo\n ExtFlashSection\n                0x24010000     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small.o\n                0x24010000                _blue_buttons_round_edge_small\n ExtFlashSection\n                0x24019f60     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small_pressed.o\n                0x24019f60                _blue_buttons_round_edge_small_pressed\n")),(0,a.kt)("p",null,"We can see here that the total size of the images is 0x23ec0 = 147.136\nbytes. The 3 arrays holding the bitmaps are located sequentially from\naddress 0x24000000."),(0,a.kt)("p",null,"Let's now assume the you want the bitmap data to go to a SD-card. We can extract the binary data for the bitmaps from the .elf file with a simple objcopy command:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{}),"$ arm-none-eabi-objcopy.exe --dump-section ExtFlashSection=images.bin TouchGFX/build/bin/target.elf\n$ ls -l images.bin\n-rw-r--r-- 1 christef Administrators 147136 Feb 20 11:56 images.bin\n")),(0,a.kt)("p",null,"This gives us a file (images.bin) containing the image byte arrays\nonly. This file can be copied to an USB flash, an SD-card, or\neven programmed to a flash chip."),(0,a.kt)("p",null,"The idea is now that when TouchGFX asks for data above address\n0x24000000 we take the data from the images.bin file on the SD-card."),(0,a.kt)("h2",h({},{id:"modifying-the-blockcopy-function"}),"Modifying the BlockCopy function"),(0,a.kt)("p",null,"Recall that when you cache a bitmap to RAM TouchGFX calls HAL::BlockCopy to get the data."),(0,a.kt)("p",null,"To get this linked to the data on your SD-card we can implement a new\nBlockCopy in your specific HAL class. Here we assume the class is\ncalled TouchGFXHAL (as generated by the TouchGFX Generator):"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFXHal.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"class TouchGFXHAL : public TouchGFXGeneratedHAL\n{\npublic:\n    ...\n    virtual bool blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);\n}\n")),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFXHal.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"// This function is called whenever a bitmap is cached. Must copy a number of bytes from the (non-memory-mapped) source\n// to the cache.\nbool TouchGFXHAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes)\n{\n  // If requested data is located within the memory block we have assigned for ExtFlashSection,\n  // provide an implementation for data copying.\n  if (src >= 0x24000000 && src < 0x24100000)\n  {\n    void* dataOffset = src - 0x24000000;\n    // In this example we assume graphics is placed in SD card, and that we have an appropriate function\n    // for copying data from there.\n    sdcard_read(dest, dataOffset, numBytes);\n    return true;\n  }\n  else\n  {\n    // For all other addresses, just use the default implementation.\n    // This is important, as blockCopy is also used for other things in the core framework.\n    return HAL::blockCopy(dest, src, numBytes);\n  }\n}\n")),(0,a.kt)("p",null,"Now you can start caching bitmaps from the SD-card."),(0,a.kt)("p",null,"If TouchGFX tries to draw a bitmap that is not cached it will try to\nread the pixels from the address found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"bitmap_database"),"\ntable. This address will be in the range 0x24000000 - 0x24100000 and\nthe read will result in an exception."),(0,a.kt)("h2",h({},{id:"linking-images-to-ram"}),"Linking images to RAM"),(0,a.kt)("p",null,"If your available RAM is big enough to hold all the images (in the\nabove example that is more than 147.136 bytes) then you do not need to\nuse the bitmap cache to copy the images."),(0,a.kt)("p",null,"The strategy is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select a fixed address and range in RAM for the images"),(0,a.kt)("li",{parentName:"ul"},"Remove that range from the RAM area in the linker script"),(0,a.kt)("li",{parentName:"ul"},"Create a new area IMAGES with the selected address and size"),(0,a.kt)("li",{parentName:"ul"},"Place the ExtFlashSection in IMAGES area"),(0,a.kt)("li",{parentName:"ul"},"Link the application and check the .map file"),(0,a.kt)("li",{parentName:"ul"},"Create the images.bin file from the application.elf"),(0,a.kt)("li",{parentName:"ul"},"Before TouchGFX is started, copy the whole images.bin file from the SD-card to the selected address in RAM")),(0,a.kt)("p",null,"This solution is simple, but has some drawbacks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The available RAM must be big enough to hold all the images"),(0,a.kt)("li",{parentName:"ul"},"Start up time will be larger because of the copying from the SD-card (megabytes can take seconds)")))}k.isMDXComponent=!0}}]);