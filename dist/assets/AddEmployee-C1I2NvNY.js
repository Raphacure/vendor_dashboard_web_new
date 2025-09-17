import{d as I,r as k,k as w,u as q,a as E,j as e,P as C,bL as S,z as d}from"./index-ChUmNm8R.js";import{S as h}from"./SecoundaryButton-goiA8OO9.js";import{C as B}from"./CommonBreadCrumb-ZFUcDUQp.js";import{p as F}from"./packages.constants-DLMx6o0r.js";import{F as a}from"./index-CZV3_rbI.js";import{I as i}from"./index-D6J9e9i1.js";import{R as o}from"./index-De2sQM66.js";import{S as P}from"./index-D9Bv3C6k.js";import{C as A}from"./chevron-down-u38pTTSM.js";import"./DownOutlined-z3I3nDv9.js";import"./dropdown-C4zMWtkZ.js";import"./LeftOutlined-lLzXux5-.js";import"./collapse-BbEVqHco.js";import"./useForm-CIMDi_Qk.js";import"./row-B9qA-Efv.js";import"./index-Ctpo8ZnH.js";import"./Input-ClusE8wk.js";import"./useForceUpdate-jQjUdsvY.js";import"./CheckOutlined-DPOLd74P.js";import"./useIcons-CDf6lDIp.js";import"./index-1XTAFx_Q.js";import"./QuestionCircleOutlined-B6yisc4C.js";import"./EyeOutlined-BGetrG_9.js";import"./ExclamationCircleFilled-ZOATJe35.js";import"./TextArea-C37Yo_Hy.js";import"./button-D0Rmo6Y5.js";import"./useBubbleLock-BnnxIxI9.js";import"./createLucideIcon-D1dtiQRH.js";const M=I.div`
  .ant-radio-button-wrapper:not(:first-child)::before {
  }

  .ant-radio-group {
    display: block;
  }

  .ant-radio-button-wrapper::before {
    all: unset !important;
  }

  .ant-input{
    height:54px;
  }

  .ant-radio-button-wrapper{
    height:39px;
    box-shadow: 0px 4px 19px 0px #0000001A;
    border:none;
  }

  .ant-select {
    height:54px !important;
  }

  .ant-select-selector{
    border-radius: 10px;
  }

  .ant-radio-button-wrapper:last-child {
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  .ant-radio-button-wrapper:first-child {
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
  }
`,de=()=>{const[n]=a.useForm(),[b,p]=k.useState(!1),{type:j}=w(),f=q(),m=E(),r=F.find(s=>s.type===j);r||m(-1);const g=[{name:"Quick Links",link:"/quick-links"},{name:(r==null?void 0:r.name)??"",link:`/package/${r==null?void 0:r.type}`},{name:"Add Bulk Employee",link:`/package/${r==null?void 0:r.type}/employee/add-bulk-employee`}],y=[{value:"HR",label:"HR"},{value:"IT",label:"IT"},{value:"Finance",label:"Finance"},{value:"Operations",label:"Operations"},{value:"Marketing",label:"Marketing"},{value:"Sales",label:"Sales"},{value:"Admin",label:"Admin"}],N=async s=>{var t,c,x;p(!0),console.log("Form values:",s);try{const u={user:{first_name:(t=s.name)==null?void 0:t.split(" ")[0],last_name:(c=s.name)==null?void 0:c.split(" ")[1],gender:s.gender,designation:s.department,employee_id:s.emp_id,active_status:"active",email:s.emailId,phone:s.mobileNo}},l=await f(S(u));if(l!=null&&l.error){d.error(((x=l==null?void 0:l.error)==null?void 0:x.message)||"unknown error occured");return}d.success("Employee added successfully"),m(`/package/${r==null?void 0:r.type}`)}catch{d.error("unknown error occured")}finally{p(!1)}},v=()=>{n.resetFields()};return e.jsx(M,{children:e.jsxs("div",{className:"!px-[39px] !py-[48.7px] bg-white rounded-lg",children:[e.jsx(B,{className:"mb-2",items:g}),e.jsxs("div",{className:"flex justify-between items-center !mb-[24.24px]",children:[e.jsx("h1",{className:"!text-[28px] font-bold text-gray-900 m-0",children:"Add Employee"}),e.jsx(h,{className:"!py-[10px] !px-[20px]",onClick:()=>m(`/package/${r==null?void 0:r.type}/employee/add-bulk-employee`),children:"Bulk Upload"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"flex justify-between items-center !mb-[33.14px]",children:e.jsx("h2",{className:"!text-[22px] font-medium m-0",children:"Employee Details"})}),e.jsxs(a,{form:n,layout:"vertical",onFinish:N,requiredMark:!1,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsx(a.Item,{name:"name",label:e.jsx("span",{className:"text-sm",children:"Name*"}),rules:[{required:!0,message:"Name is required"}],children:e.jsx(i,{className:"h-10 !rounded-[10px]"})}),e.jsx(a.Item,{name:"gender",label:e.jsx("span",{className:"text-sm",children:"Gender*"}),rules:[{required:!0,message:"Gender is required"}],children:e.jsx(o.Group,{children:e.jsxs("div",{className:"grid grid-cols-3 gap-[20px] h-[54px]",children:[e.jsx(o.Button,{value:"Male",className:"px-3 py-1 rounded-full",children:"Male"}),e.jsx(o.Button,{value:"Female",className:"px-3 py-1 rounded-full",children:"Female"}),e.jsx(o.Button,{value:"Other",className:"px-3 py-1 rounded-full",children:"Other"})]})})}),e.jsx(a.Item,{name:"department",label:e.jsx("span",{className:"text-sm",children:"Department *"}),rules:[{required:!0,message:"Department is required"}],children:e.jsx(P,{placeholder:"Search / select",options:y,className:"h-10",suffixIcon:e.jsx(A,{size:20}),showSearch:!0,filterOption:(s,t)=>((t==null?void 0:t.label)??"").toLowerCase().includes(s.toLowerCase())})}),e.jsx(a.Item,{name:"emp_id",label:e.jsx("span",{className:"text-sm",children:"Employee Id"}),children:e.jsx(i,{className:"h-10 !rounded-[10px]"})}),e.jsx(a.Item,{name:"employeeGrade",label:e.jsx("span",{className:"text-sm",children:"Employee Grade *"}),rules:[{required:!0,message:"Employee Grade is required"}],children:e.jsx(i,{className:"h-10 !rounded-[10px]"})}),e.jsx(a.Item,{name:"emailId",label:e.jsx("span",{className:"text-sm",children:"Email Id*"}),rules:[{required:!0,message:"Email ID is required"},{type:"email",message:"Please enter a valid email"}],children:e.jsx(i,{className:"h-10 !rounded-[10px]"})}),e.jsx(a.Item,{name:"mobileNo",label:e.jsx("span",{className:"text-sm",children:"Mobile No*"}),rules:[{required:!0,message:"Mobile No is required"},{pattern:/^\d{10}$/,message:"Mobile No must be exactly 10 digits"}],children:e.jsx(i,{className:"h-10 !rounded-[10px]",maxLength:10})}),e.jsx(a.Item,{name:"pincode",label:e.jsx("span",{className:"text-sm",children:"Pincode*"}),rules:[{required:!0,message:"Pincode is required"},{pattern:/^\d{1,6}$/,message:"Pincode must be at most 6 digits"}],children:e.jsx(i,{className:"h-10 !rounded-[10px]",maxLength:6})})]}),e.jsxs("div",{className:"flex justify-end gap-[21px] !mt-[47.7px]",children:[e.jsx(h,{className:"!px-[20px] !py-[10px]",onClick:v,children:"Cancel"}),e.jsx(C,{type:"primary",htmlType:"submit",className:"!px-[20px] !py-[10px]",loading:b,children:"Book Now"})]})]})]})]})})};export{de as default};
