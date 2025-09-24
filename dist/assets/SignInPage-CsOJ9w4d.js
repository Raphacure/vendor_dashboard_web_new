import{d as k,u as v,r as c,a as N,j as e,P as z,l as I,z as l}from"./index-Djk7Ahjz.js";import{I as h}from"./index-DPcGVf0J.js";import"./index-BiTzRdp1.js";import"./Input-BWgNn_Ge.js";const P=k.div`
  background-color: rgba(242, 242, 253, 1);
  width: 100%;
  min-height: 100%;
  background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1742813458807.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  display:flex;
  align-items:center;

  .main-container {
    padding: 80px 0 0 0;
    height: 100%;
  }

  .signup-features {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0%;
  }

  /* .main-container {
        background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1742814788734.png");
        background-repeat: no-repeat;
        background-size: auto max(90%, 500px);
        background-position: bottom left;
    } */

  @media (max-width: 768px) {
    .main-container {
      flex-direction: column;
      padding: 10px 0 0px 0 !important;
    }
    .background-container-new {
      padding-bottom: 60px !important;
    }

    .inspired-with-p {
      font-family: Inter;
      font-weight: 600;
      font-size: 26px;
      line-height: 48px;
      letter-spacing: 0%;
    }
  }

  .background-doc {
    /* width: 100%; */
    height:100%
  }

  .back-text {
    font-family: Inter;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 56px;
    letter-spacing: 0%;
  }

  .reverve-container {
    align-items: flex-end;
  }

  .signin-caption {
    font-family: Inter;
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 48px;
    letter-spacing: 0%;
    color: rgba(23, 26, 31, 1);
  }

  .features-text {
    font-family: Inter;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0%;
    color: rgba(23, 26, 31, 1);
  }
`,C=()=>{const x=v(),[i,f]=c.useState({email:"",password:""}),[b,m]=c.useState(!1),[o,d]=c.useState({password:"",email:""}),w=N(),p=(s,a,n=!1)=>{let t="";switch(s){case"email":{a?/^[\w.+-]+@([\w-]+\.)+[\w-]{2,4}$/.test(a)?t="":t="Please enter a valid Email.":t="Email is required.";break}case"password":{a?a.length<8?t="Password must be at least 8 characters long.":t="":t="Password is required";break}}return n&&d(r=>({...r,[s]:t})),t},g=(s,a)=>{f(n=>({...n,[s]:a})),p(s,a,!0)},y=()=>{const s={email:"",password:""};for(const a in i)if(a==="email"||a==="password"){const n=p(a,i[a]);n&&(s[a]=n)}return d(s),Object.values(s).filter(a=>(a&&(console.log("error"),l.error(a)),a!=="")).length===0},j=async s=>{var t;if(!y())return;const n={email:i.email,password:i.password,role:"vendor"};try{m(!0);const r=await x(I(n));r!=null&&r.error?l.error(((t=r==null?void 0:r.error)==null?void 0:t.message)||"unknown error occured"):(l.success("login successfull"),w("/dashboard"))}catch{l.error("unknown error occured")}finally{m(!1)}},u=i.email.trim()===""||i.password.trim()==="";return e.jsx(P,{children:e.jsx("div",{className:"flex justify-center h-full w-full",children:e.jsx("div",{className:"background-container-new h-full p-1 flex justify-center items-center",children:e.jsxs("div",{className:"bg-white lg:h-[540px] !p-8 rounded-xl shadow-lg grid grid-cols-1 min-[950px]:grid-cols-2 gap-[40px]",children:[e.jsxs("div",{className:"relative",children:[e.jsx("img",{className:"opacity-0 min-[950px]:!hidden max-[950px]:w-[calc(100%+130px)] min-[950px]:translate-y-[-50%] min-[950px]:top-[50%] min-[950px]:!h-[calc(100%+130px)]",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1751004257818.png",alt:"hr-photo"}),e.jsx("img",{className:"absolute max-[950px]:left-[50%] max-[950px]:translate-x-[-50%] max-[950px]:!w-[calc(100%+0px)] min-[950px]:translate-y-[-50%] min-[950px]:top-[50%] min-[950px]:!h-[calc(100%+130px)]",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1751004257818.png",alt:"hr-photo"})]}),e.jsxs("div",{className:"max-w-[485px] bg-[url('https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1751008367988.png')] bg-cover bg-center bg-no-repeat",children:[e.jsx("h1",{className:"!text-[28px] !font-bold !text-[#252B61] mb-4",children:"Invest in Wellness. Unlock Potential"}),e.jsx("p",{className:"text-black mb-8 text-sm",children:"A smart platform designed for corporate HR teams to manage employee health, wellness programs, and clinic services"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"email",className:"block text-indigo-900 font-medium mb-1",children:"Email"}),e.jsx(h,{type:"email",placeholder:"Enter your email",size:"large",className:"w-full",value:i.email,onChange:s=>{g("email",s.target.value)},id:"email",name:"email",autoComplete:"email",required:!0,status:o.email?"error":""}),o.email&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:o.email})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"password",className:"block text-indigo-900 font-medium mb-1",children:"Password"}),e.jsx(h.Password,{placeholder:"Enter your password",size:"large",className:"w-full",value:i.password,onChange:s=>{g("password",s.target.value)},id:"password",name:"password",autoComplete:"current-password",required:!0,status:o.password?"error":""}),o.password&&e.jsx("p",{className:"text-red-500 text-sm mt-1",children:o.password})]}),e.jsx("div",{className:"mt-4",children:e.jsx(z,{isLoading:b,onClick:j,className:`w-full py-2 bg-indigo-900 text-white !rounded-3xl font-medium ${u?"opacity-50 cursor-not-allowed":""}`,disabled:u,children:"Login"})}),e.jsx("div",{className:"mt-4",children:e.jsxs("p",{className:"text-center text-sm text-gray-500 mb-4",children:["By continuing you agree to our",e.jsx("br",{})," ",e.jsx("a",{href:"https://raphacure.com/terms",target:"_blank",className:"text-black font-medium !no-underline",rel:"noreferrer",children:"Terms & Conditions"})," ","and"," ",e.jsx("a",{href:"https://raphacure.com/privacy-policy",target:"_blank",className:"text-black font-medium !no-underline",rel:"noreferrer",children:"Privacy Policy"})]})})]})]})})})})},L=()=>e.jsx(C,{});export{L as default};
