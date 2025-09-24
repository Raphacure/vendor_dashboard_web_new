import { useMemo, useState } from "react";
import { Col, Row, Select } from "antd";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import CommonSearchBox from "@/components/custom/search/CommonSearchBox";
import CommonBreadCrumbs from "@/components/custom/BreadCrumb/CommonBreadCrumb";
import { useGetTicketsQuery } from "@/hooks/useQuerys/tickets/ticketsQuery";
import { useDebounce } from "@uidotdev/usehooks";
import CustomModalRenderer from "@/components/custom/ModalRenderer/CustomModalRenderer";
import useCustomModalRenderer from "@/components/custom/ModalRenderer/useCustomModalRenderer";
import TicketForm from "./modals/CreateTicket/CreateTicketModal";

const ManageTickets = () => {
  const [pageSize, setPageSize] = useState(20);
  const [pageNo, setPageNo] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [filterers, setFilterers] = useState<any>({
    status: { label: "All", value: "" },
    channel: { label: "All", value: "" },
  });

  const { activeTypes, pop, push } = useCustomModalRenderer(["createTicket"]);

  const apiFilters = useMemo(() => {
    return {
      page: pageNo,
      count: pageSize,
      search_text: searchText,
      channel: filterers?.channel?.value,
      status: filterers?.status?.value,
      from:'vendor'
    };
  }, [pageSize, pageNo, searchText, filterers]);

  const filters = useDebounce(apiFilters, 500);

  const { data: ticketsData, isFetching: loading } = useGetTicketsQuery(filters);

  // AntD Select options
  const statusOptions = [
    { label: "All", value: "" },
    { label: "In Progress", value: "in-progress" },
    { label: "Open", value: "open" },
    { label: "Closed", value: "closed" },
  ];
  const channelOptions = [
    { label: "All", value: "" },
    { label: "Email", value: "email" },
    { label: "Call", value: "call" },
  ];

  // forms

  const handlePageChange = (page: any, pageSize: any) => {
    setPageSize(pageSize);
    setPageNo(page);
  };

  console.log("page", pageNo, pageSize);

  const renderStatusBadge = (status: string) => {
    const baseClass = "text-white p-2 rounded-sm";
    switch (status) {
      case "open":
        return <span className={`bg-green-500 ${baseClass}`}>Open</span>;
      case "closed":
        return <span className={`bg-red-500 ${baseClass}`}>Closed</span>;
      case "in-progress":
        return (
          <span className={`bg-yellow-500 ${baseClass}`}>In Progress</span>
        );
      default:
        return <>N/A</>;
    }
  };

  const columns = [
    {
      label: "Id",
      key: "id",
      dataIndex: "id",
    },
    {
      label: "Subject",
      key: "subject",
      dataIndex: "subject",
    },
    {
      label: "Status",
      key: "status",
      render: (ticket: any) => renderStatusBadge(ticket?.status),
    },
  ];

  const modals = useMemo(() => {
    return [
      {
        type: "createTicket",
        component: (
          <TicketForm isEdit={false} onHide={() => pop("createTicket")} />
        ),
      },
    ];
  }, [pop]);

  return (
    <div className="freshbag-wrapper p-3">
      <CommonBreadCrumbs
        items={[
          { name: "Home", link: "/" },
          { name: "Tickets", link: "/tickets" },
        ]}
      />
      <h1>Tickets ({ticketsData?.data.total ?? 0})</h1>

      <Row className="mb-3 items-end">
        <Col span={18}>
          <div className="flex items-center gap-3">
            <CommonSearchBox
              onSearch={(value) => {
                setSearchText(value);
              }}
              placeHolder="Search for ticket"
              searchText={searchText}
            />
            <Select
              allowClear
              labelInValue
              value={filterers.status}
              placeholder="Select Status"
              onChange={(val) =>
                setFilterers((prev: any) => ({ ...prev, status: val }))
              }
              options={statusOptions}
              className="delta-select select-filter"
              style={{ minWidth: 150 }}
            />
            <Select
              allowClear
              labelInValue
              value={filterers.channel}
              placeholder="Select Channel"
              onChange={(val) =>
                setFilterers((prev: any) => ({ ...prev, channel: val }))
              }
              options={channelOptions}
              className="delta-select select-filter"
              style={{ minWidth: 150 }}
            />
          </div>
        </Col>
        <Col span={6}>
          <div className=" flex justify-end">
            <PrimaryButton
              onClick={() => {
                push("createTicket");
              }}
              className="py-2"
            >
              Create Ticket
            </PrimaryButton>
          </div>
        </Col>
      </Row>
      <div>
        <CustomTable
          data={ticketsData?.data.tickets ?? []}
          columns={columns}
          showingName="Tickets"
          isLoading={loading}
          onPageChange={handlePageChange}
          page={pageNo}
          pageSize={pageSize}
          total={ticketsData?.data.total ?? 0}
          pagination={true}
        />
      </div>

      <CustomModalRenderer activeTypes={activeTypes} modals={modals} />
    </div>
  );
};

export default ManageTickets;
