import React, { useCallback, useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommunicationConfig,
  getEmailTemplates,
} from "../../../redux/slices/CommunicationMap/CommunicationService";
import WaTemplatesStyles from "../whatsApp/WaTemplatesStyles";
import { Pagination, Select, Table } from "antd";
import EmailTemplateEditor from "./EmailTemplateEditor";
import { RootState } from "@/redux/store";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";
import CommonSearchBox from "@/components/custom/search/CommonSearchBox";
import PrimaryButton from "@/components/custom/button/PrimaryButton";

export const emailTypeOptions = [
  { label: "Marketing", value: "Marketing" },
  { label: "Transactional", value: "Transactional" },
  { label: "Others", value: "Others" },
];

const ManageEmailTemplates = () => {
  const [searchText, setSearchText] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState<number>(0);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [type, setType] = useState("");
  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();

  const { emailListTemplates, emailListCounts, loading } = useSelector(
    (state: RootState) => state?.communications
  );
  const user = useSelector((state: RootState) => state.auth.user);

  const getAllTemplates = useCallback(() => {
    dispatch(
      getEmailTemplates({
        search_text: searchText,
        page: pageNo,
        count: pageSize,
        type: type,
        belongs_to: user?.id,
      })
    );
  }, [searchText, pageSize, pageNo, type, user]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      getAllTemplates();
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [getAllTemplates]);

  const columns = [
    {
      label: "Name",
      width: 100,
      dataIndex: "name",
      key: "0",
      render: (item: any, record: any) => (
        <WaTemplatesStyles
          onClick={() => {
            setSelectedTemplate(record);
            setShowForm(true);
          }}
        >
          <span className="title_link">{item}</span>
        </WaTemplatesStyles>
      ),
    },
    {
      label: "Text",
      dataIndex: "text",
      width: 250,
      key: "2",
      render: (item: any) => (
        <>{item ? item?.toString()?.replaceAll("<br>", "\n") : ""}</>
      ),
    },
    {
      label: "Params",
      dataIndex: "params_count",
      width: 80,
      key: "3",
    },
    {
      label: "Ready",
      width: 100,
      dataIndex: "is_ready",
      key: "22",
      render: (item: boolean) => (
        <div className={` ${item ? "ready" : "notReady"}`}></div>
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
        <h4>Email Templates</h4>
      </div>

      <Row className="d-flex align-items-center justify-content-between">
        <Col sm={4}>
          <CommonSearchBox
            onSearch={(value) => setSearchText(value)}
            placeHolder="Seach Email Templates"
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
            Create Template
          </PrimaryButton>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Form.Group className="delta-signup-md" controlId="email">
            <Form.Label className="text-sm !mb-1">Type</Form.Label>
            <Select
              allowClear
              value={type}
              onChange={(e) => {
                setType(e);
              }}
              className="w-100"
              options={emailTypeOptions}
            />
          </Form.Group>
        </Col>
      </Row>

      <CustomTable
        columns={columns}
        data={emailListTemplates ?? []}
        pagination={true}
        showingName="Email Templates"
        onPageChange={handlePageChange}
        page={pageSize}
        pageSize={pageNo + 1}
        total={emailListCounts}
        isLoading={loading}
      />

      {showForm && (
        <EmailTemplateEditor
          isEdit={selectedTemplate ? true : false}
          onClose={() => {
            setShowForm(false);
            setSelectedTemplate(null);
          }}
          template={selectedTemplate}
          onSuccess={() => {
            getAllTemplates();
            setShowForm(false);
            setSelectedTemplate(null);
            dispatch(getCommunicationConfig({ belongs_to: user?.id }));
          }}
        />
      )}
    </WaTemplatesStyles>
  );
};

export default ManageEmailTemplates;
