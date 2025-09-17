import{d as k,u as w,a as N,b as C,r as l,c as A,z as b,e as E,f as S,j as e,g as F}from"./index-ChUmNm8R.js";import{C as z}from"./Community-Cfkum9Ew.js";import{c as I}from"./createLucideIcon-D1dtiQRH.js";import{R as P}from"./ResponsiveContainer-CSlVun7K.js";import{P as M,a as _,C as O,S as R}from"./PieChart-CtlXezVH.js";import"./AllCommunities-Drovve2Q.js";import"./utils-CjlqjNT0.js";import"./clsx-B-dksMZM.js";import"./index-DYe-NdTs.js";import"./CustomPagination-BfzEq6pA.js";import"./index-gapj9Wcb.js";import"./index-D9Bv3C6k.js";import"./DownOutlined-z3I3nDv9.js";import"./useIcons-CDf6lDIp.js";import"./CheckOutlined-DPOLd74P.js";import"./chevron-down-u38pTTSM.js";import"./users-BRwWMaN2.js";/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]],H=I("MoveUpRight",B),T=k.div`
  padding: 35px;

  @media (max-width: 675px) {
    padding: 5px;
  }

  .common-box-shadow {
    box-shadow: 5px 4px 30px 0px #0000001a;
  }

  .link-box-text {
    font-family: Inter;
    font-weight: 600;
    font-size: 22px;
    line-height: 100%;
    letter-spacing: 1.5%;
  }
  
  .line-div {
    width: 100%;
    position: relative;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    height: 1px;
    position: absolute;
    top: calc(100% + 12px);
    width: calc(100% - 16px);
    right: 0;
  }

  .sub-boxes:hover {
    .move-up-container {
      box-shadow: 5px 4px 30px 0px #0000001a;
    }
    .link-box-text {
      color: #252b61 !important;
    }
    .link-icon-img{
      transform: rotate(90deg);
      transition: transform 0.3s ease-in-out;
    }
  }
`,L=c=>{const{cx:r,cy:t,innerRadius:i,outerRadius:d,startAngle:u,endAngle:h,fill:g,payload:f,value:p}=c;return e.jsxs("g",{children:[e.jsx(R,{cx:r,cy:t,innerRadius:i,outerRadius:d,startAngle:u,endAngle:h,fill:g}),e.jsx("text",{x:r,y:t-10,textAnchor:"middle",dominantBaseline:"central",fill:"#333",fontSize:18,fontWeight:600,style:{zIndex:1e3},children:f.name}),e.jsx("text",{x:r,y:t+15,textAnchor:"middle",dominantBaseline:"central",fill:"#333",fontSize:14,style:{zIndex:1e3},children:`Total Count: ${p}`})]})},oe=()=>{const c=w(),r=N(),{clientDetails:t,linkableId:i}=C(),[d,u]=l.useState(0),[h,g]=l.useState(0),f=l.useCallback((s,a)=>{g(a)},[]),p=["#0088FE","#00C49F","#FFBB28","#FF8042","#AF19FF","#FF1919"],{loading:U,error:y,data:n}=A(s=>{var a;return(a=s==null?void 0:s.reports)==null?void 0:a.detailedServiceReport});l.useEffect(()=>{y&&b.error(y??"unknown error occured")},[y]),l.useEffect(()=>{c(E({clientId:i}))},[c,i]),l.useEffect(()=>{(async()=>{var a,m,x;try{const o=await c(F({page:1,count:1,department:"",clientId:i}));if(o!=null&&o.error){b.error(((a=o==null?void 0:o.error)==null?void 0:a.message)||"unknown error occured");return}else u((x=(m=o==null?void 0:o.payload)==null?void 0:m.data)==null?void 0:x.total)}catch{b.error("unknown error occured")}})()});const j=l.useMemo(()=>{var s;return!Array.isArray(n==null?void 0:n.data)||((s=n==null?void 0:n.data)==null?void 0:s.length)===0?[{name:"No Data Available"}]:n==null?void 0:n.data.toSorted((a,m)=>{const x=parseInt(a.total_amount)||0;return(parseInt(m.total_amount)||0)-x}).map(a=>({name:S((a==null?void 0:a.type)||""),count:Number((a==null?void 0:a.total_bookings)??0)}))},[n]);return e.jsx(T,{children:e.jsxs("div",{className:"grid grid-cols-5 gap-y-[30px] gap-x-[36px]",children:[e.jsxs("div",{className:"col-span-5 common-box-shadow rounded-[24px] !p-[34px] bg-[#F0F9FF] border-[#252B61] flex flex-col-reverse md:flex-row",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-[#252B61] text-[32px] font-bold capitalize max-w-[640px]",children:["Empowering ",(t==null?void 0:t.name)??""," with Smarter Healthcare Solutions"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{className:"w-[47px] h-[47px]",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750937912933.png"}),e.jsx("p",{className:"m-0 text-[18px] font-medium",children:"Manage Employee Health"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{className:"w-[47px] h-[47px]",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750938246045.png"}),e.jsx("p",{className:"m-0 text-[18px] font-medium",children:"Health Management - All in One Place"})]})]}),e.jsxs("div",{className:"flex !flex-col sm:!flex-row gap-4 !mt-[35px] w-full",children:[e.jsxs("p",{className:"m-0 font-semibold text-[18px]",children:["Client Id : ",i]}),e.jsxs("p",{className:"m-0 font-semibold text-[18px]",children:["Total Employes : ",d]})]})]}),e.jsx("div",{className:"flex justify-center items-center grow-1",children:e.jsx("img",{src:t==null?void 0:t.logo_url,alt:"logo",className:"w-[350px]"})})]}),e.jsxs("div",{className:"col-span-5 xl:col-span-2 common-box-shadow rounded-[24px] !px-[33.5px] !py-[39.6px] flex flex-col gap-[24px]",children:[[{name:"Toxic Substance",link:"/toxic-substance",type:"Drugs Of Abuse"},{name:"Pre-Employment",link:"/package/pre-employment",type:"Pre-Employment Check"},{name:"Annual Health Checkup",link:"/package/annualhealthcheckupcamp",type:"Annual Medical Checkup"},{name:"Onsite Camp",link:"/onsite-camp",type:"On-Site Camp"}].filter(s=>{var a;return(a=t==null?void 0:t.service_types)==null?void 0:a.includes(s.type)}).map((s,a)=>e.jsxs("div",{onClick:()=>r(s==null?void 0:s.link),className:"relative w-full !pl-[16px] !pr-[34px] !py-[22px] justify-between rounded-lg  hover:cursor-pointer sub-boxes",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{className:"w-[20px] link-icon-img",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1745993773875.png",alt:s.name}),e.jsx("p",{className:"link-box-text !leading-[1.25] text-[#865b88] m-0 cursor-pointer ",onClick:()=>r(s.link),children:s.name})]}),e.jsx("div",{className:"w-[60px] h-[60px] absolute top-[50%] right-[0px] transform translate-y-[-50%] flex items-center justify-center move-up-container rounded-full cursor-pointer",children:e.jsx(H,{className:"w-[34px]"})}),a!==4&&e.jsx("div",{className:"line-div"})]},a)),[{name:"Toxic Substance",link:"/toxic-substance",type:"Drugs Of Abuse"},{name:"Pre-Employment",link:"/package/pre-employment",type:"Pre-Employment Check"},{name:"Annual Health Checkup",link:"/package/annualhealthcheckupcamp",type:"Annual Medical Checkup"},{name:"Onsite Camp",link:"/onsite-camp",type:"On-Site Camp"}].filter(s=>{var a;return(a=t==null?void 0:t.service_types)==null?void 0:a.includes(s.type)}).length===0&&e.jsx("div",{className:"text-center text-2xl font-medium",children:"No Services Available"})]}),e.jsxs("div",{className:"col-span-5 xl:col-span-3 common-box-shadow rounded-[24px] p-3 flex flex-col justify-center items-center",children:[e.jsx("div",{className:"w-full text-[22px] font-semibold",children:e.jsx("p",{children:"Utilization Graph"})}),e.jsx(P,{width:"100%",minHeight:"300px",height:"100%",children:e.jsx(M,{children:e.jsx(_,{activeIndex:h,activeShape:L,data:j,cx:"50%",cy:"50%",innerRadius:100,outerRadius:130,fill:"#8884d8",dataKey:"count",onMouseEnter:f,children:j.map((s,a)=>e.jsx(O,{fill:p[a%p.length]},`cell-${a}`))})})})]}),e.jsx("div",{className:"col-span-5",children:e.jsx(z,{})})]})})};export{oe as default};
