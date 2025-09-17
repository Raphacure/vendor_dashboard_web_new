import{bw as Bp,aA as Jp,bx as Qp,O as gn,r as T,bz as Sc,aH as Pr,aL as Vp,R as kp,b1 as ex,bA as nx,d as Ka,a as Ei,j as r,dk as tx,dl as rx,u as Jt,c as Cc,dm as Ac,dn as ix,cn as mr,dp as ax,dq as sx,dr as lx,c0 as cx,ds as Ic,dt as ox,du as ux,dv as dx,cV as Xa,h as fx,bR as hx,bN as Ha,f as Bt,dw as mx,z as vn,dx as px,c9 as xx,cA as Tc,cv as Ci,dy as Qe,dh as at,dz as Ri,dA as gx,dB as vx,cs as Ec,dC as _x,aJ as yx,dD as bx,dE as wx,dF as jx,dG as Nx,dH as Sx,dI as Cx,dJ as Ax,dK as Ix,dL as Tx,dM as Ex,cp as Rx,m as Px,P as Mx,dN as Lx}from"./index-ChUmNm8R.js";import{a as Rc}from"./prescriptionService-el3J9jP_.js";import{d as Ox}from"./utils-CjlqjNT0.js";import{c as $x,d as zx}from"./doctorUsersService--bmGzTWH.js";import{u as Fx}from"./useHasPermission-B8Y_MdsF.js";import{u as Wx}from"./useUploadToS3-CcI0wiNy.js";import{U as Ux}from"./index-BZKwATQs.js";import{R as Dx}from"./UploadOutlined-BeGctQLo.js";import{S as Rr,E as _c}from"./index-D9Bv3C6k.js";import{F as Hx,a as Gx,e as Ti}from"./index-CSCB4ib3.js";import{C as qx,R as Ga}from"./row-B9qA-Efv.js";import{c as Yx}from"./createLucideIcon-D1dtiQRH.js";import{C as Pc}from"./CustomTab-sR3kUFYQ.js";import{C as Kx}from"./index-DmdwV89h.js";import{T as Xx}from"./index-BsLI0Qln.js";import{T as Zx}from"./index-Ce5gUteX.js";import{d as Bx,D as yc}from"./index-8lg37tdn.js";import{y as Ke}from"./index-DC3reArS.js";import{s as vt}from"./Table-BhIN-nUr.js";import{B as $t}from"./button-D0Rmo6Y5.js";import{I as Jx}from"./index-D6J9e9i1.js";import{f as Mc}from"./LeftOutlined-lLzXux5-.js";import{T as Qx}from"./Table-CT4iqjp7.js";import{C as qa}from"./CustomModal-Ds0Ku9jR.js";const Vx=o=>{const{componentCls:d,calc:s}=o;return{[d]:Object.assign(Object.assign({},Qp(o)),{margin:0,padding:0,listStyle:"none",[`${d}-item`]:{position:"relative",margin:0,paddingBottom:o.itemPaddingBottom,fontSize:o.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:o.itemHeadSize,insetInlineStart:s(s(o.itemHeadSize).sub(o.tailWidth)).div(2).equal(),height:`calc(100% - ${gn(o.itemHeadSize)})`,borderInlineStart:`${gn(o.tailWidth)} ${o.lineType} ${o.tailColor}`},"&-pending":{[`${d}-item-head`]:{fontSize:o.fontSizeSM,backgroundColor:"transparent"},[`${d}-item-tail`]:{display:"none"}},"&-head":{position:"absolute",width:o.itemHeadSize,height:o.itemHeadSize,backgroundColor:o.dotBg,border:`${gn(o.dotBorderWidth)} ${o.lineType} transparent`,borderRadius:"50%","&-blue":{color:o.colorPrimary,borderColor:o.colorPrimary},"&-red":{color:o.colorError,borderColor:o.colorError},"&-green":{color:o.colorSuccess,borderColor:o.colorSuccess},"&-gray":{color:o.colorTextDisabled,borderColor:o.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:s(o.itemHeadSize).div(2).equal(),insetInlineStart:s(o.itemHeadSize).div(2).equal(),width:"auto",height:"auto",marginBlockStart:0,paddingBlock:o.customHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:s(s(o.fontSize).mul(o.lineHeight).sub(o.fontSize)).mul(-1).add(o.lineWidth).equal(),marginInlineStart:s(o.margin).add(o.itemHeadSize).equal(),marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":{[`> ${d}-item-tail`]:{display:"none"},[`> ${d}-item-content`]:{minHeight:s(o.controlHeightLG).mul(1.2).equal()}}},[`&${d}-alternate,
        &${d}-right,
        &${d}-label`]:{[`${d}-item`]:{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:s(o.marginXXS).mul(-1).equal(),"&-custom":{marginInlineStart:s(o.tailWidth).div(2).equal()}},"&-left":{[`${d}-item-content`]:{insetInlineStart:`calc(50% - ${gn(o.marginXXS)})`,width:`calc(50% - ${gn(o.marginSM)})`,textAlign:"start"}},"&-right":{[`${d}-item-content`]:{width:`calc(50% - ${gn(o.marginSM)})`,margin:0,textAlign:"end"}}}},[`&${d}-right`]:{[`${d}-item-right`]:{[`${d}-item-tail,
            ${d}-item-head,
            ${d}-item-head-custom`]:{insetInlineStart:`calc(100% - ${gn(s(s(o.itemHeadSize).add(o.tailWidth)).div(2).equal())})`},[`${d}-item-content`]:{width:`calc(100% - ${gn(s(o.itemHeadSize).add(o.marginXS).equal())})`}}},[`&${d}-pending
        ${d}-item-last
        ${d}-item-tail`]:{display:"block",height:`calc(100% - ${gn(o.margin)})`,borderInlineStart:`${gn(o.tailWidth)} dotted ${o.tailColor}`},[`&${d}-reverse
        ${d}-item-last
        ${d}-item-tail`]:{display:"none"},[`&${d}-reverse ${d}-item-pending`]:{[`${d}-item-tail`]:{insetBlockStart:o.margin,display:"block",height:`calc(100% - ${gn(o.margin)})`,borderInlineStart:`${gn(o.tailWidth)} dotted ${o.tailColor}`},[`${d}-item-content`]:{minHeight:s(o.controlHeightLG).mul(1.2).equal()}},[`&${d}-label`]:{[`${d}-item-label`]:{position:"absolute",insetBlockStart:s(s(o.fontSize).mul(o.lineHeight).sub(o.fontSize)).mul(-1).add(o.tailWidth).equal(),width:`calc(50% - ${gn(o.marginSM)})`,textAlign:"end"},[`${d}-item-right`]:{[`${d}-item-label`]:{insetInlineStart:`calc(50% + ${gn(o.marginSM)})`,width:`calc(50% - ${gn(o.marginSM)})`,textAlign:"start"}}},"&-rtl":{direction:"rtl",[`${d}-item-head-custom`]:{transform:"translate(50%, -50%)"}}})}},kx=o=>({tailColor:o.colorSplit,tailWidth:o.lineWidthBold,dotBorderWidth:o.wireframe?o.lineWidthBold:o.lineWidth*3,dotBg:o.colorBgContainer,itemPaddingBottom:o.padding*1.25}),eg=Bp("Timeline",o=>{const d=Jp(o,{itemHeadSize:10,customHeadPaddingVertical:o.paddingXXS,paddingInlineEnd:2});return Vx(d)},kx);var ng=function(o,d){var s={};for(var _ in o)Object.prototype.hasOwnProperty.call(o,_)&&d.indexOf(_)<0&&(s[_]=o[_]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,_=Object.getOwnPropertySymbols(o);C<_.length;C++)d.indexOf(_[C])<0&&Object.prototype.propertyIsEnumerable.call(o,_[C])&&(s[_[C]]=o[_[C]]);return s};const Lc=o=>{var{prefixCls:d,className:s,color:_="blue",dot:C,pending:E=!1,position:x,label:w,children:z}=o,ce=ng(o,["prefixCls","className","color","dot","pending","position","label","children"]);const{getPrefixCls:q}=T.useContext(Sc),F=q("timeline",d),re=Pr(`${F}-item`,{[`${F}-item-pending`]:E},s),fe=/blue|red|green|gray/.test(_||"")?void 0:_,U=Pr(`${F}-item-head`,{[`${F}-item-head-custom`]:!!C,[`${F}-item-head-${_}`]:!fe});return T.createElement("li",Object.assign({},ce,{className:re}),w&&T.createElement("div",{className:`${F}-item-label`},w),T.createElement("div",{className:`${F}-item-tail`}),T.createElement("div",{className:U,style:{borderColor:fe,color:fe}},C),T.createElement("div",{className:`${F}-item-content`},z))};var bc=function(o,d){var s={};for(var _ in o)Object.prototype.hasOwnProperty.call(o,_)&&d.indexOf(_)<0&&(s[_]=o[_]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,_=Object.getOwnPropertySymbols(o);C<_.length;C++)d.indexOf(_[C])<0&&Object.prototype.propertyIsEnumerable.call(o,_[C])&&(s[_[C]]=o[_[C]]);return s};const tg=o=>{var{prefixCls:d,className:s,pending:_=!1,children:C,items:E,rootClassName:x,reverse:w=!1,direction:z,hashId:ce,pendingDot:q,mode:F=""}=o,re=bc(o,["prefixCls","className","pending","children","items","rootClassName","reverse","direction","hashId","pendingDot","mode"]);const fe=(R,Me)=>F==="alternate"?R==="right"?`${d}-item-right`:R==="left"?`${d}-item-left`:Me%2===0?`${d}-item-left`:`${d}-item-right`:F==="left"?`${d}-item-left`:F==="right"?`${d}-item-right`:R==="right"?`${d}-item-right`:"",U=Vp(E||[]),K=typeof _=="boolean"?null:_;_&&U.push({pending:!!_,dot:q||T.createElement(kp,null),children:K}),w&&U.reverse();const Q=U.length,O=`${d}-item-last`,X=U.filter(R=>!!R).map((R,Me)=>{var we;const oe=Me===Q-2?O:"",on=Me===Q-1?O:"",{className:zn}=R,_n=bc(R,["className"]);return T.createElement(Lc,Object.assign({},_n,{className:Pr([zn,!w&&_?oe:on,fe((we=R==null?void 0:R.position)!==null&&we!==void 0?we:"",Me)]),key:(R==null?void 0:R.key)||Me}))}),Z=U.some(R=>!!(R!=null&&R.label)),Ee=Pr(d,{[`${d}-pending`]:!!_,[`${d}-reverse`]:!!w,[`${d}-${F}`]:!!F&&!Z,[`${d}-label`]:Z,[`${d}-rtl`]:z==="rtl"},s,x,ce);return T.createElement("ol",Object.assign({},re,{className:Ee}),X)};function rg(o,d){return o&&Array.isArray(o)?o:ex(d).map(s=>{var _,C;return Object.assign({children:(C=(_=s==null?void 0:s.props)===null||_===void 0?void 0:_.children)!==null&&C!==void 0?C:""},s.props)})}var ig=function(o,d){var s={};for(var _ in o)Object.prototype.hasOwnProperty.call(o,_)&&d.indexOf(_)<0&&(s[_]=o[_]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,_=Object.getOwnPropertySymbols(o);C<_.length;C++)d.indexOf(_[C])<0&&Object.prototype.propertyIsEnumerable.call(o,_[C])&&(s[_[C]]=o[_[C]]);return s};const Oc=o=>{const{getPrefixCls:d,direction:s,timeline:_}=T.useContext(Sc),{prefixCls:C,children:E,items:x,className:w,style:z}=o,ce=ig(o,["prefixCls","children","items","className","style"]),q=d("timeline",C),F=nx(q),[re,fe,U]=eg(q,F),K=rg(x,E);return re(T.createElement(tg,Object.assign({},ce,{className:Pr(_==null?void 0:_.className,w,U,F),style:Object.assign(Object.assign({},_==null?void 0:_.style),z),prefixCls:q,direction:s,items:K,hashId:fe})))};Oc.Item=Lc;/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3",key:"1ub6xw"}],["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"M12 16H4",key:"1cjfip"}]],sg=Yx("TestTubeDiagonal",ag),lg=Ka.div`
    .main-container {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .booking-details-container {
        box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);

        .patient-name {
            font-family: "Inter", sans-serif;
            color: rgba(34, 46, 98, 1);
            font-weight: 600;
            font-size: 26px;
            line-height: 100%;
            letter-spacing: 1.5%;
        }
    }

    .patient-info {
        display: flex;
        gap: 20px;
        justify-content: space-between;
        align-items: center;
    }

    .patient-photo img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    .patient-details {
        display: flex;
        flex-direction: column;
        p {
            margin: 5px;
        }
    }

    .booking-status {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .status {
        padding: 5px 10px !important;
        border-radius: 30px;
        font-size: 12px;
        font-weight: bold;
        background-color: white;
        border: 1px solid;
    }

    .pending {
        border-color: #ffd700;
        color: #ffd700;
    }

    .completed {
        border-color: #008000;
        color: #008000;
    }

    .cancelled {
        border-color: #ff0000;
        color: #ff0000;
    }

    .rescheduled {
        border-color: #ffa500;
        color: #ffa500;
    }

    .no-show {
        border-color: #000;
        color: #000;
    }

    .view-prescription-text {
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 1rem;
        line-height: 100%;
        letter-spacing: 0%;
        text-decoration: underline;
        text-decoration-style: solid;
        color: rgba(37, 43, 97, 1);
        text-decoration-thickness: 0%;
        text-decoration-skip-ink: auto;
    }

    .appointment-history-container {
        width: 100%;
        padding: 10px 10px 0px 10px;

        @media (max-width: 675px) {
            padding: 0 !important;
            .view-rx-btn {
                padding: 4px 5px !important;
            }

            .appointment-card {
                padding: 0 !important;
                border-left: none !important;
                box-shadow: none;
                box-shadow: none !important;
                border: 1px solid rgb(235, 235, 235) !important;
            }
            .date-box {
                padding: 10px 22px !important;
                max-width: 77.7px;
            }
            .left-panel {
                padding: 0 !important;
                display: flex;
                gap: 10px;
            }
            .summary {
                padding: 5px;
                gap: 5px;
                align-items: center;
            }
        }

        .sticky-header {
            position: relative;
            margin-bottom: 0px;
            z-index: 10;
            font-size: 18px;
            font-weight: 600;
            font-family: Inter;
            color: #212529;
        }

        .appointments {
            padding: 10px 0;
        }

        .appointments::-webkit-scrollbar {
            display: none;
        }

        .appointment-card {
            width: 100%;
            border-left: 7px solid #252b61;
            background-color: #fff;
            border-radius: 7px;
            padding: 16px;
            margin-bottom: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease-in-out;
            scrollbar-width: none;
            -ms-overflow-style: none;

            .summary {
                display: flex;
                /* align-items: center; */
                justify-content: space-between;
            }

            .details {
                display: flex;
                flex: 1;
                padding-left: 20px;
                padding-top: 6px;
                gap: 20px;
            }

            .detail {
                display: flex;
                flex: 1;
                padding-left: 32px;
                padding-top: 12px;
                padding-bottom: 12px;
            }

            .info {
                margin-top: 5px;
                flex: 1;

                strong {
                    font-size: 16px;
                    font-weight: 600;
                    font-family: Inter;
                    color: #000;
                }

                ul {
                    display: flex;
                    gap: 5px;
                    padding-left: 1rem;
                    flex-direction: column;
                    list-style: disc;
                }

                li {
                    font-size: 16px;
                    font-family: Inter;
                    color: #000;
                }
            }

            .expand-btn {
                background: none;
                border: none;
                color: #252b61;
                font-size: 24px;
                cursor: pointer;
            }

            .expanded-section {
                padding: 0px 21px;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }

            .expanded-section::-webkit-scrollbar {
                display: none;
            }

            table {
                width: 100%;
            }

            .table-header th:first-child {
                border-top-left-radius: 20px;
            }

            .table-header th:last-child {
                border-top-right-radius: 20px;
            }

            th,
            td {
                border-bottom: 1px solid #ddd;
                border-right: none;
                border-left: none;
                text-align: left;
                padding: 8px;

                text-align: left;
                font-size: 16px;
                font-family: Inter;
                color: #000;
            }

            th:last-child,
            td:last-child {
                border-right: none;
            }

            th {
                background-color: #bbe9ff;
                font-size: 18px;
                font-weight: 500;
                font-family: Inter;
                color: #000;
            }
        }

        .appointment-card::-webkit-scrollbar {
            display: none;
        }

        .left-panel {
            .date-box {
                display: flex;
                flex-direction: column;
                padding: 16px;
                border-radius: 15.31px;
                background-color: #bbe9ff;
                text-align: center;
                max-width: 100px;
                width: 100%;

                .date {
                    font-size: 25.65px;
                    font-weight: 500;
                    font-family: inter;
                    color: #252b61;
                }

                .month {
                    font-size: 16px;
                    font-family: Inter;
                    color: #252b61;
                }
            }
            h3 {
                font-size: 16px;
                font-weight: 500;
                font-family: Inter;
                color: #000;
                margin: 10px 5px;
            }
        }

        .more {
            flex: 1;
            display: flex;
            align-items: center;
            font-size: 16px;
            font-family: Inter;
            color: #000;

            span {
                text-decoration: underline;
                cursor: pointer;
            }
        }

        .left-panel {
            align-items: center;
            display: flex;
            flex-direction: column;
        }

        .first-detail {
            margin-bottom: 0px;
            font-size: 20px;
            display: flex;
            gap: 52px;

            font-family: Inter;
            color: #000;
        }

        .extra-details p {
            font-size: 20px;
            font-weight: 500;
            font-family: Inter;
            color: #000;
        }

        .table-2 {
            margin-top: 42px;
        }

        .table-1 {
            margin-top: 10px;
        }

        .advice {
            padding: 20px 0 0 0;
            .p1 {
                font-size: 18px;
                font-weight: 500;
                font-family: Inter;
                color: #000;
                margin-bottom: 10px;
            }

            .p2 {
                font-size: 16px;
                font-weight: 400;
                font-family: Inter;
                color: #000;
            }
        }
    }
`,$c=Ka.div`
position: relative;
  .detail-card {
    width: 100%;
    box-shadow: 1px 1px 18px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    background-color: #fff;
    margin-bottom: 2rem;
  }
  .specelization-text {
    font-size: 18px;
    font-family: Outfit, sans-serif;
    color: #252b61;
    margin-bottom: 11px;
  }
  .eduction-details .next-slot-time-sec {
    color: red;
    opacity: 1;
    font-size: 16px;
  }
  .doctor-title {
    font-size: 20px;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #000;
    opacity: 0.8;
    margin-bottom: 6px;
  }
  .eduction-details {
    display: contents !important;
    text-align: center;
    margin-bottom: 0px;
    span {
      font-size: 14px;
      font-family: Outfit, sans-serif;
      color: #000;
      opacity: 0.5;
    }
    .divv {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 1;
    }
    svg {
      display: inline-block;
    }
  }
  .Experience-div {
    display: flex;
    align-items: center;
  }
  .exp-div {
    /* gap: 2rem; */
    margin-top: 3px;
    /* margin-bottom: 11px; */
    > div {
      margin-bottom: 5px;
    }
  }
  .left-middle {
    display: flex;
    gap: 14px;
    padding: 1rem 1rem 0rem 1rem;
    cursor: pointer;
  }
  .main-contect-div {
    display: flex;
    align-items: center;
    gap: 26px;
    padding: 0rem 1rem;
    justify-content: space-between;
    cursor: pointer;
  }
  .contect-div {
    display: flex;
    align-items: center;
    gap: 26px;
    padding: 1rem;
  }
  .contect-text {
    margin-bottom: 0px;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-family: Outfit, sans-serif;
    color: #000;
  }
  .contect-book-btn-div {
    display: flex;
    justify-content: end;
  }
  .contect-book-btn {
    box-shadow: 1px 1px 18px rgba(0, 0, 0, 0.1);
    border-radius: 45px;
    background-color: #252b61;
    border: 1px solid #252b61;
    box-sizing: border-box;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 15px 14px 24px;
    font-size: 14px;
    color: #fff;
    font-family: Outfit, sans-serif;
  }

  .appointment-card {
    justify-content: space-between;
  }
  .card-left {
    position: relative;
    img {
      border-radius: 10px;
      object-fit: cover;
    }
  }
  .card-right {
    text-align: start;
  }
  .appointments {
    flex: 3;

    .filter-tags {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;

      span {
        background-color: #f0f0f0;
        padding: 0.5rem;
        border-radius: 4px;
        font-size: 0.9rem;
        cursor: pointer;
      }
    }

    .appointment-header {
      margin-bottom: 1rem;

      h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      p {
        margin-bottom: 1rem;
        font-size: 1rem;
        color: #555;
      }

      select {
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
      }
    }

    .sort-dropdown {
      .sort {
        padding: 10px;
        border-radius: 44px;
        border: 1px solid #aca3a3;
        label {
          font-size: 16px;
          letter-spacing: 0.02em;
          font-family: Outfit;
          color: #7e7979;
        }
        select {
          border: none;
          font-size: 16px;
          letter-spacing: 0.02em;
          font-family: Outfit;
          color: #1e1e1e;
        }
      }
    }

    .appointment-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .appointment-card {
        display: flex;
        gap: 1rem;
        border: 1px solid #ddd;
        border-radius: 8px;

        background-color: #fff;

        .card-right {
          text-align: start !important;
        }
      }
    }
  }
  .sort-dropdown {
    display: flex;
    justify-content: right;
    margin-bottom: 30px;
  }
  .bannerWrapper {
    position: absolute;
    top: 1rem;
    left: -2rem;
    width: 3rem;
    .rectangle {
      background: #92bdf6;
      padding: 2px 4px;
      border-radius: 10px 45px 45px 0;
      font-size: 14px;
      font-weight: 500;
      font-family: Outfit, sans-serif;
      color: #252b61;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .triangle {
      width: 0;
      height: 0;
      border-left: 1rem solid transparent;
      border-top: 0.8rem solid #92bdf6;
    }
  }
  .sec-banner-div {
    width: 12%;
    position: relative;
    border-radius: 9px 0px 0px 9px;
    background-color: #fff5d8;
    height: 32px;
    position: absolute;
    width: fit-content;
    padding: 1rem;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    p {
      margin-bottom: 0px;
      font-size: 14px;
      color: #252b61;
      height: 22.4px;
      opacity: 0.9;
      font-family: Outfit, sans-serif;
    }
  }
`,cg="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/1732785725785EMTYDOCTORIMAGE.png-1732785730293.png",og=({rating:o})=>r.jsx($c,{children:r.jsxs("div",{className:"bannerWrapper",children:[r.jsxs("div",{className:"rectangle",children:[r.jsx(rx,{fill:"#252B61",className:"me-2 "})," ",Math.round(o)]}),r.jsx("div",{className:"triangle"})]})}),ug=({origin:o="",DoctorBookingReviewProp:d,DoctorChatProp:s,item:_,DoctorBookConsultProp:C,selectedBooking:E={}})=>{Ei();const x=_;return r.jsx($c,{children:r.jsx("div",{className:"detail-card",children:r.jsxs("div",{className:"appointment-card",children:[r.jsxs("div",{className:"left-middle flex-col sm:flex-row",onClick:()=>{},children:[r.jsxs("div",{className:"card-left",children:[r.jsx(og,{rating:(x==null?void 0:x.rating)||0}),r.jsx("div",{className:"doctor-image-mobile-view",children:r.jsx("img",{className:"w-full",src:(x==null?void 0:x.image)||cg,alt:x==null?void 0:x.name})})]}),r.jsxs("div",{className:"card-right",children:[r.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[r.jsxs("div",{className:"doctor-title-web-view",children:[r.jsx("p",{className:"doctor-title",children:x==null?void 0:x.name}),r.jsx("p",{className:"specelization-text",children:x==null?void 0:x.specialization})]}),(_==null?void 0:_.available_in_90)&&r.jsxs("div",{className:"sec-banner-div",children:[r.jsx("img",{src:" https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736249754401.png",alt:"",className:"me-3 ms-2"}),r.jsx("p",{children:"In 90 Seconds"})]})]}),(x==null?void 0:x.highest_education)&&r.jsx("p",{className:"eduction-details",children:r.jsxs("span",{className:"education-span",children:[" ",x==null?void 0:x.highest_education]})}),r.jsxs("div",{className:"d-flex333 align-items-center exp-div",children:[(x==null?void 0:x.work_experience_years)&&r.jsxs("div",{className:" Experience-div ",children:[r.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736245306125.png",alt:"",className:"me-2"}),r.jsx("p",{className:"eduction-details",children:r.jsxs("span",{className:"divv",children:[" ",x==null?void 0:x.work_experience_years,"+ Year Experience"]})})]}),(x==null?void 0:x.languages)&&r.jsxs("div",{className:" Experience-div ",children:[r.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736245349025.png",alt:"",className:"me-2"}),r.jsx("p",{className:"eduction-details",children:r.jsx("span",{className:"languages-span",children:x==null?void 0:x.languages})})]}),(x==null?void 0:x.virtual_consultation_cost)&&r.jsxs("p",{className:"eduction-details",children:[r.jsx("span",{children:" Virtual Cons Cost : "}),r.jsxs("span",{className:"",children:["₹",x==null?void 0:x.virtual_consultation_cost]})]})]}),r.jsxs("p",{className:"eduction-details",children:[r.jsx("span",{children:" Next Slot: "}),r.jsx("span",{className:"next-slot-time-sec",children:tx(_==null?void 0:_.availabilites)})]})]})]}),r.jsxs("div",{className:"main-contect-div",children:[o==="self"&&(E==null?void 0:E.virtual_type)&&r.jsx("div",{className:"contect-div",children:r.jsxs("p",{className:"contect-text d-flex",onClick:()=>s(x),children:[r.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736245537447.png",alt:" chat",className:"me-2"}),r.jsxs("span",{className:"languages-span",children:["Virtual Type : ",E==null?void 0:E.virtual_type]})]})}),o!=="self"&&r.jsx("div",{className:"contect-book-btn-div p-2 ml-auto",children:r.jsx("button",{className:"btn contect-book-btn p-2 h-full",onClick:()=>C(x),children:"Book Consult"})})]})]},x==null?void 0:x.id)})})},dg=({fetchBookingDetails:o,bkDetails:d={},userWalletDetails:s={}})=>{var z,ce,q,F,re,fe,U,K,Q,O;const{id:_,address:C,user:E}=d||{},[x,w]=T.useState(!1);return Jt(),r.jsx("div",{children:E&&r.jsxs("div",{className:"order-section customer-booking-info-sec",children:[r.jsx("h5",{children:"Customer"}),((z=s==null?void 0:s.clientDetails)==null?void 0:z.name)&&r.jsxs("div",{className:"customer-wallet-info-sec",children:[r.jsxs("p",{children:[r.jsx("span",{children:" Client Name:"})," ",(ce=s==null?void 0:s.clientDetails)==null?void 0:ce.name]}),r.jsxs("p",{children:[r.jsx("span",{children:" Total Client Wallet Amount:"})," ",s==null?void 0:s.totalClientWalletAmount]}),r.jsxs("p",{children:[r.jsx("span",{children:"Total Used Amount:"})," ",s==null?void 0:s.totalUsedAmount]}),r.jsxs("p",{children:[r.jsx("span",{children:"Balance Amount: "}),s==null?void 0:s.balanceAmount]})]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Bill To:"}),r.jsxs("p",{children:[E==null?void 0:E.first_name," ",E==null?void 0:E.last_name,", ",E==null?void 0:E.phone,", ",E==null?void 0:E.email]}),r.jsxs("p",{children:["Relation: ",(E==null?void 0:E.relation)??"N/A"]}),r.jsxs("p",{children:["Age: ",(E==null?void 0:E.age)??"N/A"]}),r.jsxs("p",{children:["Gender: ",(E==null?void 0:E.gender)??"N/A"]})]}),((q=E==null?void 0:E.parent)==null?void 0:q.id)&&r.jsxs("div",{children:[r.jsx("strong",{children:"Parent:"}),r.jsxs("p",{children:[(F=E==null?void 0:E.parent)==null?void 0:F.first_name," ",(re=E==null?void 0:E.parent)==null?void 0:re.last_name]}),r.jsx("p",{children:(fe=E==null?void 0:E.parent)==null?void 0:fe.email})]}),((U=E==null?void 0:E.client)==null?void 0:U.name)&&r.jsxs("div",{children:[r.jsx("strong",{children:"Client:"}),r.jsxs("p",{children:[(Q=(K=E==null?void 0:E.client)==null?void 0:K.parentClient)==null?void 0:Q.name," - ",(O=E==null?void 0:E.client)==null?void 0:O.name]})]}),r.jsxs("div",{className:"d-flex flex-column",style:{gap:"1rem"},children:[r.jsx("div",{children:r.jsx("strong",{children:"Address:"})}),r.jsxs("p",{children:[(C==null?void 0:C.address)??"N/A",", ",(C==null?void 0:C.city)??"N/A",","," ",(C==null?void 0:C.zip)??"N/A"]})]})]})})},fg=T.memo(ug),hg=T.memo(dg),mg=T.memo(xg),pg=({bkDetails:o={},additionalInfo:d={},fetchBookingDetails:s,selectedBooking:_,fetchBookingAdditionalDetails:C=()=>{},getAllBookingsList:E=()=>{}})=>{var Xe,fn,Hn,lt,En;const x=Jt(),w=Ei(),[z,ce]=T.useState(!1),[q,F]=T.useState(""),[re,fe]=T.useState(""),[U,K]=T.useState({}),[Q,O]=T.useState(null),[X,Z]=T.useState([]),[Ee,R]=T.useState(null),[Me,we]=T.useState(""),[oe,on]=T.useState(!1),[zn,_n]=T.useState(""),[Fn,Wn]=T.useState(!1),[yn,he]=T.useState(""),[Un,nn]=T.useState({}),[Ye,In]=T.useState(null),[Ve,Ue]=T.useState({}),{statuses:un}=Cc(P=>(P==null?void 0:P.booking)||{});Fx();const{uploadToS3:ke}=Wx(),{id:Tn,status:ue,final_amount:xe,attachments:ee,doctor:se,medicines:Se,test:De,test_type:Ce,tests:dn,wallet:Dn,type:ze,package:He,products:Qn,user:Re}=o||{};T.useCallback(Ox(async(P="")=>{var be;const G=await x(zx({searchText:P,pageSize:20,pageNo:0}));if((be=G==null?void 0:G.payload)!=null&&be.doctors){const je=G.payload.doctors.map(me=>({value:me.id,label:`${me==null?void 0:me.name} (${me==null?void 0:me.specialization})`}));Z(je)}},500),[x]),T.useEffect(()=>{var P;Re!=null&&Re.id&&((P=Re==null?void 0:Re.client)!=null&&P.id)&&(async(be,je)=>{var sn;const me=await x(ix({user_id:be,client_id:je}));K((sn=me==null?void 0:me.payload)==null?void 0:sn.data)})(Re.id,Re.client.id)},[Re,x]),T.useEffect(()=>{if(!(se!=null&&se.id)||!["virtual_consultation","opd_consultation"].includes(ze)){Ue({});return}(async()=>{var be,je,me;const G=await x($x({id:se.id,payload:{filters:{}}}));G!=null&&G.error?mr.error(((be=G==null?void 0:G.error)==null?void 0:be.message)||"Unknown Error Occurred"):Ue(((me=(je=G==null?void 0:G.payload)==null?void 0:je.data)==null?void 0:me.doctorDetails)||{})})()},[se,ze,x]),T.useEffect(()=>{x(Ac({type:ze||"",test_type:["ctmri","diagnostic"].includes(Ce||"")?Ce||"":void 0}))},[o,ze,Ce,x]),T.useEffect(()=>{we("")},[Tn]);const st=async P=>{var je;if(!P)return;const G=await x(cx(P)),be=(je=G==null?void 0:G.payload)==null?void 0:je.url;be&&(be.startsWith("http://")||be.startsWith("https://"))?window.open(be,"_blank"):mr.error("Could not retrieve file URL.")},_t=async(P,G)=>{var sn;const je={status:P,comment:G,bookingIds:Fn?[yn]:[_==null?void 0:_.id]},me=await x(Ic(je));me!=null&&me.error?mr.error(((sn=me==null?void 0:me.error)==null?void 0:sn.message)||"Status update failed"):(mr.success("Status Updated Successfully"),C(),E(),s()),_n(""),we(""),Wn(!1),he("")},bn=async P=>{var be,je;if(!P)return;const G=await x(lx({id:_==null?void 0:_.id,body:{payment_proof:P}}));(be=G==null?void 0:G.payload)!=null&&be.success?(mr.success("Payment Proof uploaded successfully!"),In(null),_t("open","Payment proof updated")):mr.error(((je=G==null?void 0:G.payload)==null?void 0:je.error)||"Something went wrong")};return r.jsx("div",{children:r.jsxs("div",{className:"bg-white rounded-lg shadow-sm !p-3 flex flex-col gap-3",children:[(ue==="payment_pending"||Me==="payment_pending")&&r.jsx(gt,{title:"Upload Payment Proof",children:Ye?r.jsxs("div",{className:"space-y-4",children:[r.jsx("img",{src:Ye,className:"rounded-lg w-full object-contain max-h-80",alt:"Payment proof preview"}),r.jsxs("div",{className:"flex justify-end space-x-3",children:[r.jsx("button",{onClick:()=>In(null),className:"px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50",children:"Cancel"}),r.jsx("button",{onClick:()=>bn(Ye),className:"px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700",children:"Submit and Set to Open"})]})]}):r.jsxs(Ux.Dragger,{accept:"image/*",showUploadList:!1,customRequest:async({file:P,onSuccess:G})=>{const be=await ke(P,Re==null?void 0:Re.id);In(be),G&&G("ok")},className:"bg-gray-50",children:[r.jsx("p",{className:"ant-upload-drag-icon",children:r.jsx(Dx,{className:"text-4xl text-gray-400"})}),r.jsx("p",{className:"ant-upload-text",children:"Click or drag image to this area to upload"}),r.jsx("p",{className:"ant-upload-hint",children:"Upload a receipt or screenshot of the payment."})]})}),(o==null?void 0:o.payment_proof)&&r.jsx(gt,{title:"View Payment Proof",isOpen:oe,toggleOpen:()=>on(!oe),children:oe&&r.jsx("img",{src:o.payment_proof,className:"rounded-lg w-full object-contain max-h-96",alt:"Uploaded payment proof"})}),((Xe=_==null?void 0:_.relatedBookings)==null?void 0:Xe.length)>0&&r.jsx(gt,{title:"Related Bookings",children:r.jsx("div",{className:"space-y-4",children:_.relatedBookings.map((P,G)=>{var be;return r.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-md",children:[r.jsxs("p",{onClick:()=>w(`/bookings?bkId=${P==null?void 0:P.id}`),className:"font-medium text-indigo-600 hover:text-indigo-800 cursor-pointer mb-2 sm:mb-0",children:["Booking ",G+1,": ",P==null?void 0:P.id]}),r.jsx(Rr,{showSearch:!0,style:{width:"100%",minWidth:"200px"},className:"sm:w-auto",placeholder:"Update Status",value:Un[P==null?void 0:P.id]||(P==null?void 0:P.status),onChange:je=>{nn(me=>({...me,[P==null?void 0:P.id]:je})),we(je),Wn(!0),he(P==null?void 0:P.id)},options:(be=un==null?void 0:un.bookingStatuses)==null?void 0:be.map(je=>({value:je.id,label:je.name})),filterOption:(je,me)=>((me==null?void 0:me.label)??"").toLowerCase().includes(je.toLowerCase())})]},P.id)})})}),(Ve==null?void 0:Ve.id)&&((o==null?void 0:o.type)==="virtual_consultation"||(o==null?void 0:o.type)==="opd_consultation")&&r.jsx(gt,{title:"Assigned Doctor",children:r.jsx(fg,{item:Ve,origin:"self",selectedBooking:_,DoctorBookingReviewProp:()=>{},DoctorChatProp:()=>{},DoctorBookConsultProp:()=>{}})}),r.jsxs(gt,{title:"Booking & Patient Details",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700",children:[r.jsx(Zt,{label:"Scheduled Date",value:o.collection_1_date?new Intl.DateTimeFormat("en-US",{dateStyle:"full"}).format(new Date((Hn=(fn=o.collection_1_date)==null?void 0:fn.split)==null?void 0:Hn.call(fn,"/").reverse().join("-"))):"N/A"}),r.jsx(Zt,{label:"Scheduled Slot",value:o.collection_1_slot||"N/A"}),r.jsx(Zt,{label:"Booking Amount",value:_!=null&&_.amount?`₹${_.amount}`:"N/A"}),r.jsx(Zt,{label:"Payment Method",value:(_==null?void 0:_.paymentMode)||"Online Payment"})]}),ze!=="package_booking"&&r.jsxs("div",{className:"mt-4 pt-4 border-t",children:[r.jsx("h6",{className:"font-semibold text-gray-800 mb-2",children:"Employee Issues"}),r.jsx("p",{className:"text-sm text-gray-600 whitespace-pre-wrap",children:o!=null&&o.patient_comment?o.patient_comment.replace(/Past Issues\s*:-/g,"Past Issues :-").replace(/Present Issues\s*:-/g,`
Present Issues :-`):"N/A"})]})]}),r.jsx(hg,{bkDetails:o,userWalletDetails:U,fetchBookingDetails:s}),(Se==null?void 0:Se.length)>0&&r.jsx(Ai,{title:"Medicines",items:Se.map(P=>`${P==null?void 0:P.service_name} x ${P==null?void 0:P.count}`)}),(Qn==null?void 0:Qn.length)>0&&r.jsx(Ai,{title:"Products",items:Qn.map(P=>{var G;return`${P==null?void 0:P.name} (Cost: ${((G=P==null?void 0:P.price)==null?void 0:G.actual_cost)||"N/A"})`})}),(dn==null?void 0:dn.length)>0&&Ce==="diagnostic"&&r.jsx(Ai,{title:"Tests",items:dn.map(P=>{var G;return`${P==null?void 0:P.service_name} (Cost: ${(G=P==null?void 0:P.price)==null?void 0:G.actual_cost})`})}),(De==null?void 0:De.service_name)&&r.jsx(Ai,{title:"Test",items:[`${De.service_name} (Cost: ${(lt=De==null?void 0:De.price)==null?void 0:lt.actual_cost})`]}),(He==null?void 0:He.service_name)&&r.jsxs(gt,{title:"Package Details",children:[r.jsx(Zt,{label:"Name",value:He.service_name}),r.jsx(Zt,{label:"Visit Type",value:He.visit_type??"N/A"}),r.jsx(Zt,{label:"Cost",value:(En=He.price)==null?void 0:En.actual_cost}),(He==null?void 0:He.service_code)&&r.jsx(mg,{packageCode:He.service_code})]}),r.jsx(gt,{title:"Attachments & Reports",children:r.jsxs("div",{className:"space-y-4",children:[(ee==null?void 0:ee.length)===0&&r.jsx("span",{className:"text-sm text-gray-500",children:"No attachments available."}),r.jsxs("div",{className:"space-y-2",children:[ee==null?void 0:ee.map(P=>{var G;return r.jsx("div",{className:"flex items-center justify-between p-2.5 bg-white border rounded-md hover:bg-gray-50",children:r.jsx("span",{className:"font-medium text-indigo-600 cursor-pointer hover:underline",onClick:()=>st(P==null?void 0:P.id),children:((G=P.url)==null?void 0:G.split("/").pop())||"View Report"})},P.id)}),ee==null?void 0:ee.map(P=>P.doctor_prescription_url&&r.jsx("div",{className:"flex items-center justify-between p-2.5 bg-white border rounded-md hover:bg-gray-50",children:r.jsx("span",{className:"font-medium text-indigo-600 cursor-pointer hover:underline",onClick:()=>window.open(P.doctor_prescription_url,"_blank"),children:"Doctor's Prescription"})},`presc-${P.id}`))]})]})}),r.jsx(gt,{title:"Order Summary",children:r.jsxs("div",{className:"space-y-2 text-sm",children:[r.jsxs("div",{className:"flex justify-between items-center",children:[r.jsx("span",{className:"text-gray-600",children:"Item Total"}),r.jsxs("span",{className:"font-semibold text-gray-800",children:["₹",xe??0]})]}),(Dn==null?void 0:Dn.amount_used)&&r.jsxs("div",{className:"flex justify-between items-center text-green-600",children:[r.jsx("span",{children:"Wallet Credit Used"}),r.jsxs("span",{children:["- ₹",Dn.amount_used]})]})]})})]})})},gt=({title:o,children:d,isOpen:s,toggleOpen:_})=>r.jsxs("div",{className:"p-2 sm:p-4 border rounded-lg bg-white",children:[r.jsxs("div",{className:`flex justify-between items-center ${_?"cursor-pointer":""}`,onClick:_,children:[r.jsx("h5",{className:"text-lg font-semibold text-gray-800",children:o}),_&&(s?r.jsx(ax,{className:"text-gray-600"}):r.jsx(sx,{className:"text-gray-600"}))]}),(!_||s)&&r.jsx("div",{className:"mt-4",children:d})]}),Ai=({title:o,items:d})=>r.jsx(gt,{title:o,children:r.jsx("ul",{className:"space-y-2 list-disc list-inside",children:d.map((s,_)=>r.jsx("li",{className:"text-sm text-gray-600",children:s},_))})}),Zt=({label:o,value:d,isLink:s=!1})=>r.jsxs("div",{children:[r.jsx("p",{className:"font-semibold text-gray-600",children:o}),s?r.jsx("p",{className:"text-indigo-600 cursor-pointer",children:d}):r.jsx("p",{className:"text-gray-800",children:d})]});function xg({packageCode:o}){const[d,s]=T.useState([]),[_,C]=T.useState(!1),E=Jt(),x=T.useCallback(async()=>{var w,z,ce;try{const q=await E(ox({service_code:o}));s(((ce=(z=(w=q==null?void 0:q.payload)==null?void 0:w.data)==null?void 0:z.package)==null?void 0:ce.tests)||[])}catch(q){console.error("Error fetching package details:",q)}},[E,o]);return T.useEffect(()=>{x()},[x]),r.jsxs("div",{className:"border-t mt-4 pt-4",children:[r.jsxs("button",{onClick:()=>C(!_),className:"w-full flex justify-between items-center text-left font-semibold text-gray-700 hover:bg-gray-50 p-2 rounded-md",children:[r.jsx("span",{children:"View Available Tests"}),_?r.jsx(ux,{}):r.jsx(dx,{})]}),_&&r.jsx("div",{className:"mt-2 overflow-x-auto",children:d.length>0?r.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[r.jsx("thead",{className:"bg-gray-50",children:r.jsxs("tr",{children:[r.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Service Code"}),r.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Service Name"})]})}),r.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:d.map((w,z)=>r.jsxs("tr",{children:[r.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:w==null?void 0:w.service_code}),r.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:w==null?void 0:w.service_name})]},z))})]}):r.jsx("p",{className:"text-sm text-gray-500 p-4",children:"No tests available for this package."})})]})}const gg=T.memo(pg);function wc(o){return Xa({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.4 27.43c-27.9.47-53.1 17.11-64.5 42.84l136.5 41.23c6-35.79-15.5-70.49-50.1-81.02-6.2-1.88-12.7-2.91-19.2-3.05h-2.7zm-69.7 60.08c-6.1 35.89 15.4 70.69 50.1 81.19 34.8 10.5 71.9-6.7 86.5-40zm265.5 44.29c-25.3.1-52.2 12.3-72.5 41L215.9 349.7c-33.5 47.4-18.9 97 14.1 120.4 33.1 23.5 84.6 20.8 118.1-26.6l124.7-176.8c33.5-47.5 18.9-97-14.1-120.5-12.4-8.8-27.3-13.9-43-14.4zm-1.8 17.3c1.3 0 2.6 0 3.8.1 12.1.5 23.5 4.8 33.1 11.7 25.7 18.2 38.6 54.5 9.7 95.4l-64.5 91.5c-35.8-9.6-81.8-42.3-102.7-73l64.7-91.6c16.9-23.9 37-33.7 55.9-34.1zM91.25 225.3c-9.62.1-19.11 2.1-27.93 6-33.11 14.5-50.34 51.5-40.24 86.3l130.72-57.1c-13.1-22.1-36.9-35.5-62.55-35.2zm69.65 51.6L30.2 334.1c18.45 31.4 57.3 44 90.6 29.5 33.2-14.6 50.4-51.8 40.1-86.7z"},child:[]}]})(o)}const vg=({modalData:o,formData:d,setFormData:s})=>{var F,re,fe,U,K,Q,O,X,Z,Ee,R,Me,we,oe,on,zn,_n,Fn,Wn,yn,he,Un,nn,Ye,In,Ve,Ue,un,ke,Tn,ue,xe,ee,se,Se,De,Ce,dn,Dn,ze,He,Qn,Re,st,_t,bn,Xe,fn,Hn,lt,En,P,G,be,je,me,sn,yt,bt,wt,jt,Nt,St,Qt,Vt,zt,Ct,Ft,kt;const _=Ei();Cc(L=>L.auth.isRaphaPlus);const C=Jt();fx();const[E,x]=T.useState([]),[w,z]=T.useState(),[ce,q]=T.useState(!1);return T.useEffect(()=>{hx()&&q(!0)},[]),T.useEffect(()=>{(async()=>{var h,g,v;try{const A=await C(mx(o==null?void 0:o.type));if(A!=null&&A.error){vn.error(((h=A==null?void 0:A.error)==null?void 0:h.message)??"unknown error occured");return}else x((v=(g=A==null?void 0:A.payload)==null?void 0:g.data)==null?void 0:v.bookingStatuses)}catch{vn.error("unexpected error")}})()},[C,o]),T.useEffect(()=>{(async()=>{var h;try{const g=await C(Rc(o==null?void 0:o.id));if(g!=null&&g.error){vn.error(((h=g==null?void 0:g.error)==null?void 0:h.message)??"unknown error occured");return}z(g==null?void 0:g.payload)}catch{vn.error("unexpected error")}})()},[C,o]),r.jsxs("div",{className:"bkContent",children:[r.jsx("div",{className:"flex flex-wrap gap-2",children:r.jsx(qx,{md:3,children:r.jsxs("div",{onClick:()=>{var L;return _(`/employees/detail/${(L=o==null?void 0:o.user)==null?void 0:L.id}`)},className:"flex items-center h-full gap-1",children:[r.jsx("img",{className:"w-[1.1rem] h-[1.3rem]",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738069041150.png",alt:"rx-icon"}),r.jsx("p",{className:"m-0 cursor-pointer view-prescription-text",children:"View Past Prescriptions"})]})})}),((F=o==null?void 0:o.package)==null?void 0:F.service_code)&&r.jsx(Ga,{className:"p-4",children:r.jsxs("div",{className:"space-y-3 w-full",children:[r.jsxs("h4",{className:"text-sm font-medium text-gray-900 flex items-center gap-2",children:[r.jsx(sg,{className:"mr-2 text-blue-600",size:25}),"Lab Package Details"]}),r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{children:[r.jsx("span",{className:"text-xs font-medium text-gray-500",children:"Service Code"}),r.jsx("p",{className:"text-sm text-gray-900 font-medium",children:((re=o==null?void 0:o.package)==null?void 0:re.service_code)||"N/A"})]}),r.jsxs("div",{children:[r.jsx("span",{className:"text-xs font-medium text-gray-500",children:"Service Name"}),r.jsx("p",{className:"text-sm text-gray-900",children:((fe=o==null?void 0:o.package)==null?void 0:fe.service_name)||"N/A"})]})]}),((K=(U=o==null?void 0:o.package)==null?void 0:U.image)==null?void 0:K.length)>0&&r.jsx("div",{className:"flex justify-center",children:r.jsx("div",{className:"relative w-30 h-30 rounded-md overflow-hidden border border-gray-200",children:r.jsx("img",{src:o.package.image[0],alt:"Lab package",className:"w-full h-full object-cover",onError:L=>{L.target.src="https://placehold.co/70"}})})})]})]})}),((Q=o==null?void 0:o.medicines)==null?void 0:Q.length)>0&&r.jsx(Ga,{className:"p-4 gap-4",children:r.jsxs("div",{className:"space-y-3 w-full flex flex-col gap-2",children:[r.jsxs("h4",{className:"text-sm font-medium text-gray-900 flex items-center gap-2",children:[r.jsx(wc,{className:"mr-2 text-blue-600",size:25}),"Medicine Details"]}),(O=o==null?void 0:o.medicines)==null?void 0:O.map((L,h)=>{var g;return r.jsxs("div",{className:"grid grid-cols-2 gap-4 pb-2 border-b",children:[r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{children:[r.jsx("span",{className:"text-xs font-medium text-gray-500",children:"Service Code"}),r.jsx("p",{className:"text-sm text-gray-900 font-medium",children:(L==null?void 0:L.service_code)||"N/A"})]}),r.jsxs("div",{children:[r.jsx("span",{className:"text-xs font-medium text-gray-500",children:"Service Name"}),r.jsx("p",{className:"text-sm text-gray-900",children:(L==null?void 0:L.service_name)||"N/A"})]})]}),((g=L==null?void 0:L.image)==null?void 0:g.length)>0&&r.jsx("div",{className:"flex justify-center",children:r.jsx("div",{className:"relative w-30 h-30 rounded-md overflow-hidden border border-gray-200",children:r.jsx("img",{src:L==null?void 0:L.image[0],alt:"Lab package",className:"w-full h-full object-cover",onError:v=>{v.target.src="https://placehold.co/70"}})})})]},h)})]})}),((X=o==null?void 0:o.tests)==null?void 0:X.length)>0&&r.jsx(Ga,{className:"p-4 gap-4",children:r.jsxs("div",{className:"space-y-3 w-full flex flex-col gap-2",children:[r.jsxs("h4",{className:"text-sm font-medium text-gray-900 flex items-center gap-2",children:[r.jsx(wc,{className:"mr-2 text-blue-600",size:25}),"Tests Details"]}),(Z=o==null?void 0:o.tests)==null?void 0:Z.map((L,h)=>{var g;return r.jsxs("div",{className:"grid grid-cols-2 gap-4 pb-2 border-b",children:[r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{children:[r.jsx("span",{className:"text-xs font-medium text-gray-500",children:"Service Code"}),r.jsx("p",{className:"text-sm text-gray-900 font-medium",children:(L==null?void 0:L.service_code)||"N/A"})]}),r.jsxs("div",{children:[r.jsx("span",{className:"text-xs font-medium text-gray-500",children:"Service Name"}),r.jsx("p",{className:"text-sm text-gray-900",children:(L==null?void 0:L.service_name)||"N/A"})]})]}),((g=L==null?void 0:L.image)==null?void 0:g.length)>0&&r.jsx("div",{className:"flex justify-center",children:r.jsx("div",{className:"relative w-30 h-30 rounded-md overflow-hidden border border-gray-200",children:r.jsx("img",{src:L==null?void 0:L.image[0],alt:"Lab package",className:"w-full h-full object-cover",onError:v=>{v.target.src="https://placehold.co/70"}})})})]},h)})]})}),((Ee=w==null?void 0:w.attachments)==null?void 0:Ee.length)>0&&r.jsx("div",{className:"flex flex-wrap",children:r.jsx("div",{className:"appointment-history-container",children:r.jsx("div",{className:"appointments",children:r.jsxs("div",{className:"appointment-card",children:[r.jsxs("div",{className:"summary max-[600px]:!items-start",children:[r.jsxs("div",{className:"left-panel",children:[r.jsxs("div",{className:"date-box",children:[r.jsx("span",{className:"date",children:Ha(w==null?void 0:w.collection_1_date,"DD/MM/YYYY").format("DD")}),r.jsx("span",{className:"month",children:Ha(w==null?void 0:w.collection_1_date,"DD/MM/YYYY").format("MMM")})]}),r.jsx("h3",{children:Bt(w==null?void 0:w.type)})]}),ce?r.jsx("div",{className:"detail",children:r.jsx("div",{className:"extra-details",children:r.jsxs("p",{children:["Diagnosis :"," ",((je=(be=w==null?void 0:w.attachments)==null?void 0:be[0])==null?void 0:je.symptoms)??"no diagnosis added"]})})}):r.jsxs("div",{className:"details max-[600px]:flex-col",children:[r.jsxs("div",{className:"info",children:[r.jsx("strong",{children:"Diagnosis:"}),r.jsxs("ul",{children:[(Me=(R=w==null?void 0:w.attachments)==null?void 0:R[0])!=null&&Me.symptoms?(_n=(zn=(on=(oe=(we=w==null?void 0:w.attachments)==null?void 0:we[0])==null?void 0:oe.symptoms)==null?void 0:on.split(","))==null?void 0:zn.slice(0,3))==null?void 0:_n.map((L,h)=>r.jsx("li",{children:r.jsx("p",{className:"truncate m-0",children:L})},h)):r.jsx("li",{children:r.jsx("p",{className:"m-0",children:"No diagnosis added"})}),((he=(yn=(Wn=(Fn=w==null?void 0:w.attachments)==null?void 0:Fn[0])==null?void 0:Wn.symptoms)==null?void 0:yn.split(","))==null?void 0:he.length)>3&&r.jsxs("span",{className:"cursor-pointer",onClick:()=>q(!0),children:["+",((In=(Ye=(nn=(Un=w==null?void 0:w.attachments)==null?void 0:Un[0])==null?void 0:nn.symptoms)==null?void 0:Ye.split(","))==null?void 0:In.length)-3," ","more"]})]})]}),r.jsxs("div",{className:"info",children:[r.jsx("strong",{children:"Lab Test:"}),r.jsxs("ul",{children:[((un=(Ue=(Ve=w==null?void 0:w.attachments)==null?void 0:Ve[0])==null?void 0:Ue.prescriptions_tests)==null?void 0:un.length)>0?(ee=(xe=(ue=(Tn=(ke=w==null?void 0:w.attachments)==null?void 0:ke[0])==null?void 0:Tn.prescriptions_tests)==null?void 0:ue.slice(0,3))==null?void 0:xe.map)==null?void 0:ee.call(xe,(L,h)=>{var g;return r.jsx("li",{children:r.jsx("p",{className:"truncate m-0 max-w-full",children:(g=L==null?void 0:L.test)==null?void 0:g.service_name})},h)}):r.jsx("li",{children:r.jsx("p",{className:"m-0",children:"No lab tests added"})}),((De=(Se=(se=w==null?void 0:w.attachments)==null?void 0:se[0])==null?void 0:Se.prescriptions_tests)==null?void 0:De.length)>3&&r.jsxs("span",{className:"cursor-pointer",onClick:()=>q(!0),children:["+",((Dn=(dn=(Ce=w==null?void 0:w.attachments)==null?void 0:Ce[0])==null?void 0:dn.prescriptions_tests)==null?void 0:Dn.length)-3," ","more"]})]})]}),r.jsxs("div",{className:"info",children:[r.jsx("strong",{children:"Medicine:"}),r.jsxs("ul",{children:[((Qn=(He=(ze=w==null?void 0:w.attachments)==null?void 0:ze[0])==null?void 0:He.prescriptions_medicines)==null?void 0:Qn.length)>0?(Xe=(bn=(_t=(st=(Re=w==null?void 0:w.attachments)==null?void 0:Re[0])==null?void 0:st.prescriptions_medicines)==null?void 0:_t.slice(0,3))==null?void 0:bn.map)==null?void 0:Xe.call(bn,(L,h)=>{var g;return r.jsx("li",{children:r.jsx("p",{className:"m-0 truncate",children:(g=L==null?void 0:L.medicine)==null?void 0:g.service_name})},h)}):r.jsx("li",{children:r.jsx("p",{className:"m-0",children:"No medicines added"})}),((lt=(Hn=(fn=w==null?void 0:w.attachments)==null?void 0:fn[0])==null?void 0:Hn.prescriptions_medicines)==null?void 0:lt.length)>3&&r.jsxs("span",{className:"cursor-pointer",onClick:()=>q(!0),children:["+",((G=(P=(En=w==null?void 0:w.attachments)==null?void 0:En[0])==null?void 0:P.prescriptions_medicines)==null?void 0:G.length)-3," ","more"]})]})]})]}),r.jsx("div",{className:"plus-button",children:r.jsx("button",{className:"expand-btn",onClick:()=>q(L=>!L),children:ce?r.jsx(Hx,{}):r.jsx(Gx,{})})})]}),ce&&r.jsxs("div",{className:"expanded-section",children:[r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"table-1",children:[r.jsx("thead",{children:r.jsxs("tr",{className:"table-header",children:[r.jsx("th",{children:"#"}),r.jsx("th",{children:"Test Required"}),r.jsx("th",{children:"Notes"})]})}),r.jsx("tbody",{children:((yt=(sn=(me=w==null?void 0:w.attachments)==null?void 0:me[0])==null?void 0:sn.prescriptions_tests)==null?void 0:yt.length)>0?(jt=(wt=(bt=w==null?void 0:w.attachments)==null?void 0:bt[0])==null?void 0:wt.prescriptions_tests)==null?void 0:jt.map((L,h)=>{var g;return r.jsxs("tr",{children:[r.jsx("td",{children:h+1}),r.jsx("td",{children:(g=L==null?void 0:L.test)==null?void 0:g.service_name}),r.jsx("td",{children:"N/A"})]},h)}):r.jsx("tr",{children:r.jsx("td",{colSpan:3,className:"text-center",children:"No tests added"})})})]})}),r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"table-2 ",children:[r.jsx("thead",{children:r.jsxs("tr",{className:"table-header",children:[r.jsx("th",{children:"#"}),r.jsx("th",{children:"Medicine"}),r.jsx("th",{children:"Dosage"}),r.jsx("th",{children:"Timing"}),r.jsx("th",{children:"Start Date"}),r.jsx("th",{children:"Duration"})]})}),r.jsx("tbody",{children:((Qt=(St=(Nt=w==null?void 0:w.attachments)==null?void 0:Nt[0])==null?void 0:St.prescriptions_medicines)==null?void 0:Qt.length)>0?(Ct=(zt=(Vt=w==null?void 0:w.attachments)==null?void 0:Vt[0])==null?void 0:zt.prescriptions_medicines)==null?void 0:Ct.map((L,h)=>{var g;return r.jsxs("tr",{children:[r.jsx("td",{children:h+1}),r.jsx("td",{children:(g=L==null?void 0:L.medicine)==null?void 0:g.service_name}),r.jsx("td",{children:L==null?void 0:L.frequency}),r.jsx("td",{children:L==null?void 0:L.intake}),r.jsx("td",{children:Ha(L==null?void 0:L.start_date).format("DD-MM-YYYY")}),r.jsx("td",{children:L==null?void 0:L.no_of_days})]},h)}):r.jsx("tr",{children:r.jsx("td",{colSpan:6,className:"text-center",children:"No medicines added"})})})]})}),r.jsxs("div",{className:"advice",children:[r.jsx("p",{className:"p1",children:"Advice"}),r.jsx("p",{className:"p2",children:((kt=(Ft=w==null?void 0:w.attachments)==null?void 0:Ft[0])==null?void 0:kt.note)??"no advice added"})]})]})]})})})})]})},{Text:Ya,Paragraph:Ii}=Xx,_g=({additionalInfo:o={}})=>{const{communicationLogs:d}=o||{},s=C=>{switch(C==null?void 0:C.toLowerCase()){case"sms":return"blue";case"whatsapp":return"green";case"email":return"purple";default:return"default"}},_=C=>{let E;return(C==null?void 0:C.type)==="user"||(C==null?void 0:C.type)==="doctor"?E=d.filter(x=>(x==null?void 0:x.role)===(C==null?void 0:C.type)):E=d.filter(x=>(x==null?void 0:x.role)!=="user"&&(x==null?void 0:x.role)!=="doctor"),!E||E.length===0?r.jsx("div",{className:"flex justify-center items-center h-48",children:r.jsx(_c,{description:`No logs available for ${C==null?void 0:C.type}`})}):r.jsx("div",{className:"mt-3",children:r.jsx(Oc,{items:E.map((x,w)=>{var z;return{dot:r.jsx(px,{size:15,color:"#45A834"}),children:r.jsxs(Kx,{className:"mb-4 shadow-sm hover:shadow-md transition-shadow duration-300",children:[r.jsxs("div",{className:"flex justify-between items-start",children:[r.jsxs("div",{children:[r.jsx(Ii,{className:"font-semibold text-base",children:r.jsx(Ya,{strong:!0,children:x.template_id})}),r.jsxs(Ii,{type:"secondary",children:["Sent to: ",r.jsx(Ya,{strong:!0,children:x.to})]})]}),r.jsx(Zx,{color:s(x.type),children:(z=x.type)==null?void 0:z.toUpperCase()})]}),r.jsxs("div",{className:"mt-2",children:[r.jsxs(Ii,{className:"text-sm text-gray-500 flex items-center",children:[r.jsx(Bx,{className:"mr-2"}),new Date(x.created_at).toLocaleString()]}),r.jsxs(Ii,{className:"text-sm text-gray-500",children:["Role: ",r.jsx(Ya,{code:!0,children:x==null?void 0:x.role})]})]})]},w)}})})})};return r.jsx("div",{children:(d==null?void 0:d.length)>0?r.jsx("div",{children:r.jsx(Pc,{tabs:[{label:"Patient",value:"1",children:r.jsx(_,{type:"user"})}]})}):r.jsx("div",{className:"flex justify-center items-center h-64",children:r.jsx(_c,{description:"No Communication Logs Available"})})})},yg=({additionalInfo:o={}})=>{const{bookingComments:d}=o||{},s=_=>{switch(_==null?void 0:_.toLowerCase()){case"appointment_booked":return"bg-green-100 text-green-800";case"completed":return"bg-blue-100 text-blue-800";case"cancelled":return"bg-red-100 text-red-800";case"pending":return"bg-yellow-100 text-yellow-800";default:return"bg-gray-100 text-gray-800"}};return r.jsxs("div",{className:"communication-card",children:[r.jsx("div",{className:"card-header",children:r.jsxs("h3",{children:[r.jsx(xx,{style:{marginRight:"8px"}}),"Booking Comments"]})}),r.jsx("div",{className:"card-content",children:((d==null?void 0:d.length)??0)>0?r.jsx("div",{className:"comments-table",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Date"}),r.jsx("th",{children:"Comments"})]})}),r.jsx("tbody",{children:(d??[]).map((_,C)=>{var E,x,w,z,ce;return r.jsxs("tr",{children:[r.jsx("td",{children:r.jsxs("div",{className:"user-info",children:[r.jsx(Tc,{}),`${((E=_==null?void 0:_.user)==null?void 0:E.first_name)||""} ${((x=_==null?void 0:_.user)==null?void 0:x.last_name)||""}`.trim()||"Unknown"]})}),r.jsx("td",{children:r.jsx("span",{className:`status-tag ${s(((w=_==null?void 0:_.additional_info)==null?void 0:w.status)||"")}`,children:((ce=(z=_==null?void 0:_.additional_info)==null?void 0:z.status)==null?void 0:ce.replaceAll("_"," "))||"N/A"})}),r.jsx("td",{children:new Date(_==null?void 0:_.created_at).toLocaleString()}),r.jsx("td",{children:(_==null?void 0:_.comment)||"No comment"})]},C)})})]})}):r.jsx("div",{className:"no-data",children:r.jsx("p",{children:"No Communication Logs Available"})})})]})},Mr=Ka.div`
  font-family: "Outfit", "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .userInfo {
    display: grid;
    grid-template-columns: 1fr 2fr 1.5fr 3fr;
    grid-gap: 1rem;
    padding: 3rem 1rem;
    position: relative;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .order-section {
    padding: 10px;
    border: 1px solid #ccc;
    /* max-height: 300px;
    overflow-y: scroll; */
    border-radius: 15px;
  }

  .prescriptionTable {
    padding: 0px;
  }

  .action-icons {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    svg {
      cursor: pointer;
      color: #666;
      transition: color 0.2s;

      &:hover {
        color: #333;
      }
    }
  }
  p {
    margin-bottom: 0;
    font-weight: 500;
  }
  img {
    border-radius: 50%;
  }
  .font-bold {
    font-weight: 600;
  }
  .bkInfoGrid {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    p {
      max-height: 1rem;
    }
  }

  .table-name {
    font-weight: 600;
    font-size: 1.2rem;
    max-height: 40px;
    height: 40px;
    p {
      font-size: 1rem;
    }
    margin-bottom: 0.5rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    img {
      border-radius: 0;
      width: 1.5rem;
    }

    .edit-button {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-left: auto;
      padding: 6px 12px;
      background-color: #fff;
      border: 1px solid #262c62;
      color: #262c62;
      border-radius: 20px;
      cursor: pointer;
      font-size: 0.85rem;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #1e2350;
        color: #fff;
        svg {
          color: #fff;
        }
      }

      svg {
        color: #262c62;
      }
    }
  }
  .order-summary {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .summary {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    .summary-row {
      font-weight: 400;
      font-size: 1rem;
    }
    .summary-bold {
      font-weight: 600;
      font-size: 1rem;
    }
  }
  .raphacureAssuredPrice {
    .wrapper {
      background: #a3dac226;
      padding: 1rem;
      border-radius: 10px;
    }
    .ant-table-content {
      table {
        thead {
          tr {
            th.ant-table-cell {
              background: #fcf6db;
            }
          }
        }
      }
    }
  }

  .tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    background: #e9f2fd;
    padding: 0.5rem;
    border-radius: 10px;
  }

  .tab-btn {
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    background-color: #e9f2fd;
    transition: background-color 0.3s ease;
  }

  .tab-btn.active {
    background-color: #fff;
  }
  .ant-switch.ant-switch-checked {
    background-color: #262c62;
  }
  .ant-switch.ant-switch-checked:hover {
    background-color: #262c62;
  }

  .test-details-sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
    height: 100%;
    background: white;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease-out;
    padding: 20px;
    overflow-y: auto;

    &.visible {
      transform: translateX(0);
    }

    .sidebar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;

      button {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
      }
    }

    .test-item {
      padding: 10px 0;
      /* border-bottom: 1px solid #f5f5f5; */
    }
  }

  .test-info-icon {
    color: #262c62;
    cursor: pointer;
    margin-left: 5px;

    &:hover {
      opacity: 0.8;
    }
  }

  .text-decoration-line-through {
    text-decoration: line-through;
  }

  .editResetBtn {
    border: 1px solid #262c62;
    color: #262c62;
    padding: 0.5rem 1rem;
    border-radius: 20px;
  }

  .text-underline {
    text-decoration: underline;
  }

  .place-order-btn {
    width: fit-content;
    border: 1px solid #fff;
    padding: 10px 20px;
    border-radius: 25px !important;
    background: #252b61;
    color: #fff;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
    margin-left: auto;
    /* margin-top: 0.5rem; */
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .selectedOption {
    display: flex;
    flex-direction: row;
    gap: 4rem;
  }
  /* Prescription Card Styles */
  .prescription-card {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    font-family: "Outfit", "Inter", sans-serif;
  }

  .prescription-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 16px; */
    padding: 20px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  .headerBlue {
    background-color: #e9f2fd;
  }
  .headerYellow {
    background-color: #fcf6db;
  }

  .prescription-title {
    font-size: 24px;
    font-weight: 600;
    color: #333;
  }

  .prescription-number {
    font-size: 28px;
    font-weight: 700;
    color: #000;
  }

  .prescription-doctor-name {
    font-size: 20px;
    font-weight: 600;
    color: #262c62;
    /* margin-bottom: 8px; */
    padding: 5px 20px;
  }

  .prescription-datetime {
    font-size: 18px;
    color: #555;
    /* margin-bottom: 16px; */
    padding: 5px 20px;
  }

  .prescription-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    /* border-bottom: 1px solid #e0e0e0; */
    /* margin-bottom: 16px; */
    padding: 5px 20px;
  }

  .prescription-count {
    font-size: 16px;
    font-weight: 500;
  }

  .prescription-price {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .mrp {
    text-decoration: line-through;
    color: #777;
    font-size: 16px;
  }

  .discounted-price {
    font-size: 18px;
    font-weight: 600;
    color: #262c62;
  }

  .prescription-wallet {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 16px; */
    font-size: 16px;
    padding: 5px 20px;
  }

  .wallet-amount {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .view-details-btn {
    background: none;
    border: none;
    color: #262c62;
    text-decoration: underline;
    cursor: pointer;
    padding: 0;
    font-size: 14px;
  }

  .prescription-pending {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    padding: 5px 20px;
  }

  .pending-label {
    font-weight: 500;
  }

  .pending-amount {
    font-weight: 600;
    margin-right: auto;
    margin-left: 8px;
  }

  .wallet-cost-breakdown-table th,
  .wallet-cost-breakdown-table td {
    vertical-align: middle;
    padding: 0.5rem;
  }

  .wallet-cost-breakdown-table .header-doc,
  .wallet-cost-breakdown-table .cell-doc {
    background-color: #e7f3fe; /* Light blue background for Doctor Prescribed */
  }

  .wallet-cost-breakdown-table .header-rapha,
  .wallet-cost-breakdown-table .cell-rapha {
    background-color: #fff9e6; /* Light yellow background for Raphacure Assure */
  }

  .wallet-cost-breakdown-table thead th {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .wallet-cost-breakdown-table tbody td {
    font-size: 1rem;
  }

  .wallet-cost-breakdown-table .additional-amount-row td {
    border-top: 2px solid #dee2e6;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 1rem;
  }

  .font-weight-bold {
    font-weight: bold;
  }

  .text-right {
    text-align: right !important; /* Ensure override if needed */
  }

  .text-center {
    text-align: center !important; /* Ensure override if needed */
  }
`;function bg(o){return Xa({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"},child:[]}]})(o)}function wg(o){return Xa({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"},child:[]}]})(o)}var Er={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var jg=Er.exports,jc;function Ng(){return jc||(jc=1,(function(o,d){(function(){var s,_="4.17.21",C=200,E="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",x="Expected a function",w="Invalid `variable` option passed into `_.template`",z="__lodash_hash_undefined__",ce=500,q="__lodash_placeholder__",F=1,re=2,fe=4,U=1,K=2,Q=1,O=2,X=4,Z=8,Ee=16,R=32,Me=64,we=128,oe=256,on=512,zn=30,_n="...",Fn=800,Wn=16,yn=1,he=2,Un=3,nn=1/0,Ye=9007199254740991,In=17976931348623157e292,Ve=NaN,Ue=4294967295,un=Ue-1,ke=Ue>>>1,Tn=[["ary",we],["bind",Q],["bindKey",O],["curry",Z],["curryRight",Ee],["flip",on],["partial",R],["partialRight",Me],["rearg",oe]],ue="[object Arguments]",xe="[object Array]",ee="[object AsyncFunction]",se="[object Boolean]",Se="[object Date]",De="[object DOMException]",Ce="[object Error]",dn="[object Function]",Dn="[object GeneratorFunction]",ze="[object Map]",He="[object Number]",Qn="[object Null]",Re="[object Object]",st="[object Promise]",_t="[object Proxy]",bn="[object RegExp]",Xe="[object Set]",fn="[object String]",Hn="[object Symbol]",lt="[object Undefined]",En="[object WeakMap]",P="[object WeakSet]",G="[object ArrayBuffer]",be="[object DataView]",je="[object Float32Array]",me="[object Float64Array]",sn="[object Int8Array]",yt="[object Int16Array]",bt="[object Int32Array]",wt="[object Uint8Array]",jt="[object Uint8ClampedArray]",Nt="[object Uint16Array]",St="[object Uint32Array]",Qt=/\b__p \+= '';/g,Vt=/\b(__p \+=) '' \+/g,zt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ct=/&(?:amp|lt|gt|quot|#39);/g,Ft=/[&<>"']/g,kt=RegExp(Ct.source),L=RegExp(Ft.source),h=/<%-([\s\S]+?)%>/g,g=/<%([\s\S]+?)%>/g,v=/<%=([\s\S]+?)%>/g,A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,S=/^\w*$/,ie=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ve=/[\\^$.*+?()[\]{}|]/g,_e=RegExp(ve.source),V=/^\s+/,Ae=/\s/,hn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,D=/\{\n\/\* \[wrapped with (.+)\] \*/,wn=/,? & /,tn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ze=/[()=,{}\[\]\/\s]/,jn=/\\(\\)?/g,H=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ye=/\w*$/,Lr=/^[-+]0x[0-9a-f]+$/i,Or=/^0b[01]+$/i,$r=/^\[object .+?Constructor\]$/,zr=/^0o[0-7]+$/i,zc=/^(?:0|[1-9]\d*)$/,Fc=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Fr=/($^)/,Wc=/['\n\r\u2028\u2029\\]/g,Wr="\\ud800-\\udfff",Uc="\\u0300-\\u036f",Dc="\\ufe20-\\ufe2f",Hc="\\u20d0-\\u20ff",Za=Uc+Dc+Hc,Ba="\\u2700-\\u27bf",Ja="a-z\\xdf-\\xf6\\xf8-\\xff",Gc="\\xac\\xb1\\xd7\\xf7",qc="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Yc="\\u2000-\\u206f",Kc=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Qa="A-Z\\xc0-\\xd6\\xd8-\\xde",Va="\\ufe0e\\ufe0f",ka=Gc+qc+Yc+Kc,Pi="['’]",Xc="["+Wr+"]",es="["+ka+"]",Ur="["+Za+"]",ns="\\d+",Zc="["+Ba+"]",ts="["+Ja+"]",rs="[^"+Wr+ka+ns+Ba+Ja+Qa+"]",Mi="\\ud83c[\\udffb-\\udfff]",Bc="(?:"+Ur+"|"+Mi+")",is="[^"+Wr+"]",Li="(?:\\ud83c[\\udde6-\\uddff]){2}",Oi="[\\ud800-\\udbff][\\udc00-\\udfff]",er="["+Qa+"]",as="\\u200d",ss="(?:"+ts+"|"+rs+")",Jc="(?:"+er+"|"+rs+")",ls="(?:"+Pi+"(?:d|ll|m|re|s|t|ve))?",cs="(?:"+Pi+"(?:D|LL|M|RE|S|T|VE))?",os=Bc+"?",us="["+Va+"]?",Qc="(?:"+as+"(?:"+[is,Li,Oi].join("|")+")"+us+os+")*",Vc="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",kc="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ds=us+os+Qc,eo="(?:"+[Zc,Li,Oi].join("|")+")"+ds,no="(?:"+[is+Ur+"?",Ur,Li,Oi,Xc].join("|")+")",to=RegExp(Pi,"g"),ro=RegExp(Ur,"g"),$i=RegExp(Mi+"(?="+Mi+")|"+no+ds,"g"),io=RegExp([er+"?"+ts+"+"+ls+"(?="+[es,er,"$"].join("|")+")",Jc+"+"+cs+"(?="+[es,er+ss,"$"].join("|")+")",er+"?"+ss+"+"+ls,er+"+"+cs,kc,Vc,ns,eo].join("|"),"g"),ao=RegExp("["+as+Wr+Za+Va+"]"),so=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,lo=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],co=-1,Oe={};Oe[je]=Oe[me]=Oe[sn]=Oe[yt]=Oe[bt]=Oe[wt]=Oe[jt]=Oe[Nt]=Oe[St]=!0,Oe[ue]=Oe[xe]=Oe[G]=Oe[se]=Oe[be]=Oe[Se]=Oe[Ce]=Oe[dn]=Oe[ze]=Oe[He]=Oe[Re]=Oe[bn]=Oe[Xe]=Oe[fn]=Oe[En]=!1;var Le={};Le[ue]=Le[xe]=Le[G]=Le[be]=Le[se]=Le[Se]=Le[je]=Le[me]=Le[sn]=Le[yt]=Le[bt]=Le[ze]=Le[He]=Le[Re]=Le[bn]=Le[Xe]=Le[fn]=Le[Hn]=Le[wt]=Le[jt]=Le[Nt]=Le[St]=!0,Le[Ce]=Le[dn]=Le[En]=!1;var oo={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},uo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},fo={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},ho={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},mo=parseFloat,po=parseInt,fs=typeof Ci=="object"&&Ci&&Ci.Object===Object&&Ci,xo=typeof self=="object"&&self&&self.Object===Object&&self,rn=fs||xo||Function("return this")(),zi=d&&!d.nodeType&&d,Wt=zi&&!0&&o&&!o.nodeType&&o,hs=Wt&&Wt.exports===zi,Fi=hs&&fs.process,Gn=(function(){try{var m=Wt&&Wt.require&&Wt.require("util").types;return m||Fi&&Fi.binding&&Fi.binding("util")}catch{}})(),ms=Gn&&Gn.isArrayBuffer,ps=Gn&&Gn.isDate,xs=Gn&&Gn.isMap,gs=Gn&&Gn.isRegExp,vs=Gn&&Gn.isSet,_s=Gn&&Gn.isTypedArray;function Rn(m,b,y){switch(y.length){case 0:return m.call(b);case 1:return m.call(b,y[0]);case 2:return m.call(b,y[0],y[1]);case 3:return m.call(b,y[0],y[1],y[2])}return m.apply(b,y)}function go(m,b,y,$){for(var k=-1,Ne=m==null?0:m.length;++k<Ne;){var Be=m[k];b($,Be,y(Be),m)}return $}function qn(m,b){for(var y=-1,$=m==null?0:m.length;++y<$&&b(m[y],y,m)!==!1;);return m}function vo(m,b){for(var y=m==null?0:m.length;y--&&b(m[y],y,m)!==!1;);return m}function ys(m,b){for(var y=-1,$=m==null?0:m.length;++y<$;)if(!b(m[y],y,m))return!1;return!0}function At(m,b){for(var y=-1,$=m==null?0:m.length,k=0,Ne=[];++y<$;){var Be=m[y];b(Be,y,m)&&(Ne[k++]=Be)}return Ne}function Dr(m,b){var y=m==null?0:m.length;return!!y&&nr(m,b,0)>-1}function Wi(m,b,y){for(var $=-1,k=m==null?0:m.length;++$<k;)if(y(b,m[$]))return!0;return!1}function $e(m,b){for(var y=-1,$=m==null?0:m.length,k=Array($);++y<$;)k[y]=b(m[y],y,m);return k}function It(m,b){for(var y=-1,$=b.length,k=m.length;++y<$;)m[k+y]=b[y];return m}function Ui(m,b,y,$){var k=-1,Ne=m==null?0:m.length;for($&&Ne&&(y=m[++k]);++k<Ne;)y=b(y,m[k],k,m);return y}function _o(m,b,y,$){var k=m==null?0:m.length;for($&&k&&(y=m[--k]);k--;)y=b(y,m[k],k,m);return y}function Di(m,b){for(var y=-1,$=m==null?0:m.length;++y<$;)if(b(m[y],y,m))return!0;return!1}var yo=Hi("length");function bo(m){return m.split("")}function wo(m){return m.match(tn)||[]}function bs(m,b,y){var $;return y(m,function(k,Ne,Be){if(b(k,Ne,Be))return $=Ne,!1}),$}function Hr(m,b,y,$){for(var k=m.length,Ne=y+($?1:-1);$?Ne--:++Ne<k;)if(b(m[Ne],Ne,m))return Ne;return-1}function nr(m,b,y){return b===b?Lo(m,b,y):Hr(m,ws,y)}function jo(m,b,y,$){for(var k=y-1,Ne=m.length;++k<Ne;)if($(m[k],b))return k;return-1}function ws(m){return m!==m}function js(m,b){var y=m==null?0:m.length;return y?qi(m,b)/y:Ve}function Hi(m){return function(b){return b==null?s:b[m]}}function Gi(m){return function(b){return m==null?s:m[b]}}function Ns(m,b,y,$,k){return k(m,function(Ne,Be,Pe){y=$?($=!1,Ne):b(y,Ne,Be,Pe)}),y}function No(m,b){var y=m.length;for(m.sort(b);y--;)m[y]=m[y].value;return m}function qi(m,b){for(var y,$=-1,k=m.length;++$<k;){var Ne=b(m[$]);Ne!==s&&(y=y===s?Ne:y+Ne)}return y}function Yi(m,b){for(var y=-1,$=Array(m);++y<m;)$[y]=b(y);return $}function So(m,b){return $e(b,function(y){return[y,m[y]]})}function Ss(m){return m&&m.slice(0,Ts(m)+1).replace(V,"")}function Pn(m){return function(b){return m(b)}}function Ki(m,b){return $e(b,function(y){return m[y]})}function pr(m,b){return m.has(b)}function Cs(m,b){for(var y=-1,$=m.length;++y<$&&nr(b,m[y],0)>-1;);return y}function As(m,b){for(var y=m.length;y--&&nr(b,m[y],0)>-1;);return y}function Co(m,b){for(var y=m.length,$=0;y--;)m[y]===b&&++$;return $}var Ao=Gi(oo),Io=Gi(uo);function To(m){return"\\"+ho[m]}function Eo(m,b){return m==null?s:m[b]}function tr(m){return ao.test(m)}function Ro(m){return so.test(m)}function Po(m){for(var b,y=[];!(b=m.next()).done;)y.push(b.value);return y}function Xi(m){var b=-1,y=Array(m.size);return m.forEach(function($,k){y[++b]=[k,$]}),y}function Is(m,b){return function(y){return m(b(y))}}function Tt(m,b){for(var y=-1,$=m.length,k=0,Ne=[];++y<$;){var Be=m[y];(Be===b||Be===q)&&(m[y]=q,Ne[k++]=y)}return Ne}function Gr(m){var b=-1,y=Array(m.size);return m.forEach(function($){y[++b]=$}),y}function Mo(m){var b=-1,y=Array(m.size);return m.forEach(function($){y[++b]=[$,$]}),y}function Lo(m,b,y){for(var $=y-1,k=m.length;++$<k;)if(m[$]===b)return $;return-1}function Oo(m,b,y){for(var $=y+1;$--;)if(m[$]===b)return $;return $}function rr(m){return tr(m)?zo(m):yo(m)}function Vn(m){return tr(m)?Fo(m):bo(m)}function Ts(m){for(var b=m.length;b--&&Ae.test(m.charAt(b)););return b}var $o=Gi(fo);function zo(m){for(var b=$i.lastIndex=0;$i.test(m);)++b;return b}function Fo(m){return m.match($i)||[]}function Wo(m){return m.match(io)||[]}var Uo=(function m(b){b=b==null?rn:ir.defaults(rn.Object(),b,ir.pick(rn,lo));var y=b.Array,$=b.Date,k=b.Error,Ne=b.Function,Be=b.Math,Pe=b.Object,Zi=b.RegExp,Do=b.String,Yn=b.TypeError,qr=y.prototype,Ho=Ne.prototype,ar=Pe.prototype,Yr=b["__core-js_shared__"],Kr=Ho.toString,Te=ar.hasOwnProperty,Go=0,Es=(function(){var e=/[^.]+$/.exec(Yr&&Yr.keys&&Yr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})(),Xr=ar.toString,qo=Kr.call(Pe),Yo=rn._,Ko=Zi("^"+Kr.call(Te).replace(ve,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Zr=hs?b.Buffer:s,Et=b.Symbol,Br=b.Uint8Array,Rs=Zr?Zr.allocUnsafe:s,Jr=Is(Pe.getPrototypeOf,Pe),Ps=Pe.create,Ms=ar.propertyIsEnumerable,Qr=qr.splice,Ls=Et?Et.isConcatSpreadable:s,xr=Et?Et.iterator:s,Ut=Et?Et.toStringTag:s,Vr=(function(){try{var e=Yt(Pe,"defineProperty");return e({},"",{}),e}catch{}})(),Xo=b.clearTimeout!==rn.clearTimeout&&b.clearTimeout,Zo=$&&$.now!==rn.Date.now&&$.now,Bo=b.setTimeout!==rn.setTimeout&&b.setTimeout,kr=Be.ceil,ei=Be.floor,Bi=Pe.getOwnPropertySymbols,Jo=Zr?Zr.isBuffer:s,Os=b.isFinite,Qo=qr.join,Vo=Is(Pe.keys,Pe),Je=Be.max,ln=Be.min,ko=$.now,eu=b.parseInt,$s=Be.random,nu=qr.reverse,Ji=Yt(b,"DataView"),gr=Yt(b,"Map"),Qi=Yt(b,"Promise"),sr=Yt(b,"Set"),vr=Yt(b,"WeakMap"),_r=Yt(Pe,"create"),ni=vr&&new vr,lr={},tu=Kt(Ji),ru=Kt(gr),iu=Kt(Qi),au=Kt(sr),su=Kt(vr),ti=Et?Et.prototype:s,yr=ti?ti.valueOf:s,zs=ti?ti.toString:s;function l(e){if(We(e)&&!ne(e)&&!(e instanceof pe)){if(e instanceof Kn)return e;if(Te.call(e,"__wrapped__"))return Fl(e)}return new Kn(e)}var cr=(function(){function e(){}return function(n){if(!Fe(n))return{};if(Ps)return Ps(n);e.prototype=n;var t=new e;return e.prototype=s,t}})();function ri(){}function Kn(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=s}l.templateSettings={escape:h,evaluate:g,interpolate:v,variable:"",imports:{_:l}},l.prototype=ri.prototype,l.prototype.constructor=l,Kn.prototype=cr(ri.prototype),Kn.prototype.constructor=Kn;function pe(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ue,this.__views__=[]}function lu(){var e=new pe(this.__wrapped__);return e.__actions__=Nn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Nn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Nn(this.__views__),e}function cu(){if(this.__filtered__){var e=new pe(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function ou(){var e=this.__wrapped__.value(),n=this.__dir__,t=ne(e),i=n<0,a=t?e.length:0,c=bd(0,a,this.__views__),u=c.start,f=c.end,p=f-u,j=i?f:u-1,N=this.__iteratees__,I=N.length,M=0,W=ln(p,this.__takeCount__);if(!t||!i&&a==p&&W==p)return ll(e,this.__actions__);var B=[];e:for(;p--&&M<W;){j+=n;for(var ae=-1,J=e[j];++ae<I;){var de=N[ae],ge=de.iteratee,On=de.type,xn=ge(J);if(On==he)J=xn;else if(!xn){if(On==yn)continue e;break e}}B[M++]=J}return B}pe.prototype=cr(ri.prototype),pe.prototype.constructor=pe;function Dt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var i=e[n];this.set(i[0],i[1])}}function uu(){this.__data__=_r?_r(null):{},this.size=0}function du(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function fu(e){var n=this.__data__;if(_r){var t=n[e];return t===z?s:t}return Te.call(n,e)?n[e]:s}function hu(e){var n=this.__data__;return _r?n[e]!==s:Te.call(n,e)}function mu(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=_r&&n===s?z:n,this}Dt.prototype.clear=uu,Dt.prototype.delete=du,Dt.prototype.get=fu,Dt.prototype.has=hu,Dt.prototype.set=mu;function ct(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var i=e[n];this.set(i[0],i[1])}}function pu(){this.__data__=[],this.size=0}function xu(e){var n=this.__data__,t=ii(n,e);if(t<0)return!1;var i=n.length-1;return t==i?n.pop():Qr.call(n,t,1),--this.size,!0}function gu(e){var n=this.__data__,t=ii(n,e);return t<0?s:n[t][1]}function vu(e){return ii(this.__data__,e)>-1}function _u(e,n){var t=this.__data__,i=ii(t,e);return i<0?(++this.size,t.push([e,n])):t[i][1]=n,this}ct.prototype.clear=pu,ct.prototype.delete=xu,ct.prototype.get=gu,ct.prototype.has=vu,ct.prototype.set=_u;function ot(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var i=e[n];this.set(i[0],i[1])}}function yu(){this.size=0,this.__data__={hash:new Dt,map:new(gr||ct),string:new Dt}}function bu(e){var n=xi(this,e).delete(e);return this.size-=n?1:0,n}function wu(e){return xi(this,e).get(e)}function ju(e){return xi(this,e).has(e)}function Nu(e,n){var t=xi(this,e),i=t.size;return t.set(e,n),this.size+=t.size==i?0:1,this}ot.prototype.clear=yu,ot.prototype.delete=bu,ot.prototype.get=wu,ot.prototype.has=ju,ot.prototype.set=Nu;function Ht(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new ot;++n<t;)this.add(e[n])}function Su(e){return this.__data__.set(e,z),this}function Cu(e){return this.__data__.has(e)}Ht.prototype.add=Ht.prototype.push=Su,Ht.prototype.has=Cu;function kn(e){var n=this.__data__=new ct(e);this.size=n.size}function Au(){this.__data__=new ct,this.size=0}function Iu(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}function Tu(e){return this.__data__.get(e)}function Eu(e){return this.__data__.has(e)}function Ru(e,n){var t=this.__data__;if(t instanceof ct){var i=t.__data__;if(!gr||i.length<C-1)return i.push([e,n]),this.size=++t.size,this;t=this.__data__=new ot(i)}return t.set(e,n),this.size=t.size,this}kn.prototype.clear=Au,kn.prototype.delete=Iu,kn.prototype.get=Tu,kn.prototype.has=Eu,kn.prototype.set=Ru;function Fs(e,n){var t=ne(e),i=!t&&Xt(e),a=!t&&!i&&Ot(e),c=!t&&!i&&!a&&fr(e),u=t||i||a||c,f=u?Yi(e.length,Do):[],p=f.length;for(var j in e)(n||Te.call(e,j))&&!(u&&(j=="length"||a&&(j=="offset"||j=="parent")||c&&(j=="buffer"||j=="byteLength"||j=="byteOffset")||ht(j,p)))&&f.push(j);return f}function Ws(e){var n=e.length;return n?e[ca(0,n-1)]:s}function Pu(e,n){return gi(Nn(e),Gt(n,0,e.length))}function Mu(e){return gi(Nn(e))}function Vi(e,n,t){(t!==s&&!et(e[n],t)||t===s&&!(n in e))&&ut(e,n,t)}function br(e,n,t){var i=e[n];(!(Te.call(e,n)&&et(i,t))||t===s&&!(n in e))&&ut(e,n,t)}function ii(e,n){for(var t=e.length;t--;)if(et(e[t][0],n))return t;return-1}function Lu(e,n,t,i){return Rt(e,function(a,c,u){n(i,a,t(a),u)}),i}function Us(e,n){return e&&rt(n,en(n),e)}function Ou(e,n){return e&&rt(n,Cn(n),e)}function ut(e,n,t){n=="__proto__"&&Vr?Vr(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}function ki(e,n){for(var t=-1,i=n.length,a=y(i),c=e==null;++t<i;)a[t]=c?s:Ma(e,n[t]);return a}function Gt(e,n,t){return e===e&&(t!==s&&(e=e<=t?e:t),n!==s&&(e=e>=n?e:n)),e}function Xn(e,n,t,i,a,c){var u,f=n&F,p=n&re,j=n&fe;if(t&&(u=a?t(e,i,a,c):t(e)),u!==s)return u;if(!Fe(e))return e;var N=ne(e);if(N){if(u=jd(e),!f)return Nn(e,u)}else{var I=cn(e),M=I==dn||I==Dn;if(Ot(e))return ul(e,f);if(I==Re||I==ue||M&&!a){if(u=p||M?{}:Tl(e),!f)return p?fd(e,Ou(u,e)):dd(e,Us(u,e))}else{if(!Le[I])return a?e:{};u=Nd(e,I,f)}}c||(c=new kn);var W=c.get(e);if(W)return W;c.set(e,u),ic(e)?e.forEach(function(J){u.add(Xn(J,n,t,J,e,c))}):tc(e)&&e.forEach(function(J,de){u.set(de,Xn(J,n,t,de,e,c))});var B=j?p?_a:va:p?Cn:en,ae=N?s:B(e);return qn(ae||e,function(J,de){ae&&(de=J,J=e[de]),br(u,de,Xn(J,n,t,de,e,c))}),u}function $u(e){var n=en(e);return function(t){return Ds(t,e,n)}}function Ds(e,n,t){var i=t.length;if(e==null)return!i;for(e=Pe(e);i--;){var a=t[i],c=n[a],u=e[a];if(u===s&&!(a in e)||!c(u))return!1}return!0}function Hs(e,n,t){if(typeof e!="function")throw new Yn(x);return Ir(function(){e.apply(s,t)},n)}function wr(e,n,t,i){var a=-1,c=Dr,u=!0,f=e.length,p=[],j=n.length;if(!f)return p;t&&(n=$e(n,Pn(t))),i?(c=Wi,u=!1):n.length>=C&&(c=pr,u=!1,n=new Ht(n));e:for(;++a<f;){var N=e[a],I=t==null?N:t(N);if(N=i||N!==0?N:0,u&&I===I){for(var M=j;M--;)if(n[M]===I)continue e;p.push(N)}else c(n,I,i)||p.push(N)}return p}var Rt=pl(tt),Gs=pl(na,!0);function zu(e,n){var t=!0;return Rt(e,function(i,a,c){return t=!!n(i,a,c),t}),t}function ai(e,n,t){for(var i=-1,a=e.length;++i<a;){var c=e[i],u=n(c);if(u!=null&&(f===s?u===u&&!Ln(u):t(u,f)))var f=u,p=c}return p}function Fu(e,n,t,i){var a=e.length;for(t=te(t),t<0&&(t=-t>a?0:a+t),i=i===s||i>a?a:te(i),i<0&&(i+=a),i=t>i?0:sc(i);t<i;)e[t++]=n;return e}function qs(e,n){var t=[];return Rt(e,function(i,a,c){n(i,a,c)&&t.push(i)}),t}function an(e,n,t,i,a){var c=-1,u=e.length;for(t||(t=Cd),a||(a=[]);++c<u;){var f=e[c];n>0&&t(f)?n>1?an(f,n-1,t,i,a):It(a,f):i||(a[a.length]=f)}return a}var ea=xl(),Ys=xl(!0);function tt(e,n){return e&&ea(e,n,en)}function na(e,n){return e&&Ys(e,n,en)}function si(e,n){return At(n,function(t){return mt(e[t])})}function qt(e,n){n=Mt(n,e);for(var t=0,i=n.length;e!=null&&t<i;)e=e[it(n[t++])];return t&&t==i?e:s}function Ks(e,n,t){var i=n(e);return ne(e)?i:It(i,t(e))}function mn(e){return e==null?e===s?lt:Qn:Ut&&Ut in Pe(e)?yd(e):Md(e)}function ta(e,n){return e>n}function Wu(e,n){return e!=null&&Te.call(e,n)}function Uu(e,n){return e!=null&&n in Pe(e)}function Du(e,n,t){return e>=ln(n,t)&&e<Je(n,t)}function ra(e,n,t){for(var i=t?Wi:Dr,a=e[0].length,c=e.length,u=c,f=y(c),p=1/0,j=[];u--;){var N=e[u];u&&n&&(N=$e(N,Pn(n))),p=ln(N.length,p),f[u]=!t&&(n||a>=120&&N.length>=120)?new Ht(u&&N):s}N=e[0];var I=-1,M=f[0];e:for(;++I<a&&j.length<p;){var W=N[I],B=n?n(W):W;if(W=t||W!==0?W:0,!(M?pr(M,B):i(j,B,t))){for(u=c;--u;){var ae=f[u];if(!(ae?pr(ae,B):i(e[u],B,t)))continue e}M&&M.push(B),j.push(W)}}return j}function Hu(e,n,t,i){return tt(e,function(a,c,u){n(i,t(a),c,u)}),i}function jr(e,n,t){n=Mt(n,e),e=Ml(e,n);var i=e==null?e:e[it(Bn(n))];return i==null?s:Rn(i,e,t)}function Xs(e){return We(e)&&mn(e)==ue}function Gu(e){return We(e)&&mn(e)==G}function qu(e){return We(e)&&mn(e)==Se}function Nr(e,n,t,i,a){return e===n?!0:e==null||n==null||!We(e)&&!We(n)?e!==e&&n!==n:Yu(e,n,t,i,Nr,a)}function Yu(e,n,t,i,a,c){var u=ne(e),f=ne(n),p=u?xe:cn(e),j=f?xe:cn(n);p=p==ue?Re:p,j=j==ue?Re:j;var N=p==Re,I=j==Re,M=p==j;if(M&&Ot(e)){if(!Ot(n))return!1;u=!0,N=!1}if(M&&!N)return c||(c=new kn),u||fr(e)?Cl(e,n,t,i,a,c):vd(e,n,p,t,i,a,c);if(!(t&U)){var W=N&&Te.call(e,"__wrapped__"),B=I&&Te.call(n,"__wrapped__");if(W||B){var ae=W?e.value():e,J=B?n.value():n;return c||(c=new kn),a(ae,J,t,i,c)}}return M?(c||(c=new kn),_d(e,n,t,i,a,c)):!1}function Ku(e){return We(e)&&cn(e)==ze}function ia(e,n,t,i){var a=t.length,c=a,u=!i;if(e==null)return!c;for(e=Pe(e);a--;){var f=t[a];if(u&&f[2]?f[1]!==e[f[0]]:!(f[0]in e))return!1}for(;++a<c;){f=t[a];var p=f[0],j=e[p],N=f[1];if(u&&f[2]){if(j===s&&!(p in e))return!1}else{var I=new kn;if(i)var M=i(j,N,p,e,n,I);if(!(M===s?Nr(N,j,U|K,i,I):M))return!1}}return!0}function Zs(e){if(!Fe(e)||Id(e))return!1;var n=mt(e)?Ko:$r;return n.test(Kt(e))}function Xu(e){return We(e)&&mn(e)==bn}function Zu(e){return We(e)&&cn(e)==Xe}function Bu(e){return We(e)&&ji(e.length)&&!!Oe[mn(e)]}function Bs(e){return typeof e=="function"?e:e==null?An:typeof e=="object"?ne(e)?Vs(e[0],e[1]):Qs(e):gc(e)}function aa(e){if(!Ar(e))return Vo(e);var n=[];for(var t in Pe(e))Te.call(e,t)&&t!="constructor"&&n.push(t);return n}function Ju(e){if(!Fe(e))return Pd(e);var n=Ar(e),t=[];for(var i in e)i=="constructor"&&(n||!Te.call(e,i))||t.push(i);return t}function sa(e,n){return e<n}function Js(e,n){var t=-1,i=Sn(e)?y(e.length):[];return Rt(e,function(a,c,u){i[++t]=n(a,c,u)}),i}function Qs(e){var n=ba(e);return n.length==1&&n[0][2]?Rl(n[0][0],n[0][1]):function(t){return t===e||ia(t,e,n)}}function Vs(e,n){return ja(e)&&El(n)?Rl(it(e),n):function(t){var i=Ma(t,e);return i===s&&i===n?La(t,e):Nr(n,i,U|K)}}function li(e,n,t,i,a){e!==n&&ea(n,function(c,u){if(a||(a=new kn),Fe(c))Qu(e,n,u,t,li,i,a);else{var f=i?i(Sa(e,u),c,u+"",e,n,a):s;f===s&&(f=c),Vi(e,u,f)}},Cn)}function Qu(e,n,t,i,a,c,u){var f=Sa(e,t),p=Sa(n,t),j=u.get(p);if(j){Vi(e,t,j);return}var N=c?c(f,p,t+"",e,n,u):s,I=N===s;if(I){var M=ne(p),W=!M&&Ot(p),B=!M&&!W&&fr(p);N=p,M||W||B?ne(f)?N=f:Ge(f)?N=Nn(f):W?(I=!1,N=ul(p,!0)):B?(I=!1,N=dl(p,!0)):N=[]:Tr(p)||Xt(p)?(N=f,Xt(f)?N=lc(f):(!Fe(f)||mt(f))&&(N=Tl(p))):I=!1}I&&(u.set(p,N),a(N,p,i,c,u),u.delete(p)),Vi(e,t,N)}function ks(e,n){var t=e.length;if(t)return n+=n<0?t:0,ht(n,t)?e[n]:s}function el(e,n,t){n.length?n=$e(n,function(c){return ne(c)?function(u){return qt(u,c.length===1?c[0]:c)}:c}):n=[An];var i=-1;n=$e(n,Pn(Y()));var a=Js(e,function(c,u,f){var p=$e(n,function(j){return j(c)});return{criteria:p,index:++i,value:c}});return No(a,function(c,u){return ud(c,u,t)})}function Vu(e,n){return nl(e,n,function(t,i){return La(e,i)})}function nl(e,n,t){for(var i=-1,a=n.length,c={};++i<a;){var u=n[i],f=qt(e,u);t(f,u)&&Sr(c,Mt(u,e),f)}return c}function ku(e){return function(n){return qt(n,e)}}function la(e,n,t,i){var a=i?jo:nr,c=-1,u=n.length,f=e;for(e===n&&(n=Nn(n)),t&&(f=$e(e,Pn(t)));++c<u;)for(var p=0,j=n[c],N=t?t(j):j;(p=a(f,N,p,i))>-1;)f!==e&&Qr.call(f,p,1),Qr.call(e,p,1);return e}function tl(e,n){for(var t=e?n.length:0,i=t-1;t--;){var a=n[t];if(t==i||a!==c){var c=a;ht(a)?Qr.call(e,a,1):da(e,a)}}return e}function ca(e,n){return e+ei($s()*(n-e+1))}function ed(e,n,t,i){for(var a=-1,c=Je(kr((n-e)/(t||1)),0),u=y(c);c--;)u[i?c:++a]=e,e+=t;return u}function oa(e,n){var t="";if(!e||n<1||n>Ye)return t;do n%2&&(t+=e),n=ei(n/2),n&&(e+=e);while(n);return t}function le(e,n){return Ca(Pl(e,n,An),e+"")}function nd(e){return Ws(hr(e))}function td(e,n){var t=hr(e);return gi(t,Gt(n,0,t.length))}function Sr(e,n,t,i){if(!Fe(e))return e;n=Mt(n,e);for(var a=-1,c=n.length,u=c-1,f=e;f!=null&&++a<c;){var p=it(n[a]),j=t;if(p==="__proto__"||p==="constructor"||p==="prototype")return e;if(a!=u){var N=f[p];j=i?i(N,p,f):s,j===s&&(j=Fe(N)?N:ht(n[a+1])?[]:{})}br(f,p,j),f=f[p]}return e}var rl=ni?function(e,n){return ni.set(e,n),e}:An,rd=Vr?function(e,n){return Vr(e,"toString",{configurable:!0,enumerable:!1,value:$a(n),writable:!0})}:An;function id(e){return gi(hr(e))}function Zn(e,n,t){var i=-1,a=e.length;n<0&&(n=-n>a?0:a+n),t=t>a?a:t,t<0&&(t+=a),a=n>t?0:t-n>>>0,n>>>=0;for(var c=y(a);++i<a;)c[i]=e[i+n];return c}function ad(e,n){var t;return Rt(e,function(i,a,c){return t=n(i,a,c),!t}),!!t}function ci(e,n,t){var i=0,a=e==null?i:e.length;if(typeof n=="number"&&n===n&&a<=ke){for(;i<a;){var c=i+a>>>1,u=e[c];u!==null&&!Ln(u)&&(t?u<=n:u<n)?i=c+1:a=c}return a}return ua(e,n,An,t)}function ua(e,n,t,i){var a=0,c=e==null?0:e.length;if(c===0)return 0;n=t(n);for(var u=n!==n,f=n===null,p=Ln(n),j=n===s;a<c;){var N=ei((a+c)/2),I=t(e[N]),M=I!==s,W=I===null,B=I===I,ae=Ln(I);if(u)var J=i||B;else j?J=B&&(i||M):f?J=B&&M&&(i||!W):p?J=B&&M&&!W&&(i||!ae):W||ae?J=!1:J=i?I<=n:I<n;J?a=N+1:c=N}return ln(c,un)}function il(e,n){for(var t=-1,i=e.length,a=0,c=[];++t<i;){var u=e[t],f=n?n(u):u;if(!t||!et(f,p)){var p=f;c[a++]=u===0?0:u}}return c}function al(e){return typeof e=="number"?e:Ln(e)?Ve:+e}function Mn(e){if(typeof e=="string")return e;if(ne(e))return $e(e,Mn)+"";if(Ln(e))return zs?zs.call(e):"";var n=e+"";return n=="0"&&1/e==-nn?"-0":n}function Pt(e,n,t){var i=-1,a=Dr,c=e.length,u=!0,f=[],p=f;if(t)u=!1,a=Wi;else if(c>=C){var j=n?null:xd(e);if(j)return Gr(j);u=!1,a=pr,p=new Ht}else p=n?[]:f;e:for(;++i<c;){var N=e[i],I=n?n(N):N;if(N=t||N!==0?N:0,u&&I===I){for(var M=p.length;M--;)if(p[M]===I)continue e;n&&p.push(I),f.push(N)}else a(p,I,t)||(p!==f&&p.push(I),f.push(N))}return f}function da(e,n){return n=Mt(n,e),e=Ml(e,n),e==null||delete e[it(Bn(n))]}function sl(e,n,t,i){return Sr(e,n,t(qt(e,n)),i)}function oi(e,n,t,i){for(var a=e.length,c=i?a:-1;(i?c--:++c<a)&&n(e[c],c,e););return t?Zn(e,i?0:c,i?c+1:a):Zn(e,i?c+1:0,i?a:c)}function ll(e,n){var t=e;return t instanceof pe&&(t=t.value()),Ui(n,function(i,a){return a.func.apply(a.thisArg,It([i],a.args))},t)}function fa(e,n,t){var i=e.length;if(i<2)return i?Pt(e[0]):[];for(var a=-1,c=y(i);++a<i;)for(var u=e[a],f=-1;++f<i;)f!=a&&(c[a]=wr(c[a]||u,e[f],n,t));return Pt(an(c,1),n,t)}function cl(e,n,t){for(var i=-1,a=e.length,c=n.length,u={};++i<a;){var f=i<c?n[i]:s;t(u,e[i],f)}return u}function ha(e){return Ge(e)?e:[]}function ma(e){return typeof e=="function"?e:An}function Mt(e,n){return ne(e)?e:ja(e,n)?[e]:zl(Ie(e))}var sd=le;function Lt(e,n,t){var i=e.length;return t=t===s?i:t,!n&&t>=i?e:Zn(e,n,t)}var ol=Xo||function(e){return rn.clearTimeout(e)};function ul(e,n){if(n)return e.slice();var t=e.length,i=Rs?Rs(t):new e.constructor(t);return e.copy(i),i}function pa(e){var n=new e.constructor(e.byteLength);return new Br(n).set(new Br(e)),n}function ld(e,n){var t=n?pa(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}function cd(e){var n=new e.constructor(e.source,ye.exec(e));return n.lastIndex=e.lastIndex,n}function od(e){return yr?Pe(yr.call(e)):{}}function dl(e,n){var t=n?pa(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}function fl(e,n){if(e!==n){var t=e!==s,i=e===null,a=e===e,c=Ln(e),u=n!==s,f=n===null,p=n===n,j=Ln(n);if(!f&&!j&&!c&&e>n||c&&u&&p&&!f&&!j||i&&u&&p||!t&&p||!a)return 1;if(!i&&!c&&!j&&e<n||j&&t&&a&&!i&&!c||f&&t&&a||!u&&a||!p)return-1}return 0}function ud(e,n,t){for(var i=-1,a=e.criteria,c=n.criteria,u=a.length,f=t.length;++i<u;){var p=fl(a[i],c[i]);if(p){if(i>=f)return p;var j=t[i];return p*(j=="desc"?-1:1)}}return e.index-n.index}function hl(e,n,t,i){for(var a=-1,c=e.length,u=t.length,f=-1,p=n.length,j=Je(c-u,0),N=y(p+j),I=!i;++f<p;)N[f]=n[f];for(;++a<u;)(I||a<c)&&(N[t[a]]=e[a]);for(;j--;)N[f++]=e[a++];return N}function ml(e,n,t,i){for(var a=-1,c=e.length,u=-1,f=t.length,p=-1,j=n.length,N=Je(c-f,0),I=y(N+j),M=!i;++a<N;)I[a]=e[a];for(var W=a;++p<j;)I[W+p]=n[p];for(;++u<f;)(M||a<c)&&(I[W+t[u]]=e[a++]);return I}function Nn(e,n){var t=-1,i=e.length;for(n||(n=y(i));++t<i;)n[t]=e[t];return n}function rt(e,n,t,i){var a=!t;t||(t={});for(var c=-1,u=n.length;++c<u;){var f=n[c],p=i?i(t[f],e[f],f,t,e):s;p===s&&(p=e[f]),a?ut(t,f,p):br(t,f,p)}return t}function dd(e,n){return rt(e,wa(e),n)}function fd(e,n){return rt(e,Al(e),n)}function ui(e,n){return function(t,i){var a=ne(t)?go:Lu,c=n?n():{};return a(t,e,Y(i,2),c)}}function or(e){return le(function(n,t){var i=-1,a=t.length,c=a>1?t[a-1]:s,u=a>2?t[2]:s;for(c=e.length>3&&typeof c=="function"?(a--,c):s,u&&pn(t[0],t[1],u)&&(c=a<3?s:c,a=1),n=Pe(n);++i<a;){var f=t[i];f&&e(n,f,i,c)}return n})}function pl(e,n){return function(t,i){if(t==null)return t;if(!Sn(t))return e(t,i);for(var a=t.length,c=n?a:-1,u=Pe(t);(n?c--:++c<a)&&i(u[c],c,u)!==!1;);return t}}function xl(e){return function(n,t,i){for(var a=-1,c=Pe(n),u=i(n),f=u.length;f--;){var p=u[e?f:++a];if(t(c[p],p,c)===!1)break}return n}}function hd(e,n,t){var i=n&Q,a=Cr(e);function c(){var u=this&&this!==rn&&this instanceof c?a:e;return u.apply(i?t:this,arguments)}return c}function gl(e){return function(n){n=Ie(n);var t=tr(n)?Vn(n):s,i=t?t[0]:n.charAt(0),a=t?Lt(t,1).join(""):n.slice(1);return i[e]()+a}}function ur(e){return function(n){return Ui(pc(mc(n).replace(to,"")),e,"")}}function Cr(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var t=cr(e.prototype),i=e.apply(t,n);return Fe(i)?i:t}}function md(e,n,t){var i=Cr(e);function a(){for(var c=arguments.length,u=y(c),f=c,p=dr(a);f--;)u[f]=arguments[f];var j=c<3&&u[0]!==p&&u[c-1]!==p?[]:Tt(u,p);if(c-=j.length,c<t)return wl(e,n,di,a.placeholder,s,u,j,s,s,t-c);var N=this&&this!==rn&&this instanceof a?i:e;return Rn(N,this,u)}return a}function vl(e){return function(n,t,i){var a=Pe(n);if(!Sn(n)){var c=Y(t,3);n=en(n),t=function(f){return c(a[f],f,a)}}var u=e(n,t,i);return u>-1?a[c?n[u]:u]:s}}function _l(e){return ft(function(n){var t=n.length,i=t,a=Kn.prototype.thru;for(e&&n.reverse();i--;){var c=n[i];if(typeof c!="function")throw new Yn(x);if(a&&!u&&pi(c)=="wrapper")var u=new Kn([],!0)}for(i=u?i:t;++i<t;){c=n[i];var f=pi(c),p=f=="wrapper"?ya(c):s;p&&Na(p[0])&&p[1]==(we|Z|R|oe)&&!p[4].length&&p[9]==1?u=u[pi(p[0])].apply(u,p[3]):u=c.length==1&&Na(c)?u[f]():u.thru(c)}return function(){var j=arguments,N=j[0];if(u&&j.length==1&&ne(N))return u.plant(N).value();for(var I=0,M=t?n[I].apply(this,j):N;++I<t;)M=n[I].call(this,M);return M}})}function di(e,n,t,i,a,c,u,f,p,j){var N=n&we,I=n&Q,M=n&O,W=n&(Z|Ee),B=n&on,ae=M?s:Cr(e);function J(){for(var de=arguments.length,ge=y(de),On=de;On--;)ge[On]=arguments[On];if(W)var xn=dr(J),$n=Co(ge,xn);if(i&&(ge=hl(ge,i,a,W)),c&&(ge=ml(ge,c,u,W)),de-=$n,W&&de<j){var qe=Tt(ge,xn);return wl(e,n,di,J.placeholder,t,ge,qe,f,p,j-de)}var nt=I?t:this,xt=M?nt[e]:e;return de=ge.length,f?ge=Ld(ge,f):B&&de>1&&ge.reverse(),N&&p<de&&(ge.length=p),this&&this!==rn&&this instanceof J&&(xt=ae||Cr(xt)),xt.apply(nt,ge)}return J}function yl(e,n){return function(t,i){return Hu(t,e,n(i),{})}}function fi(e,n){return function(t,i){var a;if(t===s&&i===s)return n;if(t!==s&&(a=t),i!==s){if(a===s)return i;typeof t=="string"||typeof i=="string"?(t=Mn(t),i=Mn(i)):(t=al(t),i=al(i)),a=e(t,i)}return a}}function xa(e){return ft(function(n){return n=$e(n,Pn(Y())),le(function(t){var i=this;return e(n,function(a){return Rn(a,i,t)})})})}function hi(e,n){n=n===s?" ":Mn(n);var t=n.length;if(t<2)return t?oa(n,e):n;var i=oa(n,kr(e/rr(n)));return tr(n)?Lt(Vn(i),0,e).join(""):i.slice(0,e)}function pd(e,n,t,i){var a=n&Q,c=Cr(e);function u(){for(var f=-1,p=arguments.length,j=-1,N=i.length,I=y(N+p),M=this&&this!==rn&&this instanceof u?c:e;++j<N;)I[j]=i[j];for(;p--;)I[j++]=arguments[++f];return Rn(M,a?t:this,I)}return u}function bl(e){return function(n,t,i){return i&&typeof i!="number"&&pn(n,t,i)&&(t=i=s),n=pt(n),t===s?(t=n,n=0):t=pt(t),i=i===s?n<t?1:-1:pt(i),ed(n,t,i,e)}}function mi(e){return function(n,t){return typeof n=="string"&&typeof t=="string"||(n=Jn(n),t=Jn(t)),e(n,t)}}function wl(e,n,t,i,a,c,u,f,p,j){var N=n&Z,I=N?u:s,M=N?s:u,W=N?c:s,B=N?s:c;n|=N?R:Me,n&=~(N?Me:R),n&X||(n&=-4);var ae=[e,n,a,W,I,B,M,f,p,j],J=t.apply(s,ae);return Na(e)&&Ll(J,ae),J.placeholder=i,Ol(J,e,n)}function ga(e){var n=Be[e];return function(t,i){if(t=Jn(t),i=i==null?0:ln(te(i),292),i&&Os(t)){var a=(Ie(t)+"e").split("e"),c=n(a[0]+"e"+(+a[1]+i));return a=(Ie(c)+"e").split("e"),+(a[0]+"e"+(+a[1]-i))}return n(t)}}var xd=sr&&1/Gr(new sr([,-0]))[1]==nn?function(e){return new sr(e)}:Wa;function jl(e){return function(n){var t=cn(n);return t==ze?Xi(n):t==Xe?Mo(n):So(n,e(n))}}function dt(e,n,t,i,a,c,u,f){var p=n&O;if(!p&&typeof e!="function")throw new Yn(x);var j=i?i.length:0;if(j||(n&=-97,i=a=s),u=u===s?u:Je(te(u),0),f=f===s?f:te(f),j-=a?a.length:0,n&Me){var N=i,I=a;i=a=s}var M=p?s:ya(e),W=[e,n,t,i,a,N,I,c,u,f];if(M&&Rd(W,M),e=W[0],n=W[1],t=W[2],i=W[3],a=W[4],f=W[9]=W[9]===s?p?0:e.length:Je(W[9]-j,0),!f&&n&(Z|Ee)&&(n&=-25),!n||n==Q)var B=hd(e,n,t);else n==Z||n==Ee?B=md(e,n,f):(n==R||n==(Q|R))&&!a.length?B=pd(e,n,t,i):B=di.apply(s,W);var ae=M?rl:Ll;return Ol(ae(B,W),e,n)}function Nl(e,n,t,i){return e===s||et(e,ar[t])&&!Te.call(i,t)?n:e}function Sl(e,n,t,i,a,c){return Fe(e)&&Fe(n)&&(c.set(n,e),li(e,n,s,Sl,c),c.delete(n)),e}function gd(e){return Tr(e)?s:e}function Cl(e,n,t,i,a,c){var u=t&U,f=e.length,p=n.length;if(f!=p&&!(u&&p>f))return!1;var j=c.get(e),N=c.get(n);if(j&&N)return j==n&&N==e;var I=-1,M=!0,W=t&K?new Ht:s;for(c.set(e,n),c.set(n,e);++I<f;){var B=e[I],ae=n[I];if(i)var J=u?i(ae,B,I,n,e,c):i(B,ae,I,e,n,c);if(J!==s){if(J)continue;M=!1;break}if(W){if(!Di(n,function(de,ge){if(!pr(W,ge)&&(B===de||a(B,de,t,i,c)))return W.push(ge)})){M=!1;break}}else if(!(B===ae||a(B,ae,t,i,c))){M=!1;break}}return c.delete(e),c.delete(n),M}function vd(e,n,t,i,a,c,u){switch(t){case be:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case G:return!(e.byteLength!=n.byteLength||!c(new Br(e),new Br(n)));case se:case Se:case He:return et(+e,+n);case Ce:return e.name==n.name&&e.message==n.message;case bn:case fn:return e==n+"";case ze:var f=Xi;case Xe:var p=i&U;if(f||(f=Gr),e.size!=n.size&&!p)return!1;var j=u.get(e);if(j)return j==n;i|=K,u.set(e,n);var N=Cl(f(e),f(n),i,a,c,u);return u.delete(e),N;case Hn:if(yr)return yr.call(e)==yr.call(n)}return!1}function _d(e,n,t,i,a,c){var u=t&U,f=va(e),p=f.length,j=va(n),N=j.length;if(p!=N&&!u)return!1;for(var I=p;I--;){var M=f[I];if(!(u?M in n:Te.call(n,M)))return!1}var W=c.get(e),B=c.get(n);if(W&&B)return W==n&&B==e;var ae=!0;c.set(e,n),c.set(n,e);for(var J=u;++I<p;){M=f[I];var de=e[M],ge=n[M];if(i)var On=u?i(ge,de,M,n,e,c):i(de,ge,M,e,n,c);if(!(On===s?de===ge||a(de,ge,t,i,c):On)){ae=!1;break}J||(J=M=="constructor")}if(ae&&!J){var xn=e.constructor,$n=n.constructor;xn!=$n&&"constructor"in e&&"constructor"in n&&!(typeof xn=="function"&&xn instanceof xn&&typeof $n=="function"&&$n instanceof $n)&&(ae=!1)}return c.delete(e),c.delete(n),ae}function ft(e){return Ca(Pl(e,s,Dl),e+"")}function va(e){return Ks(e,en,wa)}function _a(e){return Ks(e,Cn,Al)}var ya=ni?function(e){return ni.get(e)}:Wa;function pi(e){for(var n=e.name+"",t=lr[n],i=Te.call(lr,n)?t.length:0;i--;){var a=t[i],c=a.func;if(c==null||c==e)return a.name}return n}function dr(e){var n=Te.call(l,"placeholder")?l:e;return n.placeholder}function Y(){var e=l.iteratee||za;return e=e===za?Bs:e,arguments.length?e(arguments[0],arguments[1]):e}function xi(e,n){var t=e.__data__;return Ad(n)?t[typeof n=="string"?"string":"hash"]:t.map}function ba(e){for(var n=en(e),t=n.length;t--;){var i=n[t],a=e[i];n[t]=[i,a,El(a)]}return n}function Yt(e,n){var t=Eo(e,n);return Zs(t)?t:s}function yd(e){var n=Te.call(e,Ut),t=e[Ut];try{e[Ut]=s;var i=!0}catch{}var a=Xr.call(e);return i&&(n?e[Ut]=t:delete e[Ut]),a}var wa=Bi?function(e){return e==null?[]:(e=Pe(e),At(Bi(e),function(n){return Ms.call(e,n)}))}:Ua,Al=Bi?function(e){for(var n=[];e;)It(n,wa(e)),e=Jr(e);return n}:Ua,cn=mn;(Ji&&cn(new Ji(new ArrayBuffer(1)))!=be||gr&&cn(new gr)!=ze||Qi&&cn(Qi.resolve())!=st||sr&&cn(new sr)!=Xe||vr&&cn(new vr)!=En)&&(cn=function(e){var n=mn(e),t=n==Re?e.constructor:s,i=t?Kt(t):"";if(i)switch(i){case tu:return be;case ru:return ze;case iu:return st;case au:return Xe;case su:return En}return n});function bd(e,n,t){for(var i=-1,a=t.length;++i<a;){var c=t[i],u=c.size;switch(c.type){case"drop":e+=u;break;case"dropRight":n-=u;break;case"take":n=ln(n,e+u);break;case"takeRight":e=Je(e,n-u);break}}return{start:e,end:n}}function wd(e){var n=e.match(D);return n?n[1].split(wn):[]}function Il(e,n,t){n=Mt(n,e);for(var i=-1,a=n.length,c=!1;++i<a;){var u=it(n[i]);if(!(c=e!=null&&t(e,u)))break;e=e[u]}return c||++i!=a?c:(a=e==null?0:e.length,!!a&&ji(a)&&ht(u,a)&&(ne(e)||Xt(e)))}function jd(e){var n=e.length,t=new e.constructor(n);return n&&typeof e[0]=="string"&&Te.call(e,"index")&&(t.index=e.index,t.input=e.input),t}function Tl(e){return typeof e.constructor=="function"&&!Ar(e)?cr(Jr(e)):{}}function Nd(e,n,t){var i=e.constructor;switch(n){case G:return pa(e);case se:case Se:return new i(+e);case be:return ld(e,t);case je:case me:case sn:case yt:case bt:case wt:case jt:case Nt:case St:return dl(e,t);case ze:return new i;case He:case fn:return new i(e);case bn:return cd(e);case Xe:return new i;case Hn:return od(e)}}function Sd(e,n){var t=n.length;if(!t)return e;var i=t-1;return n[i]=(t>1?"& ":"")+n[i],n=n.join(t>2?", ":" "),e.replace(hn,`{
/* [wrapped with `+n+`] */
`)}function Cd(e){return ne(e)||Xt(e)||!!(Ls&&e&&e[Ls])}function ht(e,n){var t=typeof e;return n=n??Ye,!!n&&(t=="number"||t!="symbol"&&zc.test(e))&&e>-1&&e%1==0&&e<n}function pn(e,n,t){if(!Fe(t))return!1;var i=typeof n;return(i=="number"?Sn(t)&&ht(n,t.length):i=="string"&&n in t)?et(t[n],e):!1}function ja(e,n){if(ne(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||Ln(e)?!0:S.test(e)||!A.test(e)||n!=null&&e in Pe(n)}function Ad(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Na(e){var n=pi(e),t=l[n];if(typeof t!="function"||!(n in pe.prototype))return!1;if(e===t)return!0;var i=ya(t);return!!i&&e===i[0]}function Id(e){return!!Es&&Es in e}var Td=Yr?mt:Da;function Ar(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||ar;return e===t}function El(e){return e===e&&!Fe(e)}function Rl(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==s||e in Pe(t))}}function Ed(e){var n=bi(e,function(i){return t.size===ce&&t.clear(),i}),t=n.cache;return n}function Rd(e,n){var t=e[1],i=n[1],a=t|i,c=a<(Q|O|we),u=i==we&&t==Z||i==we&&t==oe&&e[7].length<=n[8]||i==(we|oe)&&n[7].length<=n[8]&&t==Z;if(!(c||u))return e;i&Q&&(e[2]=n[2],a|=t&Q?0:X);var f=n[3];if(f){var p=e[3];e[3]=p?hl(p,f,n[4]):f,e[4]=p?Tt(e[3],q):n[4]}return f=n[5],f&&(p=e[5],e[5]=p?ml(p,f,n[6]):f,e[6]=p?Tt(e[5],q):n[6]),f=n[7],f&&(e[7]=f),i&we&&(e[8]=e[8]==null?n[8]:ln(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=a,e}function Pd(e){var n=[];if(e!=null)for(var t in Pe(e))n.push(t);return n}function Md(e){return Xr.call(e)}function Pl(e,n,t){return n=Je(n===s?e.length-1:n,0),function(){for(var i=arguments,a=-1,c=Je(i.length-n,0),u=y(c);++a<c;)u[a]=i[n+a];a=-1;for(var f=y(n+1);++a<n;)f[a]=i[a];return f[n]=t(u),Rn(e,this,f)}}function Ml(e,n){return n.length<2?e:qt(e,Zn(n,0,-1))}function Ld(e,n){for(var t=e.length,i=ln(n.length,t),a=Nn(e);i--;){var c=n[i];e[i]=ht(c,t)?a[c]:s}return e}function Sa(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var Ll=$l(rl),Ir=Bo||function(e,n){return rn.setTimeout(e,n)},Ca=$l(rd);function Ol(e,n,t){var i=n+"";return Ca(e,Sd(i,Od(wd(i),t)))}function $l(e){var n=0,t=0;return function(){var i=ko(),a=Wn-(i-t);if(t=i,a>0){if(++n>=Fn)return arguments[0]}else n=0;return e.apply(s,arguments)}}function gi(e,n){var t=-1,i=e.length,a=i-1;for(n=n===s?i:n;++t<n;){var c=ca(t,a),u=e[c];e[c]=e[t],e[t]=u}return e.length=n,e}var zl=Ed(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(ie,function(t,i,a,c){n.push(a?c.replace(jn,"$1"):i||t)}),n});function it(e){if(typeof e=="string"||Ln(e))return e;var n=e+"";return n=="0"&&1/e==-nn?"-0":n}function Kt(e){if(e!=null){try{return Kr.call(e)}catch{}try{return e+""}catch{}}return""}function Od(e,n){return qn(Tn,function(t){var i="_."+t[0];n&t[1]&&!Dr(e,i)&&e.push(i)}),e.sort()}function Fl(e){if(e instanceof pe)return e.clone();var n=new Kn(e.__wrapped__,e.__chain__);return n.__actions__=Nn(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function $d(e,n,t){(t?pn(e,n,t):n===s)?n=1:n=Je(te(n),0);var i=e==null?0:e.length;if(!i||n<1)return[];for(var a=0,c=0,u=y(kr(i/n));a<i;)u[c++]=Zn(e,a,a+=n);return u}function zd(e){for(var n=-1,t=e==null?0:e.length,i=0,a=[];++n<t;){var c=e[n];c&&(a[i++]=c)}return a}function Fd(){var e=arguments.length;if(!e)return[];for(var n=y(e-1),t=arguments[0],i=e;i--;)n[i-1]=arguments[i];return It(ne(t)?Nn(t):[t],an(n,1))}var Wd=le(function(e,n){return Ge(e)?wr(e,an(n,1,Ge,!0)):[]}),Ud=le(function(e,n){var t=Bn(n);return Ge(t)&&(t=s),Ge(e)?wr(e,an(n,1,Ge,!0),Y(t,2)):[]}),Dd=le(function(e,n){var t=Bn(n);return Ge(t)&&(t=s),Ge(e)?wr(e,an(n,1,Ge,!0),s,t):[]});function Hd(e,n,t){var i=e==null?0:e.length;return i?(n=t||n===s?1:te(n),Zn(e,n<0?0:n,i)):[]}function Gd(e,n,t){var i=e==null?0:e.length;return i?(n=t||n===s?1:te(n),n=i-n,Zn(e,0,n<0?0:n)):[]}function qd(e,n){return e&&e.length?oi(e,Y(n,3),!0,!0):[]}function Yd(e,n){return e&&e.length?oi(e,Y(n,3),!0):[]}function Kd(e,n,t,i){var a=e==null?0:e.length;return a?(t&&typeof t!="number"&&pn(e,n,t)&&(t=0,i=a),Fu(e,n,t,i)):[]}function Wl(e,n,t){var i=e==null?0:e.length;if(!i)return-1;var a=t==null?0:te(t);return a<0&&(a=Je(i+a,0)),Hr(e,Y(n,3),a)}function Ul(e,n,t){var i=e==null?0:e.length;if(!i)return-1;var a=i-1;return t!==s&&(a=te(t),a=t<0?Je(i+a,0):ln(a,i-1)),Hr(e,Y(n,3),a,!0)}function Dl(e){var n=e==null?0:e.length;return n?an(e,1):[]}function Xd(e){var n=e==null?0:e.length;return n?an(e,nn):[]}function Zd(e,n){var t=e==null?0:e.length;return t?(n=n===s?1:te(n),an(e,n)):[]}function Bd(e){for(var n=-1,t=e==null?0:e.length,i={};++n<t;){var a=e[n];i[a[0]]=a[1]}return i}function Hl(e){return e&&e.length?e[0]:s}function Jd(e,n,t){var i=e==null?0:e.length;if(!i)return-1;var a=t==null?0:te(t);return a<0&&(a=Je(i+a,0)),nr(e,n,a)}function Qd(e){var n=e==null?0:e.length;return n?Zn(e,0,-1):[]}var Vd=le(function(e){var n=$e(e,ha);return n.length&&n[0]===e[0]?ra(n):[]}),kd=le(function(e){var n=Bn(e),t=$e(e,ha);return n===Bn(t)?n=s:t.pop(),t.length&&t[0]===e[0]?ra(t,Y(n,2)):[]}),ef=le(function(e){var n=Bn(e),t=$e(e,ha);return n=typeof n=="function"?n:s,n&&t.pop(),t.length&&t[0]===e[0]?ra(t,s,n):[]});function nf(e,n){return e==null?"":Qo.call(e,n)}function Bn(e){var n=e==null?0:e.length;return n?e[n-1]:s}function tf(e,n,t){var i=e==null?0:e.length;if(!i)return-1;var a=i;return t!==s&&(a=te(t),a=a<0?Je(i+a,0):ln(a,i-1)),n===n?Oo(e,n,a):Hr(e,ws,a,!0)}function rf(e,n){return e&&e.length?ks(e,te(n)):s}var af=le(Gl);function Gl(e,n){return e&&e.length&&n&&n.length?la(e,n):e}function sf(e,n,t){return e&&e.length&&n&&n.length?la(e,n,Y(t,2)):e}function lf(e,n,t){return e&&e.length&&n&&n.length?la(e,n,s,t):e}var cf=ft(function(e,n){var t=e==null?0:e.length,i=ki(e,n);return tl(e,$e(n,function(a){return ht(a,t)?+a:a}).sort(fl)),i});function of(e,n){var t=[];if(!(e&&e.length))return t;var i=-1,a=[],c=e.length;for(n=Y(n,3);++i<c;){var u=e[i];n(u,i,e)&&(t.push(u),a.push(i))}return tl(e,a),t}function Aa(e){return e==null?e:nu.call(e)}function uf(e,n,t){var i=e==null?0:e.length;return i?(t&&typeof t!="number"&&pn(e,n,t)?(n=0,t=i):(n=n==null?0:te(n),t=t===s?i:te(t)),Zn(e,n,t)):[]}function df(e,n){return ci(e,n)}function ff(e,n,t){return ua(e,n,Y(t,2))}function hf(e,n){var t=e==null?0:e.length;if(t){var i=ci(e,n);if(i<t&&et(e[i],n))return i}return-1}function mf(e,n){return ci(e,n,!0)}function pf(e,n,t){return ua(e,n,Y(t,2),!0)}function xf(e,n){var t=e==null?0:e.length;if(t){var i=ci(e,n,!0)-1;if(et(e[i],n))return i}return-1}function gf(e){return e&&e.length?il(e):[]}function vf(e,n){return e&&e.length?il(e,Y(n,2)):[]}function _f(e){var n=e==null?0:e.length;return n?Zn(e,1,n):[]}function yf(e,n,t){return e&&e.length?(n=t||n===s?1:te(n),Zn(e,0,n<0?0:n)):[]}function bf(e,n,t){var i=e==null?0:e.length;return i?(n=t||n===s?1:te(n),n=i-n,Zn(e,n<0?0:n,i)):[]}function wf(e,n){return e&&e.length?oi(e,Y(n,3),!1,!0):[]}function jf(e,n){return e&&e.length?oi(e,Y(n,3)):[]}var Nf=le(function(e){return Pt(an(e,1,Ge,!0))}),Sf=le(function(e){var n=Bn(e);return Ge(n)&&(n=s),Pt(an(e,1,Ge,!0),Y(n,2))}),Cf=le(function(e){var n=Bn(e);return n=typeof n=="function"?n:s,Pt(an(e,1,Ge,!0),s,n)});function Af(e){return e&&e.length?Pt(e):[]}function If(e,n){return e&&e.length?Pt(e,Y(n,2)):[]}function Tf(e,n){return n=typeof n=="function"?n:s,e&&e.length?Pt(e,s,n):[]}function Ia(e){if(!(e&&e.length))return[];var n=0;return e=At(e,function(t){if(Ge(t))return n=Je(t.length,n),!0}),Yi(n,function(t){return $e(e,Hi(t))})}function ql(e,n){if(!(e&&e.length))return[];var t=Ia(e);return n==null?t:$e(t,function(i){return Rn(n,s,i)})}var Ef=le(function(e,n){return Ge(e)?wr(e,n):[]}),Rf=le(function(e){return fa(At(e,Ge))}),Pf=le(function(e){var n=Bn(e);return Ge(n)&&(n=s),fa(At(e,Ge),Y(n,2))}),Mf=le(function(e){var n=Bn(e);return n=typeof n=="function"?n:s,fa(At(e,Ge),s,n)}),Lf=le(Ia);function Of(e,n){return cl(e||[],n||[],br)}function $f(e,n){return cl(e||[],n||[],Sr)}var zf=le(function(e){var n=e.length,t=n>1?e[n-1]:s;return t=typeof t=="function"?(e.pop(),t):s,ql(e,t)});function Yl(e){var n=l(e);return n.__chain__=!0,n}function Ff(e,n){return n(e),e}function vi(e,n){return n(e)}var Wf=ft(function(e){var n=e.length,t=n?e[0]:0,i=this.__wrapped__,a=function(c){return ki(c,e)};return n>1||this.__actions__.length||!(i instanceof pe)||!ht(t)?this.thru(a):(i=i.slice(t,+t+(n?1:0)),i.__actions__.push({func:vi,args:[a],thisArg:s}),new Kn(i,this.__chain__).thru(function(c){return n&&!c.length&&c.push(s),c}))});function Uf(){return Yl(this)}function Df(){return new Kn(this.value(),this.__chain__)}function Hf(){this.__values__===s&&(this.__values__=ac(this.value()));var e=this.__index__>=this.__values__.length,n=e?s:this.__values__[this.__index__++];return{done:e,value:n}}function Gf(){return this}function qf(e){for(var n,t=this;t instanceof ri;){var i=Fl(t);i.__index__=0,i.__values__=s,n?a.__wrapped__=i:n=i;var a=i;t=t.__wrapped__}return a.__wrapped__=e,n}function Yf(){var e=this.__wrapped__;if(e instanceof pe){var n=e;return this.__actions__.length&&(n=new pe(this)),n=n.reverse(),n.__actions__.push({func:vi,args:[Aa],thisArg:s}),new Kn(n,this.__chain__)}return this.thru(Aa)}function Kf(){return ll(this.__wrapped__,this.__actions__)}var Xf=ui(function(e,n,t){Te.call(e,t)?++e[t]:ut(e,t,1)});function Zf(e,n,t){var i=ne(e)?ys:zu;return t&&pn(e,n,t)&&(n=s),i(e,Y(n,3))}function Bf(e,n){var t=ne(e)?At:qs;return t(e,Y(n,3))}var Jf=vl(Wl),Qf=vl(Ul);function Vf(e,n){return an(_i(e,n),1)}function kf(e,n){return an(_i(e,n),nn)}function eh(e,n,t){return t=t===s?1:te(t),an(_i(e,n),t)}function Kl(e,n){var t=ne(e)?qn:Rt;return t(e,Y(n,3))}function Xl(e,n){var t=ne(e)?vo:Gs;return t(e,Y(n,3))}var nh=ui(function(e,n,t){Te.call(e,t)?e[t].push(n):ut(e,t,[n])});function th(e,n,t,i){e=Sn(e)?e:hr(e),t=t&&!i?te(t):0;var a=e.length;return t<0&&(t=Je(a+t,0)),Ni(e)?t<=a&&e.indexOf(n,t)>-1:!!a&&nr(e,n,t)>-1}var rh=le(function(e,n,t){var i=-1,a=typeof n=="function",c=Sn(e)?y(e.length):[];return Rt(e,function(u){c[++i]=a?Rn(n,u,t):jr(u,n,t)}),c}),ih=ui(function(e,n,t){ut(e,t,n)});function _i(e,n){var t=ne(e)?$e:Js;return t(e,Y(n,3))}function ah(e,n,t,i){return e==null?[]:(ne(n)||(n=n==null?[]:[n]),t=i?s:t,ne(t)||(t=t==null?[]:[t]),el(e,n,t))}var sh=ui(function(e,n,t){e[t?0:1].push(n)},function(){return[[],[]]});function lh(e,n,t){var i=ne(e)?Ui:Ns,a=arguments.length<3;return i(e,Y(n,4),t,a,Rt)}function ch(e,n,t){var i=ne(e)?_o:Ns,a=arguments.length<3;return i(e,Y(n,4),t,a,Gs)}function oh(e,n){var t=ne(e)?At:qs;return t(e,wi(Y(n,3)))}function uh(e){var n=ne(e)?Ws:nd;return n(e)}function dh(e,n,t){(t?pn(e,n,t):n===s)?n=1:n=te(n);var i=ne(e)?Pu:td;return i(e,n)}function fh(e){var n=ne(e)?Mu:id;return n(e)}function hh(e){if(e==null)return 0;if(Sn(e))return Ni(e)?rr(e):e.length;var n=cn(e);return n==ze||n==Xe?e.size:aa(e).length}function mh(e,n,t){var i=ne(e)?Di:ad;return t&&pn(e,n,t)&&(n=s),i(e,Y(n,3))}var ph=le(function(e,n){if(e==null)return[];var t=n.length;return t>1&&pn(e,n[0],n[1])?n=[]:t>2&&pn(n[0],n[1],n[2])&&(n=[n[0]]),el(e,an(n,1),[])}),yi=Zo||function(){return rn.Date.now()};function xh(e,n){if(typeof n!="function")throw new Yn(x);return e=te(e),function(){if(--e<1)return n.apply(this,arguments)}}function Zl(e,n,t){return n=t?s:n,n=e&&n==null?e.length:n,dt(e,we,s,s,s,s,n)}function Bl(e,n){var t;if(typeof n!="function")throw new Yn(x);return e=te(e),function(){return--e>0&&(t=n.apply(this,arguments)),e<=1&&(n=s),t}}var Ta=le(function(e,n,t){var i=Q;if(t.length){var a=Tt(t,dr(Ta));i|=R}return dt(e,i,n,t,a)}),Jl=le(function(e,n,t){var i=Q|O;if(t.length){var a=Tt(t,dr(Jl));i|=R}return dt(n,i,e,t,a)});function Ql(e,n,t){n=t?s:n;var i=dt(e,Z,s,s,s,s,s,n);return i.placeholder=Ql.placeholder,i}function Vl(e,n,t){n=t?s:n;var i=dt(e,Ee,s,s,s,s,s,n);return i.placeholder=Vl.placeholder,i}function kl(e,n,t){var i,a,c,u,f,p,j=0,N=!1,I=!1,M=!0;if(typeof e!="function")throw new Yn(x);n=Jn(n)||0,Fe(t)&&(N=!!t.leading,I="maxWait"in t,c=I?Je(Jn(t.maxWait)||0,n):c,M="trailing"in t?!!t.trailing:M);function W(qe){var nt=i,xt=a;return i=a=s,j=qe,u=e.apply(xt,nt),u}function B(qe){return j=qe,f=Ir(de,n),N?W(qe):u}function ae(qe){var nt=qe-p,xt=qe-j,vc=n-nt;return I?ln(vc,c-xt):vc}function J(qe){var nt=qe-p,xt=qe-j;return p===s||nt>=n||nt<0||I&&xt>=c}function de(){var qe=yi();if(J(qe))return ge(qe);f=Ir(de,ae(qe))}function ge(qe){return f=s,M&&i?W(qe):(i=a=s,u)}function On(){f!==s&&ol(f),j=0,i=p=a=f=s}function xn(){return f===s?u:ge(yi())}function $n(){var qe=yi(),nt=J(qe);if(i=arguments,a=this,p=qe,nt){if(f===s)return B(p);if(I)return ol(f),f=Ir(de,n),W(p)}return f===s&&(f=Ir(de,n)),u}return $n.cancel=On,$n.flush=xn,$n}var gh=le(function(e,n){return Hs(e,1,n)}),vh=le(function(e,n,t){return Hs(e,Jn(n)||0,t)});function _h(e){return dt(e,on)}function bi(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new Yn(x);var t=function(){var i=arguments,a=n?n.apply(this,i):i[0],c=t.cache;if(c.has(a))return c.get(a);var u=e.apply(this,i);return t.cache=c.set(a,u)||c,u};return t.cache=new(bi.Cache||ot),t}bi.Cache=ot;function wi(e){if(typeof e!="function")throw new Yn(x);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function yh(e){return Bl(2,e)}var bh=sd(function(e,n){n=n.length==1&&ne(n[0])?$e(n[0],Pn(Y())):$e(an(n,1),Pn(Y()));var t=n.length;return le(function(i){for(var a=-1,c=ln(i.length,t);++a<c;)i[a]=n[a].call(this,i[a]);return Rn(e,this,i)})}),Ea=le(function(e,n){var t=Tt(n,dr(Ea));return dt(e,R,s,n,t)}),ec=le(function(e,n){var t=Tt(n,dr(ec));return dt(e,Me,s,n,t)}),wh=ft(function(e,n){return dt(e,oe,s,s,s,n)});function jh(e,n){if(typeof e!="function")throw new Yn(x);return n=n===s?n:te(n),le(e,n)}function Nh(e,n){if(typeof e!="function")throw new Yn(x);return n=n==null?0:Je(te(n),0),le(function(t){var i=t[n],a=Lt(t,0,n);return i&&It(a,i),Rn(e,this,a)})}function Sh(e,n,t){var i=!0,a=!0;if(typeof e!="function")throw new Yn(x);return Fe(t)&&(i="leading"in t?!!t.leading:i,a="trailing"in t?!!t.trailing:a),kl(e,n,{leading:i,maxWait:n,trailing:a})}function Ch(e){return Zl(e,1)}function Ah(e,n){return Ea(ma(n),e)}function Ih(){if(!arguments.length)return[];var e=arguments[0];return ne(e)?e:[e]}function Th(e){return Xn(e,fe)}function Eh(e,n){return n=typeof n=="function"?n:s,Xn(e,fe,n)}function Rh(e){return Xn(e,F|fe)}function Ph(e,n){return n=typeof n=="function"?n:s,Xn(e,F|fe,n)}function Mh(e,n){return n==null||Ds(e,n,en(n))}function et(e,n){return e===n||e!==e&&n!==n}var Lh=mi(ta),Oh=mi(function(e,n){return e>=n}),Xt=Xs((function(){return arguments})())?Xs:function(e){return We(e)&&Te.call(e,"callee")&&!Ms.call(e,"callee")},ne=y.isArray,$h=ms?Pn(ms):Gu;function Sn(e){return e!=null&&ji(e.length)&&!mt(e)}function Ge(e){return We(e)&&Sn(e)}function zh(e){return e===!0||e===!1||We(e)&&mn(e)==se}var Ot=Jo||Da,Fh=ps?Pn(ps):qu;function Wh(e){return We(e)&&e.nodeType===1&&!Tr(e)}function Uh(e){if(e==null)return!0;if(Sn(e)&&(ne(e)||typeof e=="string"||typeof e.splice=="function"||Ot(e)||fr(e)||Xt(e)))return!e.length;var n=cn(e);if(n==ze||n==Xe)return!e.size;if(Ar(e))return!aa(e).length;for(var t in e)if(Te.call(e,t))return!1;return!0}function Dh(e,n){return Nr(e,n)}function Hh(e,n,t){t=typeof t=="function"?t:s;var i=t?t(e,n):s;return i===s?Nr(e,n,s,t):!!i}function Ra(e){if(!We(e))return!1;var n=mn(e);return n==Ce||n==De||typeof e.message=="string"&&typeof e.name=="string"&&!Tr(e)}function Gh(e){return typeof e=="number"&&Os(e)}function mt(e){if(!Fe(e))return!1;var n=mn(e);return n==dn||n==Dn||n==ee||n==_t}function nc(e){return typeof e=="number"&&e==te(e)}function ji(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ye}function Fe(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function We(e){return e!=null&&typeof e=="object"}var tc=xs?Pn(xs):Ku;function qh(e,n){return e===n||ia(e,n,ba(n))}function Yh(e,n,t){return t=typeof t=="function"?t:s,ia(e,n,ba(n),t)}function Kh(e){return rc(e)&&e!=+e}function Xh(e){if(Td(e))throw new k(E);return Zs(e)}function Zh(e){return e===null}function Bh(e){return e==null}function rc(e){return typeof e=="number"||We(e)&&mn(e)==He}function Tr(e){if(!We(e)||mn(e)!=Re)return!1;var n=Jr(e);if(n===null)return!0;var t=Te.call(n,"constructor")&&n.constructor;return typeof t=="function"&&t instanceof t&&Kr.call(t)==qo}var Pa=gs?Pn(gs):Xu;function Jh(e){return nc(e)&&e>=-Ye&&e<=Ye}var ic=vs?Pn(vs):Zu;function Ni(e){return typeof e=="string"||!ne(e)&&We(e)&&mn(e)==fn}function Ln(e){return typeof e=="symbol"||We(e)&&mn(e)==Hn}var fr=_s?Pn(_s):Bu;function Qh(e){return e===s}function Vh(e){return We(e)&&cn(e)==En}function kh(e){return We(e)&&mn(e)==P}var em=mi(sa),nm=mi(function(e,n){return e<=n});function ac(e){if(!e)return[];if(Sn(e))return Ni(e)?Vn(e):Nn(e);if(xr&&e[xr])return Po(e[xr]());var n=cn(e),t=n==ze?Xi:n==Xe?Gr:hr;return t(e)}function pt(e){if(!e)return e===0?e:0;if(e=Jn(e),e===nn||e===-nn){var n=e<0?-1:1;return n*In}return e===e?e:0}function te(e){var n=pt(e),t=n%1;return n===n?t?n-t:n:0}function sc(e){return e?Gt(te(e),0,Ue):0}function Jn(e){if(typeof e=="number")return e;if(Ln(e))return Ve;if(Fe(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=Fe(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Ss(e);var t=Or.test(e);return t||zr.test(e)?po(e.slice(2),t?2:8):Lr.test(e)?Ve:+e}function lc(e){return rt(e,Cn(e))}function tm(e){return e?Gt(te(e),-Ye,Ye):e===0?e:0}function Ie(e){return e==null?"":Mn(e)}var rm=or(function(e,n){if(Ar(n)||Sn(n)){rt(n,en(n),e);return}for(var t in n)Te.call(n,t)&&br(e,t,n[t])}),cc=or(function(e,n){rt(n,Cn(n),e)}),Si=or(function(e,n,t,i){rt(n,Cn(n),e,i)}),im=or(function(e,n,t,i){rt(n,en(n),e,i)}),am=ft(ki);function sm(e,n){var t=cr(e);return n==null?t:Us(t,n)}var lm=le(function(e,n){e=Pe(e);var t=-1,i=n.length,a=i>2?n[2]:s;for(a&&pn(n[0],n[1],a)&&(i=1);++t<i;)for(var c=n[t],u=Cn(c),f=-1,p=u.length;++f<p;){var j=u[f],N=e[j];(N===s||et(N,ar[j])&&!Te.call(e,j))&&(e[j]=c[j])}return e}),cm=le(function(e){return e.push(s,Sl),Rn(oc,s,e)});function om(e,n){return bs(e,Y(n,3),tt)}function um(e,n){return bs(e,Y(n,3),na)}function dm(e,n){return e==null?e:ea(e,Y(n,3),Cn)}function fm(e,n){return e==null?e:Ys(e,Y(n,3),Cn)}function hm(e,n){return e&&tt(e,Y(n,3))}function mm(e,n){return e&&na(e,Y(n,3))}function pm(e){return e==null?[]:si(e,en(e))}function xm(e){return e==null?[]:si(e,Cn(e))}function Ma(e,n,t){var i=e==null?s:qt(e,n);return i===s?t:i}function gm(e,n){return e!=null&&Il(e,n,Wu)}function La(e,n){return e!=null&&Il(e,n,Uu)}var vm=yl(function(e,n,t){n!=null&&typeof n.toString!="function"&&(n=Xr.call(n)),e[n]=t},$a(An)),_m=yl(function(e,n,t){n!=null&&typeof n.toString!="function"&&(n=Xr.call(n)),Te.call(e,n)?e[n].push(t):e[n]=[t]},Y),ym=le(jr);function en(e){return Sn(e)?Fs(e):aa(e)}function Cn(e){return Sn(e)?Fs(e,!0):Ju(e)}function bm(e,n){var t={};return n=Y(n,3),tt(e,function(i,a,c){ut(t,n(i,a,c),i)}),t}function wm(e,n){var t={};return n=Y(n,3),tt(e,function(i,a,c){ut(t,a,n(i,a,c))}),t}var jm=or(function(e,n,t){li(e,n,t)}),oc=or(function(e,n,t,i){li(e,n,t,i)}),Nm=ft(function(e,n){var t={};if(e==null)return t;var i=!1;n=$e(n,function(c){return c=Mt(c,e),i||(i=c.length>1),c}),rt(e,_a(e),t),i&&(t=Xn(t,F|re|fe,gd));for(var a=n.length;a--;)da(t,n[a]);return t});function Sm(e,n){return uc(e,wi(Y(n)))}var Cm=ft(function(e,n){return e==null?{}:Vu(e,n)});function uc(e,n){if(e==null)return{};var t=$e(_a(e),function(i){return[i]});return n=Y(n),nl(e,t,function(i,a){return n(i,a[0])})}function Am(e,n,t){n=Mt(n,e);var i=-1,a=n.length;for(a||(a=1,e=s);++i<a;){var c=e==null?s:e[it(n[i])];c===s&&(i=a,c=t),e=mt(c)?c.call(e):c}return e}function Im(e,n,t){return e==null?e:Sr(e,n,t)}function Tm(e,n,t,i){return i=typeof i=="function"?i:s,e==null?e:Sr(e,n,t,i)}var dc=jl(en),fc=jl(Cn);function Em(e,n,t){var i=ne(e),a=i||Ot(e)||fr(e);if(n=Y(n,4),t==null){var c=e&&e.constructor;a?t=i?new c:[]:Fe(e)?t=mt(c)?cr(Jr(e)):{}:t={}}return(a?qn:tt)(e,function(u,f,p){return n(t,u,f,p)}),t}function Rm(e,n){return e==null?!0:da(e,n)}function Pm(e,n,t){return e==null?e:sl(e,n,ma(t))}function Mm(e,n,t,i){return i=typeof i=="function"?i:s,e==null?e:sl(e,n,ma(t),i)}function hr(e){return e==null?[]:Ki(e,en(e))}function Lm(e){return e==null?[]:Ki(e,Cn(e))}function Om(e,n,t){return t===s&&(t=n,n=s),t!==s&&(t=Jn(t),t=t===t?t:0),n!==s&&(n=Jn(n),n=n===n?n:0),Gt(Jn(e),n,t)}function $m(e,n,t){return n=pt(n),t===s?(t=n,n=0):t=pt(t),e=Jn(e),Du(e,n,t)}function zm(e,n,t){if(t&&typeof t!="boolean"&&pn(e,n,t)&&(n=t=s),t===s&&(typeof n=="boolean"?(t=n,n=s):typeof e=="boolean"&&(t=e,e=s)),e===s&&n===s?(e=0,n=1):(e=pt(e),n===s?(n=e,e=0):n=pt(n)),e>n){var i=e;e=n,n=i}if(t||e%1||n%1){var a=$s();return ln(e+a*(n-e+mo("1e-"+((a+"").length-1))),n)}return ca(e,n)}var Fm=ur(function(e,n,t){return n=n.toLowerCase(),e+(t?hc(n):n)});function hc(e){return Oa(Ie(e).toLowerCase())}function mc(e){return e=Ie(e),e&&e.replace(Fc,Ao).replace(ro,"")}function Wm(e,n,t){e=Ie(e),n=Mn(n);var i=e.length;t=t===s?i:Gt(te(t),0,i);var a=t;return t-=n.length,t>=0&&e.slice(t,a)==n}function Um(e){return e=Ie(e),e&&L.test(e)?e.replace(Ft,Io):e}function Dm(e){return e=Ie(e),e&&_e.test(e)?e.replace(ve,"\\$&"):e}var Hm=ur(function(e,n,t){return e+(t?"-":"")+n.toLowerCase()}),Gm=ur(function(e,n,t){return e+(t?" ":"")+n.toLowerCase()}),qm=gl("toLowerCase");function Ym(e,n,t){e=Ie(e),n=te(n);var i=n?rr(e):0;if(!n||i>=n)return e;var a=(n-i)/2;return hi(ei(a),t)+e+hi(kr(a),t)}function Km(e,n,t){e=Ie(e),n=te(n);var i=n?rr(e):0;return n&&i<n?e+hi(n-i,t):e}function Xm(e,n,t){e=Ie(e),n=te(n);var i=n?rr(e):0;return n&&i<n?hi(n-i,t)+e:e}function Zm(e,n,t){return t||n==null?n=0:n&&(n=+n),eu(Ie(e).replace(V,""),n||0)}function Bm(e,n,t){return(t?pn(e,n,t):n===s)?n=1:n=te(n),oa(Ie(e),n)}function Jm(){var e=arguments,n=Ie(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var Qm=ur(function(e,n,t){return e+(t?"_":"")+n.toLowerCase()});function Vm(e,n,t){return t&&typeof t!="number"&&pn(e,n,t)&&(n=t=s),t=t===s?Ue:t>>>0,t?(e=Ie(e),e&&(typeof n=="string"||n!=null&&!Pa(n))&&(n=Mn(n),!n&&tr(e))?Lt(Vn(e),0,t):e.split(n,t)):[]}var km=ur(function(e,n,t){return e+(t?" ":"")+Oa(n)});function ep(e,n,t){return e=Ie(e),t=t==null?0:Gt(te(t),0,e.length),n=Mn(n),e.slice(t,t+n.length)==n}function np(e,n,t){var i=l.templateSettings;t&&pn(e,n,t)&&(n=s),e=Ie(e),n=Si({},n,i,Nl);var a=Si({},n.imports,i.imports,Nl),c=en(a),u=Ki(a,c),f,p,j=0,N=n.interpolate||Fr,I="__p += '",M=Zi((n.escape||Fr).source+"|"+N.source+"|"+(N===v?H:Fr).source+"|"+(n.evaluate||Fr).source+"|$","g"),W="//# sourceURL="+(Te.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++co+"]")+`
`;e.replace(M,function(J,de,ge,On,xn,$n){return ge||(ge=On),I+=e.slice(j,$n).replace(Wc,To),de&&(f=!0,I+=`' +
__e(`+de+`) +
'`),xn&&(p=!0,I+=`';
`+xn+`;
__p += '`),ge&&(I+=`' +
((__t = (`+ge+`)) == null ? '' : __t) +
'`),j=$n+J.length,J}),I+=`';
`;var B=Te.call(n,"variable")&&n.variable;if(!B)I=`with (obj) {
`+I+`
}
`;else if(Ze.test(B))throw new k(w);I=(p?I.replace(Qt,""):I).replace(Vt,"$1").replace(zt,"$1;"),I="function("+(B||"obj")+`) {
`+(B?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(f?", __e = _.escape":"")+(p?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+I+`return __p
}`;var ae=xc(function(){return Ne(c,W+"return "+I).apply(s,u)});if(ae.source=I,Ra(ae))throw ae;return ae}function tp(e){return Ie(e).toLowerCase()}function rp(e){return Ie(e).toUpperCase()}function ip(e,n,t){if(e=Ie(e),e&&(t||n===s))return Ss(e);if(!e||!(n=Mn(n)))return e;var i=Vn(e),a=Vn(n),c=Cs(i,a),u=As(i,a)+1;return Lt(i,c,u).join("")}function ap(e,n,t){if(e=Ie(e),e&&(t||n===s))return e.slice(0,Ts(e)+1);if(!e||!(n=Mn(n)))return e;var i=Vn(e),a=As(i,Vn(n))+1;return Lt(i,0,a).join("")}function sp(e,n,t){if(e=Ie(e),e&&(t||n===s))return e.replace(V,"");if(!e||!(n=Mn(n)))return e;var i=Vn(e),a=Cs(i,Vn(n));return Lt(i,a).join("")}function lp(e,n){var t=zn,i=_n;if(Fe(n)){var a="separator"in n?n.separator:a;t="length"in n?te(n.length):t,i="omission"in n?Mn(n.omission):i}e=Ie(e);var c=e.length;if(tr(e)){var u=Vn(e);c=u.length}if(t>=c)return e;var f=t-rr(i);if(f<1)return i;var p=u?Lt(u,0,f).join(""):e.slice(0,f);if(a===s)return p+i;if(u&&(f+=p.length-f),Pa(a)){if(e.slice(f).search(a)){var j,N=p;for(a.global||(a=Zi(a.source,Ie(ye.exec(a))+"g")),a.lastIndex=0;j=a.exec(N);)var I=j.index;p=p.slice(0,I===s?f:I)}}else if(e.indexOf(Mn(a),f)!=f){var M=p.lastIndexOf(a);M>-1&&(p=p.slice(0,M))}return p+i}function cp(e){return e=Ie(e),e&&kt.test(e)?e.replace(Ct,$o):e}var op=ur(function(e,n,t){return e+(t?" ":"")+n.toUpperCase()}),Oa=gl("toUpperCase");function pc(e,n,t){return e=Ie(e),n=t?s:n,n===s?Ro(e)?Wo(e):wo(e):e.match(n)||[]}var xc=le(function(e,n){try{return Rn(e,s,n)}catch(t){return Ra(t)?t:new k(t)}}),up=ft(function(e,n){return qn(n,function(t){t=it(t),ut(e,t,Ta(e[t],e))}),e});function dp(e){var n=e==null?0:e.length,t=Y();return e=n?$e(e,function(i){if(typeof i[1]!="function")throw new Yn(x);return[t(i[0]),i[1]]}):[],le(function(i){for(var a=-1;++a<n;){var c=e[a];if(Rn(c[0],this,i))return Rn(c[1],this,i)}})}function fp(e){return $u(Xn(e,F))}function $a(e){return function(){return e}}function hp(e,n){return e==null||e!==e?n:e}var mp=_l(),pp=_l(!0);function An(e){return e}function za(e){return Bs(typeof e=="function"?e:Xn(e,F))}function xp(e){return Qs(Xn(e,F))}function gp(e,n){return Vs(e,Xn(n,F))}var vp=le(function(e,n){return function(t){return jr(t,e,n)}}),_p=le(function(e,n){return function(t){return jr(e,t,n)}});function Fa(e,n,t){var i=en(n),a=si(n,i);t==null&&!(Fe(n)&&(a.length||!i.length))&&(t=n,n=e,e=this,a=si(n,en(n)));var c=!(Fe(t)&&"chain"in t)||!!t.chain,u=mt(e);return qn(a,function(f){var p=n[f];e[f]=p,u&&(e.prototype[f]=function(){var j=this.__chain__;if(c||j){var N=e(this.__wrapped__),I=N.__actions__=Nn(this.__actions__);return I.push({func:p,args:arguments,thisArg:e}),N.__chain__=j,N}return p.apply(e,It([this.value()],arguments))})}),e}function yp(){return rn._===this&&(rn._=Yo),this}function Wa(){}function bp(e){return e=te(e),le(function(n){return ks(n,e)})}var wp=xa($e),jp=xa(ys),Np=xa(Di);function gc(e){return ja(e)?Hi(it(e)):ku(e)}function Sp(e){return function(n){return e==null?s:qt(e,n)}}var Cp=bl(),Ap=bl(!0);function Ua(){return[]}function Da(){return!1}function Ip(){return{}}function Tp(){return""}function Ep(){return!0}function Rp(e,n){if(e=te(e),e<1||e>Ye)return[];var t=Ue,i=ln(e,Ue);n=Y(n),e-=Ue;for(var a=Yi(i,n);++t<e;)n(t);return a}function Pp(e){return ne(e)?$e(e,it):Ln(e)?[e]:Nn(zl(Ie(e)))}function Mp(e){var n=++Go;return Ie(e)+n}var Lp=fi(function(e,n){return e+n},0),Op=ga("ceil"),$p=fi(function(e,n){return e/n},1),zp=ga("floor");function Fp(e){return e&&e.length?ai(e,An,ta):s}function Wp(e,n){return e&&e.length?ai(e,Y(n,2),ta):s}function Up(e){return js(e,An)}function Dp(e,n){return js(e,Y(n,2))}function Hp(e){return e&&e.length?ai(e,An,sa):s}function Gp(e,n){return e&&e.length?ai(e,Y(n,2),sa):s}var qp=fi(function(e,n){return e*n},1),Yp=ga("round"),Kp=fi(function(e,n){return e-n},0);function Xp(e){return e&&e.length?qi(e,An):0}function Zp(e,n){return e&&e.length?qi(e,Y(n,2)):0}return l.after=xh,l.ary=Zl,l.assign=rm,l.assignIn=cc,l.assignInWith=Si,l.assignWith=im,l.at=am,l.before=Bl,l.bind=Ta,l.bindAll=up,l.bindKey=Jl,l.castArray=Ih,l.chain=Yl,l.chunk=$d,l.compact=zd,l.concat=Fd,l.cond=dp,l.conforms=fp,l.constant=$a,l.countBy=Xf,l.create=sm,l.curry=Ql,l.curryRight=Vl,l.debounce=kl,l.defaults=lm,l.defaultsDeep=cm,l.defer=gh,l.delay=vh,l.difference=Wd,l.differenceBy=Ud,l.differenceWith=Dd,l.drop=Hd,l.dropRight=Gd,l.dropRightWhile=qd,l.dropWhile=Yd,l.fill=Kd,l.filter=Bf,l.flatMap=Vf,l.flatMapDeep=kf,l.flatMapDepth=eh,l.flatten=Dl,l.flattenDeep=Xd,l.flattenDepth=Zd,l.flip=_h,l.flow=mp,l.flowRight=pp,l.fromPairs=Bd,l.functions=pm,l.functionsIn=xm,l.groupBy=nh,l.initial=Qd,l.intersection=Vd,l.intersectionBy=kd,l.intersectionWith=ef,l.invert=vm,l.invertBy=_m,l.invokeMap=rh,l.iteratee=za,l.keyBy=ih,l.keys=en,l.keysIn=Cn,l.map=_i,l.mapKeys=bm,l.mapValues=wm,l.matches=xp,l.matchesProperty=gp,l.memoize=bi,l.merge=jm,l.mergeWith=oc,l.method=vp,l.methodOf=_p,l.mixin=Fa,l.negate=wi,l.nthArg=bp,l.omit=Nm,l.omitBy=Sm,l.once=yh,l.orderBy=ah,l.over=wp,l.overArgs=bh,l.overEvery=jp,l.overSome=Np,l.partial=Ea,l.partialRight=ec,l.partition=sh,l.pick=Cm,l.pickBy=uc,l.property=gc,l.propertyOf=Sp,l.pull=af,l.pullAll=Gl,l.pullAllBy=sf,l.pullAllWith=lf,l.pullAt=cf,l.range=Cp,l.rangeRight=Ap,l.rearg=wh,l.reject=oh,l.remove=of,l.rest=jh,l.reverse=Aa,l.sampleSize=dh,l.set=Im,l.setWith=Tm,l.shuffle=fh,l.slice=uf,l.sortBy=ph,l.sortedUniq=gf,l.sortedUniqBy=vf,l.split=Vm,l.spread=Nh,l.tail=_f,l.take=yf,l.takeRight=bf,l.takeRightWhile=wf,l.takeWhile=jf,l.tap=Ff,l.throttle=Sh,l.thru=vi,l.toArray=ac,l.toPairs=dc,l.toPairsIn=fc,l.toPath=Pp,l.toPlainObject=lc,l.transform=Em,l.unary=Ch,l.union=Nf,l.unionBy=Sf,l.unionWith=Cf,l.uniq=Af,l.uniqBy=If,l.uniqWith=Tf,l.unset=Rm,l.unzip=Ia,l.unzipWith=ql,l.update=Pm,l.updateWith=Mm,l.values=hr,l.valuesIn=Lm,l.without=Ef,l.words=pc,l.wrap=Ah,l.xor=Rf,l.xorBy=Pf,l.xorWith=Mf,l.zip=Lf,l.zipObject=Of,l.zipObjectDeep=$f,l.zipWith=zf,l.entries=dc,l.entriesIn=fc,l.extend=cc,l.extendWith=Si,Fa(l,l),l.add=Lp,l.attempt=xc,l.camelCase=Fm,l.capitalize=hc,l.ceil=Op,l.clamp=Om,l.clone=Th,l.cloneDeep=Rh,l.cloneDeepWith=Ph,l.cloneWith=Eh,l.conformsTo=Mh,l.deburr=mc,l.defaultTo=hp,l.divide=$p,l.endsWith=Wm,l.eq=et,l.escape=Um,l.escapeRegExp=Dm,l.every=Zf,l.find=Jf,l.findIndex=Wl,l.findKey=om,l.findLast=Qf,l.findLastIndex=Ul,l.findLastKey=um,l.floor=zp,l.forEach=Kl,l.forEachRight=Xl,l.forIn=dm,l.forInRight=fm,l.forOwn=hm,l.forOwnRight=mm,l.get=Ma,l.gt=Lh,l.gte=Oh,l.has=gm,l.hasIn=La,l.head=Hl,l.identity=An,l.includes=th,l.indexOf=Jd,l.inRange=$m,l.invoke=ym,l.isArguments=Xt,l.isArray=ne,l.isArrayBuffer=$h,l.isArrayLike=Sn,l.isArrayLikeObject=Ge,l.isBoolean=zh,l.isBuffer=Ot,l.isDate=Fh,l.isElement=Wh,l.isEmpty=Uh,l.isEqual=Dh,l.isEqualWith=Hh,l.isError=Ra,l.isFinite=Gh,l.isFunction=mt,l.isInteger=nc,l.isLength=ji,l.isMap=tc,l.isMatch=qh,l.isMatchWith=Yh,l.isNaN=Kh,l.isNative=Xh,l.isNil=Bh,l.isNull=Zh,l.isNumber=rc,l.isObject=Fe,l.isObjectLike=We,l.isPlainObject=Tr,l.isRegExp=Pa,l.isSafeInteger=Jh,l.isSet=ic,l.isString=Ni,l.isSymbol=Ln,l.isTypedArray=fr,l.isUndefined=Qh,l.isWeakMap=Vh,l.isWeakSet=kh,l.join=nf,l.kebabCase=Hm,l.last=Bn,l.lastIndexOf=tf,l.lowerCase=Gm,l.lowerFirst=qm,l.lt=em,l.lte=nm,l.max=Fp,l.maxBy=Wp,l.mean=Up,l.meanBy=Dp,l.min=Hp,l.minBy=Gp,l.stubArray=Ua,l.stubFalse=Da,l.stubObject=Ip,l.stubString=Tp,l.stubTrue=Ep,l.multiply=qp,l.nth=rf,l.noConflict=yp,l.noop=Wa,l.now=yi,l.pad=Ym,l.padEnd=Km,l.padStart=Xm,l.parseInt=Zm,l.random=zm,l.reduce=lh,l.reduceRight=ch,l.repeat=Bm,l.replace=Jm,l.result=Am,l.round=Yp,l.runInContext=m,l.sample=uh,l.size=hh,l.snakeCase=Qm,l.some=mh,l.sortedIndex=df,l.sortedIndexBy=ff,l.sortedIndexOf=hf,l.sortedLastIndex=mf,l.sortedLastIndexBy=pf,l.sortedLastIndexOf=xf,l.startCase=km,l.startsWith=ep,l.subtract=Kp,l.sum=Xp,l.sumBy=Zp,l.template=np,l.times=Rp,l.toFinite=pt,l.toInteger=te,l.toLength=sc,l.toLower=tp,l.toNumber=Jn,l.toSafeInteger=tm,l.toString=Ie,l.toUpper=rp,l.trim=ip,l.trimEnd=ap,l.trimStart=sp,l.truncate=lp,l.unescape=cp,l.uniqueId=Mp,l.upperCase=op,l.upperFirst=Oa,l.each=Kl,l.eachRight=Xl,l.first=Hl,Fa(l,(function(){var e={};return tt(l,function(n,t){Te.call(l.prototype,t)||(e[t]=n)}),e})(),{chain:!1}),l.VERSION=_,qn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){l[e].placeholder=l}),qn(["drop","take"],function(e,n){pe.prototype[e]=function(t){t=t===s?1:Je(te(t),0);var i=this.__filtered__&&!n?new pe(this):this.clone();return i.__filtered__?i.__takeCount__=ln(t,i.__takeCount__):i.__views__.push({size:ln(t,Ue),type:e+(i.__dir__<0?"Right":"")}),i},pe.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}}),qn(["filter","map","takeWhile"],function(e,n){var t=n+1,i=t==yn||t==Un;pe.prototype[e]=function(a){var c=this.clone();return c.__iteratees__.push({iteratee:Y(a,3),type:t}),c.__filtered__=c.__filtered__||i,c}}),qn(["head","last"],function(e,n){var t="take"+(n?"Right":"");pe.prototype[e]=function(){return this[t](1).value()[0]}}),qn(["initial","tail"],function(e,n){var t="drop"+(n?"":"Right");pe.prototype[e]=function(){return this.__filtered__?new pe(this):this[t](1)}}),pe.prototype.compact=function(){return this.filter(An)},pe.prototype.find=function(e){return this.filter(e).head()},pe.prototype.findLast=function(e){return this.reverse().find(e)},pe.prototype.invokeMap=le(function(e,n){return typeof e=="function"?new pe(this):this.map(function(t){return jr(t,e,n)})}),pe.prototype.reject=function(e){return this.filter(wi(Y(e)))},pe.prototype.slice=function(e,n){e=te(e);var t=this;return t.__filtered__&&(e>0||n<0)?new pe(t):(e<0?t=t.takeRight(-e):e&&(t=t.drop(e)),n!==s&&(n=te(n),t=n<0?t.dropRight(-n):t.take(n-e)),t)},pe.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},pe.prototype.toArray=function(){return this.take(Ue)},tt(pe.prototype,function(e,n){var t=/^(?:filter|find|map|reject)|While$/.test(n),i=/^(?:head|last)$/.test(n),a=l[i?"take"+(n=="last"?"Right":""):n],c=i||/^find/.test(n);a&&(l.prototype[n]=function(){var u=this.__wrapped__,f=i?[1]:arguments,p=u instanceof pe,j=f[0],N=p||ne(u),I=function(de){var ge=a.apply(l,It([de],f));return i&&M?ge[0]:ge};N&&t&&typeof j=="function"&&j.length!=1&&(p=N=!1);var M=this.__chain__,W=!!this.__actions__.length,B=c&&!M,ae=p&&!W;if(!c&&N){u=ae?u:new pe(this);var J=e.apply(u,f);return J.__actions__.push({func:vi,args:[I],thisArg:s}),new Kn(J,M)}return B&&ae?e.apply(this,f):(J=this.thru(I),B?i?J.value()[0]:J.value():J)})}),qn(["pop","push","shift","sort","splice","unshift"],function(e){var n=qr[e],t=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|shift)$/.test(e);l.prototype[e]=function(){var a=arguments;if(i&&!this.__chain__){var c=this.value();return n.apply(ne(c)?c:[],a)}return this[t](function(u){return n.apply(ne(u)?u:[],a)})}}),tt(pe.prototype,function(e,n){var t=l[n];if(t){var i=t.name+"";Te.call(lr,i)||(lr[i]=[]),lr[i].push({name:n,func:t})}}),lr[di(s,O).name]=[{name:"wrapper",func:s}],pe.prototype.clone=lu,pe.prototype.reverse=cu,pe.prototype.value=ou,l.prototype.at=Wf,l.prototype.chain=Uf,l.prototype.commit=Df,l.prototype.next=Hf,l.prototype.plant=qf,l.prototype.reverse=Yf,l.prototype.toJSON=l.prototype.valueOf=l.prototype.value=Kf,l.prototype.first=l.prototype.head,xr&&(l.prototype[xr]=Gf),l}),ir=Uo();Wt?((Wt.exports=ir)._=ir,zi._=ir):rn._=ir}).call(jg)})(Er,Er.exports)),Er.exports}var Sg=Ng();const Cg=({medicines:o,modifiedMedicines:d,onIncrease:s,onDecrease:_,onDelete:C,onCountChange:E,onReset:x,onSave:w,onCancel:z,modalVisible:ce,setModalVisible:q,totalPrice:F})=>{console.log("medicines : ",o),console.log("modifiedMedicines : ",d);const re=[{title:"#",dataIndex:"key",key:"key",render:(U,K,Q)=>Q+1},{title:"Medicine Name",dataIndex:"name",key:"name",render:(U,K)=>r.jsxs("div",{children:[U,K.type==="generic"&&r.jsx("span",{className:"text-muted ml-2",children:"(Generic)"})]})},{title:"Quantity Prescribed",dataIndex:"originalCount",key:"originalCount",render:(U,K)=>r.jsx("div",{style:{textAlign:"center"},children:K.originalData?K.originalData.count:K.count})},{title:"Confirmed Quantity",dataIndex:"count",key:"count",render:(U,K)=>r.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[r.jsx($t,{type:"text",icon:r.jsx(gx,{}),onClick:()=>_(K),style:{border:"1px solid #d9d9d9",borderRadius:"4px"}}),r.jsx(Jx,{type:"number",value:U,min:1,onChange:Q=>{const O=parseInt(Q.target.value);!isNaN(O)&&O>0&&E(K.key,O)},style:{width:"60px",margin:"0 8px",textAlign:"center"}}),r.jsx($t,{type:"text",icon:r.jsx(vx,{}),onClick:()=>s(K),style:{border:"1px solid #d9d9d9",borderRadius:"4px"}})]})},{title:"Price",dataIndex:"price",key:"price",align:"right",render:(U,K)=>{var O;const Q=((O=o.filter(X=>X.name===K.name).sort((X,Z)=>X.price-Z.price)[0])==null?void 0:O.key)===K.key;return r.jsxs("div",{style:{fontWeight:Q?500:"normal"},children:["₹",(U*(K.count||1)).toFixed(0)]})}},{title:"",key:"action",width:50,render:(U,K)=>r.jsx($t,{type:"text",danger:!0,icon:r.jsx(Ec,{}),onClick:()=>C(K)})}],fe=[{title:"#",dataIndex:"key",key:"key",render:(U,K,Q)=>Q+1},{title:"Medicine Name",dataIndex:"name",key:"name"},{title:"Quantity Prescribed",key:"originalCount",render:(U,K)=>{var Q;return r.jsx("div",{style:{textAlign:"center"},children:((Q=K.originalData)==null?void 0:Q.count)||K.count})}},{title:"Price",key:"price",render:(U,K)=>r.jsxs("div",{style:{textAlign:"right"},children:["₹",(K.price*(K.count||1)).toFixed(0)]})},{title:"Action",key:"action",render:(U,K)=>r.jsx(Mc,{title:"Reset to original",children:r.jsx($t,{type:"text",className:"editResetBtn",onClick:()=>x(K.key),children:"Add"})})}];return r.jsx("div",{children:r.jsxs(Qe,{show:ce,onHide:z,dialogClassName:"modal-lg",backdrop:"static",keyboard:!1,children:[r.jsxs(Qe.Header,{children:[r.jsx(Qe.Title,{children:"Edit Medicines"}),r.jsx(at,{variant:"link",className:"close",onClick:z,children:r.jsx(Ri,{})})]}),r.jsx(Qe.Body,{children:r.jsx(Mr,{children:r.jsxs("div",{className:"",children:[r.jsxs("div",{className:"table-name",children:[r.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1741071986993.png",alt:""}),r.jsx("p",{children:"Cost Savings (Generic & Branded)"})]}),r.jsx(vt,{dataSource:o,columns:re,pagination:!1,size:"small",className:"raphacureAssuredPrice order-section"}),d.length>0&&r.jsxs("div",{style:{marginTop:"24px"},children:[r.jsxs("div",{className:"table-name",children:[r.jsx(Ti,{}),r.jsx("p",{children:"Edited from original prescription"})]}),r.jsx(vt,{dataSource:d,columns:fe,pagination:!1,size:"small",className:"raphacureAssuredPrice order-section"})]}),r.jsx("div",{className:"order-summary mt-4",children:r.jsxs("div",{className:"summary",children:[r.jsxs("div",{className:"summary-row",children:[r.jsx("span",{className:"summary-label mr-1",children:"Total Medicines:"}),r.jsx("span",{className:"summary-value",children:o.length})]}),r.jsxs("div",{className:"summary-row summary-bold",children:[r.jsx("span",{className:"summary-label mr-1",children:"MRP: "}),r.jsxs("span",{className:"summary-value",children:["₹",F.toFixed(2)]})]})]})})]})})}),r.jsxs(Qe.Footer,{children:[r.jsx(at,{variant:"secondary",onClick:z,children:"Cancel"}),r.jsx(at,{variant:"primary",onClick:w,children:"Save Changes"})]})]})})},Ag=({labTests:o,modifiedTests:d,onDelete:s,onReset:_,onSave:C,onCancel:E,modalVisible:x,setModalVisible:w,totalPrice:z})=>{const ce=[{title:"#",dataIndex:"key",key:"key",render:(F,re,fe)=>fe+1},{title:"Test Name",dataIndex:"name",key:"name"},{title:"Price",dataIndex:"price",key:"price",align:"right",render:F=>r.jsxs("div",{children:["₹",F.toFixed(0)]})},{title:"",key:"action",width:50,render:(F,re)=>r.jsx($t,{type:"text",danger:!0,icon:r.jsx(Ec,{}),onClick:()=>s(re)})}],q=[{title:"#",dataIndex:"key",key:"key",render:(F,re,fe)=>fe+1},{title:"Test Name",dataIndex:"name",key:"name"},{title:"Price",key:"price",render:(F,re)=>r.jsxs("div",{style:{textAlign:"right"},children:["₹",re.price.toFixed(0)]})},{title:"Action",key:"action",render:(F,re)=>r.jsx(Mc,{title:"Reset to original",children:r.jsx($t,{type:"text",className:"editResetBtn",onClick:()=>_(re.key),children:"Add"})})}];return r.jsx("div",{children:r.jsxs(Qe,{show:x,onHide:E,dialogClassName:"modal-lg",backdrop:"static",keyboard:!1,children:[r.jsxs(Qe.Header,{children:[r.jsx(Qe.Title,{children:"Edit Lab Tests"}),r.jsx(at,{variant:"link",className:"close",onClick:E,children:r.jsx(Ri,{})})]}),r.jsx(Qe.Body,{children:r.jsx(Mr,{children:r.jsxs("div",{className:"",children:[r.jsx(vt,{dataSource:o,columns:ce,pagination:!1,size:"small",className:"raphacureAssuredPrice order-section"}),d.length>0&&r.jsxs("div",{style:{marginTop:"24px"},children:[r.jsxs("div",{className:"table-name",children:[r.jsx(Ti,{}),r.jsx("p",{children:"Edited from original prescription"})]}),r.jsx(vt,{dataSource:d,columns:q,pagination:!1,size:"small",className:"raphacureAssuredPrice order-section"})]}),r.jsx("div",{className:"order-summary mt-4",children:r.jsxs("div",{className:"summary",children:[r.jsxs("div",{className:"summary-row",children:[r.jsx("span",{className:"summary-label mr-1",children:"Total Tests:"}),r.jsx("span",{className:"summary-value",children:o.length})]}),r.jsxs("div",{className:"summary-row summary-bold",children:[r.jsx("span",{className:"summary-label mr-1",children:"MRP: "}),r.jsxs("span",{className:"summary-value",children:["₹",z.toFixed(2)]})]})]})})]})})}),r.jsxs(Qe.Footer,{children:[r.jsx(at,{variant:"secondary",onClick:E,children:"Cancel"}),r.jsx(at,{variant:"primary",onClick:C,children:"Save Changes"})]})]})})},Ig=({vendors:o,visible:d,onClose:s,selectedVendor:_,setSelectedVendor:C,allAddress:E,selectedPackages:x,selectedAddress:w,setSelectedAddress:z})=>{const[ce,q]=T.useState([]),[F,re]=T.useState({sort_by:"distance",order:"asc"}),fe=Jt();T.useEffect(()=>{x!=null&&x.service_code&&(q([]),U([x.service_code],w,F))},[x==null?void 0:x.service_code]);const U=async(O,X,Z={})=>{var Ee,R,Me,we;if(console.log("idArray : ",O),console.log("selectedAddress : ",X),!(O!=null&&O.length)){Ke.error("Tests not available");return}if(!(X!=null&&X.latitude)||!(X!=null&&X.longitude)){Ke.error("Address not available");return}try{const oe=await fe(_x({service_codes:O,lat:X==null?void 0:X.latitude,long:X==null?void 0:X.longitude,...Z}));if(console.log("updateVendorsList res : ",(Ee=oe==null?void 0:oe.payload)==null?void 0:Ee.vendors),oe!=null&&oe.error){Ke.error(((R=oe==null?void 0:oe.error)==null?void 0:R.message)||"Unknown Error Occurred");return}(Me=oe==null?void 0:oe.payload)!=null&&Me.vendors&&q((we=oe==null?void 0:oe.payload)==null?void 0:we.vendors)}catch(oe){console.error("Error fetching vendors:",oe),Ke.error("Failed to fetch vendors")}},K=async O=>{const X=E.find(Z=>Z.id===O);await z(X),console.log("Selected address:",X),x&&await U([x.service_code],X,F)},Q=async(O,X)=>{const Z={...F,[O]:X};re(Z),x&&w&&await U([x.service_code],w,Z)};return T.useEffect(()=>{console.log("commonVendorsList : ",ce)},[ce]),r.jsxs(Qe,{show:d,onHide:s,centered:!0,size:"xl",children:[r.jsxs(Qe.Header,{children:[r.jsx(Qe.Title,{children:"Choose Your Labs"}),r.jsx(at,{variant:"link",className:"close",onClick:s,children:r.jsx(Ri,{})})]}),r.jsx(Qe.Body,{children:r.jsxs(Mr,{children:[r.jsxs("div",{className:"d-flex flex-row gap-4 mb-4 ",children:[r.jsx(Rr,{placeholder:"Select Address",className:"w-full",style:{maxWidth:"700px"},value:w==null?void 0:w.id,onChange:K,options:E==null?void 0:E.map(O=>({value:O.id,label:O.address}))}),r.jsx(Rr,{placeholder:"Sort By",className:"w-40",value:F.sort_by,onChange:O=>Q("sort_by",O),options:[{value:"distance",label:"Distance"},{value:"price",label:"Price"}]}),r.jsx(Rr,{placeholder:"Order",className:"w-32",value:F.order,onChange:O=>Q("order",O),options:[{value:"asc",label:"Ascending"},{value:"desc",label:"Descending"}]})]}),r.jsx(vt,{dataSource:ce,className:"raphacureAssuredPrice order-section",columns:[{title:"Labs Name",dataIndex:"name",key:"name"},{title:"Distance",dataIndex:"distance_km",key:"distance",render:O=>r.jsx("span",{children:O?`${Number(O).toFixed(2)} Km`:"-"})},{title:"Total Test",dataIndex:"total_test",key:"total_test",render:(O,X)=>{var Z;return r.jsx("span",{children:(Z=x==null?void 0:x.tests)==null?void 0:Z.length})}},{title:"Date",dataIndex:"created_at",key:"created_at",render:O=>{var X;return(X=new Date(O))==null?void 0:X.toLocaleDateString()}},{title:"Time",dataIndex:"slot_start_time",key:"slot_start_time",render:O=>{var X,Z;return(Z=(X=O.split(":"))==null?void 0:X.slice(0,2))==null?void 0:Z.join(":")}},{title:"Price",dataIndex:"mor_buying_price",key:"mor_buying_price",render:O=>`₹${(O==null?void 0:O.toLocaleString("en-IN"))||"-"}`},{title:"Select",key:"select",render:(O,X)=>r.jsx($t,{type:(_==null?void 0:_.id)===X.id?"primary":"default",onClick:()=>C(X),children:(_==null?void 0:_.id)===X.id?"Selected":"Select"})}],pagination:!1})]})}),r.jsxs(Qe.Footer,{children:[r.jsx(at,{variant:"secondary",onClick:s,children:"Close"}),r.jsx(at,{variant:"primary",onClick:()=>s(),children:"Save Changes"})]})]})},Nc=({doctorName:o="",dateTime:d="",type:s="",medicineCount:_=0,diagnosticsCount:C=0,mrp:E=0,discountedPrice:x=0,walletAmount:w=0,pendingAmount:z=0,prescriptionNumber:ce="",onViewDetails:q,onPlaceOrder:F,walletInfo:re})=>r.jsxs("div",{className:"prescription-card",children:[r.jsxs("div",{className:`prescription-header ${s==="doctorPrescribedRx"?"headerBlue":"headerYellow"}`,children:[r.jsx("div",{className:"prescription-title",children:s==="doctorPrescribedRx"?"Doctor Prescribed Rx":"Rapha Assured Price"}),r.jsx("div",{className:"prescription-number",children:ce})]}),r.jsx("div",{className:"prescription-doctor-name",children:o}),r.jsx("div",{className:"prescription-datetime",children:d}),r.jsxs("div",{className:"prescription-details",children:[r.jsxs("div",{className:"prescription-count",children:[_," Medicines + ",C," Diagnostics"]}),r.jsxs("div",{className:"prescription-price",children:[s==="raphaAssuredPrice"&&r.jsxs("span",{className:"mrp",children:["MRP ₹",E==null?void 0:E.toFixed(2)]}),r.jsxs("span",{className:"discounted-price",children:["₹",x==null?void 0:x.toFixed(2)]})]})]}),r.jsxs("div",{className:"prescription-wallet",children:[r.jsx("span",{children:"Wallet Amount Used:"}),r.jsxs("span",{className:"wallet-amount",children:["₹ ",w," ",r.jsx("button",{onClick:q,className:"view-details-btn",children:"View Details"})]})]}),r.jsxs("div",{className:"prescription-pending",children:[r.jsx("span",{className:"pending-label",children:"Pending Amount:"}),r.jsxs("span",{className:"pending-amount",children:["₹ ",z]}),r.jsx("button",{onClick:F,className:"place-order-btn",children:"Place Order"})]})]}),Tg=({show:o,handleClose:d,walletInfo:s,docBrandedMedicines:_=[],docGenericMedicines:C=[],docLabTests:E=[],raphaSimilarMedicines:x=[],raphaPackage:w,docOverallPendingAmount:z,raphaOverallPendingAmount:ce})=>{const q=Z=>{const Ee=s==null?void 0:s.find(R=>R.type===Z&&R.wallet_type==="wallet_amount");return(Ee==null?void 0:Ee.total_amount)||0},F=(Z=[])=>Z.reduce((Ee,R)=>Ee+(Number(R.price)||0),0),re=F(_)+F(C),fe=F(E),U=0,K=F(x);w!=null&&w.tests;const Q=(w==null?void 0:w.discounted_price)||0,X=[{category:"Prescribed Medicine",walletBalance:q("pharmacy"),docPrescribed:re,raphaAssure:K},{category:"Prescribed Diagnostics",walletBalance:q("diagnostic_tests"),docPrescribed:fe,raphaAssure:Q},{category:"Prescribed Radiology",walletBalance:q("ctmri_tests"),docPrescribed:U,raphaAssure:0}];return r.jsxs(Qe,{show:o,onHide:d,size:"lg",centered:!0,dialogClassName:"wallet-cost-breakdown-modal-dialog",children:[r.jsxs(Qe.Header,{children:[r.jsx(Qe.Title,{children:"Wallet Cost Break Down"}),r.jsx(at,{variant:"link",className:"close",onClick:d,children:r.jsx(Ri,{})})]}),r.jsx(Qe.Body,{children:r.jsx(Mr,{children:r.jsxs(Qx,{bordered:!0,hover:!0,responsive:!0,className:"wallet-cost-breakdown-table",size:"lg",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{}),r.jsx("th",{className:"text-center",children:"Wallet Balance"}),r.jsx("th",{className:"text-center header-doc",children:"01 Doctor Prescribed"}),r.jsx("th",{className:"text-center header-rapha",children:"02 Raphacure Assure"})]})}),r.jsx("tbody",{children:X.map((Z,Ee)=>r.jsxs("tr",{children:[r.jsx("td",{children:Z.category}),r.jsxs("td",{className:"text-center",children:["₹ ",Z.walletBalance.toFixed(2)]}),r.jsxs("td",{className:"cell-doc text-center",children:["₹ ",Z.docPrescribed.toFixed(2)]}),r.jsxs("td",{className:"cell-rapha text-center",children:["₹ ",Z.raphaAssure.toFixed(2)]})]},Ee))}),r.jsx("tfoot",{children:r.jsxs("tr",{className:"additional-amount-row",children:[r.jsx("td",{colSpan:2,className:"text-right font-weight-bold",children:"Additional Amount:"}),r.jsxs("td",{className:"cell-doc text-center font-weight-bold",children:["₹ ",Number(z).toFixed(2)]}),r.jsxs("td",{className:"cell-rapha text-center font-weight-bold",children:["₹ ",Number(ce).toFixed(2)]})]})})]})})})]})},Eg=()=>{console.log("Download button clicked")},Rg=()=>{console.log("Menu button clicked")},Pg=({bkDetails:o,selectedBooking:d})=>{var L;const[s,_]=T.useState(null),[C,E]=T.useState([]),[x,w]=T.useState([]),[z,ce]=T.useState([]),[q,F]=T.useState([]),[re,fe]=T.useState([]),[U,K]=T.useState([]),Q=Jt();Ei();const[O,X]=T.useState(null),[Z,Ee]=T.useState([]),[R,Me]=T.useState(null),[we,oe]=T.useState("medicine"),[on,zn]=T.useState(null),[_n,Fn]=T.useState(!1),[Wn,yn]=T.useState(!1),[he,Un]=yx.useState(null),[nn,Ye]=T.useState(null),[In,Ve]=T.useState(!1),[Ue,un]=T.useState(!1),[ke,Tn]=T.useState([]),[ue,xe]=T.useState([]),[ee,se]=T.useState([]),[Se,De]=T.useState(null),[Ce,dn]=T.useState(null),[Dn,ze]=T.useState(!1),He=()=>{ze(!1)};T.useEffect(()=>{console.log("brandedMedicines : ",C),console.log("genericMedicines : ",x)},[C,x]);const Qn=[{title:"#",dataIndex:"key",key:"key",width:40},{title:"Medicine",dataIndex:"name",key:"name"},{title:"Quantity",dataIndex:"count",key:"count"},{title:"Price",dataIndex:"price",key:"price",render:h=>`₹${h}`}],Re=[{title:"#",dataIndex:"id",key:"id",width:40},{title:"Prescribed Test",dataIndex:"name",key:"name"}];T.useEffect(()=>{console.log("bkDetails : ",o),console.log("selectedBooking : ",d)},[o,d]),T.useEffect(()=>{console.log("suggestedPackages : ",q),console.log("labTests : ",z)},[q,z]),T.useEffect(()=>{d!=null&&d.id&&st()},[d==null?void 0:d.id]),T.useEffect(()=>{_t()},[z]),T.useEffect(()=>{!(C!=null&&C.length)&&!(x!=null&&x.length)||Xe([...C.map(h=>h==null?void 0:h.key),...x.map(h=>h==null?void 0:h.key)])},[C,x]),T.useEffect(()=>{if(re.length>0){const g=[...C,...x].map(v=>v==null?void 0:v.key).map(v=>{const A=re.find(ie=>ie.originalMedicine.service_code===v);if(!A)return null;const S=(A==null?void 0:A.similarGenericMedicines)||(A==null?void 0:A.originalMedicine);return console.log("medToUse : ",S),{key:S==null?void 0:S.service_code,name:S==null?void 0:S.service_name,count:1,type:Bt((S==null?void 0:S.medicine_type)||(S==null?void 0:S.category_key)),price:S!=null&&S.actual_cost?S!=null&&S.discount_percentage?Math.round(S.actual_cost*(1-S.discount_percentage/100)):S.actual_cost:0,actualPrice:S==null?void 0:S.actual_cost,...S}}).filter(Boolean);K(g),console.log("filteredSimilarMedicines: ",g)}},[re]),T.useEffect(()=>{var h;(h=d==null?void 0:d.user)!=null&&h.id&&(Hn(),fn())},[(L=d==null?void 0:d.user)==null?void 0:L.id]);const st=async()=>{var v,A,S,ie,ve,_e;const h=await Q(bx(d==null?void 0:d.id));if(console.log("res : ",h),h!=null&&h.error){Ke.error(((v=h==null?void 0:h.error)==null?void 0:v.message)||"Unknown Error Occurred");return}console.log("attachments : ",(A=h==null?void 0:h.payload)==null?void 0:A.attachments);const g=(ie=(S=h==null?void 0:h.payload)==null?void 0:S.attachments)==null?void 0:ie.find(V=>{var Ae,hn;return(V==null?void 0:V.prescriptions_medicines)&&((Ae=V==null?void 0:V.prescriptions_medicines)==null?void 0:Ae.length)>0||(V==null?void 0:V.prescriptions_tests)&&((hn=V==null?void 0:V.prescriptions_tests)==null?void 0:hn.length)>0});if(g){_(g);const V=[],Ae=[];(ve=g.prescriptions_medicines)==null||ve.forEach(D=>{var wn,tn,Ze,jn,H,ye,Lr,Or,$r,zr;((wn=D.medicine)==null?void 0:wn.category_key)==="branded"?(console.log("med : ",D),V.push({key:D.medicine_id,name:D.medicine.service_name,days:D.no_of_days,intake:D.intake,price:((Ze=(tn=D==null?void 0:D.medicine)==null?void 0:tn.price)==null?void 0:Ze.discounted_price)||((H=(jn=D==null?void 0:D.medicine)==null?void 0:jn.price)==null?void 0:H.actual_cost)||0,count:D.count,type:"Branded"})):((ye=D.medicine)==null?void 0:ye.category_key)==="generic"&&Ae.push({key:D.medicine_id,name:D.medicine.service_name,days:D.no_of_days,intake:D.intake,price:((Or=(Lr=D==null?void 0:D.medicine)==null?void 0:Lr.price)==null?void 0:Or.discounted_price)||((zr=($r=D==null?void 0:D.medicine)==null?void 0:$r.price)==null?void 0:zr.actual_cost)||0,count:D.count,type:"Generic"})}),E(V),w(Ae);const hn=((_e=g.prescriptions_tests)==null?void 0:_e.map(D=>{var wn,tn,Ze,jn,H,ye;return{key:D==null?void 0:D.id,name:(wn=D==null?void 0:D.test)==null?void 0:wn.service_name,type:"Lab Test",id:(tn=D==null?void 0:D.test)==null?void 0:tn.service_code,price:((jn=(Ze=D==null?void 0:D.test)==null?void 0:Ze.price)==null?void 0:jn.discounted_price)||((ye=(H=D==null?void 0:D.test)==null?void 0:H.price)==null?void 0:ye.actual_cost)||0,note:(D==null?void 0:D.note)||""}}))||[];ce(hn)}},_t=async()=>{var v;if(!(z!=null&&z.length)){F([]);return}const h={test_codes:z.map(A=>A==null?void 0:A.id)},g=await Q(wx(h));if(console.log("getSimilarPackages Res : ",g==null?void 0:g.payload),g!=null&&g.error){Ke.error(((v=g==null?void 0:g.error)==null?void 0:v.message)||"Unknown Error Occured"),F([]);return}console.log("labtest : ",z),F(Array.isArray(g==null?void 0:g.payload)?g==null?void 0:g.payload:[])},bn=async h=>{var A,S,ie,ve,_e,V,Ae;if(!(h!=null&&h.length))return;const v=await Q(Sx({serviceCodes:h}));if(console.log("raphaAssuredSimilarMedicineAPI Res : ",(S=(A=v==null?void 0:v.payload)==null?void 0:A.data)==null?void 0:S.data),v!=null&&v.error){Ke.error(((ie=v==null?void 0:v.error)==null?void 0:ie.message)||"Unknown Error Occured"),fe([]);return}fe(Array.isArray((_e=(ve=v==null?void 0:v.payload)==null?void 0:ve.data)==null?void 0:_e.data)?(Ae=(V=v==null?void 0:v.payload)==null?void 0:V.data)==null?void 0:Ae.data:[])},Xe=Sg.debounce(bn,300),fn=async()=>{var g,v,A,S,ie,ve,_e;if(!((g=d==null?void 0:d.user)!=null&&g.id))return;const h=await Q(jx((v=d==null?void 0:d.user)==null?void 0:v.id));if(h!=null&&h.error){Ke.error(((A=h==null?void 0:h.error)==null?void 0:A.message)||"Unknown Error Occurred");return}console.log("getAllAddress res : ",(ie=(S=h==null?void 0:h.payload)==null?void 0:S.data)==null?void 0:ie.addresses),Ee((_e=(ve=h==null?void 0:h.payload)==null?void 0:ve.data)==null?void 0:_e.addresses)},Hn=async()=>{var g,v,A,S,ie,ve,_e,V;if(!((g=d==null?void 0:d.user)!=null&&g.id))return;const h=await Q(Nx((v=d==null?void 0:d.user)==null?void 0:v.id));console.log("getAllWalletDetails resp : ",(S=(A=h==null?void 0:h.payload)==null?void 0:A.data)==null?void 0:S.wallets),(ve=(ie=h==null?void 0:h.payload)==null?void 0:ie.data)!=null&&ve.wallets&&X((V=(_e=h==null?void 0:h.payload)==null?void 0:_e.data)==null?void 0:V.wallets)},lt=()=>{const h=[...C,...x].map((g,v)=>(console.log("medicinesWithKeys : ",g),{...g,key:(g==null?void 0:g.key)||(g==null?void 0:g.id)||(g==null?void 0:g.service_code)||`med-${v}`,editable:!0,count:g.count||1,type:g.type||(C.includes(g)?"branded":"generic")}));xe(h),yn(!0)},En=async h=>{const g=Z.find(v=>v.id===h);await dn(g)},P=h=>{sn(h.key,(h.count||1)+1)},G=h=>{h.count>1&&sn(h.key,h.count-1)},be=h=>{const g={...h,count:h.count,price:h.price,type:h.type,key:h.key};se(v=>{const A=v.findIndex(S=>S.key===h.key);if(A>=0){const S=[...v];return S[A]={...S[A],count:0},S}else return[...v,{...h,count:0,originalData:g}]}),xe(v=>v.filter(A=>A.key!==h.key))},je=h=>{se(g=>g.filter(v=>v.key!==h)),xe(g=>{const v=ee.find(A=>A.key===h);return v!=null&&v.originalData?g.some(S=>S.key===h)?g.map(S=>S.key===h?{...v.originalData,editable:!0}:S):[...g,{...v.originalData,editable:!0}]:g})},me=()=>{const h=[],g=[];console.log("editableMedicines : ",ue),ue.forEach(v=>{const A={...v,editable:void 0};delete A.editable,v.type==="branded"?h.push(A):g.push(A)}),E(h),w(g),se([]),xe([])},sn=(h,g)=>{xe(v=>v.map(S=>{if(S.key===h){const ie=S.originalData||{...S,count:S.count},ve=g!==ie.count;return se(_e=>{if(ve){const V=_e.findIndex(Ae=>Ae.key===h);if(V>=0){const Ae=[..._e];return Ae[V]={...Ae[V],count:g},Ae}else return[..._e,{...S,count:g,originalData:ie}]}else return _e.filter(V=>V.key!==h)}),{...S,count:g,originalData:ie}}return S}))},yt=h=>{Tn(ke.map(g=>g.key===h.key?{...g,count:0}:g))},bt=h=>{var v;const g=(v=ke.find(A=>A.key===h))==null?void 0:v.originalData;Tn(g?ke.map(A=>A.key===h?{...g,originalData:g,count:1}:A):ke.filter(A=>A.key!==h))},wt=()=>{const h=ke.filter(g=>g.count!==0).map(({originalData:g,count:v,...A})=>A);ce(h),un(!1)},jt=()=>{un(!1)},Nt=()=>{var h,g,v,A,S,ie,ve,_e,V;return r.jsxs("div",{className:"userInfo",children:[r.jsxs("div",{className:"action-icons",children:[r.jsx(wg,{size:23,onClick:Eg}),r.jsx(Cx,{size:20,onClick:Rg})]}),(h=d==null?void 0:d.user)!=null&&h.image?r.jsx("img",{src:(g=d==null?void 0:d.user)==null?void 0:g.image,alt:((v=d==null?void 0:d.user)==null?void 0:v.first_name)||"",className:"w-full m-auto"}):r.jsx(Tc,{size:50,className:"m-auto"}),r.jsxs("div",{className:"d-flex flex-column gap-4",children:[r.jsxs("p",{className:"font-bold",children:[(A=d==null?void 0:d.user)==null?void 0:A.first_name," ",(S=d==null?void 0:d.user)==null?void 0:S.last_name]}),r.jsx("p",{children:Bt((d==null?void 0:d.type)||"")}),r.jsxs("p",{children:["Age : ",(ie=d==null?void 0:d.user)==null?void 0:ie.age]}),r.jsxs("p",{children:["Phone : ",(ve=d==null?void 0:d.user)==null?void 0:ve.phone]})]}),r.jsxs("div",{className:"d-flex flex-column gap-6",children:[r.jsx("p",{children:"Doctor"}),r.jsx("p",{children:"Date"}),r.jsx("p",{children:"Time"}),r.jsx("p",{children:"Patient Id"}),r.jsx("p",{children:"Address"})]}),r.jsxs("div",{className:"bkInfoGrid gap-4",children:[r.jsx("p",{children:(_e=d==null?void 0:d.doctor)==null?void 0:_e.name}),r.jsx("p",{children:d==null?void 0:d.collection_1_date}),r.jsx("p",{children:d==null?void 0:d.collection_1_slot}),r.jsx("p",{children:(V=d==null?void 0:d.user)==null?void 0:V.id}),r.jsx(Rr,{placeholder:"Select Address",className:"w-full",style:{maxWidth:"700px"},value:Ce==null?void 0:Ce.id,onChange:En,options:Z==null?void 0:Z.map(Ae=>({value:Ae.id,label:Ae.address}))})]})]})},St=()=>r.jsxs("div",{children:[r.jsx("h5",{children:"Doctor Prescribed Rx"}),r.jsxs("div",{className:"d-flex flex-row gap-4 w-full justify-content-center my-4",children:[r.jsxs("div",{className:"w-full",children:[r.jsxs("div",{className:"table-name",children:[r.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1741069818584.png",alt:""}),r.jsx("p",{children:"Medicines"}),r.jsxs("button",{className:"edit-button",onClick:lt,children:[r.jsx(bg,{size:16}),r.jsx("span",{children:"Edit"})]})]}),r.jsxs("div",{className:"order-section w-full",children:[r.jsx(vt,{dataSource:[...C,...x],columns:Qn,pagination:!1,size:"small",className:"prescriptionTable"}),r.jsx("div",{className:"order-summary",children:r.jsxs("div",{className:"summary",children:[r.jsxs("div",{className:"summary-row",children:[r.jsxs("span",{className:"summary-label mr-1",children:["Total Medicines:"," "]}),r.jsx("span",{className:"summary-value",children:C.length+x.length})]}),r.jsxs("div",{className:"summary-row summary-bold",children:[r.jsx("span",{className:"summary-label mr-1",children:"MRP: "}),r.jsxs("span",{className:"summary-value",children:["₹",[...C,...x].reduce((h,g)=>h+((g==null?void 0:g.price)||0),0).toFixed(2)]})]})]})})]})]}),r.jsxs("div",{className:"w-full",children:[r.jsxs("div",{className:"table-name",children:[r.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1741069869092.png",alt:""}),r.jsx("p",{children:"Prescribed Tests"})]}),r.jsxs("div",{className:"order-section w-full",children:[r.jsx(vt,{dataSource:z,columns:Re,pagination:!1,size:"small",className:"prescriptionTable"}),r.jsx("div",{className:"order-summary",children:r.jsxs("div",{className:"summary",children:[r.jsxs("div",{className:"summary-row",children:[r.jsxs("span",{className:"summary-label mr-1",children:["Total Biomarkers:"," "]}),r.jsx("span",{className:"summary-value",children:z.length})]}),r.jsxs("div",{className:"summary-row summary-bold",children:[r.jsx("span",{className:"summary-label mr-1",children:"MRP: "}),r.jsxs("span",{className:"summary-value",children:["₹",z.reduce((h,g)=>h+((g==null?void 0:g.price)||0),0).toFixed(2)]})]})]})})]})]})]})]}),Qt=()=>{var v;const h=[{title:"#",dataIndex:"key",key:"key",width:40},{title:"Medicine",dataIndex:"name",key:"name"},{title:"Quantity",dataIndex:"count",key:"count",render:A=>`${A} ${A>1?"Tablets":"Tablet"}`},{title:"Availability",dataIndex:"category_key",key:"category_key",render:A=>A==="branded"?r.jsx("strong",{children:Bt(A)}):A},{title:"Price",dataIndex:"price",key:"price",render:A=>`₹${A}`}],g=[{title:"#",dataIndex:"service_code",key:"service_code",width:40},{title:"Packages",dataIndex:"service_name",key:"service_name"},{title:"Additional Tests",dataIndex:"tests",key:"tests",render:A=>{const S=((A==null?void 0:A.length)||0)-((z==null?void 0:z.length)||0);return r.jsxs("div",{className:"d-flex flex-row gap-4 align-items-center text-underline cursor-pointer",onClick:ie=>{ie.stopPropagation(),zn(A),Fn(!0)},children:[S===0?"No Additional Tests":`${S} + ${(z==null?void 0:z.length)||0}`,r.jsx(Ti,{className:"test-info-icon"})]})}},{title:"Lab Partner",key:"vendors",render:(A,S)=>{var ie;return r.jsx("span",{className:"text-underline cursor-pointer",onClick:ve=>{ve.stopPropagation(),Un(null),Me((R==null?void 0:R.service_code)===(S==null?void 0:S.service_code)?null:S),Ye(S==null?void 0:S.vendors),Ve(!0)},children:(R==null?void 0:R.service_code)===(S==null?void 0:S.service_code)?he==null?void 0:he.name:((ie=S==null?void 0:S.vendors)==null?void 0:ie.length)>0?S.vendors[0].name:"No vendors available"})}},{title:"Price",dataIndex:"discounted_price",key:"discounted_price"},{title:"",key:"select",render:(A,S)=>r.jsx($t,{className:`select-btn ${(R==null?void 0:R.service_code)===(S==null?void 0:S.service_code)?"selected":""}`,type:(R==null?void 0:R.service_code)===(S==null?void 0:S.service_code)?"primary":"default",onClick:ie=>{ie.stopPropagation(),Me((R==null?void 0:R.service_code)===(S==null?void 0:S.service_code)?null:S)},children:(R==null?void 0:R.service_code)===(S==null?void 0:S.service_code)?"Selected":"Select"}),width:80}];return T.useRef([]),T.useEffect(()=>{console.log("selectedPackages : ",R)},[R]),T.useEffect(()=>{console.log("similarMedicines : ",re)},[re]),r.jsxs("div",{className:"raphacureAssuredPrice",children:[r.jsx("h5",{children:"Raphacure Assured Price"}),r.jsxs("div",{className:"wrapper",children:[r.jsxs("div",{className:"tabs mb-4 w-fit",children:[r.jsx("button",{className:`tab-btn ${we==="medicine"?"active":""}`,onClick:()=>oe("medicine"),children:"Medicine"}),r.jsx("button",{className:`tab-btn ${we==="diagnostics"?"active":""}`,onClick:()=>oe("diagnostics"),children:"Diagnostics"})]}),we==="medicine"&&r.jsx("div",{className:"d-flex flex-row gap-4 w-full justify-content-center my-4",children:r.jsxs("div",{className:"w-full",children:[r.jsxs("div",{className:"table-name",children:[r.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1741071986993.png",alt:""}),r.jsx("p",{children:"Medicine Cost Savings (Generic & Branded)"})]}),r.jsxs("div",{className:"order-section bg-white w-full",children:[r.jsxs("div",{className:"tableHeader d-flex flex-row gap-4 align-items-center justify-content-between",children:[r.jsxs("div",{className:"table-name",children:[r.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1741069869092.png",alt:""}),r.jsx("p",{children:(he==null?void 0:he.name)||"No vendor selected"})]}),r.jsx(yc,{showTime:!0,format:"YYYY-MM-DD HH:mm",placeholder:"Select date and time",className:"w-fit",getPopupContainer:A=>A.parentNode,minuteStep:30,onChange:A=>De(A),value:Se})]}),r.jsx(vt,{dataSource:U,columns:h,pagination:!1,size:"small",className:"prescriptionTable"}),r.jsxs("div",{className:"order-summary",children:[r.jsxs("div",{className:"summary",children:[r.jsxs("div",{className:"summary-row",children:[r.jsxs("span",{className:"summary-label mr-1",children:["Total Biomarkers:"," "]}),r.jsxs("span",{className:"summary-value",children:[U.filter(A=>A.category_key==="generic").length," ","Generic +"," ",U.filter(A=>A.category_key==="branded").length," ","Branded"]})]}),r.jsxs("div",{className:"summary-row summary-bold",children:[r.jsx("span",{className:"summary-label mr-1",children:"MRP: "}),r.jsxs("span",{className:"summary-value",children:[r.jsxs("span",{className:"text-decoration-line-through mr-2",children:["₹",U.reduce((A,S)=>A+((S==null?void 0:S.actualPrice)||0),0).toFixed(2)]}),r.jsxs("span",{children:["₹",U.reduce((A,S)=>A+((S==null?void 0:S.price)||0),0).toFixed(2)]})]})]})]}),r.jsxs("div",{className:"summary",children:[r.jsxs("div",{className:"summary-row d-flex align-items-center gap-2",children:[r.jsx(Ti,{}),r.jsx("span",{className:"summary-label mr-1",children:"Branded is given when Generic is not available"})]}),r.jsx("div",{className:"summary-row summary-bold"})]})]})]})]})}),we==="diagnostics"&&r.jsx("div",{className:"d-flex flex-row gap-4 w-full justify-content-center my-4",children:r.jsxs("div",{className:"w-full",children:[r.jsxs("div",{className:"table-name",children:[r.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1741071986993.png",alt:""}),r.jsx("p",{children:"Diagnostics cost saving offer (Prescribed Tests + Additional Tests)"})]}),r.jsxs("div",{className:"order-section bg-white w-full",children:[r.jsxs("div",{className:"tableHeader d-flex flex-row gap-4 align-items-center justify-content-between",children:[r.jsxs("div",{className:"table-name",children:[r.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1741069869092.png",alt:""}),r.jsx("p",{children:(he==null?void 0:he.name)||"No vendor selected"})]}),r.jsx(yc,{showTime:!0,format:"YYYY-MM-DD HH:mm",placeholder:"Select date and time",className:"w-fit",getPopupContainer:A=>A.parentNode,minuteStep:30,onChange:A=>De(A),value:Se})]}),r.jsx(vt,{dataSource:q,columns:g,pagination:!1,size:"small",className:"prescriptionTable"}),r.jsx("div",{className:"order-summary",children:r.jsxs("div",{className:"summary",children:[r.jsxs("div",{className:"summary-row",children:[r.jsxs("span",{className:"summary-label mr-1",children:["Total Biomarkers:"," "]}),r.jsxs("span",{className:"summary-value",children:[((v=R==null?void 0:R.tests)==null?void 0:v.length)||0," Parameters"]})]}),r.jsxs("div",{className:"summary-row summary-bold",children:[r.jsx("span",{className:"summary-label mr-1",children:"MRP: "}),r.jsxs("span",{className:"summary-value",children:["₹",(R==null?void 0:R.discounted_price)||0]})]})]})})]})]})})]})]})},Vt=({tests:h,onClose:g})=>(console.log("TestDetailsSidebar tests : ",h),r.jsxs("div",{className:`test-details-sidebar ${_n?"visible":""}`,children:[r.jsxs("div",{className:"sidebar-header",children:[r.jsxs("h4",{children:["Packages includes ",h==null?void 0:h.length," tests"]}),r.jsx("button",{onClick:g,children:"×"})]}),r.jsx("ul",{className:"sidebar-content p-0",children:h==null?void 0:h.map((v,A)=>{var S,ie,ve,_e,V,Ae,hn,D;return r.jsxs("li",{className:"test-item d-flex flex-row gap-4 align-items-center",children:[r.jsx("span",{className:"bullet-point",children:"•"}),r.jsxs("div",{className:"test-details w-full d-flex flex-row gap-2 justify-content-between align-items-center",children:[r.jsx("p",{children:v.service_name}),((S=v==null?void 0:v.price)==null?void 0:S.actual_cost)&&((ie=v==null?void 0:v.price)==null?void 0:ie.discount_percentage)>0&&r.jsxs("div",{className:"price-info d-flex flex-row gap-2",children:[r.jsxs("span",{className:"text-decoration-line-through ms-2",children:["₹",(ve=v==null?void 0:v.price)==null?void 0:ve.actual_cost]}),((_e=v==null?void 0:v.price)==null?void 0:_e.discounted_price)&&r.jsxs("span",{className:"discounted-price",children:["₹",(V=v==null?void 0:v.price)==null?void 0:V.discounted_price]})]}),((Ae=v==null?void 0:v.price)==null?void 0:Ae.actual_cost)&&((hn=v==null?void 0:v.price)==null?void 0:hn.discount_percentage)<=0&&r.jsx("div",{className:"price-info ms-2",children:r.jsxs("span",{children:["₹",(D=v==null?void 0:v.price)==null?void 0:D.actual_cost]})})]})]},A)})})]})),zt=()=>{if(!(O!=null&&O.length)){Ke.error("No wallet details found");return}ze(!0)},Ct=async h=>{var v,A;console.log("handleAddToCart body : ",h);const g=await Q(Ax(h));if(console.log("addToPatientCart res : ",g==null?void 0:g.payload),g!=null&&g.error){Ke.error(((v=g==null?void 0:g.error)==null?void 0:v.message)||"Unknown Error Occured");return}if((A=g==null?void 0:g.payload)!=null&&A.success){Ke.success("Items Added to Patient's Cart Successfully"),Ft();return}},Ft=async()=>{var v,A,S,ie;if(!((v=d==null?void 0:d.user)!=null&&v.id))return;const h={id:(A=d==null?void 0:d.user)==null?void 0:A.id,payload:{bookings:[{useWallet:!0,attachment_ids:null,isCod:!0}]},merchant:"",domain_name:(d==null?void 0:d.domain_name)||""},g=await Q(Ix(h));if(console.log("res bookPatientCartAPI: ",g),g!=null&&g.error){Ke.error(((S=g==null?void 0:g.error)==null?void 0:S.message)||"Unknown Error Occured");return}if((ie=g==null?void 0:g.payload)!=null&&ie.success){Ke.success("Booking Succesful");return}},kt=()=>{const[h,g]=T.useState({}),[v,A]=T.useState({}),S=ve=>{var _e,V,Ae,hn,D,wn;if(console.log("selectedAddress : ",Ce),console.log("Place order clicked"),!(Ce!=null&&Ce.id)){Ke.error("Please select an address");return}if(ve==="doctorPrescribedRx"){console.log("Doctor prescribed Rx clicked"),console.log("docPrescribedOptions : ",h);const tn=[...C,...x],Ze=[...z];if(console.log("docMeds : ",tn),console.log("docLabtests : ",Ze),!(h!=null&&h.dateTime)||(h==null?void 0:h.dateTime)==="N/A"){Ke.error("Please select a date and time");return}(!(h!=null&&h.vendorName)||(h==null?void 0:h.vendorName)==="Not Selected")&&Ke.error("Default Vendor set to Raphacure selected Vendor");const jn={id:(_e=d==null?void 0:d.user)==null?void 0:_e.id,payload:{carts:[{virtual_type:null,test_codes:[...z].map(H=>H.id||H.service_code),useWallet:!0,vendor_id:(he==null?void 0:he.id)||"1",address_id:Ce==null?void 0:Ce.id,user_id:(V=d==null?void 0:d.user)==null?void 0:V.id,collection_1_date:null,collection_1_slot:null,attachment_ids:null,section_key:"labtest",instant_booking:null},{user_id:(Ae=d==null?void 0:d.user)==null?void 0:Ae.id,useWallet:!0,collection_1_date:null,collection_1_slot:null,medicines:[...C,...x].map(H=>{var ye;return{service_code:(H==null?void 0:H.key)||(H==null?void 0:H.id)||(H==null?void 0:H.service_code)||((ye=H==null?void 0:H.originalData)==null?void 0:ye.key),count:(H==null?void 0:H.count)||1}}),attachment_ids:null,section_key:"pharmacy"}]}};Ct(jn)}else if(ve==="raphaAssuredPrice"){console.log("raphaAssuredOptions : ",v);const tn=[...U],Ze=R;if(console.log("raphaAssuredMeds : ",tn),console.log("raphaAssuredPkg : ",Ze),!(Ze!=null&&Ze.service_code)){Ke.error("Please select a package");return}if(!(tn!=null&&tn.length)){Ke.error("Please add medicines");return}if(!(v!=null&&v.dateTime)||(v==null?void 0:v.dateTime)==="N/A"){Ke.error("Please select a date and time");return}if(!(v!=null&&v.vendorName)||(v==null?void 0:v.vendorName)==="Not Selected"){Ke.error("Default Vendor set to Raphacure selected Vendor");return}console.log("Rapha assured price clicked"),console.log("raphaAssuredOptions : ",v);const jn={id:(hn=d==null?void 0:d.user)==null?void 0:hn.id,payload:{carts:[{virtual_type:null,package_code:Ze==null?void 0:Ze.service_code,useWallet:!0,vendor_id:(he==null?void 0:he.id)||"1",address_id:Ce==null?void 0:Ce.id,user_id:(D=d==null?void 0:d.user)==null?void 0:D.id,collection_1_date:null,collection_1_slot:null,attachment_ids:null,section_key:"labtest",instant_booking:null},{user_id:(wn=d==null?void 0:d.user)==null?void 0:wn.id,useWallet:!0,collection_1_date:null,collection_1_slot:null,medicines:[...tn].map(H=>{var ye;return{service_code:(H==null?void 0:H.key)||(H==null?void 0:H.id)||(H==null?void 0:H.service_code)||((ye=H==null?void 0:H.originalData)==null?void 0:ye.key),count:(H==null?void 0:H.count)||1}}),attachment_ids:null,section_key:"pharmacy"}]}};Ct(jn)}},ie=ve=>{if(!ve)return"N/A";const _e=new Date(ve),V=_e.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}),Ae=_e.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"2-digit"}).replace(/\//g,"/");return`${V} | ${Ae}`};return T.useEffect(()=>{var ve;try{const _e=["ctmri_tests","diagnostic_tests","pharmacy"],V=((ve=O==null?void 0:O.filter(H=>_e.includes(H.type)))==null?void 0:ve.reduce((H,ye)=>ye.wallet_type==="wallet_amount"&&ye.amount?H+Number(ye.amount):H,0))||0,Ae=[...C||[],...x||[]],hn=z||[],D=Ae.reduce((H,ye)=>H+(Number(ye==null?void 0:ye.price)||0),0)+hn.reduce((H,ye)=>H+(Number(ye==null?void 0:ye.price)||0),0);g({vendorName:(he==null?void 0:he.name)||"Not Selected",dateTime:ie(Se),type:"doctorPrescribedRx",medicineCount:Ae.length,diagnosticsCount:hn.length,mrp:0,discountedPrice:D.toFixed(2),walletAmount:V,pendingAmount:Math.max(0,D-V).toFixed(2),prescriptionNumber:"01"});const wn=U||[],tn=(R==null?void 0:R.tests)||[],Ze=wn.reduce((H,ye)=>H+(Number(ye==null?void 0:ye.actual_cost)||0),0)+(Number(R==null?void 0:R.actual_cost)||0),jn=wn.reduce((H,ye)=>H+(Number(ye==null?void 0:ye.price)||0),0)+(Number(R==null?void 0:R.discounted_price)||0);A({vendorName:(he==null?void 0:he.name)||"Not Selected",dateTime:ie(Se),type:"raphaAssuredPrice",medicineCount:wn.length,diagnosticsCount:tn.length,mrp:Ze.toFixed(2),discountedPrice:jn.toFixed(2),walletAmount:V,pendingAmount:Math.max(0,jn-V).toFixed(2),prescriptionNumber:"02"})}catch(_e){console.error("Error calculating prescription options:",_e),g({vendorName:"Error loading data",dateTime:ie(Se),type:"doctorPrescribedRx",medicineCount:0,diagnosticsCount:0,mrp:0,discountedPrice:"0.00",walletAmount:0,pendingAmount:0,prescriptionNumber:"01"}),A({vendorName:"Error loading data",dateTime:ie(Se),type:"raphaAssuredPrice",medicineCount:0,diagnosticsCount:0,mrp:"0.00",discountedPrice:"0.00",walletAmount:0,pendingAmount:0,prescriptionNumber:"02"})}},[Se,he==null?void 0:he.name,C,x,z,U,R,O]),r.jsxs("div",{className:"selectedOption",children:[r.jsx(Nc,{doctorName:h==null?void 0:h.vendorName,dateTime:h==null?void 0:h.dateTime,type:h==null?void 0:h.type,medicineCount:h==null?void 0:h.medicineCount,diagnosticsCount:h==null?void 0:h.diagnosticsCount,mrp:parseFloat((h==null?void 0:h.mrp)||0),discountedPrice:parseFloat((h==null?void 0:h.discountedPrice)||0),walletAmount:parseFloat((h==null?void 0:h.walletAmount)||0),pendingAmount:parseFloat((h==null?void 0:h.pendingAmount)||0),prescriptionNumber:h==null?void 0:h.prescriptionNumber,onViewDetails:zt,onPlaceOrder:()=>{S(h==null?void 0:h.type)},walletInfo:O}),r.jsx(Nc,{doctorName:v==null?void 0:v.vendorName,dateTime:v==null?void 0:v.dateTime,type:v==null?void 0:v.type,medicineCount:v==null?void 0:v.medicineCount,diagnosticsCount:v==null?void 0:v.diagnosticsCount,mrp:parseFloat((v==null?void 0:v.mrp)||0),discountedPrice:parseFloat((v==null?void 0:v.discountedPrice)||0),walletAmount:parseFloat((v==null?void 0:v.walletAmount)||0),pendingAmount:parseFloat((v==null?void 0:v.pendingAmount)||0),prescriptionNumber:v==null?void 0:v.prescriptionNumber,onViewDetails:zt,onPlaceOrder:()=>{S(v==null?void 0:v.type)},walletInfo:O}),O&&r.jsx(Tg,{show:Dn,handleClose:He,walletInfo:O,docBrandedMedicines:C,docGenericMedicines:x,docLabTests:z,raphaSimilarMedicines:U,raphaPackage:R,docOverallPendingAmount:(h==null?void 0:h.pendingAmount)||"0.00",raphaOverallPendingAmount:(v==null?void 0:v.pendingAmount)||"0.00"})]})};return r.jsxs(Mr,{children:[r.jsx(Nt,{}),r.jsx(St,{}),r.jsx(Qt,{}),r.jsx(kt,{}),_n&&r.jsx(Vt,{tests:on,onClose:()=>Fn(!1)}),r.jsx(Ig,{selectedVendor:he,setSelectedVendor:Un,vendors:nn,onClose:()=>Ve(!1),visible:In,allAddress:Z,selectedPackages:R,selectedAddress:Ce,setSelectedAddress:dn}),r.jsx(Cg,{medicines:ue,modifiedMedicines:ee,onIncrease:P,onDecrease:G,onDelete:be,onCountChange:(h,g)=>sn(h,g),onReset:je,onSave:me,onCancel:()=>yn(!1),modalVisible:Wn,setModalVisible:yn,totalPrice:ue.reduce((h,g)=>h+((g==null?void 0:g.price)||0)*((g==null?void 0:g.count)||1),0)}),r.jsx(Ag,{labTests:ke,modifiedTests:ke,onDelete:yt,onReset:bt,onSave:wt,onCancel:jt,modalVisible:Ue,setModalVisible:un,totalPrice:ke.reduce((h,g)=>h+((g==null?void 0:g.price)||0),0)})]})},r0=o=>{var X,Z,Ee,R,Me,we,oe,on,zn,_n,Fn,Wn,yn,he,Un,nn,Ye,In,Ve,Ue,un,ke,Tn;const d=Jt(),[s,_]=T.useState(o==null?void 0:o.modalData),[C,E]=T.useState(),[x,w]=T.useState(),[z,ce]=T.useState("details"),[q,F]=T.useState({selectedStatus:s==null?void 0:s.status,paymentMethod:(s==null?void 0:s.payment_note)||"",paymentSource:(s==null?void 0:s.payment_source)||""}),re=T.useCallback(async(ue=(xe=>(xe=o==null?void 0:o.modalData)==null?void 0:xe.id)())=>{var se,Se,De;if(!ue){vn.error("Booking ID is required");return}const ee=await d(Tx(ue));if(ee!=null&&ee.error){vn.error(((se=ee==null?void 0:ee.error)==null?void 0:se.message)||"Unknown Error Occured");return}_((De=(Se=ee==null?void 0:ee.payload)==null?void 0:Se.data)==null?void 0:De.booking)},[d]);T.useEffect(()=>{re()},[re]),T.useEffect(()=>{(async()=>{var xe,ee;try{const se=await d(Rc((xe=o.modalData)==null?void 0:xe.id));if(se!=null&&se.error){vn.error(((ee=se==null?void 0:se.error)==null?void 0:ee.message)??"unknown error occured");return}w(se==null?void 0:se.payload)}catch{vn.error("unexpected error")}})()},[]);const fe=async()=>{var ee,se,Se;if(!((ee=o==null?void 0:o.modalData)!=null&&ee.id)){vn.error("Booking ID is required");return}const ue={booking_id:(se=o==null?void 0:o.modalData)==null?void 0:se.id,payment_note:q.paymentMethod,payment_source:q.paymentSource},xe=await d(Lx(ue));if(xe!=null&&xe.error){vn.error(((Se=xe==null?void 0:xe.error)==null?void 0:Se.message)||"Unknown Error Occured");return}vn.success("Payment methods updated successfully")},U=async()=>{var ue;try{const xe={status:q.selectedStatus,bookingIds:[`${o.modalData.id}`]},ee=await d(Ic(xe));if(ee!=null&&ee.error){vn.error(((ue=ee==null?void 0:ee.error)==null?void 0:ue.message)??"unknown error occured");return}vn.success("Booking status updated successfully"),o.handleClose()}catch{vn.error("Failed to update booking status")}},K=()=>{q.selectedStatus!==(s==null?void 0:s.status)&&U(),(q.paymentMethod!==(s==null?void 0:s.payment_note)||q.paymentSource!==(s==null?void 0:s.payment_source))&&fe(),o.handleClose()};T.useEffect(()=>{Q()},[(X=o==null?void 0:o.modalData)==null?void 0:X.id,d]);const Q=async()=>{var xe,ee,se,Se,De,Ce;if(console.log("bookingId : ",(xe=o==null?void 0:o.modalData)==null?void 0:xe.id),!((ee=o==null?void 0:o.modalData)!=null&&ee.id))return;const ue=await d(Ex((se=o==null?void 0:o.modalData)==null?void 0:se.id));if(ue!=null&&ue.error){vn.error(((Se=ue==null?void 0:ue.error)==null?void 0:Se.message)||"Unknown Error Occured");return}else console.log((De=ue==null?void 0:ue.payload)==null?void 0:De.data),E((Ce=ue==null?void 0:ue.payload)==null?void 0:Ce.data)},O=[{value:"details",label:"Booking Details",children:r.jsx(vg,{formData:q,setFormData:F,modalData:s})},{value:"history",label:"Employee History",children:r.jsx(gg,{bkDetails:s,additionalInfo:C,fetchBookingDetails:re,selectedBooking:o==null?void 0:o.modalData,fetchBookingAdditionalDetails:Q,onClose:()=>{d(Ac({type:""})),o==null||o.handleClose()}})},{value:"notes",label:"Communication Logs",children:r.jsx(_g,{additionalInfo:C})},{value:"3",label:"RCA",children:r.jsx(yg,{additionalInfo:C})},...((Z=s==null?void 0:s.attachments)==null?void 0:Z.length)>0?[{value:"4",label:"Prescription",children:r.jsx(Pg,{bkDetails:s,selectedBooking:o==null?void 0:o.modalData})}]:[]];return r.jsxs(qa,{title:`Booking Details (${(Ee=o==null?void 0:o.modalData)==null?void 0:Ee.id})`,open:!0,handleClose:o.handleClose,children:[r.jsx(qa.Body,{children:r.jsx(lg,{children:r.jsxs("div",{className:"main-container ",children:[r.jsx("div",{className:"booking-details-container rounded-[20px] p-4",children:r.jsxs("div",{className:"patient-info max-[500px]:flex-col",children:[r.jsxs("div",{className:"flex gap-4 items-center max-[675px]:flex-col",children:[r.jsx("div",{className:"patient-photo",children:(Me=(R=o==null?void 0:o.modalData)==null?void 0:R.user)!=null&&Me.image?r.jsx("img",{className:"w-[100px] h-[100px] rounded-full",src:(oe=(we=o==null?void 0:o.modalData)==null?void 0:we.user)==null?void 0:oe.image,alt:"Patient"}):r.jsx(Rx,{className:"w-[100px] h-[100px] text-gray-400 rounded-full"})}),r.jsxs("div",{className:"patient-details",children:[r.jsxs("h2",{className:"patient-name",children:["Mr."," ",Px((zn=(on=o==null?void 0:o.modalData)==null?void 0:on.user)==null?void 0:zn.first_name,(Fn=(_n=o==null?void 0:o.modalData)==null?void 0:_n.user)==null?void 0:Fn.last_name)]}),r.jsxs("div",{className:"flex gap-10 max-[1000px]:flex-col",children:[r.jsxs("div",{children:[r.jsxs("p",{children:["Employee ID: #",(Wn=x==null?void 0:x.user)==null?void 0:Wn.id]}),r.jsxs("p",{children:["Age/Sex: ",((yn=x==null?void 0:x.user)==null?void 0:yn.age)??"N/A",r.jsx("b",{children:"/"}),((he=x==null?void 0:x.user)==null?void 0:he.gender)??"N/A"]}),r.jsxs("p",{children:["Ph No: ",((Un=x==null?void 0:x.user)==null?void 0:Un.phone)??"N/A"]})]}),r.jsxs("div",{children:[r.jsxs("p",{children:["E-mail: ",((nn=x==null?void 0:x.user)==null?void 0:nn.email)??"N/A"]}),r.jsxs("p",{children:["Booking status:"," ",Bt((Ye=o==null?void 0:o.modalData)==null?void 0:Ye.status)||"N/A"]}),r.jsxs("p",{children:["Payment status:"," ",Bt((In=o==null?void 0:o.modalData)==null?void 0:In.payment_status)||"N/A"]}),["opd_consultation","virtual_consultation","sec_opinion_booking"].includes((Ve=o==null?void 0:o.modalData)==null?void 0:Ve.type)&&r.jsxs("p",{children:["Doctor Name:"," ",((Ue=x==null?void 0:x.doctor)==null?void 0:Ue.name)??"N/A"]})]})]})]})]}),r.jsx("div",{className:"booking-status",children:r.jsx("span",{className:`status ${(ke=(un=o==null?void 0:o.modalData)==null?void 0:un.status)==null?void 0:ke.toLowerCase()}`,children:Bt((Tn=o==null?void 0:o.modalData)==null?void 0:Tn.status)||"N/A"})})]})}),r.jsx(Pc,{activeTab:z,setActiveTab:ce,tabs:O})]})})}),r.jsx(qa.Footer,{children:r.jsxs("div",{className:"flex !justify-end bg-white",children:[r.jsx("button",{className:"text-gray-500 px-4 py-2 rounded-2xl mr-2",onClick:o.handleClose,children:"Cancel"}),r.jsx(Mx,{onClick:K,children:"Save"})]})})]})};export{r0 as B};
