import { formatStatus } from "@/lib/common";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useState, useRef, useEffect, useMemo } from "react";

// Define a simple media query hook inline to avoid import issues
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

const DateRender = (props: {
  bookings?: Array<any>;
  current: Dayjs;
  loading: boolean;
  handleShowMore: (data: any) => void;
  mode: string;
  handleBookingDetailsModalOpen: (booking: any) => void;
  leaves?: Array<any>;
}) => {
  const {
    bookings,
    current,
    handleShowMore,
    mode,
    handleBookingDetailsModalOpen,
    leaves,
  } = props;
  const [visibleBookings, setVisibleBookings] = useState<any[]>([]);
  const [remainingCount, setRemainingCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemsToShow, setItemsToShow] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const today = useMemo(() => dayjs(), []);
  const isToday = useMemo(
    () => current.format("YYYY-MM-DD") === today.format("YYYY-MM-DD"),
    [current, today]
  );

  const bgColor = (() => {
    if (leaves) {
      if (leaves?.length > 0 && mode === "month") {
        return "bg-[#F3E1EA]";
      }
    }
    if (bookings) {
      if (bookings?.length > 0) {
        return "bg-[#e9f2fd]";
      }
    }
    return "";
  })();

  useEffect(() => {
    if (!bookings?.length || !containerRef.current) return;

    const calculateVisibleBookings = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerHeight = container.clientHeight;
      const itemHeight = 30; // Approximate height of a booking item (25px + margins)
      const maxItems = Math.floor(containerHeight / itemHeight);

      // Show at least one booking even if container is small
      const itemsToShow = Math.max(1, maxItems);
      setItemsToShow(itemsToShow);

      setVisibleBookings(bookings.slice(0, itemsToShow));
      setRemainingCount(Math.max(0, bookings.length - itemsToShow));
    };

    calculateVisibleBookings();

    // Recalculate on window resize
    window.addEventListener("resize", calculateVisibleBookings);
    return () => window.removeEventListener("resize", calculateVisibleBookings);
  }, [bookings]);

  // Mobile view rendering
  if (isMobile && mode === "month") {
    return (
      <div
        className={`mobile-date-cell ${
          leaves && leaves?.length > 0 ? "has-leaves" : ""
        } ${bookings && bookings?.length > 0 ? "has-bookings" : ""}`}
      >
        <div className={`date-indicator ${isToday ? "current-date" : ""}`}>
          {current.date()}
        </div>

        <div className="badge-container">
          {bookings?.slice(0, 2).map((booking, index) => (
            <div
              key={booking?.id || index}
              onClick={(e) => {
                e.stopPropagation();
                handleBookingDetailsModalOpen(booking);
              }}
              className={`badge-pill ${
                booking?.status === "completed"
                  ? "bg-green-200"
                  : "bg-[#FFDA85]"
              }`}
            >
              {booking?.user?.first_name
                ? `${booking?.user?.first_name?.substring(0, 6)}${
                    booking?.user?.first_name?.length > 6 ? "..." : ""
                  }`
                : booking?.type || "Stand"}
            </div>
          ))}

          {/* {leaves?.slice(0, 1).map((leave, index) => (
            <div key={leave?.id || index} className="badge-pill bg-[#92bdf6]">
              {leave?.type === "online"
                ? "Anjana-Onl"
                : `${formatStatus(leave?.type)?.substring(0, 6)}${
                    formatStatus(leave?.type)?.length > 6 ? "..." : ""
                  }`}
            </div>
          ))} */}

          {/* {(bookings?.length > 2 || leaves?.length > 1) && ( */}
          {bookings && bookings?.length > 2 && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleShowMore({
                  data: { bookings, leaves },
                  type: leaves && leaves?.length > 0 ? "leave" : "booking",
                  title: current.format("DD MMMM YYYY"),
                  position: {
                    top: `${e.currentTarget.getBoundingClientRect().top}`,
                    left: `${e.currentTarget.getBoundingClientRect().right}`,
                  },
                });
              }}
              className="text-[10px] text-black font-medium underline cursor-pointer text-center"
            >
              +{bookings?.length - 2} more
            </div>
          )}
        </div>
      </div>
    );
  }

  // Desktop view rendering (original)
  return (
    <div
      className={`h-[140px] max-h-[140px] overflow-hidden flex flex-col cursor-default rounded-md p-1 ${bgColor}`}
    >
      <div>
        <div className="text-[1rem] text-black">
          {mode === "year" ? current.format("MMMM") : current.date()}
        </div>
      </div>
      {leaves && leaves?.length > 0 && mode === "month" ? (
        <>
          <div className="flex justify-around items-center h-full flex-col">
            <img
              className="w-[36px] h-[36px]"
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1745576627643.png"
              alt="vacation_pic"
            />
            <p className="text-black font-medium">On Vacation</p>
          </div>
        </>
      ) : (
        <>
          {bookings && bookings?.length > 0 ? (
            <div
              ref={containerRef}
              className="w-full grow-1 px-2 py-1 overflow-hidden"
            >
              {visibleBookings.map((booking) => {
                return (
                  <div
                    key={booking?.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookingDetailsModalOpen(booking);
                    }}
                    className={`${
                      booking?.status == "completed"
                        ? "bg-green-200"
                        : "bg-[#92bdf6]"
                    } max-w-[100%] truncate text-[12px] font-medium capitalize px-2 rounded-2xl my-[5px] inline-block cursor-pointer`}
                  >
                    {`${booking?.user?.first_name ?? ""} ${
                      booking?.user?.last_name ?? ""
                    }`}
                  </div>
                );
              })}
              {remainingCount > 0 && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShowMore({
                      data: { bookings },
                      type: "booking",
                      title: current.format("DD MMMM YYYY"),
                      position: {
                        top: `${e.currentTarget.getBoundingClientRect().top}`,
                        left: `${
                          e.currentTarget.getBoundingClientRect().right
                        }`,
                      },
                    });
                  }}
                  className="text-[12px] text-black font-medium mt-1 underline cursor-pointer"
                >
                  +{remainingCount} more booking
                  {remainingCount !== 1 ? "s" : ""}
                </div>
              )}
            </div>
          ) : (
            <div>No bookings</div>
          )}
          {leaves && leaves?.length > 0 && mode === "year" && (
            <div
              ref={containerRef}
              className="w-full grow-1 px-2 py-1 overflow-hidden"
            >
              {leaves?.slice(0, itemsToShow).map((leave) => {
                return (
                  <div
                    key={leave?.id}
                    className="bg-[#E7C2D4] max-w-[100%] truncate text-[12px] font-medium capitalize px-2 rounded-2xl my-[5px] inline-block cursor-pointer"
                  >
                    {`${formatStatus(leave?.type)} leave ${
                      leave?.reason ? "(" + leave?.reason + ")" : ""
                    }`}
                  </div>
                );
              })}
              {Math.max(0, leaves?.length - itemsToShow) > 0 && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShowMore({
                      data: { leaves },
                      type: "leave",
                      title: current.format("DD MMMM YYYY"),
                      position: {
                        top: `${e.currentTarget.getBoundingClientRect().top}`,
                        left: `${
                          e.currentTarget.getBoundingClientRect().right
                        }`,
                      },
                    });
                  }}
                  className="text-[12px] text-black font-medium mt-1 underline cursor-pointer"
                >
                  +{Math.max(0, leaves?.length - itemsToShow)} more leaves
                  {remainingCount !== 1 ? "s" : ""}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DateRender;
