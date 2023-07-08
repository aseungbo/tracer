import{ar as U,B as Z,t as L,s as $e,a7 as K,x as A,O as dt,a as V,as as vt,p as Ee,at as ft,T as ee,h as oe,e as mt,j as k,q as d,H as C,f as u,au as ue,m as Le,a6 as gt,z as ce,w as se,r as Ve,Y as ze,X as ht,a0 as H,ai as G,F as Re,av as pe,u as Se,k as F,l as j,U as R,a2 as yt,N as Pe,v as bt,M as pt,Q as Ne,L as St,aw as _t,a5 as Ct,ap as wt,Z as xt,I as ie,ax as kt,ay as It,y as Bt,az as Tt,aA as _e,R as Oe,aB as $t,aC as Ce,D as Et}from"./entry.ac0fdfe4.js";const Ae=["top","bottom"],Lt=["start","end","left","right"];function Vt(e,n){let[a,t]=e.split(" ");return t||(t=U(Ae,a)?"start":U(Lt,a)?"top":"center"),{side:we(a,n),align:we(t,n)}}function we(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}function yn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function bn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function pn(e){return{side:e.align,align:e.side}}function Sn(e){return U(Ae,e.side)?"y":"x"}function N(e){const n=Z("useRender");n.render=e}function zt(e){const n=L(),a=L();if($e){const t=new ResizeObserver(i=>{e==null||e(i,t),i.length&&(a.value=i[0].contentRect)});K(()=>{t.disconnect()}),A(n,(i,s)=>{s&&(t.unobserve(s),a.value=void 0),i&&t.observe(i)},{flush:"post"})}return{resizeRef:n,contentRect:dt(a)}}const te=V(!1)({name:"VDefaultsProvider",props:{defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,n){let{slots:a}=n;const{defaults:t,disabled:i,reset:s,root:r,scoped:l}=vt(e);return Ee(t,{reset:s,root:r,scoped:l,disabled:i}),()=>{var o;return(o=a.default)==null?void 0:o.call(a)}}});function B(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"center center",a=arguments.length>2?arguments[2]:void 0;return V()({name:e,props:{disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:a},origin:{type:String,default:n}},setup(t,i){let{slots:s}=i;const r={onBeforeEnter(l){l.style.transformOrigin=t.origin},onLeave(l){if(t.leaveAbsolute){const{offsetTop:o,offsetLeft:v,offsetWidth:m,offsetHeight:y}=l;l._transitionInitialStyles={position:l.style.position,top:l.style.top,left:l.style.left,width:l.style.width,height:l.style.height},l.style.position="absolute",l.style.top=`${o}px`,l.style.left=`${v}px`,l.style.width=`${m}px`,l.style.height=`${y}px`}t.hideOnLeave&&l.style.setProperty("display","none","important")},onAfterLeave(l){if(t.leaveAbsolute&&(l!=null&&l._transitionInitialStyles)){const{position:o,top:v,left:m,width:y,height:c}=l._transitionInitialStyles;delete l._transitionInitialStyles,l.style.position=o||"",l.style.top=v||"",l.style.left=m||"",l.style.width=y||"",l.style.height=c||""}}};return()=>{const l=t.group?ft:ee;return oe(l,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:r},s.default)}}})}function He(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return V()({name:e,props:{mode:{type:String,default:a},disabled:Boolean},setup(t,i){let{slots:s}=i;return()=>oe(ee,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:n},s.default)}})}function We(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const a=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=mt(`offset-${a}`);return{onBeforeEnter(r){r._parent=r.parentNode,r._initialStyle={transition:r.style.transition,overflow:r.style.overflow,[a]:r.style[a]}},onEnter(r){const l=r._initialStyle;r.style.setProperty("transition","none","important"),r.style.overflow="hidden";const o=`${r[t]}px`;r.style[a]="0",r.offsetHeight,r.style.transition=l.transition,e&&r._parent&&r._parent.classList.add(e),requestAnimationFrame(()=>{r.style[a]=o})},onAfterEnter:s,onEnterCancelled:s,onLeave(r){r._initialStyle={transition:"",overflow:r.style.overflow,[a]:r.style[a]},r.style.overflow="hidden",r.style[a]=`${r[t]}px`,r.offsetHeight,requestAnimationFrame(()=>r.style[a]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(r){e&&r._parent&&r._parent.classList.remove(e),s(r)}function s(r){const l=r._initialStyle[a];r.style.overflow=r._initialStyle.overflow,l!=null&&(r.style[a]=l),delete r._initialStyle}}B("fab-transition","center center","out-in");B("dialog-bottom-transition");B("dialog-top-transition");B("fade-transition");B("scale-transition");B("scroll-x-transition");B("scroll-x-reverse-transition");B("scroll-y-transition");B("scroll-y-reverse-transition");B("slide-x-transition");B("slide-x-reverse-transition");const _n=B("slide-y-transition");B("slide-y-reverse-transition");const Cn=He("expand-transition",We()),wn=He("expand-x-transition",We("",!0));const De=k({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Me(e){return{dimensionStyles:d(()=>({height:C(e.height),maxHeight:C(e.maxHeight),maxWidth:C(e.maxWidth),minHeight:C(e.minHeight),minWidth:C(e.minWidth),width:C(e.width)}))}}function Rt(e){return{aspectStyles:d(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const Pt=V()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...De()},setup(e,n){let{slots:a}=n;const{aspectStyles:t}=Rt(e),{dimensionStyles:i}=Me(e);return N(()=>{var s;return u("div",{class:"v-responsive",style:i.value},[u("div",{class:"v-responsive__sizer",style:t.value},null),(s=a.additional)==null?void 0:s.call(a),a.default&&u("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}});function Nt(e,n){if(!ue)return;const a=n.modifiers||{},t=n.value,{handler:i,options:s}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var y;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;const v=(y=e._observe)==null?void 0:y[n.instance.$.uid];if(!v)return;const m=l.some(c=>c.isIntersecting);i&&(!a.quiet||v.init)&&(!a.once||m||v.init)&&i(m,l,o),m&&a.once?Ge(e,n):v.init=!0},s);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:r},r.observe(e)}function Ge(e,n){var t;const a=(t=e._observe)==null?void 0:t[n.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const Ot={mounted:Nt,unmounted:Ge},At=Ot,Ht=k({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Y=(e,n)=>{let{slots:a}=n;const{transition:t,...i}=e,{component:s=ee,...r}=typeof t=="object"?t:{};return oe(s,Le(typeof t=="string"?{name:t}:r,i),a)},xn=V()({name:"VImg",directives:{intersect:At},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...Ht()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:a,slots:t}=n;const i=L(""),s=L(),r=L(e.eager?"loading":"idle"),l=L(),o=L(),v=d(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=d(()=>v.value.aspect||l.value/o.value||0);A(()=>e.src,()=>{y(r.value!=="idle")}),A(m,(g,x)=>{!g&&x&&s.value&&_(s.value)}),gt(()=>y());function y(g){if(!(e.eager&&g)&&!(ue&&!g&&!e.eager)){if(r.value="loading",v.value.lazySrc){const x=new Image;x.src=v.value.lazySrc,_(x,null)}v.value.src&&ce(()=>{var x,$;if(a("loadstart",((x=s.value)==null?void 0:x.currentSrc)||v.value.src),($=s.value)!=null&&$.complete){if(s.value.naturalWidth||f(),r.value==="error")return;m.value||_(s.value,null),c()}else m.value||_(s.value),p()})}}function c(){var g;p(),r.value="loaded",a("load",((g=s.value)==null?void 0:g.currentSrc)||v.value.src)}function f(){var g;r.value="error",a("error",((g=s.value)==null?void 0:g.currentSrc)||v.value.src)}function p(){const g=s.value;g&&(i.value=g.currentSrc||g.src)}let b=-1;function _(g){let x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const $=()=>{clearTimeout(b);const{naturalHeight:z,naturalWidth:O}=g;z||O?(l.value=O,o.value=z):!g.complete&&r.value==="loading"&&x!=null?b=window.setTimeout($,x):(g.currentSrc.endsWith(".svg")||g.currentSrc.startsWith("data:image/svg+xml"))&&(l.value=1,o.value=1)};$()}const S=d(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),h=()=>{var $;if(!v.value.src||r.value==="idle")return null;const g=u("img",{class:["v-img__img",S.value],src:v.value.src,srcset:v.value.srcset,alt:e.alt,sizes:e.sizes,ref:s,onLoad:c,onError:f},null),x=($=t.sources)==null?void 0:$.call(t);return u(Y,{transition:e.transition,appear:!0},{default:()=>[se(x?u("picture",{class:"v-img__picture"},[x,g]):g,[[ht,r.value==="loaded"]])]})},w=()=>u(Y,{transition:e.transition},{default:()=>[v.value.lazySrc&&r.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",S.value],src:v.value.lazySrc,alt:e.alt},null)]}),T=()=>t.placeholder?u(Y,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!t.error)&&u("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,E=()=>t.error?u(Y,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&u("div",{class:"v-img__error"},[t.error()])]}):null,P=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,W=L(!1);{const g=A(m,x=>{x&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{W.value=!0})}),g())})}return N(()=>se(u(Pt,{class:["v-img",{"v-img--booting":!W.value}],style:{width:C(e.width==="auto"?l.value:e.width)},aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>u(ze,null,[u(h,null,null),u(w,null,null),u(P,null,null),u(T,null,null),u(E,null,null)]),default:t.default}),[[Ve("intersect"),{handler:y,options:e.options},null,{once:!0}]])),{currentSrc:i,image:s,state:r,naturalWidth:l,naturalHeight:o}}}),q=k({tag:{type:String,default:"div"}},"tag"),Fe=k({border:[Boolean,Number,String]},"border");function je(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H();return{borderClasses:d(()=>{const t=G(e)?e.value:e.border,i=[];if(t===!0||t==="")i.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const s of String(t).split(" "))i.push(`border-${s}`);return i})}}const qe=k({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function Xe(e){return{elevationClasses:d(()=>{const a=G(e)?e.value:e.elevation,t=[];return a==null||t.push(`elevation-${a}`),t})}}const de=k({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function ve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H();return{roundedClasses:d(()=>{const t=G(e)?e.value:e.rounded,i=[];if(t===!0||t==="")i.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const s of String(t).split(" "))i.push(`rounded-${s}`);return i})}}function fe(e){return Re(()=>{const n=[],a={};return e.value.background&&(pe(e.value.background)?a.backgroundColor=e.value.background:n.push(`bg-${e.value.background}`)),e.value.text&&(pe(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:a}})}function J(e,n){const a=d(()=>({text:G(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:i}=fe(a);return{textColorClasses:t,textColorStyles:i}}function xe(e,n){const a=d(()=>({background:G(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:i}=fe(a);return{backgroundColorClasses:t,backgroundColorStyles:i}}const Wt=[null,"default","comfortable","compact"],Ye=k({density:{type:String,default:"default",validator:e=>Wt.includes(e)}},"density");function Ue(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H();return{densityClasses:d(()=>`${n}--density-${e.density}`)}}const Dt=["elevated","flat","tonal","outlined","text","plain"];function Mt(e,n){return u(ze,null,[e&&u("span",{key:"overlay",class:`${n}__overlay`},null),u("span",{key:"underlay",class:`${n}__underlay`},null)])}const Je=k({color:String,variant:{type:String,default:"elevated",validator:e=>Dt.includes(e)}},"variant");function Gt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H();const a=d(()=>{const{variant:s}=Se(e);return`${n}--variant-${s}`}),{colorClasses:t,colorStyles:i}=fe(d(()=>{const{variant:s,color:r}=Se(e);return{[["elevated","flat"].includes(s)?"background":"text"]:r}}));return{colorClasses:t,colorStyles:i,variantClasses:a}}const Qe=k({divided:Boolean,...Fe(),...Ye(),...qe(),...de(),...q(),...F(),...Je()},"v-btn-group"),ke=V()({name:"VBtnGroup",props:Qe(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=j(e),{densityClasses:i}=Ue(e),{borderClasses:s}=je(e),{elevationClasses:r}=Xe(e),{roundedClasses:l}=ve(e);Ee({VBtn:{height:"auto",color:R(e,"color"),density:R(e,"density"),flat:!0,variant:R(e,"variant")}}),N(()=>u(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,s.value,i.value,r.value,l.value]},a))}}),Ft=k({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),jt=k({value:null,disabled:Boolean,selectedClass:String},"group-item");function qt(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=Z("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=yt();Pe(Symbol.for(`${n.description}:id`),i);const s=bt(n,null);if(!s){if(!a)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const r=R(e,"value"),l=d(()=>s.disabled.value||e.disabled);s.register({id:i,value:r,disabled:l},t),K(()=>{s.unregister(i)});const o=d(()=>s.isSelected(i)),v=d(()=>o.value&&[s.selectedClass.value,e.selectedClass]);return A(o,m=>{t.emit("group:selected",{value:m})}),{id:i,isSelected:o,toggle:()=>s.select(i,!o.value),select:m=>s.select(i,m),selectedClass:v,value:r,disabled:l,group:s}}function Xt(e,n){let a=!1;const t=pt([]),i=Ne(e,"modelValue",[],c=>c==null?[]:Ze(t,Ct(c)),c=>{const f=Ut(t,c);return e.multiple?f:f[0]}),s=Z("useGroup");function r(c,f){const p=c,b=Symbol.for(`${n.description}:id`),S=wt(b,s==null?void 0:s.vnode).indexOf(f);S>-1?t.splice(S,0,p):t.push(p)}function l(c){if(a)return;o();const f=t.findIndex(p=>p.id===c);t.splice(f,1)}function o(){const c=t.find(f=>!f.disabled);c&&e.mandatory==="force"&&!i.value.length&&(i.value=[c.id])}St(()=>{o()}),K(()=>{a=!0});function v(c,f){const p=t.find(b=>b.id===c);if(!(f&&(p!=null&&p.disabled)))if(e.multiple){const b=i.value.slice(),_=b.findIndex(h=>h===c),S=~_;if(f=f??!S,S&&e.mandatory&&b.length<=1||!S&&e.max!=null&&b.length+1>e.max)return;_<0&&f?b.push(c):_>=0&&!f&&b.splice(_,1),i.value=b}else{const b=i.value.includes(c);if(e.mandatory&&b)return;i.value=f??!b?[c]:[]}}function m(c){if(e.multiple&&xt('This method is not supported when using "multiple" prop'),i.value.length){const f=i.value[0],p=t.findIndex(S=>S.id===f);let b=(p+c)%t.length,_=t[b];for(;_.disabled&&b!==p;)b=(b+c)%t.length,_=t[b];if(_.disabled)return;i.value=[t[b].id]}else{const f=t.find(p=>!p.disabled);f&&(i.value=[f.id])}}const y={register:r,unregister:l,selected:i,select:v,disabled:R(e,"disabled"),prev:()=>m(t.length-1),next:()=>m(1),isSelected:c=>i.value.includes(c),selectedClass:d(()=>e.selectedClass),items:d(()=>t),getItemIndex:c=>Yt(t,c)};return Pe(n,y),y}function Yt(e,n){const a=Ze(e,[n]);return a.length?e.findIndex(t=>t.id===a[0]):-1}function Ze(e,n){const a=[];for(let t=0;t<e.length;t++){const i=e[t];i.value!=null?n.find(s=>_t(s,i.value))!=null&&a.push(i.id):n.includes(t)&&a.push(i.id)}return a}function Ut(e,n){const a=[];for(let t=0;t<e.length;t++){const i=e[t];n.includes(i.id)&&a.push(i.value!=null?i.value:t)}return a}const Ke=Symbol.for("vuetify:v-btn-toggle");V()({name:"VBtnToggle",props:{...Qe(),...Ft()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isSelected:t,next:i,prev:s,select:r,selected:l}=Xt(e,Ke);return N(()=>{const[o]=ke.filterProps(e);return u(ke,Le({class:"v-btn-toggle"},o),{default:()=>{var v;return[(v=a.default)==null?void 0:v.call(a,{isSelected:t,next:i,prev:s,select:r,selected:l})]}})}),{next:i,prev:s,select:r}}});const Jt=["x-small","small","default","large","x-large"],me=k({size:{type:[String,Number],default:"default"}},"size");function ge(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H();return Re(()=>{let a,t;return U(Jt,e.size)?a=`${n}--size-${e.size}`:e.size&&(t={width:C(e.size),height:C(e.size)}),{sizeClasses:a,sizeStyles:t}})}const Qt=k({color:String,start:Boolean,end:Boolean,icon:ie,...me(),...q({tag:"i"}),...F()},"v-icon"),ne=V()({name:"VIcon",props:Qt(),setup(e,n){let{attrs:a,slots:t}=n,i;t.default&&(i=d(()=>{var y,c;const m=(y=t.default)==null?void 0:y.call(t);if(m)return(c=m.filter(f=>f.type===kt&&f.children&&typeof f.children=="string")[0])==null?void 0:c.children}));const{themeClasses:s}=j(e),{iconData:r}=It(i||e),{sizeClasses:l}=ge(e),{textColorClasses:o,textColorStyles:v}=J(R(e,"color"));return N(()=>u(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",s.value,l.value,o.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[l.value?void 0:{fontSize:C(e.size),height:C(e.size),width:C(e.size)},v.value],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>{var m;return[(m=t.default)==null?void 0:m.call(t)]}})),{}}});function et(e){const n=L(),a=L(!1);if(ue){const t=new IntersectionObserver(i=>{e==null||e(i,t),a.value=!!i.find(s=>s.isIntersecting)});K(()=>{t.disconnect()}),A(n,(i,s)=>{s&&(t.unobserve(s),a.value=!1),i&&t.observe(i)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const Zt=V()({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...me(),...q({tag:"div"}),...F()},setup(e,n){let{slots:a}=n;const t=20,i=2*Math.PI*t,s=L(),{themeClasses:r}=j(e),{sizeClasses:l,sizeStyles:o}=ge(e),{textColorClasses:v,textColorStyles:m}=J(R(e,"color")),{textColorClasses:y,textColorStyles:c}=J(R(e,"bgColor")),{intersectionRef:f,isIntersecting:p}=et(),{resizeRef:b,contentRect:_}=zt(),S=d(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),h=d(()=>Number(e.width)),w=d(()=>o.value?Number(e.size):_.value?_.value.width:Math.max(h.value,32)),T=d(()=>t/(1-h.value/w.value)*2),E=d(()=>h.value/w.value*T.value),P=d(()=>C((100-S.value)/100*i));return Bt(()=>{f.value=s.value,b.value=s.value}),N(()=>u(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":p.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},r.value,l.value,v.value],style:[o.value,m.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[u("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${T.value} ${T.value}`},[u("circle",{class:["v-progress-circular__underlay",y.value],style:c.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":E.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),u("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":E.value,"stroke-dasharray":i,"stroke-dashoffset":P.value},null)]),a.default&&u("div",{class:"v-progress-circular__content"},[a.default({value:S.value})])]})),{}}});const re=Symbol("rippleStop"),Kt=80;function Ie(e,n){e.style.transform=n,e.style.webkitTransform=n}function le(e){return e.constructor.name==="TouchEvent"}function tt(e){return e.constructor.name==="KeyboardEvent"}const en=function(e,n){var y;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,i=0;if(!tt(e)){const c=n.getBoundingClientRect(),f=le(e)?e.touches[e.touches.length-1]:e;t=f.clientX-c.left,i=f.clientY-c.top}let s=0,r=.3;(y=n._ripple)!=null&&y.circle?(r=.15,s=n.clientWidth/2,s=a.center?s:s+Math.sqrt((t-s)**2+(i-s)**2)/4):s=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const l=`${(n.clientWidth-s*2)/2}px`,o=`${(n.clientHeight-s*2)/2}px`,v=a.center?l:`${t-s}px`,m=a.center?o:`${i-s}px`;return{radius:s,scale:r,x:v,y:m,centerX:l,centerY:o}},Q={show(e,n){var f;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=n==null?void 0:n._ripple)!=null&&f.enabled))return;const t=document.createElement("span"),i=document.createElement("span");t.appendChild(i),t.className="v-ripple__container",a.class&&(t.className+=` ${a.class}`);const{radius:s,scale:r,x:l,y:o,centerX:v,centerY:m}=en(e,n,a),y=`${s*2}px`;i.className="v-ripple__animation",i.style.width=y,i.style.height=y,n.appendChild(t);const c=window.getComputedStyle(n);c&&c.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),Ie(i,`translate(${l}, ${o}) scale3d(${r},${r},${r})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),Ie(i,`translate(${v}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const a=n[n.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const t=performance.now()-Number(a.dataset.activated),i=Math.max(250-t,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var l;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((l=a.parentNode)==null?void 0:l.parentNode)===e&&e.removeChild(a.parentNode)},300)},i)}};function nt(e){return typeof e>"u"||!!e}function D(e){const n={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[re])){if(e[re]=!0,le(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(n.center=a._ripple.centered||tt(e),a._ripple.class&&(n.class=a._ripple.class),le(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{Q.show(e,a,n)},a._ripple.showTimer=window.setTimeout(()=>{var t;(t=a==null?void 0:a._ripple)!=null&&t.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},Kt)}else Q.show(e,a,n)}}function Be(e){e[re]=!0}function I(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{I(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),Q.hide(n)}}function at(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let M=!1;function st(e){!M&&(e.keyCode===_e.enter||e.keyCode===_e.space)&&(M=!0,D(e))}function it(e){M=!1,I(e)}function rt(e){M&&(M=!1,I(e))}function lt(e,n,a){const{value:t,modifiers:i}=n,s=nt(t);if(s||Q.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,Tt(t)&&t.class&&(e._ripple.class=t.class),s&&!a){if(i.stop){e.addEventListener("touchstart",Be,{passive:!0}),e.addEventListener("mousedown",Be);return}e.addEventListener("touchstart",D,{passive:!0}),e.addEventListener("touchend",I,{passive:!0}),e.addEventListener("touchmove",at,{passive:!0}),e.addEventListener("touchcancel",I),e.addEventListener("mousedown",D),e.addEventListener("mouseup",I),e.addEventListener("mouseleave",I),e.addEventListener("keydown",st),e.addEventListener("keyup",it),e.addEventListener("blur",rt),e.addEventListener("dragstart",I,{passive:!0})}else!s&&a&&ot(e)}function ot(e){e.removeEventListener("mousedown",D),e.removeEventListener("touchstart",D),e.removeEventListener("touchend",I),e.removeEventListener("touchmove",at),e.removeEventListener("touchcancel",I),e.removeEventListener("mouseup",I),e.removeEventListener("mouseleave",I),e.removeEventListener("keydown",st),e.removeEventListener("keyup",it),e.removeEventListener("dragstart",I),e.removeEventListener("blur",rt)}function tn(e,n){lt(e,n,!1)}function nn(e){delete e._ripple,ot(e)}function an(e,n){if(n.value===n.oldValue)return;const a=nt(n.oldValue);lt(e,n,a)}const sn={mounted:tn,unmounted:nn,updated:an};const Te={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},ut=k({location:String},"location");function ct(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=Oe();return{locationStyles:d(()=>{if(!e.location)return{};const{side:s,align:r}=Vt(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function l(v){return a?a(v):0}const o={};return s!=="center"&&(n?o[Te[s]]=`calc(100% - ${l(s)}px)`:o[s]=0),r!=="center"?n?o[Te[r]]=`calc(100% - ${l(r)}px)`:o[r]=0:(s==="center"?o.top=o.left="50%":o[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",o.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),o})}}const rn=V()({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...ut({location:"top"}),...de(),...q(),...F()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const t=Ne(e,"modelValue"),{isRtl:i}=Oe(),{themeClasses:s}=j(e),{locationStyles:r}=ct(e),{textColorClasses:l,textColorStyles:o}=J(e,"color"),{backgroundColorClasses:v,backgroundColorStyles:m}=xe(d(()=>e.bgColor||e.color)),{backgroundColorClasses:y,backgroundColorStyles:c}=xe(e,"color"),{roundedClasses:f}=ve(e),{intersectionRef:p,isIntersecting:b}=et(),_=d(()=>parseInt(e.max,10)),S=d(()=>parseInt(e.height,10)),h=d(()=>parseFloat(e.bufferValue)/_.value*100),w=d(()=>parseFloat(t.value)/_.value*100),T=d(()=>i.value!==e.reverse),E=d(()=>e.indeterminate?"fade-transition":"slide-x-transition"),P=d(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function W(g){if(!p.value)return;const{left:x,right:$,width:z}=p.value.getBoundingClientRect(),O=T.value?z-g.clientX+($-z):g.clientX-x;t.value=Math.round(O/z*_.value)}return N(()=>u(e.tag,{ref:p,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&b.value,"v-progress-linear--reverse":T.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},f.value,s.value],style:{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?C(S.value):0,"--v-progress-linear-height":C(S.value),...r.value},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:w.value,onClick:e.clickable&&W},{default:()=>[e.stream&&u("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...o.value,[T.value?"left":"right"]:C(-S.value),borderTop:`${C(S.value/2)} dotted`,opacity:P.value,top:`calc(50% - ${C(S.value/4)})`,width:C(100-h.value,"%"),"--v-progress-linear-stream-to":C(S.value*(T.value?1:-1))}},null),u("div",{class:["v-progress-linear__background",v.value],style:[m.value,{opacity:P.value,width:C(e.stream?h.value:100,"%")}]},null),u(ee,{name:E.value},{default:()=>[e.indeterminate?u("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(g=>u("div",{key:g,class:["v-progress-linear__indeterminate",g,y.value],style:c.value},null))]):u("div",{class:["v-progress-linear__determinate",y.value],style:[c.value,{width:C(w.value,"%")}]},null)]}),a.default&&u("div",{class:"v-progress-linear__content"},[a.default({value:w.value,buffer:h.value})])]})),{}}}),ln=k({loading:[Boolean,String]},"loader");function on(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H();return{loaderClasses:d(()=>({[`${n}--loading`]:e.loading}))}}function kn(e,n){var t;let{slots:a}=n;return u("div",{class:`${e.name}__loader`},[((t=a.default)==null?void 0:t.call(a,{color:e.color,isActive:e.active}))||u(rn,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const un=["static","relative","fixed","absolute","sticky"],cn=k({position:{type:String,validator:e=>un.includes(e)}},"position");function dn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H();return{positionClasses:d(()=>e.position?`${n}--${e.position}`:void 0)}}function In(){var e,n;return(n=(e=Z("useRouter"))==null?void 0:e.proxy)==null?void 0:n.$router}function vn(e,n){const a=$t("RouterLink"),t=d(()=>!!(e.href||e.to)),i=d(()=>(t==null?void 0:t.value)||Ce(n,"click")||Ce(e,"click"));if(typeof a=="string")return{isLink:t,isClickable:i,href:R(e,"href")};const s=e.to?a.useLink(e):void 0;return{isLink:t,isClickable:i,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&d(()=>{var r,l;return e.exact?(r=s.isExactActive)==null?void 0:r.value:(l=s.isActive)==null?void 0:l.value}),href:d(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const fn=k({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let ae=!1;function Bn(e,n){let a=!1,t,i;$e&&(ce(()=>{window.addEventListener("popstate",s),t=e==null?void 0:e.beforeEach((r,l,o)=>{ae?a?n(o):o():setTimeout(()=>a?n(o):o()),ae=!0}),i=e==null?void 0:e.afterEach(()=>{ae=!1})}),Et(()=>{window.removeEventListener("popstate",s),t==null||t(),i==null||i()}));function s(r){var l;(l=r.state)!=null&&l.replaced||(a=!0,setTimeout(()=>a=!1))}}function mn(e,n){A(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&n&&ce(()=>{n(!0)})},{immediate:!0})}const gn=k({active:{type:Boolean,default:void 0},symbol:{type:null,default:Ke},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ie,appendIcon:ie,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...Fe(),...de(),...Ye(),...De(),...qe(),...jt(),...ln(),...ut(),...cn(),...fn(),...me(),...q({tag:"button"}),...F(),...Je({variant:"elevated"})},"VBtn"),Tn=V()({name:"VBtn",directives:{Ripple:sn},props:gn(),emits:{"group:selected":e=>!0},setup(e,n){let{attrs:a,slots:t}=n;const{themeClasses:i}=j(e),{borderClasses:s}=je(e),{colorClasses:r,colorStyles:l,variantClasses:o}=Gt(e),{densityClasses:v}=Ue(e),{dimensionStyles:m}=Me(e),{elevationClasses:y}=Xe(e),{loaderClasses:c}=on(e),{locationStyles:f}=ct(e),{positionClasses:p}=dn(e),{roundedClasses:b}=ve(e),{sizeClasses:_,sizeStyles:S}=ge(e),h=qt(e,e.symbol,!1),w=vn(e,a),T=d(()=>{var g;return e.active!==void 0?e.active:w.isLink.value?(g=w.isActive)==null?void 0:g.value:h==null?void 0:h.isSelected.value}),E=d(()=>(h==null?void 0:h.disabled.value)||e.disabled),P=d(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),W=d(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});return mn(w,h==null?void 0:h.select),N(()=>{var he,ye;const g=w.isLink.value?"a":e.tag,x=!!(e.prependIcon||t.prepend),$=!!(e.appendIcon||t.append),z=!!(e.icon&&e.icon!==!0),O=(h==null?void 0:h.isSelected.value)&&(!w.isLink.value||((he=w.isActive)==null?void 0:he.value))||!h||((ye=w.isActive)==null?void 0:ye.value);return se(u(g,{type:g==="a"?void 0:"button",class:["v-btn",h==null?void 0:h.selectedClass.value,{"v-btn--active":T.value,"v-btn--block":e.block,"v-btn--disabled":E.value,"v-btn--elevated":P.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},i.value,s.value,O?r.value:void 0,v.value,y.value,c.value,p.value,b.value,_.value,o.value],style:[O?l.value:void 0,m.value,f.value,S.value],disabled:E.value||void 0,href:w.href.value,onClick:X=>{var be;E.value||((be=w.navigate)==null||be.call(w,X),h==null||h.toggle())},value:W.value},{default:()=>{var X;return[Mt(!0,"v-btn"),!e.icon&&x&&u("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?u(te,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):u(ne,{key:"prepend-icon",icon:e.prependIcon},null)]),u("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&z?u(ne,{key:"content-icon",icon:e.icon},null):u(te,{key:"content-defaults",disabled:!z,defaults:{VIcon:{icon:e.icon}}},t.default)]),!e.icon&&$&&u("span",{key:"append",class:"v-btn__append"},[t.append?u(te,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):u(ne,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&u("span",{key:"loader",class:"v-btn__loader"},[((X=t.loader)==null?void 0:X.call(t))??u(Zt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Ve("ripple"),!E.value&&e.ripple,null]])}),{}}});export{vn as A,Vt as B,yn as C,bn as D,pn as E,Sn as F,Ht as G,xe as H,In as I,Bn as J,J as K,kn as L,Y as M,wn as N,_n as O,At as P,Tn as Q,sn as R,zt as S,Cn as T,xn as V,de as a,me as b,q as c,Je as d,Gt as e,Ue as f,ve as g,ge as h,ne as i,Mt as j,te as k,Fe as l,Ye as m,De as n,qe as o,ln as p,ut as q,cn as r,fn as s,je as t,N as u,Me as v,Xe as w,on as x,ct as y,dn as z};