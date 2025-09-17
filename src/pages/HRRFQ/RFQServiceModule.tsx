import React, { useCallback, useEffect, useRef, useState } from "react";
import { RFQServiceModuleStyled } from "./RFQServiceModule.styled";
import { Input } from "antd";
import SearchInputField from "./SearchInputField";
import { useDispatch, useSelector } from "react-redux";
import { getConfigInfoAPI } from "../../redux/slices/config/configService";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Tabs } from "antd";
import RFQCardModule from "./RFQCardModule";
import {
  getAllCategoriesAPI,
  getAllSingleTests,
  getHealthCategoriesAPI,
} from "../../redux/slices/labtest/labtestService";
import RFQDocCardModule from "./RFQDocCardModule";
import { getAllScansListAPI } from "../../redux/slices/ctmri/ctmriService";
import CommonPagination from "./CommonPagination";
import { useNavigate } from "react-router";
import AutocompleteField from "../../components/Address/AddressAutoComplete/AddressAutoComplete";
import { getRFQTestsListAPI } from "@/redux/slices/generic/genericService";
import { getAllSpecializationCategoryAPI } from "@/redux/slices/medicines/medicineService";
import { useLocation } from "react-router";

const RFQServiceModule = () => {
  const location: any = useLocation();
  const path: any = location?.search;
  const typeValue = new URLSearchParams(path).get("type");
  console.log(typeValue, "typeValue");

  const locattion: any = useLocation();
  const navigateState = locattion?.state;

  const navigate = useNavigate();
  const dispatch = useDispatch() as any;
  const [selectedTest, setSelectedTest] = useState<any>( navigateState?.formData?.selectedTest || "");
  const [searchTerm, setSearchTerm] = useState("");
  const [isServiceDivVisible, setIsServiceDivVisible] = useState(typeValue != '1');
  const [selectedCities, setSelectedCities] = useState<any[]>(
    navigateState?.formData?.selectedCities || ([] as any)
  );
  const [employeeData, setEmployeeData] = useState<any>({});
  const [formData, setFormData] = useState<any>(navigateState?.formData || null);
  const [pathologyList, setPathologyList] = useState(navigateState?.pathologyList || ([] as any));
  const [radiologyList, setRadiologyList] = useState<any>( navigateState?.radiologyList || ([] as any));
  const [errorFields, setErrorFields] = useState("");
  const [doctorConsultation, setDoctorConsultation] = useState<any>(navigateState?.doctorList || ([] as any));
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([] as any);
  const [allDoctorData, setAllDoctorData] = useState<any>([]);
  const { configInfo } = useSelector((ReduxState: any) => ReduxState.config);
  const filteredCities = configInfo?.cities?.filter((city: any) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const {
    allTestsList,
    healthCategoriesList,
    allSingleTestsList,
    allSingleTestsTotalList,
    categoriesList,
  } = useSelector((ReduxState: any) => ReduxState.labtest);
  const { doctorsList } = useSelector((ReduxState: any) => ReduxState.doctor);
  const { allScansList } = useSelector((ReduxState: any) => ReduxState.ctmri);
  const { allRFQTestsList } = useSelector(
    (ReduxState: any) => ReduxState.generic
  );
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);


  useEffect(() => {
    const requestOBj: any = {
      page: page - 1,
      searchText: searchTerm,
      count: pageSize,
      doctorFilterObject: "",
    };
    dispatch(getAllScansListAPI(requestOBj));
  }, [dispatch, pageSize, page, searchTerm]);

  useEffect(() => {
    dispatch(
      getAllSingleTests({
        filters: {
          count: pageSize,
          page: page - 0,
          searchText: searchTerm,
          categoryIds: selectedCategoryIds,
        },
      })
    );
  }, [dispatch, pageSize, page, searchTerm, selectedCategoryIds]);
  useEffect(() => {
    dispatch(getAllCategoriesAPI({ section_name: "labtest" }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRFQTestsListAPI());
    dispatch(getConfigInfoAPI());
  }, [dispatch]);
  const handleonFilterName = (item: any) => {
    setSearchTerm(item);
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
    if (!selectedTest) {
      setErrorFields("Test is Required");
    } else {
      const data = {
        selectedTest,
        selectedCities: (selectedCities || []).map((city) => ({
          ...city,
          employeeData: employeeData?.[city.id] || {},
        })),
      };
      setFormData(data);
      setIsServiceDivVisible(false);
    }
  };
  const onSelectedCardsChange = (item: any) => {
    const prevcaids = [...pathologyList];
    if (prevcaids?.includes(item)) {
      const findINdex = prevcaids.findIndex((itemId: any) => itemId === item);
      prevcaids.splice(findINdex, 1);
    } else {
      prevcaids.push(item);
    }
    setPathologyList(prevcaids);
  };
  const onSelectedRadiologyCardsChange = (item: any) => {
    const prevcaids = [...radiologyList];
    if (prevcaids?.includes(item)) {
      const findINdex = prevcaids.findIndex((itemId: any) => itemId === item);
      prevcaids.splice(findINdex, 1);
    } else {
      prevcaids.push(item);
    }
    setRadiologyList(prevcaids);
  };
  const handleSelectedCardsChange = (item: any) => {
    setDoctorConsultation(item);
  };
  const handleToRequestConform = () => {
    navigate("/rfq/rfqrequest/rfqrequestconform", {
      state: {
        pathologyList,
        radiologyList,
        doctorConsultation,
        formData,
      }
    });
  };

  useEffect(() => {
    dispatch(getHealthCategoriesAPI());
  }, [dispatch]);

  const handleCategorySelect = (categorySelectId: any) => {
    const prevcaids = [...selectedCategoryIds];
    if (prevcaids?.includes(categorySelectId)) {
      const findINdex = prevcaids.findIndex(
        (itemId: any) => itemId === categorySelectId
      );
      prevcaids.splice(findINdex, 1);
    } else {
      prevcaids.push(categorySelectId);
    }
    setSelectedCategoryIds(prevcaids);
    console.log(prevcaids, "prevcaids2");
  };

  const handleDeletePathologyList = (item: any) => {
    onSelectedCardsChange(item);
    console.log(item, "item");
  };
  const handleDeleteRadiology = (item: any) => {
    onSelectedRadiologyCardsChange(item);
  };

  const inputRef = useRef<any>(null);

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
      console.log("Selected Cities:", formattedCity);
    }
  };

  const getAllDoctorData = useCallback(async () => {
    const filters: any = {};

    const res: any = await dispatch(
      getAllSpecializationCategoryAPI({
        page: page,
        count: pageSize,
        section_name: "doctor",
      })
    );
    if (res?.payload?.success) {
      const data = res?.payload?.data?.category_ids;
      console.log(res?.payload?.data, "res?.payload");

      setAllDoctorData(data);
    }
  }, [dispatch, page, pageSize]);

  useEffect(() => {
    getAllDoctorData();
  }, [getAllDoctorData]);

  console.log(allSingleTestsList, categoriesList, "pathologyList");


  return (
    <RFQServiceModuleStyled>
      <>
        {isServiceDivVisible && (
          <div className="Service-div">
            <div>
              <p className="Select-test-text">Select Tests</p>
              <div className="Select-btn-div">
                {Array.isArray(allRFQTestsList) &&
                  allRFQTestsList?.map((item: any) => (
                    <button
                      key={item.name}
                      className="btn"
                      onClick={() =>
                        setSelectedTest({ id: item.id, name: item.name } as any)
                      }
                      style={{
                        background:
                          selectedTest?.id === item.id ? "#9747FF" : "white",
                        color: selectedTest?.id === item.id ? "white" : "black",
                      }}
                    >
                      {item.name}
                    </button>
                  ))}
              </div>
              <p className="warning-msg">{errorFields}</p>
            </div>
            <div className="Employees-input-div">
              <div className="service-select-city-div">
                <div className="address-container">
                  <AutocompleteField
                    autoFocus={true}
                    onAddressSelected={handlePlaceSelected}
                    name="address"
                    id="address"
                    defaultValue={""}
                    placeholder="Select for Location"
                  />
                </div>

                {selectedCities.map((city: any) => (
                  <div className="participant-input-field-div" key={city.id}>
                    <div className="mb-3">
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
                    <div className="mb-3">
                      <label htmlFor={`men-${city.id}`} className="form-label">
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
                    <div className="mb-3">
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
                      className="btn"
                      onClick={() => handleDeleteCity(city.id)}
                    >
                      <RiDeleteBin5Line className="participant-dlt-btn-div" />
                    </button>
                  </div>
                ))}
                <div className="bottom-btn-div">
                  <button
                    className="btn Continue-btn-div"
                    onClick={handleContinueClick}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {!isServiceDivVisible && (
          <div className="Continue-Service-div">
            <div className="Continue-Service-left-div">
              <div className="excel-upload-div">
                <SearchInputField handleonFilterName={handleonFilterName} />
              </div>
              <div className="Service-tabs-sec">
                <Tabs
                  defaultActiveKey="1"
                  items={
                    [
                      {
                        label: "Pathology",
                        key: "1",
                        children: (
                          <>
                            <div className="healthCategoriesListbtn-div">
                              {categoriesList?.category_ids?.map(
                                (item: any, index: any) => {
                                  return (
                                    <button
                                      className="btn healthCategoriesListbtn"
                                      onClick={(e: any) =>
                                        handleCategorySelect(item?.id)
                                      }
                                    >
                                      {item?.name}
                                    </button>
                                  );
                                }
                              )}
                            </div>
                            <RFQCardModule
                              details={allSingleTestsList}
                              section={"Pathology"}
                              hideSection={"HideSection"}
                              onSelectedCardsChange={onSelectedCardsChange}
                              radiologyList={radiologyList}
                            />
                          </>
                        ),
                      },
                      {
                        label: "Radiology",
                        key: "2",
                        children: (
                          <RFQCardModule
                            details={allScansList?.tests}
                            section={"Radiology"}
                            hideSection={"HideSection"}
                            onSelectedRadiologyCardsChange={
                              onSelectedRadiologyCardsChange
                            }
                          />
                        ),
                      },
                      {
                        label: "Doctor Consultation",
                        key: "3",
                        children: (
                          <RFQDocCardModule
                            doctor={allDoctorData}
                            selectedCard={doctorConsultation}
                            onSelectedCardsChange={handleSelectedCardsChange}
                          />
                        ),
                      },
                    ] as any
                  }
                />
              </div>
              <div className="pagination-div">
                <CommonPagination
                  onChangeHnadler={(p: any, pageS: any) => {
                    setPage(p);
                    setPageSize(pageS);
                  }}
                  defaultPage={page}
                  defaultTotal={allSingleTestsTotalList}
                  pageSize={pageSize}
                />
              </div>
            </div>

            <div className="Continue-Service-right-div">
              <p>Selected Test</p>
              <div className="Continue-Service-sub-right-div">
                <div>
                  <p className="lab-test-list-title">Lab Test</p>
                  {pathologyList?.map((item: any) => {
                    return (
                      <div className="delete-selected-item">
                        <li className="lab-test-list-sub-title">
                          {item?.service_name}
                        </li>
                        <p onClick={() => handleDeletePathologyList(item)}>
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
                        <p onClick={() => handleDeleteRadiology(item)}>
                          <RiDeleteBin5Line />
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-2">
                  <p className="lab-test-list-title">Doctor Consultation</p>
                  {Array.isArray(doctorConsultation) &&
                    doctorConsultation?.map((item: any) => {
                      return (
                        <div>
                          <li className="lab-test-list-sub-title">
                            {item?.name}
                          </li>
                        </div>
                      );
                    })}
                </div>
                <div className="Continue-Service-Proceed-btn-div">
                  <button
                    className="btn Continue-Service-Proceed-btn mb-4"
                    onClick={handleToRequestConform}
                  >
                    Proceed
                  </button>
                  <button
                    className="btn Continue-Service-back-btn"
                    onClick={() => setIsServiceDivVisible(true)}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </RFQServiceModuleStyled>
  );
};

export default RFQServiceModule;
