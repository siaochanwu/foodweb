(function(t){function e(e){for(var o,n,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],o=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(o=!1)}o&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},s={app:0},i=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/foodweb/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("4de4"),a("159b"),a("b64b");var o=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],n={name:"App"},r=n,l=(a("5c0b"),a("2877")),c=Object(l["a"])(r,s,i,!1,null,null,null),d=c.exports,u=a("bc3a"),p=a.n(u),m=a("2106"),v=a.n(m),g=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Login"},[a("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Please sign in")]),a("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("UserName")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._m(0),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"},on:{click:t.signin}},[t._v("Sign in")]),a("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2017-2018")])])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkbox mb-3"},[a("label",[a("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" Remember me ")])])}],b=(a("99af"),{name:"login",data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t=this,e="https://vue-course-api.hexschool.io/admin/signin";this.axios.post(e,this.user).then((function(e){if(console.log(e),e.data.success){var a=t,o=e.data.token,s=e.data.expired;document.cookie="hextoken=".concat(o,"; expires=").concat(new Date(s)),t.$store.dispatch("LOGIN",!0),console.log(t.$store.state.login),a.$router.push("/admin/products")}}))}}}),_=b,C=Object(l["a"])(_,h,f,!1,null,null,null),y=C.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Dashboard"},[a("navbar"),a("sidebar"),a("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4 mt-20"},[a("router-view")],1)],1)},x=[],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("nav",{staticClass:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse",attrs:{id:"sidebarMenu"}},[a("div",{staticClass:"position-sticky pt-3 ml-5"},[a("ul",{staticClass:"nav flex-column"},[a("span",[t._v("管理員")]),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products"}},[t._v("產品列表")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin/orders"}},[t._v("訂單列表")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin/coupons"}},[t._v("優惠券")])],1)])])])])])])},$=[],k={},O=k,M=Object(l["a"])(O,P,$,!1,null,null,null),N=M.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"},[t._m(0),t._m(1),a("ul",{staticClass:"navbar-nav px-3"},[a("li",{staticClass:"nav-item d-flex justify-content-center align-items-center"},[a("router-link",{staticClass:"nav-link mx-3 text-white",attrs:{to:"/admin/login"}},[t._v("Login")]),a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.signOut(e)}}},[a("i",{staticClass:"fas fa-sign-out-alt"})])],1)])])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-brand col-md-3 col-lg-2 me-0 px-3",attrs:{href:"#"}},[t._v("Eat Well "),a("i",{staticClass:"fas fa-cookie-bite"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler position-absolute d-md-none collapsed",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],j={data:function(){return{cart:{},active:!1,cartData:{}}},methods:{signOut:function(){var t=this,e="https://vue-course-api.hexschool.io/logout";this.axios.post(e).then((function(e){console.log(e),t.$store.dispatch("LOGOUT",!1),t.$router.push("login")})).catch((function(t){console.log(t)}))}}},E=j,A=Object(l["a"])(E,D,L,!1,null,null,null),U=A.exports,q={components:{Sidebar:N,Navbar:U}},G=q,S=Object(l["a"])(G,w,x,!1,null,null,null),T=S.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-warning",attrs:{"data-toggle":"modal","data-target":"#productModal"},on:{click:function(e){return t.openModal(!0)}}},[t._v(" 建立新產品 ")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.origin_price)))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.price)))]),a("td",[e.is_enabled?a("span",{staticClass:"text-primary"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("button",{staticClass:"btn btn-outline-success",attrs:{"btn-sm":""},on:{click:function(a){return t.openModal(!1,e)}}},[t._v(" 編輯 ")])]),a("td",[a("button",{staticClass:"btn btn-outline-danger",attrs:{"btn-sm":""},on:{click:function(a){return t.deleteModal(e)}}},[t._v(" 刪除 ")])])])})),0)]),a("pagination",{attrs:{has_pre:t.pagination.has_pre,has_next:t.pagination.has_next,total_pages:t.pagination.total_pages,current_page:t.pagination.current_page},on:{getData:t.getData}}),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imageUrl",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("或 上傳圖片 "),t.status.fileUploading?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",src:t.tempProduct.imageUrl,alt:""}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,o=e.target,s=o.checked?1:0;if(Array.isArray(a)){var i=null,n=t._i(a,i);o.checked?n<0&&t.$set(t.tempProduct,"is_enabled",a.concat([i])):n>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(t.tempProduct,"is_enabled",s)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v(" 是否啟用 ")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" Close ")]),a("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v(" Save changes ")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteProduct}},[t._v(" 確認刪除 ")])])])])])],1)},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"bg-warning"},[a("tr",[a("th",{attrs:{width:"120"}},[t._v("分類")]),a("th",[t._v("產品名稱")]),a("th",{attrs:{width:"80"}},[t._v("原價")]),a("th",{attrs:{width:"80"}},[t._v("售價")]),a("th",{attrs:{width:"90"}},[t._v("是否啟用")]),a("th",{attrs:{width:"90"}},[t._v("編輯")]),a("th",{attrs:{width:"90"}},[t._v("刪除")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-warning text-dark"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("新增產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],J=a("5530"),W=(a("5319"),a("ac1f"),a("1157")),z=a.n(W),V=a("2f62"),B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center"},[a("li",{staticClass:"page-item",class:{disabled:!t.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getData(t.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.current_page==e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getData(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("li",{staticClass:"page-item",class:{disabled:!t.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getData(t.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},H=[],Q={props:["has_pre","has_next","current_page","total_pages"],methods:{getData:function(t){this.$emit("getData",t)}}},R=Q,K=Object(l["a"])(R,B,H,!1,null,null,null),X=K.exports,Y={components:{pagination:X},data:function(){return{products:[],tempProduct:{},pagination:{},isNew:!1,status:{fileUploading:!1}}},methods:{getData:function(t){var e=this,a=this;this.$store.dispatch("LOADING",!0),console.log(t);var o="https://vue-course-api.hexschool.io/api/wendywu007/admin/products?page=".concat(t);this.$http.get(o).then((function(t){e.$store.dispatch("LOADING",!1),console.log(t.data),a.products=t.data.products,a.pagination=t.data.pagination}))},openModal:function(t,e){t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=Object.assign({},e),this.isNew=!1),z()("#productModal").modal("show")},deleteModal:function(t){var e=this;e.tempProduct=t.id,z()("#delProductModal").modal("show")},deleteProduct:function(){var t=this,e="https://vue-course-api.hexschool.io/api/wendywu007/admin/product/".concat(t.tempProduct);this.$http.delete(e).then((function(e){console.log(e.data),e.data.success?(z()("#delProductModal").modal("hide"),t.getData()):(z()("#delProductModal").modal("hide"),t.getData(),console.log("刪除失敗"))}))},updateProduct:function(){var t=this,e="https://vue-course-api.hexschool.io/api/wendywu007/admin/product",a="post";t.isNew||(e="https://vue-course-api.hexschool.io/api/wendywu007/admin/product/".concat(t.tempProduct.id),a="put"),this.$http[a](e,{data:t.tempProduct}).then((function(e){console.log(e.data),e.data.success?(z()("#productModal").modal("hide"),t.getData()):(z()("#productModal").modal("hide"),t.getData(),console.log("新增失敗"))}))},uploadFile:function(){var t=this;console.log(this);var e=this.$refs.files.files[0],a=this,o=new FormData;o.append("file-to-upload",e);var s="https://vue-course-api.hexschool.io/api/wendywu007/admin/upload";a.status.fileUploading=!0,this.$http.post(s,o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){a.status.fileUploading=!1,console.log(e.data),e.data.success?a.$set(a.tempProduct,"imageUrl",e.data.imageUrl):t.$bus.$emit("messsage:push",e.data.message,"danger")}))}},created:function(){var t=document.cookie.replace(/(?:(?:^|.*;\s*)hextoken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common["Authorization"]=t,this.getData()},computed:Object(J["a"])({},Object(V["b"])(["isLoading"]))},Z=Y,tt=Object(l["a"])(Z,I,F,!1,null,null,null),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-warning",attrs:{"data-toggle":"modal","data-target":"#couponModal"},on:{click:function(e){return t.openModal(!0)}}},[t._v(" 新增優惠券 ")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.coupons,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-left"},[t._v(t._s(e.percent)+"%")]),a("td",[e.is_enabled?a("span",{staticClass:"text-primary"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("button",{staticClass:"btn btn-outline-success",attrs:{"btn-sm":""},on:{click:function(a){return t.openModal(!1,e)}}},[t._v(" 編輯 ")])]),a("td",[a("button",{staticClass:"btn btn-outline-danger",attrs:{"btn-sm":""},on:{click:function(a){return t.deleteModal(e)}}},[t._v(" 刪除 ")])])])})),0)]),a("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("優惠券名稱")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入優惠券名稱"},domProps:{value:t.tempCoupon.title},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"title",e.target.value)}}})])]),a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"percent"}},[t._v("折扣")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{type:"text",id:"percent",placeholder:"請輸入折扣"},domProps:{value:t.tempCoupon.percent},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"percent",e.target.value)}}})])]),a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"code"}},[t._v("優惠券代號")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{type:"text",id:"code",placeholder:"請輸入優惠券代號"},domProps:{value:t.tempCoupon.code},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"code",e.target.value)}}})])]),a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"due_data"}},[t._v("到期日")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.due_data,expression:"tempCoupon.due_data"}],staticClass:"form-control",attrs:{type:"text",id:"due_data",placeholder:"請輸入到期日"},domProps:{value:t.tempCoupon.due_data},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"due_data",e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check ml-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempCoupon.is_enabled)?t._i(t.tempCoupon.is_enabled,null)>-1:t._q(t.tempCoupon.is_enabled,1)},on:{change:function(e){var a=t.tempCoupon.is_enabled,o=e.target,s=o.checked?1:0;if(Array.isArray(a)){var i=null,n=t._i(a,i);o.checked?n<0&&t.$set(t.tempCoupon,"is_enabled",a.concat([i])):n>-1&&t.$set(t.tempCoupon,"is_enabled",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(t.tempCoupon,"is_enabled",s)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v(" 是否啟用 ")])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addCoupon}},[t._v("Save changes")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delCouponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempCoupon.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.addCoupon}},[t._v(" 確認刪除 ")])])])])])],1)},ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"bg-warning"},[a("tr",[a("th",[t._v("名稱")]),a("th",{attrs:{width:"100"}},[t._v("折扣")]),a("th",{attrs:{width:"90"}},[t._v("是否啟用")]),a("th",{attrs:{width:"90"}},[t._v("編輯")]),a("th",{attrs:{width:"90"}},[t._v("刪除")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("新增優惠券")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"delCouponModal"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],st={data:function(){return{coupons:[],tempCoupon:{title:"",is_enabled:0,percent:100,due_date:0,code:""},due_date:new Date,isNew:!1}},methods:{getCoupons:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this;this.$store.dispatch("LOADING",!0);var o="https://vue-course-api.hexschool.io/api/wendywu007/admin/coupons?page=".concat(e);this.$http.get(o).then((function(e){t.$store.dispatch("LOADING",!1),console.log(e.data),a.coupons=e.data.coupons,a.pagination=e.data.pagination}))},openModal:function(t,e){t?(this.tempCoupon={},this.isNew=!0,console.log("new")):(this.tempCoupon=Object.assign({},e),this.isNew=!1),z()("#couponModal").modal("show")},deleteModal:function(t){var e=this;e.tempCoupon=t.id,z()("#delCouponModal").modal("show")},addCoupon:function(){var t=this,e="https://vue-course-api.hexschool.io/api/wendywu007/admin/coupon",a="post";t.isNew||(e="https://vue-course-api.hexschool.io/api/wendywu007/admin/coupon/".concat(t.tempCoupon.id),a="put"),this.$http[a](e,{data:t.tempCoupon}).then((function(e){console.log(e.data),e.data.success?(z()("#couponModal").modal("hide"),t.getCoupons()):(z()("#couponModal").modal("hide"),t.getCoupons(),console.log("新增失敗"))}))}},created:function(){this.getCoupons()},computed:Object(J["a"])({},Object(V["b"])(["isLoading"]))},it=st,nt=Object(l["a"])(it,at,ot,!1,null,null,null),rt=nt.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.order,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.create_at))]),a("td",[t._v(t._s(e.user.email))]),a("td",[a("ul",t._l(e.products,(function(e){return a("li",{key:e.id},[t._v(" "+t._s(e.product.title)+"-"+t._s(e.qty)+" ")])})),0)]),a("td",{staticClass:"text-left"},[t._v(t._s(t._f("currency")(e.total)))]),a("td",[t._v(t._s(e.is_paid))])])})),0)]),a("pagination",{attrs:{has_pre:t.pagination.has_pre,has_next:t.pagination.has_next,total_pages:t.pagination.total_pages,current_page:t.pagination.current_page},on:{getData:t.getData}})],1)},ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"bg-warning"},[a("tr",[a("th",{attrs:{width:"80"}},[t._v("購買時間")]),a("th",{attrs:{width:"150"}},[t._v("Email")]),a("th",[t._v("購買商品")]),a("th",{attrs:{width:"120"}},[t._v("應付金額")]),a("th",{attrs:{width:"100"}},[t._v("是否付款")])])])}],dt={components:{pagination:X},data:function(){return{pagination:{},order:{}}},methods:{getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$store.dispatch("LOADING",!0);var a="https://vue-course-api.hexschool.io/api/wendywu007/orders?page=".concat(e);this.axios.get(a).then((function(e){t.$store.dispatch("LOADING",!1),console.log(e),t.order=e.data.orders;var a=new Date(t.order.create_at).getTime();console.log(a),t.pagination=e.data.pagination}))}},created:function(){this.getData()},computed:Object(J["a"])({},Object(V["b"])(["isLoading"]))},ut=dt,pt=Object(l["a"])(ut,lt,ct,!1,null,null,null),mt=pt.exports;o["a"].use(g["a"]);var vt=[{path:"*",redirect:"login"},{path:"/login",name:"Login",component:y},{path:"/admin",name:"Dashboard",component:T,meta:{requiresAuth:!0},children:[{path:"products",name:"Products",component:et,meta:{requiresAuth:!0}},{path:"orders",name:"Orders",component:mt,meta:{requiresAuth:!0}},{path:"coupons",name:"Coupons",component:rt,meta:{requiresAuth:!0}}]}],gt=new g["a"]({routes:vt}),ht=gt,ft=(a("4989"),a("9062")),bt=a.n(ft),_t=(a("e40d"),a("a9e3"),a("b680"),function(t){var e=Number(t);return"$".concat(e.toFixed(0).replace(/./g,(function(t,e,a){var o=e&&"."!==t&&(a.length-e)%3===0?", ".concat(t).replace(/\s/g,""):t;return o})))}),Ct=function(t){var e=Number(t);return"NT$ "+e.toFixed(0).replace(/(\d)(?=(\d{3})+\.)/g,"$1, ")+" 元"},yt=a("7bb1"),wt=a("4c93"),xt=a("60d4");o["a"].use(V["a"]);var Pt=new V["a"].Store({state:{login:!1,isLoading:!1},mutations:{login:function(t,e){t.login=e},loading:function(t,e){t.isLoading=e},logout:function(t,e){t.login=e}},actions:{LOGIN:function(t,e){t.commit("login",e)},LOADING:function(t,e){t.commit("loading",e)},LOGOUT:function(t,e){t.commit("logout",e)}}});o["a"].prototype.$bus=new o["a"],o["a"].use(V["a"]),o["a"].config.productionTip=!1,p.a.defaults.withCredentials=!0,o["a"].use(v.a,p.a),o["a"].component("Loading",bt.a),o["a"].filter("currency",_t),o["a"].filter("money",Ct),o["a"].component("ValidationObserver",yt["a"]),o["a"].component("ValidationProvider",yt["b"]),Object.keys(wt).forEach((function(t){Object(yt["c"])(t,wt[t])})),Object(yt["d"])("zh_TW",xt),new o["a"]({router:ht,store:Pt,render:function(t){return t(d)}}).$mount("#app"),ht.beforeEach((function(t,e,a){if(console.log(t,e,a),t.meta.requiresAuth){var o="https://vue-course-api.hexschool.io/api/user/check";p.a.post(o).then((function(t){console.log(t),t.data.success?a():a({path:"/login"})}))}else a()}))},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.9dc44634.js.map