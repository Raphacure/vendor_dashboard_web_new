import{d as C,a as I,u as U,r as n,cn as w,j as t,I as A,M as _,P,bN as y,f as j,d0 as R}from"./index-ChUmNm8R.js";import{b as E}from"./doctorUsersService--bmGzTWH.js";import{C as M}from"./CustomTable-BBwjbMSz.js";import"./CustomSpinLoader-CrgQ8bNq.js";import"./CustomPagination-BfzEq6pA.js";import"./index-gapj9Wcb.js";import"./index-D9Bv3C6k.js";import"./DownOutlined-z3I3nDv9.js";import"./useIcons-CDf6lDIp.js";import"./CheckOutlined-DPOLd74P.js";import"./chevron-down-u38pTTSM.js";import"./createLucideIcon-D1dtiQRH.js";import"./Table-BhIN-nUr.js";import"./styleChecker-DD0Z1krI.js";import"./addEventListener-D7w6vIGx.js";import"./useBubbleLock-BnnxIxI9.js";import"./button-D0Rmo6Y5.js";import"./LeftOutlined-lLzXux5-.js";import"./dropdown-C4zMWtkZ.js";import"./collapse-BbEVqHco.js";import"./index-De2sQM66.js";import"./useForm-CIMDi_Qk.js";import"./Input-ClusE8wk.js";import"./useForceUpdate-jQjUdsvY.js";import"./index-1XTAFx_Q.js";import"./Pagination-BbDnNTXA.js";import"./extendsObject-78o_rR5W.js";const D=C.div`
  width: 100%;
  padding: 30px 55px;
  font-family: inter;

  @media (max-width: 675px) {
    padding: 10px 20px;
    
    .top-header-responsive{
      flex-direction: column !important;
    }
    .filter-responsive{
      flex-wrap: wrap;
    }
  }


  .search-btn{
    background-color:rgba(146, 189, 246, 1);
    aspect-ratio: 1/1;
  }

  .search-box{
    padding-left:40px;
  }

  .header {
    display: flex;
    flex-direction: column;
    gap:15px;

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
        color:rgba(37, 43, 97, 1);
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

      padding:5px;
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
`,pe=()=>{const l=I(),m=U(),[s,v]=n.useState(10),[p,k]=n.useState(1),[c,N]=n.useState(""),[S,b]=n.useState(!0),[r,g]=n.useState([]),x=[{label:"Administrator",value:"administrator"},{label:"Hr",value:"hr"}],[d,f]=n.useState(""),h=n.useCallback(async()=>{var e,a,i;try{b(!0);const o=await m(E({search:c,subRole:d,count:s,page:p}));if(console.log("result",o),o!=null&&o.error){g({adminUsers:[],adminCount:0}),((e=o==null?void 0:o.error)==null?void 0:e.message)!=="No users found."&&w.error(((a=o==null?void 0:o.error)==null?void 0:a.message)||"Unknown Error Occured");return}g((i=o==null?void 0:o.payload)==null?void 0:i.data)}catch{w.error("unknown error occured")}finally{b(!1)}},[m,c,p,s,d]);n.useEffect(()=>{h()},[h]);const z=[{label:"Emp Id",key:"id",dataIndex:"id"},{label:"Name",key:"name",render:e=>t.jsxs("span",{children:[e==null?void 0:e.first_name," ",(e==null?void 0:e.last_name)??""]})},{label:"Email",key:"email",render:e=>t.jsx("span",{children:(e==null?void 0:e.email)??"N/A"})},{label:"Joining Date",key:"joining_date",render:e=>t.jsx("span",{children:y(e==null?void 0:e.joining_date).isValid()?y(e==null?void 0:e.joining_date).format("DD/MM/YYYY"):"N/A"})},{label:"Ph Number",key:"phone",render:e=>t.jsx("span",{children:(e==null?void 0:e.phone)??"N/A"})},{label:"Role",key:"role",render:e=>{var a,i;return t.jsx("span",{children:j((i=(a=e==null?void 0:e.roles)==null?void 0:a[0])==null?void 0:i.subRole)||"N/A"})}},{label:"Status",key:"status",render:e=>t.jsx("span",{children:j((e==null?void 0:e.active_status)==="deleted"?"in_active":e==null?void 0:e.active_status)})},{label:"Action",key:"action",render:e=>t.jsx("span",{className:"cursor-pointer",children:t.jsx(R,{className:"edit-icon",onClick:()=>{var a,i,o,u;((i=(a=e==null?void 0:e.roles)==null?void 0:a[0])==null?void 0:i.subRole)==="doctor"?l(`/onboarding/profile?doctorId=${(u=(o=e==null?void 0:e.roles)==null?void 0:o[0])==null?void 0:u.linkable_id}&from_page=/manageUsers`):l(`/manageUsers/edit?userId=${e==null?void 0:e.id}`)}})})}];return t.jsxs(D,{children:[t.jsx("div",{className:"flex justify-between mb-3 top-header-responsive",children:t.jsx("div",{className:"header",children:t.jsx("h2",{children:"Manage Users"})})}),t.jsx("div",{className:"flex justify-end",children:t.jsx("div",{className:"filter-container",children:t.jsxs("div",{className:"flex gap-2 items-center filter-responsive",children:[t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"search-btn absolute rounded-full h-[70%] top-1/2 translate-y-[-50%] left-2 flex items-center justify-center",children:t.jsx(A,{})}),t.jsx("input",{placeholder:"Search Name, Email",className:"w-full border !border-blue-900 focus:!border-blue-900 rounded-3xl py-2 search-box",type:"text",onChange:e=>N(e.target.value),value:c})]}),t.jsxs("div",{className:"relative flex items-center",children:[d&&t.jsx(_,{className:"absolute left-2 top-1/2 translate-y-[-50%] text-red-600 cursor-pointer",onClick:()=>f("")}),t.jsxs("select",{onChange:e=>f(e.target.value),value:d,className:"border !border-blue-900 rounded-3xl py-2 !pl-5 pr-4",children:[t.jsx("option",{value:"",disabled:!0,children:"Select Role"}),x==null?void 0:x.map(e=>t.jsx("option",{value:e==null?void 0:e.value,children:e==null?void 0:e.label},e==null?void 0:e.value))]})]}),t.jsx(P,{onClick:()=>l("/manageUsers/new"),className:"px-4 py-2 text-[16px]",children:"Add User"})]})})}),t.jsx("div",{children:t.jsx(M,{columns:z,data:(r==null?void 0:r.adminUsers)??[],showingName:"Users",isLoading:S,onPageChange:(e,a)=>{k(e),v(a)},pageSize:s,pagination:!0,page:p,total:r==null?void 0:r.adminCount})})]})};export{pe as default};
