import{d as O,u as A,h as F,r as f,bN as s,j as o,cE as P,c_ as U,c$ as _,cL as c,P as B,z as x,bj as $,br as T,g2 as W}from"./index-ChUmNm8R.js";import{u as C}from"./xlsx-BUW7exb-.js";const G=O.div`
  position: fixed;
  top: 30%;
  right: 4%;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 400px;
  font-family: inter;

  .download {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .download-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    h3 {
      font-size: 18px;
      letter-spacing: 0.02em;
      font-weight: 600;
      color: #000;
    }
  }

  .close-btn {
    background: none;
    border: none;
    cursor: pointer;
  }

  .options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    input {
      height: 20px;
      width: 20px;
    }

    label {
      font-size: 16px;
      font-weight: 500;
      color: #000;
    }
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .custom-date {
    display: flex;
    align-items: center;
    gap: 10px;
    input {
      height: 20px;
      width: 20px;
    }

    label {
      font-size: 16px;
      font-weight: 500;
      color: #000;
    }
  }

  .download-button {
    box-shadow: 2px 4px 19px rgba(0, 0, 0, 0.1);
    border-radius: 69px;
    background-color: #252b61;
    color: white;
    width: 50%;
    padding: 10px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    letter-spacing: 0.03em;
    font-weight: 500;
    color: #fff;
  }

  .or {
    p {
      margin-bottom: 0px;
      font-size: 14px;
      font-weight: 600;
      color: #000;
    }
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
  }

  .sort-by-radio {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 15px;

    p {
      margin-bottom: 0;
      font-size: 16px;
      font-weight: 600;
      color: #000;
    }

    label {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 16px;
      font-weight: 500;
      color: #000;
    }

    input[type="radio"] {
      height: 18px;
      width: 18px;
      cursor: pointer;
    }
  }

  @media (max-width: 675px) {
    right: 50%;
    left: 50%;
    transform: translate(-50%, 0);
  }
`,q=({closeForm:N,sectionType:Y})=>{var h,m,u,M,p,y,j,k;const E=A(),{linkableId:S}=F(),[t,i]=f.useState({name:"1 Week",duration:{startDate:()=>s().subtract(7,"days").format("YYYY-MM-DD"),endDate:()=>s().format("YYYY-MM-DD")}}),[b,D]=f.useState("scheduled"),[g,w]=f.useState(!1),z={bookings:{url:"/api/v1/booking/download-bookings",body:{filters:{from:"hr",clientId:S,dateRange:{from:(m=(h=t==null?void 0:t.duration)==null?void 0:h.startDate)==null?void 0:m.call(h),to:(M=(u=t==null?void 0:t.duration)==null?void 0:u.endDate)==null?void 0:M.call(u),dateType:b}}}},orders:{handleDownload:async()=>{var a,n,r;try{const d=await E(W({page:0,count:1e3,searchText:""}));if(d!=null&&d.error){x.error(((a=d==null?void 0:d.error)==null?void 0:a.message)||"Unknown Error Occured");return}return(r=(n=d.payload.data)==null?void 0:n.clientOrders)==null?void 0:r.map(e=>{var l;return{collection_1_date:e!=null&&e.collection_1_date?s(Number(e==null?void 0:e.collection_1_date)).format("YYYY-MM-DD"):"N/A",collection_1_slot:e!=null&&e.collection_1_slot?s(Number(e==null?void 0:e.collection_1_slot)).format("YYYY-MM-DD"):"N/A",final_amount:e==null?void 0:e.final_amount,id:e==null?void 0:e.id,invoice_date:e!=null&&e.invoice_date?s(Number(e==null?void 0:e.invoice_date)).format("YYYY-MM-DD"):"N/A",status:e==null?void 0:e.status,bookings_count:e==null?void 0:e.bookings_count,created_at:e!=null&&e.created_at?s(Number(e==null?void 0:e.created_at)).format("YYYY-MM-DD"):"N/A",clientId:(l=e==null?void 0:e.client)==null?void 0:l.id}})}catch{throw new Error("Failed to download file")}}}},R=[{name:"1 Week",duration:{startDate:()=>s().subtract(7,"days").format("YYYY-MM-DD"),endDate:()=>s().format("YYYY-MM-DD")}},{name:"2 Week",duration:{startDate:()=>s().subtract(14,"days").format("YYYY-MM-DD"),endDate:()=>s().format("YYYY-MM-DD")}},{name:"1 Month",duration:{startDate:()=>s().subtract(1,"months").format("YYYY-MM-DD"),endDate:()=>s().format("YYYY-MM-DD")}},{name:"3 Months",duration:{startDate:()=>s().subtract(3,"months").format("YYYY-MM-DD"),endDate:()=>s().format("YYYY-MM-DD")}},{name:"6 Months",duration:{startDate:()=>s().subtract(6,"months").format("YYYY-MM-DD"),endDate:()=>s().format("YYYY-MM-DD")}},{name:"9 Months",duration:{startDate:()=>s().subtract(9,"months").format("YYYY-MM-DD"),endDate:()=>s().format("YYYY-MM-DD")}}],v=a=>{const n=C.json_to_sheet(a),r=C.sheet_to_csv(n),d=new Blob([r],{type:"text/csv;charset=utf-8;"}),e=URL.createObjectURL(d),l=document.createElement("a");l.href=e,l.setAttribute("download","client_orders.csv"),document.body.appendChild(l),l.click(),document.body.removeChild(l)},L=a=>{i(n=>(n==null?void 0:n.name)===(a==null?void 0:a.name)?null:a)},I=async()=>{try{const a=z[Y];if(!a){x.error(`${Y} feature not implemented`);return}if(w(!0),"handleDownload"in a&&a.handleDownload){const n=await a.handleDownload();v(n);return}else if("url"in a&&"body"in a&&a.url&&a.body){const r=await(await fetch(`${$}${a.url}`,{method:"POST",body:JSON.stringify(a.body),headers:{Accept:"text/csv","Content-Type":"application/json",authorization:"Bearer "+T()}})).blob(),d=window.URL.createObjectURL(r),e=document.createElement("a");e.href=d,e.download="data.csv",document.body.appendChild(e),e.click(),document.body.removeChild(e),window.URL.revokeObjectURL(d)}else x.error(`${Y} feature not implemented`)}catch(a){x.error("Failed to download file"),console.error(a)}finally{w(!1)}};return console.log(t),o.jsx(G,{children:o.jsxs("div",{className:"download",children:[o.jsxs("div",{className:"download-header",children:[o.jsx("h3",{children:"Choose Duration"}),o.jsx("button",{className:"close-btn",disabled:g,onClick:N,children:o.jsx(P,{size:22})})]}),o.jsx("div",{className:"options",children:R.map(a=>o.jsxs("label",{className:"checkbox-label",children:[o.jsx("input",{type:"checkbox",checked:(t==null?void 0:t.name)===(a==null?void 0:a.name),onChange:()=>L(a)}),a==null?void 0:a.name]},a==null?void 0:a.name))}),o.jsx("div",{className:"or",children:o.jsx("p",{children:"OR"})}),o.jsx("div",{className:"custom-date",children:o.jsxs("label",{className:"checkbox-label",children:[o.jsx("input",{type:"checkbox",checked:(t==null?void 0:t.name)==="custom date",onChange:()=>i(a=>(a==null?void 0:a.name)==="custom date"?null:{name:"custom date",duration:{startDate:null,endDate:null}})}),"Customize Date"]})}),o.jsxs("div",{className:"sort-by-radio",children:[o.jsx("p",{children:"Sort by"}),o.jsxs("label",{children:[o.jsx("input",{type:"radio",value:"scheduled",checked:b==="scheduled",onChange:()=>D("scheduled")}),"Scheduled"]}),o.jsxs("label",{children:[o.jsx("input",{type:"radio",value:"created",checked:b==="created",onChange:()=>D("created")}),"Created"]})]}),(t==null?void 0:t.name)==="custom date"&&o.jsxs(U,{children:[o.jsx(_,{children:o.jsxs(c.Group,{controlId:"formBasicstartDate",children:[o.jsx(c.Label,{children:"Start Date"}),o.jsx(c.Control,{type:"date",onFocus:a=>{var r;const n=a.target;(r=n.showPicker)==null||r.call(n)},placeholder:"Start Date",max:s().format("YYYY-MM-DD"),onChange:a=>{const n=()=>s(a.target.value).format("YYYY-MM-DD");i(r=>r?{...r,duration:{...r.duration,startDate:n,endDate:r.duration.endDate&&r.duration.endDate()<n()?n:r.duration.endDate}}:null)}})]})}),o.jsx(_,{children:o.jsxs(c.Group,{controlId:"formBasicendDate",children:[o.jsx(c.Label,{children:"End Date"}),o.jsx(c.Control,{type:"date",placeholder:"End Date",onFocus:a=>{var r;const n=a.target;(r=n.showPicker)==null||r.call(n)},max:s().format("YYYY-MM-DD"),min:((y=(p=t==null?void 0:t.duration)==null?void 0:p.startDate)==null?void 0:y.call(p))||"",onChange:a=>{const n=()=>s(a.target.value).format("YYYY-MM-DD");i(r=>r?{...r,duration:{...r.duration,endDate:n}}:null)}})]})})]}),o.jsx(B,{onClick:I,disabled:!((j=t==null?void 0:t.duration)!=null&&j.startDate)||!((k=t==null?void 0:t.duration)!=null&&k.endDate)||g,children:"Download Excel"})]})})};export{q as D};
