(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],[,,,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var H_React_App_All_To_do_to_do_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Calculator_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(22),_Calculator_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_Calculator_css__WEBPACK_IMPORTED_MODULE_2__),Calculator=function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(H_React_App_All_To_do_to_do_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),calc=_useState2[0],setCalc=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(H_React_App_All_To_do_to_do_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),result=_useState4[0],setResult=_useState4[1],ops=["/","*","-","+","."],number=function(){for(var e=[],t=function(t){e.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{key:t,onClick:function(){return click(t.toString())}},t))},_=1;_<10;_++)t(_);return e},click=function click(but){ops.includes(but)&&""===calc||ops.includes(but)&&ops.includes(calc.slice(-1))||(setCalc(calc+but),ops.includes(but)||setResult(eval(calc+but)))},clear=function(){setCalc(""),setResult("")},del=function(){if(""!==calc){var e=calc.slice(0,-1);setCalc(e)}};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calApp"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"display"},calc||"0"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"func"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"operator"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return click("/")}},"/"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return click("*")}},"*"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return click("-")}},"-"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return click("+")}},"+"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:del},"Del")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"number"},number(),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return click("0")}},"0")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"result"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return click(".")}},"."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:clear},"AC"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return setCalc(result)}},"=")))))};__webpack_exports__.a=Calculator},,,,,function(e,t,_){e.exports=_(27)},,,,,function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){"use strict";_.r(t);var a=_(1),c=_.n(a),n=_(10),l=_.n(n),r=(_(21),_(11)),u=_(8),o=_(3),E=(_(23),function(e){var t=Object(a.useState)(""),_=Object(o.a)(t,2),n=_[0],l=_[1];return c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit({id:Math.floor(1e4*Math.random()),text:n}),l("")}},c.a.createElement("input",{type:"text",className:"todo-Input",placeholder:"Add a Todo",value:n,onChange:function(e){l(e.target.value)}}),c.a.createElement("button",{className:"todo-button"},"Add Todo"))}),i=_(13),s=_(12),d=(_(24),function(e){var t=e.todos,_=e.removeTodo,n=e.updateTodo,l=Object(a.useState)({}),r=Object(o.a)(l,2),u=r[0],d=r[1];return u.id?c.a.createElement(E,{onSubmit:function(e){n(u.id,e),d({})}}):t.map((function(e,t){return c.a.createElement("div",{key:t,className:"first"},c.a.createElement("div",{key:e.id,className:"text"},e.text),c.a.createElement("div",{className:"icon"},c.a.createElement(s.a,{onClick:function(){return _(e.id)},className:"delete-icon"}),c.a.createElement(i.a,{className:"Edit-icon",onClick:function(){return d({id:e.id,value:e.text})}})))}))});_(25);var m=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),_=t[0],n=t[1];return c.a.createElement("div",{className:"background-App"},c.a.createElement("div",{className:"background"},c.a.createElement("div",null,c.a.createElement(E,{onSubmit:function(e){if(""!==e.text){var t=[e].concat(Object(u.a)(_));n(t)}}}),c.a.createElement(d,{todos:_,removeTodo:function(e){var t=Object(u.a)(_).filter((function(t){return t.id!==e}));n(t)},updateTodo:function(e,t){""!==t.text&&n((function(_){return _.map((function(_){return _.id===e?t:_}))}))}}))))},f=_(15),O=_(14),b=_(2),M=(_(26),function(){var e=Object(b.f)();return c.a.createElement("div",null,c.a.createElement(O.a,{className:"tod",onClick:function(){return e("/todo")}}),c.a.createElement(f.a,{className:"cal",onClick:function(){return e("/calculator")}}))}),p=_(6);var D=function(){return c.a.createElement(p.a,null,c.a.createElement("nav",{className:"nav"},c.a.createElement(p.b,{to:"/"},"Home"),c.a.createElement(p.b,{to:"/todo"},"Todo"),c.a.createElement(p.b,{to:"/calculator"},"Calculator")),c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/",element:c.a.createElement(M,null)}),c.a.createElement(b.a,{path:"/todo",element:c.a.createElement(m,null)}),c.a.createElement(b.a,{path:"/calculator",element:c.a.createElement(r.a,null)})))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null)),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.1cf98916.chunk.js.map