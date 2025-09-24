import{r as l,C as y,j as o,M as w,d as b}from"./index-Djk7Ahjz.js";const i=l.createContext(null),c=()=>l.useContext(i),v=b.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  z-index: 10;
  font-family: inter;

  .modal-rapha {
    width: ${e=>(e==null?void 0:e.width)||"calc(100% - 30%)"};
    @media (max-width: 675px) {
      width: ${e=>(e==null?void 0:e.width)||"calc(100% - 20px)"};
    }
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0 10px #d8d8d8;
    position: relative;
    animation: modalOpen 0.3s ease forwards;
    transform: scale(0.8);
    opacity: 0;
    max-height: 90%;
    display: flex;
    flex-direction: column;
    overflow: ${e=>e!=null&&e.fixedFooter?"hidden":"auto"};

    @media (max-width: 675px) {
      max-height: calc(100% - 160px);
    }

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  @keyframes modalOpen {
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  .modal-rapha-header {
    position: relative;
    width: 100%;
    box-shadow: 2px 2px 19px 0px #0000001a;
  }
  .header-title {
    margin: 0;
  }
  .close-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .modal-body {
    overflow-y: ${e=>e!=null&&e.fixedFooter?"auto":"visible"};
    padding: 0.7rem;
  }
  .modal-rapha-footer {
    width: 100%;
  }
`,x=({width:e,title:t,children:r,open:a,handleClose:n,modalData:m,bodyClass:f,fixedFooter:s=!0,headerClassName:h="px-2"})=>{const u={width:e,title:t,open:a,handleClose:n,modalData:m,bodyClass:f,fixedFooter:s};return l.useEffect(()=>{const d=document.body.style.overflow;return a?document.body.style.overflow="hidden":document.body.style.overflow=d||"auto",()=>{document.body.style.overflow==="hidden"&&(document.body.style.overflow=d||"auto")}},[a]),a&&y.createPortal(o.jsx(i.Provider,{value:u,children:o.jsx(v,{fixedFooter:s,width:e,children:o.jsxs("div",{className:"modal-rapha p-0",children:[o.jsxs("div",{className:`modal-rapha-header flex items-center rounded-t-[17px] h-[66px] flex-shrink-0 flex-grow-0 flex-basis-[50px] ${h}`,children:[o.jsx("h5",{className:"header-title !mr-5",children:t||""}),o.jsx("span",{onClick:d=>{d.stopPropagation(),n()},className:"close-icon",children:o.jsx(w,{size:23})})]}),r]})})}),document.body)},g=({children:e})=>{const t=c();if(!t)return e;const{bodyClass:r}=t;return o.jsx("div",{className:`modal-body ${r||""}`,children:e})},p=({children:e})=>c()?o.jsx("div",{className:"modal-rapha-footer flex-shrink-0 flex-grow-1 flex-basis-[50px] px-2 py-2  border-gray-200",children:e}):e;x.Body=g;x.Footer=p;export{x as C};
