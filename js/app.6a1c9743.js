(function(t){function a(a){for(var e,l,r=a[0],o=a[1],c=a[2],u=0,f=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&f.push(i[l][0]),i[l]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);v&&v(a);while(f.length)f.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,a=0;a<n.length;a++){for(var s=n[a],e=!0,r=1;r<s.length;r++){var o=s[r];0!==i[o]&&(e=!1)}e&&(n.splice(a--,1),t=l(l.s=s[0]))}return t}var e={},i={app:0},n=[];function l(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=e,l.d=function(t,a,s){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)l.d(s,e,function(a){return t[a]}.bind(null,e));return s},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var v=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"034f":function(t,a,s){"use strict";var e=s("85ec"),i=s.n(e);i.a},"201c":function(t,a,s){},3407:function(t,a,s){"use strict";var e=s("201c"),i=s.n(e);i.a},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("Navbar"),s("router-view")],1)},n=[],l=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bg-primary navbar-dark text-white"},[s("div",{staticClass:"container"},[s("nav",{staticClass:"navbar navbar-expand-lg px-0 navbar-dark"},[s("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[s("span",{staticClass:"fas fa-home"}),t._v(" Home")]),s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"}},[s("span",{staticClass:"navbar-toggler-icon"})]),s("div",{staticClass:"collapse navbar-collapse justify-content-center",attrs:{id:"collapsibleNavbar"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link text-white",attrs:{href:"/about"}},[s("span",{staticClass:"fas fa-address-book"}),t._v(" About")])])]),s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link text-white",attrs:{href:"/skills"}},[s("span",{staticClass:"fas fa-terminal"}),t._v(" Skills")])])]),s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link text-white",attrs:{href:"/portfolio"}},[s("span",{staticClass:"fas fa-briefcase"}),t._v(" Portfolio")])])])])])])])}],o={name:"Navbar"},c=o,v=s("2877"),u=Object(v["a"])(c,l,r,!1,null,null,null),f=u.exports,p={name:"app",components:{Navbar:f}},d=p,b=(s("034f"),Object(v["a"])(d,i,n,!1,null,null,null)),h=b.exports,m=s("5f5b"),_=(s("f9e3"),s("4989"),s("1157"),s("2dd8"),s("15f5"),s("7051"),s("8c4f")),C=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"jumbotron bg-light mb-0 radius-0 text-center"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-12"},[s("h1",{staticClass:"display-4 mb-1"},[t._v("John M. Craig Jr.")]),s("span",{staticClass:"lead"},[s("i",{staticClass:"fas fa-database"}),t._v(" Full-stack Web Developer | "),s("i",{staticClass:"fas fa-microchip"}),t._v(" Software Developer ")])])])])]),s("div",{staticClass:"container py-5"},[s("div",{staticStyle:{padding:"0.5rem"}},[s("h2",[t._v("Hello, and welcome to my site!")]),s("p",[t._v("It isn't much to look at, but it is responsive (using Bootstrap 4.1 & Vue.js), fast, and gets the to the point.")]),s("p",[t._v("Use the navigation links to find what you are looking for.")]),s("p",[t._v(" I would suggest if you are looking for my list of projects to use the "),s("a",{staticClass:"btn btn-info btn-sm",attrs:{href:"/portfolio"}},[t._v("Portfolio")]),t._v(" page. ")]),s("p",[t._v("Or maybe the tools I use with the "),s("a",{staticClass:"btn btn-info btn-sm",attrs:{href:"/skills"}},[t._v("Skills")]),t._v(" page.")]),s("p",[t._v(" Or if you want to contact me for work or hire, go to the "),s("a",{staticClass:"btn btn-info btn-sm",attrs:{href:"/about"}},[t._v("About")]),t._v(" page. ")])])])])}],y={name:"Home"},w=y,S=(s("3407"),Object(v["a"])(w,C,g,!1,null,"21a7dbe8",null)),j=S.exports,k=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"jumbotron bg-light mb-0 radius-0 text-center"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-12"},[s("h1",{staticClass:"display-4 mb-1"},[t._v("The About & Contact Info Page")]),s("span",{staticClass:"lead"},[s("i",{staticClass:"fas fa-file-signature"}),t._v(" Get to know about this site or contact me for work/info")])])])])]),s("div",{staticClass:"container"},[s("div",{staticStyle:{padding:"0.5rem"}},[s("h3",[s("span",{},[s("i",{staticClass:"fas fa-id-card"})]),t._v(" Contect Info")]),s("p",[s("i",{staticClass:"fas fa-envelope"}),t._v(" Email: john.craig@ccalearn.tech")]),s("p",[s("i",{staticClass:"fas fa-mobile-alt"}),t._v(" Phone: +1 (770) 466-0792 "),s("em",[t._v("Only accepting calls between 9:00am to 6:00pm EST (-05:30 GMT)")])]),s("p",[s("i",{staticClass:"fab fa-linkedin"}),t._v(" LinkedIn: "),s("a",{staticClass:"btn btn-sm btn-primary my-1 my-sm-0 card-link",attrs:{href:"https://www.linkedin.com/in/johnmcraigjr"}},[s("span",{staticClass:"fab fa-linkedin"}),t._v(" LinkedIn Profile")])]),s("p",[s("i",{staticClass:"fas fa-file-code"}),t._v(" Website: "),s("a",{staticClass:"btn btn-sm btn-primary my-1 my-sm-0 card-link",attrs:{href:"https://johnmcraig.github.io"}},[s("span",{staticClass:"fas fa-file-code"}),t._v(" Personal Website")])]),s("hr"),s("br"),s("h3",[t._v("About this Site")]),s("p",[t._v("The following tools were used to create this portfolio site:")]),s("ul",[s("li",[t._v("Vue.js")]),s("li",[t._v("BoostrapVue & Boostrap 4.1")]),s("li",[t._v("HTML 5")]),s("li",[t._v("CSS3")]),s("li",[t._v("Hosted on Github pages")])]),s("br")])])])}],x={name:"About"},A=x,O=Object(v["a"])(A,k,P,!1,null,null,null),T=O.exports,M=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"jumbotron jumbotron-fliud bg-light mb-0 radius-0 text-center"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-12"},[s("h1",{staticClass:"display-4 mb-1"},[t._v("Skills & Technology")]),s("span",{staticClass:"lead"},[s("i",{staticClass:"fas fa-laptop-code"}),t._v(" A list of tools and tech that I am skilled with. A Resume of sorts")])])])])]),s("div",{staticClass:"container py-5"},[s("div",{staticStyle:{padding:"0.5rem"}},[s("h2",[s("span",{staticClass:"fas fa-code"}),t._v(" Programming Languages")]),s("p",[s("ul",[s("li",[t._v("C#")]),s("li",[t._v("JavaScript / EMC6")]),s("li",[t._v("Typescript")]),s("li",[t._v("SQL")]),s("li",[t._v("Python")])])]),s("hr"),s("h2",[s("span",{staticClass:"fas fa-terminal"}),t._v(" Web Technologies & Fundamentals")]),s("p",[s("ul",[s("li",[t._v("HTML5")]),s("li",[t._v("CSS3, Sass, Less")]),s("li",[t._v("Webpack & Babel ")]),s("li",[t._v("W3C Standards")])])]),s("hr"),s("h2",[s("span",{staticClass:"fas fa-terminal"}),t._v(" Frameworks & Libraries")]),s("p",[s("ul",[s("li",[t._v("ASP.Net Core 2.0+ (Currently on 3.1)")]),s("li",[t._v("Angular versions 4+")]),s("li",[t._v("React.js")]),s("li",[t._v("Vue.js version 2.5+")]),s("li",[t._v("Node.js")]),s("li",[t._v("Django")]),s("li",[t._v("Blazor server side with Razor components")])])]),s("hr"),s("h2",[s("span",{staticClass:"fas fa-database"}),t._v(" Databases")]),s("p",[s("ul",[s("li",[t._v("Microsoft SQL Server 2016/2018")]),s("li",[t._v("PostgreSQL and pgAdmin")]),s("li",[t._v("SQLite")]),s("li",[t._v("MySQL")])])]),s("hr"),s("h2",[s("span",{staticClass:"fas fa-server"}),t._v(" Cloud Platforms")]),s("p",[s("ul",[s("li",[t._v("Azure")]),s("li",[t._v("AWS")]),s("li",[t._v("Google Cloud")])])]),s("hr"),s("h2",[s("span",{staticClass:"fas fa-laptop-code"}),t._v(" Tools")]),s("p",[s("ul",[s("li",[t._v("Visual Studio 2015/2017/2019")]),s("li",[t._v("VS Code")]),s("li",[t._v("Project Rider (JetBrains)")]),s("li",[t._v("Postman")])])])])]),s("br")])}],L={name:"Skills"},$=L,G=Object(v["a"])($,M,E,!1,null,null,null),I=G.exports,N=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"jumbotron bg-light mb-0 radius-0 text-center"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-12"},[s("h1",{staticClass:"display-4 mb-1"},[t._v("Portfolio Projects")]),s("span",{staticClass:"lead"},[s("i",{staticClass:"fas fa-briefcase"}),t._v(" A small sample of projects from "),s("i",{staticClass:"fab fa-github"}),t._v(" Github")])])])])]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v("Data Entry System | © 2019")]),s("hr"),s("p",{staticClass:"card-text"},[t._v(" A web application as a data entry system to manage a list of employees using form validation, repository pattern, RESTful Api architecture, Api Versioning, Swagger for endpoint testing, and xUnit testing suite. Built with an assortment of the following technologies: ")]),s("ul",[s("li",[t._v("Angular v8 for the UI")]),s("li",[t._v("Asp.Net Core 2.2 for the back-end Api")]),s("li",[t._v("PostgreSQL Database")])]),s("a",{staticClass:"btn btn-md btn-primary my-1 my-sm-0 card-link",attrs:{href:"https://github.com/johnmcraig/employee-list"}},[s("span",{staticClass:"fab fa-github"}),t._v(" Go to Github Project Page")])])]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v("Meeting Events | © 2019 - 2020")]),s("hr"),s("p",{staticClass:"card-text"},[t._v(" A full-stack web application that allows users to schedule meetings, events, or gatherings and update those interested with email alerts. Sort of a Meetup.com alternative. This application demonstrates clean architecture using the single responsibility method via CQRS and Mediator pattern, events updated via SignalR, and a UI built with React. Built with the following: ")]),s("ul",[s("li",[t._v("React.js 16.5 for the UI")]),s("li",[t._v("Asp.Net Core 3.1 for the back-end Api")]),s("li",[t._v("PostgreSQL Database")])]),s("a",{staticClass:"btn btn-md btn-primary my-1 my-sm-0 card-link",attrs:{href:"https://github.com/johnmcraig/meeting-events"}},[s("span",{staticClass:"fab fa-github"}),t._v(" Go to Github Project Page")])])]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v("Blogging Engine | © 2018")]),s("hr"),s("p",{staticClass:"card-text"},[t._v("A blog engine as a CMS that implements TinyMC library to render and write text as posts. These posts are stored in a SQL database and displayed by recent date. The following tech was used to create the application:")]),s("ul",[s("li",[t._v("ASP.Net Core 2.0")]),s("li",[t._v("TinyMC Library: "),s("a",{attrs:{href:"https://www.tiny.cloud/"}},[t._v("TinyMC website")])]),s("li",[t._v("MS SQL Server")])]),s("a",{staticClass:"btn btn-md btn-primary my-1 my-sm-0 card-link",attrs:{href:"https://github.com/johnmcraig/blog-engine"}},[s("span",{staticClass:"fab fa-github"}),t._v(" Go to Github Project Page")])])])])}],B={name:"Portfolio"},R=B,D=(s("e3ca"),Object(v["a"])(R,N,Q,!1,null,"71c9f8d0",null)),H=D.exports;e["default"].use(_["a"]);var V=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:T},{path:"/skills",name:"Skills",component:I},{path:"/portfolio",name:"Portfolio",component:H},{path:"*",component:j}],W=new _["a"]({mode:"history",routes:V});e["default"].use(m["a"]),e["default"].config.productionTip=!1,new e["default"]({router:W,render:function(t){return t(h)}}).$mount("#app")},"85ec":function(t,a,s){},b775:function(t,a,s){},e3ca:function(t,a,s){"use strict";var e=s("b775"),i=s.n(e);i.a}});
//# sourceMappingURL=app.6a1c9743.js.map