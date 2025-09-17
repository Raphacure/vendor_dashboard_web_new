import React, { useState, useRef } from "react";
import { PromotionalDataStyled } from "../PromotionalData.styled";
import { Table } from "antd";
// import add_icon from "../../../img/import.png";
// import add_icon1 from "../../../img/Picture.png";

import { createBulkPromotionalDataAPI } from "@/redux/slices/promotionalData/promotionalDataService";
import { CSVLink } from "react-csv";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/loader/loader/Loader";
const csvData = [
  ["name", "email", "phone", "pincode", "city", "state", "section", "category"],
  [
    "ABC1",
    "vinod@raphacure.com",
    "9999999999",
    "560068",
    "Bangalore",
    "Karnataka",
    "pharmacy",
    "bank data",
  ],
  [
    "ABC2",
    "TestJohn3@gmail.com",
    "9999999993",
    "560068",
    "Bangalore",
    "Karnataka",
    "pharmacy",
    "bank data",
  ],
  [
    "ABC3",
    "TestJohn2@gmail.com",
    "9999999945",
    "560068",
    "Bangalore",
    "Karnataka",
    "pharmacy",
    "bank data",
  ],
];

const PromotionalBulkUpload = (props: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [currentStep, setCurrentStep] = useState("1");
  const [message, setMessage] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [instituteerrorMessage, setInstituteErrorMessage] = useState("");
  const [emptyName, setEmptyName] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPhoneNumber, setEmptyPhoneNumber] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [instituteValue, setInstituteValue] = useState({} as any);
  const [studentGrade, setStudentGrade] = useState({} as any);
  const [academicYear, setAcademicYear] = useState({} as any);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const hiddenFileInput = useRef<any>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch() as any;
  const { error, loading, user } = useSelector((state: any) => state?.auth);
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const fileReader = new FileReader();

  const handleOnChange = (e: any) => {
    setFile(e.target.files[0]);
    handleOnSubmit(e.target.files[0]);
  };
  const handleDownloadSampleSheet = () => {};
  const handleCancel = () => {
    navigate("/promotional-data");
  };
  const submitBulkUpload = async () => {
    console.log("array", array);
    if (array?.length > 0) {
      let newList = [] as any;
      array?.map((itt: any) => {
        newList.push({ ...itt, instituteId: user?._id });
      });
      const body = { data: newList };
      console.log("body", body);
      setIsLoading(true);
      const resp = (await dispatch(createBulkPromotionalDataAPI(body))) as any;
      setIsLoading(false);
      setShowSuccessMessage(true);
    }
  };

  const csvFileToArray = (string: any) => {
    console.log("string", string);
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
    console.log("csvHeader", csvHeader);
    console.log("csvRows", csvRows);
    const array = csvRows.map((i: any) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object: any, header: any, index: any) => {
        const keyyyy = header
          ?.replace("\r", "")
          ?.replace(`"`, "")
          ?.replace(`"`, "");
        if (keyyyy) {
          object[keyyyy] = values[index]
            ?.replace("\r", "")
            ?.replace(`"`, "")
            ?.replace(`"`, "");
        }

        return object;
      }, {});
      return obj;
    });

    setArray(array);
  };

  const handleOnSubmit = (fileUpload: any) => {
    // e.preventDefault();

    if (fileUpload) {
      fileReader.onload = function (event: any) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(fileUpload);
    }
  };
  const handleClick = () => {
    if (hiddenFileInput) {
      hiddenFileInput?.current?.click();
    }
  };

  const columns = [
    {
      title: "Name",
      width: 200,
      key: "0",
      fixed: "left",
      dataIndex: "name",
      render: (item: any) => {
        return <>{item}</>;
      },
    },
    {
      title: "Email",
      key: "3",
      width: 200,
      render: (item: any) => {
        console.log("rollNumber", item);
        return <>{item?.email}</>;
      },
    },
    {
      title: "MobileNo",
      dataIndex: "phone",
      key: "2",
      width: 200,
    },

    {
      title: "Pincode",
      dataIndex: "pincode",
      key: "42",
      width: 200,
    },
    {
      title: "City",
      dataIndex: "city",
      key: "4",
      width: 200,
    },
    {
      title: "State",
      dataIndex: "state",
      key: "4",
      width: 250,
    },
    {
      title: "Section",
      dataIndex: "section",
      key: "4",
      width: 250,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "4",
      width: 250,
    },
  ] as any;

  const headerKeys = Object.keys(Object.assign({}, ...array));
  console.log("arrayarray", array);
  const arraySlice = array.slice(0, 10);
  return (
    <>
      <PromotionalDataStyled>
        <div className={`create-new-institute-sec `}>
          {isLoading && <Loader />}
          <div className="create-new-institute-sec-content">
            <div>
              <div className="profileinfoHeader">
                <div>
                  <span className="edit-p-text">
                    Bulk Upload Promotional Data
                  </span>
                </div>
              </div>
            </div>
            <div className="bulk-upload-btns">
              <div>
                <div className="sample-sheet">
                  <CSVLink
                    filename="Sample-Promotional-Data.csv"
                    data={csvData}
                  >
                    Download Sample Sheet &nbsp; 
                    {/* <img src={add_icon} /> */}
                  </CSVLink>
                </div>
              </div>
            </div>
            {/* <form> */}
            <div
              className={
                array?.length > 0
                  ? "btn-upload btn-upload-filled"
                  : "btn-upload"
              }
            >
              <input
                type={"file"}
                id={"csvFileInput"}
                accept={".csv"}
                ref={hiddenFileInput}
                onChange={handleOnChange}
              />

              <div className="btn-upload-section" onClick={handleClick}>
                {/* <img src={add_icon1} /> */}
                <br />
                <button className="button-upload">
                  {array?.length > 0
                    ? "Re upload here, or"
                    : "Drop your media here, or"}
                  <span>browse</span>
                </button>
                <p>Supports: CSV</p>
              </div>
            </div>
            <br />
            {array?.length > 0 && (
              <>
                <div className="deltape-table-view">
                  <Table
                    columns={columns}
                    pagination={false}
                    dataSource={arraySlice}
                    scroll={{ x: 1500, y: 500 }}
                  />
                </div>
                <div className="total-record-sec-conut-sec">
                  <h5>{array?.length} Records</h5>
                </div>
                <div className="submit-s-list-sec">
                  <button onClick={submitBulkUpload} className="deltape-button">
                    Submit Promotional Data
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </PromotionalDataStyled>
    </>
  );
};

export default PromotionalBulkUpload;
