(window.webpackJsonpCKEditor5=window.webpackJsonpCKEditor5||[]).push([[11],{375:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},405:function(e,t,a){},464:function(e,t,a){"use strict";a.r(t);var n=a(461),c=a(49),r=a(35),o=a(0),i=a.n(o),u=a(37),l=a(399),m=a.n(l),s=a(48),d=a.n(s),p=a(39),g=a(400),h=a(370),f=a(471),E=a(465),v=a(369),b=a(31),O=a(373),y=a(460),j=a(368),w=(a(405),a(34)),P=a(84),S=a(375),A=a(21);function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T=h.a.TextArea,C="product-detail",N=function(e){var t=e.comments;return i.a.createElement(f.a,{dataSource:t,header:"".concat(t.length," ").concat(t.length>1?"replies":"reply"),itemLayout:"horizontal",renderItem:function(e){return i.a.createElement(E.a,e)}})},k=function(e){var t=e.onChange,a=e.onSubmit,n=e.submitting,c=e.value;return i.a.createElement("div",null,i.a.createElement(v.a.Item,null,i.a.createElement(T,{rows:4,onChange:t,value:c})),i.a.createElement(v.a.Item,null,i.a.createElement(b.a,{htmlType:"submit",loading:n,onClick:a,type:"primary"},"B\xecnh lu\u1eadn")))};t.default=Object(p.b)((function(e){return{user:e.user}}),(function(e){return{dispatch:e}}))(Object(u.c)((function(e){var t=e.match.params.id,a=e.cookies,c=e.user,u=e.dispatch,l=Object(o.useState)({submitting:!1,value:""}),s=Object(r.a)(l,2),p=s[0],h=s[1],f=Object(o.useState)({}),v=Object(r.a)(f,2),I=v[0],T=v[1];console.log(I);var D=a.cookies.accessToken;return Object(o.useEffect)((function(){d()({method:"GET",url:"".concat(w.a.API_URL,"/products/").concat(t)}).then((function(e){e.data.results.product&&T(e.data.results.product)})).catch((function(e){return console.log(e)}))}),[t]),JSON.stringify({})!==JSON.stringify(I)?i.a.createElement(o.Fragment,null,i.a.createElement("div",{className:"".concat(C)},i.a.createElement("div",{className:"".concat(C,"-image")},i.a.createElement(g.Carousel,{infiniteLoop:!0,autoPlay:!0,transitionTime:!0},function(e){var t=null;return e&&e.length>0&&(t=e.map((function(e,t){return i.a.createElement("div",{key:t},i.a.createElement("img",{src:"".concat(w.a.API_IMAGES).concat(e),alt:"Attach image"}))}))),t}([].concat(Object(n.a)(I.attachImages),[I.mainImage])))),i.a.createElement("div",{className:"".concat(C,"-info")},i.a.createElement("div",{className:"".concat(C,"-title")},I.name),i.a.createElement("div",{className:"".concat(C,"-price")},"".concat(Object(S.a)(I.cost),"\u0111")),i.a.createElement("div",{className:"".concat(C,"-rate")},i.a.createElement(y.a,{onChange:function(e){c&&Object.keys(c).length>0?d()({method:"PATCH",url:"".concat(w.a.API_URL,"/products/rating"),headers:{authorization:"Bearer ".concat(D)},data:{product_id:t,point:e}}).then((function(e){T(e.data.results.product)})).catch((function(e){return console.log(e)})):u(Object(A.c)({isShowModalSignIn:!0}))},allowHalf:!0,value:I.averagePoint})),i.a.createElement("div",{className:"".concat(C,"-description")},i.a.createElement("span",null,"M\xf4 t\u1ea3:"),i.a.createElement("p",null,I.description)),i.a.createElement("div",{className:"".concat(C,"-quantity")},i.a.createElement(b.a,{onClick:function(){d()({method:"POST",url:"".concat(w.a.API_URL,"/products/add-to-cart"),headers:{authorization:"Bearer ".concat(D)},data:{product_id:t}}).then((function(e){O.a.success("Th\xeam s\u1ea3n ph\u1ea9m v\xe0o gi\u1ecf h\xe0ng th\xe0nh c\xf4ng !")})).catch((function(e){D?O.a.warning("S\u1ea3n ph\u1ea9m \u0111\xe3 c\xf3 trong gi\u1ecf h\xe0ng !"):O.a.warning("C\u1ea7n \u0111\u0103ng nh\u1eadp \u0111\u1ec3 th\xeam v\xe0o gi\u1ecf h\xe0ng !")}))},type:"primary"},"Th\xeam v\xe0o gi\u1ecf"))),i.a.createElement("div",{className:"".concat(C,"-comment")},I.comments.length>0?i.a.createElement(N,{comments:I.comments.map((function(e){return _({},e,{avatar:"".concat(w.a.API_IMAGES).concat(e.avatar)||w.a.IMAGE_USER_DEFAULT,datetime:m()(new Date(e.datetime)).fromNow()})}))}):i.a.createElement("div",{style:{margin:"2rem auto 3rem",width:"80%",borderTop:"1px solid rgb(202, 202, 202)"}}),i.a.createElement(E.a,{avatar:i.a.createElement(j.a,{src:"".concat(w.a.API_IMAGES).concat(c.avatar)||w.a.IMAGE_USER_DEFAULT,alt:c.full_name}),content:i.a.createElement(k,{onChange:function(e){h(_({},p,{value:e.target.value}))},onSubmit:function(){p.value&&(h(_({},p,{submitting:!0})),setTimeout((function(){h({submitting:!1,value:""})}),500),d()({method:"PATCH",url:"".concat(w.a.API_URL,"/products/add-comment"),headers:{authorization:"Bearer ".concat(D)},data:{product_id:t,content:p.value,datetime:new Date}}).then((function(e){T(e.data.results.product)})).catch((function(e){return console.log(e)})))},submitting:p.submitting,value:p.value})})))):i.a.createElement(P.a,null)})))}}]);
//# sourceMappingURL=11.dc89e1b6.chunk.js.map