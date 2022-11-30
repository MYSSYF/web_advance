(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function qc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ay="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cy=qc(ay);function Gf(t){return!!t||t===""}function zc(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ze(s)?hy(s):zc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(ze(t))return t;if(Ce(t))return t}}const ly=/;(?![^(]*\))/g,uy=/:(.+)/;function hy(t){const e={};return t.split(ly).forEach(n=>{if(n){const s=n.split(uy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Wc(t){let e="";if(ze(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=Wc(t[n]);s&&(e+=s+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function fy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=No(t[s],e[s]);return n}function No(t,e){if(t===e)return!0;let n=Cu(t),s=Cu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Or(t),s=Or(e),n||s)return t===e;if(n=z(t),s=z(e),n||s)return n&&s?fy(t,e):!1;if(n=Ce(t),s=Ce(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!No(t[o],e[o]))return!1}}return String(t)===String(e)}function dy(t,e){return t.findIndex(n=>No(n,e))}const Au=t=>ze(t)?t:t==null?"":z(t)||Ce(t)&&(t.toString===Xf||!re(t.toString))?JSON.stringify(t,Qf,2):String(t),Qf=(t,e)=>e&&e.__v_isRef?Qf(t,e.value):Ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Po(e)?{[`Set(${e.size})`]:[...e.values()]}:Ce(e)&&!z(e)&&!Jf(e)?String(e):e,Ae={},Rs=[],Ot=()=>{},py=()=>!1,gy=/^on[^a-z]/,Oo=t=>gy.test(t),Gc=t=>t.startsWith("onUpdate:"),Je=Object.assign,Qc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},my=Object.prototype.hasOwnProperty,ue=(t,e)=>my.call(t,e),z=Array.isArray,Ds=t=>si(t)==="[object Map]",Po=t=>si(t)==="[object Set]",Cu=t=>si(t)==="[object Date]",re=t=>typeof t=="function",ze=t=>typeof t=="string",Or=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",Yf=t=>Ce(t)&&re(t.then)&&re(t.catch),Xf=Object.prototype.toString,si=t=>Xf.call(t),yy=t=>si(t).slice(8,-1),Jf=t=>si(t)==="[object Object]",Yc=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bi=qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vy=/-(\w)/g,Wt=xo(t=>t.replace(vy,(e,n)=>n?n.toUpperCase():"")),wy=/\B([A-Z])/g,Xs=xo(t=>t.replace(wy,"-$1").toLowerCase()),Mo=xo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ba=xo(t=>t?`on${Mo(t)}`:""),Pr=(t,e)=>!Object.is(t,e),ji=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Zi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},xr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ku;const _y=()=>ku||(ku=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Vt;class Zf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Vt&&(this.parent=Vt,this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Vt;try{return Vt=this,e()}finally{Vt=n}}}on(){Vt=this}off(){Vt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function ed(t){return new Zf(t)}function Ey(t,e=Vt){e&&e.active&&e.effects.push(t)}const Xc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},td=t=>(t.w&Pn)>0,nd=t=>(t.n&Pn)>0,Iy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pn},by=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];td(r)&&!nd(r)?r.delete(t):e[n++]=r,r.w&=~Pn,r.n&=~Pn}e.length=n}},Ga=new WeakMap;let gr=0,Pn=1;const Qa=30;let Dt;const ss=Symbol(""),Ya=Symbol("");class Jc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ey(this,s)}run(){if(!this.active)return this.fn();let e=Dt,n=An;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Dt,Dt=this,An=!0,Pn=1<<++gr,gr<=Qa?Iy(this):Ru(this),this.fn()}finally{gr<=Qa&&by(this),Pn=1<<--gr,Dt=this.parent,An=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(Ru(this),this.onStop&&this.onStop(),this.active=!1)}}function Ru(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let An=!0;const sd=[];function Js(){sd.push(An),An=!1}function Zs(){const t=sd.pop();An=t===void 0?!0:t}function wt(t,e,n){if(An&&Dt){let s=Ga.get(t);s||Ga.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Xc()),rd(r)}}function rd(t,e){let n=!1;gr<=Qa?nd(t)||(t.n|=Pn,n=!td(t)):n=!t.has(Dt),n&&(t.add(Dt),Dt.deps.push(t))}function on(t,e,n,s,r,i){const o=Ga.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?Yc(n)&&a.push(o.get("length")):(a.push(o.get(ss)),Ds(t)&&a.push(o.get(Ya)));break;case"delete":z(t)||(a.push(o.get(ss)),Ds(t)&&a.push(o.get(Ya)));break;case"set":Ds(t)&&a.push(o.get(ss));break}if(a.length===1)a[0]&&Xa(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Xa(Xc(c))}}function Xa(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&Du(s);for(const s of n)s.computed||Du(s)}function Du(t,e){(t!==Dt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ty=qc("__proto__,__v_isRef,__isVue"),id=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Or)),Sy=Zc(),Ay=Zc(!1,!0),Cy=Zc(!0),Nu=ky();function ky(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=pe(this);for(let i=0,o=this.length;i<o;i++)wt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(pe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Js();const s=pe(this)[e].apply(this,n);return Zs(),s}}),t}function Zc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Ky:ud:e?ld:cd).get(s))return s;const o=z(s);if(!t&&o&&ue(Nu,r))return Reflect.get(Nu,r,i);const a=Reflect.get(s,r,i);return(Or(r)?id.has(r):Ty(r))||(t||wt(s,"get",r),e)?a:Ue(a)?o&&Yc(r)?a:a.value:Ce(a)?t?hd(a):Pt(a):a}}const Ry=od(),Dy=od(!0);function od(t=!1){return function(n,s,r,i){let o=n[s];if(Us(o)&&Ue(o)&&!Ue(r))return!1;if(!t&&(!eo(r)&&!Us(r)&&(o=pe(o),r=pe(r)),!z(n)&&Ue(o)&&!Ue(r)))return o.value=r,!0;const a=z(n)&&Yc(s)?Number(s)<n.length:ue(n,s),c=Reflect.set(n,s,r,i);return n===pe(i)&&(a?Pr(r,o)&&on(n,"set",s,r):on(n,"add",s,r)),c}}function Ny(t,e){const n=ue(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&on(t,"delete",e,void 0),s}function Oy(t,e){const n=Reflect.has(t,e);return(!Or(e)||!id.has(e))&&wt(t,"has",e),n}function Py(t){return wt(t,"iterate",z(t)?"length":ss),Reflect.ownKeys(t)}const ad={get:Sy,set:Ry,deleteProperty:Ny,has:Oy,ownKeys:Py},xy={get:Cy,set(t,e){return!0},deleteProperty(t,e){return!0}},My=Je({},ad,{get:Ay,set:Dy}),el=t=>t,Lo=t=>Reflect.getPrototypeOf(t);function ki(t,e,n=!1,s=!1){t=t.__v_raw;const r=pe(t),i=pe(e);n||(e!==i&&wt(r,"get",e),wt(r,"get",i));const{has:o}=Lo(r),a=s?el:n?sl:Mr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Ri(t,e=!1){const n=this.__v_raw,s=pe(n),r=pe(t);return e||(t!==r&&wt(s,"has",t),wt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Di(t,e=!1){return t=t.__v_raw,!e&&wt(pe(t),"iterate",ss),Reflect.get(t,"size",t)}function Ou(t){t=pe(t);const e=pe(this);return Lo(e).has.call(e,t)||(e.add(t),on(e,"add",t,t)),this}function Pu(t,e){e=pe(e);const n=pe(this),{has:s,get:r}=Lo(n);let i=s.call(n,t);i||(t=pe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Pr(e,o)&&on(n,"set",t,e):on(n,"add",t,e),this}function xu(t){const e=pe(this),{has:n,get:s}=Lo(e);let r=n.call(e,t);r||(t=pe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&on(e,"delete",t,void 0),i}function Mu(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&on(t,"clear",void 0,void 0),n}function Ni(t,e){return function(s,r){const i=this,o=i.__v_raw,a=pe(o),c=e?el:t?sl:Mr;return!t&&wt(a,"iterate",ss),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Oi(t,e,n){return function(...s){const r=this.__v_raw,i=pe(r),o=Ds(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?el:e?sl:Mr;return!e&&wt(i,"iterate",c?Ya:ss),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function pn(t){return function(...e){return t==="delete"?!1:this}}function Ly(){const t={get(i){return ki(this,i)},get size(){return Di(this)},has:Ri,add:Ou,set:Pu,delete:xu,clear:Mu,forEach:Ni(!1,!1)},e={get(i){return ki(this,i,!1,!0)},get size(){return Di(this)},has:Ri,add:Ou,set:Pu,delete:xu,clear:Mu,forEach:Ni(!1,!0)},n={get(i){return ki(this,i,!0)},get size(){return Di(this,!0)},has(i){return Ri.call(this,i,!0)},add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear"),forEach:Ni(!0,!1)},s={get(i){return ki(this,i,!0,!0)},get size(){return Di(this,!0)},has(i){return Ri.call(this,i,!0)},add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear"),forEach:Ni(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Oi(i,!1,!1),n[i]=Oi(i,!0,!1),e[i]=Oi(i,!1,!0),s[i]=Oi(i,!0,!0)}),[t,n,e,s]}const[Uy,Fy,Vy,By]=Ly();function tl(t,e){const n=e?t?By:Vy:t?Fy:Uy;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ue(n,r)&&r in s?n:s,r,i)}const jy={get:tl(!1,!1)},$y={get:tl(!1,!0)},Hy={get:tl(!0,!1)},cd=new WeakMap,ld=new WeakMap,ud=new WeakMap,Ky=new WeakMap;function qy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zy(t){return t.__v_skip||!Object.isExtensible(t)?0:qy(yy(t))}function Pt(t){return Us(t)?t:nl(t,!1,ad,jy,cd)}function Wy(t){return nl(t,!1,My,$y,ld)}function hd(t){return nl(t,!0,xy,Hy,ud)}function nl(t,e,n,s,r){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=zy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Cn(t){return Us(t)?Cn(t.__v_raw):!!(t&&t.__v_isReactive)}function Us(t){return!!(t&&t.__v_isReadonly)}function eo(t){return!!(t&&t.__v_isShallow)}function fd(t){return Cn(t)||Us(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Fs(t){return Zi(t,"__v_skip",!0),t}const Mr=t=>Ce(t)?Pt(t):t,sl=t=>Ce(t)?hd(t):t;function dd(t){An&&Dt&&(t=pe(t),rd(t.dep||(t.dep=Xc())))}function pd(t,e){t=pe(t),t.dep&&Xa(t.dep)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function Se(t){return gd(t,!1)}function Gy(t){return gd(t,!0)}function gd(t,e){return Ue(t)?t:new Qy(t,e)}class Qy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:Mr(e)}get value(){return dd(this),this._value}set value(e){const n=this.__v_isShallow||eo(e)||Us(e);e=n?e:pe(e),Pr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Mr(e),pd(this))}}function Ns(t){return Ue(t)?t.value:t}const Yy={get:(t,e,n)=>Ns(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ue(r)&&!Ue(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function md(t){return Cn(t)?t:new Proxy(t,Yy)}function Xy(t){const e=z(t)?new Array(t.length):{};for(const n in t)e[n]=Zy(t,n);return e}class Jy{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Zy(t,e,n){const s=t[e];return Ue(s)?s:new Jy(t,e,n)}var yd;class ev{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[yd]=!1,this._dirty=!0,this.effect=new Jc(e,()=>{this._dirty||(this._dirty=!0,pd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=pe(this);return dd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}yd="__v_isReadonly";function tv(t,e,n=!1){let s,r;const i=re(t);return i?(s=t,r=Ot):(s=t.get,r=t.set),new ev(s,r,i||!r,n)}function kn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Uo(i,e,n)}return r}function Ct(t,e,n,s){if(re(t)){const i=kn(t,e,n,s);return i&&Yf(i)&&i.catch(o=>{Uo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Ct(t[i],e,n,s));return r}function Uo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){kn(c,null,10,[t,o,a]);return}}nv(t,n,r,s)}function nv(t,e,n,s=!0){console.error(t)}let Lr=!1,Ja=!1;const nt=[];let jt=0;const Os=[];let Xt=null,Wn=0;const vd=Promise.resolve();let rl=null;function Fo(t){const e=rl||vd;return t?e.then(this?t.bind(this):t):e}function sv(t){let e=jt+1,n=nt.length;for(;e<n;){const s=e+n>>>1;Ur(nt[s])<t?e=s+1:n=s}return e}function il(t){(!nt.length||!nt.includes(t,Lr&&t.allowRecurse?jt+1:jt))&&(t.id==null?nt.push(t):nt.splice(sv(t.id),0,t),wd())}function wd(){!Lr&&!Ja&&(Ja=!0,rl=vd.then(Ed))}function rv(t){const e=nt.indexOf(t);e>jt&&nt.splice(e,1)}function iv(t){z(t)?Os.push(...t):(!Xt||!Xt.includes(t,t.allowRecurse?Wn+1:Wn))&&Os.push(t),wd()}function Lu(t,e=Lr?jt+1:0){for(;e<nt.length;e++){const n=nt[e];n&&n.pre&&(nt.splice(e,1),e--,n())}}function _d(t){if(Os.length){const e=[...new Set(Os)];if(Os.length=0,Xt){Xt.push(...e);return}for(Xt=e,Xt.sort((n,s)=>Ur(n)-Ur(s)),Wn=0;Wn<Xt.length;Wn++)Xt[Wn]();Xt=null,Wn=0}}const Ur=t=>t.id==null?1/0:t.id,ov=(t,e)=>{const n=Ur(t)-Ur(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ed(t){Ja=!1,Lr=!0,nt.sort(ov);const e=Ot;try{for(jt=0;jt<nt.length;jt++){const n=nt[jt];n&&n.active!==!1&&kn(n,null,14)}}finally{jt=0,nt.length=0,_d(),Lr=!1,rl=null,(nt.length||Os.length)&&Ed()}}function av(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ae;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Ae;f&&(r=n.map(p=>p.trim())),h&&(r=n.map(xr))}let a,c=s[a=ba(e)]||s[a=ba(Wt(e))];!c&&i&&(c=s[a=ba(Xs(e))]),c&&Ct(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ct(l,t,6,r)}}function Id(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!re(t)){const c=l=>{const u=Id(l,e,!0);u&&(a=!0,Je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ce(t)&&s.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):Je(o,i),Ce(t)&&s.set(t,o),o)}function Vo(t,e){return!t||!Oo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,Xs(e))||ue(t,e))}let At=null,bd=null;function to(t){const e=At;return At=t,bd=t&&t.type.__scopeId||null,e}function Zt(t,e=At,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Wu(-1);const i=to(e),o=t(...r);return to(i),s._d&&Wu(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Ta(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:m,inheritAttrs:w}=t;let b,k;const O=to(t);try{if(n.shapeFlag&4){const W=r||s;b=Bt(u.call(W,W,h,i,p,f,m)),k=c}else{const W=e;b=Bt(W.length>1?W(i,{attrs:c,slots:a,emit:l}):W(i,null)),k=e.props?c:cv(c)}}catch(W){Ir.length=0,Uo(W,t,1),b=Le(xt)}let B=b;if(k&&w!==!1){const W=Object.keys(k),{shapeFlag:G}=B;W.length&&G&7&&(o&&W.some(Gc)&&(k=lv(k,o)),B=xn(B,k))}return n.dirs&&(B=xn(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),b=B,to(O),b}const cv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Oo(n))&&((e||(e={}))[n]=t[n]);return e},lv=(t,e)=>{const n={};for(const s in t)(!Gc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function uv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Uu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Vo(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Uu(s,o,l):!0:!!o;return!1}function Uu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Vo(n,i))return!0}return!1}function hv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const fv=t=>t.__isSuspense;function dv(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):iv(t)}function bt(t,e){if(qe){let n=qe.provides;const s=qe.parent&&qe.parent.provides;s===n&&(n=qe.provides=Object.create(s)),n[t]=e}}function xe(t,e,n=!1){const s=qe||At;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&re(e)?e.call(s.proxy):e}}function pv(t,e){return ol(t,null,e)}const Fu={};function rs(t,e,n){return ol(t,e,n)}function ol(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ae){const a=qe;let c,l=!1,u=!1;if(Ue(t)?(c=()=>t.value,l=eo(t)):Cn(t)?(c=()=>t,s=!0):z(t)?(u=!0,l=t.some(k=>Cn(k)||eo(k)),c=()=>t.map(k=>{if(Ue(k))return k.value;if(Cn(k))return Zn(k);if(re(k))return kn(k,a,2)})):re(t)?e?c=()=>kn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ct(t,a,3,[f])}:c=Ot,e&&s){const k=c;c=()=>Zn(k())}let h,f=k=>{h=b.onStop=()=>{kn(k,a,4)}};if(Vr)return f=Ot,e?n&&Ct(e,a,3,[c(),u?[]:void 0,f]):c(),Ot;let p=u?[]:Fu;const m=()=>{if(!!b.active)if(e){const k=b.run();(s||l||(u?k.some((O,B)=>Pr(O,p[B])):Pr(k,p)))&&(h&&h(),Ct(e,a,3,[k,p===Fu?void 0:p,f]),p=k)}else b.run()};m.allowRecurse=!!e;let w;r==="sync"?w=m:r==="post"?w=()=>dt(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),w=()=>il(m));const b=new Jc(c,w);return e?n?m():p=b.run():r==="post"?dt(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&Qc(a.scope.effects,b)}}function gv(t,e,n){const s=this.proxy,r=ze(t)?t.includes(".")?Td(s,t):()=>s[t]:t.bind(s,s);let i;re(e)?i=e:(i=e.handler,n=e);const o=qe;Bs(this);const a=ol(r,i.bind(s),n);return o?Bs(o):is(),a}function Td(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Zn(t,e){if(!Ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ue(t))Zn(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)Zn(t[n],e);else if(Po(t)||Ds(t))t.forEach(n=>{Zn(n,e)});else if(Jf(t))for(const n in t)Zn(t[n],e);return t}function mv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return al(()=>{t.isMounted=!0}),Rd(()=>{t.isUnmounting=!0}),t}const It=[Function,Array],yv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It},setup(t,{slots:e}){const n=fl(),s=mv();let r;return()=>{const i=e.default&&Cd(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const w of i)if(w.type!==xt){o=w;break}}const a=pe(t),{mode:c}=a;if(s.isLeaving)return Sa(o);const l=Vu(o);if(!l)return Sa(o);const u=Za(l,a,s,n);ec(l,u);const h=n.subTree,f=h&&Vu(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const w=m();r===void 0?r=w:w!==r&&(r=w,p=!0)}if(f&&f.type!==xt&&(!Qn(l,f)||p)){const w=Za(f,a,s,n);if(ec(f,w),c==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update()},Sa(o);c==="in-out"&&l.type!==xt&&(w.delayLeave=(b,k,O)=>{const B=Ad(s,f);B[String(f.key)]=f,b._leaveCb=()=>{k(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=O})}return o}}},Sd=yv;function Ad(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Za(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:w,onAppear:b,onAfterAppear:k,onAppearCancelled:O}=e,B=String(t.key),W=Ad(n,t),G=(P,Q)=>{P&&Ct(P,s,9,Q)},he=(P,Q)=>{const ie=Q[1];G(P,Q),z(P)?P.every(oe=>oe.length<=1)&&ie():P.length<=1&&ie()},X={mode:i,persisted:o,beforeEnter(P){let Q=a;if(!n.isMounted)if(r)Q=w||a;else return;P._leaveCb&&P._leaveCb(!0);const ie=W[B];ie&&Qn(t,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),G(Q,[P])},enter(P){let Q=c,ie=l,oe=u;if(!n.isMounted)if(r)Q=b||c,ie=k||l,oe=O||u;else return;let x=!1;const de=P._enterCb=ye=>{x||(x=!0,ye?G(oe,[P]):G(ie,[P]),X.delayedLeave&&X.delayedLeave(),P._enterCb=void 0)};Q?he(Q,[P,de]):de()},leave(P,Q){const ie=String(t.key);if(P._enterCb&&P._enterCb(!0),n.isUnmounting)return Q();G(h,[P]);let oe=!1;const x=P._leaveCb=de=>{oe||(oe=!0,Q(),de?G(m,[P]):G(p,[P]),P._leaveCb=void 0,W[ie]===t&&delete W[ie])};W[ie]=t,f?he(f,[P,x]):x()},clone(P){return Za(P,e,n,s)}};return X}function Sa(t){if(jo(t))return t=xn(t),t.children=null,t}function Vu(t){return jo(t)?t.children?t.children[0]:void 0:t}function ec(t,e){t.shapeFlag&6&&t.component?ec(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Cd(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Tt?(o.patchFlag&128&&r++,s=s.concat(Cd(o.children,e,a))):(e||o.type!==xt)&&s.push(a!=null?xn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Bo(t){return re(t)?{setup:t,name:t.name}:t}const $i=t=>!!t.type.__asyncLoader,jo=t=>t.type.__isKeepAlive;function vv(t,e){kd(t,"a",e)}function wv(t,e){kd(t,"da",e)}function kd(t,e,n=qe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if($o(e,s,n),n){let r=n.parent;for(;r&&r.parent;)jo(r.parent.vnode)&&_v(s,e,n,r),r=r.parent}}function _v(t,e,n,s){const r=$o(e,t,s,!0);Ho(()=>{Qc(s[e],r)},n)}function $o(t,e,n=qe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Js(),Bs(n);const a=Ct(e,n,t,o);return is(),Zs(),a});return s?r.unshift(i):r.push(i),i}}const fn=t=>(e,n=qe)=>(!Vr||t==="sp")&&$o(t,e,n),Ev=fn("bm"),al=fn("m"),Iv=fn("bu"),bv=fn("u"),Rd=fn("bum"),Ho=fn("um"),Tv=fn("sp"),Sv=fn("rtg"),Av=fn("rtc");function Cv(t,e=qe){$o("ec",t,e)}function ws(t,e){const n=At;if(n===null)return t;const s=qo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ae]=e[i];re(o)&&(o={mounted:o,updated:o}),o.deep&&Zn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function jn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Js(),Ct(c,n,8,[t.el,a,t,e]),Zs())}}const Dd="components";function Vs(t,e){return Rv(Dd,t,!0,e)||t}const kv=Symbol();function Rv(t,e,n=!0,s=!1){const r=At||qe;if(r){const i=r.type;if(t===Dd){const a=ow(i,!1);if(a&&(a===e||a===Wt(e)||a===Mo(Wt(e))))return i}const o=Bu(r[t]||i[t],e)||Bu(r.appContext[t],e);return!o&&s?i:o}}function Bu(t,e){return t&&(t[e]||t[Wt(e)]||t[Mo(Wt(e))])}function Dv(t,e,n,s){let r;const i=n&&n[s];if(z(t)||ze(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ce(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const tc=t=>t?jd(t)?qo(t)||t.proxy:tc(t.parent):null,no=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tc(t.parent),$root:t=>tc(t.root),$emit:t=>t.emit,$options:t=>cl(t),$forceUpdate:t=>t.f||(t.f=()=>il(t.update)),$nextTick:t=>t.n||(t.n=Fo.bind(t.proxy)),$watch:t=>gv.bind(t)}),Nv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==Ae&&ue(s,e))return o[e]=1,s[e];if(r!==Ae&&ue(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ue(l,e))return o[e]=3,i[e];if(n!==Ae&&ue(n,e))return o[e]=4,n[e];nc&&(o[e]=0)}}const u=no[e];let h,f;if(u)return e==="$attrs"&&wt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ae&&ue(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ue(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==Ae&&ue(r,e)?(r[e]=n,!0):s!==Ae&&ue(s,e)?(s[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ae&&ue(t,o)||e!==Ae&&ue(e,o)||(a=i[0])&&ue(a,o)||ue(s,o)||ue(no,o)||ue(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let nc=!0;function Ov(t){const e=cl(t),n=t.proxy,s=t.ctx;nc=!1,e.beforeCreate&&ju(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:m,activated:w,deactivated:b,beforeDestroy:k,beforeUnmount:O,destroyed:B,unmounted:W,render:G,renderTracked:he,renderTriggered:X,errorCaptured:P,serverPrefetch:Q,expose:ie,inheritAttrs:oe,components:x,directives:de,filters:ye}=e;if(l&&Pv(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Ie in o){const ve=o[Ie];re(ve)&&(s[Ie]=ve.bind(n))}if(r){const Ie=r.call(n,n);Ce(Ie)&&(t.data=Pt(Ie))}if(nc=!0,i)for(const Ie in i){const ve=i[Ie],et=re(ve)?ve.bind(n,n):re(ve.get)?ve.get.bind(n,n):Ot,Qt=!re(ve)&&re(ve.set)?ve.set.bind(n):Ot,Et=st({get:et,set:Qt});Object.defineProperty(s,Ie,{enumerable:!0,configurable:!0,get:()=>Et.value,set:mt=>Et.value=mt})}if(a)for(const Ie in a)Nd(a[Ie],s,n,Ie);if(c){const Ie=re(c)?c.call(n):c;Reflect.ownKeys(Ie).forEach(ve=>{bt(ve,Ie[ve])})}u&&ju(u,t,"c");function Ne(Ie,ve){z(ve)?ve.forEach(et=>Ie(et.bind(n))):ve&&Ie(ve.bind(n))}if(Ne(Ev,h),Ne(al,f),Ne(Iv,p),Ne(bv,m),Ne(vv,w),Ne(wv,b),Ne(Cv,P),Ne(Av,he),Ne(Sv,X),Ne(Rd,O),Ne(Ho,W),Ne(Tv,Q),z(ie))if(ie.length){const Ie=t.exposed||(t.exposed={});ie.forEach(ve=>{Object.defineProperty(Ie,ve,{get:()=>n[ve],set:et=>n[ve]=et})})}else t.exposed||(t.exposed={});G&&t.render===Ot&&(t.render=G),oe!=null&&(t.inheritAttrs=oe),x&&(t.components=x),de&&(t.directives=de)}function Pv(t,e,n=Ot,s=!1){z(t)&&(t=sc(t));for(const r in t){const i=t[r];let o;Ce(i)?"default"in i?o=xe(i.from||r,i.default,!0):o=xe(i.from||r):o=xe(i),Ue(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function ju(t,e,n){Ct(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Nd(t,e,n,s){const r=s.includes(".")?Td(n,s):()=>n[s];if(ze(t)){const i=e[t];re(i)&&rs(r,i)}else if(re(t))rs(r,t.bind(n));else if(Ce(t))if(z(t))t.forEach(i=>Nd(i,e,n,s));else{const i=re(t.handler)?t.handler.bind(n):e[t.handler];re(i)&&rs(r,i,t)}}function cl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>so(c,l,o,!0)),so(c,e,o)),Ce(e)&&i.set(e,c),c}function so(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&so(t,i,n,!0),r&&r.forEach(o=>so(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=xv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const xv={data:$u,props:qn,emits:qn,methods:qn,computed:qn,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:qn,directives:qn,watch:Lv,provide:$u,inject:Mv};function $u(t,e){return e?t?function(){return Je(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function Mv(t,e){return qn(sc(t),sc(e))}function sc(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ut(t,e){return t?[...new Set([].concat(t,e))]:e}function qn(t,e){return t?Je(Je(Object.create(null),t),e):e}function Lv(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const s in e)n[s]=ut(t[s],e[s]);return n}function Uv(t,e,n,s=!1){const r={},i={};Zi(i,Ko,1),t.propsDefaults=Object.create(null),Od(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Wy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Fv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=pe(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Vo(t.emitsOptions,f))continue;const p=e[f];if(c)if(ue(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const m=Wt(f);r[m]=rc(c,a,m,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{Od(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ue(e,h)&&((u=Xs(h))===h||!ue(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=rc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ue(e,h)&&!0)&&(delete i[h],l=!0)}l&&on(t,"set","$attrs")}function Od(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Bi(c))continue;const l=e[c];let u;r&&ue(r,u=Wt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Vo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=pe(n),l=a||Ae;for(let u=0;u<i.length;u++){const h=i[u];n[h]=rc(r,c,h,l[h],t,!ue(l,h))}}return o}function rc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&re(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Bs(r),s=l[n]=c.call(null,e),is())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Xs(n))&&(s=!0))}return s}function Pd(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!re(t)){const u=h=>{c=!0;const[f,p]=Pd(h,e,!0);Je(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ce(t)&&s.set(t,Rs),Rs;if(z(i))for(let u=0;u<i.length;u++){const h=Wt(i[u]);Hu(h)&&(o[h]=Ae)}else if(i)for(const u in i){const h=Wt(u);if(Hu(h)){const f=i[u],p=o[h]=z(f)||re(f)?{type:f}:f;if(p){const m=zu(Boolean,p.type),w=zu(String,p.type);p[0]=m>-1,p[1]=w<0||m<w,(m>-1||ue(p,"default"))&&a.push(h)}}}const l=[o,a];return Ce(t)&&s.set(t,l),l}function Hu(t){return t[0]!=="$"}function Ku(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function qu(t,e){return Ku(t)===Ku(e)}function zu(t,e){return z(e)?e.findIndex(n=>qu(n,t)):re(e)&&qu(e,t)?0:-1}const xd=t=>t[0]==="_"||t==="$stable",ll=t=>z(t)?t.map(Bt):[Bt(t)],Vv=(t,e,n)=>{if(e._n)return e;const s=Zt((...r)=>ll(e(...r)),n);return s._c=!1,s},Md=(t,e,n)=>{const s=t._ctx;for(const r in t){if(xd(r))continue;const i=t[r];if(re(i))e[r]=Vv(r,i,s);else if(i!=null){const o=ll(i);e[r]=()=>o}}},Ld=(t,e)=>{const n=ll(e);t.slots.default=()=>n},Bv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),Zi(e,"_",n)):Md(e,t.slots={})}else t.slots={},e&&Ld(t,e);Zi(t.slots,Ko,1)},jv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Je(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Md(e,r)),o=e}else e&&(Ld(t,e),o={default:1});if(i)for(const a in r)!xd(a)&&!(a in o)&&delete r[a]};function Ud(){return{app:null,config:{isNativeTag:py,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $v=0;function Hv(t,e){return function(s,r=null){re(s)||(s=Object.assign({},s)),r!=null&&!Ce(r)&&(r=null);const i=Ud(),o=new Set;let a=!1;const c=i.app={_uid:$v++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:cw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&re(l.install)?(o.add(l),l.install(c,...u)):re(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Le(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,qo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function ic(t,e,n,s,r=!1){if(z(t)){t.forEach((f,p)=>ic(f,e&&(z(e)?e[p]:e),n,s,r));return}if($i(s)&&!r)return;const i=s.shapeFlag&4?qo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ze(l)?(u[l]=null,ue(h,l)&&(h[l]=null)):Ue(l)&&(l.value=null)),re(c))kn(c,a,12,[o,u]);else{const f=ze(c),p=Ue(c);if(f||p){const m=()=>{if(t.f){const w=f?u[c]:c.value;r?z(w)&&Qc(w,i):z(w)?w.includes(i)||w.push(i):f?(u[c]=[i],ue(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ue(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,dt(m,n)):m()}}}const dt=dv;function Kv(t){return qv(t)}function qv(t,e){const n=_y();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Ot,cloneNode:m,insertStaticContent:w}=t,b=(d,g,v,E=null,y=null,I=null,D=!1,S=null,R=!!g.dynamicChildren)=>{if(d===g)return;d&&!Qn(d,g)&&(E=F(d),He(d,y,I,!0),d=null),g.patchFlag===-2&&(R=!1,g.dynamicChildren=null);const{type:T,ref:j,shapeFlag:L}=g;switch(T){case ul:k(d,g,v,E);break;case xt:O(d,g,v,E);break;case Hi:d==null&&B(g,v,E,D);break;case Tt:de(d,g,v,E,y,I,D,S,R);break;default:L&1?he(d,g,v,E,y,I,D,S,R):L&6?ye(d,g,v,E,y,I,D,S,R):(L&64||L&128)&&T.process(d,g,v,E,y,I,D,S,R,_e)}j!=null&&y&&ic(j,d&&d.ref,I,g||d,!g)},k=(d,g,v,E)=>{if(d==null)s(g.el=a(g.children),v,E);else{const y=g.el=d.el;g.children!==d.children&&l(y,g.children)}},O=(d,g,v,E)=>{d==null?s(g.el=c(g.children||""),v,E):g.el=d.el},B=(d,g,v,E)=>{[d.el,d.anchor]=w(d.children,g,v,E,d.el,d.anchor)},W=({el:d,anchor:g},v,E)=>{let y;for(;d&&d!==g;)y=f(d),s(d,v,E),d=y;s(g,v,E)},G=({el:d,anchor:g})=>{let v;for(;d&&d!==g;)v=f(d),r(d),d=v;r(g)},he=(d,g,v,E,y,I,D,S,R)=>{D=D||g.type==="svg",d==null?X(g,v,E,y,I,D,S,R):ie(d,g,y,I,D,S,R)},X=(d,g,v,E,y,I,D,S)=>{let R,T;const{type:j,props:L,shapeFlag:$,transition:ee,patchFlag:fe,dirs:be}=d;if(d.el&&m!==void 0&&fe===-1)R=d.el=m(d.el);else{if(R=d.el=o(d.type,I,L&&L.is,L),$&8?u(R,d.children):$&16&&Q(d.children,R,null,E,y,I&&j!=="foreignObject",D,S),be&&jn(d,null,E,"created"),L){for(const De in L)De!=="value"&&!Bi(De)&&i(R,De,null,L[De],I,d.children,E,y,N);"value"in L&&i(R,"value",null,L.value),(T=L.onVnodeBeforeMount)&&Ft(T,E,d)}P(R,d,d.scopeId,D,E)}be&&jn(d,null,E,"beforeMount");const Te=(!y||y&&!y.pendingBranch)&&ee&&!ee.persisted;Te&&ee.beforeEnter(R),s(R,g,v),((T=L&&L.onVnodeMounted)||Te||be)&&dt(()=>{T&&Ft(T,E,d),Te&&ee.enter(R),be&&jn(d,null,E,"mounted")},y)},P=(d,g,v,E,y)=>{if(v&&p(d,v),E)for(let I=0;I<E.length;I++)p(d,E[I]);if(y){let I=y.subTree;if(g===I){const D=y.vnode;P(d,D,D.scopeId,D.slotScopeIds,y.parent)}}},Q=(d,g,v,E,y,I,D,S,R=0)=>{for(let T=R;T<d.length;T++){const j=d[T]=S?_n(d[T]):Bt(d[T]);b(null,j,g,v,E,y,I,D,S)}},ie=(d,g,v,E,y,I,D)=>{const S=g.el=d.el;let{patchFlag:R,dynamicChildren:T,dirs:j}=g;R|=d.patchFlag&16;const L=d.props||Ae,$=g.props||Ae;let ee;v&&$n(v,!1),(ee=$.onVnodeBeforeUpdate)&&Ft(ee,v,g,d),j&&jn(g,d,v,"beforeUpdate"),v&&$n(v,!0);const fe=y&&g.type!=="foreignObject";if(T?oe(d.dynamicChildren,T,S,v,E,fe,I):D||et(d,g,S,null,v,E,fe,I,!1),R>0){if(R&16)x(S,g,L,$,v,E,y);else if(R&2&&L.class!==$.class&&i(S,"class",null,$.class,y),R&4&&i(S,"style",L.style,$.style,y),R&8){const be=g.dynamicProps;for(let Te=0;Te<be.length;Te++){const De=be[Te],kt=L[De],vs=$[De];(vs!==kt||De==="value")&&i(S,De,kt,vs,y,d.children,v,E,N)}}R&1&&d.children!==g.children&&u(S,g.children)}else!D&&T==null&&x(S,g,L,$,v,E,y);((ee=$.onVnodeUpdated)||j)&&dt(()=>{ee&&Ft(ee,v,g,d),j&&jn(g,d,v,"updated")},E)},oe=(d,g,v,E,y,I,D)=>{for(let S=0;S<g.length;S++){const R=d[S],T=g[S],j=R.el&&(R.type===Tt||!Qn(R,T)||R.shapeFlag&70)?h(R.el):v;b(R,T,j,null,E,y,I,D,!0)}},x=(d,g,v,E,y,I,D)=>{if(v!==E){for(const S in E){if(Bi(S))continue;const R=E[S],T=v[S];R!==T&&S!=="value"&&i(d,S,T,R,D,g.children,y,I,N)}if(v!==Ae)for(const S in v)!Bi(S)&&!(S in E)&&i(d,S,v[S],null,D,g.children,y,I,N);"value"in E&&i(d,"value",v.value,E.value)}},de=(d,g,v,E,y,I,D,S,R)=>{const T=g.el=d?d.el:a(""),j=g.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:$,slotScopeIds:ee}=g;ee&&(S=S?S.concat(ee):ee),d==null?(s(T,v,E),s(j,v,E),Q(g.children,v,j,y,I,D,S,R)):L>0&&L&64&&$&&d.dynamicChildren?(oe(d.dynamicChildren,$,v,y,I,D,S),(g.key!=null||y&&g===y.subTree)&&Fd(d,g,!0)):et(d,g,v,j,y,I,D,S,R)},ye=(d,g,v,E,y,I,D,S,R)=>{g.slotScopeIds=S,d==null?g.shapeFlag&512?y.ctx.activate(g,v,E,D,R):ke(g,v,E,y,I,D,R):Ne(d,g,R)},ke=(d,g,v,E,y,I,D)=>{const S=d.component=tw(d,E,y);if(jo(d)&&(S.ctx.renderer=_e),nw(S),S.asyncDep){if(y&&y.registerDep(S,Ie),!d.el){const R=S.subTree=Le(xt);O(null,R,g,v)}return}Ie(S,d,g,v,y,I,D)},Ne=(d,g,v)=>{const E=g.component=d.component;if(uv(d,g,v))if(E.asyncDep&&!E.asyncResolved){ve(E,g,v);return}else E.next=g,rv(E.update),E.update();else g.el=d.el,E.vnode=g},Ie=(d,g,v,E,y,I,D)=>{const S=()=>{if(d.isMounted){let{next:j,bu:L,u:$,parent:ee,vnode:fe}=d,be=j,Te;$n(d,!1),j?(j.el=fe.el,ve(d,j,D)):j=fe,L&&ji(L),(Te=j.props&&j.props.onVnodeBeforeUpdate)&&Ft(Te,ee,j,fe),$n(d,!0);const De=Ta(d),kt=d.subTree;d.subTree=De,b(kt,De,h(kt.el),F(kt),d,y,I),j.el=De.el,be===null&&hv(d,De.el),$&&dt($,y),(Te=j.props&&j.props.onVnodeUpdated)&&dt(()=>Ft(Te,ee,j,fe),y)}else{let j;const{el:L,props:$}=g,{bm:ee,m:fe,parent:be}=d,Te=$i(g);if($n(d,!1),ee&&ji(ee),!Te&&(j=$&&$.onVnodeBeforeMount)&&Ft(j,be,g),$n(d,!0),L&&J){const De=()=>{d.subTree=Ta(d),J(L,d.subTree,d,y,null)};Te?g.type.__asyncLoader().then(()=>!d.isUnmounted&&De()):De()}else{const De=d.subTree=Ta(d);b(null,De,v,E,d,y,I),g.el=De.el}if(fe&&dt(fe,y),!Te&&(j=$&&$.onVnodeMounted)){const De=g;dt(()=>Ft(j,be,De),y)}(g.shapeFlag&256||be&&$i(be.vnode)&&be.vnode.shapeFlag&256)&&d.a&&dt(d.a,y),d.isMounted=!0,g=v=E=null}},R=d.effect=new Jc(S,()=>il(T),d.scope),T=d.update=()=>R.run();T.id=d.uid,$n(d,!0),T()},ve=(d,g,v)=>{g.component=d;const E=d.vnode.props;d.vnode=g,d.next=null,Fv(d,g.props,E,v),jv(d,g.children,v),Js(),Lu(),Zs()},et=(d,g,v,E,y,I,D,S,R=!1)=>{const T=d&&d.children,j=d?d.shapeFlag:0,L=g.children,{patchFlag:$,shapeFlag:ee}=g;if($>0){if($&128){Et(T,L,v,E,y,I,D,S,R);return}else if($&256){Qt(T,L,v,E,y,I,D,S,R);return}}ee&8?(j&16&&N(T,y,I),L!==T&&u(v,L)):j&16?ee&16?Et(T,L,v,E,y,I,D,S,R):N(T,y,I,!0):(j&8&&u(v,""),ee&16&&Q(L,v,E,y,I,D,S,R))},Qt=(d,g,v,E,y,I,D,S,R)=>{d=d||Rs,g=g||Rs;const T=d.length,j=g.length,L=Math.min(T,j);let $;for($=0;$<L;$++){const ee=g[$]=R?_n(g[$]):Bt(g[$]);b(d[$],ee,v,null,y,I,D,S,R)}T>j?N(d,y,I,!0,!1,L):Q(g,v,E,y,I,D,S,R,L)},Et=(d,g,v,E,y,I,D,S,R)=>{let T=0;const j=g.length;let L=d.length-1,$=j-1;for(;T<=L&&T<=$;){const ee=d[T],fe=g[T]=R?_n(g[T]):Bt(g[T]);if(Qn(ee,fe))b(ee,fe,v,null,y,I,D,S,R);else break;T++}for(;T<=L&&T<=$;){const ee=d[L],fe=g[$]=R?_n(g[$]):Bt(g[$]);if(Qn(ee,fe))b(ee,fe,v,null,y,I,D,S,R);else break;L--,$--}if(T>L){if(T<=$){const ee=$+1,fe=ee<j?g[ee].el:E;for(;T<=$;)b(null,g[T]=R?_n(g[T]):Bt(g[T]),v,fe,y,I,D,S,R),T++}}else if(T>$)for(;T<=L;)He(d[T],y,I,!0),T++;else{const ee=T,fe=T,be=new Map;for(T=fe;T<=$;T++){const yt=g[T]=R?_n(g[T]):Bt(g[T]);yt.key!=null&&be.set(yt.key,T)}let Te,De=0;const kt=$-fe+1;let vs=!1,bu=0;const ur=new Array(kt);for(T=0;T<kt;T++)ur[T]=0;for(T=ee;T<=L;T++){const yt=d[T];if(De>=kt){He(yt,y,I,!0);continue}let Ut;if(yt.key!=null)Ut=be.get(yt.key);else for(Te=fe;Te<=$;Te++)if(ur[Te-fe]===0&&Qn(yt,g[Te])){Ut=Te;break}Ut===void 0?He(yt,y,I,!0):(ur[Ut-fe]=T+1,Ut>=bu?bu=Ut:vs=!0,b(yt,g[Ut],v,null,y,I,D,S,R),De++)}const Tu=vs?zv(ur):Rs;for(Te=Tu.length-1,T=kt-1;T>=0;T--){const yt=fe+T,Ut=g[yt],Su=yt+1<j?g[yt+1].el:E;ur[T]===0?b(null,Ut,v,Su,y,I,D,S,R):vs&&(Te<0||T!==Tu[Te]?mt(Ut,v,Su,2):Te--)}}},mt=(d,g,v,E,y=null)=>{const{el:I,type:D,transition:S,children:R,shapeFlag:T}=d;if(T&6){mt(d.component.subTree,g,v,E);return}if(T&128){d.suspense.move(g,v,E);return}if(T&64){D.move(d,g,v,_e);return}if(D===Tt){s(I,g,v);for(let L=0;L<R.length;L++)mt(R[L],g,v,E);s(d.anchor,g,v);return}if(D===Hi){W(d,g,v);return}if(E!==2&&T&1&&S)if(E===0)S.beforeEnter(I),s(I,g,v),dt(()=>S.enter(I),y);else{const{leave:L,delayLeave:$,afterLeave:ee}=S,fe=()=>s(I,g,v),be=()=>{L(I,()=>{fe(),ee&&ee()})};$?$(I,fe,be):be()}else s(I,g,v)},He=(d,g,v,E=!1,y=!1)=>{const{type:I,props:D,ref:S,children:R,dynamicChildren:T,shapeFlag:j,patchFlag:L,dirs:$}=d;if(S!=null&&ic(S,null,v,d,!0),j&256){g.ctx.deactivate(d);return}const ee=j&1&&$,fe=!$i(d);let be;if(fe&&(be=D&&D.onVnodeBeforeUnmount)&&Ft(be,g,d),j&6)M(d.component,v,E);else{if(j&128){d.suspense.unmount(v,E);return}ee&&jn(d,null,g,"beforeUnmount"),j&64?d.type.remove(d,g,v,y,_e,E):T&&(I!==Tt||L>0&&L&64)?N(T,g,v,!1,!0):(I===Tt&&L&384||!y&&j&16)&&N(R,g,v),E&&ft(d)}(fe&&(be=D&&D.onVnodeUnmounted)||ee)&&dt(()=>{be&&Ft(be,g,d),ee&&jn(d,null,g,"unmounted")},v)},ft=d=>{const{type:g,el:v,anchor:E,transition:y}=d;if(g===Tt){_(v,E);return}if(g===Hi){G(d);return}const I=()=>{r(v),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:D,delayLeave:S}=y,R=()=>D(v,I);S?S(d.el,I,R):R()}else I()},_=(d,g)=>{let v;for(;d!==g;)v=f(d),r(d),d=v;r(g)},M=(d,g,v)=>{const{bum:E,scope:y,update:I,subTree:D,um:S}=d;E&&ji(E),y.stop(),I&&(I.active=!1,He(D,d,g,v)),S&&dt(S,g),dt(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},N=(d,g,v,E=!1,y=!1,I=0)=>{for(let D=I;D<d.length;D++)He(d[D],g,v,E,y)},F=d=>d.shapeFlag&6?F(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),ge=(d,g,v)=>{d==null?g._vnode&&He(g._vnode,null,null,!0):b(g._vnode||null,d,g,null,null,null,v),Lu(),_d(),g._vnode=d},_e={p:b,um:He,m:mt,r:ft,mt:ke,mc:Q,pc:et,pbc:oe,n:F,o:t};let se,J;return e&&([se,J]=e(_e)),{render:ge,hydrate:se,createApp:Hv(ge,se)}}function $n({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Fd(t,e,n=!1){const s=t.children,r=e.children;if(z(s)&&z(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=_n(r[i]),a.el=o.el),n||Fd(o,a))}}function zv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Wv=t=>t.__isTeleport,Tt=Symbol(void 0),ul=Symbol(void 0),xt=Symbol(void 0),Hi=Symbol(void 0),Ir=[];let Nt=null;function Rt(t=!1){Ir.push(Nt=t?null:[])}function Gv(){Ir.pop(),Nt=Ir[Ir.length-1]||null}let Fr=1;function Wu(t){Fr+=t}function Vd(t){return t.dynamicChildren=Fr>0?Nt||Rs:null,Gv(),Fr>0&&Nt&&Nt.push(t),t}function Gn(t,e,n,s,r,i){return Vd(Y(t,e,n,s,r,i,!0))}function ro(t,e,n,s,r){return Vd(Le(t,e,n,s,r,!0))}function oc(t){return t?t.__v_isVNode===!0:!1}function Qn(t,e){return t.type===e.type&&t.key===e.key}const Ko="__vInternal",Bd=({key:t})=>t!=null?t:null,Ki=({ref:t,ref_key:e,ref_for:n})=>t!=null?ze(t)||Ue(t)||re(t)?{i:At,r:t,k:e,f:!!n}:t:null;function Y(t,e=null,n=null,s=0,r=null,i=t===Tt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bd(e),ref:e&&Ki(e),scopeId:bd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(hl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ze(n)?8:16),Fr>0&&!o&&Nt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Nt.push(c),c}const Le=Qv;function Qv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===kv)&&(t=xt),oc(t)){const a=xn(t,e,!0);return n&&hl(a,n),Fr>0&&!i&&Nt&&(a.shapeFlag&6?Nt[Nt.indexOf(t)]=a:Nt.push(a)),a.patchFlag|=-2,a}if(aw(t)&&(t=t.__vccOpts),e){e=Yv(e);let{class:a,style:c}=e;a&&!ze(a)&&(e.class=Wc(a)),Ce(c)&&(fd(c)&&!z(c)&&(c=Je({},c)),e.style=zc(c))}const o=ze(t)?1:fv(t)?128:Wv(t)?64:Ce(t)?4:re(t)?2:0;return Y(t,e,n,s,r,o,i,!0)}function Yv(t){return t?fd(t)||Ko in t?Je({},t):t:null}function xn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Jv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Bd(a),ref:e&&e.ref?n&&r?z(r)?r.concat(Ki(e)):[r,Ki(e)]:Ki(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Tt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xn(t.ssContent),ssFallback:t.ssFallback&&xn(t.ssFallback),el:t.el,anchor:t.anchor}}function er(t=" ",e=0){return Le(ul,null,t,e)}function Xv(t,e){const n=Le(Hi,null,t);return n.staticCount=e,n}function hr(t="",e=!1){return e?(Rt(),ro(xt,null,t)):Le(xt,null,t)}function Bt(t){return t==null||typeof t=="boolean"?Le(xt):z(t)?Le(Tt,null,t.slice()):typeof t=="object"?_n(t):Le(ul,null,String(t))}function _n(t){return t.el===null||t.memo?t:xn(t)}function hl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),hl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ko in e)?e._ctx=At:r===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:At},n=32):(e=String(e),s&64?(n=16,e=[er(e)]):n=8);t.children=e,t.shapeFlag|=n}function Jv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Wc([e.class,s.class]));else if(r==="style")e.style=zc([e.style,s.style]);else if(Oo(r)){const i=e[r],o=s[r];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ft(t,e,n,s=null){Ct(t,e,7,[n,s])}const Zv=Ud();let ew=0;function tw(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Zv,i={uid:ew++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pd(s,r),emitsOptions:Id(s,r),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:s.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=av.bind(null,i),t.ce&&t.ce(i),i}let qe=null;const fl=()=>qe||At,Bs=t=>{qe=t,t.scope.on()},is=()=>{qe&&qe.scope.off(),qe=null};function jd(t){return t.vnode.shapeFlag&4}let Vr=!1;function nw(t,e=!1){Vr=e;const{props:n,children:s}=t.vnode,r=jd(t);Uv(t,n,r,e),Bv(t,s);const i=r?sw(t,e):void 0;return Vr=!1,i}function sw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Fs(new Proxy(t.ctx,Nv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?iw(t):null;Bs(t),Js();const i=kn(s,t,0,[t.props,r]);if(Zs(),is(),Yf(i)){if(i.then(is,is),e)return i.then(o=>{Gu(t,o,e)}).catch(o=>{Uo(o,t,0)});t.asyncDep=i}else Gu(t,i,e)}else $d(t,e)}function Gu(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=md(e)),$d(t,n)}let Qu;function $d(t,e,n){const s=t.type;if(!t.render){if(!e&&Qu&&!s.render){const r=s.template||cl(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Je(Je({isCustomElement:i,delimiters:a},o),c);s.render=Qu(r,l)}}t.render=s.render||Ot}Bs(t),Js(),Ov(t),Zs(),is()}function rw(t){return new Proxy(t.attrs,{get(e,n){return wt(t,"get","$attrs"),e[n]}})}function iw(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=rw(t))},slots:t.slots,emit:t.emit,expose:e}}function qo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(md(Fs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in no)return no[n](t)}}))}function ow(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function aw(t){return re(t)&&"__vccOpts"in t}const st=(t,e)=>tv(t,e,Vr);function Ye(t,e,n){const s=arguments.length;return s===2?Ce(e)&&!z(e)?oc(e)?Le(t,null,[e]):Le(t,e):Le(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&oc(n)&&(n=[n]),Le(t,e,n))}const cw="3.2.39",lw="http://www.w3.org/2000/svg",Yn=typeof document<"u"?document:null,Yu=Yn&&Yn.createElement("template"),uw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Yn.createElementNS(lw,t):Yn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Yn.createTextNode(t),createComment:t=>Yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Yu.innerHTML=s?`<svg>${t}</svg>`:t;const a=Yu.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function hw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function fw(t,e,n){const s=t.style,r=ze(n);if(n&&!r){for(const i in n)ac(s,i,n[i]);if(e&&!ze(e))for(const i in e)n[i]==null&&ac(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Xu=/\s*!important$/;function ac(t,e,n){if(z(n))n.forEach(s=>ac(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=dw(t,e);Xu.test(n)?t.setProperty(Xs(s),n.replace(Xu,""),"important"):t[s]=n}}const Ju=["Webkit","Moz","ms"],Aa={};function dw(t,e){const n=Aa[e];if(n)return n;let s=Wt(e);if(s!=="filter"&&s in t)return Aa[e]=s;s=Mo(s);for(let r=0;r<Ju.length;r++){const i=Ju[r]+s;if(i in t)return Aa[e]=i}return e}const Zu="http://www.w3.org/1999/xlink";function pw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Zu,e.slice(6,e.length)):t.setAttributeNS(Zu,e,n);else{const i=cy(e);n==null||i&&!Gf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function gw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Gf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Hd,mw]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let cc=0;const yw=Promise.resolve(),vw=()=>{cc=0},ww=()=>cc||(yw.then(vw),cc=Hd());function Xn(t,e,n,s){t.addEventListener(e,n,s)}function _w(t,e,n,s){t.removeEventListener(e,n,s)}function Ew(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Iw(e);if(s){const l=i[e]=bw(s,r);Xn(t,a,l,c)}else o&&(_w(t,a,o,c),i[e]=void 0)}}const eh=/(?:Once|Passive|Capture)$/;function Iw(t){let e;if(eh.test(t)){e={};let s;for(;s=t.match(eh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xs(t.slice(2)),e]}function bw(t,e){const n=s=>{const r=s.timeStamp||Hd();(mw||r>=n.attached-1)&&Ct(Tw(s,n.value),e,5,[s])};return n.value=t,n.attached=ww(),n}function Tw(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const th=/^on[a-z]/,Sw=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?hw(t,s,r):e==="style"?fw(t,n,s):Oo(e)?Gc(e)||Ew(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Aw(t,e,s,r))?gw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),pw(t,e,s,r))};function Aw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&th.test(e)&&re(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||th.test(e)&&ze(n)?!1:e in t}const gn="transition",fr="animation",dl=(t,{slots:e})=>Ye(Sd,Cw(t),e);dl.displayName="Transition";const Kd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};dl.props=Je({},Sd.props,Kd);const Hn=(t,e=[])=>{z(t)?t.forEach(n=>n(...e)):t&&t(...e)},nh=t=>t?z(t)?t.some(e=>e.length>1):t.length>1:!1;function Cw(t){const e={};for(const x in t)x in Kd||(e[x]=t[x]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=kw(r),w=m&&m[0],b=m&&m[1],{onBeforeEnter:k,onEnter:O,onEnterCancelled:B,onLeave:W,onLeaveCancelled:G,onBeforeAppear:he=k,onAppear:X=O,onAppearCancelled:P=B}=e,Q=(x,de,ye)=>{Kn(x,de?u:a),Kn(x,de?l:o),ye&&ye()},ie=(x,de)=>{x._isLeaving=!1,Kn(x,h),Kn(x,p),Kn(x,f),de&&de()},oe=x=>(de,ye)=>{const ke=x?X:O,Ne=()=>Q(de,x,ye);Hn(ke,[de,Ne]),sh(()=>{Kn(de,x?c:i),mn(de,x?u:a),nh(ke)||rh(de,s,w,Ne)})};return Je(e,{onBeforeEnter(x){Hn(k,[x]),mn(x,i),mn(x,o)},onBeforeAppear(x){Hn(he,[x]),mn(x,c),mn(x,l)},onEnter:oe(!1),onAppear:oe(!0),onLeave(x,de){x._isLeaving=!0;const ye=()=>ie(x,de);mn(x,h),Nw(),mn(x,f),sh(()=>{!x._isLeaving||(Kn(x,h),mn(x,p),nh(W)||rh(x,s,b,ye))}),Hn(W,[x,ye])},onEnterCancelled(x){Q(x,!1),Hn(B,[x])},onAppearCancelled(x){Q(x,!0),Hn(P,[x])},onLeaveCancelled(x){ie(x),Hn(G,[x])}})}function kw(t){if(t==null)return null;if(Ce(t))return[Ca(t.enter),Ca(t.leave)];{const e=Ca(t);return[e,e]}}function Ca(t){return xr(t)}function mn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Kn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function sh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Rw=0;function rh(t,e,n,s){const r=t._endId=++Rw,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Dw(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=p=>{p.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function Dw(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),r=s(gn+"Delay"),i=s(gn+"Duration"),o=ih(r,i),a=s(fr+"Delay"),c=s(fr+"Duration"),l=ih(a,c);let u=null,h=0,f=0;e===gn?o>0&&(u=gn,h=o,f=i.length):e===fr?l>0&&(u=fr,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?gn:fr:null,f=u?u===gn?i.length:c.length:0);const p=u===gn&&/\b(transform|all)(,|$)/.test(n[gn+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:p}}function ih(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>oh(n)+oh(t[s])))}function oh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Nw(){return document.body.offsetHeight}const io=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>ji(e,n):e};function Ow(t){t.target.composing=!0}function ah(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _s={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=io(r);const i=s||r.props&&r.props.type==="number";Xn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=xr(a)),t._assign(a)}),n&&Xn(t,"change",()=>{t.value=t.value.trim()}),e||(Xn(t,"compositionstart",Ow),Xn(t,"compositionend",ah),Xn(t,"change",ah))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=io(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&xr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Yk={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Po(e);Xn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?xr(oo(o)):oo(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=io(s)},mounted(t,{value:e}){ch(t,e)},beforeUpdate(t,e,n){t._assign=io(n)},updated(t,{value:e}){ch(t,e)}};function ch(t,e){const n=t.multiple;if(!(n&&!z(e)&&!Po(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=oo(i);if(n)z(e)?i.selected=dy(e,o)>-1:i.selected=e.has(o);else if(No(oo(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function oo(t){return"_value"in t?t._value:t.value}const Pw=["ctrl","shift","alt","meta"],xw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Pw.some(n=>t[`${n}Key`]&&!e.includes(n))},Jn=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=xw[e[r]];if(i&&i(n,e))return}return t(n,...s)},Mw=Je({patchProp:Sw},uw);let lh;function Lw(){return lh||(lh=Kv(Mw))}const Uw=(...t)=>{const e=Lw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Fw(s);if(!r)return;const i=e._component;!re(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Fw(t){return ze(t)?document.querySelector(t):t}var Vw=!1;/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let qd;const zo=t=>qd=t,zd=Symbol();function lc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var br;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(br||(br={}));function Bw(){const t=ed(!0),e=t.run(()=>Se({}));let n=[],s=[];const r=Fs({install(i){zo(r),r._a=i,i.provide(zd,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Vw?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Wd=()=>{};function uh(t,e,n,s=Wd){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&fl()&&Ho(r),r}function Es(t,...e){t.slice().forEach(n=>{n(...e)})}function uc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];lc(r)&&lc(s)&&t.hasOwnProperty(n)&&!Ue(s)&&!Cn(s)?t[n]=uc(r,s):t[n]=s}return t}const jw=Symbol();function $w(t){return!lc(t)||!t.hasOwnProperty(jw)}const{assign:Jt}=Object;function Hw(t){return!!(Ue(t)&&t.effect)}function Kw(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=Xy(n.state.value[t]);return Jt(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Fs(st(()=>{zo(n);const p=n._s.get(t);return o[f].call(p,p)})),h),{}))}return c=Gd(t,l,e,n,s,!0),c.$reset=function(){const h=r?r():{};this.$patch(f=>{Jt(f,h)})},c}function Gd(t,e,n={},s,r,i){let o;const a=Jt({actions:{}},n),c={deep:!0};let l,u,h=Fs([]),f=Fs([]),p;const m=s.state.value[t];!i&&!m&&(s.state.value[t]={}),Se({});let w;function b(X){let P;l=u=!1,typeof X=="function"?(X(s.state.value[t]),P={type:br.patchFunction,storeId:t,events:p}):(uc(s.state.value[t],X),P={type:br.patchObject,payload:X,storeId:t,events:p});const Q=w=Symbol();Fo().then(()=>{w===Q&&(l=!0)}),u=!0,Es(h,P,s.state.value[t])}const k=Wd;function O(){o.stop(),h=[],f=[],s._s.delete(t)}function B(X,P){return function(){zo(s);const Q=Array.from(arguments),ie=[],oe=[];function x(ke){ie.push(ke)}function de(ke){oe.push(ke)}Es(f,{args:Q,name:X,store:G,after:x,onError:de});let ye;try{ye=P.apply(this&&this.$id===t?this:G,Q)}catch(ke){throw Es(oe,ke),ke}return ye instanceof Promise?ye.then(ke=>(Es(ie,ke),ke)).catch(ke=>(Es(oe,ke),Promise.reject(ke))):(Es(ie,ye),ye)}}const W={_p:s,$id:t,$onAction:uh.bind(null,f),$patch:b,$reset:k,$subscribe(X,P={}){const Q=uh(h,X,P.detached,()=>ie()),ie=o.run(()=>rs(()=>s.state.value[t],oe=>{(P.flush==="sync"?u:l)&&X({storeId:t,type:br.direct,events:p},oe)},Jt({},c,P)));return Q},$dispose:O},G=Pt(Jt({},W));s._s.set(t,G);const he=s._e.run(()=>(o=ed(),o.run(()=>e())));for(const X in he){const P=he[X];if(Ue(P)&&!Hw(P)||Cn(P))i||(m&&$w(P)&&(Ue(P)?P.value=m[X]:uc(P,m[X])),s.state.value[t][X]=P);else if(typeof P=="function"){const Q=B(X,P);he[X]=Q,a.actions[X]=P}}return Jt(G,he),Jt(pe(G),he),Object.defineProperty(G,"$state",{get:()=>s.state.value[t],set:X=>{b(P=>{Jt(P,X)})}}),s._p.forEach(X=>{Jt(G,o.run(()=>X({store:G,app:s._a,pinia:s,options:a})))}),m&&i&&n.hydrate&&n.hydrate(G.$state,m),l=!0,u=!0,G}function qw(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=fl();return a=a||l&&xe(zd),a&&zo(a),a=qd,a._s.has(s)||(i?Gd(s,e,r,a):Kw(s,r,a)),a._s.get(s)}return o.$id=s,o}let zw="Store";function Ww(...t){return t.reduce((e,n)=>(e[n.$id+zw]=function(){return n(this.$pinia)},e),{})}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ss=typeof window<"u";function Gw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function ka(t,e){const n={};for(const s in e){const r=e[s];n[s]=Mt(r)?r.map(t):t(r)}return n}const Tr=()=>{},Mt=Array.isArray,Qw=/\/$/,Yw=t=>t.replace(Qw,"");function Ra(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=e_(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Xw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function hh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Jw(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&js(e.matched[s],n.matched[r])&&Qd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function js(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Qd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Zw(t[n],e[n]))return!1;return!0}function Zw(t,e){return Mt(t)?fh(t,e):Mt(e)?fh(e,t):t===e}function fh(t,e){return Mt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function e_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Br;(function(t){t.pop="pop",t.push="push"})(Br||(Br={}));var Sr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Sr||(Sr={}));function t_(t){if(!t)if(Ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Yw(t)}const n_=/^[^#]+#/;function s_(t,e){return t.replace(n_,"#")+e}function r_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Wo=()=>({left:window.pageXOffset,top:window.pageYOffset});function i_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=r_(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function dh(t,e){return(history.state?history.state.position-e:-1)+t}const hc=new Map;function o_(t,e){hc.set(t,e)}function a_(t){const e=hc.get(t);return hc.delete(t),e}let c_=()=>location.protocol+"//"+location.host;function Yd(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),hh(c,"")}return hh(n,t)+s+r}function l_(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const p=Yd(t,location),m=n.value,w=e.value;let b=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}b=w?f.position-w.position:0}else s(p);r.forEach(k=>{k(n.value,m,{delta:b,type:Br.pop,direction:b?b>0?Sr.forward:Sr.back:Sr.unknown})})};function c(){o=n.value}function l(f){r.push(f);const p=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(p),p}function u(){const{history:f}=window;!f.state||f.replaceState(Ee({},f.state,{scroll:Wo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function ph(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Wo():null}}function u_(t){const{history:e,location:n}=window,s={value:Yd(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:c_()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=Ee({},e.state,ph(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=Ee({},r.value,e.state,{forward:c,scroll:Wo()});i(u.current,u,!0);const h=Ee({},ph(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function h_(t){t=t_(t);const e=u_(t),n=l_(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ee({location:"",base:t,go:s,createHref:s_.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function f_(t){return typeof t=="string"||t&&typeof t=="object"}function Xd(t){return typeof t=="string"||typeof t=="symbol"}const yn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Jd=Symbol("");var gh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(gh||(gh={}));function $s(t,e){return Ee(new Error,{type:t,[Jd]:!0},e)}function Yt(t,e){return t instanceof Error&&Jd in t&&(e==null||!!(t.type&e))}const mh="[^/]+?",d_={sensitive:!1,strict:!1,start:!0,end:!0},p_=/[.+*?^${}()[\]/\\]/g;function g_(t,e){const n=Ee({},d_,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(p_,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:w,optional:b,regexp:k}=f;i.push({name:m,repeatable:w,optional:b});const O=k||mh;if(O!==mh){p+=10;try{new RegExp(`(${O})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${m}" (${O}): `+W.message)}}let B=w?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(B=b&&l.length<2?`(?:/${B})`:"/"+B),b&&(B+="?"),r+=B,p+=20,b&&(p+=-8),w&&(p+=-20),O===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",m=i[f-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:w,optional:b}=p,k=m in l?l[m]:"";if(Mt(k)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const O=Mt(k)?k.join("/"):k;if(!O)if(b)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function m_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function y_(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=m_(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(yh(s))return 1;if(yh(r))return-1}return r.length-s.length}function yh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const v_={type:0,value:""},w_=/[a-zA-Z0-9_]/;function __(t){if(!t)return[[]];if(t==="/")return[[v_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:w_.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function E_(t,e,n){const s=g_(__(t.path),n),r=Ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function I_(t,e){const n=[],s=new Map;e=_h({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const p=!f,m=b_(u);m.aliasOf=f&&f.record;const w=_h(e,u),b=[m];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of B)b.push(Ee({},m,{components:f?f.record.components:m.components,path:W,aliasOf:f?f.record:m}))}let k,O;for(const B of b){const{path:W}=B;if(h&&W[0]!=="/"){const G=h.record.path,he=G[G.length-1]==="/"?"":"/";B.path=h.record.path+(W&&he+W)}if(k=E_(B,h,w),f?f.alias.push(k):(O=O||k,O!==k&&O.alias.push(k),p&&u.name&&!wh(k)&&o(u.name)),m.children){const G=m.children;for(let he=0;he<G.length;he++)i(G[he],k,f&&f.children[he])}f=f||k,c(k)}return O?()=>{o(O)}:Tr}function o(u){if(Xd(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&y_(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Zd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!wh(u)&&s.set(u.record.name,u)}function l(u,h){let f,p={},m,w;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw $s(1,{location:u});w=f.record.name,p=Ee(vh(h.params,f.keys.filter(O=>!O.optional).map(O=>O.name)),u.params&&vh(u.params,f.keys.map(O=>O.name))),m=f.stringify(p)}else if("path"in u)m=u.path,f=n.find(O=>O.re.test(m)),f&&(p=f.parse(m),w=f.record.name);else{if(f=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!f)throw $s(1,{location:u,currentLocation:h});w=f.record.name,p=Ee({},h.params,u.params),m=f.stringify(p)}const b=[];let k=f;for(;k;)b.unshift(k.record),k=k.parent;return{name:w,path:m,params:p,matched:b,meta:S_(b)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function vh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function b_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:T_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function T_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function wh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function S_(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function _h(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Zd(t,e){return e.children.some(n=>n===t||Zd(t,n))}const ep=/#/g,A_=/&/g,C_=/\//g,k_=/=/g,R_=/\?/g,tp=/\+/g,D_=/%5B/g,N_=/%5D/g,np=/%5E/g,O_=/%60/g,sp=/%7B/g,P_=/%7C/g,rp=/%7D/g,x_=/%20/g;function pl(t){return encodeURI(""+t).replace(P_,"|").replace(D_,"[").replace(N_,"]")}function M_(t){return pl(t).replace(sp,"{").replace(rp,"}").replace(np,"^")}function fc(t){return pl(t).replace(tp,"%2B").replace(x_,"+").replace(ep,"%23").replace(A_,"%26").replace(O_,"`").replace(sp,"{").replace(rp,"}").replace(np,"^")}function L_(t){return fc(t).replace(k_,"%3D")}function U_(t){return pl(t).replace(ep,"%23").replace(R_,"%3F")}function F_(t){return t==null?"":U_(t).replace(C_,"%2F")}function ao(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function V_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(tp," "),o=i.indexOf("="),a=ao(o<0?i:i.slice(0,o)),c=o<0?null:ao(i.slice(o+1));if(a in e){let l=e[a];Mt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Eh(t){let e="";for(let n in t){const s=t[n];if(n=L_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Mt(s)?s.map(i=>i&&fc(i)):[s&&fc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function B_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Mt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const j_=Symbol(""),Ih=Symbol(""),gl=Symbol(""),ip=Symbol(""),dc=Symbol("");function dr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function En(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a($s(4,{from:n,to:e})):h instanceof Error?a(h):f_(h)?a($s(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Da(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if($_(a)){const l=(a.__vccOpts||a)[e];l&&r.push(En(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Gw(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&En(f,n,s,i,o)()}))}}return r}function $_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bh(t){const e=xe(gl),n=xe(ip),s=st(()=>e.resolve(Ns(t.to))),r=st(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(js.bind(null,u));if(f>-1)return f;const p=Th(c[l-2]);return l>1&&Th(u)===p&&h[h.length-1].path!==p?h.findIndex(js.bind(null,c[l-2])):f}),i=st(()=>r.value>-1&&z_(n.params,s.value.params)),o=st(()=>r.value>-1&&r.value===n.matched.length-1&&Qd(n.params,s.value.params));function a(c={}){return q_(c)?e[Ns(t.replace)?"replace":"push"](Ns(t.to)).catch(Tr):Promise.resolve()}return{route:s,href:st(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const H_=Bo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bh,setup(t,{slots:e}){const n=Pt(bh(t)),{options:s}=xe(gl),r=st(()=>({[Sh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Sh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ye("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),K_=H_;function q_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function z_(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Mt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Th(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sh=(t,e,n)=>t!=null?t:e!=null?e:n,W_=Bo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=xe(dc),r=st(()=>t.route||s.value),i=xe(Ih,0),o=st(()=>{let l=Ns(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=st(()=>r.value.matched[o.value]);bt(Ih,st(()=>o.value+1)),bt(j_,a),bt(dc,r);const c=Se();return rs(()=>[c.value,a.value,t.name],([l,u,h],[f,p,m])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!js(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Ah(n.default,{Component:f,route:l});const p=h.props[u],m=p?p===!0?l.params:typeof p=="function"?p(l):p:null,b=Ye(f,Ee({},m,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Ah(n.default,{Component:b,route:l})||b}}});function Ah(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const G_=W_;function Q_(t){const e=I_(t.routes,t),n=t.parseQuery||V_,s=t.stringifyQuery||Eh,r=t.history,i=dr(),o=dr(),a=dr(),c=Gy(yn);let l=yn;Ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ka.bind(null,_=>""+_),h=ka.bind(null,F_),f=ka.bind(null,ao);function p(_,M){let N,F;return Xd(_)?(N=e.getRecordMatcher(_),F=M):F=_,e.addRoute(F,N)}function m(_){const M=e.getRecordMatcher(_);M&&e.removeRoute(M)}function w(){return e.getRoutes().map(_=>_.record)}function b(_){return!!e.getRecordMatcher(_)}function k(_,M){if(M=Ee({},M||c.value),typeof _=="string"){const J=Ra(n,_,M.path),d=e.resolve({path:J.path},M),g=r.createHref(J.fullPath);return Ee(J,d,{params:f(d.params),hash:ao(J.hash),redirectedFrom:void 0,href:g})}let N;if("path"in _)N=Ee({},_,{path:Ra(n,_.path,M.path).path});else{const J=Ee({},_.params);for(const d in J)J[d]==null&&delete J[d];N=Ee({},_,{params:h(_.params)}),M.params=h(M.params)}const F=e.resolve(N,M),ge=_.hash||"";F.params=u(f(F.params));const _e=Xw(s,Ee({},_,{hash:M_(ge),path:F.path})),se=r.createHref(_e);return Ee({fullPath:_e,hash:ge,query:s===Eh?B_(_.query):_.query||{}},F,{redirectedFrom:void 0,href:se})}function O(_){return typeof _=="string"?Ra(n,_,c.value.path):Ee({},_)}function B(_,M){if(l!==_)return $s(8,{from:M,to:_})}function W(_){return X(_)}function G(_){return W(Ee(O(_),{replace:!0}))}function he(_){const M=_.matched[_.matched.length-1];if(M&&M.redirect){const{redirect:N}=M;let F=typeof N=="function"?N(_):N;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=O(F):{path:F},F.params={}),Ee({query:_.query,hash:_.hash,params:"path"in F?{}:_.params},F)}}function X(_,M){const N=l=k(_),F=c.value,ge=_.state,_e=_.force,se=_.replace===!0,J=he(N);if(J)return X(Ee(O(J),{state:typeof J=="object"?Ee({},ge,J.state):ge,force:_e,replace:se}),M||N);const d=N;d.redirectedFrom=M;let g;return!_e&&Jw(s,F,N)&&(g=$s(16,{to:d,from:F}),Qt(F,F,!0,!1)),(g?Promise.resolve(g):Q(d,F)).catch(v=>Yt(v)?Yt(v,2)?v:et(v):Ie(v,d,F)).then(v=>{if(v){if(Yt(v,2))return X(Ee({replace:se},O(v.to),{state:typeof v.to=="object"?Ee({},ge,v.to.state):ge,force:_e}),M||d)}else v=oe(d,F,!0,se,ge);return ie(d,F,v),v})}function P(_,M){const N=B(_,M);return N?Promise.reject(N):Promise.resolve()}function Q(_,M){let N;const[F,ge,_e]=Y_(_,M);N=Da(F.reverse(),"beforeRouteLeave",_,M);for(const J of F)J.leaveGuards.forEach(d=>{N.push(En(d,_,M))});const se=P.bind(null,_,M);return N.push(se),Is(N).then(()=>{N=[];for(const J of i.list())N.push(En(J,_,M));return N.push(se),Is(N)}).then(()=>{N=Da(ge,"beforeRouteUpdate",_,M);for(const J of ge)J.updateGuards.forEach(d=>{N.push(En(d,_,M))});return N.push(se),Is(N)}).then(()=>{N=[];for(const J of _.matched)if(J.beforeEnter&&!M.matched.includes(J))if(Mt(J.beforeEnter))for(const d of J.beforeEnter)N.push(En(d,_,M));else N.push(En(J.beforeEnter,_,M));return N.push(se),Is(N)}).then(()=>(_.matched.forEach(J=>J.enterCallbacks={}),N=Da(_e,"beforeRouteEnter",_,M),N.push(se),Is(N))).then(()=>{N=[];for(const J of o.list())N.push(En(J,_,M));return N.push(se),Is(N)}).catch(J=>Yt(J,8)?J:Promise.reject(J))}function ie(_,M,N){for(const F of a.list())F(_,M,N)}function oe(_,M,N,F,ge){const _e=B(_,M);if(_e)return _e;const se=M===yn,J=Ss?history.state:{};N&&(F||se?r.replace(_.fullPath,Ee({scroll:se&&J&&J.scroll},ge)):r.push(_.fullPath,ge)),c.value=_,Qt(_,M,N,se),et()}let x;function de(){x||(x=r.listen((_,M,N)=>{if(!ft.listening)return;const F=k(_),ge=he(F);if(ge){X(Ee(ge,{replace:!0}),F).catch(Tr);return}l=F;const _e=c.value;Ss&&o_(dh(_e.fullPath,N.delta),Wo()),Q(F,_e).catch(se=>Yt(se,12)?se:Yt(se,2)?(X(se.to,F).then(J=>{Yt(J,20)&&!N.delta&&N.type===Br.pop&&r.go(-1,!1)}).catch(Tr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),Ie(se,F,_e))).then(se=>{se=se||oe(F,_e,!1),se&&(N.delta&&!Yt(se,8)?r.go(-N.delta,!1):N.type===Br.pop&&Yt(se,20)&&r.go(-1,!1)),ie(F,_e,se)}).catch(Tr)}))}let ye=dr(),ke=dr(),Ne;function Ie(_,M,N){et(_);const F=ke.list();return F.length?F.forEach(ge=>ge(_,M,N)):console.error(_),Promise.reject(_)}function ve(){return Ne&&c.value!==yn?Promise.resolve():new Promise((_,M)=>{ye.add([_,M])})}function et(_){return Ne||(Ne=!_,de(),ye.list().forEach(([M,N])=>_?N(_):M()),ye.reset()),_}function Qt(_,M,N,F){const{scrollBehavior:ge}=t;if(!Ss||!ge)return Promise.resolve();const _e=!N&&a_(dh(_.fullPath,0))||(F||!N)&&history.state&&history.state.scroll||null;return Fo().then(()=>ge(_,M,_e)).then(se=>se&&i_(se)).catch(se=>Ie(se,_,M))}const Et=_=>r.go(_);let mt;const He=new Set,ft={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,hasRoute:b,getRoutes:w,resolve:k,options:t,push:W,replace:G,go:Et,back:()=>Et(-1),forward:()=>Et(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ke.add,isReady:ve,install(_){const M=this;_.component("RouterLink",K_),_.component("RouterView",G_),_.config.globalProperties.$router=M,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Ns(c)}),Ss&&!mt&&c.value===yn&&(mt=!0,W(r.location).catch(ge=>{}));const N={};for(const ge in yn)N[ge]=st(()=>c.value[ge]);_.provide(gl,M),_.provide(ip,Pt(N)),_.provide(dc,c);const F=_.unmount;He.add(_),_.unmount=function(){He.delete(_),He.size<1&&(l=yn,x&&x(),x=null,c.value=yn,mt=!1,Ne=!1),F()}}};return ft}function Is(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Y_(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>js(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>js(l,c))||r.push(c))}return[n,s,r]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},X_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ap={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),s.push(n[u],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(op(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):X_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},J_=function(t){const e=op(t);return ap.encodeByteArray(e,!0)},co=function(t){return J_(t).replace(/\./g,"")},cp=function(t){try{return ap.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Z_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function eE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nE(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sE(){return typeof indexedDB=="object"}function rE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function iE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=()=>iE().__FIREBASE_DEFAULTS__,aE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cE=()=>{if(typeof document>"u")return;const t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/),e=t&&cp(t[1]);return e&&JSON.parse(e)},ml=()=>oE()||aE()||cE(),lp=t=>{var e,n;return(n=(e=ml())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lE=t=>{const e=lp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},uE=()=>{var t;return(t=ml())===null||t===void 0?void 0:t.config},up=t=>{var e;return(e=ml())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[co(JSON.stringify(n)),co(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="FirebaseError";class dn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=dE,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ri.prototype.create)}}class ri{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?pE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new dn(r,a,s)}}function pE(t,e){return t.replace(gE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const gE=/\{\$([^}]+)}/g;function mE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Ch(i)&&Ch(o)){if(!lo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ch(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function mr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function yr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yE(t,e){const n=new vE(t,e);return n.subscribe.bind(n)}class vE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");wE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Na),r.error===void 0&&(r.error=Na),r.complete===void 0&&(r.complete=Na);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Na(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return t&&t._delegate?t._delegate:t}class ls{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new hE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IE(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:EE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function EE(t){return t===zn?void 0:t}function IE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _E(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const TE={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},SE=me.INFO,AE={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},CE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=AE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yl{constructor(e){this.name=e,this._logLevel=SE,this._logHandler=CE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const kE=(t,e)=>e.some(n=>t instanceof n);let kh,Rh;function RE(){return kh||(kh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DE(){return Rh||(Rh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hp=new WeakMap,pc=new WeakMap,fp=new WeakMap,Oa=new WeakMap,vl=new WeakMap;function NE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Rn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hp.set(n,t)}).catch(()=>{}),vl.set(e,t),e}function OE(t){if(pc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});pc.set(t,e)}let gc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function PE(t){gc=t(gc)}function xE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Pa(this),e,...n);return fp.set(s,e.sort?e.sort():[e]),Rn(s)}:DE().includes(t)?function(...e){return t.apply(Pa(this),e),Rn(hp.get(this))}:function(...e){return Rn(t.apply(Pa(this),e))}}function ME(t){return typeof t=="function"?xE(t):(t instanceof IDBTransaction&&OE(t),kE(t,RE())?new Proxy(t,gc):t)}function Rn(t){if(t instanceof IDBRequest)return NE(t);if(Oa.has(t))return Oa.get(t);const e=ME(t);return e!==t&&(Oa.set(t,e),vl.set(e,t)),e}const Pa=t=>vl.get(t);function LE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Rn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Rn(o.result),c.oldVersion,c.newVersion,Rn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const UE=["get","getKey","getAll","getAllKeys","count"],FE=["put","add","delete","clear"],xa=new Map;function Dh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xa.get(e))return xa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=FE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||UE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return xa.set(e,i),i}PE(t=>({...t,get:(e,n,s)=>Dh(e,n)||t.get(e,n,s),has:(e,n)=>!!Dh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function BE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mc="@firebase/app",Nh="0.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new yl("@firebase/app"),jE="@firebase/app-compat",$E="@firebase/analytics-compat",HE="@firebase/analytics",KE="@firebase/app-check-compat",qE="@firebase/app-check",zE="@firebase/auth",WE="@firebase/auth-compat",GE="@firebase/database",QE="@firebase/database-compat",YE="@firebase/functions",XE="@firebase/functions-compat",JE="@firebase/installations",ZE="@firebase/installations-compat",e0="@firebase/messaging",t0="@firebase/messaging-compat",n0="@firebase/performance",s0="@firebase/performance-compat",r0="@firebase/remote-config",i0="@firebase/remote-config-compat",o0="@firebase/storage",a0="@firebase/storage-compat",c0="@firebase/firestore",l0="@firebase/firestore-compat",u0="firebase",h0="9.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc="[DEFAULT]",f0={[mc]:"fire-core",[jE]:"fire-core-compat",[HE]:"fire-analytics",[$E]:"fire-analytics-compat",[qE]:"fire-app-check",[KE]:"fire-app-check-compat",[zE]:"fire-auth",[WE]:"fire-auth-compat",[GE]:"fire-rtdb",[QE]:"fire-rtdb-compat",[YE]:"fire-fn",[XE]:"fire-fn-compat",[JE]:"fire-iid",[ZE]:"fire-iid-compat",[e0]:"fire-fcm",[t0]:"fire-fcm-compat",[n0]:"fire-perf",[s0]:"fire-perf-compat",[r0]:"fire-rc",[i0]:"fire-rc-compat",[o0]:"fire-gcs",[a0]:"fire-gcs-compat",[c0]:"fire-fst",[l0]:"fire-fst-compat","fire-js":"fire-js",[u0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new Map,vc=new Map;function d0(t,e){try{t.container.addComponent(e)}catch(n){us.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hs(t){const e=t.name;if(vc.has(e))return us.debug(`There were multiple attempts to register component ${e}.`),!1;vc.set(e,t);for(const n of uo.values())d0(n,t);return!0}function wl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dn=new ri("app","Firebase",p0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=h0;function dp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:yc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Dn.create("bad-app-name",{appName:String(r)});if(n||(n=uE()),!n)throw Dn.create("no-options");const i=uo.get(r);if(i){if(lo(n,i.options)&&lo(s,i.config))return i;throw Dn.create("duplicate-app",{appName:r})}const o=new bE(r);for(const c of vc.values())o.addComponent(c);const a=new g0(n,s,o);return uo.set(r,a),a}function pp(t=yc){const e=uo.get(t);if(!e&&t===yc)return dp();if(!e)throw Dn.create("no-app",{appName:t});return e}function Nn(t,e,n){var s;let r=(s=f0[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),us.warn(a.join(" "));return}Hs(new ls(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="firebase-heartbeat-database",y0=1,jr="firebase-heartbeat-store";let Ma=null;function gp(){return Ma||(Ma=LE(m0,y0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(jr)}}}).catch(t=>{throw Dn.create("idb-open",{originalErrorMessage:t.message})})),Ma}async function v0(t){var e;try{return(await gp()).transaction(jr).objectStore(jr).get(mp(t))}catch(n){if(n instanceof dn)us.warn(n.message);else{const s=Dn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});us.warn(s.message)}}}async function Oh(t,e){var n;try{const r=(await gp()).transaction(jr,"readwrite");return await r.objectStore(jr).put(e,mp(t)),r.done}catch(s){if(s instanceof dn)us.warn(s.message);else{const r=Dn.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});us.warn(r.message)}}}function mp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=1024,_0=30*24*60*60*1e3;class E0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new b0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ph();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=_0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ph(),{heartbeatsToSend:n,unsentEntries:s}=I0(this._heartbeatsCache.heartbeats),r=co(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ph(){return new Date().toISOString().substring(0,10)}function I0(t,e=w0){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),xh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),xh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class b0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sE()?rE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await v0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Oh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Oh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function xh(t){return co(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t){Hs(new ls("platform-logger",e=>new VE(e),"PRIVATE")),Hs(new ls("heartbeat",e=>new E0(e),"PRIVATE")),Nn(mc,Nh,t),Nn(mc,Nh,"esm2017"),Nn("fire-js","")}T0("");function _l(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function yp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const S0=yp,vp=new ri("auth","Firebase",yp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=new yl("@firebase/auth");function qi(t,...e){Mh.logLevel<=me.ERROR&&Mh.error(`Auth (${oi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,...e){throw El(t,...e)}function Ht(t,...e){return El(t,...e)}function A0(t,e,n){const s=Object.assign(Object.assign({},S0()),{[e]:n});return new ri("auth","Firebase",s).create(e,{appName:t.name})}function El(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return vp.create(t,...e)}function q(t,e,...n){if(!t)throw El(e,...n)}function en(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qi(e),new Error(e)}function an(t,e){t||en(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=new Map;function tn(t){an(t instanceof Function,"Expected a class definition");let e=Lh.get(t);return e?(an(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t,e){const n=wl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(lo(i,e!=null?e:{}))return r;Lt(r,"already-initialized")}return n.initialize({options:e})}function k0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function R0(){return Uh()==="http:"||Uh()==="https:"}function Uh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(R0()||eE()||"connection"in navigator)?navigator.onLine:!0}function N0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,an(n>e,"Short delay should be less than long delay!"),this.isMobile=Z_()||tE()}get(){return D0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t,e){an(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=new ai(3e4,6e4);function tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,s,r={}){return _p(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ii(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),wp.fetch()(Ep(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function _p(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},O0),e);try{const r=new x0(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Pi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Pi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Pi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw A0(t,u,l);Lt(t,u)}}catch(r){if(r instanceof dn)throw r;Lt(t,"network-request-failed")}}async function ci(t,e,n,s,r={}){const i=await nr(t,e,n,s,r);return"mfaPendingCredential"in i&&Lt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ep(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Il(t.config,r):`${t.config.apiScheme}://${r}`}class x0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ht(this.auth,"network-request-failed")),P0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ht(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M0(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function L0(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function U0(t,e=!1){const n=ct(t),s=await n.getIdToken(e),r=bl(s);q(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ar(La(r.auth_time)),issuedAtTime:Ar(La(r.iat)),expirationTime:Ar(La(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function La(t){return Number(t)*1e3}function bl(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return qi("JWT malformed, contained fewer than 3 sections"),null;try{const i=cp(s);return i?JSON.parse(i):(qi("Failed to decode base64 JWT payload"),null)}catch(i){return qi("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function F0(t){const e=bl(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof dn&&V0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function V0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ar(this.lastLoginAt),this.creationTime=Ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(t){var e;const n=t.auth,s=await t.getIdToken(),r=await $r(t,L0(n,{idToken:s}));q(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?H0(i.providerUserInfo):[],a=$0(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ip(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function j0(t){const e=ct(t);await ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $0(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function H0(t){return t.map(e=>{var{providerId:n}=e,s=_l(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K0(t,e){const n=await _p(t,{},async()=>{const s=ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Ep(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):F0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await K0(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Hr;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(q(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hr,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class os{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=_l(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new B0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ip(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $r(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return U0(this,e)}reload(){return j0(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new os(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ho(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $r(this,M0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:W,isAnonymous:G,providerData:he,stsTokenManager:X}=n;q(B&&X,e,"internal-error");const P=Hr.fromJSON(this.name,X);q(typeof B=="string",e,"internal-error"),vn(h,e.name),vn(f,e.name),q(typeof W=="boolean",e,"internal-error"),q(typeof G=="boolean",e,"internal-error"),vn(p,e.name),vn(m,e.name),vn(w,e.name),vn(b,e.name),vn(k,e.name),vn(O,e.name);const Q=new os({uid:B,auth:e,email:f,emailVerified:W,displayName:h,isAnonymous:G,photoURL:m,phoneNumber:p,tenantId:w,stsTokenManager:P,createdAt:k,lastLoginAt:O});return he&&Array.isArray(he)&&(Q.providerData=he.map(ie=>Object.assign({},ie))),b&&(Q._redirectEventId=b),Q}static async _fromIdTokenResponse(e,n,s=!1){const r=new Hr;r.updateFromServerResponse(n);const i=new os({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ho(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bp.type="NONE";const Fh=bp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t,e,n){return`firebase:${t}:${e}:${n}`}class Ps{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=zi(this.userKey,r.apiKey,i),this.fullPersistenceKey=zi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?os._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ps(tn(Fh),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||tn(Fh);const o=zi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=os._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ps(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ps(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ap(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kp(e))return"Blackberry";if(Rp(e))return"Webos";if(Tl(e))return"Safari";if((e.includes("chrome/")||Sp(e))&&!e.includes("edge/"))return"Chrome";if(Cp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Tp(t=at()){return/firefox\//i.test(t)}function Tl(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sp(t=at()){return/crios\//i.test(t)}function Ap(t=at()){return/iemobile/i.test(t)}function Cp(t=at()){return/android/i.test(t)}function kp(t=at()){return/blackberry/i.test(t)}function Rp(t=at()){return/webos/i.test(t)}function Go(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function q0(t=at()){var e;return Go(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function z0(){return nE()&&document.documentMode===10}function Dp(t=at()){return Go(t)||Cp(t)||Rp(t)||kp(t)||/windows phone/i.test(t)||Ap(t)}function W0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t,e=[]){let n;switch(t){case"Browser":n=Vh(at());break;case"Worker":n=`${Vh(at())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${oi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bh(this),this.idTokenSubscription=new Bh(this),this.beforeStateQueue=new G0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ps.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ho(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=N0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ct(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ri("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Ps.create(this,[tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Np(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function li(t){return ct(t)}class Bh{constructor(e){this.auth=e,this.observer=null,this.addObserver=yE(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Y0(t,e,n){const s=li(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Op(e),{host:o,port:a}=X0(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||J0()}function Op(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function X0(t){const e=Op(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:jh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:jh(o)}}}function jh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function J0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,n){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}async function Z0(t,e){return nr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(t,e){return ci(t,"POST","/v1/accounts:signInWithPassword",tr(t,e))}async function tI(t,e){return nr(t,"POST","/v1/accounts:sendOobCode",tr(t,e))}async function nI(t,e){return tI(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(t,e){return ci(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}async function rI(t,e){return ci(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends Sl{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Kr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Kr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return eI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sI(e,{email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Z0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rI(e,{idToken:n,email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(t,e){return ci(t,"POST","/v1/accounts:signInWithIdp",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="http://localhost";class hs extends Sl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=_l(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new hs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,xs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xs(e,n)}buildRequest(){const e={requestUri:iI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aI(t){const e=mr(yr(t)).link,n=e?mr(yr(e)).deep_link_id:null,s=mr(yr(t)).deep_link_id;return(s?mr(yr(s)).link:null)||s||n||e||t}class Al{constructor(e){var n,s,r,i,o,a;const c=mr(yr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=oI((r=c.mode)!==null&&r!==void 0?r:null);q(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=aI(e);try{return new Al(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.providerId=sr.PROVIDER_ID}static credential(e,n){return Kr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Al.parseLink(n);return q(s,"argument-error"),Kr._fromEmailAndCode(e,s.code,s.tenantId)}}sr.PROVIDER_ID="password";sr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";sr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Pp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends ui{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hs._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return bn.credential(n,s)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends ui{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends ui{constructor(){super("twitter.com")}static credential(e,n){return hs._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Sn.credential(n,s)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cI(t,e){return ci(t,"POST","/v1/accounts:signUp",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await os._fromIdTokenResponse(e,s,r),o=$h(s);return new fs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=$h(s);return new fs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function $h(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo extends dn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,fo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new fo(e,n,s,r)}}function xp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?fo._fromErrorAndOperation(t,i,e,s):i})}async function lI(t,e,n=!1){const s=await $r(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fs._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await $r(t,xp(r,i,e,t),n);q(o.idToken,r,"internal-error");const a=bl(o.idToken);q(a,r,"internal-error");const{sub:c}=a;return q(t.uid===c,r,"user-mismatch"),fs._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Lt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mp(t,e,n=!1){const s="signIn",r=await xp(t,s,e),i=await fs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function hI(t,e){return Mp(li(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(t,e,n){var s;q(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),q(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(q(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(q(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(t,e,n){const s=ct(t),r={requestType:"PASSWORD_RESET",email:e};n&&fI(s,r,n),await nI(s,r)}async function pI(t,e,n){const s=li(t),r=await cI(s,{returnSecureToken:!0,email:e,password:n}),i=await fs._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function gI(t,e,n){return hI(ct(t),sr.credential(e,n))}function mI(t,e,n,s){return ct(t).onIdTokenChanged(e,n,s)}function yI(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function Hh(t,e,n,s){return ct(t).onAuthStateChanged(e,n,s)}function vI(t){return ct(t).signOut()}async function wI(t){return ct(t).delete()}const po="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(po,"1"),this.storage.removeItem(po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(){const t=at();return Tl(t)||Go(t)}const EI=1e3,II=10;class Up extends Lp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_I()&&W0(),this.fallbackToPolling=Dp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);z0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,II):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},EI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Up.type="LOCAL";const bI=Up;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp extends Lp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fp.type="SESSION";const Vp=Fp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Qo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await TI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Cl("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}function AI(t){Kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function CI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RI(){return Bp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp="firebaseLocalStorageDb",DI=1,go="firebaseLocalStorage",$p="fbase_key";class hi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yo(t,e){return t.transaction([go],e?"readwrite":"readonly").objectStore(go)}function NI(){const t=indexedDB.deleteDatabase(jp);return new hi(t).toPromise()}function _c(){const t=indexedDB.open(jp,DI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(go,{keyPath:$p})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(go)?e(s):(s.close(),await NI(),e(await _c()))})})}async function Kh(t,e,n){const s=Yo(t,!0).put({[$p]:e,value:n});return new hi(s).toPromise()}async function OI(t,e){const n=Yo(t,!1).get(e),s=await new hi(n).toPromise();return s===void 0?null:s.value}function qh(t,e){const n=Yo(t,!0).delete(e);return new hi(n).toPromise()}const PI=800,xI=3;class Hp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _c(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>xI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qo._getInstance(RI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CI(),!this.activeServiceWorker)return;this.sender=new SI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _c();return await Kh(e,po,"1"),await qh(e,po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Kh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>OI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Yo(r,!1).getAll();return new hi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hp.type="LOCAL";const MI=Hp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function UI(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ht("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",LI().appendChild(s)})}function FI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ai(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(t,e){return e?tn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends Sl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BI(t){return Mp(t.auth,new kl(t),t.bypassAuthState)}function jI(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),uI(n,new kl(t),t.bypassAuthState)}async function $I(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),lI(n,new kl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BI;case"linkViaPopup":case"linkViaRedirect":return $I;case"reauthViaPopup":case"reauthViaRedirect":return jI;default:Lt(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=new ai(2e3,1e4);class As extends Kp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,As.currentPopupAction&&As.currentPopupAction.cancel(),As.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=Cl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,As.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,HI.get())};e()}}As.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="pendingRedirect",Wi=new Map;class qI extends Kp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Wi.get(this.auth._key());if(!e){try{const s=await zI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Wi.set(this.auth._key(),e)}return this.bypassAuthState||Wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zI(t,e){const n=QI(e),s=GI(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function WI(t,e){Wi.set(t._key(),e)}function GI(t){return tn(t._redirectPersistence)}function QI(t){return zi(KI,t.config.apiKey,t.name)}async function YI(t,e,n=!1){const s=li(t),r=VI(s,e),o=await new qI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=10*60*1e3;class JI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!qp(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XI&&this.cachedEventUids.clear(),this.cachedEventUids.has(zh(e))}saveEventToCache(e){this.cachedEventUids.add(zh(e)),this.lastProcessedEventTime=Date.now()}}function zh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nb=/^https?/;async function sb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eb(t);for(const n of e)try{if(rb(n))return}catch{}Lt(t,"unauthorized-domain")}function rb(t){const e=wc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!nb.test(n))return!1;if(tb.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib=new ai(3e4,6e4);function Wh(){const t=Kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ob(t){return new Promise((e,n)=>{var s,r,i;function o(){Wh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wh(),n(Ht(t,"network-request-failed"))},timeout:ib.get()})}if(!((r=(s=Kt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Kt().gapi)===null||i===void 0)&&i.load)o();else{const a=FI("iframefcb");return Kt()[a]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},UI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Gi=null,e})}let Gi=null;function ab(t){return Gi=Gi||ob(t),Gi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=new ai(5e3,15e3),lb="__/auth/iframe",ub="emulator/auth/iframe",hb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function db(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Il(e,ub):`https://${t.config.authDomain}/${lb}`,s={apiKey:e.apiKey,appName:t.name,v:oi},r=fb.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ii(s).slice(1)}`}async function pb(t){const e=await ab(t),n=Kt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:db(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hb,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),a=Kt().setTimeout(()=>{i(o)},cb.get());function c(){Kt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mb=500,yb=600,vb="_blank",wb="http://localhost";class Gh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _b(t,e,n,s=mb,r=yb){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},gb),{width:s.toString(),height:r.toString(),top:i,left:o}),l=at().toLowerCase();n&&(a=Sp(l)?vb:n),Tp(l)&&(e=e||wb,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(q0(l)&&a!=="_self")return Eb(e||"",a),new Gh(null);const h=window.open(e||"",a,u);q(h,t,"popup-blocked");try{h.focus()}catch{}return new Gh(h)}function Eb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="__/auth/handler",bb="emulator/auth/handler";function Qh(t,e,n,s,r,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:oi,eventId:r};if(e instanceof Pp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ui){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Tb(t)}?${ii(a).slice(1)}`}function Tb({config:t}){return t.emulator?Il(t,bb):`https://${t.authDomain}/${Ib}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="webStorageSupport";class Sb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vp,this._completeRedirectFn=YI,this._overrideRedirectResult=WI}async _openPopup(e,n,s,r){var i;an((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Qh(e,n,s,wc(),r);return _b(e,o,Cl())}async _openRedirect(e,n,s,r){return await this._originValidation(e),AI(Qh(e,n,s,wc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(an(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await pb(e),s=new JI(e);return n.register("authEvent",r=>(q(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ua,{type:Ua},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ua];o!==void 0&&n(!!o),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dp()||Tl()||Go()}}const Ab=Sb;var Yh="@firebase/auth",Xh="0.20.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Rb(t){Hs(new ls("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{q(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Np(t)},u=new Q0(a,c,l);return k0(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Hs(new ls("auth-internal",e=>{const n=li(e.getProvider("auth").getImmediate());return(s=>new Cb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(Yh,Xh,kb(t)),Nn(Yh,Xh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=5*60,Nb=up("authIdTokenMaxAge")||Db;let Jh=null;const Ob=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Nb)return;const r=n==null?void 0:n.token;Jh!==r&&(Jh=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ec(t=pp()){const e=wl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=C0(t,{popupRedirectResolver:Ab,persistence:[MI,bI,Vp]}),s=up("authTokenSyncURL");if(s){const i=Ob(s);yI(n,i,()=>i(n.currentUser)),mI(n,o=>i(o))}const r=lp("auth");return r&&Y0(n,`http://${r}`),n}Rb("Browser");var Pb="firebase",xb="9.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn(Pb,xb,"app");var Mb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,Rl=Rl||{},Z=Mb||self;function mo(){}function Xo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Lb(t){return Object.prototype.hasOwnProperty.call(t,Fa)&&t[Fa]||(t[Fa]=++Ub)}var Fa="closure_uid_"+(1e9*Math.random()>>>0),Ub=0;function Fb(t,e,n){return t.call.apply(t.bind,arguments)}function Vb(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function it(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?it=Fb:it=Vb,it.apply(null,arguments)}function xi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Vn(){this.s=this.s,this.o=this.o}var Bb=0;Vn.prototype.s=!1;Vn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Bb!=0)&&Lb(this)};Vn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Dl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Zh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Xo(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var jb=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",mo,e),Z.removeEventListener("test",mo,e)}catch{}return t}();function yo(t){return/^[\s\xa0]*$/.test(t)}var ef=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Va(t,e){return t<e?-1:t>e?1:0}function Jo(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function $t(t){return Jo().indexOf(t)!=-1}function Nl(t){return Nl[" "](t),t}Nl[" "]=mo;function $b(t){var e=qb;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Hb=$t("Opera"),Ks=$t("Trident")||$t("MSIE"),Wp=$t("Edge"),Ic=Wp||Ks,Gp=$t("Gecko")&&!(Jo().toLowerCase().indexOf("webkit")!=-1&&!$t("Edge"))&&!($t("Trident")||$t("MSIE"))&&!$t("Edge"),Kb=Jo().toLowerCase().indexOf("webkit")!=-1&&!$t("Edge");function Qp(){var t=Z.document;return t?t.documentMode:void 0}var vo;e:{var Ba="",ja=function(){var t=Jo();if(Gp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Wp)return/Edge\/([\d\.]+)/.exec(t);if(Ks)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Kb)return/WebKit\/(\S+)/.exec(t);if(Hb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ja&&(Ba=ja?ja[1]:""),Ks){var $a=Qp();if($a!=null&&$a>parseFloat(Ba)){vo=String($a);break e}}vo=Ba}var qb={};function zb(){return $b(function(){let t=0;const e=ef(String(vo)).split("."),n=ef("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Va(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Va(r[2].length==0,i[2].length==0)||Va(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var bc;if(Z.document&&Ks){var tf=Qp();bc=tf||parseInt(vo,10)||void 0}else bc=void 0;var Wb=bc;function qr(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Gp){e:{try{Nl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Gb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&qr.X.h.call(this)}}Ze(qr,ot);var Gb={2:"touch",3:"pen",4:"mouse"};qr.prototype.h=function(){qr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var di="closure_listenable_"+(1e6*Math.random()|0),Qb=0;function Yb(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Qb,this.ba=this.ea=!1}function Zo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ol(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Yp(t){const e={};for(const n in t)e[n]=t[n];return e}const nf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<nf.length;i++)n=nf[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ea(t){this.src=t,this.g={},this.h=0}ea.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Sc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Yb(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Tc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=zp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Zo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Sc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Pl="closure_lm_"+(1e6*Math.random()|0),Ha={};function Jp(t,e,n,s,r){if(s&&s.once)return eg(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Jp(t,e[i],n,s,r);return null}return n=Ll(n),t&&t[di]?t.N(e,n,fi(s)?!!s.capture:!!s,r):Zp(t,e,n,!1,s,r)}function Zp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=fi(r)?!!r.capture:!!r,a=Ml(t);if(a||(t[Pl]=a=new ea(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Xb(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)jb||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(ng(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Xb(){function t(n){return e.call(t.src,t.listener,n)}const e=Jb;return t}function eg(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)eg(t,e[i],n,s,r);return null}return n=Ll(n),t&&t[di]?t.O(e,n,fi(s)?!!s.capture:!!s,r):Zp(t,e,n,!0,s,r)}function tg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)tg(t,e[i],n,s,r);else s=fi(s)?!!s.capture:!!s,n=Ll(n),t&&t[di]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Sc(i,n,s,r),-1<n&&(Zo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ml(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Sc(e,n,s,r)),(n=-1<t?e[t]:null)&&xl(n))}function xl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[di])Tc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ng(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ml(e))?(Tc(n,t),n.h==0&&(n.src=null,e[Pl]=null)):Zo(t)}}}function ng(t){return t in Ha?Ha[t]:Ha[t]="on"+t}function Jb(t,e){if(t.ba)t=!0;else{e=new qr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&xl(t),t=n.call(s,e)}return t}function Ml(t){return t=t[Pl],t instanceof ea?t:null}var Ka="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ll(t){return typeof t=="function"?t:(t[Ka]||(t[Ka]=function(e){return t.handleEvent(e)}),t[Ka])}function We(){Vn.call(this),this.i=new ea(this),this.P=this,this.I=null}Ze(We,Vn);We.prototype[di]=!0;We.prototype.removeEventListener=function(t,e,n,s){tg(this,t,e,n,s)};function Xe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var r=e;e=new ot(s,t),Xp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Mi(o,s,!0,e)&&r}if(o=e.g=t,r=Mi(o,s,!0,e)&&r,r=Mi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Mi(o,s,!1,e)&&r}We.prototype.M=function(){if(We.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Zo(n[s]);delete t.g[e],t.h--}}this.I=null};We.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};We.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Mi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Tc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Ul=Z.JSON.stringify;function Zb(){var t=ig;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class eT{constructor(){this.h=this.g=null}add(e,n){const s=sg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var sg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new tT,t=>t.reset());class tT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function nT(t){Z.setTimeout(()=>{throw t},0)}function rg(t,e){Ac||sT(),Cc||(Ac(),Cc=!0),ig.add(t,e)}var Ac;function sT(){var t=Z.Promise.resolve(void 0);Ac=function(){t.then(rT)}}var Cc=!1,ig=new eT;function rT(){for(var t;t=Zb();){try{t.h.call(t.g)}catch(n){nT(n)}var e=sg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Cc=!1}function ta(t,e){We.call(this),this.h=t||1,this.g=e||Z,this.j=it(this.lb,this),this.l=Date.now()}Ze(ta,We);U=ta.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Xe(this,"tick"),this.ca&&(Fl(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Fl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){ta.X.M.call(this),Fl(this),delete this.g};function Vl(t,e,n){if(typeof t=="function")n&&(t=it(t,n));else if(t&&typeof t.handleEvent=="function")t=it(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function og(t){t.g=Vl(()=>{t.g=null,t.i&&(t.i=!1,og(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class iT extends Vn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:og(this)}M(){super.M(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zr(t){Vn.call(this),this.h=t,this.g={}}Ze(zr,Vn);var sf=[];function ag(t,e,n,s){Array.isArray(n)||(n&&(sf[0]=n.toString()),n=sf);for(var r=0;r<n.length;r++){var i=Jp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function cg(t){Ol(t.g,function(e,n){this.g.hasOwnProperty(n)&&xl(e)},t),t.g={}}zr.prototype.M=function(){zr.X.M.call(this),cg(this)};zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function na(){this.g=!0}na.prototype.Aa=function(){this.g=!1};function oT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function aT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Cs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+lT(t,n)+(s?" "+s:"")})}function cT(t,e){t.info(function(){return"TIMEOUT: "+e})}na.prototype.info=function(){};function lT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Ul(n)}catch{return e}}var gs={},rf=null;function sa(){return rf=rf||new We}gs.Pa="serverreachability";function lg(t){ot.call(this,gs.Pa,t)}Ze(lg,ot);function Wr(t){const e=sa();Xe(e,new lg(e))}gs.STAT_EVENT="statevent";function ug(t,e){ot.call(this,gs.STAT_EVENT,t),this.stat=e}Ze(ug,ot);function ht(t){const e=sa();Xe(e,new ug(e,t))}gs.Qa="timingevent";function hg(t,e){ot.call(this,gs.Qa,t),this.size=e}Ze(hg,ot);function pi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var ra={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},fg={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Bl(){}Bl.prototype.h=null;function of(t){return t.h||(t.h=t.i())}function dg(){}var gi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function jl(){ot.call(this,"d")}Ze(jl,ot);function $l(){ot.call(this,"c")}Ze($l,ot);var kc;function ia(){}Ze(ia,Bl);ia.prototype.g=function(){return new XMLHttpRequest};ia.prototype.i=function(){return{}};kc=new ia;function mi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new zr(this),this.O=uT,t=Ic?125:void 0,this.T=new ta(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new pg}function pg(){this.i=null,this.g="",this.h=!1}var uT=45e3,Rc={},wo={};U=mi.prototype;U.setTimeout=function(t){this.O=t};function Dc(t,e,n){t.K=1,t.v=aa(cn(e)),t.s=n,t.P=!0,gg(t,null)}function gg(t,e){t.F=Date.now(),yi(t),t.A=cn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),bg(n.i,"t",s),t.C=0,n=t.l.H,t.h=new pg,t.g=Kg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new iT(it(t.La,t,t.g),t.N)),ag(t.S,t.g,"readystatechange",t.ib),e=t.H?Yp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Wr(),oT(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&nn(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const u=nn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Ic||this.g&&(this.h.h||this.g.fa()||uf(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Wr(3):Wr(2)),oa(this);var n=this.g.aa();this.Y=n;t:if(mg(this)){var s=uf(this.g);t="";var r=s.length,i=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){es(this),Cr(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,aT(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yo(a)){var l=a;break t}}l=null}if(n=l)Cs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Nc(this,n);else{this.i=!1,this.o=3,ht(12),es(this),Cr(this);break e}}this.P?(yg(this,u,o),Ic&&this.i&&u==3&&(ag(this.S,this.T,"tick",this.hb),this.T.start())):(Cs(this.j,this.m,o,null),Nc(this,o)),u==4&&es(this),this.i&&!this.I&&(u==4?Bg(this.l,this):(this.i=!1,yi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ht(12)):(this.o=0,ht(13)),es(this),Cr(this)}}}catch{}finally{}};function mg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function yg(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=hT(t,n),r==wo){e==4&&(t.o=4,ht(14),s=!1),Cs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Rc){t.o=4,ht(15),Cs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Cs(t.j,t.m,r,null),Nc(t,r);mg(t)&&r!=wo&&r!=Rc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ht(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ql(e),e.K=!0,ht(11))):(Cs(t.j,t.m,n,"[Invalid Chunked Response]"),es(t),Cr(t))}U.hb=function(){if(this.g){var t=nn(this.g),e=this.g.fa();this.C<e.length&&(oa(this),yg(this,t,e),this.i&&t!=4&&yi(this))}};function hT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?wo:(n=Number(e.substring(n,s)),isNaN(n)?Rc:(s+=1,s+n>e.length?wo:(e=e.substr(s,n),t.C=s+n,e)))}U.cancel=function(){this.I=!0,es(this)};function yi(t){t.V=Date.now()+t.O,vg(t,t.O)}function vg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=pi(it(t.gb,t),e)}function oa(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(cT(this.j,this.A),this.K!=2&&(Wr(),ht(17)),es(this),this.o=2,Cr(this)):vg(this,this.V-t)};function Cr(t){t.l.G==0||t.I||Bg(t.l,t)}function es(t){oa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Fl(t.T),cg(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Nc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Oc(n.h,t))){if(!t.J&&Oc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Io(n),ua(n);else break e;Gl(n),ht(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=pi(it(n.cb,n),6e3));if(1>=Ag(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ts(n,11)}else if((t.J||n.g==t)&&Io(n),!yo(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Hl(i,i.h),i.h=null))}if(s.D){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,Oe(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Hg(s,s.H?s.ka:null,s.V),o.J){Cg(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(oa(a),yi(a)),s.g=o}else Fg(s);0<n.i.length&&ha(n)}else l[0]!="stop"&&l[0]!="close"||ts(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ts(n,7):Wl(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Wr(4)}catch{}}function fT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Xo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function dT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Xo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function wg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=dT(t),s=fT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var _g=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function as(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof as){this.h=e!==void 0?e:t.h,_o(this,t.j),this.s=t.s,this.g=t.g,Eo(this,t.m),this.l=t.l,e=t.i;var n=new Gr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),af(this,n),this.o=t.o}else t&&(n=String(t).match(_g))?(this.h=!!e,_o(this,n[1]||"",!0),this.s=vr(n[2]||""),this.g=vr(n[3]||"",!0),Eo(this,n[4]),this.l=vr(n[5]||"",!0),af(this,n[6]||"",!0),this.o=vr(n[7]||"")):(this.h=!!e,this.i=new Gr(null,this.h))}as.prototype.toString=function(){var t=[],e=this.j;e&&t.push(wr(e,cf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(wr(e,cf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(wr(n,n.charAt(0)=="/"?yT:mT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",wr(n,wT)),t.join("")};function cn(t){return new as(t)}function _o(t,e,n){t.j=n?vr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Eo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function af(t,e,n){e instanceof Gr?(t.i=e,_T(t.i,t.h)):(n||(e=wr(e,vT)),t.i=new Gr(e,t.h))}function Oe(t,e,n){t.i.set(e,n)}function aa(t){return Oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function vr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function wr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,gT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function gT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var cf=/[#\/\?@]/g,mT=/[#\?:]/g,yT=/[#\?]/g,vT=/[#\?@]/g,wT=/#/g;function Gr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Bn(t){t.g||(t.g=new Map,t.h=0,t.i&&pT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Gr.prototype;U.add=function(t,e){Bn(this),this.i=null,t=rr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Eg(t,e){Bn(t),e=rr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ig(t,e){return Bn(t),e=rr(t,e),t.g.has(e)}U.forEach=function(t,e){Bn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};U.oa=function(){Bn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};U.W=function(t){Bn(this);let e=[];if(typeof t=="string")Ig(this,t)&&(e=e.concat(this.g.get(rr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Bn(this),this.i=null,t=rr(this,t),Ig(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function bg(t,e,n){Eg(t,e),0<n.length&&(t.i=null,t.g.set(rr(t,e),Dl(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function rr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _T(t,e){e&&!t.j&&(Bn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Eg(this,s),bg(this,r,n))},t)),t.j=e}var ET=class{constructor(t,e){this.h=t,this.g=e}};function Tg(t){this.l=t||IT,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ga&&Z.g.Ga()&&Z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var IT=10;function Sg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ag(t){return t.h?1:t.g?t.g.size:0}function Oc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Hl(t,e){t.g?t.g.add(e):t.h=e}function Cg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Tg.prototype.cancel=function(){if(this.i=kg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function kg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Dl(t.i)}function Kl(){}Kl.prototype.stringify=function(t){return Z.JSON.stringify(t,void 0)};Kl.prototype.parse=function(t){return Z.JSON.parse(t,void 0)};function bT(){this.g=new Kl}function TT(t,e,n){const s=n||"";try{wg(t,function(r,i){let o=r;fi(r)&&(o=Ul(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function ST(t,e){const n=new na;if(Z.Image){const s=new Image;s.onload=xi(Li,n,s,"TestLoadImage: loaded",!0,e),s.onerror=xi(Li,n,s,"TestLoadImage: error",!1,e),s.onabort=xi(Li,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=xi(Li,n,s,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Li(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function vi(t){this.l=t.ac||null,this.j=t.jb||!1}Ze(vi,Bl);vi.prototype.g=function(){return new ca(this.l,this.j)};vi.prototype.i=function(t){return function(){return t}}({});function ca(t,e){We.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ql,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(ca,We);var ql=0;U=ca.prototype;U.open=function(t,e){if(this.readyState!=ql)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qr(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wi(this)),this.readyState=ql};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qr(this)),this.g&&(this.readyState=3,Qr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Rg(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Rg(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?wi(this):Qr(this),this.readyState==3&&Rg(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,wi(this))};U.Ua=function(t){this.g&&(this.response=t,wi(this))};U.ga=function(){this.g&&wi(this)};function wi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qr(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Qr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var AT=Z.JSON.parse;function Me(t){We.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dg,this.K=this.L=!1}Ze(Me,We);var Dg="",CT=/^https?$/i,kT=["POST","PUT"];U=Me.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():kc.g(),this.C=this.u?of(this.u):of(kc),this.g.onreadystatechange=it(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){lf(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Z.FormData&&t instanceof Z.FormData,!(0<=zp(kT,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Pg(this),0<this.B&&((this.K=RT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=it(this.qa,this)):this.A=Vl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){lf(this,i)}};function RT(t){return Ks&&zb()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof Rl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Xe(this,"timeout"),this.abort(8))};function lf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ng(t),la(t)}function Ng(t){t.D||(t.D=!0,Xe(t,"complete"),Xe(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Xe(this,"complete"),Xe(this,"abort"),la(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),la(this,!0)),Me.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?Og(this):this.fb())};U.fb=function(){Og(this)};function Og(t){if(t.h&&typeof Rl<"u"&&(!t.C[1]||nn(t)!=4||t.aa()!=2)){if(t.v&&nn(t)==4)Vl(t.Ha,0,t);else if(Xe(t,"readystatechange"),nn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(_g)[1]||null;if(!r&&Z.self&&Z.self.location){var i=Z.self.location.protocol;r=i.substr(0,i.length-1)}s=!CT.test(r?r.toLowerCase():"")}n=s}if(n)Xe(t,"complete"),Xe(t,"success");else{t.m=6;try{var o=2<nn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Ng(t)}}finally{la(t)}}}}function la(t,e){if(t.g){Pg(t);const n=t.g,s=t.C[0]?mo:null;t.g=null,t.C=null,e||Xe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Pg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}function nn(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),AT(e)}};function uf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Dg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function xg(t){let e="";return Ol(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function zl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=xg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Oe(t,e,n))}function pr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Mg(t){this.Ca=0,this.i=[],this.j=new na,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=pr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=pr("baseRetryDelayMs",5e3,t),this.bb=pr("retryDelaySeedMs",1e4,t),this.$a=pr("forwardChannelMaxRetries",2,t),this.ta=pr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Tg(t&&t.concurrentRequestLimit),this.Fa=new bT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=Mg.prototype;U.ma=8;U.G=1;function Wl(t){if(Lg(t),t.G==3){var e=t.U++,n=cn(t.F);Oe(n,"SID",t.I),Oe(n,"RID",e),Oe(n,"TYPE","terminate"),_i(t,n),e=new mi(t,t.j,e,void 0),e.K=2,e.v=aa(cn(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon&&(n=Z.navigator.sendBeacon(e.v.toString(),"")),!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=Kg(e.l,null),e.g.da(e.v)),e.F=Date.now(),yi(e)}$g(t)}function ua(t){t.g&&(Ql(t),t.g.cancel(),t.g=null)}function Lg(t){ua(t),t.u&&(Z.clearTimeout(t.u),t.u=null),Io(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function ha(t){Sg(t.h)||t.m||(t.m=!0,rg(t.Ja,t),t.C=0)}function DT(t,e){return Ag(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=pi(it(t.Ja,t,e),jg(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new mi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Yp(i),Xp(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ug(this,r,e),n=cn(this.F),Oe(n,"RID",t),Oe(n,"CVER",22),this.D&&Oe(n,"X-HTTP-Session-Id",this.D),_i(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(xg(i)))+"&"+e:this.o&&zl(n,this.o,i)),Hl(this.h,r),this.Ya&&Oe(n,"TYPE","init"),this.O?(Oe(n,"$req",e),Oe(n,"SID","null"),r.Z=!0,Dc(r,n,null)):Dc(r,n,e),this.G=2}}else this.G==3&&(t?hf(this,t):this.i.length==0||Sg(this.h)||hf(this))};function hf(t,e){var n;e?n=e.m:n=t.U++;const s=cn(t.F);Oe(s,"SID",t.I),Oe(s,"RID",n),Oe(s,"AID",t.T),_i(t,s),t.o&&t.s&&zl(s,t.o,t.s),n=new mi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ug(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Hl(t.h,n),Dc(n,s,e)}function _i(t,e){t.ia&&Ol(t.ia,function(n,s){Oe(e,s,n)}),t.l&&wg({},function(n,s){Oe(e,s,n)})}function Ug(t,e,n){n=Math.min(t.i.length,n);var s=t.l?it(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{TT(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Fg(t){t.g||t.u||(t.Z=1,rg(t.Ia,t),t.A=0)}function Gl(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=pi(it(t.Ia,t),jg(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,Vg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=pi(it(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ht(10),ua(this),Vg(this))};function Ql(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function Vg(t){t.g=new mi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=cn(t.sa);Oe(e,"RID","rpc"),Oe(e,"SID",t.I),Oe(e,"CI",t.L?"0":"1"),Oe(e,"AID",t.T),Oe(e,"TYPE","xmlhttp"),_i(t,e),t.o&&t.s&&zl(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=aa(cn(e)),n.s=null,n.P=!0,gg(n,t)}U.cb=function(){this.v!=null&&(this.v=null,ua(this),Gl(this),ht(19))};function Io(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function Bg(t,e){var n=null;if(t.g==e){Io(t),Ql(t),t.g=null;var s=2}else if(Oc(t.h,e))n=e.D,Cg(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=sa(),Xe(s,new hg(s,n)),ha(t)}else Fg(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&DT(t,e)||s==2&&Gl(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:ts(t,5);break;case 4:ts(t,10);break;case 3:ts(t,6);break;default:ts(t,2)}}}function jg(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ts(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=it(t.kb,t);n||(n=new as("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||_o(n,"https"),aa(n)),ST(n.toString(),s)}else ht(2);t.G=0,t.l&&t.l.va(e),$g(t),Lg(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function $g(t){if(t.G=0,t.la=[],t.l){const e=kg(t.h);(e.length!=0||t.i.length!=0)&&(Zh(t.la,e),Zh(t.la,t.i),t.h.i.length=0,Dl(t.i),t.i.length=0),t.l.ua()}}function Hg(t,e,n){var s=n instanceof as?cn(n):new as(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Eo(s,s.m);else{var r=Z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new as(null,void 0);s&&_o(i,s),e&&(i.g=e),r&&Eo(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Oe(s,n,e),Oe(s,"VER",t.ma),_i(t,s),s}function Kg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Me(new vi({jb:!0})):new Me(t.ra),e.Ka(t.H),e}function qg(){}U=qg.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function bo(){if(Ks&&!(10<=Number(Wb)))throw Error("Environmental error: no available transport.")}bo.prototype.g=function(t,e){return new _t(t,e)};function _t(t,e){We.call(this),this.g=new Mg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!yo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!yo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ir(this)}Ze(_t,We);_t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ht(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Hg(t,null,t.V),ha(t)};_t.prototype.close=function(){Wl(this.g)};_t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ul(t),t=n);e.i.push(new ET(e.ab++,t)),e.G==3&&ha(e)};_t.prototype.M=function(){this.g.l=null,delete this.j,Wl(this.g),delete this.g,_t.X.M.call(this)};function zg(t){jl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(zg,jl);function Wg(){$l.call(this),this.status=1}Ze(Wg,$l);function ir(t){this.g=t}Ze(ir,qg);ir.prototype.xa=function(){Xe(this.g,"a")};ir.prototype.wa=function(t){Xe(this.g,new zg(t))};ir.prototype.va=function(t){Xe(this.g,new Wg)};ir.prototype.ua=function(){Xe(this.g,"b")};bo.prototype.createWebChannel=bo.prototype.g;_t.prototype.send=_t.prototype.u;_t.prototype.open=_t.prototype.m;_t.prototype.close=_t.prototype.close;ra.NO_ERROR=0;ra.TIMEOUT=8;ra.HTTP_ERROR=6;fg.COMPLETE="complete";dg.EventType=gi;gi.OPEN="a";gi.CLOSE="b";gi.ERROR="c";gi.MESSAGE="d";We.prototype.listen=We.prototype.N;Me.prototype.listenOnce=Me.prototype.O;Me.prototype.getLastError=Me.prototype.Oa;Me.prototype.getLastErrorCode=Me.prototype.Ea;Me.prototype.getStatus=Me.prototype.aa;Me.prototype.getResponseJson=Me.prototype.Sa;Me.prototype.getResponseText=Me.prototype.fa;Me.prototype.send=Me.prototype.da;Me.prototype.setWithCredentials=Me.prototype.Ka;var NT=function(){return new bo},OT=function(){return sa()},qa=ra,PT=fg,xT=gs,ff={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},MT=vi,Ui=dg,LT=Me;const df="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let or="9.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new yl("@firebase/firestore");function pf(){return ds.logLevel}function V(t,...e){if(ds.logLevel<=me.DEBUG){const n=e.map(Yl);ds.debug(`Firestore (${or}): ${t}`,...n)}}function ln(t,...e){if(ds.logLevel<=me.ERROR){const n=e.map(Yl);ds.error(`Firestore (${or}): ${t}`,...n)}}function Pc(t,...e){if(ds.logLevel<=me.WARN){const n=e.map(Yl);ds.warn(`Firestore (${or}): ${t}`,...n)}}function Yl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t="Unexpected state"){const e=`FIRESTORE (${or}) INTERNAL ASSERTION FAILED: `+t;throw ln(e),new Error(e)}function Re(t,e){t||te()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class FT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VT{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Re(typeof s.accessToken=="string"),new Gg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new tt(e)}}class BT{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Re(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class jT{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new BT(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $T{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HT{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.A=n.token,new $T(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=KT(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function we(t,e){return t<e?-1:t>e?1:0}function qs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Be(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Be(0,0))}static max(){return new ae(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,s){n===void 0?n=0:n>e.length&&te(),s===void 0?s=e.length-n:s>e.length-n&&te(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Yr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends Yr{construct(e,n,s){return new Pe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new H(A.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const qT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends Yr{construct(e,n,s){return new rt(e,n,s)}static isValidIdentifier(e){return qT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new H(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new H(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new H(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Pe.fromString(e))}static fromName(e){return new K(Pe.fromString(e).popFirst(5))}static empty(){return new K(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Pe(e.slice()))}}function zT(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ae.fromTimestamp(s===1e9?new Be(n+1,0):new Be(n,s));return new Mn(r,K.empty(),e)}function WT(t){return new Mn(t.readTime,t.key,-1)}class Mn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Mn(ae.min(),K.empty(),-1)}static max(){return new Mn(ae.max(),K.empty(),-1)}}function GT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==QT)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,s)=>{n(e)})}static reject(e){return new C((n,s)=>{s(e)})}static waitFor(e){return new C((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=C.resolve(!1);for(const s of e)n=n.next(r=>r?C.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new C((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new C((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ii(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Yg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xl.at=-1;class $e{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fi(this.root,e,this.comparator,!0)}}class Fi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Ge.RED,this.left=r!=null?r:Ge.EMPTY,this.right=i!=null?i:Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ge(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ge(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mf(this.data.getIterator())}getIteratorFrom(e){return new mf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class mf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new qt([])}unionWith(e){let n=new je(rt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const XT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ln(t){if(Re(!!t),typeof t=="string"){let e=0;const n=XT.exec(t);if(Re(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zs(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Jg(t){const e=t.mapValue.fields.__previous_value__;return Xg(e)?Jg(e):e}function Xr(t){const e=Ln(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Jr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Jr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Jr&&e.projectId===this.projectId&&e.database===this.database}}function fa(t){return t==null}function To(t){return t===0&&1/t==-1/0}function ZT(t){return typeof t=="number"&&Number.isInteger(t)&&!To(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xg(t)?4:eS(t)?9007199254740991:10:te()}function Gt(t,e){if(t===e)return!0;const n=ps(t);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xr(t).isEqual(Xr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ln(s.timestampValue),o=Ln(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return zs(s.bytesValue).isEqual(zs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ve(s.geoPointValue.latitude)===Ve(r.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ve(s.integerValue)===Ve(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ve(s.doubleValue),o=Ve(r.doubleValue);return i===o?To(i)===To(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return qs(t.arrayValue.values||[],e.arrayValue.values||[],Gt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(gf(i)!==gf(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Gt(i[a],o[a])))return!1;return!0}(t,e);default:return te()}}function Zr(t,e){return(t.values||[]).find(n=>Gt(n,e))!==void 0}function Ws(t,e){if(t===e)return 0;const n=ps(t),s=ps(e);if(n!==s)return we(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ve(r.integerValue||r.doubleValue),a=Ve(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return yf(t.timestampValue,e.timestampValue);case 4:return yf(Xr(t),Xr(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(r,i){const o=zs(r),a=zs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=we(o[c],a[c]);if(l!==0)return l}return we(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=we(Ve(r.latitude),Ve(i.latitude));return o!==0?o:we(Ve(r.longitude),Ve(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Ws(o[c],a[c]);if(l)return l}return we(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Vi.mapValue&&i===Vi.mapValue)return 0;if(r===Vi.mapValue)return 1;if(i===Vi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=we(a[u],l[u]);if(h!==0)return h;const f=Ws(o[a[u]],c[l[u]]);if(f!==0)return f}return we(a.length,l.length)}(t.mapValue,e.mapValue);default:throw te()}}function yf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Ln(t),s=Ln(e),r=we(n.seconds,s.seconds);return r!==0?r:we(n.nanos,s.nanos)}function Ms(t){return xc(t)}function xc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Ln(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?zs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,K.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=xc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${xc(s.fields[a])}`;return i+"}"}(t.mapValue):te();var e,n}function Mc(t){return!!t&&"integerValue"in t}function Jl(t){return!!t&&"arrayValue"in t}function vf(t){return!!t&&"nullValue"in t}function wf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qi(t){return!!t&&"mapValue"in t}function kr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ar(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=kr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=kr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function eS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Qi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=kr(n)}setAll(e){let n=rt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=kr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Qi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Qi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ar(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new St(kr(this.value))}}function Zg(t){const e=[];return ar(t.fields,(n,s)=>{const r=new rt([n]);if(Qi(s)){const i=Zg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Qe(e,0,ae.min(),ae.min(),St.empty(),0)}static newFoundDocument(e,n,s){return new Qe(e,1,n,ae.min(),s,0)}static newNoDocument(e,n){return new Qe(e,2,n,ae.min(),St.empty(),0)}static newUnknownDocument(e,n){return new Qe(e,3,n,ae.min(),St.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function _f(t,e=null,n=[],s=[],r=null,i=null,o=null){return new tS(t,e,n,s,r,i,o)}function Zl(t){const e=ne(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Ms(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),fa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ms(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ms(s)).join(",")),e.ht=n}return e.ht}function nS(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Ms(s.value)}`;var s}).join(", ")}]`),fa(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ms(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ms(n)).join(",")),`Target(${e})`}function eu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!uS(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Gt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!If(t.startAt,e.startAt)&&If(t.endAt,e.endAt)}function Lc(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class gt extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new sS(e,n,s):n==="array-contains"?new oS(e,s):n==="in"?new aS(e,s):n==="not-in"?new cS(e,s):n==="array-contains-any"?new lS(e,s):new gt(e,n,s)}static lt(e,n,s){return n==="in"?new rS(e,s):new iS(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Ws(n,this.value)):n!==null&&ps(this.value)===ps(n)&&this.ft(Ws(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class sS extends gt{constructor(e,n,s){super(e,n,s),this.key=K.fromName(s.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.ft(n)}}class rS extends gt{constructor(e,n){super(e,"in",n),this.keys=em("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class iS extends gt{constructor(e,n){super(e,"not-in",n),this.keys=em("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function em(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>K.fromName(s.referenceValue))}class oS extends gt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jl(n)&&Zr(n.arrayValue,this.value)}}class aS extends gt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zr(this.value.arrayValue,n)}}class cS extends gt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Zr(this.value.arrayValue,n)}}class lS extends gt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Zr(this.value.arrayValue,s))}}class So{constructor(e,n){this.position=e,this.inclusive=n}}class Rr{constructor(e,n="asc"){this.field=e,this.dir=n}}function uS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ef(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=K.comparator(K.fromName(o.referenceValue),n.key):s=Ws(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function If(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function hS(t,e,n,s,r,i,o,a){return new da(t,e,n,s,r,i,o,a)}function tu(t){return new da(t)}function bf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fS(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function dS(t){for(const e of t.filters)if(e.dt())return e.field;return null}function pS(t){return t.collectionGroup!==null}function ei(t){const e=ne(t);if(e._t===null){e._t=[];const n=dS(e),s=fS(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Rr(n)),e._t.push(new Rr(rt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Rr(rt.keyField(),i))}}}return e._t}function un(t){const e=ne(t);if(!e.wt)if(e.limitType==="F")e.wt=_f(e.path,e.collectionGroup,ei(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ei(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Rr(i.field,o))}const s=e.endAt?new So(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new So(e.startAt.position,e.startAt.inclusive):null;e.wt=_f(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function Uc(t,e,n){return new da(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pa(t,e){return eu(un(t),un(e))&&t.limitType===e.limitType}function tm(t){return`${Zl(un(t))}|lt:${t.limitType}`}function Fc(t){return`Query(target=${nS(un(t))}; limitType=${t.limitType})`}function nu(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):K.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Ef(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ei(n),s)||n.endAt&&!function(r,i,o){const a=Ef(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ei(n),s))}(t,e)}function gS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function nm(t){return(e,n)=>{let s=!1;for(const r of ei(t)){const i=mS(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function mS(t,e,n){const s=t.field.isKeyField()?K.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ws(a,c):te()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:To(e)?"-0":e}}function rm(t){return{integerValue:""+t}}function yS(t,e){return ZT(e)?rm(e):sm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(){this._=void 0}}function vS(t,e,n){return t instanceof Ao?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ti?om(t,e):t instanceof ni?am(t,e):function(s,r){const i=im(s,r),o=Tf(i)+Tf(s.yt);return Mc(i)&&Mc(s.yt)?rm(o):sm(s.It,o)}(t,e)}function wS(t,e,n){return t instanceof ti?om(t,e):t instanceof ni?am(t,e):n}function im(t,e){return t instanceof Co?Mc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ao extends ga{}class ti extends ga{constructor(e){super(),this.elements=e}}function om(t,e){const n=cm(e);for(const s of t.elements)n.some(r=>Gt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ni extends ga{constructor(e){super(),this.elements=e}}function am(t,e){let n=cm(e);for(const s of t.elements)n=n.filter(r=>!Gt(r,s));return{arrayValue:{values:n}}}class Co extends ga{constructor(e,n){super(),this.It=e,this.yt=n}}function Tf(t){return Ve(t.integerValue||t.doubleValue)}function cm(t){return Jl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _S(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ti&&s instanceof ti||n instanceof ni&&s instanceof ni?qs(n.elements,s.elements,Gt):n instanceof Co&&s instanceof Co?Gt(n.yt,s.yt):n instanceof Ao&&s instanceof Ao}(t.transform,e.transform)}class ES{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ma{}function lm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new su(t.key,zt.none()):new bi(t.key,t.data,zt.none());{const n=t.data,s=St.empty();let r=new je(rt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ms(t.key,s,new qt(r.toArray()),zt.none())}}function IS(t,e,n){t instanceof bi?function(s,r,i){const o=s.value.clone(),a=Af(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ms?function(s,r,i){if(!Yi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Af(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(um(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Dr(t,e,n,s){return t instanceof bi?function(r,i,o,a){if(!Yi(r.precondition,i))return o;const c=r.value.clone(),l=Cf(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ms?function(r,i,o,a){if(!Yi(r.precondition,i))return o;const c=Cf(r.fieldTransforms,a,i),l=i.data;return l.setAll(um(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Yi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function bS(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=im(s.transform,r||null);i!=null&&(n===null&&(n=St.empty()),n.set(s.field,i))}return n||null}function Sf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&qs(n,s,(r,i)=>_S(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bi extends ma{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ms extends ma{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function um(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Af(t,e,n){const s=new Map;Re(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,wS(o,a,n[r]))}return s}function Cf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,vS(i,o,e))}return s}class su extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TS extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,le;function AS(t){switch(t){default:return te();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function hm(t){if(t===void 0)return ln("GRPC error has no .code"),A.UNKNOWN;switch(t){case Fe.OK:return A.OK;case Fe.CANCELLED:return A.CANCELLED;case Fe.UNKNOWN:return A.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return A.INTERNAL;case Fe.UNAVAILABLE:return A.UNAVAILABLE;case Fe.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Fe.NOT_FOUND:return A.NOT_FOUND;case Fe.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Fe.ABORTED:return A.ABORTED;case Fe.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Fe.DATA_LOSS:return A.DATA_LOSS;default:return te()}}(le=Fe||(Fe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ar(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Yg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=new $e(K.comparator);function hn(){return CS}const fm=new $e(K.comparator);function _r(...t){let e=fm;for(const n of t)e=e.insert(n.key,n);return e}function dm(t){let e=fm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ns(){return Nr()}function pm(){return Nr()}function Nr(){return new cr(t=>t.toString(),(t,e)=>t.isEqual(e))}const kS=new $e(K.comparator),RS=new je(K.comparator);function ce(...t){let e=RS;for(const n of t)e=e.add(n);return e}const DS=new je(we);function gm(){return DS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ti.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ya(ae.min(),r,gm(),hn(),ce())}}class Ti{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ti(s,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class mm{constructor(e,n){this.targetId=e,this.At=n}}class ym{constructor(e,n,s=lt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class kf{constructor(){this.Rt=0,this.bt=Df(),this.Pt=lt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ce(),n=ce(),s=ce();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:te()}}),new Ti(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Df()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class NS{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=hn(),this.qt=Rf(),this.Kt=new je(we)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(Lc(i))if(s===0){const o=new K(i.path);this.jt(n,o,Qe.newNoDocument(o,ae.min()))}else Re(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Lc(a.target)){const c=new K(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,Qe.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=ce();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new ya(e,n,this.Kt,this.Ut,s);return this.Ut=hn(),this.qt=Rf(),this.Kt=new je(we),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new kf,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new je(we),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new kf),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Rf(){return new $e(K.comparator)}function Df(){return new $e(K.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),PS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class xS{constructor(e,n){this.databaseId=e,this.gt=n}}function ko(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vm(t,e){return t.gt?e.toBase64():e.toUint8Array()}function MS(t,e){return ko(t,e.toTimestamp())}function rn(t){return Re(!!t),ae.fromTimestamp(function(e){const n=Ln(e);return new Be(n.seconds,n.nanos)}(t))}function ru(t,e){return function(n){return new Pe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function wm(t){const e=Pe.fromString(t);return Re(Im(e)),e}function Vc(t,e){return ru(t.databaseId,e.path)}function za(t,e){const n=wm(e);if(n.get(1)!==t.databaseId.projectId)throw new H(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(_m(n))}function Bc(t,e){return ru(t.databaseId,e)}function LS(t){const e=wm(t);return e.length===4?Pe.emptyPath():_m(e)}function jc(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _m(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Nf(t,e,n){return{name:Vc(t,e),fields:n.value.mapValue.fields}}function US(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(Re(l===void 0||typeof l=="string"),lt.fromBase64String(l||"")):(Re(l===void 0||l instanceof Uint8Array),lt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?A.UNKNOWN:hm(c.code);return new H(l,c.message||"")}(o);n=new ym(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=za(t,s.document.name),i=rn(s.document.updateTime),o=new St({mapValue:{fields:s.document.fields}}),a=Qe.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Xi(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=za(t,s.document),i=s.readTime?rn(s.readTime):ae.min(),o=Qe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Xi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=za(t,s.document),i=s.removedTargetIds||[];n=new Xi([],i,r,null)}else{if(!("filter"in e))return te();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new SS(r),o=s.targetId;n=new mm(o,i)}}return n}function FS(t,e){let n;if(e instanceof bi)n={update:Nf(t,e.key,e.value)};else if(e instanceof su)n={delete:Vc(t,e.key)};else if(e instanceof ms)n={update:Nf(t,e.key,e.data),updateMask:GS(e.fieldMask)};else{if(!(e instanceof TS))return te();n={verify:Vc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Ao)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ti)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ni)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Co)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw te()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:MS(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:te()}(t,e.precondition)),n}function VS(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?rn(s.updateTime):rn(r);return i.isEqual(ae.min())&&(i=rn(r)),new ES(i,s.transformResults||[])}(n,e))):[]}function BS(t,e){return{documents:[Bc(t,e.path)]}}function jS(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Bc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Bc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(wf(h.value))return{unaryFilter:{field:bs(h.field),op:"IS_NAN"}};if(vf(h.value))return{unaryFilter:{field:bs(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(wf(h.value))return{unaryFilter:{field:bs(h.field),op:"IS_NOT_NAN"}};if(vf(h.value))return{unaryFilter:{field:bs(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bs(h.field),op:qS(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:bs(u.field),direction:KS(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||fa(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function $S(t){let e=LS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Re(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Em(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Rr(ks(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,fa(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new So(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new So(f,h)}(n.endAt)),hS(e,r,o,i,a,"F",c,l)}function HS(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return te()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Em(t){return t?t.unaryFilter!==void 0?[WS(t)]:t.fieldFilter!==void 0?[zS(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Em(e)).reduce((e,n)=>e.concat(n)):te():[]}function KS(t){return OS[t]}function qS(t){return PS[t]}function bs(t){return{fieldPath:t.canonicalString()}}function ks(t){return rt.fromServerFormat(t.fieldPath)}function zS(t){return gt.create(ks(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(t.fieldFilter.op),t.fieldFilter.value)}function WS(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ks(t.unaryFilter.field);return gt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ks(t.unaryFilter.field);return gt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ks(t.unaryFilter.field);return gt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ks(t.unaryFilter.field);return gt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return te()}}function GS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Im(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&IS(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Dr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Dr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=pm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=lm(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ae.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&qs(this.mutations,e.mutations,(n,s)=>Sf(n,s))&&qs(this.baseMutations,e.baseMutations,(n,s)=>Sf(n,s))}}class iu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Re(e.mutations.length===s.length);let r=kS;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new iu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n,s,r,i=ae.min(),o=ae.min(),a=lt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new cs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.re=e}}function JS(t){const e=$S({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Uc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(){this.Ye=new eA}addToCollectionParentIndex(e,n){return this.Ye.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Mn.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Mn.min())}updateCollectionGroup(e,n,s){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class eA{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new je(Pe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new je(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Gs(0)}static vn(){return new Gs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(){this.changes=new cr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?C.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Dr(s.mutation,r,qt.empty(),Be.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ce()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ce()){const r=ns();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=_r();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ns();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ce()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=hn();const o=Nr(),a=Nr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof ms)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Dr(u.mutation,l,u.mutation.getFieldMask(),Be.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new nA(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Nr();let r=new $e((o,a)=>o-a),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||qt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ce()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=pm();u.forEach(f=>{if(!i.has(f)){const p=lm(n.get(f),s.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return C.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return K.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):C.resolve(ns());let a=-1,c=i;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?C.resolve():this.getBaseDocument(e,u,h).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ce())).next(u=>({batchId:a,changes:dm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(s=>{let r=_r();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=_r();return this.indexManager.getCollectionParents(e,r).next(o=>C.forEach(o,a=>{const c=function(l,u){return new da(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Qe.newInvalidDocument(l)))});let o=_r();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Dr(l.mutation,c,qt.empty(),Be.now()),nu(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):C.resolve(Qe.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return C.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:rn(s.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:JS(s.bundledQuery),readTime:rn(s.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(){this.overlays=new $e(K.comparator),this.es=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ns();return C.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),C.resolve()}getOverlaysForCollection(e,n,s){const r=ns(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return C.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new $e((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=ns(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ns(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return C.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new YS(n,s));let i=this.es.get(n);i===void 0&&(i=ce(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){this.ns=new je(Ke.ss),this.rs=new je(Ke.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Ke(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Ke(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new K(new Pe([])),s=new Ke(n,e),r=new Ke(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new K(new Pe([])),s=new Ke(n,e),r=new Ke(n,e+1);let i=ce();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ke(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ke{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return K.comparator(e.key,n.key)||we(e._s,n._s)}static os(e,n){return we(e._s,n._s)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new je(Ke.ss)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QS(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Ke(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ke(n,0),r=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new je(we);return n.forEach(r=>{const i=new Ke(r,0),o=new Ke(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),C.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;K.isDocumentKey(i)||(i=i.child(""));const o=new Ke(new K(i),0);let a=new je(we);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),C.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Re(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return C.forEach(n.mutations,r=>{const i=new Ke(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Ke(n,0),r=this.gs.firstAfterOrEqual(s);return C.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.Es=e,this.docs=new $e(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return C.resolve(s?s.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(e,n){let s=hn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Qe.newInvalidDocument(r))}),C.resolve(s)}getAllFromCollection(e,n,s){let r=hn();const i=new K(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||GT(WT(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return C.resolve(r)}getAllFromCollectionGroup(e,n,s,r){te()}As(e,n){return C.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new cA(this)}getSize(e){return C.resolve(this.size)}}class cA extends tA{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),C.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){this.persistence=e,this.Rs=new cr(n=>Zl(n),eu),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ou,this.targetCount=0,this.vs=Gs.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),C.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Gs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Dn(n),C.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),C.waitFor(i).next(()=>r)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return C.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),C.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),C.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return C.resolve(s)}containsKey(e,n){return C.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Xl(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new lA(this),this.indexManager=new ZS,this.remoteDocumentCache=function(s){return new aA(s)}(s=>this.referenceDelegate.xs(s)),this.It=new XS(n),this.Ns=new rA(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new iA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new oA(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const r=new hA(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return C.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class hA extends YT{constructor(e){super(),this.currentSequenceNumber=e}}class au{constructor(e){this.persistence=e,this.Fs=new ou,this.$s=null}static Bs(e){return new au(e)}get Ls(){if(this.$s)return this.$s;throw te()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),C.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),C.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Ls,s=>{const r=K.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,ae.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return C.or([()=>C.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=ce(),r=ce();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new cu(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(bf(n))return C.resolve(null);let s=un(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Uc(n,null,"F"),s=un(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ce(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,Uc(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,r){return bf(n)||r.isEqual(ae.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(pf()<=me.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Fc(n)),this.Bi(e,o,n,zT(r,-1)))})}Fi(e,n){let s=new je(nm(e));return n.forEach((r,i)=>{nu(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return pf()<=me.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Fc(n)),this.Ni.getDocumentsMatchingQuery(e,n,Mn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new $e(we),this.qi=new cr(i=>Zl(i),eu),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sA(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function pA(t,e,n,s){return new dA(t,e,n,s)}async function bm(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ce();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function gA(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=C.resolve();return h.forEach(p=>{f=f.next(()=>l.getEntry(a,p)).next(m=>{const w=c.docVersions.get(p);Re(w!==null),m.version.compareTo(w)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ce();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Tm(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function mA(t,e){const n=ne(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(lt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(m,w,b){return m.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(f,p,u)&&a.push(n.Cs.updateTargetData(i,p))});let c=hn(),l=ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(yA(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(ae.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=r,i))}function yA(t,e,n){let s=ce(),r=ce();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=hn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ae.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function vA(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function wA(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,C.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new cs(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function $c(t,e,n){const s=ne(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ii(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Of(t,e,n){const s=ne(t);let r=ae.min(),i=ce();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ne(a),h=u.qi.get(l);return h!==void 0?C.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(s,o,un(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:ae.min(),n?i:ce())).next(a=>(_A(s,gS(e),a),{documents:a,Hi:i})))}function _A(t,e,n){let s=t.Ki.get(e)||ae.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Pf{constructor(){this.activeTargetIds=gm()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EA{constructor(){this.Lr=new Pf,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Pf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);V("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(V("RestConnection","Received: ",c),c),c=>{throw Pc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+or,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=bA[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new LT;a.setWithCredentials(!0),a.listenOnce(PT.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case qa.NO_ERROR:const l=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(l)),i(l);break;case qa.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new H(A.DEADLINE_EXCEEDED,"Request time out"));break;case qa.HTTP_ERROR:const u=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(m)>=0?m:A.UNKNOWN}(h.status);o(new H(f,h.message))}else o(new H(A.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new H(A.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=NT(),o=OT(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new MT({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");V("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new TA({Hr:m=>{h?V("Connection","Not sending because WebChannel is closed:",m):(u||(V("Connection","Opening WebChannel transport."),l.open(),u=!0),V("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),p=(m,w,b)=>{m.listen(w,k=>{try{b(k)}catch(O){setTimeout(()=>{throw O},0)}})};return p(l,Ui.EventType.OPEN,()=>{h||V("Connection","WebChannel transport opened.")}),p(l,Ui.EventType.CLOSE,()=>{h||(h=!0,V("Connection","WebChannel transport closed"),f.io())}),p(l,Ui.EventType.ERROR,m=>{h||(h=!0,Pc("Connection","WebChannel transport errored:",m),f.io(new H(A.UNAVAILABLE,"The operation could not be completed")))}),p(l,Ui.EventType.MESSAGE,m=>{var w;if(!h){const b=m.data[0];Re(!!b);const k=b,O=k.error||((w=k[0])===null||w===void 0?void 0:w.error);if(O){V("Connection","WebChannel received error:",O);const B=O.status;let W=function(he){const X=Fe[he];if(X!==void 0)return hm(X)}(B),G=O.message;W===void 0&&(W=A.INTERNAL,G="Unknown error status: "+B+" with message "+O.message),h=!0,f.io(new H(W,G)),l.close()}else V("Connection","WebChannel received:",b),f.ro(b)}}),p(o,xT.STAT_EVENT,m=>{m.stat===ff.PROXY?V("Connection","Detected buffering proxy"):m.stat===ff.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Wa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){return new xS(t,!0)}class Sm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&V("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Sm(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(ln(n.toString()),ln("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Do===n&&this.Qo(s,r)},s=>{e(()=>{const r=new H(A.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(r)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.jo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AA extends Am{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=US(this.It,e),s=function(r){if(!("targetChange"in r))return ae.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ae.min():i.readTime?rn(i.readTime):ae.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=jc(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=Lc(a)?{documents:BS(r,a)}:{query:jS(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=vm(r,i.resumeToken):i.snapshotVersion.compareTo(ae.min())>0&&(o.readTime=ko(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=HS(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=jc(this.It),n.removeTarget=e,this.Lo(n)}}class CA extends Am{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=VS(e.writeResults,e.commitTime),s=rn(e.commitTime);return this.listener.tu(s,n)}return Re(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=jc(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>FS(this.It,s))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=r,this.su=!1}iu(){if(this.su)throw new H(A.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(A.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.So._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(A.UNKNOWN,i.toString())})}terminate(){this.su=!0}}class RA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(ln(n),this.uu=!1):V("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.qr(o=>{s.enqueueAndForget(async()=>{ys(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ne(a);c.wu.add(4),await Si(c),c.yu.set("Unknown"),c.wu.delete(4),await wa(c)}(this))})}),this.yu=new RA(s,r)}}async function wa(t){if(ys(t))for(const e of t.mu)await e(!0)}async function Si(t){for(const e of t.mu)await e(!1)}function Cm(t,e){const n=ne(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),hu(n)?uu(n):lr(n).Oo()&&lu(n,e))}function km(t,e){const n=ne(t),s=lr(n);n._u.delete(e),s.Oo()&&Rm(n,e),n._u.size===0&&(s.Oo()?s.$o():ys(n)&&n.yu.set("Unknown"))}function lu(t,e){t.pu.Mt(e.targetId),lr(t).Ho(e)}function Rm(t,e){t.pu.Mt(e),lr(t).Jo(e)}function uu(t){t.pu=new NS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),lr(t).start(),t.yu.cu()}function hu(t){return ys(t)&&!lr(t).ko()&&t._u.size>0}function ys(t){return ne(t).wu.size===0}function Dm(t){t.pu=void 0}async function NA(t){t._u.forEach((e,n)=>{lu(t,e)})}async function OA(t,e){Dm(t),hu(t)?(t.yu.lu(e),uu(t)):t.yu.set("Unknown")}async function PA(t,e,n){if(t.yu.set("Online"),e instanceof ym&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ro(t,s)}else if(e instanceof Xi?t.pu.Gt(e):e instanceof mm?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(ae.min()))try{const s=await Tm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.pu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r._u.get(c);l&&r._u.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r._u.get(a);if(!c)return;r._u.set(a,c.withResumeToken(lt.EMPTY_BYTE_STRING,c.snapshotVersion)),Rm(r,a);const l=new cs(c.target,a,1,c.sequenceNumber);lu(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){V("RemoteStore","Failed to raise snapshot:",s),await Ro(t,s)}}async function Ro(t,e,n){if(!Ii(e))throw e;t.wu.add(1),await Si(t),t.yu.set("Offline"),n||(n=()=>Tm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await wa(t)})}function Nm(t,e){return e().catch(n=>Ro(t,n,e))}async function _a(t){const e=ne(t),n=Un(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;xA(e);)try{const r=await vA(e.localStore,s);if(r===null){e.du.length===0&&n.$o();break}s=r.batchId,MA(e,r)}catch(r){await Ro(e,r)}Om(e)&&Pm(e)}function xA(t){return ys(t)&&t.du.length<10}function MA(t,e){t.du.push(e);const n=Un(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function Om(t){return ys(t)&&!Un(t).ko()&&t.du.length>0}function Pm(t){Un(t).start()}async function LA(t){Un(t).nu()}async function UA(t){const e=Un(t);for(const n of t.du)e.Zo(n.mutations)}async function FA(t,e,n){const s=t.du.shift(),r=iu.from(s,e,n);await Nm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await _a(t)}async function VA(t,e){e&&Un(t).Xo&&await async function(n,s){if(r=s.code,AS(r)&&r!==A.ABORTED){const i=n.du.shift();Un(n).Fo(),await Nm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await _a(n)}var r}(t,e),Om(t)&&Pm(t)}async function Mf(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=ys(n);n.wu.add(3),await Si(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await wa(n)}async function BA(t,e){const n=ne(t);e?(n.wu.delete(2),await wa(n)):e||(n.wu.add(2),await Si(n),n.yu.set("Unknown"))}function lr(t){return t.Iu||(t.Iu=function(e,n,s){const r=ne(e);return r.iu(),new AA(n,r.So,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:NA.bind(null,t),Zr:OA.bind(null,t),zo:PA.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),hu(t)?uu(t):t.yu.set("Unknown")):(await t.Iu.stop(),Dm(t))})),t.Iu}function Un(t){return t.Tu||(t.Tu=function(e,n,s){const r=ne(e);return r.iu(),new CA(n,r.So,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:LA.bind(null,t),Zr:VA.bind(null,t),eu:UA.bind(null,t),tu:FA.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await _a(t)):(await t.Tu.stop(),t.du.length>0&&(V("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new fu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function du(t,e){if(ln("AsyncQueue",`${e}: ${t}`),Ii(t))return new H(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.comparator=e?(n,s)=>e(n,s)||K.comparator(n.key,s.key):(n,s)=>K.comparator(n.key,s.key),this.keyedMap=_r(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new Ls(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ls;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.Eu=new $e(K.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):te():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Qs{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Qs(e,n,Ls.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(){this.Ru=void 0,this.listeners=[]}}class $A{constructor(){this.queries=new cr(e=>tm(e),pa),this.onlineState="Unknown",this.bu=new Set}}async function xm(t,e){const n=ne(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new jA),r)try{i.Ru=await n.onListen(s)}catch(o){const a=du(o,`Initialization of query '${Fc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.vu(i.Ru)&&pu(n)}async function Mm(t,e){const n=ne(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function HA(t,e){const n=ne(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Ru=r}}s&&pu(n)}function KA(t,e,n){const s=ne(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function pu(t){t.bu.forEach(e=>{e.next()})}class Lm{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Qs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=Qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.key=e}}class Fm{constructor(e){this.key=e}}class qA{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ce(),this.mutatedKeys=ce(),this.Gu=nm(e),this.Qu=new Ls(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new Lf,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),p=nu(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let b=!1;f&&p?f.data.isEqual(p.data)?m!==w&&(s.track({type:3,doc:p}),b=!0):this.Hu(f,p)||(s.track({type:2,doc:p}),b=!0,(c&&this.Gu(p,c)>0||l&&this.Gu(p,l)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),b=!0):f&&!p&&(s.track({type:1,doc:f}),b=!0,(c||l)&&(a=!0)),b&&(p?(o=o.add(p),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((l,u)=>function(h,f){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return p(h)-p(f)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Qs(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Lf,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ce(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Fm(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Um(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=ce();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Qs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class zA{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class WA{constructor(e){this.key=e,this.nc=!1}}class GA{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new cr(a=>tm(a),pa),this.rc=new Map,this.oc=new Set,this.uc=new $e(K.comparator),this.cc=new Map,this.ac=new ou,this.hc={},this.lc=new Map,this.fc=Gs.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function QA(t,e){const n=iC(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await wA(n.localStore,un(e));n.isPrimaryClient&&Cm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await YA(n,e,s,a==="current",o.resumeToken)}return r}async function YA(t,e,n,s,r){t._c=(h,f,p)=>async function(m,w,b,k){let O=w.view.Wu(b);O.$i&&(O=await Of(m.localStore,w.query,!1).then(({documents:G})=>w.view.Wu(G,O)));const B=k&&k.targetChanges.get(w.targetId),W=w.view.applyChanges(O,m.isPrimaryClient,B);return Ff(m,w.targetId,W.Xu),W.snapshot}(t,h,f,p);const i=await Of(t.localStore,e,!0),o=new qA(e,i.Hi),a=o.Wu(i.documents),c=Ti.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Ff(t,n,l.Xu);const u=new zA(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function XA(t,e){const n=ne(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!pa(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await $c(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),km(n.remoteStore,s.targetId),Hc(n,s.targetId)}).catch(Ei)):(Hc(n,s.targetId),await $c(n.localStore,s.targetId,!0))}async function JA(t,e,n){const s=oC(t);try{const r=await function(i,o){const a=ne(i),c=Be.now(),l=o.reduce((f,p)=>f.add(p.key),ce());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=hn(),m=ce();return a.Gi.getEntries(f,l).next(w=>{p=w,p.forEach((b,k)=>{k.isValidDocument()||(m=m.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(w=>{u=w;const b=[];for(const k of o){const O=bS(k,u.get(k.key).overlayedDocument);O!=null&&b.push(new ms(k.key,O,Zg(O.value.mapValue),zt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,b,o)}).next(w=>{h=w;const b=w.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(f,w.batchId,b)})}).then(()=>({batchId:h.batchId,changes:dm(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new $e(we)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ai(s,r.changes),await _a(s.remoteStore)}catch(r){const i=du(r,"Failed to persist write");n.reject(i)}}async function Vm(t,e){const n=ne(t);try{const s=await mA(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(Re(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?Re(o.nc):r.removedDocuments.size>0&&(Re(o.nc),o.nc=!1))}),await Ai(n,s,e)}catch(s){await Ei(s)}}function Uf(t,e,n){const s=ne(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ne(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&pu(a)}(s.eventManager,e),r.length&&s.sc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ZA(t,e,n){const s=ne(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new $e(K.comparator);o=o.insert(i,Qe.newNoDocument(i,ae.min()));const a=ce().add(i),c=new ya(ae.min(),new Map,new je(we),o,a);await Vm(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),gu(s)}else await $c(s.localStore,e,!1).then(()=>Hc(s,e,n)).catch(Ei)}async function eC(t,e){const n=ne(t),s=e.batch.batchId;try{const r=await gA(n.localStore,e);jm(n,s,null),Bm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ai(n,r)}catch(r){await Ei(r)}}async function tC(t,e,n){const s=ne(t);try{const r=await function(i,o){const a=ne(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Re(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);jm(s,e,n),Bm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ai(s,r)}catch(r){await Ei(r)}}function Bm(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function jm(t,e,n){const s=ne(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Hc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||$m(t,s)})}function $m(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(km(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),gu(t))}function Ff(t,e,n){for(const s of n)s instanceof Um?(t.ac.addReference(s.key,e),nC(t,s)):s instanceof Fm?(V("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||$m(t,s.key)):te()}function nC(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(V("SyncEngine","New document in limbo: "+n),t.oc.add(s),gu(t))}function gu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new K(Pe.fromString(e)),s=t.fc.next();t.cc.set(s,new WA(n)),t.uc=t.uc.insert(n,s),Cm(t.remoteStore,new cs(un(tu(n.path)),s,2,Xl.at))}}async function Ai(t,e,n){const s=ne(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=cu.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.zo(r),await async function(a,c){const l=ne(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>C.forEach(c,h=>C.forEach(h.Si,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>C.forEach(h.Di,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Ii(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ui.get(h),p=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(p);l.Ui=l.Ui.insert(h,m)}}}(s.localStore,i))}async function sC(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await bm(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new H(A.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ai(n,s.ji)}}function rC(t,e){const n=ne(t),s=n.cc.get(e);if(s&&s.nc)return ce().add(s.key);{let r=ce();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function iC(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZA.bind(null,e),e.sc.zo=HA.bind(null,e.eventManager),e.sc.wc=KA.bind(null,e.eventManager),e}function oC(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tC.bind(null,e),e}class aC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=va(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return pA(this.persistence,new fA,e.initialUser,this.It)}yc(e){return new uA(au.Bs,this.It)}gc(e){return new EA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Uf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=sC.bind(null,this.syncEngine),await BA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $A}createDatastore(e){const n=va(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new SA(r));var r;return function(i,o,a,c){return new kA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Uf(this.syncEngine,a,0),o=xf.C()?new xf:new IA,new DA(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new GA(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ne(e);V("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Si(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t,e,n){if(!n)throw new H(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lC(t,e,n,s){if(e===!0&&s===!0)throw new H(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vf(t){if(!K.isDocumentKey(t))throw new H(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bf(t){if(K.isDocumentKey(t))throw new H(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function Fn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mu(t);throw new H(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=new Map;class $f{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new H(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,lC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $f({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $f(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new UT;switch(n.type){case"gapi":const s=n.client;return new jT(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new H(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=jf.get(e);n&&(V("ComponentProvider","Removing Datastore"),jf.delete(e),n.terminate())}(this),Promise.resolve()}}function uC(t,e,n,s={}){var r;const i=(t=Fn(t,Ea))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Pc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=tt.MOCK_USER;else{o=fE(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new H(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new tt(c)}t._authCredentials=new FT(new Gg(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new On(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class Ia{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ia(this.firestore,e,this._query)}}class On extends Ia{constructor(e,n,s){super(e,n,tu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new K(e))}withConverter(e){return new On(this.firestore,e,this._path)}}function Xk(t,e,...n){if(t=ct(t),Hm("collection","path",e),t instanceof Ea){const s=Pe.fromString(e,...n);return Bf(s),new On(t,null,s)}{if(!(t instanceof vt||t instanceof On))throw new H(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Pe.fromString(e,...n));return Bf(s),new On(t.firestore,null,s)}}function Hf(t,e,...n){if(t=ct(t),arguments.length===1&&(e=Qg.R()),Hm("doc","path",e),t instanceof Ea){const s=Pe.fromString(e,...n);return Vf(s),new vt(t,null,new K(s))}{if(!(t instanceof vt||t instanceof On))throw new H(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Pe.fromString(e,...n));return Vf(s),new vt(t.firestore,t instanceof On?t.converter:null,new K(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):ln("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=tt.UNAUTHENTICATED,this.clientId=Qg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=du(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function fC(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await bm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function dC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pC(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Mf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Mf(e.remoteStore,i)),t.onlineComponents=e}async function pC(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await fC(t,new aC)),t.offlineComponents}async function qm(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await dC(t,new cC)),t.onlineComponents}function gC(t){return qm(t).then(e=>e.syncEngine)}async function zm(t){const e=await qm(t),n=e.eventManager;return n.onListen=QA.bind(null,e.syncEngine),n.onUnlisten=XA.bind(null,e.syncEngine),n}function mC(t,e,n={}){const s=new sn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Km({next:h=>{i.enqueueAndForget(()=>Mm(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new H(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new H(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Lm(tu(o.path),l,{includeMetadataChanges:!0,ku:!0});return xm(r,u)}(await zm(t),t.asyncQueue,e,n,s)),s.promise}function yC(t,e,n={}){const s=new sn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Km({next:h=>{i.enqueueAndForget(()=>Mm(r,u)),h.fromCache&&a.source==="server"?c.reject(new H(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Lm(o,l,{includeMetadataChanges:!0,ku:!0});return xm(r,u)}(await zm(t),t.asyncQueue,e,n,s)),s.promise}class vC{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new Sm(this,"async_queue_retry"),this.Wc=()=>{const n=Wa();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Wa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Wa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new sn;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Ii(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw ln("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=fu.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.qc.push(r),r}zc(){this.Kc&&te()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class Ci extends Ea{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new vC,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Wm(this),this._firestoreClient.terminate()}}function wC(t,e){const n=typeof t=="object"?t:pp(),s=typeof t=="string"?t:e||"(default)",r=wl(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=lE("firestore");i&&uC(r,...i)}return r}function yu(t){return t._firestoreClient||Wm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Wm(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new JT(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new hC(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ys(lt.fromBase64String(e))}catch(n){throw new H(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ys(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=/^__.*__$/;class EC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ms(e,this.data,this.fieldMask,n,this.fieldTransforms):new bi(e,this.data,n,this.fieldTransforms)}}function Qm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class _u{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new _u(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Do(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Qm(this.sa)&&_C.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class IC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||va(e)}da(e,n,s,r=!1){return new _u({sa:e,methodName:n,fa:s,path:rt.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function bC(t){const e=t._freezeSettings(),n=va(t._databaseId);return new IC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function TC(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Zm("Data must be an object, but it was:",o,s);const a=Xm(s,o);let c,l;if(i.merge)c=new qt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=SC(e,h,n);if(!o.contains(f))throw new H(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);CC(u,f)||u.push(f)}c=new qt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new EC(new St(a),c,l)}function Ym(t,e){if(Jm(t=ct(t)))return Zm("Unsupported field value:",e,t),Xm(t,e);if(t instanceof Gm)return function(n,s){if(!Qm(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Ym(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=ct(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return yS(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Be.fromDate(n);return{timestampValue:ko(s.It,r)}}if(n instanceof Be){const r=new Be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ko(s.It,r)}}if(n instanceof wu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ys)return{bytesValue:vm(s.It,n._byteString)};if(n instanceof vt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ru(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${mu(n)}`)}(t,e)}function Xm(t,e){const n={};return Yg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ar(t,(s,r)=>{const i=Ym(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Jm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof wu||t instanceof Ys||t instanceof vt||t instanceof Gm)}function Zm(t,e,n){if(!Jm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=mu(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function SC(t,e,n){if((e=ct(e))instanceof vu)return e._internalPath;if(typeof e=="string")return ey(t,e);throw Do("Field path arguments must be of type string or ",t,!1,void 0,n)}const AC=new RegExp("[~\\*/\\[\\]]");function ey(t,e,n){if(e.search(AC)>=0)throw Do(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vu(...e.split("."))._internalPath}catch{throw Do(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Do(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new H(A.INVALID_ARGUMENT,a+t+c)}function CC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ny("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kC extends ty{data(){return super.data()}}function ny(t,e){return typeof e=="string"?ey(t,e):e instanceof vu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{convertValue(e,n="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){const s={};return ar(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new wu(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Jg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Xr(e));default:return null}}convertTimestamp(e){const n=Ln(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Pe.fromString(e);Re(Im(s));const r=new Jr(s.get(1),s.get(3)),i=new K(s.popFirst(5));return r.isEqual(n)||ln(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sy extends ty{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ji(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ny("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ji extends sy{data(e={}){return super.data(e)}}class OC{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Er(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ji(this._firestore,this._userDataWriter,s.key,s,new Er(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Ji(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Er(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ji(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Er(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:PC(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function PC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(t){t=Fn(t,vt);const e=Fn(t.firestore,Ci);return mC(yu(e),t._key).then(n=>LC(e,t,n))}class ry extends DC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ys(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function Zk(t){t=Fn(t,Ia);const e=Fn(t.firestore,Ci),n=yu(e),s=new ry(e);return RC(t._query),yC(n,t._query).then(r=>new OC(e,s,t,r))}function xC(t,e,n){t=Fn(t,vt);const s=Fn(t.firestore,Ci),r=NC(t.converter,e,n);return iy(s,[TC(bC(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,zt.none())])}function MC(t){return iy(Fn(t.firestore,Ci),[new su(t._key,zt.none())])}function iy(t,e){return function(n,s){const r=new sn;return n.asyncQueue.enqueueAndForget(async()=>JA(await gC(n),s,r)),r.promise}(yu(t),e)}function LC(t,e,n){const s=n.docs.get(e._key),r=new ry(t);return new sy(t,r,e._key,s,new Er(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){or=n})(oi),Hs(new ls("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Ci(new VT(n.getProvider("auth-internal")),new HT(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new H(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Nn(df,"3.7.0",t),Nn(df,"3.7.0","esm2017")})();const UC={apiKey:"AIzaSyC0SGcRNtaa-LHxeZ9juo7SwB1fa4kMInA",authDomain:"web-plus-6d176.firebaseapp.com",databaseURL:"https://web-plus-6d176-default-rtdb.firebaseio.com",projectId:"web-plus-6d176",storageBucket:"web-plus-6d176.appspot.com",messagingSenderId:"124338632365",appId:"1:124338632365:web:fbb2388683f9c2500c3824",measurementId:"G-QWM6MCYV93"},oy=dp(UC),wn=Ec(oy),Kf=wC(oy),FC=qw("authentication",{state:()=>({in:null,pasar:!1,auth:wn}),actions:{SignIn(t,e){console.log(t),gI(wn,t,e).then(n=>{n.user,console.log("Logged In"),alert("Logged in Succesfully")}).catch(n=>{n.code;const s=n.message;console.log(s),alert("Email or password are incorrect, please try again")})},signOut(){vI(wn).then(()=>{console.log("Logged out"),alert("Logged out")}).catch(t=>{console.log(t)})},async addUserToDatabase(t,e,n){try{await xC(Hf(t,"users",e),n)}catch(s){console.log(s)}},SignUp(t,e,n,s){let r={email:t,password:e,name:n,admin:s};pI(wn,t,e).then(i=>{const o=i.user;console.log(r),this.addUserToDatabase(Kf,o.uid,r),console.log("User created")}).catch(i=>{i.code;const o=i.message;console.log(o)})},validar(){let t;return Hh(wn,e=>{if(e){const n=wn.currentUser;console.log("USERID",n.uid),t=n.uid}else console.log("User is not signed in"),t="anonimo"}),t},validar2(){let t;const e=wn.currentUser;return e!=null?t=e.uid:t="anonimo",t},trae(){return Hh(wn,t=>{t?(this.in=t,t.uid=="mYCXvaIzLJXpS716wzD88wGIQVs2"&&(this.pasar=!0)):(console.log("No user"),this.pasar=!1)}),this.in},dileQueEresAdmin(){return this.trae(),this.pasar},revert(t){const e=Ec();dI(e,t).then(()=>{alert("mire su correo")}).catch(n=>{n.code,n.message})},async KILL(){const e=Ec().currentUser;console.log(e.uid),await MC(Hf(Kf,"users",e.uid)),wI(e).then(()=>{alert("morisionado")}).catch(n=>{})}}}),VC="https://github.com/MYSSYF/web_advance.git/assets/logo.c2bf2bbb.png",BC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAV5SURBVHgB1ZrdbhtFFMfPrE1aKVR1lKpN4ggcqsaJKM2HKiEBEiYY0av2AbggfQKSJ0jyBA1PUHPPBZSbirjVItRKSFXzVdQmVRuD8uFUiWJEg6jr3WH+k4xZJ/Z6ZndDxE+yd7U7k/zn7JlzzsyaUQQ8zXZnLEYD3OWDLuODxChBnFLqPiNW4sQLjKhgMct2Oc1fyK/aFBJGAYFgTs41RtaoEJYgUxgVxLfNuPVN0IEYi4doIj4hBGcoIsSTscX3lOkgtMU/vtKRildiN6MUXUdNzom5U/23iwWd5pZOo6fZ5JgQPnukwgGn0VjFmn2S7RzTad7U8sufJqeJ8a/oP4YTTaXz65N+bXzFL2U7c8Ifv6TjglOu98769Ua3G4oPK/x1/ASV4y3yvPXvPykwPgOoK34p2zUpbkxQAFbOpWmlI00vTnfVXD/7xzr1FJeoZ3OJjLH4dO+PG+MHLx8Sj8kpJuYNMmT35Cn6Jf1JjWhlcdzzXhuZv0Wtr8yehkt8vC+/Me29ViN+PxzOmiYdiLt76ao8Qlzv2gK9s7lMb1ReyftwodX2FD16+3K1TYABlJy4O+QNozWhMuZYE0GyJSwOUW0vt+nKw28pvbZYFQ5wDncZWbhFCdFGPSVDErEKu+m9UBUvM6eIs2QIfByuAmt+9OvtGtEHkRYXA0CbF4muQ/OiOSzzONuRoYPikfIpAJic4OJvD7TcoEUIR1sANzIlRqyqU4rfK7KCZc+d1nZ5PFta1+7TI+YDKL3ZTub8a30pnjM3UDwvi4mIyQhrmkw+tIfrqP6mCOtfw1G5TYb+V7BRfFv7EzVFAfBacPfEKe1+iDbqiflNcB8ScB0LKyAKQfd2QR7VxNUBEQoktwoUlBhjA5bL3QyFACkfLCff07I+rL4k2sq+QUoFhcsGhc+zFIVA1ixCBFzn7sBV3wGoTAyXwaDRNyhcrJXj4piikAw9uy9C5hkZ+n54/wspLL2+ILMpUAkJFodwZOLh5/cpDIyzBFvOdnGKAFh+9vwHVX9uRHp1kS7+/iDoRK0hMvEKuAYyp3oSAGUBJnZyayWUqxwklHi14GiplI0tGaavIi73TwzjPHwY1lWFVeLllqwmTbgjJq56MpgDqHeS2ysmf6IUF46P3SztHhCtCipYDJY7V9ogU1ALvRaWh/V3xCB+fvdzGn52T6wFFrX6YwcuLkLOnDgb1Omg/BmEnXjDz+/JD3j0ljBI6jI9PP+hTFyadVLBipE1R5oo4QiFQ+IfRxExAIzQu7pn8eXuS1p9GCPbKvPKPGmi1qKhMmMDuvf9ffN0p1Z7RnzO6s8Xbezi6nRQtXvb7jZFjXKVv042LzE454ULM8WfVEmca9bBW3tH5S5ekAt0a/y9jdn9er5CzvfUBGURhMWjosUpy2M51uLbjlluDkcpHq4jHobt10HtfiE0HhVt+7XQju/ykNtwGZxVF+AO8SmfHtXJGmrrThM/t2GMT6rzqvhm1ldWWTuTMlo16QLjVANCI9cU+5bK6iDuvedU+PV43Kq7YwZfR1ZEaYCy13S7rhnKIMghifrRrOQ4bo13HNqrfDLSOSbWhnX3KnXL3qD4ZW2XOWN9M5tfe6/V3SUWm603hPUbvp2QFWGTiGAKIk2jEMzJnUzni4fm5JHtz0eFy9xc30xRf39ecdwD8BMOfF+opfMbo3hkdCzwaT/hoOnbQPia6/Jx3fonAkqYnL35w29CDqL/HjbTkYrFrAnRY5SODG4jXPfbeu9hzd+Af9bxMedsEru1FBncRub0JiAdgv/2AINw5e8OMoyxFJkj3JDnhOjvTEUrAov3IgdCbFCsh8U+v1zM41PN0mKpWcBaWQTsOfFmbw4LiaCCvfwD5K2QkfmONssAAAAASUVORK5CYII=",jC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARkSURBVHgB1ZpPSBRRHMd/a38okqwIrEhYMupQ4HYo6A+0QZGXCLK/pyLy1KG1Dt1Sj0FlQV0y2O1WoUSnkg5uB+2oC2Ykmlv2R9F0/Yem1ut938wbZmVnd96bWZc+8HbGmffefH+/+b33fjNjgHyAMRbmmwpeQmZZx0vQViXFS9IscV4SgUAgToUCgnlp4GWM6dHPS9Q0fElFtzJ/ac2rEbzzIPNf9GKiuA75Ce8wwvTDQxVcJ0J+wDu6zwpDHXmBdxBjhSVKOngVvjA5zn7//CpKvgxY7iC8jm8ukgajb57TWMsLmk68Tzu+pmI/rT9+jjZUniVFLnE9Kb4u1Cw+EVh8gBmDpYEUmRscoIHbkTTRKzeVWeckK0rLqLyhyTqnQA034L7jWWZMh8qzCkKj+/xeljiymX28sI8NNz0WYWMPodE3z/g5o073+X064QRdwWzio0yD3sgpIaqn+miaaJbByE9Xjoq6aKNBq5PwMNPg1+tnlsfdeHNhMsW6TuwUbSY72pgGYam5yKa/ljTA4ASlF2+4iuNlxSWiLhh6epc0sHQK8aY1YdJgtu+D2GI2ccv642fT2ioSlt6XnteaFv9MjfMywb25Vmn2gPfRBm1RNDiJHyk+TP8Xl/BTZN6CIGlg9+Dc4DfX7TDvyzuGosE66IbnK8gDaw9Wiu1Yy3PXbbAK29tqUgHxYfKAHHwjzY1pK6kTqDPS/ETsb6g8Rx4IQXyQPFAcOsANOCPCoK/mdFYDcK6vpor+Tk8Io1VmqAyEAjx2xsh4YNYGsw6Ey6kPwjZWVdPq7bvE31Od7aLA4xCO49vuNevGuyQJ8Yx8AAb8eFRrLVpOwCgsUh6FC3wTL0FoYOXEXZjpNe4E1gAMzpJDlV5DJQ1P4o1FZtyaMpeqrQTi+0lx0CJ+4V2Zu68q30U7Gt+qdEE91cesMYL2CCXcGQVSmG1SKi0GY3fo8/XTQrhMCzDjqFIc2i/aog8Y8eXWZRpualTpIqmUwyPlRSqL8v3hray5uwrcIVa/Cg8pL+H5TremyhQWU+GWq/W+zBgAIbOx6orYlwuYC+IQn3BbWy5AHlfGjMhUYTrR7rZJZ5H5ttZV3NsHmN9keljPQpLrfidT4liu2jJ3B36Fix05eF3m+HH8SPGvctWWKa9c8vOBdIoL8TH8CPFm6MSz1YbnjQuUUL5YVb5bbGf7urJViyNksGN/AK/P1mJ+yIhFvDTKNzk8Xyd3LPG5vC+9MtH22u2gUgJ9zvR2mddyDM2Y9DpIe93HjDdSHeSQIiMXlynBitKt5CfzQ8aYwhpSdjPjWz3MiHu4+KQ8oPSu0m3aq0uOdDnChT+wHwhkqsUNgHjHrxOISTxU+EnRmqwP43VceD25hRX+w4KkMB8YCibcZkAtKwzK3wicDFjqr4HXyE+Y8eEhyvJLK/P7O+wiIw6z/HwBP0xLhWlElBn/Q6ADwqPBi+gA+YApAP/tESbjYR7FvkonyVghO2WxL/O6/AMqsPrf+aYPhgAAAABJRU5ErkJggg==";const Eu=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},$C={data(){return{nolog:!0,log:!1,showModal:!1,email:"",contra:"",nombre:"",correo:"",pass:"",recup:"",admin:!1,medal:!1}},computed:{...Ww(FC)},methods:{entra(){this.authenticationStore.SignIn(this.email,this.contra),this.nolog=!1,this.log=!0},admon(){this.authenticationStore.dileQueEresAdmin(),console.log(this.authenticationStore.dileQueEresAdmin()),this.authenticationStore.dileQueEresAdmin()==!0?this.medal=!0:this.medal=!1},cerrar(){this.authenticationStore.signOut(),this.nolog=!0,this.log=!1},morir(){this.authenticationStore.KILL(),this.nolog=!0,this.log=!1},rever(){this.authenticationStore.revert(this.recup)},regis(){this.authenticationStore.SignUp(this.correo,this.pass,this.nombre,this.admin)},mounted(){this.authenticationStore.validar()}}},HC={class:"header__part__1"},KC=Y("h2",{class:"tittle"},"DOMURA",-1),qC={class:"header__part__2"},zC=er("INICIO"),WC=er("CATALOGO"),GC=er("A\xD1ADIR"),QC=er("CARRO"),YC=Y("img",{src:BC,alt:"P",class:"user"},null,-1),XC=[YC],JC=Y("img",{src:jC,alt:"P",class:"user"},null,-1),ZC=[JC],ek={key:0,class:"modal"},tk={class:"modal__back flex"},nk={class:"regis flex"},sk={id:"CreateUserForm"},rk=Y("label",{for:"name"},"Nombre",-1),ik=Y("label",{for:"email"},"Correo Electronico",-1),ok=Y("label",{for:"password"},"Contrase\xF1a",-1),ak={class:"loguin flex"},ck={id:"loguinForm"},lk=Y("label",{for:"email"},"Correo Electronico",-1),uk=Y("label",{for:"password"},"Contrase\xF1a",-1),hk=Y("footer",null,[Y("h3",null,"Copyright\xA9 2022 MAQUINAS.ORG - Ningun derecho esta reservado."),Y("h3",null,"Politica de privacidad Terminos y condiciones"),Y("h3",null,"Protopagina creada por jose gabriel")],-1);function fk(t,e,n,s,r,i){const o=Vs("RouterLink"),a=Vs("RouterView");return Rt(),Gn(Tt,null,[Y("header",null,[Y("div",HC,[Y("img",{src:VC,alt:"nop",class:"header__logo",onClick:e[0]||(e[0]=(...c)=>i.admon&&i.admon(...c))}),KC]),Y("div",qC,[Y("nav",null,[Le(o,{to:"/",class:"item"},{default:Zt(()=>[zC]),_:1}),Le(o,{to:"/catalogo",class:"item"},{default:Zt(()=>[WC]),_:1}),r.medal?(Rt(),ro(o,{key:0,to:"/agregar",class:"item"},{default:Zt(()=>[GC]),_:1})):hr("",!0),Le(o,{to:"/bugguy",class:"item"},{default:Zt(()=>[QC]),_:1}),r.log?(Rt(),Gn("p",{key:1,class:"item",onClick:e[1]||(e[1]=Jn((...c)=>i.morir&&i.morir(...c),["prevent"]))},"\u{1F480}\u{1F480}\u{1F480}")):hr("",!0),r.nolog?(Rt(),Gn("button",{key:2,class:"user",onClick:e[2]||(e[2]=c=>r.showModal=!0)},XC)):hr("",!0),r.log?(Rt(),Gn("button",{key:3,class:"user",onClick:e[3]||(e[3]=Jn((...c)=>i.cerrar&&i.cerrar(...c),["prevent"]))},ZC)):hr("",!0),Le(dl,{name:"fade"},{default:Zt(()=>[r.showModal?(Rt(),Gn("div",ek,[Y("div",tk,[Y("div",nk,[Y("form",sk,[rk,ws(Y("input",{type:"text",placeholder:"Nombre",name:"name",class:"CUF","onUpdate:modelValue":e[4]||(e[4]=c=>r.nombre=c)},null,512),[[_s,r.nombre]]),ik,ws(Y("input",{type:"email",placeholder:"Correo Electronico",name:"email",class:"CUF","onUpdate:modelValue":e[5]||(e[5]=c=>r.correo=c)},null,512),[[_s,r.correo]]),ok,ws(Y("input",{type:"password",placeholder:"Contrase\xF1a",name:"password",class:"CUF","onUpdate:modelValue":e[6]||(e[6]=c=>r.pass=c)},null,512),[[_s,r.pass]]),Y("button",{class:"LF",onClick:e[7]||(e[7]=Jn((...c)=>i.regis&&i.regis(...c),["prevent"]))},"REGISTRATE")])]),Y("div",ak,[Y("form",ck,[lk,ws(Y("input",{type:"email",placeholder:"Correo Electronico",name:"email",class:"LF","onUpdate:modelValue":e[8]||(e[8]=c=>r.email=c)},null,512),[[_s,r.email]]),uk,ws(Y("input",{type:"password",placeholder:"Contrase\xF1a",name:"password",class:"LF","onUpdate:modelValue":e[9]||(e[9]=c=>r.contra=c)},null,512),[[_s,r.contra]]),Y("button",{class:"LF",onClick:e[10]||(e[10]=Jn((...c)=>i.entra&&i.entra(...c),["prevent"]))},"INGRESA"),ws(Y("input",{type:"email",placeholder:"recuperar contra",name:"email",class:"CUF","onUpdate:modelValue":e[11]||(e[11]=c=>r.recup=c)},null,512),[[_s,r.recup]]),Y("p",{class:"item",onClick:e[12]||(e[12]=Jn((...c)=>i.rever&&i.rever(...c),["prevent"]))},"\u{1F921}")])]),Y("button",{class:"clos",onClick:e[13]||(e[13]=c=>r.showModal=!1)},"X")])])):hr("",!0)]),_:1})])])]),Le(a),hk],64)}const dk=Eu($C,[["render",fk]]),pk="modulepreload",gk=function(t){return"https://github.com/MYSSYF/web_advance.git/"+t},qf={},Ts=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=gk(r),r in qf)return;qf[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":pk,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
 * Vue 3 Carousel 0.1.46
 * (c) 2022
 * @license MIT
 */const pt={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},zf={itemsToShow:{default:pt.itemsToShow,type:Number},itemsToScroll:{default:pt.itemsToScroll,type:Number},wrapAround:{default:pt.wrapAround,type:Boolean},snapAlign:{default:pt.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:pt.transition,type:Number},breakpoints:{default:pt.breakpoints,type:Object},autoplay:{default:pt.autoplay,type:Number},pauseAutoplayOnHover:{default:pt.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:pt.mouseDrag,type:Boolean},touchDrag:{default:pt.touchDrag,type:Boolean},dir:{default:pt.dir,validator(t){return["rtl","ltr"].includes(t)}},settings:{default(){return{}},type:Object}};function mk(t,e){let n;return function(...s){n&&clearTimeout(n),n=setTimeout(()=>{t(...s),n=null},e)}}function yk(t,e){let n;return function(...s){const r=this;n||(t.apply(r,s),n=!0,setTimeout(()=>n=!1,e))}}function vk(t){var e,n,s;return t?((n=(e=t[0])===null||e===void 0?void 0:e.type)===null||n===void 0?void 0:n.name)==="CarouselSlide"?t:((s=t[0])===null||s===void 0?void 0:s.children)||[]:[]}function wk(t,e){if(t.wrapAround)return e-1;switch(t.snapAlign){case"start":return e-t.itemsToShow;case"end":return e-1;case"center":case"center-odd":return e-Math.ceil(t.itemsToShow/2);case"center-even":return e-Math.ceil(t.itemsToShow/2);default:return 0}}function _k(t){if(t.wrapAround)return 0;switch(t.snapAlign){case"start":return 0;case"end":return t.itemsToShow-1;case"center":case"center-odd":return Math.floor((t.itemsToShow-1)/2);case"center-even":return Math.floor((t.itemsToShow-2)/2);default:return 0}}function Wf(t,e,n,s){return t.wrapAround?e:Math.min(Math.max(e,s),n)}function Ek({slidesBuffer:t,currentSlide:e,snapAlign:n,itemsToShow:s,wrapAround:r,slidesCount:i}){let o=t.indexOf(e);if(o===-1&&(o=t.indexOf(Math.ceil(e))),n==="center"||n==="center-odd"?o-=(s-1)/2:n==="center-even"?o-=(s-2)/2:n==="end"&&(o-=s-1),!r){const a=i-s,c=0;o=Math.max(Math.min(o,a),c)}return o}var Ik=Bo({name:"Carousel",props:zf,setup(t,{slots:e,emit:n,expose:s}){var r;const i=Se(null),o=Se([]),a=Se([]),c=Se(0),l=Se(1);let u,h,f=Se({}),p=Object.assign({},pt);const m=Pt(Object.assign({},p)),w=Se((r=m.modelValue)!==null&&r!==void 0?r:0),b=Se(0),k=Se(0),O=Se(0),B=Se(0);bt("config",m),bt("slidesBuffer",a),bt("slidesCount",l),bt("currentSlide",w),bt("maxSlide",O),bt("minSlide",B);function W(){const y=Object.assign(Object.assign({},t),t.settings);f=Se(Object.assign({},y.breakpoints)),p=Object.assign(Object.assign({},y),{settings:void 0,breakpoints:void 0}),he(p)}function G(){const y=Object.keys(f.value).map(D=>Number(D)).sort((D,S)=>+S-+D);let I=Object.assign({},p);y.some(D=>window.matchMedia(`(min-width: ${D}px)`).matches?(I=Object.assign(Object.assign({},I),f.value[D]),!0):!1),he(I)}function he(y){for(let I in y)m[I]=y[I]}const X=mk(()=>{f.value&&(G(),Q()),P()},16);function P(){if(!i.value)return;const y=i.value.getBoundingClientRect();c.value=y.width/m.itemsToShow}function Q(){l.value=Math.max(o.value.length,1),!(l.value<=0)&&(k.value=Math.ceil((l.value-1)/2),O.value=wk(m,l.value),B.value=_k(m),w.value=Wf(m,w.value,O.value,B.value))}function ie(){const y=[...Array(l.value).keys()];if(m.wrapAround&&m.itemsToShow+1<=l.value){let S=(m.itemsToShow!==1?Math.round((l.value-m.itemsToShow)/2):0)-w.value;if(m.snapAlign==="end"?S+=Math.floor(m.itemsToShow-1):(m.snapAlign==="center"||m.snapAlign==="center-odd")&&S++,S<0)for(let R=S;R<0;R++)y.push(Number(y.shift()));else for(let R=0;R<S;R++)y.unshift(Number(y.pop()))}a.value=y}al(()=>{f.value&&(G(),Q()),Fo(()=>setTimeout(P,16)),Et(),window.addEventListener("resize",X,{passive:!0})}),Ho(()=>{h&&clearTimeout(h),u&&clearInterval(u)});let oe=!1;const x={x:0,y:0},de={x:0,y:0},ye=Pt({x:0,y:0}),ke=Se(!1),Ne=()=>{ke.value=!0},Ie=()=>{ke.value=!1};function ve(y){oe=y.type==="touchstart",!(!oe&&y.button!==0||He.value)&&(oe||y.preventDefault(),x.x=oe?y.touches[0].clientX:y.clientX,x.y=oe?y.touches[0].clientY:y.clientY,document.addEventListener(oe?"touchmove":"mousemove",et,!0),document.addEventListener(oe?"touchend":"mouseup",Qt,!0))}const et=yk(y=>{de.x=oe?y.touches[0].clientX:y.clientX,de.y=oe?y.touches[0].clientY:y.clientY;const I=de.x-x.x,D=de.y-x.y;ye.y=D,ye.x=I},16);function Qt(){const y=m.dir==="rtl"?-1:1,I=Math.sign(ye.x)*.4,D=Math.round(ye.x/c.value+I)*y;let S=Wf(m,w.value-D,O.value,B.value);if(D&&!oe){const R=T=>{T.stopPropagation(),window.removeEventListener("click",R,!0)};window.addEventListener("click",R,!0)}ft(S),ye.x=0,ye.y=0,document.removeEventListener(oe?"touchmove":"mousemove",et,!0),document.removeEventListener(oe?"touchend":"mouseup",Qt,!0)}function Et(){!m.autoplay||m.autoplay<=0||(u=setInterval(()=>{m.pauseAutoplayOnHover&&ke.value||_()},m.autoplay))}function mt(){u&&(clearInterval(u),u=null),Et()}const He=Se(!1);function ft(y,I=!1){if(w.value===y||He.value)return;mt();const D=l.value-1;if(y>D)return ft(y-l.value);if(y<0)return ft(y+l.value);He.value=!0,b.value=w.value,w.value=y,I||n("update:modelValue",w.value),h=setTimeout(()=>{m.wrapAround&&ie(),He.value=!1},m.transition)}function _(){let y=w.value+m.itemsToScroll;m.wrapAround||(y=Math.min(y,O.value)),ft(y)}function M(){let y=w.value-m.itemsToScroll;m.wrapAround||(y=Math.max(y,B.value)),ft(y)}const N={slideTo:ft,next:_,prev:M};bt("nav",N);const F=st(()=>Ek({slidesBuffer:a.value,itemsToShow:m.itemsToShow,snapAlign:m.snapAlign,wrapAround:Boolean(m.wrapAround),currentSlide:w.value,slidesCount:l.value}));bt("slidesToScroll",F);const ge=st(()=>{const y=m.dir==="rtl"?-1:1,I=F.value*c.value*y;return{transform:`translateX(${ye.x-I}px)`,transition:`${He.value?m.transition:0}ms`}});function _e(){W()}function se(){W(),G(),Q(),ie(),P(),mt()}function J(){Q(),ie()}Object.keys(zf).forEach(y=>{["modelValue"].includes(y)||rs(()=>t[y],se)}),_e(),pv(()=>{const y=l.value!==o.value.length;t.modelValue!==void 0&&w.value!==t.modelValue&&ft(Number(t.modelValue),!0),y&&J()});const d={config:m,slidesBuffer:a,slidesCount:l,slideWidth:c,currentSlide:w,maxSlide:O,minSlide:B,middleSlide:k};s({updateBreakpointsConfigs:G,updateSlidesData:Q,updateSlideWidth:P,updateSlidesBuffer:ie,initCarousel:_e,restartCarousel:se,updateCarousel:J,slideTo:ft,next:_,prev:M,nav:N,data:d});const g=e.default||e.slides,v=e.addons,E=Pt(d);return()=>{const y=vk(g==null?void 0:g(E)),I=(v==null?void 0:v(E))||[];o.value=y,y.forEach((R,T)=>R.props.index=T);const D=Ye("ol",{class:"carousel__track",style:ge.value,onMousedown:m.mouseDrag?Jn(ve,["capture"]):null,onTouchstart:m.touchDrag?Jn(ve,["capture"]):null},y),S=Ye("div",{class:"carousel__viewport"},D);return Ye("section",{ref:i,class:{carousel:!0,"carousel--rtl":m.dir==="rtl"},dir:m.dir,"aria-label":"Gallery",onMouseenter:Ne,onMouseleave:Ie},[S,I])}}});const bk={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},Kc=t=>{const e=t.name;if(!e||typeof e!="string")return;const n=bk[e],s=Ye("path",{d:n}),r=t.title||e,i=Ye("title",r);return Ye("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:r},[i,s])};Kc.props={name:String,title:String};const Tk=(t,{slots:e,attrs:n})=>{const{next:s,prev:r}=e||{},i=xe("config",Pt(Object.assign({},pt))),o=xe("maxSlide",Se(1)),a=xe("minSlide",Se(1)),c=xe("currentSlide",Se(1)),l=xe("nav",{}),u=i.dir==="rtl",h=Ye("button",{type:"button",class:["carousel__prev",!i.wrapAround&&c.value<=a.value&&"carousel__prev--in-active",n==null?void 0:n.class],"aria-label":"Navigate to previous slide",onClick:l.prev},(r==null?void 0:r())||Ye(Kc,{name:u?"arrowRight":"arrowLeft"})),f=Ye("button",{type:"button",class:["carousel__next",!i.wrapAround&&c.value>=o.value&&"carousel__next--in-active",n==null?void 0:n.class],"aria-label":"Navigate to next slide",onClick:l.next},(s==null?void 0:s())||Ye(Kc,{name:u?"arrowLeft":"arrowRight"}));return[h,f]};var Sk=Bo({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(t,{slots:e}){const n=xe("config",Pt(Object.assign({},pt))),s=xe("slidesBuffer",Se([])),r=xe("currentSlide",Se(0)),i=xe("slidesToScroll",Se(0)),o=Se(t.index);n.wrapAround&&(a(),rs(s,a));function a(){o.value=s.value.indexOf(t.index)}const c=st(()=>{const p=n.itemsToShow;return{width:`${1/p*100}%`,order:o.value.toString()}}),l=()=>t.index===r.value,u=()=>{const p=Math.ceil(i.value),m=Math.floor(i.value+n.itemsToShow);return s.value.slice(p,m).includes(t.index)},h=()=>t.index===s.value[Math.ceil(i.value)-1],f=()=>t.index===s.value[Math.floor(i.value+n.itemsToShow)];return()=>{var p;return Ye("li",{style:c.value,class:{carousel__slide:!0,"carousel__slide--active":l(),"carousel__slide--visible":u(),"carousel__slide--prev":h(),"carousel__slide--next":f()}},(p=e.default)===null||p===void 0?void 0:p.call(e))}}});const Ak=()=>{const t=xe("maxSlide",Se(1)),e=xe("minSlide",Se(1)),n=xe("currentSlide",Se(1)),s=xe("nav",{});function r(a){s.slideTo(a)}const i=a=>{const c=n.value;return c===a||c>t.value&&a>=t.value||c<e.value&&a<=e.value},o=[];for(let a=e.value;a<t.value+1;a++){const c=Ye("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":i(a)},"aria-label":`Navigate to slide ${a+1}`,onClick:()=>r(a)}),l=Ye("li",{class:"carousel__pagination-item",key:a},c);o.push(l)}return Ye("ol",{class:"carousel__pagination"},o)};const Ck={data(){return{macc:[{pic:"../place1.jpg",name:"Bugggy",price:"99.98"},{pic:"../place1.jpg",name:"Bugggy",price:"99.98"},{pic:"../place1.jpg",name:"el unico diferente pa mostrar que funciona",price:"99.98"},{pic:"../place1.jpg",name:"Bugggy",price:"99.98"},{pic:"../place1.jpg",name:"Bugggy",price:"99.98"},{pic:"../place1.jpg",name:"Bugggy",price:"99.98"},{pic:"../place1.jpg",name:"Bugggy",price:"99.98"}]}},name:"App",components:{Carousel:Ik,Slide:Sk,Pagination:Ak,Navigation:Tk}},kk={class:"ofer"},Rk=["src"],Dk={class:"ofer__text"},Nk={class:"ofer__button"};function Ok(t,e,n,s,r,i){const o=Vs("Slide"),a=Vs("Carousel");return Rt(),ro(a,{itemsToShow:2.95,wrapAround:!0},{default:Zt(()=>[(Rt(!0),Gn(Tt,null,Dv(r.macc,c=>(Rt(),ro(o,{key:c},{default:Zt(()=>[Y("div",kk,[Y("img",{src:c.pic,class:"ofer__pic"},null,8,Rk),Y("h3",Dk,Au(c.name),1),Y("h3",Nk,Au(c.price),1)])]),_:2},1024))),128))]),_:1},8,["itemsToShow"])}const Pk=Eu(Ck,[["render",Ok]]),xk="https://github.com/MYSSYF/web_advance.git/assets/ban.3caad29e.png",Mk="https://github.com/MYSSYF/web_advance.git/assets/cons.56b33101.jpg";const Lk={components:{land:Pk}},Uk={class:"banner flex"},Fk=Y("img",{src:xk,alt:"no",class:"ban_img"},null,-1),Vk=Y("div",{class:"block"},null,-1),Bk={class:"text"},jk=er("SERIES 7"),$k=Y("p",{class:"t2"},"la nueva serie, 7 veces mas poderosa",-1),Hk=Xv('<section class="info flex"><div class="mision flex"><div class="mision__sub"><h2 class="mision__sub__title flex">LIDERES EN MQUINARIA</h2><p class="mision__sub__text flex"> lo que inicio como la caida de una gran firma constructuro, seria el inicio de una oportunidad para un nuevo modelo de negocios, desde ese entonces nos convertimos en la alternativa #1 para las constructores </p></div><img src="'+Mk+'" alt="no" class="mision__img flex"></div></section>',1),Kk={class:"ofertas"},qk=Y("h2",{class:"ofertas__titles"},"OFERTAS",-1),zk={class:"ofertas__list flex"};function Wk(t,e,n,s,r,i){const o=Vs("P"),a=Vs("land");return Rt(),Gn("body",null,[Y("section",Uk,[Fk,Vk,Y("div",Bk,[Le(o,{class:"t1"},{default:Zt(()=>[jk]),_:1}),$k])]),Hk,Y("section",Kk,[qk,Y("div",zk,[Le(a)])])])}const Gk=Eu(Lk,[["render",Wk]]),Qk=Q_({history:h_("https://github.com/MYSSYF/web_advance.git/"),routes:[{path:"/",name:"home",component:Gk},{path:"/agregar",name:"agregar",component:()=>Ts(()=>import("./agregar.9ddb7eaf.js"),["assets/agregar.9ddb7eaf.js","assets/agregar.16acac91.css","assets/gods.1e7260e7.js"])},{path:"/catalogo",name:"catalogo",component:()=>Ts(()=>import("./catalogo.1f162861.js"),["assets/catalogo.1f162861.js","assets/catalogo.3b92465c.css","assets/gods.1e7260e7.js"])},{path:"/agregar",name:"agregar",component:()=>Ts(()=>import("./agregar.9ddb7eaf.js"),["assets/agregar.9ddb7eaf.js","assets/agregar.16acac91.css","assets/gods.1e7260e7.js"])},{path:"/bugguy",name:"bugguy",component:()=>Ts(()=>import("./bugguy.7285eceb.js"),["assets/bugguy.7285eceb.js","assets/bugguy.0205fe05.css"])},{path:"/ppp/:productId",name:"ppp",component:()=>Ts(()=>import("./ppp.5287e81b.js"),["assets/ppp.5287e81b.js","assets/ppp.5432c7e6.css","assets/gods.1e7260e7.js"])},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>Ts(()=>import("./nada404.4d7d3d27.js"),["assets/nada404.4d7d3d27.js","assets/nada404.de618d7b.css"])}]}),Iu=Uw(dk);Iu.use(Bw());Iu.use(Qk);Iu.mount("#app");export{Tt as F,Eu as _,Y as a,Yk as b,Gn as c,Jn as d,Xv as e,qw as f,Jk as g,xC as h,Kf as i,Zk as j,Xk as k,Dv as l,Ww as m,ro as n,Rt as o,Zt as p,Vs as r,Hf as s,Au as t,FC as u,_s as v,ws as w,MC as y};
