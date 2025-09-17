import { useCallback, useEffect, useState } from "react";
import { PackagesStyled } from "./Packages.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPackages,
  getAllTestsAPI,
} from "@/redux/slices/packages/packagesService";
import { FaRegUserCircle } from "react-icons/fa";
import PackageModal from "./PackageModal";
import Switch from "react-switch";
import DropDownShareOptions from "@/hooks/DropDownShareOptions";
import ShareMessages from "@/components/chat/ShareMessages";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import CommonSearchBox from "@/components/custom/search/CommonSearchBox";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";

const Packages = ({
  section_name = "PACKAGE",
  parentId,
}: {
  section_name?: "PACKAGE" | "CLIENT";
  parentId?: string;
}) => {
  const dispatch = useDispatch() as any;
  const { packages, tests } = useSelector(
    (reduxState: any) => reduxState.package
  );
  const { linkableId } = useClientLinkableId();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPackagesCount, setTotalPackagesCount] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [selectedStatus, setSelectedStatus] = useState<string>("all"); // State for selected test

  const getAllPackagesData = useCallback(
    async (page: number, size: number, search = "", status: any) => {
      const body: any = {
        filters: {
          count: size,
          page: page,
          searchText: search,
          status: "active",
          clientId: linkableId,
        },
      };

      if (section_name === "CLIENT") {
        body.filters.clientId = parentId;
      }

      if (status !== false) {
        body.filters.status = status;
      }
      await dispatch(getAllPackages(body));
    },
    [dispatch, parentId, section_name]
  );

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
    getTests();
  }, [dispatch]);

  console.log(selectedStatus);

  useEffect(() => {
    getAllPackagesData(
      currentPage,
      pageSize,
      searchText,
      selectedStatus === "all" ? false : selectedStatus
    );
  }, [currentPage, pageSize, searchText, selectedStatus, getAllPackagesData]);

  useEffect(() => {
    if (packages?.pagination?.total) {
      setTotalPackagesCount(packages?.pagination?.total);
    }
    console.log("packages : ", packages);
  }, [packages]);

  const handleSearch = (value: string) => {
    setSearchText(value);
    setCurrentPage(1);
  };


  const columns = [
    {
      label: "Image",
      dataIndex: "image",
      key: "image",
      render: (image: any) =>
        image ? (
          <img
            src={image?.length > 0 ? image[0] : image}
            alt="Package"
            style={{ width: 50, height: 50, objectFit: "cover" }}
          />
        ) : (
          <FaRegUserCircle size={27} />
        ),
    },
    {
      label: "Code",
      dataIndex: "service_code",
      key: "service_code",
      render: (service_code: string, record: any) => (
        <div className="serviceCodeWrapper">
          <div>{service_code}</div>
          {/* <div onClick={() => handleEditPackage(record)}>{service_code}</div> */}
          {record.is_corporate && <span className="isCorp">C</span>}
        </div>
      ),
    },
    {
      label: "Package Name",
      dataIndex: "service_name",
      key: "service_name",
    },
    {
      label: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: any) =>
        price?.actual_cost ? `₹${price?.actual_cost || 0}` : "N/A",
    },
    {
      label: "Discount (%)",
      dataIndex: "price",
      key: "discount_percentage",
      render: (price: any) => `${price?.discount_percentage || 0}%`,
    },

    ...(section_name === "CLIENT"
      ? [
          {
            label: "Company Paid",
            key: "companyPaid",
            children: [
              {
                title: "Employee",
                dataIndex: "is_dependent",
                key: "employeePaid",
                render: (active_status: any, record: any) => {
                  return (
                    <Switch
                      onChange={(e) => {
                        console.log("e : ", e);
                        console.log("record : ", record);
                      }}
                      checked={active_status}
                    />
                  );
                },
              },
              {
                label: "Dependents",
                dataIndex: "no_of_dependents",
                key: "dependentsPaid",
                render: (value: any) => <div>{value || "N/A"}</div>,
              },
            ],
          },
          {
            label: "Cash",
            key: "clientSpecificField1",
            render: (_: any, record: any) => {
              const dependents = record?.no_of_dependents || 0;
              const price = record?.price?.actual_cost || 0;
              const cash = dependents * price;
              return <div>{cash ? `₹${cash}` : "N/A"}</div>;
            },
          },
        ]
      : []),

    {
      key: "actions",
      label: "Actions",
      dataIndex: "active",
      render: (item: any, record: any) => {
        return (
          <div className="d-flex justify-content-center align-items-center gap-[10px]">
            <span className="mr-1">
              <DropDownShareOptions sectionName="PACKAGES" data={record} />
            </span>

            <span className="mr-1">
              <ShareMessages
                data={{
                  isKeyValuedData: true,
                  type: "TEXT",
                  data: {
                    Code: record?.service_code,
                    "Package Name": record?.service_name,
                    Corporate: record?.is_corporate ? "✅" : "❌",
                    Type: record?.type,
                    "Visit Type": record?.visit_tpe,
                    "Is Dependent": record?.is_dependent ? "✅" : "❌",
                    "No. Of Dependents": record?.no_of_dependents,
                    Tests: record?.tests
                      ?.map(
                        (test: any) =>
                          `${test?.service_name} (${test?.service_code})`
                      )
                      ?.join(", "),
                    Clients: record?.clients
                      ?.map((client: any) => `${client?.name}`)
                      ?.join(", "),
                  },
                }}
                replacePath={false}
                tooltipTitle="Share"
              />
            </span>
          </div>
        );
      },
    },
  ];

  const tableData =
    packages?.data?.map((pkg: any, index: number) => ({
      key: index,
      ...pkg,
      ...(section_name === "CLIENT" && {
        clientSpecificField1: "Custom Data 1",
        clientSpecificField2: "Custom Data 2",
        employeePaid: pkg.employeePaid || "N/A",
        dependentsPaid: pkg.dependentsPaid || "N/A",
      }),
    })) || [];

  const handlePaginationChange = (page: number, size?: number) => {
    setCurrentPage(page);
    if (size) setPageSize(size);
  };


  return (
    <PackagesStyled>
      {/* <PdfPreview
        data={selectedPackage}
        setShowPreviewModal={setShowPreviewModal}
        showPreviewModal={showPreviewModal}
      /> */}
      <div className="searchWrapper">
        <div className="d-flex gap-2 flex-row align-items-center my-2 filtersWrapper">
          <CommonSearchBox
            onSearch={handleSearch}
            placeHolder="Search by package name or code"
            searchText={searchText}
          />
        </div>
      </div>
      <CustomTable
        data={tableData}
        columns={columns}
        showingName=""
        isLoading={false}
        onPageChange={handlePaginationChange}
        page={currentPage}
        pageSize={pageSize}
        pagination={true}
        total={totalPackagesCount}
      />

      <PackageModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        editModal={isEdit}
        client_id={parentId}
        onSuccess={getAllPackagesData}
        section_name={section_name}
        packageData={selectedPackage} // Pass the selected package data to the modal
      />
    </PackagesStyled>
  );
};

export default Packages;
