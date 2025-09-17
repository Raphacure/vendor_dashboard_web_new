import React, { useState, useEffect, useCallback } from "react";
import { Modal, Form, Button, Row, Col, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Select } from "antd";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import '../ManageTest/TiptapEditor.css';
import {
  addPackageAPI,
  assignVendorsForPackageApi,
  getAllClientsAPI,
  getAllTestsAPI,
  updatePackageAPI,
} from "@/redux/slices/packages/packagesService";
import AddTests from "./AddTests";
import { getAllCategoriesAPI } from "@/redux/slices/medicines/medicineService";
import HistoryModule from "@/components/Common/HistoryModule";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { getS3PresignedUrl } from "@/redux/slices/Profile/ProfileService";
import useCallAllVendors from "@/hooks/useCallAllVendors";
import AssignVendor from "../ManageTest/AssignVendor";

const PackageModal = ({
  showModal,
  handleClose,
  editModal = false,
  packageData = {},
  section_name,
  client_id,
  onSuccess,
}: any) => {
  const [activeTab, setActiveTab] = useState("service");
  const [cost, setCost] = useState(packageData?.price?.actual_cost || 0);
  const [discount, setDiscount] = useState(
    packageData?.price?.discount_percentage || 0
  );
  const [displayOrder, setDisplayOrder] = useState(
    packageData?.display_order ? packageData?.display_order : null
  );
  const [finalPrice, setFinalPrice] = useState<any>(0);
  const [imageUrl, setImageUrl] = useState(packageData?.image || "");
  const [isCorporate, setIsCorporate] = useState(
    packageData?.is_corporate || false
  );
  const [reportsWithIn, setReportsWithIn] = useState(packageData?.reports_within ?? "")
  const [fasting, setFasting] = useState(packageData?.fasting || false);
  const [validated, setValidated] = useState(false);
  const [selectedClient, setSelectedClient] = useState<any>(packageData?.clients ? { label: packageData?.clients?.[0]?.name, value: packageData?.clients?.[0]?.id } : null);
  const [description, setDescription] = useState(
    packageData?.description || ""
  );
  const [preparation, setPreparation] = useState(
    packageData?.preperation || ""
  );
  const dispatch = useDispatch() as any;
  const { clients, tests } = useSelector(
    (reduxState: any) => reduxState.package
  );

  useEffect(() => {
    setSelectedClient(packageData?.clients ? { label: packageData?.clients?.[0]?.name, value: packageData?.clients?.[0]?.id } : null)
  }, [packageData?.clients])

  const { categoriesList } = useSelector((state: any) => state?.medicines);
  const [selectedCategories, setSelectedCategories] = useState<any[]>([]);
  const [imageUrls, setImageUrls] = useState(
    Array.isArray(packageData?.image) ? packageData?.image : []
  );
  const [isCompanyPaid, setIsCompanyPaid] = useState(
    packageData?.isCompanyPaid || false
  );
  const [dependents, setDependents] = useState(packageData?.dependents || 0);

  useEffect(() => {
    setImageUrls(Array.isArray(packageData?.image) ? packageData?.image : []);
    setDescription(packageData?.description || "");
    setPreparation(packageData?.preperation || "");
    setFasting(packageData?.fasting || false);
    const cost1 = packageData?.price?.actual_cost || 0;
    const discount1 = packageData?.price?.discount_percentage || 0;
    const calculatedPrice = cost1 - cost1 * (discount1 / 100);
    setSelectedCategories(packageData?.category_ids);
    setFinalPrice(calculatedPrice.toFixed(2));
    setCost(cost1);
    setDiscount(discount1);
    setIsCorporate(packageData?.is_corporate || false);
    setIsCompanyPaid(packageData?.isCompanyPaid || false);
    setDependents(packageData?.dependents || 0);
    setReportsWithIn(packageData?.reports_within || "");
  }, [packageData]);

  useEffect(() => {
    const calculatedPrice = cost - cost * (discount / 100);
    setFinalPrice(calculatedPrice.toFixed(2)); // Round to 2 decimal places
  }, [cost, discount]);

  useEffect(() => {
    dispatch(getAllCategoriesAPI({ section_name: "packages", count: 100 }));
  }, [dispatch]);

  useEffect(() => {
    if (showModal) {
      dispatch(getAllClientsAPI());
    }
    getTests();
  }, [showModal, dispatch]);

  const getTests = async () => {
    const payload = {
      count: 20,
      page: 0,
      searchText: "",
      type: "diagnostic",
    };

    dispatch(getAllTestsAPI(payload));
  };

  useEffect(() => {
    if (editModal) {
      setCost(packageData?.price?.actual_cost || 0);
      setDiscount(packageData?.price?.discount_percentage || 0);
      setImageUrl(packageData?.image || "");
      setIsCorporate(packageData?.is_corporate || false);
      setFasting(packageData?.fasting || false);
      setDescription(packageData?.description || "");
      setPreparation(packageData?.preperation || "");
      setIsCompanyPaid(packageData?.isCompanyPaid || false);
      setDependents(packageData?.dependents || 0);
    }
  }, [packageData, editModal]);

  const [isBulkUpdate, setIsBulkUpdate] = useState(false)
  const { assignedVendors, setAssignedVendors } = useCallAllVendors({
    id: packageData?.service_code,
    section_name: "package",
  });

  const handleAssignVendor = async () => {
    console.log("id : ", packageData?.service_code);
    handleClose()
  };

  const uploadImageToS3 = async (image: any) => {
    try {
      const presignBody = {
        id: `${Date.now()}`,
        ext: ".png",
      };
      const presignedRes = (await dispatch(
        getS3PresignedUrl(presignBody)
      )) as any;
      const presignedUrlResp = presignedRes.payload?.signedUrL;

      await axios.put(presignedUrlResp.signedUrL, image, {
        headers: {
          "Content-Type": "image/png",
        },
      });

      return presignedUrlResp.publicUrl;
    } catch (error) {
      console.error("Error uploading image to S3:", error);
      throw error;
    }
  };

  const handleImgFileChange = async (event: any) => {
    const files = event.target.files;
    if (files.length > 0) {
      try {
        const uploadPromises = Array.from(files).map((file) =>
          uploadImageToS3(file)
        );
        const uploadedUrls = await Promise.all(uploadPromises);
        setImageUrls((prevUrls: any) => [...prevUrls, ...uploadedUrls]);
      } catch (error) {
        toast.error("Error uploading images. Please try again.");
      }
    }
  };

  const preparationEditor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      Link,
      Bold,
      Italic,
      Placeholder.configure({
        placeholder: 'Enter preparation details...',
      }),
    ],
    content: preparation,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setPreparation(html);
    },
  });

  const descriptionEditor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      Link,
      Bold,
      Italic,
      Placeholder.configure({
        placeholder: 'Enter package description...',
      }),
    ],
    content: description,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setDescription(html);
    },
  });

  useEffect(() => {
    if (preparationEditor && preparation !== preparationEditor.getHTML()) {
      preparationEditor.commands.setContent(preparation || '');
    }
  }, [preparation, preparationEditor]);

  useEffect(() => {
    if (descriptionEditor && description !== descriptionEditor.getHTML()) {
      descriptionEditor.commands.setContent(description || '');
    }
  }, [description, descriptionEditor]);

  const handleSave = (event: any) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    const packageData: any = {
      package: {
        service_name: form["serviceName"].value,
        preperation: preparation,
        description: description,
        cost: Number(form["cost"].value) || 0,
        discount_percentage: Number(form["discountPercentage"].value) || 0,
        visit_type: form["visitType"].value,
        is_corporate: isCorporate,
        client_id: isCorporate ? selectedClient?.value : null,
        fasting: fasting,
        image: imageUrls, // Now passing array of image URLs
        display_order: displayOrder?.value,
        category_ids: selectedCategories,
        reports_within: reportsWithIn,
        // .map((category) => category.value),
      },
    };

    if (section_name === "CLIENT") {
      packageData.package.is_dependent = isCompanyPaid;
      packageData.package.no_of_dependents = dependents;
      packageData.package.is_corporate = true;

      if(!editModal){
        packageData.package.client_id = client_id;
      }
    }

    if (editModal) {
      handleEdit(packageData);
    } else {
      createPackage(packageData);
    }
  };

  const createPackage = async (body: any) => {
    const res = (await dispatch(addPackageAPI(body))) as any;
    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occurred");
    } else {
      toast.success("Package Added Successfully");
      onSuccess();
      handleClose();
    }
  };

  const handleEdit = async (body: any) => {
    const payload = { ...body };

    // delete payload?.package?.client_id;
    // delete payload?.package?.is_corporate;

    const updateBody = {
      id: packageData?.service_code,
      payload,
    };

    const res = (await dispatch(updatePackageAPI(updateBody))) as any;
    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occurred");
      return;
    } else {
      toast.success("Package Updated Successfully");
      onSuccess();
    }
    handleClose();
  };

  const assignVendorHandler = async () => {
    const payload = Object.values(assignedVendors)?.map((vendor: any) => ({
      mor_start_Time: vendor?.mor_start_Time,
      mor_end_Time: vendor?.mor_end_Time,
      mor_buying_price: Number(vendor?.mor_buying_price || 0),
      mor_selling_price: Number(vendor?.mor_selling_price || 0),
      mor_female_available: Boolean(vendor?.mor_female_available),
      mor_male_available: Boolean(vendor?.mor_male_available),
      aft_start_Time: vendor?.aft_start_Time,
      aft_end_Time: vendor?.aft_end_Time,
      aft_buying_price: Number(vendor?.aft_buying_price || 0),
      aft_selling_price: Number(vendor?.aft_selling_price || 0),
      aft_female_available: Boolean(vendor?.aft_female_available) ,
      aft_male_available: Boolean(vendor?.aft_male_available),
      eve_start_Time: vendor?.eve_start_Time,
      eve_end_Time: vendor?.eve_end_Time,
      eve_buying_price: Number(vendor?.eve_buying_price || 0),
      eve_selling_price: Number(vendor?.eve_selling_price || 0),
      eve_female_available: Boolean(vendor?.eve_female_available),
      eve_male_available: Boolean(vendor?.eve_male_available) ,
      id: Number(vendor?.id),
      vendor_package_code: vendor?.vendor_package_code,
      // buying_price: Number(vendor?.buyingPrice),
      // selling_price: Number(vendor?.sellingPrice),
    }));
    const res: any = await dispatch(
      assignVendorsForPackageApi({
        id: packageData?.service_code,
        payload: { vendors: payload },
      })
    );

    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occurred");
      return;
    } else {
      toast.success("Vendor Assigned To Package Successfully");
    }
    handleClose();
    return res;
  };

  const handleChangeDisplayOrder = (value: any) => {
    setDisplayOrder(value);
  };

  return (
    <Modal
      size="xl"
      show={showModal}
      onHide={handleClose}
      centered
      backdrop="static"
    >
      <Modal.Header closeButton={true}>
        <Modal.Title>
          {editModal ? "Edit Package" : "Create Package"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Nav
          variant="tabs"
          activeKey={activeTab}
          onSelect={(tab) => setActiveTab(tab || "service")}
          className="mb-4"
        >
          <Nav.Item>
            <Nav.Link eventKey="service">Service</Nav.Link>
          </Nav.Item>
          {editModal && (
            <>
              <Nav.Item>
                <Nav.Link eventKey="addTests">Add Tests</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="assignVendors">Assign Vendors</Nav.Link>
              </Nav.Item>
            </>
          )}
          <Nav.Item>
            <Nav.Link eventKey="history">History</Nav.Link>
          </Nav.Item>
        </Nav>

        {activeTab === "service" && (
          <div className="serviceTab">
            <Form noValidate validated={validated} onSubmit={handleSave}>
              <Row className="mb-3">
                {section_name !== "CLIENT" && (
                  <Col xs={6}>
                    <Form.Group controlId="corporateSwitch">
                      <Form.Check
                        type="switch"
                        label="Corporate Package"
                        onChange={(e) => {
                          setIsCorporate(e.target.checked)
                        }}
                        checked={isCorporate}
                        id="corporateSwitch"
                      // disabled={editModal}
                      />
                    </Form.Group>
                  </Col>
                )}

                <Col xs={6}>
                  <Form.Group controlId="fastingSwitch">
                    <Form.Check
                      type="switch"
                      label="Requires Fasting"
                      onChange={(e) => setFasting(e.target.checked)}
                      checked={fasting}
                      id="fastingSwitch"
                    // custom
                    />
                  </Form.Group>
                </Col>
                {section_name === "CLIENT" && (
                  <Col xs={6}>
                    <Form.Group controlId="p">
                      <Form.Check
                        type="switch"
                        label="Is Dependent"
                        onChange={(e) => setIsCompanyPaid(e.target.checked)}
                        checked={isCompanyPaid}
                        id="companyPaidSwitch"
                      // custom
                      />
                    </Form.Group>
                  </Col>
                )}
                {isCorporate && (
                  <Col xs={12}>
                    <Form.Group controlId="client">
                      <Form.Label>Select Client</Form.Label>
                      <Select
                        options={clients?.map((client: any) => ({
                          value: client.id,
                          label: client.name,
                        }))}
                        onChange={(value) =>
                          setSelectedClient(clients?.find((client: any) => client.id === value) ? 
                            { label: clients?.find((client: any) => client.id === value)?.name, value } : null)
                        }
                        value={selectedClient?.value}
                        allowClear
                        placeholder="Select a client"
                        style={{ width: '100%' }}
                      />
                    </Form.Group>
                  </Col>
                )}
              </Row>
              {isCompanyPaid && (
                <Row className="mb-3">
                  <Col xs={12}>
                    <Form.Group controlId="dependents">
                      <Form.Label>No Of Dependents</Form.Label>
                      <Form.Control
                        type="number"
                        name="dependents"
                        min="0"
                        placeholder="Enter number of dependents"
                        value={dependents}
                        onChange={(e) =>
                          setDependents(Number(e.target.value) || 0)
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
              )}
              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <Form.Group controlId="serviceName">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="serviceName"
                      placeholder="Enter service name"
                      required
                      defaultValue={packageData?.service_name || ""}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="visitType">
                    <Form.Label>Visit Type</Form.Label>
                    <Form.Control
                      as="select"
                      name="visitType"
                      required
                      defaultValue={packageData?.visit_type || ""}
                    >
                      <option value="">Select visit type</option>
                      <option value="home">Home</option>
                      <option value="center">Center</option>
                      <option value="onsite">Onsite</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={6}>
                  <Form.Group controlId="cost">
                    <Form.Label>Cost</Form.Label>
                    <Form.Control
                      type="number"
                      name="cost"
                      min="0"
                      required
                      value={cost}
                      onChange={(e) => setCost(Number(e.target.value) || 0)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group controlId="discountPercentage">
                    <Form.Label>Discount Percentage</Form.Label>
                    <Form.Control
                      type="number"
                      name="discountPercentage"
                      min="0"
                      max="100"
                      required
                      value={discount}
                      onChange={(e) => setDiscount(Number(e.target.value) || 0)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={12}>
                  <p className="mb-1">
                    <strong>Final Price:</strong> ₹{finalPrice}
                  </p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12}>
                  <Form.Group controlId="categories">
                    <Form.Label>Select Categories</Form.Label>
                    <Select
                      value={selectedCategories}
                      mode="multiple"
                      options={categoriesList?.map((category: any) => ({
                        value: category.id,
                        label: category.name,
                      }))}
                      onChange={(selectedValues: any) => {
                        setSelectedCategories(selectedValues);
                      }}
                      placeholder="Select categories"
                      style={{ width: '100%' }}
                      allowClear
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="name">
                    <Form.Label>Display Order</Form.Label>
                    <div className={"delta-select-column"}>
                      <Select
                        value={displayOrder?.value}
                        placeholder="Select Display Order"
                        onChange={(value) => handleChangeDisplayOrder({ label: value, value })}
                        options={[
                          { label: 1, value: 1 },
                          { label: 2, value: 2 },
                          { label: 3, value: 3 },
                          { label: 4, value: 4 },
                          { label: 5, value: 5 },
                          { label: 6, value: 6 },
                          { label: 7, value: 7 },
                          { label: 8, value: 8 },
                          { label: 9, value: 9 },
                          { label: 10, value: 10 },
                        ]}
                        className="delta-select"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="name">
                    <Form.Label>Reports With In</Form.Label>
                    <div className={"delta-select-column"}>
                      <Form.Control
                        name="reports_within"
                        value={reportsWithIn}
                        onChange={(e) => {
                          setReportsWithIn(e?.target?.value ?? "")
                        }}
                        placeholder="Enter reports within"
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12}>
                  <Form.Group controlId="preparation">
                    <Form.Label>Preparation</Form.Label>
                    <div className="tiptap-editor-container">
                      <div className="tiptap-toolbar">
                        <button
                          onClick={() => preparationEditor?.chain().focus().toggleBold().run()}
                          className={preparationEditor?.isActive('bold') ? 'is-active' : ''}
                          type="button"
                        >
                          Bold
                        </button>
                        <button
                          onClick={() => preparationEditor?.chain().focus().toggleItalic().run()}
                          className={preparationEditor?.isActive('italic') ? 'is-active' : ''}
                          type="button"
                        >
                          Italic
                        </button>
                        <button
                          onClick={() => preparationEditor?.chain().focus().toggleUnderline().run()}
                          className={preparationEditor?.isActive('underline') ? 'is-active' : ''}
                          type="button"
                        >
                          Underline
                        </button>
                      </div>
                      <EditorContent editor={preparationEditor} />
                    </div>
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <div className="tiptap-editor-container">
                      <div className="tiptap-toolbar">
                        <button
                          onClick={() => descriptionEditor?.chain().focus().toggleBold().run()}
                          className={descriptionEditor?.isActive('bold') ? 'is-active' : ''}
                          type="button"
                        >
                          Bold
                        </button>
                        <button
                          onClick={() => descriptionEditor?.chain().focus().toggleItalic().run()}
                          className={descriptionEditor?.isActive('italic') ? 'is-active' : ''}
                          type="button"
                        >
                          Italic
                        </button>
                        <button
                          onClick={() => descriptionEditor?.chain().focus().toggleUnderline().run()}
                          className={descriptionEditor?.isActive('underline') ? 'is-active' : ''}
                          type="button"
                        >
                          Underline
                        </button>
                      </div>
                      <EditorContent editor={descriptionEditor} />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <div className="d-flex flex-col align-items-center m-auto">
                  <Form.Group controlId="media">
                    <Form.Label>Upload Images</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/png"
                      onChange={handleImgFileChange}
                      multiple
                    />
                  </Form.Group>
                  {/* Display all uploaded images */}
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {imageUrls.map((url: any, index: any) => (
                      <div
                        key={index}
                        style={{
                          position: "relative",
                          width: "150px",
                          height: "150px",
                        }}
                      >
                        <img
                          src={url}
                          alt={`Uploaded ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <Button
                          variant="danger"
                          size="sm"
                          style={{
                            position: "absolute",
                            top: "5px",
                            right: "5px",
                            padding: "0px 6px",
                            minWidth: "20px",
                            minHeight: "20px",
                            borderRadius: "50%",
                            zIndex: 2,
                          }}
                          onClick={() =>
                            setImageUrls((prevUrls: any) =>
                              prevUrls.filter((_: any, i: any) => i !== index)
                            )
                          }
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </Row>
              <Button
                variant="primary"
                type="submit"
              // block
              >
                {editModal ? "Update Data" : "Save"}
              </Button>
            </Form>
          </div>
        )}

        {activeTab === "addTests" && (
          <AddTests
            id={packageData?.service_code}
            assignedTests={tests}
            prevAssignedTest={packageData?.tests}
            onSave={handleClose}
            type="package"
          />
        )}
        {activeTab === "history" && (
          <HistoryModule
            vendorId={packageData?.service_code}
            section_name={"package"}
          />
        )}
        {activeTab === "assignVendors" && (
          <div className="">
            <AssignVendor
              isBulkUpdate={isBulkUpdate}
              setIsBulkUpdate={setIsBulkUpdate}
              sectionName="PACKAGE"
              onSuccess={handleAssignVendor}
              id={packageData?.service_code}
              assignedVendors={assignedVendors}
              // type="package"
              onClose={() => { }}
              setAssignedVendors={setAssignedVendors}
            />
            {isBulkUpdate ? <></> : <div className="px-3 d-flex justify-content-end">
              <Button
                variant="primary"
                type="button"
                className="mt-3 w-25"
                onClick={assignVendorHandler}
              // block
              >
                Save
              </Button>
            </div>}
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default PackageModal;
