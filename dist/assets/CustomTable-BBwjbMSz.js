import{d as E,r as F,j as e}from"./index-ChUmNm8R.js";import{C as $}from"./CustomSpinLoader-CrgQ8bNq.js";import{C as A}from"./CustomPagination-BfzEq6pA.js";import{s as D}from"./Table-BhIN-nUr.js";const H=E.div`
  &.table-container {
    border-radius: 20px;
    border: 1px solid #e5e7eb; /* border-gray-200 */
    background: #fff;
    overflow-x: auto;
  }
  .custom-ant-table .ant-table {
    background: transparent;
    border-radius: 20px;
  }
  .custom-ant-table .ant-table-thead > tr > th {
    background: #e8f1ff;
    font-size: 16px;
    border-bottom: 4px solid #fff;
    border-top: 2px solid white;

    &:first-child {
      border-left: 2px solid white;
      border-top-left-radius:20px !important;
    }

    &:last-child {
      border-right: 2px solid white;
      border-top-right-radius:20px !important;
    }
  }
  .custom-ant-table .ant-table-tbody > tr > td {
    font-size: 18px;
  }
  .custom-ant-table .ant-table-tbody > tr {
    border-top: 1px solid #f0f0f0;
    transition: background 0.2s;
  }
  .custom-ant-table .ant-table-tbody > tr:hover {
    background: #f5faff;
  }

  .ant-table-measure-row {
  display: none !important;
}
`,L=o=>typeof o=="function"?o:typeof o=="string"?t=>t[o]??t.id??t.key??String(Math.random()):(t,r)=>t.id??t.key??(r==null?void 0:r.toString())??String(Math.random()),G=({columns:o,data:t,page:r,pageSize:x,total:l,onPageChange:g,isLoading:h=!1,rowKey:y,className:j="",onRow:b,scroll:k={x:"max-content"},headerCellClassName:m="h-[50px] py-0 px-1 text-center",bodyCellClassName:p="h-[60px] text-center",rowClassName:S,pagination:c=!0,showingName:d="Data",expandable:v})=>{const w=F.useMemo(()=>o.map(({key:n,label:a,headerRender:f,render:u,width:C,align:N,sorter:T,dataIndex:_,fixed:z})=>({title:f?f():a,dataIndex:_,key:n,width:C,align:N,sorter:T,fixed:z,render:u?(s,i,M)=>u(s,i,M):void 0,onCell:(s,i)=>({className:p}),onHeaderCell:(s,i)=>({className:m})})),[o,p,m]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsxs("p",{className:"mb-3 mt-3",children:["Showing ",(t==null?void 0:t.length)??0," of ",c?l??"0":(t==null?void 0:t.length)??"0"," ",d]})}),e.jsx(H,{className:`table-container ${j}`,children:e.jsx($,{size:"large",spinning:h,children:e.jsx(D,{columns:w,dataSource:t,pagination:!1,rowKey:L(y),className:"min-w-full text-sm custom-ant-table",onRow:(n,a)=>({...b?b(n,a):{},className:S}),scroll:k,locale:{emptyText:`No ${d} Available`},expandable:v})})}),c&&e.jsx(A,{onPageChange:g,page:r,pageSize:x,total:l})]})};export{G as C};
