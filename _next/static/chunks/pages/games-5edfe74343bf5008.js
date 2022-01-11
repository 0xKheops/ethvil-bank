(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{7603:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games",function(){return r(8868)}])},8868:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(5893),i=r(8687),s=r(1521),a=r(821),o=r(7294),c=r(9921);var l,d,u=(l=(0,s.Z)((function(){var e=(0,c.L)(),t=e.subgraph,r=e.chainId,n=(0,a.ZP)("games-history-".concat(r),(function(){return(0,i.request)(t,"{\n    games(orderBy:id, orderDirection:desc) {\n      id\n      start\n      end\n      director\n      bids(orderBy:timestamp, orderDirection:desc, first:1) {\n        id\n        amount\n        director\n        timestamp\n      }\n    }\n  }")})),s=n.data,l=void 0===s?{games:[]}:s,d=n.error,u=n.mutate,h=(0,o.useMemo)((function(){return{loading:!l&&!d,games:l.games.map((function(e){return{id:e.id,director:e.director,end:e.end,amount:e.bids[0].amount}}))}}),[l,d]),m=h.loading,x=h.games;return{loading:m,error:d,games:x,mutate:u}})),d=2,function(e){if(Array.isArray(e))return e}(l)||function(e,t){var r=[],n=!0,i=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){i=!0,s=c}finally{try{n||null==o.return||o.return()}finally{if(i)throw s}}return r}(l,d)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),h=u[0],m=u[1],x=r(1163),p=r(3455),f=r(3471),g=function(){return(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{style:{borderTopColor:"transparent"},className:"inline-block w-12 h-12 border-4 border-yellow-500 border-solid rounded-full animate-spin"}),(0,n.jsx)("div",{className:"text-yellow-500",children:"Connecting to Ethereum..."})]})},y=function(){var e=m(),t=e.games,r=e.loading,i=e.error,s=(0,x.useRouter)(),a=(0,o.useCallback)((function(e){return function(){s.push("/games/".concat(e))}}),[s]);return r?(0,n.jsx)(g,{}):i?(0,n.jsx)("div",{children:i.toString()}):(0,n.jsxs)("table",{className:"table-auto w-full",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"pt-4 py-2 pl-4 text-left",children:"Game"}),(0,n.jsx)("th",{className:"pt-4 py-2 text-right",children:"End"}),(0,n.jsx)("th",{className:"pt-4 py-2 text-right",children:"Amount (ETH)"}),(0,n.jsx)("th",{className:"pt-4 py-2 pr-4 text-right",children:"Winner"})]})}),(0,n.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){var t=e.id,r=e.end,i=e.director,s=e.amount;return(0,n.jsxs)("tr",{onClick:a(t),className:"cursor-pointer hover:bg-gray-600/80",children:[(0,n.jsx)("td",{className:"py-2 pl-4 text-left",children:t}),(0,n.jsx)("td",{className:"py-2 text-right",children:r?new Date(1e3*Number(r)).toLocaleString("default",{dateStyle:"short"}):"In progress"}),(0,n.jsx)("td",{className:"py-2 text-right",children:(0,p.s)(s)}),(0,n.jsx)("td",{className:"py-2 pr-4 text-right",children:(0,n.jsx)(f.G,{type:"Account",address:i,withIcon:!0})})]},t)}))})]})},j=function(){return(0,n.jsx)(h,{children:(0,n.jsx)(y,{})})},v=r(560),N=r(4930),b=r(3738),w=function(){return(0,n.jsx)(v.Z,{title:"All games - ETHvil Bank",children:(0,n.jsxs)(N.$,{children:[(0,n.jsx)(b.N,{large:!0,children:"Games History"}),(0,n.jsx)(j,{})]})})}}},function(e){e.O(0,[445,357,687,772,774,888,179],(function(){return t=7603,e(e.s=t);var t}));var t=e.O();_N_E=t}]);