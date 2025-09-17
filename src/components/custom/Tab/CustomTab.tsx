import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface CustomTabProps {
  tabs: {
    value: string;
    label: string | React.ReactNode;
    onClick?: () => void;
    children?: React.ReactNode;
    disabled?: boolean;
  }[];
  activeTab?: string;
  setActiveTab?: React.Dispatch<React.SetStateAction<string>> | any;
  onChange?: (value: string) => void;
  containerClassName?: string;
}

const CustomTabStyled = styled.div`
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
`;

const CustomTab: React.FC<CustomTabProps> = ({
  tabs,
  activeTab,
  setActiveTab,
  onChange,
  containerClassName="mt-1",
}) => {
  const activeTabRef = useRef<HTMLDivElement>(null);
  const debouce = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [internalTabState, setInternalTabState] = useState(
    activeTab || (tabs && tabs.length > 0 ? tabs[0].value : "")
  );

  useEffect(() => {
    if (activeTab !== undefined && activeTab !== internalTabState) {
      setInternalTabState(activeTab);
    }
  }, [activeTab]);

  useEffect(() => {
    if (onChange) {
      onChange(internalTabState);
    }
  }, [internalTabState]);

  const currentActiveTab = activeTab ?? internalTabState;

  const refocusActiveTab = () => {
    clearTimeout(debouce.current);
    debouce.current = setTimeout(() => {
      if (activeTabRef.current) {
        const rect = activeTabRef.current.getBoundingClientRect();
        const isVisible =
          rect.left >= 0 &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth);
        if (!isVisible) {
          activeTabRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
      }
    }, 2000);
  };

  return (
    <>
      <CustomTabStyled
        onMouseEnter={() => clearTimeout(debouce.current)}
        onMouseLeave={refocusActiveTab}
      >
        <div
          ref={(el) => {
            if (!el) return;

            const checkOverflow = () => {
              el.classList.toggle("pb-2", el.scrollWidth > el.clientWidth);
            };
            checkOverflow();
            const resizeObserver = new ResizeObserver(checkOverflow);
            resizeObserver.observe(el);
            return () => {
              resizeObserver.disconnect();
            };
          }}
          className="grid grid-flow-col auto-cols-max gap-2 h-full overflow-x-auto"
        >
          {tabs.map((tab) => (
            <div
              ref={(ref) => {
                if (tab.value === (activeTab ?? internalTabState)) {
                  activeTabRef.current = ref;
                }
              }}
              aria-disabled={Boolean(tab?.disabled)}
              key={tab.value}
              className={`${
                tab.value === (activeTab ?? internalTabState) ? "bg-white" : ""
              } ${tab.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-gray-50"} h-full flex justify-center items-center px-4 py-2 rounded-md text-sm font-medium text-gray-500 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out ${
                tab.value === (activeTab ?? internalTabState)
                  ? "text-gray-900"
                  : "text-gray-500"
              }`}
              onClick={() => {
                if (tab.disabled) {
                  return;
                }
                if (setActiveTab) {
                  setActiveTab(tab.value);
                } else {
                  setInternalTabState(tab.value);
                }
                if (tab.onClick) {
                  tab.onClick();
                }
              }}
            >
              <div>{tab.label}</div>
            </div>
          ))}
        </div>
      </CustomTabStyled>
      <div>
        {
          <div className={`${containerClassName}`} key={currentActiveTab}>
            {tabs.find((tab) => tab.value === currentActiveTab)?.children}
          </div>
        }
      </div>
    </>
  );
};

export default CustomTab;
