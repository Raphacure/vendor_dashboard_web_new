import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import { Col, Form, Row } from "react-bootstrap";
import { getAllTickets } from "../../redux/slices/tickets/ticketService";
import { RootState } from "../../redux/store";
import TicketForm from "@/components/tickets/TicketForm";
import TicketsStyled from "./TicketsStyled";
import toast from "react-hot-toast";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import CommonSearchBox from "@/components/custom/search/CommonSearchBox";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import CommonBreadCrumbs from "@/components/custom/BreadCrumb/CommonBreadCrumb";

const ManageTickets = () => {
  const { error, loading, tickets, totalTickets } = useSelector(
    (state: RootState) => state?.ticket
  );

  const [pageSize, setPageSize] = useState(20);
  const [pageNo, setPageNo] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState<any>({ label: "All", value: "all" });
  const [channel, setChannel] = useState<any>({ label: "All", value: "all" });

  // AntD Select options
  const statusOptions = [
    { label: "All", value: "all" },
    { label: "In Progress", value: "in-progress" },
    { label: "Open", value: "open" },
    { label: "Closed", value: "closed" },
  ];
  const channelOptions = [
    { label: "All", value: "all" },
    { label: "Email", value: "email" },
    { label: "Call", value: "call" },
  ];

  // forms
  const [show, setShow] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [selectedTicketId, setSelectedTicketId] = useState<any>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handlePageChange = (page: any, pageSize: any) => {
    setPageSize(page);
    setPageNo(pageSize);
  };

  const getAllTicketsCall = useCallback(() => {
    const body: any = {
      page: pageNo,
      count: pageSize,
    };

    if (searchText) {
      body.search_text = searchText;
    }
    if (status?.value !== "all") {
      body.status = status?.value;
    }
    if (channel?.value !== "all") {
      body.channel = channel?.value;
    }

    dispatch(getAllTickets(body));
  }, [pageSize, pageNo, searchText, status, channel]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      getAllTicketsCall();
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [getAllTicketsCall]);

  const handleCloseForm = useCallback(() => {
    setShow(false);
    setSelectedTicket(null);
    setSelectedTicketId(null);
  }, []);

  const handleSuccess = useCallback(() => {
    handleCloseForm();
    getAllTicketsCall();
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
    <TicketsStyled>
      <div className="freshbag-wrapper p-3">
        <CommonBreadCrumbs items={[{name:"Home",link:"/"},{ name: "Tickets", link: "/tickets" }]} />
        <h1>Tickets ({totalTickets ?? 0})</h1>
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
            data={tickets}
            columns={columns}
            showingName="Tickets"
            isLoading={loading}
            onPageChange={handlePageChange}
            page={pageNo}
            pageSize={pageSize}
            total={totalTickets}
            pagination={true}
          />
        </div>

        {show ? (
          <TicketForm
            onHide={handleCloseForm}
            onSuccess={handleSuccess}
            isEdit={selectedTicketId ? true : false}
            selectedId={selectedTicketId}
            defaultData={selectedTicket}
          />
        ) : (
          <></>
        )}
      </div>
    </TicketsStyled>
  );
};

export default ManageTickets;
