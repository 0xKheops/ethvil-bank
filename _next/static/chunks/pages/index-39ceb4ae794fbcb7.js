(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7958)}])},6244:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),i=function(e){var t=e.children;return(0,r.jsx)("div",{className:"p-4",children:t})}},7958:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Oe}});var r=n(5893),i=n(3455),a=n(3471),u=n(1521),o=n(7294),s=n(8520),c=n.n(s),l=n(7044),d=n(821),f=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"min","type":"uint256"}],"name":"InsufficientBid","type":"error"},{"inputs":[],"name":"NothingToWithdraw","type":"error"},{"inputs":[{"internalType":"uint256","name":"endsAt","type":"uint256"}],"name":"ToEarlyToEnd","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"gameId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bid","type":"uint256"},{"indexed":false,"internalType":"address","name":"director","type":"address"}],"name":"Bid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"gameId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"director","type":"address"}],"name":"GameEnd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"gameId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bid","type":"uint256"},{"indexed":false,"internalType":"address","name":"director","type":"address"}],"name":"GameStart","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"bid","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currentBid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"director","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"directorRewardPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"duration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"end","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endsAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gameBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gameId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minBid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minBidIncreasePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minStartBid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerRewardPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"running","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_directorRewardPercent","type":"uint256"}],"name":"setDirectorRewardPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_duration","type":"uint256"}],"name":"setDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minBidIncreasePercent","type":"uint256"}],"name":"setMinBidIncreasePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ownerRewardPercent","type":"uint256"}],"name":"setOwnerRewardPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"withdrawable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'),p=n(6076);var m=n(9921);function y(e){return function(e,t,n){var r=(0,l.Ge)(n),i=r.library,a=r.account,u=r.chainId;return(0,o.useMemo)((function(){if(!e||!t||!i||!u)return null;try{return new p.CH(e,t,a?i.getSigner(a):i)}catch(n){return console.error("Failed To Get Contract",n),null}}),[e,t,i,u,a])}((0,m.L)().contract,f,e)}function v(e,t,n,r,i,a,u){try{var o=e[a](u),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(r,i)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function u(e){v(a,r,i,u,o,"next",e)}function o(e){v(a,r,i,u,o,"throw",e)}u(void 0)}))}}function b(e,t,n,r,i,a,u){try{var o=e[a](u),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(r,i)}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=function(e){var t,n=y(e),r=(0,l.Ge)(e),i=r.chainId,a=r.account,u=(0,d.ZP)("Status".concat(i).concat(a),(t=c().mark((function e(){var t,r,i,a,u,o,s,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=x,e.next=3,Promise.all([n.gameId(),n.director(),n.currentBid(),n.endsAt(),n.running(),n.minBid(),n.duration()]);case 3:return e.t1=e.sent,t=(0,e.t0)(e.t1,7),r=t[0],i=t[1],a=t[2],u=t[3],o=t[4],s=t[5],l=t[6],e.abrupt("return",{address:n.address,gameId:r,director:i,currentBid:a,endsAt:u,running:o,minBid:s,duration:l});case 13:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function u(e){b(a,r,i,u,o,"next",e)}function o(e){b(a,r,i,u,o,"throw",e)}u(void 0)}))})),s=u.data,f=u.error,p=u.mutate;return(0,o.useEffect)((function(){var e=n.filters.Bid(),t=n.filters.GameStart(),r=function(){return p()};return n.on(e,r),n.on(t,r),function(){n.off(e,r),n.off(t,r)}}),[n,p]),{loading:!s&&!f,error:f,status:s,mutate:p}};function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j,N,T=(j=(0,u.Z)((function(){var e=w("INFURA"),t=e.status,n=e.loading,r=e.error,i=e.mutate,a=function(e,t){var n=y(t),r=(0,l.Ge)().account,i=(0,l.Ge)(t).chainId,a=(0,d.ZP)(e?"bids-".concat(i,"-").concat(null===e||void 0===e?void 0:e.toHexString()):null,h(c().mark((function t(){var i,a,u;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.filters.Bid(e),t.next=3,n.queryFilter(i);case 3:return a=t.sent,t.next=6,Promise.all(a.map(h(c().mark((function t(n){var i,a,u,o,s;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.transactionHash,a=n.args,u=a.director,o=a.bid,t.next=4,n.getBlock();case 4:return s=t.sent.timestamp,t.abrupt("return",{transactionHash:i,gameId:e,director:u,bid:o,timestamp:s,isCurrentAccount:u===r});case 6:case"end":return t.stop()}}),t)})))));case 6:return u=t.sent.sort((function(e,t){return t.timestamp-e.timestamp})),t.abrupt("return",u);case 8:case"end":return t.stop()}}),t)})))),u=a.data,s=a.error,f=a.mutate;return(0,o.useEffect)((function(){var t=n.filters.Bid(e),r=function(){return f()};return n.on(t,r),function(){n.off(t,r)}}),[n,e,f]),{loading:!u&&!s,error:s,events:u,mutate:f}}(null===t||void 0===t?void 0:t.gameId,"INFURA"),u=a.events,s=a.loading,f=a.error,p=a.mutate;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}({},t,{mutate:(0,o.useCallback)((function(){return Promise.all([i((function(e){return e}),!0),p((function(e){return e}),!0)])}),[p,i]),events:u,loading:n||s,error:r||f})})),N=2,function(e){if(Array.isArray(e))return e}(j)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}return n}(j,N)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),O=T[0],P=T[1],S=function(){var e=P(),t=e.loading,n=e.error,u=e.events;return t||n||!u?null:(0,r.jsxs)("table",{className:"table-auto w-full text-left",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Transaction"}),(0,r.jsx)("th",{children:"Director"}),(0,r.jsx)("th",{className:"text-right",children:"Deposit"})]})}),(0,r.jsx)("tbody",{children:u.map((function(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(a.G,{type:"Transaction",address:e.transactionHash,children:new Date(1e3*e.timestamp).toLocaleString()})}),(0,r.jsx)("td",{className:e.isCurrentAccount?"text-green-500":"",children:(0,r.jsx)(a.G,{type:"Account",address:e.director,color:e.isCurrentAccount?"green":"white",withIcon:!0})}),(0,r.jsxs)("td",{className:"text-right font-bold",children:[(0,i.s)(e.bid)," ETH"]})]},e.timestamp)}))})]})},E=n(5553),I=n(7536),k=n(4231),M=n(412),D=function(e){try{return(0,E.fi)(e)}catch(t){}};function A(e,t,n,r,i,a,u){try{var o=e[a](u),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(r,i)}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){F(e,t,n[t])}))}return e}var B=function(e){return(0,o.useCallback)((t=c().mark((function t(n){var r,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.validate(n,{abortEarly:!1});case 3:return r=t.sent,t.abrupt("return",{values:r,errors:{}});case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",{values:{},errors:t.t0.inner.reduce((function(e,t){return G({},e,F({},t.path,{type:null!==(i=t.type)&&void 0!==i?i:"validation",message:t.message}))}),{})});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function u(e){A(a,r,i,u,o,"next",e)}function o(e){A(a,r,i,u,o,"throw",e)}u(void 0)}))}),[e]);var t},H=n(1856),C=n(6010);function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Z(e,t,n[t])}))}return e}function U(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var R=(0,o.forwardRef)((function(e,t){var n=e.symbol,i=e.className,a=e.error,u=U(e,["symbol","className","error"]);return(0,r.jsxs)("div",{className:(0,C.Z)("overflow-hidden pr-0 relative flex w-full form-input rounded  bg-gray-700",a?"border-red-500 focus-within:ring-red-500":"focus-within:border-green-500 focus-within:ring-green-500",i),children:[(0,r.jsx)("input",_({ref:t,className:" w-full flex-grow outline-none bg-gray-700 text-white text-right"},u)),(0,r.jsx)("div",{className:"flex flex-col justify-center",children:(0,r.jsx)("span",{className:"text-gray-400 mx-2 h-6 fill-current ",children:n})})]})}));R.displayName="CurrencyInput";var V=n(5769),L=n(3470);var q=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}((0,u.Z)((function(){var e,t,n=(0,l.Ge)(),r=n.library,i=n.chainId,a=(0,d.ZP)(["GasPrice",i],(function(){return r.getGasPrice()}),{refreshInterval:6e4}),u=a.data,o=a.error;return{loading:!u&&!o,error:null!==(t=null===o||void 0===o||null===(e=o.data)||void 0===e?void 0:e.message)&&void 0!==t?t:null===o||void 0===o?void 0:o.message,gasprice:u}})),2),K=q[0],W=q[1];function X(e,t,n,r,i,a,u){try{var o=e[a](u),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(r,i)}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var $=function(e,t){var n=(0,L.C)(),r=n.loading,a=n.error,u=n.value,s=W(),d=s.loading,f=s.error,p=s.gasprice,m=y(),v=J((0,V.Z)(e,200),1)[0],h=(0,o.useMemo)((function(){var e,n=t&&(null===(e=D(v))||void 0===e?void 0:e.gte(t));return{isValid:n,isReady:n&&!r&&!d}}),[v,r,d,t]),b=h.isValid,x=h.isReady,w=(0,o.useState)(!1),g=w[0],j=w[1],N=(0,o.useState)(),T=N[0],O=N[1],P=(0,o.useState)(0),S=P[0],I=P[1],k=(0,l.Ge)().library;(0,o.useEffect)((function(){if(!v)return I(0);var e,t=(e=c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.t0=I,e.next=5,null===m||void 0===m?void 0:m.estimateGas.bid({value:(0,E.fi)(v)});case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),O((0,M.e)(e.t2));case 12:j(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function u(e){X(a,r,i,u,o,"next",e)}function o(e){X(a,r,i,u,o,"throw",e)}u(void 0)}))});b?t():I(0)}),[v,null===m||void 0===m?void 0:m.estimateGas,b,k.blockNumber]);var A,F=(0,o.useMemo)((function(){if(!x)return{bidETH:"N/A",bidUSD:"N/A",estimateGasETH:"N/A",estimateGasUSD:"N/A",totalETH:"N/A",totalUSD:"N/A"};var e=(0,E.fi)(v),t="".concat((0,i.s)(e)," ETH"),n=Number((0,E.dF)(e))*u,r="".concat(n.toFixed(2)," USD"),a=p.mul(S),o="".concat((0,i.s)(a)," ETH"),s=Number((0,E.dF)(a))*u,c="".concat(s.toFixed(2)," USD"),l=e.add(a),d="".concat((0,i.s)(l)," ETH"),f=Number((0,E.dF)(l))*u;return{bidETH:t,bidUSD:r,estimateGasETH:o,estimateGasUSD:c,totalETH:d,totalUSD:"".concat(f.toFixed(2)," USD")}}),[u,v,S,p,x]);return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Y(e,t,n[t])}))}return e}({isValid:b,loading:g||d,error:null!==(A=null!==a&&void 0!==a?a:T)&&void 0!==A?A:f},F)},z=function(e){var t=e.bid,n=e.minBid,i=$(t,n);return(0,r.jsx)("div",{className:"",children:(0,r.jsx)("table",{className:"w-full table-auto font-bold text-left ",children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"pr-2 font-normal",children:"Deposit"}),(0,r.jsx)("td",{className:"px-2 text-right w-40",children:i.bidETH}),(0,r.jsx)("td",{className:"pl-2 text-right w-40 opacity-50",children:i.bidUSD})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"pr-2 font-normal",children:"Estimated gas"}),(0,r.jsx)("td",{className:"px-2 text-right",children:i.estimateGasETH}),(0,r.jsx)("td",{className:"pl-2 text-right opacity-50",children:i.estimateGasUSD})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"pr-2",children:"Total cost"}),(0,r.jsx)("td",{className:"px-2 text-right",children:i.totalETH}),(0,r.jsx)("td",{className:"pl-2 text-right opacity-50",children:i.totalUSD})]})]})})})};function Q(e,t,n,r,i,a,u){try{var o=e[a](u),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(r,i)}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ee(e,t,n[t])}))}return e}var ne=function(){var e,t,n=(0,o.useState)(!1),i=n[0],a=n[1],u=P().minBid,s=y(),l=(0,o.useMemo)((function(){return e=u,(0,k.Ry)({bid:(0,k.Z_)().required().test("is big number","Failed parse the value",(function(e){return!Number.isNaN(e)})).test("is sufficient","Value must be greater or equal than ".concat(e?(0,E.dF)(e):"null"),(function(t){var n;return null===(n=D(t))||void 0===n?void 0:n.gte(null!==e&&void 0!==e?e:0)}))});var e}),[u]),d=B(l),f=(0,I.cI)({resolver:d,mode:"onTouched",reValidateMode:"onChange"}),p=f.register,m=f.handleSubmit,v=f.formState,h=v.errors,b=v.isSubmitting,x=v.isValid,w=v.isValidating,g=f.reset,j=f.watch;(0,o.useEffect)((function(){u&&g({bid:(0,E.dF)(u)})}),[u,g]);var N,T,O=(0,o.useState)(),S=O[0],A=O[1],F=(N=c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(void 0),a(!0),e.prev=2,n=(0,E.fi)(t.bid),e.next=6,s.bid({value:n});case 6:return r=e.sent,e.next=9,r.wait();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),A((0,M.e)(e.t0));case 14:a(!1);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})),function(){var e=this,t=arguments;return new Promise((function(n,r){var i=N.apply(e,t);function a(e){Q(i,n,r,a,u,"next",e)}function u(e){Q(i,n,r,a,u,"throw",e)}a(void 0)}))}),G=(0,o.useMemo)((function(){return w||b||!x||i}),[b,x,w,i]),C=(0,o.useMemo)((function(){return b||i}),[b,i]),Z=j("bid");return(0,r.jsxs)("form",{onSubmit:m(F),children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsxs)("div",{className:"w-full flex space-x-5 overflow-hidden",children:[(0,r.jsx)(R,te({symbol:"ETH"},p("bid",{required:!0}),{id:"bid",name:"bid",autoComplete:"off",className:"flex-grow",disabled:C,error:Boolean(null===(e=h.bid)||void 0===e?void 0:e.message)})),(0,r.jsx)(H.K,{working:C,color:"green",type:"submit",disabled:G,children:"Deposit"})]}),(0,r.jsx)("div",{className:"text-red-500",children:null!==(T=null===(t=h.bid)||void 0===t?void 0:t.message)&&void 0!==T?T:S})]}),(0,r.jsx)("div",{className:"pt-4",children:(0,r.jsx)(z,{bid:Z,minBid:u})})]})},re=n(4341),ie=n(784),ae=function(e,t){var n=(0,o.useRef)(e);(0,o.useEffect)((function(){n.current=e}),[e]),(0,o.useEffect)((function(){if(null!==t){var e=setInterval((function(){return n.current()}),t);return function(){return clearInterval(e)}}}),[t])},ue=function(e){var t=e.target,n=(0,o.useState)(),i=n[0],a=n[1];return ae((function(){var e=new Date;if(t.valueOf()<e.valueOf())a("FINISHED");else{var n=(0,re.Z)({start:new Date,end:t});a((0,ie.Z)(n))}}),1e3),(0,r.jsx)("span",{className:"FINISHED"===i?"text-red-500":"text-green-500",children:i})},oe=function(){var e=P(),t=e.gameId,n=e.endsAt,a=e.currentBid,u=(0,o.useMemo)((function(){var e=n?new Date(1e3*n.toNumber()):null;return{target:e,isFinished:(null===e||void 0===e?void 0:e.valueOf())<Date.now()}}),[n]),s=u.target,c=u.isFinished;return t?(0,r.jsx)("table",{className:"table-auto w-full text-left",children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Current deposit"}),(0,r.jsxs)("td",{className:"text-right font-bold",children:[(0,i.s)(a)," ETH"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Time left"}),(0,r.jsx)("td",{className:"text-right font-bold",children:(0,r.jsx)(ue,{target:s})})]}),c&&(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:2,className:"text-green-500 text-center",children:"Next deposit will start a new game !"})})]})}):(0,r.jsx)(r.Fragment,{children:"Loading..."})},se=function(){var e=P().gameId;return e?(0,r.jsxs)(r.Fragment,{children:["Game N\xb0 ",e.toNumber()]}):(0,r.jsx)(r.Fragment,{children:"Loading..."})},ce=n(4930),le=n(6244),de=n(3738);function fe(e,t,n,r,i,a,u){try{var o=e[a](u),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(r,i)}var pe=function(){var e,t=y(),n=(0,l.Ge)().account,i=P(),a=i.running,u=i.endsAt,s=i.director,d=i.mutate,f=(0,o.useState)(!1),p=f[0],m=f[1],v=(0,o.useState)(),h=v[0],b=v[1],x=(0,o.useCallback)((e=c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(void 0),m(!0),e.prev=2,e.next=5,t.end();case 5:return n=e.sent,e.next=8,n.wait();case 8:return e.next=10,d();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),b((0,M.e)(e.t0));case 15:m(!1);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function u(e){fe(a,r,i,u,o,"next",e)}function o(e){fe(a,r,i,u,o,"throw",e)}u(void 0)}))}),[t,d]),w=(0,o.useState)(!1),g=w[0],j=w[1];return(0,o.useEffect)((function(){var e=setInterval((function(){j(n===s&&a&&1e3*(null===u||void 0===u?void 0:u.toNumber())<Date.now())}),1e3);return function(){return clearInterval(e)}})),g?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(de.N,{children:"Manual ending"}),(0,r.jsxs)(le.Z,{children:[(0,r.jsxs)("div",{children:["As the last director of this game, you may end it manually and receive your deposit right away. This action will cost some gas.",(0,r.jsx)("br",{}),"You may also wait for someone to start the next game to receive your funds automatically."]}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)(H.K,{onClick:x,working:p,color:"green",compact:!0,children:"End game"})}),(0,r.jsx)("div",{className:"text-red-500",children:h})]})]}):null},me=n(4216),ye=n(5955),ve=n(2544),he=n(9762),be=function(e){var t=e.children,n=(0,ye.O)(),i=n.isConnected,a=n.isWrongChain;return(0,me.Z)(),i?(0,r.jsx)(r.Fragment,{children:t}):a?(0,r.jsx)(he.F,{}):(0,r.jsx)(ve.o,{})},xe=function(e){var t=e.children,n=(0,m.L)();return P().loading?(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("div",{style:{borderTopColor:"transparent"},className:"inline-block w-12 h-12 border-4 border-yellow-500 border-solid rounded-full animate-spin"}),(0,r.jsxs)("div",{className:"text-yellow-500",children:["Connecting to ",n.fullname,"..."]})]}):(0,r.jsx)(r.Fragment,{children:t})},we=function(){return(0,r.jsx)(O,{children:(0,r.jsx)(xe,{children:(0,r.jsxs)(ce.$,{children:[(0,r.jsx)(de.N,{large:!0,children:(0,r.jsx)(se,{})}),(0,r.jsx)(le.Z,{children:(0,r.jsx)(oe,{})}),(0,r.jsx)(pe,{}),(0,r.jsx)(de.N,{children:"Become the new director"}),(0,r.jsx)(le.Z,{children:(0,r.jsx)(be,{children:(0,r.jsx)(ne,{})})}),(0,r.jsx)(de.N,{children:"Deposits"}),(0,r.jsx)(le.Z,{children:(0,r.jsx)(S,{})})]})})})},ge=n(9208),je=function(){var e=(0,m.L)(),t=w("INFURA").status,n=(0,o.useMemo)((function(){return t?(0,ge.Z)(0,1e3*t.duration.toNumber()):null}),[t]);return t?(0,r.jsxs)("div",{className:"text-left inline-block px-4",children:[(0,r.jsxs)("div",{className:"mb-4 text-sm text-yellow-500",children:["This application is a demo & portfolio app, therefore it is only connected to the test networks, at least for now. You may obtain free ETH for ",e.fullname," from a"," ",(0,r.jsxs)("a",{className:"underline hover:text-yellow-400",href:"https://duckduckgo.com/?q=".concat(e.name,"+faucet"),children:[e.name," faucet"]}),"."]}),(0,r.jsxs)("div",{children:["Contract ",(0,r.jsx)(a.G,{type:"Account",address:t.address})," :"]}),(0,r.jsxs)("ul",{className:"list-disc pl-5",children:[(0,r.jsx)("li",{children:"Deposit at least 10% more than the previous director to become the director of the bank."}),(0,r.jsxs)("li",{children:["If another person becomes the director within ",n,", you will be transfered your deposit back + 5% bonus. Owner of the contract also gets 1%."]}),(0,r.jsxs)("li",{children:["If noone becomes a director after you within ",n,", you will get about 95% of your deposit back."]})]})]}):null},Ne=n(9706),Te=n(560),Oe=function(){return(0,r.jsx)(Te.Z,{title:"ETHvil Bank",children:(0,r.jsx)("div",{className:"my-4 space-y-8",children:(0,r.jsx)(Ne.V,{children:(0,r.jsxs)(K,{children:[(0,r.jsx)(je,{}),(0,r.jsx)(we,{})]})})})})}}},function(e){e.O(0,[445,267,837,792,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);