(this.webpackJsonpcantor=this.webpackJsonpcantor||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/euro.2ce17e11.svg"},,,function(e,t,n){e.exports=n.p+"static/media/zloty.cf322526.svg"},,,,,,,,,,function(e,t,n){e.exports=n(38)},,,,,function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(23),n(24),n(1)),u="ADD_TRANSACTION",l="REMOVE_TRANSACTION",s="CHANGE_EXCHANGE_RATE",m=function(e){return r.a.createElement("div",null,Math.round(e.amountEuro*(e.exchangeRate?e.exchangeRate:1)*100)/100)},p=n(5),E=n.n(p),d=n(8),f=n.n(d),h=(n(30),function(e){return r.a.createElement("div",{className:"columns"},!!e.name&&r.a.createElement("div",{className:"column information-name-container"},e.name),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"information-value-container"},r.a.createElement(m,{amountEuro:e.amountEuro}),r.a.createElement("img",{src:E.a,alt:"Euro",width:35,height:35}))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"information-value-container"},r.a.createElement(m,{amountEuro:e.amountEuro,exchangeRate:e.exchangeRate}),r.a.createElement("img",{src:f.a,alt:"Pln",width:35,height:35}))))}),g=(n(31),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.transactions.list})),n=Object(i.c)((function(e){return e.transactions.exchangeRate}));return r.a.createElement("div",null,t.map((function(t){return r.a.createElement("div",{key:t.id,className:"transaction-container notification is-primary"},r.a.createElement("button",{className:"delete is-warning",onClick:function(){return n=t.id,e({type:l,item:n});var n}}),r.a.createElement(h,{name:t.name,amountEuro:t.amountEuro,exchangeRate:n}))})))}),b=n(6),v=n(9),O=n(16),j=n.n(O);n(33);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var N="",w=1,T=function(){var e=Object(i.b)(),t=Object(a.useReducer)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t)}),{nameTransactionInput:N,amountEuroTransactionInput:w}),n=Object(v.a)(t,2),c=n[0],o=n[1],l=function(e){return o(Object(b.a)({},e.target.name,e.target.value))},s=""===c.nameTransactionInput||c.amountEuroTransactionInput<=0;return r.a.createElement("article",{className:"panel is-warning add-transaction-container"},r.a.createElement("p",{className:"panel-heading"},"Add New Transaction"),r.a.createElement("div",{className:"add-transaction-bar-container"},r.a.createElement("input",{className:"input",type:"text",name:"nameTransactionInput",value:c.nameTransactionInput,placeholder:"Transaction name",onChange:l}),r.a.createElement("div",{className:"add-transaction-euro-container"},r.a.createElement("input",{className:"input",type:"number",name:"amountEuroTransactionInput",value:c.amountEuroTransactionInput,placeholder:"amountEuroTransactionInput",onChange:l}),r.a.createElement("img",{src:E.a,alt:"",width:35,height:35})),r.a.createElement("button",{className:"button is-warning",onClick:function(){var t={id:j()(),name:c.nameTransactionInput,amountEuro:parseFloat(c.amountEuroTransactionInput)};e({type:u,item:t}),o({nameTransactionInput:N,amountEuroTransactionInput:w})},disabled:s},"Add")))},x=(n(34),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.transactions.exchangeRate})),n=Object(a.useState)(t),c=Object(v.a)(n,2),o=c[0],u=c[1];return r.a.createElement("article",{className:"panel is-warning"},r.a.createElement("p",{className:"panel-heading"},"Change The PLN Exchange Rate"),r.a.createElement("div",{className:"exchange-rate-bar-container"},r.a.createElement("div",{className:"exchange-rate-container"},r.a.createElement("div",{className:"exchange-rate-euro-container"},r.a.createElement("span",null,"1"),r.a.createElement("img",{src:E.a,alt:"",width:35,height:35}),r.a.createElement("span",null,"=")),r.a.createElement("div",{className:"exchange-rate-input-container"},r.a.createElement("input",{className:"input",type:"number",name:"amountEuroTransactionInput",value:o,placeholder:"amountEuroTransactionInput",onChange:function(e){return u(e.target.value)}}),r.a.createElement("img",{src:f.a,alt:"",width:35,height:35}))),r.a.createElement("button",{className:"button is-warning",onClick:function(){return e({type:s,item:o})}},"Change")))}),R=(n(35),function(){var e=Object(i.c)((function(e){return e.transactions.list})),t=Object(i.c)((function(e){return e.transactions.exchangeRate})),n=e.sort((function(e,t){return e.amountEuro<t.amountEuro?1:-1})).slice(0,3);return r.a.createElement("div",null,r.a.createElement("article",{className:"panel is-primary"},r.a.createElement("p",{className:"panel-heading"},"Top 3 Transaction"),r.a.createElement("div",{className:"top-transactions-list"},n.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(h,{name:e.name,amountEuro:e.amountEuro,exchangeRate:t}))})))))}),I=(n(36),function(){var e=Object(i.c)((function(e){return e.transactions.list})),t=Object(i.c)((function(e){return e.transactions.exchangeRate})),n=e.reduce((function(e,t){return e+t.amountEuro}),0);return r.a.createElement("div",{className:"sum-container"},r.a.createElement("div",null,r.a.createElement("article",{className:"panel is-primary"},r.a.createElement("p",{className:"panel-heading"},"Total Sum Transaction"),r.a.createElement("div",{className:"panel-block is-flex sum-information-container"},r.a.createElement(h,{amountEuro:n,exchangeRate:t})))))});var P=function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(g,null)),r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(I,null),r.a.createElement(R,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=n(3),C=n(17),D=n(13);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F={idGenerator:8,exchangeRate:4.43,list:[{id:1,name:"For Holiday",amountEuro:30.1},{id:2,name:"For Party",amountEuro:19.4},{id:3,name:"Investment",amountEuro:93.82},{id:4,name:"For Birthday",amountEuro:91.87}]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return S({},e,{list:[].concat(Object(D.a)(e.list),[t.item])});case l:return S({},e,{list:Object(D.a)(e.list.filter((function(e){return e.id!==t.item})))});case s:return S({},e,{exchangeRate:t.item});default:return e}},B=Object(k.combineReducers)({transactions:_}),G=Object(k.createStore)(B,Object(C.composeWithDevTools)());n(37);o.a.render(r.a.createElement(i.a,{store:G},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[18,1,2]]]);
//# sourceMappingURL=main.8c02399f.chunk.js.map