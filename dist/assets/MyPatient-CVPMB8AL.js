import{d as C,u as G,h as V,j as o,co as oe,cn as b,a as te,ck as ne,b as re,r as n,g as ie,bR as ae,cp as se,cq as de,cr as le,cs as J,P as ce,ct as pe,cu as xe}from"./index-ChUmNm8R.js";import{C as $}from"./CustomModal-Ds0Ku9jR.js";import{D as be}from"./DownloadForm-nnrnBOUB.js";import{S as ge}from"./SecoundaryButton-goiA8OO9.js";import{C as me}from"./CommonBreadCrumb-ZFUcDUQp.js";import{A as R}from"./AddPatientModal-B5S06OEr.js";import{C as he}from"./CustomTable-BBwjbMSz.js";import{C as H}from"./CommonSearchBox-hAv5GAZt.js";import{C as fe}from"./CustomSpinLoader-CrgQ8bNq.js";import"./xlsx-BUW7exb-.js";import"./DownOutlined-z3I3nDv9.js";import"./dropdown-C4zMWtkZ.js";import"./LeftOutlined-lLzXux5-.js";import"./collapse-BbEVqHco.js";import"./AddPatientForm-7FK6nVSq.js";import"./AddressAutoComplete-CKisEBlA.js";import"./index-Ds72tj9v.js";import"./CustomPagination-BfzEq6pA.js";import"./index-gapj9Wcb.js";import"./index-D9Bv3C6k.js";import"./useIcons-CDf6lDIp.js";import"./CheckOutlined-DPOLd74P.js";import"./chevron-down-u38pTTSM.js";import"./createLucideIcon-D1dtiQRH.js";import"./Table-BhIN-nUr.js";import"./styleChecker-DD0Z1krI.js";import"./addEventListener-D7w6vIGx.js";import"./useBubbleLock-BnnxIxI9.js";import"./button-D0Rmo6Y5.js";import"./index-De2sQM66.js";import"./useForm-CIMDi_Qk.js";import"./Input-ClusE8wk.js";import"./useForceUpdate-jQjUdsvY.js";import"./index-1XTAFx_Q.js";import"./Pagination-BbDnNTXA.js";import"./extendsObject-78o_rR5W.js";const ue=C.div`
  padding: 10px;

  .heading {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 22px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.36);

    .cut-icon {
      color: #252b61;
      cursor: pointer;
    }
  }

  .form-buttons {
    display: flex;
    gap: 15px;
    margin-top: 20px;
    justify-content: flex-end;

    .deleteButton {
      border-radius: 128px;
      background-color: #252b61;
      font-size: 16px;
      color: #fff;
      font-family: inter;
      padding: 10px 30px;
      border: none;
      cursor: pointer;
    }

    .cancelButton {
      background: none;
      border: 1px solid #252b61;
      color: #000;
      font-size: 16px;
      padding: 10px 30px;
      border-radius: 128px;
      cursor: pointer;
    }
  }

  .content-body {
    margin-top: 20px;
  }
`,q=({show:l,handleDeleteClose:a,patientId:g})=>{const f=G(),{linkableId:s}=V(),m=async()=>{var h;try{const i=await f(oe({patientId:g,clientId:s}));if(i!=null&&i.error){b.error(((h=i==null?void 0:i.error)==null?void 0:h.message)||"Unknown Error Occured");return}b.success("Employee deleted successfully!"),a()}catch{b.error("Failed to delete patient.")}};return o.jsx($,{title:"Delete Employee",open:l,handleClose:a,children:o.jsx($.Body,{children:o.jsxs(ue,{children:[o.jsx("div",{className:"content-body",children:o.jsxs("p",{children:["Are you sure you want to delete Employee I.D ",g,"? This action cannot be undone."]})}),o.jsxs("div",{className:"form-buttons",children:[o.jsx("button",{type:"button",className:"deleteButton",onClick:m,children:"Delete"}),o.jsx("button",{type:"button",className:"cancelButton",onClick:a,children:"Cancel"})]})]})})})},ke=C.div`
  width: 100%;
  font-family: inter;
  padding: 15px 10px;

  .patient-create {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .booking-mobile-body-div {
    background-color: rgb(254, 254, 254);
    padding: 0 5px;
    margin-top: 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .options-btn {
    background-color: white;
    border: none;
    padding: 0;
  }

  .booking-mobile-div-card {
    border: 1px solid rgb(240, 240, 240);
    padding: 7px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    box-shadow: 2px 4px 15px 0px #0000001a;

    .booking-mobile-card-details {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .patient-img-box-mobile {
      flex-basis: 67px;
      height: 71px;
      background-color: rgb(233, 242, 253);
      border: 1px solid rgb(240, 240, 240);
      border-radius: 15px;
      overflow: hidden;
      flex-shrink: 0;
    }
    .patient-img-box-mobile img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .booking-details-mobile {
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: start;
    }
    .booking-details-mobile p {
      margin: 0;
    }

    .patient-other-details {
      font-family: Inter;
      font-weight: 400;
      font-size: 14px;
      line-height: 16.94px;
      letter-spacing: 0%;
    }

    .patient-name {
      font-family: Inter;
      font-weight: 500;
      font-size: 16px;
      line-height: 19.36px;
      letter-spacing: 0%;
      color: #252b61;
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
    border-radius: 25px;
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
`,ye=C.div`
  width: 100%;
  padding: 30px 55px;
  min-height: 652px;
  font-family: inter;

  .search-btn {
    background-color: rgba(146, 189, 246, 1);
    aspect-ratio: 1/1;
  }

  .search-box {
    padding-left: 40px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

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
    justify-content: space-between;
    align-items: center;
  }

  .table-container {
    overflow: auto;
    border-radius: 20px;
    border: 1px solid #d6cece;
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
`,je=C.div`
  background: white;
  border-radius: 8px;
  padding: 3px 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: 100px;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  position: absolute;
  right: 0px;

  .menu-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .divider {
    height: 1px;
    background: #ddd;
    margin: 5px 0;
  }

  .edit-icon {
    color: #333;
  }

  .delete-icon {
    color: red;
  }
`,we=({onEdit:l,onDelete:a})=>o.jsxs(je,{children:[o.jsxs("div",{className:"menu-item",onClick:l,children:[o.jsx(pe,{className:"edit-icon"}),"Edit"]}),o.jsx("div",{className:"divider"}),o.jsxs("div",{className:"menu-item",onClick:a,children:[o.jsx(J,{className:"delete-icon"}),"Delete"]})]}),io=()=>{var N,_;const l=te(),a=G(),[g]=ne(),{linkableId:f}=V(),{clientDetails:s}=re(),[m,h]=n.useState(10),[i,K]=n.useState(1),[u,S]=n.useState(""),[I,c]=n.useState(!1),[v,k]=n.useState(!1),[Q,W]=n.useState(!1),[A,y]=n.useState(!1),[j,M]=n.useState(null),[z,w]=n.useState(null),[E,B]=n.useState(!0),[P,F]=n.useState({open:!1,id:""}),[d,X]=n.useState({});n.useEffect(()=>{S(g.get("globalsearch")||"")},[g]);const p=n.useCallback(async()=>{var e,t;try{B(!0);const r=await a(ie({searchText:u,page:i,count:m,department:"",clientId:f}));if(r!=null&&r.error){b.error(((e=r==null?void 0:r.error)==null?void 0:e.message)||"unknown error occured");return}else X((t=r==null?void 0:r.payload)==null?void 0:t.data)}catch{b.error("unknown error occured")}finally{B(!1)}},[a,u,i,m,f]);n.useEffect(()=>{const e=setTimeout(()=>{p()},300);return()=>clearTimeout(e)},[p]);const Y=e=>{l(`/employees/detail/${e}`)},Z=async e=>{var x,r,D,O,U,T,L;const t=await a(xe({userid:(x=e==null?void 0:e.id)==null?void 0:x.toString()}));if(console.log(t),(r=t==null?void 0:t.payload)!=null&&r.success){if((O=(D=t==null?void 0:t.payload)==null?void 0:D.data)!=null&&O.url){let ee=`${(T=(U=t==null?void 0:t.payload)==null?void 0:U.data)==null?void 0:T.url}&from_portal=adminDashboard`;window.open(ee,"_blank")}}else b.error(((L=t==null?void 0:t.error)==null?void 0:L.message)||"Something went wrong!.")};return ae()?o.jsx(o.Fragment,{children:o.jsxs(ke,{children:[o.jsx("div",{className:"mb-2",children:o.jsx(H,{placeHolder:"Search Name, Email",searchText:u,onSearch:e=>S(e)})}),o.jsx("div",{className:"flex justify-end gap-2",children:o.jsxs("div",{className:"patient-create",children:[o.jsx("button",{className:"add-patient",onClick:()=>{c(!0),k(!1)},children:"+ Employee"}),o.jsx("button",{className:"add-patient",onClick:()=>l("/toxic-substance/employee/add-bulk-employee"),children:"Bulk-Upload"})]})}),o.jsxs("div",{className:"booking-mobile-body-div",children:[o.jsx(fe,{spinning:E,children:(_=(N=d==null?void 0:d.associatedUsers)==null?void 0:N.map)==null?void 0:_.call(N,(e,t)=>o.jsx(o.Fragment,{children:o.jsxs("div",{onClick:()=>{P.open?F({open:!1,id:""}):l(`/employees/detail/${e==null?void 0:e.id}`,{state:{name:"Employee"}})},className:"booking-mobile-div-card",children:[P.open&&P.id===(e==null?void 0:e.id)&&o.jsx(we,{onEdit:()=>{c(!0),k(!0),w(e)},onDelete:()=>{y(!0),M(e==null?void 0:e.id)}}),o.jsxs("div",{className:"booking-mobile-card-details",children:[o.jsx("div",{className:"patient-img-box-mobile",children:e!=null&&e.image?o.jsx("img",{src:e==null?void 0:e.image,alt:"patient-img"}):o.jsx(se,{className:"w-full h-full"})}),o.jsxs("div",{className:"booking-details-mobile cursor-pointer",children:[o.jsx("p",{className:"patient-name",children:`${(e==null?void 0:e.first_name)??"N/A"} ${(e==null?void 0:e.last_name)??""}`}),o.jsxs("p",{className:"patient-other-details",children:["#",e==null?void 0:e.id," | ",(e==null?void 0:e.age)??"N/A","/",(e==null?void 0:e.gender)??"N/A"]})]})]}),o.jsx("div",{children:o.jsx("button",{className:"options-btn",onClick:x=>{x.stopPropagation(),F({open:!0,id:e==null?void 0:e.id})},children:o.jsx(de,{size:25})})})]},e==null?void 0:e.id)}))}),o.jsx("div",{onClick:()=>h(e=>e+10),className:"flex justify-center",children:o.jsx(ge,{isLoading:E,children:"Load More"})})]}),o.jsx(q,{show:A,handleDeleteClose:()=>{y(!1),p()},patientId:j||""}),I&&o.jsx(R,{reload:p,handleClose:()=>{c(!1),w({})},open:I,editMode:v,modalData:z,patientId:j})]})}):o.jsxs(ye,{children:[o.jsx(me,{items:[{name:"My Employees",link:"/employees"}]}),o.jsx("div",{className:"header mt-1",children:o.jsx("h2",{children:"My Employee"})}),o.jsxs("div",{className:"filter-container",children:[o.jsx("div",{}),o.jsxs("div",{className:"pd-container",children:[o.jsx(H,{placeHolder:"Search Name, Email",searchText:u,onSearch:e=>S(e)}),o.jsx("button",{className:"add-patient",onClick:()=>{c(!0),k(!1)},children:"Add Employee"}),o.jsx("div",{className:"add-patient",children:o.jsx("button",{onClick:()=>l("/employees/addEmployee/bulk?from=/employees"),className:"preview-button",children:"Bulk-Upload"})}),Q&&o.jsx(be,{sectionType:"bookings",closeForm:()=>W(!1)})]})]}),o.jsx("div",{children:o.jsx(he,{columns:[{key:"id",label:"ID",dataIndex:"id",render:e=>e??"N/A"},{label:"Name",key:"name",render:e=>o.jsxs("span",{className:"clickable !text-blue-600",onClick:()=>Y(e==null?void 0:e.id),children:[`${(e==null?void 0:e.first_name)??""} ${(e==null?void 0:e.last_name)??""}`,!(e!=null&&e.first_name)&&!(e!=null&&e.last_name)&&"N/A"]})},{key:"dob",label:"DOB",dataIndex:"dob",render:e=>e??"N/A"},{key:"age_gender",label:"Age/Gender",render:e=>o.jsxs("span",{children:[(e==null?void 0:e.age)??"N/A"," / ",(e==null?void 0:e.gender)??"N/A"]})},{key:"phone",label:"Phone",dataIndex:"phone",render:e=>e??"N/A"},{key:"action",label:"Action",render:e=>{var t;return o.jsxs(o.Fragment,{children:[o.jsx(le,{className:"!text-[#252b61] !mr-3 cursor-pointer",onClick:()=>{c(!0),k(!0),w(e)}}),o.jsx(J,{className:"text-red-500 cursor-pointer",onClick:()=>{y(!0),M(e==null?void 0:e.id)}}),s&&((t=s==null?void 0:s.agreed_services)==null?void 0:t.allow_sso)&&(s==null?void 0:s.subdomain_key)&&o.jsx(ce,{className:"!ml-2 px-3 py-1",onClick:()=>Z(e),children:"Create Order"})]})}}],data:d==null?void 0:d.associatedUsers,isLoading:E,showingName:"Employees",page:i,pageSize:m,pagination:!0,onPageChange:(e,t)=>{h(t),K(e)},total:d==null?void 0:d.total})}),o.jsx(q,{show:A,handleDeleteClose:()=>{y(!1),p()},patientId:j||""}),o.jsx(R,{reload:p,handleClose:()=>{c(!1),w({})},open:I,editMode:v,modalData:z,patientId:j})]})};export{io as default};
