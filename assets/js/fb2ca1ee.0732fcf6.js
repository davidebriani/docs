"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},o="Glossary",l={unversionedId:"clea-101/glossary",id:"clea-101/glossary",title:"Glossary",description:"User",source:"@site/docs/1_clea-101/2-glossary.md",sourceDirName:"1_clea-101",slug:"/clea-101/glossary",permalink:"/clea-101/glossary",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Platform Architecture",permalink:"/clea-101/platform_architecture"},next:{title:"Connect a Device",permalink:"/get_started/connect_a_device"}},s={},p=[{value:"User",id:"user",level:2},{value:"Organization",id:"organization",level:2},{value:"Clients",id:"clients",level:2},{value:"Appliance",id:"appliance",level:2},{value:"Apps",id:"apps",level:2},{value:"Roles",id:"roles",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Tenant",id:"tenant",level:2},{value:"Realm",id:"realm",level:2},{value:"Cluster",id:"cluster",level:2},{value:"Sys Admin",id:"sys-admin",level:2},{value:"Tenant Admin Console",id:"tenant-admin-console",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"glossary"},"Glossary"),(0,r.kt)("h2",{id:"user"},"User"),(0,r.kt)("p",null,"A user is any person able to log into the system and use it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Organization User:")," a user who is part of an organization created/managed by the organization admin users."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Organization Admin User:")," an organization user who possesses an admin role."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Client User/End User:")," a user that registers itself in the portal (which is not part of any existing organization). When they register, a linked thin organization is created.")),(0,r.kt)("h2",{id:"organization"},"Organization"),(0,r.kt)("p",null,"An organization is a set of appliances, users, and roles. There are two types of organizations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Standard Organization:")," that has complete management of all platform aspects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Thin Organization:")," an organization with simplified features and just a single user automatically created when an end-user register into the portal. If needed, the thin organization can upgrade to a standard organization from the single user to fully manage appliances, clients, and users.")),(0,r.kt)("h2",{id:"clients"},"Clients"),(0,r.kt)("p",null,"A client is anyone buying appliances from an organization. A client is also an organization, and a vendor organization can assign appliances to a client organization."),(0,r.kt)("h2",{id:"appliance"},"Appliance"),(0,r.kt)("p",null,"An Appliance is a final product. It is a machine identified by a serial number with an internal gateway (Device) connected to the Astarte/Clea.\nAn Appliance can be assigned to a customer by the provider organization."),(0,r.kt)("h2",{id:"apps"},"Apps"),(0,r.kt)("p",null,"Clea Portal Apps are external web apps developed by developers who want to customize their Clea experience."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Appliance Apps:")," Apps contained in a single appliance page. Default apps will be available at first and developed by the Clea team. Check the ",(0,r.kt)("a",{parentName:"li",href:"/get_started/create_a_clea_portal_app"},"create a third-party Clea Portal App")," section to learn how to develop a new one."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Organization-Wide Applications:")," Clea platform will allow customization through organization-wide applications that can access many devices part of the same organization.")),(0,r.kt)("h2",{id:"roles"},"Roles"),(0,r.kt)("p",null,"A Role is a selection of permissions assigned to a User."),(0,r.kt)("h2",{id:"permissions"},"Permissions"),(0,r.kt)("p",null,"Permissions are granular authorizations given to a User."),(0,r.kt)("h2",{id:"tenant"},"Tenant"),(0,r.kt)("p",null,"A tenant is a logical Clea instance that doesn't share any logical entity with other tenants. Each tenant has organizations, users, appliances, and preferences, and a user has no rights to other tenants. All tenants can be managed from a tenant admin console."),(0,r.kt)("h2",{id:"realm"},"Realm"),(0,r.kt)("p",null,"A set of Astarte resources (e.g., devices, interfaces, triggers) is tied 1:1 to a Tenant (and to a ScyllaDB/Cassandra database)."),(0,r.kt)("h2",{id:"cluster"},"Cluster"),(0,r.kt)("p",null,"A cluster is an instance running on a specific data center on a set of computing resources."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Astarte Cluster:")," an instance running on a certain data center on a set of computing resources.")),(0,r.kt)("h2",{id:"sys-admin"},"Sys Admin"),(0,r.kt)("p",null,"A user that is a tenant admin console user can administer one or more tenants. Sys Admin cannot log into a tenant organization."),(0,r.kt)("h2",{id:"tenant-admin-console"},"Tenant Admin Console"),(0,r.kt)("p",null,"A portal that allows performing administrative tasks on tenants."))}u.isMDXComponent=!0}}]);