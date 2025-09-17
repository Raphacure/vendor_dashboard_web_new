import{c as x}from"./createLucideIcon-D1dtiQRH.js";import{r as g,j as s,d as u}from"./index-ChUmNm8R.js";import{C as d}from"./index-HwAQ7eJ8.js";/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],y=x("Info",m),k=({acceptType:n,mode:a="single",onFileUpload:t,acceptText:i="JPEG, PNG & PDF"})=>{const c=g.useRef(null),o=e=>{const r=e.target.files;r!=null&&r.length&&(a==="multiple"?t==null||t(Array.from(r)):t==null||t(r[0]),e.target.value="")},p=e=>{e.preventDefault(),e.stopPropagation();const r=e.dataTransfer.files;r!=null&&r.length&&(a==="multiple"?t==null||t(Array.from(r)):t==null||t(r[0]))},h=e=>{e.preventDefault(),e.stopPropagation()},f=e=>{e.preventDefault(),e.stopPropagation()},l=()=>{var e;(e=c.current)==null||e.click()};return s.jsxs(v,{className:"flex flex-col justify-center items-center gap-[9px] px-[30px]",onDrop:p,onDragOver:h,onDragLeave:f,children:[s.jsx("input",{type:"file",ref:c,onChange:o,className:"hidden",accept:n??"",multiple:a==="multiple"}),s.jsxs("div",{children:[s.jsx("img",{className:"uploadIcon",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/111904-1743769172669.png",alt:""}),s.jsxs("div",{children:[s.jsx("span",{className:"chooseFile cursor-pointer",onClick:l,children:"Choose the file"})," ","or drag and drop"]}),s.jsxs("p",{children:[i," formats up to 10 MB"]})]})]})},v=u.div`
  border: 1px dashed #7291f4;
  border-radius: 25px;
  padding: 35px;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 1.5px;
  text-align: center;
  color: #252b61;
  .uploadIcon {
    width: 60px;
    height: 51px;
  }
  .chooseFile {
    font-weight: 500;
    border-bottom: 1px solid #252b61;
  }
  p {
    color: #888888;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1.5px;
    text-align: center;
  }
  .btn {
    border-width: 1px;
  }
`,w=n=>{const{csvData:a,type:t}=n;return s.jsx("div",{children:s.jsx(d,{data:a,filename:t||"bulk_upload.csv",target:"_blank",children:n.children})})};export{w as D,k as F,y as I};
