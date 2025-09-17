import{d as O,k as L,a as R,u as $,r as l,h as J,g as M,z as d,j as a,M as q,I as K,P as Q,m as g}from"./index-ChUmNm8R.js";import{C as T}from"./CommonBreadCrumb-ZFUcDUQp.js";import{r as U}from"./constants-DgGhmzaQ.js";import{C as F}from"./CustomTable-BBwjbMSz.js";import{p as G}from"./packages.constants-DLMx6o0r.js";import"./DownOutlined-z3I3nDv9.js";import"./dropdown-C4zMWtkZ.js";import"./LeftOutlined-lLzXux5-.js";import"./collapse-BbEVqHco.js";import"./CustomSpinLoader-CrgQ8bNq.js";import"./CustomPagination-BfzEq6pA.js";import"./index-gapj9Wcb.js";import"./index-D9Bv3C6k.js";import"./useIcons-CDf6lDIp.js";import"./CheckOutlined-DPOLd74P.js";import"./chevron-down-u38pTTSM.js";import"./createLucideIcon-D1dtiQRH.js";import"./Table-BhIN-nUr.js";import"./styleChecker-DD0Z1krI.js";import"./addEventListener-D7w6vIGx.js";import"./useBubbleLock-BnnxIxI9.js";import"./button-D0Rmo6Y5.js";import"./index-De2sQM66.js";import"./useForm-CIMDi_Qk.js";import"./Input-ClusE8wk.js";import"./useForceUpdate-jQjUdsvY.js";import"./index-1XTAFx_Q.js";import"./Pagination-BbDnNTXA.js";import"./extendsObject-78o_rR5W.js";const H=O.div`
  width: 100%;
  padding: 38.81px 37.6px;
  min-height: 652px;
  font-family: inter;

  @media (max-width: 675px) {
    padding: 10px 20px;

    .top-header-responsive {
      flex-direction: column !important;
    }
    .filter-responsive {
      flex-wrap: wrap;
    }
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
`,ve=()=>{var v;const{type:b}=L(),f=R(),w=$(),r=G.find(e=>e.type===b);r||f(-1);const I=[{name:"Quick Links",link:"/quick-links"},{name:(r==null?void 0:r.name)??"",link:`/package/${r==null?void 0:r.type}`}],[h,k]=l.useState({table:!1}),{linkableId:y}=J(),[i,S]=l.useState({page:1,pageSize:10}),[u,z]=l.useState(""),[x,j]=l.useState(""),[s,C]=l.useState([]),[c,m]=l.useState([]),N=l.useCallback(async()=>{var e,t,n;try{k(D=>({...D,table:!0}));const o=await w(M({searchText:u,page:1,count:1e5,department:x,clientId:y,hasEmployeeId:!1}));if(o!=null&&o.error){d.error(((e=o==null?void 0:o.error)==null?void 0:e.message)||"unknown error occured");return}else C((n=(t=o==null?void 0:o.payload)==null?void 0:t.data)==null?void 0:n.associatedUsers)}catch{d.error("unknown error occured")}finally{k(p=>({...p,table:!1}))}},[w,u,x,y]);l.useEffect(()=>{const e=setTimeout(()=>{N()},250);return()=>clearTimeout(e)},[N]),l.useEffect(()=>{m([])},[s]);const E=e=>c.some(t=>t.email===(e==null?void 0:e.email)),_=e=>{m(t=>{const n=g(e==null?void 0:e.first_name,e==null?void 0:e.last_name),p=(e==null?void 0:e.email)||(e==null?void 0:e.phone);return t.some(o=>o.email===p)?t.filter(o=>o.email!==p):!p&&!n?(d.error("Employee email/phone and name are missing"),t):p?n?[...t,{name:n,email:e.email,phone:e.phone}]:(d.error("Employee name is missing"),t):(d.error("Employee email or phone is missing"),t)})},P=()=>{if(c.length===s.length)m([]);else{const e=s==null?void 0:s.reduce((t,n)=>((n!=null&&n.email||n!=null&&n.phone)&&g(n==null?void 0:n.first_name,n==null?void 0:n.last_name)&&t.push({name:g(n==null?void 0:n.first_name,n==null?void 0:n.last_name),email:n.email,phone:n.phone}),t),[]);m(e),d.success(`${e.length} employees selected`),s.length!==e.length&&d.error(`Couldn't add ${s.length-e.length} employees (missing name/email/phone).`)}},A=()=>{(c==null?void 0:c.length)>0?f(`/package/${b}/book`,{state:{selectedEmployees:c}}):d.error("Please select at least one employee")},B=l.useMemo(()=>{const e=(i.page-1)*i.pageSize,t=i.page*i.pageSize;return[...s].slice(e,t)},[i,s]);return a.jsxs(H,{children:[a.jsx(T,{className:"mb-2",items:I}),a.jsx("h2",{className:"!text-[28px] !font-semibold !mb-[27.19px]",children:r==null?void 0:r.name}),a.jsxs("div",{className:"flex justify-between items-center !mb-[26.14px] gap-2 top-header-responsive",children:[a.jsx("div",{className:"header",children:a.jsx("div",{className:"flex gap-2 items-center",children:a.jsxs("div",{className:"relative flex items-center",children:[x&&a.jsx(q,{className:"absolute left-2 top-1/2 translate-y-[-50%] text-red-600 cursor-pointer",onClick:()=>j("")}),a.jsxs("select",{onChange:e=>j(e.target.value),value:x,className:"border !border-blue-900 rounded-3xl !py-[10px] !pl-5 pr-4",children:[a.jsx("option",{value:"",disabled:!0,children:"Sort by"}),(v=U)==null?void 0:v.map(e=>a.jsx("option",{value:e==null?void 0:e.value,children:e==null?void 0:e.label},e==null?void 0:e.value))]})]})})}),a.jsx("div",{className:"filter-container",children:a.jsxs("div",{className:"flex gap-2 items-center filter-responsive",children:[a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"search-btn absolute rounded-full h-[70%] top-1/2 translate-y-[-50%] left-2 flex items-center justify-center",children:a.jsx(K,{})}),a.jsx("input",{placeholder:"Name or Department",className:"w-full border !border-blue-900 focus:outline-none rounded-3xl !py-[10px] search-box",type:"text",onChange:e=>z(e.target.value),value:u})]}),a.jsx(Q,{onClick:A,className:"!px-[20px] !py-[10px] text-nowrap text-[16px]",children:"Book Now"})]})})]}),a.jsx(F,{showingName:"Employees",columns:[{headerRender(){return a.jsx("input",{type:"checkbox",className:"scale-[1.45]",checked:c.length===s.length,onChange:P})},key:"select",label:"",render:(e,t)=>a.jsx("input",{type:"checkbox",className:"scale-[1.45]",checked:E(t),onChange:()=>_(t)})},{key:"name",label:"Name",render:(e,t)=>a.jsxs("div",{className:"flex gap-[9px] items-center",children:[a.jsx("img",{src:(t==null?void 0:t.image)??"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1746532359471.png",className:"w-[32px] h-[32px] rounded-full"}),a.jsx("span",{className:"text-[#252B61]",children:g(t==null?void 0:t.first_name,t==null?void 0:t.last_name)})]})},{key:"age",label:"Age",render:(e,t)=>(t==null?void 0:t.age)||"N/A"},{key:"dateOfJoining",label:"Date Of Joining",render:(e,t)=>(t==null?void 0:t.dateOfJoining)||"N/A"},{key:"email",label:"Email ID",render:(e,t)=>(t==null?void 0:t.email)||"N/A"},{key:"department",label:"Department",render:(e,t)=>(t==null?void 0:t.department)||"N/A"},{key:"siteId",label:"Site ID",render:(e,t)=>(t==null?void 0:t.siteId)||"N/A"}],data:B,pagination:!0,page:i==null?void 0:i.page,pageSize:i==null?void 0:i.pageSize,onPageChange:(e,t)=>{S({page:e,pageSize:t})},total:s==null?void 0:s.length,isLoading:h==null?void 0:h.table,rowKey:e=>e==null?void 0:e.id,scroll:{x:800}})]})};export{ve as default};
