(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),s=(n(0),n(117)),i={id:"features",title:"Features",sidebar_label:"Features",slug:"/usecase/features"},c={unversionedId:"usecase/features",id:"usecase/features",isDocsHomePage:!1,title:"Features",description:"Create a Use Case",source:"@site/docs/usecase/features.md",slug:"/usecase/features",permalink:"/docs/usecase/features",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/usecase/features.md",version:"current",sidebar_label:"Features",sidebar:"sidebar",previous:{title:"Getting started",permalink:"/docs/usecase/getting-started"},next:{title:"Steps",permalink:"/docs/usecase/steps"}},u=[{value:"Create a Use Case",id:"create-a-use-case",children:[]},{value:"Running a Use Case",id:"running-a-use-case",children:[]},{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[]},{value:"Request and Response Types",id:"request-and-response-types",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Authorize",id:"authorize",children:[]},{value:"Context (ctx)",id:"context-ctx",children:[]},{value:"Audit",id:"audit",children:[]},{value:"Documentation",id:"documentation",children:[]}],o={toc:u};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"create-a-use-case"},"Create a Use Case"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"usecase(description, body)"),", where:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"description"),": description of the use case, capturing the use case intent.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"body"),": object containing the use case structure: request, response, setup, authorize and steps.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"return: a Herbs use case instance."))),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"const { Ok, Err, usecase, step, ifElse } = require('buchu')\nconst createItem = usecase('Create Item', {\n    ... \n})\n")),Object(s.b)("h2",{id:"running-a-use-case"},"Running a Use Case"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},".run(request)"),", where:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"request"),": object containing the request values.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"return: a result with an Ok or an Err."))),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"const request = { name: 'The best product' }\nconst response = await createProduct.run(request)\n")),Object(s.b)("h2",{id:"request"},"Request"),Object(s.b)("p",null,"First, a use case must define the request fields and its types. This information is used as metadata for Glues. It is also used to validate request payload before running the use case."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"{ request: fields }"),", where:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"fields"),": object containing field names and types.")),Object(s.b)("p",null,"During the use case execution it is possible to read the request value using ",Object(s.b)("inlineCode",{parentName:"p"},"ctx.req"),"."),Object(s.b)("p",null,"For example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"const updateItem = (injection) =>\n\n    usecase('Update Item', {\n        // Input/Request type validation \n        request: {\n            id: Number,\n            description: String,\n            isDone: Boolean,\n            position: Number\n        }\n        \n        'Retrieve the previous Item from the repository': step(async (ctx) => {\n            const req = ctx.req // request values\n            const ret = await repo.findByID(req.id)\n            ...\n        }),\n")),Object(s.b)("p",null,"As a validation example, when executed with an ",Object(s.b)("inlineCode",{parentName:"p"},"id")," that is a string the above use case returns is:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"const request = { id: '1' }\nconst ret = await usecase.run(request)\n\n// ret.err\n// { request: [{ id :[{ wrongType: \"Number\" }] }] }\n")),Object(s.b)("h2",{id:"response"},"Response"),Object(s.b)("p",null,"It is possible to define the response type as well. This information is used as metadata for Glues but it is not validated when running the use case."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"{ response: type }"),", where:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"type"),": response type.")),Object(s.b)("p",null,"A use case will run all the steps sequencially or until one of the steps return a ",Object(s.b)("inlineCode",{parentName:"p"},"Err"),". The ",Object(s.b)("a",{parentName:"p",href:"/docs/usecase/result"},"result")," of a use case is set by the result of the last step executed."),Object(s.b)("p",null,"The result value of a use case is set by ",Object(s.b)("inlineCode",{parentName:"p"},"ctx.ret"),". It is possible to set this variable any time at any step."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"const createProduct = injection =>\n    usecase('Create Product', {\n\n        request: {\n            name: String,\n            ...\n        }\n\n        'Check if the Product is valid': step(ctx => {\n            ...\n            if (!isValid) return Err(errors) // it stops the execution here and return a Err\n            return Ok() // go to the next step\n        }),\n\n        'Save the Product on the repository': step(async ctx => {\n            ...\n            ctx.ret = await repo.insert(product) // set the return value\n            return Ok() // last step and return Ok\n        }),\n")),Object(s.b)("h2",{id:"request-and-response-types"},"Request and Response Types"),Object(s.b)("p",null,"A field in a request or the response can be basic types from Javascript or entities:"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Number"),": double-precision 64-bit binary format IEEE 754 value"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"String"),": a UTF\u201016 character sequence"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Boolean"),": true or false"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Date"),": represents a single moment in time in a platform-independent format."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Object"),": the Object class represents one of JavaScript's data types."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Array"),": the Array class is a object that is used in the construction of arrays."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Entity"),": entity object represents an gotu base entity."),Object(s.b)("p",null,"For array of a certain type use: ",Object(s.b)("inlineCode",{parentName:"p"},"[type]"),". Ex: ",Object(s.b)("inlineCode",{parentName:"p"},"id: [Number]")," or ",Object(s.b)("inlineCode",{parentName:"p"},"items: [Item]"),"."),Object(s.b)("p",null,"The validation will not validatate for presence, so ",Object(s.b)("inlineCode",{parentName:"p"},"null")," and ",Object(s.b)("inlineCode",{parentName:"p"},"undefined")," are accepted as valid values."),Object(s.b)("h2",{id:"setup"},"Setup"),Object(s.b)("p",null,"Like a constructor, it is the first function to be executed before ",Object(s.b)("inlineCode",{parentName:"p"},"authorize")," and steps. Can be used to setup the dependency injection, for instance. "),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"{ setup: ctx => {} }"),", where:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"ctx"),": execution context - internal object visible throughout the use case and steps execution")),Object(s.b)("p",null,"For example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"const addOrUpdateItem = (injection) =>\n\n    usecase('Add or Update an Item on a to-do List', {\n\n        // Pre-run setup\n        setup: ctx => (ctx.di = Object.assign({}, dependency, injection)),\n    ...\n")),Object(s.b)("h2",{id:"authorize"},"Authorize"),Object(s.b)("p",null,"A function executed before any steps to make sure the user is authorized to run the use case."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"{ authorize: user => {} }"),", where:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"user"),": an object containing the user's information - this information will be audited.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"return: must return ",Object(s.b)("inlineCode",{parentName:"p"},"Ok")," for authorized and ",Object(s.b)("inlineCode",{parentName:"p"},"Err")," for unauthorized."))),Object(s.b)("p",null,"For example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"const addOrUpdateItem = (injection) =>\n\n    usecase('Add or Update an Item on a to-do List', {\n\n        // Authorization with Audit\n        authorize: user => (user.canAddOrUpdateList ? Ok() : Err()),\n    ...\n")),Object(s.b)("h2",{id:"context-ctx"},"Context (ctx)"),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"ctx")," variable is used to access (read and write) the state of the use case and its steps during its execution."),Object(s.b)("p",null,"For more details about context, check step context."),Object(s.b)("h2",{id:"audit"},"Audit"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"usecase.auditTrail"),": Retrieve the audit trail of a use case after its execution."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"const request = { name: 'The best product' }\nconst response = await createProduct.run(request)\nconsole.log(createProduct.auditTrail)\n")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},'process.env.HERBS_EXCEPTION = "audit"'),": Recommended for ",Object(s.b)("strong",{parentName:"p"},"production environments")," - Swallow and audit exceptions thrown during the use case execution. This will swallow the exceptions and return a Err on the step. If ",Object(s.b)("inlineCode",{parentName:"p"},"process.env.HERBS_EXCEPTION")," is not equal ",Object(s.b)("inlineCode",{parentName:"p"},"audit")," any exceptions thrown during a use case execution will be thrown."),Object(s.b)("p",null,"Result sample:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"{\n    // object type\n    type: 'use case',\n    \n    // use ase description\n    description: 'Add or Update an Item on a to-do List',\n    \n    // unique Id for each use case execution\n    transactionId: '9985fb70-f56d-466a-b466-e200d1d4848c', \n    \n    // total use case execution time in nanosecods\n    elapsedTime: 1981800n, \n\n    // the same user (object) provided on `usecase.authorize(user)`\n    user: { name: 'John', id: '923b8b9a', isAdmin: true },\n\n    // `usecase.authorize(user)` return\n    authorized: true,\n\n    // use case result\n    return: {\n        Ok: { item: { id: 100, name: 'Do not forget this', position: 9 } }\n    },\n\n    // steps\n    steps: [\n        { \n            // object type\n            type: 'step', \n            \n            // use ase description\n            description: 'Check if the Item is valid', \n            \n            // total step execution time in nanosecods\n            elapsedTime: 208201n , \n            \n            // step result\n            return: {} \n        },\n        ...\n    ]\n}\n")),Object(s.b)("h2",{id:"documentation"},"Documentation"),Object(s.b)("p",null,"// TODO"))}l.isMDXComponent=!0},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),l=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||s;return n?r.a.createElement(m,c(c({ref:t},o),{},{components:n})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<s;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);