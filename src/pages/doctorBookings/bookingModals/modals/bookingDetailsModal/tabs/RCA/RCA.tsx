import { FaComments, FaUser } from "react-icons/fa";

const BookingRCS = ({ additionalInfo = {} }: any) => {
  const { bookingComments } = additionalInfo || {};
  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "appointment_booked":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return (
    <div className="communication-card">
      <div className="card-header">
        <h3>
          <FaComments style={{ marginRight: "8px" }} />
          Booking Comments
        </h3>
      </div>

      <div className="card-content">
        {(bookingComments?.length ?? 0) > 0 ? (
          <div className="comments-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                {(bookingComments ?? []).map((log: any, index: number) => (
                  <tr key={index}>
                    <td>
                      <div className="user-info">
                        <FaUser />
                        {`${log?.user?.first_name || ""} ${
                          log?.user?.last_name || ""
                        }`.trim() || "Unknown"}
                      </div>
                    </td>
                    <td>
                      <span
                        className={`status-tag ${getStatusColor(
                          log?.additional_info?.status || ""
                        )}`}
                      >
                        {log?.additional_info?.status?.replaceAll("_", " ") ||
                          "N/A"}
                      </span>
                    </td>
                    <td>{new Date(log?.created_at).toLocaleString()}</td>
                    <td>{log?.comment || "No comment"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no-data">
            <p>No Communication Logs Available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingRCS;
