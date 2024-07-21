import{r as l}from"./app-WTHt1LSi.js";import{u as R}from"./useForceUpdate-DnUyU4Vs.js";import{g as z,m as D,r as F,C as I,c as P,V as H,Q as M}from"./AuthenticatedLayout-NK43SbJu.js";import{S as _}from"./Skeleton-NKsi4xZD.js";const L=t=>{const{value:n,formatter:r,precision:e,decimalSeparator:o,groupSeparator:i="",prefixCls:u}=t;let a;if(typeof r=="function")a=r(n);else{const c=String(n),m=c.match(/^(-?)(\d*)(\.(\d+))?$/);if(!m||c==="-")a=c;else{const p=m[1];let f=m[2]||"0",s=m[4]||"";f=f.replace(/\B(?=(\d{3})+(?!\d))/g,i),typeof e=="number"&&(s=s.padEnd(e,"0").slice(0,e>0?e:0)),s&&(s=`${o}${s}`),a=[l.createElement("span",{key:"int",className:`${u}-content-value-int`},p,f),s&&l.createElement("span",{key:"decimal",className:`${u}-content-value-decimal`},s)]}}return l.createElement("span",{className:`${u}-content-value`},a)},V=t=>{const{componentCls:n,marginXXS:r,padding:e,colorTextDescription:o,titleFontSize:i,colorTextHeading:u,contentFontSize:a,fontFamily:c}=t;return{[`${n}`]:Object.assign(Object.assign({},F(t)),{[`${n}-title`]:{marginBottom:r,color:o,fontSize:i},[`${n}-skeleton`]:{paddingTop:e},[`${n}-content`]:{color:u,fontSize:a,fontFamily:c,[`${n}-content-value`]:{display:"inline-block",direction:"ltr"},[`${n}-content-prefix, ${n}-content-suffix`]:{display:"inline-block"},[`${n}-content-prefix`]:{marginInlineEnd:r},[`${n}-content-suffix`]:{marginInlineStart:r}}})}},U=t=>{const{fontSizeHeading3:n,fontSize:r}=t;return{titleFontSize:r,contentFontSize:n}},A=z("Statistic",t=>{const n=D(t,{});return[V(n)]},U);var B=function(t,n){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(r[e[o]]=t[e[o]]);return r};const x=t=>{const{prefixCls:n,className:r,rootClassName:e,style:o,valueStyle:i,value:u=0,title:a,valueRender:c,prefix:m,suffix:p,loading:f=!1,formatter:s,precision:v,decimalSeparator:S=".",groupSeparator:b=",",onMouseEnter:O,onMouseLeave:E}=t,$=B(t,["prefixCls","className","rootClassName","style","valueStyle","value","title","valueRender","prefix","suffix","loading","formatter","precision","decimalSeparator","groupSeparator","onMouseEnter","onMouseLeave"]),{getPrefixCls:C,direction:w,statistic:g}=l.useContext(I),d=C("statistic",n),[N,h,j]=A(d),y=l.createElement(L,{decimalSeparator:S,groupSeparator:b,prefixCls:d,formatter:s,precision:v,value:u}),T=P(d,{[`${d}-rtl`]:w==="rtl"},g==null?void 0:g.className,r,e,h,j),k=H($,{aria:!0,data:!0});return N(l.createElement("div",Object.assign({},k,{className:T,style:Object.assign(Object.assign({},g==null?void 0:g.style),o),onMouseEnter:O,onMouseLeave:E}),a&&l.createElement("div",{className:`${d}-title`},a),l.createElement(_,{paragraph:!1,loading:f,className:`${d}-skeleton`},l.createElement("div",{style:i,className:`${d}-content`},m&&l.createElement("span",{className:`${d}-content-prefix`},m),c?c(y):y,p&&l.createElement("span",{className:`${d}-content-suffix`},p)))))},X=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function Q(t,n){let r=t;const e=/\[[^\]]*]/g,o=(n.match(e)||[]).map(c=>c.slice(1,-1)),i=n.replace(e,"[]"),u=X.reduce((c,m)=>{let[p,f]=m;if(c.includes(p)){const s=Math.floor(r/f);return r-=s*f,c.replace(new RegExp(`${p}+`,"g"),v=>{const S=v.length;return s.toString().padStart(S,"0")})}return c},i);let a=0;return u.replace(e,()=>{const c=o[a];return a+=1,c})}function Y(t,n){const{format:r=""}=n,e=new Date(t).getTime(),o=Date.now(),i=Math.max(e-o,0);return Q(i,r)}var q=function(t,n){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(r[e[o]]=t[e[o]]);return r};const G=1e3/30;function J(t){return new Date(t).getTime()}const K=t=>{const{value:n,format:r="HH:mm:ss",onChange:e,onFinish:o}=t,i=q(t,["value","format","onChange","onFinish"]),u=R(),a=l.useRef(null),c=()=>{o==null||o(),a.current&&(clearInterval(a.current),a.current=null)},m=()=>{const s=J(n);s>=Date.now()&&(a.current=setInterval(()=>{u(),e==null||e(s-Date.now()),s<Date.now()&&c()},G))};l.useEffect(()=>(m(),()=>{a.current&&(clearInterval(a.current),a.current=null)}),[n]);const p=(s,v)=>Y(s,Object.assign(Object.assign({},v),{format:r})),f=s=>M(s,{title:void 0});return l.createElement(x,Object.assign({},i,{value:n,valueRender:f,formatter:p}))},W=l.memo(K);x.Countdown=W;export{x as S};