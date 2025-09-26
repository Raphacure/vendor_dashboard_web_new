import{g as bt,m as yt,i as Sr,b as vt,c as Nr,r as c,C as Le,e as X,f as Wt,h as Ht,k as kr,n as lt,K as Tr,I as ke,_ as fe,o as Ir,p as Or,q as Ee,s as ct,t as Xt,v as dt,w as de,x as pt,F as Er,y as Vt,R as Pr,A as Fr,B as Rr,D as Mr,E as we,G as ie,H as ge,J as Yt,L as qt,M as Gt,N as J,O as se,Q as Kt,$ as ut,S as zr,T as Qt,U as Zt,V as Ar,W as Nt,X as Jt,Y as Lr,Z as Br,a0 as We,a1 as mt,a2 as Ur,a3 as Dr,a4 as Wr,a5 as kt,d as qe,j as n,P as ze,a6 as Hr,a7 as Xr,a8 as Ge,z as je,a9 as Vr,aa as Yr,ab as _e,ac as er,u as qr,a as tr,ad as xe,ae as Tt,af as Fe,ag as Gr,ah as Kr,ai as Qr,aj as Zr,ak as Jr,al as eo,am as to}from"./index-PsMG3Zdc.js";import{R as rr,D as It,a as Ot}from"./DownloadForm-BdgtItqi.js";import{C as be}from"./CustomModal-D_U-XRhQ.js";import{g as ro,a as oo,P as no,T as wt,b as ao,u as so,c as or,D as io,C as nr,M as ye,d as Et,e as lo}from"./CustomTable-C963ltCQ.js";import{u as He,a as co}from"./index-C3Umt6vg.js";import{R as ft}from"./EyeOutlined-Bx_9SJyT.js";import{g as po,R as uo,S as mo}from"./index-Ddh1qbRu.js";import{F as fo}from"./index-QosEcznR.js";import"./index-B46B2bWJ.js";import{c as Te}from"./createLucideIcon-DgyBfDek.js";import{u as go,a as ho}from"./bookingsQuery-CAYjxI9l.js";import"./index-BbwYGjYS.js";import"./index-DliyYz8W.js";import"./dayjs.min-BXvgyEn3.js";import"./Input-DN0wZSw7.js";import"./useQuery-BiTCPQsi.js";const Xe=e=>e?typeof e=="function"?e():e:null,xo=e=>{const{componentCls:t,popoverColor:r,titleMinWidth:o,fontWeightStrong:s,innerPadding:a,boxShadowSecondary:i,colorTextHeading:l,borderRadiusLG:p,zIndexPopup:m,titleMarginBottom:u,colorBgElevated:f,popoverBg:g,titleBorderBottom:x,innerContentPadding:v,titlePadding:b}=e;return[{[t]:Object.assign(Object.assign({},vt(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:m,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"--antd-arrow-background-color":f,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:g,backgroundClip:"padding-box",borderRadius:p,boxShadow:i,padding:a},[`${t}-title`]:{minWidth:o,marginBottom:u,color:l,fontWeight:s,borderBottom:x,padding:b},[`${t}-inner-content`]:{color:r,padding:v}})},ro(e,"var(--antd-arrow-background-color)"),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]},bo=e=>{const{componentCls:t}=e;return{[t]:Nr.map(r=>{const o=e[`${r}6`];return{[`&${t}-${r}`]:{"--antd-arrow-background-color":o,[`${t}-inner`]:{backgroundColor:o},[`${t}-arrow`]:{background:"transparent"}}}})}},yo=e=>{const{lineWidth:t,controlHeight:r,fontHeight:o,padding:s,wireframe:a,zIndexPopupBase:i,borderRadiusLG:l,marginXS:p,lineType:m,colorSplit:u,paddingSM:f}=e,g=r-o,x=g/2,v=g/2-t,b=s;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:i+30},po(e)),oo({contentRadius:l,limitVerticalRadius:!0})),{innerPadding:a?0:12,titleMarginBottom:a?0:p,titlePadding:a?`${x}px ${b}px ${v}px`:0,titleBorderBottom:a?`${t}px ${m} ${u}`:"none",innerContentPadding:a?`${f}px ${b}px`:0})},ar=bt("Popover",e=>{const{colorBgElevated:t,colorText:r}=e,o=yt(e,{popoverBg:t,popoverColor:r});return[xo(o),bo(o),Sr(o,"zoom-big")]},yo,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var vo=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(r[o[s]]=e[o[s]]);return r};const sr=({title:e,content:t,prefixCls:r})=>!e&&!t?null:c.createElement(c.Fragment,null,e&&c.createElement("div",{className:`${r}-title`},e),t&&c.createElement("div",{className:`${r}-inner-content`},t)),wo=e=>{const{hashId:t,prefixCls:r,className:o,style:s,placement:a="top",title:i,content:l,children:p}=e,m=Xe(i),u=Xe(l),f=X(t,r,`${r}-pure`,`${r}-placement-${a}`,o);return c.createElement("div",{className:f,style:s},c.createElement("div",{className:`${r}-arrow`}),c.createElement(no,Object.assign({},e,{className:t,prefixCls:r}),p||c.createElement(sr,{prefixCls:r,title:m,content:u})))},_o=e=>{const{prefixCls:t,className:r}=e,o=vo(e,["prefixCls","className"]),{getPrefixCls:s}=c.useContext(Le),a=s("popover",t),[i,l,p]=ar(a);return i(c.createElement(wo,Object.assign({},o,{prefixCls:a,hashId:l,className:X(r,p)})))};var jo=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(r[o[s]]=e[o[s]]);return r};const $o=c.forwardRef((e,t)=>{var r,o;const{prefixCls:s,title:a,content:i,overlayClassName:l,placement:p="top",trigger:m="hover",children:u,mouseEnterDelay:f=.1,mouseLeaveDelay:g=.1,onOpenChange:x,overlayStyle:v={},styles:b,classNames:h}=e,j=jo(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle","styles","classNames"]),{getPrefixCls:_,className:$,style:S,classNames:y,styles:T}=Wt("popover"),k=_("popover",s),[O,B,N]=ar(k),M=_(),Q=X(l,B,N,$,y.root,h==null?void 0:h.root),Z=X(y.body,h==null?void 0:h.body),[G,ee]=Ht(!1,{value:(r=e.open)!==null&&r!==void 0?r:e.visible,defaultValue:(o=e.defaultOpen)!==null&&o!==void 0?o:e.defaultVisible}),re=(z,W)=>{ee(z,!0),x==null||x(z,W)},K=z=>{z.keyCode===Tr.ESC&&re(!1,z)},ne=z=>{re(z)},E=Xe(a),V=Xe(i);return O(c.createElement(wt,Object.assign({placement:p,trigger:m,mouseEnterDelay:f,mouseLeaveDelay:g},j,{prefixCls:k,classNames:{root:Q,body:Z},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign({},T.root),S),v),b==null?void 0:b.root),body:Object.assign(Object.assign({},T.body),b==null?void 0:b.body)},ref:t,open:G,onOpenChange:ne,overlay:E||V?c.createElement(sr,{prefixCls:k,title:E,content:V}):null,transitionName:kr(M,"zoom-big",j.transitionName),"data-popover-inject":!0}),lt(u,{onKeyDown:z=>{var W,C;c.isValidElement(u)&&((C=u==null?void 0:(W=u.props).onKeyDown)===null||C===void 0||C.call(W,z)),K(z)}})))}),ir=$o;ir._InternalPanelDoNotUseOrYouWillBeFired=_o;var Co={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]},name:"file-text",theme:"outlined"},So=function(t,r){return c.createElement(ke,fe({},t,{ref:r,icon:Co}))},gt=c.forwardRef(So),No={percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},ko=function(){var t=c.useRef([]),r=c.useRef(null);return c.useEffect(function(){var o=Date.now(),s=!1;t.current.forEach(function(a){if(a){s=!0;var i=a.style;i.transitionDuration=".3s, .3s, .3s, .06s",r.current&&o-r.current<100&&(i.transitionDuration="0s, 0s")}}),s&&(r.current=Date.now())}),t.current},Pt=0,To=Or();function Io(){var e;return To?(e=Pt,Pt+=1):e="TEST_OR_SSR",e}const Oo=(function(e){var t=c.useState(),r=Ir(t,2),o=r[0],s=r[1];return c.useEffect(function(){s("rc_progress_".concat(Io()))},[]),e||o});var Ft=function(t){var r=t.bg,o=t.children;return c.createElement("div",{style:{width:"100%",height:"100%",background:r}},o)};function Rt(e,t){return Object.keys(e).map(function(r){var o=parseFloat(r),s="".concat(Math.floor(o*t),"%");return"".concat(e[r]," ").concat(s)})}var Eo=c.forwardRef(function(e,t){var r=e.prefixCls,o=e.color,s=e.gradientId,a=e.radius,i=e.style,l=e.ptg,p=e.strokeLinecap,m=e.strokeWidth,u=e.size,f=e.gapDegree,g=o&&Ee(o)==="object",x=g?"#FFF":void 0,v=u/2,b=c.createElement("circle",{className:"".concat(r,"-circle-path"),r:a,cx:v,cy:v,stroke:x,strokeLinecap:p,strokeWidth:m,opacity:l===0?0:1,style:i,ref:t});if(!g)return b;var h="".concat(s,"-conic"),j=f?"".concat(180+f/2,"deg"):"0deg",_=Rt(o,(360-f)/360),$=Rt(o,1),S="conic-gradient(from ".concat(j,", ").concat(_.join(", "),")"),y="linear-gradient(to ".concat(f?"bottom":"top",", ").concat($.join(", "),")");return c.createElement(c.Fragment,null,c.createElement("mask",{id:h},b),c.createElement("foreignObject",{x:0,y:0,width:u,height:u,mask:"url(#".concat(h,")")},c.createElement(Ft,{bg:y},c.createElement(Ft,{bg:S}))))}),Re=100,ot=function(t,r,o,s,a,i,l,p,m,u){var f=arguments.length>10&&arguments[10]!==void 0?arguments[10]:0,g=o/100*360*((360-i)/360),x=i===0?0:{bottom:0,top:180,left:90,right:-90}[l],v=(100-s)/100*r;m==="round"&&s!==100&&(v+=u/2,v>=r&&(v=r-.01));var b=Re/2;return{stroke:typeof p=="string"?p:void 0,strokeDasharray:"".concat(r,"px ").concat(t),strokeDashoffset:v+f,transform:"rotate(".concat(a+g+x,"deg)"),transformOrigin:"".concat(b,"px ").concat(b,"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},Po=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function Mt(e){var t=e??[];return Array.isArray(t)?t:[t]}var Fo=function(t){var r=ct(ct({},No),t),o=r.id,s=r.prefixCls,a=r.steps,i=r.strokeWidth,l=r.trailWidth,p=r.gapDegree,m=p===void 0?0:p,u=r.gapPosition,f=r.trailColor,g=r.strokeLinecap,x=r.style,v=r.className,b=r.strokeColor,h=r.percent,j=Xt(r,Po),_=Re/2,$=Oo(o),S="".concat($,"-gradient"),y=_-i/2,T=Math.PI*2*y,k=m>0?90+m/2:-90,O=T*((360-m)/360),B=Ee(a)==="object"?a:{count:a,gap:2},N=B.count,M=B.gap,Q=Mt(h),Z=Mt(b),G=Z.find(function(z){return z&&Ee(z)==="object"}),ee=G&&Ee(G)==="object",re=ee?"butt":g,K=ot(T,O,0,100,k,m,u,f,re,i),ne=ko(),E=function(){var W=0;return Q.map(function(C,A){var H=Z[A]||Z[Z.length-1],oe=ot(T,O,W,C,k,m,u,H,re,i);return W+=C,c.createElement(Eo,{key:A,color:H,ptg:C,radius:y,prefixCls:s,gradientId:S,style:oe,strokeLinecap:re,strokeWidth:i,gapDegree:m,ref:function(ae){ne[A]=ae},size:Re})}).reverse()},V=function(){var W=Math.round(N*(Q[0]/100)),C=100/N,A=0;return new Array(N).fill(null).map(function(H,oe){var ce=oe<=W-1?Z[0]:f,ae=ce&&Ee(ce)==="object"?"url(#".concat(S,")"):void 0,pe=ot(T,O,A,C,k,m,u,ce,"butt",i,M);return A+=(O-pe.strokeDashoffset+M)*100/O,c.createElement("circle",{key:oe,className:"".concat(s,"-circle-path"),r:y,cx:_,cy:_,stroke:ae,strokeWidth:i,opacity:1,style:pe,ref:function(ue){ne[oe]=ue}})})};return c.createElement("svg",fe({className:X("".concat(s,"-circle"),v),viewBox:"0 0 ".concat(Re," ").concat(Re),style:x,id:o,role:"presentation"},j),!N&&c.createElement("circle",{className:"".concat(s,"-circle-trail"),r:y,cx:_,cy:_,stroke:f,strokeLinecap:re,strokeWidth:l||i,style:K}),N?V():E())};function $e(e){return!e||e<0?0:e>100?100:e}function Ve({success:e,successPercent:t}){let r=t;return e&&"progress"in e&&(r=e.progress),e&&"percent"in e&&(r=e.percent),r}const Ro=({percent:e,success:t,successPercent:r})=>{const o=$e(Ve({success:t,successPercent:r}));return[o,$e($e(e)-o)]},Mo=({success:e={},strokeColor:t})=>{const{strokeColor:r}=e;return[r||dt.green,t||null]},Ke=(e,t,r)=>{var o,s,a,i;let l=-1,p=-1;if(t==="step"){const m=r.steps,u=r.strokeWidth;typeof e=="string"||typeof e>"u"?(l=e==="small"?2:14,p=u??8):typeof e=="number"?[l,p]=[e,e]:[l=14,p=8]=Array.isArray(e)?e:[e.width,e.height],l*=m}else if(t==="line"){const m=r==null?void 0:r.strokeWidth;typeof e=="string"||typeof e>"u"?p=m||(e==="small"?6:8):typeof e=="number"?[l,p]=[e,e]:[l=-1,p=8]=Array.isArray(e)?e:[e.width,e.height]}else(t==="circle"||t==="dashboard")&&(typeof e=="string"||typeof e>"u"?[l,p]=e==="small"?[60,60]:[120,120]:typeof e=="number"?[l,p]=[e,e]:Array.isArray(e)&&(l=(s=(o=e[0])!==null&&o!==void 0?o:e[1])!==null&&s!==void 0?s:120,p=(i=(a=e[0])!==null&&a!==void 0?a:e[1])!==null&&i!==void 0?i:120));return[l,p]},zo=3,Ao=e=>zo/e*100,Lo=e=>{const{prefixCls:t,trailColor:r=null,strokeLinecap:o="round",gapPosition:s,gapDegree:a,width:i=120,type:l,children:p,success:m,size:u=i,steps:f}=e,[g,x]=Ke(u,"circle");let{strokeWidth:v}=e;v===void 0&&(v=Math.max(Ao(g),6));const b={width:g,height:x,fontSize:g*.15+6},h=c.useMemo(()=>{if(a||a===0)return a;if(l==="dashboard")return 75},[a,l]),j=Ro(e),_=s||l==="dashboard"&&"bottom"||void 0,$=Object.prototype.toString.call(e.strokeColor)==="[object Object]",S=Mo({success:m,strokeColor:e.strokeColor}),y=X(`${t}-inner`,{[`${t}-circle-gradient`]:$}),T=c.createElement(Fo,{steps:f,percent:f?j[1]:j,strokeWidth:v,trailWidth:v,strokeColor:f?S[1]:S,strokeLinecap:o,trailColor:r,prefixCls:t,gapDegree:h,gapPosition:_}),k=g<=20,O=c.createElement("div",{className:y,style:b},T,!k&&p);return k?c.createElement(wt,{title:p},O):O},Ye="--progress-line-stroke-color",lr="--progress-percent",zt=e=>{const t=e?"100%":"-100%";return new pt(`antProgress${e?"RTL":"LTR"}Active`,{"0%":{transform:`translateX(${t}) scaleX(0)`,opacity:.1},"20%":{transform:`translateX(${t}) scaleX(0)`,opacity:.5},to:{transform:"translateX(0) scaleX(1)",opacity:0}})},Bo=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:Object.assign(Object.assign({},vt(e)),{display:"inline-block","&-rtl":{direction:"rtl"},"&-line":{position:"relative",width:"100%",fontSize:e.fontSize},[`${t}-outer`]:{display:"inline-flex",alignItems:"center",width:"100%"},[`${t}-inner`]:{position:"relative",display:"inline-block",width:"100%",flex:1,overflow:"hidden",verticalAlign:"middle",backgroundColor:e.remainingColor,borderRadius:e.lineBorderRadius},[`${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.defaultColor}},[`${t}-success-bg, ${t}-bg`]:{position:"relative",background:e.defaultColor,borderRadius:e.lineBorderRadius,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`},[`${t}-layout-bottom`]:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",[`${t}-text`]:{width:"max-content",marginInlineStart:0,marginTop:e.marginXXS}},[`${t}-bg`]:{overflow:"hidden","&::after":{content:'""',background:{_multi_value_:!0,value:["inherit",`var(${Ye})`]},height:"100%",width:`calc(1 / var(${lr}) * 100%)`,display:"block"},[`&${t}-bg-inner`]:{minWidth:"max-content","&::after":{content:"none"},[`${t}-text-inner`]:{color:e.colorWhite,[`&${t}-text-bright`]:{color:"rgba(0, 0, 0, 0.45)"}}}},[`${t}-success-bg`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,backgroundColor:e.colorSuccess},[`${t}-text`]:{display:"inline-block",marginInlineStart:e.marginXS,color:e.colorText,lineHeight:1,width:"2em",whiteSpace:"nowrap",textAlign:"start",verticalAlign:"middle",wordBreak:"normal",[r]:{fontSize:e.fontSize},[`&${t}-text-outer`]:{width:"max-content"},[`&${t}-text-outer${t}-text-start`]:{width:"max-content",marginInlineStart:0,marginInlineEnd:e.marginXS}},[`${t}-text-inner`]:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",marginInlineStart:0,padding:`0 ${de(e.paddingXXS)}`,[`&${t}-text-start`]:{justifyContent:"start"},[`&${t}-text-end`]:{justifyContent:"end"}},[`&${t}-status-active`]:{[`${t}-bg::before`]:{position:"absolute",inset:0,backgroundColor:e.colorBgContainer,borderRadius:e.lineBorderRadius,opacity:0,animationName:zt(),animationDuration:e.progressActiveMotionDuration,animationTimingFunction:e.motionEaseOutQuint,animationIterationCount:"infinite",content:'""'}},[`&${t}-rtl${t}-status-active`]:{[`${t}-bg::before`]:{animationName:zt(!0)}},[`&${t}-status-exception`]:{[`${t}-bg`]:{backgroundColor:e.colorError},[`${t}-text`]:{color:e.colorError}},[`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorError}},[`&${t}-status-success`]:{[`${t}-bg`]:{backgroundColor:e.colorSuccess},[`${t}-text`]:{color:e.colorSuccess}},[`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorSuccess}}})}},Uo=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-circle-trail`]:{stroke:e.remainingColor},[`&${t}-circle ${t}-inner`]:{position:"relative",lineHeight:1,backgroundColor:"transparent"},[`&${t}-circle ${t}-text`]:{position:"absolute",insetBlockStart:"50%",insetInlineStart:0,width:"100%",margin:0,padding:0,color:e.circleTextColor,fontSize:e.circleTextFontSize,lineHeight:1,whiteSpace:"normal",textAlign:"center",transform:"translateY(-50%)",[r]:{fontSize:e.circleIconFontSize}},[`${t}-circle&-status-exception`]:{[`${t}-text`]:{color:e.colorError}},[`${t}-circle&-status-success`]:{[`${t}-text`]:{color:e.colorSuccess}}},[`${t}-inline-circle`]:{lineHeight:1,[`${t}-inner`]:{verticalAlign:"bottom"}}}},Do=e=>{const{componentCls:t}=e;return{[t]:{[`${t}-steps`]:{display:"inline-block","&-outer":{display:"flex",flexDirection:"row",alignItems:"center"},"&-item":{flexShrink:0,minWidth:e.progressStepMinWidth,marginInlineEnd:e.progressStepMarginInlineEnd,backgroundColor:e.remainingColor,transition:`all ${e.motionDurationSlow}`,"&-active":{backgroundColor:e.defaultColor}}}}}},Wo=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-small&-line, ${t}-small&-line ${t}-text ${r}`]:{fontSize:e.fontSizeSM}}}},Ho=e=>({circleTextColor:e.colorText,defaultColor:e.colorInfo,remainingColor:e.colorFillSecondary,lineBorderRadius:100,circleTextFontSize:"1em",circleIconFontSize:`${e.fontSize/e.fontSizeSM}em`}),Xo=bt("Progress",e=>{const t=e.calc(e.marginXXS).div(2).equal(),r=yt(e,{progressStepMarginInlineEnd:t,progressStepMinWidth:t,progressActiveMotionDuration:"2.4s"});return[Bo(r),Uo(r),Do(r),Wo(r)]},Ho);var Vo=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(r[o[s]]=e[o[s]]);return r};const Yo=e=>{let t=[];return Object.keys(e).forEach(r=>{const o=parseFloat(r.replace(/%/g,""));Number.isNaN(o)||t.push({key:o,value:e[r]})}),t=t.sort((r,o)=>r.key-o.key),t.map(({key:r,value:o})=>`${o} ${r}%`).join(", ")},qo=(e,t)=>{const{from:r=dt.blue,to:o=dt.blue,direction:s=t==="rtl"?"to left":"to right"}=e,a=Vo(e,["from","to","direction"]);if(Object.keys(a).length!==0){const l=Yo(a),p=`linear-gradient(${s}, ${l})`;return{background:p,[Ye]:p}}const i=`linear-gradient(${s}, ${r}, ${o})`;return{background:i,[Ye]:i}},Go=e=>{const{prefixCls:t,direction:r,percent:o,size:s,strokeWidth:a,strokeColor:i,strokeLinecap:l="round",children:p,trailColor:m=null,percentPosition:u,success:f}=e,{align:g,type:x}=u,v=i&&typeof i!="string"?qo(i,r):{[Ye]:i,background:i},b=l==="square"||l==="butt"?0:void 0,h=s??[-1,a||(s==="small"?6:8)],[j,_]=Ke(h,"line",{strokeWidth:a}),$={backgroundColor:m||void 0,borderRadius:b},S=Object.assign(Object.assign({width:`${$e(o)}%`,height:_,borderRadius:b},v),{[lr]:$e(o)/100}),y=Ve(e),T={width:`${$e(y)}%`,height:_,borderRadius:b,backgroundColor:f==null?void 0:f.strokeColor},k={width:j<0?"100%":j},O=c.createElement("div",{className:`${t}-inner`,style:$},c.createElement("div",{className:X(`${t}-bg`,`${t}-bg-${x}`),style:S},x==="inner"&&p),y!==void 0&&c.createElement("div",{className:`${t}-success-bg`,style:T})),B=x==="outer"&&g==="start",N=x==="outer"&&g==="end";return x==="outer"&&g==="center"?c.createElement("div",{className:`${t}-layout-bottom`},O,p):c.createElement("div",{className:`${t}-outer`,style:k},B&&p,O,N&&p)},Ko=e=>{const{size:t,steps:r,rounding:o=Math.round,percent:s=0,strokeWidth:a=8,strokeColor:i,trailColor:l=null,prefixCls:p,children:m}=e,u=o(r*(s/100)),g=t??[t==="small"?2:14,a],[x,v]=Ke(g,"step",{steps:r,strokeWidth:a}),b=x/r,h=Array.from({length:r});for(let j=0;j<r;j++){const _=Array.isArray(i)?i[j]:i;h[j]=c.createElement("div",{key:j,className:X(`${p}-steps-item`,{[`${p}-steps-item-active`]:j<=u-1}),style:{backgroundColor:j<=u-1?_:l,width:b,height:v}})}return c.createElement("div",{className:`${p}-steps-outer`},h,m)};var Qo=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(r[o[s]]=e[o[s]]);return r};const Zo=["normal","exception","active","success"],Jo=c.forwardRef((e,t)=>{const{prefixCls:r,className:o,rootClassName:s,steps:a,strokeColor:i,percent:l=0,size:p="default",showInfo:m=!0,type:u="line",status:f,format:g,style:x,percentPosition:v={}}=e,b=Qo(e,["prefixCls","className","rootClassName","steps","strokeColor","percent","size","showInfo","type","status","format","style","percentPosition"]),{align:h="end",type:j="outer"}=v,_=Array.isArray(i)?i[0]:i,$=typeof i=="string"||Array.isArray(i)?i:void 0,S=c.useMemo(()=>{if(_){const E=typeof _=="string"?_:Object.values(_)[0];return new Er(E).isLight()}return!1},[i]),y=c.useMemo(()=>{var E,V;const z=Ve(e);return parseInt(z!==void 0?(E=z??0)===null||E===void 0?void 0:E.toString():(V=l??0)===null||V===void 0?void 0:V.toString(),10)},[l,e.success,e.successPercent]),T=c.useMemo(()=>!Zo.includes(f)&&y>=100?"success":f||"normal",[f,y]),{getPrefixCls:k,direction:O,progress:B}=c.useContext(Le),N=k("progress",r),[M,Q,Z]=Xo(N),G=u==="line",ee=G&&!a,re=c.useMemo(()=>{if(!m)return null;const E=Ve(e);let V;const z=g||(C=>`${C}%`),W=G&&S&&j==="inner";return j==="inner"||g||T!=="exception"&&T!=="success"?V=z($e(l),$e(E)):T==="exception"?V=G?c.createElement(Pr,null):c.createElement(Fr,null):T==="success"&&(V=G?c.createElement(Rr,null):c.createElement(uo,null)),c.createElement("span",{className:X(`${N}-text`,{[`${N}-text-bright`]:W,[`${N}-text-${h}`]:ee,[`${N}-text-${j}`]:ee}),title:typeof V=="string"?V:void 0},V)},[m,l,y,T,u,N,g]);let K;u==="line"?K=a?c.createElement(Ko,Object.assign({},e,{strokeColor:$,prefixCls:N,steps:typeof a=="object"?a.count:a}),re):c.createElement(Go,Object.assign({},e,{strokeColor:_,prefixCls:N,direction:O,percentPosition:{align:h,type:j}}),re):(u==="circle"||u==="dashboard")&&(K=c.createElement(Lo,Object.assign({},e,{strokeColor:_,prefixCls:N,progressStatus:T}),re));const ne=X(N,`${N}-status-${T}`,{[`${N}-${u==="dashboard"&&"circle"||u}`]:u!=="line",[`${N}-inline-circle`]:u==="circle"&&Ke(p,"circle")[0]<=20,[`${N}-line`]:ee,[`${N}-line-align-${h}`]:ee,[`${N}-line-position-${j}`]:ee,[`${N}-steps`]:a,[`${N}-show-info`]:m,[`${N}-${p}`]:typeof p=="string",[`${N}-rtl`]:O==="rtl"},B==null?void 0:B.className,o,s,Q,Z);return M(c.createElement("div",Object.assign({ref:t,style:Object.assign(Object.assign({},B==null?void 0:B.style),x),className:ne,role:"progressbar","aria-valuenow":y,"aria-valuemin":0,"aria-valuemax":100},Vt(b,["trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","success","successPercent"])),K))});var en={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},tn=function(t,r){return c.createElement(ke,fe({},t,{ref:r,icon:en}))},cr=c.forwardRef(tn);const nt=(function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),o=e.name||"",s=e.type||"",a=s.replace(/\/.*$/,"");return r.some(function(i){var l=i.trim();if(/^\*(\/\*)?$/.test(i))return!0;if(l.charAt(0)==="."){var p=o.toLowerCase(),m=l.toLowerCase(),u=[m];return(m===".jpg"||m===".jpeg")&&(u=[".jpg",".jpeg"]),u.some(function(f){return p.endsWith(f)})}return/\/\*$/.test(l)?a===l.replace(/\/.*$/,""):s===l?!0:/^\w+$/.test(l)?(Mr(!1,"Upload takes an invalidate 'accept' type '".concat(l,"'.Skip for check.")),!0):!1})}return!0});function rn(e,t){var r="cannot ".concat(e.method," ").concat(e.action," ").concat(t.status,"'"),o=new Error(r);return o.status=t.status,o.method=e.method,o.url=e.action,o}function At(e){var t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch{return t}}function on(e){var t=new XMLHttpRequest;e.onProgress&&t.upload&&(t.upload.onprogress=function(a){a.total>0&&(a.percent=a.loaded/a.total*100),e.onProgress(a)});var r=new FormData;e.data&&Object.keys(e.data).forEach(function(s){var a=e.data[s];if(Array.isArray(a)){a.forEach(function(i){r.append("".concat(s,"[]"),i)});return}r.append(s,a)}),e.file instanceof Blob?r.append(e.filename,e.file,e.file.name):r.append(e.filename,e.file),t.onerror=function(a){e.onError(a)},t.onload=function(){return t.status<200||t.status>=300?e.onError(rn(e,t),At(t)):e.onSuccess(At(t),t)},t.open(e.method,e.action,!0),e.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);var o=e.headers||{};return o["X-Requested-With"]!==null&&t.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(o).forEach(function(s){o[s]!==null&&t.setRequestHeader(s,o[s])}),t.send(r),{abort:function(){t.abort()}}}var nn=(function(){var e=we(ie().mark(function t(r,o){var s,a,i,l,p,m,u,f;return ie().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:m=function(){return m=we(ie().mark(function b(h){return ie().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",new Promise(function($){h.file(function(S){o(S)?(h.fullPath&&!S.webkitRelativePath&&(Object.defineProperties(S,{webkitRelativePath:{writable:!0}}),S.webkitRelativePath=h.fullPath.replace(/^\//,""),Object.defineProperties(S,{webkitRelativePath:{writable:!1}})),$(S)):$(null)})}));case 1:case"end":return _.stop()}},b)})),m.apply(this,arguments)},p=function(b){return m.apply(this,arguments)},l=function(){return l=we(ie().mark(function b(h){var j,_,$,S,y;return ie().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:j=h.createReader(),_=[];case 2:return k.next=5,new Promise(function(O){j.readEntries(O,function(){return O([])})});case 5:if($=k.sent,S=$.length,S){k.next=9;break}return k.abrupt("break",12);case 9:for(y=0;y<S;y++)_.push($[y]);k.next=2;break;case 12:return k.abrupt("return",_);case 13:case"end":return k.stop()}},b)})),l.apply(this,arguments)},i=function(b){return l.apply(this,arguments)},s=[],a=[],r.forEach(function(v){return a.push(v.webkitGetAsEntry())}),u=(function(){var v=we(ie().mark(function b(h,j){var _,$;return ie().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(h){y.next=2;break}return y.abrupt("return");case 2:if(h.path=j||"",!h.isFile){y.next=10;break}return y.next=6,p(h);case 6:_=y.sent,_&&s.push(_),y.next=15;break;case 10:if(!h.isDirectory){y.next=15;break}return y.next=13,i(h);case 13:$=y.sent,a.push.apply(a,ge($));case 15:case"end":return y.stop()}},b)}));return function(h,j){return v.apply(this,arguments)}})(),f=0;case 9:if(!(f<a.length)){x.next=15;break}return x.next=12,u(a[f]);case 12:f++,x.next=9;break;case 15:return x.abrupt("return",s);case 16:case"end":return x.stop()}},t)}));return function(r,o){return e.apply(this,arguments)}})(),an=+new Date,sn=0;function at(){return"rc-upload-".concat(an,"-").concat(++sn)}var ln=["component","prefixCls","className","classNames","disabled","id","name","style","styles","multiple","accept","capture","children","directory","openFileDialogOnClick","onMouseEnter","onMouseLeave","hasControlInside"],cn=(function(e){Yt(r,e);var t=qt(r);function r(){var o;Gt(this,r);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return o=t.call.apply(t,[this].concat(a)),J(se(o),"state",{uid:at()}),J(se(o),"reqs",{}),J(se(o),"fileInput",void 0),J(se(o),"_isMounted",void 0),J(se(o),"onChange",function(l){var p=o.props,m=p.accept,u=p.directory,f=l.target.files,g=ge(f).filter(function(x){return!u||nt(x,m)});o.uploadFiles(g),o.reset()}),J(se(o),"onClick",function(l){var p=o.fileInput;if(p){var m=l.target,u=o.props.onClick;if(m&&m.tagName==="BUTTON"){var f=p.parentNode;f.focus(),m.blur()}p.click(),u&&u(l)}}),J(se(o),"onKeyDown",function(l){l.key==="Enter"&&o.onClick(l)}),J(se(o),"onDataTransferFiles",(function(){var l=we(ie().mark(function p(m,u){var f,g,x,v,b,h,j;return ie().wrap(function($){for(;;)switch($.prev=$.next){case 0:if(f=o.props,g=f.multiple,x=f.accept,v=f.directory,b=ge(m.items||[]),h=ge(m.files||[]),(h.length>0||b.some(function(S){return S.kind==="file"}))&&(u==null||u()),!v){$.next=11;break}return $.next=7,nn(Array.prototype.slice.call(b),function(S){return nt(S,o.props.accept)});case 7:h=$.sent,o.uploadFiles(h),$.next=14;break;case 11:j=ge(h).filter(function(S){return nt(S,x)}),g===!1&&(j=h.slice(0,1)),o.uploadFiles(j);case 14:case"end":return $.stop()}},p)}));return function(p,m){return l.apply(this,arguments)}})()),J(se(o),"onFilePaste",(function(){var l=we(ie().mark(function p(m){var u,f;return ie().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:if(u=o.props.pastable,u){x.next=3;break}return x.abrupt("return");case 3:if(m.type!=="paste"){x.next=6;break}return f=m.clipboardData,x.abrupt("return",o.onDataTransferFiles(f,function(){m.preventDefault()}));case 6:case"end":return x.stop()}},p)}));return function(p){return l.apply(this,arguments)}})()),J(se(o),"onFileDragOver",function(l){l.preventDefault()}),J(se(o),"onFileDrop",(function(){var l=we(ie().mark(function p(m){var u;return ie().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(m.preventDefault(),m.type!=="drop"){g.next=4;break}return u=m.dataTransfer,g.abrupt("return",o.onDataTransferFiles(u));case 4:case"end":return g.stop()}},p)}));return function(p){return l.apply(this,arguments)}})()),J(se(o),"uploadFiles",function(l){var p=ge(l),m=p.map(function(u){return u.uid=at(),o.processFile(u,p)});Promise.all(m).then(function(u){var f=o.props.onBatchStart;f==null||f(u.map(function(g){var x=g.origin,v=g.parsedFile;return{file:x,parsedFile:v}})),u.filter(function(g){return g.parsedFile!==null}).forEach(function(g){o.post(g)})})}),J(se(o),"processFile",(function(){var l=we(ie().mark(function p(m,u){var f,g,x,v,b,h,j,_,$;return ie().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(f=o.props.beforeUpload,g=m,!f){y.next=14;break}return y.prev=3,y.next=6,f(m,u);case 6:g=y.sent,y.next=12;break;case 9:y.prev=9,y.t0=y.catch(3),g=!1;case 12:if(g!==!1){y.next=14;break}return y.abrupt("return",{origin:m,parsedFile:null,action:null,data:null});case 14:if(x=o.props.action,typeof x!="function"){y.next=21;break}return y.next=18,x(m);case 18:v=y.sent,y.next=22;break;case 21:v=x;case 22:if(b=o.props.data,typeof b!="function"){y.next=29;break}return y.next=26,b(m);case 26:h=y.sent,y.next=30;break;case 29:h=b;case 30:return j=(Ee(g)==="object"||typeof g=="string")&&g?g:m,j instanceof File?_=j:_=new File([j],m.name,{type:m.type}),$=_,$.uid=m.uid,y.abrupt("return",{origin:m,data:h,parsedFile:$,action:v});case 35:case"end":return y.stop()}},p,null,[[3,9]])}));return function(p,m){return l.apply(this,arguments)}})()),J(se(o),"saveFileInput",function(l){o.fileInput=l}),o}return Kt(r,[{key:"componentDidMount",value:function(){this._isMounted=!0;var s=this.props.pastable;s&&document.addEventListener("paste",this.onFilePaste)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.abort(),document.removeEventListener("paste",this.onFilePaste)}},{key:"componentDidUpdate",value:function(s){var a=this.props.pastable;a&&!s.pastable?document.addEventListener("paste",this.onFilePaste):!a&&s.pastable&&document.removeEventListener("paste",this.onFilePaste)}},{key:"post",value:function(s){var a=this,i=s.data,l=s.origin,p=s.action,m=s.parsedFile;if(this._isMounted){var u=this.props,f=u.onStart,g=u.customRequest,x=u.name,v=u.headers,b=u.withCredentials,h=u.method,j=l.uid,_=g||on,$={action:p,filename:x,data:i,file:m,headers:v,withCredentials:b,method:h||"post",onProgress:function(y){var T=a.props.onProgress;T==null||T(y,m)},onSuccess:function(y,T){var k=a.props.onSuccess;k==null||k(y,m,T),delete a.reqs[j]},onError:function(y,T){var k=a.props.onError;k==null||k(y,T,m),delete a.reqs[j]}};f(l),this.reqs[j]=_($)}}},{key:"reset",value:function(){this.setState({uid:at()})}},{key:"abort",value:function(s){var a=this.reqs;if(s){var i=s.uid?s.uid:s;a[i]&&a[i].abort&&a[i].abort(),delete a[i]}else Object.keys(a).forEach(function(l){a[l]&&a[l].abort&&a[l].abort(),delete a[l]})}},{key:"render",value:function(){var s=this.props,a=s.component,i=s.prefixCls,l=s.className,p=s.classNames,m=p===void 0?{}:p,u=s.disabled,f=s.id,g=s.name,x=s.style,v=s.styles,b=v===void 0?{}:v,h=s.multiple,j=s.accept,_=s.capture,$=s.children,S=s.directory,y=s.openFileDialogOnClick,T=s.onMouseEnter,k=s.onMouseLeave,O=s.hasControlInside,B=Xt(s,ln),N=X(J(J(J({},i,!0),"".concat(i,"-disabled"),u),l,l)),M=S?{directory:"directory",webkitdirectory:"webkitdirectory"}:{},Q=u?{}:{onClick:y?this.onClick:function(){},onKeyDown:y?this.onKeyDown:function(){},onMouseEnter:T,onMouseLeave:k,onDrop:this.onFileDrop,onDragOver:this.onFileDragOver,tabIndex:O?void 0:"0"};return ut.createElement(a,fe({},Q,{className:N,role:O?void 0:"button",style:x}),ut.createElement("input",fe({},zr(B,{aria:!0,data:!0}),{id:f,name:g,disabled:u,type:"file",ref:this.saveFileInput,onClick:function(G){return G.stopPropagation()},key:this.state.uid,style:ct({display:"none"},b.input),className:m.input,accept:j},M,{multiple:h,onChange:this.onChange},_!=null?{capture:_}:{})),$)}}]),r})(c.Component);function st(){}var ht=(function(e){Yt(r,e);var t=qt(r);function r(){var o;Gt(this,r);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return o=t.call.apply(t,[this].concat(a)),J(se(o),"uploader",void 0),J(se(o),"saveUploader",function(l){o.uploader=l}),o}return Kt(r,[{key:"abort",value:function(s){this.uploader.abort(s)}},{key:"render",value:function(){return ut.createElement(cn,fe({},this.props,{ref:this.saveUploader}))}}]),r})(c.Component);J(ht,"defaultProps",{component:"span",prefixCls:"rc-upload",data:{},headers:{},name:"file",multipart:!1,onStart:st,onError:st,onSuccess:st,multiple:!1,beforeUpload:null,customRequest:null,withCredentials:!1,openFileDialogOnClick:!0,hasControlInside:!1});const dn=e=>{const{componentCls:t,iconCls:r}=e;return{[`${t}-wrapper`]:{[`${t}-drag`]:{position:"relative",width:"100%",height:"100%",textAlign:"center",background:e.colorFillAlter,border:`${de(e.lineWidth)} dashed ${e.colorBorder}`,borderRadius:e.borderRadiusLG,cursor:"pointer",transition:`border-color ${e.motionDurationSlow}`,[t]:{padding:e.padding},[`${t}-btn`]:{display:"table",width:"100%",height:"100%",outline:"none",borderRadius:e.borderRadiusLG,"&:focus-visible":{outline:`${de(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`}},[`${t}-drag-container`]:{display:"table-cell",verticalAlign:"middle"},[`
          &:not(${t}-disabled):hover,
          &-hover:not(${t}-disabled)
        `]:{borderColor:e.colorPrimaryHover},[`p${t}-drag-icon`]:{marginBottom:e.margin,[r]:{color:e.colorPrimary,fontSize:e.uploadThumbnailSize}},[`p${t}-text`]:{margin:`0 0 ${de(e.marginXXS)}`,color:e.colorTextHeading,fontSize:e.fontSizeLG},[`p${t}-hint`]:{color:e.colorTextDescription,fontSize:e.fontSize},[`&${t}-disabled`]:{[`p${t}-drag-icon ${r},
            p${t}-text,
            p${t}-hint
          `]:{color:e.colorTextDisabled}}}}}},pn=e=>{const{componentCls:t,iconCls:r,fontSize:o,lineHeight:s,calc:a}=e,i=`${t}-list-item`,l=`${i}-actions`,p=`${i}-action`;return{[`${t}-wrapper`]:{[`${t}-list`]:Object.assign(Object.assign({},Qt()),{lineHeight:e.lineHeight,[i]:{position:"relative",height:a(e.lineHeight).mul(o).equal(),marginTop:e.marginXS,fontSize:o,display:"flex",alignItems:"center",transition:`background-color ${e.motionDurationSlow}`,borderRadius:e.borderRadiusSM,"&:hover":{backgroundColor:e.controlItemBgHover},[`${i}-name`]:Object.assign(Object.assign({},Zt),{padding:`0 ${de(e.paddingXS)}`,lineHeight:s,flex:"auto",transition:`all ${e.motionDurationSlow}`}),[l]:{whiteSpace:"nowrap",[p]:{opacity:0},[r]:{color:e.actionsColor,transition:`all ${e.motionDurationSlow}`},[`
              ${p}:focus-visible,
              &.picture ${p}
            `]:{opacity:1}},[`${t}-icon ${r}`]:{color:e.colorIcon,fontSize:o},[`${i}-progress`]:{position:"absolute",bottom:e.calc(e.uploadProgressOffset).mul(-1).equal(),width:"100%",paddingInlineStart:a(o).add(e.paddingXS).equal(),fontSize:o,lineHeight:0,pointerEvents:"none","> div":{margin:0}}},[`${i}:hover ${p}`]:{opacity:1},[`${i}-error`]:{color:e.colorError,[`${i}-name, ${t}-icon ${r}`]:{color:e.colorError},[l]:{[`${r}, ${r}:hover`]:{color:e.colorError},[p]:{opacity:1}}},[`${t}-list-item-container`]:{transition:`opacity ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,"&::before":{display:"table",width:0,height:0,content:'""'}}})}}},un=e=>{const{componentCls:t}=e,r=new pt("uploadAnimateInlineIn",{from:{width:0,height:0,padding:0,opacity:0,margin:e.calc(e.marginXS).div(-2).equal()}}),o=new pt("uploadAnimateInlineOut",{to:{width:0,height:0,padding:0,opacity:0,margin:e.calc(e.marginXS).div(-2).equal()}}),s=`${t}-animate-inline`;return[{[`${t}-wrapper`]:{[`${s}-appear, ${s}-enter, ${s}-leave`]:{animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseInOutCirc,animationFillMode:"forwards"},[`${s}-appear, ${s}-enter`]:{animationName:r},[`${s}-leave`]:{animationName:o}}},{[`${t}-wrapper`]:Ar(e)},r,o]},mn=e=>{const{componentCls:t,iconCls:r,uploadThumbnailSize:o,uploadProgressOffset:s,calc:a}=e,i=`${t}-list`,l=`${i}-item`;return{[`${t}-wrapper`]:{[`
        ${i}${i}-picture,
        ${i}${i}-picture-card,
        ${i}${i}-picture-circle
      `]:{[l]:{position:"relative",height:a(o).add(a(e.lineWidth).mul(2)).add(a(e.paddingXS).mul(2)).equal(),padding:e.paddingXS,border:`${de(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusLG,"&:hover":{background:"transparent"},[`${l}-thumbnail`]:Object.assign(Object.assign({},Zt),{width:o,height:o,lineHeight:de(a(o).add(e.paddingSM).equal()),textAlign:"center",flex:"none",[r]:{fontSize:e.fontSizeHeading2,color:e.colorPrimary},img:{display:"block",width:"100%",height:"100%",overflow:"hidden"}}),[`${l}-progress`]:{bottom:s,width:`calc(100% - ${de(a(e.paddingSM).mul(2).equal())})`,marginTop:0,paddingInlineStart:a(o).add(e.paddingXS).equal()}},[`${l}-error`]:{borderColor:e.colorError,[`${l}-thumbnail ${r}`]:{[`svg path[fill='${Nt[0]}']`]:{fill:e.colorErrorBg},[`svg path[fill='${Nt.primary}']`]:{fill:e.colorError}}},[`${l}-uploading`]:{borderStyle:"dashed",[`${l}-name`]:{marginBottom:s}}},[`${i}${i}-picture-circle ${l}`]:{[`&, &::before, ${l}-thumbnail`]:{borderRadius:"50%"}}}}},fn=e=>{const{componentCls:t,iconCls:r,fontSizeLG:o,colorTextLightSolid:s,calc:a}=e,i=`${t}-list`,l=`${i}-item`,p=e.uploadPicCardSize;return{[`
      ${t}-wrapper${t}-picture-card-wrapper,
      ${t}-wrapper${t}-picture-circle-wrapper
    `]:Object.assign(Object.assign({},Qt()),{display:"block",[`${t}${t}-select`]:{width:p,height:p,textAlign:"center",verticalAlign:"top",backgroundColor:e.colorFillAlter,border:`${de(e.lineWidth)} dashed ${e.colorBorder}`,borderRadius:e.borderRadiusLG,cursor:"pointer",transition:`border-color ${e.motionDurationSlow}`,[`> ${t}`]:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",textAlign:"center"},[`&:not(${t}-disabled):hover`]:{borderColor:e.colorPrimary}},[`${i}${i}-picture-card, ${i}${i}-picture-circle`]:{display:"flex",flexWrap:"wrap","@supports not (gap: 1px)":{"& > *":{marginBlockEnd:e.marginXS,marginInlineEnd:e.marginXS}},"@supports (gap: 1px)":{gap:e.marginXS},[`${i}-item-container`]:{display:"inline-block",width:p,height:p,verticalAlign:"top"},"&::after":{display:"none"},"&::before":{display:"none"},[l]:{height:"100%",margin:0,"&::before":{position:"absolute",zIndex:1,width:`calc(100% - ${de(a(e.paddingXS).mul(2).equal())})`,height:`calc(100% - ${de(a(e.paddingXS).mul(2).equal())})`,backgroundColor:e.colorBgMask,opacity:0,transition:`all ${e.motionDurationSlow}`,content:'" "'}},[`${l}:hover`]:{[`&::before, ${l}-actions`]:{opacity:1}},[`${l}-actions`]:{position:"absolute",insetInlineStart:0,zIndex:10,width:"100%",whiteSpace:"nowrap",textAlign:"center",opacity:0,transition:`all ${e.motionDurationSlow}`,[`
            ${r}-eye,
            ${r}-download,
            ${r}-delete
          `]:{zIndex:10,width:o,margin:`0 ${de(e.marginXXS)}`,fontSize:o,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,color:s,"&:hover":{color:s},svg:{verticalAlign:"baseline"}}},[`${l}-thumbnail, ${l}-thumbnail img`]:{position:"static",display:"block",width:"100%",height:"100%",objectFit:"contain"},[`${l}-name`]:{display:"none",textAlign:"center"},[`${l}-file + ${l}-name`]:{position:"absolute",bottom:e.margin,display:"block",width:`calc(100% - ${de(a(e.paddingXS).mul(2).equal())})`},[`${l}-uploading`]:{[`&${l}`]:{backgroundColor:e.colorFillAlter},[`&::before, ${r}-eye, ${r}-download, ${r}-delete`]:{display:"none"}},[`${l}-progress`]:{bottom:e.marginXL,width:`calc(100% - ${de(a(e.paddingXS).mul(2).equal())})`,paddingInlineStart:0}}}),[`${t}-wrapper${t}-picture-circle-wrapper`]:{[`${t}${t}-select`]:{borderRadius:"50%"}}}},gn=e=>{const{componentCls:t}=e;return{[`${t}-rtl`]:{direction:"rtl"}}},hn=e=>{const{componentCls:t,colorTextDisabled:r}=e;return{[`${t}-wrapper`]:Object.assign(Object.assign({},vt(e)),{[t]:{outline:0,"input[type='file']":{cursor:"pointer"}},[`${t}-select`]:{display:"inline-block"},[`${t}-hidden`]:{display:"none"},[`${t}-disabled`]:{color:r,cursor:"not-allowed"}})}},xn=e=>({actionsColor:e.colorIcon}),bn=bt("Upload",e=>{const{fontSizeHeading3:t,fontHeight:r,lineWidth:o,controlHeightLG:s,calc:a}=e,i=yt(e,{uploadThumbnailSize:a(t).mul(2).equal(),uploadProgressOffset:a(a(r).div(2)).add(o).equal(),uploadPicCardSize:a(s).mul(2.55).equal()});return[hn(i),dn(i),mn(i),fn(i),pn(i),un(i),gn(i),ao(i)]},xn);var yn={icon:function(t,r){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M534 352V136H232v752h560V394H576a42 42 0 01-42-42z",fill:r}},{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z",fill:t}}]}},name:"file",theme:"twotone"},vn=function(t,r){return c.createElement(ke,fe({},t,{ref:r,icon:yn}))},wn=c.forwardRef(vn),_n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"}}]},name:"paper-clip",theme:"outlined"},jn=function(t,r){return c.createElement(ke,fe({},t,{ref:r,icon:_n}))},$n=c.forwardRef(jn),Cn={icon:function(t,r){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z",fill:t}},{tag:"path",attrs:{d:"M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z",fill:r}},{tag:"path",attrs:{d:"M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z",fill:r}},{tag:"path",attrs:{d:"M276 368a28 28 0 1056 0 28 28 0 10-56 0z",fill:r}},{tag:"path",attrs:{d:"M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z",fill:t}}]}},name:"picture",theme:"twotone"},Sn=function(t,r){return c.createElement(ke,fe({},t,{ref:r,icon:Cn}))},Nn=c.forwardRef(Sn);function Ue(e){return Object.assign(Object.assign({},e),{lastModified:e.lastModified,lastModifiedDate:e.lastModifiedDate,name:e.name,size:e.size,type:e.type,uid:e.uid,percent:0,originFileObj:e})}function De(e,t){const r=ge(t),o=r.findIndex(({uid:s})=>s===e.uid);return o===-1?r.push(e):r[o]=e,r}function it(e,t){const r=e.uid!==void 0?"uid":"name";return t.filter(o=>o[r]===e[r])[0]}function kn(e,t){const r=e.uid!==void 0?"uid":"name",o=t.filter(s=>s[r]!==e[r]);return o.length===t.length?null:o}const Tn=(e="")=>{const t=e.split("/"),o=t[t.length-1].split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(o)||[""])[0]},dr=e=>e.indexOf("image/")===0,In=e=>{if(e.type&&!e.thumbUrl)return dr(e.type);const t=e.thumbUrl||e.url||"",r=Tn(t);return/^data:image\//.test(t)||/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(r)?!0:!(/^data:/.test(t)||r)},ve=200;function On(e){return new Promise(t=>{if(!e.type||!dr(e.type)){t("");return}const r=document.createElement("canvas");r.width=ve,r.height=ve,r.style.cssText=`position: fixed; left: 0; top: 0; width: ${ve}px; height: ${ve}px; z-index: 9999; display: none;`,document.body.appendChild(r);const o=r.getContext("2d"),s=new Image;if(s.onload=()=>{const{width:a,height:i}=s;let l=ve,p=ve,m=0,u=0;a>i?(p=i*(ve/a),u=-(p-l)/2):(l=a*(ve/i),m=-(l-p)/2),o.drawImage(s,m,u,l,p);const f=r.toDataURL();document.body.removeChild(r),window.URL.revokeObjectURL(s.src),t(f)},s.crossOrigin="anonymous",e.type.startsWith("image/svg+xml")){const a=new FileReader;a.onload=()=>{a.result&&typeof a.result=="string"&&(s.src=a.result)},a.readAsDataURL(e)}else if(e.type.startsWith("image/gif")){const a=new FileReader;a.onload=()=>{a.result&&t(a.result)},a.readAsDataURL(e)}else s.src=window.URL.createObjectURL(e)})}var En={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"},Pn=function(t,r){return c.createElement(ke,fe({},t,{ref:r,icon:En}))},Fn=c.forwardRef(Pn);const Rn=c.forwardRef(({prefixCls:e,className:t,style:r,locale:o,listType:s,file:a,items:i,progress:l,iconRender:p,actionIconRender:m,itemRender:u,isImgUrl:f,showPreviewIcon:g,showRemoveIcon:x,showDownloadIcon:v,previewIcon:b,removeIcon:h,downloadIcon:j,extra:_,onPreview:$,onDownload:S,onClose:y},T)=>{var k,O;const{status:B}=a,[N,M]=c.useState(B);c.useEffect(()=>{B!=="removed"&&M(B)},[B]);const[Q,Z]=c.useState(!1);c.useEffect(()=>{const Y=setTimeout(()=>{Z(!0)},300);return()=>{clearTimeout(Y)}},[]);const G=p(a);let ee=c.createElement("div",{className:`${e}-icon`},G);if(s==="picture"||s==="picture-card"||s==="picture-circle")if(N==="uploading"||!a.thumbUrl&&!a.url){const Y=X(`${e}-list-item-thumbnail`,{[`${e}-list-item-file`]:N!=="uploading"});ee=c.createElement("div",{className:Y},G)}else{const Y=f!=null&&f(a)?c.createElement("img",{src:a.thumbUrl||a.url,alt:a.name,className:`${e}-list-item-image`,crossOrigin:a.crossOrigin}):G,d=X(`${e}-list-item-thumbnail`,{[`${e}-list-item-file`]:f&&!f(a)});ee=c.createElement("a",{className:d,onClick:w=>$(a,w),href:a.url||a.thumbUrl,target:"_blank",rel:"noopener noreferrer"},Y)}const re=X(`${e}-list-item`,`${e}-list-item-${N}`),K=typeof a.linkProps=="string"?JSON.parse(a.linkProps):a.linkProps,ne=(typeof x=="function"?x(a):x)?m((typeof h=="function"?h(a):h)||c.createElement(cr,null),()=>y(a),e,o.removeFile,!0):null,E=(typeof v=="function"?v(a):v)&&N==="done"?m((typeof j=="function"?j(a):j)||c.createElement(Fn,null),()=>S(a),e,o.downloadFile):null,V=s!=="picture-card"&&s!=="picture-circle"&&c.createElement("span",{key:"download-delete",className:X(`${e}-list-item-actions`,{picture:s==="picture"})},E,ne),z=typeof _=="function"?_(a):_,W=z&&c.createElement("span",{className:`${e}-list-item-extra`},z),C=X(`${e}-list-item-name`),A=a.url?c.createElement("a",Object.assign({key:"view",target:"_blank",rel:"noopener noreferrer",className:C,title:a.name},K,{href:a.url,onClick:Y=>$(a,Y)}),a.name,W):c.createElement("span",{key:"view",className:C,onClick:Y=>$(a,Y),title:a.name},a.name,W),H=(typeof g=="function"?g(a):g)&&(a.url||a.thumbUrl)?c.createElement("a",{href:a.url||a.thumbUrl,target:"_blank",rel:"noopener noreferrer",onClick:Y=>$(a,Y),title:o.previewFile},typeof b=="function"?b(a):b||c.createElement(ft,null)):null,oe=(s==="picture-card"||s==="picture-circle")&&N!=="uploading"&&c.createElement("span",{className:`${e}-list-item-actions`},H,N==="done"&&E,ne),{getPrefixCls:ce}=c.useContext(Le),ae=ce(),pe=c.createElement("div",{className:re},ee,A,V,oe,Q&&c.createElement(Jt,{motionName:`${ae}-fade`,visible:N==="uploading",motionDeadline:2e3},({className:Y})=>{const d="percent"in a?c.createElement(Jo,Object.assign({type:"line",percent:a.percent,"aria-label":a["aria-label"],"aria-labelledby":a["aria-labelledby"]},l)):null;return c.createElement("div",{className:X(`${e}-list-item-progress`,Y)},d)})),me=a.response&&typeof a.response=="string"?a.response:((k=a.error)===null||k===void 0?void 0:k.statusText)||((O=a.error)===null||O===void 0?void 0:O.message)||o.uploadError,ue=N==="error"?c.createElement(wt,{title:me,getPopupContainer:Y=>Y.parentNode},pe):pe;return c.createElement("div",{className:X(`${e}-list-item-container`,t),style:r,ref:T},u?u(ue,a,i,{download:S.bind(null,a),preview:$.bind(null,a),remove:y.bind(null,a)}):ue)}),Mn=(e,t)=>{const{listType:r="text",previewFile:o=On,onPreview:s,onDownload:a,onRemove:i,locale:l,iconRender:p,isImageUrl:m=In,prefixCls:u,items:f=[],showPreviewIcon:g=!0,showRemoveIcon:x=!0,showDownloadIcon:v=!1,removeIcon:b,previewIcon:h,downloadIcon:j,extra:_,progress:$={size:[-1,2],showInfo:!1},appendAction:S,appendActionVisible:y=!0,itemRender:T,disabled:k}=e,O=so(),[B,N]=c.useState(!1),M=["picture-card","picture-circle"].includes(r);c.useEffect(()=>{r.startsWith("picture")&&(f||[]).forEach(C=>{!(C.originFileObj instanceof File||C.originFileObj instanceof Blob)||C.thumbUrl!==void 0||(C.thumbUrl="",o==null||o(C.originFileObj).then(A=>{C.thumbUrl=A||"",O()}))})},[r,f,o]),c.useEffect(()=>{N(!0)},[]);const Q=(C,A)=>{if(s)return A==null||A.preventDefault(),s(C)},Z=C=>{typeof a=="function"?a(C):C.url&&window.open(C.url)},G=C=>{i==null||i(C)},ee=C=>{if(p)return p(C,r);const A=C.status==="uploading";if(r.startsWith("picture")){const H=r==="picture"?c.createElement(mt,null):l.uploading,oe=m!=null&&m(C)?c.createElement(Nn,null):c.createElement(wn,null);return A?H:oe}return A?c.createElement(mt,null):c.createElement($n,null)},re=(C,A,H,oe,ce)=>{const ae={type:"text",size:"small",title:oe,onClick:pe=>{var me,ue;A(),c.isValidElement(C)&&((ue=(me=C.props).onClick)===null||ue===void 0||ue.call(me,pe))},className:`${H}-list-item-action`,disabled:ce?k:!1};return c.isValidElement(C)?c.createElement(We,Object.assign({},ae,{icon:lt(C,Object.assign(Object.assign({},C.props),{onClick:()=>{}}))})):c.createElement(We,Object.assign({},ae),c.createElement("span",null,C))};c.useImperativeHandle(t,()=>({handlePreview:Q,handleDownload:Z}));const{getPrefixCls:K}=c.useContext(Le),ne=K("upload",u),E=K(),V=X(`${ne}-list`,`${ne}-list-${r}`),z=c.useMemo(()=>Vt(Lr(E),["onAppearEnd","onEnterEnd","onLeaveEnd"]),[E]),W=Object.assign(Object.assign({},M?{}:z),{motionDeadline:2e3,motionName:`${ne}-${M?"animate-inline":"animate"}`,keys:ge(f.map(C=>({key:C.uid,file:C}))),motionAppear:B});return c.createElement("div",{className:V},c.createElement(Br,Object.assign({},W,{component:!1}),({key:C,file:A,className:H,style:oe})=>c.createElement(Rn,{key:C,locale:l,prefixCls:ne,className:H,style:oe,file:A,items:f,progress:$,listType:r,isImgUrl:m,showPreviewIcon:g,showRemoveIcon:x,showDownloadIcon:v,removeIcon:b,previewIcon:h,downloadIcon:j,extra:_,iconRender:ee,actionIconRender:re,itemRender:T,onPreview:Q,onDownload:Z,onClose:G})),S&&c.createElement(Jt,Object.assign({},W,{visible:y,forceRender:!0}),({className:C,style:A})=>lt(S,H=>({className:X(H.className,C),style:Object.assign(Object.assign(Object.assign({},A),{pointerEvents:C?"none":void 0}),H.style)}))))},zn=c.forwardRef(Mn);var An=function(e,t,r,o){function s(a){return a instanceof r?a:new r(function(i){i(a)})}return new(r||(r=Promise))(function(a,i){function l(u){try{m(o.next(u))}catch(f){i(f)}}function p(u){try{m(o.throw(u))}catch(f){i(f)}}function m(u){u.done?a(u.value):s(u.value).then(l,p)}m((o=o.apply(e,[])).next())})};const Me=`__LIST_IGNORE_${Date.now()}__`,Ln=(e,t)=>{const r=Wt("upload"),{fileList:o,defaultFileList:s,onRemove:a,showUploadList:i=!0,listType:l="text",onPreview:p,onDownload:m,onChange:u,onDrop:f,previewFile:g,disabled:x,locale:v,iconRender:b,isImageUrl:h,progress:j,prefixCls:_,className:$,type:S="select",children:y,style:T,itemRender:k,maxCount:O,data:B={},multiple:N=!1,hasControlInside:M=!0,action:Q="",accept:Z="",supportServerRender:G=!0,rootClassName:ee}=e,re=c.useContext(Ur),K=x??re,ne=e.customRequest||r.customRequest,[E,V]=Ht(s||[],{value:o,postState:I=>I??[]}),[z,W]=c.useState("drop"),C=c.useRef(null),A=c.useRef(null);c.useMemo(()=>{const I=Date.now();(o||[]).forEach((L,q)=>{!L.uid&&!Object.isFrozen(L)&&(L.uid=`__AUTO__${I}_${q}__`)})},[o]);const H=(I,L,q)=>{let F=ge(L),U=!1;O===1?F=F.slice(-1):O&&(U=F.length>O,F=F.slice(0,O)),kt.flushSync(()=>{V(F)});const le={file:I,fileList:F};q&&(le.event=q),(!U||I.status==="removed"||F.some(Se=>Se.uid===I.uid))&&kt.flushSync(()=>{u==null||u(le)})},oe=(I,L)=>An(void 0,void 0,void 0,function*(){const{beforeUpload:q,transformFile:F}=e;let U=I;if(q){const le=yield q(I,L);if(le===!1)return!1;if(delete I[Me],le===Me)return Object.defineProperty(I,Me,{value:!0,configurable:!0}),!1;typeof le=="object"&&le&&(U=le)}return F&&(U=yield F(U)),U}),ce=I=>{const L=I.filter(U=>!U.file[Me]);if(!L.length)return;const q=L.map(U=>Ue(U.file));let F=ge(E);q.forEach(U=>{F=De(U,F)}),q.forEach((U,le)=>{let Se=U;if(L[le].parsedFile)U.status="uploading";else{const{originFileObj:Oe}=U;let Ne;try{Ne=new File([Oe],Oe.name,{type:Oe.type})}catch{Ne=new Blob([Oe],{type:Oe.type}),Ne.name=Oe.name,Ne.lastModifiedDate=new Date,Ne.lastModified=new Date().getTime()}Ne.uid=U.uid,Se=Ne}H(Se,F)})},ae=(I,L,q)=>{try{typeof I=="string"&&(I=JSON.parse(I))}catch{}if(!it(L,E))return;const F=Ue(L);F.status="done",F.percent=100,F.response=I,F.xhr=q;const U=De(F,E);H(F,U)},pe=(I,L)=>{if(!it(L,E))return;const q=Ue(L);q.status="uploading",q.percent=I.percent;const F=De(q,E);H(q,F,I)},me=(I,L,q)=>{if(!it(q,E))return;const F=Ue(q);F.error=I,F.response=L,F.status="error";const U=De(F,E);H(F,U)},ue=I=>{let L;Promise.resolve(typeof a=="function"?a(I):a).then(q=>{var F;if(q===!1)return;const U=kn(I,E);U&&(L=Object.assign(Object.assign({},I),{status:"removed"}),E==null||E.forEach(le=>{const Se=L.uid!==void 0?"uid":"name";le[Se]===L[Se]&&!Object.isFrozen(le)&&(le.status="removed")}),(F=C.current)===null||F===void 0||F.abort(L),H(L,U))})},Y=I=>{W(I.type),I.type==="drop"&&(f==null||f(I))};c.useImperativeHandle(t,()=>({onBatchStart:ce,onSuccess:ae,onProgress:pe,onError:me,fileList:E,upload:C.current,nativeElement:A.current}));const{getPrefixCls:d,direction:w,upload:R}=c.useContext(Le),P=d("upload",_),te=Object.assign(Object.assign({onBatchStart:ce,onError:me,onProgress:pe,onSuccess:ae},e),{customRequest:ne,data:B,multiple:N,action:Q,accept:Z,supportServerRender:G,prefixCls:P,disabled:K,beforeUpload:oe,onChange:void 0,hasControlInside:M});delete te.className,delete te.style,(!y||K)&&delete te.id;const Ce=`${P}-wrapper`,[Pe,Ie,Je]=bn(P,Ce),[et]=Dr("Upload",Wr.Upload),{showRemoveIcon:$t,showPreviewIcon:br,showDownloadIcon:yr,removeIcon:vr,previewIcon:wr,downloadIcon:_r,extra:jr}=typeof i=="boolean"?{}:i,$r=typeof $t>"u"?!K:$t,tt=(I,L)=>i?c.createElement(zn,{prefixCls:P,listType:l,items:E,previewFile:g,onPreview:p,onDownload:m,onRemove:ue,showRemoveIcon:$r,showPreviewIcon:br,showDownloadIcon:yr,removeIcon:vr,previewIcon:wr,downloadIcon:_r,iconRender:b,extra:jr,locale:Object.assign(Object.assign({},et),v),isImageUrl:h,progress:j,appendAction:I,appendActionVisible:L,itemRender:k,disabled:K}):I,rt=X(Ce,$,ee,Ie,Je,R==null?void 0:R.className,{[`${P}-rtl`]:w==="rtl",[`${P}-picture-card-wrapper`]:l==="picture-card",[`${P}-picture-circle-wrapper`]:l==="picture-circle"}),Ct=Object.assign(Object.assign({},R==null?void 0:R.style),T);if(S==="drag"){const I=X(Ie,P,`${P}-drag`,{[`${P}-drag-uploading`]:E.some(L=>L.status==="uploading"),[`${P}-drag-hover`]:z==="dragover",[`${P}-disabled`]:K,[`${P}-rtl`]:w==="rtl"});return Pe(c.createElement("span",{className:rt,ref:A},c.createElement("div",{className:I,style:Ct,onDrop:Y,onDragOver:Y,onDragLeave:Y},c.createElement(ht,Object.assign({},te,{ref:C,className:`${P}-btn`}),c.createElement("div",{className:`${P}-drag-container`},y))),tt()))}const Cr=X(P,`${P}-select`,{[`${P}-disabled`]:K,[`${P}-hidden`]:!y}),St=c.createElement("div",{className:Cr,style:Ct},c.createElement(ht,Object.assign({},te,{ref:C})));return Pe(l==="picture-card"||l==="picture-circle"?c.createElement("span",{className:rt,ref:A},tt(St,!!y)):c.createElement("span",{className:rt,ref:A},St,tt()))},pr=c.forwardRef(Ln);var Bn=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(r[o[s]]=e[o[s]]);return r};const Un=c.forwardRef((e,t)=>{var{style:r,height:o,hasControlInside:s=!1}=e,a=Bn(e,["style","height","hasControlInside"]);return c.createElement(pr,Object.assign({ref:t,hasControlInside:s},a,{type:"drag",style:Object.assign(Object.assign({},r),{height:o})}))}),_t=pr;_t.Dragger=Un;_t.LIST_IGNORE=Me;var Dn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},Wn=function(t,r){return c.createElement(ke,fe({},t,{ref:r,icon:Dn}))},Hn=c.forwardRef(Wn);const Lt=qe.div`
  width: 100%;
  padding: 20px;
  font-family: inter;

  .ant-select-selector {
    border-radius: 25px !important;
    border:1px solid #252b61 !important;
  }

  .ant-select {
    height: 37px;
  }
  .ant-picker {
    border-radius: 25px !important;
    height: 37px !important;
    border:1px solid #252b61 !important;
  }

  .ant-select-selection-placeholder{
    font-size:16px;
  }

  .date-range-picker {
    height: 37px;
  }

  .completed-status {
    color: green;
  }

  @media (max-width: 675px) {
    padding: 15px 10px;

    .booking-create {
      display: flex;
      gap: 10px;
      overflow-x: auto;
      scroll-behavior: smooth;
    }

    .date-number-span {
      font-family: Inter;
      font-weight: 600;
      font-size: 18px;
      line-height: 21.78px;
      text-align: center;
    }

    .booking-type {
      font-family: Inter;
      font-weight: 700;
      font-size: 9px;
      line-height: 10.89px;
      letter-spacing: 1.5%;
      text-align: center;
    }

    .date-month-name {
      font-family: Inter;
      font-weight: 600;
      font-size: 12px;
      line-height: 14.52px;
      text-align: center;
    }

    .load-more-btn-div {
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }

    .red-call {
      background-color: rgb(255, 0, 4);
      color: white;
    }
    .yellow-call {
      background-color: rgb(255, 167, 0);
      color: white;
    }

    .completed-status-mobile {
      border: 1px solid green;
    }

    .status-mobile-div {
      display: flex;
      justify-content: center;
      align-items: baseline;
      min-width: 80px;
    }

    .other-status-mobile {
      border: 1px solid rgb(240, 218, 105);
    }

    .rejected-status-mobile {
      color: #ff0000 !important;
      border: 1px solid #ff0000;
    }

    .whole-center {
      gap: 2px;
    }

    .completed-status {
      color: green;
    }

    .status-btns {
      padding: 5px 10px;
      border-radius: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .pending-status-mobile {
      background-color: rgb(240, 218, 105);
    }

    .mobile-upcoming-status {
      background-color: rgb(255, 167, 0);
    }

    .booking-mobile-body-div {
      background-color: rgb(254, 254, 254);
      padding: 0 5px;
      margin-top: 15px;
      display: flex;
      gap: 15px;
      overflow: hidden;
      border-radius: 10px;
      flex-direction: column;
    }

    .booking-mobile-div-card {
      border: 1px solid rgb(240, 240, 240);
      padding: 7px;
      border-radius: 15px;
      box-shadow: 2px 4px 15px 0px #0000001a;

      .booking-mobile-card-details {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 50%;
      }
      .booking-details-mobile {
        min-width: 0;
      }

      .calender-box-mobile {
        width: 67px;
        height: 71px;
        padding: 9px 4px;
        background-color: rgb(233, 242, 253);
        border-radius: 11px;
        display: flex;
        flex-direction: column;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 3px;
        flex-shrink: 0;
        border: 1px solid #f0f0f0;
      }
      .booking-details-slot {
        font-family: Inter;
        font-weight: 400;
        font-size: 15px;
        line-height: 18.15px;
        letter-spacing: 1.5%;
      }
      .booking-details-type {
        color: #888888;
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 16.94px;
        letter-spacing: 1.5%;
      }
      .booking-details-name {
        font-family: Inter;
        font-weight: 500;
        font-size: 16px;
        line-height: 19.36px;
        margin-bottom: 5px !important;
      }

      .booking-details-mobile p {
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .pending-btn {
        background-color: rgb(255, 0, 4);
        border: none;
        padding: 5px 15px !important;
        border-radius: 20px;
        cursor: pointer;
        font-size: 16px;
        color: white;
      }
    }

    .booking-header-div {
      display: flex;
      justify-content: space-between;
    }

    .add-patient {
      background-color: white;
      border-radius: 10px;
      border: 1px solid #252b61;
      padding: 5px 15px !important;

      cursor: pointer;
      font-size: 16px;
      letter-spacing: 0.02em;
      font-weight: 500;
      color: #252b61;
    }
    .filter {
      background-color: white;
      border: none;
      padding: 5px 0 !important;

      cursor: pointer;
      font-size: 16px;
      letter-spacing: 0.02em;
      font-weight: 500;
      color: #252b61;
    }
    .filter img {
      width: 25px;
      padding: 0 5px 0 0 !important;
    }
  }

  .table-loading {
    height: 200px;
  }
  .glowing-div-next {
    display: inline-block;
    background-color: #92bdf6;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    box-shadow: 0 0 5px #92bdf6;
    animation: glow-grow 1.5s infinite alternate ease-in-out;
  }
  @keyframes glow-grow {
    0% {
      transform: scale(1);
      box-shadow: 0 0 5px #92bdf6;
    }
    100% {
      transform: scale(1.5);
      box-shadow: 0 0 15px #92bdf6, 0 0 30px #92bdf6;
    }
  }

  .next-label {
    color: #ff0004 !important;
  }
  .all-label {
    color: rgb(34, 46, 98) !important;
  }
  .upcoming-label {
    color: rgb(0, 136, 45) !important;
  }
  .open-label {
    color: rgb(241, 157, 2) !important;
  }
  .rejected-label {
    color: rgb(34, 46, 98) !important;
  }

  .no-bookings-td {
    height: 150px;
    text-align: center;
    color: #22336b;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
  }
  .action-td {
    border-left: 1px solid #d6cece;
  }
  .action-div {
    display: flex;
    justify-content: center;
    /* grid-template-columns: repeat(3, 1fr); */
    justify-content: center;
    width: max-content;
    margin: 0;
    gap: 10px;

    img {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }

    .action-btns-virtual {
      padding: 10px 20px;
      border: 1px solid #252b61;
      width: fit-content;
    }
  }

  .tab-container {
    margin-top: 10px;
    border-radius: 20px;
  }
  .tab {
    display: flex;
    padding: 8px 15px;
    border-radius: 7px;
    gap: 20px;
    background-color: #e9f2fd;
  }
  .tab-button {
    background: transparent;
    border: none;
    padding: 7px 20px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    border-radius: 8px;
    transition: background 0.3s ease;
  }

  .share-main-div {
    position: relative;
  }

  .share-top-header {
    background-color: #e9f2fd;
    padding: 9px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .share-close {
    background-color: #dcdcdc;
    border-radius: 100%;
    padding: 0px 4px;
  }
  .share-top-header p {
    font-size: 10px;
    margin: 0;
    text-align: left;
  }

  .share-div {
    overflow: hidden;
    position: absolute;
    z-index: 5;
    background-color: white;
    border-radius: 25px;
    width: 225px;
    height: 127px;
    animation: genieAppear 0.7s ease-out forwards;
    left: 10px;
    box-shadow: 0 0 10px #b6b6b6;
  }
  .share-items {
    padding: 0 20px;
  }
  .tab-button.active {
    background: white;
    color: #252b61;
    font-weight: 500;
    border: none;
  }
  .next-text {
    color: red;
  }
  .pending-text {
    color: #f19d02;
  }
  .rejected-text {
    color: #222e62;
  }

  .table-status-div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  .upcoming-text {
    color: green;
  }
  .label-img {
    width: 20px;
  }

  .share-items-list-div {
    display: flex;
    gap: 10px;
    justify-content: left;
    align-items: center;
    margin: 5px 0;
  }
  .share-items-list-div:not(:last-child) {
    border-bottom: 1px solid #ccc;
    padding-bottom: 8px;
    margin-bottom: 8px;
  }
  .share-items-list-div img {
    width: 25px;
    aspect-ratio: 1 / 1;
  }
  .share-items-list-div p {
    margin: 0;
  }

  @keyframes genieAppear {
    0% {
      opacity: 0;
      transform: scale(0.1) translate(-10%, -40%);
    }
    60% {
      opacity: 1;
      transform: scale(1.1) translate(-10%, -40%);
    }
    100% {
      transform: scale(1) translate(-10%, -40%);
    }
  }

  .heading {
    h2 {
      font-size: 20px;
      font-weight: 600;
      color: #000;
      text-align: left;
      margin-bottom: 5px;
    }

    p {
      font-size: 14px;
      color: #000;
      text-align: left;
      opacity: 0.7;
      margin-bottom: 10px;
    }
  }
  .add-patient {
    background-color: white;
    border-radius: 25px;
    border: 1px solid #252b61;
    padding: 10px 20px;
    text-wrap: nowrap;

    cursor: pointer;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-weight: 500;
    color: #252b61;
  }

  .pd-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .download-btn {
    background-color: #c8ebd8;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 16px;
    transition: background-color 0.3s ease;
  }

  .download-btn svg {
    color: #22336b;
    font-size: 14px;
  }

  .download-btn:hover {
    background-color: #a4dbc3;
  }
  .sort-dropdown {
    position: relative;
    display: inline-block;
  }

  .sort-btn {
    box-shadow: 2px 4px 19px rgba(0, 0, 0, 0.1);
    border-radius: 69px;
    background-color: #fff;
    border: 1px solid #252b61;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 16px;
    letter-spacing: 0.03em;
    font-weight: 500;
    color: #252b61;
  }

  .dropdown-menu {
    position: absolute;

    left: 1rem;
    display: block !important;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    padding: 0px;
    overflow: hidden;
    z-index: 10;
  }

  .dropdown-item {
    border-bottom: 1px solid #d6cece;
    padding: 10px;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }

  .dropdown-item:last-child {
    border-bottom: none;
  }

  .dropdown-item:hover {
    background: #f0f0f0;
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    gap: 10px;

    .arrows {
      display: flex;
      align-items: center;
      gap: 13px;
    }

    .arrow-icon {
      font-size: 1.5rem;
      cursor: pointer;
    }

    .back-arrow-icon {
      display: flex;
      align-items: center;
      padding: 5px;
      border: 1px solid #252b61;
      background-color: white;
      border-radius: 50%;
      cursor: pointer;
    }

    .page-btn {
      display: flex;
      gap: 8px;
      align-items: center;
      width: 100%;
      background-color: #252b61;
      border: 1px solid #252b61;
      color: white;
      font-size: 14px;
      letter-spacing: 0.03em;
      font-weight: 500;
      padding: 10px 20px;
      border-radius: 25px;
      cursor: pointer;
    }

    span {
      font-size: 14px;
      letter-spacing: 0.03em;
      font-weight: 500;
      color: #161616;
      input {
        width: 60px;
        padding: 10px 16px;
        color: #252b61;
        text-align: left;
        border: 1px solid #252b61;
        border-radius: 8px;
        margin: 0 5px;
      }
    }
  }

  .table-container {
    overflow: auto;
    border-radius: 20px;
    margin-top: 15px;
    border: 1px solid #d6cece;
  }

  .name {
    color: #252b61;
    font-size: 16px;
    cursor: pointer;
  }

  .report p {
    color: #252b61;
    font-size: 16px;
    margin-bottom: 0px;
    text-decoration: underline;
  }

  .report a:hover {
    text-decoration: underline;
  }

  .status {
    width: 100%;
    padding: 20px 10px;
    border-radius: 69px;
    font-size: 14px;
    letter-spacing: 0.03em;
    font-weight: 500;
    text-align: center;
    display: inline-block;
  }

  .status img {
    width: 15px;
    height: 16px;
  }
  .status p {
    margin: 0;
  }

  .rejected {
    color: #ff0000 !important;
    border: 1px solid #ff0000 !important;
    background-color: #fff !important;
    display: flex;
    align-items: center;
    gap: 9px;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
  }

  .upcoming {
    color: #252b61;
    border: 1px solid #252b61;
    background-color: #fff;
    display: flex;
    align-items: center;
    gap: 9px;
    justify-content: center;
  }

  .pending {
    color: #000000;
    border: 1px solid #f0da69;
    background-color: #f0da69;
    display: flex;
    align-items: center;
    gap: 9px;
    justify-content: center;
    align-items: center;
  }
  .others {
    color: #252b61;
    border: 1px solid #252b61;
    background-color: #fff;
    display: flex;
    align-items: center;
    gap: 9px;
    justify-content: center;
    padding: 10px 10px;
  }

  .status-icon {
    height: 16px;
    width: 16px;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .icon-all {
    display: flex;
    gap: 8px;
  }
  .icon {
    height: 22px;
    width: 22px;
    cursor: pointer;
  }

  .call-btn-width {
    width: 130px;
  }

  .call-btn {
    display: flex;
    gap: 23px;
    align-items: center;
    justify-content: left;
    background: #ffa700;
    border: 2px solid #ffa700;
    color: white;
    padding: 10px 15px;
    border-radius: 38px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #fff;

    .logo-icon-2 {
      height: 13.5px;
      width: 13.5px;
    }
  }
  .call-btn-upcoming {
    display: flex;
    gap: 23px;
    align-items: center;
    justify-content: left;
    background: rgb(255, 0, 4);
    border: 2px solid rgb(255, 0, 4);
    color: white;
    padding: 10px 15px;
    border-radius: 38px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #fff;

    .logo-icon-2 {
      height: 13.5px;
      width: 13.5px;
    }
  }

  .disabled-btn {
    display: flex;
    gap: 23px;
    align-items: center;
    justify-content: left;
    background: rgb(128, 128, 128);
    border: 2px solid rgba(128, 128, 128, 0.5);
    padding: 10px 15px;
    border-radius: 38px;
    cursor: not-allowed;
    font-size: 14px;
    font-weight: 500;
    color: white;

    .logo-icon {
      height: 13.5px;
      width: 13.5px;
    }
  }
`,Xn=qe.div`
  margin: 10px 0;
  width: 100%;
  font-family: system-ui, -apple-system, sans-serif;

  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .booking-details-mobile{
    max-width:50px;
  }

  .filter-list {
    border-top: 1px solid #e5e7eb;
  }

  .filter-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 0.5rem;
    border-bottom: 1px solid #e5e7eb;
  }

  input[type="checkbox"] {
    height: 1rem;
    width: 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
  }

  label {
    margin-left: 0.75rem;
    font-size: 0.875rem;
    color: #374151;
  }
`,Vn=e=>{const{filters:t,selectedFilters:r,handleChange:o,title:s="Filters",render:a}=e;return n.jsx(Xn,{children:n.jsx("div",{className:"filter-list",children:t.map((i,l)=>typeof a=="function"?a():n.jsxs("div",{className:"filter-item",children:[n.jsx("input",{type:"checkbox",id:`filter-${i==null?void 0:i.label}`,checked:r==null?void 0:r.includes(i==null?void 0:i.key),onChange:()=>o(i==null?void 0:i.key,t),disabled:i==null?void 0:i.disabled}),n.jsx("label",{htmlFor:`filter-${i==null?void 0:i.label}`,children:i==null?void 0:i.label})]},l))})})},Yn=({selectedbooking:e,reload:t})=>{const[r,o]=c.useState([]),[s,a]=c.useState({isUploading:!1}),i=He({mutationFn:b=>Hr(b)}),l=He({mutationFn:b=>Xr(b)}),p=async b=>{var h,j;try{const _={id:String(e.id),payload:{ext:".pdf"}},$=await i.mutateAsync(_),S=$==null?void 0:$.signedUrl,y=(h=$==null?void 0:$.attachment)==null?void 0:h.url,T=(j=$==null?void 0:$.attachment)==null?void 0:j.id;if(!S||S.trim()==="")throw new Error("Failed to get presigned URL");return await Yr.put(S,b,{headers:{"Content-Type":"application/pdf"}}),{publicUrl:y,presignedUrl:S,id:T}}catch(_){throw console.error("Error uploading file to S3:",_),_}},m=async b=>{try{if(!(e!=null&&e.id))throw new Error("Booking ID is required");if(!b)throw new Error("File is required");const h=await p(b);h!=null&&h.id&&await l.mutateAsync({id:String(h.id)})}catch{je.error("Upload failed.")}},f={onChange:b=>{let h=[...b.fileList];h=h.slice(-10),h=h.map(j=>(j.response&&(j.url=j.response.url),j)),o(h)},multiple:!0},g=async()=>{try{a({isUploading:!0});const b=r.map(h=>m(h.originFileObj));await Promise.all(b),je.success("Reports uploaded successfully"),o([])}catch(b){console.log(b),je.error("Failed to upload some reports")}finally{a({isUploading:!1}),t==null||t()}},x=(b,h,j,_)=>n.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-4 px-5 mb-3 flex justify-between items-center transition-all duration-200 ease-in-out shadow-sm hover:border-[#252b61] hover:shadow-md hover:-translate-y-0.5",children:[n.jsxs("div",{className:"flex items-center gap-3 flex-1",children:[n.jsx(gt,{className:"text-red-500 text-lg"}),n.jsx("span",{title:h.name,className:"text-sm text-gray-700 font-medium flex-1 overflow-hidden text-ellipsis whitespace-nowrap",children:h.name})]}),n.jsxs(ze,{onClick:()=>_.remove(),className:"!bg-red-500 hover:!bg-red-600 !px-3 !py-1 text-xs",children:[n.jsx(cr,{className:"mr-1"}),"Remove"]})]}),v=e==null?void 0:e.attachments;return n.jsxs("div",{className:"bg-white rounded-2xl max-w-5xl mx-auto p-6 border border-gray-200 shadow-lg",children:[n.jsxs("div",{className:"text-xl font-bold text-slate-800 mb-6 pb-3 border-b-2 border-slate-200 flex items-center gap-2",children:[n.jsx(gt,{className:"text-2xl text-blue-600"}),"Reports Management"]}),n.jsxs("div",{className:"bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center mb-8 transition-all duration-300 hover:border-[#252b61] hover:from-blue-50 hover:to-indigo-50",children:[n.jsx(_t,{beforeUpload:()=>!1,className:"upload_modal block w-full",itemRender:x,accept:".pdf",...f,fileList:r,children:n.jsxs("div",{className:"mb-6",children:[n.jsx("div",{className:"text-6xl mb-4 text-gray-400",children:"📄"}),n.jsxs(Ge,{children:[n.jsx(Hn,{className:"mr-2"}),r.length>0?"Add More Files":"Choose PDF Files"]})]})}),r.length>0&&n.jsx("div",{className:"mt-6",children:n.jsx(ze,{onClick:g,isLoading:s.isUploading,disabled:s.isUploading,className:"!h-12 !text-base !font-semibold !min-w-48 !bg-green-600 hover:!bg-green-700",children:s.isUploading?"Uploading...":`Upload ${r.length} Report${r.length>1?"s":""}`})}),n.jsxs("div",{className:"text-gray-500 text-sm mt-4 leading-relaxed",children:[n.jsx("div",{className:"font-medium mb-1",children:"📋 Upload Guidelines:"}),"• Select PDF files only • Maximum 10 files at once • Each file should be a complete report"]})]}),n.jsx(ur,{pdfLinks:v})]})},ur=({pdfLinks:e})=>{if(Array.isArray(e)&&!(e.length>0))return null;const t=async r=>{if(!r){je.error("Invalid report ID");return}try{const o=await Vr({id:r}),s=o==null?void 0:o.url;o&&(o!=null&&o.url)&&(o.url.startsWith("http://")||o.url.startsWith("https://"))?window.open(s,"_blank"):(je.error("Unable to open report. Invalid URL."),console.error("Invalid URL:",s))}catch(o){je.error("Failed to open report"),console.error("Error opening report:",o)}};return n.jsxs("div",{className:"files-section",children:[n.jsxs("div",{className:"text-xl font-bold text-slate-800 mb-2 pb-3 border-b-2 border-slate-200 flex items-center gap-2",children:[n.jsx(ft,{className:"text-2xl text-purple-600"}),"Uploaded Reports (",Array.isArray(e)?e.filter(r=>(r==null?void 0:r.active_status)==="active").length:0,")"]}),n.jsx("div",{className:"grid gap-2",children:Array.isArray(e)&&e.length>0?e.filter(r=>(r==null?void 0:r.active_status)==="active").map((r,o)=>{var s;return n.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-5 flex justify-between items-center transition-all duration-200 shadow-sm hover:shadow-lg md:flex-row flex-col md:gap-0 gap-3 md:text-left text-center",children:[n.jsxs("div",{className:"flex items-center gap-3 flex-1 md:justify-start justify-center",children:[n.jsx("div",{className:"bg-red-100 p-2 rounded-lg",children:n.jsx(gt,{className:"text-red-600 text-xl"})}),n.jsxs("div",{className:"flex-1",children:[n.jsx("div",{className:"text-base text-gray-800 font-semibold overflow-hidden text-ellipsis whitespace-nowrap",children:r!=null&&r.url?((s=r.url.split("/").at(-1))==null?void 0:s.replace(/\.[^/.]+$/,""))||`Report ${o+1}`:`Report ${o+1}`}),n.jsx("div",{className:"text-sm text-gray-500 mt-1",children:"PDF Document • Click to view"})]})]}),n.jsxs(ze,{className:"text-nowrap",onClick:()=>t(r==null?void 0:r.id),children:[n.jsx(ft,{className:"mr-2"}),"View PDF"]})]},(r==null?void 0:r.id)||o)}):n.jsxs("div",{className:"text-center p-12 px-6 text-slate-500 text-base bg-slate-50 rounded-xl border-2 border-dashed border-slate-300",children:[n.jsx("div",{className:"text-6xl mb-4 opacity-60",children:"📄"}),n.jsx("div",{className:"text-lg font-medium mb-2",children:"No reports uploaded yet"}),n.jsx("div",{className:"text-sm",children:"Upload your first PDF report to get started"})]})})]})},Bt=({open:e,handleClose:t,selectedBooking:r,statusTo:o,confirmText:s})=>{const a=He({mutationFn:({payload:l})=>er(l),onSuccess:()=>{je.success("Booking status updated successfully"),t()},onError:l=>{je.error((l==null?void 0:l.message)||"Failed to update booking status")}}),i=()=>{r!=null&&r.id&&o&&a.mutate({payload:{bookingIds:[String(r==null?void 0:r.id)],status:o}})};return n.jsxs(be,{open:e,handleClose:t,title:"Accept Booking",width:"600px",bodyClass:"p-4",children:[n.jsx(be.Body,{children:n.jsx("div",{className:"space-y-4",children:n.jsxs("p",{children:["Are you sure you want to ",s||`Change Booking Status to ${_e(o)}`," with booking id:"," ",r==null?void 0:r.id,"?"]})})}),n.jsx(be.Footer,{children:n.jsxs("div",{className:"flex justify-end gap-2",children:[n.jsx(Ge,{onClick:t,children:"close"}),n.jsx(ze,{onClick:i,children:s||`Change Booking Status to ${_e(o)}`})]})})]})},qn=qe.div`
  background: white;
  border-radius: 8px;
  min-width: 200px;
  max-width: 300px;
  padding: 0;
  width: max-content;

  .share-top-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid #e5e7eb;
    
    p { 
      margin: 0; 
      font-weight: 600; 
      font-size: 14px; 
      color: #374151; 
    }
    
    .share-close {
      cursor: pointer; 
      padding: 4px; 
      border-radius: 4px; 
      display: flex;
      align-items: center; 
      justify-content: center; 
      transition: background-color 0.2s;
      
      &:hover { 
        background-color: #f3f4f6; 
      }
      
      svg { 
        width: 16px; 
        height: 16px; 
        color: #6b7280; 
      }
    }
  }

  .share-items {
    padding: 8px 0;
    
    .share-items-list-div {
      display: flex; 
      align-items: center; 
      gap: 12px; 
      padding: 12px 16px;
      cursor: pointer; 
      transition: background-color 0.2s;
      
      &:hover { 
        background-color: #f9fafb; 
      }
      
      img { 
        width: 24px; 
        height: 24px; 
        border-radius: 4px; 
      }
      
      p { 
        margin: 0; 
        font-size: 14px; 
        color: #374151; 
        font-weight: 500; 
      }
    }
  }
`,Gn=qe.div`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover { 
    opacity: 0.8; 
  }
  
  img { 
    width: 24px; 
    height: 24px; 
  }
`,Kn=({data:e,className:t="",iconUrl:r="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/122601-1738832042247.png",children:o})=>{const[s,a]=c.useState(!1),i=()=>{a(!1)},l=g=>{a(g)},p=()=>{const g=[];return e.phone&&g.push({type:"whatsapp",name:"WhatsApp",icon:"https://cdn-icons-png.flaticon.com/512/733/733585.png"},{type:"telephone",name:"Call",icon:"https://cdn-icons-png.flaticon.com/512/724/724664.png"}),e.email&&g.push({type:"email",name:"Email",icon:"https://cdn-icons-png.flaticon.com/512/732/732200.png"}),g},m=g=>{const x=window.location.href,v=e.firstName?`${e.firstName} ${e.lastName||""}`.trim():"Contact",b=e.title||"Details",h=e.message||`Check out this ${b.toLowerCase()} for ${v}:
${x}`;switch(g){case"whatsapp":e.phone&&window.open(`https://api.whatsapp.com/send?phone=${e.phone}&text=${encodeURIComponent(h)}`,"_blank");break;case"email":e.email&&window.open(`mailto:${e.email}?subject=${encodeURIComponent(b)}&body=${encodeURIComponent(h)}`,"_self");break;case"telephone":e.phone&&window.open(`tel:${e.phone}`,"_self");break}i()},u=p();if(u.length===0)return null;const f=n.jsxs(qn,{children:[n.jsxs("div",{className:"share-top-header",children:[n.jsxs("p",{children:["Share ",e.title||"Details"]}),n.jsx("div",{className:"share-close",onClick:i,children:n.jsx(fo,{})})]}),n.jsx("div",{className:"share-items",children:u.map(g=>n.jsxs("div",{onClick:()=>m(g.type),className:"share-items-list-div",children:[n.jsx("img",{src:g.icon,alt:g.name}),n.jsx("p",{children:g.name})]},g.type))})]});return n.jsx(ir,{content:f,trigger:"click",open:s,onOpenChange:l,placement:"bottomLeft",overlayClassName:"share-popup-overlay",children:n.jsx(Gn,{className:t,children:o||n.jsx("img",{src:r,alt:"Share",className:"!w-7 !h-7"})})})},Ut=({data:e})=>{var i,l,p,m,u,f;const{pop:t,push:r,activeTypes:o}=or(["reports_download","reject_booking","accept_booking"]),s=c.useMemo(()=>[{type:"reports_download",component:n.jsx(be,{open:!0,handleClose:()=>t("reports_download"),title:"Reports Download",width:"600px",bodyClass:"p-4",children:n.jsx(be.Body,{children:n.jsx("div",{className:"space-y-4",children:n.jsx(ur,{pdfLinks:e==null?void 0:e.attachments})})})})},{type:"reject_booking",component:n.jsx(Bt,{open:!0,handleClose:()=>t("reject_booking"),selectedBooking:e,statusTo:"cancelled",confirmText:"Reject Booking"})},{type:"accept_booking",component:n.jsx(Bt,{open:!0,handleClose:()=>t("accept_booking"),selectedBooking:e,statusTo:"booking_scheduled",confirmText:"Accept Booking"})}],[e,t]),a=c.useMemo(()=>[{key:"accept",label:"Accept Booking",onClick:()=>{r("accept_booking")},allowedStatus:["open","awaiting_lab_confirmation"]},{key:"reject",label:"Reject Booking",onClick:()=>{r("reject_booking")},allowedStatus:["open","awaiting_lab_confirmation"]}].filter(x=>x.allowedStatus.includes(e==null?void 0:e.status)),[e,r]);return n.jsxs("div",{className:"action-div",children:[((i=e==null?void 0:e.attachments)==null?void 0:i.length)>0&&n.jsxs(ze,{onClick:()=>r("reports_download"),children:[n.jsx(rr,{size:20,className:"!mr-1"}),"Download Reports"]}),a.length>0&&n.jsx(io,{placement:"topLeft",menu:{items:a},children:n.jsx("span",{className:"text-4xl leading-none",children:"..."})}),n.jsx(Kn,{data:{id:e==null?void 0:e.id,email:(l=e==null?void 0:e.user)==null?void 0:l.email,phone:(p=e==null?void 0:e.user)==null?void 0:p.phone,firstName:(m=e==null?void 0:e.user)==null?void 0:m.first_name,lastName:(u=e==null?void 0:e.user)==null?void 0:u.last_name,title:"Appointment Details",message:`Check out this appointment details for ${((f=e==null?void 0:e.user)==null?void 0:f.first_name)||"patient"}:
${window.location.href}`}}),n.jsx(nr,{activeTypes:o,modals:s})]})},Qn=({data:e,instituteAction:t,time:r})=>{qr();const o=tr();switch(e==null?void 0:e.status){case"booking_scheduled":{const s=Fe((e==null?void 0:e.collection_1_date)??(e==null?void 0:e.collection_2_date),"DD/MM/YYYY"),a=Fe(`${s.format("YYYY-MM-DD")} ${(e==null?void 0:e.collection_1_slot)??(e==null?void 0:e.collection_2_slot)}`,"YYYY-MM-DD h:mm a"),i=Fe(r),l=a.diff(i),p=Fe.duration(l),m=Math.floor(p.asMinutes()),u=p.seconds(),f=`${m}:${Math.abs(Number(u.toString().padStart(2,"0")))}`,g=async x=>{x.key==="call"?console.log("hai"):x.key==="video"?o(`/VideoCall?roomID=${e==null?void 0:e.id}`):x.key==="chat"&&console.log("chat")};return ye,ye.Item,ye.Item,ye.Item,m<30&&m>-10?xe()?n.jsxs("span",{className:`status-btns ${m<10?"red-call":"yellow-call"}`,children:[n.jsx(Gr,{})," ",f]}):n.jsx(n.Fragment,{children:n.jsxs("div",{className:"next-text",children:["Next ",f," min"]})}):xe()?n.jsxs("span",{className:"mobile-upcoming-status status-btns text-green-600",children:[n.jsx("img",{className:"label-img",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1740997677616.png",alt:"upcoming"}),"upcoming"]}):n.jsx(n.Fragment,{children:n.jsxs("div",{className:"upcoming-text table-status-div text-green-600",children:[n.jsx("img",{className:"label-img",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1740997677616.png",alt:"upcoming"}),"Upcoming"]})})}case"open":{const s=a=>{a.key==="reshedule"?console.log("reshedule"):a.key==="reject"?t("reject",e):a.key==="accept"&&t("approve",e)};return ye,ye.Item,ye.Item,ye.Item,xe()?n.jsx("span",{className:"status-btns pending-status-mobile",children:"pending"}):n.jsx(n.Fragment,{children:n.jsxs("div",{className:"table-status-div pending-text",children:[n.jsx("img",{className:"label-img",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1740999025608.png",alt:"upcoming"}),"Pending"]})})}case"completed":return xe()?n.jsxs("span",{className:"status-btns completed-status-mobile whole-center",children:[n.jsx(Tt,{color:"green"}),"Completed"]}):n.jsx(n.Fragment,{children:n.jsxs("div",{className:"table-status-div completed-status",children:[n.jsx(Tt,{color:"green"}),"Completed"]})});case"cancelled":return xe()?n.jsxs("span",{className:"status-btns rejected-status-mobile",children:[n.jsx("img",{className:"label-img",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741429137408.png",alt:"upcoming"}),"Rejected"]}):n.jsx(n.Fragment,{children:n.jsxs("div",{className:"table-status-div rejected-text",children:[n.jsx("img",{className:"label-img",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1740999287595.png",alt:"upcoming"}),"Rejected"]})});default:return n.jsx("span",{title:e==null?void 0:e.status,className:" status-btns other-status-mobile",children:_e(e==null?void 0:e.status)})}};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Jn=Te("Calendar",Zn);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],ta=Te("CircleX",ea);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],oa=Te("Clock",ra);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],aa=Te("Mail",na);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],ia=Te("MapPin",sa);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],ca=Te("Phone",la);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],pa=Te("User",da),ua=({children:e,onClearButton:t,...r})=>n.jsxs("span",{className:"relative inline-block",children:[n.jsx(Ge,{className:"!cursor-default",...r,children:e}),n.jsx(ta,{color:"red",className:"cursor-pointer absolute top-0 right-[-5px] transform -translate-y-1/2 bg-white",onClick:t})]});function ma(e){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}ma(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var jt=e=>typeof e=="number"&&!isNaN(e),Ae=e=>typeof e=="string",mr=e=>typeof e=="function",fa=e=>Ae(e)||jt(e),ga=e=>c.isValidElement(e)||Ae(e)||mr(e)||jt(e),ha=1,fr=()=>`${ha++}`,he=new Map,xt=[],Dt=new Set,gr=()=>he.size>0,xa=(e,{containerId:t})=>{var r;return(r=he.get(t||1))==null?void 0:r.toasts.get(e)};function ba(e,t){var r;if(t)return!!((r=he.get(t))!=null&&r.isToastActive(e));let o=!1;return he.forEach(s=>{s.isToastActive(e)&&(o=!0)}),o}function ya(e){if(!gr()){xt=xt.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||fa(e))he.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=he.get(e.containerId);t?t.removeToast(e.id):he.forEach(r=>{r.removeToast(e.id)})}}var va=(e={})=>{he.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function wa(e,t){ga(e)&&(gr()||xt.push({content:e,options:t}),he.forEach(r=>{r.buildToast(e,t)}))}function hr(e,t){he.forEach(r=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===r.id)&&r.toggle(e,t==null?void 0:t.id)})}function _a(e){return Dt.add(e),()=>{Dt.delete(e)}}function ja(e){return e&&(Ae(e.toastId)||jt(e.toastId))?e.toastId:fr()}function Be(e,t){return wa(e,t),t.toastId}function Qe(e,t){return{...t,type:t&&t.type||e,toastId:ja(t)}}function Ze(e){return(t,r)=>Be(t,Qe(e,r))}function D(e,t){return Be(e,Qe("default",t))}D.loading=(e,t)=>Be(e,Qe("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function $a(e,{pending:t,error:r,success:o},s){let a;t&&(a=Ae(t)?D.loading(t,s):D.loading(t.render,{...s,...t}));let i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(m,u,f)=>{if(u==null){D.dismiss(a);return}let g={type:m,...i,...s,data:f},x=Ae(u)?{render:u}:u;return a?D.update(a,{...g,...x}):D(x.render,{...g,...x}),f},p=mr(e)?e():e;return p.then(m=>l("success",o,m)).catch(m=>l("error",r,m)),p}D.promise=$a;D.success=Ze("success");D.info=Ze("info");D.error=Ze("error");D.warning=Ze("warning");D.warn=D.warning;D.dark=(e,t)=>Be(e,Qe("default",{theme:"dark",...t}));function Ca(e){ya(e)}D.dismiss=Ca;D.clearWaitingQueue=va;D.isActive=ba;D.update=(e,t={})=>{let r=xa(e,t);if(r){let{props:o,content:s}=r,a={delay:100,...o,...t,toastId:t.toastId||e,updateId:fr()};a.toastId!==e&&(a.staleId=e);let i=a.render||s;delete a.render,Be(i,a)}};D.done=e=>{D.update(e,{progress:1})};D.onChange=_a;D.play=e=>hr(!0,e);D.pause=e=>hr(!1,e);const Sa=({addressData:e})=>n.jsx("div",{className:"inline-block",children:e!=null&&e.latitude||e!=null&&e.longitude?n.jsx("p",{children:(e==null?void 0:e.address)??""}):n.jsx("p",{children:`${(e==null?void 0:e.address)??""},${(e==null?void 0:e.city)??""},${(e==null?void 0:e.state)??""},${(e==null?void 0:e.zip)??""}`})}),xr=({bookingDetails:e})=>{var t,r,o,s,a,i,l,p,m,u,f,g,x,v,b;return n.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[n.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-6 flex items-center",children:[n.jsx(pa,{className:"w-5 h-5 mr-2 text-green-600"}),"Customer Information"]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[n.jsxs("div",{className:"space-y-4",children:[n.jsx("h4",{className:"font-medium text-gray-900 border-b border-gray-200 pb-2",children:"Personal Details"}),((t=e==null?void 0:e.user)==null?void 0:t.first_name)&&n.jsxs("div",{className:"flex items-start",children:[n.jsx("span",{className:"text-gray-600 w-24 flex-shrink-0",children:"Name:"}),n.jsxs("span",{className:"font-medium text-gray-900",children:[(r=e==null?void 0:e.user)==null?void 0:r.first_name," ",((o=e==null?void 0:e.user)==null?void 0:o.last_name)||""]})]}),((s=e==null?void 0:e.user)==null?void 0:s.employee_id)&&n.jsxs("div",{className:"flex items-start",children:[n.jsx("span",{className:"text-gray-600 w-24 flex-shrink-0",children:"Employee ID:"}),n.jsx("span",{className:"font-medium text-gray-900",children:(a=e==null?void 0:e.user)==null?void 0:a.employee_id})]}),((i=e==null?void 0:e.user)==null?void 0:i.gender)&&n.jsxs("div",{className:"flex items-start",children:[n.jsx("span",{className:"text-gray-600 w-24 flex-shrink-0",children:"Gender:"}),n.jsx("span",{className:"font-medium text-gray-900",children:(l=e==null?void 0:e.user)==null?void 0:l.gender})]}),((p=e==null?void 0:e.user)==null?void 0:p.dob)&&n.jsxs("div",{className:"flex items-start",children:[n.jsx("span",{className:"text-gray-600 w-24 flex-shrink-0",children:"D.O.B:"}),n.jsx("span",{className:"font-medium text-gray-900",children:(m=e==null?void 0:e.user)==null?void 0:m.dob})]}),((u=e==null?void 0:e.user)==null?void 0:u.blood_group)&&n.jsxs("div",{className:"flex items-start",children:[n.jsx("span",{className:"text-gray-600 w-24 flex-shrink-0",children:"Blood Group:"}),n.jsx("span",{className:"font-medium text-gray-900",children:(f=e==null?void 0:e.user)==null?void 0:f.blood_group})]})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsx("h4",{className:"font-medium text-gray-900 border-b border-gray-200 pb-2",children:"Contact Details"}),((g=e==null?void 0:e.user)==null?void 0:g.email)&&n.jsxs("div",{className:"flex items-start",children:[n.jsx(aa,{className:"w-4 h-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0"}),n.jsxs("div",{children:[n.jsx("span",{className:"text-gray-600 block text-sm",children:"Email"}),n.jsx("span",{className:"font-medium text-gray-900",children:(x=e==null?void 0:e.user)==null?void 0:x.email})]})]}),((v=e==null?void 0:e.user)==null?void 0:v.phone)&&n.jsxs("div",{className:"flex items-start",children:[n.jsx(ca,{className:"w-4 h-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0"}),n.jsxs("div",{children:[n.jsx("span",{className:"text-gray-600 block text-sm",children:"Phone"}),n.jsx("span",{className:"font-medium text-gray-900",children:(b=e==null?void 0:e.user)==null?void 0:b.phone})]})]}),n.jsxs("div",{className:"flex items-start",children:[n.jsx(ia,{className:"w-4 h-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0"}),n.jsxs("div",{className:"flex-1",children:[n.jsx("span",{className:"text-gray-600 block text-sm mb-1",children:"Address"}),n.jsx("div",{className:"bg-gray-50 rounded-lg p-3",children:n.jsx(Sa,{addressData:e==null?void 0:e.address})})]})]})]})]})]})},Na=({open:e,handleModalClose:t,selectedbooking:r})=>{var u,f,g,x;const{data:o,isFetching:s,refetch:a}=go({id:r==null?void 0:r.id}),i=(u=o==null?void 0:o.data)==null?void 0:u.booking,l=He({mutationFn:({payload:v})=>er(v),onSuccess:()=>{D.success("Booking status updated successfully"),a()},onError:v=>{D.error((v==null?void 0:v.message)||"Failed to update booking status")}}),p=v=>{i!=null&&i.id&&l.mutate({payload:{bookingIds:[String(i==null?void 0:i.id)],status:v}})},m=v=>{const b={completed:{color:"bg-green-100 text-green-800",icon:"🟢",text:"Completed"},rejected:{color:"bg-red-100 text-red-800",icon:"🔴",text:"Rejected"},open:{color:"bg-yellow-100 text-yellow-800",icon:"🟡",text:"Open"},booking_scheduled:{color:"bg-blue-100 text-blue-800",icon:"📅",text:"Scheduled"},sample_collected:{color:"bg-purple-100 text-purple-800",icon:"🧪",text:"Sample Collected"}},h=b[v]||b.open;return n.jsxs("span",{className:`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${h.color}`,children:[n.jsx("span",{className:"mr-1",children:h.icon}),h.text]})};return n.jsx(n.Fragment,{children:n.jsx(be,{open:e,handleClose:t,title:"Booking Details",width:"calc(100% - 30%)",children:n.jsx(be.Body,{children:n.jsxs("div",{className:"p-2 space-y-6 min-h-full",children:[n.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[n.jsxs("div",{children:[n.jsxs("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:["Booking #",i==null?void 0:i.id]}),n.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[n.jsx(Jn,{className:"w-4 h-4 mr-1"}),"Order placed on ",(f=i==null?void 0:i.created_at)==null?void 0:f.split("T")[0]," ","at ",(x=(g=i==null?void 0:i.created_at)==null?void 0:g.split("T")[1])==null?void 0:x.slice(0,5)]})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[m((i==null?void 0:i.status)||""),(i==null?void 0:i.status)==="booking_scheduled"&&n.jsx(We,{type:"primary",disabled:s,onClick:()=>p("sample_collected"),loading:s,className:"bg-blue-600 hover:bg-blue-700",children:"Mark as Sample Collected"}),(i==null?void 0:i.status)==="sample_collected"&&n.jsx(We,{disabled:s,onClick:()=>p("resample"),loading:s,className:"border-orange-500 text-orange-600 hover:bg-orange-50",children:"Resample"})]})]})}),n.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[n.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Order Status"}),n.jsx("div",{className:"space-y-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-gray-600",children:"Current Status:"}),n.jsx("span",{className:"font-semibold text-lg text-gray-900",children:_e(i==null?void 0:i.status)})]})})]}),n.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6",children:[n.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center",children:[n.jsx(oa,{className:"w-5 h-5 mr-2 text-blue-600"}),"Scheduled Date and Time"]}),n.jsx("div",{className:"bg-blue-50 rounded-lg p-4",children:n.jsxs("p",{className:"text-lg font-semibold text-blue-900",children:[i==null?void 0:i.collection_1_date," at"," ",i==null?void 0:i.collection_1_slot]})})]}),n.jsx(Yn,{selectedbooking:i,reload:a}),n.jsx(xr,{bookingDetails:i})]})})})})},Xa=()=>{var H,oe,ce,ae,pe,me,ue,Y;const e=tr(),{linkableId:t}=Kr(),[r,o]=Qr(),s=r.get("globalsearch"),a=r.get("tab"),[i,l]=c.useState(1),[p,m]=c.useState(10),{section:u}=Zr(),{activeTypes:f,push:g,pop:x,data:v,setData:b}=or(["booking_details","customerDetails"]),[h,j]=c.useState({dateRange:null,searchText:"",status:[]}),[_,$]=c.useState(()=>{const d=[{label:"All Bookings",key:"",data:null,classes:"all-label",type:"all"},{label:"Upcoming",key:"booking_scheduled,consultation_rescheduled",data:null,classes:"upcoming-label",type:"upcoming"},{label:"Pending",key:"open,payment_pending",data:null,classes:"open-label",type:"pending"},{label:"Prescription Sent",key:"prescription_sent_successfully",data:null,classes:"prescription-label",type:"prescription_sent"},{label:"Reports Delivered",key:"reports_delivered",data:null,classes:"reports-label",type:"reports_delivered"},{label:"Completed",key:"completed",data:null,classes:"completed-label",type:"completed"},{label:"Rejected",key:"cancelled",data:null,classes:"rejected-label",type:"rejected"}];let w=d[0];return u?w=d.find(R=>R.type===u)||d[0]:a&&(w=d.find(R=>R.type===a)||d[0]),{options:d,selectedFilter:w,selectedFilters:[w.type]}}),[S]=c.useState(new Date),y=()=>xe()?[...new Set(_.options.filter(d=>_.selectedFilters.includes(d.type)).map(d=>d.key))].join(","):_.selectedFilter.key,T=()=>{if(xe()){if(_.selectedFilters.includes("all"))return"All Bookings";const d=_.selectedFilters[0],w=_.options.find(R=>R.type===d);return(w==null?void 0:w.label)||"All Bookings"}return _.selectedFilter.label};c.useEffect(()=>{if(s){const d=_.options.find(w=>w.type==="all");d&&$(w=>({...w,selectedFilter:d,selectedFilters:["all"]}))}},[s,_.options]),c.useEffect(()=>{j(d=>({...d,searchText:s||""}))},[s]);const k=y(),O=T(),B=c.useMemo(()=>({from:"vendor",page:i,pageSize:p,status:xe()?k:h.status.join(","),id:String(t),searchText:s&&O==="All Bookings"?s:h.searchText,...h.dateRange?{dateRange:{dateType:"scheduled",from:h.dateRange.start_date,to:h.dateRange.end_date}}:{}}),[i,p,k,h,t,s,O]),N=co(B,600),{data:M,isPending:Q}=ho(N),[Z,G]=c.useState(!1),ee=d=>{s&&e("/bookings",{replace:!0}),$(w=>{const{selectedFilters:R,options:P}=w;let te;if(d==="all")te=["all"];else{const Ie=R.includes("all"),Je=R.includes(d);Ie?te=[d]:Je?te=R.filter(et=>et!==d):te=[...R,d]}te.length===0&&(te=["all"]);const Ce=te[0]||"all",Pe=P.find(Ie=>Ie.type===Ce)||P[0];return{...w,selectedFilters:te,selectedFilter:Pe}})},[re,K]=c.useState(!1),[ne,E]=c.useState(null),[V,z]=c.useState(""),W=c.useCallback((d,w={})=>{["reject","approve","booking_details","reschedule"].includes(d)&&(d==="booking_details"?(b({selectedbooking:w}),g("booking_details")):(z(d),E(w),K(!0)))},[g,b]),[C,A]=c.useState(!1);return xe()?n.jsxs(Lt,{children:[n.jsxs("div",{className:"booking-header-div flex flex-row justify-between items-center gap-2",children:[n.jsxs("div",{className:"flex gap-2 items-center flex-wrap",children:[n.jsx(Et,{onSearch:d=>{j(w=>({...w,searchText:d}))},className:"w-[100px]",searchText:h==null?void 0:h.searchText,placeHolder:"Search Bookings"}),n.jsx("div",{className:"date-range-picker",children:n.jsx(It.RangePicker,{className:"w-[200px]",format:"DD/MM/YYYY",placeholder:["Start Date","End Date"],onChange:d=>{d&&d[0]&&d[1]?j(w=>{var R,P;return{...w,dateRange:{start_date:((R=d==null?void 0:d[0])==null?void 0:R.format("YYYY-MM-DD"))??"",end_date:((P=d==null?void 0:d[1])==null?void 0:P.format("YYYY-MM-DD"))??""}}}):j(w=>({...w,dateRange:null}))}})})]}),n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx("button",{className:"download-btn !ml-0",onClick:()=>A(!0),children:n.jsx(rr,{size:20})}),C&&n.jsx(Ot,{sectionType:"bookings",sessionName:"bookings"}),n.jsxs("button",{className:"filter",onClick:()=>G(d=>!d),children:[n.jsx("span",{children:n.jsx("img",{src:Z?"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741429137408.png":"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741244655183.png",className:"filter",alt:"filter-icon"})}),"Filters"]})]}),n.jsx("div",{className:"booking-create"})]}),Z&&n.jsx(Vn,{filters:_.options.map(d=>({key:d.type,label:d.label})),selectedFilters:_.selectedFilters,handleChange:ee}),n.jsx("div",{className:"booking-mobile-body-div",children:(((oe=(H=M==null?void 0:M.data)==null?void 0:H.bookings)==null?void 0:oe.length)??0)>0?(pe=(ae=(ce=M==null?void 0:M.data)==null?void 0:ce.bookings)==null?void 0:ae.map)==null?void 0:pe.call(ae,d=>{var R,P,te,Ce;const w=Fe((d==null?void 0:d.collection_1_date)??(d==null?void 0:d.collection_2_date),"DD/MM/YYYY");return n.jsxs("div",{className:"booking-mobile-div-card",children:[n.jsxs("div",{className:"flex justify-between gap-[2px]",children:[n.jsxs("div",{className:"booking-mobile-card-details",children:[n.jsxs("div",{className:"calender-box-mobile",children:[n.jsx("span",{className:"date-number-span",children:w!=null&&w.isValid()?w.date():"N/A"}),n.jsx("span",{className:"date-month-name",children:w!=null&&w.isValid()?w.format("MMM").toUpperCase():"N/A"}),n.jsx("span",{className:"booking-type",children:w!=null&&w.isValid()?w.format("YYYY").toUpperCase():"N/A"})]}),n.jsxs("div",{className:"booking-details-mobile",children:[n.jsx("p",{title:`${((R=d==null?void 0:d.user)==null?void 0:R.first_name)??""} ${((P=d==null?void 0:d.user)==null?void 0:P.last_name)??""}`,onClick:()=>W("booking_details",d),className:"booking-details-name cursor-pointer",children:`${((te=d==null?void 0:d.user)==null?void 0:te.first_name)??""} ${((Ce=d==null?void 0:d.user)==null?void 0:Ce.last_name)??""}`}),n.jsx("p",{title:(d==null?void 0:d.collection_1_slot)??(d==null?void 0:d.collection_2_slot)??"N/A",className:"booking-details-slot",children:(d==null?void 0:d.collection_1_slot)??(d==null?void 0:d.collection_2_slot)??"N/A"}),n.jsx("p",{title:_e((d==null?void 0:d.type)??"N/A"),className:"booking-details-type",children:_e((d==null?void 0:d.type)??"N/A")})]})]}),n.jsx("div",{className:"status-mobile-div",children:n.jsx(Qn,{data:d,time:S,instituteAction:W})})]}),n.jsxs("div",{children:[n.jsx("hr",{className:"my-1"}),n.jsx(Ut,{data:d})]})]},d.id)}):!Q&&n.jsx("p",{className:"my-5  text-center text-red-500",children:"No bookings available"})}),n.jsx("div",{className:"load-more-btn-div",children:Q?n.jsx(Jr,{indicator:n.jsx(mt,{style:{fontSize:48},spin:!0})}):n.jsx(Ge,{disabled:(((me=M==null?void 0:M.data)==null?void 0:me.totalCount)??0)<p||Q,onClick:()=>m(d=>d+10),children:"Load More"})})]}):n.jsxs(Lt,{children:[n.jsxs("div",{className:"booking-container",children:[n.jsxs("div",{className:"heading",children:[n.jsx("h2",{children:"My Bookings"}),n.jsxs("p",{children:["My Bookings > ",_.selectedFilter.label," ",Number(s==null?void 0:s.length)>0?n.jsxs(n.Fragment,{children:["> ",s]}):""]})]}),n.jsxs("div",{className:"flex flex-col lg:flex-row gap-2 items-end lg:items-center justify-between mb-[15.5px]",children:[n.jsxs("div",{className:"flex gap-2 items-center",children:[n.jsx(Et,{onSearch:d=>{j(w=>({...w,searchText:d}))},className:"w-[100px]",searchText:h==null?void 0:h.searchText,placeHolder:"Search Bookings"}),n.jsx("div",{className:"sort-dropdown",children:n.jsx("div",{className:"select-wrapper",children:n.jsx(mo,{maxTagCount:1,value:h.status,mode:"multiple",maxTagPlaceholder:()=>"...",popupMatchSelectWidth:!1,placeholder:"Status",className:"min-w-[100px]",onChange:(d,w)=>{j(R=>{var P;return{...R,status:(P=w==null?void 0:w.map)==null?void 0:P.call(w,te=>te.value)}})},allowClear:!0,options:[{value:"open",label:"Open"},{value:"reports_delivered",label:"Reports Delivered"},{value:"completed",label:"Completed"},{value:"booking_scheduled",label:"Booking Scheduled"},{value:"awaiting_lab_confirmation",label:"Awaiting Lab Confirmation"},{value:"cancelled",label:"Cancelled"},{value:"sample_collected",label:"Sample Collected"}]})})}),n.jsx("div",{className:"date-range-picker",children:n.jsx(It.RangePicker,{className:"w-[200px]",format:"DD/MM/YYYY",placeholder:["Start Date","End Date"],onChange:d=>{d&&d[0]&&d[1]?j(w=>{var R,P;return{...w,dateRange:{start_date:((R=d==null?void 0:d[0])==null?void 0:R.format("YYYY-MM-DD"))??"",end_date:((P=d==null?void 0:d[1])==null?void 0:P.format("YYYY-MM-DD"))??""}}}):j(w=>({...w,dateRange:null}))}})}),r.get("clientOrderId")&&n.jsx("div",{children:n.jsxs(ua,{onClearButton:()=>{o(d=>(d.delete("clientOrderId"),d))},children:["Order Id:",r.get("clientOrderId")]})})]}),n.jsx("div",{className:"pd-container",children:n.jsx(Ot,{sectionType:"bookings",sessionName:"bookings"})})]}),n.jsx("div",{children:n.jsx(lo,{columns:[{label:"Serial No",key:"Serial No",dataIndex:"id",render:(d,w)=>n.jsx("p",{onClick:()=>W("booking_details",w),className:"text-center m-0 !text-blue-600 cursor-pointer",children:d})},{label:"Name",key:"Name",dataIndex:"user",render:(d,w)=>n.jsx("span",{onClick:()=>g("customerDetails",{selectedCustomer:w}),className:"name !text-blue-600 cursor-pointer",children:eo(d==null?void 0:d.first_name,d==null?void 0:d.last_name)})},{label:"Age & Sex",key:"Age & Sex",dataIndex:"user",render:d=>{var w,R;return n.jsx("p",{className:"m-0",children:`${(d==null?void 0:d.age)??"N/A"}/${((R=(w=d==null?void 0:d.gender)==null?void 0:w[0])==null?void 0:R.toUpperCase())??"N/A"}`})}},{label:"Date & Time",key:"Date & Time",dataIndex:"collection_1_date",render:(d,w)=>n.jsxs("p",{className:"m-0",children:[to(d??(w==null?void 0:w.collection_2_date))," / ",(w==null?void 0:w.collection_1_slot)??(w==null?void 0:w.collection_w_slot)??"N/A"]})},{label:"Visit Type",key:"Visit Type",dataIndex:"type",render:d=>n.jsx("p",{className:"m-0",children:_e(d)??"N/A"})},{label:"Status",key:"Status",dataIndex:"type",render:(d,w)=>_e(w==null?void 0:w.status)??"N/A"},{label:"Actions",key:"Actions",dataIndex:"actions",render:(d,w)=>n.jsx(Ut,{data:w})}],data:((ue=M==null?void 0:M.data)==null?void 0:ue.bookings)||[],showingName:r.get("clientOrderId")?`bookings for order:${r.get("clientOrderId")}`:"bookings",isLoading:Q,page:i,pageSize:p,pagination:!0,onPageChange:(d,w)=>{l(d),m(w)},total:((Y=M==null?void 0:M.data)==null?void 0:Y.totalCount)??0})})]}),n.jsx(nr,{modals:[{type:"booking_details",component:n.jsx(Na,{open:!0,handleModalClose:()=>x("booking_details"),selectedbooking:v==null?void 0:v.selectedbooking})},{type:"customerDetails",component:n.jsx(be,{title:"Customer Details",open:!0,handleClose:()=>x("customerDetails"),children:n.jsx(be.Body,{children:n.jsx(xr,{bookingDetails:v==null?void 0:v.selectedCustomer})})})}],activeTypes:f,data:v})]})};export{Xa as default};
