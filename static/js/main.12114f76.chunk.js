(this.webpackJsonpdirectory=this.webpackJsonpdirectory||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),a=n(12),s=n.n(a),i=n(16),l=n(13),o=n(14),d=n(18),h=n(17);var j=function(e){return Object(c.jsx)("div",{className:"container".concat(e.fluid?"-fluid":""),children:e.children})};var u=function(e){return Object(c.jsx)("div",{className:"row".concat(e.fluid?"-fluid":""),children:e.children})};var m=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(c.jsx)("div",{className:t,children:e.children})};var b=function(e){return Object(c.jsxs)("div",{className:"card text-center",children:[Object(c.jsx)("div",{className:"card-header",children:Object(c.jsx)("h2",{children:e.heading})}),Object(c.jsx)("div",{className:"card-body",children:e.children})]})};var O=function(e){return Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For an Employee",id:"search"})})};var p=function(e){return Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Image"}),Object(c.jsx)("th",{onClick:e.handleOnClick,children:"Name"}),Object(c.jsx)("th",{children:"Email"}),Object(c.jsx)("th",{children:"Phone Number"}),Object(c.jsx)("th",{children:"DOB"})]})}),Object(c.jsx)("tbody",{children:e.employees.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("img",{alt:e.name.first+" "+e.name.last,src:e.picture.thumbnail})}),Object(c.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.cell}),Object(c.jsx)("td",{children:e.dob.date.slice(0,10)})]},e.id.value)}))})]})},f=n(15),x=n.n(f),v=function(){return x.a.get("https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=200&nat=us")},y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],search:""},e.handleInputChange=function(t){t.preventDefault();var n=t.target.value,c=e.originalEmployees.filter((function(e){return"".concat(e.name.first," ").concat(e.name.last).toLowerCase().includes(n.toLowerCase())}));e.setState({employees:c,search:n})},e.handleOnClick=function(){var t=Object(i.a)(e.state.employees).sort((function(e,t){return e.name.first.localeCompare(t.name.first)}));e.originalEmployees.sort((function(e,t){return e.name.first.localeCompare(t.name.first)})),e.setState({employees:t})},e}return Object(o.a)(n,[{key:"apiCall",value:function(){var e=this;v().then((function(t){e.originalEmployees=t.data.results,e.setState({employees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){this.apiCall()}},{key:"render",value:function(){return Object(c.jsx)(j,{children:Object(c.jsxs)(u,{children:[Object(c.jsx)(m,{size:"md-4",children:Object(c.jsx)(b,{heading:"Employee Directory",children:Object(c.jsx)(O,{value:this.state.search,handleInputChange:this.handleInputChange})})}),Object(c.jsx)(m,{size:"md-8",children:Object(c.jsx)(b,{children:Object(c.jsx)(p,{employees:this.state.employees,handleOnClick:this.handleOnClick})})})]})})}}]),n}(r.Component);var g=function(){return Object(c.jsx)(y,{})};s.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.12114f76.chunk.js.map