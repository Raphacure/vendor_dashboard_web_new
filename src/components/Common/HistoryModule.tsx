import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getVendorHistoryByIdAPI } from "@/redux/slices/vendor/vendorService";
import { HistoryModuleStyled } from "./HistoryModule.styled";

interface HistoryItem {
  id: number;
  original_value: Record<string, any>;
  updated_value: any;
  updated_by: number;
  created_at: string;
  updated_at: string;
  linkable_id: string;
  linkable_type: string;
}

const HistoryModule = ({
  vendorId,
  section_name,
}: {
  vendorId: any;
  section_name: string;
}) => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch() as any;

  useEffect(() => {
    const getVendorHistory = async () => {
      if (!vendorId) return;

      setLoading(true);
      const res: any = await dispatch(
        getVendorHistoryByIdAPI({ id: vendorId, section_name: section_name })
      );
      if (res?.payload?.data?.history) {
        setHistory(res.payload.data.history);
      }
      setLoading(false);
    };

    getVendorHistory();
  }, [dispatch, vendorId]);

  useEffect(() => {
    console.log("history : ", history);
  }, [history, section_name]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Function to find changes between original and updated values
  const findChanges = (og: Record<string, any>, up: Record<string, any>) => {
    const changes: { field: string; oldValue: any; newValue: any }[] = [];

    const helper = (updated: any, original: any) => {
      // Check all keys in updat,ed_value
      Object.keys(updated).forEach((key) => {
        if (JSON.stringify(original[key]) !== JSON.stringify(updated[key])) {
          changes.push({
            field: key,
            oldValue: original[key],
            newValue: updated[key],
          });
        }
      });
    };

    if (Array.isArray(up)) {
      up?.map((item, i: any) => {
        helper(item, og?.[i] ?? {});
      });
    } else {
      helper(up, og);
    }
    return changes;
  };

  // Function to render field names in a more readable format
  const formatFieldName = (fieldName: string) => {
    return fieldName
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Format values for display
  const formatValue = (value: any) => {
    if (value === null || value === undefined) return "—";
    if (typeof value === "object") return JSON.stringify(value);
    return String(value);
  };

  if (loading) {
    return (
      <HistoryModuleStyled>
        <div className="loading">Loading {section_name} history...</div>
      </HistoryModuleStyled>
    );
  }

  if (history.length === 0) {
    return (
      <HistoryModuleStyled>
        <div className="no-history">
          No change history found for this {section_name}.
        </div>
      </HistoryModuleStyled>
    );
  }
  console.log(history, "history");

  return (
    <HistoryModuleStyled>
      <h2 className="text-capitalize">{section_name} Change History</h2>

      <div className="history-timeline">
        {history.map((item, index) => {
          let changes = null;
          if (Array.isArray(item.updated_value)) {
            changes = findChanges(
              item.original_value ?? [],
              item.updated_value ?? []
            );
          } else {
            changes = findChanges(
              item.original_value ?? {},
              item.updated_value ?? {}
            );
          }
          return (
            <div key={item?.id} className="history-item">
              <div className="history-header">
                <div className="timestamp">
                  <i className="icon-calendar"></i>{" "}
                  {formatDate(item?.created_at)}
                </div>
                <div className="history-meta">
                  <span className="update-by">
                    Updated by User ID: {item?.updated_by}
                  </span>
                </div>
              </div>

              <div className="changes-container">
                <div className="changes-count">
                  {changes.length} {changes.length === 1 ? "field" : "fields"}{" "}
                  changed
                </div>

                <table className="changes-table">
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Previous Value</th>
                      <th>New Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {changes?.map((change, changeIndex) => (
                      <tr
                        key={changeIndex}
                        className={changeIndex % 2 === 0 ? "even" : "odd"}
                      >
                        <td className="field-name">
                          {formatFieldName(change?.field)}
                        </td>
                        <td className="old-value">
                          {formatValue(change?.oldValue)}
                        </td>
                        <td className="new-value">
                          {formatValue(change?.newValue)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </HistoryModuleStyled>
  );
};

export default HistoryModule;
