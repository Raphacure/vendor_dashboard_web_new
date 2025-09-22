import { LeadsStyled } from "./Leads.styled";
import { useNavigate } from "react-router";
import CommonSearchBox from "@/components/custom/search/CommonSearchBox";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import { useState } from "react";
import CustomTable, {
  CustomTableColumnType,
} from "@/components/custom/Table/CustomTable/CustomTable";
import moment from "moment";
import useCustomModalRenderer from "@/components/custom/ModalRenderer/useCustomModalRenderer";
import CustomModalRenderer from "@/components/custom/ModalRenderer/CustomModalRenderer";
import DownloadForm from "@/components/custom/DownloadForm/DownloadForm";
import { RiDownloadLine } from "react-icons/ri";
import useVendorLinkableId from "@/hooks/auth/useVendorLinkableId";

const Leads = () => {
  const navigate = useNavigate() as any;
  const { linkableId } = useVendorLinkableId();
  const [searchText, setSearchText] = useState("");
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
  });
  const { activeTypes, push, pop, data } = useCustomModalRenderer([
    "createLead",
    "downloadLeadExcel",
  ]);

  const onPaginationChange = (page: number, pageSize: number) => {
    setPagination({
      page,
      pageSize,
    });
  };

  const columns: CustomTableColumnType<
    any
  > = [
    {
      label: "Sl No",
      key: "slno",
      render: (_, __, rowIndex) => {
        return rowIndex + 1;
      },
    },
    {
      label: "Lead ID",
      dataIndex: "id",
      key: "leadId",
      render: (value:any) => {
        return <span className="cursor-pointer text-blue-500" onClick={()=>navigate(`/bookings/all?clientOrderId=${value}`)}>{value}</span>
      }
    },
    {
      label: "Clients",
      dataIndex: ["client", "name"],
      key: "clients",
    },
    {
      label: "Lead Date",
      dataIndex: "created_at",
      key: "leaddate",
      render: (value) => {
        return moment(Number(value)).format("MMM DD, YYYY, hh:mm A");
      },
    },
    {
      label: "Completed Date",
      dataIndex: "invoice_date",
      key: "completeddate",
      render: (value) => {
        return value
          ? moment(Number(value)).format("MMM DD, YYYY, hh:mm A")
          : "N/A";
      },
    },
  ];

  const modals = [
    {
      type: "downloadLeadExcel",
      component: (
        <DownloadForm
          sectionType="leads"
          closeForm={() => pop("downloadLeadExcel")}
        />
      ),
    },
  ];

  return (
    <LeadsStyled>
      <h2>My Leads</h2>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <CommonSearchBox
          onSearch={(value) => setSearchText(value)}
          searchText={searchText}
        />
        <div className="flex gap-2">
          <PrimaryButton onClick={() => push("createLead")}>
            Create New Lead
          </PrimaryButton>
          <button
            className="download-btn"
            onClick={() => push("downloadLeadExcel")}
          >
            <RiDownloadLine size={20} />
          </button>
        </div>
      </div>
      <div>
        <CustomTable
          columns={columns}
          data={[]}
          showingName="Leads"
          isLoading={false}
          page={pagination.page}
          pageSize={pagination.pageSize}
          pagination={true}
          total={0}
          onPageChange={onPaginationChange}
        />
      </div>
      {/* //modals */}

      <CustomModalRenderer
        activeTypes={activeTypes}
        modals={modals}
        data={data}
      />
      {/* //modals */}
    </LeadsStyled>
  );
};

export default Leads;
