import { Button, Table, Select } from "antd";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { FaEye } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import AddRelatedDocuments from "./AddRelatedDocuments";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import { IndexsStyled } from "./Index.styled";
import { deleteDocumentApi, getSignedUrl } from "@/redux/slices/Clients/ClientsService";

const RelatedDocumentsComponent = ({
  documents,
  id,
  vendorRelatedDocuments,
  selectedDocType,
  setSelectedDocType,
  section_name = "VENDOR"
}: {
  documents: any;
  id: any;
  vendorRelatedDocuments: () => void;
  selectedDocType: any;
  setSelectedDocType: React.Dispatch<React.SetStateAction<any>>;
  section_name?: "VENDOR" | "CLIENT"
}) => {
  const [selectedDocument, setSelectedDocument] = useState<any>(null);
  const [selectedDocumentId, setSelectedDocumentId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showSuccessMessageText, setShowSuccessMessageText] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeletePopUp, setShowDeletePopUp] = useState(false);

  const dispatch = useDispatch();

  const handleOpenFile = async (id: number) => {
    const result: any = await dispatch(getSignedUrl(id));

    if (result) {
      window.open(result?.payload?.url, "_blank");
    }
  };

  const handleEdit = (doc: any) => {
    let data = { ...doc };
    const id = data?.["id"];
    delete data?.["id"];
    console.log(data);

    if (data?.start_date) {
      const start_date = new Date(parseInt(data?.start_date))
        .toISOString()
        .split("T")[0];
      data.start_date = start_date;
    }

    if (data?.end_date) {
      const end_date = new Date(parseInt(data?.end_date))
        .toISOString()
        .split("T")[0];
      data.end_date = end_date;
    }

    setSelectedDocument(data);
    setSelectedDocumentId(id);
    setShowForm(true);
  };

  const handleDelete = async () => {
    if (!selectedDocumentId) return;
    const result: any = await dispatch(deleteDocumentApi(selectedDocumentId));
    if (result?.payload?.success) {
      setShowDeletePopUp(false);
      setShowSuccessMessage(true);
      setShowSuccessMessageText("Document Deleted Succesffuly!.");
      vendorRelatedDocuments();
    }
  };

  const handleDeleteBtnClick = async (id: number) => {
    if (!id) return;
    setSelectedDocumentId(id);
    setShowDeletePopUp(true);
  };

  const columns = [
    {
      title: "Title",
      width: 100,
      dataIndex: "title",
      key: "0",
    },
    {
      title: "Type",
      width: 170,
      dataIndex: "type",
      key: "1",
    },
    {
      title: "Contract Start Time",
      width: 100,
      dataIndex: "start_date",
      key: "22",
      render: (itemV: any) => {
        const start_date = itemV
          ? new Date(parseInt(itemV)).toISOString().split("T")[0]
          : "";
        return <span>{start_date}</span>;
      },
    },
    {
      title: "Contract End Time",
      width: 100,
      dataIndex: "end_date",
      key: "22",
      render: (itemV: any) => {
        const end_date = itemV
          ? new Date(parseInt(itemV)).toISOString().split("T")[0]
          : "";
        console.log(end_date);

        return <span>{end_date}</span>;
      },
    },
    {
      title: "Action",
      width: 100,
      key: "22",
      render: (itemV: any) => {
        return (
          <>
            <div className="action-icons-sec-new">
              <div className="action-buttons space-between">
                <FaEye className="cursor-pointer" size={20} onClick={() => handleOpenFile(itemV.id)} />
                <TbEdit className="cursor-pointer" size={20} onClick={() => handleEdit(itemV)} />
                <Button onClick={() => handleDeleteBtnClick(itemV?.id)}>
                  Unlink
                </Button>
              </div>
            </div>
          </>
        );
      },
    },
  ] as any;

  const documentTypeOptions = [
    {
      label: "Contracts",
      value: "contract",
    },
    {
      label: "Company Documents",
      value: "company",
    },
    {
      label: "Others",
      value: "other",
    },
  ];

  const handleClickCreate = () => {
    setShowForm(true);
  };

  const onSuccess = (isEdit: boolean) => {
    setShowForm(false);
    setShowSuccessMessage(true);
    setShowSuccessMessageText(
      isEdit
        ? "Document Updated Succesffuly!."
        : "Document Added Successfully!."
    );
    vendorRelatedDocuments();
  };

  const handleCancel = () => {
    setShowForm(false);
    setSelectedDocType(null);
    setSelectedDocument(null);
    setSelectedDocumentId(null)
  };

  return (
    <IndexsStyled>
      <div>
        <div className="action-sec mb-3">
          <Select
            allowClear
            value={selectedDocType?.value}
            placeholder="Select Document Type"
            onChange={(value: string) => {
              const selectedOption = documentTypeOptions.find(option => option.value === value);
              setSelectedDocType(selectedOption);
            }}
            options={documentTypeOptions ?? []}
            className="delta-select select-filter"
            style={{ width: 200 }}
          />
          <div className="profileinfoHeader">
            <div className="top-sec-header-sec">
              <div onClick={handleClickCreate}>
                <span className="profileEdit">
                  Add New Document 
                </span>
              </div>
            </div>
          </div>
        </div>

        {showForm && (
          <AddRelatedDocuments
            id={id}
            handleCancel={handleCancel}
            selectedDocument={selectedDocument}
            documentId={selectedDocumentId}
            show={showForm}
            onSuccess={onSuccess}
            section_name={section_name}
            documentTypeOptions={documentTypeOptions}
          />
        )}

        <div>
          <div className="total-count-row"></div>
          <div className="institutes-filters"></div>
          <div className="all-institutes-data rapha-table-view">
            <Table
              columns={columns}
              rowKey="id"
              dataSource={documents}
              pagination={false}
              // pagination={{
              //   current: pageNo,
              //   pageSize,
              //   total: vendorsTotalRecord,
              //   showSizeChanger: true,
              //   pageSizeOptions: ["10", "20", "50", "100"],
              // }}
              // onChange={handlePageChange}
              bordered
              scroll={{ x: "max-content" }}
            />

            {/* <div className="rapha-table-pagination">
            <div>
              <span>
                Showing {pageSize ?? 0} of {vendorsTotalRecord ?? 0} Vendors
              </span>
            </div>
          </div> */}
          </div>
        </div>

        <CustomModal
          open={showSuccessMessage}
          title={showSuccessMessageText}
          handleClose={() => {
            setShowSuccessMessage(false);
            setShowDeletePopUp(false);
            setShowSuccessMessageText("");
            handleCancel();
          }}
        >
          <CustomModal.Body>
            <div className="text-center py-4">
              <p>{showSuccessMessageText}</p>
            </div>
          </CustomModal.Body>
          <CustomModal.Footer>
            <div className="flex justify-end">
              <Button
                type="primary"
                onClick={() => {
                  setShowSuccessMessage(false);
                  setShowDeletePopUp(false);
                  setShowSuccessMessageText("");
                  handleCancel();
                }}
              >
                Ok
              </Button>
            </div>
          </CustomModal.Footer>
        </CustomModal>

        <CustomModal
          open={showDeletePopUp}
          title="Confirm Delete"
          handleClose={() => {
            setShowDeletePopUp(false);
            setSelectedDocument(null);
            setSelectedDocumentId(null);
          }}
        >
          <CustomModal.Body>
            <div className="py-4">
              <p>This is non-reversible action. Are you sure you want to delete the report?</p>
            </div>
          </CustomModal.Body>
          <CustomModal.Footer>
            <div className="flex justify-end gap-2">
              <Button
                onClick={() => {
                  setShowDeletePopUp(false);
                  setSelectedDocument(null);
                  setSelectedDocumentId(null);
                }}
              >
                Cancel
              </Button>
              <Button
                type="primary"
                danger
                onClick={async () => {
                  await handleDelete();
                }}
              >
                Delete
              </Button>
            </div>
          </CustomModal.Footer>
        </CustomModal>
      </div>
    </IndexsStyled>
  );
};

export default RelatedDocumentsComponent;
