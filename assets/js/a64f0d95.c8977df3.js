"use strict";(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[4616],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,u(u({ref:t},l),{},{components:n})):r.createElement(f,u({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,u=new Array(i);u[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var c=2;c<i;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60850:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),u=["components"],o={id:"security",title:"8. Security and Auditing",sidebar_label:"8. Security and Auditing",slug:"/tutorial/security"},s=void 0,c={unversionedId:"tutorial/security",id:"tutorial/security",title:"8. Security and Auditing",description:"Authorizing",source:"@site/docs/tutorial/security.md",sourceDirName:"tutorial",slug:"/tutorial/security",permalink:"/docs/tutorial/security",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/tutorial/security.md",tags:[],version:"current",frontMatter:{id:"security",title:"8. Security and Auditing",sidebar_label:"8. Security and Auditing",slug:"/tutorial/security"},sidebar:"sidebar",previous:{title:"7. Refactoring",permalink:"/docs/tutorial/refactoring"},next:{title:"Getting Started",permalink:"/docs/usecase/getting-started"}},l=[{value:"Authorizing",id:"authorizing",children:[],level:2},{value:"Auditing",id:"auditing",children:[],level:2},{value:"Generate a use case self documentation",id:"generate-a-use-case-self-documentation",children:[],level:2}],p={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"authorizing"},"Authorizing"),(0,i.kt)("p",null,"In every use case, you can set up the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorize")," which gets a ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," object and must return ",(0,i.kt)("inlineCode",{parentName:"p"},"Ok")," for authorized and ",(0,i.kt)("inlineCode",{parentName:"p"},"Err")," for unauthorized."),(0,i.kt)("p",null,"It is simple like that, you can implement any logic and if ",(0,i.kt)("inlineCode",{parentName:"p"},"Ok")," were returned the use case keep running, but if ",(0,i.kt)("inlineCode",{parentName:"p"},"Err")," were returned, the use case is interrupted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const createUser = () => usecase('Create User', {\n    // Input/Request metadata and validation \n    request: {\n        nickname: String,\n        password: String\n    },\n\n    // Output/Response metadata\n    response: User,\n\n    // Authorization with Audit\n    authorize: async (user) => (user.canCreateUser ? Ok() : Err()),\n    ...\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"../usecase/features#authorize"},"Authorize with HerbsJS"),".")),(0,i.kt)("h2",{id:"auditing"},"Auditing"),(0,i.kt)("p",null,"You can retrieve useful information about a use case execution with ",(0,i.kt)("inlineCode",{parentName:"p"},"usecase.auditTrail"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const request = { name: 'The best product' }\n\n// Run the use case\nconst response = await createProduct.run(request)\n\n// Log their information\nconsole.log(createProduct.auditTrail)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n    // object type\n    type: 'use case',\n    \n    // use ase description\n    description: 'Create User',\n    \n    // unique Id for each use case execution\n    transactionId: '9985fb70-f56d-466a-b466-e200d1d4848c', \n    \n    // total use case execution time in nanosecods\n    elapsedTime: 1981800n, \n\n    // the same user (object) provided on `usecase.authorize(user)`\n    user: { name: 'John', id: '923b8b9a', isAdmin: true },\n\n    // `usecase.authorize(user)` return\n    authorized: true,\n\n    // use case result\n    return: {\n        Ok: { id: 1, nickname: 'created_user', password: 's3cr37' }\n    },\n\n    // steps\n    steps: [\n        { \n            // object type\n            type: 'step', \n            \n            // use ase description\n            description: 'Check if the User is valid', \n            \n            // total step execution time in nanosecods\n            elapsedTime: 208201n , \n            \n            // step result\n            return: {} \n        },\n        ...\n    ]\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Refer to ",(0,i.kt)("a",{parentName:"p",href:"../usecase/features#audit"},"Audit with HerbsJS")," to know more.")),(0,i.kt)("h2",{id:"generate-a-use-case-self-documentation"},"Generate a use case self documentation"),(0,i.kt)("p",null,"You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"uc.doc()")," to get an Object like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{\n  type: 'use case',\n  description: 'Create User',\n  request: { nickname: String, password: String },\n  response: User,\n  steps: [\n    { type: 'step', description: 'Check if the User is valid', steps: null },\n  ]\n}\n")))}d.isMDXComponent=!0}}]);