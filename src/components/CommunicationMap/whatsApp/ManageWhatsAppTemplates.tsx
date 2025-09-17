import { Pagination, Table } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommunicationConfig,
  getWaTemplates,
  waTemplateRefresh,
} from "../../../redux/slices/CommunicationMap/CommunicationService";
import WaTemplatesStyles from "./WaTemplatesStyles";
import WhatsAppTemplateEditor from "./WhatsAppTemplateEditor";
import { RootState } from "@/redux/store";
import { FiRefreshCcw } from "react-icons/fi";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";
import CommonSearchBox from "@/components/custom/search/CommonSearchBox";

const ManageWhatsAppTemplates = () => {
  const [searchText, setSearchText] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState<number>(0);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const dispatch = useDispatch();

  const { waListTenplates, waListCounts, loading } = useSelector(
    (state: RootState) => state?.communications
  );

  const getAllTemplates = useCallback(() => {
    dispatch(
      getWaTemplates({ search_text: searchText, page: pageNo, count: pageSize })
    );
  }, [searchText, pageSize, pageNo]);

  const user = useSelector((state: RootState) => state.auth.user);

  const refreshToGetAllTemplates = useCallback(async () => {
    const res: any = await dispatch(waTemplateRefresh());

    if (res?.payload?.success) {
      getAllTemplates();
      dispatch(getCommunicationConfig({ belongs_to: user?.id }));
    }
  }, [getAllTemplates, user]);

  useEffect(() => {
    const debounce =  setTimeout(()=>{
        getAllTemplates();
    },300)

    return ()=>{
        clearTimeout(debounce)
    }
  }, [getAllTemplates]);

  const columns = [
    {
      label: "Name",
      width: 150,
      dataIndex: "name",
      key: "0",
      render: (item: any, record: any) => (
        <WaTemplatesStyles
          onClick={() => {
            setSelectedTemplate(record);
          }}
        >
          <span className="title_link">{item}</span>
        </WaTemplatesStyles>
      ),
    },
    {
      label: "Header",
      width: 100,
      dataIndex: "header_component",
      key: "1",
    },
    {
      label: "Text",
      width: 250,
      key: "2",
      render: (template: any) => (
        <p className="text-sm m-0">{template?.text ?? "N/A"}</p>
      ),
    },
    {
      label: "Params",
      dataIndex: "params_count",
      width: 80,
      key: "3",
    },
    {
      label: "Status",
      width: 100,
      dataIndex: "wa_status",
      key: "4",
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
        <h4>Templates</h4>
      </div>

      <Row className="d-flex justify-content-between">
        <Col sm={4}>
          <CommonSearchBox
            onSearch={(value) => setSearchText(value)}
            placeHolder="Search Whatsapp Templates"
          />
        </Col>
        <Col sm={3} className="d-flex justify-content-end items-end">
          <PrimaryButton
            onClick={refreshToGetAllTemplates}
            className="py-2 font-semibold"
          >
            <span>Refresh templates</span>
            <FiRefreshCcw className="!ml-2" />
          </PrimaryButton>
        </Col>
      </Row>

      <CustomTable
        columns={columns}
        data={waListTenplates ?? []}
        pagination={true}
        isLoading={loading}
        onPageChange={handlePageChange}
        page={pageNo + 1}
        pageSize={pageSize}
        total={waListCounts}
        showingName="Templates"
      />
      {selectedTemplate && (
        <WhatsAppTemplateEditor
          onClose={() => {
            setSelectedTemplate(null);
          }}
          onSuccess={() => {
            setSelectedTemplate(null);
            getAllTemplates();
          }}
          template={selectedTemplate}
        />
      )}
    </WaTemplatesStyles>
  );
};

export default ManageWhatsAppTemplates;
