(this["webpackJsonpreact-ecommerce"]=this["webpackJsonpreact-ecommerce"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"id":1,"image":"https://m.media-amazon.com/images/I/41yhjs01H9L._AC_.jpg","title":"Vine Tomatoes","price":1.2,"description":"Large Vine Tomatoes - 400g - by Mado\'s Food Hall","category":"Fresh Vegetable"},{"id":2,"image":"https://m.media-amazon.com/images/I/71Nmt0xqnlL._AC_SL1500_.jpg","title":"Fresh Asian Chayote Chow Chow (about 350g each)","price":2.3,"description":"Fresh Asian Chayote / Chow Chow Vegetable (About 350g Each) - Imported Weekly from Asia","category":"Fresh Vegetable from Asia."},{"id":3,"image":"https://m.media-amazon.com/images/I/61p3oslwz+L._AC_SL1001_.jpg","title":"Rainbow Sweet Bell Pepper","price":3.99,"description":"Rainbow Sweet Bell Pepper Seeds 20+ Organic Capsicum frutescens Mix Sweet Colorful Fruit Vegetables Fresh Organic Premium Chilli Plants Seeds for Planting Garden Outdoor","category":"Fresh Vegetable"},{"id":4,"image":"https://m.media-amazon.com/images/I/51-yIetsewL._AC_.jpg","title":"Red Hot Pepper","price":1.2,"description":"Red Hot Pepper Seeds 50+ Organic Capsicum Frutescens Heavy Yield Colorful Fruit Vegetables Fresh Premium Chilli Pepper Plants Seeds for Planting Garden Outdoor Yard","category":"Fresh Vegetable"},{"id":5,"image":"https://m.media-amazon.com/images/I/71qhg-IomdL._AC_SL1000_.jpg","title":"Broccoli","price":2,"description":"Broccoli - Calabrese - Green Sprouting - 1000 Seeds - Organic","category":"Fresh Vegetable"},{"id":6,"image":"https://m.media-amazon.com/images/I/416ul9rMuGL._AC_.jpg","title":"Red Apples","price":1.8,"description":"Fresh Handpicked Fuji Apple x 4 by Mado\'s Food Hall - Japan","category":"Fresh Vegetable"},{"id":7,"image":"https://m.media-amazon.com/images/I/61pvRsQ2vlL._AC_SL1000_.jpg","title":"Cabbage","price":1.99,"description":"Premier Seeds Direct 7L-T1VI-FZK9 Cabbage Durham Early, 10 Gram","category":"Fresh Vegetable"},{"id":8,"image":"https://m.media-amazon.com/images/I/41Ajf3PYwQL._AC_.jpg","title":"Bananas","price":1.44,"description":"Fresh Natural Grown Cavendish Bananas from Carribean - 1Kg by Mado\'s Food Hall","category":"Fresh Vegetable"},{"id":9,"image":"https://m.media-amazon.com/images/I/31dT8Fu3gmL._AC_.jpg","title":"Fresh Asian Bottle Gourd (Doodhi / Lauki)- imported weekly from Asia","price":1.95,"description":"Fresh Asian Bottle Gourd Doodhi Lauki Vegetable - Imported Weekly from Asia","category":"Fresh Vegetable from Asia."}]')},33:function(e,t,c){},38:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var a=c(0),i=c.n(a),r=c(16),n=c.n(r),s=(c(33),c(28)),o=c(10),l=c(47),d=c(2),u=c(4),b=c(8),j=c(13),m=Object(j.b)({name:"button",initialState:{toggle:{save:!0,edit:!0}},reducers:{toggleSaveButton:function(e,t){e.toggle.save=t.payload,e.toggle.edit=!t.payload},toggleEditButton:function(e,t){e.toggle.edit=t.payload,e.toggle.save=!t.payload}}}),p=m.actions,g=p.toggleSaveButton,f=p.toggleEditButton,h=m.reducer,x=(c(38),c(1)),O=function(e){e.products;var t=e.onAddToCart,c=e.search,i=Object(u.c)((function(e){return e.products.item})),r=Object(u.b)(),n=Object(d.f)(),s=Object(a.useMemo)((function(){return(null!==i&&void 0!==i?i:[]).filter((function(e){return e.title.includes(c)||e.description.toLocaleLowerCase().includes(c)}))}),[i,c]);return Object(x.jsxs)("div",{className:"grid-container",children:[null===s||void 0===s?void 0:s.map((function(e){return Object(x.jsxs)(b.b,{to:"/detail/".concat(e.id),className:"flex-cart m-2 border border-1 border-green-600 rounded-t-lg bg-green-600",children:[Object(x.jsx)("h3",{className:"title font-bold truncate w-full max-w-full py-2 px-4 text-white",children:e.title}),Object(x.jsxs)("div",{className:"bg-white p-3",children:[Object(x.jsx)("div",{className:"w-full flex justify-center",children:Object(x.jsx)("img",{src:e.image,alt:e.title,"data-testid":"img-".concat(e.id)})}),Object(x.jsxs)("div",{className:"bg-white p-3",children:[Object(x.jsx)("div",{className:"w-full flex justify-center",children:e.description}),Object(x.jsxs)("div",{className:"flex-container",children:[Object(x.jsx)("div",{className:"text-md mt-1",children:e.category}),Object(x.jsx)("div",{className:"text-lg text-right flex-grow justify-end mt-1 mr-4 font-bold",children:null===e||void 0===e?void 0:e.price.toLocaleString("en-US",{style:"currency",currency:"USD"})}),Object(x.jsxs)("button",{"data-testid":"btn-".concat(e.id),onClick:function(c){c.preventDefault(),t(e)},className:"btn",children:[Object(x.jsx)("i",{className:"fas fa-cart-plus mr-2"}),"Add To Cart"]})]})]})]})]},"[1e7]+-1e3+-4e3+-8e3+-1e11".replace(/[018]/g,(function(e){return(e^(15&crypto.getRandomValues(new Uint8Array(1))[0])>>e/4).toString(16)})))})),Object(x.jsx)("footer",{children:Object(x.jsx)("div",{onClick:function(){console.log("Your button was clicked and is now disabled"),r(f(!0)),n.push("/form")},className:"fab"})})]})},v=c(9),y=c(19),C={item:y},N=Object(j.b)({name:"product",initialState:C,reducers:{AddProduct:function(e,t){e.item.push(t.payload)},UpdateProduct:function(e,t){e.item.forEach((function(c,a){c.id===t.payload.id&&(e.item[a]=Object(v.a)(Object(v.a)({},c),t.payload))}))},DeleteProduct:function(e,t){e.item.forEach((function(c,a){c.id===t.payload.id&&e.item.splice(a,1)}))}}}),S=N.actions,w=S.AddProduct,F=S.DeleteProduct,A=S.UpdateProduct,k=N.reducer,L=function(e){e.products;var t=e.onAddToCart,c=Object(d.h)().id,i=Object(u.c)((function(e){return e.products.item})),r=Object(u.b)(),n=Object(a.useMemo)((function(){return(null!==i&&void 0!==i?i:[]).find((function(e){return e.id===parseInt(c)}))}),[i,c]),s=Object(d.f)(),l=Object(a.useState)(!1),b=Object(o.a)(l,2),j=b[0];b[1];return Object(x.jsx)("div",{className:"p-10",children:n&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h3",{className:"title font-bold text-3xl truncate w-full max-w-full mb-2",children:n.title}),Object(x.jsxs)("div",{className:"grid grid-cols-2 gap-10",children:[Object(x.jsx)("div",{className:"w-full flex justify-center",children:Object(x.jsx)("img",{src:n.image,alt:n.title,className:"text-center"})}),Object(x.jsx)("div",{className:"flex-cart",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"text-lg overflow-ellipsis description",children:n.description}),Object(x.jsxs)("div",{className:"flex flex-row mt-2",children:[Object(x.jsx)("div",{className:"text-md mt-1",children:n.category}),Object(x.jsx)("div",{className:"text-2xl text-right flex-grow justify-end mt-1 mr-4",children:null===n||void 0===n?void 0:n.price.toLocaleString("en-US",{style:"currency",currency:"USD"})}),Object(x.jsxs)("button",{"data-testid":"detail-btn",onClick:function(e){e.preventDefault(),t(n)},className:"btn",children:[Object(x.jsx)("i",{className:"fas fa-cart-plus mr-2"}),"Add To Cart"]})]}),Object(x.jsxs)("div",{className:"flex-container",children:[Object(x.jsx)("button",{onClick:function(){r(F(Object(v.a)(Object(v.a)({},n),{},{id:n.id}))),s.push("/")},className:"btn",children:"Delete"}),Object(x.jsx)("button",{disabled:j,onClick:function(){console.log("Your button was clicked and is now disabled"),r(g(!0)),s.push({pathname:"/form",search:"?id=".concat(c),state:{product:n}})},className:"btn",type:"submit",children:"Edit"})]})]})})]})]})})},P=(c(42),function(e){var t=e.cart,c=e.onClearCart,i=e.search,r=e.onSetSearch,n=Object(a.useMemo)((function(){return t?t.reduce((function(e,t){return e+Number(t.price)}),0):0}),[t]),s=Object(u.c)((function(e){return e.products.item}));return console.log("productsSelector:",s),Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("div",{onClick:function(){return r("")},className:"text-2xl px-10 py-2",children:Object(x.jsxs)(b.b,{to:"/","data-testid":"header",children:[Object(x.jsx)("i",{className:"fas fa-shopping-basket mr-2"}),"Simple Grocery Store"]})}),Object(x.jsx)("div",{className:"flex-grow",children:Object(x.jsx)("input",{type:"text",placeholder:"Search..",value:i,onChange:function(e){return r(e.target.value)},className:"input p-2 text-xl  rounded-lg max-w-md w-96"})}),Object(x.jsxs)("div",{className:"px-10 py-2 justify-end has-tooltip cart-icon ",children:[Object(x.jsxs)("span",{className:"tooltip cart",children:[Object(x.jsxs)("div",{children:["Cart (",(null!==t&&void 0!==t?t:[]).length,")"]}),null===t||void 0===t?void 0:t.map((function(e,t){return Object(x.jsxs)("div",{className:"flex flex-row my-2",children:[Object(x.jsx)("img",{src:e.image,alt:e.title,className:"h-8 mr-2"}),Object(x.jsx)("h3",{className:"title text-md truncate flex-grow",children:e.title}),Object(x.jsx)("div",{className:"text-md text-right flex-grow justify-end ml-2",children:e.price.toLocaleString("en-US",{style:"currency",currency:"USD"})})]},"[1e7]+-1e3+-4e3+-8e3+-1e11".replace(/[018]/g,(function(e){return(e^(15&crypto.getRandomValues(new Uint8Array(1))[0])>>e/4).toString(16)})))})),Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsx)("button",{"data-testid":"shopping-cart-btn",onClick:c,className:"text-md px-8 py-1 font-bold bg-green-800 text-white rounded-full",children:"Clear Cart"}),Object(x.jsx)("div",{className:"text-md text-right flex-grow justify-end ml-2",children:n.toLocaleString("en-US",{style:"currency",currency:"USD"})})]})]}),Object(x.jsx)("div",{id:"cart-total",className:"hint","data-testid":"Cart",children:Object(x.jsx)("span",{"data-testid":"cart-total",className:"notifications",children:(null!==t&&void 0!==t?t:[]).length})})]})]})}),_=c(23),I=c.n(_),V=c(27),D=c(18);c(44);var B=function(){var e=Object(d.g)().search.split("=")[1],t=Object(u.c)((function(t){return t.products.item.find((function(t){return t.id===parseInt(e)}))})),c=Object(a.useRef)(null);Object(a.useEffect)((function(){c.current.focus()}));var i=Object(u.c)((function(t){return t.products.item.find((function(t){return t.id===parseInt(e)}))}));console.log("testSelector:",i);var r={id:"",image:"",price:"",title:"",category:"",description:""},n=function(){return crypto.getRandomValues(new Uint8Array(8)).toString().replace(/,/g,"").substr(1,16)},s=Object(u.c)((function(e){return e.buttonReducer.toggle})),l=s.save,b=s.edit,j=Object(a.useState)(""),m=Object(o.a)(j,2),p=m[0],g=m[1],f=Object(a.useState)(t||r),h=Object(o.a)(f,2),O=h[0],y=h[1],C=Object(u.b)(),N=function(e){var t=e.target,c=t.name,a=t.value;y(Object(v.a)(Object(v.a)({},O),{},Object(D.a)({},c,a)))},S=function(){var e=Object(V.a)(I.a.mark((function e(t){var c,a=arguments;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=a.length>1&&void 0!==a[1]?a[1]:0,t.preventDefault(),O.image&&O.title&&O.category&&O.price){e.next=6;break}return g("All Fields except description field are required"),setTimeout((function(){g("")}),2e3),e.abrupt("return");case 6:if(1!==c){e.next=14;break}O.id=parseInt(n()),console.log("data:",O,O.id),y(O),k(O),y(r),e.next=25;break;case 14:if(2!==c){e.next=21;break}if(y(O),O.id){e.next=18;break}return e.abrupt("return");case 18:L(O),e.next=25;break;case 21:if(3!==c){e.next=25;break}if(0!==O.id&&O.id){e.next=24;break}return e.abrupt("return");case 24:P(O);case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){C(w(e))},L=function(e){C(A(e))},P=function(e){C(F(e))};return Object(x.jsx)("main",{children:Object(x.jsxs)("form",{className:"main-container",onSubmit:S,children:[Object(x.jsxs)("div",{className:"form-box",children:[Object(x.jsx)("label",{"data-tooltip":"required field",htmlFor:"image",children:"Image"}),Object(x.jsx)("input",{ref:c,id:"image",name:"image",type:"text",value:O.image,onChange:function(e){return N(e)}})]}),Object(x.jsxs)("div",{className:"form-box",children:[Object(x.jsx)("label",{"data-tooltip":"required field",htmlFor:"price",children:"Price"}),Object(x.jsx)("input",{id:"price",name:"price",type:"text",value:O.price,onChange:function(e){return N(e)}})]}),Object(x.jsxs)("div",{className:"form-box",children:[Object(x.jsx)("label",{"data-tooltip":"required field",htmlFor:"title",children:"Title"}),Object(x.jsx)("input",{id:"title",name:"title",type:"text",value:O.title,onChange:function(e){return N(e)}})]}),Object(x.jsxs)("div",{className:"form-box",children:[Object(x.jsx)("label",{"data-tooltip":"required field",htmlFor:"category",children:"Category"}),Object(x.jsx)("input",{id:"category",name:"category",type:"text",value:O.category,onChange:function(e){return N(e)}})]}),Object(x.jsxs)("div",{className:"form-box",children:[Object(x.jsx)("label",{htmlFor:"description",children:"Description"}),Object(x.jsx)("textarea",{id:"description",name:"description",value:O.description,onChange:function(e){return N(e)}})]}),p&&Object(x.jsx)("p",{className:"error",children:p}),Object(x.jsxs)("div",{className:"flex-container",children:[Object(x.jsx)("button",{disabled:l,className:"btn",style:{filter:l?"blur(3px)":"none"},type:"submit",onClick:function(e){return S(e,1)},children:"Save"}),Object(x.jsx)("button",{disabled:b,className:"btn",style:{filter:b?"blur(3px)":"none"},type:"submit",onClick:function(e){return S(e,2)},children:"Update"})]})]})})};var T=function(){var e=Object(l.a)("cart",[]),t=Object(o.a)(e,2),c=t[0],i=t[1],r=Object(a.useState)([]),n=Object(o.a)(r,2),u=n[0],b=n[1],j=y,m=Object(a.useCallback)((function(e){i([].concat(Object(s.a)(null!==c&&void 0!==c?c:[]),[e]))}),[c,i]),p=Object(a.useCallback)((function(){i([])}),[i]);Object(a.useEffect)((function(){b(j)}),[j]);var g=Object(d.f)(),f=Object(d.g)(),h=Object(a.useState)(""),v=Object(o.a)(h,2),C=v[0],N=v[1],S=Object(a.useCallback)((function(e){N(e),"/"!==f.pathname&&g.push("/")}),[N,g,f]);return Object(x.jsxs)("div",{children:[Object(x.jsx)(P,{cart:null!==c&&void 0!==c?c:[],onClearCart:p,search:C,onSetSearch:S}),Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{exact:!0,path:"/",children:Object(x.jsx)(O,{products:u,onAddToCart:m,search:C})}),Object(x.jsx)(d.a,{path:"/form",children:Object(x.jsx)(B,{})}),Object(x.jsx)(d.a,{path:"/detail/:id",children:Object(x.jsx)(L,{products:u,onAddToCart:m})})]})]})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),a(e),i(e),r(e),n(e)}))},R=Object(j.a)({reducer:{products:k,buttonReducer:h}});n.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(b.a,{children:Object(x.jsx)(u.a,{store:R,children:Object(x.jsx)(T,{})})})}),document.getElementById("root")),U()}},[[45,1,2]]]);
//# sourceMappingURL=main.7ee25886.chunk.js.map