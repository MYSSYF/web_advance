import{_ as p,m as _,o as c,c as r,a as t,t as a,w as h,v as m,d as l,F as d,l as v,u as f}from"./index.9963496b.js";import{t as g}from"./gods.1e7260e7.js";const S={data(){return{actual:{}}},inf(){return{provis:[],producto:"",usuario:"",comentario:"",merp:!0}},computed:{..._(g,f),sarcomentare(){return this.productsStore.getComents}},mounted(){this.productsStore.mostrarC(),this.productsStore.zapato(this.$route.params.productId),this.actual=this.productsStore.single,console.log(this.actual)},methods:{volr(){this.productsStore.zapato(this.$route.params.productId),this.actual=this.productsStore.single,console.log(this.actual)},trasbalador(){console.log(this.productsStore.yap())},async creaComentario(){const i=this.authenticationStore.validar2(),s=await this.productsStore.getUser(i);console.log(s);const n={producto:this.actual.name,usuario:s.name,comentario:this.coment};this.productsStore.casualComent(n),this.producto="",this.usuario="",this.comentario=""},matar(){}}},C={class:"donde"},y={class:"machin"},b={class:"machin__img"},k=["src"],w={class:"machin__info"},x={class:"t"},z={class:"inf"},B=t("p",{class:"ti"},"tipo de maquina",-1),F={class:"inf"},D=t("p",{class:"ti"},"zona de prestamo",-1),E={class:"inf"},I=t("p",{class:"ti"},"precio",-1),L={class:"inf"},M=t("button",{class:"buy"},"\u{1F6D2}",-1),U={class:"coment"},V=t("p",{class:"tip"},"Escribe comentarios",-1),q={class:"escribe"},A=t("p",{class:"tip"},"Comentarios",-1),N={class:"mira"},T={class:"depreso"},j={class:"cont"},G={class:"fas"};function H(i,s,n,J,K,e){return c(),r(d,null,[t("section",C,[t("div",y,[t("div",b,[t("img",{src:this.actual.image,alt:"preview",class:"machin__img2",onClick:s[0]||(s[0]=(...o)=>e.volr&&e.volr(...o))},null,8,k)]),t("div",w,[t("p",x,a(this.actual.name),1),t("p",z,a(this.actual.description),1),B,t("p",F,a(this.actual.type),1),D,t("p",E,a(this.actual.zone),1),I,t("p",L,a(this.actual.price),1),M])])]),t("section",U,[V,t("div",q,[h(t("input",{type:"textarea",class:"put","onUpdate:modelValue":s[1]||(s[1]=o=>i.coment=o)},null,512),[[m,i.coment]]),t("button",{type:"submit",class:"LFB flex",onClick:s[2]||(s[2]=l((...o)=>e.creaComentario&&e.creaComentario(...o),["prevent"]))},"enviar")]),A,t("div",N,[(c(!0),r(d,null,v(e.sarcomentare,o=>(c(),r("div",{key:o.id2,class:"si"},[t("div",T,[t("h2",j,a(o.user),1),t("p",G,a(o.coment),1)]),t("button",{onClick:s[3]||(s[3]=l((...u)=>e.matar&&e.matar(...u),["prevent"]))},"x")]))),128))])])],64)}const Q=p(S,[["render",H]]);export{Q as default};
