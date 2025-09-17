import React from "react";

interface CustomModalRendererProps {
  modals: { type: string; component: React.ReactElement }[];
  activeTypes: string[];
  data?: object;
}

const CustomModalRenderer: React.FC<CustomModalRendererProps> = ({
  modals,
  activeTypes,
  data,
}) => {
  if (activeTypes.length === 0) {
    return null;
  }
  if (Array.isArray(activeTypes)) {
    return (
      <>
        {modals
          .filter((modal) => activeTypes.includes(modal.type))
          .map((modal) =>
            React.cloneElement(modal.component, {
              key: modal.type,
              ...(data || {}),
            })
          )}
      </>
    );
  }
};

export default CustomModalRenderer;
