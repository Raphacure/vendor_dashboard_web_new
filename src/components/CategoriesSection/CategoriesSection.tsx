import { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import AddNewItemModel from "./AddNewItemModel";
import {
  getAllCategoriesAPI,
  deleteCategoryAPI,
  deleteSubCategoryAPI,
  getAllSubCategoriesAPI,
  getAllSubCategoriesByCateIDAPI,
} from "../../redux/slices/medicines/medicineService";
import { IndexsStyled } from "./Index.styled";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";

const CategoriesSection = (props: any) => {
  const { section_name } = props;
  const displayName = "Categories";
  const [showAddCategoryModel, setShowAddCategoryModel] = useState(false);
  const [selectedItem, setSelectedItem] = useState({} as any);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showSuccessMessageText, setShowSuccessMessageText] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState({} as any);
  const [selectedAction, setSelectedAction] = useState("");
  const [modelType, setModelType] = useState("");
  const [conformClosingModel, setConformClosingModel] = useState(false);
  const [conformClosingModelText, setConformClosingModelText] = useState("");
  const [categoryTotal, setCategoryTotal] = useState(1);
  const [categoryPageSize, setCategoryPageSize] = useState(1000);
  const [categoryPageNo, setCategoryPageNo] = useState<number>(1);
  const [subCategoryTotal, setSubCategoryTotal] = useState(1);
  const [subCategoryPageSize, setSubCategoryPageSize] = useState(10);
  const [subCategoryPageNo, setSubCategoryPageNo] = useState<number>(1);
  const [cateList, setCateList] = useState([] as any);
  const dispatch = useDispatch() as any;
  const { categoriesList } = useSelector((state: any) => state?.medicines);

  useEffect(() => {
    getAllCategoriesCall();
  }, []);

  useEffect(() => {
    getAllCategoriesCall();
  }, [categoryPageNo, categoryPageSize]);

  useEffect(() => {
    if (categoriesList?.length > 0) {
      let newList = [] as any;
      categoriesList?.map((ittem: any) => {
        newList.push({ label: ittem?.name, value: ittem?.id });
      });
      setCateList(newList);
    }
  }, [categoriesList]);

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
  const getAllUsersCall = async () => {};
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
  const categoryColumns = [
    {
      title: `Id`,
      width: 50,
      dataIndex: "id",
      key: "32",
      // fixed: "left",
    },
    {
      title: `${displayName} Name`,
      width: 50,
      dataIndex: "name",
      key: "30",
      // fixed: "left",
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
      // fixed: "right",
      render: (item: any) => {
        return (
          <>
            <div className="action-buttons">
              {/* <button className="secoundary" onClick={() => categoryEdit(item)}>
                Edit
              </button> */}
            </div>
          </>
        );
      },
    },
  ] as any;
  //   <button className="primary" onClick={() => categoryDelete(item)}>
  //   Delete
  // </button>
  return (
    <>
      <IndexsStyled>
        <div className="content getinTouchPage">
          <div>
            <div className="profileinfoHeader">
              <div className="top-sec-header-sec">
                <span className="edit-p-text">Manage {displayName} </span>
                {/* {user?.roles?.find((u: any) => u?.subRole == "superAdmin") && (
                  <div onClick={handleCreatenewApp}>
                    <span className="profileEdit">
                      Add New {displayName} &nbsp; <img src={add_icon} />
                    </span>
                  </div>
                )} */}
              </div>
            </div>
          </div>

          <div>
            <div className="total-count-row"></div>
            <div className="institutes-filters"></div>
            <div className="all-institutes-data rapha-table-view">
              <Table
                columns={categoryColumns}
                pagination={{
                  current: categoryPageNo,
                  pageSize: categoryPageSize,
                  onChange: handleCategoryPageChange,
                  total: categoryTotal,
                  showSizeChanger: true,
                  pageSizeOptions: ["10", "20", "50", "100"],
                }}
                dataSource={categoriesList}
                scroll={{ x: 1500, y: 500 }}
              />

              <div className="rapha-table-pagination">
                <div>
                  <span>
                    Showing {categoriesList?.length} of {categoriesList?.length}{" "}
                    {displayName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IndexsStyled>
      <AddNewItemModel
        section_name={section_name}
        handleCancel={handleCancel}
        selectedItem={selectedItem}
        addUserSuccess={addUserSuccess}
        modelType={modelType}
        show={showAddCategoryModel}
        getAllUsersCall={getAllUsersCall}
        getAllCategoriesCall={getAllCategoriesCall}
        getAllSubCategoriesCall={getAllSubCategoriesCall}
      />
      <CustomModal
        open={conformClosingModel}
        title={conformClosingModelText}
        handleClose={() => {
          setConformClosingModel(false);
        }}
        modalData={selectedDoctor}
      >
        <CustomModal.Body>
          <div className="p-4">
            <p>Are you sure you want to delete this item?</p>
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
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
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
        title={showSuccessMessageText}
        handleClose={() => {
          setShowSuccessMessage(false);
          handleCancel();
        }}
      >
        <CustomModal.Body>
          <div className="p-4">
            <p>{showSuccessMessageText}</p>
          </div>
        </CustomModal.Body>
        <CustomModal.Footer>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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

export default CategoriesSection;
