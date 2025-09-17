import { CircleX } from "lucide-react";
import React from "react";
import SecoundaryButton from "./SecoundaryButton";

interface ClearFilterButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClearButton: () => void;
}

const ClearFilterButton: React.FC<ClearFilterButtonProps> = ({
  children,
  onClearButton,
  ...props
}) => {
  return (
    <span className="relative inline-block">
      <SecoundaryButton className="!cursor-default" {...props}>
        {children}
      </SecoundaryButton>
      <CircleX color="red" className="cursor-pointer absolute top-0 right-[-5px] transform -translate-y-1/2 bg-white" onClick={onClearButton} />
    </span>
  );
};

export default ClearFilterButton;
