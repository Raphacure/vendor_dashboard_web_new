import { useState, useMemo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IndexsStyled } from "./Index.styled";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import Loader from "@/components/loader/loader/Loader";
import { Image, Select, Switch, Tabs, Upload } from "antd";

import AssignVendor, { vendorDataDto } from "./AssignVendor";
import axios from "axios";
import {
  assignVendorsApi,
  createTestsCall,
  updateTestsCall,
} from "@/redux/slices/labtest/labtestService";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import './TiptapEditor.css';
import { MdDelete } from "react-icons/md";
import { testTypeOptions } from "@/lib/constants";
import { ModelIndexStyled } from "./ModelIndex.styled";
import useCallAllVendors from "@/hooks/useCallAllVendors";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-hot-toast";
import { getS3PresignedUrl } from "@/redux/slices/Profile/ProfileService";

type AddNewTestsModelProp = {
  onSuccess: () => void;
  onHide: () => void;
  isEdit: boolean;
  dynamicClassName?: string;
  selectedTest?: any;
  sectionName: "ctmri" | "labtest";
};

const AddNewTestsModel = (props: AddNewTestsModelProp) => {
  const dispatch = useDispatch() as any;
  const [displayOrder, setDisplayOrder] = useState<any>(
    props?.selectedTest ? props?.selectedTest?.display_order : null
  );
  const [bodyPart, setBodyPart] = useState<any>(
    props?.selectedTest
      ? {
        label: props?.selectedTest?.bodyPart,
        value: props?.selectedTest?.bodyPart,
      }
      : null
  );
  // const [scanType, setScanType] = useState<any>(
  //   props?.selectedTest
  //     ? {
  //         label: props?.selectedTest?.scanType,
  //         value: props?.selectedTest?.scanType,
  //       }
  //     : null
  // );

  const { categoriesList } = useSelector((state: any) => state?.medicines);

  const initValStore = {
    serviceName: "",
    fasting: false,
    testType: false,
    preparation: "",
    description: "",
    searchKeys: "",
    cost: 0,
    category: "",
    // subCategory: "",
    discountPercentage: 0,
    bodyPart: "",
    scanType: "",
    finalPrice: 0,
    imageUrls: [null, null, null, null, null],
    video: null,
  };

  const initValError = useMemo(() => {
    let d: any = {
      serviceName: false,
      // fasting: false,
      testType: false,
      // preparation: false,
      // description: false,
      searchKeys: false,
      category: false,
      // subCategory: false,
      cost: false,
      // discountPercentage: false,
      finalPrice: false,
      // imageUrls: false,
      // video: false,
    };
    if (props?.sectionName == "ctmri") {
      d = {
        ...d,
        bodyPart: false,
        scanType: false,
      };
    } else if (props?.sectionName === "labtest") {
      d = {
        ...d,
        tubeName: false,
      };
    }
    return d;
  }, [props?.sectionName]);
  const errorDataValue = {
    serviceName: "Please enter service name",
    testType: "Please select test type",
    // fasting: "Please check fasting",
    preparation: "Please enter preparation",
    description: "Please enter description",
    searchKeys: "Please enter search keys",
    cost: "Please enter cost",
    discountPercentage: "Please enter discount percentage",
    finalPrice: "Please enter final price",
    imageUrls: "Please upload image",
    video: "Please upload video",
    category: "Please select category",
    tubeName: "Please select tube name",
    vendor: "Please select vendor",
    body_part: "Please select body part",
    scan_type: "Please select scan type",
    // subCategory: "Please select sub category",
  };

  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [imageUrls, setImageUrls] = useState(
    props?.selectedTest?.image_urls
      ? props?.selectedTest?.image_urls
      : [null, null, null, null, null]
  );
  const [selectedTestType, setSelectedTestType] = useState(
    props?.selectedTest?.testType ? props?.selectedTest?.testType : null
  );
  const [selectedTubeName, setSelectedTubeName] = useState(
    props?.selectedTest?.tubeName ? props?.selectedTest?.tubeName : null
  );
  const [selectedCategory, setSelectedCategory] = useState(
    props?.selectedTest?.category_ids ? props?.selectedTest?.category_ids : []
  );
  // const [selectedSubCategory, setSelectedSubCategory] = useState(
  //   props?.selectedTest?.subcategory_ids
  //     ? props?.selectedTest?.subcategory_ids
  //     : []
  // );

  const { user } = useSelector((state: any) => state?.auth);
  const [formData, setFormData] = useState<any>(
    props?.selectedTest ?? initValStore
  );

  const [errorData, setErrorData] = useState(initValError as any);

  const categoryOptions = useMemo(() => {
    return categoriesList?.map((category: any) => ({
      label: category?.name ?? "",
      value: category?.id,
    }));
  }, [categoriesList]);

  const tubeNameOptions = [
    {
      label: "Red – No anticoagulants, Plain Tube",
      value: "Red – No anticoagulants, Plain Tube",
    },
    {
      label: "Yellow/Gold – SST (Serum Separator Tube)",
      value: "Yellow/Gold – SST (Serum Separator Tube)",
    },
    {
      label: "Lavender/Purple – EDTA Tube",
      value: "Lavender/Purple – EDTA Tube",
    },
    { label: "Black – ESR Tube", value: "Black – ESR Tube" },
    {
      label: "Orange – Clot Activator Tube",
      value: "Orange – Clot Activator Tube",
    },
    { label: "Green – Heparin Tube", value: "Green – Heparin Tube" },
    {
      label: "Blue – Sodium Citrate, PT Tube",
      value: "Blue – Sodium Citrate, PT Tube",
    },
    { label: "Grey – Fluoride Tube", value: "Grey – Fluoride Tube" },
    { label: "Sterile – Urine Container", value: "Sterile – Urine Container" },
    { label: "Sterile – Stool Container", value: "Sterile – Stool Container" },
    {
      label: "Formalin Container",
      value: "Formalin Container",
    },
    {
      label: "Sterile Swab",
      value: "Sterile Swab",
    },
    {
      label: "Blood Culture Bottles",
      value: "Blood Culture Bottles",
    },
    {
      label: "Tissue Biopsy / Frozen Sections",
      value: "Tissue Biopsy / Frozen Sections",
    },
    {
      label: "Sterile Container / Tube",
      value: "Sterile Container / Tube",
    },
    { label: "Formalin container", value: "Formalin container" },
    { label: "Tissue biopsy or frozen sections", value: "Tissue biopsy or frozen sections" },
    { label: "Blood Culture Bottles", value: "Blood Culture Bottles" },
    { label: "Sterile container or sterile tube", value: "Sterile container or sterile tube" },
    { label: "Formalin-Fixed Paraffin-Embedded (FFPE) Tissue Block ", value: "Formalin-Fixed Paraffin-Embedded (FFPE) Tissue Block " },
    { label: "Sterile swab", value: "Sterile swab" },
  ];

  const bodyPartOptions = [
    { label: "Brain & Head", value: "Brain & Head" },
    { label: "Chest & Lungs", value: "Chest & Lungs" },
    { label: "Abdomen & Pelvis", value: "Abdomen & Pelvis" },
    { label: "Bones & Joints", value: "Bones & Joints" },
    { label: "Heart & Blood Vessels", value: "Heart & Blood Vessels" },
    { label: "Neck & Thyroids", value: "Neck & Thyroids" },
    { label: "Breast", value: "Breast" },
    { label: "Whole Body", value: "Whole Body" },
  ];

  const scanTypeOptions = [
    { label: "CT Scan", value: "CT Scan" },
    { label: "MRI Scan", value: "MRI Scan" },
    { label: "Nuero Scan", value: "Nuero Scan" },
    { label: "Nuclear Scan", value: "Nuclear Scan" },
    { label: "USG Scan", value: "USG Scan" },
    { label: "X-Ray", value: "X-Ray" },
    { label: "Pet Scan", value: "Pet Scan" },
  ];

  // const subCategoryOptions = useMemo(() => {
  //   return uniqueSubCategoryList?.map((subCatg: any) => ({
  //     label: subCatg?.name ?? "",
  //     value: subCatg?.id,
  //   }));
  // }, [uniqueSubCategoryList]);

  const handleSubmitAssignVendorDetails = async () => {
    const payload = Object.values(assignedVendors)?.map((vendor: any) => ({
      mor_start_Time: vendor?.mor_start_Time,
      mor_end_Time: vendor?.mor_end_Time,
      mor_buying_price: Number(vendor?.mor_buying_price) || 0,
      mor_selling_price: Number(vendor?.mor_selling_price) || 0,
      mor_female_available: vendor?.mor_female_available ?? false,
      mor_male_available: vendor?.mor_male_available ?? false,
      aft_start_Time: vendor?.aft_start_Time,
      aft_end_Time: vendor?.aft_end_Time,
      aft_buying_price: Number(vendor?.aft_buying_price) || 0,
      aft_selling_price: Number(vendor?.aft_selling_price) || 0,
      aft_female_available: vendor?.aft_female_available ?? false,
      aft_male_available: vendor?.aft_male_available ?? false,
      eve_start_Time: vendor?.eve_start_Time,
      eve_end_Time: vendor?.eve_end_Time,
      eve_buying_price: Number(vendor?.eve_buying_price) || 0,
      eve_selling_price: Number(vendor?.eve_selling_price) || 0,
      eve_female_available: vendor?.eve_female_available ?? false,
      eve_male_available: vendor?.eve_male_available ?? false,
      id: Number(vendor?.id),
      vendor_test_code: vendor?.vendor_test_code,
      // buying_price: Number(vendor?.buyingPrice),
      // selling_price: Number(vendor?.sellingPrice),
    }));
    const res: any = await dispatch(
      assignVendorsApi({
        id: props?.selectedTest?.id,
        payload: { vendors: payload },
      })
    );
    return res;
  };
  const { assignedVendors, setAssignedVendors, isBulkUpdate, setIsBulkUpdate } = useCallAllVendors({
    id: props?.selectedTest?.id,
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    let errors: any = {};
    let isValid = true;
    let res: any;

    if (activeTab === "2") {
      res = await handleSubmitAssignVendorDetails();
    } else {
      Object.keys(initValError)?.forEach((key) => {
        console.log(key);
        console.log(formData?.key);

        if (key === "testType") {
          errors[key] = !selectedTestType;
        } else if (props?.sectionName === "labtest" && key === "tubeName") {
          errors[key] = !selectedTubeName;
        } else if (props?.sectionName === "ctmri") {
          if (key == "bodyPart") {
            errors[key] = !bodyPart?.value;
            isValid = bodyPart?.value ? true : false;
          }
          // else if (key == "scanType") {
          //   errors[key] = !scanType?.value;
          //   isValid = scanType?.value ? true : false;
          // }
        } else if (key === "category") {
          errors[key] = !selectedCategory;
        }
        // else if (key === "subCategory") {
        //   errors[key] = !selectedSubCategory;
        // }
        else if (!formData?.[key]) {
          errors[key] = true;
          isValid = false;
        } else {
          errors[key] = false;
        }
      });
      const body: any = {
        test: {
          service_name: formData?.serviceName,
          preperation: formData?.preparation,
          description: formData?.description,
          search_keys: formData?.searchKeys,
          cost: formData?.cost,
          discount_percentage: formData?.discountPercentage,
          image: imageUrls,
          video_url: formData?.video || null,
          tube_name: selectedTubeName,
          // vendor_ids: selectedVendor?.map((vendor: any) => vendor?.value),
          type: selectedTestType,
          category_ids: selectedCategory,
          // subcategory_ids: selectedSubCategory,
          final_price: formData?.finalPrice,
          display_order: displayOrder?.value ?? null,
          reports_within: formData?.reports_within
        },
      };

      if (props?.sectionName == "ctmri") {
        body.test.body_part = bodyPart?.value;
        // body.test.scan_type = scanType?.value;
      } else {
        body.test.fasting = formData?.fasting;
        body.test.start_time = "06:00:00";
        body.test.end_time = formData?.fasting ? "11:00:00" : "19:00:00";
      }

      if (isValid) {
        if (props?.isEdit) {
          res = await dispatch(
            updateTestsCall({ payload: body, id: props?.selectedTest?.id })
          );
        } else {
          res = await dispatch(createTestsCall(body));
        }
      }
    }

    if (res?.payload?.success) {
      props?.onSuccess();
    } else {
      toast.error(res?.error?.message || res?.payload?.message || "Something went wrong")
      // setErrorMessage(res?.error?.message || res?.payload?.message || "Something went wrong");
    }
    setIsLoading(false);
    setErrorData(errors);
  };

  const handleChange = (e: any) => {
    let { name, value } = e.target;
    var value1 = value;
    if (value.trim() == "") {
      value1 = value.trim();
    }
    const addr = { ...formData };
    const addr_error = { ...errorData };

    if (name === "discountPercentage") {
      addr["finalPrice"] = addr.cost - addr.cost * (value1 / 100);
    } else if (name === "cost") {
      addr["finalPrice"] = value1 - value1 * (addr?.discountPercentage / 100);
    }

    setFormData({
      ...addr,
      [name]: value1,
    });
    setErrorData({
      ...addr_error,
      [name]: false,
    });
  };

  const uploadImageToS3 = async (file: File, isImage = true) => {
    try {
      const presignBody = {
        id: `${user?.id}`,
        ext: isImage ? ".png" : ".mp4",
      };
      const presignedRes = await dispatch(getS3PresignedUrl(presignBody));
      const presignedUrlResp = JSON.parse(JSON.stringify(presignedRes));

      const presignedUrl = presignedUrlResp?.payload?.signedUrL?.signedUrL;
      const publicUrl = presignedUrlResp?.payload?.signedUrL?.publicUrl;

      await axios.put(presignedUrl, file, {
        headers: {
          "Content-Type": isImage ? "image/png" : "video/mp4", // Ensure the correct content type is set
        },
      });
      return publicUrl;
    } catch (error) {
      console.error("Error uploading file to S3:", error);
      throw error;
    }
  };

  const handleImgFileChange = async (info: any, index: number) => {
    const file = info.file.originFileObj;

    if (file) {
      try {
        const url = await uploadImageToS3(file, true);

        setImageUrls((prev: any) =>
          prev?.map((u: any, i: number) => {
            if (i === index) return url;
            return u;
          })
        );
        let err = { ...errorData };
        if (url) {
          setErrorData({ ...err, imageUrls: false });
        } else if (imageUrls?.length <= 0) {
          setErrorData({ ...err, imageUrls: true });
        }
      } catch (error) {
        // setErrorData((prev) => ({ ...prev, uploadLogo: true }));
      }
    }
  };

  const handleSelect = (
    value: any,
    name: "CATEGORY" | "SUBCATEGORY" | "TEST_TYPE" | "TUBE_NAME"
  ) => {
    if (name === "CATEGORY") {
      setErrorData({ ...errorData, category: false });
      setSelectedCategory(value);
    }

    // else if (name === "SUBCATEGORY") {
    //   setErrorData({ ...errorData, subCategory: false });
    //   setSelectedSubCategory(value);
    // }
    else if (name === "TEST_TYPE") {
      setErrorData({ ...errorData, testType: false });
      setSelectedTestType(value);
    } else if (name === "TUBE_NAME") {
      setErrorData({ ...errorData, tubeName: false });
      setSelectedTubeName(value);
    }
  };

  const handleVideoFileChange = async (info: any) => {
    const file = info.file.originFileObj;

    if (file) {
      try {
        const url = await uploadImageToS3(file, false);
        console.log(url);
        setFormData({
          ...formData,
          video: url,
        });
        let err = { ...errorData };
        setErrorData({ ...err, video: false });
      } catch (error) {
        // setErrorData((prev) => ({ ...prev, uploadLogo: true }));
      }
    }
  };
  const handleChangeDisplayOrder = (value: any) => {
    setDisplayOrder(value);
  };
  const handleChangeBodyPart = (value: any) => {
    setBodyPart(value);
    setErrorData({
      ...errorData,
      bodyPart: false,
    });
  };
  // const handleChangeScanTypePart = (value: any) => {
  //   // setScanType(value);
  //   setErrorData({
  //     ...errorData,
  //     scanType: false,
  //   });
  // };

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
    content: props?.selectedTest?.preparation || '',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      if (formData?.preparation !== html) {
        const err = { ...errorData };
        if (err.preparation) {
          setErrorData((prev: any) => ({
            ...prev,
            preparation: false,
          }));
        }
        setFormData((prevFormData: any) => ({
          ...prevFormData,
          preparation: html,
        }));
      }
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
        placeholder: 'Enter description...',
      }),
    ],
    content: props?.selectedTest?.description || '',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      if (formData?.description !== html) {
        const err = { ...errorData };
        if (err.description) {
          setErrorData((prev: any) => ({
            ...prev,
            description: false,
          }));
        }
        setFormData((prevFormData: any) => ({
          ...prevFormData,
          description: html,
        }));
      }
    },
  });

  useEffect(() => {
    if (preparationEditor && formData?.preparation !== preparationEditor.getHTML()) {
      preparationEditor.commands.setContent(formData?.preparation || '');
    }
  }, [formData?.preparation, preparationEditor]);

  useEffect(() => {
    if (descriptionEditor && formData?.description !== descriptionEditor.getHTML()) {
      descriptionEditor.commands.setContent(formData?.description || '');
    }
  }, [formData?.description, descriptionEditor]);

  return (
    <IndexsStyled>
      {isLoading && <Loader />}

      <Modal
        {...props}
        show={true}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        className="add-user-model-popup"
      >
        <Modal.Body
          className={`modalBodyDefault alert-model-popup-sec dynamic_class_${props?.dynamicClassName} `}
        >
          <IndexsStyled>
            <div className="model">
              <IndexsStyled>
                <span className="close-float">
                  <IoMdClose size={20} onClick={props?.onHide} />
                </span>
              </IndexsStyled>
              <Tabs
                defaultActiveKey="1"
                activeKey={activeTab}
                onChange={(key: string) => {
                  setActiveTab(key);
                }}
                items={[
                  {
                    label: "Service",
                    key: "1",
                    children: (
                      <Form>
                        <Row className="mb-3">
                          <Col>
                            <Form.Group controlId="name">
                              <Form.Label>Service Name</Form.Label>
                              <Form.Control
                                type="text"
                                name="serviceName"
                                value={formData?.serviceName ?? ""}
                                onChange={handleChange}
                                isInvalid={
                                  errorData?.serviceName ? true : false
                                }
                              />
                              {errorData?.serviceName && (
                                <Form.Control.Feedback type="invalid">
                                  {errorDataValue?.serviceName}
                                </Form.Control.Feedback>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>
                        {props?.sectionName === "labtest" && (
                          <Row className="mb-3">
                            <Col>
                              <IndexsStyled>
                                <Form.Group
                                  controlId="name"
                                  className="space-between"
                                >
                                  <Form.Label>Fasting</Form.Label>
                                  <Switch
                                    onChange={(flagv) => {
                                      setFormData({
                                        ...formData,
                                        fasting: flagv,
                                      });
                                    }}
                                    checked={formData?.fasting}
                                  />
                                  {errorData?.serviceName && (
                                    <Form.Control.Feedback type="invalid">
                                      {errorDataValue?.serviceName}
                                    </Form.Control.Feedback>
                                  )}
                                </Form.Group>
                              </IndexsStyled>
                            </Col>
                          </Row>
                        )}

                        {/* <Row className="mb-3">
                          <Col>
                            <Form.Group controlId="vendor_ids">
                              <Form.Label>Vendor</Form.Label>
                              <SelectAtnD
                                name="vendor"
                                isMulti={true}
                                value={selectedVendor}
                                placeholder="Select Vendor"
                                onChange={handleVendorChange}
                                options={vendorsOptions}
                                className="delta-select"
                                classNamePrefix="delta-select"
                              />
                              {errorData?.categoryKey && (
                                <Form.Control.Feedback type="invalid">
                                  {errorDataValue?.vendor}
                                </Form.Control.Feedback>
                              )}
                            </Form.Group>
                          </Col>
                        </Row> */}

                        <Row className="mb-3">
                          <Col>
                            <Form.Group controlId="testType">
                              <Form.Label>Test Type</Form.Label>
                              <IndexsStyled>
                                <div
                                  className={
                                    errorData?.testType
                                      ? "delta-select-column delta-select-column-error"
                                      : "delta-select-column"
                                  }
                                >
                                  <Select
                                    value={selectedTestType}
                                    placeholder="Select Test Type"
                                    onChange={(value) => handleSelect(value, "TEST_TYPE")}
                                    options={testTypeOptions}
                                    className="delta-select"
                                    style={{ width: "100%" }}
                                    allowClear
                                    showSearch
                                    optionLabelProp="label"
                                  />
                                </div>
                                {errorData?.testType && (
                                  <p className="error_message">
                                    {errorDataValue?.testType}
                                  </p>
                                )}
                              </IndexsStyled>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group controlId="category">
                              <Form.Label>Category</Form.Label>
                              <IndexsStyled>
                                <div
                                  className={
                                    errorData?.category
                                      ? "delta-select-column delta-select-column-error"
                                      : "delta-select-column"
                                  }
                                >
                                  <Select
                                    mode="multiple"
                                    value={selectedCategory}
                                    placeholder="Select Category"
                                    onChange={(value) => handleSelect(value, "CATEGORY")}
                                    options={categoryOptions}
                                    className="delta-select"
                                    style={{ width: "100%" }}
                                    allowClear
                                    showSearch
                                    optionLabelProp="label"
                                  />
                                </div>
                                {errorData?.category && (
                                  <p className="error_message">
                                    {errorDataValue?.category}
                                  </p>
                                )}
                              </IndexsStyled>
                            </Form.Group>
                          </Col>
                        </Row>

                        {/* <Row className="mb-3">
              <Col>
                <Form.Group controlId="subCategory">
                  <Form.Label>Sub Category</Form.Label>
                  <IndexsStyled>
                    <div
                      className={
                        errorData?.subCategory
                          ? "delta-select-column delta-select-column-error"
                          : "delta-select-column"
                      }
                    >
                      <Select
                        mode="multiple"
                        value={selectedSubCategory}
                        placeholder="Select SubCategory"
                        onChange={(e: any) => handleSelect(e, "SUBCATEGORY")}
                        options={subCategoryOptions}
                        className="delta-select"
                      />
                    </div>
                    {errorData?.subCategory && (
                      <p className="error_message">
                        {errorDataValue?.subCategory}
                      </p>
                    )}
                  </IndexsStyled>
                </Form.Group>
              </Col>
            </Row> */}

                        <Row className="mb-3">
                          <Col>
                            <Form.Group controlId="name">
                              <Form.Label>Search Keys</Form.Label>
                              <Form.Control
                                type="text"
                                name="searchKeys"
                                value={formData?.searchKeys ?? ""}
                                onChange={handleChange}
                                isInvalid={errorData?.searchKeys ? true : false}
                              />
                              {errorData?.searchKeys && (
                                <Form.Control.Feedback type="invalid">
                                  {errorDataValue?.searchKeys}
                                </Form.Control.Feedback>
                              )}
                            </Form.Group>
                          </Col>

                          {props?.sectionName == "labtest" && (
                            <Col>
                              <Form.Group controlId="category">
                                <Form.Label>Tube Name</Form.Label>
                                <IndexsStyled>
                                  <div
                                    className={
                                      errorData?.tubeName
                                        ? "delta-select-column delta-select-column-error"
                                        : "delta-select-column"
                                    }
                                  >
                                    <Select
                                      value={selectedTubeName}
                                      placeholder="Select Tube Name"
                                      onChange={(value) => handleSelect(value, "TUBE_NAME")}
                                      options={tubeNameOptions}
                                      className="delta-select"
                                      style={{ width: "100%" }}
                                      allowClear
                                      showSearch
                                      optionLabelProp="label"
                                    />
                                  </div>
                                  {errorData?.tubeName && (
                                    <p className="error_message">
                                      {errorDataValue?.tubeName}
                                    </p>
                                  )}
                                </IndexsStyled>
                              </Form.Group>
                            </Col>
                          )}
                        </Row>
                        <Row className="mb-3">
                          <Col>
                            <Form.Group controlId="name">
                              <Form.Label>Cost</Form.Label>
                              <Form.Control
                                type="number"
                                name="cost"
                                value={formData?.cost ?? ""}
                                onChange={handleChange}
                                isInvalid={errorData?.cost ? true : false}
                              />
                              {errorData?.cost && (
                                <Form.Control.Feedback type="invalid">
                                  {errorDataValue?.cost}
                                </Form.Control.Feedback>
                              )}
                            </Form.Group>
                          </Col>

                          <Col>
                            <Form.Group controlId="name">
                              <Form.Label>Discount Percentage</Form.Label>
                              <Form.Control
                                type="number"
                                name="discountPercentage"
                                value={formData?.discountPercentage ?? ""}
                                onChange={handleChange}
                                isInvalid={
                                  errorData?.discountPercentage ? true : false
                                }
                              />
                              {errorData?.discountPercentage && (
                                <Form.Control.Feedback type="invalid">
                                  {errorDataValue?.discountPercentage}
                                </Form.Control.Feedback>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col>
                            <Form.Group controlId="name">
                              <Form.Label>Final Price</Form.Label>
                              <Form.Control
                                type="number"
                                name="finalPrice"
                                value={formData?.finalPrice ?? ""}
                                readOnly={true}
                                // onChange={handleChange}
                                isInvalid={errorData?.finalPrice ? true : false}
                              />
                              {errorData?.finalPrice && (
                                <Form.Control.Feedback type="invalid">
                                  {errorDataValue?.finalPrice}
                                </Form.Control.Feedback>
                              )}
                            </Form.Group>
                          </Col>

                          <Col>
                            <Form.Group controlId="name">
                              <Form.Label>Display Order</Form.Label>
                              <IndexsStyled>
                                <div
                                  className={
                                    errorData?.["displayOrder"]
                                      ? "delta-select-column delta-select-column-error"
                                      : "delta-select-column"
                                  }
                                >
                                  <Select
                                    value={displayOrder}
                                    placeholder="Select Display Order"
                                    onChange={handleChangeDisplayOrder}
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
                                    style={{ width: "100%" }}
                                    allowClear
                                    showSearch
                                    optionLabelProp="label"
                                  />
                                </div>
                                {errorData?.["displayOrder"] && (
                                  <p className="error_message">
                                    Display Order is required
                                  </p>
                                )}
                              </IndexsStyled>
                            </Form.Group>
                          </Col>
                        </Row>

                          <Row className="mb-3">
                            <Col>
                              <Form.Group controlId="name">
                                <Form.Label>Reports With In</Form.Label>
                                <IndexsStyled>
                                  <div
                                    className={
                                      errorData?.reports_within
                                        ? "delta-select-column delta-select-column-error"
                                        : "delta-select-column"
                                    }
                                  >
                                    <Form.Control
                                      name="reports_within"
                                      value={formData?.reports_within}
                                      onChange={handleChange}
                                    />
                                  </div>
                                  {errorData?.bodyPart && (
                                    <p className="error_message">
                                      Reports with in is required
                                    </p>
                                  )}
                                </IndexsStyled>
                              </Form.Group>
                            </Col>
                          </Row>

                        {props?.sectionName == "ctmri" && (
                          <Row className="mb-3">
                            <Col>
                              <Form.Group controlId="name">
                                <Form.Label>Body Part</Form.Label>
                                <IndexsStyled>
                                  <div
                                    className={
                                      errorData?.body_part
                                        ? "delta-select-column delta-select-column-error"
                                        : "delta-select-column"
                                    }
                                  >
                                    <Select
                                      value={bodyPart?.value}
                                      placeholder="Select Body Part"
                                      onChange={(value) => handleChangeBodyPart({ label: value, value })}
                                      options={bodyPartOptions}
                                      className="delta-select"
                                      style={{ width: "100%" }}
                                      allowClear
                                      showSearch
                                      optionLabelProp="label"
                                    />
                                  </div>
                                  {errorData?.bodyPart && (
                                    <p className="error_message">
                                      Body Part is required
                                    </p>
                                  )}
                                </IndexsStyled>
                              </Form.Group>
                            </Col>

                            {/* <Col>
                              <Form.Group controlId="name">
                                <Form.Label>Scan Type</Form.Label>
                                <IndexsStyled>
                                  <div
                                    className={
                                      errorData?.scanType
                                        ? "delta-select-column delta-select-column-error"
                                        : "delta-select-column"
                                    }
                                  >
                                    <SelectAtnD
                                      value={scanType}
                                      placeholder="Select Scan Type"
                                      onChange={handleChangeScanTypePart}
                                      options={scanTypeOptions}
                                      className="delta-select"
                                      classNamePrefix="delta-select"
                                    />
                                  </div>
                                  {errorData?.scanType && (
                                    <p className="error_message">
                                      Scan type is required
                                    </p>
                                  )}
                                </IndexsStyled>
                              </Form.Group>
                            </Col> */}
                          </Row>
                        )}


                        <Row className="mb-3">
                          <Col>
                            <Form.Group controlId="name">
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
                              
                              {errorData?.preparation && (
                                <Form.Control.Feedback type="invalid">
                                  {errorDataValue?.preparation}
                                </Form.Control.Feedback>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col>
                            <Form.Group controlId="name">
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
                              
                              {errorData?.description && (
                                <Form.Control.Feedback type="invalid">
                                  {errorDataValue?.description}
                                </Form.Control.Feedback>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>

                        <ModelIndexStyled>
                          <Row className="all-images-sec-add justify-content-center">
                            {[0, 1, 2, 3, 4]?.map((index) => {
                              const imgurlll = imageUrls?.[index];
                              return (
                                <Col sm={5} className="all-images-sec-add-row">
                                  <Form.Group
                                    className="delta-signup-md"
                                    controlId="email"
                                  >
                                    <Form.Label>
                                      <h5>
                                        {" "}
                                        Image {index + 1}
                                        {/* {index === 0 && (
                                        <span className="mand-sign-field">
                                          *
                                        </span>
                                      )} */}
                                      </h5>
                                    </Form.Label>
                                    <br />
                                    {!imgurlll || imgurlll === "NULL" ? (
                                      <Upload
                                        accept="image/png"
                                        showUploadList={false}
                                        onChange={(e) =>
                                          handleImgFileChange(e, index)
                                        }
                                      >
                                        <Button style={{ height: "100%" }}>
                                          Upload Image
                                        </Button>
                                        {index == 0 && (
                                          <IndexsStyled>
                                            {errorData?.imageUrls && (
                                              <p className="invalid">
                                                {errorDataValue?.imageUrls}
                                              </p>
                                            )}
                                          </IndexsStyled>
                                        )}
                                      </Upload>
                                    ) : (
                                      <IndexsStyled>
                                        <div
                                          style={{ marginTop: "10px" }}
                                          className="image-preview"
                                        >
                                          <img
                                            className=" image-preview-medicine"
                                            src={
                                              imgurlll
                                                ?.replace("{", "")
                                                ?.replace("}", "")
                                                ?.replace(/"/g, "") ?? ""
                                            }
                                            alt="Uploaded Image"
                                          />
                                          <MdDelete
                                            size={20}
                                            style={{ marginLeft: "10px" }}
                                            onClick={() => {
                                              setImageUrls((prev: any) =>
                                                prev.map(
                                                  (url: any, i: number) => {
                                                    if (i === index)
                                                      return null;
                                                    return url;
                                                  }
                                                )
                                              );
                                            }}
                                          />
                                        </div>
                                      </IndexsStyled>
                                    )}
                                    <Form.Control.Feedback type="invalid">
                                      {errorData?.imageUrls ? (
                                        <>{errorDataValue?.imageUrls}</>
                                      ) : null}
                                    </Form.Control.Feedback>
                                  </Form.Group>
                                </Col>
                              );
                            })}
                          </Row>
                        </ModelIndexStyled>
                        {/* <Form.Group
                          className="delta-signup-md"
                          controlId="email"
                        >
                          <Form.Label>
                            Image
                          </Form.Label>
                          <br />
                          <Upload
                            accept="image/png"
                            showUploadList={false}
                            onChange={(e: any) => handleImgFileChange(e)}
                          >
                            <Button style={{ height: "100%" }}>
                              Upload Image
                            </Button>

                            <IndexsStyled>
                              {errorData?.imageUrls && (
                                <p className="error_message">
                                  {errorDataValue?.imageUrls}
                                </p>
                              )}
                            </IndexsStyled>
                          </Upload>
                          {formData?.imageUrls && (
                            <div
                              style={{ marginTop: "10px" }}
                              className="image-preview"
                            >
                              <div
                                style={{ marginTop: "10px" }}
                                className="image-preview"
                              >
                                <Image
                                  width={200}
                                  src={formData?.imageUrls ?? ""}
                                  alt="Uploaded Image"
                                />
                                <MdDelete
                                  size={20}
                                  style={{ marginLeft: "10px" }}
                                  onClick={() => {
                                    setFormData((prev: any) => ({
                                      ...prev,
                                      imageUrls: null,
                                    }));
                                  }}
                                />
                              </div>
                            </div>
                          )}
                          <Form.Control.Feedback type="invalid">
                            {errorData?.imageUrls ? (
                              <>{errorDataValue?.imageUrls}</>
                            ) : null}
                          </Form.Control.Feedback>
                        </Form.Group> */}

                        <Row className="mb-3">
                          <Col>
                            <Form.Group controlId="video">
                              <Form.Label>
                                Video
                                {/* <span className="mand-sign-field">*</span> */}
                              </Form.Label>
                              <IndexsStyled>
                                <div
                                  className={
                                    errorData?.video
                                      ? "delta-select-column delta-select-column-error"
                                      : "delta-select-column"
                                  }
                                >
                                  <Upload
                                    accept="video/*"
                                    multiple={false}
                                    maxCount={1}
                                    onDrop={() => {
                                      setFormData((prev: any) => ({
                                        ...prev,
                                        video: null,
                                      }));
                                    }}
                                    onChange={handleVideoFileChange}
                                  >
                                    <Button style={{ height: "100%" }}>
                                      Upload Video
                                    </Button>
                                    <IndexsStyled>
                                      {errorData?.video && (
                                        <p className="error_message">
                                          {errorDataValue?.video}
                                        </p>
                                      )}
                                    </IndexsStyled>
                                  </Upload>

                                  {formData?.video && (
                                    <div
                                      style={{ marginTop: "10px" }}
                                      className="image-preview"
                                    >
                                      <div
                                        style={{ marginTop: "10px" }}
                                        className="image-preview"
                                      >
                                        <video
                                          width={200}
                                          src={formData?.video ?? ""}
                                          controls
                                        />
                                        <MdDelete
                                          size={20}
                                          style={{ marginLeft: "10px" }}
                                          onClick={() => {
                                            setFormData((prev: any) => ({
                                              ...prev,
                                              video: null,
                                            }));
                                          }}
                                        />
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </IndexsStyled>
                            </Form.Group>
                          </Col>
                        </Row>

                        <IndexsStyled>
                          {errorMessage ? (
                            <p className="error_message">{errorMessage}</p>
                          ) : <></>}
                        </IndexsStyled>
                      </Form>
                    ),
                  },
                  {
                    label: props?.isEdit ? "Assign Vendors" : "",
                    key: "2",
                    children: (
                      <>
                        {props?.isEdit ? <>
                          <AssignVendor
                            sectionName="TEST"
                            // onSubmit={handleSubmitAssignVendorDetails}
                            onClose={props?.onHide}
                            onSuccess={props?.onHide}
                            isBulkUpdate={isBulkUpdate}
                            setIsBulkUpdate={setIsBulkUpdate}
                            id={props?.selectedTest?.id}
                            assignedVendors={assignedVendors}
                            setAssignedVendors={setAssignedVendors}
                          />
                        </>
                          : <></>}
                      </>
                    ),
                  },
                  // {
                  //   label: "Sub Categories",
                  //   key: "3",
                  //   children: <SubCategoriesSection section_name="labtest" />,
                  // },
                ]}
              />
            </div>
          </IndexsStyled>
        </Modal.Body>
        {isBulkUpdate ? <></> : <Modal.Footer>
          <Button variant="secondary" onClick={props?.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>}
      </Modal>
    </IndexsStyled>
  );
};

export default AddNewTestsModel;
