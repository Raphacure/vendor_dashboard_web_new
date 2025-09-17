import { FiMinus, FiPlus } from "react-icons/fi";
import { useState } from "react";
import { AppointmentHistoryCardStyled } from "./AppointmentHistoryCard.styled";
import moment from "moment";
import { checkIsMobile, formatStatus } from "@/lib/common";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import { useDispatch } from "react-redux";
import { getPrescriptionDataAPI } from "@/redux/slices/prescription/prescriptionService";
import toast from "react-hot-toast";
import { PDFViewer } from "@react-pdf/renderer";
import PrescriptionPdfDocument from "../../components/pdf/PrescriptionPdfDocument";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";

const AppointmentHistoryCard = ({ prescriptions }: any) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const dispatch = useDispatch() as any;
  const [previewData, setPreviewData] = useState(null) as any;
  const [preview, setPreview] = useState(false);

  const handleComplete = async (id: any) => {
    try {
      const res = (await dispatch(getPrescriptionDataAPI(id))) as any;
      if (res?.error) {
        toast.error(res?.error?.message || "Unknown Error Occured");
        return;
      }
      setPreviewData(res?.payload);
      setPreview(true);
    } catch (error) {
      toast.error("unknown error occured");
    }
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (checkIsMobile()) {
    return (
      <AppointmentHistoryCardStyled>
        <div className="appointments">
          {prescriptions?.length === 0 && (
            <div className="flex items-center justify-center min-h-[200px] w-full rounded-lg border-2  border-gray-300 bg-gray-50">
              <div className="text-center">
                <p className="mt-1 text-sm text-gray-400">
                  No appointment is available
                </p>
              </div>
            </div>
          )}
          {prescriptions?.map?.((appointment: any, index: number) => (
            <div key={index} className="appointment-card">
              <div className="summary">
                <div className="left-panel grow-1 overflow-auto">
                  <div className="date-box">
                    <span className="date">
                      {moment(
                        appointment?.collection_1_date,
                        "DD/MM/YYYY"
                      ).isValid()
                        ? moment(
                            appointment?.collection_1_date,
                            "DD/MM/YYYY"
                          ).format("DD")
                        : "N/A"}
                    </span>
                    <span className="month">
                      {moment(
                        appointment?.collection_1_date,
                        "DD/MM/YYYY"
                      ).isValid()
                        ? moment(
                            appointment?.collection_1_date,
                            "DD/MM/YYYY"
                          ).format("MMM")
                        : "N/A"}
                    </span>
                  </div>
                  <div className="overflow-auto">
                    <h5 className="symptoms-text">
                      {appointment?.attachments?.[0]?.symptoms}
                    </h5>
                    <h6 className="appointment-type">
                      {formatStatus(appointment?.type)}
                    </h6>
                  </div>
                </div>
                <span>
                  {appointment?.attachments?.[0]?.length > 0 && (
                    <SecoundaryButton
                      className="view-rx-btn "
                      onClick={() => handleComplete(appointment?.id)}
                    >
                      View Rx
                    </SecoundaryButton>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
        {preview && (
          <CustomModal
            open={preview}
            title="Prescription Preview"
            handleClose={() => setPreview(false)}
          >
            <CustomModal.Body>
              <PDFViewer style={{ width: "100%", height: "500px" }}>
                <PrescriptionPdfDocument data={previewData} />
              </PDFViewer>
            </CustomModal.Body>
          </CustomModal>
        )}
      </AppointmentHistoryCardStyled>
    );
  }

  return (
    <AppointmentHistoryCardStyled>
      <div className="appointments">
        {prescriptions?.length === 0 && (
          <div className="flex items-center justify-center min-h-[200px] w-full rounded-lg border-2  border-gray-300 bg-gray-50">
            <div className="text-center">
              <p className="mt-1 text-sm text-gray-400">
                No appointment is available
              </p>
            </div>
          </div>
        )}
        {prescriptions?.map?.((appointment: any, index: number) => (
          <div key={index} className="appointment-card">
            <div className="summary">
              <div className="left-panel">
                <div className="date-box">
                  <span className="date">
                    {moment(
                      appointment?.collection_1_date,
                      "DD/MM/YYYY"
                    ).format("DD")}
                  </span>
                  <span className="month">
                    {moment(
                      appointment?.collection_1_date,
                      "DD/MM/YYYY"
                    ).format("MMM")}
                  </span>
                </div>
                <h3>{formatStatus(appointment?.type)}</h3>
              </div>
              {expandedIndex !== index && (
                <div className="details">
                  <div className="info">
                    <strong>Diagnosis:</strong>
                    <ul>
                      {appointment?.attachments?.[0]?.symptoms ? (
                        appointment?.attachments?.[0]?.symptoms
                          ?.split(",")
                          ?.slice(0, 3)
                          ?.map((diag: any, i: number) => (
                            <li key={i} style={{ listStyleType: "disc" }}>
                              {diag}
                            </li>
                          ))
                      ) : (
                        <li style={{ listStyleType: "disc" }}>
                          No diagnosis added
                        </li>
                      )}
                    </ul>
                    {appointment?.attachments?.[0]?.symptoms?.split(",")
                      ?.length > 3 && (
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleExpand(index)}
                      >
                        +
                        {appointment?.attachments?.[0]?.symptoms?.split(",")
                          ?.length - 3}{" "}
                        more
                      </span>
                    )}
                  </div>
                  <div className="info">
                    <strong>Lab Test:</strong>
                    <ul>
                      {appointment?.attachments?.[0]?.prescriptions_tests
                        ?.length > 0 ? (
                        appointment?.attachments?.[0]?.prescriptions_tests
                          ?.slice(0, 3)
                          ?.map((test: any, i: number) => (
                            <li key={i} style={{ listStyleType: "disc" }}>
                              {test?.test?.service_name}
                            </li>
                          ))
                      ) : (
                        <li style={{ listStyleType: "disc" }}>
                          No tests added
                        </li>
                      )}
                    </ul>
                    {appointment?.attachments?.[0]?.prescriptions_tests
                      ?.length > 3 && (
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleExpand(index)}
                      >
                        +
                        {appointment?.attachments?.[0]?.prescriptions_tests
                          ?.length - 3}{" "}
                        more
                      </span>
                    )}
                  </div>
                  <div className="info">
                    <strong>Medicine:</strong>
                    <ul>
                      {appointment?.attachments?.[0]?.prescriptions_medicines
                        ?.length > 0 ? (
                        appointment?.attachments?.[0]?.prescriptions_medicines
                          ?.slice(0, 3)
                          ?.map((med: any, i: number) => (
                            <li key={i} style={{ listStyleType: "disc" }}>
                              {med?.medicine?.service_name}
                            </li>
                          ))
                      ) : (
                        <li style={{ listStyleType: "disc" }}>
                          No medicines added
                        </li>
                      )}
                    </ul>
                    {appointment?.attachments?.[0]?.prescriptions_medicines
                      ?.length > 3 && (
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleExpand(index)}
                      >
                        +
                        {appointment?.attachments?.[0]?.prescriptions_medicines
                          ?.length - 3}{" "}
                        more
                      </span>
                    )}
                  </div>
                </div>
              )}

              {expandedIndex === index && (
                <div className="detail">
                  <div className="extra-details">
                    {/* <div className="first-detail">
                      <p>
                        <strong>Height:</strong>{" "}
                        {appointment.expandedDetails.height}{" "}
                      </p>

                      <p>
                        <strong>Weight:</strong>{" "}
                        {appointment.expandedDetails.weight}{" "}
                      </p>

                      <p>
                        <strong>BP:</strong> {appointment.expandedDetails.bp}
                      </p>
                    </div> */}
                    <div className="flex flex-wrap gap-2 !mb-1">
                      {appointment?.attachments?.[0]?.vitals?.map?.(
                        (item: any) => {
                          return (
                            <span className="capitalize">
                              <b>{item?.type}</b> :{" "}
                              {`${item?.value} ${item?.unit}`}
                            </span>
                          );
                        }
                      )}
                    </div>
                    <p className="m-0 capitalize">
                      Diagnosis :{" "}
                      {appointment?.attachments?.[0]?.symptoms ||
                        "No diagnosis added"}
                    </p>
                  </div>
                </div>
              )}

              <div className="plus-button">
                <button
                  className="expand-btn"
                  onClick={() => toggleExpand(index)}
                >
                  {expandedIndex === index ? <FiMinus /> : <FiPlus />}
                </button>
              </div>
            </div>

            {expandedIndex === index && (
              <div className="expanded-section">
                <table className="table-1">
                  <thead>
                    <tr className="table-header">
                      <th>#</th>
                      <th>Test Required</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointment?.attachments?.[0]?.prescriptions_tests
                      ?.length > 0 ? (
                      appointment?.attachments?.[0]?.prescriptions_tests?.map(
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
                        <td
                          colSpan={3}
                          className="text-center"
                          style={{ listStyleType: "disc" }}
                        >
                          No tests added
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                <table className="table-2">
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
                    {appointment?.attachments?.[0]?.prescriptions_medicines
                      ?.length > 0 ? (
                      appointment?.attachments?.[0]?.prescriptions_medicines?.map(
                        (med: any, i: number) => (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{med?.medicine?.service_name}</td>
                            <td>
                              {med?.medicine?.category_key === "wellness"
                                ? "N/A"
                                : med?.frequency}
                            </td>
                            <td>
                              {med?.medicine?.category_key === "wellness"
                                ? "N/A"
                                : formatStatus(med?.intake)}
                            </td>
                            <td>
                              {moment(med?.start_date).format("DD-MM-YYYY")}
                            </td>
                            <td>{med?.no_of_days} days</td>
                          </tr>
                        )
                      )
                    ) : (
                      <tr>
                        <td
                          colSpan={6}
                          className="text-center"
                          style={{ listStyleType: "disc" }}
                        >
                          No medicines added
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                <div className="advice">
                  <p className="p1">Advice</p>
                  <p className="p2">
                    {appointment?.attachments?.[0]?.note ?? "N/A"}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </AppointmentHistoryCardStyled>
  );
};

export default AppointmentHistoryCard;
