import{j as s,d as w,r as u,P as M}from"./index-ChUmNm8R.js";import{G as I,a as B}from"./index-gapj9Wcb.js";import{S as h}from"./index-D9Bv3C6k.js";import{C as E}from"./chevron-down-u38pTTSM.js";const k=w.span`
    display:inline-block;
    margin-left:10px;
    height:37px;

  .ant-select-selection-item {
    display: none !important;
  }
  .ant-select-selector{
    border-radius:8px !important;
    border:solid 1px #666B90 !important;
    height:37px !important;
  }
`;function D({pageSize:i,setPageSize:l}){const n=[{value:10,label:"10 per page"},{value:25,label:"25 per page"},{value:50,label:"50 per page"},{value:100,label:"100 per page"}],a=x=>{l==null||l(x)};return s.jsx(k,{children:s.jsx(h,{value:i,suffixIcon:null,onChange:a,prefix:s.jsxs("span",{className:"text-[#666B90] text-[14px] font-medium",children:["Page Size : ",s.jsx(E,{color:"#666B90"})," ",i]}),options:n})})}const R=({page:i,pageSize:l,total:n,onPageChange:a})=>{const[x,p]=u.useState(i??1),[m,b]=u.useState(l??10),c=Math.max(1,Math.ceil((n??0)/(l??10))),o=Math.min(Math.max(1,i??1),c);u.useEffect(()=>{p(i??x)},[i]),u.useEffect(()=>{b(l??m)},[l]),u.useEffect(()=>{const r=Math.max(1,Math.ceil((n??0)/(l??10)));i&&i>r&&(a==null||a(1,l??10))},[n,i,l,a]);const e=(r,t)=>{const f=Math.min(Math.max(1,r),Math.ceil((n??0)/t)),d=Math.max(1,t);(f!==r||d!==t)&&(p(f),b(d)),a==null||a(f,d)},v=r=>{const t=parseInt(r.target.value);p(t)},j=r=>{if(r.key==="Enter"){const t=parseInt(r.target.value);!isNaN(t)&&t>=1&&t<=c&&t!==o&&(e==null||e(t,m))}},N=r=>{const t=parseInt(r.target.value);isNaN(t)||t<1||t>c?p(o):t!==o&&(e==null||e(t,m))},y=r=>{e==null||e(o,r)};return n===0?null:s.jsxs("div",{className:"flex sm:flex-row flex-col justify-between items-center gap-2 p-2 my-1 sm:my-3",children:[s.jsx("div",{}),s.jsxs("div",{className:"flex items-center",children:[s.jsx("button",{onClick:()=>{o<=1||e==null||e(o-1,m)},disabled:o<=1,"aria-label":"Previous page",className:`p-2 border !rounded-full !mr-2 ${o<=1?"opacity-50 cursor-not-allowed":"hover:bg-gray-100"}`,children:s.jsx(I,{size:25})}),s.jsxs(M,{className:"!px-5 !py-2.5",onClick:()=>{o>=c||e==null||e(o+1,m)},disabled:o>=c,"aria-label":"Next page",children:["Next ",s.jsx(B,{className:"arrow-icon ml-1"})]})]}),s.jsxs("span",{className:"flex items-center",children:["Page"," ",s.jsx("input",{type:"number",min:1,max:c,value:x,onChange:v,onKeyDown:j,onBlur:N,className:"w-12 text-center border rounded-[8px] mx-1 h-[37px] !border-[#666B90]","aria-label":"Current page number"})," ","of ",c,s.jsx(D,{pageSize:m,setPageSize:y})]})]})};export{R as C};
