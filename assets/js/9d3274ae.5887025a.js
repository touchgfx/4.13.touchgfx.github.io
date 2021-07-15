(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1697],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return p}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=d(n),p=r,m=f["".concat(s,".").concat(p)]||f[p]||u[p]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2425:function(e,t,n){"use strict";var i=n(7294);class r extends i.Component{render(){return i.createElement("div",{class:"code-header"},i.createElement("div",null,i.createElement("h5",null,this.props.children)))}}t.Z=r},8678:function(e,t,n){"use strict";var i=n(7294);class r extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{class:e},i.createElement("div",{class:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},3054:function(e,t,n){"use strict";var i=n(7294),r=n(8678);const a=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends i.Component{render(){return i.createElement(r.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=o},1217:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var i=n(7294),r=n(3727),a=n(1368),o=n(5096),l=n(4487);const s=(0,i.createContext)({collectLink:()=>{}});var d=n(5026),c=n(7023),u=Object.defineProperty,f=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&b(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&b(e,n,t[n]);return e};var y=function(e){var t,n=e,{isNavLink:u,to:b,href:y,activeClassName:w,isActive:x,"data-noBrokenLinkCheck":B,autoAddBaseUrl:P=!0}=n,k=((e,t)=>{var n={};for(var i in e)h.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&m)for(var i of m(e))t.indexOf(i)<0&&g.call(e,i)&&(n[i]=e[i]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O}}=(0,a.Z)(),{withBaseUrl:_}=(0,d.C)(),M=(0,i.useContext)(s),F=b||y,E=(0,o.Z)(F),L=null==F?void 0:F.replace("pathname://","");let j=void 0!==L?(T=L,P&&(e=>e.startsWith("/"))(T)?_(T):T):void 0;var T;j&&E&&(j=(0,c.applyTrailingSlash)(j,O));const C=(0,i.useRef)(!1),H=u?r.OL:r.rU,I=l.Z.canUseIntersectionObserver;let N;(0,i.useEffect)((()=>(!I&&E&&null!=j&&window.docusaurus.prefetch(j),()=>{I&&N&&N.disconnect()})),[j,I,E]);const D=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,S=!j||!E||D;return j&&E&&!D&&!B&&M.collectLink(j),S?i.createElement("a",v(v({href:j},F&&!E&&{target:"_blank",rel:"noopener noreferrer"}),k)):i.createElement(H,v((Z=v({},k),f(Z,p({onMouseEnter:()=>{C.current||null==j||(window.docusaurus.preload(j),C.current=!0)},innerRef:e=>{var t,n;I&&e&&E&&(t=e,n=()=>{null!=j&&window.docusaurus.prefetch(j)},N=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t),N.disconnect(),n())}))})),N.observe(t))},to:j||""}))),u&&{isActive:x,activeClassName:w}));var Z}},5096:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return r}})},5026:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var i=n(1368),r=n(5096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,i)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},7271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),i="/"===n?"/":(r=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));var r;return e.replace(n,i)}},7023:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(7271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return i(r).default}});var a=n(1080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return i(a).default}})},1080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1892:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return g},metadata:function(){return b},toc:function(){return v},default:function(){return w}});var i=n(3905),r=n(1217),a=n(3054),o=n(2425),l=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))f.call(t,n)&&p(e,n,t[n]);return e};const h={id:"loading-images-at-runtime",title:"Loading Images at Runtime"},g=void 0,b={unversionedId:"development/ui-development/scenarios/loading-images-at-runtime",id:"development/ui-development/scenarios/loading-images-at-runtime",isDocsHomePage:!1,title:"Loading Images at Runtime",description:"This section describes how dynamic bitmaps can be used to create",source:"@site/docs/development/ui-development/scenarios/loading-images-at-runtime.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/loading-images-at-runtime",permalink:"/4.13/docs/development/ui-development/scenarios/loading-images-at-runtime",version:"current",frontMatter:{id:"loading-images-at-runtime",title:"Loading Images at Runtime"},sidebar:"docs",previous:{title:"Achieving Better Performance with CacheableContainer",permalink:"/4.13/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container"},next:{title:"Lowering Memory Usage with Partial Framebuffer",permalink:"/4.13/docs/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer"}},v=[{value:"Loading BMP file Example",id:"loading-bmp-file-example",children:[{value:"The BMP loader",id:"the-bmp-loader",children:[]}]},{value:"Configure memory for dynamic bitmaps",id:"configure-memory-for-dynamic-bitmaps",children:[]},{value:"Loading JPEG files",id:"loading-jpeg-files",children:[]}],y={toc:v};function w(e){var t,l=e,{components:p}=l,h=((e,t)=>{var n={};for(var i in e)u.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&c)for(var i of c(e))t.indexOf(i)<0&&f.call(e,i)&&(n[i]=e[i]);return n})(l,["components"]);return(0,i.kt)("wrapper",(t=m(m({},y),h),s(t,d({components:p,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"This section describes how dynamic bitmaps can be used to create\napplications where some of the graphic content is read from files or\nother input at runtime. The dynamic bitmaps can be used to show\ne.g. image files from an SD-card."),(0,i.kt)(a.Z,{mdxType:"Note"},"Read first about ",(0,i.kt)(r.Z,{to:"../touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"Dynamic Bitmaps"),"."),(0,i.kt)("p",null,"Recall that standard bitmaps are compiled into the application and\ntherefore must be available at compile time. The Dynamic Bitmap\nfeature allows you to read images from files at runtime, or even\ndownload images through an internet connection."),(0,i.kt)("h2",m({},{id:"loading-bmp-file-example"}),"Loading BMP file Example"),(0,i.kt)("p",null,"Here we will see how to use a BMP loader to load pixels from a Windows\nBMP file. The code for the loader is later in the article."),(0,i.kt)("p",null,"Insert first an Image widget in the view. This widget will show the BMP:"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"class TemplateView : public View\n{\nprivate:\n    Image image;\n}\n")),(0,i.kt)("p",null,"Load the image date in setupScreen:"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{7-8,13-14}","{7-8,13-14}":!0}),'void TemplateView::setupScreen()\n{\n    FILE* f = fopen("image.jpg", "rb");\n    uint16_t width, height;\n\n    //Get the image dimensions from the BMP file\n    BMPFileLoader::getBMP24Dimensions(f, width, height);\n    BitmapId bmpId;\n\n    //Create (16bit) dynamic bitmap of same dimension\n    bmpId = Bitmap::dynamicBitmapCreate(width, height, Bitmap::RGB565);\n\n    //Load pixels from BMP file to dynamic bitmap\n    BMPFileLoader::readBMP24File(Bitmap(bmpId), f);\n\n    //Make Image show the loaded bitmap\n    image.setBitmap(Bitmap(bmpId));\n\n    //Position image and add to View\n    image.setXY(20, 20);\n    add(image);\n    ...\n}\n')),(0,i.kt)("h3",m({},{id:"the-bmp-loader"}),"The BMP loader"),(0,i.kt)("p",null,"Here is the code for a simple BMP file loader. It only supports 24bpp\nBMP files.  You may have to adjust the file system calls to match your\nsystem."),(0,i.kt)(o.Z,{mdxType:"CodeHeader"},"BMPFileLoader.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/hal/Types.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nusing namespace touchgfx;\n\nclass BMPFileLoader\n{\npublic:\n    typedef void* FileHdl;\n\n    static void getBMP24Dimensions(FileHdl fileHandle, uint16_t& width, uint16_t& height);\n    static void readBMP24File(Bitmap bitmap, FileHdl fileHandle);\nprivate:\n    static int readFile(FileHdl hdl, uint8_t* const buffer, uint32_t length);\n    static void seekFile(FileHdl hdl, uint32_t offset);\n};\n")),(0,i.kt)(o.Z,{mdxType:"CodeHeader"},"BMPFileLoader.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'#include <gui/common/BMPFileLoader.hpp>\n#include <touchgfx/Color.hpp>\n\nint BMPFileLoader::readFile(FileHdl hdl, uint8_t* const buffer, uint32_t length)\n{\n    uint32_t r = fread(buffer, 1, length, (FILE*)hdl);\n    if (r != length)\n    {\n        return 1;\n    }\n    return 0;\n}\n\nvoid BMPFileLoader::seekFile(FileHdl hdl, uint32_t offset)\n{\n    fseek((FILE*)hdl, offset, SEEK_SET);\n}\n\nvoid BMPFileLoader::getBMP24Dimensions(FileHdl fileHandle, uint16_t& width, uint16_t& height)\n{\n    uint8_t data[50];\n    seekFile(fileHandle, 0);\n    readFile(fileHandle, data, 26); //read first part of header.\n\n    width = data[18] | (data[19] << 8) | (data[20] << 16) | (data[21] << 24);\n    height = data[22] | (data[23] << 8) | (data[24] << 16) | (data[25] << 24);\n}\n\nvoid BMPFileLoader::readBMP24File(Bitmap bitmap, FileHdl fileHandle)\n{\n    uint8_t data[50];\n    seekFile(fileHandle, 0);\n    readFile(fileHandle, data, 26); //read first part of header.\n\n    const uint32_t offset = data[10] | (data[11] << 8) | (data[12] << 16) | (data[12] << 24);\n    const uint32_t width = data[18] | (data[19] << 8) | (data[20] << 16) | (data[21] << 24);\n    const uint32_t height = data[22] | (data[23] << 8) | (data[24] << 16) | (data[25] << 24);\n\n    readFile(fileHandle, data, offset - 26); //read rest of header.\n\n    //get dynamic bitmap boundaries\n    const uint32_t buffer_width = bitmap.getWidth();\n    const uint32_t buffer_height = bitmap.getHeight();\n\n    const uint32_t rowpadding = (4 - ((width * 3) % 4)) % 4;\n\n    const Bitmap::BitmapFormat format = bitmap.getFormat();\n    uint8_t* const  buffer8  = Bitmap::dynamicBitmapGetAddress(bitmap.getId());\n    uint16_t* const buffer16 = (uint16_t*)buffer8;\n\n    for (uint32_t y = 0; y < height; y++)\n    {\n        for (uint32_t x = 0; x < width; x++)\n        {\n            if (x % 10 == 0) //read data every 10 pixels = 30 bytes\n            {\n                if (x + 10 <= width) //read 10\n                {\n                    readFile(fileHandle, data, 10 * 3); //10 pixels\n                }\n                else\n                {\n                    readFile(fileHandle, data, (width - x) * 3 + rowpadding); //rest of line\n                }\n            }\n            //insert pixel, if within dynamic bitmap boundaries\n            if (x < buffer_width && ((height - y - 1) < buffer_height))\n            {\n                switch (format)\n                {\n                case Bitmap::RGB565:\n                    buffer16[x + (height - y - 1) * buffer_width] =\n                        touchgfx::Color::getColorFrom24BitRGB(data[(x % 10) * 3 + 2], data[(x % 10) * 3 + 1], data[(x % 10) * 3]);\n                    break;\n                case Bitmap::RGB888:\n                    {\n                        //24 bit framebuffer\n                        const uint32_t inx = 3 * (x + (height - y - 1) * buffer_width);\n                        buffer8[inx + 0] = data[(x % 10) * 3 + 0];\n                        buffer8[inx + 1] = data[(x % 10) * 3 + 1];\n                        buffer8[inx + 2] = data[(x % 10) * 3 + 2];\n                        break;\n                    }\n                case Bitmap::ARGB8888:\n                    {\n                        //24 bit framebuffer\n                        const uint32_t inx = 4 * (x + (height - y - 1) * buffer_width);\n                        buffer8[inx + 0] = data[(x % 10) * 3 + 0];\n                        buffer8[inx + 1] = data[(x % 10) * 3 + 1];\n                        buffer8[inx + 2] = data[(x % 10) * 3 + 2];\n                        buffer8[inx + 3] = 255; //solid\n                        break;\n                    }\n                default:\n                    assert(!"Unsupported bitmap format in BMPFileLoader!");\n                }\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"This code is for illustrative purposes. A more optimal reader for\nRGB888 can read directly from the file to the dynamic bitmap memory\n(remember to skip the row padding). The reader above reads 10 pixels\nfrom the BMP file to a temporary buffer. The pixels are then copied to\nthe bitmap while converting to the correct format."),(0,i.kt)("h2",m({},{id:"configure-memory-for-dynamic-bitmaps"}),"Configure memory for dynamic bitmaps"),(0,i.kt)("p",null,"Before you can create and use dynamic bitmaps you must configure\nTouchGFX. It is a prerequisite to provide a buffer and the maximum\nnumber of dynamic bitmaps (also for the simulator)."),(0,i.kt)("p",null,"Here is an example for STM32F7xx where we allocate a buffer in\nexternal RAM: We wish to load and show a 24-bit bitmap of size\n320x240. The memory requirement is thus 320x240x3 = 230400.\nWe also need a little space for bookkeeping, so we allocate 232000\nbytes for the buffer."),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"static uint32_t bmpCache = (uint32_t)(0xC00C0000); // SDRAM\nvoid touchgfx_init()\n{\n  HAL& hal = touchgfx_generic_init<STM32F7HAL>(dma, display, tc, 480, 272, (uint16_t*)bmpCache, 232000, 1);\n  ...\n}\n")),(0,i.kt)("p",null,"The final argument is the maximum number of dynamic bitmaps, so adjust this according to your needs."),(0,i.kt)(a.Z,{mdxType:"Note"},"Note that in case of insufficient memory, the BitmapId returned by dynamicBitmapCreate will be BITMAP_INVALID."),(0,i.kt)("h2",m({},{id:"loading-jpeg-files"}),"Loading JPEG files"),(0,i.kt)("p",null,"A JPEG File Loader example ",(0,i.kt)("a",{target:"_blank",href:n(710).Z},"can be found here")," which shows how to use LibJPEG to use JPEG-files. It uses a JPEGLoader class similar to the above BMPFileLoader."))}w.isMDXComponent=!0},710:function(e,t,n){"use strict";t.Z=n.p+"assets/files/jpeg-file-loader-4ee676d38cdfca7ef2583412712b6bf1.zip"}}]);