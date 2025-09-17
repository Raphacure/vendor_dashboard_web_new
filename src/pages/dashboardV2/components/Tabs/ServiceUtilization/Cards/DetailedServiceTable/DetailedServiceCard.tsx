import { useState } from "react";
import { Button } from "react-bootstrap";
import ExportDataModal from "./modals/ExportDataModal";
import { DetailedServiceCardStyled } from "./DetailedServiceCard.styled";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import { checkIsMobile } from "@/lib/common";
import { ArrowDownToLine, ListFilter } from "lucide-react";
import { BsFunnel } from "react-icons/bs";

interface DetailedServiceCardProps {
  title?: string;
  children?: React.ReactNode;
  showItems?: {
    filter?: boolean;
    export?: boolean;
    rightSubTitle?: boolean;
  };
  rightSubTitle?: string;
  styles?: {
    titleClassName?: string;
    filterClassName?: string;
    exportClassName?: string;
    rightSubTitleClassName?: string;
  };
  className?:string;
}

const DetailedServiceCard = ({
  title,
  children,
  showItems = { export: false, rightSubTitle: false, filter: false },
  rightSubTitle,
  styles = {
    exportClassName: "",
    filterClassName: "",
    rightSubTitleClassName: "",
    titleClassName: "",
  },
  className
}: DetailedServiceCardProps) => {
  const [show, setShow] = useState<{ exportDataModal: boolean }>({
    exportDataModal: false,
  });

  const handleShowState = (
    value: boolean,
    field: keyof typeof show
  ): (() => void) => {
    return () => {
      setShow((prev) => ({
        ...prev,
        [field]: value,
      }));
    };
  };

  return (
    <DetailedServiceCardStyled className={className}>
      <div className="table-grap-div graph-main-div">
        <div className="age-graph-div w-100">
          <div className="age-heading-graph-div bg-color-remove ">
            <p className={styles?.titleClassName}>{title}</p>
            <div className=" graph-filter-btn-div d-flex gap-3">
              {showItems?.rightSubTitle && (
                <p className={`m-0 ${styles?.rightSubTitleClassName}`}>
                  {rightSubTitle}
                </p>
              )}
              {showItems?.filter && (
                <SecoundaryButton
                  className={styles?.filterClassName}
                >
                  {checkIsMobile()?<BsFunnel/> :"Filter"}
                </SecoundaryButton>
              )}

              {showItems?.export && (
                <PrimaryButton
                  className={styles?.exportClassName}
                  onClick={handleShowState(true, "exportDataModal")}
                >
                  {checkIsMobile() ? <ArrowDownToLine/> :"Export Data"}
                </PrimaryButton>
              )}
            </div>
          </div>
          <div className="w-full parent-graph-div  p-4">
            {children}
          </div>
        </div>
      </div>
      {showItems?.export && (
        <ExportDataModal
          show={show.exportDataModal}
          handleClose={handleShowState(false, "exportDataModal")}
        />
      )}
    </DetailedServiceCardStyled>
  );
};

export default DetailedServiceCard;
