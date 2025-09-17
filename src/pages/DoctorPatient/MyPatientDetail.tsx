import {
  AccordionContainer,
  MyPatientDetailMobileStyled,
  MyPatientDetailStyled,
} from "./MyPatientDetail.styled";
import { FaPencil } from "react-icons/fa6";
import { useCallback, useEffect, useState } from "react";
import AppointmentHistroy from "./AppointmentHistroy";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { Skeleton } from "antd";
import { FaUser } from "react-icons/fa";
import { checkIsMobile } from "@/lib/common";
import { BiChevronDown } from "react-icons/bi";
import moment from "moment";
import MedicalRecord from "./MedicalRecord";
import { getAllClientEmpoyess } from "@/redux/slices/employees/EmployeeService";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import Wallet from "./EmployeeComponents/Wallets/Wallet";
import Packages from "./Packages/Packages";
import CommonBreadCrumbs from "@/components/custom/BreadCrumb/CommonBreadCrumb";
import AddPatientModal from "./AddPatientForm/AddPatientModal";
import AddressRenderer from "@/components/Address/AddressRender/AddressRender";
import CustomTab from "@/components/custom/Tab/CustomTab";

const MyPatientDetail = () => {
  const { id } = useParams() as any;
  const navigate = useNavigate() as any;
  const dispatch = useDispatch() as any;
  if (!id) {
    navigate("/patients");
  }

  const [showForm, setShowForm] = useState(false);
  const [patient, setPatient] = useState(null) as any;
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("appointment");
  const { linkableId } = useClientLinkableId();

  const getPatientDetails = useCallback(async () => {
    try {
      setIsLoading(true);
      const filters = {
        clientId: linkableId,
        user_id: id,
      };
      const result = (await dispatch(getAllClientEmpoyess(filters))) as any;
      if (result?.error) {
        toast.error(result?.error?.message || "unknown error occured");
        return;
      } else {
        setPatient(result?.payload?.data?.user);
      }
    } catch (error) {
      toast.error("unknown error occured");
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, linkableId]);

  //user details
  useEffect(() => {
    getPatientDetails();
  }, []);

  //

  //accordium lgic

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index: any) => {
    setOpenSection(openSection === index ? null : index);
  };
  const sections = [
    {
      title: "General Information",
      Content: () => {
        return (
          <div className="patient-details-accordium">
            <ul className="!pl-0">
              <li>
                <div>
                  <p>Ph :</p>
                  <p>{patient?.phone ?? "N/A"}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>E-mail:</p>
                  <p>{patient?.email ?? patient?.secondary_email ?? "N/A"}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Blood Group:</p>
                  <p>{patient?.blood_group ?? "N/A"}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>DOB:</p>
                  <p>
                    {patient?.dob
                      ? moment(patient?.dob).format("YYYY-MM-DD")
                      : "N/A"}
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p>Address:</p>
                  <p className="text-right">
                    <AddressRenderer addressData={patient?.address} />
                  </p>
                </div>
              </li>
            </ul>
          </div>
        );
      },
    },
    {
      title: "Appointments",
      Content: () => <AppointmentHistroy patientId={id} />,
    },
    {
      title: "Reports",
      Content: () => <MedicalRecord patientId={id} />,
    },
    { title: "Wallet", Content: () => <Wallet id={id} /> },
    { title: "Packages", Content: () => <Packages /> },
  ];

  //

  if (checkIsMobile()) {
    return (
      <MyPatientDetailMobileStyled>
        <div className="image-div">
          <div className="w-[94px] h-[94px] inline-block profile-pic-div rounded-full">
            {patient?.image ? (
              <img src={patient?.image} alt="Profile" className="profile-pic" />
            ) : (
              <FaUser className="profile-pic" size={94} />
            )}
          </div>
        </div>
        <div className="text-name-align-div">
          <h4 className="doc-name">
            {patient?.first_name} {patient?.last_name}
          </h4>
          <div className="doctor-details">
            <div className="doctor-details-content-div">
              #{patient?.employee_id ?? "Employee ID N/A"}
            </div>
            |
            <div className="doctor-details-content-div">
              {patient?.age ?? "N/A"}/{patient?.gender ?? "N/A"}
            </div>
          </div>
        </div>
        <div>
          {sections.map((section, index) => (
            <AccordionContainer key={index} isOpen={openSection === index}>
              <div className="accordion-section">
                <div
                  className="accordion-header"
                  onClick={() => toggleSection(index)}
                >
                  {section.title}
                  <div className="arrow">
                    <BiChevronDown size={24} />
                  </div>
                </div>
                <div className="accordion-content">{section.Content()}</div>
              </div>
            </AccordionContainer>
          ))}
        </div>
      </MyPatientDetailMobileStyled>
    );
  }

  return (
    <MyPatientDetailStyled>
      <CommonBreadCrumbs
        items={[
          {
            name: "My Employees",
            link: "/employees",
          },
          {
            name: `${patient?.first_name ?? ""} ${patient?.last_name ?? ""}`,
            link: `/employees/detail/${patient?.id}`,
          },
        ]}
      />
      <div className="heading mt-1">
        <h2 className="title">My Employee</h2>
      </div>

      <div className="main-buttons">
        {/* <button className="btn-outline" onClick={handleRowClick}>
          Create Prescription
        </button> */}
        {/* <button className="btn-outline">Create Appointment</button> */}

        {/* <button
          className="btn-outline"
          onClick={() => setShowCreateAppointmentForm(true)}
        >
          Create Appointment
        </button> */}
        {/* {showCreateAppointmentForm && (
          <CreateAppointmentForm
            closeForm={() => setShowCreateAppointmentForm(false)}
          />
        )} */}
        {/* <button className="btn-primary">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738218420776.png"
            alt="Doctor Logo"
            className="btn-logo"
          />
          Refer a Doctor
        </button> */}
      </div>

      <div className="card">
        {isLoading ? (
          <Skeleton avatar paragraph={{ rows: 4 }} />
        ) : (
          <>
            <div className="left-section">
              {patient?.image ? (
                <img
                  src={patient?.image}
                  alt="Profile"
                  className="profile-pic"
                />
              ) : (
                <FaUser className="profile-pic" />
              )}
            </div>
            <div className="right-section">
              <div className="right-upper-section">
                <h3 className="patient-name">
                  {patient?.first_name} {patient?.last_name}
                </h3>
                <button
                  className="add-patient"
                  onClick={() => setShowForm(true)}
                >
                  <FaPencil className="edit-icon" />
                </button>
                <AddPatientModal
                  reload={getPatientDetails}
                  handleClose={() => setShowForm(false)}
                  open={showForm}
                  editMode={true}
                  modalData={patient}
                  patientId={patient?.id}
                />
              </div>
              <div className="right-down-section">
                <div className="column">
                  <p>
                    Employee ID: <strong>#{patient?.employee_id}</strong>
                  </p>
                </div>
                <div className="column">
                  <p>
                    Ph No: <strong>+91 {patient?.phone ?? "N/A"}</strong>
                  </p>
                  <p>
                    E-mail:{" "}
                    <strong>
                      {patient?.email ?? patient?.secondary_email ?? "N/A"}
                    </strong>
                  </p>
                  <p>
                    DOB:{" "}
                    <strong>
                      {patient?.dob
                        ? moment(patient?.dob).format("YYYY-MM-DD")
                        : "N/A"}
                    </strong>
                  </p>
                  <p>
                    Age/Gender:{" "}
                    <strong>
                      {patient?.age ?? "N/A"}/{patient?.gender ?? "N/A"}
                    </strong>
                  </p>
                </div>
                <div className="column">
                  <p>
                    Blood Group:{" "}
                    <strong>{patient?.blood_group ?? "N/A"}</strong>
                  </p>
                  <p>
                    Address:{" "}
                    <strong>
                      <AddressRenderer addressData={patient?.address} />
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="bottom-card">
        <div className="tab-container">
          <CustomTab
            tabs={[
              {
                label: "Appointment History",
                value: "appointment",
                children: <AppointmentHistroy patientId={id} />,
              },
              {
                label: "Medical Record",
                value: "medical",
                children: <MedicalRecord patientId={id} />,
              },
              {
                label: "Wallet",
                value: "wallet",
                children: <Wallet id={id} />,
              },
              {
                label: "Packages",
                value: "package",
                children: <Packages />,
              },
            ]}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </MyPatientDetailStyled>
  );
};

export default MyPatientDetail;
