import{d as G,a as L,k as J,u as H,h as q,r as o,g as F,z as h,j as e,L as K,M as Q,I as V,P as W,S as X,R as Y,l as Z}from"./index-ChUmNm8R.js";import{G as D,a as y}from"./index-gapj9Wcb.js";import{S as N}from"./SecoundaryButton-goiA8OO9.js";import{C as tt}from"./CommonBreadCrumb-ZFUcDUQp.js";import{r as et}from"./constants-DgGhmzaQ.js";import"./DownOutlined-z3I3nDv9.js";import"./dropdown-C4zMWtkZ.js";import"./LeftOutlined-lLzXux5-.js";import"./collapse-BbEVqHco.js";const rt=G.div`
  width: 100%;
  padding: 48px 39px;
  min-height: 652px;
  font-family: inter;

  @media (max-width: 880px) {
    .filter-responsive {
      flex-wrap: wrap;
    }
    .top-header-responsive {
      flex-direction: column !important;
      align-items: flex-start;
    }
  }

  @media (max-width: 675px) {
    padding: 10px 20px;
  }

  .search-btn {
    background-color: rgba(146, 189, 246, 1);
    aspect-ratio: 1/1;
  }

  .search-box {
    padding-left: 40px;
  }

  .header {
    display: flex;
    flex-direction: column;
    gap: 15px;

    h2 {
      font-size: 24px;
      font-weight: 500;
      font-family: Inter;
      color: #000;
      text-align: left;
    }
  }

  .add-patient {
    background-color: white;
    border-radius: 25px;
    border: 1px solid #252b61;
    padding: 6px 20px;

    cursor: pointer;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: Inter;
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
    transition: background-color 0.3s ease;
  }

  .download-btn svg {
    color: #22336b;
    font-size: 14px;
  }

  .download-btn:hover {
    background-color: #a4dbc3;
  }

  .filter-container {
    display: flex;
    justify-content: end;
  }

  .table-container {
    overflow: auto;
    border-radius: 20px;
    border: 1px solid #d6cece;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    tr {
      border-bottom: 1px solid #d6cece;
    }

    tr:last-child {
      border-bottom: none;
    }

    th {
      font-size: 18px;
      font-weight: 500;
      font-family: Inter;
      color: #000;
      text-align: center;
      padding: 10px;
    }
    td {
      font-size: 18px;
      font-weight: 400;
      font-family: Inter;
      color: #000;
      padding: 10px;
      text-align: center;
      /* border-bottom: 1px solid #d6cece; */
    }

    thead {
      background-color: #e9f2fd;
      font-weight: bold;
      border: 2px solid white;
      border-bottom: none;
    }

    .name {
      color: blue;
      cursor: pointer;
    }

    .actions {
      .edit-icon {
        color: rgba(37, 43, 97, 1);
        cursor: pointer;
        height: 31px;
        margin-right: 10px;
      }

      .delete-icon {
        color: red;
        cursor: pointer;
        height: 31px;
      }
    }
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
    gap: 10px;

    .arrows {
      display: flex;
      align-items: center;
      gap: 13px;
    }

    span {
      font-size: 14px;
      letter-spacing: 0.03em;
      font-weight: 500;
      font-family: Inter;
      color: #161616;
      input {
        width: 30px;
        text-align: center;
        border: 1px solid #252b61;
        border-radius: 8px;
        margin: 0 5px;
      }
    }
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
    font-family: Inter;
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

  .checking {
    width: 100%;
    position: relative;
    border-radius: 3px;
    border: 1px solid #000;
    box-sizing: border-box;
    height: 24px;
  }

  .clickable {
    cursor: pointer;
  }

  .buttons-down {
    display: flex;
    align-items: center;
    gap: 13px;
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
      width: fit-content;
      display: flex;
      gap: 8px;
      align-items: center;
      background-color: #222;
      color: white;
      font-size: 14px;
      letter-spacing: 0.03em;
      font-weight: 500;
      font-family: Inter;
      padding: 10px 20px;
      border-radius: 25px;
      cursor: pointer;
      border: none;
    }
  }

  .checkbox-tick {
    width: 24px;
    height: 24px;
  }
`,ht=()=>{var z,P,A,E,B;const w=L(),{testId:u}=J(),b=H(),{linkableId:v}=q(),[p,st]=o.useState(10),[d,S]=o.useState(1),[k,R]=o.useState(""),[g,I]=o.useState(""),[c,f]=o.useState([]),[r,T]=o.useState({}),[l,j]=o.useState({table:!1,page:!1}),[x,M]=o.useState({}),U=[{name:"HR Dashboard",link:"/dashboard"},{name:"Toxic Substance",link:"/toxic-substance"},{name:x==null?void 0:x.service_name,link:`/toxic-substance/${u}`}];console.log("loadin",l);const C=o.useCallback(async()=>{var t,a;try{j(n=>({...n,table:!0}));const s=await b(F({searchText:k,page:d,count:p,department:g,clientId:v,hasEmployeeId:!0}));if(s!=null&&s.error){h.error(((t=s==null?void 0:s.error)==null?void 0:t.message)||"unknown error occured");return}else T((a=s==null?void 0:s.payload)==null?void 0:a.data)}catch{h.error("unknown error occured")}finally{j(i=>({...i,table:!1}))}},[b,k,d,p,g,v]);o.useEffect(()=>{const t=setTimeout(()=>{C()},300);return()=>clearTimeout(t)},[C]),o.useEffect(()=>{(async()=>{var a,i;try{j(m=>({...m,page:!0}));const n=await b(Z({package_id:u}));if(n!=null&&n.error){h.error(((a=n==null?void 0:n.error)==null?void 0:a.message)||"unknown error occured");return}else M((i=n==null?void 0:n.payload)==null?void 0:i.data)}catch{h.error("unknown error occured")}finally{j(s=>({...s,page:!1}))}})()},[b,u]);const _=t=>{f(a=>a!=null&&a.includes(t==null?void 0:t.id)?a.filter(i=>i!==(t==null?void 0:t.id)):[...a,t==null?void 0:t.id])},$=()=>{var i;const t=((i=r==null?void 0:r.associatedUsers)==null?void 0:i.map(s=>s==null?void 0:s.id))||[],a=t.every(s=>c.includes(s));f(a?s=>s.filter(n=>!t.includes(n)):s=>{const n=[...s];return t.forEach(m=>{n.includes(m)||n.push(m)}),n})},O=()=>{(c==null?void 0:c.length)>0?w(`/toxic-substance/${u}/book`,{state:{selectedEmployees:c}}):h.error("Please select at least one employee")};return e.jsxs(rt,{children:[(l==null?void 0:l.page)&&e.jsx(K,{}),e.jsx(tt,{className:"!mb-2",items:U}),e.jsx("h2",{className:"!font-semibold !text-[28px] capitalize !mb-[18px]",children:x==null?void 0:x.service_name}),e.jsxs("div",{className:"flex justify-between items-center !mb-[24px] gap-[21px] top-header-responsive",children:[e.jsx("div",{className:"header",children:e.jsx("div",{className:"flex gap-2 items-center",children:e.jsxs("div",{className:"relative flex items-center",children:[g&&e.jsx(Q,{className:"absolute left-2 top-1/2 translate-y-[-50%] text-red-600 cursor-pointer",onClick:()=>I("")}),e.jsxs("select",{onChange:t=>I(t.target.value),value:g,className:"border !border-blue-900 rounded-3xl py-2 !pl-5 pr-4",children:[e.jsx("option",{value:"",disabled:!0,children:"Sort by : All"}),(z=et)==null?void 0:z.map(t=>e.jsx("option",{value:t==null?void 0:t.value,children:t==null?void 0:t.label},t==null?void 0:t.value))]})]})})}),e.jsx("div",{className:"filter-container",children:e.jsxs("div",{className:"flex gap-[21px] items-center filter-responsive",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"search-btn absolute rounded-full h-[70%] top-1/2 translate-y-[-50%] left-2 flex items-center justify-center",children:e.jsx(V,{})}),e.jsx("input",{placeholder:"Name or Department",className:"w-full border !border-[#252B61] focus:outline-none rounded-3xl py-2 search-box",type:"text",onChange:t=>R(t.target.value),value:k})]}),e.jsx(N,{onClick:()=>w("/toxic-substance/employee/add-employee"),className:"!px-[20px] !py-[10px] text-[16px] text-nowrap",children:"Add Employee"}),e.jsx(N,{onClick:()=>w("/toxic-substance/employee/add-bulk-employee"),className:"!px-[20px] !py-[10px] text-[16px] text-nowrap",children:"Bulk Upload"}),c.length>0&&e.jsxs(N,{onClick:()=>f([]),className:"!px-[20px] !py-[10px] text-[16px] text-nowrap",children:["Clear Selection (",c.length,")"]}),e.jsx(W,{onClick:O,className:"!px-[20px] !py-[10px] text-[16px] text-nowrap",children:"Book Now"})]})})]}),e.jsx("div",{className:"table-container",children:e.jsx(X,{size:"large",indicator:e.jsx(Y,{spin:!0}),spinning:l==null?void 0:l.table,children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("input",{type:"checkbox",className:"scale-[1.65]",checked:((P=r==null?void 0:r.associatedUsers)==null?void 0:P.length)>0&&((A=r==null?void 0:r.associatedUsers)==null?void 0:A.every(t=>c.includes(t.id))),onChange:$})}),e.jsx("th",{children:"Emp ID"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Age"}),e.jsx("th",{children:"Date Of Joining"}),e.jsx("th",{children:"Email ID"}),e.jsx("th",{children:"Department"}),e.jsx("th",{children:"Site ID"})]})}),e.jsx("tbody",{children:((E=r==null?void 0:r.associatedUsers)==null?void 0:E.length)>0?(B=r==null?void 0:r.associatedUsers)==null?void 0:B.map((t,a)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("input",{type:"checkbox",className:"scale-[1.65]",checked:c.includes(t==null?void 0:t.id),onChange:()=>_(t)})}),e.jsx("td",{children:(t==null?void 0:t.employee_id)??"N/A"}),e.jsx("td",{children:`${t==null?void 0:t.first_name} ${(t==null?void 0:t.last_name)??""}`}),e.jsx("td",{children:(t==null?void 0:t.age)??"N/A"}),e.jsx("td",{children:(t==null?void 0:t.dateOfJoining)??"N/A"}),e.jsx("td",{children:(t==null?void 0:t.email)??"N/A"}),e.jsx("td",{children:(t==null?void 0:t.department)??"N/A"}),e.jsx("td",{children:(t==null?void 0:t.siteId)??"N/A"})]},a)):e.jsx("tr",{children:e.jsx("td",{colSpan:8,className:"text-center py-4",children:"No employees found"})})})]})})}),e.jsxs("div",{className:"pagination",children:[e.jsxs("div",{className:"buttons-down",children:[e.jsx("button",{onClick:()=>S(t=>t-1),disabled:d<=1,className:`back-arrow-icon ${d<=1?"opacity-50 !cursor-not-allowed":""}`,children:e.jsx(D,{size:25})}),e.jsxs("button",{disabled:d>=Math.ceil((r==null?void 0:r.total)/p),onClick:()=>S(t=>t+1),className:`page-btn ${d>=Math.ceil((r==null?void 0:r.total)/p)?"opacity-50 !cursor-not-allowed":""}`,children:["Next ",e.jsx(y,{className:"arrow-icon"})]})]}),e.jsxs("span",{children:["Page ",e.jsx("input",{type:"text",value:d,readOnly:!0})," of"," ",Math.max(1,Math.ceil((r==null?void 0:r.total)/p))]})]})]})};export{ht as default};
