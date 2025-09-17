import{j as e,d as b,r as u,ga as d}from"./index-ChUmNm8R.js";import{S as j}from"./SecoundaryButton-goiA8OO9.js";import{C as p}from"./CustomModal-Ds0Ku9jR.js";import{y as w}from"./index-DC3reArS.js";import{c as h}from"./createLucideIcon-D1dtiQRH.js";/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],k=h("FileText",y);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],g=h("File",v);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],f=h("Trash2",N),z=({previewFile:s})=>{var i;if(!s)return null;switch(((i=s.split(".").pop())==null?void 0:i.toLowerCase())||""){case"jpeg":case"jpg":case"png":return e.jsx(x,{children:e.jsx("div",{className:"image-preview-container",children:e.jsx("img",{src:s,alt:"Full preview",className:"image-preview"})})});case"pdf":return e.jsx(x,{children:e.jsx("div",{className:"pdf-preview-container",children:e.jsx("iframe",{src:`${s}#toolbar=0&navpanes=0&scrollbar=0`,className:"pdf-preview-iframe",title:"PDF Preview"})})});default:return e.jsx(x,{children:e.jsxs("div",{className:"generic-preview-container",children:[e.jsx(g,{size:60,color:"#7291F4"}),e.jsx("p",{className:"no-preview-message",children:"This file type cannot be previewed directly."}),e.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"download-link",children:"Open file in new tab"})]})})}},C=({previewOpen:s,closePreview:t,previewFile:i})=>{const c=async()=>{if(i)try{const o=await(await fetch(i)).blob(),r=URL.createObjectURL(o),n=document.createElement("a");n.href=r,n.download=i.split("/").pop()||"download",document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(r)}catch{w.error("Failed to download the file.")}};return e.jsxs(p,{open:s,handleClose:t,title:"File Preview",children:[e.jsx(p.Body,{children:z({previewFile:i})}),e.jsx(p.Footer,{children:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(j,{onClick:t,className:"close-preview-btn",children:"Close"}),e.jsx(j,{onClick:c,className:"download-btn",disabled:!i,children:"Download"})]})})]})},x=b.div`
  .image-preview-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    /* min-height: 70vh; */
    overflow: auto;
  }

  .image-preview {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .pdf-preview-container {
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 70vh;
  }

  .pdf-preview-iframe {
    width: 100%;
    min-height: 70vh;
    border: none;
  }

  .generic-preview-container {
    padding: 20px;
    text-align: center;
  }

  .no-preview-message {
    margin-bottom: 15px;
    color: #666;
  }

  .download-link {
    color: #7291f4;
    text-decoration: none;
    padding: 8px 16px;
    border: 1px solid #7291f4;
    border-radius: 4px;
    display: inline-block;
    margin-top: 10px;

    &:hover {
      background-color: #f0f4ff;
    }
  }

  .close-preview-btn {
    background-color: #7291f4;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      background-color: #5a7ae4;
    }
  }
`,$=({url:s,handleRemoveFile:t,openPreview:i,fileContainerClassName:c,showPreview:a=!1})=>{var m;const[o,r]=u.useState(!1),n=((m=s.split(".").pop())==null?void 0:m.toLowerCase())||"";let l;switch(n){case"jpeg":case"jpg":case"png":l=e.jsxs("div",{className:`preview-container ${c}`,children:[e.jsx("img",{src:s,alt:"Preview",className:"file-thumbnail"}),e.jsxs("div",{className:"file-actions",children:[e.jsx("button",{className:"preview-file",onClick:()=>{a?r(!0):i==null||i(s)},children:e.jsx(d,{size:16})}),t&&e.jsx("button",{className:"remove-file",onClick:()=>t==null?void 0:t(),children:e.jsx(f,{size:16})})]})]});break;case"pdf":l=e.jsxs("div",{className:`pdf-preview ${c}`,children:[e.jsxs("div",{className:"pdf-icon-wrapper",children:[e.jsx(k,{size:40,color:"#e74c3c"}),e.jsx("span",{className:"pdf-label",children:"PDF"})]}),e.jsxs("div",{className:"file-actions",children:[e.jsx("button",{className:"preview-file",onClick:()=>{a?r(!0):i==null||i(s)},children:e.jsx(d,{size:16})}),t&&e.jsx("button",{className:"remove-file",onClick:()=>t==null?void 0:t(),children:e.jsx(f,{size:16})})]})]});break;default:l=e.jsxs("div",{className:`generic-file ${c}`,children:[e.jsx(g,{size:40,color:"#7291F4"}),e.jsxs("div",{className:"file-actions",children:[e.jsx("button",{className:"preview-file",onClick:()=>{a?r(!0):i==null||i(s)},children:e.jsx(d,{size:16})}),t&&e.jsx("button",{className:"remove-file",onClick:()=>t==null?void 0:t(),children:e.jsx(f,{size:16})})]})]})}return e.jsxs(M,{children:[e.jsx("div",{className:"file-preview-item",children:l}),a&&o&&e.jsx(C,{closePreview:()=>r(!1),previewFile:s,previewOpen:o})]})},M=b.div`
  .file-preview-item {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .preview-container,
  .pdf-preview,
  .generic-file {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    overflow: hidden;
    min-height: 50px;
    min-width: 80px;
    aspect-ratio: 1/1;

    &:hover {
      .file-actions {
        opacity: 1;
      }
    }
  }

  .file-thumbnail {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .pdf-icon-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .pdf-label {
    font-size: 12px;
    font-weight: 600;
    color: #e74c3c;
    margin-top: 5px;
  }

  .file-actions {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .preview-file,
  .remove-file {
    color: white;
    cursor: pointer;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    padding: 8px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;export{$ as F,f as T,C as a,k as b};
