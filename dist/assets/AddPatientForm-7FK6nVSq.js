import{d as J,r as I,u as X,h as D,j as e,cL as o,c_ as j,c$ as b,dh as F,P as ee,cn as k,bN as R,di as ne,bL as re,dj as se}from"./index-ChUmNm8R.js";import{A as oe}from"./AddressAutoComplete-CKisEBlA.js";import{C as U}from"./CustomModal-Ds0Ku9jR.js";import{S as ie}from"./SecoundaryButton-goiA8OO9.js";J.div`
  width: 100%;
  height: 100%;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
  }

  .popup {
    position: relative;
    background: white;

    border-radius: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .close-btn {
    position: relative;

    width: 30px;
    height: 30px;
    background-color: #252b61;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .gender-options {
    display: flex;
    gap: 10px;
  }

  .gender-options button {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .gender-options .active {
    background: #4a90e2;
    color: white;
  }

  

  .cancel {
    background: none;
    border: none;

    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    color: #252b61;
  }

  .save {
    background: #1d2a5b;
    color: white;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    border: none;
    padding: 10px 35px;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 2px 4px 19px rgba(0, 0, 0, 0.1);
  }
  .heading {
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    padding: 15px 34px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 20px;
      font-weight: 500;
      font-family: Inter;
      color: #1e1e1e;
    }
  }
  .form {
    padding: 29px 45px;

    .label {
      font-size: 16px;
      font-family: Inter;
      color: #1e1e1e;
    }
  }

  .input-container {
    position: relative;
    width: 100%;
  }

  .input-field {
    padding-right: 40px;
  }

  .location-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    width: 30px;
    height: 30px;
    transform: translateY(-50%);
    color: black;
    cursor: pointer;
    background-color: #cce8db;
    padding: 5px;
    border-radius: 5px;
  }

  .gender-buttons {
    
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .gender-buttons button {
    border-radius: 25px;
    align-items: center;
    display: flex;
    border: none;
    width: 100%;
    font-size: 16px;
    font-family: Inter;
    color: #1e1e1e;
    box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    width:max-content;
  }

  .gender-buttons Button:hover {
    background: none !important;
    background-color: none !important;
    border-color: none !important;
  }

  .gender-buttons Button:focus {
    outline: none;
    box-shadow: none;
  }

  .gender-buttons Button.active {
    background-color: #92bdf6 !important;
    color: white !important;
    border: none;
  }

  .form-buttons {
    display: flex;
    justify-content: space-between;
    gap:10px;

    button{
      flex:1
    }
  }

  .form-row {
    margin-bottom: 20px;
  }

  .form {
  padding: 20px;
  
}

/* Custom Scrollbar */
.form::-webkit-scrollbar {
  display: none;
}

.form {
  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
}

`;const de=J.div`
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  z-index: 1000;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
  }

  .popup {
    position: relative;
    background: white;
    min-width:700px;
    border-radius: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    .popup {
      min-width: 90%;
    }
  }

  .close-btn {
    position: relative;

    width: 30px;
    height: 30px;
    background-color: #252b61;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .gender-options {
    display: flex;
    gap: 10px;
  }

  .gender-options button {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .gender-options .active {
    background: #4a90e2;
    color: white;
  }

  

  .cancel {
    background: none;
    border: none;

    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    color: #252b61;
  }

  .save {
    background: #1d2a5b;
    color: white;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    border: none;
    padding: 10px 35px;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 2px 4px 19px rgba(0, 0, 0, 0.1);
  }
  .heading {
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    padding: 15px 34px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 20px;
      font-weight: 500;
      font-family: Inter;
      color: #1e1e1e;
    }
  }
  .form {
    padding: 29px 45px;

    .label {
      font-size: 16px;
      font-family: Inter;
      color: #1e1e1e;
    }
  }

  .input-container {
    position: relative;
    width: 100%;
  }

  .input-field {
    padding-right: 40px;
  }

  .location-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    width: 30px;
    height: 30px;
    transform: translateY(-50%);
    color: black;
    cursor: pointer;
    background-color: #cce8db;
    padding: 5px;
    border-radius: 5px;
  }

  .gender-buttons {
    
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .gender-buttons button {
    border-radius: 25px;
    align-items: center;
    display: flex;
    border: none;
    width: 100%;
    font-size: 16px;
    font-family: Inter;
    color: #1e1e1e;
    box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    width:max-content;
  }

  .gender-buttons Button:hover {
    background: none !important;
    background-color: none !important;
    border-color: none !important;
  }

  .gender-buttons Button:focus {
    outline: none;
    box-shadow: none;
  }

  .gender-buttons Button.active {
    background-color: #92bdf6 !important;
    color: white !important;
    border: none;
  }

  .form-buttons {
    display: flex;
    justify-content: flex-end;
    padding: 10px 45px;
  }

  

  .form-row {
    margin-bottom: 20px;
  }

  .form {
  max-height: 500px;
  overflow-y: auto;
  padding: 20px;
  
}

/* Custom Scrollbar */
.form::-webkit-scrollbar {
  display: none;
}

.form {
  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
}

`,me=({closeForm:A,defaultData:r,editMode:v=!1,patientId:te,reload:L})=>{var G,P,q,B,Y,M,O,$,H,Z,V;const[u,f]=I.useState(r!=null&&r.gender?r.gender.charAt(0).toUpperCase()+r.gender.slice(1):"");console.log("defalutData: ",r);const E=X(),[n,y]=I.useState({first_name:(r==null?void 0:r.first_name)||"",last_name:(r==null?void 0:r.last_name)||"",email:(r==null?void 0:r.email)||"",phone:(r==null?void 0:r.phone)||"",gender:(r==null?void 0:r.gender)||"",age:(r==null?void 0:r.age)||"",address:{name:((G=r==null?void 0:r.address)==null?void 0:G.name)||"",address:((P=r==null?void 0:r.address)==null?void 0:P.address)||"",state:((q=r==null?void 0:r.address)==null?void 0:q.state)||"",city:((B=r==null?void 0:r.address)==null?void 0:B.city)||"",zip:((Y=r==null?void 0:r.address)==null?void 0:Y.zip)||"",latitude:((M=r==null?void 0:r.address)==null?void 0:M.latitude)||0,longitude:((O=r==null?void 0:r.address)==null?void 0:O.longitude)||0},employee_id:(r==null?void 0:r.employee_id)||""});console.log("formData : ",n);const[p,N]=I.useState({first_name:"",last_name:"",gender:"",age:"",address:"",phone:"",email:""}),{linkableId:S}=D(),w=(i,s)=>{console.log("value : ",s),console.log("name : ",i);let d="";switch(i){case"first_name":s!=null&&s.trim()?isNaN(s==null?void 0:s.trim())||(d="First name should not be a number"):d="First name is required";break;case"last_name":s!=null&&s.trim()?isNaN(s==null?void 0:s.trim())||(d="Last name should not be a number"):d="Last name is required";break;case"gender":d=s?"":"Gender is required";break;case"age":d=s?"":"Age is required";break;case"address.address":d=s!=null&&s.trim()?"":"Address is required";break;case"phone":console.log("value : ",s),s!=null&&s.trim()?/^\d{10}$/.test(s.trim())||(d="Please enter a valid 10-digit phone number"):d="Contact number is required";break;case"email":(!s||!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(s))&&(d="Please enter a valid email address");break}N(a=>({...a,[i]:d}))},g=i=>{const{name:s,value:d}=i.target;console.log("name : ",s),console.log("input value : ",d);const a=s.split(".")??[];if(a.length===1)y(l=>({...l,[s]:d})),w(s,d);else{let l=function(c,x,t){const h=x[t];return t===x.length-1?{...c,[h]:d}:{...c,[h]:l(c[h]??{},x,t+1)}};y(c=>l(c,a,0)),w(s,d)}s==="address.address"&&(d!=null&&d.trim())&&N(l=>({...l,address:""}))},[le,K]=I.useState(!1),Q=()=>{var d,a,l;const i={first_name:n==null?void 0:n.first_name,last_name:n==null?void 0:n.last_name,gender:n==null?void 0:n.gender,age:n==null?void 0:n.age,address:(d=n==null?void 0:n.address)==null?void 0:d.address,phone:n==null?void 0:n.phone,email:n==null?void 0:n.email};let s=!0;return(a=Object.entries(i))==null||a.forEach(([c,x])=>{w(c==="address"?"address.address":c,x),x||(s=!1)}),(l=n==null?void 0:n.address)!=null&&l.address||(N(c=>({...c,address:"Address is required"})),s=!1),K(s),s},z=async i=>{var d,a,l,c,x;if(i.preventDefault(),!Q()){k.error("Please fill all required fields");return}if(!((a=(d=n==null?void 0:n.address)==null?void 0:d.address)!=null&&a.trim())){N(t=>({...t,address:"Address is required"})),k.error("Please fill all required fields");return}try{let t=null;if(v){const{address:h,first_name:C,last_name:_,...m}=n,W={clientId:S,data:{user:{...m,first_name:C,last_name:_,address:h,id:(c=(l=r==null?void 0:r.id)==null?void 0:l.toString)==null?void 0:c.call(l),employee_id:n!=null&&n.employee_id?n==null?void 0:n.employee_id:null,dob:R().subtract(n==null?void 0:n.age,"years").format("YYYY-MM-DD")}}};t=await E(ne(W))}else{const h={user:{...n,employee_id:n!=null&&n.employee_id?n==null?void 0:n.employee_id:null,dob:R().subtract(n==null?void 0:n.age,"years").format("YYYY-MM-DD")}};t=await E(re({data:h,clientId:S}))}if(t!=null&&t.error){k.error(((x=t==null?void 0:t.error)==null?void 0:x.message)??"Something went wrong");return}await E(se()),L&&(console.log("reload"),L()),k.success(`Employee ${v?"edited":"added"} successfully`),A()}catch(t){console.error("Error adding Employee:",t),k.error("unknown error occured")}},T=i=>{var c,x,t,h,C,_;console.log("place : ",i);const s=i==null?void 0:i.formatted_address,d=(x=(c=i==null?void 0:i.address_components)==null?void 0:c.find(m=>m.types.includes("administrative_area_level_1")))==null?void 0:x.long_name,a=(h=(t=i==null?void 0:i.address_components)==null?void 0:t.find(m=>m.types.includes("locality")))==null?void 0:h.long_name,l=(_=(C=i==null?void 0:i.address_components)==null?void 0:C.find(m=>m.types.includes("postal_code")))==null?void 0:_.long_name;y(m=>({...m,address:{...m.address,address:s,city:a,zip:l,state:d}})),s!=null&&s.trim()&&N(m=>({...m,address:""}))};return e.jsxs(e.Fragment,{children:[e.jsx(U.Body,{children:e.jsx(de,{children:e.jsx("div",{className:"form",children:e.jsxs(o,{onSubmit:z,children:[e.jsxs(j,{className:"form-row",children:[e.jsx(b,{md:6,children:e.jsxs(o.Group,{controlId:"name",children:[e.jsxs(o.Label,{className:"label",children:["First Name",e.jsx("b",{className:"text-red-500",children:"*"})]}),e.jsx(o.Control,{type:"text",placeholder:"Enter first name",name:"first_name",value:n==null?void 0:n.first_name,onChange:g,isInvalid:!!p.first_name}),e.jsx(o.Control.Feedback,{type:"invalid",children:p.first_name})]})}),e.jsx(b,{md:6,children:e.jsxs(o.Group,{controlId:"name",children:[e.jsxs(o.Label,{className:"label",children:[" Last Name",e.jsx("b",{className:"text-red-500",children:"*"})]}),e.jsx(o.Control,{type:"text",name:"last_name",placeholder:"Enter last name",value:n==null?void 0:n.last_name,onChange:g,isInvalid:!!p.last_name}),e.jsx(o.Control.Feedback,{type:"invalid",children:p.last_name})]})})]}),e.jsxs(j,{className:"form-row",children:[e.jsx(b,{md:6,children:e.jsxs(o.Group,{controlId:"name",children:[e.jsx(o.Label,{className:"label",children:" Employee Id"}),e.jsx(o.Control,{type:"text",name:"employee_id",placeholder:"Enter Employee Id",value:n==null?void 0:n.employee_id,onChange:g})]})}),e.jsx(b,{md:6,children:e.jsxs(o.Group,{controlId:"gender",children:[e.jsxs(o.Label,{className:"label",children:["Gender",e.jsx("b",{className:"text-red-500",children:"*"})]}),e.jsxs("div",{className:"gender-buttons",children:[e.jsx(F,{className:u==="Male"?"active":"",variant:"",name:"gender",onClick:()=>{f("Male"),y(i=>({...i,gender:"male"})),w("gender","male")},children:"Male"}),e.jsx(F,{className:u==="Female"?"active":"",variant:"",name:"gender",onClick:()=>{f("Female"),y(i=>({...i,gender:"female"})),w("gender","female")},children:"Female"}),e.jsx(F,{className:u==="Other"?"active":"",variant:"",name:"gender",onClick:()=>{f("Other"),y(i=>({...i,gender:"null"})),w("gender","null")},children:"Other"})]}),p.gender&&e.jsx("div",{className:"text-danger mt-1",children:p.gender})]})})]}),e.jsxs(j,{className:"form-row",children:[e.jsx(b,{md:6,children:e.jsxs(o.Group,{controlId:"contact",children:[e.jsxs(o.Label,{className:"label",children:["Contact Number",e.jsx("b",{className:"text-red-500",children:"*"})]}),e.jsx(o.Control,{type:"tel",maxLength:10,placeholder:"Enter phone number",value:n==null?void 0:n.phone,name:"phone",onChange:g,isInvalid:!!p.phone}),e.jsx(o.Control.Feedback,{type:"invalid",children:p.phone})]})}),e.jsx(b,{md:6,children:e.jsxs(o.Group,{controlId:"email",children:[e.jsxs(o.Label,{className:"label",children:["Email ID",e.jsx("b",{className:"text-red-500",children:"*"})]}),e.jsx(o.Control,{type:"email",placeholder:"Enter email",name:"email",value:n==null?void 0:n.email,onChange:g,isInvalid:!!p.email}),e.jsx(o.Control.Feedback,{type:"invalid",children:p.email})]})})]}),e.jsx(j,{className:"form-row",children:e.jsx(b,{md:6,children:e.jsxs(o.Group,{controlId:"age",children:[e.jsxs(o.Label,{className:"label",children:["Age",e.jsx("b",{className:"text-red-500",children:"*"})]}),e.jsx(o.Control,{type:"number",placeholder:"Enter your Age",value:n==null?void 0:n.age,name:"age",onChange:i=>{Number(i.target.value)<120&&Number(i.target.value)>=0&&g(i)},isInvalid:!!p.age}),e.jsx(o.Control.Feedback,{type:"invalid",children:p.age})]})})}),e.jsx(j,{children:e.jsxs(o.Group,{controlId:"address",className:" position-relative",children:[e.jsxs(o.Label,{className:"label",children:["Address",e.jsx("b",{className:"text-red-500",children:"*"})]}),e.jsxs("div",{className:"input-container",children:[e.jsx(o.Control,{type:"text",className:"!hidden",isInvalid:!!p.address}),e.jsx(oe,{onChange:i=>{y(s=>({...s,address:{...s.address,address:i.target.value}}))},className:`${p.address?"!border-red-500":""}`,onAddressSelected:T,value:($=n==null?void 0:n.address)==null?void 0:$.address})]}),e.jsx(o.Control.Feedback,{type:"invalid",style:{display:"block"},children:p.address})]})}),e.jsxs(j,{className:"form-row",children:[e.jsx(b,{md:6,children:e.jsxs(o.Group,{controlId:"city",children:[e.jsx(o.Label,{className:"label",children:"City"}),e.jsx(o.Control,{type:"text",placeholder:"Enter the city name",value:(H=n==null?void 0:n.address)==null?void 0:H.city,name:"address.city",onChange:g})]})}),e.jsx(b,{md:6,children:e.jsxs(o.Group,{controlId:"state",children:[e.jsx(o.Label,{className:"label",children:"State"}),e.jsx(o.Control,{type:"text",placeholder:"Enter the State name",value:(Z=n==null?void 0:n.address)==null?void 0:Z.state,name:"address.state",onChange:g})]})})]}),e.jsx(j,{className:"form-row",children:e.jsx(b,{md:6,children:e.jsxs(o.Group,{controlId:"pincode",children:[e.jsx(o.Label,{className:"label",children:"Pincode"}),e.jsx(o.Control,{type:"text",placeholder:"Enter the Pincode/Zipcode",name:"address.zip",value:(V=n==null?void 0:n.address)==null?void 0:V.zip,onChange:i=>{i.target.value.length<=6&&g(i)}})]})})})]})})})}),e.jsx(U.Footer,{children:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(ie,{onClick:A,children:"Cancel"}),e.jsx(ee,{onClick:z,children:v?"Update":"Save"})]})})]})};export{me as A};
