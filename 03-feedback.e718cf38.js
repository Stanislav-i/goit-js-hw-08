function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=l||f||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var r,o,i,a,u,l,f=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,f=t,a=e.apply(i,n)}function E(e){return f=e,u=setTimeout(h,t),c?b(e):a}function x(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-f>=i}function h(){var e=m();if(x(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-l);return s?v(n,i-(e-f)):n}(e))}function w(e){return u=void 0,p&&r?b(e):(r=o=void 0,a)}function S(){var e=m(),n=x(e);if(r=arguments,o=this,l=e,n){if(void 0===u)return E(l);if(s)return u=setTimeout(h,t),b(l)}return void 0===u&&(u=setTimeout(h,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==u&&clearTimeout(u),f=0,r=l=o=u=void 0},S.flush=function(){return void 0===u?a:w(m())},S}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const b={formEl:document.querySelector("form"),inputEl:document.querySelector("input"),textAreaEl:document.querySelector("textarea")};b.formEl.addEventListener("input",e(t)((function(){E.email=b.inputEl.value,E.message=b.textAreaEl.value,((e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}})("feedback-form-state",E)}),500)),window.addEventListener("load",(function(){const e=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}})("feedback-form-state");if(void 0===e)return b.inputEl.value="",void(b.textAreaEl.value="");b.inputEl.value=e.email,b.textAreaEl.value=e.message})),b.formEl.addEventListener("submit",(function(e){if(e.preventDefault(),""===b.inputEl.value||""===b.textAreaEl.value)return alert("Please fill in all the fields!");E.email=b.inputEl.value,E.message=b.textAreaEl.value,console.log(E),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));let E={email:"",message:""};
//# sourceMappingURL=03-feedback.e718cf38.js.map
