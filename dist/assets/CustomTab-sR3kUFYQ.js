import{r as l,j as o,d as v}from"./index-ChUmNm8R.js";const p=v.div`
  background-color: #e9f2fd;
  border-radius: 0.75rem;
  padding: 0.5rem;
  display: inline-block;
  max-width: 100%;

  ::-webkit-scrollbar {
    width: 8px; /* For vertical scrollbar */
    height: 8px; /* For horizontal scrollbar */
  }
  ::-webkit-scrollbar-track {
    background: white;
    border-radius: 10px;
    margin-top: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Scrollbar thumb on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`,w=({tabs:t,activeTab:r,setActiveTab:u,onChange:d,containerClassName:x="mt-1"})=>{var h;const s=l.useRef(null),c=l.useRef(void 0),[i,a]=l.useState(r||(t&&t.length>0?t[0].value:""));l.useEffect(()=>{r!==void 0&&r!==i&&a(r)},[r]),l.useEffect(()=>{d&&d(i)},[i]);const f=r??i,g=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{if(s.current){const e=s.current.getBoundingClientRect();e.left>=0&&e.right<=(window.innerWidth||document.documentElement.clientWidth)||s.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}},2e3)};return o.jsxs(o.Fragment,{children:[o.jsx(p,{onMouseEnter:()=>clearTimeout(c.current),onMouseLeave:g,children:o.jsx("div",{ref:e=>{if(!e)return;const n=()=>{e.classList.toggle("pb-2",e.scrollWidth>e.clientWidth)};n();const m=new ResizeObserver(n);return m.observe(e),()=>{m.disconnect()}},className:"grid grid-flow-col auto-cols-max gap-2 h-full overflow-x-auto",children:t.map(e=>o.jsx("div",{ref:n=>{e.value===(r??i)&&(s.current=n)},"aria-disabled":!!(e!=null&&e.disabled),className:`${e.value===(r??i)?"bg-white":""} ${e.disabled?"opacity-50 cursor-not-allowed":"cursor-pointer hover:bg-gray-50"} h-full flex justify-center items-center px-4 py-2 rounded-md text-sm font-medium text-gray-500 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out ${e.value===(r??i)?"text-gray-900":"text-gray-500"}`,onClick:()=>{e.disabled||(u?u(e.value):a(e.value),e.onClick&&e.onClick())},children:o.jsx("div",{children:e.label})},e.value))})}),o.jsx("div",{children:o.jsx("div",{className:`${x}`,children:(h=t.find(e=>e.value===f))==null?void 0:h.children},f)})]})};export{w as C};
