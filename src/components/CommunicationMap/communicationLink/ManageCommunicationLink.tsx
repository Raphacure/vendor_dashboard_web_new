import React, { useCallback, useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCommunicationLinks,
  getCommunicationConfig,
  getEmailTemplates,
} from "../../../redux/slices/CommunicationMap/CommunicationService";
import WaTemplatesStyles from "../whatsApp/WaTemplatesStyles";
import { Pagination, Select, Table } from "antd";
import CreateCommunicationLinkModal, {
  bkSubType,
  toOptions,
} from "./CreateCommunication";
import { RootState } from "@/redux/store";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";
import CommonSearchBox from "@/components/custom/search/CommonSearchBox";
import PrimaryButton from "@/components/custom/button/PrimaryButton";

const ManageEmailTemplates = () => {
  const [searchText, setSearchText] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState<number>(0);
  const [showForm, setShowForm] = useState(false);
  const [selectedCommunicationLink, setSelectedCommunicationLink] =
    useState<any>(null);
  const [id, setId] = useState(null);
  const [bookingType, setBookingType] = useState("");
  const [bookingSubType, setbookingSubType] = useState("");
  const [bookingStatus, setBookingStatus] = useState("");
  const [bookingTestType, setBookingTestType] = useState("");
  const [to, setTo] = useState("");
  const [activeStatus, setActiveStatus] = useState("");
  const [visitType, setVisitType] = useState("");

  const dispatch = useDispatch();

  const { communicationLinks, communicationLinkCount, config, loading } =
    useSelector((state: RootState) => state?.communications);

  // config2 was added due to a type issue in config
  const config2 = config as any;
  //

  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    dispatch(getCommunicationConfig({ belongs_to: user?.id }));
  }, [user]);

  const getAllCommunicationMap = useCallback(async () => {
    dispatch(
      getAllCommunicationLinks({
        searchText,
        count: pageSize,
        page: pageNo,
        booking_type: bookingType,
        booking_sub_type: bookingSubType,
        booking_status: bookingStatus,
        booking_test_type: bookingTestType,
        active_status: activeStatus,
        visit_type: visitType,
        to: to,
        belongs_to: user?.id,
      })
    );
  }, [
    searchText,
    pageNo,
    pageSize,
    bookingType,
    bookingSubType,
    bookingStatus,
    bookingTestType,
    activeStatus,
    visitType,
    to,
    user,
  ]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      getAllCommunicationMap();
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [getAllCommunicationMap]);

  const columns = [
    {
      label: "Name",
      dataIndex: "name",
      key: "0",
      render: (item: any, record: any) => (
        <WaTemplatesStyles
          onClick={() => {
            setSelectedCommunicationLink({
              name: record?.name,
              booking_type: record?.booking_type,
              booking_sub_type: record?.booking_sub_type,
              booking_status: record?.booking_status,
              booking_test_type: record?.booking_test_type ?? null,
              active_status: record?.active_status ?? false,
              visit_type: record?.visit_type ?? null,
              to: record?.to,
              wa_template_id: record?.wa_template_id,
              email_template_id: record?.email_template_id,
              sms_template_id: record?.sms_template_id,
            });
            setId(record?.id);
            setShowForm(true);
          }}
        >
          <span className="title_link">{item}</span>
        </WaTemplatesStyles>
      ),
    },
    {
      label: "Booking Type",
      dataIndex: "booking_type",
      key: "1",
    },
    {
      label: "Booking Status",
      dataIndex: "booking_status",
      key: "2",
    },
    {
      label: "Booking Test Type	",
      dataIndex: "booking_test_type",
      key: "3",
    },
    {
      label: "Booking Visit Type",
      dataIndex: "visit_type",
      width: 80,
      key: "3",
    },
    {
      label: "To",
      dataIndex: "to",
      render: (to: any) => <>{to.toUpperCase()}</>,
      key: "4",
    },
    {
      label: "Wa Template",
      dataIndex: "waTemplate",
      key: "5",
    },
    {
      label: "Email Template",
      dataIndex: "email_template_id",
      key: "6",
    },
    {
      label: "SMS Template",
      dataIndex: "sms_template_id",
      key: "6",
    },
    {
      label: "Active",
      dataIndex: "active_status",
      key: "7",
      render: (item: string) => (
        <div className={` ${item == "active" ? "ready" : "notReady"}`}></div>
      ),
    },
  ] as any;

  const handlePageChange = (page: any, size: any) => {
    setPageSize(size ?? 10);
    setPageNo((page ?? 1) - 1);
  };

  return (
    <WaTemplatesStyles>
      <div>
        <h4>Communication Link</h4>
      </div>

      <Row className="d-flex align-items-center justify-content-between">
        <Col sm={4}>
          <CommonSearchBox
            onSearch={(value) => setSearchText(value)}
            placeHolder="Search communication links"
            searchText={searchText}
          />
        </Col>
        <Col sm={3} className="d-flex justify-content-end align-items-center">
          <PrimaryButton
            onClick={() => {
              setShowForm(true);
            }}
            className="py-2 font-semibold"
          >
            Create New Link
          </PrimaryButton>
        </Col>
      </Row>

      <Row className="mb-2 mt-2">
        <Col>
          <Form.Group className="delta-signup-md" controlId="email">
            <Form.Label className="text-sm !mb-1"> Booking Type</Form.Label>
            <Select
              allowClear
              value={bookingType}
              onChange={(e) => {
                setBookingType(e);
              }}
              className="w-100"
              options={config?.bookingTypes?.map((booking: any) => ({
                label: booking,
                value: booking,
              }))}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="delta-signup-md" controlId="email">
            <Form.Label className="text-sm !mb-1">Booking Sub Type</Form.Label>
            <Select
              allowClear
              value={bookingSubType}
              onChange={(e) => {
                setbookingSubType(e);
              }}
              className="w-100"
              options={bkSubType}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="delta-signup-md" controlId="email">
            <Form.Label className="text-sm !mb-1">Booking Status</Form.Label>
            <Select
              allowClear
              value={bookingStatus}
              onChange={(e) => {
                setBookingStatus(e);
              }}
              className="w-100"
              options={config?.bookingStatuses?.map((booking: any) => ({
                label: booking?.name,
                value: booking?.id,
              }))}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col>
          <Form.Group className="delta-signup-md" controlId="email">
            <Form.Label className="text-sm !mb-1">Booking Test Type</Form.Label>
            <Select
              allowClear
              value={bookingTestType}
              onChange={(e) => {
                setBookingTestType(e);
              }}
              className="w-100"
              options={config?.bookingTestTypes?.map((booking: any) => ({
                label: booking,
                value: booking,
              }))}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="delta-signup-md" controlId="email">
            <Form.Label className="text-sm !mb-1">Active Status</Form.Label>
            <Select
              allowClear
              value={activeStatus}
              onChange={(e) => {
                setActiveStatus(e);
              }}
              className="w-100"
              options={[
                { label: "Active", value: "active" },
                { label: "In Active", value: "inactive" },
              ]}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="delta-signup-md" controlId="email">
            <Form.Label className="text-sm !mb-1">Visit Type</Form.Label>
            <Select
              allowClear
              value={visitType}
              onChange={(e) => {
                setVisitType(e);
              }}
              className="w-100"
              options={config2?.bookingPackageVistTypes?.map(
                (visitType: any) => ({ label: visitType, value: visitType })
              )}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col>
          <Form.Group className="delta-signup-md" controlId="email">
            <Form.Label className="text-sm !mb-1">To</Form.Label>
            <Select
              allowClear
              value={to}
              onChange={(e) => {
                setTo(e);
              }}
              className="w-100"
              options={toOptions}
            />
          </Form.Group>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>

      <div>
        <CustomTable
          columns={columns}
          data={communicationLinks ?? []}
          pagination={true}
          onPageChange={handlePageChange}
          page={pageNo + 1}
          pageSize={pageSize}
          showingName="Communication Links"
          total={communicationLinkCount}
          isLoading={loading}
        />
      </div>

      {/* {showForm && <EmailTemplateEditor
        isEdit={selectedTemplate ? true : false}
        onClose={() => {
          setShowForm(false)
        }} template={selectedTemplate}
        onSuccess={() => {
          getAllTemplates()
          setShowForm(false)
        }}
      />} */}

      {showForm && (
        <CreateCommunicationLinkModal
          onClose={() => {
            setShowForm(false);
            setId(null);
            setSelectedCommunicationLink(null);
          }}
          id={id}
          onSuccess={() => {
            getAllCommunicationMap();
            setShowForm(false);
          }}
          defaultSelectedData={selectedCommunicationLink}
        />
      )}
    </WaTemplatesStyles>
  );
};

export default ManageEmailTemplates;
