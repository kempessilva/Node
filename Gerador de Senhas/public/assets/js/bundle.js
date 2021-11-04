(()=>{var n={122:(n,e,t)=>{(e=n.exports=t(645)(!1)).push([n.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);",""]),e.push([n.id,":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\n.senha-gerada{\n  font-size: 2em;\n  color: var(--primary-color);\n  margin: 40px 0;\n}\n\ninput[type=\"checkbox\"]{\n  width: 15px;\n  height: 15px;\n}\n\nbutton{\n  display: block;\n  margin-top: 30px;\n  margin-bottom: 15px;\n  font-size: 1em;\n}",""])},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t,r,o,a=n[1]||"",i=n[3];if(!i)return a;if(e&&"function"==typeof btoa){var s=(t=i,r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(o," */")),c=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot).concat(n," */")}));return[a].concat(c).concat([s]).join("\n")}return[a].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<n.length;i++){var s=n[i];null!=s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),e.push(s))}},e}},788:(n,e,t)=>{var r=t(122);"string"==typeof r&&(r=[[n.id,r,""]]);t(379)(r,{insert:"head",singleton:!1}),r.locals&&(n.exports=r.locals)},379:(n,e,t)=>{"use strict";var r,o={},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function i(n,e){for(var t=[],r={},o=0;o<n.length;o++){var a=n[o],i=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):t.push(r[i]={id:i,parts:[s]})}return t}function s(n,e){for(var t=0;t<n.length;t++){var r=n[t],a=o[r.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(m(r.parts[i],e))}else{for(var s=[];i<r.parts.length;i++)s.push(m(r.parts[i],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function c(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var r=t.nc;r&&(n.attributes.nonce=r)}if(Object.keys(n.attributes).forEach((function(t){e.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(e);else{var o=a(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var u,l=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function d(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o&&n.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,h=0;function m(n,e){var t,r,o;if(e.singleton){var a=h++;t=f||(f=c(e)),r=p.bind(null,t,a,!1),o=p.bind(null,t,a,!0)}else t=c(e),r=d.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=i(n,e);return s(t,e),function(n){for(var r=[],a=0;a<t.length;a++){var c=t[a],u=o[c.id];u&&(u.refs--,r.push(u))}n&&s(i(n,e),e);for(var l=0;l<r.length;l++){var p=r[l];if(0===p.refs){for(var d=0;d<p.parts.length;d++)p.parts[d]();delete o[p.id]}}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}(()=>{"use strict";var n=function(n,e){return Math.floor(Math.random()*(e-n)+n)},e=",.;~^[]{}!@#$%()_+=-",r=function(){return e[n(0,e.length)]},o=document.querySelector(".senha-gerada"),a=document.querySelector(".qtd-number"),i=document.querySelector(".chk-maiusculas"),s=document.querySelector(".chk-minusculas"),c=document.querySelector(".chk-numeros"),u=document.querySelector(".chk-simbolos"),l=document.querySelector(".gerar-senha");t(788),l.addEventListener("click",(function(){o.innerHTML=function(e,t,o,a,i){var s=[];e=Number(e);for(var c=0;c<e;c++)t&&s.push(String.fromCharCode(n(65,91))),o&&s.push(String.fromCharCode(n(97,123))),a&&s.push(String.fromCharCode(n(48,58))),i&&s.push(r());return s.sort((function(){return Math.random()-.5})),s.join("").slice(0,e)}(a.value,i.checked,s.checked,c.checked,u.checked)||"Nada selecionado."}))})()})();
//# sourceMappingURL=bundle.js.map