(this["webpackJsonpsecret-santa"]=this["webpackJsonpsecret-santa"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n(3),i=n(1),a=n(5),s=n(0),l=["Rob","Adelle","Karaline","Nick","Kristina","Steven","Mark"],b=[["Rob","Adelle"],["Karaline","Nick"],["Steven","Kristina"],["Rob","Mark"],["Adelle","Kristina"],["Karaline","Steven"],["Nick","Rob"],["Kristina","Adelle"],["Steven","Karaline"],["Mark","Nick"]];function o(){var e,t=Object(a.shuffle)(Array.from(l)),n=[];return l.forEach((function(r){for(var i=function(i){var a=t[i];if(!b.some((function(e){return e.includes(r)&&e.includes(a)}))&&r!==a){var s=t.splice(t.indexOf(a),1),l=Object(c.a)(s,1);e=l[0];var o=[r,e];return n.push(o),"break"}},a=0;a<t.length;a++){if("break"===i(a))break}})),n.length!==l.length?o():n}function u(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){n&&0!==n.length||r(o())}),[n]),n&&0!==n.length&&n.length===l.length?Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Secret Santa"}),Object(s.jsx)("ul",{children:n.map((function(e){return Object(s.jsxs)("li",{children:[Object(s.jsx)("b",{children:e[0]})," gives to ",Object(s.jsx)("b",{children:e[1]})]},"".concat(e[0]," - ").concat(e[1]))}))})]}):Object(s.jsx)("div",{children:"'Loading...'"})}var j=document.getElementById("root");Object(r.render)(Object(s.jsx)(u,{}),j)}},[[13,1,2]]]);
//# sourceMappingURL=main.8363ee16.chunk.js.map