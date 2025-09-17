import{r as p,bz as te,aH as X,bw as re,aA as se,O as k,bx as oe,f4 as ae,by as ne,cC as ie,bB as le,cG as K,f2 as de,b1 as ce,aY as Q,d as Y,a as pe,j as s,g3 as ue,c as ge,cV as fe}from"./index-ChUmNm8R.js";import{e as xe}from"./LeftOutlined-lLzXux5-.js";import{C as ee}from"./TeamOutlined-1BcXhxO2.js";import{g as he}from"./collapse-BbEVqHco.js";import{c as J}from"./createLucideIcon-D1dtiQRH.js";import{F as me,a as be}from"./index-CSCB4ib3.js";import{u as ve}from"./useUploadToS3-CcI0wiNy.js";import{F as ye,a as we}from"./FilePreview-CUbD6Isw.js";import{C as $e}from"./pill-BvFhSHtv.js";const je=p.forwardRef((e,r)=>{const{getPrefixCls:n}=p.useContext(te),{prefixCls:i,className:f,showArrow:u=!0}=e,x=n("collapse",i),j=X({[`${x}-no-arrow`]:!u},f);return p.createElement(ee.Panel,Object.assign({ref:r},e,{prefixCls:x,className:j}))}),Ce=e=>{const{componentCls:r,contentBg:n,padding:i,headerBg:f,headerPadding:u,collapseHeaderPaddingSM:x,collapseHeaderPaddingLG:j,collapsePanelBorderRadius:h,lineWidth:C,lineType:y,colorBorder:w,colorText:c,colorTextHeading:B,colorTextDisabled:M,fontSizeLG:O,lineHeight:E,lineHeightLG:m,marginSM:z,paddingSM:I,paddingLG:b,paddingXS:P,motionDurationSlow:R,fontSizeIcon:H,contentPadding:G,fontHeight:U,fontHeightLG:A}=e,_=`${k(C)} ${y} ${w}`;return{[r]:Object.assign(Object.assign({},oe(e)),{backgroundColor:f,border:_,borderRadius:h,"&-rtl":{direction:"rtl"},[`& > ${r}-item`]:{borderBottom:_,"&:first-child":{[`
            &,
            & > ${r}-header`]:{borderRadius:`${k(h)} ${k(h)} 0 0`}},"&:last-child":{[`
            &,
            & > ${r}-header`]:{borderRadius:`0 0 ${k(h)} ${k(h)}`}},[`> ${r}-header`]:Object.assign(Object.assign({position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:u,color:B,lineHeight:E,cursor:"pointer",transition:`all ${R}, visibility 0s`},ae(e)),{[`> ${r}-header-text`]:{flex:"auto"},[`${r}-expand-icon`]:{height:U,display:"flex",alignItems:"center",paddingInlineEnd:z},[`${r}-arrow`]:Object.assign(Object.assign({},ne()),{fontSize:H,transition:`transform ${R}`,svg:{transition:`transform ${R}`}}),[`${r}-header-text`]:{marginInlineEnd:"auto"}}),[`${r}-collapsible-header`]:{cursor:"default",[`${r}-header-text`]:{flex:"none",cursor:"pointer"},[`${r}-expand-icon`]:{cursor:"pointer"}},[`${r}-collapsible-icon`]:{cursor:"unset",[`${r}-expand-icon`]:{cursor:"pointer"}}},[`${r}-content`]:{color:c,backgroundColor:n,borderTop:_,[`& > ${r}-content-box`]:{padding:G},"&-hidden":{display:"none"}},"&-small":{[`> ${r}-item`]:{[`> ${r}-header`]:{padding:x,paddingInlineStart:P,[`> ${r}-expand-icon`]:{marginInlineStart:e.calc(I).sub(P).equal()}},[`> ${r}-content > ${r}-content-box`]:{padding:I}}},"&-large":{[`> ${r}-item`]:{fontSize:O,lineHeight:m,[`> ${r}-header`]:{padding:j,paddingInlineStart:i,[`> ${r}-expand-icon`]:{height:A,marginInlineStart:e.calc(b).sub(i).equal()}},[`> ${r}-content > ${r}-content-box`]:{padding:b}}},[`${r}-item:last-child`]:{borderBottom:0,[`> ${r}-content`]:{borderRadius:`0 0 ${k(h)} ${k(h)}`}},[`& ${r}-item-disabled > ${r}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:M,cursor:"not-allowed"}},[`&${r}-icon-position-end`]:{[`& > ${r}-item`]:{[`> ${r}-header`]:{[`${r}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:z}}}}})}},ze=e=>{const{componentCls:r}=e,n=`> ${r}-item > ${r}-header ${r}-arrow`;return{[`${r}-rtl`]:{[n]:{transform:"rotate(180deg)"}}}},ke=e=>{const{componentCls:r,headerBg:n,borderlessContentPadding:i,borderlessContentBg:f,colorBorder:u}=e;return{[`${r}-borderless`]:{backgroundColor:n,border:0,[`> ${r}-item`]:{borderBottom:`1px solid ${u}`},[`
        > ${r}-item:last-child,
        > ${r}-item:last-child ${r}-header
      `]:{borderRadius:0},[`> ${r}-item:last-child`]:{borderBottom:0},[`> ${r}-item > ${r}-content`]:{backgroundColor:f,borderTop:0},[`> ${r}-item > ${r}-content > ${r}-content-box`]:{padding:i}}}},Ne=e=>{const{componentCls:r,paddingSM:n}=e;return{[`${r}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${r}-item`]:{borderBottom:0,[`> ${r}-content`]:{backgroundColor:"transparent",border:0,[`> ${r}-content-box`]:{paddingBlock:n}}}}}},Se=e=>({headerPadding:`${e.paddingSM}px ${e.padding}px`,headerBg:e.colorFillAlter,contentPadding:`${e.padding}px 16px`,contentBg:e.colorBgContainer,borderlessContentPadding:`${e.paddingXXS}px 16px ${e.padding}px`,borderlessContentBg:"transparent"}),Fe=re("Collapse",e=>{const r=se(e,{collapseHeaderPaddingSM:`${k(e.paddingXS)} ${k(e.paddingSM)}`,collapseHeaderPaddingLG:`${k(e.padding)} ${k(e.paddingLG)}`,collapsePanelBorderRadius:e.borderRadiusLG});return[Ce(r),ke(r),Ne(r),ze(r),he(r)]},Se),Me=p.forwardRef((e,r)=>{const{getPrefixCls:n,direction:i,expandIcon:f,className:u,style:x}=ie("collapse"),{prefixCls:j,className:h,rootClassName:C,style:y,bordered:w=!0,ghost:c,size:B,expandIconPosition:M="start",children:O,destroyInactivePanel:E,destroyOnHidden:m,expandIcon:z}=e,I=le($=>{var N;return(N=B??$)!==null&&N!==void 0?N:"middle"}),b=n("collapse",j),P=n(),[R,H,G]=Fe(b),U=p.useMemo(()=>M==="left"?"start":M==="right"?"end":M,[M]),A=z??f,_=p.useCallback(($={})=>{const N=typeof A=="function"?A($):p.createElement(xe,{rotate:$.isActive?i==="rtl"?-90:90:void 0,"aria-label":$.isActive?"expanded":"collapsed"});return K(N,()=>{var S;return{className:X((S=N.props)===null||S===void 0?void 0:S.className,`${b}-arrow`)}})},[A,b,i]),q=X(`${b}-icon-position-${U}`,{[`${b}-borderless`]:!w,[`${b}-rtl`]:i==="rtl",[`${b}-ghost`]:!!c,[`${b}-${I}`]:I!=="middle"},u,h,C,H,G),V=p.useMemo(()=>Object.assign(Object.assign({},de(P)),{motionAppear:!1,leavedClassName:`${b}-content-hidden`}),[P,b]),W=p.useMemo(()=>O?ce(O).map(($,N)=>{var S,t;const o=$.props;if(o!=null&&o.disabled){const a=(S=$.key)!==null&&S!==void 0?S:String(N),d=Object.assign(Object.assign({},Q($.props,["disabled"])),{key:a,collapsible:(t=o.collapsible)!==null&&t!==void 0?t:"disabled"});return K($,d)}return $}):null,[O]);return R(p.createElement(ee,Object.assign({ref:r,openMotion:V},Q(e,["rootClassName"]),{expandIcon:_,prefixCls:b,className:q,style:Object.assign(Object.assign({},x),y),destroyInactivePanel:m??E}),W))}),We=Object.assign(Me,{Panel:je});/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],Z=J("Loader",Ie);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=[["path",{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4",key:"17ldeb"}],["path",{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7",key:"nc37y6"}],["rect",{width:"16",height:"5",x:"4",y:"2",rx:"1",key:"3jeezo"}]],Xe=J("PillBottle",Pe);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],D=J("RefreshCw",Be),Oe=Y.div`
  border-radius: 20px;
  border: 1px solid #ececec;
  width: 100%;
  .medicine-card {
    width: 100%;
    background: white;
    border-radius: 20px;
    border-radius: 1px solid #000 !important;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }

  .img-div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top-left-radius: 20px !important;
    border-top-right-radius: 20px !important;
    border-radius: 20px 20px 0px 0px;
    background: #eaeaf0;
  }
  .img-div img {
    width: 11rem;
    height: 7rem;
    object-fit: contain;
  }
  .sub-img-div {
    margin: 20px;
    height: 7rem;
  }

  .text-div {
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: space-around;
  }
  /* .medicineDetail {
    max-width: 13rem;
  } */
  .medicineDetail-unit {
    font-size: 13px !important;
    font-family: Outfit, sans-serif !important;
    color: #9a9898 !important;
    height: 15px !important;
  }
  .text-div .h3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    padding: 0px;
    color: #141414;
    font-family: Outfit, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 0px;
    /* width: 13rem; */
  }
  .text-div .h2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    padding: 0px;
    color: #141414;
    font-family: Outfit, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 0px;
    width: 13rem;
    margin-bottom: 10px;
  }

  .text-div .p {
    padding: 0px;
    color: #888;
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: line-through;
    margin-bottom: 0rem;
  }
  .btn-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn-div button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background: #252b61;
    color: #fff;
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
  }

  .ern-btn-div {
    border-radius: 50px;
    background-color: #f0f0f5;
    width: 50%;
  }
  .ern-btn-img img {
    margin-bottom: 2px;
  }
  .ern-btn-div button {
    position: relative;
    font-size: 14px;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #074498;
    text-align: center;
  }
  .cart-icon {
    margin-left: 0.5rem;
  }

  .Carousel-sub-cards-div {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 243.191px;
    height: 269px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid #ececec;
  }
  .Carousel-sub-cards-div img {
    margin-top: 3.4rem;
    height: 10rem;
  }
  .renderCard-div h5 {
    margin-top: 1rem;
    color: #1e1e1e;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.4px;
    font-family: Outfit, sans-serif;
  }
  .custom-carousel {
    position: relative;
  }
  .carousel-control-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    border: none;
    border-radius: 50%;
    color: #000;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    z-index: 1;
    filter: drop-shadow(2px 1px 19px rgba(0, 0, 0, 0.1));
  }
  .carousel-control-btn:hover {
    background-color: #fff;
  }
  .prev-btn {
    left: -20px;
  }
  .next-btn {
    right: -20px;
  }
  .carousal-main-heading {
    margin-bottom: 1rem;
  }
  .carousel-control-prev,
  .carousel-control-next {
    display: none;
    width: 0px;
    height: 0px;
  }
  .rating-banner-div {
    position: absolute;
    z-index: 1;
    margin-left: -16px;
    margin-top: 2rem;
    p {
      margin: auto;
      margin-top: -47px;
      margin-right: 19px;
      font-size: 16px;
      font-size: 12px;
    }
    img {
      height: 2rem;
    }
  }
  .bannerWrapper {
    position: absolute;

    .rectangle {
      background: #89db7b;
      padding: 7px;
      border-radius: 10px 45px 45px 0;
      width: 4rem;
      height: 1.5rem;
      display: flex;
      align-items: center;
    }
    .triangle {
      width: 0;
      height: 0;
      border-left: 1rem solid transparent;
      border-top: 0.8rem solid #89db7b;
    }
  }

  @media (max-width: 768px) {
    .Carousel-sub-cards-div {
      width: 28rem !important;
      border-radius: 25px !important;
    }
    .text-div .h2 {
      width: 10rem;
    }
    .carousal-main-div {
      padding: 30px 20px !important;
    }
  }
`,Re=()=>{const e=n=>{var u,x,j;let i;!Array.isArray(n)&&typeof n=="string"?i=((j=(x=(u=n==null?void 0:n.replace("{",""))==null?void 0:u.replace("}",""))==null?void 0:x.replace(/"/g,""))==null?void 0:j.split(","))??[]:Array.isArray(n)&&(i=n.flat(1/0));const f=new Array(5).fill(null);return Array.isArray(i)&&i.forEach((h,C)=>{f[C]=typeof h=="string"?h:null}),f};return{getUrls:e,getFirstImageUrl:n=>{const i=e(n);for(let f=0;f<(i==null?void 0:i.length);f++)if(i!=null&&i[f])return i==null?void 0:i[f];return""}}},Ye=({medicineDetail:e,sectionName:r,onCountChange:n})=>{var C,y,w;const[i,f]=p.useState((e==null?void 0:e.count)||1),u=p.useRef(e==null?void 0:e.service_code),x=p.useRef(n);p.useEffect(()=>{u.current=e==null?void 0:e.service_code,x.current=n},[e==null?void 0:e.service_code,n]),pe();const{getFirstImageUrl:j}=Re(),h=p.useMemo(()=>j((e==null?void 0:e.image)||(e==null?void 0:e.images)),[e]);return p.useEffect(()=>{x.current&&u.current&&x.current(u.current,i)},[i]),s.jsx(Oe,{children:s.jsx("div",{className:"medicine-card",children:s.jsxs("div",{className:"medicineDetail",children:[r=="auyrveda"&&s.jsx("div",{className:"rating-banner-div",children:s.jsxs("div",{className:"bannerWrapper",children:[s.jsxs("div",{className:"rectangle",children:[s.jsx(ue,{className:"me-2"}),Math.round(e==null?void 0:e.rating)]}),s.jsx("div",{className:"triangle"})]})}),s.jsx("div",{className:"img-div",onClick:()=>{},children:s.jsx("div",{className:"sub-img-div",children:s.jsx("img",{src:j(h)||"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1745933107521.png",alt:e==null?void 0:e.key})})}),s.jsxs("div",{className:"text-div",children:[s.jsx("p",{className:"h2",children:(e==null?void 0:e.service_name)||(e==null?void 0:e.name)}),s.jsx("p",{className:"medicineDetail-unit",children:e==null?void 0:e.unit}),s.jsxs("div",{className:"btn-div",children:[s.jsx("div",{className:"mt-0",children:(e==null?void 0:e.discounted_price)===(e==null?void 0:e.actual_cost)?s.jsxs("p",{className:"h3 ",children:["MRP   ₹",((C=e==null?void 0:e.price)==null?void 0:C.discounted_price)||(e==null?void 0:e.discounted_price)]}):s.jsxs(s.Fragment,{children:[s.jsxs("p",{className:"p ",children:["MRP   ₹",((y=e==null?void 0:e.price)==null?void 0:y.actual_cost)||(e==null?void 0:e.actual_cost)]}),s.jsxs("p",{className:"h3",children:["₹",((w=e==null?void 0:e.price)==null?void 0:w.discounted_price)||(e==null?void 0:e.discounted_price)]})]})}),s.jsxs("div",{className:"count-control flex items-center border rounded-md overflow-hidden",children:[s.jsx("button",{className:"p-1 bg-gray-100 hover:bg-gray-200 transition-colors",type:"button",onClick:()=>f(c=>Math.max(1,c-1)),"aria-label":"Decrease quantity",children:s.jsx(me,{className:"text-white"})}),s.jsx("span",{className:"px-3 py-1 text-center min-w-[40px]",children:i}),s.jsx("button",{type:"button",className:"p-1 bg-gray-100 hover:bg-gray-200 transition-colors",onClick:()=>f(c=>c+1),"aria-label":"Increase quantity",children:s.jsx(be,{className:"text-white"})})]})]})]})]})})})},Je=({acceptType:e,fileUrls:r,mode:n,setFileUrls:i})=>{var S;const f=p.useRef(null),[u,x]=p.useState([]),[j,h]=p.useState(!1),[C,y]=p.useState(!1),[w,c]=p.useState([]),[B,M]=p.useState(null),[O,E]=p.useState(!1),{user:m}=ge(({auth:t})=>t),{uploadToS3:z}=ve(),I=t=>{if(t.size>10485760)return console.error("File too large:",t.name),!1;const a=t.type.split("/")[1];return e.includes(a)?!0:(console.error("Invalid file type:",t.type),!1)},b=async t=>{if(t){if(n==="multiple"&&u.some(a=>a.name===t.name&&a.size===t.size)){console.warn("File already uploaded:",t.name);return}if(I(t)){y(!0),n==="single"&&r.length>0&&(i([]),x([]),c(o=>o.filter(a=>a.status!=="success"))),c(o=>[...o,{name:t.name,status:"uploading",file:t}]);try{const o=await z(t,m==null?void 0:m.id);c(g=>g.map(l=>l.name===t.name?{...l,status:"success"}:l)),setTimeout(()=>{c(g=>g.filter(l=>!(l.name===t.name&&l.status==="success")))},1500);const a=n==="single"?[o]:[...r,o];i(a);const d=n==="single"?[{name:t.name,size:t.size}]:[...u,{name:t.name,size:t.size}];x(d)}catch(o){console.error(o),c(a=>a.map(d=>d.name===t.name?{...d,status:"error"}:d))}finally{y(!1)}}}},P=async t=>{if(n==="single"&&t.length>0){b(t[0]);return}const o=t.filter(l=>u.some(T=>T.name===l.name&&T.size===l.size)?(console.warn("File already uploaded:",l.name),!1):!!I(l));if(o.length===0)return;y(!0),c(l=>[...l,...o.map(v=>({name:v.name,status:"uploading",file:v}))]);const a=await Promise.allSettled(o.map(l=>z(l,m==null?void 0:m.id))),d=[],g=[];if(a.forEach((l,v)=>{const F=o[v];l.status==="fulfilled"?(d.push(l.value),g.push(F),c(T=>T.map(L=>L.name===F.name?{...L,status:"success"}:L))):(console.error(`Failed to upload ${F.name}:`,l.reason),c(T=>T.map(L=>L.name===F.name?{...L,status:"error"}:L)))}),d.length>0&&setTimeout(()=>{c(l=>l.filter(v=>!g.some(F=>F.name===v.name&&v.status==="success")))},1500),d.length>0){const l=[...r,...d];i(l);const v=[...u,...g.map(F=>({name:F.name,size:F.size}))];x(v)}y(!1)},R=async t=>{const o=w.find(a=>a.name===t&&a.status==="error");if(!o||!o.file){console.error("No file to retry or original file not found");return}c(a=>a.map(d=>d.name===t?{...d,status:"uploading"}:d));try{const a=await z(o.file,m==null?void 0:m.id);c(l=>l.map(v=>v.name===t?{...v,status:"success"}:v)),setTimeout(()=>{c(l=>l.filter(v=>!(v.name===t&&v.status==="success")))},1500);const d=[...r,a];i(d);const g=[...u,{name:o.file.name,size:o.file.size}];x(g)}catch(a){console.error(`Failed to retry upload for ${t}:`,a),c(d=>d.map(g=>g.name===t?{...g,status:"error"}:g))}},H=async()=>{const t=w.filter(a=>a.status==="error"&&a.file);if(t.length===0)return;c(a=>a.map(d=>d.status==="error"&&d.file?{...d,status:"uploading"}:d)),y(!0);const o=[];for(const a of t)if(a.file)try{const d=await z(a.file,m==null?void 0:m.id);c(g=>g.map(l=>l.name===a.name?{...l,status:"success"}:l)),o.push({url:d,file:a.file})}catch(d){console.error(`Failed to retry upload for ${a.name}:`,d),c(g=>g.map(l=>l.name===a.name?{...l,status:"error"}:l))}if(o.length>0){const a=[...r,...o.map(g=>g.url)];i(a);const d=[...u,...o.map(g=>({name:g.file.name,size:g.file.size}))];x(d)}setTimeout(()=>{c(a=>a.filter(d=>d.status!=="success"))},1500),y(!1)},G=t=>{const o=t.target.files;o&&o.length>0&&(n==="multiple"?P(Array.from(o)):b(o[0]))},U=t=>{t.preventDefault(),t.stopPropagation(),h(!1),t.dataTransfer.files&&t.dataTransfer.files.length>0&&(n==="multiple"?P(Array.from(t.dataTransfer.files)):b(t.dataTransfer.files[0]))},A=t=>{t.preventDefault(),t.stopPropagation(),h(!0)},_=t=>{t.preventDefault(),t.stopPropagation(),h(!1)},q=()=>{var t;(t=f.current)==null||t.click()},V=()=>`${e.map(o=>o.toUpperCase()).join(", ")} formats up to 10 MB`,W=t=>{M(t),E(!0)},$=()=>{E(!1),M(null)},N=t=>{const o=[...r];o.splice(t,1),i(o);const a=[...u];a.splice(t,1),x(a)};return s.jsxs(s.Fragment,{children:[s.jsxs(Ae,{className:"flex flex-col justify-center items-center gap-[9px] px-[30px]",onDrop:U,onDragOver:A,onDragLeave:_,children:[s.jsx("input",{type:"file",ref:f,onChange:G,className:"hidden",accept:(S=e==null?void 0:e.map(t=>t==="pdf"?"application/pdf":t==="jpeg"?"image/jpeg":t==="png"?"image/png":""))==null?void 0:S.join(","),multiple:n==="multiple"}),s.jsxs("div",{children:[s.jsx("img",{className:"uploadIcon",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/111904-1743769172669.png",alt:""}),s.jsxs("div",{children:[s.jsxs("span",{className:"chooseFile cursor-pointer",onClick:q,children:["Choose ",n==="multiple"?"files":"a file"]})," ","or drag and drop"]}),s.jsxs("p",{children:[V()," ",n==="single"&&"(Single file only)"]})]}),w.length>0&&s.jsxs("div",{className:"uploading-files-container",children:[s.jsxs("div",{className:"uploading-title",children:[w.some(t=>t.status==="uploading")&&s.jsx(Z,{size:14,className:"loading-spinner"}),"Uploading files...",w.some(t=>t.status==="error")&&s.jsxs("button",{className:"retry-all-btn",onClick:H,disabled:C,children:[s.jsx(D,{size:14}),"Retry All"]})]}),s.jsx("div",{className:"uploading-files",children:w.map((t,o)=>s.jsxs("div",{className:`uploading-file-item status-${t.status}`,children:[s.jsx("div",{className:"uploading-file-name",children:t.name}),s.jsxs("div",{className:"uploading-file-status",children:[t.status==="uploading"&&s.jsx(Z,{size:14,className:"loading-spinner"}),t.status==="success"&&s.jsx("span",{className:"success-text",children:"Uploaded"}),t.status==="error"&&s.jsxs("div",{className:"error-container",children:[s.jsx($e,{size:14,color:"#ff4d4f"}),s.jsx("span",{className:"error-text",children:"Failed"}),s.jsxs("button",{className:"retry-btn",onClick:()=>R(t.name),disabled:C,children:[s.jsx(D,{size:12}),"Retry"]})]})]})]},`${t.name}-${o}`))})]}),(r==null?void 0:r.length)>0&&s.jsxs("div",{className:"uploaded-files-container",children:[s.jsxs("div",{className:"files-count",children:[r.length," files uploaded"]}),s.jsx("div",{className:"files-preview-scroll",children:s.jsx("div",{className:"files-preview-grid",children:r.map((t,o)=>s.jsx(ye,{handleRemoveFile:()=>N(o),url:t,openPreview:W,fileContainerClassName:"w-full"},o))})})]})]}),s.jsx(we,{previewOpen:O,closePreview:$,previewFile:B})]})},Ae=Y.div`
  border: 1px dashed #7291f4;
  border-radius: 25px;
  padding: 35px;

  font-weight: 400;
  font-size: 18px;
  letter-spacing: 1.5px;
  text-align: center;
  color: #252b61;
  background-color: white;

  .uploadIcon {
    width: 60px;
    height: 51px;
  }

  .chooseFile {
    font-weight: 500;
    border-bottom: 1px solid #252b61;
  }

  p {
    color: #888888;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1.5px;
    text-align: center;
  }

  .uploading-files-container {
    width: 100%;
    margin-top: 15px;
    text-align: left;
    background-color: #f5f8ff;
    border-radius: 8px;
    padding: 10px;
  }

  .uploading-title {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 500;
    color: #252b61;
    margin-bottom: 8px;
    justify-content: space-between;
  }

  .loading-spinner {
    animation: spin 1.5s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .uploading-files {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .uploading-file-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 10px;
    border-radius: 4px;
    background-color: white;
    font-size: 12px;
    border-left: 3px solid #7291f4;

    &.status-success {
      border-left-color: #52c41a;
    }

    &.status-error {
      border-left-color: #ff4d4f;
    }
  }

  .uploading-file-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
  }

  .uploading-file-status {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .success-text {
    color: #52c41a;
  }

  .error-container {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .error-text {
    color: #ff4d4f;
  }

  .retry-btn {
    background: none;
    border: none;
    color: #7291f4;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 2px 5px;
    font-size: 11px;
    margin-left: 3px;

    &:hover {
      text-decoration: underline;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .retry-all-btn {
    background: #e6eeff;
    border: 1px solid #d1deff;
    color: #7291f4;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 3px 8px;
    font-size: 12px;
    border-radius: 4px;
    margin-left: auto;

    &:hover {
      background: #d1deff;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .uploaded-files-container {
    width: 100%;
    margin-top: 15px;
    text-align: left;
  }

  .files-count {
    font-size: 16px;
    margin-bottom: 10px;
    color: #252b61;
  }

  .files-preview-scroll {
    width: 100%;
    overflow-x: auto;
    padding-bottom: 10px; /* For scrollbar space */

    /* Customizing scrollbar */
    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: #c1cdf7;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #7291f4;
    }
  }

  .files-preview-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-height: 150px;
    overflow-y: auto;
  }
`;Y.div`
  .image-preview-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    /* min-height: 70vh; */
    overflow: auto;
  }

  .image-preview {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .pdf-preview-container {
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 70vh;
  }

  .pdf-preview-iframe {
    width: 100%;
    min-height: 70vh;
    border: none;
  }

  .generic-preview-container {
    padding: 20px;
    text-align: center;
  }

  .no-preview-message {
    margin-bottom: 15px;
    color: #666;
  }

  .download-link {
    color: #7291f4;
    text-decoration: none;
    padding: 8px 16px;
    border: 1px solid #7291f4;
    border-radius: 4px;
    display: inline-block;
    margin-top: 10px;

    &:hover {
      background-color: #f0f4ff;
    }
  }

  .close-preview-btn {
    background-color: #7291f4;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      background-color: #5a7ae4;
    }
  }
`;function Ke(e){return fe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 5h8"},child:[]},{tag:"path",attr:{d:"M13 9h5"},child:[]},{tag:"path",attr:{d:"M13 15h8"},child:[]},{tag:"path",attr:{d:"M13 19h5"},child:[]},{tag:"path",attr:{d:"M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"},child:[]},{tag:"path",attr:{d:"M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"},child:[]}]})(e)}export{We as C,Je as F,Ye as M,Xe as P,Ke as T};
