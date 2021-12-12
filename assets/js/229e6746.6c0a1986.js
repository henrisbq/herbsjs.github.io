"use strict";(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[7696],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),k=s,f=d["".concat(l,".").concat(k)]||d[k]||u[k]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71971:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),s=n(63366),a=(n(67294),n(3905)),i=["components"],o={id:"steps",title:"Steps",sidebar_label:"Steps",slug:"/usecase/steps"},l=void 0,c={unversionedId:"usecase/steps",id:"usecase/steps",title:"Steps",description:"Steps are the building blocks of a use case. Their main goal is to generate metadata before and during the execution of a use case like the code intention, audit trail, etc.",source:"@site/docs/usecase/steps.md",sourceDirName:"usecase",slug:"/usecase/steps",permalink:"/docs/usecase/steps",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/usecase/steps.md",tags:[],version:"current",frontMatter:{id:"steps",title:"Steps",sidebar_label:"Steps",slug:"/usecase/steps"},sidebar:"sidebar",previous:{title:"Features",permalink:"/docs/usecase/features"},next:{title:"Result",permalink:"/docs/usecase/result"}},p=[{value:"The Basics",id:"the-basics",children:[],level:2},{value:"Nested Steps",id:"nested-steps",children:[],level:2},{value:"If / Then / Else",id:"if--then--else",children:[],level:2},{value:"Step Context (ctx)",id:"step-context-ctx",children:[],level:2},{value:"Step Result",id:"step-result",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Steps are the building blocks of a use case. Their main goal is to generate metadata before and during the execution of a use case like the code intention, audit trail, etc."),(0,a.kt)("h2",{id:"the-basics"},"The Basics"),(0,a.kt)("p",null,"To create a step inside a use case is simple:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Define your step intention. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Wrap your code with the ",(0,a.kt)("inlineCode",{parentName:"p"},"step")," function passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx")," argument. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Don't forget to return the ",(0,a.kt)("a",{parentName:"p",href:"/docs/usecase/result"},"result"),"."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Ok, Err, usecase, step } = require('@herbsjs/herbs')\n\nconst createProduct = injection =>\n    usecase('Create Product', {\n\n        'Check if the Product is valid': step(ctx => {\n            return Ok() \n        }),\n        ...\n")),(0,a.kt)("p",null,"We think a code must define its ",(0,a.kt)("a",{parentName:"p",href:"/docs/project/motivation#code-intention"},"intention")," to make it easier to read as well as changing it."),(0,a.kt)("p",null,"So, the first thing to note is that we encourage the description of the steps with the business intent (never the technical intent)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Good descriptions:")),(0,a.kt)("p",null,"\u2705 Check if the Product is valid"),(0,a.kt)("p",null,"\u2705 Retrieve all Users from repository"),(0,a.kt)("p",null,"\u2705 Calculate Customer position on the Queue"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bad descriptions:")),(0,a.kt)("p",null,"\u274c Select rows from MySQL"),(0,a.kt)("p",null,"\u274c getAllUsers"),(0,a.kt)("p",null,"\u274c Calc Position"),(0,a.kt)("h2",{id:"nested-steps"},"Nested Steps"),(0,a.kt)("p",null,"It is possible to break your step into smaller steps using nested steps."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const createProduct = injection =>\n    usecase('Create Product', {\n\n        'Check if the Product is valid': step({\n\n            'Validate Product origin': step(ctx => { \n                return Ok() \n            }),\n\n            'Validate Product information': step(ctx => { \n                return Ok() \n            }),\n            ...\n        }),\n")),(0,a.kt)("h2",{id:"if--then--else"},"If / Then / Else"),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"ifElse")," step it is possible create a conditional flow for a use case. "),(0,a.kt)("p",null,"\ud83d\udca1 ",(0,a.kt)("strong",{parentName:"p"},"Should I use ",(0,a.kt)("inlineCode",{parentName:"strong"},"ifElse")," step or a simple ",(0,a.kt)("inlineCode",{parentName:"strong"},"if")," statement on my code?")),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"ifElse")," when there is a fork in the business rule flow, thus capturing and documenting these rules. For other cases, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," statement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"'[conditional flow description]': ifElse({\n\n    '[if description]': step(ctx => {\n        return Ok(conditional) // true or false\n    }),\n\n    '[then description]': step(ctx => {\n        ...\n        return Ok()\n    }),\n\n    '[else description]': step(ctx => {\n        ...\n        return Ok()\n    }),\n}),\n\n")),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Ok, Err, usecase, step, ifElse } = require('@herbsjs/herbs')\n\nconst updateItem = (injection) =>\n  usecase('Update Task', {\n\n    ...\n    \n    'Check if is necessary to update Task positions': ifElse({\n\n      'If position has changed': step(ctx => {\n        return Ok(ctx.hasChangedPosition) // true or false\n      }),\n\n      'Then rearrange positions and save Tasks on repository': step(async ctx => {\n        ...\n        return Ok()\n      }),\n\n      'Else save updated Task on repository': step(async ctx => {\n        ...\n        return Ok()\n      }),\n\n    }),\n\n")),(0,a.kt)("h2",{id:"step-context-ctx"},"Step Context (ctx)"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx")," variable is used to access (read and write) the state of the use case and its steps during its execution."),(0,a.kt)("p",null,"For instance, to read and write a variable across multiple steps:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const updateUser = injection =>\n    usecase('Update User', {\n\n        'Retrieve User from repository': step(async ctx => {\n            ...\n            const id = ctx.req.id // read id from request\n            ctx.user = await repo.findByID(...) // create `user` variable\n        }),\n\n        'Update User on repository': step(ctx => {\n            const user = ctx.user // read `user` variable\n            ...\n            ctx.ret = user // set the use case return\n\n            return Ok(user)  // set the step return (for audit only)\n        }),\n    })\n")),(0,a.kt)("p",null,"There are a few reserved variables inside ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx"),":"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ctx.req")," - Contains the use case request payload. Declared when running a use case."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ctx.ret")," - Defines the use case result value."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ctx.stop()")," -  Informs that the current step will be the last to be executed in the use case context, regardless the step result (Ok or Err)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const moveList = injection =>\n    usecase('Move List', {\n\n        'Move List position': step(async ctx => {\n            ...\n            if (last) ctx.stop() // use case execution will stop at this step.\n            return Ok() \n        }),\n        ...\n    })\n")),(0,a.kt)("h2",{id:"step-result"},"Step Result"),(0,a.kt)("p",null,"The result (",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Err"),") of a step is defined by the function returns. "),(0,a.kt)("p",null,"For exambple, ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," with value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    usecase('Create Product', {\n\n        'Check if the Product is valid': step(ctx => {\n            return Ok(isProductValid) \n        }),\n        ...\n")),(0,a.kt)("p",null,"The use case will stop its execution if the result of a step is ",(0,a.kt)("inlineCode",{parentName:"p"},"Err"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    usecase('Create Product', {\n\n        'Check if the Product is valid': step(ctx => {\n            if (!isProductValid) return Err(whyIsNotValid) // stop here\n            return Ok(isProductValid)  // next step\n        }),\n        ...\n")),(0,a.kt)("p",null,"If defined, like the example above, the value of the result will be audited."),(0,a.kt)("p",null,"The default result is ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," if no explicit result is returned."))}d.isMDXComponent=!0}}]);