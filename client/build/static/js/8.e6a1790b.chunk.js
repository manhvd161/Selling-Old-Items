(window.webpackJsonpCKEditor5=window.webpackJsonpCKEditor5||[]).push([[8],{375:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var c=function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},382:function(t,e,a){"use strict";var c=a(0),n=a.n(c),o=a(17),r=a(470),i=a(460),l=(a(383),a(34)),u=a(375),s=r.a.Meta;e.a=function(t){var e=t._id,a=t.name,c=t.mainImage,d=t.cost,m=void 0===d?0:d,f=t.averagePoint;return n.a.createElement(o.b,{to:"/product-detail/".concat(e),className:"".concat("category-item")},n.a.createElement(r.a,{className:"".concat("category-item","-card"),hoverable:!0,cover:n.a.createElement("img",{alt:a,src:"".concat(l.a.API_IMAGES).concat(c)})},n.a.createElement(i.a,{allowHalf:!0,value:f,style:{fontSize:"15px"},disabled:!0}),n.a.createElement(s,{title:a,description:"".concat(Object(u.a)(m),"\u0111")})))}},383:function(t,e,a){},408:function(t,e,a){},468:function(t,e,a){"use strict";a.r(e);var c=a(49),n=a(0),o=a.n(n),r=a(397),i=a(48),l=a.n(i),u=a(39),s=(a(408),a(382)),d=a(34),m=a(21);e.default=Object(u.b)((function(t){return{global:t.global}}))((function(t){var e=t.idCategory,a=t.global,i=t.dispatch,u=t.tab,f=a["category-".concat(e)]||{},g=f.timeToUpdateOld,p=void 0===g?0:g,b=f.productItems;return Object(n.useEffect)((function(){Date.now()-p>=d.a.TIME_TO_UPDATE&&l()({method:"GET",url:"".concat(d.a.API_URL,"/products"),params:{category_id:e}}).then((function(t){if(t.data.results.products){var a={timeToUpdateOld:Date.now(),productItems:t.data.results.products};i(Object(m.c)(Object(c.a)({},"category-".concat(e),a)))}})).catch((function(t){return console.log(t)}))}),[u]),o.a.createElement("div",{className:"".concat("category")},o.a.createElement("div",{className:"".concat("category","-body")},function(t){var e=null;return t&&t.length>0&&(e=t.map((function(t,e){return o.a.createElement(s.a,Object.assign({key:e},t))}))),e}(b)),o.a.createElement(r.a,{defaultCurrent:1,total:21}))}))}}]);
//# sourceMappingURL=8.e6a1790b.chunk.js.map