"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4177],{4177:(S,f,r)=>{r.r(f),r.d(f,{DashboardPageModule:()=>U});var d=r(6814),a=r(95),l=r(5548),g=r(4670),_=r(5861),h=r(7394),b=r(7055),m=r(553),t=r(6689),P=r(4695),C=r(5821),O=r(9229),v=r(7535);function M(e,s){if(1&e&&(t.TgZ(0,"h2"),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij("",null==o.selelctedCategory?null:o.selelctedCategory.name," ")}}function x(e,s){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij("",null==o.selelctedCategory?null:o.selelctedCategory.totalProducts," Result ")}}function y(e,s){1&e&&(t.TgZ(0,"h2"),t._uU(1,"All Products "),t.qZA())}function Z(e,s){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij("",null==o.productList?null:o.productList.length," Result ")}}function T(e,s){1&e&&(t.TgZ(0,"div",30),t._uU(1," No Products in Cart "),t.qZA())}function w(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"div",31),t.NdJ("click",function(){const c=t.CHM(o).$implicit,u=t.oxw();return t.KtG(u.addToCart(c))}),t.TgZ(1,"div",32)(2,"div",33),t._UZ(3,"img",34),t.qZA()(),t.TgZ(4,"div",35)(5,"h4"),t._uU(6),t.qZA(),t.TgZ(7,"div",36)(8,"div",37)(9,"strong"),t._uU(10),t.ALo(11,"number"),t.qZA(),t._uU(12," frs "),t.qZA(),t.TgZ(13,"div",38),t._uU(14," Qty "),t.TgZ(15,"strong"),t._uU(16),t.ALo(17,"number"),t.qZA()()()()()}if(2&e){const o=s.$implicit;t.xp6(3),t.s9C("alt",o.name),t.Q6J("src",o.image1||"assets/images/default-product.png",t.LSH),t.xp6(3),t.Oqu(null==o?null:o.name),t.xp6(4),t.Oqu(t.lcZ(11,5,null==o?null:o.unitPrice)),t.xp6(6),t.Oqu(t.lcZ(17,7,null==o?null:o.stockAmount))}}function A(e,s){if(1&e&&(t.TgZ(0,"span",41),t._uU(1),t.qZA()),2&e){const o=t.oxw().$implicit;t.xp6(1),t.Oqu(o.totalProducts)}}const R=function(e){return{active:e}};function D(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"li",39),t.NdJ("click",function(){const c=t.CHM(o).$implicit,u=t.oxw();return t.KtG(u.selectCategory(c))}),t._uU(1),t.YNc(2,A,2,1,"span",40),t.TgZ(3,"span",8),t._uU(4," chevron_right "),t.qZA()()}if(2&e){const o=s.$implicit,n=t.oxw();t.Q6J("ngClass",t.VKq(3,R,o.id===(null==n.selelctedCategory?null:n.selelctedCategory.id))),t.xp6(1),t.hij(" ",o.name," "),t.xp6(1),t.Q6J("ngIf",o.totalProducts)}}const L=[{path:"",component:(()=>{class e{constructor(o,n,i,c,u,J,q,j){this._nav=o,this._user=n,this._global=i,this.toaster=c,this._account=u,this._platform=J,this._route=q,this._routerOutlet=j,this.userDetails=null,this.runTimeProps=null,this.currency=m.N.currency.toLowerCase(),this.apiSubscription=new h.w0,this.isNavOpen=!1,this.isAccountOpen=!1,this.productData=null,this.productList=[],this.categoryList=[],this.cartList=[],this.isAllProducts=!1,this.selelctedCategory=null,this.searchProductField="",this._platform.backButton.subscribeWithPriority(-1,()=>{this._route.url&&this._route.url.search("dashboard")>0&&localStorage.getItem("token")&&b.g.exitApp()}),this._account.userDetailsObservable.subscribe(p=>{this.userDetails=p,console.log(this.userDetails),this._global.initCart(this.userDetails.id),this.cartList=this._global.retriveCart(this.userDetails.id).list}),this._account.runTimePropObservable.subscribe(p=>{this.runTimeProps=p})}toggleNav(){this.isNavOpen=!this.isNavOpen}toggleAccount(){this.isAccountOpen=!this.isAccountOpen}closeNav(){this.isNavOpen=!1}closeAccount(){this.isAccountOpen=!1}logout(){var o=this;return(0,_.Z)(function*(){o._global.setLoader(!0);const n=o._user.logout(o.userDetails.id).subscribe(i=>{o._global.setLoader(!1),o._account.logout()},i=>{o._global.setLoader(!1),401===i.error.statusCode?o._user.getToken().subscribe(c=>{o._global.token=c.token.access.token},c=>{401===c.error.statusCode?(o.toaster.error("Kindly re-login using username and password to continue.","Not Authorized",{timeOut:5e3}),o._account.logout()):(o.toaster.error("Error while processing your request.","Error While Processing",{timeOut:5e3}),o._global.setServerErr(!0))}):(o.toaster.error("Error while processing your request.","Error While Processing",{timeOut:5e3}),o._global.setServerErr(!0))});o.apiSubscription.add(n)})()}ionViewWillEnter(){this._global.setServerErr(!1),this.apiSubscription=new h.w0,this.isAllProducts=!0,this.isNavOpen=!1,this.isAccountOpen=!1,this.selelctedCategory=null,this.getProductList(),this.userDetails.id&&(this._global.initCart(this.userDetails.id),this.cartList=this._global.retriveCart(this.userDetails.id).list)}ionViewWillLeave(){this.apiSubscription.unsubscribe(),this._global.setServerErr(!1),this.isNavOpen=!1,this.isAccountOpen=!1}back(){this._global.setServerErr(!1),this._nav.back()}handleRefresh(o){this.isAllProducts=!0,this.selelctedCategory=null,this.isNavOpen=!1,this.isAccountOpen=!1,this.fetchProducts(o)}getProductList(){this.productList=[],this.categoryList=[],this._global.productData?this.processProducts(this._global.productData):this.fetchProducts()}fetchProducts(o){this.productList=[],this._user.productList().subscribe(n=>{console.log(n),this._global.productData=n,this.productData=n,this.processProducts(n),o&&o.target.complete()})}processProducts(o){this.isAllProducts&&!this.selelctedCategory?Object.keys(o.products).forEach(n=>{this.productList=[...this.productList,...o.products[n]]}):this.productList=o.products[this.selelctedCategory.id],Object.keys(o.categories).forEach(n=>{var i;this.categoryList.push({...o.categories[n],totalProducts:null===(i=o.products[n])||void 0===i?void 0:i.length})})}selectCategory(o){this.isAllProducts=!1,this.selelctedCategory=o,this.isNavOpen=!1,this.filterProducts()}filterProducts(){!this.isAllProducts&&this.selelctedCategory&&(this.productList=this.productData.products[this.selelctedCategory.id])}changeSearch(){}searchProducts(){}addToCart(o){this.cartList=this._global.addToCart(o,this.userDetails.id).list}openCart(){this._nav.navigateForward("cart")}ngOnDestroy(){this.apiSubscription.unsubscribe()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.SH),t.Y36(P.K),t.Y36(C.U),t.Y36(O._W),t.Y36(v.B),t.Y36(l.t4),t.Y36(g.F0),t.Y36(l.jP,8))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard"]],decls:63,vars:13,consts:[["slot","fixed",3,"ionRefresh"],[1,"products-screen"],[1,"products-container"],[1,"product-header-container"],[1,"product-search"],[1,"product-search-form"],["type","text",1,"form-field",3,"ngModel","input","ngModelChange"],[1,"seach-icon"],[1,"material-symbols-outlined"],[1,"product-filter"],[1,"category-title"],[4,"ngIf"],[1,"products-list-container"],["class","no-item",4,"ngIf"],[1,"products-list"],["class","products-item",3,"click",4,"ngFor","ngForOf"],[1,"app-navigation"],[1,"app-nav-bar",3,"click"],["src","assets/images/menu-icon.png","alt",""],[1,"app-nav-cart",3,"click"],[1,"app-nav-cart-count"],[1,"app-nav-user",3,"click"],["src","assets/images/user-icon.png","alt",""],[1,"nav-container"],[1,"nav-sub-section"],[1,"nav-title"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"nav-bottom"],[1,"btn","btn-primary","btn-full",3,"click"],[3,"click"],[1,"no-item"],[1,"products-item",3,"click"],[1,"product-image"],[1,"product-img"],[3,"src","alt"],[1,"product-content"],[1,"product-content-bottom"],[1,"price"],[1,"product-qty"],[3,"ngClass","click"],["class","record-count",4,"ngIf"],[1,"record-count"]],template:function(o,n){1&o&&(t.TgZ(0,"ion-content")(1,"ion-refresher",0),t.NdJ("ionRefresh",function(c){return n.handleRefresh(c)}),t.qZA(),t.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"form")(8,"input",6),t.NdJ("input",function(){return n.changeSearch()})("ngModelChange",function(c){return n.searchProductField=c}),t.qZA(),t.TgZ(9,"div",7)(10,"span",8),t._uU(11," search "),t.qZA()()(),t.TgZ(12,"div",9)(13,"span",8),t._uU(14," tune "),t.qZA()()()(),t.TgZ(15,"div",10),t.YNc(16,M,2,1,"h2",11),t.YNc(17,x,2,1,"span",11),t.YNc(18,y,2,0,"h2",11),t.YNc(19,Z,2,1,"span",11),t.qZA()(),t.TgZ(20,"div",12),t.YNc(21,T,2,0,"div",13),t.TgZ(22,"div",14),t.YNc(23,w,18,9,"div",15),t.qZA()(),t.TgZ(24,"div",16)(25,"div",17),t.NdJ("click",function(){return n.toggleNav()}),t._UZ(26,"img",18),t.qZA(),t.TgZ(27,"div",19),t.NdJ("click",function(){return n.openCart()}),t.TgZ(28,"span",8),t._uU(29," shopping_cart "),t.qZA(),t.TgZ(30,"div",20),t._uU(31),t.qZA()(),t.TgZ(32,"div",21),t.NdJ("click",function(){return n.toggleAccount()}),t._UZ(33,"img",22),t.qZA()()(),t.TgZ(34,"div",23)(35,"div",24)(36,"div",25),t._uU(37," Category "),t.qZA(),t.TgZ(38,"ul"),t.YNc(39,D,5,5,"li",26),t.qZA()(),t.TgZ(40,"div",27)(41,"button",28),t.NdJ("click",function(){return n.closeNav()}),t._uU(42,"CLOSE"),t.qZA()()(),t.TgZ(43,"div",23)(44,"div",24)(45,"div",25),t._uU(46," Account "),t.qZA(),t.TgZ(47,"ul")(48,"li"),t._uU(49," My Account "),t.TgZ(50,"span",8),t._uU(51," chevron_right "),t.qZA()(),t.TgZ(52,"li"),t._uU(53," Update Password "),t.TgZ(54,"span",8),t._uU(55," chevron_right "),t.qZA()(),t.TgZ(56,"li",29),t.NdJ("click",function(){return n.logout()}),t._uU(57," Logout "),t.TgZ(58,"span",8),t._uU(59," chevron_right "),t.qZA()()()(),t.TgZ(60,"div",27)(61,"button",28),t.NdJ("click",function(){return n.closeAccount()}),t._uU(62,"CLOSE"),t.qZA()()()()()),2&o&&(t.xp6(8),t.Q6J("ngModel",n.searchProductField),t.xp6(8),t.Q6J("ngIf",n.selelctedCategory),t.xp6(1),t.Q6J("ngIf",n.selelctedCategory),t.xp6(1),t.Q6J("ngIf",!n.selelctedCategory),t.xp6(1),t.Q6J("ngIf",!n.selelctedCategory),t.xp6(2),t.Q6J("ngIf",!(null!=n.productList&&n.productList.length)),t.xp6(2),t.Q6J("ngForOf",n.productList),t.xp6(8),t.Oqu(n.cartList.length),t.xp6(3),t.ekj("nav-open",n.isNavOpen),t.xp6(5),t.Q6J("ngForOf",n.categoryList),t.xp6(4),t.ekj("isAccountOpen",n.isAccountOpen))},dependencies:[d.mk,d.sg,d.O5,a._Y,a.Fj,a.JJ,a.JL,a.On,a.F,l.W2,l.nJ,d.JJ],styles:['@font-face{font-family:Roboto;src:url(Roboto-Light.f656ed35575e1c0f.eot);src:url(Roboto-Light.f656ed35575e1c0f.eot?#iefix) format("embedded-opentype"),url(Roboto-Light.c1908aa102c46043.woff2) format("woff2"),url(Roboto-Light.8cac82b1a11049d3.woff) format("woff"),url(Roboto-Light.fa832957ce203a1f.ttf) format("truetype"),url(Roboto-Light.34efe5d000a8ca90.svg#Roboto-Light) format("svg");font-weight:300;font-style:normal;font-display:swap}@font-face{font-family:Roboto;src:url(Roboto-Regular.b25cf3301056b4b4.eot);src:url(Roboto-Regular.b25cf3301056b4b4.eot?#iefix) format("embedded-opentype"),url(Roboto-Regular.f4d7b837cc2163cf.woff2) format("woff2"),url(Roboto-Regular.d5a2d8d3d95274b5.woff) format("woff"),url(Roboto-Regular.65fc651f02e5e0ff.ttf) format("truetype"),url(Roboto-Regular.8e2b9e5579cc8e75.svg#Roboto-Regular) format("svg");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Roboto;src:url(Roboto-Medium.8550e2fcd7290684.eot);src:url(Roboto-Medium.8550e2fcd7290684.eot?#iefix) format("embedded-opentype"),url(Roboto-Medium.334eddbab94a4494.woff2) format("woff2"),url(Roboto-Medium.a26c0b28a2d61b9e.woff) format("woff"),url(Roboto-Medium.87ab7dfc46a8c544.ttf) format("truetype"),url(Roboto-Medium.05b3de98db65b636.svg#Roboto-Medium) format("svg");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:Roboto;src:url(Roboto-Bold.973763fa36dfdd5a.eot);src:url(Roboto-Bold.973763fa36dfdd5a.eot?#iefix) format("embedded-opentype"),url(Roboto-Bold.2a79de665cdad0c3.woff2) format("woff2"),url(Roboto-Bold.363860c7885d8acb.woff) format("woff"),url(Roboto-Bold.6c732b04ad3bda27.ttf) format("truetype"),url(Roboto-Bold.9c350d0784176fe9.svg#Roboto-Bold) format("svg");font-weight:700;font-style:normal;font-display:swap}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%], form[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%]{font-family:Roboto;font-weight:400}button[_ngcontent-%COMP%], input[type*=button][_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Roboto;font-weight:500}.no-item[_ngcontent-%COMP%]{width:100%;border:1px solid #ff2f00;padding:20px;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;display:flex;justify-content:center;background:#ffffff;color:#ff2f00}.products-screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.products-screen[_ngcontent-%COMP%]   .products-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center;overflow:auto;padding-bottom:80px}.products-screen[_ngcontent-%COMP%]   .products-container[_ngcontent-%COMP%]   .product-header-container[_ngcontent-%COMP%]{background-color:#f0f0f0;padding:20px;width:100%;box-shadow:0 0 20px #0003;border-bottom:1px solid #cdcdcd;position:sticky;top:0}.products-screen[_ngcontent-%COMP%]   .products-container[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-weight:500;color:#000;font-size:14px;align-items:center}.products-screen[_ngcontent-%COMP%]   .products-container[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;margin:0}.products-list-container[_ngcontent-%COMP%]{padding:20px;width:100%}.products-list-container[_ngcontent-%COMP%]   .products-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}@media screen and (max-width: 400px){.products-list-container[_ngcontent-%COMP%]   .products-list[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}.products-list-container[_ngcontent-%COMP%]   .products-list[_ngcontent-%COMP%]   .products-item[_ngcontent-%COMP%]{border:2px solid #cdcdcd;border-radius:4px;padding:10px;display:flex;flex-direction:column}.products-list-container[_ngcontent-%COMP%]   .products-list[_ngcontent-%COMP%]   .products-item[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]{flex-grow:3;display:flex;margin-bottom:10px}.products-list-container[_ngcontent-%COMP%]   .products-list[_ngcontent-%COMP%]   .products-item[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]{height:110px;width:100%;display:flex;align-items:center;justify-content:center;padding:5px;box-shadow:0 0 5px #0003;-moz-box-shadow:0 0 5px rgba(0,0,0,.2);-webkit-box-shadow:0 0 5px rgba(0,0,0,.2)}.products-list-container[_ngcontent-%COMP%]   .products-list[_ngcontent-%COMP%]   .products-item[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:contain;width:100%;height:100%}.products-list-container[_ngcontent-%COMP%]   .products-list[_ngcontent-%COMP%]   .products-item[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.products-list-container[_ngcontent-%COMP%]   .products-list[_ngcontent-%COMP%]   .products-item[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   .product-content-bottom[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.products-list-container[_ngcontent-%COMP%]   .products-list[_ngcontent-%COMP%]   .products-item[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   .product-content-bottom[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%]{font-size:14px}.products-list-container[_ngcontent-%COMP%]   .products-list[_ngcontent-%COMP%]   .products-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 10px;font-size:14px}.products-list-container[_ngcontent-%COMP%]   .products-list[_ngcontent-%COMP%]   .products-item[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:14px}.products-list-container[_ngcontent-%COMP%]   .products-list[_ngcontent-%COMP%]   .products-item[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:500;font-size:18px;padding-right:5px}.app-navigation[_ngcontent-%COMP%]{position:fixed;width:100%;padding:15px 20px;background-color:#fff;bottom:0;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #cdcdcd;box-shadow:0 0 20px #0003}.app-navigation[_ngcontent-%COMP%]   .app-nav-bar[_ngcontent-%COMP%]{cursor:pointer}.app-navigation[_ngcontent-%COMP%]   .app-nav-cart[_ngcontent-%COMP%]{width:60px;border-radius:4px;height:50px;background-color:#ff2f00;display:flex;justify-content:center;align-items:center;color:#fff;position:relative;cursor:pointer}.app-navigation[_ngcontent-%COMP%]   .app-nav-cart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:28px}.app-navigation[_ngcontent-%COMP%]   .app-nav-cart[_ngcontent-%COMP%]   .app-nav-cart-count[_ngcontent-%COMP%]{width:30px;height:25px;background-color:#333;border-radius:4px;text-align:center;color:#fff;line-height:26px;position:absolute;right:-15px;top:-10px}.app-navigation[_ngcontent-%COMP%]   .app-nav-user[_ngcontent-%COMP%]{display:flex;cursor:pointer}.app-navigation[_ngcontent-%COMP%]   .app-nav-user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:1px solid #959595;border-radius:50%;width:45px;height:45px;object-fit:cover}']}),e})()}];let k=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(L),g.Bz]}),e})();var N=r(6208);let U=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,a.u5,l.Pc,k,N.m]}),e})()}}]);