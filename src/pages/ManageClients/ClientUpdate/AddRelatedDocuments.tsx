import { Select, Upload } from "antd";
import { useState } from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import axios from "axios";
import { IndexsStyled } from "./Index.styled";
import Loader from "@/components/loader/loader/Loader";
import { addNewDocumentApi, editNewDocumentApi } from "@/redux/slices/Clients/ClientsService";

const AddRelatedDocuments = ({
  handleCancel,
  documentTypeOptions,
  onSuccess,
  selectedDocument,
  id,
  documentId,
  section_name

}: any) => {
  const initValStore: any = {
    title: "",
    file: "",
    start_date: "",
    end_date: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<any>(undefined);
  const [file, setFile] = useState<any>(undefined);
  const [extention, setExtention] = useState<any>(
    selectedDocument?.ext ? selectedDocument?.ext : undefined
  );
  const [selectedDocType, setSelectedDocType] = useState<any>(
    selectedDocument?.type ? selectedDocument?.type : null
  );
  const [formData, setFormData] = useState(
    selectedDocument ? selectedDocument : initValStore
  );
  const [errorMessage, setErrorMessage] = useState("");

  const initailErrorData: any = {
    title: false,
    type: false,
    file: false,
    start_date: false,
    end_date: false,
  };
  const [errorData, setErrorData] = useState(initailErrorData);
  const dispatch = useDispatch();

  const errorDataValue = {
    title: "Please enter title",
    type: "Please enter type",
    file: "Please upload file",
    start_date: "Please enter start date",
    end_date: "Please enter end date",
  };

  const handleChange = (e: any) => {
    try {
      let { name, value } = e.target;
  
      setFormData((prev: any) => ({ ...prev, [name]: value }));
      if (value?.trim()) {
        setErrorData({ ...errorData, [name]: false });
      }
    } catch (error) {
      console.error("Error in handleChange:", error);
    }
  };

  const handleDocTypeSelect = (value: any) => {
    setSelectedDocType(value);
    setErrorData({ ...errorData, type: false });
  };

  const handleSubmit = async () => {
    let isValid = true;
    setIsLoading(true);
    const keys: any[] = Object.keys(initailErrorData);

    let err: any = { ...errorData };

    if (!selectedDocType) {
      err.type = true;
    }

    keys?.forEach((key: any) => {
      if (key === "type") {
        if (!selectedDocType) {
          isValid = false;
          err = { ...err, [key]: true };
        }
      } else if (key === "start_date" || key === "end_date") {
        if (!formData[key] && selectedDocType === "contract") {
          isValid = false;
          err = { ...err, [key]: true };
        }
      } else if (key === "file") {
        if(!id){
          if (!file && !selectedDocument) {
            isValid = false;
            err = { ...err, [key]: true };
          }
        }
      } else if (!formData?.[key]) {
        isValid = false;
        err = { ...err, [key]: true };
      } else {
        err = { ...err, [key]: false };
      }
    });
    setErrorData(err);

    if (isValid) {
      const body: any = {
        ...formData,
        type: selectedDocType,
      };

      if (selectedDocType !== "contract") {
        delete body?.start_date;
        delete body?.end_date;
      }

      if (extention && selectedDocType === "contract") {
        body.ext = extention;
      } else {
        body.ext = extention;
        // delete body?.ext;
      }
      delete body?.file;


      let res: any;
      if (selectedDocument) {
        delete body.vendor_id;
        delete body.client_id;
        delete body.ext;
        res = await dispatch(
          editNewDocumentApi({ id: documentId, payload: body })
        );
      } else {


        if (section_name == "VENDOR") {
          body.vendor_id = id;
        }
        else {
          body.client_id = id;
        }
        res = await dispatch(addNewDocumentApi(body));
      }

      if (res?.payload?.success) {
        const actualFile = file;

        if (actualFile && actualFile instanceof File) {
          const signedUrl = res?.payload?.signedUrl;
          const fileData = await actualFile.arrayBuffer();

          // const blob = new Blob([file], { type: file.type });

          const result = await axios.put(signedUrl, fileData, {
            headers: {
              "Content-Type": actualFile.type, // Ensure correct MIME type
              "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
              "Referer": "https://www.admin1.raphacure.com/",
              "Accept": "application/json, text/plain, */*"
            },
          });
        }
        onSuccess();
      } else {
        setErrorMessage(res?.error?.message);
      }
    }
    setIsLoading(false);
  };
  const handleFileChange = async (e: any) => {
    const file = e.file;
    setExtention(`.${file?.type?.split("/")?.[1]}`);
    setSelectedFileName(file?.name);
    setFile(file);
    console.log(file,"file");
    
    // const url = await uploadToS3(file, user?.id);
    // setFormData((prev: any) => ({ ...prev, file: url }));
  };

  console.log(documentId, "documentId");
  

  return (
    <IndexsStyled>
      {isLoading && <Loader />}
      <Modal
        show={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="add-user-model-popup"
      >
        <Modal.Header closeButton onHide={handleCancel}>
          <Modal.Title> {documentId ? "Edit" : "Add New"} Document</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`modalBodyDefault alert-model-popup-sec`}>
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="name">
                  <Form.Label className="text-sm mb-0">
                    Documnet Title<span className="mand-sign-field">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={formData?.title ?? ""}
                    onChange={handleChange}
                    isInvalid={errorData?.title ? true : false}
                  />
                  {errorData?.title && (
                    <Form.Control.Feedback type="invalid">
                      {errorDataValue?.title}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="name">
                  <Form.Label className="text-sm mb-0">
                    Document Type<span className="mand-sign-field">*</span>
                  </Form.Label>
                  <IndexsStyled>
                    <div
                      className={`${errorData?.type
                          ? "delta-select-column delta-select-column-error"
                          : "delta-select-column"
                        } text-capitalize`}
                    >
                      <Select
                        // mode="multiple"
                        getPopupContainer={trigger => trigger.parentElement}
                        value={selectedDocType}
                        placeholder="Select Document Type"
                        onChange={handleDocTypeSelect}
                        options={documentTypeOptions ?? []}
                        className="delta-select select-filter"
                      />
                    </div>
                  </IndexsStyled>
                  <IndexsStyled>
                    {errorData?.type && (
                      <Form.Control.Feedback type="invalid">
                        {errorDataValue?.type}
                      </Form.Control.Feedback>
                    )}
                  </IndexsStyled>
                </Form.Group>
              </Col>
            </Row>

            {/* start date and end date */}
            {selectedDocType === "contract" && (
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="name">
                    <Form.Label className="text-sm mb-0">
                      Contract Start Date
                      <span className="mand-sign-field">*</span>
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="start_date"
                      value={formData?.start_date ?? ""}
                      onChange={handleChange}
                      isInvalid={errorData?.start_date ? true : false}
                    />
                    {errorData?.start_date && (
                      <Form.Control.Feedback type="invalid">
                        {errorDataValue?.start_date}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="name">
                    <Form.Label className="text-sm mb-0">
                      Contract End Date
                      <span className="mand-sign-field">*</span>
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="end_date"
                      value={formData?.end_date ?? ""}
                      onChange={handleChange}
                      min={formData?.state_date ?? ""}
                      isInvalid={errorData?.end_date ? true : false}
                    />
                    {errorData?.end_date && (
                      <Form.Control.Feedback type="invalid">
                        {errorDataValue?.end_date}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>
              </Row>
            )}

           { !documentId &&  <Row className="mb-3">
              <Col>
                <Form.Group className="delta-signup-md" controlId="email">
                  <Form.Label className="text-sm mb-0">
                    Upload File<span className="mand-sign-field">*</span>
                    {/* <span className="mand-sign-field">*</span> */}
                  </Form.Label>
                  <br />
                  <Upload
                    accept="application/pdf"
                    showUploadList={false}
                    onChange={(e: any) => handleFileChange(e)}
                    beforeUpload={() => false}
                  >
                    <Button type="button" style={{ height: "100%" }}>
                      Upload File
                    </Button>
                    {selectedFileName && <p>{selectedFileName}</p>}

                    <IndexsStyled>
                      {errorData?.file && (
                        <p className="error_message">{errorDataValue?.file}</p>
                      )}
                    </IndexsStyled>
                  </Upload>
                  <Form.Control.Feedback type="invalid">
                    {errorData?.file ? <>{errorDataValue?.file}</> : null}
                  </Form.Control.Feedback>
                </Form.Group>

                <IndexsStyled>
                  {errorMessage && (
                    <p className="error_message">{errorMessage}</p>
                  )}
                </IndexsStyled>
              </Col>
            </Row>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </IndexsStyled>
  );
};

export default AddRelatedDocuments;
