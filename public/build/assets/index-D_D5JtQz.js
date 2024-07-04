import{g as z,m as W,W as M,r as B,X as L,C as F,F as _,c as j,ag as U,$ as V,a0 as H,a1 as X,k as K,a2 as Y}from"./AuthenticatedLayout-NK43SbJu.js";import{r as i,R as b}from"./app-WTHt1LSi.js";import{N as Q,h as q,g as J,j as Z,e as ee,k as ne,l as te,A as oe}from"./Table-D1yEHtpt.js";import{R as se}from"./useForceUpdate-DnUyU4Vs.js";const re=e=>{const{componentCls:n,iconCls:s,boxShadow:t,colorText:o,colorSuccess:r,colorError:p,colorWarning:d,colorInfo:c,fontSizeLG:a,motionEaseInOutCirc:u,motionDurationSlow:l,marginXS:C,paddingXS:m,borderRadiusLG:g,zIndexPopup:v,contentPadding:x,contentBg:P}=e,$=`${n}-notice`,O=new M("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:m,transform:"translateY(0)",opacity:1}}),E=new M("MessageMoveOut",{"0%":{maxHeight:e.height,padding:m,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),y={padding:m,textAlign:"center",[`${n}-custom-content > ${s}`]:{verticalAlign:"text-bottom",marginInlineEnd:C,fontSize:a},[`${$}-content`]:{display:"inline-block",padding:x,background:P,borderRadius:g,boxShadow:t,pointerEvents:"all"},[`${n}-success > ${s}`]:{color:r},[`${n}-error > ${s}`]:{color:p},[`${n}-warning > ${s}`]:{color:d},[`${n}-info > ${s},
      ${n}-loading > ${s}`]:{color:c}};return[{[n]:Object.assign(Object.assign({},B(e)),{color:o,position:"fixed",top:C,width:"100%",pointerEvents:"none",zIndex:v,[`${n}-move-up`]:{animationFillMode:"forwards"},[`
        ${n}-move-up-appear,
        ${n}-move-up-enter
      `]:{animationName:O,animationDuration:l,animationPlayState:"paused",animationTimingFunction:u},[`
        ${n}-move-up-appear${n}-move-up-appear-active,
        ${n}-move-up-enter${n}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${n}-move-up-leave`]:{animationName:E,animationDuration:l,animationPlayState:"paused",animationTimingFunction:u},[`${n}-move-up-leave${n}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[n]:{[`${$}-wrapper`]:Object.assign({},y)}},{[`${n}-notice-pure-panel`]:Object.assign(Object.assign({},y),{padding:0,textAlign:"start"})}]},ae=e=>({zIndexPopup:e.zIndexPopupBase+L+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`}),D=z("Message",e=>{const n=W(e,{height:150});return[re(n)]},ae);var ce=function(e,n){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(s[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(s[t[o]]=e[t[o]]);return s};const ie={info:i.createElement(q,null),success:i.createElement(J,null),error:i.createElement(Z,null),warning:i.createElement(ee,null),loading:i.createElement(U,null)},G=e=>{let{prefixCls:n,type:s,icon:t,children:o}=e;return i.createElement("div",{className:j(`${n}-custom-content`,`${n}-${s}`)},t||ie[s],i.createElement("span",null,o))},le=e=>{const{prefixCls:n,className:s,type:t,icon:o,content:r}=e,p=ce(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:d}=i.useContext(F),c=n||d("message"),a=_(c),[u,l,C]=D(c,a);return u(i.createElement(Q,Object.assign({},p,{prefixCls:c,className:j(s,l,`${c}-notice-pure-panel`,C,a),eventKey:"pure",duration:null,content:i.createElement(G,{prefixCls:c,type:t,icon:o},r)})))};function ue(e,n){return{motionName:n??`${e}-move-up`}}function R(e){let n;const s=new Promise(o=>{n=e(()=>{o(!0)})}),t=()=>{n==null||n()};return t.then=(o,r)=>s.then(o,r),t.promise=s,t}var pe=function(e,n){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(s[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(s[t[o]]=e[t[o]]);return s};const de=8,ge=3,fe=e=>{let{children:n,prefixCls:s}=e;const t=_(s),[o,r,p]=D(s,t);return o(i.createElement(te,{classNames:{list:j(r,p,t)}},n))},me=(e,n)=>{let{prefixCls:s,key:t}=n;return i.createElement(fe,{prefixCls:s,key:t},e)},ve=i.forwardRef((e,n)=>{const{top:s,prefixCls:t,getContainer:o,maxCount:r,duration:p=ge,rtl:d,transitionName:c,onAllRemoved:a}=e,{getPrefixCls:u,getPopupContainer:l,message:C,direction:m}=i.useContext(F),g=t||u("message"),v=()=>({left:"50%",transform:"translateX(-50%)",top:s??de}),x=()=>j({[`${g}-rtl`]:d??m==="rtl"}),P=()=>ue(g,c),$=i.createElement("span",{className:`${g}-close-x`},i.createElement(se,{className:`${g}-close-icon`})),[O,E]=ne({prefixCls:g,style:v,className:x,motion:P,closable:!1,closeIcon:$,duration:p,getContainer:()=>(o==null?void 0:o())||(l==null?void 0:l())||document.body,maxCount:r,onAllRemoved:a,renderNotifications:me});return i.useImperativeHandle(n,()=>Object.assign(Object.assign({},O),{prefixCls:g,message:C})),E});let A=0;function k(e){const n=i.useRef(null);return V(),[i.useMemo(()=>{const t=c=>{var a;(a=n.current)===null||a===void 0||a.close(c)},o=c=>{if(!n.current){const w=()=>{};return w.then=()=>{},w}const{open:a,prefixCls:u,message:l}=n.current,C=`${u}-notice`,{content:m,icon:g,type:v,key:x,className:P,style:$,onClose:O}=c,E=pe(c,["content","icon","type","key","className","style","onClose"]);let y=x;return y==null&&(A+=1,y=`antd-message-${A}`),R(w=>(a(Object.assign(Object.assign({},E),{key:y,content:i.createElement(G,{prefixCls:u,type:v,icon:g},m),placement:"top",className:j(v&&`${C}-${v}`,P,l==null?void 0:l.className),style:Object.assign(Object.assign({},l==null?void 0:l.style),$),onClose:()=>{O==null||O(),w()}})),()=>{t(y)}))},p={open:o,destroy:c=>{var a;c!==void 0?t(c):(a=n.current)===null||a===void 0||a.destroy()}};return["info","success","warning","error","loading"].forEach(c=>{const a=(u,l,C)=>{let m;u&&typeof u=="object"&&"content"in u?m=u:m={content:u};let g,v;typeof l=="function"?v=l:(g=l,v=C);const x=Object.assign(Object.assign({onClose:v,duration:g},m),{type:c});return o(x)};p[c]=a}),p},[]),i.createElement(ve,Object.assign({key:"message-holder"},e,{ref:n}))]}function Ce(e){return k(e)}let f=null,h=e=>e(),I=[],S={};function T(){const{getContainer:e,duration:n,rtl:s,maxCount:t,top:o}=S,r=(e==null?void 0:e())||document.body;return{getContainer:()=>r,duration:n,rtl:s,maxCount:t,top:o}}const ye=b.forwardRef((e,n)=>{const{messageConfig:s,sync:t}=e,{getPrefixCls:o}=i.useContext(F),r=S.prefixCls||o("message"),p=i.useContext(oe),[d,c]=k(Object.assign(Object.assign(Object.assign({},s),{prefixCls:r}),p.message));return b.useImperativeHandle(n,()=>{const a=Object.assign({},d);return Object.keys(a).forEach(u=>{a[u]=function(){return t(),d[u].apply(d,arguments)}}),{instance:a,sync:t}}),c}),be=b.forwardRef((e,n)=>{const[s,t]=b.useState(T),o=()=>{t(T)};b.useEffect(o,[]);const r=H(),p=r.getRootPrefixCls(),d=r.getIconPrefixCls(),c=r.getTheme(),a=b.createElement(ye,{ref:n,sync:o,messageConfig:s});return b.createElement(Y,{prefixCls:p,iconPrefixCls:d,theme:c},r.holderRender?r.holderRender(a):a)});function N(){if(!f){const e=document.createDocumentFragment(),n={fragment:e};f=n,h(()=>{X(b.createElement(be,{ref:s=>{const{instance:t,sync:o}=s||{};Promise.resolve().then(()=>{!n.instance&&t&&(n.instance=t,n.sync=o,N())})}}),e)});return}f.instance&&(I.forEach(e=>{const{type:n,skipped:s}=e;if(!s)switch(n){case"open":{h(()=>{const t=f.instance.open(Object.assign(Object.assign({},S),e.config));t==null||t.then(e.resolve),e.setCloseFn(t)});break}case"destroy":h(()=>{f==null||f.instance.destroy(e.key)});break;default:h(()=>{var t;const o=(t=f.instance)[n].apply(t,K(e.args));o==null||o.then(e.resolve),e.setCloseFn(o)})}}),I=[])}function xe(e){S=Object.assign(Object.assign({},S),e),h(()=>{var n;(n=f==null?void 0:f.sync)===null||n===void 0||n.call(f)})}function Oe(e){const n=R(s=>{let t;const o={type:"open",config:e,resolve:s,setCloseFn:r=>{t=r}};return I.push(o),()=>{t?h(()=>{t()}):o.skipped=!0}});return N(),n}function he(e,n){H();const s=R(t=>{let o;const r={type:e,args:n,resolve:t,setCloseFn:p=>{o=p}};return I.push(r),()=>{o?h(()=>{o()}):r.skipped=!0}});return N(),s}const $e=e=>{I.push({type:"destroy",key:e}),N()},Pe=["success","info","warning","error","loading"],Ee={open:Oe,destroy:$e,config:xe,useMessage:Ce,_InternalPanelDoNotUseOrYouWillBeFired:le},Ie=Ee;Pe.forEach(e=>{Ie[e]=function(){for(var n=arguments.length,s=new Array(n),t=0;t<n;t++)s[t]=arguments[t];return he(e,s)}});export{Ie as s};
