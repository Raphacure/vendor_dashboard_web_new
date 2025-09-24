import{a8 as r,a as d,r as c,bU as p,u as x,c as h,j as e,bV as m,bW as g,d as u,bX as j}from"./index-DfZtGQXr.js";function a(i){return r({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(i)}const f=u.div`
  padding: 15px;

  h4,
  h5 {
    color: 252B61;
    font-family: Inter;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0%;
    color: #252b61;
  }

  .profile-contents {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }

  .route-name {
    display: flex;
    align-items: center;

    p {
      margin: 0;
      font-family: Inter;
      font-weight: 400;
      font-size: 18px;
      line-height: 21.78px;
      letter-spacing: 1.5%;
      color: #616161;
    }

    img {
      width: 18px;
      height: 18px;
      margin-right: 5px;
    }
  }
  .doctor-edit-div {
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
    border: 1px solid #00000014;
    padding: 15px;
    width: 100%;
  }
  .doctor-details {
    display: flex;
    gap: 5px;

    p {
      margin: 0;
    }

    img {
      width: 70px;
      aspect-ratio: 1;
      border-radius: 50%;
    }
  }

  .doc-placeholder {
    width: 70px;
    height: 70px;
  }

  .profile-pic-div {
    width: 69px;
    height: 69px;
    overflow: hidden;
    border: 2px solid #252b61;
    border-radius: 50%;
  }

  .details-align {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dadada;
    padding: 15px 10px;
    align-items: center;
    cursor: pointer;
  }
  .contents {
    ul {
      list-style: none;
      padding-left: 0;
    }
  }
  .logout-div {
    border-radius: 15px;
    border: 1px solid rgb(37, 43, 97);
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logout-div-contents {
    display: flex;
    gap: 20px;
    align-items: center;

    p {
      margin: 0;
    }
    h5 {
      margin: 0;
    }
  }
`,v=()=>{const i=d(),[n,t]=c.useState(!1),{vendorDetails:s}=p(),o=x(),l=()=>{o(j())};return h()||i("/"),e.jsxs(f,{children:[e.jsxs("div",{className:"profile-contents",children:[e.jsx("div",{className:"doctor-edit-div",children:e.jsxs("div",{className:"flex justify-between doctor-details !w-full",children:[e.jsx("div",{className:"profile-pic-div",children:(s==null?void 0:s.image)&&e.jsx("img",{src:s==null?void 0:s.image,alt:"doc-img"})}),e.jsx("div",{children:e.jsx("p",{className:"text-2xl font-bold",children:s==null?void 0:s.name})})]})}),e.jsxs("div",{className:"appointment-management contents",children:[e.jsx("h4",{children:"Appointment Management"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("div",{onClick:()=>i("/dashboard",{state:{render:{dashboardHeader:!0},name:"Home"}}),className:"details-align",children:[e.jsxs("div",{className:"route-name",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738068856017.png",alt:"dashboard-img"}),e.jsx("p",{children:"Dashboard"})]}),e.jsx(a,{})]})}),e.jsx("li",{children:e.jsxs("div",{onClick:()=>i("/bookings",{state:{name:"Bookings"}}),className:"details-align",children:[e.jsxs("div",{className:"route-name",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738068786395.png",alt:"booking-img"}),e.jsx("p",{children:"Bookings"})]}),e.jsx(a,{})]})}),e.jsx("li",{children:e.jsxs("div",{onClick:()=>i("/patients",{state:{name:"My Patients"}}),className:"details-align",children:[e.jsxs("div",{className:"route-name",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738068953762.png",alt:"my-patient-img"}),e.jsx("p",{children:"My Employees"})]}),e.jsx(a,{})]})}),e.jsx("li",{children:e.jsxs("div",{className:"details-align",children:[e.jsxs("div",{className:"route-name",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738069133972.png",alt:"calaender-img"}),e.jsx("p",{children:"My Calender"})]}),e.jsx(a,{})]})})]})]}),e.jsxs("div",{className:"logout-div",children:[e.jsxs("div",{className:"logout-div-contents",onClick:()=>t(!0),children:[e.jsx("div",{children:e.jsx(m,{className:"cursor-pointer"})}),e.jsxs("div",{children:[e.jsx("h5",{className:"cursor-pointer",children:"Logout"}),e.jsx("p",{children:"we'll eagerly await your return!"})]})]}),e.jsx("div",{children:e.jsx(a,{})})]})]}),n&&e.jsx(g,{onHide:()=>t(!1),handleLogout:l})]})};export{v as default};
