import{a as l,r,b as d,j as e,gg as c,gh as p,d as x}from"./index-ChUmNm8R.js";import{f as i}from"./index-CSCB4ib3.js";const h=x.div`
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
`,u=()=>{const a=l(),[n,t]=r.useState(!1),{clientDetails:s}=d(),o=()=>{localStorage.clear(),window.location.href="/signin"};return e.jsxs(h,{children:[e.jsxs("div",{className:"profile-contents",children:[e.jsx("div",{className:"doctor-edit-div",children:e.jsxs("div",{className:"flex justify-between doctor-details !w-full",children:[e.jsx("div",{className:"profile-pic-div",children:(s==null?void 0:s.logo_url)&&e.jsx("img",{src:s==null?void 0:s.logo_url,alt:"doc-img"})}),e.jsx("div",{children:e.jsx("p",{className:"text-2xl font-bold",children:s==null?void 0:s.name})})]})}),e.jsxs("div",{className:"appointment-management contents",children:[e.jsx("h4",{children:"Appointment Management"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("div",{onClick:()=>a("/dashboard",{state:{render:{dashboardHeader:!0},name:"Home"}}),className:"details-align",children:[e.jsxs("div",{className:"route-name",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738068856017.png",alt:"dashboard-img"}),e.jsx("p",{children:"Dashboard"})]}),e.jsx(i,{})]})}),e.jsx("li",{children:e.jsxs("div",{onClick:()=>a("/bookings",{state:{name:"Bookings"}}),className:"details-align",children:[e.jsxs("div",{className:"route-name",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738068786395.png",alt:"booking-img"}),e.jsx("p",{children:"Bookings"})]}),e.jsx(i,{})]})}),e.jsx("li",{children:e.jsxs("div",{onClick:()=>a("/patients",{state:{name:"My Patients"}}),className:"details-align",children:[e.jsxs("div",{className:"route-name",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738068953762.png",alt:"my-patient-img"}),e.jsx("p",{children:"My Employees"})]}),e.jsx(i,{})]})}),e.jsx("li",{children:e.jsxs("div",{className:"details-align",children:[e.jsxs("div",{className:"route-name",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738069133972.png",alt:"calaender-img"}),e.jsx("p",{children:"My Calender"})]}),e.jsx(i,{})]})})]})]}),e.jsxs("div",{className:"logout-div",children:[e.jsxs("div",{className:"logout-div-contents",onClick:()=>t(!0),children:[e.jsx("div",{children:e.jsx(c,{className:"cursor-pointer"})}),e.jsxs("div",{children:[e.jsx("h5",{className:"cursor-pointer",children:"Logout"}),e.jsx("p",{children:"we'll eagerly await your return!"})]})]}),e.jsx("div",{children:e.jsx(i,{})})]})]}),n&&e.jsx(p,{onHide:()=>t(!1),handleLogout:o})]})};export{u as default};
