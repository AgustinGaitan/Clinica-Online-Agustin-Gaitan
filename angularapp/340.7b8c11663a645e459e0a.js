"use strict";(self.webpackChunkclinica_online_agustin_gaitan=self.webpackChunkclinica_online_agustin_gaitan||[]).push([[340],{1340:(ge,A,v)=>{v.r(A),v.d(A,{RegistroModule:()=>de});var h=v(8583),R=v(5496),r=v(665),I=v(2304);class C extends I.I{constructor(n,t,o,l,a,d,g){super(n,t,o,l,a,d),this.habilitado=!1,this.especialidad=g,this.horarios=[]}}var e=v(3018),q=v(3071),U=v(6843);function E(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"tr",6),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw().SeleccionarEspecialidad(a.nombre)}),e.TgZ(1,"td",7),e._uU(2),e.qZA(),e.qZA()}if(2&i){const t=n.$implicit;e.xp6(2),e.Oqu(t.nombre)}}let y=(()=>{class i{constructor(t,o){this.userService=t,this.formBuilder=o,this.especialidadSeleccionadaEmitter=new e.vpe,this.especialidades=[],this.userService.especialidades.subscribe(l=>{this.especialidades=l}),this.formEspecialidad=o.group({especialidad:["",r.kI.required]})}ngOnInit(){}SeleccionarEspecialidad(t){this.especialidadSeleccionadaEmitter.emit(t)}AgregarEspecialidad(){var t;this.userService.AgregarEspecialidad(null===(t=this.formEspecialidad.get("especialidad"))||void 0===t?void 0:t.value)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(q.K),e.Y36(r.qu))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-listado-especialidades"]],outputs:{especialidadSeleccionadaEmitter:"especialidadSeleccionadaEmitter"},decls:13,vars:3,consts:[[1,"table"],["scope","col"],[3,"click",4,"ngFor","ngForOf"],[3,"formGroup","ngSubmit"],["type","text","formControlName","especialidad"],["type","submit",3,"disabled"],[3,"click"],["scope","row",1,"table-info"]],template:function(t,o){1&t&&(e.TgZ(0,"table",0),e.TgZ(1,"thead"),e.TgZ(2,"tr"),e.TgZ(3,"th",1),e._uU(4,"Especialidad"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(5,"tbody"),e.YNc(6,E,3,1,"tr",2),e.qZA(),e.qZA(),e.TgZ(7,"form",3),e.NdJ("ngSubmit",function(){return o.AgregarEspecialidad()}),e.TgZ(8,"label"),e._uU(9,"Agregar especialidad"),e.qZA(),e._UZ(10,"input",4),e.TgZ(11,"button",5),e._uU(12,"Agregar"),e.qZA(),e.qZA()),2&t&&(e.xp6(6),e.Q6J("ngForOf",o.especialidades),e.xp6(1),e.Q6J("formGroup",o.formEspecialidad),e.xp6(4),e.Q6J("disabled",o.formEspecialidad.invalid))},directives:[h.sg,r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u],styles:[""]}),i})();function N(i,n){1&i&&(e.TgZ(0,"div",24),e._uU(1," Ingrese un nombre "),e.qZA())}function S(i,n){1&i&&(e.TgZ(0,"div",24),e._uU(1," Ingrese un nombre valido. "),e.qZA())}function J(i,n){1&i&&(e.TgZ(0,"div",24),e._uU(1," Ingrese un apellido "),e.qZA())}function x(i,n){1&i&&(e.TgZ(0,"div",24),e._uU(1," Ingrese un apellido valido. "),e.qZA())}function w(i,n){1&i&&(e.TgZ(0,"div",24),e._uU(1," Ingrese una edad "),e.qZA())}function Y(i,n){1&i&&(e.TgZ(0,"div",24),e._uU(1," Ingrese una edad valida. "),e.qZA())}function k(i,n){1&i&&(e.TgZ(0,"div",24),e._uU(1," Ingrese un dni. "),e.qZA())}function Q(i,n){1&i&&(e.TgZ(0,"div",24),e._uU(1," Ingrese un dni v\xe1lido. "),e.qZA())}function F(i,n){if(1&i&&(e.TgZ(0,"div"),e.TgZ(1,"label"),e._uU(2),e.qZA(),e.qZA()),2&i){const t=n.$implicit;e.xp6(2),e.Oqu(t)}}function P(i,n){1&i&&(e.TgZ(0,"div",24),e._uU(1," Ingrese un email "),e.qZA())}function O(i,n){1&i&&(e.TgZ(0,"div",24),e._uU(1," Ingrese un email valido. "),e.qZA())}function D(i,n){1&i&&(e.TgZ(0,"div",24),e._uU(1," Ingrese una contrase\xf1a. "),e.qZA())}function L(i,n){1&i&&(e.TgZ(0,"div",24),e._uU(1," Ingrese una contrase\xf1a valida. "),e.qZA())}let M=(()=>{class i{constructor(t,o,l){this.fb=t,this.userService=o,this.fotoService=l,this.especialidadSeleccionada=[],this.formData=new FormData,this.formRegistro=this.fb.group({nombre:["",[r.kI.required]],apellido:["",[r.kI.required]],edad:["",[r.kI.required,r.kI.min(20),r.kI.max(90)]],dni:["",[r.kI.required,r.kI.min(1e6),r.kI.max(99999999)]],email:["",[r.kI.required,r.kI.email]],password:["",r.kI.required],foto:["",r.kI.required],captcha:[!1,r.kI.requiredTrue]})}ngOnInit(){}getNombre(){var t;return null===(t=this.formRegistro.get("nombre"))||void 0===t?void 0:t.value}getApellido(){var t;return null===(t=this.formRegistro.get("apellido"))||void 0===t?void 0:t.value}getDni(){var t;return null===(t=this.formRegistro.get("dni"))||void 0===t?void 0:t.value}getEmail(){var t;return null===(t=this.formRegistro.get("email"))||void 0===t?void 0:t.value}getEdad(){var t;return null===(t=this.formRegistro.get("edad"))||void 0===t?void 0:t.value}getPassword(){var t;return null===(t=this.formRegistro.get("password"))||void 0===t?void 0:t.value}getEspecialidad(){var t;return null===(t=this.formRegistro.get("especialidad"))||void 0===t?void 0:t.value}Registrarse(){let t=new C(this.getNombre(),this.getApellido(),this.getEdad(),this.getDni(),this.getEmail(),this.getPassword(),this.especialidadSeleccionada);this.fotoService.SubirFotoEspecialista(this.formData,t)}MostrarEspecialidadSeleccionada(t){console.log(t),this.especialidadSeleccionada.push(t)}SubirFoto(t){this.formData.append("foto",t.target.files[0])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.qu),e.Y36(q.K),e.Y36(U.X))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-registro-especialista"]],decls:60,vars:15,consts:[[1,"container"],[1,"row","align-items-center","g-lg-5","py-5"],[1,"col-lg-7","text-center","text-lg-start"],[1,"display-4","fw-bold","lh-1","mb-3",2,"font-family","OldSansBlack"],[1,"col-lg-10","fs-4"],[1,"col-md-10","mx-auto","col-lg-5"],[1,"p-4","p-md-5","border","rounded-3","bg-light",3,"formGroup","ngSubmit"],[1,"form-floating","mb-3"],["type","text","formControlName","nombre","name","nombre",1,"form-control"],["for","floatingInput"],["class","text-danger p-1",4,"ngIf"],["type","text","formControlName","apellido","name","apellido",1,"form-control"],["type","number","formControlName","edad","name","edad",1,"form-control"],["type","number","formControlName","dni","name","dni",1,"form-control"],[3,"especialidadSeleccionadaEmitter"],[4,"ngFor","ngForOf"],["type","email","name","email","formControlName","email","placeholder","name@example.com",1,"form-control"],["type","password","name","password","formControlName","password","placeholder","password",1,"form-control"],["for","floatingPassword"],[2,"color","grey"],["type","file","formControlName","foto","name","fotos","accept","image/*","placeholder","Ingese sus fotos",3,"change"],[2,"margin-left","1cm"],["type","checkbox","formControlName","captcha",2,"height","35px","width","35px"],["type","submit",1,"w-100","btn","btn-lg","btn-primary",3,"disabled"],[1,"text-danger","p-1"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"h1",3),e._uU(4,"Registro de Especialista"),e.qZA(),e._UZ(5,"p",4),e.qZA(),e.TgZ(6,"div",5),e.TgZ(7,"form",6),e.NdJ("ngSubmit",function(){return o.Registrarse()}),e.TgZ(8,"div",7),e._UZ(9,"input",8),e.TgZ(10,"label",9),e._uU(11,"Nombre"),e.qZA(),e.YNc(12,N,2,0,"div",10),e.YNc(13,S,2,0,"div",10),e.qZA(),e.TgZ(14,"div",7),e._UZ(15,"input",11),e.TgZ(16,"label",9),e._uU(17,"Apellido"),e.qZA(),e.YNc(18,J,2,0,"div",10),e.YNc(19,x,2,0,"div",10),e.qZA(),e.TgZ(20,"div",7),e._UZ(21,"input",12),e.TgZ(22,"label",9),e._uU(23,"Edad"),e.qZA(),e.YNc(24,w,2,0,"div",10),e.YNc(25,Y,2,0,"div",10),e.qZA(),e.TgZ(26,"div",7),e._UZ(27,"input",13),e.TgZ(28,"label",9),e._uU(29,"DNI"),e.qZA(),e.YNc(30,k,2,0,"div",10),e.YNc(31,Q,2,0,"div",10),e.qZA(),e.TgZ(32,"div",7),e.TgZ(33,"app-listado-especialidades",14),e.NdJ("especialidadSeleccionadaEmitter",function(a){return o.MostrarEspecialidadSeleccionada(a)}),e.qZA(),e.qZA(),e.TgZ(34,"div",7),e.TgZ(35,"h6"),e._uU(36,"Especialidades a ser agregadas"),e.qZA(),e.YNc(37,F,3,1,"div",15),e.qZA(),e.TgZ(38,"div",7),e._UZ(39,"input",16),e.TgZ(40,"label",9),e._uU(41,"Email"),e.qZA(),e.YNc(42,P,2,0,"div",10),e.YNc(43,O,2,0,"div",10),e.qZA(),e.TgZ(44,"div",7),e._UZ(45,"input",17),e.TgZ(46,"label",18),e._uU(47,"Contrase\xf1a"),e.qZA(),e.YNc(48,D,2,0,"div",10),e.YNc(49,L,2,0,"div",10),e.qZA(),e.TgZ(50,"label",19),e._uU(51,"Seleccione una imagen para su perfil"),e.qZA(),e.TgZ(52,"div",7),e.TgZ(53,"input",20),e.NdJ("change",function(a){return o.SubirFoto(a)}),e.qZA(),e.qZA(),e.TgZ(54,"div",7),e.TgZ(55,"label",21),e._uU(56,"Verifique que no es un robot"),e.qZA(),e._UZ(57,"input",22),e.qZA(),e.TgZ(58,"button",23),e._uU(59,"Registrarse"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t){let l,a,d,g,m,s,p,u,c,f,_,Z;e.xp6(7),e.Q6J("formGroup",o.formRegistro),e.xp6(5),e.Q6J("ngIf",(null==(l=o.formRegistro.get("nombre"))?null:l.touched)&&(null==(l=o.formRegistro.get("nombre"))||null==l.errors?null:l.errors.required)),e.xp6(1),e.Q6J("ngIf",(null==(a=o.formRegistro.get("nombre"))?null:a.touched)&&(null==(a=o.formRegistro.get("nombre"))||null==a.errors?null:a.errors.minlength)),e.xp6(5),e.Q6J("ngIf",(null==(d=o.formRegistro.get("apellido"))?null:d.touched)&&(null==(d=o.formRegistro.get("apellido"))||null==d.errors?null:d.errors.required)),e.xp6(1),e.Q6J("ngIf",(null==(g=o.formRegistro.get("apellido"))?null:g.touched)&&(null==(g=o.formRegistro.get("apellido"))||null==g.errors?null:g.errors.minlength)),e.xp6(5),e.Q6J("ngIf",(null==(m=o.formRegistro.get("edad"))?null:m.touched)&&(null==(m=o.formRegistro.get("edad"))||null==m.errors?null:m.errors.required)),e.xp6(1),e.Q6J("ngIf",(null==(s=o.formRegistro.get("edad"))?null:s.touched)&&(null==(s=o.formRegistro.get("edad"))||null==s.errors?null:s.errors.min)&&(null==(s=o.formRegistro.get("edad"))||null==s.errors?null:s.errors.max)),e.xp6(5),e.Q6J("ngIf",(null==(p=o.formRegistro.get("dni"))?null:p.touched)&&(null==(p=o.formRegistro.get("dni"))||null==p.errors?null:p.errors.required)),e.xp6(1),e.Q6J("ngIf",(null==(u=o.formRegistro.get("dni"))?null:u.touched)&&(null==(u=o.formRegistro.get("dni"))||null==u.errors?null:u.errors.min)&&(null==(u=o.formRegistro.get("dni"))||null==u.errors?null:u.errors.max)),e.xp6(6),e.Q6J("ngForOf",o.especialidadSeleccionada),e.xp6(5),e.Q6J("ngIf",(null==(c=o.formRegistro.get("email"))?null:c.touched)&&(null==(c=o.formRegistro.get("email"))||null==c.errors?null:c.errors.required)),e.xp6(1),e.Q6J("ngIf",(null==(f=o.formRegistro.get("email"))?null:f.touched)&&(null==(f=o.formRegistro.get("email"))||null==f.errors?null:f.errors.minlength)),e.xp6(5),e.Q6J("ngIf",(null==(_=o.formRegistro.get("password"))?null:_.touched)&&(null==(_=o.formRegistro.get("password"))||null==_.errors?null:_.errors.required)),e.xp6(1),e.Q6J("ngIf",(null==(Z=o.formRegistro.get("password"))?null:Z.touched)&&(null==(Z=o.formRegistro.get("password"))||null==Z.errors?null:Z.errors.minlength)),e.xp6(9),e.Q6J("disabled",o.formRegistro.invalid)}},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,h.O5,r.wV,y,h.sg,r.Wl],styles:[""]}),i})();class B extends I.I{constructor(n,t,o,l,a,d,g){super(n,t,o,l,a,d),this.fotos=[],this.obraSocial=g}}function X(i,n){1&i&&(e.TgZ(0,"div",23),e._uU(1," Ingrese un nombre "),e.qZA())}function j(i,n){1&i&&(e.TgZ(0,"div",23),e._uU(1," Ingrese un nombre valido. "),e.qZA())}function G(i,n){1&i&&(e.TgZ(0,"div",23),e._uU(1," Ingrese un apellido "),e.qZA())}function V(i,n){1&i&&(e.TgZ(0,"div",23),e._uU(1," Ingrese un apellido valido. "),e.qZA())}function z(i,n){1&i&&(e.TgZ(0,"div",23),e._uU(1," Ingrese una edad "),e.qZA())}function K(i,n){1&i&&(e.TgZ(0,"div",23),e._uU(1," Ingrese una edad valida. "),e.qZA())}function $(i,n){1&i&&(e.TgZ(0,"div",23),e._uU(1," Ingrese un dni. "),e.qZA())}function H(i,n){1&i&&(e.TgZ(0,"div",23),e._uU(1," Ingrese un dni v\xe1lido. "),e.qZA())}function W(i,n){1&i&&(e.TgZ(0,"div",23),e._uU(1," Ingrese una obra social. "),e.qZA())}function ee(i,n){1&i&&(e.TgZ(0,"div",23),e._uU(1," Ingrese una obra social valida. "),e.qZA())}function te(i,n){1&i&&(e.TgZ(0,"div",23),e._uU(1," Ingrese un email "),e.qZA())}function ie(i,n){1&i&&(e.TgZ(0,"div",23),e._uU(1," Ingrese un email valido. "),e.qZA())}function oe(i,n){1&i&&(e.TgZ(0,"div",23),e._uU(1," Ingrese una contrase\xf1a. "),e.qZA())}function re(i,n){1&i&&(e.TgZ(0,"div",23),e._uU(1," Ingrese un nombre valido. "),e.qZA())}let ne=(()=>{class i{constructor(t,o,l){this.fb=t,this.userService=o,this.fotoService=l,this.formData=new FormData,this.formRegistro=this.fb.group({nombre:["",[r.kI.required]],apellido:["",[r.kI.required]],edad:["",[r.kI.required,r.kI.min(2),r.kI.max(100)]],dni:["",[r.kI.required,r.kI.min(1e6),r.kI.max(99999999)]],obraSocial:["",r.kI.required],email:["",[r.kI.required,r.kI.email]],password:["",r.kI.required],fotos:["",r.kI.required],captcha:[!1,r.kI.requiredTrue]})}ngOnInit(){}getNombre(){var t;return null===(t=this.formRegistro.get("nombre"))||void 0===t?void 0:t.value}getApellido(){var t;return null===(t=this.formRegistro.get("apellido"))||void 0===t?void 0:t.value}getDni(){var t;return null===(t=this.formRegistro.get("dni"))||void 0===t?void 0:t.value}getEmail(){var t;return null===(t=this.formRegistro.get("email"))||void 0===t?void 0:t.value}getEdad(){var t;return null===(t=this.formRegistro.get("edad"))||void 0===t?void 0:t.value}getPassword(){var t;return null===(t=this.formRegistro.get("password"))||void 0===t?void 0:t.value}getObraSocial(){var t;return null===(t=this.formRegistro.get("obraSocial"))||void 0===t?void 0:t.value}Registrarse(){let t=new B(this.getNombre(),this.getApellido(),this.getEdad(),this.getDni(),this.getEmail(),this.getPassword(),this.getObraSocial());t.historialMedico=[],this.fotoService.SubirFotoPaciente(this.formData,t)}SubirFoto(t){this.formData.append("foto",t.target.files[0],t.target.files[0].name),this.formData.append("otraFoto",t.target.files[1],t.target.files[1].name)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.qu),e.Y36(q.K),e.Y36(U.X))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-registro-paciente"]],decls:60,vars:16,consts:[[1,"container"],[1,"row","align-items-center","g-lg-5","py-5"],[1,"col-md-10","mx-auto","col-lg-5"],[1,"p-4","p-md-5","border","rounded-3","bg-light",3,"formGroup","ngSubmit"],[1,"form-floating","mb-3"],["type","text","formControlName","nombre","name","nombre",1,"form-control"],["for","floatingInput"],["class","text-danger p-1",4,"ngIf"],["type","text","formControlName","apellido","name","apellido",1,"form-control"],["type","number","formControlName","edad","name","edad",1,"form-control"],["type","number","formControlName","dni","name","dni",1,"form-control"],["type","text","formControlName","obraSocial","name","obraSocial",1,"form-control"],["type","text","formControlName","email","name","email",1,"form-control"],["type","password","formControlName","password","name","password",1,"form-control"],["for","floatingPassword"],[2,"color","grey"],["type","file","formControlName","fotos","name","fotos","accept","image/*","placeholder","Ingese sus fotos","multiple","",3,"change"],[2,"margin-left","1cm"],["type","checkbox","formControlName","captcha",2,"height","35px","width","35px"],["type","submit",1,"w-100","btn","btn-lg","btn-primary",3,"disabled"],[1,"col-lg-7","text-center","text-lg-start"],[1,"display-4","fw-bold","lh-1","mb-3",2,"font-family","OldSansBlack"],[1,"col-lg-10","fs-4"],[1,"text-danger","p-1"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"form",3),e.NdJ("ngSubmit",function(){return o.Registrarse()}),e.TgZ(4,"div",4),e._UZ(5,"input",5),e.TgZ(6,"label",6),e._uU(7,"Nombre"),e.qZA(),e.YNc(8,X,2,0,"div",7),e.YNc(9,j,2,0,"div",7),e.qZA(),e.TgZ(10,"div",4),e._UZ(11,"input",8),e.TgZ(12,"label",6),e._uU(13,"Apellido"),e.qZA(),e.YNc(14,G,2,0,"div",7),e.YNc(15,V,2,0,"div",7),e.qZA(),e.TgZ(16,"div",4),e._UZ(17,"input",9),e.TgZ(18,"label",6),e._uU(19,"Edad"),e.qZA(),e.YNc(20,z,2,0,"div",7),e.YNc(21,K,2,0,"div",7),e.qZA(),e.TgZ(22,"div",4),e._UZ(23,"input",10),e.TgZ(24,"label",6),e._uU(25,"DNI"),e.qZA(),e.YNc(26,$,2,0,"div",7),e.YNc(27,H,2,0,"div",7),e.qZA(),e.TgZ(28,"div",4),e._UZ(29,"input",11),e.TgZ(30,"label",6),e._uU(31,"Obra social"),e.qZA(),e.YNc(32,W,2,0,"div",7),e.YNc(33,ee,2,0,"div",7),e.qZA(),e.TgZ(34,"div",4),e._UZ(35,"input",12),e.TgZ(36,"label",6),e._uU(37,"Email"),e.qZA(),e.YNc(38,te,2,0,"div",7),e.YNc(39,ie,2,0,"div",7),e.qZA(),e.TgZ(40,"div",4),e._UZ(41,"input",13),e.TgZ(42,"label",14),e._uU(43,"Password"),e.qZA(),e.YNc(44,oe,2,0,"div",7),e.YNc(45,re,2,0,"div",7),e.qZA(),e.TgZ(46,"label",15),e._uU(47,"Seleccione 2 (dos) imagenes para su perfil"),e.qZA(),e.TgZ(48,"div",4),e.TgZ(49,"input",16),e.NdJ("change",function(a){return o.SubirFoto(a)}),e.qZA(),e.qZA(),e.TgZ(50,"div",4),e.TgZ(51,"label",17),e._uU(52,"Verifique que no es un robot"),e.qZA(),e._UZ(53,"input",18),e.qZA(),e.TgZ(54,"button",19),e._uU(55,"Registrarse"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(56,"div",20),e.TgZ(57,"h1",21),e._uU(58,"Registro de paciente"),e.qZA(),e._UZ(59,"p",22),e.qZA(),e.qZA(),e.qZA()),2&t){let l,a,d,g,m,s,p,u,c,f,_,Z,b,T;e.xp6(3),e.Q6J("formGroup",o.formRegistro),e.xp6(5),e.Q6J("ngIf",(null==(l=o.formRegistro.get("nombre"))?null:l.touched)&&(null==(l=o.formRegistro.get("nombre"))||null==l.errors?null:l.errors.required)),e.xp6(1),e.Q6J("ngIf",(null==(a=o.formRegistro.get("nombre"))?null:a.touched)&&(null==(a=o.formRegistro.get("nombre"))||null==a.errors?null:a.errors.minlength)),e.xp6(5),e.Q6J("ngIf",(null==(d=o.formRegistro.get("apellido"))?null:d.touched)&&(null==(d=o.formRegistro.get("apellido"))||null==d.errors?null:d.errors.required)),e.xp6(1),e.Q6J("ngIf",(null==(g=o.formRegistro.get("apellido"))?null:g.touched)&&(null==(g=o.formRegistro.get("apellido"))||null==g.errors?null:g.errors.minlength)),e.xp6(5),e.Q6J("ngIf",(null==(m=o.formRegistro.get("edad"))?null:m.touched)&&(null==(m=o.formRegistro.get("edad"))||null==m.errors?null:m.errors.required)),e.xp6(1),e.Q6J("ngIf",(null==(s=o.formRegistro.get("edad"))?null:s.touched)&&(null==(s=o.formRegistro.get("edad"))||null==s.errors?null:s.errors.min)&&(null==(s=o.formRegistro.get("edad"))||null==s.errors?null:s.errors.max)),e.xp6(5),e.Q6J("ngIf",(null==(p=o.formRegistro.get("dni"))?null:p.touched)&&(null==(p=o.formRegistro.get("dni"))||null==p.errors?null:p.errors.required)),e.xp6(1),e.Q6J("ngIf",(null==(u=o.formRegistro.get("dni"))?null:u.touched)&&(null==(u=o.formRegistro.get("dni"))||null==u.errors?null:u.errors.min)&&(null==(u=o.formRegistro.get("dni"))||null==u.errors?null:u.errors.max)),e.xp6(5),e.Q6J("ngIf",(null==(c=o.formRegistro.get("obraSocial"))?null:c.touched)&&(null==(c=o.formRegistro.get("obraSocial"))||null==c.errors?null:c.errors.required)),e.xp6(1),e.Q6J("ngIf",(null==(f=o.formRegistro.get("obraSocial"))?null:f.touched)&&(null==(f=o.formRegistro.get("obraSocial"))||null==f.errors?null:f.errors.minlength)),e.xp6(5),e.Q6J("ngIf",(null==(_=o.formRegistro.get("email"))?null:_.touched)&&(null==(_=o.formRegistro.get("email"))||null==_.errors?null:_.errors.required)),e.xp6(1),e.Q6J("ngIf",(null==(Z=o.formRegistro.get("email"))?null:Z.touched)&&(null==(Z=o.formRegistro.get("email"))||null==Z.errors?null:Z.errors.minlength)),e.xp6(5),e.Q6J("ngIf",(null==(b=o.formRegistro.get("password"))?null:b.touched)&&(null==(b=o.formRegistro.get("password"))||null==b.errors?null:b.errors.required)),e.xp6(1),e.Q6J("ngIf",(null==(T=o.formRegistro.get("password"))?null:T.touched)&&(null==(T=o.formRegistro.get("password"))||null==T.errors?null:T.errors.minlength)),e.xp6(9),e.Q6J("disabled",o.formRegistro.invalid)}},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,h.O5,r.wV,r.Wl],styles:[""]}),i})();const le=function(){return["/registro/paciente"]},ae=function(){return["/registro/especialista"]},se=[{path:"",component:(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-registro"]],decls:21,vars:4,consts:[[1,"container-fluid","bounce-in-top",2,"font-family","OldSansBlack"],[1,"px-4","py-5","my-5","text-center"],["src","../assets/images/clinica.png","alt","","width","72","height","70",1,"d-block","mx-auto","mb-4"],[1,"display-5","fw-bold"],[1,"col-lg-6","mx-auto",2,"margin-top","1cm"],[1,"row","align-items-md-stretch"],[1,"col-md-6"],[1,"h-100","p-5","text-white","rounded-3",2,"background-color","rgba(0, 0, 0, 0.705)"],["src","assets/images/paciente.png","width","100px","height","100px",1,"d-block","mx-auto","mb-4"],["type","button",1,"btn","btn-primary","btn-lg","px-4","gap-3",3,"routerLink"],[1,"h-100","p-5","border","rounded-3",2,"background-color","rgba(255, 255, 255, 0.705)"],["src","assets/images/doctor.png","width","100px","height","100px",1,"d-block","mx-auto","mb-4"],["type","button",1,"btn","btn-outline-secondary","btn-lg","px-4",3,"routerLink"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"h1",3),e._uU(4,"\xbfC\xf3mo desea registrarse?"),e.qZA(),e.qZA(),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e.TgZ(7,"div",6),e.TgZ(8,"div",7),e._UZ(9,"img",8),e.TgZ(10,"p"),e._uU(11,"Registrate como paciente para poder sacar turnos, administrarlos y consultar horarios de los especialista. "),e.qZA(),e.TgZ(12,"button",9),e._uU(13,"Paciente"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div",6),e.TgZ(15,"div",10),e._UZ(16,"img",11),e.TgZ(17,"p"),e._uU(18,"Registrate como especialista, para poder establecer tus horarios de trabajo y administrar los turnos que los pacientes hayan sacado con vos. "),e.qZA(),e.TgZ(19,"button",12),e._uU(20,"Especialista"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(12),e.Q6J("routerLink",e.DdM(2,le)),e.xp6(7),e.Q6J("routerLink",e.DdM(3,ae)))},directives:[R.rH],styles:[".bounce-in-top[_ngcontent-%COMP%]{animation:bounce-in-top 1.1s both}@keyframes bounce-in-top{0%{transform:translateY(-500px);animation-timing-function:ease-in;opacity:0}38%{transform:translateY(0);animation-timing-function:ease-out;opacity:1}55%{transform:translateY(-65px);animation-timing-function:ease-in}72%{transform:translateY(0);animation-timing-function:ease-out}81%{transform:translateY(-28px);animation-timing-function:ease-in}90%{transform:translateY(0);animation-timing-function:ease-out}95%{transform:translateY(-8px);animation-timing-function:ease-in}to{transform:translateY(0);animation-timing-function:ease-out}}"]}),i})()},{path:"paciente",component:ne},{path:"especialista",component:M}];let ue=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[R.Bz.forChild(se)],R.Bz]}),i})(),de=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[h.ez,ue,r.UX,r.u5]]}),i})()}}]);