import{r as u,m as d}from"./app-XYcvX45B.js";import{a9 as I,g as k,u as j,V as K,r as Q,aa as Y,m as J,ab as Z,C as R,W as B,c as x,ac as tt,ad as et,ae as z,af as nt,ag as ot}from"./AuthenticatedLayout-Dsx34QZr.js";import{N as it,g as at,h as rt,j as ct,e as st,k as lt,l as dt,n as ft}from"./Table-DHwjyzK4.js";import{R as pt}from"./useForceUpdate-D1UJB1O2.js";const ut=t=>{const{componentCls:e,notificationMarginEdge:o,animationMaxHeight:n}=t,i=`${e}-notice`,a=new I("antNotificationFadeIn",{"0%":{transform:"translate3d(100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}}),l=new I("antNotificationTopFadeIn",{"0%":{top:-n,opacity:0},"100%":{top:0,opacity:1}}),r=new I("antNotificationBottomFadeIn",{"0%":{bottom:t.calc(n).mul(-1).equal(),opacity:0},"100%":{bottom:0,opacity:1}}),c=new I("antNotificationLeftFadeIn",{"0%":{transform:"translate3d(-100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}});return{[e]:{[`&${e}-top, &${e}-bottom`]:{marginInline:0,[i]:{marginInline:"auto auto"}},[`&${e}-top`]:{[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:l}},[`&${e}-bottom`]:{[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:r}},[`&${e}-topRight, &${e}-bottomRight`]:{[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:a}},[`&${e}-topLeft, &${e}-bottomLeft`]:{marginRight:{value:0,_skip_check_:!0},marginLeft:{value:o,_skip_check_:!0},[i]:{marginInlineEnd:"auto",marginInlineStart:0},[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:c}}}}},mt=["top","topLeft","topRight","bottom","bottomLeft","bottomRight"],gt={topLeft:"left",topRight:"right",bottomLeft:"left",bottomRight:"right",top:"left",bottom:"left"},bt=(t,e)=>{const{componentCls:o}=t;return{[`${o}-${e}`]:{[`&${o}-stack > ${o}-notice-wrapper`]:{[e.startsWith("top")?"top":"bottom"]:0,[gt[e]]:{value:0,_skip_check_:!0}}}}},ht=t=>{const e={};for(let o=1;o<t.notificationStackLayer;o++)e[`&:nth-last-child(${o+1})`]={overflow:"hidden",[`& > ${t.componentCls}-notice`]:{opacity:0,transition:`opacity ${t.motionDurationMid}`}};return Object.assign({[`&:not(:nth-last-child(-n+${t.notificationStackLayer}))`]:{opacity:0,overflow:"hidden",color:"transparent",pointerEvents:"none"}},e)},$t=t=>{const e={};for(let o=1;o<t.notificationStackLayer;o++)e[`&:nth-last-child(${o+1})`]={background:t.colorBgBlur,backdropFilter:"blur(10px)","-webkit-backdrop-filter":"blur(10px)"};return Object.assign({},e)},yt=t=>{const{componentCls:e}=t;return Object.assign({[`${e}-stack`]:{[`& > ${e}-notice-wrapper`]:Object.assign({transition:`all ${t.motionDurationSlow}, backdrop-filter 0s`,position:"absolute"},ht(t))},[`${e}-stack:not(${e}-stack-expanded)`]:{[`& > ${e}-notice-wrapper`]:Object.assign({},$t(t))},[`${e}-stack${e}-stack-expanded`]:{[`& > ${e}-notice-wrapper`]:{"&:not(:nth-last-child(-n + 1))":{opacity:1,overflow:"unset",color:"inherit",pointerEvents:"auto",[`& > ${t.componentCls}-notice`]:{opacity:1}},"&:after":{content:'""',position:"absolute",height:t.margin,width:"100%",insetInline:0,bottom:t.calc(t.margin).mul(-1).equal(),background:"transparent",pointerEvents:"auto"}}}},mt.map(o=>bt(t,o)).reduce((o,n)=>Object.assign(Object.assign({},o),n),{}))},D=t=>{const{iconCls:e,componentCls:o,boxShadow:n,fontSizeLG:i,notificationMarginBottom:a,borderRadiusLG:l,colorSuccess:r,colorInfo:c,colorWarning:s,colorError:g,colorTextHeading:p,notificationBg:h,notificationPadding:b,notificationMarginEdge:C,fontSize:y,lineHeight:m,width:S,notificationIconSize:v,colorText:O}=t,f=`${o}-notice`;return{position:"relative",marginBottom:a,marginInlineStart:"auto",background:h,borderRadius:l,boxShadow:n,[f]:{padding:b,width:S,maxWidth:`calc(100vw - ${j(t.calc(C).mul(2).equal())})`,overflow:"hidden",lineHeight:m,wordWrap:"break-word"},[`${f}-message`]:{marginBottom:t.marginXS,color:p,fontSize:i,lineHeight:t.lineHeightLG},[`${f}-description`]:{fontSize:y,color:O},[`${f}-closable ${f}-message`]:{paddingInlineEnd:t.paddingLG},[`${f}-with-icon ${f}-message`]:{marginBottom:t.marginXS,marginInlineStart:t.calc(t.marginSM).add(v).equal(),fontSize:i},[`${f}-with-icon ${f}-description`]:{marginInlineStart:t.calc(t.marginSM).add(v).equal(),fontSize:y},[`${f}-icon`]:{position:"absolute",fontSize:v,lineHeight:1,[`&-success${e}`]:{color:r},[`&-info${e}`]:{color:c},[`&-warning${e}`]:{color:s},[`&-error${e}`]:{color:g}},[`${f}-close`]:Object.assign({position:"absolute",top:t.notificationPaddingVertical,insetInlineEnd:t.notificationPaddingHorizontal,color:t.colorIcon,outline:"none",width:t.notificationCloseButtonSize,height:t.notificationCloseButtonSize,borderRadius:t.borderRadiusSM,transition:`background-color ${t.motionDurationMid}, color ${t.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:t.colorIconHover,backgroundColor:t.colorBgTextHover},"&:active":{backgroundColor:t.colorBgTextActive}},K(t)),[`${f}-btn`]:{float:"right",marginTop:t.marginSM}}},vt=t=>{const{componentCls:e,notificationMarginBottom:o,notificationMarginEdge:n,motionDurationMid:i,motionEaseInOut:a}=t,l=`${e}-notice`,r=new I("antNotificationFadeOut",{"0%":{maxHeight:t.animationMaxHeight,marginBottom:o},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}});return[{[e]:Object.assign(Object.assign({},Q(t)),{position:"fixed",zIndex:t.zIndexPopup,marginRight:{value:n,_skip_check_:!0},[`${e}-hook-holder`]:{position:"relative"},[`${e}-fade-appear-prepare`]:{opacity:"0 !important"},[`${e}-fade-enter, ${e}-fade-appear`]:{animationDuration:t.motionDurationMid,animationTimingFunction:a,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${e}-fade-leave`]:{animationTimingFunction:a,animationFillMode:"both",animationDuration:i,animationPlayState:"paused"},[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationPlayState:"running"},[`${e}-fade-leave${e}-fade-leave-active`]:{animationName:r,animationPlayState:"running"},"&-rtl":{direction:"rtl",[`${l}-btn`]:{float:"left"}}})},{[e]:{[`${l}-wrapper`]:Object.assign({},D(t))}}]},G=t=>({zIndexPopup:t.zIndexPopupBase+Y+50,width:384}),A=t=>{const e=t.paddingMD,o=t.paddingLG;return J(t,{notificationBg:t.colorBgElevated,notificationPaddingVertical:e,notificationPaddingHorizontal:o,notificationIconSize:t.calc(t.fontSizeLG).mul(t.lineHeightLG).equal(),notificationCloseButtonSize:t.calc(t.controlHeightLG).mul(.55).equal(),notificationMarginBottom:t.margin,notificationPadding:`${j(t.paddingMD)} ${j(t.paddingContentHorizontalLG)}`,notificationMarginEdge:t.marginLG,animationMaxHeight:150,notificationStackLayer:3})},W=k("Notification",t=>{const e=A(t);return[vt(e),ut(e),yt(e)]},G),Ct=Z(["Notification","PurePanel"],t=>{const e=`${t.componentCls}-notice`,o=A(t);return{[`${e}-pure-panel`]:Object.assign(Object.assign({},D(o)),{width:o.width,maxWidth:`calc(100vw - ${j(t.calc(o.notificationMarginEdge).mul(2).equal())})`,margin:0})}},G);var St=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(o[n[i]]=t[n[i]]);return o};function _(t,e){return e===null||e===!1?null:e||u.createElement(pt,{className:`${t}-close-icon`})}const xt={success:at,info:rt,error:ct,warning:st},q=t=>{const{prefixCls:e,icon:o,type:n,message:i,description:a,btn:l,role:r="alert"}=t;let c=null;return o?c=u.createElement("span",{className:`${e}-icon`},o):n&&(c=u.createElement(xt[n]||null,{className:x(`${e}-icon`,`${e}-icon-${n}`)})),u.createElement("div",{className:x({[`${e}-with-icon`]:c}),role:r},c,u.createElement("div",{className:`${e}-message`},i),u.createElement("div",{className:`${e}-description`},a),l&&u.createElement("div",{className:`${e}-btn`},l))},Ot=t=>{const{prefixCls:e,className:o,icon:n,type:i,message:a,description:l,btn:r,closable:c=!0,closeIcon:s,className:g}=t,p=St(t,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon","className"]),{getPrefixCls:h}=u.useContext(R),b=e||h("notification"),C=`${b}-notice`,y=B(b),[m,S,v]=W(b,y);return m(u.createElement("div",{className:x(`${C}-pure-panel`,S,o,v,y)},u.createElement(Ct,{prefixCls:b}),u.createElement(it,Object.assign({},p,{prefixCls:b,eventKey:"pure",duration:null,closable:c,className:x({notificationClassName:g}),closeIcon:_(b,s),content:u.createElement(q,{prefixCls:C,icon:n,type:i,message:a,description:l,btn:r})}))))};function Nt(t,e,o){let n;switch(t){case"top":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:e,bottom:"auto"};break;case"topLeft":n={left:0,top:e,bottom:"auto"};break;case"topRight":n={right:0,top:e,bottom:"auto"};break;case"bottom":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:o};break;case"bottomLeft":n={left:0,top:"auto",bottom:o};break;default:n={right:0,top:"auto",bottom:o};break}return n}function It(t){return{motionName:`${t}-fade`}}var Pt=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(o[n[i]]=t[n[i]]);return o};const F=24,wt=4.5,Et="topRight",jt=t=>{let{children:e,prefixCls:o}=t;const n=B(o),[i,a,l]=W(o,n);return i(d.createElement(dt,{classNames:{list:x(a,l,n)}},e))},Mt=(t,e)=>{let{prefixCls:o,key:n}=e;return d.createElement(jt,{prefixCls:o,key:n},t)},Rt=d.forwardRef((t,e)=>{const{top:o,bottom:n,prefixCls:i,getContainer:a,maxCount:l,rtl:r,onAllRemoved:c,stack:s,duration:g}=t,{getPrefixCls:p,getPopupContainer:h,notification:b,direction:C}=u.useContext(R),[,y]=tt(),m=i||p("notification"),S=N=>Nt(N,o??F,n??F),v=()=>x({[`${m}-rtl`]:r??C==="rtl"}),O=()=>It(m),[f,w]=lt({prefixCls:m,style:S,className:v,motion:O,closable:!0,closeIcon:_(m),duration:g??wt,getContainer:()=>(a==null?void 0:a())||(h==null?void 0:h())||document.body,maxCount:l,onAllRemoved:c,renderNotifications:Mt,stack:s===!1?!1:{threshold:typeof s=="object"?s==null?void 0:s.threshold:void 0,offset:8,gap:y.margin}});return d.useImperativeHandle(e,()=>Object.assign(Object.assign({},f),{prefixCls:m,notification:b})),w});function V(t){const e=d.useRef(null);return et(),[d.useMemo(()=>{const n=r=>{var c;if(!e.current)return;const{open:s,prefixCls:g,notification:p}=e.current,h=`${g}-notice`,{message:b,description:C,icon:y,type:m,btn:S,className:v,style:O,role:f="alert",closeIcon:w,closable:N}=r,X=Pt(r,["message","description","icon","type","btn","className","style","role","closeIcon","closable"]),T=_(h,typeof w<"u"?w:p==null?void 0:p.closeIcon);return s(Object.assign(Object.assign({placement:(c=t==null?void 0:t.placement)!==null&&c!==void 0?c:Et},X),{content:d.createElement(q,{prefixCls:h,icon:y,type:m,message:b,description:C,btn:S,role:f}),className:x(m&&`${h}-${m}`,v,p==null?void 0:p.className),style:Object.assign(Object.assign({},p==null?void 0:p.style),O),closeIcon:T,closable:N??!!T}))},a={open:n,destroy:r=>{var c,s;r!==void 0?(c=e.current)===null||c===void 0||c.close(r):(s=e.current)===null||s===void 0||s.destroy()}};return["success","info","warning","error"].forEach(r=>{a[r]=c=>n(Object.assign(Object.assign({},c),{type:r}))}),a},[]),d.createElement(Rt,Object.assign({key:"notification-holder"},t,{ref:e}))]}function _t(t){return V(t)}let $=null,E=t=>t(),M=[],P={};function H(){const{getContainer:t,rtl:e,maxCount:o,top:n,bottom:i}=P,a=(t==null?void 0:t())||document.body;return{getContainer:()=>a,rtl:e,maxCount:o,top:n,bottom:i}}const Lt=d.forwardRef((t,e)=>{const{notificationConfig:o,sync:n}=t,{getPrefixCls:i}=u.useContext(R),a=P.prefixCls||i("notification"),l=u.useContext(ft),[r,c]=V(Object.assign(Object.assign(Object.assign({},o),{prefixCls:a}),l.notification));return d.useEffect(n,[]),d.useImperativeHandle(e,()=>{const s=Object.assign({},r);return Object.keys(s).forEach(g=>{s[g]=function(){return n(),r[g].apply(r,arguments)}}),{instance:s,sync:n}}),c}),Tt=d.forwardRef((t,e)=>{const[o,n]=d.useState(H),i=()=>{n(H)};d.useEffect(i,[]);const a=z(),l=a.getRootPrefixCls(),r=a.getIconPrefixCls(),c=a.getTheme(),s=d.createElement(Lt,{ref:e,sync:i,notificationConfig:o});return d.createElement(ot,{prefixCls:l,iconPrefixCls:r,theme:c},a.holderRender?a.holderRender(s):s)});function L(){if(!$){const t=document.createDocumentFragment(),e={fragment:t};$=e,E(()=>{nt(d.createElement(Tt,{ref:o=>{const{instance:n,sync:i}=o||{};Promise.resolve().then(()=>{!e.instance&&n&&(e.instance=n,e.sync=i,L())})}}),t)});return}$.instance&&(M.forEach(t=>{switch(t.type){case"open":{E(()=>{$.instance.open(Object.assign(Object.assign({},P),t.config))});break}case"destroy":E(()=>{$==null||$.instance.destroy(t.key)});break}}),M=[])}function Ft(t){P=Object.assign(Object.assign({},P),t),E(()=>{var e;(e=$==null?void 0:$.sync)===null||e===void 0||e.call($)})}function U(t){z(),M.push({type:"open",config:t}),L()}const Ht=t=>{M.push({type:"destroy",key:t}),L()},Bt=["success","info","warning","error"],zt={open:U,destroy:Ht,config:Ft,useNotification:_t,_InternalPanelDoNotUseOrYouWillBeFired:Ot},Dt=zt;Bt.forEach(t=>{Dt[t]=e=>U(Object.assign(Object.assign({},e),{type:t}))});export{Dt as s};
