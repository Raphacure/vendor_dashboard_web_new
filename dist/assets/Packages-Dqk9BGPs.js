import{r as d,em as _s,en as Me,j as e,eo as fs,ep as bs,eq as gs,er as ys,bP as Ae,aH as ve,d as Ce,u as ce,es as Ie,cL as n,dh as le,ea as De,et as js,cn as D,eu as Cs,ev as Ns,ew as ws,c_ as Y,c$ as T,ex as Ss,c as be,ey as Ts,ez as Ps,eA as Ms,eB as As,dy as fe,eC as vs,eD as Is,eE as Ls,cK as Es,aJ as k,h as Fs,i as zs,eF as $s}from"./index-ChUmNm8R.js";import{u as He,a as Be,U as Ue,T as Ke,C as We,L as qe,B as Ge,I as Xe,P as Je,E as Ye,S as Os}from"./ShareMessages-CDz8VSFD.js";import{g as Rs}from"./ProfileService-D5sxIXUd.js";import{C as we}from"./CustomModal-Ds0Ku9jR.js";import{S as J}from"./index-D9Bv3C6k.js";import{u as Hs}from"./useHasPermission-B8Y_MdsF.js";import{S as Bs}from"./index-v-CwiWzn.js";import{m as Le,S as Te,N as es,u as Us,A as Ks,a as Ws,c as qs,D as de}from"./Dropdown-fpMXnwtC.js";import{S as Gs}from"./share-2-CYz0Y7iS.js";import{c as Xs}from"./createLucideIcon-D1dtiQRH.js";import{M as Js}from"./mail-hThchRSe.js";import{C as Ys}from"./CommonSearchBox-hAv5GAZt.js";import{C as Qs}from"./CustomTable-BBwjbMSz.js";const ss=d.createContext(null);ss.displayName="CardHeaderContext";const ls=d.createContext(null),Zs=["as","active","eventKey"];function Vs(u,o){if(u==null)return{};var a={};for(var s in u)if({}.hasOwnProperty.call(u,s)){if(o.indexOf(s)>=0)continue;a[s]=u[s]}return a}function ts({key:u,onClick:o,active:a,id:s,role:g,disabled:M}){const m=d.useContext(Te),N=d.useContext(es),r=d.useContext(ls);let I=a;const b={role:g};if(N){!g&&N.role==="tablist"&&(b.role="tab");const i=N.getControllerId(u??null),h=N.getControlledId(u??null);b[Me("event-key")]=u,b.id=i||s,I=a==null&&u!=null?N.activeKey===u:a,(I||!(r!=null&&r.unmountOnExit)&&!(r!=null&&r.mountOnEnter))&&(b["aria-controls"]=h)}return b.role==="tab"&&(b["aria-selected"]=I,I||(b.tabIndex=-1),M&&(b.tabIndex=-1,b["aria-disabled"]=!0)),b.onClick=fs(i=>{M||(o==null||o(i),u!=null&&m&&!i.isPropagationStopped()&&m(u,i))}),[b,{isActive:I}]}const is=d.forwardRef((u,o)=>{let{as:a=_s,active:s,eventKey:g}=u,M=Vs(u,Zs);const[m,N]=ts(Object.assign({key:Le(g,M.href),active:s},M));return m[Me("active")]=N.isActive,e.jsx(a,Object.assign({},M,m,{ref:o}))});is.displayName="NavItem";const ks=["as","onSelect","activeKey","role","onKeyDown"];function Ds(u,o){if(u==null)return{};var a={};for(var s in u)if({}.hasOwnProperty.call(u,s)){if(o.indexOf(s)>=0)continue;a[s]=u[s]}return a}const Qe=()=>{},Ze=Me("event-key"),ns=d.forwardRef((u,o)=>{let{as:a="div",onSelect:s,activeKey:g,role:M,onKeyDown:m}=u,N=Ds(u,ks);const r=Us(),I=d.useRef(!1),b=d.useContext(Te),i=d.useContext(ls);let h,p;i&&(M=M||"tablist",g=i.activeKey,h=i.getControlledId,p=i.getControllerId);const A=d.useRef(null),z=B=>{const H=A.current;if(!H)return null;const U=ys(H,`[${Ze}]:not([aria-disabled=true])`),F=H.querySelector("[aria-selected=true]");if(!F||F!==document.activeElement)return null;const R=U.indexOf(F);if(R===-1)return null;let X=R+B;return X>=U.length&&(X=0),X<0&&(X=U.length-1),U[X]},t=(B,H)=>{B!=null&&(s==null||s(B,H),b==null||b(B,H))},E=B=>{if(m==null||m(B),!i)return;let H;switch(B.key){case"ArrowLeft":case"ArrowUp":H=z(-1);break;case"ArrowRight":case"ArrowDown":H=z(1);break;default:return}H&&(B.preventDefault(),t(H.dataset[gs("EventKey")]||null,B),I.current=!0,r())};d.useEffect(()=>{if(A.current&&I.current){const B=A.current.querySelector(`[${Ze}][aria-selected=true]`);B==null||B.focus()}I.current=!1});const q=bs(o,A);return e.jsx(Te.Provider,{value:t,children:e.jsx(es.Provider,{value:{role:M,activeKey:Le(g),getControlledId:h||Qe,getControllerId:p||Qe},children:e.jsx(a,Object.assign({},N,{onKeyDown:E,ref:q,role:M}))})})});ns.displayName="Nav";const el=Object.assign(ns,{Item:is}),as=d.forwardRef(({className:u,bsPrefix:o,as:a="div",...s},g)=>(o=Ae(o,"nav-item"),e.jsx(a,{ref:g,className:ve(u,o),...s})));as.displayName="NavItem";const cs=d.forwardRef(({bsPrefix:u,className:o,as:a=Ks,active:s,eventKey:g,disabled:M=!1,...m},N)=>{u=Ae(u,"nav-link");const[r,I]=ts({key:Le(g,m.href),active:s,disabled:M,...m});return e.jsx(a,{...m,...r,ref:N,disabled:M,className:ve(o,u,M&&"disabled",I.isActive&&"active")})});cs.displayName="NavLink";const os=d.forwardRef((u,o)=>{const{as:a="div",bsPrefix:s,variant:g,fill:M=!1,justify:m=!1,navbar:N,navbarScroll:r,className:I,activeKey:b,...i}=Ws(u,{activeKey:"onSelect"}),h=Ae(s,"nav");let p,A,z=!1;const t=d.useContext(qs),E=d.useContext(ss);return t?(p=t.bsPrefix,z=N??!0):E&&({cardHeaderBsPrefix:A}=E),e.jsx(el,{as:a,ref:o,activeKey:b,className:ve(I,{[h]:!z,[`${p}-nav`]:z,[`${p}-nav-scroll`]:z&&r,[`${A}-${g}`]:!!A,[`${h}-${g}`]:!!g,[`${h}-fill`]:M,[`${h}-justified`]:m}),...i})});os.displayName="Nav";const se=Object.assign(os,{Item:as,Link:cs});/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],ll=Xs("MessageSquare",sl),tl=Ce.div`
  .searchWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .filtersWrapper {
      gap: 1rem;
    }
  }
  .searchIcon {
    cursor: pointer;
    padding: 3px;
    border: 1px solid #e2e2e2;
    color: #000;
  }
  .addBtn {
    font-size: 1rem;
    font-weight: 600;
    padding: 12px 15px;
    border-radius: 8px;
    background: #262b61;
    color: #fff;
    cursor: pointer;
    text-wrap: nowrap;
  }
  .serviceCodeWrapper {
    display: flex;
    align-items: center;
    gap: 1rem;

    & > div {
      color: #0d6efd;
      cursor: pointer;
    }
  }
  .isCorp {
    background-color: rgb(21 63 211);
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    margin-left: 10px;
  }
  .testsSelect {
    min-width: 140px;
  }
`,il=Ce.div`
  .assign-tests-container {
    padding: 20px;
  }

  .tests-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
  }

  .tests-list {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    max-height: 400px;
    overflow-y: auto;
  }

  .test-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
  }

  .test-item:last-child {
    border-bottom: none;
  }

  .assign-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .assign-button {
    background-color: #4682b4;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .assign-button:hover {
    background-color: #5a9bd4;
  }

  .selected-tests-header {
    margin-top: 30px;
    text-align: left;
    font-size: 16px;
    font-weight: bold;
  }

  .error-message {
    text-align: left;
    font-size: 0.875em;
    color: #dc3545;
    margin-top: 5px;
  }

  .vendor-cards {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-top: 10px;
  }

  .vendor-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 200px;
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
  }

  .vendor-card-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }

  .vendor-card-item:last-child {
    border-bottom: none;
  }

  .action-buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 20px;
  }

  .action-button {
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .action-button.assign {
    background-color: #28a745;
    color: #fff;
    border: none;
  }

  .action-button.assign:hover {
    background-color: #218838;
  }

  .action-button.remove {
    background-color: #dc3545;
    color: #fff;
    border: none;
  }

  .action-button.remove:hover {
    background-color: #c82333;
  }

  .header {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .info-text {
    font-size: 14px;
    color: #6c757d;
  }
`,nl=({id:u,assignedTests:o,onSave:a,prevAssignedTest:s})=>{const[g,M]=d.useState([]),[m,N]=d.useState(Array.isArray(s)?s:[]);console.log(m,"selectedTests");const[r,I]=d.useState(20),b=ce(),i=d.useCallback(async t=>{b(Ie({count:r,page:0,searchText:t,type:"diagnostic"}))},[r]);d.useEffect(()=>{Array.isArray(o)&&M(o)},[o]);const h=t=>{const E=m.some(q=>q.service_code===t.service_code);N(E?m.filter(q=>q.service_code!==t.service_code):[...m,t])},p=t=>{N(m.filter(E=>E.service_code!==t))},A=async()=>{var q;const t={testIds:m.map(B=>B.service_code)},E=await b(js({id:u,payload:t}));if(E!=null&&E.error){D.error(((q=E==null?void 0:E.error)==null?void 0:q.message)||"Unknown Error Occured");return}else D.success("Tests saved Succesfully");a(t)},z=()=>{I(r+20),i()};return e.jsx(il,{children:e.jsxs("div",{className:"assign-tests-container",children:[e.jsxs("div",{className:"tests-section",children:[e.jsxs("div",{className:"available-tests",children:[e.jsx("h5",{children:"Available Tests"}),e.jsx("div",{className:"search-bar",children:e.jsx(n.Control,{type:"text",placeholder:"Search tests",onChange:t=>{const E=t.target.value.toLowerCase();i(E)}})}),e.jsx("div",{className:"tests-list mt-2",children:g.map(t=>e.jsxs("div",{className:"test-item",children:[e.jsx("input",{type:"checkbox",onChange:()=>h(t),checked:m.some(E=>E.service_code===t.service_code)}),e.jsx("span",{children:t.service_name})]},t.service_code))}),e.jsx(le,{className:"load-more mt-2",onClick:z,children:"Load More"})]}),e.jsxs("div",{className:"selected-tests",children:[e.jsxs("h5",{children:["Selected Tests - ",m.length]}),e.jsx("div",{className:"tests-list",children:m==null?void 0:m.map(t=>e.jsxs("div",{className:"test-item",children:[e.jsx("span",{children:t.service_name}),e.jsx(De,{className:"delete-icon",onClick:()=>p(t.service_code)})]},t.service_code))})]})]}),e.jsx("div",{className:"actions-btn-sec mt-2 d-flex justify-content-end",children:e.jsx(le,{className:"assign-button",onClick:A,children:"Save"})})]})})},Se=Ce.div`
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  h2 {
    margin-bottom: 1.5rem;
    color: #344767;
    font-size: 1.5rem;
  }

  .loading,
  .no-history {
    padding: 2rem;
    text-align: center;
    color: #64748b;
    font-style: italic;
  }

  .history-timeline {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .history-item {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    overflow: hidden;
  }

  .history-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: #f1f5f9;
    border-bottom: 1px solid #e2e8f0;
  }

  .timestamp {
    display: flex;
    align-items: center;
    color: #475569;
    font-weight: 500;

    i {
      margin-right: 0.5rem;
    }
  }

  .history-meta {
    font-size: 0.875rem;
    color: #64748b;
  }

  .changes-container {
    padding: 1rem 1.5rem 1.5rem;
  }

  .changes-count {
    color: #64748b;
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
  }

  .changes-table {
    width: 100%;
    border-collapse: collapse;

    th {
      text-align: left;
      padding: 0.75rem;
      border-bottom: 2px solid #e2e8f0;
      color: #475569;
      font-weight: 600;
      font-size: 0.875rem;
    }

    td {
      padding: 0.75rem;
      border-bottom: 1px solid #e2e8f0;
      vertical-align: top;
    }

    tr.even {
      background-color: #f8fafc;
    }

    tr:last-child td {
      border-bottom: none;
    }

    .field-name {
      font-weight: 500;
      color: #334155;
      white-space: nowrap;
      min-width: 120px;
    }

    .old-value {
      color: #94a3b8;
      position: relative;
      text-decoration: line-through;
      text-decoration-color: rgba(239, 68, 68, 0.4);
      text-decoration-thickness: 1px;
      max-width: 300px;
      word-break: break-word;
    }

    .new-value {
      color: #0f766e;
      font-weight: 500;
      max-width: 300px;
      word-break: break-word;
    }
  }

  @media (max-width: 768px) {
    .history-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .changes-table {
      font-size: 0.875rem;

      th {
        padding: 0.5rem;
      }

      td {
        padding: 0.5rem;
      }
    }
  }
`,al=({vendorId:u,section_name:o})=>{const[a,s]=d.useState([]),[g,M]=d.useState(!0),m=ce();d.useEffect(()=>{(async()=>{var p,A;if(!u)return;M(!0);const h=await m(Cs({id:u,section_name:o}));(A=(p=h==null?void 0:h.payload)==null?void 0:p.data)!=null&&A.history&&s(h.payload.data.history),M(!1)})()},[m,u]),d.useEffect(()=>{console.log("history : ",a)},[a,o]);const N=i=>new Date(i).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),r=(i,h)=>{const p=[],A=(z,t)=>{Object.keys(z).forEach(E=>{JSON.stringify(t[E])!==JSON.stringify(z[E])&&p.push({field:E,oldValue:t[E],newValue:z[E]})})};return Array.isArray(h)?h==null||h.map((z,t)=>{A(z,(i==null?void 0:i[t])??{})}):A(h,i),p},I=i=>i.split("_").map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" "),b=i=>i==null?"—":typeof i=="object"?JSON.stringify(i):String(i);return g?e.jsx(Se,{children:e.jsxs("div",{className:"loading",children:["Loading ",o," history..."]})}):a.length===0?e.jsx(Se,{children:e.jsxs("div",{className:"no-history",children:["No change history found for this ",o,"."]})}):(console.log(a,"history"),e.jsxs(Se,{children:[e.jsxs("h2",{className:"text-capitalize",children:[o," Change History"]}),e.jsx("div",{className:"history-timeline",children:a.map((i,h)=>{let p=null;return Array.isArray(i.updated_value)?p=r(i.original_value??[],i.updated_value??[]):p=r(i.original_value??{},i.updated_value??{}),e.jsxs("div",{className:"history-item",children:[e.jsxs("div",{className:"history-header",children:[e.jsxs("div",{className:"timestamp",children:[e.jsx("i",{className:"icon-calendar"})," ",N(i==null?void 0:i.created_at)]}),e.jsx("div",{className:"history-meta",children:e.jsxs("span",{className:"update-by",children:["Updated by User ID: ",i==null?void 0:i.updated_by]})})]}),e.jsxs("div",{className:"changes-container",children:[e.jsxs("div",{className:"changes-count",children:[p.length," ",p.length===1?"field":"fields"," ","changed"]}),e.jsxs("table",{className:"changes-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Field"}),e.jsx("th",{children:"Previous Value"}),e.jsx("th",{children:"New Value"})]})}),e.jsx("tbody",{children:p==null?void 0:p.map((A,z)=>e.jsxs("tr",{className:z%2===0?"even":"odd",children:[e.jsx("td",{className:"field-name",children:I(A==null?void 0:A.field)}),e.jsx("td",{className:"old-value",children:b(A==null?void 0:A.oldValue)}),e.jsx("td",{className:"new-value",children:b(A==null?void 0:A.newValue)})]},z))})]})]})]},i==null?void 0:i.id)})})]}))},cl=({id:u,section_name:o="test"})=>{const[a,s]=d.useState([]),[g,M]=d.useState(!1),m=ce(),N=d.useCallback(async()=>{var r,I,b,i,h;if(u){if(o==="test"){const p=await m(ws({id:u}));let A=(b=(I=(r=p==null?void 0:p.payload)==null?void 0:r.data)==null?void 0:I.test)==null?void 0:b.vendors;if(Array.isArray(A)){const z={};`${o==null?void 0:o.toLowerCase()}`,A.forEach(t=>{z[t==null?void 0:t.id]={name:t==null?void 0:t.name,id:t==null?void 0:t.id,sellingPrice:t==null?void 0:t.selling_price,buyingPrice:t==null?void 0:t.buying_price,mor_start_Time:t==null?void 0:t.mor_start_Time,mor_end_Time:t==null?void 0:t.mor_end_Time,mor_buying_price:t==null?void 0:t.mor_buying_price,mor_selling_price:t==null?void 0:t.mor_selling_price,mor_female_available:t==null?void 0:t.mor_female_available,mor_male_available:t==null?void 0:t.mor_male_available,aft_start_Time:t==null?void 0:t.aft_start_Time,aft_end_Time:t==null?void 0:t.aft_end_Time,aft_buying_price:t==null?void 0:t.aft_buying_price,aft_selling_price:t==null?void 0:t.aft_selling_price,aft_female_available:t==null?void 0:t.aft_female_available,aft_male_available:t==null?void 0:t.aft_male_available,eve_start_Time:t==null?void 0:t.eve_start_Time,eve_end_Time:t==null?void 0:t.eve_end_Time,eve_buying_price:t==null?void 0:t.eve_buying_price,eve_selling_price:t==null?void 0:t.eve_selling_price,eve_female_available:t==null?void 0:t.eve_female_available,eve_male_available:t==null?void 0:t.eve_male_available,vendor_test_code:(t==null?void 0:t.vendor_test_code)||""}}),s(z)}}else if(o==="package"){let p=await m(Ns(u)),A=(h=(i=p==null?void 0:p.payload)==null?void 0:i.data)==null?void 0:h.data;if(Array.isArray(A)){const z={};A.forEach(t=>{var E,q,B,H,U,F,R;z[t==null?void 0:t.vendor_id]={name:(E=t==null?void 0:t.vendor)==null?void 0:E.name,id:t==null?void 0:t.vendor_id,sellingPrice:Number(t==null?void 0:t.selling_price)??0,buyingPrice:Number(t==null?void 0:t.buying_price)??0,mor_start_Time:t==null?void 0:t.mor_start_Time,mor_end_Time:t==null?void 0:t.mor_end_Time,mor_buying_price:Number(t==null?void 0:t.mor_buying_price)??0,mor_selling_price:Number(t==null?void 0:t.mor_selling_price)??0,mor_female_available:((q=t==null?void 0:t.mor_female_available)==null?void 0:q.toString())=="true",mor_male_available:((B=t==null?void 0:t.mor_male_available)==null?void 0:B.toString())=="true",aft_start_Time:t==null?void 0:t.aft_start_Time,aft_end_Time:t==null?void 0:t.aft_end_Time,aft_buying_price:Number(t==null?void 0:t.aft_buying_price)??0,aft_selling_price:Number(t==null?void 0:t.aft_selling_price)??0,aft_female_available:((H=t==null?void 0:t.aft_female_available)==null?void 0:H.toString())=="true",aft_male_available:((U=t==null?void 0:t.aft_male_available)==null?void 0:U.toString())=="true",eve_start_Time:t==null?void 0:t.eve_start_Time,eve_end_Time:t==null?void 0:t.eve_end_Time,eve_buying_price:Number(t==null?void 0:t.eve_buying_price)??0,eve_selling_price:Number(t==null?void 0:t.eve_selling_price)??0,eve_female_available:((F=t==null?void 0:t.eve_female_available)==null?void 0:F.toString())=="true",eve_male_available:((R=t==null?void 0:t.eve_male_available)==null?void 0:R.toString())=="true",vendor_package_code:(t==null?void 0:t.vendor_package_code)||""}}),s(z)}}}},[m,u,o]);return d.useEffect(()=>{(async()=>{await N()})()},[m,N]),{assignedVendors:a,setAssignedVendors:s,isBulkUpdate:g,setIsBulkUpdate:M}},ol=Ce.div`
padding: 1rem;
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
    border-color: red;
  }
  .delta-select {
    width: 100%;
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
    text-transform: uppercase;
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
    height: 100%;
    min-height: 38px;
    max-height: 40px;
  }
  .select-filter > * {
    text-transform: capitalize;
  }

  .image-preview-medicine {
    // min-width: 200px;
    // max-width: 200px;
    width: 100%;
    // min-height: 200px;
    // max-height: 200px;
  }

  .selctor-row {
    display: grid;
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

  .model {
    padding: 1rem !important;
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

  .top-sec-header-sec{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  }
`,rl=({onSubmit:u,section_name:o,totalSelectedVendors:a})=>{const s=`vendor_${o==null?void 0:o.toLowerCase()}_code`,[g,M]=d.useState(""),[m,N]=d.useState({mor_start_Time:!1,mor_end_Time:!1,mor_buying_price:!1,mor_selling_price:!1,mor_female_available:!1,mor_male_available:!1,aft_start_Time:!1,aft_end_Time:!1,aft_buying_price:!1,aft_selling_price:!1,aft_female_available:!1,aft_male_available:!1,eve_start_Time:!1,eve_end_Time:!1,eve_buying_price:!1,eve_selling_price:!1,eve_female_available:!1,eve_male_available:!1}),[r,I]=d.useState({mor_start_Time:"",mor_end_Time:"",mor_buying_price:0,mor_selling_price:0,mor_female_available:!1,mor_male_available:!1,aft_start_Time:"",aft_end_Time:"",aft_buying_price:0,aft_selling_price:0,aft_female_available:!1,aft_male_available:!1,eve_start_Time:"",eve_end_Time:"",eve_buying_price:0,eve_selling_price:0,eve_female_available:!1,eve_male_available:!1}),b=(i,h)=>{I({...r,[i]:h})};return e.jsx("div",{children:e.jsxs("div",{className:"vendorCard2",children:[e.jsxs("div",{className:"w-100 d-flex justify-content-center align-items-center",children:[e.jsx("div",{className:"mr-2",children:a}),e.jsx(n.Control,{className:"vendorsCode",name:s??"",value:g,placeholder:`Enter vendor ${o==null?void 0:o.toLowerCase()} code.`,onChange:i=>{var h;M((h=i==null?void 0:i.target)==null?void 0:h.value)}})]}),e.jsxs("div",{className:"formDiv",children:[e.jsxs(Y,{className:"m-0 row-gap",children:[e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Start Time"}),e.jsx(J,{value:r==null?void 0:r.mor_start_Time,placeholder:"Select time",onChange:i=>{console.log(i),b("mor_start_Time",i)},options:ge,className:"delta-select select"}),(m==null?void 0:m.mor_start_Time)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.mor_start_Time})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"End Time"}),e.jsx(J,{value:r==null?void 0:r.mor_end_Time,placeholder:"Select time",onChange:i=>b("mor_end_Time",i),options:ge,className:"delta-select select"}),(m==null?void 0:m.mor_end_Time)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.mor_end_Time})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Buying P."}),e.jsx(n.Control,{type:"number",name:"mor_buying_price",min:"0",required:!0,value:r==null?void 0:r.mor_buying_price,onChange:i=>{var h;return b("mor_buying_price",(h=i==null?void 0:i.target)==null?void 0:h.value)}}),(m==null?void 0:m.mor_start_Time)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.mor_start_Time})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Selling P."}),e.jsx(n.Control,{type:"number",name:"mor_selling_price",min:"0",required:!0,value:r==null?void 0:r.mor_selling_price,onChange:i=>{var h,p;return b((h=i==null?void 0:i.target)==null?void 0:h.name,(p=i==null?void 0:i.target)==null?void 0:p.value)}}),(m==null?void 0:m.mor_selling_price)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.mor_selling_price})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Female"}),e.jsx(n.Check,{type:"switch",label:"",name:"mor_female_available",onChange:i=>{var h,p;return b((h=i==null?void 0:i.target)==null?void 0:h.name,(p=i==null?void 0:i.target)==null?void 0:p.checked)},checked:r==null?void 0:r.mor_female_available,id:"mor_female_available-"})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Male"}),e.jsx(n.Check,{type:"switch",label:"",name:"mor_male_available",onChange:i=>{var h,p;return b((h=i==null?void 0:i.target)==null?void 0:h.name,(p=i==null?void 0:i.target)==null?void 0:p.checked)},checked:r==null?void 0:r.mor_male_available,id:"mor_male_available-"})]})]}),e.jsxs(Y,{className:"m-0 me-3  row-gap",children:[e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Start Time"}),e.jsx(J,{value:r==null?void 0:r.aft_start_Time,placeholder:"Select time",onChange:i=>b("aft_start_Time",i),options:ye,className:"delta-select select"}),(m==null?void 0:m.aft_start_Time)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.aft_start_Time})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"End Time"}),e.jsx(J,{value:r==null?void 0:r.aft_end_Time,placeholder:"Select time",onChange:i=>b("aft_end_Time",i),options:ye,className:"delta-select select"}),(m==null?void 0:m.aft_end_Time)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.aft_end_Time})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Buying P."}),e.jsx(n.Control,{type:"number",name:"aft_buying_price",min:"0",required:!0,value:r==null?void 0:r.aft_buying_price,onChange:i=>{var h,p;return b((h=i==null?void 0:i.target)==null?void 0:h.name,(p=i==null?void 0:i.target)==null?void 0:p.value)}}),(m==null?void 0:m.aft_buying_price)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.aft_buying_price})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Selling P."}),e.jsx(n.Control,{type:"number",name:"aft_selling_price",min:"0",required:!0,value:r==null?void 0:r.aft_selling_price,onChange:i=>{var h,p;return b((h=i==null?void 0:i.target)==null?void 0:h.name,(p=i==null?void 0:i.target)==null?void 0:p.value)}}),(m==null?void 0:m.aft_selling_price)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.aft_selling_price})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Female"}),e.jsx(n.Check,{type:"switch",label:"",name:"aft_female_available",onChange:i=>{var h,p;return b((h=i==null?void 0:i.target)==null?void 0:h.name,(p=i==null?void 0:i.target)==null?void 0:p.checked)},checked:r==null?void 0:r.aft_female_available,id:"aft_female_available-"})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Male"}),e.jsx(n.Check,{type:"switch",label:"",name:"aft_male_available",onChange:i=>{var h,p;return b((h=i==null?void 0:i.target)==null?void 0:h.name,(p=i==null?void 0:i.target)==null?void 0:p.checked)},checked:r==null?void 0:r.aft_male_available,id:"aft_male_available-"})]})]}),e.jsxs(Y,{className:"m-0 me-3  row-gap",children:[e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Start Time"}),e.jsx(J,{value:r==null?void 0:r.eve_start_Time,placeholder:"Select time",onChange:i=>b("eve_start_Time",i),options:je,className:"delta-select select"}),(m==null?void 0:m.eve_start_Time)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.eve_start_Time})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"End Time"}),e.jsx(J,{value:r==null?void 0:r.eve_end_Time,placeholder:"Select time",onChange:i=>b("eve_end_Time",i),options:je,className:"delta-select select"}),(m==null?void 0:m.eve_end_Time)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.eve_end_Time})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Buying P."}),e.jsx(n.Control,{type:"number",name:"eve_buying_price",min:"0",required:!0,value:r==null?void 0:r.eve_buying_price,onChange:i=>{var h,p;return b((h=i==null?void 0:i.target)==null?void 0:h.name,(p=i==null?void 0:i.target)==null?void 0:p.value)}}),(m==null?void 0:m.eve_buying_price)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.eve_buying_price})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Selling P."}),e.jsx(n.Control,{type:"number",name:"eve_selling_price",min:"0",required:!0,value:r==null?void 0:r.eve_selling_price,onChange:i=>{var h,p;return b((h=i==null?void 0:i.target)==null?void 0:h.name,(p=i==null?void 0:i.target)==null?void 0:p.value)}}),(m==null?void 0:m.eve_selling_price)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.eve_selling_price})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Female"}),e.jsx(n.Check,{type:"switch",label:"",name:"eve_female_available",onChange:i=>{var h,p;return b((h=i==null?void 0:i.target)==null?void 0:h.name,(p=i==null?void 0:i.target)==null?void 0:p.checked)},checked:r==null?void 0:r.eve_female_available,id:"eve_female_available-"})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Male"}),e.jsx(n.Check,{type:"switch",label:"",name:"eve_male_available",onChange:i=>{var h,p;return b((h=i==null?void 0:i.target)==null?void 0:h.name,(p=i==null?void 0:i.target)==null?void 0:p.checked)},checked:r==null?void 0:r.eve_male_available,id:"eve_male_available-"})]})]})]}),e.jsx(le,{className:"w-100",onClick:()=>u({...r,[s]:g}),variant:"primary",children:"Save"})]})})},ge=[{label:"12:00 AM",value:"12:00 AM"},{label:"12:30 AM",value:"12:30 AM"},{label:"1:00 AM",value:"1:00 AM"},{label:"1:30 AM",value:"1:30 AM"},{label:"2:00 AM",value:"2:00 AM"},{label:"2:30 AM",value:"2:30 AM"},{label:"3:00 AM",value:"3:00 AM"},{label:"3:30 AM",value:"3:30 AM"},{label:"4:00 AM",value:"4:00 AM"},{label:"4:30 AM",value:"4:30 AM"},{label:"5:00 AM",value:"5:00 AM"},{label:"5:30 AM",value:"5:30 AM"},{label:"6:00 AM",value:"6:00 AM"},{label:"6:30 AM",value:"6:30 AM"},{label:"7:00 AM",value:"7:00 AM"},{label:"7:30 AM",value:"7:30 AM"},{label:"8:00 AM",value:"8:00 AM"},{label:"8:30 AM",value:"8:30 AM"},{label:"9:00 AM",value:"9:00 AM"},{label:"9:30 AM",value:"9:30 AM"},{label:"10:00 AM",value:"10:00 AM"},{label:"10:30 AM",value:"10:30 AM"},{label:"11:00 AM",value:"11:00 AM"},{label:"11:30 AM",value:"11:30 AM"}],ye=[{label:"12:00 PM",value:"12:00 PM"},{label:"12:30 PM",value:"12:30 PM"},{label:"1:00 PM",value:"1:00 PM"},{label:"1:30 PM",value:"1:30 PM"},{label:"2:00 PM",value:"2:00 PM"},{label:"2:30 PM",value:"2:30 PM"},{label:"3:00 PM",value:"3:00 PM"},{label:"3:30 PM",value:"3:30 PM"},{label:"4:00 PM",value:"4:00 PM"},{label:"4:30 PM",value:"4:30 PM"},{label:"5:00 PM",value:"5:00 PM"},{label:"5:30 PM",value:"5:30 PM"}],je=[{label:"6:00 PM",value:"6:00 PM"},{label:"6:30 PM",value:"6:30 PM"},{label:"7:00 PM",value:"7:00 PM"},{label:"7:30 PM",value:"7:30 PM"},{label:"8:00 PM",value:"8:00 PM"},{label:"8:30 PM",value:"8:30 PM"},{label:"9:00 PM",value:"9:00 PM"},{label:"9:30 PM",value:"9:30 PM"},{label:"10:00 PM",value:"10:00 PM"},{label:"10:30 PM",value:"10:30 PM"},{label:"11:00 PM",value:"11:00 PM"},{label:"11:30 PM",value:"11:30 PM"}],f={mor_start_Time:"Please Select Morning Start Time",mor_end_Time:"Please Select Morning End Time",mor_buying_price:"Please Select Morning Buying Price",mor_selling_price:"Please Select S P",aft_start_Time:"Please Select Afternoon Start Time",aft_end_Time:"Please Select Afternoon Start Time",aft_buying_price:"Please Select Afternoon Start Time",aft_selling_price:"Please Select Afternoon Start Time",eve_start_Time:"Please Select Evening Start Time",eve_end_Time:"Please Select Evening Start Time",eve_buying_price:"Please Select Evening Start Time",eve_selling_price:"Please Select Evening Start Time"},ml=({assignedVendors:u,setAssignedVendors:o,onSuccess:a,isBulkUpdate:s,setIsBulkUpdate:g,id:M,sectionName:m})=>{var ue,ae,_e;const N=ce(),r=500,[I,b]=d.useState(""),[i,h]=d.useState({label:"All city",value:"all"}),[p,A]=d.useState(null),[z,t]=d.useState(""),[E,q]=d.useState(""),[B,H]=d.useState(!1),[U,F]=d.useState(0),[R,X]=d.useState([]),[te,ie]=d.useState(!1),{isAllowed:V}=Hs(),ee=`vendor_${m==null?void 0:m.toLowerCase()}_code`,w=async l=>{b(l),F(0)};d.useEffect(()=>{N(Ss({count:r,searchText:I,page:U,activeStatus:"active",type:p=="all"?null:p}))},[N,I,p,U]);const j=[{label:"all",value:"all"},{label:"Pharmacy",value:"pharmacy"},{label:"Hospital",value:"hospital"},{label:"Clinic",value:"clinic"},{label:"Diagnostic Center",value:"diagnostic_center"},{label:"Dental Care",value:"dental_care"},{label:"Eye Care",value:"eye_care"},{label:"Lab Test",value:"lab_test"},{label:"Radiology",value:"radiology"},{label:"Ayurveda",value:"ayurveda"},{label:"Ambulance",value:"ambulance"},{label:"Blood Bank",value:"blood_bank"},{label:"Fitness",value:"fitness"},{label:"Mental Wellness",value:"mental_wellness"}],[y,Q]=d.useState(f),v=(l,$,c)=>{o(C=>({...C,[c]:{...C==null?void 0:C[c],[l]:$}})),F(0)},{vendorList:L,loading:Z}=be(l=>l==null?void 0:l.medicines),oe=d.useMemo(()=>{var $,c;const l=new Set;if(Array.isArray(L==null?void 0:L.vendors)){($=L==null?void 0:L.vendors)==null||$.map(P=>{l.add(P==null?void 0:P.city)});const C=(c=Array.from(l))==null?void 0:c.map(P=>({label:P,value:P}));return[{label:"All Cities",value:"all"},...C]}return[]},[L]),[ne,pe]=d.useState(""),xe=(l,$)=>{if(s)X(c=>c.includes(l)?c.filter(C=>C!=l):[...c,l]);else if(u!=null&&u[l]){let c={...u};c==null||delete c[l],o(c)}else o({...u,[l]:$})},re=l=>{h(l==="all"?{label:"All city",value:"all"}:l),F(0)},me=l=>{const $={...u};delete $[l],o($)},he=async l=>{var c,C,P;if(console.log({...l,vendorsBulkUpdateIds:R}),(R==null?void 0:R.length)==0){D.error("Please select vendor");return}let $=null;if(m=="PACKAGE"?$=await N(Ts({id:M,payload:{data:l,vendorIds:R}})):$=await N(Ps({id:M,payload:{data:l,vendorIds:R}})),(c=$==null?void 0:$.payload)!=null&&c.success)g==null||g(!1),X([]),b(""),a==null||a(),D.success("Bulk update completed successfully");else{const Ne=((C=$==null?void 0:$.payload)==null?void 0:C.message)||((P=$==null?void 0:$.error)==null?void 0:P.message)||"An error occurred during bulk update";D.error(Ne)}};return e.jsxs(ol,{children:[e.jsxs("div",{className:" text-capitalize",children:[e.jsx(n.Group,{className:"delta-signup-md",controlId:"vendorName",children:e.jsx(n.Control,{type:"text",name:"vendorName",placeholder:"Search vendor by name",value:I??"",onChange:l=>{var $;return w(($=l==null?void 0:l.target)==null?void 0:$.value)},autoFocus:!0})}),e.jsxs("div",{className:"action-div2",children:[e.jsxs(n.Group,{className:"delta-signup-md selector-info-row",controlId:"email",children:[e.jsx(n.Label,{children:" Select City"}),e.jsx(J,{showSearch:!0,value:i,placeholder:"Select city",onChange:re,options:oe??[],dropdownStyle:{textTransform:"capitalize"},className:"delta-select select-filter text-capitalize"})]}),e.jsxs(n.Group,{className:"delta-signup-md selector-info-row",controlId:"email",children:[e.jsx(n.Label,{children:" Select Section Name"}),e.jsx(J,{value:p,placeholder:"Select Category",onChange:l=>{A(l),F(0)},options:j??[],className:"delta-select select-filter"})]})]})]}),e.jsxs("div",{className:"mt-2 d-flex jsutify-content-start align-items-center",children:[e.jsxs("div",{children:["Bulk Update",e.jsx(Bs,{className:"ml-2 ",checked:s,onChange:l=>{g==null||g(l)}})]}),s&&e.jsxs("div",{className:"ml-3",children:["Select All",e.jsx("input",{checked:(R==null?void 0:R.length)>0,onClick:l=>{var $,c,C;console.log(($=l==null?void 0:l.target)==null?void 0:$.value),(c=l==null?void 0:l.target)!=null&&c.checked?X((C=L==null?void 0:L.vendors)==null?void 0:C.map(P=>P==null?void 0:P.id)):X([])},className:"ml-1",type:"checkbox",name:"",id:""})]})]}),e.jsxs("div",{className:"vendorCardsParent",children:[e.jsx("div",{className:"container box1",children:e.jsxs("div",{className:"vendorCardDiv",children:[e.jsxs("div",{children:["Available Vendors: (",(L==null?void 0:L.vendorCount)??0,")"]}),Z?e.jsx(e.Fragment,{children:"Loading..."}):(ue=L==null?void 0:L.vendors)==null?void 0:ue.map((l,$)=>i&&(i==null?void 0:i.value)==="all"||(l==null?void 0:l.city)==i?e.jsxs("div",{className:"vendorCard1",children:[e.jsx("input",{type:"checkbox",onChange:()=>xe(l==null?void 0:l.id,l),name:"",checked:s?R==null?void 0:R.includes(l==null?void 0:l.id):!!(u!=null&&u[l==null?void 0:l.id]),id:(l==null?void 0:l.id)??$}),l==null?void 0:l.name," - ",l==null?void 0:l.city]},l==null?void 0:l.id):e.jsx(e.Fragment,{})),(L==null?void 0:L.vendorCount)>U*r&&e.jsx(le,{className:"load-more",onClick:()=>{F(U+1)},children:"Load More"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"vendorCardDiv",children:[s?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"font-size-1",children:["Selected Vendors: (",R==null?void 0:R.length,")"]}),e.jsx(rl,{totalSelectedVendors:R==null?void 0:R.length,section_name:m,onSubmit:he})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flex flex-row justify-content-between align-items-end selectedVendorController",children:[e.jsxs("div",{className:"selectedvendorsTitleBox",children:[e.jsxs("div",{className:"font-size-1",children:["Selected Vendors: (",(ae=Object.values(u))==null?void 0:ae.length,")"]}),e.jsx(n.Control,{placeholder:"Search vendor",value:ne,onChange:l=>{var $;pe(($=l==null?void 0:l.target)==null?void 0:$.value)}})]}),V("reset-assign-vendor")?e.jsx(le,{onClick:()=>o({}),children:"Reset Selection"}):e.jsx(e.Fragment,{})]}),(_e=Object.values(u))==null?void 0:_e.map(l=>{const $=new RegExp(ne,"i");return ne&&!($.test(l==null?void 0:l.name)||$.test(l==null?void 0:l.city))?e.jsx(e.Fragment,{}):e.jsxs("div",{className:"vendorCard2",children:[e.jsxs("div",{className:"action-div space-between",children:[e.jsxs("div",{className:"w-100 d-flex justify-content-center align-items-center",children:[e.jsxs("div",{className:"mr-2",children:[l==null?void 0:l.name," ",l==null?void 0:l.city]}),e.jsx(n.Control,{className:"vendorsCode",name:ee,value:l==null?void 0:l[ee],placeholder:`Enter vendor ${m==null?void 0:m.toLowerCase()} code.`,onChange:c=>{var C;v(ee,((C=c==null?void 0:c.target)==null?void 0:C.value)??"",l==null?void 0:l.id)}})]}),e.jsx(De,{className:"icon",onClick:()=>me(l==null?void 0:l.id)})]}),e.jsxs("div",{className:"formDiv",children:[e.jsxs(Y,{className:"m-0 row-gap",children:[e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Start Time"}),e.jsx(J,{value:l==null?void 0:l.mor_start_Time,placeholder:"Select time",onChange:c=>{console.log(c),v("mor_start_Time",c,l==null?void 0:l.id)},options:ge,className:"delta-select select"}),(y==null?void 0:y.mor_start_Time)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.mor_start_Time})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"End Time"}),e.jsx(J,{value:l==null?void 0:l.mor_end_Time,placeholder:"Select time",onChange:c=>v("mor_end_Time",c,l==null?void 0:l.id),options:ge,className:"delta-select select"}),(y==null?void 0:y.mor_end_Time)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.mor_end_Time})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Buying P."}),e.jsx(n.Control,{type:"number",name:"mor_buying_price",min:"0",required:!0,value:(l==null?void 0:l.mor_buying_price)||0,onChange:c=>{var C;return v("mor_buying_price",(C=c==null?void 0:c.target)==null?void 0:C.value,l==null?void 0:l.id)}}),(y==null?void 0:y.mor_start_Time)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.mor_start_Time})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Selling P."}),e.jsx(n.Control,{type:"number",name:"mor_selling_price",min:"0",required:!0,value:(l==null?void 0:l.mor_selling_price)||0,onChange:c=>{var C,P;return v((C=c==null?void 0:c.target)==null?void 0:C.name,(P=c==null?void 0:c.target)==null?void 0:P.value,l==null?void 0:l.id)}}),(y==null?void 0:y.mor_selling_price)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.mor_selling_price})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Female"}),e.jsx(n.Check,{type:"switch",label:"",name:"mor_female_available",onChange:c=>{var C,P;return v((C=c==null?void 0:c.target)==null?void 0:C.name,(P=c==null?void 0:c.target)==null?void 0:P.checked,l==null?void 0:l.id)},checked:l==null?void 0:l.mor_female_available,id:`mor_female_available-${l==null?void 0:l.id}`})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Male"}),e.jsx(n.Check,{type:"switch",label:"",name:"mor_male_available",onChange:c=>{var C,P;return v((C=c==null?void 0:c.target)==null?void 0:C.name,(P=c==null?void 0:c.target)==null?void 0:P.checked,l==null?void 0:l.id)},checked:l==null?void 0:l.mor_male_available,id:`mor_male_available-${l==null?void 0:l.id}`})]})]}),e.jsxs(Y,{className:"m-0 me-3  row-gap",children:[e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Start Time"}),e.jsx(J,{value:l==null?void 0:l.aft_start_Time,placeholder:"Select time",onChange:c=>v("aft_start_Time",c,l==null?void 0:l.id),options:ye,className:"delta-select select"}),(y==null?void 0:y.aft_start_Time)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.aft_start_Time})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"End Time"}),e.jsx(J,{value:l==null?void 0:l.aft_end_Time,placeholder:"Select time",onChange:c=>v("aft_end_Time",c,l==null?void 0:l.id),options:ye,className:"delta-select select"}),(y==null?void 0:y.aft_end_Time)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.aft_end_Time})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Buying P."}),e.jsx(n.Control,{type:"number",name:"aft_buying_price",min:"0",required:!0,value:(l==null?void 0:l.aft_buying_price)||0,onChange:c=>{var C,P;return v((C=c==null?void 0:c.target)==null?void 0:C.name,(P=c==null?void 0:c.target)==null?void 0:P.value,l==null?void 0:l.id)}}),(y==null?void 0:y.aft_buying_price)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.aft_buying_price})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Selling P."}),e.jsx(n.Control,{type:"number",name:"aft_selling_price",min:"0",required:!0,value:(l==null?void 0:l.aft_selling_price)||0,onChange:c=>{var C,P;return v((C=c==null?void 0:c.target)==null?void 0:C.name,(P=c==null?void 0:c.target)==null?void 0:P.value,l==null?void 0:l.id)}}),(y==null?void 0:y.aft_selling_price)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.aft_selling_price})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Female"}),e.jsx(n.Check,{type:"switch",label:"",name:"aft_female_available",onChange:c=>{var C,P;return v((C=c==null?void 0:c.target)==null?void 0:C.name,(P=c==null?void 0:c.target)==null?void 0:P.checked,l==null?void 0:l.id)},checked:l==null?void 0:l.aft_female_available,id:`aft_female_available-${l==null?void 0:l.id}`})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Male"}),e.jsx(n.Check,{type:"switch",label:"",name:"aft_male_available",onChange:c=>{var C,P;return v((C=c==null?void 0:c.target)==null?void 0:C.name,(P=c==null?void 0:c.target)==null?void 0:P.checked,l==null?void 0:l.id)},checked:l==null?void 0:l.aft_male_available,id:`aft_male_available-${l==null?void 0:l.id}`})]})]}),e.jsxs(Y,{className:"m-0 me-3  row-gap",children:[e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Start Time"}),e.jsx(J,{value:l==null?void 0:l.eve_start_Time,placeholder:"Select time",onChange:c=>v("eve_start_Time",c,l==null?void 0:l.id),options:je,className:"delta-select select"}),(y==null?void 0:y.eve_start_Time)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.eve_start_Time})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"End Time"}),e.jsx(J,{value:l==null?void 0:l.eve_end_Time,placeholder:"Select time",onChange:c=>v("eve_end_Time",c,l==null?void 0:l.id),options:je,className:"delta-select select"}),(y==null?void 0:y.eve_end_Time)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.eve_end_Time})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Buying P."}),e.jsx(n.Control,{type:"number",name:"eve_buying_price",min:"0",required:!0,value:(l==null?void 0:l.eve_buying_price)||0,onChange:c=>{var C,P;return v((C=c==null?void 0:c.target)==null?void 0:C.name,(P=c==null?void 0:c.target)==null?void 0:P.value,l==null?void 0:l.id)}}),(y==null?void 0:y.eve_buying_price)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.eve_buying_price})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Selling P."}),e.jsx(n.Control,{type:"number",name:"eve_selling_price",min:"0",required:!0,value:(l==null?void 0:l.eve_selling_price)||0,onChange:c=>{var C,P;return v((C=c==null?void 0:c.target)==null?void 0:C.name,(P=c==null?void 0:c.target)==null?void 0:P.value,l==null?void 0:l.id)}}),(y==null?void 0:y.eve_selling_price)&&e.jsx(n.Control.Feedback,{type:"invalid",children:f==null?void 0:f.eve_selling_price})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Female"}),e.jsx(n.Check,{type:"switch",label:"",name:"eve_female_available",onChange:c=>{var C,P;return v((C=c==null?void 0:c.target)==null?void 0:C.name,(P=c==null?void 0:c.target)==null?void 0:P.checked,l==null?void 0:l.id)},checked:l==null?void 0:l.eve_female_available,id:`eve_female_available-${l==null?void 0:l.id}`})]}),e.jsxs(T,{className:"p-0",children:[e.jsx(n.Label,{children:"Male"}),e.jsx(n.Check,{type:"switch",label:"",name:"eve_male_available",onChange:c=>{var C,P;return v((C=c==null?void 0:c.target)==null?void 0:C.name,(P=c==null?void 0:c.target)==null?void 0:P.checked,l==null?void 0:l.id)},checked:l==null?void 0:l.eve_male_available,id:`eve_male_available-${l==null?void 0:l.id}`})]})]})]}),e.jsx("div",{className:"action-div2"})]},l==null?void 0:l.id)})]}),z&&e.jsx("div",{className:"error-message",children:z})]})})]}),e.jsxs(we,{open:B,title:E,handleClose:()=>{H(!1),a()},children:[e.jsx(we.Body,{children:e.jsx("div",{className:"text-center p-4",children:e.jsx("p",{children:E})})}),e.jsx(we.Footer,{children:e.jsx(le,{className:"btn btn-primary w-100",onClick:()=>{H(!1),a()},children:"Ok"})})]})]})},hl=({showModal:u,handleClose:o,editModal:a=!1,packageData:s={},section_name:g,client_id:M,onSuccess:m})=>{var Ee,Fe,ze,$e,Oe,Re;const[N,r]=d.useState("service"),[I,b]=d.useState(((Ee=s==null?void 0:s.price)==null?void 0:Ee.actual_cost)||0),[i,h]=d.useState(((Fe=s==null?void 0:s.price)==null?void 0:Fe.discount_percentage)||0),[p,A]=d.useState(s!=null&&s.display_order?s==null?void 0:s.display_order:null),[z,t]=d.useState(0),[E,q]=d.useState((s==null?void 0:s.image)||""),[B,H]=d.useState((s==null?void 0:s.is_corporate)||!1),[U,F]=d.useState((s==null?void 0:s.reports_within)??""),[R,X]=d.useState((s==null?void 0:s.fasting)||!1),[te,ie]=d.useState(!1),[V,ee]=d.useState(s!=null&&s.clients?{label:($e=(ze=s==null?void 0:s.clients)==null?void 0:ze[0])==null?void 0:$e.name,value:(Re=(Oe=s==null?void 0:s.clients)==null?void 0:Oe[0])==null?void 0:Re.id}:null),[w,j]=d.useState((s==null?void 0:s.description)||""),[y,Q]=d.useState((s==null?void 0:s.preperation)||""),v=ce(),{clients:L,tests:Z}=be(_=>_.package);d.useEffect(()=>{var _,S,O,G;ee(s!=null&&s.clients?{label:(S=(_=s==null?void 0:s.clients)==null?void 0:_[0])==null?void 0:S.name,value:(G=(O=s==null?void 0:s.clients)==null?void 0:O[0])==null?void 0:G.id}:null)},[s==null?void 0:s.clients]);const{categoriesList:oe}=be(_=>_==null?void 0:_.medicines),[ne,pe]=d.useState([]),[xe,re]=d.useState(Array.isArray(s==null?void 0:s.image)?s==null?void 0:s.image:[]),[me,he]=d.useState((s==null?void 0:s.isCompanyPaid)||!1),[ue,ae]=d.useState((s==null?void 0:s.dependents)||0);d.useEffect(()=>{var G,x;re(Array.isArray(s==null?void 0:s.image)?s==null?void 0:s.image:[]),j((s==null?void 0:s.description)||""),Q((s==null?void 0:s.preperation)||""),X((s==null?void 0:s.fasting)||!1);const _=((G=s==null?void 0:s.price)==null?void 0:G.actual_cost)||0,S=((x=s==null?void 0:s.price)==null?void 0:x.discount_percentage)||0,O=_-_*(S/100);pe(s==null?void 0:s.category_ids),t(O.toFixed(2)),b(_),h(S),H((s==null?void 0:s.is_corporate)||!1),he((s==null?void 0:s.isCompanyPaid)||!1),ae((s==null?void 0:s.dependents)||0),F((s==null?void 0:s.reports_within)||"")},[s]),d.useEffect(()=>{const _=I-I*(i/100);t(_.toFixed(2))},[I,i]),d.useEffect(()=>{v(Ms({section_name:"packages",count:100}))},[v]),d.useEffect(()=>{u&&v(As()),_e()},[u,v]);const _e=async()=>{v(Ie({count:20,page:0,searchText:"",type:"diagnostic"}))};d.useEffect(()=>{var _,S;a&&(b(((_=s==null?void 0:s.price)==null?void 0:_.actual_cost)||0),h(((S=s==null?void 0:s.price)==null?void 0:S.discount_percentage)||0),q((s==null?void 0:s.image)||""),H((s==null?void 0:s.is_corporate)||!1),X((s==null?void 0:s.fasting)||!1),j((s==null?void 0:s.description)||""),Q((s==null?void 0:s.preperation)||""),he((s==null?void 0:s.isCompanyPaid)||!1),ae((s==null?void 0:s.dependents)||0))},[s,a]);const[l,$]=d.useState(!1),{assignedVendors:c,setAssignedVendors:C}=cl({id:s==null?void 0:s.service_code,section_name:"package"}),P=async()=>{console.log("id : ",s==null?void 0:s.service_code),o()},Ne=async _=>{var S;try{const O={id:`${Date.now()}`,ext:".png"},x=(S=(await v(Rs(O))).payload)==null?void 0:S.signedUrL;return await Es.put(x.signedUrL,_,{headers:{"Content-Type":"image/png"}}),x.publicUrl}catch(O){throw console.error("Error uploading image to S3:",O),O}},ms=async _=>{const S=_.target.files;if(S.length>0)try{const O=Array.from(S).map(x=>Ne(x)),G=await Promise.all(O);re(x=>[...x,...G])}catch{D.error("Error uploading images. Please try again.")}},K=He({extensions:[Be,Ue,Ke,We,qe,Ge,Xe,Je.configure({placeholder:"Enter preparation details..."})],content:y,onUpdate:({editor:_})=>{const S=_.getHTML();Q(S)}}),W=He({extensions:[Be,Ue,Ke,We,qe,Ge,Xe,Je.configure({placeholder:"Enter package description..."})],content:w,onUpdate:({editor:_})=>{const S=_.getHTML();j(S)}});d.useEffect(()=>{K&&y!==K.getHTML()&&K.commands.setContent(y||"")},[y,K]),d.useEffect(()=>{W&&w!==W.getHTML()&&W.commands.setContent(w||"")},[w,W]);const hs=_=>{_.preventDefault();const S=_.currentTarget;if(S.checkValidity()===!1){_.stopPropagation(),ie(!0);return}const O={package:{service_name:S.serviceName.value,preperation:y,description:w,cost:Number(S.cost.value)||0,discount_percentage:Number(S.discountPercentage.value)||0,visit_type:S.visitType.value,is_corporate:B,client_id:B?V==null?void 0:V.value:null,fasting:R,image:xe,display_order:p==null?void 0:p.value,category_ids:ne,reports_within:U}};g==="CLIENT"&&(O.package.is_dependent=me,O.package.no_of_dependents=ue,O.package.is_corporate=!0,a||(O.package.client_id=M)),a?ds(O):us(O)},us=async _=>{var O;const S=await v(Ls(_));S!=null&&S.error?D.error(((O=S==null?void 0:S.error)==null?void 0:O.message)||"Unknown Error Occurred"):(D.success("Package Added Successfully"),m(),o())},ds=async _=>{var x;const S={..._},O={id:s==null?void 0:s.service_code,payload:S},G=await v(Is(O));if(G!=null&&G.error){D.error(((x=G==null?void 0:G.error)==null?void 0:x.message)||"Unknown Error Occurred");return}else D.success("Package Updated Successfully"),m();o()},ps=async()=>{var O,G;const _=(O=Object.values(c))==null?void 0:O.map(x=>({mor_start_Time:x==null?void 0:x.mor_start_Time,mor_end_Time:x==null?void 0:x.mor_end_Time,mor_buying_price:Number((x==null?void 0:x.mor_buying_price)||0),mor_selling_price:Number((x==null?void 0:x.mor_selling_price)||0),mor_female_available:!!(x!=null&&x.mor_female_available),mor_male_available:!!(x!=null&&x.mor_male_available),aft_start_Time:x==null?void 0:x.aft_start_Time,aft_end_Time:x==null?void 0:x.aft_end_Time,aft_buying_price:Number((x==null?void 0:x.aft_buying_price)||0),aft_selling_price:Number((x==null?void 0:x.aft_selling_price)||0),aft_female_available:!!(x!=null&&x.aft_female_available),aft_male_available:!!(x!=null&&x.aft_male_available),eve_start_Time:x==null?void 0:x.eve_start_Time,eve_end_Time:x==null?void 0:x.eve_end_Time,eve_buying_price:Number((x==null?void 0:x.eve_buying_price)||0),eve_selling_price:Number((x==null?void 0:x.eve_selling_price)||0),eve_female_available:!!(x!=null&&x.eve_female_available),eve_male_available:!!(x!=null&&x.eve_male_available),id:Number(x==null?void 0:x.id),vendor_package_code:x==null?void 0:x.vendor_package_code})),S=await v(vs({id:s==null?void 0:s.service_code,payload:{vendors:_}}));if(S!=null&&S.error){D.error(((G=S==null?void 0:S.error)==null?void 0:G.message)||"Unknown Error Occurred");return}else D.success("Vendor Assigned To Package Successfully");return o(),S},xs=_=>{A(_)};return e.jsxs(fe,{size:"xl",show:u,onHide:o,centered:!0,backdrop:"static",children:[e.jsx(fe.Header,{closeButton:!0,children:e.jsx(fe.Title,{children:a?"Edit Package":"Create Package"})}),e.jsxs(fe.Body,{children:[e.jsxs(se,{variant:"tabs",activeKey:N,onSelect:_=>r(_||"service"),className:"mb-4",children:[e.jsx(se.Item,{children:e.jsx(se.Link,{eventKey:"service",children:"Service"})}),a&&e.jsxs(e.Fragment,{children:[e.jsx(se.Item,{children:e.jsx(se.Link,{eventKey:"addTests",children:"Add Tests"})}),e.jsx(se.Item,{children:e.jsx(se.Link,{eventKey:"assignVendors",children:"Assign Vendors"})})]}),e.jsx(se.Item,{children:e.jsx(se.Link,{eventKey:"history",children:"History"})})]}),N==="service"&&e.jsx("div",{className:"serviceTab",children:e.jsxs(n,{noValidate:!0,validated:te,onSubmit:hs,children:[e.jsxs(Y,{className:"mb-3",children:[g!=="CLIENT"&&e.jsx(T,{xs:6,children:e.jsx(n.Group,{controlId:"corporateSwitch",children:e.jsx(n.Check,{type:"switch",label:"Corporate Package",onChange:_=>{H(_.target.checked)},checked:B,id:"corporateSwitch"})})}),e.jsx(T,{xs:6,children:e.jsx(n.Group,{controlId:"fastingSwitch",children:e.jsx(n.Check,{type:"switch",label:"Requires Fasting",onChange:_=>X(_.target.checked),checked:R,id:"fastingSwitch"})})}),g==="CLIENT"&&e.jsx(T,{xs:6,children:e.jsx(n.Group,{controlId:"p",children:e.jsx(n.Check,{type:"switch",label:"Is Dependent",onChange:_=>he(_.target.checked),checked:me,id:"companyPaidSwitch"})})}),B&&e.jsx(T,{xs:12,children:e.jsxs(n.Group,{controlId:"client",children:[e.jsx(n.Label,{children:"Select Client"}),e.jsx(J,{options:L==null?void 0:L.map(_=>({value:_.id,label:_.name})),onChange:_=>{var S;return ee(L!=null&&L.find(O=>O.id===_)?{label:(S=L==null?void 0:L.find(O=>O.id===_))==null?void 0:S.name,value:_}:null)},value:V==null?void 0:V.value,allowClear:!0,placeholder:"Select a client",style:{width:"100%"}})]})})]}),me&&e.jsx(Y,{className:"mb-3",children:e.jsx(T,{xs:12,children:e.jsxs(n.Group,{controlId:"dependents",children:[e.jsx(n.Label,{children:"No Of Dependents"}),e.jsx(n.Control,{type:"number",name:"dependents",min:"0",placeholder:"Enter number of dependents",value:ue,onChange:_=>ae(Number(_.target.value)||0)})]})})}),e.jsxs(Y,{className:"mb-3",children:[e.jsx(T,{xs:12,md:6,children:e.jsxs(n.Group,{controlId:"serviceName",children:[e.jsx(n.Label,{children:"Service Name"}),e.jsx(n.Control,{type:"text",name:"serviceName",placeholder:"Enter service name",required:!0,defaultValue:(s==null?void 0:s.service_name)||""})]})}),e.jsx(T,{xs:12,md:6,children:e.jsxs(n.Group,{controlId:"visitType",children:[e.jsx(n.Label,{children:"Visit Type"}),e.jsxs(n.Control,{as:"select",name:"visitType",required:!0,defaultValue:(s==null?void 0:s.visit_type)||"",children:[e.jsx("option",{value:"",children:"Select visit type"}),e.jsx("option",{value:"home",children:"Home"}),e.jsx("option",{value:"center",children:"Center"}),e.jsx("option",{value:"onsite",children:"Onsite"})]})]})})]}),e.jsxs(Y,{className:"mb-2",children:[e.jsx(T,{xs:6,children:e.jsxs(n.Group,{controlId:"cost",children:[e.jsx(n.Label,{children:"Cost"}),e.jsx(n.Control,{type:"number",name:"cost",min:"0",required:!0,value:I,onChange:_=>b(Number(_.target.value)||0)})]})}),e.jsx(T,{xs:6,children:e.jsxs(n.Group,{controlId:"discountPercentage",children:[e.jsx(n.Label,{children:"Discount Percentage"}),e.jsx(n.Control,{type:"number",name:"discountPercentage",min:"0",max:"100",required:!0,value:i,onChange:_=>h(Number(_.target.value)||0)})]})})]}),e.jsx(Y,{className:"mb-2",children:e.jsx(T,{xs:12,children:e.jsxs("p",{className:"mb-1",children:[e.jsx("strong",{children:"Final Price:"})," ₹",z]})})}),e.jsx(Y,{className:"mb-3",children:e.jsx(T,{xs:12,children:e.jsxs(n.Group,{controlId:"categories",children:[e.jsx(n.Label,{children:"Select Categories"}),e.jsx(J,{value:ne,mode:"multiple",options:oe==null?void 0:oe.map(_=>({value:_.id,label:_.name})),onChange:_=>{pe(_)},placeholder:"Select categories",style:{width:"100%"},allowClear:!0})]})})}),e.jsxs(Y,{className:"mb-3",children:[e.jsx(T,{children:e.jsxs(n.Group,{controlId:"name",children:[e.jsx(n.Label,{children:"Display Order"}),e.jsx("div",{className:"delta-select-column",children:e.jsx(J,{value:p==null?void 0:p.value,placeholder:"Select Display Order",onChange:_=>xs({label:_,value:_}),options:[{label:1,value:1},{label:2,value:2},{label:3,value:3},{label:4,value:4},{label:5,value:5},{label:6,value:6},{label:7,value:7},{label:8,value:8},{label:9,value:9},{label:10,value:10}],className:"delta-select",style:{width:"100%"}})})]})}),e.jsx(T,{children:e.jsxs(n.Group,{controlId:"name",children:[e.jsx(n.Label,{children:"Reports With In"}),e.jsx("div",{className:"delta-select-column",children:e.jsx(n.Control,{name:"reports_within",value:U,onChange:_=>{var S;F(((S=_==null?void 0:_.target)==null?void 0:S.value)??"")},placeholder:"Enter reports within"})})]})})]}),e.jsxs(Y,{className:"mb-3",children:[e.jsx(T,{xs:12,children:e.jsxs(n.Group,{controlId:"preparation",children:[e.jsx(n.Label,{children:"Preparation"}),e.jsxs("div",{className:"tiptap-editor-container",children:[e.jsxs("div",{className:"tiptap-toolbar",children:[e.jsx("button",{onClick:()=>K==null?void 0:K.chain().focus().toggleBold().run(),className:K!=null&&K.isActive("bold")?"is-active":"",type:"button",children:"Bold"}),e.jsx("button",{onClick:()=>K==null?void 0:K.chain().focus().toggleItalic().run(),className:K!=null&&K.isActive("italic")?"is-active":"",type:"button",children:"Italic"}),e.jsx("button",{onClick:()=>K==null?void 0:K.chain().focus().toggleUnderline().run(),className:K!=null&&K.isActive("underline")?"is-active":"",type:"button",children:"Underline"})]}),e.jsx(Ye,{editor:K})]})]})}),e.jsx(T,{xs:12,children:e.jsxs(n.Group,{controlId:"description",children:[e.jsx(n.Label,{children:"Description"}),e.jsxs("div",{className:"tiptap-editor-container",children:[e.jsxs("div",{className:"tiptap-toolbar",children:[e.jsx("button",{onClick:()=>W==null?void 0:W.chain().focus().toggleBold().run(),className:W!=null&&W.isActive("bold")?"is-active":"",type:"button",children:"Bold"}),e.jsx("button",{onClick:()=>W==null?void 0:W.chain().focus().toggleItalic().run(),className:W!=null&&W.isActive("italic")?"is-active":"",type:"button",children:"Italic"}),e.jsx("button",{onClick:()=>W==null?void 0:W.chain().focus().toggleUnderline().run(),className:W!=null&&W.isActive("underline")?"is-active":"",type:"button",children:"Underline"})]}),e.jsx(Ye,{editor:W})]})]})})]}),e.jsx(Y,{className:"mb-3",children:e.jsxs("div",{className:"d-flex flex-col align-items-center m-auto",children:[e.jsxs(n.Group,{controlId:"media",children:[e.jsx(n.Label,{children:"Upload Images"}),e.jsx(n.Control,{type:"file",accept:"image/png",onChange:ms,multiple:!0})]}),e.jsx("div",{className:"d-flex flex-wrap gap-2 mt-3",children:xe.map((_,S)=>e.jsxs("div",{style:{position:"relative",width:"150px",height:"150px"},children:[e.jsx("img",{src:_,alt:`Uploaded ${S+1}`,style:{width:"100%",height:"100%",objectFit:"cover"}}),e.jsx(le,{variant:"danger",size:"sm",style:{position:"absolute",top:"5px",right:"5px",padding:"0px 6px",minWidth:"20px",minHeight:"20px",borderRadius:"50%",zIndex:2},onClick:()=>re(O=>O.filter((G,x)=>x!==S)),children:"×"})]},S))})]})}),e.jsx(le,{variant:"primary",type:"submit",children:a?"Update Data":"Save"})]})}),N==="addTests"&&e.jsx(nl,{id:s==null?void 0:s.service_code,assignedTests:Z,prevAssignedTest:s==null?void 0:s.tests,onSave:o,type:"package"}),N==="history"&&e.jsx(al,{vendorId:s==null?void 0:s.service_code,section_name:"package"}),N==="assignVendors"&&e.jsxs("div",{className:"",children:[e.jsx(ml,{isBulkUpdate:l,setIsBulkUpdate:$,sectionName:"PACKAGE",onSuccess:P,id:s==null?void 0:s.service_code,assignedVendors:c,onClose:()=>{},setAssignedVendors:C}),l?e.jsx(e.Fragment,{}):e.jsx("div",{className:"px-3 d-flex justify-content-end",children:e.jsx(le,{variant:"primary",type:"button",className:"mt-3 w-25",onClick:ps,children:"Save"})})]})]})]})};function Pe(){return Pe=Object.assign?Object.assign.bind():function(u){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(u[s]=a[s])}return u},Pe.apply(this,arguments)}var ul=k.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},k.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),dl=k.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},k.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function Ve(u){if(u.length===7)return u;for(var o="#",a=1;a<4;a+=1)o+=u[a]+u[a];return o}function ke(u,o,a,s,g){return(function(M,m,N,r,I){var b=(M-N)/(m-N);if(b===0)return r;if(b===1)return I;for(var i="#",h=1;h<6;h+=2){var p=parseInt(r.substr(h,2),16),A=parseInt(I.substr(h,2),16),z=Math.round((1-b)*p+b*A).toString(16);z.length===1&&(z="0"+z),i+=z}return i})(u,o,a,Ve(s),Ve(g))}var rs=(function(u){function o(a){u.call(this,a);var s=a.height,g=a.width,M=a.checked;this.t=a.handleDiameter||s-2,this.i=Math.max(g-s,g-(s+this.t)/2),this.o=Math.max(0,(s-this.t)/2),this.state={h:M?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.k=this.k.bind(this),this.m=this.m.bind(this),this.M=this.M.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this),this.W=this.W.bind(this)}return u&&(o.__proto__=u),(o.prototype=Object.create(u&&u.prototype)).constructor=o,o.prototype.componentDidMount=function(){this.I=!0},o.prototype.componentDidUpdate=function(a){a.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},o.prototype.componentWillUnmount=function(){this.I=!1},o.prototype.H=function(a){this.R.focus(),this.setState({j:a,B:!0,L:Date.now()})},o.prototype.N=function(a){var s=this.state,g=s.j,M=s.h,m=(this.props.checked?this.i:this.o)+a-g;s.U||a===g||this.setState({U:!0});var N=Math.min(this.i,Math.max(this.o,m));N!==M&&this.setState({h:N})},o.prototype.A=function(a){var s=this.state,g=s.h,M=s.U,m=s.L,N=this.props.checked,r=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var I=Date.now()-m;(!M||I<250||N&&g<=r||!N&&g>=r)&&this.X(a),this.I&&this.setState({U:!1,B:!1}),this.l=Date.now()},o.prototype.p=function(a){a.preventDefault(),typeof a.button=="number"&&a.button!==0||(this.H(a.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.k))},o.prototype.v=function(a){a.preventDefault(),this.N(a.clientX)},o.prototype.k=function(a){this.A(a),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.k)},o.prototype.m=function(a){this.F=null,this.H(a.touches[0].clientX)},o.prototype.M=function(a){this.N(a.touches[0].clientX)},o.prototype.T=function(a){a.preventDefault(),this.A(a)},o.prototype.C=function(a){Date.now()-this.l>50&&(this.X(a),Date.now()-this.u>50&&this.I&&this.setState({B:!1}))},o.prototype.D=function(){this.u=Date.now()},o.prototype.O=function(){this.setState({B:!0})},o.prototype.S=function(){this.setState({B:!1})},o.prototype.W=function(a){this.R=a},o.prototype.$=function(a){a.preventDefault(),this.R.focus(),this.X(a),this.I&&this.setState({B:!1})},o.prototype.X=function(a){var s=this.props;(0,s.onChange)(!s.checked,a,s.id)},o.prototype.render=function(){var a=this.props,s=a.checked,g=a.disabled,M=a.className,m=a.offColor,N=a.onColor,r=a.offHandleColor,I=a.onHandleColor,b=a.checkedIcon,i=a.uncheckedIcon,h=a.checkedHandleIcon,p=a.uncheckedHandleIcon,A=a.boxShadow,z=a.activeBoxShadow,t=a.height,E=a.width,q=a.borderRadius,B=(function(y,Q){var v={};for(var L in y)Object.prototype.hasOwnProperty.call(y,L)&&Q.indexOf(L)===-1&&(v[L]=y[L]);return v})(a,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),H=this.state,U=H.h,F=H.U,R=H.B,X={position:"relative",display:"inline-block",textAlign:"left",opacity:g?.5:1,direction:"ltr",borderRadius:t/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},te={height:t,width:E,margin:Math.max(0,(this.t-t)/2),position:"relative",background:ke(U,this.i,this.o,m,N),borderRadius:typeof q=="number"?q:t/2,cursor:g?"default":"pointer",WebkitTransition:F?null:"background 0.25s",MozTransition:F?null:"background 0.25s",transition:F?null:"background 0.25s"},ie={height:t,width:Math.min(1.5*t,E-(this.t+t)/2+1),position:"relative",opacity:(U-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:F?null:"opacity 0.25s",MozTransition:F?null:"opacity 0.25s",transition:F?null:"opacity 0.25s"},V={height:t,width:Math.min(1.5*t,E-(this.t+t)/2+1),position:"absolute",opacity:1-(U-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:F?null:"opacity 0.25s",MozTransition:F?null:"opacity 0.25s",transition:F?null:"opacity 0.25s"},ee={height:this.t,width:this.t,background:ke(U,this.i,this.o,r,I),display:"inline-block",cursor:g?"default":"pointer",borderRadius:typeof q=="number"?q-1:"50%",position:"absolute",transform:"translateX("+U+"px)",top:Math.max(0,(t-this.t)/2),outline:0,boxShadow:R?z:A,border:0,WebkitTransition:F?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:F?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:F?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},w={height:this.t,width:this.t,opacity:Math.max(2*(1-(U-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:F?null:"opacity 0.25s",MozTransition:F?null:"opacity 0.25s",transition:F?null:"opacity 0.25s"},j={height:this.t,width:this.t,opacity:Math.max(2*((U-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:F?null:"opacity 0.25s",MozTransition:F?null:"opacity 0.25s",transition:F?null:"opacity 0.25s"};return k.createElement("div",{className:M,style:X},k.createElement("div",{className:"react-switch-bg",style:te,onClick:g?null:this.$,onMouseDown:function(y){return y.preventDefault()}},b&&k.createElement("div",{style:ie},b),i&&k.createElement("div",{style:V},i)),k.createElement("div",{className:"react-switch-handle",style:ee,onClick:function(y){return y.preventDefault()},onMouseDown:g?null:this.p,onTouchStart:g?null:this.m,onTouchMove:g?null:this.M,onTouchEnd:g?null:this.T,onTouchCancel:g?null:this.S},p&&k.createElement("div",{style:w},p),h&&k.createElement("div",{style:j},h)),k.createElement("input",Pe({},{type:"checkbox",role:"switch","aria-checked":s,checked:s,disabled:g,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},B,{ref:this.W,onFocus:this.O,onBlur:this.S,onKeyUp:this.D,onChange:this.C})))},o})(d.Component);rs.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:ul,checkedIcon:dl,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56};const pl=({sectionName:u,data:o})=>{var g,M,m,N;const a={PACKAGES:`🩺 Health Checkup Package Available! 

        🔹 Package Name: ${(o==null?void 0:o.service_name)??"-"}
        📋 Includes Tests: ${((M=(g=o==null?void 0:o.tests)==null?void 0:g.map(r=>r==null?void 0:r.service_name))==null?void 0:M.join(", "))??"-"}
        💰 Price: ₹${((m=o==null?void 0:o.price)==null?void 0:m.actual_cost)??""}
        🎉 Discounted Price: ₹${((N=o==null?void 0:o.price)==null?void 0:N.discounted_price)??"-"}
        🚑 Visit Type: ${(o==null?void 0:o.visit_type)??"-"}`},s=(r,I)=>{const b=window.location.href,i=`${(a==null?void 0:a[u])??""}:

${b}`;switch(r){case"whatsapp":window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(i)}`,"_blank");break;case"email":window.open(`mailto:?subject=Appointment Details&body=${encodeURIComponent(i)}`,"_self");break}};return e.jsxs(de,{children:[e.jsx(de.Toggle,{as:"div",id:"dropdown-custom-components",className:"cursor-pointer",children:e.jsx(Gs,{size:20})}),e.jsxs(de.Menu,{children:[e.jsxs(de.Item,{onClick:()=>s("whatsapp"),children:[e.jsx(ll,{size:16,className:"me-2"})," WhatsApp"]}),e.jsxs(de.Item,{onClick:()=>s("email"),children:[e.jsx(Js,{size:16,className:"me-2"})," Email"]})]})]})},Ml=({section_name:u="PACKAGE",parentId:o})=>{var ee;const a=ce(),{packages:s,tests:g}=be(w=>w.package),{linkableId:M}=Fs(),[m,N]=d.useState(1),[r,I]=d.useState(10),[b,i]=d.useState(0),[h,p]=d.useState(""),[A,z]=d.useState(!1),[t,E]=d.useState(!1),[q,B]=d.useState(null),[H,U]=d.useState("all"),F=d.useCallback(async(w,j,y="",Q)=>{const v={filters:{count:j,page:w,searchText:y,status:"active",clientId:M}};u==="CLIENT"&&(v.filters.clientId=o),Q!==!1&&(v.filters.status=Q),await a(zs(v))},[a,o,u]),R=async()=>{a(Ie({count:20,page:0,searchText:"",type:"diagnostic"}))};d.useEffect(()=>{R()},[a]),console.log(H),d.useEffect(()=>{F(m,r,h,H==="all"?!1:H)},[m,r,h,H,F]),d.useEffect(()=>{var w,j;(w=s==null?void 0:s.pagination)!=null&&w.total&&i((j=s==null?void 0:s.pagination)==null?void 0:j.total),console.log("packages : ",s)},[s]);const X=w=>{p(w),N(1)},te=[{label:"Image",dataIndex:"image",key:"image",render:w=>w?e.jsx("img",{src:(w==null?void 0:w.length)>0?w[0]:w,alt:"Package",style:{width:50,height:50,objectFit:"cover"}}):e.jsx($s,{size:27})},{label:"Code",dataIndex:"service_code",key:"service_code",render:(w,j)=>e.jsxs("div",{className:"serviceCodeWrapper",children:[e.jsx("div",{children:w}),j.is_corporate&&e.jsx("span",{className:"isCorp",children:"C"})]})},{label:"Package Name",dataIndex:"service_name",key:"service_name"},{label:"Price",dataIndex:"price",key:"price",render:w=>w!=null&&w.actual_cost?`₹${(w==null?void 0:w.actual_cost)||0}`:"N/A"},{label:"Discount (%)",dataIndex:"price",key:"discount_percentage",render:w=>`${(w==null?void 0:w.discount_percentage)||0}%`},...u==="CLIENT"?[{label:"Company Paid",key:"companyPaid",children:[{title:"Employee",dataIndex:"is_dependent",key:"employeePaid",render:(w,j)=>e.jsx(rs,{onChange:y=>{console.log("e : ",y),console.log("record : ",j)},checked:w})},{label:"Dependents",dataIndex:"no_of_dependents",key:"dependentsPaid",render:w=>e.jsx("div",{children:w||"N/A"})}]},{label:"Cash",key:"clientSpecificField1",render:(w,j)=>{var L;const y=(j==null?void 0:j.no_of_dependents)||0,Q=((L=j==null?void 0:j.price)==null?void 0:L.actual_cost)||0,v=y*Q;return e.jsx("div",{children:v?`₹${v}`:"N/A"})}}]:[],{key:"actions",label:"Actions",dataIndex:"active",render:(w,j)=>{var y,Q,v,L;return e.jsxs("div",{className:"d-flex justify-content-center align-items-center gap-[10px]",children:[e.jsx("span",{className:"mr-1",children:e.jsx(pl,{sectionName:"PACKAGES",data:j})}),e.jsx("span",{className:"mr-1",children:e.jsx(Os,{data:{isKeyValuedData:!0,type:"TEXT",data:{Code:j==null?void 0:j.service_code,"Package Name":j==null?void 0:j.service_name,Corporate:j!=null&&j.is_corporate?"✅":"❌",Type:j==null?void 0:j.type,"Visit Type":j==null?void 0:j.visit_tpe,"Is Dependent":j!=null&&j.is_dependent?"✅":"❌","No. Of Dependents":j==null?void 0:j.no_of_dependents,Tests:(Q=(y=j==null?void 0:j.tests)==null?void 0:y.map(Z=>`${Z==null?void 0:Z.service_name} (${Z==null?void 0:Z.service_code})`))==null?void 0:Q.join(", "),Clients:(L=(v=j==null?void 0:j.clients)==null?void 0:v.map(Z=>`${Z==null?void 0:Z.name}`))==null?void 0:L.join(", ")}},replacePath:!1,tooltipTitle:"Share"})})]})}}],ie=((ee=s==null?void 0:s.data)==null?void 0:ee.map((w,j)=>({key:j,...w,...u==="CLIENT"&&{clientSpecificField1:"Custom Data 1",clientSpecificField2:"Custom Data 2",employeePaid:w.employeePaid||"N/A",dependentsPaid:w.dependentsPaid||"N/A"}})))||[],V=(w,j)=>{N(w),j&&I(j)};return e.jsxs(tl,{children:[e.jsx("div",{className:"searchWrapper",children:e.jsx("div",{className:"d-flex gap-2 flex-row align-items-center my-2 filtersWrapper",children:e.jsx(Ys,{onSearch:X,placeHolder:"Search by package name or code",searchText:h})})}),e.jsx(Qs,{data:ie,columns:te,showingName:"",isLoading:!1,onPageChange:V,page:m,pageSize:r,pagination:!0,total:b}),e.jsx(hl,{showModal:t,handleClose:()=>E(!1),editModal:A,client_id:o,onSuccess:F,section_name:u,packageData:q})]})};export{Ml as P,rs as a};
