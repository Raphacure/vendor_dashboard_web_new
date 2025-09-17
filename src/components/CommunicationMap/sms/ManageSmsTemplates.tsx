import React, { useCallback, useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommunicationConfig,
  getSmsTemplate,
} from "../../../redux/slices/CommunicationMap/CommunicationService";
import WaTemplatesStyles from "../whatsApp/WaTemplatesStyles";
import { Pagination, Table } from "antd";
import SmsTemplateEditor from "./SmsTemplateEditor";
import { RootState } from "@/redux/store";
import CustomTab from "@/components/custom/Tab/CustomTab";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";
import CommonSearchBox from "@/components/custom/search/CommonSearchBox";
import PrimaryButton from "@/components/custom/button/PrimaryButton";

const ManageSmsTemplates = () => {
  const [searchText, setSearchText] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState<number>(1);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();

  const { smsListTemplates, smsListCounts, loading } = useSelector(
    (state: RootState) => state?.communications
  );
  const user = useSelector((state: RootState) => state.auth.user);

  const getAllTemplates = useCallback(() => {
    dispatch(
      getSmsTemplate({
        search_text: searchText,
        page: pageNo,
        count: pageSize,
        belongs_to: user?.id,
      })
    );
  }, [searchText, pageSize, pageNo, user]);

  useEffect(() => {
    getAllTemplates();
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
    setPageNo(page ?? 1);
  };

  return (
    <WaTemplatesStyles>
      <div>
        <h4>Templates</h4>
      </div>

      <Row className="d-flex justify-content-between">
        <Col sm={4}>
          <CommonSearchBox
            onSearch={(value) => setSearchText(value)}
            placeHolder="Seach SMS Templates"
            searchText={searchText}
          />
        </Col>
        <Col sm={3} className="d-flex justify-content-end align-items-end">
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

      <div>
        <CustomTable
          columns={columns}
          data={smsListTemplates ?? []}
          pagination={true}
          onPageChange={handlePageChange}
          page={pageNo}
          pageSize={pageSize}
          total={smsListCounts}
          showingName="SMS Templates"
          isLoading={loading}
        />
      </div>

      {showForm && (
        <SmsTemplateEditor
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

export default ManageSmsTemplates;
