(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{19:function(e,c,t){},38:function(e,c,t){},40:function(e,c,t){},41:function(e,c,t){"use strict";t.r(c);var a=t(2),n=t.n(a),s=t(13),r=t.n(s),i=(t(19),t(3)),o=t(14),l=t.n(o),j=(t(38),t(0));var m=function(e){var c=e.name,t=e.image,a=e.symbol,n=e.price,s=e.volume,r=e.priceChange,i=e.marketCap;return Object(j.jsx)("div",{className:"coin-container",children:Object(j.jsxs)("div",{className:"coin-row",children:[Object(j.jsxs)("div",{className:"coin",children:[Object(j.jsx)("img",{src:t,alt:"coin-image"}),Object(j.jsx)("h1",{children:c}),Object(j.jsx)("p",{className:"coin-symbol",children:a})]}),Object(j.jsxs)("div",{className:"coin-data",children:[Object(j.jsxs)("p",{className:"coin-price",children:["\u20b9 ",n.toLocaleString()]}),Object(j.jsx)("p",{className:"coin-volume",children:s.toLocaleString()}),r<0?Object(j.jsxs)("p",{className:"coin-percent red",children:[r.toFixed(2),"%"]}):Object(j.jsxs)("p",{className:"coin-percent green",children:[r.toFixed(2),"%"]}),Object(j.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: \u20b9 ",i.toLocaleString()]})]})]})})};t(40);var p=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],n=c[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],p=r[1],d=Object(a.useState)(!0),h=Object(i.a)(d,2),b=h[0],u=h[1];Object(a.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){n(e.data),u(!1)})).catch((function(e){return console.log(e.message)}))}),[]);var O=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{children:"The Crypto Tracker"})}),Object(j.jsxs)("div",{className:"coin-app",children:[Object(j.jsxs)("div",{className:"coin-search",children:[Object(j.jsx)("h1",{className:"coin-text",children:"Search A Coin"}),Object(j.jsx)("form",{children:Object(j.jsx)("input",{type:"text",className:"coin-input",placeholder:"Enter Coin",onChange:function(e){p(e.target.value)}})})]}),b?Object(j.jsx)("div",{className:"lds-hourglass"}):O.map((function(e){return Object(j.jsx)(m,{name:e.name,image:e.image,symbol:e.symbol,volume:e.total_volume,price:e.current_price,priceChange:e.price_change_percentage_24h,marketCap:e.market_cap},e.id)}))]})]})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.36f9a4ba.chunk.js.map