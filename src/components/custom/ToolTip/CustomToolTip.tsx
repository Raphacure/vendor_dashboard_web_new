import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { MdCancel } from "react-icons/md";

interface PositionType {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

interface CustomToolTipProps {
  position?: PositionType;
  overlap?: boolean;
  isOpen?: boolean;
  children?: React.ReactNode;
  parentClassName?: string;
  title?: string;
  handleClose?: () => void;
  headerClassName?: string;
}

const TOOLTIP_ID = "raphaplus-tooltip-container";

const ToolTipContent = ({
  position,
  children,
  parentClassName,
  title,
  handleClose,
  headerClassName,
}: CustomToolTipProps) => {
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [adjustedPosition, setAdjustedPosition] = useState<PositionType | undefined>(position);
  const [adjustedMaxWidth, setAdjustedMaxWidth] = useState<string>('90%');

  // Disable body scrolling when positioned tooltip is shown
  useEffect(() => {
    if (position?.top || position?.bottom || position?.left || position?.right) {
      // Save current body overflow style
      const originalStyle = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      // Restore original style when component unmounts
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [position]);

  useEffect(() => {
    const adjustPosition = () => {
      if (!contentRef.current) return;
      
      const tooltip = contentRef.current;
      const rect = tooltip.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      const newPosition: PositionType = { ...position };
      let newMaxWidth = '90%';
      
      // If we have explicit positioning (not centered)
      if (position?.top !== undefined || position?.left !== undefined) {
        const horizontalPadding = 10;
        
        // Calculate available width based on position
        const originalLeft = position?.left || 0;
        const availableWidthFromLeft = viewportWidth - originalLeft - horizontalPadding;
        const availableWidthFromRight = originalLeft - horizontalPadding;
        
        // Handle horizontal positioning
        if (rect.left < horizontalPadding) {
          // Tooltip is cut off on the left
          newPosition.left = horizontalPadding;
          // Calculate max width based on available space from the new left position
          const availableWidth = viewportWidth - horizontalPadding * 2;
          newMaxWidth = `${Math.min(availableWidth, viewportWidth * 0.9)}px`;
        } else if (rect.right > viewportWidth - horizontalPadding) {
          // Tooltip is cut off on the right
          const idealLeft = Math.max(horizontalPadding, viewportWidth - rect.width - horizontalPadding);
          newPosition.left = idealLeft;
          
          // Calculate max width based on available space
          const availableWidth = viewportWidth - idealLeft - horizontalPadding;
          newMaxWidth = `${Math.min(availableWidth, viewportWidth * 0.9)}px`;
        } else {
          // Tooltip fits within viewport, but still calculate optimal max width
          const availableWidth = Math.min(availableWidthFromLeft, viewportWidth * 0.9);
          newMaxWidth = `${availableWidth}px`;
        }

        // Handle vertical positioning with transform: translate(0, -50%)
        const verticalPadding = 10;
        const halfHeight = rect.height / 2;
        
        // Top boundary accounting for the vertical transform
        if (rect.top < verticalPadding) {
          // Add half height to account for the -50% vertical transform
          newPosition.top = verticalPadding + halfHeight;
        }
        
        // Bottom boundary accounting for the vertical transform
        if (rect.bottom > viewportHeight - verticalPadding) {
          // Subtract half height to account for the -50% vertical transform
          newPosition.top = viewportHeight - halfHeight - verticalPadding;
        }
      }
      
      setAdjustedPosition(newPosition);
      setAdjustedMaxWidth(newMaxWidth);
    };
    
    // Run adjustment after a short delay to ensure the tooltip has rendered with correct dimensions
    const timeoutId = setTimeout(adjustPosition, 50);
    window.addEventListener('resize', adjustPosition);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', adjustPosition);
      if (tooltipRef.current) {
        tooltipRef.current.remove();
      }
    };
  }, [position]);

  // Determine if we're using the centered positioning or explicit positioning
  const isCentered = !adjustedPosition?.top && !adjustedPosition?.left;

  return (
    <div
      ref={tooltipRef}
      className={`${TOOLTIP_ID} h-[100vh] w-[100vw] bg-black/30 fixed top-0 left-0 right-0 bottom-0 z-10000 overflow-hidden`}
    >
      <div
        ref={contentRef}
        className={`absolute ${parentClassName ? parentClassName : ""} overflow-hidden max-h-[90%] bg-white rounded-3xl shadow-2xl !p-[3px]`}
        style={{
          top: isCentered ? '50%' : `${adjustedPosition?.top}px`,
          left: isCentered ? '50%' : `${adjustedPosition?.left}px`,
          transform: isCentered ? 'translate(-50%, -50%)' : 'translate(0, -50%)',
          maxWidth: isCentered ? '90%' : adjustedMaxWidth
        }}
      >
        <div className="flex flex-col h-full">
          <div className={`flex justify-between items-center h-[30px] bg-[#e9f2fd] rounded-t-3xl p-1 flex-shrink-0 ${headerClassName?headerClassName:""}`}>
            <div className={`text-lg font-bold truncate flex-1 mr-2`}>{title}</div>
            <span
              onClick={(e) => {
                e.stopPropagation();
                handleClose?.()
              }}
              className="cursor-pointer flex-shrink-0"
            >
              <MdCancel size={23} />
            </span>
          </div>
          <div className="flex-grow max-h-[calc(90vh-30px)] overflow-y-auto min-h-0">
             {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomToolTip: React.FC<CustomToolTipProps> = ({
  position,
  children,
  isOpen,
  parentClassName,
  title,
  handleClose,
  headerClassName,
}) => {
  return (
    <>
      {isOpen &&
        createPortal(
          <ToolTipContent
            parentClassName={parentClassName}
            handleClose={handleClose}
            title={title}
            position={position}
            children={children}
            headerClassName={headerClassName}
          />,
          document.body
        )}
    </>
  );
};

export default CustomToolTip;
