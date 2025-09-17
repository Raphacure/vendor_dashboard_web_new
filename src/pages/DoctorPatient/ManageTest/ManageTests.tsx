import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { IndexsStyled } from "./Index.styled";
import { Form, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/components/loader/loader/Loader";
import add_icon from "@/assets/images/add.png";
import {
  getAllTests,
  updateTestsStatusCall,
  getAllCategoriesAPI,
} from "@/redux/slices/labtest/labtestService";
import CategoriesSection from "@/components/CategoriesSection/CategoriesSection";
import { Tabs } from "antd";

import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import AddNewTestsModel from "./AddTestModel";
import { Select, Table } from "antd";
import Switch from "react-switch";
import useDownloadTestExcell from "@/hooks/useDownloadTestExcell";
import HistoryModule from "@/components/Common/HistoryModule";

type propDto = {
  testType: "diagnostic" | "ctmri";
  sectionName: "labtest" | "ctmri";
};

const ManageTests = ({ testType, sectionName }: propDto) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showSuccessMessageText, setShowSuccessMessageText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState([]);
  // const [subCategoryFilter, setSubCategoryFilter] = useState([]);
  // const [selectedAction, setSelectedAction] = useState("");
  // const [conformClosingModel, setConformClosingModel] = useState(false);
  // const [conformClosingModelText, setConformClosingModelText] = useState("");
  const [manufactureFilter, setManfactureFilter] = useState([]);

  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState<number>(1);

  const [showTestsModel, setShowTestsModel] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null as any);
  const [selectedTestHistory, setSelectedTestHistory] = useState(null as any);

  const { loading } = useSelector((state: any) => state?.auth);
  const { testsList, testsTotalRecord, categoriesList } = useSelector(
    (state: any) => state?.labtest
  );

  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [searchTextTemp, setSearchTextTemp] = useState("");
  const [status, setSatus] = useState("all");
  const dispatch = useDispatch() as any;

  // useEffect(() => {
  //   dispatch(getAllManufacturerAPI());
  //   dispatch(
  //     getAllVendorsAPI({
  //       // type: "labtest",
  //       count: 1000,
  //       page: 0,
  //       activeStatus: "approved",
  //     })
  //   );
  // }, [dispatch]);

  const getAllTestsApiCall = useCallback(() => {
    const filters: any = {};

    if (searchText) {
      filters.searchText = searchText;
    }
    if (status && status != "all") {
      filters.active_status = status;
    }

    if (categoryFilter.length > 0) {
      filters.categoryIds = categoryFilter;
    }
    // if (subCategoryFilter.length > 0) {
    //   filters.subcategoryIds = subCategoryFilter;
    // }
    dispatch(
      getAllTests({
        filters: {
          count: pageSize,
          page: pageNo,
          testType: testType,
          active_status: "active",
          ...filters,
        },
      })
    );
  }, [
    // subCategoryFilter,
    categoryFilter,
    searchText,
    pageSize,
    testType,
    pageNo,
    dispatch,
    status,
  ]);

  useEffect(() => {
    getAllTestsApiCall();
  }, [
    // searchText,
    // pageNo,
    // pageSize,
    // categoryFilter,
    // testType,
    // subCategoryFilter,
    getAllTestsApiCall,
  ]);

  useEffect(() => {
    dispatch(getAllCategoriesAPI({ section_name: sectionName, count: 100 }));
  }, [dispatch]);

  const { excellDownloading, handleDownloadTemplate, CSVDownloadLink } = useDownloadTestExcell({
    categoryFilter,
    searchText,
    status,
    testType,
  });

  const handleCancel = () => {
    setSelectedTest(null);
    setShowTestsModel(false);
  };

  const handleFilterChange = (value: any, type: "CATEGORY" | "SUBCATEGORY") => {
    if (type === "CATEGORY") {
      setCategoryFilter(value);
    }
    // else if (type === "SUBCATEGORY") {
    //   setSubCategoryFilter(value);
    // }
  };

  const categoryOptions = useMemo(() => {
    return categoriesList?.map((category: any) => ({
      label: category?.name ?? "",
      value: category?.id,
    }));
  }, [categoriesList]);

  // const subCategoryOptions = useMemo(() => {
  //   return uniqueSubCategoryList?.map((subCatg: any) => ({
  //     label: subCatg?.name ?? "",
  //     value: subCatg?.id,
  //   }));
  // }, [uniqueSubCategoryList]);

  const handleClickCreate = () => {
    setShowTestsModel(true);
  };

  const handlePageChange = (val: any) => {
    setPageSize(val?.pageSize ?? 10);
    setPageNo(val?.current ?? 1);
  };

  const handleChangeValue = (e: any) => {
    let { value } = e.target;
    setSearchTextTemp(value);
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      setPageNo(1);
      setSearchText(value);
      setSearchTextTemp(value);
    }, 1000);
  };

  const handleManufactureChange = (value: any) => {
    setManfactureFilter(value);
  };

  const handleEditTests = (data: any) => {
    const images = data?.image;
    const finalImages = new Array(5)?.fill(null);

    setSelectedTest({
      id: data?.service_code,
      serviceName: data?.service_name,
      fasting: data?.fasting,
      testType: data?.type,
      tubeName: data?.tube_name,
      preparation: data?.preperation,
      description: data?.description,
      searchKeys: data?.search_keys,
      display_order: { value: data?.display_order, label: data?.display_order },
      cost: data?.actual_cost ? data?.actual_cost : data?.raphacure_cost,
      discountPercentage: data?.discount_percentage,
      finalPrice: data?.raphacure_cost,
      reports_within: data?.reports_within,
      image_urls: finalImages?.map((_, i: number) => {
        if (i < data?.image?.length) return data?.image?.[i];
        return null;
      }),
      video: data?.video_url ?? null,
      vendors: data?.vendors?.map((vendor: any) => ({
        label: `${vendor?.name} - ${vendor?.city}`,
        value: vendor?.id,
      })),
      category_ids: data?.category_ids,
      subcategory_ids: data?.subcategory_ids,
      bodyPart: data?.body_part,
      scanType: data?.scan_type,
    });
    setShowTestsModel(true);
  };
  const handleHistory = (data: any) => {
    setSelectedTestHistory(data);
  };

  const handleChangeSwitch = async (data: any, falg: any) => {
    const res: any = await dispatch(
      updateTestsStatusCall({
        id: data?.service_code,
        status: falg ? "active" : "inactive",
      })
    );

    if (res?.payload?.success) {
      getAllTestsApiCall();
    }
  };

  const columns = [
    {
      title: "Code",
      width: 100,
      dataIndex: "service_code",
      key: "0",
    },
    {
      title: "service Name",
      width: 170,
      dataIndex: "service_name",
      key: "1",
    },
    {
      title: "Image",
      width: 170,
      dataIndex: "image",
      key: "1",
      render: (item: any) => {
        const urlss1 = item?.[0]
          ?.replace("{", "")
          ?.replace("}", "")
          ?.replace(/"/g, "");

        console.log(urlss1);

        // const newurl11 = urlss1?.split(",");

        return (
          <>
            {item ? (
              <img className="doctor-img-sec" src={urlss1} />
            ) : (
              <span className="no-image-sec-char">{item?.name?.charAt(0)}</span>
            )}
          </>
        );
      },
    },
    {
      title: "Category",
      width: 170,
      dataIndex: "categories",
      key: "1",
      render: (citem: any) => {
        return (
          <>
            <div>
              {citem?.map((itemdd: any, index1: any) => {
                return (
                  <>
                    <span>
                      {index1 !== 0 && `, `} {itemdd?.name}
                    </span>
                  </>
                );
              })}
            </div>
          </>
        );
      },
    },
    {
      title: "search keys",
      width: 100,
      dataIndex: "search_keys",
      key: "22",
    },
    {
      title: "Amount",
      width: 100,
      dataIndex: "actual_cost",
      key: "22",
    },
    {
      title: "Discount Percentage",
      width: 100,
      dataIndex: "discount_percentage",
      key: "22",
    },
    {
      title: "Created By",
      width: 100,
      dataIndex: "createdBy",
      key: "22",
      render: (item: any) => {
        return (
          <>
            {item?.first_name} {item?.last_name}
          </>
        );
      },
    },
  ] as any;

  // const subCategoryDelete = (item: any) => {
  //   setConformClosingModel(true);
  //   setSelectedItem({ ...item, type: "subcategory", action: "delete" });
  //   setConformClosingModelText(
  //     `Are you sure you want to delele the ${item?.name} Sub Category`
  //   );
  // };
  const TestSectionSection = () => {
    return (
      <div className="content getinTouchPage">
        <div>
          <div className="profileinfoHeader">
            <div className="top-sec-header-sec">
              <span className="edit-p-text text-capitalize">
                Manage {testType == "ctmri" ? "Radiology" : testType} Tests
              </span>

              <div className="d-flex justify-content-between align-items-center">
                {/* <div onClick={handleClickCreate}>
                  <span className="profileEdit">
                    Add New Tests &nbsp; <img src={add_icon} alt="Add btn" />
                  </span>
                </div> */}
                <div className="ml-2" onClick={handleDownloadTemplate}>
                  <span className="profileEdit">
                    {excellDownloading ? "Loading..." : "Download Excel"}
                  </span>
                </div>
                {CSVDownloadLink}
              </div>
            </div>
          </div>
        </div>

        <div className="create-new-institute-sec-content-all">
          <div className="student-fields-sec-content-all deltape-form">
            <div className="student-info-row">
              <Form.Group className="delta-signup-md" controlId="email">
                <Form.Label> Search</Form.Label>
                <Form.Control
                  autoFocus={!showTestsModel}
                  placeholder="Search: Service code, Service Name, Description."
                  // autoFocus
                  // isInvalid={errorData?.studentName}
                  name="studentName"
                  type="text"
                  value={searchTextTemp}
                  onChange={(e) => handleChangeValue(e)}
                />
              </Form.Group>
            </div>
            {/* <Form.Group className="delta-signup-md" controlId="email">
              <Form.Label> Status</Form.Label>
              <Select
                // mode="multiple"
                value={status}
                placeholder="Select Category"
                onChange={(e: any) => setSatus(e)}
                options={[
                  {
                    label: "All",
                    value: "all",
                  },
                  {
                    label: "Active",
                    value: "active",
                  },
                  {
                    label: "In Active",
                    value: "inactive",
                  },
                ]}
                className="delta-select select-filter"
              />
            </Form.Group> */}
          </div>
        </div>

        <div className="selctor-row deltape-form">
          <div className="">
            <Form.Group
              className="delta-signup-md selector-info-row"
              controlId="email"
            >
              <Form.Label> Select Category</Form.Label>
              <Select
                mode="multiple"
                value={categoryFilter}
                allowClear
                filterOption={(input: any, option: any) =>
                  option?.label?.toLowerCase().includes(input.toLowerCase())
                }
                showSearch={true}
                placeholder="Select Category"
                onChange={(e: any) => handleFilterChange(e, "CATEGORY")}
                options={categoryOptions ?? []}
                className="delta-select select-filter"
                // classNamePrefix="delta-select"
              />
            </Form.Group>
          </div>

          {/* <div className="">
            <Form.Group
              className="delta-signup-md selector-info-row"
              controlId="email"
            >
              <Form.Label> Select Manufacturer</Form.Label>
              <Select
                mode="multiple"
                value={manufactureFilter}
                placeholder="Select Manufacturer"
                onChange={handleManufactureChange}
                options={manufactureOptions ?? []}
                className="delta-select select-filter"
                // classNamePrefix="delta-select"
              />
            </Form.Group>
          </div> */}

          {/* <div className="">
            <Form.Group
              className="delta-signup-md selector-info-row"
              controlId="email"
            >
              <Form.Label> Select Sub Category</Form.Label>
              <Select
                mode="multiple"
                value={subCategoryFilter}
                placeholder="Select Sub Category"
                onChange={(e: any) => handleFilterChange(e, "SUBCATEGORY")}
                options={subCategoryOptions ?? []}
                className="delta-select select-filter"
                // classNamePrefix="delta-select"
              />
            </Form.Group>
          </div> */}
        </div>
        <div>
          <div className="total-count-row"></div>
          <div className="institutes-filters"></div>
          <div className="all-institutes-data rapha-table-view">
            <Table
              columns={columns}
              rowKey="id"
              dataSource={testsList ?? []}
              pagination={{
                current: pageNo,
                pageSize,
                total: testsTotalRecord,
                showSizeChanger: true,
                pageSizeOptions: ["10", "20", "50", "100"],
              }}
              onChange={handlePageChange}
              bordered
              scroll={{ x: "max-content" }}
            />

            <div className="rapha-table-pagination">
              <div>
                <span>
                  Showing {pageSize ?? 0} of {testsTotalRecord ?? 0} Users
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <IndexsStyled>
        <div className="freshbag-wrapper">
          {loading && <Loader />}
          <div className="rapha-tabs-sec">
            <Tabs
              defaultActiveKey="1"
              items={[
                {
                  label: `${
                    sectionName === "ctmri"
                      ? "Radiology Test"
                      : "Diagnostic Test"
                  } Section`,
                  key: "1",
                  children: <TestSectionSection />,
                },
                {
                  label: "Categories",
                  key: "2",
                  children: <CategoriesSection section_name={sectionName} />,
                },
                // {
                //   label: "Sub Categories",
                //   key: "3",
                //   children: <SubCategoriesSection section_name="labtest" />,
                // },
              ]}
            />
          </div>

          {testsList?.length === 0 && (
            <div className="no-results">
              <p>No Tests available</p>
            </div>
          )}
          {showTestsModel && (
            <AddNewTestsModel
              sectionName={sectionName}
              selectedTest={selectedTest}
              onSuccess={async () => {
                setShowSuccessMessage(true);
                getAllTestsApiCall();
                setShowSuccessMessageText(
                  `Test is ${
                    selectedTest ? "Updated" : "created"
                  } successfully!.`
                );
                setShowTestsModel(false);
                setSelectedTest(null);
              }}
              isEdit={selectedTest ? true : false}
              onHide={() => {
                setShowTestsModel(false);
                setSelectedTest(null);
              }}
            />
          )}

          <CustomModal
            open={showSuccessMessage}
            title={showSuccessMessageText}
            handleClose={() => {
              setShowSuccessMessage(false);
              handleCancel();
            }}
          >
            <CustomModal.Body>
              <div className="text-center p-4">
                <p>{showSuccessMessageText}</p>
              </div>
            </CustomModal.Body>
            <CustomModal.Footer>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-primary"
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

          {selectedTestHistory && (
            <Modal
              size="xl"
              onHide={() => {
                setSelectedTestHistory(null);
              }}
              show={selectedTestHistory}
            >
              <Modal.Header closeButton>
                <h5 className="text-capitalize">
                  {selectedTestHistory?.service_name} (
                  {selectedTestHistory?.service_code}) History
                </h5>
              </Modal.Header>
              <Modal.Body>
                <HistoryModule
                  section_name="test"
                  vendorId={selectedTestHistory?.service_code}
                />
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
          )}
        </div>
      </IndexsStyled>
    </>
  );
};

export default ManageTests;
