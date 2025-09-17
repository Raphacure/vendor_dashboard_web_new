import{j as d,S as r,R as i,d as n}from"./index-ChUmNm8R.js";const s=n.button`
  background-color: white;
  color: #252b61;
  border-radius: 25px;
  padding: 4px 20px;
  border: 1px solid #252b61;
  cursor: pointer;

  &:disabled {
    color: #bdc0d0;
    border-color: #bdc0d0;
    cursor: not-allowed;
    opacity: 0.6;
  }
`,a=o=>d.jsxs(s,{disabled:o.isLoading||o.disabled,...o,children:[o.isLoading&&d.jsx(r,{className:"!mr-2",indicator:d.jsx(i,{spin:!0})}),o.children]});export{a as S};
