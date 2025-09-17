import{d as p,j as e,r as f,P as x}from"./index-ChUmNm8R.js";import{C as m}from"./CustomModal-Ds0Ku9jR.js";const h=p.div`
  width: 100%;

  @supports (animation: grow 0.5s cubic-bezier(0.25, 0.25, 0.25, 1) forwards) {
    .tick {
      stroke-opacity: 0;
      stroke-dasharray: 29px;
      stroke-dashoffset: 29px;
      animation: tickLoop 3s cubic-bezier(0.25, 0.25, 0.25, 1) infinite;
    }

    .circle {
      fill-opacity: 0;
      stroke: #219a00;
      stroke-width: 16px;
      transform-origin: center;
      transform: scale(0);
      animation: circleLoop 3s cubic-bezier(0.25, 0.25, 0.25, 1.25) infinite;
    }
  }

  @keyframes grow {
    60% {
      transform: scale(0.8);
      stroke-width: 4px;
      fill-opacity: 0;
    }
    100% {
      transform: scale(0.9);
      stroke-width: 8px;
      fill-opacity: 1;
      fill: #219a00;
    }
  }

  @keyframes circleLoop {
    0% {
      transform: scale(0);
      stroke-width: 16px;
      fill-opacity: 0;
    }
    33% {
      transform: scale(0.8);
      stroke-width: 4px;
      fill-opacity: 0;
    }
    50% {
      transform: scale(0.9);
      stroke-width: 8px;
      fill-opacity: 1;
      fill: #219a00;
    }
    100% {
      transform: scale(0.9);
      stroke-width: 8px;
      fill-opacity: 1;
      fill: #219a00;
    }
  }

  @keyframes draw {
    0% {
      stroke-opacity: 0;
      stroke-dashoffset: 29px;
    }
    20% {
      stroke-opacity: 1;
      stroke-dashoffset: 29px;
    }
    50% {
      stroke-opacity: 1;
      stroke-dashoffset: 0;
    }
    100% {
      stroke-opacity: 1;
      stroke-dashoffset: 0;
    }
  }

  @keyframes tickLoop {
    0% {
      stroke-opacity: 0;
      stroke-dashoffset: 29px;
    }
    20% {
      stroke-opacity: 1;
      stroke-dashoffset: 29px;
    }
    50% {
      stroke-opacity: 1;
      stroke-dashoffset: 0;
    }
    100% {
      stroke-opacity: 1;
      stroke-dashoffset: 0;
    }
  }

  // Styles
  :root {
    --theme-color: var(--color-purple);
  }

  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,u=({title:o,message:a,whatsNext:t,handleBack:s,autoClose:r=!0,tickType:l="animated"})=>{const[c,d]=f.useState(10);return f.useEffect(()=>{if(r){let i;return c>0?i=setTimeout(()=>{d(n=>n-1)},1e3):s==null||s(),()=>clearInterval(i)}},[c]),e.jsx(m.Body,{children:e.jsxs(h,{className:"w-full max-w-[700px] p-8 mx-auto text-center",children:[e.jsx("div",{className:"relative w-20 h-20 mx-auto mb-6",children:l==="animated"?e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-20 h-20 flex items-center justify-center",children:e.jsx("div",{className:"svg-container",children:e.jsxs("svg",{className:"ft-green-tick",xmlns:"http://www.w3.org/2000/svg",height:"80",width:"80",viewBox:"0 0 48 48","aria-hidden":"true",children:[e.jsx("circle",{className:"circle",fill:"#5bb543",cx:"24",cy:"24",r:"22"}),e.jsx("path",{className:"tick",fill:"none",stroke:"#FFF","stroke-width":"6","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"M14 27l5.917 4.917L34 17"})]})})})}):e.jsx("div",{className:"w-20 h-20 flex items-center justify-center",children:e.jsxs("svg",{xmlns:"",width:"108",height:"107",viewBox:"0 0 108 107",fill:"none",children:[e.jsx("path",{d:"M102.009 53.2699C102.009 48.6585 108.268 43.2877 107.132 39.0348C105.955 34.6344 97.816 33.1166 95.5871 29.2644C93.3261 25.3563 96.0574 17.5556 92.8857 14.3839C89.714 11.2122 81.9132 13.9435 78.006 11.6824C74.1538 9.45355 72.636 1.31407 68.2355 0.138065C63.9827 -0.99894 58.6119 5.26033 54.0004 5.26033C49.3889 5.26033 44.0182 -0.998176 39.7653 0.138065C35.3648 1.31407 33.847 9.45356 29.9948 11.6832C26.0868 13.9442 18.286 11.213 15.1144 14.3847C11.9427 17.5563 14.6739 25.3571 12.4129 29.2651C10.184 33.1173 2.04454 34.6351 0.868534 39.0356C-0.268472 43.2885 5.99079 48.6592 5.99079 53.2707C5.99079 57.8822 -0.267707 63.2529 0.868534 67.5058C2.04454 71.9063 10.184 73.4241 12.4129 77.2763C14.6739 81.1843 11.9427 88.9851 15.1144 92.1567C18.286 95.3284 26.0868 92.5972 29.9941 94.8574C33.8463 97.0863 35.3641 105.226 39.7645 106.402C44.0174 107.539 49.3881 101.28 53.9996 101.28C58.6111 101.28 63.9819 107.538 68.2348 106.402C72.6352 105.226 74.153 97.0863 78.0052 94.8567C81.9132 92.5956 89.714 95.3269 92.8857 92.1552C96.0574 88.9835 93.3261 81.1828 95.5871 77.2747C97.816 73.4225 105.955 71.9047 107.132 67.5043C108.269 63.2522 102.009 57.8807 102.009 53.2699Z",fill:"#92E3A9"}),e.jsx("path",{d:"M53.334 72.5112L32.6233 50.5449C31.6308 49.4928 31.6797 47.8351 32.7318 46.8433C33.7847 45.8516 35.4424 45.8998 36.4334 46.9519L52.7001 64.205L73.2718 34.376C74.093 33.1847 75.7239 32.8865 76.9145 33.707C78.105 34.5282 78.4047 36.1592 77.5835 37.3497L53.334 72.5112Z",fill:"white"})]})})}),e.jsx("p",{className:"text-[24px] font-semibold text-[#101010] !mb-[27px]",children:o}),e.jsx("p",{className:"text-[20px] text-[#252B61] font-medium !mb-[43.18px] !px-[47.05px]",children:a}),e.jsxs("div",{className:"bg-green-50 !p-3 rounded-b-lg text-left",children:[e.jsx("p",{className:"text-[24px] font-bold text-black mb-4 border-b border-black font-[Inter] border-gray-200 pb-2",children:"What's Next?"}),e.jsx("ul",{className:"space-y-4 !pl-1 m-0",children:t==null?void 0:t.map((i,n)=>e.jsx("li",{className:"flex items-start",children:i},n))})]}),s&&e.jsxs("div",{className:"mt-2 flex justify-end items-center gap-2",children:[r&&e.jsxs("p",{className:"m-0",children:["going back in ",c," seconds"]}),e.jsx(x,{onClick:()=>s==null?void 0:s(),children:"Go Back Now"})]})]})})},j=({open:o,handleClose:a,data:t,handleBack:s,autoClose:r=!0,tickType:l="animated"})=>e.jsx(m,{headerClassName:"shadow-none",open:o,handleClose:()=>{s==null||s(),a()},children:e.jsx(u,{handleBack:s,...t,autoClose:r,tickType:l})});export{j as S};
