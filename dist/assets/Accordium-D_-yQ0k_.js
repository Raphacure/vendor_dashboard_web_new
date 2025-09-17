import{r as a,j as s,d as j}from"./index-ChUmNm8R.js";import{c as m,d as u}from"./index-CSCB4ib3.js";const v=j.div`
  width: 100%;
  font-family: Arial, sans-serif;

  .item {
    border-bottom: 1px solid #ddd;
  }

  .item:last-child {
    border-bottom: none;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    font-size: 18px;
    font-weight: bold;
    color: #1e255e;
    cursor: pointer;
  }

  .content {
    padding: 12px;
    font-size: 14px;
    color: #333;
  }

  .hidden {
    display: none;
  }
`,c=a.memo(({render:n,values:d})=>typeof n=="function"?n(d):n),$=({data:n,values:d,destroyOnHide:l=!1,defaultOpen:i=0,containerClassName:p="",headerClassName:x="",contentClassName:t="",className:h=""})=>{const[r,f]=a.useState(i);return s.jsx(v,{className:`${h??""}`,children:s.jsx("div",{className:p??"",children:n.map((o,e)=>s.jsxs("div",{className:`item ${r===e?"open":""}`,children:[s.jsxs("div",{className:`header ${x??""}`,onClick:()=>f(r===e?null:e),children:[o==null?void 0:o.title,r===e?s.jsx(m,{}):s.jsx(u,{})]}),l?r===e&&s.jsx("div",{className:`content ${t??""}`,children:s.jsx(c,{render:o==null?void 0:o.render,values:d})}):s.jsx("div",{className:`content ${t??""} ${r===e?"":"hidden"}`,children:s.jsx(c,{render:o==null?void 0:o.render,values:d})})]},e))})})};export{$ as C};
