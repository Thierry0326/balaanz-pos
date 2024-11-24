"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7616],{7616:(B,m,r)=>{r.r(m),r.d(m,{ReceiptPageModule:()=>T});var l=r(6814),P=r(95),d=r(5548),g=r(4670),b=r(7055),h=r(7394),y=r(6676),t=r(6689),C=r(4695),M=r(9229),O=r(5821),_=r(7535),x=r(5861);const i=(0,r(2726).fo)("SunmiPlugin");let R=(()=>{class o{constructor(e){this.decimalPipe=e}fillSpace(e,n){const a=" ".repeat(29-e.length);return"right"===n?a+e:e+a}breakWords(e,n){return e.match(/.{1,29}/g).map(p=>p.length<29?this.fillSpace(p,n):p).join("")}dashedBorder(){return"-----------------------------"}formatLines(e,n="left"){return e.length>29?this.breakWords(e,n):this.fillSpace(e,n)}addEmptyLine(){return"                             "}formatColumn2(e,n){const c=e.length,a=n.length;return c+" ".repeat(29-(c+a))+a}printProducts(e){return new Promise((n,c)=>{e.cartList.forEach(a=>{i.text({text:this.formatLines(`${a.name} X ${a.quantity}`)}),i.text({text:this.formatLines(`${this.decimalPipe.transform(a.unitPrice)}`,"right")})}),n(!0)})}print(e){var n=this;return(0,x.Z)(function*(){yield i.start(),yield i.align({direction:"LEFT"}),yield i.fontSize({size:1}),yield i.text({text:n.formatLines("======== BALAANZ POS ========")}),yield i.text({text:n.addEmptyLine()}),yield i.text({text:n.formatLines(`Agent: ${e.userDetails.first_name} ${e.userDetails.last_name}`)}),yield i.text({text:n.formatLines("Order Type: SALE")}),yield i.text({text:n.formatLines(`Payment Method: ${e.paymentData.method}`)}),"CASH"!==e.paymentData.method&&(yield i.text({text:n.formatLines(`Account: ${e.paymentData.value}`)})),yield i.text({text:n.addEmptyLine()}),yield i.text({text:n.formatLines("Product List")}),yield i.text({text:n.dashedBorder()}),yield n.printProducts(e),yield i.text({text:n.dashedBorder()}),yield i.text({text:n.formatLines(`Total: ${n.decimalPipe.transform(e.cartSummary.totalAmount)}`,"right")}),yield i.text({text:n.addEmptyLine()}),yield i.text({text:n.formatLines("Thank you for shopping with")}),yield i.text({text:n.formatLines("us")}),yield i.text({text:n.addEmptyLine()}),yield i.text({text:n.addEmptyLine()}),yield i.text({text:n.addEmptyLine()}),yield i.print()})()}ngOnDestroy(){}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(l.JJ))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function w(o,s){if(1&o&&(t.TgZ(0,"li")(1,"label"),t._uU(2),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.qZA(),t.TgZ(5,"b"),t._uU(6),t.ALo(7,"number"),t.qZA()()),2&o){const e=s.$implicit;t.xp6(2),t.hij(" ",e.name," "),t.xp6(2),t.hij(" X ",e.quantity," "),t.xp6(2),t.hij(" ",t.lcZ(7,3,e.unitPrice)," frs ")}}function L(o,s){if(1&o&&(t.TgZ(0,"div",15)(1,"ul"),t.YNc(2,w,8,5,"li",16),t.qZA(),t.TgZ(3,"div",17)(4,"h4")(5,"label"),t._uU(6,"Total:"),t.qZA(),t.TgZ(7,"b"),t._uU(8),t.ALo(9,"number"),t.qZA()()()()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.receiptCartList),t.xp6(6),t.hij("",t.lcZ(9,2,e.receiptCartSummary.totalAmount)," frs")}}const S=[{path:"",component:(()=>{class o{constructor(e,n,c,a,p,u,A,D,U){this._nav=e,this._user=n,this._toastr=c,this._global=a,this._platform=p,this._route=u,this._account=A,this._sunmi=D,this._actRoute=U,this.userDetails=null,this.cartList=[],this.runTimeProps=null,this.cartSummary={},this.apiSubscription=new h.w0,this.currentDate=y().format("DD/MMM/YYYY HH:mm:ss"),this.receiptCartList=[],this.receiptCartSummary=[],this.requestId=null,this.paymentData=this._global.getPaymentData(),this._platform.backButton.subscribeWithPriority(-1,()=>{this._route.url&&this._route.url.search("dashboard")>0&&localStorage.getItem("token")&&b.g.exitApp()}),this.requestId=this._actRoute.snapshot.params.requestId,this._account.userDetailsObservable.subscribe(f=>{this.userDetails=f,this._global.initCart(this.userDetails.id),this.cartList=this._global.retriveCart(this.userDetails.id).list,this.cartSummary=this._global.getCartSummary()}),this._account.runTimePropObservable.subscribe(f=>{this.runTimeProps=f})}ngOnInit(){}clearCart(){this.cartList.length?(this._toastr.success("Payment has been successfully done.","Payment Successful"),this.receiptCartList=[...this.cartList],this.receiptCartSummary={...this.cartSummary},this._global.emptyCart(this.userDetails.id)):this._nav.navigateBack("dashboard")}ionViewWillEnter(){this._global.setServerErr(!1),this.apiSubscription=new h.w0,this.clearCart()}ionViewWillLeave(){this.apiSubscription.unsubscribe(),this._global.setServerErr(!1)}back(){this._global.setServerErr(!1),this._nav.navigateBack("dashboard")}printReceipt(){this._sunmi.print({cartList:this.receiptCartList,cartSummary:this.receiptCartSummary,currentDate:this.currentDate,userDetails:this.userDetails,paymentData:this.paymentData})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.SH),t.Y36(C.K),t.Y36(M._W),t.Y36(O.U),t.Y36(d.t4),t.Y36(g.F0),t.Y36(_.B),t.Y36(R),t.Y36(g.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-receipt"]],decls:42,vars:6,consts:[[1,"receipt-screen"],[1,"receipt-container"],[1,"app-header"],[1,"back-page",3,"click"],[1,"material-symbols-outlined"],[1,"app-page-title"],[1,"receipt-body"],[1,"receipt-page"],[1,"receipt-title"],[1,"receipt-header"],["class","receipt-products",4,"ngIf"],[1,"receipt-footer"],[1,"receipt-bottom"],[1,"receipt-btn",3,"click"],[1,"receipt-btn-right"],[1,"receipt-products"],[4,"ngFor","ngForOf"],[1,"receipt-product-summary"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.NdJ("click",function(){return n.back()}),t.TgZ(4,"span",4),t._uU(5," close "),t.qZA()(),t.TgZ(6,"div",5),t._uU(7," Receipt "),t.qZA()(),t.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"h2"),t._uU(12,"Balaanz POS"),t.qZA()(),t.TgZ(13,"div",9),t._UZ(14,"p"),t.TgZ(15,"p"),t._uU(16,"Agent: "),t.TgZ(17,"span"),t._uU(18),t.qZA()(),t.TgZ(19,"p"),t._uU(20,"Type: "),t.TgZ(21,"span"),t._uU(22,"SELL"),t.qZA()(),t.TgZ(23,"p"),t._uU(24,"Payment Method: "),t.TgZ(25,"span"),t._uU(26),t.qZA()(),t.TgZ(27,"p"),t._uU(28,"Order Date: "),t.TgZ(29,"span"),t._uU(30),t.qZA()()(),t.YNc(31,L,10,4,"div",10),t.TgZ(32,"div",11)(33,"p"),t._uU(34,"Thank you for shopping with us"),t.qZA()()()(),t.TgZ(35,"div",12)(36,"div",13),t.NdJ("click",function(){return n.printReceipt()}),t.TgZ(37,"label"),t._uU(38,"Print Receipt"),t.qZA(),t.TgZ(39,"div",14)(40,"span",4),t._uU(41," print "),t.qZA()()()()()()),2&e&&(t.xp6(18),t.AsE("",n.userDetails.first_name," ",n.userDetails.last_name,""),t.xp6(8),t.AsE("",n.paymentData.method," (",n.paymentData.value,")"),t.xp6(4),t.Oqu(n.currentDate),t.xp6(1),t.Q6J("ngIf",n.receiptCartList.length))},dependencies:[l.sg,l.O5,l.JJ],styles:['@font-face{font-family:Roboto;src:url(Roboto-Light.f656ed35575e1c0f.eot);src:url(Roboto-Light.f656ed35575e1c0f.eot?#iefix) format("embedded-opentype"),url(Roboto-Light.c1908aa102c46043.woff2) format("woff2"),url(Roboto-Light.8cac82b1a11049d3.woff) format("woff"),url(Roboto-Light.fa832957ce203a1f.ttf) format("truetype"),url(Roboto-Light.34efe5d000a8ca90.svg#Roboto-Light) format("svg");font-weight:300;font-style:normal;font-display:swap}@font-face{font-family:Roboto;src:url(Roboto-Regular.b25cf3301056b4b4.eot);src:url(Roboto-Regular.b25cf3301056b4b4.eot?#iefix) format("embedded-opentype"),url(Roboto-Regular.f4d7b837cc2163cf.woff2) format("woff2"),url(Roboto-Regular.d5a2d8d3d95274b5.woff) format("woff"),url(Roboto-Regular.65fc651f02e5e0ff.ttf) format("truetype"),url(Roboto-Regular.8e2b9e5579cc8e75.svg#Roboto-Regular) format("svg");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Roboto;src:url(Roboto-Medium.8550e2fcd7290684.eot);src:url(Roboto-Medium.8550e2fcd7290684.eot?#iefix) format("embedded-opentype"),url(Roboto-Medium.334eddbab94a4494.woff2) format("woff2"),url(Roboto-Medium.a26c0b28a2d61b9e.woff) format("woff"),url(Roboto-Medium.87ab7dfc46a8c544.ttf) format("truetype"),url(Roboto-Medium.05b3de98db65b636.svg#Roboto-Medium) format("svg");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:Roboto;src:url(Roboto-Bold.973763fa36dfdd5a.eot);src:url(Roboto-Bold.973763fa36dfdd5a.eot?#iefix) format("embedded-opentype"),url(Roboto-Bold.2a79de665cdad0c3.woff2) format("woff2"),url(Roboto-Bold.363860c7885d8acb.woff) format("woff"),url(Roboto-Bold.6c732b04ad3bda27.ttf) format("truetype"),url(Roboto-Bold.9c350d0784176fe9.svg#Roboto-Bold) format("svg");font-weight:700;font-style:normal;font-display:swap}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%], form[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%]{font-family:Roboto;font-weight:400}button[_ngcontent-%COMP%], input[type*=button][_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Roboto;font-weight:500}.receipt-screen[_ngcontent-%COMP%]{background-color:#f0f0f0;min-height:100%}.receipt-body[_ngcontent-%COMP%]{padding:20px 20px 70px;width:100%}.receipt-bottom[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%;padding:20px;text-align:center}.receipt-bottom[_ngcontent-%COMP%]   .receipt-btn[_ngcontent-%COMP%]{background:#ff2f00;border-radius:50px;color:#fff;display:flex;justify-content:space-between;align-items:center;padding:15px 20px;box-shadow:0 0 20px #0003;cursor:pointer;font-size:18px}.receipt-bottom[_ngcontent-%COMP%]   .receipt-btn[_ngcontent-%COMP%]   .receipt-btn-right[_ngcontent-%COMP%]{display:flex;align-items:center}.receipt-bottom[_ngcontent-%COMP%]   .receipt-btn.disabled[_ngcontent-%COMP%]{background:#999999;cursor:not-allowed}.receipt-page[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.receipt-page[_ngcontent-%COMP%]   .receipt-title[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center}.receipt-page[_ngcontent-%COMP%]   .receipt-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;padding:0 0 5px}.receipt-page[_ngcontent-%COMP%]   .receipt-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:2px 0;margin:0}.receipt-page[_ngcontent-%COMP%]   .receipt-header[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;border-bottom:1px dashed #000000;padding:20px 0}.receipt-page[_ngcontent-%COMP%]   .receipt-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:0;padding:2px 0;line-height:24px}.receipt-page[_ngcontent-%COMP%]   .receipt-products[_ngcontent-%COMP%]{width:100%;display:flex;padding:20px 0;flex-direction:column}.receipt-page[_ngcontent-%COMP%]   .receipt-products[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;width:100%;display:flex;flex-direction:column;padding:0 0 10px;margin:0;border-bottom:1px dashed #000000}.receipt-page[_ngcontent-%COMP%]   .receipt-products[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%;display:flex;padding-bottom:10px}.receipt-page[_ngcontent-%COMP%]   .receipt-products[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:50%}.receipt-page[_ngcontent-%COMP%]   .receipt-products[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:20%;text-align:right}.receipt-page[_ngcontent-%COMP%]   .receipt-products[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{width:30%;text-align:right}.receipt-page[_ngcontent-%COMP%]   .receipt-products[_ngcontent-%COMP%]   .receipt-product-summary[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;padding-top:20px}.receipt-page[_ngcontent-%COMP%]   .receipt-products[_ngcontent-%COMP%]   .receipt-product-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;width:100%;display:flex;padding:2px 0;line-height:24px}.receipt-page[_ngcontent-%COMP%]   .receipt-products[_ngcontent-%COMP%]   .receipt-product-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:70%;text-align:right}.receipt-page[_ngcontent-%COMP%]   .receipt-products[_ngcontent-%COMP%]   .receipt-product-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{width:30%;text-align:right}.receipt-page[_ngcontent-%COMP%]   .receipt-products[_ngcontent-%COMP%]   .receipt-product-summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;padding:2px 0;width:100%;display:flex}.receipt-page[_ngcontent-%COMP%]   .receipt-products[_ngcontent-%COMP%]   .receipt-product-summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:70%;text-align:right}.receipt-page[_ngcontent-%COMP%]   .receipt-products[_ngcontent-%COMP%]   .receipt-product-summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{width:30%;text-align:right}.receipt-page[_ngcontent-%COMP%]   .receipt-footer[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}.receipt-page[_ngcontent-%COMP%]   .receipt-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}']}),o})()}];let Z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.Bz.forChild(S),g.Bz]}),o})(),T=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.ez,P.u5,d.Pc,Z]}),o})()}}]);