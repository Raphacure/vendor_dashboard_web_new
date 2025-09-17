import{d as l,r as t,j as e,P as d,I as o}from"./index-ChUmNm8R.js";import{S as c}from"./SecoundaryButton-goiA8OO9.js";import{C as x}from"./CommonBreadCrumb-ZFUcDUQp.js";import{c as m}from"./breadcrumbs.constants-iX30DGip.js";import{C as p}from"./calendar-Puy3TPaz.js";import{C as h}from"./clock-DONahVyX.js";import{c as r}from"./createLucideIcon-D1dtiQRH.js";import{S as f}from"./share-2-CYz0Y7iS.js";import{A as u}from"./arrow-down-to-line-oi1lP5YQ.js";import"./DownOutlined-z3I3nDv9.js";import"./dropdown-C4zMWtkZ.js";import"./LeftOutlined-lLzXux5-.js";import"./collapse-BbEVqHco.js";/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],j=r("Eye",g);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],y=r("Maximize2",b),N=l.div`
  width: 100%;
  font-family: inter;

  .cards-shadow{
    box-shadow: 4px 2px 30px rgba(0, 0, 0, 0.15);
  }

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
    }

    thead {
      background-color: #e9f2fd;
      font-weight: bold;
      border: 2px solid white;
      border-bottom: none;
    }
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
    gap: 10px;

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
`,J=()=>{const[v,w]=t.useState("All"),[C,k]=t.useState(""),a=[{id:"01 Jan 2025",name:"Mallikarjun",department:"Development",review:{rating:4.5,comment:"Great session! Helped me manage stress effectively."},status:"Registered"},{id:"01 Jan 2025",name:"Mallikarjun",department:"Development",review:{rating:4.5,comment:"Great session! Helped me manage stress effectively."},status:"Sample Collected"},{id:"01 Jan 2025",name:"Mallikarjun",department:"Development",review:{rating:4.5,comment:"Great session! Helped me manage stress effectively."},status:"Pending"},{id:"01 Jan 2025",name:"Mallikarjun",department:"Development",review:{rating:4.5,comment:"Great session! Helped me manage stress effectively."},status:"Report Generated"},{id:"01 Jan 2025",name:"Mallikarjun",department:"Development",review:{rating:4.5,comment:"Great session! Helped me manage stress effectively."},status:"Cancelled"}],n=s=>{switch(s){case"Registered":return"text-red-500";case"Sample Collected":return"text-red-500";case"Pending":return"text-green-500";case"Report Generated":return"text-red-500";case"Cancelled":return"text-red-500";default:return"text-gray-500"}};return e.jsx(N,{children:e.jsxs("div",{className:"!p-3 sm:!py-[25.79px] !px-[40px]",children:[e.jsx(x,{className:"!mb-[13.88]",items:m}),e.jsx("p",{className:"!text-[28px] font-semibold !text-[#222E62]",children:"Stress Management Camp"}),e.jsxs("div",{className:"flex gap-2 sm:justify-between sm:items-center !mb-[21.72px] flex-col sm:flex-row",children:[e.jsx("div",{children:e.jsx("span",{className:"!px-[14.09px] !py-[10.97px] border-[#16B670] border-[1px] text-green-600 rounded-full text-sm",children:"Completed"})}),e.jsxs("div",{className:"flex gap-[18.82px]",children:[e.jsx(c,{className:"sm:!py-[10px]",children:"Share Register Link"}),e.jsx(d,{className:"sm:!py-[10px]",children:"Schedule Next Camp"})]})]}),e.jsxs("div",{className:"grid md:grid-cols-4 xl:grid-cols-3  gap-4 !mb-[40.5px]",children:[e.jsxs("div",{className:"border cards-shadow !border-[#92BDF6] rounded-[25px] p-3 col-span-4 xl:col-span-1",children:[e.jsx("div",{className:"mb-2",children:e.jsxs("p",{className:"text-[21px] m-0 font-bold text-[#222E62]",children:["Lab Vendor:"," ",e.jsx("span",{className:"font-medium text-black",children:"Raphacure"})]})}),e.jsx("div",{className:"mb-1",children:e.jsxs("p",{className:"text-[21px] font-bold text-[#222E62]",children:["Camp Address:",e.jsx("span",{className:"text-black font-medium",children:"3rd Floor, Alkem House, Marathon Innova Corporate Building..."})]})}),e.jsxs("div",{className:"flex items-center justify-around gap-2 text-gray-600",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(p,{size:16,className:"text-gray-400"}),e.jsx("span",{children:"April 15 & 16"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(h,{size:16,className:"ml-4 text-gray-400"}),e.jsx("span",{children:"10:00 AM - 2:00 PM"})]})]})]}),e.jsx("div",{className:"border !border-[#92BDF6] cards-shadow rounded-[25px] p-3 col-span-4 md:col-span-2 xl:col-span-1",children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("p",{className:"text-[21px] font-bold text-[#222E62] !mb-[30px]",children:"Package Utilization"}),e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-[18px] font-medium m-0",children:"Total Slots"}),e.jsx("p",{className:"text-xl font-medium m-0",children:"50"})]}),e.jsxs("div",{className:"text-center border-r-[2px] border-gray-200 border-l-[2px]",children:[e.jsx("p",{className:"text-[18px] font-medium m-0",children:"Registered"}),e.jsx("p",{className:"text-xl font-medium m-0 text-green-600",children:"32"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-[18px] font-medium m-0",children:"Remaining"}),e.jsx("p",{className:"text-xl font-medium m-0 text-red-600",children:"18"})]})]})]})}),e.jsxs("div",{className:"border !border-[#92BDF6] cards-shadow rounded-[25px] p-3 col-span-4 md:col-span-2 xl:col-span-1",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("p",{className:"text-[21px] font-bold m-0 text-[#222E62]",children:"Emailer Templates"}),e.jsxs("div",{className:"flex gap-1 text-gray-400",children:[e.jsx("button",{className:"bg-gradient-to-b from-[#252B61] to-[#4C58C7] flex justify-center items-center p-1 !rounded-[7px] h-[24px] w-[24px]",children:e.jsx(j,{color:"#92BDF6",size:20})}),e.jsx("button",{className:"bg-gradient-to-b from-[#252B61] to-[#4C58C7] flex justify-center items-center p-1 !rounded-[7px] h-[24px] w-[24px]",children:e.jsx(y,{color:"#92BDF6",size:20})}),e.jsx("button",{className:"bg-gradient-to-b from-[#252B61] to-[#4C58C7] flex justify-center items-center p-1 !rounded-[7px] h-[24px] w-[24px]",children:e.jsx(f,{color:"#92BDF6",size:20})})]})]}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[1,2].map(s=>e.jsx("div",{className:"border-1 border-[#70BEFF] rounded-[10px] p-1 border-dashed bg-gray-50 h-[100px]",children:e.jsx("img",{className:"w-full h-full",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1746173036241.png",alt:"emailer-template"})},s))})]})]}),e.jsxs("div",{className:"flex justify-between items-center gap-1 !mb-[27.5px] top-header-responsive",children:[e.jsx("div",{children:e.jsx("p",{className:"text-[21px] font-bold text-[#222E62] !mb-0",children:"Employee Participation"})}),e.jsx("div",{className:"header",children:e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"search-btn absolute rounded-full h-[70%] top-1/2 translate-y-[-50%] left-2 flex items-center justify-center",children:e.jsx(o,{})}),e.jsx("input",{placeholder:"Name or Department",className:"w-full border !border-blue-900 focus:!border-blue-900 rounded-3xl py-2 search-box",type:"text"})]}),e.jsx("div",{className:"relative flex items-center",children:e.jsx("select",{className:"border !border-blue-900 rounded-3xl py-2 !pl-5 pr-4",children:e.jsx("option",{value:"",disabled:!0,children:"Sort by"})})}),e.jsx("div",{className:"flex gap-2 bg-green-200 rounded-full p-2",children:e.jsx(u,{size:24})})]})})]}),e.jsx("div",{className:"table-container",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Employee Id"}),e.jsx("th",{children:"Employee Name"}),e.jsx("th",{children:"Department"}),e.jsx("th",{children:"Review"}),e.jsx("th",{children:"Status"})]})}),e.jsx("tbody",{children:a.map((s,i)=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.department}),e.jsxs("td",{children:[s.review.rating,"/5 - ",s.review.comment]}),e.jsx("td",{children:e.jsx("span",{className:`${n(s.status)}`,children:s.status})})]},i))})]})})]})})};export{J as default};
