"use strict";(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[9064],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=l,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2867:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],o={id:"validation",title:"Validations",sidebar_label:"Validations",slug:"/entity/validation"},s=void 0,p={unversionedId:"entity/validation",id:"entity/validation",title:"Validations",description:"The values of an entity fields can be validated against the fields types or values validations.",source:"@site/docs/entity/validation.md",sourceDirName:"entity",slug:"/entity/validation",permalink:"/docs/entity/validation",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/entity/validation.md",tags:[],version:"current",frontMatter:{id:"validation",title:"Validations",sidebar_label:"Validations",slug:"/entity/validation"},sidebar:"sidebar",previous:{title:"Features",permalink:"/docs/entity/features"},next:{title:"What's glues",permalink:"/docs/glues"}},u=[{value:"Presence",id:"presence",children:[],level:2},{value:"Allow Null",id:"allow-null",children:[],level:2},{value:"presence vs allowNull",id:"presence-vs-allownull",children:[],level:2},{value:"Contains",id:"contains",children:[],level:2},{value:"Length",id:"length",children:[],level:2},{value:"Numericality",id:"numericality",children:[],level:2},{value:"Datetime",id:"datetime",children:[],level:2},{value:"E-mail",id:"e-mail",children:[],level:2},{value:"Format",id:"format",children:[],level:2},{value:"URL",id:"url",children:[],level:2},{value:"Null Values",id:"null-values",children:[{value:"Custom Validation",id:"custom-validation",children:[],level:3}],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The values of an entity fields can be validated against the fields types or values validations."),(0,r.kt)("h2",{id:"presence"},"Presence"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"presence")," (boolean) - Validates that the specified value is not empty."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        ...\n        password: field(String, {\n            validation: { presence: true }\n        })\n    })\n\nconst user = new User()\nuser.password = ''\nuser.isValid() // false\nuser.errors // {\"password\":[{\"cantBeEmpty\":true}]}\n")),(0,r.kt)("h2",{id:"allow-null"},"Allow Null"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"allowNull")," (boolean) - Validates that the specified value is not ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const User = \n    entity(\'User\', {\n        ...\n        password: field(String, {\n            validation: { allowNull: false }\n        })\n    })\n\nconst user = new User()\nuser.password = null\nuser.isValid() // false\nuser.errors // {"password":[{"cantBeNull":true}]}\n')),(0,r.kt)("h2",{id:"presence-vs-allownull"},"presence vs allowNull"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"presence: true"),(0,r.kt)("th",{parentName:"tr",align:null},"allowNull: false"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"'Text'"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"123"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"' '"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"''"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{}"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,r.kt)("h2",{id:"contains"},"Contains"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"contains")," -  The contains validator is useful for validating allowance or restriction in certain values.\nIt checks that the given value exists in the target given by the ",(0,r.kt)("strong",{parentName:"p"},"allowed")," or  ",(0,r.kt)("strong",{parentName:"p"},"notAllowed")," option."),(0,r.kt)("p",null,"You can specify the validator as a list, string or as an object (in which case the keys of the object are used)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"allowed option examples:")),(0,r.kt)("p",null,"Array Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const TShirt = \n    entity(\'TShirt\', {\n        ...\n        size: field(String, {\n            validation: { contains: { allowed: ["small", "medium", "large"] } } \n        })\n    })\n\nconst tshirt = new TShirt()\ntshirt.size = \'xlarge\'\ntshirt.isValid() // false\ntshirt.errors // {"size":[{"notContains":["small","medium","large"]}]}\n')),(0,r.kt)("p",null,"String Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const Post = \n    entity(\'Post\', {\n        ...\n        body: field(String, {\n            validation: { contains: { allowed: "lorem ipsum dolor" } }\n        })\n    })\n\nconst post = new Post()\npost.body = \'hello\'\npost.isValid() // false\npost.errors // {"body":[{"notContains":"lorem ipsum dolor"}]}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"notAllowed option examples:")),(0,r.kt)("p",null,"Array Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const TShirt = \n    entity(\'TShirt\', {\n        ...\n        size: field(String, {\n            validation: { contains: { notAllowed: ["xsmall", "xlarge"] } } \n        })\n    })\n\nconst tshirt = new TShirt()\ntshirt.size = \'xlarge\'\ntshirt.isValid() // false\ntshirt.errors // {"size":[{"contains":["xsmall","xlarge"]}]}\n')),(0,r.kt)("p",null,"String Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const Post = \n    entity(\'Post\', {\n        ...\n        body: field(String, {\n            validation: { contains: { notAllowed: "hello world" } }\n        })\n    })\n\nconst post = new Post()\npost.body = \'hello\'\npost.isValid() // false\npost.errors // {"body":[{"contains":"hello world"}]}\n')),(0,r.kt)("h2",{id:"length"},"Length"),(0,r.kt)("p",null,"Validates the length of the value. "),(0,r.kt)("p",null,"It is possible to specify length constraints in different ways:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"minimum")," (number) - The value cannot have less than the specified length"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"maximum")," (number) - The value cannot have more than the specified length"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"is")," (number) - The value length must be equal to the given length"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const Post = \n    entity(\'Post\', {\n        title: field(String, {\n            validation: { length: { is: 10 } }\n        }),\n        body: field(String, {\n            validation: { length: { minimum: 3, maximum: 140 } }\n        })\n    })\n\nconst post = new Post()\npost.title = \'hello\'\npost.body = \'hi\'\npost.isValid() // false\npost.errors // {"title":[{"wrongLength":10}],"body":[{"isTooShort":3}]}\n')),(0,r.kt)("h2",{id:"numericality"},"Numericality"),(0,r.kt)("p",null,"Validates constraints to acceptable numeric values. "),(0,r.kt)("p",null,"The value must be a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"Number"),". "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"equalTo")," (number) - Specifies the value must be equal to the supplied value. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"greaterThan")," (number) - Specifies the value must be greater than the supplied value. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"greaterThanOrEqualTo")," (number) - Specifies the value must be greater than or equal to the supplied value."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lessThan")," (number) - Specifies the value must be less than the supplied value."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lessThanOrEqualTo")," (number) - Specifies the value must be less than or equal to the supplied value. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onlyInteger")," (boolean) - To specify that only integral numbers are allowed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const Order =\n    entity(\'Order\', {\n        price: field(Number, {\n            validation: { numericality: { greaterThan: 1 } }\n        })\n    })\n\nconst order = new Order()\norder.price = 0\norder.isValid() // false\norder.errors // {"price":[{"notGreaterThan":1}]}\n')),(0,r.kt)("h2",{id:"datetime"},"Datetime"),(0,r.kt)("p",null,"Validates constraints to acceptable date and time values."),(0,r.kt)("p",null,"It must be a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," time JS object. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"{ type: Date }")," to validate if the value is a valid JS ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," object."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"before")," (date) - A date must be before this value to be valid "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"after")," (date) - A date must be after this value to be valid "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"isAt")," (date) - A date must be equal to value to be valid "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Order =\n    entity('Order', {\n        deliveredAt: field(Date, {\n            validation: { datetime: { before: new Date('2010-01-01') } }\n        })\n    })\n\nconst order = new Order()\norder.deliveredAt = new Date('2011-01-01')\norder.isValid() // false\norder.errors // {\"deliveredAt\":[{\"tooLate\":\"2010-01-01T00:00:00.000Z\"}]}\n")),(0,r.kt)("h2",{id:"e-mail"},"E-mail"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"email")," (bool) - The email validator attempts to make sure the input is a valid email. Validating emails is tricky business due to the complex rules of email address formatting."),(0,r.kt)("p",null,"For example ",(0,r.kt)("strong",{parentName:"p"},"john.doe@gmail")," is a perfectly valid email but it's most likely just the case that John has forgotten to write .com at the end."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Customer =\n    entity('Customer', {\n        email: field(String, {\n            validation: { email: true } \n        })\n    })\n\nconst customer = new Customer()\ncustomer.email = 'just@notright@example.com'\ncustomer.isValid() // false\ncustomer.errors // {\"email\":[{\"invalidEmail\":true}]}\n")),(0,r.kt)("h2",{id:"format"},"Format"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"format")," (regex) - The format validator will validate a value against a regular expression of your choosing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Customer =\n    entity('Customer', {\n        ssn: field(String, {\n            validation: {\n                format: /^([0-9]{3}[-]*[0-9]{2}[-]*[0-9]{4})*$/ // or you can use new RegExp('...') \n            }\n        })\n    })\n\nconst customer = new Customer()\ncustomer.ssn = '1234'\ncustomer.isValid() // false\ncustomer.errors  // {\"ssn\":[{\"invalidFormat\":true}]}\n")),(0,r.kt)("h2",{id:"url"},"URL"),(0,r.kt)("p",null," The URL validator ensures that the input is a valid URL. Validating URLs are pretty tricky but this validator is inspired on a gist that can be found ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/dperini/729294"},(0,r.kt)("inlineCode",{parentName:"a"},"here")),". "),(0,r.kt)("p",null," The following options are supported: "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"schemes")," - (array of string) A list of schemes to allow. If you want to support any scheme you can use a regexp here (for example ",(0,r.kt)("strong",{parentName:"p"},'[".+"]'),"). The default value is ",(0,r.kt)("strong",{parentName:"p"},'["http", "https"]'),". "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"allowLocal")," (boolean) - A boolean that if true allows local hostnames such as ",(0,r.kt)("strong",{parentName:"p"},"10.0.1.1")," or localhost. The default is ",(0,r.kt)("strong",{parentName:"p"},"false"),". "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"allowDataUrl")," (boolean) - A boolean that if true allows data URLs as defined in ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc2397"},(0,r.kt)("inlineCode",{parentName:"a"},"RFC 2397")),". The default is ",(0,r.kt)("strong",{parentName:"p"},"false")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Customer =\n    entity('Customer', {\n        website: field(String, {\n            validation: { url: true }\n        }),\n        ftp: field(String, {\n            validation: { url: { schemes: ['ftp'] } }\n        })\n    })\n\nconst customer = new Customer()\ncustomer.website = 'google.com'\ncustomer.ftp = 'http://google.com'\ncustomer.isValid() // false\ncustomer.errors  // {\"website\":[{\"invalidURL\":true}],\"ftp\":[{\"invalidURL\":true}]}\n")),(0,r.kt)("h2",{id:"null-values"},"Null Values"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"length"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"numericality"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime")," validators won't validate a value if it's ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,r.kt)("p",null,"To ensure that your value is not null, use ",(0,r.kt)("inlineCode",{parentName:"p"},"allowNull: false")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"presence: true"),"."),(0,r.kt)("h3",{id:"custom-validation"},"Custom Validation"),(0,r.kt)("p",null,"For custom validation Gotu uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/suma"},"Suma")," library under the hood. It has no message defined, only error codes."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"{ validation: ... }")," to specify a valid Suma validation (sorry) on the field definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const User =\n    entity('User', {\n        ...\n        password: field(String, validation: {\n            presence: true,\n            length: { minimum: 6 }\n        }),\n        cardNumber: field(String, validation: {\n          custom: { invalidCardNumber: (value) => value.length === 16 }\n        })\n    })\n\nconst user = new User()\nuser.password = '1234'\nuser.cardNumber = '1234456'\nuser.validate()\nuser.errors // [{ password: [ { isTooShort: 6 } ] , { \"invalidCardNumber\": true }]\nuser.isValid // false\n")),(0,r.kt)("p",null,"You can ignore id field validation using ",(0,r.kt)("inlineCode",{parentName:"p"},"isValid({exceptIDs: true})"),". Example: Imagine that your id should not be null, but sometimes, in an insertion case, the ID only exists after an insertion in the database, so you can validate the hole entity, except the id field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\nconst Plan =\n    entity('Plan', {\n        ...\n        myId: id(Number),\n        monthlyCost: field(Number),\n    })\n\nconst plan = new Plan()\nplan.plan.myId = '123'\nplan.plan.monthlyCost = 500\nplan.isValid({exceptIDs: true}) // true\n\nplan.isValid() // false\nplan.errors // { myId: [ wrongType: 'Number' ] }\n\n")))}m.isMDXComponent=!0}}]);