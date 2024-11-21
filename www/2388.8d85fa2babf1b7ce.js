"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2388],{2388:(U,h,i)=>{i.r(h),i.d(h,{CheckoutPageModule:()=>A});var s=i(6814),a=i(95),l=i(5548),u=i(4670),f=i(7055),p=i(7394),t=i(6689),b=i(4695),y=i(9229),_=i(5821),C=i(7535);function P(e,c){1&e&&(t.TgZ(0,"i"),t._UZ(1,"img",21),t.qZA())}function M(e,c){1&e&&(t.TgZ(0,"i"),t._UZ(1,"img",22),t.qZA())}function x(e,c){1&e&&(t.TgZ(0,"i"),t._UZ(1,"img",23),t.qZA())}function O(e,c){if(1&e&&t._UZ(0,"input",24),2&e){const o=t.oxw().$implicit;t.s9C("placeholder",o.placeholder)}}const k=function(e){return{active:e}};function v(e,c){if(1&e){const o=t.EpF();t.TgZ(0,"li",16),t.NdJ("click",function(){const d=t.CHM(o).$implicit,g=t.oxw();return t.KtG(g.selectMethod(d))}),t.TgZ(1,"strong")(2,"label"),t.YNc(3,P,2,0,"i",17),t.YNc(4,M,2,0,"i",17),t.YNc(5,x,2,0,"i",17),t._uU(6),t.qZA(),t.TgZ(7,"span",18),t._UZ(8,"span",19),t.qZA()(),t.YNc(9,O,1,1,"input",20),t.qZA()}if(2&e){const o=c.$implicit;t.Q6J("ngClass",t.VKq(6,k,o.isSelected)),t.xp6(3),t.Q6J("ngIf","CASH"===o.title),t.xp6(1),t.Q6J("ngIf","MOMO"===o.title),t.xp6(1),t.Q6J("ngIf","BALAANZ ACCOUNT"===o.title),t.xp6(1),t.hij(" ",o.title," "),t.xp6(3),t.Q6J("ngIf",o.userInput&&o.isSelected)}}function w(e,c){if(1&e){const o=t.EpF();t.TgZ(0,"div",25),t._UZ(1,"div",26),t.TgZ(2,"div",27)(3,"h2"),t._uU(4,"Payment Timeout!"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"Payment has been timeout."),t.qZA(),t.TgZ(7,"div",28)(8,"button",29),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.retryPayment())}),t._uU(9,"Retry"),t.qZA(),t.TgZ(10,"button",30),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.closePayment())}),t._uU(11,"Close"),t.qZA()()()()}}const T=function(e){return{disabled:e}},Z=[{path:"",component:(()=>{class e{constructor(o,n,r,d,g,F,S,L){this._nav=o,this._user=n,this._toastr=r,this._global=d,this._platform=g,this._route=F,this._account=S,this._fb=L,this.userDetails=null,this.cartList=[],this.runTimeProps=null,this.cartSummary={},this.apiSubscription=new p.w0,this.paymentSelected=null,this.statusMaxCycle=3,this.statusCycle=0,this.isPaymentTimeout=!1,this.paymentRequest=null,this.paymentMethods=[{title:"CASH",id:1,userInput:!1,isSelected:!1,placeholder:null,navVal:"CASH"},{title:"MOMO",id:2,userInput:!0,isSelected:!1,placeholder:"Enter MOMO Number",navVal:"MOMO"},{title:"BALAANZ ACCOUNT",id:3,userInput:!0,isSelected:!1,placeholder:"Enter Account Number",navVal:"ACCOUNT"}],this.paymentForm=new a.cw({}),this._platform.backButton.subscribeWithPriority(-1,()=>{this._route.url&&this._route.url.search("dashboard")>0&&localStorage.getItem("token")&&f.g.exitApp()}),this._account.userDetailsObservable.subscribe(m=>{this.userDetails=m,this._global.initCart(this.userDetails.id),this.cartList=this._global.retriveCart(this.userDetails.id).list,this.cartSummary=this._global.getCartSummary(),this.checkCart()}),this._account.runTimePropObservable.subscribe(m=>{this.runTimeProps=m})}ngOnInit(){this.generateForm()}checkCart(){setTimeout(()=>{this.cartList.length||this._nav.navigateBack("dashboard")},1e3)}ionViewWillEnter(){this._global.setServerErr(!1),this.apiSubscription=new p.w0,this.generateForm(),this.userDetails.id&&(this.cartList=this._global.retriveCart(this.userDetails.id).list,this.cartSummary=this._global.getCartSummary(),this.checkCart())}ionViewWillLeave(){this.apiSubscription.unsubscribe(),this._global.setServerErr(!1)}generateForm(){this.paymentForm=this._fb.group({method:["",[a.kI.required]],value:["",[]]}),this.validateForm()}back(){this._global.setServerErr(!1),this._nav.back()}selectMethod(o){this.paymentMethods.forEach(n=>{n.isSelected=!1}),this.paymentSelected=o,o.isSelected=!0,this.validateForm()}validateForm(){this.paymentSelected&&(this.paymentForm.get("method").setValue(this.paymentSelected.navVal),this.paymentForm.get("value").setValue("")),"MOMO"===this.paymentForm.get("method").value||"ACCOUNT"===this.paymentForm.get("method").value?(this.paymentForm.get("value").setValidators([a.kI.required,a.kI.pattern(/^\d{9}$/)]),this.paymentForm.get("value").updateValueAndValidity()):(this.paymentForm.get("method"),this.paymentForm.get("value").setValidators(null),this.paymentForm.get("value").updateValueAndValidity())}processPayment(){const o={mode:{type:this.paymentForm.value.method,identifier:this.paymentForm.value.value},cartContent:{}};this.cartList.forEach(n=>{o.cartContent[n.id]={productId:n.id,productName:n.name,quantity:n.quantity,productPrice:n.unitPrice}}),this._global.setLoader(!0),setTimeout(()=>{this._user.pay(o).subscribe(n=>{"CASH"!==this.paymentForm.value.method?this.checkStatus(n):(this._global.setPaymentData(this.paymentForm.value),this._nav.navigateForward("receipt/0"),this._global.setLoader(!1))},n=>{this._global.setLoader(!1)})},1e3)}checkStatus(o){if(this.statusCycle===this.statusMaxCycle)return this.paymentRequest=o,this.isPaymentTimeout=!0,void this._global.setLoader(!1);this._user.payStatus(o.requestId).subscribe(n=>{if(this.statusCycle+=1,"success"===n.status)return this.statusCycle=0,this._global.setPaymentData(this.paymentForm.value),this._nav.navigateForward("receipt/"+n.requestId),void this._global.setLoader(!1);"pending"===n.status?setTimeout(()=>{this.checkStatus(o)},1e4):this._toastr.error("Payment has been failed.","Payment Failed!")},n=>{this._global.setLoader(!1)})}retryPayment(){this.isPaymentTimeout=!1,this.statusCycle=0,this._global.setLoader(!0),this.checkStatus(this.paymentRequest),this.paymentRequest=null}closePayment(){this.isPaymentTimeout=!1,this.statusCycle=0,this.paymentRequest=null}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.SH),t.Y36(b.K),t.Y36(y._W),t.Y36(_.U),t.Y36(l.t4),t.Y36(u.F0),t.Y36(C.B),t.Y36(a.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-checkout"]],decls:34,vars:12,consts:[[1,"checkout-screen"],[1,"checkout-container"],[1,"app-header"],[1,"back-page",3,"click"],[1,"material-symbols-outlined"],[1,"app-page-title"],[1,"checkout-body"],[1,"checkout-summery"],[1,"checkout-summery-item"],[1,"payment-method-block"],[3,"formGroup"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"checkout-bottom"],[1,"checkout-btn",3,"ngClass","click"],[1,"checkout-btn-right"],["class","dialog",4,"ngIf"],[3,"ngClass","click"],[4,"ngIf"],[1,"radio-symbol"],[1,"radio-symbol-inner"],["type","text","class","form-field","formControlName","value",3,"placeholder",4,"ngIf"],["src","/assets/images/coin.png"],["src","/assets/images/mtn.png"],["src","/assets/images/account.png"],["type","text","formControlName","value",1,"form-field",3,"placeholder"],[1,"dialog"],[1,"dialog-overlay"],[1,"retry-payment"],[1,"dialog-action"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-secondary",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.NdJ("click",function(){return n.back()}),t.TgZ(4,"span",4),t._uU(5," arrow_back "),t.qZA()(),t.TgZ(6,"div",5),t._uU(7," My Checkout "),t.qZA()(),t.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"label"),t._uU(12,"Total"),t.qZA(),t.TgZ(13,"h2"),t._uU(14),t.ALo(15,"number"),t.TgZ(16,"span"),t._uU(17,"frs"),t.qZA()()()(),t.TgZ(18,"div",9)(19,"h4"),t._uU(20,"Payment Method"),t.qZA(),t.TgZ(21,"form",10)(22,"ul"),t.YNc(23,v,10,8,"li",11),t.qZA()()()(),t.TgZ(24,"div",12)(25,"div",13),t.NdJ("click",function(){return n.processPayment()}),t.TgZ(26,"label"),t._uU(27,"Pay"),t.qZA(),t.TgZ(28,"div",14),t._uU(29),t.ALo(30,"number"),t.TgZ(31,"span",4),t._uU(32," chevron_right "),t.qZA()()()()()(),t.YNc(33,w,12,0,"div",15)),2&o&&(t.xp6(14),t.hij("",t.lcZ(15,6,n.cartSummary.totalAmount)," "),t.xp6(7),t.Q6J("formGroup",n.paymentForm),t.xp6(2),t.Q6J("ngForOf",n.paymentMethods),t.xp6(2),t.Q6J("ngClass",t.VKq(10,T,n.paymentForm.invalid||!n.cartList.length)),t.xp6(4),t.hij(" ",t.lcZ(30,8,n.cartSummary.totalAmount)," frs "),t.xp6(4),t.Q6J("ngIf",n.isPaymentTimeout))},dependencies:[s.mk,s.sg,s.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,s.JJ],styles:['@font-face{font-family:Roboto;src:url(Roboto-Light.f656ed35575e1c0f.eot);src:url(Roboto-Light.f656ed35575e1c0f.eot?#iefix) format("embedded-opentype"),url(Roboto-Light.c1908aa102c46043.woff2) format("woff2"),url(Roboto-Light.8cac82b1a11049d3.woff) format("woff"),url(Roboto-Light.fa832957ce203a1f.ttf) format("truetype"),url(Roboto-Light.34efe5d000a8ca90.svg#Roboto-Light) format("svg");font-weight:300;font-style:normal;font-display:swap}@font-face{font-family:Roboto;src:url(Roboto-Regular.b25cf3301056b4b4.eot);src:url(Roboto-Regular.b25cf3301056b4b4.eot?#iefix) format("embedded-opentype"),url(Roboto-Regular.f4d7b837cc2163cf.woff2) format("woff2"),url(Roboto-Regular.d5a2d8d3d95274b5.woff) format("woff"),url(Roboto-Regular.65fc651f02e5e0ff.ttf) format("truetype"),url(Roboto-Regular.8e2b9e5579cc8e75.svg#Roboto-Regular) format("svg");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Roboto;src:url(Roboto-Medium.8550e2fcd7290684.eot);src:url(Roboto-Medium.8550e2fcd7290684.eot?#iefix) format("embedded-opentype"),url(Roboto-Medium.334eddbab94a4494.woff2) format("woff2"),url(Roboto-Medium.a26c0b28a2d61b9e.woff) format("woff"),url(Roboto-Medium.87ab7dfc46a8c544.ttf) format("truetype"),url(Roboto-Medium.05b3de98db65b636.svg#Roboto-Medium) format("svg");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:Roboto;src:url(Roboto-Bold.973763fa36dfdd5a.eot);src:url(Roboto-Bold.973763fa36dfdd5a.eot?#iefix) format("embedded-opentype"),url(Roboto-Bold.2a79de665cdad0c3.woff2) format("woff2"),url(Roboto-Bold.363860c7885d8acb.woff) format("woff"),url(Roboto-Bold.6c732b04ad3bda27.ttf) format("truetype"),url(Roboto-Bold.9c350d0784176fe9.svg#Roboto-Bold) format("svg");font-weight:700;font-style:normal;font-display:swap}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%], form[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%]{font-family:Roboto;font-weight:400}button[_ngcontent-%COMP%], input[type*=button][_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Roboto;font-weight:500}.dialog[_ngcontent-%COMP%]{position:fixed;top:0px;left:0px;right:0px;bottom:0px}.retry-payment[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:fixed;top:50%;left:20px;right:20px;background:#ffffff;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;box-shadow:0 0 30px #0006;-moz-box-shadow:0 0 30px rgba(0,0,0,.4);-webkit-box-shadow:0 0 30px rgba(0,0,0,.4);transform:translateY(-50%);z-index:1001}.retry-payment[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:100%;padding:15px 20px;font-size:24px;color:#333;font-weight:500;border-bottom:1px solid #cdcdcd;margin:0}.retry-payment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#333;line-height:20px;margin:0;width:100%;padding:15px 20px}.retry-payment[_ngcontent-%COMP%]   .dialog-action[_ngcontent-%COMP%]{padding:20px;display:flex;justify-content:space-between}.dialog-overlay[_ngcontent-%COMP%]{position:fixed;top:0px;right:0px;left:0px;bottom:0px;background:rgba(0,0,0,.7);z-index:1000;content:"";display:flex}.checkout-screen[_ngcontent-%COMP%]{background-color:#f0f0f0;min-height:100%;display:flex;flex-direction:column}.checkout-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;overflow:auto}.checkout-body[_ngcontent-%COMP%]{padding:20px 20px 70px;width:100%;display:flex;flex-direction:column}.checkout-body[_ngcontent-%COMP%]   .checkout-summery[_ngcontent-%COMP%]{padding:15px;font-size:18px;background:#ffffff;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;box-shadow:0 0 15px 2px #7d7d7d33;-moz-box-shadow:0 0 15px 2px rgba(125,125,125,.2);-webkit-box-shadow:0 0 15px 2px rgba(125,125,125,.2)}.checkout-body[_ngcontent-%COMP%]   .checkout-summery[_ngcontent-%COMP%]   .checkout-summery-item[_ngcontent-%COMP%]{display:flex;margin-bottom:20px;flex-direction:column}.checkout-body[_ngcontent-%COMP%]   .checkout-summery[_ngcontent-%COMP%]   .checkout-summery-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;font-weight:400;margin:0;width:100%;text-align:center;padding-bottom:5px}.checkout-body[_ngcontent-%COMP%]   .checkout-summery[_ngcontent-%COMP%]   .checkout-summery-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;font-weight:500;margin:0;width:100%;text-align:center}.checkout-body[_ngcontent-%COMP%]   .checkout-summery[_ngcontent-%COMP%]   .checkout-summery-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;font-weight:400}.checkout-body[_ngcontent-%COMP%]   .checkout-summery[_ngcontent-%COMP%]   .checkout-summery-item[_ngcontent-%COMP%]:last-child{margin-bottom:0}.checkout-bottom[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%;padding:20px;text-align:center}.checkout-bottom[_ngcontent-%COMP%]   .checkout-btn[_ngcontent-%COMP%]{background:#ff2f00;border-radius:50px;color:#fff;display:flex;justify-content:space-between;align-items:center;padding:15px 20px;box-shadow:0 0 20px #0003;cursor:pointer;font-size:18px}.checkout-bottom[_ngcontent-%COMP%]   .checkout-btn[_ngcontent-%COMP%]   .checkout-btn-right[_ngcontent-%COMP%]{display:flex;align-items:center}.checkout-bottom[_ngcontent-%COMP%]   .checkout-btn.disabled[_ngcontent-%COMP%]{background:#999999;cursor:not-allowed}.payment-method-block[_ngcontent-%COMP%]{display:inline-block;width:100%}.payment-method-block[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.payment-method-block[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:#ffffff;box-shadow:0 0 15px 2px #7d7d7d33;margin-bottom:10px;padding:20px;border-radius:10px;cursor:pointer}.payment-method-block[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .radio-symbol[_ngcontent-%COMP%]{width:24px;height:24px;border:3px solid #666666;display:flex;border-radius:100%;-moz-border-radius:100%;-webkit-border-radius:100%;justify-content:center;align-items:center}.payment-method-block[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .radio-symbol[_ngcontent-%COMP%]   .radio-symbol-inner[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:100%;-moz-border-radius:100%;-webkit-border-radius:100%;background:#666666;display:none}.payment-method-block[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .radio-symbol[_ngcontent-%COMP%]   .radio-symbol-inner[_ngcontent-%COMP%]{display:flex}.payment-method-block[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.payment-method-block[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;align-items:center}.payment-method-block[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding-right:10px}.payment-method-block[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px}.payment-method-block[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{margin-top:10px;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px}']}),e})()}];let R=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(Z),u.Bz]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.ez,a.u5,l.Pc,R,a.UX]}),e})()}}]);