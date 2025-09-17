import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { IndexsStyled } from "./Index.styled";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Pagination, Tabs } from "antd";
import { IoIosSearch } from "react-icons/io";
import { Input } from "antd";
import RFQCardModule from "./RFQCardModule";
import { getRFQTestsListAPI } from "../../redux/slices/rfq/rfqService";

import { Select, Table } from "antd";
import { getAllClients } from "./../../redux/slices/Clients/ClientsService";
import AutocompleteField from "../../components/Address/AddressAutoComplete/AddressAutoComplete";
import RFQDocCardModule from "./RFQDocCardModule";
import { getAllSpecializationCategoryAPI } from "../../redux/slices/medicines/medicineService";
import { getConfigInfoAPI } from "@/redux/slices/config/configService";
import { getAllTests } from "@/redux/slices/labtest/labtestService";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import ReportSummaryPreview from "@/components/AiReports/ReportSummaryPreview";
import toast from "react-hot-toast";
import { Trash } from "lucide-react";

const CreateService = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const locattion: any = useLocation();
  const navigate = locattion?.state;
  const [selectedTest, setSelectedTest] = useState<any>(
    navigate?.formData?.selectedTest || ""
  );

  const [searchParams] = useSearchParams();
  const clientId = searchParams.get("clientId");

  const [selectedClint, setSelectedClint] = useState<any>({value:clientId ?? null});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCTMRI, setSearchCTMRI] = useState("");
  const [searchLabTest, setSearchLabTest] = useState("");
  const [searchDoctor, setSearchDoctor] = useState("");
  const [isServiceDivVisible, setIsServiceDivVisible] = useState(true);
  const [selectedCities, setSelectedCities] = useState<any[]>(
    navigate?.formData?.selectedCities || ([] as any)
  );
  const [employeeData, setEmployeeData] = useState<any>({});
  const [formData, setFormData] = useState<any>(navigate?.formData || null);
  const [pathologyList, setPathologyList] = useState(
    navigate?.pathologyList || ([] as any)
  );
  const [radiologyList, setRadiologyList] = useState<any>(
    navigate?.radiologyList || ([] as any)
  );
  const [doctorList, setDoctorList] = useState<any>(
    navigate?.doctorList || ([] as any)
  );
  const [aiData, setAiData] = useState<{
    services: string[];
    locations: {
      state: string;
      city: string;
    }[];
  }>({
    services: [],
    locations: [],
  });
  const [isAiSuggest, setIsAiSuggest] = useState(false);
  const [errorFields, setErrorFields] = useState({
    clients: "",
    tests: "",
  });
  const [allCTMRIData, setAllCTMRIData] = useState<any>([]);
  const [allLabTestData, setAllLabTestData] = useState<any>([]);
  const [allDoctorData, setAllDoctorData] = useState<any>([]);
  const [totalTest, setTotalTests] = useState(0);
  const [totalDoctor, setTotalDoctor] = useState(0);
  const [activeTab, setActiveTab] = useState("1");
  const { configInfo } = useSelector((ReduxState: any) => ReduxState.config);
  const selectedTests = [
    ...(navigate?.pathologyList || []).map((ele: any) => ele?.service_code),
    ...(navigate?.radiologyList || []).map((ele: any) => ele?.service_code),
    ...(navigate?.doctorList || []).map((ele: any) => ele?.id),
  ];
  const [selectedCards, setSelectedCards] = useState<number[]>(selectedTests);

  const filteredCities = useMemo(() => {
    if (!configInfo?.cities) return [];

    if (searchTerm) {
      return configInfo?.cities?.filter((city: any) =>
        city?.name?.toLowerCase()
          ? city?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
          : false
      );
    }
    return configInfo?.cities;
  }, [configInfo?.cities, searchTerm]);
  const { allClients } = useSelector((state: any) => state?.clients);
  const { allRFQTestsList } = useSelector((state: any) => state?.rfq);
  const [page, setPage] = useState<any>(1);
  const [pageSize, setPageSize] = useState<any>(5);

  const getAllClientsApi = useCallback(() => {
    const body: any = {
      page: 0,
      count: 1000,
    };

    dispatch(getAllClients(body));
  }, [pageSize]);

  useEffect(() => {
    getAllClientsApi();
  }, [getAllClientsApi]);

  useEffect(() => {
    dispatch(getRFQTestsListAPI());
    dispatch(getConfigInfoAPI());
  }, []);

  const getAllCTMRIData = useCallback(async () => {
    const filters: any = {};
    if (searchCTMRI) {
      filters.searchText = searchCTMRI;
    }
    const res: any = await dispatch(
      getAllTests({
        filters: {
          count: pageSize,
          page: page,
          testType: "ctmri",
          ...filters,
        },
      })
    );
    if (res?.payload?.success) {
      const data = res?.payload?.data;
      setTotalTests(res?.payload?.total);
      setAllCTMRIData(data);
    }
  }, [dispatch, searchCTMRI, page, pageSize]);

  const getAllLabTestData = useCallback(async () => {
    const filters: any = {};
    if (searchLabTest) {
      filters.searchText = searchLabTest;
    }
    const res: any = await dispatch(
      getAllTests({
        filters: {
          count: pageSize,
          page: page,
          testType: "diagnostic",
          ...filters,
        },
      })
    );

    if (res?.payload?.success) {
      const data = res?.payload?.data;
      setTotalTests(res?.payload?.total);
      setAllLabTestData(data);
    }
  }, [dispatch, searchLabTest, page, pageSize]);

  const getAllDoctorData = useCallback(async () => {
    const filters: any = {};
    if (searchDoctor) {
      filters.searchText = searchDoctor;
    }
    const res: any = await dispatch(
      getAllSpecializationCategoryAPI({
        page: page,
        count: pageSize,
        section_name: "doctor",
      })
    );
    if (res?.payload?.success) {
      const data = res?.payload?.data?.category_ids;

      setTotalTests(res?.payload?.data?.total);
      setAllDoctorData(data);
    }
  }, [dispatch, searchDoctor, page, pageSize]);

  const getTest = useCallback(() => {
    if (activeTab?.toString() === "1") {
      getAllLabTestData();
    } else if (activeTab?.toString() === "2") {
      getAllCTMRIData();
    } else if (activeTab?.toString() === "3") {
      getAllDoctorData();
    }
  }, [activeTab, getAllCTMRIData, getAllLabTestData, getAllDoctorData]);

  useEffect(() => {
    getTest();
  }, [getTest]);

  const handleToOnchange = (e: any) => {
    const { value } = e.target;
    if (activeTab === "1") {
      setSearchLabTest(value);
    } else if (activeTab === "2") {
      setSearchCTMRI(value);
    } else if (activeTab === "3") {
      setSearchDoctor(value);
    }
    setPage(1);
  };
  const handleFilterChange = (value: any, label: any) => {
    setSelectedClint(label?.[0]);
  };
  const handleSelectCity = (city: any) => {
    setSelectedCities((prevSelectedCities) => {
      if (prevSelectedCities.some((selected) => selected.id === city.id)) {
        return prevSelectedCities.filter((selected) => selected.id !== city.id);
      } else {
        return [...prevSelectedCities, city];
      }
    });
  };
  const handleEmployeeInputChange = (
    cityId: any,
    field: string,
    value: string
  ) => {
    setEmployeeData((prevData: any) => ({
      ...prevData,
      [cityId]: {
        ...prevData[cityId],
        [field]: value,
      },
    }));
  };
  const handleDeleteCity = (cityId: any) => {
    setSelectedCities(selectedCities.filter((city) => city.id !== cityId));
    setEmployeeData((prevData: any) => {
      const updatedData = { ...prevData };
      delete updatedData[cityId];
      return updatedData;
    });
  };
  const handleContinueClick = () => {
    if (!selectedTest || !selectedClint) {
      if (!selectedTest) {
        toast.error("Please select a Test");
      }
      if (!selectedClint) {
        toast.error("Please select a client");
      }
      setErrorFields({
        tests: !selectedTest ? "Test is Required" : "",
        clients: !selectedClint ? "Client is Required" : "",
      });
      return;
    }
    const data = {
      selectedTest,
      selectedClint,
      selectedCities: (selectedCities || []).map((city) => ({
        ...city,
        employeeData: employeeData?.[city.id] || {},
      })),
    };
    setFormData(data);
    setIsServiceDivVisible(false);
  };
  const onSelectedPathologyCardsChange = (item: any) => {
    const prevcaids = [...(navigate?.pathologyList || []), ...pathologyList];
    if (prevcaids?.find((d) => d?.service_code == item?.service_code)) {
      const findINdex = prevcaids.findIndex(
        (itemId: any) => itemId?.service_code === item?.service_code
      );
      prevcaids.splice(findINdex, 1);
    } else {
      prevcaids.push(item);
    }
    setPathologyList(prevcaids);
  };
  const onSelectedRadiologyCardsChange = (item: any) => {
    const prevcaids = [...radiologyList];
    if (prevcaids?.find((d) => d?.service_code == item?.service_code)) {
      const findINdex = prevcaids.findIndex(
        (itemId: any) => itemId?.service_code === item?.service_code
      );
      prevcaids.splice(findINdex, 1);
    } else {
      prevcaids.push(item);
    }
    setRadiologyList(prevcaids);
  };
  const onSelectedDoctorCardsChange = (item: any) => {
    const prevcaids = [...doctorList];
    if (prevcaids?.find((d) => d?.id == item?.id)) {
      const findINdex = prevcaids.findIndex(
        (itemId: any) => itemId?.id === item?.id
      );
      prevcaids.splice(findINdex, 1);
    } else {
      prevcaids.push(item);
    }
    setDoctorList(prevcaids);
  };

  const handleToRequestConform = () => {
    history("/rfq/rfqcreated", {
      state: {
        pathologyList,
        radiologyList,
        doctorList,
        formData,
      },
    });
  };

  const handleRemoveFromSelected = (item: any, type: string) => {
    setSelectedCards((prev: any) => {
      const idToRemove = type === "doctor" ? item.id : item.service_code;
      if (prev?.includes(idToRemove)) {
        return prev?.filter((card: any) => card !== idToRemove);
      }
      return [...prev, idToRemove];
    });

    if (type === "pathology") {
      onSelectedPathologyCardsChange(item);
    } else if (type === "radiology") {
      onSelectedRadiologyCardsChange(item);
    } else if (type === "doctor") {
      onSelectedDoctorCardsChange(item);
    }
  };

  const handleToBack = () => {
    setIsServiceDivVisible(true);
  };
  const handlePlaceSelected = (place: any) => {
    const city = place?.address_components?.find((component: any) =>
      component.types.includes("locality")
    )?.long_name;

    const state = place?.address_components?.find((component: any) =>
      component.types.includes("administrative_area_level_1")
    )?.long_name;

    if (city && state) {
      const formattedCity = {
        id: city.toLowerCase().replace(/\s/g, ""),
        name: city,
        image: `https://raphacure-public-images.s3.ap-south-1.amazonaws.com/${city
          .toLowerCase()
          .replace(/\s/g, "")}.png`,
        state_name: state,
      };

      setSelectedCities((prev) => [...prev, formattedCity]);
    }
  };

  const onSummaryComplete = (aiData: {
    services: string[];
    locations: {
      state: string;
      city: string;
      employees: { children: number; female: number; male: number };
    }[];
  }) => {
    if (Array.isArray(aiData?.locations)) {
      const locationData = aiData.locations?.map((location) => {
        return {
          id: location?.city.toLowerCase().replace(/\s/g, ""),
          name: location?.city,
          image: `https://raphacure-public-images.s3.ap-south-1.amazonaws.com/${location?.city
            .toLowerCase()
            .replace(/\s/g, "")}.png`,
          state_name: location?.state,
        };
      });
      
      // Set the selected cities
      setSelectedCities((prev) => [...prev, ...locationData]);
      
      // Set employee data for each location
      const newEmployeeData: any = {};
      aiData.locations.forEach((location) => {
        const cityId = location?.city.toLowerCase().replace(/\s/g, "");
        newEmployeeData[cityId] = {
          womenEmployees: location?.employees?.female?.toString() || "",
          menEmployees: location?.employees?.male?.toString() || "",
          children: location?.employees?.children?.toString() || "",
        };
      });
      
      // Update employee data state
      setEmployeeData((prevData: any) => ({
        ...prevData,
        ...newEmployeeData,
      }));
    }
    
    if (Array.isArray(aiData?.locations) && Array.isArray(aiData?.services)) {
      setAiData(aiData);
    }
  };

  return (
    <IndexsStyled>
      <>
        {((isServiceDivVisible && !navigate?.status) ||
          (isServiceDivVisible && navigate?.status)) && (
          <div className="Service-div">
            <div>
              <p className="mb-1">
                Select Tests{" "}
                {errorFields?.tests && (
                  <span className="inline-block text-red-500">
                    ({errorFields?.tests})
                  </span>
                )}{" "}
              </p>
              <div className="flex gap-2 items-center flex-wrap">
                {Array.isArray(allRFQTestsList) &&
                  allRFQTestsList?.map((item: any) =>
                    selectedTest?.id === item.id ? (
                      <PrimaryButton
                        key={item.name}
                        onClick={() =>
                          setSelectedTest({
                            id: item.id,
                            name: item.name,
                          } as any)
                        }
                      >
                        {item.name}
                      </PrimaryButton>
                    ) : (
                      <SecoundaryButton
                        key={item.name}
                        onClick={() =>
                          setSelectedTest({
                            id: item.id,
                            name: item.name,
                          } as any)
                        }
                      >
                        {item.name}
                      </SecoundaryButton>
                    )
                  )}
              </div>
            </div>
            <div className="Employees-input-div">
              <div className="service-select-city-div">
                <div className="search-custom-div ">
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <p className="Select-test-text mb-1 mt-1">
                        Select Client{" "}
                        {errorFields?.clients && (
                          <span className="inline-block text-red-500">
                            ({errorFields?.clients})
                          </span>
                        )}
                      </p>
                      <Select
                        value={selectedClint?.value}
                        placeholder="Select Client"
                        onChange={(e: any, ...rest) =>
                          handleFilterChange(e, rest)
                        }
                        showSearch={true}
                        filterOption={(input: any, option: any) =>
                          option?.label
                            ?.toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        options={
                          allClients?.data?.clients?.map((item: any) => ({
                            label: item?.name,
                            value: item?.id,
                          })) ?? []
                        }
                        className="delta-select select-filter"
                      />
                    </div>
                    <PrimaryButton
                      className="h-[40px]"
                      onClick={() => {
                        setIsAiSuggest(true);
                      }}
                    >
                      AI ROI Suggest
                    </PrimaryButton>
                    <CustomModal
                      headerClassName="p-1"
                      handleClose={() => setIsAiSuggest(false)}
                      title="Intelligent Data Suggestion"
                      open={isAiSuggest}
                    >
                      <ReportSummaryPreview
                        onClose={() => setIsAiSuggest(false)}
                        onSummaryComplete={onSummaryComplete}
                      />
                    </CustomModal>
                    {/* <div className="Search-bar w-50">
                    <Input
                      placeholder={"Search City"}
                      value={searchTerm}
                      onChange={(e: any) => handleonFilterName(e.target.value)}
                      prefix={<IoIosSearch className="me-3" />}
                    />
                  </div> */}
                  </div>
                </div>
                {/* <div className="cards-container">
                  {filteredCities?.slice(0, 6)?.map((item: any) => (
                    <div
                      className={`pharmacy-card-box ${
                        selectedCities.some(
                          (selected) => selected.id === item.id
                        )
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => handleSelectCity(item)}
                      key={item.id}
                      style={{
                        border: selectedCities.some(
                          (selected) => selected.id === item.id
                        )
                          ? "2px solid #008080"
                          : "1px solid #ccc",
                        cursor: "pointer",
                      }}
                    >
                      <div className="pharmacy-box-top">
                        <img src={item?.image} alt={item.name} />
                      </div>
                      <div className="box-bottom">
                        <div className="name-div">
                          <p className="hospital_data">{item.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div> */}

                <div className="!my-4">
                  <AutocompleteField
                    autoFocus={true}
                    onAddressSelected={handlePlaceSelected}
                    name="address"
                    id="address"
                    className=" !pl-9"
                    defaultValue={""}
                    placeholder="Select for Location"
                    onChange={(e: any) => {}}
                  />
                </div>

                {selectedCities
                  .map((city) => (
                    <div className="participant-input-field-div mb-3" key={city.id}>
                      <div className="w-100">
                        <label
                          htmlFor={`women-${city.id}`}
                          className="form-label"
                        >
                          Women Emp. in {city?.name}
                        </label>
                        <input
                          type="text"
                          className="form-control no-box-shadow"
                          id={`women-${city.id}`}
                          placeholder="Enter Total Women participant"
                          onChange={(e) =>
                            handleEmployeeInputChange(
                              city.id,
                              "womenEmployees",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="w-100">
                        <label
                          htmlFor={`men-${city.id}`}
                          className="form-label"
                        >
                          Men Emp. in {city?.name}
                        </label>
                        <input
                          type="text"
                          className="form-control no-box-shadow"
                          id={`men-${city.id}`}
                          placeholder="Enter Total Men participant"
                          onChange={(e) =>
                            handleEmployeeInputChange(
                              city.id,
                              "menEmployees",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="w-100">
                        <label
                          htmlFor={`children-${city.id}`}
                          className="form-label"
                        >
                          Children Emp. in {city?.name}
                        </label>
                        <input
                          type="text"
                          className="form-control no-box-shadow"
                          id={`children-${city.id}`}
                          placeholder="Enter Total Children participant"
                          onChange={(e) =>
                            handleEmployeeInputChange(
                              city.id,
                              "children",
                              e.target.value
                            )
                          }
                        />
                      </div>

                      <button
                        className="bg-red-500 !rounded-2xl py-1 px-3"
                        onClick={() => handleDeleteCity(city.id)}
                      >
                        <Trash color="white" />
                      </button>
                    </div>
                  ))
                  .reverse()}
                <div className="bottom-btn-div">
                  <PrimaryButton onClick={handleContinueClick}>
                    Continue
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        )}

        {(!isServiceDivVisible ||
          (!isServiceDivVisible && navigate?.status == true)) && (
          <div className="Continue-Service-div">
            <div className="Continue-Service-left-div">
              <div className="excel-upload-div">
                <Input
                  placeholder="Search"
                  value={
                    activeTab === "1"
                      ? searchLabTest
                      : activeTab === "2"
                      ? searchCTMRI
                      : activeTab === "3"
                      ? searchDoctor
                      : ""
                  }
                  onChange={handleToOnchange}
                  prefix={<IoIosSearch className="me-3" />}
                />
              </div>
              <div className="Service-tabs-sec">
                <Tabs
                  defaultActiveKey="1"
                  onChange={(key) => {
                    setPage(1);
                    setActiveTab(key);
                  }}
                  items={[
                    {
                      label: "Pathology",
                      key: "1",
                      children: (
                        <RFQCardModule
                          details={allLabTestData}
                          section={"Pathology"}
                          hideSection={"HideSection"}
                          onSelectedCardsChange={onSelectedPathologyCardsChange}
                          radiologyList={radiologyList}
                          selectedCards={selectedCards}
                          setSelectedCards={setSelectedCards}
                        />
                      ),
                    },
                    {
                      label: "Radiology",
                      key: "2",
                      children: (
                        <RFQCardModule
                          details={allCTMRIData}
                          section={"Radiology"}
                          hideSection={"HideSection"}
                          onSelectedRadiologyCardsChange={
                            onSelectedRadiologyCardsChange
                          }
                          selectedCards={selectedCards}
                          setSelectedCards={setSelectedCards}
                        />
                      ),
                    },
                    {
                      label: "Doctors",
                      key: "3",
                      children: (
                        <RFQDocCardModule
                          doctor={allDoctorData}
                          onSelectedDoctorCardsChange={
                            onSelectedDoctorCardsChange
                          }
                          selectedCards={selectedCards}
                          setSelectedCards={setSelectedCards}
                          section={"doctor"}
                          doctorList={doctorList}
                        />
                      ),
                    },
                  ]}
                />
              </div>
              <div className="pagination-div">
                <Pagination
                  current={page}
                  total={totalTest}
                  onChange={(e: any, e1: any) => {
                    console.log({ e, e1 });

                    setPage(e);
                    setPageSize(e1);
                  }}
                  pageSizeOptions={["5", "10", "20"]}
                  pageSize={pageSize}
                  showSizeChanger={true}
                />
              </div>
            </div>

            <div className="Continue-Service-right-div">
              {aiData?.services && aiData.services.length > 0 && (
                <div className="Continue-Service-sub-right-div2">
                  <>
                    <p>AI Suggested Services</p>
                    <ul>
                      {aiData.services.map((service: string, index: number) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </>
                </div>
              )}
              <p>Selected Test</p>

              <div className="Continue-Service-sub-right-div">
                <div>
                  <p className="lab-test-list-title">Lab Test</p>
                  {pathologyList.map((item: any) => {
                    return (
                      <div className="delete-selected-item">
                        <li className="lab-test-list-sub-title">
                          {item?.service_name}
                        </li>
                        <p
                          onClick={() =>
                            handleRemoveFromSelected(item, "pathology")
                          }
                        >
                          <RiDeleteBin5Line />
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-2">
                  <p className="lab-test-list-title">Radiology</p>
                  {radiologyList?.map((item: any) => {
                    return (
                      <div className="delete-selected-item">
                        <li className="lab-test-list-sub-title">
                          {item?.service_name}
                        </li>
                        <p
                          onClick={() =>
                            handleRemoveFromSelected(item, "radiology")
                          }
                        >
                          <RiDeleteBin5Line />
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-2">
                  <p className="lab-test-list-title">Doctor Consultation</p>
                  {doctorList?.map((item: any) => {
                    return (
                      <div className="delete-selected-item">
                        <li className="lab-test-list-sub-title">
                          {item?.name}
                        </li>
                        <p
                          onClick={() =>
                            handleRemoveFromSelected(item, "doctor")
                          }
                        >
                          <RiDeleteBin5Line />
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="Continue-Service-Proceed-btn-div">
                  <PrimaryButton onClick={handleToRequestConform}>
                    Proceed
                  </PrimaryButton>
                  <SecoundaryButton className="mt-2" onClick={handleToBack}>
                    Back
                  </SecoundaryButton>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </IndexsStyled>
  );
};

export default CreateService;
