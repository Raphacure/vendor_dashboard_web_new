import{d as k,u,h as x,c as I,aJ as r,r as s,cW as b,z as y,cl as P,j as i}from"./index-ChUmNm8R.js";import{C as h}from"./CustomTable-BBwjbMSz.js";import"./CustomSpinLoader-CrgQ8bNq.js";import"./CustomPagination-BfzEq6pA.js";import"./index-gapj9Wcb.js";import"./index-D9Bv3C6k.js";import"./DownOutlined-z3I3nDv9.js";import"./useIcons-CDf6lDIp.js";import"./CheckOutlined-DPOLd74P.js";import"./chevron-down-u38pTTSM.js";import"./createLucideIcon-D1dtiQRH.js";import"./Table-BhIN-nUr.js";import"./styleChecker-DD0Z1krI.js";import"./addEventListener-D7w6vIGx.js";import"./useBubbleLock-BnnxIxI9.js";import"./button-D0Rmo6Y5.js";import"./LeftOutlined-lLzXux5-.js";import"./dropdown-C4zMWtkZ.js";import"./collapse-BbEVqHco.js";import"./index-De2sQM66.js";import"./useForm-CIMDi_Qk.js";import"./Input-ClusE8wk.js";import"./useForceUpdate-jQjUdsvY.js";import"./index-1XTAFx_Q.js";import"./Pagination-BbDnNTXA.js";import"./extendsObject-78o_rR5W.js";const f=k.div`

    padding: 30px;




    @media (max-width: 675px) {
        padding: 15px;
    }

`,V=()=>{const n=u(),{linkableId:l}=x(),{error:t,loading:d,packages:o,totalPackages:p}=I(e=>e.clientPackages.clientPackages),[a,c]=r.useState({page:1,count:10});s.useEffect(()=>{const e=n(b({clientId:l,page:a.page,size:a.count}));return()=>{e.abort()}},[a,n]),s.useEffect(()=>{t&&y.error(t??"Error fetching packages")},[t]);const m=r.useMemo(()=>[{label:"ID",dataIndex:"id",key:"id"},{label:"Client ID",dataIndex:"client_id",key:"client_id"},{label:"Client Name",dataIndex:["clientDetails","name"],key:"clientDetails.name"},{label:"Policy No",dataIndex:"policy_no",key:"policy_no"},{label:"User ID",dataIndex:"user_id",key:"user_id"},{label:"Email",dataIndex:"email",key:"email"},{label:"Phone",dataIndex:"phone",key:"phone"},{label:"Name",dataIndex:"name",key:"name"},{label:"Age",dataIndex:"age",key:"age"},{label:"Gender",dataIndex:"gender",key:"gender"},{label:"Created At",dataIndex:"created_at",key:"created_at",render:e=>P(e)}],[o]);return i.jsxs(f,{children:[i.jsx("h4",{children:"Packages Requested"}),i.jsx(h,{columns:m,data:o,showingName:"Client Packages",isLoading:d,page:a.page,pageSize:a.count,pagination:!0,onPageChange:(e,g)=>{c({page:e,count:g})},total:p||0})]})};export{V as default};
