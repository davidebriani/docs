"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[685],{3905:(e,t,A)=>{A.d(t,{Zo:()=>p,kt:()=>c});var n=A(7294);function a(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function l(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function i(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?l(Object(A),!0).forEach((function(t){a(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):l(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function r(e,t){if(null==e)return{};var A,n,a=function(e,t){if(null==e)return{};var A,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)A=l[n],t.indexOf(A)>=0||(a[A]=e[A]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)A=l[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(a[A]=e[A])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),A=t;return e&&(A="function"==typeof e?e(t):i(i({},t),e)),A},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var A=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=s(A),c=a,u=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return A?n.createElement(u,i(i({ref:t},p),{},{components:A})):n.createElement(u,i({ref:t},p))}));function c(e,t){var A=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=A.length,i=new Array(l);i[0]=m;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var s=2;s<l;s++)i[s]=A[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,A)}m.displayName="MDXCreateElement"},1215:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var n=A(7462),a=(A(7294),A(3905));const l={sidebar_position:2},i="Admin Console",r={unversionedId:"clea_portal_walkthrough/admin_console",id:"clea_portal_walkthrough/admin_console",title:"Admin Console",description:"Dashboard",source:"@site/docs/3_clea_portal_walkthrough/2-admin_console.md",sourceDirName:"3_clea_portal_walkthrough",slug:"/clea_portal_walkthrough/admin_console",permalink:"/clea_portal_walkthrough/admin_console",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Clea Portal",permalink:"/clea_portal_walkthrough/clea_portal"}},o={},s=[{value:"Dashboard",id:"dashboard",level:2},{value:"Create a new tenant",id:"create-a-new-tenant",level:2},{value:"Tenant Overview",id:"tenant-overview",level:2},{value:"General Info",id:"general-info",level:3},{value:"Design System",id:"design-system",level:3},{value:"Logo",id:"logo",level:4},{value:"Theme",id:"theme",level:4},{value:"Custom theme specs",id:"custom-theme-specs",level:5},{value:"Custom theme examples",id:"custom-theme-examples",level:5},{value:"Realm private key",id:"realm-private-key",level:3},{value:"Clea utility commands",id:"clea-utility-commands",level:3},{value:"Realm management token",id:"realm-management-token",level:3},{value:"AppEngine Token",id:"appengine-token",level:3},{value:"Pairing Token",id:"pairing-token",level:3},{value:"Tenant Applications",id:"tenant-applications",level:2}],p={toc:s};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"admin-console"},"Admin Console"),(0,a.kt)("h2",{id:"dashboard"},"Dashboard"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dashboard",src:A(9184).Z,width:"1913",height:"434"})),(0,a.kt)("p",null,"In the main dashboard, it is possible to view all tenants created and create new ones by clicking on ",(0,a.kt)("strong",{parentName:"p"},"Create new tenant"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tenant info",src:A(9722).Z,width:"921",height:"176"})),(0,a.kt)("p",null,"To select an existing tenant, click on the name; otherwise, it is also possible to delete the tenant through the ",(0,a.kt)("em",{parentName:"p"},"three dots menu"),"."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Delete Tenant",src:A(3957).Z,width:"238",height:"216"}))),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Attention, this option is irreversible. All the tenant data will be lost.")),(0,a.kt)("h2",{id:"create-a-new-tenant"},"Create a new tenant"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create a new tenant",src:A(8498).Z,width:"1920",height:"1080"})),(0,a.kt)("p",null,"To create a new tenant, fill out the form:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tenant name."),(0,a.kt)("li",{parentName:"ul"},"Tenant slug."),(0,a.kt)("li",{parentName:"ul"},"Realm name."),(0,a.kt)("li",{parentName:"ul"},"Tenant description."),(0,a.kt)("li",{parentName:"ul"},"Select location."),(0,a.kt)("li",{parentName:"ul"},"Email of users with whom the tenant should be shared.")),(0,a.kt)("h2",{id:"tenant-overview"},"Tenant Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tenant page",src:A(7493).Z,width:"1920",height:"1928"})),(0,a.kt)("p",null,"On the page related to the tenant, it is possible to view all the information necessary to interact with the data contained within it."),(0,a.kt)("h3",{id:"general-info"},"General Info"),(0,a.kt)("p",null,"This card contains the general info of the tenant, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Name"),": the name of the tenant."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Slug"),": reference name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cluster"),": the name of the cluster where the realm of this tenant resides."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Location"),": the cloud provider and zone of the cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Realm"),": the realm name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"API URL"),": the base API URL to reach the Astarte instance containing the realm."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dashboard button"),": click this button to access the Astarte Dashboard of your realm."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Delete tenant button"),": delete the tenant and its associated realm.")),(0,a.kt)("h3",{id:"design-system"},"Design System"),(0,a.kt)("p",null,"The Platform supports the customization of the graphical design. The customization happens via the Admin Console and consists of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Logo"),": This image file will be presented on the authentication pages and the menu on the portal."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Theme"),": dictates the colors, fonts, spacing, and visual style of the portal.")),(0,a.kt)("p",null,"You can customize these settings for each tenant."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tenant Design System",src:A(6742).Z,width:"400",height:"374"}))),(0,a.kt)("h4",{id:"logo"},"Logo"),(0,a.kt)("p",null,"Besides the default one, you can upload a custom image file."),(0,a.kt)("h4",{id:"theme"},"Theme"),(0,a.kt)("p",null,"The Platform provides some theme presets to choose from. You can also upload a custom CSS theme."),(0,a.kt)("h5",{id:"custom-theme-specs"},"Custom theme specs"),(0,a.kt)("p",null,"A custom theme is a CSS file that follows CSS syntax and has the .css extension."),(0,a.kt)("p",null,"The file is expected to define the same classes and CSS properties of Bootstrap 5.1, plus the following additional ones:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"--online"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--offline"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--fault")," CSS properties define the colors shown on the related device status."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"color-online"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"color-offline, color-fault")," classes, that should apply those colors, such as ",(0,a.kt)("inlineCode",{parentName:"li"},".color-online { color: var(--online) }"),".")),(0,a.kt)("p",null,"You can compile the CSS file from a customized SASS version of the default Bootstrap sources. Here you can find a path to prepare a build pipeline documented ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.0/getting-started/build-tools/"},"https://getbootstrap.com/docs/5.0/getting-started/build-tools/")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please note that the style customization is in active development, and breaking changes is possible.")),(0,a.kt)("h5",{id:"custom-theme-examples"},"Custom theme examples"),(0,a.kt)("p",null,"A sample theme could be the compiled CSS file of the following SASS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'// Default values for Boostrap init\n$theme-colors: (\n  "primary": #0631cc,\n  "accent": #11b0ef,\n);\n\n$black: #000;\n\n$box-shadow: 0 0.2rem 0.4rem rgba($black, 0.15);\n$box-shadow-lg: 0 0.2rem 0.2rem rgba($black, 0.5);\n\n@import "~bootstrap/scss/bootstrap.scss";\n\n:root {\n  --online: var(--success);\n  --offline: var(--gray);\n  --fault: var(--danger);\n}\n\n.color-online {\n  color: var(--online);\n}\n\n.color-offline {\n  color: var(--offline);\n}\n\n.color-fault {\n  color: var(--fault);\n}\n')),(0,a.kt)("h3",{id:"realm-private-key"},"Realm private key"),(0,a.kt)("p",null,"This private key allows you to generate custom tokens to access all your realm APIs (Realm Management, Pairing, AppEngine)."),(0,a.kt)("h3",{id:"clea-utility-commands"},"Clea utility commands"),(0,a.kt)("p",null,"These are some useful commands you can execute with the command line utility ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/astarte-platform/astartectl"},"astartectl")," to manage directly the data stored in Astarte. Use the token shown in the textbox to interact with ",(0,a.kt)("inlineCode",{parentName:"p"},"astartectl"),", since you'll need a JWT with claims for both AppEngine and Realm Management."),(0,a.kt)("h3",{id:"realm-management-token"},"Realm management token"),(0,a.kt)("p",null,"This is a ready-to-use token to interact with ",(0,a.kt)("strong",{parentName:"p"},"Realm Management API"),". The token expires ",(0,a.kt)("em",{parentName:"p"},"24 hours")," after its creation. Below is shown the date and time of expiration of the token."),(0,a.kt)("h3",{id:"appengine-token"},"AppEngine Token"),(0,a.kt)("p",null,"This is a ready-to-use token to interact with ",(0,a.kt)("strong",{parentName:"p"},"AppEngine API"),". The token expires ",(0,a.kt)("em",{parentName:"p"},"24 hours")," after its creation. Below is shown the date and time of expiration of the token."),(0,a.kt)("h3",{id:"pairing-token"},"Pairing Token"),(0,a.kt)("p",null,"A ready-to-use token to interact with ",(0,a.kt)("strong",{parentName:"p"},"Pairing API"),". This token ",(0,a.kt)("em",{parentName:"p"},"never")," expires after its creation."),(0,a.kt)("h2",{id:"tenant-applications"},"Tenant Applications"),(0,a.kt)("p",null,"From this section, you can create and manage ",(0,a.kt)("a",{parentName:"p",href:"/get_started/create_a_clea_portal_app"},"third-party Clea Portal Apps")," customized by you to better fit your needs."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tenant Design System",src:A(5531).Z,width:"1912",height:"481"})),(0,a.kt)("p",null,"Here it is possible to create new applications or modify the existing ones."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tenant Design System",src:A(9819).Z,width:"1623",height:"489"})),(0,a.kt)("p",null,"The information needed to load a ",(0,a.kt)("strong",{parentName:"p"},"Clea Portal App")," within the Clea Portal UI are the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Display Name"),": is the name visualized in the Tab inside the Appliance page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Name"),": is the name you choose to give to the application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"JS Bundle URL"),": is the URL where the JS Bundle of the application is deployed and accessible for download. It must be an externally accessible address so that Clea Portal can dynamically load the application when the appliance page is accessed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Required Astarte interfaces"),": You need to set up the list of ",(0,a.kt)("a",{parentName:"li",href:"https://docs.astarte-platform.org/1.0/030-interface.html"},"Astarte interfaces")," defined for this application. Each interface is determined by its name, major and minor versions. This application is loaded into every Appliance page that declares and uses these Astarte interfaces.")))}d.isMDXComponent=!0},9184:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/admin_dashboard-29e1d15bffd876d775677dc6edf38d5d.png"},9819:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/application_example-dfc0fdc7a63fdd0be427ea278845ba0d.png"},5531:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/applications-5cde8c7fbbb8b944757ad7c37dffd76e.png"},8498:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/tenant_create-0372224f047bb012b7a981e53c03e551.png"},3957:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/tenant_delete-d1e73b5629cd971444f58d107d4565a4.png"},6742:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/tenant_design_system-6642b775184d98de311b2f94633ba0e7.jpg"},9722:(e,t,A)=>{A.d(t,{Z:()=>n});const n="data:image/png;base64,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"},7493:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/tenant_page-85bc41399ef7e56fdee0242af6a1acee.png"}}]);