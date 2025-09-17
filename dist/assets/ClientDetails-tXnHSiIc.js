import{d as pe,r as a,u as me,dW as Ze,dX as Je,aJ as Ke,dY as Xe,cn as Q,j as e,P as he,dh as fe,f as Ue,dZ as et,d_ as tt,d$ as at,a as st,e0 as nt,e1 as lt,e2 as We,cL as x,e3 as it,e4 as ot,bj as rt,br as ct,e5 as dt,e6 as ut,e7 as pt,e8 as Le,cu as mt,cz as xt,e9 as ht,ea as gt,eb as ze,c as je,ec as ft,dy as Ce,ed as bt,c_ as yt,c$ as Ee,ee as jt,ef as vt,eg as wt,eh as Ct,ei as Nt,ej as St,bN as kt,h as _t,ek as At,k as Dt,el as Tt}from"./index-ChUmNm8R.js";import{C as oe}from"./CustomModal-Ds0Ku9jR.js";import{S as ge}from"./SecoundaryButton-goiA8OO9.js";import{C as De}from"./CommonSearchBox-hAv5GAZt.js";import{C as be}from"./CustomTable-BBwjbMSz.js";import{S as xe}from"./index-D9Bv3C6k.js";import{S as Pt}from"./index-v-CwiWzn.js";import{a as It,P as Lt}from"./Packages-Dqk9BGPs.js";import{r as zt,u as Et}from"./xlsx-BUW7exb-.js";import{C as Ut}from"./index-HwAQ7eJ8.js";import{s as Fe}from"./Table-BhIN-nUr.js";import Wt from"./ManageRfq-DFYMqCzw.js";import{b as Ft}from"./index-Ds72tj9v.js";import{d as Mt}from"./doctorUsersService--bmGzTWH.js";import{U as ke}from"./UserProfileImage-C5tN829-.js";import"./CustomPagination-BfzEq6pA.js";import{B as Ot}from"./button-D0Rmo6Y5.js";import{y as Ne}from"./index-DC3reArS.js";import{C as Me}from"./CustomTab-sR3kUFYQ.js";import{C as Rt}from"./CommonBreadCrumb-ZFUcDUQp.js";import"./CustomSpinLoader-CrgQ8bNq.js";import"./DownOutlined-z3I3nDv9.js";import"./useIcons-CDf6lDIp.js";import"./CheckOutlined-DPOLd74P.js";import"./index-QWR8bAtG.js";import"./ShareMessages-CDz8VSFD.js";import"./LeftOutlined-lLzXux5-.js";import"./ProfileService-D5sxIXUd.js";import"./useHasPermission-B8Y_MdsF.js";import"./Dropdown-fpMXnwtC.js";import"./InputGroupContext-BUHt4CjC.js";import"./share-2-CYz0Y7iS.js";import"./createLucideIcon-D1dtiQRH.js";import"./mail-hThchRSe.js";import"./styleChecker-DD0Z1krI.js";import"./addEventListener-D7w6vIGx.js";import"./useBubbleLock-BnnxIxI9.js";import"./dropdown-C4zMWtkZ.js";import"./collapse-BbEVqHco.js";import"./index-De2sQM66.js";import"./useForm-CIMDi_Qk.js";import"./Input-ClusE8wk.js";import"./useForceUpdate-jQjUdsvY.js";import"./index-1XTAFx_Q.js";import"./Pagination-BbDnNTXA.js";import"./extendsObject-78o_rR5W.js";import"./Index.styled-DnYCryoN.js";import"./dayjs.min-BA1p4t9P.js";import"./CustomModalRenderer-DuatB4dP.js";import"./index-gapj9Wcb.js";import"./chevron-down-u38pTTSM.js";const Bt=pe.div`
  /* padding: 20px; */
  font-family: Arial, sans-serif;
`;pe.div`
  .details-form {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .form-group {
    flex: 1 1 calc(33.333% - 20px);
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 5px;
      font-weight: bold;
    }

    input,
    select {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    input[type="file"] {
      padding: 0;
    }
  }

  .save-button,
  .update-button {
    padding: 10px 20px;
    border: none;
    background: #004080;
    color: white;
    width: 100%;
    cursor: pointer;
  }

  .spoc-details {
    width: 100%;
    margin-top: 20px;

    .spoc-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .name-group {
      display: flex;
      flex-direction: row;
    }

    label {
      font-size: 14px;
      margin-bottom: 5px;
    }

    input {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"] {
      padding: 5px;
      width: 140px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    input[type="checkbox"] {
      margin: 0 10px;
    }

    .add-button,
    .remove-button {
      background-color: transparent;
      border: none;

      cursor: pointer;
      /* padding: 5px 10px; */
    }

    .update-button {
      background-color: #198754;
      border: none;
      color: white;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 4px;
    }
  }

  .upload-logo-container {
    display: flex;
    justify-content: flex-end;
    gap: 6.25rem;
    width: 100%;
  }

  .upload-logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .upload-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    color: #004080;
    font-weight: bold;
    cursor: pointer;
  }

  .upload-icon {
    margin-right: 8px;
  }

  .image-preview {
    position: relative;
    width: fit-content;
    height: 84px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .remove-btn {
    position: absolute;
    top: 5px;
    background: unset;
    border: none;
    color: #dabfbf;
    font-size: 21px;
    font-weight: 100;
    cursor: pointer;
  }

  .remove-btn:hover {
    background: #f8f8f8;
  }

  .spoc-heading {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 5px;
  }
`;const $t=pe.div`
  .clinic-wallet-section {
    display: flex;
    flex-direction: column;
    

    h3 {
      font-size: 18px;
      
      color: #04113f;
    }
  }

  .add-button {
    background-color: transparent;
    border: none;
    /* border-radius: 50%; */
    /* color: #04113f; */
    /* font-size: 1.5rem; */
    cursor: pointer;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .modal {
    background: white;
    padding: 2rem;
    box-sizing: border-box;
    overflow: auto;
    min-height: 250px;
    max-height: 75vh;
    /* max-height: 400px; */
    border-radius: 8px;
    width: 60%;
    position: relative;
    display: block;
    z-index: 10000;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .submit-button {
    background-color: green;
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    border: none;
    padding: 0.9rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
  }
  .submit-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .modal input,
  .modal select {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease;
  }

  .offer-group {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    label input {
      width: auto;
    }
  }

  .Discount-group {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 15px;

    .discounts {
      display: flex;
      flex-direction: column;
    }
  }

  .Amount-group {
    margin-bottom: 15px;
  }

  .heading {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    p {
      font-size: 18px;
    }
  }

  .search-tag-div {
    margin-bottom: 20px;
  }
`,Gt=({id:n})=>{const[M,y]=a.useState(!1),[O,E]=a.useState(1),[w,D]=a.useState(10),N=me(),[l,b]=a.useState(!1),[C,R]=a.useState([]),[I,U]=a.useState(""),[J,h]=a.useState(!1),[c,m]=a.useState(null),[r,B]=a.useState({id:"",walletName:"",walletType:"",customWalletType:"",walletAmount:"",discountPercentage:"",discountLimit:"",doctorSepcialization:""}),[W,X]=a.useState([]),[V,ae]=a.useState([]),se=a.useCallback(async()=>{var k,z,q,H;const g=await N(Ze());(k=g==null?void 0:g.payload)!=null&&k.success&&X((H=(q=(z=g==null?void 0:g.payload)==null?void 0:z.data)==null?void 0:q.walletTypes)==null?void 0:H.map(le=>({label:le==null?void 0:le.name,value:le==null?void 0:le.value})))},[N]),re=a.useCallback(async()=>{var k,z,q,H;const g=await N(Je());(k=g==null?void 0:g.payload)!=null&&k.success&&ae((H=(q=(z=g==null?void 0:g.payload)==null?void 0:z.data)==null?void 0:q.specializations)==null?void 0:H.map(le=>({label:le,value:le})))},[N]);a.useEffect(()=>{re(),se()},[re,se]);const[Y,$]=Ke.useState(""),[Z,i]=a.useState("create"),v=["opd_consultation","virtual_consultation","virtual_consultation_specific"],G=async()=>{var g,k;if(c)try{const q=await N(at({clientId:n,walletId:c}));(g=q==null?void 0:q.payload)!=null&&g.success?(Q.success("Clinic wallet deleted successfully!"),p()):Q.error(((k=q==null?void 0:q.error)==null?void 0:k.message)||"Failed to delete clinic wallet.")}catch(z){Q.error("An error occurred while deleting the wallet."),console.error("Error deleting wallet:",z)}finally{h(!1),m(null)}},F=[{label:"Wallet Name",width:150,dataIndex:"walletName",key:"walletName",render:g=>e.jsx("span",{className:"capitalize",children:g})},{label:"Type",width:150,dataIndex:"walletType",key:"walletType",render:g=>Ue(g)},{label:"Amount",width:150,dataIndex:"walletAmount",key:"walletAmount"},{label:"Discount and Limits",width:150,dataIndex:"discountDetails",key:"discountDetails"}],T=C.filter(g=>g.walletName.toLowerCase().includes(I)||g.walletType.toLowerCase().includes(I)||g.walletAmount.toString().toLowerCase().includes(I)||g.discountDetails.toLowerCase().includes(I)),j=g=>{U(g)},S=g=>{const{name:k,value:z}=g.target;let q=z;k==="discountPercentage"&&z>100&&(q=100),k==="discountLimit"&&z>9999&&(q=9999),B(H=>({...H,[k]:q}))},ne=g=>{$(g.target.value)},o=()=>!(!r.walletName||!r.walletType||r.walletType==="others"&&!r.customWalletType||!Y||Y==="Amount"&&!r.walletAmount||Y==="Discount"&&(!r.discountPercentage||!r.discountLimit)||v.includes(r==null?void 0:r.walletType)&&!(r!=null&&r.doctorSepcialization)),d=o(),f=async()=>{var z,q,H,le;if(!o())return;if(!["opd_consultation","virtual_consultation","dental_consultation","eye_consultation","diagnostic_tests","pharmacy","gym_subscription","ambulance","ctmri_tests","virtual_consultation_specific","panchakarma","ds_tests","others"].includes(r.walletType)){Q.error("Invalid wallet type selected.");return}let k={};Y==="Amount"?k={wallet:{name:r.walletName,type:r.walletType,amount:r.walletAmount?parseInt(r.walletAmount,10):void 0,include_ctrmi:!1}}:Y==="Discount"&&(k={wallet:{name:r.walletName,type:r.walletType,limits:parseInt(r.discountLimit,10),discount_percentage:parseInt(r.discountPercentage,10),include_ctrmi:!1}}),v!=null&&v.includes(r.walletType)&&(k.wallet.specialization=r==null?void 0:r.doctorSepcialization),(r==null?void 0:r.walletType)=="diagnostic_tests"&&(k.wallet.include_ctrmi=(r==null?void 0:r.include_ctrmi)??!1);try{if(Z==="create"){const _=await N(et({id:n,payload:k}));(z=_==null?void 0:_.payload)!=null&&z.success?(Q.success("Clinic wallet created successfully!"),p(),s()):Q.error(((q=_==null?void 0:_.error)==null?void 0:q.message)||"Failed to create clinic wallet.")}else if(Z==="edit"){const _=await N(tt({client:{id:n},wallet:{id:r==null?void 0:r.id},payload:k}));(H=_==null?void 0:_.payload)!=null&&H.success?(Q.success("Clinic wallet updated successfully!"),p(),s()):Q.error(((le=_==null?void 0:_.error)==null?void 0:le.message)||"Failed to update clinic wallet.")}}catch(_){Q.error("An error occurred. Please try again."),console.error("Error submitting wallet details:",_)}};console.log(r,"walletForm");const s=()=>{B({walletName:"",walletType:"",walletAmount:"",discountPercentage:"",discountLimit:"",customWalletType:""}),$(""),y(!1)},L=g=>{const{current:k,pageSize:z}=g;D(z),E(k)},p=a.useCallback(async()=>{var g,k,z,q;b(!0);try{const H=await N(Xe(n));if(console.log("API Response: ",H),H!=null&&H.error){Q.error(((g=H==null?void 0:H.error)==null?void 0:g.message)||"Unknown Error Occured");return}const le=((q=(z=(k=H==null?void 0:H.payload)==null?void 0:k.data)==null?void 0:z.clientWallets)==null?void 0:q.map(_=>({id:_==null?void 0:_.id,walletName:_.name,walletType:_.type,walletAmount:_.amount,discountDetails:_.discount_percentage!==null&&_.limits!==null?`Discount: ${_.discount_percentage}% Limit: ${_.limits}`:"N/A",discountPercentage:_.discount_percentage||"",discountLimit:_.limits||"",include_ctrmi:(_==null?void 0:_.include_ctrmi)||!1,doctorSepcialization:(_==null?void 0:_.specialization)||!1})))??[];R(le)}catch(H){console.error("Error fetching clinic wallets:",H)}finally{b(!1)}},[n,N]);return a.useEffect(()=>{p()},[p]),e.jsxs($t,{children:[e.jsxs("div",{className:"clinic-wallet-section",children:[e.jsx("div",{className:"heading",children:e.jsxs("h3",{children:["Client Wallet Details"," "]})}),e.jsx("div",{className:"mb-2",children:e.jsx(De,{onSearch:j,placeHolder:"Search Client details by wallet name, type, amount or discount & limit.",searchText:I})}),e.jsx("div",{className:"wallet-table",children:e.jsx(be,{columns:F,data:T,page:O,pageSize:w,total:T==null?void 0:T.length,pagination:!0,showingName:"Client Wallet",isLoading:l,onPageChange:L})}),M&&e.jsxs(oe,{headerClassName:"!px-1",open:M,handleClose:()=>y(!1),title:Z==="details"?"Client Wallet Details":Z==="edit"?"Edit Client Wallet":"Create Client Wallet",children:[e.jsxs(oe.Body,{children:[e.jsxs("div",{className:"form-group my-3",children:[e.jsx("label",{children:"Wallet Name"}),e.jsx("input",{type:"text",name:"walletName",placeholder:"Wallet Name",value:r.walletName,onChange:S,className:"w-full px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm placeholder-gray-400"})]}),e.jsxs("div",{className:"form-group my-3",children:[e.jsx("label",{children:"Wallet Type"}),e.jsx(xe,{allowClear:!0,showSearch:!0,options:W,onChange:g=>{B({...r,walletType:g})},value:r.walletType})]}),(r==null?void 0:r.walletType)=="diagnostic_tests"&&e.jsxs("div",{className:"d-flex justify-content-between align-items-center mt-2 mb-2",children:[e.jsx("label",{htmlFor:"",children:"Include CTMRI"}),e.jsx(Pt,{checked:r==null?void 0:r.include_ctrmi,onChange:g=>{B({...r,include_ctrmi:g})}})]}),(v==null?void 0:v.includes(r.walletType))&&e.jsxs("div",{className:"form-group my-3",children:[e.jsx("label",{children:"Doctor Specialization"}),e.jsx(xe,{allowClear:!0,showSearch:!0,options:V,getPopupContainer:g=>g.parentElement,onChange:g=>{B({...r,doctorSepcialization:g})},value:r.doctorSepcialization})]}),r.walletType==="others"&&e.jsxs("div",{className:"form-group my-3",children:[e.jsx("label",{children:"Custom Wallet Type Name"}),e.jsx("input",{type:"text",name:"customWalletType",placeholder:"Enter Custom Wallet Type",value:r.customWalletType||"",onChange:S})]}),r.walletType&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"offer-type-group",children:[e.jsx("label",{children:"Offer Type"}),e.jsxs("div",{className:"offer-group my-1",children:[e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"offerType",value:"Amount",checked:Y==="Amount",onChange:ne}),"Amount"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"offerType",value:"Discount",checked:Y==="Discount",onChange:ne}),"Discount"]})]})]}),Y==="Amount"&&e.jsxs("div",{className:"Amount-group",children:[e.jsx("label",{children:"Wallet Amount"}),e.jsx("input",{type:"text",placeholder:"Decimal not allowed",name:"walletAmount",value:r.walletAmount,onChange:S,className:"w-full px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm placeholder-gray-400"})]}),Y==="Discount"&&e.jsxs("div",{children:[(r==null?void 0:r.discountDetails)??"",e.jsxs("div",{className:"Discount-group",children:[e.jsxs("div",{className:"discounts",children:[e.jsx("label",{children:"Discount Percentage"}),e.jsx("input",{type:"number",placeholder:"Max 100",max:100,name:"discountPercentage",value:r.discountPercentage,onChange:S,className:"w-full px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm placeholder-gray-400"})]}),e.jsxs("div",{className:"discounts",children:[e.jsx("label",{children:"Limit"}),e.jsx("input",{type:"number",placeholder:"Unlimited - 9999",max:9999,name:"discountLimit",value:r.discountLimit,onChange:S,className:"w-full px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm placeholder-gray-400"})]})]})]})]})]}),e.jsx(oe.Footer,{children:e.jsx("div",{className:"flex gap-2 justify-end items-center",children:Z!=="details"&&e.jsxs("div",{className:"flex justify-end items-center gap-2",children:[e.jsx(ge,{onClick:()=>y(!1),children:"Cancel"}),e.jsx(he,{onClick:f,disabled:!d,children:Z==="edit"?"Update Client Wallet":"Create Client Wallet"})]})})})]})]}),e.jsxs(oe,{open:J,handleClose:()=>h(!1),title:"Confirm Deletion",children:[e.jsx(oe.Body,{children:"Are you sure you want to delete this client wallet detail?"}),e.jsxs(oe.Footer,{children:[e.jsx(fe,{variant:"secondary",onClick:()=>h(!1),children:"Cancel"}),e.jsx(fe,{variant:"danger",onClick:G,children:"Delete"})]})]})]})},qt=pe.div`
  /* padding: 20px; */

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 18px;
    }

    .heading {
      display: flex;
      align-items: baseline;
      gap: 5px;

      h2 {
        font-size: 1.2rem;
      }
    }
  }

  .add-button {
    background-color: transparent;
    border: none;
    /* border-radius: 50%;
    color: #04113f; */
    cursor: pointer;
  }

  .user-details {
  }


  .pagination {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 10px;

    button {
      padding: 5px 10px;
      border: 1px solid #ccc;
      background: #f0f0f0;
      cursor: not-allowed;
    }
  }

  Form.label {
    font-size: 18px;
  }

  .wallet-modal {
    height: 35rem;
    z-index: 9;
    overflow-y: scroll;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 1rem 0rem;

    h3 {
      font-size: 22px;
    }

    button {
      border: none;
      background: unset;
    }
  }

  .wallet-details {
    display: flex;
    flex-direction: column;
  }

  .wallet-row {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    margin-bottom: 10px;

    strong {
      font-size: 18px;
      text-wrap: nowrap;
    }

    p {
      font-size: 16px;
    }
  }

  .wallet-row button {
    background: #f0f0f0;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    text-wrap: nowrap;
  }

  .wallet-type {
    display: flex;
    flex-direction: column;
  }

  .wallet-amounts {
    display: flex;
    gap: 30px;

    .wallet-amount,
    .remaining-amount {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }
  }
`;pe.div`
  /* position: fixed;
  top: 0;
  left: 0;
  width: 100%; */
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .user-form-container {
    max-width: 600px;
    margin: 40px auto;
    background: #fff;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .form-header h3 {
    margin: 0;
    font-size: 20px;
  }

  .close-button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }

  .user-form {
    display: flex;
    flex-direction: column;
  }

  .form-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 10px;
  }

  .form-group:last-child {
    margin-right: 0;
  }

  label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  input[type="date"],
  input[type="number"] {
    padding: 8px 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }

  input[type="checkbox"] {
    margin-left: 10px;
    transform: scale(1.2);
    cursor: pointer;
  }

  .radio-group {
    display: flex;
    gap: 10px;
  }

  .radio-group label {
    font-size: 14px;
    font-weight: 400;
  }

  .form-actions {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .save-button {
    background: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
  }

  .save-button:hover {
    background: #0056b3;
  }

  .radio-group {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  .radio-option {
    display: flex;
    align-items: center;
  }
`;const _e=pe.div`
  .create-new-sec {
    text-align: center;
    margin-top: 30px;
  }
  .student-fields-sec-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    margin-bottom: 30px;
    .delta-signup-md {
      margin-bottom: 5px;
    }
  }
  .price-list-sec--all {
    p {
      margin-bottom: 1px;
    }
  }
  .all-rows-sec-sub-caate {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
  }
  .item-img-sec {
    width: 100px;
  }
  .doctor-img-sec {
    height: 40px;
    border-radius: 50px;
    width: 40px;
    object-fit: cover;
  }
  .student-details-header {
    margin-bottom: 30px;
    span {
      cursor: pointer;
      color: #4682b4;
    }
  }
  .delta-select-column-error .delta-select__control {
    border-color: red !important;
  }
  .delta-select {
    width: 100%;
  }

  .delta-select > * {
    text-transform: capitalize;
  }

  .actions-btn-sec {
    display: flex;
    justify-content: end;
  }
  .error_message {
    text-align: left;
    font-size: 0.875em;
    color: #dc3545;
  }
  .profileEdit {
    font-size: 14px;
    padding: 12px 15px;
    border-radius: 8px;
    background: #17a2b8;
    color: #fff;
    /* opacity: 0.6; */
  }
  .download-icon-sec {
    text-align: right;
  }
  .text-capitalize {
    text-transform: capitalize;
  }
  .no-image-sec-char {
    height: 40px;
    width: 40px;
    display: block;
    background: #008080;
    border-radius: 50px;
    color: #fff;
    padding-left: 13px;
    padding-top: 4px;
    font-size: 20px;
  }
  .download-icon-sec img {
    width: 50px;
    margin-top: 15px;
    cursor: pointer;
  }
  .student-fields-sec-content-all {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 20px;
    margin-top: 18px;
    margin-bottom: 0px;
  }
  .submit-filter-btn-sec {
    margin-top: 25px;
  }
  .edit-medi-cate-list {
    // display: flex;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
  .image-preview {
    margin-top: 10px;
  }

  .select-filter {
    min-width: 100px;
    max-width: 250px;
  }

  .selctor-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    align-items: center;
  }

  .selector-info-row {
    display: flex;
    flex-direction: column;
  }

  .space-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .marginleft: {
    margin: 10px;
  }

  .delivary-submit-btn-div {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin: 0px 0px 0px 20px;
  }

  .weekOffCard {
    max-width: 200px;
    gap: 10px;
  }

  .weekOffCard span {
    padding: 5px;
    border-radius: 100%;
    aspect-ratio: 1 / 1;
    display: block;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 12px;
  }
  .weekOffCard .active {
    background: #007bff;
  }
  .weekOffCard .deactive {
    background: #726c70;
  }

  .profileinfoHeader {
    margin-bottom: 0px !important;
  }
  .profileinfoHeader span {
    font-size: 20px;
  }
  .profileinfoHeader .profileEdit {
    font-size: 16px;
    margin-left: 10px;
  }

  .delta-select-column-error .delta-select__control {
    border-color: red;
  }
  .top-sec-header-sec {
    display: flex;
    justify-content: space-between;
    /* margin-top: 20px; */
  }

  .action-sec {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .search-tag-div {
    max-width: 300px;
  }

  .bulkUpload {

  p {
    color: rgb(136, 136, 136);
  }

  }

  .vendorCardsParent {
    display: flex;
    align-items: flex-start;
    // justify-content: center;
    gap: 20px;
    margin-top: 10px;
  }

  .vendorCardDiv {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 10px;
    min-width: 200px;
  }

  .vendorCard1 {
    display: flex;
    gap: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 5px;
  }

  .container {
    max-height: 350px;
    overflow-y: auto;
  }

  .vendorCard2 {
    font-size: 16px;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
  }

  .formDiv {
    overflow-x: auto;
  }
  .formDiv .row {
    display: grid;
    grid-template-columns: repeat(4, minmax(80px, 1fr)) 50px 50px;
  }

  .action-div {
    // display: grid;
    display: flex;
    font-weight: bold;
    justify-content: space-between;
    gap: 1rem;
    // grid-template-columns: 1fr 20px;
    gap: 10px;
  }
  .action-div2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .actionsCard {
  }

  .container::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  .container::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 5px;
  }

  .container::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  .container::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  .vendorCardsParent .box1 {
    max-width: 300px;
  }

  .select {
    height: 2.4rem !important;
  }
  .row-gap {
    gap: 1rem;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    height: 2.4rem;
  }

  .icon {
    font-size: 20px;
    cursor: pointer;
  }

  .close-float {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .selectedvendorsTitleBox {
    font-size: 14px;
    margin-right: 10px;
    flex: 1;
    input[type="text"] {
    border-radius: 5px;
    outline: none;
    }
  }

  .selectedVendorController {
        position: sticky;
    top: 0;
    z-index: 10;
    background: white;
    padding-bottom: 10px;
  }

  .selectFilter {
    flex: 1;

    span {
      font-size: 14px;
    }
  }

  .vendorsCode {
    width: 100%;
    flex:1;
  }
`,Ht=({id:n,onSuccess:M})=>{const[y,O]=a.useState([]),[E,w]=a.useState(!1);st();const[D,N]=a.useState(1),[l,b]=a.useState(10),C=[{title:"First Name",width:170,dataIndex:"first_name",key:"1",render:(c,m)=>e.jsx("div",{className:"p-2",children:c})},{title:"Last Name",width:170,dataIndex:"last_name",key:"2",render:(c,m)=>e.jsx("div",{className:"p-2",children:c})},{title:"Email",width:150,dataIndex:"email",key:"3",render:(c,m)=>e.jsx("div",{className:"p-2",children:c})},{title:"Secondary Email",width:150,dataIndex:"secondary_email",key:"4",render:(c,m)=>e.jsx("div",{className:"p-2",children:c})},{title:"Phone",width:150,dataIndex:"phone",key:"5",render:(c,m)=>e.jsx("div",{className:"p-2",children:c})},{title:"Secondary Phone",width:150,dataIndex:"secondary_phone",key:"6",render:(c,m)=>e.jsx("div",{className:"p-2",children:c})},{title:"gender",width:150,dataIndex:"gender",key:"7",render:(c,m)=>e.jsx("div",{className:"p-2",children:c})},{title:"unit",width:150,dataIndex:"unit",key:"8",render:(c,m)=>e.jsx("div",{className:"p-2",children:c})},{title:"cost",width:250,dataIndex:"cost",key:"9",render:(c,m)=>e.jsx("div",{className:"p-2",children:Number.isNaN(c)??""})},{title:"Counter Type",width:250,dataIndex:"counter_type",key:"10",render:(c,m)=>e.jsx("div",{className:"p-2",children:c})},{title:"Employee Id",width:150,dataIndex:"employee_id",key:"11",render:(c,m)=>e.jsx("div",{className:"p-2",children:c})},{title:"DOB",width:150,dataIndex:"dob",key:"12",render:(c,m)=>e.jsx("div",{className:"p-2",children:c==null?void 0:c.toString()})},{title:"Active Status",width:150,dataIndex:"active_status",key:"13",render:(c,m)=>e.jsx("div",{className:"p-2",children:c})},{title:"Age",width:150,dataIndex:"age",key:"14",render:(c,m)=>e.jsx("div",{className:"p-2",children:c})},{title:"Designation",width:150,dataIndex:"designation",key:"15",render:(c,m)=>e.jsx("div",{className:"p-2",children:c==null?void 0:c.toString()})}],R=c=>{if(!c)return"";const m=c.split(/[\/\-]/);if(m.length!==3)return c;let[r,B,W]=m;return W.length===2&&(W=parseInt(W)<26?`20${W}`:`19${W}`),`${W}-${B.padStart(2,"0")}-${r.padStart(2,"0")}`},I=async c=>{var r;const m=(r=c==null?void 0:c.target)==null?void 0:r.files[0];if(m){const B=new FileReader;B.readAsBinaryString(m),B.onload=W=>{var V;const X=(V=W.target)==null?void 0:V.result;if(X){const ae=zt(X,{type:"binary"}),se=ae.SheetNames[0],re=ae.Sheets[se],Y=Et.sheet_to_json(re,{raw:!1});let $=!0;const Z=Y==null?void 0:Y.map(i=>{var v,G,F,T,j,S,ne,o,d,f;return{first_name:((v=i==null?void 0:i.first_name)==null?void 0:v.trim())??"",last_name:((G=i==null?void 0:i.last_name)==null?void 0:G.trim())??null,email:((F=i==null?void 0:i.email)==null?void 0:F.trim())??"",secondary_email:((T=i==null?void 0:i.secondary_email)==null?void 0:T.trim())??"",phone:((j=i==null?void 0:i.phone)==null?void 0:j.trim())??"",secondary_phone:((S=i==null?void 0:i.secondary_phone)==null?void 0:S.trim())??"",gender:((ne=i==null?void 0:i.gender)==null?void 0:ne.trim())??null,employee_id:((o=i==null?void 0:i.employee_id)==null?void 0:o.trim())??null,dob:R(i==null?void 0:i.dob),active_status:((d=i==null?void 0:i.active_status)==null?void 0:d.trim())??null,age:i!=null&&i.age?Number(i==null?void 0:i.age):null,designation:((f=i==null?void 0:i.designation)==null?void 0:f.trim())??null}});w($),O(Z),Q.success("File uploaded successfully")}}}},U=me(),J=(c,m)=>{b(m),N(c)},h=async()=>{var m,r,B,W,X;const c=await U(lt({id:n,data:y}));(m=c==null?void 0:c.payload)!=null&&m.success?(Q.success(((B=(r=c==null?void 0:c.payload)==null?void 0:r.data)==null?void 0:B.message)??"Client Users Created successfully!."),O([]),M()):Q.error(((W=c==null?void 0:c.error)==null?void 0:W.message)||((X=c==null?void 0:c.payload)==null?void 0:X.message)||"Client Users failed to create!.")};return e.jsxs("div",{className:"mt-6",children:[e.jsx("h6",{className:"mb-3",children:"Bulk Upload Client Users"}),e.jsxs(_e,{children:[Array.isArray(y)&&(y==null?void 0:y.length)==0&&e.jsxs("div",{className:"d-flex justify-content-center align-items-center flex-column bulkUpload ",children:[e.jsx("div",{className:"d-flex justify-content-center align-items-center flex-column mb-3",children:e.jsx("input",{onChange:I,type:"file",name:"",id:"",className:"p-3 "})}),e.jsxs("div",{className:"d-flex justify-content-center align-items-center flex-column mt-3",children:[e.jsx("p",{children:"Fill up this template and upload it to add multiple client users at once."}),e.jsx(Ut,{data:[{first_name:"",last_name:"",email:"",secondary_email:"",phone:"",secondary_phone:"",gender:"",employee_id:"",dob:"",active_status:"",age:"",designation:""}],filename:"cleint_users_bulk_upload.csv",target:"_blank",children:e.jsxs(fe,{className:"d-flex justify-content-center align-items-center",children:[e.jsx(nt,{className:"mr-3"}),"Download Template"]})})]})]}),Array.isArray(y)&&(y==null?void 0:y.length)>0&&e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[e.jsx("h6",{children:"Uploaded Client Users Details"}),e.jsx(fe,{variant:"outline-info",onClick:()=>{O([])},children:"Clear"})]}),e.jsx(Vt,{children:e.jsx("div",{className:"w-100 overflow-auto",children:e.jsx(Fe,{className:"overflow-x-auto",columns:C,dataSource:y??[],pagination:{current:D,pageSize:l,onChange:J,total:y==null?void 0:y.length,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"]}})})}),E?e.jsx("div",{className:"d-flex justify-content-center align-items-center",children:e.jsx(fe,{onClick:h,children:"Submit"})}):e.jsx("div",{className:"text-danger text-center pt-3 pb-3",children:"Uploaded data is not correct"})]})]})]})},Vt=pe.div`
.ant-table-tbody .ant-table-cell {
    padding: 0px !important;
  }
  .error {
    color: red;
    border:1px solid red;
    color: red;
    min-height: 4rem;
    }

    .ant-table {
        overflow-x: auto;
    }
    
    .td {
        padding: 10px 5px;
        min-height: 4rem;
        max-height: 100px;
        -webkit-box-orient: vertical;
        overflow: auto;
        -webkit-line-clamp: 1;
        }
`,Yt=({id:n})=>{const[M,y]=a.useState(!1),[O,E]=a.useState(""),[w,D]=a.useState(1),[N,l]=a.useState(10),[b,C]=a.useState([]),[R,I]=a.useState({users:!1}),[U,J]=a.useState(0),[h,c]=a.useState(!1),[m,r]=a.useState(!1),[B,W]=a.useState(),[X,V]=a.useState(!1),[ae,se]=a.useState([]),[re,Y]=a.useState(null),[$,Z]=a.useState(0),[i,v]=a.useState(!1),[G,F]=a.useState(!1),[T,j]=a.useState(!1),[S,ne]=a.useState({first_name:null,last_name:null,email:null,secondary_email:null,phone:null,secondary_phone:null,gender:null,employee_id:null,dob:null,active_status:!1,age:null,designation:null,id:null}),[o,d]=a.useState(!1),f={first_name:!1,phone:!1,gender:!1,age:!1},[s,L]=a.useState(f),p=me(),g=async(t,u)=>{console.log({id:t,flag:u})},k=async t=>{var A,K,ee,P,ce,de,ye;j(!0);const u=await p(mt({userid:(A=t==null?void 0:t.id)==null?void 0:A.toString()}));if(console.log(u),(K=u==null?void 0:u.payload)!=null&&K.success){if((P=(ee=u==null?void 0:u.payload)==null?void 0:ee.data)!=null&&P.url){let ve=`${(de=(ce=u==null?void 0:u.payload)==null?void 0:ce.data)==null?void 0:de.url}&from_portal=adminDashboard`;window.open(ve,"_blank")}}else Q.error(((ye=u==null?void 0:u.error)==null?void 0:ye.message)||"Something went wrong!.");j(!1)},z=[{label:"Contact name",width:150,dataIndex:"name",key:"name",render:(t,u)=>`${(u==null?void 0:u.first_name)??""} ${(u==null?void 0:u.last_name)??""}`},{label:"Mobile number",width:150,dataIndex:"phone",key:"phone"},{label:"Email id",width:150,dataIndex:"email",key:"email"},{label:"Active",width:100,key:"status",render:t=>{var u;return e.jsx(e.Fragment,{children:e.jsx("div",{className:"action-icons-sec-new",children:e.jsx("div",{className:"action-buttons",children:e.jsx(It,{onChange:()=>{g(t,t==null?void 0:t.status)},checked:((u=t==null?void 0:t.active_status)==null?void 0:u.toLowerCase())==="active"})})})})}},{label:"Edit",width:100,key:"edit",render:t=>e.jsx(e.Fragment,{children:e.jsx(ge,{onClick:()=>_(t),children:"Edit"})})},{label:"Details",width:100,key:"details",render:t=>e.jsx(e.Fragment,{children:e.jsx(ge,{onClick:()=>Te(t),children:"Detail"})})},{label:"Create Order",width:100,key:"create_order",render:t=>e.jsx(e.Fragment,{children:e.jsx(he,{onClick:()=>k(t),children:"Create"})})},{label:"Wallet",width:100,key:"wallets",render:t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"action-icons-sec-new",children:e.jsx("div",{className:"action-buttons",children:e.jsx(ge,{className:"text-nowrap",onClick:()=>le(t.id),children:"Show Wallet"})})})})}],q=[{label:"Name",key:"name",render:(t,u)=>`${(u==null?void 0:u.first_name)??""} ${(u==null?void 0:u.last_name)??""}`},{label:"Phone",dataIndex:"phone",key:"phone"},{label:"Email",dataIndex:"email",key:"email"},{label:"Status",dataIndex:"active_status",key:"active_status"},{label:"Edit",width:100,key:"edit",render:t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"action-icons-sec-new",children:e.jsx("div",{className:"action-buttons",children:e.jsx("button",{onClick:()=>_(t,!0),children:"Edit"})})})})},{label:"Details",width:100,key:"details",render:t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"action-icons-sec-new",children:e.jsx("div",{className:"action-buttons",children:e.jsx("button",{onClick:()=>Te(t),children:"Detail"})})})})},{label:"Create Order",width:100,key:"create_order",render:t=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"action-icons-sec-new",children:e.jsx("div",{className:"action-buttons",children:e.jsx("button",{onClick:()=>k(t),children:"Create"})})})})}],H=async t=>{var u,A,K;if(t)try{const P=await p(xt({clientUsers:{id:t}}));console.log(P,"response"),(u=P==null?void 0:P.payload)!=null&&u.success&&(se((K=(A=P.payload)==null?void 0:A.data)==null?void 0:K.wallets),V(!0))}catch(ee){console.error("Error fetching wallet details:",ee)}finally{console.log("finished")}},le=async t=>{console.log(t),H(t),W(t)};console.log(s,S,"errors");const _=(t,u=!1)=>{d(u),console.log(u,"isDependentUserUpdt"),ne({first_name:t.first_name||null,last_name:t.last_name||null,email:t.email||null,secondary_email:t.secondary_email||null,phone:t.phone||null,secondary_phone:t.secondary_phone||null,gender:t.gender||null,employee_id:t.employee_id||null,dob:t.dob||null,age:t.age||null,designation:t.designation||null,active_status:t.active_status==="active",id:t.id}),r(!0),y(!0)},Te=t=>{ne({first_name:t.first_name||"",last_name:t.last_name||"",email:t.email||"",secondary_email:t.secondary_email||"",phone:t.phone||"",secondary_phone:t.secondary_phone||"",gender:t.gender||"",employee_id:t.employee_id||"",dob:t.dob||"",age:t.age||"",designation:t.designation||"",active_status:t.active_status==="active",id:t.id}),c(!0),y(!0)},Oe=()=>{y(!M)},Re=(t,u)=>{l(u),D(t)},Be=t=>{E(t)},ue=t=>{const{name:u,value:A,type:K,checked:ee}=t.target;L({...s,[u]:!1}),ne(P=>({...P,[u]:K==="checkbox"?ee:A}))},we=a.useCallback(async t=>{var u,A,K,ee;try{I({users:!0});const P=await p(We({clientId:t,count:N,page:w-1,searchText:O}));console.log("API Response: ",P),C((A=(u=P==null?void 0:P.payload)==null?void 0:u.data)==null?void 0:A.clientUsers),J((ee=(K=P==null?void 0:P.payload)==null?void 0:K.data)==null?void 0:ee.clientUsersCount)}catch(P){console.error("Error fetching associated users:",P)}finally{I({users:!1})}},[p,O,N,w]),$e=()=>{y(!1),r(!1),c(!1),ne({first_name:null,last_name:null,email:null,secondary_email:null,phone:null,secondary_phone:null,employee_id:null,designation:null,gender:null,dob:null,age:null,active_status:!1,id:null})},Ge=async t=>{var ye,ve,Pe,Ie;t.preventDefault();let u=!0;const A={},K=/^[A-Za-z\s]+$/,ee=/^[0-9]{10}$/,P=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(["first_name","last_name","email","secondary_email","phone","age","gender","secondary_phone"].forEach(te=>{const ie=S==null?void 0:S[te];switch(te){case"first_name":!ie||!K.test(ie)?(u=!1,A[te]="First name is required and must contain letters only"):A[te]="";break;case"last_name":ie&&!K.test(ie)?(u=!1,A[te]="Last name must contain letters only"):A[te]="";break;case"email":case"secondary_email":ie&&!P.test(ie)?(u=!1,A[te]="Must be a valid email address"):A[te]="";break;case"phone":!ie||!ee.test(ie)?(u=!1,A[te]="Phone is required and must be a 10-digit number"):A[te]="";break;case"secondary_phone":ie&&!ee.test(ie)?(u=!1,A[te]="Secondary Phone must be a 10-digit number"):A[te]="";break;case"age":ie===null||ie===""||isNaN(ie)||ie<0||ie>200?(u=!1,A[te]="Age is required and must be between 0 and 200"):A[te]="";break;case"gender":ie?A[te]="":(u=!1,A[te]="Gender is required");break;default:A[te]=""}}),!u){L(A);return}const ce={user:{...S,active_status:S.active_status?"active":"inactive"}};let de;if(m)if(o){const te=(ye=ce==null?void 0:ce.user)==null?void 0:ye.id;(ve=ce==null?void 0:ce.user)==null||delete ve.id,de=await p(dt({id:te,payload:ce}))}else de=await p(ut({id:n,payload:ce}));else delete ce.user.id,de=await p(pt({id:n,payload:ce}));console.log("API Response: ",de),(Pe=de==null?void 0:de.payload)!=null&&Pe.success?(ne({first_name:null,last_name:null,email:null,secondary_email:null,phone:null,secondary_phone:null,gender:null,employee_id:null,dob:null,active_status:!1,age:null,designation:null,id:null}),y(!1),Q.success("Form submitted successfully!"),we(n)):Q.error(((Ie=de==null?void 0:de.error)==null?void 0:Ie.message)||"Failed to submit the form. Please try again.")};a.useEffect(()=>{const t=setTimeout(()=>{we(n)},400);return()=>clearTimeout(t)},[n,p,we]);const qe=t=>{Y(t),Z(0)},He=t=>{Z(Number(t))},Ve=async(t,u,A)=>{var K;try{const P=await p(Le({updateData:{amount:$},clientUsers:{id:u},wallets:{id:t}}));console.log("response",P),(K=P==null?void 0:P.payload)!=null&&K.success&&(console.log("Amount added successfully:",P),H(B))}catch(ee){console.error("Error while adding amount:",ee)}finally{Y(null)}},Ye=async(t,u,A)=>{var K;try{const P=await p(Le({updateData:{amount:$},clientUsers:{id:u},wallets:{id:t}}));(K=P==null?void 0:P.payload)!=null&&K.success&&(console.log("Amount reduced successfully:"),H(B))}catch(ee){console.error("Error while reducing amount:",ee)}finally{Y(null)}},Qe=async()=>{v(!0),fetch(`${rt}/api/v1/client/${n}/associated-user/download`,{method:"GET",headers:{Accept:"text/csv","Content-Type":"application/json",authorization:"Bearer "+ct()}}).then(t=>t.blob()).then(t=>{console.log(t);const u=window.URL.createObjectURL(t),A=document.createElement("a");A.href=u,A.download="data.csv",document.body.appendChild(A),A.click(),document.body.removeChild(A),window.URL.revokeObjectURL(u),v(!1)})};return e.jsxs(qt,{children:[e.jsx("div",{className:"header",children:e.jsx("div",{className:"heading",children:e.jsx("h2",{children:"Client User Details"})})}),e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-end sm:items-center gap-3 mb-4",children:[e.jsx(De,{onSearch:Be,placeHolder:"Search associated user by name, phone or email",searchText:O}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(ge,{className:"ml-2",onClick:Qe,children:"Download"}),e.jsx(he,{onClick:()=>{F(t=>!t)},children:G?"Cancel Bulk Upload":"Bulk Upload"}),e.jsx(he,{onClick:Oe,children:"Add User"})]})]}),G?e.jsx(e.Fragment,{children:e.jsx(Ht,{onSuccess:()=>{F(!1)},id:n})}):e.jsx("div",{className:"",children:e.jsx(be,{data:b,columns:z,showingName:"Users",isLoading:R.users,onPageChange:Re,page:w,pageSize:N,pagination:!0,total:U,expandable:{expandedRowRender:t=>e.jsxs("div",{children:[e.jsx("h5",{children:"Dependent Users:"}),e.jsx(Fe,{columns:q,dataSource:(t==null?void 0:t.dependents)||[],rowKey:"id",pagination:!1,size:"small",bordered:!0})]}),rowExpandable:t=>Array.isArray(t==null?void 0:t.dependents)&&t.dependents.length>0}})}),e.jsxs(oe,{headerClassName:"px-2",title:h?"View User Details":m?"Edit User Details":"Add User Details",open:M,handleClose:$e,children:[e.jsx(oe.Body,{children:e.jsx("div",{children:e.jsx(x,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[e.jsx("div",{className:"flex-1",children:e.jsxs(x.Group,{children:[e.jsx(x.Label,{children:"First Name"}),e.jsx(x.Control,{type:"text",name:"first_name",value:S.first_name||"",onChange:ue,required:!0,isInvalid:s==null?void 0:s.first_name,disabled:h}),(s==null?void 0:s.first_name)&&e.jsx(x.Control.Feedback,{type:"invalid",children:(s==null?void 0:s.first_name)??"First Name is required."})]})}),e.jsx("div",{className:"flex-1",children:e.jsxs(x.Group,{children:[e.jsx(x.Label,{children:"Last Name"}),e.jsx(x.Control,{type:"text",name:"last_name",value:S.last_name||"",onChange:ue,required:!0,isInvalid:s==null?void 0:s.last_name,disabled:h}),(s==null?void 0:s.last_name)&&e.jsx(x.Control.Feedback,{type:"invalid",children:(s==null?void 0:s.last_name)??"Last Name is required."})]})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[e.jsx("div",{className:"flex-1",children:e.jsxs(x.Group,{children:[e.jsx(x.Label,{children:"Email"}),e.jsx(x.Control,{type:"email",name:"email",value:S.email||"",onChange:ue,required:!0,disabled:h}),(s==null?void 0:s.email)&&e.jsx(x.Control.Feedback,{type:"invalid",children:(s==null?void 0:s.email)??"Email is required."})]})}),e.jsx("div",{className:"flex-1",children:e.jsxs(x.Group,{children:[e.jsx(x.Label,{children:"Secondary Email"}),e.jsx(x.Control,{type:"email",name:"secondary_email",value:S.secondary_email||"",onChange:ue,disabled:h}),(s==null?void 0:s.secondary_email)&&e.jsx(x.Control.Feedback,{type:"invalid",children:(s==null?void 0:s.secondary_email)??"Email is required."})]})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[e.jsx("div",{className:"flex-1",children:e.jsxs(x.Group,{children:[e.jsx(x.Label,{children:"Phone"}),e.jsx(x.Control,{type:"number",name:"phone",maxLength:10,value:S.phone||"",onChange:ue,required:!0,isInvalid:s==null?void 0:s.phone,disabled:h}),(s==null?void 0:s.phone)&&e.jsx(x.Control.Feedback,{type:"invalid",children:(s==null?void 0:s.phone)??"Phone is required."})]})}),e.jsx("div",{className:"flex-1",children:e.jsxs(x.Group,{children:[e.jsx(x.Label,{children:"Secondary Phone"}),e.jsx(x.Control,{type:"number",maxLength:10,name:"secondary_phone",value:S.secondary_phone||"",onChange:ue,isInvalid:s==null?void 0:s.secondary_phone,disabled:h}),(s==null?void 0:s.secondary_phone)&&e.jsx(x.Control.Feedback,{type:"invalid",children:(s==null?void 0:s.secondary_phone)??""})]})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[e.jsx("div",{className:"flex-1",children:e.jsxs(x.Group,{children:[e.jsx(x.Label,{children:"Employee ID"}),e.jsx(x.Control,{type:"text",name:"employee_id",value:S.employee_id||"",onChange:ue,required:!0,disabled:h})]})}),e.jsx("div",{className:"flex-1",children:e.jsxs(x.Group,{children:[e.jsx(x.Label,{children:"Designation"}),e.jsx(x.Control,{type:"text",name:"designation",value:S.designation||"",onChange:ue,required:!0,disabled:h})]})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[e.jsx("div",{className:"flex-1",children:e.jsxs(x.Group,{children:[e.jsx(x.Label,{children:"Gender"}),e.jsx("div",{className:"flex gap-4 mt-2",children:["male","female"].map(t=>{const u=`gender-${t}`;return e.jsx(x.Check,{type:"radio",id:u,label:t.charAt(0).toUpperCase()+t.slice(1),name:"gender",value:t,checked:S.gender===t,onChange:ue,inline:!0,isInvalid:s==null?void 0:s.gender,disabled:h},t)})}),(s==null?void 0:s.gender)&&e.jsx(x.Control.Feedback,{type:"invalid",children:"Gender is required."})]})}),e.jsx("div",{className:"flex-1",children:e.jsxs(x.Group,{children:[e.jsx(x.Label,{children:"Date of Birth"}),e.jsx(x.Control,{type:"date",name:"dob",max:new Date().toISOString().split("T")[0],value:S.dob||"",onChange:ue,required:!0,disabled:h})]})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[e.jsx("div",{className:"flex-1",children:e.jsxs(x.Group,{children:[e.jsx(x.Label,{children:"Age"}),e.jsx(x.Control,{type:"number",name:"age",value:S.age||"",onChange:ue,min:"0",max:"100",required:!0,isInvalid:s==null?void 0:s.age,disabled:h}),(s==null?void 0:s.age)&&e.jsx(x.Control.Feedback,{type:"invalid",children:(s==null?void 0:s.age)??"Age is required."})]})}),e.jsx("div",{className:"flex-1 flex items-center gap-4 mt-6",children:e.jsxs(x.Group,{className:"flex items-center gap-2 mb-0",children:[e.jsx(x.Label,{className:"mb-0 active-status-label",children:"Active Status"}),e.jsx(x.Check,{type:"checkbox",className:"cursor-pointer",name:"active_status",checked:S.active_status,onChange:ue,disabled:h})]})})]})]})})})}),e.jsx(oe.Footer,{children:e.jsx("div",{className:"flex justify-end gap-2",children:e.jsx(he,{disabled:h,onClick:Ge,children:m?"Update":"Save"})})})]}),X&&e.jsx(oe,{title:"Wallet Details",open:X,handleClose:()=>V(!1),children:e.jsx(oe.Body,{children:e.jsx("div",{className:"wallet-modal",children:e.jsxs("div",{className:"wallet-details",children:[ae==null?void 0:ae.map((t,u)=>e.jsxs("div",{className:"wallet-row",children:[e.jsxs("div",{className:"wallet-type",children:[e.jsx("strong",{children:"Wallet Type:"}),e.jsx("p",{children:Ue(t.type)})]}),e.jsxs("div",{className:"wallet-type",children:[e.jsx("strong",{children:"Wallet Name:"}),e.jsx("p",{children:t.name})]}),e.jsxs("div",{className:"wallet-amounts",children:[e.jsxs("div",{className:"wallet-amount",children:[e.jsx("strong",{children:"Client Wallet Amount:"}),e.jsx("p",{children:t!=null&&t.total_amount?`₹${t==null?void 0:t.total_amount}`:(t==null?void 0:t.discount_percentage)===100?"Unlimited":`${(t==null?void 0:t.discount_percentage)||"0"}%`})]}),e.jsxs("div",{className:"remaining-amount",children:[e.jsx("strong",{children:"Remaining Amount:"}),e.jsx("p",{children:(t==null?void 0:t.wallet_type)==="limits"||(t==null?void 0:t.wallet_type)==="unlimited"?(t==null?void 0:t.discount_percentage)===100?"Unlimited":t==null?void 0:t.limits:t==null?void 0:t.amount})]})]}),e.jsx("div",{className:"wallet-row",children:e.jsx("div",{className:"wallet-actions",children:re===t.id?e.jsxs("div",{className:"edit-amount",children:[e.jsx("input",{type:"number",value:$===0?"":$,onChange:A=>{const K=A.target.value;He(K)},className:"amount-input"}),$>0?e.jsx("button",{onClick:()=>Ve(t.id,B),className:"add-button",children:"Add"}):$<0?e.jsx("button",{onClick:()=>Ye(t.id,B),className:"reduce-button",children:"Reduce"}):null]}):e.jsx(e.Fragment,{children:e.jsxs("button",{onClick:()=>qe(t.id),className:"edit-button",children:[e.jsx(it,{})," ",e.jsx(ot,{})," Amount"]})})})},t.id)]},u)),(ae==null?void 0:ae.length)===0&&e.jsx("p",{className:"text-center",children:"No wallets available."})]})})})})]})},Qt=pe.div`
  .wallet-details-form {
    margin-top: 30px;
  }

  .heading-above {
    display: flex;
    flex-direction: column;

    .heading {
      font-size: 18px;
      
      color: #04113f;
    }
  }
`,Zt=({id:n})=>{const M=[{label:"Id #",dataIndex:"id",key:"id"},{label:"Customer Name",dataIndex:"customerName",key:"customerName"},{label:"Scheduled Date",dataIndex:"scheduledDate",key:"scheduledDate"},{label:"Wallet Type",dataIndex:"walletType",key:"walletType"},{label:"Status",dataIndex:"status",key:"status"},{label:"Amount Paid",dataIndex:"amountPaid",key:"amountPaid"},{label:"Wallet Used",dataIndex:"walletUsed",key:"walletUsed"}],[y,O]=a.useState(""),[E,w]=a.useState(1),[D,N]=a.useState(10),[l,b]=a.useState([]),[C,R]=a.useState([]),I=me(),U=h=>{const{current:c,pageSize:m}=h;N(m),w(c)},J=h=>{O(h);const c=l.filter(m=>m.customerName.toLowerCase().includes(h)||m.id.toString().includes(h)||m.scheduledDate.toLowerCase().includes(h));R(c)};return a.useEffect(()=>{(async c=>{var m,r,B;try{const W=await I(ht(c));console.log("API Response: ",W);const X=((B=(r=(m=W==null?void 0:W.payload)==null?void 0:m.data)==null?void 0:r.bookingWallets)==null?void 0:B.map(V=>({id:V.id,customerName:`${V.user.first_name} ${V.user.last_name}`,scheduledDate:V.booking?new Date(Number(V.booking.collection_1_date)).toLocaleDateString():"N/A",walletType:V.clientWallet.type,status:V.booking?V.booking.status:"N/A",amountPaid:V.booking?`Rs. ${V.booking.final_amount}`:"Rs. 0",walletUsed:`Rs. ${Math.abs(V.amount_used)}`})))??[];b(X),R(X)}catch(W){console.error("Error fetching wallet details:",W)}})(n)},[n,I]),e.jsxs(Qt,{children:[e.jsxs("div",{className:"heading-above",children:[e.jsx("div",{className:"heading",children:e.jsx("p",{children:"Wallet Used Details"})}),e.jsx("div",{className:"search-tag-div",children:e.jsx(De,{onSearch:J,placeHolder:"Search by Customer name or number or booking id",searchText:y})})]}),e.jsx("div",{className:"wallet-details-form",children:e.jsx(be,{columns:M,data:C,showingName:"Wallets",isLoading:!1,onPageChange:U,page:E,pageSize:D,total:l.length,pagination:!0})})]})},Jt=({id:n})=>e.jsx("div",{children:e.jsx(Wt,{clientId:n,sectionName:"client"})}),Kt=({id:n,onSuccess:M,onClose:y,defaultAssignedDoctors:O})=>{var j,S,ne;const E=me(),[w,D]=a.useState(O),[N,l]=a.useState({doctorsList:!1}),[b,C]=a.useState(0),[R,I]=a.useState(150),[U,J]=a.useState([]),[h,c]=a.useState([]),[m,r]=a.useState(""),[B,W]=a.useState(""),[X,V]=a.useState(""),[ae,se]=a.useState(""),[re,Y]=a.useState(!1),[$,Z]=a.useState([]),i=o=>{r(o)},v=a.useCallback(async()=>{var o,d,f,s,L;try{l(g=>({...g,doctorsList:!0}));const p=await E(Mt({pageSize:R,searchText:m,pageNo:b,status:"approved",activeStatus:"approved"}));if(p!=null&&p.error)throw new Error(((o=p==null?void 0:p.payload)==null?void 0:o.message)||"Failed to fetch doctors");J(((f=(d=p==null?void 0:p.payload)==null?void 0:d.data)==null?void 0:f.doctors)||[]),c(((L=(s=p==null?void 0:p.payload)==null?void 0:s.data)==null?void 0:L.doctorCount)||0)}catch(p){console.error("Error fetching doctors:",p),Q.error((p==null?void 0:p.message)||"Failed to fetch doctors"),J([]),c(0)}finally{l(p=>({...p,doctorsList:!1}))}},[E,b,R,m]);a.useEffect(()=>{v()},[E,b,R,m,v]),console.log(w);const G=(o,d)=>{var L,p,g;let f={...w};const s={user_id:(L=d==null?void 0:d.user)==null?void 0:L.id,doctor_id:d==null?void 0:d.id,name:d==null?void 0:d.name,clientId:n};w!=null&&w[o]?(s.id=((p=w==null?void 0:w[o])==null?void 0:p.id)??null,F(s)):(g=d==null?void 0:d.user)!=null&&g.id&&D({...f,[o]:s})};console.log({doctorsToDelete:$});const F=async o=>{const d={...w},{user_id:f,doctor_id:s,id:L}=o??{};if(console.log({data:o,isApiCall:L,doctorsToDelete:$}),console.log(($==null?void 0:$.find(p=>(p==null?void 0:p.doctor_id)==(o==null?void 0:o.doctor_id)&&(p==null?void 0:p.user_id)==(o==null?void 0:o.user_id)))==null,"doctorsToDelete"),L&&($==null?void 0:$.find(p=>(p==null?void 0:p.doctor_id)==(o==null?void 0:o.doctor_id)&&(p==null?void 0:p.user_id)==(o==null?void 0:o.user_id)))==null){const p=[...$??[],o];Z(p)}delete d[s],D(d)},T=async()=>{var L,p,g;const o=await Promise.allSettled($.map(({user_id:k,doctor_id:z})=>E(ze({isActive:!1,body:{client_id:n,doctorDetails:[{user_id:k,doctor_id:z}]}})))),d=o.filter(k=>{var z,q;return k.status==="fulfilled"&&((q=(z=k.value)==null?void 0:z.payload)==null?void 0:q.success)}).length,f=o.length-d;d>0&&Q.success(`${d} doctor(s) unlinked successfully.`),f>0&&Q.error(`${f} doctor(s) failed to unlink.`);const s=await E(ze({isActive:!0,body:{client_id:n,doctorDetails:(L=Object.values(w??{}))==null?void 0:L.map(({user_id:k,doctor_id:z})=>({user_id:k,doctor_id:z}))}}));(p=s==null?void 0:s.payload)!=null&&p.success?(M(),y()):Q.error(((g=s==null?void 0:s.error)==null?void 0:g.message)||"Failed to link doctor")};return e.jsxs(_e,{children:[N.doctorsList&&e.jsx(Ft,{}),!re&&e.jsxs(oe,{headerClassName:"p-1",open:!0,title:"Link Doctors",handleClose:y,children:[e.jsx(oe.Body,{children:e.jsxs(_e,{children:[e.jsx("div",{className:"!mb-6",children:e.jsx(x.Group,{controlId:"vendorName",children:e.jsx(x.Control,{type:"text",name:"vendorName",autoFocus:!0,placeholder:"Search doctor by name",value:m??"",onChange:o=>{var d;return i((d=o==null?void 0:o.target)==null?void 0:d.value)},className:"w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"})})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-lg border border-gray-200",children:[e.jsxs("h2",{className:"text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200",children:["Available Doctors: (",U==null?void 0:U.length," / ",h,")"]}),e.jsxs("div",{className:"space-y-3 max-h-96 overflow-y-auto p-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100",children:[U==null?void 0:U.map(o=>e.jsxs("div",{className:"flex items-center p-3 bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-lg cursor-pointer transition-all duration-150 ease-in-out transform hover:scale-[1.02] shadow-sm",onClick:()=>G(o==null?void 0:o.id,o),children:[e.jsx("input",{type:"checkbox",checked:!!(w!=null&&w[o==null?void 0:o.id]),readOnly:!0,className:"form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-4 cursor-pointer"}),e.jsx(ke,{name:o==null?void 0:o.name,url:o==null?void 0:o.image,className:"w-10 h-10 rounded-full mr-3 object-cover border-2 border-gray-300"}),e.jsxs("div",{className:"flex-grow",children:[e.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",children:o==null?void 0:o.name}),e.jsxs("p",{className:"text-xs text-gray-600",children:[o==null?void 0:o.gender," | ",o==null?void 0:o.specialization]})]})]},`${o==null?void 0:o.id}-available`)),(U==null?void 0:U.length)===0&&e.jsx("p",{className:"text-sm text-gray-500 text-center py-4",children:"No doctors found matching your search."})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-lg border border-gray-200",children:[e.jsxs("h2",{className:"text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200",children:["Selected Doctors: (",(j=Object.keys(w))==null?void 0:j.length,")"]}),e.jsxs("div",{className:"space-y-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100",children:[w&&((S=Object.values(w))==null?void 0:S.length)>0?(ne=Object.values(w))==null?void 0:ne.map(o=>e.jsxs("div",{className:"flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg shadow-sm",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(ke,{name:o==null?void 0:o.name,url:o==null?void 0:o.image,className:"w-10 h-10 rounded-full mr-3 object-cover border-2 border-blue-300"}),e.jsx("div",{children:e.jsx("p",{className:"text-sm font-medium text-blue-800 truncate !ml-1 !mb-0",children:o==null?void 0:o.name})})]}),e.jsx(gt,{className:"text-red-500 hover:text-red-700 cursor-pointer h-6 w-6 transition-colors duration-150 ease-in-out",onClick:()=>F(o)})]},`${o==null?void 0:o.id}-selected`)):e.jsx("p",{className:"text-sm text-gray-500 text-center py-4",children:"No doctors selected yet."}),X&&e.jsx("div",{className:"mt-3 text-sm text-red-600 bg-red-50 p-3 rounded-md border border-red-200",children:X})]})]})]})]})}),e.jsx(oe.Footer,{children:e.jsxs("div",{className:"flex gap-1 justify-end",children:[e.jsx(ge,{onClick:y,children:"Cancel"}),e.jsx(he,{onClick:T,children:"Save Changes"})]})})]})]})},Xt=({clientId:n})=>{const M=me(),[y,O]=a.useState(!1),[E,w]=a.useState(null),[D,N]=a.useState(!1),{linkedDoctors:l,loading:b,error:C}=je(J=>J.clients),R=a.useCallback(()=>{M(ft(n))},[n]);a.useEffect(()=>{C&&Q.error(String(C))},[C]),a.useEffect(()=>{R()},[R]);const I=()=>{let J={};return l==null||l.map(h=>{var c;J[h==null?void 0:h.id]={id:1,user_id:(c=h==null?void 0:h.user)==null?void 0:c.id,doctor_id:h==null?void 0:h.id,name:h==null?void 0:h.name}}),J},U=[{label:"ID",width:100,dataIndex:"id",key:"0"},{label:"Name",width:170,dataIndex:"name",key:"1",render:(J,h)=>e.jsxs("div",{className:"flex justify-center align-items-center w-full",children:[e.jsx(ke,{className:"w-10 h-10 rounded-full",name:J,url:h==null?void 0:h.image})," ",e.jsx("p",{className:"!ml-2 mb-0",children:J})]})},{label:"Gender",width:100,dataIndex:"gender",key:"22"}];return e.jsx("div",{children:e.jsxs("div",{children:[y&&e.jsx(Kt,{id:n,onClose:()=>{O(!1)},onSuccess:()=>{R()},defaultAssignedDoctors:I()}),e.jsx("div",{className:"total-count-row"}),e.jsx("div",{className:"all-institutes-data rapha-table-view",children:e.jsx(be,{columns:U,data:l,pagination:!1,isLoading:b,showingName:"Associated Doctors"})})]})})},Ae=pe.div`
 .error {
        font-size: 14px;
         color: red;
    }
         
    .ready {
        width: 24px;
        height: 24px;
        aspect-ratio: 1 / 1;
        border-radius: 100%;
        background-color: rgb(34 197 94);
        margin: auto;
        }
    .notReady {
        width: 24px;
        height: 24px;
        aspect-ratio: 1 / 1;
        border-radius: 100%;
        background-color: rgb(239 68 68);
        margin: auto;
    }

    .smsPreview {
        word-wrap: break-word;
        overflow-wrap: break-word;
        white-space: pre-wrap;
        max-width: 100%;
    }

    .title_link {
        color: #0d6efd;
        cursor: pointer;
    }

    .title {
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 700;
        }
        
    .sub-title {
        font-size: 14px;
        line-height: 1rem;
        font-weight: 500;
        margin-bottom: 16px;
    }

    .left-container {
        border: 1px solid #dee2e6;
        padding: 2rem;
        line-height: 24px;
        border-radius: .5rem;
    }

    .save-btn {
        width: 100%;
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #4caf50;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .border-r {
        border-right: 1px solid #dee2e6;
        }
        
    .container-right {
        border: 1px solid #dee2e6;
        background-color: #e6f7ff;
        padding: 24px;
        border-radius: .5rem;
    }

    .footer {
        color: #6b7280;
        margin: 0;
        margin-top: 10px;
        padding-top: 10px;
        font-weight: 400;
        border-top: 1px solid #6b7280;
    }

    }

    // email
    .textArea {
        border: 1px solid #d8d8d8;
        padding: 8px;
        border-radius: 5px;
        background-color: transparent;
        width: 100%;
        min-height: 200px;
    }

    .emailPreview {
        background-color: #f9fafb;
        border: 1px solid #dee2e6;
        // padding: 2rem;
        border-radius: .5rem;
        margin-bottom: 3rem;
        
        .logo {
                width: 100%;
                height: 4rem;
                margin: auto;
                object-fit: contain;
            }
        
            .banner {
                width: 100%;
                margin-top: 24px;
            }

            .preview-body{
                font-size: 16px;
                color: #565859;
                padding: 8px 24px;
                word-wrap: break-word; 
                overflow-wrap: break-word; 
                white-space: pre-wrap; 
                max-width: 100%; 
            }
                

`,ea=({body:n})=>{var M;return e.jsx(Ae,{children:e.jsxs("div",{className:"emailPreview",children:[e.jsx("img",{className:"logo",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/rectangle_7.png",alt:"Logo"}),e.jsx("img",{className:"banner",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/LAB+TESTS.png",alt:"Banner"}),e.jsx("div",{className:"preview-body",dangerouslySetInnerHTML:{__html:((M=n==null?void 0:n.toString())==null?void 0:M.replace(`
`,"<br>"))??""}})]})})},ta=[{label:"Marketing",value:"Marketing"},{label:"Transactional",value:"Transactional"},{label:"Others",value:"Others"}],aa=({template:n,onClose:M,onSuccess:y,isEdit:O})=>{var F,T,j,S,ne,o;const E=(F=n==null?void 0:n.wa_components)==null?void 0:F.find(d=>(d==null?void 0:d.type)=="BODY");(S=(j=(T=E==null?void 0:E.text)==null?void 0:T.trim())==null?void 0:j.split(/{{\d+}}/g))==null||S.length;const[w,D]=a.useState((n==null?void 0:n.params)??[]),[N,l]=a.useState(n!=null&&n.text?((o=(ne=n==null?void 0:n.text)==null?void 0:ne.toString())==null?void 0:o.replaceAll("<br>",`
`))??"":""),[b,C]=a.useState((n==null?void 0:n.name)??""),[R,I]=a.useState((n==null?void 0:n.subject)??""),[U,J]=a.useState((n==null?void 0:n.type)??null),h=me(),[c,m]=a.useState(""),[r,B]=a.useState(0),[W,X]=a.useState(0),[V,ae]=a.useState(!1),[se,re]=a.useState(!1),Y=a.useRef(null),$=a.useRef(null),{paramsOptions:Z}=je(d=>d==null?void 0:d.communications),i=a.useMemo(()=>Z==null?void 0:Z.map(d=>({label:d,value:d})),[Z]),v=async()=>{var s,L,p;if(!b||!N||!R||!U){Q.error("Fill all fields.");return}const d={emailtemplate:{name:b,text:N?(s=N==null?void 0:N.toString())==null?void 0:s.replaceAll(`
`,"<br>"):"",subject:R,type:U,from:"client"}};let f=null;if(O?f=await h(jt({id:n==null?void 0:n.id,payload:d})):f=await h(vt(d)),(L=f==null?void 0:f.payload)!=null&&L.success){Q.success("Temnplate saved successfully!."),y();return}Q.error((p=f==null?void 0:f.error)==null?void 0:p.message)},G=d=>{var k;let f=null;if(d?f=Y.current:f=$.current,!f)return;let s=f.selectionStart,L=f.selectionEnd;const p=(k=f.value)==null?void 0:k.substring(s,L),g=f.value.length;if(s!==L){for(;s>0&&f.value.charAt(s)!=="["&&f.value.charAt(s)!="]";)console.log("selectionStart",s),s--;for(;L<g&&f.value.charAt(L)!=="]"&&f.value.charAt(L)!=="[";)console.log("selectionEnd",L),L++;if(f.value.charAt(s)==="["&&f.value.charAt(L)==="]")f.selectionStart=s,f.selectionEnd=L+1,re(d),m(p==null?void 0:p.trim()),B(s),X(L+1),ae(!0);else return}};return e.jsx(Ae,{children:e.jsxs(Ce,{show:!0,size:"lg",className:"!p-3",centered:!0,children:[e.jsx(Ce.Header,{className:"!px-3",children:e.jsxs("div",{className:"w-100 flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("strong",{children:"ID:"})," ",n==null?void 0:n.id]}),e.jsxs("div",{className:"mb-1 d-flex justify-content-start align-items-center",children:[e.jsx("strong",{className:"!mr-3",children:"Name:"}),e.jsx(x.Control,{value:b,onChange:d=>{var f;return C(((f=d==null?void 0:d.target)==null?void 0:f.value)??"")},className:"ml-2"})]}),e.jsxs("div",{className:"w-full mt-3 mb-1 d-flex justify-content-start align-items-center",children:[e.jsx("strong",{className:"!mr-3 min-w-[50px]",children:"Type:"}),e.jsx(xe,{style:{minWidth:"250px"},className:"!w-100 ml-3 !h-[38px]",allowClear:!0,value:U,onChange:J,options:ta,showSearch:!0,getPopupContainer:d=>d.parentElement})]})]}),e.jsx(Ot,{type:"default",onClick:M,children:e.jsx(bt,{className:"cursor-pointer"})})]})}),e.jsx(Ce.Body,{className:"m-0 p-0 !pl-3 !pr-3",children:e.jsx(Ae,{className:"d-flex",children:e.jsxs(yt,{className:" w-full",children:[e.jsxs(Ee,{sm:6,className:"min-w-[250px] max-w-[400px] border-r p-3",children:[e.jsx("strong",{className:"",children:"Edit Template"}),e.jsxs("div",{className:"mb-1 mt-3 d-flex justify-content-start align-items-center",children:[e.jsx("strong",{className:"!mr-3 min-w-[70px]",children:"Subject :"}),e.jsx(x.Control,{ref:$,value:R,onDoubleClick:()=>G(!1),onChange:d=>{var f;return I(((f=d==null?void 0:d.target)==null?void 0:f.value)??"")},className:"ml-2"})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("strong",{children:"Body :"}),e.jsx("textarea",{ref:Y,value:N,onDoubleClick:()=>G(!0),placeholder:"Write your email content here. Use [field_name] for dynamic fields.",onChange:d=>{var f;return l(((f=d==null?void 0:d.target)==null?void 0:f.value)??"")},className:"textArea",name:"",id:""})]}),e.jsx("button",{onClick:v,className:"save-btn",children:"Save"}),V&&e.jsxs("div",{className:"mt-3",children:["Select dynamic field",e.jsx(xe,{className:"w-100 mt-1",options:i,showSearch:!0,getPopupContainer:d=>d.parentElement,value:Z!=null&&Z.includes(c)?c:null,onChange:d=>{if(!d||r===null||W===null)return;const f=`[${d}]`;if(se){const s=N.substring(0,r)+f+N.substring(W);l(s)}else{const s=R.substring(0,r)+f+R.substring(W);I(s)}ae(!1)}})]})]}),e.jsx(Ee,{sm:6,children:e.jsxs("div",{className:"mt-3 mb-3",children:[e.jsx("strong",{children:"Email Message Preview"}),e.jsx(ea,{body:N})]})})]})})})]})})},Se=({sectionName:n,clientId:M})=>{const y=me(),[O,E]=a.useState(!1),[w,D]=a.useState(null),[N,l]=a.useState([]),[b,C]=a.useState(!1),[R,I]=a.useState([]),[U,J]=a.useState(0),[h,c]=a.useState(null),[m,r]=a.useState(null),[B,W]=a.useState(""),X=[{label:"Contact name",width:150,dataIndex:"name",key:"name",render:(i,v)=>`${(v==null?void 0:v.first_name)??""} ${(v==null?void 0:v.last_name)??""}`},{label:"Mobile number",width:150,dataIndex:"phone",key:"phone"},{label:"Email id",width:150,dataIndex:"email",key:"email"},{label:"Active",width:100,key:"status",render:i=>e.jsx(e.Fragment,{children:i==null?void 0:i.active_status})}],V=a.useCallback(async()=>{var v,G,F,T;const i=await y(wt({}));(v=i==null?void 0:i.payload)!=null&&v.data&&l((T=(F=(G=i==null?void 0:i.payload)==null?void 0:G.data)==null?void 0:F.watemplates)==null?void 0:T.map(j=>({label:j==null?void 0:j.name,value:j==null?void 0:j.id})))},[]),ae=a.useCallback(async()=>{var v,G,F,T;const i=await y(Ct({type:"Marketing",belongs_to:se==null?void 0:se.id}));(v=i==null?void 0:i.payload)!=null&&v.data&&l((T=(F=(G=i==null?void 0:i.payload)==null?void 0:G.data)==null?void 0:F.emailtemplates)==null?void 0:T.map(j=>({label:j==null?void 0:j.name,value:j==null?void 0:j.id})))},[]),se=je(i=>i.auth.user),re=a.useCallback(async()=>{var v,G,F,T;const i=await y(Nt({belongs_to:se==null?void 0:se.id}));(v=i==null?void 0:i.payload)!=null&&v.success&&l((T=(F=(G=i==null?void 0:i.payload)==null?void 0:G.data)==null?void 0:F.results)==null?void 0:T.map(j=>({label:j==null?void 0:j.name,value:j==null?void 0:j.id})))},[se]),Y=a.useCallback(()=>{n=="EMAIL"?ae():n=="SMS"?re():n=="WHATSAPP"&&V()},[ae,re,V,n]);a.useEffect(()=>{Y()},[Y]);const $=async()=>{var G,F,T,j;if(O)return;if(!w)return Ne.error("Please select template");const i={client_id:M,template_id:w,sendThrough:n==null?void 0:n.toLowerCase(),filter:{}};E(!0),m&&(i.filter.fromAge=Number((G=m==null?void 0:m.split("-"))==null?void 0:G[0]),i.filter.toAge=Number((F=m==null?void 0:m.split("-"))==null?void 0:F[1])),h&&(i.filter.gender=h);const v=await y(St(i));(T=v==null?void 0:v.payload)!=null&&T.success?(Ne.success("Communication sent successfully!."),D(null),r(null),c(null)):Ne.error(((j=v==null?void 0:v.error)==null?void 0:j.message)||"Failed to send"),E(!1)},Z=a.useCallback(async()=>{var i,v,G,F;try{let T={clientId:M,count:150,page:0,searchText:B};if(m){let S=m==null?void 0:m.split("-");T.fromAge=Number(S==null?void 0:S[0]),T.toAge=Number(S==null?void 0:S[1])}h&&(T.gender=h);const j=await y(We(T));console.log("API Response: ",j),I((v=(i=j==null?void 0:j.payload)==null?void 0:i.data)==null?void 0:v.clientUsers),J((F=(G=j==null?void 0:j.payload)==null?void 0:G.data)==null?void 0:F.clientUsersCount)}catch(T){console.error("Error fetching associated users:",T)}},[y,B,M,m,h]);return a.useEffect(()=>{Z()},[Z]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-flex justify-content-between align-items-center",children:e.jsxs("h5",{className:"text-capitalize",children:["Send ",n==null?void 0:n.toLowerCase()," Communications"]})}),e.jsxs(x,{className:"border rounded-sm p-3 mt-3",children:[e.jsxs(x.Group,{children:[e.jsx(x.Label,{children:"Select Template"}),e.jsx("br",{}),e.jsx(xe,{showSearch:!0,allowClear:!0,value:w,placeholder:"Select template",onChange:i=>D(i),options:N,className:"delta-select select-filter w-100"})]}),e.jsxs(x.Group,{children:[e.jsx(x.Label,{children:"Select Gender"}),e.jsx("br",{}),e.jsx(xe,{showSearch:!0,allowClear:!0,value:h,placeholder:"Select Gender",onChange:i=>c(i),options:[{option:"Male",value:"male"},{option:"Female",value:"female"}],className:"delta-select select-filter w-100"})]}),e.jsxs(x.Group,{children:[e.jsx(x.Label,{children:"Select Age"}),e.jsx("br",{}),e.jsx(xe,{showSearch:!0,allowClear:!0,value:m,placeholder:"Select Age",onChange:i=>{r(i)},options:[{option:"O to 20",value:"0-20"},{option:"2O to 30",value:"20-30"},{option:"3O to 60",value:"30-60"},{option:"6O to 100",value:"60-100"},{option:"O to 100",value:"0-100"}],className:"delta-select select-filter w-100"})]}),e.jsxs(x.Group,{className:"mt-3",children:[e.jsxs(x.Label,{children:["Select Users (",U,")"]}),e.jsx("br",{}),e.jsx(be,{columns:X,data:R,showingName:"",isLoading:O,total:U})]}),e.jsx("div",{className:"mt-3 d-flex justify-content-end align-items-center",children:e.jsx(fe,{onClick:$,className:"",children:O?"Loading":"Send"})})]}),b&&e.jsx(aa,{isEdit:!1,onClose:()=>{C(!1)},template:null,onSuccess:()=>{C(!1),Y()}})]})},sa=pe.div`
  .btn-upload {
    text-align: center;
    border-top: 1px solid #e2e2e2;
    padding-top: 20px;
    input {
      display: none;
    }
    button span {
      color: #1f4690;
    }
  }
  .back-arrow-btn-sec-con {
    margin-bottom: 6px;
    span {
      cursor: pointer;
    }
  }
  .promotions-data-table-pagination {
    text-align: center;
    margin-top: 20px;
  }
  .btn-upload-section {
    border: 3px dotted rgb(226, 226, 226);
    padding: 40px;
    cursor: pointer;
    text-align: center;
    button {
      font-size: 18px;
      background: none;
      border: none;
    }
    p {
      opacity: 0.5;
    }
  }
  .header-upload {
    display: flex;
    justify-content: space-between;
  }
  .bulk-upload-btns {
    display: flex;
    justify-content: end;
    margin-bottom: 30px;
    .sample-sheet {
      margin-left: 30px;
      cursor: pointer;
      border: 1px solid #17a2bb;
      padding: 8px 20px;
      border-radius: 4px;
      height: 48px;
      display: inline-block;
      background: #008080;
      color: #fff;
      font-size: 14px;
      padding: 12px 15px;
    }
    a {
      color: #fff;
    }
  }
  .header-upload {
    margin-bottom: 30px;
    span {
      cursor: pointer;
      color: #4682b4;
    }
  }
  .submit-s-list-sec {
    text-align: center;
    // padding-top: 20px;
  }
  .total-record-sec-conut-sec {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .deltape-button {
    height: 40px;
    border-radius: 8px;
    background: #008080;
    padding: 4px 20px;
    color: #fff;
    border: none;
  }
  .btn-upload-filled {
    .btn-upload-section {
      padding: 10px;
    }
  }

  .loading-centering {
    display: flex;
    justify-content: center;
  }
  .send-promotional-mail-btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .rapha-btn{
    background: #008080;
  }
`,na=({allPromotionalData:n,current:M,total:y,onChange:O,pageSize:E})=>{const{loading:w}=je(l=>l==null?void 0:l.promotionsLogs),D=l=>{let b="";try{b=l.replace((l==null?void 0:l.split("_")[0])+"_","")}catch(C){console.log("error",C)}return b},N=[{label:"Template I.D",key:"3",width:120,render:l=>e.jsx(e.Fragment,{children:l==null?void 0:l.template_id})},{label:"Type",dataIndex:"type",key:"type",width:140},{label:"To",key:"2",width:70,render:l=>e.jsx(e.Fragment,{children:l==null?void 0:l.to})},{label:"Created By",key:"20",width:90,render:l=>{var b,C;return e.jsx(e.Fragment,{children:`${((b=l==null?void 0:l.createdByUser)==null?void 0:b.first_name)??"N/A"} ${((C=l==null?void 0:l.createdByUser)==null?void 0:C.last_name)??"N/A"}`})}},{label:"Campaign Name",key:"3",width:120,render:l=>e.jsx(e.Fragment,{children:D(l==null?void 0:l.campaign)})},{label:"No Of Clicks",key:"9",width:80,render:l=>e.jsx(e.Fragment,{children:l==null?void 0:l.no_of_clicks})},{label:"Created At",key:"4",width:120,render:l=>{const b=kt(l==null?void 0:l.created_at).format("DD/MM/YYYY h:mm A");return e.jsx(e.Fragment,{children:b})}},{label:"Section",key:"5",width:100,render:l=>{var b,C;return e.jsx(e.Fragment,{children:(C=(b=l==null?void 0:l.filter)==null?void 0:b.section)==null?void 0:C.join(",")})}},{label:"Category",key:"6",width:100,render:l=>{var b,C;return e.jsx(e.Fragment,{children:(C=(b=l==null?void 0:l.filter)==null?void 0:b.category)==null?void 0:C.join(",")})}},{label:"Pincode",key:"7",width:100,render:l=>{var b,C;return e.jsx(e.Fragment,{children:(C=(b=l==null?void 0:l.filter)==null?void 0:b.pincode)==null?void 0:C.join(",")})}},{label:"City",key:"7",width:100,render:l=>{var b,C;return e.jsx(e.Fragment,{children:(C=(b=l==null?void 0:l.filter)==null?void 0:b.city)==null?void 0:C.join(",")})}},{label:"State",key:"8",width:100,render:l=>{var b,C;return e.jsx(e.Fragment,{children:(C=(b=l==null?void 0:l.filter)==null?void 0:b.state)==null?void 0:C.join(",")})}}];return e.jsx(be,{columns:N,data:n==null?void 0:n.communicationLogs,showingName:"Promotional Logs",isLoading:w,onPageChange:O,page:M,pageSize:E,total:y,pagination:!0})},la=()=>{var R;const[n,M]=a.useState(1),[y,O]=a.useState(50),{linkableId:E}=_t(),[w,D]=a.useState("promotional_mails"),N=me(),{promotionalLogs:l,error:b}=je(I=>I==null?void 0:I.promotionsLogs);a.useEffect(()=>{b&&Q.error(b)},[b]),a.useEffect(()=>{(()=>{N(At({count:y,page:n,type:w,linkable_id:E}))})()},[n,y,N,w]);const C=(I,U)=>{O(U),M(I)};return e.jsx(e.Fragment,{children:e.jsx(sa,{children:e.jsx("div",{className:"freshbag-wrapper",children:e.jsx("div",{className:"content getinTouchPage",children:e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("div",{className:"profileinfoHeader",children:e.jsx("div",{className:"top-sec-header-sec",children:e.jsx("span",{className:"edit-p-text",children:"Manage Promotional Logs"})})})}),e.jsxs("div",{className:"!my-2",children:[e.jsx("label",{className:"!text-lg !mr-2",children:"Promotional Type"}),e.jsxs(xe,{onChange:I=>{D(I)},value:w,placeholder:"Select Promotional Type",children:[e.jsx("option",{value:"promotional_mails",children:"Promotional Mails"}),e.jsx("option",{value:"promotional_whatsapp",children:"Promotional Whatsapp"}),e.jsx("option",{value:"promotional_rcs",children:"Promotional RCS"}),e.jsx("option",{value:"promotional_sms",children:"Promotional SMS"})]})]}),e.jsx("div",{className:"all-institutes-data deltape-table-view max-w-[89vw]",children:e.jsx(na,{current:n,total:(R=l==null?void 0:l.pagination)==null?void 0:R.totalRecords,onChange:C,pageSize:y,allPromotionalData:l})})]})})})})})},ia=({clientId:n})=>e.jsx("div",{children:e.jsx(Me,{tabs:[{label:"Email",value:"1",children:e.jsx(Se,{clientId:n,sectionName:"EMAIL"})},{label:"Whats App",value:"2",children:e.jsx(Se,{clientId:n,sectionName:"WHATSAPP"})},{label:"SMS",value:"3",children:e.jsx(Se,{clientId:n,sectionName:"SMS"})},{label:"Logs",value:"4",children:e.jsx(la,{})}]})}),ns=()=>{const[n,M]=a.useState(),[y,O]=a.useState([]),E=me(),w=Dt(),D=(w==null?void 0:w.id)||null,N=a.useCallback(async()=>{var b,C;if(!D)return;const l=await E(Tt({id:D,type:n==null?void 0:n.value}));O((C=(b=l==null?void 0:l.payload)==null?void 0:b.data)==null?void 0:C.documentFiles)},[E,D,n]);return a.useEffect(()=>{N()},[N]),e.jsxs(Bt,{className:"p-3",children:[e.jsx("div",{className:"mb-3",children:e.jsx(Rt,{items:[{name:"Clients",link:"/MyClients"},{name:`Client Details(${D})`,link:`/MyClients/update/${D}`}]})}),e.jsx(Me,{tabs:[{label:"Client Wallets",value:"2",children:e.jsx(Gt,{id:D})},{label:"Associated Doctors",value:"2.511111",children:e.jsx(Xt,{clientId:D})},{label:"Associated Users",value:"3",children:e.jsx(Yt,{id:D})},{label:"Package Details",value:"4",children:e.jsx(Lt,{section_name:"CLIENT",parentId:D})},{label:"Wallet Details",value:"5",children:e.jsx(Zt,{id:D})},{label:"RFQ History",value:"9",children:e.jsx(Jt,{id:D})},{label:"Communication Details",value:"11",children:e.jsx(ia,{clientId:D})}],containerClassName:"!pt-4"})]})};export{ns as default};
