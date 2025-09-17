import { useEffect, useState } from "react";
import { IndexsStyled } from "../Index.styled";
import { Form } from "react-bootstrap";
import { Select } from "antd";
import {
  addSubCategoryAPI,
  updateSubCategoryAPI,
} from "../../../redux/slices/medicines/medicineService";

import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../loader/loader/Loader";

// import ProductCard from "./../../components/ProductCard";
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
  name: "Please Enter Sub Category Name",
  description: "Please Enter Description",
  image: "Please Enter image URL",
};

const AddNewSubCategory = (props: any) => {
  const { section_name } = props;
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [categoryObj, setCategoryObj] = useState({} as any);
  const [signUpData, setSignUpData] = useState(initValStore as any);
  const [errorData, setErrorData] = useState(initValError as any);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cateList, setCateList] = useState([] as any);

  // const query = useQuery();
  // const selectedTab = query.get("selectedTab");
  const isEdit = props?.selectedItem?.id ? true : false;
  const userId = null;
  const navigate = useNavigate();
  const dispatch = useDispatch() as any;
  const { categoriesList } = useSelector((state: any) => state?.medicines);

  useEffect(() => {
    if (props?.selectedItem?.id) {
      const cdetails = props?.selectedItem;
      const prevDetail = {
        description: cdetails?.description,
        image: cdetails?.image,
        name: cdetails?.name,
        category_id: cdetails?.category_id,
      };
      const ccName = categoriesList.find(
        (itee: any) => itee?.id === cdetails?.category_id
      ).name;
      setSignUpData({ ...prevDetail });
      setCategoryObj({ label: ccName, value: cdetails?.category_id });
    }
  }, [props?.selectedItem]);
  useEffect(() => {
    if (categoriesList?.length > 0) {
      let newList = categoriesList.map((ittem: any) => ({ label: ittem?.name, value: ittem?.id }));
      setCateList(newList);
    }
  }, [categoriesList]);

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
    setShowErrorMessage(true);
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

    if (!signUpData?.category_id) {
      isValid = false;
    }
    if (isValid) {
      const jBody = {
        ...signUpData,
        status: "active",
      };

      setIsLoading(true);
      if (props?.selectedItem?.id) {
        const body = { ...jBody };
        const resp = (await dispatch(
          updateSubCategoryAPI({
            id: props?.selectedItem?.id,
            payload: { subcategory: body },
          })
        )) as any;
        console.log("resp", resp);
        setIsLoading(false);
        if (resp?.payload?.success) {
          props?.addUserSuccess();
          props?.getAllSubCategoriesCall();
        } else if (resp?.error?.message) {
          setErrorMessage(resp?.error?.message);
        }
      } else {
        const body = { ...jBody };
        const resp = (await dispatch(
          addSubCategoryAPI({ subcategory: body })
        )) as any;
        setIsLoading(false);
        console.log("resp", resp);
        if (resp?.payload?.success) {
          props?.getAllSubCategoriesCall();
          props?.addUserSuccess();
        } else if (resp?.error?.message) {
          setErrorMessage(resp?.error?.message);
        }
      }
    } else {
      setShowErrorMessage(true);
    }
  };
  const handleCancel = () => {
    props?.handleCancel();
  };

  const handleChangeCategoruy = (value: any, option: any) => {
    setErrorMessage("");
    const addr = { ...signUpData };
    setSignUpData({
      ...addr,
      ["category_id"]: value,
    });
    setCategoryObj(option);
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
                    ? "Edit Sub Category"
                    : "Add New  Sub Category"}{" "}
                </h3>
              </div>
              <div>
                {/* <h5>Institute Name: Institute Name</h5> */}

                <br />
                <div className="student-fields-sec-content deltape-form">
                  <div
                    className={
                      showErrorMessage && !signUpData?.category_id
                        ? "delta-select-column delta-select-column-error"
                        : "delta-select-column"
                    }
                  >
                    <label>Select Category </label>
                    <Select
                      value={categoryObj?.value || undefined}
                      placeholder="Select Category"
                      onChange={handleChangeCategoruy}
                      options={cateList}
                      className="delta-select"
                      optionLabelProp="label"
                      style={{ width: '100%' }}
                      showSearch
                      filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                      }
                    />
                    {showErrorMessage && !signUpData?.category_id && (
                      <p className="error_message"> Please select Category </p>
                    )}
                  </div>
                  <div className="student-info-row">
                    <Form.Group className="delta-signup-md" controlId="email">
                      <Form.Label>
                        {" "}
                        Sub Category Name{" "}
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
                        Description <span className="mand-sign-field">*</span>
                      </Form.Label>
                      <Form.Control
                        // autoFocus
                        isInvalid={errorData?.description}
                        name="description"
                        type="text"
                        maxLength={10}
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
                      <Form.Control
                        // autoFocus
                        isInvalid={errorData?.image}
                        name="image"
                        type="text"
                        value={signUpData?.image}
                        onChange={(e) => handleChangeValue(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData?.image ? <>{errorDataValue?.image}</> : null}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
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
              {userId || isEdit ? "Update Sub Category" : "Create Sub Category"}
            </button>
          </div>
        </div>
      </IndexsStyled>
    </>
  );
};

export default AddNewSubCategory;
