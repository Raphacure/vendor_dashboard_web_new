import{d as I,r as v,u as w,a as q,h as E,j as e,P as S,bL as k,z as d}from"./index-ChUmNm8R.js";import{S as x}from"./SecoundaryButton-goiA8OO9.js";import{C}from"./CommonBreadCrumb-ZFUcDUQp.js";import{F as a}from"./index-CZV3_rbI.js";import{I as i}from"./index-D6J9e9i1.js";import{R as l}from"./index-De2sQM66.js";import{S as B}from"./index-D9Bv3C6k.js";import{C as F}from"./chevron-down-u38pTTSM.js";import"./DownOutlined-z3I3nDv9.js";import"./dropdown-C4zMWtkZ.js";import"./LeftOutlined-lLzXux5-.js";import"./collapse-BbEVqHco.js";import"./useForm-CIMDi_Qk.js";import"./row-B9qA-Efv.js";import"./index-Ctpo8ZnH.js";import"./Input-ClusE8wk.js";import"./useForceUpdate-jQjUdsvY.js";import"./CheckOutlined-DPOLd74P.js";import"./useIcons-CDf6lDIp.js";import"./index-1XTAFx_Q.js";import"./QuestionCircleOutlined-B6yisc4C.js";import"./EyeOutlined-BGetrG_9.js";import"./ExclamationCircleFilled-ZOATJe35.js";import"./TextArea-C37Yo_Hy.js";import"./button-D0Rmo6Y5.js";import"./useBubbleLock-BnnxIxI9.js";import"./createLucideIcon-D1dtiQRH.js";const A=I.div`
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
`,le=()=>{const[o]=a.useForm(),[u,m]=v.useState(!1),h=w(),b=q(),{linkableId:j}=E(),g=[{value:"HR",label:"HR"},{value:"IT",label:"IT"},{value:"Finance",label:"Finance"},{value:"Operations",label:"Operations"},{value:"Marketing",label:"Marketing"},{value:"Sales",label:"Sales"},{value:"Admin",label:"Admin"}],f=[{name:"HR Dashboard",link:"/dashboard"},{name:"Toxic Substances",link:"/toxic-substance"}],N=async s=>{var r,n,p;m(!0),console.log("Form values:",s);try{const c={user:{first_name:(r=s.name)==null?void 0:r.split(" ")[0],last_name:(n=s.name)==null?void 0:n.split(" ")[1],gender:s.gender,designation:s.department,employee_id:s.emp_id,active_status:"active",email:s.emailId,phone:s.mobileNo}},t=await h(k({data:c,clientId:j}));if(t!=null&&t.error){d.error(((p=t==null?void 0:t.error)==null?void 0:p.message)||"unknown error occured");return}d.success("Employee added successfully"),b(-1)}catch{d.error("unknown error occured")}finally{m(!1)}},y=()=>{o.resetFields()};return e.jsx(A,{children:e.jsxs("div",{className:"!px-[39px] !py-[48.7px] bg-white rounded-lg",children:[e.jsx(C,{className:"mb-2",items:f}),e.jsxs("div",{className:"flex justify-between items-center !mb-[24.24px]",children:[e.jsx("h1",{className:"!text-[28px] font-bold text-gray-900 m-0",children:"Add Employee"}),e.jsx(x,{className:"!py-[10px] !px-[20px]",children:"Bulk Upload"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"flex justify-between items-center !mb-[33.14px]",children:e.jsx("h2",{className:"!text-[22px] font-medium m-0",children:"Employee Details"})}),e.jsxs(a,{form:o,layout:"vertical",onFinish:N,requiredMark:!1,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsx(a.Item,{name:"name",label:e.jsx("span",{className:"text-sm",children:"Name*"}),rules:[{required:!0,message:"Name is required"}],children:e.jsx(i,{className:"h-10 rounded-md"})}),e.jsx(a.Item,{name:"gender",label:e.jsx("span",{className:"text-sm",children:"Gender*"}),rules:[{required:!0,message:"Gender is required"}],children:e.jsx(l.Group,{children:e.jsxs("div",{className:"grid grid-cols-3 gap-[20px] h-[39px]",children:[e.jsx(l.Button,{value:"male",className:"px-3 py-1 rounded-full gender-style",children:"Male"}),e.jsx(l.Button,{value:"female",className:"px-3 py-1 rounded-full",children:"Female"}),e.jsx(l.Button,{value:"Other",className:"px-3 py-1 rounded-full",children:"Other"})]})})}),e.jsx(a.Item,{name:"department",label:e.jsx("span",{className:"text-sm",children:"Department *"}),rules:[{required:!0,message:"Department is required"}],children:e.jsx(B,{placeholder:"Search / select",options:g,className:"h-10 rounded-md",suffixIcon:e.jsx(F,{size:20}),showSearch:!0,filterOption:(s,r)=>((r==null?void 0:r.label)??"").toLowerCase().includes(s.toLowerCase())})}),e.jsx(a.Item,{name:"emp_id",label:e.jsx("span",{className:"text-sm",children:"Employee Id"}),children:e.jsx(i,{className:"h-10 rounded-md"})}),e.jsx(a.Item,{name:"employeeGrade",label:e.jsx("span",{className:"text-sm",children:"Employee Grade *"}),rules:[{required:!0,message:"Employee Grade is required"}],children:e.jsx(i,{className:"h-10 rounded-md"})}),e.jsx(a.Item,{name:"emailId",label:e.jsx("span",{className:"text-sm",children:"Email Id*"}),rules:[{required:!0,message:"Email ID is required"},{type:"email",message:"Please enter a valid email"}],children:e.jsx(i,{className:"h-10 rounded-md"})}),e.jsx(a.Item,{name:"mobileNo",label:e.jsx("span",{className:"text-sm",children:"Mobile No*"}),rules:[{required:!0,message:"Mobile No is required"},{pattern:/^\d{10}$/,message:"Mobile No must be exactly 10 digits"}],children:e.jsx(i,{className:"h-10 rounded-md",maxLength:10})}),e.jsx(a.Item,{name:"pincode",label:e.jsx("span",{className:"text-sm",children:"Pincode*"}),rules:[{required:!0,message:"Pincode is required"},{pattern:/^\d{1,6}$/,message:"Pincode must be at most 6 digits"}],children:e.jsx(i,{className:"h-10 rounded-md",maxLength:6})})]}),e.jsxs("div",{className:"flex justify-end gap-[21px] !mt-[47.7px]",children:[e.jsx(x,{className:"!px-[20px] !py-[10px]",onClick:y,children:"Cancel"}),e.jsx(S,{type:"primary",htmlType:"submit",className:"!px-[20px] !py-[10px]",loading:u,children:"Book Now"})]})]})]})]})})};export{le as default};
