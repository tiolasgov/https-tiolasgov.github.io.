"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[366],{2366:(_,m,o)=>{o.r(m),o.d(m,{OfficialsModule:()=>r});var t=o(4650),p=o(1203),g=o(9009),x=o(8278),C=o(5861),T=o(540),h=o(8925),O=o(3143),Z=o(6895),v=o(7392),s=o(8255),A=o(4859),y=o(266);function b(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"tr",12)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"button",6),t._UZ(9,"mat-icon",7),t.qZA(),t.TgZ(10,"mat-menu",8,9)(12,"button",10),t.NdJ("click",function(){const d=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.edit(d))}),t._uU(13," Edit "),t.qZA(),t.TgZ(14,"button",10),t.NdJ("click",function(){const d=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.remove(d.id))}),t._uU(15," Remove "),t.qZA()()()()}if(2&a){const e=i.$implicit,n=t.MAs(11);t.xp6(2),t.hij(" ",e.name," "),t.xp6(2),t.hij(" ",e.position," "),t.xp6(2),t.hij(" ",e.designation," "),t.xp6(2),t.Q6J("matMenuTriggerFor",n),t.xp6(2),t.Q6J("xPosition","before")}}class c{constructor(i,e,n){this._angularFireStore=i,this._addOfficialModal=e,this._editCaptainModal=n,this.CAPTAIN=T.F,this.editCaptainModalOpened$=this._editCaptainModal.opened$,this.officials=[]}ngOnInit(){this._angularFireStore.collection(h.V.OFFICIALS).valueChanges({idField:"id"}).subscribe(i=>{this.officials=i})}editCaptain(){this.editCaptainModalOpened$.next(!0)}edit(i){this._addOfficialModal.official$.next(i),this._addOfficialModal.opened$.next(!0)}remove(i){var e=this;return(0,C.Z)(function*(){if(confirm("Are you sure you want to delete this official?"))try{yield e._angularFireStore.collection(h.V.OFFICIALS).doc(i).delete()}catch{}})()}trackByFn(i,e){return e.id||i}}c.\u0275fac=function(i){return new(i||c)(t.Y36(O.ST),t.Y36(p.K),t.Y36(g.x))},c.\u0275cmp=t.Xpm({type:c,selectors:[["official-list"]],decls:29,vars:7,consts:[[1,"flex","flex-col","flex-auto","p-6","px-5","mb-5","overflow-hidden","bg-card"],[1,"flex","flex-col","flex-auto","overflow-x-auto","overflow-y-auto"],[1,"overflow-y-visible","min-w-240"],[1,"text-left","uppercase"],[1,"text-gray-700"],[1,"text-left","border-t","border-emerald-500","bg-emerald-50"],["matTooltip","more","mat-icon-button","",3,"matMenuTriggerFor"],["svgIcon","feather:more-horizontal"],[3,"xPosition"],["officialsMenu","matMenu"],["mat-menu-item","",3,"click"],["class","text-left border-t border-gray-100",4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-left","border-t","border-gray-100"]],template:function(i,e){if(1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"table",2)(3,"thead",3)(4,"tr")(5,"th",4),t._uU(6,"Name"),t.qZA(),t.TgZ(7,"th",4),t._uU(8,"Position"),t.qZA(),t.TgZ(9,"th",4),t._uU(10,"Designation"),t.qZA(),t._UZ(11,"th",4),t.qZA()(),t.TgZ(12,"tbody")(13,"tr",5)(14,"td"),t._uU(15),t.ALo(16,"async"),t.qZA(),t.TgZ(17,"td"),t._uU(18,"Punong Barangay"),t.qZA(),t.TgZ(19,"td"),t._uU(20,"N/A"),t.qZA(),t.TgZ(21,"td")(22,"button",6),t._UZ(23,"mat-icon",7),t.qZA(),t.TgZ(24,"mat-menu",8,9)(26,"button",10),t.NdJ("click",function(){return e.editCaptain()}),t._uU(27," Edit "),t.qZA()()()(),t.YNc(28,b,16,5,"tr",11),t.qZA()()()()),2&i){const n=t.MAs(25);let l;t.xp6(15),t.hij(" ",null!==(l=null==(l=t.lcZ(16,5,e.CAPTAIN))?null:l.name)&&void 0!==l?l:"..."," "),t.xp6(7),t.Q6J("matMenuTriggerFor",n),t.xp6(2),t.Q6J("xPosition","before"),t.xp6(4),t.Q6J("ngForOf",e.officials)("ngForTrackBy",e.trackByFn)}},dependencies:[Z.sg,v.Hw,s.VK,s.OP,s.p6,A.RK,y.gM,Z.Ov]});class f{constructor(i,e){this._addOfficialModal=i,this._editCaptainModal=e,this.opened$=this._addOfficialModal.opened$,this.editCaptainModalOpened$=this._editCaptainModal.opened$}}f.\u0275fac=function(i){return new(i||f)(t.Y36(p.K),t.Y36(g.x))},f.\u0275cmp=t.Xpm({type:f,selectors:[["officials"]],decls:8,vars:0,consts:[[1,"w-full"],["pageTitle","Officials","subtitle","Barangay Officials are being managed here.","icon","heroicons_outline:user-group",1,"w-full"],[1,"flex","items-center","w-full","p-3","bg-white","border-gray-200","border-y"],[1,"px-5","py-3","ml-auto","text-white","bg-brand-blue",3,"click"],[1,"px-5","py-3","ml-4","text-white","bg-brand-orange",3,"click"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"route-header",1),t.TgZ(2,"div",2)(3,"button",3),t.NdJ("click",function(){return e.editCaptainModalOpened$.next(!0)}),t._uU(4," Update Captain "),t.qZA(),t.TgZ(5,"button",4),t.NdJ("click",function(){return e.opened$.next(!0)}),t._uU(6," Add Official "),t.qZA()(),t._UZ(7,"official-list"),t.qZA())},dependencies:[x.t,c]});const M=[{path:"",component:f}];var F=o(8252),U=o(5151);class r{}r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[U.m,F.Bz.forChild(M)]})}}]);