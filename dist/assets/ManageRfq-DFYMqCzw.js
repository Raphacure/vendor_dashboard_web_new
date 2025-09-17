import{j as e,d as X,aJ as Z,r as u,u as z,cL as G,dh as U,eW as $,cn as C,eX as W,P,eY as D,a as V,c as E,eZ as H,L as ee,f as ne}from"./index-ChUmNm8R.js";import{I as oe}from"./Index.styled-DnYCryoN.js";import{C as ae}from"./CustomTable-BBwjbMSz.js";import{C as re}from"./CommonSearchBox-hAv5GAZt.js";import{C as K}from"./CustomTab-sR3kUFYQ.js";import{d as O}from"./dayjs.min-BA1p4t9P.js";import{S as T}from"./SecoundaryButton-goiA8OO9.js";import{C as te,u as se}from"./CustomModalRenderer-DuatB4dP.js";import{C as v}from"./CustomModal-Ds0Ku9jR.js";import{s as ie}from"./Table-BhIN-nUr.js";import"./CustomSpinLoader-CrgQ8bNq.js";import"./CustomPagination-BfzEq6pA.js";import"./index-gapj9Wcb.js";import"./index-D9Bv3C6k.js";import"./DownOutlined-z3I3nDv9.js";import"./useIcons-CDf6lDIp.js";import"./CheckOutlined-DPOLd74P.js";import"./chevron-down-u38pTTSM.js";import"./createLucideIcon-D1dtiQRH.js";import"./styleChecker-DD0Z1krI.js";import"./addEventListener-D7w6vIGx.js";import"./useBubbleLock-BnnxIxI9.js";import"./button-D0Rmo6Y5.js";import"./LeftOutlined-lLzXux5-.js";import"./dropdown-C4zMWtkZ.js";import"./collapse-BbEVqHco.js";import"./index-De2sQM66.js";import"./useForm-CIMDi_Qk.js";import"./Input-ClusE8wk.js";import"./useForceUpdate-jQjUdsvY.js";import"./index-1XTAFx_Q.js";import"./Pagination-BbDnNTXA.js";import"./extendsObject-78o_rR5W.js";const Y=r=>{const{columns:i,rfqList:o,isLoading:c,page:h,pageSize:t,total:p,onPageChange:d}=r;return e.jsx(ae,{columns:i,bodyCellClassName:"h-[50px] p-2 text-center",rowKey:"id",data:Array.isArray(o)&&o?o:[],isLoading:c,page:h,pageSize:t,total:p,onPageChange:d,showingName:"RFQ",pagination:!0})},le=X.div`
  .cityTitle {
    text-transform: capitalize;
    font-size: 18px;
  }
  padding: 0px 20px;
  .left-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .search-bar {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .buttons-div {
    display: flex;
    gap: 25px;
  }
  .ant-input-affix-wrapper {
    width: 20rem;
  }
  .Package-btn {
    border-radius: 3px;
    border: 1px solid #a3a3a3;
    background: #fff;
    color: #686868;
    font-size: 12px;
    font-weight: 400;
    height: 3rem;
  }
  .Quote-btn {
    border-radius: 2px;
    background: #9747ff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    color: #f6f9fd;
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: 500;
  }

  .ordertable {
    margin-top: 12px;
    width: 100%;
    overflow-x: scroll;
  }
  .ordertable Table {
    --bs-table-bg: transparent !important;
    border-radius: 5px;
    border: 1px solid #d6cece;
  }
  .ordertable thead {
    border-radius: 5px 5px 0px 0px;
    background: #d3edfc;
  }
  .ordertable th {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    white-space: nowrap;
    height: 3rem;
  }
  .ordertable td {
    color: #808080;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    white-space: nowrap;
  }
  .ordertable tr {
    border: 1px solid #d6cece;
  }
  .rfq-name {
    cursor: pointer;
    color: purple !important;
  }

  .profile-card {
    // margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
  }
  .profile-info {
    display: flex;
    width: 100%;
  }
  .profile-details {
    width: 100%;
  }
  .profile-details h2 {
    margin: 0;
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1.26px;
    opacity: 0.8;
  }
  .profile-details p {
    margin: 0;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.36px;
    opacity: 0.7;
  }
  .profile-details-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .appointment-details {
    // margin-top: 2rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
  }
  .appointment-info {
    margin-bottom: 16px;
    height: 8rem;
    overflow: scroll;
  }
  .renegotiate-info {
    margin-bottom: 16px;
    overflow: scroll;
  }
  .renegotiate-btn-div {
    display: flex;
    justify-content: end;
    margin-top: 1.5rem;
    button {
      background: #9747ff;
      box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
      color: #f6f9fd;
      font-family: Poppins, sans-serif;
      font-size: 12px;
      font-weight: 500;
    }
  }
  .header {
    p {
      margin: 0;
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 1.26px;
      opacity: 0.8;
    }
  }
  .renegotiate-header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    p {
      margin: 0;
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 1.26px;
      opacity: 0.8;
    }
  }
  .renegotiate-close-btn-div {
    display: flex;
    justify-content: end;
    svg {
      height: 2rem;
      width: 2rem;
    }
  }
  .display-contents {
    display: contents;
    margin-bottom: 2rem;
  }
  .appointment-item {
    display: flex;
    margin-bottom: 8px;
    flex-basis: 30%;
    border-bottom: 1px solid lightgray;
  }
  .appointment-comments-details {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
    height: 10rem;
    overflow: scroll;
  }
  .appointment-comment-info {
    margin-bottom: 16px;
  }
  .pagination-div {
    display: flex;
    justify-content: center;
  }

  .ordertable-thead {
    width: 100%;
    margin-bottom: 2rem;
  }
  .sectionHeading {
    color: #545353;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    padding: 0px 0px;
    .left-controls {
      display: flex;
      flex-direction: column;
      align-items: baseline;
    }
    .sectionHeading {
      font-size: 15px;
    }
    .pagination-div {
      margin-bottom: 2rem;
    }
    .buttons-div {
      margin-top: 1rem;
    }
  }
`,ce=({details:r,packages:i,tests:o,cityDetails:c,activeTab:h,data:t})=>{var p;return console.log(t,"data"),e.jsxs(le,{children:[e.jsx("div",{className:"profile-card chk1",children:e.jsx("div",{className:"profile-info",children:e.jsxs("div",{className:"profile-details",children:[e.jsxs("div",{className:"profile-details-text",children:[e.jsx("h2",{children:r==null?void 0:r.rfq_name}),e.jsxs("p",{children:["Status: ",e.jsx("span",{children:(r==null?void 0:r.status)??"Open"})]})]}),e.jsxs("p",{children:["RFQ ID: ",e.jsx("span",{children:r==null?void 0:r.id})]}),e.jsxs("p",{children:["Submission Date:",new Date(r==null?void 0:r.created_at).toLocaleDateString("en-IN",{day:"2-digit",month:"2-digit",year:"numeric"})]}),e.jsxs("div",{className:"profile-details-text",children:[e.jsx("p",{children:"Diagnostic Center: N/A"}),e.jsx("p",{children:"Hospital: N/A"})]})]})})}),e.jsx("div",{className:"appointment-details",children:e.jsx("div",{className:"appointment-info",children:(p=Object.keys(c))==null?void 0:p.map((d,m)=>{var a,s,f;return e.jsxs(Z.Fragment,{children:[e.jsxs("div",{className:"appointment-mode",children:["City:",e.jsxs("span",{className:"cityTitle",children:[" ",d]})]}),e.jsxs("div",{className:"appointment-item d-flex justify-content-between align-items-center mt-1 pb-1",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mr-1",children:"Number Of Men:"}),e.jsxs("span",{children:[" ",((a=c==null?void 0:c[d])==null?void 0:a.no_of_men)||"N/A"]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mr-1",children:"Number Of Women: "}),e.jsxs("span",{children:[" ",((s=c==null?void 0:c[d])==null?void 0:s.no_of_women)||"N/A"]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mr-1",children:"Number Of Children :"}),e.jsx("span",{children:((f=c==null?void 0:c[d])==null?void 0:f.no_of_children)||"N/A"})]})]})]},m)})})}),h!=="2"&&e.jsxs("div",{className:"",children:[e.jsx("label",{children:"Test Details:"}),e.jsx("div",{className:"appointment-comments-details",children:e.jsx("div",{className:"appointment-comment-info",children:o.length>0?o==null?void 0:o.map((d,m)=>e.jsx("div",{className:"appointment-comment-item",children:e.jsx("li",{children:d})},m)):e.jsx("span",{children:"N/A"})})})]}),e.jsxs("div",{className:"",children:[e.jsx("label",{children:"Pacakges Details:"}),e.jsx("div",{className:"appointment-comments-details",children:e.jsx("div",{className:"appointment-comment-info",children:i.length>0?i==null?void 0:i.map((d,m)=>e.jsx("div",{className:"appointment-comment-item",children:e.jsx("li",{children:d})},m)):e.jsx("span",{children:"N/A"})})}),e.jsx("div",{className:"appointment-mode",children:e.jsxs("span",{children:["Total Amount: ",r==null?void 0:r.total_amount," /-"]})})]})]})},de=({data:r,id:i,onSuccess:o,showInput:c})=>{const[h,t]=u.useState(),p=z(),d=async()=>{var s;if(!h)return;const a=await p($({id:i,data:{total_amount:h}}));(s=a==null?void 0:a.payload)!=null&&s.success?(o(),t(""),C.success("Successfully saved!.")):C.error("Failed to save!.")},m=[{title:"Negotiated Amount",width:100,dataIndex:"negotiated_amount",key:"0"},{title:"Negotiated By",width:100,dataIndex:"negotiatedBy",key:"1",render:a=>e.jsxs(e.Fragment,{children:[(a==null?void 0:a.first_name)??""," ",(a==null?void 0:a.last_name)??""]})},{title:"Negotiated At",width:100,dataIndex:"negotiated_at",key:"2",render:a=>{var s;return e.jsx(e.Fragment,{children:(s=a==null?void 0:a.replace("T"," "))==null?void 0:s.slice(0,18)})}}];return e.jsxs(e.Fragment,{children:[e.jsx(ie,{columns:m,rowKey:"id",dataSource:r??[],pagination:!1,bordered:!0,scroll:{x:"max-content"}}),c&&e.jsxs("div",{className:"mt-3",children:[e.jsx("span",{className:"mb-1",children:"Negotiating Amount"}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(G.Control,{className:"mr-2",placeholder:"Enter negotiating amount",onChange:a=>{var s;t(Number((s=a==null?void 0:a.target)==null?void 0:s.value))},value:h,type:"number"}),e.jsx(U,{className:"",onClick:d,disabled:!h,variant:"primary",children:"Send"})]})]})]})},pe=({onHide:r,id:i,activeTab:o,selectedRfq:c})=>{const h=z(),[t,p]=u.useState([]),[d,m]=u.useState([]),[a,s]=u.useState([]),[f,_]=u.useState({}),x=u.useCallback(async()=>{var j,R,F;if(!i)return;const N=await h(W(i)),b=(R=(j=N==null?void 0:N.payload)==null?void 0:j.data)==null?void 0:R.rfq;p(b);const y=new Set,A=new Set,w={};(F=b==null?void 0:b.items)==null||F.forEach(l=>{var k,S;w[l==null?void 0:l.city_id]={service_id:l==null?void 0:l.service_id,no_of_men:l==null?void 0:l.no_of_men,no_of_women:l==null?void 0:l.no_of_women,no_of_children:l==null?void 0:l.no_of_children},A.add((k=l==null?void 0:l.package)==null?void 0:k.service_name),y.add((S=l==null?void 0:l.test)==null?void 0:S.service_name)}),m(Array.from(A)),s(Array.from(y)),_(w)},[i,h]);return u.useEffect(()=>{x()},[x]),e.jsx(v,{handleClose:r,open:!0,title:"RFQ Details",children:e.jsx(v.Body,{children:e.jsx(K,{tabs:[{label:"Details",value:"2",children:e.jsx(ce,{details:t,cityDetails:f,tests:a,packages:d,activeTab:o,data:c})},{label:"Negotiation History",value:"4",children:e.jsx(de,{onSuccess:x,id:t==null?void 0:t.id,data:t==null?void 0:t.negotiations,showInput:!((t==null?void 0:t.status)=="approved"||(t==null?void 0:t.status)=="rejected")})}],containerClassName:"mt-2"})})})},me=({activeTypes:r,pop:i,selectedRfq:o,activeTab:c,onRefresh:h})=>{const t=z(),[p,d]=u.useState(null),[m,a]=u.useState(""),s=()=>{d(null),a("")},f=async()=>{try{if(!p)return;const x=await t($({id:o==null?void 0:o.id,data:{total_amount:p}}));if(x!=null&&x.error){C.error("Failed to negotiate RFQ status.");return}else C.success("Successfully saved!."),h(),i("negotiateRfqStatus"),s()}catch{C.error("An error occurred while negotiating RFQ status.")}},_=async()=>{var y;const{id:x,status:N}=o;if(!x||!N)return;const b=await t(D({id:x,data:{status:N,comments:m}}));(y=b==null?void 0:b.payload)!=null&&y.success?(h(),C.success("RFQ status updated successfully!."),i("toggleRfqStatus"),s()):C.error("Failed to update RFQ status!.")};return e.jsx(te,{activeTypes:r,modals:[{type:"rfqDetails",component:e.jsx(pe,{onHide:()=>i("rfqDetails"),id:o==null?void 0:o.id,activeTab:c,selectedRfq:o})},{type:"negotiateRfqStatus",component:e.jsxs(v,{handleClose:()=>{i("negotiateRfqStatus"),s()},open:!0,title:"Negotiate RFQ Status",children:[e.jsx(v.Body,{children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("p",{className:"font-medium text-base mb-0",children:[e.jsx("strong",{children:"RFQ Name:"})," ",e.jsx("span",{className:"ml-1 text-gray-700",children:o==null?void 0:o.name})]}),e.jsxs("p",{className:"font-medium text-base mb-0",children:[e.jsx("strong",{children:"RFQ Amount:"})," ",e.jsx("span",{className:"ml-1 text-gray-700",children:o==null?void 0:o.amount})]}),e.jsx("label",{className:"font-medium text-base mb-1",htmlFor:"negotiationAmount",children:e.jsx("strong",{children:"Negotiation Amount:"})}),e.jsx("input",{id:"negotiationAmount",type:"number",min:0,value:p??"",onChange:x=>d(Math.max(0,Number(x.target.value))),className:"rounded-md border border-gray-500 px-3 py-2 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter negotiation amount"})]})}),e.jsx(v.Footer,{children:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(T,{onClick:()=>{i("negotiateRfqStatus"),s()},children:"Cancel"}),e.jsx(P,{onClick:()=>{f()},children:"Negotiate"})]})})]})},{type:"toggleRfqStatus",component:e.jsxs(v,{handleClose:()=>{i("toggleRfqStatus"),s()},open:!0,title:`${(o==null?void 0:o.status)==="approved"?"Approve":"Reject"} RFQ`,children:[e.jsx(v.Body,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("p",{className:"font-medium text-base mb-0",children:["Are you sure you want to ",(o==null?void 0:o.status)==="approved"?"approve":"reject"," this RFQ?"]}),e.jsx("textarea",{value:m,onChange:x=>a(x.target.value),className:"min-h-[80px] rounded-md border border-gray-500 p-2 text-[15px] resize-y focus:outline-none",placeholder:"Enter your comments here..."})]})}),e.jsx(v.Footer,{children:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(T,{onClick:()=>{i("toggleRfqStatus"),s()},children:"Cancel"}),e.jsx(P,{onClick:()=>{_()},children:"Confirm"})]})})]})}]})},Je=({clientId:r})=>{const i=z(),o=V(),{activeTypes:c,pop:h,push:t}=se(["rfqDetails","negotiateRfqStatus","toggleRfqStatus"]),[p,d]=u.useState(""),[m,a]=u.useState(10),[s,f]=u.useState(1),[_,x]=u.useState(null),{loading:N}=E(n=>n==null?void 0:n.auth),{rfqList:b,rfqTotalRecord:y,loading:A}=E(n=>n==null?void 0:n.rfq),w=u.useRef(null),[j,R]=u.useState("1"),F=!0,l=u.useCallback(async()=>{const n={};p&&(n.searchText=p),i(H({count:m,page:s,...n,isSubscription:!1,clientId:r}))},[p,m,s,i,r]),k=u.useCallback(async()=>{const n={};p&&(n.searchText=p),i(H({count:m,page:s,...n,isSubscription:F,clientId:r}))},[p,m,s,F,i,r]),S=u.useCallback(()=>{j==="1"?l():j==="2"&&k()},[j,l,k]);u.useEffect(()=>{S()},[S]);const J=n=>{w.current&&(j==="1"||j==="2")&&clearTimeout(w.current),w.current=setTimeout(()=>{f(1),d(n)},1e3),f(1)},q=(n,g,Q,M,I)=>{!n||!Q||(Q=="negotiate"?(t("negotiateRfqStatus"),x({id:n,status:Q,name:g,amount:M,comments:I})):(x({id:n,status:Q,name:g,amount:M,comments:I}),t("toggleRfqStatus")))},B=n=>{x(n),t("rfqDetails")},L=[{label:"RFQ ID",render:(n,g)=>e.jsxs(e.Fragment,{children:[j==="1"&&e.jsxs("div",{className:"serviceCodeWrapper",children:[e.jsx("div",{onClick:()=>B(n),children:n==null?void 0:n.id}),(n==null?void 0:n.is_corporate)&&e.jsx("span",{className:"isCorp",children:"C"})]}),j==="2"&&e.jsxs("div",{className:"serviceCodeWrapper",children:[e.jsx("div",{onClick:()=>B(g),children:g==null?void 0:g.id}),(g==null?void 0:g.is_corporate)&&e.jsx("span",{className:"isCorp",children:"C"})]})]})},{label:"RFQ Name",key:"rfq_name",dataIndex:"rfq_name",render:n=>ne(n)},{label:"Submittion Date",render:n=>e.jsx(e.Fragment,{children:O(n==null?void 0:n.created_at).format("YYYY-MM-DD")})},{label:"Submittion Time",render:n=>e.jsx(e.Fragment,{children:O(n==null?void 0:n.created_at).format("HH:mm:ss")})},{label:"Status",render:n=>e.jsx(e.Fragment,{children:(n==null?void 0:n.status)??"N/A"})},{label:"Total Amount",key:"total_amount",dataIndex:"total_amount"},{label:"Action",render:n=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"action-icons-sec-new",children:n!=null&&n.status?e.jsx("p",{className:`capitalize ${(n==null?void 0:n.status)==="approved"?"text-green-600":"text-red-500"}`,children:n==null?void 0:n.status}):e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[(n==null?void 0:n.status)!="rejected"&&e.jsx(T,{onClick:()=>{q(n==null?void 0:n.id,n==null?void 0:n.rfq_name,"approved")},className:"!border-green-600 !text-green-600",children:"Approve"}),e.jsx(T,{onClick:()=>{q(n==null?void 0:n.id,n==null?void 0:n.rfq_name,"negotiate",n==null?void 0:n.total_amount)},className:"!border-[#252b61",children:"Negotiate"}),e.jsx(T,{onClick:()=>{q(n==null?void 0:n.id,n==null?void 0:n.rfq_name,"rejected")},className:"!border-red-500 text-red-500",children:"Reject"})]})})})}];return e.jsx(e.Fragment,{children:e.jsxs(oe,{children:[e.jsxs("div",{className:"freshbag-wrapper px-2 py-2 sm:py-2 sm:px-3",children:[N&&e.jsx(ee,{}),e.jsxs("div",{className:"content getinTouchPage",children:[e.jsx("h2",{children:"RFQ"}),e.jsxs("div",{className:"create-new-institute-sec-content-all d-flex align-items-end justify-content-between",children:[e.jsx("div",{className:"student-fields-sec-content-all deltape-form w-50 d-flex flex-column",children:e.jsx("div",{className:"student-info-row w-100 ",children:e.jsx(re,{className:"h-10",onSearch:J})})}),e.jsx("div",{children:e.jsx(P,{className:"py-2",onClick:()=>o(`/rfq/rfqcreate?type=${j}`),children:"Request for Quote"})})]}),e.jsx("div",{className:"mt-4",children:e.jsx(K,{onChange:n=>{f(1),R(n),d("")},tabs:[{label:"Service Subscription",value:"1",children:e.jsx(e.Fragment,{children:e.jsx(Y,{columns:L,rfqList:b,isLoading:A,page:s,total:y,pageSize:m,onPageChange:(n,g)=>{f(n),a(g)}})})},{label:"Wellness Subscription",value:"2",children:e.jsx(Y,{pageSize:m,rfqList:b,columns:L,isLoading:A,page:s,total:y,onPageChange:(n,g)=>{f(n),a(g)}})}]})})]})]}),e.jsx(me,{activeTypes:c,pop:h,selectedRfq:_,activeTab:j,onRefresh:S})]})})};export{Je as default};
