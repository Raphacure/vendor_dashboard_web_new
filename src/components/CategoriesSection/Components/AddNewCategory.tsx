import React, { useEffect, useState } from "react";
import { IndexsStyled } from "./../Index.styled";
import { Form } from "react-bootstrap";
import {
  addCategoryAPI,
  updateCategoryAPI,
  getAllCategoriesAPI,
} from "../../../redux/slices/medicines/medicineService";

import { Select } from "antd";

import { useNavigate, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../loader/loader/Loader";

// import ProductCard from "./../../components/ProductCard";
import moment from "moment";
import { Button, Upload } from "antd";
import useUploadToS3 from "@/hooks/useUploadToS3";
const initValStore = {
  name: undefined,
  description: undefined,
  image: undefined,
};
const initValError = {
  name: false,
  // description: false,
  image: false,
};
const errorDataValue = {
  name: "Please Enter Category Name",
  description: "Please Enter Description",
  image: "Please Enter Image URL",
};
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const AddNewCategory = (props: any) => {
  const { section_name } = props;
  const displayName =
    section_name === "doctor" ? "Specializations" : "Categories";
  const showDisplayOrder = section_name == "doctor"

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [signUpData, setSignUpData] = useState(initValStore as any);
  const [errorData, setErrorData] = useState(initValError as any);
  const [displayOrder, setDisplayOrder] = useState<any>(props?.selectedItem?.display_order);
  const { uploadToS3 } = useUploadToS3()


  // const query = useQuery();
  // const selectedTab = query.get("selectedTab");
  const isEdit = props?.selectedItem?.id ? true : false;
  const userId = null;
  const navigate = useNavigate();
  const dispatch = useDispatch() as any;
  const { error, loading, user } = useSelector((state: any) => state?.auth);

  useEffect(() => {
    if (props?.selectedItem?.id) {
      const cdetails = props?.selectedItem;
      const prevDetail = {
        description: cdetails?.description,
        image: cdetails?.image,
        name: cdetails?.name,
        section_name: section_name,
      };
      setSignUpData({ ...prevDetail });
    }
  }, [props?.selectedItem]);
  console.log("props?.selectedItem", props?.selectedItem);

  const handleChangeValue = (e: any) => {
    setErrorMessage("");
    let { name, value } = e.target;
    var value1 = value;
    if (value.trim() == "") {
      value1 = value.trim();
    }
    const addr = { ...signUpData };
    const addr_error = { ...errorData };

    setSignUpData({
      ...addr,
      [name]: value1,
    });
    setErrorData({
      ...addr_error,
      [name]: false,
    });
  };
  const handleSaveClick = async () => {
    setErrorMessage("");
    var isValid = true;
    var errornew = { ...initValError } as any;
    for (var key in errornew) {
      if (signUpData[key] === "" || !signUpData[key]) {
        errornew[key] = true;
        isValid = false;
      }
    }
    setErrorData({ ...errornew });

    if (isValid) {
      const jBody = {
        ...signUpData,
        section_name: section_name,
        status: "active",
        display_order: displayOrder?.value
      };
      setIsLoading(true);
      if (props?.selectedItem?.id) {
        const body = { ...jBody };
        const resp = (await dispatch(
          updateCategoryAPI({
            id: props?.selectedItem?.id,
            payload: { category: body },
          })
        )) as any;
        setIsLoading(false);
        if (resp?.payload?.category?.id) {
          props?.addUserSuccess();
          props?.getAllCategoriesCall();
        } else if (resp?.payload?.error) {
          setErrorMessage(resp?.payload?.error);
        }
      } else {
        const body = { ...jBody };
        const resp = (await dispatch(
          addCategoryAPI({ category: body })
        )) as any;
        setIsLoading(false);
        if (resp?.payload?.category?.id) {
          props?.getAllCategoriesCall();
          props?.addUserSuccess();
        } else if (resp?.payload?.error) {
          setErrorMessage(resp?.payload?.error);
        }
      }
    }
  };
  const handleCancel = () => {
    props?.handleCancel();
  };
  const handleChangeDisplayOrder = (value: any) => {
    setDisplayOrder(value);
  };

  const isEditText = isEdit ? "edit" : "";
  return (
    <>
      <IndexsStyled>
        <div
          className={`create-new-institute-sec create-new-institute-sec-${isEditText}`}
        >
          {isLoading && <Loader />}
          <div className="create-new-institute-sec-content">
            <div className="student-info-values">
              <div className="create-new-institute-header">
                <h3>
                  {props?.selectedItem
                    ? `Edit ${displayName}`
                    : `Add New ${displayName}`}{" "}
                </h3>
              </div>
              <div>
                {/* <h5>Institute Name: Institute Name</h5> */}

                <br />
                <div className="student-fields-sec-content deltape-form">
                  <div className="student-info-row">
                    <Form.Group className="delta-signup-md" controlId="email">
                      <Form.Label>
                        {" "}
                        {displayName} Name{" "}
                        <span className="mand-sign-field">*</span>
                      </Form.Label>
                      <Form.Control
                        // autoFocus
                        isInvalid={errorData?.name}
                        name="name"
                        type="text"
                        value={signUpData?.name}
                        onChange={(e) => handleChangeValue(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData?.name ? <>{errorDataValue?.name}</> : null}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="student-info-row">
                    <Form.Group className="delta-signup-md" controlId="email">
                      <Form.Label>
                        Description 
                        {/* <span className="mand-sign-field">*</span> */}
                      </Form.Label>
                      <textarea 
                        // isInvalid={errorData?.description}
                        className="textArea"
                        name="description"
                        // type="text"
                        maxLength={1000}
                        value={signUpData?.description}
                        onChange={(e) => handleChangeValue(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData?.description ? (
                          <>{errorDataValue?.description}</>
                        ) : null}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="student-info-row">
                    <Form.Group className="delta-signup-md" controlId="email">
                      <Form.Label>
                        Image URL <span className="mand-sign-field">*</span>
                      </Form.Label>

                      <div className="w-100">
                        <Upload
                          className=""
                          accept="image/*"
                          showUploadList={false}
                          onChange={async (e: any) => {
                            const file = e.file.originFileObj;
                            const url = await uploadToS3(file, user?.id);
                            handleChangeValue({ target: { name: "image", value: url } })
                          }}
                        >
                          <Button style={{ height: "100%" }}>Upload Image</Button>

                          {/* <IndexsStyled> */}
                          {errorData?.logo && (
                            <p className="error_message">{errorDataValue?.image}</p>
                          )}
                          {/* </IndexsStyled> */}
                        </Upload>
                        {
                          signUpData?.image ? <div className="w-100 image-preview">
                            <img src={signUpData?.image ?? ""} alt="" />
                          </div> : <></>
                        }
                        {/* <Form.Control
                        // autoFocus
                        isInvalid={errorData?.image}
                        name="image"
                        type="text"
                        value={signUpData?.image}
                        onChange={(e) => handleChangeValue(e)}
                      /> */}
                        {errorData?.image ? <p className="text-danger">{errorDataValue?.image}</p> : null}
                      </div>
                    </Form.Group>
                  </div>
                  {showDisplayOrder && <div className="student-info-row">
                    <Form.Group className="delta-signup-md" controlId="email">
                      <Form.Label>
                        Display Order
                      </Form.Label>
                      <Select
                        value={displayOrder}
                        placeholder="Select Display Order"
                        onChange={handleChangeDisplayOrder}
                        className="delta-select"
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
                      />
                    </Form.Group>
                  </div>}
                </div>
              </div>
            </div>
          </div>
          {errorMessage && <p className="error_message"> {errorMessage} </p>}
          <div className="action-buttons align-center">
            <button className="deltape-cancel-button" onClick={handleCancel}>
              Cancel
            </button>
            <button className="deltape-button" onClick={handleSaveClick}>
              {userId || isEdit
                ? `Update ${displayName}`
                : `Create ${displayName}`}
            </button>
          </div>
        </div>
      </IndexsStyled>
    </>
  );
};

export default AddNewCategory;
