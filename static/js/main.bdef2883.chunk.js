(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(4),r=n.n(s),o=n(3),a=(n(9),n(0)),i=function(e){var t=e.monster;return Object(a.jsxs)("div",{className:"card-container",children:[Object(a.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2")}),Object(a.jsxs)("h2",{children:[" ",t.name," "]}),Object(a.jsxs)("p",{children:[" ",t.email," "]})]})},u=(n(11),function(e){return e.map((function(e){return Object(a.jsx)(i,{monster:e},e.id)}))}),j=function(e){var t=e.monsters;return Object(a.jsx)("div",{className:"card-list",children:u(t)})},l=(n(12),function(e){var t=e.placeholder,n=e.value,c=e.onChange;return Object(a.jsx)("input",{className:"search",type:"search",placeholder:t,value:n,onChange:c})}),h=(n(13),function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then(s)}),[]);var r=Object(c.useState)(""),i=Object(o.a)(r,2),u=i[0],h=i[1],d=n.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Monsters Rolodex"}),Object(a.jsx)(l,{placeholder:"Search Monsters",value:u,onChange:function(e){return h(e.target.value)}}),Object(a.jsx)(j,{monsters:d})]})});n(14);r.a.render(Object(a.jsx)(h,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.bdef2883.chunk.js.map