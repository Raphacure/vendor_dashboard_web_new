import{d as b,j as e,P as N,a as w,r as a,u as C,h as S,L as I,i as P,z as T}from"./index-ChUmNm8R.js";import{C as _}from"./Accordium-D_-yQ0k_.js";import{C as u}from"./CustomModal-Ds0Ku9jR.js";import{C as B}from"./check-Byry7F34.js";import{C as z}from"./CommonBreadCrumb-ZFUcDUQp.js";import{t as L}from"./breadcrumbs.constants-iX30DGip.js";import"./index-CSCB4ib3.js";import"./createLucideIcon-D1dtiQRH.js";import"./DownOutlined-z3I3nDv9.js";import"./dropdown-C4zMWtkZ.js";import"./LeftOutlined-lLzXux5-.js";import"./collapse-BbEVqHco.js";const F=b.div`
  padding: 35px;

  @media (max-width: 675px) {
    padding: 15px;
  }

  .header-text {
    font-family: Inter;
    font-weight: 600;
    font-size: 28px;
    line-height: 100%;
    letter-spacing: 0%;
  }
`,A=b.div`
  width: 100%;

  .item{
    .accordium-custom-class{
      padding:25px 0;
    }
  }

  .item:last-child{
    .accordium-custom-class{
      padding: 25px 0 0 0 ;
    }
  }

  .item:first-child{
    .accordium-custom-class{
      padding: 0;
    }
  }

  .item:first-child{
    .accordium-custom-class{
      padding: 0;
    }
  }

  .items-between-package-list {
    align-items: space-between;
  }

  .list-font-style {
    font-family: Inter;
    font-weight: 500;
    font-size: 16px;
    line-height: 31px;
    letter-spacing: 0%;
  }
  
  .image-icon {
    width: 100%;
    position: relative;
    border-radius: 20px;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }

  .main-box-shadow {
    box-shadow: 5px 4px 30px 0px #0000001a;
  }
`,M=({data:s,onBookNow:l})=>{var n,i,d;console.log("data",s);const o=[{title:"Test Highlights",description:"Information about test highlights would appear here.",icon:"✅",render:()=>{var t;return e.jsx("ul",{className:"list-disc list-inside p-0",children:(t=s.highlights)==null?void 0:t.map((p,h)=>e.jsx("li",{className:"list-font-style",children:p},h))})}},{title:"Who Should Take This?",description:"Information about who should take this test would appear here.",icon:"🔍",render:()=>e.jsx(e.Fragment,{})},{title:"Turnaround Time",description:"Information about turnaround time would appear here.",icon:"🕐",render:()=>e.jsx(e.Fragment,{})},{title:"Location Options",description:"Information about location options would appear here.",icon:"📍",render:()=>e.jsx(e.Fragment,{})}].map(t=>({title:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"w-5 h-5 flex items-center justify-center mr-2",children:t.icon}),e.jsx("span",{className:"font-semibold font-[Inter] text-[16px]",children:t.title})]}),render:t.render}));return e.jsx(A,{children:e.jsxs("div",{className:"w-full rounded-[24px] !text-[#252B61] p-2 main-box-shadow",children:[e.jsxs("div",{className:"flex p-6 gap-[18px]",children:[e.jsx("img",{src:(n=s==null?void 0:s.image)==null?void 0:n[0],alt:s.title,className:"h-[217px] rounded-lg  w-[199px] object-contain bg-gray-100"}),e.jsxs("div",{className:"flex-1 flex flex-col gap-[20px] h-full",children:[e.jsx("h2",{className:"!text-[20px] !font-semibold !text-[#252B61] font-[Inter] capitalize !mb-0",children:s==null?void 0:s.service_name}),e.jsxs("div",{className:"flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx("img",{className:"w-[29px] h-[29px]",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1745998798210.png",alt:"report_icon"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-[#008080] font-medium text-[14px]",children:"Report Within"}),e.jsx("span",{className:"text-[#141414] font-semibold text-[14px]",children:s==null?void 0:s.reports_within})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[14px] font-semibold",children:"Corporate Pricing"}),e.jsxs("div",{className:"flex items-center gap-2 m-0",children:[e.jsxs("span",{className:"text-[18px] text-[#616161] font-normal font-[outfit] line-through",children:["₹",(i=s==null?void 0:s.price)==null?void 0:i.actual_cost]}),e.jsxs("span",{className:"text-[22px] font-semibold text-[#252B61] font-[outfit]",children:["₹",(d=s.price)==null?void 0:d.discounted_price]})]})]}),e.jsx("div",{children:e.jsx(N,{className:"px-[12px] py-[6px] max-w-[218px] w-full h-[33px] ",onClick:()=>l==null?void 0:l(s),children:"Book Now"})})]})]}),e.jsx("div",{className:"mt-4",children:e.jsx(_,{className:"!rounded-[7px] bg-[#e9f2fd]",containerClassName:"!px-[16px] !py-[22px]",headerClassName:"accordium-custom-class",contentClassName:"!py-[16px] !px-[20px]",data:o,defaultOpen:0})})]})})},O=({packageData:s})=>{var c,o,n;const l=w();return e.jsxs(e.Fragment,{children:[e.jsx(u.Body,{children:e.jsxs("div",{className:"rounded-lg overflow-hidden border border-gray-200 shadow-sm",children:[e.jsxs("div",{className:"grid grid-cols-2 bg-blue-50 text-gray-800 font-medium",children:[e.jsx("div",{className:"p-2 border-gray-200",children:"Drug Screen"}),e.jsxs("div",{className:"p-2 text-center border-gray-200",children:[(c=s==null?void 0:s.tests)==null?void 0:c.length," Panel"]})]}),(o=s==null?void 0:s.tests)==null?void 0:o.map((i,d)=>{var t;return e.jsxs("div",{className:`grid grid-cols-2 ${d<((t=s==null?void 0:s.tests)==null?void 0:t.length)-1?"border-b border-gray-200":""}`,children:[e.jsx("div",{className:"px-2 py-3 text-[#000] opacity-[0.8] text-[16px] font-medium font-[Inter]",children:i==null?void 0:i.service_name}),e.jsx("div",{className:"px-2 py-3 flex justify-center items-center border-gray-200",children:e.jsx("div",{className:"rounded-full bg-green-500 w-[26px] h-[26px] flex items-center justify-center p-1",children:e.jsx(B,{width:18,height:18,className:"text-white"})})})]},i==null?void 0:i.service_code)})]})}),e.jsx(u.Footer,{children:e.jsxs("div",{className:"!mt-1 flex justify-between items-center",children:[e.jsx("div",{className:"text-[#252B61] font-medium",children:"*Choose your preference"}),e.jsx("div",{className:"flex",children:e.jsxs("div",{className:"flex items-center gap-2 px-2",children:[e.jsxs("div",{className:"text-2xl font-bold text-[#252B61]",children:["₹",(n=s==null?void 0:s.price)==null?void 0:n.discounted_price]}),e.jsx(N,{onClick:()=>l(`/toxic-substance/${s==null?void 0:s.service_code}`),children:"Book Now"})]})})]})})]})},E=({open:s,handleClose:l,selectedPackage:c})=>e.jsx(u,{headerClassName:"!px-[34px] !py-[21px]",title:"Types of Drug Tests",bodyClass:"!pt-[38px] !px-[17px]",width:"800px",open:s,handleClose:l,children:e.jsx(O,{packageData:c})}),X=()=>{const[s,l]=a.useState(!1),c=()=>l(!1),o=C(),[n,i]=a.useState([]),[d,t]=a.useState(!0),[p,h]=a.useState({}),{linkableId:v}=S();a.useEffect(()=>{(async()=>{var m,f,g,j;try{t(!0);const r=await o(P({filters:{count:200,clientId:v,categoryIds:["248"]}}));r!=null&&r.error?T.error((f=(m=r==null?void 0:r.error)==null?void 0:m.data)==null?void 0:f.message):i((j=(g=r==null?void 0:r.payload)==null?void 0:g.data)==null?void 0:j.data)}catch(r){console.log(r)}finally{t(!1)}})()},[]);const y=x=>{l(!0),h(x)};return e.jsxs(F,{children:[d&&e.jsx(I,{}),e.jsx(z,{className:"mb-2",items:L}),e.jsx("p",{className:"header-text !mb-[26px]",children:"Toxic Substance"}),e.jsx("p",{className:"font-inter font-medium text-[22px] leading-[100%] tracking-[0%] !mb-[33px]",children:"Select Your Package Type"}),n.length>0?e.jsx("div",{className:"flex flex-wrap gap-[64.66px]",children:n.map((x,m)=>e.jsx("div",{className:"grow-0 basis-[567px] min-w-[340px]",children:e.jsx(M,{onBookNow:y,data:x},m)}))}):e.jsx("p",{className:"text-center text-gray-500 text-lg",children:"No packages available."}),e.jsx(E,{selectedPackage:p,open:s,handleClose:c})]})};export{X as default};
