import { useEffect, useRef, useState } from "react";
import { Table } from "antd";

import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import add_icon from "../../images/img/add.png";
import {
  getAllCategoriesAPI,
  deleteCategoryAPI,
  deleteSubCategoryAPI,
  getAllSubCategoriesAPI,
  getAllSubCategoriesByCateIDAPI,
} from "../../redux/slices/medicines/medicineService";

import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import AddNewItemModel from "./AddNewItemModel";
const SubCategoriesSection = (props: any) => {
  const { section_name } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [thankyouMessage, setThankyouMessage] = useState("");
  const [emptyName, setEmptyName] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [showAddCategoryModel, setShowAddCategoryModel] = useState(false);
  const [selectedItem, setSelectedItem] = useState({} as any);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [signUpData, setSignUpData] = useState({} as any);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showSuccessMessageText, setShowSuccessMessageText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState({} as any);
  const [selectedStatus, setSelectedStatus] = useState({} as any);
  const [selectedDoctor, setSelectedDoctor] = useState({} as any);
  const [selectedAction, setSelectedAction] = useState("");
  const [modelType, setModelType] = useState("");
  const [conformClosingModel, setConformClosingModel] = useState(false);
  const [conformClosingModelText, setConformClosingModelText] = useState("");

  const [total, setTotal] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState<number>(1);

  const [categoryTotal, setCategoryTotal] = useState(1);
  const [categoryPageSize, setCategoryPageSize] = useState(10);
  const [categoryPageNo, setCategoryPageNo] = useState<number>(1);

  const [subCategoryTotal, setSubCategoryTotal] = useState(1);
  const [subCategoryPageSize, setSubCategoryPageSize] = useState(10);
  const [subCategoryPageNo, setSubCategoryPageNo] = useState<number>(1);

  const [categoryFilter, setCategoryFilter] = useState([]);
  const [subCategoryFilter, setSubCategoryFilter] = useState([]);

  const [cateList, setCateList] = useState([] as any);
  const [subCateList, setSubCateList] = useState([] as any);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showMedicineModel, setShowMedicineModel] = useState(false);
  const [showEditMedicineModel, setShowEditMedicineModel] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number[]>([]);
  const [selectedMedicine, setSelectedMedicine] = useState({} as any);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCate, setSelectedCate] = useState<string[]>([]);

  const dispatch = useDispatch() as any;
  // const { error, loading, user, isAdminSite } = useSelector(
  //   (state: any) => state?.auth
  // );

  const { categoriesList, subCategoriesList, medicinesList, vendorList } =
    useSelector((state: any) => state?.medicines);

  const searchTimeoutRef = useRef(null as any);
  const searchTextRef = useRef(null as any);

  useEffect(() => {
    getAllCategoriesCall();
    getAllSubCategoriesCall();
  }, []);

  useEffect(() => {
    getAllCategoriesCall();
  }, [categoryPageNo, categoryPageSize]);

  useEffect(() => {
    getAllSubCategoriesCall();
  }, [subCategoryPageNo, subCategoryPageSize]);

  useEffect(() => {
    if (categoriesList?.length > 0) {
      let newList = [] as any;
      categoriesList?.map((ittem: any) => {
        newList.push({ label: ittem?.name, value: ittem?.id });
      });
      setCateList(newList);
    }
  }, [categoriesList]);

  useEffect(() => {
    if (subCategoriesList?.length > 0) {
      let newList = [] as any;
      subCategoriesList?.map((ittem: any) => {
        newList.push({ label: ittem?.name, value: ittem?.id });
      });
      setSubCateList(newList);
    }
  }, [subCategoriesList]);

  const handleChangeCategoruy = (selectedOption: number[]) => {
    setErrorMessage("");
    // let selectedCateory = cateList.find(
    //   (cate: any) => cate.value === selectedOption
    // );
    setSelectedCategory(selectedOption);
    getAllSubCategoriesCall(selectedOption);
  };

  const getAllCategoriesCall = async () => {
    setIsLoading(true);
    const result: any = await dispatch(
      getAllCategoriesAPI({
        count: categoryPageSize,
        page: categoryPageNo,
        section_name,
      })
    );
    setCategoryTotal(result?.payload?.pagination?.total);
    setIsLoading(false);
  };

  const handleCategoryPageChange = (val: any, val1: any) => {
    setCategoryPageSize(val1);
    setCategoryPageNo(val);
  };

  const handleSubCategoryPageChange = (val: any, val1: any) => {
    setSubCategoryPageSize(val1);
    setSubCategoryPageNo(val);
  };

  const getAllSubCategoriesCall = async (iddd?: undefined | number[]) => {
    setIsLoading(true);

    if (iddd) {
      await dispatch(getAllSubCategoriesByCateIDAPI(iddd));
    } else {
      const result: any = await dispatch(
        getAllSubCategoriesAPI({
          count: subCategoryPageSize,
          page: subCategoryPageNo,
          section_name,
        })
      );
      setSubCategoryTotal(result?.payload?.pagination?.total);
    }

    setIsLoading(false);
  };
  const handleChange = (value: string[]) => {
    setSelectedCate(value);
  };

  const handlePageChange = (val: any, val1: any) => {
    setPageSize(val1);
    setPageNo(val);
  };
  const onChangeValue = (e: any) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(e.target.value)) {
        setErrorEmail("Please enter valid email address.");
      } else {
        setErrorEmail("");
      }
    }
  };
  const handleCancel = () => {
    setShowAddCategoryModel(false);
  };
  const addUserSuccess = () => {
    setShowAddCategoryModel(false);
    setShowSuccessMessage(true);

    setShowSuccessMessageText(
      `Successfully ${selectedItem?.id ? "Updated" : "Created"} the ${
        modelType ? modelType : "Category"
      }`
    );
  };
  const handleCreatenewMedicine = () => {
    setSelectedMedicine(null);
    setModelType("medicine");
    setShowMedicineModel(true);
  };
  const handleCreatenewApp = () => {
    setSelectedItem("");
    setModelType("category");
    setShowAddCategoryModel(true);
  };
  const handleCreatenewSubCate = () => {
    setModelType("subcategory");
    setSelectedItem("");
    setShowAddCategoryModel(true);
  };

  const handleChangeValue = (e: any) => {
    let { name, value } = e.target;
    searchTextRef.current = value;
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      setPageNo(1);
      setSearchText(value);
    }, 1000);
  };

  const pageonChange = (page: any) => {
    setCurrentPage(page);
  };
  const handleChangeRole = (selectedOption: any) => {
    setPageNo(0);
    setSelectedType(selectedOption);
  };
  const handleChangeRole1 = (selectedOption: any) => {
    setPageNo(0);
    setSelectedStatus(selectedOption);
  };

  const subCategoryEdit = (item: any) => {
    setModelType("subcategory");
    setSelectedItem({ ...item, type: "subcategory" });
    setShowAddCategoryModel(true);
  };
  const subCategoryDelete = (item: any) => {
    setConformClosingModel(true);
    setSelectedItem({ ...item, type: "subcategory", action: "delete" });
    setConformClosingModelText(
      `Are you sure you want to delele the ${item?.name} Sub Category`
    );
  };
  const getCategoryNameByID = (iid: any) => {
    return categoriesList.find((itee: any) => itee?.id === iid)?.name ?? "";
  };
  const handleEditMediEdit = (sItem: any) => {
    setShowEditMedicineModel(true);
    setSelectedMedicine(sItem);
  };

  const subCategoryColumns = [
    {
      title: "Category Name",
      width: 50,
      dataIndex: "category_id",
      key: "30",
      // fixed: "left",
      render: (item: any) => {
        return <>{getCategoryNameByID(item)}</>;
      },
    },
    {
      title: "Sub Category Name",
      width: 50,
      dataIndex: "name",
      key: "30",
    },

    {
      title: "image",

      key: "3",
      dataIndex: "image",
      width: 100,

      render: (item: any) => {
        return (
          <>
            <img className="item-img-sec" src={item} />
          </>
        );
      },
    },
    {
      title: "Description",
      width: 100,
      dataIndex: "description",
      key: "330",
    },
    {
      title: "Action",
      key: "4",
      width: 50,
      fixed: "right",
      render: (item: any) => {
        return (
          <>
            <div className="action-buttons">
              <button
                className="secoundary"
                onClick={() => subCategoryEdit(item)}
              >
                Edit
              </button>
              <button
                className="primary"
                onClick={() => subCategoryDelete(item)}
              >
                Delete
              </button>
            </div>
          </>
        );
      },
    },
  ] as any;

  const handleCategoryFilterChange = (value: any) => {
    setCategoryFilter(value);
  };
  const handleSubCategoryFilterChange = (value: any) => {
    setSubCategoryFilter(value);
  };
  const handleSubmitBtnConform = async () => {
    if (selectedItem?.action === "delete") {
      if (selectedItem?.type === "category") {
        const resp = (await dispatch(
          deleteCategoryAPI(selectedItem.id)
        )) as any;
        if (resp?.payload?.success) {
          getAllCategoriesCall();
          setConformClosingModel(false);
          setShowSuccessMessage(true);
          setShowSuccessMessageText(
            resp?.payload?.message || "Successfully Deleted the Category"
          );
        }
      } else if (selectedItem?.type === "subcategory") {
        const resp = (await dispatch(
          deleteSubCategoryAPI(selectedItem.id)
        )) as any;
        if (resp?.payload?.success) {
          getAllSubCategoriesCall();
          setConformClosingModel(false);
          setShowSuccessMessage(true);
          setShowSuccessMessageText(
            resp?.payload?.message || "Successfully Deleted the Category"
          );
        }
      }
    }
  };

  return (
    <>
      <div className="content getinTouchPage">
        <div>
          <div className="profileinfoHeader">
            <div className="top-sec-header-sec">
              <span className="edit-p-text">Manage Sub Categories</span>
              {/* <div onClick={handleCreatenewSubCate}>
                <span className="profileEdit">
                  Add New Sub Categorie &nbsp; <img src={add_icon} />
                </span>
              </div> */}
            </div>
          </div>
        </div>

        <div>
          <div className="all-rows-sec-sub-caate">
            <div className="delta-select-column">
              <label>Select Category </label>
              <Select
                mode="multiple"
                value={selectedCategory}
                placeholder="Select Category"
                onChange={handleChangeCategoruy}
                options={cateList}
                className="delta-select"
                style={{ minWidth: "250px" }}
                // classNamePrefix="delta-select"
              />

              {showErrorMessage && selectedCategory?.length === 0 && (
                <p className="error_message"> Please select Category </p>
              )}
            </div>
          </div>
          <div className="total-count-row"></div>
          <div className="institutes-filters"></div>
          <div className="all-institutes-data rapha-table-view">
            <Table
              columns={subCategoryColumns}
              // pagination={false}
              dataSource={subCategoriesList}
              scroll={{ x: 1500, y: 500 }}
              pagination={{
                current: subCategoryPageNo,
                pageSize: subCategoryPageSize,
                onChange: handleSubCategoryPageChange,
                total: subCategoryTotal,
                showSizeChanger: true,
                pageSizeOptions: ["10", "20", "50", "100"],
              }}
            />

            <div className="rapha-table-pagination">
              <div>
                <span>
                  Showing {subCategoriesList?.length} of{" "}
                  {subCategoriesList?.length} Sub Categories
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddNewItemModel
        section_name={section_name}
        handleCancel={handleCancel}
        selectedItem={selectedItem}
        addUserSuccess={addUserSuccess}
        modelType={modelType}
        show={showAddCategoryModel}
        getAllUsersCall={() => {}}
        getAllCategoriesCall={getAllCategoriesCall}
        getAllSubCategoriesCall={getAllSubCategoriesCall}
      />
      <CustomModal
        open={conformClosingModel}
        title={conformClosingModelText}
        handleClose={() => {
          setConformClosingModel(false);
        }}
      >
        <CustomModal.Body>
          <div className="flex flex-col items-center p-4">
            <p className="text-center mb-4">{conformClosingModelText}</p>
          </div>
        </CustomModal.Body>
        <CustomModal.Footer>
          <div className="flex justify-end gap-2">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              onClick={() => {
                setConformClosingModel(false);
              }}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={() => {
                setConformClosingModel(false);
                handleSubmitBtnConform();
              }}
            >
              CONFIRM
            </button>
          </div>
        </CustomModal.Footer>
      </CustomModal>

      <CustomModal
        open={showSuccessMessage}
        title="Success"
        handleClose={() => {
          setShowSuccessMessage(false);
          handleCancel();
        }}
      >
        <CustomModal.Body>
          <div className="flex flex-col items-center p-4">
            <p className="text-center mb-4">{showSuccessMessageText}</p>
          </div>
        </CustomModal.Body>
        <CustomModal.Footer>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => {
                setShowSuccessMessage(false);
                handleCancel();
              }}
            >
              Ok
            </button>
          </div>
        </CustomModal.Footer>
      </CustomModal>
    </>
  );
};

export default SubCategoriesSection;
