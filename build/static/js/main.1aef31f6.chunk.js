(this.webpackJsonppinterest=this.webpackJsonppinterest||[]).push([[0],{204:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(21),i=a.n(n),o=a(207),d=a(211),l=(a(131),a(215)),r=a(216),j=a(98),b=a(121),u=a(49),O=a(125),h=a(209),m=a(43),x=a(210),p=a(70),k=a(208),f=a(212),y=a(213),g=a(214),v=a(14);var N=function(e){var t=e.taskT,a=e.i,c=e.editTask,s=e.showModal,n=e.setIdRemove,i=k.a.Paragraph;return Object(v.jsxs)("div",{className:"task",children:[Object(v.jsx)(i,{className:"input_edit",editable:{onChange:function(e){return c(e,a+1)}},copyable:Object(p.a)({tooltips:!1,icon:[Object(v.jsx)(f.a,{},"copy-icon"),Object(v.jsx)(y.a,{},"copied-icon")]},"tooltips",["click here","you clicked!!"]),children:Object(v.jsx)("span",{className:"text_task",children:t.text})}),Object(v.jsx)(g.a,{className:"removeTask",onClick:function(){s(),n(t.id)},type:"primary",children:" "})]},a)};var T=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),i=Object(u.a)(n,2),o=i[0],d=i[1],l=Object(c.useState)("Do you want delete this task from list?"),r=Object(u.a)(l,2),p=r[0],k=(r[1],Object(c.useState)("")),f=Object(u.a)(k,2),y=f[0],g=f[1],T=Object(c.useState)(0),C=Object(u.a)(T,2),S=C[0],w=C[1],I=Object(c.useState)([{id:1,text:"this my first task 1111"},{id:2,text:"this my second task 222"},{id:3,text:"this my third task 33333333"},{id:4,text:"this my third task 444"},{id:5,text:"this my third task 555555"}]),_=Object(u.a)(I,2),D=_[0],M=_[1],R=function(){M(D.filter((function(e){return e.id!==S}))),d(!0),setTimeout((function(){s(!1),d(!1),B()}),1e3)},A=function(e,t){M(D.map((function(a){return a.id===t?Object(j.a)(Object(j.a)({},a),{},{text:e}):a})))},B=function(){O.a.info({message:"Remove Task",description:"Delete Task Done."})},H=function(){O.a.info({message:"Add Task",description:y})},J=function(){s(!0)};return Object(v.jsxs)("div",{className:"todo",children:[Object(v.jsxs)("div",{className:"add_task",children:[Object(v.jsx)(h.a,{placeholder:"enter your Task..",allowClear:!0,onChange:function(e){g(e.target.value)},value:y}),Object(v.jsx)("button",{className:"btn_added",onClick:function(){M((function(e){return[].concat(Object(b.a)(e),[{id:e.length+1,text:y}])})),H(),g(null)},children:Object(v.jsx)(m.a,{type:"primary",classNam:"",loading:0,children:"Add"})})]}),Object(v.jsx)("div",{className:"wrapper_tasks",children:D.map((function(e,t){return Object(v.jsx)(N,{taskT:e,i:t,editTask:A,removeTask:R,setIdRemove:w,showModal:J})}))}),Object(v.jsx)(x.a,{title:"Note",visible:a,onOk:R,confirmLoading:o,onCancel:function(){console.log("Clicked cancel button"),s(!1)},children:Object(v.jsx)("p",{children:p})})]})},C=o.a.Header,S=o.a.Content,w=(o.a.Footer,o.a.Sider);var I=function(){return Object(v.jsxs)("div",{children:[Object(v.jsxs)(o.a,{className:"",children:[Object(v.jsxs)(w,{className:"Layout",breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){console.log(e)},onCollapse:function(e,t){console.log(e,t)},children:[Object(v.jsx)("div",{className:"logo"}),Object(v.jsxs)(d.a,{className:"",theme:"dark",mode:"inline",defaultSelectedKeys:["4"],children:[Object(v.jsx)(d.a.Item,{className:"",icon:Object(v.jsx)(l.a,{}),children:"My ToDO"},"1"),Object(v.jsx)(d.a.Item,{icon:Object(v.jsx)(r.a,{}),children:"done"},"2")]})]}),Object(v.jsxs)(o.a,{children:[Object(v.jsx)(C,{className:"site-layout-sub-header-background",style:{padding:0}}),Object(v.jsx)(S,{style:{margin:"24px 16px 0"},children:Object(v.jsx)("div",{className:"site-layout-background content",style:{padding:24,minHeight:360},children:Object(v.jsx)(T,{})})})]})]}),","]})};a(204);i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(I,{})}),document.getElementById("root"))}},[[205,1,2]]]);
//# sourceMappingURL=main.1aef31f6.chunk.js.map