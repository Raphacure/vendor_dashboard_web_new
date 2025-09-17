import React, { useState } from "react";
import { IndexsStyled } from "./Index.styled";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Dropdown, Form } from "react-bootstrap";
import ConformPopUp from "./ConformPopUp";
import { createNewRFQAPI } from "../../redux/slices/rfq/rfqService";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";

function ServiceConformModule() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locattion: any = useLocation();

  const [selectedHospital, setSelectHospital] = useState("");
  const [selecteDiagnosticCenter, setSelectDiagnosticCenter] = useState("");
  const [showConformMsg, setShowConformMsg] = useState(false);
  const [showHospitalDropdown, setShowHospitalDropdown] = useState(false);
  const [error, setError] = useState("");
  const [packageName, setPackageName] = useState<any>("");
  const { pathologyList, radiologyList, doctorList, formData } =
    locattion.state || ({} as any);

  console.log(
    { pathologyList, radiologyList, doctorList, formData },
    "1212121sdzdxczxxc"
  );

  const LocationData = formData.selectedCities;
  const clintData = formData?.selectedClint;

  console.log(locattion, "location22");

  const handleOkClick = () => {
    setShowHospitalDropdown(false);
  };
  const options = [
    { category: "Diagnostic Center", items: ["Standard", "Premium"] },
    { category: "Hospital", items: ["Standard", "Premium"] },
  ];

  const handleCheckboxChange = (category: string, item: string) => {
    if (category === "Hospital") {
      setSelectHospital((prev: any) =>
        prev.includes(item)
          ? prev.filter((i: any) => i !== item)
          : [...prev, item]
      );
    } else if (category === "Diagnostic Center") {
      setSelectDiagnosticCenter((prev: any) =>
        prev.includes(item)
          ? prev.filter((i: any) => i !== item)
          : [...prev, item]
      );
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const combinedData = [...pathologyList, ...radiologyList];
    const combinedDocData = [...doctorList];
    const rfqServiceObj = {
      rfq_name: packageName,
      client_id: clintData?.value,
      items: LocationData.map((city: any) => ({
        city_id: city.id,
        package_id: null,
        test_id: combinedData.map((item: any) => item?.service_code),
        specialization_id:
          combinedDocData.map((item: any) => item?.id?.toString()) || null,
        service_id: formData.selectedTest.id || "",
        no_of_men: city.employeeData?.menEmployees || "0",
        no_of_women: city.employeeData?.womenEmployees || "0",
        no_of_children: city.employeeData?.children || "0",
        hospital: selectedHospital?.toString(),
        diagnostic_center: selecteDiagnosticCenter?.toString(),
      })),
    };

    try {
      const resultAction = await dispatch(createNewRFQAPI(rfqServiceObj));
      const resultActionString = JSON.stringify(resultAction);
      const resJSON = JSON.parse(resultActionString);
      if (resJSON?.payload?.success === true) {
        setShowConformMsg(true);
      } else {
        setError(resJSON.error.message);
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  return (
    <IndexsStyled>
      <p>Your RFQ</p>
      <div className="service-conform-module-div">
        <div className="service-conform-left-module-div">
          <div className="service-conform-header-module-div">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732791573758.png"
              alt=""
              className="me-3"
            />
            <p>Packages</p>
          </div>
          <div className=" service-conform-text-module-div">
            <div className="mt-2">
              <p className="lab-test-list-title">Lab Test</p>
              {pathologyList.map((item: any) => {
                return (
                  <li className="lab-test-list-sub-title">
                    {item?.service_name}
                  </li>
                );
              })}
            </div>
            <div className="mt-2">
              <p className="lab-test-list-title">Radiology</p>
              {radiologyList?.map((item: any) => {
                return (
                  <li className="lab-test-list-sub-title">
                    {item?.service_name}
                  </li>
                );
              })}
            </div>
            <div className="mt-2">
              <p className="lab-test-list-title">Doctor Consultation</p>
              {Array.isArray(doctorList) &&
                doctorList.map((item: any) => {
                  return (
                    <li className="lab-test-list-sub-title">{item?.name}</li>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="service-conform-right-module-div">
          <div className="">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Package Name
              </label>
              <input
                type="text"
                className="form-control no-box-shadow"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={packageName}
                onChange={(e: any) => setPackageName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1 " className="form-label mb-3">
                Employees details
              </label>

              {LocationData?.map((item: any) => (
                <div key={item.id}>
                  <p className="form-label"> City: {item.name}</p>
                  {item.employeeData && (
                    <div>
                      <p className="form-label">
                        Women Employees: {item.employeeData.womenEmployees}
                      </p>
                      <p className="form-label">
                        Men Employees: {item.employeeData.menEmployees}
                      </p>
                      <p className="form-label">
                        Children: {item.employeeData.children}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mb-5 select select-options-div">
              <Dropdown
                show={showHospitalDropdown}
                onToggle={() => setShowHospitalDropdown(!showHospitalDropdown)}
              >
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Preferred Vendor:
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {options.map((group, index) => (
                    <div key={index} className="px-3 py-2">
                      <strong>{group.category}</strong>
                      <div className="d-flex flex-row gap-3 mt-1">
                        {group.items.map((item, idx) => {
                          const isChecked =
                            group.category === "Hospital"
                              ? selectedHospital.includes(item)
                              : selecteDiagnosticCenter.includes(item);

                          // For each group, disable other checkboxes if one is already selected
                          const isAnyChecked =
                            group.category === "Hospital"
                              ? selectedHospital.length > 0
                              : selecteDiagnosticCenter.length > 0;

                          return (
                            <Form.Check
                              type="checkbox"
                              id={`${group.category}-${idx}`}
                              key={`${index}-${idx}`}
                              label={item}
                              checked={isChecked}
                              disabled={!isChecked && isAnyChecked}
                              onChange={() =>
                                handleCheckboxChange(group.category, item)
                              }
                            />
                          );
                        })}
                      </div>
                    </div>
                  ))}
                  <div className="RFQ-options-select-btn">
                    <button className="btn" onClick={handleOkClick}>
                      Ok
                    </button>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <p style={{ color: "red" }}>{error}</p>

            <div className="flex justify-end gap-2">
              <SecoundaryButton
                onClick={() =>
                  navigate(`/rfq/rfqcreate?type=1`, {
                    state: {
                      status: true,
                      formData,
                      pathologyList,
                      radiologyList,
                      doctorList,
                    },
                  })
                }
              >
                Add More RFQ
              </SecoundaryButton>
              <PrimaryButton onClick={handleSubmit}>
                Request For Quote
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <ConformPopUp
        show={showConformMsg}
        onHide={() => setShowConformMsg(false)}
        path={`/rfq?type=1`}
        conformImg={
          "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732700413741.png"
        }
        title={"RFQ Service Created Successfully"}
        subTitle={"We will offer the best prices for you shortly"}
      />
    </IndexsStyled>
  );
}

export default ServiceConformModule;
