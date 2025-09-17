import moment from "moment";
import { DownloadFormStyled } from "./DownloadForm.styled";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { Col, Form, Row } from "react-bootstrap";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import { SERVER_IP } from "@/lib/config";
import { getToken } from "@/lib/helpers";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import toast from "react-hot-toast";
import { utils } from "xlsx";
import { useDispatch } from "react-redux";
import {
  getClientOrdersAPI,
  getClientOrdersWithoutStateAPI,
} from "@/redux/slices/orders/orderService";

interface DownloadFormProps {
  closeForm: () => void;
  sectionType: "bookings" | "orders";
  dateFilter?:boolean
}

interface Duration {
  name: string;
  duration: {
    startDate: (() => string) | null;
    endDate: (() => string) | null;
  };
}

interface TypeConfig {
  [key: string]:
    | { url: string; body: any; handleDownload?: never }
    | { handleDownload: () => Promise<any>; url?: never; body?: never };
}

const DownloadForm: React.FC<DownloadFormProps> = ({
  closeForm,
  sectionType,
}) => {
  const dispatch = useDispatch();
  const { linkableId } = useClientLinkableId();
  const [selectedDuration, setSelectedDuration] = useState<Duration | null>({
    name: "1 Week",
    duration: {
      startDate: () => moment().subtract(7, "days").format("YYYY-MM-DD"),
      endDate: () => moment().format("YYYY-MM-DD"),
    },
  });
  const [dateType, setDateType] = useState<"scheduled" | "created">(
    "scheduled"
  );
  const [isDownloading, setIsDownloading] = useState(false);

  const type: TypeConfig = {
    bookings: {
      url: "/api/v1/booking/download-bookings",
      body: {
        filters: {
          from: "hr",
          clientId: linkableId,
          dateRange: {
            from: selectedDuration?.duration?.startDate?.(),
            to: selectedDuration?.duration?.endDate?.(),
            dateType: dateType,
          },
        },
      },
    },
    orders: {
      handleDownload: async () => {
        try {
          const response = (await dispatch(
            getClientOrdersWithoutStateAPI({
              page: 0,
              count: 1000,
              searchText: "",
            })
          )) as any;
          if (response?.error) {
            toast.error(response?.error?.message || "Unknown Error Occured");
            return;
          }
          return response.payload.data?.clientOrders?.map((item: any) => {
            return {
              collection_1_date: item?.collection_1_date
                ? moment(Number(item?.collection_1_date)).format("YYYY-MM-DD")
                : "N/A",
              collection_1_slot: item?.collection_1_slot
                ? moment(Number(item?.collection_1_slot)).format("YYYY-MM-DD")
                : "N/A",
              final_amount: item?.final_amount,
              id: item?.id,
              invoice_date: item?.invoice_date
                ? moment(Number(item?.invoice_date)).format("YYYY-MM-DD")
                : "N/A",
              status: item?.status,
              bookings_count: item?.bookings_count,
              created_at: item?.created_at
                ? moment(Number(item?.created_at)).format("YYYY-MM-DD")
                : "N/A",
              clientId: item?.client?.id,
            };
          });
        } catch (error) {
          throw new Error("Failed to download file");
        }
      },
    },
  };

  const durations: Duration[] = [
    {
      name: "1 Week",
      duration: {
        startDate: () => moment().subtract(7, "days").format("YYYY-MM-DD"),
        endDate: () => moment().format("YYYY-MM-DD"),
      },
    },
    {
      name: "2 Week",
      duration: {
        startDate: () => moment().subtract(14, "days").format("YYYY-MM-DD"),
        endDate: () => moment().format("YYYY-MM-DD"),
      },
    },
    {
      name: "1 Month",
      duration: {
        startDate: () => moment().subtract(1, "months").format("YYYY-MM-DD"),
        endDate: () => moment().format("YYYY-MM-DD"),
      },
    },
    {
      name: "3 Months",
      duration: {
        startDate: () => moment().subtract(3, "months").format("YYYY-MM-DD"),
        endDate: () => moment().format("YYYY-MM-DD"),
      },
    },
    {
      name: "6 Months",
      duration: {
        startDate: () => moment().subtract(6, "months").format("YYYY-MM-DD"),
        endDate: () => moment().format("YYYY-MM-DD"),
      },
    },
    {
      name: "9 Months",
      duration: {
        startDate: () => moment().subtract(9, "months").format("YYYY-MM-DD"),
        endDate: () => moment().format("YYYY-MM-DD"),
      },
    },
  ];

  const handleExportCSV = (data: any[]) => {
    const worksheet = utils.json_to_sheet(data);
    const csv = utils.sheet_to_csv(worksheet);

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "client_orders.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCheckboxChange = (duration: Duration) => {
    setSelectedDuration((prev) => {
      if (prev?.name === duration?.name) {
        return null;
      } else {
        return duration;
      }
    });
  };

  const onDownloadExcell = async () => {
    try {
      const typeConfig = type[sectionType];

      if (!typeConfig) {
        toast.error(`${sectionType} feature not implemented`);
        return;
      }

      setIsDownloading(true);

      if ("handleDownload" in typeConfig && typeConfig.handleDownload) {
        const data = await typeConfig.handleDownload();
        handleExportCSV(data);
        return;
      } else if (
        "url" in typeConfig &&
        "body" in typeConfig &&
        typeConfig.url &&
        typeConfig.body
      ) {
        const response = await fetch(`${SERVER_IP}${typeConfig.url}`, {
          method: "POST",
          body: JSON.stringify(typeConfig.body),
          headers: {
            Accept: "text/csv",
            "Content-Type": "application/json",
            authorization: "Bearer " + getToken(),
          },
        });

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "data.csv"; // Set file name
        document.body.appendChild(a);
        a.click();

        // Clean up
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        toast.error(`${sectionType} feature not implemented`);
      }
    } catch (error) {
      toast.error("Failed to download file");
      console.error(error);
    } finally {
      setIsDownloading(false);
    }
  };

  console.log(selectedDuration);
  return (
    <DownloadFormStyled>
      <div className="download">
        <div className="download-header">
          <h3>Choose Duration</h3>
          <button
            className="close-btn"
            disabled={isDownloading}
            onClick={closeForm}
          >
            <MdCancel size={22} />
          </button>
        </div>

        <div className="options">
          {durations.map((duration) => (
            <label key={duration?.name} className="checkbox-label">
              <input
                type="checkbox"
                checked={selectedDuration?.name === duration?.name}
                onChange={() => handleCheckboxChange(duration)}
              />
              {duration?.name}
            </label>
          ))}
        </div>

        <div className="or">
          <p>OR</p>
        </div>

        <div className="custom-date">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={selectedDuration?.name === "custom date"}
              onChange={() =>
                setSelectedDuration((prev) => {
                  if (prev?.name === "custom date") {
                    return null;
                  } else {
                    return {
                      name: "custom date",
                      duration: { startDate: null, endDate: null },
                    };
                  }
                })
              }
            />
            Customize Date
          </label>
        </div>

        <div className="sort-by-radio">
          <p>Sort by</p>
          <label>
            <input
              type="radio"
              value="scheduled"
              checked={dateType === "scheduled"}
              onChange={() => setDateType("scheduled")}
            />
            Scheduled
          </label>
          <label>
            <input
              type="radio"
              value="created"
              checked={dateType === "created"}
              onChange={() => setDateType("created")}
            />
            Created
          </label>
        </div>
        {selectedDuration?.name === "custom date" && (
          <Row>
            <Col>
              <Form.Group controlId="formBasicstartDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                    const target = e.target as HTMLInputElement & {
                      showPicker?: () => void;
                    };
                    target.showPicker?.();
                  }}
                  placeholder="Start Date"
                  max={moment().format("YYYY-MM-DD")}
                  onChange={(e) => {
                    const selectedStartDate = () =>
                      moment(e.target.value).format("YYYY-MM-DD");
                    setSelectedDuration((prev) => {
                      if (!prev) return null;
                      return {
                        ...prev,
                        duration: {
                          ...prev.duration,
                          startDate: selectedStartDate,
                          endDate:
                            prev.duration.endDate &&
                            prev.duration.endDate() < selectedStartDate()
                              ? selectedStartDate
                              : prev.duration.endDate,
                        },
                      };
                    });
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicendDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="End Date"
                  onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                    const target = e.target as HTMLInputElement & {
                      showPicker?: () => void;
                    };
                    target.showPicker?.();
                  }}
                  max={moment().format("YYYY-MM-DD")}
                  min={selectedDuration?.duration?.startDate?.() || ""}
                  onChange={(e) => {
                    const selectedEndDate = () =>
                      moment(e.target.value).format("YYYY-MM-DD");
                    setSelectedDuration((prev) => {
                      if (!prev) return null;
                      return {
                        ...prev,
                        duration: {
                          ...prev.duration,
                          endDate: selectedEndDate,
                        },
                      };
                    });
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        )}

        <PrimaryButton
          onClick={onDownloadExcell}
          disabled={
            !selectedDuration?.duration?.startDate ||
            !selectedDuration?.duration?.endDate ||
            isDownloading
          }
        >
          Download Excel
        </PrimaryButton>
      </div>
    </DownloadFormStyled>
  );
};

export default DownloadForm;
