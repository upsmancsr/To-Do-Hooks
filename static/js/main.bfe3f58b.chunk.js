(window["webpackJsonpto-do-hooks"]=window["webpackJsonpto-do-hooks"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),c=n.n(a),i=(n(11),n(2)),u=n(5),l=n(1),s=n.n(l);n(14);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=Object(r.createContext)(null),d=[{id:s()(),task:"Learn React",complete:!0},{id:s()(),task:"Learn Firebase",complete:!0},{id:s()(),task:"Learn GraphQL",complete:!1}],E=function(e,t){switch(t.type){case"DO_TODO":return e.map((function(e){return e.id===t.id?O({},e,{complete:!0}):e}));case"UNDO_TODO":return e.map((function(e){return e.id===t.id?O({},e,{complete:!1}):e}));case"ADD_TODO":return e.concat({task:t.task,id:t.id,complete:!1});default:throw new Error}},f=function(e,t){switch(t.type){case"SHOW_ALL":return"ALL";case"SHOW_COMPLETE":return"COMPLETE";case"SHOW_INCOMPLETE":return"INCOMPLETE";default:throw new Error}},b=function(e){var t=e.dispatch;return o.a.createElement("div",{className:"FilterMenu"},o.a.createElement("button",{type:"button",onClick:function(){t({type:"SHOW_ALL"})}},"Show All"),o.a.createElement("button",{type:"button",onClick:function(){t({type:"SHOW_COMPLETE"})}},"Show Complete"),o.a.createElement("button",{type:"button",onClick:function(){t({type:"SHOW_INCOMPLETE"})}},"Show Incomplete"))},h=function(e){var t=e.todos;return o.a.createElement("div",{className:"ToDoList"},o.a.createElement("h3",null,"To Do Items"),o.a.createElement("div",{className:"list"},t.map((function(e){return o.a.createElement(w,{key:e.id,todo:e})}))))},w=function(e){var t=e.todo,n=Object(r.useContext)(m);return o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",checked:t.complete,onChange:function(){return n({type:t.complete?"UNDO_TODO":"DO_TODO",id:t.id})}}),t.task)},y=function(){var e=Object(r.useContext)(m),t=Object(r.useState)(""),n=Object(i.a)(t,2),a=n[0],c=n[1];return o.a.createElement("form",{className:"AddTodo",onSubmit:function(t){a&&e({type:"ADD_TODO",task:a,id:s()()}),c(""),t.preventDefault()}},o.a.createElement("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)}}),o.a.createElement("button",{type:"submit"},"Add Todo"))},v=function(){var e=Object(r.useReducer)(E,d),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useReducer)(f,"ALL"),u=Object(i.a)(c,2),l=u[0],s=u[1],p=n.filter((function(e){return"ALL"===l||(!("COMPLETE"!==l||!e.complete)||"INCOMPLETE"===l&&!e.complete)}));return o.a.createElement(m.Provider,{value:a},o.a.createElement("div",{className:"App"},o.a.createElement(b,{dispatch:s}),o.a.createElement(h,{todos:p}),o.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,n){e.exports=n(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.bfe3f58b.chunk.js.map