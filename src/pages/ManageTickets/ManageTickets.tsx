import { useCallback, useState } from "react";
import { Select } from "antd";
import { Col, Form, Row } from "react-bootstrap";
import ManageTicketsStyled from "./ManageTickets.Styled";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import CommonSearchBox from "@/components/custom/search/CommonSearchBox";
import CommonBreadCrumbs from "@/components/custom/BreadCrumb/CommonBreadCrumb";
import { useGetTicketsQuery } from "@/hooks/useQuerys/tickets/ticketsQuery";
import { useDebounce } from "@uidotdev/usehooks";

const ManageTickets = () => {
  const [pageSize, setPageSize] = useState(20);
  const [pageNo, setPageNo] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState<any>({ label: "All", value: "" });
  const [channel, setChannel] = useState<any>({ label: "All", value: "" });

  const filters = useDebounce({
    page: pageNo,
    count: pageSize,
    search_text: searchText,
    channel: channel?.value,
    status: status?.value,
  },500)

  const {data:ticketsData,isPending: loading,refetch:getAllTicketsCall } = useGetTicketsQuery(filters);

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
  const [show, setShow] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [selectedTicketId, setSelectedTicketId] = useState<any>(null);

  const handlePageChange = (page: any, pageSize: any) => {
    setPageSize(page);
    setPageNo(pageSize);
  };

  const handleCloseForm = useCallback(() => {
    setShow(false);
    setSelectedTicket(null);
    setSelectedTicketId(null);
  }, []);

  const handleSuccess = useCallback(() => {
    handleCloseForm();
    getAllTicketsCall()
  }, [handleCloseForm, getAllTicketsCall]);

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
    // {
    //   label: "Edit",
    //   key: "edit",
    //   render: (ticket: any) => {
    //     return (
    //       <SecoundaryButton
    //         onClick={() => {
    //           setShow(true);
    //           const { id, subject, description, status } = ticket;
    //           setSelectedTicket({ subject, description, status });
    //           setSelectedTicketId(id);
    //         }}
    //       >
    //         Edit
    //       </SecoundaryButton>
    //     );
    //   },
    // },
  ];

  return (
    <ManageTicketsStyled>
      <div className="freshbag-wrapper p-3">
        <CommonBreadCrumbs
          items={[
            { name: "Home", link: "/" },
            { name: "Tickets", link: "/tickets" },
          ]}
        />
        <h1>Tickets ({ticketsData?.data.total ?? 0})</h1>
        <div className="d-flex align-items-center mb-2">
          <CommonSearchBox
            onSearch={(value) => {
              setSearchText(value);
            }}
            placeHolder="Search for ticket"
            searchText={searchText}
          />
        </div>

        <Row className="mb-3 items-end">
          <Col md={9}>
            <div className="flex items-center gap-3">
              <Form.Group className="delta-signup-md" controlId="email">
                <Form.Label className="text-sm mb-0"> Status</Form.Label>
                <Select
                  allowClear
                  labelInValue
                  value={status}
                  placeholder="Select Status"
                  onChange={(val) => setStatus(val)}
                  options={statusOptions}
                  className="delta-select select-filter"
                  style={{ minWidth: 150 }}
                />
              </Form.Group>
              <Form.Group className="delta-signup-md" controlId="email">
                <Form.Label className="text-sm mb-0"> Channel</Form.Label>
                <Select
                  allowClear
                  labelInValue
                  value={channel}
                  placeholder="Select Channel"
                  onChange={(val) => setChannel(val)}
                  options={channelOptions}
                  className="delta-select select-filter"
                  style={{ minWidth: 150 }}
                />
              </Form.Group>
            </div>
          </Col>
          <Col md={3}>
            <div className=" flex justify-end">
              <PrimaryButton
                onClick={() => {
                  setShow(true);
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

        {/* {show && (
          <TicketForm
            onHide={handleCloseForm}
            onSuccess={handleSuccess}
            isEdit={selectedTicketId ? true : false}
            selectedId={selectedTicketId}
            defaultData={selectedTicket}
          />
        )} */}
      </div>
    </ManageTicketsStyled>
  );
};

export default ManageTickets;
