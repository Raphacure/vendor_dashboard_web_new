import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import { checkIsMobile, formatStatus } from "@/lib/common";
import { getBookingStatusAPI } from "@/redux/slices/dashboard/dashboardService";
import { getPrescriptionDataAPI } from "@/redux/slices/prescription/prescriptionService";
import { RootState } from "@/redux/store";
import { Col, Radio, Row, Select } from "antd";
import { TestTube2Icon } from "lucide-react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { FiMinus, FiPlus } from "react-icons/fi";
import { GiMedicines } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { FormDataType } from "../../types";

const BookingDetails: React.FC<{
  modalData: any;
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
}> = ({ modalData, formData, setFormData }) => {
  const navigate = useNavigate();
  const isRaphaPlus = useSelector(
    (ReduxState: RootState) => ReduxState.auth.isRaphaPlus
  );
  const dispatch = useDispatch();
  const { linkableId } = useClientLinkableId();
  const [availabeStatus, setAvailableStatus] = useState([]);
  const [prescriptionData, setPrescriptionData] = useState() as any;
  const [toggleExpand, setToggleExpand] = useState(false);

  useEffect(() => {
    if (checkIsMobile()) {
      setToggleExpand(true);
    }
  }, []);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = (await dispatch(
          getBookingStatusAPI(modalData?.type)
        )) as any;
        if (res?.error) {
          toast.error(res?.error?.message ?? "unknown error occured");
          return;
        } else {
          setAvailableStatus(res?.payload?.data?.bookingStatuses);
        }
      } catch (error) {
        toast.error("unexpected error");
      }
    };
    fetchStatus();
  }, [dispatch, modalData]);

  useEffect(() => {
    const fetchPrescriptionData = async () => {
      try {
        const result = (await dispatch(
          getPrescriptionDataAPI(modalData?.id)
        )) as any;
        if (result?.error) {
          toast.error(result?.error?.message ?? "unknown error occured");
          return;
        }
        setPrescriptionData(result?.payload);
      } catch (error) {
        toast.error("unexpected error");
      }
    };

    fetchPrescriptionData();
  }, [dispatch, modalData]);

  return (
    <div className="bkContent">
      <div className="flex flex-wrap gap-2">
        {/* <Col md={3}>
          <div>
            <label className="form-label">Select Payment Status</label>
            <Select
              disabled={true}
              value={modalData?.payment_status ?? "N/A"}
              className="w-full"
            >
              <Select.Option value={modalData?.payment_status ?? "N/A"}>
                {modalData?.payment_status ?? "N/A"}
              </Select.Option>
            </Select>
          </div>
        </Col>
        <Col md={3}>
          <div className="mb-3">
            <label className="form-label">Select Booking Status</label>
            <Select
              value={formData.selectedStatus}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, selectedStatus: value }))
              }
              disabled={linkableId != modalData?.client_id}
              className="w-100"
            >
              {availabeStatus?.map((status: any) => (
                <Select.Option key={status?.id} value={status?.id}>
                  {status?.name}
                </Select.Option>
              ))}
            </Select>
          </div>
        </Col> */}
        {/* <Col md={3}>
          {linkableId == modalData?.doctor_id &&
            modalData?.attachments?.length === 0 && (
              <div
                onClick={() => navigate(`/prescription/${modalData?.id}`)}
                className="flex items-center h-full gap-1"
              >
                <img
                  className="w-[1.1rem] h-[1.3rem]"
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738069041150.png"
                  alt="rx-icon"
                />
                <p className="m-0 cursor-pointer view-prescription-text">
                  Create Prescription
                </p>
              </div>
            )}
        </Col> */}
        <Col md={3}>
          <div
            onClick={() => navigate(`/employees/detail/${modalData?.user?.id}`)}
            className="flex items-center h-full gap-1"
          >
            <img
              className="w-[1.1rem] h-[1.3rem]"
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738069041150.png"
              alt="rx-icon"
            />
            <p className="m-0 cursor-pointer view-prescription-text">
              View Past Prescriptions
            </p>
          </div>
        </Col>
      </div>

      {/* <div className="flex flex-wrap gap-4 p-4">
        <Form.Group>
          <Form.Label>Payment Collection Method</Form.Label>
          <Radio.Group
            onChange={(e) =>
              setFormData((pre) => ({ ...pre, paymentMethod: e.target.value }))
            }
            value={formData.paymentMethod}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Radio value="clinic_collects">
              Amount will be collected by the clinic from Patient
            </Radio>
            <Radio value="raphacure_collects">
              Amount to be collected by{" "}
              {isRaphaPlus ? "RaphaPlus" : "Raphacure"} from patient
            </Radio>
            <Radio value="raphacure_bills_clinic">
              Amount to be billed by {isRaphaPlus ? "RaphaPlus" : "Raphacure"}{" "}
              to the clinic
            </Radio>
          </Radio.Group>
        </Form.Group>
        <Form.Group className="">
          <Form.Label>Payment Method</Form.Label>
          <Select
            placeholder="Select Payment Method"
            value={formData.paymentSource}
            className="!ml-4"
            style={{ width: "max-content", minWidth: "10rem" }}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, paymentSource: value }))
            }
            options={[
              { value: "upi", label: "UPI" },
              { value: "card", label: "Card" },
              { value: "cash", label: "Cash" },
              { value: "wallet", label: "Wallet" },
              { value: "gpay", label: "GPay" },
              { value: "phonepay", label: "PhonePay" },
              {
                value: "bank_transfer",
                label: "Bank Transfer",
              },
              {
                value: "online_banking",
                label: "Online Banking",
              },
              { value: "other", label: "Other" },
            ]}
          />
        </Form.Group>
      </div> */}

      {modalData?.package?.service_code && (
        <Row className="p-4">
          <div className="space-y-3 w-full">
            <h4 className="text-sm font-medium text-gray-900 flex items-center gap-2">
              <TestTube2Icon className="mr-2 text-blue-600" size={25} />
              Lab Package Details
            </h4>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-medium text-gray-500">
                    Service Code
                  </span>
                  <p className="text-sm text-gray-900 font-medium">
                    {modalData?.package?.service_code || "N/A"}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-medium text-gray-500">
                    Service Name
                  </span>
                  <p className="text-sm text-gray-900">
                    {modalData?.package?.service_name || "N/A"}
                  </p>
                </div>
              </div>

              {modalData?.package?.image?.length > 0 && (
                <div className="flex justify-center">
                  <div className="relative w-30 h-30 rounded-md overflow-hidden border border-gray-200">
                    <img
                      src={modalData.package.image[0]}
                      alt="Lab package"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://placehold.co/70";
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Row>
      )}

      {modalData?.medicines?.length > 0 && (
        <Row className="p-4 gap-4">
          <div className="space-y-3 w-full flex flex-col gap-2">
            <h4 className="text-sm font-medium text-gray-900 flex items-center gap-2">
              <GiMedicines className="mr-2 text-blue-600" size={25} />
              Medicine Details
            </h4>
            {modalData?.medicines?.map((med: any, index: any) => {
              return (
                <div
                  className="grid grid-cols-2 gap-4 pb-2 border-b"
                  key={index}
                >
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-medium text-gray-500">
                        Service Code
                      </span>
                      <p className="text-sm text-gray-900 font-medium">
                        {med?.service_code || "N/A"}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-medium text-gray-500">
                        Service Name
                      </span>
                      <p className="text-sm text-gray-900">
                        {med?.service_name || "N/A"}
                      </p>
                    </div>
                  </div>

                  {med?.image?.length > 0 && (
                    <div className="flex justify-center">
                      <div className="relative w-30 h-30 rounded-md overflow-hidden border border-gray-200">
                        <img
                          src={med?.image[0]}
                          alt="Lab package"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://placehold.co/70";
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Row>
      )}

      {modalData?.tests?.length > 0 && (
        <Row className="p-4 gap-4">
          <div className="space-y-3 w-full flex flex-col gap-2">
            <h4 className="text-sm font-medium text-gray-900 flex items-center gap-2">
              <GiMedicines className="mr-2 text-blue-600" size={25} />
              Tests Details
            </h4>
            {modalData?.tests?.map((test: any, index: any) => {
              return (
                <div
                  className="grid grid-cols-2 gap-4 pb-2 border-b"
                  key={index}
                >
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-medium text-gray-500">
                        Service Code
                      </span>
                      <p className="text-sm text-gray-900 font-medium">
                        {test?.service_code || "N/A"}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-medium text-gray-500">
                        Service Name
                      </span>
                      <p className="text-sm text-gray-900">
                        {test?.service_name || "N/A"}
                      </p>
                    </div>
                  </div>

                  {test?.image?.length > 0 && (
                    <div className="flex justify-center">
                      <div className="relative w-30 h-30 rounded-md overflow-hidden border border-gray-200">
                        <img
                          src={test?.image[0]}
                          alt="Lab package"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://placehold.co/70";
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Row>
      )}

      {prescriptionData?.attachments?.length > 0 && (
        <div className="flex flex-wrap">
          <div className="appointment-history-container">
            <div className="appointments">
              <div className="appointment-card">
                <div className="summary max-[600px]:!items-start">
                  <div className="left-panel">
                    <div className="date-box">
                      <span className="date">
                        {moment(
                          prescriptionData?.collection_1_date,
                          "DD/MM/YYYY"
                        ).format("DD")}
                      </span>
                      <span className="month">
                        {moment(
                          prescriptionData?.collection_1_date,
                          "DD/MM/YYYY"
                        ).format("MMM")}
                      </span>
                    </div>
                    <h3>{formatStatus(prescriptionData?.type)}</h3>
                  </div>
                  {!toggleExpand ? (
                    <div className="details max-[600px]:flex-col">
                      <div className="info">
                        <strong>Diagnosis:</strong>
                        <ul>
                          {prescriptionData?.attachments?.[0]?.symptoms ? (
                            prescriptionData?.attachments?.[0]?.symptoms
                              ?.split(",")
                              ?.slice(0, 3)
                              ?.map((diag: any, i: number) => (
                                <li key={i}>
                                  <p className="truncate m-0">{diag}</p>
                                </li>
                              ))
                          ) : (
                            <li>
                              <p className="m-0">No diagnosis added</p>
                            </li>
                          )}
                          {prescriptionData?.attachments?.[0]?.symptoms?.split(
                            ","
                          )?.length > 3 && (
                            <span
                              className="cursor-pointer"
                              onClick={() => setToggleExpand(true)}
                            >
                              +
                              {prescriptionData?.attachments?.[0]?.symptoms?.split(
                                ","
                              )?.length - 3}{" "}
                              more
                            </span>
                          )}
                        </ul>
                      </div>
                      <div className="info">
                        <strong>Lab Test:</strong>
                        <ul>
                          {prescriptionData?.attachments?.[0]
                            ?.prescriptions_tests?.length > 0 ? (
                            prescriptionData?.attachments?.[0]?.prescriptions_tests
                              ?.slice(0, 3)
                              ?.map?.((test: any, i: number) => (
                                <li key={i}>
                                  <p className="truncate m-0 max-w-full">
                                    {test?.test?.service_name}
                                  </p>
                                </li>
                              ))
                          ) : (
                            <li>
                              <p className="m-0">No lab tests added</p>
                            </li>
                          )}
                          {prescriptionData?.attachments?.[0]
                            ?.prescriptions_tests?.length > 3 && (
                            <span
                              className="cursor-pointer"
                              onClick={() => setToggleExpand(true)}
                            >
                              +
                              {prescriptionData?.attachments?.[0]
                                ?.prescriptions_tests?.length - 3}{" "}
                              more
                            </span>
                          )}
                        </ul>
                      </div>
                      <div className="info">
                        <strong>Medicine:</strong>
                        <ul>
                          {prescriptionData?.attachments?.[0]
                            ?.prescriptions_medicines?.length > 0 ? (
                            prescriptionData?.attachments?.[0]?.prescriptions_medicines
                              ?.slice(0, 3)
                              ?.map?.((med: any, i: number) => (
                                <li key={i}>
                                  <p className="m-0 truncate">
                                    {med?.medicine?.service_name}
                                  </p>
                                </li>
                              ))
                          ) : (
                            <li>
                              <p className="m-0">No medicines added</p>
                            </li>
                          )}
                          {prescriptionData?.attachments?.[0]
                            ?.prescriptions_medicines?.length > 3 && (
                            <span
                              className="cursor-pointer"
                              onClick={() => setToggleExpand(true)}
                            >
                              +
                              {prescriptionData?.attachments?.[0]
                                ?.prescriptions_medicines?.length - 3}{" "}
                              more
                            </span>
                          )}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="detail">
                      <div className="extra-details">
                        <p>
                          Diagnosis :{" "}
                          {prescriptionData?.attachments?.[0]?.symptoms ??
                            "no diagnosis added"}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="plus-button">
                    <button
                      className="expand-btn"
                      onClick={() => setToggleExpand((pre) => !pre)}
                    >
                      {toggleExpand ? <FiMinus /> : <FiPlus />}
                    </button>
                  </div>
                </div>

                {toggleExpand && (
                  <div className="expanded-section">
                    <div className="overflow-x-auto">
                      <table className="table-1">
                        <thead>
                          <tr className="table-header">
                            <th>#</th>
                            <th>Test Required</th>
                            <th>Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {prescriptionData?.attachments?.[0]
                            ?.prescriptions_tests?.length > 0 ? (
                            prescriptionData?.attachments?.[0]?.prescriptions_tests?.map(
                              (test: any, i: number) => (
                                <tr key={i}>
                                  <td>{i + 1}</td>
                                  <td>{test?.test?.service_name}</td>
                                  <td>N/A</td>
                                </tr>
                              )
                            )
                          ) : (
                            <tr>
                              <td colSpan={3} className="text-center">
                                No tests added
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="table-2 ">
                        <thead>
                          <tr className="table-header">
                            <th>#</th>
                            <th>Medicine</th>
                            <th>Dosage</th>
                            <th>Timing</th>
                            <th>Start Date</th>
                            <th>Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {prescriptionData?.attachments?.[0]
                            ?.prescriptions_medicines?.length > 0 ? (
                            prescriptionData?.attachments?.[0]?.prescriptions_medicines?.map(
                              (med: any, i: number) => (
                                <tr key={i}>
                                  <td>{i + 1}</td>
                                  <td>{med?.medicine?.service_name}</td>
                                  <td>{med?.frequency}</td>
                                  <td>{med?.intake}</td>
                                  <td>
                                    {moment(med?.start_date).format(
                                      "DD-MM-YYYY"
                                    )}
                                  </td>
                                  <td>{med?.no_of_days}</td>
                                </tr>
                              )
                            )
                          ) : (
                            <tr>
                              <td colSpan={6} className="text-center">
                                No medicines added
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>

                    <div className="advice">
                      <p className="p1">Advice</p>
                      <p className="p2">
                        {prescriptionData?.attachments?.[0]?.note ??
                          "no advice added"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingDetails;
