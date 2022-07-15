"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[21],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=p(a),h=n,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||l;return a?r.createElement(u,o(o({ref:e},c),{},{components:a})):r.createElement(u,o({ref:e},c))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7155:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:1},o="Connect a Device",i={unversionedId:"get_started/connect_a_device",id:"get_started/connect_a_device",title:"Connect a Device",description:"In order to register an Appliance to Clea you need to write a software agent on your device that connects and sends data to Astarte platform.",source:"@site/docs/2_get_started/1-connect_a_device.md",sourceDirName:"2_get_started",slug:"/get_started/connect_a_device",permalink:"/get_started/connect_a_device",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Glossary",permalink:"/clea-101/glossary"},next:{title:"Create a third-party Clea Portal App",permalink:"/get_started/create_a_clea_portal_app"}},s={},p=[{value:"Astarte SDKs",id:"astarte-sdks",level:2},{value:"Clea Examples",id:"clea-examples",level:2}],c={toc:p};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"connect-a-device"},"Connect a Device"),(0,n.kt)("p",null,"In order to register an ",(0,n.kt)("a",{parentName:"p",href:"/clea-101/glossary#appliance"},"Appliance")," to Clea you need to write a software agent on your device that connects and sends data to Astarte platform.\nYou can find more information about Astarte by checking out the product documentation on this page:\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.astarte-platform.org/latest/001-intro_user.html"},"Astarte docs")),(0,n.kt)("p",null,"First of all, you need to ",(0,n.kt)("strong",{parentName:"p"},"register your device")," to Astarte Platform, check here for more info:\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.astarte-platform.org/snapshot/035-register_device.html"},"Astarte docs - Registering a Device"),(0,n.kt)("br",{parentName:"p"}),"\n","You can do it in two ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Through the online dashboard of Astarte, accessible from the ",(0,n.kt)("a",{parentName:"li",href:"/clea_portal_walkthrough/admin_console#general-info"},"Admin Console"),"."),(0,n.kt)("li",{parentName:"ul"},"Directly from the device, through the SDKs that allow it (at the time of writing Java, C/ESP32) using the ",(0,n.kt)("em",{parentName:"li"},"Pairing Token")," that can be found in the ",(0,n.kt)("a",{parentName:"li",href:"/clea_portal_walkthrough/admin_console#pairing-token"},"Admin Console")," and the ",(0,n.kt)("em",{parentName:"li"},"Device ID")," generated internally, as ",(0,n.kt)("inlineCode",{parentName:"li"},"UUIDv5"),", generated with the SDK\u2019s functionality.")),(0,n.kt)("p",null,"At the end of the registration phase, you will receive a ",(0,n.kt)("em",{parentName:"p"},"Credential Secret")," that you will use with the ",(0,n.kt)("em",{parentName:"p"},"Device ID")," to connect to Astarte and perform all the necessary operations.\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.astarte-platform.org/snapshot/040-connect_device.html"},"Astarte docs - Connecting a Device")),(0,n.kt)("h2",{id:"astarte-sdks"},"Astarte SDKs"),(0,n.kt)("p",null,"Use one of the Astarte SDKs to write the software that connects to the platform and sends the first data.\nHere you can find a detailed list of available Astarte SDKs:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Language / Platform"),(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Link"),(0,n.kt)("th",{parentName:"tr",align:null},"Note"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Java / Android"),(0,n.kt)("td",{parentName:"tr",align:null},"Stable"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/astarte-platform/astarte-device-sdk-java"},"https://github.com/astarte-platform/astarte-device-sdk-java")),(0,n.kt)("td",{parentName:"tr",align:null},"Available also on ",(0,n.kt)("a",{parentName:"td",href:"https://search.maven.org/search?q=g:org.astarte-platform"},"Maven"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"C++ (Qt5)"),(0,n.kt)("td",{parentName:"tr",align:null},"Stable"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/astarte-platform/astarte-device-sdk-qt5"},"https://github.com/astarte-platform/astarte-device-sdk-qt5")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"C (ESP32)"),(0,n.kt)("td",{parentName:"tr",align:null},"Stable"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/astarte-platform/astarte-device-sdk-esp32"},"https://github.com/astarte-platform/astarte-device-sdk-esp32")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Elixir"),(0,n.kt)("td",{parentName:"tr",align:null},"Stable"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/astarte-platform/astarte-device-sdk-elixir"},"https://github.com/astarte-platform/astarte-device-sdk-elixir")),(0,n.kt)("td",{parentName:"tr",align:null},"Available also on ",(0,n.kt)("a",{parentName:"td",href:"https://hex.pm/packages/astarte_device"},"hex.pm"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Python"),(0,n.kt)("td",{parentName:"tr",align:null},"Beta"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/astarte-platform/astarte-device-sdk-python"},"https://github.com/astarte-platform/astarte-device-sdk-python")),(0,n.kt)("td",{parentName:"tr",align:null},"Available also on ",(0,n.kt)("a",{parentName:"td",href:"https://pypi.org/project/astarte-device-sdk/"},"pip"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rust"),(0,n.kt)("td",{parentName:"tr",align:null},"Beta"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/astarte-platform/astarte-device-sdk-rust"},"https://github.com/astarte-platform/astarte-device-sdk-rust")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Go"),(0,n.kt)("td",{parentName:"tr",align:null},"Beta"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/astarte-platform/astarte-device-sdk-go"},"https://github.com/astarte-platform/astarte-device-sdk-go")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Within the SDKs repositories you can find resources and minimal examples to take your first steps with the platform.")),(0,n.kt)("p",null,"You can find more info and details of the Astarte SDKs and their features in the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.astarte-platform.org/latest/041-astarte_device_sdks.html"},"Astarte Device SDKs")," page in the Astarte documentation."),(0,n.kt)("h2",{id:"clea-examples"},"Clea Examples"),(0,n.kt)("p",null,"You can find some examples of complete Clea applications, including edge agent parts written using Astarte SDKs in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/clea-platform/clea-examples"},"Clea Examples")," repository."),(0,n.kt)("h1",{id:"add-an-appliance-to-clea-portal"},"Add an Appliance to Clea Portal"),(0,n.kt)("p",null,"Once a device is correctly connected and sends data to Astarte, it is possible to use the Astarte ",(0,n.kt)("em",{parentName:"p"},"Device ID")," to ",(0,n.kt)("strong",{parentName:"p"},"add an appliance on the Clea Portal")," from the ",(0,n.kt)("a",{parentName:"p",href:"/clea_portal_walkthrough/clea_portal#add-appliance"},"Add Appliance")," page.",(0,n.kt)("br",{parentName:"p"}),"\n","The appliance now registered is associated with a device within that is connected to the system.  "),(0,n.kt)("p",null,"Thanks to the ",(0,n.kt)("em",{parentName:"p"},"Device ID"),", the Clea Portal and Clea Portal Apps can interact with the appliance data, either incoming or outgoing, communicating directly with the Astarte platform."))}d.isMDXComponent=!0}}]);