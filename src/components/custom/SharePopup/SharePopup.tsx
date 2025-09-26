import React, { useState } from "react";
import { Popover } from "antd";
import { FiX } from "react-icons/fi";
import styled from "styled-components";

// --- TypeScript Interfaces ---
export interface ShareData {
  id?: string | number;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  title?: string;
  message?: string;
}

interface SharePopupProps {
  data: ShareData;
  className?: string;
  iconUrl?: string;
  children?: React.ReactNode;
}

interface ShareOption {
  type: "whatsapp" | "email" | "telephone";
  name: string;
  icon: string;
}

// --- Styled Components ---

const SharePopupContainer = styled.div`
  background: white;
  border-radius: 8px;
  min-width: 200px;
  max-width: 300px;
  padding: 0;
  width: max-content;

  .share-top-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid #e5e7eb;
    
    p { 
      margin: 0; 
      font-weight: 600; 
      font-size: 14px; 
      color: #374151; 
    }
    
    .share-close {
      cursor: pointer; 
      padding: 4px; 
      border-radius: 4px; 
      display: flex;
      align-items: center; 
      justify-content: center; 
      transition: background-color 0.2s;
      
      &:hover { 
        background-color: #f3f4f6; 
      }
      
      svg { 
        width: 16px; 
        height: 16px; 
        color: #6b7280; 
      }
    }
  }

  .share-items {
    padding: 8px 0;
    
    .share-items-list-div {
      display: flex; 
      align-items: center; 
      gap: 12px; 
      padding: 12px 16px;
      cursor: pointer; 
      transition: background-color 0.2s;
      
      &:hover { 
        background-color: #f9fafb; 
      }
      
      img { 
        width: 24px; 
        height: 24px; 
        border-radius: 4px; 
      }
      
      p { 
        margin: 0; 
        font-size: 14px; 
        color: #374151; 
        font-weight: 500; 
      }
    }
  }
`;

const ShareTrigger = styled.div`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover { 
    opacity: 0.8; 
  }
  
  img { 
    width: 24px; 
    height: 24px; 
  }
`;

// --- React Component ---

const SharePopup: React.FC<SharePopupProps> = ({
  data,
  className = "",
  iconUrl = "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/122601-1738832042247.png",
  children,
}) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const getShareOptions = (): ShareOption[] => {
    const options: ShareOption[] = [];
    if (data.phone) {
      options.push(
        { type: "whatsapp", name: "WhatsApp", icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png" },
        { type: "telephone", name: "Call", icon: "https://cdn-icons-png.flaticon.com/512/724/724664.png" }
      );
    }
    if (data.email) {
      options.push({ type: "email", name: "Email", icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png" });
    }
    return options;
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const name = data.firstName ? `${data.firstName} ${data.lastName || ""}`.trim() : "Contact";
    const title = data.title || "Details";
    const customMessage = data.message || `Check out this ${title.toLowerCase()} for ${name}:\n${url}`;

    switch (platform) {
      case "whatsapp":
        if (data.phone) window.open(`https://api.whatsapp.com/send?phone=${data.phone}&text=${encodeURIComponent(customMessage)}`, "_blank");
        break;
      case "email":
        if (data.email) window.open(`mailto:${data.email}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(customMessage)}`, "_self");
        break;
      case "telephone":
        if (data.phone) window.open(`tel:${data.phone}`, "_self");
        break;
      default:
        break;
    }
    handleClose();
  };

  const shareOptions = getShareOptions();

  if (shareOptions.length === 0) {
    return null;
  }

  const popoverContent = (
    <SharePopupContainer>
      <div className="share-top-header">
        <p>Share {data.title || "Details"}</p>
        <div className="share-close" onClick={handleClose}>
          <FiX />
        </div>
      </div>
      <div className="share-items">
        {shareOptions.map((option) => (
          <div
            key={option.type}
            onClick={() => handleShare(option.type)}
            className="share-items-list-div"
          >
            <img src={option.icon} alt={option.name} />
            <p>{option.name}</p>
          </div>
        ))}
      </div>
    </SharePopupContainer>
  );

  return (
    <Popover
      content={popoverContent}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      placement="bottomLeft"
      overlayClassName="share-popup-overlay"
    >
      <ShareTrigger className={className}>
        {children || <img src={iconUrl} alt="Share" className="!w-7 !h-7" />}
      </ShareTrigger>
    </Popover>
  );
};

export default SharePopup;