(this["webpackJsonpreact-whiteboard"]=this["webpackJsonpreact-whiteboard"]||[]).push([[0],{10:function(e,t,n){e.exports=n.p+"static/media/highlighter.1b602999.svg"},11:function(e,t,n){e.exports=n.p+"static/media/eraser.aaf752f0.svg"},15:function(e,t,n){e.exports=n(23)},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(8),o=n.n(a),l=n(3),i=n(9),u=n.n(i),d=n(10),s=n.n(d),f=n(11),h=n.n(f),b=n(1),m=n(2);function p(){var e=Object(b.a)(["\n  width: 1.75rem;\n  height: 1.75rem;\n  border: none;\n  cursor: pointer;\n\n  :disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"]);return p=function(){return e},e}function v(){var e=Object(b.a)(["\n  width: 100%;\n  object-fit: contain;\n"]);return v=function(){return e},e}function g(){var e=Object(b.a)(["\n  height: 5rem;\n  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.2);\n  padding: 0 1.5rem;\n  display: flex;\n  align-items: center;\n  background-color: #282c34;\n"]);return g=function(){return e},e}function E(){var e=Object(b.a)(["\n  display: flex;\n  align-items: center; \n  margin-right: 8rem;\n"]);return E=function(){return e},e}function j(){var e=Object(b.a)(["\n  width: ","px;\n  height: ","px;\n  border-radius: 50%;\n  background-color: ",";\n"]);return j=function(){return e},e}function w(){var e=Object(b.a)(["\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  margin-right: 0.5rem;\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  :hover:not(:disabled) {\n    background-color: #cbcbcb;\n  }\n\n  :disabled {\n    cursor: not-allowed;\n  }\n"]);return w=function(){return e},e}var O=m.a.button(w(),(function(e){return e.selected?"#cbcbcb":"#fafafa"})),S=m.a.div(j(),(function(e){return 3*e.width}),(function(e){return 3*e.width}),(function(e){var t=e.disabled,n=e.selectedColor;return t?"#cfcfcf":n})),T=m.a.div(E()),k=m.a.header(g()),C=m.a.img(v()),x=m.a.input(p()),y="pen",W=1,F=3,M=5,R=[{icon:u.a,name:y},{icon:s.a,name:"highlighter"},{icon:h.a,name:"eraser"}],J=function(e){var t=e.selected,n=e.handleSelect;return c.a.createElement(T,null,R.map((function(e){return c.a.createElement(O,{key:e.name,selected:e.name===t,onClick:(r=e.name,function(){return n(r)})},c.a.createElement(C,{src:e.icon,alt:"icon"}));var r})))},D=function(e){var t=e.selected,n=e.handleSelect,r=e.selectedTool,a=e.selectedColor,o=r===y;return c.a.createElement(T,null,[W,F,M].map((function(e){return c.a.createElement(O,{key:"brush-".concat(e),selected:o&&e===t,onClick:(r=e,function(){o&&n(r)}),disabled:!o,title:"".concat(e,"px")},c.a.createElement(S,{width:e,disabled:!o,selectedColor:a}));var r})))},N=function(e){var t=e.selected,n=e.handleSelect,r="eraser"===e.selectedTool;return c.a.createElement(T,null,c.a.createElement(x,{type:"color",value:t,onChange:function(e){var t=e.target.value;n(t)},disabled:r}))},P=function(e){var t=e.selectedTool,n=e.handleToolSelect,r=e.selectedWidth,a=e.handleWidthSelect,o=e.selectedColor,l=e.handleColorSelect;return c.a.createElement(k,null,c.a.createElement(J,{selected:t,handleSelect:n}),c.a.createElement(D,{selected:r,handleSelect:a,selectedTool:t,selectedColor:o}),c.a.createElement(N,{selected:o,handleSelect:l,selectedTool:t}))};function V(){var e=Object(b.a)(["\n  cursor: ",";\n"]);return V=function(){return e},e}var X=m.a.canvas(V(),(function(e){return function(e){switch(e){case y:return'url("https://i.ibb.co/7VF7KZN/pencil.png") 16 24, auto';case"highlighter":return'url("https://i.ibb.co/zmVd8rc/marker.png") 8 16, auto';case"eraser":return'url("https://i.ibb.co/JnTDTQd/p-blank.png"), auto';default:return"auto"}}(e.selectedTool)})),Y=function(e){var t=e.selectedTool,n=e.selectedWidth,a=e.selectedColor,o=Object(r.useRef)(null),l=Object(r.useRef)(null),i=Object(r.useRef)(!1);Object(r.useEffect)((function(){o.current.width=window.innerWidth,o.current.height=window.innerHeight-80;var e=o.current.getContext("2d");l.current=e}),[]);var u=function(e,r){var c,o;l.current&&("eraser"===t?(c=e,o=r,l.current.clearRect(c,o,15,15)):"highlighter"===t?function(e,t){var n=l.current;n.globalCompositeOperation="multiply",n.lineTo(e,t),n.strokeStyle=a,n.lineWidth=6,n.stroke()}(e,r):function(e,t){var r=l.current;r.globalCompositeOperation="source-over",r.lineTo(e,t),r.strokeStyle=a,r.lineWidth=n,r.stroke()}(e,r))};return c.a.createElement(X,{ref:o,onMouseMove:function(e){var t=e.nativeEvent,n=t.offsetX,r=t.offsetY;i.current&&u(n,r)},onMouseDown:function(e){var t=e.nativeEvent;if(2!==e.button){var n=t.offsetX,r=t.offsetY;i.current=!0,l.current.beginPath(),l.current.moveTo(n,r)}},onMouseUp:function(){l.current.closePath(),i.current=!1},selectedTool:t})},z=function(){var e=Object(r.useState)(y),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(W),i=Object(l.a)(o,2),u=i[0],d=i[1],s=Object(r.useState)("#000000"),f=Object(l.a)(s,2),h=f[0],b=f[1],m=Object(r.useState)("#FFFF00"),p=Object(l.a)(m,2),v=p[0],g=p[1],E=n===y?h:v;return c.a.createElement("div",null,c.a.createElement(P,{selectedTool:n,handleToolSelect:a,selectedWidth:u,handleWidthSelect:d,selectedColor:E,handleColorSelect:function(e){n===y?b(e):g(e)}}),c.a.createElement(Y,{selectedTool:n,selectedWidth:u,selectedColor:E}))};var A=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(z,null))};n(22);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n.p+"static/media/pen.133d5714.svg"}},[[15,1,2]]]);
//# sourceMappingURL=main.839ad7e4.chunk.js.map